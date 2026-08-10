# How hatroid.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/hatroid.com-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero section with full-bleed Ghost in the Shell collaboration imagery and dark navigation bar](https://pin.fontofweb.com/9382?format=jpg)](https://design.withfudge.com/share/pin-9382)

[Homepage hero section with full-bleed Ghost in the Shell collaboration imagery and dark navigation bar](https://design.withfudge.com/share/pin-9382)

[![Product collection grid showing six outerwear items with sold-out labels on light background](https://pin.fontofweb.com/9383?format=jpg)](https://design.withfudge.com/share/pin-9383)

[Product collection grid showing six outerwear items with sold-out labels on light background](https://design.withfudge.com/share/pin-9383)

[![Product detail page with large jacket image, size selector, and bilingual description text](https://pin.fontofweb.com/9384?format=jpg)](https://design.withfudge.com/share/pin-9384)

[Product detail page with large jacket image, size selector, and bilingual description text](https://design.withfudge.com/share/pin-9384)

## Overview

HATRA OFFICIAL presents a deliberately restrained e-commerce experience built around the clarity of its product photography. The visual system operates in two distinct modes: a light, airy presentation for product browsing and purchasing, and a dark, immersive mode for editorial and campaign content. The homepage opens with a full-bleed collaboration hero—here featuring Ghost in the Shell—where white typography and navigation float over rich, dark imagery. Product pages and collection grids invert this relationship, placing garments against pale, neutral backgrounds with dark text. The overall impression is one of editorial precision: generous whitespace, minimal interface chrome, and typography that recedes in favor of the clothing. Navigation is sparse, with only Store, Project, Info, and Cart links anchoring the header. The system prioritizes the garment as the primary visual event, using consistent framing, neutral backdrops, and understated labeling to maintain focus.

## Colors

The palette is intentionally narrow, built from achromatic foundations with a single warm accent. Light pages use a cool off-white canvas with warm gray surfaces for product photography. Dark pages use pure black with white text. The warm accent appears sparingly, reserved for promotional banners and urgent labels.

| token | hex | use |
|---|---|---|
| ink | #4C4C4C | Primary text, headings, product titles |
| ink-secondary | #808080 | Body text, descriptions, metadata |
| ink-muted | #A3A3A3 | Disabled states, sold-out labels, captions |
| canvas | #FFFFFF | Page backgrounds, input fields, buttons |
| surface | #E8E7E9 | Product image backgrounds, collection cards |
| surface-warm | #EBF4F4 | Alternate section backgrounds, promotional banners |
| dark-canvas | #000000 | Hero sections, dark mode pages, campaign imagery |
| dark-ink | #FFFFFF | Text on dark backgrounds, header navigation in dark mode |
| accent-warm | #73260A | Promotional links, urgent labels, limited badges |
| border | #6E6E6E | Button borders, active input states |
| border-light | #E1E1E1 | Dividers, inactive inputs, subtle separators |

The light mode dominates the shopping experience. Product images sit on #E8E7E9, a warm gray that neutralizes color casts without clinical coldness. Text hierarchy relies on value contrast rather than hue: #4C4C4C for emphasis, #808080 for reading text, #A3A3A3 for de-emphasized states like sold-out inventory. The dark mode inverts this completely for editorial impact, using #000000 with #FFFFFF text. The accent-warm token appears in the top promotional bar and select interactive moments, providing the only chromatic warmth in an otherwise neutral system.

## Typography

The type system uses Helvetica as its primary family across all roles, with Applesystem appearing as a system fallback in limited contexts. Weights remain at 400 (Regular) throughout, with hierarchy established through size and color value rather than weight contrast. The system avoids bold or heavy treatments, maintaining the brand's quiet, editorial voice.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| body | Helvetica | 0.875rem | 400 | 1.5 | 0em | Descriptions, form labels, general content |
| body-small | Helvetica | 0.5625rem | 400 | 1.625 | 0em | Captions, fine print, image credits |
| label | Helvetica | 0.71875rem | 400 | 1.5 | 0em | Size selectors, form hints, metadata |
| price | Helvetica | 0.875rem | 400 | 1.5 | 0em | Product prices, cart totals |
| section-heading | Helvetica | 1.625rem | 400 | 1.375 | 0em | Campaign titles, collection headers |
| product-title | Helvetica | 0.984375rem | 400 | 1 | 0em | Product names in cards and detail pages |
| navigation | Helvetica | 0.875rem | 400 | 1.5 | 0em | Header links, category filters |
| button | Helvetica | 0.8125rem | 400 | 1.5 | 0em | Button labels, action text |

The 14.5px body size (0.875rem at 16px root) serves as the anchor, with line-height at 1.5 creating comfortable reading measure. The section-heading at 26px (1.625rem) provides the only significant scale jump, used for campaign announcements and major page titles. Smaller sizes handle supporting information: 9px for captions, 10.35px for secondary metadata, 11.5px for compact labels. The system maintains 0em letter-spacing throughout, relying on Helvetica's inherent tightness rather than tracked openness. Applesystem appears in the source as a fallback family at 14px in limited utility contexts; it is not a primary design voice. Verify licensing for Helvetica before production use.

## Layout

The layout follows a centered, max-width container model with generous horizontal margins. The header and main content areas share a consistent inset, creating visual alignment across page types.

The header spans full width with internal content constrained. On light pages, it carries a bottom border in #4C4C4C; on dark pages, the border inverts to white. Header padding measures 26px vertical, with navigation links spaced evenly across the right portion.

Main content areas use substantial top and bottom padding to create breathing room. The homepage hero section occupies the full viewport width with no horizontal padding, allowing imagery to bleed edge-to-edge. Below the hero, content sections return to the centered container with 91px top padding and 60px bottom padding on the homepage, or 74px top and 108px bottom on collection pages.

Product grids use a three-column layout with consistent gutters. Each product card contains a 4:5 aspect ratio image container filled with the surface color, followed by title and status text below. Grid gaps appear minimal, allowing the product photography to dominate the visual field.

The product detail page splits into a two-column layout: a large product image occupying roughly 60% of the width on the left, with product information, selectors, and description stacked on the right. Thumbnail navigation sits below the main image, allowing variant and angle selection.

Spacing tokens derive from a 2px base unit. Common increments include 8px for tight internal padding, 16px for element margins, 32px for section internal spacing, and 36px for major content divisions. The system avoids dense packing, preferring openness that lets garments command attention.

## Visual language

Photography defines the visual experience. Product images use a consistent treatment: garments hung on simple white hangers against warm gray backgrounds, shot straight-on with even lighting that eliminates shadow drama. This clinical presentation emphasizes cut, fabric, and construction detail. The homepage hero inverts this approach with full-bleed campaign imagery—highly saturated, motion-blurred, or digitally processed photographs that create emotional impact.

The interface language is equally restrained. Buttons use thin 1px borders rather than filled backgrounds. Form elements share this lightness, with minimal borders and no shadow. The only rounded elements are buttons and select inputs, both with subtle 3-4px radii that soften without becoming friendly.

Color application follows page mode strictly. Light pages use dark text on white; dark pages use white text on black. The promotional banner at the very top of the page—visible across all pages—uses a warm off-white background with the accent-warm color for links, creating a subtle horizontal band that separates from both light and dark page bodies.

Iconography and decorative elements are absent. The HATRA wordmark appears in the header with a minimal geometric mark. Navigation uses text links exclusively. The cart and store functions are labeled plainly, without bag or basket icons.

## Components

### Header

- **Anatomy**: Logo mark and wordmark left-aligned; Store, Project, Info, Cart links right-aligned; optional promotional banner above
- **Surface**: Light mode uses #E8E7E9 background with #4C4C4C text and bottom border; dark mode uses #000000 background with #FFFFFF text and border
- **Typography**: `{typography.navigation}` for all links
- **Spacing**: 26px vertical padding, horizontal margins matching main content container
- **Composition**: Flexbox row with space-between alignment; links evenly distributed right side

### Promotional Banner

- **Anatomy**: Full-width strip above header; centered text with inline link
- **Surface**: #EBF4F4 background, #73260A text for links
- **Typography**: `{typography.body-small}` or smaller
- **Spacing**: Minimal vertical padding, approximately 14px

### Product Card

- **Anatomy**: Image container, product title, price or status label
- **Surface**: Image background #E8E7E9; text on transparent/white below
- **Typography**: `{typography.product-title}` for name; `{typography.body-small}` with `{colors.ink-muted}` for sold-out status
- **Shape**: Image container 4:5 aspect ratio, no border radius
- **Spacing**: Title 8-10px below image; status label 2px below title
- **Variants**: Available items show price; sold-out items show italicized "Sold Out" in muted color

### Product Detail — Image Gallery

- **Anatomy**: Large primary image; thumbnail strip below with variant images
- **Surface**: Primary image background #E8E7E9; thumbnails with same treatment
- **Spacing**: Thumbnails 16px below primary image, horizontally scrollable or wrapped
- **Composition**: Left column approximately 60% width; generous internal padding

### Product Detail — Information Panel

- **Anatomy**: Product title, price, size selector, add-to-cart button, description text, material details, thumbnail variant
- **Typography**: `{typography.section-heading}` for title; `{typography.price}` for price; `{typography.body}` for description; `{typography.label}` for size selector
- **Surface**: All elements on white background
- **Spacing**: 20-30px between major elements; description text with 8px paragraph spacing
- **Composition**: Stacked vertical layout, left-aligned

### Size Selector

- **Anatomy**: Dropdown/select input with current selection displayed
- **Surface**: White background, #E1E1E1 border, #4C4C4C text
- **Shape**: 3px border radius
- **Spacing**: 14px vertical padding, 20px horizontal padding
- **Typography**: `{typography.label}`

### Add to Cart Button

- **Anatomy**: Full-width button with label and price
- **Surface**: White background, #6E6E6E border; text #635151
- **Shape**: 4px border radius
- **Spacing**: 14px vertical, 28px right padding, 20px left padding
- **Typography**: `{typography.button}`
- **Composition**: Centered text with price appended after bullet separator

### Secondary Button

- **Anatomy**: Text label with optional icon or arrow
- **Surface**: White background, #E1E1E1 border; text #6E6E6E
- **Shape**: 4px border radius
- **Spacing**: 12px vertical, 24px horizontal
- **Typography**: `{typography.button}`

### Campaign Hero

- **Anatomy**: Full-bleed image or video; overlaid title and description; optional CTA link
- **Surface**: #000000 background; white text
- **Typography**: `{typography.section-heading}` for title; `{typography.body}` for description
- **Spacing**: 91px top padding, 60px bottom padding for text block below image
- **Composition**: Image fills viewport width; text constrained to content container below

## Responsive behavior

The system appears optimized for desktop viewing, with fixed-width containers and multi-column grids. At narrower viewports, the three-column product grid should collapse to two columns and then single column, maintaining the 4:5 image ratio. The product detail page should stack vertically, placing the information panel above or below the image gallery rather than beside it.

Header navigation may compress to a hamburger menu on small screens, though the current sparse link count (four items) suggests horizontal arrangement could persist on tablet widths. The promotional banner should remain single-line, truncating with ellipsis if necessary.

Typography scales down modestly: the 26px section-heading may reduce to 22px or 20px on mobile to prevent excessive line breaks. Body text remains at 14.5px for readability. Touch targets for buttons and selectors should expand to minimum 44px height on touch devices.

Campaign hero imagery should maintain full bleed, with text overlay repositioned to avoid cropping critical image areas. The text block below the hero should retain generous padding to preserve the airy, editorial pacing.

## Practical implementation guidance

### Preserve
- The stark product photography treatment: neutral warm-gray backgrounds, even lighting, centered framing
- The two-mode color system with strict light/dark page separation
- Helvetica as the sole type family, with weight fixed at 400
- Generous whitespace and minimal interface density
- The 4:5 product image aspect ratio across all cards and detail views
- Thin 1px borders on interactive elements rather than filled backgrounds

### Avoid
- Adding color to the product image backgrounds; the neutral gray is essential to accurate color perception
- Using bold or heavy font weights; the system's quiet voice depends on consistent 400 weight
- Crowding the header with additional navigation or promotional elements
- Applying shadow or depth effects to cards, buttons, or inputs
- Breaking the centered container alignment with full-bleed content except in designated hero zones

### Recommended Build Order
1. Establish the color tokens and page mode switching logic
2. Implement Helvetica at 14.5px body size with 1.5 line-height
3. Build the header component in both light and dark variants
4. Create the product card with image container, title, and status label
5. Implement the product detail page layout with image gallery and information panel
6. Add form components: size selector, add-to-cart button
7. Build the campaign hero with full-bleed imagery and text overlay
8. Compose collection grid with three-column responsive behavior

### Accessibility
- Ensure all text on dark hero imagery meets WCAG AA contrast; the white-on-black header achieves this, but overlaid text on complex images may need subtle text-shadow or gradient scrim
- Maintain visible focus indicators on all interactive elements; the thin borders should visibly change color or width on focus
- Provide alt text for all product images describing color, material, and garment type
- Ensure size selector and add-to-cart button are fully keyboard operable with visible focus states
- Consider adding skip links for keyboard users to bypass product grids and reach cart functionality

## Scope note

This guide covers the homepage campaign presentation, product collection grids, and product detail pages as visible in the supplied materials. Cart functionality, checkout flows, account pages, and the Project and Info content sections are not represented. Mobile-specific layouts, hover states, loading skeletons, and animation behavior were not captured and should be designed to match the system's restrained, editorial character. Measurements are exact where retained and practical adaptation targets where inferred from visible structure.
