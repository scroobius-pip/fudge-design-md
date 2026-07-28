# How adventureson.band is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/adventureson.band-design)

Last updated: 2026-07-28

## Design character

adventureson.band is an **immersive artist presence** for Ty Finck’s instrumental ambient project. It behaves like a sequence of full-bleed visual poems—album art floating on soft abstract gradients, a stark white watercolor field for a release title, and a near-black cinematic portrait chapter for biography. UI is deliberately scarce: small underlined text links, quiet labels, and large margins of atmosphere.

What should survive adaptation:

- **Art-first full viewport scenes** instead of card grids or nav-heavy marketing.
- **Mood shifts by chapter** (dream gradient → pure white → dark portrait) without a single rigid template color.
- **Whisper-level typography**—small, often handwritten or humanistic, never billboard SaaS.
- **Almost no chrome**; streaming and contact links read like liner notes.

## Foundations

### Color

No structured color-role exports. Screenshot-driven palette of scenes:

- **Dream stage**: soft multi-stop gradients—mint, lavender, peach, sky—blurred so the centered album sleeve can glow.
- **Album object**: photographic art (forest prism light / rust leaf on cream) as a sharp rectangle on the soft field.
- **White chapter**: pure white ground with **indigo–cobalt watercolor rings** bleeding from left and right edges; navy handwritten title in the center.
- **Portrait chapter**: deep black field, warm key light on face through patterned shadow, off-white body text, warm accent links (amber/gold underline style on streaming names).
- **Side labels**: tiny white or black titles sitting in the gradient margins (“Ghost Bones”, “Doom As I Say…”).

Color is emotional and scene-specific. Do not collapse this into one flat brand hex for every page.

### Typography

Declared families were not available. Measured text is modest and even:

- Dominant sizes **14–16px** and **20–30px** at weight **400** (occasionally **700** at ~13px for small emphasis).
- Line-height often matches size (16/16) or opens slightly for bio paragraphs (~27px on 16).
- Visual voice mixes **quiet sans body** (bio) with **handwritten / inked display** for release titles (“cyclicalshmyclical”) and sleeve script.
- Tracking and case feel intimate—title case or casual lowercase—not industrial UI caps.

Hierarchy is soft: scene art leads; type captions the moment.

### Spacing and layout

- Large measured gaps (**40 / 100+ / 160+ px** class) reinforce isolation of art and text blocks.
- Layout patterns:
  - **Centered artifact**: album cover dead-center on gradient stage; titles parked far left/right in the blur.
  - **Symmetrical white field**: watercolor motifs mirrored left/right; title and link stack centered.
  - **Split portrait bio**: copy column left-of-center, large photographic portrait dominating the right half on black.
- No dense grid, no recurring card gap scale—spacing is compositional, like print packaging.

## Visual language

- **Shape**: primarily rectangular album art and full-bleed photos. Watercolor circles are organic and imperfect. A few controls use ~**5px** radius with **2px** solid borders when UI appears at all.
- **Borders / shadows**: mostly none on art stages. Depth comes from blur fields, photographic light, and the sharp edge of the sleeve against soft gradients.
- **Imagery**: nature photography with light leaks and prisms; macro leaf stills; intimate portrait with patterned shadow (window light through lattice); hand-made watercolor texture.
- **Texture**: grain, wash, and light matter more than vector illustration.
- **Motion**: not established from stills; the site feels scroll-chaptered.

## Components and states

Very few conventional components:

- **Album stage**: full-viewport gradient + centered cover + peripheral work titles as text links.
- **Release title slide**: centered handwritten name, short “new album” line, stacked streaming links (Bandcamp, Apple Music).
- **Bio chapter**: small caps-ish or tracked label (“BACKGROUND”), multi-sentence bio with inline text links, listen-on row, contact email link, large portrait.
- **Text links**: underlined or warmly accented inline links—never large filled buttons in the studied frames.

No app-like forms, tabs, or dashboards appear in these captures.

## Responsive behavior

All three captures are large viewports (**2048×1194**). They show distinct **scroll chapters** more than breakpoint variants. Expect:

- Chapters to reflow into single-column stacks on smaller screens (portrait below bio, cover still centered).
- Type to stay relatively small; do not “correct” it into 48px marketing heroes.
- Gradients and watercolors to remain full-bleed background treatments.

True multi-width token evidence is limited—treat responsiveness as careful stacking of the same art-led scenes.

## Practical guidance

**Preserve**

- Full-bleed emotional chapters with different palettes.
- Centered album artifact on soft abstract grounds.
- Small, human type and liner-note links.
- Cinematic portrait lighting for the human story.
- Restraint: empty space is part of the brand.

**Avoid**

- Standard musician Square-space templates with equal card grids and social icon rows in the hero.
- Loud neon CTAs or sticky commerce bars over the art.
- Hard UI shadows, dense nav, or Inter-at-16-everywhere sameness without the handwritten/release voice.
- Forcing one logo color across every chapter.

**Adaptation tips**

- Structure the site as 3–5 full-viewport scenes, each with its own background recipe.
- Use real artwork at high quality; let UI be caption-scale.
- Links: text only, generous hit area, subtle underline or warm accent.
- Bio on black should feel like film credits—quiet, readable, secondary to the face.

## Scope note

Three large homepage viewport captures of adventureson.band (`/`) showing album gradient stage, white watercolor release field, and dark portrait bio. Font families and measured color roles were not declared; guidance relies on screenshot inspection plus spacing/type size measurements. No merch checkout or tour table was in scope.

## Captured pages

[![Album stage on soft gradient](https://pin.fontofweb.com/6741?format=jpg)](https://design.withfudge.com/share/pin-6741)

[Album stage on soft gradient](https://design.withfudge.com/share/pin-6741)

[![Portrait bio chapter](https://pin.fontofweb.com/6740?format=jpg)](https://design.withfudge.com/share/pin-6740)

[Portrait bio chapter](https://design.withfudge.com/share/pin-6740)

[![cyclicalshmyclical white field](https://pin.fontofweb.com/6739?format=jpg)](https://design.withfudge.com/share/pin-6739)

[cyclicalshmyclical white field](https://design.withfudge.com/share/pin-6739)
