# How ai-sdk.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ai-sdk.dev-design)

Last updated: 2026-07-28

## Design character

AI SDK (Vercel) is a **developer documentation-marketing hybrid on pure black**. The page opens with a huge centered white headline, quiet gray deck, monochrome nav, and a dual teaching device: a dark code terminal beside a chat transcript. Accents appear as soft status colors in code (pink/green strings) and occasional green (`#62c073`) or pink (`#f75f8f`) category accents—never as a loud marketing rainbow. It feels like Vercel’s OSS craft: minimal, precise, dark, and code-real.

What should survive:

- Black void canvas, `#ededed` primary text, `#a1a1a1` secondary.
- Hero claim in large white display (~40–64px, weight 600).
- Install pill (`npm install ai`) as a first-class control.
- Code + chat twin panels demonstrating the product.
- Pill tabs for modalities (Text, Image, Speech…).

## Foundations

### Color

| Role | Value | Use |
| --- | --- | --- |
| Accent (varies by section) | `#62c073`, `#f75f8f`, `#ededed` | Category/highlight accents |
| Primary text | `#ededed` | Headlines and main UI |
| Secondary text | `#a1a1a1` | Deck, meta, muted chrome |
| Ground | black | Page |
| Code surface | elevated charcoal panels | Terminal / chat cards |

### Typography

- **Hero**: ~64px semibold white, centered.
- **Deck**: ~16–20px gray.
- **Code**: monospaced 13–16px with syntax coloration.
- **Tabs / chrome**: 12–16px.
- Families not declared (system/Vercel stack visually).

### Spacing and layout

- Centered hero stack; 16–48px gaps; large empty black margins.
- Radii: 6–12px cards; 100/9999px pills for tabs and install chip.
- Twin panel row under tabs; stats strip beneath.

## Visual language

- Hairline borders on dark cards, traffic-light window dots on the terminal.
- Pill filters with active filled state.
- Almost no illustration—code is the imagery.
- Soft shadows minimal; contrast does the work.

## Components and states

1. **OSS nav** — triangle mark, AI SDK badge, Docs/Resources, search, Feedback, avatar.
2. **Hero** — title, deck, humans/agents switch, install pill.
3. **Modality tabs** — Text Generation active pill + siblings.
4. **Demo pair** — code editor card + chat bubbles card.
5. **Stats row** — large muted figures (10.1M, 23K…).
6. **Secondary sections** — further dark bands (models list, etc.).

## Responsive behavior

Captures ~1113–1712 wide. Hero remains centered; twin panels likely stack on narrower widths (not fully isolated). System is consistently dark across sizes.

## Practical guidance

**Preserve** black minimalism, gray hierarchy, code-as-hero, pill install CTA.  
**Avoid** light docs skins or heavy brand gradients on first paint.  
**Adapt** other SDK homes by pairing install command + live code/chat proof immediately.

## Scope note

Six home captures. Measured text/accent roles include `#ededed`, `#a1a1a1`, `#62c073`, `#f75f8f`. No declared font families.

## Captured pages

[![Home — hero code and chat](https://pin.fontofweb.com/8393?format=jpg)](https://design.withfudge.com/share/pin-8393)

[Home — hero code and chat](https://design.withfudge.com/share/pin-8393)

[![Home — stats and chrome](https://pin.fontofweb.com/8397?format=jpg)](https://design.withfudge.com/share/pin-8397)

[Home — stats and chrome](https://design.withfudge.com/share/pin-8397)

[![Home — pink accent state](https://pin.fontofweb.com/8396?format=jpg)](https://design.withfudge.com/share/pin-8396)

[Home — pink accent state](https://design.withfudge.com/share/pin-8396)

[![Home — green accent state](https://pin.fontofweb.com/8395?format=jpg)](https://design.withfudge.com/share/pin-8395)

[Home — green accent state](https://design.withfudge.com/share/pin-8395)

## Colors

- `#ededed`
- `#a1a1a1`
- `#62c073`
- `#f75f8f`
- `#000000`
