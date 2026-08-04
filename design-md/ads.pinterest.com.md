# How ads.pinterest.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ads.pinterest.com-design)

Last updated: 2026-08-04

## Captured pages

[![Narrow top strip with the Ads heading, purple helper note, and the three rounded creation-path cards](https://pin.fontofweb.com/7070?format=jpg)](https://design.withfudge.com/share/pin-7070)

[Narrow top strip with the Ads heading, purple helper note, and the three rounded creation-path cards](https://design.withfudge.com/share/pin-7070)

[![Campaign-creation overview with the objective grid, lilac Performance+ banner, and the weekly estimate rail](https://pin.fontofweb.com/7069?format=jpg)](https://design.withfudge.com/share/pin-7069)

[Campaign-creation overview with the objective grid, lilac Performance+ banner, and the weekly estimate rail](https://design.withfudge.com/share/pin-7069)

[![Targeting-details form with stacked fields, included-country chip, and the right-side forecast card](https://pin.fontofweb.com/7068?format=jpg)](https://design.withfudge.com/share/pin-7068)

[Targeting-details form with stacked fields, included-country chip, and the right-side forecast card](https://design.withfudge.com/share/pin-7068)

## Overview

Ads Pinterest uses a calm product-workspace language rather than a decorative marketing shell. The page is built from white panels, light gray borders, compact text, and a few pale accent bands that keep the flow readable without turning the surface loud. The result feels like a focused campaign builder: the user moves from campaign choice, to targeting, to forecast, to publish, with each step sitting inside its own rounded container.

The system depends on contrast more than ornament. Dense black headings sit on white surfaces; quieter labels stay in warm gray; the strongest visual interruptions are the lilac Performance+ banners and the warm red publish action at the bottom. The design is structured, but not heavy. It wants each panel to feel like a separate working surface, not a stacked report.

## Colors

The color system is almost entirely neutral, with two accent families layered on top. White and warm off-white surfaces carry the interface. Gray borders separate fields and cards without creating a grid that feels technical or cold. Lilac and pale blue are used for helper banners, badges, and the selected-state footer band inside some cards. A warm red button is reserved for the final publish step; everything else stays quiet so that one action remains unmistakable.

The page does not rely on a dark mode or a photographic mode. Dark values stay inside text, icons, and chart marks. The workspace itself remains light, and the accents do the chapter changes.

### Core neutrals

| token | value | use |
|---|---|---|
| `canvas` | `#FBFBF9` | Page ground behind the main shell |
| `surface` | `#FFFFFF` | Cards, fields, and top-level panels |
| `ink` | `#211922` | Main headings and strong body copy |
| `muted-ink` | `#62625B` | Secondary labels, helper text, and metadata |
| `quiet-ink` | `#767676` | Subtle labels, axis labels, and low-priority text |
| `border` | `#CDCDCD` | Standard field and card outline |
| `border-strong` | `#C8C8C1` | Slightly firmer outline for raised containers and controls |
| `divider` | `#E5E5E0` | Interior rules, soft separators, and chip edges |
| `ink-deep` | `#000000` | Strong marks, icons, and the sharpest text contrast |

### Accent and helper colors

| token | value | use |
|---|---|---|
| `panel-tint` | `#EBEEFF` | Soft info banner wash and selected-state footer band |
| `panel-tint-strong` | `#DBE1FF` | Stronger lilac-blue edge in the helper gradient |
| `lilac-accent` | `#EF9FF9` | Small accent glyphs and the Performance+ marker |
| `lilac-accent-soft` | `#FBDFFF` | The lighter end of the helper-gradient family |

These colors work as a restrained ladder: white and off-white define the shell; gray establishes structure; lilac and pale blue signal guidance; the warm publish action sits outside the neutral family so it can carry the final decision. The palette is sparse by design.

## Typography

Pin Sans Mac Os is the only family in the packet. Grilli Type Ag is the listed designer and vendor. Licensing is not specified here; confirm it before reuse.

The page uses one family with a narrow set of weights. The visual hierarchy comes from size, weight, and tight line length rather than from switching between fonts. Titles are bold and compact. Supporting text stays small and steady. Labels often look quieter than the body copy, which keeps the form from feeling noisy.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `page-title` | Pin Sans Mac Os | 1.75rem | 700 | 1.1 | -0.018em | Main page heading such as “Create campaign” |
| `section-title` | Pin Sans Mac Os | 1rem | 700 | 1.4 | -0.01em | Panel titles like “Targeting details” |
| `card-title` | Pin Sans Mac Os | 0.875rem | 700 | 1.4 | -0.01em | Choice-card headings and compact section labels |
| `body` | Pin Sans Mac Os | 0.875rem | 400 | 1.4 | 0em | Field helper copy, panel descriptions, and chart text |
| `body-strong` | Pin Sans Mac Os | 0.875rem | 500 | 1.4 | 0em | Strong labels, selected card copy, and emphasis lines |
| `meta` | Pin Sans Mac Os | 0.75rem | 400 | 1.5 | 0em | Tiny hints, sublabels, and footer-like metadata |
| `control` | Pin Sans Mac Os | 0.75rem | 500 | 1.5 | 0em | Buttons, tabs, and compact control labels |

The page title sits at the upper end of the scale but never becomes display type. Most of the interface lives in 12–14px territory, which keeps the workspace efficient. The result is a product UI that reads quickly and stays calm even when many fields are visible at once.

## Layout

The page is organized as a desktop workspace with a narrow navigation rail, a broad central form column, and a narrower forecast rail on the right. That three-part structure is the main spatial idea. It keeps the campaign builder readable because the form, the guidance, and the forecast each have their own lane.

The top strip uses the same language in a simpler form. A large title sits above a helper line and a row of three equal cards. Those cards are not pushed to the edges; they float inside a wide white shell with generous padding and rounded corners. The shell has enough breathing room that each card can be read as a separate decision.

Inside the central column, sections are stacked vertically with substantial spacing between them. Each section has its own white card boundary and a clear title. Form controls are wide and low, usually spanning the content column, while helper chips and small buttons sit beneath them instead of crowding the right edge.

The forecast rail stays visually separate from the form. It uses a smaller card stack, compact headings, and a chart with muted axes. This keeps the estimate from competing with the setup form. In the wider campaign screen, the rail feels pinned to the side; in tighter layouts, it should move below the main form before the fields become cramped. The hierarchy should stay: title, choice, form, forecast, action.

Spacing is disciplined but not rigid. The visible rhythm clusters around small increments for controls and larger increments for section breaks. Panels keep their own interior padding, so the page never relies on outer whitespace alone to breathe.

## Visual language

The visual language is quiet, operational, and lightly friendly. Rounded rectangles do most of the work. Borders are thin and pale, which makes the shell feel orderly without making it look like a spreadsheet. The interface favors large blocks of white space inside a larger white workspace; the boundaries come from line work and spacing rather than from filled color.

The lilac helper band is the clearest expressive device. It appears as a soft wash behind guidance or as a small badge-like accent next to Performance+ text. Because the rest of the page stays neutral, that tint feels informative rather than decorative. The chart area follows the same rule: pale fills, small marks, and muted axes instead of bright data colors.

Selected states are legible because they add weight rather than a new style language. The chosen objective card gets a firmer outline and a tinted lower band. Unselected cards remain light and flat. This makes the page feel calm even when multiple choices are visible.

The strong warm publish button is the exception that proves the system. It is more saturated than the rest of the page and sits in the bottom action row where the eye expects a decisive finish. That single strong note is enough; the design does not need more color drama.

## Components

### Workspace shell

- **Anatomy:** page title, helper line, left navigation rail, central working column, right forecast rail, bottom action row.
- **Surface:** white panels on a warm off-white canvas.
- **Shape:** broad containers use 1rem corners; inner cards sit slightly tighter at 0.75rem.
- **Spacing:** roomy outer padding, then tighter 0.5–1.5rem steps inside controls and card stacks.
- **Hierarchy:** the title is first, the form stack is central, the forecast rail is supportive, and the action row closes the page.

### Creation-path cards

- **Anatomy:** small icon, bold card title, one short description line or two.
- **Surface:** white fill with a pale gray border and very light shadowing.
- **Typography:** card title in bold 14px; supporting line in regular 12–14px text.
- **Shape:** 0.75rem corners; the cards sit as equal-width tiles in a single row on the wide top strip.
- **Visible states:** neutral tiles stay flat; the selected tile adds a darker outline and a lilac footer band.

### Helper banners

- **Anatomy:** small accent icon plus one sentence of guidance.
- **Surface:** pale blue-lilac wash, sometimes with a stronger lilac edge.
- **Typography:** small body text, steady line length, no heavy emphasis beyond the icon and the first phrase.
- **Shape:** soft rounded rectangle, usually full-width inside the panel.
- **Role:** these banners explain setup constraints without turning into alerts.

### Form fields and chips

- **Anatomy:** field label, control surface, helper text, occasional chip or token for included values.
- **Surface:** white fields with gray strokes and compact interior padding.
- **Typography:** labels and controls stay small and legible; helper copy is quieter than the label.
- **Shape:** low, wide controls with rounded corners; chips sit as short neutral pills.
- **Composition:** fields stretch horizontally, while supplemental buttons like bulk entry or list creation sit below or beside the fields instead of competing with them.

### Forecast rail

- **Anatomy:** weekly results heading, compact metric pairs, a chart, and an audience-size block with a narrow-to-broad indicator.
- **Surface:** white card stack with very light separators.
- **Typography:** small bold values for the metrics, smaller copy for labels and explanatory text.
- **Shape:** the chart and its surrounding card keep the same rounded vocabulary as the rest of the page.
- **Composition:** the rail is concise and vertical, so it can inform without taking over the main form.

### Bottom action row

- **Anatomy:** draft actions on the left, review and publish on the right.
- **Surface:** neutral buttons first, then the saturated publish action.
- **Typography:** compact control labels with medium weight.
- **Hierarchy:** the publish button is the only forceful endpoint; the other actions remain secondary and quiet.
- **Visible states:** the row feels docked to the bottom edge and should stay visually separate from the working form above it.

## Responsive behavior

On narrower widths, keep the same reading order. The title and helper line remain first. The choice cards should stack before the form becomes compressed. The forecast rail should drop below the form rather than shrinking to a point where metrics and chart labels become hard to scan. The one thing that should not change is the role hierarchy: the main work stays central, the forecast stays supportive, and the publish action stays last.

The page should keep its rounded, card-based identity at every width. Controls may collapse from multi-column placement to single-column stacks, but the border language, the spacing rhythm, and the small typography hierarchy should remain intact. The design does not depend on a wide image crop or a hero-like opening, so it can narrow cleanly if the panel widths and gutters are preserved.

## Practical implementation guidance

### Preserve

- Keep the workspace light, with white cards on a warm off-white canvas.
- Preserve the 1px border language and the 0.75rem–1rem corner family.
- Keep Pin Sans Mac Os as a single-family system with only weight changes.
- Keep lilac and pale blue for helper content, not for everything.
- Keep the publish button as the lone strong warm accent.

### Avoid

- Avoid dark chrome, heavy shadows, and dense dividers.
- Avoid large display type or over-wide headline spacing.
- Avoid turning every card into a different color block.
- Avoid mixing several accent families when one lilac family already does the guidance work.
- Avoid compressing the forecast rail until its chart and metrics lose clarity.

### Recommended build order

1. Build the shell, title row, and top helper line.
2. Add the creation-path cards and their selected state.
3. Add the main form stack with labels, fields, chips, and sub-actions.
4. Add the helper banners and the forecast rail.
5. Finish with the bottom action row and the publish button.

### Accessibility

- Keep labels visible and aligned with each field.
- Maintain strong text contrast on white and on pale-tint surfaces.
- Use non-color cues for selected objective tiles, not just tint.
- Keep controls large enough for reliable pointer and keyboard use.
- Make chart text readable without relying on color alone to distinguish values.

## Scope note

This guide covers the desktop campaign-creation and ad-group setup surfaces for ads.pinterest.com: the create strip, objective chooser, targeting form, forecast rail, and bottom action bar. Mobile breakpoints, transient validation, error states, and motion are not included. Relative-unit values are rounded to the nearest 0.125rem.
