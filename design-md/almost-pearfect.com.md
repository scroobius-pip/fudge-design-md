# How almost-pearfect.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/almost-pearfect.com-design)

Last updated: 2026-08-04

## Captured pages

[![Central red home hero with tilted snapshots around the stacked wordmark](https://pin.fontofweb.com/8639?format=jpg)](https://design.withfudge.com/share/pin-8639)

[Central red home hero with tilted snapshots around the stacked wordmark](https://design.withfudge.com/share/pin-8639)

[![Fullscreen red menu with oversized handwritten links and a tiny close mark](https://pin.fontofweb.com/8638?format=jpg)](https://design.withfudge.com/share/pin-8638)

[Fullscreen red menu with oversized handwritten links and a tiny close mark](https://design.withfudge.com/share/pin-8638)

[![Red footer band with a running ticker and compact link columns](https://pin.fontofweb.com/8637?format=jpg)](https://design.withfudge.com/share/pin-8637)

[Red footer band with a running ticker and compact link columns](https://design.withfudge.com/share/pin-8637)

[![White product page with a centered bottle, copy stack, and angled CTA](https://pin.fontofweb.com/8635?format=jpg)](https://design.withfudge.com/share/pin-8635)

[White product page with a centered bottle, copy stack, and angled CTA](https://design.withfudge.com/share/pin-8635)

[![Collage-style red home page with scattered images framing the logo](https://pin.fontofweb.com/8634?format=jpg)](https://design.withfudge.com/share/pin-8634)

[Collage-style red home page with scattered images framing the logo](https://design.withfudge.com/share/pin-8634)

## Overview

Almost Pearfect treats each screen as a poster or product sheet rather than as a standard web layout. The visual language is blunt and theatrical: one saturated red field, oversized black display type, compact sans text, and bottle-led product photography that stays separate from the background instead of dissolving into it. The home page feels like a pasted poster wall; the menu becomes a full-screen typographic panel; the shop and product pages flip to white and settle into a quieter editorial rhythm. Across every surface, the same priorities hold: make the title impossible to miss, keep the supporting text small and practical, and let the imagery read as an object placed on the page rather than a decorative wash.

The design works because it commits to a narrow range of materials and repeats them with confidence. Red carries the brand voice. Black carries the letterforms. White gives the product pages room to breathe. The display family supplies the character, while the sans families handle explanation, facts, and the tiny shell text that appears where the page needs a plain interface voice. Nothing feels polished in the generic ecommerce sense. The site looks assembled, printed, and slightly unruly, but the hierarchy stays clear.

## Colors

The palette is intentionally tiny, but it is not flat. The main action red fills the poster screens and the footer band. Black is the letter color, the mark color, and the strongest utility text. White is the product-page ground and the clean counterweight that lets the bottles and copy breathe. The soft black role is only for secondary copy on white pages, where a slightly lighter reading tone keeps the typography from feeling too severe. Blue is present as a restrained utility-link color and should stay rare. The deeper accent red is available for small emphasis pieces such as sticker-like strips or highlights that need to separate from the main field without leaving the same family.

| token | value | use |
|---|---|---|
| `action` | `#FF0000` | Full-bleed poster fields, the open menu, and the main footer band |
| `accent` | `#E60023` | Small emphasis marks, sticker-like CTA strips, and sharp callout pieces |
| `ink` | `#000000` | Main lettering, logo marks, headings, and the strongest text on red or white |
| `ink-soft` | `#282828` | Secondary copy, prices, legal notes, and the softer reading voice on white pages |
| `link` | `#0000EE` | Rare utility links, language labels, or other tiny navigational accents |
| `canvas` | `#FFFFFF` | Shop pages, product sheets, and the white breathing room around content |

Light and dark use here is not a neutral system. The white shop and product pages feel calm, editorial, and object-focused. The red poster pages feel louder, flatter, and closer to a flyer or notice board. The brand does not rely on gradients or transitional tones to connect those modes; it jumps between them. Photography also stays disciplined. It sits as a bottle, snapshot, or cut-out object against the red or white field rather than becoming a blended backdrop. That restraint is what makes the few colors feel strong.

## Typography

Trjn Da Vinci 70 carries the identity voice: the home wordmark, the menu links, the large product names, and the sticker-like callouts all depend on it. Its rhythm is hand-drawn, high-contrast, and slightly unruly, which gives the site its theatrical edge. Acumin Concept and Acumin Concept-Default handle the explanatory copy, facts, and fine print. Helvetica Neue appears in the smallest utility chip. Applesystem is the plain shell face that shows up where the site falls back to generic interface text. Trjn Da Vinci 70 is credited to Virgile Flores. Acumin Concept is credited to Robert Slimbach and Adobe Systems Incorporated. Helvetica Neue is credited to Linotype Design Studio. Applesystem has no supplied designer or vendor credit. Font licensing is not supplied.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Trjn Da Vinci 70 | 3.4375rem | 400 | 0.96 | 0em | The central home wordmark and the largest poster-style product titles |
| `section-display` | Trjn Da Vinci 70 | 3.0625rem | 400 | 1.02 | 0em | Shop headings and the most prominent white-page product names |
| `menu-display` | Trjn Da Vinci 70 | 2.0625rem | 500 | 1.45 | 0em | The fullscreen menu links and other loud navigation words |
| `support-display` | Trjn Da Vinci 70 | 1.3125rem | 500 | 1.14 | 0em | Short slogans, secondary headings, and sticker-like callouts |
| `body` | Acumin Concept | 0.75rem | 400 | 1.25 | 0em | Product descriptions, explanatory paragraphs, and general body copy |
| `caption` | Acumin Concept | 0.6875rem | 400 | 1.36 | 0em | Tiny product facts, footer notes, and quiet supporting text |
| `micro-chip` | Helvetica Neue | 0.6875rem | 700 | 1.82 | 0em | The tiny language chip and other micro utility labels |
| `shell-body` | Applesystem | 1rem | 400 | 1 | 0em | Plain interface copy where the shell falls back to a standard face |

The hierarchy depends more on scale and spacing than on many font families. The Trjn sizes should feel like posters, labels, and shouted lines rather than like normal webpage headings. The menu style needs enough air to keep each line separate, but it should still read as one stacked block, not as a calm navigation list. The small Acumin sizes should stay plain and compact, with no decorative tracking. Keep the display face as the main identity element; do not replace it with a tidy sans serif or flatten its irregular rhythm.

## Layout

### Poster home

The home page reads as a full-bleed red poster with a centered stacked wordmark. Small photos sit around it at casual angles, like pasted snapshots rather than framed cards. The composition is asymmetrical but still balanced by the scale of the title. The key move is to let the wordmark dominate the field while the surrounding images remain secondary and slightly off-kilter. The page should feel like a wall of printed ephemera, not like a grid of modules.

### Fullscreen menu

The menu turns the same red field into a typographic wall. Three oversized links stack down the left side with generous gaps, a small close mark sits high on the right, and a tiny brand mark anchors the lower-right corner. There is no menu chrome, no drawer outline, and no panel division. The page itself becomes the menu surface. Because the link type is hand-drawn and very large, the layout should keep the text from crowding the edges while still feeling loose and improvised.

### Shop and product pages

The shop switches to white and opens up the page with wide margins and centered headings. Product names sit above bottles or product images, with compact copy blocks underneath. The structure often reads in two columns, but the real flow is vertical: heading, object, explanation, facts, and a red angled call-to-action strip. The button is sticker-like rather than pill-shaped, and it keeps the rough black lettering from the rest of the system. The white page should feel almost like a tasting sheet, with enough breathing room for the bottle to stay central.

### Footer strip

The footer returns to red and compresses into a narrow information band. A black ticker line runs across the top, while small columns of links and legal copy sit below. The brand mark stays small and low, which keeps the footer from competing with the pages above it. The strip feels like a printed endnote rather than a conventional site footer. It should read as the closing panel of the page, not as an afterthought.

## Visual language

This system has a rough, collage-like confidence. The page surfaces feel printed rather than engineered. The red areas behave like poster paper, and the white areas behave like product sheets. The tilted photos and bottle images add a cut-and-paste energy that keeps the brand human and slightly mischievous. The display type is the loudest element: black, uneven, and intentionally uncompromising. The small sans text is only there to support the larger gesture.

Avoid soft shadows, glossy gradients, or chrome-like borders. The visual strength comes from flat color, strong contrast, and the tension between oversized display type and tiny utility text. Rounding is minimal and should stay modest where used. The system works because it allows empty space to remain empty and because each page commits to one strong surface color. The result is playful, but it is not loose: the imagery, color blocks, and typography all pull toward the same blunt, printed mood.

## Components

### Home wordmark stage
- **Anatomy:** Centered stacked wordmark, loose orbit of small photos, no boxed navigation.
- **Surface:** Full action-red field.
- **Typography:** `hero-display` for the central mark; any tiny utility text stays far away from the main read.
- **Shape:** Photos appear as simple rectangular cuts with slight rotation, not as polished cards.
- **Composition:** Keep the wordmark dominant and let the surrounding snapshots frame it without forming a grid.
- **Visible states:** A denser collage version can exist, but the centered logo still has to carry the page.

### Fullscreen menu
- **Anatomy:** Three oversized links, a small close mark, and a tiny brand mark.
- **Surface:** Pure action-red with no panel framing.
- **Typography:** `menu-display` for the links; the close mark and brand mark stay much smaller.
- **Shape:** No container shape; the whole screen is the shape.
- **Spacing:** Large vertical gaps between links keep the list readable and dramatic.
- **Composition:** Left alignment gives the menu a poster feel rather than a centered modal feel.
- **Visible states:** The open state is the main visible state; do not invent extra subpanels.

### Shop card and listing
- **Anatomy:** Product name, bottle or object image, short descriptive paragraph, facts, and a red angled CTA strip.
- **Surface:** White canvas with black or near-black text.
- **Typography:** `section-display` for product names; `body` and `caption` for the smaller explanation.
- **Shape:** The CTA acts like a sticker, with only modest rounding if any.
- **Spacing:** Keep wide breathing room around the product and let the bottle own its column.
- **Composition:** Product art and text should remain separate enough to read at a glance.
- **Visible states:** Multiple cards can line up in a grid, but each one should still feel like a poster fragment.

### Product sheet
- **Anatomy:** Large title, centered support copy, bottle image, price or size facts, and one purchase strip.
- **Surface:** White canvas.
- **Typography:** `hero-display` or `section-display` for the title; `body` for the description; `support-display` for short slogans.
- **Shape:** Flat layout, no heavy border treatment, minimal corner softness.
- **Spacing:** Use long vertical rhythm between title, body, facts, and CTA.
- **Composition:** The bottle remains a primary visual anchor and should not be crowded by surrounding copy.
- **Visible states:** This page can shrink into a single column, but the hierarchy should stay intact.

### Footer band
- **Anatomy:** Top ticker, brand mark, link columns, social links, and small legal text.
- **Surface:** Action-red with black text.
- **Typography:** `caption` or smaller for the utility copy; the ticker can stay in the display voice if it is meant to shout.
- **Shape:** Flat strip, no card framing.
- **Spacing:** Keep the columns loose and let the top ticker have room to run edge to edge.
- **Composition:** Treat the footer as the final printed block on the page, not as a utility appendix.
- **Visible states:** Static information state only.

## Responsive behavior

On smaller screens, keep the same order of importance: title, product, then supporting copy. The collage home should collapse by stacking the snapshots around the wordmark rather than shrinking the logo into a normal header. The menu should keep its large handwritten links legible instead of turning into a standard mobile drawer. Shop listings should move to a single column before the text becomes cramped. If the footer wraps, the ticker and columns should still feel like a red printed strip. The design should remain loud and poster-like at every size, even when the composition compresses.

## Practical implementation guidance

### Preserve
- Keep the red field loud and uninterrupted when the page needs to feel like a poster.
- Keep the display face large and irregular; it is the brand, not a decorative accent.
- Keep product photography isolated as objects or tiles, not as a full-page wash.
- Keep contrast blunt: red/black, white/black, and very little in between.
- Keep the small utility text compact and secondary so it never competes with the display voice.

### Avoid
- Avoid soft pastel palettes, subtle gradients, and anything that turns the site into a polite ecommerce layout.
- Avoid generic header bars, card shadows, and nested rounded containers.
- Avoid shrinking the menu into a conventional app drawer.
- Avoid replacing the hand-drawn display face with a tidy sans serif.
- Avoid overfitting every element to a separate token when one strong role will do.

### Recommended build order
1. Establish the red, black, white, blue, and deeper accent roles.
2. Set the Trjn display roles and the compact Acumin copy roles.
3. Build the full-bleed poster home.
4. Build the fullscreen menu panel.
5. Build the white shop grid and product sheet.
6. Add the footer band and the ticker line.
7. Tighten the small text, spacing, and sticker-style CTA treatment across the whole set.

### Accessibility
- Keep black on red and black on white at a high contrast level.
- Make the close mark and the red CTA strips large enough to hit easily.
- Preserve clear focus styling even if the visible pages feel poster-like.
- Keep the tiny language chip readable without letting it steal attention from the main content.
- Write alt text for bottles, snapshots, and collage pieces with the specific subject in each image.

## Scope note

This guide covers the desktop home poster, fullscreen menu overlay, shop listing pages, product detail pages, and the red footer strip. It does not include mobile reflow, motion, hover or focus styling, checkout steps, or alternate product-family pages.
