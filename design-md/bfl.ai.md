# How bfl.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/bfl.ai-design)

Last updated: 2026-08-04

## Captured pages

[![Footer grid with logo, link columns, and legal rows](https://pin.fontofweb.com/6151?format=jpg)](https://design.withfudge.com/share/pin-6151)

[Footer grid with logo, link columns, and legal rows](https://design.withfudge.com/share/pin-6151)

[![Dark hero with oversized title and white floating cards](https://pin.fontofweb.com/6147?format=jpg)](https://design.withfudge.com/share/pin-6147)

[Dark hero with oversized title and white floating cards](https://design.withfudge.com/share/pin-6147)

[![Three stacked white cards layered over the dark stage](https://pin.fontofweb.com/6148?format=jpg)](https://design.withfudge.com/share/pin-6148)

[Three stacked white cards layered over the dark stage](https://design.withfudge.com/share/pin-6148)

[![Centered FLUX.2 promo with two actions over painted art](https://pin.fontofweb.com/6145?format=jpg)](https://design.withfudge.com/share/pin-6145)

[Centered FLUX.2 promo with two actions over painted art](https://design.withfudge.com/share/pin-6145)

## Overview

Black Forest Labs uses a visual system that feels like a research poster laid over a night landscape. The page is built from contrast rather than ornament: near-black ground, soft white cards, huge white headlines, and small mono labels that look stamped rather than decorative. The result is restrained but dramatic. Nothing in the system is loud by itself, yet the whole page still feels cinematic because the imagery, type scale, and surface changes are aligned.

The identity depends on two strong opposites. The first is the dark field, which lets the imagery and the white product sheets float without visual noise. The second is the white card language, which turns each model or access path into a compact information block. Those cards are not glossy marketing shells. They behave more like clipped sheets from a technical notebook, with thin rules and just enough rounding to keep them soft.

The page also uses a clear tonal progression. Early sections keep the dark field and let the cards do the talking. The footer then compresses into a dense utility grid with the wordmark, section lists, and legal links. Across that progression, the hierarchy never changes: title first, supporting line second, action last.

## Colors

The palette is intentionally narrow. The interface stays inside a dark forest-green black, white, and two muted gray-greens. That constraint is what makes the page feel disciplined. There is no bright accent color fighting for attention. Buttons, labels, and rules stay subdued so the imagery and the large headings remain dominant. White is used in two ways: as foreground text on the dark canvas, and as the surface for the product cards. The difference matters because it gives the cards the feeling of detached technical modules.

| token | hex | use |
|---|---|---|
| action | #838987 | Quiet button fill, muted calls to action, and low-contrast interactive blocks |
| ink | #FFFFFF | Headlines, page titles, and utility text on the dark field |
| muted ink | #556659 | Small labels, border tone, and subdued metadata on dark surfaces |
| canvas | #07130E | Main page ground and the dark image field behind the cards |
| canvas deep | #000000 | Footer floor, deepest transitions, and the darkest support text on cards |
| surface | #FFFFFF | Floating product panels, white sheets, and light utility cards |
| border | #556659 | 1px dividers, hairline rules, and subtle card outlines |

The system shifts between dark and light rather than between many hues. Dark sections feel like a stage set. Light cards feel like extracted documents placed on top of that stage. The action tone remains calm in both modes. Even when a control is prominent, it should not break the overall hush. That keeps the brand from reading as generic SaaS chrome. It reads instead as a product interface with editorial restraint.

## Typography

Instrument Sans carries the display and body hierarchy. IBM Plex Mono carries the small utility language, link lists, and footer-like information. That pairing is doing the most visible brand work after the dark palette. Instrument Sans gives the page its wide, soft, modern headline shapes. IBM Plex Mono adds a technical cadence to the side labels and link clusters, especially where the page wants to feel systematic rather than promotional. Instrument Sans is credited to Rodrigo Fuenzalida at Frag Type. IBM Plex Mono is credited to Mike Abbink, Paul Van Der Laan, and Pieter Van Rosmalen at Bold Monday. Licensing should be confirmed before reuse.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Instrument Sans | 6.7188rem | 500 | 0.9 | -0.05em | Large landing-page headline |
| section-display | Instrument Sans | 5.7109rem | 500 | 0.9 | -0.05em | Secondary hero and section lead |
| panel-title | Instrument Sans | 3.7179rem | 500 | 1 | -0.05em | Large card titles and page chapter headers |
| feature-title | Instrument Sans | 3.1963rem | 500 | 1 | -0.05em | Stacked feature cards and product names |
| body-large | Instrument Sans | 1.8698rem | 400 | 1.18 | -0.02em | Hero support copy and explanatory statements |
| body | Instrument Sans | 1.4349rem | 400 | 1.1 | -0.01em | Card descriptions and longer reading blocks |
| body-medium | Instrument Sans | 1.1033rem | 500 | 1.25 | 0em | Buttons and emphasized short copy |
| nav-label | Ibm Plex Mono | 0.875rem | 500 | 1.4 | 0.05em | Header links and compact navigation labels |
| utility-label | Ibm Plex Mono | 0.9783rem | 500 | 1.4 | 0.05em | Side labels, category tags, and tiny support copy |
| legal-copy | Ibm Plex Mono | 0.8533rem | 500 | 1.45 | 0.05em | Footer lists, fine print, and secondary utility text |

Hierarchy comes from scale and spacing more than from multiple weights. The biggest headings are wide and spare. The medium body size is still substantial, which keeps the cards legible at a glance. The mono text should feel like systems language: compact, ordered, and slightly mechanical. Avoid mixing in another family for emphasis. The contrast between the two existing families is already enough.

## Layout

The layout is desktop-first and stage-like. The dark field expands edge to edge. On top of it, the content is arranged in broad columns with large gaps rather than dense grids. The hero generally uses a left text column and a right visual stack, with the left side carrying the main statement and the right side carrying cards or imagery. That split is a core part of the brand because it keeps the reading path direct while allowing the product sheets to feel layered.

Spacing is generous but controlled. The system repeatedly uses the shared step of 16, 28, 32, and 48 pixels for smaller separations, then jumps to 96 pixels for the larger hero inset. Bigger drops such as 256 pixels and beyond create the long visual breathing room that the footer and lower utility sections need. The page feels spacious because most modules are not trying to fill the width. They are anchored, then allowed to float against the dark ground.

The card stack is the clearest layout motif. Cards are white, rectangular, and lightly rounded. They overlap or sit close enough to suggest a stack, but each one stays readable as a separate product path. The result is a controlled rhythm: one title card, one supporting card, then another card beneath it. That rhythm works well because the cards all share the same width language and the same quiet border tone.

The footer reverses the hero logic. Instead of a floating visual stack, it becomes a dense utility matrix with the logo on one side and multiple columns of links on the other. The footer keeps the same dark field, but it trades big visual statements for smaller, ordered information. That transition makes the page feel complete without changing the brand voice.

## Visual language

The page speaks through three visual modes. The first is the dark atmospheric field, which acts like a backdrop for the whole site. The second is the white information card, which behaves like a product sheet or access module. The third is the illustrated or photographic hero panel, which adds mood without becoming decorative clutter. These modes work together because none of them is over-embellished. The imagery can be painterly, photographic, or textured, but it stays calm and muted so the type remains legible.

The most distinctive trait is the refusal to over-style the surfaces. Cards do not use heavy effects or glossy treatments. The rounding is minimal at 4 pixels, and the borders are thin enough to feel almost like rules on paper. That makes the cards seem precise rather than casual. The dark backdrop can carry a soft radial glow or a faint transition into the image, but it should never become a colorful gradient show. The page is about depth through layering, not decoration through effects.

Mono labels provide another important visual cue. They are small, upper-register details that describe what a module is without competing with the main headline. That means the page can show a lot of structure while still feeling simple. The labels also make the page feel technical and product-oriented, which is essential for a model lab site. When those labels sit next to a large Instrument Sans heading, the system feels both disciplined and contemporary.

## Components

### Top navigation and utility strip

- **Anatomy:** wordmark, product groups, resource groups, company links, and a right-side action.
- **Typography:** navigation uses the mono utility style or a small sans body style, depending on the section.
- **Surface:** it sits directly against the dark field with very little framing.
- **Spacing:** the links need enough horizontal separation to stay readable, but not so much that the bar feels loose.
- **Visible state:** the action should stay quiet, not bright; it belongs to the same muted palette as the rest of the system.

### Hero statement block

- **Anatomy:** a very large headline, a short supporting paragraph, and a compact action line.
- **Typography:** use the largest Instrument Sans size for the main statement and a smaller body size for the explanation.
- **Surface:** dark field, sometimes with an illustrated or photographic backdrop.
- **Shape:** no enclosure around the text block; the surrounding negative space is part of the component.
- **Composition:** the headline should dominate the left side and remain the first thing the eye reads.

### Floating product cards

- **Anatomy:** title, short label cluster, supporting paragraph, and one action.
- **Typography:** large card titles in Instrument Sans, small label clusters in IBM Plex Mono, support copy in body size.
- **Surface:** solid white with a thin border tone.
- **Shape:** 4px radius; sharp enough to feel technical, soft enough to avoid harshness.
- **Spacing:** generous inner padding, then enough outer space to let cards overlap without collision.
- **Visible states:** cards can stack vertically or step across the field, but they should never become a dense dashboard grid.

### Illustrated product promo

- **Anatomy:** centered headline, short product line, two compact actions, and a small compare link.
- **Typography:** large centered display type over the image; smaller body copy and mono link beneath.
- **Surface:** image-led panel with the text floating above it.
- **Composition:** keep the headline centered and the buttons side by side so the panel feels balanced.
- **Mood:** this is the most expressive component in the system, but it still needs the same quiet finish as the rest of the page.

### Footer grid and legal band

- **Anatomy:** left wordmark block, several link columns, and a final legal row.
- **Typography:** IBM Plex Mono for the lists and legal text; the wordmark can remain a graphic element.
- **Surface:** deepest canvas tone with white or muted text.
- **Spacing:** the grid should feel dense but still orderly, with clear column separation.
- **Visible states:** links stay understated; the footer should read like a controlled utility zone, not a second hero.

## Responsive behavior

The desktop composition should collapse by preserving the reading order, not by reshuffling the visual story. On smaller widths, the headline still comes first, then the support line, then the cards, then the footer. The stacked card language should remain intact even when the cards become a single column. The mono labels can compress, but they should not disappear. Their role is to keep the product structure visible.

Type scaling should be conservative. The brand relies on oversized headings, but they should reduce smoothly rather than collapsing into standard web text. The dark field should continue to frame the layout, and the white cards should keep their own strong contrast. Avoid letting the page become a generic mobile marketing stack with rounded blocks and center-aligned copy everywhere. The brand needs its left-anchored, editorial feeling even when space is tighter.

## Practical implementation guidance

### Preserve

- Keep the dark canvas as the dominant surface.
- Use Instrument Sans for the large statements and IBM Plex Mono for the compact technical language.
- Keep the card radius at 4px and the borders thin.
- Let white cards float over the dark field rather than burying them inside nested containers.
- Keep the action tone muted; the page should never snap into bright SaaS color.

### Avoid

- Avoid extra font families.
- Avoid bright accent gradients, neon buttons, or glossy glass effects.
- Avoid dense multi-card dashboards that erase the editorial rhythm.
- Avoid adding extra depth effects on every module; the image layers and surface contrast already supply depth.
- Avoid large rounded corners that make the system feel soft in a generic way.

### Recommended build order

1. Build the dark canvas and the base type scale.
2. Add the top navigation and utility labels.
3. Recreate the hero headline block with the image-backed stage.
4. Build the floating white product cards and their stacked arrangement.
5. Add the illustrated promo panel with its centered actions.
6. Finish with the footer grid and legal band.

### Accessibility

- Keep the white text on the dark field strong enough for long reading.
- Keep dark text on white cards equally clear; do not reduce the contrast just to mimic softness.
- Give the mono labels enough size and tracking to remain legible.
- Make every action visually distinct without depending on color alone.
- Preserve readable line lengths in the biggest headline blocks so the text does not become a wall of letters.
- If the cards overlap, make sure the overlap does not hide the first line of each title.

## Scope note

This guide covers the bfl.ai homepage surfaces shown in the supplied image set: the dark hero field, the stacked product cards, the illustrated FLUX.2 promo, and the footer grid. Mobile stacking, motion, hover details, and other page families are not included. Measurements use the shared relative unit rounded to a consistent 0.125rem step.
