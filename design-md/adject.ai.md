# How adject.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/adject.ai-design)

Last updated: 2026-07-28

## Design character

Adject presents as a **confident consumer-SaaS launch site** for AI product imagery. The system is bright, spacious, and product-demo forward: a pure white canvas, near-black geometric headlines, and a single electric blue used for primary actions and key interactive moments (expanded FAQ, main CTAs). Floating UI mockups and soft multi-stop shadows sell “magic output” without cluttering the chrome.

What should survive adaptation:

- **White stage + one saturated blue** as the only loud brand color in UI.
- **Billboard headlines** with tight, modern geometric sans energy.
- **Pill / highly rounded controls** and soft elevated cards.
- **Demo-led storytelling**—browser/product frames and before/after style imagery carry the pitch.

## Foundations

### Color

Structured palette roles were not exported as hex roles on every capture; screenshots establish a clear system:

- **Canvas**: pure white marketing background.
- **Primary text**: near-black / ink for headlines and body.
- **Secondary text**: medium gray for supporting lines under FAQ titles and nav.
- **Brand / CTA blue**: vivid saturated blue fills on primary buttons and the open FAQ row (white label on blue).
- **Soft surfaces**: very light gray / cool gray panels behind collapsed FAQ rows and subtle section bands.
- **Info / quiet fills**: pale gray rounded wells; no rainbow of semantic status colors in the marketing chrome.

Keep the blue scarce so it always means “act” or “selected.”

### Typography

Declared families were not available. Measured styles show a clear scale:

| Role (interpreted) | Weight | Size (approx.) | Notes |
| --- | --- | --- | --- |
| Hero display | 600–700 | **48–80px** | Dominant marketing lockup |
| Section title | 600 | **20–24px** | FAQ heading, feature heads |
| Lead / subcopy | 500 | **15–18px** | Supporting sentences |
| UI / meta | 400–500 | **11–14px** | Nav, labels, dense UI in mockups |
| Micro | 400 | **12px** | High occurrence in product chrome |

Line-heights on large titles sit relatively tight (e.g. 48 → ~53px on one capture). Body stays readable but not airy-blog. The overall feel is **geometric, slightly compact, product-marketing modern**—not editorial serif, not playful script.

### Spacing and layout

Recurring measured spacing clusters around **10 / 16 / 20 / 30 / 40 / 60–64px**. Layout habits:

- Wide marketing max width with generous vertical section padding.
- Hero often splits **copy left / product visual right** on large viewports.
- FAQ is a **single centered column** of full-width rows.
- Nav is a simple top bar: wordmark left, text links, then Log in + filled Get started.

Density is marketing-comfortable, not dashboard-tight.

## Visual language

- **Radii**: highly rounded. Controls and FAQ open states land around **30–40px**; larger soft shapes push toward **40–60px**; smaller chips ~**6–15px**. This is a pill-friendly system.
- **Borders**: light 1px separators appear on some framed UI; many cards rely on fill + shadow instead of hard outlines.
- **Shadows**: a signature **stacked soft elevation** (multiple y/blur steps from ~1px up through ~25px blur) under floating product cards and mockups—glassy SaaS depth without harsh single drop shadows. Occasional wide soft glow (blur ~39, negative spread).
- **Imagery**: lifestyle product shots, apparel on models, and in-UI generators (prompt bars, image grids) framed as floating windows.
- **Motion**: not established from stills; the static language already implies lift via shadow stacks.

## Components and states

- **Primary button**: saturated blue fill, white label, large pill radius—used for Get started / main conversion.
- **Secondary / text button**: quiet gray or black text (Log in) without heavy outline competition.
- **Nav bar**: minimal, high-contrast wordmark, sparse links.
- **Product mockup cluster**: overlapping cards, browser chrome, prompt UI—treated as hero art.
- **FAQ accordion**:
  - Collapsed: light gray rounded row, dark question, trailing +.
  - Expanded: **full blue bar** with white question and ×, answer in gray text on a softer well beneath.
- **Section headers**: large centered title + one-line gray subtitle (FAQ pattern).

Only visually evidenced states are collapsed vs expanded FAQ and default CTAs—do not invent hover specs.

## Responsive behavior

Captures span roughly **800×779** to **2048×1194** (plus mid widths):

- Large widths: multi-column heroes, floating mockup compositions, wide nav.
- Narrower widths: type scales down (hero display still large but not 80px), stacks into single column, FAQ remains full-bleed rows.
- Radii and blue CTA language stay consistent; shadows remain on elevated product art where present.

## Practical guidance

**Preserve**

- White canvas, black type, one electric blue.
- Oversized geometric headlines.
- Pill radii and soft multi-layer elevation on demos.
- FAQ selected state as a bold blue slab (highly distinctive).

**Avoid**

- Introducing secondary bright brand colors in chrome.
- Hard 4px enterprise corners or dense table UI on marketing pages.
- Tiny weak CTAs—the blue pill should feel inevitable.
- Cluttering the hero with more than one primary action cluster.

**Adaptation tips**

- Rebuild as: neutral geometric sans, white page, blue matched to the saturated CTA sampled from screenshots, spacing on a 8/10px rhythm with 20–32px section gaps, and fully rounded pills for primary actions.
- Keep product proof visual (mockups) equal in weight to the headline.

## Scope note

Four homepage viewport captures of adject.ai (`/`) across large and mid widths. Font family names and formal color-role exports were largely empty; color and type character come from measured sizes/weights plus screenshot inspection. No authenticated app shell was studied—marketing system only.

## Captured pages

[![Home hero — billboard type + product mockups](https://pin.fontofweb.com/7678?format=jpg)](https://design.withfudge.com/share/pin-7678)

[Home hero — billboard type + product mockups](https://design.withfudge.com/share/pin-7678)

[![Mid-width marketing composition](https://pin.fontofweb.com/7677?format=jpg)](https://design.withfudge.com/share/pin-7677)

[Mid-width marketing composition](https://design.withfudge.com/share/pin-7677)

[![Product demo band](https://pin.fontofweb.com/7675?format=jpg)](https://design.withfudge.com/share/pin-7675)

[Product demo band](https://design.withfudge.com/share/pin-7675)

[![FAQ — expanded blue row](https://pin.fontofweb.com/7676?format=jpg)](https://design.withfudge.com/share/pin-7676)

[FAQ — expanded blue row](https://design.withfudge.com/share/pin-7676)
