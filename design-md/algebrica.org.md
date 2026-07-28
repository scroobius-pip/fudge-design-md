# How algebrica.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/algebrica.org-design)

Last updated: 2026-07-28

## Design character

Algebrica reads like a **quiet mathematical library on the web**: white paper canvas, black ink, and just enough structure to keep theorems findable. The brand voice is scholarly rather than startup-bright. The home page opens with a large display headline (“A Mathematical Knowledge Base”), short gray supporting copy, and two solid black pill buttons—then settles into a grid of soft topic cards (Algebra, Calculus, and peers). Article pages shift into a **textbook layout**: sticky table of contents, long reading column, and theorem/definition blocks nested in light gray rounded panels.

What should survive adaptation:
- Paper-white field with near-black type and restrained gray secondary text
- Library navigation that stays thin and textual
- Carded topic hubs and clearly framed statement blocks for formal math
- Blue hyperlinks as the main chromatic signal in body content

## Foundations

### Color

Measured swatches seen across pages: `#0000ee`, `#000000`, `#666666`, `#999999`, `#777777`. Visually the system is monochrome-plus-link-blue: pure white page, black wordmark and primary CTAs, medium grays for meta copy, and classic link blue on inline references. Topic cards sit on a very light cool gray so they separate from the canvas without casting drama. Avoid introducing saturated brand gradients; the authority comes from restraint.

### Typography

Observed text styles:
- **text**: unknown, weight 400, 16px
- **text**: unknown, weight 400, 15px, lh 22.5px
- **text**: unknown, weight 400, 15px, lh 21px
- **text**: unknown, weight 400, 15px, lh 22.5px
- **text**: unknown, weight 500, 15px
- **text**: unknown, weight 400, 14px
- **text**: unknown, weight 500, 24px, lh 33.6px
- **text**: unknown, weight 400, 14px, lh 18.2px
- **text**: unknown, weight 400, 14px, lh 14px
- **text**: unknown, weight 400, 13px
- **text**: unknown, weight 500, 16px
- **text**: unknown, weight 400, 13px, lh 18.2px

On screen, the hierarchy is clear even when family names are sparse: a **large transitional/serif-leaning display** for the home manifesto line; **bold sans or semi-serif section titles** in cards; comfortable body sizes for proofs and exposition; smaller muted labels for breadcrumbs and TOC. Math content needs generous line length control—articles keep a readable measure with the TOC beside, not over, the prose.

### Spacing and layout

Recurring spacing measurements include 5px, 6px, 10px, 14px, 20px, 25px, 30px, 40px. The home hero is vertically generous: headline, subcopy, CTA row, then a multi-column card grid with even gutters. Articles use a two-zone layout (nav rail + content) with theorem cards stacked in the main column. Prefer consistent vertical section rhythm over tight marketing packing.

## Visual language

Observed corner radii include 3px, 4px, 12px, 24px. Surfaces are mostly flat. Depth is created with **pale filled cards** and light separators rather than heavy shadows. Primary buttons are high-contrast black pills; secondary actions stay outline or text. The logo lockup is simple wordmark typography—no illustrative mascot competing with formulas.

## Components and states

- **Global header**: wordmark left, text nav (Mathematics, Physics, Computer Science, About), search affordance.
- **Hero**: manifesto headline, one-line value prop, dual CTAs (Explore / Random).
- **Topic cards**: title + short blurb on soft gray tiles; equal card heights in a responsive grid.
- **Article chrome**: breadcrumbs, H1, optional metadata, sticky contents list.
- **Statement blocks**: numbered or titled theorem/definition containers with internal paragraphs and formula lines.
- **Inline links**: bright default blue against black body text.

Do not invent hover motion from still frames; keep interaction language boring and readable.

## Responsive behavior

Captures include both wide (~2048px) and narrower (~1200px) home views. At narrower widths the topic grid drops columns and the hero type scales down while CTAs remain full-contrast pills. Article TOC is a strong candidate to collapse above the content on small viewports even when the wide capture shows it beside the column.

## Practical guidance

**Preserve**
- Academic calm: white paper, black ink, gray secondary, blue links
- Pill black CTAs and soft topic cards
- Theorem-in-a-card pattern for formal statements
- Thin textual IA over mega-menus

**Avoid**
- Neon accents, glassmorphism, or marketplace density
- Oversized marketing gradients behind formulas
- Crowding proofs with decorative sidebars
- Replacing serif/display contrast with a single UI sans everywhere

## Scope note

Studied 4 page captures on paths /, /cauchy-convergence-criterion-series/. Some structural families were incomplete on these pages. Home and a longform mathematics article were the primary references; productized app chrome is out of scope.

## Captured pages

[![Cauchy’s Convergence Criterion for Series | Algebrica](https://pin.fontofweb.com/8752?format=jpg)](https://design.withfudge.com/share/pin-8752)

[Cauchy’s Convergence Criterion for Series | Algebrica](https://design.withfudge.com/share/pin-8752)

[![Algebrica | A Mathematical Knowledge Base](https://pin.fontofweb.com/8751?format=jpg)](https://design.withfudge.com/share/pin-8751)

[Algebrica | A Mathematical Knowledge Base](https://design.withfudge.com/share/pin-8751)

[![Algebrica | A Mathematical Knowledge Base](https://pin.fontofweb.com/8750?format=jpg)](https://design.withfudge.com/share/pin-8750)

[Algebrica | A Mathematical Knowledge Base](https://design.withfudge.com/share/pin-8750)

[![Algebrica | A Mathematical Knowledge Base](https://pin.fontofweb.com/8749?format=jpg)](https://design.withfudge.com/share/pin-8749)

[Algebrica | A Mathematical Knowledge Base](https://design.withfudge.com/share/pin-8749)

## Colors

- `#0000ee`
- `#000000`
- `#666666`
- `#999999`
- `#777777`
