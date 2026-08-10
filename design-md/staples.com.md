# How staples.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/staples.com-design)

Last updated: 2026-08-10

## Captured pages

[![Staples homepage with red promotional hero banner featuring 'easy DEAL DAYS' display typography, product grid with pricing, and red header with search bar and navigation](https://pin.fontofweb.com/9816?format=jpg)](https://design.withfudge.com/share/pin-9816)

[Staples homepage with red promotional hero banner featuring 'easy DEAL DAYS' display typography, product grid with pricing, and red header with search bar and navigation](https://design.withfudge.com/share/pin-9816)

[![Staples homepage showing full layout with top promotional ticker, red header with store pickup and search, navigation menu, and product deal cards with percentage savings](https://pin.fontofweb.com/9815?format=jpg)](https://design.withfudge.com/share/pin-9815)

[Staples homepage showing full layout with top promotional ticker, red header with store pickup and search, navigation menu, and product deal cards with percentage savings](https://design.withfudge.com/share/pin-9815)

## Overview

Staples.com presents a retail experience built around immediate visual impact and functional clarity. The design system centers on a signature red that dominates promotional moments while supporting black and white maintain everyday usability. The homepage opens with a massive promotional hero that uses oversized, tightly-tracked display type to announce sales events, followed by dense product grids that surface deals and member rewards. The header remains consistently red, housing search, account access, and category navigation in a single compressed band. This creates a hierarchy where promotional urgency sits at the top, commerce flows through the middle, and utility anchors the periphery. The overall impression is of a system optimized for conversion: bold when it needs to capture attention, restrained when it needs to let products speak.

## Colors

The Staples palette is built on a foundation of high-contrast neutrals with a dominant red accent system for promotional energy.

| token | value | use |
|---|---|---|
| action | #CC0000 | Primary brand red; header background, promotional banners, deal badges, price highlights |
| action-deep | #AE0011 | Darker red for gradient endpoints and hover states |
| action-bright | #E31734 | Bright red for gradient starts and emphasis moments |
| ink | #000000 | Primary text, navigation labels, product titles |
| muted-ink | #757575 | Secondary text, strikethrough prices, disclaimers |
| canvas | #FFFFFF | Page background, card surfaces, text on red |
| surface | #F3F3F3 | Subtle section backgrounds, input fields |

The red system operates across three values that create depth in promotional materials. The header uses solid action red as a persistent brand signal. Hero banners employ a radial gradient from action-bright to action-deep, creating dimensional energy behind white display text. Product cards and deal modules use action red for percentage badges and savings callouts, ensuring promotional language pops against white or photographic backgrounds. Black ink handles all standard reading text, while muted-ink serves strikethrough comparison pricing and legal disclaimers. The near-white surface tone appears in search inputs and subtle container backgrounds, keeping the interface from feeling sterile without introducing competing color.

## Typography

Staples employs multiple type systems: Staples Norms Pro for display and promotional moments, By Rodrigo Saiani and By Rodrigo Saiani-2020 for interface text and body content, Motiva Sans for labels and navigation, and Nunito Sans for specific UI elements. Staples Norms Pro appears in Normal, Bold, and 950 (ExtraBlack) weights for headlines, with dramatic size contrast between hero treatments and section labels. Staples Norms Pro-950 and Staples Norms Pro-Normal are the specific weight variants used in the source. The interface type stays small and efficient, with most navigation and body text at 13px to maximize information density.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Staples Norms Pro | 8.125rem | 950 | 0.8 | -0.02em | Hero banner headlines, event titles |
| section-display | Staples Norms Pro | 6.25rem | 700 | 0.8 | -0.02em | Large promotional numerals, percentage displays |
| promo-headline | Staples Norms Pro | 2.75rem | 950 | 0.9 | -0.02em | Section headers, deal category titles |
| body | By Rodrigo Saiani | 0.8125rem | 400 | 1.5 | 0em | Product descriptions, standard body text |
| body-large | By Rodrigo Saiani | 1rem | 400 | 1.5 | 0.01em | Header utility text, expanded descriptions |
| label | Motiva Sans | 0.8125rem | 500 | 1.2 | 0em | Navigation items, category labels |
| label-large | Motiva Sans | 0.875rem | 500 | 1.2 | 0em | Header links, secondary navigation |
| price | Motiva Sans | 1.5rem | 900 | 1.25 | 0em | Current prices, deal amounts |
| price-small | Motiva Sans | 0.625rem | 300 | 1.2 | 0em | Strikethrough original prices, unit pricing |
| navigation | By Rodrigo Saiani | 0.75rem | 500 | 1.33 | 0em | Top nav, account menu, utility links |
| button | By Rodrigo Saiani | 0.8125rem | 400 | 1 | 0em | CTA buttons, form actions |

Staples Norms Pro, designed by Type Type, delivers the brand's voice in promotional moments through extreme weights and tight negative tracking. By Rodrigo Saiani (also known as Motiva Sans), designed by Rodrigo Saiani and available from Plau, handles the functional layer with clean, readable forms at small sizes. By Rodrigo Saiani-2020 is the specific variant file serving this role in the source. Motiva Sans in Black and Medium weights appears for price emphasis and navigation hierarchy. Nunito Sans appears in button contexts at 12px. Verify licensing for these families before production use.

## Layout

The Staples layout follows a full-width, edge-to-edge approach for promotional content with contained product grids below. The header spans the viewport width with internal padding of 12px vertical and 24px horizontal, creating a generous but not oversized utility band. Below the header, a promotional ticker runs the full width with three evenly distributed offers separated by vertical dividers.

The hero banner occupies the full content width with substantial internal padding, centering its massive display type and call-to-action button. A radial gradient background fills this container, with content positioned to leave breathing room around the oversized typography. Below the hero, the product grid uses a multi-column layout with cards of varying widths—some spanning full promotional blocks, others forming 2×2 product mini-grids, and featured items occupying intermediate widths.

Spacing follows a tight system appropriate to information-dense retail. The base unit is 2px, with standard increments building to 8px, 12px, 16px, 20px, 24px, and 40px for component internal spacing. Section margins use 144px horizontal gutters on large screens, creating centered content islands within the full-width promotional bands. Card padding sits at 20px, while buttons receive 10px vertical and 28px horizontal padding for substantial click targets without excessive bulk.

## Visual language

The Staples visual language communicates retail urgency through scale contrast and color saturation. Promotional moments explode beyond normal type bounds—hero headlines at 130px dwarf surrounding interface text at 13px, creating a 10:1 scale ratio that forces attention to sales messaging. This hierarchy mirrors the in-store experience of walking past large window displays into organized aisles.

Photography treatment favors clean product shots on white or contextual lifestyle backgrounds. Deal cards show products with minimal shadow, letting the red price text and percentage badges provide the visual excitement. Promotional blocks like the "40% BACK" ink and toner feature use illustrated product composites with bold graphic overlays, blending photography with flat color shapes.

The red gradient system adds motion and depth to otherwise flat promotional surfaces. The radial gradient, emanating from the left-center of hero banners, creates a spotlight effect that draws the eye toward the headline before settling on the call-to-action. Decorative elements like outlined stars scatter across promotional backgrounds, adding playful energy without competing with the primary message.

Iconography stays minimal and functional—cart, account, and search icons in the header use simple line weights that read clearly at small sizes. The overall aesthetic balances corporate reliability with promotional excitement: trustworthy enough for business supply purchasing, energetic enough to drive impulse deal shopping.

## Components

### Header

The header is a persistent red band containing brand identity, store pickup status, search, account tools, and primary navigation.

- **Anatomy**: Logo left, store pickup pill, centered search input, account/orders/cart utilities right, full navigation bar below
- **Surface**: Solid action red background (#CC0000)
- **Typography**: Navigation uses label token in white; utility links use body-large in white or black depending on background context
- **Shape**: Search input uses rounded corners at 28px (pill shape); store pickup uses rounded container
- **Spacing**: 12px vertical padding, 24px horizontal padding in main bar; 8px-16px in navigation items
- **Composition**: Flex row with space-between alignment; navigation wraps to second row with border-top separation

### Hero Banner

The primary promotional vehicle, occupying full content width with oversized display typography.

- **Anatomy**: Background gradient container, decorative star illustrations, headline text, subheadline, pill-shaped CTA button
- **Surface**: Radial gradient from action-bright (#E31734) to action-deep (#AE0011)
- **Typography**: hero-display for main headline in white; body-large for subheadline in white; button for CTA in black on white
- **Shape**: Full-width rectangle with no border radius; internal pill button at 28px radius
- **Spacing**: Generous internal padding, approximately 40px top and substantial bottom clearance
- **Composition**: Centered text alignment with decorative elements offset to edges; CTA centered below text block

### Product Card

Standard commerce cards appearing in grids and featured positions.

- **Anatomy**: Product image, price block (current price, original strikethrough), product title, optional deal badge
- **Surface**: White background; no visible border; subtle shadow not present in supplied images
- **Typography**: price for current amount in action red; price-small for original in muted-ink with strikethrough; body for product name in ink
- **Shape**: 16px border radius
- **Spacing**: 20px internal padding; 16px horizontal gutters between cards
- **Composition**: Vertical stack with image top, text below; price and title left-aligned

### Deal Badge

Circular promotional indicator for percentage savings.

- **Anatomy**: Circular container with percentage text, optional descriptive label below
- **Surface**: Solid action red background, white text
- **Typography**: section-display for percentage numerals; body-small for descriptive text
- **Shape**: Full circle (50% border-radius)
- **Spacing**: Internal padding to center content; overlaps photographic content in promotional blocks

### Promotional Block

Larger feature cards combining photography with bold graphic overlays.

- **Anatomy**: Background image or illustration, oversized text overlay, circular deal badge, descriptive copy
- **Surface**: Photographic or illustrated background; text in white or action red depending on background contrast
- **Typography**: promo-headline for main message; body for supporting copy
- **Shape**: 16px border radius; full-bleed internal imagery
- **Composition**: Text positioned to avoid visual conflict with image subjects; badges positioned for maximum visibility

### Search Input

Primary discovery tool in the header.

- **Anatomy**: Text input field with placeholder, search icon button
- **Surface**: White background; no visible border in supplied images
- **Typography**: body-large for placeholder and input text
- **Shape**: 28px border radius (full pill)
- **Spacing**: Generous horizontal padding; fills available width between header elements

## Responsive behavior

The supplied images show a single desktop viewport. Based on the visible layout patterns, several responsive adaptations should be considered for implementation.

The header navigation, which shows eight category items plus branded destinations (Easy Rewards, Party City) in a single row, will require horizontal scrolling or hamburger consolidation at narrower widths. The search input, currently filling substantial center space, should remain prominent but may need to collapse to an icon-triggered overlay on small screens.

The hero banner's 130px display type will require dramatic scaling down—potentially to 44px or 20px as seen in secondary headline tokens—to maintain readability without excessive line breaks. The decorative star elements should scale proportionally or hide below certain breakpoints to prevent visual clutter.

The product grid, showing mixed card widths (full promotional blocks, 2×2 grids, featured singles), should stack to single-column cards on mobile with consistent 16px gutters. Price and title information must remain legible without horizontal truncation.

The top promotional ticker, with three evenly distributed offers, should stack vertically on narrow screens or convert to a rotating carousel to prevent text compression.

## Practical implementation guidance

### Preserve
- The extreme scale contrast between 130px hero type and 13px body text; this is central to Staples' promotional voice
- The full red header with white navigation; this persistent brand signal should not be diluted
- The radial gradient hero treatment; flat red loses the dimensional energy visible in the source
- The tight tracking on Staples Norms Pro display weights; loosening destroys the compact, powerful headline shapes
- The pill-shaped search input and CTA buttons; these soft shapes contrast with the angular display type

### Avoid
- Generic sans-serif substitutions for Staples Norms Pro; the extreme 950 weight is essential to the promotional character
- Adding borders or shadows to product cards; the clean, flat separation is intentional
- Using action red for large text blocks; reserve it for backgrounds, badges, and price highlights
- Centering body text; the source uses left-aligned text throughout for scannable retail density
- Excessive vertical spacing between product grid items; the source keeps information tight and browsable

### Recommended Build Order
1. Establish the color tokens and apply action red to a full-width header
2. Implement Staples Norms Pro with hero-display and promo-headline tokens
3. Build the search input with pill shape and centered header placement
4. Create the hero banner with radial gradient and decorative elements
5. Develop product card components with price treatment and 16px radius
6. Assemble the promotional grid with mixed card widths
7. Add navigation and utility text with By Rodrigo Saiani at functional sizes

### Accessibility
- Ensure white text on red backgrounds meets WCAG contrast requirements; the action red against white passes for large text but should be verified for small UI elements
- Provide text alternatives for percentage savings communicated visually through deal badges
- Maintain keyboard focus visibility on pill-shaped buttons; the rounded form can clip standard outlines
- Consider reduced-motion preferences for any carousel or ticker behavior in the promotional header
- Ensure search functionality remains operable when scaled down for mobile viewports

## Scope note

This guide covers the Staples.com homepage promotional and product grid surfaces visible in the supplied desktop viewport images. Mobile breakpoints, checkout flows, account dashboards, product detail pages, and interactive states including hover, focus, and loading are not represented. Motion behavior for carousels, dropdown navigation, and promotional tickers is not documented.
