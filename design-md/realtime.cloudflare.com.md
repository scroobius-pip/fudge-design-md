# How realtime.cloudflare.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/realtime.cloudflare.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with orange headline, Get Started pill button, and scattered UI wireframe illustrations on dotted canvas](https://pin.fontofweb.com/5438?format=jpg)](https://design.withfudge.com/share/pin-5438)

[Hero section with orange headline, Get Started pill button, and scattered UI wireframe illustrations on dotted canvas](https://design.withfudge.com/share/pin-5438)

[![Use cases grid with Voice Agents, AI meeting assistant, Proctoring, and Virtual learning cards with orange line art](https://pin.fontofweb.com/5437?format=jpg)](https://design.withfudge.com/share/pin-5437)

[Use cases grid with Voice Agents, AI meeting assistant, Proctoring, and Virtual learning cards with orange line art](https://design.withfudge.com/share/pin-5437)

[![Scale and reliability statistics section with large numerals and dotted world map visualization](https://pin.fontofweb.com/5436?format=jpg)](https://design.withfudge.com/share/pin-5436)

[Scale and reliability statistics section with large numerals and dotted world map visualization](https://design.withfudge.com/share/pin-5436)

[![Product suite integration steps with numbered workflow and branching node diagram](https://pin.fontofweb.com/5435?format=jpg)](https://design.withfudge.com/share/pin-5435)

[Product suite integration steps with numbered workflow and branching node diagram](https://design.withfudge.com/share/pin-5435)

## Overview

Cloudflare RealtimeKit's marketing site presents a developer platform for building real-time applications through a warm, approachable visual system. The design pairs energetic orange tones with a soft cream canvas, creating distinction from typical corporate blue-gray SaaS aesthetics. Every section balances technical credibility with visual warmth: large display typography establishes confidence, dotted background textures add craft and dimension, and custom line-art illustrations explain abstract infrastructure concepts without heaviness.

The page unfolds as a single narrative journey—hero introduction, product suite capabilities, scale proof points, and use-case applications. Each section maintains consistent orange-ink typography against light backgrounds, with structural hierarchy created through size contrast rather than color variation. The visual system treats technical content as approachable: integration steps become numbered workflows, global infrastructure becomes a dotted world map, and API concepts become friendly wireframe illustrations scattered across the canvas.

## Colors

The palette centers on warm orange as the single accent, used for every interactive and emphasis element. Cream and amber tones provide background depth without introducing competing hues. All colors serve functional roles rather than decorative ones.

| token | value | use |
|---|---|---|
| action | #F97316 | Primary buttons, key highlights, active states, illustration accents |
| action-hover | #EA580C | Button hover states, interactive element emphasis |
| ink | #C2410C | Primary headings, body text, icon strokes, diagram lines |
| ink-secondary | #9A3412 | Supporting labels, captions, section identifiers, metadata |
| canvas | #FFFBEB | Page background, primary surface behind all content |
| surface | #FEF3C7 | Elevated card backgrounds, illustration fills, subtle containment |
| border | #FDBA74 | Card borders, dividers, diagram connector lines, rule lines |
| border-subtle | #FED7AA | Hairline separators, inactive states, faint grid lines |

The orange tones carry semantic weight: brighter action orange draws attention to conversion points and interactive elements, while deeper ink orange provides readable text hierarchy. The cream canvas avoids pure white fatigue and harmonizes with the warm illustration palette. No dark mode is visible in the supplied surfaces; the system appears optimized for light-environment reading. Photographic and illustration content uses the same warm orange range, ensuring visual cohesion between UI and decorative elements.

## Typography

The site uses Inter and Inter-Italic as its type families, deployed in a limited weight range that emphasizes clarity over variety. Display sizes use tight tracking and compact leading for impact, while body sizes open up for comfortable reading. The italic variant is available for emphasis or stylistic variation, though the visible headings and labels in the supplied images predominantly use roman forms.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3rem | 700 | 1.1 | -0.02em | Hero headlines, primary page titles |
| section-display | Inter | 2.5rem | 700 | 1.15 | -0.01em | Section headings, major transitions |
| stat-display | Inter | 2.5rem | 700 | 1 | -0.02em | Large statistics, proof-point numerals |
| body | Inter | 1rem | 400 | 1.6 | 0 | Paragraph text, descriptions, explanations |
| body-large | Inter | 1.25rem | 400 | 1.5 | 0 | Introductory paragraphs, lead copy |
| label | Inter | 0.875rem | 500 | 1.4 | 0.01em | Buttons, tags, metadata, captions |
| navigation | Inter | 0.875rem | 500 | 1 | 0.02em | Top-level navigation, wayfinding |
| legal-copy | Inter | 0.75rem | 400 | 1.5 | 0 | Terms, footnotes, fine print |

Type scale steps follow a 4px grid: 12px, 14px, 16px, 20px, 40px, 48px. Display sizes jump significantly from body scale to create clear hierarchy. Headings use negative tracking for tighter, more confident appearance; body text uses neutral tracking for readability. Verify licensing for these families before production use. Inter and Inter-Italic were designed by Rasmus Andersson and are available from Rsms.

## Layout

The page uses a centered content column with generous horizontal margins, creating breathing room around technical content. Sections stack vertically with substantial vertical rhythm—approximately 6rem between major sections—allowing each narrative beat to register independently.

The grid system appears flexible rather than rigid: hero content left-aligns with illustration elements floating right; feature grids use asymmetric multi-column layouts; statistics use a three-column equal split. Content rarely extends to full viewport width, maintaining comfortable line lengths for reading.

Key layout patterns include:

- **Hero zone**: Large display text occupies left two-thirds, with call-to-action button and decorative cloud illustration occupying right third. Scattered wireframe elements below create depth through overlapping, rotated rectangles.
- **Integration steps**: Numbered procedural content (1. Start Integrating, 2. Add Media Capabilities, 3. Integrate AI) stacks vertically with descriptive paragraphs and capability lists. A branching node diagram occupies the right half, connecting icons through curved paths.
- **Statistics row**: Three equal columns with large numerals above descriptive labels, separated by implicit gutters.
- **Use-case grid**: Asymmetric card layout with varying heights—some cards span full height with large illustrations, others stack as compact text blocks.

Spacing follows a 4px base unit. Section padding uses 24 units (6rem), content gaps use 6 units (1.5rem), and card internal padding uses 6 units (1.5rem). Borders and dividers use 1px hairlines in the border-subtle or border tokens.

## Visual language

The illustration style defines much of the site's personality. All decorative elements use single-weight orange line art with occasional surface fills in lighter amber tones. The aesthetic suggests technical diagrams rendered with craft: wireframe chat bubbles, microphone waveforms, network nodes, and world maps built from dots rather than solid shapes.

Key visual treatments include:

- **Dotted canvas texture**: The background carries a subtle regular dot pattern, creating warmth and preventing flatness without competing with content.
- **Wireframe objects**: Chat interfaces, phone screens, and UI components appear as outlined rectangles with minimal internal detail—suggesting functionality without depicting specific products.
- **Network diagrams**: Integration concepts use circular nodes connected by curved paths, with icons inside each node representing authentication, media, AI, and other capabilities.
- **Data visualization**: The world map uses a halftone dot pattern where density indicates network presence, with brighter dots highlighting active regions.
- **Scattered composition**: Illustrative elements often appear rotated, overlapping, and partially cropped, creating dynamic energy against the orderly text grid.

The line weight appears consistent across all illustrations—approximately 1.5px to 2px strokes in ink or border tones. No shadows, gradients, or dimensional effects are visible; the entire system maintains flat, graphic clarity.

## Components

### Primary button

- **Anatomy**: Rounded pill containing centered label text, occasionally with trailing arrow icon.
- **Surface**: Solid action orange background with white text.
- **Typography**: label token, medium weight, white color.
- **Shape**: Full pill border radius (9999px), generous horizontal padding creating capsule proportions.
- **Spacing**: Approximately 0.75rem vertical padding, 1.5rem horizontal padding.
- **Composition**: Typically positioned after headline text or within hero zone, right-aligned or inline with content flow.

### Secondary button / text link

- **Anatomy**: Underlined text or outlined pill with arrow indicator.
- **Surface**: Transparent background with ink text; or transparent with border and ink text.
- **Typography**: label token, medium weight.
- **Shape**: Pill outline when bordered; text-only with underline for inline links.
- **Spacing**: Compact inline spacing, arrow icon offset slightly from text.

### Feature card

- **Anatomy**: Contained block with heading, descriptive paragraph, and optional illustration or capability list.
- **Surface**: Transparent or very subtle surface background; bordered with border-subtle hairline.
- **Typography**: Section heading uses ink color at body-large or display scale; body uses body token.
- **Shape**: Rounded corners at card radius (0.75rem).
- **Spacing**: Internal padding of 1.5rem; external gutters between cards vary by grid arrangement.
- **Composition**: Cards appear in asymmetric grids—some with large illustrations spanning full height, others as compact text blocks.

### Capability list

- **Anatomy**: Two-column text pairs with feature name left and detail right, separated by dotted or solid rule lines.
- **Surface**: No background; rules use border color.
- **Typography**: label token for feature names, often with trailing arrow or external-link indicator.
- **Shape**: Full-width rules between items, 1px height.
- **Spacing**: Tight vertical rhythm, approximately 0.75rem between items.

### Section header

- **Anatomy**: Numbered label (e.g., "02 | Comprehensive Product Suite") above major heading.
- **Surface**: No distinct background.
- **Typography**: Section label uses label token in ink-secondary with uppercase treatment and wider tracking; heading uses section-display token.
- **Composition**: Left-aligned stack with 0.75rem to 1rem gap between label and heading.

### Statistic block

- **Anatomy**: Large numeral above multi-line description.
- **Surface**: No background; sits directly on canvas.
- **Typography**: stat-display token for numerals; body token for descriptions, ink-secondary color.
- **Composition**: Equal-width columns with consistent internal alignment.

## Responsive behavior

The desktop layout visible in the supplied images shows a content column that occupies roughly 90% of viewport width with automatic centering. At narrower viewports, the multi-column grids should collapse: the three-column statistics row becomes a single stacked column; the asymmetric use-case grid simplifies to a single column with cards stacking vertically; the integration step diagram should either scale down or reposition below its corresponding text.

The hero section's side-by-side text-and-illustration composition should invert to vertical stacking on narrow screens, with the call-to-action button expanding to full width for touch accessibility. Typography should scale down proportionally: hero-display reducing to 2rem, section-display to 1.75rem, maintaining the same weight and tracking relationships.

The dotted background texture and line-art illustrations should remain visible but may reduce in density to prevent visual clutter at small sizes. Capability lists should collapse from two-column to single-column layout with full-width rules.

## Practical implementation guidance

### Preserve
- The warm orange-on-cream palette as the defining brand impression; this distinguishes the product from cooler competitor aesthetics.
- The single-weight line-art illustration style with consistent stroke color and no dimensional effects.
- The dotted canvas background texture across all sections.
- The generous section spacing that lets each narrative beat breathe.
- The asymmetric card grids that create visual rhythm through size variation.

### Avoid
- Introducing additional accent colors; the system succeeds through orange discipline.
- Heavy shadows or gradients that would contradict the flat, graphic illustration style.
- Pure white backgrounds that would eliminate the warm, approachable tone.
- Tightening display tracking further; the current negative values are calibrated for legibility.
- Making all cards identical in height and structure; the asymmetry creates energy.

### Recommended build order
1. Establish the color tokens and apply canvas background with dotted texture.
2. Set Inter at root with the complete type scale, ensuring display sizes use tight tracking.
3. Build the hero section with left-aligned text and right-floating illustration zone.
4. Create the pill button component with action background and full radius.
5. Implement section headers with numbered labels and display headings.
6. Construct the integration steps with capability lists and branching diagrams.
7. Add the statistics row with large numerals and supporting descriptions.
8. Build the use-case grid with asymmetric card sizing and line-art illustrations.

### Accessibility
- Ensure orange text on cream backgrounds meets WCAG AA contrast ratios; the ink token at #C2410C on #FFFBEB should be verified mathematically.
- Provide visible focus states for pill buttons, likely using a ring or outline in ink color.
- Maintain touch targets of at least 44px for buttons and links on responsive layouts.
- Add `aria-label` descriptions to illustrative diagrams that convey technical concepts.
- When reducing motion, preserve the static layout without animated entrance effects.

## Scope note

This guide covers the Cloudflare RealtimeKit marketing page's visual system as visible in the supplied desktop screenshots. Mobile breakpoints, interactive states, form components, and documentation pages are not represented. Measurements are practical adaptation targets derived from the visible interface.
