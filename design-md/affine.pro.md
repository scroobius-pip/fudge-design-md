# How affine.pro is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/affine.pro-design)

Last updated: 2026-08-04

## Captured pages

[![White collaboration hero with blue action button and dotted canvas](https://pin.fontofweb.com/4159?format=jpg)](https://design.withfudge.com/share/pin-4159)

[White collaboration hero with blue action button and dotted canvas](https://design.withfudge.com/share/pin-4159)

[![Template grid with three rounded cards and soft shadowed previews](https://pin.fontofweb.com/4160?format=jpg)](https://design.withfudge.com/share/pin-4160)

[Template grid with three rounded cards and soft shadowed previews](https://design.withfudge.com/share/pin-4160)

[![Four-card feature matrix with diagram-like illustrations and labels](https://pin.fontofweb.com/4158?format=jpg)](https://design.withfudge.com/share/pin-4158)

[Four-card feature matrix with diagram-like illustrations and labels](https://design.withfudge.com/share/pin-4158)

[![Centered download section with stacked blue and outlined buttons](https://pin.fontofweb.com/4156?format=jpg)](https://design.withfudge.com/share/pin-4156)

[Centered download section with stacked blue and outlined buttons](https://design.withfudge.com/share/pin-4156)

[![Cloud feature grid with stacked cards and colored section headings](https://pin.fontofweb.com/4155?format=jpg)](https://design.withfudge.com/share/pin-4155)

[Cloud feature grid with stacked cards and colored section headings](https://design.withfudge.com/share/pin-4155)

[![Accordion FAQ block with thin dividers and expanded answer row](https://pin.fontofweb.com/4161?format=jpg)](https://design.withfudge.com/share/pin-4161)

[Accordion FAQ block with thin dividers and expanded answer row](https://design.withfudge.com/share/pin-4161)

## Overview

AFFiNE's visual system is a clean white workspace with a strong product voice. Black Inter type carries almost all of the hierarchy, a single saturated blue handles action, and rounded cards keep the page calm even when the content becomes dense. The site presents whiteboard thinking, note taking, downloads, and pricing as one family of surfaces rather than as separate brand moods.

The design feels technical but not sterile. Dotted fields, connector lines, small interface labels, and stacked panels make the product look like a place for building and organizing ideas. Pastel blocks and bright diagram colors soften the layout and give each section a distinct accent without breaking the white base. Kalam appears only as a secondary handwritten accent, which adds a sketched, workshop-like note against the otherwise precise grid.

## Colors

The system stays light. White and off-white surfaces do most of the work, while black text and thin gray borders give structure. Blue is the only persistent action color. The other hues are local accents for diagrams, labels, sticky-note shapes, and illustrative modules. There is no full dark page mode in the material here; instead, the design uses dark ink, gray dividers, and small shadow values to keep the page legible and airy.

| token | value | use |
|---|---|---|
| action | `#2999EA` | Primary CTA fills, active links, selected diagram edges |
| ink | `#000000` | Headings, body text, icon strokes, strong contrast copy |
| muted-ink | `#646664` | Supporting paragraphs, accordion answers, secondary labels |
| canvas | `#F7F8F6` | Overall page background and breathing room between sections |
| surface | `#FFFFFF` | Cards, white panels, FAQ rows, and button bases |
| surface-raised | `#F6F6F4` | Slightly lifted panels and nested blocks |
| border | `#B2B3B3` | Hairline outlines, dividers, card edges, outlined buttons |
| accent-blue-soft | `#A4CBEC` | Connector lines, diagram fills, secondary highlights |
| accent-lilac | `#D4D1F6` | Soft illustration blocks and note-like tiles |
| accent-yellow | `#F0C52B` | Marker shapes, sticky-label accents, standout diagram nodes |
| accent-green | `#A0CD7B` | Status chips, supportive diagram fills, small success cues |
| accent-peach | `#EFBDB1` | Warm panel fills and soft background blocks |
| accent-orange | `#F28B6E` | Small emphasis labels and contrast accents in feature art |

The relationship between colors is straightforward: light surfaces create the stage, ink carries the message, blue signals intent, and the remaining accents stay contained inside diagrams or product illustrations. That keeps the interface from turning colorful in every direction at once. The page works best when accent colors remain local and the surrounding canvas stays quiet. Interactions should still lean on blue first, with pastel hues reserved for content illustration rather than navigation.

## Typography

Inter is the main family throughout the site. It carries headlines, body copy, small labels, and button text with a compact, modern shape that fits the workspace theme. Kalam appears as a secondary hand-drawn note voice for sketched annotations, handwritten-style callouts, or playful labels. Inter is credited to Rasmus Andersson and Rsms; confirm Kalam reuse separately.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3.5rem | 700 | 1.05 | -0.04em | Large landing headlines and opening claims |
| section-display | Inter | 2.5rem | 700 | 1.08 | -0.03em | Section titles such as download, pricing, or feature blocks |
| feature-display | Inter | 2rem | 700 | 1.1 | -0.025em | Strong supporting statements inside hero or feature rows |
| card-title | Inter | 1.125rem | 600 | 1.2 | -0.02em | Template names, feature captions, and card headers |
| body | Inter | 1rem | 400 | 1.6 | 0em | Explanatory copy, FAQ answers, and supporting text |
| body-medium | Inter | 1rem | 500 | 1.5 | 0em | Buttons, tabs, and emphatic inline labels |
| label | Inter | 0.875rem | 500 | 1.2 | 0.01em | Small metadata, tab labels, and utility text |
| handwritten-note | Kalam | 1.25rem | 400 | 1.1 | 0em | Sketched notes and notebook-like accents |

The hierarchy depends on weight, scale, and tight letter spacing rather than on many families. Headlines are bold and compact. Body text opens up enough to breathe, but not so much that the page feels loose. Small labels stay crisp and neutral. Kalam should remain a garnish: use it to suggest drawing or annotation, not to replace the core information hierarchy.

## Layout

The page uses a wide, centered marketing structure with generous white space and large, simple blocks. Most sections read as a title plus a structured content area underneath. The hero pairs a left-aligned statement with a right-side canvas of cards, connectors, and diagram-like objects. Below that, template previews and feature cards form shallow grids that let the illustrations do the explaining.

Spacing is broad but not empty. Sections breathe with large vertical separation, while card groups stay close enough to feel like a system. The visual rhythm comes from alternating between text-forward blocks and object-heavy blocks: a hero that feels like a whiteboard, a template gallery that feels like a library shelf, a feature matrix that feels like a set of modules, and a download area that feels like a clear endpoint.

Cards and panels follow the same shape language. White surfaces sit on a soft off-white canvas, outlines stay thin, corners are rounded, and depth comes from a restrained shadow rather than a strong frame. That makes the page feel polished without becoming glossy. When there is a diagram field, the field itself becomes part of the layout: dotted backgrounds, curved connector paths, and floating labels create structure without adding extra borders.

The layouts shown here favor one dominant reading path per section. Copy stays short, buttons are close to the claim they support, and illustrations sit beside or beneath the text rather than competing with it. That keeps the page readable even when the visual content becomes playful.

## Visual language

AFFiNE uses a whiteboard vocabulary translated into marketing pages. Floating cards, tiny windows, connector lines, nodes, labels, and dotted fields make the product feel collaborative and modular. The language is friendly but disciplined: simple outlines, soft shadows, and limited color bursts keep the composition from turning busy.

The illustrations do much of the expressive work. Some blocks look like app windows, some look like template sheets, and some look like pinned cards or movable notes. Blue outlines suggest selection and connection. Yellow, lilac, green, peach, and cyan appear as local fills, chips, or small markers, which gives the page a made-by-hand feeling even though the shapes stay precise. The result is a system that can explain structure, flow, and organization without needing heavy ornament.

The page also uses contrast carefully. Large black headlines sit on open white fields. Smaller gray copy sits close to the headline or inside cards. The little shadow under a card or button is enough to lift it from the canvas. That restraint is important: the content already has motion and complexity through diagrams and multi-card layouts, so the styling should stay calm.

## Components

### Hero stage

- **Anatomy:** A large headline, a short supporting line, one blue primary button, and a diagram or card composition on the opposite side.
- **Typography:** Use the biggest Inter display size for the opening claim, then step down quickly to body copy.
- **Surface:** White or near-white canvas with no heavy frame.
- **Composition:** Keep the text block left aligned and the visual canvas right aligned on desktop. The visual side should feel like a working board, not a decorative poster.
- **Visible state:** Blue is the only strong action cue; the button should read as the clear next step.

### Template cards

- **Anatomy:** Thumbnail preview, template title, and a small directional cue or footer action.
- **Surface:** White cards with thin borders and a soft shadow.
- **Typography:** Card titles should stay bold enough to stand apart from the preview art, but smaller than hero text.
- **Shape:** Rounded corners with enough radius to feel friendly, not pill-shaped.
- **Spacing:** Keep the preview, title, and action tightly grouped so each card reads as a single unit.
- **Variants:** The grid can hold notebooks, trackers, or planning templates, but the card structure stays the same.

### Feature matrix cards

- **Anatomy:** Multiple cards in a grid, each with a short heading and a diagram-like illustration inside the card.
- **Surface:** White panels on a white or very pale background, with color used inside the illustration rather than on the whole card.
- **Composition:** Each card should contain a complete mini story: label, graphic, and a short caption.
- **Visible states:** Some cards use selected-outline styling, others use soft fills; both should remain visually light.
- **Hierarchy:** The illustration should be strong enough to explain the feature at a glance, while the caption keeps the message grounded.

### Download block

- **Anatomy:** Centered icon or app mark, a bold title, supporting copy, a blue primary button, and a secondary outlined button.
- **Typography:** The title can use section-display scale; the supporting line should stay concise.
- **Surface:** Centered white block with generous breathing room.
- **Shape:** Both buttons should be rounded pills, with the secondary option carrying a neutral border and dark text.
- **Composition:** The primary button should read as the recommended next action. The secondary button should stay visibly quieter but still clear.

### Cloud and account feature cards

- **Anatomy:** Headline, short description, and a cluster of supporting cards or screenshots.
- **Surface:** White cards with color-coded labels and nested content areas.
- **Composition:** Use the heading to set the topic, then let the internal cards show the workflow or data state.
- **Variants:** Some cards are compact and stacked; others are wider and more editorial. Both keep the same border and corner language.
- **Visible states:** Small colored tags and section headings help separate the cards without adding heavy dividers.

### FAQ accordion

- **Anatomy:** Stacked rows with question text, a chevron, and an expanded answer area.
- **Surface:** White panel with thin horizontal separators.
- **Typography:** Questions should feel slightly stronger than the answer text; answers should use muted ink.
- **Spacing:** Keep each row generous enough to tap comfortably, with enough padding that the expanded state feels calm.
- **Visible states:** Expanded rows should open within the same card field rather than spilling into a different panel style.

## Responsive behavior

On narrower screens, the hero should stack before it compresses. Text comes first, then the diagram canvas, then any card grid. Template cards should fall from three columns to two, then to one, while keeping their previews large enough to be useful. Feature cards should keep a clear title and enough internal padding so the illustrations do not crowd the captions.

Buttons should remain easy to tap and visually separated from surrounding copy. The FAQ should stay as full-width rows with a clear toggle target. Long headings may need to wrap to two or three lines, but line breaks should keep the same strong left edge and the same compact rhythm. The system should never rely on tiny detail text to carry the main message on mobile.

Diagram-heavy sections need special care on small widths. Connector lines, floating labels, and node clusters should simplify rather than shrink into clutter. If a card cannot preserve its internal structure at a smaller width, it should become a cleaner stacked composition instead of a squeezed replica. The white base, black text, and blue CTA should remain intact at every size.

## Practical implementation guidance

### Preserve

- Keep the page mostly white and let ink do the heavy lifting.
- Use the blue action color consistently for primary intent.
- Preserve the rounded card language and the light shadow treatment.
- Let diagrams, template previews, and card galleries explain the product visually.
- Keep Kalam secondary and limited to handwritten-style accents.

### Avoid

- Avoid heavy gradients across whole sections.
- Avoid turning every panel into a colored block.
- Avoid deep shadows, dense borders, or boxed-in layouts.
- Avoid using more than one strong action blue.
- Avoid letting handwritten text take over the main hierarchy.

### Recommended build order

1. Establish the Inter hierarchy and the blue button treatment.
2. Build the base card, panel, and accordion surfaces.
3. Assemble the hero with its diagram canvas.
4. Add the template gallery and feature matrix grids.
5. Build the download block and cloud feature cards.
6. Finish the FAQ and verify spacing consistency across sections.

### Accessibility

- Keep black text on white or near-white surfaces wherever possible.
- Make sure outlined buttons have enough border contrast to read as interactive.
- Keep visible focus states distinct from the thin neutral borders.
- Do not rely on color alone to explain status or selection inside diagrams.
- Keep target sizes generous for buttons, accordion rows, and card actions.

## Scope note

This guide covers AFFiNE's desktop marketing surfaces shown here: the collaboration hero, template gallery, feature cards, download block, cloud feature grid, and FAQ accordion. It does not define the editor canvas, mobile navigation, motion, or other states not shown. Measurements are practical adaptation targets.
