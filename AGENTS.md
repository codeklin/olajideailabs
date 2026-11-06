# Olajide AILabs — Agent System Directives & Quality Standards

This document establishes non-negotiable rules for all AI assistants, designers, and developers working on the Olajide AILabs codebase and digital assets.

---

## 1. Zero AI Slop & Forbidden Vocabulary

Never write generic tech marketing fluff. If copy sounds like a generic Silicon Valley SaaS landing page or an affiliate marketing funnel, reject it.

### Strictly Banned Words & Phrasings

- **Hype Verbs & Adjectives:** "Supercharge", "Unleash", "Revolutionary", "Game-changer", "Effortless", "Seamless", "Magic", "Cutting-edge", "Skyrocket", "Unlock", "Passive income", "Next-gen".
- **Generic Motivational Clichés:** "Level up your game", "Crush your goals", "Earn in dollars overnight", "Work from anywhere in the world".
- **Fake Urgency:** "Hurry, limited spots left!", "Don't miss out on the AI wave!"

### Strict Punctuation & Typography Rules

- **No Em Dashes (`—`) or En Dashes (`–`):** Do not use em dashes or en dashes as copy crutches. Structure thoughts into clear, punchy sentences using periods, colons, commas, or parentheses where appropriate.
- **Clear Sentence Case:** Headings must read naturally without excessive ALL-CAPS or erratic punctuation.

---

## 2. Forbidden Visual & Design Tropes

Generic AI aesthetic clichés destroy trust with real builders and professionals.

### Strictly Banned Elements

- **No Icon Libraries or Generic Icons:**
  - Never use Lucide icons, FontAwesome, or other generic icon libraries.
  - Never use emoji as icons.
  - Never use lightning bolts (`⚡`), sparkles (`✨`), magic wands, robot heads, or glowing brain icons.
  - **Blobs only:** All decorative icons and numbered badges must use custom organic SVG blobs.
- **No Eyebrow Pills:**
  - Do not place pill badges floating over hero titles (`SMARTPHONE-FIRST AI EXECUTION • NO LAPTOP REQUIRED`). Every generic AI template does this. Start directly with the headline.
- **No Fake Telemetry & Pseudo-Technical Gimmicks:**
  - No fake metric widgets with made-up progress bars (e.g., "EXECUTION SCORE: 08.4" or "72% LIVE").
  - No fake hacker terminal prompt windows with blinking cursors (`> design_prompt()`).
  - Real builders want clarity, previews of real digital tools, and tangible workflows, not sci-fi cosplay.

---

## 3. Grounded Reality: Nigerian & African Builder Context

Every piece of copy, curriculum item, and interface element must respect the daily reality of African builders, students, and freelancers:

1. **Hardware Reality:** Most users do not own an M-series MacBook or a ₦1.5M workstation. Workflows must be 100% executable on an Android or iOS smartphone.
2. **Software & Cost Reality:** Do not prescribe $20/month foreign SaaS tools that require dollar cards that constantly decline. Center the free AI stack.
3. **Monetization Rails:** Foreign platforms like Stripe and PayPal do not work for local payouts. Point directly to accessible African rails: **Nestuge** and **Selar** with direct bank withdrawals.
4. **Bandwidth & Power:** Respect mobile data caps and erratic electricity. Fast-loading, clean DOM, zero bloated JavaScript bundles.
5. **Tone:** Respectful, authoritative, peer-to-peer, practical, and grounded. Speak like an experienced builder talking across a table to a colleague.

---

## 4. UI Architecture & Organic SVG Blob Design System

- **Organic SVG Blob System:**
  - Use organic SVG blob shapes as decorative icons and section accents throughout the UI.
  - Each blob is a unique irregular closed path (no two blobs have the same shape) drawn in a `viewBox="0 0 80 80"` SVG at `size-14` (56x56px).
  - Each blob has two layers:
    1. A semi-transparent filled version using `rgba(r,g,b,0.15-0.18)`
    2. A slightly brighter stroke outline using `rgba(r,g,b,0.3-0.35)` at `strokeWidth="1.5"` for a subtle depth effect.
  - Centered inside each blob is a bold number or short label in the brand accent color at `fontSize="22" fontWeight="800"`, making the blob double as a visual numbering system.
  - Use four slightly different tints of the brand color across the blobs so they feel varied but cohesive.
  - **Background Watermark Blobs:** Place a single larger blob as an absolute element at `-right-6 -top-6 size-40 opacity-10` behind feature card content, filled with the solid brand accent color, which smoothly transitions to `opacity-20` on hover.
  - **Strict Prohibition:** No Lucide icons, no emoji, no generic icon libraries. Blobs only.
- **Typography:** High readability, clean line heights (1.5 to 1.7 for paragraphs).
- **Cards & Layout:** Solid layout structure, clean 1px borders, subtle hover lifts, zero decorative clutter.
- **Mobile First:** Ensure zero horizontal overflow and comfortable touch targets (minimum 44x44px).
