# How blindsight.space is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/blindsight.space-design)

Last updated: 2026-08-04

## Captured pages

[![Dark transcript panel with stacked lines and right-aligned time chips](https://pin.fontofweb.com/6419?format=jpg)](https://design.withfudge.com/share/pin-6419)

[Dark transcript panel with stacked lines and right-aligned time chips](https://design.withfudge.com/share/pin-6419)

[![Magenta ship-frame scene with a glowing circular ring and transcript dock](https://pin.fontofweb.com/6418?format=jpg)](https://design.withfudge.com/share/pin-6418)

[Magenta ship-frame scene with a glowing circular ring and transcript dock](https://design.withfudge.com/share/pin-6418)

[![Home hero with outlined BLINDSIGHT wordmark and huge WATCH FILM stack](https://pin.fontofweb.com/6407?format=jpg)](https://design.withfudge.com/share/pin-6407)

[Home hero with outlined BLINDSIGHT wordmark and huge WATCH FILM stack](https://design.withfudge.com/share/pin-6407)

[![Memories archive with layered cards, red titles, and left-edge pill nav](https://pin.fontofweb.com/6406?format=jpg)](https://design.withfudge.com/share/pin-6406)

[Memories archive with layered cards, red titles, and left-edge pill nav](https://design.withfudge.com/share/pin-6406)

## Overview

Blindsight uses a narrow set of visual rules and then commits to them hard. The page is built around a black stage, white outline lettering, red serif statements, and a small amount of blue link behavior that stays in the background rather than becoming the brand center. That restraint gives the site a film-poster gravity: the interface does not try to feel friendly, busy, or conversational. It feels like a title sequence that happens to contain navigation.

The strongest repeated move is scale. When the site needs a label, it makes it very small and upright at the edge. When it needs a statement, it makes it monumental and spare. When it needs a scene, it lets the footage or collage carry the atmosphere and keeps interface chrome almost invisible. The result is a system that treats text as architecture and imagery as weather.

## Colors

The palette is almost entirely a contrast study between darkness and light, with red as the dramatic punctuation and blue as a low-key interface default. Black forms the shell. White is used for outlines, pills, transcript text, and large word shapes. Red does not behave like a normal action color; it reads as the emotional or narrative color of the film itself. Blue is present as a standard link color and should stay quiet.

| token | hex | use |
|---|---|---|
| `canvas` | `#000000` | Page background, full-screen stage, transcript body backdrop |
| `ink` | `#FFFFFF` | Large lettering, pill fills, borders, transcript text, outline marks |
| `action` | `#0000EE` | Link defaults and sparse mechanical cues that should stay secondary |
| `signal` | `#FF0000` | Red serif headlines, small status rings, and emphasis inside the story |

The relationship between modes is simple: the shell stays black, the light surfaces stay white, and the images supply nearly all of the chroma. Red is reserved for the site’s own voice, not for every click target. That separation matters. If blue starts competing with red, the system loses its hierarchy. If white begins turning gray, the whole thing stops feeling sharp.

## Typography

Two families carry the whole identity: **Begum** for the red serif voice and **Px Grotesk** for the stark sans voice. Begum is credited to Manushi Parikh and Indian Type Foundry. Px Grotesk is credited to Nicolas Eigenheer and Optimo. The embedded file label `Px Grotesk-4326784242264206833` belongs to the same credited grotesk family and should be treated as part of the same display voice. Licensing should be confirmed separately before reuse.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Px Grotesk | 4.5rem | 400 | 1 | -0.0556em | Outline wordmarks, giant title blocks, white chapter statements |
| `rail-label` | Px Grotesk-4326784242264206833 | 4.5rem | 400 | 1 | -0.0556em | Edge labels, small upright navigation markers, and the same hard sans voice in compact form |
| `display-serif` | Begum | 4.5rem | 400 | 1 | -0.0556em | Red film-line statements, the dramatic intertitles, and the memory page’s serif countervoice |
| `memory-display` | Px Grotesk | 4.5rem | 400 | 1 | -0.0556em | Giant stacked calls to action and archive titles that need the same rigid weight |

The typography works because it refuses mixed moods. Px Grotesk gives the site its rigid, engineered skeleton. Begum gives it a theatrical pulse. The letter spacing is tight enough to make the words feel carved, not typeset casually.

Smaller UI text is clearly subordinate to those display voices. Even when labels, timestamps, or panel headings appear, they should feel like utility, not a second typography system. Keep the lower layer compact, quiet, and geometrically plain so the large headings remain the whole show.

## Layout

The home screen is a full-viewport black field with the identity and chapter markers pinned to the edges and a giant stack of text centered in the remaining space. The page does not build a classic top navigation bar or a marketing grid. Instead it creates a poster-like axis: vertical rail labels on the left, a giant outlined title in the middle, red serif lines as separators, and a bold white call to action stacked like a film placard.

The `/memories/` page keeps the same theatrical density but pushes it into a collage format. The giant white and red titles still dominate, yet they sit over a layered field of images, arcs, and floating cards rather than a single stage. The composition feels archival and fragmented, like a desk of material spread across a dark table. The page depends on overlap, not boxes. Pieces can cross each other because the black background keeps them legible.

The transcript view uses a different layout, but the same discipline. The page is split between a media plane on the left and a transcript plane on the right. The transcript pane is not a generic sidebar; it is a docked reading surface with a heading, search field, separators, and stacked entries. The black frame around it matters as much as the panel itself. There is a lot of empty darkness above and below the content, which makes the active strip feel suspended rather than embedded.

Spacing is generous but not soft. The visual rhythm comes from long gaps, tall padding, and edge alignment. The interface often leaves substantial black voids around the center content, which makes the content feel deliberate instead of crowded. That spacing strategy is the equivalent of a slow camera move: it gives the titles room to land.

## Visual language

Blindsight’s visual language is cinematic, spare, and slightly confrontational. It favors darkness with isolated bursts of light, usually from footage, luminous rings, or thin white strokes. The imagery is not decorative background. It is the primary mood carrier. The interface then overlays typography so large and restrained that it feels like a credit sequence or a chapter card.

The site also relies on sharp contrast in material treatment. White text can appear as a hard outline, a filled block, a pill, or a small timestamp capsule. Red text can be a full sentence, a short label, or a numeric marker. Those shifts happen without changing the underlying palette, which keeps the system coherent even when the page becomes visually dense.

There is almost no interest in soft interface chrome. Shadows are not part of the language. Heavy gradients are not part of the language. Rounded forms appear only where they solve a specific interface problem, such as a pill nav or a compact search field. The default mood is planar and rigid, with the media supplying all the softness and motion.

The strongest brand gesture is the tension between restraint and scale. When the site wants to feel calm, it empties the frame. When it wants to feel charged, it enlarges a single word until it dominates the page. That ratio is the identity.

## Components

### Chapter pill

- **Anatomy:** Slim vertical capsules on the left edge, one label per section or page state.
- **Surface:** White fill with black type, or a white stroke on the black field when the pill reads as an edge marker.
- **Typography:** Px Grotesk, condensed by context through scale and tight spacing rather than by visual ornament.
- **Shape:** Tall pill, fully rounded ends, narrow width.
- **Spacing:** Kept close to the viewport edge with a large amount of surrounding black space.
- **Role:** This is the site’s quiet navigation spine. It should never compete with the main title stack.

### Close control

- **Anatomy:** Small circular control in the top-right corner, rendered as a ring with a centered mark.
- **Surface:** Black fill, white outline, and a compact icon mark that stays legible against the void.
- **Shape:** Perfect circle with a thin stroke and a very small interior glyph.
- **Spacing:** Floats away from the page edges just enough to feel deliberate.
- **Visible state:** The control should stay crisp and high contrast, since it sits alone in open space.

### Transcript panel

- **Anatomy:** Heading, search field, thin divider, scrolling transcript rows, and compact timestamp chips.
- **Surface:** Deep black or near-black panel that sits cleanly against the main stage.
- **Typography:** Px Grotesk for the panel heading and utility labels; the row copy should stay small and legible.
- **Shape:** Search field and chips use gentle rounding; the overall panel stays rectilinear.
- **Spacing:** Tight internal rhythm, with consistent row separation and enough breathing room around the search field.
- **State:** Active rows can sit higher contrast than inactive rows, but the panel should remain quiet overall.

### Memory card

- **Anatomy:** Floating image tile, bold white memory label, red subtitle, and a small callout or date marker.
- **Surface:** Dark image crop set directly on the black field with minimal frame treatment.
- **Typography:** Px Grotesk for the white block label; Begum for the red supporting line.
- **Composition:** Cards can overlap and tilt visually through placement rather than through obvious decoration.
- **Role:** This component turns the site into an archive. It should feel like a spread of film notes and stills, not a standard thumbnail grid.

### Media stage

- **Anatomy:** Full-bleed or wide cinematic footage with the interface layered above or beside it.
- **Surface:** Dark, high-contrast imagery that reads as a film still rather than a product hero.
- **Composition:** The media is cropped boldly and can be partially occluded by overlays or side panels.
- **Role:** It provides motion, texture, and color temperature. The chrome around it should stay minimal so the footage does the emotional work.

## Responsive behavior

On narrower screens, the first thing to preserve is the hierarchy, not the exact composition. Keep the black field, the giant title, and one clear control path. Reduce the number of simultaneous layers before reducing the size of the hero statements. If the transcript panel stacks under the media on a small screen, the panel should remain readable as a separate reading surface rather than collapsing into a generic card list.

The chapter rail can compress into a small top or edge control, but it should remain visibly distinct from the body content. The memory collage should keep its sense of overlap, even if the number of floating pieces drops. What must not happen is a conversion into a dense, standard app layout. That would erase the site’s identity faster than any color change.

## Practical implementation guidance

### Preserve

- Keep the black field dominant. It is the canvas, the separator, and the atmosphere.
- Use white for structure and red for emphasis. Let blue remain a quiet utility color.
- Keep the big words huge and spare. The page depends on monumental typography.
- Allow the media to carry most of the texture. The UI should stay thin.
- Treat the left rail as a chapter marker, not as a conventional nav bar.

### Avoid

- Avoid soft SaaS cards, pastel surfaces, and ornamental gradients.
- Avoid adding more than a few visible border treatments. Most surfaces should feel open.
- Avoid turning red into a generic action color. Here it is narrative and dramatic.
- Avoid loading the page with many competing controls. The system works because it is selective.
- Avoid mixing in a third typographic voice. The contrast between Begum and Px Grotesk is enough.

### Recommended build order

1. Establish the black canvas and the edge rails.
2. Set the large Px Grotesk title forms and the red Begum statements.
3. Add the transcript panel as a separate reading surface.
4. Layer in the film stills, rings, and memory cards.
5. Tune the spacing so the page feels empty before it feels complete.

### Accessibility

- Keep the transcript text high contrast against the dark surface.
- Give the pill nav and the close control a strong visible focus state.
- Make the search field easy to identify without relying only on color.
- Provide meaningful alternative text for film stills and memory cards.
- If titles overlap imagery, check contrast after final cropping so the words stay readable.

## Scope note

This guide covers the home hero, the transcript view, and the `/memories/` archive surface. It does not pin down motion, hover behavior, exact small-text sizing, or alternate breakpoint layouts. Measurements are practical adaptation targets.
