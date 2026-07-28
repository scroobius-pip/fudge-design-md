# How app.quiver.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.quiver.ai-design)

Last updated: 2026-07-28

## Design character

QuiverAI presents a **soft, gallery-like creative beta**: warm off-white grounds, black typography, and generous rounded cards. The product chrome stays almost anonymous so the explore grid—full of photographic tiles—can feel like a magazine wall rather than a dense admin tool.

What should survive adaptation:

- **Light neutral canvas** (off-white, not pure sterile gray-blue)
- **Black primary ink** with mid-gray secondary copy
- **8 / 12 / 16px radius ladder** on controls and media cards
- **Masonry / tiled imagery** as the hero surface on Explore

## Foundations

### Color

| Role | Value | Notes |
| --- | --- | --- |
| Text primary | `#000000` | Headlines, key UI |
| Text secondary | `#737373` | Supporting labels |
| Page ground | warm off-white ~`#f7f7f5` | App canvas |
| Card surface | `#ffffff` | Elevated panels |
| Rules / chips | light gray ~`#e5e5e5` | Hairlines, input edges |

Accents are minimal; emphasis comes from black pills/buttons and the saturation inside user imagery.

### Typography

Declared families were not captured. Measured UI type:

- Default body: **16px / 24px**, weight 400 (extremely dominant)
- Secondary: **14px / 20–21px**
- Display on onboarding: **~44px** with negative tracking (~-1.1px), still weight 400—large but not ultra-bold

The voice is **regular-weight confidence**: size and layout create hierarchy more than heavy font weights.

### Spacing and layout

Padding clusters: **24px** page/card rhythm, **8px** compact control padding, large bottom canvas padding (~144px) for scroll breathing room.

Layouts:

- Explore: top bar + full-bleed masonry of rounded image cards
- Onboarding: centered column of large type + form cards on the soft ground
- Narrower onboarding (~1018px) keeps the same components, tighter columns

## Visual language

- Radii are a clear system: **8px** controls, **12px** medium cards, **16px** large media tiles (all heavily observed)
- Soft light UI with little reliance on dramatic shadows
- Media tiles clip photography into rounded rectangles; chrome never out-styles the photos
- Black filled buttons and text links provide the only strong ink blocks

## Components and states

1. **Top bar** — wordmark/search/utilities on the light shell
2. **Masonry cards** — image-first tiles, likely light meta on/under the image
3. **Onboarding display heading** — oversized regular-weight title
4. **Form cards** — white, 12–16px radius, simple fields
5. **Primary black CTA** — high contrast on off-white

## Responsive behavior

Three captures include wide (~2048) and narrower (~1018) onboarding widths. The system **retains light shell, radii, and type ramp** while columns compress—safe to treat as a fluid light layout, not a separate mobile brand.

## Practical guidance

**Preserve** off-white gallery calm, black/gray type pair, 8–16 radius steps, image masonry as hero.

**Avoid** dark-mode defaults, neon accents, tiny dense tables as the primary explore metaphor, or squaring off all media.

## Scope note

Three public-beta captures: Explore plus onboarding at two widths. Font families undeclared; color roles partially measured (black/gray text) with surfaces read from screenshots.

## Captured pages

[![Explore — masonry inspiration grid](https://pin.fontofweb.com/9928?format=jpg)](https://design.withfudge.com/share/pin-9928)

[Explore — masonry inspiration grid](https://design.withfudge.com/share/pin-9928)

[![Onboarding — wide desktop](https://pin.fontofweb.com/9927?format=jpg)](https://design.withfudge.com/share/pin-9927)

[Onboarding — wide desktop](https://design.withfudge.com/share/pin-9927)

[![Onboarding — narrower crop](https://pin.fontofweb.com/9926?format=jpg)](https://design.withfudge.com/share/pin-9926)

[Onboarding — narrower crop](https://design.withfudge.com/share/pin-9926)

## Colors

- `#f7f7f5`
- `#ffffff`
- `#000000`
- `#737373`
- `#e5e5e5`
- `#111111`
