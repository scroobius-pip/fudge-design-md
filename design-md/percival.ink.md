# How percival.ink is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/percival.ink-design)

Last updated: 2026-08-10

## Captured pages

[![Code cell with syntax-highlighted Datalog showing path relations and reactivity exercise with inline code blocks and colored tokens](https://pin.fontofweb.com/6093?format=jpg)](https://design.withfudge.com/share/pin-6093)

[Code cell with syntax-highlighted Datalog showing path relations and reactivity exercise with inline code blocks and colored tokens](https://design.withfudge.com/share/pin-6093)

[![Landing page hero with Percival crown logo, navigation, welcome heading, scenic photograph, and interactive notebook introduction](https://pin.fontofweb.com/6092?format=jpg)](https://design.withfudge.com/share/pin-6092)

[Landing page hero with Percival crown logo, navigation, welcome heading, scenic photograph, and interactive notebook introduction](https://design.withfudge.com/share/pin-6092)

## Overview

Percival presents itself as an interactive in-browser notebook for declarative data analysis and visualization. The visual system is deliberately scholarly and restrained, centering on Source Serif Pro as its sole typeface to evoke the authority of printed academic texts while serving a thoroughly modern web application. The interface balances generous whitespace with precise typographic hierarchy, creating reading conditions that support extended engagement with code and prose alike. A warm white canvas dominates, punctuated by carefully controlled blue accents for interactive elements and a nuanced syntax-highlighting palette that renders Datalog and similar languages with clarity. The overall impression is of a clean, trustworthy workspace where content—whether explanatory prose, data relations, or code—remains the undisputed focus. Every surface decision reinforces readability: muted borders, soft neutral backgrounds for code blocks, and a complete absence of decorative noise. The system succeeds by knowing what to omit as much as what to include.

## Colors

| token | value | use |
|---|---|---|
| ink | `#000000` | Primary text, headings, body copy |
| ink-soft | `#111827` | Slightly softened dark for extended reading contexts |
| ink-muted | `#374151` | Secondary button text, less prominent labels |
| link | `#2563EB` | Interactive hyperlinks, emphasized references |
| canvas | `#FFFFFF` | Page background, primary button fill |
| surface | `#F9FAFB` | Subtle alternate backgrounds |
| surface-warm | `#FAFAFA` | Code block backgrounds, slightly warmer neutral |
| border | `#E5E7EB` | Structural dividers, standard borders |
| border-subtle | `#E4E4E7` | Primary button borders, hairline separators |
| code-keyword | `#0000CC` | Syntax: keywords, control flow |
| code-string | `#116644` | Syntax: string literals |
| code-number | `#994400` | Syntax: numeric values |
| code-comment | `#6B7280` | Syntax: comments, muted annotations |
| code-type | `#3300AA` | Syntax: type names, constructors |
| code-property | `#0000FF` | Syntax: property access, attributes |
| button-text | `#374151` | Primary pill button text |
| button-text-muted | `#4B5563` | Secondary button text |

The color system operates in a disciplined light mode throughout. The near-black ink provides maximum contrast against the warm white canvas, ensuring accessibility and crisp rendering across display densities. Blue enters only through the link token and syntax highlighting, creating a coherent accent family that feels intentional rather than decorative. The syntax palette draws from classical editor conventions—deep blues for keywords, forest green for strings, rust orange for numbers—grounding the technical content in familiar reading patterns. No dark mode is present in the visible interface; the system assumes a consistently bright environment. Photographic content, such as the scenic landscape hero image, introduces natural warmth that the neutral palette accommodates without competition.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Source Serif Pro | 2.25rem | 600 | 1.11 | normal | Page titles, section headings |
| body | Source Serif Pro | 1.02rem | 400 | 1.375 | normal | Paragraphs, lists, navigation |
| body-strong | Source Serif Pro | 1.02rem | 700 | 1.375 | normal | Emphasized inline text |
| label | Source Serif Pro | 1.125rem | 500 | 1.56 | normal | Button labels, UI controls |
| navigation | Source Serif Pro | 1.02rem | 400 | 1.375 | normal | Header links, utility text |
| code | Source Serif Pro | 1.02rem | 400 | 1.375 | normal | Monospace-styled code blocks |

Source Serif Pro and Source Serif Pro-Italic, designed by Frank Grießhammer and published by Adobe Systems Incorporated, serve as the type families. The design leverages both Regular (400) and Semibold (600) weights, with Bold (700) reserved for inline emphasis within body text. The italic variant is available in the font stack for semantic emphasis, though the visible interface primarily employs roman forms. The hero display at 36px establishes clear section boundaries with tight leading that reads as confident rather than cramped. Body text at approximately 16.32px sits comfortably within the traditional book-printing range, with a line height of roughly 22.44px providing adequate breathing room without excessive looseness. The label token at 18px with medium weight creates sufficient distinction for interactive controls without departing from the family's scholarly character. Verify licensing for these families before production use.

## Layout

The layout follows a centered single-column reading model with a narrow content well that prioritizes line-length comfort over expansive display. The maximum content width appears constrained to approximately 48rem, creating a measure that supports sustained reading of both prose and code. Horizontal padding of 12px on mobile contexts expands to comfortable margins, while the main content area receives vertical breathing room through a distinctive 32px top padding and generous 96px bottom padding that signals section completion.

The header occupies a fixed or sticky position at the viewport top, containing the Percival wordmark with crown icon on the left and utility navigation—Share, About—on the right. A subtle bottom border separates this chrome from the scrolling content without introducing visual weight. Below the header, content flows in a strict vertical sequence: hero heading, introductory paragraph with inline links, supporting imagery, instructional lists, and progressively nested code demonstrations.

Code blocks receive special layout treatment: they appear as self-contained panels with left-aligned content, internal padding, and optional left gutters that may accommodate line numbers or interaction controls. The indentation structure visible in Datalog examples suggests a monospaced rendering context where alignment carries semantic meaning. Lists use standard disc bullets with comfortable left indentation, maintaining the reading rhythm established by paragraph spacing.

Spacing tokens derive from a 2px base unit, producing a scale that favors even multiples: 8px for compact internal padding, 12px for standard gutters, 16px for button margins, 32px for section tops, and 96px for section bottoms. This creates a pronounced asymmetry in vertical rhythm—sections begin modestly but conclude with ample clearance, preventing visual stacking and allowing each topic to resolve before the next begins.

## Visual language

The visual language marries editorial restraint with technical precision. The crown icon accompanying the Percival wordmark introduces a singular decorative element that humanizes the otherwise austere typographic identity. This heraldic motif, rendered in a warm yellow-gold, provides the only chromatic warmth beyond the neutral and blue system, functioning as a brand anchor rather than a recurring theme.

Imagery appears sparingly and at full content width when present. The visible landscape photograph demonstrates a treatment where photography sits flush with text margins, unbordered and uncaptioned, allowing the image to breathe as a content element rather than a framed artifact. This suggests a documentary approach to visuals—present when illustrative, absent when unnecessary.

Syntax highlighting constitutes a significant portion of the visible visual language, effectively creating a secondary color system that operates within code contexts. The palette avoids neon or high-saturation choices in favor of muted academic tones: deep navy, forest green, burnt sienna, and slate gray. These colors maintain sufficient contrast against the warm white code background without the aggressive brightness of typical developer tools.

Interactive states remain subtle. Buttons employ minimal surface change, relying on border and text color shifts rather than dramatic background inversions. The pill-shaped primary button with its thin border suggests a physical token or badge, while the slightly more conventional rounded rectangle of secondary buttons establishes a gentle hierarchy. No shadows, gradients, or dimensional effects appear in the visible interface; the entire system operates on flat planes differentiated by color, spacing, and typographic weight alone.

## Components

### Header

- **Anatomy**: Crown icon, wordmark text, utility navigation links with icons
- **Surface**: White background with 1px bottom border in border token
- **Typography**: Navigation token for links, label weight for active items
- **Spacing**: 12px horizontal padding, compact vertical padding
- **Composition**: Flex row with space-between alignment, icon-text pairs in navigation

### Hero section

- **Anatomy**: Display heading, introductory paragraph, optional full-width image
- **Typography**: Hero-display token for title, body token for description
- **Spacing**: 32px top padding, 16px heading margin, 12px paragraph margins
- **Surface**: Transparent, inheriting canvas background
- **Hierarchy**: Title dominates, followed by prose, then image as illustrative relief

### Inline link

- **Typography**: Body token with link color
- **Surface**: No background, underline text decoration
- **States**: Visible color distinguishes interactive text from surrounding prose

### Code block

- **Anatomy**: Contained panel with optional left gutter, monospaced content
- **Surface**: Warm white background, 1px border, 2px border radius
- **Typography**: Code token, with syntax-specific color overrides
- **Spacing**: Compact vertical padding, standard horizontal padding
- **Composition**: Left-aligned, preserving indentation significance

### Syntax tokens

- **Keyword**: code-keyword color for reserved words
- **String**: code-string color for literal values
- **Number**: code-number color for numeric values
- **Comment**: code-comment color for annotations
- **Type**: code-type color for type constructors
- **Property**: code-property color for attribute access

### Primary button

- **Anatomy**: Text label within pill-shaped container
- **Surface**: White fill, subtle border, no shadow
- **Typography**: Label token in muted ink
- **Shape**: Full pill radius (9999px)
- **Spacing**: Tight vertical padding, compact horizontal padding

### Secondary button

- **Anatomy**: Text label with optional icon
- **Surface**: White fill, standard border
- **Typography**: Label token in muted ink
- **Shape**: 6px border radius
- **Spacing**: Slightly more generous padding than primary

### List

- **Anatomy**: Bulleted items with standard disc markers
- **Typography**: Body token
- **Spacing**: 12px paragraph-equivalent margins, 28px left indentation for nesting

## Responsive behavior

The visible interface suggests a single-column layout optimized for reading comfort at moderate viewport widths. The narrow content well and generous horizontal margins imply that the design does not aggressively stretch to fill wide displays; instead, it maintains editorial line lengths that support comprehension. At narrower viewports, the 12px horizontal padding provides minimal but adequate breathing room, while the 10px and 8px padding variants visible in spacing data suggest incremental adjustments for intermediate breakpoints.

The header navigation appears to remain horizontal rather than collapsing to a menu, indicating either a narrow link count that survives compression or a breakpoint strategy that preserves utility access. Code blocks likely scroll horizontally when content exceeds viewport width, as the indentation-sensitive nature of Datalog would preclude aggressive reflowing.

Images maintain full content width across contexts, scaling proportionally rather than adopting complex art-directed crops. The syntax highlighting palette should remain consistent across densities, as its contrast ratios are designed for standard displays and should translate directly to high-density screens without adjustment.

Implementation should consider: maintaining the 48rem maximum content width as a hard constraint; allowing code blocks to overflow with horizontal scroll; preserving the asymmetric section padding (modest top, generous bottom) at all sizes; and ensuring the crown icon remains legible at reduced scales.

## Practical implementation guidance

### Preserve
- The exclusive use of Source Serif Pro across all text functions, including code rendering
- The warm white canvas and near-black ink pairing that creates the system's scholarly tone
- The restrained blue accent family limited to links and syntax highlighting
- The generous asymmetric section spacing with pronounced bottom clearance
- The flat, shadowless surface treatment throughout
- The pill-shaped primary button as a distinctive interactive signature

### Avoid
- Introducing additional typefaces that would fracture the unified scholarly voice
- Expanding the blue accent beyond its current disciplined role
- Adding shadows, gradients, or dimensional effects that contradict the flat plane aesthetic
- Stretching content beyond the comfortable reading measure
- Using half-step or arbitrary spacing values outside the 2px base unit system
- Rendering syntax highlighting in high-saturation or neon tones

### Recommended build order
1. Establish the typographic foundation with Source Serif Pro at all specified weights
2. Implement the color system with ink, canvas, and link as primary tokens
3. Build the single-column layout with constrained maximum width and asymmetric section spacing
4. Create the header with crown icon, wordmark, and utility navigation
5. Develop code block containers with warm white surfaces and syntax token colors
6. Implement button variants with distinct radius strategies
7. Refine responsive behavior preserving reading measure and code overflow handling

### Accessibility
- The near-black on warm white pairing exceeds WCAG AA contrast requirements for body text
- Link color should be verified against canvas for minimum 4.5:1 ratio; the visible blue appears sufficiently saturated
- Code block borders provide structural boundaries for users navigating by focus
- Button shapes should maintain minimum 44px touch targets when implemented for interaction
- Syntax highlighting should not be the sole carrier of semantic meaning; structural markup must reinforce color distinctions

## Scope note

This guide covers the visible landing and documentation page surfaces of Percival, including the header, hero content, instructional prose, code blocks with syntax highlighting, and button controls. Mobile-specific layouts, dark mode, loading states, error handling, animation, and interactive code execution feedback are not represented in the supplied material. Measurements reflect the exact values from the interface.
