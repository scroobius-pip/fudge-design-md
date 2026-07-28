# How blog.google is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/blog.google-design)

Last updated: 2026-07-28

## Design character

The Keyword (blog.google) is Google’s product/technology news surface: clean white canvas, approachable editorial type, soft card radii (~16px), and gentle elevation. It feels more magazine than docs—story cards, clear sectioning, and restrained Material-adjacent softness without heavy purple branding in the captured frames.

What should survive adaptation:

- **Editorial clarity** on white
- **Soft cards** (16px radius, light multi-stop shadows)
- **Readable multi-size type** from ~14px UI to ~36px story titles
- **Airy padding** (~24–36px) inside content modules
- **Story-first layout** over product chrome

## Foundations

### Color

No structured role palette returned. Visually: white background, near-black text, Google’s familiar multi-color logo accents in chrome, soft gray surfaces for secondary regions. Do not invent a full Material color token set beyond what’s visible.

### Typography

- **Story titles**: ~36px / 44px weight 400
- **Body / deck**: ~18px weight 300, ~26px lh — lighter weight for approachability
- **Secondary**: 16px / 28px regular
- **Nav / UI**: 14px medium with tall line-height in places

The lighter 300 weight on 18px text is a distinctive “Google editorial” softness.

### Spacing and layout

- Module padding ~**36px** horizontal/bottom, **24px** top
- **16px** and **8px** margins between stacked items
- Negative horizontal margin (~−72px) appears in some full-bleed card breaks — cards can escape the text column slightly

### Radii and shadows

- Radius **16px** on key cards
- Shadows layered: `0 1px 3px` plus `0 4px 8px 3px` — soft Material-like elevation

## Visual language

- Friendly, rounded, light
- Photography and story art inside cards
- Minimal harsh lines; elevation > hard borders in the observed home frames

## Components and states

- Top marketing/editorial nav
- Featured story hero or large card
- Story card grids
- Category/label chips (visually quiet)
- Footer utilities (not deeply captured)

## Responsive behavior

Two home captures at **1307** and **1440** wide, relatively short heights (partial viewports). System is desktop editorial; on smaller widths, cards should reflow to a single column while keeping 16px radii and the soft type weights.

## Practical guidance

**Preserve**: white editorial canvas, 16px card radius, soft dual shadows, 36px titles, light 18/300 decks.

**Avoid**: dark mode default, sharp 2px industrial borders, startup neon CTAs, or dense dashboard widgets on the blog home.

## Scope note

Two homepage captures only. Color roles and full footer/article templates were not in set; foundations combine limited metrics with screenshot reading.

## Captured pages

[![The Keyword home — story cards](https://pin.fontofweb.com/7540?format=jpg)](https://design.withfudge.com/share/pin-7540)

[The Keyword home — story cards](https://design.withfudge.com/share/pin-7540)

[![The Keyword home — compact viewport](https://pin.fontofweb.com/4979?format=jpg)](https://design.withfudge.com/share/pin-4979)

[The Keyword home — compact viewport](https://design.withfudge.com/share/pin-4979)

## Colors

- `#ffffff`
- `#202124`
