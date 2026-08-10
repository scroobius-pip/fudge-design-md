# How withsupafast.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/withsupafast.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large outlined 'Supafast' wordmark, yellow spotlight beam, and centered CTA on black background](https://pin.fontofweb.com/3178?format=jpg)](https://design.withfudge.com/share/pin-3178)

[Hero section with large outlined 'Supafast' wordmark, yellow spotlight beam, and centered CTA on black background](https://design.withfudge.com/share/pin-3178)

[![FAQ accordion with numbered yellow circles, dark cards with rounded borders, and expand/collapse controls](https://pin.fontofweb.com/3177?format=jpg)](https://design.withfudge.com/share/pin-3177)

[FAQ accordion with numbered yellow circles, dark cards with rounded borders, and expand/collapse controls](https://design.withfudge.com/share/pin-3177)

[![White pricing card with yellow 'Velocity Pod' badge, black pill button, and detailed feature checklist](https://pin.fontofweb.com/3176?format=jpg)](https://design.withfudge.com/share/pin-3176)

[White pricing card with yellow 'Velocity Pod' badge, black pill button, and detailed feature checklist](https://design.withfudge.com/share/pin-3176)

[![Three-tier pricing grid with white, yellow, and dark cards showing service tiers and lightning bolt icons](https://pin.fontofweb.com/3175?format=jpg)](https://design.withfudge.com/share/pin-3175)

[Three-tier pricing grid with white, yellow, and dark cards showing service tiers and lightning bolt icons](https://design.withfudge.com/share/pin-3175)

## Overview

Supafast presents a bold, high-contrast visual identity built around the concept of speed and urgency. The design system employs a predominantly black canvas with electric yellow as its singular accent, creating immediate visual impact and clear hierarchy. The aesthetic is deliberately minimal and modern—stripped of decorative elements in favor of strong typography, generous whitespace, and purposeful color blocking. The brand wordmark uses an oversized outlined treatment that dominates the hero, with a dramatic spotlight beam cutting through the letterforms to reinforce the "fast" positioning. This is not a subtle system; it relies on confidence, clarity, and the stark contrast between darkness and light to communicate capability and momentum to startup founders and scale-up teams.

## Colors

The color system is intentionally restrained, using black as the dominant canvas with electric yellow as the primary action and accent color. This creates maximum contrast for readability and immediate visual hierarchy.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, hero sections, footer areas |
| surface | #111111 | Card backgrounds on dark sections, accordion panels |
| surface-elevated | #1a1a1a | Elevated cards, hover states, secondary containers |
| action | #f5e642 | Primary buttons, badges, numbered indicators, spotlight accents |
| action-hover | #e6d73d | Button hover states, interactive yellow elements |
| ink | #ffffff | Primary text on dark backgrounds, headings, body copy |
| muted-ink | #a0a0a0 | Secondary text, descriptions, metadata, FAQ answers |
| border | #333333 | Visible card borders, dividers, accordion outlines |
| border-subtle | #2a2a2a | Subtle separators, inactive states, hairline divisions |

The color philosophy centers on a dark-mode-first approach where the black canvas absorbs attention and the yellow accent directs it. White text maintains crisp readability against the deep backgrounds, while muted gray provides hierarchy without competing for attention. The yellow is warm and energetic rather than cold or neon, giving it a premium rather than aggressive quality. Cards and containers use subtle border tones to define boundaries without breaking the dark continuity of the page.

## Typography

The type system pairs Inter for all display and body text with DM Sans 9 Pt for labels, badges, and button text. This creates a clean, contemporary hierarchy with clear weight distinctions.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 6rem | 700 | 1 | -0.03em | Hero wordmark, massive display headings |
| section-display | Inter | 3rem | 700 | 1.1 | -0.02em | Section headings, FAQ titles, pricing headers |
| body | Inter | 1rem | 400 | 1.6 | 0 | Paragraph text, descriptions, list items |
| body-bold | Inter | 1rem | 700 | 1.6 | 0 | Emphasized body text, outcomes, guarantees |
| label | DM Sans 9 Pt | 0.875rem | 600 | 1.2 | 0.01em | Buttons, badges, tags, category labels |
| navigation | Inter | 0.875rem | 500 | 1.2 | 0 | Navigation links, secondary actions |

Inter appears in Bold (700) and Regular (400) weights, designed by Rasmus Andersson and provided by Rsms. DM Sans 9 Pt appears in Semi Bold (600). Verify licensing for these families before production use. The hero display size creates monumental impact at 6rem, while section headings at 3rem maintain authority without overwhelming. Body text at 1rem with 1.6 line height ensures comfortable reading for longer content. The label style uses DM Sans 9 Pt at 0.875rem with slight positive tracking for clarity at small sizes in buttons and badges.

## Layout

The layout system uses a centered, content-focused approach with generous vertical spacing between sections. The page structure flows from a dramatic full-viewport hero into content sections with contained widths.

The hero section occupies the full viewport height with centered content alignment. The brand wordmark spans nearly the full width, positioned in the upper portion with the outlined treatment creating negative space that interacts with the spotlight graphic. Below the wordmark, a substantial vertical gap separates the display element from the call-to-action cluster, which centers a heading, subheading, and pill button vertically.

Content sections below the hero use a maximum width container, estimated at approximately 75rem based on visual proportions, with consistent horizontal padding of 2rem on each side. The pricing section employs a three-column grid with equal-width cards, each card maintaining internal padding of 2rem. Grid gaps between cards appear to be 1rem, creating tight but distinct separation.

The FAQ section uses a single-column layout with full-width accordion items. Each item contains a numbered circular indicator positioned to the left of the content, with the question text and answer occupying the central space and a toggle control aligned to the right. Vertical spacing between accordion items is approximately 1rem.

Vertical rhythm follows a section spacing of 6rem between major content areas, with internal component gaps of 1rem for related elements. The overall density is moderate—content breathes within its containers, and the dark canvas prevents any sense of emptiness despite the generous spacing.

## Visual language

The visual language communicates velocity and precision through stark contrast, geometric clarity, and minimal decoration. The outlined wordmark treatment in the hero is a signature element—letterforms rendered as strokes rather than fills, creating an architectural quality that feels both substantial and light. The spotlight beam cutting through the letterforms adds dynamic energy and reinforces the "fast" brand promise through its diagonal trajectory.

Iconography is minimal and functional. The lightning bolt appears as a consistent motif in primary action buttons, reinforcing speed without requiring text explanation. Numbered indicators in the FAQ use solid yellow circles with black numerals, creating clear sequence markers that pop against the dark background.

Photography and imagery are absent from the visible interface, replaced by pure typography and color blocking. This editorial approach focuses attention on messaging and conversion actions rather than visual storytelling. The absence of gradients, textures, or decorative patterns keeps the experience direct and uncluttered.

Card surfaces use subtle border definitions rather than shadows for depth, appropriate for the dark theme where shadows would be invisible. The rounded corners on cards (1.5rem) and buttons (pill shape) soften the otherwise geometric precision without becoming playful. The overall impression is of a premium, focused service—confident enough to let content speak without visual noise.

## Components

### Primary Action Button

- **Anatomy**: Text label with optional lightning bolt icon, centered within a pill-shaped container
- **Surface**: Solid yellow background (`{colors.action}`) with black text
- **Typography**: `{typography.label}` — DM Sans 9 Pt, 0.875rem, weight 600
- **Shape**: Full pill border radius (`{rounded.pill}`), height approximately 3.5rem
- **Spacing**: Horizontal padding of 2rem, internal gap of 0.5rem between text and icon
- **Composition**: Centered alignment, icon positioned to the right of text
- **Variants**: Black background variant with white text and yellow icon for secondary emphasis; yellow background with black text for primary emphasis

### Secondary Action Button

- **Anatomy**: Text label with lightning bolt icon, centered within a pill-shaped container
- **Surface**: Black background with white text, subtle border
- **Typography**: `{typography.label}` — DM Sans 9 Pt, 0.875rem, weight 600
- **Shape**: Full pill border radius (`{rounded.pill}`)
- **Spacing**: Horizontal padding of 2rem
- **Composition**: Centered alignment, icon to the right of text
- **Variants**: Used on light card backgrounds (white surface with black button) and dark card backgrounds (elevated surface with border)

### Service Card

- **Anatomy**: Badge header, description text, outcome/guarantee blocks, action button, feature checklist, eligibility note
- **Surface**: Three variants — white (`{colors.ink}`) with black text, yellow (`{colors.action}`) with black text, dark (`{colors.surface}`) with white text
- **Typography**: Badge uses `{typography.label}`; headings use `{typography.section-display}` at reduced scale; body uses `{typography.body}`; bold emphasis uses `{typography.body-bold}`
- **Shape**: `{rounded.card}` (1.5rem) border radius
- **Spacing**: `{spacing.card-padding}` (2rem) internal padding, 1rem vertical gaps between content blocks
- **Composition**: Vertical stack with consistent left alignment; checklist items use checkmark prefix with 0.5rem gap to text
- **Variants**: White card for entry tier, yellow card for featured/mid tier, dark card for premium tier

### FAQ Accordion

- **Anatomy**: Numbered circular indicator, question text, answer text, toggle button
- **Surface**: Dark card background (`{colors.surface}`) with subtle border (`{colors.border-subtle}`)
- **Typography**: Question uses `{typography.section-display}` at reduced scale; answer uses `{typography.body}` in muted color
- **Shape**: `{rounded.card}` (1.5rem) border radius for container items
- **Spacing**: 1rem vertical gap between items, 1.5rem internal padding
- **Composition**: Horizontal layout with number circle (3rem diameter) left-aligned, question text centered in remaining space, toggle button (2.5rem circle) right-aligned
- **States**: Expanded state reveals answer text below question with additional vertical padding; collapsed state shows question only; toggle displays minus (expanded) or plus (collapsed) icon

### Badge/Tag

- **Anatomy**: Text label within a rounded container
- **Surface**: Solid yellow (`{colors.action}`) with black text, or transparent with white text and border
- **Typography**: `{typography.label}` — DM Sans 9 Pt, 0.875rem, weight 600
- **Shape**: `{rounded.badge}` (0.5rem) border radius
- **Spacing**: 0.5rem vertical padding, 1rem horizontal padding
- **Composition**: Inline placement at top of cards, left-aligned
- **Variants**: Filled yellow for primary categorization; outlined for secondary or inactive states

## Responsive behavior

The design should maintain its high-contrast character across viewport sizes while adapting layout density. The three-column pricing grid should collapse to a single column on narrow viewports, with cards stacking vertically and full-width buttons. The hero wordmark should scale down proportionally, potentially reducing to 3rem on mobile to prevent overflow. FAQ accordion items should maintain their horizontal structure but reduce internal padding to 1rem on small screens. The numbered indicators may shrink to 2.5rem diameter on mobile to preserve space for question text. Touch targets for buttons and toggles should maintain minimum 44px height regardless of viewport. Typography should scale down by approximately 25% on mobile, with hero display reducing most dramatically while body text remains at 1rem for readability.

## Practical implementation guidance

### Preserve
- The stark black canvas as the dominant background—this is foundational to the brand's visual impact
- The electric yellow accent for all primary actions and key highlights; do not introduce additional accent colors
- The pill-shaped button treatment with consistent height and generous horizontal padding
- The outlined wordmark treatment in the hero as a signature brand element
- The three-tier pricing structure with distinct surface treatments (white, yellow, dark)

### Avoid
- Adding gradients, shadows, or textures that would compromise the flat, bold aesthetic
- Using the yellow accent for large background areas beyond the featured card; it should remain an accent
- Introducing serif typefaces or decorative fonts that would conflict with the clean, technical personality
- Making cards or containers too light or bright against the black canvas
- Crowding the generous vertical spacing between sections

### Recommended Build Order
1. Establish the black canvas and white text foundation with Inter typography
2. Implement the pill button component with yellow and black variants
3. Build the card component with three surface variants
4. Create the badge/tag component for category labels
5. Develop the pricing grid layout with three columns
6. Implement the FAQ accordion with numbered indicators and toggle states
7. Add the hero section with outlined wordmark and spotlight treatment
8. Fine-tune spacing and responsive behavior

### Accessibility
- Ensure yellow buttons maintain minimum 4.5:1 contrast ratio; the current yellow (#f5e642) on black text should be verified
- Provide focus indicators that are visible against both black and yellow backgrounds
- Use aria-expanded on FAQ toggle buttons to communicate state to screen readers
- Ensure the outlined wordmark has sufficient contrast or provide an accessible alternative for the brand mark
- Maintain logical heading hierarchy with h1 for hero, h2 for sections, h3 for card titles

## Scope note

This guide covers the visible homepage surface including hero, pricing tiers, and FAQ sections. Navigation, footer, form states, and additional interior pages are not represented in the supplied material. Motion, hover transitions, and mobile-specific layouts are not documented. Measurements are practical adaptation targets derived from visual inspection of the desktop interface.
