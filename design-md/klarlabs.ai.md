# How klarlabs.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/klarlabs.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Pricing page hero with oversized serif display reading 'Simple pricing' against near-black background with tiered plan layout below](https://pin.fontofweb.com/10086?format=jpg)](https://design.withfudge.com/share/pin-10086)

[Pricing page hero with oversized serif display reading 'Simple pricing' against near-black background with tiered plan layout below](https://design.withfudge.com/share/pin-10086)

[![Footer with six-column link grid, social links, and theme toggle controls on dark background](https://pin.fontofweb.com/10085?format=jpg)](https://design.withfudge.com/share/pin-10085)

[Footer with six-column link grid, social links, and theme toggle controls on dark background](https://design.withfudge.com/share/pin-10085)

[![FAQ section with left-aligned section label and accordion-style question-answer pairs in two-tone typography](https://pin.fontofweb.com/10084?format=jpg)](https://design.withfudge.com/share/pin-10084)

[FAQ section with left-aligned section label and accordion-style question-answer pairs in two-tone typography](https://design.withfudge.com/share/pin-10084)

[![Comparison page feature breakdown with serif headline, labeled list sections, and muted body text with em-dash bullets](https://pin.fontofweb.com/10083?format=jpg)](https://design.withfudge.com/share/pin-10083)

[Comparison page feature breakdown with serif headline, labeled list sections, and muted body text with em-dash bullets](https://design.withfudge.com/share/pin-10083)

## Overview

Klar Labs presents a dark, editorial interface that foregrounds typography over decoration. The system pairs an oversized, light-weight serif display face with a neutral sans-serif for all functional text, creating a stark hierarchy between expressive headlines and utilitarian content. The near-black canvas establishes a focused, premium atmosphere that lets the white and off-white typography breathe. Layouts are spacious and asymmetric, with generous vertical padding between sections and a consistent two-column structure that places section labels on the left and primary content on the right. The overall impression is restrained confidence: minimal chrome, no decorative gradients or shadows, and a rhythm that prioritizes reading over browsing.

## Colors

The palette is intentionally narrow, built on a dark foundation with two text values and subtle surface variations for interactive elements.

| token | value | use |
|---|---|---|
| canvas | #1C1C1C | Primary page background; the dominant dark field |
| surface | #262626 | Elevated surfaces, button backgrounds, footer subdivisions |
| surface-elevated | #333333 | Borders, dividers, and subtle structural lines |
| ink | #FAFAFA | Primary text, headlines, labels, and active navigation |
| muted-ink | #A1A1A1 | Secondary body text, descriptions, list items, and captions |
| border | #333333 | Hairline dividers between footer columns and content regions |
| action-bg | #262626 | Button and interactive control backgrounds |
| action-text | #FAFAFA | Button labels and icon fills |
| inverse-canvas | #000000 | Deepest black for unknown-region divs and fallback surfaces |

The system operates in a single dark mode. There is no light variant visible in the supplied material. The near-black canvas (#1C1C1C) absorbs visual noise and directs attention to the high-contrast typography. Muted ink (#A1A1A1) serves a critical functional role: it distinguishes explanatory content from primary labels without introducing a third color. Surface values are reserved for interactive states and structural boundaries, never used as backgrounds for content panels. The inverse-canvas token (#000000) appears in the interface as a fallback for certain container regions, though it is visually indistinguishable from the main canvas in practice. The absence of accent colors means the system relies entirely on weight, size, and spacing to create emphasis.

## Typography

Three families appear in the supplied material: GT Ultra Median for display moments, Inter for all functional text, and Applesystem as a system-level fallback in unknown regions. GT Ultra Median appears in a single light weight at dramatic sizes, giving headlines an elegant, editorial character. Inter handles body copy, labels, navigation, and captions across multiple sizes and weights. Applesystem appears at 14px in div regions outside the main content flow, serving as a fallback for system-generated elements.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | GT Ultra Median | 11.825rem | 300 | 0.92 | -0.035em | Page headlines, pricing hero, comparison headlines |
| section-display | GT Ultra Median | 3.5rem | 300 | 1.05 | -0.02em | Section headlines, comparison statements |
| body | Inter | 1rem | 400 | 1.5 | 0em | Default body text, navigation, header elements |
| body-large | Inter | 1.0625rem | 400 | 1.7 | 0em | Feature descriptions, FAQ answers, comparison details |
| body-small | Inter | 0.9375rem | 400 | 1.625 | 0em | Compact paragraphs, pricing descriptions |
| label | Inter | 0.875rem | 500 | 1.375 | 0em | Section labels, plan tier names, category headers |
| caption | Inter | 0.75rem | 400 | 1.333 | 0em | Footer links, legal text, social labels |

GT Ultra Median is designed by Noël Leu and distributed by Grilli Type Ag. Inter and Applesystem attribution are not supported by the supplied material. Verify licensing for these families before production use.

The hero display at nearly 12rem creates an immersive, poster-like quality that dominates the viewport. Negative tracking tightens the large forms without crushing them. At the section level, GT Ultra Median scales down to a more conversational 3.5rem while retaining its light weight and slight negative tracking. Inter provides the workhorse range: body at 16px with comfortable 1.5 line height, a slightly larger 17px for extended reading contexts, and a 15px variant for tighter spaces. The 500-weight label style adds emphasis without the heaviness of full bold. Applesystem at 14px operates outside the main typographic hierarchy, appearing in system-level containers where the primary fonts do not reach.

## Layout

The page architecture follows a consistent two-column editorial pattern. The left column, approximately one-quarter of the width, holds section labels and category names. The right column carries the primary content: headlines, descriptions, lists, and interactive elements. This asymmetry creates a clear information hierarchy and generous negative space.

Sections are separated by substantial vertical gaps. The hero section receives top padding of 12rem and bottom padding of 10rem, establishing a commanding presence before content begins. Subsequent content sections use 12rem bottom padding with no top padding, relying on the previous section's bottom spacing to create separation. A 160px (10rem) margin-top on later sections reinforces this rhythmic pacing.

Horizontal containment uses 40px side padding across all sections, with an internal content margin of 92.5px on each side that narrows the readable column. The gap between major content blocks within a section is consistently 40px, whether applied as row-gap on flex containers or explicit margins.

The header floats at the top with minimal padding: 8px horizontal, no vertical padding visible. Navigation actions align to the right. The footer inverts the content density, presenting a six-column link grid with 80px top padding and 32px bottom padding, followed by a secondary bar with social links and theme controls.

## Visual language

The aesthetic is austere and confident, drawing from editorial design and premium product interfaces. Every element serves a reading or navigation purpose; there are no decorative shapes, patterns, or illustrations beyond the logo mark.

Photography and imagery are absent from the visible pages, reinforcing the typographic focus. The dark canvas creates a cinematic quality that suggests depth without using shadows or dimensional effects. Rounded corners appear only on interactive pills and the theme toggle; content containers remain sharp-edged.

The logo mark—a geometric, four-lobed shape—appears in white against the dark header. It is the only non-typographic brand element visible. Navigation actions use a pill-shaped treatment with a filled background for the primary action and an outlined or ghost style for secondary actions.

Lists use an em-dash prefix rather than bullets, maintaining the editorial tone. Spacing between list items is 16px, with each item separated by a visible gap that prevents clustering. The overall density is low: even the footer, with its six columns of links, preserves breathing room through 16px gaps between items and 32px gaps between columns.

## Components

### Header

- **Anatomy**: Logo mark left-aligned, navigation actions right-aligned
- **Surface**: Transparent over canvas, no background separation
- **Typography**: `{typography.body}` for nav labels
- **Spacing**: 8px horizontal padding, full-width
- **Composition**: Flex row, space-between alignment

### Hero section

- **Anatomy**: Section label (left column), oversized headline (right column), optional description below
- **Surface**: `{colors.canvas}` background
- **Typography**: `{typography.hero-display}` for headline, `{typography.label}` for section label, `{typography.body-small}` for description
- **Spacing**: 12rem top, 10rem bottom, 40px sides
- **Shape**: No border radius
- **Composition**: Two-column grid, label pinned to left, headline spanning right

### Pricing tier

- **Anatomy**: Tier name and price (left column), feature list or description (right column)
- **Typography**: `{typography.label}` for tier name, `{typography.body-large}` for features
- **Surface**: No distinct background; sits directly on canvas
- **Spacing**: Generous vertical separation between tiers, 16px between list items
- **Composition**: Two-column alignment matching page grid

### Feature list

- **Anatomy**: Em-dash prefix, single-line or multi-line items
- **Typography**: `{typography.body-large}` in `{colors.muted-ink}`
- **Spacing**: 16px gap between items, 16px internal gap for multi-line items
- **Composition**: Vertical stack, left-aligned

### FAQ section

- **Anatomy**: Section label (left), question-answer pairs stacked (right)
- **Typography**: `{typography.label}` for section label, `{typography.body-large}` for questions in `{colors.ink}`, answers in `{colors.muted-ink}`
- **Spacing**: 40px between question blocks, 12px between question and answer
- **Composition**: Two-column grid, questions as bold labels, answers as flowing paragraphs

### Footer

- **Anatomy**: Six-column link grid, bottom bar with copyright, social links, and theme controls
- **Surface**: `{colors.canvas}` background, `{colors.border}` hairline dividers between columns
- **Typography**: `{typography.label}` for column headers, `{typography.caption}` for links in `{colors.muted-ink}`, `{typography.body}` for active items
- **Spacing**: 80px top, 32px bottom, 24px internal padding for link groups, 112px margin-top for bottom bar
- **Shape**: Pill radius on theme toggle container
- **Composition**: CSS grid for columns, flex row for bottom bar

### Theme toggle

- **Anatomy**: Icon buttons for light, dark, and system modes
- **Surface**: `{colors.surface}` background, `{rounded.pill}` shape
- **Typography**: Icon-only, no text labels
- **Spacing**: 6px padding, 4px gap between icons
- **Shape**: Fully rounded pill

## Responsive behavior

The two-column editorial layout depends on adequate viewport width. At narrower widths, the left-column labels should stack above their associated content blocks rather than remaining side-by-side. The hero headline, at nearly 12rem, will require aggressive scaling down—potentially to the section-display size—to maintain legibility without horizontal overflow.

The footer six-column grid should collapse to fewer columns (three, then two, then one) as viewport width decreases. Column headers should remain visible as section dividers in stacked layouts.

Navigation actions in the header may consolidate into a menu trigger at small widths, though no mobile pattern is visible in the supplied material. The pill-shaped buttons should maintain their proportions but reduce internal padding to accommodate touch targets.

## Practical implementation guidance

### Preserve
- The stark dark canvas with near-black (#1C1C1C) as the only background color
- The dramatic size contrast between GT Ultra Median headlines and Inter body copy
- The two-column editorial grid with left-aligned section labels
- The em-dash list style for feature enumeration
- The generous vertical rhythm: 12rem section padding, 10rem gaps between major blocks
- The minimal header with no background separation from content

### Avoid
- Adding accent colors or decorative gradients that compete with the typographic hierarchy
- Using borders or shadows to create elevation; the system relies on spacing alone
- Reducing the hero display size below what creates visual impact
- Introducing light mode without careful rebalancing of the muted-ink value
- Stacking footer links without preserving their categorical grouping

### Recommended build order
1. Establish the dark canvas and Inter body typography as the foundation
2. Implement the two-column grid with section labels and content areas
3. Add GT Ultra Median at hero and section display sizes
4. Build the header with logo and navigation actions
5. Create the pricing tier and FAQ components using the established grid
6. Implement the footer grid and theme toggle
7. Refine spacing and responsive behavior across breakpoints

### Accessibility
- The high contrast between #FAFAFA text and #1C1C1C background exceeds WCAG AAA requirements for normal text
- Muted ink (#A1A1A1) on canvas passes AA for large text but should not be used for small body copy if compliance is required
- Interactive pills need visible focus indicators; consider an outline offset or background shift
- The theme toggle should include accessible labels for screen readers
- Large display type may benefit from reduced motion preferences for users sensitive to scale changes

## Scope note

This guide covers the pricing and comparison page surfaces visible in the supplied material. Mobile layouts, breakpoint behavior, form interactions, loading states, and motion design are not included. The spacing and type scales reflect exact values from the retained interface measurements. Applesystem appears only as a fallback family in system-level regions and is not part of the intentional visual hierarchy.
