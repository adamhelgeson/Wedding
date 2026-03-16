/* =========================================
   Wedding Website - Shared JavaScript
   Estefania & Adam · Fall 2027
   ========================================= */

/* --- Navigation toggle (mobile) --- */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open);
    });

    // Close on link click (mobile)
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.classList.remove('open');
      });
    });
  }

  // Active nav link
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

/* --- Fade-in on scroll --- */
(function () {
  const items = document.querySelectorAll('.fade-in');
  if (!items.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(el => observer.observe(el));
})();

/* --- Countdown Timer --- */
(function () {
  const el = document.getElementById('countdown');
  if (!el) return;

  // Placeholder: October 15, 2027
  const target = new Date('2027-10-15T16:00:00');

  function update() {
    const now   = new Date();
    const diff  = target - now;

    if (diff <= 0) {
      el.innerHTML = '<p class="countdown-label" style="font-size:1.2rem;color:var(--rose)">The day has arrived!</p>';
      return;
    }

    const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = n => String(n).padStart(2, '0');

    el.innerHTML = `
      <div class="countdown-unit">
        <span class="countdown-number" id="cd-days">${days}</span>
        <span class="countdown-label" data-i18n="countdown_days">Days</span>
      </div>
      <span class="countdown-sep" aria-hidden="true">:</span>
      <div class="countdown-unit">
        <span class="countdown-number">${pad(hours)}</span>
        <span class="countdown-label" data-i18n="countdown_hours">Hours</span>
      </div>
      <span class="countdown-sep" aria-hidden="true">:</span>
      <div class="countdown-unit">
        <span class="countdown-number">${pad(minutes)}</span>
        <span class="countdown-label" data-i18n="countdown_minutes">Minutes</span>
      </div>
      <span class="countdown-sep" aria-hidden="true">:</span>
      <div class="countdown-unit">
        <span class="countdown-number">${pad(seconds)}</span>
        <span class="countdown-label" data-i18n="countdown_seconds">Seconds</span>
      </div>`;
  }

  update();

  // Re-apply language after each tick so labels stay translated
  const refreshLang = () => {
    const lang = localStorage.getItem('preferredLanguage') || 'en';
    if (window.TRANSLATIONS && window.TRANSLATIONS[lang]) {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (TRANSLATIONS[lang][key] !== undefined) el.textContent = TRANSLATIONS[lang][key];
      });
    }
  };
  setInterval(() => { update(); refreshLang(); }, 1000);
})();

/* --- Accordion (FAQ) --- */
(function () {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const accordion = header.parentElement;
      const isOpen    = accordion.classList.contains('open');

      // Close all
      document.querySelectorAll('.accordion').forEach(a => a.classList.remove('open'));

      // Toggle clicked
      if (!isOpen) accordion.classList.add('open');
    });
  });
})();

/* --- Email Validation --- */
(function () {
  function isValidEmail(val) {
    // No spaces, exactly one @, at least one char before @,
    // domain with at least one dot after @
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) && val.indexOf(' ') === -1;
  }

  function getOrCreateError(input) {
    let err = input.parentElement.querySelector('.email-error');
    if (!err) {
      err = document.createElement('span');
      err.className = 'email-error';
      err.setAttribute('role', 'alert');
      input.insertAdjacentElement('afterend', err);
    }
    return err;
  }

  function getOrCreateCheck(input) {
    let chk = input.parentElement.querySelector('.email-valid-check');
    if (!chk) {
      chk = document.createElement('span');
      chk.className = 'email-valid-check';
      chk.setAttribute('aria-hidden', 'true');
      chk.textContent = '✓';
      input.insertAdjacentElement('afterend', chk);
    }
    return chk;
  }

  function showEmailError(input) {
    input.classList.add('email-invalid');
    const err = getOrCreateError(input);
    err.textContent = 'Please enter a valid email address (e.g. name@example.com)';
    err.style.display = 'block';
    const chk = input.parentElement.querySelector('.email-valid-check');
    if (chk) chk.style.display = 'none';
    input.scrollIntoView({ behavior: 'smooth', block: 'center' });
    input.focus();
  }

  function clearEmailError(input) {
    input.classList.remove('email-invalid');
    const err = input.parentElement.querySelector('.email-error');
    if (err) err.style.display = 'none';
  }

  function showEmailValid(input) {
    clearEmailError(input);
    const chk = getOrCreateCheck(input);
    chk.style.display = 'block';
  }

  function hideEmailCheck(input) {
    const chk = input.parentElement.querySelector('.email-valid-check');
    if (chk) chk.style.display = 'none';
  }

  function attachEmailValidation(input) {
    if (!input) return;
    // Wrap the form-group so the checkmark can be absolutely positioned
    input.closest('.form-group').classList.add('email-wrap');

    input.addEventListener('blur', () => {
      const val = input.value.trim();
      if (val === '') { clearEmailError(input); hideEmailCheck(input); return; }
      if (isValidEmail(val)) {
        showEmailValid(input);
      } else {
        showEmailError(input);
      }
    });

    input.addEventListener('input', () => {
      clearEmailError(input);
      hideEmailCheck(input);
    });
  }

  // Expose for use in inline form submit handlers
  window.emailValidation = {
    isValid: isValidEmail,
    showError: showEmailError,
    clearError: clearEmailError,
  };

  // Auto-attach to all email inputs on the page
  document.querySelectorAll('input[type="email"]').forEach(attachEmailValidation);
})();

/* --- RSVP Form --- */
(function () {
  const form = document.getElementById('rsvp-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Sending…';

    // Simulate async submit
    setTimeout(() => {
      form.style.display = 'none';
      const msg = document.getElementById('rsvp-success');
      if (msg) msg.style.display = 'block';
    }, 1200);
  });
})();

/* --- Guestbook Form --- */
(function () {
  const form = document.getElementById('guestbook-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name    = form.querySelector('#gb-name').value.trim();
    const message = form.querySelector('#gb-message').value.trim();
    if (!name || !message) return;

    const container = document.getElementById('guestbook-entries');
    const now = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    const entry = document.createElement('div');
    entry.className = 'guestbook-entry fade-in';
    entry.innerHTML = `
      <p>${escapeHtml(message)}</p>
      <div class="guestbook-entry-author">${escapeHtml(name)}</div>
      <div class="guestbook-entry-date">${now}</div>`;

    container.prepend(entry);

    // Trigger animation
    requestAnimationFrame(() => {
      requestAnimationFrame(() => entry.classList.add('visible'));
    });

    form.reset();

    const msg = document.getElementById('guestbook-success');
    if (msg) {
      msg.style.display = 'block';
      setTimeout(() => { msg.style.display = 'none'; }, 4000);
    }
  });

  function escapeHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
})();

// ============================================
// LANGUAGE SYSTEM — runs on every page load
// ============================================
function applyLanguage(lang) {
  if (!window.translations || !window.translations[lang]) return;
  var t = window.translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // <option> elements need explicit textContent assignment (select/option special handling)
  document.querySelectorAll('option[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  document.querySelectorAll('[data-i18n-value]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-value');
    if (t[key] !== undefined) el.value = t[key];
  });

  // Registry: update toggle text respecting open/closed state
  document.querySelectorAll('.toggle-text').forEach(function(span) {
    var card = span.closest('.exp-card');
    var key = (card && card.classList.contains('open')) ? 'registry_show_less' : 'registry_learn_more';
    if (t[key] !== undefined) span.textContent = t[key];
  });

  // Registry: re-translate progress labels that have been filled in by JS
  var fundedOf    = t['registry_funded_of']    || 'of';
  var fundedLabel = t['registry_funded_label'] || 'funded';
  document.querySelectorAll('.progress-text[data-verified]').forEach(function(el) {
    var verified = parseFloat(el.dataset.verified);
    var goal     = parseFloat(el.dataset.goal);
    el.textContent = '$' + verified.toLocaleString() + ' ' + fundedOf + ' $' + goal.toLocaleString() + ' ' + fundedLabel;
  });

  localStorage.setItem('preferredLanguage', lang);
  document.documentElement.lang = lang;

  // Update toggle buttons by class (data-lang attribute)
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.toggle('lang-active', btn.getAttribute('data-lang') === lang);
  });

  // Also update by ID if present
  var enBtn = document.getElementById('lang-en');
  var esBtn = document.getElementById('lang-es');
  if (enBtn) enBtn.classList.toggle('lang-active', lang === 'en');
  if (esBtn) esBtn.classList.toggle('lang-active', lang === 'es');
}

// setLanguage is kept as an alias — all nav buttons use onclick="setLanguage('en')"
var setLanguage = applyLanguage;

/* --- Sub-nav section highlighting --- */
(function () {
  var subnav = document.querySelector('.page-subnav');
  if (!subnav) return;

  var links = Array.from(subnav.querySelectorAll('a[href^="#"]'));
  if (!links.length) return;

  var sectionIds = links.map(function (a) { return a.getAttribute('href').slice(1); });
  var sections   = sectionIds.map(function (id) { return document.getElementById(id); }).filter(Boolean);
  if (!sections.length) return;

  function setActive(id) {
    links.forEach(function (a) {
      a.classList.toggle('subnav-active', a.getAttribute('href') === '#' + id);
    });
  }

  // Activate first link on load
  setActive(sectionIds[0]);

  var visibleIds = {};

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      visibleIds[entry.target.id] = entry.isIntersecting;
    });

    // Find topmost section currently in the trigger zone
    var active = null;
    for (var i = 0; i < sections.length; i++) {
      if (visibleIds[sections[i].id]) { active = sections[i].id; break; }
    }

    // Fallback: last section scrolled past
    if (!active) {
      var scrollY = window.scrollY;
      var bestTop = -Infinity;
      active = sectionIds[0];
      sections.forEach(function (s) {
        var top = s.getBoundingClientRect().top + scrollY;
        if (top <= scrollY + 108 && top > bestTop) {
          bestTop = top;
          active  = s.id;
        }
      });
    }

    setActive(active);
  }, {
    // A section activates when it enters the top ~40% of the viewport.
    // rootMargin shrinks the observation area: ignore the bottom 55%.
    rootMargin: '-8% 0px -55% 0px',
    threshold: 0
  });

  sections.forEach(function (s) { observer.observe(s); });

  // Smooth scroll on click
  links.forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      var target = document.getElementById(a.getAttribute('href').slice(1));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();

// Run immediately on every page load — reads saved preference from localStorage
document.addEventListener('DOMContentLoaded', function() {
  var saved = localStorage.getItem('preferredLanguage');
  var browser = (navigator.language || navigator.userLanguage || 'en').substring(0, 2);
  var lang = (saved === 'en' || saved === 'es') ? saved : (browser === 'es' ? 'es' : 'en');
  applyLanguage(lang);
});
