# How brookings.edu is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/brookings.edu-design)

Last updated: 2026-07-28

## Design character

Brookings reads as a **think-tank newsroom**: authoritative blue (`#00649f`), near-black body ink (`#191919`), gray meta (`#666666` / `#b3b3b3`), photography-led cards, and article pages with clear scholarly hierarchy. The home page is a curated content index; articles are long-form with strong titles and restrained chrome.

What should survive adaptation:

- **Institutional blue** as the single primary accent
- **Card-led content index** on home
- **Serious typography** — bold ~42px article titles, 16–18 body
- **Light mode, flat surfaces**, soft shadows only where cards need lift
- **Photography** for story leads, not startup illustrations

## Foundations

### Color

| Role | Hex | Use |
|------|-----|-----|
| Accent | `#00649f` | Links, key UI accents, institutional blue |
| Text primary | `#191919` | Body/titles |
| Text secondary | `#666666` | Meta, bylines |
| Muted | `#b3b3b3` | Tertiary |
| Surface | `#ffffff` | Cards/page |

### Typography

- Article/display titles: **42px weight 700**, lh ~52; also **32/40** bold
- Subheads: **21/26** weight 600
- Body: **16/24** regular dominant; **18/28.8** for decks
- UI/meta: 13–15px; small 11px
- Semibold 16/25.6 for emphasized UI

Tone is civic and legible—closer to quality journalism than tech marketing.

### Spacing and layout

- Horizontal page padding ~**82px** on large screens
- Grid gaps **40px** common
- Section padding **40–80px**; some tops ~92px
- Home: multi-card modules and topic rows
- Article: narrow readable measure with related content cards

### Radii and shadows

- Pills **9999** for chips/tags
- Shadows: soft `0 4px 20px` under some cards; hairline top highlights
- 1px borders; occasional 4px top rules for section emphasis

## Visual language

- Photography-forward editorial
- Flat white cards, blue text links
- Institutional header with global nav
- Minimal ornament; trust via density of real content

## Components and states

- Global nav + utility
- Home hero/feature stories
- Card grids (image, title, dek, topic)
- Article header (title, authors, date)
- Inline article body
- Related research modules
- Footer mega-nav (institutional)

## Responsive behavior

Seven captures of `/` and a long article at ~1674–1712px. System is desktop editorial; cards should reflow, article measure should stay readable, blue accent and title weights stay constant.

## Practical guidance

**Preserve**: `#00649f` blue, `#191919` ink, card index home, bold article titles, photographic leads, 40px grid gaps.

**Avoid**: startup gradient heroes, playful illustration systems, tiny light-gray body text, or entertainment-magazine sensational type.

## Scope note

Seven captures: home + one article in multiple viewports. Strong color roles and spacing; font family names not declared.

## Captured pages

[![Home — research index](https://pin.fontofweb.com/9553?format=jpg)](https://design.withfudge.com/share/pin-9553)

[Home — research index](https://design.withfudge.com/share/pin-9553)

[![Home — mid crop](https://pin.fontofweb.com/9554?format=jpg)](https://design.withfudge.com/share/pin-9554)

[Home — mid crop](https://design.withfudge.com/share/pin-9554)

[![Home — compact height](https://pin.fontofweb.com/9551?format=jpg)](https://design.withfudge.com/share/pin-9551)

[Home — compact height](https://design.withfudge.com/share/pin-9551)

[![Article — China tech analysis](https://pin.fontofweb.com/9557?format=jpg)](https://design.withfudge.com/share/pin-9557)

[Article — China tech analysis](https://design.withfudge.com/share/pin-9557)

[![Article — alternate pass](https://pin.fontofweb.com/9556?format=jpg)](https://design.withfudge.com/share/pin-9556)

[Article — alternate pass](https://design.withfudge.com/share/pin-9556)

[![Article — third viewport](https://pin.fontofweb.com/9555?format=jpg)](https://design.withfudge.com/share/pin-9555)

[Article — third viewport](https://design.withfudge.com/share/pin-9555)

## Colors

- `#00649f`
- `#191919`
- `#666666`
- `#b3b3b3`
- `#ffffff`
