# How artificialanalysis.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/artificialanalysis.ai-design)

Last updated: 2026-08-04

## Captured pages

[![Left rail, chart, and green highlighted scoring quadrant](https://pin.fontofweb.com/9727?format=jpg)](https://design.withfudge.com/share/pin-9727)

[Left rail, chart, and green highlighted scoring quadrant](https://design.withfudge.com/share/pin-9727)

[![Publication card, abstract, and related links on a detail page](https://pin.fontofweb.com/9726?format=jpg)](https://design.withfudge.com/share/pin-9726)

[Publication card, abstract, and related links on a detail page](https://design.withfudge.com/share/pin-9726)

[![Monthly pricing with purple recommended plan and centered toggle](https://pin.fontofweb.com/9680?format=jpg)](https://design.withfudge.com/share/pin-9680)

[Monthly pricing with purple recommended plan and centered toggle](https://design.withfudge.com/share/pin-9680)

[![Dense comparison table with chips, tabs, and long product rows](https://pin.fontofweb.com/9675?format=jpg)](https://design.withfudge.com/share/pin-9675)

[Dense comparison table with chips, tabs, and long product rows](https://design.withfudge.com/share/pin-9675)

## Overview

Artificial Analysis is a light AI analytics system with a strong editorial spine and a disciplined comparison layout. The page shell stays white, borders stay thin, and the content takes up the visual weight through typography, spacing, and data density. Victor Serif Basic gives the site its voice: headlines, benchmark names, and price figures feel like an article or report. Suisse Intl handles everything operational, from tabs and filters to table rows, helper copy, and button labels. That contrast is the brand.

The system moves between three roles without changing its base grammar. First, it presents AI model and benchmark information in a calm, article-like frame. Second, it organizes charts, scorecards, and comparison tables with compact data cues and clear separators. Third, it introduces a commercial layer where purple marks premium access, featured plans, and recommendation states. The result is serious but not heavy. It reads as a research product with a polished commercial path.

The page family is consistent enough that the same visual rules apply across the homepage, benchmark detail pages, pricing pages, and dense comparison views. White space is generous. Text contrast is direct. The shell is quiet so the actual content can stay legible even when the page carries many rows, many filters, or many labeled points.

## Colors

The palette is narrow at the shell level and broader inside data content. White and near-white surfaces define the page and the cards. Black anchors text, the brand chip, and the strongest active states. Soft grays handle borders, tabs, and muted fills. Purple is the commercial accent and also the strongest recommendation signal. Blue, green, orange, rose, and cyan appear as data colors for chart points, chips, and categorized labels. That balance lets the product show many categories without turning the interface noisy.

| token | hex | use |
|---|---|---|
| `canvas` | `#FFFFFF` | Main page background and card base |
| `surface` | `#FAFAFA` | Soft page bands and very light panel fill |
| `surface-muted` | `#F1F2F4` | Tabs, pills, and subdued chip backgrounds |
| `surface-soft` | `#E7E7E7` | Secondary fills and subdued framing |
| `border` | `#D9D9D9` | Card rules, table separators, and input outlines |
| `ink` | `#000000` | Primary text, logo chip, and strongest contrast |
| `muted-ink` | `#787878` | Supporting copy, helper text, and rail labels |
| `action` | `#8842FD` | Premium action, recommendation emphasis, and key CTA fills |
| `action-strong` | `#7C3AED` | Stronger purple emphasis and selected state treatment |
| `action-subtle` | `#C394FF` | Soft purple badges and savings labels |
| `data-blue` | `#2563EB` | Chart points and comparison chips for one model family |
| `data-green` | `#16A34A` | Success markers and chart/category accents |
| `data-orange` | `#EA580C` | Secondary chart/category accents |
| `data-rose` | `#EB3568` | Warnings, contrasting category chips, and model tags |
| `data-cyan` | `#0D9488` | Secondary data grouping and table highlighting |

Only the light system is defined here. The visible pages do not introduce a separate dark shell, and there is no distinct photographic theme in the UI; any imagery or logos sit inside the same white card structure instead of becoming a new surface language. Purple stays reserved for premium access, recommendation, and the most important CTA, while the data colors stay inside charts and chips so they function as classification rather than decoration.

## Typography

The type system uses two families with clear jobs. Victor Serif Basic carries the brand voice: page titles, benchmark names, plan headings, and large price figures. Suisse Intl carries the interface: body copy, table rows, tabs, chips, buttons, and support text. The pair gives the product an editorial tone without sacrificing speed or density.

Victor Serif Basic is credited to Christian Jánský and Kometa Typefaces. Suisse Intl is credited to Swiss Typefaces. Applesystem and System-Uisansserif appear only as fallback and system text in the packet, so they should not be promoted into the main scale or credited as brand faces. Both credited families should be used under their respective licenses.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Victor Serif Basic | 5rem | 500 | 1 | 0em | Homepage hero and landing headers |
| `section-display` | Victor Serif Basic | 3rem | 500 | 1 | 0em | Major benchmark page titles |
| `card-heading` | Victor Serif Basic | 2.25rem | 500 | 1.05 | 0em | Large card and plan headings |
| `section-title` | Victor Serif Basic | 1.875rem | 500 | 1.1 | 0em | Smaller page section headings |
| `body` | Suisse Intl | 1rem | 400 | 1.5 | 0em | Explanatory text and prose blocks |
| `body-medium` | Suisse Intl | 1rem | 500 | 1.5 | 0em | Buttons, emphasis, and highlighted rows |
| `body-small` | Suisse Intl | 0.875rem | 400 | 1.43 | 0em | Helper text, notes, and supporting metadata |
| `label` | Suisse Intl | 0.75rem | 500 | 1.33 | 0.04em | Chip text, section rails, and compact tags |
| `ui` | Suisse Intl | 0.875rem | 400 | 1.4 | 0em | Tabs, controls, and navigation items |

The hierarchy depends on scale, weight, and spacing more than on ornament. Serif headings are compact and confident. Sans text opens up slightly so tables and dense explanatory blocks do not feel compressed. The smallest labels gain separation through size and tracking rather than through heavy color or shape changes. That keeps the interface crisp at a glance.

## Layout

The desktop layout is centered, wide, and controlled. The homepage uses broad white margins around a large hero and a smaller right-rail of updates. Benchmark detail pages split into a text-heavy left column and a card-heavy right column, then widen into a lower summary row. Pricing pages center their controls and cards inside a generous shell. Comparison pages stretch the content the furthest, because the table is the product and the grid needs room to breathe.

The rhythm is consistent across page types. A top bar establishes navigation. A large serif title anchors the page. Beneath that, the site moves into a primary analytical surface: a chart, a publication card, a pricing pair, or a comparison table. Supporting elements then repeat in smaller cards, linked rows, or summary blocks. The structure is straightforward, which is why the pages can hold a large amount of data without turning chaotic.

Spacing is intentionally uneven in one way and even in another. Large sections are separated by broad vertical gaps, but the internal spacing of controls, chips, and table rows is tight and repetitive. That contrast is what makes the pages readable. A chart panel can sit next to a publication card because both share the same white surface and border language. A dense table can sit under a large title because the heading and the grid each know their own scale.

The benchmark rail is a good example of the layout logic. It lives on the left, stays narrow, and acts as an orientation guide while the main area holds the graph or article body. On the chart page, the left rail keeps the page from feeling like an empty canvas by giving the reader a stable vertical anchor. On the detail page, the right-side publication card does the opposite: it balances the left column and keeps the page from leaning too hard into text.

## Visual language

The visual language is restrained, technical, and slightly editorial. The site avoids glossy effects, decorative gradients, and oversized shadows. Instead it depends on the relationship between serif and sans, the strength of the borders, and the use of compact labels. The effect is calm and precise rather than playful.

Charts are framed, not floated. A pale green highlighted zone can mark the most favorable area, but the rest of the plot stays quiet so the points and labels remain legible. Colored dots and small labels do the classification work. Tables use the same logic: chips encode category, platform, input type, memory, or feature status, but the row structure stays neutral. The emphasis never leaks into the whole shell.

Rounded corners are moderate and functional. Panels use a modest radius, while pills and tabs are more rounded so they read as controls. The black brand chip, black active tabs, and purple premium states are all strong but compact. They give the pages a sense of intention without turning them into a dark or flashy brand system.

The overall feel is close to a research report with a commercial edge. It has enough polish for a pricing page and enough discipline for a benchmark table. The calm comes from the same few repeated moves: white background, thin border, serif headline, sans body, compact chip, and a single strong accent color for premium moments.

## Components

### Global header

The header is a single horizontal bar with a black brand chip on the left, a row of neutral rounded navigation pills, and premium and login actions on the right. The brand chip is the strongest black object on the page and acts as the anchor before any content begins. The navigation pills stay light, rounded, and compact. Premium uses purple. Log in uses black. Small utility icons stay muted and secondary.

This header should stay visually unchanged across page types. The content below can shift from hero to chart to table, but the header keeps the same proportions and the same calm rhythm. That consistency is part of the product identity.

### Benchmark section rail

The benchmark rail is a narrow vertical list of section links. The labels are small, left aligned, and separated by modest vertical gaps. The active item is darker and more definite. Inactive items remain gray. The rail is practical first: it helps the reader move through a dense page without interrupting the main reading flow.

Its spacing should stay tight and regular. It is a guide, not a feature area. That means the rail should never grow into a second navigation system.

### Chart panel

The chart panel is the most analytical surface. It uses a white card, a thin border, and a modest rounded corner. A tab strip sits above the chart, then a title row, then a compact controls row with icon buttons and a model-count selector. A legend, axis labels, and the plotted points keep the plot readable while the highlighted region gives the eye a favorable target area.

The panel works because the interface around the chart is small and orderly. The chart itself is large, but the surrounding controls stay compact so the plot remains the center of attention. Any implementation should keep the title, tabs, and controls aligned in a stable grid.

### Benchmark detail card stack

The detail page uses a publication card on the right with a label, title, author line, abstract block, and close control. Below it sit related links in compact bordered buttons. Lower on the page, summary cards repeat the same neutral white-card language with a small capsule label and a short result paragraph.

The cards rely on hierarchy rather than decoration. The abstract box needs breathing room and a soft border. The related links should stay small and tightly spaced. The summary cards should remain broad enough to hold the short benchmark takeaways without feeling crowded.

### Pricing cards and plan toggle

The pricing view centers a billing toggle above a pair of plan cards. The active toggle state is clear and lightly filled. The recommended Pro card uses a purple outline and a purple label at the top edge. Its price figure is large and serif-driven, with the supporting text in the sans family. The Enterprise card stays neutral and follows the same structure with a less emphatic action area.

The plan cards are built from the same sequence: label, price, features, action. That sequence should not change. The visual difference between plans comes from the border, the label color, and the treatment of the action area, not from a different component family.

### Comparison table

The comparison table is the densest component in the set. It begins with a tab row, then a header row, then many body rows with product names, tiers, prices, models, and capability columns. Colored chips encode inputs, media types, tools, memory, and related feature groups. A black active tab makes the selected view obvious, and the table rows stay white with light separators so the grid remains legible.

This component depends on order and repetition. The columns must line up. The chips must keep a consistent size and padding. The table should feel rigorous rather than decorative, because the grid itself is part of the product’s identity.

## Responsive behavior

The supplied views are desktop-first, so responsive behavior should preserve the same hierarchy while reducing width pressure. On narrower screens, the header should wrap into a simpler control row before any major content collapses. The benchmark rail should stack above the main content or convert into a horizontal strip. Chart panels should keep the title and control row readable, while the plot area can become narrower before the labels shrink. Comparison tables should allow horizontal scrolling rather than flattening the grid into an unreadable stack. Pricing cards should move from two columns to one while keeping the recommended card first.

Type sizes should step down only one level at a time so the serif hierarchy stays recognizable. Chips and tabs should keep their compact proportions, because those elements carry state. Any responsive system should protect contrast, preserve row spacing, and avoid introducing a second visual language for mobile.

## Practical implementation guidance

### Preserve

- Keep the serif/sans split exactly where it currently does the most work: serif for titles, prices, and plan heads; sans for controls, body, and tables.
- Keep the interface light, with white or near-white surfaces and thin gray borders.
- Keep purple reserved for premium, selected, and recommended states.
- Keep chart colors inside charts and comparison chips, not in the page shell.
- Keep the page rhythm calm: one primary analytical surface, then supportive cards or rows.

### Avoid

- Avoid dark chrome as a default mode.
- Avoid soft skeuomorphic shadows and glossy buttons.
- Avoid introducing a second display family or a rounded-friendly brand voice.
- Avoid using one off-brand accent color for navigation and another for plans.
- Avoid turning comparison tables into cards; the grid is the point.

### Recommended build order

1. Define the neutral palette and purple action tokens.
2. Add the Victor Serif Basic and Suisse Intl type scales.
3. Build the shared header and pill navigation.
4. Build the benchmark rail, chart panel, and table grid.
5. Add the pricing toggle, recommended plan card, and comparison cards.
6. Finish with chip styles, badges, and reference logo bands.
7. Check the page at wide widths, because spacing and hierarchy do most of the visual work.

### Accessibility

- Keep the contrast of purple labels and pale chips high enough for small text.
- Make active tabs, rail items, and buttons easy to distinguish without color alone.
- Keep table rows readable at a glance by preserving separators and consistent padding.
- Give icon-only controls clear names and keyboard focus treatment.
- Keep line lengths under control in serif headings so they do not crowd narrow columns.

## Scope note

This guide covers the desktop homepage, benchmark detail pages, pricing pages, and comparison tables shown in the supplied packet. It does not define mobile breakpoints, motion, loading, empty, or error states, or the exact behavior of the surrounding site chrome. Spacing and radii use the 0.125rem step implied by the source set.
