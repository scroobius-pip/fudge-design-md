# How mint-lang.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/mint-lang.com-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with Mint logo, tagline, multi-column navigation links, and green leaf imagery on dark background](https://pin.fontofweb.com/3827?format=jpg)](https://design.withfudge.com/share/pin-3827)

[Footer section with Mint logo, tagline, multi-column navigation links, and green leaf imagery on dark background](https://design.withfudge.com/share/pin-3827)

[![Hero section with Mint logo, headline, green CTA button, and syntax-highlighted code example on dark background](https://pin.fontofweb.com/3826?format=jpg)](https://design.withfudge.com/share/pin-3826)

[Hero section with Mint logo, headline, green CTA button, and syntax-highlighted code example on dark background](https://design.withfudge.com/share/pin-3826)

## Overview

The Mint programming language website presents a dark, developer-centric visual identity built around a near-black canvas with mint-green accents. The design prioritizes readability for technical audiences while establishing brand recognition through consistent use of leaf-green imagery and a restrained typographic system. The homepage divides attention between persuasive marketing copy on the left and a live syntax-highlighted code example on the right, immediately communicating the product's purpose. Navigation remains understated with text links and minimal iconography, allowing the code and value proposition to dominate the visual hierarchy. The overall impression is of a mature, focused tool—professional without corporate heaviness, approachable without appearing toy-like. The dark theme extends consistently from hero through footer, with subtle variations in surface tone creating depth without breaking the monochromatic atmosphere.

## Colors

The color system rests on a dark foundation with a single vibrant accent and carefully tuned syntax highlighting for code display.

| token | value | use |
|---|---|---|
| canvas | `#1a1a1a` | Primary page background, footer background, navigation bar |
| surface | `#222222` | Elevated panels, code block backgrounds |
| ink | `#e8e8e8` | Primary text, headings, navigation links |
| muted-ink | `#a0a0a0` | Secondary text, footer body copy, captions |
| action | `#4caf7c` | Primary buttons, brand accent, interactive highlights |
| action-hover | `#3d8f65` | Button hover states, darker accent applications |
| code-keyword | `#c792ea` | Syntax highlighting for keywords |
| code-string | `#c3e88d` | Syntax highlighting for strings |
| code-function | `#82aaff` | Syntax highlighting for function names |
| code-tag | `#f07178` | Syntax highlighting for markup tags |

The dark canvas creates low eye strain for developers who may spend extended time on documentation pages. The mint green action color derives directly from the brand name and leaf imagery, appearing most prominently in the primary call-to-action button and the logo mark. Syntax highlighting uses a familiar dark-theme palette with purple keywords, green strings, blue functions, and red-pink tags—colors that remain legible against the dark surface without competing with the brand accent. Text hierarchy relies on luminance contrast rather than color variation, with muted-ink reserved for supporting information that should recede from immediate attention.

## Typography

The typographic system uses two families: Noto Sans for all interface and marketing text, and Fira Code for monospaced code display.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Noto Sans | 3rem | 300 | 1.2 | -0.01em | Homepage headline |
| section-display | Noto Sans | 2rem | 300 | 1.3 | 0 | Section headings |
| body-large | Noto Sans | 1.25rem | 300 | 1.5 | 0 | Hero description, lead paragraphs |
| body | Noto Sans | 1rem | 400 | 1.6 | 0 | General paragraphs, footer descriptions |
| label | Noto Sans | 0.875rem | 400 | 1.4 | 0.02em | Buttons, tags, small labels |
| navigation | Noto Sans | 0.875rem | 400 | 1.4 | 0 | Navigation links, menu items |
| code | Fira Code | 0.875rem | 400 | 1.7 | 0 | Code blocks, inline code |
| legal-copy | Noto Sans | 0.75rem | 400 | 1.5 | 0 | Copyright, legal text |

Noto Sans appears in Light (300) and Regular (400) weights, with Light reserved for display sizes where the thinner stroke creates elegant contrast against the dark background. The hero display at 3rem uses Light weight to avoid visual heaviness at large sizes. Fira Code provides the monospaced foundation for all code presentation, with its programming ligatures supporting the technical character of the site. Line heights remain generous for body text to support readability in longer documentation passages, while code receives extra leading to accommodate syntax highlighting and line-number gutters.

Verify licensing for these families before production use. Noto Sans is designed by the Monotype Design Team and distributed by Monotype Imaging Inc. Fira Code is designed and distributed by Carrois Corporate Edenspiekermann Ag Nikita Prokopov.

## Layout

The page structure follows a centered content model with maximum width constraints and generous vertical breathing room. The navigation bar spans the full viewport width with internal content aligned to the same max-width as the body. Below the navigation, the hero section splits into an asymmetric two-column arrangement: approximately 45% width for marketing copy and call-to-action, 55% for the code example. This split creates visual tension while giving the code prominence as a product demonstration.

The footer expands into a multi-column link grid with five distinct categories—Site, Documentation, Interactive, Source, and Community & Social—each containing four to six links. The Mint logo and tagline occupy the leftmost column, establishing brand presence at the page conclusion. Column gutters use consistent spacing, with category labels receiving slightly stronger weight through color rather than size differentiation.

Vertical rhythm relies on section spacing of 4rem between major content areas, with component-gap of 1.5rem handling relationships between related elements like headline-to-description or button-to-secondary-links. The unit of 0.25rem provides fine-grained control for internal padding, borders, and small adjustments. Content max-width of 75rem prevents line lengths from becoming unwieldy on large displays while maintaining comfortable reading margins.

## Visual language

The visual identity balances organic and technical elements. The mint leaf logo mark introduces natural, soft geometry against the rigid structure of code syntax and grid layouts. Decorative leaf imagery appears at the page edges—partially visible green leaves intrude from the left and right margins in both hero and footer sections, creating depth and brand atmosphere without distracting from content. These leaves use a photographic treatment with natural color variation rather than flat vector shapes.

The code example serves as both functional demonstration and visual texture. Syntax highlighting transforms raw code into a colorful composition that contrasts with the subdued marketing palette. Line numbers in muted-ink run along the left edge, establishing the code block as a distinct reading mode. The code's rightward placement in the hero creates diagonal visual flow from the headline through the button toward the technical proof.

Interface elements remain minimal and flat. Buttons use solid fills without shadows or gradients. Navigation links rely on text alone with small leading icons for wayfinding. The absence of heavy borders or pronounced elevation keeps attention on content and code. Where depth is needed, subtle surface color shifts distinguish panels from canvas.

## Components

### Primary button

- **Anatomy**: Text label with optional trailing icon, contained within a rectangular button shape
- **Surface**: Solid action green background (#4caf7c) with white text
- **Typography**: label token at 0.875rem, Regular weight
- **Shape**: 0.25rem border radius, creating slightly softened corners
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Icon positioned to the right of text with internal gap
- **Variants**: Standard state visible; hover should shift to action-hover (#3d8f65)

### Navigation bar

- **Anatomy**: Horizontal row of text links with small leading icons, logo mark at left edge
- **Surface**: Transparent or canvas-colored background, no visible border
- **Typography**: navigation token at 0.875rem
- **Spacing**: Links distributed with consistent gaps, approximately 1.5rem between items
- **Composition**: Logo and links aligned to baseline; optional utility icons at far right
- **Variants**: Default link color in ink; active or hover states should shift toward action green

### Code block

- **Anatomy**: Monospaced text with line numbers, syntax highlighting, optional container with rounded corners
- **Surface**: Slightly elevated surface color (#222222) against canvas background
- **Typography**: code token at 0.875rem with 1.7 line height
- **Shape**: 0.5rem border radius for contained presentation
- **Spacing**: Internal padding approximately 1.5rem; line numbers in left gutter with right margin
- **Composition**: Line numbers right-aligned in muted-ink; code content left-aligned with syntax color tokens applied to keywords, strings, functions, and tags
- **Variants**: Inline code should use same family without line numbers; contained blocks show full syntax highlighting

### Footer

- **Anatomy**: Multi-column grid with logo and description in first column, categorized link lists in subsequent columns
- **Surface**: Canvas background continuing from page body; no visible top border
- **Typography**: Category labels in ink at navigation size; link items in muted-ink at same size; copyright in legal-copy
- **Spacing**: Generous top padding (section token, 4rem); column gutters at component-gap
- **Composition**: Five-column layout on desktop with logo column wider than link columns; decorative leaf imagery visible at bottom edges
- **Variants**: Link items include small leading icons for visual wayfinding

## Responsive behavior

The two-column hero layout should stack vertically on narrower viewports, with the code example moving below the marketing copy to maintain reading priority. The code block requires horizontal scrolling or font size reduction to prevent overflow on small screens. Navigation should collapse to a horizontal scroll or hamburger menu when horizontal space becomes constrained, preserving access to all links without wrapping.

The footer multi-column grid should reflow to fewer columns on tablet and single column on mobile, with category labels becoming expandable sections if space is limited. The logo and tagline should remain prominent at the top of the footer stack regardless of breakpoint.

Typography scales down proportionally: hero-display should reduce to section-display size on mobile, and body-large should match body size to prevent oversized text. Code blocks should maintain readable size; horizontal scrolling is preferable to font reduction below 0.75rem.

## Practical implementation guidance

### Preserve
- The dark canvas as the dominant background throughout all page sections
- Mint green (#4caf7c) as the singular brand accent, used sparingly for maximum impact
- Fira Code for all code presentation to maintain developer credibility
- The asymmetric hero layout with code prominently displayed
- Decorative leaf imagery as atmospheric elements at page edges
- Syntax highlighting palette for code readability

### Avoid
- Light backgrounds that would destroy the dark-theme identity
- Multiple competing accent colors that dilute the mint brand
- Shadows and gradients that add visual noise against flat surfaces
- Generic sans-serif families for code blocks
- Centered text alignment for marketing copy that reduces scanability

### Recommended build order
1. Establish the dark canvas and surface color foundation
2. Implement Noto Sans with Light and Regular weights
3. Build the navigation bar with logo and link structure
4. Create the hero section with headline, description, and primary button
5. Integrate the code block with Fira Code and syntax highlighting
6. Construct the multi-column footer with categorized links
7. Add decorative leaf imagery as positioned background elements
8. Apply responsive stacking and reflow behaviors

### Accessibility
- Ensure all text meets WCAG AA contrast ratios against the dark canvas; ink (#e8e8e8) on canvas (#1a1a1a) exceeds requirements
- Provide focus indicators for keyboard navigation that use the action color with sufficient offset
- Maintain code block readability by preventing horizontal text scaling below 0.75rem
- Use semantic heading hierarchy with a single h1 in the hero section
- Ensure link text in the footer is descriptive rather than relying on surrounding context alone

## Scope note

This guide covers the Mint homepage including the hero section, navigation, and footer. Interior documentation pages, interactive playground interfaces, and mobile-specific layouts are not represented in the supplied material. Measurements are practical adaptation targets. Motion, loading states, and form components fall outside the current scope.
