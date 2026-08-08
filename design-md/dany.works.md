# How dany.works is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dany.works-design)

Last updated: 2026-08-08

## Captured pages

[![Three-column home page with left rail links and a compact monospaced intro](https://pin.fontofweb.com/8350?format=jpg)](https://design.withfudge.com/share/pin-8350)

[Three-column home page with left rail links and a compact monospaced intro](https://design.withfudge.com/share/pin-8350)

[![Tall right gallery panel with a grainy black house mark and tiny media caption](https://pin.fontofweb.com/8349?format=jpg)](https://design.withfudge.com/share/pin-8349)

[Tall right gallery panel with a grainy black house mark and tiny media caption](https://design.withfudge.com/share/pin-8349)

## Overview

dany.works is a quiet studio home page built around a three-column editorial grid. The left rail gives the site its identity and short navigation, the center column behaves like a running note feed, and the right column carries large project imagery with small captions. The whole page feels deliberate and spare: there is no bright campaign color, no boxed dashboard chrome, and no attempt to make every part equally loud.

The strongest impression is typographic. Fragment Mono sets the tone across the page and keeps every part of the layout in the same voice. The logo sits heavy and compact at the top left, the body copy reads like short field notes, and the metadata stays small and hushed. That shared voice lets the page hold both personal writing and project presentation without feeling split into separate systems.

The other core idea is restraint. The design uses value contrast, spacing, and alignment more than decoration. Thin rules, underlined links, and small timestamps keep the structure legible while the right-side imagery supplies the visual weight. The result is a studio page that feels hand-arranged, not templated.

## Colors

The palette is almost entirely neutral. It depends on four grays that move from the brightest field tone to the deepest ink. Those values do all of the work: they define the page field, the dividing lines, the secondary text, and the main reading color. There is no decorative accent token and no color story built from hue. Instead, the page gets character from how close or far the grays sit from one another.

| token | hex | use |
|---|---|---|
| `canvas` | `#B4B4B4` | The lightest page field and broad neutral base |
| `line` | `#888888` | Thin separators, quiet rules, and low-emphasis structure |
| `muted-ink` | `#404040` | Dates, small labels, and secondary notes |
| `ink` | `#1A1A1A` | Logo, primary text, links, and the strongest reading color |

The page reads best when these colors stay in a narrow band. The canvas should remain soft and pale so the black project shapes and dark text can sit cleanly on top. The line color should stay subtle; it is there to separate columns and small metadata groups, not to create a boxy frame. Muted ink belongs to timestamps, label rows, and quieter copy that sits one level below the main statement. Ink is reserved for the parts that need to anchor the page immediately: the logo, the intro line, the note text, and the links.

Because the palette is so limited, contrast comes from placement and scale rather than from decorative shifts. A small label in muted ink can feel distant even when it sits beside a large black mark. A simple underline in the ink color becomes meaningful because nothing else competes with it. The gallery imagery also benefits from the same restraint: the grainy light fields and dark silhouettes work inside the same neutral family, so they feel native to the page instead of pasted on.

## Typography

Fragment Mono is the single family and it carries the full personality of the site. The page uses it as a studio voice rather than as a technical novelty. It makes the content feel written, logged, and filed. The logo gets the largest size and the tightest spacing; the note feed uses a smaller, calmer scale; metadata sits one step lower; and labels use extra tracking so they read like system markers rather than prose.

Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `brand-mark` | Fragment Mono | 2.5rem | 400 | 1 | -0.04em | Top-left logo |
| `intro` | Fragment Mono | 1rem | 400 | 1.5 | 0em | Introductory statement in the left rail |
| `feed-entry` | Fragment Mono | 0.875rem | 400 | 1.55 | 0em | Diary-like notes in the center column |
| `meta` | Fragment Mono | 0.75rem | 400 | 1.4 | 0.04em | Dates and small time stamps |
| `ui-label` | Fragment Mono | 0.75rem | 400 | 1.1 | 0.14em | Small section labels such as social and artifacts |
| `link` | Fragment Mono | 0.875rem | 400 | 1.3 | 0.01em | Underlined navigation and project links |
| `caption` | Fragment Mono | 0.875rem | 400 | 1.35 | 0em | Gallery captions under the artwork |

The hierarchy depends on size, spacing, and rhythm more than on weight changes. That matters because the visual voice is consistent and understated. The logo works because it is bigger and denser than everything else, not because it switches into a different family. The center notes work because the line length is short and the leading is open enough for the text to breathe. The small labels work because their tracking separates them from the reading text while keeping them visually calm.

This scale should stay compact. If the intro grows too large, the page stops feeling like a disciplined work log. If the meta type becomes too tiny, the feed loses its measured cadence. The best balance is a clear top-level mark, a readable middle voice, and a small, deliberate support layer.

## Layout

The layout is a long horizontal grid with three persistent columns. The left column holds the brand, the positioning line, a short pair of link groups, and the social link at the bottom. The center column holds the ongoing stream of dated notes and short statements. The right column is the visual stage: a large image area, a caption row, and a second image block below. The columns are separated by thin vertical rules, which gives the page a careful file-folder structure without making it feel rigid.

The left rail is the narrowest column and acts like an identity sidebar. It starts with the bold brand mark, then drops into a small descriptive paragraph, then into grouped links with clear section labels. There is enough vertical distance between the groups for each part to read as its own module. The social link sits low in the rail so the whole side feels like a structured footer as well as a navigation area.

The center column is the most text-heavy part of the page. Its rhythm comes from short blocks, not from long paragraphs. Dates appear above or near each statement in muted ink, and the spacing between entries is large enough to create a pause before the next thought. A small play label and a time marker appear at the top, which makes the column feel like a living sequence rather than a static article. That upper strip should stay slim and aligned so it does not compete with the notes below it.

The right column carries the largest shapes and therefore needs the most vertical room. The first artwork block fills most of the panel, and the caption sits directly below it with a small pager marker on the same line. The next block continues the visual stack and keeps the page from collapsing into text-only columns. The layout depends on that imbalance: text does the framing, and image blocks do the scale work.

Spacing is tight inside each module and wider between modules. Small label-to-link gaps need to feel hand-tuned, while the distance between columns should stay generous enough to preserve readability. The page works because nothing is too compressed, yet nothing feels sprawling or decorative.

## Visual language

The visual language is studio-like, quiet, and slightly archival. It combines three clear ingredients: monospaced writing, thin structural rules, and grainy artwork. Together they give the page a personal, work-in-progress quality without making it look unfinished.

The monospaced text makes the page feel like a logbook. It is direct, evenly paced, and easy to scan. Short lines of copy are preferred over long paragraphs, which keeps the page feeling disciplined. That discipline is reinforced by the small metadata rows and the careful use of labels. Even when the writing is informal, the layout makes it feel filed and intentional.

The artwork on the right adds texture and scale. The large dark silhouette inside the pale grain gives the page a printed, almost scanned character. The artwork is not glossy or polished; it has a coarse surface that matches the restrained interface. Because the rest of the page is so neutral, the artwork becomes the most expressive part of the composition even though it stays monochrome.

Underlines are important because they quietly mark what can be used. The links do not rely on color alone. They read as links because of their line and placement. Small headings such as ARTIFACTS, LAB, and SOCIAL use uppercase or spaced treatment to make the page feel organized without adding more shapes. The page never asks for heavy shadows, colored pills, or ornamental cards. Its character comes from alignment, value contrast, and the contrast between tiny text and large image fields.

## Components

### Brand rail

The brand rail begins with the large DANY mark, then places a compact positioning statement beneath it. The copy stays narrow and left aligned, which makes the rail feel like a poster margin rather than a marketing header. The section labels are tiny and quiet, and the links sit directly under them with a clear underline. Keep this rail strict and vertical. Its job is to orient the viewer immediately and to leave the rest of the page open for the note stream and gallery.

### Intro statement

The intro statement is short, direct, and stackable. It sits under the logo and before the link groups, so it acts as the bridge between identity and content. The text should remain in the same monospaced family as the rest of the page, but it must stay smaller than the brand mark and larger than the metadata. A comfortable line length is important here because the sentence carries the page’s positioning. Too wide, and it loses the calm; too narrow, and it starts to feel cramped.

### Section labels and links

The labels for ARTIFACTS, LAB, and SOCIAL are tiny markers with extra tracking. They are not decorative headings; they are system cues that tell the reader where the next cluster begins. Links sit below them with a single underline and no extra chrome. Their visual treatment should stay close to the labels so the groups feel related. The link color can match the ink, but the underline must remain visible because it is the main affordance.

### Center note feed

The center column behaves like a stream of entries. Each item is compact, with a short date line and a short note line or two beneath it. The feed should not turn into a card deck. It should remain open, text-first, and vertical. The dates are a lower-emphasis layer in muted ink, while the note text is the primary reading layer in ink. Keep the spacing between entries generous enough to make the page breathe, but do not add borders around every item. The rhythm should come from white space and order, not from containers.

### Play status row

The top of the center column includes a small play label, a progress strip, and a tiny duration marker. This row behaves like an understated status line. It belongs above the notes and should remain visually lighter than them. The progress strip can be treated as a thin neutral bar rather than a strong control. The row is important because it makes the center column feel current, but it must stay secondary to the writing below it.

### Media panel and caption

The right-hand media panel is the loudest visual element in the system, yet it still stays within the same neutral language. The artwork should be large, grainy, and tightly framed. The caption below it needs small type and a compact gap, because it should feel attached to the image rather than separated from it. The pager marker at the far right is tiny and functional. It tells the reader that the panel is part of a series without turning the page into a carousel interface.

### Divider and structural lines

The thin rules between columns are essential. They give the layout its file-like order and prevent the columns from blending together. These lines should remain subtle and consistent. Use them to separate zones, not to enclose content. The page does not need a grid of boxes; it needs a few steady edges that make the columns legible at a glance.

## Responsive behavior

On a narrower screen, the page should collapse by priority rather than by uniform shrinkage. The identity rail comes first, then the note feed, then the media panels. The logo and intro need enough room to stay readable before the gallery starts to compress. The center column can expand to full width earlier than the artwork, because the text is the clearest part of the page and still works well in a single stack.

The smallest layouts should keep the same reading order and the same neutral palette. The links should remain underlined, the dates should stay small, and the media captions should stay close to the artwork. If the columns stack, the vertical gaps should remain disciplined so the page does not become a loose pile of blocks. The page can tolerate narrower line lengths because the content is already short, but it should not lose the sense of a measured rhythm.

## Practical implementation guidance

### Preserve

- Keep the page almost monochrome and let contrast come from value, spacing, and type size.
- Preserve the three-column editorial logic: identity on the left, notes in the middle, media on the right.
- Keep Fragment Mono across the entire interface so the page stays unified.
- Leave links underlined and small labels lightly tracked.
- Keep the artwork grainy and high-contrast so it feels native to the page.

### Avoid

- Avoid bright accent colors, glossy gradients, and soft app-style cards.
- Avoid replacing the text feed with boxed modules or dashboard tiles.
- Avoid heavy shadows, rounded pills, and ornamental separators.
- Avoid mixing in a second family just to create contrast.
- Avoid overfilling the right column with extra copy that competes with the artwork.

### Recommended build order

1. Build the left rail with the logo, intro line, section labels, and links.
2. Add the center note column with its play row, dates, and short entries.
3. Place the right media panel with a large artwork block and caption row.
4. Add the thin vertical separators and tune the column widths.
5. Refine the spacing between labels, links, notes, and captions.
6. Check the stacked version so the reading order survives the collapse.

### Accessibility

- Keep the ink against the canvas light enough for comfortable reading.
- Do not let the grain in the artwork wash out adjacent text.
- Maintain a visible focus style on every link, and do not rely on underline alone for keyboard users.
- Keep the social and project links descriptive so their purpose is clear out of context.
- Preserve readable line lengths in the intro and note feed when the layout narrows.

## Scope note

This guide covers the home page’s three-column studio layout: the left identity rail, the center note feed, and the right media stack. It does not include interior pages, animation, hover treatments, exact mobile collapse rules, or licensing details beyond the short note above.
