# How dashboard.internetcomputer.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dashboard.internetcomputer.org-design)

Last updated: 2026-08-04

## Captured pages

[![Wide subnet table with flags, status pills, and blue load bars](https://pin.fontofweb.com/9061?format=jpg)](https://design.withfudge.com/share/pin-9061)

[Wide subnet table with flags, status pills, and blue load bars](https://design.withfudge.com/share/pin-9061)

[![Dark metric grid with large totals and compact chart controls](https://pin.fontofweb.com/9060?format=jpg)](https://design.withfudge.com/share/pin-9060)

[Dark metric grid with large totals and compact chart controls](https://design.withfudge.com/share/pin-9060)

[![Globe-led decentralization view with a right-side stats panel](https://pin.fontofweb.com/9059?format=jpg)](https://design.withfudge.com/share/pin-9059)

[Globe-led decentralization view with a right-side stats panel](https://design.withfudge.com/share/pin-9059)

[![Map-heavy network view with cycle burn rate and KPI cards](https://pin.fontofweb.com/9058?format=jpg)](https://design.withfudge.com/share/pin-9058)

[Map-heavy network view with cycle burn rate and KPI cards](https://design.withfudge.com/share/pin-9058)

## Overview

dashboard.internetcomputer.org is a network-operations dashboard, not a marketing site. The visual system uses a black canvas, charcoal card surfaces, bright white type, and two blue accents to turn large quantities of network data into something scannable. The page feels controlled and technical: rows, charts, and map fragments carry most of the visual weight, while decoration stays minimal.

The hierarchy is built from scale and contrast rather than ornament. Large numeric counters sit beside smaller captions; subnet rows compress several facts into one line; chart cards keep their labels tight and their data strokes bright. The interface is dense, but it avoids looking busy because the surfaces are flat, the borders are thin, and spacing is disciplined. The result is a calm infra shell with strong readability at a distance.

The pages share a single visual logic:
- white headings and numbers on near-black surfaces;
- blue lines, links, and data traces for emphasis;
- gray secondary text for context and metadata;
- rounded cards that isolate each metric block without feeling playful;
- inline status cues such as flags, pills, and tiny bars instead of heavy iconography.

## Colors

The palette is tightly constrained. Black and near-black surfaces dominate, white carries the primary text load, and blue is reserved for the analytic signal. Violet-blue appears in chips and secondary highlights, while muted gray handles supporting text, ticks, and utility chrome. Red is present in the palette for negative or alert states, but it stays rare and should remain visually loud when it appears.

| token | value | use |
|---|---|---|
| `action` | `#0073F5` | Primary links, active chart traces, and selected emphasis |
| `action-soft` | `#66AEFF` | Secondary blue accents, glow-like data emphasis, and link highlights |
| `action-secondary` | `#9E9EFF` | Pale chip fill and secondary badge treatment |
| `canvas` | `#000000` | Global page backdrop and map voids |
| `surface-strong` | `#161616` | Deep section panels and inset dashboard regions |
| `surface-card` | `#1C1C1C` | Standard metric cards, table frames, and chart shells |
| `border` | `#2B2B2B` | Hairline separators and card outlines |
| `border-strong` | `#333333` | Stronger separators inside dense controls and tables |
| `text` | `#FFFFFF` | Headings, values, and high-priority labels |
| `text-muted` | `#A3A3A3` | Supporting text, axes, and helper metadata |
| `danger` | `#FF0000` | Rare alert color for critical states or negative markers |

The relationship between dark and accent color is direct: the dark shell recedes so the blue data lines can do the work of attention. There is no photographic color layer in the system, so the interface must rely on contrast, line weight, and the placement of bright blue strokes to signal activity. Light is used sparingly through white type and pale control surfaces. When the design needs a second accent, the violet-blue chip color stays adjacent to the blue family instead of introducing a new mood.

## Typography

The text system is built from three supplied cuts of the same face, plus two fallback families. By Laurenz Brunner-5211131231169687593 handles body copy and long labels. By Laurenz Brunner-8054451604494891279 handles headings, totals, and controls. By Laurenz Brunner-15854260427221080425 handles compact utility emphasis and tiny status text. Roboto appears in one small numeric accent. System and System-Sansserif appear as generic fallbacks in the mix; neither carries attribution data in the packet.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `display` | By Laurenz Brunner-8054451604494891279 | 3.5rem | 450 | 1.1 | -0.02em | Large dashboard totals and section leads |
| `card-title` | By Laurenz Brunner-8054451604494891279 | 1.25rem | 450 | 1.25 | -0.01em | Card headings such as power, transactions, and burn rate |
| `body` | By Laurenz Brunner-5211131231169687593 | 1rem | 400 | 1.5 | 0em | Supporting prose, row metadata, and explanatory copy |
| `label` | By Laurenz Brunner-5211131231169687593 | 0.875rem | 450 | 1.43 | 0em | Navigation, table headers, buttons, and segmented controls |
| `meta` | By Laurenz Brunner-15854260427221080425 | 0.625rem | 500 | 1.4 | 0em | Compact utility labels, tiny badges, and terse status text |
| `micro` | Roboto | 0.75rem | 400 | 1.2 | 0em | Rare micro-readout treatment in a chart metric |

The rhythm is crisp rather than theatrical. Headings use a slightly heavier cut, but they do not become bulky. Numbers remain clear because the line heights are tight and the letter spacing stays near neutral. The type system works best when values are allowed to stand alone and labels stay short. Long explanatory text should remain rare and should sit in the same family as the surrounding interface, not as a distinct editorial layer. The uncredited fallback families stay hidden behind the core face and should only appear when the primary families are unavailable.

## Layout

The layout is a wide desktop dashboard with strong horizontal organization. A thin top navigation spans the width, leaving room for the logo, primary product areas, search, and a small utility cluster. The main content begins with a hero-like status block: a page title, a concise explanation, and a summary card with a large number and a compact country cluster. That opening establishes the network scale before the deeper data regions begin.

Below the intro, the subnet table occupies the full width. It is the densest component on the page and the visual anchor of the subnet view. Columns stay regular and aligned: subnet ID, type, countries, nodes, decentralization, state, canisters, transactions, and compute load. The table depends on fixed rhythm, not heavy dividers. Thin borders, row spacing, and dark row backgrounds keep the data readable even when many numbers share the same line.

The lower dashboard shifts into a card grid. On the home view, three cards sit across the top row and three more below, each with a chart, a headline metric, and a range selector. The map-led decentralization view replaces the grid’s quiet repetition with a large globe panel and a pinned stats card on the right. That composition uses depth differently: the map becomes the stage, while the summary panel acts as the reading surface.

Spacing stays generous at the page edge and tighter inside cards. Large gutters keep the interface from feeling claustrophobic even when the page contains many fields. Inside cards, 24px and 16px steps keep titles, numbers, legends, and controls close enough to feel related but far enough apart to remain legible.

## Visual language

The visual language is technical, restrained, and infrastructural. It uses the language of monitoring: cards, counters, bars, traces, and tabs. Blue linework carries motion and priority without animation. Flat fills and subtle borders keep the surfaces stable so the numeric content can do the talking. The interface reads as a control room for a global network.

Several repeated motifs define the brand:
- bright blue strokes inside dark chart wells;
- pale lilac pills for category tags;
- small flag clusters that compress country presence into a tiny visual ledger;
- horizontal progress bars that make state, canister count, transactions, and load easy to compare;
- map outlines and node markers that turn geography into a network diagram.

The system avoids soft shadows, gradients, and glossy treatments. Depth comes from layering panels over the black canvas and from the slight contrast between card fills and the surrounding background. Corner radii are modest, so the interface feels polished but not friendly. The language of the page is precise, and each component is expected to carry real information rather than filler.

## Components

### Top navigation

The top bar is narrow and compact. It holds the ICP mark, the product areas, a search entry, and a small theme or utility icon cluster. Typography stays small and steady. The links feel infrastructural, not promotional, and the bar should stay visually subordinate to the data below it.

### Hero summary block

The opening block pairs a page title with a short explanatory paragraph and a summary card. The summary card uses a large numeric value, a short caption, and a compact flag grid. The panel is dark, rounded, and lightly bordered. Its job is to establish scale quickly, so the number must remain the focal point.

### Subnet table

The table is the most information-dense component. Column headers are explicit and use small info markers. Row content combines several visual systems: truncated subnet IDs, status text such as Authorized Only or Public, pill tags for type, miniature flags for country distribution, small decentralization bars, and numeric readouts with tiny progress tracks. The table depends on order and repetition. Each row feels like a compact record, and the blue bar segments are the main sign of activity.

### Metric cards

The chart cards are dark rectangles with a title at the top, a large metric near the upper-left, and a chart that fills most of the body. Some cards use line charts, one uses a filled area against a map-like backdrop, and others use paired traces with a legend. The range selector sits at the bottom as a segmented control. The active segment uses a darker fill, while the inactive segments stay flat and low-contrast.

### Map and decentralization panel

The decentralization view combines a large globe map with blue coastlines, node markers, and subtle grid arcs. A right-hand panel floats above it and carries the summary count, country cluster, and several supporting metrics. This component mixes geographic and numeric reading modes without changing the surface language. The map is decorative only in the sense that it visualizes the network’s spread; it still behaves like a data surface.

### Chips, controls, and small states

Pills, toggles, and segmented controls keep their geometry simple. Rounded corners are frequent, but they are not exaggerated. Active states rely on fill change, not strong outlines. Category pills use a light purple tone and compact text. Buttons and tabs stay close to the card’s border language so the controls feel native to the dashboard rather than layered on top of it.

## Responsive behavior

When the layout narrows, preserve the reading order of the data first. Keep the title, summary, and current status at the top, then let the subnet table stack or reduce its lower-priority columns before it sacrifices subnet identity, state, or the main numerical fields. The chart grid should collapse into fewer columns, but each card still needs room for a readable headline metric and a visible range selector. Keep the map panel legible by moving the summary panel above or beside the globe rather than burying it below the fold. Navigation should compress before the data areas do.

## Practical implementation guidance

### Preserve

- Keep the black canvas, white type, and blue emphasis as the core palette.
- Preserve the dense, table-first information model for subnet data.
- Keep borders thin and surfaces flat; let spacing and typography organize the hierarchy.
- Use the same font family across the interface so the dashboard stays cohesive.
- Keep the blue chart line and active control state visually consistent across cards and table accents.

### Avoid

- Avoid warm or playful color additions; they break the infrastructure tone.
- Avoid glossy shadows, glass effects, and decorative gradients.
- Avoid oversized radii that would soften the operations feel.
- Avoid mixing several unrelated accent colors into the same chart or table view.
- Avoid burying key values inside long explanatory paragraphs.

### Recommended build order

1. Establish the dark shell, top navigation, and card border language.
2. Build the typography scale and numeric hierarchy.
3. Recreate the hero summary block and the subnet table.
4. Add the metric cards with line charts, legends, and range selectors.
5. Build the map-led decentralization panel and its right-side summary card.
6. Refine chips, icons, and row-level microstates after the main surfaces are correct.

### Accessibility

- Keep white text on the dark surfaces at strong contrast.
- Do not rely on flags alone to communicate geography; pair them with labels and numeric counts.
- Make the active segmented-control state obvious without color alone.
- Keep small info icons readable and name them clearly in code and assistive text.
- Ensure chart cards always pair visual traces with numeric values so the data remains understandable when the chart is hard to parse.

## Scope note

This guide covers the dark desktop dashboard surfaces shown on the home and subnets views: the top navigation, hero summary, subnet table, metric cards, chart controls, and map-led decentralization panel. It does not cover mobile collapse rules, hover or focus styling, loading and empty states, or alternative authenticated views.
