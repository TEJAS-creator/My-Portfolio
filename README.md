# TEJAS — Personal Portfolio Website

A minimal, strict monochrome personal portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**, deployable on **Vercel**.

## 🚀 Features

- **Strict Monochrome Dark Aesthetic**: Deep minimal dark background, centered 580px panel with subtle 1px borders, and big neo-grotesk typography.
- **Light & Dark Themes**: Follows system preference on first visit, with a clean top-right toggle switch and zero-flicker state persistence in localStorage.
- **Hero**: Large, tightly tracked uppercase typography displaying `TEJAS`, honest subtitle (`Full-Stack Developer | AI/ML Engineer | Computer Vision`), and outline-style monochrome link pills (GitHub, LinkedIn, Email, Resume).
- **One-Click Resume Download**: Direct download of `Tejas-N-Resume.pdf` from `/resume.pdf`.
- **Tech Stack**: Categorized pill chips (Languages, Frontend, Backend, AI/ML, Databases, Developer Tools, AI Engineering) featuring official Devicon and Simple Icons brand logos.
- **Projects**: 6 featured projects with descriptions, key metric highlights, technology tags, and direct GitHub repository links.
- **GitHub Activity Heatmap**: 53-week x 7-day contribution calendar with hover tooltips and live integration via the GitHub GraphQL API, plus featured public repository cards.
- **Functional Contact Form**: Direct email delivery using the [Resend](https://resend.com) API, client & server input validation with [Zod](https://zod.dev), hidden honeypot spam protection, and per-IP rate limiting, plus a "Jump on a call" scheduling link.
- **Responsive & Accessible**: Fluid clamp typography, edge-to-edge layout on mobile, and visible keyboard focus states meeting WCAG AA contrast standards.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 & Devicon
- **Icons**: `react-icons/fi`, `react-icons/si`, `lucide-react`
- **Validation**: Zod
- **Email Service**: Resend
- **Deployment**: Vercel

---

## ⚙️ Project Structure

```text
├── public/
│   ├── resume.pdf                # Generated resume PDF
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/route.ts          # Resend email API route with rate-limiting & Zod
│   │   │   ├── github/
│   │   │   │   ├── contributions/route.ts # GraphQL contributions calendar with 1h cache
│   │   │   │   └── repos/route.ts         # REST API public repository fetcher
│   │   ├── globals.css           # Design tokens, CSS variables & theme rules
│   │   ├── layout.tsx            # Root layout with Geist font & SEO metadata
│   │   └── page.tsx              # Assembled portfolio page
│   ├── components/
│   │   ├── HeroSection.tsx
│   │   ├── TechStackSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── GitHubActivitySection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── FooterSection.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── ThemeScript.tsx
│   └── data/
│       └── site.ts               # Central config for all personal details & projects
├── .env.example                  # Environment variable reference
└── README.md
```

---

## 💻 Local Development

### 1. Clone the repository
```bash
git clone https://github.com/TEJAS-creator/My-Portfolio.git
cd My-Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Fill in your environment credentials:
```env
# GitHub token (read:user scope) for contribution calendar
GITHUB_TOKEN=ghp_your_token_here
GITHUB_USERNAME=Tejas-creator

# Resend API key for contact form
RESEND_API_KEY=re_your_api_key_here
CONTACT_TO_EMAIL=tejasnj14@gmail.com
```

### 4. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚢 Deploying to Vercel

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete personal portfolio website"
   git push origin main
   ```
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. In the **Environment Variables** section, add:
   - `GITHUB_TOKEN`
   - `GITHUB_USERNAME`
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
5. Click **Deploy**. Vercel will build and deploy the application automatically.
