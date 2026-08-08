# How aihero.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/aihero.dev-design)

Last updated: 2026-08-08

## Captured pages

[![Dark topic index with stacked row groups, thin dividers, and right-arrow links](https://pin.fontofweb.com/10601?format=jpg)](https://design.withfudge.com/share/pin-10601)

[Dark topic index with stacked row groups, thin dividers, and right-arrow links](https://design.withfudge.com/share/pin-10601)

[![Portrait-led signup section with a large headline, dark form card, and yellow submit button](https://pin.fontofweb.com/10599?format=jpg)](https://design.withfudge.com/share/pin-10599)

[Portrait-led signup section with a large headline, dark form card, and yellow submit button](https://design.withfudge.com/share/pin-10599)

[![Latest posts grid with video thumbnails, article cards, and a compact dark header](https://pin.fontofweb.com/10600?format=jpg)](https://design.withfudge.com/share/pin-10600)

[Latest posts grid with video thumbnails, article cards, and a compact dark header](https://design.withfudge.com/share/pin-10600)

## Overview

AIHero is a dark learning site with an editorial rhythm. The page reads like a curated index rather than a marketing landing page: a thin top rail, a large opening question, stacked topic blocks, a portrait-and-signup section, a grid of recent posts, and a quiet footer. The design depends on contrast through scale and surface, not through ornament. The black field stays constant, the white text stays crisp, and the yellow action color is reserved for the most important calls to action.

DM Sans carries almost all visible copy, which gives the page a calm, modern tone even when the headlines are large. JetBrains Mono appears in small badges and file-like labels, so the site feels technical without turning into a code editor. The result is stern, orderly, and instructional. It looks built for people who want to learn how AI work is put together, not for people looking for decorative flourish.

The most important qualities to preserve are the low-lit canvas, the thin separators, the strong headline scale, the monospaced micro-labels, and the one bright yellow action color.

## Colors

The palette is intentionally narrow. Dark surfaces do most of the framing, white handles text and linework, and yellow is the only persistent bright accent. A warmer coral tone appears sparingly in the palette and can support secondary emphasis, but it should never compete with the primary action color. The system stays in a dark register rather than switching into a separate light theme; contrast comes from white type, white rules, and the yellow button color. Thumbnails and portraits introduce lighter values inside the content area, but the UI itself remains dark.

| token | hex | use |
|---|---|---|
| `canvas` | `#0B0B0B` | Main page backdrop and the outer shell of the homepage |
| `surface` | `#0D0D0C` | Section bodies, the author block, and the footer base |
| `surface-quiet` | `#080808` | The deepest rail areas and quieter card backgrounds |
| `surface-raised` | `#191510` | Inset cards inside the signup block and other lifted panels |
| `ink` | `#F4F3F1` | Primary headings, body text, labels, and link text |
| `action` | `#F5C451` | Primary buttons and the strongest call-to-action moments |
| `border` | `#FFFFFF` | Hairline rules, card edges, and outline controls |
| `accent-warm` | `#DC715F` | Small secondary emphasis and occasional warm contrast |

Use the colors as a hierarchy, not as decoration. The page feels coherent because the same few tones repeat: black, near-black, white, and yellow. Keep the yellow isolated so it continues to signal the next step. Keep borders white and thin so the sections feel lightly separated rather than boxed in. Avoid introducing new hues unless they already belong to content imagery.

## Typography

The site uses a paired type system with one dominant sans family and one compact mono family. DM Sans carries the large questions, section headlines, body copy, and button text. JetBrains Mono is limited to badges and file-like labels, which makes the page feel technical in a controlled way. The tiny utility text uses the system UI family for a practical, compact feel. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | DM Sans | 2.75rem | 700 | 0.95 | -0.025em | The opening question and the largest section headlines |
| `section-display` | DM Sans | 2.375rem | 700 | 0.95 | -0.025em | The author introduction and other major page headlines |
| `card-heading` | DM Sans | 1.5rem | 700 | 1.05 | -0.02em | Post titles, subsection heads, and compact featured lines |
| `lead` | DM Sans | 1.09375rem | 400 | 1.7 | 0em | Supporting copy under section headlines |
| `body` | DM Sans | 0.875rem | 400 | 1.45 | 0em | Link lists, explanatory lines, and quiet paragraph text |
| `ui` | -apple-system | 0.6875rem | 600 | 1 | 0em | Tiny utility labels, header actions, and footer metadata |
| `mono-label` | JetBrains Mono | 0.625rem | 500 | 1 | 0.08em | ARTICLE / VIDEO chips and file-style labels |

The page’s hierarchy comes from scale and spacing more than from weight changes. Large headlines are bold but not cramped. Supporting copy opens up enough to read cleanly against the dark background. The mono labels are small, uppercase, and slightly spaced out so they work as status marks instead of as body text. Keep this hierarchy intact; it is one of the clearest parts of the site’s voice.

## Layout

The layout is a centered dark shell with thin horizontal rules and a disciplined grid. The top rail holds the logo, the primary navigation, utility links, and the yellow action button. It is narrow in height and visually quiet, so the opening question gets the first strong visual turn.

The first content block is a two-column index. On the left, a large question and a short subtitle define the topic. On the right, a vertically stacked list presents the matching articles or videos. Each row uses a tiny mono badge, a title, and a right-facing arrow. The rows are separated by hairlines and generous vertical spacing, which keeps the grid readable even when it is long.

The author block changes the rhythm. A large portrait sits on the left, floating against the black field with very little framing. The right side carries the headline, biography copy, and a dark signup card. That card has enough weight to feel important, but it still sits inside the page rather than breaking out of it.

Lower on the page, the post grid uses thumbnail-first cards. The thumbnails are wide, the captions are compact, and the titles sit close to the image to keep the block feeling editorial rather than promotional. The footer collapses into columns of links and small utility text under the same centered width. On narrow screens, the same reading order should hold: headline, supporting copy, media, then links. Stack the right-hand lists under their headings instead of splitting the section into separate visual islands.

## Visual language

The visual language is restrained and teachable. It uses darkness, spacing, and linework to create structure. There is very little shadow. There is very little color. The page gets its energy from contrast between a huge headline and a tiny mono badge, or between a bright yellow button and a near-black surface.

The interface feels editorial because the blocks are allowed to breathe. Wide empty zones surround the portrait and the hero question. Section borders are thin and almost neutral. Cards do not try to float above the page; they sit on it. That flatness keeps the page serious and readable.

Media carries much of the visual variation. Portraits and thumbnails are the only places where the page becomes lively. Those visuals sit inside rounded rectangles and dark frames, which keeps them aligned with the rest of the system. The yellow action color is the strongest repeat marker. It appears in the top-right CTA and in the signup button, so the user always knows where the page expects a next step. Keep that repetition; it is the most obvious way the page organizes attention.

## Components

### Header

The header is a thin dark rail with a left-aligned avatar and wordmark, a compact center navigation, right-side utility links, and a yellow CTA button. The active navigation item sits inside a rounded dark pill, which gives the header a subtle current-state cue without adding extra color. The visual treatment is light-touch: small text, generous horizontal spacing, and a clean line under the rail. The header should stay visually subordinate to the opening headline.

### Topic index row

Each row in the opening index combines a tiny mono label, a large question, a short supporting line, and a right-hand list of related items. The row feels like a section inside a catalog. The left column carries the intent; the right column carries the examples. The row divisions are minimal: a hairline and ample vertical rhythm. The tags are uppercase and compact, and the arrows on the far right keep the links feeling directional without becoming heavy icons.

### Author block

The author block uses a large portrait against the black field and a headline-plus-copy stack to the right. The portrait is the strongest image in the page and should be given space to breathe. The copy is calm and direct, with a bold headline and a medium-weight paragraph. The portrait, the headline, and the signup card work together as one composition: human presence, explanation, then conversion.

### Signup card

The signup card is a lifted dark panel with a border, a strong heading, a smaller supporting sentence, two fields, and one yellow submit button. It uses more surface contrast than the surrounding page, but it still belongs to the same dark system. The inputs are narrow and quiet; the button is the only saturated element in the block. Keep the legal line small and low-contrast so it does not compete with the action.

### Post cards

The post cards use wide thumbnails with rounded corners, a small label above the title, and a compact title line below. The thumbnails are the brightest part of this area, but the surrounding surfaces remain dark so the grid does not feel busy. The labels can alternate between article and video states, while the titles stay in DM Sans. One title may be highlighted in yellow, but that treatment should remain rare and reserved for emphasis.

### Footer

The footer is a low-key column matrix with sparse links and small utility text. It should feel like the end of a long reading path rather than a second hero. The links are quiet, the column spacing is generous, and the overall contrast steps down from the main page. A small theme toggle or utility pill fits this zone because it continues the page’s compact control language.

## Responsive behavior

On smaller screens, the design should preserve the order of attention rather than the exact desktop grid. Keep the opening question first, then the supporting copy, then the related items. The portrait should remain prominent but can drop below the copy if needed. The signup card should stay intact and should not be split into disconnected pieces.

The wide post grid should collapse into a single column with clear spacing between cards. Thumbnails should keep their rounded corners and should remain wide enough to read as editorial, not as icon blocks. The header can tighten, but the CTA should remain visible and distinct. The important thing is not to preserve the desktop columns at any cost; it is to preserve the page’s reading order, the dark surfaces, the mono labels, and the one yellow action color.

## Practical implementation guidance

### Preserve

- Keep the page mostly flat. Use thin rules and spacing instead of deep shadows.
- Keep DM Sans as the dominant voice and JetBrains Mono as a small label family.
- Keep the yellow action color reserved for the main CTA buttons.
- Keep the opening question very large and very short.
- Keep thumbnails, portraits, and form panels aligned to the same centered dark grid.

### Avoid

- Avoid adding extra accent colors that dilute the yellow CTA.
- Avoid glossy gradients, heavy blur, or decorative glow effects.
- Avoid turning every row into a card with a thick border.
- Avoid mixing many font families or giving the mono family body-sized paragraphs.
- Avoid centering long link lists; the page works because the lists read as an ordered column.

### Recommended build order

1. Build the dark shell, header rail, and centered width.
2. Add the opening question and supporting subtitle.
3. Build the stacked topic index with mono tags and arrow links.
4. Add the author portrait and signup card composition.
5. Add the post grid with thumbnail cards.
6. Finish with the footer columns and utility row.

### Accessibility

- Keep the yellow button text dark enough to remain legible.
- Give the active navigation item a shape cue, not just a color cue.
- Keep the mono labels readable at small sizes by maintaining enough tracking and contrast.
- Make all thin rules decorative only; do not rely on them as the only structural cue.
- Preserve visible focus states on links, inputs, and both button styles.

## Scope note

This guide covers the desktop homepage surface shown here: the top rail, the topic index, the author/signup block, the latest-posts grid, and the footer. It does not specify mobile breakpoints, motion, hover or focus behavior, hidden states, or content outside those sections. Verify licensing for these families before production use.
