# How arena.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/arena.ai-design)

Last updated: 2026-08-03

## Captured pages

[![Dense leaderboard table with dark rails and white Start Voting button](https://pin.fontofweb.com/9344?format=jpg)](https://design.withfudge.com/share/pin-9344)

[Dense leaderboard table with dark rails and white Start Voting button](https://design.withfudge.com/share/pin-9344)

[![Two-column battle layout with code pane and answer panel](https://pin.fontofweb.com/8747?format=jpg)](https://design.withfudge.com/share/pin-8747)

[Two-column battle layout with code pane and answer panel](https://design.withfudge.com/share/pin-8747)

[![Comparison workspace with centered loading state and option cards](https://pin.fontofweb.com/8746?format=jpg)](https://design.withfudge.com/share/pin-8746)

[Comparison workspace with centered loading state and option cards](https://design.withfudge.com/share/pin-8746)

## Overview

Arena is a dark benchmarking interface built around comparison and ranking. The page feels technical before it feels decorative. A left rail handles navigation and filters, the center of the page carries dense ranked content, and the battle views split into opposing panes that keep the comparison in plain sight. The layout is organized for fast scanning, not for leisurely reading.

The system depends on contrast between closely related dark surfaces more than on large color jumps. Coral-red is reserved for emphasis, edge treatment, and high-priority signals. Blue supports links and model references. Green, purple, and pink act as small categorical notes. The typography is restrained, with By Chi Long Trieu carrying most of the interface, Martina Plantijn giving the larger headings a lighter editorial note, Basel Grotesk Mono handling technical labels, Inter appearing in utility copy, and Applesystem showing up in compact 14px utility text.

## Colors

The interface lives almost entirely in the dark half of the palette. `surface`, `surface-strong`, `surface-muted`, `canvas-dark`, and the two border tones form a tight structural family. They are close enough to feel like one environment, but separated enough to divide rails, cards, rows, and nested panels. That narrow spacing between values matters because the page uses 1px borders and subtle fill changes to keep the hierarchy readable.

`action` is the most vivid color, but it does not read as a broad fill color for the main button. In the supplied views, coral-red behaves more like an emphasis color: a border, a highlight, a selected edge, or a cue that something is active or important. The visible primary button is a neutral white pill, so the strongest action color should stay selective rather than becoming the default button background. `link` and `info` support blue interactive states and model references. `success`, `accent-purple`, and `warning` remain secondary accents for small badges or status markers.

The light values are part of the same system, not a separate bright theme. `canvas`, `ink`, `ink-muted`, and `ink-dim` support the white button treatment, pale labels, and readable text against dark stages. The result is a dark interface with warm off-white text, restrained blue link moments, and a single coral accent that never overwhelms the table or the workspace.

## Typography

Arena uses five material families, each with a clear role. **By Chi Long Trieu** is the main workhorse for nav labels, table content, filter text, buttons, and general UI copy. **Martina Plantijn** carries the larger headings and gives the page a lighter, more editorial edge without becoming ornamental. **Basel Grotesk Mono** is the technical voice for model identifiers, rank labels, chips, and code-like fragments. **Inter** appears in longer utility copy where a neutral reading voice helps. **Applesystem** shows up in compact utility text and small dense labels. Licensing is not stated in the packet.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Martina Plantijn | 1.5rem | 300 | 1.33 | -0.025em | Page title and the most prominent section headings |
| section-display | Martina Plantijn | 1rem | 300 | 1.25 | -0.025em | Smaller section headings and label-led titles |
| card-heading | By Chi Long Trieu | 1.125rem | 600 | 1.56 | 0em | Prominent cards, alerts, and workspace headers |
| body | By Chi Long Trieu | 1rem | 400 | 1.5 | 0em | Table cells, descriptive text, and general reading copy |
| body-strong | By Chi Long Trieu | 1rem | 500 | 1.5 | 0em | Strong labels, selected items, and button text |
| meta | By Chi Long Trieu | 0.875rem | 400 | 1.43 | 0em | Navigation, filter labels, and supporting captions |
| mono-label | Basel Grotesk Mono | 0.875rem | 500 | 1.43 | 0em | Model names, compact chips, and technical labels |
| mono-micro | Basel Grotesk Mono | 0.6875rem | 400 | 1.67 | 0em | Tiny status values and secondary technical notes |
| code | Basel Grotesk Mono | 0.7875rem | 500 | 1.71 | 0em | Code blocks and inline code-like fragments |
| utility | Inter | 0.875rem | 400 | 1.71 | 0em | Longer helper copy and side-note text |
| system-fallback | Applesystem | 0.875rem | 400 | 1 | 0em | Dense utility text and compact labels |

The hierarchy is modest in scale but clear in role. Martina Plantijn gives the page its lightest editorial note at 24px; By Chi Long Trieu does most of the legwork at 14px, 16px, and 18px; Basel Grotesk Mono compresses technical information into a denser rhythm. Applesystem sits close to the same size as the utility voice, but it reads more like a compact system face for tight UI moments. Keep line lengths short in display areas and let metadata stay compact.

## Layout

Arena is built as a set of nested rails and data fields. The leaderboard view makes the pattern clear: a narrow left sidebar for global navigation, a second column for filtering and category selection, and a wide right-hand table that fills the rest of the screen. The page is organized for scanning. Each region is bounded by 1px lines or a darker fill, so the eye can move from rail to rail without losing the structure.

Spacing is tight but not cramped. Large zones use repeated 32px gutters and padding, while internal controls settle into 8px, 12px, and 16px rhythm. The table body relies on steady row height, aligned columns, and very small visual interruptions. That makes the page feel dense and searchable rather than airy. Labels and numbers stay aligned to a consistent vertical spine, which keeps the ranking information legible even when the table grows long.

The battle workspace uses a different layout but keeps the same discipline. Instead of a wide ranking grid, it splits the page into side-by-side panels: a prompt or answer column on one side and a larger preview or comparison field on the other. The cards inside those columns are still bounded, still compact, and still dark. The coral-red edges around the pair of panels introduce the strongest shape change on the page, but the interior spacing stays restrained. That contrast makes the workspace feel like a lab bench rather than a marketing dashboard.

The interface also uses large uninterrupted dark planes for waiting or empty states. In the comparison view, the right-hand field can sit almost blank with a centered loading mark. That emptiness is deliberate: it keeps the page ready for dense content without forcing every part of the screen to work equally hard. The layout depends on this push and pull between packed data regions and quiet open fields.

## Visual language

Arena’s visual language is built from discipline. The shell is dark, the text is pale, and the accent colors are tightly controlled. Coral-red is the branding needle; blue provides model and link emphasis; green and purple stay in the background as secondary semantic notes. There is little ornamental illustration. Even the more expressive moments stay close to interface grammar: pills, cards, tables, chips, and thin borders.

The page favors hard geometry over soft decoration. Corners are small to medium, not lush. 4px and 6px controls appear often, with 8px and 12px cards making up most of the page architecture. The larger split-workspace panels can open out toward 24px, but they still read as technical surfaces rather than luxury containers. Shadows are minimal and quiet. A subtle lift is fine for floating controls, but the system should never depend on heavy depth.

Tables and comparison cards carry the brand by repetition, not by ornament. Model names, rank values, and status badges all sit in compact rows. A selected line can shift slightly in fill or color, but the overall mood remains sober. That sobriety is part of the identity: Arena feels like a place where the interface steps back so the comparison work can stay visible. The result is a system that looks engineered, precise, and comfortable with density.

## Components

### App shell
- **Anatomy:** left global rail, second filter rail, central content plane, and a thin top control band.
- **Surface:** dark charcoal fills with 1px separators.
- **Typography:** small meta text, compact labels, and occasional mono chips.
- **Hierarchy:** the shell never competes with the data; it frames it.

### Sidebar navigation
- **Anatomy:** icon, label, active row fill, and occasional nested promotional card.
- **Shape:** mostly rectangular, with 4px to 8px rounding on interactive items.
- **Spacing:** stacked rows with narrow vertical rhythm; enough breathing room for scanability, not enough for softness.
- **Visible states:** selected rows read as a darker band with a clear foreground shift.

### Filter rail
- **Anatomy:** section labels, compact toggles, category rows, and slider-like controls.
- **Typography:** `meta` for labels, `mono-label` for compact values.
- **Surface:** dark nested panels with thin borders.
- **Composition:** controls stay vertically aligned and visually subordinate to the main ranking table.

### Ranked table
- **Anatomy:** header row, rank column, model column, score, votes, price, and context.
- **Surface:** one continuous dark table body with visible row dividers.
- **Typography:** `body` for cells, `mono-label` for model names and technical chips.
- **Visible states:** the active row can carry a slightly brighter fill; links shift to blue; badges remain small and contained.
- **Spacing:** cells are tight, with enough padding for readability but no wasted space.

### Battle workspace
- **Anatomy:** prompt or option cards, comparison labels, preview canvas, and small utility icons.
- **Surface:** dark cards edged in coral red, plus a larger dark preview field.
- **Shape:** compact card radii and a slightly larger outer panel radius.
- **Composition:** cards stack vertically in one column and compare against a larger neighbor panel.
- **Visible states:** waiting states should stay centered and calm, not pushed into visual noise.

### Primary action and pills
- **Anatomy:** short text, optional icon, compact button body.
- **Surface:** the main button is a neutral white fill with dark text on dark surroundings.
- **Typography:** `body-strong` or `mono-label` depending on whether the control reads as product or tool.
- **Shape:** small radii, especially on compact pills and chips.
- **Hierarchy:** only the main action should use the light neutral fill; coral-red should stay in border, highlight, or emphasis roles.

## Responsive behavior

On narrower screens, the layout should collapse in a strict order: global navigation, filter controls, then the ranking or workspace content. The leaderboard table should protect the rank and model columns first; secondary numeric columns can compress, wrap, or move behind horizontal scroll before the page loses its scan path. The battle workspace should stack into one column only after the user can still tell which block is the prompt, which block is the answer, and which block is the preview field. Keep the rails collapsible rather than mixing them into the main content. Button labels and chips may wrap, but they should not turn the grid into a loose card cloud.

## Practical implementation guidance

### Preserve
- Keep the dark shell, pale text, and coral emphasis as the primary identity.
- Preserve the 1px grid and the dense table rhythm; that density is the product.
- Keep model names and technical labels in the mono voice.
- Use Martina Plantijn only where the page needs a lighter, authored headline tone.
- Keep panels compact and avoid large soft shadows.

### Avoid
- Avoid turning the interface into a bright marketing page.
- Avoid soft pastel surfaces, oversized radii, or decorative gradients.
- Avoid using coral on every interactive element; it loses force quickly.
- Avoid over-spacing the table or breaking the row cadence.
- Avoid mixing too many type families in one region.

### Recommended build order
1. Build the dark shell and both left rails.
2. Add the ranked table with aligned columns and stable row heights.
3. Add the battle workspace with its split columns and bordered cards.
4. Add chips, badges, and small status treatments.
5. Add the waiting or empty states and then refine spacing and hierarchy.

### Accessibility
- Keep contrast high on all dark surfaces, especially for row labels and table metadata.
- Do not rely on color alone to indicate a selected row or active tab; pair it with fill, border, or weight.
- Make icon-only controls readable with labels or tooltips.
- Keep focus rings visible against dark backgrounds.
- Preserve readable table headers and row groupings when the layout tightens.

## Scope note

This guide covers the supplied desktop leaderboard and battle views plus the shared shell, table, cards, and control surfaces. It does not cover mobile reflow, exact breakpoint values, motion, hover or disabled states, or alternate page families. All rem values are rounded to the packet’s 2px step.
