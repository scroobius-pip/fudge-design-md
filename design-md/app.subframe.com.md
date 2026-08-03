# How app.subframe.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.subframe.com-design)

Last updated: 2026-08-03

## Captured pages

[![Floating context menu with compact command rows and a right-docked properties popover](https://pin.fontofweb.com/8787?format=jpg)](https://design.withfudge.com/share/pin-8787)

[Floating context menu with compact command rows and a right-docked properties popover](https://design.withfudge.com/share/pin-8787)

[![Centered calendar specimen on a tall white stage with month arrows and a blue selected day](https://pin.fontofweb.com/8786?format=jpg)](https://design.withfudge.com/share/pin-8786)

[Centered calendar specimen on a tall white stage with month arrows and a blue selected day](https://design.withfudge.com/share/pin-8786)

[![Single-line accordion header stretched across a sparse stage with a property card on the right](https://pin.fontofweb.com/8785?format=jpg)](https://design.withfudge.com/share/pin-8785)

[Single-line accordion header stretched across a sparse stage with a property card on the right](https://design.withfudge.com/share/pin-8785)

[![Component library overview with a left navigation rail, banner strip, and pale card grid](https://pin.fontofweb.com/8059?format=jpg)](https://design.withfudge.com/share/pin-8059)

[Component library overview with a left navigation rail, banner strip, and pale card grid](https://design.withfudge.com/share/pin-8059)

[![Pricing and installation canvas with stacked cards, dashed rows, and a bottom sync command well](https://pin.fontofweb.com/6474?format=jpg)](https://design.withfudge.com/share/pin-6474)

[Pricing and installation canvas with stacked cards, dashed rows, and a bottom sync command well](https://design.withfudge.com/share/pin-6474)

[![Connect-to-code panel with stacked integration accordions and a fixed command snippet at the bottom](https://pin.fontofweb.com/6471?format=jpg)](https://design.withfudge.com/share/pin-6471)

[Connect-to-code panel with stacked integration accordions and a fixed command snippet at the bottom](https://design.withfudge.com/share/pin-6471)

## Overview

Subframe's UI is a clean white operating surface with a narrow dark accent and a lot of breathing room. The page treats each feature as a specimen: a context menu, a calendar, an accordion row, a pricing block, or a connection panel gets its own framed stage and enough empty space to read as a product sample rather than a marketing illustration.

The system feels precise, technical, and calm. White and near-white surfaces do most of the work, borders are thin, and shadows stay quiet. The same compact Inter voice carries page headings, labels, menu text, and callout copy, so the whole product reads as one family even when the content changes from library overview to OAuth consent to installation instructions.

What matters most is the discipline of restraint: a blue selection state, a dark filled primary button, pale gray wells, and simple 6px to 12px rounding. Everything else stays subordinate to the specimen on the canvas.

## Colors

The palette stays almost entirely in a light neutral register. `canvas` and `surface` are the two dominant whites: the overall page is `#FCFCFC`, while cards and modals sit on `#FFFFFF`. Around them, `surface-subtle` `#F5F5F5` and `surface-muted` `#F0F0F0` form the quiet wells used for code snippets, nested rows, and chip-like labels. `border` `#EBEBEB` and `border-subtle` `#EDEDED` define panel edges and separators without adding visual weight.

`ink` `#242424` is the main text color, with `ink-strong` `#171717` appearing in the darkest fills and strongest icons. `muted-ink` `#737373` handles secondary labels and supporting copy. `subdued-ink` `#A3A3A3` marks the least important text, such as disabled-looking dates or helper notes. `action` `#2563EB` is the only saturated brand color in the packet, and it should stay reserved for selected states, primary emphasis, and active navigation cues.

The interface does not use a dark theme in the supplied material. Dark values appear only as ink, icon weight, or the fill of a compact action button. That contrast keeps the page crisp: light shells first, dark emphasis only when the user needs to act.

## Typography

Inter is the only family supplied in the packet, and the whole system leans on one compact weight range: 400, 500, and 600. The hierarchy is driven by size, line height, and tiny tracking shifts rather than by switching families. Font licensing is not supplied in the packet.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| page-title | Inter | 1.125rem | 500 | 1.33 | -0.03em | Page headings, modal titles, top-level labels |
| section-title | Inter | 1.5rem | 500 | 1.17 | -0.03em | Larger section headers and standout callouts |
| panel-title | Inter | 0.875rem | 600 | 1.43 | -0.01em | Drawer titles, property headings, compact panel labels |
| body | Inter | 0.875rem | 400 | 1.43 | -0.01em | Supporting copy, explanatory text, modal notes |
| body-strong | Inter | 0.875rem | 500 | 1.43 | -0.01em | Buttons, active rows, emphasized labels |
| chrome-label | Inter | 0.75rem | 500 | 1.5 | -0.005em | Sidebar items, menu rows, field labels, helper UI |
| micro-label | Inter | 0.625rem | 500 | 1.2 | -0.005em | Short shortcut pills, tiny counters, compact badges |
| code-line | Inter | 0.8125rem | 500 | 1.38 | 0em | Command wells and short install snippets |

The visible rhythm is mostly 12px and 14px. Eighteen-pixel text appears in headings, while 24px is reserved for larger modal or section statements. The smaller labels keep negative tracking light and consistent, which makes the product feel engineered rather than decorative.

## Layout

The layout is a full-bleed white field with inset white stages and thin borders. Most screens leave a large amount of empty canvas around the active specimen. That emptiness is intentional: it isolates the component so the user can inspect it like a sample in a lab.

The library overview uses a left navigation rail, a top utility bar, and a wide content grid. The rail is narrow and text-led, not icon-heavy. The content area prefers large cards with plenty of internal padding, usually 24px or 48px around the larger structures and 8px to 16px inside smaller rows. A banner or announcement strip sits near the top before the main component grid, giving the page a simple entry point before the catalog begins.

Single-component pages keep the specimen centered in a tall stage. The calendar places the month grid in the middle of an expansive white panel, with controls and the selected date forming a very small cluster inside that space. The accordion page follows the same logic: one row in the center, one property panel parked on the right, and almost no clutter elsewhere. The context menu page uses a floating overlay inside the stage, which makes the menu and the property editor feel like movable tools rather than fixed content.

The pricing and installation screens add a code or command well near the bottom edge, where it reads like a practical footer to the main sample. The connect-to-code screen is arranged as stacked rows with a short sync block below, so the page moves from configuration choices to a concrete command without changing visual language. Throughout the set, borders do more work than shadows, and the largest surfaces stay flat.

## Visual language

The visual language is deliberately sparse. Flat white cards, pale gray wells, and 1px borders create the structure. Rounding is gentle and consistent: small controls sit around 6px, cards and panels around 8px to 12px, and pill-like tags become fully rounded. The overall effect is orderly and software-like, not editorial or playful.

Blue is a functional signal rather than a decorative color. It marks the selected day in the calendar, active emphasis in callouts, and the rare strongest action. Black or near-black fills are used for primary buttons in a few places, but even those stay compact and rectangular enough to feel like tools. Disabled and secondary text fade into gray instead of changing shape or weight too much.

The component language relies on familiar utility shapes: checkbox-like rows, chevrons, dots, shortcut pills, and tiny icon glyphs. The context menu uses a left icon, a text label, and a right-aligned shortcut chip. The accordion row uses a centered title and a minimal chevron. The property drawer uses aligned rows with consistent gaps, light borders, and a clear separation between label and value. The calendar uses a regular grid, subdued overflow dates, and a single filled selection. The system never needs dense ornament because the spacing, alignment, and border color already provide enough hierarchy.

## Components

### Shell chrome

The top-level chrome stays very light. In the library view, the global bar is restrained and secondary to the content below it. The left rail is text-first, with section headers and a list of component names stacked in small rows. The active item does not need a heavy badge; the structure of the rail already tells the story. The main content area uses large cards and a banner strip to separate discovery from specimen browsing.

### Context menu and properties panel

The context menu is a compact vertical stack of commands with left-side icons, a text label, and a small shortcut pill on the right. The rows are evenly spaced, and the menu floats above the stage with a mild card edge rather than a dramatic shadow. A neighboring properties card uses a two-column rhythm: label on the left, value control on the right. Toggling, dropdown rows, and light input fields stay the same height so the whole panel reads as a tidy editor surface.

### Calendar specimen

The calendar is built around a centered month label, left and right arrows, weekday headings, and a regular 7-column date grid. The selected day becomes a filled blue rounded square with white numerals. Days outside the current month appear in a muted gray. The rest of the dates stay black and unadorned. The layout is highly symmetrical and depends on spacing rather than borders to create structure.

### Accordion row

The accordion example is almost empty on purpose. One centered row carries the header text, with a small chevron at the right edge and a properties card parked in the upper-right corner. The row uses the same Inter labels as the rest of the interface, which keeps it from feeling like a separate widget family. The surrounding white space makes the component feel like a reusable object that can expand into a larger page.

### Pricing and installation surface

The pricing panel uses stacked rows, light separators, and code-like blocks to show plan information without adding color noise. Small pills and tags sit inside pale gray wells, and some rows use dashed borders to suggest editable or optional sections. The installation command is presented in a low, wide strip with a copy affordance at the right edge. That strip is more like a utility bar than a marketing banner, so it should stay small and immediately actionable.

### Connect-to-code panel

The connect panel uses a vertical stack of accordions for the setup choices. Each row is a soft gray bar with an icon, a label, and a chevron on the right. Below the accordions, a command well shows the sync command in a shallow card with a copy icon. This component works because the page keeps the setup options and the concrete command in the same visual language. Nothing shifts into a different style for the final instruction.

### Authorization card

The consent flow uses a centered white card on an otherwise blank canvas. A small icon sits above a large title, then a short explanatory paragraph, then a checklist-style permissions block, and finally two side-by-side buttons. The left button is quiet and light; the right button is dark and decisive. The card feels calm and direct because the content is stacked in a single column with generous internal padding.

## Responsive behavior

The supplied material is strongly desktop-led. On narrower widths, this system should keep the same order of information but reduce the width of the rails, cards, and command wells before it changes any visual language. The white stage, light borders, and compact labels should remain intact. Centered specimens can stay centered; the important change is tighter spacing, not a new composition. Sidebar lists, property drawers, and code strips should collapse cleanly while preserving readable 12px and 14px text.

## Practical implementation guidance

### Preserve

Keep the page light, flat, and precise. Preserve the white canvas, the pale gray wells, the 1px borders, and the compact Inter hierarchy. Keep `action` blue rare and meaningful. Keep rounded corners in the 6px to 12px range for cards and controls, with pills reserved for badges and shortcuts. Keep the layout spacious enough that the specimen reads first.

### Avoid

Avoid heavy shadows, loud gradients, dark-mode theatrics, oversized marketing type, or multi-color accents. Avoid turning every card into a floating elevation layer. Avoid replacing the compact label style with sentence-case prose that sprawls across the page. Avoid adding decorative framing around components that already read clearly through spacing and border color.

### Recommended build order

1. Establish the page shell, white surfaces, border colors, and Inter scale.
2. Build the left rail, top bar, and shared card framing.
3. Add the smallest reusable pieces: chips, shortcut pills, buttons, and command wells.
4. Build the specimen stages for context menu, calendar, accordion, and property panels.
5. Add the larger page patterns: library grid, pricing stack, connect-to-code flow, and authorization card.
6. Finish with selected states and quiet emphasis treatments in blue.

### Accessibility

Use the blue selection state as one cue, not the only cue, for active items. Keep labels and button text at a readable 12px or 14px with enough contrast against white or gray fills. Make keyboard focus visible on the small controls, especially the chips, arrows, copy buttons, and menu rows. Keep icon-only actions paired with text where possible so the page remains understandable when scanned quickly or used with assistive tech.

## Scope note

This guide covers the desktop library, specimen, pricing, connection, and authorization surfaces shown in the packet. Mobile layouts, hover and focus styling, loading and error states, motion, and the full font stack are not included. Spacing and radius values are expressed on the packet’s 0.125rem step.
