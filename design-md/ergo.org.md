# How ergo.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ergo.org-design)

Last updated: 2026-08-08

## Captured pages

[![Cream home hero with a floating logo capsule and lecture cards](https://pin.fontofweb.com/9974?format=jpg)](https://design.withfudge.com/share/pin-9974)

[Cream home hero with a floating logo capsule and lecture cards](https://design.withfudge.com/share/pin-9974)

[![Six-card course grid with rounded dark posters and centered pills](https://pin.fontofweb.com/9973?format=jpg)](https://design.withfudge.com/share/pin-9973)

[Six-card course grid with rounded dark posters and centered pills](https://design.withfudge.com/share/pin-9973)

[![Quote-led home section above the course row and olive footer band](https://pin.fontofweb.com/9972?format=jpg)](https://design.withfudge.com/share/pin-9972)

[Quote-led home section above the course row and olive footer band](https://design.withfudge.com/share/pin-9972)

[![Dark course page with a centered title, essay column, and bio card](https://pin.fontofweb.com/9969?format=jpg)](https://design.withfudge.com/share/pin-9969)

[Dark course page with a centered title, essay column, and bio card](https://design.withfudge.com/share/pin-9969)

## Overview

Ergo uses a restrained academic tone: warm paper surfaces, large serif titles, quiet navigation, and lecture imagery that feels more like a framed title card than a marketing banner. The page reads in chapters. A light home canvas introduces the brand with a floating logo bar and large course tiles. A darker lecture stage then takes over for individual course pages, where white type sits over dimmed photography and a narrow essay column. The closing olive band ends the page with a blunt, almost poster-like finish.

The system depends on contrast and spacing more than ornament. Black and near-black text carry the voice on cream backgrounds. White type takes over on dark lecture panels. Rounded corners soften the cards and buttons, but the overall rhythm stays formal and composed. The result feels scholarly, cinematic, and calm rather than playful or promotional.

## Colors

Ergo’s palette is built from a small number of role colors that switch cleanly between reading surfaces, image tiles, and the closing footer band. The interface does not rely on a bright accent hue. Instead, it uses black, cream, dark brown-black, and olive to separate chapters. Light pages carry the reading experience. Dark panels frame lecture imagery and long prose. The footer shifts into olive as a hard end-stop rather than a call-to-action color. White text is reserved for dark image stages and deep overlays so the page can keep the same serif hierarchy across both bright and dark scenes.

| token | value | role |
|---|---|---|
| `action` | `#000000` | Links, small button text, and the strongest monochrome interaction color |
| `ink` | `#000000` | Main text on the cream page and the dark nav wordmark |
| `canvas` | `#FFFFFF` | Main page background and wide reading field |
| `surface` | `#E9E0D2` | Light pill fills, quiet card surfaces, and soft framing areas |
| `surface-dim` | `#302A24` | Dark image wash and muted lecture overlays |
| `surface-dark` | `#000000` | Course-stage background and deep card grounds |
| `border` | `#D3C6B5` | Hairline rules and pill outlines |
| `muted-ink` | `#5E5850` | Supporting text, metadata, and explanatory copy on light surfaces |
| `on-dark` | `#FFFFFF` | Titles and body text over dark photography and the footer band edge |
| `footer-olive` | `#868C00` | Full-width closing band and the page’s only saturated field |
| `footer-ink` | `#000000` | Footer links, legal copy, and the seal area on the olive band |

The relationship between modes is simple: cream for the home reading surface, charcoal-black for lecture posters and the course detail stage, and olive for the closing band. Black and white remain the fixed interface colors, while the warmer off-white and olive tones expand the page into a calm editorial system without making it feel decorative.

## Typography

Ergo is serif-led and deliberately conservative in its type choices. The page uses classical letterforms for the brand name, hero quotes, course titles, and prose. Larger statements are set with a quiet high contrast and compact leading so they feel like printed lecture headers. Supporting copy stays close to the same family mood, but with more open line spacing. The page does not switch to a sans-serif branding voice; instead, any small utility text stays inside the same literary atmosphere.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Sabon Lt Std | 4rem | 400 | 1 | -0.02em | Large philosophy statement on the home page |
| `section-display` | Libre Baskerville | 3rem | 400 | 1.05 | -0.015em | Course-page title and major sectional heading |
| `card-title` | Times | 2rem | 400 | 1.05 | -0.01em | Lecture-card headlines and inset panel titles |
| `body` | Times | 1rem | 400 | 1.5 | 0em | Course descriptions and long reading copy |
| `navigation` | Libre Baskerville | 1rem | 400 | 1.15 | 0.04em | Top navigation and small action labels |
| `label` | Applesystem | 0.75rem | 400 | 1.25 | 0.06em | Tiny metadata, section tags, and utility labels |
| `legal-copy` | Applesystem | 0.75rem | 400 | 1.4 | 0em | Footer legal lines and small service links |

The visible hierarchy depends on size and spacing more than on many weights. Big page statements sit at 48px or 64px scale, while body copy holds steady at 16px. The serif stack keeps the brand sober and intellectual; the smaller utility styles never break that mood. Verify licensing for these families before production use.

## Layout

The desktop structure is centered and spacious. The home page uses wide side margins, with the core content locked to a strong center column and the lecture grid arranged as evenly spaced cards. The screenshots show 48px horizontal insets and large vertical bands of 88px, 144px, and 192px, which create breathing room between the brand bar, the quote block, the course cards, and the footer. Card groups are separated by 24px gaps, so the grid reads as one family rather than a set of unrelated tiles.

The floating header capsule is a key layout device. It does not dominate the page; it frames the brand and keeps the course catalog feeling editorial instead of app-like. The course tiles below it are all the same broad rectangle with rounded corners and a compact inner layout. Each tile gives the headline the top of the card, keeps the descriptive paragraph low, and lets the image carry the atmosphere.

The course-detail page changes scale instead of switching to a new visual language. It expands into a full-bleed dark field with the lecture title centered across the stage, a long essay column beneath it, and a right-side instructor card that floats like a dossier panel. The footer then resets the rhythm by spanning the full width in olive, with three balanced content zones: primary links on the left, utility links in the middle, and legal/seal information on the right. This makes the page feel organized without needing heavy dividers.

## Visual language

Ergo’s visual language is quiet, serious, and image-led. The lecture cards use darkened photography or painted imagery as a backdrop, then place white serif titles directly on top. That treatment makes every card feel like a poster for a philosophy talk. The imagery is never decorative filler; it is part of the lecture identity and it gives each course a distinct mood. Some cards use a slightly smoky fade across the lower half so the bottom copy remains legible. Others keep the title high and the description low, which produces a stable rhythm across the grid.

Shape is gentle but not soft in a casual way. The cards use a 16px radius, while the pill controls use a more rounded 22px form. That difference matters: panels stay grounded and book-like, while pills feel like lightweight controls that can sit over photos without fighting them. Borders are thin and pale, used most clearly around the floating nav and around the button pills. Shadows are restrained and light, so the page avoids a glossy interface feel.

The olive footer is the most surprising visual note. It is flat, dense, and almost posterish, which makes the end of the page feel intentional. That band gives the site a final visual sentence after a long sequence of cream reading space and dark lecture cards. Keep that ending weight; it is part of the site’s voice.

## Components

### Floating header capsule

- **Anatomy:** A centered brand name at left and three compact navigation items at right.
- **Surface:** Pale, nearly paper-white fill with a thin border and a soft capsule shape.
- **Typography:** `navigation`, with the wordmark reading larger than the links.
- **Shape:** The capsule reads as a 1.375rem pill rather than a square container.
- **Composition:** Keep the brand and links on one line and let the bar feel lighter than the content below.
- **Visible state:** Transparent to the page atmosphere; it does not need a heavy shadow or a loud background.

### Lecture tile

- **Anatomy:** Large course title at the top, a centered pill control, and a short explanatory paragraph near the bottom.
- **Surface:** Dark image field with a muted wash so the white text stays readable.
- **Typography:** `card-title` for the title, `body` for the description, and `navigation` for the pill label.
- **Shape:** `panel` rounding with no oversized ornament.
- **Spacing:** Keep generous inner padding so the title can breathe above the image and the summary can sit low without crowding the edges.
- **Composition:** The tile should feel like a framed lecture poster, not a generic content card.

### Hero statement block

- **Anatomy:** A single oversized philosophical quote, a small attribution line, and a short explanatory paragraph.
- **Surface:** Cream canvas with little decoration beyond type and open space.
- **Typography:** `hero-display` for the statement, `body` for the paragraph, and `label` for the attribution.
- **Spacing:** Large vertical separation above and below the quote so the block feels like a title page.
- **Composition:** Center the statement in the reading column and let the surrounding whitespace do most of the work.

### Course-detail stage

- **Anatomy:** Full-bleed dark image field, centered course title, dense essay column, and a floating instructor bio panel.
- **Surface:** `surface-dark` with a darkened image wash.
- **Typography:** `section-display` for the title, `body` for the essay, and `label` or `legal-copy` for the bio details.
- **Shape:** The bio card keeps the same rounded language as the home tiles, but it sits more like a dossier than a promo card.
- **Composition:** Keep the essay narrow and tall so the page reads like a long lecture introduction rather than a magazine spread.
- **Visible state:** The title must remain readable against the image without relying on bright accent colors.

### Footer band

- **Anatomy:** Left link stack, middle utility links, and right legal/seal area.
- **Surface:** Flat olive across the full width.
- **Typography:** `legal-copy` and small utility text, all in black.
- **Spacing:** Wide negative space between the three zones, with the left and middle groups aligned as vertical lists.
- **Composition:** Treat it as a terminal band, not a promotional panel.
- **Visible state:** The band should feel heavier and more final than the rest of the page.

## Responsive behavior

On narrower screens, the order should stay editorial: brand bar first, then the quote or course title, then the lecture cards, then the footer links. The three-column course grid should collapse into fewer columns without changing the internal rhythm of each tile. The lecture cards should keep their title-first hierarchy and preserve enough padding so the text does not press against the image edges. The dark course-detail stage should stack the bio panel below the essay column when horizontal space tightens, while keeping the full-bleed mood intact. The footer should move from three horizontal zones to a stacked or two-column arrangement while keeping the olive band as the final visual block.

## Practical implementation guidance

### Preserve

- Keep the serif hierarchy intact from the brand name through the course titles and long-form prose.
- Preserve the cream home canvas and the olive footer band; they are major identity anchors.
- Use rounded lecture cards rather than hard rectangles.
- Keep dark lecture imagery muted enough for white titles to sit cleanly on top.
- Maintain wide gutters and generous vertical breathing room around the quote and course grid.

### Avoid

- Avoid bright accent hues, glossy gradients, and playful icon sets.
- Avoid mixing in a modern sans-serif tone for the main page voice.
- Avoid dense borders around every card; the page works better with open space and a few thin rules.
- Avoid tiny text cramped into the image tiles.
- Avoid over-rounding the panels so they start to feel like generic app chrome.

### Recommended build order

1. Establish the serif type scale and the black-on-cream text pair.
2. Build the floating header capsule.
3. Create the lecture tile and repeat it across the grid.
4. Add the quote-led home section with its larger reading scale.
5. Build the dark course-detail stage with the essay column and bio card.
6. Finish with the olive footer band and its three-zone structure.

### Accessibility

- Keep the white-on-dark lecture titles high enough in contrast after the image wash is applied.
- Give every lecture image useful alternative text that matches the topic shown on the card.
- Preserve visible focus styles on the header links, pill controls, and footer links.
- Keep line lengths comfortable in the essay column so long paragraphs remain readable.
- Make sure the footer links stay distinguishable without relying on color alone.

## Scope note

This guide covers the desktop home, course-grid, course-detail, and footer surfaces for ergo.org. It does not include mobile-specific stacking, motion, or state changes. Measurements are practical adaptation targets.
