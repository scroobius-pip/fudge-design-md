# How drkst.framer.website is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/drkst.framer.website-design)

Last updated: 2026-08-08

## Captured pages

[![Compact top bar with hanging black product card and utility badges](https://pin.fontofweb.com/9029?format=jpg)](https://design.withfudge.com/share/pin-9029)

[Compact top bar with hanging black product card and utility badges](https://design.withfudge.com/share/pin-9029)

[![Centered statement with mixed weights and wide white spacing](https://pin.fontofweb.com/5589?format=jpg)](https://design.withfudge.com/share/pin-5589)

[Centered statement with mixed weights and wide white spacing](https://design.withfudge.com/share/pin-5589)

## Overview

Drkst® is a minimal studio-style homepage built from a very small set of visual moves: a soft light field, a compact black brand chip, a suspended product tile, and a centered statement that relies on size and weight rather than ornament. The page feels deliberate and quiet, with enough spacing to make each object look placed by hand. Nothing on the screen tries to fill every corner.

The hierarchy is simple. The brand appears first, then the page opens into a lot of white space, then a dark product image becomes the focal point, and finally a large sentence carries the page’s point of view. The layout reads like a one-screen portfolio pitch: identity, object, statement. That order matters more than any decorative treatment.

The visual system should stay sparse and precise. Small rounded corners, soft gray pills, black-and-white contrast, and one blue link color create the entire vocabulary. The design works because it keeps chrome small and the message large.

## Colors

Drkst® uses an almost monochrome palette with one blue accent. The white canvas is the main field. Soft gray surfaces hold the tiny pills and rails. Black and near-black carry the wordmark, the product tile, and the darkest chips. Blue appears only as a restrained accent, so it feels like a link or directional cue instead of a general brand color.

| token | value | use |
|---|---|---|
| `canvas` | `#FFFFFF` | Main page field and the lightest button backgrounds |
| `surface` | `#F3F3F3` | Soft top bar, utility pills, and inset chrome |
| `border` | `#E4E4E4` | Faint edges, hairlines, and subtle separation on pale surfaces |
| `ink` | `#000000` | Primary text, the wordmark, and the black product image treatment |
| `deep` | `#030303` | Darkest chip, reversed surfaces, and high-contrast accents |
| `action` | `#0000EE` | The lone blue emphasis for links or directional text |

The relationship between light, dark, photographic, and accent modes is very strict. Light mode does almost all the work, so most containers stay near white or pale gray. Dark mode is not a separate theme; it appears as a compact black insert or chip inside the light composition. Photographic or art-driven content should remain high contrast and mostly black-and-white so it does not compete with the typography. The blue accent must stay rare and small, because its power comes from being the only saturated note on the page.

## Typography

Inter is the main face for the interface and the message. System can handle the smallest chrome-like labels and utility chips without adding visual weight. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|

| `hero-display` | Inter | 3.25rem | 500 | 1.05 | -0.04em | The large centered statement on the white field |
| `section-display` | Inter | 2rem | 500 | 1.1 | -0.03em | Short product captions or compact lead lines |
| `body` | Inter | 1.125rem | 400 | 1.5 | 0em | Supporting sentence and general explanatory copy |
| `nav` | Inter | 0.875rem | 500 | 1.25 | 0em | Top navigation links and contact text |
| `chip` | System | 0.875rem | 400 | 1.2 | 0em | Tiny utility labels, time chips, and badge text |
| `legal` | System | 0.75rem | 400 | 1.4 | 0em | The smallest helper text and footer-size copy |

The hierarchy is shallow. The page does not need many sizes; it needs one large display line, one comfortable supporting size, and a small set of button-sized labels. The stronger weight steps happen at the display level and in the brand chip, while the smaller labels stay calm and uniform. Slight negative tracking on the larger lines helps the centered sentence feel compact and intentional without looking cramped. The page benefits from a firm, neutral sans voice rather than a decorative headline style.

## Layout

The layout is built around a centered axis and large empty margins. In the wide view, the top bar sits close to the upper edge like a floating strip, with the brand at the left and the navigation links marching across the center and right. The whole rail feels detached from the page rather than boxed into a hard header block. That looseness is important: the page should feel airy before it feels structured.

Below the bar, the composition opens into a very large blank field. The hanging product tile uses that space well by becoming the one object that interrupts the emptiness. A thin vertical line and small connector hardware create a simple top-to-bottom axis. The product card sits on that axis, slightly below center, so the eye drops naturally from the header into the artwork. Because the card is so small relative to the canvas, the surrounding white space becomes part of the design rather than dead area.

The tighter view keeps the same language but compresses the structure. The brand and contact chip become more compact, and the main sentence takes over the center of the frame. The line breaks are deliberate and should stay broad enough to give the words room, not stacked so tightly that they feel like a paragraph. The small blue plus sign at the side acts like a minimal point of tension in an otherwise calm field.

The page avoids a column grid, data blocks, and dense content bands. Its spacing strategy is closer to gallery hanging than to dashboard layout: one strip at the top, one object in the middle, one statement below. That keeps the interface elegant even though the visible content is tiny.

## Visual language

The visual language is stark but not harsh. The site relies on black text, white space, and soft gray chrome, then uses one blue accent as a small interruption. Corners are modestly rounded, which gives the pills a friendly Framer-built feel without sliding into softness or playfulness. The result is modern and slightly editorial.

The product tile introduces the strongest contrast on the page. It is a dark rectangle with a highly legible white mark and a centered composition, so it reads like a poster or package rather than an app screenshot. That object gives the homepage a sense of identity even when the rest of the page is almost empty. It also keeps the brand from feeling purely typographic.

The text treatment reinforces the same restraint. Most copy stays unadorned, with only occasional weight shifts to emphasize a phrase. The statement line feels composed from simple pieces: light text, darker text, and careful wrapping. That is enough. There is no need for shadows, color bands, or layered backgrounds to create depth. Depth comes from spacing, scale, and the difference between the black chip and the white field.

## Components

### Top bar

- **Anatomy:** A compact brand chip on the left, a run of centered navigation links, and a small utility/contact chip on the right side of the strip.
- **Surface:** Soft gray on the wider view; the bar should feel like a rounded rail floating over the canvas.
- **Typography:** `nav` for the links, `brand-mark` for the wordmark, `chip` for the tiniest labels.
- **Shape:** Small rounded corners, close to the `panel` token, with no aggressive pill exaggeration.
- **Spacing:** Tight horizontal padding and small internal gaps. The bar should stay concise and not stretch into a heavyweight masthead.
- **Composition:** Keep the left brand, middle navigation, and right utility action visually balanced. The strip should read as one line, not as separate blocks.

### Brand chip

- **Anatomy:** The Drkst® mark paired with a dark background.
- **Surface:** Deep black or near-black, with white text.
- **Typography:** `brand-mark` for the logo text.
- **Shape:** Rounded but compact; the chip should look like a precise label rather than a button bank.
- **Visible state:** Calm default state with no loud outline or heavy shadow.

### Hero statement

- **Anatomy:** One centered sentence broken across broad lines, with a few words carrying stronger weight.
- **Surface:** Open white canvas with no container.
- **Typography:** `hero-display` with `body` only when a secondary line is needed.
- **Shape:** No box. The text itself is the visual object.
- **Spacing:** Large top and side breathing room. The line length should stay generous so the sentence feels composed, not compressed.
- **Composition:** The statement should anchor the page without filling the whole screen. It needs room around it to keep the composition quiet.

### Hanging product tile

- **Anatomy:** A narrow vertical line, a small connector detail, and a rounded black product image below it.
- **Surface:** Dark, high-contrast insert inside the light page.
- **Typography:** Use `section-display` only if text is overlaid on the tile; otherwise keep the tile mostly image-led.
- **Shape:** `panel` corners on the card; the support line stays thin and straight.
- **Spacing:** The gap between the top rail and the tile should remain visible and intentional.
- **Composition:** Center the object on the vertical axis so it feels suspended rather than parked in a box.
- **Visible state:** Static and poster-like, with no busy chrome around it.

### Utility pills

- **Anatomy:** Short stacked actions such as the buy button, template link, and platform badge.
- **Surface:** Pale gray or white, with very small contrast against the page.
- **Typography:** `chip` for the small button text and `legal` for the tiniest label.
- **Shape:** `panel` radius, with enough roundness to read as a chip but not a capsule.
- **Spacing:** Tight vertical stacking and compact internal padding.
- **Composition:** Keep these pills tucked into one corner so they do not disturb the central hierarchy.
- **Visible state:** Quiet default styling, with the label itself doing the work.

## Responsive behavior

On narrower screens, the system should keep the same reading order: brand, utility links, suspended object, then the statement. The top bar can wrap or compress, but the brand chip should remain visible and the links should not become crowded enough to lose their calm rhythm. The main sentence should reflow into fewer, cleaner lines instead of shrinking so much that the letterforms lose their presence. The hanging card should stay centered and should not drift into the edge of the viewport.

The utility pills need a clear mobile plan because they are visually light and can vanish if they are stacked too tightly. Give them enough vertical spacing to remain tappable and readable. Keep the blue accent small on every screen size. If the layout must simplify, simplify the chrome first, not the statement or the product tile. The page’s identity depends on those two anchors.

## Practical implementation guidance

### Preserve

- Preserve the extreme whitespace around the hero and the product tile.
- Preserve the tiny rounded radius on pills and the cleaner 10px-like feel of the chrome.
- Preserve the black-and-white core with a single blue accent.
- Preserve the centered axis created by the hanging card.
- Preserve the mixed-weight sentence so the message feels quietly emphatic.

### Avoid

- Avoid adding extra colors just to fill space.
- Avoid broad card shadows, glass effects, or layered gradients.
- Avoid building the top bar into a full-width navigation block with heavy borders.
- Avoid too many type sizes; the system works because the scale is shallow.
- Avoid oversized radii that would make the pills feel soft or playful.

### Recommended build order

1. Set the canvas, surface, ink, and action colors.
2. Build the top bar and brand chip with the smallest rounded radius.
3. Place the suspended product tile and its vertical support line.
4. Add the centered statement with the display type scale.
5. Finish the utility pills and small badges.
6. Check spacing on narrow widths so the hierarchy still reads cleanly.

### Accessibility

- Keep text contrast strong on both the white field and the black chip.
- Make the blue action legible and do not rely on color alone for meaning.
- Ensure the small pills still meet comfortable touch target sizes even when they look tiny.
- Give visible focus styling to the chip buttons and utility links.
- Preserve readable line breaks in the large statement when the viewport changes.

## Scope note

This guide covers the homepage surface shown here: the top bar, the suspended product tile, the centered statement, and the small utility pills. Mobile-specific layouts, motion, additional pages, and interaction microstates are not included. Measurements are practical adaptation targets.
