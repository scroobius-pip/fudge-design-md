# How grok.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/grok.com-design)

Last updated: 2026-07-28

## Design character

Grok is a **void-black AI chat product**: pure black canvas, monochrome wordmark + orbital glyph, and a single centered **full-pill prompt bar**. Marketing and product share the same darkness; the only warm fleck is a small **orange** “Try Free” chip on promo cards. It feels closer to a terminal stage than a colorful consumer assistant.

What should survive adaptation:

- **Pure black (`#000`) canvas** with white primary type
- **Centered logo lockup** above one prompt capsule
- **Full-pill input** with `+`, model selector, and circular send
- **Charcoal elevated cards** (`#1A1A1A` family) for promos / code snippets
- **Orange micro-accent** only on small badges—not large fills
- Dense product surfaces still stay monochrome (chat, Imagine, plans)

## Foundations

### Color

| Role | Hex | Notes |
| --- | --- | --- |
| Canvas | `#000000` | Home empty state |
| Prompt fill | `#1C1C1C`–`#222` | Pill field |
| Card surface | `#161616`–`#1E1E1E` | Grok Build promo |
| Text primary | `#FCFCFC` / `#FFFFFF` | Logo, titles |
| Text secondary | `#9E9E9E` | Body, placeholders |
| Accent (plans) | `#FF6B35` | Measured on /plans |
| Accent (imagine) | `#0088FF` | Measured on Imagine mode |
| Badge outline | orange | “Try Free” |

Home is monochrome + orange fleck; Imagine introduces blue accent for generative mode—treat as mode-specific, not a second brand primary on chat home.

### Typography

| Use | Weight | Size |
| --- | --- | --- |
| Wordmark | 400–500 | logo scale |
| Body / chat | 400 | 14–16px / 21–28 lh |
| Promo title | 400–700 | ~14–30px |
| UI labels | 500–550 | 14px |

### Spacing and layout

- Home: vertical center stack (logo → prompt → optional card)
- Padding often **16–24px** inside chrome; large empty field
- Radii: **pill 9999** for input; **12–24px** for cards; send control circular
- Plans/cards use 24px padding grids and 24px card radius

## Visual language

- Extreme minimalism; almost no gradients on home
- Soft hairline borders on dark cards
- Code blocks sit in nested dark pills
- Imagine and chat threads keep the same black OS chrome

## Components

### Prompt bar
Leading `+`, placeholder, trailing model dropdown (“Fast”) + circular up-arrow send.

### Promo card
Title + orange outline badge, muted body, monospace command chip with copy icon.

### App chrome (inner routes)
Left rail / history patterns, 16px radii media, pill filters on Imagine.

## Practical guidance

**Do** keep pure black emptiness; one focal pill; monochrome UI; orange only as micro-badge; charcoal cards for secondary content.

**Don’t** lighten to gray mush; rainbow the home shell; make orange the page background; overcrowd the empty stage.

## Scope note

Eight captures: `/`, chat threads, `/imagine`, `/plans` (pins 10170, 9970, 7930, 7925, 7924, 7233, …). Structured accents differ by mode (orange plans, blue Imagine). No declared fonts. Desktop viewports.

## Captured pages

[![Home empty chat](https://pin.fontofweb.com/10170?format=jpg)](https://design.withfudge.com/share/pin-10170)

[Home empty chat](https://design.withfudge.com/share/pin-10170)

[![Plans](https://pin.fontofweb.com/9970?format=jpg)](https://design.withfudge.com/share/pin-9970)

[Plans](https://design.withfudge.com/share/pin-9970)

[![Imagine](https://pin.fontofweb.com/7925?format=jpg)](https://design.withfudge.com/share/pin-7925)

[Imagine](https://design.withfudge.com/share/pin-7925)

[![Chat thread](https://pin.fontofweb.com/7233?format=jpg)](https://design.withfudge.com/share/pin-7233)

[Chat thread](https://design.withfudge.com/share/pin-7233)

## Colors

- `#000000`
- `#1c1c1c`
- `#fcfcfc`
- `#9e9e9e`
- `#ff6b35`
- `#0088ff`
- `#161616`
- `#ffffff`
