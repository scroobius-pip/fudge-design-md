# How palantir.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/palantir.com-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero section with dark background, large 'AI-Powered for Every' display text, and contact form modal overlay with Alliance typography](https://pin.fontofweb.com/9369?format=jpg)](https://design.withfudge.com/share/pin-9369)

[Homepage hero section with dark background, large 'AI-Powered for Every' display text, and contact form modal overlay with Alliance typography](https://design.withfudge.com/share/pin-9369)

[![Dark footer with multi-column link grid, social pill buttons, and copyright text on near-black background](https://pin.fontofweb.com/9368?format=jpg)](https://design.withfudge.com/share/pin-9368)

[Dark footer with multi-column link grid, social pill buttons, and copyright text on near-black background](https://design.withfudge.com/share/pin-9368)

[![404 error page with massive '404 Error' display type, 'Page not found... yet' message, and full footer](https://pin.fontofweb.com/9367?format=jpg)](https://design.withfudge.com/share/pin-9367)

[404 error page with massive '404 Error' display type, 'Page not found... yet' message, and full footer](https://design.withfudge.com/share/pin-9367)

[![Homepage product section showing 'Warp' display text with industrial imagery and contact form modal](https://pin.fontofweb.com/2345?format=jpg)](https://design.withfudge.com/share/pin-2345)

[Homepage product section showing 'Warp' display text with industrial imagery and contact form modal](https://design.withfudge.com/share/pin-2345)

## Overview

Palantir's visual system is built on radical contrast and editorial restraint. The interface alternates between immersive near-black surfaces and clean white canvases, using two weights of the Alliance type family to establish a strict hierarchy. The homepage presents a dark hero with oversized display typography—"AI-Powered for Every" set in Alliance No 2 at a scale that dominates the viewport—while functional content layers beneath in lighter tones. A contact modal slides over the main surface, preserving the dark backdrop as a visual anchor. The 404 page extends this language to error states, treating the status code as a typographic event at 100px. Throughout, the system favors flat planes over dimension, hairline borders over heavy rules, and generous whitespace over dense packing. The result is a corporate identity that reads as engineered and authoritative, with enough warmth in the off-white text tones to avoid sterility.

## Colors

The palette is intentionally narrow, built around a near-black core with warm neutral accents. Dark surfaces dominate marketing pages; light surfaces appear in overlays, forms, and secondary content.

| token | hex | use |
|---|---|---|
| ink | #1E1F2B | Primary text on light backgrounds, dark section backgrounds |
| ink-deep | #0D0E10 | Deepest black for hero surfaces and maximum contrast |
| ink-muted | #1E2124 | Subtle variation for layered dark elements |
| canvas | #FFFFFF | Form overlays, modal backgrounds, light page sections |
| surface | #EFEFEF | Inverse text on dark backgrounds, footer text |
| surface-warm | #AAAAAA | Muted borders, disabled states, tertiary text |
| surface-cool | #ABABAB | Secondary borders, hairline dividers |
| border | #636363 | Active borders on dark surfaces, input underlines |
| border-light | #767676 | Footer borders, subtle separators |
| text-primary | #1E1F2B | Body copy, headings on white |
| text-inverse | #EFEFEF | All text on dark backgrounds |
| text-muted | #767676 | Labels, captions, secondary footer text |

Dark mode is the default presentation for hero and marketing surfaces. The near-black ink-deep (#0D0E10) serves as the foundation, with text-inverse (#EFEFEF) providing a warm, slightly softened white that reduces eye strain at large sizes. Light mode appears in functional contexts: the contact modal uses canvas (#FFFFFF) as its full background, with text-primary (#1E1F2B) for all form content. The system does not use gradients or colored accents; visual interest comes from scale, weight, and surface alternation rather than hue variation.

## Typography

The type system relies on two related families from Degarism Studio: Alliance No 1 for body and interface text, Alliance No 2 for display and label settings. Both were designed by Deni Anggara. Alliance No 1 Regular handles all functional text at 16px and 18px; Alliance No 2 Regular carries display, headline, and micro-label roles with tighter leading and more aggressive tracking. The design facts also list Applesystem and Times as detected families, though these appear to be fallback or system fonts rather than actively used in the visible interface. Verify licensing for all families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Alliance No 2 | 5rem | 400 | 0.975 | -0.0425em | Homepage hero headlines |
| section-display | Alliance No 2 | 4.5rem | 400 | 0.972 | -0.02em | Product section headers |
| headline-large | Alliance No 2 | 6.25rem | 400 | 1.15 | -0.02em | 404 error display, oversized moments |
| body-large | Alliance No 1 | 1.125rem | 400 | 1.389 | normal | Navigation, form headers, primary body |
| body | Alliance No 1 | 1rem | 400 | 1.429 | normal | Footer links, form labels, dense content |
| label | Alliance No 2 | 0.625rem | 400 | 1.6 | 0.05em | Category headers, tags, microcopy |
| navigation | Alliance No 1 | 1.125rem | 400 | 1.389 | normal | Header links, primary navigation |

The display sizes use negative tracking aggressively: hero-display at -0.0425em creates a tightly packed wordmark effect, while section-display at -0.02em maintains density without collision. Body sizes use normal tracking, letting the generous line height (1.389 for 18px, 1.429 for 16px) provide rhythm. The label token is the system's only tracked-positive style, using 0.05em to create all-caps category headers like "OFFERINGS" and "IMPACT STUDIES" in the footer.

## Layout

The layout engine is centered and contained, with generous horizontal margins that create a editorial column feel. Content sits within a max-width container centered via auto margins, with 30px side padding preventing edge contact on narrower viewports.

Section spacing follows a clear cadence: major sections receive 100px vertical padding (6.25rem), creating substantial breathing room between content blocks. The homepage hero uses an exceptional 420.7px top and bottom padding to push display text into the vertical center of the viewport. Between sections, 80px margins separate distinct content groups.

The grid system uses 30px gaps consistently—this value appears as row-gap, column-gap, and flex gap across multiple contexts. Footer content arranges in a multi-column grid with 100px row gaps between major link groups and 50px row gaps within dense lists. The overall effect is airy and scannable, with content never feeling cramped.

Header navigation sits at the top with 40px padding, containing the Palantir wordmark left and utility controls right. On dark surfaces, the header text inverts to surface (#EFEFEF); on light surfaces, it reverts to ink (#1E1F2B). A thin promotional banner may appear above the header, using the same text color with an underline link.

## Visual language

The visual language is flat, planar, and typographically driven. Surfaces are solid colors without gradients, shadows, or texture. The only dimensional element is a subtle box-shadow (rgba(0, 0, 0, 0.1) 0px 2px 10px 0px) applied to select containers, providing minimal lift without breaking the flat aesthetic.

Borders are hairline-precise: 1px solid rules in #636363 or #767676 separate footer sections, underline inputs, and frame buttons. The system avoids rounded corners on most elements—buttons, inputs, and cards use 0px radius—reserving rounding for specific cases: 10px panels for elevated containers, 60px pills for social buttons, and 4px for small internal badges.

Imagery appears as full-bleed backgrounds behind dark overlays, or as contained product shots within sections. The photography tends toward industrial and technological subjects, rendered with desaturated or monochromatic treatment that harmonizes with the neutral palette. No decorative illustrations or iconography clutter the interface; visual hierarchy is established entirely through type scale, color inversion, and spatial distribution.

The modal pattern overlays a full-screen dark scrim with a white panel sliding in from the right, maintaining the system's binary surface logic while providing functional separation.

## Components

### Header

- Anatomy: Promotional banner (optional), logo mark, navigation links, search and menu utilities
- Surface: Transparent over hero, solid on scroll (inferred behavior)
- Typography: navigation token for links, label token for promotional text
- Spacing: 40px padding, logo and utilities at opposite edges
- Composition: Flex row, space-between alignment

### Hero section

- Anatomy: Full-viewport dark surface, oversized display text, optional background imagery
- Surface: ink-deep (#0D0E10) background, text-inverse (#EFEFEF) foreground
- Typography: hero-display for primary headline, body-large for secondary text
- Spacing: 420.7px vertical padding to center content vertically
- Composition: Centered text block, generous margins

### Contact modal

- Anatomy: Dark scrim, white panel with close control, form header, labeled inputs, submit button
- Surface: canvas (#FFFFFF) panel over ink-deep (#0D0E10) scrim
- Typography: body-large for header question, body for labels and inputs
- Shape: Panel appears to use 0px radius; inputs use 0px radius with bottom-border-only underline
- Spacing: 30px side padding, generous vertical spacing between fields
- Composition: Right-aligned or centered panel, full-height scrollable

### Form inputs

- Anatomy: Label text, input field, optional required indicator
- Surface: Transparent background, 1px bottom border in ink (#1E1F2B)
- Typography: label token for field labels (uppercase, tracked), body for input text
- Shape: 0px radius, no visible background
- Spacing: Minimal internal padding (1px 2px), substantial vertical margin between fields

### Buttons

- Anatomy: Text label, optional icon, rectangular container
- Surface: Transparent or ink (#1E1F2B) background, 1px border in border-light (#767676) or ink
- Typography: body token
- Shape: 0px radius for primary buttons, 60px radius for social pill buttons
- Spacing: 14px 19px padding for standard buttons, 13.7143px for square buttons
- Variants: Outlined (transparent background, dark border), filled (dark background, light text), text-only (no border, underline on hover)

### Footer

- Anatomy: Copyright block, social links, multi-column link grid organized by category
- Surface: ink (#1E1F2B) or ink-deep (#0D0E10) background, text-inverse (#EFEFEF) text
- Typography: body for links, label for category headers
- Shape: Social buttons use 60px pill radius with 1px border
- Spacing: 90px top padding, 100px bottom padding, 100px row gaps between major sections, 30px column gaps
- Composition: Asymmetric grid with copyright and social left, link columns right

### 404 error

- Anatomy: Massive status code, explanatory text, homepage return link, full footer
- Surface: ink-deep (#0D0E10) background throughout
- Typography: headline-large for "404 Error", section-display for "Page not found... yet", body-large for return link
- Spacing: 300.5px top margin to push content below header, 80px gaps between elements
- Composition: Left-aligned status code, right-aligned message and link

## Responsive behavior

The system appears optimized for large viewports, with generous fixed margins (278px–308px auto margins) that would need reduction on smaller screens. At narrower widths, the multi-column footer grid should collapse to fewer columns or a single stack, maintaining 30px gaps between items. The contact modal likely becomes full-screen on mobile, eliminating the side-panel treatment.

Type scale should compress on smaller screens: hero-display at 5rem may reduce to 3rem or 2.5rem to prevent overflow. The 404 headline-large at 6.25rem should scale down proportionally, perhaps to 3.75rem on tablet and 2.5rem on mobile. Line heights can remain constant since they are unitless ratios.

The header utilities (search, menu) may consolidate into a single menu trigger on narrow screens, with navigation links moving to a full-screen overlay matching the contact modal pattern.

## Practical implementation guidance

### Preserve
- The stark binary surface system: near-black heroes against white functional panels
- Alliance No 2 for all display and label text, with its characteristic negative tracking
- Hairline 1px borders as the sole decorative element
- Generous, consistent 30px gaps across all grid and flex contexts
- The uppercase, tracked label style for category headers

### Avoid
- Adding color accents or gradient backgrounds that break the neutral palette
- Rounding corners on primary buttons or cards—the system's flatness is intentional
- Reducing the display type sizes below their minimum readable scale
- Using borders thicker than 1px except for specific interactive states
- Mixing additional type families beyond Alliance No 1 and No 2

### Recommended build order
1. Establish the color tokens and surface inversion logic
2. Load Alliance No 1 and Alliance No 2 with proper font-display strategy
3. Build the type scale, starting with body and label tokens, then adding display sizes
4. Create the header with transparent-to-solid scroll behavior
5. Implement the hero section with centered display text and viewport-height spacing
6. Build the contact modal with scrim overlay and right-panel layout
7. Construct the footer grid with asymmetric column distribution
8. Add form components with underline-only input styling

### Accessibility
- Ensure text-inverse (#EFEFEF) on ink-deep (#0D0E10) meets WCAG AAA contrast (it does at these values)
- Provide visible focus states on all interactive elements; the current 1px borders may need enhancement
- Add aria-labels to icon-only header utilities (search, menu, close)
- Maintain keyboard trap management in the contact modal
- Consider reducing motion for the modal transition, respecting prefers-reduced-motion

## Scope note

This guide covers the homepage hero, contact modal, 404 error page, and global footer as visible in the supplied images. Navigation dropdowns, interior page templates, component hover states, and mobile-specific layouts are not represented. The exact spacing values derive from desktop measurements and should be adapted for narrower viewports. Applesystem and Times appear in the source detection as fallback families but are not actively used in the visible interface.
