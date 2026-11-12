# Notion Unlocked × Nerds Room Event Website

A modern, high-performance event landing page for **Notion Unlocked**, featuring the **Nerds Room** community.

Designed by combining the clean, minimal, editorial design language of **Notion** with the developer-first, terminal-inspired identity of **Nerds Room**.

---

## ✦ Key Highlights & Features

- **Sticky Glass Navigation**: Blurred backdrop navigation (`glass-nav`) with Nerds Room terminal mark, collaboration separator, smooth-scroll links, and instant Luma registration action.
- **Hero Command Center**: Notion workspace simulation featuring interactive tab switching (**Page**, **Database**, **AI Agents**), live collaborator presences, and floating agent widgets.
- **Real-Time Event Dispatch**: Prominent 3-card parameter bar (Date, Time, Location) with a live countdown timer calibrated to the `Asia/Kolkata` timezone (15 Nov 2026, 12:00 PM IST) and 1-click Google Calendar integration.
- **Editorial About Section**: Two-column layout contrasting modular workspace philosophy with a live TypeScript AI Agent configuration block.
- **4 Interactive Experience Pillars**:
  1. *01 — Introduction to Notion*: Modular block hierarchy tree.
  2. *02 — Notion in Action*: Interactive Kanban sprint board with Formulas 2.0.
  3. *03 — Notion AI & Agents*: Terminal-inspired autonomous agent pipeline.
  4. *04 — Interactive Q&A & Networking*: Community stage with organizer spotlights.
- **Interactive Run of Show (Agenda)**: Interactive timeline covering 12:00 PM to 4:00 PM with category filtering (*All 7 Sessions*, *Demos & Keynotes*, *Networking & Q&A*) and session highlights.
- **Target Audience Matrix**: 6 targeted personas (Professionals, Founders, Product Managers, Developers, Creators, Notion Power Users).
- **Community & Organizers**: Spotlights on *The AI Collective* (Presented by), *Nerds Room* (Host & Community), and organizers *Aditya*, *Shubhi Mathur*, and *Shresth Shukla*.
- **Venue & Transit Advisory**: Paytm Office (One Skymark, Tower D, Sector 98, Noida) with metro and parking tips, address copy utility, and Google Maps integration.
- **High-Contrast Dark Registration CTA**: Contrasting charcoal/black section with electric lime glow, direct Luma registration link, and explicit host approval guidance.
- **Accessible & Responsive**: Full keyboard support, mobile drawer navigation, zero horizontal overflow, and respects `prefers-reduced-motion`.

---

## 🛠 Tech Stack

- **Framework**: React 18 with TypeScript
- **Bundler & Dev Server**: Vite 5
- **Styling**: Tailwind CSS with custom Notion & Nerds Room tokens
- **Icons**: Lucide React
- **Typography**: Inter (System sans) + Newsreader (Editorial serif) + JetBrains Mono (Terminal code)

---

## 🚀 Getting Started

From the workspace root:

```bash
# Start development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

Or from within `apps/notion-unlocked-web`:

```bash
npm run dev
npm run build
npm run preview
```

Local dev server runs by default at `http://127.0.0.1:5173/`.

