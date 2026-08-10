# How venice.inc is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/venice.inc-design)

Last updated: 2026-08-10

## Captured pages

[![Book-a-call page with calendar widget, partner logos, and testimonial quote on clean white canvas](https://pin.fontofweb.com/5687?format=jpg)](https://design.withfudge.com/share/pin-5687)

[Book-a-call page with calendar widget, partner logos, and testimonial quote on clean white canvas](https://design.withfudge.com/share/pin-5687)

[![About page hero with palm-tree illustration, centered serif manifesto, and dotted rule separator](https://pin.fontofweb.com/5686?format=jpg)](https://design.withfudge.com/share/pin-5686)

[About page hero with palm-tree illustration, centered serif manifesto, and dotted rule separator](https://design.withfudge.com/share/pin-5686)

[![Partner logo grid with twelve technology company marks and dotted border frame](https://pin.fontofweb.com/5685?format=jpg)](https://design.withfudge.com/share/pin-5685)

[Partner logo grid with twelve technology company marks and dotted border frame](https://design.withfudge.com/share/pin-5685)

[![Team portrait grid with fifteen headshots, handwritten-style name labels, and dotted rule accents](https://pin.fontofweb.com/5684?format=jpg)](https://design.withfudge.com/share/pin-5684)

[Team portrait grid with fifteen headshots, handwritten-style name labels, and dotted rule accents](https://design.withfudge.com/share/pin-5684)

## Overview

Venice Inc. presents itself as a design consultancy with an editorial, almost literary sensibility. The visual system rejects the homogenized aesthetic of contemporary SaaS landing pages in favor of classical typography, generous negative space, and restrained ornamental detail. The experience unfolds like a well-typeset document: large serif headings establish tone, Swiss sans-serif body copy delivers information with clarity, and a handwritten script face injects warmth and personality at specific moments.

The design operates on a principle of contrast and restraint. Black ink on white canvas dominates. Muted gray tones recede into supporting roles. A single green accent appears sparingly, reserved for functional states like calendar availability indicators. The overall impression is of a studio that values craft over novelty—sophisticated without being austere, personable without being casual.

## Colors

The palette is intentionally minimal, derived from the visible interface rather than photographic content. Four distinct colors anchor the system, with two additional functional tones.

| token | value | use |
|---|---|---|
| ink | #1A1A1A | Primary text, headings, calendar selected states |
| muted-ink | #6B6B6B | Secondary text, body copy, captions, partner logos at rest |
| canvas | #FFFFFF | Page background, card surfaces, input fields |
| surface | #F5F5F5 | Calendar day cells, subtle container backgrounds |
| border | #D4D4D4 | Hairline rules, card borders, calendar grid lines |
| accent | #22C55E | Availability indicators, active states, success markers |

The color logic follows a strict hierarchy. Ink and canvas form the fundamental figure-ground relationship. Muted-ink creates readable hierarchy without introducing a second dark value. Border serves as the lightest structural tone, appearing in dotted rules and calendar chrome. Surface provides the only departure from pure white for contained elements. The accent green functions as a signal color only—never as decoration—appearing as small dots beside available time slots in the booking interface.

No dark mode is visible in the supplied material. The system assumes light canvas throughout.

## Typography

Three type families collaborate across distinct roles. Office Times Sharp, a contemporary serif with classical proportions, handles all display and editorial headings. Suisse Intl, a neo-grotesque from Swiss Typefaces, manages body copy, labels, and interface text. Caveat, a casual brush script, appears exclusively for personal touches like team member names.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Office Times Sharp | 2.5rem | 400 | 1.2 | -0.01em | Page titles, manifesto statements |
| section-display | Office Times Sharp | 2rem | 400 | 1.25 | -0.01em | Section headings, team header |
| body | Suisse Intl | 1rem | 400 | 1.6 | 0em | Paragraphs, descriptions, form labels |
| body-small | Suisse Intl | 0.875rem | 400 | 1.5 | 0em | Captions, metadata, calendar text |
| label | Suisse Intl | 0.75rem | 400 | 1.4 | 0.02em | Uppercase labels, navigation |
| handwritten | Caveat | 1.25rem | 400 | 1.3 | 0em | Team names, personal annotations |

The type scale builds from a 4px relative unit. Display sizes use 40px and 32px respectively. Body sizes descend through 16px, 14px, and 12px. The handwritten token at 20px bridges display and body, large enough to read as intentional personality rather than annotation.

Office Times Sharp and Suisse Intl both appear at Regular weight only in the visible material. No Medium, Semibold, or Bold variants are confirmed. Weight variation is achieved through size and color contrast rather than heavier strokes.

Suisse Intl is designed and distributed by Swiss Typefaces. Verify licensing for these families before production use.

## Layout

The layout philosophy centers on centered, single-column composition with generous vertical breathing room. Content blocks stack with substantial section spacing, creating a scroll experience that feels unhurried and editorial.

The maximum content width appears constrained to a comfortable reading measure, approximately 640px for text-heavy sections and wider for grids and structured components. Horizontal margins are substantial on desktop, pushing content toward the optical center of the viewport.

Vertical rhythm follows a 4px base unit. Section spacing uses 96px (6rem) between major content blocks. Component internal padding uses 24px (1.5rem) for comfortable touch targets and visual separation. The calendar widget demonstrates a more complex layout: three-column structure with host information left, month grid center, and time selection right, all within a bordered container.

Alignment is predominantly center for editorial content and left for functional interfaces. The manifesto text, partner heading, and team introduction all center-align. The calendar widget, by contrast, left-aligns its internal labels and grid headers. This creates a useful pattern: editorial content centers to create presence, tools left-align for scannability.

## Visual language

The visual language distinguishes itself through three signature elements: dotted ornamental rules, a restrained illustration style, and the deliberate pairing of formal and informal type treatments.

Dotted rules appear as horizontal bands framing content sections. These are not solid hairlines but patterns of small dots, creating a texture that feels both digital and craft-oriented. They appear above and below the partner logo grid and at section boundaries, acting as visual punctuation rather than structural dividers.

Illustrations follow a monochrome, line-art approach. The palm tree on the about page and the calendar icon on the booking page share a sketch-like quality—thin strokes, minimal fill, slightly imperfect contours. These feel hand-drawn rather than geometric, reinforcing the studio's emphasis on human craft.

The type contrast between Office Times Sharp's classical authority and Caveat's casual warmth creates a distinctive voice. Team member names in script beneath formal portrait photography feel personal and approachable. The manifesto's italicized "memorable" in a serif context adds emphasis without breaking typographic discipline.

Photography, where it appears, is straightforward headshot style: neutral backgrounds, natural lighting, direct gaze. No heavy filters or treatments. The images sit in simple bordered cards with rounded corners, letting the subjects rather than the frames carry personality.

## Components

### Calendar Widget

The booking interface presents a three-panel layout within a rounded rectangular container.

- **Anatomy**: Host profile column (avatar, name, meeting type, duration, platform, timezone), month grid center, time selection right panel with format toggle
- **Surface**: White canvas background, light gray surface for unselected day cells, dark ink fill for selected date
- **Typography**: Host name in body-small weight, meeting title in section-display, grid labels in label size, time slots in body-small
- **Shape**: 0.5rem rounded corners on the outer container, subtle border in border color
- **Spacing**: 1.5rem internal padding, comfortable gaps between day cells
- **Composition**: Asymmetric three-column layout with flexible center grid
- **States**: Selected date shows white text on ink background; available times show green accent dot; unavailable times appear muted

### Team Portrait Card

Individual team member presentations combine photography with handwritten identification.

- **Anatomy**: Square portrait image, handwritten name label below, optional thin border
- **Surface**: White canvas card with subtle border or shadow
- **Typography**: Name in handwritten token, centered beneath image
- **Shape**: Slightly rounded corners on card, approximately 0.375rem
- **Spacing**: Tight internal composition with minimal gap between image and name
- **Composition**: Grid arrangement with consistent gaps, five columns visible in supplied layout
- **Variants**: No visible hover or active states in still images

### Partner Logo Grid

Client and partner recognition displayed as a muted mark collection.

- **Anatomy**: Centered heading, grid of monochrome logos, dotted rule frame above and below
- **Surface**: Transparent or white background, logos at reduced opacity
- **Typography**: Heading in section-display, centered
- **Composition**: Four-column grid with three rows, evenly distributed
- **States**: Logos appear uniformly muted; no visible hover treatment

### Manifesto Block

Editorial text presentation for philosophy and positioning statements.

- **Anatomy**: Centered illustration above, stacked heading lines, multiple paragraphs
- **Surface**: Pure white canvas, no container border
- **Typography**: Heading in hero-display, body in body token with generous line height
- **Spacing**: Substantial vertical space between illustration, heading, and paragraphs; paragraph spacing at 1.5rem
- **Composition**: Narrow centered column, approximately 480px maximum width for optimal reading

### Dotted Rule

Ornamental horizontal divider.

- **Anatomy**: Full-width band of repeated dot pattern
- **Surface**: Transparent background, dots in border color
- **Spacing**: 1.5rem vertical margin from adjacent content
- **Composition**: Centered, extending most of content width but not full bleed

## Responsive behavior

The supplied images show desktop presentation only. Based on the visible layout patterns, several responsive adaptations are recommended.

The calendar widget's three-column layout should stack vertically on narrow viewports: host information first, then date grid, then time selection. The month grid may require horizontal scroll or a compact week view below approximately 768px.

The team portrait grid's five-column arrangement should reduce to three columns on tablet and two columns on mobile, maintaining card proportions and readable name labels.

The manifesto block's narrow centered column should expand to comfortable mobile margins, approximately 1.5rem on each side, while preserving its centered alignment and generous line height.

Partner logos should remain in a multi-column grid but reduce to two columns on mobile to maintain legible mark sizes.

The dotted rules should remain visible at all widths, potentially scaling their dot density to prevent visual noise on narrow screens.

## Practical implementation guidance

### Preserve
- The strict hierarchy between Office Times Sharp display type and Suisse Intl body copy; this pairing defines the brand voice
- Generous white space around every content block; the editorial quality depends on breathing room
- The dotted rule motif as a recurring ornamental element, not merely a one-off decoration
- The handwritten names for team members; this specific humanizing detail separates the experience from generic corporate presentation
- The monochrome illustration style with its thin, slightly imperfect line quality

### Avoid
- Introducing additional accent colors beyond the functional green; the palette's restraint is intentional
- Using bold or heavy weights where Regular suffices; the system achieves hierarchy through size and color, not weight
- Crowding the calendar widget with additional chrome or decorative elements; its clarity is functional
- Replacing the dotted rules with solid lines or more conventional dividers; the dot pattern is distinctive
- Center-aligning long paragraphs of body text; center alignment should be reserved for short editorial statements and headings

### Recommended Build Order
1. Establish the 4px base unit and type scale with Office Times Sharp and Suisse Intl loaded
2. Implement the manifesto block with centered composition and proper measure constraints
3. Build the dotted rule as a reusable component with consistent spacing
4. Create the team portrait card with image, handwritten label, and grid container
5. Develop the calendar widget with its three-panel layout and state management
6. Add the partner logo grid with opacity treatment and dotted frame
7. Polish spacing, vertical rhythm, and responsive breakpoints

### Accessibility
- Ensure the green accent dots in the calendar meet minimum contrast against their background; the small size may require darker green or larger indicators
- Provide visible focus states for all interactive calendar elements; the current selected state uses color alone
- Maintain readable text sizes; the label token at 0.75rem should be used sparingly and never for essential information
- Consider adding aria-labels to the dotted rules if they convey structural meaning, or hide them from screen readers as purely decorative
- Ensure the handwritten Caveat text remains legible at its intended size; the casual style may challenge some readers if used for critical content

## Scope note

This guide covers the about page and book-a-call page surfaces visible in the supplied images. The homepage, navigation system, footer, and any additional pages are not represented. Motion, hover states, form validation, and mobile-specific layouts are not documented. Measurements are practical adaptation targets based on visual estimation from the available material.
