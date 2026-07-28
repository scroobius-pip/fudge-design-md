# How app.paper.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.paper.design-design)

Last updated: 2026-07-28

## Design character

Paper’s app home is a **bright, disciplined file OS** for design work. It feels closer to a modern creative Finder than to a SaaS marketing dashboard: white stage, hairline structure, compact type, and almost no ornamental color. The UI is deliberately small and calm so documents—not chrome—become the product.

What should survive adaptation:

- **White-first surfaces** with gray structural lines instead of heavy fills
- **Compact 12–13px UI type** as the default, not 16px marketing body
- **List + rail** information architecture (library / files / metadata)
- **Restrained blue** only for true interactive accents

## Foundations

### Color

Visual system (screenshot-backed; structured palette rows were empty):

- Canvas: `#ffffff`
- Subtle wells / sidebar shading: ~`#f5f5f5`
- Dividers and row rules: ~`#eaeaea`
- Primary ink: near-black ~`#111111`
- Secondary meta: mid gray ~`#6b6b6b`
- Interactive accent: clear blue ~`#2f6df6` (links, selection, primary text buttons)

No loud brand gradients appear in the file shell.

### Typography

Measured styles cluster tightly:

- Default UI: **12px / 16px**, weight 400 (overwhelmingly dominant)
- Emphasized row titles / controls: **13px**, weight 500
- Occasional **18px** medium for page-level headings

Tracking is mostly neutral. The design depends on **small type + ample whitespace**, not on display fonts.

### Spacing and layout

Strong observed rhythm:

- Large vertical canvas padding (**64px** top / **128px** bottom appears in measurements—very airy stage)
- Control padding **12px** and **32px** horizontal page insets
- Tight **2–8px** gaps inside lists

Structure:

- **Left library rail** (files, shared, trash-style IA)
- **Main list** of folders/files with icon + name + lightweight meta
- Top bar with search/new actions kept visually light

## Visual language

- Radii stay **small (4–6px)**—slightly rounded rects, never bubbly pills as the default container
- Borders do more work than shadows (shadow observations were essentially absent)
- Icons are simple monochrome strokes
- Density can increase without changing type size; empty and full states share the same chrome

## Components and states

1. **Library rail** — quiet text/icon items, selected row via light fill or stronger ink
2. **Folder/file rows** — leading icon, name, trailing meta; hover/selection should stay subtle
3. **New file / primary text actions** — blue accent, not giant filled banners
4. **Empty vs populated lists** — same grid, more rows; no theatrical empty illustration required
5. **Top bar** — minimal title + search + avatar/utility icons

## Responsive behavior

Both captures are the same wide desktop width. Paper’s file UI is built as a **stable desktop split view**. Mobile patterns are out of scope for this guide.

## Practical guidance

**Preserve**

- White canvas, gray rules, tiny type
- 4–6px radius discipline
- Blue only for interactive emphasis
- Airy page padding even when lists grow

**Avoid**

- Dashboard cards with large shadows
- Oversized 24px+ UI labels in the shell
- Dark mode unless deliberately designed as a second theme
- Colorful file-type confetti that breaks the monochrome OS feel

## Scope note

Two captures of the Files home at desktop width. No declared font families or rich color-role table shipped with the captures; guidance relies on measured type/spacing plus visual inspection. Editor canvas pages beyond the file list were not in this set.

## Captured pages

[![Files home — folders + new file](https://pin.fontofweb.com/8569?format=jpg)](https://design.withfudge.com/share/pin-8569)

[Files home — folders + new file](https://design.withfudge.com/share/pin-8569)

[![Files home — dense file list state](https://pin.fontofweb.com/8568?format=jpg)](https://design.withfudge.com/share/pin-8568)

[Files home — dense file list state](https://design.withfudge.com/share/pin-8568)

## Colors

- `#ffffff`
- `#f5f5f5`
- `#eaeaea`
- `#111111`
- `#6b6b6b`
- `#2f6df6`
