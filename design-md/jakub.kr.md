# How jakub.kr is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/jakub.kr-design)

Last updated: 2026-08-10

## Captured pages

[![Article page with table of contents sidebar, code snippet, and interactive text-wrap comparison demo with before and after cards.](https://pin.fontofweb.com/8758?format=jpg)](https://design.withfudge.com/share/pin-8758)

[Article page with table of contents sidebar, code snippet, and interactive text-wrap comparison demo with before and after cards.](https://design.withfudge.com/share/pin-8758)

[![Color gradient swatch demonstration showing border visibility toggle with blue-to-white stepped palette on dark background.](https://pin.fontofweb.com/8757?format=jpg)](https://design.withfudge.com/share/pin-8757)

[Color gradient swatch demonstration showing border visibility toggle with blue-to-white stepped palette on dark background.](https://design.withfudge.com/share/pin-8757)

[![Interactive concentric border radius calculator with three sliders controlling outer radius, inner radius, and padding values.](https://pin.fontofweb.com/8756?format=jpg)](https://design.withfudge.com/share/pin-8756)

[Interactive concentric border radius calculator with three sliders controlling outer radius, inner radius, and padding values.](https://design.withfudge.com/share/pin-8756)

[![Table of contents navigation panel with active section indicator and monospace section numbering on dark background.](https://pin.fontofweb.com/8755?format=jpg)](https://design.withfudge.com/share/pin-8755)

[Table of contents navigation panel with active section indicator and monospace section numbering on dark background.](https://design.withfudge.com/share/pin-8755)

## Overview

This design system powers a personal technical writing site built around dark-mode aesthetics and engineering precision. The visual language centers on near-black backgrounds with subtle surface elevation, creating depth through thin white-glow borders rather than heavy shadows. Content is presented in a clean two-column layout: a persistent table of contents anchors the left side while the main reading area occupies the center. The system prioritizes readability for long-form technical prose while supporting rich interactive demonstrations embedded directly within articles. Every element reinforces a craft-oriented, detail-focused personality—monospace type appears for code and section numbering, while a warm, highly legible sans-serif carries body text. The overall impression is of a developer's notebook made public: rigorous, restrained, and intentionally unadorned except where interactivity serves explanation.

## Colors

The palette is strictly dark-mode with controlled accent usage. Backgrounds range from pure black to slightly lifted surfaces, with all text in white. Blue appears only in interactive demonstrations and data visualization, never as a brand element in static content.

| token | value | use |
|---|---|---|
| canvas | `#000000` | Page background, deepest layer |
| surface | `#101010` | Card backgrounds, code blocks, demo containers |
| ink | `#FFFFFF` | Primary text, headings, active navigation, borders |
| accent-blue | `#3BA3D8` | Interactive elements, data visualization, slider fills |
| accent-blue-light | `#8DCEF5` | Gradient endpoints, highlight states |
| accent-teal | `#0A5F7F` | Deep gradient stops, dark accent backgrounds |
| accent-teal-deep | `#126B8C` | Mid-tone gradient stops, stepped palette bands |

The dark hierarchy works through luminance steps rather than color. Pure black canvas lets slightly lighter surfaces float forward. The `ink` color doubles as the border source: at 8% opacity it creates a distinctive "white glow" effect—barely visible edges that define boundaries without the heaviness of opaque borders. This appears consistently on code blocks, demo containers, and interactive cards. Blue enters only within demonstrations: gradient swatches show stepped bands from deep teal through bright blue to light sky, slider tracks fill with accent blue, and comparison visuals use the full cool range. The palette intentionally avoids warm tones, maintaining a technical atmosphere throughout.

## Typography

Two families serve distinct roles: Inter handles all prose and interface text, while Berkeley Mono appears exclusively for code and numerical labels. The system uses a limited size range with weight and color providing hierarchy rather than dramatic scale shifts.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| body | Inter | 1rem | 400 | 1.625 | normal | Article paragraphs, navigation links |
| body-small | Inter | 0.875rem | 400 | 1.4286 | normal | Table of contents, captions, secondary labels |
| body-tight | Inter | 0.8125rem | 400 | 1.625 | normal | Dense UI text, metadata |
| heading-section | Inter | 1rem | 550 | 1.625 | normal | Article section headings (h1) |
| heading-lead | Inter | 1.125rem | 500 | 1.375 | normal | Article introduction, lead paragraphs |
| label | Inter | 0.875rem | 500 | 1.4286 | normal | Button text, control labels |
| code | Berkeley Mono | 0.875rem | 500 | 1.4286 | normal | Code blocks, inline code, section numbers |
| caption | Inter | 0.8125rem | 400 | 1.625 | normal | Figure captions, helper text |

Inter appears at 400 Regular for body text, 500 Medium for labels and buttons, and 550 for section headings—a weight between Medium and Semibold that creates crisp hierarchy without heaviness. Berkeley Mono by Neil Panchal, distributed by Us Graphics Company, serves at 500 weight for code contexts. Verify licensing for these families before production use. Line heights are generous for body text (26px at 16px size) to support extended reading, while tighter leading (20px at 14px size) suits captions and UI labels. No display sizes or dramatic scale contrasts appear; the system's voice is quiet and confident.

## Layout

The page structure follows a fixed sidebar with fluid main content. The table of contents occupies a narrow left column, pinned to the viewport edge, while the article content centers in a reading-width column with ample surrounding space.

The grid uses a single dominant column for reading, approximately 65-70 characters wide, with the sidebar sitting outside this flow. Article content stacks vertically with consistent section spacing. Interactive demonstrations break the text flow as full-width cards within the reading column, maintaining the same maximum width as prose paragraphs.

Spacing follows a 2px base unit (0.125rem), with practical increments at 8px, 12px, 16px, 24px, 32px, and 96px. Section breaks use 32px vertical margins between content blocks, while the header area carries a substantial 96px bottom margin before article content begins. Card padding uses 12px-16px combinations, with code blocks receiving 12px vertical and 16px horizontal padding. Demo containers expand to 16px-24px padding for more complex interactive content.

The sidebar table of contents uses 24px bottom margin on its container, with individual items spaced by implicit line height rather than explicit margins. Navigation links in the header area carry 64 instances of consistent 16px/26px styling, suggesting a dense but readable link cluster.

## Visual language

The aesthetic is "engineered minimalism"—every decorative choice serves function. Surfaces are flat with subtle elevation created by the white-glow border treatment. Rounded corners appear on interactive elements and containers but stay restrained: 8px for cards, 12px for larger panels, 16px for demo containers, and full pills only for tags or small labels. The concentric border radius demonstration reveals careful attention to geometric relationships, with outer radius, inner radius, and padding values coordinated mathematically.

Imagery and data visualization use stepped gradients rather than smooth blends, particularly visible in the color swatch demonstration where discrete blue bands create measurable, comparable segments. This stepped approach reinforces the system's analytical character.

Shadows appear minimally: a single `rgba(255, 255, 255, 0.08) 0px 0px 0px 1px` inset-like glow defines card perimeters without casting directional shadows. No blur-radius shadows exist in the system; depth comes from border luminance and surface color shifts alone.

Interactive elements use native-feeling controls—sliders with filled tracks, checkboxes with subtle borders—that respect platform conventions while matching the dark theme. The visual language avoids skeuomorphism, gradients on UI chrome, and animated transitions in static elements.

## Components

### Table of Contents

- **Anatomy**: Section icon (three horizontal lines), title "Table of Contents", numbered list of article sections with monospace numerals, active section indicator
- **Surface**: Transparent background, inherits canvas
- **Typography**: `{typography.body-small}` for items, `{typography.code}` for section numbers, `{typography.body}` for title
- **Spacing**: 24px bottom margin on container; items stack with natural line height
- **Composition**: Left-aligned, fixed position; active item shows white text while inactive items appear in muted gray
- **States**: Active section receives white ink color; inactive sections use reduced opacity of same ink value

### Code Block

- **Anatomy**: Monospace text content, optional copy action button at right edge
- **Surface**: `{colors.surface}` background, `{colors.border-subtle}` 1px border at 8% opacity, `{rounded.control}` corners
- **Typography**: `{typography.code}`
- **Spacing**: 12px vertical padding, 16px horizontal padding; 14px horizontal padding on action button
- **Composition**: Full-width within reading column; text left-aligned; action button positioned at right edge vertically centered

### Interactive Demo Container

- **Anatomy**: Title or label area, interactive control area, parameter display, caption
- **Surface**: `{colors.surface}` background, `{colors.border-subtle}` 1px border at 8% opacity, `{rounded.demo}` corners (16px)
- **Typography**: `{typography.heading-section}` for titles, `{typography.label}` for parameter labels, `{typography.caption}` for explanatory text
- **Spacing**: 16px-24px padding; 32px vertical margin from surrounding content
- **Composition**: Self-contained card breaking text flow; internal elements stack vertically with 8px-16px gaps
- **Variants**: Text-wrap comparison (side-by-side cards), color gradient (full-width swatch), border radius calculator (centered preview with slider row)

### Slider Control

- **Anatomy**: Label, value display, horizontal track with draggable thumb
- **Surface**: Track uses surface-elevated unfilled portion, `{colors.accent-blue}` filled portion; thumb is circular with elevated surface
- **Typography**: `{typography.label}` for parameter name, `{typography.body-small}` for value
- **Spacing**: Label and value on same row with space-between; track sits below with 8px top margin
- **Composition**: Multiple sliders arrange horizontally in a row with consistent spacing

### Article Section Heading

- **Anatomy**: Section number in monospace, heading text
- **Surface**: Transparent
- **Typography**: `{typography.heading-section}`; section number uses `{typography.code}`
- **Spacing**: 8px bottom margin below heading
- **Composition**: Number and text inline, separated by space

### Navigation Link

- **Anatomy**: Text label only, no visible container
- **Surface**: Transparent
- **Typography**: `{typography.body}`
- **States**: Default in `{colors.ink}`; no visible hover state captured in still images

## Responsive behavior

The sidebar table of contents likely collapses to a top-bar or drawer pattern on narrow viewports, though only desktop layouts are visible. The reading column should maintain comfortable measure (65-75 characters) across breakpoints, with padding scaling from 16px to 24px. Interactive demos may stack internal elements vertically on narrow screens rather than side-by-side. Font sizes remain fixed in rem units, preserving readability without viewport-based scaling. The dark canvas requires no inversion logic—this is a native dark-mode system with no light variant visible.

## Practical implementation guidance

### Preserve
- The exact 2px spacing unit and its multiples; the system's precision depends on this fine grain
- The white-glow border treatment (`rgba(255, 255, 255, 0.08)`) as the primary depth mechanism
- Monospace section numbering in the table of contents and article headings
- The stepped gradient approach for data visualization rather than smooth gradients
- Generous line height (1.625) for body text to maintain reading comfort

### Avoid
- Adding color to static content beyond the blue accent family; the palette is intentionally restrained
- Using blur-radius shadows; the system defines edges with glow borders only
- Dramatic scale contrasts in typography; hierarchy comes from weight and color, not size
- Light mode variants without complete palette rethinking; the current system is natively dark

### Recommended build order
1. Establish the dark canvas and surface color stack with the white-glow border utility
2. Implement Inter at 400/500/550 weights with the body and heading size set
3. Build the reading column layout with proper measure and sidebar positioning
4. Add Berkeley Mono for code contexts and section numbering
5. Create the demo container component with consistent padding and border treatment
6. Implement interactive controls (sliders, toggles) with accent blue fills
7. Add the table of contents with active state tracking

### Accessibility
- Ensure the white-glow borders meet non-text contrast requirements against the near-black canvas; the 0.08 alpha value may need adjustment for WCAG compliance
- Provide visible focus indicators for keyboard navigation; the current subtle borders may be insufficient
- Maintain the generous line height and paragraph spacing for low-vision readers
- Consider adding `prefers-reduced-motion` support for interactive demonstrations with animated transitions

## Scope note

This guide covers the article reading experience and interactive demonstration components visible on the writing pages. The homepage, navigation pages, and any form or error states are not represented. Motion design, mobile breakpoints, and hover or focus states are not documented from the available material. Measurements are derived from the exact values supplied in the design facts.
