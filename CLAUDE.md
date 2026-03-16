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
- How We Met: photos/first meeting together.jpeg
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
  - Ladies: floor-length gowns in any color (florals, jewel tones, earth tones welcome)
    Avoid: cocktail dresses, red, sequins, sheer/corset-style pieces, white/ivory/cream
  - Gentlemen: dark suits or tuxedos with formal shoes or clean dressy sneakers
    Avoid: casual suits, light-colored suits, jeans, open-toed shoes
  - Entire evening is outdoors (vineyard/garden) — block heels, flats, or dressy sneakers recommended
  - Light wrap suggested for cooler evening air
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

### Photo/GIF Investigation
Consider converting the Our Story photo placeholders and gallery
sections to support animated GIFs or CSS carousels so multiple
photos can be shown per section without cluttering the layout.
Options to explore:
- CSS-only carousel (no JS library needed)
- Animated GIF created from multiple photos
- JavaScript lightbox with auto-advance
- Simple prev/next arrow navigation per photo slot

## TODO / Pending
- Our Story "Planning Our Day" chapter — content TBD
- Our Story placeholder photos (Teams/Word logos) —
  waiting on real photos from Fannie
- Dress code inspiration photos — Pinterest boards linked (https://pin.it/2EZmfeKM5 ladies, https://pin.it/6hZzEf67R men). Future improvement: download 5–6 images from each board and display directly on site instead of linking to Pinterest. Options: download from Pinterest, find similar on Unsplash/Pexels, or keep Pinterest links as-is.
- Spanish translations — final review by Fannie needed
- Real wedding date — update countdown timer when confirmed

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
Separate Apps Script project. Run daily via time-driven trigger. Emails Adam and Estefania only when new entries exist across any of the 3 sheets. Uses ScriptProperties to track the last processed row per sheet.

```javascript
var CONFIG = {
  yourEmail: "adambhelgeson@gmail.com",
  fanniesEmail: "estefania.garduno13@gmail.com",
  rsvpSheetId: "1VQNpAub4CShWOgjUGLdOrjoqUKkQIzh1Tuqw0y5i8zA",
  fundSheetId: "19PI2-FIG2fbPYTyC0Ju3AZA4AhYVEFfMH99Yl9fXO1k",
  guestbookSheetId: "1dsZ0skXfX7Xwh8e3Rxijn7IIOaQDuGWVo8qnuXDIYxI"
};

function sendWeddingSummary() {
  var rsvpData = getNewRows(CONFIG.rsvpSheetId, "lastRSVPRow");
  var fundData = getNewRows(CONFIG.fundSheetId, "lastFundRow");
  var guestbookData = getNewRows(CONFIG.guestbookSheetId, "lastGuestbookRow");

  if (rsvpData.length === 0 && fundData.length === 0 && guestbookData.length === 0) {
    return; // nothing new, skip email
  }

  var subject = "Wedding Update — " + formatDate(new Date());
  var body = buildEmailBody(rsvpData, fundData, guestbookData);

  GmailApp.sendEmail(CONFIG.yourEmail, subject, "", {htmlBody: body});
  if (CONFIG.fanniesEmail) {
    GmailApp.sendEmail(CONFIG.fanniesEmail, subject, "", {htmlBody: body});
  }
}

function getNewRows(sheetId, trackingKey) {
  try {
    var sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
    var lastRow = sheet.getLastRow();
    var props = PropertiesService.getScriptProperties();
    var lastProcessed = parseInt(props.getProperty(trackingKey) || "1");

    if (lastRow <= lastProcessed) return [];

    var newRows = sheet.getRange(lastProcessed + 1, 1, lastRow - lastProcessed, sheet.getLastColumn()).getValues();
    props.setProperty(trackingKey, lastRow.toString());
    return newRows;
  } catch(e) {
    return [];
  }
}

function buildEmailBody(rsvpData, fundData, guestbookData) {
  var html = '';
  html += '<div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #3d2b2b;">';
  html += '<div style="background: linear-gradient(135deg, #F2D4D0, #FAF7F2); padding: 30px; text-align: center; border-bottom: 2px solid #C9A84C;">';
  html += '<h1 style="color: #9B4A5A; font-size: 28px; margin: 0;">Estefania & Adam</h1>';
  html += '<p style="color: #C9A84C; margin: 5px 0; font-size: 14px; letter-spacing: 2px;">WEDDING UPDATE · ' + formatDate(new Date()).toUpperCase() + '</p>';
  html += '</div>';

  // RSVPs
  // RSVP columns: [0]timestamp [1]firstName [2]lastName [3]email [4]attending
  //               [5]guests [6]guestFirstName [7]guestLastName [8]meal [9]guestMeal
  //               [10]song [11]message
  if (rsvpData.length > 0) {
    html += '<div style="padding: 25px; border-bottom: 1px solid #F2D4D0;">';
    html += '<h2 style="color: #9B4A5A; border-bottom: 1px solid #C9A84C; padding-bottom: 8px;">New RSVPs (' + rsvpData.length + ')</h2>';
    rsvpData.forEach(function(row) {
      var attending = row[4] === "Joyfully Accepts" ? "✅" : "❌";
      html += '<div style="background: #FAF7F2; border-left: 3px solid #C9A84C; padding: 12px; margin: 10px 0; border-radius: 4px;">';
      html += '<strong>' + row[1] + ' ' + row[2] + '</strong> ' + attending + ' ' + row[4] + '<br>';
      if (row[4] === "Joyfully Accepts") {
        html += '<span style="color: #666; font-size: 13px;">Guests: ' + row[5] + ' · My Meal: ' + row[8] + '</span><br>';
        if (row[6]) html += '<span style="color: #666; font-size: 13px;">Guest: ' + row[6] + ' ' + row[7] + ' · Guest Meal: ' + row[9] + '</span><br>';
        if (row[10]) html += '<span style="color: #666; font-size: 13px;">Song request: ' + row[10] + '</span><br>';
      }
      if (row[11]) html += '<em style="color: #9B4A5A; font-size: 13px;">"' + row[11] + '"</em>';
      html += '</div>';
    });
    html += '</div>';
  }

  // Honeymoon Fund
  // Fund columns: [0]timestamp [1]firstName [2]lastName [3]email [4]experience [5]amount [6]message
  if (fundData.length > 0) {
    html += '<div style="padding: 25px; border-bottom: 1px solid #F2D4D0;">';
    html += '<h2 style="color: #9B4A5A; border-bottom: 1px solid #C9A84C; padding-bottom: 8px;">New Honeymoon Pledges (' + fundData.length + ')</h2>';
    var totalPledged = 0;
    fundData.forEach(function(row) {
      totalPledged += parseFloat(row[5]) || 0;
      html += '<div style="background: #FAF7F2; border-left: 3px solid #C9A84C; padding: 12px; margin: 10px 0; border-radius: 4px;">';
      html += '<strong>' + row[1] + ' ' + row[2] + '</strong> pledged <strong style="color: #C9A84C;">$' + row[5] + '</strong> toward ' + row[4] + '<br>';
      if (row[6]) html += '<em style="color: #9B4A5A; font-size: 13px;">"' + row[6] + '"</em>';
      html += '</div>';
    });
    html += '<p style="color: #C9A84C; font-weight: bold;">Total new pledges: $' + totalPledged.toFixed(2) + '</p>';
    html += '</div>';
  }

  // Guestbook
  // Guestbook columns: [0]timestamp [1]firstName [2]lastName [3]location [4]message [5]language
  if (guestbookData.length > 0) {
    html += '<div style="padding: 25px; border-bottom: 1px solid #F2D4D0;">';
    html += '<h2 style="color: #9B4A5A; border-bottom: 1px solid #C9A84C; padding-bottom: 8px;">New Guestbook Messages (' + guestbookData.length + ')</h2>';
    guestbookData.forEach(function(row) {
      html += '<div style="background: #FAF7F2; border-left: 3px solid #C9A84C; padding: 12px; margin: 10px 0; border-radius: 4px;">';
      html += '<strong>' + row[1] + ' ' + row[2] + '</strong><br>';
      html += '<em style="color: #9B4A5A;">"' + row[4] + '"</em>';
      html += '</div>';
    });
    html += '</div>';
  }

  html += '<div style="padding: 20px; text-align: center; color: #999; font-size: 12px;">';
  html += 'Sent with love by your Wedding Summary Agent<br>';
  html += 'Fall 2027 · Hacienda Galindo · San Juan del Río, Mexico';
  html += '</div></div>';

  return html;
}

function formatDate(date) {
  return date.toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
}
```

## Deployment
Push to GitHub to deploy:
  git add .
  git commit -m "description"
  git push origin main
GitHub Pages auto-deploys within ~60 seconds.
