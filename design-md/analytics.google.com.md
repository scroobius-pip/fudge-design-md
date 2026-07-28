# How analytics.google.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/analytics.google.com-design)

Last updated: 2026-07-28

## Design character

Google Analytics is **Material-era enterprise calm**: light gray page ground, white rounded metric cards, blue data ink, and dense-but-airy dashboard composition. Numbers are the heroes; chrome stays neutral so trends, deltas, and tables remain legible for long sessions.

What should survive adaptation:
- White cards on light gray canvas
- Google blue (`#1a73e8`) for series, links, and key actions
- Large KPI figures with small muted labels
- Green/red delta semantics without turning the whole UI into traffic lights

## Foundations

### Color

Measured swatches seen across pages: `#1a73e8`, `#000000`, `#5f6368`, `#333333`. Supporting grays (`#5f6368`, `#333333`) handle secondary labels. Page background is cooler light gray; cards are white. Charts use blue primary lines with lighter fills/bands.

### Typography

Observed text styles:
- **text**: unknown, weight 400, 13px, lh 14.95px
- **text**: unknown, weight 500, 14px, lh 14px
- **text**: unknown, weight 500, 14px, lh 21px
- **text**: unknown, weight 500, 14px, lh 20px
- **text**: unknown, weight 500, 14px, lh 16.1px
- **text**: unknown, weight 500, 18px, lh 24px
- **text**: unknown, weight 500, 14px, lh 14px
- **text**: unknown, weight 400, 13px, lh 20px
- **text**: unknown, weight 500, 14px, lh 18px
- **text**: unknown, weight 500, 14px, lh 16px
- **text**: unknown, weight 400, 12px, lh 13.8px
- **text**: unknown, weight 500, 14px, lh 16px

UI sans throughout. KPI numbers are large and medium-weight; chart axes and table cells shrink; card titles sit between. No decorative display faces inside the app shell.

### Spacing and layout

Recurring spacing measurements include 4px, 8px, 14px, 20px, 24px, 32px, 36px, 40px, 46px. Dashboard modules sit in a responsive card grid with consistent gutters. Realtime side cards pair with main trend cards. Observed corner radii include 8px, 22px. Prefer 12–16px-class soft rounding on cards.

## Visual language

Subtle card shadows, hairline borders, chip filters, and icon+label rows. Charts are flat line/bar with restrained fills. Empty/loading states should stay as quiet as populated ones.

## Components and states

- App top bar / property context (when visible)
- Metric cards with title, big number, delta, sparkline/chart
- Realtime panel with per-minute bars and country list
- Recently accessed shortcut cards
- Text buttons/links in brand blue

## Responsive behavior

Captures are mid-width dashboard views (~1270–1290px). Expect cards to reflow from multi-column to stacked single column; keep KPI type from shrinking below scannable sizes.

## Practical guidance

**Preserve** card-on-gray structure, blue data accent, delta coloring discipline, dense clarity.  
**Avoid** dark-mode gimmicks that fight Material light analytics norms, rainbow multi-series chaos, heavy illustration.

## Scope note

Studied 2 page captures on paths /analytics/web/. Some structural families were incomplete on these pages. Only /analytics/web/ app home-style dashboards were captured—not Admin or Explore deep tools.

## Captured pages

[![Analytics | Home](https://pin.fontofweb.com/6041?format=jpg)](https://design.withfudge.com/share/pin-6041)

[Analytics | Home](https://design.withfudge.com/share/pin-6041)

[![Analytics | Home](https://pin.fontofweb.com/6040?format=jpg)](https://design.withfudge.com/share/pin-6040)

[Analytics | Home](https://design.withfudge.com/share/pin-6040)

## Colors

- `#1a73e8`
- `#000000`
- `#5f6368`
- `#333333`
