# How agenticui.net is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/agenticui.net-design)

Last updated: 2026-08-04

## Captured pages

[![Full-screen poster hero with the striped black emblem, centered wordmark, and small preorder button below](https://pin.fontofweb.com/5932?format=jpg)](https://design.withfudge.com/share/pin-5932)

[Full-screen poster hero with the striped black emblem, centered wordmark, and small preorder button below](https://design.withfudge.com/share/pin-5932)

[![Wider poster view with corner marks, creator metadata at the edge, and the same vertical hero on a pale field](https://pin.fontofweb.com/5933?format=jpg)](https://design.withfudge.com/share/pin-5933)

[Wider poster view with corner marks, creator metadata at the edge, and the same vertical hero on a pale field](https://design.withfudge.com/share/pin-5933)

[![Preorder split layout with left-column copy, a dark action button, and the suspended pass card on the right](https://pin.fontofweb.com/5930?format=jpg)](https://design.withfudge.com/share/pin-5930)

[Preorder split layout with left-column copy, a dark action button, and the suspended pass card on the right](https://design.withfudge.com/share/pin-5930)

[![Compact preorder page with stacked question copy, mono labels, and the tall blurred pass card in a quiet canvas](https://pin.fontofweb.com/5931?format=jpg)](https://design.withfudge.com/share/pin-5931)

[Compact preorder page with stacked question copy, mono labels, and the tall blurred pass card in a quiet canvas](https://design.withfudge.com/share/pin-5931)

## Overview

Agentic UI is built like a poster more than a dashboard. The page uses a pale canvas, thin drafting lines, and a stark black emblem to create a controlled, almost exhibition-like field. The name sits much larger than the surrounding copy, so the identity reads first and the explanation follows. The layout leaves large areas empty on purpose; that blankness is not a gap, it is the structure that lets the centered stack feel deliberate.

The system’s personality comes from restraint. There is no dense chrome, no colorful feature grid, and no noisy set of competing actions. Instead, the page relies on a single strong button, tiny metadata set in monospaced type, and a few exact gray steps for secondary text. The result is quiet but not bland: every element is sharp, aligned, and placed with poster discipline.

## Colors

| token | value | use |
|---|---|---|
| `canvas` | `#F7F7F7` | Main page field, preorder surface, and the pale space around the poster stack |
| `ink` | `#000000` | Emblem, button fill, strong lines, and the heaviest text |
| `ink-strong` | `#191919` | Dense body copy and the darkest supporting text on the light field |
| `muted-ink` | `#616161` | Main paragraph text in the preorder and about sections |
| `subtle-ink` | `#7D7D7D` | Secondary notes, small explanatory lines, and quiet metadata |
| `fine-ink` | `#8C8C8C` | Edge labels, tiny creator/location notes, and low-emphasis rails |
| `action` | `#0000EE` | Rare accent links and the only clearly chromatic interface signal |

The palette is almost monochrome. Light mode is the default and the whole site leans on `canvas` rather than a white-white field, so the page feels softer than a hard editorial spread. `ink` and `ink-strong` do the heavy lifting; the difference between them is subtle but useful when a line of copy needs to drop back without disappearing. `muted-ink`, `subtle-ink`, and `fine-ink` create a stepped hierarchy that keeps the page readable without introducing new hues.

There is no persistent dark surface in the layout. The black mark supplies visual weight instead of a dark page chapter, and the blue accent works like an interface cue rather than a brand wash. That blue should stay rare. When it appears, it should always read as actionable, not decorative. The system works because the eye can move from black to gray to blue without ever leaving the same restrained palette.

## Typography

The retained text families are **Geist**, **Ibm Plex Mono**, and **Inter-Italic**. Geist carries the main prose and the longer explanatory lines. IBM Plex Mono handles the tiny labels, metadata, and the button text so the page keeps its technical, slightly coded tone. Inter-Italic appears as a brief editorial aside; it softens the voice without breaking the disciplined system. The large “Agentic UI” wordmark is a separate graphic treatment and should be treated as a brand asset, not as a normal text style. Font licensing follows the original font providers' terms.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `body` | Geist | 1rem | 400 | 1.4 | 0em | Main explanatory paragraphs and the opening pitch |
| `body-compact` | Geist | 0.8125rem | 400 | 1.35 | 0em | Secondary prose and the tighter about-copy blocks |
| `label` | Ibm Plex Mono | 0.625rem | 400 | 1.1 | 0.0125em | Tiny captions, creator metadata, and edge notes |
| `label-wide` | Ibm Plex Mono | 0.8125rem | 400 | 1.2 | 0.02em | Small preorder labels and short technical lines |
| `note` | Inter-Italic | 0.875rem | 400 | 1.4 | -0.01em | Closing notes and soft editorial asides |
| `button` | Ibm Plex Mono | 0.8125rem | 400 | 1.1 | 0.08em | Preorder button text and compact calls to action |

The hierarchy depends on size, spacing, and family contrast more than on weight variety. Geist stays calm and readable at 16px and 13px; IBM Plex Mono is even more compact, which gives the page its tiny label language and its slightly engineered feel. Letter spacing is doing real work here. The button needs wider tracking so it looks intentional at a small size, while the labels need just enough spacing to keep the all-caps style legible. Inter-Italic should stay sparing; it is most effective when used once, at the edge of a paragraph, rather than as a recurring decorative voice.

## Layout

The page is built around a centered vertical stack on a very open field. In the hero, the emblem sits high and the brand name sits low, with the copy compressed between them. The composition feels measured rather than symmetrical for symmetry’s sake. The eye first reads the black striped symbol, then the large name, then the compact supporting sentence, then the button. That order is important: the page introduces identity before utility.

The wide hero version adds tiny corner marks and small metadata in the upper-right area, which makes the page feel like a framed print or a product poster. Those details live at the periphery, so they never fight the central stack. The layout relies on negative space to protect the logotype; the large field around the center gives the typography enough air to feel premium.

The preorder page changes the structure without changing the tone. The left column carries the pitch, price, button, and questions. The right column suspends a large pass card that behaves like a product relic rather than a traditional promotional image. The card is tall, pale, rounded, and soft-edged, with a blurred portrait inside. This split layout gives the page a stronger editorial rhythm: text explains, the card demonstrates, and the white field keeps both parts visually separate.

The compact preorder view keeps the same hierarchy but compresses the spacing. The question copy stacks more tightly, the meta labels stay small, and the pass card remains the major visual anchor. The page still feels spacious because the canvas stays consistent and the content never fills the width with dense blocks. That open structure is one of the site’s defining traits.

## Visual language

The visual language is built from a few repeated gestures: a striped black emblem, tiny technical labels, a serif-like display wordmark, soft rounded cards, and faint drafting geometry. The lines in the background are subtle enough to feel like construction marks rather than decoration. They create a grid memory without turning the page into a literal grid system. That matters, because the system’s mood is precise and slightly experimental, not corporate.

The black emblem is the strongest shape on the page. Its horizontal striping gives it a scan-line or sliced-material quality, which makes the identity feel engineered and a little unstable in a good way. The rest of the interface stays still so that mark can carry energy by itself. The typography then balances it: the big name is elegant and old-style in feeling, while the micro labels are exact and technical. That contrast is the core of the system.

Blue is almost absent, so when it appears it feels like a signal. The rest of the page stays on the pale field and the gray scale. The result is a brand that feels less like a colorful product and more like a limited print or a launch poster with a preorder path attached. The system should preserve that tension between editorial polish and product intent.

## Components

### Poster hero stack

- **Anatomy:** Large striped emblem, tiny date or status line, oversized brand name, one short supporting sentence, and a compact button.
- **Surface:** `canvas` with faint linework and lots of open space.
- **Typography:** The label line belongs in `label`; the supporting sentence belongs in `body`; the button belongs in `button`.
- **Shape:** The button is a dark rounded rectangle with a soft corner radius, not a pill.
- **Composition:** Center the full stack and keep it narrow enough that the text reads as a column, not a banner.
- **Visible state:** The default state is calm and static; no alternate button treatment is shown.

### Metadata rail

- **Anatomy:** Tiny creator, follow, and location notes placed near the outer edge; corner marks at the frame edges.
- **Surface:** Same pale field as the hero, with no boxed container.
- **Typography:** `label` or `label-wide` in the gray end of the palette.
- **Spacing:** Keep these notes far from the main stack so they feel like marginalia.
- **Hierarchy:** They support the page without asking for attention.

### Preorder pitch block

- **Anatomy:** Short heading, price line, explanatory paragraph, action button, and a brief closing note.
- **Surface:** Light and airy; the text column sits directly on the canvas rather than inside a heavy card.
- **Typography:** `body` for the paragraph, `label-wide` for the section tag, `button` for the action, and `note` for the italic closing line.
- **Shape:** The button uses the same dark fill as the hero button, so the preorder path feels unified across the page.
- **Hierarchy:** Price and action should stay close together so the eye understands the primary decision immediately.

### Pass card

- **Anatomy:** Rounded tall card, logo mark, top-right product label, blurred portrait, and a bold ID line near the bottom.
- **Surface:** Pale card on a pale field, differentiated by shadowless edge, blur, and image content rather than by color.
- **Typography:** The ID line can use Geist at display-like size, while the product label should stay in `label`.
- **Shape:** Soft corners, generous internal breathing room, and a clean rectangular silhouette.
- **Composition:** Let the card dominate the right side without crowding the text column.

### About and legal block

- **Anatomy:** Small heading, short biography-style paragraphs, a closing quote, and copyright or location notes.
- **Typography:** `body-compact` for the paragraphs and `note` for the quoted line when it needs a softer tone.
- **Spacing:** Paragraphs are separated by open vertical rhythm rather than by heavy dividers.
- **Hierarchy:** This block is quieter than the preorder pitch; it reads like editorial back matter.
- **State:** No decorative emphasis beyond line breaks and typographic contrast.

## Responsive behavior

The design should keep the same order as it narrows: identity mark, name, support copy, action, then secondary details. The most important thing to protect is the relationship between the central stack and the surrounding blank space. If the viewport tightens, the layout should collapse by reducing lateral spread, not by introducing new containers or more visual noise.

On smaller widths, the right-side pass card should drop below the preorder copy rather than shrinking into illegibility beside it. Tiny labels can remain small, but they must not become so tight that they blur into the field. The system works best when the poster feeling survives the squeeze. That means preserving the quiet margins, the monospaced microcopy, and the strong button shape even when the page becomes taller than it is wide.

The corner marks and faint guide lines should remain subtle in every size. They frame the composition, but they should never become a visible cage. The background geometry is a support layer, not a layout grid to show off.

## Practical implementation guidance

### Preserve

- Keep the page sparse. The empty field is part of the identity.
- Use Geist for readable prose, IBM Plex Mono for labels and actions, and Inter-Italic only where a softer editorial note is needed.
- Keep the black button as the only persistent filled control.
- Maintain the contrast between oversized identity and tiny technical metadata.
- Leave the striped emblem dominant; it should feel like a poster device, not a logo icon in a toolbar.

### Avoid

- Avoid adding colorful brand surfaces or extra accent colors.
- Avoid shadow-heavy cards, glossy gradients, and dense borders.
- Avoid replacing the monospaced labels with generic sans text.
- Avoid crowding the hero with extra calls to action.
- Avoid converting the pass card into a dashboard widget; it should stay like a suspended object.

### Recommended build order

1. Set the `canvas`, `ink`, and gray hierarchy.
2. Recreate the label and body typography roles.
3. Build the centered hero stack with its button.
4. Add the corner marks and edge metadata.
5. Build the preorder split with the left text column and right pass card.
6. Add the about and legal block.
7. Tidy the responsive collapse so the card drops cleanly and the stack keeps its poster feel.

### Accessibility

- Keep the darkest text for anything that matters, especially the button and the main pitch.
- Do not rely on very small gray labels as the only carrier of essential meaning.
- Make the preorder action large enough to tap comfortably even though it looks compact.
- Keep focus styles visible against the pale field and the dark button.
- Give the striped emblem and the blurred pass card descriptive alternative text when they carry meaning, and mark them decorative when they do not.

## Scope note

This guide covers the public home poster, the wide poster variant, the preorder page, and the compact preorder layout for agenticui.net. It does not define motion, hover variants, authenticated product screens, or alternate marketing pages, and it leaves final breakpoints and exact container widths open.
