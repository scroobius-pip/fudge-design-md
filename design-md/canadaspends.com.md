# How canadaspends.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/canadaspends.com-design)

Last updated: 2026-08-03

## Captured pages

[![Cream workforce overview with bold KPI blocks, blue tenure bars, and a rose age histogram](https://pin.fontofweb.com/6907?format=jpg)](https://design.withfudge.com/share/pin-6907)

[Cream workforce overview with bold KPI blocks, blue tenure bars, and a rose age histogram](https://design.withfudge.com/share/pin-6907)

[![Charcoal spending sankey with teal revenue flows, red outflows, and a cream title band](https://pin.fontofweb.com/6906?format=jpg)](https://design.withfudge.com/share/pin-6906)

[Charcoal spending sankey with teal revenue flows, red outflows, and a cream title band](https://design.withfudge.com/share/pin-6906)

## Overview

Canada Spends is built like a public finance report turned into an interactive dashboard. The interface is calm, compact, and data-led: warm cream canvas, charcoal headings, white cards, and a single deep red accent that carries emphasis without turning the page theatrical. The visual tone is serious but not severe. It reads like a civic briefing where the numbers are meant to be scanned, compared, and trusted.

The page language depends on a tight hierarchy. Large display titles anchor each section, short explanatory lines sit directly beneath them, and the body content stays restrained. Metric values are set in Financier at 30px, which gives the summary figures a weight that is still softer than the headings. That contrast keeps the numbers prominent without making the page feel like a poster. Metrics are then expanded into bar charts, histograms, and a sankey-style flow diagram. The result is a system that values structure over ornament and clarity over spectacle.

Two modes are visible in the supplied pages. The workforce screen stays mostly light, with cream canvas and white cards. The spending screen introduces a full charcoal chart stage beneath a warm title band. That shift gives the site a chaptered rhythm: explanatory, analytical, then immersive. The design keeps moving between those modes without changing its basic grammar.

## Colors

The palette is narrow and functional. The canvas is a warm cream rather than a cool white, which softens the page and makes the white cards feel intentionally lifted. `#FFFFFF` is used for chart surfaces and panels. `#272727` carries the core text and the dark chart stage, while `#4A5565` handles secondary copy, axis labels, and quieter metadata. `#E5E7EB` gives the interface its pale structural rules without becoming visible decoration.

`#932F2F` is the key accent. It appears as the site’s strongest emphasis color and suits a civic spending context because it feels deliberate, not promotional. Blue-green data colors balance that red in the charts: `#335B6B` and `#364153` support the revenue side and related bars, while `#A9A79F` supplies a muted neutral for less prominent series. `#BEDBFF` marks a light blue selection state in the workforce bar list and reads as a soft interactive highlight rather than a loud brand color.

The relationship between surfaces matters as much as the individual colors. Cream canvas frames the white metric cards. White cards frame the charts. The dark chart stage reverses that structure: white text and red/blue data elements sit on charcoal so the flows can be read at a glance. The system works because the palette stays disciplined; each color has one job and repeats consistently.

## Typography

The site uses two families and keeps their jobs separate. **Söhne Kraftig** provides the strongest structural voice: page titles, section headings, KPI labels, and chart titles. **Financier** handles the descriptive layer: supporting copy, labels, source lines, axis text, and the large numeric values. That split gives the page a measured editorial quality. The headline face is compact and assertive; the reading face is quieter and more book-like. The big figures feel slightly warmer because they share the same family as the body copy.

Licensing details are not included in the packet.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Söhne Kraftig | 3rem | 700 | 1 | -0.025em | Main page title and major section lead |
| `section-display` | Söhne Kraftig | 1.5rem | 700 | 1 | -0.02em | Section heads such as the workforce and spending blocks |
| `metric-value` | Financier | 1.875rem | 700 | 1.2 | 0em | Large KPI figures in the top summary row |
| `panel-title` | Söhne Kraftig | 1.125rem | 700 | 1.25 | 0em | Chart titles and compact panel headings |
| `body` | Financier | 1rem | 400 | 1.5 | 0em | Explanatory sentences under section titles |
| `supporting` | Financier | 0.875rem | 400 | 1.43 | 0em | Source lines, helper copy, and chart labels |
| `label` | Financier | 0.8rem | 400 | 1.25 | 0em | Small field labels such as Year and Group |
| `micro-label` | Financier | 0.7rem | 400 | 1.25 | 0.01em | Dense ticks, compact notes, and fine-grained chart annotations |

The hierarchy depends on scale and weight more than on multiple styles. Display copy is bold and tight. Supporting copy opens up just enough to remain legible inside dense data layouts. The smaller labels stay regular and understated, which keeps filters and chart metadata from competing with the numbers. The large numerals in the summary blocks can stay visually dominant even though they use the reading family, because the size jump is doing most of the work.

## Layout

The layout is centered and report-like, with wide side gutters and a clear reading spine. On the light screen, the content sits in a narrow column that feels intentionally framed inside the cream field. That makes the page easy to scan even when the content becomes dense. The structure is not sprawling; it is carefully boxed and balanced.

The workforce page is arranged in stacked modules. A top summary row presents three prominent KPI blocks. Below that, a second row mixes a tenure distribution bar list, an age histogram, and a small department count block. The composition is modular rather than continuous. Each block gets enough space to read as its own analytical unit, but the blocks still sit close enough together to feel like one dashboard.

The salary section underneath uses a straightforward control row. Select fields sit above the chart in a single line, followed by a white chart card with a thin border and a title inside the panel. This pattern repeats the site’s larger layout logic: labels above, data inside, source note below. The chart has breathing room, but the page never lets the chart drift away from its context.

The spending page changes the rhythm. A warm title band introduces the section, then the interface drops into a full-width charcoal stage where the sankey diagram dominates. A small control strip sits at the top right of that stage, and the flow chart fills the remaining width with layered blocks and labeled streams. The dark panel creates a deliberate break in the page narrative while keeping the same margins, type rhythm, and report discipline.

Borders and spacing carry most of the structure. There is little visible depth, so the layout reads through alignment, inset distance, and the separation between panels. That makes the page feel stable and official rather than decorative.

## Visual language

The visual language is that of a public accounting system with editorial restraint. The pages avoid playful gradients, glossy shadows, and ornamental shapes. Instead, they rely on flat surfaces, clean borders, and a strong contrast between paper-like light space and charcoal analytical space. The tone is measured, direct, and data-first.

Chart forms are the main expressive element. Horizontal bars, vertical histograms, metric readouts, and sankey flows each communicate a different layer of spending or workforce information. Colors do the semantic work: red marks emphasis and spending-side intensity, blue-green marks another part of the financial story, and neutral grays keep secondary flows from taking over. Because the palette is so controlled, the charts can get dense without becoming noisy.

Shape stays minimal. Panels are nearly square with only a 4px radius. That small rounding softens the boxes just enough to keep the interface from feeling harsh, but it does not turn the site into a card-heavy consumer app. The large chart blocks remain rectangular and disciplined. If a rounded form appears, it does so quietly.

Text and numbers are part of the visual system, not separate from it. Large values sit close to their labels. Section titles carry the page forward. Sources sit in the same visual register as the rest of the content, which keeps the page trustworthy and matter-of-fact. The overall effect is sober, legible, and slightly institutional in the best way.

## Components

### KPI summary block

The KPI block is the clearest expression of the site’s hierarchy. Each item uses a short label, a large numeric value, and a smaller explanatory line underneath. The value is the visual anchor; the label is secondary; the helper text finishes the thought. In the workforce view, these items sit in a three-column grid, which makes the page feel organized before the charts even begin.

- **Anatomy:** label, large value, and a short supporting sentence.
- **Surface:** light canvas with no heavy fill, so the numbers stay dominant.
- **Typography:** bold Söhne Kraftig for the label, Financier for the value, and Financier for the explanation.
- **Spacing:** compact vertical stacking with enough gap to separate the three lines cleanly.
- **Visible states:** the numbers do not need decoration to stand out; the size difference is the state.

### Small analytic cards

The tenure block and department count block behave like compact statistic cards. They keep a title, a short description, and then either a data list or a single large number. The list items use soft blue fills and a steady left alignment, which makes them look like report bars rather than decorative pills.

- **Anatomy:** small heading, one sentence of context, then a data display.
- **Surface:** white or cream with thin borders and no shadow language.
- **Typography:** Söhne Kraftig for the card heading; Financier for the support line and labels.
- **Shape:** 4px corners only.
- **Composition:** the list bars and the adjacent values stay aligned so the eye can compare them quickly.

### Filter row

The salary section uses plain controls instead of stylized chips. The Year and Group selects read as simple rectangular fields, and the inflation option is a small checkbox with a label. That keeps the control row subordinate to the chart rather than turning it into a separate design event.

- **Anatomy:** field label, select field, checkbox, and short inline text.
- **Surface:** light fill with a thin neutral border.
- **Typography:** Financier throughout, with the label slightly stronger than the chosen value.
- **Spacing:** fields sit close together, with enough lateral room to keep the row readable.
- **Visible states:** the controls appear calm and neutral; the interface does not rely on heavy highlighting.

### Chart cards

The chart card is one of the main structural units on the light page. It wraps a chart title, a legend, axes, bars, and a source line into a single bordered panel. The white card separates the graph from the cream canvas and gives the chart a report-sheet feeling.

- **Anatomy:** title, legend, plot area, axes, and source note.
- **Surface:** white card with a pale border and no obvious shadow.
- **Typography:** Söhne Kraftig for the chart title; Financier for axis labels and legend text.
- **Composition:** the plotting area fills most of the panel, while the title stays compact at the top.
- **Variants:** the same pattern supports both bar charts and other dense analytic graphics.

### Dark sankey stage

The dark stage is the most dramatic component in the system. It contains a light title strip above a charcoal visualization field, a compact control area, and a large sankey-style flow diagram that carries labels inside the blocks. The contrast is strong but controlled, and the chart remains readable because the type is crisp and the color coding is consistent.

- **Anatomy:** title band, control strip, large flow field, labeled blocks, and source text.
- **Surface:** deep charcoal background with white and colored chart elements.
- **Typography:** bold display type for the band; smaller Financier labels inside the flow blocks.
- **Composition:** wide, horizontal, and data-dense; the chart needs the full span to remain legible.
- **Visible states:** the flow blocks behave as semantic categories, with red and blue/green branches carrying distinct meanings.

### Source lines and notes

Source text appears as a small footer-like note below a chart or section. It is quiet, underlined when linked, and visually secondary to the data. That restraint is important because the site treats sources as part of the report, not as promotional metadata.

- **Anatomy:** short label plus linked source names or a single source line.
- **Typography:** Financier in a small size with moderate line height.
- **Placement:** below the chart or summary block, aligned to the content column.
- **Treatment:** minimal emphasis, but still clearly readable.

## Responsive behavior

The page should keep its report rhythm on smaller screens. The reading order ought to remain title, summary, chart, and source. KPI groups can stack before the chart cards collapse into a single column. The dark sankey stage will likely need horizontal preservation or a carefully managed scroll region, because the flow labels depend on width. Small controls should remain above the charts rather than floating over them. Type can step down, but the hierarchy should not flatten.

## Practical implementation guidance

### Preserve

- Keep the warm cream canvas as the default page field.
- Use Söhne Kraftig for titles, KPI labels, and chart headings; use Financier for everything explanatory and for the large numeric values.
- Keep the palette narrow: cream, white, charcoal, deep red, and a small blue-green data family.
- Preserve the 4px corner radius and the flat card treatment.
- Let spacing and borders structure the page instead of shadows or decorative separators.

### Avoid

- Avoid glossy shadows, glass effects, and soft-brand gradients.
- Avoid replacing the chart language with decorative illustrations.
- Avoid turning every control into a pill or chip.
- Avoid adding extra accent colors that compete with the red and blue-green data series.
- Avoid mixing the two type families across the same role.

### Recommended build order

1. Set the page shell, cream canvas, and centered content width.
2. Establish the typography split between Söhne Kraftig and Financier.
3. Build the KPI summary row and small analytic cards.
4. Add the filter row and chart-card pattern.
5. Build the dark sankey stage with its own control strip.
6. Verify source lines, chart labels, and spacing across both light and dark sections.

### Accessibility

- Keep contrast strong on the dark stage, especially for block labels and source text.
- Make sure red on cream and blue-green on charcoal remain readable at the smallest label sizes.
- Preserve clear focus outlines on selects and any interactive search field.
- Do not rely on color alone for meaning in the charts; pair color with position, labels, and value text.
- Keep axis labels and source notes large enough to survive dense chart layouts.

## Scope note

This guide covers the supplied federal workforce and spending screens only. It does not specify mobile breakpoints, motion, hover states, focus styling, drag behavior, empty states, or other site sections. Spacing and size tokens are rounded to the packet’s 2px-relative step.
