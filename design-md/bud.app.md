# How bud.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/bud.app-design)

Last updated: 2026-07-28

## Design character

Bud feels like a **warm productivity studio**: off-white / paper canvas, near-black type, soft gold/amber accent (`#b8860b`), and large rounded product cards. The marketing voice is confident and human (“Your AI Worker”), while the UI chrome stays minimal so **product screenshots and pricing tables** carry the story.

What should survive adaptation:
- Warm neutral canvas (not pure cold gray SaaS)
- Black primary text with a **single metallic gold accent**
- Large **~20–24px rounded** surfaces for cards and media frames
- Screenshot-led storytelling and clear pricing comparison

## Foundations

### Color
Measured roles:
- **Text primary**: `#000000`
- **Accent**: `#b8860b` (dark goldenrod) — links, highlights, key UI accents
Visually: warm off-white page background, white elevated cards, soft gray borders, black buttons for primary CTAs. Keep accent rare; overuse turns the gold decorative.

### Typography
Family names were not declared in captures. Observed sizes/weights:
- Body/UI cluster: **14–16px**, weights **400–600**, line-height ~1.5 (16/24, 14/20)
- Subheads ~20px / 600
- Display/pricing titles ~24px, weights up to **700**
- Small meta ~10–13px
Tracking is generally neutral; hierarchy is weight + size, not all-caps shouting.

### Spacing and layout
Recurring spacing: **4, 8, 12, 16, 24, 32, 40** px with larger section gaps (96–120+). Layout is a centered marketing column with:
- Top nav + wordmark
- Hero copy left / media right or stacked
- Multi-column feature and pricing grids
- Soft card separation rather than hard rules

## Visual language
- Radii mostly **20–24px** (pill-ish cards); avoid sharp rectangles
- Borders: **1–2px solid** light neutral
- Shadows: very subtle (`0 1px 2px`) or flat; elevation is mostly border + fill
- Product UI mockups sit inside rounded frames on the warm canvas
- No heavy gradients in the chrome

## Components and states
- **Primary button**: solid black, white label, rounded
- **Text links / accents**: gold
- **Pricing cards**: large rounded containers, clear plan hierarchy, numeric emphasis
- **Nav**: sparse text links, minimal iconography
- **Replay/detail views**: denser product chrome still on the same neutrals

## Responsive behavior
Captures share ~1712×1314 viewport across home, pricing, and a replay URL. True breakpoint behavior is not multi-width documented; keep fluid cards that stack.

## Practical guidance
**Preserve**
- Warm paper background + black type + single gold accent
- Large rounded card language
- Screenshot-forward heroes
- Medium-weight UI type (500–600) for controls

**Avoid**
- Cold blue SaaS defaults
- Multiple competing accent hues
- Harsh 0-radius panels
- Tiny dense admin type on marketing surfaces

## Scope note
Pages studied: `/`, `/pricing` (two captures), and one replay detail. Color roles measured on pricing; type families undeclared.

## Captured pages

[![Home — AI worker hero](https://pin.fontofweb.com/9131?format=jpg)](https://design.withfudge.com/share/pin-9131)

[Home — AI worker hero](https://design.withfudge.com/share/pin-9131)

[![Pricing — plans and comparison](https://pin.fontofweb.com/9133?format=jpg)](https://design.withfudge.com/share/pin-9133)

[Pricing — plans and comparison](https://design.withfudge.com/share/pin-9133)

[![Pricing — alternate capture](https://pin.fontofweb.com/9132?format=jpg)](https://design.withfudge.com/share/pin-9132)

[Pricing — alternate capture](https://design.withfudge.com/share/pin-9132)

[![Replay detail](https://pin.fontofweb.com/9134?format=jpg)](https://design.withfudge.com/share/pin-9134)

[Replay detail](https://design.withfudge.com/share/pin-9134)

## Colors

- `#000000`
- `#b8860b`
- `#f7f4ef`
- `#ffffff`
- `#e7e2d9`
