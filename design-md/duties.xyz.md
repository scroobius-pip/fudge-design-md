# How duties.xyz is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/duties.xyz-design)

Last updated: 2026-08-08

## Captured pages

[![Hero wordmark above the image rail and the low utility strip](https://pin.fontofweb.com/9565?format=jpg)](https://design.withfudge.com/share/pin-9565)

[Hero wordmark above the image rail and the low utility strip](https://design.withfudge.com/share/pin-9565)

[![Centered black wordmark with top meta row and floating menu pill](https://pin.fontofweb.com/9564?format=jpg)](https://design.withfudge.com/share/pin-9564)

[Centered black wordmark with top meta row and floating menu pill](https://design.withfudge.com/share/pin-9564)

[![Wide crop of the same wordmark with compact meta text and spacing](https://pin.fontofweb.com/9563?format=jpg)](https://design.withfudge.com/share/pin-9563)

[Wide crop of the same wordmark with compact meta text and spacing](https://design.withfudge.com/share/pin-9563)

## Overview

Duties.xyz is built like a postered storefront that happens to hold a website. The page leans hard on a cream canvas, heavy black condensed display type, and tiny mono utility text so the entire identity reads as blunt, graphic, and slightly confrontational. Instead of a conventional product hero, the home page turns the first view into a typographic statement, then breaks the stillness with a low horizontal band of imagery, status lines, and small navigational details.

The system feels editorial rather than corporate. Big words own the composition, while the supporting copy stays quiet and clipped. A single blue action color appears as a link-level accent rather than a broad brand field, so black and cream remain the lasting impression. The image strip and scattered project thumbnails add pace and color without softening the overall severity. Keep the design direct, spacious, and graphic; the strength of the page comes from restraint, scale, and the contrast between monumental lettering and tiny interface text.

## Colors

The palette is almost entirely monochrome, which makes every non-neutral color matter. Cream canvas carries most of the page and gives the large black forms enough breathing room. Ink is absolute black for the headline blocks and the tight utility line. Ink-soft sits just above black so secondary copy can stay readable without competing with the main statement. A thin border tone separates cards and strips without introducing a heavy frame. Blue is reserved for links and small active cues, while the red status dot works as a live-state marker rather than a general accent. Together, these colors split the page into a calm light field, a dark text system, a tiny control vocabulary, and brief signal colors.

| token | value | use |
|---|---|---|
| `action` | `#0000EE` | Links, directional calls to action, and the smallest interactive cues |
| `ink` | `#000000` | Giant display letters, rules, and the strongest text contrast |
| `ink-soft` | `#252525` | Secondary body copy, compact utility lines, and subdued metadata |
| `canvas` | `#F5F2EB` | Main page background and the open negative space around the headline |
| `surface` | `#E6E1D7` | Image-rail backing, quiet chips, and lifted neutral panels |
| `border` | `#CFC9BF` | Hairline separators, card edges, and the thin dividing rules |
| `status` | `#E14B43` | The small off-duty or live-state dot near the top-right meta line |

Light and dark are used in a very narrow way. The light canvas carries the main reading experience, while dark forms appear as lettering, thumbnail content, or compact chips rather than as a separate full-page theme. Photographic color lives inside the project strip and the image blocks, where it breaks the monotone field without taking over the interface. Blue is the only true directional accent, so it should stay rare and precise. If a control needs to feel active, blue should do that work; if a label needs to feel current, the small red dot can do it.

## Typography

Duties.xyz relies on just a few material families, and their roles are very clear. **As Therma** carries the huge black headline and any oversized section break. **Pp Neue Montreal Mono** handles the tiny uppercase utility lines, project metadata, and the status-like fragments that need to feel technical and precise. **System** and **Applesystem** keep the smaller explanatory copy neutral and quiet. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | As Therma | 10rem | 700 | 0.88 | -0.04em | Main headline that spans the upper field |
| `section-display` | As Therma | 7.5rem | 700 | 0.9 | -0.035em | Giant word blocks and wide section statements |
| `feature-display` | As Therma | 5rem | 700 | 0.92 | -0.03em | Secondary poster-scale headings |
| `support-copy` | System | 1.25rem | 400 | 1.45 | 0em | Short supporting lines beneath the headline |
| `body` | System | 0.9375rem | 400 | 1.35 | 0em | General explanatory text and modest captions |
| `body-medium` | System | 0.9375rem | 500 | 1.35 | 0em | Stronger body copy and small button text |
| `label` | Pp Neue Montreal Mono | 0.625rem | 500 | 1.2 | 0.08em | Utility rows, project labels, and small status text |
| `legal` | Applesystem | 0.625rem | 400 | 1.3 | 0.02em | Footer-style details and restrained legal copy |

The typography works because the contrast is structural, not decorative. The condensed display family is stretched into a near-poster scale and held in tight leading so the wordforms feel carved rather than written. The mono family is the opposite: compact, orderly, and mechanical, with enough tracking to keep tiny labels legible inside dense rows. Supporting copy should never become large enough to compete with the headline field; its job is to explain, not to equalize. When the page needs hierarchy, use scale first, then weight, then the mono labels.

## Layout

The layout is built from a few repeating moves: a vast open top field, a thin utility rail, a strong horizontal image band, and a low-information footer strip. The hero is not centered in a conventional marketing sense; it occupies the page like a giant printed banner, with the text block pushed into the upper-left or stretched across the width depending on the crop. Large empty space is intentional and should remain visible. The page needs that openness so the black letterforms feel bold rather than crowded.

The lower half of the home page uses a more modular grid. A wide image rail sits beneath the first message, and the thumbnails are packed closely enough to feel like a running portfolio rather than isolated cards. Small gaps around 10px keep the rail dense and energetic. Larger separations, closer to 60px, are used between major rows so the page can breathe between typographic chapters. The very large 160px and 400px separations are what make the page feel luxurious and poster-like; those distances are not decorative padding, they are part of the composition itself.

Several structures repeat across the screenshots. One crop shows a giant wordmark with a tiny top status row and a floating menu pill anchored low in the frame. Another shows the headline above a strip of work thumbnails and a footer line with contact and status text. These are not separate page languages; they are variants of the same grid and the same hierarchy. Keep the big type, the small mono lines, the image rail, and the sparse footer locked to one visual system.

## Visual language

The visual language is blunt, graphic, and a little playful. The heavy condensed letters feel more like cut vinyl or signage than web typography. They are dense enough to become an image on their own, so the page does not need decorative illustration or soft gradients. That severity is balanced by the tiny mono utility copy, which gives the brand a studio-like, operating-system feel. Together, the two type modes create a rhythm of monument and annotation.

Color enters mainly through the project thumbnails and the small live-state dot. Those thumbnails do important work: they interrupt the black-and-cream discipline with warm photography, bright product shots, and occasional neon-like tones, so the page never becomes flat. The image rail also gives the system a sense of motion even when the page is still. Rounded corners are modest, not plush. The 4px and 8px radii keep cards and controls crisp, while the 32px pill softens only the most compact floating UI. Use roundness as an exception, not a general mood.

The page’s atmosphere is calm because the composition is so controlled. Almost everything aligns on a strict baseline and a small set of gaps. The lack of shadows, glass, and layered chrome keeps the interface honest. What remains is pure contrast: black against cream, giant against tiny, poster against utility, and static text against a running strip of work.

## Components

### Hero wordmark

- **Anatomy:** Two-line or stacked condensed statement, usually with a tiny supporting row nearby.
- **Surface:** Full-bleed canvas with no heavy frame.
- **Typography:** As Therma in a very large scale, tight leading, and negative tracking.
- **Composition:** The text block should dominate the upper field and leave a wide margin of unused space around it.
- **Visible states:** The wordmark can be left-biased in one crop and more centered in another, but it should always feel massive and self-contained.

### Utility row

- **Anatomy:** Small monospaced labels, short status text, and compact separators.
- **Typography:** Pp Neue Montreal Mono at label size with strong consistency in weight and baseline.
- **Spacing:** Tight 10px-like gaps between fragments, with larger interruptions only where the page changes chapter.
- **Surface:** Transparent on canvas, or a very light neutral chip when it needs emphasis.
- **Visible states:** The row should remain quiet even when it includes a current-status marker or contact detail.

### Media rail

- **Anatomy:** A horizontal sequence of thumbnail images and project cards.
- **Surface:** Light neutral backing with a thin border and small corner radius.
- **Spacing:** Dense internal gutters, visually closer to 10px than to roomy card-grid spacing.
- **Composition:** The rail should read as a continuous band of work, not as isolated cards.
- **Typography:** Small captions and labels should stay in the mono system so the rail feels ordered rather than editorially noisy.

### Floating menu pill

- **Anatomy:** A compact rounded control with a short label and tiny decorative marks.
- **Shape:** High-radius pill, roughly 32px in spirit.
- **Surface:** Soft neutral fill with dark text so it reads as a discreet control rather than a button billboard.
- **Spacing:** Minimal interior padding, but enough to keep the control legible and tappable.
- **Visible states:** It should stay visually subdued; its role is to sit in the composition, not to dominate it.

### Footer bar

- **Anatomy:** Contact text, social links, version or status text, and location details.
- **Typography:** Legal or label scale, never larger than the hero system.
- **Composition:** Spread across the width with clear blocks, but keep the copy compact so the bar feels like a footer ledger.
- **Surface:** Canvas or a barely lifted neutral field with thin separators only where needed.
- **Visible states:** Treat this area as the quietest part of the page; it closes the story without adding new visual ideas.

## Responsive behavior

On smaller screens, keep the same order of importance: headline first, utility second, work samples third, footer details last. The display type can reflow into more lines, but it should keep its condensed character and strong black mass. The media rail should be allowed to scroll horizontally or stack in a way that preserves the feeling of a curated run of work. Do not replace the rail with a generic grid if that removes the sense of momentum.

The mono labels should remain small, but not so small that they lose the tight studio feel. If the top status line collapses, preserve the left-to-right reading order and keep the status dot visible. The large open space of the desktop layout will compress on handheld screens, so the composition should use spacing more sparingly while keeping the same visual hierarchy. Rounded pills and tiny controls should gain enough padding to remain easy to tap without changing their visual scale too much.

## Practical implementation guidance

### Preserve

- Preserve the black-and-cream contrast as the core identity.
- Preserve the oversized condensed headline as the first visual event.
- Preserve the mono utility system for meta text, contact details, and small status lines.
- Preserve the dense horizontal image rail as the main source of color and motion.
- Preserve the page’s generous open space so the headline can breathe.

### Avoid

- Avoid soft gradients, glassy surfaces, and decorative shadows.
- Avoid replacing the condensed display family with a generic geometric sans.
- Avoid turning the homepage into a conventional card grid.
- Avoid letting blue become a general brand fill; keep it as a rare directional accent.
- Avoid over-rounding controls and panels; the page should stay crisp and graphic.

### Recommended build order

1. Establish the canvas, ink, border, and action colors.
2. Set the As Therma display hierarchy and the mono utility styles.
3. Build the hero wordmark block with its large open spacing.
4. Add the compact utility row and status indicator.
5. Build the horizontal media rail and its card treatment.
6. Add the floating pill control and the closing footer bar.
7. Check the stacked version so the hierarchy still reads cleanly on narrow screens.

### Accessibility

- Keep black text on the cream canvas at strong contrast.
- Give blue links a second cue, such as underline or clear weight change, so color is not the only signal.
- Make sure the floating pill and any small controls have enough padding for touch use.
- Use alt text that names the work shown in each thumbnail rather than vague labels.
- Keep focus states visible on the small controls and any links in the utility row.
- Do not let the mono labels fall below the size needed for readable line spacing and tap clarity.

## Scope note

This guide covers the desktop home page, including the headline field, utility line, image rail, and footer-style meta rows. Measurements are practical adaptation targets. Alternate breakpoints, motion, hover effects, loading states, and other page templates are not included here.
