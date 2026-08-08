# How bkid.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/bkid.co-design)

Last updated: 2026-08-08

## Captured pages

[![Wide hero frame with scattered 3D Hangul blocks and a minimal top nav](https://pin.fontofweb.com/10283?format=jpg)](https://design.withfudge.com/share/pin-10283)

[Wide hero frame with scattered 3D Hangul blocks and a minimal top nav](https://design.withfudge.com/share/pin-10283)

[![Paragraph-led section with credit line and a calm three-column specimen grid](https://pin.fontofweb.com/10282?format=jpg)](https://design.withfudge.com/share/pin-10282)

[Paragraph-led section with credit line and a calm three-column specimen grid](https://design.withfudge.com/share/pin-10282)

## Overview

BKID's work pages read like studio documentation rather than a commercial site. The page gives the work the first and strongest voice: a compact top navigation, a right-aligned wordmark, a large hero image, and then a calm sequence of credit text, explanation, and specimen grids. The interface is almost invisible because the visual system is built to keep attention on the 3D objects and their arrangement.

The page feels editorial and measured. It uses wide side insets, a generous top breath, and a narrow reading column so the content never stretches into a poster layout. The white background and gray text make the page feel like paper, while the rendered objects supply the chroma and material contrast. Nothing tries to compete with the work; even the logo sits lightly at the edge of the page.

The qualities to preserve are:

- A bright, paper-like canvas with black and gray text.
- Small, text-only navigation that stays quiet.
- A large figure leading the page.
- Tight paragraph rhythm with a clear credit line.
- Pale specimen tiles arranged in an orderly grid.
- Minimal chrome, minimal ornament, and little or no rounding.

## Colors

### Core interface colors

| token | value | role |
|---|---|---|
| `canvas` | `#FFFFFF` | Main page background and outer whitespace |
| `surface` | `#F7F7F7` | Light specimen tiles and pale image fields |
| `surface-alt` | `#F1F1F1` | Slightly deeper tile fill for gentle contrast |
| `border` | `#E6E6E6` | Hairline separation between pale surfaces |
| `ink` | `#000000` | Wordmark, navigation, and strongest labels |
| `ink-soft` | `#444444` | Paragraph copy and explanatory text |
| `muted-ink` | `#888888` | Credit lines and secondary metadata |

The color system is nearly monochrome. Black is reserved for the most important text so the wordmark and navigation stay sharp. Mid-gray and lighter gray handle the reading hierarchy, which keeps the copy soft without losing legibility. The pale surfaces are important because they echo the light studio ground used in the image grid and make each tile feel like a separate specimen.

There is no separate dark interface mode and no persistent accent color in the shell. Any saturated orange, blue, wood brown, or metallic silver belongs to the rendered work inside the images. Keep the interface itself in white, pale gray, and black so the artwork remains the source of visual energy. That balance is what gives the page its calm editorial tone.

## Typography

The page uses a Helvetica Neue voice with Helvetica, Applesystem, and System as fallback families. The feeling is a clean, neutral grotesk with small size changes doing most of the hierarchy work. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `logo` | Helvetica Neue | 1.875rem | 700 | 1 | 0.18em | Upper-right wordmark and site identity |
| `hero-display` | Helvetica Neue | 1.75rem | 700 | 1.05 | -0.01em | Larger project headings when needed |
| `section-heading` | Helvetica Neue | 1.25rem | 500 | 1.2 | -0.01em | Short section openers and image-set titles |
| `body` | Helvetica Neue | 0.875rem | 400 | 1.57 | 0em | Main explanatory paragraphs |
| `body-medium` | Helvetica Neue | 0.875rem | 500 | 1.57 | 0em | Navigation emphasis and strong inline text |
| `caption` | Helvetica Neue | 0.75rem | 400 | 1.5 | 0em | Photography credit and small metadata |
| `navigation` | Helvetica Neue | 0.875rem | 400 | 1.4 | 0.01em | Top navigation row |
| `legal` | Helvetica Neue | 0.75rem | 400 | 1.5 | 0em | Small footer or legal copy if used |

The body copy sits at 14px with generous leading, which keeps the explanatory paragraph easy to scan without making it feel loose. Captions drop to 12px and stay soft gray so they support the work without fighting it. The navigation is small, even, and text-based, and the wordmark is the strongest typographic gesture on the page.

Weight changes are modest: regular for most text, medium for emphasis, bold for the logo. That restraint suits the site because the images already have strong shape and contrast. Avoid introducing a second display family or dramatic headline scale; the page depends on subtlety, not typographic spectacle.

## Layout

### Page frame

The page is centered inside wide side margins and a large top inset. The opening space is not empty; it is part of the composition because it gives the navigation and wordmark room to sit lightly before the first image arrives. The page reads as a narrow editorial column set into a much wider white field.

### Reading rhythm

The content stack is arranged in a clear order: a credit line, a short explanatory paragraph, then a media grid. The paragraph line length stays comfortable, which makes the page feel composed rather than dense. Keep the text blocks close enough to read as one section, but separate them enough that the page breathes. The visible spacing values point to a rhythm built from 14px, 21px, 44px, and 100px steps, which keeps the section changes calm and deliberate.

### Image placement

The first figure is large and dominant, but it still respects the column inset. Below it, the page shifts into a grid of pale tiles. Each tile is evenly spaced and gives the object inside a lot of breathing room. The grid feels like a studio specimen sheet: tidy, repetitive, and precise. That structure matters because it lets the objects vary while the framing stays constant.

### Spatial cadence

Use a compact set of spacing roles:

- Outer page inset: `3.96875rem`
- Major top offset: `6.25rem`
- Paragraph and credit spacing: `0.875rem` to `1.3125rem`
- Larger section breaks: `2.75rem`
- Tile padding and internal breathing room: `2rem` to `2.25rem`

The visual story depends on these bigger jumps. Do not compress the top of the page, and do not pull the image grid too close to the paragraph above it. The quiet comes from space as much as from color.

## Visual language

BKID's visual language is editorial, restrained, and object-focused. The work itself is presented as a series of studio studies: rendered forms, material samples, and repeatable geometric objects placed on a light ground. The interface does almost nothing beyond framing those pieces. That restraint gives the page a precise, almost archival character.

The imagery carries the most energy. The hero image shows a spread of colorful 3D forms under soft studio lighting. The smaller tiles continue that logic, each one centered inside a pale square or near-square field. Because the page avoids heavy UI treatment, the objects can feel tactile and carefully made. The light gray backgrounds reinforce that sense of a workbench or review sheet.

Shape stays simple. Corners are square or nearly square, borders are thin, and shadows are mostly left to the rendered objects rather than the UI. Avoid round badges, pill buttons, and decorative card treatments. The page is strongest when it looks like a disciplined layout for showing work, not a product interface trying to persuade.

## Components

### Header

- **Anatomy:** Small text navigation, plus a right-aligned BKID wordmark.
- **Typography:** `navigation` for links, `logo` for the mark.
- **Surface:** Transparent over the white page.
- **Spacing:** Wide lateral inset and a large gap above the first image.
- **Composition:** Keep the header visually light. It should mark the page, not dominate it.
- **Visible state:** The links read as plain text rather than button-like controls.

### Hero figure

- **Anatomy:** One large image block that establishes the page's material language.
- **Surface:** Light studio ground with strong object contrast.
- **Shape:** Rectangular crop with straight edges.
- **Spacing:** Significant whitespace around the image, especially above and below.
- **Composition:** The hero should feel primary but not full-bleed. It belongs inside the same column logic as the rest of the page.
- **Hierarchy:** This is the strongest visual element on the page, so keep it clean and uninterrupted.

### Credit line

- **Anatomy:** One small line of attribution beneath the hero image.
- **Typography:** `caption`.
- **Color:** `muted-ink`.
- **Spacing:** Close to the figure, but clearly separated from the longer paragraph that follows.
- **Composition:** The credit should be quiet and utilitarian. It supports the work instead of framing it.
- **Visible state:** Small, understated, and low-contrast.

### Paragraph block

- **Anatomy:** A compact explanatory paragraph that describes the work.
- **Typography:** `body` for the main text, `body-medium` only when emphasis is needed.
- **Color:** `ink-soft`.
- **Spacing:** Use a steady vertical rhythm so the paragraph sits calmly between the credit and the next visual group.
- **Composition:** Keep the measure narrow enough that lines remain readable and do not turn into a wide wall of text.
- **Visible state:** The paragraph is steady and unembellished; it does not need pull quotes, icon bullets, or callout styling.

### Specimen grid

- **Anatomy:** Repeated pale tiles, each holding one object in a centered or nearly centered position.
- **Surface:** `surface` and `surface-alt` create slight variation without making the grid loud.
- **Typography:** Any labels should stay small and muted, with `caption` or `legal` sizing.
- **Shape:** Square or nearly square tiles with little or no rounding.
- **Spacing:** Even gaps between tiles and enough inner padding for the object to breathe.
- **Composition:** Build the grid as a disciplined matrix. The repetition is what gives the page its studio-sheet character.
- **Visible state:** The tiles should remain flat and quiet. Avoid shadows, glow, or interactive-like styling.

### Wordmark

- **Anatomy:** A spaced BKID mark at the top edge.
- **Typography:** `logo`.
- **Color:** `ink`.
- **Spacing:** Keep it detached from surrounding content so it reads as a signature, not a navigation item.
- **Composition:** The wordmark is a small anchor in a page that otherwise stays visually restrained.

## Responsive behavior

On smaller screens, preserve the order of importance: navigation and wordmark first, then the hero figure, then the credit line, paragraph, and grid. The layout should collapse by stacking rather than by squeezing every element to the point of crowding. Keep the top inset generous, keep the body text readable, and let the image tiles wrap into fewer columns while maintaining their pale framing.

The grid should keep its sense of order even as it becomes more vertical. Avoid letting the header become heavy or turning the page into a boxed mobile card stack. The site feels like BKID because it keeps the same quiet spacing logic at every width. If the wordmark and nav get smaller, they should still read as edge-aligned and calm.

## Practical implementation guidance

### Preserve

- Keep the background white or nearly white.
- Preserve the wide side inset and the generous top gap.
- Keep navigation text small and understated.
- Use 14px body copy with relaxed leading for long explanations.
- Use 12px captions for credits and small metadata.
- Keep the specimen tiles pale, square, and evenly spaced.
- Let the rendered work supply the color, not the UI shell.

### Avoid

- Avoid heavy borders, thick rules, or card-like framing.
- Avoid rounded buttons, pills, and playful control shapes.
- Avoid loud accent colors in the interface.
- Avoid large display type that competes with the artwork.
- Avoid box shadows, gradients, and glossy effects on the shell.
- Avoid turning the grid into a promotional layout with call-to-action styling.

### Recommended build order

1. Establish the white canvas and the outer spacing rhythm.
2. Build the header with small text navigation and the BKID mark.
3. Add the credit line and paragraph pacing.
4. Recreate the large hero figure with its calm margins.
5. Build the specimen grid with equal pale tiles.
6. Add any small metadata or footer text last.

### Accessibility

- Keep contrast strong enough for black and gray text on white.
- Do not rely on color alone to separate navigation or metadata.
- If the navigation becomes interactive, preserve a clear focus indicator without adding visual noise.
- Make sure credits remain readable at small sizes and do not disappear into the tile background.
- Use descriptive alt text for the work images so the page still makes sense without the visuals.
- Keep line lengths comfortable so the body copy remains easy to scan.

## Scope note

This guide covers the desktop work page for B K I D, including the top navigation, hero figure, explanatory text, and pale specimen grid. It does not cover mobile stacking details, interactive states, motion, or licensing decisions. Measurements are practical adaptation targets.
