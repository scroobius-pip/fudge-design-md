# How gpui.rs is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/gpui.rs-design)

Last updated: 2026-08-10

## Captured pages

[![Full landing page showing hero section with code block, navigation bar, contributor avatars grid, and two-column layout on black background](https://pin.fontofweb.com/4126?format=jpg)](https://design.withfudge.com/share/pin-4126)

[Full landing page showing hero section with code block, navigation bar, contributor avatars grid, and two-column layout on black background](https://design.withfudge.com/share/pin-4126)

[![Syntax-highlighted Rust code block with dark navy background, colorful tokens, and method chaining for UI construction](https://pin.fontofweb.com/4127?format=jpg)](https://design.withfudge.com/share/pin-4127)

[Syntax-highlighted Rust code block with dark navy background, colorful tokens, and method chaining for UI construction](https://design.withfudge.com/share/pin-4127)

[![Docs and Examples sections with monospace link labels, horizontal hairline dividers, and descriptive text in tabular layout](https://pin.fontofweb.com/4129?format=jpg)](https://design.withfudge.com/share/pin-4129)

[Docs and Examples sections with monospace link labels, horizontal hairline dividers, and descriptive text in tabular layout](https://design.withfudge.com/share/pin-4129)

[![Contributor avatar grid with rounded square images, contribution CTA link, and open-source project description text](https://pin.fontofweb.com/4128?format=jpg)](https://design.withfudge.com/share/pin-4128)

[Contributor avatar grid with rounded square images, contribution CTA link, and open-source project description text](https://design.withfudge.com/share/pin-4128)

## Overview

gpui.rs presents a radically minimal, developer-first identity built on absolute contrast: pure black canvas against crisp white monospace text. The site functions as both a framework landing page and immediate technical demonstration, embedding a fully syntax-highlighted Rust code block directly in the hero. There is no decorative imagery beyond the functional—contributor avatars, code samples, and typographic hierarchy carry the entire visual system. The aesthetic draws from terminal environments and code editors, with Geist Mono providing a single type family for every text role from navigation to body copy to inline code. Color exists almost exclusively in service of code readability, with a dark navy surface for the code block and a restrained palette of semantic syntax colors. The overall impression is one of precision, performance, and engineering credibility: the design refuses ornament in favor of raw information density and immediate technical comprehension.

## Colors

The color system is intentionally austere, built on a near-binary contrast model with carefully controlled accent surfaces.

| token | value | use |
|---|---|---|
| canvas | #000000 | Pure black page background; establishes the terminal-like environment |
| ink | #ffffff | Primary text, headings, links, and all foreground content |
| muted-ink | #a0a0a0 | Secondary descriptions, inactive navigation, and de-emphasized labels |
| surface | #0d1117 | Code block background; dark navy-gray that recedes from the black canvas |
| accent-blue | #58a6ff | Syntax highlighting for types, traits, and method calls in code |
| accent-orange | #d2a8ff | Syntax highlighting for keywords and control flow in code |
| accent-green | #7ee787 | Syntax highlighting for strings and string literals in code |
| border | #30363d | Hairline dividers between list items and code block borders |

The canvas and ink form the dominant relationship: every section rests on unmodulated black with white text. The surface color appears only as an elevated plane for the code block, creating necessary depth without breaking the monochrome discipline. Syntax highlighting introduces the only saturated colors, and these are strictly functional—readers expect semantic color coding in code samples. The muted-ink token serves a crucial hierarchy role, allowing descriptive text to recede while maintaining the monospace rhythm. No light mode is visible; the entire system assumes dark environment as its sole expression.

## Typography

Every text element uses Geist Mono, a monospace family designed by Basementstudio and distributed through Vercel. The single-family approach reinforces the technical, code-native identity. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Geist Mono | 2rem | 400 | 1.2 | -0.02em | Page title "gpui" and major section headings |
| section-display | Geist Mono | 1.25rem | 400 | 1.3 | -0.01em | Subsection headings like "Docs", "Examples", "Contributing to gpui" |
| body | Geist Mono | 1rem | 400 | 1.6 | 0em | Descriptive paragraphs and longer explanatory text |
| label | Geist Mono | 0.875rem | 400 | 1.4 | 0em | Navigation items, link labels, list item names, and CTA text |
| code | Geist Mono | 0.875rem | 400 | 1.6 | 0em | Inline and block code samples |

The type scale is restrained, with only five semantic roles. Hero-display at 2rem anchors the page title with slight negative tracking for tighter wordforms. Section-display at 1.25rem provides clear subsection breaks without competing with the hero. Body at 1rem handles all paragraph content with generous 1.6 line height for readability. Label at 0.875rem serves the dense navigation and list interfaces where compactness matters. Code at 0.875rem matches label size but with the full 1.6 leading to accommodate multi-line syntax blocks. No bold weights appear in the interface; hierarchy is achieved through size, color, and spacing alone. The monospace construction means every character occupies equal width, creating natural alignment in tabular layouts like the Docs and Examples lists.

## Layout

The page employs a two-column asymmetric layout on desktop, with the primary content column occupying roughly two-thirds width and a narrower sidebar containing contributor information and contribution guidance. The main column flows vertically through the hero section, code block, and list sections. The sidebar remains anchored to the right, creating a stable reference point as the reader scrolls.

Horizontal margins are generous, with content inset significantly from viewport edges. The navigation bar spans full width at the top, containing the site mark "gpui" on the left and external links "examples", "github", and "zed" on the right. Below the nav, the hero section stacks vertically: title, tagline, CTA link, then the code block. The code block itself is a contained panel with internal padding, not bleeding to viewport edges.

The Docs and Examples sections use a tabular list structure where each row contains an underlined link name on the left and a descriptive phrase on the right, separated by horizontal hairline dividers. This creates a scanable, directory-like interface. The contributor section in the sidebar presents a dense grid of avatar images in multiple rows, followed by a CTA link and a paragraph block.

Vertical rhythm is established through consistent section spacing. Content blocks separate with clear gaps, while internal list items compress tightly with only hairline borders between them. The code block receives extra vertical margin to emphasize its prominence as the central demonstration. No visible grid system or container max-width constraints are apparent; the layout appears to use percentage-based fluid widths with fixed internal padding.

## Visual language

The visual language communicates through restraint and technical directness. Every element serves an informational purpose; there are no decorative shapes, gradients, or background patterns. The pure black canvas creates an immersive, focused reading environment that recalls terminal emulators and dark IDE themes. White text on black provides maximum contrast for extended reading of technical documentation.

The code block is the visual centerpiece, rendered as a raised dark panel against the black page. Syntax highlighting introduces controlled color variation—blues for types, purples for keywords, greens for strings—creating a focal point that demonstrates the framework's own output. The block's rounded corners and subtle border distinguish it as a contained artifact, a sample pulled from the framework itself.

Contributor avatars introduce the only photographic elements, rendered in grayscale and cropped to rounded squares. Their uniform size and tight grid formation create a texture of human presence without individual prominence. The grayscale treatment maintains the monochrome discipline while acknowledging community contribution.

Links are indicated through underlining rather than color change, preserving the white ink for all interactive text. This creates a flatter hierarchy where underlined items signal actionability without chromatic distraction. The arrow symbol (→) appended to CTA links provides additional affordance through convention rather than styling.

## Components

### Navigation bar

- **Anatomy**: Horizontal bar containing site mark left-aligned, external links right-aligned
- **Surface**: Transparent, resting directly on black canvas
- **Typography**: `{typography.label}` for all items
- **Composition**: Flex row with space-between justification; items evenly spaced in the right cluster
- **States**: Links appear in `{colors.muted-ink}` with underline on hover implied by convention

### Hero section

- **Anatomy**: Title, tagline paragraph, CTA link, and code block stacked vertically
- **Typography**: Title uses `{typography.hero-display}`, tagline uses `{typography.body}`, CTA uses `{typography.label}` with trailing arrow
- **Spacing**: Generous vertical gap between title and tagline, reduced gap before CTA, substantial margin before code block
- **Composition**: Left-aligned text block with code block below, no horizontal centering

### Code block

- **Anatomy**: Contained panel with syntax-highlighted Rust code, method chains, and string literals
- **Surface**: `{colors.surface}` background with `{colors.border}` border
- **Typography**: `{typography.code}` with semantic color tokens for syntax categories
- **Shape**: `{rounded.panel}` border radius
- **Spacing**: Internal padding of approximately 1rem on all sides
- **Composition**: Full width of content column, left-aligned code with natural indentation preserved

### Content list (Docs/Examples)

- **Anatomy**: Section heading followed by rows of linked names and descriptions
- **Surface**: Transparent, resting on black canvas
- **Typography**: Link names use `{typography.label}` with underline, descriptions use `{typography.label}` in `{colors.muted-ink}`
- **Shape**: Full-width horizontal hairline dividers between rows
- **Spacing**: Tight vertical packing with minimal padding per row
- **Composition**: Two-column implicit grid with link names left and descriptions right

### Contributor avatar grid

- **Anatomy**: Section heading, grid of square images, CTA link, descriptive paragraph
- **Surface**: Transparent in sidebar column
- **Shape**: `{rounded.avatar}` on each image
- **Composition**: Dense grid with small gaps, approximately 6-7 avatars per row
- **Spacing**: Compact internal grid gap, standard section spacing before and after

## Responsive behavior

The two-column layout likely collapses to single column on narrower viewports, with the sidebar content moving below the primary column. The code block should maintain its contained panel treatment but may reduce internal padding. The avatar grid can reflow to fewer columns while preserving image size. Navigation items may compress or collapse to a minimal menu at small widths. The tabular list structure in Docs and Examples should remain functional, though descriptions may wrap to second lines. No specific breakpoints are visible in the supplied images; implement fluid transitions at standard viewport widths.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the foundation of every section
- Single-family monospace typography for all text roles
- Syntax highlighting color semantics: blue for types, purple for keywords, green for strings
- Hairline dividers as the sole list separation mechanism
- Underlined links without color variation from body text
- Rounded corners on code blocks and avatars only

### Avoid
- Introducing sans-serif or serif typefaces for any role
- Adding background colors, gradients, or patterns to sections
- Using color alone to indicate link states
- Expanding the color palette beyond syntax-highlighting accents
- Decorative imagery or illustrations beyond functional avatars
- Card-like elevations or shadow treatments outside code blocks

### Recommended build order
1. Establish the black canvas and Geist Mono font loading
2. Implement the navigation bar with transparent background
3. Build the hero section with title, tagline, and CTA
4. Create the code block component with dark surface and syntax highlighting
5. Develop the tabular list pattern for Docs and Examples
6. Construct the sidebar with avatar grid and contribution text
7. Implement responsive collapse for narrow viewports

### Accessibility
- Ensure syntax highlighting colors meet contrast requirements against the dark surface; do not rely on color alone for code semantics
- Maintain the high contrast between white text and black background for all body content
- Provide visible focus indicators for keyboard navigation through links and interactive elements
- Consider adding skip navigation for the dense list content
- Verify that underlined links remain distinguishable for users with color vision differences

## Scope note

This guide covers the gpui.rs landing page including its hero, code demonstration, documentation links, examples directory, and contributor section. Measurements are practical adaptation targets. Mobile layouts, hover states, focus styles, loading behavior, and additional interior pages are not represented in the supplied material. The syntax highlighting color set may extend beyond the three accent tokens identified; implement a complete theme for production code display.
