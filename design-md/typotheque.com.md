# How typotheque.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/typotheque.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dark-mode article section with white November Site headings, Lava Site body text, and full-width Zed Display specimen showing width transitions from compressed to wide.](https://pin.fontofweb.com/6828?format=jpg)](https://design.withfudge.com/share/pin-6828)

[Dark-mode article section with white November Site headings, Lava Site body text, and full-width Zed Display specimen showing width transitions from compressed to wide.](https://design.withfudge.com/share/pin-6828)

[![Light-mode navigation overlay with orange TP logo, five-column menu grid, newsletter signup, social links, and dark article continuation with large bold Zed Display specimen.](https://pin.fontofweb.com/6827?format=jpg)](https://design.withfudge.com/share/pin-6827)

[Light-mode navigation overlay with orange TP logo, five-column menu grid, newsletter signup, social links, and dark article continuation with large bold Zed Display specimen.](https://design.withfudge.com/share/pin-6827)

[![Dark-mode pricing table with four tiered rows showing font build configurations, file sizes in white and muted gray, with subtle background depth layers.](https://pin.fontofweb.com/6826?format=jpg)](https://design.withfudge.com/share/pin-6826)

[Dark-mode pricing table with four tiered rows showing font build configurations, file sizes in white and muted gray, with subtle background depth layers.](https://design.withfudge.com/share/pin-6826)

## Overview

Typotheque's design system is built around the conviction that type specimens are the primary visual content, not decoration. The interface alternates between two dramatic modes: immersive dark surfaces where white typography floats against pure black, and functional light surfaces where dense navigation and metadata are presented with clinical clarity. This dual-mode approach serves a type foundry's need to both showcase fonts at scale and provide practical browsing tools.

The system uses two complementary type families: November Site, a sans-serif that handles all interface, display, and navigation roles with crisp geometric precision, and Lava Site, a serif that provides reading comfort for extended editorial text. The visual hierarchy is established through scale contrast rather than color complexity—headings at 40px command attention against body text at 18px, while the specimen typography itself often exceeds these bounds, bleeding to viewport edges.

Spacing is generous and systematic, with section breaks at 160px and content gutters at 80px creating breathing room that lets specimens dominate. The overall impression is of a confident, restrained system that knows when to disappear and when to let type speak.

## Colors

The palette is intentionally minimal, built on a binary light-dark foundation with one functional accent and one muted tone for metadata.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text on light surfaces, dark-mode backgrounds, button fills |
| canvas | #FFFFFF | Light-mode backgrounds, dark-mode text, button labels |
| surface | #282828 | Secondary dark backgrounds, pricing table rows, depth layers |
| muted-ink | #999999 | Metadata, file sizes, secondary labels, disabled states |
| accent | #00B6DE | Newsletter action links, interactive highlights |

The dark mode is the system's dominant visual identity. Article pages render with pure black backgrounds and white text, creating maximum contrast for type specimens. The light mode appears in navigation overlays and functional surfaces, flipping to black text on white. This is not a subtle theme variation but a complete inversion with distinct material character.

The accent cyan appears sparingly, reserved for actionable elements like the "Join Newsletter" link where it provides a cool, technological counterpoint to the warm neutrality of the grayscale. The muted gray serves informational hierarchy, de-emphasizing file sizes and technical metadata without removing them from the visual field.

## Typography

All type is set in two families designed by Peter Biľak for Typotheque. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | November Site | 2.5rem | 700 | 1.2 | normal | Article section headings, major announcements |
| section-display | November Site | 1rem | 400 | 1 | normal | Navigation category labels, UI headers |
| body | Lava Site | 1.125rem | 400 | 1.5 | normal | Article paragraphs, editorial content |
| body-small | Lava Site | 1rem | 400 | 1.5 | normal | Secondary body text, captions, annotations |
| label | November Site | 0.8125rem | 400 | 1 | normal | Buttons, tags, compact metadata |
| navigation | November Site | 1rem | 400 | 1.5 | 0.01em | Header links, menu items, breadcrumbs |

November Site carries the entire interface load, from the 13px pill buttons to the 40px article headings. Its consistent use across all non-body roles creates a unified voice despite dramatic scale changes. At 16px with 24px line height, it sets navigation items with comfortable touch targets; at 13px with 13px line height, it compresses into compact labels without losing legibility.

Lava Site appears in body text at 18px with 27px line height, where its serif structure provides reading rhythm for extended paragraphs. A secondary body size at 16px serves captions and annotations where space is constrained. The contrast between November's geometric crispness and Lava's organic flow creates clear role separation: November is the voice of the system, Lava is the voice of the content.

Letter spacing remains tight to normal throughout, with only the navigation receiving a slight 0.01em loosening for small-screen clarity. Headings are bold at 700, while all other roles remain at 400 regular weight.

## Layout

The layout system is built on a centered content column with generous viewport margins. The base spacing unit is 2px (0.125rem), from which all measurements derive as whole-number multiples.

Content containers center with horizontal padding of 80px (5rem) and vertical section spacing of 160px (10rem). The main article column narrows to a readable measure with side margins of 388px (24.25rem), creating a deliberate constraint that prevents long line lengths. Paragraphs stack with 18px (1.125rem) bottom margins, while headings receive 60px (3.75rem) top margin and 40px (2.5rem) bottom margin, establishing clear section breaks.

The navigation overlay expands to full viewport width with a five-column grid for category links, each column receiving 20px (1.25rem) internal padding. Below the grid, a newsletter bar spans the width with 30px (1.875rem) bottom padding, containing an email input, accent-colored action link, and social media references.

Specimen typography breaks the container model, extending to full viewport width with no horizontal padding. This creates dramatic scale contrast between the constrained reading column and the expansive type demonstrations. The specimen rows stack vertically with tight leading, often overlapping or bleeding at the edges to emphasize the variable font's range.

## Visual language

The visual language is specimen-first: the fonts themselves are the imagery. Large-scale "abc" sequences demonstrate weight and width axes, rendered as white outlines or solids against black backgrounds. These specimens are not decorative illustrations but functional demonstrations of the typeface's capabilities, often showing the same letterforms across multiple interpolation points.

Photography and illustration appear sparingly. When present, as in the glyph outline diagram showing Zed Display's rounding behavior, images are treated as technical documentation rather than emotional content. The diagram sits within the dark article surface with minimal framing, its blue construction lines and white nodes reading as part of the same monochrome system.

The interface avoids decorative elements. No gradients, no shadows, no border radii beyond the pill buttons. Depth is achieved through background color layering—pure black for primary content, #282828 for secondary surfaces like pricing tables—rather than dimensional effects. The result is a flat, print-like aesthetic that respects the two-dimensional nature of type.

Iconography is reduced to functional minimums: a hamburger menu, close button, search icon, and breadcrumb chevrons. These are rendered in the same November Site typeface or as simple geometric marks, maintaining typographic consistency.

## Components

### Primary button

- Anatomy: Text label within a pill-shaped container
- Surface and text color: Black background with white text in dark mode; the inverse is not visible in supplied images
- Typography: November Site at 13px, regular weight, 13px line height
- Shape: Full pill with 9999px border radius
- Spacing: 15px padding on all sides
- Composition: Inline placement, often adjacent to other controls

### Article section

- Anatomy: Heading followed by body paragraphs, optionally followed by full-width specimen or image
- Surface and text color: Pure black background with white text
- Typography: Headings in November Site 40px bold; body in Lava Site 18px regular
- Spacing: 160px top padding, 80px bottom padding, 80px horizontal padding; content column constrained by 388px side margins
- Composition: Centered single column with specimens breaking to full width

### Navigation overlay

- Anatomy: Full-screen overlay with logo, close control, breadcrumb trail, five-column category grid, newsletter bar, and social links
- Surface and text color: White background with black text; orange TP logo mark
- Typography: Category headers in November Site 16px; links in November Site 16px with 24px line height; newsletter action in accent cyan
- Spacing: 80px horizontal padding; 20px column gutters; 30px bottom padding on newsletter section
- Composition: Grid layout with equal columns, left-aligned content

### Pricing table row

- Anatomy: Tier label, configuration description, file format list with sizes, and optional note
- Surface and text color: #282828 background with white primary text and #999999 metadata
- Typography: Tier name in November Site 16px; descriptions in November Site 16px; file sizes in November Site 13px muted
- Spacing: Generous internal padding creating distinct horizontal bands
- Composition: Stacked rows with subtle depth variation between adjacent surfaces

### Header bar

- Anatomy: Hamburger menu, breadcrumb navigation, and log-in control
- Surface and text color: Transparent or matching current mode; white text on dark, black text on light
- Typography: Breadcrumbs in November Site 16px with 0.16px letter spacing
- Spacing: 20px horizontal padding on breadcrumb items
- Composition: Fixed or sticky top placement, minimal height

## Responsive behavior

The system should maintain its dual-mode character across viewport sizes. The article column's 388px side margins will need reduction on smaller screens to preserve readable line lengths without excessive narrowing. At narrow widths, the five-column navigation grid should collapse to two columns, then a single stacked list.

Specimen typography, which currently extends to full viewport width, should scale down proportionally to prevent horizontal overflow. The variable font specimens may benefit from scrollable containers on mobile rather than viewport-width rendering.

The 160px section spacing should reduce to 80px on tablet and 40px on mobile to maintain rhythm without excessive scrolling. Button and navigation touch targets should remain at minimum 44px height regardless of scale.

Dark mode should remain the default for article content; the light-mode navigation overlay may need a scrim or backdrop blur when invoked over dark content to prevent visual vibration.

## Practical implementation guidance

### Preserve
- The stark black-white contrast of article pages; this is the system's signature
- The two-family type division: November Site for interface, Lava Site for body
- Full-bleed specimen typography that breaks container constraints
- Generous section spacing that lets content breathe
- The pill button shape with its extreme border radius

### Avoid
- Adding decorative gradients, shadows, or dimensional effects
- Using Lava Site for headings or interface elements
- Introducing additional accent colors beyond the functional cyan
- Crowding specimens with frames, borders, or captions
- Reducing section spacing below 40px equivalent

### Recommended build order
1. Establish the dark-mode article page with black background, white text, and centered content column
2. Implement the two-type-family hierarchy with correct scale relationships
3. Add full-width specimen containers that escape the content column
4. Build the light-mode navigation overlay with five-column grid
5. Create the pill button component and header bar
6. Add the pricing table with layered surface backgrounds
7. Implement mode switching and responsive reductions

### Accessibility
- Maintain minimum 4.5:1 contrast ratio; the black-white pairing exceeds this
- Ensure specimen typography remains readable when scaled down; consider offering static alternatives for users with motion sensitivity
- Provide visible focus indicators on the minimal interface; the accent cyan can serve this role
- Use semantic heading levels despite the visual uniformity; the 40px bold headings should map to h2 or h1 appropriately
- Preserve keyboard navigation through the navigation overlay with clear focus order

## Scope note

This guide covers the article page and navigation overlay surfaces visible in the supplied images. Footer elements, type specimen browsing interfaces, e-commerce flows, and mobile-specific layouts are not represented. The radius token set is empty; no rounded corners beyond pill buttons are confirmed in the interface.
