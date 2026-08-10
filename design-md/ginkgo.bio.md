# How ginkgo.bio is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ginkgo.bio-design)

Last updated: 2026-08-10

## Captured pages

[![Dark footer with email capture form, three-column link grid, and social icons on near-black background](https://pin.fontofweb.com/10516?format=jpg)](https://design.withfudge.com/share/pin-10516)

[Dark footer with email capture form, three-column link grid, and social icons on near-black background](https://design.withfudge.com/share/pin-10516)

[![Dark footer variant showing identical layout with slightly different vertical spacing and link arrangement](https://pin.fontofweb.com/10515?format=jpg)](https://design.withfudge.com/share/pin-10515)

[Dark footer variant showing identical layout with slightly different vertical spacing and link arrangement](https://design.withfudge.com/share/pin-10515)

[![Light split-view CTA section with serif headline, bordered form panel, and navy submit button on warm off-white](https://pin.fontofweb.com/10514?format=jpg)](https://design.withfudge.com/share/pin-10514)

[Light split-view CTA section with serif headline, bordered form panel, and navy submit button on warm off-white](https://design.withfudge.com/share/pin-10514)

## Overview

Ginkgo Bioworks presents a dual-mode visual system that shifts between warm, editorial light surfaces and deep, focused dark conversion zones. The light mode serves product storytelling with generous whitespace, a warm gradient background, and a classical serif display face that lends scientific credibility. The dark mode strips away ornament to prioritize action: email capture, meeting requests, and navigation. The system is built on a stark contrast between Recoleta's editorial presence and Ag's utilitarian clarity, with -apple-system handling dense UI micro-labels. Every surface has a clear job: light pages explain, dark pages convert.

## Colors

The palette operates in two distinct modes with no shared background colors between them.

| token | value | use |
|---|---|---|
| canvas | #141414 | Primary dark mode background for footer and conversion sections |
| canvas-ink | #FCFCFC | Text on dark backgrounds, near-white for high legibility |
| surface | #FFFFFF | Primary light mode background for editorial and form sections |
| surface-ink | #0B1F30 | Text on light backgrounds, a deep navy-black |
| accent | #0B1F30 | Primary button fills, borders, and emphasis on light surfaces |
| border-light | #FCFCFC | Hairline rules and input underlines on dark backgrounds |
| border-dark | #0B1F30 | Hairline rules, form panel borders, and input underlines on light backgrounds |
| gradient-start | #F2EEEB | Warm cream at the bottom of editorial section gradients |
| gradient-mid | #F9F9F9 | Neutral white in the upper-mid of the gradient |
| gradient-rose | #F7F0F0 | Soft rose tone in the gradient midsection |
| gradient-end | #F2F2F1 | Cool white at the top of the gradient |

The light mode builds from a warm off-white foundation that shifts through rose and cream tones in the gradient, keeping the scientific content approachable. The dark mode commits fully to near-black with pure white text, creating a tunnel effect that draws the eye to forms and CTAs. The accent color doubles as both the light-mode text color and the dark-mode button fill, unifying the modes through a single deep navy-black. No shadows are used in the dark mode; depth comes from color alone. In light mode, a soft outer shadow (0px 4px 20px rgba(0,0,0,0.12)) and an inset highlight (inset 0px 1px 0px rgba(255,255,255,0.1)) appear on elevated surfaces.

## Typography

The type system pairs a single display serif with two sans-serif workhorses. Recoleta carries all display and headline duties with its slightly condensed, high-contrast letterforms. Ag handles body copy, navigation, labels, and buttons with neutral clarity. -apple-system appears only for small UI labels and badges where system rendering speed matters.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Recoleta | 3.65625rem | 400 | 0.95 | -0.01em | Page headlines, major section titles |
| section-display | Recoleta | 1.845rem | 400 | 1.125 | -0.02em | Subsection headings, footer prompts |
| body | Ag | 1.03125rem | 400 | 1.5 | 0 | Paragraphs, descriptions, navigation links |
| body-large | Ag | 1.40625rem | 400 | 1.52 | -0.02em | Lead paragraphs, introductory copy |
| label | Ag | 0.984375rem | 400 | 1 | 0.02em | Form labels, uppercase UI labels |
| ui-small | -apple-system | 0.875rem | 400 | 1.3 | 0 | Small UI text, system labels |
| ui-strong | -apple-system | 0.6875rem | 600 | 1 | 0 | Badges, micro-labels, dense UI |

Verify licensing for these families before production use. No designer or vendor attribution is supported for Ag, Recoleta, or -apple-system.

## Layout

The page architecture alternates between full-bleed dark sections and contained light sections with generous framing. The light-mode CTA section uses a split-view layout: editorial content occupies the left half with a large arrow glyph preceding the headline, while a bordered form panel sits right-aligned. This panel carries its own internal padding and a thin dark border that separates it from the warm gradient ground.

Dark footer sections span the full viewport width with content constrained by substantial horizontal margins. The footer organizes links into three columns with consistent vertical rhythm between category headers and their links. A horizontal rule separates the main footer content from the legal bar below, where copyright and social links share a single row.

Spacing follows a 2px base unit. Component padding clusters around 13.5px to 18px for compact elements, 27px to 36px for medium blocks, and 49.5px to 67.5px for major section breaks. The largest measured padding of 135px indicates hero or section-top breathing room. Column gaps of 102.8px and 123.36px suggest wide gutters between major content zones, reinforcing the airy, scientific-journal aesthetic.

## Visual language

The visual character balances biotech precision with editorial warmth. Photography and illustration appear to be treated with restraint—product imagery sits in clean rectangular frames without rounded corners. The arrow glyph (→) functions as a recurring directional motif, appearing before headlines as a subtle navigational cue.

Borders are used optically rather than structurally: 1px hairlines separate form fields, 2px rules define button outlines in the dark mode, and a complete rectangular border frames the light-mode form panel. The 4px radius appears on small interactive elements, while 3px serves for tighter UI corners. The 999px radius creates pill shapes for special badges or tags.

The warm gradient avoids clinical sterility, suggesting organic processes and living systems without resorting to literal biological imagery. This warmth is always contained—never bleeding into the dark conversion zones—creating a clear emotional rhythm between learning and action.

## Components

### Primary button

- Anatomy: Text label centered within a filled rectangular container
- Surface: Solid accent (#0B1F30) background with surface (#FFFFFF) text
- Typography: `{typography.body}`
- Shape: 4px border radius
- Spacing: 1.6875rem vertical padding, 2.25rem horizontal padding
- Composition: Full-width within form panels, natural width in inline contexts
- Variants: Dark mode uses the same fill but against the canvas background

### Secondary button

- Anatomy: Text label centered within a stroked rectangular container
- Surface: Transparent background with canvas-ink (#FCFCFC) text
- Border: 2px solid border-light (#FCFCFC)
- Typography: `{typography.body}`
- Shape: 4px border radius
- Spacing: 1.6875rem vertical padding, 2.25rem horizontal padding
- Composition: Used in dark sections where the primary action is less critical

### Text input

- Anatomy: Label above, underline-only input field below
- Surface: Transparent background
- Border: 1px solid bottom border only; border-dark (#0B1F30) in light mode, border-light (#FCFCFC) in dark mode
- Typography: `{typography.body}` for value, `{typography.label}` for field label
- Spacing: 0.84375rem vertical padding, no horizontal padding
- Composition: Stacked vertically with 1rem gaps between fields
- Variants: Dark mode inverts border color; placeholder text uses reduced opacity of canvas-ink

### Form panel

- Anatomy: Contained card with internal padding, holding multiple inputs and a submit button
- Surface: Transparent or surface (#FFFFFF) background
- Border: 1px solid border-dark (#0B1F30) on all sides
- Typography: `{typography.label}` for field labels, `{typography.body}` for inputs
- Shape: 4px border radius on the container
- Spacing: 3.65625rem internal padding, 2.25rem gaps between fields
- Composition: Right-aligned in split-view layouts, approximately 45% of container width

### Footer

- Anatomy: Three-column link grid above a legal bar with logo, copyright, and social icons
- Surface: Canvas (#141414) background throughout
- Typography: `{typography.label}` for column headers, `{typography.body}` for links
- Shape: Full-bleed width, content constrained by margins
- Spacing: 4.5rem vertical padding above link grid, 2.25rem below; horizontal margins of approximately 7.65rem
- Composition: Email capture form occupies left column; link categories center and right; legal bar spans full width below a 1px border-light rule

## Responsive behavior

The split-view CTA section should stack vertically on narrower viewports, with the form panel moving below the editorial content. The three-column footer grid should collapse to a single column with accordion-style category headers on small screens. Form inputs should remain full-width within their container at all breakpoints. The substantial horizontal margins in the footer should reduce to standard container padding below desktop widths.

## Practical implementation guidance

### Preserve
- The strict separation of light and dark modes by section purpose
- Recoleta for all display headlines; never substitute a geometric sans
- The warm gradient as a section background, never as a page-wide default
- The arrow glyph (→) as a directional prefix for major headlines
- Hairline borders on form inputs rather than filled field backgrounds

### Avoid
- Mixing light and dark surfaces within the same section
- Using -apple-system for body copy or headlines
- Adding background colors to text inputs
- Rounding corners beyond 4px on primary interactive elements
- Shadows in dark mode sections

### Recommended build order
1. Establish the dual color modes with canvas/surface variables
2. Implement the type hierarchy with Recoleta and Ag loaded
3. Build the text input component with underline-only styling
4. Create the form panel with its containing border
5. Construct the split-view CTA layout
6. Implement the dark footer with three-column grid
7. Add the warm gradient as a section utility

### Accessibility
- Ensure canvas-ink (#FCFCFC) on canvas (#141414) meets WCAG AAA contrast
- Verify surface-ink (#0B1F30) on surface (#FFFFFF) meets WCAG AAA
- Provide visible focus states on all interactive elements; consider a 2px outline offset
- Label all form inputs with visible text, not placeholder alone
- Maintain logical tab order through the split-view layout (headline content before form)

## Scope note

This guide covers the Hardware product page's footer, CTA, and form components in both light and dark modes. Navigation, hero sections, product imagery carousels, and mobile-specific layouts are not represented in the supplied material. Measurements are drawn from the exact values provided.
