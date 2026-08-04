# How access.mymind.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/access.mymind.com-design)

Last updated: 2026-08-04

## Captured pages

[![Night mode card with serif title and dark device mockup](https://pin.fontofweb.com/3395?format=jpg)](https://design.withfudge.com/share/pin-3395)

[Night mode card with serif title and dark device mockup](https://design.withfudge.com/share/pin-3395)

[![Image text recognition card with warm artwork and tags](https://pin.fontofweb.com/3394?format=jpg)](https://design.withfudge.com/share/pin-3394)

[Image text recognition card with warm artwork and tags](https://design.withfudge.com/share/pin-3394)

[![AI image tagging card with blue illustration and floating labels](https://pin.fontofweb.com/3393?format=jpg)](https://design.withfudge.com/share/pin-3393)

[AI image tagging card with blue illustration and floating labels](https://design.withfudge.com/share/pin-3393)

[![Tall feature grid with mixed cards and collage thumbnails](https://pin.fontofweb.com/3391?format=jpg)](https://design.withfudge.com/share/pin-3391)

[Tall feature grid with mixed cards and collage thumbnails](https://design.withfudge.com/share/pin-3391)

[![Centered pricing statement with orange eyebrow and serif lines](https://pin.fontofweb.com/3390?format=jpg)](https://design.withfudge.com/share/pin-3390)

[Centered pricing statement with orange eyebrow and serif lines](https://design.withfudge.com/share/pin-3390)

[![Quiet footer strip with icon claims and underlined links](https://pin.fontofweb.com/3396?format=jpg)](https://design.withfudge.com/share/pin-3396)

[Quiet footer strip with icon claims and underlined links](https://design.withfudge.com/share/pin-3396)

## Overview

access.mymind.com uses a calm, editorial product language built around white cards, soft gray fields, and a serif/sans contrast that keeps the page feeling polished instead of playful. The page is not visually busy. It relies on a few large headline moments, compact explanatory copy, and image-heavy feature cards that sit high on the page and read like framed product posters.

The system is light first. Most surfaces are close to white, with slightly warmer or cooler grays separating card bodies from the page background. Orange is the only strong warm accent and is reserved for the main persuasive thread: eyebrow copy, small badges, and selected links. Dark charcoal appears in the demo buttons and in the phone mockups, so the page always has one grounded counterweight to the pale canvas.

The visible structure is simple and repeatable:

- a large serif heading introducing each feature,
- a short Nunito paragraph,
- a dark or peach pill for the action,
- and an image or collage anchored below the text.

The result feels like a premium information page rather than a dense comparison sheet. The design keeps breathing room around every card and lets the visuals do most of the talking.

## Colors

The palette stays deliberately restrained. The page canvas and card surfaces are nearly white, which makes the product images, black serif titles, and orange callouts stand out without heavy contrast tricks. The cooler grays support the body copy and icon strokes, while the darkest value is reserved for CTA fills and device screenshots. Blue-green tones appear inside the product art and small labels, not as broad UI chrome. Peach is used as a soft badge background when the page needs a lighter, warmer variant of the accent path.

| token | hex | use |
|---|---|---|
| `canvas` | `#f8f8f9` | Main page background and wide open spacing between sections |
| `surface` | `#f5f4f6` | Card fill and subtle panel separation from the canvas |
| `ink` | `#000000` | Primary serif headlines and strongest body text |
| `muted-ink` | `#5c5d5f` | Supporting copy, footer text, and quieter labels |
| `border` | `#b2b9c5` | Soft icon strokes, card edges, and low-emphasis separators |
| `action` | `#f5924a` | Orange eyebrow text, key links, and emphasis accents |
| `accent-peach` | `#f0ab94` | Warm badge fill behind secondary emphasis chips |
| `accent-cool` | `#71b6cb` | Cooler label tone inside image-tag and product callouts |
| `accent-blue` | `#4698bd` | Blue product-art tone for image blocks and secondary highlights |
| `surface-dark` | `#2e3641` | Dark CTA pills, demo buttons, and dark screenshot frames |

A practical way to think about the color system is: pale field, dark text, warm accent, cool supporting hues. The light surfaces carry the page; the dark controls anchor the interactions; the accent colors stay small so the page never turns loud.

## Typography

The type system depends on one contrast: Louize for the display layer and Nunito for everything that needs quick reading. Louize gives the page its refined, slightly magazine-like voice. Nunito keeps the paragraphs, buttons, labels, and footer copy friendly and compact. The headings are not overly heavy; their authority comes from the serif shape and size rather than from dense weight alone.

Licensing for Louize and Nunito should be confirmed separately.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Louize | 3rem | 500 | 1.05 | -0.02em | Large feature title at the top of a card or section |
| `section-display` | Louize | 2.5rem | 500 | 1.08 | -0.02em | Centered statement blocks and major callout lines |
| `card-heading` | Louize | 1.75rem | 500 | 1.1 | -0.015em | Individual feature titles such as Night mode or Reading Mode |
| `body` | Nunito | 1rem | 400 | 1.55 | 0em | Descriptive paragraphs under each feature title |
| `body-strong` | Nunito | 1rem | 700 | 1.45 | 0em | Emphasized phrases and short supporting assertions |
| `button` | Nunito | 0.875rem | 700 | 1 | 0em | Demo buttons, acquisition pills, and compact CTAs |
| `eyebrow` | Nunito | 0.875rem | 700 | 1.2 | 0.06em | Orange all-caps or high-emphasis preheads |
| `legal` | Nunito | 0.75rem | 400 | 1.4 | 0em | Footer notes, small legal links, and quiet metadata |

The spacing between the serif title and the body text is tight enough to keep the card compact, but not so tight that the page feels squeezed. Louize is used as the voice of the page; Nunito is used as the working layer that explains what the product does.

## Layout

The page is organized as a sequence of tall, rounded cards on a pale background. Each card keeps the text near the top and lets the image occupy the lower half or lower third, which gives the page a consistent reading order even when the visuals change. The cards are built to feel self-contained: a heading, a paragraph, a button or badge, then the image area. That structure repeats enough times that the page feels coherent, but the artwork changes enough that the cards do not blur together.

The single-card layouts are narrow and vertical. They leave generous white space around the rounded container and create a soft gallery feel. The multi-card section expands into a three-column grid, with each card keeping a similar height and a similar internal rhythm. This grid is the densest part of the page, but it still feels airy because the cards are white and the background is barely tinted.

The centered statement section works differently. It removes the card container feel and lets the message sit directly on the canvas. That change in layout gives the page a pause between the feature cards and the footer materials. The small footer strip at the end uses tiny icon-led claims and underlined links, which keeps the lowest part of the page quiet and legible instead of trying to compete with the features above.

Vertical rhythm matters more than strict symmetry. The design prefers stacked spacing, grouped copy, and image blocks that settle into the lower half of each card. Because of that, the page reads well even when the content changes from screenshot to collage to illustration.

## Visual language

The visual language is soft, clean, and slightly luxury-leaning. Rounded corners are common, but they are not oversized enough to feel playful. Shadows are present and gentle, just enough to separate cards from the background. Borders are faint and often replaced by tonal difference instead of hard lines. That keeps the interface from looking boxed-in.

The imagery is the loudest visual element, but even the imagery is controlled. Some cards use a dark product screenshot in a device frame. Others use a bright, poster-like illustration with labels floating above the image. Another card uses a collage of smaller imagery arranged like a scrapbook or mood board. The variation keeps the page lively without changing the underlying rules of the system.

Small orange pills and underlined links carry the conversational tone of the page. They are direct and functional, not decorative. The orange eyebrow line in the statement section is especially important: it signals the page’s persuasive key without turning the section into a banner.

The contrast between Louize and Nunito is the main brand signal. Louize gives the cards their editorial calm; Nunito keeps the product explanation simple and grounded. The page never needs a second display font because the serif already carries enough personality.

## Components

### Feature card

- **Anatomy:** A serif title, one or two short body lines, a dark demo button or soft badge, then a large image area.
- **Surface:** White card on a pale canvas with a very soft shadow and a faint edge.
- **Typography:** Louize for the heading, Nunito for the paragraph and controls.
- **Shape:** Large rounded corners, with the media area following the same rounded language.
- **Spacing:** Tight title-to-copy spacing, then a looser break before the image block.
- **Composition:** Text stays top-aligned and left-aligned; the image occupies the lower half and often feels anchored to the card edge.
- **Variants:** Dark screenshot, colorful illustration, collage panel, and reading-mode mockup all share the same shell.
- **Visible states:** Demo actions appear as either a dark pill or a warm badge-like chip.

### Compact action pill

- **Anatomy:** Short label, often with a small icon or a tight wordmark.
- **Surface:** Dark charcoal fill with white text, or a soft peach fill with orange text.
- **Typography:** Nunito Bold, small and compact.
- **Shape:** Fully pill-shaped or close to it.
- **Spacing:** Narrow internal padding so the control stays secondary to the headline.
- **Composition:** Used beside supportive copy rather than as a dominant hero button.
- **Visible states:** The page shows at least two distinct fills: a dark demo pill and a lighter mastery badge.

### Centered statement block

- **Anatomy:** Orange eyebrow line, two large serif lines, and a final underlined emphasis line.
- **Surface:** No card shell; the copy sits directly on the light page field.
- **Typography:** Louize at a larger scale than the feature cards, with Nunito only for the eyebrow or link treatment.
- **Shape:** No box shape, which makes the section feel open and declarative.
- **Spacing:** Wide top and bottom air, with a strong break between the eyebrow and the main message.
- **Composition:** Center aligned and stacked; the line breaks are part of the visual rhythm.
- **Visible states:** The final sentence uses underline and orange color to signal the primary persuasive point.

### Feature grid card

- **Anatomy:** Title, short paragraph, action chip, then a product collage or image cluster.
- **Surface:** Same white card shell as the simpler feature cards.
- **Typography:** Louize heading with Nunito supporting text.
- **Shape:** Same rounded family across all cards so the grid reads as one system.
- **Spacing:** Enough gap to let each card breathe, but close enough to feel like a set.
- **Composition:** Cards are balanced top-to-bottom; the imagery is never crammed into the copy zone.
- **Variants:** Single-art image, nine-tile collage, and more abstract product stills all fit the same pattern.

### Footer assurance strip

- **Anatomy:** Three small icon-led claims, a short prompt line, underlined supporting links, and a tiny legal line.
- **Surface:** The lightest possible treatment, sitting quietly on the page.
- **Typography:** Nunito throughout, with the prompt line a touch larger than the legal text.
- **Shape:** No heavy container; the section depends on spacing and icon size.
- **Spacing:** Horizontal grouping on larger screens, stacked clarity on tighter widths.
- **Composition:** The claims read left to right, while the lower links sit centered and subordinate.
- **Visible states:** Underlines and muted gray text separate the quiet links from the stronger feature content above.

## Responsive behavior

When the layout compresses, the page should keep the same reading order: title, short explanation, action, then image. The cards can stack without losing their identity because their internal hierarchy is already clear. The serif title should stay large enough to preserve the editorial voice, while the body copy can tighten modestly to avoid awkward wrapping. The multi-card grid should collapse into a single column before the cards become too narrow for the screenshots and collages to breathe.

The centered statement section can remain centered on smaller screens, but it should not be allowed to break into tiny line fragments. It works because the lines are broad and confident. The footer strip should stack cleanly, with the icon claims remaining legible and the legal line staying separate from the main links.

If the page needs interactive controls, the controls should keep the same shape language at every size: dark pill, peach badge, or underlined text. The page does not need new mobile-specific visual tricks to feel complete; it mainly needs the existing cards to remain readable and spaced with the same calm rhythm.

## Practical implementation guidance

### Preserve

- Keep Louize as the page voice for feature titles and statement lines.
- Preserve the pale canvas and white card contrast; that is the core of the page.
- Keep the action path orange and small, not loud and not everywhere.
- Let the images be the most varied part of the page while keeping the shell consistent.
- Use soft shadows and rounded corners instead of hard borders and heavy framing.

### Avoid

- Avoid adding extra accent colors to the UI shell; the palette is already complete.
- Avoid heavy black rectangles behind every button; only the demo chips need that weight.
- Avoid turning body copy into serif text; the serif belongs to the headings.
- Avoid sharp corners, dense grids, and tight gutters that would flatten the editorial feel.
- Avoid overusing underlines, since the page already has a strong hierarchy through type and color.

### Recommended build order

1. Set the color palette and type pairings first.
2. Build the white card shell with shadow, radius, and internal spacing.
3. Add the feature-card pattern with title, body, control, and media zone.
4. Build the multi-card grid using the same card shell.
5. Add the centered statement block as a separate layout mode.
6. Finish with the footer assurance strip and quiet legal copy.

### Accessibility

- Keep the orange emphasis readable against the pale background, especially in small text.
- Preserve underlines on links so color is not the only signal.
- Give each product image a useful alternate description that names the visible content.
- Keep focus rings visible on pills and links so the soft shadows do not hide keyboard position.
- Maintain generous line length and line height in the body copy so the Nunito paragraphs stay easy to scan.

## Scope note

This guide covers the pricing-page feature cards, the centered value statement, and the footer assurance strip on access.mymind.com shown here. Measurements are practical adaptation targets.
