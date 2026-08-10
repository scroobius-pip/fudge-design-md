# How prismdata.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/prismdata.com-design)

Last updated: 2026-08-10

## Captured pages

[![CashScore feature grid with dark cards showing creditworthy applicant metrics, data category pills, and a CashScore 689 result card with reason codes.](https://pin.fontofweb.com/4462?format=jpg)](https://design.withfudge.com/share/pin-4462)

[CashScore feature grid with dark cards showing creditworthy applicant metrics, data category pills, and a CashScore 689 result card with reason codes.](https://design.withfudge.com/share/pin-4462)

[![CashScore predictive lift banner with 30% statistic, green upward arrow, and subtle rainbow gradient border on a dark rounded panel.](https://pin.fontofweb.com/4461?format=jpg)](https://design.withfudge.com/share/pin-4461)

[CashScore predictive lift banner with 30% statistic, green upward arrow, and subtle rainbow gradient border on a dark rounded panel.](https://design.withfudge.com/share/pin-4461)

[![Homepage metrics section with Approve more and Reduce losses headlines, three stat cards, and a colorful Prism CashScore rating bar chart with risk categories.](https://pin.fontofweb.com/4460?format=jpg)](https://design.withfudge.com/share/pin-4460)

[Homepage metrics section with Approve more and Reduce losses headlines, three stat cards, and a colorful Prism CashScore rating bar chart with risk categories.](https://design.withfudge.com/share/pin-4460)

[![Use cases carousel with three dark feature cards showing approval rates donut chart, risk radar visualization, and fraud detection panel with category pills below.](https://pin.fontofweb.com/4459?format=jpg)](https://design.withfudge.com/share/pin-4459)

[Use cases carousel with three dark feature cards showing approval rates donut chart, risk radar visualization, and fraud detection panel with category pills below.](https://design.withfudge.com/share/pin-4459)

## Overview

Prism Data's interface presents cash-flow underwriting analytics through a dark, high-contrast visual system. The design centers on near-black backgrounds that make data visualizations and accent colors feel luminous and precise. Large, airy display typography in Inter establishes trust and clarity, while rounded cards and pills soften the technical density of financial data. The overall impression is of a premium fintech product: restrained, confident, and engineered for readability at every scale. Color is used strategically—electric greens, cyans, blues, and purples appear only in data charts, status indicators, and subtle gradient borders, keeping the interface grounded while allowing metrics to command attention. The system balances information density with generous whitespace, using elevation through surface color shifts rather than shadows to create hierarchy.

## Colors

The color system is built on a dark-mode foundation with a disciplined accent palette drawn from data visualization needs. Every color serves a specific role in the interface, from the immersive canvas to the electric hues that encode risk and performance.

| token | value | use |
|---|---|---|
| canvas | `#000000` | Page background, deepest layer |
| surface | `#161616` | Primary card and panel backgrounds |
| surface-elevated | `#1c1c1c` | Elevated cards, hover states, chart containers |
| ink | `#f5f5f5` | Primary headings, key metrics, primary body text |
| muted-ink | `#a0a0a0` | Secondary descriptions, supporting text |
| dim-ink | `#6b6b6b` | Tertiary labels, disabled states, subtle metadata |
| accent-green | `#4ade80` | Positive indicators, approval status, upward trends |
| accent-cyan | `#22d3ee` | Medium risk tier, informational highlights |
| accent-blue | `#3b82f6` | Low risk tier, secondary data series |
| accent-purple | `#a855f7` | Very low risk tier, primary data emphasis |
| accent-magenta | `#ec4899` | High risk alerts, anomaly markers |
| border-subtle | `#2a2a2a` | Card dividers, hairline separators |

The dark canvas creates an immersive environment where data visualizations appear to float. Surface and surface-elevated provide two levels of material elevation without relying on shadows. The ink scale progresses from bright white for hero text through muted gray for body copy to dim gray for metadata, ensuring every text element has appropriate contrast against the dark ground. The accent colors form a continuous spectrum from purple through blue, cyan, green, to magenta, mapping directly to risk tiers and performance categories in charts. This spectrum appears most dramatically in the CashScore rating bar chart, where each risk category receives a distinct hue. A subtle rainbow gradient border—shifting from orange through green to magenta—frames select promotional panels, adding a premium touch without overwhelming the restrained palette.

## Typography

The typographic system relies entirely on Inter, a variable font designed by Rasmus Andersson and distributed by Rsms. The family provides excellent legibility at both display and micro sizes, with a neutral, technical character that suits financial data presentation.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 4rem | 400 | 1.1 | -0.03em | Homepage headlines, major section titles |
| section-display | Inter | 3rem | 400 | 1.15 | -0.02em | Page-level headings, feature section titles |
| stat-number | Inter | 2.5rem | 400 | 1 | -0.02em | Large metrics, percentage displays |
| body-large | Inter | 1.25rem | 400 | 1.5 | -0.01em | Lead paragraphs, feature descriptions |
| body | Inter | 1rem | 400 | 1.6 | 0em | Standard paragraphs, card descriptions |
| label | Inter | 0.75rem | 500 | 1.4 | 0.05em | Category pills, chart legends, uppercase metadata |
| navigation | Inter | 0.875rem | 400 | 1.5 | 0em | Nav links, secondary actions |

The type scale is built on a 4px relative unit, with sizes progressing in whole-number multiples: 12px (label), 14px (navigation), 16px (body), 20px (body-large), 40px (stat-number), 48px (section-display), and 64px (hero-display). Display sizes use tight negative tracking for a refined, contemporary feel, while body sizes maintain neutral tracking for extended reading. Weight is consistently 400 (Regular) except for labels at 500 (Medium), creating subtle hierarchy through size and tracking rather than boldness. Verify licensing for Inter before production use.

## Layout

The layout system uses a centered, contained approach with generous vertical breathing room between sections. Content typically occupies a maximum width of approximately 1200px, centered within the full-bleed black canvas. Horizontal padding scales with viewport size, maintaining consistent edge margins.

Sections stack vertically with substantial separation—typically 6rem between major content blocks—to let each narrative unit register independently. Within sections, content follows a predictable rhythm: a headline or eyebrow label, followed by a supporting description, then a data visualization or card grid.

The grid system favors simplicity. Feature cards often appear in two-column or three-column arrangements with 1rem gaps. The CashScore feature grid uses a 2x2 layout with icon-topped text blocks above dark cards containing sample data visualizations. Stat cards appear in horizontal rows of three, each with centered content and equal width. Category pills flow in wrapping rows, maintaining consistent pill height and horizontal spacing.

Chart containers span nearly the full content width, with internal padding creating a framed effect. The Prism CashScore rating chart uses this full-width treatment, with the legend positioned in the upper right and axis labels along the bottom. Use case cards in the carousel section maintain equal heights within a three-column grid, with internal padding that keeps text and visualizations comfortably separated from card edges.

## Visual language

The visual language communicates precision and technological sophistication through restrained material choices and deliberate color deployment. Surfaces are flat and matte—no gradients, no glassmorphism, no drop shadows. Elevation is achieved solely through surface color shifts, from the pure black canvas to the slightly lighter surface and surface-elevated tones.

Geometric elements reinforce the technical character. Icons are simple shapes: squares, triangles, circles, diamonds, and sparkles, rendered in solid white or the appropriate accent color. These appear as category markers in feature grids and as navigation affordances in carousels. Data visualizations favor clean lines, minimal grid marks, and direct color encoding—bar charts with rounded caps, donut charts with precise segment angles, radar plots with subtle grid overlays.

The accent color spectrum is the primary source of visual energy. In static contexts, these colors appear as solid fills; in promotional contexts, they merge into smooth gradients. The rainbow gradient border on the predictive lift panel demonstrates this—thin, luminous, and contained to a single edge rather than flooding the composition. Green carries specific semantic weight as the color of positive outcomes: approved status, upward arrows, creditworthy indicators.

Imagery and illustration are absent; the interface relies entirely on data visualization, iconography, and typography to communicate value. This creates a focused, analytical atmosphere appropriate for financial decision-makers.

## Components

### Stat card

A compact metric display used for headline performance claims.

- **Anatomy**: Large centered number, uppercase label beneath.
- **Surface**: `{colors.surface}` background, no border.
- **Typography**: `{typography.stat-number}` for the metric, `{typography.label}` for the descriptor.
- **Shape**: `{rounded.card}` corners.
- **Spacing**: `{spacing.card-padding}` internal padding, centered alignment.
- **Composition**: Typically grouped in horizontal rows of three with `{spacing.grid-gap}` between cards.

### Feature card

A larger content container for use cases and product capabilities.

- **Anatomy**: Optional visualization area, headline, description.
- **Surface**: `{colors.surface-elevated}` background for subtle elevation above stat cards.
- **Typography**: `{typography.section-display}` or `{typography.body-large}` for headlines, `{typography.body}` for descriptions.
- **Shape**: `{rounded.card}` corners.
- **Spacing**: `{spacing.card-padding}` padding, with additional internal spacing between visualization and text.
- **Composition**: Three-column grid in carousel sections, equal heights, with navigation arrows positioned above the right edge.

### Category pill

A compact tag for filtering or labeling product categories.

- **Anatomy**: Text label only, no icon.
- **Surface**: `{colors.surface}` background, `{colors.border-subtle}` optional border.
- **Typography**: `{typography.label}`, uppercase, medium weight.
- **Shape**: `{rounded.pill}` full rounding.
- **Spacing**: Horizontal padding approximately 1rem, vertical padding approximately 0.5rem.
- **Composition**: Wrapping horizontal rows with `{spacing.grid-gap}` between pills.

### Data visualization card

A framed container for charts and analytical graphics.

- **Anatomy**: Chart title, legend, plot area, optional annotations.
- **Surface**: `{colors.surface-elevated}` background, internal padding creating a matte frame.
- **Typography**: `{typography.body}` for titles, `{typography.label}` for legend items and axis labels.
- **Shape**: `{rounded.panel}` corners for larger containers.
- **Composition**: Full content width, with legend positioned inline with title or upper right.

### Predictive lift banner

A promotional panel combining headline, statistic, and subtle decorative border.

- **Anatomy**: Left-aligned headline with embedded metric, right-aligned statistic card, footnote.
- **Surface**: `{colors.surface-elevated}` background.
- **Typography**: `{typography.section-display}` for headline, `{typography.stat-number}` for the 30% figure, `{typography.body}` for footnote.
- **Shape**: `{rounded.panel}` corners, with a 1px rainbow gradient border on the top edge transitioning from orange through green to magenta.
- **Composition**: Two-column internal layout with text left and statistic card right.

### CashScore result card

A specific component showing a generated score with reason codes.

- **Anatomy**: Score label, large score number, "Reasons" header, numbered list.
- **Surface**: `{colors.surface}` background with subtle internal borders.
- **Typography**: `{typography.label}` for "CashScore" and "Reasons", `{typography.stat-number}` for the score value, `{typography.body}` for reason text.
- **Shape**: `{rounded.card}` corners.
- **Composition**: Typically appears within a feature grid or as a standalone result display.

## Responsive behavior

The design should adapt gracefully from large desktop viewports downward, though specific breakpoints are not visible in the supplied material. Based on the component structures, the following responsive patterns are recommended:

- The three-column stat card row should collapse to a single column on narrow viewports, with cards stacking vertically and maintaining centered alignment.
- The feature grid's 2x2 layout should transition to a single column, preserving the icon-text-visualization stacking order within each cell.
- Use case carousel cards should scroll horizontally on touch devices or stack vertically when horizontal space is insufficient.
- Hero display type should scale down to section-display size on smaller screens to prevent excessive line breaks.
- Category pill rows should wrap naturally; consider reducing horizontal padding on pills to prevent premature truncation.
- Data visualization containers should maintain aspect ratio while allowing internal padding to compress proportionally.

Touch targets for carousel navigation arrows and interactive pills should meet a minimum of 44x44px. The dark color scheme inherently provides strong contrast, but ensure accent colors against surface backgrounds maintain WCAG AA compliance for any text usage.

## Practical implementation guidance

### Preserve
- The near-black canvas as the default background; it is foundational to the luminous quality of accents and data visualizations.
- The flat, shadowless elevation model using surface color shifts.
- The restrained accent spectrum and its semantic mapping to risk tiers and outcomes.
- The generous section spacing that lets each content block breathe.
- The geometric simplicity of icons and markers.

### Avoid
- Adding gradients to card backgrounds or text; keep gradients contained to borders and data elements only.
- Introducing additional font families; Inter carries the entire typographic load effectively.
- Using bold weights for emphasis; rely on size, tracking, and color instead.
- Lightening the canvas color; even dark grays will diminish the premium, immersive quality.
- Crowding the category pill rows; maintain the relaxed wrapping rhythm visible in the source.

### Recommended build order
1. Establish the canvas, surface, and ink color tokens with Inter at body size.
2. Implement the stat card component with centered alignment and label typography.
3. Build the feature card with surface-elevated background and internal padding.
4. Add the data visualization container with panel rounding and chart framing.
5. Implement the category pill with full rounding and uppercase label treatment.
6. Layer in accent colors for charts, status indicators, and the gradient border treatment.
7. Refine display typography with negative tracking for headlines.

### Accessibility
- Ensure all accent colors used for text meet 4.5:1 contrast against surface backgrounds; some accent hues may need darkening for small text.
- Provide visible focus indicators for interactive pills and carousel controls, using surface-elevated or border-subtle treatments.
- Consider a reduced-motion preference for any carousel or chart animation.
- Use semantic HTML for stat numbers and chart data to support screen reader interpretation.

## Scope note

This guide covers the homepage and CashScore product page surfaces visible in the supplied images. Navigation headers, footer content, form interactions, mobile layouts, and additional product pages are not represented. Motion behavior, hover states, and loading patterns are not documented. Measurements are practical adaptation targets based on visual analysis of the supplied images.
