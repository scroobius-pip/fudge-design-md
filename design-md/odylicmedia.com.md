# How odylicmedia.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/odylicmedia.com-design)

Last updated: 2026-08-10

## Captured pages

[![FAQ accordion section with light gray background, I Hydro display headings, and Open Sans body text showing expandable pricing questions](https://pin.fontofweb.com/8159?format=jpg)](https://design.withfudge.com/share/pin-8159)

[FAQ accordion section with light gray background, I Hydro display headings, and Open Sans body text showing expandable pricing questions](https://design.withfudge.com/share/pin-8159)

[![Dark protocol section with large white I Hydro step numerals, gray step labels, and burnt orange CTA button for toolkit access](https://pin.fontofweb.com/8158?format=jpg)](https://design.withfudge.com/share/pin-8158)

[Dark protocol section with large white I Hydro step numerals, gray step labels, and burnt orange CTA button for toolkit access](https://design.withfudge.com/share/pin-8158)

[![Case study grid with jewelry and home goods photography, revenue statistics in I Hydro, and category tags with orange borders](https://pin.fontofweb.com/8157?format=jpg)](https://design.withfudge.com/share/pin-8157)

[Case study grid with jewelry and home goods photography, revenue statistics in I Hydro, and category tags with orange borders](https://design.withfudge.com/share/pin-8157)

[![Modal overlay with dark backdrop, Essential Toolkit headline, stacked spreadsheet preview images, and orange Submit button](https://pin.fontofweb.com/8156?format=jpg)](https://design.withfudge.com/share/pin-8156)

[Modal overlay with dark backdrop, Essential Toolkit headline, stacked spreadsheet preview images, and orange Submit button](https://design.withfudge.com/share/pin-8156)

## Overview

Odylic Media presents itself as a growth partner for premium and luxury direct-to-consumer brands. The visual system operates primarily in a dark, cinematic mode that conveys sophistication and data-driven authority. The design relies on dramatic scale contrasts: oversized serif numerals and display type set against restrained, lightweight sans-serif body copy. Burnt orange serves as the singular accent color, appearing in call-to-action buttons, category tags, and key interactive moments. The overall impression is editorial and confident, with generous negative space and a clear hierarchy that guides visitors from high-level claims through detailed case studies to conversion points. Light sections appear selectively for content-heavy areas like FAQs and case-study details, creating rhythmic contrast across the page depth.

## Colors

The palette is built around a near-black warm gray canvas with layered surface tones and a single vibrant accent. Light sections invert this relationship for readability of longer content.

| token | value | use |
|---|---|---|
| canvas | `#201F1D` | Primary page background, modal panels, dark sections |
| surface | `#3D3B3B` | Elevated cards, input fields on dark backgrounds |
| surface-elevated | `#555555` | Borders, dividers, subtle structural elements |
| ink | `#FFFFFF` | Primary text on dark backgrounds, headings |
| ink-muted | `#808080` | Secondary labels, step prefixes, de-emphasized text |
| ink-secondary | `#706D6A` | Tertiary text, captions, metadata |
| accent | `#EB5E28` | Primary buttons, category tags, active states, links |
| border | `#555555` | Visible borders on dark cards, dividers |
| border-subtle | `#3D3B3B` | Hairline separators, accordion underlines |
| light-canvas | `#EEECEC` | FAQ section background, case-study text areas |
| light-ink | `#222222` | Primary text on light backgrounds |
| light-ink-muted | `#555555` | Body text on light backgrounds |

The dark mode dominates the experience, with the near-black `#201F1D` establishing a premium, gallery-like atmosphere. The burnt orange accent `#EB5E28` is used sparingly and strategically to mark interactive elements and category identifiers. Light sections employ a warm off-white `#EEECEC` rather than pure white, maintaining the sophisticated tone while improving readability for extended text. No gradient or shadow tokens are used as primary surface treatments; the one visible shadow is a subtle directional drop shadow on modal overlays.

## Typography

The type system pairs a distinctive high-contrast serif display face with lightweight geometric sans-serifs for functional text. This creates an editorial tension between expressive headlines and utilitarian body copy.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | I Hydro | 5.625rem | 400 | 0.9 | normal | Primary page headlines, modal titles |
| section-display | I Hydro | 2.5rem | 400 | 1.0 | normal | Section headers, toolkit titles |
| step-numeral | I Hydro | 5.625rem | 400 | 0.85 | normal | Large step indicators in protocol section |
| stat-display | I Hydro | 2.5rem | 400 | 1.0 | normal | Revenue statistics, case-study metrics |
| body | Avenir Ltw 0535 | 1.125rem | 400 | 1.4 | normal | Paragraph text, descriptions |
| body-large | Avenir Ltw 0535 | 1.25rem | 400 | 1.25 | normal | Lead paragraphs, expanded accordion content |
| label | Roboto | 1.125rem | 700 | 1.4 | normal | Button text, navigation, emphasized labels |
| label-small | Roboto | 1rem | 700 | 1.4 | normal | Compact labels, tag text |
| navigation | Roboto | 1.125rem | 700 | 1.4 | normal | Header navigation items |

I Hydro, designed by Goran Soderstrom and available from Letters From Sweden, serves as the distinctive display face. Its high stroke contrast and refined serifs convey luxury and editorial authority. Avenir Ltw 0535, designed by Adrian Frutiger and available from Monotype, provides the primary body text with an exceptionally light weight that maintains elegance at small sizes. Roboto, designed by Christian Robertson and available from Google, handles all functional and emphasized text with its Bold weight. The site also loads Avenir Ltw 0585 for heavy display use, Open Sans for select body contexts, and Arial as a system fallback. Verify licensing for these families before production use.

## Layout

The layout follows a centered, single-column rhythm for narrative sections with asymmetric two-column grids for case studies. Maximum content width appears to be approximately 1200px, with generous horizontal padding of `2rem` on standard sections.

Dark sections like the protocol and toolkit modal use full-bleed backgrounds with centered content containers. The protocol section arranges four numbered steps vertically, each with a large left-aligned numeral and right-aligned text block, creating a clear scanning pattern. Step numerals occupy roughly 30% of the row width with text filling the remaining 70%.

Case-study sections alternate between image-left/text-right and image-right/text-left compositions, creating visual rhythm and preventing monotony. Images occupy approximately 50% of the width at full desktop size, with text content padded generously within its half.

The FAQ section uses a constrained central column, approximately 800px wide, with accordion items stacked vertically and separated by subtle hairline borders. Each accordion item spans the full width of this container with chevron indicators aligned to the right edge.

Modal overlays center their content both vertically and horizontally, with a fixed maximum width around 600px for the form panel. The backdrop covers the full viewport with a semi-transparent dark layer.

Spacing between major sections is generous, typically `6rem` or more, allowing each content block to breathe. Internal component spacing uses a base unit of `0.125rem` (2px), with common increments at `1rem`, `2rem`, and `3rem`.

## Visual language

The visual language balances editorial sophistication with data-driven credibility. Photography is treated as full-bleed or large-format elements, particularly in case studies where product and lifestyle imagery dominates half the viewport. Images appear to have minimal or no border radius, maintaining a clean, magazine-like presentation.

Iconography is extremely restrained. The only visible icons are simple chevron arrows for accordion expand/collapse states and a close button (X) for the modal. These use thin stroke weights and neutral colors, avoiding decorative embellishment.

The step protocol section introduces a distinctive visual motif: enormous white serif numerals (01, 02, 03, 04) paired with small gray "STEP" labels above them. This creates a striking scale contrast that anchors the page's visual identity. The numerals are positioned to bleed slightly into the text column, creating intentional tension.

Category tags in case studies use a pill-like treatment with the accent color as a border and text color, sitting on the light background. This creates a subtle but clear categorization system without heavy visual weight.

The modal overlay for "The Essential Toolkit" demonstrates the system's approach to conversion moments: darkened backdrop, centered content, prominent product imagery, minimal form fields with underline-only inputs, and a high-contrast orange submit button.

## Components

### Primary button

- **Anatomy**: Text label centered within a rectangular container
- **Surface**: Solid burnt orange `#EB5E28` background with white text
- **Typography**: `{typography.label}` — Roboto Bold at 1.125rem
- **Shape**: `0.3125rem` border radius, no border
- **Spacing**: `0.75rem` vertical padding, `2rem` horizontal padding
- **Composition**: Centered within its container, full width in modal context
- **Variants**: None visible; always appears as filled accent

### Secondary button / category tag

- **Anatomy**: Text label within a bordered container
- **Surface**: Transparent background with `2px` solid accent border
- **Typography**: `{typography.label-small}` — Roboto Bold at 1rem
- **Shape**: `0.3125rem` border radius
- **Spacing**: Compact padding, approximately `0.5rem` vertical and `1rem` horizontal
- **Composition**: Inline placement before case-study descriptions
- **Variants**: "Jewelry" and "Home Goods" tags visible with identical treatment

### Accordion item

- **Anatomy**: Question heading, expand/collapse chevron, optional answer body
- **Surface**: Transparent on light `#EEECEC` background
- **Typography**: Question uses I Hydro at approximately 1.875rem; answer uses `{typography.body}` — Avenir Ltw 0535 at 1.125rem
- **Shape**: Full-width item with `1px` bottom border in `#3D3B3B`
- **Spacing**: `2rem` vertical padding per item, `1.5rem` between question and answer
- **Composition**: Stacked vertically in centered column
- **States**: Collapsed shows downward chevron; expanded shows upward chevron with answer revealed

### Case-study card

- **Anatomy**: Large photography, statistic headline, category tags, service labels, body copy, bullet metrics
- **Surface**: Light `#EEECEC` background for text portion; image portion has no background
- **Typography**: Statistic uses `{typography.stat-display}` — I Hydro at 2.5rem; services use `{typography.label-small}` in muted gray; body uses `{typography.body}`
- **Shape**: No border radius on images; text area has no distinct card boundary
- **Spacing**: `2rem` padding within text area; `3rem` between major text blocks
- **Composition**: 50/50 split with alternating image placement
- **Variants**: Image-left and image-right orientations alternate

### Modal overlay

- **Anatomy**: Backdrop, close button, title, subtitle, product imagery, form fields, submit button
- **Surface**: Backdrop is `rgba(0, 0, 0, 0.6)`; panel is `#201F1D`
- **Typography**: Title uses `{typography.hero-display}` — I Hydro at 5.625rem; subtitle uses `{typography.body}` in white
- **Shape**: Panel has `0.3125rem` border radius; inputs have no visible border radius with underline-only treatment
- **Spacing**: `3rem` padding within panel; `2rem` between form fields
- **Composition**: Centered vertically and horizontally, fixed maximum width
- **States**: Visible when triggered; close button (X) in upper right

### Step protocol item

- **Anatomy**: "STEP" label, large numeral, title, description paragraph
- **Surface**: Transparent on dark `#201F1D` background
- **Typography**: Label uses `{typography.label}` in `#808080`; numeral uses `{typography.step-numeral}` in white; title uses `{typography.label}` in white; description uses `{typography.body}` in white
- **Shape**: No containing shape; free-floating text elements
- **Spacing**: `4rem` between steps vertically; numeral positioned with negative space to the right
- **Composition**: Left-aligned numeral column with right-aligned text block

## Responsive behavior

The design appears optimized for desktop viewing with its large imagery and side-by-side case-study layouts. At narrower viewports, the following adaptations should be considered:

- Case-study grids should stack to single column with images full-width above text
- Step protocol numerals should reduce in scale and potentially stack above rather than beside text
- Modal panel should expand to near-full viewport width with reduced internal padding
- Hero display type should scale down to maintain legibility without excessive line breaks
- Navigation should collapse to a mobile menu pattern, though no mobile navigation pattern is visible in the source

The accordion section appears naturally responsive due to its single-column structure. The base spacing unit of `0.125rem` allows for fine-grained adjustments across breakpoints.

## Practical implementation guidance

### Preserve
- The dramatic scale contrast between I Hydro display type and Avenir Ltw 0535 body text; this is the system's signature
- The warm near-black `#201F1D` as the primary dark background rather than pure black
- The burnt orange `#EB5E28` as the sole accent, used consistently for all interactive emphasis
- Alternating left/right image placement in case studies to maintain visual rhythm
- The oversized step numerals with their tight line-height and generous surrounding space

### Avoid
- Introducing additional accent colors; the single orange against dark gray is intentionally restrained
- Using I Hydro for body text or small labels; its high contrast is designed for display sizes only
- Pure white backgrounds in dark sections; the warm off-white `#EEECEC` maintains tonal consistency
- Heavy borders or shadows; the system relies on space and type contrast for hierarchy
- Rounding images; the photography should remain sharp-edged for editorial credibility

### Recommended build order
1. Establish the dark canvas `#201F1D` and light canvas `#EEECEC` as section backgrounds
2. Implement I Hydro at display sizes with Avenir Ltw 0535 for body text
3. Build the step protocol section as the primary visual anchor
4. Create the case-study grid with alternating image placement
5. Add the accordion component for FAQ content
6. Implement the modal with form for toolkit access
7. Apply Roboto Bold for all buttons, labels, and navigation

### Accessibility
- Ensure the burnt orange `#EB5E28` on dark `#201F1D` meets WCAG AA contrast standards for text; if not, consider lightening the orange or adding a text shadow
- Provide visible focus indicators for all interactive elements, particularly the underline-only form inputs in the modal
- Add `aria-expanded` attributes to accordion items with appropriate keyboard navigation
- Ensure the modal traps focus and can be closed via Escape key and close button
- Consider reducing motion for the accordion expand/collapse for users with vestibular sensitivities
- Verify that the large I Hydro numerals remain legible when scaled down on smaller viewports

## Scope note

This guide covers the homepage and visible landing sections including the protocol, case studies, FAQ accordion, and toolkit modal. Footer, navigation dropdowns, additional interior pages, and mobile-specific layouts are not represented in the supplied material. Form validation states, loading indicators, and error messaging were not visible and should be designed to extend the existing accent and surface color logic.
