# How tryholo.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/tryholo.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Pricing page hero with gradient-bordered card, 3D chip mascot, and feature carousel with circular navigation arrows](https://pin.fontofweb.com/7480?format=jpg)](https://design.withfudge.com/share/pin-7480)

[Pricing page hero with gradient-bordered card, 3D chip mascot, and feature carousel with circular navigation arrows](https://design.withfudge.com/share/pin-7480)

[![Pricing tier card showing Holo mascot with purple visor, $39/month price point, and three icon-led feature rows](https://pin.fontofweb.com/7479?format=jpg)](https://design.withfudge.com/share/pin-7479)

[Pricing tier card showing Holo mascot with purple visor, $39/month price point, and three icon-led feature rows](https://design.withfudge.com/share/pin-7479)

[![Mission statement with inline emoji illustrations and bold declarative typography on stark white background](https://pin.fontofweb.com/7478?format=jpg)](https://design.withfudge.com/share/pin-7478)

[Mission statement with inline emoji illustrations and bold declarative typography on stark white background](https://design.withfudge.com/share/pin-7478)

[![Three-step process explainer with numbered steps, gradient vertical connectors, and abstract UI mockup illustrations](https://pin.fontofweb.com/7477?format=jpg)](https://design.withfudge.com/share/pin-7477)

[Three-step process explainer with numbered steps, gradient vertical connectors, and abstract UI mockup illustrations](https://design.withfudge.com/share/pin-7477)

## Overview

Holo's design system presents an AI marketing platform with approachable confidence. The visual language centers on a stark off-white canvas that lets playful 3D mascots and vibrant gradient accents command attention. The system balances enterprise credibility with consumer-friendly warmth through rounded surfaces, generous whitespace, and a typographic pairing that contrasts bold geometric display faces with clean, readable body text.

The homepage and pricing pages share a consistent rhythm: large hero statements establish value, stepped process explainers build trust, and card-based feature grids deliver specifics. Gradient borders and subtle shadows create depth without heaviness. The 3D mascot characters—appearing as a chip, a visored figure, and abstract forms—provide emotional continuity across marketing surfaces. Every interactive element reinforces the brand's positioning as capable yet unintimidating AI assistance.

## Colors

The palette operates in three modes: a near-neutral foundation, a vibrant gradient accent system, and functional interface colors.

| token | value | use |
|---|---|---|
| ink | #1D1D1F | Primary headings, body text, and strong emphasis |
| ink-secondary | #6E6E73 | Supporting descriptions, captions, and muted labels |
| canvas | #FBFBFB | Page background, creating warmth against pure white |
| surface | #FFFFFF | Card backgrounds, elevated panels, and input fields |
| border | #E6E6E7 | Subtle dividers, hairline borders, and shadow tints |
| action-gradient-start | #3E86C6 | Gradient lead color for borders, buttons, and connectors |
| action-gradient-mid | #A666AA | Gradient transition through purple |
| action-gradient-accent | #EC4492 | Gradient peak at magenta-pink |
| action-gradient-warm | #EE4454 | Gradient warm transition |
| action-gradient-end | #F05427 | Gradient terminus at energetic orange |
| action-blue | #2266FF | Functional link and interactive blue |
| link-blue | #0000EE | Standard hyperlink color |

The gradient sequence appears most prominently as a 2px border treatment on featured cards and as vertical connectors in the step-by-step process explainer. It also powers the primary call-to-action button background. The gradient runs blue through purple, magenta, red, and orange at approximately 22%, 50%, 76%, and 100% positions respectively. On light surfaces, this creates an energetic but controlled accent that reads as technological without being cold.

Photographic and 3D-rendered imagery introduces additional color through the mascot characters—soft purples, warm skin tones, and neutral grays—but these remain content-driven rather than interface tokens.

## Typography

Holo employs a three-family system: Satoshi for maximum impact headlines, False for structured display and emphasis, and Gabarito for extended reading at smaller sizes. Wonderkids appears sparingly for decorative moments.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Satoshi | 4.25rem | 900 | 1.15 | -0.05em | Homepage hero headlines, maximum impact statements |
| section-display | False | 2.5rem | 700 | 1.25 | -0.025em | Section headings, pricing titles, process steps |
| body-large | Satoshi | 1.75rem | 500 | 1.3 | -0.01em | Introductory paragraphs, mission statements |
| body | Satoshi | 1.125rem | 500 | 1.45 | 0.01em | Feature descriptions, pricing details, general content |
| body-small | Gabarito | 1rem | 400 | 1.5 | -0.01em | Dense text blocks, fine print, secondary descriptions |
| label | False | 0.875rem | 700 | 1.4 | 0.015em | Buttons, tags, category labels, strong inline emphasis |
| navigation | System-Sansserif | 0.75rem | 400 | 1.3 | normal | Nav items, utility text, system labels |
| decorative | Wonderkids | 3.875rem | 400 | 0.8 | -0.025em | Playful headlines, brand moments, special callouts |

The Satoshi family carries the heaviest load with both Black (900) weight for hero impact and Medium (500) for readable body text. False Semibold (700) provides structural clarity in headings and emphasis. Gabarito Regular (400) offers a slightly more open alternative for longer passages. Wonderkids Regular delivers a hand-drawn, approachable quality for select decorative applications.

False and Satoshi are designed by Deni Anggara and distributed by Indian Type Foundry. Wonderkids is designed by Jefri Dwi Alfatah. Verify licensing for these families before production use.

## Layout

The layout system relies on generous horizontal padding and vertical section spacing to create breathing room around content. The base unit is 2px, with all spacing values building from this foundation.

Container padding follows a consistent pattern: 40px horizontal gutters on desktop, expanding to comfortable internal padding within cards and panels. Section vertical spacing ranges from 80px to 140px, with hero sections receiving the most generous top padding to clear navigation.

Content alignment centers around a single-column flow for explanatory content, shifting to multi-column grids for feature cards and pricing tiers. The step-by-step process explainer uses an asymmetric two-column layout: numbered steps and descriptions on the left, abstract UI illustrations on the right, connected by thin gradient vertical lines.

Card components share a consistent 20px to 40px internal padding depending on their role. Feature cards use tighter 20px padding with subtle shadow elevation. Pricing cards and hero panels expand to 40px padding for greater presence. The gradient-border treatment adds 2px of visual weight without affecting layout math.

Navigation sits as a floating pill-shaped container with 14px to 20px internal padding, rounded at 33px, creating a soft capsule that hovers above the content scroll.

## Visual language

The system's personality emerges from the tension between clinical precision and playful warmth. Geometric sans-serif typography, precise gradient mathematics, and clean card geometries establish technical competence. Against this, 3D-rendered mascots with expressive faces, rounded forms, and soft lighting introduce human accessibility.

Gradient accents serve as the primary brand signature. The five-stop gradient appears on card borders, process connectors, and primary buttons—never as large background fills. This restraint keeps the effect premium rather than overwhelming. The gradient reads left-to-right on horizontal elements and top-to-bottom on vertical connectors.

Shadow treatment remains subtle and uniform: a soft 10px blur shadow in #E6E6E7 at 0px offset, creating gentle elevation without harsh depth. Cards and navigation pills share this identical shadow specification, unifying the elevation system.

Iconography appears as simple line drawings or as integrated emoji-style illustrations within text blocks. The pricing page uses circular icon containers with thin stroke illustrations for feature lists. Navigation and utility icons maintain the same geometric simplicity.

The mascot characters—appearing as a white square chip with gradient edges, a figure with a purple visor, and abstract rounded forms—provide continuity across pages. These 3D renders use soft studio lighting, subtle reflections, and rounded geometries that echo the interface's border radii.

## Components

### Gradient border card

A featured content container with a full-perimeter gradient border.

- **Anatomy**: Outer wrapper with 2px gradient border, inner content area with white background
- **Surface**: Border uses the full five-stop brand gradient; interior is pure white
- **Typography**: Inherits section-display for headings, body for descriptions
- **Shape**: 30px outer radius, with inner content area matching at effectively 28px
- **Spacing**: 40px internal padding
- **Composition**: Often paired with 3D mascot imagery positioned to break the card boundary

### Feature card

Standard content container for capabilities and benefits.

- **Anatomy**: Single div with shadow elevation, optional icon or illustration above text
- **Surface**: White background, subtle shadow
- **Typography**: Label token for titles, body for descriptions
- **Shape**: 20px border radius
- **Spacing**: 20px padding, with 20px gap between stacked cards in grids
- **Composition**: Arranged in horizontal scroll or grid layouts; carousel variant uses circular arrow buttons for navigation

### Pricing card

Elevated container for plan presentation.

- **Anatomy**: Header with mascot illustration, price display, feature list with icon rows
- **Surface**: White background, standard shadow
- **Typography**: Decorative or section-display for plan name, body-large for price, body for features
- **Shape**: 30px border radius
- **Spacing**: 40px padding, with generous vertical rhythm between price and feature list
- **Composition**: Feature rows use 28px icon containers with 12px right margin, title in label token, description in body

### Process step

Numbered explainer item with visual connector.

- **Anatomy**: Large numeral, heading, description, gradient vertical line, accompanying illustration
- **Surface**: Transparent; connector line uses brand gradient
- **Typography**: Section-display for step title, body for description, decorative numeral at 40px
- **Shape**: 2px wide gradient line with pill-radius ends
- **Spacing**: 120px to 160px vertical between steps
- **Composition**: Left-aligned text block, right-aligned abstract UI mockup, gradient line connecting numeral to next step

### Primary button

Gradient-filled call to action.

- **Anatomy**: Text label centered in pill container
- **Surface**: Full brand gradient background, white text
- **Typography**: Label token, white color
- **Shape**: Pill radius (9999px)
- **Spacing**: 14px vertical, 20px horizontal padding
- **Variants**: Standard gradient fill; alternative appears as white pill with gradient text using background-clip

### Navigation pill

Floating top-bar container.

- **Anatomy**: Logo mark, nav links, optional CTA button
- **Surface**: White background with standard shadow, or transparent over hero
- **Typography**: Navigation token for links
- **Shape**: 33px border radius, creating capsule form
- **Spacing**: 14px to 20px internal padding
- **Composition**: Horizontally distributed items with generous gaps

## Responsive behavior

The system appears optimized for desktop presentation with substantial horizontal padding. At narrower viewports, the following adaptations should apply:

- Hero typography should scale down proportionally, with hero-display reducing to approximately 2.5rem on mobile
- Multi-column feature grids should collapse to single-column vertical stacks with maintained card widths
- Process step illustrations should drop below text content rather than remaining side-by-side
- Navigation pill should collapse to a hamburger menu or simplify to logo-plus-CTA
- Horizontal padding should reduce from 40px to 20px

The step-by-step explainer's gradient vertical connectors should remain visible but shorten proportionally. Carousel navigation arrows may require touch-friendly sizing increases.

## Practical implementation guidance

### Preserve
- The exact five-stop gradient sequence and its positioning on borders and connectors
- The 2px hairline weight for all gradient border treatments
- The pairing of Satoshi Black for heroes with False Semibold for structural headings
- The 3D mascot style with soft lighting, rounded forms, and limited color palette
- The consistent 10px blur shadow specification across all elevated surfaces
- Generous section spacing (80px to 140px) to maintain premium breathing room

### Avoid
- Using the brand gradient as a large background fill; it should remain an accent treatment
- Introducing additional shadow specifications; the single soft shadow unifies the system
- Replacing the geometric sans-serifs with more decorative or traditional alternatives
- Crowding cards below 20px internal padding
- Using Wonderkids for body text or extended reading

### Recommended build order
1. Establish the color tokens and gradient specification as CSS custom properties
2. Implement the typography scale with Satoshi and False loaded at required weights
3. Build the card components with correct radii, shadows, and padding
4. Create the gradient border treatment using border-image or pseudo-element techniques
5. Implement the process step layout with gradient connector lines
6. Add the navigation pill with correct capsule radius and shadow
7. Integrate mascot imagery with appropriate sizing and positioning

### Accessibility
- Ensure gradient text meets contrast requirements; the white-on-gradient button combination should maintain minimum 4.5:1 ratio across all gradient stops
- Provide focus indicators that do not rely solely on the gradient color for visibility
- Consider reduced-motion preferences for any carousel or scroll-triggered animations
- Verify that the decorative Wonderkids font is never used for critical information
- Ensure icon-led feature lists have adequate text alternatives

## Scope note

This guide covers the marketing homepage and pricing page surfaces of tryholo.ai. The dashboard, account management, content editor, and mobile application interfaces are not represented. Motion behavior, hover states, form validation, and dark mode variants are not documented. Measurements reflect the extracted desktop viewport values.
