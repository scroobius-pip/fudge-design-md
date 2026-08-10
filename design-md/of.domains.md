# How of.domains is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/of.domains-design)

Last updated: 2026-08-10

## Captured pages

[![Four-panel grid with centered philosophical statements in black serif type on warm off-white squares, establishing the site's contemplative tone.](https://pin.fontofweb.com/8356?format=jpg)](https://design.withfudge.com/share/pin-8356)

[Four-panel grid with centered philosophical statements in black serif type on warm off-white squares, establishing the site's contemplative tone.](https://design.withfudge.com/share/pin-8356)

[![How it works section with left-aligned serif heading, monospace process diagram with horizontal rules, and centered manifesto statement below.](https://pin.fontofweb.com/8355?format=jpg)](https://design.withfudge.com/share/pin-8355)

[How it works section with left-aligned serif heading, monospace process diagram with horizontal rules, and centered manifesto statement below.](https://design.withfudge.com/share/pin-8355)

[![Tiered domain pricing table with section labels in serif, monospace data rows with buyout and subscription pricing, and black CTA button.](https://pin.fontofweb.com/8354?format=jpg)](https://design.withfudge.com/share/pin-8354)

[Tiered domain pricing table with section labels in serif, monospace data rows with buyout and subscription pricing, and black CTA button.](https://design.withfudge.com/share/pin-8354)

[![Email subscription section with centered serif question, monospace label, light input field, and solid black subscribe button.](https://pin.fontofweb.com/8353?format=jpg)](https://design.withfudge.com/share/pin-8353)

[Email subscription section with centered serif question, monospace label, light input field, and solid black subscribe button.](https://design.withfudge.com/share/pin-8353)

## Overview

The of.domains visual system is built on restraint and contrast. A warm, tactile off-white canvas serves as the primary surface, allowing black typography to carry the full expressive weight of the interface. The design avoids decoration in favor of material honesty: what you see is structure, hierarchy, and breathing room. The site communicates through three typographic voices—a bold, high-contrast serif for display moments, a precise monospace-inspired face for functional text and data, and a system serif that appears in fallback contexts. This limited palette of surfaces and type creates an editorial atmosphere that feels more like a printed prospectus than a conventional web application. The overall impression is deliberate, unhurried, and confident. Sections are separated by vast vertical space rather than color changes, letting the content establish its own rhythm. The system is designed to present domain names as valuable objects, with pricing and process information delivered with clarity and without visual noise.

## Colors

The color system is intentionally minimal, built on four exact values that create strong tonal contrast without chromatic complexity.

| token | hex | use |
|---|---|---|
| ink | #000000 | Primary text, borders, buttons, and all interactive surfaces |
| muted-ink | #8D8C88 | Secondary text, placeholder copy, and subdued labels |
| canvas | #EBEAE3 | Page background and primary surface for all content areas |
| surface | #FFFFFF | Button text on dark backgrounds and occasional high-contrast moments |

The warm off-white canvas dominates every section, providing a continuous field that unifies the experience. Black ink serves as the sole dark value, used for all typography, hairline borders, and solid button fills. The muted gray appears sparingly for placeholder text in input fields and secondary process descriptions. White is reserved for text that sits directly on black surfaces, creating maximum legibility for calls to action. There are no gradients, no shadows, and no accent colors beyond this core set. The warmth of the canvas prevents the black-and-white pairing from feeling sterile, giving the interface a paper-like quality that supports the site's editorial positioning.

## Typography

Three font families create the typographic hierarchy, each serving a distinct communicative role.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Montagu Slab | 10rem | 400 | 1 | -0.01875em | Massive footer statements and singular expressive moments |
| section-display | Montagu Slab | 2.5rem | 400 | 1.2 | -0.03em | Section headings and prominent questions |
| body | Jgs Font | 1.125rem | 400 | 1.111 | normal | Process descriptions, explanatory copy, and data labels |
| label | Jgs Font | 1.125rem | 400 | 1.111 | normal | Buttons, navigation, and interface labels |
| navigation | Jgs Font | 1.125rem | 400 | 1.111 | normal | Site navigation and functional links |
| legal-copy | Jgs Font | 1.125rem | 400 | 1.111 | normal | Terms, conditions, and fine print |

Montagu Slab, designed by Florian Karsten, provides the display voice. Its high contrast and sturdy serifs carry authority at large sizes while remaining refined. The typeface is used for section headings and the massive footer display, always in its regular weight with tight negative tracking that creates a slightly compressed, intentional feel. Jgs Font-Single Line supplies the functional voice—a monospace-style face with even spacing and mechanical precision that suits process steps, pricing data, and interface labels. The single-line construction gives it a technical, blueprint-like quality. Times-Regular appears as a system fallback in some structural contexts but does not carry primary content. Verify licensing for these families before production use. Montagu Slab attribution: Florian Karsten.

## Layout

The layout system relies on generous vertical space and asymmetric two-column arrangements rather than complex grids. Sections are separated by substantial padding—up to 16rem of vertical breathing room—creating distinct territories for each content block. The horizontal structure typically places section labels in a left column and content or data in a right column, with the label column occupying roughly one-third of the available width.

Content is centered within the viewport for singular statements and subscription forms, while tiered data and process information align to the two-column structure. The domain pricing tables extend full-width within the right column, with rows separated by thin horizontal rules. Margins between major sections are substantial, often exceeding the height of the content itself, which forces a slow, deliberate reading pace.

The spacing scale derives from a 2px base unit, with practical values at 1rem, 2rem, 4rem, 8rem, and 16rem serving component and section needs. Internal padding for data cells and button surfaces sits at 0.5rem to 1rem. The overall effect is spacious without feeling empty—each element has room to assert its presence.

## Visual language

The visual language is defined by what it excludes: no rounded corners, no drop shadows, no color fields beyond the warm canvas, no imagery beyond typographic composition. The interface communicates through the careful arrangement of text and the precise drawing of hairline borders. Horizontal rules at 1px thickness separate data rows and process steps, functioning as structural elements rather than decorative lines.

The four-panel grid visible in the hero section establishes a key motif: equal quadrants of warm off-white, each containing a centered philosophical statement in black serif type. This grid creates visual interest without introducing color or imagery, relying entirely on typographic form and spatial balance. The monospace face reinforces a systems-oriented, almost contractual tone—appropriate for a service built around legal structure and domain ownership.

Buttons are solid black rectangles with white text, or light gray fields with dark text for input areas. No hover states, transitions, or dimensional effects are visible in the still images. The aesthetic is flat, immediate, and print-informed.

## Components

**Section heading**
- Anatomy: Left-aligned text block, typically a single line
- Surface and text color: Black text on canvas background
- Typography: `{typography.section-display}`
- Shape and border: No border, no background fill
- Spacing: Generous margin below before content begins
- Composition: Occupies left column in two-column layouts, or centers in single-focus sections

**Process diagram**
- Anatomy: Vertical stack of labeled steps with horizontal rules between entries
- Surface and text color: Black text on canvas, with muted gray for secondary outcomes
- Typography: `{typography.label}` for step names and outcomes
- Shape and border: 1px solid black horizontal rules separating steps
- Spacing: Tight vertical packing with 0.5rem to 1rem between related lines
- Composition: Right-aligned in two-column layout, or centered below section heading
- Variants: Two-column outcome layout for success/failure branches

**Domain pricing row**
- Anatomy: Domain name left, buyout price center-left, subscription terms center-right, action link far right
- Surface and text color: Black text on canvas, with muted gray for subscription details
- Typography: `{typography.label}` throughout, with size variations for price emphasis
- Shape and border: 1px solid black top border on each row
- Spacing: 0.5rem vertical padding, full-width horizontal extent
- Composition: Stacked vertically within tier groupings, separated by section labels

**Primary button**
- Anatomy: Text label on solid fill
- Surface and text color: White text on black background
- Typography: `{typography.label}`
- Shape and border: 0rem border radius, sharp rectangle
- Spacing: 0.5rem vertical padding, 0.75rem horizontal padding
- Composition: Inline with input fields or standalone below descriptive text

**Input field**
- Anatomy: Single-line text entry with placeholder text
- Surface and text color: Muted gray text on light gray background
- Typography: `{typography.label}`
- Shape and border: No border, 0rem radius
- Spacing: 0.5rem vertical padding, generous horizontal padding
- Composition: Paired with primary button in subscription forms

**Footer display**
- Anatomy: Massive single-line or few-line statement
- Surface and text color: Black text on canvas
- Typography: `{typography.hero-display}`
- Shape and border: No additional elements
- Spacing: 16rem vertical padding creating isolated focal moment
- Composition: Centered or left-aligned depending on content length

## Responsive behavior

The two-column layout with left labels and right content should stack vertically on narrower viewports, with section headings moving above their associated content. The massive footer display at 10rem will require scaling down—consider a reduction to 4rem or 5rem on tablet and 2.5rem on mobile to maintain legibility without excessive line breaking.

The four-panel grid should transition to a single column on narrow screens, with each quadrant stacking vertically. Domain pricing rows will need horizontal scrolling or a reorganized stacked layout on mobile, as the multi-column data structure exceeds narrow viewport widths.

The generous section padding should reduce proportionally: 16rem on desktop can become 8rem on tablet and 4rem on mobile, preserving the spacious feel without creating excessive scroll distance.

## Practical implementation guidance

**Preserve**
- The exact warm off-white canvas color; substituting a neutral white or cool gray will destroy the editorial warmth
- The sharp, unrounded corners on all interactive elements
- The three-tier typographic hierarchy: Montagu Slab for display, Jgs Font for function, strict separation of roles
- The hairline 1px black borders as the sole decorative element
- The massive vertical spacing between sections; this is essential to the unhurried pacing

**Avoid**
- Adding color accents or gradient backgrounds; the system derives its sophistication from restraint
- Rounding corners on buttons or inputs; the rectilinear quality is intentional
- Introducing shadow effects for depth; the flat treatment supports the print-like aesthetic
- Using Montagu Slab at small sizes; its contrast and tracking are designed for display use
- Crowding the domain pricing rows; the airy spacing within each row is as important as the spacing between rows

**Recommended build order**
1. Establish the canvas background and black text defaults
2. Implement the typography scale with exact font loading for Montagu Slab and Jgs Font
3. Build the two-column section structure with responsive stacking behavior
4. Create the process diagram component with horizontal rules
5. Implement the domain pricing table with row borders and tier groupings
6. Add the subscription form with input field and primary button
7. Polish with exact spacing values and vertical section rhythm

**Accessibility**
- The high contrast between black text and warm canvas meets WCAG AA standards for normal text
- The muted gray text on light gray input backgrounds should be verified for contrast compliance; consider darkening if placeholder legibility is insufficient
- The massive display type in the footer should not be used for critical navigation or action text
- Button targets should maintain adequate touch size on mobile implementations, with at least 44px height
- The monospace-style Jgs Font may benefit from slightly increased line height in dense data contexts

## Scope note

This guide covers the landing page surface of of.domains, including the hero grid, process explanation, tiered domain pricing, and email subscription sections. Navigation behavior, mobile breakpoints, hover and focus states, form validation, and interior pages are not represented in the supplied material.
