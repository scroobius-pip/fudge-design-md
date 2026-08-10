# How workers.cloudflare.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/workers.cloudflare.com-design)

Last updated: 2026-08-10

## Captured pages

[![Pricing page dark-mode comparison tables for Workers for Platforms and Durable Objects with subtle hairline row separators and muted column headers.](https://pin.fontofweb.com/7645?format=jpg)](https://design.withfudge.com/share/pin-7645)

[Pricing page dark-mode comparison tables for Workers for Platforms and Durable Objects with subtle hairline row separators and muted column headers.](https://design.withfudge.com/share/pin-7645)

[![Pricing page hero with orange Compute pill tab, Scale predictably headline, and dark card tables for Workers and Containers with dashed border containers.](https://pin.fontofweb.com/7644?format=jpg)](https://design.withfudge.com/share/pin-7644)

[Pricing page hero with orange Compute pill tab, Scale predictably headline, and dark card tables for Workers and Containers with dashed border containers.](https://design.withfudge.com/share/pin-7644)

[![Bright orange CTA section with Build without boundaries headline, white and orange pill buttons, and floating product icons on textured background.](https://pin.fontofweb.com/7643?format=jpg)](https://design.withfudge.com/share/pin-7643)

[Bright orange CTA section with Build without boundaries headline, white and orange pill buttons, and floating product icons on textured background.](https://design.withfudge.com/share/pin-7643)

[![Homepage feature grid with Tailored to your working style heading, orange accent cards, code editor preview, and dark UI cards with deployment status rows.](https://pin.fontofweb.com/7642?format=jpg)](https://design.withfudge.com/share/pin-7642)

[Homepage feature grid with Tailored to your working style heading, orange accent cards, code editor preview, and dark UI cards with deployment status rows.](https://design.withfudge.com/share/pin-7642)

## Overview

The Cloudflare Workers design system presents a dark-first developer platform aesthetic that balances technical credibility with approachable warmth. The visual language centers on near-black canvas surfaces, warm off-white typography, and a vibrant orange accent that signals action and energy. The system is built for dense information display—pricing tables, feature comparisons, code previews, and deployment dashboards—while maintaining visual breathing room through precise spacing and deliberate hierarchy.

The interface avoids decorative excess in favor of functional clarity. Cards and tables organize complex product information into scannable units. Monospace labels in Apercu Mono Pro provide technical authenticity for code snippets, version tags, and status indicators. The orange accent appears strategically: as filled primary buttons, as background panels for call-to-action sections, and as subtle highlights within dark cards. This restrained use of color against the dark canvas creates moments of visual energy without overwhelming the information architecture.

## Colors

The palette operates in three modes: dark interface surfaces, warm neutral text, and vibrant orange accents. The dark canvas is not pure black but a nuanced near-black that reduces eye strain during extended technical reading. Text colors progress from bright warm white for primary content through muted cream for secondary information to dim gray for structural borders.

| token | value | use |
|---|---|---|
| canvas | #000000 | Page background, deepest surface |
| surface | #121212 | Card backgrounds, table containers |
| surface-elevated | #191817 | Code blocks, elevated panels, deployment rows |
| ink | #FFFBF5 | Primary headings, hero text on dark |
| ink-muted | #F0E3DE | Body text, descriptions, table data |
| ink-dim | #2A2927 | Subtle borders, inactive states, hairline separators |
| accent | #FF4801 | Primary buttons, active tabs, CTA backgrounds |
| accent-bright | #FF6D33 | Hover states, gradient endpoints, icon fills |
| accent-warm | #F14602 | Secondary orange, badge backgrounds |
| action-primary | #FF4801 | Filled button backgrounds, active pill tabs |
| action-primary-text | #FFFFFF | Text on filled primary buttons and orange backgrounds |
| border | #F0E3DE | Visible card borders, input outlines on dark |
| border-dim | #2A2927 | Hairline table rows, subtle dividers |
| code-blue | #0A95FF | Syntax: keywords, functions |
| code-green | #5EFF3A | Syntax: strings, success states |
| code-purple | #B866FF | Syntax: types, special values |
| code-red | #ED1641 | Syntax: errors, deletion |
| code-pink | #EE0DDB | Syntax: operators, punctuation |

The orange accent dominates in two contexts: as a full-bleed background for the "Build without boundaries" CTA section, where white and orange pill buttons invert the typical dark-mode pattern, and as a filled pill for the active "Compute" tab in pricing navigation. On dark surfaces, the accent reads as energetic and urgent; on its own saturated background, it becomes immersive and inviting. Code colors appear exclusively within syntax-highlighted blocks, maintaining a familiar developer environment palette. The pure white action-primary-text token ensures maximum contrast on the brightest orange surfaces.

## Typography

Three families appear in the source materials: Ft Kunst Grotesk for all interface and marketing text, Apercu Mono Pro for code and technical metadata, and Ft Kunst Grotesk Trial as a trial-weight variant of the primary family. Ft Kunst Grotesk appears in Regular (400) and Medium (500) weights, with the Medium weight reserved for headings, active navigation, and button labels. Apercu Mono Pro appears only in Regular weight, providing consistent technical voice. Ft Kunst Grotesk Trial is listed in the source files but does not appear in active typographic roles within the captured interface.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Ft Kunst Grotesk | 3.5rem | 500 | 1 | -0.03em | Homepage hero headlines, major section titles |
| section-display | Ft Kunst Grotesk | 3rem | 500 | 1 | -0.01em | Feature section headings, pricing category titles |
| body | Ft Kunst Grotesk | 1rem | 400 | 1.5 | normal | Paragraphs, descriptions, table body |
| body-large | Ft Kunst Grotesk | 1.125rem | 400 | 1.2 | normal | Lead paragraphs, hero subheadings |
| label | Ft Kunst Grotesk | 1rem | 500 | 1 | -0.01em | Buttons, tabs, navigation, category labels |
| code | Apercu Mono Pro | 0.875rem | 400 | 1.2 | -0.04em | Code blocks, file paths, version tags |
| code-small | Apercu Mono Pro | 0.75rem | 400 | 1.333 | normal | Inline code, status badges, metadata |

The hero display at 56px with tight negative tracking creates impactful section openers. The section display at 48px with slightly relaxed tracking suits repeated card headings. Body text at 16px with 24px line height provides comfortable reading density for technical documentation. The code tokens at 14px and 12px maintain legibility at small sizes while preserving monospace alignment for tabular data and syntax highlighting.

Ft Kunst Grotesk is designed by Piero Di Biase and published by Formula Type. Apercu Mono Pro is designed and published by As Eh Partnership Limited Trading As Colophon Foundry. Ft Kunst Grotesk Trial shares the same designer and vendor credentials. Verify licensing for these families before production use.

## Layout

The layout system relies on centered content bands with generous horizontal margins and rhythmic vertical spacing. Major sections stack with 64px to 80px vertical padding, creating clear territorial boundaries between product features, pricing tiers, and call-to-action areas. Content max-widths center the reading experience while allowing background elements to extend full-bleed.

The grid favors asymmetric compositions for feature showcases. The "Tailored to your working style" section pairs a large dark card containing deployment status rows with a tall orange accent card, creating visual tension through scale and color contrast. Below, a three-column arrangement places an icon feature, a text feature, and a code preview side by side, with the code block receiving elevated surface treatment.

Pricing tables use a contained card model with internal horizontal rules. Each product category (Workers, Containers, Durable Objects) lives in its own bordered container with 40px internal padding. Column headers align to a three-part grid: Component, Free, Paid. Row separators are 1px hairlines in dim border color, providing subtle structure without visual weight.

Spacing follows a 2px base unit, with semantic steps at 8px, 16px, 24px, 32px, 40px, 48px, and 64px. Component internal padding typically uses 16px or 24px. Section vertical rhythm uses 32px for tight groupings and 64px for major transitions. Card border radius is 12px for primary containers, 8px for nested elements, and 9999px for pill buttons and tags.

## Visual language

The visual character is technical and confident, with warmth introduced through the orange accent and rounded pill shapes. The dark canvas creates a focused, immersive environment appropriate for developer tools. Geometric precision appears in the dot-grid background textures, dashed border treatments on pricing cards, and the strict alignment of table data.

Imagery and iconography follow a flat, symbolic approach. Small product icons float above the orange CTA background with subtle rotation, suggesting dynamism without literal motion. Code previews show realistic syntax highlighting with the platform's branded color extensions. Deployment status indicators use simple checkmarks and building spinners, avoiding decorative illustration in favor of functional clarity.

The texture layer adds depth without noise. A fine dot grid appears in hero sections and behind pricing tables, creating spatial depth that separates content from background. This pattern is restrained—visible but not distracting—and appears in muted orange or gray tones that harmonize with the surrounding palette.

Border treatments carry semantic weight. Solid 1px borders define card perimeters. Dashed borders appear on pricing category containers, suggesting expandable or modular content. Hairline 1px rules separate table rows with minimal visual intrusion. The 2px solid border on selected or focused elements provides accessible state indication.

## Components

### Primary button

- Anatomy: Text label centered within a pill-shaped container
- Surface: Filled accent orange (#FF4801) background
- Typography: Label token, Medium weight, white text
- Shape: Full pill radius (9999px)
- Spacing: 10px vertical, 14px horizontal padding
- Composition: Inline with adjacent buttons, 4px gap
- Variants: On orange backgrounds, invert to white fill with orange text

### Secondary button

- Anatomy: Text label within bordered pill container
- Surface: Transparent background, 1px solid border in ink-muted or border token
- Typography: Label token, Medium weight, inherits surrounding text color
- Shape: Full pill radius
- Spacing: 8px vertical, 16px horizontal padding
- Composition: Appears in header navigation and alongside primary buttons

### Pricing card

- Anatomy: Category title, optional subtitle, column header row, data rows with icon prefixes
- Surface: Surface background, 1px solid border in border-dim
- Typography: Section display for category title, body for descriptions, body-large for data values
- Shape: 12px border radius, 40px internal padding
- Spacing: 16px between title and subtitle, 24px before data table, 16px row height with 1px hairline separators
- Composition: Full-width within content band, stacked vertically with 16px gap between cards
- Variants: Dashed border variant for featured or highlighted categories

### Code preview block

- Anatomy: File path tabs, syntax-highlighted code body, optional line numbers
- Surface: Surface-elevated background, 6px border radius
- Typography: Code token for body, code-small for line numbers and metadata
- Shape: 6px to 8px border radius
- Spacing: 12px to 16px internal padding
- Composition: Positioned within feature grids, often alongside descriptive text

### Feature card

- Anatomy: Icon or illustration, heading, body text, optional CTA link
- Surface: Surface background for dark variants, accent orange for highlighted variants
- Typography: Section display or label for heading, body for description
- Shape: 12px border radius
- Spacing: 24px to 32px internal padding
- Composition: Grid placement with asymmetric sizing, orange cards often span multiple rows

### Tab pill group

- Anatomy: Horizontal row of pill buttons, one active
- Surface: Active pill filled accent orange, inactive pills transparent with subtle border
- Typography: Label token for all states
- Shape: Full pill radius for individual tabs, grouped with minimal gap
- Spacing: 10px to 14px vertical padding per tab
- Composition: Centered below section headings, used for pricing category filtering

### Status badge

- Anatomy: Icon prefix, text label, optional state indicator
- Surface: Transparent or subtle background tint
- Typography: Code-small token, Regular weight
- Shape: 4px border radius or pill
- Spacing: 4px to 8px padding
- Composition: Inline within table rows, deployment cards, and feature lists

## Responsive behavior

The design targets desktop as the primary experience, with content bands maintaining generous side margins. At narrower viewports, the asymmetric feature grids should collapse to single-column stacking, with orange accent cards moving above or below their paired dark cards rather than beside. Pricing tables require horizontal scroll or reflowed row layouts on small screens, preserving the three-column structure where possible.

The hero display type should scale down to section-display size on tablet, maintaining the tight leading and negative tracking. Body text remains at 16px for readability. Code blocks should allow horizontal scrolling rather than wrapping, preserving syntax alignment.

The orange CTA section maintains its full-bleed character at all widths, with floating icons repositioning to avoid text overlap. Pill button groups may wrap to two rows on narrow screens while maintaining their grouped visual identity.

## Practical implementation guidance

### Preserve
- The dark canvas as the default and dominant mode; light surfaces are exceptions
- The precise two-family typographic hierarchy: Ft Kunst Grotesk for prose, Apercu Mono Pro for code
- Orange accent restraint: use for primary actions, active states, and immersive CTAs only
- The 2px base grid and derived spacing scale for component consistency
- Pill shapes for all interactive buttons and tab elements
- Syntax highlighting with the branded code color palette

### Avoid
- Light backgrounds for primary content areas; the dark mode is integral to the brand
- Additional font families beyond the two specified
- Decorative shadows or gradients that compete with the flat, precise aesthetic
- Breaking the monospace alignment in code blocks for visual effect
- Using the orange accent for non-interactive decorative elements

### Recommended build order
1. Establish the dark canvas and surface color tokens
2. Implement Ft Kunst Grotesk at body and display sizes with proper weight distribution
3. Build the pill button system with primary and secondary variants
4. Create the pricing card component with internal table structure
5. Add Apercu Mono Pro for code blocks and technical labels
6. Implement the orange CTA section as a full-bleed breakout pattern
7. Layer in the dot-grid background textures and dashed border treatments

### Accessibility
- Ensure orange accent text meets contrast ratios when used on non-dark backgrounds; the white-on-orange CTA buttons should be verified
- Maintain focus indicators that exceed the subtle default borders; consider 2px solid outlines in accent color
- Code blocks should include copy functionality and respect user preferences for reduced motion
- Pricing tables require semantic markup with proper header associations for screen reader navigation
- The dot-grid background patterns should be implemented as CSS gradients or SVG with sufficient contrast against all overlaid text

## Scope note

This guide covers the homepage and pricing page surfaces visible in the supplied images. Mobile breakpoints, animation specifications, form validation states, and documentation page layouts are not included. The 2px base unit and derived spacing values are exact from the source interface. Ft Kunst Grotesk Trial is present in source files but not used in active interface roles. Verify licensing for Ft Kunst Grotesk, Ft Kunst Grotesk Trial, and Apercu Mono Pro before production use.
