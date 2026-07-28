# How claude.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/claude.ai-design)

Last updated: 2026-07-28

## Design character

Claude.ai’s captured surfaces split into two related moods that share geometry:

1. **Auth / product chrome** — warm off-white text on deep warm-black, soft large radii, restrained blue interactive accents  
2. **Artifacts / canvases** — light paper surfaces, near-black text, terracotta/wine accents, denser tool UI  

Overall: **warm, human, slightly literary**—never cold zinc-gray SaaS. Corners stay friendly; type stays calm.

What should survive adaptation:

- Warm neutrals (`#faf9f5` paper, ink browns/blacks) instead of pure #fff/#000 only
- Soft 8–32px radius scale (pills for chip controls)
- Accent discipline: terracotta/coral brand warmth *or* clear blue for linky actions—not both fighting
- Quiet elevation (`0 1 2` style)

## Foundations

### Color

Measured roles across captures:

| Role | Values seen |
|------|-------------|
| text_primary | `#faf9f5` (dark UI), `#111111` / `#0f0c08` (light UI) |
| text_secondary | `#c2c0b6` (dark), `#943040` used as secondary/accent in artifact |
| accent | `#2c84db` (login actions), `#943040` (artifact emphasis) |

Brand coral `#d97757` is part of the wider Claude family (stronger on claude.com) and may appear in marks.

### Typography

- Display on artifacts ~**56px**, very light weight (~290), lh ~67px — elegant, slightly bookish  
- Body ~**14–16px**, weights 360–460 common (not only 400/700 steps)  
- UI ~**14–18px**  
- Login uses comfortable 16px forms with rounded shells  

Families not declared; marketing Claude often pairs a serif display with sans UI—artifacts show refined sans/serif mix visually.

### Spacing and layout

- Compact tool padding **4–14px**; common **10–12px** control pads  
- Artifact canvases use **20px** region padding  
- Login centers a card/column on a warm dark field  
- Narrow login (~387px) still keeps large touch radii (**32px**, **9.6px** inputs)

## Visual language

- Radii ladder: **3–8px** tight tools, **16–28px** cards/inputs, **32px** large buttons, **999** chips  
- Shadows: subtle `y:1 blur:2–3`  
- 1px borders on inputs and panels  
- Limited palette, muted chroma (per taxonomy labels)

## Components and states

1. **Login card** — logo/wordmark, fields, primary button, legal links  
2. **Artifact shell** — tool rails, canvas, compact icon buttons  
3. **Chips/pills** — fully rounded filters or modes  
4. **Text-forward empty/populated canvas** states  

Editing/populated artifact states are present; hover not isolated.

## Responsive behavior

Strong: login at **~387px** and **~2048px**; artifacts at **~373–1712px**. Geometry scales by tightening padding and stacking, while radii stay generously touchable on small widths.

## Practical guidance

**Preserve**

- Warm paper/ink palette  
- Soft radii and light type on display  
- Sparse accents  
- Human, calm density  

**Avoid**

- Cold pure-gray ChatGPT clone styling as a stand-in  
- Neon multi-accent dashboards  
- Sharp dense enterprise tables as the default Claude feel  
- Over-bold geometric display type  

## Scope note

Eight captures: login (narrow/wide) and a design artifact project at multiple widths. Color roles, radii, shadows solid. Full main chat shell and projects home were not the focus of this set; claude.com covers broader marketing.

## Captured pages

[![Sign in — wide dark](https://pin.fontofweb.com/9549?format=jpg)](https://design.withfudge.com/share/pin-9549)

[Sign in — wide dark](https://design.withfudge.com/share/pin-9549)

[![Sign in — narrow](https://pin.fontofweb.com/9266?format=jpg)](https://design.withfudge.com/share/pin-9266)

[Sign in — narrow](https://design.withfudge.com/share/pin-9266)

[![Design artifact — light](https://pin.fontofweb.com/8938?format=jpg)](https://design.withfudge.com/share/pin-8938)

[Design artifact — light](https://design.withfudge.com/share/pin-8938)

[![Design artifact — narrow](https://pin.fontofweb.com/8937?format=jpg)](https://design.withfudge.com/share/pin-8937)

[Design artifact — narrow](https://design.withfudge.com/share/pin-8937)

[![Design artifact — editing](https://pin.fontofweb.com/8939?format=jpg)](https://design.withfudge.com/share/pin-8939)

[Design artifact — editing](https://design.withfudge.com/share/pin-8939)

[![Design artifact — pills](https://pin.fontofweb.com/8941?format=jpg)](https://design.withfudge.com/share/pin-8941)

[Design artifact — pills](https://design.withfudge.com/share/pin-8941)

## Colors

- `#faf9f5`
- `#0f0c08`
- `#111111`
- `#943040`
- `#2c84db`
- `#c2c0b6`
- `#d97757`
- `#87867f`
