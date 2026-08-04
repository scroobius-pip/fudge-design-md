# How adithyakrishnan.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/adithyakrishnan.com-design)

Last updated: 2026-08-04

## Captured pages

[![Wide black hero with oversized white intro copy and sparse top links](https://pin.fontofweb.com/2541?format=jpg)](https://design.withfudge.com/share/pin-2541)

[Wide black hero with oversized white intro copy and sparse top links](https://design.withfudge.com/share/pin-2541)

[![Centered project showcase with framed desktop mockup and metadata strip](https://pin.fontofweb.com/2545?format=jpg)](https://design.withfudge.com/share/pin-2545)

[Centered project showcase with framed desktop mockup and metadata strip](https://design.withfudge.com/share/pin-2545)

[![Dense rounded tech chips mixing bright active pills and dark inactive pills](https://pin.fontofweb.com/2544?format=jpg)](https://design.withfudge.com/share/pin-2544)

[Dense rounded tech chips mixing bright active pills and dark inactive pills](https://design.withfudge.com/share/pin-2544)

[![Large left-aligned editorial paragraphs on a stark black field](https://pin.fontofweb.com/2543?format=jpg)](https://design.withfudge.com/share/pin-2543)

[Large left-aligned editorial paragraphs on a stark black field](https://design.withfudge.com/share/pin-2543)

[![Stacked experience list with bold roles, muted dates, and a dark button](https://pin.fontofweb.com/2542?format=jpg)](https://design.withfudge.com/share/pin-2542)

[Stacked experience list with bold roles, muted dates, and a dark button](https://design.withfudge.com/share/pin-2542)

[![Quiet footer row with social links, a quote line, and a back-to-top control](https://pin.fontofweb.com/2546?format=jpg)](https://design.withfudge.com/share/pin-2546)

[Quiet footer row with social links, a quote line, and a back-to-top control](https://design.withfudge.com/share/pin-2546)

## Overview

Adithya Krishnan’s site is a spare, dark portfolio that treats the page as one long editorial surface. The visual system stays close to black and white, so hierarchy comes from scale, spacing, and shape rather than from a crowded palette. The first impression is a large personal statement in light text; later sections shift into project presentation, skill chips, experience lists, and a quiet footer without losing the same restrained tone.

The design feels intentionally low-noise. Large margins, centered blocks, and short labels leave plenty of empty space around the content. Rounded pills, soft gray supporting text, and a few framed image areas do the decorative work. The result is a system that can hold both highly personal copy and dense résumé-style content while still reading as one unified portfolio.

## Colors

The visible palette stays dark and restrained. Black canvas and near-black surfaces carry the layout, off-white text handles the hierarchy, and gray values soften dates, labels, and secondary notes. The brighter fill is reserved for the active chip state. The cool blue-violet tone belongs to framed imagery and should stay tied to media surfaces rather than to general interface chrome.

| token | value | role |
|---|---|---|
| `action` | `#F5F5F5` | Active pill fill and the brightest interactive state |
| `actionInk` | `#000000` | Text on the light active pill |
| `canvas` | `#000000` | Main page background and footer base |
| `ink` | `#F8F8F8` | Primary text on the black canvas |
| `inkSoft` | `#D3D3D3` | Secondary copy, quote lines, and lighter metadata |
| `mutedInk` | `#A7A7A7` | Dates, labels, and inactive chip text |
| `surface` | `#000000` | Dark content panels and card surfaces |
| `surfaceRaised` | `#212848` | The cool dark tone behind framed project imagery |
| `surfaceMuted` | `#414245` | Inactive chip fill and quieter dark controls |
| `border` | `#3B3C3E` | Thin separators, subtle outlines, and hairline controls |

Light values appear only as contrast against the black field, while the photographic tone stays cooler and deeper inside framed media. Use the darker base for the page itself, the near-white fill for emphasis and active chips, and the bluish raised surface only where the screenshot or media needs depth. The interface works best when the accent remains rare and the monochrome relationship stays dominant.

## Typography

The type system is built around a small family set: Space Grotesk carries the display voice, Inter supports the longer reading voice, Poppins handles compact labels, and Work Sans is available for quieter utility text. The visible page leans hardest on Space Grotesk, which gives the whole portfolio a clean, slightly engineered edge. Smaller text should not fight that voice; it should step back, stay lighter in tone, and rely on spacing rather than ornament.

The packet provides credits for Space Grotesk, Inter, and Poppins; Work Sans has no credit entry, so no attribution claim is made for it.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `heroDisplay` | Space Grotesk | 4.75rem | 400 | 1.04 | -0.04em | The opening personal statement |
| `sectionDisplay` | Space Grotesk | 3rem | 400 | 1.08 | -0.03em | Section titles and large transitional copy |
| `projectTitle` | Space Grotesk | 2.25rem | 400 | 1.1 | -0.02em | Project names such as the centered showcase header |
| `body` | Inter | 1.125rem | 400 | 1.65 | 0em | Long-form introduction and project descriptions |
| `bodyCompact` | Work Sans | 1rem | 400 | 1.5 | 0em | Metadata, chip labels, and smaller supporting text |
| `label` | Poppins | 0.875rem | 500 | 1.2 | 0.03em | Top links, section labels, and button text |
| `microcopy` | Work Sans | 0.75rem | 400 | 1.3 | 0.02em | Copyright lines, date notes, and quiet footer text |

The hierarchy depends on size and breathing room more than on bold weight. The large headline should stay light enough to feel calm on black. Project titles can keep a thin, exact feel, while paragraph text should open up just enough to remain readable in wide columns. Small labels benefit from slight tracking so they do not collapse into the background.

## Layout

The overall structure is a full-width dark canvas broken into centered bands. Each band uses a lot of side breathing room, so the page never feels boxed in. The hero is the loosest section: top navigation sits above a large statement, then the page drops into a quieter rhythm with supporting content below. That first block should feel like a stage rather than a card.

The project area tightens the composition. A large framed screenshot sits above a two-column metadata row, which creates a clear reading order: title first, image second, then event and description. The arrow control on the right stays visually separate from the text column, so the layout reads as an editorial case study rather than a standard product tile. The surrounding space matters as much as the content itself; the image should feel suspended inside the black field.

The tech stack section changes the tempo again. Instead of a single large image, it uses a centered, vertically stacked cloud of pills. The pill grid is dense but orderly, and the alternating light and dark chips create a rhythm that keeps the section from becoming flat. Because the rows wrap, the section can absorb a lot of items without losing its shape.

The long narrative section is intentionally simple. It uses a left-aligned column with very large line breaks and plenty of vertical space between paragraphs. That lets the copy feel personal and thoughtful without turning into a wall of text. The experience and awards area then compresses the structure again into stacked rows, where bold role names, lighter company names, and muted dates create a quick scan pattern.

The footer returns to a very quiet horizontal line of links and utility text. It should feel like a release point after the denser content above. Across all sections, the page relies on repetition of spacing rhythm, not on repeated decorative frames.

## Visual language

The page’s language is minimal, precise, and slightly technical. Black space is the main field. White text floats above it with almost no ornament, and gray values step in only when the content needs to soften. Rounded pills are the main shape motif, which gives the otherwise rigid layout a friendly, modern feel. The roundness is deliberate but not soft enough to become playful.

There is very little shadow and very little border chrome. The project screenshot is the one place where depth matters, and there the depth comes from a blurred cool-toned backdrop rather than from heavy elevation. That keeps the system honest: the page wants to feel like a focused portfolio, not a polished marketing site. The visual identity is therefore built from restraint, contrast, and the careful spacing of elements that would otherwise feel dense.

## Components

### Top links row

- **Anatomy:** small icon-plus-text links on the upper edge of the page, with the brand mark at left and utility links spread across the width.
- **Typography:** `label` for the links, `microcopy` for the quietest text.
- **Color:** light text on the black canvas, with muted gray for secondary lines.
- **Shape:** no heavy container; the links remain unboxed and calm.
- **Composition:** keep the row airy and horizontal so it does not compete with the hero statement.

### Hero statement

- **Anatomy:** a large personal line broken across multiple rows, followed by a short supporting sentence.
- **Typography:** `heroDisplay` for the main line, `body` or `bodyCompact` for the supporting copy.
- **Spacing:** generous vertical separation above and below the statement.
- **Hierarchy:** the name and role should read first; the rest should feel like a quiet explanation.
- **Visible state:** the text is high-contrast and low-weight, which keeps it elegant on the black field.

### Project showcase card

- **Anatomy:** project title, large framed screenshot, and a lower metadata strip with event, year, and description.
- **Surface:** dark panel with a cooler backdrop around the image area.
- **Typography:** `projectTitle` for the project name, `body` for the description, `label` and `bodyCompact` for the metadata.
- **Shape:** rounded outer panel edges with a more contained inner image frame.
- **Composition:** the image stays central and dominant; the metadata strip supports it rather than competing with it.

### Tech stack chips

- **Anatomy:** a centered block of many rounded tags with small icons and short names.
- **Surface:** alternating dark and light pills.
- **Typography:** `bodyCompact` or `label`, depending on emphasis.
- **Shape:** fully rounded capsules.
- **Visible states:** bright pills read as active or emphasized; dark pills recede into the background.
- **Spacing:** keep row gaps and column gaps even so the grid stays orderly while wrapping.

### Narrative and experience blocks

- **Anatomy:** long-form paragraphs, then stacked role/company/date rows, followed by a short awards cluster.
- **Typography:** `body` for the paragraphs, `label` for section headers, `bodyCompact` for dates and supporting notes.
- **Color:** primary text in white, supporting metadata in muted gray.
- **Composition:** use left alignment and strong vertical rhythm so the reading path stays clear.
- **Hierarchy:** bold role names and larger line breaks carry the meaning; borders are not needed.

### Footer and utility button

- **Anatomy:** small copyright line, social links, and a rounded dark button near the end of the page.
- **Typography:** `bodyCompact` and `microcopy`.
- **Surface:** black background with a slightly raised dark control for the button.
- **Shape:** the button stays pill-shaped; the surrounding links remain unboxed.
- **Visible states:** the footer is intentionally quieter than the sections above it, so it should close the page without adding visual noise.

## Responsive behavior

On narrower screens, the page should keep the same reading order but compress the spatial drama. The hero should remain first, then the project block, then the chip grid, then the long text sections, and finally the footer. The chip cloud will need to wrap more aggressively, but the chips themselves should stay large enough to remain legible. The project section should stack its metadata under the image rather than squeezing it into a narrow side column.

The layout should preserve the black field and the large type even when the columns collapse. Long paragraphs should gain more vertical space rather than shorter line height. Top links can tighten into a smaller row or a compact overflow treatment, but they should stay visually subordinate to the hero. The general rule is to reduce width pressure without reducing the system’s calmness.

## Practical implementation guidance

### Preserve

- Keep the page mostly monochrome, with white and gray doing most of the work.
- Preserve the large, light hero type and the equally quiet project titles.
- Keep the pill shape as the main recurring form.
- Let the project image breathe inside a dark frame with a cooler tint.
- Maintain generous vertical spacing between the major content bands.

### Avoid

- Avoid bright accent colors that would fight the black-and-white structure.
- Avoid heavy shadows, glossy chrome, or dense borders.
- Avoid mixing several unrelated type families just to create contrast.
- Avoid shrinking the pills into tiny badges; their size is part of the system.
- Avoid crowding the footer or the top links with extra navigation density.

### Recommended build order

1. Build the black canvas and the top link row.
2. Add the hero statement and its supporting line.
3. Recreate the project showcase block with its image frame and metadata strip.
4. Build the tech stack chip grid with alternating light and dark states.
5. Add the narrative paragraphs, experience list, and awards cluster.
6. Finish with the footer links and utility button.
7. Then tune spacing so each band keeps its own breathing room.

### Accessibility

- Keep text contrast strong on the black background.
- Make the light chips readable with dark text, and the dark chips readable with muted light text.
- Give each icon-only control a clear label.
- Preserve obvious keyboard focus on links, chips, and the footer button.
- Keep paragraph line length comfortable so the long sections do not become tiring to read.

## Scope note

This guide covers the dark single-page portfolio surface: hero, project showcase, tech stack chips, narrative and experience blocks, awards callout, and footer links. Measurements are practical adaptation targets. Mobile breakpoint values, motion, loading states, alternate pages, and unseen interactive variants are not included.
