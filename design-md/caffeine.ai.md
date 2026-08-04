# How caffeine.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/caffeine.ai-design)

Last updated: 2026-08-04

## Captured pages

[![Dark app settings panel with profile avatar, action tiles, and domains card](https://pin.fontofweb.com/8830?format=jpg)](https://design.withfudge.com/share/pin-8830)

[Dark app settings panel with profile avatar, action tiles, and domains card](https://design.withfudge.com/share/pin-8830)

[![Black about page with lime headline, circular ring, and tabbed article column](https://pin.fontofweb.com/7229?format=jpg)](https://design.withfudge.com/share/pin-7229)

[Black about page with lime headline, circular ring, and tabbed article column](https://design.withfudge.com/share/pin-7229)

## Overview

Caffeine uses a severe dark base, very light text, and a small set of high-saturation accents to separate a public information page from a denser app settings view. The system feels compact and technical, but the typography keeps it calm: large headlines are thin and airy, while controls stay small and boxed. The result is not decorative darkness; it is a controlled interface language where each surface carries a single task and almost no extra chrome.

The public information page relies on one centered text column, a pale lime headline, and a large circular line that frames the copy without turning into a full illustration system. The settings surface shifts to stacked cards, a profile badge, and a row of tightly contained action tiles. Both pages keep the same black-to-charcoal foundation, so the accent color changes the mood rather than the base structure.

## Colors

### Core dark system

| token | value | use |
|---|---|---|
| `canvas-deep` | `#000000` | Page background, outer margins, and the deepest field behind both surfaces |
| `canvas-warm` | `#0D0B09` | Slightly warm black used where the page needs depth without turning gray |
| `surface` | `#1D1D1D` | Main card fill for settings tiles, domain rows, and compact panels |
| `surface-alt` | `#1C1D4F` | Deep blue-violet chip fill for the connected state and secondary status surfaces |
| `surface-quiet` | `#2B2B2B` | Lighter dark fill for nested controls and subtle internal blocks |
| `border-strong` | `#3D3D3D` | 1px dividers and card outlines that separate flat dark boxes |
| `text-muted` | `#888888` | Secondary labels, inactive navigation, and quiet support copy |
| `text-soft` | `#D1D1D1` | Supporting text on dark surfaces where full white would be too sharp |
| `text` | `#F6F6F6` | Primary body copy on the dark pages |
| `text-bright` | `#FBFBFB` | The clearest headline and button text on black surfaces |

### Accent and utility colors

| token | value | use |
|---|---|---|
| `accent-lime` | `#DDF730` | Editorial emphasis, active tab underline, and the public-page headline accent |
| `accent-periwinkle` | `#9CB1F4` | Connected/status treatment in the settings view and soft utility emphasis |
| `accent-peach` | `#FFBC99` | Profile avatar fill and warm human accent against the black shell |
| `accent-brown` | `#713001` | Initial inside the avatar badge and other warm text-on-peach moments |
| `border-soft` | `#FFFFFF` | Light boundary color used when the UI needs a crisp bright edge |

The color story has two accents on one dark base. Lime belongs to the public-facing page and carries the strongest editorial emphasis. Periwinkle belongs to the app shell and reads as a status or system color rather than a marketing color. White and near-white carry the main copy, while the charcoal family keeps panels distinct without looking lifted off the page. The warm peach badge adds a human note inside an otherwise technical system. No photographic palette appears in these surfaces; the visual contrast comes from black, white, gray, and the two accent hues.

## Typography

Caffeine uses the Sohne family in three visible weights: `Sohne-Leicht` for the large public headline, `Sohne-Buch` for body copy and controls, and `Sohne-Halbfett` for stronger section labels and emphasized interface text. The credits point to Kris Sowersby and Klim Type Foundry. Licensing should be confirmed before reuse.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Sohne-Leicht | 2rem | 300 | 1.25 | -0.02em | Public-page headline and other large, airy statements |
| `page-display` | Sohne-Leicht | 2rem | 300 | 1.25 | -0.01em | Alternate large display line when the page needs a second hierarchy |
| `section-heading` | Sohne-Halbfett | 1rem | 600 | 1.5 | 0em | Question headings, section labels, and strong in-page markers |
| `body` | Sohne-Buch | 1rem | 400 | 1.5 | 0em | Main explanatory paragraphs and long-form copy |
| `body-strong` | Sohne-Halbfett | 1rem | 700 | 1.5 | 0em | Short emphasis inside text blocks and active labels |
| `control` | Sohne-Buch | 0.875rem | 400 | 1.43 | 0em | Settings labels, small links, and compact UI text |
| `micro` | Sohne-Buch | 0.75rem | 400 | 1.33 | 0.02em | Tiny supporting labels and status text |
| `button-label` | Sohne-Buch | 0.8333rem | 400 | 1.2 | 0em | Centered labels inside the action tiles |

The hierarchy works by weight and size more than by multiple families. The large public headline is thin and wide in feeling, which stops the black field from becoming heavy. Regular body text sits at 16px with comfortable leading, so the dense paragraphs remain readable against the dark background. Smaller controls use 12–14px equivalents to keep the settings screen compact. Upper emphasis is achieved through weight and color, not by adding another font.

## Layout

The public information page uses a single narrow text column centered inside a vast black field. A large circular stroke arcs around the copy and gives the page a feeling of orbit or enclosure without creating a literal illustration panel. The main headline sits high in the column, with body copy tucked tightly underneath and a small navigation row below that. The layout depends on negative space as much as on content, so the text feels deliberate rather than crowded.

The settings screen uses a very different arrangement while keeping the same base colors. The top of the page holds a centered profile stack: small page title, circular peach avatar, then the account name. Under that, four equal-width action tiles form a rigid row. The next block is a bordered domain card, with its label on the left and an add button on the right, followed by a simpler single-row information control. This creates a progression from identity, to actions, to configuration details.

Across both surfaces, content is centered and restrained. Horizontal space is used for breathing room, not for sidebars or busy chrome. The page does not rely on layered shadows or soft glass effects; it stays flat and clean, with separation created by spacing, borders, and color contrast. The 1px outlines and small corner radii keep the controls crisp and technical, while the big type and wide margins keep the public page from feeling like a form.

## Visual language

The visual language is austere, dark, and high contrast, but it is not sterile. The public page uses a luminous lime accent that feels experimental and future-facing. The settings page uses a cool periwinkle status color that feels system-like and reliable. Both accents sit inside a mostly flat charcoal architecture. That choice gives the system a lot of visual silence, which makes each highlighted word or chip easy to read.

Shapes stay compact. Buttons are slightly rounded, cards are modestly rounded, and the larger circular motif on the public page is the only large-radius element. That circle does most of the decorative work, so the rest of the interface can remain straight, boxed, and minimal. Borders are fine and deliberate. There is no meaningful shadow language, no glossy treatment, and no layered depth stack. The design depends on edge, spacing, and type rhythm instead of material simulation.

The result is a two-mood system: editorial on the public page, utilitarian in settings. The first mood is expressed with a thin headline, lime highlights, and a big empty field. The second mood is expressed with rows of dark controls, a warm avatar badge, and a status pill that fits neatly into a card. The shared visual constant is restraint.

## Components

### Public page header and utility row

The top edge of the public page is quiet. A small back control sits at the far left with a thin border and compact text, while the far right keeps a tiny info label and a circular icon button. Both pieces are visually subordinate to the main headline. Their role is to frame the page rather than to compete with it. The header should stay light in weight, 12–14px in size, and clearly separated from the main content by space rather than by a heavy bar.

### Public headline and body column

The headline is the strongest typographic moment in the system. It is light in weight, large for the page, and colored partly in lime so the opening line carries energy before the body begins. The body paragraph beneath it is a single narrow block with generous line height, which keeps the dense explanation readable on black. The text column is not wide; it is intentionally constrained so the headline and paragraphs feel editorial instead of dashboard-like. The lime accent should appear only on the words that need immediate emphasis.

### Circular accent form

The large arc around the public page is a structural accent, not a content container. It gives the page a sense of scale and motion while remaining extremely light visually. It should stay thin, low-contrast, and subordinate to the copy. The circle creates a soft boundary behind the text without enclosing it fully, which leaves the page open and airy. Avoid turning this into a repeating motif elsewhere; its power comes from scarcity.

### Settings profile stack

The settings page begins with a centered avatar badge, the account name, and a small external-link glyph. The badge is a peach circle with a brown initial, which adds warmth inside the dark shell. The name below it is bold enough to read as identity, but still small enough to stay secondary to the controls that follow. The stack should feel vertical, calm, and symmetrical.

### Action tile row

The row of four action tiles is one of the clearest structural patterns in the settings surface. Each tile has the same dark fill, the same modest radius, and the same centered icon-plus-label layout. The icon sits above the label, and the label sits close to the bottom of the tile so the block reads as a compact action block rather than a generic card. The equal widths create a rigid rhythm that suits a configuration area. Use a 1px border or subtle edge contrast; do not add shadow or a glossy inset effect.

### Domains card

The domains section is a wider card with a clear label on the left and an action on the right. Inside, the domain name reads as the main content, while the connection pill in periwinkle and the small lock icon sit on the right side of the row. The card uses a dark fill and a crisp border to separate it from the black page. The connected status should remain visually compact; it should feel like a state chip, not a badge that dominates the row. This component is the best example of how the system handles status: the state is visible, but never loud.

### Information row

The final row is a simple, one-line control with an icon, label, and chevron. It is flatter and quieter than the domain card above it, which makes it feel like a lower-priority destination. The row should keep the same dark palette and border logic as the rest of the settings surface, but it can be visually lighter because it carries less content. The chevron belongs at the far edge and should remain small.

## Responsive behavior

On narrower screens, the centered column on the public page should remain the dominant shape, but the large circle needs to soften into a background feature rather than a crop-heavy object. The headline can break sooner, yet it should keep the same thin weight and high contrast. The settings page should allow the action tiles to wrap or stack cleanly, with the domain card and information row widening to full available width. The avatar stack should stay centered, because its symmetry is part of the brand feel. Keep touch targets large enough for mobile use, but preserve the small visual scale of labels and chips so the interface does not become heavy.

## Practical implementation guidance

### Preserve

- Keep the base canvas near-black and let white text do the heavy lifting.
- Use lime on the public page and periwinkle in settings; do not mix them indiscriminately.
- Keep control shapes compact, with 1px borders and modest radii.
- Preserve the thin, light public headline; it is the clearest brand signal in the system.
- Keep the settings cards flat and structured, with spacing doing more work than decoration.

### Avoid

- Avoid soft gray page backgrounds that dilute the dark-first character.
- Avoid heavy shadows, glass effects, or layered depth tricks.
- Avoid large rounded pills for every control; the system is tighter than that.
- Avoid using the lime accent on every interface element; it should stay selective.
- Avoid dense multi-column layouts that fight the narrow centered measure on the public page.

### Recommended build order

1. Establish the dark canvas, the bright text pair, and the two accent colors.
2. Set Sohne roles for the headline, body copy, labels, and compact controls.
3. Build the centered public page column and the circular accent structure.
4. Build the settings stack: avatar, action tiles, domain card, and information row.
5. Add the small status details, borders, and spacing refinements last.

### Accessibility

- Keep the contrast strong on every dark surface, especially where body text runs for multiple lines.
- Do not let the lime accent become the only signal for meaning; pair it with position, weight, or label text.
- Make the small controls clearly focusable and visibly outlined.
- Keep labels short enough that the compact controls remain readable at 12–14px sizes.
- Preserve comfortable line length in the public page so the long paragraphs do not become tiring to scan.

## Scope note

This guide covers the public information page and the app settings screen. It does not define mobile breakpoints, motion, hover or focus transitions, loading states, or any other page family beyond the two supplied surfaces.
