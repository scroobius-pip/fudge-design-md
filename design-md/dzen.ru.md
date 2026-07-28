# How dzen.ru is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dzen.ru-design)

Last updated: 2026-07-28

# How dzen.ru is designed

## Design character

Dzen News is a bright, card-based Russian news reader: white canvas, soft gray search capsule, bold story headlines, and a river of rounded media cards. It feels consumer-friendly and content-first—closer to a modern feed product than a classic broadsheet.

## Foundations

### Color

No structured palette rows; visual system from captures:

- **Page background:** white / very light gray
- **Primary text:** near-black
- **Links / inline emphasis:** clear blue underline style in article bodies
- **Chips and source pills:** light gray fills with dark labels
- **Category accents:** small colored marks (e.g. red LIVE-style badges) on cards
- **Media:** full-color photography inside rounded rectangles

### Typography

- Story titles ~24px weight 700, ~28px line-height
- Deck / body ~16–18px weight 400, line-heights 16–28px depending on block
- Meta and source rows smaller, regular weight

Cyrillic UI stays highly legible with generous title leading and restrained decoration.

### Spacing and layout

- Common padding 16px; margins around 11–12px between feed units
- News home: search bar top, horizontal topic chips, then multi-column card mosaic
- Article: centered column with title, byline, body, inline image strip, source chips
- Card radius observed around **20px** on feed imagery

## Visual language

- Large rounded content cards with image-led tops
- Pill search field and pill topic filters
- Source attribution as compact chip rows
- Minimal chrome—content tiles are the interface

## Components and states

- Global search capsule
- Topic chip row (text + optional icons)
- Story cards (image, title, source, time)
- Article header with publisher badge
- Horizontal thumbnail strip with “+N” overflow
- Source link chips under articles

## Responsive behavior

Captures are relatively narrow (~650–740px wide), already reading as single-column feed/article layouts. Wider desktop mosaic behavior is not fully represented.

## Practical guidance

**Preserve**

- White feed canvas and 20px-class media rounding
- Bold ~24px titles with calm body copy
- Chip-based topics and sources
- Image-forward cards over text-only lists

**Avoid**

- Dark mode assumptions from these captures
- Dense newspaper multi-column body text
- Hard square thumbnails that fight the soft card language

## Scope note

Two captures: `/news` feed and one story page. Color and type families are screenshot-derived; spacing/radius partially measured.

## Captured pages

[![News feed mosaic](https://pin.fontofweb.com/8995?format=jpg)](https://design.withfudge.com/share/pin-8995)

[News feed mosaic](https://design.withfudge.com/share/pin-8995)

[![Story article](https://pin.fontofweb.com/8996?format=jpg)](https://design.withfudge.com/share/pin-8996)

[Story article](https://design.withfudge.com/share/pin-8996)

## Colors

- `#ffffff`
- `#111111`
- `#e8e8e8`
- `#2f6fed`
