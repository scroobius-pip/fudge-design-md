# How predictions.paradigm.xyz is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/predictions.paradigm.xyz-design)

Last updated: 2026-08-10

## Captured pages

[![Header with Paradigm logo, page title with underlined 'Open Interest', and segmented control for Volume versus Open Interest with hamburger menu.](https://pin.fontofweb.com/6296?format=jpg)](https://design.withfudge.com/share/pin-6296)

[Header with Paradigm logo, page title with underlined 'Open Interest', and segmented control for Volume versus Open Interest with hamburger menu.](https://design.withfudge.com/share/pin-6296)

[![Timeframe selector row with Latest, 1w, 2w, 1m, 6m, 1y, YTD, All buttons and date picker showing FEB 4 2026 above a stacked area chart with Kalshi and Polymarket data.](https://pin.fontofweb.com/6295?format=jpg)](https://design.withfudge.com/share/pin-6295)

[Timeframe selector row with Latest, 1w, 2w, 1m, 6m, 1y, YTD, All buttons and date picker showing FEB 4 2026 above a stacked area chart with Kalshi and Polymarket data.](https://design.withfudge.com/share/pin-6295)

[![Full treemap visualization showing hierarchical prediction market categories with Politics, Sports, Crypto, Culture, Economics, and STEM sections with nested subcategories and](https://pin.fontofweb.com/6294?format=jpg)](https://design.withfudge.com/share/pin-6294)

[Full treemap visualization showing hierarchical prediction market categories with Politics, Sports, Crypto, Culture, Economics, and STEM sections with nested subcategories and](https://design.withfudge.com/share/pin-6294)

## Overview

The Paradigm Prediction Markets interface presents complex financial data through a restrained, high-contrast visual system. The design prioritizes information density and analytical clarity over decorative elements, creating an environment where treemap hierarchies and time-series charts dominate the viewport. The aesthetic draws from technical documentation and financial terminals: pure black ink on white canvas, monospace body text for data legibility, and an elegant serif for page titles that provides brief moments of typographic refinement amid the utilitarian layout.

The interface structure follows a clear hierarchy. A persistent header anchors the top with branding, page title, and view-switching controls. Below, filter pills allow market segmentation. The primary content area alternates between a massive treemap visualization showing categorical open interest distribution and a stacked area chart tracking volume over time. A secondary timeframe selector and date picker sit beneath the main visualization, enabling temporal exploration. The entire system communicates through line weight, fill, and typographic scale rather than color variation, making it immediately scannable for users accustomed to financial dashboards.

## Colors

The color system is radically minimal, functioning as a monochrome instrument for data presentation rather than an expressive brand palette. Three interface colors handle all UI needs, with photographic and chart colors entering only through data visualization itself.

| token | hex | use |
|---|---|---|
| ink | #000000 | Primary text, borders, active button fills, treemap strokes, chart axes |
| muted-ink | #CCCCCC | Secondary text, inactive states, subtle dividers, placeholder content |
| canvas | #FFFFFF | Page background, card surfaces, inactive button backgrounds, treemap cell fills |
| surface-inverse | #000000 | Active button backgrounds, selected control states |
| text-inverse | #FFFFFF | Text on inverse surfaces, active button labels |
| border | #000000 | All structural borders, treemap cell boundaries, input outlines |

The treemap visualization introduces soft color coding through category fills: pale blue for Politics, pale green for Sports, pale lavender for Crypto, and similarly muted tints for Culture, Economics, and STEM. These tints remain desaturated and light, ensuring black text labels maintain sufficient contrast. The stacked area chart uses two distinguishable fills—light green for Kalshi and light blue for Polymarket—with diagonal hatching patterns providing additional differentiation for accessibility. No gradients or shadows appear in the interface; depth and hierarchy come entirely from line weight and spatial nesting.

## Typography

Three type families appear in the source material. Atlas Typewriter, a monospace family, handles all body text, labels, buttons, and data readouts. Its mechanical regularity reinforces the analytical character of the interface. Klim Type Foundry's serif provides display use for the page title, lending an unexpected sophistication that elevates the experience beyond pure utility. Arial appears as a system fallback for certain UI elements. The source files also reference "Klim Type Foundry-Not Licensed For Desktop Use" as a distinct font name entry, indicating a web-licensed subset of the family.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Klim Type Foundry | 1.75rem | 400 | 1 | 0em | Page title "Prediction Markets Open Interest Distribution" |
| body | Atlas Typewriter | 1rem | 400 | 1.25 | 0em | Body text, treemap labels, general content |
| label-small | Atlas Typewriter | 0.75rem | 400 | 1.25 | 0em | Filter pills, timeframe buttons, secondary labels |
| button-primary | Atlas Typewriter | 0.75rem | 400 | 1.25 | 0em | Primary action buttons with inverse fill |
| button-secondary | Atlas Typewriter | 0.75rem | 400 | 1.25 | 0em | Outlined buttons, inactive states |
| fallback-ui | Arial | 0.875rem | 400 | 1.25 | 0em | System fallback for certain button elements |

The hero-display size of 28px (1.75rem) sets the page title with tight 28px line-height, creating a compact headline that sits comfortably in the header without excessive vertical presence. The title includes a functional underline beneath "Open Interest" and a muted "[Beta]" label in smaller text. Atlas Typewriter at 16px serves as the workhorse for all data-dense areas. The 12px label-small size enables dense packing of filter controls and treemap annotations without breaking the type scale rhythm.

Atlas Typewriter was designed by Kai Bernau and Susana Carvalho with Christian Schwartz, available from Commercial Type. The Klim Type Foundry family was designed by Kris Sowersby. Verify licensing for these families before production use.

## Layout

The layout follows a centered container model with generous horizontal margins that frame the data visualization. The main content area sits within a container offset by 152.5px margins on each side at desktop widths, creating a focused reading zone that prevents the treemap from overwhelming peripheral vision.

The header spans full width with internal padding of 30px top, 60px left and right, and 60px bottom. This asymmetric padding—heavier below—creates breathing room before the dense visualization begins. Within the header, elements distribute horizontally: the Paradigm logo and page title occupy the left, segmented controls for Volume and Open Interest sit center-right, and a hamburger menu anchors the far right.

Below the header, filter pills arrange in a horizontal row with consistent 2px gaps, followed by utility icons for search, share, fullscreen, download, and raw data access. The treemap consumes the majority of viewport height, with its rectangular cells subdividing proportionally by dollar value. Category headers like "Politics $424.5M" and "Sports $309.7M" sit above their respective regions in the same monospace body text.

The timeframe selector and date picker occupy a secondary control row beneath the main visualization, with a timeline slider extending full width below. The stacked area chart appears in a separate view state, replacing the treemap while maintaining identical header and control structures.

Spacing tokens derive from a 2px base unit. Key values include 10px for button padding, 30px/60px/60px for section padding, and 80px for negative margin offsets that enable visual overlap effects.

## Visual language

The visual language communicates authority through restraint. Every element earns its place through functional necessity; decoration is absent. The treemap visualization embodies this philosophy—rectangular cells nest within cells, borders at 1px weight define all boundaries, and text labels sit directly on colored fills without additional padding or background shields.

Line quality is consistent throughout: 1px solid black borders for buttons, panels, and treemap cells; 2px radius on all rectangular elements providing a barely perceptible softening that prevents mechanical harshness without introducing apparent roundness. The diagonal hatching pattern on chart fills serves both aesthetic and functional purposes, adding texture to flat colors while creating distinguishable patterns for colorblind users.

The treemap's nested rectangles create a visual rhythm of scale shifts. Large parent categories break into smaller subcategories, then into individual markets. "+141 others" and similar aggregation labels appear in muted fills, indicating collapsed detail. Dollar values append to category names, making the hierarchy scannable: "All Markets Open Interest $884.2M" roots the tree, with "Politics $424.5M" as the dominant branch.

Iconography is minimal and linear. The hamburger menu uses three horizontal lines. Utility icons for search, share, expand, download, and raw data appear as simple strokes without fills. The calendar icon in the date picker follows the same linear treatment.

## Components

### Header Bar

The header bar spans full width with white background. Left side carries the Paradigm geometric logo mark followed by the page title in Klim Type Foundry serif. The title "Prediction Markets" appears in regular weight, with "Open Interest" underlined to indicate the active metric, and "[Beta]" in muted-ink at smaller size following the main title. Right side holds a segmented control and hamburger menu.

### Segmented Control

A rectangular button group with 1px black border and 2px corner radius. Two options: "Volume" and "Open Interest". The active option receives black fill with white text; the inactive option remains white with black text. A 1px vertical divider separates the two options. The entire control measures approximately the height of a single line of label-small text plus vertical padding.

### Filter Pills

Horizontal row of toggle buttons for market filtering: "All", "Kalshi", "Polymarket", "Compare". Each pill has 1px black border, 2px radius, and 5px 10px padding. The active pill ("All" in default state) receives black fill with white text. Inactive pills show black text on white. Pills sit flush against each other with no visible gap, creating a unified bar appearance.

### Treemap Visualization

The dominant content component. A rectangular container with 1px black border and 2px radius. Internal cells subdivide by value proportion, each with 1px black borders creating nested rectangles. Cell fills use pale tints by category: blue family for Politics and Crypto, green family for Sports, with additional tints for Culture, Economics, and STEM. Text labels in 16px Atlas Typewriter sit top-left in cells, with dollar values appended. Small cells show "+N others" aggregation labels in muted fills. The treemap includes a subtle shadow effect on certain cells, adding minimal depth to distinguish hierarchy levels.

### Timeframe Selector

Row of text buttons: "Latest", "1w", "2w", "1m", "6m", "1y", "YTD", "All". Each in label-small Atlas Typewriter with 5px 10px padding. Active button ("Latest" by default) receives black fill and white text. Buttons sit with minimal spacing, creating a continuous bar appearance similar to filter pills.

### Date Picker

Rectangular input with 1px black border, 2px radius, displaying selected date in label-small text. Calendar icon sits right-aligned within the field. A dropdown panel appears below on interaction, showing month grid with black active date highlighting.

### Stacked Area Chart

Replacement view for the treemap, showing temporal data. X-axis spans dates from June 2021 to February 2026. Y-axis shows relative volume. Two data series stack: Kalshi in light green with diagonal hatching, Polymarket in light blue with opposing diagonal hatching. A draggable range selector below allows zooming into specific date ranges, with black handles and gray track.

### Utility Icon Bar

Row of functional icons following the filter pills: search (magnifying glass), share (connected nodes), fullscreen (expand corners), download (down arrow), and raw data (text label with external link icon). Icons appear as 16px stroke graphics in black, with no fill. The raw data option includes a small black square icon indicating external link behavior.

## Responsive behavior

The interface appears optimized for desktop analytical work. The 152.5px side margins suggest a maximum content width that would compress on narrower viewports. The treemap's nested rectangles would require horizontal scroll or reflow on smaller screens; a practical implementation should consider transforming the treemap to a scrollable single-column list on narrow viewports, preserving the hierarchical indentation but abandoning the area-proportional layout.

The timeframe selector's eight buttons may wrap to two rows on reduced widths. The date picker could collapse to an icon-only trigger. Filter pills should remain horizontally scrollable rather than stacking, maintaining their bar-like appearance.

Chart tooltips and treemap cell labels should remain legible down to 11px equivalent; below this threshold, consider hiding secondary labels and revealing on interaction. The header title should truncate with ellipsis rather than wrapping, preserving the single-line header architecture.

## Practical implementation guidance

### Preserve
- The stark black-white contrast as the foundational visual identity
- Monospace body text for all data and functional labels
- Serif display for the single page title moment
- 1px borders everywhere with 2px radius on all rectangular elements
- The nested treemap with proportional area subdivision
- Diagonal hatching patterns for chart differentiation
- The "[Beta]" label treatment as muted secondary text

### Avoid
- Adding color to the UI chrome; keep controls monochrome
- Rounded pills or excessive radius; the 2px subtle corner is distinctive
- Drop shadows on panels or cards; the treemap shadow is minimal and specific
- Multiple font weights; the system uses Regular exclusively
- Decorative imagery or illustrations; the data is the visual content
- Gradient fills in any UI element

### Recommended Build Order
1. Establish the 2px base grid and spacing tokens
2. Implement Atlas Typewriter at 16px body and 12px label sizes
3. Build the header with logo, serif title, and segmented control
4. Create the filter pill component with active/inverse states
5. Construct the treemap layout engine with proportional subdivision
6. Add category color tints and 1px border nesting
7. Implement the timeframe selector and date picker
8. Build the stacked area chart as alternate view state
9. Add utility icons and raw data access
10. Polish with the 2px radius on all interactive elements

### Accessibility
- Ensure treemap cells maintain 4.5:1 contrast ratio; the pale fills may require darkening or adding text shadows for small cells
- Provide alternative table view for the treemap data; the "Raw data" button should expose structured content
- Add aria-labels to the icon-only utility buttons
- The diagonal hatching provides pattern differentiation beyond color for chart series
- Consider keyboard navigation for the treemap hierarchy; arrow keys to traverse parent-child relationships
- Date picker should support manual text entry as alternative to calendar selection

## Scope note

This guide covers the prediction markets dashboard at predictions.paradigm.xyz, including the treemap visualization, time-series chart, and associated control surfaces. Mobile layouts, animation transitions between Volume and Open Interest views, hover states for treemap cells, data loading skeletons, and error states for failed market data are not represented in the available material. The Klim Type Foundry family appears with a desktop licensing restriction in source files; verify licensing before production use.
