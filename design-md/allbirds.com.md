# How allbirds.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/allbirds.com-design)

Last updated: 2026-08-03

## Captured pages

[![Full-width hillside hero with centered story title and floating header](https://pin.fontofweb.com/8958?format=jpg)](https://design.withfudge.com/share/pin-8958)

[Full-width hillside hero with centered story title and floating header](https://design.withfudge.com/share/pin-8958)

[![Rounded story cards mixing shoe stills, portrait, and short captions](https://pin.fontofweb.com/8957?format=jpg)](https://design.withfudge.com/share/pin-8957)

[Rounded story cards mixing shoe stills, portrait, and short captions](https://design.withfudge.com/share/pin-8957)

[![Oval-framed statement with centered copy and a shoe anchored below](https://pin.fontofweb.com/8956?format=jpg)](https://design.withfudge.com/share/pin-8956)

[Oval-framed statement with centered copy and a shoe anchored below](https://design.withfudge.com/share/pin-8956)

[![Cream collection page with filter bar, product grid, and side drawer](https://pin.fontofweb.com/8955?format=jpg)](https://design.withfudge.com/share/pin-8955)

[Cream collection page with filter bar, product grid, and side drawer](https://design.withfudge.com/share/pin-8955)

[![Two-panel seasonal promo tiles with large serif headlines over imagery](https://pin.fontofweb.com/8954?format=jpg)](https://design.withfudge.com/share/pin-8954)

[Two-panel seasonal promo tiles with large serif headlines over imagery](https://design.withfudge.com/share/pin-8954)

## Overview

Allbirds presents itself as a calm, nature-led commerce system. The page feels open, grounded, and edited rather than promotional. Warm off-white canvas, black and charcoal text, and soft rounded media frames keep the interface quiet so the photography can do most of the work. The brand story is told through wide landscape imagery, product-in-use pictures, and large campaign statements that sit inside the image rather than beside it.

The page language stays consistent across the home, story, and collection surfaces. A black promo strip, a white floating header, and dark utility buttons form the steady chrome. Inside that frame, the site alternates between editorial storytelling and product merchandising without shifting into a busier retail mode. The result is a system that feels like a well-lit shop with room to breathe, not a dense catalog.

The clearest qualities to preserve are the warm canvas, the restrained chrome, the round media corners, the clear image-first hierarchy, and the contrast between compact UI text and large serif display copy.

## Colors

Allbirds uses a narrow interface palette and lets the photography carry the broader color range. The canvas is not pure white; it is a warm cream that softens the whole page and keeps the product grid from feeling clinical. Dark text sits close to black, but the page also uses a slightly lighter charcoal for supporting copy and control labels. That small split keeps the interface legible without turning every line into a hard black mark.

| token | value | role |
|---|---|---|
| `canvas` | `#ECE9E2` | Main page background and the base for collection and story sections |
| `surface` | `#FFFFFF` | Header bar, cards, and drawer surfaces |
| `surface-muted` | `#E0DACF` | Soft chips, filters, and light UI blocks |
| `border` | `#CDCDCD` | Card edges, rules, and quiet dividers |
| `ink` | `#000000` | Strongest text, pricing, and utility marks |
| `muted-ink` | `#575757` | Supporting body copy and secondary notes |
| `action` | `#000000` | Solid buttons, dark pills, and strong calls to action |
| `inverse` | `#FFFFFF` | Text on dark buttons and over shaded imagery |
| `sale-accent` | `#9C0F0F` | Rare promotional emphasis when a stronger accent is needed |

The relationship between light and dark modes is simple: light surfaces carry the bulk of the commerce UI, while imagery and occasional drawer or promo areas provide darker contrast. The dark material is never glossy or neon. It stays close to charcoal, black, and shadowed landscape tones. The site does not need a bright action color to feel alive; the photography supplies the chroma, and the interface stays disciplined.

## Typography

Allbirds uses five material families in a clear hierarchy. Self Modern carries the editorial voice and the campaign statements. Klim Type Foundry is the working body face for product copy and supporting text. Geograph handles compact labels and small control copy. Hurme Geometric Sans 3 appears in tiny utility button treatments. Akkurat Mono is reserved for small technical or utility-style labels where a more mechanical rhythm is useful. Licensing note: Klim Type Foundry is marked not licensed for desktop use; the other families have no licensing note here.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Self Modern | 2.5rem | 400 | 1.25 | 0em | Hero statements, campaign headings, and large page titles |
| `section-display` | Self Modern | 1.5rem | 400 | 1.33 | 0em | Secondary story headlines and compact promotional lines |
| `body` | Klim Type Foundry | 1rem | 400 | 1.5 | 0em | General product copy and explanatory text |
| `body-small` | Klim Type Foundry | 0.875rem | 400 | 1.43 | 0em | Captions, tertiary notes, and short supporting lines |
| `label` | Geograph | 0.75rem | 500 | 1.25 | 0.05em | Uppercase labels, filter text, and small navigation cues |
| `utility-button` | Hurme Geometric Sans 3 | 0.875rem | 400 | 1.14 | 0em | Small dark buttons and compact utility actions |
| `utility-mono` | Akkurat Mono | 0.875rem | 400 | 1.43 | 0.08em | Tiny technical labels and restrained utility metadata |

The hierarchy depends on contrast, not on many sizes. Display copy is large, calm, and lightly set. Body copy stays steady and readable. Labels use size, weight, and subtle tracking to separate themselves from the text around them. That makes the whole system feel composed even when a page mixes commerce cards, story panels, and a drawer. The typography never becomes decorative noise; it is always supporting the image and the product.

## Layout

The layout rhythm is built from large horizontal sections, generous gutters, and soft rectangular framing. The story page begins with a full-width landscape stage, then moves into a field of rounded picture tiles with short captions, then into a large oval-framed statement with the product anchored in front. The collection page uses a different but related rhythm: a hero banner, a filter toolbar, a product grid, and a right-edge drawer that interrupts the grid without changing the overall calm of the page.

Spacing is spacious rather than loose. There is enough air around each media block for the image to read as the primary object. The page uses recurring jumps in scale: small chips and controls sit on 8–16px-like gaps, product clusters use 24px and 32px breathing room, and larger chapter breaks expand to 88px and 120px-like spacing. That cadence keeps the page from collapsing into one long scroll of similar cards.

Corners are part of the layout, not just a finishing touch. Large media panels use rounded outer edges, and smaller controls use tighter radii so they remain crisp against the warm canvas. The page benefits from this layered geometry: broad rounding for major story blocks, moderate rounding for product cards, and minimal rounding for utility pills and small buttons.

The collection toolbar is especially important. It sits as a calm control band above the grid, with filter affordances on the left and segmented selection on the right. That bar gives the page a visual pause before the dense product field begins. The cart drawer follows the same rule. It stays visually separate, with its own white surface, structured rows, and a strong bottom action, so the grid can remain readable behind it.

## Visual language

Allbirds uses photography as structure, not decoration. The landscape hero does the emotional work. The product cards do the merchandising work. The story cards connect the two by mixing object shots, portraits, and close crops of shoes and materials. The result is a page that feels like a sequence of framed moments rather than a single system of repeated tiles.

The imagery tends to be natural, earthy, and lightly cinematic. Greens, browns, sand, sky, and soft shadow sit behind the UI, but they do not turn into interface tokens. The interface stays mostly neutral so those materials can stay visible. That choice matters: if the chrome became louder, the whole page would lose the feeling of quiet confidence.

Shape language is gentle and deliberate. Large panels have round corners and soft clipping. Campaign images are often contained in rounded rectangles or a large oval frame. Buttons are either black pills, thin outlined pills, or small squared controls with just enough rounding to feel friendly. The system avoids sharp corners where a softer form makes the page feel more human.

The brand voice is equally restrained. Even when the site is selling shoes, the page keeps the copy short and centered on the object in front of it. The large serif headlines feel editorial, not loud. Small labels and product names feel practical, not technical. That tension between editor’s calm and store’s clarity is the core of the visual language.

## Components

### Announcement bar

- **Anatomy:** Single-line promo strip spanning the full width of the page.
- **Surface:** Dark background with light text.
- **Typography:** Small, compact utility copy that reads like a short notice.
- **Composition:** The message is centered and tight, with a secondary link or disclaimer tucked into the same line.
- **Visible state:** It is treated as a persistent top band rather than a hero message.

### Site header

- **Anatomy:** Wordmark on the left, centered category navigation, utility links and icons on the right.
- **Surface:** White floating bar over image-heavy sections.
- **Typography:** Small uppercase or near-uppercase navigation text with low visual weight.
- **Shape:** Broad rounded corners and a thin border create the feeling of a card laid over the page.
- **Composition:** The header is wide, shallow, and orderly; it never competes with the hero image below it.

### Hero stage

- **Anatomy:** Full-width image, centered label, centered headline, and minimal supporting chrome.
- **Surface:** Large landscape photography with a darkened area where text sits.
- **Typography:** Small label above a larger display line.
- **Shape:** The stage itself is rounded, which makes the image feel like a framed print.
- **Hierarchy:** The image is dominant; the text is quiet but clear.

### Story card grid

- **Anatomy:** A sequence of rounded image cards with short captions and short supporting notes.
- **Surface:** White or warm canvas around each tile.
- **Typography:** Small body copy and occasional display lines where a story card needs emphasis.
- **Shape:** Cards use medium rounding and generous inner spacing.
- **Composition:** The cards vary in height and image type, which prevents the grid from feeling mechanical.

### Campaign panel

- **Anatomy:** Large image block with overprinted headline and occasional outlined call to action.
- **Surface:** Full-bleed photography or a tightly framed seasonal still.
- **Typography:** Self Modern is used for the headline so the message feels editorial.
- **Shape:** Large rounded corners, often with broad image crops that fill the panel edge-to-edge.
- **Visible states:** A selected or emphasized call to action appears as a dark pill or a thin light outline against the photo.

### Collection toolbar and product card

- **Anatomy:** Filter pill, segmented tabs, sort control, then a grid of product cards with swatches and prices.
- **Surface:** Cream toolbar band above a white-card grid.
- **Typography:** Geograph for chips and control labels; Klim for product names and details.
- **Shape:** Pills are compact and rounded; product cards are larger and more softly rounded.
- **Composition:** Product cards keep the shoe image large and centered, then move down to name, color, swatches, and price.
- **Visible state:** Selected tabs fill dark, while unselected tabs stay outlined.

### Cart drawer

- **Anatomy:** Right-side panel with cart summary, line items, add-on block, subtotal, shipping line, and checkout action.
- **Surface:** White drawer against a dimmed or quieter page behind it.
- **Typography:** Strong labels for totals, compact text for item details.
- **Shape:** The drawer is rectilinear with soft corners and clear internal dividers.
- **Composition:** The bottom checkout button is wide, dark, and visually final, while the middle of the drawer stays orderly and informational.

## Responsive behavior

On narrower screens, this system should keep the same reading order: hero first, then story or product content, then controls and secondary details. The design depends on image scale, so the mobile version should preserve the large media blocks instead of shrinking everything into a dense list. The header can collapse, but the warm canvas and the rounded media language should stay intact. Product cards should continue to show the image, name, and price in a clear vertical stack, while the collection controls should remain easy to scan and tap. Story cards should stack in a way that preserves their varied image crops and avoids turning the page into a uniform wall of identical tiles.

## Practical implementation guidance

### Preserve

- Keep the canvas warm and off-white rather than pure white.
- Keep the chrome dark, quiet, and limited to a few repeated patterns.
- Use Self Modern only where the page needs editorial weight.
- Let photography supply the color and emotion.
- Keep rounding generous on major media blocks and smaller on controls.

### Avoid

- Avoid bright blue SaaS accents or loud promo colors in the shell.
- Avoid dense card walls with tight gutters.
- Avoid mixing too many face styles inside one component.
- Avoid overusing borders or shadows as the main separation system.
- Avoid turning utility controls into heavy, high-contrast blocks.

### Recommended build order

1. Set the canvas, ink, border, and action tokens.
2. Build the announcement bar and floating header.
3. Build the hero stage with centered text over photography.
4. Add the story card grid and large campaign panels.
5. Build the collection toolbar and product card template.
6. Add the cart drawer and its final action.
7. Check spacing, rounding, and type scale against the page rhythm.

### Accessibility

- Keep text over imagery on a strong enough darkened layer.
- Give each product image and story image a useful alt description.
- Make focus styles visible on pills, chips, and drawer actions.
- Do not rely on color alone to show selected swatches or active controls.
- Keep small text readable when it sits beside dense product imagery.

## Scope note

This guide covers the home hero, story page, collection grid, campaign panels, and cart drawer treatment on allbirds.com. It does not define mobile breakpoints, motion, hover timing, loading states, checkout flows, or account-specific screens. Spacing and type sizes are rounded to a 0.125rem step.
