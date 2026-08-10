# How nova.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/nova.app-design)

Last updated: 2026-08-10

## Captured pages

[![Dense feature list with bold white heading and bullet-separated capabilities on dark navy canvas](https://pin.fontofweb.com/5387?format=jpg)](https://design.withfudge.com/share/pin-5387)

[Dense feature list with bold white heading and bullet-separated capabilities on dark navy canvas](https://design.withfudge.com/share/pin-5387)

[![Feature list with magenta pill button, rainbow gradient rule, and Panic logo footer](https://pin.fontofweb.com/5386?format=jpg)](https://design.withfudge.com/share/pin-5386)

[Feature list with magenta pill button, rainbow gradient rule, and Panic logo footer](https://design.withfudge.com/share/pin-5386)

[![Editor section with application screenshot, magenta action button, and syntax-highlighted language list](https://pin.fontofweb.com/5385?format=jpg)](https://design.withfudge.com/share/pin-5385)

[Editor section with application screenshot, magenta action button, and syntax-highlighted language list](https://design.withfudge.com/share/pin-5385)

[![Six 3D icons in feature grid with gradient word accents and rainbow divider on starfield background](https://pin.fontofweb.com/5384?format=jpg)](https://design.withfudge.com/share/pin-5384)

[Six 3D icons in feature grid with gradient word accents and rainbow divider on starfield background](https://design.withfudge.com/share/pin-5384)

## Overview

The Nova product page presents a native Mac code editor through a dark, immersive cosmic theme. The design language draws from deep space aesthetics: a near-black navy canvas scattered with subtle starfield particles, punctuated by vibrant magenta action elements and rainbow gradient accents. The page communicates technical sophistication without visual noise, letting large bold typography and carefully composed application screenshots carry the narrative. Content flows as a series of anchored sections, each with a clear typographic hierarchy that moves from dramatic display headings through supporting body copy to dense feature enumeration. The overall impression is premium and developer-focused, balancing personality through color with restraint in layout structure.

## Colors

The color system operates on a high-contrast dark mode foundation with selective vibrant accents. The deep navy canvas creates immersion while preserving readability for extended scanning. Magenta serves as the singular action color, appearing in buttons and interactive highlights. Rainbow gradients provide decorative energy at section boundaries and within typographic accents. The palette avoids mid-tone grays in favor of crisp white text against dark backgrounds, with muted lavender-gray reserved for secondary information.

| token | value | use |
|---|---|---|
| canvas | #0a0e1a | Primary page background, section fills |
| canvas-deep | #060913 | Deepest shadow areas, footer regions |
| ink | #f5f7ff | Primary headings, body text, icons |
| ink-muted | #8b92a8 | Secondary descriptions, dense feature lists |
| action | #e91e8c | Primary buttons, interactive highlights, keyword accents |
| action-hover | #ff2a9d | Button hover states, brighter emphasis |
| accent-orange | #ff6b35 | Gradient start, warm keyword highlights |
| accent-cyan | #00d4ff | Gradient end, cool keyword highlights |
| accent-lime | #c8ff00 | Supporting bright accent in language list |
| rainbow-start | #ff6b35 | Horizontal gradient rule left edge |
| rainbow-mid | #e91e8c | Horizontal gradient rule center |
| rainbow-end | #00d4ff | Horizontal gradient rule right edge |

The dark canvas dominates every section, creating continuous vertical flow. White ink maintains consistent readability across all content densities. The action magenta appears with discipline, reserved for buttons and selective word highlights within feature labels. Rainbow gradients function as section dividers and decorative rules rather than backgrounds. The starfield background in select sections introduces subtle purple and blue atmospheric tones through photographic depth, not as interface colors.

## Typography

The type system relies on a single family, Hellix, deployed across three weights. Bold weights carry all display and label duties, while Regular handles body copy. The geometric sans-serif construction contributes to the technical, modern character. Sizes scale dramatically from large section headings down to compact feature labels, with tight leading on display text and generous leading on body content.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Hellix | 4rem | 700 | 1.1 | -0.02em | Major section headings, "The Editor." |
| section-display | Hellix | 3rem | 700 | 1.15 | -0.01em | Sub-section headings, "And So Much More." |
| body-large | Hellix | 1.25rem | 400 | 1.5 | 0em | Introductory paragraphs, editor description |
| body | Hellix | 1rem | 400 | 1.6 | 0em | Standard paragraphs, footer legal |
| label | Hellix | 0.875rem | 700 | 1.4 | 0.02em | Button text, feature grid labels |
| feature-list | Hellix | 1.125rem | 700 | 1.5 | 0em | Dense capability lists with bullet separators |

Display headings use tight negative tracking for visual density and impact. Body text maintains neutral tracking for comfortable reading. The feature-list token handles the dense bullet-separated content with slightly reduced size and bold weight to maintain scannability without overwhelming the layout. Verify licensing for these families before production use.

## Layout

The page employs a centered single-column layout with maximum content width constraints. Sections stack vertically with generous internal padding, creating breathing room between content groups. The editor screenshot section breaks the text-only pattern with a large centered application mockup that extends toward the viewport edges.

Content containers center at a maximum width of approximately 72rem with horizontal padding of 1.5rem on smaller viewports, expanding to 2rem on larger screens. Section vertical padding uses 6rem to establish clear territorial boundaries between topics. The feature grid arranges six items in a 3x2 formation on desktop, with each item center-aligned and evenly distributed across the available width.

The dense feature list section uses a fluid centered column that allows text to wrap naturally, with bullet characters serving as inline separators rather than list markers. This creates a continuous paragraph-like flow that fills the available width. The footer region compresses vertically, stacking the logo mark, copyright, and legal text with minimal spacing.

## Visual language

The visual identity combines cosmic atmosphere with precise technical presentation. A persistent dark navy background unifies all sections, while subtle starfield particles drift in select areas, adding depth without distraction. The rainbow gradient rule appears as a thin horizontal line at section boundaries, transitioning from warm orange through magenta to cool cyan—a signature element that energizes the otherwise restrained palette.

Three-dimensional icons illustrate feature categories, rendered with soft shadows and dimensional depth against the dark canvas. These icons avoid harsh outlines, instead using rounded forms and gentle lighting that complements the space theme. Application screenshots float with subtle shadow elevation, their interface chrome providing natural contrast against the page background.

Typography functions as the primary visual structure. Bold white headings anchor each section with substantial presence. Select words within labels receive color emphasis—orange for "editor," magenta for "workflows" and "extensions," cyan for "settings"—creating a rhythmic accent pattern across the feature grid. This technique avoids decorative elements while adding visual interest through language itself.

## Components

### Primary Action Button

A pill-shaped button with fully rounded ends, filled with vibrant magenta. White bold label text centers horizontally and vertically. The button appears in isolation below content blocks, creating clear calls to action.

- Anatomy: Text label centered within rounded container
- Surface: Solid magenta fill, no border
- Typography: label token, white ink
- Shape: Pill with 9999px border radius
- Spacing: 0.875rem vertical padding, 2rem horizontal padding
- Composition: Centered below preceding content with 2rem top margin

### Feature Grid Item

A centered content block pairing a 3D icon with a two-word label. The first word appears in white, the second in a gradient-mapped accent color specific to that feature category.

- Anatomy: Icon image above two-word text label
- Surface: Transparent, no background
- Typography: label token, split color treatment
- Composition: Center-aligned within grid cell, icon above text with 1rem gap
- Variants: Six visible combinations with distinct accent colors (orange, magenta, red, pink, cyan)

### Rainbow Divider

A thin horizontal gradient rule spanning the content width. The gradient flows left-to-right through the brand's warm-to-cool spectrum.

- Anatomy: Single horizontal line
- Surface: Linear gradient from accent-orange through action to accent-cyan
- Shape: 2px height, full container width
- Composition: Centered between sections, often above footer content

### Editor Screenshot

A large application window mockup displaying the Nova interface. The screenshot includes realistic macOS window chrome, sidebar panels, code editor, and status elements.

- Anatomy: Window chrome with traffic lights, toolbar, sidebar, editor area, and floating panels
- Surface: Dark interface theme matching the page canvas
- Shape: Rounded panel corners with subtle shadow elevation
- Composition: Centered in section, extending to near-full container width
- Shadow: Deep drop shadow creating separation from page background

### Dense Feature List

A continuous text block of capabilities separated by bullet characters. Two density levels appear: a primary list in larger bold text, and a secondary list in smaller muted text below.

- Anatomy: Flowing paragraph with mid-dot separators
- Typography: feature-list token for primary, body token in ink-muted for secondary
- Composition: Centered, maximum width constrained for readability
- Spacing: 2rem gap between primary and secondary list blocks

## Responsive behavior

The single-column layout adapts gracefully to narrower viewports through proportional scaling. Display headings should reduce by approximately 25 percent on tablet and 40 percent on mobile to maintain fit without excessive wrapping. The feature grid should collapse from three columns to two, then to a single stacked column on narrow screens, preserving centered alignment throughout.

The dense feature list benefits from maintained padding; avoid allowing text to touch viewport edges. The editor screenshot should scale proportionally, potentially receiving reduced border radius on mobile to maximize visible content area. The primary action button maintains its pill shape and padding ratios at all sizes, with touch targets remaining accessible.

## Practical implementation guidance

### Preserve
- The deep navy canvas as the dominant background; do not introduce light sections that break the cosmic continuity
- Bold white typography against dark backgrounds as the primary information carrier
- Magenta as the singular action color, used sparingly for maximum impact
- Rainbow gradient rules as section transitions, maintaining the warm-to-cool flow direction
- Three-dimensional icon style with soft lighting and rounded forms
- The two-tone word accent pattern in feature labels

### Avoid
- Additional accent colors beyond the established magenta, orange, cyan, and lime
- Light or white backgrounds that would destroy the dark mode immersion
- Sharp-cornered buttons or cards; maintain the pill and rounded panel language
- Generic icon styles that lack dimensional depth
- Separating the feature list into traditional bulleted lists; preserve the flowing paragraph form

### Recommended build order
1. Establish the dark canvas background and base typography with Hellix Bold and Regular
2. Implement the centered single-column layout with maximum width constraints
3. Add the display heading hierarchy with negative tracking
4. Build the primary action button with pill shape and magenta fill
5. Create the rainbow gradient rule component for section boundaries
6. Implement the feature grid with 3D icons and split-color labels
7. Add the editor screenshot with appropriate shadow and rounded corners
8. Construct the dense feature list with bullet-separated flowing text

### Accessibility
- Ensure white text on dark navy maintains minimum 7:1 contrast ratio; the current palette exceeds this
- Provide focus indicators for the magenta action button that do not rely solely on color change
- Consider reducing motion for the starfield background if it includes animation
- Maintain touch target size of at least 44px for the pill button on mobile devices
- Use semantic heading hierarchy despite the visual uniformity of bold weights

## Scope note

This guide covers the Nova product page's dark cosmic landing experience as visible in the supplied images. Measurements are practical adaptation targets. Mobile breakpoints, navigation behavior, form interactions, purchase flows, and documentation pages are not represented. The starfield background treatment and any motion effects are described from static view only.
