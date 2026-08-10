# How primeintellect.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/primeintellect.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with dotted halftone hero text reading Be your own Lab, navigation columns, and START TRAINING button](https://pin.fontofweb.com/9967?format=jpg)](https://design.withfudge.com/share/pin-9967)

[Footer section with dotted halftone hero text reading Be your own Lab, navigation columns, and START TRAINING button](https://design.withfudge.com/share/pin-9967)

[![Hiring section with mosaic grid of team avatars and JOIN US button on dark background](https://pin.fontofweb.com/9966?format=jpg)](https://design.withfudge.com/share/pin-9966)

[Hiring section with mosaic grid of team avatars and JOIN US button on dark background](https://design.withfudge.com/share/pin-9966)

[![Zapier case study page with hero banner, statistics row, and sidebar with highlighted features](https://pin.fontofweb.com/9965?format=jpg)](https://design.withfudge.com/share/pin-9965)

[Zapier case study page with hero banner, statistics row, and sidebar with highlighted features](https://design.withfudge.com/share/pin-9965)

[![Latest Research section with three research cards featuring green-tinted abstract imagery and dates](https://pin.fontofweb.com/9964?format=jpg)](https://design.withfudge.com/share/pin-9964)

[Latest Research section with three research cards featuring green-tinted abstract imagery and dates](https://design.withfudge.com/share/pin-9964)

## Overview

Prime Intellect's design system presents a dark, technical aesthetic built for an AI infrastructure platform. The visual language combines extreme contrast—near-black backgrounds against pure white typography—with precise monospace labeling and grid-based structural organization. The system avoids decorative warmth in favor of computational clarity: every element communicates function before form.

The homepage and case study pages share a consistent spatial logic. Content sits within generous horizontal margins, creating a contained reading experience that feels more like a technical document than a conventional marketing site. The design relies on subtle borders rather than background color shifts to separate regions, producing a flattened hierarchy where depth comes from typography scale and spacing rather than elevation. Accent colors appear sparingly—primarily in photographic imagery and occasional interactive highlights—preserving the monochrome discipline of the interface itself.

## Colors

The color system operates on a near-black foundation with pure white typography and a narrow range of grays for structural elements. No vibrant UI accents compete with the content; the only color intrusion comes from photography and data visualizations.

| token | value | use |
|---|---|---|
| canvas | #0E0E0E | Primary page background |
| canvas-deep | #071012 | Deepest background layer, hero sections |
| surface | #111111 | Card and panel backgrounds |
| surface-raised | #161616 | Elevated containers, hover states |
| surface-elevated | #191919 | Modal and overlay backgrounds |
| ink | #FFFFFF | Primary text, headings, icons |
| ink-muted | #D1D5DC | Secondary text, descriptions, captions |
| ink-faint | #373737 | Disabled text, placeholder content |
| border | #202020 | Primary dividers, card outlines |
| border-subtle | #101010 | Hairline separators, grid lines |
| accent-green | #7DFFA6 | Photographic accents, data visualization highlights |
| accent-cyan | #49DCFF | Secondary photographic accents |
| action-primary | #FFFFFF | Primary button fill |
| action-primary-ink | #000000 | Primary button text |

The interface maintains strict light-on-dark discipline. Background colors progress from #0E0E0E through #111111 to #191919 for subtle elevation changes without breaking the dark continuity. Border colors at #202020 and #101010 provide structural definition without visual weight. The accent green and cyan appear exclusively in image content and gradient overlays—never as flat UI fills—preserving their impact for data-rich visualizations.

## Typography

The type system pairs a geometric sans-serif for readable body and display text with a monospace face for labels, navigation, and technical metadata. This dual-family approach creates immediate hierarchy: proportional text carries meaning, monospace carries structure.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Geist | 2.25rem | 400 | 1.1 | normal | Page titles, major headlines |
| section-display | Geist | 1.75rem | 400 | 1.2 | normal | Section headings, stat numbers |
| body-large | Geist | 1.25rem | 400 | 1.5 | normal | Lead paragraphs, descriptions |
| body | Geist | 1rem | 400 | 1.5 | normal | Standard paragraphs, UI text |
| body-small | Geist | 0.875rem | 400 | 1.43 | normal | Captions, metadata, timestamps |
| label | Abc Favorit Mono Unlicensed | 0.75rem | 400 | 1 | normal | Tags, categories, timestamps |
| label-medium | Abc Favorit Mono Unlicensed | 0.75rem | 500 | 1 | normal | Navigation labels, button text |
| navigation | Abc Favorit Mono Unlicensed | 0.75rem | 400 | 1 | normal | Header links, footer links |
| legal-copy | Abc Favorit Mono Unlicensed | 0.75rem | 400 | 1 | normal | Copyright, terms, fine print |

Geist serves as the primary reading face at sizes from 0.875rem to 2.25rem, with Regular weight throughout—no bold emphasis in the hierarchy. Abc Favorit Mono Unlicensed handles all structural and navigational text at a fixed 0.75rem size, creating a consistent technical voice across labels, buttons, and footer links. The monospace family appears in uppercase for navigation and mixed case for body labels.

Applesystem appears at 14px in isolated div regions with black text, likely a fallback for system-rendered elements. System-Uisansserif appears as the root font declaration on html and body elements at 16px with 24px line height, serving as the base stack before Geist loads for visible content.

Verify licensing for these families before production use. Geist and Geist Mono are designed by Basementstudio and distributed by Vercel. Abc Favorit Mono Unlicensed is designed and distributed by Dinamo Typefaces GmbH. IBM Plex Sans appears in case study content for subheadings. Applesystem and System-Uisansserif are system-provided faces requiring no additional licensing.

## Layout

The layout system centers content within fixed horizontal margins and uses consistent vertical rhythm to separate major sections.

Page containers use `margin: 0 8.25rem` (132px) with `padding: 0 1.25rem` (20px) on inner elements, creating a contained reading column that floats within the viewport. This margin-based approach produces asymmetric breathing room that feels intentional rather than default.

Vertical spacing follows a modular scale. Sections receive `margin-bottom: 4.375rem` (70px) to separate major content blocks. Internal component gaps use `1.25rem` (20px) for standard content spacing, `0.75rem` (12px) for tight element grouping, and `2rem` (32px) for card grids and feature lists. The hero section uses `padding: 5rem 1.25rem 2.5rem` (80px top, 40px bottom) to establish initial presence.

Grid structures appear throughout: the research section uses a three-column card layout, the hiring section presents an irregular mosaic grid of avatars, and case study pages split into asymmetric main/sidebar columns. All grids share the same `1px` border treatment for cell definition.

## Visual language

The visual identity communicates technical infrastructure through restraint and precision. The near-complete absence of color in the UI itself—just black, white, and narrow gray steps—directs attention to content and data visualizations.

Photography and imagery carry the only color warmth. Research cards feature abstract green-tinted data visualizations: particle systems, waveform plots, and topographic mesh renders. These images share a consistent treatment of black backgrounds with luminous green or cyan elements, creating visual continuity with the dark interface while adding necessary energy.

The dotted halftone treatment on hero text ("Be your own Lab.") introduces texture without breaking the monochrome system. This effect suggests computational rendering—pixels, data points, or training epochs—reinforcing the platform's AI focus.

Border-based separation replaces conventional card shadows and background shifts. Every structural division uses `1px solid` lines at #202020 or #101010, producing a wireframe aesthetic that feels assembled rather than layered. This flatness extends to buttons, which use sharp corners and hairline borders rather than rounded fills.

## Components

### Primary Action Button

- **Anatomy**: Text label with optional trailing arrow icon, contained within a rectangular boundary
- **Surface**: Filled white background (#FFFFFF) with black text (#000000)
- **Typography**: `{typography.label-medium}`, uppercase monospace
- **Shape**: Zero border radius, sharp rectangular corners
- **Spacing**: `padding: 0.5rem 0.625rem` (8px 10px)
- **Composition**: Inline with sibling buttons, separated by standard gap
- **Variants**: Default state shows white fill; secondary variant inverts to transparent fill with white border and white text

### Secondary Action Button

- **Anatomy**: Text label with optional icon, minimal boundary
- **Surface**: Transparent background with `1px solid {colors.border}` outline
- **Typography**: `{typography.label}`, uppercase monospace
- **Shape**: Zero border radius
- **Spacing**: `padding: 0.5rem 0.625rem`
- **Composition**: Appears alongside primary actions as lower-emphasis alternative

### Research Card

- **Anatomy**: Full-bleed image header, category label, date stamp, title text
- **Surface**: `{colors.surface}` background with `1px solid {colors.border}` outline
- **Typography**: Category uses `{typography.label}` in uppercase; title uses `{typography.body-large}`; date uses `{typography.label}` right-aligned
- **Shape**: Zero border radius, sharp corners
- **Spacing**: Internal padding `1.25rem` (20px), image aspect ratio approximately 16:9
- **Composition**: Three-column grid with `1px` gutters, equal width distribution
- **States**: Hover state likely elevates image brightness; no visible shadow transition

### Stat Display

- **Anatomy**: Large number or metric, supporting description below
- **Surface**: Transparent, no background
- **Typography**: Number uses `{typography.section-display}`; description uses `{typography.body-small}` in `{colors.ink-muted}`
- **Shape**: No container, free-floating text
- **Spacing**: `margin-bottom: 1rem` between number and description
- **Composition**: Horizontal row of three to four statistics, evenly distributed

### Feature List Item

- **Anatomy**: Icon or bullet, title text, optional description
- **Surface**: Transparent with `1px solid {colors.border}` top border for separation
- **Typography**: Title uses `{typography.body}`; description uses `{typography.body-small}` in `{colors.ink-muted}`
- **Shape**: Full-width horizontal band
- **Spacing**: `padding: 1.25rem 0` vertical, `padding-left: 1.25rem` for icon offset
- **Composition**: Stacked vertical list in sidebar or contained panel

### Navigation Header

- **Anatomy**: Logo mark, primary navigation links, utility actions
- **Surface**: `{colors.canvas}` background, `1px solid {colors.border}` bottom border
- **Typography**: Links use `{typography.navigation}`, uppercase monospace; numbered items show "01", "02" etc. in muted treatment
- **Shape**: Full-width bar, fixed height
- **Spacing**: `padding: 0 1.25rem`, `margin: 0 8.25rem` horizontal containment
- **Composition**: Logo left-aligned, navigation center-left, actions right-aligned

### Footer

- **Anatomy**: Logo, multi-column link groups, legal copy, primary actions
- **Surface**: `{colors.canvas-deep}` background
- **Typography**: Column headers use `{typography.label}` in `{colors.ink-muted}`; links use `{typography.navigation}`; legal uses `{typography.legal-copy}`
- **Shape**: Full-width, contained content
- **Spacing**: `padding: 5rem 2.5rem 1.25rem` (80px 40px 20px) top section, `padding-bottom: 2.5rem` (40px) bottom section
- **Composition**: Asymmetric grid with wide left column for hero text and actions, narrow right columns for navigation

### Avatar Mosaic

- **Anatomy**: Grid of square portrait images with irregular gaps
- **Surface**: Individual images on `{colors.canvas}` background
- **Shape**: Square images, some with `9999px` radius for circular treatment
- **Spacing**: Variable `0.75rem` to `1.25rem` gaps creating organic density
- **Composition**: Offset grid with intentional irregularity, plus icon for "add" state

## Responsive behavior

The design appears optimized for desktop viewport widths above 1200px, where the 132px horizontal margins and multi-column grids function as intended. At narrower widths, the margin-based containment should transition to percentage-based padding to preserve readable line lengths.

The three-column research card grid should collapse to two columns at approximately 900px and single column below 600px. Case study page sidebars should stack below main content on narrow viewports. The avatar mosaic grid should reduce column count progressively.

Typography scales should maintain fixed rem values rather than viewport-relative sizing, ensuring readability across densities. The monospace navigation labels may require size reduction or truncation on narrow screens.

Touch targets for buttons and links should maintain minimum 44px height even as horizontal padding compresses. The sharp-cornered button aesthetic works across input methods without modification.

## Practical implementation guidance

### Preserve
- The strict dark-mode palette with pure white text on near-black backgrounds
- Monospace labels for all navigation, buttons, and metadata
- Zero border radius on all interactive elements and containers
- 1px border-based separation instead of shadows or background shifts
- Generous horizontal margins (132px) for content containment
- Uppercase treatment on monospace navigation and button text

### Avoid
- Rounded corners on buttons, cards, or panels
- Background color changes for elevation (use borders instead)
- Color in UI elements beyond black, white, and narrow grays
- Bold weights in the Geist type hierarchy
- Drop shadows on any component
- Decorative gradients in interface elements (reserve for image content only)

### Recommended Build Order
1. Establish the dark canvas background and Geist/Abc Favorit Mono font loading
2. Build the navigation header with contained margins and monospace links
3. Implement the sharp-cornered button system with primary and secondary variants
4. Create the research card component with image header and label structure
5. Construct the footer with multi-column grid and asymmetric layout
6. Add the stat display and feature list patterns for case study content
7. Implement responsive collapse for grid-based components

### Accessibility
- Maintain minimum 4.5:1 contrast ratio for all body text (white on #0E0E0E exceeds 15:1)
- Ensure interactive elements have visible focus indicators beyond default browser styles
- Provide `prefers-reduced-motion` alternatives for any image carousel or mosaic animations
- Use semantic heading hierarchy despite the visual flattening—screen readers need structure
- Consider a light-mode alternative for users with photophobia, as the current system offers no brightness relief

## Scope note

This guide covers the homepage, case study page, and shared navigation/footer patterns visible in the supplied images. Mobile layouts, form interactions, loading states, and animation specifications are not included. The IBM Plex Sans typeface appears in case study subheadings but its full role in the system is not fully characterized. Applesystem and System-Uisansserif are detected system fallback families that do not require additional licensing.
