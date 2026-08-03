# How getdesign.md is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/getdesign.md-design)

Last updated: 2026-08-03

## Captured pages

[![Black homepage hero with pixel headline and three-column intro](https://pin.fontofweb.com/9861?format=jpg)](https://design.withfudge.com/share/pin-9861)

[Black homepage hero with pixel headline and three-column intro](https://design.withfudge.com/share/pin-9861)

[![Dark analysis page with code block, stats cards, and white preview frame](https://pin.fontofweb.com/9862?format=jpg)](https://design.withfudge.com/share/pin-9862)

[Dark analysis page with code block, stats cards, and white preview frame](https://design.withfudge.com/share/pin-9862)

[![Full-height code sheet with narrow rails and monospaced system notes](https://pin.fontofweb.com/9863?format=jpg)](https://design.withfudge.com/share/pin-9863)

[Full-height code sheet with narrow rails and monospaced system notes](https://design.withfudge.com/share/pin-9863)

## Overview

getdesign.md reads like a dark code editor wrapped around a product catalog. The page keeps the canvas black, then uses a narrow ladder of charcoal surfaces to separate the header, the hero, the usage panel, the code sheet, and the white preview frame. The result is disciplined rather than decorative: most of the page is flat, boxed, and bordered, with only one warm action color and one pale accent chip breaking the monochrome field.

The strongest signature is the type system. The largest headlines use a pixel face that feels intentionally technical and slightly retro, while supporting copy stays in Geist and Geist Mono. That mix makes the site feel like a design tool built for people who already expect to read code, notes, and specs in the same view. The layout never hides the document-like nature of the content; it frames it.

The visual system is best described as dark-first, rectilinear, and text-led. It favors clear containers, compact rhythm, and low-noise labels over image-heavy marketing language. The white preview shell appears only when the page needs to show an output example, so the bright surface feels purposeful rather than generic.

## Colors

| token | value | use |
|---|---|---|
| `canvas` | `#000000` | Main page shell, header rail, and outer negative space |
| `surface` | `#0A0A0A` | Inset content fields and long code panels |
| `surface-raised` | `#141414` | Small cards, stat tiles, and utility controls |
| `surface-deep` | `#1A1A1A` | Heavier panel bases and darker boxed regions |
| `border` | `#242424` | Thin 1px rules around nearly every module |
| `ink` | `#FAFAFA` | Primary text on dark surfaces |
| `muted-ink` | `#A0A0A0` | Secondary body copy and quiet labels |
| `subtle-ink` | `#8B949E` | Low-priority captions and supporting metadata |
| `action` | `#F5A623` | The main request button and the strongest attention cue |
| `accent-chip` | `#FFB1EE` | Small “new” or highlight markers in the hero |
| `code-ink` | `#EDEDED` | Code and document text inside dark blocks |
| `code-muted` | `#D0D0D0` | Softer text inside boxed notes and utility areas |
| `preview-surface` | `#FFFFFF` | The embedded preview frame that resets the eye |

The palette is almost entirely achromatic until the interface needs emphasis. Black is not a single value; the page uses several near-black steps, from `#000000` to `#1A1A1A`, to keep dark sections distinct without changing mood. Borders sit at `#242424`, which is visible enough to define structure but quiet enough to preserve the editor feel. The main action color, `#F5A623`, works as a reliable beacon across the whole interface. It is joined only by the pale pink accent chip `#FFB1EE`, which appears as a tiny highlight rather than a second brand color.

The white preview frame is the only broad light surface. It is not a new theme; it is a viewing device inside the dark system. That contrast gives the page a sharp foreground/background relationship: dark shell, bright sample, then back to dark explanations.

## Typography

The type stack is narrow and intentional. Geist Pixel provides the brand signal and the oversized headline voice. Geist carries the body, labels, buttons, and most section titles. Geist Mono appears in command lines, code blocks, and the smaller technical annotations that give the page its tool-like tone. Applesystem shows up only as a fallback UI face in small utility text.

Licensing terms are not supplied here.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `site-mark` | Geist Pixel | 1.3125rem | 600 | 1.2 | 0.12em | Top-left wordmark and small pixel-brand labels |
| `hero-display` | Geist Pixel | 3rem | 400 | 1.05 | 0em | Large homepage headline and other primary display lines |
| `section-display` | Geist | 1.625rem | 600 | 1.15 | -0.02em | Page titles such as the analysis heading |
| `card-title` | Geist | 1.25rem | 500 | 1.3 | -0.01em | Section labels and compact subheads |
| `body` | Geist | 1rem | 400 | 1.5 | 0em | Supporting paragraphs and explanatory copy |
| `body-medium` | Geist | 1rem | 500 | 1.5 | 0em | Emphasized body copy and stronger button text |
| `meta` | Geist | 0.8125rem | 400 | 1.5 | 0em | Lightweight labels, metadata, and small annotations |
| `button` | Geist | 0.875rem | 500 | 1.43 | 0em | Filled and outlined controls |
| `code` | Geist Mono | 0.8125rem | 400 | 1.45 | 0em | Code blocks and document-like text fields |
| `fallback-ui` | Applesystem | 0.875rem | 400 | 1.4 | 0em | Unstyled utility text where the system face appears |

The hierarchy depends on contrast in family, scale, and spacing rather than on many weight changes. The pixel face should stay reserved for the brand mark and the loudest headline. Geist handles almost everything else, which keeps the page readable and consistent. Geist Mono should remain compact and disciplined; it is part of the interface language, not a decorative code font. The line lengths in the large panels are intentionally short, so the page benefits from compact leading and tight negative space around the strongest titles.

## Layout

The page is structured as stacked chapters inside a black frame. The header spans the full width, but its content stays compact: brand at left, navigation in the middle, utility actions to the right, and a strong amber button that anchors the bar. A 1px bottom rule keeps the header separate from the content without making it feel heavy.

The hero uses a split editorial layout. In the homepage view, the left side carries a large pixel headline and a short supporting paragraph. The middle column becomes a vertical list of usage promises, and the right column holds a boxed recommendation card with a small accent chip. The page is dark enough that these three columns feel like one composed surface rather than separate cards.

The analysis page shifts to a more content-dense arrangement. A heading block sits above a usage row in which the left column is a large code-like panel and the right column is a stack of small stat tiles, compact action buttons, and one wide amber call to action. That makes the page read like a spec sheet with a sales layer attached, not the other way around.

The lower preview area introduces a bright browser-like shell. Its white outer frame, thin top bar, and internal white content field give the page a clean output window after the dark explanatory sections. That frame should remain centered with generous side gutters so the dark page continues to act as a stage.

Across the whole layout, spacing stays measured and repetitive: wide outer gutters, 1px borders, 24px to 32px interior gaps, and deeper top padding inside the page-like panels. The effect is orderly and editorial, never crowded.

## Visual language

The site feels built from three materials: matte black, thin light rules, and hard-edged text blocks. The dominant visual move is containment. Almost everything sits inside a bordered rectangle, whether that rectangle is a code sheet, a stat tile, a button, or a preview shell. Because the borders are so restrained, the page gets its structure from alignment and spacing rather than from thick frames.

A faint scanline texture appears across the large dark document surface. It is subtle enough to avoid looking noisy, but it adds a coded grain that fits the subject matter. Combined with the monospaced text, it makes the central block feel like a technical sheet laid over a dark desk.

Rounded corners are present, but only as a secondary note. Small buttons and chips use modest rounding, and a few larger cards soften the corners a little more. The page does not lean on circular shapes or soft glass effects. It stays firm, rectangular, and slightly mechanical.

Shadows are sparse. When they appear, they are shallow and used on buttons or small utility controls, not on the main surface hierarchy. That keeps the system crisp and prevents the dark palette from turning muddy. The one warm amber button and the tiny pink accent chip do most of the chromatic work, so the page never needs gradients to feel alive.

## Components

### Header

- **Anatomy:** Left wordmark, central navigation links, and right-aligned utility controls with one prominent request button.
- **Surface:** Black bar with a 1px bottom rule in dark gray.
- **Typography:** `site-mark` for the brand, `meta` and `button` for links and utility text.
- **Shape:** Small-radius controls, mostly 6px to 8px, with some pill-like utility capsules.
- **Composition:** Keep the header low and quiet; it should frame the page, not compete with the hero.

### Primary action

- **Anatomy:** A filled amber button with compact internal padding and dark text.
- **Surface:** `#F5A623` fill with no heavy chrome.
- **Typography:** `button` in dark text.
- **Shape:** Rounded rectangle rather than a full pill; the corners stay crisp enough to match the rest of the system.
- **Visible state:** The default state already feels primary, so it should not depend on extra visual noise.

### Code panel

- **Anatomy:** Long monospaced document block, often with narrow margins and many short lines.
- **Surface:** Near-black fill, thin border, and a faint scanline texture.
- **Typography:** `code` for the main text, with smaller muted labels when needed.
- **Spacing:** Wide internal padding and consistent line spacing; the block should feel like a sheet inside the page.
- **Composition:** This is the most literal object in the system, so it should stay left-aligned and calm.

### Preview frame

- **Anatomy:** White browser-like shell, thin top bar, internal content field, and a large black headline area.
- **Surface:** Bright white with very light gray separators.
- **Typography:** Large black headings, then body text and a blue or amber action inside the preview content.
- **Shape:** Slightly rounded outer shell, clean inner edges.
- **Composition:** Treat it as the eye reset in the layout; it should arrive after the darker explanatory sections.

### Utility cards and stat tiles

- **Anatomy:** Small boxes for installs, bookmarks, save, download, and similar secondary actions.
- **Surface:** Dark raised panels with subtle borders.
- **Typography:** `meta` for labels and `button` for action text.
- **Shape:** Modest rounding, compact height, and narrow horizontal padding.
- **Visible states:** Some controls are outlined, some are filled, but all stay close to the same dark family so the hierarchy comes from fill strength and size.

## Responsive behavior

On narrower screens, the page should collapse in order rather than in chunks. Keep the brand and main action visible first, then stack the hero columns so the headline stays above the reference card and the usage list. The code panel should remain before the stats and action stack, because it carries the explanatory weight. The white preview shell should still read as a distinct frame; do not flatten it into a plain card.

The pixel headline can wrap, but it should keep its large scale until the line breaks become awkward. Body copy should stay at readable sizes rather than shrinking to fit a single row. Borders need to remain visible so the dark modules do not merge into one field. If the amber action wraps, preserve its fill and corner radius so it still reads as the main path. The layout should stay spacious even when stacked; this system depends on air more than density.

## Practical implementation guidance

### Preserve

- Keep the black canvas and the thin border language across every major surface.
- Use Geist Pixel only where the brand needs a strong technical stamp.
- Keep Geist as the default reading face for most copy and controls.
- Reserve `#F5A623` for the main action path and `#FFB1EE` for tiny accent notes.
- Let the preview frame stay visibly white so the page keeps its dark-to-light rhythm.

### Avoid

- Avoid bright gradients, glass effects, or soft shadow layers that would weaken the editor feel.
- Avoid replacing the pixel headlines with another display family.
- Avoid decorative color runs; this system works because the palette is mostly monochrome.
- Avoid heavy rounded cards on every block; the page should feel boxed, not bubbly.
- Avoid shrinking the layout into a generic stacked marketing page where every section looks the same.

### Recommended build order

1. Build the header and define the black frame.
2. Add the main type hierarchy, starting with the pixel headline and the Geist body copy.
3. Recreate the dark code panel and the small utility card cluster.
4. Add the amber request button and the smaller outlined controls.
5. Place the white preview frame as the contrasting output surface.
6. Refine borders, spacing, and the faint scanline texture.

### Accessibility

- Keep contrast high on all dark surfaces, especially for muted labels and tiny metadata.
- Make keyboard focus visible on the amber button, dark controls, and any tab-like switches.
- Give icon-only controls plain labels so the action is clear without color or shape.
- Keep line heights roomy enough that the code-like sections remain legible at smaller sizes.
- Do not use color alone to distinguish the active action from the secondary controls.

## Scope note

This guide covers the dark desktop homepage, the analysis/detail page, the code-sheet panel, the usage and action cards, and the white embedded preview shell. It does not include mobile layouts, motion, hover or focus styling, loading or error states, or font licensing beyond the families named above.
