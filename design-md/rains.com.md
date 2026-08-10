# How rains.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/rains.com-design)

Last updated: 2026-08-10

## Captured pages

[![Home Away campaign landing page with full-bleed stainless steel homeware hero image and bold white display typography overlaid on metallic surfaces](https://pin.fontofweb.com/5731?format=jpg)](https://design.withfudge.com/share/pin-5731)

[Home Away campaign landing page with full-bleed stainless steel homeware hero image and bold white display typography overlaid on metallic surfaces](https://design.withfudge.com/share/pin-5731)

[![Product comparison grid showing four wash bags with color swatches, pricing, and expandable specification tables with hairline borders](https://pin.fontofweb.com/5730?format=jpg)](https://design.withfudge.com/share/pin-5730)

[Product comparison grid showing four wash bags with color swatches, pricing, and expandable specification tables with hairline borders](https://design.withfudge.com/share/pin-5730)

[![Product feature section with black wash bag on white background and large bold feature headline with circular accent marker](https://pin.fontofweb.com/5729?format=jpg)](https://design.withfudge.com/share/pin-5729)

[Product feature section with black wash bag on white background and large bold feature headline with circular accent marker](https://design.withfudge.com/share/pin-5729)

[![Product detail page with split layout showing black wash bag on warm gray background and accordion information panels with related product cards](https://pin.fontofweb.com/5728?format=jpg)](https://design.withfudge.com/share/pin-5728)

[Product detail page with split layout showing black wash bag on warm gray background and accordion information panels with related product cards](https://design.withfudge.com/share/pin-5728)

## Overview

Rains presents a disciplined, Scandinavian-inspired e-commerce experience built on restraint and material honesty. The visual system centers on a single sans-serif type family rendered at dramatic scale differences, creating clear hierarchy without decorative embellishment. Photography favors neutral warm-gray backdrops that let product textures—matte PU fabrics, brushed steel, molded ceramics—speak directly. The interface avoids color beyond black, white, and functional grays, channeling attention toward merchandise and editorial imagery. Navigation sits in a compact horizontal bar with pill-shaped category tags, while commerce actions resolve to rounded dark buttons that float above content. The overall impression is utilitarian luxury: every element earns its place, and generous whitespace prevents density even when specification tables and comparison grids fill the viewport.

## Colors

The palette is intentionally austere, derived from the product photography and interface surfaces visible across the supplied pages. Warm gray tones emerge from studio backdrops rather than applied tints, while the interface relies on stark contrast between ink and canvas.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, active buttons, navigation labels, borders on dark mode surfaces |
| canvas | #FFFFFF | Page backgrounds, button text on dark surfaces, product photography backdrops |
| warm-gray | #C4C4C4 | Studio photography backgrounds, secondary product imagery environments |
| muted-ink | #1F1F1F | Near-black for subtle depth variation, hover states, secondary dark surfaces |
| surface | #F5F5F5 | Sticky commerce bars, accordion backgrounds, subtle section alternation |
| border | #E5E5E5 | Hairline dividers, table rules, input borders, ghost button strokes |

The system operates in a near-monochrome mode. Color appears only through product photography—beige wash bags, purple accessories, green weekend bags—never through applied interface tints. This creates a gallery-like environment where merchandise provides the only chromatic variation. Dark surfaces appear sparingly: the sticky add-to-cart bar uses near-black, and primary buttons carry solid ink backgrounds. The warm-gray tone dominates product photography, establishing a consistent studio environment that unifies disparate items under the Rains material language.

## Typography

A single type family carries all communication, from monumental campaign headlines to compact specification labels. Europa Gro Nr 2 Sb Rom provides a geometric sans-serif structure with slightly condensed proportions that read cleanly at extreme sizes. The family supports only Regular weight in the supplied sources; weight variation comes through size and color contrast rather than heavier cuts.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Europa Gro Nr 2 Sb Rom | 6rem | 400 | 0.9 | -0.03em | Campaign page titles, full-bleed hero overlays |
| section-display | Europa Gro Nr 2 Sb Rom | 3rem | 400 | 1 | -0.02em | Feature headlines, product benefit statements |
| body | Europa Gro Nr 2 Sb Rom | 1rem | 400 | 1.5 | 0 | Paragraphs, descriptions, accordion content |
| body-small | Europa Gro Nr 2 Sb Rom | 0.875rem | 400 | 1.5 | 0 | Specifications, metadata, secondary details |
| label | Europa Gro Nr 2 Sb Rom | 0.75rem | 400 | 1.2 | 0.02em | Buttons, tags, color names, price displays |
| navigation | Europa Gro Nr 2 Sb Rom | 0.875rem | 400 | 1 | 0.01em | Primary nav, category pills, footer links |

Verify licensing for these families before production use. No designer or vendor attribution is supplied for Europa Gro Nr 2 Sb Rom or Stampedfont.

The type scale uses a 4px relative unit, with sizes snapping to whole multiples. Hero display at 96px (6rem) creates immediate impact on campaign pages, while the section display at 48px (3rem) handles product feature statements. Negative tracking increases with size, tightening large headlines without mechanical compression. Body text remains neutral and highly legible, with line height generous enough for comfortable reading in accordion panels and product descriptions.

## Layout

The layout system favors asymmetrical splits and full-bleed media with overlaid text. Campaign pages use edge-to-edge photography with centered or offset display type, while product pages adopt a two-column structure that separates visual presentation from commerce information.

Page sections flow vertically with substantial breathing room. The hero area on campaign pages occupies the full viewport width, with navigation floating above in a semi-transparent or contrasting bar. Below the hero, content shifts to a contained width with generous side margins, creating a magazine-like reading experience. Product pages split roughly 50/50 between imagery and information, with the left column holding large-scale product photography on warm-gray backgrounds and the right column stacking title, price, variant selectors, and accordion details.

Grids for product comparison and recommendations use equal-width columns with consistent internal spacing. The comparison table visible in the supplied images aligns specifications across four products using a shared header row and hairline horizontal rules. Related product cards appear in a horizontal scroll or grid with square aspect ratio thumbnails, color swatch rows, and minimal metadata.

Spacing follows a 4px base unit. Section padding defaults to 6rem, creating clear separation between content blocks. Component internal padding ranges from 0.5rem for compact tags to 1.5rem for card interiors. The sticky commerce bar at the bottom of product pages uses reduced padding to maintain presence without dominating the viewport.

## Visual language

Photography establishes the emotional register: clinical, material-focused, and quietly luxurious. Products sit on seamless warm-gray cycloramas with soft, even lighting that eliminates harsh shadows. The effect is catalog-like but elevated, treating each item as a design object worthy of study. Campaign imagery introduces environmental context—stainless steel homeware among blue hydrangeas, brushed metal catching directional light—while maintaining the same restrained color palette.

Geometric precision extends to every interface element. Buttons are fully pill-shaped with generous horizontal padding. Color swatches are perfect circles with thin borders. The circular accent marker on product feature images—a white ring on black product surfaces—echoes the round geometry of buttons and swatches, creating a family of circular motifs across the experience.

Motion, where implied by component structure, would likely be minimal and functional. Accordion panels expand vertically. Sticky bars slide into view. Product cards in comparison grids may shift on selection. The system avoids decorative animation in favor of immediate, predictable state changes.

## Components

### Primary button
- **Anatomy**: Text label centered within a fully rounded container
- **Surface**: Solid ink background with canvas text
- **Typography**: `{typography.label}` in uppercase or title case
- **Shape**: Pill border radius, horizontal padding approximately 2rem, vertical padding 0.75rem
- **Spacing**: Typically appears in isolation or paired with secondary actions

### Secondary button
- **Anatomy**: Text label within rounded container with visible border
- **Surface**: Canvas background, ink border, ink text
- **Typography**: `{typography.label}`
- **Shape**: Pill border radius, matching primary button proportions
- **Spacing**: Used for alternative actions like "Go to product" in comparison grids

### Ghost button / Tag
- **Anatomy**: Text label within lightly bordered rounded container
- **Surface**: Transparent background, subtle border, ink text
- **Typography**: `{typography.label}` in sentence case
- **Shape**: Pill border radius, reduced padding (0.5rem vertical, 1.25rem horizontal)
- **Spacing**: Appears in horizontal clusters for category navigation or filter tags

### Product card
- **Anatomy**: Product thumbnail, color swatch row, product name, price, action buttons
- **Surface**: Canvas background, no visible card border in default state
- **Typography**: Product name in `{typography.body-small}`, price in `{typography.label}`
- **Shape**: Square or near-square thumbnail with `{rounded.card}` corners
- **Spacing**: Internal padding 1rem, external gap between cards 1.5rem
- **Composition**: Thumbnail dominates, metadata stacks below with swatches as horizontal row

### Accordion panel
- **Anatomy**: Header row with title and expand/collapse indicator, collapsible content area
- **Surface**: Canvas background, bottom border only
- **Typography**: Header in `{typography.body-small}` with semibold weight implied by structure, content in `{typography.body}`
- **Shape**: No border radius, full width within parent column
- **Spacing**: Header padding 1rem vertical, content padding 1rem when expanded
- **States**: Collapsed shows plus indicator, expanded shows minus or content reveal

### Color swatch
- **Anatomy**: Small circular indicator, optionally with selection state
- **Surface**: Product color fill, border in `{colors.border}`
- **Shape**: Perfect circle, 1rem diameter
- **Spacing**: 0.25rem gap between swatches in horizontal row

### Sticky commerce bar
- **Anatomy**: Product name, price, primary action button
- **Surface**: `{colors.surface}` background, top border in `{colors.border}`
- **Typography**: Product name and price in `{typography.body-small}`, button in `{typography.label}`
- **Shape**: Full viewport width, fixed to bottom edge
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding, button right-aligned

### Comparison table
- **Anatomy**: Product columns with shared row labels, alternating content rows
- **Surface**: Canvas background, horizontal rules in `{colors.border}`
- **Typography**: Row labels in `{typography.label}` with muted color, values in `{typography.body-small}`
- **Shape**: Full width, no vertical borders
- **Spacing**: 1rem vertical padding per cell, 1.5rem horizontal gap between product columns

## Responsive behavior

The supplied images show desktop layouts exclusively. Based on visible structure, the following responsive adaptations are recommended:

The campaign hero with overlaid display type should scale down proportionally, with `{typography.hero-display}` reducing to `{typography.section-display}` on narrower viewports to prevent excessive line breaks. The navigation bar with horizontal category pills should collapse to a hamburger menu or horizontal scroll on mobile, preserving the pill styling for touch targets.

Product page splits should stack vertically on narrow screens, with imagery occupying full width above the commerce information. The sticky add-to-cart bar should remain fixed at bottom for immediate access, with button expanding to full width on mobile.

Comparison grids with four columns should reflow to two columns on tablet and single column on mobile, maintaining the specification label and value pairing. Related product cards in the accordion panel should scroll horizontally on narrow viewports rather than wrapping.

## Practical implementation guidance

### Preserve
- The stark black-and-white interface with warm-gray photography environments
- Single type family at all sizes, relying on scale and tracking for hierarchy
- Pill-shaped buttons with generous horizontal padding
- Circular color swatches with thin borders
- Full-bleed campaign imagery with centered or offset display type
- Hairline borders for table rules and accordion separators

### Avoid
- Introducing additional accent colors beyond the monochrome system
- Using multiple type families or weights not supported by the source
- Square or sharp-cornered buttons that break the pill motif
- Heavy drop shadows or dimensional effects
- Decorative borders around product cards in default state
- Animated gradients or background patterns that compete with product photography

### Recommended build order
1. Establish the 4px spacing unit and type scale with Europa Gro Nr 2 Sb Rom
2. Implement pill button components with primary, secondary, and ghost variants
3. Build the product card structure with thumbnail, swatches, and metadata
4. Create the accordion panel with expand/collapse behavior
5. Assemble the product page split layout with sticky commerce bar
6. Add the campaign hero with overlaid display type and responsive scaling
7. Implement comparison table with shared row labels

### Accessibility
- Ensure pill buttons meet minimum 44px touch target size
- Provide visible focus states on all interactive elements, using outline or background shift
- Maintain color contrast ratios: ink on canvas exceeds WCAG AAA, while muted text on canvas should meet AA minimum
- Add aria-expanded to accordion panels and associate headers with content regions
- Include alt text for product photography that describes material and form
- Consider reduced motion preferences for any accordion or sticky bar animations

## Scope note

This guide covers the desktop campaign landing page and product detail surfaces visible in the supplied images. Mobile breakpoints, checkout flows, account pages, search results, and hover or loading states are not represented. Measurements are practical adaptation targets derived from visible proportions.
