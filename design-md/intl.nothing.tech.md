# How intl.nothing.tech is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/intl.nothing.tech-design)

Last updated: 2026-08-10

## Captured pages

[![Dark footer overlay with dot-matrix Ndot typography navigation and collapsible support rows against black background](https://pin.fontofweb.com/7742?format=jpg)](https://design.withfudge.com/share/pin-7742)

[Dark footer overlay with dot-matrix Ndot typography navigation and collapsible support rows against black background](https://design.withfudge.com/share/pin-7742)

[![Light hero product page with large portrait photography and floating purchase card showing phone specs](https://pin.fontofweb.com/7741?format=jpg)](https://design.withfudge.com/share/pin-7741)

[Light hero product page with large portrait photography and floating purchase card showing phone specs](https://design.withfudge.com/share/pin-7741)

[![Product showcase with thumbnail grid of feature videos and images surrounding central hero figure](https://pin.fontofweb.com/7740?format=jpg)](https://design.withfudge.com/share/pin-7740)

[Product showcase with thumbnail grid of feature videos and images surrounding central hero figure](https://design.withfudge.com/share/pin-7740)

[![Silver variant product display with updated thumbnail selection and matching device color in purchase card](https://pin.fontofweb.com/7739?format=jpg)](https://design.withfudge.com/share/pin-7739)

[Silver variant product display with updated thumbnail selection and matching device color in purchase card](https://design.withfudge.com/share/pin-7739)

## Overview

Nothing's international product site presents a deliberately restrained visual system that amplifies the physical design of its hardware. The interface operates in two distinct modes: a light, airy product showcase built on near-white backgrounds with floating purchase cards, and a dark, immersive navigation layer that inverts to pure black with dot-matrix typography. This duality creates a rhythm between open, editorial presentation and dense, technology-focused information architecture. The design avoids decorative excess, relying instead on precise typography, generous whitespace, and the inherent visual interest of product photography. Every element serves to frame the hardware as the hero, with the interface receding into a functional, almost invisible role until activated.

## Colors

The palette is aggressively minimal, built on four core values that create maximum contrast with minimal complexity.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, dark backgrounds, primary buttons, borders |
| muted | #585A5A | Secondary text, inactive states, subtle UI elements |
| canvas | #F5F5F5 | Page backgrounds, light surfaces, product card fills |
| surface | #FFFFFF | Pure white for overlays, inverted text on dark, highlight areas |

The light mode dominates the product experience. Pages sit on `#F5F5F5` with `#000000` text, creating a soft but legible contrast that lets product photography carry visual weight. The dark mode appears in overlays and the footer, where `#000000` becomes the canvas and `#FFFFFF` the ink. This inversion is absolute—no gray intermediates soften the transition. The muted tone `#585A5A` appears sparingly, typically for secondary labels or inactive controls within the purchase interface. No gradients, shadows, or transparency effects are present in the interface layer; all depth is achieved through photography and spatial positioning.

## Typography

Three type families create a strict hierarchy between functional reading, technical labeling, and brand expression.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Ndot | 2.5rem | 400 | 1 | normal | Large footer navigation, major section headers |
| section-display | Ndot | 1.25rem | 400 | 1 | normal | Product titles, navigation links, card headers |
| body | N Type 82 | 1rem | 400 | 1.4 | normal | Descriptions, specifications, UI copy |
| label | Lettera Mono Ll | 0.6875rem | 400 | 1.1 | normal | Buttons, tags, technical metadata, small controls |
| navigation | Ndot | 1.25rem | 400 | 1.08 | normal | Nav overlay links |
| legal-copy | N Type 82 | 1rem | 400 | 1.4 | normal | Footer legal text, copyright, terms links |

Ndot, designed by Colophon Foundry, provides the brand's signature voice. Its dot-matrix construction references LED displays and early digital interfaces, making it instantly identifiable as Nothing's visual signature. It appears at two scales: a large 40px for immersive navigation moments and a compact 20px for inline product naming and header links. N Type 82, also by Colophon Foundry, handles all functional reading at 16px with a comfortable 22.4px line height. Its clean, neutral sans-serif construction avoids competing with the product photography. Lettera Mono Ll, designed by Kobi Benezri for Lineto, serves exclusively at 11px for buttons, tags, and technical specifications. Its monospace structure reinforces the engineering precision of the brand.

Verify licensing for these families before production use. Ndot and N Type 82 are available from Colophon Foundry; Lettera Mono Ll is available from Lineto.

## Layout

The layout system is built on a 4px relative unit, with spacing values derived from a compact scale: 4px, 8px, 16px, 32px, 48px, and 80px. This creates a rhythmic, predictable spatial language that feels technical rather than organic.

Pages use a single-column flow with full-bleed photography sections interrupted by floating product cards. The purchase card—a critical component—sits centered or offset over hero imagery, creating a layered depth effect without shadows. Card padding uses 32px internally, with 16px gaps between related controls. Section spacing alternates between 32px for tight groupings and 80px for major transitions, establishing clear content boundaries without visible dividers.

The thumbnail grid surrounding the central hero image uses an irregular, magazine-style placement. Thumbnails appear at varying positions—upper left, lower left, upper right, lower right—creating an asymmetric balance that feels curated rather than algorithmic. Each thumbnail carries a small text label beneath it, positioned with 8px to 16px spacing from its associated image.

The footer and navigation overlay use a dramatically different spatial logic. The dark overlay fills the viewport entirely, with content centered both horizontally and vertically. Navigation links stack with generous vertical spacing, each rendered in the large dot-matrix Ndot type. Below the primary navigation, collapsible rows for support, newsletter, store selector, and language sit in a compact vertical list with 16px internal padding and subtle separator lines.

## Visual language

The visual language is defined by restraint and reference. The dot-matrix typography directly evokes the LED glyph interface on Nothing's phones, creating continuity between digital and physical products. This is not merely decorative—it is the core brand signature that appears at every scale from favicon to billboard.

Photography treatment is equally specific. Product shots use clean, shadowless lighting against neutral backgrounds. Portrait photography in hero sections features subjects holding or interacting with devices, shot with shallow depth of field that isolates the product. The 8px border radius appears consistently on all interactive containers, softening the technical precision without becoming friendly or approachable.

A subtle grid of small dots overlays the entire page at low opacity, visible against both light and dark backgrounds. This creates a sense of technical measurement and digital precision, reinforcing the engineering-focused brand identity without adding visual weight. The grid remains consistent across all page states, acting as a unifying texture.

The absence of color beyond black, white, and a single gray is deliberate. Product color variants—black, silver, and others—are the only chromatic elements, making them appear more vivid by contrast. This chromatic restraint extends to icons, which use simple line constructions or direct photographic representation rather than filled or colored shapes.

## Components

### Product purchase card

The purchase card is the primary conversion surface, floating above hero photography.

- **Anatomy**: Card container, product name header, specification list with icons, variant selector row, capacity selector row, primary action button
- **Surface**: `{colors.canvas}` background with `{rounded.card}` border radius
- **Typography**: Product name uses `{typography.section-display}`; specifications use `{typography.label}`; selectors use `{typography.body}`
- **Shape**: 8px radius on card and all internal buttons
- **Spacing**: 32px internal padding, 16px between selector rows, 8px gap between side-by-side selectors
- **Composition**: Centered or offset placement over photography; selectors arranged as two equal columns above full-width button

### Variant selector

A pill-style control for choosing product color and storage capacity.

- **Anatomy**: Container with label text and dropdown chevron
- **Surface**: `{colors.canvas}` background, `{colors.ink}` text; active state uses `{colors.ink}` background with `{colors.surface}` text
- **Typography**: `{typography.body}`
- **Shape**: 8px radius, 16px horizontal padding, 16px vertical padding
- **Spacing**: 8px gap between paired selectors

### Primary action button

The main call-to-action, typically "SOLD OUT" or purchase-related.

- **Anatomy**: Full-width button with centered text
- **Surface**: `{colors.ink}` background, `{colors.surface}` text
- **Typography**: `{typography.label}`
- **Shape**: 8px radius, 16px padding
- **Spacing**: 16px top margin from selectors

### Thumbnail grid item

A media preview with associated label, positioned around the hero image.

- **Anatomy**: Image container, text label below
- **Surface**: Transparent or `{colors.surface}` background; images have 8px radius
- **Typography**: Label uses `{typography.body}`, `{colors.ink}`
- **Shape**: 8px radius on images
- **Spacing**: 8px between image and label

### Footer navigation overlay

A full-screen dark layer for site navigation.

- **Anatomy**: Background layer, centered dot-matrix navigation links, collapsible utility rows, bottom legal and social links
- **Surface**: `{colors.ink}` background, `{colors.surface}` text
- **Typography**: Navigation uses `{typography.hero-display}`; utility rows use `{typography.label}`
- **Shape**: Utility rows have 8px radius containers
- **Spacing**: Generous vertical spacing between navigation items; 16px padding in utility rows

### Collapsible row

An expandable control for support, newsletter, store, and language selection.

- **Anatomy**: Row container, label text, status icon or chevron
- **Surface**: `{colors.ink}` background with subtle `{colors.muted}` border or separator
- **Typography**: `{typography.label}`
- **Shape**: 8px radius
- **Spacing**: 16px internal padding

## Responsive behavior

The design appears optimized for desktop presentation, with the floating purchase card and asymmetric thumbnail grid requiring significant horizontal space. At narrower viewports, the thumbnail grid should collapse to a horizontal scroll or stacked list beneath the hero image. The purchase card, currently centered over photography, should shift to a fixed bottom position or full-width inline placement to remain accessible.

The navigation overlay, being full-screen and centered, adapts naturally to any viewport size. The dot-matrix typography remains legible at all scales due to its high contrast and simple construction. Utility rows in the footer should stack vertically without modification.

Touch targets for the 11px Lettera Mono Ll buttons should be increased to minimum 44px height on mobile devices, while maintaining the visual size through padding rather than type scaling.

## Practical implementation guidance

### Preserve
- The strict four-color palette and absolute light/dark mode inversion
- The 4px base unit and derived spacing scale
- The three-type-family hierarchy with Ndot reserved for brand moments
- The 8px border radius on all interactive elements
- The dot-grid overlay as a persistent background texture
- The floating card pattern over full-bleed photography

### Avoid
- Adding accent colors beyond the product photography itself
- Using gradients, shadows, or transparency for depth
- Replacing Ndot with conventional sans-serif for navigation
- Increasing the type scale beyond the specified values
- Removing the dot-grid overlay or treating it as optional
- Using border radii larger than 8px, which would soften the technical precision

### Recommended build order
1. Establish the 4px spacing scale and CSS custom properties
2. Implement the type system with all three families at specified sizes
3. Build the light/dark mode toggle with exact color values
4. Create the dot-grid overlay as a fixed background layer
5. Develop the purchase card component with all internal spacing
6. Implement the thumbnail grid with asymmetric positioning
7. Build the footer navigation overlay with collapsible rows
8. Add the full-screen navigation with centered dot-matrix links

### Accessibility
- Ensure `#000000` on `#F5F5F5` meets WCAG AA contrast (it does at 18.5:1)
- Verify `#FFFFFF` on `#000000` in dark mode (21:1, exceeds AAA)
- The 11px Lettera Mono Ll may be small for some users; allow browser zoom without breaking layouts
- The dot-matrix Ndot type should not be used for body text due to reduced legibility at small sizes
- Collapsible rows require proper ARIA attributes for expand/collapse state
- The floating purchase card should be reachable via keyboard navigation when overlaying images

## Scope note

This guide covers the Phone (4a) Pro product page and footer navigation overlay. Mobile breakpoints, checkout flows, animation specifications, and hover or focus states are not represented in the supplied material. The thumbnail grid's exact positioning algorithm and any dynamic loading behavior are not documented.
