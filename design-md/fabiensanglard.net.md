# How fabiensanglard.net is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/fabiensanglard.net-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage with centered site title, navigation links, and chronological article index in monospace typography on light background](https://pin.fontofweb.com/4776?format=jpg)](https://design.withfudge.com/share/pin-4776)

[Homepage with centered site title, navigation links, and chronological article index in monospace typography on light background](https://design.withfudge.com/share/pin-4776)

[![Technical article with code block, system architecture diagram with colored layers, and blockquote with dotted border](https://pin.fontofweb.com/4775?format=jpg)](https://design.withfudge.com/share/pin-4775)

[Technical article with code block, system architecture diagram with colored layers, and blockquote with dotted border](https://design.withfudge.com/share/pin-4775)

[![References section with numbered citations, underlined hyperlinks, and caret markers in monospace text](https://pin.fontofweb.com/4774?format=jpg)](https://design.withfudge.com/share/pin-4774)

[References section with numbered citations, underlined hyperlinks, and caret markers in monospace text](https://design.withfudge.com/share/pin-4774)

[![Article body with italic blockquotes, dashed borders, and narrative text about Super Nintendo development](https://pin.fontofweb.com/4773?format=jpg)](https://design.withfudge.com/share/pin-4773)

[Article body with italic blockquotes, dashed borders, and narrative text about Super Nintendo development](https://design.withfudge.com/share/pin-4773)

## Overview

This design system describes a personal website with a deliberately austere, terminal-inspired visual language. The site presents long-form technical articles about computer history, game engine internals, and hardware reverse-engineering through a single monospace typeface at a consistent reading size. Every element reinforces a utilitarian, code-editor aesthetic: black text on a warm off-white background, minimal structural decoration, and information density prioritized over visual flourish. The homepage functions as a chronological index of articles, while interior pages unfold into deeply researched narratives punctuated by code samples, system architecture diagrams, and pull quotes from primary sources. The overall impression is of a developer's notebook made public—precise, unadorned, and relentlessly focused on the transfer of technical knowledge.

## Colors

The color palette is intentionally constrained, drawing from the limited palette of early computing environments while adding subtle warmth to prevent clinical coldness. The system relies on value contrast and typographic hierarchy rather than chromatic variety to organize information.

| token | value | use |
|---|---|---|
| ink | `#000000` | Primary text, headings, article titles, navigation links, code |
| canvas | `#f5f5f0` | Page background, blockquote backgrounds, content well |
| surface | `#e8e8e0` | Code block backgrounds, diagram container fills, secondary containers |
| accent | `#c4a4a4` | Diagram highlight layers, decorative emphasis in technical illustrations |
| muted | `#8a8a8a` | Blockquote borders, secondary text, citation markers |

The canvas color carries a subtle warm-gray cast that distinguishes it from pure white without introducing color temperature that competes with content. The surface tone provides just enough separation for code and diagram containers to register as distinct regions without the harshness of a true gray. The accent color appears sparingly, primarily in technical diagrams where layered system architecture needs visual differentiation—its dusty rose quality evokes vintage computer manuals without becoming decorative. No dark mode is present in the visible system; the entire experience operates in a light, high-contrast mode that favors extended reading sessions. Photographic and illustrative content appears in its native color, creating natural moments of chromatic variety against the restrained interface.

## Typography

The entire typographic system is set in a single monospace family, creating a consistent terminal or code-editor voice across all content types. This choice is central to the site's identity: it signals technical authority and creates visual rhythm through the fixed-width letterforms.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| heading | Deja Vu Sans Mono | 1.25rem | 700 | 1.2 | 0em | Page titles, section headers, site name |
| body | Deja Vu Sans Mono | 1rem | 400 | 1.6 | 0em | Article text, descriptions, list items |
| label | Deja Vu Sans Mono | 1rem | 400 | 1.4 | 0em | Dates, metadata, captions |
| navigation | Deja Vu Sans Mono | 1rem | 700 | 1.2 | 0.05em | Primary navigation, category labels |

The heading weight uses bold for structural emphasis, while navigation employs bold weight with slight positive tracking to create all-caps presence without actual uppercase transformation. Body text maintains generous line height for readability across long technical passages. The label size provides hierarchy for secondary information like publication dates in article listings. No italic or oblique styles are used in the visible system; emphasis within body text appears through context and occasional bold weight rather than slanted forms. Blockquotes maintain the same type specifications as body text but gain distinction through container styling rather than typographic variation.

Verify licensing for these families before production use. The Deja Vu Sans Mono family is provided by the Deja Vu Fonts Team.

## Layout

The layout follows a single-column, centered content well with generous but not excessive margins. The homepage presents a clear information hierarchy: centered site identification, horizontal navigation, introductory statement, and chronological article index. Interior article pages maintain this structure while expanding the content area to accommodate long-form text, code blocks, diagrams, and blockquotes.

The content well appears to occupy approximately 80-90% of viewport width on desktop, with a maximum width that prevents line lengths from exceeding comfortable reading measure for monospace text. The homepage article index uses a simple two-part line structure: left-aligned date in label styling, followed by article title as a linked heading. This creates a scannable rhythm down the page.

Vertical spacing between major sections uses consistent increments based on the relative unit. The site title and navigation sit in close proximity, establishing the header as a single visual unit. The article index follows after a clear section break. On article pages, the title appears with minimal top spacing, immediately followed by body content. Code blocks and diagrams interrupt the text flow with full-width containers and internal padding. Blockquotes receive distinctive border treatment to set them apart from narrative text.

No sidebar, no card grid, and no multi-column layout appears in the visible system. The design privileges linear reading and clear information sequence over spatial complexity.

## Visual language

The visual language draws explicitly from early computing interfaces and technical documentation. The monospace typography creates a uniform texture that reads as code even when presenting prose. Visual interest emerges from information density and structural clarity rather than from decorative elements.

Code blocks appear as rectangular containers with subtle background differentiation, using the surface color to create a contained environment for terminal output or source code. The system architecture diagram in the visible content uses layered rectangles with directional arrows, color-coded by system layer—warm tones for DOS environments, cooler tones for Windows environments, with the accent color providing intermediate emphasis. These diagrams employ simple geometric shapes and sans-serif labels within the diagram itself, contrasting with the monospace body text while maintaining technical clarity.

Blockquotes receive a distinctive treatment: a dashed or dotted border on the left side, sometimes with full rectangular border framing, creating a pulled-aside quality for primary source quotations. The italic styling within blockquotes provides the only visible typographic contrast in the entire system, creating a voice shift that signals quoted material.

Hyperlinks appear as underlined text in the body color, maintaining the utilitarian aesthetic of early web documents. No hover states are visible in the still images. The overall impression is of a document that could have been printed in a technical manual, adapted minimally for the screen.

## Components

### Article index
- **Anatomy**: Chronological list with date prefix and linked title
- **Surface**: Transparent, sitting on canvas background
- **Typography**: Date in `{typography.label}`, title in `{typography.body}` with bold weight and underline link treatment
- **Shape**: No container, full-width rows
- **Spacing**: Tight vertical packing with `{spacing.unit}` between entries, `{spacing.section}` between major date groupings
- **Composition**: Date left-aligned, title immediately following with space separation

### Code block
- **Anatomy**: Rectangular container with monospace text, sometimes with command prompt prefix
- **Surface**: `{colors.surface}` background, `{colors.ink}` text
- **Typography**: `{typography.body}`
- **Shape**: Sharp corners, no border
- **Spacing**: Internal padding of `{spacing.content}` on all sides
- **Composition**: Full-width within content well, breaks text flow

### Blockquote
- **Anatomy**: Rectangular container with left border or full border, containing italic text and attribution
- **Surface**: `{colors.canvas}` background or transparent with border
- **Typography**: `{typography.body}` with italic style for quoted text, regular weight for attribution
- **Shape**: Sharp corners, dashed or dotted border in `{colors.muted}`
- **Spacing**: Internal padding of `{spacing.content}`, vertical margin of `{spacing.section}`
- **Composition**: Indented or full-width within content well, attribution right-aligned

### System diagram
- **Anatomy**: Layered rectangular blocks with directional arrows, labeled components
- **Surface**: `{colors.surface}` base, `{colors.accent}` for emphasis layers, additional muted tones for differentiation
- **Typography**: Sans-serif labels within diagram (distinct from body monospace)
- **Shape**: Sharp corners, thin dividing lines
- **Spacing**: Internal padding, arrow connectors between layers
- **Composition**: Centered within content well, often with explanatory text above and below

### Navigation
- **Anatomy**: Horizontal list of text links
- **Surface**: Transparent
- **Typography**: `{typography.navigation}`
- **Shape**: No container
- **Spacing**: Even horizontal distribution with generous gap
- **Composition**: Centered below site title

## Responsive behavior

The visible system shows a desktop-optimized layout with a centered content well. For implementation, the content well should maintain comfortable reading measure across viewport sizes. At narrower widths, the article index date and title may stack vertically rather than remaining inline. Code blocks and diagrams should remain horizontally scrollable if their content exceeds viewport width, preserving the monospace formatting that carries semantic meaning. The navigation may collapse to a vertical stack on very narrow viewports. No breakpoint-specific behavior is visible in the still images; these recommendations follow from the content characteristics.

## Practical implementation guidance

### Preserve
- The single monospace family throughout all text elements; this is the core identity
- The warm off-white canvas background that prevents eye strain during long reading
- The tight information density of the article index; whitespace is present but not generous
- The distinctive blockquote treatment with dashed borders and italic voice
- The full-width code blocks with subtle background differentiation

### Avoid
- Introducing sans-serif or serif fonts for "contrast"; the monospace consistency is intentional
- Adding card containers, shadows, or rounded corners that would break the terminal aesthetic
- Color-coding text by semantic role; the system uses black text almost exclusively
- Generous whitespace patterns from contemporary editorial design; this site values density

### Recommended build order
1. Establish the typography system with Deja Vu Sans Mono at the body size and line height
2. Implement the content well with maximum width and centered alignment
3. Build the article index as the primary homepage component
4. Add code block containers with surface background
5. Implement blockquote styling with border treatment
6. Add navigation and site header
7. Refine spacing scale across all components

### Accessibility
- Maintain the high contrast between ink and canvas colors for readability
- Ensure code blocks remain navigable by keyboard and screen reader; consider `pre` and `code` semantics
- Provide skip links for the long article index on the homepage
- Underline links to maintain discoverability without color reliance
- Test monospace readability at the body size; some users may need slight size increase for fixed-width fonts

## Scope note

This guide covers the homepage article index and interior article page surfaces visible in the supplied images. Footer elements, pagination, search functionality, archive pages, and mobile-specific layouts are not represented. Measurements are practical adaptation targets. No motion, interaction states, or dark mode variants are documented.
