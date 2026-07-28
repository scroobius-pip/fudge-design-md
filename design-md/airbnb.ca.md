# How airbnb.ca is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/airbnb.ca-design)

Last updated: 2026-07-28

## Design character

Airbnb.ca’s stay product is a polished, photo-forward marketplace: bright white canvas, soft rounded cards, and a single hot accent (Rausch pink) that marks brand and primary action. Search, category stays, and listing detail all share the same calm density—enough structure to compare homes, never so much chrome that photos lose the stage.

The mood is trustworthy hospitality, not luxury editorial and not utility-gray travel. Type is a clean neutral sans; hierarchy is modest (14–16px body, mid-20s titles); depth is light (hairline dividers, soft card shadows). The pink logo and reserve button are the only loud moments; everything else stays charcoal, gray, and white so listing photography carries emotion.

## Foundations

### Color

Measured roles across search and listing captures:

| Role | Hex | Use |
|------|-----|-----|
| Accent | `#ff385c` | Logo wordmark/symbol, primary Reserve CTA, search submit disc, selected emphasis |
| Text primary | `#222222` | Titles, prices, primary body |
| Text secondary | `#6a6a6a` | Meta lines, supporting copy, quieter labels |

Visually reinforced (not always role-tagged):

- **Canvas / surfaces** — pure white page and cards.
- **Chips & controls** — white fills with light gray hairline borders; selected or brand actions flip to pink.
- **Map pins / price pills** — white rounded labels with dark type; selected pin inverts to black fill / white type.
- **Status / trust** — soft green-tinted callouts (e.g. “price below average”) and gold stars for ratings—used sparingly beside the pink system.
- **Destructive / heart** — outline heart on photos; filled state uses the accent family.

Keep accent coverage low. Pink is for brand mark + one primary action per view, not section backgrounds.

### Typography

Declared family names were not captured; the face reads as a neutral geometric/humanist sans (Airbnb Cereal lineage visually).

Observed scale (weight · size · line-height):

- **Micro / chip** — 400 · 11–12px (filter labels, tiny meta)
- **Body default** — 400 · **14px / ~20px** (dominant listing copy, search cards)
- **Body comfortable** — 400 · **16px / 20–24px** (detail descriptions, host notes)
- **Emphasis body** — 500–700 · 14–16px (prices “total”, strong labels)
- **Card / section title** — 500–600 · **22–26px / ~26–30px** (listing name, “Entire home…”, section heads)
- **Display rare** — large decorative sizes appear sparingly; product UI stays in the 14–26 band

Tracking is neutral; no condensed display. Prices mix struck original + bold total in the same size band. Ratings use star glyph + compact number rather than oversized type.

### Spacing and layout

Recurring spacing: **8 · 12 · 24 · 32 · 40 · 48 · 80** px clusters.

- **Search (`/s/...`)** — top global bar + centered destination pill; horizontal filter chip row; **split layout**: scrollable card grid left, sticky map right.
- **Category stays** — similar grid of property cards with photo-first tiles.
- **Listing detail (`/rooms/...`)** — centered content column; **photo mosaic** (large primary + 2×2 secondary) under title; below, two-column body (amenities/host left, **booking card** right).
- Content max width feels marketplace-standard—wide enough for mosaic + card, with generous outer margins on large desktops.
- Vertical sectioning uses **1px light dividers** more than colored bands.

## Visual language

### Shape and radius

Measured radii: **4 · 8 · 12 · 16 · 20 · 24 · 28 · 40** (plus full pills).

- **Listing photos** — large rounded rectangles (~12–16px+), carousel dots over image.
- **Search / filter chips** — full **pills** with light stroke.
- **Destination search control** — elongated pill with segmented fields and pink circular submit.
- **Booking card** — large rounded container (~12–16px) with internal grid for dates.
- **Map price labels** — compact pills; circular map zoom controls.
- **Icon buttons** (share, save, menu) — circular or soft-round ghost controls.

### Borders and shadows

- Borders are almost always **1px solid** light gray on white (chip outlines, booking card, date fields, section rules). High occurrence of top/bottom hairlines for list separation.
- Shadows stay soft and structural:
  - light lift on cards / floating controls (`y:2 blur:4–16`)
  - booking card and map chrome use medium ambient shadow (`y:8 blur:24` family)
  - occasional 1px spread “ring” instead of a gray border
- No heavy material stacks or colored glows.

### Imagery

Photography is the product. Listing tiles and the detail mosaic use real stay photos full-bleed inside rounded frames. Overlays are minimal: “Guest favourite” pill, heart, carousel chevron, “Show all photos”. Map is a full equal citizen on search—not a decorative thumbnail.

### Motion

Not measured from stills. UI implies standard marketplace motion: chip press, card hover lift, map pan, photo carousel—not cinematic page transitions.

## Components and states

### Global header

- Left: pink Airbnb mark + wordmark.
- Center: **segmented search pill** (location · dates · guests) with pink search disc.
- Right: text links (“Become a host”), globe, circular menu avatar control.
- Hairline bottom border separates header from content.

### Filter chip row

Horizontal scrolling pills: Filters plus amenity shortcuts (pets, parking, wifi…). Default = white + gray stroke + dark label; system stays quiet until a filter is active.

### Listing card (search / category)

1. Rounded photo (aspect ~4:3) with optional **Guest favourite** badge and save heart  
2. Title row + star rating  
3. One-line descriptor  
4. Dates · bed/bath meta in secondary gray  
5. Price row: optional struck price + **bold total** (“$X CAD total”)  

Cards sit in a responsive multi-column grid beside the map.

### Map panel

- Price pills as markers; **selected** marker fills black.
- Floating white circular zoom / expand controls.
- Dotted search-area boundary on the map.

### Listing detail

- **Title** centered above mosaic.
- **Photo mosaic** with “Show all photos” control on the last cell.
- **Facts row** under title (guests · bedrooms · baths).
- **Trust strip**: Guest favourite, social-proof line, numeric rating + review count in a rounded light container.
- **Host row**: avatar, name, hosting tenure.
- **Amenity list**: icon + title + short supporting line.
- **Booking card** (sticky-feeling on desktop): total price, optional green insight chip, check-in/out grid, guests select, **full-width pink Reserve**, fine-print “won’t be charged yet”.

Visible still states: default, favourite badge, selected map pin, struck-through vs total price. Do not invent hover/focus specs beyond light elevation and accent fill on primary actions.

## Responsive behavior

Captures are desktop-width section crops (search split view, detail mosaic + booking card). Expected adaptations consistent with the system:

- Narrow: map stacks or becomes a toggle; listing grid → 1–2 columns; booking card moves below amenities.
- Chips remain horizontally scrollable.
- Photo mosaic collapses toward carousel.
- Pink primary CTA remains full-width in the booking block.

## Practical guidance

**Preserve**

- White canvas + `#222222` / `#6a6a6a` type + **`#ff385c` only for brand + primary action**.
- Photo-first cards and the detail mosaic.
- Pill search + pill filters.
- Soft radii ladder and light hairline structure.
- Map alongside results on wide search.
- Booking card as a self-contained summary with one pink CTA.

**Avoid**

- Flooding pink across backgrounds or secondary buttons.
- Hard black body text on pure white at long line lengths without the softer `#222`.
- Sharp 0-radius cards or heavy drop shadows that feel like old material design.
- Dense data tables competing with photography.
- Extra accent hues for every badge (keep Guest favourite and ratings quiet).

**Adaptation tips**

- Marketplace MVP: header search pill, chip row, image card grid, pink primary—already reads “Airbnb-class”.
- Detail page: mosaic + trust strip + sticky price card is the conversion pattern to copy carefully.
- Localization (CAD totals, copy) sits inside the same type scale; don’t invent a separate regional skin.

## Scope note

Studied paths: category stays (`/pittsburgh-pa/stays`), search results (`/s/Pittsburgh--PA/homes`), and a full listing detail (`/rooms/...`) including photo mosaic, amenities, and booking card. Captures are section crops on large desktops. Declared font files/families were not present—treat typography as a neutral sans scale. Home/landing marketing and host dashboards were not in this set.

## Captured pages

[![Search — grid + map](https://pin.fontofweb.com/10049?format=jpg)](https://design.withfudge.com/share/pin-10049)

[Search — grid + map](https://design.withfudge.com/share/pin-10049)

[![Search — card crop](https://pin.fontofweb.com/10050?format=jpg)](https://design.withfudge.com/share/pin-10050)

[Search — card crop](https://design.withfudge.com/share/pin-10050)

[![Category stays grid](https://pin.fontofweb.com/10056?format=jpg)](https://design.withfudge.com/share/pin-10056)

[Category stays grid](https://design.withfudge.com/share/pin-10056)

[![Listing — hero + booking](https://pin.fontofweb.com/10051?format=jpg)](https://design.withfudge.com/share/pin-10051)

[Listing — hero + booking](https://design.withfudge.com/share/pin-10051)

[![Listing — mid detail](https://pin.fontofweb.com/10055?format=jpg)](https://design.withfudge.com/share/pin-10055)

[Listing — mid detail](https://design.withfudge.com/share/pin-10055)

[![Listing — section band](https://pin.fontofweb.com/10054?format=jpg)](https://design.withfudge.com/share/pin-10054)

[Listing — section band](https://design.withfudge.com/share/pin-10054)

[![Listing — structure crop](https://pin.fontofweb.com/10053?format=jpg)](https://design.withfudge.com/share/pin-10053)

[Listing — structure crop](https://design.withfudge.com/share/pin-10053)

[![Listing — supporting block](https://pin.fontofweb.com/10052?format=jpg)](https://design.withfudge.com/share/pin-10052)

[Listing — supporting block](https://design.withfudge.com/share/pin-10052)

## Colors

- `#ff385c`
- `#222222`
- `#6a6a6a`
- `#ffffff`
