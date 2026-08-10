# How lofree.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/lofree.co-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage product grid showing Trending Keyboards and Trending Keycaps sections with NEW badges, star ratings, and color swatches on light gray cards](https://pin.fontofweb.com/7927?format=jpg)](https://design.withfudge.com/share/pin-7927)

[Homepage product grid showing Trending Keyboards and Trending Keycaps sections with NEW badges, star ratings, and color swatches on light gray cards](https://design.withfudge.com/share/pin-7927)

[![Flow84 product detail page with large hero image, bold condensed title, feature list, variant selectors, protection plan cards, and black Add to cart button](https://pin.fontofweb.com/7926?format=jpg)](https://design.withfudge.com/share/pin-7926)

[Flow84 product detail page with large hero image, bold condensed title, feature list, variant selectors, protection plan cards, and black Add to cart button](https://design.withfudge.com/share/pin-7926)

## Overview

Lofree's design system presents mechanical keyboards and accessories through a restrained, gallery-like e-commerce experience. The visual language balances editorial confidence with utilitarian clarity: product photography dominates, typography provides strong hierarchy without ornament, and interactive elements reduce to essential shapes. The homepage organizes inventory into horizontal scrolling grids with consistent card treatments, while product detail pages dedicate generous space to hero imagery and methodical specification presentation. A near-monochrome palette with selective warm yellow accents creates moments of energy against an otherwise calm environment. The system prioritizes scanability and conversion through bold product titles, visible ratings, and prominent call-to-action buttons that maintain their presence without visual shouting.

## Colors

| token | hex | use |
|---|---|---|
| ink | `#1A1A1A` | Primary text, active borders, navigation links |
| ink-deep | `#000000` | Primary button fills, maximum contrast moments |
| ink-soft | `#282828` | Header text on dark banner, secondary emphasis |
| muted | `#6E6E73` | Strikethrough prices, secondary metadata |
| border | `#B5B5B5` | Inactive variant pills, divider lines, card borders |
| surface | `#EFEFEF` | Thumbnail backgrounds, subtle separation |
| surface-warm | `#F4F4F4` | Feature list containers, soft content bands |
| surface-cool | `#F5F5F7` | Product card backgrounds, image placeholders |
| canvas | `#FFFFFF` | Page background, button text on dark, protection cards |
| accent | `#FFCC4A` | NEW badges, promotional highlights, star ratings |
| accent-text | `#1D1D1F` | Text on accent backgrounds for legibility |

The color strategy relies on a stark light-mode foundation: white canvas with near-black text. This high-contrast base ensures product photography reads clearly without color competition. Warm gray surfaces create subtle elevation for cards and feature containers without introducing chromatic noise. The single accent yellow appears sparingly—on badges, rating stars, and promotional tags—where it functions as a scanning aid rather than a brand color statement. Dark elements appear only in functional moments: the primary purchase button, the top promotional banner, and selected states. No dark mode is visible in the supplied material.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Roboto Condensed | 3.75rem | 700 | 1.1 | -0.01em | Product page titles (Flow84) |
| section-display | Helvetica | 2.625rem | 700 | 1.15 | 0.02em | Homepage section headings (Trending Keyboards) |
| body | Helvetica | 1.0625rem | 400 | 1.6 | 0.02em | Paragraphs, descriptions, navigation |
| body-small | Helvetica | 0.9375rem | 400 | 1.6 | 0.02em | Feature lists, secondary content |
| label | Helvetica | 0.8125rem | 400 | 1.3 | 0.02em | Badges, metadata, small labels |
| caption | Helvetica | 0.75rem | 600 | 1.2 | normal | Tags, fine print, promotional text |
| navigation | Helvetica | 1.0625rem | 400 | 1.6 | 0.02em | Header menu items |
| price | Helvetica | 1.0625rem | 700 | 1.5 | 0.02em | Product prices, financial data |
| button | Helvetica | 1.0625rem | 700 | 1.6 | 0.02em | Primary and secondary buttons |

The type system employs two families with distinct roles. Roboto Condensed Bold delivers product titles with compressed horizontal proportions that feel technical and assertive—appropriate for hardware naming. Helvetica Regular handles all other text at a consistent 17px base with slight positive tracking for airy readability. Weight variation within Helvetica is minimal: Regular for body and navigation, Bold for prices and buttons. The hierarchy depends on size contrast rather than weight stacking, with the display-to-body ratio creating clear separation between product identity and supporting information.

Verify licensing for these families before production use.

## Layout

The layout follows a centered, max-width container with generous horizontal breathing room. Page gutters measure 192px on each side at desktop scale, creating a narrow content column that focuses attention on product imagery. Vertical section spacing alternates between 64px for related content groups and 96px for major section breaks.

The homepage presents category navigation as a horizontal tab row, followed by full-width product grids. Each grid section pairs a bold left-aligned heading with a "Shop all" link on the right, establishing a consistent section header pattern. Product cards arrange in equal-width columns with consistent internal padding and bottom-aligned metadata.

The product detail page uses an asymmetric two-column structure: a large left zone for the hero image gallery and a narrower right column for purchase information. The right column stacks vertically with clear separation between title block, feature list, variant selectors, protection options, and the primary action. Thumbnail navigation sits below the main image, allowing direct access to alternate views.

Spacing within components follows a tight internal rhythm: 12px for compact element grouping, 20px for card padding, 24px for button horizontal padding. The system avoids dense packing—product cards float in their containers with surrounding negative space, and text blocks maintain comfortable measure for scanning.

## Visual language

Product photography receives premium treatment: large, centered, and isolated on neutral backgrounds that match the card surfaces. The visual effect is a floating object in a clean room—no shadows, no environmental context, pure product focus. This restraint extends to the overall interface, where decorative elements are eliminated in favor of functional geometry.

Interactive elements communicate state through border and fill changes rather than color shifts. Variant pills transition from light borders to dark borders when selected. The primary action button inverts the page's dominant contrast relationship: black fill with white text, making it the darkest element in the purchase flow. This inversion creates an unmissable target without relying on accent color.

The star rating system uses filled yellow stars against the neutral text, providing the only persistent color warmth in product listings. NEW badges apply the same yellow as solid pills, creating visual rhyme across the inventory grid. Chat and support elements use rounded bubble shapes with soft shadows, slightly friendlier than the angular product photography containers.

Rounded corners vary by function: small for badges, medium for feature containers, large for product cards, and full pills for all interactive elements. This progression from sharp to soft maps to decreasing permanence—static labels are squarest, temporary selections are roundest.

## Components

**Product card**
- Anatomy: Image container, NEW badge (conditional), brand label, product name, price, color swatches, star rating
- Surface: `{colors.surface-cool}` background, no border
- Typography: Brand in `{typography.label}` uppercase, product name in `{typography.body}` weight 700, price in `{typography.price}`, strikethrough original price in `{colors.muted}`
- Shape: `{rounded.large}` corners
- Spacing: `{spacing.loose}` internal padding, image fills top portion with `{spacing.standard}` gap to text block
- Composition: Vertical stack with bottom-aligned metadata; image aspect ratio consistent across grid
- Variants: Cards with color swatches show small circular indicators; cards without swatches omit this row

**Section header**
- Anatomy: Left-aligned heading, right-aligned "Shop all" link with chevron icon
- Surface: Transparent, inherits page background
- Typography: `{typography.section-display}` for heading, `{typography.body}` for link
- Spacing: `{spacing.section}` bottom margin to grid

**Primary button**
- Anatomy: Text label centered
- Surface: `{colors.ink-deep}` fill, `{colors.canvas}` text
- Typography: `{typography.button}`
- Shape: `{rounded.pill}`
- Spacing: `{spacing.spacious}` vertical padding, `{spacing.spacious}` horizontal padding
- States: Full-bleed black creates default state; no visible hover state in supplied material

**Secondary button / Variant pill**
- Anatomy: Text label centered
- Surface: `{colors.canvas}` fill, `{colors.ink}` border
- Typography: `{typography.body-small}`
- Shape: `{rounded.pill}`
- Spacing: `{spacing.compact}` vertical padding, `{spacing.loose}` horizontal padding
- Variants: Active state uses `{colors.ink-deep}` border at increased width; inactive uses `{colors.border}`

**Feature list**
- Anatomy: Heading "Features:" followed by bulleted list
- Surface: `{colors.surface-warm}` background, `{rounded.medium}` corners
- Typography: `{typography.body-small}` for list items, `{typography.body}` weight 700 for heading
- Spacing: `{spacing.comfortable}` internal padding

**Protection plan card**
- Anatomy: Duration label, price, strikethrough original price, "Get it" button
- Surface: `{colors.canvas}` background, `{colors.border}` border, `{rounded.medium}` corners
- Typography: Duration in `{typography.label}`, price in `{typography.price}`, original price in `{colors.muted}` with strikethrough
- Composition: Three cards in horizontal row with equal width

**Chat bubble**
- Anatomy: Icon and "Chat with us" text
- Surface: `{colors.canvas}` background, soft shadow
- Shape: `{rounded.large}` corners
- Position: Fixed bottom-right corner of viewport

**Color swatch**
- Anatomy: Circular indicator, single or multiple in horizontal row
- Surface: Fill matches product color variant
- Shape: `{rounded.full}`, with `{colors.border}` ring for unselected, `{colors.ink-deep}` ring for selected
- Spacing: `{spacing.tight}` gap between swatches

## Responsive behavior

The supplied images show desktop layouts exclusively. Based on the generous 192px page gutters and horizontal product grids, the system likely collapses to narrower gutters and fewer columns at reduced widths. The product detail page's two-column structure should stack vertically on smaller viewports, with the image gallery occupying full width above the purchase panel.

Horizontal scrolling on the homepage grids suggests a touch-friendly adaptation may already exist, where swipe gestures replace pagination. The navigation bar's multiple categories would require consolidation into a menu at narrow widths.

For implementation, consider reducing page gutters to `{spacing.loose}` on tablet and `{spacing.standard}` on mobile. Product grids should transition from five columns to three, then two, then single-column scroll. The asymmetric product detail layout should become single-column with the image gallery remaining prominent.

## Practical implementation guidance

**Preserve**
- The stark black-white contrast ratio for all text and primary actions
- Roboto Condensed Bold for product titles exclusively; do not extend to other headings
- The floating product photography treatment with neutral matching backgrounds
- Pill-shaped buttons for all interactive elements
- Yellow accent restraint—limit to badges, ratings, and promotional tags only
- Generous whitespace around product cards and section boundaries

**Avoid**
- Adding background colors behind product photography; the neutral card-to-image continuity is intentional
- Using the accent yellow for primary actions; reserve it for informational highlights
- Tightening the 17px body size; the slightly oversized base contributes to the airy feel
- Introducing additional font families; the two-family system is deliberately minimal
- Decorative shadows except on floating UI elements like chat

**Recommended build order**
1. Establish the type scale with Helvetica Regular at 17px base and Roboto Condensed Bold for display
2. Implement the color foundation: white canvas, `#1A1A1A` text, `#FFCC4A` accent
3. Build the product card component with image container, badge positioning, and metadata stack
4. Create the section header pattern with heading/link pairing
5. Implement pill buttons with active/inactive border states
6. Construct the product detail page layout with asymmetric columns
7. Add feature list and protection card components
8. Polish with spacing tokens and responsive gutter reduction

**Accessibility**
- Ensure the yellow accent on white meets minimum contrast ratios; the badge text uses dark text for this reason
- Product images require descriptive alt text given their prominence in the purchase flow
- Color swatches need non-color indicators for selection state (border width change helps, but add aria-pressed)
- The black primary button should maintain visible focus indicators against the white page
- Star ratings should include numeric value in accessible label, not rely on visual stars alone

## Scope note

This guide covers the homepage product grid and product detail page surfaces visible in the supplied material. Navigation dropdowns, checkout flows, account pages, and mobile-specific layouts are not represented. Motion, loading states, and form validation patterns are not described.
