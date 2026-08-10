# How yannickgregoire.nl is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/yannickgregoire.nl-design)

Last updated: 2026-08-10

## Captured pages

[![Services and contact sections with terminal-style typography, black background, and abstract geometric illustration](https://pin.fontofweb.com/119?format=jpg)](https://design.withfudge.com/share/pin-119)

[Services and contact sections with terminal-style typography, black background, and abstract geometric illustration](https://design.withfudge.com/share/pin-119)

[![Project card with bright green highlight bar, terminal mono type, and minimal black background](https://pin.fontofweb.com/118?format=jpg)](https://design.withfudge.com/share/pin-118)

[Project card with bright green highlight bar, terminal mono type, and minimal black background](https://design.withfudge.com/share/pin-118)

[![Playbook Journal project detail with green highlight, purple and orange geometric shapes, and info panel layout](https://pin.fontofweb.com/117?format=jpg)](https://design.withfudge.com/share/pin-117)

[Playbook Journal project detail with green highlight, purple and orange geometric shapes, and info panel layout](https://design.withfudge.com/share/pin-117)

[![Projects listing page with multiple project entries, green accent bars, and terminal-style navigation footer](https://pin.fontofweb.com/116?format=jpg)](https://design.withfudge.com/share/pin-116)

[Projects listing page with multiple project entries, green accent bars, and terminal-style navigation footer](https://design.withfudge.com/share/pin-116)

## Overview

This design system captures a terminal-inspired portfolio website with a stark, high-contrast visual language. The system is built around a single monospace typeface rendered in white against an unmodulated black canvas, punctuated by a vivid green accent that appears in highlight bars, status indicators, and interactive elements. The aesthetic evokes early computing interfaces—CRT terminals, command-line tools, and ASCII art—while serving modern portfolio content including project listings, service descriptions, and contact information.

The visual character is deliberately austere: no gradients, no rounded corners, no soft shadows. Typography carries the entire expressive load, with large dotted or outlined letterforms for section headings and a consistent terminal mono face for all body and interface text. Geometric abstractions—pixelated curves, angular shapes, and sparse line art—float in the negative space, reinforcing the digital-native sensibility without competing with the information hierarchy.

The site appears to function as a single-page or minimally routed experience, with keyboard-style navigation hints visible in the footer and project entries that expand or link to detail views. The overall impression is of a developer-designer who treats the browser as a native environment, not a polished marketing surface.

## Colors

The palette is severely constrained, deriving its impact from contrast rather than variety. Black and white dominate, with a single electric green serving as the functional accent. A mid-tone gray appears for secondary information and disabled or muted states.

| token | value | use |
|---|---|---|
| canvas | #000000 | Page background, card surfaces, all primary containers |
| ink | #ffffff | Primary text, headings, body copy, navigation labels |
| accent | #00ff9f | Project highlight bars, status indicators, interactive emphasis |
| muted | #7f7f7f | Secondary metadata, timestamps, decorative labels |

The canvas color is absolute black, creating maximum contrast with white typography and allowing the green accent to read as luminous. The accent green appears most prominently as solid rectangular bars behind project names, functioning as both visual anchor and interactive affordance. The muted gray is used sparingly for timestamps and peripheral labels, maintaining hierarchy without introducing visual noise.

No light mode is visible in the supplied images; the system operates entirely in a dark, high-contrast mode. Photographic and illustrative content is rendered in monochrome or with limited color palettes that harmonize with the terminal aesthetic. The green accent is the only saturated color in the interface, making it an effective focal device when applied to interactive or highlighted elements.

## Typography

All text is set in a single monospace family, reinforcing the terminal-computing metaphor throughout. The typeface features distinct dotted or outlined construction in large sizes, transitioning to solid forms at smaller sizes for readability.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Lt Terminal Mono-Terminal Mono | 4rem | 400 | 1 | 0.05em | Section headings like "SERVICES", "CONTACT", "PROJECTS" |
| section-display | Lt Terminal Mono-Terminal Mono | 3rem | 400 | 1 | 0.05em | Project names in highlight bars |
| body | Lt Terminal Mono-Terminal Mono | 1rem | 400 | 1.5 | 0.02em | Descriptions, info panels, metadata |
| label | Lt Terminal Mono-Terminal Mono | 0.75rem | 400 | 1 | 0.08em | Category prefixes, technical tags |
| navigation | Lt Terminal Mono-Terminal Mono | 0.75rem | 400 | 1.25 | 0.05em | Footer navigation, keyboard shortcuts |

The hero-display size renders with a distinctive dotted or perforated texture, creating an almost LED-matrix appearance that differentiates section headings from functional text. This decorative treatment is size-dependent and does not appear at body or navigation scales.

Font sizes are derived from a 4px base unit, with all values expressed as whole-number multiples: 12px (0.75rem), 16px (1rem), 48px (3rem), and 64px (4rem). Line heights are tight, reflecting the terminal aesthetic where vertical space is conserved and text blocks read as discrete lines rather than flowing paragraphs.

Verify licensing for these families before production use. The typeface "Lt Terminal Mono-Terminal Mono" is served from the site's own font directory with no attribution metadata available.

## Layout

The layout follows a rigid, grid-aligned structure with generous negative space and clear horizontal bands. Sections stack vertically with consistent internal padding, and content is generally left-aligned with structured indentation for hierarchical information.

The page width appears unconstrained by a centered container; instead, content extends to comfortable margins, suggesting a full-bleed or near-full-bleed approach that respects the terminal metaphor of an endless scrolling surface. Project listings use a two-column or asymmetric layout where project identifiers and highlight bars occupy the left portion, while descriptive content and imagery fill the remaining space.

Vertical rhythm is established through consistent section spacing of approximately 4rem between major content blocks. Within sections, component spacing of 1.5rem separates related elements like project titles from their metadata, or info headers from body paragraphs.

The footer navigation is fixed or persistently visible, organized into columns with keyboard shortcut prefixes (^H, ^P, ^↑, ^C) paired with action labels. This footer anchors the page and provides wayfinding without a traditional header menu.

Project detail views, where visible, maintain the same structural logic: a left-aligned project identifier with green highlight, followed by an info panel with structured metadata (design credit, tech stack, URL), and supplementary imagery positioned to the right or below.

## Visual language

The visual language is defined by restraint and reference: every element alludes to computing history while serving contemporary portfolio functions. The black canvas is not merely a background but a defining surface that makes white typography appear to glow and green accents to pulse with artificial luminosity.

Geometric abstraction appears in two forms: sparse line art with pixelated or stepped curves that evoke early vector graphics, and solid angular shapes (hexagons, rectangles, starbursts) in limited colors that serve as decorative counterpoints. These shapes are positioned asymmetrically, often bleeding toward edges or overlapping content areas without obscuring text.

The dotted or perforated texture of large headings is a signature treatment, transforming simple letterforms into bitmap-like objects that resonate with 8-bit and terminal aesthetics. This texture is not applied indiscriminately; it is reserved for section-level headings where scale permits the detail to read clearly.

Status indicators and interactive hints use minimal glyphs: small squares that toggle between green and white, arrow symbols for external links, and caret-plus prefixes for section labels. These micro-elements reinforce the command-line interface metaphor without requiring explicit UI chrome.

The overall composition balances density and emptiness. Text blocks are compact and information-dense, while surrounding space is deliberately vacant, creating a rhythm of concentration and release that guides attention through the page.

## Components

### Project Card

The project card is the primary content unit, appearing in listings and detail views.

- **Anatomy**: A project identifier block on the left containing a category prefix `[/> PR. NAME]`, the project name in large dotted type on a green accent bar, a year timestamp, and a small square status indicator. To the right, an info panel with section header `[/> INFO]`, descriptive paragraph, and structured metadata lines.
- **Surface**: Black background with no border or shadow. The green accent bar is a solid rectangle behind the project name, extending to the full width of the identifier block.
- **Typography**: Project name uses section-display token; info header uses body token with bracketed prefix; description and metadata use body token.
- **Shape**: All corners are sharp with 0rem radius. The green bar is a perfect rectangle.
- **Spacing**: The identifier block and info panel are separated by a substantial gap, approximately 3rem. Internal spacing within the identifier is tight, with the project name directly on the green bar and metadata lines stacked with minimal leading.
- **Composition**: Left-right asymmetric layout with the identifier block taking roughly one-third of the width. In list views, multiple cards stack vertically with consistent section spacing.
- **Variants**: Detail views expand the info panel with additional metadata lines (design credit, tech stack, URL) and may include supplementary imagery. The status square appears to toggle between green (active) and white (inactive or visited).

### Navigation Footer

The navigation footer provides persistent wayfinding with keyboard shortcut aesthetics.

- **Anatomy**: Four columns, each containing a key combination prefix (like `^H`, `^P`) and paired action labels (`HOME`, `BIOGRAPHY`, `PROJECTS`, `SERVICES`, etc.).
- **Surface**: Black background, white text, no visible border or separator.
- **Typography**: Navigation token for all labels; key prefixes and action names share the same size and weight.
- **Shape**: Rectangular, full-width, sharp corners with 0rem radius.
- **Spacing**: Columns are evenly distributed with generous internal padding. The footer appears fixed to the viewport bottom or immediately follows content with clear separation.
- **Composition**: Horizontal band with equal column widths. Some columns contain stacked pairs of shortcuts and labels.

### Section Heading

Large structural headings that demarcate major page regions.

- **Anatomy**: Single word or short phrase in all capitals.
- **Surface**: Black background, white dotted letterforms.
- **Typography**: Hero-display token with distinctive perforated texture.
- **Shape**: Text only, no containing box or underline, 0rem radius.
- **Spacing**: Generous margin above and below, typically 4rem or more, establishing clear section boundaries.
- **Composition**: Left-aligned, full width, dominating the horizontal band where it appears.

### Info Panel

Structured text block for project descriptions and metadata.

- **Anatomy**: Header with bracketed prefix `[/> INFO]`, followed by paragraph text and labeled metadata lines (`DESIGN:`, `TECH:`, `AWARDED:`).
- **Surface**: Black background, white text. Award badges appear with inverted treatment (white background, black text) as inline highlights.
- **Typography**: Body token for all content; metadata labels use the same size with colon suffix.
- **Shape**: No containing border; text flows as a block with 0rem radius.
- **Spacing**: Paragraphs separated by standard line height. Metadata lines stack with minimal additional spacing.
- **Composition**: Left-aligned, width constrained by proximity to project identifier or imagery.

## Responsive behavior

No mobile layouts are visible in the supplied images. The following guidance is recommended for implementation:

The two-column project card layout should collapse to a single vertical stack on narrow viewports, with the identifier block (project name, year, status) preceding the info panel. The green accent bar may extend full-width in this configuration to maintain visual impact.

The navigation footer should reorganize from four columns to a two-by-two grid or vertical list on small screens, preserving the key-prefix pattern but allowing touch-friendly tap targets.

Hero-display headings should scale down to the section-display size (3rem) on narrow viewports to prevent excessive line breaks. The dotted texture should be verified for legibility at reduced sizes and may transition to solid forms below a threshold.

Body text at 1rem should remain comfortable for reading; no reduction is necessary. Line length in info panels should be constrained to approximately 60 characters for readability, which may require max-width containers in the single-column layout.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the foundation of all surfaces; do not introduce off-blacks or subtle gradients.
- The single monospace family for all text; mixing in sans-serif or serif faces would break the terminal metaphor.
- The green accent as the only saturated color in the interface; reserve it for interactive emphasis and project identification.
- The dotted or perforated heading treatment at large sizes; this is the most distinctive visual signature.
- The bracketed prefix convention (`[/>`, `[^`) for section labels and navigation hints.

### Avoid
- Rounded corners on any element; the aesthetic demands sharp, pixel-precise edges with 0rem radius throughout.
- Drop shadows, glows, or other atmospheric effects; rely on flat color and contrast alone.
- Multi-color palettes beyond the defined four tokens; photography and illustration should be monochrome or severely limited.
- Centered text alignment; maintain left alignment throughout for terminal authenticity.
- Decorative underlines or borders that do not serve a structural purpose.

### Recommended Build Order
1. Establish the black canvas and load the monospace font with appropriate fallbacks.
2. Implement the typography scale, verifying the dotted texture renders correctly at hero-display size.
3. Build the navigation footer with column layout and keyboard shortcut pattern.
4. Create the project card component with green accent bar and asymmetric two-column structure.
5. Add section headings and info panels with bracketed prefixes.
6. Integrate geometric imagery and abstract shapes, ensuring they do not interfere with text legibility.
7. Implement responsive collapse for narrow viewports.

### Accessibility
- The high contrast between white text and black background meets WCAG AAA standards for normal text.
- The green accent on black should be verified for contrast; the combination of #00ff9f on #000000 exceeds WCAG AA for large text but may fail for small text depending on exact rendering.
- The dotted heading texture may reduce legibility for users with low vision; provide an alternative solid rendering or ensure sufficient size.
- Keyboard navigation should be fully supported given the shortcut-centric footer design; ensure all interactive elements have visible focus indicators that match the green accent.
- Screen reader users will benefit from the explicit bracketed prefixes being marked as decorative or accompanied by semantic heading structure.

## Scope note

This guide covers the homepage and projects listing surfaces visible in the supplied images. Interior pages, mobile breakpoints, motion design, hover states, and form interactions are not represented. Measurements are practical adaptation targets derived from visual inspection against a 4px base unit. The dotted heading texture and its size-dependent behavior may require custom implementation or font feature detection.
