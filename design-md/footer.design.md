# How footer.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/footer.design-design)

Last updated: 2026-08-10

## Captured pages

[![Inversa footer with three-column grid, oversized lime brand mark, and email subscription field on black background](https://pin.fontofweb.com/7029?format=jpg)](https://design.withfudge.com/share/pin-7029)

[Inversa footer with three-column grid, oversized lime brand mark, and email subscription field on black background](https://design.withfudge.com/share/pin-7029)

[![Footer gallery grid page showing category navigation, filter pills, and nine diverse footer design thumbnails on dark background](https://pin.fontofweb.com/7028?format=jpg)](https://design.withfudge.com/share/pin-7028)

[Footer gallery grid page showing category navigation, filter pills, and nine diverse footer design thumbnails on dark background](https://design.withfudge.com/share/pin-7028)

[![Mesh Optical footer with red gradient background, large navigation links with arrow icons, and social links row](https://pin.fontofweb.com/7027?format=jpg)](https://design.withfudge.com/share/pin-7027)

[Mesh Optical footer with red gradient background, large navigation links with arrow icons, and social links row](https://design.withfudge.com/share/pin-7027)

## Overview

Footer.design is a curated gallery and showcase platform for website footer designs. The interface operates entirely in dark mode, using a near-black canvas with white typography to create maximum contrast and let the showcased footer designs become the visual focus. The system balances editorial presentation with functional browsing, combining a category-filtered navigation bar, a responsive grid of footer thumbnails, and detailed individual footer pages with metadata and external links. The design language is intentionally restrained—clean geometric shapes, minimal decorative elements, and a single type family with careful weight differentiation—to ensure the diverse footer designs within the gallery remain the heroes of each view.

## Colors

The color system is built on extreme contrast: a pure black canvas against white text and interface elements. This creates a neutral stage where any color within the showcased footers can read clearly.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, deepest layer |
| surface | #242424 | Elevated card backgrounds, secondary containers |
| ink | #FFFFFF | Primary text, headings, links, borders |
| border | #FFFFFF | Hairline dividers, pill borders, grid lines |
| action | #FFFFFF | Primary button fills, active filters |

The interface itself does not use gradients or complex color relationships—those appear only within the showcased footer designs. The gallery page presents thumbnails on the dark canvas without additional framing, allowing each footer's native color palette to establish its own presence. White borders at 1px width serve as subtle structural dividers in grid layouts and footer compositions. Colors visible within showcased footers—such as the lime brand mark in the Inversa example or the red gradient in the Mesh Optical example—belong to those external designs and are not part of this system's core palette.

## Typography

The system uses Inter as its sole type family, leveraging weight and size variation to establish hierarchy without introducing additional fonts.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 2rem | 600 | 1 | -0.05em | Page titles, large brand marks |
| section-display | Inter | 1.125rem | 400 | 1.4 | -0.03em | Subheadings, descriptions |
| body | Inter | 1.125rem | 400 | 1.4 | -0.03em | Paragraph text, card descriptions |
| label | Inter | 0.875rem | 500 | 1 | -0.03em | Category filters, tags |
| navigation | Inter | 0.875rem | 600 | 1 | -0.03em | Buttons, links, CTAs |
| legal-copy | Inter | 0.875rem | 400 | 1.4 | -0.03em | Copyright, fine print |

All text uses negative letter spacing for a tighter, more contemporary feel. The 1.125rem body size with 1.4 line height provides comfortable reading for descriptions, while the 0.875rem navigation size with tight leading suits pill-shaped buttons and compact link rows. The hero-display token at 2rem with weight 600 and 1.0 line height creates impactful page titles and supports the large brand marks seen in featured footers.

Verify licensing for these families before production use.

## Layout

The layout system centers on a full-width dark canvas with contained content regions. The gallery page uses a header navigation bar with category filters and action buttons, followed by a responsive grid of footer thumbnails. Individual footer showcase pages present a split or stacked layout: descriptive content on one side and the featured footer rendered at full fidelity on the other.

Grid structure follows a three-column pattern for the main gallery, with consistent 2.5rem gaps between cards. The header maintains horizontal padding of 2.5rem, creating breathable margins without excessive whitespace. Footer cards themselves are rectangular, filling their grid cells without rounded corners—this lets the internal footer design determine its own geometry.

Vertical rhythm uses 2.5rem section spacing for major divisions and 1rem for component-level grouping. The category navigation sits flush with the top edge, while page titles and descriptions receive additional top spacing to establish clear visual entry points. Individual showcase pages offset the featured footer image with descriptive text and metadata, creating an editorial presentation that feels like a design portfolio rather than a simple directory.

## Visual language

The visual language is deliberately austere to serve its curatorial purpose. Geometric precision dominates: straight edges, right angles, and perfect circles for interactive elements. The pill shape appears exclusively for buttons and filters, creating a consistent interactive vocabulary against the otherwise rectilinear grid.

Imagery within the gallery consists of screenshot thumbnails showing actual footer designs at reduced scale. These retain their original proportions and color palettes, making each card a distinct visual event against the uniform dark background. No additional shadows, borders, or hover treatments frame the thumbnails—the design trusts the showcased work to carry visual interest.

The category filter bar introduces the only horizontal rhythm break, with a scrollable or wrapping row of pill buttons. Active and inactive states use border presence versus absence rather than fill changes, maintaining the dark field. The "Footer" logotype in the header uses a distinctive treatment with the dot on the "o" replaced by a degree symbol, providing subtle brand recognition without competing with gallery content.

## Components

### Category Filter Pill

- **Anatomy**: Text label within a bordered container
- **Surface**: Transparent background with 1px white border when inactive; white fill with black text when active
- **Typography**: `{typography.label}` at 0.875rem, weight 500
- **Shape**: Full pill with `9999px` border radius
- **Spacing**: Padding of 0.5rem vertical and 1rem horizontal
- **Composition**: Arranged in horizontal row with consistent gap spacing
- **Variants**: Active state inverts colors; inactive state shows border only

### Primary Action Button

- **Anatomy**: Text label with optional arrow icon, contained within filled shape
- **Surface**: White fill with black text
- **Typography**: `{typography.navigation}` at 0.875rem, weight 600
- **Shape**: Full pill with `9999px` border radius
- **Spacing**: Padding of 0.8125rem vertical and 1rem horizontal
- **Composition**: Appears in header and content areas for primary CTAs like "Start a project" and "Submit"
- **Variants**: Some instances include right-pointing arrow icon

### Footer Gallery Card

- **Anatomy**: Thumbnail image showing footer screenshot, with site name and optional metadata below
- **Surface**: No distinct card surface—thumbnail sits directly on canvas
- **Typography**: Site name uses `{typography.section-display}`; metadata uses `{typography.legal-copy}`
- **Shape**: Rectangular, no border radius on container
- **Spacing**: 2.5rem gap in grid; internal padding between thumbnail and text
- **Composition**: Thumbnail above, site name and link below with optional "Visit Website" arrow link
- **Variants**: Some cards show additional metadata like designer name or style tags

### Footer Showcase View

- **Anatomy**: Split layout with descriptive content left, featured footer rendered right
- **Surface**: Canvas background throughout
- **Typography**: Title uses `{typography.hero-display}`; description uses `{typography.body}`; metadata labels use `{typography.label}`
- **Shape**: Featured footer shown in rectangular frame preserving original proportions
- **Spacing**: 2.5rem section padding; content blocks separated by 1rem
- **Composition**: Title and description stacked vertically left; footer image right; style tags listed below
- **Variants**: Some footers include external link button with arrow icon

### Navigation Link Row

- **Anatomy**: Text link with optional arrow icon, arranged horizontally or in list
- **Surface**: Transparent
- **Typography**: `{typography.navigation}` or `{typography.section-display}` depending on hierarchy
- **Shape**: No border radius on text links; some instances use pill containers
- **Spacing**: Compact horizontal arrangement with consistent gap
- **Composition**: Social links, legal links, or footer navigation grouped in rows

## Responsive behavior

The three-column gallery grid should collapse to two columns on medium viewports and single column on small screens, maintaining the 2.5rem gap where space permits. The category filter bar may become horizontally scrollable when pill buttons exceed available width, preserving the pill shape and tap targets.

The split layout on individual showcase pages should stack vertically on narrow viewports, with the featured footer image appearing above the descriptive content to maintain visual priority. Header navigation elements should collapse to a simplified arrangement, potentially hiding secondary actions behind a menu while preserving "Start a project" and "Submit" as visible primary actions.

Text sizes should remain consistent across breakpoints—the 1.125rem body and 0.875rem label sizes provide adequate readability without requiring scaling. Touch targets for pill buttons and links should maintain minimum 44px height.

## Practical implementation guidance

### Preserve
- The extreme contrast between black canvas and white interface elements
- The single-font approach using Inter with weight-based hierarchy
- Pill-shaped buttons as the exclusive interactive shape language
- The three-column gallery grid with generous 2.5rem gaps
- Direct presentation of footer thumbnails without decorative framing
- Negative letter spacing across all text sizes for the tight, contemporary feel

### Avoid
- Adding background colors or shadows to gallery cards
- Introducing additional type families or decorative fonts
- Using rounded corners on containers that hold footer thumbnails
- Creating busy hover states that compete with showcased designs
- Light mode variants that would undermine the gallery's dark-room presentation

### Recommended Build Order
1. Establish the dark canvas and Inter type system with all six tokens
2. Build the pill button component with active and inactive states
3. Create the category filter bar with horizontal scroll behavior
4. Implement the three-column gallery grid with responsive collapse
5. Build the individual showcase page with split/stack layout
6. Add thumbnail generation and card composition with metadata

### Accessibility
- Ensure all white text on black backgrounds meets WCAG AAA contrast ratios
- Provide visible focus indicators on pill buttons that maintain the pill shape
- Include descriptive alt text for footer thumbnail images
- Make category filters accessible as a toggle group or radio pattern
- Ensure horizontal scroll regions are keyboard navigable
- Maintain sufficient touch targets for pill buttons on touch devices

## Scope note

This guide covers the gallery browsing interface and individual footer showcase pages as visible in the supplied images. It does not include mobile-specific layouts, search functionality, submission forms, animation behavior, or the full range of category filters beyond those shown. The footer designs themselves are external content—the guide addresses their presentation container, not their internal design systems.
