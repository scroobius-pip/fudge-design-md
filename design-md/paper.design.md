# How paper.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/paper.design-design)

Last updated: 2026-08-10

## Captured pages

[![Documentation page with left sidebar navigation, monospace section labels, and a dark technical diagram showing MCP server architecture with connected app icons.](https://pin.fontofweb.com/7126?format=jpg)](https://design.withfudge.com/share/pin-7126)

[Documentation page with left sidebar navigation, monospace section labels, and a dark technical diagram showing MCP server architecture with connected app icons.](https://design.withfudge.com/share/pin-7126)

[![Homepage section featuring Paper Roadmap heading with abstract geometric pixel art, followed by a two-column layout with filtered photography and build log announcements.](https://pin.fontofweb.com/7125?format=jpg)](https://design.withfudge.com/share/pin-7125)

[Homepage section featuring Paper Roadmap heading with abstract geometric pixel art, followed by a two-column layout with filtered photography and build log announcements.](https://design.withfudge.com/share/pin-7125)

[![Hero section with centered large display type reading the full-circle anti-slop workflow, a subtle curved line graphic, and a light download button on pure black.](https://pin.fontofweb.com/7124?format=jpg)](https://design.withfudge.com/share/pin-7124)

[Hero section with centered large display type reading the full-circle anti-slop workflow, a subtle curved line graphic, and a light download button on pure black.](https://design.withfudge.com/share/pin-7124)

[![Feature section showing connected to real content with a Paper Desktop application screenshot displaying a layered playlist interface with component tree navigation.](https://pin.fontofweb.com/7123?format=jpg)](https://design.withfudge.com/share/pin-7123)

[Feature section showing connected to real content with a Paper Desktop application screenshot displaying a layered playlist interface with component tree navigation.](https://design.withfudge.com/share/pin-7123)

## Overview

Paper's visual system is built for a design tool that bridges creative work and engineering. The interface commits fully to darkness: a pure black canvas sets the stage for warm off-white typography that feels more like aged paper than stark digital white. This creates a distinctive mood—technical but not cold, precise but not sterile. The system pairs a thin, elegant sans-serif display face with utilitarian monospace labels, establishing a clear hierarchy between expressive headlines and functional metadata. Pixel-art accents and abstract geometric imagery reinforce the brand's craft-oriented, hands-on philosophy. Every element serves the narrative of a tool built for designers who care about the underlying structure of their work, from canvas to code and back.

## Colors

The palette is intentionally narrow, deriving its character from temperature and contrast rather than breadth. The near-black canvas absorbs light, while the warm off-white ink prevents the harshness of pure white on pure black. Muted grays handle secondary information and borders without competing for attention. A reserved set of syntax colors appears in code contexts, drawn from a familiar dark-editor vocabulary.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, deepest layer |
| surface | #080808 | Slightly elevated panels, subtle differentiation |
| surface-elevated | #272727 | Active UI chrome, selected states, code backgrounds |
| ink | #F0EFE4 | Primary text, headings, interactive labels |
| ink-muted | #909090 | Secondary descriptions, captions, disabled states |
| ink-dim | #555555 | Tertiary metadata, timestamps, subtle borders |
| border | #333333 | Structural dividers, card outlines, section separators |
| border-subtle | #2A2A2A | Hairline rules, inset panel edges |
| action | #F0EFE4 | Primary button fill, emphasized interactive surfaces |
| action-inverse | #080808 | Text on action surfaces |
| code-green | #4ADE80 | Success states, string literals in code |
| code-teal | #4EC9B0 | Types, interfaces in code |
| code-blue | #569CD6 | Keywords, control flow in code |
| code-yellow | #DCDCAA | Functions, methods in code |
| code-orange | #CE9178 | Strings, attributes in code |
| code-cyan | #9CDCFE | Variables, parameters in code |
| code-gray | #DDDDDD | Default code text, comments |

The warm ink against cold canvas creates the system's signature tension. Code colors remain subordinate, appearing only within technical contexts like documentation or embedded snippets. No gradients or shadows are used; depth comes from surface value shifts alone.

## Typography

Three families divide the typographic labor: Matter handles all display and body text with an extremely thin weight that feels drawn rather than rendered; Inter serves as a secondary body face for longer reading contexts; Paper Mono manages labels, tags, and technical annotations with a compact, square-rigged character. System Monospace appears only for inline code and preformatted blocks.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Matter | 4rem | 360 | 1 | -0.02em | Homepage hero headlines |
| section-display | Matter | 3.5rem | 360 | 1 | -0.02em | Section-opening statements |
| body | Matter | 1.125rem | 400 | 1.556 | 0.01em | Default paragraphs, navigation |
| body-large | Inter | 1.125rem | 400 | 1.556 | -0.015em | Extended reading, documentation |
| body-small | Inter | 0.875rem | 400 | 1.714 | -0.015em | Dense text, captions |
| section-heading | Matter | 1.125rem | 550 | 1.778 | 0.01em | Subsection titles |
| label | Paper Mono | 0.75rem | 400 | 1.333 | 0.015em | Category tags, metadata |
| label-small | Paper Mono | 0.6875rem | 400 | 2 | 0.016em | Inline badges, status pills |
| navigation | Matter | 1.125rem | 400 | 1.556 | 0.01em | Top-bar links |
| code | System-Monospace | 0.75rem | 550 | 2 | 0.1em | Preformatted blocks, syntax |

Matter's weight 360 is the system's visual signature—lighter than typical thin weights, it creates an almost engraved quality at large sizes. Paper Mono's tight proportions and minimal tracking keep labels from feeling decorative; they read as functional equipment. Verify licensing for these families before production use. Matter is designed by Martin Vácha and available from Displaay. Paper Mono is designed by Guido Ferreyra and Javier Quintana Godoy.

## Layout

The page architecture favors centered single-column compositions for persuasive content and split asymmetric layouts for feature exposition. A consistent horizontal margin system keeps content from touching viewport edges while allowing full-bleed dark canvas to dominate the visual field.

The top navigation spans the full width with generous horizontal margins—12rem on each side at desktop scale. Navigation links are evenly distributed between a left-aligned logo mark and right-aligned utility actions. The main content area typically centers within a maximum width of 60rem, though hero sections occasionally break this constraint for dramatic scale.

Section spacing follows a rhythmic pattern: 3.75rem for standard content blocks, expanding to 5.625rem for major section transitions. Internal padding within cards and panels sits at 3.75rem, creating breathable containers without excessive separation from the dark ground. The documentation layout introduces a left sidebar occupying roughly one-quarter of the content width, with a clear vertical hierarchy of section labels and nested page links.

Grid lines appear as subtle visual texture in some sections—faint rules that suggest drafting paper or blueprint grids without imposing a rigid column structure. These are decorative rather than structural, reinforcing the tool's design-craft positioning.

## Visual language

Imagery and graphics follow a consistent logic: photographic content receives heavy processing—halftone dithering, color separation, and pixelation—that transforms natural imagery into something closer to print media or early digital graphics. This treatment unifies diverse subject matter under the brand's technical-aesthetic umbrella.

Abstract geometric elements appear as standalone accents: interlocking rectangles in muted olive and periwinkle, pixelated checkerboard patterns, and sparse grid lines. These never compete with content; they occupy negative space as visual punctuation. The homepage hero features a subtle curved line that arcs behind the centered headline, suggesting completeness or cyclical process without literal illustration.

The application screenshot in the feature section demonstrates the tool's actual interface: dark chrome with layered panels, a component tree on the left, and a rendered preview on the right. This honest presentation—showing the real product rather than an idealized mockup—extends the system's straightforward, engineering-credible tone.

Color in imagery tends toward warm naturals: golden flowers, amber foliage, earth tones. These connect the digital tool to physical craft traditions and prevent the dark interface from feeling purely technological.

## Components

**Navigation bar**

Anatomy: Logo mark left, primary links center-left, utility actions right. The Paper wordmark uses a small geometric icon paired with the name in Matter at body size.

Surface and text color: Transparent background over canvas, ink color for all text.

Typography: `{typography.navigation}` for all links.

Spacing: Full-width bar with horizontal margins of 12rem.

**Primary button**

Anatomy: Text label with optional leading icon, contained within a rounded rectangle.

Surface and text color: Action fill with action-inverse text.

Typography: `{typography.body}`.

Shape: 0.25rem corner radius.

Spacing: 0.375rem vertical padding, 0.875rem horizontal padding.

Variants: A secondary variant inverts the scheme—canvas background with ink text and a subtle border.

**Feature card**

Anatomy: Full-width container with large display heading, supporting paragraph, and optional media or screenshot.

Surface and text color: Canvas background, ink heading, ink-muted body text.

Typography: `{typography.section-display}` for headings, `{typography.body}` for descriptions.

Spacing: 3.75rem internal padding, often with 5.625rem section margins.

Composition: Asymmetric two-column layouts alternate image and text placement.

**Documentation sidebar**

Anatomy: Fixed left panel with section labels in uppercase monospace, followed by nested page links.

Surface and text color: Canvas background, ink for active items, ink-muted for inactive.

Typography: `{typography.label}` for section headers, `{typography.body-small}` for page links.

Spacing: 0.75rem vertical spacing between section labels, 0.75rem indentation for nested items.

**Code block**

Anatomy: Preformatted text container with optional language indicator.

Surface and text color: Surface-elevated background, code-gray default text with syntax highlighting.

Typography: `{typography.code}`.

Shape: No border radius, 1px border in border-subtle.

**Status badge**

Anatomy: Compact inline label with optional leading dot indicator.

Surface and text color: Transparent or surface background, ink or contextual color text.

Typography: `{typography.label-small}`.

Shape: Full pill with 9999px radius.

Spacing: 0.25rem vertical, 0.5rem horizontal padding.

## Responsive behavior

The system presents a desktop-first organization. For narrower viewports, the documentation sidebar should collapse into a toggleable drawer or move above the content stream. Hero display type should scale down proportionally—section-display at tablet, with further reduction to body-large for narrow mobile screens. The asymmetric two-column feature layouts should stack vertically, preserving image-text order. Navigation links may compress into a condensed menu or hamburger toggle when horizontal space is constrained. Maintain the generous dark margins even at small sizes; the canvas is the brand's most recognizable element and should never feel crowded.

## Practical implementation guidance

**Preserve**

- The extreme contrast between warm ink and cold canvas; this is the system's emotional core.
- Matter's weight 360 for display type; substituting a standard 300 or 400 weight loses the distinctive etched quality.
- Paper Mono for all functional labels and metadata; this family provides necessary texture against the smooth sans-serif body.
- Generous section spacing; the dark canvas needs room to breathe, and cramped layouts feel oppressive.

**Avoid**

- Pure white text; the warm off-white ink is calibrated specifically for reduced eye strain on black.
- Rounded corners larger than 0.25rem on buttons; the system favors sharp, precise geometry.
- Decorative shadows or gradients; depth comes from surface value alone.
- Saturated colors outside the code palette; the restrained spectrum is intentional.

**Recommended build order**

1. Establish the canvas and ink colors as CSS custom properties.
2. Implement Matter at weight 360 for hero and section display sizes.
3. Add Paper Mono for labels and navigation section headers.
4. Build the navigation bar with correct spacing and link treatments.
5. Create the primary and secondary button components.
6. Implement feature card layouts with asymmetric image-text composition.
7. Add documentation sidebar with nested link hierarchy.
8. Integrate code block styling with syntax color tokens.

**Accessibility**

- The high contrast between ink (#F0EFE4) and canvas (#000000) exceeds WCAG AAA standards for normal text.
- Ensure interactive elements have visible focus indicators; consider a 2px outline in code-blue or a subtle background shift.
- Paper Mono at small sizes should maintain minimum 12px rendering; the 11px variant is reserved for non-critical status indicators.
- When using the dark code palette for syntax highlighting, verify that color combinations maintain 4.5:1 contrast ratios against the surface-elevated background.

## Scope note

This guide covers the homepage, documentation, and pricing surfaces visible in the supplied images. Mobile breakpoints, animation behavior, form validation states, and the full code syntax highlighting specification are not included. Measurements are practical adaptation targets.
