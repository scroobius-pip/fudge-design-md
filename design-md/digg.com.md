# How digg.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/digg.com-design)

Last updated: 2026-07-28

## Design character

Modern Digg is a **warm paper newsroom**, not the old orange digg-button era. The tech feed sits on a soft **beige canvas** (`#efece6`) with **white elevated cards**, near-black type, and a crisp black wordmark. It feels editorial-product: ranked top stories, highlight tiles, rising-story rails, and dense but breathable metadata (views, likes, avatars). Dark mode is offered as a first-class toggle without changing the information architecture.

What should survive adaptation:

- Warm paper background behind white content cards
- Black wordmark + small category pill (`/TECH`)
- Ranked story list with human avatar stacks
- Quiet chips for filters (Today / 7-days) instead of loud primaries

## Foundations

### Color

Measured:

- Canvas / accent-adjacent warm field: `#efece6`
- Black text/UI: `#000000`
- Dark accent/surface: `#171616`
- Card surfaces: `#ffffff`

Text is essentially black on white/paper. Status chips use soft tints (viewed, negative, climbing) as small labels—keep them secondary to the paper/black system.

### Typography

Declared families not captured. Hierarchy:

- Story titles ~16–18px+ medium/semibold feel (weights 500–600 observed)
- Body/deck ~14–16px weight 400, ~24px line height on body samples
- Meta/labels ~12px weight 500–600
- Section headers (“Today’s Highlights”, “Top Stories”) slightly larger, restrained

### Spacing and layout

Radii cluster **2–12px** (common card/control corners ~8–12). Spacing includes tight 2–8px meta gaps and 16–24px card padding. Desktop home is a **main column + right rail** (Rising Stories). Highlights are a 4-up card row. Mobile captures compress stacks while keeping paper/card logic.

## Visual language

- Soft white cards on beige; hairline borders optional
- Light shadows on some elevated chips
- Avatar piles as social proof under stories
- Numbered ranking in the main list
- Keyboard hint chips (`⌘K`) and dark-mode control in the header utility area

## Components and states

- **Header:** DIGG logo, black category pill, text nav (Stories, GitHub, Rankings), profile
- **Highlight cards:** label chip + headline + avatar row
- **Story row:** rank, title, deck, metric icons, avatar stack, optional quote chip
- **Rail cards:** compact rising items with time-ago and counts
- **Filter pills:** Today / 7-days

## Practical guidance

**Preserve**

- Beige paper + white cards + black type
- Ranked feed + avatar social proof
- Quiet filter chips
- Dense-but-calm metadata

**Avoid**

- Returning to loud orange-as-everything branding without reason
- Pure cold gray SaaS backgrounds
- Stripping avatars/metrics until it becomes a bland link blog

## Scope note

Tech index and article viewports across desktop and narrower widths (pins 9671–9673, 9580–9584). Declared font families not available; dark mode is present as a control but not fully documented as a separate token set here.

## Captured pages

[![Tech feed — highlights and top stories](https://pin.fontofweb.com/9671?format=jpg)](https://design.withfudge.com/share/pin-9671)

[Tech feed — highlights and top stories](https://design.withfudge.com/share/pin-9671)

[![Article — wide story view](https://pin.fontofweb.com/9672?format=jpg)](https://design.withfudge.com/share/pin-9672)

[Article — wide story view](https://design.withfudge.com/share/pin-9672)

[![Article — alternate story](https://pin.fontofweb.com/9584?format=jpg)](https://design.withfudge.com/share/pin-9584)

[Article — alternate story](https://design.withfudge.com/share/pin-9584)

[![Article — narrow viewport](https://pin.fontofweb.com/9673?format=jpg)](https://design.withfudge.com/share/pin-9673)

[Article — narrow viewport](https://design.withfudge.com/share/pin-9673)

## Colors

- `#efece6`
- `#ffffff`
- `#000000`
- `#171616`
