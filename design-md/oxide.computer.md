# How oxide.computer is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/oxide.computer-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with Oxide logo, navigation bar, and large display headline on near-black background with teal accent badge](https://pin.fontofweb.com/5418?format=jpg)](https://design.withfudge.com/share/pin-5418)

[Hero section with Oxide logo, navigation bar, and large display headline on near-black background with teal accent badge](https://design.withfudge.com/share/pin-5418)

[![Split-panel diagram showing conventional rack architecture with ASCII-style illustration and explanatory text with red status indicators](https://pin.fontofweb.com/5417?format=jpg)](https://design.withfudge.com/share/pin-5417)

[Split-panel diagram showing conventional rack architecture with ASCII-style illustration and explanatory text with red status indicators](https://design.withfudge.com/share/pin-5417)

[![Oxide rack system diagram with teal-outlined server components and product photograph showing green-lit hardware chassis](https://pin.fontofweb.com/5416?format=jpg)](https://design.withfudge.com/share/pin-5416)

[Oxide rack system diagram with teal-outlined server components and product photograph showing green-lit hardware chassis](https://design.withfudge.com/share/pin-5416)

[![Feature grid with monospace terminal-style illustrations, hex code displays, and section headlines on dark background](https://pin.fontofweb.com/5415?format=jpg)](https://design.withfudge.com/share/pin-5415)

[Feature grid with monospace terminal-style illustrations, hex code displays, and section headlines on dark background](https://design.withfudge.com/share/pin-5415)

## Overview

Oxide Computer Company's website presents a dark, technically precise visual system built for infrastructure engineers and enterprise decision-makers. The design immerses visitors in a near-black environment that evokes server rooms and terminal interfaces, using a restrained teal accent to signal action, status, and brand identity. The aesthetic balances Swiss typographic clarity with monospace technical detailing, creating authority without coldness.

The page structure alternates between expansive hero moments and dense informational panels. Large display typography dominates the upper viewport, while split-panel layouts below pair schematic diagrams with explanatory prose. This rhythm—visual impact followed by technical depth—mirrors the company's promise of making complex infrastructure approachable. Every element reinforces the narrative of ownership and control: the cloud you can physically locate, operate, and understand.

The system relies on three material typefaces working in concert. Font-Copyright C 2014 Swiss Typefaces Sàrl All Rights Reserved provides the human voice in Light and Regular weights, Gt America Mono-Regular Occ handles technical annotations and interface elements, and the overall composition maintains generous breathing room despite information density. Color is used sparingly and purposefully: teal for the living system, red only for error states in diagrams, and warm neutrals for text hierarchy.

## Colors

| token | value | use |
|---|---|---|
| canvas | #0a0f0d | Primary page background, deepest layer |
| surface | #141a17 | Card backgrounds, elevated panels |
| surface-elevated | #1c2420 | Hover states, active diagram backgrounds |
| ink | #e8e8e8 | Primary headings, body text, interactive labels |
| ink-muted | #8a9a8f | Secondary descriptions, diagram annotations, footer text |
| accent | #48d597 | Primary action color, logo, status indicators, diagram highlights |
| accent-muted | #2a8a5e | Subtle teal backgrounds, inactive diagram elements |
| accent-warn | #e85d5d | Error states in technical diagrams, status failures |
| border | #2a3a32 | Panel dividers, card outlines, subtle separators |

The color system operates in a single dark mode with no light variant. The canvas color is not pure black but a very dark green-black that reduces eye strain and harmonizes with the teal accent family. This warmth prevents the interface from feeling clinical.

Teal functions as the sole brand accent, appearing in the Oxide logo, navigation badges, diagram outlines, and interactive elements. The accent is bright enough for accessibility against dark backgrounds but saturated enough to feel distinctive in the infrastructure software category. Red appears only within technical illustrations to denote error conditions, never as a UI action color.

Text hierarchy relies on luminance contrast rather than color variation. Primary ink is near-white for maximum readability; muted ink drops to approximately 55% perceived lightness for secondary content. Borders sit at low contrast to avoid visual noise while maintaining structural definition.

Photographic content—such as the product hardware image—introduces its own palette of dark metals and green LED illumination. These images do not dictate UI colors but harmonize naturally with the established system.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Font-Copyright C 2014 Swiss Typefaces Sàrl All Rights Reserved | 4rem | 300 | 1.05 | -0.02em | Homepage headline, major page titles |
| section-display | Font-Copyright C 2014 Swiss Typefaces Sàrl All Rights Reserved | 2.5rem | 300 | 1.1 | -0.01em | Section headings, feature introductions |
| body | Font-Copyright C 2014 Swiss Typefaces Sàrl All Rights Reserved | 1rem | 400 | 1.6 | 0em | Paragraphs, descriptions, general content |
| body-large | Font-Copyright C 2014 Swiss Typefaces Sàrl All Rights Reserved | 1.25rem | 400 | 1.5 | 0em | Lead paragraphs, emphasized explanations |
| label | Gt America Mono-Regular Occ | 0.75rem | 400 | 1.4 | 0.04em | Badges, tags, technical metadata |
| navigation | Font-Copyright C 2014 Swiss Typefaces Sàrl All Rights Reserved | 0.75rem | 400 | 1 | 0.06em | Primary navigation, uppercase treatments |
| code | Gt America Mono-Regular Occ | 0.875rem | 400 | 1.5 | 0em | Diagram annotations, terminal output, hex displays |

The design uses three supplied font families: Font-Copyright C 2014 Swiss Typefaces Sàrl All Rights Reserved, Font-Copyright C 2015 Swiss Typefaces Sàrl All Rights Reserved, and Gt America Mono-Regular Occ. Font-Copyright C 2014 Swiss Typefaces Sàrl All Rights Reserved appears in two weights: Light (300) for display headings and Regular (400) for body text. The Light weight's thin strokes against the dark canvas create an elegant, confident voice that avoids heaviness. Font-Copyright C 2015 Swiss Typefaces Sàrl All Rights Reserved provides an additional lighter weight from the same foundry, suitable for refined display treatments. Gt America Mono-Regular Occ by Grilli Type, designed by Noel Leu, handles all technical and interface typography. Its slightly condensed proportions maintain readability at small sizes while preserving the mechanical character appropriate for infrastructure software.

Type sizes follow a 4px grid system. Display sizes at 64px and 40px anchor the hierarchy, with body text at 16px and small labels at 12px. The monospace label size is intentionally compact to fit within constrained UI elements without breaking the grid.

Letter spacing is tight for display type to create visual cohesion, while body text uses default spacing for comfortable reading. Navigation labels receive positive tracking for uppercase presentation, a common pattern in technical interfaces that improves scannability.

Verify licensing for these families before production use. Font-Copyright C 2014 Swiss Typefaces Sàrl All Rights Reserved and Font-Copyright C 2015 Swiss Typefaces Sàrl All Rights Reserved are available from Swiss Typefaces; Gt America Mono-Regular Occ is available from Grilli Type.

## Layout

The page employs a full-bleed dark canvas with centered content containers. Maximum content width is approximately 75rem, creating generous margins on large displays that frame the technical content without isolating it.

The hero section occupies the full viewport width with centered alignment. Navigation spans the full width with internal padding, establishing immediate orientation. Below the hero, the layout shifts to asymmetric split panels: technical diagrams occupy the left portion while explanatory text occupies the right, separated by a vertical border.

Feature sections use a two-column grid for paired illustrations, with headlines and descriptions aligned to a consistent left margin. The "No assembly required" section demonstrates this clearly: a large left-aligned headline block balances against two equal feature cards on the right.

Vertical rhythm is established through section spacing of 6rem between major content blocks. Within sections, component gaps of 1.5rem separate related elements. The diagram panels use internal padding of approximately 2rem to contain their ASCII-style illustrations without crowding.

Grid alignment is precise and visible. Diagram elements snap to implied columns, and text blocks maintain consistent widths. This visible structure reinforces the engineering credibility of the brand—every pixel appears intentional.

The layout does not use sidebar navigation, floating action buttons, or persistent promotional banners. The interface remains clean and focused on content consumption, with navigation collapsing to a horizontal bar that prioritizes product information over marketing conversion.

## Visual language

The visual language merges technical documentation aesthetics with premium brand presentation. ASCII-style diagrams rendered in monospace characters evoke terminal interfaces and engineering schematics, yet they are composed with care for visual balance and spacing. These diagrams use color strategically: teal outlines for the Oxide system architecture, red for error conditions in conventional rack illustrations.

Line art dominates over photography. The schematic diagrams use dotted borders, bracket labels, and connector lines to explain system architecture without realistic rendering. When photography does appear—as with the product hardware image—it is treated objectively: centered, shadowed, and surrounded by generous negative space.

Iconography is minimal and functional. Small emoji-style indicators (thumbs down, thumbs up) appear in feature lists to signal negative and positive attributes. These are rendered at text size and inherit the surrounding color, avoiding custom icon sets.

The terminal aesthetic extends to data displays. Hexadecimal strings and command-line fragments appear in monospace within bordered panels, complete with bracketed actions like [CANCEL] and [RENEW]. These elements are not decorative; they communicate the API-driven, programmatic nature of the product.

Borders are hairline-thin and low-contrast, serving as structural guides rather than visual elements. The 1px border color sits just visible against the canvas, creating panel definition without the heaviness of card-based designs.

## Components

### Navigation Bar

- **Anatomy**: Full-width bar containing logo mark left, horizontal link list center, and action buttons right
- **Surface**: Transparent over canvas, with optional bottom border in border color
- **Typography**: Navigation token, uppercase, letter-spaced
- **Spacing**: Internal padding of 1rem vertical, 2rem horizontal from viewport edges
- **Composition**: Logo and primary actions anchor extremes; navigation links cluster center with consistent gaps

The navigation presents seven primary destinations: Product, Resources, Company, Careers (with numeric badge), Podcasts, Blog. The Careers badge uses a small rounded rectangle in surface-elevated with accent text, indicating active hiring. Two right-aligned actions—"TRY NOW" as text button and "CONTACT SALES" as bordered button—provide conversion paths without visual dominance.

### Primary Button

- **Anatomy**: Text label with optional border, no background fill
- **Surface**: Transparent background; 1px solid border in accent for emphasis
- **Typography**: Label token, uppercase, letter-spaced
- **Shape**: 0.25rem border radius
- **Spacing**: Horizontal padding 1rem, vertical padding 0.5rem

Buttons avoid filled backgrounds to maintain the dark, technical atmosphere. The accent border variant indicates primary action; text-only variants serve secondary actions. This restraint prevents the interface from feeling like a consumer application.

### Accent Badge

- **Anatomy**: Inline pill containing icon, text, and chevron
- **Surface**: Surface-elevated background
- **Typography**: Label token in accent color
- **Shape**: 0.5rem border radius
- **Composition**: Icon left, text center, directional chevron right

The hero badge ("Blog: Our $100M Series B") demonstrates this component: a lightning bolt icon precedes the announcement text, with a right chevron indicating navigation. The badge sits centered above the hero headline, serving as both announcement and subtle call-to-action.

### Feature Card

- **Anatomy**: Bordered container with internal illustration and text block
- **Surface**: Surface background, 1px border in border color
- **Shape**: 0.5rem border radius
- **Spacing**: Internal padding 1.5rem, illustration-to-text gap 1rem
- **Composition**: Illustration centered or top-aligned; headline and description stacked below

Feature cards pair technical illustrations with concise explanations. The "Instant IT transformation" card shows a server rack diagram in teal line art; "No more license management" displays hexadecimal output in monospace. Both maintain consistent internal spacing and border treatment.

### Diagram Panel

- **Anatomy**: Full-height panel with schematic illustration and bracket labels
- **Surface**: Canvas background, optional left border for separation
- **Typography**: Code token for labels, body token for descriptions
- **Composition**: Illustration left-aligned with consistent margins; labels positioned at diagram nodes

The diagram panels are the most distinctive components. FIG 1 and FIG 2 present rack architectures using ASCII characters and geometric lines. Labels like [SERVER], [NETWORK], [STORAGE] use bracket notation in monospace. The Oxide rack diagram uses teal outlines; the conventional rack uses muted gray with red error indicators.

### Pull Quote

- **Anatomy**: Left border accent with large text block
- **Surface**: Transparent, with 2px left border in accent
- **Typography**: Body-large token
- **Spacing**: Left padding 1.5rem, vertical margin 2rem

Pull quotes appear within explanatory text to emphasize key value propositions. The left accent border creates visual interruption without breaking the reading flow.

## Responsive behavior

The split-panel layout should stack vertically on narrow viewports, with diagrams preceding their explanatory text. The diagram illustrations may require horizontal scrolling or scaled rendering to maintain legibility of monospace characters.

Navigation should collapse to a compact menu on small screens, preserving the logo and primary action while hiding secondary links behind an expandable control. The uppercase, letter-spaced navigation style remains appropriate at reduced sizes.

Hero display type should scale down proportionally. The 4rem headline may reduce to 2.5rem on mobile to prevent excessive line breaks. Body text maintains 1rem minimum for readability.

Feature cards should stack from two columns to single column, maintaining internal proportions. The terminal-style illustrations within cards are self-contained and scale naturally.

Diagram panels require particular attention: the ASCII art depends on fixed character widths. Consider rendering these as SVG or preformatted text with overflow handling rather than attempting responsive reflow.

## Practical implementation guidance

### Preserve
- The near-black canvas with subtle green undertone; pure black loses the warmth
- Teal as the sole interactive accent; reserve red for error states only
- Monospace for all technical annotations and interface metadata
- Light weight display type against dark backgrounds for the characteristic elegance
- Hairline borders at low contrast for panel separation
- Generous section spacing that lets technical content breathe

### Avoid
- Light mode variants; the dark aesthetic is integral to brand identity
- Multiple accent colors; the teal-only system is deliberately restrained
- Heavy drop shadows or elevation effects; depth is communicated through borders and spacing
- Rounded corners larger than 0.5rem on panels; the aesthetic is precise, not friendly
- Custom icon sets; the existing emoji-style indicators and ASCII diagrams are sufficient

### Recommended Build Order
1. Establish the dark canvas and border color system
2. Implement Font-Copyright C 2014 Swiss Typefaces Sàrl All Rights Reserved in Light and Regular weights with display and body sizes
3. Add Gt America Mono-Regular Occ for labels, navigation, and code elements
4. Build navigation bar with logo, links, and bordered action button
5. Create hero section with centered badge and large display headline
6. Implement split-panel layout for diagram and text sections
7. Add feature cards with terminal-style illustrations
8. Refine spacing, borders, and responsive stacking behavior

### Accessibility
- Ensure teal accent meets WCAG AA contrast against canvas (4.5:1 minimum for text)
- Provide focus indicators that complement the border-based interaction style
- Maintain monospace text at minimum 12px for legibility
- Consider reduced-motion preferences for any diagram animations
- Use semantic heading hierarchy despite the visual similarity of display weights

## Scope note

This guide covers the Oxide Computer Company homepage and its characteristic dark technical aesthetic. It does not include interior product pages, documentation interfaces, or the authenticated control panel. Measurements are practical adaptation targets derived from visual inspection. Mobile breakpoints, motion design, form components, and error page treatments are not represented in the supplied material.
