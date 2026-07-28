# How crowprose.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/crowprose.com-design)

Last updated: 2026-07-28

## Design character

Crowprose is a **quiet long-form writing site**—almost anti-chrome. Black text on pure white, a single centered column, a plain wordmark header, and essay titles that sit like book chapter heads with a hard rule beneath. Personality comes from the prose, not from UI decoration.

What should survive adaptation:

- **Single-column reading measure** with huge side margins on wide screens.
- **Minimal header**: small bold wordmark left, almost nothing else.
- **Essay title + thick horizontal rule** as the only structural flourish.
- Body copy that feels editorial (comfortable 16px / 24px rhythm).
- Zero cards, gradients, or marketing CTAs in the reading path.

## Foundations

### Color

No structured palette rows were retained. Visually:

- **Canvas**: pure white.
- **Text**: pure black for titles and body.
- **Rules / hairlines**: black horizontal rules under titles; lighter rules between essay sections.
- No accent color is required for the reading system.

### Typography

Declared families not retained. Measured:

- **Post title**: ~**36px** / ~39.6px line-height, weight 400, strong and slightly tight.
- **Body**: **16px / 24px** weight 400 (dominant).
- **Supporting**: 14–20px at 400 for list/index contexts; blog index may use 18–20px titles.
- Single-weight calm sans (or system-like) reading face—no display circus.

### Spacing and layout

- Wide desktop (~2048px captures): content column centered with **~428–628px** side margins—measure stays narrow for reading.
- Vertical padding on the column ~**32px**; horizontal pad ~**24px**.
- Article body stacks paragraphs with comfortable gaps; section break via thin rule + spacing rather than cards.
- Blog index lists titles in the same centered column language.

## Visual language

- **No radii, shadows, or borders** retained as a system—surfaces are flat page white.
- Decoration limited to **horizontal rules**.
- No photography required in the captured essay views.
- Motion: none established.

## Components and states

### Site header
Left-aligned bold wordmark (“Crowprose”); empty right side in captures.

### Essay header
Large title, full-width thick rule under the title block, then body.

### Body paragraphs
Flush-left, generous line length control via outer margins, standard paragraph spacing.

### Blog index
Same chrome; list of writing entries as text links/titles without card wrappers.

## Responsive behavior

Only wide ~2048×1194 captures returned. Side margins will necessarily shrink on smaller viewports; exact mobile type sizes are not in this set—keep the single column and rules when adapting down.

## Practical guidance

**Preserve**

1. White page, black type, no accent dependency.
2. Centered narrow measure with large outer margins on desktop.
3. Title + heavy rule motif.
4. Header reduced to a wordmark.
5. Editorial calm—let sentences carry hierarchy.

**Avoid**

1. Card grids, hero illustrations, or SaaS marketing patterns.
2. Colored backgrounds or brand gradients.
3. Multi-column article chrome or sticky share bars (not part of this system).
4. Claiming a specific font licence from this guide.

**Adaptation recipe**

- Wordmark → title → rule → 16/24 body in one column. Stop adding UI.

## Scope note

Studied from two captures: blog index (`/blog/`) and essay (`/blog/competence-as-tragedy/`) at wide desktop. Supported: reading measure, header minimalism, title rule, type sizes. Not established: mobile, color roles, font family, interactive states.

## Captured pages

[![Blog index](https://pin.fontofweb.com/6283?format=jpg)](https://design.withfudge.com/share/pin-6283)

[Blog index](https://design.withfudge.com/share/pin-6283)

[![Essay — Competence as Tragedy](https://pin.fontofweb.com/6282?format=jpg)](https://design.withfudge.com/share/pin-6282)

[Essay — Competence as Tragedy](https://design.withfudge.com/share/pin-6282)
