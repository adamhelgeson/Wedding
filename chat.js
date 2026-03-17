/* =========================================
   Wedding Chat Widget
   Estefania & Adam · Fall 2027
   ========================================= */

(function () {
  var CHAT_URL = 'https://script.google.com/macros/s/AKfycbxjOTivA57uMGwZml7A-mKrHHSyle_mTCkSk7LQ7ZKsakYRN5ZAV-ss0IL2isrmUcb4cw/exec';
  var POLL_INTERVAL  = 5000;   // ms while open
  var BG_POLL        = 30000;  // ms while closed (badge updates)
  var MAX_MESSAGES   = 50;
  var CHAR_WARN      = 150;
  var MAX_CHARS      = 200;

  var isOpen       = false;
  var unreadCount  = 0;
  var pollTimer    = null;
  var bgPollTimer  = null;
  var allMessages  = [];  // last known server snapshot

  /* ---- i18n helper ---- */
  function tr(key, fallback) {
    var lang = localStorage.getItem('preferredLanguage') || 'en';
    return (window.translations && window.translations[lang] && window.translations[lang][key])
      || fallback || key;
  }

  /* ---- Persistence ---- */
  function getUserName() { return localStorage.getItem('chatUserName') || ''; }

  /* ---- Utilities ---- */
  function escHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function formatTime(raw) {
    var d = new Date(raw);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  }

  /* ---- Badge ---- */
  function updateBadge() {
    var badge = document.getElementById('chat-unread-badge');
    if (!badge) return;
    if (unreadCount > 0) {
      badge.textContent = unreadCount > 9 ? '9+' : String(unreadCount);
      badge.style.display = 'flex';
    } else {
      badge.style.display = 'none';
    }
  }

  /* ---- Name prompt screen ---- */
  function showNamePrompt() {
    var prompt = document.getElementById('chat-name-prompt');
    var main   = document.getElementById('chat-main');
    if (!prompt || !main) return;
    prompt.style.display = 'flex';
    main.style.display   = 'none';

    prompt.innerHTML =
      '<div class="chat-name-inner">' +
        '<div class="chat-name-icon">💒</div>' +
        '<p class="chat-name-question">' + tr('chat_name_prompt', "What's your name?") + '</p>' +
        '<input type="text" id="chat-name-input" class="chat-name-input" maxlength="40" placeholder="Your name…" autocomplete="off" />' +
        '<button class="chat-join-btn" id="chat-join-btn">' + tr('chat_join', 'Join Chat') + '</button>' +
      '</div>';

    var inp = document.getElementById('chat-name-input');
    var btn = document.getElementById('chat-join-btn');
    if (inp) {
      setTimeout(function () { inp.focus(); }, 80);
      inp.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') commitName();
      });
    }
    if (btn) btn.addEventListener('click', commitName);
  }

  function commitName() {
    var inp  = document.getElementById('chat-name-input');
    if (!inp) return;
    var name = inp.value.trim();
    if (!name) { inp.focus(); return; }
    localStorage.setItem('chatUserName', name);
    showChatMain();
    renderMessages(allMessages);
    startPolling();
  }

  /* ---- Main chat screen ---- */
  function showChatMain() {
    var prompt = document.getElementById('chat-name-prompt');
    var main   = document.getElementById('chat-main');
    if (!prompt || !main) return;
    prompt.style.display = 'none';
    main.style.display   = 'flex';

    var userBar = document.getElementById('chat-user-bar');
    if (userBar) {
      userBar.innerHTML =
        '<span class="chat-user-label">' +
          tr('chat_chatting_as', 'Chatting as') + ' <strong>' + escHtml(getUserName()) + '</strong>' +
          ' · <a href="#" class="chat-change-name" id="chat-change-name">' +
          tr('chat_not_you', 'not you? change') + '</a>' +
        '</span>';

      var changeLink = document.getElementById('chat-change-name');
      if (changeLink) {
        changeLink.addEventListener('click', function (e) {
          e.preventDefault();
          localStorage.removeItem('chatUserName');
          stopPolling();
          showNamePrompt();
        });
      }
    }

    // sync placeholder (may have been set before open)
    var inp = document.getElementById('chat-input');
    if (inp) inp.placeholder = tr('chat_placeholder', 'Type a message…');
  }

  /* ---- Render messages ---- */
  function renderMessages(msgs) {
    var container = document.getElementById('chat-messages');
    if (!container) return;

    var list = (msgs || []).slice(-MAX_MESSAGES);

    if (list.length === 0) {
      container.innerHTML = '<div class="chat-empty">' + tr('chat_empty', 'No messages yet — say hello! 👋') + '</div>';
      return;
    }

    var myName   = getUserName();
    var html     = '';
    var prevName = null;
    var prevDay  = null;

    list.forEach(function (msg) {
      // Date separator
      var d   = new Date(msg.date);
      var day = isNaN(d.getTime()) ? null : d.toDateString();
      if (day && day !== prevDay) {
        var today = new Date().toDateString();
        html += '<div class="chat-date-sep">' + (day === today ? 'Today' : d.toLocaleDateString([], { month: 'short', day: 'numeric' })) + '</div>';
        prevDay  = day;
        prevName = null; // reset grouping on date break
      }

      var isMe     = msg.name === myName;
      var showName = !isMe && msg.name !== prevName;

      html += '<div class="chat-msg-wrap ' + (isMe ? 'chat-msg-me' : 'chat-msg-them') + '">';
      if (showName) {
        html += '<div class="chat-msg-author">' + escHtml(msg.name) + '</div>';
      }
      html +=
        '<div class="chat-bubble">' +
          '<span class="chat-bubble-text">' + escHtml(msg.message) + '</span>' +
          '<span class="chat-bubble-time">' + formatTime(msg.date) + '</span>' +
        '</div>' +
      '</div>';

      prevName = msg.name;
    });

    var wasAtBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 40;
    container.innerHTML = html;
    if (wasAtBottom || msgs === allMessages) {
      container.scrollTop = container.scrollHeight;
    }
  }

  /* ---- Fetch messages ---- */
  function fetchMessages() {
    fetch(CHAT_URL)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (!Array.isArray(data)) return;

        var prevCount = allMessages.length;
        allMessages   = data;

        if (!isOpen && data.length > prevCount) {
          unreadCount += data.length - prevCount;
          updateBadge();
        }

        if (isOpen && getUserName()) {
          renderMessages(allMessages);
        }
      })
      .catch(function () {});
  }

  /* ---- Polling ---- */
  function startPolling() {
    stopPolling();
    fetchMessages();
    pollTimer = setInterval(fetchMessages, POLL_INTERVAL);
  }

  function stopPolling() {
    if (pollTimer) { clearInterval(pollTimer); pollTimer = null; }
  }

  /* ---- Sending ---- */
  function sendMessage() {
    var inp = document.getElementById('chat-input');
    if (!inp) return;
    var text = inp.value.trim();
    if (!text) return;
    var name = getUserName();
    if (!name) return;

    inp.value = '';
    updateCharCount('');

    // Optimistic render
    var optimistic = { date: new Date().toISOString(), name: name, message: text };
    allMessages.push(optimistic);
    renderMessages(allMessages);

    fetch(CHAT_URL, {
      method:  'POST',
      mode:    'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ name: name, message: text })
    }).catch(function () {});
  }

  function updateCharCount(val) {
    var counter = document.getElementById('chat-char-count');
    var sendBtn = document.getElementById('chat-send');
    if (counter) {
      if (val.length >= CHAR_WARN) {
        counter.textContent = val.length + '/' + MAX_CHARS;
        counter.style.display = 'block';
      } else {
        counter.style.display = 'none';
      }
    }
    if (sendBtn) sendBtn.disabled = (val.trim().length === 0);
  }

  /* ---- Open / Close / Toggle ---- */
  function openChat() {
    isOpen      = true;
    unreadCount = 0;
    updateBadge();

    var win = document.getElementById('chat-window');
    if (win) {
      win.classList.add('chat-open');
      win.setAttribute('aria-hidden', 'false');
    }
    var bubble = document.getElementById('chat-bubble');
    if (bubble) bubble.setAttribute('aria-expanded', 'true');

    if (getUserName()) {
      showChatMain();
      renderMessages(allMessages);
      startPolling();
    } else {
      showNamePrompt();
    }
  }

  function closeChat() {
    isOpen = false;
    stopPolling();

    var win = document.getElementById('chat-window');
    if (win) {
      win.classList.remove('chat-open');
      win.setAttribute('aria-hidden', 'true');
    }
    var bubble = document.getElementById('chat-bubble');
    if (bubble) bubble.setAttribute('aria-expanded', 'false');
  }

  function toggleChat() {
    if (isOpen) closeChat(); else openChat();
  }

  /* ---- Expose globally ---- */
  window.chatWidget = {
    open:   openChat,
    close:  closeChat,
    toggle: toggleChat,
    send:   sendMessage
  };

  /* ---- Hook into applyLanguage so dynamic chat text re-renders on language switch ---- */
  var _origApply = window.applyLanguage;
  window.applyLanguage = window.setLanguage = function (lang) {
    if (_origApply) _origApply(lang);
    if (isOpen) {
      if (getUserName()) showChatMain();
      else showNamePrompt();
    }
  };

  /* ---- Init on DOM ready ---- */
  document.addEventListener('DOMContentLoaded', function () {
    // Bubble click
    var bubble = document.getElementById('chat-bubble');
    if (bubble) bubble.addEventListener('click', toggleChat);

    // Close button
    var closeBtn = document.querySelector('.chat-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeChat);

    // Input events
    var inp = document.getElementById('chat-input');
    if (inp) {
      inp.addEventListener('input', function () { updateCharCount(this.value); });
      inp.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
      });
    }

    // Send button
    var sendBtn = document.getElementById('chat-send');
    if (sendBtn) sendBtn.addEventListener('click', sendMessage);

    // Init badge
    updateBadge();

    // Background poll for badge while chat is closed
    bgPollTimer = setInterval(function () {
      if (!isOpen) fetchMessages();
    }, BG_POLL);
  });
})();
