# How foundation.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/foundation.app-design)

Last updated: 2026-07-28

## Design character

Foundation is a **light, gallery-first NFT marketplace** where art fills large rounded tiles and chrome stays minimal. The home experience can open as a full-bleed artwork stage with a floating frosted search pill; browse/gallery views switch to a clean white shell, big “Browse” wordmark, soft segmented tabs, and a 2-up (or denser) grid of exhibition cards with glass-stat footers.

What should survive adaptation:

- **Art-forward canvases** — artwork is the hero; UI is thin and light.
- **White app shell** with black primary actions and soft gray pills.
- **Large radius media cards** (~12px) and fully pill search/filter controls.
- Frosted / translucent **stats bars** over art (creators, sold, ETH totals).
- Sparse type: huge black display “Browse”, otherwise 14–16px UI.

## Foundations

### Color

No structured palette rows. From captures:

| Role | Hex (approx.) | Use |
|------|----------------|-----|
| Canvas | `#ffffff` | Browse / galleries shell |
| Ink | `#0a0a0a` | Headlines, primary buttons |
| Muted text | `#6b6b6b` | Meta stats labels |
| Soft pill | `#f2f2f2` / `#efefef` | Search field, inactive tabs |
| Active tab chip | light gray fill + black label | “Galleries” |
| Primary CTA | `#000000` text on black btn → white label | Create |
| Accent orb | mint/green gradient dot | Profile/status beside Create |
| Overlay stats | translucent dark glass | Card footers on art |

Home splash may invert to artwork-dominated dark photography with white frosted search — still the same soft-pill language.

### Typography

Families not declared. System is a **grotesk sans**:

| Role | Size | Weight | LH |
|------|------|--------|-----|
| UI body | 16px | 400 | tight / default |
| Emphasis UI | 14–16px | 600 | ~20px |
| Card/section title | 32px | 500 | 40px |
| Display “Browse” | very large black sans | ~700 visual | tight |

### Spacing and layout

- Horizontal page padding often **48px**; dense chip padding **16×20**.
- Card grid with ~12px radius; pill controls at 9999 radius.
- Mint detail views use 8px radius and 8–12px padding on dense forms.
- Home: centered floating search over full-bleed art; browse: header + tab row + masonry/grid of gallery cards.

## Visual language

- Soft, almost borderless cards; image is the surface.
- Pill search with leading icon; black pill Create.
- Glassmorphism only on on-art stat strips, not on chrome.
- Minimal shadow; separation via whitespace and light gray chips.

## Components and states

1. **Top nav** — mark, Feed/Trending, center search pill, theme toggle, Create, avatar orb.
2. **Segmented category tabs** — NFTs / Collections / Drops / Galleries.
3. **Gallery card** — full-bleed art, centered title, optional logo chip, bottom stats row.
4. **Sort control** — “Most active” outlined pill.
5. **Mint/detail surfaces** — denser forms, 8px inputs (from mint captures).

## Responsive behavior

All primary captures ~1712×1314. Grid stays multi-column on desktop; mobile-specific layout not in set. Radius and pill language should hold when columns drop.

## Practical guidance

**Preserve**

- White shell, black CTAs, art-first cards.
- Frosted search and glass stats as the only “effects.”
- Huge quiet display type for section titles.
- 12px media radius + full pills for controls.

**Avoid**

- Heavy marketplace clutter (rainbow badges everywhere).
- Dark-mode-default chrome on browse (home art stage is the exception).
- Sharp 2–4px admin radii on gallery cards.
- Competing brand colors in the shell.

## Scope note

Eight captures including home, galleries browse/trending, profile/collection paths, and a mint page. Color roles and font families unsupported in structure; visual palette from screenshots. Spacing on gallery views partially truncated.

## Captured pages

[![Home art stage](https://pin.fontofweb.com/8481?format=jpg)](https://design.withfudge.com/share/pin-8481)

[Home art stage](https://design.withfudge.com/share/pin-8481)

[![Browse galleries](https://pin.fontofweb.com/8480?format=jpg)](https://design.withfudge.com/share/pin-8480)

[Browse galleries](https://design.withfudge.com/share/pin-8480)

[![Trending galleries](https://pin.fontofweb.com/8479?format=jpg)](https://design.withfudge.com/share/pin-8479)

[Trending galleries](https://design.withfudge.com/share/pin-8479)

[![Mint detail](https://pin.fontofweb.com/8482?format=jpg)](https://design.withfudge.com/share/pin-8482)

[Mint detail](https://design.withfudge.com/share/pin-8482)

## Colors

- `#ffffff`
- `#0a0a0a`
- `#6b6b6b`
- `#f2f2f2`
- `#efefef`
- `#111111`
