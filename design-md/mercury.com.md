# How mercury.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/mercury.com-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with Mercury dashboard product screenshot, navigation bar, and partner logo strip on warm off-white background](https://pin.fontofweb.com/8862?format=jpg)](https://design.withfudge.com/share/pin-8862)

[Homepage hero with Mercury dashboard product screenshot, navigation bar, and partner logo strip on warm off-white background](https://design.withfudge.com/share/pin-8862)

[![Dark-themed account panel showing credit card and treasury balances with circular icons and auto-transfer rules footer](https://pin.fontofweb.com/8251?format=jpg)](https://design.withfudge.com/share/pin-8251)

[Dark-themed account panel showing credit card and treasury balances with circular icons and auto-transfer rules footer](https://design.withfudge.com/share/pin-8251)

[![Pricing FAQ accordion section with minimal light background and chevron disclosure icons](https://pin.fontofweb.com/7845?format=jpg)](https://design.withfudge.com/share/pin-7845)

[Pricing FAQ accordion section with minimal light background and chevron disclosure icons](https://design.withfudge.com/share/pin-7845)

[![Customer testimonial quote with bold lead-in and attribution on clean white background](https://pin.fontofweb.com/7844?format=jpg)](https://design.withfudge.com/share/pin-7844)

[Customer testimonial quote with bold lead-in and attribution on clean white background](https://design.withfudge.com/share/pin-7844)

## Overview

Mercury's design system presents a sophisticated dual-mode interface that serves both a dark, immersive dashboard experience and a warm, approachable marketing presence. The visual language is built on extreme contrast: deep near-black surfaces for the product interface, and soft warm off-whites for public-facing pages. Two related type families—Arcadia and Arcadia Display-Variable—carry the entire typographic load through their variable weight axes, producing everything from delicate 360-weight subheadings to crisp 480-weight headlines without switching to unrelated families. The result is a cohesive, premium fintech aesthetic that feels engineered rather than decorated—clean lines, generous whitespace, and precise weight gradations create hierarchy without relying on color variation or ornamental elements.

## Colors

The color architecture operates in two distinct modes that share a common accent. The product interface uses a true dark mode with pure black canvas, elevated near-black surfaces, and cool-tinted grays for text. Marketing pages invert this to a warm off-white system with deep charcoal ink.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary product background, dashboard base layer |
| surface | #171721 | Card backgrounds, elevated panels, account widgets |
| surface-elevated | #1C1C23 | Hover states, focused elements, modal backdrops |
| ink | #EDEDF3 | Primary text on dark surfaces, headings, body copy |
| muted-ink | #C3C3CC | Secondary text, descriptions, placeholder content |
| secondary-ink | #70707D | Tertiary labels, metadata, disabled states |
| accent | #5266EB | Primary action buttons, links, positive indicators |
| accent-hover | #535461 | Subtle hover backgrounds, secondary actions |
| warm-canvas | #F6F5F2 | Marketing page backgrounds, hero sections |
| warm-ink | #272735 | Primary text on light surfaces, headings |
| warm-muted | #707393 | Secondary text on light backgrounds |
| border-subtle | #28253B | Dividers on dark surfaces, card borders |
| border-warm | #EFEEE9 | Dividers on light surfaces, FAQ separators |

The dark mode dominates the product experience. Dashboard cards, account panels, and navigation all sit on pure black or near-black surfaces with high-contrast off-white text. The accent blue appears sparingly—reserved for primary actions like "Send" buttons and positive value indicators. Marketing pages shift to the warm system: off-white backgrounds with charcoal text maintain readability while feeling more approachable than the stark product interface. The transition between modes is handled through full-page context rather than mixed surfaces; a given page commits to one mode entirely.

## Typography

Mercury employs two related type families from Family Type: Arcadia and Arcadia Display-Variable. Both are variable fonts that enable precise weight gradations from 360 to 480, creating distinct roles without introducing italic styles. All weights render crisply across sizes.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Arcadia | 5.25rem | 360 | 1.1 | normal | Homepage hero headlines, large numerical displays |
| section-display | Arcadia | 3.375rem | 480 | 1.1 | 0.01em | Section headings, pricing page titles |
| headline | Arcadia | 2rem | 480 | 1.15 | 0.015em | Card titles, feature headings |
| subheadline | Arcadia | 1.75rem | 360 | 1.2 | normal | Supporting headlines, secondary headings |
| body | Arcadia | 1rem | 400 | 1.5 | normal | Primary body text, descriptions, navigation |
| body-small | Arcadia | 0.875rem | 400 | 1.5 | normal | Compact body text, button labels, metadata |
| label | Arcadia | 0.75rem | 400 | 1.4 | 0.02em | Captions, timestamps, legal disclaimers |
| navigation | Arcadia | 1rem | 420 | 1 | normal | Top-bar navigation links |
| button | Arcadia | 1rem | 420 | 1 | normal | Button text, call-to-action labels |
| quote | Arcadia | 2rem | 360 | 1.15 | 0.015em | Testimonial body, pull quotes |

The weight system is intentional and narrow. Regular (400) handles body text; 420 adds slight emphasis for interactive elements like buttons and links; 480 provides clear headline presence; 360 offers an elegant, light weight for large display sizes where heavier weights would feel crude. Letter spacing tightens slightly at larger sizes to maintain optical density. Line heights stay compact for UI elements (1.0 for buttons, 1.1 for displays) and expand for reading text (1.5 for body).

Arcadia Display-Variable is available for large-scale display treatments where the dedicated display cut may offer refined proportions at extreme sizes. Verify licensing for these families before production use. Both Arcadia and Arcadia Display-Variable are available from Family Type.

## Layout

The layout system relies on a consistent horizontal gutter and generous vertical rhythm. Content is constrained to a centered container with fixed side margins, creating an even frame around all content.

The base spacing unit is 0.125rem (2px), derived from the type scale step. Key layout values include:

| token | value | use |
|---|---|---|
| gutter | 2rem | Horizontal page padding, content inset |
| section | 5rem | Standard vertical spacing between sections |
| section-large | 8rem | Hero-to-content transitions, major page divisions |
| component-gap | 1.5rem | Internal spacing within cards and component groups |

Page containers use `0px 32px` horizontal padding (2rem at 16px root), with `0px 52px` margins creating an additional content inset on wider viewports. Vertical section spacing ranges from `40px` (2.5rem) for tight groupings to `144px` (9rem) for major page breaks. The dashboard interface shown in the hero image uses a full-bleed product screenshot within these constraints, while marketing content like the FAQ and testimonials center within the padded container.

The navigation bar spans full width with internal padding, sitting above the content container. Dashboard cards and account panels use internal padding of `1.5rem` to `2rem`, with `0.75rem` corner radii creating subtle elevation without heavy shadows.

## Visual language

Mercury's visual character is defined by restraint and precision. The interface avoids decorative elements in favor of typographic hierarchy and spatial organization. Rounded corners appear consistently but modestly—pill-shaped buttons (40px radius, effectively full pills) contrast with slightly rounded panels (12px) and sharp-edged content areas.

The dark product interface uses subtle surface elevation rather than shadows to indicate hierarchy. Cards sit on slightly lighter backgrounds than the canvas, creating depth through value rather than blur or offset. The account panel image shows this clearly: a near-black card on a pure black ground, with internal rows separated by thin dividers rather than additional background shifts.

Iconography appears as simple line or filled circles in the account panel, maintaining the geometric restraint. Partner logos in the homepage hero strip are rendered in monochrome, subordinating brand color to Mercury's controlled palette.

The warm marketing mode introduces softer edges. The FAQ section uses hairline warm borders between items rather than background shifts. Testimonials float on pure white with generous surrounding space, letting the typographic weight variation carry all emphasis. The overall impression is of a system that trusts its type and spacing to do the communicative work.

## Components

### Navigation bar

- **Anatomy**: Logo mark left, hierarchical text links center ("Products", "Solutions", "Resources", "About", "Pricing"), utility actions right ("Log in", "Open account")
- **Surface**: Transparent over hero content, or solid dark on product pages
- **Typography**: `{typography.navigation}` for links, `{typography.button}` for primary action
- **Shape**: Full-width bar, no border radius
- **Spacing**: `0.5rem` between nav items, `1.25rem` horizontal padding on pill buttons
- **Composition**: Flex row with space-between alignment, vertically centered items

### Primary button

- **Anatomy**: Text label centered within pill shape
- **Surface**: `{colors.accent}` background, `{colors.ink}` text; no border
- **Typography**: `{typography.button}`
- **Shape**: Full pill (`9999px` radius)
- **Spacing**: `0.625rem` vertical padding, `1.25rem` horizontal padding
- **Variants**: Dark mode uses accent blue; light mode marketing pages may use dark fill

### Secondary / ghost button

- **Anatomy**: Text label only, no background fill
- **Surface**: Transparent background, inherits text color from context
- **Typography**: `{typography.button}`
- **Shape**: Full pill radius
- **Spacing**: `0 1.25rem` horizontal padding, minimal vertical padding
- **States**: Hover may apply `{colors.accent-hover}` background

### Account card (dashboard)

- **Anatomy**: Header with title and actions, list of account rows with circular icons, footer with status indicator
- **Surface**: `{colors.surface}` background, `{colors.border-subtle}` dividers
- **Typography**: `{typography.body}` for account names, `{typography.body-small}` for balances
- **Shape**: `0.75rem` corner radius
- **Spacing**: `1.5rem` internal padding, `1rem` row height
- **Composition**: Vertical stack with right-aligned monetary values

### FAQ accordion

- **Anatomy**: Question text left, chevron icon right, expandable content below
- **Surface**: Transparent, `{colors.border-warm}` hairline separator between items
- **Typography**: `{typography.body}` for questions, weight 480
- **Shape**: No border radius on items
- **Spacing**: `1.5rem` vertical padding per item, full-width separator
- **Composition**: Flex row with space-between, chevron rotates on expansion

### Testimonial block

- **Anatomy**: Large quotation with bold lead sentence, attribution below
- **Surface**: Pure white or `{colors.warm-canvas}` background
- **Typography**: `{typography.quote}` for body, `{typography.body}` for attribution; lead sentence uses weight 480, remainder uses weight 360
- **Shape**: No border, no background fill
- **Spacing**: Generous vertical margins, centered alignment
- **Composition**: Max-width constrained text block, centered

### Partner logo strip

- **Anatomy**: Horizontal row of monochrome partner logos, equal height treatment
- **Surface**: Transparent on `{colors.warm-canvas}`
- **Typography**: None
- **Shape**: Logos in original aspect ratios, height-normalized
- **Spacing**: Even horizontal distribution with `2rem` gaps
- **Composition**: Flex row, vertically centered, wrapping allowed

## Responsive behavior

The design maintains its core structure across viewports with proportional scaling. The navigation bar collapses to a hamburger menu on smaller screens, though this transition point is not visible in the supplied images. Content containers retain their `2rem` horizontal padding, preventing text from touching viewport edges.

Dashboard cards reflow from multi-column layouts to single-column stacks. The account panel shown in the dark interface maintains its internal structure but may expand to full width on mobile. Typography scales down proportionally: the `5.25rem` hero display should reduce to approximately `3rem` on narrow viewports to prevent overflow.

The FAQ accordion remains functional at all widths, with question text wrapping naturally. Chevron icons maintain touch targets of at least `44px` for accessibility. Testimonial blocks should retain centered alignment with increased side padding on mobile to preserve readable line lengths.

## Practical implementation guidance

### Preserve
- The strict two-mode color architecture: commit pages fully to dark or warm, never mixing card-level modes
- Arcadia's weight gradations as the primary hierarchy tool; avoid introducing additional font families
- Generous whitespace around testimonials and section breaks—this breathing room defines the premium feel
- Pill-shaped buttons as the sole button treatment; avoid sharp-cornered or slightly-rounded alternatives
- Right-aligned numerical values in financial contexts, with consistent decimal and currency formatting

### Avoid
- Drop shadows on dark surfaces; use surface value changes for elevation instead
- Saturated colors beyond the single accent blue; the palette is intentionally restrained
- Underlined text links outside of body content; navigation and buttons rely on shape and weight
- Background images or textures behind text; the system depends on flat, controlled surfaces
- Mixed button styles on the same surface; the pill treatment is universal

### Recommended build order
1. Establish the dark canvas and warm canvas as root themes with CSS custom properties
2. Implement Arcadia and Arcadia Display-Variable with the full weight range (360–480) and verify rendering at all specified sizes
3. Build the navigation component with transparent and solid variants
4. Create the pill button system with primary, secondary, and ghost treatments
5. Develop dashboard cards with the surface color stack and internal spacing
6. Implement FAQ accordion with warm-mode separators and chevron animation
7. Add testimonial block with weight-shifting quote treatment
8. Finalize responsive scaling for display typography and container padding

### Accessibility
- Maintain minimum 4.5:1 contrast ratios: `#EDEDF3` on `#000000` exceeds 15:1, and `#272735` on `#F6F5F2` exceeds 12:1
- Ensure the accent blue `#5266EB` meets 3:1 against dark surfaces for interactive elements
- Provide visible focus indicators on pill buttons, likely using outline or subtle background shift
- Preserve semantic heading hierarchy despite visual weight variations; the `480` weight headline should map to `h2` or appropriate level
- Testimonial attribution should include semantic markup for author and role

## Scope note

This guide covers the homepage and pricing page surfaces visible in the supplied images, including the dashboard hero, account panel, FAQ accordion, and testimonial components. Mobile layouts, animation specifications, form states, and the full product dashboard beyond the account card are not represented. Arcadia Display-Variable is documented as a supplied family but its specific glyph set or optical sizing behavior is not visible in the extracted interface samples.
