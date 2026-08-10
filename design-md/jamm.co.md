# How jamm.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/jamm.co-design)

Last updated: 2026-08-10

## Captured pages

[![Dark hero section with playful envelope and telephone illustrations flanking a centered CTA cluster with pink pill button and outlined secondary button](https://pin.fontofweb.com/6809?format=jpg)](https://design.withfudge.com/share/pin-6809)

[Dark hero section with playful envelope and telephone illustrations flanking a centered CTA cluster with pink pill button and outlined secondary button](https://design.withfudge.com/share/pin-6809)

[![Light cream FAQ accordion section with large Ginka heading, dark question rows, and pink chevron indicators on a warm neutral background](https://pin.fontofweb.com/6808?format=jpg)](https://design.withfudge.com/share/pin-6808)

[Light cream FAQ accordion section with large Ginka heading, dark question rows, and pink chevron indicators on a warm neutral background](https://design.withfudge.com/share/pin-6808)

[![Dark comparison table panel with cream Jamm feature card, green checkmarks, pink X marks, and centered pink CTA pill button](https://pin.fontofweb.com/6807?format=jpg)](https://design.withfudge.com/share/pin-6807)

[Dark comparison table panel with cream Jamm feature card, green checkmarks, pink X marks, and centered pink CTA pill button](https://design.withfudge.com/share/pin-6807)

[![Light services showcase with massive Ginka display type for Branding, Web Design, and Product in rounded cream cards on warm background](https://pin.fontofweb.com/6806?format=jpg)](https://design.withfudge.com/share/pin-6806)

[Light services showcase with massive Ginka display type for Branding, Web Design, and Product in rounded cream cards on warm background](https://design.withfudge.com/share/pin-6806)

## Overview

Jamm presents a design-subscription service with a visual personality that balances premium professionalism and approachable playfulness. The system operates on a warm-cool duality: expansive cream backgrounds create an inviting, editorial atmosphere for content sections, while deep navy panels deliver high-contrast impact for calls-to-action and comparative messaging. Bold, tightly-tracked Ginka display typography dominates headlines at massive scale, giving the brand an assertive, confident voice. Instrument Sans provides the rational, readable counterpoint for body copy and functional labels. A single energetic pink accent punctuates the restrained palette, appearing exclusively in primary buttons, status indicators, and interactive chevrons. The overall impression is of a service that takes design seriously without taking itself too seriously—reinforced by friendly illustrated characters that appear in key conversion moments.

## Colors

| token | value | use |
|---|---|---|
| ink | #353148 | Primary text on light backgrounds, service card headings |
| ink-deep | #171523 | Darkest text, hero backgrounds, comparison panels |
| canvas | #F0ECE0 | Warm cream page background, primary surface |
| surface | #F5F5F5 | Card fills, elevated content areas, light panels |
| surface-warm | #CBC7C2 | Subtle borders, dividers, disabled states |
| accent | #EE4D87 | Primary buttons, active indicators, chevron icons, status marks |
| muted | #9B9B9B | Secondary body text, captions, footer links |
| light | #B8B5C6 | Tertiary text, placeholder content |
| white | #F5F5F5 | Text on dark backgrounds, button labels |
| black | #000000 | Deep backgrounds, maximum contrast regions |

The color system alternates between two dominant modes. Light mode fills the viewport with warm canvas and surfaces content on slightly lighter or white cards. Dark mode inverts this relationship, placing ink-deep behind white and accent typography. The accent pink is disciplined in its application—reserved for conversion actions and positive/negative status indicators (green checkmarks and pink X marks in the comparison table). No gradients or shadows appear in the interface; all depth comes from color blocking and generous whitespace.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Ginka | 7.5rem | 700 | 1 | -0.03em | Hero headlines, massive statements |
| section-display | Ginka | 6.125rem | 700 | 1 | -0.02em | Service category titles, large section headers |
| heading-large | Ginka | 2rem | 700 | 1.1 | normal | FAQ questions, subsection titles |
| heading-medium | Ginka | 1.5rem | 600 | 1.1 | normal | Comparison row labels, medium emphasis |
| body | Instrument Sans | 1.125rem | 400 | 1.4 | normal | Primary body copy, descriptions |
| body-large | Instrument Sans | 1.5rem | 400 | 1.4 | normal | Hero descriptions, lead paragraphs |
| label | Ginka | 1rem | 500 | 1.575 | 0.03125em | Button labels, navigation, tags |
| caption | Instrument Sans | 0.875rem | 400 | 1.8 | normal | Fine print, footer text, metadata |

Ginka, designed by Julie Soudanne and distributed by Lift Type, supplies all display and label typography with weights from Book through Bold. Its distinctive character shapes—particularly the flowing 'J' and generous counters—give Jamm immediate brand recognition at large sizes. Instrument Sans, designed by Rodrigo Fuenzalida and distributed by Frag Type, handles all functional reading text with clean, neutral forms. Droid Sans Bold appears in a single utility context at 32px. Verify licensing for these families before production use.

## Layout

The layout follows a centered, contained model with generous horizontal margins. Content lives within a max-width container that creates breathing room on either side of the viewport. Sections stack vertically with substantial vertical rhythm, typically separated by 6.25rem or more. The grid is fundamentally single-column for editorial content, expanding to asymmetric multi-column arrangements for comparison tables and service showcases.

Horizontal page margins are set at 152.5px on desktop, creating an elegant frame that keeps content from touching viewport edges. Internal content uses 20px padding for text blocks. Card-based components receive 32px to 48px internal padding, with larger cards using 64px top padding and 80px bottom padding for visual weight.

The comparison table breaks the single-column convention with a structured grid: a fixed left column for feature labels, a highlighted center card for Jamm's offering, and three equal columns for competitor comparisons. This creates a natural reading flow that guides the eye to the emphasized solution.

Service cards stack vertically with consistent 1.25rem gaps between them, each card filling the content width. The massive display type within each card is left-aligned with generous internal padding, creating a gallery-like presentation where the typography itself becomes the visual content.

## Visual language

Illustration style is flat, friendly, and character-driven. Anthropomorphized objects—an envelope with eyes and a telephone with a face—appear at large scale flanking conversion areas. These characters use the brand's core colors: cream fills, ink outlines, and pink accents for mouths and details. The style is deliberately simple, almost sticker-like, with thick outlines and minimal shading.

Iconography is reduced to functional geometric marks: chevrons for accordion states, checkmarks and X marks for comparison tables. These use the accent pink and a complementary green for positive indicators, maintaining the two-color status system.

Photography does not appear in the visible interface; the visual system relies entirely on typography, illustration, and color blocking. This reinforces the brand's focus on design craft rather than stock imagery.

The absence of shadows, gradients, or glassmorphism effects gives the interface a flat, confident materiality. Depth is achieved through scale contrast, color temperature shifts between cream and navy, and the physical presence of rounded cards against open backgrounds.

## Components

### Primary action button

- **Anatomy**: Text label centered within a fully rounded pill container
- **Surface**: Solid accent pink background with white text
- **Typography**: Ginka Medium at 1rem, letter-spaced for clarity
- **Shape**: 100px border radius creating a complete pill
- **Spacing**: 1rem vertical padding, 2.5rem horizontal padding
- **Composition**: Appears singly or paired with a secondary outline button

### Secondary action button

- **Anatomy**: Text label centered within a transparent pill with border
- **Surface**: Transparent background, 2px solid white border, white text
- **Typography**: Ginka Medium at 1rem
- **Shape**: 100px border radius matching primary button
- **Spacing**: Identical padding to primary for visual pairing
- **Composition**: Positioned adjacent to primary button with 1.25rem gap

### Service card

- **Anatomy**: Full-width rounded rectangle containing large display text
- **Surface**: Light surface color on warm canvas background
- **Typography**: Ginka Bold at 6.125rem, ink color, tight leading
- **Shape**: 1.25rem border radius
- **Spacing**: 3rem internal padding, generous vertical margins between cards
- **Composition**: Vertically stacked list, each card clickable to expand

### Comparison panel

- **Anatomy**: Dark rounded container with embedded feature card and comparison grid
- **Surface**: Ink-deep background with cream card highlight
- **Typography**: Section heading in Ginka Bold at 6.125rem white; body in Instrument Sans at 1.125rem; feature labels in Ginka Bold at 2rem
- **Shape**: 1.875rem outer radius for panel, 1.25rem for inner card
- **Spacing**: 3rem panel padding, structured grid with 48px column gaps
- **Composition**: Centered heading and description above asymmetric table; Jamm column emphasized with cream card treatment

### Comparison status indicator

- **Anatomy**: Circular badge containing checkmark or X mark
- **Surface**: Green for positive, accent pink for negative
- **Shape**: Perfect circle, approximately 1.5rem diameter
- **Composition**: Centered within table cells, aligned to feature rows

### FAQ accordion

- **Anatomy**: Question row with expandable answer area
- **Surface**: Transparent on canvas background
- **Typography**: Question in Ginka Bold at 2rem ink; answer in Instrument Sans at 1.125rem muted
- **Shape**: No border radius on rows; full-width horizontal divider between items
- **Spacing**: 1.5rem vertical padding per row
- **Composition**: Chevron indicator right-aligned, rotates to indicate state; answer text appears below with top margin

### Navigation link

- **Anatomy**: Text label with optional background highlight
- **Surface**: Transparent or accent pink background for active/featured state
- **Typography**: Ginka Bold at 1.125rem for primary nav; Ginka Medium at 1rem for secondary
- **Shape**: 100px radius for highlighted pill states
- **Spacing**: 0.625rem vertical, 1.875rem horizontal padding

## Responsive behavior

The design is authored for desktop viewport widths with generous fixed margins. At narrower widths, the 152.5px horizontal margins should reduce proportionally, transitioning to 20px minimum padding on mobile. The massive display type scales down in stepped increments: hero-display reduces to 4rem on tablet and 2.5rem on mobile, maintaining legibility without reflowing awkwardly.

The comparison table requires the most significant adaptation. On viewports below 768px, the five-column grid should collapse to a stacked card presentation, with each competitor becoming a full-width comparison card and Jamm's features repeated for context.

Service cards maintain their full-width behavior across breakpoints, with internal padding reducing from 3rem to 1.5rem on mobile. The display typography within scales to 3rem on tablet and 2rem on mobile.

FAQ accordions remain structurally identical across breakpoints, with question text scaling down and chevron touch targets expanding to 44px minimum.

## Practical implementation guidance

### Preserve
- The warm cream versus deep navy section alternation; this temperature shift defines the brand rhythm
- Ginka's massive scale and tight tracking in headlines; the type is the primary visual element
- The disciplined single-accent color system; pink appears only in interactive and status contexts
- Pill-shaped buttons with generous horizontal padding; the 100px radius is a brand signature
- Flat illustration style with thick outlines and minimal detail

### Avoid
- Adding drop shadows or gradients; the system achieves hierarchy through color and scale alone
- Using Ginka for body text or long paragraphs; its character is too distinctive for extended reading
- Introducing additional accent colors; the pink-green status pairing is intentionally limited
- Stretching cards or buttons to full viewport width on desktop; the contained margins are essential to the premium feel
- Using photography in place of illustration; the handmade character art is a differentiator

### Recommended build order
1. Establish the color tokens and background alternation pattern
2. Implement Ginka at display sizes with correct tracking and line height
3. Build the pill button system with primary and secondary variants
4. Create the service card component with massive internal typography
5. Construct the comparison table with status indicators and responsive collapse
6. Add FAQ accordion with chevron state management
7. Integrate flat illustrations in hero and conversion sections

### Accessibility
- Ensure the accent pink (#EE4D87) on white meets WCAG AA contrast for text; at 1rem it may need darkening for small labels
- The ink-deep background with white text provides excellent contrast; maintain this pairing for critical content
- Ginka's display sizes should not be used below 1.5rem for body reading
- Chevron indicators in the FAQ need aria-expanded state and keyboard activation
- Comparison table status indicators require text alternatives or aria-labels for screen reader context

## Scope note

This guide covers the homepage and primary landing surfaces of jamm.co, including the hero, services showcase, comparison table, and FAQ sections. Pricing pages, checkout flows, account dashboards, and mobile navigation patterns are not represented in the supplied material. Measurements are exact where retained and practical adaptation targets where rounded to the 2px relative unit.
