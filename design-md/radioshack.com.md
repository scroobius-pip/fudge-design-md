# How radioshack.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/radioshack.com-design)

Last updated: 2026-08-10

## Captured pages

[![Footer with newsletter subscription card, social icons, payment methods, and dark legal bar on light gray background](https://pin.fontofweb.com/4670?format=jpg)](https://design.withfudge.com/share/pin-4670)

[Footer with newsletter subscription card, social icons, payment methods, and dark legal bar on light gray background](https://design.withfudge.com/share/pin-4670)

[![Product recommendation carousel with red add-to-cart buttons, heart icons, and pagination dots on white background](https://pin.fontofweb.com/4669?format=jpg)](https://design.withfudge.com/share/pin-4669)

[Product recommendation carousel with red add-to-cart buttons, heart icons, and pagination dots on white background](https://design.withfudge.com/share/pin-4669)

[![Promotional banner with gray rounded panel, travel backpacks, and discount badges above product grid with red CTAs](https://pin.fontofweb.com/4668?format=jpg)](https://design.withfudge.com/share/pin-4668)

[Promotional banner with gray rounded panel, travel backpacks, and discount badges above product grid with red CTAs](https://design.withfudge.com/share/pin-4668)

[![Homepage hero with promotional tiles, category navigation modal overlay, and large red featured-products heading](https://pin.fontofweb.com/4667?format=jpg)](https://design.withfudge.com/share/pin-4667)

[Homepage hero with promotional tiles, category navigation modal overlay, and large red featured-products heading](https://design.withfudge.com/share/pin-4667)

## Overview

RadioShack's retail interface combines a bold, energetic red with restrained neutral surfaces to create a system that feels both approachable and technically credible. The design centers on product discovery through clean grid layouts, prominent promotional banners, and consistent red call-to-action elements that guide shoppers toward purchase decisions. The visual hierarchy relies on scale contrast between large display typography for section headings and compact, information-dense product cards. The system balances the brand's heritage recognition with contemporary e-commerce patterns, using rounded corners on interactive elements to soften the technical product photography while maintaining structural clarity through consistent alignment and spacing.

## Colors

The color system is built around a single energetic red accent against a neutral foundation, with careful attention to functional contrast for readability and actionability.

| token | value | use |
|---|---|---|
| action | #E84A2C | Primary buttons, add-to-cart CTAs, discount badges, newsletter card backgrounds, heart icons |
| action-hover | #D13D20 | Hover state for all action surfaces |
| ink | #1A1A1A | Primary text, headings, product titles, footer navigation headings |
| muted-ink | #555555 | Secondary text, crossed-out original prices, placeholder text |
| canvas | #FFFFFF | Page background, product card surfaces, modal content area |
| surface | #F5F5F5 | Footer background, subtle section alternation |
| surface-promo | #E8E8E8 | Large promotional banner panels |
| border | #DDDDDD | Input field borders, subtle dividers |
| border-light | #EEEEEE | Hairline separators, icon button borders |
| footer-legal | #2A2A2A | Bottom legal bar background |

The red action color dominates interactive moments: every add-to-cart button, percentage-off badge, and the newsletter subscription card share this hue, creating strong visual momentum toward conversion. The neutral ink and canvas pairing ensures product photography remains the focal point without chromatic competition. Dark surfaces appear only in the footer legal bar, grounding the page with a stable finish. The promotional banner introduces a warm gray surface that distinguishes editorial content from the product grid while maintaining the overall light atmosphere.

## Typography

The type system pairs a geometric sans-serif for display and pricing with a humanist sans-serif for body text and navigation, creating functional distinction between brand moments and readable content. The supplied font families are Gotham Pro, Source Sans 3, Nunito, and My Font. Gotham Pro handles all display and pricing moments with its geometric precision, conveying technical confidence. Source Sans 3, designed by Adobe, provides excellent screen readability for body content and navigation. Nunito, designed by Vernon Adams, may serve specific accent moments. My Font is present in the source files and available for potential use in display or specialty contexts. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Gotham Pro | 4rem | 700 | 1 | -0.02em | Large promotional headings, featured section titles |
| section-display | Gotham Pro | 2rem | 700 | 1.1 | -0.01em | Section headings, modal titles |
| body | Source Sans 3 | 1rem | 400 | 1.5 | 0 | Product descriptions, footer links, general content |
| body-bold | Source Sans 3 | 1rem | 700 | 1.5 | 0 | Emphasized body text, active navigation |
| label | Source Sans 3 | 0.875rem | 700 | 1.25 | 0.02em | Discount badges, category labels, form labels |
| price | Gotham Pro | 1.125rem | 700 | 1.2 | 0 | Current product prices |
| price-original | Source Sans 3 | 0.875rem | 400 | 1.2 | 0 | Strikethrough original prices |
| navigation | Source Sans 3 | 0.875rem | 400 | 1.25 | 0 | Main navigation, footer category links |
| button | Source Sans 3 | 0.875rem | 700 | 1 | 0.04em | Button labels, uppercase treatment |
| legal | Source Sans 3 | 0.75rem | 400 | 1.5 | 0 | Copyright, legal links, fine print |

The button typography uses slight positive tracking for clarity at small sizes and uppercase transformation. The price token uses Gotham Pro to create visual separation from descriptive text, reinforcing the commercial hierarchy within each product card.

## Layout

The layout follows a centered container model with generous horizontal padding, creating breathing room around dense product grids. The maximum content width appears to be approximately 1200px, with consistent side margins that adapt to viewport size.

The header contains a logo lockup with circular "R" mark and wordmark, a prominent search bar with rounded input and magnifying glass icon, utility navigation for account and cart, and a full-width category navigation bar below. The category bar uses a hamburger-triggered "Categories" button with red background, followed by text links for major departments.

Below the header, the homepage presents a grid of promotional tiles in varying aspect ratios—some spanning half width, others full width—creating visual rhythm through size variation. These tiles contain overlaid text and call-to-action buttons, with photography filling the background.

Product grids use a six-column layout on desktop with consistent card sizing. Each card contains product image, price block, title, action button, and wishlist/compare icons. Horizontal carousels for recommendations show six visible items with circular navigation arrows at the edges and dot pagination below.

The footer organizes into a four-column link grid: brand column with logo, About Us links, Customer Service links, and social follow column. A prominent newsletter subscription card occupies the right portion with email input and subscribe button. Below, a dark legal bar spans full width with centered policy links and payment method icons.

Spacing between major sections uses 4rem as a baseline, with tighter 1.5rem gaps between related elements within a section. Card internal padding maintains 1.5rem for comfortable touch targets and visual separation.

## Visual language

The visual language communicates accessible technology retail through rounded, friendly surfaces paired with confident typographic scale. Corner radii are consistently applied: 1rem for large promotional panels, 0.75rem for product cards, 0.5rem for buttons and inputs, and 0.25rem for small badges. This progression creates tactile hierarchy from container to element.

Product photography appears on clean white backgrounds within cards, allowing the actual products to pop without environmental distraction. Promotional tiles break this pattern with full-bleed lifestyle photography, creating editorial contrast against the catalog grid.

Iconography uses simple line-style hearts for wishlist, bar charts for compare, and filled social brand icons for external links. The heart icon appears in both outline and filled states, with the filled state using the action red.

The promotional banner for "Before your Business Trip" demonstrates the system's approach to editorial content: a soft gray rounded panel with left-aligned text and right-aligned product photography, maintaining the grid's rounded language while introducing a calmer surface for narrative content.

## Components

### Primary Button

- **Anatomy**: Text label with optional leading icon (plus sign for add-to-cart, arrow for shop-now)
- **Surface**: Solid action red background (#E84A2C) with white text
- **Typography**: button token, uppercase, bold weight with positive tracking
- **Shape**: 0.5rem border radius, generous horizontal padding (1.5rem), comfortable vertical padding (0.75rem)
- **Spacing**: Full width within product cards, intrinsic width in promotional contexts
- **Variants**: Newsletter subscribe button uses same styling on dark surface; modal category buttons stack vertically with full width

### Product Card

- **Anatomy**: Product image, price block (current price bold, original price struck through), product title, add-to-cart button, wishlist and compare icon row
- **Surface**: White background, no visible border, subtle shadow optional
- **Typography**: price token for current amount, price-original for crossed-out value, body token for title
- **Shape**: 0.75rem border radius on card container
- **Spacing**: 1.5rem internal padding, consistent image-to-text spacing
- **Composition**: Vertical stack with image top, text and actions below
- **States**: "Out of stock" replaces button with plain text in muted-ink

### Discount Badge

- **Anatomy**: Percentage text with "OFF" suffix
- **Surface**: Solid action red, white text
- **Typography**: label token, bold weight
- **Shape**: 0.25rem border radius, compact padding (0.25rem vertical, 0.75rem horizontal)
- **Position**: Overlaid on product image, top-left corner

### Promotional Banner

- **Anatomy**: Heading text, optional subheading, call-to-action button, product photography
- **Surface**: Warm gray (#E8E8E8) rounded panel
- **Typography**: section-display for headline, body for description, button for CTA
- **Shape**: 1rem border radius, large internal padding (2rem)
- **Composition**: Asymmetric two-column layout with text left, photography right

### Newsletter Card

- **Anatomy**: Heading, description text, email input field, subscribe button
- **Surface**: Solid action red background, white text and input
- **Typography**: section-display for heading, body for description, button for subscribe action
- **Shape**: 1rem border radius, 1.5rem internal padding
- **Composition**: Vertical stack with input and button in horizontal row at bottom
- **Input styling**: White background, rounded corners, placeholder text in muted tone

### Modal Overlay

- **Anatomy**: Centered card with close button, heading, description, stacked category buttons
- **Surface**: White card on dark scrim overlay
- **Typography**: section-display for heading, body for description, button for category options
- **Shape**: 1rem border radius on card, full-width buttons with 0.5rem radius
- **Composition**: Centered modal with generous padding, close button top-right

### Footer

- **Anatomy**: Four-column link grid, newsletter card, social icon row, dark legal bar
- **Surface**: Light gray (#F5F5F5) main area, dark (#2A2A2A) legal bar
- **Typography**: navigation for links, label for column headings, legal for copyright
- **Composition**: Asymmetric grid with newsletter card spanning right portion, social icons in horizontal row, payment methods centered in legal bar

## Responsive behavior

The design should maintain single-column stacking for product grids on narrow viewports, transitioning to two-column, then four-column, then six-column as space permits. The promotional banner should stack text above photography vertically on mobile, preserving the rounded panel container.

Navigation should collapse to a hamburger menu on smaller screens, with the category bar becoming a slide-out or dropdown panel. The footer should stack columns vertically on mobile, with the newsletter card moving to full width below link sections.

Touch targets should maintain minimum 44px height for all interactive elements. Button labels should remain readable without scaling down; consider horizontal padding reduction rather than font size decrease.

The modal overlay should adapt to full-screen or near-full-screen on mobile devices, with close button remaining accessible at top-right.

## Practical implementation guidance

### Preserve
- The bold red action color for all primary conversion points; this consistency drives visual momentum
- Rounded corner progression from large panels (1rem) to small badges (0.25rem)
- White product card surfaces against light gray section backgrounds for depth without heaviness
- Gotham Pro for pricing and display moments to maintain technical retail credibility
- Generous button padding with uppercase bold labels for confident clickability

### Avoid
- Introducing additional accent colors that compete with the established red action system
- Sharp corners on interactive elements; the rounded language is central to the approachable tone
- Dark backgrounds outside the footer legal bar; the system depends on light, airy surfaces
- Reducing product image size below clear recognizability; the grid relies on visual scanning

### Recommended Build Order
1. Establish color tokens and type scale with Source Sans 3 and Gotham Pro
2. Build primary button component with icon support and full-width variant
3. Create product card with price block, title truncation, and action row
4. Implement promotional banner with asymmetric layout and responsive stacking
5. Construct footer with link grid, newsletter card, and legal bar
6. Add discount badge and carousel navigation patterns
7. Polish with modal overlay and micro-interactions

### Accessibility
- Ensure red action buttons maintain 3:1 contrast against white backgrounds; the current red appears sufficient but verify
- Provide visible focus indicators on all interactive elements, using outline or offset ring
- Add aria-labels to icon-only buttons (wishlist, compare, social links)
- Support keyboard navigation through product carousels with visible focus states
- Consider reduced-motion preferences for any carousel auto-advance
- Ensure placeholder text in search and email inputs does not substitute for visible labels

## Scope note

This guide covers the homepage, product recommendation carousel, promotional banner, and footer surfaces visible in the supplied images. Category pages, product detail pages, checkout flow, search results, and account interfaces are not represented. Measurements are practical adaptation targets. Mobile breakpoints, hover states, loading skeletons, and form validation styling require additional exploration.
