# How shop.ledger.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/shop.ledger.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dark footer with newsletter subscription, social icons, and multi-column link navigation on black background](https://pin.fontofweb.com/7808?format=jpg)](https://design.withfudge.com/share/pin-7808)

[Dark footer with newsletter subscription, social icons, and multi-column link navigation on black background](https://design.withfudge.com/share/pin-7808)

[![Product comparison grid with feature icons and tiered capability descriptions on white background](https://pin.fontofweb.com/7807?format=jpg)](https://design.withfudge.com/share/pin-7807)

[Product comparison grid with feature icons and tiered capability descriptions on white background](https://design.withfudge.com/share/pin-7807)

[![Customer reviews section with star ratings, filter pills, and support response cards on light gray background](https://pin.fontofweb.com/7806?format=jpg)](https://design.withfudge.com/share/pin-7806)

[Customer reviews section with star ratings, filter pills, and support response cards on light gray background](https://design.withfudge.com/share/pin-7806)

[![FAQ accordion with dark gradient background and expanded answer panel with white text](https://pin.fontofweb.com/7805?format=jpg)](https://design.withfudge.com/share/pin-7805)

[FAQ accordion with dark gradient background and expanded answer panel with white text](https://design.withfudge.com/share/pin-7805)

## Overview

The Ledger shop design system is built for selling premium hardware security devices through a stark, confidence-inspiring visual language. The interface alternates between pure white and deep black surfaces, creating dramatic section breaks that guide users through product discovery, comparison, social proof, and purchase. The aesthetic is intentionally minimal—no decorative gradients on UI surfaces, no drop shadows on cards, no rounded corners beyond functional pills and badges. This restraint reinforces the brand's security-focused positioning: the design itself feels hardened, precise, and trustworthy.

Navigation sits in a black bar with white text, carrying the product name and price persistently. Content sections flow from light to dark and back, using the contrast shift as a structural device. Product pages combine editorial-scale typography for headlines with dense, data-rich comparison grids and review systems. The overall rhythm is spacious in the hero and footer, tight and information-dense in the middle sections where buyers evaluate features.

## Colors

The palette is strictly achromatic with a single warm accent. Black, white, and grays handle all structural and text needs; orange serves as the sole action color.

| token | hex | use |
|---|---|---|
| action | #FF5300 | Primary buttons, add-to-cart, newsletter subscribe |
| ink | #000000 | Primary text on light surfaces, dark section backgrounds |
| ink-secondary | #171717 | FAQ question bars, elevated dark surfaces |
| ink-tertiary | #262626 | Subtle dark variations, gradient stops |
| muted-ink | #525252 | Secondary text, footer category headings |
| muted-ink-light | #737373 | Tertiary text, disabled states, metadata |
| canvas | #FFFFFF | Primary page background, card surfaces |
| surface | #FAFAFA | Review section background, subtle alternation |
| surface-secondary | #F5F5F5 | Review cards, support response bubbles |
| surface-elevated | #E5E5E5 | Dividers, subtle borders on light |
| surface-dark | #181818 | Footer background, dark gradient midpoint |
| surface-darker | #000000 | Hero sections, navigation, maximum contrast areas |
| border | #D4D4D4 | Comparison grid lines, star empty states |
| border-light | #E5E7EB | Subtle dividers, input borders |
| border-dark | #A3A3A3 | Footer text, muted inverse elements |
| accent-purple | #6A3794 | Badge accents, limited promotional use |
| accent-purple-light | #F2E2FF | Soft purple tints for subtle highlights |
| text-inverse | #FFFFFF | All text on black or dark gradient backgrounds |
| text-muted-inverse | #A3A3A3 | Footer links, secondary text on dark |

The system operates in two primary modes: light mode for content and evaluation sections (reviews, comparisons, specifications) and dark mode for emotional and conversion moments (hero, FAQ, footer, newsletter). Dark sections use a subtle gradient from pure black through #181818 back to black, creating depth without visible banding. No colored backgrounds appear behind product photography—images sit on pure white or pure black.

## Typography

All text uses Inter, loaded as a variable-weight web font. The type scale is tightly compressed, with display sizes carrying negative letter spacing for a modern, editorial feel. Body sizes are generous for readability on technical content.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 4.25rem | 600 | 1.17 | -0.045em | Page heroes, major product names |
| section-display | Inter | 3.125rem | 600 | 1.12 | -0.045em | Section headlines, "Frequently Asked Questions" |
| product-title | Inter | 2.375rem | 600 | 1.05 | -0.045em | Product page titles, review section headers |
| subsection-heading | Inter | 2rem | 600 | 1.12 | -0.045em | Feature category titles |
| card-heading | Inter | 1.5rem | 600 | 1.33 | -0.045em | Card titles, price displays |
| body-large | Inter | 1.375rem | 400 | 1.45 | normal | Lead paragraphs, FAQ answers |
| body | Inter | 1rem | 400 | 1.5 | normal | Standard paragraphs, navigation |
| body-medium | Inter | 1rem | 500 | 1.75 | normal | FAQ questions, emphasized body |
| label | Inter | 0.8125rem | 500 | 1.69 | normal | Buttons, tags, metadata |
| label-small | Inter | 0.6875rem | 500 | 1.45 | normal | Timestamps, legal microcopy |
| navigation | Inter | 1rem | 400 | 1.5 | normal | Nav links, footer categories |
| price | Inter | 1.5rem | 600 | 1.33 | -0.045em | Product prices in header |

Weight distinctions matter: 400 for body and navigation, 500 for labels and emphasized text, 600 for all headings and prices, 700 for rare strong emphasis. The negative tracking on display sizes is essential to the brand's tight, engineered feel. Verify licensing for these families before production use.

## Layout

The layout uses a fixed maximum width with generous external margins. Navigation and header sections carry `0px 96px` padding, creating substantial side gutters on desktop. The main content area uses a centered container with `0px 84.5px` margins, yielding a content width of approximately 1200px on standard viewports.

Vertical rhythm follows a section-based model. Major sections receive `112px` top and bottom padding for breathing room around heroes and footers. Content-dense sections compress to `48px` or `24px` vertical padding. The comparison grid uses a full-bleed approach with internal cell borders rather than section gutters.

The grid system is implicit: product comparison uses four equal columns with `1px` internal dividers. FAQ uses a two-column layout with questions on the left (60%) and answers on the right (40%). Reviews stack vertically with full-width cards. Footer uses a five-column link grid with the brand mark and language selector occupying the first column.

Spacing tokens derive from a `2px` base unit, yielding fine-grained control. Common multiples: `8px` for tight internal padding, `16px` for component padding, `24px` for card padding, `32px` for section internal spacing, `48px` for major component gaps, `96px` for page gutters.

## Visual language

The visual character is austere and precise, reflecting the security hardware being sold. Surfaces are flat—no shadows on cards, no depth effects on buttons beyond color change. The only dimensional element is a subtle dark gradient used in hero and FAQ sections, shifting from #000000 through #181818 and back, creating a sense of infinite depth behind the content.

Iconography is strictly monochrome line art. Product comparison uses simple device silhouettes and UI mockups in black on white. Feature icons are minimal, geometric, and uniform in weight. Social icons in the footer are white on dark circular backgrounds. No illustrative or photographic decoration appears outside product imagery.

Borders function as structural elements. The comparison grid uses `1px` solid #E5E7EB dividers between cells. FAQ questions use no visible border, relying on background color change. Buttons use `2px` borders for secondary actions, no border for primary. The overall effect is of a technical specification document brought to life as a commerce experience.

Photography of products is isolated on pure backgrounds, allowing the devices to read as objects of precision engineering. No lifestyle photography or environmental context distracts from the hardware itself.

## Components

### Navigation Bar

- **Anatomy**: Fixed top bar containing product name (left), section anchors (center), price and cart action (right)
- **Surface**: Background #000000, full width
- **Typography**: Product name uses card-heading; section anchors use navigation; price uses price
- **Spacing**: `0px 96px` horizontal padding, `24px` vertical on links
- **Composition**: Flex row, space-between alignment, vertically centered
- **Variants**: Transparent background on scroll-over-hero scenarios; solid black when scrolled past hero

### Primary Button

- **Anatomy**: Text label with optional arrow icon, fully rounded pill shape
- **Surface**: Background #FF5300, text #FFFFFF
- **Typography**: label token, weight 500
- **Shape**: Border radius 9999px (full pill)
- **Spacing**: `12px 24px` padding
- **Composition**: Inline-flex, centered, icon trailing with `8px` gap
- **States**: Default orange; no visible focus ring in supplied images

### Secondary Button

- **Anatomy**: Text label on transparent background with border
- **Surface**: Transparent fill, `2px` solid #FFFFFF border, text #FFFFFF
- **Typography**: label token
- **Shape**: Border radius 9999px
- **Spacing**: `12px 24px` padding
- **Use**: Newsletter subscribe, ghost actions on dark backgrounds

### Comparison Grid

- **Anatomy**: Section header row, feature category headers, four-column product comparison
- **Surface**: Background #FFFFFF, internal borders #E5E7EB
- **Typography**: Section headers use subsection-heading; feature labels use body; product descriptors use label
- **Shape**: No external border, `1px` internal grid lines
- **Spacing**: Cells receive `24px` padding; category headers centered with `32px` vertical padding
- **Composition**: CSS Grid, four equal columns; full width of container
- **Content**: Icon + label pairs for capabilities, em-dash for missing features

### Review Card

- **Anatomy**: Star rating, review title, review body, optional support response
- **Surface**: Card background #F5F5F5 on section background #FAFAFA; support response nested with same surface
- **Typography**: Title uses body-medium weight 600; body uses body; date uses label-small; support name uses label
- **Shape**: No visible border radius in supplied images
- **Spacing**: `24px` padding on main card; support response indented with additional `16px` margin-top
- **Composition**: Full width, stacked vertically, `16px` gap between cards

### Filter Pills

- **Anatomy**: Text label in rounded container, active state filled
- **Surface**: Default transparent with #D4D4D4 border; active state #000000 background with #FFFFFF text
- **Typography**: label token
- **Shape**: Border radius 9999px
- **Spacing**: `8px 16px` padding
- **Composition**: Horizontal scroll or wrap row, `8px` gap

### FAQ Accordion

- **Anatomy**: Section heading, stacked question rows, expandable answer panel
- **Surface**: Section background uses gradient from #000000 through #181818 to #000000; question bars #171717; answer text #FFFFFF
- **Typography**: Section heading uses section-display; questions use body-medium; answers use body-large
- **Shape**: Question bars have no radius; section is full-bleed dark
- **Spacing**: Questions have `16px 24px` padding; `8px` gap between questions; answer panel has `24px` padding
- **Composition**: Two-column on desktop—questions stack left, answer displays right; single column on narrower viewports
- **Interaction**: Chevron icon rotates on expand; only one answer visible at a time in supplied images

### Footer

- **Anatomy**: Newsletter section (top), link columns (middle), legal and payment (bottom)
- **Surface**: Background #000000; newsletter input background #171717 with #FFFFFF border
- **Typography**: Headings use body-medium weight 600; links use body at #A3A3A3; legal uses label-small
- **Shape**: Newsletter input has `24px` radius; subscribe button is primary pill
- **Spacing**: `112px` top padding, `48px` bottom padding; columns use `24px` gap
- **Composition**: Newsletter as two-column (text left, form right); links as five-column grid; legal as full-width stacked block

## Responsive behavior

The supplied images show desktop layouts exclusively. Based on the component structures, the following responsive adaptations are recommended:

Navigation should collapse section anchors into a hamburger menu below approximately 1024px, preserving the product name and cart action. The price display may hide on the smallest viewports to prioritize the "Add to cart" button.

Comparison grids should scroll horizontally on narrow viewports rather than stacking, preserving the four-column comparison structure that is central to the product evaluation experience. Alternatively, transform to a stacked card view with each product as a full-width block containing all features.

FAQ accordion should move to single-column layout below 768px, with answers appearing below their questions rather than in a fixed right panel.

Review cards maintain full-width stacking but may reduce internal padding to `16px` on mobile.

Footer link columns should stack to two-column then single-column grids, with newsletter section becoming full-width stacked.

## Practical implementation guidance

### Preserve
- The stark black/white alternation between sections—this is the primary brand rhythm
- Tight negative letter spacing on all display and heading sizes
- Full-pill button shapes for all actions; no squared or slightly-rounded buttons
- Monochrome iconography; do not introduce color into feature icons
- The exact Inter weight progression: 400, 500, 600, with 700 reserved for rare emphasis

### Avoid
- Drop shadows on any surface—the design is explicitly flat
- Rounded corners on cards or content containers; use radius only on interactive elements
- Color backgrounds behind product photography
- Decorative gradients on UI cards or buttons; gradients are reserved for immersive dark sections only
- Multiple accent colors; orange alone carries action meaning

### Recommended Build Order
1. Establish the color tokens and type scale first—these are tightly coupled and must be correct
2. Build the navigation bar with its fixed positioning and transparent-to-solid scroll behavior
3. Implement the section background system with light/dark alternation
4. Create the button components (primary, secondary, ghost) with full pill shapes
5. Build the comparison grid with its internal border structure
6. Implement the FAQ accordion with two-column desktop layout
7. Add review cards with nested support response pattern
8. Construct the footer with newsletter form and multi-column links

### Accessibility
- Ensure all text on dark gradients meets WCAG AA contrast; the #FFFFFF on #000000 combination exceeds requirements
- The #A3A3A3 footer link color on #000000 background should be verified against WCAG AA for small text; consider lightening to #D4D4D4 if it fails
- FAQ accordion requires keyboard navigation and aria-expanded states
- Comparison grid should use proper table or grid semantics for screen readers
- Review star ratings need aria-label describing the numeric value
- Newsletter email input requires visible label or aria-label

## Scope note

This guide covers the Ledger shop product page surfaces visible in the supplied images: navigation, product comparison, customer reviews, FAQ accordion, and footer. Cart flows, checkout pages, account interfaces, and mobile layouts are not represented. Product imagery treatment and animation behaviors are not documented. Measurements are exact values from the retained interface data.
