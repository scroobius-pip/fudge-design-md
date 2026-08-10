# How usepylon.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/usepylon.com-design)

Last updated: 2026-08-10

## Captured pages

[![FAQ accordion section with light warm-gray background, purple circular toggle icons, and left-aligned section heading](https://pin.fontofweb.com/1698?format=jpg)](https://design.withfudge.com/share/pin-1698)

[FAQ accordion section with light warm-gray background, purple circular toggle icons, and left-aligned section heading](https://design.withfudge.com/share/pin-1698)

[![Feature comparison table with white and soft blue column backgrounds, black checkmark circles, and expandable section header](https://pin.fontofweb.com/1697?format=jpg)](https://design.withfudge.com/share/pin-1697)

[Feature comparison table with white and soft blue column backgrounds, black checkmark circles, and expandable section header](https://design.withfudge.com/share/pin-1697)

[![Channels capability matrix showing three pricing tiers with alternating white and pale blue column fills and black check indicators](https://pin.fontofweb.com/1696?format=jpg)](https://design.withfudge.com/share/pin-1696)

[Channels capability matrix showing three pricing tiers with alternating white and pale blue column fills and black check indicators](https://design.withfudge.com/share/pin-1696)

[![Three-tier pricing cards with purple Most Popular badge, black filled primary CTA, and social proof logo bar below](https://pin.fontofweb.com/1695?format=jpg)](https://design.withfudge.com/share/pin-1695)

[Three-tier pricing cards with purple Most Popular badge, black filled primary CTA, and social proof logo bar below](https://design.withfudge.com/share/pin-1695)

## Overview

Pylon's design system presents a disciplined, engineering-forward aesthetic that communicates reliability and precision. The visual language centers on generous whitespace, a single lightweight type family, and a near-monochromatic palette punctuated by strategic purple accents. Every surface feels intentionally calm—warm off-whites replace stark white, creating a subtle material quality that softens the technical subject matter. The system avoids decorative excess; instead, confidence emerges from exact alignment, consistent geometric proportions, and the confident use of negative space. Pricing and feature comparison pages demonstrate how the same restrained vocabulary scales across complex information hierarchies, from hero price displays to dense capability matrices. The overall impression is of a tool built for teams who value clarity over persuasion, where the design's job is to present information so cleanly that decision-making feels effortless.

## Colors

The palette is intentionally narrow, deriving its character from temperature and proportion rather than variety. Warm off-white surfaces dominate, with black serving as the primary structural color and a single purple providing interactive accent. The system avoids gradients, shadows, and decorative color fields.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, active buttons, checkmark fills, borders, and structural lines |
| canvas | #FAFAF8 | Page background, FAQ section fills, and warm neutral ground |
| surface | #FFFFFF | Card backgrounds, table cells, and content panels |
| surface-highlight | #EEF0FE | Featured pricing tier column, selected state backgrounds |
| accent | #6B21A8 | FAQ toggle icons, feature checkmarks, tab active states, and "Most Popular" badge |
| muted | #6B7280 | Secondary text, disabled states, and subtle borders |

The warm canvas tone distinguishes Pylon from cooler generic SaaS aesthetics. Black ink provides maximum contrast for readability and authority. The pale blue-violet of surface-highlight appears only in functional contexts—specifically to elevate the recommended pricing tier in comparison tables. Purple accent remains sparing: it signals interactivity in closed accordion states and validates selection in feature lists, but never overwhelms the monochrome foundation. No dark mode variant is visible in the supplied material.

## Typography

The system employs a single type family, Matter, in a light weight that creates an airy, contemporary voice. Display sizes use tight negative tracking to feel engineered and precise, while body text relaxes into neutral proportions for extended reading. The light weight is a deliberate character choice, making headlines feel approachable rather than imposing.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Matter | 4rem | 300 | 1 | -0.03em | Page headlines, major section titles |
| section-display | Matter | 2.5rem | 300 | 1.1 | -0.02em | Section headings, pricing page titles |
| price-display | Matter | 3.5rem | 300 | 1 | -0.02em | Dollar amounts in pricing cards |
| body-large | Matter | 1.25rem | 400 | 1.4 | 0 | Descriptions, subheadings |
| body | Matter | 1rem | 400 | 1.5 | 0 | Paragraph text, feature lists, table content |
| label | Matter | 0.875rem | 500 | 1.25 | 0.01em | Buttons, badges, navigation, metadata |

Matter is designed by Martin Vácha and distributed by Displaay. Verify licensing for these families before production use. The light weight (300) is essential to the system's personality; substituting a heavier weight would destroy the delicate balance. No italic styles are employed. Font sizes derive from a 4px base grid, ensuring all type scales to whole-number multiples.

## Layout

The layout system favors centered single-column compositions for narrative content and full-width tables for data-dense comparisons. Maximum content width appears constrained to a readable measure, with generous vertical breathing room between sections.

Page sections stack vertically with section spacing of 6rem, creating clear territorial boundaries without visible dividers. The pricing page demonstrates a three-column card grid with equal-width columns and consistent internal padding of 2rem. Cards align to a shared top edge, with the highlighted tier receiving no size premium—only a background color shift to surface-highlight.

Feature comparison tables use a full-bleed approach within the content area, with rows separated by 1px hairline borders in muted or ink at reduced opacity. The center column (typically the highlighted tier) receives the surface-highlight background, creating a vertical band that guides selection. Checkmark indicators center within their column cells, maintaining visual rhythm across uneven feature availability.

The FAQ section employs an asymmetric two-column layout: a narrow left column carries the section heading, while a wider right column contains the accordion items. This preserves heading visibility while maximizing content width for questions.

## Visual language

Geometric precision defines the visual language. All interactive elements are rectangular—buttons have zero border radius, creating sharp architectural edges that reinforce the technical product positioning. The only curves appear in functional icons: circular toggle buttons for accordions and circular checkmark containers in feature lists.

Iconography is minimal and monochrome. Checkmarks sit in filled black circles with white strokes, creating high-contrast validation markers. Accordion toggles use thin-stroked circles in accent purple, with plus and minus indicators that communicate state change without animation dependency.

Photography and illustration are absent from the supplied pages; the system relies entirely on typographic hierarchy, spacing, and subtle color temperature to create visual interest. The warm canvas background prevents the monochrome palette from feeling clinical.

Borders function as structural hairlines—1px rules in ink or muted separate table rows, card sections, and accordion items. No shadows are employed; depth is suggested solely through background color shifts between canvas, surface, and surface-highlight.

## Components

### Pricing card

- **Anatomy**: Vertical stack with tier name, description, price block, billing terms, CTA button, divider, and feature list
- **Surface**: White background with optional surface-highlight for featured tier; 1px border in muted for standard tiers, none for highlighted
- **Typography**: Tier name uses section-display; price uses price-display with "per seat/mo" in body size beside it; feature list uses body with accent checkmarks
- **Shape**: Zero border radius; sharp rectangular corners
- **Spacing**: 2rem internal padding; 1.5rem gap between major blocks
- **Composition**: Three cards in equal-width grid; highlighted tier centered with "Most Popular" badge positioned absolute at top-right
- **Variants**: Standard (white), Highlighted (surface-highlight with purple badge)

### Primary action button

- **Anatomy**: Text label centered in rectangular container
- **Surface**: Ink background with surface text; no border
- **Typography**: label token, medium weight
- **Shape**: Zero border radius; generous horizontal padding approximately 2.5rem, vertical padding approximately 0.875rem
- **Spacing**: Full-width within card constraints on mobile; fixed width on desktop
- **States**: Only default state visible; hover and focus states should be implemented for accessibility

### Secondary action button

- **Anatomy**: Text label centered in rectangular container
- **Surface**: Surface background with ink text; 1px ink border
- **Typography**: label token, medium weight
- **Shape**: Zero border radius; same padding as primary
- **Composition**: Used for non-featured tiers in pricing grid

### Feature comparison table

- **Anatomy**: Expandable section header with caret icon, followed by rows of feature names and tier availability indicators
- **Surface**: White row backgrounds with alternating surface-highlight center column
- **Typography**: Section header uses section-display with caret; feature names use body; checkmarks are iconographic
- **Shape**: Full-width rows with 1px hairline borders
- **Spacing**: Generous row height approximately 3.5rem; horizontal padding aligns with page margins
- **Composition**: Feature name left-aligned; checkmarks center-aligned in tier columns
- **Variants**: Expanded (rows visible), Collapsed (header only with caret rotated)

### Accordion item

- **Anatomy**: Question text with circular toggle icon; expanded state reveals answer text below
- **Surface**: Transparent over canvas background; 1px border below each item
- **Typography**: Question uses body-large or section-display at smaller scale; answer uses body in muted
- **Shape**: Toggle is perfect circle with thin stroke
- **Spacing**: Approximately 1.5rem vertical padding per item; answer text indented to align with question
- **Composition**: Right-aligned toggle icon; question text left-aligned with generous right margin for icon
- **States**: Closed (plus icon in accent), Open (minus icon in accent, answer visible)

### Badge

- **Anatomy**: Text label in rectangular container
- **Surface**: Accent background with surface text
- **Typography**: label token, medium weight, uppercase or title case
- **Shape**: Small border radius approximately 0.25rem
- **Composition**: Positioned absolute at top edge of parent card, offset slightly right

## Responsive behavior

The supplied images show desktop layouts exclusively. Based on the visual structure, the following responsive adaptations are recommended:

At narrower viewports, the three-column pricing grid should stack to a single column, with the highlighted tier maintaining its position (typically second). Feature comparison tables should allow horizontal scroll or convert to a stacked card pattern where each tier displays as a separate block with its features listed vertically.

FAQ two-column layout should collapse to single column, with the section heading moving above the accordion stack. Typography should scale down proportionally: hero-display and price-display may reduce by 25-30% on mobile to prevent overflow.

The zero-radius button aesthetic should persist across breakpoints; touch targets should maintain minimum 44px height regardless of device.

## Practical implementation guidance

### Preserve
- The warm canvas background against pure white cards; this temperature shift is essential to the system's material quality
- Matter Light (300) for all display text; heavier weights destroy the airy precision
- Zero border radius on all buttons and cards; the sharp geometry is a core brand signal
- The restrained accent usage—purple should feel scarce, never decorative
- Generous whitespace; cramped layouts will read as generic SaaS rather than intentional design

### Avoid
- Adding shadows or elevation effects; the system achieves hierarchy through color and space alone
- Rounding corners on interactive elements; this contradicts the architectural aesthetic
- Using accent purple for large background fills or text blocks; reserve it for small functional indicators
- Substituting the light weight with regular or bold for headlines; the delicacy is intentional
- Cool gray backgrounds; the warm undertone in canvas is specifically calibrated

### Recommended build order
1. Establish the type scale with Matter at root size 16px, confirming light weight availability
2. Implement the color foundation: canvas page background, surface cards, ink text
3. Build the pricing card component with zero-radius buttons and proper internal spacing
4. Create the feature comparison table with alternating column backgrounds
5. Add the accordion pattern with circular toggle icons
6. Polish with the "Most Popular" badge and accent checkmarks

### Accessibility
- Ensure ink on surface and surface-highlight meets WCAG AA contrast ratios (the combination appears to satisfy this)
- The light weight display text should be tested at smaller sizes; consider a minimum font-size threshold or weight bump for body copy below 14px
- Accordion toggles need explicit aria-expanded states and keyboard operability
- Feature comparison tables require proper scope attributes and responsive alternatives for screen readers
- The purple accent on canvas should be verified for contrast if used for interactive text

## Scope note

This guide covers the pricing page and its component patterns as visible in desktop screenshots. Mobile layouts, navigation systems, form interactions, animation, and dark mode variants are not represented in the supplied material. Measurements are practical adaptation targets derived from visual inspection against a 4px base grid. No hover, focus, loading, or error states were captured; implement standard accessible patterns for these.
