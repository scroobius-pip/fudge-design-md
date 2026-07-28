# How aiverse.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/aiverse.design-design)

Last updated: 2026-07-28

## Design character

Aiverse.design feels like a curated design journal for AI products: warm off-white paper, black ink, and oversized light-weight display type that announces ideas before UI chrome does. It is not a dark “AI terminal” brand and not a colorful startup landing page. The tone is editorial-calm—gallery, patterns, insights—with product screenshots doing the pedagogical work inside softly rounded frames.

Primary actions collapse to a few black pills (Subscribe, Open full library). Secondary text sits in a dusty taupe so body hierarchy stays quiet against the cream field. The overall impression is museum-label clarity applied to AI UX examples.

## Foundations

### Color

Measured roles:

| Role | Hex | Use |
|------|-----|-----|
| Text primary / accent ink | `#000000` | Headlines, primary UI, filled pills, key labels |
| Text secondary | `#877164` | Supporting labels, quieter meta, taupe accent reading |
| Text secondary (lighter) | `#aa9e92` | Further de-emphasized secondary copy |

Visually reinforced:

- **Canvas** — warm cream / paper (`~#f7f1ea` family) across home and patterns; not pure white, not gray.
- **Surfaces** — cards slightly lighter or matched to canvas with soft separation; screenshot frames may hold their own UI colors inside the media.
- **Strokes** — light warm gray 1px rules around cards and filter chips; occasional 2px emphasis frames on home modules.
- **CTA inversion** — solid black pill + white label; ghost pills keep cream fill + dark stroke/label (“Open full library”, “Log in”).

Accent is typographic and tonal (black vs taupe on cream), not a saturated brand hue. Do not introduce electric purple/blue “AI gradients” into the chrome—the screenshots already bring product color.

### Typography

Declared families were not captured. The system reads as a refined neo-grotesque / editorial sans with a very wide size ladder.

Observed scale (weight · size · line-height):

- **Meta / chip** — 500–600 · **12px / 16px**
- **UI / card title support** — 400–600 · **14px / 20px**
- **Body default** — 400–500 · **16px / 24–26px** (highest occurrence)
- **Deck / lead** — 400–500 · **18px**
- **Section title** — 700 · **24px / 32px**
- **Marketing title** — 700 · **36px / 40px** or 400 · 36px
- **Display** — 400 · **48px / 60px**
- **Hero display** — 300–400 · **60px** (tight lh ~48 on some locks) and **96px** statement sizes on home

Display is intentionally light (300–400) at huge sizes—airier than bold tech heroes. Body stays regular; medium/semibold appear on nav items, filters, and small labels. Line length on decks stays moderate beneath wide headlines.

### Spacing and layout

Spacing clusters: **4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 80 · 96 · 128**.

- **Home** — generous top hero with massive headline + short deck + black CTA; subsequent bands introduce featured pattern stories and collections with large screenshots.
- **Patterns (`/patterns`)** — sticky-feeling top nav; page title row (“Browse N AI UX examples”) with ghost button right; **filter chip row**; then a **3-column card grid** of example thumbnails + captions.
- Horizontal padding is roomy; the grid does not feel packed edge-to-edge.
- Section breaks rely on whitespace more than heavy rules.

## Visual language

### Shape and radius

Measured radii: **6 · 16 · 24**.

- Filter chips and small controls ≈ **full pill** or large radius.
- Example cards / screenshot frames ≈ **16–24px** rounded rects.
- Micro controls / tags ≈ **6px**.
- Primary Subscribe CTA = **black pill** (fully rounded).

### Borders and shadows

- Cards and chips: **1px** light warm borders on all sides (balanced box strokes).
- Home modules sometimes use **2px** frames for stronger editorial blocks.
- Shadows are rare and soft when present (`blur ~30, spread -5`)—more of a gentle photo lift than material elevation. Most separation is border + background, not shadow stacks.

### Imagery

The product is a **screenshot gallery**. Each pattern card shows a real AI product UI (chat, agents, diffs, mobile lists) inside a rounded frame, often with a small “NEW” badge and a tiny `ai` mark. Captions sit below in primary black; the grid is the pedagogy. Hero art can include large wordmarks or feature graphics, but the library’s spine is rectangular UI captures on cream.

### Motion

Not established from stills. Keep any motion editorial (slow fade, light hover lift on cards)—not particle AI clichés.

## Components and states

### Top navigation

- Left: compact `ai` mark + text links (Gallery, AI Patterns, Insights, More).
- Right: icon actions (bookmark, search with keyboard hint), **black Subscribe pill**, text Log in.
- On cream; no thick opaque bar—integrates with paper canvas.

### Hero (home)

- Huge light headline (multi-line OK).
- Short taupe or black deck.
- One black pill CTA.
- Optional secondary ghost control.

### Filter bar (patterns)

- Leading view toggle + dropdown chips (Phases, AI Pattern, Industries, Apps).
- Chips: cream/white fill, warm hairline, dark label, pill radius.

### Pattern card

1. Rounded screenshot (media-first)  
2. Optional **NEW** badge corner  
3. Caption title under image  
4. Quiet meta / source mark  

Grid: three-up on desktop in studied captures.

### Buttons

- **Primary** — black fill, white label, pill.  
- **Secondary** — outlined pill on cream (“Open full library”).  
- Text links in nav without button chrome.

Still captures show default states; hover should stay subtle (border darken, slight shadow) without recoloring the cream system.

## Responsive behavior

Captures are desktop viewports (~1500–1700px wide). Patterns already read as a fluid card grid; expected behavior:

- 3 → 2 → 1 columns for example cards.
- Hero type scales down from 60–96px band but should stay oversized relative to body.
- Nav may collapse into fewer links + menu while keeping the black Subscribe pill visible.
- Filter chips scroll horizontally rather than wrapping into a tall stack when space is tight.

## Practical guidance

**Preserve**

- **Cream paper canvas** + black ink + **taupe secondary** (`#877164` / `#aa9e92`).
- **Light-weight oversized display** paired with 16px body.
- Black pill primary / ghost pill secondary.
- Softly rounded screenshot cards in a clean gallery grid.
- Teaching-by-example layout: filters + captioned UI captures.

**Avoid**

- Dark mode default or neon AI gradients on the chrome.
- Heavy shadows, glassmorphism, or dense dashboard sidebars on marketing pages.
- Bright multi-color badge systems; one small NEW mark is enough.
- Bold condensed display at hero sizes—the airy light face is the signature.
- Pure cold gray backgrounds that kill the paper warmth.

**Adaptation tips**

- For a pattern library: cream page, black subscribe, chip filters, 16–24px radius media cards.
- For an article/playbook home: one giant light headline, short deck, single black CTA, then featured captures.
- Let embedded product screenshots keep their own UI colors; don’t retint them to taupe.

## Scope note

Studied home (`/`) heroes and mid-page gallery bands plus patterns index (`/patterns`) with filters and example grid. Color roles and type sizes are measured; declared font families were not available. Motion, mobile breakpoints, and account/subscribe flows beyond the marketing chrome were not in this capture set.

## Captured pages

[![Home — hero display](https://pin.fontofweb.com/7285?format=jpg)](https://design.withfudge.com/share/pin-7285)

[Home — hero display](https://design.withfudge.com/share/pin-7285)

[![Home — gallery band](https://pin.fontofweb.com/7286?format=jpg)](https://design.withfudge.com/share/pin-7286)

[Home — gallery band](https://design.withfudge.com/share/pin-7286)

[![Home — compact hero](https://pin.fontofweb.com/8555?format=jpg)](https://design.withfudge.com/share/pin-8555)

[Home — compact hero](https://design.withfudge.com/share/pin-8555)

[![Home — top chrome](https://pin.fontofweb.com/7288?format=jpg)](https://design.withfudge.com/share/pin-7288)

[Home — top chrome](https://design.withfudge.com/share/pin-7288)

[![Patterns — library grid](https://pin.fontofweb.com/7291?format=jpg)](https://design.withfudge.com/share/pin-7291)

[Patterns — library grid](https://design.withfudge.com/share/pin-7291)

[![Patterns — display type](https://pin.fontofweb.com/7290?format=jpg)](https://design.withfudge.com/share/pin-7290)

[Patterns — display type](https://design.withfudge.com/share/pin-7290)

[![Patterns — framed modules](https://pin.fontofweb.com/7289?format=jpg)](https://design.withfudge.com/share/pin-7289)

[Patterns — framed modules](https://design.withfudge.com/share/pin-7289)

[![Home — mid section](https://pin.fontofweb.com/7287?format=jpg)](https://design.withfudge.com/share/pin-7287)

[Home — mid section](https://design.withfudge.com/share/pin-7287)

## Colors

- `#000000`
- `#877164`
- `#aa9e92`
- `#ffffff`
