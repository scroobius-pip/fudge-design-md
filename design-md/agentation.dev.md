# How agentation.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/agentation.dev-design)

Last updated: 2026-07-28

## Design character

Agentation’s docs site is a **clean product-education surface**: white canvas, near-black type, a left documentation rail, and a single instructional hero that shows the product UI inside a light browser frame. The brand mark is a minimal line glyph; accent interaction color is a clear blue on otherwise monochrome chrome. It feels like a careful indie developer tool—high craft, low noise.

What should survive:

- White docs shell with sticky/side nav.
- Product demo as the hero, not abstract gradients.
- Blue only for links, steps, and primary buttons inside the product chrome.
- Long-form explanatory body under the demo.

## Foundations

### Color

| Role | Value | Use |
| --- | --- | --- |
| Ground | white | Page |
| Primary text | `#000000` / `#111111` | Headings and body |
| Accent / interactive | bright blue (buttons, step badges, text links) | CTAs and anchors |
| Chrome | light gray browser frame, dark floating toolbars | Demo UI |

Measured roles emphasize monochrome text; blue is visible in screenshots on buttons (“Add”), numbered badges, and inline links.

### Typography

- **Page title**: ~18–24px semibold sans (“Overview”).
- **Body**: ~15–16px, comfortable line length in the main column.
- **Nav**: 13–15px; quiet hierarchy with a “NEW” pill on API.
- **Code / UI labels**: smaller mono-like labels inside the demo.

Families not declared in data.

### Spacing and layout

- Docs pattern: narrow left nav (~logo + links), wide main column.
- Tight 8–18px stack spacing inside content; demo card has soft shadow and ~8–16px radius.
- Floating black annotation toolbar (pill) overlays the demo.

## Visual language

- Soft shadows under the browser mock; rounded 8–16px cards.
- Numbered blue circular callouts on the mock UI.
- Dark tooltips/popovers with blue primary buttons for “Add”.
- Minimal illustration—mostly UI chrome photography/mock.

## Components and states

1. **Docs shell** — left nav, main article, version pin.
2. **Hero demo card** — fake browser with annotated dashboard and floating toolbar.
3. **Quick start numbered list** — plain text steps.
4. **Inline product popover** — dark panel, input, Cancel/Add.
5. **Text links** — blue underline-on-hover style anchors to essays/authors.

## Responsive behavior

One strong desktop capture (~1718×1314) and one tiny/partial capture; treat desktop docs layout as the reference. Mobile collapse of the left nav is not evidenced.

## Practical guidance

**Preserve** white docs clarity, demo-first teaching, blue as the only saturated accent.  
**Avoid** dark-marketing hero clichés or multi-color gradient mashups.  
**Adapt** other tools by putting a real UI annotation story above the fold.

## Scope note

Two captures of the home/docs overview. Tiny second capture adds little layout signal. No declared font families.

## Captured pages

[![Docs overview — demo hero](https://pin.fontofweb.com/6234?format=jpg)](https://design.withfudge.com/share/pin-6234)

[Docs overview — demo hero](https://design.withfudge.com/share/pin-6234)

[![Partial / narrow capture](https://pin.fontofweb.com/6235?format=jpg)](https://design.withfudge.com/share/pin-6235)

[Partial / narrow capture](https://design.withfudge.com/share/pin-6235)

## Colors

- `#000000`
- `#111111`
- `#ffffff`
