# How emmiwu.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/emmiwu.com-design)

Last updated: 2026-08-08

## Captured pages

[![Large orange note with pinned corners and a tilted serif headline](https://pin.fontofweb.com/8632?format=jpg)](https://design.withfudge.com/share/pin-8632)

[Large orange note with pinned corners and a tilted serif headline](https://design.withfudge.com/share/pin-8632)

[![Tighter crop showing the blue memo, green square, and peach note](https://pin.fontofweb.com/8631?format=jpg)](https://design.withfudge.com/share/pin-8631)

[Tighter crop showing the blue memo, green square, and peach note](https://design.withfudge.com/share/pin-8631)

## Overview

Emmi Wu’s home screen feels like a desktop sketchbook spread across a pale tabletop. A thin header sits at the top edge, then the page opens into a loose collage of tilted paper blocks with almost no visual chrome around them. The strongest idea is the contrast between restraint and play: the interface itself stays quiet, while the central notes carry the personality through rotation, color, and mixed typography.

The composition reads as one big editorial moment rather than a conventional portfolio grid. There is plenty of empty canvas around the notes, which lets the orange statement card dominate without needing a larger container or a heavy frame. The smaller green, blue, and peach pieces work like annotations around that main thought. That balance of one loud anchor plus a few small accents is the core of the system.

## Colors

The page is almost entirely light. The off-white canvas gives the collage a soft, paper-like stage, while black and charcoal carry the text and small header marks. Orange is the only forceful accent, so it should stay reserved for the main statement card and any other moment that needs to feel primary. The smaller colored notes can bring in softer green, blue, or peach tones as content pieces, but they should not become new global brand colors.

| token | value | use |
|---|---|---|
| `canvas` | `#F9F8F6` | Main page field and the quiet space around the collage |
| `ink` | `#000000` | Strong text, small marks, and the darkest strokes inside the composition |
| `muted-ink` | `#444444` | Header links, secondary labels, and subdued supporting text |
| `action` | `#F2511B` | The large statement card and the most important accent color |

The visible page is built on a light base, so the accent color carries the emphasis without needing a darker backdrop. No dark surface or photographic layer appears in the home view shown here. If a dark section or a photo-led section is added later, it should still keep the same orange accent as the main signal instead of replacing it.

## Typography

The page mixes an expressive serif with structured mono and a simple sans system face. That combination gives the portfolio a handmade but controlled voice. The serif is the emotional center: it belongs to the large orange note and carries the main introduction. The mono family is better suited to the smaller memo and any explanatory text that should feel a little more mechanical. The system face keeps the header quiet and efficient.

Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---:|
| `hero-display` | Self Modern | 3rem | 400 | 1.15 | 0em | Main orange statement card |
| `note-display` | Ibm Plex Mono | 1.5rem | 400 | 1.2 | 0em | Supporting memo and secondary copy blocks |
| `body` | Figtree | 1.25rem | 400 | 1.35 | 0em | General descriptive text and later-page body copy |
| `navigation` | System | 0.75rem | 400 | 1.2 | 0.12em | Header links and small all-caps interface text |
| `micro-label` | Kode Mono | 0.75rem | 700 | 1 | 0.08em | Tiny marks, shorthand labels, and compact accents |

The hierarchy depends on scale and tone more than on many weight changes. The big serif note should feel roomy, with enough leading to keep each line legible as the card tilts. The mono note can be tighter and more practical, but it should still leave some breathing room so the card feels intentional rather than cramped. The header benefits from very small type with a bit of extra tracking, which keeps it from competing with the collage. The overall effect is calm, handwritten, and slightly eccentric without losing structure.

## Layout

The layout is built from a wide canvas with a centered collage and a minimal top bar. The header sits close to the edge with a low-profile line underneath it, then the content opens into a large blank field. That blank field is important: it creates the feeling of a gallery wall or desk surface, and it gives the tilted notes enough room to look like physical objects instead of widgets.

The collage itself uses offset layering rather than strict alignment. The orange card is the heaviest object and slightly rotated, so it reads first from across the screen. The peach memo overlaps the lower-right area and acts like a supporting note attached to the main idea. The small blue square sits low and left as a quieter counterweight, while the lime square floats higher on the right to break the diagonal. This scattered arrangement gives the page a hand-placed rhythm, but the spacing still feels deliberate because every item keeps a clear amount of air around it.

The desktop layout should preserve that spread-out geometry. The collage does not need a rigid grid container with equal columns; it needs a large field, stable top alignment, and enough room for rotation. The content should remain visually centered, but not perfectly symmetrical. The small irregularities are what make the page feel personal. A tighter viewport should reduce the distance between pieces before it removes the tilt, because the overlap and angle are part of the identity.

## Visual language

This design behaves like a desk full of pinned notes. The orange block is the loudest voice and works as the primary introduction. The peach memo reads like a short clarification. The green square and blue square are tiny punctuation marks that keep the composition from becoming a single flat banner. The page favors cut-paper shapes, handwritten energy, and simple object-like blocks over polished interface chrome.

Edges are crisp and almost no shadowing is needed. The notes feel flat and graphic rather than layered with depth effects. Any sense of dimension comes from overlap, crop, and rotation, not from blur or drop shadow. That restraint is important: if shadows become heavy, the collage will start to feel like a mockup instead of a real portfolio. The small orange fold on the memo gives just enough material detail to keep the shapes from feeling sterile.

The visual tone is playful but not childish. The system mixes an editorial serif with compact technical text, which keeps the page from turning into a scrapbook. The small lime note with dark characters adds a graphic accent, and the blue square at the lower left balances the warm orange card. Together they create a balanced composition where the main statement remains readable while the page still feels handmade and personal.

## Components

### Top bar

- **Anatomy:** Brand name at the left, three uppercase links at the right, and a thin line separating the bar from the content field.
- **Surface:** The bar sits directly on the pale canvas with almost no visible framing.
- **Typography:** Use `navigation` for the links and any other quiet header text.
- **Spacing:** Keep the bar compact with the `header` spacing token so it stays light and does not push the collage down too far.
- **Composition:** The header should act like a label strip, not a navigation shell. Its job is to give the page orientation while staying out of the way of the collage.
- **Visible states:** Only the calm default state is established in the screen shown here. Keep the visual treatment simple and avoid adding a heavy filled header.

### Main statement card

- **Anatomy:** A large tilted rectangle with a short block of serif text, small square pin marks along the top, and a bright orange fill.
- **Surface:** `action` on top of the pale canvas gives this card its dominant weight.
- **Typography:** Use `hero-display` so the note feels like the main introduction.
- **Shape:** Keep the edges clean and paper-like rather than button-like. The screen does not suggest rounded UI corners here.
- **Spacing:** Use `note` padding inside the card so the text can breathe and the tilt still feels balanced.
- **Composition:** This card should remain the anchor of the whole page. The smaller notes orbit around it, but nothing else should exceed its visual power.
- **Visible states:** The card is presented as a static object. Its identity comes from color, angle, and scale, not from interactive chrome.

### Supporting memo

- **Anatomy:** A long rectangular note that overlaps the main card and carries a short explanatory paragraph.
- **Surface:** A warm paper tone with orange text keeps it connected to the main accent without copying the same shape.
- **Typography:** Use `note-display` for the denser copy so the memo feels structured and readable.
- **Shape:** The folded lower-right corner adds a paper detail that helps the memo feel physical.
- **Spacing:** Inner spacing should stay compact but not tight; the note needs enough room to keep each line clear while it sits at an angle.
- **Composition:** Place this memo where it can support the main statement without competing with it. It works best as a secondary voice that overlaps the main card slightly.

### Accent stickers

- **Anatomy:** Two small square accents, one lime and one pale blue, each with a tiny mark or short character set.
- **Surface:** Flat, colorful, and separate from the main text blocks.
- **Typography:** Use `micro-label` for the smallest marks when text is needed, but keep these accents mostly graphic.
- **Shape:** The pieces should feel like cut paper or sticky notes, with crisp edges and a small amount of rotation.
- **Spacing:** Keep them loose around the main collage so they function as balance points rather than as decorative clutter.
- **Composition:** These accents stop the page from becoming too heavy on the left side. They also add a casual desk-note feeling that softens the large serif card.
- **Visible states:** They are static helper pieces. Their job is to add energy and contrast, not to behave like controls.

### Page canvas

- **Anatomy:** A broad, quiet off-white field that holds the header and the collage.
- **Surface:** `canvas` should remain the default background across the home screen.
- **Typography:** Any general supporting copy that appears elsewhere on the page should use `body`.
- **Spacing:** The `page` spacing token should keep the composition from touching the edges too tightly.
- **Composition:** Treat the canvas as active negative space. It is not empty by accident; it is what lets the collage feel deliberate and airy.

## Responsive behavior

The desktop version depends on rotation, overlap, and generous empty space, so smaller widths should simplify rather than compress every element equally. The header can stay slim and horizontal, but the collage should move closer together before it loses its angles. The orange note must remain the first thing the eye finds, so it should keep the greatest scale even when the layout stacks. On narrow screens, the supporting memo and the small stickers should move into a vertical sequence with a slightly reduced tilt so the text stays readable. The page should keep the same paper-note feeling instead of becoming a standard card grid.

## Practical implementation guidance

### Preserve

- Keep the pale canvas as the default field and let the collage supply the color.
- Keep the orange note as the single strongest accent and the largest typographic moment.
- Preserve the mix of serif, mono, and quiet sans text so the page keeps its personal tone.
- Preserve overlap and slight rotation; those are central to the visual language.
- Preserve the small-scale header so the composition stays airy.

### Avoid

- Avoid heavy shadows, glass effects, or polished dashboard chrome.
- Avoid turning the notes into uniform cards with identical corners and spacing.
- Avoid using dark backgrounds to force contrast; this system already has enough contrast from color and scale.
- Avoid crowding the canvas with more labels than the composition can support.
- Avoid making the header as visually strong as the main statement card.

### Recommended build order

1. Establish the pale canvas and slim header line.
2. Place the large orange statement card and confirm its scale.
3. Add the supporting memo and make sure it overlaps naturally.
4. Position the small green and blue accents to balance the field.
5. Tune typography, spacing, and rotation together so the collage feels hand-placed rather than mechanical.
6. Check the layout at narrower widths and reduce tilt only after the spacing is stable.

### Accessibility

- Keep strong contrast for the orange note text and the pale memo text.
- Make header links large enough to read even though they are compact.
- If any tiny sticker is purely decorative, keep it out of the accessibility tree.
- Preserve a clear reading order so the main statement is encountered before the smaller accents.
- Do not let rotation make any essential text too hard to scan on smaller screens.

## Scope note

This guide covers the desktop home screen opening view: the slim top bar and the floating note collage on the pale canvas. It does not cover lower-page project sections, motion, hover or focus styling, alternative templates, or narrow-screen rearrangements beyond the implementation guidance above.
