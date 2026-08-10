# How logseq.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/logseq.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with teal rounded panel containing headline, subhead, and two action buttons against dark background with floating particles](https://pin.fontofweb.com/4099?format=jpg)](https://design.withfudge.com/share/pin-4099)

[Hero section with teal rounded panel containing headline, subhead, and two action buttons against dark background with floating particles](https://design.withfudge.com/share/pin-4099)

[![Feature grid with eight dark teal cards showing icons and white labels for open source, privacy, mobile apps, markdown, community, localization, plugins, and themes](https://pin.fontofweb.com/4098?format=jpg)](https://design.withfudge.com/share/pin-4098)

[Feature grid with eight dark teal cards showing icons and white labels for open source, privacy, mobile apps, markdown, community, localization, plugins, and themes](https://design.withfudge.com/share/pin-4098)

[![Dramatic dark scene with scattered note-taking objects, phone, PDF, and sticky notes surrounding centered white headline about losing thoughts](https://pin.fontofweb.com/4097?format=jpg)](https://design.withfudge.com/share/pin-4097)

[Dramatic dark scene with scattered note-taking objects, phone, PDF, and sticky notes surrounding centered white headline about losing thoughts](https://design.withfudge.com/share/pin-4097)

[![Product showcase with teal tip card, app interface screenshot, community section, and Discord/forum action buttons with online user count](https://pin.fontofweb.com/4096?format=jpg)](https://design.withfudge.com/share/pin-4096)

[Product showcase with teal tip card, app interface screenshot, community section, and Discord/forum action buttons with online user count](https://design.withfudge.com/share/pin-4096)

## Overview

Logseq's landing page presents a cohesive dark-mode experience built around a deep teal color story that evokes depth, focus, and calm. The design communicates privacy and thoughtfulness through its restrained palette and generous use of negative space. Content is organized in centered, rounded panels that float against an even darker canvas, creating a layered dimensional effect. The visual rhythm alternates between bold typographic statements and structured feature grids, with subtle particle effects adding atmospheric texture without distracting from the content. The overall impression is of a tool that takes knowledge seriously—professional yet approachable, technical yet human. The page avoids clutter through careful hierarchy, using size contrast and color temperature shifts to guide attention from headlines through supporting copy to action buttons.

## Colors

The color system is built on a narrow, intentional range that creates depth through value rather than hue variety. The dominant impression is of swimming in deep water—dark teals receding into near-black, with white text providing sharp readability and occasional warm accents for human touches.

| token | value | use |
|---|---|---|
| canvas | `#001e26` | Deepest background layer, page base, particle field ground |
| surface | `#0a3a47` | Primary panel and card backgrounds, hero container |
| surface-elevated | `#0f4d5c` | Button fills, interactive states, slightly lifted elements |
| ink | `#ffffff` | Primary text, headlines, active labels, icons |
| ink-muted | `#a8c5cc` | Secondary text, descriptions, captions, placeholder content |
| accent | `#4ecdc4` | Cyan highlight moments, tip card badges, interactive emphasis |
| accent-warm | `#e8a87c` | Humanizing warm accent, community indicators, subtle warmth |

The relationship between colors follows a strict dark-mode logic: canvas is the abyss, surface panels rise from it, and surface-elevated elements sit highest. White ink maintains maximum contrast against all dark backgrounds, while ink-muted provides a deliberate step down for supporting information without introducing a new hue. The accent cyan appears sparingly—on badges, progress indicators, and subtle highlights—while the warm accent grounds the technical palette in human warmth for community and social proof elements. No light mode is visible in the supplied material.

## Typography

The type system relies on a single sans-serif family with weight and size variation to establish hierarchy. Display text is bold and tight, body text is open and readable, and labels carry semibold authority at smaller sizes.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3.5rem | 700 | 1.1 | -0.02em | Main headlines, emotional statements |
| section-display | Inter | 2.5rem | 700 | 1.15 | -0.01em | Section headers, feature introductions |
| body-large | Inter | 1.25rem | 400 | 1.6 | 0 | Hero descriptions, prominent explanations |
| body | Inter | 1rem | 400 | 1.6 | 0 | Standard paragraphs, card descriptions |
| label | Inter | 0.875rem | 600 | 1.4 | 0.01em | Button text, card titles, navigation |
| caption | Inter | 0.75rem | 400 | 1.5 | 0.01em | Metadata, counts, fine print |

Display sizes use negative tracking for a crafted, intentional feel that prevents looseness at large scales. Body sizes maintain neutral tracking and generous line height for comfortable reading. The weight range is narrow—400 and 700 do most of the work, with 600 reserved for labels that need to feel authoritative without reaching headline weight. Verify licensing for these families before production use.

## Layout

The page follows a centered, contained layout with generous vertical breathing room. Sections stack with substantial gaps, and content rarely reaches the viewport edges.

The hero panel demonstrates the core layout pattern: a rounded rectangle centered horizontally, occupying roughly 85% of the viewport width, with internal content centered and stacked vertically. This panel-in-panel approach creates a framed, focused reading experience. Below the hero, sections alternate between full-bleed atmospheric backgrounds and contained content widths.

The feature grid in the middle section uses a four-column layout at desktop, with cards maintaining equal width and consistent internal padding. Cards align to a subtle grid with uniform gaps between them. The grid collapses responsively, though the exact breakpoint is not visible in the supplied material.

Lower sections introduce asymmetry for visual interest: the product showcase pairs a rounded tip card on the left with an app screenshot on the right, creating a diagonal reading flow that breaks the strict centering above. Community elements return to centered alignment, with paired action buttons sitting above metadata lines.

Vertical spacing follows a section-based rhythm. Major sections receive substantial top and bottom padding, while internal element spacing is tighter and more consistent. The particle background effect spans full sections, suggesting that layout containers are positioned relative to atmospheric layers.

## Visual language

The visual language balances technical credibility with creative warmth. The deep teal palette immediately signals "developer tool" while avoiding the coldness of pure black or blue-black alternatives. Rounded corners are pervasive—panels, cards, and buttons all share soft geometry that contradicts the sharp edges often associated with code-oriented products.

Particle effects drift across dark backgrounds like dust or plankton, adding motion and depth without forming recognizable patterns. These elements are subtle, low-contrast, and desaturated, ensuring they read as atmosphere rather than decoration.

Photographic and illustrative elements appear as floating objects in the dark space—phones, notebooks, PDF icons, sticky notes—arranged in scattered compositions that suggest creative chaos being organized. These objects carry realistic shadows and occasional color accents (the red YouTube play button, the yellow sticky note) that punctuate the teal monochrome.

The app interface screenshots use dark UI chrome with subtle borders, maintaining consistency with the page's own dark mode. Interface elements within screenshots mirror the page's design language: rounded corners, muted backgrounds, white text.

Iconography is simple and linear, appearing in white against dark card backgrounds. Icons sit to the left of labels in the feature grid, establishing a consistent two-part card structure. The Logseq logo mark—a rounded abstract form—appears as a small accent within headlines, treated as punctuation rather than branding.

## Components

### Hero panel

The hero panel is the page's signature element: a large rounded rectangle floating in the particle field.

- **Anatomy**: Centered headline with mixed weight (light phrase, bold phrase), centered subheadline, horizontal button pair
- **Surface**: Background `{colors.surface}`, full rounded corners at `{rounded.panel}`
- **Typography**: Headline uses `{typography.hero-display}` with the second half in bolder weight; subheadline uses `{typography.body-large}` in `{colors.ink-muted}`
- **Shape**: Generous border radius creating a soft container
- **Spacing**: Substantial internal padding, comfortable gap between text and buttons
- **Composition**: All elements centered, buttons arranged horizontally with gap between

### Action buttons

Two button variants appear in the hero and throughout.

- **Primary button**: Filled `{colors.surface-elevated}` background, white text, small border radius, includes leading icon and optional dropdown chevron or external-link indicator
- **Secondary button**: Transparent background, white text, subtle border, same size and radius as primary
- **Typography**: `{typography.label}` for button text
- **Spacing**: Horizontal padding roughly 1.5× the vertical, creating pill-like proportions without full rounding

### Feature cards

The eight-card grid presents product attributes with consistent structure.

- **Anatomy**: Icon left, title above description, single-column text stack
- **Surface**: `{colors.surface}` background, `{rounded.card}` border radius
- **Typography**: Title in `{typography.label}` white, description in `{typography.body}` at `{colors.ink-muted}`
- **Spacing**: Consistent internal padding, uniform gaps in the grid
- **Composition**: Icon and text left-aligned within each card, cards arranged in 2×4 or 4×2 grid

### Tip card

A highlighted content card with distinctive accent treatment.

- **Anatomy**: Emoji or icon, category badge, headline, progress bar, tip number and suggestion
- **Surface**: `{colors.surface}` with slightly elevated appearance, `{rounded.panel}` corners
- **Typography**: Category badge in `{typography.caption}` uppercase, headline in `{typography.section-display}`, tip text in `{typography.body}`
- **Shape**: Full rounded corners, horizontal progress indicator below headline
- **Composition**: Stacked vertically with clear hierarchy, navigation arrows and dot indicator below

### App showcase frame

Screenshots of the Logseq interface appear in rounded containers.

- **Surface**: Dark interface chrome with subtle border, `{rounded.card}` corners
- **Typography**: Internal UI text mirrors page typography at smaller scale
- **Composition**: Positioned asymmetrically relative to tip cards, overlapping slightly with adjacent elements to create depth

### Community buttons

Paired action buttons for social engagement.

- **Anatomy**: Icon, label, external-link arrow, metadata line below
- **Surface**: `{colors.surface-elevated}` fill, `{rounded.button}` corners
- **Typography**: `{typography.label}` for button text, `{typography.caption}` for metadata
- **Composition**: Buttons arranged horizontally with gap, metadata centered below each

## Responsive behavior

The supplied images show desktop layouts exclusively. Based on the visible structure, several responsive adaptations are recommended.

The hero panel's generous width should narrow on smaller viewports, maintaining internal padding while allowing the canvas background to show at the edges. The headline size should scale down, potentially to `{typography.section-display}` at the smallest sizes.

The four-column feature grid should collapse to two columns on tablet and single column on mobile, with cards maintaining their internal structure. Card text may need slight size reduction to prevent overflow.

The asymmetric product showcase should stack vertically on narrow viewports, with the tip card above the app screenshot. Navigation arrows for the tip carousel may need touch-friendly sizing.

Community buttons should stack vertically on mobile, full-width within container padding, with metadata remaining centered below each.

The particle background effect should reduce in density or simplify on lower-powered devices to maintain performance.

## Practical implementation guidance

### Preserve
- The deep teal palette hierarchy: near-black canvas, mid-teal surfaces, lighter teal for elevation
- Generous border radii on all containers—this softness is central to the brand feel
- High contrast white text against dark backgrounds; never compromise readability
- Mixed-weight headlines that create rhythm through weight change rather than size change alone
- The particle atmosphere as a subtle, non-distracting layer

### Avoid
- Introducing additional hues beyond the teal-cyan-warm accent range
- Sharp corners on primary containers; the rounded quality is distinctive
- Light mode without careful consideration—the dark palette is integral to the identity
- Crowding the generous vertical spacing between sections
- Making accent colors too prominent; they should remain punctuation

### Recommended build order
1. Establish the canvas and surface color tokens
2. Implement the hero panel with rounded container and centered content structure
3. Build the type scale with Inter at the specified sizes
4. Create the feature card component with icon-text layout
5. Add the button variants with consistent padding and radius
6. Implement the particle background as a performant canvas or CSS layer
7. Layer in the product showcase with asymmetric composition
8. Polish with accent colors and micro-interactions

### Accessibility
- Ensure white text on teal surfaces meets WCAG AA contrast ratios; test `{colors.ink-muted}` against `{colors.surface}` specifically
- Provide reduced-motion alternatives for the particle background
- Maintain focus indicators that are visible against dark backgrounds
- Structure the feature grid with appropriate heading hierarchy for screen readers
- Ensure button icons have accessible labels when they convey meaning beyond decoration

## Scope note

This guide covers the Logseq landing page hero, feature grid, product showcase, and community sections as visible in desktop viewport captures. Mobile layouts, additional interior pages, animation specifications, and interactive states beyond static presentation are not included. Measurements are practical adaptation targets derived from visible proportions in the supplied imagery.
