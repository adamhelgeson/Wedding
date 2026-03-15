# Estefania & Adam Wedding Website

## Project Overview
A bilingual (English/Spanish) wedding website for Estefania Garduño
Hernández and Adam Helgeson. Wedding is Fall 2027 at Fiesta Americana
Hacienda Galindo Resort & Spa, San Juan del Río, Querétaro, Mexico.

Live URL: https://adamhelgeson.github.io/Wedding

## Tech Stack
- Pure HTML/CSS/JavaScript (no frameworks)
- Hosted on GitHub Pages (repo: github.com/adamhelgeson/Wedding)
- Google Apps Script for form backends
- Open-Meteo API for weather widget (no API key needed)
- Google Fonts: Cormorant Garamond (headings), Lato (body)

## Design System
- Forest Green: #2D5016
- Deep Forest (footer): #1A3009
- Gold: #a3844f (matches EA monogram logo)
- Ivory: #FAF7F2
- Warm White: #FDFBF8
- Monogram logo: monogram.svg (EA calligraphy, transparent background)

## Pages
- index.html — Homepage with hero, countdown, venue, quick links
- our-story.html — Love story timeline + Meet the Couple bios
- schedule.html — 3-day schedule (welcome evening, wedding day, morning after)
- gallery.html — Engagement photos + guest photo upload section
- registry.html — Japan honeymoon fund with experience cards
- rsvp.html — RSVP form connected to Google Sheets
- guestbook.html — Live guestbook with messages
- faq.html — FAQ accordion with all wedding details

## Google Sheets & Apps Script URLs
RSVP Sheet ID: 1VQNpAub4CShWOgjUGLdOrjoqUKkQIzh1Tuqw0y5i8zA
RSVP Script URL: https://script.google.com/macros/s/AKfycbxlKzMQ4ta_C-qeGhgX9_xF6M3OPLCMrUcq0HI_UzUlvN7wKy1YCc2BGgU5l8CRFC5o/exec

Honeymoon Fund Sheet ID: 19PI2-FIG2fbPYTyC0Ju3AZA4AhYVEFfMH99Yl9fXO1k
Honeymoon Fund Script URL: https://script.google.com/macros/s/AKfycbxy9HG8dtZW4Ab7dX6cIS_tQikekTXbPyKYLa7B0doJlITHINxiD1iaPF7g2O2rKU5E/exec

Guestbook Sheet ID: 1dsZ0skXfX7Xwh8e3Rxijn7IIOaQDuGWVo8qnuXDIYxI
Guestbook Script URL: https://script.google.com/macros/s/AKfycbzgRhSCmNVM4k6rXQGQ0_ylHAZGa6KC41HSV0B0SBUuxLT0Qam_bexYk8FO1FIcYaDH/exec

Wedding Summary Agent: script.google.com (separate Apps Script project)
- Reads all 3 sheets daily
- Sends digest email to adambhelgeson@gmail.com and estefania.garduno13@gmail.com
- Only sends if new rows exist since last run

## Payment Info (Registry)
- Venmo: https://venmo.com/Adam-Burt-6
- PayPal Adam: https://paypal.me/adamburt07
- PayPal Estefania: https://paypal.me/EstefaniaGarduno13

## Google Photos Albums
- Engagement photos (114 photos): https://photos.app.goo.gl/wgUp9zzkAhZKgVbE7
- Guest wedding photos upload: https://photos.app.goo.gl/DRJ4tR2YweUpVVPv9

## Photo Files (/photos folder)
In order they appear on gallery page:
1. Stillwater bridge in background engagement photo.jpg
2. charcuterie board engagement day photo.jpg
3. Proposal - Bridge with no ring.jpg
4. Downtown Engagement with ring - 2.jpg
5. Downtown Engagement with ring - 3.jpg
6. Engagement photos day after - kissing.jpg
7. Engagement photos day after - Showing ring.jpg
8. Ring Photo.jpg
9. Engagement photos day after - with nova.jpg

Our Story page photos:
- How We Met: photos/How we met - Microsoft-Teams-Logo.png (placeholder)
- Unofficial First Date: photos/Unofficial first date - Microsoft-Word-Logo.png (placeholder)
- First Date: photos/First Date - Cervecería Hércules.jpg
- Proposal: photos/Proposal - Bridge with no ring.jpg

## Bilingual System
- translations.js — all text in both EN and ES (window.translations)
- data-i18n attributes on all translatable HTML elements
- Language saved to localStorage as 'preferredLanguage'
- Auto-detects browser language on first visit
- EN/ES toggle in nav (id="lang-en" and id="lang-es")

## Key Wedding Details
- Venue: Fiesta Americana Hacienda Galindo Resort & Spa
- Address: Carretera Amealco Km 5.5, San Juan del Río, Qro., Mexico
- Google Maps: https://maps.google.com/?q=Fiesta+Americana+Hacienda+Galindo+Resort+%26+Spa,+Carretera+Amealco+Km+5.5,+San+Juan+del+Rio,+Queretaro,+Mexico
- Ceremony: The Terrace Le Château (outdoor, by vineyard)
- Cocktail Hour: Hacienda Courtyard (outdoor)
- Reception/Dinner/Dancing: The Terrace Le Château (outdoor)
- Airport: QRO only (shuttles day before and day after)
- Dress Code: Formal / Black Tie Optional
  - Ladies: floor-length gowns, no cocktail dresses, no red,
    no sequins, no white/ivory/cream
  - Gentlemen: dark suits or tuxedos
  - Clean dressy sneakers acceptable (outdoor venue)
  - Light wrap recommended (evening air)
- Children: not invited except nieces/nephews of couple only
- Registry: Honeymoon fund only (Japan trip)
- Seating: Assigned dinner seating

## Schedule Summary
DAY BEFORE:
- 6:00 PM Welcome Drinks — Hacienda Galindo
- 7:00 PM Welcome Dinner — Hacienda Galindo

WEDDING DAY:
- 9:00 AM Bridal/Groom Preparation
- 4:00 PM Wedding Ceremony — The Terrace Le Château
- 4:30 PM Cocktail Hour — Hacienda Courtyard
- 6:00 PM Reception Dinner — The Terrace Le Château (assigned seating)
- 7:30 PM First Dance & Toasts
- 8:00 PM Dancing & Celebration
- 12:00 AM Grand Farewell

MORNING AFTER:
- 10:00 AM El Desayuno (Post-Wedding Breakfast) — Hacienda Galindo

## Couple Info
- Estefania: Born Acámbaro, Guanajuato. Raised Querétaro, Mexico.
  Email: estefania.garduno13@gmail.com
  Dog: Bruno
- Adam: Born/raised Minnesota.
  Email: adambhelgeson@gmail.com
  Dog: Nova (female)
  Vikings season ticket holder since 2013

## Future Ideas

### Meet the Couple Photos
Replace the E and A initial placeholder circles in the "Meet the Couple"
section on our-story.html with real individual photos of Estefania and Adam.
- Photo should be circular (border-radius: 50%)
- Suggested size: 200px x 200px circular crop
- Gold border ring around each photo matching site style
- Fannie's photo filename suggestion: photos/estefania-portrait.jpg
- Adam's photo filename suggestion: photos/adam-portrait.jpg
- Add HTML comment above each placeholder:
  <!-- Replace with Estefania's individual portrait photo -->
  <!-- Replace with Adam's individual portrait photo -->

### Photo/GIF Investigation
Consider converting the Our Story photo placeholders and gallery
sections to support animated GIFs or CSS carousels so multiple
photos can be shown per section without cluttering the layout.
Options to explore:
- CSS-only carousel (no JS library needed)
- Animated GIF created from multiple photos
- JavaScript lightbox with auto-advance
- Simple prev/next arrow navigation per photo slot

### Per-Page Section Navigation
Add a thin sticky sub-navigation bar below the main nav on every page.
This bar shows anchor links to each major section on the current page.
Examples:
- schedule.html: Day Before | Wedding Day | Morning After | Dress Code | Weather
- our-story.html: How We Met | First Date | The Proposal | Meet the Couple
- faq.html: Travel | Venue | Dress Code | Gifts | Children | Transportation
- registry.html: Experiences | Make a Pledge
- gallery.html: Our Photos | Share Your Photos
Design: thin bar, small caps text, gold underline on active section,
updates automatically as user scrolls using IntersectionObserver.

## TODO / Pending
- Our Story "Planning Our Day" chapter — content TBD
- Our Story placeholder photos (Teams/Word logos) —
  waiting on real photos from Fannie
- Dress code inspiration photos — waiting on Fannie's mood boards
- Spanish translations — final review by Fannie needed
- Real wedding date — update countdown timer when confirmed
- Add Fannie's email to dress code inspiration HTML comments

## Google Apps Script Code

### 1. RSVP Script
Deployed at RSVP Script URL above. Accepts POST from rsvp.html form.

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.openById('1VQNpAub4CShWOgjUGLdOrjoqUKkQIzh1Tuqw0y5i8zA').getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.attending,
    data.guests,
    data.dietary,
    data.shuttle_before,
    data.shuttle_after,
    data.room,
    data.song,
    data.message,
    data.language
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### 2. Honeymoon Fund Script
Deployed at Honeymoon Fund Script URL above. Accepts POST (new contribution) and GET (fetch verified totals per experience).

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.openById('19PI2-FIG2fbPYTyC0Ju3AZA4AhYVEFfMH99Yl9fXO1k').getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.experience,
    data.amount,
    data.message,
    '' // col G: verified amount (filled in manually)
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  var sheet = SpreadsheetApp.openById('19PI2-FIG2fbPYTyC0Ju3AZA4AhYVEFfMH99Yl9fXO1k').getActiveSheet();
  var rows = sheet.getDataRange().getValues();
  var totals = {};

  for (var i = 1; i < rows.length; i++) {
    var experience = rows[i][3]; // col D
    var verified   = parseFloat(rows[i][6]) || 0; // col G
    if (experience) {
      totals[experience] = (totals[experience] || 0) + verified;
    }
  }

  return ContentService
    .createTextOutput(JSON.stringify(totals))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### 3. Guestbook Script
Deployed at Guestbook Script URL above. Accepts POST (new message) and GET (fetch all messages, newest first).

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.openById('1dsZ0skXfX7Xwh8e3Rxijn7IIOaQDuGWVo8qnuXDIYxI').getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.name,
    data.location,
    data.message,
    data.language
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  var sheet = SpreadsheetApp.openById('1dsZ0skXfX7Xwh8e3Rxijn7IIOaQDuGWVo8qnuXDIYxI').getActiveSheet();
  var rows = sheet.getDataRange().getValues();
  var messages = [];

  for (var i = 1; i < rows.length; i++) {
    messages.push({
      date:     rows[i][0],
      name:     rows[i][1],
      location: rows[i][2],
      message:  rows[i][3],
      language: rows[i][4]
    });
  }

  messages.reverse(); // newest first

  return ContentService
    .createTextOutput(JSON.stringify(messages))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### 4. Wedding Summary Agent
Separate Apps Script project. Run daily via time-driven trigger. Emails Adam and Estefania only when new entries exist across any of the 3 sheets.

```javascript
var CONFIG = {
  sheetIds: {
    rsvp:      '1VQNpAub4CShWOgjUGLdOrjoqUKkQIzh1Tuqw0y5i8zA',
    honeymoon: '19PI2-FIG2fbPYTyC0Ju3AZA4AhYVEFfMH99Yl9fXO1k',
    guestbook: '1dsZ0skXfX7Xwh8e3Rxijn7IIOaQDuGWVo8qnuXDIYxI'
  },
  recipients: ['adambhelgeson@gmail.com', 'estefania.garduno13@gmail.com']
};

function sendWeddingSummary() {
  var props = PropertiesService.getScriptProperties();

  var newRsvp      = getNewRows(CONFIG.sheetIds.rsvp,      'lastRsvpRow');
  var newHoneymoon = getNewRows(CONFIG.sheetIds.honeymoon, 'lastHoneymoonRow');
  var newGuestbook = getNewRows(CONFIG.sheetIds.guestbook, 'lastGuestbookRow');

  if (newRsvp.length === 0 && newHoneymoon.length === 0 && newGuestbook.length === 0) {
    return; // nothing new — skip email
  }

  var subject = '💒 Wedding Update — ' + Utilities.formatDate(new Date(), 'America/Chicago', 'MMM d, yyyy');
  var body    = buildEmailBody(newRsvp, newHoneymoon, newGuestbook);

  CONFIG.recipients.forEach(function(email) {
    MailApp.sendEmail({ to: email, subject: subject, htmlBody: body });
  });
}

function getNewRows(sheetId, propKey) {
  var sheet     = SpreadsheetApp.openById(sheetId).getActiveSheet();
  var lastRow   = sheet.getLastRow();
  var props     = PropertiesService.getScriptProperties();
  var lastSeen  = parseInt(props.getProperty(propKey) || '1', 10);
  var newRows   = [];

  if (lastRow > lastSeen) {
    var range = sheet.getRange(lastSeen + 1, 1, lastRow - lastSeen, sheet.getLastColumn());
    newRows   = range.getValues();
    props.setProperty(propKey, String(lastRow));
  }

  return newRows;
}

function buildEmailBody(rsvpRows, honeymoonRows, guestbookRows) {
  var html = '<h2 style="font-family:sans-serif;color:#2D5016;">💒 Wedding Daily Summary</h2>';

  if (rsvpRows.length > 0) {
    html += '<h3 style="color:#2D5016;">New RSVPs (' + rsvpRows.length + ')</h3><ul>';
    rsvpRows.forEach(function(r) {
      html += '<li><strong>' + r[1] + '</strong> — ' + r[3] + ' (' + r[4] + ' guests)</li>';
    });
    html += '</ul>';
  }

  if (honeymoonRows.length > 0) {
    html += '<h3 style="color:#2D5016;">New Honeymoon Contributions (' + honeymoonRows.length + ')</h3><ul>';
    honeymoonRows.forEach(function(r) {
      html += '<li><strong>' + r[1] + '</strong> — $' + r[4] + ' toward ' + r[3] + '</li>';
    });
    html += '</ul>';
  }

  if (guestbookRows.length > 0) {
    html += '<h3 style="color:#2D5016;">New Guestbook Messages (' + guestbookRows.length + ')</h3><ul>';
    guestbookRows.forEach(function(r) {
      html += '<li><strong>' + r[1] + '</strong> (' + r[2] + '): ' + r[3] + '</li>';
    });
    html += '</ul>';
  }

  html += '<p style="color:#888;font-size:12px;">Sent by Wedding Summary Agent · ' + formatDate(new Date()) + '</p>';
  return html;
}

function formatDate(date) {
  return Utilities.formatDate(date, 'America/Chicago', 'MMMM d, yyyy');
}
```

## Deployment
Push to GitHub to deploy:
  git add .
  git commit -m "description"
  git push origin main
GitHub Pages auto-deploys within ~60 seconds.
