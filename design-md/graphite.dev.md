# How graphite.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/graphite.dev-design)

Last updated: 2026-08-10

## Captured pages

[![Contact page with dark gradient background, two-column layout containing a sales form with floating labels and a support information panel with monospace command references.](https://pin.fontofweb.com/1151?format=jpg)](https://design.withfudge.com/share/pin-1151)

[Contact page with dark gradient background, two-column layout containing a sales form with floating labels and a support information panel with monospace command references.](https://design.withfudge.com/share/pin-1151)

[![Features section showcasing the Graphite CLI with a terminal code preview, six feature cards in a grid, and a glowing primary action button with arrow icon.](https://pin.fontofweb.com/1150?format=jpg)](https://design.withfudge.com/share/pin-1150)

[Features section showcasing the Graphite CLI with a terminal code preview, six feature cards in a grid, and a glowing primary action button with arrow icon.](https://design.withfudge.com/share/pin-1150)

[![Graphite Merge Queue feature with a tilted product screenshot, three translucent glassmorphism benefit cards, and a centered pill-shaped CTA with cyan-purple glow.](https://pin.fontofweb.com/1149?format=jpg)](https://design.withfudge.com/share/pin-1149)

[Graphite Merge Queue feature with a tilted product screenshot, three translucent glassmorphism benefit cards, and a centered pill-shaped CTA with cyan-purple glow.](https://design.withfudge.com/share/pin-1149)

[![Graphite Insights section with a dark analytics dashboard mockup, three frosted overlay cards describing metrics capabilities, and a softly illuminated action button.](https://pin.fontofweb.com/1148?format=jpg)](https://design.withfudge.com/share/pin-1148)

[Graphite Insights section with a dark analytics dashboard mockup, three frosted overlay cards describing metrics capabilities, and a softly illuminated action button.](https://design.withfudge.com/share/pin-1148)

## Overview

Graphite's visual system is built for developer tools: a near-black canvas with carefully controlled luminosity, luminous cyan-to-purple gradient accents, and glassmorphism surfaces that suggest depth without heaviness. The design communicates technical sophistication through monospace code samples, precise grid structures, and restrained typography. Every element serves the narrative of speed, automation, and engineering excellence. The homepage and feature pages share a consistent rhythm: bold section headers, immersive product screenshots tilted in perspective, and translucent benefit cards that float above the imagery. The contact page adapts this language to functional form design while maintaining the same dark atmosphere and subtle border treatments.

## Colors

The palette is intentionally narrow, deriving its energy from accent gradients rather than broad chromatic range. Deep blacks establish focus, while cool neutrals provide hierarchy. The cyan and purple accents appear primarily in button glows, terminal highlights, and decorative gradients.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, deepest layer |
| surface | #0a0a0f | Elevated panels, form backgrounds, card bases |
| surface-elevated | #111118 | Glassmorphism card fills, input backgrounds |
| ink | #f7f7f8 | Primary text, headings, active navigation |
| muted-ink | #a0a0b0 | Secondary text, descriptions, placeholders |
| accent-cyan | #00d4ff | Terminal highlights, button glows, gradient start |
| accent-purple | #a855f7 | Gradient endpoints, decorative accents |
| border-subtle | #27272a | Card borders, input outlines, dividers |
| border-glow | #3f3f46 | Hover states, focused borders |

The interface operates in a single dark mode. Light values are reserved for text and primary actions, never for backgrounds. Gradients move from cyan through blue to purple, typically applied as soft radial glows behind buttons or as ambient atmosphere behind product screenshots. Photographic imagery of the product UI maintains its own internal color system—greens for success states, oranges for warnings—without affecting the site palette.

## Typography

The type system pairs a distinctive display face with workhorse body and code families. Matter provides personality in headlines with its geometric construction and medium weight. Inter handles all body text with neutral clarity. JetBrains Mono appears for code samples and command references.| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Matter | 3rem | 500 | 1.1 | -0.02em | Page titles, major section headers |
| section-display | Matter | 2.25rem | 500 | 1.15 | -0.01em | Feature section headings |
| body | Inter | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, form labels |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0 | Card descriptions, secondary content |
| label | Inter | 0.75rem | 400 | 1.4 | 0.01em | Form field labels, metadata |
| code | JetBrains Mono | 0.875rem | 400 | 1.5 | 0 | Terminal output, inline commands, keyboard shortcuts |
| navigation | Inter | 0.875rem | 400 | 1 | 0 | Header links, menu items |

Matter is designed by Martin Vácha and published by Displaay. Inter is designed by Rasmus Andersson. JetBrains Mono is designed by Philipp Nurullin and Konstantin Bulenkov. DM Mono is designed by Colophon Foundry. Verify licensing for these families before production use.

## Layout

The layout follows a centered content model with generous vertical breathing room. Sections stack with substantial separation, typically six rem or more, creating a deliberate pace that allows each feature to register. Content max-widths constrain reading measure while allowing decorative elements to extend toward viewport edges.

The grid system uses a flexible column approach. Feature pages employ asymmetric layouts: a centered header block followed by a large product screenshot that breaks the content width, then a three-column grid of benefit cards that overlap the screenshot's lower portion. The contact page uses a two-column split at wider viewports, with the form occupying the larger share and support information in a narrower sidebar.

Spacing follows a quarter-rem base unit. Component padding uses multiples of this unit: inputs receive one rem internally, cards use one and a half rem. Section vertical rhythm scales from four rem on compact sections to six rem for major transitions. The product screenshots employ perspective transforms, tilting back from the viewer to create dimensional depth without actual 3D rendering.

## Visual language

The dominant visual motif is controlled luminosity against absolute darkness. Product screenshots emerge from black backgrounds with soft ambient glows—cyan and purple gradients that suggest energy without overwhelming. This creates a stage-light effect where the interface itself becomes the performer.

Glassmorphism appears in benefit cards that overlay screenshots. These cards use semi-transparent dark fills with backdrop blur, subtle borders, and no heavy shadows. The effect suggests physical depth while maintaining readability over complex imagery.

Terminal and code representations are treated as first-class visual elements. The CLI feature section presents actual command output with syntax highlighting—cyan for commands, white for output, green for success indicators. This is not decorative; it is functional demonstration that reinforces the product's purpose.

Buttons receive special treatment: primary actions use pure white fills with black text, but are surrounded by soft gradient glows that pulse with cyan and purple light. This creates a magnetic focal point without resorting to saturated button fills.

## Components

### Primary action button
- **Anatomy**: Text label with optional arrow icon, centered within a pill-shaped container
- **Surface**: White fill (#f7f7f8) with black text (#000000)
- **Typography**: `{typography.body}` at 1rem
- **Shape**: Full pill border radius (`9999px`)
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal
- **Composition**: Centered within sections, often with gradient glow effect behind
- **Variants**: Arrow icon appears on right side for external or forward actions

### Feature benefit card
- **Anatomy**: Heading, description paragraph, optional code reference
- **Surface**: Semi-transparent dark fill with backdrop blur, subtle border
- **Typography**: Heading uses `{typography.section-display}` at reduced 1.25rem, body uses `{typography.body-small}`
- **Shape**: 0.75rem border radius
- **Spacing**: 1.5rem internal padding
- **Composition**: Grid of three cards, equal width, with consistent internal alignment
- **States**: Static in supplied images; hover states not visible

### Form input
- **Anatomy**: Floating label above text field, full-width container
- **Surface**: Dark fill matching surface-elevated, 1px border in border-subtle
- **Typography**: Label uses `{typography.label}`, input text uses `{typography.body}`
- **Shape**: 0.5rem border radius
- **Spacing**: Generous vertical margin between fields, approximately 1.5rem
- **Composition**: Stacked vertically in form column, full width of container
- **Variants**: Text inputs, select dropdowns, checkbox groups, and textarea all share consistent treatment

### Terminal preview
- **Anatomy**: Command prompt, command text, output text, success indicators
- **Surface**: Dark rounded panel with subtle border, distinct from page background
- **Typography**: `{typography.code}` throughout, with color variation for semantics
- **Shape**: 0.75rem border radius, generous internal padding
- **Composition**: Centered, constrained width, with ambient glow effect behind
- **Hierarchy**: Commands in cyan, output in white, success markers in green

### Navigation header
- **Anatomy**: Logo mark, text links, primary action button
- **Surface**: Transparent or near-transparent over dark backgrounds
- **Typography**: `{typography.navigation}` for links
- **Composition**: Horizontal flex layout, logo left, links center, action right

## Responsive behavior

The layout appears optimized for desktop presentation in the supplied images. The three-column benefit card grids should collapse to single column on narrow viewports, maintaining card proportions and internal spacing. The contact page two-column layout should stack with the form preceding support information. Product screenshots with perspective transforms may require reduced tilt angles or simplified flat presentation at smaller sizes to preserve readability. Typography scales down proportionally: hero-display should reduce to 2rem on compact viewports, section-display to 1.75rem. The pill-shaped primary buttons should maintain touch-friendly minimum dimensions of 44 by 44 pixels even as surrounding spacing compresses.

## Practical implementation guidance

### Preserve
- The absolute black canvas as foundation; any lightening destroys the atmospheric effect
- The Matter typeface in headlines; its geometric character is distinctive to the brand
- Glassmorphism cards with actual backdrop-filter blur, not solid substitutes
- Cyan-purple gradient glows behind primary buttons as signature focal treatment
- Monospace code rendering with semantic color coding in terminal previews

### Avoid
- Light backgrounds or light mode variants; the system is built for dark mode exclusively
- Heavy drop shadows; depth comes from blur, glow, and transparency instead
- Saturated button fills; keep actions white with ambient color effects
- Generic icon sets where code or terminal representations can communicate more specifically
- Borders heavier than 1px; the aesthetic relies on hairline precision

### Recommended build order
1. Establish the black canvas and surface color hierarchy
2. Implement Matter headlines and Inter body text with proper scale
3. Build the primary button with pill shape and gradient glow effect
4. Create the glassmorphism card component with backdrop blur
5. Add terminal preview with JetBrains Mono and syntax coloring
6. Compose feature sections with perspective screenshot and overlapping cards
7. Implement form components with floating labels and consistent dark treatment

### Accessibility
- Ensure white text on black backgrounds meets WCAG AAA contrast ratios; the current ink value does
- Provide visible focus indicators on form inputs beyond subtle border changes; consider a cyan outline offset
- Add aria-labels to icon-only buttons and command shortcuts
- Ensure gradient glows behind buttons do not interfere with text readability
- Test glassmorphism cards over varied screenshot content for sufficient contrast

## Scope note

This guide covers the homepage, features, and contact page surfaces visible in the supplied images. Pricing page structure, blog layouts, mobile breakpoints, animation behavior, hover states, and form validation styling are not represented. Measurements are practical adaptation targets derived from visual inspection of the desktop presentation.
