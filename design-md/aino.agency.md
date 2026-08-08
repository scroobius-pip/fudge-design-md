# How aino.agency is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/aino.agency-design)

Last updated: 2026-08-08

## Captured pages

[![Dense black ASCII home stage filling the full viewport](https://pin.fontofweb.com/7074?format=jpg)](https://design.withfudge.com/share/pin-7074)

[Dense black ASCII home stage filling the full viewport](https://design.withfudge.com/share/pin-7074)

[![Centered internships copy above an airy office photo grid](https://pin.fontofweb.com/4432?format=jpg)](https://design.withfudge.com/share/pin-4432)

[Centered internships copy above an airy office photo grid](https://design.withfudge.com/share/pin-4432)

[![Sparse work index with names and right-aligned dates](https://pin.fontofweb.com/4428?format=jpg)](https://design.withfudge.com/share/pin-4428)

[Sparse work index with names and right-aligned dates](https://design.withfudge.com/share/pin-4428)

## Overview

Aino’s page system is defined by a sharp contrast between a full-bleed black home stage and quiet light pages built from thin rules, square frames, and compact text. The home stage turns the brand name into a dense field of ASCII letterforms, so identity becomes texture instead of a conventional logo block. The content pages answer that energy with restraint: short labels, small cards, airy editorial copy, and long stretches of empty space that make the typography feel deliberate rather than crowded.

The system reads as a studio identity for design and technology work. It is technical without being cold, and minimal without feeling generic. The main structure is easy to name: one dramatic stage for the brand, one simple card module for openings, one airy editorial-and-photographic band for internships, and one sparse list for work. The pages depend on space, alignment, and scale more than on decorative effects. Verify licensing for these families before production use.

## Colors

The palette is nearly monochrome. One black value carries the stage background, the card rules, and the strongest linework. The softer black value handles the main reading text and the smaller UI text on the lighter pages. That narrow range is central to the look: the pages feel calm because they do not introduce extra hue to solve hierarchy. Instead, the design uses contrast, placement, and scale.

| token | hex | role | use |
|---|---|---|---|
| `canvas` | `#000000` | stage black | Home-stage background, thin rules, and the deepest linework |
| `ink` | `#181818` | soft black | Body text, labels, navigation, and small supporting copy |

The relationship between the two values matters more than either one alone. The black token gives the brand its poster-like base and its crisp borders. The softer black keeps text from feeling harsh on the light pages, while still staying close enough to black that the whole site reads as one family. There is no bright accent swatch pulling attention away from the structure. The light pages stay quiet and neutral, while the photographs bring in warm whites, pale wood, and muted gray-green tones that support the layout without becoming page tokens.

## Typography

The typography is built from **Abc Diatype Plus** and **Abc Diatype Plus Variable**. The first family carries the largest display moments, the card titles, and the main body copy. The variable family supports the smallest chrome, where slightly calmer spacing and lighter weight keep the page controlled. The overall feeling is compact, mechanical, and steady. The letters do not become decoration; they become structure.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Abc Diatype Plus | 4.5rem | 700 | 0.95 | -0.03em | Giant brand field on the home stage |
| `section-display` | Abc Diatype Plus | 3rem | 700 | 1 | -0.02em | Large page leads and major section names |
| `card-heading` | Abc Diatype Plus | 1.125rem | 700 | 1.1 | -0.01em | Card titles and compact page headers |
| `body` | Abc Diatype Plus | 0.9375rem | 400 | 1.5 | 0em | Role details, lists, and short explanatory copy |
| `label` | Abc Diatype Plus | 0.75rem | 500 | 1.2 | 0.12em | Uppercase labels, small chrome, and tight signposts |
| `navigation` | Abc Diatype Plus Variable | 0.75rem | 500 | 1.2 | 0.08em | Small links, top chrome, and short action text |
| `legal-copy` | Abc Diatype Plus Variable | 0.75rem | 400 | 1.4 | 0.02em | Metadata, footnote-style text, and quiet support copy |

The hierarchy is compact rather than theatrical. Large sizes are used sparingly, and the smaller text keeps enough air around it to remain readable. Uppercase text gains a little extra tracking so it can sit cleanly inside narrow spaces. The display styles feel strong because they are set tightly, not because they are oversized in a loose way. The variable family is most useful where the interface needs restraint: small links, action lines, and other details that should sit quietly beside the main content.

## Layout

The home page is a full-bleed stage. It fills the viewport with black and turns the brand name into a single large visual mass made from ASCII characters. That composition behaves like a poster or a terminal print: the letters are the image, and the page gives them almost no competition. A tiny click cue sits near the composition, but it stays secondary. The important thing is the field itself, which should remain wide, still, and edge-driven.

The internships page uses a different rhythm. It begins with centered editorial copy blocks that read like short principles, set in a calm, conversational stack. Below that, an airy grid of office and interior photographs opens the page further. The images are spaced with wide gaps and uneven breathing room so the band feels like a loose culture collage rather than a tight gallery wall. Those photographs establish atmosphere and material quality before the action module appears. The two internship cards sit below this band and restore the page’s sharp geometry: thin borders, square corners, compact labels, and small apply cues. The page therefore moves from tone-setting text, to soft photographic space, to a clear decision surface.

The work page uses an even quieter arrangement. A small section label begins the page, then project names run in a vertical list, and dates sit in a separate column to the right. That split gives the list a clear reading path while keeping the page airy. The rest of the surface is left open, which prevents the list from becoming a dense catalog. The layout depends on a strong horizontal calm: wide margins, narrow text blocks, and a measured distance between columns.

Across the site, the structure is simple enough to recognize at a glance. There is one dramatic poster-like mode, one ruled card mode, one airy editorial-and-photographic mode, and one list mode. Each mode uses the same typography voice and the same two-value black palette, but each mode handles space differently. That combination gives the site a clear identity without making every page feel identical.

## Visual language

Aino’s visual language comes from a small set of repeated moves: dense character texture, thin borders, and a lot of negative space. The home stage uses texture to create scale. The internships page does the opposite in the upper half, using centered copy and loose photo spacing to create a softer, more ambient read before the cards tighten the page again. The work page sits between those two approaches by using a list format that feels exact and editorial rather than decorative.

The system avoids soft depth effects. There are no glossy panels, no heavy shadows, and no rounded chips trying to soften the tone. Line weight stays thin and even, which makes the pages feel precise. The tiny corner marks and arrow-like action lines stay monochrome and restrained, so they read as part of the same visual grammar rather than as separate decoration. The result is a studio language that feels coded, printed, and edited at the same time.

This language works because it is disciplined. Each page gives the eye one obvious first reading and then leaves room for the structure around it. The brand field is the loudest thing on the site, but it is loud through scale and density, not through color. The cards and lists are calm, but they are not generic; they are framed by exact alignment, square geometry, and compact type.

## Components

### Home stage

- **Anatomy:** A full-bleed black field, an oversized ASCII brand name, a tiny click cue, and very little else.
- **Surface:** Flat and uninterrupted. The stage should feel like a single printed sheet rather than a stack of panels.
- **Typography:** Use the hero display role for the brand mass and the label scale for any small chrome.
- **Shape:** Keep the stage edge-led. The home page does not need soft corners or layered containers.
- **Spacing:** Leave broad breathing room around the letter field so the composition can feel monumental.
- **Composition:** The brand should dominate the viewport. Secondary details stay visually minor.
- **Visible states:** The source view reads as a still stage. Keep the presentation quiet and avoid adding extra motion language to the base composition.

### Editorial intro and photo grid

- **Anatomy:** Centered short editorial statements, an open grid of office and interior photographs, and a clear handoff to the internship cards below.
- **Surface:** A pale neutral page with soft photographic rectangles floating in wide gutters.
- **Typography:** Use the body and label roles for the short statements and any small captions. Keep the copy compact and even.
- **Shape:** The photographs stay rectangular and unforced. The band should not turn into a rigid masonry wall.
- **Spacing:** Give the text blocks generous top padding, then leave large vertical air before the first image row and again before the cards.
- **Composition:** The copy establishes tone, the photos create atmosphere, and the cards below create the action point.
- **Visible states:** The section should feel open and calm, not crowded or promotional.

### Ruled careers cards

- **Anatomy:** Two equal cards, each with a title, short role details, an apply line, and a tiny corner mark.
- **Surface:** A light neutral field with a thin black border and a very spare interior.
- **Typography:** Use the body and label roles for the card content. The titles need to feel compact, not oversized.
- **Shape:** Square corners and a precise frame. The card should feel drafted, not pill-shaped.
- **Spacing:** The center of the card should remain open. The empty area is part of the module’s character.
- **Composition:** Place the title at the top, the details beneath it, and the apply line near the bottom edge.
- **Visible states:** The cards should stay calm in their resting state. Do not enlarge the corner mark or add flashy state changes unless a new spec requires them.

### Work list

- **Anatomy:** A small section label, a vertical list of project names, a separate date column, and a small hiring note away from the list.
- **Surface:** A neutral field with no surrounding box. The list should feel editorial and open.
- **Typography:** Use the body role for names and the lighter chrome roles for the section label and dates.
- **Shape:** No rounded treatment. Alignment carries the structure here.
- **Spacing:** Keep generous space around the list and between the two columns so the page reads cleanly.
- **Composition:** Let the names and dates form parallel tracks. The split is what gives the page its rhythm.
- **Visible states:** The page is informational. Keep it straightforward and avoid decorative state language.

### Small chrome and text actions

- **Anatomy:** Tiny links, section labels, and short action lines such as apply cues.
- **Surface:** Usually transparent, sitting directly on the page field.
- **Typography:** Use the label or navigation roles rather than button styling.
- **Shape:** Treat these as text actions, not as filled controls.
- **Spacing:** Keep them close to the edge of their module and away from the main reading path.
- **Composition:** They should guide the eye without competing with the main content blocks.

## Responsive behavior

On narrower screens, the home stage should keep the brand mass dominant and let the smaller chrome shrink first. The ASCII field can crop if needed, but the crop should still feel intentional. The internships intro should collapse into fewer centered text blocks before the photo grid tightens, and the photo band should reduce to fewer columns before the cards stack. The careers cards should stack into one column before they feel cramped, while keeping their square frame and open interior room. The work list should preserve its column logic for as long as possible; if the width tightens too much, the date column can sit closer to the names or drop beneath them. In every case, the page should keep its monochrome voice and its simple geometry.

## Practical implementation guidance

### Preserve

- Keep the visual system anchored in the two-value black palette and the compact editorial voice.
- Let the home stage behave like a poster rather than a conventional hero block.
- Keep the internships intro loose and calm, with the photo grid breathing before the cards.
- Keep the careers cards thin, square, and explicit.
- Preserve the large open interior inside each card and the open field around the work list.
- Treat the small mark icons and text-only arrows as part of the identity, not as decorative extras.

### Avoid

- Avoid soft gradients, colored badges, glassy panels, or heavy shadows.
- Avoid rounding the cards into pills or softening the borders.
- Avoid a colorful action hierarchy that would compete with the restrained structure.
- Avoid crowding the cards with extra copy or filling the home stage with secondary prompts.
- Avoid turning the internships photo band into a tight masonry wall or the work page into a busy tile grid.

### Recommended build order

1. Establish the type scale and letter spacing for the compact editorial voice.
2. Build the black home stage and confirm the ASCII composition reads as one brand field.
3. Build the internships intro and photo grid with wide gaps and soft neutral spacing.
4. Build the ruled card module with square edges and the lower-left apply line.
5. Build the work list with its separate date column and open field.
6. Add the tiny chrome, labels, and corner marks after the core structure is in place.

### Accessibility

- Keep contrast strong on both surfaces by preserving black-to-light contrast and the softer black for smaller text.
- Give the ASCII brand field a clear accessible treatment so it does not compete with nearby links.
- Make the apply lines and small links real text with a visible focus style.
- Keep line lengths short enough that the text remains easy to scan.
- Use meaningful alt text only where an image carries information; otherwise let it stay quiet.

## Scope note

This guide covers the home stage, the internships page with its centered editorial copy and office photos, and the work index on aino.agency. It does not define motion, hover states, focus styling, mobile breakpoints, or alternate page templates.
