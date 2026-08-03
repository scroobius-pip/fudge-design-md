# How app.paper.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.paper.design-design)

Last updated: 2026-08-03

## Captured pages

[![Dark files grid with left rail, top filters, and roomy empty canvas](https://pin.fontofweb.com/8568?format=jpg)](https://design.withfudge.com/share/pin-8568)

[Dark files grid with left rail, top filters, and roomy empty canvas](https://design.withfudge.com/share/pin-8568)

[![Centered Paper Pro pricing card over the dimmed files workspace](https://pin.fontofweb.com/8569?format=jpg)](https://design.withfudge.com/share/pin-8569)

[Centered Paper Pro pricing card over the dimmed files workspace](https://design.withfudge.com/share/pin-8569)

## Overview

Paper's Files home is a restrained desktop workspace built like a file system rather than a marketing page. The dark canvas stays in control, the rail is narrow, and the main area keeps a wide open working field around a small number of file tiles. That emptiness is part of the design language: content is given room, chrome stays quiet, and the interface never competes with the documents.

The page has two clear modes. One is the normal file grid with a left navigation rail and a top control row. The other is a centered upgrade card that floats above the same workspace and temporarily takes over the user's attention. Both modes share the same visual rules: compact type, thin borders, low-radius rectangles, and almost no decorative treatment.

The design feels disciplined because every visible choice points back to utility. Blue is reserved for active or interactive moments. White is used as a high-contrast callout on dark surfaces. Most of the page is built from black, charcoal, and a slightly lighter charcoal, so the hierarchy comes from structure and spacing rather than from vivid color shifts.

## Colors

| token | value | role |
|---|---|---|
| `canvas` | `#000000` | Overall workspace background and the deepest rail areas |
| `surface` | `#222222` | Primary panel fill for the sidebar, file tiles, and modal body |
| `surface-raised` | `#373737` | Borders, selected states, and slightly lifted chrome |
| `action` | `#81ADEC` | Active toggle, branded accent, and interactive emphasis |
| `ink` | `#F2F2F2` | Primary text on dark surfaces |
| `paper` | `#FFFFFF` | Bright tile fill, button fill, and the lightest preview surface |

The palette is intentionally tight. The page does not rely on a large range of grays; instead it uses a few exact steps to separate the rail, the work area, and the modal card. That makes the interface feel stable and quiet. `canvas` holds the outer shell. `surface` lifts the sidebar and cards just enough to be legible. `surface-raised` does the work of dividers and selection states without introducing a hard line or a bright outline.

`action` is the only chromatic accent and it stays small in the system. It appears where the user needs confirmation or control, not as decoration. The toggle in the pricing card and the brand-colored app mark are the clearest uses. `paper` is reserved for moments that need a brighter plane against the dark interface, such as the main button and the white preview tile. `ink` carries almost all readable text on dark surfaces, which keeps the page high contrast without drifting into pure white everywhere.

## Typography

Paper uses two material families: Matter for headings and Applesystem for the interface copy. The packet does not supply licensing terms for either family.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `page-title` | Matter | 1.5rem | 480 | 1.333 | 0.005em | Top workspace title such as “Files” |
| `panel-title` | Matter | 1.125rem | 480 | 1.556 | 0.01em | Modal title and small section headers |
| `body` | Applesystem | 0.75rem | 400 | 1.333 | 0em | File metadata, helper text, and small labels |
| `body-strong` | Applesystem | 0.8125rem | 500 | 1.231 | 0em | Selected navigation items and compact controls |
| `label` | Applesystem | 0.8125rem | 400 | 1.231 | 0em | Rail navigation and top-row controls |
| `meta` | Applesystem | 0.75rem | 400 | 1.333 | 0em | Timestamps, sublabels, and secondary notes |

The typography is small by design. Matter gives the page its only true headline voice, but even that voice stays compact and measured rather than dramatic. The main title is only 24px, and the modal title drops to 18px, which keeps the whole interface in the realm of a working app shell instead of a presentation layer. Applesystem handles nearly everything else: tabs, buttons, file captions, and helper copy.

Weight changes do most of the hierarchy work inside the small sizes. Regular text remains calm and even. Medium text marks the selected file location, the top action button, and the pricing card's key labels. The line heights stay loose enough to keep the interface readable, but never so open that the page starts to feel airy or editorial. The result is compact, practical, and easy to scan.

## Layout

The page is organized as a left rail and a broad content plane. The rail is narrow, vertically stacked, and visually enclosed by a darker surface and a thin border. Its job is to hold identity, navigation, and the upgrade prompt without taking over the screen. The main plane begins with a small title and a tight top control row, then opens into a wide grid of file tiles with a large amount of dark negative space around them.

The grid is not dense. Instead of filling the workspace, Paper places a few file cards high on the page and lets the rest of the canvas breathe. That makes the file list feel curated rather than exhaustive. Each tile has enough room to read as a distinct object, and the page can absorb changes in file count without needing a different visual language.

The top control row behaves like a command strip. Tabs, view toggles, search, and the action button all live on one line. Their spacing is compact and the controls are small enough to stay subordinate to the file grid. The row is a clear example of the system's priorities: utility first, visual noise last.

The upgrade experience is built as a modal card centered on the same dark workspace. It uses a medium-dark fill, a thin boundary, and a bright white button at the bottom. The card does not need a large backdrop illustration because the rest of the page already supplies enough context. Centering the card gives it authority, while the dimmed workspace beneath keeps the user's sense of location intact.

Spacing is deliberate and repetitive. The rail uses tight padding. The main area uses a larger page gutter and substantial vertical breathing room. The file cards sit with room between them so their previews can register individually. The modal uses generous internal padding so the plan name, price, toggle, benefits, and button feel stacked with calm separation instead of compressed into a sales block.

## Visual language

Paper's visual language is more system than graphic design. It prefers rectangles, small radii, and thin borders. The surfaces are mostly flat. There are no heavy shadows, no glossy gradients, and no ornamental fills. That restraint gives the app a serious, desktop-native feel.

The strongest visual contrast comes from value, not hue. The difference between `canvas`, `surface`, `surface-raised`, and `paper` is enough to establish depth. Blue only interrupts that grayscale stack when the interface needs an active signal. Because the accent is so sparingly used, it reads as functional rather than decorative.

Thumbnails and previews are part of the language too. Some file tiles show dark miniature content, one shows a bright white preview plane, and the modal uses a small rounded app icon to bring a bit of personality into an otherwise severe surface set. Even so, the icon treatment stays inside the same low-key world. Nothing is oversized or theatrical.

The page's mood comes from that combination: a dark environment, careful alignment, compact labels, and one bright call to action. It feels like a focused tool for working with files and documents, not a landing page trying to persuade. The design asks for attention by being clear, not loud.

## Components

### Sidebar

**Anatomy:** User identity row, primary navigation, secondary links, upgrade callout, and a small promotional block near the bottom.

**Surface:** The rail sits on the darker side of the palette and is separated from the main plane by a faint boundary rather than a heavy divider.

**Typography:** Nav items use compact Applesystem text. The active item is slightly heavier and sits inside a filled selection shape.

**Shape:** Corners stay small. The selected item and the promo box both use low-radius rectangles rather than pills.

**Composition:** The rail reads top-to-bottom and stays narrow enough to leave the file workspace dominant.

### Top control row

**Anatomy:** Section label, filter tabs, view toggles, search field, and a small new-file button.

**Surface:** Mostly transparent over the dark workspace, with controls that use the same charcoal family as the page.

**Typography:** Tabs and controls use 12px to 13px Applesystem text. The current filter is more visually anchored than its neighbors.

**Visible states:** The active tab appears filled; the primary button flips to a light surface with dark text so it remains legible against the dark header.

### File tile

**Anatomy:** Preview rectangle, file name, and a short metadata line.

**Surface:** Tiles are flat dark panels with a subtle border. One tile can switch to a bright white preview plane when the content asks for it.

**Typography:** Titles are compact and file metadata is even smaller. The hierarchy is subtle and depends on spacing and tone rather than on large size jumps.

**Shape:** Rounded corners are present but restrained. The tile reads as a rectangle first and a card second.

**Composition:** Tiles sit in a loose grid with enough room around them to preserve the feeling of a quiet workspace.

### Pro pricing card

**Anatomy:** App icon, plan name, price, yearly billing toggle, benefits list, and a final action button.

**Surface:** A slightly lifted charcoal panel with a thin edge and a brighter button at the bottom.

**Typography:** The plan title uses Matter. The price and benefits switch to Applesystem so the card feels informative rather than promotional.

**Visible states:** The toggle uses the blue accent, and the button uses a white fill with dark text. Those two light notes are enough to make the card readable against the dark stage.

**Composition:** The card is centered and self-contained. It should stay small enough to feel like a modal, not a full page takeover.

## Responsive behavior

The design should keep the same structural order on narrower screens: rail or nav first, title and controls second, file content third, and the modal last when it appears. The main risk on smaller widths is losing the calm spacing that makes the desktop version feel deliberate. That means the grid should collapse before the cards become too small, and the top control row should wrap without turning crowded.

The left rail can compress into a shorter navigation surface if the available width drops, but its hierarchy should remain intact. The file tiles should retain their preview-first composition even when they stack. The modal should stay centered and maintain enough inset from the viewport edges to keep the price, toggle, and button readable.

## Practical implementation guidance

### Preserve

- Keep the dark shell, the narrow rail, and the open working field.
- Use Matter only where the page needs a title voice; keep the rest in Applesystem.
- Preserve the small 4px and 6px radii so the interface stays disciplined.
- Keep blue reserved for active controls, toggles, and branded emphasis.
- Use borders and spacing before shadows; the system is mostly flat.

### Avoid

- Avoid turning the interface into a bright dashboard with multiple accent colors.
- Avoid oversized cards, heavy blur, or glossy depth effects.
- Avoid soft pastel panels or decorative gradients; they do not fit the page.
- Avoid large typography jumps that make the workspace feel like a marketing site.
- Avoid making every control visually prominent; the page depends on restraint.

### Recommended build order

1. Build the dark canvas and the left rail.
2. Add the title row and top control strip.
3. Implement the file tile grid with simple preview, title, and metadata slots.
4. Add the centered pricing card and its bright button.
5. Tune borders, radii, and spacing so the grid and modal feel like one system.

### Accessibility

- Keep text contrast high on the dark surfaces, especially for metadata and control labels.
- Make the blue accent large enough to read as a state, not just as color.
- Give the modal proper dialog semantics and a clear focus order.
- Keep button targets comfortable even when the labels are short.
- Provide meaningful alt text for preview thumbnails and icon art.

## Scope note

This guide covers the desktop Files home, the left rail, the top control row, the file grid, and the centered Pro pricing modal. It does not define mobile layouts, drag-and-drop states, keyboard shortcuts, loading treatment, or editor-canvas screens. Spacing values are rounded to the packet's 0.125rem step.
