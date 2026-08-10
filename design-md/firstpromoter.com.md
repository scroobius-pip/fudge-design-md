# How firstpromoter.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/firstpromoter.com-design)

Last updated: 2026-08-10

## Captured pages

[![FAQ section with accordion questions, light blue-gray background, and a white contact card with blue action button](https://pin.fontofweb.com/7706?format=jpg)](https://design.withfudge.com/share/pin-7706)

[FAQ section with accordion questions, light blue-gray background, and a white contact card with blue action button](https://design.withfudge.com/share/pin-7706)

[![Feature section showing subscription billing UI with commissions table, status tabs, and dark circular icons on light background](https://pin.fontofweb.com/7705?format=jpg)](https://design.withfudge.com/share/pin-7705)

[Feature section showing subscription billing UI with commissions table, status tabs, and dark circular icons on light background](https://design.withfudge.com/share/pin-7705)

[![Product capabilities section with four feature columns and dashboard screenshots showing analytics charts and reporting interface](https://pin.fontofweb.com/7704?format=jpg)](https://design.withfudge.com/share/pin-7704)

[Product capabilities section with four feature columns and dashboard screenshots showing analytics charts and reporting interface](https://design.withfudge.com/share/pin-7704)

[![Dark case study carousel with neon green badge, statistics cards, and testimonial quote with navigation arrows](https://pin.fontofweb.com/7703?format=jpg)](https://design.withfudge.com/share/pin-7703)

[Dark case study carousel with neon green badge, statistics cards, and testimonial quote with navigation arrows](https://design.withfudge.com/share/pin-7703)

## Overview

FirstPromoter's marketing site presents a modern SaaS aesthetic built around clarity and trust. The design alternates between expansive light backgrounds and immersive dark sections, using a restrained palette of deep navy ink, crisp white surfaces, and a single vibrant blue accent. The visual system prioritizes readability through generous line heights and careful weight differentiation in Inter, while product screenshots and dashboard mockups provide concrete proof of capability. Rounded corners appear consistently across buttons, cards, and containers, softening the technical subject matter into an approachable interface. The overall impression is of polished enterprise software that balances density of information with breathable whitespace.

## Colors

The color system operates in two primary modes: a light mode for the majority of the marketing experience, and a dark mode reserved for high-impact sections like case studies and testimonials.

| token | value | use |
|---|---|---|
| ink | #021A31 | Primary headings, body text, and strong emphasis on light backgrounds |
| ink-secondary | #475569 | Supporting descriptions, captions, and de-emphasized content |
| canvas | #F7F8FE | Default page background, creating subtle warmth against pure white |
| surface | #FFFFFF | Cards, elevated panels, and content containers |
| surface-elevated | #EDF4FF | Soft blue-tinted backgrounds for feature highlights and gradient targets |
| accent-blue | #2497F3 | Primary action buttons, links, and interactive highlights |
| accent-blue-light | #42A5F5 | Hover states, secondary buttons, and decorative UI elements |
| accent-green | #7BB33B | Success indicators, positive commission values, and status confirmations |
| accent-orange | #FF9D0A | Warning states and attention markers in dashboard interfaces |
| dark-surface | #0C1316 | Deep background for case study cards and immersive sections |
| dark-ink | #B4BCD0 | Muted text on dark backgrounds, maintaining readability without harsh contrast |
| border-subtle | #EFF5FF | Hairline dividers and section separators |
| border-light | #F3F4FE | Very subtle boundaries for nested containers |

The light mode dominates the experience, with #F7F8FE canvas providing a barely perceptible warmth that distinguishes content areas from pure white cards. The dark mode (#0C1316) creates dramatic contrast for social proof and case studies, where statistics and testimonials gain prominence. Blue accents remain consistent across both modes, anchoring brand recognition. Gradients between #EDF4FF and #EFF5FF appear in feature backgrounds, adding depth without visual noise.

## Typography

The typographic system relies on Inter for all marketing content, with DM Sans 9 Pt reserved exclusively for button labels. System-Sansserif appears in the design facts as a detected family but is not visibly used for rendered marketing text in the supplied images; it may serve fallback or system-ui purposes in the underlying implementation. The hierarchy is established through size and weight rather than family variation, creating a cohesive reading experience.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3.375rem | 600 | 1.2 | -0.03em | Page headlines and major section titles |
| section-display | Inter | 2.5rem | 600 | 1.5 | 0 | Secondary headings and feature section titles |
| body | Inter | 1.125rem | 400 | 1.5 | 0.01em | Primary body copy and descriptions |
| body-secondary | Inter | 1rem | 400 | 1.6 | 0 | Dense information, captions, and UI labels |
| label | Inter | 1rem | 600 | 1.05 | 0 | Navigation items, accordion triggers, and strong inline text |
| navigation | Inter | 1.125rem | 500 | 1 | 0 | Menu items and header links |
| stat-number | Inter | 2.5rem | 600 | 1.2 | 0 | Large statistics and metric displays |
| button-text | DM Sans 9 Pt | 1.125rem | 700 | 1.111 | 0 | Primary call-to-action buttons |

The 54px hero size with tight -1.62px tracking creates commanding presence for main headlines, while the 40px section display offers slightly more relaxed proportions for subordinate content. Body text at 18px with 27px line height ensures comfortable reading across long descriptions. The DM Sans 9 Pt button treatment at 18px with bold weight provides distinct tactile presence for interactive elements. Verify licensing for these families before production use.

## Layout

The layout follows a generous centered container model with substantial horizontal padding. Sections stack vertically with consistent rhythm, alternating between full-bleed colored backgrounds and contained content widths.

The base grid uses a 2px relative unit, with major spacing values derived from this foundation. Section vertical padding typically measures 80px (5rem), with horizontal padding at 112px (7rem) for desktop viewports. This creates wide, comfortable reading margins that frame content without constraining it excessively.

Content areas employ a flexible column system. Feature descriptions often appear in three or four equal columns with 24px gaps between them. Cards and elevated surfaces use internal padding of 56px for large promotional panels, or 12px-18px for compact UI elements. The FAQ section demonstrates an asymmetric two-column layout, with the accordion occupying roughly 60% width and the contact card filling the remainder.

Dashboard screenshots and product imagery break the container bounds, extending toward viewport edges to create visual immersion. These elements sit within rounded containers (16px radius) with subtle shadow treatments, simulating the depth of actual application interfaces.

## Visual language

The visual language communicates reliability through restraint and precision. Rounded corners appear universally—40px for large promotional cards, 16px for medium containers, 8px for small elements, and 6px for compact UI components. This consistent rounding softens the technical nature of affiliate marketing software into approachable, consumer-friendly surfaces.

Iconography uses simple geometric shapes in filled dark circles, creating visual anchors for feature descriptions. These icons sit above text blocks in a vertical rhythm, establishing clear scan patterns.

Product screenshots dominate the middle sections of the page, showing actual dashboard interfaces with realistic data. These are presented at slight angles or within device frames, adding dimensional interest to flat layouts. The screenshots use the site's own color system, creating visual continuity between marketing promise and product reality.

The dark case study section introduces a dramatic shift: deep charcoal backgrounds with neon green badges, white headlines, and muted gray body text. Statistics appear in large white numerals within subtle bordered cards, creating focal points that reward attention. Navigation arrows sit at the vertical center of this carousel, inviting exploration.

## Components

### Primary button

- **Anatomy**: Rounded rectangle with centered text label
- **Surface**: Solid `{colors.accent-blue}` background
- **Typography**: `{typography.button-text}` in white (#FFFFFF)
- **Shape**: `{rounded.small}` border radius, or `{rounded.large}` for pill-shaped variants
- **Spacing**: 18px vertical padding, 48px horizontal padding for large variant; 14px vertical, 32px horizontal for compact variant
- **Composition**: Full-width on mobile, intrinsic width on desktop

### Feature card

- **Anatomy**: Icon circle, headline, and description stacked vertically
- **Surface**: Transparent on light backgrounds; subtle `{colors.surface-elevated}` gradient for highlighted states
- **Typography**: `{typography.label}` for headline, `{typography.body-secondary}` for description
- **Shape**: No border radius on the card itself; 100% circular icon containers
- **Spacing**: 20px between icon and headline, 16px between headline and description
- **Composition**: Equal-width columns in a row, or stacked on narrow viewports

### Accordion item

- **Anatomy**: Question trigger with expand/collapse indicator, optional answer panel
- **Surface**: Transparent with bottom border in `{colors.border-subtle}`
- **Typography**: `{typography.label}` for question text in `{colors.ink}`
- **Shape**: Full-width, no border radius
- **Spacing**: 24px vertical padding per item, with plus icon aligned to right edge
- **Composition**: Stacked vertically in a single column; answer text uses `{typography.body-secondary}` in `{colors.ink-secondary}`

### Case study card

- **Anatomy**: Badge, company logo, headline, quote, attribution, statistics grid, and action button
- **Surface**: `{colors.dark-surface}` background with subtle inner shadows
- **Typography**: White `{typography.section-display}` for headline, `{typography.body}` in `{colors.dark-ink}` for quote, `{typography.stat-number}` for metrics
- **Shape**: `{rounded.large}` border radius for outer card; `{rounded.medium}` for inner statistic panels
- **Spacing**: 112px top padding, 40px bottom padding, 56px internal padding for statistics
- **Composition**: Two-column layout with text left and statistics right; navigation arrows positioned at vertical center, outside card bounds

### Contact card

- **Anatomy**: Centered headline, supporting text, and action button
- **Surface**: `{colors.surface}` with subtle shadow
- **Typography**: `{typography.section-display}` for headline, `{typography.body}` for description
- **Shape**: `{rounded.medium}` border radius
- **Spacing**: Generous internal padding creating breathing room around content
- **Composition**: Centered text alignment, button centered below

## Responsive behavior

The design maintains its character across viewport widths through proportional scaling and strategic reflow. The wide 112px horizontal padding reduces on smaller screens, likely collapsing to 24px or 32px for tablet and mobile viewports. Multi-column feature grids stack to single columns, preserving vertical rhythm.

The case study carousel likely becomes swipeable on touch devices, with navigation arrows hidden or repositioned. Dashboard screenshots may scale down or switch to static representations rather than detailed views.

Typography scales down proportionally: the 54px hero becomes approximately 40px on tablet and 32px on mobile, while maintaining weight and tracking characteristics. Body text remains at 18px where readable, or drops to 16px for very narrow screens.

Buttons expand to full width on mobile for touch accessibility, while remaining inline-block on desktop. The FAQ accordion and contact card stack vertically, eliminating the asymmetric two-column layout.

## Practical implementation guidance

### Preserve
- The generous whitespace and wide horizontal margins; this breathing room is essential to the premium feel
- The consistent rounding scale: 40px for hero cards, 16px for containers, 8px for buttons, 6px for small UI
- The two-mode color system with light default and dark immersive sections
- Inter's weight hierarchy: 600 for headings, 400 for body, 500 for navigation
- The blue accent as the sole interactive color, maintaining clear affordance

### Avoid
- Introducing additional font families beyond Inter and DM Sans 9 Pt
- Using pure black (#000000) for text; the navy #021A31 provides warmth and reduces eye strain
- Flattening the case study section to light background; the dark mode creates necessary contrast and drama
- Overcrowding feature descriptions; the current three-column layout requires concise copy
- Removing the subtle gradients in feature backgrounds; they add depth without distraction

### Recommended build order
1. Establish the color tokens and typography scale in CSS custom properties
2. Build the section container with 80px/112px padding and max-width constraints
3. Implement the hero section with 54px Inter headlines and 18px body
4. Create the primary button component with DM Sans 9 Pt labels and 8px radius
5. Build feature grids with icon circles and stacked text
6. Implement the dark case study card with statistics grid
7. Add the FAQ accordion with border separators and plus indicators
8. Polish with gradient backgrounds and subtle shadows on elevated surfaces

### Accessibility
- Ensure the #2497F3 blue on white meets WCAG AA contrast for normal text; it may need darkening for small sizes
- The dark section's #B4BCD0 on #0C1316 should be verified for sufficient contrast
- Accordion triggers require keyboard focus states and ARIA expanded attributes
- Case study carousel needs pause controls and swipe alternatives for keyboard users
- Dashboard screenshots require descriptive alt text or adjacent textual equivalents

## Scope note

This guide covers the FirstPromoter marketing homepage including hero, feature descriptions, product screenshots, case studies, FAQ, and contact sections. Pricing pages, documentation, authentication flows, and the actual application dashboard are not represented in the supplied material. Mobile breakpoint behavior and animation specifications are inferred from desktop layouts and should be validated during implementation.
