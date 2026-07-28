# How deepjudge.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/deepjudge.ai-design)

Last updated: 2026-07-28

## Design character

DeepJudge presents as a **premium dark legal-tech brand**: near-black full-bleed canvases, ivory serif display type, and a single centered white “paper” form card. It feels closer to a private members’ site or editorial law journal than to a busy SaaS dashboard. Authority comes from restraint—huge literary headlines, tiny sans supporting copy, and almost no decoration.

What should survive adaptation:

- **Dark full-stage canvas** with one light focal surface.
- **Serif display + quiet sans UI** pairing.
- **Centered, short marketing narratives** rather than multi-column feature walls.
- High-contrast black CTAs on light cards (and inverse on dark fields).

## Foundations

### Color

Measured roles were not retained. Visual system:

- **Canvas**: deep charcoal / near-black (`~#121212`–`#1a1a1a`).
- **Primary text on dark**: warm off-white / ivory.
- **Card surface**: soft warm white / cream.
- **Fields**: light warm gray fills inside the card.
- **Primary button**: solid black rectangle on the light card; white label in small caps/uppercase.
- **Secondary text**: muted gray on dark and on card.

No bright brand hue dominates the marketing shell—confidence is monochrome.

### Typography

Families not declared in the capture data. Observed:

- Hero display ~**96px**, weight 400, line-height ~1.0 — high-contrast serif (editorial “Know what your firm knows”).
- Body/UI ~**16px / 24px** line-height.
- Micro labels ~**12px**.
- Form labels small, sentence case; CTA label uppercase tracking.
- Product pages keep the same serif voice for section titles.

Hierarchy is extreme: one giant line, then whisper-quiet support.

### Spacing and layout

- Home is a **vertical center stage**: headline, short subtitle, then a single card.
- Card uses modest internal padding; fields sit in a **two-column grid** with consistent gutters.
- Radii on card/controls cluster at **4px** and **8px**—slightly soft, never bubbly.
- Large side margins on wide viewports (~500px-class centering math) keep the composition as a floating island.
- Product page captures show long dark marketing scroll with the same monochrome discipline (several viewports, limited structural metrics retained).

## Visual language

- **Flat dark field**; no gradients required for the brand read.
- **One elevated paper card** as the only major surface.
- Corners: 4–8px rounded rectangles.
- Borders minimal; separation is fill contrast (dark vs cream) more than strokes.
- Close (X) control is a minimal glyph in the corner—UI chrome stays invisible.
- Photography/illustration largely absent on these screens; type is the image.

## Components and states

1. **Serif hero stack** — multi-line display + one-sentence sans deck.
2. **Demo request card** — white rounded panel, two-column inputs, select, checkbox row, textarea, legal microcopy, black submit.
3. **Text fields** — filled light gray, no heavy outline.
4. **Primary button** — solid black, compact, uppercase label.
5. **Dismiss control** — top-right icon on the dark stage.
6. **Product marketing sections** — dark continuations of the same type system (captured on `/product`).

Only default/resting visuals are available; validation and hover states were not observed.

## Responsive behavior

Home and product captures span roughly **~950–1700px** widths. The card remains centered; type stays large. Narrower product shots keep the dark full-bleed approach. Dedicated mobile layouts were not clearly differentiated in the set.

## Practical guidance

**Preserve**

- Charcoal stage + single cream card focal point.
- Literary serif display at extreme scale.
- Black rectangular CTAs, not colorful pills.
- Two-column form density inside an otherwise airy page.
- Warm off-whites rather than pure cold gray.

**Avoid**

- Purple/blue “AI gradients” or glass cards.
- Crowding the dark canvas with multiple competing panels.
- Bright multi-color illustrations in the hero.
- Soft huge pill buttons that break the legal-editorial tone.
- Light-mode default without redesigning contrast roles.

## Scope note

Studied `/` (6301) and multiple `/product` viewports (3418–3424). Most product captures retained little spacing/color structure beyond identity; color roles and font families were unavailable. Descriptions of charcoal/ivory come from screenshot reading paired with measured type sizes and radii on the home capture.

## Captured pages

[![Home — dark hero](https://pin.fontofweb.com/6301?format=jpg)](https://design.withfudge.com/share/pin-6301)

[Home — dark hero](https://design.withfudge.com/share/pin-6301)

[![Product — demo request card](https://pin.fontofweb.com/3424?format=jpg)](https://design.withfudge.com/share/pin-3424)

[Product — demo request card](https://design.withfudge.com/share/pin-3424)

## Colors

- `#121212`
- `#f5f2ec`
- `#000000`
- `#ffffff`
