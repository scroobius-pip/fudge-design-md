# How airbnb.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/airbnb.com-design)

Last updated: 2026-08-04

## Captured pages

[![Centered search capsule with segmented fields and coral action button](https://pin.fontofweb.com/2577?format=jpg)](https://design.withfudge.com/share/pin-2577)

[Centered search capsule with segmented fields and coral action button](https://design.withfudge.com/share/pin-2577)

[![Horizontal homes rail with rounded photo cards and guest-favorite chips](https://pin.fontofweb.com/2578?format=jpg)](https://design.withfudge.com/share/pin-2578)

[Horizontal homes rail with rounded photo cards and guest-favorite chips](https://design.withfudge.com/share/pin-2578)

[![Travel inspiration footer with link columns and wide white spacing](https://pin.fontofweb.com/2579?format=jpg)](https://design.withfudge.com/share/pin-2579)

[Travel inspiration footer with link columns and wide white spacing](https://design.withfudge.com/share/pin-2579)

## Overview

Airbnb's home page is a quiet marketplace shell built around white space, rounded rectangles, and image-led browsing. The interface does not try to look like a dashboard or a promotional landing page. It behaves like a catalog: a compact top bar for getting into the product, a centered search capsule for starting a trip, horizontal rows of homes, then a low-contrast footer for support and company links.

The system depends on restraint. Most of the page stays near-white, text stays dark and compact, and the only obvious saturated accent is the coral search control. The listings supply the color and warmth. That separation keeps the interface calm while still making the photos feel inviting and varied.

## Colors

Airbnb keeps the shell almost entirely light. Canvas and surface tones do the structural work, border gray holds the card edges and dividers, and ink stays dark rather than charcoal-soft. The coral action color appears in the search button, the logo mark, and small active accents. The photos carry the richer color: warm interiors, blue water and sky, and occasional brick exteriors. There is no visible dark brand mode in the supplied views, so the palette should stay restrained and let photography supply the contrast.

| token | value | role |
|---|---|---|
| action | #F63E5C | Search button, brand mark, and active accent details |
| ink | #000000 | Primary text, icons, and strongest label color |
| muted-ink | #6D6C6C | Secondary labels, prices, and footer copy |
| canvas | #FCFCFC | Main page background and open whitespace |
| surface | #FBFBFB | Cards, search field fill, and quiet raised surfaces |
| border | #DDDDDD | Dividers, input separators, and card framing lines |
| photography-sky | #89B5CF | Bright outdoor imagery, pools, and sea views |
| photography-warm | #D7BB90 | Interior wood, bedding, and lamp-lit rooms |
| photography-brick | #EF773B | Exterior masonry and warmer street-facing scenes |

The relationship between modes is simple: the UI chrome stays light and nearly monochrome, the accent stays coral, and the photographed scenes supply the rest. That means the design system should not spread the coral tone into general surfaces or add extra brand colors to the shell. Dark surfaces are not part of the visible system here; if they are introduced later, they should remain separate from the core browsing experience.

## Typography

Airbnb uses one family across the visible interface, with a shallow ladder of weights and sizes. The text feels compact and functional rather than editorial. Section labels and controls lean medium-weight, metadata stays small and quiet, and the page avoids dramatic jumps between weights. The family is credited to Dalton Maag Ltd as supplied.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| page-title | By Dalton Maag Ltd-3078640620900675463 | 1.5rem | 500 | 1.2 | -0.01em | Top utility titles and strongest section labels |
| section-title | By Dalton Maag Ltd-3078640620900675463 | 1.125rem | 500 | 1.25 | 0em | Row headings such as destination and inspiration groups |
| card-title | By Dalton Maag Ltd-3078640620900675463 | 1rem | 500 | 1.35 | 0em | Listing names, tabs, and primary navigation text |
| body | By Dalton Maag Ltd-3078640620900675463 | 0.875rem | 400 | 1.5 | 0em | Prices, support lines, and descriptive subtitles |
| meta | By Dalton Maag Ltd-3078640620900675463 | 0.75rem | 400 | 1.4 | 0em | Chips, legal copy, and small footer metadata |

The hierarchy comes from spacing, scale, and selective weight rather than from multiple fonts. Keep headings short, avoid all-caps display treatment, and preserve the dense-but-readable rhythm in the footer. The interface works because the type never competes with the photos.

## Layout

The page is organized as a centered content stack with strong horizontal rails. The header spans the width of the viewport, but the main controls sit in a focused centerline. The search bar is the largest single shape on the page and acts as the visual anchor for the whole shell. Beneath it, the content becomes a sequence of rows: a title line, then a long band of listing cards or inspiration links, each row separated by ample white space.

The listing sections behave like carousels even when they are presented statically. Each card has a consistent width, a photo first, then a small text block. The cards are visually uniform so the photos carry the variation. That consistency matters more than precise card count; the page reads as a browsable set of options, not a mosaic.

The footer switches into a denser editorial grid. Three link columns sit under the inspiration links, with a final legal strip running across the bottom. This is the only place where the page condenses information heavily. The transition from open rails above to compact directory below creates the page's main rhythm.

Spacing should stay modular. Use broad section gaps between major rows, but keep the inside of each control tight. The search bar, chip labels, and card captions all benefit from smaller insets than the spaces between page sections. That contrast gives the interface its clean, unhurried feel.

## Visual language

The visual language is soft, rounded, and almost allergic to ornament. The primary shapes are capsules, rounded cards, and small circular controls. Borders are thin and pale. Shadows, if used at all, are barely noticeable and should never become a styling feature. The overall impression is that the page is built from cut paper and photographs rather than from heavy panels.

Photography does most of the expressive work. The listing cards show interiors, balconies, city houses, coastal views, and warm bedrooms. Those images add color, texture, and local identity while the UI chrome stays neutral. This is why the system can feel both broad and specific: the shell never changes its tone, but the content can vary from one destination to another.

Accent treatment is narrow and deliberate. Coral belongs to the brand mark and the search control, not to generic links or card fills. Small white chips on photos provide utility without noise. The heart icon, language controls, and carousel arrows remain thin-line or monochrome, which keeps the page from becoming visually busy.

The design language favors order over drama. Alignment is clean, spacing is even, and surfaces stay flat. Rounded corners soften the structure, but the page still feels precise because every control is aligned to a consistent grid.

## Components

### Header and top navigation

- **Anatomy:** Brand mark on the left, centered product tabs, and right-aligned account and utility controls.
- **Surface:** White background with no visible framing box.
- **Typography:** Small medium-weight labels; the selected tab reads a touch stronger than the others.
- **Shape:** Tabs are plain text with a thin underline on the active item. Utility icons sit in small circular buttons.
- **Composition:** The header balances left, center, and right rather than packing everything into one cluster.
- **Visible states:** The active tab is darker and underlined. Utility actions stay understated.

### Search bar

- **Anatomy:** One long capsule divided into destination, dates, and guest fields, followed by a circular search button.
- **Surface:** White fill with pale separators between segments.
- **Typography:** Label above placeholder, with the label smaller and darker.
- **Shape:** Large pill radius; the button is fully circular.
- **Spacing:** Segments have tight internal padding and clear vertical separation between label and placeholder.
- **Visible states:** The coral search button is the only highly saturated control in the shell.

### Listing card

- **Anatomy:** Photo first, then a short title line and a small price/meta line.
- **Surface:** The image is the main surface; text sits directly below with minimal framing.
- **Typography:** Card titles use the strongest small text; the price line drops to a quieter body size.
- **Shape:** Large rounded corners on the photo crop; the card reads as a soft tile rather than a box.
- **Composition:** The same card structure repeats across a row so the photographs can do the differentiation.
- **Visible states:** A small white "Guest favorite" chip sits in the upper-left of the photo, and a thin heart icon sits in the upper-right.

### Section row and inspiration links

- **Anatomy:** A left-aligned heading, a right-pointing affordance, and a horizontal rail of related items.
- **Surface:** No heavy container. The row is defined by spacing alone.
- **Typography:** Section headings are slightly larger and stronger than card labels.
- **Composition:** The row title sits above the rail, not inside it.
- **Visible states:** The arrow control reads as a navigation affordance, while the text links below the inspiration heading stay compact and regular.

### Footer directory

- **Anatomy:** Three link columns, then a legal and utility strip at the bottom.
- **Surface:** Still white, but visually quieter than the browsing rows.
- **Typography:** Smaller body and meta text with low visual weight.
- **Spacing:** Wide horizontal separation between columns; tighter line spacing inside each column.
- **Hierarchy:** The support and company links are readable but secondary to the browsing content above.
- **Visible states:** Footer controls and social icons are restrained, monochrome, and aligned to the bottom edge.

## Responsive behavior

On narrow screens, preserve the order of the experience rather than changing its character. The brand, search controls, and key browsing rows should remain first. The search capsule should collapse into a stacked or wrapped form before it becomes cramped. Listing cards should stay swipeable, with enough left and right bleed to signal that more homes continue off screen. Footer columns should stack cleanly, but the legal strip should still land last and stay readable.

The key responsive rule is to protect the large photo cards and the compact text hierarchy. Do not let the search button shrink into an unreadable dot, and do not let the card captions wrap into long blocks. The layout can compress, but the rhythm should stay the same: open shell, image rail, quiet footer.

## Practical implementation guidance

### Preserve

- Keep the page mostly white and let the photos supply the visual variety.
- Preserve the single coral action color for the search control and the brand mark.
- Keep card corners soft and consistent rather than mixing several radius values.
- Retain the shallow text hierarchy: compact labels, modest headings, and small metadata.
- Keep dividers and borders pale enough that they frame content without dominating it.

### Avoid

- Avoid heavy shadows, dark panels, or layered chrome around the cards.
- Avoid introducing more accent colors into the UI shell.
- Avoid tall paragraph blocks in the browsing rows.
- Avoid turning every element into a pill; the shape language should stay selective.
- Avoid dense link styling in the footer; it should remain quiet and legible.

### Recommended build order

1. Build the type scale and color tokens.
2. Build the header and centered search capsule.
3. Build one reusable listing card with chip and save icon slots.
4. Build the horizontal row pattern with heading and rail.
5. Build the footer directory and legal strip.
6. Add responsive stacking rules only after the desktop rhythm is correct.

### Accessibility

- Keep text contrast strong on the white shell and within the footer.
- Give the search button, save icon, and carousel arrows clear labels.
- Preserve visible keyboard focus on tabs, buttons, and card actions.
- Do not rely on color alone to show the active tab or saved state.
- Keep touch targets large enough for the circular utility controls and the search button.

## Scope note

This guide covers the visible desktop homepage shell: top navigation, search capsule, listing rails, inspiration links, and footer. It does not include mobile rearrangements, modal dialogs, loading states, map views, or host tools. Measurements are practical adaptation targets.
