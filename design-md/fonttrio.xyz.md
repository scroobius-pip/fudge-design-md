# How fonttrio.xyz is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/fonttrio.xyz-design)

Last updated: 2026-08-10

## Captured pages

[![Grid of font pairing cards showing heading and body font samples with install commands and category filters](https://pin.fontofweb.com/7847?format=jpg)](https://design.withfudge.com/share/pin-7847)

[Grid of font pairing cards showing heading and body font samples with install commands and category filters](https://design.withfudge.com/share/pin-7847)

[![Hero section with oversized 'Three fonts' display type, grid background, and package manager selector](https://pin.fontofweb.com/7846?format=jpg)](https://design.withfudge.com/share/pin-7846)

[Hero section with oversized 'Three fonts' display type, grid background, and package manager selector](https://design.withfudge.com/share/pin-7846)

## Overview

Fonttrio is a dark-themed showcase and distribution tool for curated font combinations built for shadcn/ui projects. The interface immerses visitors in a near-black environment where typography itself becomes the primary visual content. The design philosophy strips away decorative chrome in favor of maximum contrast between the deep canvas and bright, precisely rendered type specimens. Each font pairing is presented as a self-contained card that demonstrates the relationship between heading, body, and monospace fonts through live samples and descriptive text. The overall impression is technical, authoritative, and gallery-like—treating typefaces as artifacts worthy of focused attention rather than commodities in a list.

## Colors

The color system is intentionally austere, built on a near-monochrome foundation that ensures any font specimen remains fully legible and visually dominant.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background; deepest layer |
| surface | #0A0A0A | Card backgrounds, secondary containers |
| surface-raised | #141414 | Elevated elements like command bars |
| border | #1F1F1F | Hairline dividers, card borders, button outlines |
| ink | #EDEDED | Primary text, headings, active states |
| muted-ink | #888888 | Secondary text, descriptions, inactive labels |
| action | #EDEDED | Interactive text, hover states, primary actions |

The palette operates in a single dark mode with no light variant. The near-black canvas absorbs light while the off-white ink provides comfortable reading contrast without the harshness of pure white. Muted ink serves as the bridge between content tiers, appearing in body descriptions, category labels, and secondary metadata. The border color is subtle enough to structure space without drawing attention to itself. No gradients, shadows, or accent colors compete with the font specimens—every chromatic decision defers to the typography.

## Typography

The site's own interface uses a restrained system font stack, while the displayed content introduces a wide variety of external families. This creates a useful tension: the UI recedes while the specimens command attention.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Montserrat | 12rem | 800 | 1 | -0.03em | Hero "Three fonts" headline |
| section-heading | System | 1.75rem | 700 | 1.1 | normal | Card heading specimens |
| body | System | 1rem | 400 | 1.5 | normal | Navigation, primary UI text |
| body-small | System | 0.875rem | 400 | 1.43 | normal | Descriptions, metadata |
| label | System | 0.75rem | 400 | 1.33 | 0.05em | Category tags, uppercase labels |
| code | Inconsolata | 0.6875rem | 400 | 1.5 | normal | Install commands, monospace samples |

The hero display at 192px (12rem) uses Montserrat at ExtraBold weight with tight negative tracking, creating an architectural presence that fills the viewport width. Section headings for card specimens render at 28px (1.75rem) in System UI, though the actual displayed fonts vary per pairing. Body text across the interface maintains 16px (1rem) with comfortable 1.5 line height. Labels and tags shrink to 12px (0.75rem) with slight positive tracking for scannability. Code samples use Inconsolata at 11px (0.6875rem), compact but legible within bounded command bars.

The specimen cards demonstrate pairings drawn from a broad library: Archivo, Exo 2, Inconsolata, Jet Brains Mono, Karla, Libre Baskerville, Manrope, Montserrat, Mukta, Outfit, Plus Jakarta Sans, Pt Serif, Pt Sans, Roboto, Schibsted Grotesk, Source Code Pro, Space Grotesk, and Titillium. These appear as heading, body, or monospace fonts within individual cards according to each curated combination. System-Systemui serves as the UI font family in the extracted data.

Font credits: Montserrat by Julieta Ulanovsky; Libre Baskerville by Pablo Impallari Rodrigo Fuenzalida; Manrope by Mikhail Sharanda; Outfit by Rodrigo Fuenzalida via Frag Type; Plus Jakarta Sans by Gumpita Rahayu via Tokotype; Roboto by Christian Robertson via Google; Space Grotesk by Florian Karsten; Archivo by Hector Gatti via Omnibus Type. Verify licensing for these families before production use.

## Layout

The layout follows a strict grid system that remains visible as a subtle background texture in the hero section. This grid serves as both structural guide and aesthetic motif, reinforcing the site's technical precision.

The page uses a single-column hero that transitions into a three-column card grid. The hero occupies substantial vertical space with generous padding—approximately 4rem on the sides and significant top offset to center the massive display type vertically within the viewport. Below, the card grid maintains consistent gutters and uniform card heights.

Navigation sits at the very top as a fixed or sticky bar, spanning full width with interior padding of 48px horizontal. The filter row beneath uses a horizontal scroll or wrap of pill-shaped category buttons. Cards themselves stack in a masonry-like or strict grid formation, each containing: a heading specimen, body specimen, install command bar, and action footer with pairing name and arrow.

Spacing derives from a 2px base unit, with practical values at 8px (0.5rem), 12px (0.75rem), 16px (1rem), 20px (1.25rem), 32px (2rem), 48px (3rem), and 64px (4rem). Section breaks use the larger values to create breathing room between content zones.

## Visual language

The visual language is that of a technical reference or specimen book translated to the web. The persistent grid background in the hero suggests design software, engineering diagrams, or typographic baseline guides. This metaphor extends to the precise alignment of all elements to invisible columns.

Visual hierarchy is established entirely through scale and weight rather than color variation. The hero headline dominates through sheer size; card headings through weight and brightness; body text through position and containment within bordered regions. The absence of imagery, illustration, or decorative graphics means every visual decision must serve clarity and readability.

The border treatment is consistent and minimal: 1px solid lines in the border color separate cards, define command bars, and outline interactive elements. These borders are sharp with no radius on cards, though buttons receive slight rounding. The overall effect is crisp, almost print-like in its precision.

Iconography is limited to functional symbols: copy icons for commands, arrows for navigation, and simple glyphs for external links. These remain small and in muted ink so as not to compete with type specimens.

## Components

### Navigation bar
- **Anatomy**: Logo wordmark left-aligned, utility links right-aligned
- **Surface**: Transparent or canvas background, no border
- **Typography**: `{typography.body}` in ink
- **Spacing**: 48px horizontal padding, comfortable vertical centering
- **Composition**: Flex row with space-between alignment

### Category filter
- **Anatomy**: Horizontal row of pill buttons with category labels
- **Surface**: Transparent background for container, surface with border for individual pills
- **Typography**: `{typography.label}` in muted ink, ink when active
- **Shape**: Pills with slight rounding or sharp rectangles
- **Spacing**: Compact horizontal gap between pills, 12px-16px internal padding
- **Variants**: Active state shows underline or filled background; inactive shows border only

### Font pairing card
- **Anatomy**: Heading specimen, body specimen, install command, footer with pairing name and arrow
- **Surface**: `{colors.surface}` background, `{colors.border}` top border
- **Typography**: Variable heading in displayed font at `{typography.section-heading}`; body in displayed font at `{typography.body-small}`; metadata in `{typography.label}`
- **Spacing**: 16px-32px internal padding, generous vertical rhythm between specimens
- **Composition**: Stacked vertical flow with clear separation between type categories

### Install command bar
- **Anatomy**: Monospace command string with copy icon button
- **Surface**: `{colors.surface-raised}` background, `{colors.border}` border
- **Typography**: `{typography.code}` in muted ink
- **Shape**: Slight rounding (6px)
- **Spacing**: 10px-16px internal padding, full-width within card
- **Composition**: Flex row with command left, copy action right

### Action button
- **Anatomy**: Text label with arrow icon
- **Surface**: Transparent or surface background
- **Typography**: `{typography.body-small}` in ink
- **Shape**: Sharp or slightly rounded
- **Spacing**: 12px-16px padding
- **Variants**: Hover state may shift arrow position or underline text

## Responsive behavior

The three-column card grid should collapse to two columns at intermediate widths and single column on narrow viewports. The hero display type must scale down dramatically—below 6rem on tablet and 3rem on mobile—to maintain readability without horizontal overflow. Navigation may compress to a hamburger menu or simplify to essential links. Category filters should remain horizontally scrollable rather than wrapping, preserving the pill aesthetic. Card internal spacing can reduce by half on mobile while maintaining the vertical content sequence. The install command bar should remain full-width within its card and may truncate with ellipsis if the command string exceeds container width.

## Practical implementation guidance

### Preserve
- The extreme contrast between near-black canvas and off-white text
- The grid background texture in the hero section
- The strict typographic hierarchy using only scale, weight, and spacing
- The three-part card structure: heading specimen, body specimen, command bar
- The monospace font for all code and command displays

### Avoid
- Introducing accent colors that compete with font specimens
- Adding shadows or dimensional effects that soften the flat aesthetic
- Using rounded corners on cards—the sharp edges reinforce the technical tone
- Generating placeholder imagery or decorative graphics
- Light mode without careful rebalancing of the entire contrast system

### Recommended build order
1. Establish the dark canvas and grid background system
2. Implement the hero with Montserrat at display scale
3. Build the navigation and filter bar with system fonts
4. Create the card component with variable font injection for specimens
5. Add install command bars with copy functionality
6. Implement the responsive grid collapse

### Accessibility
- Ensure the 4.5:1 contrast ratio between muted ink and canvas for small text
- Provide visible focus indicators on all interactive elements
- Make category filters keyboard-navigable as a single tab stop with arrow key traversal
- Include `aria-label` on copy buttons that describe the action
- Allow users to select and copy command text directly, not only via the copy button

## Scope note

This guide covers the landing page experience including the hero section, category filters, and font pairing card grid. It does not document individual pairing detail pages, theme switching behavior, or the full installation flow. Motion, loading states, and mobile-specific navigation patterns are not represented in the supplied material.
