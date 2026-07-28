# How app.squareup.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.squareup.com-design)

Last updated: 2026-07-28

## Design character

Square’s app login is a **split-stage brand gate**. One side is a clean white authentication form; the other is a black marketing panel that cycles bold benefit lines and floats a realistic product UI screenshot. The message is trustworthy commerce infrastructure—high contrast, few colors, product-in-hand imagery.

What should survive adaptation:

- **White form + black brand panel** duality
- **Large weighty benefit headlines** on black (only one line fully white/active in the stack)
- **Soft 6px inputs** and calm blue text links
- **Floating product preview card** with gentle shadow

## Foundations

### Color

- Form canvas: `#ffffff`
- Brand panel: `#000000` / near-black
- Input fills/borders: light gray ~`#f5f5f5` / `#e0e0e0`
- Primary text on white: near-black
- Links / focus accent: Square blue ~`#006aff`
- Active benefit line: white; idle lines: dim gray on black

### Typography

Measured:

- UI body: **16px**, weight 400 (dominant)
- Benefit headline: **~32.6px**, weight **600**, generous line-height ~52px

No family name captured; visually a sturdy grotesque consistent with Square’s public brand.

### Spacing and layout

Heavy padding rhythm: **24px** stacks, **48px** section padding, **64px** horizontal insets on the brand panel, ~**25px** control padding.

Wide layout: **two columns** (form | brand). Narrower capture (~890px) still shows the brand panel language—do not reduce the page to a lone form if brand presence matters.

## Visual language

- Radius **6px** on inputs/buttons (primary), tiny 2px accents elsewhere
- Product preview uses a **soft shadow** (~0 8px 32px) to lift the card off black
- Hairline separators on the form; no ornamental illustration style
- Marketing panel may show a vertical list of dimmed phrases with one highlighted—kinetic copy without cluttering the form

## Components and states

1. **Email/password fields** — light fill, 6px radius, clear labels
2. **Primary continue/sign-in button** — solid, high contrast (black or blue per brand moment)
3. **Text links** — blue, quiet
4. **Benefit list** — stacked phrases, one emphasized
5. **Product screenshot card** — rounded window chrome, real UI imagery (POS/menu examples)

## Responsive behavior

Two widths (2048 and 890) of the same login route. The **split brand idea persists**; at narrower widths the marketing column may crop or stack but should not disappear entirely if you are preserving Square’s gate feeling.

## Practical guidance

**Preserve** split white/black gate, 6px controls, blue links, floating product proof, bold single-line benefit emphasis.

**Avoid** playful gradients, tiny legal-wall typography as hero, or removing the product screenshot in favor of abstract shapes.

## Scope note

Only the login route at two viewport widths. Post-login dashboard patterns are outside this guide. Font family not declared in capture data.

## Captured pages

[![Login — wide split layout](https://pin.fontofweb.com/9724?format=jpg)](https://design.withfudge.com/share/pin-9724)

[Login — wide split layout](https://design.withfudge.com/share/pin-9724)

[![Login — narrower crop](https://pin.fontofweb.com/9725?format=jpg)](https://design.withfudge.com/share/pin-9725)

[Login — narrower crop](https://design.withfudge.com/share/pin-9725)

## Colors

- `#ffffff`
- `#000000`
- `#f5f5f5`
- `#e0e0e0`
- `#006aff`
- `#1a1a1a`
