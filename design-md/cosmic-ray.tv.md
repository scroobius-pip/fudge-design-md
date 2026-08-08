# How cosmic-ray.tv is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cosmic-ray.tv-design)

Last updated: 2026-08-08

## Captured pages

[![Large DAN25 hero board with stacked pastel gradient bands](https://pin.fontofweb.com/10400?format=jpg)](https://design.withfudge.com/share/pin-10400)

[Large DAN25 hero board with stacked pastel gradient bands](https://design.withfudge.com/share/pin-10400)

[![Dense storyboard grid of numbered black tiles with thin white rules](https://pin.fontofweb.com/10401?format=jpg)](https://design.withfudge.com/share/pin-10401)

[Dense storyboard grid of numbered black tiles with thin white rules](https://design.withfudge.com/share/pin-10401)

[![Bright poster wall mixing pale cards, bold DAN25 type, and gradient panels](https://pin.fontofweb.com/10402?format=jpg)](https://design.withfudge.com/share/pin-10402)

[Bright poster wall mixing pale cards, bold DAN25 type, and gradient panels](https://design.withfudge.com/share/pin-10402)

[![Dark motion boards with purple streaks and compact preview tiles](https://pin.fontofweb.com/10287?format=jpg)](https://design.withfudge.com/share/pin-10287)

[Dark motion boards with purple streaks and compact preview tiles](https://design.withfudge.com/share/pin-10287)

## Overview

cosmic-ray.tv uses a strict black shell so the work can carry almost all of the personality. The page feels like a studio wall made for conference-film material: a small logo row, a large headline stage, dense storyboard grids, bilingual explanatory copy, and poster panels that bring the energy. The interface itself stays restrained. White text, white rules, square edges, and deep black gutters keep the page quiet enough for the art to lead.

The strongest idea is separation. Each board feels like a pinned chapter rather than a card in a feed. The oversized DAN25 title and the compact Tn wordmark give the header and hero a split voice: one part editorial, one part branded. Below that, the page alternates between hard-edged grid studies and broader copy blocks. That rhythm makes the site feel specific to a production studio, not to a generic portfolio template.

## Colors

| token | value | use |
|---|---|---|
| `canvas` | `#000000` | Main shell, page gutters, and the dark stage around every board |
| `ink` | `#FFFFFF` | Headlines, labels, frame numbers, and high-contrast copy on black |
| `border` | `#FFFFFF` | Hairline rules, tile frames, and thin separators inside the grids |
| `accent-cyan` | `#79DFFF` | Bright poster bands, cool glow strips, and the lightest art passages |
| `accent-violet` | `#B23CFF` | Purple gradients, energetic bars, and the strongest color flare |
| `accent-green` | `#31E38F` | Thin neon breaks, signal-like accents, and cross-panel highlights |
| `accent-blue` | `#5E77FF` | Deep cool transitions, motion tiles, and secondary luminous panels |

The color system is deliberately spare at the interface level. Black holds the page together, and white carries the reading path. The accent colors live inside the poster art, the glowing bars, and the motion fragments. They make the work feel electric without turning the shell itself into a color field. That balance matters: the page should stay calm at the container level and vivid inside the boards.

The relationship between dark, light, photographic, and accent treatment is simple. Dark canvas creates the studio wall. Light text and rules create structure. Photographic or film-like panels provide texture, depth, and movement. Accent color appears inside those panels, where it acts like stage light instead of a page-wide brand palette. If those hues spread into every control, the system loses its discipline and the reading path becomes noisy. Keep the monochrome shell steady so the image-based color can do the expressive work.

## Typography

The hierarchy uses four families, each with a narrow job. Tn handles the compact logo wordmark. Neue Haas Grotesk carries the large DAN25 headline and the section-level display lines. Apple Sd Gothic Neo supports the Korean and mixed-language paragraphs so the longer copy stays even and readable. Applesystem covers the smallest labels, navigation, and legal lines. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `site-wordmark` | Tn | 2rem | 400 | 1 | 0em | Top-left logo and the compact brand mark in the shell header |
| `hero-display` | Neue Haas Grotesk | 3.5rem | 700 | 0.95 | -0.03em | Main case-study title and the loudest display text |
| `section-display` | Neue Haas Grotesk | 2.25rem | 700 | 1 | -0.02em | Section headers and the larger supporting display lines |
| `body` | Apple Sd Gothic Neo | 1rem | 400 | 1.5 | 0em | Main paragraph copy in Korean or mixed language |
| `body-strong` | Apple Sd Gothic Neo | 1rem | 500 | 1.45 | 0em | Short emphasis lines and supporting sentences |
| `navigation` | Applesystem | 0.875rem | 500 | 1.25 | 0em | Top links, utility text, and small interface labels |
| `caption` | Applesystem | 0.75rem | 500 | 1.2 | 0.08em | Frame numbers, tiny tags, and corner labels |
| `legal` | Applesystem | 0.75rem | 400 | 1.5 | 0.02em | Footer-style notes and low-priority metadata |

The typography feels compact, but it is not cramped. Large display text is heavy enough to hold its ground against the artwork, while the smaller label styles stay crisp without becoming decorative. The page depends on the contrast between large and small rather than on a broad mix of font styles. Keep the logo face isolated to the wordmark area, and let the grotesk and system faces carry the rest of the hierarchy. That keeps the page edited and confident.

The line structure also matters. The bigger headline lines should feel wide and assertive, while the body copy should stay calm enough for longer reading in both Korean and English. Small labels should not become ornamental. They work because they are direct, compact, and easy to scan against the black shell.

## Layout

The layout works like a long black runway with large breaks between chapters. The first visible area is centered and dramatic, with a small header above a wide hero board. After that, the page switches between tight contact-sheet grids and broader copy stages. Each section should feel like a different board pinned to the same studio wall. The structure is not a repeating card list; it is a sequence of authored compositions.

Spacing does most of the structural work. Small pads inside the storyboard cells create dense, technical panels. Much larger section spacing creates the pause between the hero, the grids, and the copy blocks. That contrast between tiny internal spacing and broad chapter spacing is one of the site’s defining traits. It keeps the page from flattening into a continuous scroll of equal panels. The eye should always know when it has moved from one chapter to the next.

The wide poster boards use broad columns and strong centered weight. The grids use many small frames with consistent rules and labels. The bilingual copy area expands the reading width so Korean and Latin text can sit side by side without feeling squeezed. On narrower layouts, the order should stay story-first: header, hero board, grid studies, copy, then darker motion panels. The page should narrow by stacking, not by shrinking the art until it loses scale. The visual logic is large and editorial, so the layout should preserve that scale wherever possible.

The most important layout habit is to keep the black shell visible around every chapter. That empty space is not wasted space. It is the frame that makes the poster panels feel like display objects and makes the contact sheets feel like work surfaces. Without that breathing room, the whole site would collapse into a dense collage. The page needs room at the edges so the boards feel deliberate rather than packed together.

## Visual language

The visual language is direct, rectangular, and cinematic. Hard edges dominate. White labels sit against black fields. Thin rules and small numbering give the storyboard sections a production-room tone. The hero boards feel like printed conference posters enlarged to screen size, while the smaller grids feel like review sheets or editing boards. The page rarely relies on shadow; separation comes from contrast, gutters, and layout rhythm.

Color behaves like light on a stage. Cyan and violet create the strongest poster glow. Green and blue act as interruptions inside the motion fragments and the brighter panel bands. Dark sections stay mostly monochrome, which keeps the color from turning into decoration. The work feels strongest when the shell remains restrained and the art supplies the energy. That split between calm interface and vivid content is the core of the system.

The site also uses a strong sense of movement without needing decorative motion in the interface. Streaks, blurred bands, cropped frames, and layered panels already suggest speed and flow. Keep the surrounding UI still so the art can imply motion on its own. The result should feel like a curated studio archive where every board belongs to the same project, even when the surfaces change from board to board.

## Components

### Shell and header

- **Anatomy:** A small logo at the left, simple navigation nearby, and very little ornament.
- **Surface:** The header sits directly on the black canvas without a separate container.
- **Typography:** Use the Tn wordmark for the logo and Applesystem for the small navigation line.
- **Shape:** Keep the top edge square and spare. There is no need for soft chrome.
- **Composition:** The header should guide the page, then step back. It should not compete with the hero board below it.

### Hero poster board

- **Anatomy:** A dominant title, a large brand mark, supporting bilingual text, and a small line of project copy or date text.
- **Surface:** The board reads as a bright object inside the dark shell, with strong contrast and poster-like color bands.
- **Typography:** Use `hero-display` for the biggest title and `body` or `body-strong` for the supporting paragraphs.
- **Shape:** The panel should stay firm and rectangular. The layout feels stronger when the edges are hard.
- **Composition:** Keep the biggest wordmark low in the board and let the text blocks balance above or beside it. The result should feel like a conference poster, not a banner ad.

### Storyboard grid

- **Anatomy:** Many small cells, each with a tiny number and a short image or text fragment.
- **Surface:** Mostly black, with white rules and small bright inserts.
- **Typography:** Use `caption` for the frame numbers and tiny labels.
- **Shape:** Thin borders and square corners make the grid feel technical and exact.
- **Composition:** Preserve the contact-sheet rhythm. Each tile should carry one idea cleanly, not several ideas at once.
- **Visible states:** Some tiles are dark and quiet; others are bright and image-heavy. Keep that variation so the grid feels like a real working board.

### Bilingual copy block

- **Anatomy:** A large display heading, then English and Korean paragraph columns.
- **Surface:** A black or near-black ground keeps the text readable and serious.
- **Typography:** Use `section-display` for the heading and `body` for the paragraphs.
- **Spacing:** Leave enough room for both language columns to breathe. The copy should feel deliberate, not squeezed.
- **Composition:** The heading should lead, and the paragraphs should settle underneath it with steady line lengths.
- **Visible states:** The block feels strongest when the heading is bright and the body text softens just enough to support it.

### Motion-art panels

- **Anatomy:** Purple arcs, cyan streaks, blurred tracks, small interface cards, and cropped preview tiles.
- **Surface:** These panels belong to the artwork itself, so they can carry the more vivid color treatment.
- **Typography:** Any overlaid labels should stay small and unobtrusive.
- **Composition:** Let the imagery do the loud work. Do not add extra chrome or shadow around it.
- **Visible states:** Some panels are open and luminous; others are compressed and darker. Keep that contrast because it gives the page its chapter-by-chapter pace.

## Responsive behavior

When the layout narrows, the reading order should stay the same even if the structure stacks. The header remains first, the hero board stays dominant, the grid studies follow, and the bilingual copy remains readable. Reduce column count before reducing the type hierarchy. If a contact sheet can no longer hold every tile in one row, break it into clean stacked rows instead of shrinking the tiles until they lose meaning. The page should still feel like a studio wall, only in a narrower frame.

The poster boards should remain the most important visual objects on smaller screens. Their titles, marks, and support copy should stay attached to the same board so the composition still reads as one authored unit. If the bilingual copy collapses from two columns to one, keep the line lengths comfortable and preserve the calm editorial tone. The goal is not to invent a separate phone language. The goal is to keep the same visual language readable in less space.

## Practical implementation guidance

### Preserve

- Keep black as the dominant shell color and white as the main reading color.
- Let the cyan, violet, green, and blue accents live inside the poster bands and motion strips.
- Preserve the dense contact-sheet feeling of the grids and the billboard scale of the hero boards.
- Keep the font set tight: one logo face, one display face, one Korean text face, and one system face for small labels.
- Hold generous vertical space between chapters so each board feels separate and intentional.

### Avoid

- Avoid turning the page into a soft-card portfolio layout.
- Avoid rounded corners that would make the boards feel casual.
- Avoid adding a bright action color across the whole interface.
- Avoid squeezing the bilingual text into narrow columns that force awkward breaks.
- Avoid extra chrome such as floating badges, decorative shadows, or background texture that does not belong to the boards.

### Recommended build order

1. Set the black shell, white text, and core type hierarchy.
2. Build the header and the large hero poster board.
3. Add the dense storyboard grid with its tiny labels and rules.
4. Add the bright poster wall with the high-contrast art panels.
5. Add the bilingual copy block and the darker motion-art panels.
6. Tune spacing, label size, and line length so the whole page keeps a single visual rhythm.

### Accessibility

- Keep white text on sufficiently dark surfaces and soften copy when a bright panel weakens contrast.
- Give every image an alt description that names its role in the board.
- Keep focus styles visible on links and any keyboard-reachable tile.
- Make the tiny labels readable at real screen size instead of relying on hover.
- Preserve comfortable line lengths in both Korean and English so the two scripts stay balanced and easy to scan.

## Scope note

This guide covers the desktop case-study pages for the NAVER DAN25 and Dan23 work boards: the black shell, logo row, poster wall, storyboard grids, bilingual copy blocks, and the neon artwork inside those boards. It does not include mobile reflow, motion timing, hover treatment, or small interaction details. Measurements are practical adaptation targets. Verify licensing for these families before production use.
