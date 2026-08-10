# How photoyoshi.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/photoyoshi.com-design)

Last updated: 2026-08-10

## Captured pages

[![About page biographical timeline with Profiles and Awards sections on warm off-white canvas](https://pin.fontofweb.com/247?format=jpg)](https://design.withfudge.com/share/pin-247)

[About page biographical timeline with Profiles and Awards sections on warm off-white canvas](https://design.withfudge.com/share/pin-247)

[![Split-screen About hero with portrait photograph and bold biography statement](https://pin.fontofweb.com/246?format=jpg)](https://design.withfudge.com/share/pin-246)

[Split-screen About hero with portrait photograph and bold biography statement](https://design.withfudge.com/share/pin-246)

[![Landscape portfolio grid with staggered masonry layout and category label overlay](https://pin.fontofweb.com/245?format=jpg)](https://design.withfudge.com/share/pin-245)

[Landscape portfolio grid with staggered masonry layout and category label overlay](https://design.withfudge.com/share/pin-245)

[![Vertical mobile view of landscape photography column with large category typography](https://pin.fontofweb.com/244?format=jpg)](https://design.withfudge.com/share/pin-244)

[Vertical mobile view of landscape photography column with large category typography](https://design.withfudge.com/share/pin-244)

## Overview

This design system describes the portfolio website of Takamitsu Motoyoshi, a photographer and videographer based in Tokyo. The visual approach is deliberately restrained: a warm off-white canvas serves as the consistent ground for bold, tightly-tracked sans-serif typography and large-format photography. The system prioritizes image content above all else, with interface elements receding to near-invisibility. Navigation is minimal, typography is confident and oversized, and layouts employ asymmetric grids that create visual rhythm without decorative embellishment. The overall impression is that of a physical gallery or printed lookbook translated to screen—quiet, confident, and entirely in service of the photographic work.

## Colors

The palette is extremely limited, functioning as a neutral stage for photographic content. Warm undertones in the canvas distinguish the system from clinical white-background portfolios.

| token | value | use |
|---|---|---|
| ink | `#000000` | Primary text, navigation, category labels, timeline dates, all interface typography |
| canvas | `#EAE6DD` | Page background, section backgrounds, all surface areas behind content |
| warm-gray | `#B8B0A4` | Desaturated placeholder images in grid, secondary photographic elements, subtle dividers |
| muted-ink | `#2E2E2E` | Body text at reduced opacity or secondary hierarchy when pure black is too severe |

The canvas color carries a subtle warmth that prevents the sterile feeling of pure white, harmonizing with the film-photography aesthetic visible in the portfolio imagery. Black ink is used at full strength for all text without exception—there are no colored links, no accent buttons, no decorative hues. The warm-gray tone appears primarily within the portfolio grid system, where desaturated or placeholder images create a tonal rhythm against fully saturated photographs. This limited palette ensures that color in the interface never competes with color in the photographs themselves.

## Typography

The typographic system relies on a single sans-serif family with weight and scale as the sole variables. Bold weights dominate, used even for body-scale text where other systems might choose regular.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Helvetica Neue, Arial, sans-serif | 5rem | 700 | 0.9 | -0.03em | Category labels like "Landscape", major section identifiers |
| section-display | Helvetica Neue, Arial, sans-serif | 3rem | 700 | 1 | -0.02em | Subsection headings, profile/awards labels |
| body-large | Helvetica Neue, Arial, sans-serif | 1.75rem | 700 | 1.3 | -0.01em | Biography statements, prominent descriptive text |
| body | Helvetica Neue, Arial, sans-serif | 1rem | 400 | 1.6 | 0 | Timeline descriptions, contact values, general reading |
| label | Helvetica Neue, Arial, sans-serif | 0.75rem | 700 | 1.2 | 0.02em | Contact category labels (EMAIL, INSTAGRAM), metadata |
| navigation | Helvetica Neue, Arial, sans-serif | 0.875rem | 400 | 1.4 | 0 | Site navigation, header links, view toggles |

The hero-display token produces category typography that sits at the bottom edge of portfolio sections, partially overlapping image content, at a scale that competes with the photographs for visual attention. Negative tracking is aggressive, particularly at display sizes, creating a dense, editorial character. The body-large token handles the biography statement on the About page—unusually bold for body text, reinforcing the confident, direct voice. Labels are set in all-caps with bold weight, creating clear hierarchy against regular-weight contact values. Verify licensing for these families before production use.

## Layout

The layout system is built on asymmetric spatial relationships rather than centered or balanced compositions.

The portfolio grid employs a staggered masonry-like arrangement with multiple columns of varying image heights. Images are distributed across horizontal space with irregular vertical alignment—some columns contain taller images, others shorter, creating a rhythmic scan pattern. Grid gaps are consistent but not rigid; the overall effect suggests scattered prints on a table rather than a uniform matrix. The category label "Landscape" anchors the bottom of the grid section, positioned left-of-center with a photo count "(18)" and "/100Photos" subtitle nested nearby.

The About page uses a dramatic split-screen composition: photography occupies roughly half the viewport width on the left, while biography content fills the right half with generous internal padding. This 50/50 division is maintained vertically, with the portrait image extending full-height. The right panel centers its content vertically, with the biography statement given prominent placement and contact details anchored toward the bottom.

Timeline sections on the About page use a two-column structure: years in a narrow left column, descriptions in a wider right column. Section labels "Profiles" and "Awards" sit above their respective tables with underline decoration, left-aligned with the content below.

Spacing follows a 4px base unit. Section vertical padding is substantial, typically 6rem, creating breathing room between content zones. Internal component spacing uses multiples of 0.25rem: 1rem for compact element groups, 1.5rem for grid gaps, 3rem for related content clusters.

## Visual language

The visual language is that of a contemporary photography monograph—editorial, quiet, and materially aware.

Photography is treated as object: images in the portfolio grid appear as physical prints with subtle shadow or depth cues, some desaturated to near-monochrome while others retain full color. This selective saturation creates a curatorial effect, as if certain images have been highlighted while others await attention. The desaturated images share the warm-gray tone, integrating them into the overall palette rather than treating them as failed loads.

The interface avoids all decorative elements: no buttons with backgrounds, no cards with borders, no hero gradients or patterned backgrounds. The only "decoration" is typography itself—its scale, weight, and precise positioning. Underlines appear sparingly, used for section labels and the photographer's name as link indicators.

A small plus icon appears centered at the top of portfolio sections, suggesting an additive or expandable function. View mode toggles (grid and list icons) sit at the bottom right, minimal in form.

The warm canvas color unifies all surfaces, making the website feel like a single continuous sheet rather than assembled pages. This material continuity is essential to the gallery-like atmosphere.

## Components

### Site header

- **Anatomy**: Logo mark left-aligned, navigation links right-aligned
- **Surface**: Transparent over canvas, no background separation
- **Typography**: Navigation token, regular weight
- **Composition**: Horizontal flex, space-between, full viewport width with edge padding
- **Visible states**: Navigation links include underlined active state for current page

### Portfolio grid

- **Anatomy**: Multi-column masonry arrangement of image thumbnails, category label overlay, view toggle controls
- **Surface**: Canvas background, images as direct children without frame or border
- **Typography**: Hero-display for category name, label token for photo count and total
- **Spacing**: 1.5rem gaps between images, 6rem vertical padding for section
- **Composition**: Asymmetric columns with varying image heights; some images desaturated to warm-gray
- **Variants**: Grid view (default) and list view (toggleable via bottom-right controls)

### Category label

- **Anatomy**: Large text with superscript photo count, subtitle below
- **Typography**: Hero-display token for "Landscape", label token for "(18)" and "/100Photos"
- **Composition**: Positioned at bottom edge of grid section, overlapping into image area slightly
- **Surface**: No background, text directly on canvas

### Biography section

- **Anatomy**: Portrait photograph, name link, biography statement, contact details
- **Surface**: Split-screen with photography on left, canvas panel on right
- **Typography**: Body-large for biography, label for contact categories, body for contact values
- **Spacing**: Generous internal padding on right panel, vertical centering of primary content
- **Composition**: 50/50 horizontal division, portrait full-bleed to edges on left

### Timeline

- **Anatomy**: Section label with underline, two-column table of years and descriptions
- **Typography**: Section-display for label, body for content
- **Spacing**: 3rem below label before first entry, 1rem between entries
- **Composition**: Left column ~15% width for years, right column ~85% for descriptions

### Contact details

- **Anatomy**: Label-value pairs stacked vertically
- **Typography**: Label token for categories (EMAIL, INSTAGRAM), body for values
- **Spacing**: 0.5rem between label and value, 1.5rem between pairs

## Responsive behavior

The system maintains its asymmetric character across viewport sizes, with adaptations primarily in column count and type scale.

The portfolio grid collapses from multi-column to fewer columns on narrower viewports, eventually to a single scrolling column as visible in the vertical composition. Category typography scales down proportionally but remains oversized relative to viewport width.

The About page split-screen stacks vertically on narrow viewports, with portrait image above biography content. Timeline tables shift to single-column with years inline rather than separated.

Navigation remains minimal regardless of viewport; no hamburger menus or expanded navigation patterns are visible. The small link set (Work, About) remains directly accessible.

## Practical implementation guidance

### Preserve
- The warm off-white canvas as the sole background color throughout
- Aggressive negative tracking on display typography, particularly the category labels
- Asymmetric, non-uniform grid arrangements that feel curated rather than algorithmic
- Selective image desaturation as a deliberate curatorial device, not a loading state
- Bold weight for body-large text in biography sections—this is intentional, not a mistake
- Minimal interface chrome; let photography and typography carry all visual interest

### Avoid
- Adding accent colors, button backgrounds, or decorative elements not present in the source
- Centering the category labels or making them too small relative to images
- Uniform grid matrices that eliminate the scattered, editorial quality
- Pure white backgrounds that lose the warm, film-adjacent atmosphere
- Multiple font families—the system succeeds through restraint of a single family

### Recommended build order
1. Establish the canvas background color and base typography family
2. Implement the portfolio grid with asymmetric column heights and selective desaturation
3. Build the category label with hero-display scale and superscript count
4. Create the split-screen About layout with vertical centering
5. Add timeline components with two-column structure
6. Implement minimal header with logo and navigation
7. Polish spacing and tracking values to match the tight, editorial feel

### Accessibility
- Ensure sufficient contrast between ink text and canvas background (the combination meets WCAG AAA)
- Provide alt text for all portfolio images, describing content rather than decorative function
- Consider focus indicators for the minimal link set, as default browser styles may be the only visible state
- Maintain logical tab order through the asymmetric grid, following visual top-to-bottom flow
- Allow text zoom without breaking the split-screen layout; test stacking at high zoom levels

## Scope note

This guide covers the homepage portfolio grid and About page biography sections as visible in the supplied images. Footer content, additional portfolio categories beyond Landscape, individual project pages, loading states, hover interactions, and mobile navigation patterns are not represented. Measurements are practical adaptation targets. Verify licensing for the font families before production use.
