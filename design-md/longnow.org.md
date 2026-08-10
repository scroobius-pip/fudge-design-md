# How longnow.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/longnow.org-design)

Last updated: 2026-08-10

## Captured pages

[![Dark brown project showcase with white serif headlines, line-art diagrams of the 10,000-year clock and Rosetta archive, and cream accent links for The Interval.](https://pin.fontofweb.com/3880?format=jpg)](https://design.withfudge.com/share/pin-3880)

[Dark brown project showcase with white serif headlines, line-art diagrams of the 10,000-year clock and Rosetta archive, and cream accent links for The Interval.](https://design.withfudge.com/share/pin-3880)

[![Deep plum quote section with Brian Eno attribution in cream caps, italic serif labels, and white timeline graphics illustrating expanding concepts of now.](https://pin.fontofweb.com/3879?format=jpg)](https://design.withfudge.com/share/pin-3879)

[Deep plum quote section with Brian Eno attribution in cream caps, italic serif labels, and white timeline graphics illustrating expanding concepts of now.](https://design.withfudge.com/share/pin-3879)

## Overview

The Long Now Foundation's website presents a visual language of deliberate permanence and intellectual gravity. The design rejects contemporary brightness in favor of warm, dark grounds that evoke aged wood, deep time, and the quiet of a library or observatory. White serif typography stands in sharp relief against these surfaces, creating a reading experience that feels both archival and immediate. The system is built around two primary typefaces: Eb Garamond, a classical serif with generous proportions and distinctive italic forms, and Barlow, a neutral sans-serif that handles labeling and navigation with quiet efficiency. Color is used sparingly—a warm cream accent appears only to mark links and attributions, drawing the eye without breaking the contemplative mood. Line-art diagrams, rendered in pure white, serve as the primary visual content, translating complex concepts into clean geometric forms. The overall composition is vertically rhythmic, with generous breathing room between sections and a consistent left-aligned text block that anchors the reader's journey through long-form content.

## Colors

The palette is intentionally constrained, built on dark warm grounds with high-contrast white text and a single cream accent. Every color serves a specific atmospheric or functional role.

| token | value | use |
|---|---|---|
| ink | #ffffff | Primary text, headlines, diagram strokes, and all line art on dark grounds |
| muted-ink | #e8ddd0 | Secondary text, captions, diagram labels, and supporting descriptions |
| accent | #f5e6c8 | Linked text, attribution names, and interactive highlights |
| canvas | #2a1810 | Primary section background for project showcases and content areas |
| deep-canvas | #1a0f1a | Deeper background for quote sections and atmospheric transitions |
| surface | #3d2418 | Slightly elevated dark tone for subtle layering within sections |

The two canvas values create depth through temperature variation rather than brightness. The brown canvas carries warmth appropriate to wooden instruments and mechanical clocks, while the deep plum canvas introduces a cooler, more contemplative register for quoted wisdom and philosophical content. The accent cream is warm enough to feel organic against both grounds yet distinct enough to signal interactivity. White ink is reserved for primary communication and all diagrammatic work, ensuring maximum legibility and graphic clarity. No border colors or shadow values are employed; the system relies entirely on ground contrast and spatial rhythm to define hierarchy.

## Typography

The typographic system pairs a classical serif for all reading and display with a utilitarian sans-serif for structural labeling. Eb Garamond, designed by Georg Duffner and Octavio Pardo, provides the intellectual and historical character; Barlow handles the mechanical, informational layer.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Eb Garamond | 2.5rem | 700 | 1.1 | -0.01em | Project headlines and major section titles |
| section-display | Eb Garamond | 1.75rem | 400 | 1.2 | 0em | Sub-headlines and quote text |
| body | Eb Garamond | 1.25rem | 400 | 1.5 | 0em | Paragraph text and descriptions |
| body-italic | Eb Garamond-Italic | 1.25rem | 400 | 1.5 | 0em | Emphasized phrases, timeline labels, and editorial voice |
| label | Barlow | 0.75rem | 400 | 1.4 | 0.08em | Captions, attributions, diagram labels, and metadata |
| navigation | Barlow | 0.875rem | 400 | 1.2 | 0.05em | Navigation items and UI wayfinding |

Eb Garamond's italic is deployed as a distinct typographic voice rather than mere emphasis—it carries the editorial, reflective quality of the foundation's mission. Barlow's uppercase treatment with wide tracking creates a subtle mechanical rhythm that echoes the precision of clockwork without competing with the serif's humanism. All sizes are whole-number multiples of the 4px relative unit (0.25rem), ensuring consistent vertical alignment across the system. Verify licensing for these families before production use.

## Layout

The layout follows a disciplined single-column structure with asymmetric text-image pairing. Content flows vertically with substantial section breaks, creating a meditative pace appropriate to long-form reading about millennial timeframes.

The primary text block occupies roughly the left half of the viewport, set with comfortable measure for serif reading. Images and diagrams align to the right, often with captions beneath or integrated into the composition. This creates a consistent visual rhythm: text establishes context, diagram illustrates concept, white space allows contemplation.

Section spacing uses 6rem (24 units) as the standard vertical interval, with 2rem (8 units) for component gaps within sections. Text blocks maintain 1.5rem (6 units) between paragraphs and related elements. Edges remain sharp with zero border-radius, reinforcing the precision of technical drawing and the seriousness of the subject matter.

The quote section demonstrates a centered, more ceremonial layout—text aligns to the middle of the viewport, with attribution stacked beneath in a smaller scale. This centering creates a moment of pause in the otherwise left-aligned flow, marking quoted wisdom as distinct from explanatory content.

Horizontal padding is generous, keeping content clear of viewport edges and maintaining the spacious, unhurried character. The system avoids sidebars, cards, or complex grid arrangements; the simplicity of the layout mirrors the clarity of the foundation's long-term thinking.

## Visual language

The visual language is defined by restraint, precision, and the translation of abstract time into concrete form. Photography is absent; instead, white line art on dark grounds serves as the primary visual content. These diagrams—of clock faces, orbital paths, and conceptual timelines—function as both illustration and explanation, their spare geometry suggesting the elegance of engineered solutions to eternal problems.

The line art shares a consistent visual grammar: uniform stroke weight, minimal detail, and labels integrated directly into the composition. Captions sit close to their diagrams in small sans-serif type, creating a figure-ground relationship between image and explanation. The diagrams feel scientific yet accessible, like illustrations from a well-designed museum exhibit.

Color temperature shifts between sections create emotional modulation without visual noise. The warm brown of project descriptions evokes wood, brass, and the materiality of the 10,000-year clock. The deep plum of quote sections suggests night sky, deep space, and the contemplative mood of philosophical reflection. Both grounds allow white and cream to perform with maximum impact.

The absence of decorative elements, gradients, or shadows is deliberate. The system communicates through type, space, and line alone—materials that age well and remain legible across the very timescales the foundation considers. Every visual choice reinforces the core message: some things are worth designing to last.

## Components

**Project Showcase**

The project showcase presents institutional initiatives as a sequence of text-diagram pairs. Each entry follows a consistent anatomy: a bold serif headline, a descriptive paragraph, and a right-aligned line-art diagram with integrated caption.

- Surface: Background uses `canvas` (#2a1810) with no border or shadow
- Typography: Headlines in `hero-display`, body in `body`, links in `body` with `accent` color
- Shape: Rectangular panels with `rounded.panel` (0rem)
- Spacing: 6rem vertical padding between showcases, 2rem between headline and body, 1.5rem between body and diagram area
- Composition: Text block left-aligned at approximately 50% width, diagram right-aligned with caption beneath
- Variants: The Interval entry uses `accent` for the linked name, demonstrating how interactive elements are marked within body text

**Quote Block**

The quote block elevates spoken wisdom to a ceremonial presentation, centered and set apart by its deeper ground.

- Surface: Background uses `deep-canvas` (#1a0f1a)
- Typography: Quote text in `section-display`, attribution name in `label` with `accent` color and uppercase treatment, role descriptor in `label` with `muted-ink`
- Shape: Full-width section with `rounded.panel` (0rem)
- Spacing: Generous vertical padding (6rem or greater), centered text alignment
- Composition: Quote marks as part of the text content, attribution on a separate line with em-dash prefix
- Hierarchy: The attribution name receives color emphasis while the role remains subdued

**Timeline Diagram**

The timeline diagram visualizes expanding temporal scales through simple curved lines and vertical markers.

- Surface: Transparent, rendered directly on `deep-canvas`
- Stroke: `ink` (#ffffff) for primary curves and markers
- Typography: Scale labels in `body-italic` with `muted-ink`, time values in `body-italic` with `muted-ink`
- Shape: Smooth horizontal curves with peaked centers, vertical tick marks, directional arrowheads
- Spacing: Ample vertical space between timeline instances (multiple scales stacked)
- Composition: Centered within section, labels positioned above and below the curve

**Line Art Illustration**

Line art illustrations translate physical and conceptual objects into pure geometric form.

- Surface: Transparent, rendered on `canvas` or `deep-canvas` as appropriate
- Stroke: `ink` (#ffffff) with consistent weight throughout
- Typography: Captions in `label` with `muted-ink`, positioned beneath or adjacent to illustration
- Shape: Geometric simplification with essential detail only—clock faces show hands and chapter rings, orbital paths show ellipses and body positions
- Spacing: Illustration occupies roughly 40% of horizontal space, with caption margin-top of 1rem
- Variants: Some illustrations include integrated labels (planet names, object identifiers) in small sans-serif type

## Responsive behavior

The single-column structure with asymmetric pairing adapts straightforwardly. At narrower viewports, the text-diagram composition should stack vertically, with diagrams following their associated text blocks. The centered quote layout remains viable across widths, though horizontal padding should reduce proportionally.

Text sizes may scale down by one step on small viewports—hero-display from 2.5rem to 2rem, body from 1.25rem to 1.125rem—to maintain comfortable line lengths. The label and navigation sizes, already compact, can remain fixed.

Line art diagrams should maintain their aspect ratios and stroke weights; they may scale down proportionally or, if detail permits, become full-width elements beneath their text descriptions. Touch targets for any linked accent text should meet minimum 44px height.

The generous section spacing (6rem) should compress to 4rem on mobile to maintain rhythm without excessive scrolling. Horizontal padding should reduce from viewport-dependent values to a consistent 1.5rem or 2rem.

## Practical implementation guidance

**Preserve**
- The stark contrast of white serif on dark warm grounds; this is the system's essential character
- The pairing of Eb Garamond's classical forms with Barlow's neutral functionality
- The use of cream accent exclusively for links and attribution names, never for primary text
- The sharp, unrounded edges of all containers and panels
- The generous vertical spacing that creates contemplative pacing
- The line-art diagram style: uniform stroke, minimal detail, integrated captions

**Avoid**
- Introducing additional accent colors; the restrained palette is central to the identity
- Using shadows, gradients, or blur effects; the system relies on flat color and space
- Replacing line art with photography; the diagrammatic quality is distinctive
- Rounding corners or adding decorative borders; precision is part of the message
- Setting body text in sans-serif; the serif's readability and character are essential

**Recommended build order**
1. Establish the dark ground system with canvas and deep-canvas variables
2. Implement Eb Garamond at body and display sizes with appropriate line height
3. Add Barlow for labels and navigation with uppercase and tracking treatments
4. Build the project showcase component with text-diagram pairing
5. Create the quote block with centered layout and accent attribution
6. Develop the line-art rendering system with consistent stroke and caption placement
7. Apply the accent color selectively to interactive elements

**Accessibility**
- Ensure white text on dark grounds meets WCAG AA contrast ratios (the combination should exceed 7:1)
- Provide visible focus indicators for accent-colored links, using outline or underline rather than color change alone
- Maintain the semantic distinction between italic emphasis (Eb Garamond-Italic) and structural labels (Barlow uppercase)
- Consider offering a light-ground alternative for users with photophobia, preserving the typeface pairing and spacing rhythm
- Diagrams should include descriptive alt text or adjacent textual explanation, as the visual content carries substantive meaning

## Scope note

This guide covers the homepage project showcase and quote sections visible in the supplied images. Navigation, footer, interior pages, mobile layouts, motion behavior, and form elements are not represented. Measurements are practical adaptation targets.
