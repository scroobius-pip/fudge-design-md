# How schema.supply is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/schema.supply-design)

Last updated: 2026-08-10

## Captured pages

[![Store page with masonry grid of product cards showing device mockups, editorial image sets, and portfolio templates with italic serif navigation](https://pin.fontofweb.com/3428?format=jpg)](https://design.withfudge.com/share/pin-3428)

[Store page with masonry grid of product cards showing device mockups, editorial image sets, and portfolio templates with italic serif navigation](https://design.withfudge.com/share/pin-3428)

[![Product detail page for Image Set 06 with grid of 20 editorial portrait thumbnails, purchase button, and arrow feature list](https://pin.fontofweb.com/3429?format=jpg)](https://design.withfudge.com/share/pin-3429)

[Product detail page for Image Set 06 with grid of 20 editorial portrait thumbnails, purchase button, and arrow feature list](https://design.withfudge.com/share/pin-3429)

[![Subscription pricing page with three-tier card layout showing quarterly, annual, and lifetime plans with checkmark feature lists](https://pin.fontofweb.com/3427?format=jpg)](https://design.withfudge.com/share/pin-3427)

[Subscription pricing page with three-tier card layout showing quarterly, annual, and lifetime plans with checkmark feature lists](https://design.withfudge.com/share/pin-3427)

[![Collection page hero with large serif body text and browser mockup showing dashboard interface with centered login state](https://pin.fontofweb.com/3426?format=jpg)](https://design.withfudge.com/share/pin-3426)

[Collection page hero with large serif body text and browser mockup showing dashboard interface with centered login state](https://design.withfudge.com/share/pin-3426)

## Overview

Schema Supply presents a curated digital-asset storefront with an editorial sensibility. The visual system balances warmth and precision: off-white and warm-gray surfaces provide a gallery-like backdrop for high-contrast black typography and product imagery. The design language draws from fashion and design publishing, using an italic serif typeface for navigation and price labels while keeping body text in a clean sans-serif. Product cards float in a loose masonry grid with generous gutters, letting each mockup or image set breathe. The overall impression is restrained luxury—every element feels intentional, from the thin hairline borders to the carefully spaced feature lists. The system must support browsing, product detail, subscription pricing, and collection overview surfaces with consistent hierarchy and calm pacing.

## Colors

The palette is intentionally narrow, built on a near-monochrome foundation with subtle warmth introduced through surface tones. Black serves as the sole strong accent, used for primary actions, navigation, and body text. The off-white canvas avoids sterile pure white, while warm gray surfaces distinguish product cards and pricing tiers from the page background.

| token | value | use |
|---|---|---|
| ink | `#000000` | Primary text, navigation, buttons, checkmarks, active states |
| canvas | `#ffffff` | Page background, card interiors, input fields |
| muted | `#999999` | Secondary text, disabled features, strikethrough items, borders |
| surface-warm | `#f5f5f0` | Product card backgrounds, subtle section fills |
| border-light | `#e5e5e0` | Card borders, dividers, hairline rules between sections |

The interface operates in a single light mode. Photography and product imagery introduce their own color temperature, which the neutral palette accommodates without competition. No dark mode is visible in the supplied surfaces. The warm surface tone prevents the design from feeling clinical while maintaining sufficient contrast for accessibility.

## Typography

Two families drive the typographic hierarchy: Rhymes Text Trial Unlicensed for display and italic accents, and Inter for functional body text and labels. The serif carries an editorial, fashion-forward voice in navigation and headings; the sans-serif ensures legibility at small sizes and in dense feature lists.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| display-serif | Rhymes Text Trial Unlicensed | 2rem | 500 | 1.2 | -0.01em | Page headings, collection hero statements |
| body-serif | Rhymes Text Trial Unlicensed | 1.25rem | 500 | 1.5 | 0 | Product descriptions, editorial pull quotes |
| body-sans | Inter | 1rem | 400 | 1.5 | 0 | Body copy, feature lists, card descriptions |
| label-sans | Inter | 0.75rem | 400 | 1.4 | 0.02em | Buttons, captions, metadata |
| price-italic | Rhymes Text Trial Unlicensed | 0.875rem | 500 | 1.4 | 0 | Price labels, subscription tiers |
| navigation-italic | Rhymes Text Trial Unlicensed | 0.875rem | 500 | 1.4 | 0 | Primary navigation, login link |

Rhymes Text Trial Unlicensed is designed by Jakub Samek and distributed by Maxi Type. Inter is designed by Rasmus Andersson and distributed by Rsms. Verify licensing for these families before production use.

## Layout

The page structure relies on centered single-column and two-column compositions with generous margins. The store index uses a masonry-style grid with variable card heights that follow content proportions—tall device mockups sit beside square image sets and wide portfolio previews. Cards align to an implicit column system with consistent gutters.

The subscription page presents a two-over-one layout: quarterly and annual plans appear as equal-width cards side by side, while the lifetime plan spans the full width below as a emphasized tier. This creates clear visual hierarchy without relying on size contrast alone.

Product detail pages center the media gallery with a contained width, placing title, price, and purchase action directly beneath. Description and feature lists stack below with hairline separators. The collection overview uses a full-width browser mockup to demonstrate the product interface, with explanatory text above at a comfortable measure.

Spacing follows a 4px base unit. Section vertical rhythm uses 4rem gaps between major regions. Card internal padding is 1.5rem. Component gaps within cards and lists use 1.5rem. The system avoids tight packing; even dense grids like the 20-image thumbnail set maintain visual breathing room through white space between cells.

## Visual language

The aesthetic vocabulary merges editorial publishing with digital-product presentation. Borders are consistently thin—1px hairlines in light warm gray—never heavy or shadow-cast. Cards use subtle rounded corners at 0.5rem, enough to soften edges without feeling playful. Buttons are more tightly rounded at 0.25rem, maintaining a crisp, actionable presence.

Imagery dominates the visual field. Product cards show device mockups with blank screens, editorial photography grids, and interface screenshots. The photography style is high-contrast, often black-and-white or desaturated, with occasional bold color accents in the subject matter. This restraint in image treatment harmonizes with the neutral palette.

Iconography is minimal and functional: simple checkmarks and crosses for feature comparison, a left arrow for back navigation, plus signs for expandable sections. No decorative illustration or pattern work is visible. The visual system achieves personality through type choice and spacing discipline rather than ornament.

## Components

### Product card

- **Anatomy**: Media container (variable aspect ratio), title in sans-serif, price in italic serif, optional secondary metadata
- **Surface**: Warm off-white background (`{colors.surface-warm}`), 1px light border (`{colors.border-light}`), 0.5rem radius
- **Typography**: Title uses `{typography.body-sans}` at 1rem; price uses `{typography.price-italic}` at 0.875rem in muted gray
- **Shape**: Rounded rectangle with no shadow; flat, paper-like presence
- **Spacing**: 1.5rem internal padding; media fills top portion with no additional border radius on inner image
- **Composition**: Cards tile in masonry formation with consistent gutters; tall and wide cards intermix naturally

### Pricing card

- **Anatomy**: Header row with plan name and price badge, divider, feature list with checkmarks and optional strikethrough exclusions
- **Surface**: White background (`{colors.canvas}`), 1px border (`{colors.border-light}`), 0.5rem radius; lifetime variant may use stronger border or filled background for emphasis
- **Typography**: Plan name in `{typography.body-sans}` at 1rem weight 500; price badge in `{typography.label-sans}` with pill background; features in `{typography.body-sans}` at 1rem
- **Shape**: Rounded rectangle; price badge has slight pill rounding
- **Spacing**: 1.5rem padding; feature list items stack with 0.75rem vertical gap
- **Variants**: Standard tier (white, light border), emphasized tier (possible subtle background shift or stronger border)

### Primary button

- **Anatomy**: Text label centered within rectangular container
- **Surface**: Black background (`{colors.ink}`), white text (`{colors.canvas}`), no border
- **Typography**: `{typography.label-sans}` at 0.75rem, weight 400
- **Shape**: 0.25rem border radius
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Appears inline below product titles or within card footers

### Feature list

- **Anatomy**: Leading icon (checkmark or cross), text label; optional muted state for excluded features
- **Surface**: Transparent; inherits card background
- **Typography**: `{typography.body-sans}` at 1rem; included features in ink, excluded features in muted with strikethrough
- **Spacing**: 0.75rem between items; icon sits inline with text baseline
- **Composition**: Used within pricing cards and product detail pages

### Navigation bar

- **Anatomy**: Logo wordmark left, primary links center, utility link right
- **Surface**: Transparent over page background
- **Typography**: Links in `{typography.navigation-italic}` at 0.875rem; logo in same family
- **Composition**: Horizontal flex with space-between; links evenly spaced with 1.5rem gaps

### Accordion section

- **Anatomy**: Header with title and toggle icon, collapsible content region
- **Surface**: Transparent; hairline divider above
- **Typography**: Title in `{typography.body-sans}` at 1rem weight 500; content in `{typography.body-sans}` at 1rem weight 400 in muted color
- **Spacing**: 1.5rem vertical padding per header; content inset slightly or full-width
- **States**: Collapsed shows plus icon; expanded shows content with possible minus or rotated icon

## Responsive behavior

The masonry grid should reflow to fewer columns as viewport narrows—likely three columns on tablet, two on small tablet, single column on mobile. Card internal proportions remain fixed; images maintain aspect ratio. The two-over-one pricing layout should stack vertically on narrow viewports, with the lifetime plan remaining full-width.

Navigation should collapse to a minimal menu or hamburger on mobile, preserving the italic serif voice in the expanded state. Product detail pages should stack media above information, maintaining centered alignment and comfortable measure for description text. The 20-image thumbnail grid should reflow to fewer columns with maintained cell spacing.

## Practical implementation guidance

### Preserve
- The strict two-family type system: serif for voice and accent, sans-serif for function
- Generous whitespace around every component; resist tightening margins
- The warm off-white surface tone against pure white canvas—this subtle layering defines the gallery aesthetic
- Italic serif for prices and navigation; it is the brand's most distinctive signal
- Hairline 1px borders rather than shadows for depth

### Avoid
- Adding decorative shadows or gradients; the system is flat and paper-like
- Introducing additional accent colors; black, white, and warm gray suffice
- Using the serif family at small sizes or in all-caps; it loses elegance
- Tightening card gutters below 1.5rem; the masonry needs air to read as curated

### Recommended build order
1. Establish the 4px spacing unit and type scale with both families loaded
2. Build the product card component with warm surface, hairline border, and masonry container
3. Implement navigation with italic serif links and transparent background
4. Create the pricing card with feature list and checkmark iconography
5. Add product detail page with media grid, purchase button, and accordion sections
6. Polish with section dividers and responsive reflow behavior

### Accessibility
- Ensure the muted gray (`#999999`) meets minimum contrast for non-text elements only; body text should remain in ink black
- Provide visible focus states on buttons and navigation links, likely an outline offset or background shift
- Use semantic heading hierarchy: page title as h1, card titles as h2 or h3 depending on nesting
- Mark accordion toggles as button elements with aria-expanded states
- Verify that italic serif navigation remains legible at small sizes; consider a slightly larger minimum or increased letter spacing if needed

## Scope note

This guide covers the store index, product detail, subscription pricing, and collection overview surfaces visible in the supplied images. Measurements are practical adaptation targets. Mobile breakpoints, hover states, loading skeletons, checkout flow, and dark mode are not represented and should be designed to extend the established visual language.
