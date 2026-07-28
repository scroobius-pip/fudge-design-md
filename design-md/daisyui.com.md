# How daisyui.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/daisyui.com-design)

Last updated: 2026-07-28

## Design character

daisyUI’s site is a **component-library showcase**: bold marketing display on the home page and a **dense theme-generator workspace** full of rounded controls, swatches, and bordered preview panels. The brand voice is developer-friendly and playful in type contrast (ultra-light huge display next to heavy 800–900 heads) while the tool UI stays systematic—black text, light surfaces, lots of 8–32px rounding.

What should survive adaptation:

- **Black/zinc text** (`#000000` / `#18181b`) on light tool surfaces.
- **Theme playground density**: many small controls, swatches, dashed guides, layered panels.
- **Large rounded chips** (32px-class radii appear constantly in the generator).
- Home **hero display** at extreme size (60–72px) with thin and black weights mixed.
- Clear split between **marketing home** and **editor workspace** (`/theme-generator/`).

## Foundations

### Color

| Role | Value | Notes |
| --- | --- | --- |
| Text / accent ink | `#000000` / `#18181b` | Primary UI and marketing text |

The generator itself surfaces many theme colors as content—not as a single fixed brand rainbow in chrome. Treat multi-hue swatches as **product data**, chrome as near-monochrome.

### Typography

Families not declared. Measured:

- Home display up to **72px** (weights 300 and 900 contrast) and ~**60px** ultra-light.
- Generator: **48px** weight 200 display, **32px** weight 800 heads, **24px** weight 900 labels.
- UI body **12–16px**; micro **10–11px**.
- Sans throughout; weight extremes are part of the character.

### Spacing and layout

- Generator pads commonly **8–24px**; section bottoms **80px**.
- Home uses **24–40px** gutters and **160px**-class vertical hero padding.
- Borders 1–2px solid (and dashed 1px guides) define panels heavily in the generator.

## Visual language

- Radii: **32px** dominant on generator chips; also 4–16px on tighter controls; occasional full pills.
- Layered bordered surfaces rather than heavy shadows (shadows largely not retained).
- Component previews and theme cards are the imagery.
- Motion not established.

## Components and states

### Marketing hero
Massive mixed-weight headline, simple nav, product proof below the fold.

### Theme generator shell
Sidebar/controls + preview canvas; swatch grids; form fields with 1px borders; dense editing taxonomy (workspace/editor).

### Buttons / chips
Highly rounded, often 32px; compact vertical padding 6–8px on small controls.

## Responsive behavior

Generator captured at ~496–2048px widths: stacking increases on narrow, but 32px chip language remains. Home ~1600–1700px desktop.

## Practical guidance

**Preserve**

1. Zinc/black text on light playground chrome.
2. Extreme display weight contrast on marketing.
3. 32px-class rounded generator controls and bordered panels.
4. Theme colors as content swatches, not random page backgrounds.
5. Dense but aligned tool layout.

**Avoid**

1. Flattening the generator into a sparse brochure.
2. One muted corporate blue replacing black ink + multi-theme previews.
3. Naming a proprietary UI font without a declared family.
4. Dropping dashed structural guides if you need the “editor” feel.

**Adaptation recipe**

- Light tool canvas → black ink → huge weight-contrast marketing type → rounded swatch/chip UI → bordered previews.

## Scope note

Five captures: home (×2) and theme-generator at multiple widths. Supported: text roles, radii, generator density, display scale. Gaps: full component docs pages, font family, motion, complete semantic theme tokens beyond black ink.

## Captured pages

[![Home marketing](https://pin.fontofweb.com/5971?format=jpg)](https://design.withfudge.com/share/pin-5971)

[Home marketing](https://design.withfudge.com/share/pin-5971)

[![Home hero type](https://pin.fontofweb.com/5972?format=jpg)](https://design.withfudge.com/share/pin-5972)

[Home hero type](https://design.withfudge.com/share/pin-5972)

[![Theme generator wide](https://pin.fontofweb.com/6206?format=jpg)](https://design.withfudge.com/share/pin-6206)

[Theme generator wide](https://design.withfudge.com/share/pin-6206)

[![Theme generator mid](https://pin.fontofweb.com/6205?format=jpg)](https://design.withfudge.com/share/pin-6205)

[Theme generator mid](https://design.withfudge.com/share/pin-6205)

[![Theme generator narrow](https://pin.fontofweb.com/6207?format=jpg)](https://design.withfudge.com/share/pin-6207)

[Theme generator narrow](https://design.withfudge.com/share/pin-6207)

## Colors

- `#000000`
- `#18181b`
