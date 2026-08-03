# How aljazeera.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/aljazeera.com-design)

Last updated: 2026-08-03

## Captured pages

[![White news header with large black headline, gray italic deck, and compact tool row](https://pin.fontofweb.com/9086?format=jpg)](https://design.withfudge.com/share/pin-9086)

[White news header with large black headline, gray italic deck, and compact tool row](https://design.withfudge.com/share/pin-9086)

[![Sports story header with dense headline above a centered player portrait and utility row](https://pin.fontofweb.com/9085?format=jpg)](https://design.withfudge.com/share/pin-9085)

[Sports story header with dense headline above a centered player portrait and utility row](https://design.withfudge.com/share/pin-9085)

[![Crowd-scene sports header with a black tooltip and a full-width match photograph](https://pin.fontofweb.com/9084?format=jpg)](https://design.withfudge.com/share/pin-9084)

[Crowd-scene sports header with a black tooltip and a full-width match photograph](https://design.withfudge.com/share/pin-9084)

## Overview

Al Jazeera’s article pages use a severe, uncluttered newsroom frame. The page is mostly white, the headline is black and heavy, the summary line shifts into a serif voice, and the control row stays narrow and quiet beneath the text. Story photography then takes over the width of the column, so the page reads as a sequence of headline, context, tools, and lead image rather than as a dense news dashboard.

The system’s strength is restraint. There is no loud accent color competing with the story image. Instead, the interface relies on black, gray, white, thin borders, and one or two rounded pills to separate utility actions from the reading stack. That gives the articles a sober, direct tone that works across hard news and sports without changing the underlying frame.

The visible design language is built from:

- Strong type contrast between the headline and the serif deck.
- Compact utility controls that sit close to the story introduction.
- Large rectangular lead images with gentle rounding.
- Minimal chrome and almost no decorative depth.
- A reading surface that stays neutral so the photography carries the color.

## Colors

The palette is close to monochrome. `ink` is pure black and does the main editorial work. `muted-ink` is the softer gray used for the subhead line and secondary explanatory text. `border` is a light gray used for thin outlines around pills and small interface separators. `canvas` is clean white and acts as the main reading field. `surface` is the faint off-white used for small UI containers and helper surfaces where a slight separation from the page is useful.

That narrow palette is important because the photographs already bring their own color and energy. A blue screen in a cybercrime story or a red kit in a football story should remain visually dominant inside the image area. The UI should not add its own hue unless a control absolutely needs it. The article pages shown here do not rely on a brand accent color. They rely on contrast, spacing, and weight.

The relationship between the roles is simple:

- `canvas` frames the entire article experience.
- `surface` supports small UI pieces without looking card-heavy.
- `ink` handles headline and tool text.
- `muted-ink` softens the deck and explanatory copy.
- `border` draws the light outline around pills and helper elements.

The surfaces stay flat. Depth is almost absent. When a tooltip appears, it is a small dark exception, not a system-wide shadow language. That makes the page feel steady and factual instead of promotional.

## Typography

Roboto handles the article system text and the headline hierarchy. Georgia provides the serif deck that sits beneath the headline and gives the page a second voice without introducing another brand family. The contrast between the two families is the main typographic flourish: Roboto is blunt and functional, Georgia is calmer and more literary.

Font licensing is not supplied here and should be checked before reuse.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| article-headline | Roboto | 2.5rem | 700 | 1.3 | 0em | Main story headline at the top of the article |
| article-dek | Georgia | 1.5rem | 400 | 1.5 | 0em | Serif summary line directly under the headline |
| article-body | Roboto | 1rem | 400 | 1.5 | 0em | Paragraph copy and general article text |
| toolbar | Roboto | 1rem | 400 | 1.5 | 0em | Listen, Save, and Share labels in the action row |
| utility | Roboto | 0.875rem | 400 | 1.5 | 0em | Smaller helper text and compact controls |
| promo-pill | Roboto | 1.25rem | 400 | 1.15 | 0em | The outlined Google-style call-to-action pill |

The headline is large but not flamboyant. It uses weight and size more than tracking tricks. The deck keeps a looser rhythm and should sit visibly below the headline with enough air to read as a separate editorial layer. The utility row is noticeably smaller and lighter than the headline so it never competes with the story title. Keep the type hierarchy strict: headline first, deck second, tools third.

## Layout

The page reads as a single vertical column. A white article shell sits inside a light page surround, then the content stacks in a stable order: headline, deck, tool row, and lead image. There is no attempt to turn the page into a grid of boxes. The visual rhythm comes from spacing and from the size change between text and image.

The title block is tight. The headline occupies two or three lines depending on story length, then the serif deck follows immediately with a clear gap. The action row sits just below that in a compact horizontal strip. It is important that this strip remains narrow and legible; the icons and labels work as a small utility band rather than as a secondary nav bar.

The lead image spans the column width and feels like the main visual payload of the article. It uses modest rounding rather than a hard rectangle. That softens the page a little without breaking the newsroom tone. The image is large enough that the subject matter becomes clear at a glance, but the page still keeps a disciplined edge through its white field and simple borders.

Spacing is not expansive for its own sake. The packet’s 7px, 10px, 12px, 16.08px, 20px, 24px, 30px, and 35px values recur as small editorial steps: close spacing inside controls, mid-sized gaps between title and deck, and larger breaks before the image. Use those values to keep the page feeling measured rather than airy. The result should be a column that breathes just enough for reading, but never drifts into a lifestyle layout.

## Visual language

This system is deliberately plain in the best sense. It avoids ornamental framing, gradients, heavy shadows, and loud brand treatments. The page surface stays light so the headline and photo can do the work. Thin gray lines, white pills, and restrained rounded corners provide structure without becoming a style statement of their own.

The photographs are the emotional center. A cyber story can lean on cool screen glow and blurred equipment, while a sports story can lean on a player portrait or a wide field scene. The page chrome should stay indifferent to those changes. It should hold steady while the image carries mood, urgency, and color.

Three visual ideas define the site:

- Typography is the identity, not decoration.
- Utility controls are small and factual.
- Photography is wide, direct, and only lightly framed.

Corners are present but modest. The panel radius is small, the action pills are more rounded, and the biggest pill is nearly fully curved. That mix keeps the controls readable and tactile while leaving the article image and headline as the main forms on the page. Keep surfaces flat, borders light, and the overall tone calm and institutional.

## Components

### Article shell

- **Anatomy:** White page field, centered reading column, title block, utility row, lead image.
- **Surface:** `canvas` for the main field, with `surface` reserved for small helper containers.
- **Typography:** Roboto for the article system text, Georgia for the deck line.
- **Shape:** Small rounded media frame rather than a hard corner.
- **Composition:** The shell should stay narrow enough to feel editorial, not promotional. It should let the page breathe while keeping the story visually central.

### Headline block

- **Anatomy:** Large black title, optional line wrap, direct left alignment.
- **Typography:** `article-headline` in bold Roboto.
- **Color:** `ink` only.
- **Spacing:** Keep a compact gap beneath the headline so the deck still feels attached to the same story.
- **Hierarchy:** It must dominate the top of the page without looking oversized or theatrical.

### Deck block

- **Anatomy:** Short summary sentence or two directly under the headline.
- **Typography:** `article-dek` in Georgia.
- **Color:** `muted-ink`.
- **Spacing:** Give it room above and below so it reads as a distinct editorial layer.
- **Visible state:** In the supplied pages, the deck appears quieter and softer than the headline; preserve that contrast.

### Action row

- **Anatomy:** Listen, Save, Share controls, each with an icon and label.
- **Typography:** `toolbar` or `utility` depending on compactness.
- **Color:** Black text and icons on a white field.
- **Shape:** Small, rounded helper surfaces when present; otherwise flat text controls.
- **Composition:** Keep the row aligned on one line with the article rhythm. It should feel functional and immediate.
- **Visible state:** A small black tooltip appears below Save in one view. It uses white text and a close mark, and it should remain visually contained so it does not hijack the article header.

### Utility pill

- **Anatomy:** Outlined call-to-action button with a small Google mark and supporting info icon nearby.
- **Typography:** `promo-pill`.
- **Surface:** White fill with a thin gray border.
- **Shape:** Fully rounded pill shape.
- **Spacing:** Compact horizontal padding, enough to keep the label readable without making the pill feel wide.
- **Role:** This is a secondary utility, not a primary editorial action. It should stay visually subordinate to the headline and deck.

### Lead image

- **Anatomy:** Wide rectangular photograph, edge to edge within the reading column.
- **Surface:** No overlay chrome or caption treatment is visible in the supplied pages.
- **Shape:** Small corner radius.
- **Composition:** The image should immediately follow the tool row and take up the most visual space after the title block.
- **Visible states:** The image may be a player portrait, a field scene, or a technical/news room still, but the frame treatment stays the same.

## Responsive behavior

On narrower viewports, the important rule is order. Keep the story title first, then the deck, then the tool row, then the lead image. Do not let the utility controls jump above the text or split into an awkward multi-row cluster before the headline is done. The article still needs to feel like a reading surface, not a stack of widgets.

The headline can wrap, but it should keep its heavy weight and black color. The deck should remain readable as a single descriptive line or a short two-line block. The utility row should compress only as far as needed to preserve label clarity. If the outlined pill must shrink, preserve its rounded shape and border contrast rather than flattening it into an ambiguous chip.

The image should remain large and recognizable. On small widths, it may crop differently, but it should not be shrunk into a thumbnail treatment. The surrounding white space should reduce before the typography loses legibility. That keeps the page feeling editorial even when the viewport tightens.

## Practical implementation guidance

### Preserve

- Keep the page nearly monochrome in the UI layer.
- Preserve the strong headline/deck contrast; it is one of the clearest signals in the page.
- Keep the tool row compact and close to the title block.
- Let photography be the source of color and energy.
- Use modest rounding, not playful card shapes.
- Keep depth to a minimum.

### Avoid

- Avoid introducing a new accent color for article chrome.
- Avoid card grids, gradient backgrounds, or decorative shadows.
- Avoid making the action row feel like primary navigation.
- Avoid swapping the serif deck for another sans face.
- Avoid wrapping every element in a pill or badge.
- Avoid over-stacking small containers around the headline area.

### Recommended build order

1. Build the article shell and lock the neutral color roles.
2. Set the headline and deck hierarchy with Roboto and Georgia.
3. Add the compact action row and the outlined utility pill.
4. Add the lead image with the small rounded frame.
5. Add the small tooltip/helper state for Save.
6. Tune spacing so the page still reads as one column at narrower widths.

### Accessibility

- Keep text contrast strong: black on white for primary copy, gray only for secondary lines.
- Give every icon-only or icon-led control a clear label.
- Make the outlined pill and tool row large enough to tap comfortably.
- Provide meaningful alternative text for the lead image.
- Keep focus styles visible on the action row and utility pill.
- If the tooltip is reused, ensure it can be dismissed without blocking keyboard use.

## Scope note

This guide covers the article reading pages shown in the supplied news and sports views: the masthead area, title block, deck, utility row, outlined promo pill, and lead image. It does not cover the homepage, live video players, comments, or article modules beyond the visible story frame. Spacing values are rounded to the packet’s 0.125rem step.
