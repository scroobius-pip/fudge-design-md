# How cap.so is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cap.so-design)

Last updated: 2026-08-08

## Captured pages

[![Centered plan comparison table with three pricing columns and a blue sign-up action](https://pin.fontofweb.com/6479?format=jpg)](https://design.withfudge.com/share/pin-6479)

[Centered plan comparison table with three pricing columns and a blue sign-up action](https://design.withfudge.com/share/pin-6479)

[![Editor-style feature stage with a gradient canvas, dark preview, and right-side controls](https://pin.fontofweb.com/6478?format=jpg)](https://design.withfudge.com/share/pin-6478)

[Editor-style feature stage with a gradient canvas, dark preview, and right-side controls](https://design.withfudge.com/share/pin-6478)

[![Tilted testimonial cards floating across a bright white field beneath the heading](https://pin.fontofweb.com/6477?format=jpg)](https://design.withfudge.com/share/pin-6477)

[Tilted testimonial cards floating across a bright white field beneath the heading](https://design.withfudge.com/share/pin-6477)

[![Large rounded feature grid with pale illustrations and concise benefit copy](https://pin.fontofweb.com/6476?format=jpg)](https://design.withfudge.com/share/pin-6476)

[Large rounded feature grid with pale illustrations and concise benefit copy](https://design.withfudge.com/share/pin-6476)

## Overview

Cap presents a clean screen-recording brand with a strict black-and-white base, a pale canvas, and one deep blue action color. The page feels quiet and organized rather than decorative. Its strongest pattern is the centered, airy composition: a compact top bar, a generous headline, and large card-based sections that sit in a wide field of whitespace. On the home page, a dark editor preview and a grid of feature tiles explain the product through large, simple shapes. On the pricing page, the system becomes even more structured, using a centered comparison table, three plan columns, and long rows of evenly spaced feature checks.

The visual tone is modern and restrained. Nothing is crowded, and nothing competes with the product screenshots. Rounded corners soften the layout, but the rounding stays modest on cards and becomes fully pill-shaped only on the main actions and navigation chips. The result is an interface that feels light, precise, and dependable.

## Colors

| token | value | role |
|---|---|---|
| `canvas` | `#FFFFFF` | Page backdrop, outer framing space, and the soft field around the white cards |
| `surface` | `#FFFFFF` | Cards, tables, panels, and the main reading surface |
| `ink` | `#000000` | Primary text, strong labels, and the black control used for the floating help button |
| `muted-ink` | `#71717A` | Supporting copy, plan subtitles, and secondary labels |
| `action` | `#1E40AF` | Active navigation, the main blue call to action, and selected accents |

Cap stays close to monochrome. White surfaces do most of the work, black type gives the system its firmness, and the muted gray prevents secondary copy from fighting the main message. The blue action color is the only saturated note in the system and it appears with discipline: active links, the sign-up style button, and small highlighted accents. That makes the interface feel deliberate instead of colorful. The pale canvas keeps the white cards legible, while the strong black and deep blue controls create a clear hierarchy for where the user should look and click first.

## Typography

Cap relies on **Neue Montreal** for the visible brand voice and uses **System** for compact UI labels and browser fallback. Verify licensing for these families before production use. The hierarchy is calm and straightforward: large headings are bold but not condensed, body copy stays open and readable, and small labels remain compact without becoming decorative. The page does not need a second display family because the layout already creates contrast through spacing, alignment, and card structure.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Neue Montreal | 3.75rem | 700 | 1 | -0.03em | Main page heading and the biggest promotional statements |
| `section-display` | Neue Montreal | 3rem | 700 | 1.05 | -0.025em | Section titles, especially the centered pricing heading |
| `card-title` | Neue Montreal | 1.125rem | 700 | 1.2 | -0.01em | Feature tile headings, plan names, and short card labels |
| `body` | Neue Montreal | 1rem | 400 | 1.5 | 0em | Supporting paragraphs, explanatory text, and row labels |
| `body-medium` | Neue Montreal | 1rem | 500 | 1.5 | 0em | Buttons, emphasized labels, and stronger body lines |
| `ui` | System | 0.875rem | 500 | 1.4 | 0em | Small navigation labels, compact controls, and tiny status text |

The type scale depends on only a few steps, which keeps the page disciplined. Large headings stop at 60px, the most important section titles sit at 48px, and the rest of the interface settles into 18px, 16px, and 14px utilities. That separation is enough to carry the whole system because the layout is already spacious. Strong weight contrast matters more than dramatic tracking tricks. The bold titles feel direct, the body text feels readable, and the small UI labels stay crisp without turning into display copy.

## Layout

Cap uses a centered layout with generous outer margins and very little lateral noise. The pricing page is the clearest example: a slim top navigation sits above a centered headline, then a large white comparison table fills the middle of the screen. The content is framed by wide left and right gutters, so the table feels like a focal object rather than a full-bleed block. The home page applies the same discipline in a more visual way. A large editor showcase sits inside a soft field, followed by a grid of white tiles that explain benefits in short, scannable pieces.

Spacing is the main structuring force. Small internal gaps keep the nav, buttons, and table cells tight. Medium gaps separate text from images and titles from descriptions. Large section gaps create the calm distance between the editor stage, the feature grid, and the testimonials. The layout does not rely on ornate separators or heavy shadows. It uses whitespace, alignment, and card edges to tell the user where one idea ends and the next begins.

The page rhythm is chapter-like. A large top statement leads into a proof-heavy section, then into a comparison table, then into a collage of testimonials or feature tiles. Each chapter is self-contained, but they share the same visual grammar: centered composition, clear headings, and rounded white panels on a pale ground.

## Visual language

Cap’s visual language is built from a few repeating moves. First, there is the monochrome base: white cards on a pale canvas, black text, and gray support copy. Second, there is the blue action color, which appears only where the page wants a decision. Third, there are rounded surfaces that stay soft but not bubbly. A 12px card corner is enough for most blocks, while the main controls become full pills. That keeps the interface friendly without turning it playful.

The product imagery is presented with restraint. The editor showcase uses a large gradient stage and a dark central workspace, but it still feels organized because the controls sit in a clean right-hand column. The testimonial section pushes farther into motion and depth by tilting the quote cards and letting them overlap slightly. Even there, the shadows stay light and the palette stays simple. The feature grid uses pale illustrations and short titles, so the product is explained by shape and contrast instead of by ornamental color.

This system works because every area has one clear job. The nav points to destinations. The showcase proves the product. The pricing table clarifies the decision. The testimonial collage adds social proof. The feature grid turns benefits into concise cards. Nothing is visually overloaded, so the strong parts remain easy to scan.

## Components

### Top navigation

- **Anatomy:** Centered pill-shaped container, brand mark, short text links, a GitHub-style utility chip, and two account actions.
- **Surface:** White with a subtle boundary against the pale canvas.
- **Typography:** `ui` for the compact links and utility labels.
- **Shape:** Mostly pill geometry, with small internal spacing and soft edges.
- **Visible states:** One link is blue to show the current section; the primary account action is darker and more prominent than the secondary one.

### Primary action

- **Anatomy:** Single-line label in a fully rounded pill.
- **Surface and text color:** Deep blue fill with white text for the main action; the floating help button uses a black fill with white text or icon.
- **Typography:** `body-medium`.
- **Shape:** Full pill corners; the action reads as a solid chip rather than a square button.
- **Spacing:** Compact horizontal padding with enough height to feel clickable.
- **Visible states:** The filled blue version carries the main decision; the black floating version stays parked at the lower-right edge of the page.

### Pricing comparison table

- **Anatomy:** Three plan columns, a centered heading, call-to-action buttons, and long feature rows with status marks.
- **Surface:** White card against the pale canvas, with thin row separators.
- **Typography:** Plan names and row labels stay in `body` or `card-title`; prices are larger and bolder than the supporting copy.
- **Shape:** The table itself is rectangular, but the buttons inside it keep the pill treatment.
- **Spacing:** Wide cell padding, generous row height, and broad outer margins.
- **Visible states:** The active plan column uses the blue action button, while the other plans rely on black or neutral buttons.

### Feature grid cards

- **Anatomy:** Small icon, bold label, and short explanatory line.
- **Surface:** White cards with light borders or very soft separation from the canvas.
- **Typography:** `card-title` for the heading and `body` for the explanation.
- **Shape:** Rounded card corners, not fully circular containers.
- **Spacing:** Tight icon-to-text spacing and moderate gaps between cards.
- **Composition:** The grid keeps each benefit self-contained so the product can be skimmed quickly.

### Editor showcase

- **Anatomy:** Large preview field, dark central workspace, small toolbar area, and a stacked control panel on the right.
- **Surface:** A cool gradient stage behind the dark preview, with white chrome around the outside.
- **Typography:** Small labels and control text stay compact; the main descriptive line should use `body-medium` or `card-title`.
- **Shape:** Large rounded container with softer internal geometry.
- **Spacing:** Broad interior padding and a strong split between preview and settings.
- **Visible states:** Color swatches, sliders, and buttons appear as immediate affordances for customizing the recording look.

### Testimonial collage

- **Anatomy:** Several overlapping quote cards with avatars, names, and short remarks.
- **Surface:** White cards on the pale field, each lifted with a faint shadow.
- **Typography:** Names use a stronger weight; quotes use regular body text.
- **Shape:** Slightly rounded rectangles with subtle rotation.
- **Spacing:** Cards overlap just enough to create depth without losing readability.
- **Visible states:** The staggered angles and soft shadows make the group feel lively while staying calm.

## Responsive behavior

On narrower screens, the page should keep the same reading order: headline, proof, action, then supporting detail. The centered nav should compress before the main content does, and the pill actions should remain large enough to tap. The pricing comparison should turn into stacked plan cards or a horizontal matrix with clear row labels, because the long comparison table needs more room than a phone gives it. The editor showcase should place the preview above the control column if the width becomes tight, while the feature grid should drop from three columns to two, then to one.

The testimonial collage should also simplify on small screens. The overlap and tilt can relax into a vertical stack so the names and quotes stay easy to scan. The floating help button should remain pinned and unobtrusive. Overall, the system should preserve spacing and hierarchy before it tries to preserve every desktop composition detail.

## Practical implementation guidance

### Preserve

- Keep the palette nearly monochrome and let the blue action color stay rare and intentional.
- Preserve the generous whitespace around the comparison table and the feature grid.
- Use Neue Montreal for all large page copy so the brand stays calm and modern.
- Keep cards soft and modestly rounded rather than turning every block into a pill.

### Avoid

- Avoid adding extra accent colors; the layout already has enough contrast.
- Avoid heavy shadows or glassy effects; the page is mostly flat.
- Avoid crowding the pricing table with dense copy or tight row height.

### Recommended build order

1. Set the canvas, surface, ink, muted ink, and action colors.
2. Build the type scale and the pill-style primary actions.
3. Recreate the centered navigation and the large pricing headline.
4. Build the pricing table with its row separators and plan columns.
5. Add the editor showcase with its split control layout.
6. Add the feature grid and the testimonial collage.
7. Finish with the floating help button and responsive stacking rules.

### Accessibility

- Keep contrast strong on gray supporting text, especially inside the pricing table.
- Give the blue action button and the black floating button visible focus styles.
- Do not rely on color alone to mark the active plan or the current section.
- Add descriptive alt text for the editor preview, feature illustrations, and avatar thumbnails.
- Preserve readable line lengths in the centered heading and the plan descriptions.

## Scope note

This guide covers the visible home and pricing surfaces shown here: the centered nav, editor showcase, feature grid, testimonial collage, and plan comparison table. It does not define motion, mobile-specific breakpoints, hidden dashboard states, or alternate product flows. Measurements are practical adaptation targets.
