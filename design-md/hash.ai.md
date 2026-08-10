# How hash.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/hash.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Integration grid showing six source-category cards with application icons arranged in a honeycomb pattern against a near-black background, featuring gradient accent text on](https://pin.fontofweb.com/3929?format=jpg)](https://design.withfudge.com/share/pin-3929)

[Integration grid showing six source-category cards with application icons arranged in a honeycomb pattern against a near-black background, featuring gradient accent text on](https://design.withfudge.com/share/pin-3929)

[![Hero section with stacked gradient headline transitioning from white through cyan to blue, email capture form, and product interface screenshot with sidebar navigation and](https://pin.fontofweb.com/3928?format=jpg)](https://design.withfudge.com/share/pin-3928)

[Hero section with stacked gradient headline transitioning from white through cyan to blue, email capture form, and product interface screenshot with sidebar navigation and](https://design.withfudge.com/share/pin-3928)

## Overview

HASH presents a dark-mode SaaS identity built around trust, governance, and structured knowledge. The visual system pairs near-black backgrounds with a distinctive cyan-to-blue gradient accent that appears in headlines, category labels, and interactive highlights. The interface communicates technical sophistication through dense but organized information architecture—integration grids, knowledge graph visualizations, and modular card systems that scale across use cases. Typography splits cleanly between Open Sauce Two for display moments and Inter for functional body text, creating a hierarchy that feels both engineered and approachable. The overall impression is of a platform that handles complexity without visual noise, using depth through subtle surface elevation rather than heavy shadows or borders.

## Colors

The color system operates on a dark-first principle with a spectral accent range that bridges cyan and blue. Every token serves a specific role in establishing depth, readability, or interactive state.

| token | value | use |
|---|---|---|
| canvas | #0a0a0f | Primary page background, deepest layer |
| surface | #141419 | Card backgrounds, secondary containers |
| surface-elevated | #1c1c24 | Hover states, elevated panels, input fields |
| ink | #ffffff | Primary headings, body text on dark |
| ink-muted | #8a8a9a | Secondary descriptions, labels, placeholder text |
| accent-cyan | #22d3ee | Gradient start, highlight moments, category labels |
| accent-blue | #3b82f6 | Gradient end, primary actions, links |
| border | #2a2a35 | Card outlines, dividers, subtle separation |
| action-primary | #3b82f6 | Primary buttons, CTAs, active states |
| action-primary-hover | #2563eb | Button hover, interactive emphasis |

The gradient accent—transitioning from cyan to blue—defines the brand's most visible moments. It appears in the hero headline as a text fill effect, in the "CREATE A HASH WEB" pill badge, and as category headers in the integration grid. This spectral range suggests both technical precision (cyan's association with code and data) and trustworthiness (blue's conventional reliability). The dark canvas and surface layers create sufficient contrast for white text without the harshness of pure black, while the muted ink tone reduces visual weight for secondary information. Border colors remain subtle, functioning as optical separators rather than structural outlines.

## Typography

The type system pairs a custom display family with a widely available functional family, creating clear role separation between brand expression and interface utility.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Open Sauce Two | 4rem | 700 | 1.1 | -0.02em | Hero headlines, major value propositions |
| section-display | Open Sauce Two | 2.5rem | 600 | 1.2 | -0.01em | Section headings, feature titles |
| body-large | Inter | 1.25rem | 500 | 1.6 | 0em | Lead paragraphs, descriptive copy |
| body | Inter | 1rem | 400 | 1.6 | 0em | General content, card descriptions |
| label | Inter | 0.875rem | 500 | 1.4 | 0.02em | Category tags, metadata, counts |
| navigation | Inter | 0.875rem | 500 | 1 | 0em | Header links, menu items |
| legal-copy | Inter | 0.75rem | 400 | 1.5 | 0.01em | Terms, disclaimers, fine print |

Open Sauce Two, designed by Alfredo Marco Pradil of Creative Sauce Fz Llc, handles all display moments with a geometric confidence that supports the brand's technical positioning. Its weights from Regular through Bold allow nuanced hierarchy within headlines. Inter, designed by Rasmus Andersson, provides the workhorse layers—body text, navigation, labels, and form elements—with excellent screen readability at smaller sizes. The hero display's tight tracking and substantial negative letter spacing create impact at large sizes, while the body scale's generous leading maintains readability across longer passages. Verify licensing for these families before production use.

## Layout

The layout system centers content within a contained width while allowing certain elements—particularly the integration grid—to break into more complex arrangements. The hero section stacks vertically: navigation bar, eyebrow text, gradient headline, supporting paragraph, email capture form, and product screenshot. This single-column approach focuses attention on the value proposition before introducing complexity.

The integration grid in the lower section uses an offset honeycomb-inspired arrangement where six category cards sit in a loose 3-2-1 row pattern with intentional asymmetry. Cards vary in width based on content density—"from any application" and "from files, docs, and notes" occupy wider footprints, while "from physical sensors" and "from offline sources" are narrower. This organic distribution prevents the grid from feeling rigidly mechanical while maintaining scannability.

Spacing follows a 4px base unit. Section padding uses 6rem vertical gaps to create breathing room between major content areas. Card internal padding sits at 1.5rem, with 1rem gaps between cards in the grid. The product screenshot in the hero receives a subtle top margin that separates it from the email capture form, creating visual hierarchy through proximity rather than explicit dividers.

## Visual language

The visual identity balances technical credibility with approachable clarity. The dark canvas establishes a premium, focused environment that lets colorful application icons and gradient accents carry visual interest. Photography and illustration are absent; instead, the system relies on icon grids, interface screenshots, and abstract network visualizations to communicate product function.

Depth is achieved through surface layering rather than drop shadows. Cards sit on the canvas with subtle border definition; elevated states use slightly lighter backgrounds. The product screenshot in the hero demonstrates this principle—the interface appears as a floating window with rounded corners and internal depth created by sidebar navigation, content areas, and a knowledge graph panel.

The gradient accent functions as a signature element, appearing in three distinct applications: text fill on headlines, background fill on pill badges, and as a color accent on category labels. This consistency ties disparate elements into a cohesive system. Iconography within integration cards uses recognizable third-party logos at uniform sizes, arranged in consistent grid patterns with "+ N more" overflow indicators.

## Components

### Navigation bar

- **Anatomy**: Logo mark (hash symbol + "HASH" wordmark), primary links (Solutions, Use Cases, Integrations, Learn), utility actions (Sign in, Sign up)
- **Surface**: Transparent background over hero, ink text
- **Typography**: `{typography.navigation}`
- **Shape**: Full-width, height approximately 4rem
- **Spacing**: Horizontal padding aligned with content container, link spacing at 2rem intervals
- **Composition**: Logo left-aligned, links center-left, utility actions right-aligned
- **Variants**: Sign in as text link with arrow icon; Sign up as filled button with arrow icon

### Hero headline

- **Anatomy**: Eyebrow text ("AI you can trust"), stacked three-line headline with gradient fill, supporting paragraph
- **Surface**: Transparent over canvas background
- **Typography**: Eyebrow uses `{typography.label}` in ink-muted; headline uses `{typography.hero-display}` with gradient from accent-cyan to accent-blue; paragraph uses `{typography.body-large}` in ink-muted
- **Shape**: Left-aligned text block, maximum width approximately 60% of container
- **Spacing**: 1rem between eyebrow and headline, 1.5rem between headline and paragraph
- **Composition**: Stacked vertical arrangement with consistent left alignment

### Email capture form

- **Anatomy**: Text input, submit button, legal disclaimer
- **Surface**: Input uses surface-elevated background with border; button uses action-primary background
- **Typography**: Input placeholder uses `{typography.body}` in ink-muted; button uses `{typography.label}` in ink; disclaimer uses `{typography.legal-copy}` in ink-muted
- **Shape**: Input and button share 0.5rem radius; button has 9999px pill option for standalone use
- **Spacing**: 0.5rem gap between input and button; 1rem above disclaimer
- **Composition**: Inline arrangement with input expanding to fill available width

### Integration category card

- **Anatomy**: Category header with gradient text, icon grid (2x3 or 3x3 arrangement), "+ N more" overflow indicator
- **Surface**: surface background with 1px border
- **Typography**: Header uses `{typography.section-display}` at reduced size with gradient fill; overflow text uses `{typography.label}` in ink-muted
- **Shape**: 0.75rem radius, variable width based on grid position
- **Spacing**: 1.5rem internal padding, 1rem icon gaps
- **Composition**: Header top-aligned, icon grid below with consistent alignment
- **Variants**: Width adapts to content density; some cards show descriptive text blocks instead of pure icon grids

### Product screenshot frame

- **Anatomy**: Browser-like chrome with sidebar navigation, main content area, knowledge graph panel, floating video play button
- **Surface**: Dark interface chrome with surface-elevated panels
- **Typography**: Sidebar uses `{typography.label}` in ink-muted with active state in ink; counts use `{typography.label}` in accent-blue
- **Shape**: 1rem radius on outer frame, internal panels separated by 1px borders
- **Spacing**: Sidebar items at 2.5rem height with 0.5rem vertical padding
- **Composition**: Three-column layout with collapsible sidebar, flexible content, fixed-width graph panel

### Video play button

- **Anatomy**: Play icon, "Play video" label, duration text
- **Surface**: Semi-transparent dark background with subtle backdrop blur
- **Typography**: Label uses `{typography.label}` in ink; duration uses `{typography.legal-copy}` in accent-blue
- **Shape**: Pill shape, 9999px radius
- **Spacing**: 1rem horizontal padding, 0.75rem vertical
- **Composition**: Centered overlay on product screenshot

## Responsive behavior

The layout should maintain single-column stacking on narrower viewports, with the hero headline reducing in scale and the integration grid collapsing to a vertical scroll or simplified two-column arrangement. The navigation bar should convert to a hamburger menu on mobile, preserving the Sign up CTA as a persistent button. The product screenshot may require horizontal scroll or aspect-ratio preservation to maintain interface detail visibility. The gradient headline effect should remain legible at reduced sizes, potentially adjusting to a two-line stack rather than three. Integration cards should reflow to equal widths in a single column, with icon grids maintaining their internal arrangement.

## Practical implementation guidance

### Preserve
- The dark canvas as the default environment; light-mode inversion would fundamentally alter the brand character
- The cyan-to-blue gradient as the singular accent range; introducing additional spectral accents would dilute the identity
- The Open Sauce Two and Inter pairing; substituting either family would break the engineered-yet-approachable tone
- The offset, asymmetric integration grid; forcing perfect symmetry would lose the organic, honeycomb-inspired rhythm
- The subtle border-based depth system; heavy shadows would contradict the flat, modern aesthetic

### Avoid
- Pure black (#000000) backgrounds; the near-black canvas (#0a0a0f) provides necessary warmth and depth
- Gradient accents on body text or long passages; reserve the effect for headlines and short labels only
- Rigidly equal card widths in the integration grid; the variable sizing communicates content density
- Light-mode photography or illustration; the system relies on interface chrome and iconography for visual interest
- Border-radius inconsistency; maintain the 0.5rem/0.75rem/1rem/9999px hierarchy across components

### Recommended build order
1. Establish the dark canvas and surface layer system with correct color values
2. Implement typography hierarchy with Open Sauce Two display and Inter body scales
3. Build the navigation bar with transparent-to-solid scroll behavior
4. Create the hero section with gradient text implementation (CSS `background-clip: text`)
5. Develop the email capture form with input and button states
6. Construct the integration grid with variable-width cards and icon arrangements
7. Add the product screenshot frame with internal layout structure
8. Polish with hover states, focus indicators, and loading skeletons

### Accessibility
- Ensure gradient text maintains sufficient contrast; the cyan-to-blue range may need fallback solid colors for WCAG compliance
- Provide visible focus indicators on all interactive elements against dark backgrounds
- Use `prefers-reduced-motion` to disable any gradient animations or parallax effects
- Maintain keyboard navigation order through the asymmetric grid layout
- Consider high-contrast mode support with solid color alternatives to gradient accents

## Scope note

This guide covers the HASH.ai landing page hero and integration grid sections visible in the supplied images. Footer content, additional interior pages, mobile-specific layouts, motion design, and dark-to-light mode transitions are not represented. Measurements are practical adaptation targets.
