# How chainlift.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/chainlift.io-design)

Last updated: 2026-07-28

## Design character

LiftKit’s page sells a **UI framework for perfectionists**: confident display type, meticulously spaced sections, and component-looking cards that preview the product’s own discipline. It feels halfway between a design-system docs site and a modern SaaS launch—technical, crisp, and slightly opinionated about craft.

What should survive adaptation:

- **Large, decisive display type** as the first impression
- **Predictable vertical rhythm** (section stacks with repeating margin steps)
- Soft **~15px card radii** and hairline edges
- A craft-first tone: fewer gimmicks, more specimen-like UI blocks

## Foundations

### Color

Machine color roles were sparse; visual reading of the LiftKit captures:

- Dark marketing moments and text near charcoal/black
- Light content surfaces and cards on off-white/white
- Neutral borders (~light gray) separating specimens
- Accent appears as a cool brand highlight in UI samples (indigo-leaning in product chrome)—keep accents sparse

Treat neutrals as the system; accent is for interactive/specimen emphasis only.

### Typography

Measured hierarchy (families not declared):

| Step | Size | Weight | Line-height |
|------|------|--------|-------------|
| Display | ~72px | 700 | ~92px |
| Section | ~35px | 600 | ~45px |
| Subhead | ~28px | 600 | ~35px |
| Lead | ~22–26px | 400–500 | ~20–26px |
| Body | ~15–17px | 400–600 | ~19–28px |
| Small | ~13px | 400 | ~17px |

Strong weight contrast (400/500/600/700) defines hierarchy as much as size.

### Spacing and layout

- Section margins stack around **25px / 45px / 57px** steps
- Card padding ~**15–22px**; larger section pads approach **72px**
- Content is a long single-column marketing scroll with embedded component previews
- Button-like controls pad ~**11×22px**

## Visual language

- **Radii ~15px** dominate cards/controls (a huge outlier radius in data is noise—ignore)
- Soft edge: ~**1px blur shadow** at 0 offset appears as a hairline glow/edge rather than dramatic elevation
- 1px solid borders on specimen frames
- Imagery is UI itself—buttons, type samples, layout demos—not lifestyle photos

## Components and states

1. **Hero** — oversized title, short value prop, primary/secondary actions
2. **Specimen cards** — rounded containers showcasing components or tokens
3. **Feature rows** — title + explanation + optional preview
4. **Code/UI embeds** — framed examples inside the marketing flow

Only default states captured.

## Responsive behavior

Three desktop widths (~1387–1675px) of the same `/liftkit` path. Layout remains a centered marketing column; no mobile evidence.

## Practical guidance

**Preserve**

- Big type + disciplined spacing scale
- ~15px radius language
- Specimen-led storytelling
- Neutral canvas with restrained accent

**Avoid**

- Chaotic multi-accent marketing
- Tiny timid headlines
- Heavy skeuomorphic shadows
- Treating every block as a different visual style

## Scope note

Three captures, all `/liftkit`. Strong spacing/type/radius signal; limited multi-page IA and no declared font families. Home/marketing beyond LiftKit not in set.

## Captured pages

[![LiftKit hero](https://pin.fontofweb.com/6345?format=jpg)](https://design.withfudge.com/share/pin-6345)

[LiftKit hero](https://design.withfudge.com/share/pin-6345)

[![LiftKit mid sections](https://pin.fontofweb.com/6346?format=jpg)](https://design.withfudge.com/share/pin-6346)

[LiftKit mid sections](https://design.withfudge.com/share/pin-6346)

[![LiftKit cards ~15px radius](https://pin.fontofweb.com/6347?format=jpg)](https://design.withfudge.com/share/pin-6347)

[LiftKit cards ~15px radius](https://design.withfudge.com/share/pin-6347)

## Colors

- `#0b0b0f`
- `#ffffff`
- `#111827`
- `#e5e7eb`
- `#6366f1`
- `#f8fafc`
