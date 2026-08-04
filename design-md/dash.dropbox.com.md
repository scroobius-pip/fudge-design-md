# How dash.dropbox.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dash.dropbox.com-design)

Last updated: 2026-08-04

## Captured pages

[![Centered homepage hero with blue action pair](https://pin.fontofweb.com/5914?format=jpg)](https://design.withfudge.com/share/pin-5914)

[Centered homepage hero with blue action pair](https://design.withfudge.com/share/pin-5914)

[![Security section with car line art and lock markers](https://pin.fontofweb.com/3561?format=jpg)](https://design.withfudge.com/share/pin-3561)

[Security section with car line art and lock markers](https://design.withfudge.com/share/pin-3561)

[![White content grid with search bar and floating cards](https://pin.fontofweb.com/3563?format=jpg)](https://design.withfudge.com/share/pin-3563)

[White content grid with search bar and floating cards](https://design.withfudge.com/share/pin-3563)

[![Dark campaign hero with orange diagonals and cards](https://pin.fontofweb.com/3562?format=jpg)](https://design.withfudge.com/share/pin-3562)

[Dark campaign hero with orange diagonals and cards](https://design.withfudge.com/share/pin-3562)

[![White testimonial panel with orange corner wedges](https://pin.fontofweb.com/3559?format=jpg)](https://design.withfudge.com/share/pin-3559)

[White testimonial panel with orange corner wedges](https://design.withfudge.com/share/pin-3559)

## Overview

Dropbox Dash reads like a product shell that can also host a campaign skin. The default home surface is calm and centered: a thin announcement line, a compact header, a large black headline, a short explanatory paragraph, and a pair of blue actions sit on a pale field before the interface mockup takes over the lower half of the page. The campaign route keeps the same product clarity but changes the stage completely. It leans into black texture, orange diagonal movement, floating cards, and oversized statements so the McLaren story feels dramatic without losing the Dropbox structure. The visual logic is simple: white and off-white for the core product shell, blue for action, Atlas for working UI text, and a louder campaign canvas when the page needs theater.

## Colors

| token | value | use |
|---|---|---|
| action | #0061FE | Primary buttons, active links, and the clearest call to act |
| action-soft | #3380FE | Secondary fills, lighter button states, and small accent chips |
| ink | #000000 | Main headlines, logo text, and the darkest campaign surfaces |
| muted-ink | #736C64 | Supporting copy, small labels, and quiet explanatory text |
| canvas | #FFFFFF | Main page background, card surfaces, and the cleanest framing space |
| surface | #F7F5F2 | The warm off-white home canvas and the soft field behind the hero |

The palette is deliberately small. The everyday product shell stays mostly white with black text and one strong Dropbox blue. The slightly warmer surface tone softens the main page so the hero and the interface mockup feel integrated rather than pasted on. `action-soft` gives the system a second blue without turning the page into a gradient demo. `muted-ink` handles secondary information where the page needs less emphasis than black but more structure than a pale gray would provide.

The light, dark, photographic, and accent modes work together rather than compete. White and `surface` carry the default product storytelling. Black carries the campaign stage and the most important text. Blue is the action language across both modes. Orange appears in the McLaren skin as art direction and directional energy, but it should stay outside the reusable token set so the base interface remains Dropbox-clean.

## Typography

Atlas Grotesk is the workhorse family. It handles navigation, body copy, button labels, small section tags, and the supporting text that explains what Dash does. Sharp Grotesk Db Cyr 20 supplies the biggest statements on the page: the home hero, the campaign masthead, and the large section headlines that need a dense, engineered feel. Db Sharp Grotesk Variable appears in the source font set, but this guide does not assign it a distinct visual role. Licensing for reuse should be confirmed separately.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Sharp Grotesk Db Cyr 20 | 5.8125rem | 500 | 0.9 | -0.03em | The centered home hero and the strongest campaign statements |
| section-display | Sharp Grotesk Db Cyr 20 | 5.75rem | 500 | 0.9 | -0.03em | Large section openers and statement blocks on the campaign route |
| body-large | Atlas Grotesk | 1.4505rem | 400 | 1.5 | 0em | The hero supporting paragraph and other lead explanatory copy |
| body | Atlas Grotesk | 1.1604rem | 400 | 1.5 | 0em | General product copy, captions, and the prose around stat blocks |
| body-medium | Atlas Grotesk | 1.0154rem | 500 | 1.29 | 0em | Button labels, header links, and compact interface text |
| eyebrow | Atlas Grotesk | 1.0154rem | 500 | 1 | 0.12em | Uppercase section tags such as SECURITY and UNIVERSAL SEARCH |

The hierarchy depends on scale and weight more than on many families. The display face is heavy and tightly set, with little breathing room between lines. Atlas stays open enough to make the page readable at smaller sizes and to keep the button text crisp. The uppercase eyebrow style gets its authority from spacing and color, not from a heavier weight. That keeps the homepage and the campaign route aligned even when the page shifts from white product framing to the black McLaren stage.

## Layout

The desktop home page starts with a narrow promotional strip, then a centered header, then the hero stacked vertically in the middle of the canvas. The headline sits above a short explanatory paragraph and two actions. That trio is intentionally compact, so the wide page does not feel empty before the interface mockup appears. The mockup itself is large enough to bridge the fold and make the product feel real before the user reaches the lower sections.

The home composition is almost architectural. The hero is centered rather than left-anchored, which makes the page feel calm and considered. The interface panel below it gives the page a second focal point and prevents the hero from becoming a pure marketing poster. The spacing between the headline block, the actions, and the mockup is generous enough to make each layer readable, but not so large that the page loses momentum.

The McLaren route uses a different rhythm. It often opens on a black textured field with orange diagonal geometry cutting across the page. Large white statements sit in the center or upper third, while floating cards and image tiles orbit the main message. The stats section breaks the route back into a white field with bold numbers and thin divider marks. The quote section then resets the scale again: a wide white panel, a strong testimonial, and orange accents at the edges. The footer closes the route with a dark, dense ending that still belongs to the same family as the rest of the page.

## Visual language

This system depends on contrast, but not the shallow kind. The home surface is quiet and geometric. The campaign surface is textured and angled. Together they produce a brand that can switch from product explanation to partnership story without looking like two unrelated sites. The white pages use large empty zones, centered type, and a few sharp blue actions. The campaign pages use black texture, orange fields, floating content cards, and a sense of motion even in still frames.

The card language is important. Cards use plain rectangular edges and sit lightly off their backgrounds through spacing rather than ornament. They do not carry heavy borders or loud shadows. Instead, they feel like stacked product objects placed on a clean table. The content cards in the campaign imagery are small, modular, and readable at a glance: search cards, press-release cards, approval cards, and calendar-like panels. Those objects create density without turning the page into a dashboard grid.

The page also uses shape as a wayfinding device. Straight edges and wide rectangles define the home shell. Diagonal orange shapes and slanted composition introduce momentum in the McLaren story. The result is energetic but controlled. Nothing feels decorative for its own sake. Even the loudest sections still communicate as product UI first and campaign art second.

## Components

### Announcement banner

A slim banner sits at the very top of the home page. It is small, centered, and highly legible, with blue text that reads like a light prompt rather than a full navigation item. It should stay visually subordinate to the main hero. Its job is to add a narrow layer of motion and a quick path to the related Dropbox experience without stealing attention from the page headline.

### Header navigation

The header is compact, horizontal, and mostly white-space driven. The Dropbox mark anchors the left edge, the core navigation sits in the middle, and login plus the filled action sit on the right. The header text uses Atlas rather than the display face, which keeps the top of the page functional instead of theatrical. On the campaign route, the same logic should stay intact even when the surrounding stage becomes dark.

### Primary and secondary actions

The primary action is a solid Dropbox blue block with white text. It should feel confident rather than glossy. The secondary action can use the lighter blue so the page gets a visual hierarchy without introducing a new hue. Both buttons rely on Atlas Medium and compact proportions, which keeps the page from looking overly promotional. The button pair under the hero is a core pattern: the main action is first, the softer option follows.

### Home hero block

The home hero is centered and stacked. A very large Sharp Grotesk headline sits above Atlas supporting copy, then the action pair, then a wide interface image that overlaps the lower portion of the page. The image is not decorative filler; it is the proof of the product. The hero works because the type is large enough to carry the message by itself, while the mockup shows the workspace without forcing the user to read a dense explanation.

### Campaign stage and supporting cards

The McLaren stage uses a much louder canvas. The background turns black and textured, orange shapes cut through the composition, and a large white statement dominates the page. Floating cards are layered around the main illustration and search surfaces. These cards should keep the same plain rectangular geometry as the product shell, but they can be tighter, denser, and more image-led. The campaign story depends on this mixture of precise UI objects and high-energy art.

### Stat strip and testimonial panel

The stat strip is pure structure: an oversized headline, three large numbers, and a clean white field with measured spacing. The numbers carry the weight, not extra decoration. The testimonial panel then widens the page again with a centered quote and visible orange edges or diagonal accents. Both components should stay simple. They work because the typography is large and direct, and because the layout gives the words plenty of room.

## Responsive behavior

On medium widths, the centered home hero should keep its stacked rhythm, but the button pair may compress into a tighter row or stack if the line breaks start to fight the headline. The interface mockup should scale down as a single unit so the lower edge still feels anchored to the hero instead of drifting away from it.

On narrow widths, the campaign route should simplify before it becomes crowded. Orange wedges can become background bands, and floating cards should stack in a single column with clearer spacing between them. The longest headlines should break cleanly into two or three lines rather than stretch into a tall, hard-to-scan column. The header can reduce to the logo, the action, and a compact utility cluster while keeping the same blue call to act.

## Practical implementation guidance

### Preserve

- Keep the default home surface pale, centered, and product-first.
- Keep blue as the only persistent action color across both routes.
- Keep the headline scale large and dense so the page feels certain, not airy.
- Keep cards rectangular and lightly separated, with only modest depth.
- Keep orange inside the campaign skin rather than spreading it across the whole shell.

### Avoid

- Avoid adding extra accent colors to the base product UI.
- Avoid replacing the bold display face with a softer marketing font.
- Avoid small, busy containers around every block of text.
- Avoid over-shadowing the cards; the system depends more on contrast and spacing.
- Avoid making the campaign route look like a separate brand.

### Recommended build order

1. Set the color roles and the headline hierarchy.
2. Build the white home shell with the banner, header, hero, and button pair.
3. Add the wide interface mockup and the lower supporting modules.
4. Build the McLaren route with the black stage, orange diagonals, and floating cards.
5. Add the stats strip, quote panel, and footer treatment.
6. Check how the two surfaces switch without breaking the shared product language.

### Accessibility

- Keep black text on white or off-white backgrounds where possible, and preserve strong contrast for blue actions.
- Make the tiny banner and header links large enough to remain usable without hovering.
- Give the floating campaign cards clear labels and readable alt text where images carry meaning.
- Keep visible focus rings on every action and navigation item.
- Preserve readable line lengths for the hero and the quote block as the layout tightens.

## Scope note

This guide covers the desktop home surface and the McLaren F1 campaign route, including the top banner, header, centered hero, product mockup, stats strip, testimonial panel, and dark footer. It does not lock mobile breakpoints, motion, hover states, or alternate fallbacks beyond the named families.
