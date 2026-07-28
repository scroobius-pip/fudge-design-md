# How gaio.club is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/gaio.club-design)

Last updated: 2026-07-28

## Design character

GAÏO is a **luxury nightlife / cabaret club site** with cinematic full-bleed photography, enormous display type (~96px), and almost invisible UI chrome. The mood is dark, glamorous, and editorial — images carry the brand; type overlays in white or light gray at extreme scale; spacing is tight on chrome (6–8px) because the photo is the layout.

What should survive adaptation:

- Full-bleed photographic stages as the primary surface.
- Monumental display type (~96/115) for club identity moments.
- Minimal sans UI at 14–18px for menus/meta.
- Dark glamour palette (black, deep shadow photos, white type).
- Sparse controls — the site should feel like a visual invitation, not a booking admin.

## Foundations

### Color

No structured roles. Visual:

| Role | Approx | Use |
|------|--------|-----|
| Canvas / photo | near black + photography | Stages |
| Ink on photo | `#ffffff` | Display, nav |
| Muted on photo | rgba white / `#cccccc` | Secondary |
| Accent | gold/warm if present in brand marks | Sparse |

### Typography

| Role | Size | Weight | LH |
|------|------|--------|-----|
| Display | 96px | 400 | 115.2px |
| Body / UI | 14px | 400 | 16.8px |
| Mid | 18px | 400 | 21.6px |

### Spacing and layout

- Chrome padding tiny (6–8px) relative to full-bleed media.
- Desktop frames ~1432×770; mobile capture 384×787 exists but empty of structure metrics.
- Vertical scroll through photographic chapters / event moods.

## Visual language

- Image-first, type-on-image.
- Little card UI; when present, it’s secondary to photography.
- Elegant thin sans over cinematic photos.

## Components and states

1. Transparent or minimal top nav.
2. Full-bleed hero with oversized wordmark/title.
3. Event / restaurant / club section chapters.
4. Possible reservation CTA as small contrasting control.

## Responsive behavior

Desktop cinematic frames dominate. On mobile, expect stacked photos and scaled-down display; keep type-on-image approach.

## Practical guidance

**Preserve** photographic darkness, 96px identity moments, tiny chrome, luxury restraint.  
**Avoid** bright SaaS cards, stock gradient blobs, dense multi-column marketing.

## Scope note

Eight captures on `/` (desktop repeats + mobile stub). Structured colors unsupported; character from screenshots and extreme display metrics.

## Captured pages

[![GAÏO cinematic home](https://pin.fontofweb.com/8015?format=jpg)](https://design.withfudge.com/share/pin-8015)

[GAÏO cinematic home](https://design.withfudge.com/share/pin-8015)

[![Home alternate frame](https://pin.fontofweb.com/8016?format=jpg)](https://design.withfudge.com/share/pin-8016)

[Home alternate frame](https://design.withfudge.com/share/pin-8016)

[![Home third crop](https://pin.fontofweb.com/8014?format=jpg)](https://design.withfudge.com/share/pin-8014)

[Home third crop](https://design.withfudge.com/share/pin-8014)

[![Mobile stamp](https://pin.fontofweb.com/4554?format=jpg)](https://design.withfudge.com/share/pin-4554)

[Mobile stamp](https://design.withfudge.com/share/pin-4554)

## Colors

- `#000000`
- `#0a0a0a`
- `#ffffff`
- `#cccccc`
- `#1a1a1a`
