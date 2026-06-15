# Mouvaux Demain — Campaign Website

Production web application for the French municipal movement *Renouveau pour Mouvaux* (Mouvaux, 2026 elections).

**[Live →](https://renouveaumouvaux.fr)** · Built with Next.js · Deployed on Vercel (Paris)

---

## Project Overview

**Context:** Real production application built for a political campaign. The site handles public communication, online membership registration, and newsletter management for the movement *Renouveau pour Mouvaux* led by Charles Delavenne.

**What it does:**
- Lets citizens join the movement through an online membership form
- Automatically generates a pre-filled PDF membership document and emails it to the new member
- Records all members in a Google Sheet accessible directly by the campaign team
- Manages newsletter subscriptions via Mailchimp
- Displays upcoming public events and workshops

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) · TypeScript 5 |
| Frontend | React 19 · Tailwind CSS · Radix UI · React Hook Form · Zod |
| Email | SendGrid (transactional) |
| Mailing list | Mailchimp API v3 |
| Database | Google Sheets API v4 (service account auth) |
| PDF | `pdf-lib` (template filling) · `@react-pdf/renderer` |
| Deployment | Vercel, region CDG1 (Paris) |

---

## Backend Architecture — Membership Pipeline

The core backend feature is the membership registration pipeline, triggered by `POST /api/contact`.

**Flow:**

```
Client submits form
        ↓
POST /api/contact
        ↓
1. Server-side field validation (9 required fields incl. GDPR consent)
        ↓
2. Write member row → Google Sheets          ← critical step, fails request on error
        ↓
3. Generate pre-filled PDF from template     ← non-fatal
        ↓
4. Email PDF to new member via SendGrid      ← non-fatal
        ↓
{ success: true }
```

Steps 3 and 4 are wrapped in a separate try/catch: if PDF generation or email delivery fails, the membership is already persisted and the user receives a success response. A duplicate submission is worse than a missing confirmation email.

---

## Service Layer

Each external dependency is isolated in its own module under `lib/`:

**`lib/google-sheets.ts`**
- Authenticates with a Google service account (JWT via `googleapis` SDK)
- `appendMembershipRow()` reads existing rows first to find the first truly empty row before writing — avoids gaps when rows are manually deleted from the sheet
- Writes 11 columns: name, birth date, birth place, nationality, address, phone, email, submission date, financial support, GDPR consent, ISO timestamp

**`lib/membership-pdf.tsx`**
- `generateMembershipPDF()` loads a pre-designed PDF template from `public/`, fills named form fields (`Nom1`, `Nom2`, `Date de naissance`, `Lieu de naissance`, `Nationalité`, `Adresse complète`, `Téléphone`, `Email`, `Date`) using `pdf-lib`, checks the membership category checkbox, flattens the form, and returns a `Buffer`
- A `MembershipPDF` React component also exists as a `@react-pdf/renderer` alternative for fully dynamic generation

**`lib/email.ts`**
- `sendMembershipFormEmail()` sends a branded HTML email to the new member with the pre-filled PDF attached (base64-encoded)
- `sendContactEmail()` routes contact form submissions to the team (supports multiple recipients via comma-separated `EMAIL_TO`)
- Both functions validate their configuration at call time and return a typed `{ success, error? }` result

**`lib/mailchimp.ts`**
- `subscribeToNewsletter()` calls the Mailchimp API v3, splits the submitted name into `FNAME`/`LNAME` merge fields, and handles the "Member Exists" response gracefully (returns success instead of an error)

---

## API Routes

| Route | Method | Description |
|---|---|---|
| `/api/contact` | POST | Membership pipeline: validate → Google Sheets → PDF → email |
| `/api/newsletter` | POST | Newsletter subscription via Mailchimp |
| `/api/check-env` | GET | Diagnostics: verifies all environment variables are set |

---

## Environment Variables

```env
# SendGrid
SENDGRID_API_KEY=
EMAIL_FROM=
EMAIL_TO=                        # comma-separated for multiple recipients

# Mailchimp
MAILCHIMP_API_KEY=
MAILCHIMP_AUDIENCE_ID=
MAILCHIMP_SERVER_PREFIX=         # e.g. us21

# Google Sheets
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_PRIVATE_KEY=              # include literal \n for line breaks
GOOGLE_SHEET_ID=
GOOGLE_TABLE_NAME=               # sheet tab name, e.g. Tableau_adhesion
```

---

## Google Sheets Schema

Members are stored in the sheet tab defined by `GOOGLE_TABLE_NAME`, starting at row 2:

| A | B | C | D | E | F | G | H | I | J | K |
|---|---|---|---|---|---|---|---|---|---|---|
| Name | Birth date | Birth place | Nationality | Address | Phone | Email | Submission date | Financial support | GDPR consent | Timestamp (ISO) |

---

## Local Setup

```bash
npm install
cp .env.example .env.local   # fill in all variables above
npm run dev
```

---

## Key Files

```
app/
  adherer/page.tsx                      # membership form (client component)
  api/
    contact/route.ts                    # membership pipeline endpoint
    newsletter/route.ts                 # newsletter subscription endpoint
lib/
  google-sheets.ts                      # Google Sheets service (auth + row write)
  membership-pdf.tsx                    # PDF template filling + React PDF component
  email.ts                              # SendGrid transactional email service
  mailchimp.ts                          # Mailchimp subscription service
public/
  bulletin-adhesion-template.pdf        # PDF template with named form fields
```
