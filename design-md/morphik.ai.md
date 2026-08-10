# How morphik.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/morphik.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Pricing page showing four-tier card layout with serif heading, monospace plan titles, and black pill buttons on white canvas](https://pin.fontofweb.com/5298?format=jpg)](https://design.withfudge.com/share/pin-5298)

[Pricing page showing four-tier card layout with serif heading, monospace plan titles, and black pill buttons on white canvas](https://design.withfudge.com/share/pin-5298)

[![FAQ accordion section with serif heading, monospace question labels, and chevron expand icons on minimal white background](https://pin.fontofweb.com/5297?format=jpg)](https://design.withfudge.com/share/pin-5297)

[FAQ accordion section with serif heading, monospace question labels, and chevron expand icons on minimal white background](https://design.withfudge.com/share/pin-5297)

[![Footer CTA section with large serif display heading, paired buttons, and four-column link grid with logo mark](https://pin.fontofweb.com/5296?format=jpg)](https://design.withfudge.com/share/pin-5296)

[Footer CTA section with large serif display heading, paired buttons, and four-column link grid with logo mark](https://design.withfudge.com/share/pin-5296)

[![Feature grid with code snippet card, architecture diagrams, and deployment options in bordered panels](https://pin.fontofweb.com/5295?format=jpg)](https://design.withfudge.com/share/pin-5295)

[Feature grid with code snippet card, architecture diagrams, and deployment options in bordered panels](https://design.withfudge.com/share/pin-5295)

## Overview

Morphik's visual system is built for developer trust: a stark black-and-white palette, classical serif display type for emotional weight, and utilitarian monospace for functional labels and code contexts. The result feels like a precision instrument wrapped in editorial elegance. Every surface is intentional—white canvas, thin hairline borders, and rounded cards that contain complex technical content without visual noise. The system prioritizes readability and hierarchy through type contrast rather than color complexity, making it suitable for documentation, pricing, and product marketing surfaces where clarity must coexist with brand personality.

## Colors

The palette is deliberately restrained, using black, white, and two supporting neutrals to create hierarchy through value contrast rather than hue variation.

| token | value | use |
|---|---|---|
| ink | `#000000` | Primary text, filled buttons, active borders, logo mark |
| canvas | `#ffffff` | Page background, card surfaces, button text on dark fills |
| muted-ink | `#6b7280` | Secondary body text, descriptions, footer links, inactive states |
| surface | `#f3f4f6` | Code block backgrounds, subtle panel fills, hover states |
| border | `#e5e7eb` | Card outlines, dividers, accordion borders, footer rules |

The system operates in a single light mode. Black serves as the sole accent—there are no brand colors beyond the functional neutrals. Photography and diagrams introduce their own color, but the UI never competes with them. Dark text on white canvas provides maximum contrast for long-form reading, while muted-ink creates gentle hierarchy for supporting information. Borders are consistently light gray, appearing as optical hairlines that define card boundaries without visual weight.

## Typography

Three families create the system's voice: Bodoni Moda 11 Pt and Bodoni Moda 11 Pt-Italic for display moments, and Geist with Geist Mono for everything functional. The contrast between classical serif and modern sans-monospace is the central typographic tension.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Bodoni Moda 11 Pt | 3.5rem | 400 | 1.1 | -0.01em | Page titles, CTA headings |
| section-display | Bodoni Moda 11 Pt | 2.5rem | 400 | 1.15 | -0.01em | Section headings, FAQ titles |
| body | Geist | 1rem | 400 | 1.6 | 0em | Paragraphs, descriptions |
| body-small | Geist | 0.875rem | 400 | 1.5 | 0em | Card descriptions, footer text |
| label | Geist Mono | 0.875rem | 400 | 1.4 | 0em | Plan names, FAQ questions, code labels |
| navigation | Geist | 0.875rem | 400 | 1.5 | 0em | Footer links, header items |

Bodoni Moda 11 Pt appears only at display sizes, where its high contrast and classical proportions create authority. Bodoni Moda 11 Pt-Italic is available for display emphasis where slanted letterforms are needed. Geist handles all body reading with generous line height. Geist Mono is reserved for labels that need mechanical precision—pricing plan names, accordion questions, and any interface element that should feel like a control rather than prose. Verify licensing for these families before production use. Geist and Geist Mono are designed by Basementstudio Andrés Briganti Mateo Zaragoza and provided by Basementstudio Vercel Andrés Briganti Guido Ferreyra Mateo Zaragoza.

## Layout

The page uses a centered single-column flow with maximum content width around 1200px. Sections stack vertically with generous whitespace between them—typically 6rem of vertical padding. Content blocks are narrow and centered, creating a reading column that feels editorial rather than full-bleed commercial.

Cards break the single-column rule by sitting in horizontal grids. The pricing page shows four equal-width cards in a row, each with internal vertical stacking. Feature grids use asymmetric layouts: a large two-thirds card beside a one-third card, or three equal cards in a row. All cards share the same internal padding of 1.5rem and the same 0.5rem corner radius.

The footer expands to a four-column link grid, left-aligned within the same max-width container. Below that, a full-width hairline separates the copyright bar with the logo mark on the left and legal links on the right.

## Visual language

The aesthetic is "technical minimalism with editorial flair." Black and white dominate; color appears only in user-generated content like code syntax highlighting or diagram illustrations. Surfaces are flat—no shadows, no gradients, no glassmorphism. Depth is created solely through borders and spacing.

Cards are the primary content container. Every card has a 1px border in light gray, rounded corners, and white fill. This treatment unifies pricing tables, feature explanations, and code examples into a single visual family. The consistency means users never need to re-learn container semantics.

Iconography is line-based and monochrome, matching the thin stroke weight of borders. Small emoji-style icons appear inline for personality—a rocket, a sparkle, a heart—breaking the monochrome rule in a controlled, humanizing way.

Code blocks receive special treatment: light gray background, syntax highlighting in standard terminal colors, and a "Copy" button floating at the upper right. This is the only place where surface color shifts from white, and it signals "executable content" distinct from marketing prose.

## Components

### Pricing card

- **Anatomy**: Vertical stack with plan name, tagline, price, usage section, perks list, support tier, and bottom action button.
- **Surface**: White fill with 1px light gray border, 0.5rem radius.
- **Typography**: Plan name in Geist Mono label style; price in large Geist numerals; body details in Geist body-small.
- **Shape**: Consistent padding of 1.5rem all sides.
- **Composition**: Equal-width cards in horizontal row with 1.5rem gap.
- **Variants**: "Most Popular" badge appears as a small black pill overlapping the top edge. Enterprise card shows "Custom" price and outlined button instead of filled.

### FAQ accordion

- **Anatomy**: Stacked rows with question text, chevron icon, and expandable answer area.
- **Surface**: White with 1px border top and bottom; rows touch with no gap.
- **Typography**: Question in Geist Mono label style; answer in Geist body-small with muted-ink color.
- **Shape**: No border radius on individual rows; the stack reads as a single ruled list.
- **Composition**: Chevron right-aligned, rotating to indicate open state.
- **States**: Closed row shows only question; open row reveals answer with additional vertical padding.

### CTA section

- **Anatomy**: Centered serif heading, supporting paragraph, and paired buttons.
- **Surface**: White canvas, no card container.
- **Typography**: Hero-display heading in Bodoni Moda 11 Pt; body text in Geist body style, muted-ink.
- **Composition**: Buttons sit side by side with 1rem gap. Primary button is black fill with white text; secondary is white fill with black border.
- **Spacing**: Generous 6rem vertical padding above and below.

### Feature card

- **Anatomy**: Media area (code block, diagram, or illustration) above text content.
- **Surface**: White card with standard border and radius.
- **Typography**: Title in Geist body with semibold weight; description in Geist body-small muted.
- **Composition**: Media fills card width with internal padding; text sits below with standard card padding.
- **Variants**: Large cards span two columns; standard cards span one.

### Footer

- **Anatomy**: Four-column link grid, full-width divider, and bottom bar with logo and legal links.
- **Surface**: White canvas throughout.
- **Typography**: Column headers in Geist body-small semibold; links in Geist body-small muted-ink.
- **Composition**: Columns evenly distributed; bottom bar flexes between logo/copyright left and legal links right.

## Responsive behavior

The design should maintain its single-column reading experience on narrow viewports. Pricing cards should stack vertically rather than squeezing into narrow columns. FAQ accordions remain full-width at all sizes. Feature grids should collapse from multi-column to single-column, with large cards becoming standard width. The serif display type may need slight size reduction on mobile to prevent overflow, but the weight and family should remain consistent. Touch targets for buttons and accordion rows should maintain at least 44px height.

## Practical implementation guidance

### Preserve
- The stark black-and-white palette with single gray accent family
- Bodoni Moda 11 Pt exclusively for display headings at large sizes
- Geist Mono for all functional labels, plan names, and control text
- Consistent 1px light gray borders on every card variant
- Pill-shaped buttons for primary actions, outlined rectangles for secondary

### Avoid
- Adding brand colors beyond the functional neutrals
- Using Bodoni Moda for body text or small sizes where readability suffers
- Shadows or gradients on cards—the flat border is the signature
- Mixing multiple border radius treatments; keep 0.5rem for cards, 9999px for buttons

### Recommended build order
1. Establish the type system with Bodoni Moda 11 Pt and Geist loaded
2. Implement the card primitive with border, radius, and padding
3. Build the pricing grid as the most complex layout
4. Add the FAQ accordion with chevron rotation
5. Polish the footer and CTA sections

### Accessibility
- Ensure black text on white canvas meets WCAG AAA contrast
- Muted-ink on white should still meet AA for body text; verify if used at smaller sizes
- Add focus indicators to buttons and accordion triggers; the default outline may need enhancement against thin borders
- Chevron icons in accordions should have aria-expanded state
- Code blocks need keyboard-accessible copy buttons with visible focus

## Scope note

This guide covers the pricing page and homepage marketing surfaces visible in the supplied images. Navigation header, mobile breakpoints, form interactions, and dark mode are not represented. Measurements are practical adaptation targets.
