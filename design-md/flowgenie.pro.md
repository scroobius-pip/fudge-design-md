# How flowgenie.pro is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/flowgenie.pro-design)

Last updated: 2026-07-28

## Design character

FlowGenie is a **soft, airy product-marketing site** for a visual logic and forms builder. The system feels like modern multiplayer tooling: pure light canvas, gentle pastel atmospheric blurs, dual-colored primary actions (blue flow / pink form), and crisp product screenshots of a node editor. It is friendly and precise — closer to a design tool landing page than to enterprise workflow software.

What should survive adaptation:
- **Breathing white space** with faint blue/pink ambient glows, not hard section bands.
- **Paired CTAs** that encode the two product verbs (Flow vs Form) in blue and pink.
- **Clean grotesque headlines** at comfortable display sizes (not mega-poster extremes).
- **Product UI previews** as the proof — blueprint nodes, badges, URL chips — rendered on soft elevated cards.

## Foundations

### Color

Structured color tokens were empty; values below are taken from the homepage screenshots.

| Role (interpreted) | Hex | Notes |
| --- | --- | --- |
| Canvas | `#ffffff` | Primary field |
| Ink | `#0a0a0a` | Headlines and body |
| Muted ink | `#5c5c5c` | Supporting sentences, nav |
| Flow CTA | `#3b82f6` | Blue filled pill “Build a Flow” |
| Form CTA | `#ec4899` | Pink filled pill “Build a Form” |
| Success / published | `#22c55e` | Green status chip in product UI |
| Ambient blue | `#dbeafe` | Soft left glow |
| Ambient pink | `#fce7f3` | Soft right glow |
| Card stroke | `#e5e7eb` | Node editor borders |

Color meaning is literal: blue builds flows, pink builds forms. Keep that pairing intact if you extend the system.

### Typography

Families unknown. Observed scale:

- **Hero display:** ~48–56px, weight 400–500, relaxed tracking, sentence case (“Visually program real logic.”).
- **Section titles:** ~48px medium/regular.
- **Body / subcopy:** 16–18px regular.
- **UI / nav / buttons:** 14–16px, medium (500) on buttons and some labels.
- **Product chrome inside shots:** compact 12–14px UI sans.

Tone is conversational and lowercase-friendly in body; headlines use standard sentence capitalization, not aggressive all-caps.

### Spacing and layout

Spacing shows **8 / 12 / 16 / 24 / 32px** for component rhythm and **large vertical leaps (80 / 96 / 144 / 208px+)** between marketing bands. Hero is centered: logo/nav, headline, subcopy, dual CTAs, social proof badge, then a product canvas. Wide desktop captures keep generous side margins; the node-editor preview sits low as a full-width proof strip. Density is low on marketing chrome and medium inside the product screenshot.

## Visual language

- **Ambient gradient mist:** soft blue and pink radial blurs behind the hero — never harsh linear brand gradients.
- **Radii:** 4 / 8 / 12 / 16px on cards and controls; CTAs read as rounded rectangles (~12–16px) more than full capsules.
- **Elevation:** light shadows (`y:1–2`, blur ~2–5, slight negative spread) under buttons and product cards — subtle, not dramatic.
- **Product imagery:** white node cards, colored ports, green “Published” pill, monospaced-feeling URL chips, HTTP method selectors — the UI is the illustration.
- **Logo:** simple genie-lamp mark + wordmark, centered or top-bar.

## Components and states

- **Nav:** text links (Docs, Pricing, Roadmap, Changelog), quiet “Take me to the app” with external affordance.
- **Dual primary buttons:** blue and pink side-by-side, equal visual weight.
- **Social proof chip:** Product Hunt-style bordered pill under CTAs.
- **Section intro:** left-aligned title + one supporting sentence above product proof.
- **Node editor preview:** Start card, If branching node, HTTP request panel, published badge + endpoint URL.
- **Status badge:** small green pill for published state inside the product frame.

Captures show resting marketing + static product UI — no interactive hover series.

## Practical guidance

**Preserve**
- White airy canvas with pastel atmospheric color only in the background glow.
- Blue/pink dual CTA semantics tied to Flow/Form.
- Product editor screenshots as primary imagery.
- Soft 8–16px radii and whisper shadows.

**Avoid**
- Dark mode marketing that throws away the soft tool-like clarity.
- A single generic purple CTA that collapses the Flow/Form color story.
- Dense enterprise tables or heavy border-grid landing sections.
- Loud illustrations that replace the actual blueprint UI.

## Scope note

Studied four homepage viewports at varying widths (roughly laptop to wide desktop). Paths are only `/`; no docs, pricing, or in-app authenticated screens beyond marketing embeds. Font families and formal color tokens were not declared — hexes above are visual reads from the pins.

## Captured pages

[![Hero and dual CTAs](https://pin.fontofweb.com/7692?format=jpg)](https://design.withfudge.com/share/pin-7692)

[Hero and dual CTAs](https://design.withfudge.com/share/pin-7692)

[![Hero alternate crop](https://pin.fontofweb.com/7691?format=jpg)](https://design.withfudge.com/share/pin-7691)

[Hero alternate crop](https://design.withfudge.com/share/pin-7691)

[![Visual programming section](https://pin.fontofweb.com/7690?format=jpg)](https://design.withfudge.com/share/pin-7690)

[Visual programming section](https://design.withfudge.com/share/pin-7690)

[![Full homepage proof](https://pin.fontofweb.com/7689?format=jpg)](https://design.withfudge.com/share/pin-7689)

[Full homepage proof](https://design.withfudge.com/share/pin-7689)

## Colors

- `#ffffff`
- `#0a0a0a`
- `#5c5c5c`
- `#3b82f6`
- `#ec4899`
- `#22c55e`
- `#dbeafe`
- `#fce7f3`
