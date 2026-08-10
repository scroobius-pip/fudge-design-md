# How hermes4.nousresearch.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/hermes4.nousresearch.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large HERMES 4 title, NOUS RESEARCH PRESENTS header, and blue abstract particle wave on black background](https://pin.fontofweb.com/7869?format=jpg)](https://design.withfudge.com/share/pin-7869)

[Hero section with large HERMES 4 title, NOUS RESEARCH PRESENTS header, and blue abstract particle wave on black background](https://design.withfudge.com/share/pin-7869)

[![Chain of Thought section with split layout showing system prompt text and chat conversation overlay on dark magenta particle visualization](https://pin.fontofweb.com/7872?format=jpg)](https://design.withfudge.com/share/pin-7872)

[Chain of Thought section with split layout showing system prompt text and chat conversation overlay on dark magenta particle visualization](https://design.withfudge.com/share/pin-7872)

[![Casual DM section with Discord-style chat example and orange-amber particle wave background with HERMES 4 labeled messages](https://pin.fontofweb.com/7870?format=jpg)](https://design.withfudge.com/share/pin-7870)

[Casual DM section with Discord-style chat example and orange-amber particle wave background with HERMES 4 labeled messages](https://design.withfudge.com/share/pin-7870)

[![Chain of Thought section variant with loading spinner visible and magenta particle network with labeled USER and HERMES 4 chat bubbles](https://pin.fontofweb.com/7871?format=jpg)](https://design.withfudge.com/share/pin-7871)

[Chain of Thought section variant with loading spinner visible and magenta particle network with labeled USER and HERMES 4 chat bubbles](https://design.withfudge.com/share/pin-7871)

## Overview

The Hermes 4 design system presents a cinematic, research-forward aesthetic built for showcasing AI model capabilities. The visual language pairs extreme darkness with luminous particle-wave imagery, creating an atmosphere of computational depth and emergent intelligence. The layout follows a consistent split-panel editorial structure: a narrow left column carries explanatory text, system prompts, and section headers, while a wide right column hosts immersive visualizations overlaid with conversational UI elements. This asymmetry reinforces the relationship between human-readable documentation and machine-generated output. The system employs two distinct typographic voices—a geometric sans for functional text and an ultra-condensed display family for monumental headings—creating tension between accessibility and dramatic presence. Color is used sparingly and purposefully, with near-black backgrounds allowing particle simulations in blue, magenta, and amber tones to become the primary visual interest.

## Colors

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary background for all sections, deep void for particle visualizations |
| surface | #0A0E1A | Elevated panels, chat bubble backgrounds, secondary containers |
| ink | #E8ECFF | Primary text color, body copy, section headers, system prompts |
| ink-bright | #FFFFFF | High-emphasis text, primary action backgrounds, user chat labels |

The color strategy relies on extreme contrast between the #000000 canvas and #E8ECFF ink. This near-monochrome foundation allows the particle-wave visualizations to shift between color temperatures—cool blues in the hero, warm magentas in Chain of Thought, amber-oranges in Casual DM—without clashing with interface elements. The #0A0E1A surface provides subtle elevation for chat bubbles and interactive panels without breaking the dark continuity. White (#FFFFFF) is reserved for the highest emphasis: user labels in chat interfaces and primary call-to-action buttons. No gradients or shadows are used in the interface layer; all depth comes from the photographic particle imagery behind transparent or semi-transparent text panels.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Univers Lt Std | 8rem | 900 | 0.85 | -0.02em | Main title "HERMES 4" in hero section |
| section-display | Univers Lt Std | 2rem | 800 | 1 | 0.44em | Uppercase spaced headers like "CHAIN OF THOUGHT" |
| body | Geist | 0.875rem | 400 | 1.4 | normal | Paragraph text, descriptions, chat content |
| body-small | Geist | 0.75rem | 400 | 1.25 | 0.025em | Secondary descriptions, metadata |
| label | Geist | 0.875rem | 700 | 1.25 | 0.044em | Chat bubble labels, button text, emphasis |
| code | Courier New | 0.875rem | 400 | 1.4 | normal | System prompts, code samples, monospace content |
| condensed-display | Univers Condensed | 1.625rem | 700 | 1 | normal | Sub-headings, feature callouts |

The typographic system operates on a principle of maximum contrast in form and function. The display layer draws on multiple weights and widths from the Univers family: Univers Lt Std-85 Extra Black supplies the 900-weight hero voice, Univers Lt Std-59 Ultra Condensed produces the aggressively letter-spaced section headers at 800 weight, and Univers Condensed Bold handles sub-headings. Geist handles all functional text with clean geometric neutrality at 14px base size, ensuring readability in dense chat interfaces and explanatory paragraphs. Courier New appears exclusively for system prompts and code-adjacent content, reinforcing the technical substrate of the experience. The 12.25px bold variant (0.766rem, snapped to 0.75rem) serves emphasis within body contexts. Verify licensing for these families before production use; Geist is by Basement Studio and Vercel, Univers families carry Adrian Frutiger attribution where specified, and Courier New is by Howard Kettler via The Monotype Corporation.

## Layout

The layout follows a rigid split-panel structure that persists across all visible sections. The left panel occupies approximately 40% of the viewport width and contains: a section header in ultra-condensed uppercase, a descriptive paragraph in Geist body text, and optionally a system prompt block in Courier New monospace. The right panel fills the remaining 60% and serves as a stage for full-bleed particle-wave visualizations with overlaid conversational UI elements.

Vertical rhythm is established through consistent spacing. Section headers receive 3.25rem top padding to clear previous content. Paragraph blocks maintain 1rem inter-paragraph spacing. The system prompt blocks sit within the left column with 0.875rem internal padding, creating a distinct inset from the main body text.

The hero section inverts this logic slightly: the left panel carries the monumental title, subtitle, and body copy, while the right panel presents an uninterrupted blue particle wave without chat overlay. Below the hero, subsequent sections introduce the chat interface pattern where HERMES 4 and USER labels float over the visualization.

Content alignment is consistently left-justified within the text panel. The particle visualizations appear to anchor to the right edge with internal elements—chat bubbles, labels, small orbiting text like "evals" and "nous_chat"—positioned organically within the field rather than following a strict grid.

## Visual language

The visual identity centers on particle-wave simulations that evoke neural networks, data flows, and emergent complexity. These are not decorative backgrounds but integral content: each section's visualization carries distinct color temperature that signals thematic content. The hero's deep blue suggests depth and capability; the Chain of Thought's magenta implies intensity and reasoning; the Casual DM's amber warmth communicates approachability and human-like interaction.

Typography reinforces this duality between machine and human. The ultra-condensed Univers headers feel like technical specifications or broadcast graphics, while Geist's rounded, friendly geometry softens the interface for reading. The Courier New system prompts explicitly surface the "programmatic" layer of AI interaction, making visible what is typically hidden.

Chat interface elements use stark minimalism: white rectangular labels with black text for USER, dark translucent panels with light text for HERMES 4 responses. Numbered premise indicators (1, 2, 3) appear as small dark squares with white numerals, creating a logical scaffolding within conversational flow. Small circular loading indicators appear during model processing, providing temporal feedback without breaking the dark aesthetic.

## Components

### Hero Section

- **Anatomy**: Left text panel with overline ("NOUS RESEARCH PRESENTS"), main title ("HERMES 4"), subtitle ("FEATURING NOUS CHAT REVAMPED"), body paragraphs, primary action button, secondary text links
- **Surface**: Left panel on #000000 canvas; right panel filled with blue particle-wave visualization
- **Typography**: Overline uses section-display token; title uses hero-display at approximately 8rem; subtitle uses condensed-display; body uses body token
- **Shape**: No border radius on any element; sharp rectangular aesthetic throughout
- **Spacing**: Generous left padding creating inset from viewport edge; title stacked tightly with 0.85 line height
- **Composition**: Asymmetric split with text anchored left, visualization bleeding to right edge

### Primary Action Button

- **Anatomy**: Rectangular button containing uppercase label text
- **Surface**: #FFFFFF background with #000000 text
- **Typography**: label token, Geist Bold, uppercase
- **Shape**: 0 border radius, sharp corners
- **Spacing**: Internal padding approximately 0.875rem vertical, 1.75rem horizontal
- **Composition**: Appears below body text block, left-aligned with text panel

### Chat Bubble — User

- **Anatomy**: Small rectangular label containing "USER" text
- **Surface**: #FFFFFF solid background
- **Typography**: label token, black text
- **Shape**: Sharp rectangle, no radius
- **Spacing**: Compact internal padding, floats at right side of visualization panel
- **Composition**: Positioned adjacent to user message text in dark translucent panel

### Chat Bubble — Model

- **Anatomy**: Dark panel containing "HERMES 4" label and response text
- **Surface**: #0A0E1A or semi-transparent dark background
- **Typography**: Label uses label token in white; body uses body token in #E8ECFF
- **Shape**: Sharp rectangle
- **Spacing**: Generous internal padding creating readable text block
- **Composition**: Left-aligned within right panel, stacked vertically in conversation sequence

### System Prompt Block

- **Anatomy**: Monospace text block with "SYSTEM PROMPT" header
- **Surface**: Transparent or subtly darkened, no distinct background separation
- **Typography**: code token, Courier New Regular, 14px
- **Shape**: No container shape; text flows as preformatted block
- **Spacing**: Inset from left panel edge, distinct vertical spacing from body paragraphs
- **Composition**: Appears below section description, above or alongside visualization

### Section Header

- **Anatomy**: Single line of uppercase text with extreme letter-spacing
- **Surface**: Transparent over dark background
- **Typography**: section-display token, Univers Lt Std Ultra Condensed, 2rem, 0.44em tracking
- **Shape**: Text only, no container
- **Spacing**: Generous top padding to clear previous section content
- **Composition**: Left-aligned in text panel, creates rhythmic entry point for each section

### Loading Indicator

- **Anatomy**: Small circular spinner element
- **Surface**: Light stroke on dark background
- **Typography**: None
- **Shape**: Perfect circle
- **Spacing**: Appears inline with content, replacing or adjacent to text
- **Composition**: Used during model response generation, minimal visual interruption

## Responsive behavior

The split-panel layout suggests clear adaptation priorities. At narrower viewports, the 40/60 horizontal split should transition to a stacked vertical arrangement: text panel above, visualization below. The hero title at 8rem requires aggressive scaling to maintain readability without overflow; a reduction to approximately 4rem maintains presence while fitting narrow screens.

The particle-wave visualizations, being photographic rather than generative in the interface layer, can maintain aspect ratio or crop strategically. Chat bubble positioning should reflow from absolute-style overlay to inline blocks within a scrolling conversation container.

The extreme letter-spacing in section headers (0.44em) may require reduction at small sizes to prevent characters from fragmenting perceptually. A reduction to 0.25em tracking on screens below 768px preserves the aesthetic without sacrificing legibility.

Body text at 14px should not scale down further; instead, line length should be controlled through padding to maintain optimal reading measure. The system prompt blocks, being dense monospace content, benefit from horizontal scroll containers if full width is unavailable.

## Practical implementation guidance

### Preserve
- The stark black-to-light contrast ratio; do not introduce mid-tone grays that dilute the cinematic depth
- The dual-typeface system: Univers for display impact, Geist for functional readability
- Sharp rectangular forms throughout; no border radii on buttons, labels, or containers
- The split-panel editorial structure as the foundational layout rhythm
- Particle-wave imagery as full-bleed section backgrounds with overlaid UI elements

### Avoid
- Rounded corners on any interface element; they contradict the technical, engineered aesthetic
- Drop shadows or elevation effects; depth comes from imagery, not synthetic shadows
- Color in functional text; keep ink as #E8ECFF or #FFFFFF exclusively
- Center-aligned text in the editorial panels; left alignment maintains the technical document feel
- Decorative gradients in UI elements; the only gradients exist within the particle visualizations

### Recommended build order
1. Establish the black canvas and load Geist and Univers font families with proper weights
2. Implement the split-panel grid structure with 40/60 proportions
3. Build the hero section with hero-display title and blue particle background
4. Create the section header component with extreme letter-spacing
5. Implement chat bubble system with USER and HERMES 4 variants
6. Add system prompt blocks in Courier New
7. Integrate particle-wave imagery for each thematic section
8. Polish spacing rhythm and responsive breakpoints

### Accessibility
- The #E8ECFF on #000000 combination exceeds WCAG AAA contrast standards for normal text
- White (#FFFFFF) labels on dark backgrounds provide maximum contrast for small UI elements
- The extreme letter-spacing in section headers may reduce readability for some users; consider providing an alternate presentation with standard spacing for accessibility preferences
- Particle-wave animations, if implemented as video or canvas elements, should respect `prefers-reduced-motion` and provide static image fallbacks
- Chat conversation structure should use appropriate ARIA roles (log, article, or region) for screen reader navigation
- The loading indicator should be accompanied by screen-reader-visible status text

## Scope note

This guide covers the landing page experience for Hermes 4, including the hero section, Chain of Thought demonstration, and Casual DM example. It does not include interior pages, the chat application interface, documentation typography, or interactive model behavior beyond the visible static states. Motion design for particle systems, hover states on buttons, and mobile-specific adaptations are not documented here and should be validated against live implementation.
