# How shop.heavymetal.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/shop.heavymetal.com-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with red Heavy Metal logo, multi-column navigation links, newsletter signup form, and payment method icons on black background](https://pin.fontofweb.com/10013?format=jpg)](https://design.withfudge.com/share/pin-10013)

[Footer section with red Heavy Metal logo, multi-column navigation links, newsletter signup form, and payment method icons on black background](https://design.withfudge.com/share/pin-10013)

[![Product grid section titled HOT NEW STUFF showing four product cards with category labels, titles, and prices on white background](https://pin.fontofweb.com/10012?format=jpg)](https://design.withfudge.com/share/pin-10012)

[Product grid section titled HOT NEW STUFF showing four product cards with category labels, titles, and prices on white background](https://design.withfudge.com/share/pin-10012)

[![Full-width subscription banner with fantasy artwork featuring warrior on flying creature, white text overlay, and SUBSCRIBE NOW button](https://pin.fontofweb.com/10011?format=jpg)](https://design.withfudge.com/share/pin-10011)

[Full-width subscription banner with fantasy artwork featuring warrior on flying creature, white text overlay, and SUBSCRIBE NOW button](https://design.withfudge.com/share/pin-10011)

[![Single product card showing Heavy Metal magazine issue #5 cover with bat-winged warrior illustration, issue label, title, and price](https://pin.fontofweb.com/10010?format=jpg)](https://design.withfudge.com/share/pin-10010)

[Single product card showing Heavy Metal magazine issue #5 cover with bat-winged warrior illustration, issue label, title, and price](https://design.withfudge.com/share/pin-10010)

## Overview

The Heavy Metal shop presents a dramatic visual system built around the magazine's legacy of bold fantasy and science-fiction illustration. The design alternates between immersive, artwork-dominated moments and clean, functional e-commerce surfaces. Full-bleed photographic banners with overlaid white typography create immediate visual impact, while product grids retreat to a neutral white and light-gray palette that keeps attention on cover art and product photography. The footer inverts this relationship entirely, plunging to pure black with white text and a striking red logomark. This oscillation between dark cinematic moments and bright commercial clarity defines the brand's digital presence: unapologetically dramatic where it counts, ruthlessly efficient where commerce happens.

## Colors

The palette operates in two distinct modes: a light commercial mode for browsing and purchasing, and a dark expressive mode for brand moments and the footer.

| token | value | use |
|---|---|---|
| ink | #020202 | Primary text, button backgrounds, header elements |
| ink-muted | #5F5F5F | Secondary text, footer borders, subtle dividers |
| canvas | #F4F4F4 | Product card backgrounds, subtle surface variation |
| surface | #FFFFFF | Page background, input fields, primary buttons |
| surface-warm | #F5F5F5 | Alternate section backgrounds |
| border-light | #EAEAEA | Hairline dividers between sections |
| border-dark | #5F5F5F | Footer top border |
| action | #000000 | Primary button fills, active states |
| action-inverse | #FFFFFF | Button text on dark, hero button backgrounds |

The light mode dominates product browsing: white backgrounds with near-black text maximize readability and let colorful cover art dominate. The dark mode appears in the footer and potentially in hero moments, where black backgrounds make white text and the red Heavy Metal logomark pop with maximum contrast. No gradients or shadows are used in the interface; all depth comes from color contrast and spacing.

## Typography

The system uses Archivo as its primary family, with Regular, Medium (Archivo-500), and Bold weights all drawn from the same typeface. Archivo was designed by Hector Gatti and is distributed by Omnibus Type. The design facts also list Applesystem and Times as detected families, though these appear to be fallback or system fonts rather than actively used in the visible interface. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Archivo | 3.25rem | 700 | 1.1 | -0.05em | Hero banner headlines, subscription CTAs |
| section-display | Archivo | 2.375rem | 700 | 1.1 | -0.05em | Section headings like "HOT NEW STUFF" |
| body | Archivo | 1rem | 400 | 1.3 | 0 | Default body text, descriptions |
| body-small | Archivo | 0.9375rem | 400 | 1.3 | 0 | Product titles, prices, metadata |
| label | Archivo | 0.875rem | 500 | 1.1 | 0 | Category labels, form labels |
| navigation | Archivo | 0.75rem | 400 | 1.3 | 0.04em | Footer links, utility navigation |
| button-primary | Archivo | 0.875rem | 700 | 1.2 | 0.05em | Button text with uppercase treatment |
| legal-copy | Archivo | 0.75rem | 400 | 1.3 | 0 | Copyright, terms, fine print |

Display sizes use tight negative tracking for a compact, aggressive feel appropriate to the Heavy Metal brand. Body text maintains neutral spacing for readability. Button text carries slight positive tracking and uppercase styling for authority. The 16px base with 1.3 line height (20.8px) appears consistently across body elements. The Medium weight (Archivo-500) appears in category labels and product metadata at 14px, while Bold handles all display and button treatments.

## Layout

The layout uses a generous maximum-width container with substantial horizontal padding. Desktop sections employ 80px (5rem) horizontal padding, creating breathing room around content. Section vertical spacing alternates between 32px (2rem) top padding and 100px (6.25rem) bottom padding for most content areas, with some sections using 12px top padding for tighter stacking.

The product grid uses a four-column layout with 24px (1.5rem) gaps between cards. Cards themselves sit on a light gray background with no border radius on the outer container, though product images receive a subtle 4px (0.25rem) radius. The grid is flush to section edges with internal gutters.

The footer breaks from this pattern entirely: full-bleed black background with five columns of navigation links, a newsletter signup form, and payment method icons. Footer internal spacing uses 40px row gaps and flexible column gaps with a minimum of 64px or 3% of container width.

Header navigation appears as a horizontal row with 30px gaps between elements, using 12px horizontal padding on individual nav links to create touch targets without visible button chrome.

## Visual language

The visual language derives directly from magazine publishing traditions: bold display typography, full-bleed artwork, and minimal interface interference. Product photography and cover art are treated as hero elements, surrounded by generous neutral space. The design avoids decorative elements—no shadows, no gradients, no ornamental borders beyond functional hairlines.

Imagery dominates every surface. Subscription banners use full-bleed fantasy illustration with a dark gradient overlay ensuring white text legibility. Product cards float their artwork on light gray with no additional framing. The red Heavy Metal logomark in the footer provides the only brand color intrusion in an otherwise monochrome system.

The tone shifts dramatically between surfaces: cinematic and immersive in banners, clinical and efficient in product grids, stark and authoritative in the footer. This intentional mood whiplash mirrors the magazine's own history of pairing provocative artwork with serious editorial content.

## Components

### Product card

- **Anatomy**: Square aspect ratio image container, category label, product title, price
- **Surface**: Card background uses `{colors.canvas}`; image sits flush or with minimal padding
- **Typography**: Category uses `{typography.label}` in uppercase; title uses `{typography.body-small}`; price uses same size right-aligned
- **Shape**: Images have `{rounded.image}` (4px) radius; cards themselves are unrounded
- **Spacing**: Internal padding minimal; external gap of `{spacing.grid-gap}` (24px) in grid
- **Composition**: Title and price stack vertically below image with tight leading; category sits above or beside title depending on breakpoint

### Primary button

- **Anatomy**: Text label with optional arrow icon, rectangular container
- **Surface**: White background (`{colors.action-inverse}`) with black text, or inverted for dark backgrounds
- **Typography**: `{typography.button-primary}` with uppercase text and 0.7px letter spacing
- **Shape**: Zero border radius; sharp rectangular corners
- **Spacing**: 10px vertical padding, 24px horizontal padding; 4px gap between text and icon
- **Variants**: Light variant for dark backgrounds (white fill, black text); dark variant for light backgrounds (black fill, white text)

### Section header

- **Anatomy**: Left-aligned heading with optional "SHOP ALL" link and arrow navigation on right
- **Typography**: `{typography.section-display}` for heading; button style for action link
- **Surface**: Transparent background over `{colors.surface}` or `{colors.canvas}`
- **Spacing**: 32px bottom padding before content grid; full-width with 80px horizontal padding

### Subscription banner

- **Anatomy**: Full-bleed background image, centered text overlay, CTA button
- **Surface**: Background image with dark gradient overlay; white text
- **Typography**: `{typography.hero-display}` for headline; `{typography.button-primary}` for CTA
- **Shape**: Full viewport width; button uses sharp corners
- **Composition**: Text and button centered vertically and horizontally over image

### Footer

- **Anatomy**: Red logomark, five-column link grid, newsletter form, payment icons, copyright
- **Surface**: Black background (`{colors.ink}`); white text; red logomark
- **Typography**: Column headers use `{typography.label}` uppercase; links use `{typography.navigation}`; newsletter uses `{typography.body-small}`
- **Spacing**: 32px vertical padding on outer container; 40px row gaps between content blocks; 80px horizontal padding
- **Composition**: Five equal columns for navigation; newsletter form spans rightmost column with email input and subscribe button

### Newsletter form

- **Anatomy**: Email input, checkbox with privacy policy link, submit button
- **Surface**: White input field; white submit button with black text and arrow icon
- **Typography**: Input placeholder uses `{typography.legal-copy}`; button uses `{typography.button-primary}`
- **Shape**: Zero radius on all elements
- **Spacing**: Input padding 10px vertical, 16px horizontal; 8px gap between checkbox and label

## Responsive behavior

The product grid collapses from four columns to fewer as viewport narrows, maintaining 24px gutters. Horizontal padding reduces from 80px on desktop to 16px on narrow viewports. The footer navigation stacks from five columns to fewer, potentially becoming a single column with accordions on mobile.

Hero banner text scales down from 52px to maintain proportion; the tight negative tracking on display sizes may need adjustment at small sizes to prevent illegibility. Navigation links in the header collapse to a hamburger menu, though this behavior is not visible in supplied materials.

Button touch targets maintain minimum 44px height through increased padding on smaller viewports. Product card aspect ratios should be preserved across breakpoints to maintain artwork integrity.

## Practical implementation guidance

### Preserve
- The stark black/white contrast in the footer with the single red logomark accent
- Sharp zero-radius corners on all buttons and inputs—no rounded UI elements
- Full-bleed artwork in hero banners with gradient overlays for text legibility
- Generous 80px horizontal padding on desktop containers
- Uppercase button text with slight positive tracking
- The oscillation between dark expressive surfaces and light commercial grids

### Avoid
- Adding border radius to buttons or cards beyond the 4px image radius
- Introducing additional brand colors beyond black, white, and the red logomark
- Using shadows or gradients as decorative elements
- Crowding product cards with additional metadata beyond category, title, and price
- Breaking the single-type-family system with secondary fonts for display

### Recommended build order
1. Establish the 16px base with Archivo family and 1.3 line height
2. Build the product grid with four-column layout and 24px gutters
3. Implement section headers with display typography and shop-all links
4. Create the sharp-cornered button component with icon support
5. Construct the dark footer with five-column grid and newsletter form
6. Add hero banner with overlay gradient and centered CTA

### Accessibility
- Ensure gradient overlays on banners provide sufficient contrast for white text (minimum 4.5:1)
- Add visible focus states to all interactive elements; the zero-radius buttons should receive clear outline or background shift
- Newsletter checkbox requires explicit label association
- Payment method icons need alt text or aria-labels
- Consider reduced-motion preferences for any scroll-triggered animations

## Scope note

This guide covers the homepage and product listing surfaces visible in the supplied images. Product detail pages, checkout flows, cart modals, and account interfaces are not represented. Mobile navigation behavior, hover states, and loading skeletons should be designed to match the established patterns. Measurements are derived from the desktop viewport as captured.
