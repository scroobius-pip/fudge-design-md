# How clarity.microsoft.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/clarity.microsoft.com-design)

Last updated: 2026-07-28

## Design character

Microsoft Clarity’s public site is **Fluent-adjacent product marketing**: clean white canvas, Segoe-like sans hierarchy, official Microsoft blue for actions, and large dashboard screenshots proving the analytics product. It feels trustworthy and corporate-modern rather than startup-flashy—heatmaps and session tools shown literally.

What should survive adaptation:

- **Light canvas + black text + `#0078d4` accent**
- Product screenshot proof as hero content
- Soft elevation on key cards/buttons
- Moderate density, generous section padding

## Foundations

### Color

Measured roles:

| Role | Hex |
|------|-----|
| accent | `#0078d4` |
| text_primary | `#000000` |
| text_secondary | `#3b3a39` |

Visual surfaces: white page, light gray (`#f3f2f1`-like) bands, subtle neutral borders. Keep blue for links/primary buttons only.

### Typography

Sans (family not declared; reads as Segoe UI / system Fluent):

- Display ~**48–52px**, weight 600, lh ~54–73px
- Section ~**28px**, 600
- Body ~**16–18px**, 400–600, lh ~21–25px

Clear stepped hierarchy; medium/semibold heads.

### Spacing and layout

- Section padding **80px** common; some bands **96px**
- Horizontal pad **54–96px** on wide layouts; **24px** in tighter stacks
- Stack gaps **4 / 12 / 16 / 32 / 40px**
- Marketing single column with occasional multi-card feature rows

## Visual language

- Small control radius ~**4px**; occasional larger pill (~47px) for specific chips/buttons
- Shadows: layered Fluent-like elevation (`0 0.6 1.8` + `0 3.2 7.2`, and `0 2 8`)
- 1px borders on cards and inputs
- Imagery = product UI (heatmaps, recordings, dashboards)

## Components and states

1. **Top marketing nav** — product links + sign-in/get started
2. **Primary blue button** — filled `#0078d4`
3. **Hero with product shot** — headline, supporting copy, CTA, dashboard visual
4. **Feature rows** — icon/title/body or screenshot pairings
5. **Footer** — Microsoft institutional pattern

Default states only.

## Responsive behavior

Widths ~**1168–1709px** on home. Padding and columns compress; no mobile captures. Mid-width still keeps desktop nav patterns.

## Practical guidance

**Preserve**

- Fluent blue accent + black/gray text
- Screenshot-led proof
- Soft elevation, not neon glow
- Semibold display steps

**Avoid**

- Non-Microsoft purple/pink AI gradients
- Overly playful illustration replacing product UI
- Harsh pure shadows or brutalist zero-radius everywhere
- Dark-only theme as the marketing default

## Scope note

Five home captures at multiple desktop widths. Color roles, shadows, spacing strong; font family names not declared. App-authenticated Clarity dashboards beyond marketing screenshots not fully captured as separate product shell.

## Captured pages

[![Home hero — wide](https://pin.fontofweb.com/6780?format=jpg)](https://design.withfudge.com/share/pin-6780)

[Home hero — wide](https://design.withfudge.com/share/pin-6780)

[![Home — mid width 1168](https://pin.fontofweb.com/6781?format=jpg)](https://design.withfudge.com/share/pin-6781)

[Home — mid width 1168](https://design.withfudge.com/share/pin-6781)

[![Home — 1465 features](https://pin.fontofweb.com/6782?format=jpg)](https://design.withfudge.com/share/pin-6782)

[Home — 1465 features](https://design.withfudge.com/share/pin-6782)

[![Home — continued](https://pin.fontofweb.com/6783?format=jpg)](https://design.withfudge.com/share/pin-6783)

[Home — continued](https://design.withfudge.com/share/pin-6783)

[![Home — color roles](https://pin.fontofweb.com/6784?format=jpg)](https://design.withfudge.com/share/pin-6784)

[Home — color roles](https://design.withfudge.com/share/pin-6784)

## Colors

- `#ffffff`
- `#000000`
- `#3b3a39`
- `#0078d4`
- `#f3f2f1`
- `#e1dfdd`
