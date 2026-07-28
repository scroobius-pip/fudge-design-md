# How deezer.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/deezer.com-design)

Last updated: 2026-07-28

## Design character

Deezer is a music product that flips between two moods: a **bright, gallery-like onboarding and library shell**, and a **near-black marketing/offers stage** where huge type and soft brand glow do the selling. Across both, the brand stays simple — a purple heart mark, rounded selection rings, pill filters, and flat surfaces — so album art and photography carry emotion while chrome stays calm and legible.

What should survive adaptation:

- A **purple brand accent** used sparingly (logo, selected rings, active toggles) on otherwise neutral UI.
- **Dual canvas modes**: light gray/white product surfaces vs. pure black commercial pages.
- **Circular media** for artists and avatars; rectangular cards for plans and settings groups.
- **Huge display type** on marketing, quiet 14–16px UI type in product.

## Foundations

### Color

Measured roles and palette:

| Role / swatch | Hex | Where it shows up |
| --- | --- | --- |
| Primary text (light product) | `#000000` | Headings, body, nav labels on light canvases |
| Secondary text | `#656367` | Supporting copy, muted labels |
| Primary text (dark commercial) | `#ffffff` | Offers headlines and plan titles on black |
| Secondary on dark | `#a9a6aa` | Feature bullets and muted plan copy |

Visual reading from screenshots (not separately measured as roles):

- **Canvas light**: cool light gray page background behind white cards and circular artist tiles.
- **Canvas dark**: pure black offers hero with a soft purple radial glow behind the headline.
- **Brand purple**: saturated violet/magenta for the heart logo, selected artist rings, and filled account toggles — the one chromatic constant across modes.
- **CTA gray**: disabled/progress pills on onboarding read as medium gray until the user finishes selection.

### Typography

Font family names were not captured. Visually the system is a clean **sans-serif** stack.

Observed sizes and weights:

| Use | Size / weight | Notes |
| --- | --- | --- |
| Marketing display | ~120–160px, weight 700–800 | Ultra-large hero lines on home/offers |
| Section display | 56–78px, weight 700 | Secondary heroes and plan titles |
| Playlist empty title | 64px / 700 | Sparse library empty states |
| Body / UI | 14–16px, weight 400–600 | Account rows, nav, filters |
| Line height | ~1.25–1.5 on UI; tight/solid on display | Display often matches size (e.g. 64/64, 120/120) |

Hierarchy is extreme on commercial pages and deliberately modest inside account/library chrome.

### Spacing and layout

Recurring measurements:

- Horizontal padding clusters around **16 / 24 / 28 / 32px**; wider marketing gutters near **112–190px**.
- Vertical section padding often **24 / 56 / 140px** on marketing; product panels use **16–24px** internal padding.
- Centered content with large equal side margins (~160–570px depending on viewport and page).
- Artist onboarding: multi-column circular grid with equal gaps; genre chips in a single horizontal row.
- Account: narrow centered column of stacked white cards on a light gray field.
- Library: left icon rail + main content; empty state centered in the remaining pane.

## Visual language

- **Radii**: 2, 4, 8, 12px on chips, inputs, cards; **256px** (full pill/circle) on avatars, artist discs, and toggles.
- **Borders**: thin 1px separators; account controls also show heavier 2px outlines on circular controls.
- **Surfaces**: mostly flat. Marketing uses soft brand glow rather than hard shadows; product cards sit as flat white panels on gray.
- **Imagery**: photographic circular portraits dominate onboarding; offers rely on typography + glow with little chrome decoration.
- **Selection**: purple ring + small heart badge on chosen artists; gray pill CTA counts remaining picks.

## Components and states

1. **Top brand bar** — purple heart + wordmark left; minimal or absent secondary chrome on focused flows.
2. **Search field** — full-width light gray pill with leading magnifier.
3. **Genre filter chips** — small rounded pills; one active (filled) vs. outline/idle.
4. **Artist tile** — circular image, name caption, optional purple selection ring and heart.
5. **Progress CTA** — bottom-centered pill (“CHOOSE N MORE ARTISTS”) disabled-looking until quota met.
6. **Offers plan cards** — bordered rounded cards on black; bold price; checklist; dual CTAs (text link + filled).
7. **Account card stack** — white rounded groups with row labels, chevrons, and pill toggles (off = gray track, on = purple fill).
8. **Library shell** — dark icon sidebar, light main stage, empty-state illustration + primary text button.

## Responsive behavior

Captures include a narrower home (~1076px) and wide desktops (~2048px). Patterns that hold:

- Marketing type scales down but stays display-scale.
- Artist grid reduces column count; chips may wrap.
- Account column stays centered single-rail rather than multi-column.
- Sidebar library layout is a desktop product pattern; do not assume the same chrome on small mobile without further captures.

## Practical guidance

**Preserve**

- Purple as the only strong accent on neutral gray/black/white structure.
- Circular media for people/artists; reserve rectangles for settings and commerce.
- Quiet product UI type with occasional oversized marketing display.
- Empty states that stay sparse (illustration + one sentence + one button).

**Avoid**

- Rainbow accents or competing brand hues in chrome.
- Heavy drop shadows or glassmorphism — the system is flat with soft glow at most.
- Dense data tables on consumer surfaces; Deezer prefers cards, discs, and simple rows.
- Using display sizes inside settings — account UI stays 14–16px.

## Evidence scope

Based on six captures: English home (multiple viewports), `/en/offers`, `/account`, and a playlists library empty state. Color roles cover primary/secondary text on light and dark; exact brand-purple hex was not returned as a measured role and should be sampled from brand assets if you need a token. Font family names were not available.

## Captured pages

[![Home — create your artist crew onboarding](https://pin.fontofweb.com/7883?format=jpg)](https://design.withfudge.com/share/pin-7883)

[Home — create your artist crew onboarding](https://design.withfudge.com/share/pin-7883)

[![Offers — Individual plan on dark stage](https://pin.fontofweb.com/7884?format=jpg)](https://design.withfudge.com/share/pin-7884)

[Offers — Individual plan on dark stage](https://design.withfudge.com/share/pin-7884)

[![Account — settings cards and toggles](https://pin.fontofweb.com/7885?format=jpg)](https://design.withfudge.com/share/pin-7885)

[Account — settings cards and toggles](https://design.withfudge.com/share/pin-7885)

[![Playlists — empty library shell](https://pin.fontofweb.com/7886?format=jpg)](https://design.withfudge.com/share/pin-7886)

[Playlists — empty library shell](https://design.withfudge.com/share/pin-7886)

## Colors

- `#000000`
- `#656367`
- `#ffffff`
- `#a9a6aa`
