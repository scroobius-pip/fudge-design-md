# How heroui.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/heroui.com-design)

Last updated: 2026-08-10

## Captured pages

[![Community section with dark canvas, purple wave mesh gradient, and three social link cards with rounded corners and external-link icons.](https://pin.fontofweb.com/821?format=jpg)](https://design.withfudge.com/share/pin-821)

[Community section with dark canvas, purple wave mesh gradient, and three social link cards with rounded corners and external-link icons.](https://design.withfudge.com/share/pin-821)

[![Hero banner with large gradient headline, purple primary button, dark secondary button, and two feature cards with circular icons on a dark background.](https://pin.fontofweb.com/820?format=jpg)](https://design.withfudge.com/share/pin-820)

[Hero banner with large gradient headline, purple primary button, dark secondary button, and two feature cards with circular icons on a dark background.](https://design.withfudge.com/share/pin-820)

[![Support section with sponsor orbit visualization, circular avatar ring, and two funding platform cards with gradient icon badges.](https://pin.fontofweb.com/819?format=jpg)](https://design.withfudge.com/share/pin-819)

[Support section with sponsor orbit visualization, circular avatar ring, and two funding platform cards with gradient icon badges.](https://design.withfudge.com/share/pin-819)

[![Features grid with eight dark cards, gradient headline text, and purple circular icons with white symbols.](https://pin.fontofweb.com/818?format=jpg)](https://design.withfudge.com/share/pin-818)

[Features grid with eight dark cards, gradient headline text, and purple circular icons with white symbols.](https://design.withfudge.com/share/pin-818)

## Overview

HeroUI's marketing site presents a dark, immersive visual system built around an absolute black canvas with vibrant purple-to-pink gradient accents. The design communicates technical sophistication and creative energy simultaneously—positioning the React UI library as both production-ready and visually distinctive. The interface relies on high contrast between deep blacks and bright whites, with strategic color reserved for calls-to-action and gradient headline treatments that draw the eye without overwhelming the dark environment.

The visual hierarchy operates through scale contrast and selective color application rather than dense information architecture. Large display typography anchors each section, while supporting content sits in muted gray to recede visually. Cards and interactive elements float on slightly elevated dark surfaces, creating subtle depth through border definition rather than heavy shadows. The overall impression is of a polished developer tool: precise, contemporary, and confident in its restraint.

## Colors

The color system is built on a near-black foundation with a narrow, purposeful accent range. Every token below is derived from visible interface elements across the supplied images.

| token | value | use |
|---|---|---|
| canvas | `#000000` | Page background, deepest layer behind all content |
| surface | `#111111` | Card backgrounds, secondary containers |
| surface-elevated | `#1a1a1a` | Icon badge fills, slightly raised elements |
| ink | `#ffffff` | Primary text, headings, button labels |
| muted-ink | `#a0a0a0` | Body text, descriptions, secondary information |
| accent-purple | `#a855f7` | Primary buttons, gradient start, icon tints |
| accent-pink | `#ec4899` | Gradient end, decorative heart icon |
| border-subtle | `#27272a` | Card borders, dividers, hairline separators |

The dark mode is not an alternate theme—it is the sole visual identity. The absolute black canvas absorbs light and makes the purple-to-pink gradient accents feel luminous by contrast. Gradient text appears in section headlines, rendered as a smooth transition from purple to pink, with the gradient clipped to the text glyphs themselves. This treatment is reserved for display typography only, never applied to body text or UI controls.

Photographic and avatar imagery introduces additional color through user-generated content, but the interface palette remains disciplined. The sponsor orbit visualization in the support section uses avatar rings with varied colors from contributor images, contained within circular frames that keep the overall composition unified.

## Typography

The type system uses Inter for all interface text, with Fira Code reserved for inline code snippets. Verify licensing for these families before production use. Inter is attributed to Rasmus Andersson. Fira Code is attributed to Carrois Corporate Edenspiekermann Ag Nikita Prokopov.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 4rem | 700 | 1.1 | -0.02em | Main hero headlines |
| section-display | Inter | 3rem | 700 | 1.15 | -0.02em | Section headings |
| gradient-display | Inter | 4rem | 700 | 1.1 | -0.02em | Gradient-colored display text |
| body-large | Inter | 1.25rem | 400 | 1.6 | 0 | Hero descriptions, lead paragraphs |
| body | Inter | 1rem | 400 | 1.6 | 0 | Card descriptions, general content |
| label | Inter | 0.875rem | 500 | 1.4 | 0 | Button text, card titles, navigation |
| code | Fira Code | 0.875rem | 400 | 1.5 | 0 | Inline code, technical terms |

Display sizes use tight negative tracking for a contemporary, compact feel. The gradient display treatment applies to words within headlines that need emphasis—typically the latter portion of a phrase, creating a rhythmic color progression across the line. Body text maintains generous line height for readability against the dark background. Label weight at 500 provides sufficient distinction from body without competing with display weights.

## Layout

The page uses a centered single-column layout with generous horizontal margins that scale with viewport width. Content max-width appears to sit around 80rem, with sections separated by substantial vertical padding of approximately 6rem. This breathing room is essential to the dark aesthetic—dense packing would feel oppressive against the black canvas.

The hero section employs an asymmetrical two-column composition: large display text and action buttons occupy the left portion, while two feature cards sit to the right. This creates visual tension and directs the eye through the content in a Z-pattern. Below the hero, sections transition to centered headings with card grids beneath.

Card grids use consistent gap spacing of 1rem between items. The community section shows three equal-width cards in a row. The features section displays an eight-card grid in two rows of four, maintaining equal heights through consistent internal padding rather than fixed dimensions. The support section introduces a distinctive circular orbit visualization that breaks the rectilinear grid pattern, with sponsor avatars arranged radially around a central call-to-action.

Responsive behavior should collapse multi-column grids to single columns on narrow viewports, with cards stacking vertically and the sponsor orbit potentially simplifying to a linear list or reducing in size to maintain touch targets.

## Visual language

The visual language balances technical precision with expressive color. Rounded corners appear throughout—cards use 0.75rem, buttons are fully pill-shaped, and icon containers are perfect circles. This consistent rounding softens the otherwise stark dark interface.

Iconography follows a systematic approach: each feature or social card leads with a circular badge containing a white symbol on a dark elevated surface. These badges use a subtle border to define their edge against card backgrounds. External link indicators appear as small diagonal arrows beside card titles, signaling navigation away from the current context.

The gradient mesh visible in the hero background creates atmospheric depth without photographic imagery. Thin, flowing lines in purple and blue tones drift across the upper portion of the screen, suggesting connectivity and movement. This treatment is restrained—occupying roughly the top third of the viewport before fading to pure black.

Code references within body text use a monospace font with slightly elevated background surfaces, creating inline code blocks that read as distinct semantic elements without disrupting paragraph flow.

## Components

### Primary action button

- **Anatomy**: Text label with optional trailing arrow icon
- **Surface**: Solid purple fill (`{colors.accent-purple}`)
- **Typography**: `{typography.label}` in white
- **Shape**: Full pill (`{rounded.button}`)
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Often paired with secondary button in horizontal arrangement

### Secondary action button

- **Anatomy**: Text label with optional leading icon
- **Surface**: Transparent with subtle border (`{colors.border-subtle}`)
- **Typography**: `{typography.label}` in white
- **Shape**: Full pill (`{rounded.button}`)
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Appears beside primary button with consistent height

### Feature card

- **Anatomy**: Circular icon badge, title label, description paragraph
- **Surface**: `{colors.surface}` with 1px `{colors.border-subtle}` border
- **Typography**: Title uses `{typography.label}` in white; description uses `{typography.body}` in `{colors.muted-ink}`
- **Shape**: `{rounded.card}` corners
- **Spacing**: `{spacing.card-padding}` internal padding
- **Composition**: Grid arrangement with `{spacing.card-gap}` between items

### Social link card

- **Anatomy**: Platform icon, title with external link arrow, description
- **Surface**: `{colors.surface}` with 1px `{colors.border-subtle}` border
- **Typography**: Title uses `{typography.label}` in white; description uses `{typography.body}` in `{colors.muted-ink}`
- **Shape**: `{rounded.card}` corners
- **Spacing**: `{spacing.card-padding}` internal padding
- **Composition**: Horizontal row of three equal-width cards

### Icon badge

- **Anatomy**: Single icon symbol centered in circular container
- **Surface**: `{colors.surface-elevated}` background
- **Color**: Icon renders in `{colors.accent-purple}`
- **Shape**: Perfect circle (`{rounded.icon-badge}`)
- **Size**: 2.5rem diameter
- **Composition**: Positioned at top-left of parent card, above title text

### Sponsor orbit

- **Anatomy**: Central plus button surrounded by radial avatar ring
- **Surface**: Dark circular track with subtle glow
- **Color**: Central button uses `{colors.accent-purple}` fill with white icon
- **Shape**: Circular layout with avatar circles at perimeter
- **Composition**: Breaks grid pattern as section focal point; avatars overlap track edge

## Responsive behavior

The layout should maintain its dark character across all breakpoints. On narrow viewports, the hero two-column composition should stack vertically with display text full-width above feature cards. Card grids should transition from multi-column to single column, preserving internal padding and border treatments.

Touch targets must remain at least 44×44 pixels for all interactive elements. The pill-shaped buttons already satisfy this requirement. The sponsor orbit visualization may require simplification on small screens—either reducing to a static semicircle or converting to a scrollable horizontal list of avatars.

Gradient text should remain legible at all sizes; avoid applying gradient treatments below 1.5rem as color transitions become indistinct at small scales. Dark mode is the only supported theme; light mode inversion would require a complete alternate palette not present in the source material.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the foundation of every section
- Purple-to-pink gradient exclusively for display headlines and primary actions
- Consistent card styling with subtle borders rather than heavy shadows
- Pill-shaped buttons with generous horizontal padding
- Circular icon badges as card leaders

### Avoid
- Adding shadow-based depth; rely on borders and surface elevation instead
- Introducing additional accent colors beyond the purple-pink range
- Using gradient text for body copy or labels
- Lightening the canvas to dark gray; maintain true black
- Square or sharp-cornered buttons that break the soft visual rhythm

### Recommended build order
1. Establish the black canvas and Inter type scale
2. Implement pill buttons with purple primary and bordered secondary variants
3. Build the card component with consistent padding, border, and corner radius
4. Add icon badge as reusable subcomponent
5. Compose hero section with asymmetric two-column layout
6. Construct feature grid and social card rows
7. Implement gradient text utility for display headlines
8. Add sponsor orbit as specialized section component

### Accessibility
- Ensure white text on black meets WCAG AAA contrast ratios (it does at normal weights)
- Verify purple button text maintains 4.5:1 contrast; the `#a855f7` on white may not, but white on purple should
- Provide focus indicators that are visible against dark surfaces; consider light outlines or offset rings
- Do not rely on gradient color alone for meaning; gradient headlines should have sufficient context from surrounding text
- Respect `prefers-reduced-motion` for any animated gradient or orbit rotation

## Scope note

This guide covers the HeroUI marketing page's dark landing experience as visible in the supplied images. Navigation, documentation pages, component playgrounds, and mobile-specific layouts are not represented. Interactive states including hover, focus, active, and loading are not documented from still images. Measurements are practical adaptation targets based on visible proportions. Verify licensing for Inter and Fira Code before production use.
