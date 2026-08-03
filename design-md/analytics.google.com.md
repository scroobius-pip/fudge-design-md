# How analytics.google.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/analytics.google.com-design)

Last updated: 2026-08-03

## Captured pages

[![Wide overview chart with KPI strip and blue trend line](https://pin.fontofweb.com/6041?format=jpg)](https://design.withfudge.com/share/pin-6041)

[Wide overview chart with KPI strip and blue trend line](https://design.withfudge.com/share/pin-6041)

[![Realtime count card with minute bars and country rows](https://pin.fontofweb.com/6040?format=jpg)](https://design.withfudge.com/share/pin-6040)

[Realtime count card with minute bars and country rows](https://design.withfudge.com/share/pin-6040)

## Overview

Google Analytics uses a restrained enterprise dashboard language: light gray page ground, nearly white cards, thin borders, blue interactive accents, and dense metric layout. The page is organized around numbers first, then charts, then short navigation surfaces. Nothing competes with the data. The whole system feels like a control room built for long sessions rather than a marketing page built for quick attention.

The top of the home view is split into two primary cards. The left card carries the main story with several KPI labels, one prominent trend line, and a comparison band underneath. The right card compresses realtime status into a narrow summary block with a count, a small bar display, and a country table. Below that, a row of compact recently accessed tiles gives quick entry points, and a large empty insights area provides breathing room between dense analytical surfaces. The composition is orderly, modular, and intentionally quiet.

The most important qualities to preserve are the neutral canvas, the blue series color, the compact header hierarchy, the subtle rounded corners, and the fact that the page stays legible without decorative chrome.

## Colors

The palette is narrow and functional. The interface depends on a pale canvas, a slightly deeper surface tone for panels, a hairline border, and one saturated blue for navigation and action. Primary copy uses a near-black ink, while supporting labels step down to a softer gray. This creates a clear reading ladder without forcing the page into heavy contrast. This guide covers only the shown light interface; no dark or photographic mode is covered in this packet.

### Core interface colors

| token | value | role |
|---|---|---|
| `action` | `#1A73E8` | Primary links, active controls, chart lines, and small emphasis strokes |
| `action-strong` | `#1967D2` | Deeper blue for selected emphasis and related data strokes |
| `ink` | `#202124` | Main text on light surfaces |
| `ink-strong` | `#000000` | Dense axis text, tight labels, and the most forceful copy |
| `ink-soft` | `#333333` | Secondary text that still needs a strong reading weight |
| `ink-muted` | `#5F6368` | Captions, helper labels, and table metadata |
| `canvas` | `#FAFAFA` | Page background and open space outside cards |
| `surface` | `#F1F3F4` | Panel fill for cards, charts, and empty-state blocks |
| `border` | `#DADCE0` | Hairline separators and card edges |
| `success` | `#188038` | Positive deltas and upward status indicators |
| `danger` | `#D93025` | Negative deltas and downward status indicators |

Blue is the only persistent accent. It carries links, active selections, chart strokes, and the small top-edge indicator that marks the current card. Green and red are reserved for performance semantics, not decoration. The page never turns into a rainbow. Even inside charts, the blue line stays dominant while the lighter comparison line and shaded band stay subdued. The result is a dashboard that reads as analytical before it reads as branded.

## Typography

The dashboard combines two families with a strict division of labor. Google Sans 18 Pt handles section headers, metric figures, and action labels. Roboto handles the denser body text, table entries, axis markings, and supporting captions. The hierarchy comes from scale and weight more than from variety. Licensing is not stated in the packet.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `section-display` | Google Sans 18 Pt | 1.125rem | 500 | 1.33 | 0em | Card titles and page-section headings |
| `metric-value` | Google Sans 18 Pt | 1.125rem | 500 | 1.22 | 0em | Main KPI numbers inside the overview card |
| `button` | Google Sans 18 Pt | 0.875rem | 500 | 1.5 | 0.018em | Links, menu labels, and action text |
| `body-strong` | Roboto | 0.8125rem | 500 | 1.15 | 0em | Table labels, active row names, and compact emphasis |
| `body` | Roboto | 0.8125rem | 400 | 1.15 | 0em | Support copy, short descriptions, and card notes |
| `meta` | Roboto | 0.75rem | 400 | 1.15 | 0em | Time stamps, legend notes, and subdued captions |
| `label` | Roboto | 0.75rem | 400 | 1.15 | 0.0125em | Axis labels and micro-labels that need a little air |

Google Sans gives the dashboard its modern product voice. The weight is not heavy, but it is confident enough to carry the main metrics and the small blue links. Roboto keeps the analytical content compact and efficient. Letter spacing stays nearly neutral, except for the smallest labels, where a slight positive tracking helps the text breathe in tight chart spaces. The typographic rhythm should stay brisk: short labels, short numbers, short helper lines.

## Layout

The layout is a card grid built on a light canvas. The top row balances a wide analytical card against a narrower realtime card. This asymmetry is deliberate: the main performance story deserves more width, while the realtime panel behaves like a live sidebar summary. Both cards share the same visual grammar: rounded corners, thin borders, gentle fills, and internal padding that keeps the content away from the edges.

Inside the overview card, the top band compresses several metrics into a single strip. Each metric gets a label, a value, and a delta, with the active metric rendered in blue. The chart below spans most of the card width and sits in a shallow plotting area with light grid logic and a tidy legend. The footer row inside the card is important: it anchors the time range on the left and a report link on the right, which keeps the whole panel self-contained.

The realtime card is narrower and denser. Its first line is a status title and a large numeric count. Beneath that sits a tiny bar chart with more white space than ink. The table below uses short rows, a left-aligned country list, and right-aligned values. It reads almost like a live ledger. The card does not need extra framing because its internal columns and bars already provide structure.

Below the main row, the recently accessed section uses a horizontal strip of smaller tiles. These tiles keep the same border and rounding language, but their content is much lighter: an icon, a name, and a relative date. They act as shortcuts rather than narrative blocks. The next major section becomes intentionally open and sparse. The insights panel is large, centered, and visually calm. Its illustration is small and line-based, which keeps the empty state from fighting the surrounding metrics.

Spacing is controlled and repetitive. The page prefers modest gaps between modules, medium internal padding, and a little more room around section headings. Corners stay at 8px for panels and 22px for pill controls. That combination gives the page softness without making it feel playful.

## Visual language

The visual language is classic product dashboard Material styling: thin borders, flat fills, quiet icons, blue emphasis, and very restrained ornament. Charts are the main expressive device. The overview chart uses a solid blue line, a lighter comparison line, and a pale band that suggests range or baseline context. The realtime chart compresses activity into short vertical bars with just enough contrast to show bursts. Both chart types are compact and functional, not decorative.

Iconography is minimal and utility-driven. Small outlined badges, check marks, dropdown carets, and chart icons sit near the labels they affect. They support the reading flow instead of interrupting it. The page also relies on small state markers: blue text for active items, green for positive change, red for negative change. These states do the semantic work that stronger shadows or color blocks would otherwise need to do.

The empty insights panel is the one place where illustration appears. Even there, the line work is thin and neutral, and the composition stays centered and spacious. That keeps the page from feeling cold while still preserving the analytical tone. The design is not about storytelling scenes or brand imagery. It is about fast comparison, clear status, and stable navigation between data views.

## Components

### Overview metric card

**Anatomy:** metric strip, trend chart, legend, and footer actions.  
**Surface:** nearly white panel on the pale canvas, edged by a soft border.  
**Typography:** Google Sans for the active metric name and the value; Roboto for the chart labels and legend.  
**Hierarchy:** the selected metric is blue, the main number is larger than the supporting metrics, and the chart is subordinate to the headline data.  
**Visible states:** positive deltas use green, negative deltas use red, and the active tab or metric label switches to blue with a small underline accent.

### Realtime card

**Anatomy:** live count, minute bars, country table, and a small action link.  
**Surface:** same panel logic as the overview card, but tighter and more utilitarian.  
**Typography:** a large Google Sans count at the top, then Roboto for the country rows and labels.  
**Composition:** the bars sit high enough to feel immediate, while the country list stays close beneath them so the user can map the live count to named sources.  
**Visible states:** list rows stay calm and evenly spaced; active sorting or menu affordances are expressed with small caret icons rather than dense controls.

### Recently accessed tile

**Anatomy:** leading icon, page name, and relative time stamp.  
**Surface:** a small card with the same border language as the main panels, but less internal depth.  
**Typography:** the label uses blue emphasis, while the time stamp steps down to muted Roboto.  
**Shape:** the corners stay soft but not pill-like; the tile feels like a compact dashboard asset rather than a button.  
**Composition:** keep the icon and text aligned on the left, with enough interior padding that the tile reads clearly at small sizes.

### Insights empty state

**Anatomy:** section heading, centered illustration, and one line of explanatory text.  
**Surface:** a very large pale block with the same neutral family as the rest of the page.  
**Typography:** the heading remains small and restrained; the body line sits centered and quiet.  
**Hierarchy:** the illustration is supportive, not expressive, and the message appears only after the wide empty space has established the block’s calm tone.  
**Visible states:** the empty state should feel intentional, not disabled. Its openness is part of the design.

### Action links and controls

**Anatomy:** text link, dropdown label, and compact icon buttons.  
**Typography:** Google Sans at a small size, with enough weight to stand apart from Roboto body text.  
**Color:** blue remains the interaction color, while disabled or secondary controls step back into gray.  
**Shape:** controls use rounded pills or small circular forms, but never large decorative buttons.  
**Composition:** keep actions near the content they affect so the page stays scannable.

## Responsive behavior

When the layout narrows, the page should preserve its reading order: key metrics first, realtime status second, shortcuts third, and empty-state content last. The top row should stack without losing the distinction between the wider analytical card and the narrower live card. The overview chart should keep its axis labels legible, even if the line area becomes shorter. Recently accessed tiles can collapse into fewer columns or a horizontal scroll strip, but they should not disappear. The overall tone should remain dense and calm; smaller screens need less decoration, not more. The card border, light canvas, and blue accent should remain intact so the dashboard still feels like the same product in a tighter frame.

## Practical implementation guidance

### Preserve

- Keep the canvas light and the panels only slightly deeper than the page background.
- Let blue carry navigation, active metrics, chart strokes, and primary links.
- Keep metric cards compact and legible; the number should lead every top-line summary.
- Use small, quiet icons and hairline borders instead of heavy container chrome.
- Preserve the contrast ladder from black and dark gray copy down to muted labels.

### Avoid

- Avoid true white-on-white surfaces that erase panel edges.
- Avoid heavy shadows, gradients, or illustration-driven hero treatment.
- Avoid large rounded pills for everything; the 22px pill shape is selective.
- Avoid turning status colors into decoration outside performance deltas.
- Avoid oversized type that breaks the dashboard’s compact rhythm.

### Recommended build order

1. Establish the canvas, surface, and border system.
2. Set Google Sans for headings, metrics, and actions; set Roboto for dense copy.
3. Build the overview card with metric strip, chart, legend, and footer.
4. Add the realtime card with its count, minute bars, and country table.
5. Add the recently accessed tiles as a compact shortcut row.
6. Finish with the insights empty state and its centered illustration.
7. Tune spacing so the card grid feels balanced at the widest supported desktop width.

### Accessibility

- Keep chart meaning available in text, not only in color.
- Preserve enough contrast for blue links and muted gray metadata on the pale canvas.
- Make sure the active metric and current selection have a non-color cue, such as underline or weight.
- Keep the smallest Roboto labels readable at 12px and 13px sizes.
- Give the empty-state illustration a clear label or replacement text so the block is understandable without the drawing.

## Scope note

This guide covers the analytics home-style dashboard shown in the overview card, realtime card, recently accessed row, and insights empty state. It does not cover Admin, Explore, settings, or unpublished mobile behavior. Spacing and radius values are expressed on a 0.125rem step.
