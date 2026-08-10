# How minimax.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/minimax.io-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section showcasing MiniMax M3 with coral-orange geometric illustration, feature pills, and dark navigation bar with Contact Us button](https://pin.fontofweb.com/9509?format=jpg)](https://design.withfudge.com/share/pin-9509)

[Hero section showcasing MiniMax M3 with coral-orange geometric illustration, feature pills, and dark navigation bar with Contact Us button](https://design.withfudge.com/share/pin-9509)

[![Hero section showcasing MiniMax Code with blue geometric illustration, feature pills, and matching dark navigation with Login button](https://pin.fontofweb.com/9508?format=jpg)](https://design.withfudge.com/share/pin-9508)

[Hero section showcasing MiniMax Code with blue geometric illustration, feature pills, and matching dark navigation with Login button](https://design.withfudge.com/share/pin-9508)

## Overview

MiniMax presents a product-forward landing experience built around large geometric hero illustrations and floating pill-shaped feature cards. The design balances technical credibility with approachable warmth through its illustration style—bold abstract shapes in coral-orange and sky-blue tones that sit behind crisp white interface elements. The page structure follows a clear hierarchy: a fixed navigation bar, an expansive hero section with product name and call-to-action buttons, a carousel of feature pills, and a grid of flagship model cards below. The overall impression is clean, modern, and confident, with generous whitespace and a restrained typographic system that lets the product imagery and illustrations carry the visual energy.

## Colors

The palette is intentionally minimal, relying on near-black text against pure white with subtle gray intermediates for hierarchy. Warm accent colors appear only in the geometric illustrations, not in interface elements.

| token | value | use |
|---|---|---|
| ink | #18181B | Primary text, headings, dark buttons, logo mark |
| ink-secondary | #181E25 | Secondary headings, card borders, subtle UI boundaries |
| muted | #45515E | Body text in feature descriptions, secondary paragraphs |
| muted-light | #86909C | Tertiary text, captions, metadata labels |
| canvas | #FFFFFF | Page background, card surfaces, pill backgrounds |
| surface | #F5F5F5 | Subtle fill areas, button hover states |
| action | #18181B | Primary button fill, active navigation states |
| action-text | #FFFFFF | Text on dark buttons and inverse surfaces |
| border | #181E25 | Hairline borders on secondary buttons, dividers |

The color system operates in a near-monochrome mode for all interface chrome. Text hierarchy is established through ink density rather than hue variation: primary headings use full ink, secondary content steps down to muted gray, and captions retreat further to muted-light. The geometric hero illustrations introduce warm coral-orange (#F05223 range) and cool sky-blue tones, but these remain strictly within illustration assets and do not bleed into UI tokens. This separation keeps the interface feeling technical and trustworthy while allowing marketing imagery to feel energetic and expressive.

## Typography

The type system pairs a geometric sans-serif for display moments with a humanist sans for body content and UI elements. Outfit carries the brand voice in large headlines with its open, rounded letterforms, while DM Sans handles readability at smaller sizes with its slightly more condensed proportions. Applesystem appears in the source as a system font fallback at 14px in limited utility contexts, though the visible interface relies on the loaded web fonts for all primary content.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Outfit | 5rem | 500 | 1.1 | normal | Product names in hero ("MiniMax M3", "MiniMax Code") |
| section-display | Outfit | 1.75rem | 500 | 1.71 | normal | Section headings ("Flagship Models") |
| body | DM Sans | 1rem | 400 | 1.5 | normal | Default paragraph text, descriptions |
| body-medium | DM Sans | 1rem | 500 | 1.5 | normal | Button labels, emphasized body text |
| body-small | DM Sans | 0.875rem | 400 | 1.5 | normal | Compact descriptions, metadata |
| label | DM Sans | 1.125rem | 500 | 1.25 | normal | Feature pill titles, card headings |
| caption | DM Sans | 0.8125rem | 400 | 1.5 | normal | Subtitles, category tags ("Video Generation") |
| navigation | DM Sans | 1rem | 400 | 1.5 | normal | Top-bar links, utility text |

Outfit appears exclusively at display sizes with weight 500, never below 1.75rem. DM Sans covers the full range from caption to body-medium, with weight 400 as the default and weight 500 reserved for interactive elements and emphasis. Line heights are generous—1.5 for body text and 1.1 for tight display settings—creating comfortable reading without excessive looseness. Verify licensing for these families before production use. Outfit is designed by Rodrigo Fuenzalida and distributed by Frag Type. DM Sans is designed by Colophon Foundry and Jonny Pinhorn.

## Layout

The page uses a centered, max-width container system with substantial horizontal margins that create a focused reading experience. The hero section occupies the full viewport width but constrains its text content to a narrow central column.

**Page structure:** The navigation bar spans full width with internal padding of 3.75rem on each side, creating a comfortable gutter between viewport edges and content. Below, the hero section centers all elements—headline, subtitle, buttons, and illustration—within a column that appears to max out around 730px effective width (365px margins on each side at desktop). This narrow measure keeps headlines readable and maintains visual tension against the wide illustration that bleeds beyond the text column.

**Section rhythm:** Vertical spacing between major sections uses 4rem as a standard gap, with the hero illustration receiving additional breathing room through 64px top margins. The feature pill carousel sits in its own contained band, followed by the "Flagship Models" section which returns to the centered column layout before expanding into a card grid.

**Card grid:** The model cards appear in an asymmetric layout with one large featured card on the left and smaller cards stacked on the right. The large card uses a 3.75rem border radius and fills with a full-bleed illustration. Smaller cards maintain the same radius but at reduced scale, with text content sitting below thumbnail images.

**Responsive considerations:** The centered column with 365px side margins suggests a breakpoint where this collapses to narrower gutters. The pill carousel likely becomes horizontally scrollable or stacks on smaller viewports. The asymmetric card grid should transition to a single column with the large card becoming full-width above the stack.

## Visual language

The defining visual characteristic is the interplay between crisp white interface elements and bold, flat geometric illustrations. The hero illustrations use overlapping triangles, circles, and abstract shapes in gradient-free solid colors—coral and orange for the M3 product, sky blue for the Code product. These shapes carry subtle texture through line work and dot patterns that suggest technical precision without clutter.

**Feature pills:** Three white pill-shaped cards float above the hero illustration, each containing an icon, a bold title, and a two-line description. The pills cast a soft diffuse shadow (rgba(0, 0, 0, 0.08) with 22.576px blur) that separates them from the busy illustration behind. Each pill uses a 9999px border radius for full rounding, with internal padding of 1.5rem top and bottom, 2rem left and right.

**Iconography:** Icons within pills use simple line-art style in colored circular containers—coral backgrounds for M3 features, blue for Code features. The icon style is consistent: single-weight strokes, minimal detail, centered in rounded squares or circles.

**Carousel indicators:** Below the hero, three small dots indicate carousel position. The active dot uses ink color while inactive dots use muted-light, providing subtle state communication without visual weight.

**Photography and media:** Model cards combine illustrated backgrounds with photographic thumbnails. The Hailuo 2.3 card shows a cinematic still with text overlay, demonstrating that photography receives dark gradient overlays for text legibility when used as card backgrounds.

## Components

### Navigation bar

- **Anatomy:** Logo mark left, horizontal link list center-right, utility buttons far right
- **Surface:** Transparent or white background, no visible border
- **Typography:** `{typography.navigation}` for all links
- **Composition:** Links spaced with 12px gaps; "Contact Us" as dark pill button, "Login" as text-only or subtle button
- **Spacing:** 3.75rem horizontal padding, comfortable vertical height

### Primary button

- **Anatomy:** Text label centered, optional icon prefix
- **Surface:** `{colors.ink}` fill, `{colors.action-text}` text
- **Typography:** `{typography.body-medium}`
- **Shape:** Full pill with 9999px radius
- **Spacing:** 0.5rem vertical padding, 1rem horizontal padding; 6px internal gap if icon present
- **Variants:** Dark fill for primary actions; may include icon on left

### Secondary button

- **Anatomy:** Text label centered
- **Surface:** Transparent or white fill, 1px solid `{colors.border}`
- **Typography:** `{typography.body}`
- **Shape:** Full pill with 9999px radius
- **Spacing:** Matching primary button dimensions

### Feature pill

- **Anatomy:** Icon container left, title and description stacked right
- **Surface:** `{colors.canvas}` fill, soft diffuse shadow
- **Typography:** `{typography.label}` for title, `{typography.body-small}` in `{colors.muted}` for description
- **Shape:** Full pill, 9999px radius
- **Spacing:** 1.5rem vertical padding, 2rem horizontal padding; icon container with 12px gap to text
- **Composition:** Three pills arranged horizontally with 32px gaps, floating over hero illustration

### Model card (large)

- **Anatomy:** Full-bleed illustration background, product name centered or bottom-left, optional "NEW" badge top-right
- **Surface:** Illustrated background with no border
- **Typography:** Product name in large white or light text; `{typography.caption}` for category below
- **Shape:** 3.75rem border radius
- **Spacing:** Internal padding 1.5rem

### Model card (small)

- **Anatomy:** Thumbnail image top, title and category below
- **Surface:** White background
- **Typography:** `{typography.label}` for title, `{typography.caption}` in `{colors.muted-light}` for category
- **Shape:** 1.5rem border radius on thumbnail
- **Spacing:** 16px gap between thumbnail and text; 12px row gap between title and category

### Section heading

- **Anatomy:** Heading text with optional subtitle paragraph below
- **Typography:** `{typography.section-display}` for heading, `{typography.body}` in `{colors.muted}` for subtitle
- **Spacing:** 6px margin-bottom on heading before subtitle; 24px margin-bottom before content grid

## Responsive behavior

The design appears optimized for a single desktop viewport in the supplied images. Based on the layout structure, the following responsive adaptations are recommended:

- **Navigation:** Links collapse to a hamburger menu below approximately 1024px. The "Contact Us" and "Login" buttons may consolidate into a single utility menu.
- **Hero column:** The 365px side margins should reduce to 24px on tablet and 16px on mobile. The headline scales down from 5rem to maintain readability without overflow.
- **Feature pills:** The three-pill row should stack vertically on mobile, maintaining full width with reduced horizontal padding. Alternatively, implement horizontal swipe with snap points.
- **Model cards:** The asymmetric grid collapses to a single column. The large featured card becomes full-width above the smaller cards, which also go full-width with maintained aspect ratios.
- **Illustrations:** Hero illustrations should scale proportionally, potentially cropping at edges rather than shrinking to maintain visual impact.

## Practical implementation guidance

### Preserve
- The strict separation between monochrome UI and colorful illustrations—never introduce hue into interface tokens
- The generous whitespace and narrow text measure in the hero section
- The soft shadow treatment on feature pills; it is essential for depth against busy backgrounds
- The full-pill border radius on buttons and feature cards; this is a core brand gesture
- The two-font hierarchy: Outfit for display, DM Sans for everything else

### Avoid
- Adding borders to primary buttons; the dark fill provides sufficient definition
- Using Outfit at small sizes; it is optimized for display use and loses clarity below 1.75rem
- Introducing additional accent colors into the UI palette; the illustration system already carries color energy
- Tightening the hero text measure further; the current width creates appropriate tension with the wide illustration
- Using shadows heavier than the specified diffuse treatment; the design relies on flatness with subtle depth

### Recommended build order
1. Establish the type scale with DM Sans body and Outfit display, verifying web font loading
2. Implement the navigation bar with logo, links, and utility buttons
3. Build the hero section with centered column layout and responsive margin handling
4. Create the feature pill component with shadow, icon container, and text stack
5. Implement the carousel container with dot indicators
6. Build model card components in large and small variants
7. Assemble the "Flagship Models" section with asymmetric grid
8. Add responsive breakpoints for navigation collapse, pill stacking, and card reflow

### Accessibility
- Ensure the soft shadow on feature pills does not rely on shadow alone for depth perception; maintain adequate contrast between pill background and any illustration that might appear behind it
- The "NEW" badge on cards should include visually hidden text or aria-label for screen reader users
- Carousel indicators should be implemented as buttons with active state communicated to assistive technology
- Hero headlines in Outfit should maintain sufficient weight at all sizes; the 500 weight provides adequate thickness
- Color should never be the sole indicator of product category or state; use text labels consistently

## Scope note

This guide covers the MiniMax homepage landing experience as visible in the supplied desktop viewport images. Mobile layouts, additional interior pages, form interactions, motion design, and hover or focus states are not represented. The footer area and any content below the "Flagship Models" section are outside the current scope. Measurements reflect the exact values retained from the interface analysis.
