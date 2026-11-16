# How ereader.kobo.com is designed

[Open the live Fudge conversation](https://fudge.design/share/ereader.kobo.com-design)

Last updated: 2026-10-27

## References

[![Product grid showing eReader accessories with red Add To Cart buttons, color swatches, and blue Limited Edition badges on white cards](https://pin.fontofweb.com/11886?format=jpg)](https://fudge.design/share/pin-11886)

[Product grid showing eReader accessories with red Add To Cart buttons, color swatches, and blue Limited Edition badges on white cards](https://fudge.design/share/pin-11886)

[![Marketing section with large lifestyle photography, white text overlays on darkened images, and red Shop Now buttons](https://pin.fontofweb.com/11885?format=jpg)](https://fudge.design/share/pin-11885)

[Marketing section with large lifestyle photography, white text overlays on darkened images, and red Shop Now buttons](https://fudge.design/share/pin-11885)

[![Top navigation with Rakuten Kobo logo, dropdown menus, accessory category thumbnails in horizontal scroll, and promotional banner](https://pin.fontofweb.com/11884?format=jpg)](https://fudge.design/share/pin-11884)

[Top navigation with Rakuten Kobo logo, dropdown menus, accessory category thumbnails in horizontal scroll, and promotional banner](https://fudge.design/share/pin-11884)

[![Trustpilot testimonial carousel with green star ratings, verified badges, and reviewer attribution on white background](https://pin.fontofweb.com/11883?format=jpg)](https://fudge.design/share/pin-11883)

[Trustpilot testimonial carousel with green star ratings, verified badges, and reviewer attribution on white background](https://fudge.design/share/pin-11883)

## Overview

The Rakuten Kobo eReader Store presents a product-first ecommerce experience built around high-contrast photography, confident typography, and a disciplined red-and-white color system. The design balances editorial warmth with transactional clarity: serif display type adds personality to marketing moments, while a systematic sans-serif UI layer keeps navigation and product actions crisp and scannable. The visual architecture relies on full-bleed photography, generous whitespace, and card-based product grids that let hardware imagery dominate. Every interactive element reinforces the brand's red accent through primary buttons, promotional banners, and active states, creating a cohesive thread from browsing to purchase.

## Colors

The palette is intentionally restrained, built on a near-neutral foundation with a single high-saturation accent. This limited range keeps attention on product photography while ensuring brand recognition through consistent red application.

| token | value | use |
|---|---|---|
| action | #BF0000 | Primary buttons, promotional banners, active states, Add To Cart actions |
| ink | #000000 | Primary text, product titles, navigation labels |
| muted-ink | #484848 | Secondary text, body copy, descriptions |
| secondary-ink | #4D4D4D | Tertiary text, captions, metadata |
| canvas | #FFFFFF | Page background, card surfaces, input fields |
| surface | #F7F7F7 | Alternate section backgrounds, subtle container fills |
| surface-warm | #F6F6F6 | Warm neutral variant for specific section backgrounds |
| border | #808080 | Divider lines, subtle separators, muted borders |
| border-light | #FFFFFF | Inset borders on dark backgrounds, hairline accents |
| overlay | #000000 | Dark overlay on hero photography for text legibility |
| badge-blue | #0065BD | Limited Edition badges, informational labels |

The system operates in light mode exclusively. The red accent (#BF0000) functions as the sole chromatic anchor, appearing in every transactional context from the top promotional banner to individual product cards. Photography provides the color variation, with product images showing eReaders in blues, yellows, and neutrals against warm wood and lifestyle settings. Text on photography uses white with a dark overlay gradient to maintain contrast without heavy color blocking.

## Typography

The type system pairs a serif display family with multiple sans-serif UI layers, creating clear hierarchy between editorial marketing content and functional ecommerce interfaces. The exact families are Rakuten-serif, Rakuten-sans, Rakuten-sans-semibold, Rakuten-sans-ui, Rakuten-sans-ui-bold, -apple-system, and Trebuchet MS. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Rakuten-serif | 2.125rem | 600 | 1.2 | 0em | Large marketing headlines, hero section titles |
| section-display | Rakuten-serif | 1.875rem | 600 | 1.2 | 0em | Section headings, testimonial intros |
| heading | Rakuten-sans | 0.875rem | 700 | 1.3 | 0.086em | Navigation labels, uppercase section headers |
| body-large | Rakuten-sans-ui | 1.25rem | 400 | 1.5625 | 0em | Marketing descriptions, hero body text |
| body | Rakuten-sans-semibold | 0.8rem | 400 | 1.40625 | 0em | Product descriptions, card body text |
| body-bold | Rakuten-sans-semibold | 0.8rem | 700 | 1.40625 | 0em | Emphasized body text, prices |
| ui | Rakuten-sans-ui | 1rem | 700 | 1 | 0em | Primary button labels, navigation actions |
| ui-small | Rakuten-sans-ui-bold | 0.875rem | 600 | 1.15 | 0em | Secondary buttons, filter controls |
| label | -apple-system | 0.6875rem | 600 | 1 | 0em | Badges, metadata, fine print |
| price | Rakuten-sans-ui-bold | 1rem | 600 | 1.15 | 0em | Product pricing, cart totals |

The Rakuten-serif family carries editorial weight for display purposes, while Rakuten-sans and Rakuten-sans-semibold handle functional text at small sizes with maintained legibility. The -apple-system stack serves as a fallback for system-level labels. Trebuchet MS appears in the computed font stack for certain elements.

## Layout

The layout follows a centered content model with generous horizontal margins that create breathing room around product grids and marketing sections. The maximum content width sits at approximately 82rem, with 328px side margins on wider viewports that center the experience without stretching content to screen edges.

Vertical rhythm uses a base unit of 0.125rem (2px), with section spacing typically at 5rem (80px) for major content breaks. Product grids employ a three-column layout on desktop with consistent 16px to 20px gaps between cards. Marketing sections alternate between full-bleed photography and contained text blocks, with the left-side hero image in the "eReader essentials" section occupying roughly half the viewport width while stacked content cards fill the right.

The top navigation spans full width with a white background, containing the Rakuten Kobo logo left-aligned and utility actions (search, cart) right-aligned. A persistent promotional banner in red sits above the navigation, creating immediate brand presence. Below the navigation, category browsing uses a horizontal scroll of thumbnail cards with square product images and centered labels.

## Visual language

Photography dominates the visual experience, with two distinct treatments: clean product photography on white backgrounds for the transactional grid, and warm lifestyle photography with natural lighting for marketing sections. The lifestyle images show eReaders in use—on desks, in hands, with accessories—creating emotional context for the hardware.

Product cards are strictly rectangular with no border radius, maintaining a sharp, modern edge that lets product photography define the form. Shadows are minimal and functional: a subtle outer shadow (0px 3px 6px rgba(0,0,0,0.35)) appears on elevated elements, while cards remain flat against the white canvas. The only rounded elements are pill-shaped badges (999px radius) for "Limited Edition" labels and similar tags.

Iconography is sparse and utilitarian: a filter-and-sort icon precedes text in the control bar, and simple arrows indicate carousel navigation. The visual system avoids decorative elements in favor of product imagery and typographic hierarchy.

## Components

### Product card

- **Anatomy**: Square product image, optional color swatch row, product name, price, and paired action buttons
- **Surface**: White background (#FFFFFF), no border, no shadow in default state
- **Typography**: Product name uses body-bold at 0.8rem; price uses price token at 1rem
- **Shape**: 0rem border radius, sharp corners throughout
- **Spacing**: 16px internal padding, 10px gap between color swatches, 16px gap between name and price
- **Composition**: Centered alignment for all text and interactive elements; image occupies top portion with fixed aspect ratio
- **Variants**: Cards with color swatches show 2-4 small thumbnail squares below the image; "Limited Edition" variant adds a blue pill badge positioned absolute-top-left of the image

### Primary button

- **Anatomy**: Text label centered within rectangular container
- **Surface**: Background #BF0000, text #FFFFFF; no border
- **Typography**: ui token (Rakuten-sans-ui, 1rem, weight 700)
- **Shape**: 0rem border radius, sharp rectangle
- **Spacing**: 10px vertical padding, 25px horizontal padding minimum
- **Composition**: Full-width within card context, or intrinsic width in marketing sections
- **Variants**: "Add To Cart" appears in product cards; "Shop Now" and "Compare Now" appear on marketing imagery; "Buy Now" appears on dark overlay sections

### Secondary button

- **Anatomy**: Text label centered within bordered container
- **Surface**: Transparent background, 1px solid #000000 border, text #000000
- **Typography**: ui-small token (Rakuten-sans-ui-bold, 0.875rem, weight 600)
- **Shape**: 0rem border radius
- **Spacing**: 10px vertical padding, 16px horizontal padding
- **Composition**: Paired with primary button in product cards, positioned left of the red action

### Filter and sort control

- **Anatomy**: Icon plus text label in bordered container
- **Surface**: Transparent background, 1px solid #000000 border
- **Typography**: ui-small token
- **Shape**: 0rem border radius
- **Spacing**: 10px padding all sides
- **Composition**: Left-aligned above product grid, full width on mobile contexts

### Marketing hero card

- **Anatomy**: Full-bleed background image with dark overlay gradient, white text block positioned bottom-left, primary button below text
- **Surface**: Image background with dark overlay for text legibility
- **Typography**: Section title uses section-display (Rakuten-serif, 1.875rem, weight 600, white); description uses body-large (Rakuten-sans-ui, 1.25rem, white)
- **Shape**: 0rem border radius for card container
- **Spacing**: 25px padding between text and card edge, 16px gap between title and description
- **Composition**: Text and button anchored to bottom-left; image fills entire card with object-fit cover behavior

### Testimonial card

- **Anatomy**: Star rating row, verified badge, review title, review excerpt, reviewer name and timestamp
- **Surface**: White background, no border, subtle shadow optional
- **Typography**: Title uses body-bold; excerpt uses body at 0.8rem; metadata uses secondary-ink color at smaller size
- **Shape**: 0rem border radius
- **Spacing**: 16px internal padding, 8px vertical gaps between elements
- **Composition**: Stacked vertical layout with left-aligned text; five green stars precede "Verified" badge in single row

### Promotional banner

- **Anatomy**: Full-width bar with centered text, optional navigation arrows
- **Surface**: Background #BF0000, text #FFFFFF
- **Typography**: ui-small token, centered
- **Shape**: 0rem border radius
- **Spacing**: 10px vertical padding
- **Composition**: Text centered with arrow icons on far edges; may contain inline links with underline

## Responsive behavior

The desktop layout centers content with fixed side margins that scale proportionally. Product grids transition from three columns to fewer as viewport narrows, with cards maintaining their internal proportions. The marketing section with side-by-side hero image and stacked cards likely stacks vertically on smaller viewports, with the large left image becoming full-width above the content cards.

Navigation dropdowns for "eReaders" and "Accessories" suggest a hover-based disclosure pattern on desktop that should convert to touch-friendly accordions or full-screen drawers on mobile. The horizontal accessory category scroll in the navigation area would remain horizontally swipeable on mobile rather than compressing to a grid.

Text sizes should maintain their rem values across breakpoints, with marketing display type potentially scaling down to prevent overflow in narrow viewports. The 328px side margins on wide screens should reduce to 16px-25px minimum on mobile to maximize usable space.

## Practical implementation guidance

### Preserve
- The strict 0rem border radius on cards and buttons; this sharp geometry is central to the system's modern feel
- The red accent (#BF0000) as the sole saturated color; do not introduce additional brand colors
- The serif/sans-serif type pairing that distinguishes marketing from functional content
- The generous whitespace around product grids and between sections
- The paired button pattern (secondary outline + primary filled) in product cards

### Avoid
- Rounded corners on product cards or primary buttons; they contradict the sharp aesthetic
- Gradients as decorative elements; the only gradient should be the functional dark overlay on photography
- Multiple accent colors; the blue badge (#0065BD) is reserved for specific informational labels only
- Drop shadows on cards in default state; keep surfaces flat
- Center-aligned text in product cards; maintain the left/center hybrid alignment

### Recommended build order
1. Establish the color tokens and type scale with the exact family names and weights
2. Build the product card component with image, swatches, text, and paired buttons
3. Implement the grid layout with three-column desktop behavior and proper gap spacing
4. Create the marketing hero card with overlay gradient and anchored text
5. Add the navigation shell with promotional banner, logo, and utility actions
6. Implement the filter control and category thumbnail scroll
7. Add testimonial carousel with star ratings and verified badges

### Accessibility
- Ensure the red promotional banner meets minimum contrast ratios; white text on #BF0000 passes WCAG AA for large text but verify for smaller sizes
- Add visible focus states to all buttons; the current design shows no focus indication
- Provide alt text for all product images that describe the specific product variant and color
- Make color swatches accessible with aria-labels indicating the color name
- Ensure the dark overlay on marketing images achieves at least 4.5:1 contrast for white text
- Add keyboard navigation for the testimonial carousel and category thumbnail scroll

## Scope note

This guide covers the desktop product listing and marketing landing surfaces for the Rakuten Kobo eReader Store. Mobile breakpoints, checkout flows, account pages, and animation behaviors are not represented in the supplied material. The spacing and sizing values reflect exact measurements where available; verify against live implementation before final production use.

## Related design patterns

- [Neutral hue](/share/designs-with-color.hue.neutral)
- [Light mode](/share/designs-with-color.mode.light)
- [Retail and ecommerce](/share/designs-with-industry.retail_ecommerce)
- [Ecommerce store](/share/designs-with-offering.ecommerce_store)
- [Physical product](/share/designs-with-offering.physical_product)
- [Populated state](/share/designs-with-interaction.data_state.populated)
- [Sans serif](/share/designs-with-typography.generic.sans_serif)
- [Solid background](/share/designs-with-visual.background.solid)

## More website design guides

[Browse website design guides by pattern and website](/design-guides).
