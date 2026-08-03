# How autogram.id is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/autogram.id-design)

Last updated: 2026-08-03

## Captured pages

[![Centered company hero with blue request button and floating document cards](https://pin.fontofweb.com/10168?format=jpg)](https://design.withfudge.com/share/pin-10168)

[Centered company hero with blue request button and floating document cards](https://design.withfudge.com/share/pin-10168)

[![Personal hero with photo tile, app icons, and claim-ID capsule](https://pin.fontofweb.com/10167?format=jpg)](https://design.withfudge.com/share/pin-10167)

[Personal hero with photo tile, app icons, and claim-ID capsule](https://design.withfudge.com/share/pin-10167)

## Overview

Autogram’s page language is spare, bright, and centered. The whole screen reads as a soft white field with one decisive message in the middle, then a loose ring of floating tiles that makes the product feel social rather than dashboard-like. The copy stays short. The whitespace stays large. The surrounding objects carry much of the personality: app icons, document cards, small photo crops, and colored name chips all sit outside the main text column like pinned notes around a workstation.

The same shell supports two nearby stories. One state speaks to people with “Build your corner of the internet”; the other speaks to companies with “The OS for teams that meet people.” The structure does not change much between them. What changes is the headline, the CTA label, and a few orbiting tiles. That consistency is the core of the design: a calm platform stage that can swap audience and message without changing visual grammar.

## Colors

The palette is almost monochrome, which keeps the layout from feeling busy even with many floating elements. `canvas` is the warm off-white base, and `surface` is the slightly brighter fill used for chips, pills, and small cards. `ink` is the near-black text color, used for the wordmark, headline, nav, and most supporting copy. `action` is reserved for the blue hero CTA and any other visible blue control that plays the same primary role. `action-strong` is the solid black used for the top-right CTA button. The QR Scans stat badge is a separate green accent local to that chip, not a page-wide action color.

That narrow palette is what makes the scattered third-party app colors work. LinkedIn blue, Instagram’s gradient, WhatsApp green, the purple podcast icon, and the red PDF badge appear inside the tiles themselves, not as brand-wide UI colors. The page keeps its own chrome quiet so those marks can remain legible. White and near-white surfaces dominate, so the blue action button reads as the most active object on the page, while the black header button feels more terminal and more compressed.

The visual balance is light on borders and heavy on open space. The only strong dark block is the black CTA. Everything else stays in the pale family, which lets the floating objects feel like they are suspended above the page rather than boxed into sections.

## Typography

Autogram’s typography depends on two material families: **Host Grotesk** for the hero and wordmark, and **Inter** for interface text, supporting copy, and controls. **Applesystem** appears in a few tiny utility labels and helper lines, where it reads as a secondary system layer rather than a brand voice. The headline weight is light enough to feel airy but still substantial because of the large scale. Inter carries the practical parts of the interface without competing with the hero. Font licensing is not supplied and should be confirmed before reuse.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Host Grotesk | 4.25rem | 450 | 1 | -0.04em | Centered hero headline |
| brand-mark | Host Grotesk | 1.3125rem | 500 | 1.5 | -0.02em | Wordmark and small brand text |
| body-large | Inter | 1.25rem | 400 | 1.4 | -0.006em | Hero supporting sentence |
| body | Inter | 0.9375rem | 400 | 1.5 | -0.0067em | Input placeholder and small explanatory copy |
| navigation | Inter | 0.9375rem | 400 | 1.5 | -0.0067em | Top bar links and audience labels |
| button | Inter | 0.875rem | 550 | 1.43 | -0.007em | Black and blue pill actions |
| chip | Inter | 0.875rem | 500 | 1.43 | -0.007em | Colored name tags and small badges |
| ui-utility | Applesystem | 0.875rem | 400 | 1 | 0em | Tiny helper labels and compact utility text |

The headline is the strongest typographic signal on the page. It sits at 68px, with tight negative tracking and compact one-line rhythm. The supporting sentence opens up just enough to stay readable in the wide center column. Interface text remains small, calm, and consistent; it avoids the look of a product app shell and instead behaves like light chrome around a landing-stage composition.

## Layout

The layout is built around a centered vertical axis. The wordmark sits at the upper left, the audience toggle sits near the top center, and the login plus CTA sit at the upper right. That header is thin and unadorned. It gives the page a frame, but not much more.

Below it, the main stage uses a very large amount of empty canvas. The headline, supporting sentence, and input-action capsule sit in the center of that field, with enough horizontal room that the orbiting tiles can spread widely without crowding the copy. The surrounding objects are placed as if they were on an ellipse around the hero: one or two large document cards high on the page, small app icons at the sides, a photo tile near one edge, and a few name chips attached to specific tiles. This creates motion without visible motion; the eye reads the layout as active because nothing is locked into a rigid grid.

Spacing is generous at every scale. The header uses compact internal gaps, but the shell outside it is large. The toggle feels cushioned and close together, the hero capsule feels broader and more functional, and the floating tiles are separated from the text by wide whitespace. The composition works because the center is calm while the periphery is playful.

## Visual language

Autogram’s visual language is a mix of soft elevation, rounded utility shapes, and borrowed app-brand color. The page does not rely on borders or hard section breaks. Instead, it uses gentle shadows, slight tilts, and the contrast between the pale background and the small colorful tiles. That gives the interface a light, hovering feel.

The floating pieces are all small and readable in a glance. Some are square app icons with glossy edges. Some are paper-like document cards with a tiny document glyph and a short title line. Some are photo crops with rounded corners. Some are pill labels in bright accent colors. The forms are varied, but they stay inside the same soft geometry. Nothing is sharp, heavy, or over-detailed.

The strongest visual idea is the orbit. It makes the product feel like a place where many things gather without turning the page into a dense collage. The central copy remains clean because the surrounding tiles stay just far enough away to frame it rather than compete with it. That balance is what makes the page feel calm even while it contains a lot of small objects.

## Components

### Header bar

- **Anatomy:** wordmark at left, audience toggle centered, login text at right, solid action button at far right.
- **Surface:** the header sits directly on the pale page canvas with no heavy bar treatment.
- **Typography:** Inter for nav links and controls; Host Grotesk only for the wordmark.
- **Shape:** the CTA is a black rounded rectangle; the toggle is a soft pill track with two compact segments.
- **Composition:** keep the center control visually balanced between the logo and the right-side actions. The header should feel like a thin frame, not a second content row.

### Audience toggle

- **Anatomy:** two labels, “For people” and “For companies.”
- **Surface:** soft light fill with a slightly brighter selected segment.
- **Typography:** small Inter text with low contrast in the inactive state and darker text in the active state.
- **Shape:** rounded pill geometry with no sharp corners.
- **Visible states:** the selected side appears raised and brighter; the inactive side is quieter and flatter.
- **Composition:** the toggle should stay compact so it reads as a switch, not a tab bar.

### Hero headline and supporting copy

- **Anatomy:** one large multiline headline, one short sentence beneath it.
- **Typography:** Host Grotesk for the headline, Inter for the supporting sentence.
- **Shape:** text blocks are open and unframed.
- **Spacing:** the sentence sits close enough to the headline to feel attached, but not so close that the type masses together.
- **Hierarchy:** the headline owns the page. The supporting copy only clarifies the promise and never tries to outgrow the heading.

### Input-action capsule

- **Anatomy:** a rounded input field on the left and a nested button on the right.
- **Surface:** pale shell with a subtle inset feel, then a vivid blue button set inside the capsule.
- **Typography:** placeholder text is small and quiet; the button uses the stronger button style.
- **Shape:** one long rounded form, not two separate controls.
- **Visible states:** one page uses “Request demo,” another uses “Claim ID,” but the structure stays identical.

### Orbiting tiles

- **Anatomy:** app icons, document cards, photo crops, and small status labels.
- **Surface:** white or near-white tile faces with soft edges and light lift.
- **Typography:** small Inter labels inside the paper-like cards; tiny chip text in colored badges.
- **Shape:** a mix of rounded squares, small rectangles, and pills.
- **Spacing:** each tile keeps generous air around itself so the hero stays readable.
- **Composition:** place the tiles on a wide ring around the center rather than lining them up in rows.
- **Visible states:** these tiles are decorative and informational at once; they do not look like menu items.

### Name chips and small badges

- **Anatomy:** short colored names such as Eric, Bianca, and Alex, plus small stat chips like the scan count delta.
- **Surface:** bright local accents against the pale field.
- **Typography:** compact chip text, slightly heavier than body copy.
- **Shape:** pill forms with tiny pointers or simple rounded ends.
- **Composition:** attach these chips to nearby tiles so they read as labels for the floating objects rather than as standalone UI.

## Responsive behavior

The studied views are wide desktop compositions. On narrower screens, the same system should keep the centered hero intact and reduce the orbit instead of squeezing it. The first thing to protect is the headline and input capsule; the surrounding tiles should thin out, collapse into fewer rows, or move farther from the text so the center remains readable. The header should keep its three-part balance, but the toggle and actions may need tighter spacing. The visual rule is simple: preserve the calm center, then let the floating ring become lighter and less crowded as width decreases.

## Practical implementation guidance

### Preserve

- Keep the page near-white and spare.
- Keep Host Grotesk reserved for the hero and wordmark.
- Keep the blue CTA as the main action color and black as the secondary terminal action.
- Keep the orbit of tiles loose, not grid-like.
- Keep the hero centered with a large amount of negative space around it.

### Avoid

- Avoid adding a second strong brand accent.
- Avoid heavy borders around the tiles.
- Avoid turning the floating objects into a dense dashboard grid.
- Avoid mixing many font families or using decorative type for the small labels.
- Avoid shrinking the headline so early that the layout loses its central pull.

### Recommended build order

1. Build the page canvas and the thin header frame.
2. Add the audience toggle and the right-side actions.
3. Set the hero headline and supporting sentence.
4. Add the input-action capsule as one combined control.
5. Place the orbiting document, app, and photo tiles.
6. Add the colored chips and small stat badges.
7. Tune the spacing so the center stays clear while the ring remains visible.

### Accessibility

- Keep the black and blue buttons large enough to hit easily.
- Give the icon-only tiles useful labels if they are interactive.
- Preserve strong contrast between text and the pale page canvas.
- Use a visible focus ring that does not break the soft geometry.
- Keep the centered hero line length readable so the headline does not become a wide, tiring block.
- Make sure the input placeholder is not the only cue for what the capsule does.

## Scope note

This guide covers the desktop home and companies hero surfaces: header, centered headline, input-action capsule, floating app and document tiles, photo tiles, and chips. It does not cover mobile stacking, deeper product pages, motion, hover treatment, or authenticated views. Measurements are rounded to the packet’s 0.125rem step.
