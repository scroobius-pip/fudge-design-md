# How kobbe.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/kobbe.io-design)

Last updated: 2026-08-10

## Captured pages

[![Promotional modal overlay with serif headline, coral accent word, and dark action button on light background](https://pin.fontofweb.com/10175?format=jpg)](https://design.withfudge.com/share/pin-10175)

[Promotional modal overlay with serif headline, coral accent word, and dark action button on light background](https://design.withfudge.com/share/pin-10175)

[![Hero section with heatmap visualization frame, serif display typography, and multi-column footer on dark background](https://pin.fontofweb.com/10123?format=jpg)](https://design.withfudge.com/share/pin-10123)

[Hero section with heatmap visualization frame, serif display typography, and multi-column footer on dark background](https://design.withfudge.com/share/pin-10123)

[![FAQ section with italic serif heading, accordion items with chevron indicators, and muted body text on dark background](https://pin.fontofweb.com/10122?format=jpg)](https://design.withfudge.com/share/pin-10122)

[FAQ section with italic serif heading, accordion items with chevron indicators, and muted body text on dark background](https://design.withfudge.com/share/pin-10122)

[![Pricing comparison table with italic serif column headers, checkmark indicators, and alternating row surfaces on dark background](https://pin.fontofweb.com/10121?format=jpg)](https://design.withfudge.com/share/pin-10121)

[Pricing comparison table with italic serif column headers, checkmark indicators, and alternating row surfaces on dark background](https://design.withfudge.com/share/pin-10121)

## Overview

Kobbe's visual identity centers on a dramatic dark-mode foundation with near-black surfaces that let coral and warm accent colors command attention. The design pairs an elegant italic serif display typeface—Lt Remark—with the utilitarian clarity of Inter for all body and interface text. This combination creates a sophisticated tension between editorial personality and technical credibility appropriate for a privacy-focused analytics product. The page structure moves visitors through a narrative arc: a data-visualization hero establishing product purpose, feature explanations with supporting imagery, interactive pricing comparisons, and a collapsible FAQ section. Throughout, generous vertical spacing and restrained horizontal margins keep the composition breathable while maintaining focus on the content. The system supports both dark and light contexts, with a promotional modal demonstrating the light-canvas variant.

## Colors

| token | value | use |
|---|---|---|
| canvas | #0A0A0A | Primary page background, near-black foundation |
| surface | #171717 | Card backgrounds, elevated panels, footer sections |
| surface-elevated | #262626 | Hover states, active accordion rows, pricing table alternates |
| ink | #FAFAFA | Primary text on dark backgrounds, headings, body copy |
| muted-ink | #A1A1A1 | Secondary descriptions, captions, footer links |
| border | #808080 | Dividers, accordion borders, subtle separators |
| action | #FE644E | Coral accent for highlights, checkmarks, promotional emphasis |
| action-hover | #00AA6F | Secondary accent, success states, hover feedback |
| light-canvas | #FAFAFA | Modal overlays, light-theme surfaces |
| light-ink | #171717 | Text on light backgrounds, modal headings |
| light-muted | #808080 | Descriptions on light backgrounds |

The color system operates in two modes. The dominant dark mode uses canvas as the foundation, with surface and surface-elevated creating depth through subtle lightness increases. Ink provides high-contrast readability, while muted-ink handles supporting information without competing for attention. The coral action color appears sparingly—highlighting key phrases in headlines, marking feature availability with checkmarks, and drawing focus to interactive elements. A secondary green accent supports success states and provides alternative emphasis. The light mode inverts this relationship for modal contexts: light-canvas becomes the ground, with light-ink and light-muted maintaining the same information hierarchy through value rather than hue.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Lt Remark | 3.75rem | 400 | 1 | -0.03em | Hero headlines, major section openings |
| section-display | Lt Remark | 3rem | 400 | 1 | -0.025em | Section headings, FAQ titles, pricing headers |
| body | Inter | 1rem | 400 | 1.5 | 0 | Primary body text, descriptions, paragraphs |
| body-medium | Inter | 1rem | 500 | 1.5 | 0 | Emphasized body, button labels, navigation |
| body-small | Inter | 0.875rem | 400 | 1.43 | 0 | Secondary text, feature descriptions, footer links |
| label | Inter | 0.75rem | 600 | 1.33 | 0 | Category labels, table headers, badges |
| navigation | Inter | 0.875rem | 400 | 1.43 | 0 | Header links, footer navigation |

The typographic system relies on the contrast between Lt Remark's refined italic serifs and Inter's neutral grotesque forms. Lt Remark appears exclusively at display sizes with tight negative tracking, giving headlines an editorial, almost literary quality that distinguishes Kobbe from typical SaaS aesthetics. Inter handles all functional text at weights 400 and 500, with occasional 600 for labels. The 16px base size with 24px line height provides comfortable reading density, while the 14px and 12px steps create clear hierarchy for supporting information. The design also includes Lt Remark-Italic as a distinct variant for specific display treatments, and Applesystem as a system-level fallback. Lt Remark and Lt Remark-Italic are designed by Daniel Lyons and distributed by Lyons Type. Verify licensing for these families before production use.

## Layout

The page employs a centered single-column layout with responsive width constraints. Content containers typically use `margin: 0 auto` with maximum widths that create generous side margins on large viewports—approximately 388px margins on either side at the widest configuration, narrowing to 272px, 192px, or 160px for nested or specialized sections. This creates a reading experience that feels spacious and deliberate rather than edge-to-edge.

Section spacing follows a clear rhythm: major sections receive 80px vertical padding (5rem), with 32px (2rem) separating subsections. The hero section expands this to 112px top padding for additional emphasis. Horizontal padding remains consistent at 32px for content containers, ensuring text never touches viewport edges.

The header uses a floating treatment with 16px vertical padding and 32px horizontal padding, maintaining the same centered margin constraints as content sections. Navigation links sit within a flex container with 32px gaps between items.

Grid structures appear in the pricing comparison table, using implicit row groups with alternating surface treatments. Feature cards and pricing tiers employ single-column stacks on mobile, expanding to multi-column arrangements where content density demands it. The FAQ section uses full-width accordion items with internal padding of 16px vertical and 20px horizontal.

## Visual language

The visual character balances technical credibility with approachable warmth. The near-black canvas creates a premium, focused environment that makes the coral accent feel intentional rather than aggressive. Data visualization appears as a central motif—the hero frame presents a heatmap grid in coral, amber, and cream tones that both demonstrates product capability and provides visual interest.

Typography drives personality more than decoration. Lt Remark's italic serifs in headlines create an editorial voice that suggests thoughtfulness about privacy and data ethics. The absence of heavy gradients, glassmorphism, or complex shadows keeps the aesthetic grounded and performant.

Iconography uses simple geometric forms—chevrons for accordion expansion, checkmarks for feature availability, arrows for call-to-action buttons. These remain in the ink or action colors without additional styling. The checkmark in pricing tables uses the coral action color, creating a consistent visual reward pattern across the page.

Border treatments are minimal and functional: 1px solid borders in the muted gray range separate accordion items and table rows. Cards and elevated surfaces use subtle border-radius values—14px for major panels, 10px for medium cards, 8px for buttons—creating softness without excessive roundness.

## Components

### Primary button

- **Anatomy**: Text label with optional trailing arrow icon, contained within a rounded rectangle
- **Surface**: Light-canvas background with light-ink text; in dark contexts, may invert to surface background with ink text
- **Typography**: body-medium token, weight 500
- **Shape**: 8px border radius, 1px solid border matching background
- **Spacing**: 12px horizontal padding, 8px gap between text and icon
- **Composition**: Flex row with centered alignment
- **States**: Default shows solid fill; hover likely shifts background toward surface-elevated or introduces subtle shadow

### Secondary button / Pill

- **Anatomy**: Text label with optional icon, fully rounded ends
- **Surface**: Transparent or surface background with border
- **Typography**: body-small or label token
- **Shape**: 9999px border radius for pill appearance
- **Spacing**: 12px horizontal padding, 8px internal gap
- **Composition**: Inline-flex, often appearing in groups with 8px gaps

### Feature card

- **Anatomy**: Container with optional icon, heading, and description text
- **Surface**: surface or surface-elevated background, 14px border radius
- **Typography**: Heading uses section-display or body-medium; description uses body-small in muted-ink
- **Spacing**: 32px padding, 16px gap between elements
- **Composition**: Vertical stack, often arranged in grids with 24px gaps

### Accordion item

- **Anatomy**: Trigger row with question text and chevron icon, expandable answer region
- **Surface**: Transparent background, separated by 1px border-top in border color
- **Typography**: Question uses body-medium in ink; answer uses body-small in muted-ink
- **Spacing**: 16px vertical padding, 20px horizontal padding; 4px margin-top for answer paragraph
- **Composition**: Full-width block with flex row trigger and block answer
- **States**: Collapsed shows chevron pointing down; expanded shows chevron pointing up with answer revealed

### Pricing table row

- **Anatomy**: Feature description cell with tier comparison cells containing values or checkmarks
- **Surface**: Alternating transparent and surface-elevated backgrounds for row groups; category headers use surface background
- **Typography**: Feature name in body-small; tier values in body-medium; category labels in label token with uppercase treatment
- **Spacing**: 16px vertical padding, 20px horizontal padding in cells; 48px gap between major row groups
- **Composition**: CSS grid with flexible columns, left-aligned feature descriptions and centered tier values

### Promotional modal

- **Anatomy**: Centered overlay with dismiss button, headline with accent-colored keyword, description, and action button
- **Surface**: Light-canvas background with subtle shadow; dark action button at full width
- **Typography**: Headline uses hero-display in light-ink with action-colored inline text; description uses body-small in light-muted
- **Shape**: 14px border radius for modal container, 4px for action button
- **Spacing**: 16px padding for modal body, 12px horizontal padding for button
- **Composition**: Vertical stack with centered text alignment

## Responsive behavior

The layout narrows gracefully as viewport width decreases. The widest content margins (388px each side) suggest a large-desktop breakpoint above 1440px. At standard desktop widths, margins likely compress to 160px or 80px depending on section complexity. The pricing table, visible with three tiers, would require horizontal scroll or stacked presentation below approximately 900px.

Typography scales down modestly: the 60px hero display in promotional contexts may reduce to 48px on standard viewports, with section-display holding at 48px. Body text maintains 16px across breakpoints for readability. The FAQ accordion and feature cards remain full-width with consistent internal spacing, relying on reduced external margins rather than structural reorganization.

Navigation collapses to a hamburger menu or simplified link list below desktop breakpoints, though the exact mobile header treatment is not visible in the supplied materials. Touch targets should maintain minimum 44px height for all interactive elements.

## Practical implementation guidance

### Preserve
- The stark contrast between near-black canvas and warm coral accents; this pairing is distinctive and central to brand recognition
- Lt Remark's italic serifs exclusively for display headlines; mixing it into body text would dilute its impact
- Generous vertical spacing between sections; the airy composition is essential to the premium feel
- The alternating row pattern in pricing tables for scannability
- Coral checkmarks as the consistent positive indicator across all feature comparisons

### Avoid
- Adding gradients or complex shadows behind cards; the flat color blocks are intentional
- Using Lt Remark for body text or UI labels; its character is too ornate for small sizes
- Expanding the accent palette beyond coral and green; additional hues would fragment the focused identity
- Edge-to-edge text containers; the wide margins are a defining spatial characteristic
- Borders heavier than 1px; the delicate separations rely on hairline precision

### Recommended build order
1. Establish the dark-mode color tokens and apply canvas background with ink text
2. Implement Inter at 16px base with the full type scale
3. Add Lt Remark with hero-display and section-display tokens, testing tracking at each size
4. Build the centered content container with responsive margin constraints
5. Create the button components with both filled and pill variants
6. Implement the accordion pattern with border separators and chevron rotation
7. Construct the pricing table with alternating row surfaces and checkmark icons
8. Add the promotional modal as a light-mode exception layer

### Accessibility
- Maintain minimum 4.5:1 contrast for all body text; the ink-on-canvas pairing exceeds this significantly
- Ensure coral action elements on dark backgrounds meet 3:1 contrast for large text or UI components
- Provide visible focus indicators for keyboard navigation, likely using the action color as an outline
- Include aria-expanded attributes on accordion triggers and associate answer regions with aria-controls
- Respect reduced-motion preferences for any chevron rotations or accordion height animations

## Scope note

This guide covers the Kobbe landing page including the hero section, feature explanations, pricing comparison, FAQ accordion, footer navigation, and promotional modal. Measurements are derived from the exact values present in the interface. Mobile breakpoints, additional interior pages, dashboard interfaces, and motion specifications are not included. Verify licensing for Lt Remark, Lt Remark-Italic, Inter, and Applesystem before production use.
