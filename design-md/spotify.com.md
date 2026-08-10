# How spotify.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/spotify.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large white headline, pink pill button, and colorful album-art collage on black background](https://pin.fontofweb.com/5109?format=jpg)](https://design.withfudge.com/share/pin-5109)

[Hero section with large white headline, pink pill button, and colorful album-art collage on black background](https://design.withfudge.com/share/pin-5109)

[![Pricing grid with four plan cards in pink, purple, yellow, and blue on dark background with payment icons](https://pin.fontofweb.com/5110?format=jpg)](https://design.withfudge.com/share/pin-5110)

[Pricing grid with four plan cards in pink, purple, yellow, and blue on dark background with payment icons](https://design.withfudge.com/share/pin-5110)

[![FAQ accordion with expanded dark gray panel and collapsed items with chevron icons on black background](https://pin.fontofweb.com/5111?format=jpg)](https://design.withfudge.com/share/pin-5111)

[FAQ accordion with expanded dark gray panel and collapsed items with chevron icons on black background](https://design.withfudge.com/share/pin-5111)

[![Feature section with 3D abstract sculpture, bold white display type, and bright blue rounded panel below](https://pin.fontofweb.com/5108?format=jpg)](https://design.withfudge.com/share/pin-5108)

[Feature section with 3D abstract sculpture, bold white display type, and bright blue rounded panel below](https://design.withfudge.com/share/pin-5108)

## Overview

Spotify's Premium marketing page presents a dark-first, immersive visual system built around a near-black canvas that makes white typography and vibrant accent colors feel luminous. The design prioritizes immediate comprehension of pricing tiers through color-coded plan cards, while maintaining a cohesive music-brand atmosphere with collage-style imagery and 3D abstract sculptures. The system balances high-energy moments—bright pink, yellow, purple, and blue accents against pure black—with restrained, functional patterns for comparison tables and expandable FAQs. Every interactive element adopts a pill shape, creating a friendly, approachable rhythm that contrasts with the bold, tightly-tracked display typography. The overall impression is of a premium service that feels accessible rather than exclusive, using color as both wayfinding and emotional signal.

## Colors

The color system operates on a dark-mode foundation with pure black as the default canvas, layered surfaces for depth, and a rotating palette of warm and cool accents that map to specific product tiers.

| token | value | use |
|---|---|---|
| canvas | `#000000` | Page background, base layer behind all content |
| surface | `#121212` | Plan card backgrounds, secondary containers |
| surface-elevated | `#242424` | Expanded FAQ panels, hover states, raised surfaces |
| ink | `#FFFFFF` | Primary text, headlines, body copy on dark |
| ink-muted | `#A7A7A7` | Secondary text, terms links, disabled indicators |
| action-primary | `#FFD2D7` | Individual plan CTA, primary promotional button |
| action-student | `#C4B5D4` | Student plan CTA, education-tier accent |
| action-duo | `#FFC862` | Duo plan CTA, shared-account accent |
| action-family | `#A5C8E6` | Family plan CTA, multi-user accent |
| accent-blue | `#1E90FF` | Feature highlight panels, visual break sections |

The dark canvas creates maximum contrast for white typography and allows the accent colors to appear to glow. Each plan tier receives a distinct accent that carries through its card headline, CTA button, and associated imagery. The pink `#FFD2D7` serves as the default primary action when no tier is specified. Muted gray `#A7A7A7` handles legal copy, terms links, and secondary information without competing for attention. The elevated surface `#242424` appears only on interactive expansion, providing subtle depth without breaking the dark continuity.

## Typography

Spotify uses two related font families from Dinamo Typefaces: Spotify Mix Ui for body and interface text, and Spotify Mix Ui Title for display headlines. Both families support Regular and Bold weights, with the Title family offering tighter spacing and more dramatic proportions for marketing moments.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Spotify Mix Ui Title | 3rem | 700 | 1.1 | -0.03em | Page hero headlines, major section titles |
| section-display | Spotify Mix Ui Title | 2.5rem | 700 | 1.15 | -0.02em | Section headers, plan grid title |
| body | Spotify Mix Ui | 1rem | 400 | 1.5 | 0em | Descriptions, FAQ answers, feature lists |
| body-bold | Spotify Mix Ui | 1rem | 700 | 1.5 | 0em | Emphasized body, pricing, plan names |
| label | Spotify Mix Ui | 0.875rem | 700 | 1.4 | 0em | Button text, navigation, card headers |
| legal | Spotify Mix Ui | 0.75rem | 400 | 1.5 | 0em | Terms, disclaimers, fine print |

Display typography uses tight negative tracking to feel contemporary and confident, while body text remains neutral and readable. The weight distinction between Regular and Bold is substantial, creating clear hierarchy without size changes. All type sizes are whole-number multiples of 4px (0.25rem), ensuring crisp rendering at any density. Verify licensing for these families before production use; both Spotify Mix Ui and Spotify Mix Ui Title are designed and distributed by Dinamo Typefaces GmbH.

## Layout

The page employs a centered, single-column content flow with controlled maximum widths that prevent line lengths from becoming unwieldy on large screens. Sections stack vertically with generous breathing room between them, typically 6rem or more, allowing each marketing message to land independently.

The hero section uses an asymmetric two-column composition: text content anchors left with a clear headline, subcopy, and paired action buttons, while a dynamic collage of album artwork and genre imagery occupies the right, rotated and layered to suggest depth and musical variety. This collage breaks the grid intentionally, with images overlapping and extending toward the viewport edge.

Below the hero, content centers tightly. The plan comparison table uses a narrow, fixed-width container with three columns: feature names left-aligned, Free plan indicators center, Premium plan indicators right. Plan cards appear in a responsive grid—three across for Individual, Student, and Duo, with Family centered below as a single wider card or stacked element.

The FAQ section returns to a centered, narrow column where accordion items span nearly the full content width. Each item is separated by a subtle horizontal rule rather than visible borders, maintaining the dark seamlessness of the canvas.

Spacing follows a 4px base unit. Major section breaks use 6rem (96px), content gaps within sections use 1.5rem (24px), and card internal padding uses 1.5rem consistently. This limited scale prevents fragmentation while allowing enough range for hierarchy.

## Visual language

The visual identity balances two modes: the functional clarity of a pricing page and the expressive energy of a music brand. Photography and illustration lean heavily into Spotify's established world—album covers, genre imagery, and abstract 3D forms that suggest sound waves, liquid motion, or organic growth.

The 3D sculpture in the feature section exemplifies this approach: glossy, iridescent forms in purple, green, and blue float against black, suggesting innovation and creativity without literal representation. These elements are not decorative afterthoughts but central compositional anchors that justify the section's existence.

Color application follows a strict tier logic. Each plan card's headline takes on its accent color—pink for Individual, purple for Student, yellow for Duo, blue for Family—while the CTA button fills with that same hue at full saturation. This creates instant visual association between name, price, and action.

The pill shape dominates interactive elements. Buttons, plan tags, and potentially input fields all use full border-radius, softening the technical precision of the grid and type. This roundness extends to card corners at a more modest 0.75rem, enough to feel friendly without appearing toy-like.

Iconography is minimal and functional: checkmarks for included features, chevrons for expand/collapse, payment logos for trust signals. These remain monochrome white or inherit their container's accent.

## Components

### Primary Action Button
- **Anatomy**: Text label centered within a fully rounded container
- **Surface**: Filled background using tier-specific accent color; Individual defaults to pink `#FFD2D7`
- **Typography**: `{typography.label}`, black text on light fills for maximum contrast
- **Shape**: `border-radius: 9999px`, height approximately 48px with generous horizontal padding
- **Spacing**: Minimum 2rem horizontal padding, comfortable tap target
- **Variants**: Tier-specific color fills (student purple, duo yellow, family blue); secondary variant uses transparent fill with white border

### Plan Card
- **Anatomy**: Spotify logo with "Premium" label, tier name in accent color, monthly price, bullet feature list, CTA button, terms link
- **Surface**: `{colors.surface}` background, no visible border
- **Typography**: Tier name uses `{typography.section-display}` in accent color; price uses `{typography.body-bold}` in white; features use `{typography.body}` with bullet markers
- **Shape**: `border-radius: 0.75rem`
- **Spacing**: Internal padding 1.5rem; vertical gap between elements approximately 1rem
- **Composition**: Three-column grid for top tiers, Family card centered below at similar or full width

### FAQ Accordion
- **Anatomy**: Question text with right-aligned chevron icon; expanded state reveals answer paragraph
- **Surface**: Collapsed items sit directly on canvas with bottom border; expanded item uses `{colors.surface-elevated}` background
- **Typography**: Question uses `{typography.body-bold}`; answer uses `{typography.body}`
- **Shape**: No border-radius on collapsed items; expanded panel may use subtle rounding
- **Spacing**: Item padding approximately 1.25rem vertical; answer indented or padded within expanded panel
- **States**: Collapsed shows down-chevron; expanded shows up-chevron and reveals content with subtle background lift

### Feature Comparison Table
- **Anatomy**: Row labels left, Free plan column center, Premium plans column right; checkmarks or dashes indicate availability
- **Surface**: Transparent, rows separated by thin horizontal rules in muted gray
- **Typography**: Feature names use `{typography.body-bold}`; column headers use `{typography.label}`
- **Composition**: Narrow centered container, generous vertical padding between rows

### Hero Section
- **Anatomy**: Headline, subcopy, price mention, two action buttons (primary and secondary), terms link, collage imagery
- **Surface**: Pure black canvas
- **Typography**: Headline uses `{typography.hero-display}`; subcopy uses `{typography.body}`
- **Composition**: Text block left-aligned with maximum width constraint; collage bleeds right with layered, rotated rectangular images

## Responsive behavior

The layout assumes desktop viewport widths for the imagery provided. At narrower widths, the hero collage should stack below the text block or reduce to a single prominent image. The three-column plan grid should collapse to single-column stacking, with cards maintaining full width and internal spacing. The comparison table may require horizontal scrolling or transformation into a feature list with tier badges.

The FAQ accordion remains functionally identical across widths, though touch targets should maintain minimum 48px height. Pill buttons should expand to full width on mobile for easier thumb reach, with secondary actions appearing below primaries rather than beside them.

Type scale should reduce proportionally: hero-display may drop to 2rem on small screens, section-display to 1.75rem, preserving the tight tracking and weight relationships.

## Practical implementation guidance

### Preserve
- The pure black canvas as default; do not lighten to charcoal gray
- Tier-specific accent colors mapped consistently to headlines and CTAs
- Pill-shaped buttons with full border-radius
- Tight negative tracking on display headlines
- Generous section spacing that lets content breathe

### Avoid
- Adding borders or shadows to plan cards; the flat dark surface is intentional
- Using the accent colors for non-tier purposes; reserve them for plan identification
- Lightening the body text; white on black provides necessary contrast
- Breaking the pill shape with partial rounding or sharp corners on CTAs

### Recommended Build Order
1. Establish black canvas and white typography with proper font loading
2. Implement hero section with headline hierarchy and pill buttons
3. Build plan card component with tier color prop
4. Create plan grid with responsive collapse behavior
5. Add feature comparison table with checkmark/dash pattern
6. Implement FAQ accordion with expanded surface state
7. Integrate 3D or collage imagery sections

### Accessibility
- Ensure white text on black meets WCAG AAA contrast; the current combination does
- Provide visible focus indicators on pill buttons, such as outline or ring, since fill colors vary by tier
- Use aria-expanded on FAQ triggers and associate panels with aria-controls
- Maintain logical tab order through plan cards: name, price, features, CTA
- Consider reduced-motion preferences for any collage or 3D element animations

## Scope note

This guide covers the Spotify Premium marketing page's desktop presentation, including hero, plan selection, feature comparison, and FAQ sections. Mobile breakpoints, navigation header, footer, checkout flow, and account management interfaces are not represented in the supplied materials. Motion behavior, hover states, and loading sequences are not documented. Measurements are practical adaptation targets derived from visual inspection.
