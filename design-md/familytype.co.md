# How familytype.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/familytype.co-design)

Last updated: 2026-08-08

## Captured pages

[![Expanded font-family chooser with green active rows and compact pricing chip](https://pin.fontofweb.com/9796?format=jpg)](https://design.withfudge.com/share/pin-9796)

[Expanded font-family chooser with green active rows and compact pricing chip](https://design.withfudge.com/share/pin-9796)

[![Oversized specimen cards and type-scale grid on deep black panels](https://pin.fontofweb.com/9790?format=jpg)](https://design.withfudge.com/share/pin-9790)

[Oversized specimen cards and type-scale grid on deep black panels](https://design.withfudge.com/share/pin-9790)

[![Footer with vertical side rail and split information columns](https://pin.fontofweb.com/5474?format=jpg)](https://design.withfudge.com/share/pin-5474)

[Footer with vertical side rail and split information columns](https://design.withfudge.com/share/pin-5474)

## Overview

Family Type is a dark, exacting type foundry storefront. The page starts with a compact top bar, then moves into a pricing workspace where font families, styles, and licence choices sit in two strict columns. The same system later shifts into specimen pages where Universal Sans takes over in oversized white type, large numerals, and clipped display blocks. The whole experience feels built from one rule set: black field, white structure, and green only where the page is making a selection or showing a price. That restraint is the brand. Nothing feels ornamental unless it helps people compare type, cost, or licence scope.

The page rhythm is also important. Header chips and the centered wordmark feel small and controlled. The main commerce view becomes denser and more functional, with stacked rows and bordered cards. The specimen view opens up again, letting the type itself become the subject. The footer returns to quiet black space, thin dividers, and small editorial copy. The result is a storefront that behaves more like a precision instrument than a marketing site.

## Colors

| token | value | use |
|---|---|---|
| `action` | `#05DF72` | Active selections, price accents, check marks, and confirmation borders |
| `canvas` | `#000000` | Main page field, panel fill, and the dark backdrop behind every section |
| `ink` | `#FAFAFA` | Primary text on rows, panels, specimen cards, and footer copy |
| `muted-ink` | `#A1A1A1` | Secondary descriptions, helper lines, and quieter footer metadata |
| `hairline` | `#FFFFFF` | Thin borders, separators, and the brightest structural lines |

The palette is almost entirely monochrome, with green acting as a functional signal rather than a decorative accent. Black is the constant base, so the design depends on contrast, not on surface color variety. Near-white text carries the main reading layer, while the slightly softer gray handles subtitles and explanatory copy. White is used sparingly because it needs to do two jobs at once: hold the layout together with thin borders and carry the strongest display moments on the specimen pages. Green appears where the interface needs immediate recognition: selected rows, selected chips, line-item prices, and check marks. That discipline keeps the page calm even when it is full of pricing detail.

The relationship between the modes is simple. The commerce sections use the same black ground as the specimen pages, but the commerce sections stay tighter and more bordered. The specimen pages allow larger white type and more open negative space. Nothing shifts into a different color family, so the experience feels consistent from product chooser to type sample to footer.

## Typography

Family Type uses two visible families: a compact sans for the interface chrome and a larger, more expressive sans for specimens and large type blocks. The commerce view leans on steady weights, short line lengths, and small text sizes. The specimen pages stretch Universal Sans into much larger sizes, where the letterforms can take over the screen and still remain crisp against black. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `nav-chip` | Applesystem | 0.875rem | 500 | 1 | 0.01em | Top navigation chips and compact chrome |
| `section-title` | Applesystem | 1.25rem | 500 | 1.2 | -0.01em | Page section headings such as Select Fonts and Licence & Pricing |
| `card-title` | Applesystem | 1rem | 500 | 1.25 | -0.01em | Row labels, licence card titles, and block headings |
| `body` | Applesystem | 0.875rem | 400 | 1.4 | 0em | Supporting descriptions, helper lines, and footer paragraphs |
| `body-medium` | Applesystem | 1rem | 500 | 1.35 | 0em | Row prices, primary labels, and prominent interface copy |
| `label` | Applesystem | 0.75rem | 500 | 1 | 0.04em | Small meta text, chip badges, and compact status labels |
| `specimen-display` | Universal Sans | 12.25rem | 700 | 0.92 | -0.04em | Oversized specimen type on the type detail pages |
| `specimen-figure` | Universal Sans | 5rem | 400 | 1 | -0.03em | Large numerals and single-word figure blocks |
| `specimen-lead` | Universal Sans | 2.25rem | 400 | 1.1 | -0.02em | Big editorial text blocks and large specimen captions |
| `legal` | Applesystem | 0.75rem | 400 | 1.4 | 0em | Footer legal lines and small contact details |

The hierarchy depends on size and weight more than on lots of style shifts. The interface text stays in the 12px–16px range for most controls, which keeps the licence panel readable even when many options are visible at once. The specimen pages move decisively into display territory, with 80px and 196px blocks that let the type fill the frame. The rhythm works because the page does not mix a large number of family voices. It uses the same calm sans logic everywhere, then expands Universal Sans when the page wants to show the font itself.

## Layout

The overall layout is a black desktop composition with thin horizontal rules, broad margins, and repeated 1px separators. The top bar is light in weight and high in discipline: pill navigation sits on the left, the brand is centered, and utility items sit on the right. That structure gives the page a clear frame before the main content begins.

The main commerce view is a two-column layout. The left column stacks font-family rows, family tabs, and individual style rows. The right column holds the Brand Licence summary, pricing factors, add-on cards, and the final licence type choices. The columns are separated by space rather than by heavy borders, which makes the rows themselves feel like the main units of structure. Each row is long, flat, and dark, with a soft outline and generous internal padding. The active row gains a green edge and a green price, which creates a clear selection signal without adding motion or decoration.

Spacing is moderate but not airy. The design keeps 16px side padding common, uses 32px gaps to split larger groups, and reserves 56px and 96px rhythms for major breaks such as between content zones and footer-like transitions. Those larger spaces matter because the page often asks the user to compare similar choices. The breathing room helps the eye settle on one row or one pricing card at a time.

The specimen pages shift the layout without changing the visual language. Large black cards, oversized display type, single-word figure blocks, and tightly framed paragraphs create an editorial grid. Some blocks are full-width, some are split into text and figure halves, and some are simple number sequences that act like specimen samples. The footer uses yet another arrangement: a narrow vertical side rail, a large text column, and a lower row of contact and location details. Across all three layouts, the same logic holds: dark field, narrow lines, and strong typographic separation.

## Visual language

Family Type has the visual character of a precise foundry catalogue. It is quiet, but never soft. The black background removes distraction and lets borders, prices, and type samples carry the meaning. Thin outlines are everywhere, but they stay understated; they frame the rows instead of competing with them. Green is the only lively color, and because it appears in selection borders, line-item amounts, and check marks, it reads as an operational signal rather than a branding flourish.

The corners are rounded enough to keep the interface from feeling harsh, but not so round that the system becomes playful. The combination of 10px, 14px, and pill-like radii gives the page a commercial polish while keeping the rows visually squared off. That is important because the content is dense. The type list, licence panel, and add-on cards need to feel ordered, not decorative.

The specimen pages are the sharpest expression of the brand. Large white letters sit against black with almost no competing detail. A single word, a set of numerals, or a short line of copy is enough to fill a card. The size contrast does most of the expressive work. One moment the system is a pricing tool; the next it is a type specimen wall. The footer closes with the same restraint, turning everything back down to small white text and a sparse grid of information.

## Components

### Top navigation chip

- **Anatomy:** Small pill, uppercase or compact label, thin border, dark fill, centered text.
- **Typography:** `nav-chip`.
- **Shape:** Fully rounded or nearly fully rounded, with the pill form used for the main navigation.
- **Spacing:** Tight internal padding so several chips can sit in a single row without crowding.
- **Visible states:** Neutral chips stay dark and quiet; the active or primary chip should be read through proximity and border treatment, not through a different color family.

### Brand header

- **Anatomy:** Left utility navigation, centered wordmark, right-side utility controls.
- **Surface:** Black background with a fine rule below.
- **Typography:** Small, restrained sans with a compact feel.
- **Composition:** The brand sits in the middle as a quiet anchor. The layout keeps the header subordinate to the content below.

### Font-family row

- **Anatomy:** Long rectangular row, family name on the left, price on the right, short style count or note beneath.
- **Typography:** `body-medium` for the primary line and `body` for supporting text.
- **Shape:** Rounded rectangle with a soft, dark fill and a thin outline.
- **Spacing:** Comfortable horizontal padding and a medium vertical rhythm, so each row reads like a selectable object.
- **Visible states:** The active row receives a green outline and a green price. The inactive rows keep a white or neutral outline and stay visually calm.

### Family tab chip

- **Anatomy:** Short pill label for switching between families or style groups, often with a tiny count badge.
- **Typography:** `nav-chip` or `label`.
- **Surface:** Dark chip with a fine outline, matching the rest of the UI chrome.
- **Composition:** The chips sit above the style list and help the left column stay organized when multiple families are in play.

### Licence summary panel

- **Anatomy:** Title, explanatory paragraph, and an include list with green check marks.
- **Typography:** `card-title` for the heading, `body` for the description.
- **Shape:** Large rounded card with a very light border.
- **Composition:** The panel is wide, calm, and text-forward. It acts like a summary before the pricing choices beneath it.
- **Visible states:** The check list uses green marks and muted supporting text, which keeps the list readable without making it loud.

### Pricing factor field

- **Anatomy:** Section label, full-width field, small helper line, and occasional inline “Why?” links.
- **Typography:** `body-medium` for labels and `body` for helper copy.
- **Surface:** Dark input-like rows with a subtle border.
- **Spacing:** Each factor is separated from the next by a short vertical gap, so the panel feels structured rather than crowded.
- **Composition:** The fields are stacked in a clear vertical sequence, which matches the way buyers think through licence scope.

### Add-on card

- **Anatomy:** Title, green price change, supporting description, and optional check list.
- **Typography:** `card-title` or `body-medium` for the first line, `body` for the support text.
- **Shape:** Rounded rectangle, same family as the other commerce cards.
- **Composition:** Each add-on is independent, with enough spacing to treat it as a separate pricing decision.
- **Visible states:** Add-on prices stay green, reinforcing the fact that the green color means financial or selected emphasis.

### Licence type row and buy button

- **Anatomy:** A bordered licence choice followed by a round buy action aligned to the lower right.
- **Typography:** `body-medium` for the licence name and `body` for the supporting line.
- **Shape:** The selected licence row uses the same rounded panel language as the rest of the page; the buy action is a fully rounded pill.
- **Composition:** The buy control feels attached to the pricing flow, not detached from it.
- **Visible states:** The selected licence row is green-outlined, while the non-selected row remains neutral. The buy action stays dark and heavy.

### Specimen block

- **Anatomy:** Huge type sample, large number run, or editorial paragraph on a dark card.
- **Typography:** `specimen-display`, `specimen-figure`, and `specimen-lead`.
- **Surface:** Black card with a thin border and no extra decoration.
- **Composition:** The card can be text-only or split between copy and type. In both cases, the content remains centered on the form of the letters.
- **Visible states:** The most expressive state is size itself. A single large word or number is enough to establish the block.

### Footer rail and information grid

- **Anatomy:** Narrow vertical side rail, stacked info links, contact copy, location text, and a lower custom-typefaces block.
- **Typography:** `legal` for small text, with slightly larger body text where the page needs more emphasis.
- **Surface:** Black field with very thin separators and spacious empty zones.
- **Composition:** The footer uses the page width efficiently, but it never becomes dense. It spreads information into clear regions instead of compressing it into a single mass.
- **Visible states:** The rail labels are quiet and linear; the grid reads as the final, lowest-priority layer of the page.

## Responsive behavior

On narrower screens, the design should keep the same reading order: brand and navigation first, font selection next, licence details after that, specimen content later, and footer last. The two-column commerce layout should collapse into a single column without changing the row styling, border treatment, or green selection language. When the available width shrinks, the rows should stay legible before they get shorter, and the specimen cards should scale down before they wrap into awkward breaks. The footer rail can move from a vertical side strip to a stacked or top-aligned element, but it should still feel like a final quiet zone rather than a second header.

The smaller layout should not invent a new visual system. It should reuse the same black surfaces, thin lines, and rounded rectangles. The main adjustment is spacing. Horizontal breathing room can reduce, but the page should keep enough internal padding that prices, labels, and helper copy do not touch the borders. The display specimens need special care: if they become too large for the screen, reduce the size in whole 2px steps and preserve the strong negative space around them.

## Practical implementation guidance

### Preserve

- Keep the page nearly monochrome and let green do only three jobs: selection, price, and confirmation.
- Use thin borders and soft rounded corners to separate content instead of layering loud background colors.
- Keep the commerce view and the specimen view in the same black system so the page feels like one brand, not two pages stitched together.
- Maintain the clear split between font selection on the left and pricing logic on the right.
- Let Universal Sans become much larger on specimen pages so the brand shows the font itself, not just the product name.

### Avoid

- Avoid multicolor accents, gradients, or glossy surfaces.
- Avoid heavy shadows or floating card treatments that would weaken the border-first look.
- Avoid making every row visually loud; inactive rows should stay calm so the selected row stands out.
- Avoid turning the footer into a dense sitemap wall.
- Avoid guessing extra visual states that are not present in the supplied views.

### Recommended build order

1. Build the top bar, centered wordmark, and pill navigation.
2. Build the left-column font rows and the active green selection state.
3. Build the right-column licence summary and pricing factors.
4. Add the add-on cards and licence choice rows.
5. Build the specimen blocks with the larger Universal Sans scale.
6. Finish with the footer rail and split information grid.

### Accessibility

- Keep the green selection state paired with a shape change or border change so it is not color-only.
- Maintain readable contrast for all near-white text on black surfaces.
- Keep the buy button, tab chips, and pricing fields easy to scan with clear labels and enough padding.
- Preserve visible keyboard focus on chips, rows, and buttons.
- Make sure the specimen pages still provide readable text alternatives when the type blocks are used as content rather than decoration.

## Scope note

This guide covers the dark storefront homepage, the licensing workspace, the large type specimen pages, and the footer shown in the supplied views. It does not include mobile rearrangements, motion, hover transitions, loading states, or alternate marketing pages.
