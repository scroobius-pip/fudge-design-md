# How p.cv is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/p.cv-design)

Last updated: 2026-08-10

## Captured pages

[![Light theme with white canvas, dark ink, and monochrome typographic resume layout](https://pin.fontofweb.com/8494?format=jpg)](https://design.withfudge.com/share/pin-8494)

[Light theme with white canvas, dark ink, and monochrome typographic resume layout](https://design.withfudge.com/share/pin-8494)

[![Dark theme with near-black canvas, light gray ink, and theme toggle button in active state](https://pin.fontofweb.com/8493?format=jpg)](https://design.withfudge.com/share/pin-8493)

[Dark theme with near-black canvas, light gray ink, and theme toggle button in active state](https://design.withfudge.com/share/pin-8493)

[![Vibrant blue accent theme with white typography and full-bleed saturated background](https://pin.fontofweb.com/8492?format=jpg)](https://design.withfudge.com/share/pin-8492)

[Vibrant blue accent theme with white typography and full-bleed saturated background](https://design.withfudge.com/share/pin-8492)

## Overview

P.CV is a stark, single-page personal curriculum vitae for Paul MacGregor, a designer. The entire visual system is built around a single monospace typeface and extreme restraint. There are no images, no decorative borders, no gradients, and no complex layout grids—just text, space, and color. The site presents identity, work history, contact links, and social connections as vertically stacked, left-aligned blocks of uniform typographic texture. A theme switcher cycles between three distinct modes: a clean light mode with near-white canvas and dark gray ink; a dark mode with near-black canvas and light gray ink; and a bold accent mode with a saturated blue canvas and white ink. The design's power comes from this radical simplicity and the deliberate friction of monospace letterforms at a single size across every element.

## Colors

The color system is built on three complete theme palettes that swap in unison. No element uses partial theming or mixed modes.

| token | hex | use |
|---|---|---|
| ink | #33333A | Primary text in light mode; body copy, links, labels |
| canvas | #FFFFFF | Page background in light mode |
| muted-ink | #11111A | Deep black for high-contrast elements or hover states |
| dark-canvas | #11111A | Page background in dark mode |
| dark-ink | #DDDDDD | Primary text in dark mode |
| accent-blue | #0044FF | Page background in accent mode; also action color |
| accent-ink | #FFFFFF | Primary text on blue backgrounds |
| pure-black | #000000 | Default background fills behind content layers |
| action | #0044FF | Interactive emphasis; identical to accent-blue |

The light mode presents the most neutral reading experience: warm gray text on pure white. The dark mode inverts this relationship with a very dark navy-black ground and light gray text, avoiding pure white to reduce glare. The accent mode is the most dramatic: a full-bleed electric blue canvas with white text, transforming the CV into a bold statement. All three modes maintain identical typographic hierarchy and spacing; only the ground and ink values change. The theme toggle itself adapts to each mode, appearing as a small outlined button in light mode, a filled or inverted button in dark mode, and white-on-blue in accent mode. The pure-black value appears as the default background-color on structural containers, creating a uniform base beneath themed layers.

## Typography

The entire site is set in one typeface at one size. This is a deliberate constraint that unifies every element—from the site title to employment dates to social links—into a single visual rhythm.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| site-id | I A Writer Mono S | 1rem | 400 | 1.5 | 0em | Site identifier "P.CV" |
| identity | I A Writer Mono S | 1rem | 400 | 1.5 | 0em | Name and role |
| body | I A Writer Mono S | 1rem | 400 | 1.5 | 0em | Employment history and dates |
| label | I A Writer Mono S | 1rem | 400 | 1.5 | 0em | Section labels and status text |
| navigation | I A Writer Mono S | 1rem | 400 | 1.5 | 0em | Contact and social links |
| theme-control | I A Writer Mono S | 1rem | 400 | 1.5 | 0em | Theme toggle and indicators |

I A Writer Mono S is a monospace typeface designed by Mike Abbink, Paul Van Der Laan, Pieter Van Rosmalen, and Oliver Reichenstein, published by Information Architects Inc. The Regular weight at 16px with 24px line-height creates a comfortable reading density for short-form content. Because every element shares identical sizing, hierarchy is established purely through spatial grouping, indentation, and the semantic structure of the content rather than typographic contrast. All text is uppercase, which further flattens the visual field and emphasizes the geometric regularity of the monospace forms. Letter spacing is 0em, allowing the typeface's built-in metrics to govern rhythm.

Verify licensing for I A Writer Mono S before production use.

## Layout

The page uses a single-column, left-aligned layout with generous but consistent margins. Content is positioned in the upper-left quadrant, leaving the majority of the viewport as negative space. This asymmetry creates a calm, editorial presence and draws attention to the sparse text blocks.

The root spacing unit is 0.25rem (4px at a 16px root). Key layout values include:

- Page inset: 2rem on all sides, creating a comfortable margin from viewport edges
- Section gap: 1.5rem between major content blocks (identity, experience, contact, social)
- List gap: 0.75rem between items within a section
- Paragraph padding: 0px 0px 0px 3px for slight left indentation on some text elements

The content structure flows vertically: site identifier ("P.CV"), name and title, employment history with company names left-aligned and date ranges indented to the right, contact links, social links, and finally the theme toggle at the bottom. Employment entries use a tabular arrangement within the monospace grid, with company names in a left column and dates in a right column separated by an arrow glyph. The theme toggle is positioned at the bottom-left of the viewport, fixed or placed as the final element.

No containers, cards, or bounding boxes segment the content. The page is one continuous surface of text against ground. All surfaces use 0rem border radius, maintaining the sharp, unadorned aesthetic.

## Visual language

The visual language is austere and systematic. Every decision serves readability and thematic clarity:

- **Monochrome discipline**: One typeface, one size, uppercase throughout. No bold, no italic, no size variation.
- **Negative space as structure**: The vast empty right and lower portions of the viewport frame the content as a deliberate compositional choice.
- **Tabular alignment**: Employment dates and company names align to invisible columns created by monospace character widths, producing an orderly, data-like presentation.
- **Glyph-based punctuation**: Date ranges use a rightward arrow (→) and open-ended employment shows an ellipsis sequence (····), treating punctuation as visual elements within the monospace grid.
- **Theme as identity**: The three color modes are not subtle variations but distinct personalities—professional neutral, subdued nocturnal, and assertively vibrant.
- **Square geometry**: All elements retain sharp corners with no rounding, reinforcing the technical, unembellished character.

The absence of imagery, icons (beyond the bracketed theme indicator), or decorative elements means the typography itself becomes the image. The site's character is defined by how the monospace grid organizes information across the empty canvas.

## Components

### Site header

- **Anatomy**: Site identifier "P.CV" positioned top-left; a bracketed icon `[ ]` or similar control top-right
- **Surface**: Transparent, inheriting page background
- **Typography**: `{typography.site-id}`, uppercase
- **Spacing**: Inset from viewport edges by `{spacing.inset}`

### Identity block

- **Anatomy**: Name on one line, role on the next
- **Typography**: `{typography.identity}`, uppercase, identical sizing to all other text
- **Spacing**: Separated from header by `{spacing.section-gap}`

### Experience list

- **Anatomy**: Repeated rows of company name, date range, and status indicator
- **Composition**: Company name left-aligned; dates indented with arrow separator; current role shows "2024 → ····" indicating ongoing employment
- **Typography**: `{typography.body}`
- **Spacing**: `{spacing.list-gap}` between entries

### Contact links

- **Anatomy**: "PORTFOLIO" and "EMAIL" as stacked text links
- **Typography**: `{typography.navigation}`, uppercase
- **Spacing**: `{spacing.section-gap}` from experience list; `{spacing.list-gap}` between items

### Social links

- **Anatomy**: "BLUESKY", "INSTAGRAM", "LINKEDIN", "TWITTER" as stacked text links
- **Typography**: `{typography.navigation}`, uppercase
- **Spacing**: `{spacing.section-gap}` from contact links; `{spacing.list-gap}` between items

### Theme toggle

- **Anatomy**: Text label "THEME" with a bracketed indicator showing current state (e.g., `[↑]`, `[ ]`)
- **Surface**: In light mode, appears as text only or minimal button; in dark mode, shows as filled button with light background and dark text; in accent mode, white text on blue
- **Typography**: `{typography.theme-control}`, uppercase
- **Shape**: `{rounded.button}` (0.125rem radius) when in button presentation; otherwise sharp corners
- **Spacing**: Positioned at bottom-left with `{spacing.inset}` margin
- **Variants**: Three visible states corresponding to the three active themes

## Responsive behavior

The design's single-column, left-aligned structure is inherently responsive. The content block maintains its position and scale while the surrounding negative space expands or contracts with viewport width. At narrower widths, the tabular date alignment in the experience section may require horizontal scrolling or wrapping; consider allowing the date column to drop below company names on very narrow viewports. The monospace typeface at 16px remains legible without adjustment across most device sizes. The theme toggle should remain accessible at the bottom of the viewport or as a fixed element. Touch targets for links should maintain adequate height; the current stacked layout with `{spacing.list-gap}` provides sufficient separation.

## Practical implementation guidance

### Preserve
- The single-typeface, single-size constraint. Do not introduce size hierarchy or secondary fonts.
- Uppercase treatment across all text elements.
- The three complete theme palettes with synchronized ground and ink values.
- Generous negative space and left-aligned asymmetry.
- Monospace-based tabular alignment for employment dates.
- Sharp corners throughout; the 0.125rem button radius is the only rounding, applied sparingly.

### Avoid
- Adding visual decoration: borders, shadows, gradients, or background patterns.
- Breaking the monochrome typographic discipline with bold or italic styles.
- Partial theming where elements from different modes mix.
- Centering content or introducing multi-column layouts.
- Using non-monospace fonts for any element, including the theme indicator.
- Applying border radius to cards, panels, or surfaces; keep the square geometry.

### Recommended build order
1. Establish the root with I A Writer Mono S at 16px/24px and the spacing unit of 0.25rem
2. Implement the three theme palettes as CSS custom properties or a theme provider
3. Build the single-column layout with consistent inset margins and 0rem surface radius
4. Add content blocks: header, identity, experience, contact, social, theme toggle
5. Implement the theme switching mechanism with persistent state
6. Test all three modes for color contrast and readability

### Accessibility
- Ensure color contrast ratios meet WCAG AA in all three themes: light mode (ink on canvas), dark mode (dark-ink on dark-canvas), and accent mode (accent-ink on accent-blue)
- The theme toggle should be a proper button with accessible label, not just text
- Links should have visible focus indicators that work across all three themes
- Consider respecting `prefers-color-scheme` for initial theme selection
- The bracketed theme indicator should have an accessible name describing the current state and available action

## Scope note

This guide covers the single-page CV surface visible at p.cv. It does not include any subpages, portfolio content, email client behavior, or theme persistence mechanisms beyond the visible toggle. Motion, transitions between themes, and hover or focus states are not documented from the still images provided. The spacing and radius values derive from the extracted interface data; the 3px paragraph padding is retained as an exact measurement while larger layout values use the 0.25rem relative unit scale.
