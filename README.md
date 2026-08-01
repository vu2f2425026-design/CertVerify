# CertVerify — Digital Academic Credential Authenticity Validator

**Aim:** To create a simple React application using components and display static user data.

This is a front-end-only React application. There is no backend, no database, no
authentication, and no API call anywhere in the code — every value shown on screen
comes from `src/data/staticData.js`. All buttons that would normally trigger a
server action (View, Download, Share, Revoke, Issue New, Search, Scan QR) show a
JavaScript `alert()` instead.

## Folder structure

```
certverify/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js / .css
│   │   ├── Hero.js / .css
│   │   ├── RoleCards.js / .css
│   │   ├── Footer.js / .css
│   │   ├── Seal.js / .css          (logo + verified-badge signature mark)
│   │   ├── StatusBadge.js / .css   (Verified / Pending / Revoked / VALID)
│   │   ├── StudentCard.js / .css   (single certificate card)
│   │   ├── StatCard.js / .css      (institution stat tile)
│   │   └── CertificateTable.js / .css
│   ├── pages/
│   │   ├── LandingPage.js
│   │   ├── AboutPage.js / .css
│   │   ├── ContactPage.js / .css
│   │   ├── StudentDashboard.js / .css
│   │   ├── InstitutionDashboard.js / .css
│   │   └── VerificationPage.js / .css
│   ├── data/
│   │   └── staticData.js           (all static data lives here)
│   ├── styles/
│   │   └── variables.css           (design tokens: color, type, spacing)
│   ├── App.js                      (routes, via react-router-dom)
│   ├── App.css                     (shared layout, buttons)
│   ├── index.js
│   └── index.css                   (global reset)
├── package.json
└── README.md
```

## How to run

```bash
npm install
npm start
```

The app opens at `http://localhost:3000`.

To build a production bundle:

```bash
npm run build
```

## Pages / routes

| Route          | Page                                                        |
|----------------|--------------------------------------------------------------|
| `/`            | Landing page — hero + Student/Institution/Verify role cards |
| `/about`       | About CertVerify                                             |
| `/contact`     | Static contact form (alert on submit)                       |
| `/student`     | Student dashboard — profile + certificate cards              |
| `/institution` | Institution dashboard — stats + certificate table            |
| `/verify`      | Certificate verification — search box + sample result card   |

## Expected output

- A sticky navbar with the CertVerify seal logo and working navigation links.
- A landing page hero with a certificate-styled illustration and a green
  "stamp" seal, followed by three role cards that link to each portal.
- A student dashboard showing Aditi Sahu's static profile and four
  certificate cards, each with working View / Download / Share buttons
  (shown via `alert()`).
- An institution dashboard with four stat tiles and a data table of six
  student records, each row with View / Revoke actions.
- A verification page where searching or scanning shows a certificate
  result card with a large green **VALID** badge.
- A dark navy footer with About / Privacy / Terms / Contact links.

The build was verified with `npm run build` and compiles with **no errors
and no warnings**.
