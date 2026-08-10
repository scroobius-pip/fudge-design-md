# How operate.so is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/operate.so-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with animated green canvas, scattered particles, and a blue data-path visualization with the Operate alpha badge and early-access call-to-action.](https://pin.fontofweb.com/3860?format=jpg)](https://design.withfudge.com/share/pin-3860)

[Hero section with animated green canvas, scattered particles, and a blue data-path visualization with the Operate alpha badge and early-access call-to-action.](https://design.withfudge.com/share/pin-3860)

[![Waitlist section with a large tilted green polygon panel, white text, and a rounded button, followed by a mint-green footer with colophon and hiring badge.](https://pin.fontofweb.com/3862?format=jpg)](https://design.withfudge.com/share/pin-3862)

[Waitlist section with a large tilted green polygon panel, white text, and a rounded button, followed by a mint-green footer with colophon and hiring badge.](https://design.withfudge.com/share/pin-3862)

[![Editorial body section with green text on a pale background, wireframe illustration, section label pill, and a mint-green abstract shape with a shuffle control.](https://pin.fontofweb.com/3861?format=jpg)](https://design.withfudge.com/share/pin-3861)

[Editorial body section with green text on a pale background, wireframe illustration, section label pill, and a mint-green abstract shape with a shuffle control.](https://design.withfudge.com/share/pin-3861)

[![Team section with expandable roster rows, circular portrait, green bold labels, and a right-hand table-of-contents navigation with progress indicator.](https://pin.fontofweb.com/3863?format=jpg)](https://design.withfudge.com/share/pin-3863)

[Team section with expandable roster rows, circular portrait, green bold labels, and a right-hand table-of-contents navigation with progress indicator.](https://design.withfudge.com/share/pin-3863)

## Overview

Operate presents itself as a CRM designed for sales and built for founders, expressed through a visual system that feels deliberately technical yet approachable. The page unfolds as a long-scroll editorial experience where mint-green surfaces, wireframe illustrations, and bold green typography create a cohesive identity that reads as both precise and playful. The design avoids conventional SaaS hero layouts in favor of an immersive animated canvas, dense text blocks with strong voice, and interactive elements like expandable team rows and a shuffle-controlled abstract shape. Every section maintains a consistent palette of pale gray backgrounds, deep green text, and mint accents, with geometric shapes and dotted grid patterns reinforcing the "built by builders" positioning. The overall impression is of a product team that values craft and detail, communicating through a system that balances information density with moments of visual delight.

## Colors

The Operate palette is built around a single dominant green hue extended across multiple values, creating a monochromatic system with mint and blue accents. The interface relies on strong contrast between deep green text and pale gray backgrounds, with mint surfaces providing secondary hierarchy.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary dark for active navigation states, strong borders, and high-contrast moments |
| canvas | #e0e0e0 | Main page background, providing a warm pale gray that softens the green dominance |
| surface | #8bc48a | Footer background, secondary panels, and large geometric shapes |
| action | #1a7a1a | Primary buttons, section labels, links, body text, and interactive accents |
| action-hover | #146314 | Darker green for button hover states and pressed interactions |
| accent-mint | #a8d8a8 | Lighter mint for decorative shapes, hover backgrounds, and subtle fills |
| accent-blue | #6b9eb8 | Data visualization paths, chart elements, and technical illustration accents |
| text-primary | #1a7a1a | All body copy, headings, and primary readable content |
| text-inverse | #ffffff | Text on dark green panels, buttons, and high-contrast surfaces |
| text-muted | #5a8a5a | Secondary navigation, inactive TOC items, and de-emphasized labels |
| border-subtle | #b8d4b8 | Divider lines between team rows, light separators on pale backgrounds |
| border-strong | #1a7a1a | Active borders, button outlines, and emphasized structural lines |

The color system operates in a light mode throughout, with no dark mode visible. Photography and illustrations pull from the same green family, ensuring that image palettes harmonize with interface colors rather than competing. The deep green action color carries almost all semantic weight—serving simultaneously as text, link, button fill, and border—while the mint surface provides the only large-area color variation. Blue appears exclusively in data-visualization contexts, creating a clear separation between interface chrome and analytical content.

## Typography

Operate employs two type families: Denim for all primary reading and display matter, and GT Cinetype for labels, captions, and technical metadata. Denim appears in Regular, Regular Italic, and Semi Bold cuts, providing sufficient range for body emphasis without needing a full weight ladder. GT Cinetype contributes a more mechanical, engineered voice for small uppercase labels and colophon information.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Denim | 3.5rem | 600 | 1.05 | -0.02em | Large panel headlines, waitlist section title |
| section-display | Denim | 2.5rem | 600 | 1.1 | -0.01em | Medium section headings within content flow |
| body | Denim | 1rem | 400 | 1.6 | 0em | Paragraphs, list items, general reading |
| body-bold | Denim | 1rem | 600 | 1.6 | 0em | Emphasized phrases, bullet leads, button text |
| label | GT Cinetype | 0.75rem | 400 | 1.2 | 0.05em | Section pills, metadata, uppercase tags |
| navigation | Denim | 0.875rem | 400 | 1.4 | 0em | Table of contents, inline links, footer links |
| legal-copy | GT Cinetype | 0.75rem | 400 | 1.4 | 0.02em | Colophon credits, copyright, build information |

Denim is designed by Martin Vácha and Daniel Quisek of Displaay Type Foundry. GT Cinetype is designed by Rafael Koch and Mauro Paolozzi of Grilli Type. Verify licensing for these families before production use.

The type scale is tightly controlled, with display sizes snapping to whole-number multiples of the 4px base unit. Body text at 16px provides comfortable reading density, while the 56px hero display creates impact without overwhelming the contained panel layouts. Italics appear sparingly, reserved for emphasis within body copy rather than display use. Letter spacing remains tight on large sizes and opens slightly on small labels, preserving readability at all scales.

## Layout

The page follows a centered editorial column with generous margins, punctuated by full-bleed sections that break the rhythm for emphasis. The primary content column measures approximately 48rem wide, creating a reading experience that feels intentional and book-like rather than stretched to viewport edges.

A persistent right-side table of contents anchors the scroll experience, showing section progress with filled and unfilled circles. This navigation element sits outside the main content flow, fixed to the viewport edge, and updates its active state as the user moves through the page. The TOC uses a compact vertical stack with nested indentation for subsections, maintaining visibility without competing with page content.

The hero section abandons conventional centering in favor of an immersive canvas that fills the viewport. A small badge panel floats in the upper right, containing the product name, tagline, and early-access call-to-action. This panel uses a thin border and minimal padding, reading as an overlay rather than a dominant element. The canvas itself contains animated particles, grid lines, and a flowing blue data path that visualizes the chaos-to-clarity narrative.

Below the hero, content sections alternate between pale gray backgrounds and mint green surfaces. The waitlist section introduces a dramatic tilted polygon panel in deep green, breaking the horizontal rhythm with a 15-degree rotation that creates dynamic tension. Team and editorial sections return to the centered column, while the footer expands to full width with a three-column grid for colophon information.

Spacing between sections uses 6rem as a standard measure, with tighter 3rem gaps within related content groups. Internal padding for interactive elements like buttons and labels follows a 0.75rem vertical and 1.5rem horizontal rhythm, creating pill-shaped controls that feel substantial without being heavy.

## Visual language

The Operate visual identity is defined by three recurring motifs: wireframe geometry, dotted grid patterns, and organic mint shapes. Wireframe illustrations appear as black-line renderings of three-dimensional forms—folded planes, grids, and abstract volumes—positioned beside text blocks to reinforce the technical, builder-oriented positioning. These illustrations use no fill, relying entirely on line weight and perspective for presence.

Dotted vertical lines create a subtle background texture across most sections, suggesting graph paper or engineering drafting paper. This pattern remains low-contrast, appearing as pale green dots on the gray canvas, and establishes a consistent spatial rhythm without demanding attention. The dots align with the 4px base grid, reinforcing the systematic nature of the design.

Organic mint shapes provide the primary counterpoint to the technical precision. A large amorphous blob appears in the lower content area, filled with a soft mint gradient and outlined in darker green. This shape contains an interactive shuffle control—a small white pill with a dot indicator and text label—suggesting generative or randomized content. The contrast between rigid wireframes and fluid organic forms creates visual tension that mirrors the "art and science" messaging in the copy.

The hero canvas introduces a fourth motif: data visualization as ambient background. A blue path winds through scattered particles, with denser clustering on the left (chaos) resolving to cleaner lines on the right (clarity). Small circular markers and star-like sparkles populate the field, creating depth through scale variation. This living illustration serves as both decoration and narrative, communicating the product value proposition without requiring reading.

## Components

**Primary Action Button**
- Anatomy: Text label centered within a pill-shaped container
- Surface and text color: Deep green fill (#1a7a1a) with white text (#ffffff)
- Typography: Denim Semi Bold at 1rem, line height 1.6
- Shape and border: Fully rounded pill with 9999px radius, no border
- Spacing: 0.75rem vertical padding, 1.5rem horizontal padding
- Composition: Inline or centered within panels, often paired with descriptive text above
- Variants: A secondary variant uses transparent fill with green border and green text for lower-priority actions

**Section Label Pill**
- Anatomy: Uppercase text within a rounded rectangular border
- Surface and text color: Transparent background with green text (#1a7a1a) and matching border
- Typography: GT Cinetype Regular at 0.75rem, letter spacing 0.05em, uppercase transformation
- Shape and border: 1px solid green border with 9999px pill radius
- Spacing: 0.25rem vertical padding, 0.75rem horizontal padding
- Composition: Prefixed with a roman numeral or section identifier, positioned above related content blocks

**Team Expandable Row**
- Anatomy: Horizontal row with name, role, and expand indicator; expanded state reveals portrait and biography
- Surface and text color: Transparent background, green text (#1a7a1a), with subtle top border (#b8d4b8)
- Typography: Name in Denim Regular at 1rem, role in same weight, biography in Denim Regular at 1rem with standard leading
- Shape and border: Full-width row with 1px top border, no side borders or background fill
- Spacing: 0.75rem vertical padding, portrait at approximately 5rem diameter with circular mask
- Composition: Stacked vertically with consistent row height, expansion pushes subsequent content downward
- Variants: Expanded state shows circular portrait left-aligned with biography text to the right, followed by social link row in smaller text

**Table of Contents Navigation**
- Anatomy: Fixed vertical panel with section list, progress indicator, and nested subsection structure
- Surface and text color: Pale gray background matching canvas, inactive items in muted green (#5a8a5a), active item in black (#000000) with filled circle indicator
- Typography: Denim Regular at 0.875rem for section titles, same family at smaller size for subsections
- Shape and border: No visible border, separated from content by whitespace alone
- Spacing: Compact vertical stacking with approximately 0.5rem between items, nested subsections indented
- Composition: Right-aligned, viewport-fixed, with percentage progress displayed at bottom ("18/100%")
- Variants: Active state uses filled circle; inactive states use hollow circles; subsection items use dash prefix instead of circle

**Hero Canvas Panel**
- Anatomy: Full-viewport animated background with floating badge overlay
- Surface and text color: Deep green polygon panel (#1a7a1a) with white text for waitlist section; pale gray with green text for main hero
- Typography: Hero display size for primary headline, body size for supporting description
- Shape and border: Irregular polygon with rotation transform, creating dynamic asymmetry
- Spacing: Generous internal padding, content centered within rotated bounds
- Composition: Layered above dotted grid background, with secondary polygon shapes creating depth through overlap

**Shuffle Control**
- Anatomy: Small pill button with dot indicator and text label, positioned adjacent to organic shape
- Surface and text color: White fill with black text and black dot indicator
- Typography: Denim Regular at 0.875rem or smaller
- Shape and border: Rounded pill with subtle shadow, no border
- Spacing: Compact padding, positioned to overlap or sit immediately beside mint organic shape
- Composition: Appears as a trigger for generative content, suggesting interaction without explicit button styling

## Responsive behavior

The design appears optimized for desktop viewing, with the centered content column and fixed TOC navigation suggesting a primary breakpoint above 1024px. At narrower viewports, the TOC should collapse to a horizontal scroll or hamburger menu to preserve content width. The hero canvas maintains its aspect ratio through view height rather than fixed pixels, ensuring the data visualization remains visible across screen sizes.

The three-column footer grid should stack to single column on tablet and below, with the large left margin preserved for the Operate wordmark. Team rows should maintain their horizontal layout but may reduce portrait size and stack biography below rather than beside on narrow screens.

The rotated waitlist panel presents a particular challenge: its dramatic angle may require reduced rotation or simplified polygon shape at smaller sizes to prevent content clipping. The pill-shaped buttons and labels should maintain their proportions, with text size reducing to the 0.875rem navigation token if necessary.

Touch targets for the shuffle control and team row expanders should maintain minimum 44px height for accessibility. The dotted grid background may become visually noisy on high-density mobile screens and could be simplified or removed below 768px.

## Practical implementation guidance

**Preserve**
- The strict green monochromy with mint and blue accents; this limited palette is central to brand recognition
- The pairing of Denim for reading matter with GT Cinetype for technical labels; the contrast in voice between these families supports the editorial personality
- The dotted grid background texture; it provides spatial rhythm without competing with content
- The wireframe illustration style with no fill and consistent line weight
- The organic mint shapes as the sole soft, non-geometric visual element
- The roman numeral section numbering system and uppercase label pills

**Avoid**
- Introducing additional accent colors beyond the established green, mint, and blue family
- Using Denim for small uppercase labels where GT Cinetype's engineered character is intended
- Removing the dotted grid entirely; the page loses its technical, crafted quality without this texture
- Making the hero canvas static; the ambient animation is essential to the immersive first impression
- Centering all content; the asymmetric TOC and offset illustrations require intentional asymmetry

**Recommended build order**
1. Establish the 4px base grid and pale gray canvas background
2. Implement Denim and GT Cinetype with the full type scale
3. Build the dotted grid background pattern as a repeating CSS gradient or SVG
4. Create the hero canvas with particle system and blue data path (Canvas or WebGL)
5. Construct the centered content column with section spacing
6. Add the fixed TOC navigation with scroll progress tracking
7. Implement button and label components with pill shapes
8. Build expandable team rows with circular portrait masks
9. Create the rotated waitlist panel with polygon clip-path
10. Add organic mint shapes with shuffle interaction
11. Polish footer grid and colophon layout

**Accessibility**
- Ensure the green text (#1a7a1a) on pale gray (#e0e0e0) meets WCAG AA contrast ratios; the combination appears to pass for large text but should be verified for body copy
- Provide reduced-motion alternatives for the hero canvas animation; a static version with the data path frozen should be available
- Ensure the TOC progress indicator communicates state through more than color alone; filled versus hollow circles provides shape differentiation
- Maintain keyboard focus visibility on the shuffle control and team row expanders, which use non-standard interactive styling
- Consider adding aria-labels to the wireframe illustrations if they convey meaningful content beyond decoration

## Scope note

This guide covers the Operate landing page as a single long-scroll experience, including the hero canvas, editorial content sections, team roster, waitlist form, and footer. Mobile layouts, additional pages, and application interface components are not represented in the source material. Motion specifications, hover states, and form validation styling were not retained. Measurements are practical adaptation targets derived from visible relationships in the supplied images.
