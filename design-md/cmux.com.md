# How cmux.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cmux.com-design)

Last updated: 2026-07-28

## Design character

cmux sells a **native Mac terminal for agent multitasking** with classic developer-marketing clarity: high-contrast neutrals, product window screenshots (tabs, splits, sidebars), black-and-white CTAs, and just enough monospace signal to feel technical without becoming a theme park. Light and dark bands alternate, but tokens stay monochrome.

What should survive adaptation:

- **Neutral only** (black/white/gray)—no playful brand rainbow  
- **Product screenshot as proof** (multi-pane terminal)  
- Dual **filled black** + **outline** CTA pair  
- **12px** rounding on cards/media  
- Centered content column with airy section pads (~96px)

## Foundations

### Color

Measured roles:

| Context | text_primary | text_secondary | accent/CTA |
|---------|--------------|----------------|------------|
| Dark band | `#ededed` | `#a3a3a3` | light buttons on dark |
| Light band | `#171717` | `#737373` | `#171717` filled buttons |

Canvas flips white ↔ near-black. Taxonomy: monochrome, dark-mode capable, neutral hue.

### Typography

- Heads ~**24px** / 600 / lh 32  
- Lead ~**18px** / 400 / lh ~29  
- Body/UI ~**14–16px** / 400–500  
- Small ~**12–15px**  

Monospace appears inside product screenshots and code-ish UI, not necessarily as marketing body. Families not declared.

### Spacing and layout

- Section padding **96px** vertical common; horizontal **24px**  
- Large side margins (~**516px** at 1712 → narrow centered measure)  
- Stack gaps **12 / 40 / 48px**  
- Feature lists with **16px** gap  

## Visual language

- Radii **12px** on frames/cards; pills for true circular icon buttons  
- 1px borders on outline buttons and window chrome  
- Soft floating app screenshot with subtle depth (visual)  
- Logo mark: simple blue-ish play/terminal badge on light—keep mark small

## Components and states

1. **Top nav** — docs/blog/changelog/community/github + download CTA + theme toggle  
2. **Hero** — logo, title, lede, dual buttons, big app screenshot  
3. **Feature list** — concise bullets under “Features”  
4. **Alternating light/dark bands** for narrative sections  
5. **GitHub social proof** — star count near nav  

Default resting states.

## Responsive behavior

All four captures at 1712px. Light/dark sections demonstrate theme tokens more than breakpoint changes. Expect the centered column to hold while side margins shrink—mobile not captured.

## Practical guidance

**Preserve**

- Monochrome dual theme  
- Screenshot-led hero  
- Black fill + outline CTA pair  
- 12px radius + airy 96px sections  

**Avoid**

- Colorful gradient mesh backgrounds  
- Illustration-only heroes without the real terminal  
- Heavy skeuomorphism beyond a simple window frame  
- Wide unfocused multi-column marketing clutter  

## Scope note

Four home captures spanning light and dark bands. Strong text roles, spacing, radii; font families not declared. Docs/blog subpages not in set.

## Captured pages

[![Home — dark terminal hero](https://pin.fontofweb.com/9447?format=jpg)](https://design.withfudge.com/share/pin-9447)

[Home — dark terminal hero](https://design.withfudge.com/share/pin-9447)

[![Home — light features](https://pin.fontofweb.com/9448?format=jpg)](https://design.withfudge.com/share/pin-9448)

[Home — light features](https://design.withfudge.com/share/pin-9448)

[![Home — continued system](https://pin.fontofweb.com/9449?format=jpg)](https://design.withfudge.com/share/pin-9449)

[Home — continued system](https://design.withfudge.com/share/pin-9449)

[![Home — consistency pass](https://pin.fontofweb.com/9450?format=jpg)](https://design.withfudge.com/share/pin-9450)

[Home — consistency pass](https://design.withfudge.com/share/pin-9450)

## Colors

- `#ffffff`
- `#0a0a0a`
- `#171717`
- `#ededed`
- `#a3a3a3`
- `#737373`
- `#f5f5f5`
