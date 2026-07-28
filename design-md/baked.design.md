# How baked.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/baked.design-design)

Last updated: 2026-07-28

## Design character

Baked Design sells product design to startup founders with a **portfolio-as-landing-page** that feels like a polished Framer case study, not a corporate agency site. The system is **white-field, soft-card, electric blue**. Everything important sits in floating rounded panels or full-bleed product mockups; chrome is almost invisible. Copy is short, founder-direct, and set in a calm geometric sans. The mood is confident, lightly playful, and conversion-forward: primary CTAs always say some version of "Let's Talk," social proof is a masonry of testimonial chips, and the work itself is the hero art.

What should survive adaptation:

- A **near-white canvas** with **soft gray elevated cards** and one saturated **system blue** for primary actions and featured proof.
- **Floating product theater** — phones, desktops, and UI fragments arranged in depth with soft shadows, not flat screenshots in frames.
- **Pill CTAs** in pairs (filled primary + outlined secondary) and a **live social-proof micro-line** under them.
- **Testimonial masonry** mixing light chips, one dark chat-style bubble, and one solid blue quote card.
- Generous **rounded geometry** (card ~20px, buttons fully pill) and very little border weight.

## Foundations

### Color

Structured color tokens were not captured for this domain; the palette below is read from the homepage captures and is safe to treat as the working system.

| Role | Hex | Where it shows up |
|------|-----|-------------------|
| Canvas | `#ffffff` | Full-page field behind hero card and sections |
| Soft surface | `#f4f5f7` | Testimonial chips, form panel, input wells |
| Input fill | `#eef0f3` | Name / email / message fields |
| Primary text | `#111111` | Headlines, body on white |
| Secondary text | `#6b7280` | Labels, placeholders, footer, eyebrow lines |
| System blue | `#1a66ff` | Primary buttons, featured quote card, mobile promo card |
| Blue text on blue | `#ffffff` | CTA labels, featured testimonial copy |
| Dark bubble | `#2a2a2e` | Chat-style testimonial (e.g. rivercapital) |
| Live green | `#22c55e` | "founders booked a call" status dot |
| Hairline / chip edge | `#e8e9ed` | Secondary button outline, subtle card edges |
| Logo lockups | muted mid-grays | Client row under the hero card |

Relationships that matter:

- **Blue is scarce.** It is reserved for the primary path (Let's Talk / Send Message) and for one or two "featured" proof surfaces. Do not blue-wash the whole page.
- **Surfaces step gently:** white → soft gray chips → slightly deeper input wells. Contrast is low between surfaces; hierarchy comes from type size and blue accents.
- **Dark and blue chips** break the light masonry so the testimonial wall does not read as one flat gray field.
- On the **mobile/share card**, the whole surface flips to solid system blue with white type — a compressed brand stamp, not a second theme.

### Typography

No declared font families were recorded. Visually the site runs a single **geometric neo-grotesk** stack (similar energy to Inter / SF Pro / modern product sans) across all roles.

Observed size ladder (from structured text measurements on mobile and ultra-wide captures):

| Role | Size | Weight | Line height | Notes |
|------|------|--------|-------------|-------|
| Micro / chrome | 12px | 400 | ~1.0–1.2 | Labels, meta, footer |
| Body / chip copy | 14px | 400 | 20px | Testimonials, form labels, hero body |
| Emphasized UI | 14px | 500 | 16px | Slight tracking tighten (~-0.2) on compact labels |
| Lead body | 16px | 400 | 22px | Hero paragraphs inside the center card |
| Section headline | ~28–36px (visual) | 600–700 | tight | "Let's collaborate today!", hero value prop |
| Display (implied) | larger on desktop hero | 600 | snug | Short founder-facing lines |

Patterns:

- **One family, few weights.** Regular for almost everything; medium/semibold only for headlines and button labels.
- **Short line lengths** inside the floating hero card; body never spans the full viewport.
- **Sentence case** everywhere — no all-caps nav, no loud display serif.
- Tracking is mostly default; the only measured tighten is a light negative track on compact 14/500 labels.

### Spacing and layout

Measured padding concentrates on a few repeated values:

- **30px** padding is the dominant internal rhythm (very frequent on cards and sections).
- **24px** horizontal padding on large desktop sections.
- **50px** bottom padding on some large section stacks.

Layout model:

1. **Centered hero stack** — a single rounded white card floating on white, logo + pitch + dual CTAs + promo line + muted client logos.
2. **Product theater band** — overlapping device mockups and UI fragments bleeding past the card, often with soft drop shadows and slight perspective.
3. **Testimonial masonry** — multi-column chip grid (roughly 3 columns on desktop) with mixed card heights.
4. **Sticky / bottom CTA pair** — filled + outline pills centered under proof, with a green-dot status line.
5. **Contact form section** — centered headline + single soft card containing stacked fields and a full-width blue submit.
6. **Ultra-wide split** — left thin editorial column (pitch + CTAs + case blurb) beside a large right-hand case study stage (phones + brand mark).

Density is airy. Cards never crush; white field is part of the brand.

## Visual language

### Shape

- **Card radius ~20px** is the default for chips, form panels, and the hero card.
- **Full pills (`border-radius: 999px`)** for primary/secondary buttons and some promo chips.
- **Large soft radius ~52px** appears on a few oversized pill-like surfaces (promo / avatar-adjacent shapes).
- Corners are consistently soft; sharp rectangles would break the system.

### Depth and shadow

No structured shadow tokens were captured, but screenshots show **soft, diffuse elevation**:

- Hero card and device mockups lift with a light multi-stop shadow (cool gray, low opacity).
- Testimonial chips are nearly flat — surface color does more work than shadow.
- Device mockups cast the strongest shadows to sell "real product in space."

Avoid hard Material-style 1dp rings or neon glows.

### Imagery

- **UI product shots** are the primary art direction: iPhone frames, dark desktop apps, onboarding flows, brand marks.
- Mockups sit at slight angles or in overlapping clusters; they are not locked to a strict 12-column grid.
- Client logos are **desaturated / monochrome** in the hero strip so they do not compete with CTAs.
- Avatars in testimonials are small circular crops; brand marks in chips are left-aligned icon + name.

### Motion

Still captures only — no motion system recorded. If you add motion, keep it to soft fade/slide of cards and gentle parallax on the product theater; the brand does not read as kinetic or glitchy.

## Components

### Primary button

- Full pill, solid `#1a66ff`, white label, comfortable horizontal padding.
- Often shows a small trailing icon cluster (calendar / keyboard glyphs) on "Let's Talk".
- Minimum visual height roughly 40–48px; on forms it stretches full card width.

### Secondary button

- Pill outline on white: hairline gray border, dark text, same height as primary.
- Used for "Pay Now", "See pricing", and parallel actions that should not outshine the talk CTA.

### Hero card

- Large white rounded panel centered on canvas.
- Stack: wordmark → 1–2 short paragraphs → button row → optional promo line (emoji + blue/colored emphasis) → grayscale logo row.
- This is the brand's "business card." Keep it sparse.

### Testimonial chip

- Soft gray rounded rectangle, 14px body quote, bottom row of logo mark + company name.
- Variants:
  - **Default light** — majority of the wall.
  - **Dark chat bubble** — near-black surface, white text, avatar + handle + relative time (reads like a Slack/iMessage snippet).
  - **Featured blue** — solid system blue, white quote, circular avatar + name; used sparingly as the emotional peak.

### Form

- Soft outer card (~20px radius).
- Stacked labeled fields: small gray label above full-width light input (also generously rounded).
- Multiline message well with subtle resize affordance.
- Single full-width blue submit pill at the bottom ("Send Message").
- No heavy field borders — fill color defines the control.

### Status / social proof line

- Small centered row under CTAs: green dot + "N founders booked a call this week" (sometimes with spots remaining).
- Micro type, high trust signal, never shouts.

### Case study stage (wide)

- Left rail: short pitch, black primary CTA, outline price chip, dark case blurb card.
- Right stage: large product photography or brand illustration on white / soft gradient.
- Feels like a design studio desk, not a marketing grid.

## Responsive behavior

Captures span roughly **420 → 3432px** wide on the same homepage:

- **Narrow (~420px)** collapses to a single **solid blue brand card**: wordmark, date line, pitch, white "Let's Talk", translucent price chip, micro availability line. Product theater and masonry disappear — the mobile artifact is a shareable stamp.
- **Mid desktop (~1100–1650px)** shows the classic centered hero card over floating mockups, then masonry + bottom CTAs + contact form.
- **Ultra-wide (~3400px)** shifts to a **split studio layout**: thin left editorial column + expansive right case stage, with a light bottom bar. The dual-CTA language remains, but the page reads more like a portfolio workspace than a single funnel card.

Preserve the idea that **mobile compresses to a blue card**, while **desktop expands into white theater + proof wall**. Do not force the blue card treatment onto large viewports.

## Practical guidance

**Do**

- Lead with a floating white hero card and dual pill CTAs on a white field.
- Keep system blue scarce: primary actions + one featured proof surface.
- Build social proof as a **mixed-masonry of soft chips**, with one dark and one blue accent card.
- Use ~20px card radii and full-pill buttons consistently.
- Show real product UI in depth (devices, soft shadows) instead of flat marketing illustration.
- Pair every major CTA cluster with a quiet green-dot booking line.

**Don't**

- Introduce a second accent hue for buttons (orange/purple CTAs would fight the system).
- Fill the page with blue panels — blue is the punch, not the wallpaper (except the intentional mobile stamp).
- Use sharp 4px cards, heavy borders, or dense SaaS dashboards chrome.
- Set long justified articles or serif display type; this is a short-copy sales portfolio.
- Make every testimonial identical; the light/dark/blue mix is load-bearing.
- Invent font licences or swap in a decorative display face without redesigning hierarchy.

## Scope note

Guide synthesized from homepage viewport captures of **baked.design** at multiple widths (including pins 5260, 5261, 5265, 6319, 6495). Structured type sizes, paddings, and radii were available; declared font families, measured palette roles, borders, shadows, and gradients were not — color and depth notes above are visual reads from those screenshots. Treat this as a homepage / marketing-system brief, not a full multi-page product UI kit.

## Captured pages

[![Hero — floating pitch card over product theater](https://pin.fontofweb.com/5265?format=jpg)](https://design.withfudge.com/share/pin-5265)

[Hero — floating pitch card over product theater](https://design.withfudge.com/share/pin-5265)

[![Social proof — testimonial masonry](https://pin.fontofweb.com/5260?format=jpg)](https://design.withfudge.com/share/pin-5260)

[Social proof — testimonial masonry](https://design.withfudge.com/share/pin-5260)

[![Contact — collaborate form](https://pin.fontofweb.com/5261?format=jpg)](https://design.withfudge.com/share/pin-5261)

[Contact — collaborate form](https://design.withfudge.com/share/pin-5261)

[![Ultra-wide — split studio layout](https://pin.fontofweb.com/6319?format=jpg)](https://design.withfudge.com/share/pin-6319)

[Ultra-wide — split studio layout](https://design.withfudge.com/share/pin-6319)

[![Mobile stamp — solid blue card](https://pin.fontofweb.com/6495?format=jpg)](https://design.withfudge.com/share/pin-6495)

[Mobile stamp — solid blue card](https://design.withfudge.com/share/pin-6495)

## Colors

- `#ffffff`
- `#f4f5f7`
- `#eef0f3`
- `#e8e9ed`
- `#6b7280`
- `#2a2a2e`
- `#111111`
- `#1a66ff`
- `#22c55e`
