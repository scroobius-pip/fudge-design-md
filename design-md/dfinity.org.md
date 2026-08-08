# How dfinity.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dfinity.org-design)

Last updated: 2026-08-08

## Captured pages

[![Vertical open-positions rail beside the job row and safety notice](https://pin.fontofweb.com/7231?format=jpg)](https://design.withfudge.com/share/pin-7231)

[Vertical open-positions rail beside the job row and safety notice](https://design.withfudge.com/share/pin-7231)

[![Tall team-members rail with dense portrait grid and rounded button](https://pin.fontofweb.com/7230?format=jpg)](https://design.withfudge.com/share/pin-7230)

[Tall team-members rail with dense portrait grid and rounded button](https://design.withfudge.com/share/pin-7230)

## Overview

dfinity.org uses a severe, editorial hiring-page layout rather than a decorative marketing shell. The page is built from a white field, strong black vertical section rails, compact text blocks, and very little chrome. The result feels controlled and institutional, but not sterile: the typography is assertive, the spacing is expansive, and the portrait grid brings energy without adding visual noise.

The design works by contrast. Large side labels announce the section, a modest heading begins the content column, and the interface then drops into a single row of job information or a wide portrait mosaic. That rhythm makes each section feel like a chapter instead of a dashboard. The few interactive pieces are understated: a small underlined text link, a disclosure-style row, and a dark rounded button that carries the strongest weight on the page.

What should remain central is the combination of restraint and scale: a mostly monochrome surface, tall graphic type, thin separators, and dense human imagery used as a feature rather than a background.

## Colors

### Core interface colors

| token | value | use |
|---|---|---|
| `canvas` | `#FFFFFF` | Main page field, open space between sections, and the backdrop for the portrait grid |
| `ink` | `#000000` | Section rails, headings, job titles, and the strongest body text |
| `muted-ink` | `#5B5B5B` | Supporting notes, alert copy, and quieter explanatory text |
| `border` | `#0E031F` | Thin horizontal rules, row separators, and subtle structural dividers |
| `accent` | `#C86B38` | The short underline beside the “See all open positions” link and other restrained emphasis points |
| `action` | `#0E031F` | The dark pill button near the portrait mosaic and any primary filled action |
| `on-action` | `#FFFFFF` | Button text on the dark action surface |

The palette is mostly light and neutral. White carries the page, black carries the typography, and the border tone only appears as a whisper-thin separator. The warm accent is intentionally small; it should act like a marker line, not a general brand color. The dark action tone is reserved for the few places that need the strongest emphasis, so it reads as a deliberate pause in an otherwise airy composition. Photography introduces full color through the team portraits, but that color should stay inside the imagery and not be promoted into the UI system.

The relationship between modes is simple: the light mode sets the baseline, the dark tone creates the strongest call to action, and the accent tone keeps the page from becoming monotonous. The portraits provide human warmth, but the interface remains disciplined and largely monochrome.

## Typography

The page mixes two sans families: **By Laurenz Brunner** for the tall graphic statements and **Circular Xx** for the listing content, helper copy, and buttons. The hierarchy depends on size, weight, and tight vertical rhythm more than on many stylistic variants. Keep the display face bold and compact; keep the body face clean and legible. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `rail-label` | By Laurenz Brunner | 5rem | 500 | 0.9 | -0.04em | Tall vertical section labels such as “Open positions” and “180+ team members” |
| `section-heading` | By Laurenz Brunner | 2.5rem | 500 | 1 | -0.02em | Short section heads like “Latest” |
| `row-title` | Circular Xx | 1.25rem | 500 | 1.3 | -0.01em | Job titles and compact row text |
| `body` | Circular Xx | 1rem | 400 | 1.55 | 0em | Supporting paragraphs and alert copy |
| `body-medium` | Circular Xx | 1rem | 500 | 1.45 | 0em | Link labels, button text, and emphasized inline text |
| `small-copy` | Circular Xx | 0.75rem | 400 | 1.5 | 0em | Fine print and the quietest helper text |

The hierarchy should feel direct rather than ornate. The left rail needs enough size to dominate the margin without overwhelming the content column. The job row text should stay readable at a glance and remain compact enough to fit on a single line when possible. Supporting copy should open slightly, but not so much that the page starts feeling airy or editorial in the magazine sense. The page benefits from a small amount of tracking reduction in the display face and very little tracking change in the body face.

## Layout

The layout is a wide, white, left-anchored composition. A large vertical label occupies the far left edge of each section, while the actual content begins in a central column with a lot of open canvas around it. That left rail gives the page its identity immediately; it also makes each section feel taller and more deliberate than a standard stacked landing page.

The first section is spare. A “Latest” heading sits above a thin rule, then a single job row appears in a disclosure-like format with a chevron on the far right. Below that, a small linked line introduces the next action, and the alert copy sits quietly underneath. The spacing between these items is large enough to make each one feel distinct, but not so large that the column loses continuity.

The second section trades the job row for a dense portrait mosaic. The portraits form a rigid grid of small crops, filling a broad rectangular field with many faces and very little empty space inside the grid itself. That contrast is important: the page is open overall, but the portrait matrix is compressed and abundant. The dark rounded button sits beneath the grid and reads like the single terminal action for the section.

Across the page, the measured spacing is simple: a compact inner rhythm around 12px and 16px, a more generous content gutter around 24px, and a large section break around 80px. Those values keep the page orderly while still letting the vertical labels and image grid breathe. The structure should continue to rely on that contrast between narrow internal spacing and broad external spacing.

## Visual language

The design language is spare, graphic, and human at the same time. The vertical labels are the most distinctive part: they act like chapter markers and make the page feel spatial rather than only textual. Their scale gives the layout a poster-like quality, while their black weight keeps them grounded in a practical recruiting context.

Rules and borders are almost invisible. The page does not rely on boxed cards, heavy shadows, or layered surfaces. Instead, the design uses white space and one-pixel lines to separate meaning. That keeps the content crisp and leaves the photographs with room to carry visual interest.

The portrait mosaic is the main area where the page becomes dense. It creates a strong sense of organization through repetition, but the individual images keep it from feeling mechanical. Because the grid is so regular, even small shifts in crop or lighting become part of the texture. The result is energetic without looking busy.

Color is restrained enough to support the typography. Black and white do nearly all of the structural work. The accent line adds a slight warmth, and the dark button provides a firm endpoint. That balance makes the page feel confident and modern, with no need for gradients, flourishes, or oversized decorative elements.

## Components

### Section rail

- **Anatomy:** A tall rotated label set flush to the left side of the section.
- **Typography:** Use `rail-label` with strong weight and tight leading.
- **Color:** Keep it black on white so the section title reads immediately from a distance.
- **Composition:** It should act as a chapter marker, not a headline competing with the content column.
- **Visible state:** The label stays static and declarative; there is no need for ornament or animation.

### Latest job row

- **Anatomy:** One compact row with a job title on the left and a small chevron on the right.
- **Surface:** No card background; the row sits directly on the canvas with a thin divider above or below.
- **Typography:** Use `row-title` for the job line so it reads as a serious listing rather than a casual link.
- **Spacing:** Keep the row tight vertically and separated from nearby copy by a generous gap.
- **Visible state:** It should feel disclosure-like, but still readable as a standalone listing line.

### Accent link

- **Anatomy:** A short horizontal accent line followed by a text link.
- **Color:** Use the warm accent token for the line and any linked emphasis.
- **Typography:** `body-medium` keeps the link active without making it look like a button.
- **Spacing:** The line should be short and the whole unit should stay compact.
- **Composition:** Place it below the job row as a directional cue to the next action.

### Security note

- **Anatomy:** A compact paragraph block with stronger lead text and a quieter continuation.
- **Typography:** Use `body` with a small-size companion style where needed.
- **Color:** The main paragraph should stay in black or muted ink, with the link text remaining clearly distinct.
- **Spacing:** Leave enough room above it so the alert feels separate from the listing row.
- **Visible states:** Keep link text readable and underlined or otherwise distinguishable from body copy.

### Team mosaic

- **Anatomy:** A dense grid of portrait crops arranged in even rows and columns.
- **Surface:** The grid should sit on the white canvas without a heavy frame.
- **Composition:** The grid is the main visual mass of the section, so it should remain orderly and tightly packed.
- **Spacing:** Use small internal gaps or edge-to-edge crops so the mosaic feels compact.
- **Visible state:** The section can fade softly near the bottom, but the grid itself should remain crisp.

### Primary action

- **Anatomy:** A rounded dark pill with white text.
- **Shape:** The pill radius is fully rounded, not merely softly rounded.
- **Color:** Fill it with the dark action tone and keep the label white.
- **Typography:** Use `body-medium` so the button feels firm but not heavy.
- **Composition:** Place it beneath the mosaic as the clearest terminal action in the section.

## Responsive behavior

On smaller screens, the vertical rails should move from a heavy side marker to a simpler top label or a shortened rail treatment. The key hierarchy should remain intact: section label first, content second, supporting copy third. The job row should keep its single-line clarity as long as possible, then wrap only when needed. The portrait grid should compress into fewer columns while preserving the orderly rhythm of the faces. The dark pill should stay easy to tap and remain visually separated from the mosaic. The central goal on small screens is not to preserve every desktop proportion, but to preserve the sequence of attention.

## Practical implementation guidance

### Preserve

- Keep the page mostly white and let typography do the heavy lifting.
- Preserve the dramatic vertical section labels; they are the clearest signature of the system.
- Use thin separators and open space rather than boxed panels.
- Keep the dark pill action as the most emphatic control on the page.
- Let the portrait grid stay dense and orderly so it reads as a collective statement.

### Avoid

- Avoid adding heavy shadows, glass effects, or colorful gradients.
- Avoid turning the job listing into a card wall or a dashboard.
- Avoid replacing the small accent line with a louder brand bar.
- Avoid shrinking the vertical rail until it becomes a generic side label.
- Avoid making every separator equally prominent; most structural lines should stay quiet.

### Recommended build order

1. Set the white canvas, black ink, and hairline border system.
2. Build the vertical section rail and the short section heading.
3. Add the single-row job listing with its chevron and accent link.
4. Add the security note as a restrained body block.
5. Build the portrait mosaic with consistent crops and spacing.
6. Finish with the dark rounded primary action.
7. Tune spacing so the open canvas feels intentional rather than empty.

### Accessibility

- Keep the vertical section labels large enough to remain readable after rotation.
- Maintain clear contrast for the job row, the accent link, and the dark pill.
- Make the chevron and any link treatment distinguishable without relying on color alone.
- Give the portrait mosaic meaningful alternative text when individual faces need context.
- Keep keyboard focus visible on the link and button controls.
- Ensure the listing row remains understandable when it wraps on narrow screens.

## Scope note

This guide covers the home hiring section and the team-members section shown here. It does not define unseen pages, motion, hover treatment, focus behavior, loading or error states, or full mobile reflow. Measurements are practical adaptation targets.
