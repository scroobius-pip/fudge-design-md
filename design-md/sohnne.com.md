# How sohnne.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/sohnne.com-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with cream modular sofa, marble coffee table, and Spring Into Style 40% Off Storewide promotion with Best Sellers product grid below](https://pin.fontofweb.com/8805?format=jpg)](https://design.withfudge.com/share/pin-8805)

[Homepage hero with cream modular sofa, marble coffee table, and Spring Into Style 40% Off Storewide promotion with Best Sellers product grid below](https://design.withfudge.com/share/pin-8805)

[![Product detail The Finer Dimensions tab showing technical line drawings of the Ball Chair with measurements and shipping specifications](https://pin.fontofweb.com/8804?format=jpg)](https://design.withfudge.com/share/pin-8804)

[Product detail The Finer Dimensions tab showing technical line drawings of the Ball Chair with measurements and shipping specifications](https://design.withfudge.com/share/pin-8804)

[![Product page for The Ball Chair with red upholstery variant, color swatches, pricing, Add to Cart button, delivery timeline, and Our Promises panel](https://pin.fontofweb.com/8803?format=jpg)](https://design.withfudge.com/share/pin-8803)

[Product page for The Ball Chair with red upholstery variant, color swatches, pricing, Add to Cart button, delivery timeline, and Our Promises panel](https://design.withfudge.com/share/pin-8803)

## Overview

Sohnne presents mid-century modern furniture through a restrained, gallery-like digital experience. The design system pairs editorial serif typography with utilitarian sans-serif body text, creating a tension between sophistication and accessibility that mirrors the brand's positioning of iconic design within reach. The visual language is built on generous white space, high-contrast product photography, and a near-monochromatic palette that lets furniture forms speak for themselves. Every surface feels intentional: promotional banners sit in stark black, product pages organize complex purchase decisions into calm, scannable panels, and the homepage hero immerses visitors in aspirational interior photography before grounding them with clear category navigation. The system serves two distinct modes—editorial discovery and transactional efficiency—without visual conflict.

## Colors

The palette is deliberately austere, using black, white, and warm neutrals to create a museum-quality backdrop for colorful product photography. Color is deployed semantically rather than decoratively.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, active navigation, primary button fill, footer backgrounds |
| ink-secondary | #555555 | Secondary text, inactive tab labels, muted metadata |
| ink-tertiary | #616161 | Tertiary information, disabled states, subtle captions |
| surface | #FFFFFF | Page background, card surfaces, button text on dark |
| surface-warm | #F5FCFF | Information panels, promotional callout backgrounds, subtle highlight areas |
| border | #DDDDDD | Default dividers, panel borders, input outlines |
| border-light | #D5D5D5 | Hairline separators, table borders, subtle grid lines |
| border-dark | #333333 | Active borders, selected states, emphasis boundaries |
| canvas-dark | #1B1B1B | Deep promotional banners, high-contrast footer areas |
| canvas-darker | #060809 | Near-black for maximum contrast moments |
| accent-sale | #212121 | Sale pricing, promotional badges, urgency indicators |

The interface operates in a light mode exclusively across all captured surfaces. Product photography introduces saturated color—deep reds, cobalt blues, forest greens—making the neutral UI frame essential for visual rest. Warm tints in surface-warm panels prevent sterile coolness without introducing competing hue. Text hierarchy relies entirely on weight and opacity rather than color variation, maintaining the monochrome discipline.

## Typography

The type system pairs PT Serif for display moments with Inter for all functional text. This serif-sans relationship evokes design editorial conventions while remaining highly legible at small sizes. The design facts also list System-Sansserif and System-Systemui among detected font families, though these appear to serve fallback or embedded widget contexts rather than core brand typography.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Pt Serif | 3.5rem | 400 | 1.1 | normal | Homepage hero headlines, major campaign titles |
| section-display | Pt Serif | 2.5rem | 400 | 1.2 | normal | Section headings, product detail titles |
| product-title | Pt Serif | 2rem | 400 | 1.2 | normal | Product names in detail pages |
| body | Inter | 0.9375rem | 400 | 1.7 | normal | Paragraphs, descriptions, general content |
| body-small | Inter | 0.875rem | 400 | 1.7 | normal | Secondary descriptions, metadata |
| label | Inter | 0.75rem | 400 | 1.7 | 0.083em | Uppercase labels, category tags, fine print |
| navigation | Inter | 0.875rem | 400 | 1.7 | normal | Primary navigation, breadcrumbs |
| button | Inter | 0.9375rem | 700 | 1.15 | normal | Button text, calls to action |

PT Serif appears exclusively at 400 weight, lending an elegant, unhurried voice to headlines. Inter spans 400 through 700 weights, with Semibold (600) used for emphasis within body contexts and Bold (700) reserved for buttons and strong calls to action. The label token's positive letter spacing creates optical balance for uppercase usage. Verify licensing for these families before production use.

## Layout

The layout system favors centered, contained compositions with generous breathing room. The homepage hero occupies full viewport width with centered text overlay, while content sections below constrain to a moderate maximum width that keeps line lengths comfortable for reading.

The header maintains a fixed or sticky presence with a two-tier structure: a thin promotional banner in near-black with white text above the main navigation bar. The main navigation distributes the logo left, category links center, and utility actions (search, account, cart) right. Navigation links use regular weight Inter with normal case, avoiding uppercase styling that would feel too aggressive for the editorial tone.

Product pages employ an asymmetric two-column layout with a large product image gallery occupying roughly 55% width and purchase information filling the remainder. This ratio prioritizes visual evaluation while keeping commerce functions immediately accessible. Below the fold, tabbed content organizes detailed specifications, care instructions, and delivery information into scannable panels.

Spacing follows a 2px base unit system. Section vertical padding typically measures 60px, while component internal padding ranges from 10px for compact elements to 20px for cards and panels. The 151.359px horizontal margin in product page containers indicates a centered layout with fluid side gutters that collapse on narrower viewports.

Grid systems for product listings use flexible columns—five items visible in the Best Sellers section—with consistent 20px gaps. Images sit in light gray or white containers that unify varied product photography into a cohesive browse experience.

## Visual language

The visual language balances luxury restraint with commercial clarity. Photography dominates: hero images show furniture in aspirational interior contexts, while product pages isolate items on clean white or contextual backgrounds. The Ball Chair product page demonstrates this duality—hero shots on white for color accuracy, lifestyle thumbnails showing spatial presence.

Shape language is predominantly rectilinear with strategic rounding. Buttons use full pill shapes (100px to 999px radius values) that feel friendly without being casual. Cards, panels, and input containers use 8px radius—enough to soften edges without appearing bubbly. Color swatches are perfect circles with inset ring indicators for selection state.

Iconography is minimal and functional: small line icons for shipping, warranty, and service promises; simple arrows for navigation affordances. The Affirm financing logo appears as a distinctive wordmark in its own typeface, integrated inline with pricing information.

The promotional banner at page top uses a countdown timer with bold numerals, creating urgency through motion implication rather than color alone. Social proof appears as star ratings with decimal precision, positioned near pricing to reinforce purchase confidence.

## Components

### Primary Button
- **Anatomy**: Text label with right-pointing arrow icon, centered within pill-shaped container
- **Surface**: Solid black fill with white text
- **Typography**: `{typography.button}` — Inter Bold at 15px
- **Shape**: Full pill with 100px to 999px radius
- **Spacing**: 12px vertical padding, 35px horizontal padding
- **Composition**: Icon follows text with modest gap, both centered
- **Variants**: "SHOP THE SALE" with chevron, "ADD TO CART" without icon

### Secondary Button
- **Anatomy**: Text label with optional arrow, bordered container
- **Surface**: White fill with black border and black text
- **Typography**: Inter Bold at 14px or 15px depending on context
- **Shape**: 8px radius for rectangular variants, pill for outline buttons
- **Spacing**: 7px to 14px vertical, 14px to 15px horizontal
- **Composition**: Used in pairs like "LOOKBOOK" and "CUSTOMIZE" with arrows
- **Variants**: Outline pill for low-emphasis actions, rounded rectangle for medium emphasis

### Product Card
- **Anatomy**: Product image container, optional category label, product name
- **Surface**: White or very light gray background
- **Typography**: Category in `{typography.label}` uppercase, product name in `{typography.body-small}`
- **Shape**: 8px radius on image containers
- **Spacing**: 20px internal padding, consistent gaps in grid
- **Composition**: Image dominant with minimal text below, center-aligned in grid cells

### Color Swatch Selector
- **Anatomy**: Circular color sample with selection indicator
- **Surface**: Actual product color visible, white page background
- **Shape**: Perfect circle with outer ring
- **Composition**: Horizontal row with consistent spacing, selected state shows dark border ring
- **States**: Default shows color unobstructed, selected adds 2px dark border via box-shadow technique

### Information Panel
- **Anatomy**: Header with icon and title, list of promise items with icons
- **Surface**: Warm tinted background (`{colors.surface-warm}`) with light border
- **Typography**: Title in `{typography.body}` Semibold, items in `{typography.body-small}`
- **Shape**: 8px radius, full-width within parent column
- **Spacing**: 20px padding, items stacked with 10px to 15px vertical gaps
- **Composition**: Icon left of text, items separated by subtle dividers

### Tabbed Content
- **Anatomy**: Horizontal tab list with active indicator, content panel below
- **Surface**: White background, active tab with bottom border or text emphasis
- **Typography**: Tab labels in `{typography.navigation}`, active in `{typography.body}` Bold
- **Shape**: Content panels with 8px radius on nested containers
- **Spacing**: 30px to 60px below heading, generous horizontal margins
- **Composition**: Tabs evenly distributed or left-aligned, content reveals technical drawings or specifications

### Promotional Banner
- **Anatomy**: Thin full-width bar with centered message, optional countdown
- **Surface**: Near-black background with white text
- **Typography**: `{typography.label}` for phone number, larger bold for timer digits
- **Spacing**: 4px vertical padding, minimal height
- **Composition**: Phone left, message center, close control right

## Responsive behavior

The system is designed desktop-first with logical adaptation paths. The homepage hero text remains centered and scales proportionally. Product grids collapse from five columns to three, then two, then single column as viewport narrows. The product page two-column layout stacks vertically on mobile, with image gallery becoming swipeable and purchase panel following below.

Navigation transforms: the full horizontal link list collapses to a hamburger menu, with search and cart remaining as persistent icons. The promotional banner truncates its phone number or countdown on narrow screens, prioritizing the core offer message.

Tabbed content on product pages converts to an accordion pattern on mobile, preserving the information architecture while fitting narrow viewports. The Our Promises panel remains full-width, maintaining its internal icon-list structure.

Typography scales down modestly: the 56px hero display reduces to 40px or 32px on smaller screens, maintaining PT Serif's presence without overwhelming the viewport. Body text remains consistent at 15px across breakpoints for readability.

## Practical implementation guidance

### Preserve
- The serif-sans type pairing; PT Serif's classical voice is essential to brand positioning
- Generous white space around product imagery; crowding destroys the gallery effect
- High-contrast black buttons with white text for primary actions
- The warm-tinted panel treatment for trust-building content like Our Promises
- Pill-shaped primary buttons with arrow indicators for forward momentum

### Avoid
- Adding decorative color to the UI frame; let product photography provide chromatic interest
- Rounding corners beyond 8px for containers; keep cards and panels crisp
- Uppercasing navigation or body text; the system uses sentence case for approachability
- Shadow effects on cards; the flat, clean surfaces rely on spacing and borders for definition
- Multiple font weights for PT Serif; the single 400 weight is intentional

### Recommended Build Order
1. Establish the 2px base unit and type scale with Inter and PT Serif loaded
2. Build the header with promotional banner and navigation structure
3. Implement the hero section with centered overlay text on full-bleed imagery
4. Create the product card component with image container and minimal metadata
5. Develop the product page layout with asymmetric two-column structure
6. Add the tabbed content component for specifications and details
7. Implement the information panel with icon-list pattern for promises and services
8. Polish interaction states: button hovers, swatch selection, tab activation

### Accessibility
- Ensure the black-on-white and white-on-black combinations meet WCAG AAA contrast
- Add visible focus indicators to pill buttons; the rounded shape can obscure default outlines
- Provide text alternatives for product specification line drawings
- Make color swatches selectable via keyboard with clear focus and selected states
- Consider reduced-motion preferences for the promotional countdown timer
- Maintain logical heading hierarchy: PT Serif for h1-h2, Inter for h3 and below

## Scope note

This guide covers the homepage and product detail page surfaces visible in the supplied images. Cart, checkout, account pages, and mobile-specific layouts are not represented. Motion design, hover states, and loading skeletons are not documented. The Affirm financing integration and live chat widget are noted as present but not fully specified. System-Sansserif and System-Systemui appear in the detected font list but are not used in core brand tokens. Measurements reflect the captured desktop viewport and should be validated across target breakpoints during implementation.
