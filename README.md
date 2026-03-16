# 💒 Estefania & Adam — Wedding Website

> **Live Site:** [adamhelgeson.github.io/Wedding](https://adamhelgeson.github.io/Wedding/)

A bilingual (English/Spanish) wedding website for Estefania Garduño
Hernández and Adam Helgeson. Wedding is Fall 2027 at Fiesta Americana
Hacienda Galindo Resort & Spa, San Juan del Río, Querétaro, Mexico.

---

## 🌐 Pages

| Page | File | Description |
|---|---|---|
| Home | index.html | Hero, countdown timer, venue info, quick links |
| Our Story | our-story.html | Love story timeline and couple bios |
| Schedule | schedule.html | 3-day event schedule |
| Gallery | gallery.html | Engagement photos + guest upload |
| Registry | registry.html | Japan honeymoon fund |
| RSVP | rsvp.html | RSVP form → Google Sheets |
| Guestbook | guestbook.html | Live guest messages |
| FAQ | faq.html | Frequently asked questions |

---

## 🎨 Design System

| Token | Value |
|---|---|
| Forest Green | #2D5016 |
| Deep Forest (footer) | #1A3009 |
| Gold | #a3844f |
| Ivory | #FAF7F2 |
| Warm White | #FDFBF8 |
| Heading Font | Cormorant Garamond |
| Body Font | Lato |

---

## 🗂️ Tech Stack

- **Frontend:** Pure HTML / CSS / JavaScript (no frameworks)
- **Hosting:** GitHub Pages
- **Forms Backend:** Google Apps Script → Google Sheets
- **Weather:** Open-Meteo API (no key required)
- **Translations:** Custom JS i18n system (EN/ES toggle + browser auto-detect)
- **Fonts:** Google Fonts

---

## 📊 Google Sheets & Apps Script

### RSVP
- **Sheet ID:** 1VQNpAub4CShWOgjUGLdOrjoqUKkQIzh1Tuqw0y5i8zA
- **Script URL:** https://script.google.com/macros/s/AKfycbxlKzMQ4ta_C-qeGhgX9_xF6M3OPLCMrUcq0HI_UzUlvN7wKy1YCc2BGgU5l8CRFC5o/exec

### Honeymoon Fund
- **Sheet ID:** 19PI2-FIG2fbPYTyC0Ju3AZA4AhYVEFfMH99Yl9fXO1k
- **Script URL:** https://script.google.com/macros/s/AKfycbxy9HG8dtZW4Ab7dX6cIS_tQikekTXbPyKYLa7B0doJlITHINxiD1iaPF7g2O2rKU5E/exec

### Guestbook
- **Sheet ID:** 1dsZ0skXfX7Xwh8e3Rxijn7IIOaQDuGWVo8qnuXDIYxI
- **Script URL:** https://script.google.com/macros/s/AKfycbzgRhSCmNVM4k6rXQGQ0_ylHAZGa6KC41HSV0B0SBUuxLT0Qam_bexYk8FO1FIcYaDH/exec

### Daily Summary Agent
Separate Apps Script project that reads all 3 sheets daily and emails
a digest to Adam and Estefania only when new entries exist.

---

## 💳 Payment Info (Registry)

| Method | Link |
|---|---|
| Venmo | https://venmo.com/Adam-Burt-6 |
| PayPal (Adam) | https://paypal.me/adamburt07 |
| PayPal (Estefania) | https://paypal.me/EstefaniaGarduno13 |

---

## 📸 Photo Albums

| Album | Link |
|---|---|
| Engagement Photos (114) | https://photos.app.goo.gl/wgUp9zzkAhZKgVbE7 |
| Guest Wedding Photos | https://photos.app.goo.gl/DRJ4tR2YweUpVVPv9 |

---

## 🗓️ Wedding Schedule

### Day Before — Welcome Evening
| Time | Event | Location |
|---|---|---|
| 6:00 PM | Welcome Drinks | Hacienda Galindo |
| 7:00 PM | Welcome Dinner | Hacienda Galindo |

### Wedding Day
| Time | Event | Location |
|---|---|---|
| 9:00 AM | Bridal & Groom Preparation | TBD |
| 4:00 PM | Wedding Ceremony | The Terrace Le Château |
| 4:30 PM | Cocktail Hour | Hacienda Courtyard |
| 6:00 PM | Reception Dinner | The Terrace Le Château |
| 7:30 PM | First Dance & Toasts | The Terrace Le Château |
| 8:00 PM | Dancing & Celebration | The Terrace Le Château |
| 12:00 AM | Grand Farewell | Hacienda Entrance |

### Morning After
| Time | Event | Location |
|---|---|---|
| 10:00 AM | El Desayuno (Post-Wedding Breakfast) | Hacienda Galindo |

---

## 🌍 Bilingual System

- All text stored in `translations.js` as `window.translations.en` and `window.translations.es`
- HTML elements use `data-i18n="key"` attributes
- Language saved to `localStorage` as `preferredLanguage`
- Auto-detects browser language on first visit
- Toggle buttons: `id="lang-en"` and `id="lang-es"` in nav

---

## 📋 TODO

- [ ] Our Story — "Planning Our Day" chapter (content TBD)
- [ ] Our Story — replace placeholder photos (waiting on Fannie)
- [ ] Dress code inspiration photos — Pinterest boards linked (https://pin.it/2EZmfeKM5 ladies, https://pin.it/6hZzEf67R men). Future improvement: download 5–6 images from each board and display directly on site instead of linking to Pinterest. Options: download from Pinterest, find similar on Unsplash/Pexels, or keep Pinterest links as-is.
- [ ] Spanish translations — final review by Fannie
- [ ] Update countdown timer when real wedding date is confirmed
- [ ] Consider custom domain (e.g. estefania-and-adam.com)
- [ ] Investigate converting photo slideshows to GIFs or animated carousels to show more photos in less space (engagement gallery, Our Story section photos)

---

## 🚀 Deployment

```bash
git add .
git commit -m "describe your changes"
git push origin main
```

GitHub Pages auto-deploys within ~60 seconds of pushing to `main`.

---

## 👫 Couple

| | Estefania | Adam |
|---|---|---|
| From | Querétaro, Mexico | Minnesota, USA |
| Email | estefania.garduno13@gmail.com | adambhelgeson@gmail.com |
| Dog | Bruno | Nova |
