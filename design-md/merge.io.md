# How merge.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/merge.io-design)

Last updated: 2026-08-10

## Captured pages

[![Blog article body with team roster, horizontal rule dividers, and a dark Join us button with right arrow icon](https://pin.fontofweb.com/10682?format=jpg)](https://design.withfudge.com/share/pin-10682)

[Blog article body with team roster, horizontal rule dividers, and a dark Join us button with right arrow icon](https://design.withfudge.com/share/pin-10682)

[![Blog hero section with large serif display heading, metadata line, and introductory paragraph on white canvas](https://pin.fontofweb.com/10681?format=jpg)](https://design.withfudge.com/share/pin-10681)

[Blog hero section with large serif display heading, metadata line, and introductory paragraph on white canvas](https://design.withfudge.com/share/pin-10681)

## Overview

Merge Labs presents a stark, editorial visual system built for credibility and long-form reading. The design strips away decorative elements in favor of generous whitespace, a sharp black-and-white palette, and a deliberate typographic pairing: large serif display headings set against clean sans-serif body text. The overall impression is that of a research publication or technical journal—authoritative, uncluttered, and focused on the substance of the content.

The system employs a single-column reading layout with contained line lengths that prioritize readability. Navigation is minimal, appearing only as essential links in the top bar. Content hierarchy is established entirely through scale and weight contrast, with no reliance on color variation or background fills to separate sections. This restraint creates a calm, focused reading environment where the typography itself carries the full burden of visual expression.

## Colors

The palette is strictly monochrome, using only black, white, and a near-white cool gray. This disciplined approach reinforces the scientific, research-oriented character of the brand while ensuring maximum contrast for readability.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headings, buttons, and all interactive foreground elements |
| canvas | #FFFFFF | Page background, button text on dark surfaces, and content areas |
| muted-surface | #F8FAFC | Subtle background variation for contained sections or cards when needed |
| hairline | #E2E8F0 | Horizontal rules, dividers, and the top navigation border |

The interface operates in a light mode exclusively. Black text on white canvas provides the highest possible contrast for extended reading. The hairline color appears only as a 1-pixel solid border beneath the top navigation and as horizontal rules between content sections. No dark mode, gradient fills, or accent colors are present in the visible system. The muted-surface token serves as a reserved option for any future contained components but remains largely unused in the current sparse implementation.

## Typography

The type system pairs two custom families—UntitledSerif for display and editorial moments, and UntitledSans for functional and body text—supplemented by the system sans-serif stack for small metadata and navigation labels.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | UntitledSerif | 5.75rem | 400 | 0.9 | -0.02em | Article titles and major page headings |
| section-heading | UntitledSerif | 2rem | 400 | 1.33 | 0em | Subsection headings within articles |
| body | UntitledSans | 1.125rem | 400 | 1.56 | 0em | Primary article paragraphs and descriptions |
| body-small | UntitledSans | 1rem | 400 | 1.5 | 0em | Secondary body text and tighter spaces |
| label | UntitledSans | 0.9375rem | 500 | 1.5 | 0em | Button labels and emphasized inline text |
| metadata | -apple-system | 0.875rem | 400 | 1.3 | 0em | Dates, read times, and caption information |
| navigation | -apple-system | 0.6875rem | 600 | 1 | 0em | Top navigation links and small labels |

The hero-display token delivers the system's most distinctive visual moment: an extremely large serif heading with tight leading and slight negative tracking, creating a confident, almost monumental entry point for articles. The body tokens maintain generous line height for comfortable reading at length. Weight variation is minimal—Regular and Medium for UntitledSans, Regular alone for UntitledSerif—keeping the system quiet and letting scale do the hierarchical work.

Verify licensing for these families before production use.

## Layout

The layout follows a single-column reading archetype with generous margins and a contained content width. The page is centered within the viewport with substantial horizontal padding that scales with the browser.

The top navigation spans the full viewport width, separated from content by a 1-pixel hairline border. Navigation items align to the right, with the brand mark positioned left. Below the navigation, content sections stack vertically with significant vertical rhythm.

Content blocks observe a maximum readable width of approximately 42 to 48 rem, centered within the available space. Paragraphs maintain consistent bottom margins that create clear separation without excessive whitespace. Horizontal rules appear between major sections, spanning the content width with the hairline color.

Spacing follows a base unit of 0.125 rem, with practical increments at 0.5 rem, 1 rem, 1.25 rem, 1.5 rem, 2.5 rem, 3 rem, and larger structural values. The system favors sparse density—paragraphs breathe, headings sit in open space, and the overall rhythm is unhurried. A large bottom padding value of 24 rem appears at the page conclusion, creating dramatic closure before the footer area.

## Visual language

The visual language is defined by restraint and precision. Every element earns its place; nothing decorative competes with the content. The stark black-and-white palette eliminates chromatic distraction, while the serif-sans pairing introduces just enough typographic tension to feel considered rather than default.

Surfaces are entirely flat. No shadows appear on content areas, no gradients soften transitions, and no background textures add visual noise. The only dimensional cue is a subtle shadow on the primary button, lifting it slightly from the page without breaking the flat aesthetic.

Corners are mostly sharp—0 radius for content areas and structural divisions. The sole exception is the primary button, which uses a full pill radius to distinguish it as an interactive element. This single rounded form in an otherwise rectilinear system creates an effective call-to-action signal.

Imagery and photography, when present, would likely follow the same monochrome discipline or appear in natural color against the white canvas without additional framing or borders. The system appears designed to let content speak without visual packaging.

## Components

### Top navigation

- **Anatomy**: Full-width bar containing brand mark left, navigation links right
- **Surface**: Canvas background with 1-pixel hairline bottom border
- **Typography**: Navigation token, system sans-serif at small size with semibold weight
- **Spacing**: Compact vertical padding, generous horizontal margins
- **Composition**: Flex row with space-between alignment; links grouped with small gap

### Article heading

- **Anatomy**: Large serif display text, optionally followed by metadata line
- **Typography**: Hero-display token for the title; metadata token for date and read time
- **Spacing**: Substantial top margin creating dramatic entry space; small gap between title and metadata
- **Composition**: Left-aligned within content column, full width of the reading measure

### Body paragraph

- **Anatomy**: Continuous text block with automatic line wrapping
- **Typography**: Body token, UntitledSans Regular
- **Spacing**: Consistent bottom margin between paragraphs; no indentation
- **Composition**: Full width of reading measure, left-aligned

### Horizontal rule divider

- **Anatomy**: Single horizontal line spanning content width
- **Surface**: 1-pixel solid hairline color
- **Spacing**: Generous vertical margins above and below to separate sections

### Team roster list

- **Anatomy**: Stacked text items, each a name on its own line
- **Typography**: Body or body-small token, UntitledSans Regular
- **Spacing**: Tight vertical packing with small gaps between names; separated from surrounding content by horizontal rules
- **Composition**: Left-aligned, no bullets or numbering

### Primary button

- **Anatomy**: Pill-shaped container with text label and right arrow icon
- **Surface**: Ink background with canvas text; subtle outer shadow for elevation
- **Typography**: Label token, UntitledSans Medium
- **Shape**: Full pill radius (9999px)
- **Spacing**: Comfortable internal padding, compact horizontal footprint
- **Composition**: Inline with surrounding text or positioned at section boundaries

### Footer area

- **Anatomy**: Minimal closure containing social link and call-to-action
- **Surface**: Canvas background, continuous with page
- **Typography**: Body-small for links, label for button
- **Spacing**: Large top margin separating from content; generous bottom padding
- **Composition**: Button left-aligned, social link right-aligned in a flex row

## Responsive behavior

The single-column layout adapts gracefully to narrower viewports by maintaining the reading measure and reducing horizontal margins. The hero display heading should scale down on smaller screens to preserve line breaks and prevent overflow. A reduction to approximately 3.5 rem maintains hierarchy without dominating the viewport.

Navigation links may collapse to a menu or reduce in number on mobile if space becomes constrained. The top navigation bar should remain fixed or scroll naturally with the page—no behavior is specified in the visible system.

Body text and paragraph spacing should remain consistent across breakpoints, as the reading experience is the central priority. The large bottom padding may reduce proportionally on shorter viewports to prevent excessive empty space.

## Practical implementation guidance

### Preserve
- The stark black-and-white palette as the defining brand characteristic
- The serif-sans typographic pairing, especially the large UntitledSerif display headings
- Generous whitespace and sparse content density
- Full-pill shape for the primary button as the sole rounded element
- The single-column reading measure with comfortable line lengths

### Avoid
- Adding accent colors or gradient backgrounds that break the monochrome discipline
- Rounding corners on cards, images, or content containers
- Multiple font weights within the same text block
- Decorative borders or frame effects around content areas
- Dense navigation patterns or multi-level menus

### Recommended build order
1. Establish the base typography with UntitledSerif and UntitledSans loaded and configured
2. Implement the single-column layout with contained reading measure and generous margins
3. Build the top navigation with hairline border and minimal link set
4. Create the article heading component with hero-display sizing
5. Style body paragraphs with proper spacing and line height
6. Add the horizontal rule divider with hairline color
7. Implement the pill button with ink background and arrow icon
8. Assemble the footer composition with proper alignment and spacing

### Accessibility
- Maintain the high contrast between ink and canvas text for all body content
- Ensure the subtle button shadow does not become the only indicator of interactivity; rely on cursor and focus states
- Preserve adequate touch targets for navigation links and buttons on mobile devices
- Use semantic heading hierarchy with a single h1 per page, matching the visual hero-display treatment

## Scope note

This guide covers the blog article page surface visible in the supplied captures. Footer components beyond the minimal closure, form inputs, loading states, error handling, and responsive navigation patterns are not represented. Measurements are practical adaptation targets derived from the visible interface.
