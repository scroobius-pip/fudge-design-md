# How taito.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/taito.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with split layout showing product UI screenshot and large display typography for people operations automation](https://pin.fontofweb.com/9514?format=jpg)](https://design.withfudge.com/share/pin-9514)

[Hero section with split layout showing product UI screenshot and large display typography for people operations automation](https://design.withfudge.com/share/pin-9514)

[![Three-column feature grid with product screenshots showing onboarding, integrations, and regional compliance cards](https://pin.fontofweb.com/9515?format=jpg)](https://design.withfudge.com/share/pin-9515)

[Three-column feature grid with product screenshots showing onboarding, integrations, and regional compliance cards](https://design.withfudge.com/share/pin-9515)

[![Performance review feature section with left-side product mockup and right-side feature list with icon markers](https://pin.fontofweb.com/9516?format=jpg)](https://design.withfudge.com/share/pin-9516)

[Performance review feature section with left-side product mockup and right-side feature list with icon markers](https://design.withfudge.com/share/pin-9516)

[![Statistics section with horizontal rule separators and right-aligned large numerals for HR automation metrics](https://pin.fontofweb.com/9517?format=jpg)](https://design.withfudge.com/share/pin-9517)

[Statistics section with horizontal rule separators and right-aligned large numerals for HR automation metrics](https://design.withfudge.com/share/pin-9517)

## Overview

Taito.ai presents a people-operations platform through a restrained, editorial visual system that prioritizes clarity and product credibility. The design employs a warm off-white canvas with near-black typography, creating a sophisticated contrast that feels more print-like than typical SaaS. The layout alternates between asymmetric hero compositions, uniform feature grids, and statistics-driven proof sections. Product screenshots appear as floating interface cards against soft photographic backgrounds, establishing depth without heavy shadows. The overall rhythm is spacious and deliberate, with generous vertical padding between sections and hairline borders providing subtle structural definition. The system communicates automation through calm precision rather than aggressive conversion tactics.

## Colors

The palette is intentionally minimal, built around a warm neutral axis with a single near-black for all text and interactive elements.

| token | value | use |
|---|---|---|
| ink | #0F0E0D | Primary text, headings, navigation, button backgrounds |
| muted-ink | #524F49 | Secondary text, descriptions, statistics labels |
| canvas | #FAFAF9 | Page background, primary surface |
| surface | #F2F1F0 | Elevated cards, product mockup backgrounds |
| border | #E5E5E3 | Horizontal rules, section dividers, card outlines |
| action | #0F0E0D | Primary button fill, active navigation states |
| action-text | #FAFAF9 | Text on dark buttons, inverted labels |
| inverse-surface | #000000 | Deep black for maximum contrast elements, icon fills |

The color logic follows a warm grayscale progression. Canvas provides a subtle warmth that distinguishes the page from stark white competitors. Ink carries all semantic weight for headings, body copy, and interactive elements—there are no accent colors for calls-to-action, which reinforces the understated brand voice. Muted-ink serves descriptive and supporting text roles, appearing in hero paragraphs, feature descriptions, and statistics labels. Border operates at low contrast for structural separation without visual heaviness. Inverse-surface appears in extracted data for certain icon and unknown-region elements, providing a pure black when maximum contrast is required. The absence of blue or purple accent colors is notable; the design achieves hierarchy through size and weight rather than chromatic contrast.

## Typography

The type system relies primarily on Suisse Intl by Swiss Typefaces, used in Regular and Medium weights. The design facts also record Applesystem as a detected family at 14px in unknown regions, though this appears to be a system fallback rather than an intentional design choice. Verify licensing for these families before production use. Suisse Intl is credited to Swiss Typefaces as both designer and vendor.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Suisse Intl | 3.815rem | 400 | 1.2 | -0.025em | Hero headlines, primary value propositions |
| section-display | Suisse Intl | 2.441rem | 400 | 1.2 | -0.015em | Section headings, "Why Taito.ai?" titles |
| feature-heading | Suisse Intl | 1.563rem | 400 | 1.25 | normal | Feature card titles, sub-section headers |
| body | Suisse Intl | 1rem | 400 | 1.5 | normal | Default paragraph text, navigation items |
| body-large | Suisse Intl | 1.25rem | 400 | 1.5 | normal | Hero descriptions, feature explanations |
| label | Suisse Intl | 1rem | 400 | 1.5 | normal | Eyebrow text, category labels |
| navigation | Suisse Intl | 1.25rem | 500 | 1.5 | normal | Nav links, medium-weight hierarchy |
| button | Suisse Intl | 1rem | 500 | 1.5 | normal | Button labels, form actions |

The type scale is built on a 2px relative unit, with sizes progressing from 16px base through 20px, 25px, 39.0624px, and 61.0352px. These snap to practical rem values: 1rem, 1.25rem, 1.563rem, 2.441rem, and 3.815rem. Tracking tightens at display sizes, with hero-display receiving the most negative letter-spacing for a compact, authoritative presence. The Regular weight dominates; Medium appears only in navigation and buttons, creating a subtle functional distinction without visual noise.

## Layout

The page employs a centered content model with generous margins and consistent section rhythm. The main content container uses horizontal padding of 2.5rem and a max-width that creates comfortable line lengths. A distinctive margin value of 102.5px (approximately 6.406rem) appears for centered positioning, though implementations should prefer standard container widths for maintainability.

Sections are separated by full-width hairline borders and substantial vertical padding of 7.5rem top and bottom. This creates clear territorial boundaries between content types while maintaining an open, breathable feel. The header uses a flex layout with 2.5rem column gaps and 1.25rem row gaps, accommodating navigation items and utility actions.

The hero section uses an asymmetric split: left-aligned text content occupies roughly half the width, while the right side presents a product screenshot that bleeds toward the edge. This establishes immediate product comprehension without requiring user interaction. Below the hero, a logo bar provides social proof with horizontal distribution.

Feature sections alternate between text-heavy and image-heavy compositions. The "Why Taito.ai?" section pairs a large section-display heading with a body-large paragraph in a two-column arrangement. Three-column grids follow, with each column containing a product screenshot, feature-heading title, and body description. Grid gaps of 2.5rem maintain consistent horizontal and vertical rhythm.

The statistics section uses a table-like layout with horizontal rules separating rows. Each row pairs a left-aligned description with a right-aligned large numeral, creating a data-forward presentation that feels more editorial than dashboard-like.

## Visual language

Imagery strategy centers on product credibility through interface mockups. Screenshots appear as floating cards with subtle rounded corners, often layered over soft-focus photographic backgrounds of urban or natural scenes. This treatment—sharp UI against blurred environments—suggests the product works effortlessly in real-world contexts.

Photographic backgrounds use desaturated, warm tones that harmonize with the canvas color. The product cards themselves employ surface-colored backgrounds with border-colored outlines, creating a nested depth effect without drop shadows. Interface elements within screenshots use the same typographic family, maintaining visual continuity between marketing and product.

Iconography is minimal and functional. Small geometric icons accompany feature lists, rendered in muted-ink at 1.25rem scale. The icon style is line-based and utilitarian, supporting comprehension without decorative flourish.

The overall visual character is Swiss-influenced editorial design: generous whitespace, precise alignment, typographic hierarchy through size rather than color, and a restrained palette that lets product photography carry emotional resonance. There are no gradients, no heavy shadows, no border-radius exaggeration beyond subtle 0.375rem to 0.5rem values.

## Components

### Primary button

- **Anatomy**: Text label with optional icon, contained within a filled rectangle
- **Surface**: Solid ink background (#0F0E0D) with action-text foreground (#FAFAF9)
- **Typography**: button token, Suisse Intl Medium at 1rem
- **Shape**: 0.375rem border-radius, no border
- **Spacing**: 0.9375rem horizontal padding, comfortable vertical padding
- **Composition**: Inline-flex with centered content, 0.625rem gap when icon present
- **Variants**: A secondary text-button variant appears in navigation, using ink text on transparent background with 0.9375rem horizontal padding and 0.375rem border-radius on hover

### Navigation bar

- **Anatomy**: Logo mark left, primary links center, utility actions right
- **Surface**: Transparent background over hero, with border-bottom on scroll
- **Typography**: navigation token for links, body token for logo text
- **Shape**: Full-width, height determined by content and padding
- **Spacing**: 2.5rem horizontal padding, 2.5rem column gap between link groups
- **Composition**: Flexbox with space-between alignment
- **Hierarchy**: Primary links (Product, Solutions, Pricing, Blog, Company) in Regular weight; active or emphasized items in Medium

### Feature card

- **Anatomy**: Product screenshot, feature-heading title, body description
- **Surface**: Transparent background; screenshot has surface-colored card treatment
- **Typography**: feature-heading for title, body for description
- **Shape**: Screenshot cards use 0.5rem border-radius
- **Spacing**: 2.5rem gap between screenshot and text, 1.25rem between title and description
- **Composition**: Vertical stack, screenshot aspect ratio maintained

### Statistics row

- **Anatomy**: Left-aligned description text, right-aligned large numeral
- **Surface**: Transparent, with border-top horizontal rule
- **Typography**: body for description, hero-display for numerals
- **Shape**: Full-width, 1px border-top in border color
- **Spacing**: 2.5rem vertical padding within each row
- **Composition**: Flexbox with space-between, baseline-aligned

### Product screenshot card

- **Anatomy**: Interface mockup with nested UI elements, occasional avatar or status indicator
- **Surface**: Surface background (#F2F1F0) with border-colored outline
- **Typography**: Inherits product UI fonts, visually consistent with marketing type
- **Shape**: 0.5rem border-radius, subtle border
- **Spacing**: Internal padding varies by content density
- **Composition**: Often layered with 0.625rem offset or shadow-like border treatment to suggest depth

## Responsive behavior

The layout assumes a desktop-first presentation with substantial horizontal margins. At narrower viewports, the asymmetric hero should stack vertically, placing the product screenshot above or below the text content. The three-column feature grid should collapse to single-column with maintained vertical spacing. Statistics rows should remain two-column but may reduce numeral size to section-display scale.

Navigation should collapse to a horizontal scroll or hamburger menu below approximately 768px, preserving the logo and primary action button. The logo bar should wrap to two rows or scroll horizontally on narrow screens.

Typography scales down proportionally: hero-display to section-display at tablet, section-display to feature-heading at mobile. Line lengths should remain between 45 and 75 characters for body text through container width constraints or padding adjustments.

## Practical implementation guidance

### Preserve
- The warm off-white canvas against near-black text; this tonal relationship is central to brand perception
- Generous section padding (7.5rem) that creates breathing room around dense product information
- Hairline borders as the sole decorative structural element
- Single-family typography with weight-based hierarchy rather than color variation
- Product screenshots with soft photographic backgrounds, maintaining the "sharp UI, soft world" contrast

### Avoid
- Adding accent colors for calls-to-action; the monochrome approach is intentional
- Heavy drop shadows or elevation effects; use border and background-color changes for depth
- Tightening section padding below 5rem, which would destroy the editorial rhythm
- Multiple font families; the Suisse Intl consistency is a core system characteristic
- Rounded corners larger than 0.5rem for cards; the aesthetic is subtly crisp, not friendly-rounded

### Recommended build order
1. Establish the color tokens and apply canvas background with ink text
2. Set up the type scale with Suisse Intl Regular and Medium weights
3. Build the navigation with transparent hero variant and bordered scroll state
4. Implement the split hero with asymmetric text/image layout
5. Create the section component with consistent vertical padding and border-top
6. Build feature cards with screenshot containers and text stacks
7. Implement statistics rows with flex alignment and large numerals
8. Add the logo bar with grayscale partner marks
9. Polish button states and navigation interactions

### Accessibility
- Ensure ink text on canvas meets WCAG AAA contrast (the near-black on off-white combination exceeds requirements)
- Provide visible focus states for all interactive elements; consider 2px outline offset or background inversion
- Maintain logical heading hierarchy: h1 for hero, h2 for sections, h3 for features
- Product screenshots require alt text describing the depicted functionality, not merely "screenshot"
- Statistics numerals should be readable as text, not rely solely on visual scale for comprehension

## Scope note

This guide covers the Taito.ai homepage landing experience including hero, feature sections, statistics, and navigation. Pricing pages, blog templates, authentication flows, and mobile menu interactions are not represented in the supplied material. Motion, hover states, and form validation patterns are not documented. The Applesystem family appears in extracted data as a 14px fallback in unknown regions but is not part of the intentional design system. The 102.5px margin value appears in extracted data but should be normalized to standard container widths in production implementations.
