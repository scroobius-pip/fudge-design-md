# How app.standards.site is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.standards.site-design)

Last updated: 2026-07-28

## Design character

Standards is a **monochrome, editorial design-ops tool**. The UI looks almost printed: black and white, tiny radii, large empty margins, and very little chroma. It frames design-system work as serious documentation infrastructure rather than a playful canvas app.

What should survive adaptation:

- **Strict black/white (and light gray) palette**
- **4px radius discipline**—barely soft, never bubbly
- **Large outer padding** (≈80px horizontal, ≈90px top in measurements)
- **16px UI type** with tight 16px line-height for compact chrome

## Foundations

### Color

- Ink: black `#000000` / near-black
- Paper: white `#ffffff`
- Wells/rules: light grays ~`#f4f4f4`–`#d4d4d4`
- No strong brand hue observed in chrome—content may introduce color, UI should not

### Typography

Measured default: **16px / 16px**, weight 400—unusually tight leading for a dense tools feel. Hierarchy comes from weight shifts and layout, not a deep size ramp in the shell.

### Spacing and layout

- Horizontal page padding **80px** (very frequent)
- Top padding ~**90px**; secondary **20px** control padding; section **30px**
- Occasional negative margins (~-3 to -9) for optical alignment of tight stacks
- Setup vs edit share the same austere frame; edit adds a structured canvas/document stage

## Visual language

- Hairlines and solid black controls beat shadows (no meaningful shadow system observed)
- Geometry is rectangular with **4px** rounding only
- High contrast binary UI—selected states flip black/white rather than using color fills
- Feels closer to a typesetting app than a colorful design toy

## Components and states

1. **Setup forms** — labeled fields, monochrome buttons, airy vertical rhythm
2. **Edit canvas** — document/artboard central, chrome minimized
3. **Navigation/chrome** — thin, high-contrast, icon+label sparse
4. **Primary actions** — black on white or inverted white on black

## Responsive behavior

Multiple widths from ~1575–2048 on setup plus edit. The system keeps **large padding and monochrome structure** while width changes—desktop fluid, not a separate small-screen identity in this set (shortest height crops still look like desktop UI).

## Practical guidance

**Preserve** binary palette, 4px radii, huge margins, tight 16px chrome type, content-over-chrome hierarchy.

**Avoid** colorful sidebars, 12–16px bubbly cards, heavy drop shadows, or marketing gradients inside the tool shell.

## Scope note

Eight captures of setup + edit for one project path across several widths. Font families and semantic color roles undeclared; guidance from measured spacing/radius/type plus screenshots.

## Captured pages

[![Edit canvas — FontofWeb project](https://pin.fontofweb.com/8524?format=jpg)](https://design.withfudge.com/share/pin-8524)

[Edit canvas — FontofWeb project](https://design.withfudge.com/share/pin-8524)

[![Project setup — wide](https://pin.fontofweb.com/8518?format=jpg)](https://design.withfudge.com/share/pin-8518)

[Project setup — wide](https://design.withfudge.com/share/pin-8518)

[![Project setup — mid width](https://pin.fontofweb.com/8520?format=jpg)](https://design.withfudge.com/share/pin-8520)

[Project setup — mid width](https://design.withfudge.com/share/pin-8520)

[![Project setup — tighter width](https://pin.fontofweb.com/8519?format=jpg)](https://design.withfudge.com/share/pin-8519)

[Project setup — tighter width](https://design.withfudge.com/share/pin-8519)

[![Project setup — alternate state](https://pin.fontofweb.com/8523?format=jpg)](https://design.withfudge.com/share/pin-8523)

[Project setup — alternate state](https://design.withfudge.com/share/pin-8523)

## Colors

- `#000000`
- `#ffffff`
- `#111111`
- `#f4f4f4`
- `#d4d4d4`
