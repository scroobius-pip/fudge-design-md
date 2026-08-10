# How ruda-bureau.pro is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ruda-bureau.pro-design)

Last updated: 2026-08-10

## Captured pages

[![Dark contact section with large gray headline, email, phone, outlined button, social links, and a white architectural photograph of an arched doorway with steps.](https://pin.fontofweb.com/1118?format=jpg)](https://design.withfudge.com/share/pin-1118)

[Dark contact section with large gray headline, email, phone, outlined button, social links, and a white architectural photograph of an arched doorway with steps.](https://design.withfudge.com/share/pin-1118)

[![Light about section with black-and-white team photograph, large dark heading, and two team member profiles with names, titles, and education details.](https://pin.fontofweb.com/1117?format=jpg)](https://design.withfudge.com/share/pin-1117)

[Light about section with black-and-white team photograph, large dark heading, and two team member profiles with names, titles, and education details.](https://design.withfudge.com/share/pin-1117)

[![White process section with four numbered steps in a two-column grid and a large 3D-rendered spiral staircase image on the right.](https://pin.fontofweb.com/1116?format=jpg)](https://design.withfudge.com/share/pin-1116)

[White process section with four numbered steps in a two-column grid and a large 3D-rendered spiral staircase image on the right.](https://design.withfudge.com/share/pin-1116)

[![Services section with dark panel containing gray heading and outlined button, plus an expandable service row with bullet points and pricing.](https://pin.fontofweb.com/1115?format=jpg)](https://design.withfudge.com/share/pin-1115)

[Services section with dark panel containing gray heading and outlined button, plus an expandable service row with bullet points and pricing.](https://design.withfudge.com/share/pin-1115)

## Overview

RUDA Bureau's design system embodies a severe, gallery-like aesthetic drawn from architectural practice. The visual language operates through extreme contrast: expansive fields of warm off-white alternate with deep charcoal panels, creating a rhythm of revelation and enclosure. Typography dominates every surface—headlines are set at monumental scale in a clean sans-serif, treated as structural elements rather than mere labels. Photography of interiors, 3D renderings, and candid team portraits share a disciplined monochrome or near-monochrome treatment, reinforcing the bureau's focus on form, light, and material. The overall impression is of a portfolio that behaves like a physical exhibition space: measured pacing, generous margins, and an absolute hierarchy where content commands attention through scale and placement rather than ornament.

## Colors

The palette is intentionally austere, derived from architectural materials and natural light conditions. Four core colors establish the system's identity, with two additional tones for hierarchy and borders.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text on light surfaces, photograph borders, maximum contrast elements |
| canvas | #e8e8e8 | Primary page background, light section fills, warm neutral base |
| surface-dark | #232323 | Dark panel backgrounds, service cards, contact section fill |
| surface-darker | #1a1a1a | Deepest dark sections, maximum depth panels |
| muted-ink | #5c5c5c | Secondary text, captions, subdued labels on light backgrounds |
| light-ink | #8a8a8a | Tertiary text, placeholder headings on dark surfaces, social links |
| border-light | #d4d4d4 | Hairline borders for buttons, dividers, subtle separations |

The light mode dominates the experience: warm gray-white canvas serves as the ground for most content, with ink text providing sharp legibility. Dark surfaces appear as deliberate interruptions—full-bleed panels that isolate services, contact information, or calls to action. The dark panels use light-ink for de-emphasized display text and canvas for primary content, creating an inverted hierarchy that still respects the same contrast logic. No accent colors intrude; the only chromatic variation comes from photography, which is consistently desaturated to maintain system coherence.

## Typography

The type system relies on a single sans-serif family deployed across a wide scale range, from monumental display to functional caption. All sizes are whole-number multiples of the 4px base unit.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 4rem | 400 | 1 | 0.02em | Page titles, contact section headlines |
| section-display | Inter | 3.5rem | 400 | 1.05 | 0.01em | Section headings, service names, process steps |
| body-large | Inter | 1.25rem | 400 | 1.4 | 0 | Contact details, prominent descriptions |
| body | Inter | 1rem | 400 | 1.5 | 0 | Paragraph text, team biographies, bullet points |
| label | Inter | 1rem | 400 | 1.2 | 0.04em | Button text, navigation, uppercase labels |
| caption | Inter | 0.75rem | 400 | 1.3 | 0.02em | Small print, metadata, secondary annotations |

The visual character is distinctly architectural: uppercase setting is common for labels and buttons, while display text uses generous letter spacing to prevent dense clustering at large sizes. Weight remains consistently regular (400) throughout—emphasis is achieved through scale, spacing, and color rather than boldness. Line heights are tight for display sizes, expanding to comfortable reading measure for body text. Cyrillic characters are fully supported and proportioned.

Verify licensing for these families before production use.

## Layout

The layout follows an asymmetric editorial model with strong grid discipline. Major sections alternate between full-bleed light backgrounds and contained dark panels, creating a stately vertical rhythm.

**Grid and composition.** Content operates on a flexible two-column logic: text blocks occupy the left or center, while photography anchors the right or spans full width. The process section demonstrates a clear four-quadrant grid—two columns of text pairs with a large right-hand image occupying roughly 40% of the width. The about section places a large team photograph left of center with text offset to the right, breaking strict symmetry for visual interest.

**Section spacing.** Vertical padding between major sections is substantial, approximately 6rem, allowing each content block to breathe. Internal content gaps run at 2rem for related elements and 1.5rem for grid items. The contact section compresses vertical spacing slightly, stacking headline, contact methods, button, and social links in a tight left-aligned column against the dark ground.

**Responsive considerations.** The two-column layouts should stack vertically on narrower viewports, with photography preceding text to maintain visual hierarchy. The process grid's four steps should reflow to a single column, preserving their numerical sequence. Dark panels should remain full-bleed at all widths to maintain their spatial enclosure.

## Visual language

The visual language communicates authority through restraint. Every element is pared to essential form: zero border radius on all containers and buttons, single-pixel hairlines for borders, and an absolute minimum of decorative elements.

**Photography treatment.** All imagery follows a monochrome or near-monochrome discipline. Team photographs appear in black and white with documentary candor. Architectural photography emphasizes light, shadow, and material texture—white plaster, stone, water, and glass rendered in subtle tonal gradation. 3D renderings share this desaturated treatment, presenting idealized spaces as abstract compositions of curve and plane.

**Iconography and symbols.** The only visible symbol is the plus sign used in expandable service rows, rendered in the same weight as surrounding text. No other icons, badges, or ornamental marks appear.

**Surface behavior.** Flatness is absolute—no shadows, no gradients, no dimensional effects beyond the inherent depth of photography. Dark panels read as voids or recesses; light surfaces read as walls or planes. This architectural literalism extends to the treatment of text as inscribed information rather than floating elements.

## Components

**Outlined button**
- Anatomy: Text label centered within a rectangular border
- Surface: Transparent background with 1px border
- Typography: `{typography.label}`, uppercase
- Shape: `{rounded.button}` radius, sharp corners
- Spacing: 1rem vertical padding, 2.5rem horizontal padding
- Variants: Light variant uses `{colors.border-light}` border with `{colors.ink}` text; dark variant uses `{colors.light-ink}` border with `{colors.canvas}` text
- Composition: Typically left-aligned or centered within its container, never full-width

**Service row (expandable)**
- Anatomy: Full-width dark bar containing service name left-aligned, plus indicator right-aligned
- Surface: `{colors.surface-dark}` background, `{colors.canvas}` text
- Typography: `{typography.section-display}` for service name
- Shape: `{rounded.panel}` radius, sharp rectangular form
- Spacing: 1.5rem vertical padding, 2rem horizontal padding
- Composition: Sits flush with content edges; expanded state reveals bullet-point details and pricing below the bar on the light background

**Contact block**
- Anatomy: Stacked vertical arrangement of headline, email, phone, button, and social links
- Surface: `{colors.surface-dark}` full-bleed background
- Typography: Headline uses `{typography.hero-display}` in `{colors.light-ink}`; contact details use `{typography.body-large}` in `{colors.canvas}`; social links use `{typography.label}` in `{colors.light-ink}`
- Shape: All elements left-aligned with consistent left margin
- Spacing: Tight vertical stacking with approximately 1.5rem between major elements, 0.75rem between social links

**Process step**
- Anatomy: Numbered label above step title, with descriptive paragraph below
- Surface: Transparent on `{colors.canvas}` background
- Typography: Number uses `{typography.section-display}`; title uses `{typography.section-display}`; description uses `{typography.body}`
- Shape: Left-aligned text block
- Composition: Arranged in 2×2 grid with consistent horizontal and vertical gaps; right column occupied by large architectural image

**Team profile**
- Anatomy: Photograph above name, title, and biography
- Surface: Transparent on `{colors.canvas}` background
- Typography: Name uses `{typography.section-display}`; title uses `{typography.label}` in `{colors.muted-ink}`; biography uses `{typography.body}`
- Spacing: 2rem below photograph, 0.5rem between name and title, 1rem between title and biography

## Responsive behavior

The desktop layouts visible in the source material employ a generous viewport with substantial margins. For implementation, consider the following adaptive behavior:

- The two-column text-and-image sections should reverse stack on narrow viewports, placing the dominant photograph first to maintain visual interest
- Process step grids should collapse to a single column, preserving the 01–04 sequence vertically
- Service rows should remain full-width but may reduce horizontal padding; the plus indicator should maintain touch-friendly dimensions
- Display type should scale down proportionally, with hero-display reducing to approximately 2.5rem and section-display to 2rem on the narrowest viewports
- Dark panels should retain their full-bleed behavior; never constrain them with side margins that would break their spatial enclosure
- Contact block elements should remain left-aligned; avoid centering that would disrupt the deliberate asymmetry

## Practical implementation guidance

**Preserve**
- The absolute flatness of surfaces—no shadows, no gradients, no blur effects
- The monochrome discipline of all photography and rendering
- The sharp zero-radius corners on all interactive and container elements
- The generous section spacing that creates the exhibition-like pacing
- The left-aligned asymmetry of major content blocks

**Avoid**
- Rounded corners on any component, which would contradict the architectural severity
- Color accents or highlight tones that would break the monochrome system
- Centered text blocks in major sections, which would undermine the editorial asymmetry
- Drop shadows on photographs or cards
- Bold weights for emphasis—use scale and spacing instead

**Recommended build order**
1. Establish the base grid and section spacing system with canvas and surface-dark backgrounds
2. Implement the type scale with Inter at all six sizes, verifying Cyrillic rendering
3. Build the outlined button in both light and dark variants
4. Create the service row component with its expandable behavior
5. Assemble the process section grid with numbered steps and right-hand image
6. Construct the contact section with stacked information hierarchy
7. Add team profile blocks with photograph-text relationship

**Accessibility**
- Ensure all text on dark surfaces meets WCAG AA contrast ratios; the canvas-on-surface-dark pairing should be verified programmatically
- The light-ink color on dark surfaces is used for de-emphasized content only; never use it for primary action text or critical information
- Expandable service rows should include appropriate ARIA states and keyboard activation
- Maintain focus indicators that respect the sharp-cornered, hairline aesthetic—consider an inset outline or border-color shift rather than a rounded ring

## Scope note

This guide covers the landing page surface of ruda-bureau.pro, including the about, process, services, and contact sections. Navigation behavior, footer content, additional interior pages, mobile-specific layouts, hover and focus states, form validation, and loading sequences are not represented in the available material. Measurements are practical adaptation targets derived from visible proportions.
