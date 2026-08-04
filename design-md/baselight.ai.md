# How baselight.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/baselight.ai-design)

Last updated: 2026-08-04

## Captured pages

[![Light homepage hero with the structured backbone headline and glassy panels](https://pin.fontofweb.com/7851?format=jpg)](https://design.withfudge.com/share/pin-7851)

[Light homepage hero with the structured backbone headline and glassy panels](https://design.withfudge.com/share/pin-7851)

[![Dark feature stage with three product columns and one centered action](https://pin.fontofweb.com/7852?format=jpg)](https://design.withfudge.com/share/pin-7852)

[Dark feature stage with three product columns and one centered action](https://design.withfudge.com/share/pin-7852)

[![Pricing page with coral eyebrow text, four cards, and the billing toggle](https://pin.fontofweb.com/7853?format=jpg)](https://design.withfudge.com/share/pin-7853)

[Pricing page with coral eyebrow text, four cards, and the billing toggle](https://design.withfudge.com/share/pin-7853)

[![Catalog workspace with search, filters, and the dense dataset table](https://pin.fontofweb.com/7854?format=jpg)](https://design.withfudge.com/share/pin-7854)

[Catalog workspace with search, filters, and the dense dataset table](https://design.withfudge.com/share/pin-7854)

## Overview

Baselight presents structured data as a calm, premium product rather than a noisy dashboard. The page language is sparse, the alignment is strict, and the hierarchy depends on scale instead of ornament. A warm off-white ground carries the marketing story; white cards lift above it; deep night sections arrive later to reset the pace. Mint-teal marks identity and motion points. Black pills, compact labels, and large Nohemi headlines keep the system confident without feeling loud.

The public pages move through a clear sequence. The hero introduces the brand with a large statement, a short supporting line, and a single clear action. The catalog workspace turns that promise into a dense but orderly table. Pricing shifts to a softer glow with centered plan choices and four cards. A dark explanatory stage and a dark footer close the story with stronger contrast and quieter copy. The system works because each chapter keeps the same discipline: one dominant message, one principal surface, and one accent lane.

## Colors

Baselight is light-first. Warm canvas values support the homepage and the catalog; bright white surfaces separate cards and shells from the page ground; dark surfaces appear only when the page needs a stronger explanatory or closing register. Teal is the main identity color and the clearest positive accent. Coral belongs to pricing emphasis and small commercial markers. Violet appears as a secondary highlight in the data and product visuals. Neutral borders stay pale so table structure and card edges remain visible without hard outlines.

| token | hex | use |
|---|---|---|
| action | `#000000` | Filled pills, strong CTAs, and the darkest interactive fill |
| ink | `#111111` | Main text on light and warm surfaces |
| ink-soft | `#696969` | Supporting copy, table meta, and quieter labels |
| canvas | `#F4F2F0` | Primary page ground on the marketing pages |
| canvas-soft | `#F5F2F0` | Slightly warmer off-white used for soft gradient fields |
| surface | `#FCFCFD` | Raised cards and the catalog workspace shell |
| surface-plain | `#FFFFFF` | White cards, pills, and high-contrast fills |
| surface-night | `#131621` | Dark explanatory sections and the footer ground |
| surface-ink | `#2D2342` | Deep shadow tone and dark-layer support |
| brand | `#0DBF9B` | Primary teal accent, logo mark, and positive detail color |
| brand-deep | `#0D9488` | Cooler teal support tone for small interface accents |
| accent-coral | `#D9613D` | Pricing eyebrow, warm emphasis, and feature icons |
| accent-coral-deep | `#D8613C` | Alternate coral used in the same commercial family |
| accent-coral-soft | `#FB8A6B` | Softer coral highlight in the pricing glow |
| accent-violet | `#886BFB` | Secondary graphic note in the data/product visuals |
| border | `#D6D6E7` | Card rules, table lines, and shell separators |
| border-muted | `#A4A4A4` | Quieter separators and inactive neutral UI detail |
| shadow | `#000000` | Dark shadow base and depth support |

## Typography

Nohemi carries the large headlines. Wanted Sans Std handles the dense product copy, labels, and table text. Wanted Sans appears in a few softer supporting passages. Inter is reserved for the smallest button text. The hierarchy depends on size, weight, and line length more than on switching families. Reuse requires separate licensing checks for each family; Inter has no credit entry in the packet.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Nohemi | 4rem | 400 | 1 | -0.01em | Main homepage and pricing headline |
| section-display | Nohemi | 3rem | 300 | 1 | -0.01em | Dark stage headline and other large statements |
| lead | Wanted Sans Std | 1.65rem | 400 | 1.55 | 0em | Hero support copy and pricing intro lines |
| metric | Nohemi | 2rem | 200 | 1 | 0em | Big numerical callouts and compact stats |
| feature-copy | Wanted Sans | 1.125rem | 400 | 1.5 | 0em | Feature paragraphs and softer explanatory text |
| body | Wanted Sans Std | 1rem | 400 | 1.55 | 0em | Catalog rows, card copy, and general prose |
| body-strong | Wanted Sans Std | 1rem | 600 | 1.4 | 0em | Strong labels, selected states, and card emphasis |
| label | Wanted Sans Std | 0.875rem | 600 | 1.5 | 0.05em | Filters, tab labels, and small UI text |
| micro-label | Wanted Sans Std | 0.75rem | 600 | 2 | 0.05em | Eyebrows, tiny section markers, and pricing tags |
| button | Inter | 0.875rem | 500 | 1.43 | 0em | Small filled buttons and compact control text |

The page uses a limited rhythm of large display text, one supportive lead line, then a steady body size for the product surface. Letter spacing is subtle except on the smallest labels, where a little tracking gives the interface a crisp, engineered edge. The result is editorial at the top and operational in the workspace.

## Layout

The layout is centered, wide, and measured. The homepage hero leaves a lot of breathing room around the statement, letting the eye settle on the left-aligned headline before moving to the right-side metric stack or product illustration. Navigation sits in a thin top band and stays visually light so the hero can carry the opening.

The catalog page uses a very different structure but the same restraint. A large rounded shell holds the search field, tabs, filter chips, and a dense table. The shell is wide enough to feel like a real workspace, but the internal spacing keeps rows readable. The table depends on clear horizontal grouping: name at left, then provider, update time, tables, size, usage, and stars. Because the page has many columns, the row structure needs compact text and stable spacing more than decorative framing.

Pricing is centered and symmetrical. The introductory text sits above a feature grid, then a toggle, then four equal cards. Each card is tall enough to support a big plan name, a price, short explanatory text, and a checklist. This layout is effective because all four plans share the same visual weight; the difference comes from content, not from wildly different shapes.

The darker sections use a stronger block format. The dark explanatory stage turns into a single large container with a clear headline, a short paragraph, and subordinate modules or cards. The footer extends that logic with a wide multi-column link field and a quiet legal strip. The page never becomes crowded; it simply changes surface tone when the story needs a new register.

## Visual language

Baselight’s visual language is restrained, technical, and soft-edged. The edges are rounded, but not bubbly. Cards usually sit at 8px to 16px radii, while the larger pill controls use a much fuller curve. This gives the interface two shape scales: compact controls and larger panels. The contrast between those scales keeps the product looking polished without becoming decorative.

Depth is light. Most white cards float through spacing and a faint shadow rather than thick borders. The darkest sections rely on the surface change itself more than on stacked shadows. The result is a calm architecture that feels precise. Borders are used where they help structure, especially in the table and on small controls, but they never dominate the layout.

Color carries the visual rhythm. Teal marks identity and status. Coral introduces commercial energy on the pricing page. The warm canvas prevents the white cards from feeling sterile. Dark sections are used sparingly so the lower page can read as a deliberate shift rather than a second design language.

Imagery and illustration lean toward product reality. Floating panels, soft chart blocks, and pale data forms explain the platform without turning the page into a pure marketing collage. Even when the surfaces are abstracted, they still feel like software parts. That balance is the defining trait: structured, calm, and unmistakably data-driven.

## Components

### Header

The header is minimal and horizontal. The logo sits at the left, navigation items sit across the center, and a black sign-up pill closes the row at the right.

- **Anatomy:** Mark, product links, solution links, docs, pricing, blog, and one filled action.
- **Typography:** Small uppercase-feeling labels with compact spacing and a clean 14px utility face.
- **Shape:** The sign-up control uses a pill form; the rest of the header stays flat.
- **Composition:** The header should stay quiet enough that the hero headline dominates the opening frame.

### Hero statement block

The homepage hero relies on one oversized sentence, a short supporting line, and one primary action.

- **Anatomy:** Eyebrow, large headline, short paragraph, pill action, and a separate metric stack or supporting link.
- **Surface:** Warm canvas or very pale backdrop.
- **Typography:** Nohemi for the main statement; Wanted Sans Std for the smaller explanatory line.
- **Spacing:** Large vertical separation around the block; the copy stays compact within that space.
- **Hierarchy:** One line carries the page; the support text explains, but does not compete.

### Catalog workspace

The catalog section looks like a real work surface, not a marketing card.

- **Anatomy:** Title row, search field, tabs, filter chips, table header, and many data rows.
- **Surface:** White shell with a soft edge and a pale border.
- **Typography:** Strong label text for the tabs and filters; regular body text for rows.
- **Shape:** Rounded outer shell, smaller rounded chips, and clean rectangular row structure.
- **Visible states:** The active tab reads as selected through placement and contrast; the search field reads as a soft input rather than a hard box.

### Pricing stack

The pricing page is built from a centered introduction, a small feature grid, a yearly/monthly toggle, and four even cards.

- **Anatomy:** Coral eyebrow, large headline, short subtitle, icon-and-copy benefits, toggle, and plan cards.
- **Typography:** Nohemi for the heading and the plan names; Wanted Sans Std for the supporting lines; Inter for the toggle or action text where the interface uses a compact utility face.
- **Surface:** Warm glow behind the content, then white cards below.
- **Shape:** The toggle is pill-shaped; the cards are gently rounded rectangles.
- **Hierarchy:** All plans remain comparable; the stronger hierarchy comes from price and copy, not from radically different panel sizes.

### Dark storytelling panel

The darker sections carry the product story with more weight and a quieter background.

- **Anatomy:** Large statement, supporting copy, grouped cards or modules, and a strong centered or right-aligned action.
- **Surface:** Deep night ground with white text and light product accents.
- **Typography:** Nohemi headline, then Wanted Sans Std support text.
- **Composition:** The content should remain spacious; dark surfaces need even more breathing room than light ones.
- **Visible states:** The active action reads as a filled white or black pill depending on context, but always with clear contrast.

### Footer

The footer uses the deepest surface and the smallest contrast step in the system.

- **Anatomy:** Brand mark, newsletter or prompt line, multi-column links, and legal text.
- **Surface:** Near-black ground with white text.
- **Typography:** Small body and label styles; no large display type.
- **Spacing:** Wide column gaps and a clear break before the legal row.
- **Hierarchy:** Utility comes first, then navigation, then legal information.

## Responsive behavior

On smaller screens, the visual order should stay intact: statement, support line, action, then product detail. The catalog shell should compress into a single column or an overflow-safe table structure. Pricing should collapse from four cards to a stacked or two-up arrangement while preserving the same card language. Navigation should reduce without losing the sign-up control. Dark sections should keep their contrast, but their internal spacing must tighten so the page remains readable without turning cramped.

## Practical implementation guidance

### Preserve

- Keep the warm canvas, white cards, and deep night sections as distinct surface roles.
- Keep Nohemi reserved for the largest statements and metric moments.
- Keep black pills as the strongest action shape.
- Keep teal as the brand signal and coral as the pricing signal.
- Keep table structure clear through spacing and pale separators, not heavy rules.

### Avoid

- Avoid adding more accent colors; the system already has enough color range.
- Avoid thick borders around every panel; the layout depends on air and surface change.
- Avoid mixing the dark-footer palette into the catalog or pricing areas.
- Avoid turning every module into a pill; rounded controls and rounded panels play different roles.
- Avoid oversized shadows or blur-heavy effects that weaken the clean, analytical tone.

### Recommended build order

1. Set the surface roles: canvas, white shell, dark stage, footer.
2. Build the Nohemi hierarchy and the Wanted Sans Std body system.
3. Add the pill actions and compact labels.
4. Recreate the catalog workspace with search, tabs, filters, and table rows.
5. Add the pricing section with the coral eyebrow, feature grid, toggle, and four cards.
6. Finish with the dark explanatory block and the footer.

### Accessibility

- Keep text contrast strong on both warm and dark surfaces.
- Make the search field, tabs, toggle, and pills clearly focusable.
- Do not depend on color alone for table meaning; keep the numbers and labels present.
- Preserve readable line length in the hero and pricing intro.
- Keep icon-only controls paired with text or accessible labels.

## Scope note

This guide covers the public homepage, catalog workspace, pricing page, dark explanatory stage, and footer. Measurements are normalized to a 0.125rem step. Mobile compression, exact breakpoint behavior, hover and press motion, and font licensing are not included.
