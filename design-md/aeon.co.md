# How aeon.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/aeon.co-design)

Last updated: 2026-08-08

## Captured pages

[![White open-menu screen with stacked colored subject names and sparse utility links](https://pin.fontofweb.com/6524?format=jpg)](https://design.withfudge.com/share/pin-6524)

[White open-menu screen with stacked colored subject names and sparse utility links](https://design.withfudge.com/share/pin-6524)

[![Black essay hero with giant serif title, brain artwork, and tiny caption line](https://pin.fontofweb.com/6525?format=jpg)](https://design.withfudge.com/share/pin-6525)

[Black essay hero with giant serif title, brain artwork, and tiny caption line](https://design.withfudge.com/share/pin-6525)

[![Quiet footer with newsletter signup, link columns, and small legal text](https://pin.fontofweb.com/6526?format=jpg)](https://design.withfudge.com/share/pin-6526)

[Quiet footer with newsletter signup, link columns, and small legal text](https://design.withfudge.com/share/pin-6526)

## Overview

Aeon is designed like a serious magazine that knows when to step back. The system is built from three clear modes: a white menu panel with color-coded subject names, a black essay stage with a large serif headline, and a pale footer that quiets the page again. The base palette stays restrained, so the subject colors and the red action color feel deliberate rather than decorative.

The page hierarchy is simple to read. Utility labels sit small and tight. Body copy stays calm and open. The hero title takes over the page with a much larger serif voice, while the subject menu turns editorial categories into big, highly legible signposts. That contrast between quiet reading surfaces and theatrical statement surfaces is the core of the brand.

## Colors

Aeon uses a limited set of interface colors and lets the page modes do the rest. White and black form the reading base. The essay hero flips the surface to black and keeps the title and supporting copy white. The subject menu returns to white and uses distinct hues to identify sections. The footer settles into a pale, low-noise field where dark text and one strong button color carry the emphasis. The palette works best when the colored words stay concentrated in navigation, topic labels, and the primary button; the rest of the interface should remain monochrome.

| token | value | use |
|---|---|---|
| `action` | `#9D120D` | The subscribe button and the strongest warm emphasis, including the Society subject color |
| `ink` | `#000000` | Main reading text, top utility labels, and monochrome UI marks on light surfaces |
| `muted-ink` | `#666666` | Secondary body copy, footer explanation, and small supporting notes |
| `quiet-ink` | `#999999` | Tiny caption text, legal lines, and the faintest supporting metadata |
| `canvas` | `#FFFFFF` | The open menu field, footer ground, and the page's main light surface |
| `surface-dark` | `#000000` | The essay hero backdrop and the darkest reading stage |
| `topic-philosophy` | `#0C776D` | The Philosophy subject label in the open menu |
| `topic-science` | `#035A6D` | The Science subject label in the open menu |
| `topic-psychology` | `#940B52` | The Psychology subject label and the most saturated raspberry accent |
| `topic-culture` | `#C16E15` | The Culture subject label and the warm ochre accent |

## Typography

Aeon combines one expressive serif with two sober sans families. Acaca carries the essay voice and the wordmark-scale emphasis. Atlas Grotesk handles the menu items, body copy, footer text, and other reading surfaces. Atlas Typewriter is reserved for compact utility labels and small, space-separated interface cues. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Acaca | 4.5rem | 700 | 0.95 | -0.02em | Essay title and the largest statement line |
| `section-display` | Acaca | 3.5rem | 700 | 0.96 | -0.02em | Large section headline and related editorial leads |
| `menu-topic` | Atlas Grotesk | 2.75rem | 700 | 0.95 | -0.03em | Open-menu subject names such as Philosophy and Science |
| `footer-heading` | Atlas Grotesk | 1.25rem | 700 | 1.2 | 0em | Newsletter heading and other bold footer prompts |
| `lead` | Atlas Grotesk | 1.125rem | 400 | 1.5 | 0em | Hero supporting line and short explanatory copy |
| `body` | Atlas Grotesk | 1rem | 400 | 1.55 | 0em | Main reading text, menu links, and body paragraphs |
| `meta` | Atlas Grotesk | 0.875rem | 400 | 1.45 | 0em | Caption text, bylines, and small supporting lines |
| `legal` | Atlas Grotesk | 0.875rem | 400 | 1.45 | 0em | Footer legal copy and the quietest small print |
| `utility` | Atlas Typewriter | 0.75rem | 600 | 1.2 | 0.14em | MENU, SEARCH, CLOSE, and other compact labels |

The hierarchy depends on scale and weight more than on many font families. The serif title is tightly set and feels editorial, not theatrical in a decorative way. The sans text is measured and readable, with enough space to keep the article shell calm. Utility text uses extra tracking so the small labels stay legible against the open white field and the black hero stage.

## Layout

Aeon's layout is built around wide breathing room and a centered reading column. The open menu is a tall white field with two distinct columns: a left stack of large colored subject names and a right stack of plain section links. There is a lot of untouched white space around both columns, which keeps the page feeling light even though the subject names are oversized. Utility items sit apart from the subject stack and do not compete for attention.

The essay hero changes the tone completely. A wide black rectangle sits inside the page with generous white margins around it. The main image occupies most of that stage, and the title lands low enough to overlap the image without feeling cramped. The caption is tiny and quiet, anchored beneath the image rather than inside it. That structure lets the art carry the mood while the headline stays unmistakable.

The footer returns the page to a pale ground and compresses the content into a neat information band. Link columns sit on the left, social links and the newsletter block sit to the right, and the legal line runs along the bottom edge in small gray text. The layout feels airy because the footer uses spacing to separate groups instead of heavy borders or boxed cards.

The recurring spacing rhythm is simple: compact gaps for utility lines, body-sized gaps for short text blocks, larger gaps for section changes, and very large white margins at the page edges. The system should keep that hierarchy even when the screen narrows. The page works because the most important elements are separated by space, not by ornament.

## Visual language

Aeon's visual language is editorial and restrained. The interface does not try to look like a dashboard. It looks like a magazine that has chosen its emphasis carefully. Black and white carry the structure. Color appears only where the page needs a subject label, a strong action, or a section identity. That makes the colored menu words feel important without turning the whole page into a palette sample.

The open menu is the clearest example of this idea. Each section name has its own hue, and those hues act like a reading key. Philosophy is green-blue, Science is deeper blue, Psychology is raspberry, Society is brick red, and Culture is ochre. The result is not decorative variety; it is a taxonomy the eye can scan quickly. The typography stays large and heavy so the colors read as part of the editorial system rather than as links that happen to be colored.

The essay hero uses contrast in a different way. The black field gives the brain artwork a stage-like presence, and the white serif title becomes the sharpest object on the page. The small caption under the hero is deliberately low-contrast, so it stays informative without pulling the reader away from the headline. The page also uses very little surface depth. Shapes are mostly flat, edges are crisp, and the few strong accents are carried by text weight and color instead of shadow.

The footer keeps that same discipline. It is quiet, tidy, and low in visual drama. The red subscribe button is the only assertive block in the area, which makes the sign-up action easy to find without turning the entire footer into an ad unit.

## Components

### Subject menu

The open menu is a two-column editorial index on a white field. The left column carries the large subject names, each in a distinct color. The right column carries plain navigation links such as Essays, Videos, Popular, and About. Above them, the close label and small social icons sit in a thin utility row. Below, the smaller utility links for Donate, Newsletter, psyche, Sophia Club, and Search sit apart from the subject stack.

The subject list is the visual anchor. It should stay large, bold, and tightly stacked, with enough vertical separation that each subject feels like an entry rather than a paragraph. The right column should remain quieter, using the sans family at a much smaller scale so the subject names keep their authority. The component depends on openness: no boxed cards, no heavy separators, and no unnecessary controls crowding the list.

### Essay hero

The hero is a black stage with a large image and a centered title. The wordmark and utility links sit on the top edge, small enough to stay out of the way. The headline is a large serif line that lands near the lower third of the stage. A short supporting sentence sits below it in smaller white text, and the image caption appears beneath the stage in muted gray. A round listening control appears below the hero area and uses a stronger accent color.

The component should treat the image and the title as one composition. The image supplies the atmosphere, while the title supplies the editorial claim. The supporting line is short and centered, so it reads as a deck rather than as a block of article copy. The caption must stay visibly quieter than the title and deck, and the listening control should remain a small, obvious action rather than a large panel.

### Footer newsletter block

The footer newsletter block is a compact form set on a pale surface. A bold heading introduces the area, followed by a short line of supporting text, a text field for email, two small checkbox options, and a rectangular red subscribe button. The button uses the strongest warm color in the system and is the only element in the footer that should feel forceful. Beneath the form, the privacy note and legal line stay small and gray.

This block should feel direct and practical. The text field and the checkboxes should be easy to scan, and the heading should be strong enough to pull the eye without turning the block into a banner. The spacing should keep each step of the form readable in a single glance.

### Footer link grid

The footer link grid organizes the lower page into compact columns. It includes editorial links, company links, community links, and social links. The structure is calm and regular, with links set in small sans text and enough spacing between columns to avoid a dense wall of copy. The grid should read as an index, not as a content block.

### Utility labels and icon row

The utility row appears in the menu and the hero header. It carries short labels such as MENU, CLOSE, and SEARCH, plus small social icons. These cues are small, spaced, and monochrome. They should use the typewriter voice or a similarly compact utility style so they remain legible without competing with the essay title or subject names.

## Responsive behavior

When space narrows, the system should preserve the same order of importance: utility labels first, subject names next, title and image next, footer details last. The menu should collapse before the subject words become too small to read. If the open menu becomes a single column on narrow screens, the colored subject stack should stay intact and should not be broken into boxed chips.

The hero should keep the title scale as long as possible, even if the image crop changes. The artwork can crop more aggressively than the headline because the headline is the page's anchor. The caption may wrap, but it should remain separated from the image and should not drift into the title area.

The footer should collapse from multiple columns into a narrower stack while keeping the newsletter block easy to find. The red button should stay prominent, and the legal line should remain the quietest text in the section. Across all smaller widths, the brand should keep its large vertical rhythm and avoid compressing the page into a dense app layout.

## Practical implementation guidance

### Preserve

- Keep the system editorial, not app-like.
- Keep black and white as the structural base.
- Keep subject colors concentrated in the menu and the strongest action color concentrated in the subscribe button.
- Keep Acaca for the large article voice and Atlas Grotesk for reading text and footer copy.
- Keep utility labels small, spaced, and intentionally quiet.

### Avoid

- Avoid adding gradients, soft shadows, or glossy surfaces.
- Avoid broad use of color outside subject labels and the main button.
- Avoid rounding everything into pills or cards.
- Avoid replacing the subject menu with a dense navigation drawer.
- Avoid shrinking the title too early on smaller screens.

### Recommended build order

1. Establish the monochrome base surfaces and the subject color set.
2. Set the type hierarchy and the utility label style.
3. Build the open menu as a spacious two-column index.
4. Build the essay hero with image, title, deck, caption, and listening control.
5. Build the footer link grid and newsletter form.
6. Tune responsive collapse so the page stays airy instead of cramped.

### Accessibility

- Keep strong contrast wherever white text sits on the black hero stage.
- Do not rely on color alone for subject meaning; each colored topic must also be fully readable as text.
- Make the newsletter field, checkboxes, and subscribe button keyboard reachable with clear focus treatment.
- Keep caption text and legal copy legible at small sizes.
- Ensure utility labels remain readable even when they are visually quiet.

## Scope note

This guide covers Aeon's desktop essay shell: the open subject menu, the black hero stage, the listening row, and the pale footer newsletter area. Measurements are normalized to a 2px rhythm. Alternate article templates, narrow-screen rearrangements, motion, hover states, and other page families are not included.
