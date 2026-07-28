# How caffeine.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/caffeine.ai-design)

Last updated: 2026-07-28

## Design character

Caffeine is a **dark, high-contrast AI product** with two related moods:
1. **Marketing/info** — near-black full bleed, pale text, electric lime accent (`#ddf730`), large light display lines
2. **In-product settings** — denser panels, soft periwinkle accent (`#9cb1f4`), gray secondary text, compact controls

The through-line is dark mode first, flat surfaces, and accents that feel electric rather than corporate blue.

What should survive adaptation:
- True dark canvases (not dark-gray mush)
- Pale primary text (`#fbfbfb` / `#f6f6f6`)
- One vivid accent per surface (lime on marketing, cool blue-violet in app)
- Compact radii (6–14px) and 1px borders

## Foundations

### Color
Measured:
- Marketing accent `#ddf730`, text primary `#fbfbfb`, secondary `#888888`
- App accent `#9cb1f4`, text primary `#f6f6f6`, secondary `#d1d1d1`
Also observed light fills `#fbfbfb` sparingly and mid grays `#d1d1d1`. Backgrounds read near black / charcoal.

### Typography
Family undeclared. Observed:
- Default UI/body **16px** weight 400 (line-height often unset/normal in app)
- Marketing display ~**32px** weight **300** — surprisingly light large type
- Emphasis weight 700 at 16/24
- Small labels 12–14px
The light large display on dark is a signature marketing move.

### Spacing and layout
Spacing cluster: **8, 10, 12, 16, 20, 24, 32** with occasional huge hero gaps. Marketing info is a long vertical narrative; settings is a structured panel/layout with bordered regions.

## Visual language
- Radii **6, 8, 14, 32** (32 for larger chips/containers; filter out infinite pill sentinels)
- 1px solid borders define panels (especially settings)
- Flat — no meaningful shadows observed
- Dark mode default; taxonomy also notes yellow + blue accent hues

## Components and states
- Marketing: hero statements, accent CTAs, sparse nav
- App: settings groups, bordered form controls, secondary gray labels
- Accent used for focus/active and key actions
Do not invent toast/modal motion from stills.

## Responsive behavior
Info page ~1712 wide; settings ~1113 wide. Both dark systems hold; settings becomes more vertically stacked at narrower widths. No formal breakpoint tokens recorded.

## Practical guidance
**Preserve**
- Dark-first palette with pale text
- Lime for loud marketing moments; cooler blue for in-app chrome
- Light-weight large display on dark
- Flat bordered panels

**Avoid**
- Pure white marketing pages that break the brand
- Heavy drop shadows
- Multiple loud accents on one screen
- Overly rounded consumer-pastel cards

## Scope note
Studied `/info` and an authenticated-style `/chat/.../settings` view. Home marketing and full chat transcript UI may extend the system further.

## Captured pages

[![About — dark marketing](https://pin.fontofweb.com/7229?format=jpg)](https://design.withfudge.com/share/pin-7229)

[About — dark marketing](https://design.withfudge.com/share/pin-7229)

[![Chat settings — product chrome](https://pin.fontofweb.com/8830?format=jpg)](https://design.withfudge.com/share/pin-8830)

[Chat settings — product chrome](https://design.withfudge.com/share/pin-8830)

## Colors

- `#ddf730`
- `#9cb1f4`
- `#fbfbfb`
- `#f6f6f6`
- `#888888`
- `#d1d1d1`
- `#0a0a0a`
