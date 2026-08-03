# How airbnb.ca is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/airbnb.ca-design)

Last updated: 2026-08-03

## Captured pages

[![Search results grid with filter chips and map panel](https://pin.fontofweb.com/10049?format=jpg)](https://design.withfudge.com/share/pin-10049)

[Search results grid with filter chips and map panel](https://design.withfudge.com/share/pin-10049)

[![Listing hero with photo mosaic and reserve sidebar](https://pin.fontofweb.com/10051?format=jpg)](https://design.withfudge.com/share/pin-10051)

[Listing hero with photo mosaic and reserve sidebar](https://design.withfudge.com/share/pin-10051)

[![Guest review area with rating badge and comment blocks](https://pin.fontofweb.com/10052?format=jpg)](https://design.withfudge.com/share/pin-10052)

[Guest review area with rating badge and comment blocks](https://design.withfudge.com/share/pin-10052)

[![Host details card beside payment safety note](https://pin.fontofweb.com/10055?format=jpg)](https://design.withfudge.com/share/pin-10055)

[Host details card beside payment safety note](https://design.withfudge.com/share/pin-10055)

[![Explore links, support columns, and locale footer](https://pin.fontofweb.com/10056?format=jpg)](https://design.withfudge.com/share/pin-10056)

[Explore links, support columns, and locale footer](https://design.withfudge.com/share/pin-10056)

## Overview

Airbnb.ca uses a restrained marketplace system: white canvas, soft gray separators, rounded cards, and one saturated red action color that stays reserved for the most important controls. The page puts stay photography and maps ahead of decoration. Titles are compact, labels are quiet, and the interface reads as a booking tool rather than a promotional landing page.

The visual rhythm comes from section changes rather than from heavy ornament. Search pages lean on a centered header search pill, a chip row, a photo grid, and a map rail. Listing pages move into a larger reading column with a photo mosaic, a right-side booking card, review blocks, host details, and a long footer of links. Across those screens, the same small set of colors and radii keeps the experience coherent.

The design system should preserve three things above all else: the white field, the hot red action, and the photo-first card structure.

## Colors

The palette is narrow on purpose. White carries the page. Near-black handles the strongest text. Mid-gray handles metadata and secondary labels. The red family is the only loud accent, and it is concentrated in the logo, search submit, reserve button, active states, and small highlight chips. That keeps the interface calm even when the page is dense with prices, filters, and property details.

| token | value | role |
|---|---|---|
| `action` | `#E61E4D` | Primary buttons, the search submit disc, and strong brand accents |
| `action-strong` | `#E31C5F` | Midpoint in the red button gradient and active emphasis |
| `action-deep` | `#D70466` | Deepest red in the button gradient and strongest accent edge |
| `ink` | `#222222` | Titles, prices, breadcrumb text, and body copy |
| `muted-ink` | `#6A6A6A` | Supporting copy, metadata, and quieter labels |
| `canvas` | `#FFFFFF` | Page background, cards, and most controls |
| `surface` | `#F7F7F7` | Footer canvas and the softest section banding |
| `surface-soft` | `#F2F2F2` | Pale panels and understated control backgrounds |
| `border` | `#DDDDDD` | Card edges, chip outlines, and control borders |
| `rule` | `#EBEBEB` | Section dividers and footer separators |

The red button gradient is the clearest accent pattern: a left-to-right shift from `#E61E4D` through `#E31C5F` to `#D70466`. It keeps the action visible without needing a heavy shadow or a bright outline. On the map, price labels usually sit on white pills with dark text; selected items invert more strongly and can use black fills or darker emphasis. That contrast is functional, not decorative.

White and near-white surfaces carry most of the content blocks. The footer lowers contrast by moving to `#F7F7F7` and `#EBEBEB`, which lets the page end quietly. The system should not introduce new accent hues for badges, chips, or status notes unless the design already uses them in the same role.

## Typography

The interface is built primarily on **By Dalton Maag Ltd**. **Roboto** appears in the map labels and tiny map annotations. **Applesystem** and **Times** also appear in the packet’s font list where those families are used in the interface. Licensing details were not supplied in the packet.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | By Dalton Maag Ltd | 2rem | 600 | 1.1 | -0.03em | Main listing title and large section lead-ins |
| `section-display` | By Dalton Maag Ltd | 1.625rem | 500 | 1.15 | -0.03em | Section headings such as reviews, host, and footer leads |
| `card-heading` | By Dalton Maag Ltd | 1.375rem | 500 | 1.15 | -0.02em | Listing card titles, host titles, and review headers |
| `body` | By Dalton Maag Ltd | 1rem | 400 | 1.43 | 0em | Descriptions, review text, and helper copy |
| `body-medium` | By Dalton Maag Ltd | 1rem | 500 | 1.43 | 0em | Reserve text, totals, strong labels, and emphasis lines |
| `label` | By Dalton Maag Ltd | 0.875rem | 500 | 1.29 | 0em | Tabs, chips, breadcrumbs, and utility labels |
| `micro` | By Dalton Maag Ltd | 0.75rem | 400 | 1.33 | 0em | Trust notes, small metadata, and fine print |
| `map-label` | Roboto | 0.6875rem | 400 | 1 | 0em | Map price pills and small map annotations |

The hierarchy is modest but deliberate. The page rarely needs more than body, label, and one headline size at a time. Prices remain readable without becoming oversized. Chip labels stay compact, and review text sits in long, easy-to-scan paragraphs rather than in dense blocks. The type color usually stays dark rather than pure black, which softens the page without losing clarity.

## Layout

The layout is centered and wide, but not luxurious in the editorial sense. It uses marketplace spacing: enough room for comparison, enough compression to keep the page efficient. Large desktop views split into a content rail and a utility rail, while section blocks inside that structure stay left aligned and easy to scan.

The search page is built from a header, a centered search pill, a filter row, a card grid, and a map panel. Cards sit in a generous multi-column rhythm with plenty of breathing room between the photo, title, rating, and price lines. The map becomes a full visual peer to the card grid rather than a thumbnail. That split is one of the strongest structural cues in the system.

The listing page shifts into a reading flow. A large photo mosaic anchors the top, then the page drops into a title line, stay facts, trust elements, the host block, amenity notes, reviews, and a long footer. On the right, the booking card stays visually separate and works as the conversion anchor. Its rounded container, price line, date fields, and reserve button are designed to stay readable even when the surrounding page gets dense.

Spacing falls into a small set of recurring values: tight chip gaps around 8–12px, content gaps around 24–32px, and larger section separations at 48–80px. Hairline rules separate major blocks more often than colored bands do. The page depends on that contrast between dense information and calm whitespace.

The corners also carry layout meaning. Small controls use pill geometry. Cards and booking panels use moderate rounding. Photo mosaics and large cards use enough radius to feel soft without becoming cartoonish. The system should preserve those differences; if everything is equally round, the page loses its structure.

## Visual language

Airbnb.ca is photo-led, but not in a decorative way. Photos are functional: they show the place, the room mix, the host context, or the surrounding area. The interface wraps those photos in soft rectangles, then keeps text overlays minimal. Badges, hearts, and carousel dots appear only when they help a user decide.

The rest of the visual language stays quiet. Lines are thin. Cards are white. Shadows are soft and used sparingly on booking panels, dropdowns, and floating controls. The red accent is strong enough to mark the main action, yet it never fills whole sections. That restraint is what lets the page handle large amounts of travel data without feeling noisy.

The map language is equally restrained. Price pills float over a light map, with selected states standing out by fill and contrast rather than by size. The map is not a decorative backdrop; it is a live comparison field. On listing pages, the same principle appears in the trust area: a rating badge, a guest-favourite label, and compact review summaries sit beside the property content instead of competing with it.

The footer shifts the mood without changing the language. It keeps the same type scale, but lowers the contrast and spreads content across columns. That makes the bottom of the page feel complete rather than promotional. In short: the system is about clarity, soft geometry, and photographic proof.

## Components

### Header

- **Anatomy:** Logo at left, search control centered or near-center, host and account controls at right.
- **Surface:** White background with a thin bottom rule.
- **Typography:** Small dark sans text, mostly in the `label` or `body` range.
- **Shape:** Search and menu controls use pills or circles; the header itself stays rectangular.
- **Composition:** The bar keeps its content shallow and horizontal so the page can begin quickly.

### Search pill and filter row

- **Anatomy:** Segmented input, location/date/guest fields, red submit button, and a row of chip filters.
- **Surface:** White pill against the white page, with border and shadow doing the separation work.
- **Typography:** Small label text; the submit control uses medium-weight body text.
- **Shape:** Strong pill geometry on the main search control; small rounded chips for filters.
- **Visible states:** Active chips can invert to stronger contrast; the search submit stays the most saturated control on the page.

### Listing card

- **Anatomy:** Large photo, optional Guest favourite badge, save heart, title, rating, dates, and price line.
- **Surface:** White card with a soft border or shadowless edge; the photo fills the top area.
- **Typography:** Title in `card-heading`, metadata in `body` or `micro`, price in `body-medium`.
- **Shape:** Photo corners are soft, but not fully pill-like; the card itself stays moderately rounded.
- **Composition:** Image first, then decision data. That order should stay intact.

### Booking card

- **Anatomy:** Total price, date grid, guest selector, reserve button, and a small trust note.
- **Surface:** White panel with a soft edge and a more noticeable shadow than list cards.
- **Typography:** Price uses strong body weight; helper lines stay small and quiet.
- **Shape:** A stable rounded rectangle rather than a pill.
- **Visible states:** The reserve control remains the loudest element in the card; form fields stay outlined and calm.

### Map price pill

- **Anatomy:** Short price label inside a compact rounded capsule.
- **Surface:** White pill with dark text; selected states can switch to stronger contrast.
- **Typography:** `map-label` in Roboto keeps the labels compact and legible.
- **Shape:** Full pill with small internal padding.
- **Composition:** These labels float without heavy chrome, so the map stays readable.

### Review and rating block

- **Anatomy:** Large numeric rating, guest-favourite badge, category chips, then review cards in a two-column flow.
- **Surface:** White space with hairline separation, not a boxed collage.
- **Typography:** The numeric score is larger than review text but still restrained.
- **Shape:** Chips and small badges use rounded pills; review cards stay open and editorial.
- **Visible states:** Show-more links remain plain text links; the visual hierarchy does the work.

### Host details block

- **Anatomy:** Avatar, host name, month-hosting note, response rate, response timing, message button, and safety note.
- **Surface:** White card or white column with a thin divider below the host summary.
- **Typography:** Host name in body-medium; supporting lines in muted body text.
- **Shape:** Circular avatar, rounded button, and soft panel corners.
- **Composition:** The avatar and stats stay close together so the block reads as one unit.

### Footer and explore lists

- **Anatomy:** Destination lists, related stay categories, support/hosting/company columns, locale and currency controls.
- **Surface:** Pale gray base with thin rules and low-contrast text.
- **Typography:** Small body and micro sizes, with limited emphasis.
- **Shape:** Mostly flat lists; controls remain small and rounded.
- **Composition:** The footer expands horizontally across columns, then compresses into a quieter legal end cap.

## Responsive behavior

On narrower widths, the search bar should collapse before the content does. The filter chips should remain horizontally scrollable. The card grid should reduce column count before shrinking the photo area too aggressively. The map rail should stack below the listings or move into a toggle when space gets tight. The booking card should become a full-width block beneath the main content rather than a compressed side panel.

The listing mosaic should reduce into a dominant lead image with a swipable strip or single-column stack. Review cards should collapse from two columns into one. Footer columns should fold from multi-column to two-column and then single-column groups, while keeping the same type scale and spacing rhythm. The red reserve action should remain easy to find and should stay full width in the booking area on narrow screens.

## Practical implementation guidance

### Preserve

- Keep the page mostly white and let the photography carry the mood.
- Keep the red accent narrow in scope: logo, primary action, active states, and key highlights only.
- Keep the split between content and utility rails on wide screens.
- Keep the rounded geometry varied: pill chips, moderate cards, softer photo corners, and circular avatars.
- Keep the type compact and dark rather than oversized and theatrical.

### Avoid

- Avoid flooding the page with new accent colors.
- Avoid heavy shadows on every card; use depth only where it helps conversion.
- Avoid turning every container into a pill.
- Avoid dense paragraph copy where a label, chip, or short line will do.
- Avoid making the map or footer visually louder than the stay content.

### Recommended build order

1. Build the header, search pill, and filter chips.
2. Build the listing card, map price pill, and selected-state styling.
3. Build the booking card and reserve button.
4. Build the review block, host block, and photo mosaic.
5. Build the footer columns and locale controls.
6. Tighten responsive collapse rules after the desktop structure is stable.

### Accessibility

- Keep contrast strong on all white surfaces, especially for prices and control labels.
- Keep the reserve button large enough to scan and activate quickly.
- Do not rely on color alone to show selected filters or selected map labels.
- Keep chips, links, and buttons keyboard reachable with visible focus styling.
- Preserve readable line lengths in review text, footer lists, and booking summaries.

## Scope note

This guide covers the public search, listing detail, review, host, explore, and footer surfaces shown in the packet. It does not define mobile breakpoints, motion, hover or press transitions, or alternate host/account flows. Spacing and radii are expressed on the packet’s 0.125rem step.
