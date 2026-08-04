# How browserbase.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/browserbase.com-design)

Last updated: 2026-08-04

## Captured pages

[![Wide home page with the orange hero action and the red cube footer block](https://pin.fontofweb.com/7913?format=jpg)](https://design.withfudge.com/share/pin-7913)

[Wide home page with the orange hero action and the red cube footer block](https://design.withfudge.com/share/pin-7913)

[![How-it-works spread with a white grid field and floating browser cubes](https://pin.fontofweb.com/7914?format=jpg)](https://design.withfudge.com/share/pin-7914)

[How-it-works spread with a white grid field and floating browser cubes](https://design.withfudge.com/share/pin-7914)

[![Pricing plan cards with black textured headers and sharp outlined boxes](https://pin.fontofweb.com/7917?format=jpg)](https://design.withfudge.com/share/pin-7917)

[Pricing plan cards with black textured headers and sharp outlined boxes](https://design.withfudge.com/share/pin-7917)

[![FAQ panel with a pale green open answer and stacked accordion rows](https://pin.fontofweb.com/7919?format=jpg)](https://design.withfudge.com/share/pin-7919)

[FAQ panel with a pale green open answer and stacked accordion rows](https://design.withfudge.com/share/pin-7919)

[![Compact pricing table with thin rules and a centered plan comparison rail](https://pin.fontofweb.com/7920?format=jpg)](https://design.withfudge.com/share/pin-7920)

[Compact pricing table with thin rules and a centered plan comparison rail](https://design.withfudge.com/share/pin-7920)

## Overview

Browserbase uses a severe, technical visual language that feels closer to an infrastructure diagram than a polished consumer brand. The pages are built from a white canvas, thin gray rules, big black headings, and a few concentrated accent colors. The orange-red call to action is the clearest brand signal, while the pink, gold, green, and violet cube graphics provide controlled variation without turning the page playful. Most layouts depend on space, alignment, and scale rather than ornament.

The home and pricing surfaces share the same tone. Large claims sit in wide empty fields, then the page drops into dense comparisons, accordion stacks, or diagram-like modules with rectangular borders. The result is serious and direct: Browserbase presents browser infrastructure as something engineered, not embellished.

## Colors

Browserbase relies on a narrow UI palette and then uses brighter cube colors as supporting accents. The light mode is mostly white and soft paper gray. Dark mode appears in the footer, the black plan headers, and deep shadow shapes under the cubes. Accent colors should stay concentrated in buttons, illustration blocks, and small status or tab treatments; they should not bleed into body copy or long background fields.

| token | hex | use |
|---|---|---|
| ink | #000000 | Main text, strong rules, and the heaviest header and footer surfaces |
| ink-strong | #100D0D | Near-black support tone for dense UI edges and textured dark fills |
| surface-night | #191B2E | Deep header and footer contrast, especially where white text sits on dark fields |
| shadow-deep | #480512 | Dark shadow stripe under cubes and other hard-edged illustration depth |
| ink-muted | #4A4848 | Secondary text and subdued rules that still need a dark reading voice |
| ink-soft | #514F4F | Quiet body text and lighter dark edges on technical modules |
| accent-lime | #90C94D | Lime cube faces, the open FAQ tint, and rare positive accent moments |
| ink-subtle | #969493 | Small helper text, captions, and muted labels that sit below headline weight |
| accent-violet | #9C70F0 | Violet cube faces and selected product tiles that need a cool accent |
| accent-violet-bright | #A46EF8 | Brighter violet variant for cube faces and tab-like decorative pieces |
| border | #CDCDCD | Grid lines, table rules, module separators, and quiet framing strokes |
| accent-red-deep | #D23003 | Deeper orange-red for brand depth, shadowed CTA edges, and footer massing |
| panel-lavender | #E3D2FF | Pale lavender panel and illustration backing where the page needs lift |
| panel-mint | #E6FFE8 | Soft mint open states, especially the expanded FAQ block |
| accent-rose | #EC679B | Pink cube faces and small brand moments in the illustration system |
| action | #F03603 | Primary filled buttons, the main sign-up signal, and the strongest brand accent |
| accent-gold | #F4BA41 | Gold cube faces and bright construction details in the visual system |
| surface-paper | #F5F5F5 | Light section wash behind diagrams, cards, and comparison areas |
| panel-cream | #FFF8E6 | Warm pale panel tint for gentle contrast without losing the white base |
| canvas | #FFFFFF | Main page canvas, table fields, and the baseline surface for nearly every section |

## Typography

The system is almost entirely set in **Pp Neue Montreal**, with **Pp Supply Sans** appearing in a few utility-style treatments and **Applesystem** present as a system fallback for small control text. Pp Neue Montreal carries the big page statements, section titles, rows, and supporting copy; its regular and medium weights do most of the work. Pp Supply Sans gives the small label and footer links a slightly different utility flavor. Licensing is not supplied here; confirm reuse rights for the Pangram Pangram families before shipping.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Pp Neue Montreal | 5.625rem | 400 | 1.1 | 0em | Largest hero statements like the home page question and the pricing-page opener |
| section-display | Pp Neue Montreal | 4.432rem | 400 | 1.05 | 0em | Broad section headlines such as the diagram and FAQ anchors |
| page-title | Pp Neue Montreal | 4rem | 400 | 1.05 | 0em | Large centered page headings and short introduction blocks |
| pricing-title | Pp Neue Montreal | 3.625rem | 400 | 1.05 | 0em | Pricing-plan headings and other strong mid-page statements |
| card-title | Pp Neue Montreal | 2.5rem | 400 | 1.1 | 0em | Card tops, plan titles, and the widest secondary headlines |
| body-strong | Pp Neue Montreal | 1.25rem | 500 | 1.45 | 0em | Lead copy, row labels, and emphasized explanatory text |
| body | Pp Neue Montreal | 1rem | 400 | 1.5 | 0em | Standard paragraph copy in tables, FAQs, and supporting notes |
| body-small | Pp Neue Montreal | 0.94rem | 400 | 1.45 | 0em | Dense helper text, small captions, and secondary plan detail |
| ui-label | Pp Neue Montreal | 0.875rem | 500 | 1.3 | 0.01em | Navigation, action labels, chip text, and compact controls |
| utility | Pp Supply Sans | 0.875rem | 400 | 1.2 | 0em | Footer links, utility-style calls to action, and small metadata |
| system-fallback | Applesystem | 0.875rem | 500 | 1.2 | 0em | Native-feeling fallback labels where the site leans on the OS stack |

The hierarchy is blunt rather than decorative. Headings depend on scale and calm leading, not on a mix of families. Body text stays readable through size and generous spacing, while labels stay compact and slightly heavier. The page never needs tight tracking tricks; its authority comes from size contrast and the certainty of its alignment.

## Layout

The layout is built on large open fields with a narrow central content spine. Pages often start with a huge amount of white space, then place one headline in a centered or left-anchored column. A faint technical grid runs through several sections, giving the page a blueprint feeling without adding visual clutter. The left and right edges stay quiet so the content can breathe.

The spacing system is dominated by 32px and 44px edge padding, with much larger chapter breaks in the 100px to 178px range. Dense modules move inward to 24px and 16px internal spacing, while the tables and accordions use 1px rules to preserve the schematic feel. Long comparison sections keep strong side margins so the content reads like a board or specification sheet rather than a full-width marketing wall.

The home page and pricing page both lean on that same rhythm. The home hero has a giant headline, a sparse top bar, and a lot of empty field around the message. Later sections shift to centered cards, tabbed diagrams, and comparison boards that still keep the same clear margins. The pricing page pushes this further: the plan matrix fills the width, but every column stays boxed, evenly ruled, and aligned to a strict grid. The FAQ page uses a two-column layout, with a large title sitting alone on the left and the accordion stack filling the right side. That left column acts like a spacer and a signpost at the same time.

The footer changes tone without changing the geometry. It becomes a saturated red-orange block with white links, a giant Browserbase wordmark, and a cubic brand mark on the right. The layout is still rectangular and rigid, but the color shift gives the closing section a louder ending.

## Visual language

Browserbase looks like browser infrastructure translated into a physical model. The white canvas reads like graph paper or a clean desk. The cubes add the most color, but they stay angular and mechanical: pink, gold, lime, violet, and black faces create a constructed, almost industrial object rather than a toy. Their shadows are hard and offset, which makes them feel placed on a table under a directional light.

Textural contrast comes from the black stitched or woven plan headers, the faint page grid, and the hard 1px or 2px rules around the tables. Those textures stop the design from feeling sterile, but they do not soften it. The page keeps its authority through hard edges, clipped geometry, and flat white space.

The orange-red action color is the only loud UI color that repeats as a true control. The other saturated colors are mostly illustrative or sectional. That split matters: orange-red is for intent, while the rest of the palette is for structure, product proof, and visual variety. If that separation weakens, the system starts to feel like a generic multi-color SaaS site instead of a precise infrastructure brand.

## Components

### Top navigation

- **Anatomy:** Left logo, centered product links, and right-aligned account actions.
- **Surface:** White bar with a thin bottom rule.
- **Typography:** 14px to 16px labels in Pp Neue Montreal, usually medium weight for the active links and regular or medium for the utility items.
- **Shape:** The sign-up and demo actions are hard rectangles with 2px borders or solid fill; corners stay close to square.
- **Spacing:** The bar keeps generous horizontal breathing room and small internal gaps so the nav never crowds the headline.
- **Visible states:** The filled orange-red button is the most energetic control, while the outlined button stays calm and direct.

### Hero statement and grid field

- **Anatomy:** One oversized headline, a short supporting line, and a large empty field broken by a faint grid.
- **Surface:** White canvas with a very light technical grid.
- **Typography:** Large black Pp Neue Montreal statements, often around 56px to 90px depending on the page and section.
- **Shape:** No card shell; the page uses open space instead of framing.
- **Spacing:** The hero is held away from the edges with large gutters and deep vertical breathing room.
- **Composition:** The message stays clear and centered or left-anchored while cubes, tabs, or plan cards fill the lower half.

### Browser and workflow diagram module

- **Anatomy:** A tab row, a large white content board, an illustration on one side, and a text or bullet stack on the other.
- **Surface:** White board with black or light tab headers; the active tab can use a dark textured fill.
- **Typography:** 20px to 16px within the board, with smaller 14px labels in the tabs and supporting notes.
- **Shape:** Straight edges, 1px borders, and a square presentation that feels like a technical panel.
- **Composition:** The illustration is set wide and low; the text block gets the more legible half of the module.
- **Visible states:** Active tabs darken; inactive tabs remain light and boxed.

### Pricing comparison area

- **Anatomy:** Large pricing heading, short subtitle, then either a row of plan cards or a table with a title column and plan columns.
- **Surface:** Mostly white, with a dark textured header band used for plan names in the table version.
- **Typography:** 64px-ish section titles, 20px plan names, 18px to 14px detail lines, and compact button labels.
- **Shape:** Cards and table cells stay square or nearly square; buttons are boxed rather than pill-shaped.
- **Spacing:** Strong vertical separation above the grid, then tight and even row spacing inside the matrix.
- **Visible states:** One plan can be marked as most popular with a small tag; the comparison cells remain visually equal even when the content differs.

### FAQ accordion

- **Anatomy:** A giant standalone title on the left, an accordion stack on the right, and a small square toggle for each row.
- **Surface:** White rows with one expanded mint-green answer panel.
- **Typography:** Large section title on the left, then 20px questions and 16px body text inside the open row.
- **Shape:** The toggle is a sharp square, and the rows keep 1px dividers rather than soft cards.
- **Spacing:** Questions sit with comfortable vertical separation so the stack reads like a list, not a dense FAQ dump.
- **Visible states:** Open rows switch to the mint panel and show a minus symbol; closed rows stay white and show a plus symbol.

### Footer and closing brand block

- **Anatomy:** Link columns, utility links, a giant Browserbase wordmark, and a large cubic mark at the right.
- **Surface:** Saturated orange-red field with white text and a dark shadowed illustration.
- **Typography:** Small white link text and a huge wordmark that acts like a closing banner.
- **Shape:** Hard rectangles and rigid columns; the entire block keeps the same boxy logic as the rest of the site.
- **Composition:** Links sit to the left and center while the cube mark occupies the right side as a strong visual anchor.
- **Visible states:** The links stay minimal and direct; no ornamental hover language is part of the visible system.

## Responsive behavior

The desktop system should collapse by preserving hierarchy, not by shrinking everything evenly. The strongest headings should remain large enough to read at a glance, even when the layout compresses. The grid field, comparison table, and FAQ stack can move from side-by-side compositions to vertical stacks, but their borders and spacing rhythm should stay intact.

When space tightens, the navigation can compress before the main headline does. The pricing comparison can become a scannable vertical list or a horizontally scrollable board, but the active header styling, boxed cells, and clear row rules should remain visible. The accordion should keep the square toggle and the mint open state because those signals are doing important work.

The illustration system also needs restraint on small screens. The cubes and shadow shapes can scale down or reposition, but they should keep their sharp geometry and saturated colors. The goal is not to make the brand softer; it is to keep the same precision in a smaller frame.

## Practical implementation guidance

### Preserve

- Preserve the white-canvas-first rhythm, then add dark or saturated bands only where the content needs a reset.
- Preserve the 1px and 2px structure. Those rules are part of the brand, not just decoration.
- Preserve the strong contrast between the orange-red action and the black text system.
- Preserve the near-square control geometry and the rigid table/grid logic.
- Preserve the cube palette as a controlled accent family, not as general UI color.

### Avoid

- Avoid rounded consumer cards, soft shadows, or blurred glows.
- Avoid spreading accent colors into paragraphs, long labels, or table copy.
- Avoid heavy ornamental gradients; the page gets its texture from structure and illustration, not from color wash.
- Avoid tiny type clusters that fight the large headlines.
- Avoid mixing too many different border styles; one consistent rule language is enough.

### Recommended build order

1. Establish the navigation, logo lockup, and the two button styles.
2. Build the main hero statement and the white grid field.
3. Recreate the diagram-style content module with tabs and a large white board.
4. Build the pricing comparison system, including the dark textured header band and the boxed CTA buttons.
5. Add the FAQ accordion with the mint open state and the square toggle.
6. Finish with the red-orange footer and the large cube mark.

### Accessibility

- Keep text on white, mint, black, and orange-red surfaces at strong contrast.
- Do not rely on color alone to mark active tabs or open FAQ rows; the minus and plus controls carry meaning too.
- Keep focus rings visible on the outlined and filled buttons, because the controls are small and geometric.
- Preserve readable line lengths in the large hero headlines and pricing descriptions when the layout narrows.
- Make the link text explicit enough that the table, nav, and footer still work as a scanable information system.

## Scope note

This guide covers the desktop home, pricing, and FAQ surfaces shown in the supplied images. It does not define mobile breakpoints, motion, loading states, or exact interactive behavior beyond the visible open and closed accordion states.
