# How datafa.st is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/datafa.st-design)

Last updated: 2026-08-10

## Captured pages

[![Full landing page with dark hero, revenue analytics headline, coral CTA button, and interactive dashboard preview with chart and metrics](https://pin.fontofweb.com/4490?format=jpg)](https://design.withfudge.com/share/pin-4490)

[Full landing page with dark hero, revenue analytics headline, coral CTA button, and interactive dashboard preview with chart and metrics](https://design.withfudge.com/share/pin-4490)

[![Social proof section with overlapping user avatars and user count on dark background](https://pin.fontofweb.com/4491?format=jpg)](https://design.withfudge.com/share/pin-4491)

[Social proof section with overlapping user avatars and user count on dark background](https://design.withfudge.com/share/pin-4491)

## Overview

DataFast presents a dark-themed, revenue-focused analytics landing page built around immediate visual credibility. The design opens with a bold headline claiming "Revenue-first analytics," supported by a subheading that promises channel attribution for business growth. The page structure follows a classic conversion pattern: establish value, provide a low-friction entry point, demonstrate product capability through a live-appearing dashboard preview, and reinforce trust with social proof.

The visual personality balances technical authority with approachable warmth. The near-black canvas creates premium contrast for the coral action elements, while the dashboard preview grounds the promise in concrete data visualization. A handwritten-style font appears sparingly for casual annotations like "Interactive demo," adding human texture without undermining the professional tone. The overall impression is of a modern SaaS tool that respects the user's time and intelligence—no gradients, no excessive decoration, just clear hierarchy and confident color choices.

## Colors

The palette is intentionally restrained, using darkness as a framing device to make data and actions luminous.

| token | value | use |
|---|---|---|
| canvas | #1A1A1A | Primary page background, deep and neutral |
| surface | #252525 | Input fields, secondary containers |
| surface-elevated | #2E2E2E | Dashboard preview frame, elevated cards |
| action | #E86A4A | Primary CTA buttons, chart accent bars |
| action-hover | #D55A3A | Button hover state |
| ink | #F5F5F5 | Primary text, headlines, metric values |
| muted-ink | #A0A0A0 | Secondary text, placeholders, labels |
| border | #3A3A3A | Subtle dividers, input outlines, card edges |
| chart-line | #7EC8E3 | Trend line in analytics visualization |
| chart-bar | #E86A4A | Highlighted bar data points |
| success | #4ADE80 | Positive trend indicators |
| danger | #F87171 | Negative trend indicators |

The dark canvas system serves multiple purposes. It reduces eye strain for users who may spend extended time in analytics interfaces, it makes the coral action elements feel electric and urgent, and it creates natural depth for the dashboard preview which appears to float forward. The chart colors extend the action coral into data visualization while introducing a cool blue for contrast in trend lines. Success and danger states are desaturated enough to read clearly against dark backgrounds without feeling like error alerts.

## Typography

Two font families create the typographic tension: DM Sans 9 Pt handles all structural and data communication with geometric clarity, while Fuzzy Bubbles provides occasional handwritten warmth.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Dm Sans 9 Pt | 3.5rem | 700 | 1.1 | -0.02em | Main headline |
| section-display | Dm Sans 9 Pt | 2rem | 600 | 1.2 | -0.01em | Section headers |
| body-large | Dm Sans 9 Pt | 1.25rem | 400 | 1.5 | 0 | Hero subheadings |
| body | Dm Sans 9 Pt | 1rem | 400 | 1.6 | 0 | General content |
| label | Dm Sans 9 Pt | 0.875rem | 500 | 1.4 | 0.01em | Buttons, tags |
| navigation | Dm Sans 9 Pt | 0.875rem | 500 | 1 | 0 | Nav links |
| metric-value | Dm Sans 9 Pt | 1.5rem | 700 | 1.2 | -0.01em | Dashboard numbers |
| metric-label | Dm Sans 9 Pt | 0.75rem | 500 | 1.4 | 0.02em | Metric descriptors |
| handwritten | Fuzzy Bubbles | 0.875rem | 400 | 1.4 | 0 | Casual annotations |

The type scale is built on a 4px relative unit, with sizes landing at clean multiples: 12px (0.75rem), 14px (0.875rem), 16px (1rem), 20px (1.25rem), 24px (1.5rem), 32px (2rem), and 56px (3.5rem). Hero display uses tight negative tracking for impact, while metric labels use slight positive tracking for legibility at small sizes. The handwritten style is reserved for informal callouts and should never carry primary information.

Verify licensing for these families before production use.

## Layout

The page follows a centered, single-column narrative structure with the dashboard preview breaking into a contained width that suggests application chrome.

The navigation bar spans full width with logo left, links center, and authentication right. Below, the hero section centers all content with generous vertical breathing room. The headline and subheading stack with a clear size ratio, followed by the input-and-button pair that forms the primary conversion mechanism. Social proof sits beneath this cluster, creating a tight vertical grouping that reads as one conversion unit.

The dashboard preview dominates the lower portion, framed as a browser window with traffic-light dots and a URL bar. This chrome establishes context without requiring explanation. Inside, a metrics ribbon spans the top with six data points, followed by a dual-axis chart occupying the majority of the preview height. Below the chart, tabular data begins to appear with sortable columns.

Spacing follows a rhythmic pattern: 5rem between major sections, 1.5rem between related components, 1rem between text elements, and 0.5rem for tight internal groupings. The dashboard preview uses internal padding of approximately 1.5rem to keep data from feeling cramped against its frame.

## Visual language

The aesthetic communicates sophisticated utility through restraint. Every element earns its place; there are no decorative shapes or ambient background patterns competing with the dashboard preview.

Rounded corners appear consistently but modestly—0.5rem for interactive elements, 0.75rem for panels, full circles only for avatars. The dashboard preview's outer frame carries slightly more rounding than its internal elements, creating a subtle containment hierarchy.

Shadows are minimal or absent; depth comes from border contrast and the natural layering of dark surfaces. The border token at #3A3A3A is only 1px but essential for defining edges without harshness.

The avatar cluster in social proof uses negative margin overlap, with each 32px circle partially covering its neighbor. This creates density and community feeling from a small footprint. The count text sits directly below with comfortable 0.75rem spacing.

Data visualization uses a light line weight for the trend curve and filled bars for highlighted periods. Grid lines are extremely subtle, nearly disappearing into the background. Metric change indicators use small arrows with color coding—green for positive, red for negative—positioned inline with the percentage values.

## Components

### Primary action button

- **Anatomy**: Solid fill with text and optional arrow icon
- **Surface**: `{colors.action}` background, `{colors.ink}` text
- **Typography**: `{typography.label}` at 0.875rem, weight 500
- **Shape**: `{rounded.button}` at 0.5rem, full-width in hero context
- **Spacing**: 0.875rem vertical padding, 1.5rem horizontal
- **Composition**: Centered text with right-aligned arrow icon
- **States**: Hover shifts to `{colors.action-hover}`

### URL input field

- **Anatomy**: Icon prefix, placeholder text, no visible button
- **Surface**: `{colors.surface}` background, `{colors.border}` outline
- **Typography**: `{typography.body}` at 1rem, `{colors.muted-ink}` placeholder
- **Shape**: `{rounded.input}` matching button radius
- **Spacing**: 0.75rem vertical, 1rem horizontal, with 0.5rem gap to CTA below

### Dashboard preview frame

- **Anatomy**: Browser chrome with traffic lights, URL bar, content area
- **Surface**: `{colors.surface-elevated}` with `{colors.border}` outline
- **Shape**: `{rounded.panel}` at 0.75rem
- **Composition**: Internal padding 1.5rem, metrics row at top, chart below
- **Typography**: URL uses `{typography.label}` in muted tone

### Metric display

- **Anatomy**: Label with optional icon, large value, change indicator
- **Surface**: Transparent, no background
- **Typography**: `{typography.metric-value}` for numbers, `{typography.metric-label}` for descriptors
- **Composition**: Horizontal row with equal distribution, 1.5rem gaps
- **States**: Change indicators use `{colors.success}` or `{colors.danger}` with directional arrows

### Navigation

- **Anatomy**: Logo mark, text links, authentication action
- **Surface**: Transparent over `{colors.canvas}`
- **Typography**: `{typography.navigation}` at 0.875rem
- **Composition**: Flex row, space-between alignment, vertical centering
- **Spacing**: 1.5rem horizontal padding, 1rem link spacing

### Social proof cluster

- **Anatomy**: Overlapping avatar circles, count text
- **Surface**: Avatar images with `{colors.canvas}` ring borders
- **Typography**: `{typography.body}` at 1rem for count, `{colors.ink}`
- **Shape**: `{rounded.avatar}` at 50%, approximately 32px diameter
- **Composition**: Negative margin overlap of roughly 0.5rem, centered below input group

## Responsive behavior

The single-column hero structure adapts naturally to narrower viewports by maintaining center alignment and reducing horizontal padding. The headline should scale down to `{typography.section-display}` on smaller screens to prevent overflow.

The dashboard preview requires horizontal scroll or responsive scaling below approximately 900px width. Consider collapsing the metrics row to a 2x3 grid or horizontal scroll container on mobile. The tabular data below the chart will need horizontal scroll or column prioritization.

Navigation links should collapse to a menu button below 768px, preserving the logo and authentication action visible. The input-and-button pair should stack vertically with the button below the input, maintaining full width for both.

## Practical implementation guidance

### Preserve
- The dark canvas as the dominant surface; light mode would fundamentally alter the brand impression
- The coral action color at full saturation; desaturation weakens conversion potential
- The browser-frame device around the dashboard preview; it provides instant context
- The handwritten font's sparing use; overuse would feel unprofessional
- The tight metric value and label pairing; this density feels like real software

### Avoid
- Adding background patterns or gradients behind the hero; the darkness is the feature
- Using the handwritten font for buttons, navigation, or data values
- Making the dashboard preview static; it should suggest live data
- Introducing additional accent colors beyond the coral and chart blue
- Borders heavier than 1px on any element

### Recommended build order
1. Establish the dark canvas and surface color system
2. Implement DM Sans 9 Pt at all structural sizes
3. Build the hero section with headline, subhead, input, and CTA
4. Add the dashboard preview frame with browser chrome
5. Populate metrics row with sample data and trend indicators
6. Implement the chart with line and bar layers
7. Add social proof cluster with avatar overlap technique
8. Introduce Fuzzy Bubbles for the "Interactive demo" annotation

### Accessibility
- Ensure the coral action buttons maintain 4.5:1 contrast against the dark canvas; the current #E86A4A on #1A1A1A meets this threshold
- Provide visible focus states with outline or ring, using `{colors.chart-line}` for consistency
- The muted ink at #A0A0A0 should not be used for text smaller than 0.875rem or for critical information
- Chart data should have non-color indicators where possible, such as pattern fills or direct value labels
- The handwritten font should never be the sole carrier of important information

## Scope note

This guide covers the DataFast landing page hero and dashboard preview as visible in desktop viewport captures. Mobile breakpoints, interior pages, authentication flows, and actual chart interactivity are not represented. The Fuzzy Bubbles family attribution could not be verified against designer or vendor records. Measurements are practical adaptation targets derived from visible proportions.
