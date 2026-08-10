# How makingsoftware.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/makingsoftware.com-design)

Last updated: 2026-08-10

## Captured pages

[![Chapter page showing left navigation sidebar with numbered sections, article header with metadata, and technical illustration of electron charge trap cell in main content area](https://pin.fontofweb.com/6339?format=jpg)](https://design.withfudge.com/share/pin-6339)

[Chapter page showing left navigation sidebar with numbered sections, article header with metadata, and technical illustration of electron charge trap cell in main content area](https://design.withfudge.com/share/pin-6339)

[![Homepage featuring large pixel-art title, isometric floppy disk diagram with labeled parts, and explanatory text about touch screens and Gaussian blur](https://pin.fontofweb.com/5745?format=jpg)](https://design.withfudge.com/share/pin-5745)

[Homepage featuring large pixel-art title, isometric floppy disk diagram with labeled parts, and explanatory text about touch screens and Gaussian blur](https://design.withfudge.com/share/pin-5745)

[![Shaders chapter with breadcrumb navigation, italic display heading, shader pipeline diagram with vertex array through frame buffer stages, and magenta gradient image](https://pin.fontofweb.com/5744?format=jpg)](https://design.withfudge.com/share/pin-5744)

[Shaders chapter with breadcrumb navigation, italic display heading, shader pipeline diagram with vertex array through frame buffer stages, and magenta gradient image](https://design.withfudge.com/share/pin-5744)

[![FAQ section with question list on left and selected question detail on right showing IN/OUT labels and conversational answer text](https://pin.fontofweb.com/5077?format=jpg)](https://design.withfudge.com/share/pin-5077)

[FAQ section with question list on left and selected question detail on right showing IN/OUT labels and conversational answer text](https://design.withfudge.com/share/pin-5077)

## Overview

Making Software presents itself as a digital reference manual for people who design and build software. The visual system combines the authority of technical documentation with the warmth of hand-crafted illustration. A pixel-art logotype in electric blue establishes immediate identity, while the interior pages adopt a clean editorial structure: generous white space, a fixed left navigation sidebar, and centered article content with technical diagrams.

The design language sits at the intersection of engineering precision and approachable explanation. Isometric diagrams with labeled callouts explain complex concepts like shader pipelines and disk drive mechanics. The typography pairs a warm serif for body text with a monospace family for navigation, labels, and metadata. Color is restrained to near-black text on warm white, with a single electric blue reserved for the brand mark, active navigation states, and diagram highlights. The overall impression is of a carefully typeset technical book that happens to live in a browser.

## Colors

The palette is intentionally minimal, derived from print editorial conventions rather than contemporary web gradients. The near-absence of color makes the occasional blue accent feel intentional and energetic.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headings, diagram labels, navigation text |
| muted-ink | #0C0A09 | Subtle text variation, secondary labels |
| action | #103DFF | Brand logotype, active navigation links, diagram highlights, interactive accents |
| canvas | #FBFBFB | Page background, sidebar fill, header area, content surfaces |

The canvas tone serves as the universal background for all surfaces, from the page itself to the FAQ detail panels and diagram backgrounds. No distinct surface elevation color is used; the design maintains a flat, single-plane aesthetic throughout. The action blue appears most dramatically in the pixel-art "MAKING SOFTWARE" wordmark and in selected navigation items, where it signals the current location within the manual's hierarchy. Diagrams use this same blue for callout lines and labels, creating visual continuity between the brand and the explanatory illustrations. No dark mode is present in the visible surfaces; the system assumes light-background reading throughout.

## Typography

Five type families are present in the source files: Abc Arizona Mix carries the editorial body text with humanist warmth; Departure Mono handles all technical and navigational elements with mechanical clarity; New York appears available for potential alternate display use; and System along with System-Uisansserif serve as generic system-ui sans-serif fallbacks. The visible interface relies primarily on Abc Arizona Mix and Departure Mono, avoiding weight variations almost entirely and relying on size and family contrast instead.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Departure Mono | 4rem | 400 | 1 | normal | Homepage pixel-art logotype |
| section-display | Abc Arizona Mix | 2.25rem | 400 | 1.1 | -0.025em | Chapter titles, major headings |
| body | Abc Arizona Mix | 0.875rem | 400 | 1.8 | normal | Article paragraphs, explanations |
| body-small | Abc Arizona Mix | 0.75rem | 400 | 1.33 | normal | Sidebar section labels, tight spaces |
| label | Departure Mono | 0.625rem | 400 | 2.52 | normal | Metadata, word counts, author credits |
| navigation | Departure Mono | 0.75rem | 400 | 1.33 | normal | Sidebar links, breadcrumb paths |
| caption | Departure Mono | 0.625rem | 400 | 2.52 | normal | Figure labels, diagram callouts |

Abc Arizona Mix was designed by Elias Hanzer and Alex Lescieux, available from Dinamo. Departure Mono was designed by Helena Zhang. New York was designed by Apple Inc. System and System-Uisansserif are generic system-ui sans-serif fallbacks with no attributed designer or vendor. Verify licensing for these families before production use.

The hero display size of 4rem renders the pixel-art logotype at a scale where individual pixels remain visible and crisp, preserving the intentional low-resolution aesthetic. Section display uses negative tracking to tighten the serif headlines without losing readability. Body text at 0.875rem with 1.8 line height creates comfortable reading for long-form technical explanations. The label and caption tokens share identical metrics but serve different semantic roles, both using Departure Mono's generous line height to create visual separation from surrounding content.

## Layout

The page architecture follows a fixed split-panel model on chapter pages. A narrow left sidebar occupies approximately 20% of viewport width, containing the manual's full table of contents with numbered sections and expandable subsections. The remaining space hosts a centered content column with maximum width constraints, creating generous margins that focus attention on the article.

The sidebar uses padding of 2.5rem top, 7.5rem bottom, and 2rem left, with section lists indented 1.5rem from the left edge. Navigation links stack vertically with 2.5rem margin between major sections and 1.5rem between subsections. The main content area begins with 5rem of top padding, establishing clear separation from the browser chrome.

Article headers center-align the chapter title, subtitle, and metadata (word count, author name) with a decorative horizontal rule below. Body paragraphs maintain a consistent 1.5rem top margin, creating rhythmic vertical spacing. Diagrams and illustrations break the text column, often centering within the content area or extending to full width for complex multi-stage explanations like the shader pipeline.

The homepage abandons this sidebar structure for a more fluid composition, allowing the pixel-art title to dominate the upper viewport and arranging explanatory text and large isometric illustrations in asymmetric columns.

## Visual language

Illustrations are the defining visual element, rendered in a consistent isometric or technical-drawing style with blue line art on white or light backgrounds. Diagrams feature labeled callouts with leader lines connecting terms to specific parts, mimicking engineering schematics. The style is flat, with minimal shading, relying on line weight and occasional solid blue fills to indicate depth or emphasis.

The pixel-art logotype "MAKING SOFTWARE" uses a constructed grid where each letter is built from visible pixels, giving it a retro-computing aesthetic that references the manual's subject matter. This same pixel logic extends to small UI elements like breadcrumb arrows and navigation indicators.

Decorative horizontal rules appear as dashed lines, separating header metadata from content and marking section transitions. These rules use a light gray or the action blue, maintaining the technical drawing convention throughout.

Photography appears rarely; when present, it takes the form of abstract gradients or color fields rather than representational images. The visual system privileges explanation through illustration over documentation through photography.

## Components

### Navigation sidebar

- **Anatomy**: Fixed-position left panel containing site logotype at top, followed by numbered sections (1-8) with expandable subsection lists.
- **Surface and text color**: Canvas background, ink text for inactive items, action blue for active/selected items.
- **Typography**: Section numbers and titles use `body-small`; subsection links use `navigation`.
- **Spacing**: 2.5rem top padding, 7.5rem bottom padding, 2rem left padding. Subsection lists indented 1.5rem with 1.5rem top margin.
- **Composition**: Vertical stack with clear hierarchical indentation. Active section indicated by color change to action blue.

### Chapter header

- **Anatomy**: Breadcrumb path (section > subsection), centered metadata line (word count, author), large italic or regular display heading, subtitle in lighter weight, decorative horizontal rule.
- **Surface and text color**: Canvas background, ink heading, muted ink for subtitle and metadata.
- **Typography**: Breadcrumb uses `navigation`; metadata uses `label`; heading uses `section-display` (italic for some chapters); subtitle uses `body` at smaller size.
- **Spacing**: 5rem top padding, centered alignment, 1.5rem gaps between elements.
- **Composition**: Strictly centered, creating formal book-chapter opening. Horizontal rule provides visual closure before body content.

### Technical diagram

- **Anatomy**: Isometric or orthographic illustration with labeled callouts, leader lines, and occasional multi-stage sequence (vertex array through frame buffer).
- **Surface and text color**: Canvas background, ink labels, action blue for highlights and callout lines.
- **Typography**: Labels use `caption` in all caps for component names.
- **Spacing**: Full-width or centered within content column, 2rem vertical margin.
- **Composition**: Often arranged left-to-right for process flows, or centered with radial/vertical callouts for mechanical diagrams.

### FAQ accordion

- **Anatomy**: Left column lists questions; right panel shows selected question with IN/OUT labels and detailed answer.
- **Surface and text color**: Canvas background for detail panel, ink text, muted ink for labels.
- **Typography**: Questions use `body`; IN/OUT labels use `navigation`; answers use `body` with italic emphasis.
- **Spacing**: Panel padding of 0.5rem vertical, 2.25rem right, 1.5rem left.
- **Composition**: Two-column layout with clear selection state. Up/down arrows indicate sort or navigation between questions.

### Body paragraph

- **Anatomy**: Running text with occasional inline links and superscript reference markers.
- **Surface and text color**: Canvas background, ink text, action blue for links.
- **Typography**: `body` token.
- **Spacing**: 1.5rem top margin between paragraphs, consistent line height.
- **Composition**: Left-aligned, moderate measure for comfortable reading. Links underlined or colored without additional decoration.

## Responsive behavior

The sidebar navigation, fixed at left on desktop, should collapse to a top-bar menu or hamburger drawer on narrower viewports to preserve the content column's readability. The content column's maximum width should remain constrained even as viewport shrinks, maintaining the editorial measure.

Homepage illustrations, particularly the large isometric diagrams, should scale down proportionally or stack vertically on narrow screens. The pixel-art logotype should remain legible, potentially reducing to 2.5rem or 3rem on mobile to preserve pixel crispness.

The FAQ two-column layout should stack to single-column on narrow viewports, with the question list becoming a scrollable or expandable element above the detail panel.

## Practical implementation guidance

### Preserve
- The pixel-art logotype's visible pixel grid; do not anti-alias or smooth the edges
- The three-family typographic hierarchy: serif for body, monospace for technical elements
- The warm white background against near-black text for sustained reading comfort
- The isometric illustration style with blue line art and labeled callouts
- The generous vertical spacing and centered chapter headers

### Avoid
- Introducing additional accent colors beyond the single action blue
- Using bold weights where size and family contrast already establish hierarchy
- Crowding the sidebar with icons or decorative elements
- Replacing technical diagrams with generic stock photography
- Darkening the canvas background significantly; the warmth is essential

### Recommended build order
1. Establish the typographic system with all families at their defined sizes
2. Implement the sidebar navigation with correct indentation and active states
3. Build the chapter header component with centered alignment and metadata
4. Create the body paragraph styles with proper measure and link treatment
5. Develop illustration containers with appropriate aspect ratios and caption spacing
6. Add the FAQ layout with IN/OUT label pattern

### Accessibility
- Ensure the action blue (#103DFF) meets contrast requirements against the canvas background
- Provide skip navigation for the lengthy sidebar table of contents
- Maintain logical heading hierarchy from h1 (chapter title) through h2 and h3 for subsections
- Preserve alt text for all technical diagrams, describing the explained concept not merely the visual appearance
- Consider a focus indicator that respects the minimal aesthetic while remaining visible

## Scope note

This guide covers the chapter page and homepage surfaces visible in the supplied images. Mobile breakpoints, hover interactions, search functionality, print styles, and the complete illustration system are not documented here. The New York type family is listed in sources but not visibly employed in captured surfaces. System and System-Uisansserif appear as fallback families in source files without visible dedicated use in the captured interface. Measurements are practical adaptation targets based on extracted values.
