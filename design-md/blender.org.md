# How blender.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/blender.org-design)

Last updated: 2026-08-10

## Captured pages

[![Experimental builds section with crimson background, white typography, and rocket icon on the download page](https://pin.fontofweb.com/838?format=jpg)](https://design.withfudge.com/share/pin-838)

[Experimental builds section with crimson background, white typography, and rocket icon on the download page](https://design.withfudge.com/share/pin-838)

[![What's New feature section with diagonal split layout showing snowman render and purple-blue gradient panel](https://pin.fontofweb.com/837?format=jpg)](https://design.withfudge.com/share/pin-837)

[What's New feature section with diagonal split layout showing snowman render and purple-blue gradient panel](https://design.withfudge.com/share/pin-837)

[![Hero banner with space scene background, centered white headline, and blue download button with platform selector](https://pin.fontofweb.com/836?format=jpg)](https://design.withfudge.com/share/pin-836)

[Hero banner with space scene background, centered white headline, and blue download button with platform selector](https://design.withfudge.com/share/pin-836)

[![Footer with dark charcoal background, multi-column link grid, social icons, and blue Donate button](https://pin.fontofweb.com/835?format=jpg)](https://design.withfudge.com/share/pin-835)

[Footer with dark charcoal background, multi-column link grid, social icons, and blue Donate button](https://design.withfudge.com/share/pin-835)

## Overview

Blender.org presents an open-source 3D creation suite through a visually confident interface that balances creative expression with functional clarity. The design system alternates between immersive dark cinematic experiences and clean light surfaces, using bold accent colors to guide users toward download and community actions. The homepage opens with a full-bleed space scene hero that establishes immediate emotional impact, while interior pages like the download section employ vibrant crimson and purple gradients to differentiate content tiers and build excitement around new features.

The visual architecture relies on strong typographic hierarchy set in Inter, generous whitespace, and purposeful color blocking. Navigation remains restrained and utilitarian, allowing the content and calls-to-action to command attention. The system supports two primary modes: a dark cinematic mode for hero sections and immersive experiences, and a light functional mode for information-dense areas like footers and documentation. Accent colors carry semantic weight—blue signals the primary download action, crimson marks experimental or advanced options, and purple gradients highlight feature announcements.

## Colors

| token | value | use |
|---|---|---|
| action | #4A90E2 | Primary buttons, download CTAs, active links |
| action-hover | #3A7BC8 | Button hover states, interactive emphasis |
| canvas | #F5F5F5 | Light mode page background |
| canvas-dark | #1A1D23 | Dark mode sections, hero backgrounds, footer |
| surface | #FFFFFF | Cards, panels, light content containers |
| surface-dark | #242830 | Elevated dark panels, dropdown menus |
| ink | #1A1D23 | Primary text on light backgrounds |
| ink-light | #FFFFFF | Text on dark or colored backgrounds |
| muted-ink | #8A9199 | Secondary text, captions, disabled states on light |
| muted-ink-dark | #6B7280 | Secondary text on dark backgrounds |
| accent-crimson | #D12B4F | Experimental builds section, warning emphasis |
| accent-crimson-dark | #B01E3D | Crimson hover states, depth variation |
| accent-purple | #8B5CF6 | Feature gradients, promotional highlights |
| accent-blue | #60A5FA | Gradient endpoints, secondary accents |
| border | #E5E7EB | Light mode dividers, card outlines |
| border-dark | #374151 | Dark mode dividers, subtle separators |

The color system operates on a principle of atmospheric contrast. Dark sections employ deep navy-black tones drawn from cinematic space imagery, creating immersive backdrops for white typography and glowing blue buttons. Light sections use near-white and warm gray to maintain readability without sterile harshness. The action blue carries a slight glow effect on primary buttons, suggesting digital energy appropriate to creative software. Accent crimson serves a specific warning and experimental role, clearly demarcating unstable builds from stable releases. The purple-to-blue gradient seen in feature announcements introduces playful variety while remaining within the cool-toned family that characterizes the brand.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3.5rem | 700 | 1.1 | -0.02em | Homepage hero headlines, major section titles |
| section-display | Inter | 2rem | 700 | 1.2 | -0.01em | Feature section headers, panel titles |
| body | Inter | 1rem | 400 | 1.6 | 0 | Paragraph text, descriptions, general content |
| body-large | Inter | 1.125rem | 400 | 1.6 | 0 | Lead paragraphs, emphasized descriptions |
| label | Inter | 0.875rem | 500 | 1.4 | 0.01em | Buttons, navigation items, category headers |
| navigation | Inter | 0.875rem | 500 | 1 | 0 | Top bar links, dropdown items |
| legal-copy | Inter | 0.75rem | 400 | 1.5 | 0.01em | Footer fine print, copyright, version metadata |

Inter serves as the sole typeface, chosen for its clarity across weights and excellent screen rendering at technical sizes. The hierarchy distinguishes roles through weight and size rather than family variation, maintaining a unified technical aesthetic appropriate to open-source software. Hero display sizes employ tight negative tracking for impactful headlines that feel contemporary and confident. Body text maintains generous line height for extended reading about features and release notes. Label and navigation sizes use medium weight to differentiate interactive elements without visual heaviness.

The Fontutti family appears in the source as an icon font for interface symbols and social media glyphs. It does not serve a typographic role in headings or body text. Verify licensing for these families before production use.

## Layout

The layout system follows a full-bleed immersive approach for hero and feature sections, transitioning to contained grids for information architecture. The homepage hero occupies the full viewport width and height with centered content, using the background image as the primary visual element. A top navigation bar spans the full width with horizontal link distribution, remaining visually light against dark hero imagery through semi-transparent or minimal backgrounds.

Content sections below the hero employ asymmetric compositions, particularly the diagonal split layout seen in feature announcements. This creates dynamic visual interest while maintaining readable text containment. The diagonal divider angles from upper-left to lower-right, placing photographic content on the left and gradient-panel text on the right. This composition breaks the rigid grid without sacrificing content hierarchy.

The footer uses a multi-column grid with five primary columns of links plus a social and donation column. Columns maintain consistent internal alignment with category labels as bold headers and link lists below. A full-width sub-footer carries tagline and attribution text centered beneath the main grid.

Spacing between major sections measures approximately 6rem, creating clear separation without excessive scrolling distance. Component padding within cards and panels uses 1rem to 1.5rem, with buttons receiving tighter horizontal padding to maintain compact interactive targets. The relative unit of 0.25rem provides fine-grained control for borders and small adjustments.

## Visual language

The visual language communicates creative freedom through cinematic imagery and confident color application. Photography and renders dominate hero sections, showcasing the software's output quality directly. The space scene hero with asteroids and planetary atmosphere establishes scale and possibility, while the snowman render in feature sections demonstrates approachable character work. These images receive no heavy overlay treatment—typography sits directly on the imagery with sufficient contrast provided by the inherent darkness of the scenes.

Iconography appears as simple line drawings, such as the rocket illustration in the experimental section. These maintain the same stroke weight and geometric simplicity, avoiding decorative complexity. Social media icons in the footer follow a uniform grid pattern with consistent sizing and muted color treatment.

Gradients function as content dividers and atmospheric enhancements. The purple-to-blue gradient in feature panels creates depth and draws attention to new release information. Button glows suggest active energy without excessive embellishment. Shadows remain subtle and functional, primarily elevating dropdown menus and focused elements rather than creating heavy material depth.

The overall aesthetic avoids corporate sterility through its embrace of vibrant accent colors and creative imagery, while maintaining the clarity expected of professional software distribution. The balance between expressive and functional surfaces allows users to feel inspired while efficiently accessing downloads and documentation.

## Components

### Primary Action Button

- **Anatomy**: Rectangular button with centered text label, optional leading icon
- **Surface and text color**: Background `{colors.action}`, text `{colors.ink-light}`
- **Typography**: `{typography.label}` at medium weight
- **Shape and border**: `borderRadius: {rounded.button}`, no border
- **Spacing**: Padding `0.75rem` vertical, `1.5rem` horizontal
- **Composition**: Full-width on mobile, intrinsic width on desktop
- **Variants**: Default state with subtle glow; hover state shifts to `{colors.action-hover}`

### Secondary Action Button

- **Anatomy**: Rectangular button with centered text, dropdown chevron icon
- **Surface and text color**: Background transparent or `{colors.surface-dark}`, text `{colors.ink-light}`
- **Typography**: `{typography.label}`
- **Shape and border**: `borderRadius: {rounded.button}`, `1px solid {colors.border-dark}`
- **Spacing**: Padding `0.75rem` vertical, `1.5rem` horizontal
- **Composition**: Appears below primary action in vertical stack
- **Variants**: Platform selector dropdown with expanded state showing options list

### Hero Section

- **Anatomy**: Full-viewport container with background image, centered text stack, primary and secondary actions
- **Surface and text color**: Background image with dark overlay inherent to source photography, text `{colors.ink-light}`
- **Typography**: `{typography.hero-display}` for headline, `{typography.body}` for metadata
- **Shape and border**: Full-bleed, no border radius
- **Spacing**: Generous vertical padding centering content optically
- **Composition**: Single column centered alignment, action buttons stacked with small gap
- **Variants**: Homepage variant with download focus; interior page variants may simplify to text-only

### Feature Panel

- **Anatomy**: Split-layout container with image region and gradient text region
- **Surface and text color**: Gradient background from `{colors.accent-purple}` to `{colors.accent-blue}`, text `{colors.ink-light}`
- **Typography**: `{typography.section-display}` for header, `{typography.body-large}` for description
- **Shape and border**: Diagonal divider between image and panel, `borderRadius: {rounded.panel}` on contained elements
- **Spacing**: Padding `2rem` to `3rem` within panel
- **Composition**: Image occupies approximately 50% width, panel the remainder with diagonal clip-path transition
- **Variants**: Left-image and right-image orientations possible; button and link variants for CTA style

### Footer

- **Anatomy**: Full-width dark container with multi-column link grid, social icon row, donation CTA, sub-footer bar
- **Surface and text color**: Background `{colors.canvas-dark}`, category headers `{colors.ink-light}`, links `{colors.muted-ink-dark}`
- **Typography**: Category headers `{typography.label}` with increased weight, links `{typography.body}` at reduced size
- **Shape and border**: No border radius on container, subtle top border optional
- **Spacing**: Column gap `2rem`, row gap `0.5rem` within link lists, section padding `3rem` vertical
- **Composition**: Five content columns plus social/donation column, full-width sub-footer centered below
- **Variants**: Standard variant with all columns; simplified variants possible for interior pages

### Navigation Bar

- **Anatomy**: Full-width horizontal bar with logo, link list, optional dropdown indicators
- **Surface and text color**: Transparent or minimal background over hero, text `{colors.ink-light}` or `{colors.ink}` depending on context
- **Typography**: `{typography.navigation}`
- **Shape and border**: No border radius, bottom border optional on scroll
- **Spacing**: Height approximately `3.5rem`, horizontal padding `1.5rem`
- **Composition**: Logo left-aligned, links center or right-aligned with consistent gap
- **Variants**: Dark variant over imagery, light variant over `{colors.canvas}`

## Responsive behavior

The design adapts from immersive desktop experiences to stacked mobile layouts while preserving visual impact. Hero sections maintain full-bleed imagery with centered text, though headline sizes reduce proportionally. The feature panel's diagonal split transitions to vertical stacking on narrow viewports, with the image appearing above the gradient text block.

Navigation collapses to a hamburger menu or simplified icon set on mobile, though the current documentation focuses on desktop presentation. Footer columns stack vertically in two-column or single-column arrangements, with category headers becoming expandable accordion items if space requires.

Button widths become full-width on mobile within content areas, maintaining touch targets of at least `2.75rem` height. Platform selector dropdowns may convert to native select elements or bottom sheets for improved mobile interaction.

Typography scales down by approximately 15-20% on mobile, with hero display reducing to `2.5rem` and body text remaining at `1rem` for readability. Line heights increase slightly at smaller sizes to maintain comfortable reading density.

## Practical implementation guidance

### Preserve
- The dramatic contrast between dark immersive sections and light functional areas
- The specific blue tone for primary actions with its subtle glow treatment
- Inter as the sole typeface across all weights and sizes
- Full-bleed cinematic imagery without heavy overlay gradients
- The diagonal split composition for feature announcements
- Generous section spacing that allows imagery to breathe

### Avoid
- Adding decorative borders or shadows that compete with the imagery
- Using the crimson accent for standard actions—it carries experimental/warning semantics
- Replacing the gradient feature panels with flat color blocks
- Crowding the hero with multiple competing calls-to-action
- Using font weights lighter than 400 for body text
- Applying border radius to full-bleed hero sections

### Recommended Build Order
1. Establish the color tokens and typography scale with Inter loaded at all required weights
2. Build the hero section with full-bleed imagery and centered content stack
3. Implement primary and secondary button components with hover states
4. Create the navigation bar with transparent and light variants
5. Construct the feature panel with diagonal split and gradient background
6. Build the footer grid with column responsiveness
7. Add the experimental section variant with crimson background
8. Polish with glow effects, transitions, and final spacing adjustments

### Accessibility
- Ensure all text over imagery meets WCAG AA contrast ratios; the dark hero backgrounds naturally support this
- Provide visible focus indicators on all interactive elements, particularly the blue action buttons
- Maintain keyboard navigability through the platform selector dropdown
- Use semantic heading hierarchy from h1 through h4 without skipping levels
- Add aria-labels to icon-only buttons and social media links
- Consider reduced-motion preferences for any gradient or glow animations

## Scope note

This guide covers the homepage and download page surfaces visible in the supplied images, including hero sections, feature announcements, experimental builds, and footer architecture. Measurements are practical adaptation targets. Mobile breakpoints, animation specifications, form components, documentation pages, and community forum interfaces are not represented in the current material. The icon font Fontutti requires separate licensing verification for production deployment.
