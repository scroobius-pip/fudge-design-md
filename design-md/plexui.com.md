# How plexui.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/plexui.com-design)

Last updated: 2026-08-10

## Captured pages

[![Colors page showing grayscale, alpha, and primary color palettes with numbered swatches on a dark background](https://pin.fontofweb.com/8772?format=jpg)](https://design.withfudge.com/share/pin-8772)

[Colors page showing grayscale, alpha, and primary color palettes with numbered swatches on a dark background](https://design.withfudge.com/share/pin-8772)

[![Typography page displaying heading and text scales with size, weight, tracking, and line height specifications](https://pin.fontofweb.com/8771?format=jpg)](https://design.withfudge.com/share/pin-8771)

[Typography page displaying heading and text scales with size, weight, tracking, and line height specifications](https://design.withfudge.com/share/pin-8771)

[![Design Tokens page showing breakpoint values and motion curves with cubic-bezier functions](https://pin.fontofweb.com/8340?format=jpg)](https://design.withfudge.com/share/pin-8340)

[Design Tokens page showing breakpoint values and motion curves with cubic-bezier functions](https://design.withfudge.com/share/pin-8340)

[![Design Tokens page with radius scale tokens from 2px to 9999px and sidebar navigation structure](https://pin.fontofweb.com/8339?format=jpg)](https://design.withfudge.com/share/pin-8339)

[Design Tokens page with radius scale tokens from 2px to 9999px and sidebar navigation structure](https://design.withfudge.com/share/pin-8339)

## Overview

Plex UI presents a dark-first design system built for technical documentation and component libraries. The visual language prioritizes clarity through high-contrast typography, systematic color palettes, and dense information architecture. Every surface sits on a near-black canvas, with content organized through subtle elevation changes rather than heavy shadows or borders. The system feels engineered rather than decorative—functional precision guides every decision, from the stepped grayscale palette to the exacting type scale that supports both prose reading and code reference.

The design system serves developers and designers who need to scan, compare, and implement design tokens quickly. Pages are structured with persistent navigation, dense token tables, and visual demonstrations that reduce abstraction. The dark environment reduces eye strain during extended technical reading while making color tokens and interactive states more legible through direct contrast. The overall impression is of a tool that respects the user's attention and time.

## Colors

The color system is built on three foundational palettes: grayscale, alpha values, and primary colors with warm undertones. Each palette is numbered by lightness steps, creating predictable, interpolatable scales. The interface uses these primitives through semantic tokens rather than direct palette references.

| token | value | use |
|---|---|---|
| canvas | #0D0D0D | Page background, deepest surface |
| surface | #161616 | Card backgrounds, elevated panels |
| surface-elevated | #1C1C1C | Hover states, active navigation items |
| ink | #EDEDED | Primary headings, important labels |
| ink-secondary | #999999 | Body text, descriptions |
| ink-muted | #767676 | Tertiary text, disabled states, metadata |
| border | #282828 | Dividers, structural borders |
| border-subtle | #1C1C1C | Hairline separators on dark surfaces |
| action | #FFFFFF | Primary buttons, active text on dark |
| action-inverse | #000000 | Text on light or white backgrounds |
| code-bg | #FFFFFF | Inline code background, inverted for contrast |

The grayscale palette runs from 0 (pure black) through 500 (mid gray) to 1000 (pure white), with fine-grained steps at 25-unit intervals in the dark range and 50-unit intervals in the light range. Alpha values provide transparent overlays from 0 through 50, enabling subtle depth without additional colors.

Primary colors include warm red-orange tones and amber-yellow accents. The red scale runs from 25 (near-white pink) through 500 (vivid red) to 1000 (deep maroon), with alpha variants from a25 to a300. The amber scale follows the same structure, from pale cream through golden yellow to deep brown. These primaries appear in status indicators, code tokens, and accent elements throughout the documentation.

Semantic color application follows strict rules: text-primary uses ink on dark surfaces, text-secondary uses ink-secondary for descriptions, and text-muted handles metadata. Background surfaces progress from canvas through surface to surface-elevated based on interaction state and information hierarchy.

## Typography

The type system uses three font families: System, System-Uisansserif, and System-Uimonospace. System and System-Uisansserif serve all interface text, while System-Uimonospace handles code and token displays. The sans-serif families carry the full weight of the visual hierarchy, from massive display headings to compact labels.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | System | 4.5rem | 600 | 1 | 0em | Page titles, major section headers |
| section-display | System | 3.75rem | 600 | 1 | 0em | Large promotional headings |
| heading-3xl | System | 3rem | 600 | 1 | 0em | Major section divisions |
| heading-2xl | System | 2.25rem | 600 | 1.167 | 0em | Article titles, component names |
| heading-xl | System | 2rem | 600 | 1.188 | 0em | Subsection headers |
| heading-lg | System | 1.5rem | 600 | 1.167 | 0em | Group titles, feature headings |
| heading-md | System | 1.25rem | 600 | 1.3 | 0em | Card titles, medium emphasis |
| heading-sm | System | 1.125rem | 600 | 1.444 | 0em | Small headings, table headers |
| heading-xs | System | 1rem | 600 | 1.5 | 0em | Compact labels, token names |
| body-large | System | 1.125rem | 400 | 1.611 | 0em | Lead paragraphs, introductory text |
| body | System | 1rem | 400 | 1.5 | normal | Standard paragraphs, descriptions |
| body-tight | System | 1rem | 400 | 1.625 | -0.01em | Dense reading, documentation prose |
| text-small | System | 0.875rem | 400 | 1.429 | -0.01em | Secondary descriptions, captions |
| text-xs | System | 0.75rem | 400 | 1.5 | 0em | Metadata, timestamps, fine print |
| text-2xs | System | 0.625rem | 400 | 1.4 | 0em | Compact labels, badge text |
| text-3xs | System | 0.5rem | 400 | 1.5 | 0em | Minimal indicators |
| label | System | 0.6875rem | 400 | 1.429 | 0.08em | Category labels, uppercase-style tracking |
| code | System-Uimonospace | 0.875rem | 400 | 1.429 | -0.01em | Inline code, property values |
| code-small | System-Uimonospace | 0.75rem | 500 | 1 | normal | Token pills, compact code references |
| nav-primary | System | 0.875rem | 400 | 1.429 | normal | Top navigation items |
| nav-secondary | System | 0.875rem | 400 | 1.429 | -0.01em | Sidebar navigation, nested links |

Heading sizes from heading-5xl through heading-xs form a continuous scale with 600 weight and tight leading. Display sizes at 72px, 60px, and 48px use 1.0 line height for maximum impact. The body scale at 16px provides comfortable reading with 1.5 line height, while the tight variant at 1.625 accommodates longer documentation passages.

Verify licensing for these families before production use.

## Layout

The documentation layout follows a three-zone architecture: a fixed header, a persistent sidebar, and a scrollable content area with an optional right-hand table of contents.

The header spans the full viewport width with 32px horizontal padding. It contains the Plex UI logo and wordmark on the left, primary navigation links in the center, and utility actions (search, theme toggle, Figma Kit button) on the right. The header background matches the canvas color, creating seamless continuity with the page.

The sidebar occupies the left edge with 8px top padding, 12px horizontal padding, and 24px bottom padding. Navigation groups are separated by 24px vertical margins, with group labels using 14px semibold text and 8px bottom margin. Individual links receive 6px vertical padding, 12px right padding, and 20px left padding, creating a clear indentation hierarchy. Active states use surface-elevated background with rounded-lg corners.

The content area centers documentation with generous breathing room. Token tables and specification lists use horizontal rules between items, with token names in monospace pills and values in regular weight. Code demonstrations live in bounded regions with surface background and subtle borders.

Spacing follows a 2px base unit system. Common increments include 4px for tight internal padding, 8px for component breathing room, 12px and 16px for section gaps, 24px for major divisions, 32px for page margins, and 48px for section breaks. The radius scale progresses from 2px through 24px in logical steps, with 9999px reserved for full pills.

Breakpoints are defined at 380px, 576px, 768px, 1024px, 1280px, and 1536px, enabling precise responsive behavior across device categories.

## Visual language

The visual character of Plex UI is austere and systematic. Every element communicates its purpose through position, scale, and color value rather than ornament. The dark canvas creates a focused, technical atmosphere that reduces visual fatigue during extended use.

Color application is restrained and purposeful. The near-black canvas allows the grayscale and primary palettes to read with maximum fidelity. Token demonstrations use the actual color values as backgrounds, making the system self-documenting. Alpha values appear as subtle overlays on dark surfaces, creating depth without introducing new hues.

Typography dominates the visual hierarchy. Large headings use tight leading and zero tracking for a compact, authoritative presence. Body text opens up with slightly increased leading for readability. The monospace family appears exclusively for code, token names, and technical values, creating clear separation between prose and specification.

Shapes are predominantly rectangular with controlled rounding. Small elements like token pills use 4px radius. Buttons and navigation items use 8px. Cards and panels use 12px or 16px. Full pills appear for tags and status indicators. The absence of heavy shadows keeps surfaces flat; depth is suggested through background color changes and thin border lines.

Motion is defined through precise cubic-bezier curves: enter animations use an expressive ease-out (0.19, 1, 0.22, 1), exit animations use a snappy ease-in (0.65, 0, 0.4, 1), and basic transitions use standard ease over 150ms. These values create responsive, purposeful movement that supports rather than distracts.

## Components

### Token Display Row

Anatomy: Horizontal row containing a token name pill, descriptive text, and a value display. Some rows include a small preview square for color or radius tokens.

Surface: Token name uses code-small typography on a surface-elevated background with rounded-sm. The value area uses body typography in ink-secondary.

Typography: Token names in System-Uimonospace at 12px weight 500. Descriptions in System at 16px weight 400. Values in System at 16px weight 400.

Shape: Token pill has 4px radius with 2px 6px padding. Full row has a 1px bottom border in border-subtle.

Spacing: 12px vertical padding per row, 16px horizontal padding in content area.

Composition: Flex row with token name fixed left, value fixed right, description filling the middle on wider rows.

### Navigation Link

Anatomy: Text label with optional icon prefix, contained in a clickable region.

Surface: Default state uses transparent background with nav-secondary typography in ink-secondary. Hover and active states use surface-elevated background with ink color.

Typography: 14px System weight 400, with -0.01em letter spacing for sidebar items.

Shape: 8px border radius on the container.

Spacing: 6px vertical padding, 12px right padding, 20px left padding for sidebar links. 4px vertical padding, 10px horizontal padding for top navigation items.

Variants: Default, hover, active. Active state in sidebar shows a subtle left-edge indicator through increased left padding.

### Code Pill

Anatomy: Inline code token with monospace text on a light background.

Surface: White background with 6px radius. Text uses code typography in ink color.

Typography: System-Uimonospace at 14px weight 400, or 12px weight 500 for compact variants.

Shape: 6px radius, 2px 8px padding for standard size. 4px radius, 2px 6px padding for small variant.

Spacing: Inline with text flow, or stacked in specification tables.

### Button

Anatomy: Text label with optional icon, contained in a clickable region with defined height.

Surface: Multiple variants visible: solid dark with white text, solid white with dark text, and subtle ghost styles. Some buttons use full pill shape.

Typography: 14px System weight 500 for standard buttons. 12px System weight 500 for compact buttons. 14px System weight 600 for emphasized actions.

Shape: 9999px radius for pill buttons. 8px radius for standard buttons.

Spacing: 0px 16px horizontal padding for standard, 0px 10.64px for compact. Height maintained through line-height and padding balance.

Variants: Primary (dark fill, light text), secondary (light fill, dark text), ghost (transparent with border), and status-colored variants using the primary palette.

### Color Swatch

Anatomy: Rectangular color sample with numbered label beneath.

Surface: The swatch background displays the actual color value. Labels use ink or action-inverse depending on swatch luminance.

Typography: 12px to 14px System weight 400 for numeric labels.

Shape: Sharp corners for palette grids, creating continuous color fields.

Spacing: Zero gap between adjacent swatches in palette displays. Generous margins between palette groups.

Composition: Horizontal bands for each palette, with values progressing left to right from light to dark or dark to light.

### Specification Table

Anatomy: Columnar display with token names, values, and sometimes preview elements.

Surface: Transparent background with horizontal rules between rows.

Typography: Token names in code-small. Values in body or text-small. Column headers in text-small with ink-muted color.

Shape: Full-width container with 1px horizontal rules in border-subtle.

Spacing: 12px to 16px vertical padding per row.

## Responsive behavior

The documentation layout adapts primarily through the sidebar and content width. At narrower viewports, the sidebar collapses or becomes overlay-based. The content area maintains readable line lengths through max-width constraints.

The breakpoint system at 380px, 576px, 768px, 1024px, 1280px, and 1536px enables granular control. The sidebar likely collapses below 1024px, with the table of contents moving or hiding below 768px. Token tables may switch from multi-column to single-column layouts below 576px.

Typography scales down modestly at smaller sizes. Display headings reduce by one or two steps. Body text maintains 16px for readability. Touch targets for navigation and buttons expand to minimum 44px height on mobile devices.

Motion preferences should be respected: the defined cubic-bezier curves and 150ms duration should disable or simplify when reduced-motion is active.

## Practical implementation guidance

### Preserve
- The dark-first approach with near-black canvas and subtle surface elevations
- Systematic token naming that matches the visual progression (25, 50, 75... 1000)
- Monospace font restriction to code and token displays only
- Precise cubic-bezier curves for motion consistency
- The 2px base unit for all spacing and sizing calculations

### Avoid
- Introducing additional font families beyond the two system fonts
- Using palette colors directly instead of semantic tokens
- Adding heavy shadows or gradients that contradict the flat aesthetic
- Breaking the established type scale with arbitrary sizes
- Using half-step values in the spacing or radius scales

### Recommended build order
1. Establish the color token system with grayscale, alpha, and primary palettes
2. Implement the typography scale with exact size, weight, and leading values
3. Build the layout shell with header, sidebar, and content areas
4. Create the token display components (pills, tables, swatches)
5. Implement navigation with active states and collapse behavior
6. Add button variants with proper radius and padding
7. Apply motion curves to interactive elements

### Accessibility
- Maintain minimum 4.5:1 contrast for all body text against backgrounds
- Ensure token swatches include text labels or aria labels for screen readers
- Provide focus indicators that match the active state styling
- Support reduced-motion preferences by disabling or simplifying transitions
- Use semantic HTML for navigation regions and content hierarchy

## Scope note

This guide covers the documentation and design token surfaces of Plex UI, including the color, typography, and token reference pages. Component interaction states, form elements beyond buttons, and mobile-specific layouts are not fully represented in the supplied material. Motion implementation details beyond the defined curves are not specified. Measurements are derived from the documented token values and visible interface elements.
