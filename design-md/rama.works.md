# How rama.works is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/rama.works-design)

Last updated: 2026-08-10

## Captured pages

[![Product detail page showing KARA keyboard with cream background, technical specifications in Urbane Rounded type, and bold section headings with tracked uppercase labels](https://pin.fontofweb.com/7933?format=jpg)](https://design.withfudge.com/share/pin-7933)

[Product detail page showing KARA keyboard with cream background, technical specifications in Urbane Rounded type, and bold section headings with tracked uppercase labels](https://design.withfudge.com/share/pin-7933)

[![Product grid homepage with centered RAMA logo, six product thumbnails on warm cream canvas, and bold tracked labels for accessories and novelties](https://pin.fontofweb.com/7932?format=jpg)](https://design.withfudge.com/share/pin-7932)

[Product grid homepage with centered RAMA logo, six product thumbnails on warm cream canvas, and bold tracked labels for accessories and novelties](https://design.withfudge.com/share/pin-7932)

## Overview

RAMA WORKS presents a design language rooted in product craftsmanship and editorial restraint. The system treats every page as a gallery surface: warm cream backgrounds isolate precision-machined objects, while typography stays small, rounded, and tightly controlled. The visual hierarchy relies on scale contrast between whisper-thin body copy and bold, tracked uppercase labels rather than size alone. This creates a museum-like atmosphere where the products command attention and the interface recedes. The brand identity centers on mechanical keyboards and premium accessories, and the design system reinforces this through material honesty—no decorative gradients, no heavy shadows, no border radii that would soften the industrial precision of the products themselves. The overall impression is of a studio portfolio crossed with a technical specification sheet: beautiful, informative, and deliberately quiet.

## Colors

The palette is severely restrained, built from four exact values that serve distinct roles across the interface.

| token | value | use |
|---|---|---|
| ink | `#000000` | Primary text, headings, navigation, product labels, and all interface typography |
| canvas | `#E7DECF` | Global page background; the warm cream tone that unifies every surface |
| accent | `#EB0000` | Selective emphasis for interactive states, alerts, or brand moments |
| surface | `#FFFFFF` | Content panels, product detail backgrounds, and high-contrast text moments |

The canvas color dominates the experience. It is a warm, desaturated cream with subtle peach undertones that photographs well against both metallic objects and colorful plastics. Ink provides absolute contrast without temperature variation—pure black keeps the focus on product photography. The accent red appears sparingly; in the visible interface it marks emphasis within product descriptions or interactive highlights. White surfaces appear as content containers or inverted text moments, creating necessary breathing room within the warm field. There is no dark mode in the visible system; the brand commits fully to light, airy presentation. Image palettes drawn from product photography introduce teals, yellows, and oranges, but these remain photographic rather than interface colors.

## Typography

Two weights of a single rounded sans-serif family create the entire typographic system. Urbane Rounded supplies the base; Urbanerounded-Bold (a separate family entry) supplies emphasis.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| body | Urbane Rounded | 0.75rem | 400 | 1.8 | 0em | Product descriptions, specifications, running text |
| body-small | Urbane Rounded | 0.675rem | 400 | 2.0 | 0em | Dense technical copy, secondary descriptions |
| label | Urbane Rounded | 0.975rem | 300 | 1.2 | 0.0585em | Section headings, product names, category labels |
| heading-bold | Urbanerounded | 0.975rem | 700 | 1.2 | 0.0585em | Emphasized headings, feature callouts, strong labels |
| nav | Urbanerounded | 0.75rem | 700 | 1.6 | 0.0833em | Navigation links, utility text, follow buttons |
| logo-label | Urbanerounded | 0.75rem | 700 | 1.6 | 0.0833em | Logo lockup labels, brand utility text |

The rounded letterforms soften the technical subject matter without becoming playful. Tracking is generous for labels and headings—approximately 0.06em to 0.08em—creating spaced, almost machined regularity that echoes the precision of the products. Body copy runs at a comfortable 1.8 line height with zero tracking, allowing dense technical information to remain readable. The weight contrast between Regular 400 and Bold 700 is stark; there is no intermediate weight in use. Font sizes cluster tightly: 10.8px, 12px, and 15.6px dominate, with the 15.6px size serving both light labels and bold headings depending on family choice. Verify licensing for these families before production use.

## Layout

The layout philosophy centers on centered, single-column presentation with generous vertical rhythm. Content blocks float within wide margins, creating a scroll that feels like turning pages in a lookbook.

The global spacing system derives from a 2px relative unit. Key measurements include 7.8px for tight internal gaps, 10px and 10.8px for paragraph margins, 15.6px for heading margins, 17px for container padding, 20px for header spacing, 75px for major section padding, and 345.5px for horizontal content margins that create the centered, narrow reading experience.

Pages are built from stacked horizontal bands. The product grid in the homepage image shows a centered logo lockup followed by a six-item grid: three columns, two rows, with substantial vertical gaps between rows and the logo area. Each product occupies its own centered cell with thumbnail above and bold tracked label below. The product detail page reverses this density: a single hero image dominates the upper viewport, followed by a narrow text column with generous top padding. Text blocks measure roughly 60-70 characters per line, comfortable for extended reading.

All containers maintain rectilinear precision with 0rem border radii, matching the mechanical exactness of the products. Shadows are absent; depth comes solely from photography and spatial arrangement. The grid is implicit rather than visibly bounded, with products seeming to hover in calculated isolation.

## Visual language

The visual language communicates precision manufacturing through restraint. Every element earns its place; nothing decorative survives.

Photography dominates the experience. Products are shot on neutral or matching cream backgrounds, often with soft shadows that ground objects without theatricality. The keyboard product image shows per-switch RGB lighting as the only color intrusion, and even that is presented as a technical feature rather than spectacle. Accessory photography maintains the same clinical clarity: the XO lighter, Hotshoe Seq2, Kamo figure, Bat tool, NFC card, and Duck Switch all appear as isolated studio objects with consistent lighting angles and scale.

The RAMA WORKS logomark is a compact geometric monogram—two stacked square forms containing stylized letterforms—rendered in black against the cream canvas. It appears centered, small, and quiet, with a "FOLLOW" label beneath in tracked bold uppercase. This lockup establishes the brand voice: confident without shouting.

Negative space is a material in itself. The 75px section padding creates cavernous gaps between content zones. Even within text blocks, paragraph margins of 10.8px and heading margins of 15.6px maintain airiness. The result is a reading pace that feels deliberate, almost ceremonial.

## Components

### Product card

Product cards form the primary browsing unit on the homepage grid.

- **Anatomy**: Centered product thumbnail above, bold tracked label below. No price, no description, no hover state visible.
- **Surface**: Transparent; the card inherits the global canvas background.
- **Typography**: Product name uses `{typography.label}` in uppercase with 0.0585em tracking.
- **Shape**: 0rem border radius; no border, no shadow.
- **Spacing**: Thumbnail and label are separated by substantial vertical space; exact measurement adapts to thumbnail aspect ratio.
- **Composition**: Thumbnail centered horizontally; label centered beneath. The grid maintains equal column widths with gutters that feel generous.
- **Variants**: Six visible variants across two categories—tools/accessories (XO Lighter, Hotshoe Seq2, Bat, NFC Cards, Duck Switch) and novelties (Kamo).

### Product detail

The product detail component presents a single product with technical depth.

- **Anatomy**: Hero product image, followed by descriptive paragraph, then bold section heading with technical paragraph beneath.
- **Surface**: Inherits canvas background; no panel or card container.
- **Typography**: Description uses `{typography.body}` at 0.75rem with 1.8 line height. Section heading uses `{typography.heading-bold}` in uppercase with tight tracking. The heading "SOLDERLESS & PER SWITCH RGB" demonstrates the pattern: bold, tracked, functional.
- **Shape**: 0rem border radius; no containing borders.
- **Spacing**: Hero image has substantial bottom margin before text begins. Paragraph spacing follows the 10.8px/15.6px system. The text block is narrow and centered.
- **Composition**: Single column, centered, with the product image acting as a visual anchor that breaks the vertical rhythm.

### Navigation

Navigation appears minimal in the visible interface.

- **Anatomy**: Text links in tracked bold uppercase.
- **Typography**: `{typography.nav}` with 0.0833em tracking.
- **Surface**: Transparent background, ink text color.
- **Shape**: 0rem border radius.
- **Composition**: Horizontal arrangement with generous spacing between items.

### Logo lockup

- **Anatomy**: Geometric monogram mark above, "FOLLOW" label below.
- **Typography**: Label uses `{typography.logo-label}` with 0.0833em tracking.
- **Shape**: 0rem border radius.
- **Composition**: Centered, with substantial vertical padding above and below (75px visible in one context).

## Responsive behavior

The visible interface shows a desktop presentation. The centered content margins of 345.5px suggest a narrow content well that would require adaptation for smaller viewports. At reduced widths, the three-column product grid should collapse to two columns and then single column, maintaining centered thumbnails and labels. The product detail text column should expand to use comfortable side margins rather than fixed centering. Font sizes may require slight reduction on small screens, though the already-small 12px base risks legibility limits; consider a minimum 16px touch target for navigation and a slightly enlarged body size for mobile reading. The generous section padding of 75px should compress proportionally, perhaps to 40px on tablet and 24px on mobile, preserving the airy character without excessive scrolling.

## Practical implementation guidance

### Preserve
- The warm cream canvas as the dominant background; it is the brand's signature atmosphere.
- The tight cluster of font sizes—10.8px, 12px, 15.6px—with bold tracking on labels rather than size increase.
- The absolute absence of border radii; maintain rectilinear precision throughout.
- Centered, narrow text columns with generous horizontal margins.
- Studio-product photography with neutral backgrounds and consistent lighting.

### Avoid
- Decorative shadows, gradients, or borders that would compete with product photography.
- Expanding the type scale; the restraint is intentional and distinctive.
- Card containers or panel backgrounds that would fragment the continuous canvas.
- Multiple accent colors; the red is sufficient and rare.

### Recommended build order
1. Establish the global canvas background and ink text color.
2. Load Urbane Rounded Regular and Urbanerounded Bold with correct weights.
3. Build the product grid with centered thumbnails and tracked bold labels.
4. Implement the product detail page with hero image and narrow text column.
5. Add the logo lockup with correct centered spacing.
6. Fine-tune tracking values for labels and navigation.

### Accessibility
- The 10.8px body-small size falls below common accessibility recommendations; ensure user zoom is fully supported and consider a minimum 12px rendered size for essential content.
- The cream-on-black and black-on-cream pairings provide strong contrast, but the light weight 300 label text may need verification against WCAG guidelines; consider 400 weight if contrast is insufficient.
- Generous line height (1.8) aids readability for dense technical content.
- Ensure product images have descriptive alt text, as the minimal interface provides little surrounding context.

## Scope note

This guide covers the homepage product grid and product detail page surfaces visible in the supplied images. Footer content, checkout flows, mobile navigation, animation, hover states, and dark mode variants are not represented. The spacing values reflect exact measurements from the captured interface; implement with the same relative unit precision.
