# How nuformtype.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/nuformtype.com-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage showing stacked type specimens BRZO, Hermanos, and Jaws in dark green on vivid orange with newsletter signup footer](https://pin.fontofweb.com/1891?format=jpg)](https://design.withfudge.com/share/pin-1891)

[Homepage showing stacked type specimens BRZO, Hermanos, and Jaws in dark green on vivid orange with newsletter signup footer](https://design.withfudge.com/share/pin-1891)

[![Info page with Nuform logotype in cream on warm gray, green body text, and orange subscribe button in minimal layout](https://pin.fontofweb.com/1890?format=jpg)](https://design.withfudge.com/share/pin-1890)

[Info page with Nuform logotype in cream on warm gray, green body text, and orange subscribe button in minimal layout](https://design.withfudge.com/share/pin-1890)

[![Homepage hero showing OZIK and OZIK Soft specimens in dark green on orange with Out Now sticker badge and navigation](https://pin.fontofweb.com/1889?format=jpg)](https://design.withfudge.com/share/pin-1889)

[Homepage hero showing OZIK and OZIK Soft specimens in dark green on orange with Out Now sticker badge and navigation](https://design.withfudge.com/share/pin-1889)

## Overview

Nuform Type's website is a type-foundry showcase that treats the browser as a continuous scroll of oversized letterform specimens. The design language is deliberately confrontational: massive display type fills the viewport edge-to-edge, set in dark forest green against a saturated orange ground that reads as the site's signature canvas. The visual system prioritizes the typefaces themselves over conventional interface patterns—navigation is minimal, content density is low, and every page section functions as a full-bleed advertisement for a specific font family. The info page introduces a secondary, calmer mode with warm gray backgrounds and cream logotype, but retains the same typographic DNA through green body text and the same sans-serif structure. The overall impression is of a confident, craft-forward studio that lets its products dominate the visual field.

## Colors

The palette is intentionally constrained to create maximum impact through contrast. The site operates in two primary modes: the vivid orange specimen mode and the muted gray info mode, with dark green serving as the consistent typographic anchor across both.

| token | value | use |
|---|---|---|
| action | #FF4A00 | Primary canvas for type specimens; newsletter subscribe button background |
| ink | #002800 | All display type, body text, borders, and UI chrome |
| canvas | #FF4A00 | Default page background for homepage and specimen sections |
| surface | #A8A8A8 | Info page background; input field backgrounds; sticker badge fill |
| surface-light | #F5F0E8 | Logotype on orange and gray backgrounds; navigation links on orange |
| border | #002800 | Input field borders; subtle dividers |

The orange-to-green pairing is the defining characteristic of the site. The orange (#FF4A00) is a pure, warm vermillion without yellow drift, while the green (#002800) is so deep it approaches black in smaller sizes, creating an almost vibrating contrast at large scale. The info page introduces a warm mid-gray (#A8A8A8) that mutes the energy without abandoning the palette, with the cream logotype (#F5F0E8) providing a softer light value than pure white would allow. No gradients, shadows, or transparency effects are visible in the interface—every color relationship is flat and absolute, reinforcing the graphic, poster-like quality of the specimens.

## Typography

The typographic system is built on two families: Berksab for monumental display settings and By Erik Marinovich-14436132271253519519 for all functional and body text. The display sizes push far beyond conventional web boundaries, with specimens routinely exceeding viewport width. The supplied files include two related cuts: By Erik Marinovich-14436132271253519519 and By Erik Marinovich-15910434056119370962, which correspond to Medium and Bold weights of the same design.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Berksab | 8rem | 700 | 0.85 | -0.03em | Full-bleed type specimens (OZIK, Hermanos, Jaws) |
| section-display | Berksab | 8rem | 700 | 0.9 | -0.02em | Secondary specimens and medium-weight showings |
| body-large | By Erik Marinovich-14436132271253519519 | 2rem | 400 | 1.3 | -0.01em | Info page introductory paragraph |
| body | By Erik Marinovich-14436132271253519519 | 1rem | 400 | 1.5 | 0em | Newsletter helper text, footer copyright |
| label | By Erik Marinovich-14436132271253519519 | 0.75rem | 500 | 1.2 | 0.05em | Specimen metadata, category labels, sticker text |
| navigation | By Erik Marinovich-14436132271253519519 | 1rem | 500 | 1 | 0em | Header links (fonts, info) |

Berksab appears exclusively in its heaviest weight, deployed at sizes where its details become architectural. The negative tracking tightens the massive forms without collapsing them. By Erik Marinovich-14436132271253519519 serves all communicative needs at readable sizes, with Medium weight (500) reserved for navigation and labels to create subtle hierarchy within the sans-serif family. The type scale is built on a 4px relative unit; all sizes are whole-number multiples of this base.

Verify licensing for Berksab and By Erik Marinovich-14436132271253519519 before production use. By Erik Marinovich-14436132271253519519 and By Erik Marinovich-15910434056119370962 are designed by Erik Marinovich and distributed by Nu Form Type.

## Layout

The page structure is fundamentally vertical and full-bleed. Each type specimen occupies its own section with generous internal padding, creating a rhythm of massive typographic moments separated by minimal whitespace. The layout rejects conventional container constraints—display type extends to the viewport edges without side margins, creating an immersive, poster-like experience.

The info page introduces an asymmetric two-zone composition: the Nuform logotype anchors the upper left, navigation sits at the upper right, and the main content occupies a left-weighted column that spans roughly half the viewport width. This creates breathing room that the specimen pages deliberately eliminate.

Spacing follows a coarse grain. Section breaks between specimens use 8rem of vertical space, while internal component padding sits at 2rem. The tight 0.5rem spacing handles label-to-specimen relationships and inline form elements. No grid system is visibly imposed on the specimens themselves; their scale makes conventional column alignment irrelevant.

The header is minimal and persistent: the Nuform logotype on the left, two navigation links ("fonts", "info") on the right. On the orange canvas, the logotype appears in cream; on the gray info page, it appears in the same cream value, demonstrating color constancy across background shifts.

## Visual language

The visual language is rooted in graphic design tradition rather than conventional web patterns. The site behaves like a scrolling stack of printed type specimens, each one a self-contained composition. The "Out Now!" sticker badge on the OZIK Soft specimen introduces a playful, dimensional element—a cloud-shaped gray form with slight shadow that breaks the flatness without introducing full illustration.

Imagery is entirely typographic. No photographs, icons, or decorative graphics appear outside the sticker badge. The typefaces themselves are the imagery, shown at scales where their curves, contrast, and personality become visceral. Style metadata ("OZIK: 4 Weights", "Hermanos: 1 Style") appears in small, spaced labels at the lower right of each specimen, functioning as captions without competing for attention.

The sticker badge is the sole organic shape in the system. Its scalloped border and slight dimensional lift suggest a physical object placed on the composition, creating a moment of tactility against the otherwise flat, screen-native aesthetic.

## Components

### Type specimen

The core component of the site. Each specimen fills the viewport width with a single word or letterform sequence set in the display typeface being showcased.

- **Anatomy**: Massive display text, optional style-count label at lower right, optional promotional sticker
- **Surface and text color**: Orange background (#FF4A00) with dark green type (#002800)
- **Typography**: hero-display or section-display token depending on specimen hierarchy
- **Shape**: No border radius; type bleeds to viewport edges
- **Spacing**: Internal padding of 2rem top and bottom; labels offset 2rem from right edge
- **Composition**: Centered or slightly left-weighted depending on letterform; no maximum width constraint
- **Variants**: Some specimens include the sticker badge; others show clean letterforms only

### Sticker badge

A promotional indicator used for new releases.

- **Anatomy**: Scalloped cloud shape containing label text
- **Surface and text color**: Gray surface (#A8A8A8) with dark green ink (#002800)
- **Typography**: label token, slightly bolder weight for emphasis
- **Shape**: Full pill/cloud radius (9999px equivalent for organic outline)
- **Spacing**: Positioned over type, overlapping letterforms slightly; internal padding approximately 1rem
- **Composition**: Placed at natural reading points within the specimen, not fixed to corners

### Newsletter signup

A minimal email capture form appearing at the bottom of specimen pages.

- **Anatomy**: Helper text, email input, subscribe button in horizontal arrangement
- **Surface and text color**: Input uses gray surface (#A8A8A8) with dark green border; button uses orange action (#FF4A00) with dark green text
- **Typography**: Helper text uses body token; input placeholder and button use label token
- **Shape**: Zero border radius on both input and button; 1px solid border on input
- **Spacing**: Helper text above with 1rem margin; input and button touch with no gap
- **Composition**: Centered horizontally; narrow overall width suggesting focused intent

### Navigation header

Persistent top bar across all pages.

- **Anatomy**: Logotype left, text links right
- **Surface and text color**: Transparent background; logotype in surface-light (#F5F0E8); links in same value
- **Typography**: Logotype appears custom, likely Berksab at display size; links use navigation token
- **Shape**: No background shape; text floats on page color
- **Spacing**: 2rem from viewport edges; links spaced 1rem apart
- **Composition**: Flex row, space-between alignment

### Info page content

Structured text block for studio description and contact.

- **Anatomy**: Paragraph, contact section with label and link, social links, newsletter signup
- **Surface and text color**: Gray background (#A8A8A8) with dark green text (#002800)
- **Typography**: Introductory paragraph uses body-large; labels use label token; links use body token
- **Shape**: No containing card; text sits directly on background
- **Spacing**: 2rem between paragraph and contact; 1rem between contact sections
- **Composition**: Left-aligned, maximum width approximately 60% of viewport

## Responsive behavior

The specimen pages rely on viewport-filling type that must scale down for smaller screens. At narrow widths, the massive display sizes should reduce proportionally, likely stepping from 8rem toward 4rem to maintain legibility without introducing horizontal scroll. The tight leading (0.85) that works at poster scale may need slight loosening (0.95–1.0) on small screens to prevent ascender-descender collisions.

The info page's two-column header (logotype left, navigation right) should stack vertically on narrow viewports, with navigation moving below the logotype. The body text column, already left-weighted, can expand to full width with comfortable side margins.

The newsletter form's horizontal input-button pair should stack vertically on small screens, with the button full-width below the input. Touch targets should maintain minimum 44px height; the current zero-radius design should persist as a stylistic choice regardless of viewport.

## Practical implementation guidance

### Preserve
- The absolute flatness of the color system—no gradients, no shadows, no transparency layers
- The edge-bleeding display type that defines the specimen experience
- The two-mode palette: vivid orange for specimens, warm gray for information
- The minimal chrome that keeps attention on letterforms
- The consistent dark green (#002800) as the sole text color across all backgrounds

### Avoid
- Adding background images or textures behind specimens—the orange must read as pure canvas
- Introducing additional accent colors that compete with the orange-green relationship
- Constraining specimens within max-width containers or cards
- Using white instead of the cream surface-light for logotype and navigation
- Adding hover states that introduce new colors or transforms not visible in the current system

### Recommended build order
1. Establish the color tokens and apply orange canvas with dark green text
2. Implement Berksab at hero-display size with viewport-relative scaling
3. Build the persistent header with logotype and navigation
4. Create the specimen component with label positioning
5. Add the sticker badge as an overlay variant
6. Implement the info page with gray background and body-large text
7. Add the newsletter form with zero-radius input and button
8. Test responsive scaling of display sizes down to mobile widths

### Accessibility
- The orange-green contrast is visually striking but should be verified against WCAG standards; the near-black green on bright orange may meet large-text requirements but could fail for small body text
- The cream logotype on orange should be checked for sufficient contrast ratio
- The gray info page background with green text likely meets standards but warrants verification
- Focus indicators should be added for keyboard navigation; the current flat design provides no visible focus state
- The massive display type benefits screen reader users when proper heading hierarchy is maintained behind the visual presentation

## Scope note

This guide covers the homepage type-specimen experience and the info page as visible in the supplied images. Mobile layouts, hover and focus states, loading behavior, additional interior pages, and typeface detail pages are not represented. Measurements are practical adaptation targets derived from visual analysis of the desktop presentation.
