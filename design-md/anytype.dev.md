# How anytype.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/anytype.dev-design)

Last updated: 2026-08-08

## Captured pages

[![Leaderboard rows with medal icons, ranked names, and bright scores](https://pin.fontofweb.com/4171?format=jpg)](https://design.withfudge.com/share/pin-4171)

[Leaderboard rows with medal icons, ranked names, and bright scores](https://design.withfudge.com/share/pin-4171)

[![Centered typing passage with orange letter highlights and controls](https://pin.fontofweb.com/4170?format=jpg)](https://design.withfudge.com/share/pin-4170)

[Centered typing passage with orange letter highlights and controls](https://design.withfudge.com/share/pin-4170)

[![Large reading block with one bright line and faded trailing lines](https://pin.fontofweb.com/4169?format=jpg)](https://design.withfudge.com/share/pin-4169)

[Large reading block with one bright line and faded trailing lines](https://design.withfudge.com/share/pin-4169)

[![Lower-contrast paragraph state with the same orange action row](https://pin.fontofweb.com/4168?format=jpg)](https://design.withfudge.com/share/pin-4168)

[Lower-contrast paragraph state with the same orange action row](https://design.withfudge.com/share/pin-4168)

## Overview

Anytype.dev uses a single dark visual voice across the visible desktop views. The site does not split into bright and dark chapters; instead, it stays on a near-black canvas and lets hierarchy come from type size, opacity, and the orange accent. That makes the interface feel focused and self-contained, like a writing room or a timing tool rather than a general marketing site.

The main structures are simple: a leaderboard with three columns, a centered writing view, and a centered reading view that can dim the trailing text. The leaderboard uses strong rows and right-aligned scores. The reading views use a narrow centered text block with a control row below. The result is disciplined and spare, with almost all energy coming from the text itself.

Keep the design language consistent around three ideas: rigid alignment, very large type, and one bright orange action color. White carries the active content, gray carries meta information, and orange marks the current action or highlighted letter. There are no decorative surfaces competing with the text.

## Colors

The palette is small and intentionally severe. Black is the default canvas, off-white is the main text color, gray handles inactive details, and orange supplies every active or interactive accent. The leaderboard adds a gold tone for the top rank icon and a cooler silver-gray for secondary rank markers. The visible system behaves like a single dark mode, with no separate light or photographic surfaces in these views.

| token | hex | use |
|---|---|---|
| `action` | `#FF6A00` | The heading color, highlighted letters, and the Share control |
| `ink` | `#F2F2F2` | Main text, scores, and the bright reading line |
| `muted-ink` | `#8F8F8F` | Accuracy notes, WPM text, and quieter controls |
| `dim-ink` | `#3B3B3B` | The faded part of the reading passage |
| `canvas` | `#050505` | Full-page background across the visible screens |
| `border` | `#181818` | Leaderboard dividers and row separation |
| `accent-gold` | `#F2B100` | The top medal and the warm trophy icon |
| `accent-slate` | `#A9A9A9` | The muted medal icon and secondary achievement marks |

The balance is straightforward: orange is reserved for things you can act on or are meant to notice immediately, gold is reserved for rank, and gray is reserved for support information. White text stays readable against the canvas even when the line is short or centered. When text recedes, it does so by dropping toward charcoal rather than changing hue. That keeps the page coherent even when the passage is partially faded.

## Typography

All visible text uses **Cursor Gothic**. The family gives the interface a compact, slightly mechanical reading voice that fits both the leaderboard and the timed text views. The system depends on scale and weight more than on switching families. Display text is large and steady. Meta text is smaller, tighter, and less bright. The orange accent reads as a change in state rather than a separate stylistic layer.

Verify licensing for this family before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Cursor Gothic | 3.5rem | 700 | 1 | 0em | Leaderboard heading and the largest page labels |
| `section-display` | Cursor Gothic | 2.5rem | 700 | 1 | 0em | Large ranked numbers and short statement text |
| `reading-display` | Cursor Gothic | 2.25rem | 400 | 1.1 | 0em | Centered reading paragraphs and typed passages |
| `body` | Cursor Gothic | 1rem | 500 | 1.25 | 0em | Names, secondary row details, and simple labels |
| `meta` | Cursor Gothic | 0.75rem | 500 | 1.2 | 0.02em | Accuracy text, WPM text, and lower-importance metadata |
| `action` | Cursor Gothic | 1.5rem | 600 | 1 | 0em | Share, Restart, and other text-only controls |
| `score` | Cursor Gothic | 2.5rem | 700 | 1 | 0em | The large leaderboard score column |

The hierarchy is built with strong jumps. The title is loud and upper-case. The score column is almost as prominent as the title. The centered passages are slightly smaller but still very large by interface standards, which keeps the writing surface from feeling like a normal article layout. Supporting lines fall quickly to 12px and 16px equivalents, so they stay present without stealing attention from the main content. The type system should remain in whole-step increments and avoid small in-between sizes.

## Layout

The page is organized around one broad canvas with restrained internal structure. The leaderboard is a strict list: a narrow left zone for rank or medal, a middle zone for the person name and accuracy line, and a right zone for the score. Each row spans the width with a single thin divider beneath it. The score column is anchored to the far right so the numeric rhythm stays stable no matter how long a name becomes.

The writing views are the opposite. They float in the center of the screen and leave large empty margins around the text block. The line length is deliberately short enough to create a shaped paragraph rather than a full-width block. In the first typing view, the active line is bright and the remaining line turns orange where the current letters or words are being worked through. In the reading view, the top line stays bright while the following lines sink into darker gray. That creates a visual progression from active thought to background text.

The control row sits below the paragraph and leans to the right. Share is the most visible item because it uses orange, while WPM and Restart stay gray. That placement matters: the action row should feel attached to the passage, not like a generic toolbar. The layout is almost entirely flat, so the empty space does the work of separating regions instead of cards, shadows, or panels.

## Visual language

Anytype.dev looks disciplined, quiet, and slightly austere. The system uses black as a stage, not as decoration. On that stage, orange is the only warm signal, so it feels intentional whenever it appears. It is used for the page title, selected characters, and the Share action, which gives the interface a single consistent source of energy.

The visible shapes are mostly rectilinear. Rows are separated by thin lines, not by boxes. The writing views have no framing chrome at all; they rely on centering and spacing to create focus. Even the leaderboard medals feel functional rather than ornamental. Gold marks the top position, silver-gray marks the secondary position, and orange marks a strong but non-winning rank.

The system also uses contrast as a narrative tool. Bright white means the user should read it now. Gray means the detail is present but not central. Dim charcoal means the line should feel distant or completed. That simple ladder of emphasis makes the interface feel like a live text state machine without needing visible widgets around every action.

## Components

### Leaderboard

The leaderboard is the most structured surface. Each row needs three zones: a rank or medal slot at the left, a name and accuracy block in the middle, and a score at the right. The first three entries use icon-like medal marks instead of plain numbers, which gives the top of the list a ceremonial feel. The remaining ranks switch to large gray numerals, which makes the list easy to scan while still keeping the hierarchy clear.

The names are bold but not oversized. The accuracy line sits directly below each name in a smaller gray style and uses a dot separator before the time value. This keeps the information compact and easy to compare. Scores are much larger and visually heavier than the supporting text, so the eye lands on the right column first and then returns to the left for identity.

The separator lines should stay thin and dark. They should define rows without turning the leaderboard into a grid. This component depends on a strict baseline and consistent vertical rhythm more than on decorative styling.

### Timed writing view

The typing screen is centered and built for focus. The text block is wide enough to read comfortably but narrow enough to create careful line breaks. The active text is bright white, and the current letters or words can turn orange to show progress. The cursor is thin and quiet, not a thick insertion bar. That detail matters because the page is about rhythm and continuity, not software chrome.

The action row beneath the passage is text-only. Share uses the orange accent and feels like the primary control. WPM sits beside it in gray, and Restart follows in the same low-contrast style. None of the controls need filled buttons. Their simplicity keeps attention on the writing task rather than on interface decoration.

The key visual state is transition: the same sentence can move from bright to dim or from white to orange as the user moves through it. That makes the component feel responsive even when the structure stays unchanged.

### Reading view

The reading state uses the same centered stage, but the contrast shifts. The leading line stays bright while the rest of the passage sinks into dark gray. That creates a strong sense of what matters now and what has already been passed. The paragraph should keep a stable width, because the line breaks are part of the composition and help the text feel deliberate.

This component needs the most restraint. A small change in opacity is enough to separate active text from inactive text. Avoid adding dividers, cards, or extra labels around it. The control row remains in place, with Share still carrying the orange accent. That gives the reading state continuity with the typing state while still making the visual mood feel calmer.

### Control row

The control row is a text-based action strip. Its role is to finish the centered writing state without breaking the calm. The accent action should lead, and the supporting values should remain muted. Spacing between items should be wide enough to read as deliberate, but not so wide that the row feels detached from the paragraph above. The control row works best when it reads as a small conclusion to the text block rather than as a navigation bar.

## Responsive behavior

On narrower screens, the leaderboard should keep the score column readable and may need to reduce the left gutter before it compresses the type. The rows should remain row-based, not card-based. For the writing views, the centered paragraph should stay centered and should not become a full-width wall of text. The controls should remain directly below the passage and keep the orange Share action first.

The type scale should step down in clean increments, but the hierarchy should stay obvious: title first, passage second, metadata third. Avoid letting the smaller text become too tiny, because the interface depends on legibility in a low-light setting. If the line length has to change, preserve the deliberate two-to-four-line rhythm instead of forcing awkward single-line wraps.

## Practical implementation guidance

### Preserve

Keep the dark canvas, the orange accent, and the layered gray system intact. Preserve the rigid leaderboard alignment, the wide empty margins in the writing states, and the simple text-only controls. Keep the interface flat and quiet so the type remains the main event. Preserve the sense that orange means the active thing, gold means achievement, and gray means support.

### Avoid

Avoid extra surface colors, gradients, shadows, and card containers. Avoid mixing in a second display family or adding ornamental UI around the centered passages. Avoid treating the leaderboard like a dashboard with many visual widgets. Avoid shrinking the writing block until it feels like a normal article column. Avoid encoding rank only through color, because the icon and number changes also carry meaning.

### Recommended build order

1. Build the canvas color and the type scale first.
2. Recreate the leaderboard row pattern with fixed left, middle, and right zones.
3. Add the score column and the divider system.
4. Build the centered typing stage with highlighted spans and the control row.
5. Add the dimmed reading stage as a separate state of the same structure.
6. Finish with responsive tightening so the hierarchy survives narrower widths.

### Accessibility

Use color as one layer of meaning, not the only layer. Keep the orange accent bright enough to stand out on black, and keep the gray text legible against the same background. Make sure keyboard focus remains visible on Share and Restart even though the controls are text-only. Maintain readable line length for the centered passages and do not let the dimmed text fall below comfortable contrast. If rank is communicated with medal color, also keep the rank order explicit through position and numbering.

## Scope note

This guide covers the dark desktop leaderboard and timed reading states on anytype.dev. Mobile breakpoints, motion, loading states, alternate themes, and unseen component variants are not included. Measurements are practical adaptation targets.
