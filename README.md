# AH Consulting — Professional Landing Page & Dynamic Portfolios

A highly polished, premium, and dual-tier Next.js portfolio website representing **AH Consulting** (**Amari Lawal**). Engineered for state-of-the-art aesthetics, responsiveness, and maximum conversion rates from prospective clients (SMEs, startups, high-end corporations, and government agencies).

---

## 🚀 Key Features

*   **Dual-Tier Persona Architecture**:
    *   **SME & Growth Segment (`sme`)**: A premium dark-themed portfolio crafted to appeal to startups, digital agencies, funded tech founders, and rapid LinkedIn/Upwork clients.
    *   **Enterprise & High-End Advisory (`enterprise`)**: A premium, clean light-themed consultant portfolio structured for corporate C-suite executives, public sector stakeholders, and critical national infrastructure (CNI) clients.
*   **Dynamic Layout Toggling**: Allows prospective clients to switch fluidly between the SME developer presentation and the advisory consultant layout in real-time via a floating glassmorphic widget.
*   **Automated Quarter Calculation**: Avaialability timelines (e.g. `Q3 2025`, `Q2 2026`) are computed dynamically on load, ensuring the portfolio never looks stale or outdated.
*   **100% Type Safe & Warning-Free**: Fully modularized and written using strict TypeScript components.

---

## 🔑 Environment Variables Configuration

This project reads environment variables at build-time and runtime. Create a `.env.local` file in the root of your project to declare configuration defaults:

```bash
# Path: /.env.local

# Declares the default active portfolio layout segment loaded on initial page mount.
# Allowed Values: 
#   - "sme" (Loads the SME & Growth dark-themed developer portfolio)
#   - "enterprise" (Loads the Enterprise & Advisory light-themed corporate consultant portfolio)
NEXT_PUBLIC_ACTIVE_PORTFOLIO=enterprise
```

> [!NOTE]  
> In Next.js, environment variables accessed within client components must be prefixed with `NEXT_PUBLIC_`. Next.js automatically inline-binds these values into the client-side JavaScript bundle during the build phase.

---

## 🛠️ Getting Started

### 1. Installation
Install project dependencies:
```bash
npm install
```

### 2. Set Up Environment Variables
Create a local environment file and define your preferred active persona:
```bash
echo "NEXT_PUBLIC_ACTIVE_PORTFOLIO=enterprise" > .env.local
```

### 3. Run Development Server
Start the local server with hot-reloading:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production
Generate a highly optimized, static, and type-checked production bundle:
```bash
npm run build
```

---

## 📂 Codebase Structure

```bash
├── app/
│   ├── layout.tsx         # Global fonts, metadata, and HTML wrapper
│   └── page.tsx           # Page controller (environment flag reader & layout switcher)
├── components/
│   ├── PortfolioSME.tsx        # SME & Growth Layout component (Dark Theme)
│   └── PortfolioEnterprise.tsx # Enterprise & Advisory Layout component (Light Theme)
├── public/                # Static assets (images, favicon, etc.)
├── .env.local             # Local environment flags (ignored by git)
└── README.md              # Project documentation
```

---

## 📈 Technical Details

*   **Framework**: Next.js 15 (using App Router and Turbopack compiler)
*   **Styling**: Vanilla CSS alongside native Tailwind-styled variables
*   **Type System**: Strict TypeScript configuration (compiles warning-free)
*   **State Management**: Light-weight, responsive React hooks for client-side layout toggles
