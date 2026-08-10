# How grokipedia.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/grokipedia.com-design)

Last updated: 2026-08-10

## Captured pages

[![Search results page with dark theme, rounded search bar, and article list with muted descriptions](https://pin.fontofweb.com/9678?format=jpg)](https://design.withfudge.com/share/pin-9678)

[Search results page with dark theme, rounded search bar, and article list with muted descriptions](https://design.withfudge.com/share/pin-9678)

[![Homepage with centered Grokipedia logo, search input, trending topics, and recent history panel](https://pin.fontofweb.com/9677?format=jpg)](https://design.withfudge.com/share/pin-9677)

[Homepage with centered Grokipedia logo, search input, trending topics, and recent history panel](https://design.withfudge.com/share/pin-9677)

[![Article body showing inline code tokens with orange background and citation links in muted blue](https://pin.fontofweb.com/9649?format=jpg)](https://design.withfudge.com/share/pin-9649)

[Article body showing inline code tokens with orange background and citation links in muted blue](https://design.withfudge.com/share/pin-9649)

[![Full article layout with left sidebar navigation, Georgia serif headings, and structured content sections](https://pin.fontofweb.com/9343?format=jpg)](https://design.withfudge.com/share/pin-9343)

[Full article layout with left sidebar navigation, Georgia serif headings, and structured content sections](https://design.withfudge.com/share/pin-9343)

## Overview

Grokipedia presents a dark-mode encyclopedia experience built around readability and information density. The interface uses a near-black canvas with warm off-white text, creating a high-contrast environment that reduces eye strain during extended reading sessions. The visual system pairs a clean system sans-serif for body text and navigation with Georgia serif for display headings, establishing a clear typographic hierarchy that echoes traditional reference works while maintaining contemporary digital polish.

The design organizes content into three primary surfaces: a persistent top header with global search, a collapsible left sidebar for article navigation on desktop, and a spacious main content area. Search functionality sits at the center of the experience, with a prominent rounded input that expands into a full results panel. Article pages unfold with generous vertical rhythm, using serif headings to mark section boundaries and inline code tokens to highlight technical terms. The overall impression is of a focused, distraction-free reading environment where typography and spacing do the heavy lifting of guiding attention.

## Colors

The palette is intentionally restrained, operating almost entirely in grayscale with two functional accents.

| token | value | use |
|---|---|---|
| canvas | #141414 | Page background, deepest surface |
| surface | #1F1F1F | Search input background, card interiors, elevated panels |
| surface-elevated | #242424 | Hover states, active search results, dropdown menus |
| ink | #FCFCFC | Primary text, headings, borders, icons |
| muted-ink | #9E9E9E | Secondary descriptions, placeholder text, disabled elements |
| dim-ink | #858585 | Tertiary metadata, citation numbers, subtle dividers |
| accent-blue | #3B82F6 | Active search focus ring, interactive highlights |
| accent-blue-muted | #BFDBFE | Link text in article bodies, visited state hints |
| accent-orange | #FF6E14 | Inline code token backgrounds, syntax highlighting |
| border | #FCFCFC | Hairline borders on inputs, buttons, dividers |

The dark canvas dominates every page, with surface layers stepping up in lightness for interactive elements. The near-white ink provides maximum contrast for reading comfort. Blue serves as the primary interactive accent, appearing in focus states and link text. Orange is reserved for code tokens, creating a warm highlight that distinguishes technical terms from prose without breaking the dark-mode cohesion. No light mode is present in the interface; the system commits fully to its dark identity.

## Typography

Grokipedia uses Georgia for display headings and a system sans-serif stack for body text and UI elements. The design facts identify three system-related family labels: Applesystem, System-Systemui, and System-Uimonospace. In practice, the rendered interface applies System-Systemui as the primary sans-serif for body, navigation, and headings, while System-Uimonospace serves code contexts. Applesystem appears in the sources at 14px but is not visibly distinguished from the broader system stack in the captured interface. Georgia carries no listed designer or vendor attribution. IBM Plex Mono and Universal Sans-400 also appear in the font sources but are not visibly applied in the rendered interface.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Georgia | 2.125rem | 600 | 1.5 | -0.0625em | Article titles, page H1 |
| section-display | Georgia | 1.714rem | 500 | 1.5 | 0.01em | Section H2 headings |
| subsection-display | Georgia | 1.429rem | 500 | 1.5 | 0.01em | Subsection H3 headings |
| body | System | 1rem | 400 | 1.5 | normal | Navigation, UI labels, forms |
| body-reading | System | 1rem | 400 | 1.85 | 0.01em | Article paragraphs, long-form content |
| label | System | 0.875rem | 400 | 1.429 | normal | Descriptions, metadata, captions |
| label-medium | System | 0.875rem | 500 | 1.429 | normal | Emphasized labels, button text |
| caption | System | 0.75rem | 400 | 1.333 | normal | Small timestamps, badges |
| code | System | 0.875rem | 400 | 1.429 | 0.01em | Inline code tokens, monospace contexts |

Georgia's weight 600 for H1 and weight 500 for H2 and H3 create a stepped hierarchy without size alone carrying all the burden. The negative letter spacing on hero-display tightens the article title for impact, while body-reading's expanded line height and slight positive tracking optimize paragraph readability. The system stack renders at 16px base with 14px for labels and 12px for captions, maintaining clear differentiation without excessive scale jumps.

Verify licensing for these families before production use.

## Layout

The page structure follows a classic reference-site pattern with modern proportions. The header spans the full viewport width with internal horizontal padding of 1.5rem and a centered content constraint. On article pages, the main content area uses a two-column asymmetrical layout: a narrow left sidebar for section navigation and a wider right column for the article body.

The header contains the Grokipedia wordmark left-aligned, a global search input centered or right-of-center, and utility actions (settings, suggest article, user avatar) at the far right. Header elements sit within a flex container with 1rem gaps between items.

Article pages position the sidebar navigation with 2rem top padding and 8rem bottom padding, creating generous vertical breathing room. The main content area carries 2rem top padding and 8rem bottom padding as well, with 2rem horizontal padding on the outer container and 1.5rem internal padding for text blocks. This creates a comfortable measure for reading while keeping the layout anchored.

The search page uses a centered narrow column approximately 36rem wide, with the search input prominently placed and results stacking below with 1rem vertical spacing between entries. The homepage centers its content vertically with approximately 15rem of top padding, pushing the search interface into the optical center of the viewport.

## Visual language

The interface communicates through restraint and precision. Rounded corners appear consistently: 9999px for pills and circular buttons, 1.5rem for the search input, 0.75rem for panels and cards, and 0.5rem for smaller surface elements. This creates a family of related shapes without uniform sameness.

Shadows are minimal and functional. The search input carries a subtle focus ring using accent-blue at partial opacity. Article content uses no shadows, relying on spacing and typography to create hierarchy. One visible shadow pattern appears on elevated elements: a soft diffuse shadow with 10px vertical offset and 15px blur, paired with a tighter 4px/6px secondary layer for depth.

Inline code tokens use a distinctive visual treatment: accent-orange background at full opacity behind dark text, with 0.25rem border radius and 0.5rem horizontal padding. These tokens sit within the reading flow without disrupting line height, creating a highlight effect that draws the eye to technical terms.

Borders are hairline-thin at 1px, using ink color at full or partial opacity. Horizontal rules below H2 headings use this treatment to separate sections cleanly. The search input border transitions from transparent to ink on focus, providing state feedback without color overload.

## Components

### Global header

- **Anatomy**: Wordmark lockup ("Grokipedia" in Georgia with "v0.2" version label), search input, settings icon, "Suggest Article" text button, user avatar circle
- **Surface**: Transparent background over canvas, ink text and icons
- **Typography**: Wordmark uses Georgia at body size with version label in muted-ink; navigation actions use label-medium
- **Shape**: Full-width bar, height determined by content plus 1.5rem horizontal padding
- **Spacing**: 1rem gap between utility actions, 0.5rem gap within wordmark lockup
- **Composition**: Flex row, space-between alignment, items vertically centered

### Search input

- **Anatomy**: Magnifying glass icon, placeholder text, submit button with up-arrow icon
- **Surface**: surface background, 1px ink border, transitioning to accent-blue focus ring
- **Typography**: label size for placeholder and input text
- **Shape**: 1.5rem border radius (pill-ends), full-width within its container
- **Spacing**: 2.5rem left padding for icon, 3.5rem right padding for submit button, vertical padding 0
- **States**: Default shows muted-ink placeholder; focused state adds accent-blue shadow ring

### Search result item

- **Anatomy**: Title link, description paragraph, right-pointing chevron
- **Surface**: Transparent, full-width row
- **Typography**: Title in body weight 500, description in label using muted-ink
- **Spacing**: 1rem vertical margin between items, 0.5rem internal gap between title and description
- **Composition**: Title and description stacked vertically, chevron right-aligned on the title row

### Article sidebar navigation

- **Anatomy**: Section list with nested structure, active state indicator
- **Surface**: Transparent over canvas
- **Typography**: label size, weight 400; nested items indented with 0.75rem left padding
- **Spacing**: 2rem top padding, 8rem bottom padding, 0.5rem vertical gap between items
- **Composition**: Stacked vertical list, left-aligned, width approximately 12rem

### Article title (H1)

- **Anatomy**: Heading text with optional action icons (audio, link, refresh) to the right
- **Surface**: Transparent
- **Typography**: hero-display token
- **Spacing**: 1rem bottom margin, clearing into article body

### Section heading (H2)

- **Anatomy**: Heading text with optional anchor link icon
- **Surface**: Transparent with 1px bottom border in ink
- **Typography**: section-display token
- **Spacing**: 1.25rem top margin, 0.5rem bottom padding, 0.5rem bottom margin
- **Shape**: Full-width, border-radius 0

### Subsection heading (H3)

- **Anatomy**: Heading text only
- **Surface**: Transparent
- **Typography**: subsection-display token
- **Spacing**: 1.25rem top margin, 0.5rem bottom margin

### Inline code token

- **Anatomy**: Monospace text span
- **Surface**: accent-orange background, no border
- **Typography**: code token
- **Shape**: 0.25rem border radius
- **Spacing**: 0.5rem horizontal padding, 0 vertical padding

### Text button

- **Anatomy**: Label text with optional icon
- **Surface**: Transparent or surface background, optional 1px ink border
- **Typography**: label-medium
- **Shape**: 9999px for pill style, 0.5rem for rectangular
- **Spacing**: 0.375rem vertical padding, 1rem horizontal padding for pill; 0.5rem 0.625rem for compact

### Icon button

- **Anatomy**: Icon only, circular container
- **Surface**: Transparent or surface background on hover
- **Shape**: 9999px circular
- **Spacing**: 0.5rem padding

## Responsive behavior

The layout assumes a desktop viewport for its full expression. The two-column article layout with left sidebar should collapse to a single column on narrower viewports, with the sidebar either hiding behind a toggle or moving to a top-of-page dropdown. The search interface remains centered across widths, with its container padding reducing from 1.5rem to 1rem on smaller screens.

Typography scales down modestly: the hero-display may drop to section-display size on viewports below 768px, and section-display to subsection-display. Body text maintains its 1rem base size for readability. The homepage vertical centering should reduce from 15rem to 8rem top padding to keep the search interface accessible without excessive scrolling.

Touch targets for buttons and links should maintain a minimum 44px tap area, with icon buttons expanding their padding or hit region accordingly.

## Practical implementation guidance

### Preserve
- The dark canvas as the default and only mode; do not introduce a light theme without full palette rederivation
- Georgia serif for all display headings; the contrast between serif titles and sans-serif body is central to the visual identity
- The inline code token styling with accent-orange background; this is a distinctive signature element
- Generous vertical padding in article containers (8rem bottom) for scroll breathing room
- The search input's prominent placement and rounded pill shape

### Avoid
- Adding background colors to article body text areas; the transparent-over-canvas treatment maintains reading focus
- Using accent-orange for non-code purposes; reserve it for syntax and technical terms
- Excessive border radius on large panels; keep cards at 0.75rem and below
- Shadows on static content; use them sparingly and only for elevated interactive elements

### Recommended build order
1. Establish the dark canvas and surface color tokens with the system font stack at 16px base
2. Implement the global header with wordmark, search input, and utility actions
3. Build the search page layout with centered column and result item components
4. Add Georgia serif headings with proper weight and size stepping
5. Implement article page two-column layout with sidebar navigation
6. Add inline code tokens with accent-orange background
7. Polish focus states, hover transitions, and the accent-blue focus ring

### Accessibility
- Maintain the 4.5:1 minimum contrast ratio between ink (#FCFCFC) and canvas (#141414); the current pairing exceeds 15:1
- Ensure focus indicators are visible against all surfaces; the accent-blue focus ring provides this
- Add `aria-label` descriptions to icon-only buttons in the header
- Consider adding a skip-to-content link for keyboard users navigating past the sidebar
- The high contrast mode should preserve the ink/canvas relationship without relying on blue or orange accents for essential information

## Scope note

This guide covers the article reading experience, search interface, and homepage as visible on desktop viewports. Mobile breakpoints, animation behavior, loading states, and error surfaces are not represented in the source material. The IBM Plex Mono and Universal Sans-400 families appear in sources but are not visibly applied in the captured interface; their intended roles are not covered here. Measurements are exact where retained and practical adaptation targets where inferred from visual proportion.
