# How typeof.net is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/typeof.net-design)

Last updated: 2026-08-10

## Captured pages

[![Iosevka Customizer variants grid showing character selection with dropdown inheritance controls and multi-style preview columns for upright, italic, and oblique on dark background](https://pin.fontofweb.com/5629?format=jpg)](https://design.withfudge.com/share/pin-5629)

[Iosevka Customizer variants grid showing character selection with dropdown inheritance controls and multi-style preview columns for upright, italic, and oblique on dark background](https://design.withfudge.com/share/pin-5629)

[![Iosevka Customizer basics panel with family name input, serif and spacing dropdowns, weight and width numeric selectors, slope toggle buttons, and export checkboxes on dark](https://pin.fontofweb.com/5628?format=jpg)](https://design.withfudge.com/share/pin-5628)

[Iosevka Customizer basics panel with family name input, serif and spacing dropdowns, weight and width numeric selectors, slope toggle buttons, and export checkboxes on dark](https://design.withfudge.com/share/pin-5628)

[![Iosevka landing page variants section with large display heading, stylistic set list in three columns, character grid with dropdown selectors, and tabbed navigation for sans and](https://pin.fontofweb.com/5627?format=jpg)](https://design.withfudge.com/share/pin-5627)

[Iosevka landing page variants section with large display heading, stylistic set list in three columns, character grid with dropdown selectors, and tabbed navigation for sans and](https://design.withfudge.com/share/pin-5627)

[![Iosevka landing page spatial efficiency section with large display heading, monospace comparison table showing UCD data against Fira Code and IBM Plex columns](https://pin.fontofweb.com/5626?format=jpg)](https://design.withfudge.com/share/pin-5626)

[Iosevka landing page spatial efficiency section with large display heading, monospace comparison table showing UCD data against Fira Code and IBM Plex columns](https://design.withfudge.com/share/pin-5626)

## Overview

The typeof.net design system presents a dark, technically precise visual language built around the Iosevka monospace type family. The interface reads like a development environment or specialized configuration tool—every element reinforces the site's purpose as a font foundry and customizer. Near-black surfaces dominate, with subtle elevation changes distinguishing interactive panels from the canvas. Cyan accents appear sparingly, marking active states, hyperlinks, and selected values with the clarity of a syntax highlighter. The overall impression is one of controlled density: information-rich grids, tabular data, and configuration controls arranged with the systematic spacing of well-formatted code. This is a design system for users who read text all day and expect their tools to respect typographic nuance.

## Colors

The color palette is intentionally restrained, derived from a dark-theme coding aesthetic. Five core colors establish the full range of surfaces, text, and accents.

| token | value | use |
|---|---|---|
| canvas | `#0a0a0a` | Deepest background, page foundation |
| surface | `#111111` | Primary panel and section backgrounds |
| surface-elevated | `#1a1a1a` | Raised controls, dropdowns, hover states |
| ink | `#e8e8e8` | Primary text, headings, active labels |
| ink-muted | `#888888` | Secondary text, descriptions, inactive options |
| ink-dim | `#555555` | Tertiary text, disabled states, subtle metadata |
| accent | `#5ccfe6` | Active selections, hyperlinks, checked states, numeric highlights |
| accent-dim | `#4a9eb0` | Pressed or hovered accent states |
| border | `#2a2a2a` | Panel outlines, table rules, control separators |
| border-subtle | `#1f1f1f` | Internal grid lines, hairline divisions |

The relationship between tones follows a strict hierarchy: canvas sits below surface, which sits below surface-elevated, creating minimal but perceptible depth. The accent color functions as the only saturated hue, drawing attention to interactive and informational highlights without competing with the type specimens that dominate each view. Text operates on three luminance levels, with ink for primary reading, ink-muted for supporting content, and ink-dim for structural or disabled elements. No light mode is present in the visible interface; the system assumes persistent dark context.

## Typography

All visible text is set in Iosevka, a slender monospace family. The type serves both functional and expressive roles—body copy maintains readable proportions while large display settings showcase the font's architectural qualities.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Iosevka | 4rem | 300 | 1.1 | -0.02em | Major section headings, landing page titles |
| section-display | Iosevka | 2.5rem | 300 | 1.2 | -0.01em | Subsection headings, feature titles |
| body | Iosevka | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, configuration labels |
| body-small | Iosevka | 0.875rem | 400 | 1.5 | 0 | Dropdown values, compact UI text |
| label | Iosevka | 0.75rem | 500 | 1.4 | 0.05em | Tab labels, metadata, small caps navigation |
| code | Iosevka | 0.875rem | 400 | 1.5 | 0 | Tabular data, character specimens, code comparisons |

The hero-display weight of 300 produces an elegant, elongated appearance at large sizes that contrasts with the denser body weights. Negative tracking on display sizes compensates for monospace fixed-width spacing, preventing excessive looseness. The label token uses positive tracking and medium weight to create functional distinction at small sizes. Verify licensing for Iosevka before production use.

## Layout

The layout follows an asymmetric two-column structure on landing pages, with a wide left column for display typography and a narrower right column for explanatory text. This ratio approximately 55:45 creates breathing room around large headings while keeping related content proximate. Configuration interfaces use a more complex multi-panel arrangement: left sidebar for categorical navigation, central workspace for character grids, and right preview for live specimen rendering.

Section spacing is generous, with `6rem` separating major content blocks to prevent the dense typographic content from feeling cramped. Within panels, `1.5rem` gaps separate related controls and text groups. Tight `0.5rem` spacing appears in compact UI such as checkbox lists and tab rows.

The character grid in the customizer uses a rigid matrix layout with uniform cell dimensions, each cell containing a single character and a small dropdown indicator. This grid respects the monospace nature of the typeface—cells align to implicit character widths, reinforcing the systematic quality of the tool. Comparison tables on the landing page use full-width layouts with multiple columns of aligned data, mimicking terminal or spreadsheet formatting.

Border-based separation replaces shadow elevation throughout. Panels and sections are delineated by `1px` rules in `border` or `border-subtle` rather than dimensional shadows, maintaining the flat, technical aesthetic.

## Visual language

The visual language communicates precision through restraint. Every interactive element is rectangular with minimal rounding—`0.25rem` corners on panels and inputs suggest slight softness without departing from the utilitarian character. There are no gradients, no drop shadows, no decorative imagery beyond the type specimens themselves.

Character specimens are the primary visual content. They appear at multiple scales: massive display settings for feature headings, body-size paragraphs for proofing text, and dense grid arrangements for individual glyph selection. The specimens include mixed scripts, mathematical symbols, and programming constructs, demonstrating the font's range.

Accent usage follows a disciplined pattern: cyan appears for active toggle states, selected numeric values, hyperlinks within body text, and the small checkmarks that confirm selections. This limited application makes each accent instance meaningful. Inactive or alternative options recede into `ink-muted` or `ink-dim`.

The interface avoids decorative iconography. Functional indicators are typographic: small downward arrows for dropdowns, checkmarks for confirmation, numeric labels for ordering. Even the tab navigation in the customizer uses text labels rather than icons.

## Components

### Section heading

Large display typography that anchors major content areas. Uses `hero-display` or `section-display` tokens depending on hierarchy. Positioned in the left column of asymmetric layouts or spanning full width in configuration views. Color is `ink` with occasional `accent` highlights for emphasized words or numbers within the heading.

### Configuration panel

Surface component for grouping related controls. Background is `surface` with `border` outline and `0.25rem` radius. Internal spacing of `1.5rem` separates control groups. Contains labeled rows with left-aligned labels and right-aligned values or inputs.

### Dropdown control

Compact selection interface with `surface-elevated` background, `border` outline, and `body-small` typography. Includes a small downward arrow indicator in `ink-muted`. Active state reveals a menu panel with the same surface treatment. Used for inheritance selection, serif style, and spacing configuration.

### Toggle button group

Mutually exclusive option selectors arranged horizontally. Each button has `surface` background, `ink-muted` text, and `border` outline. Active state shifts to `surface-elevated` background with `ink` text and may include a `accent` checkmark or underline. Used for slope selection (Upright, Oblique, Italic) and weight/width numeric choices.

### Checkbox

Small square indicator with `border` outline and no fill when unchecked. Checked state displays a `accent` checkmark or fill. Accompanied by `body-small` label text. Used for export options and feature toggles.

### Character grid

Dense matrix of selectable characters on `surface` background. Each cell contains a single glyph in `ink` with a small downward arrow in `ink-dim` indicating variant selection. Cell borders use `border-subtle` for minimal separation. Hover or active cells may shift to `surface-elevated`. Grid spacing is tight, approximately `0.5rem` between cell contents, with cells sized to accommodate the monospace character width.

### Comparison table

Full-width tabular display for font metrics and glyph data. Header row uses `label` typography in `ink-muted`. Data cells use `code` typography in `ink`. Column separators use `border-subtle`. Row hover states may apply `surface-elevated` background. Used for spatial efficiency demonstrations and technical specifications.

### Tab navigation

Horizontal row of text labels for switching between related views. Active tab uses `ink` with `accent` underline or border. Inactive tabs use `ink-muted`. Compact spacing with `tight` gaps between items. Used for style categories (Sans, Slab) and numeric variant sets.

## Responsive behavior

The two-column landing page layout should stack vertically on narrower viewports, with display headings maintaining size longer than typical due to their role as primary specimens. The character grid in the customizer should reduce visible columns, potentially scrolling horizontally to preserve the matrix structure. Configuration panels should transition to full-width stacked arrangements, with control labels positioned above rather than beside inputs. Tab navigation may wrap to multiple rows or convert to a dropdown selector if horizontal space is constrained. The comparison table requires horizontal scrolling on narrow viewports to preserve column alignment.

## Practical implementation guidance

### Preserve
- The near-black canvas and subtle surface elevation hierarchy
- Monospace typography for every text element, including headings
- Cyan accent as the sole saturated color, applied sparingly
- Rectangular forms with minimal `0.25rem` rounding
- Border-based separation instead of shadows
- Character specimens as the primary visual content

### Avoid
- Adding decorative imagery or illustrations unrelated to type specimens
- Introducing additional accent colors that compete with the cyan
- Using proportional fonts for any interface element
- Applying gradients, shadows, or dimensional effects
- Excessive rounding on controls or panels

### Recommended build order
1. Establish the dark canvas and surface color hierarchy
2. Implement Iosevka at all type scales with appropriate weights
3. Build the configuration panel structure with border outlines
4. Create the character grid with uniform cell sizing
5. Add interactive states with accent highlights
6. Implement the two-column landing layout with display typography
7. Add comparison tables with monospace data alignment

### Accessibility
- Ensure `ink-muted` text maintains minimum 4.5:1 contrast against `surface` backgrounds; adjust to `ink-dim` only for non-essential decorative text
- Provide visible focus indicators using `accent` borders or outlines on interactive elements
- Support keyboard navigation through the character grid and configuration controls
- Consider a light mode alternative for users with photophobia, as the current system assumes persistent dark context
- Maintain sufficient touch targets for grid cells and toggle buttons on pointer devices

## Scope note

This guide covers the Iosevka landing page and customizer interface visible in the supplied images. Mobile layouts, animation, loading states, error handling, and checkout or download flows are not represented. Measurements are practical adaptation targets. The customizer's underlying font generation logic and all glyph variant data fall outside visual system scope.
