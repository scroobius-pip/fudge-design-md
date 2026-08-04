# How danielsun.space is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/danielsun.space-design)

Last updated: 2026-08-04

## Captured pages

[![Yellow-beam hero with centered pill nav and oversized black wordmark](https://pin.fontofweb.com/8691?format=jpg)](https://design.withfudge.com/share/pin-8691)

[Yellow-beam hero with centered pill nav and oversized black wordmark](https://design.withfudge.com/share/pin-8691)

[![Staggered work grid of tilted cards with pale shells and mixed previews](https://pin.fontofweb.com/7972?format=jpg)](https://design.withfudge.com/share/pin-7972)

[Staggered work grid of tilted cards with pale shells and mixed previews](https://design.withfudge.com/share/pin-7972)

[![Bright-ones section with handwritten notes, large type, and portrait snapshots](https://pin.fontofweb.com/7971?format=jpg)](https://design.withfudge.com/share/pin-7971)

[Bright-ones section with handwritten notes, large type, and portrait snapshots](https://design.withfudge.com/share/pin-7971)

[![Project collage spread with sticker labels, white framing, and framed mockups](https://pin.fontofweb.com/7969?format=jpg)](https://design.withfudge.com/share/pin-7969)

[Project collage spread with sticker labels, white framing, and framed mockups](https://design.withfudge.com/share/pin-7969)

[![Timeline strip with circular badges, hand-drawn line, and year markers](https://pin.fontofweb.com/7968?format=jpg)](https://design.withfudge.com/share/pin-7968)

[Timeline strip with circular badges, hand-drawn line, and year markers](https://design.withfudge.com/share/pin-7968)

## Overview

danielsun.space is a personal portfolio system built around one clear contrast: a bright, high-key canvas against very heavy black type. The page feels authored, not templated. A centered pill navigation floats above the content, then the hero drops into a friendly intro line and an oversized condensed name lockup that spills beyond the viewport. Yellow diagonal light bands cut across the white field and give the home screen its energy.

The visual logic stays consistent across the rest of the page. Work sections use pale shells, rounded corners, and staggered card sizes. Story sections mix polished mockups with hand-drawn annotations, sticker-like labels, and scrapbook framing. The result is a site that feels personal and alive, but still disciplined enough to read as a professional portfolio.

Preserve these qualities:

- One dominant narrative surface instead of a broad site map.
- Heavy condensed display type as the main identity marker.
- White canvas with yellow as the only loud signal color.
- Rounded, soft-edged shells for cards and panels.
- Handwritten accents and sketch marks as human counterpoint.
- Big image blocks and mockups that do most of the talking.

## Colors

The palette is narrow and direct. White carries most of the page, black handles the strongest text, gray softens supporting copy, and a single yellow family drives the action moments. The design does not need a broad chromatic system. It needs a clear hierarchy: white for breathing room, black for weight, yellow for momentum, and pale gray for structure.

| token | value | use |
|---|---|---|
| `action` | `#FFD900` | Primary project button, active chip, and bright highlight fills |
| `action-strong` | `#FFD500` | Deeper yellow for the most emphatic call-to-action surface |
| `action-soft` | `#FFEF85` | Softer yellow for glow, wash, or gentle emphasis |
| `highlight` | `#FEEE86` | Warm beam color behind the hero and light accent fields |
| `ink` | `#000000` | Main headline color and the heaviest text on the page |
| `ink-strong` | `#1F1F1F` | Dense dark text, icons, and small control surfaces |
| `ink-soft` | `#424242` | Supporting copy on white and pale panels |
| `ink-muted` | `#767676` | Notes, smaller labels, and quiet explanatory text |
| `nav-shell` | `#2B2B2B` | Floating navigation capsule and other dark UI shells |
| `canvas` | `#FFFFFF` | Page background and the framing space between sections |
| `surface` | `#F5F5F5` | Raised cards and project panels |
| `surface-subtle` | `#F2F2F2` | Softer story panels and large soft containers |
| `border` | `#E6E6E6` | Hairline dividers and card edges that need a light boundary |
| `border-strong` | `#CFCFCF` | Slightly firmer separators and framed details |

The relationship between modes is simple. Light mode is the default and carries almost everything. Photographic and illustrated areas can introduce richer shadows, but the interface itself should stay bright. Dark values are local, not global: they belong to the pill nav, headline weight, and small framed objects. Yellow is not decoration layered on top of a neutral system; it is the system’s active signal, so keep it visually consistent across buttons, chips, and hero beams.

## Typography

The site uses a deliberately mixed type palette, but the hierarchy is still clear. **Reddit Sans Condensed** carries the dramatic display work, **Inter** handles most of the body and product copy, **Inter Tight** tightens the small navigation text, and **Caveat** provides the handwritten notes and one-off annotations. The system family is only a fallback and microchrome layer. Inter and Inter Tight are credited to Rasmus Andersson / Rsms. Reddit Sans Condensed is credited to Stephen Hutchings / Reddit. Caveat is used here as a handwritten accent, with no reuse claim attached in this guide. Webfont licensing should be confirmed before reuse.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Reddit Sans Condensed | 6.5rem | 900 | 0.96 | -0.03em | Oversized name lockup and main page statement |
| `section-display` | Reddit Sans Condensed | 4.5rem | 900 | 0.96 | -0.03em | Large section headings and manifesto lines |
| `hero-support` | Inter | 1.875rem | 500 | 1.2 | 0em | Friendly intro copy above the hero wordmark |
| `body` | Inter | 1.5rem | 500 | 1.35 | 0em | Story paragraphs and descriptive copy blocks |
| `body-small` | Inter | 1.375rem | 500 | 1.35 | 0em | Card labels, project notes, and compact explanations |
| `nav` | Inter Tight | 1.125rem | 500 | 1.2 | 0.005em | Top navigation text and compact control labels |
| `handwritten-note` | Caveat | 2rem | 700 | 0.96 | -0.03em | Sketch notes, caption marks, and personal annotations |
| `micro` | System-Sansserif | 0.75rem | 400 | 1 | 0em | Tiny metadata, utility hints, and fallthrough chrome |

The display hierarchy depends on scale and compression more than on weight changes. The condensed headlines are almost poster-like: heavy, tight, and proud. Inter copy stays calm and readable, with enough line height to breathe inside large open panels. Caveat should remain a small accent, not a second body face. It works best when it looks like a human note pinned onto a more exacting grid.

## Layout

The home page is laid out as a sequence of large editorial scenes, not as a uniform component grid. The first screen keeps a lot of open sky around the content, then lands a centered navigation pill, a short intro sentence, and a giant black wordmark that is intentionally cropped by the viewport edge. The diagonal yellow bands create motion without adding extra UI elements. That opening needs to feel spacious, confident, and almost poster-like.

Later sections switch into wide rounded panels with generous margins and soft backgrounds. Work previews often sit in asymmetrical arrangements: one large card anchors the composition while smaller cards float nearby, overlap slightly, or sit offset enough to feel hand arranged. The panels do not need strict equal-width columns. They need a rhythm of large and small, blank and dense, image and text. The white gaps between blocks are part of the composition, not empty leftovers.

Story sections use a different balance. They pair large copy blocks with mockups, photographs, sketches, stickers, and labels. The panels read like curated spreads, with the text occupying one side and the visual material taking the other. The overall layout should feel like a portfolio built from big curated moments, each one given enough space to read on its own.

## Visual language

The visual language is playful, personal, and carefully composed. The page combines polished portfolio presentation with handmade marks: scribbles, signature-like notes, sticker labels, timeline doodles, and photo-card framing. Those human details stop the site from feeling too slick, while the condensed black type keeps it from drifting into craft-blog territory. The tension between the two is the brand.

Yellow light bands are the most recognizable motion cue in the system. They sweep diagonally across the hero and create a sense of sunlit energy without relying on gradients everywhere. The rest of the interface stays comparatively quiet: white fields, pale shells, small borders, and compact dark pills. That restraint makes the illustrations and mockups feel more vivid. The design should always leave enough room for the visual objects to breathe, because the objects are carrying most of the personality.

Roundedness matters, but only at the right scale. Small controls can be pill-like, while large panels should be soft and broad rather than bubbly. Shadows, if used at all, should stay subtle; the current feel comes more from spacing, overlap, and scale than from depth effects.

## Components

### Top navigation pill

- **Anatomy:** Small icon circle, short text links, and a bright project chip at the right edge.
- **Surface:** A dark capsule over open white or yellow-backed space.
- **Typography:** Compact Inter Tight or similarly tight sans text, with the chip slightly stronger than the links.
- **Shape:** Full pill with a strong rounded edge; the chip can feel slightly inset inside the shell.
- **Spacing:** Tight horizontal rhythm, small gaps, and enough padding to keep the capsule airy instead of cramped.
- **Visible state:** One item appears active through stronger contrast and the yellow project chip stays prominent.

### Hero wordmark and intro

- **Anatomy:** A short friendly intro line, then a huge condensed name or title.
- **Surface:** No boxed container; the page itself is the stage.
- **Typography:** Inter for the intro, then Reddit Sans Condensed for the main lockup.
- **Composition:** The wordmark should push hard against the viewport edge and feel intentionally cropped.
- **Hierarchy:** The intro stays secondary; the black wordmark is the first thing the page wants remembered.

### Project cards

- **Anatomy:** Large preview image, short title, and a compact descriptor line.
- **Surface:** Pale gray or white shells with clear rounded edges.
- **Typography:** Inter body sizes with restrained weight, never fighting the image.
- **Shape:** Soft corners around 24px to 32px, with larger radii for sticker-like objects.
- **Spacing:** Generous internal padding and large exterior gaps so cards can stagger without feeling crowded.
- **Variants:** Some cards are large and dominant, others are smaller and partly overlapped to create a scrapbook rhythm.

### Story panels

- **Anatomy:** Paragraph copy, mockup image, sketch marks, and handwritten notes.
- **Surface:** Very soft light panels with a calm, paper-like feel.
- **Typography:** Inter for the main copy, Caveat for the annotations.
- **Composition:** Text and image should share the panel, not compete for equal formal weight.
- **Hierarchy:** The story copy reads first; the decorative mark makes it feel personal after the fact.

### Timeline and manifesto blocks

- **Anatomy:** Large statement line, row of circular badges or icons, and a hand-drawn timeline stroke.
- **Surface:** White canvas with only enough structure to hold the sequence together.
- **Typography:** Reddit Sans Condensed for the statement, Inter for the labels, Caveat for the note-like text.
- **Shape:** Round badges can become very soft and almost emblem-like.
- **Composition:** Keep the line horizontal and open so the year markers and badge row can breathe.
- **Visible state:** The timeline reads as a progression, not as a navigation control.

## Responsive behavior

On narrower widths, keep the same hierarchy but reduce the number of simultaneous focal points. The pill nav should shrink before it breaks apart. The hero should stack its intro and wordmark cleanly, then let the big condensed title remain the lead. Work cards should collapse into a single-column or two-step stack, with the strongest preview first and the supporting material following underneath. Story panels should preserve the mix of copy, mockup, and annotation, but allow the image to drop below the text when space gets tight.

Keep the large rounded shells, but let spacing tighten before the shapes change. The yellow beams can simplify into broader fields on small screens rather than trying to preserve every diagonal slice. Handwritten notes should stay readable and small; they should never become the only way to understand a section. Above all, preserve the sense of a carefully edited portfolio, not a dense app layout.

## Practical implementation guidance

### Preserve

- Keep the white canvas and the yellow signal as the core visual pair.
- Use condensed black display type for the most important statements.
- Let project imagery and mockups dominate their panels.
- Keep the navigation as a small floating capsule rather than a large header bar.
- Retain handwritten notes, sketch marks, and sticker-like labels as a human layer.
- Use large rounded corners on cards and softer shapes on the biggest panels.

### Avoid

- Avoid turning the page into a generic corporate grid with equal cards everywhere.
- Avoid replacing the yellow signal with a different accent family.
- Avoid heavy shadows and glossy effects; the current feel is mostly flat and airy.
- Avoid using Caveat for essential copy or long paragraphs.
- Avoid overpacking the hero with extra controls, badges, or secondary calls to action.
- Avoid making every section equally loud; the design depends on contrast between quiet white space and bold moments.

### Recommended build order

1. Build the white canvas, yellow beam treatment, and centered nav capsule.
2. Set the condensed display hierarchy and the friendly Inter intro line.
3. Add the main project card shell and its staggered spacing system.
4. Build the story panel pattern with mockup, copy, and handwritten notes.
5. Add the timeline strip and the manifesto-style headline blocks.
6. Tune radii, spacing, and label sizes so the page reads as one system.

### Accessibility

- Keep the yellow chip text dark enough to remain legible against bright fills.
- Preserve clear focus states on the nav links and project actions.
- Do not use handwritten text as the only carrier of meaning.
- Keep body copy in Inter at readable line lengths and avoid compressing it into narrow columns.
- Use specific alternative text for mockups, portraits, and illustrated cards.
- Make sure small labels and timeline notes still have enough contrast on pale panels.

## Scope note

This guide covers the homepage narrative surface visible in the supplied home views: the yellow-beam hero, the work grid, the story panels, the timeline strip, and the bright manifesto section. It does not cover interior case-study pages, motion rules, or exact small-screen breakpoints.
