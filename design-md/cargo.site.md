# How cargo.site is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cargo.site-design)

Last updated: 2026-07-28

## Design character

Cargo is **extreme minimal chrome for maximal creative work**. The marketing home is a near-empty black field with huge white grotesk headlines (“Cargo Site Builder”, “Explore Sites / Start”), tiny sparse nav, and almost no decoration—plus a single vivid green partner/mark moment. The templates index stays black, with a grid of site thumbnails carrying all color and texture.

What should survive adaptation:
- Black void canvas + white type
- Monumental, simple sans display
- Navigation as whisper-weight text
- Template/work previews as the only busy surfaces

## Foundations

### Color
Structured roles unsupported. Visually: `#000000` ground, `#ffffff` type, muted gray meta, occasional **vivid green** badge/logo (e.g. DINAMO mark). Do not build a pastel secondary palette into the chrome.

### Typography
Weights 300–500. Body/UI ~12–17px; display jumps to **~60px**. Light-to-regular large type on black is the signature—not ultra-black heavy posters.

### Spacing and layout
Unusual optical spacing including negative tracking-related values; macro layout is vast empty regions with type anchored left/right. Templates: multi-column square-ish preview grid with labels beneath.

## Visual language
- Almost no radius language in chrome (thumbnails may have slight 5px)
- No shadows on marketing void
- Grid hairlines on template index
- Color lives inside embedded site previews

## Components and states
- Text-only nav (Templates, Community, Information, Start, Login)
- Giant headline pairs
- Template cards: preview + name + variant count chip
- Minimal footer blurbs

## Responsive behavior
Home/templates at 1712 and 2048. Grid column count is the main flex; black minimal system unchanged.

## Practical guidance
**Preserve** black void, huge light grotesk, gallery-as-color.
**Avoid** filling the home with feature cards, gradients, or stock illustration that competes with templates.

## Scope note
`/`, `/templates`, and one template preview. Editor UI not studied.

## Captured pages

[![Home — black minimal hero](https://pin.fontofweb.com/6367?format=jpg)](https://design.withfudge.com/share/pin-6367)

[Home — black minimal hero](https://design.withfudge.com/share/pin-6367)

[![Templates gallery](https://pin.fontofweb.com/6368?format=jpg)](https://design.withfudge.com/share/pin-6368)

[Templates gallery](https://design.withfudge.com/share/pin-6368)

[![Templates — wide](https://pin.fontofweb.com/6370?format=jpg)](https://design.withfudge.com/share/pin-6370)

[Templates — wide](https://design.withfudge.com/share/pin-6370)

[![Template preview](https://pin.fontofweb.com/6369?format=jpg)](https://design.withfudge.com/share/pin-6369)

[Template preview](https://design.withfudge.com/share/pin-6369)

[![Home — wide](https://pin.fontofweb.com/6371?format=jpg)](https://design.withfudge.com/share/pin-6371)

[Home — wide](https://design.withfudge.com/share/pin-6371)

## Colors

- `#000000`
- `#ffffff`
- `#1a1a1a`
- `#22c55e`
