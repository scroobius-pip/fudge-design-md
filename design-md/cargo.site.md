# How cargo.site is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cargo.site-design)

Last updated: 2026-08-03

## Captured pages

[![Dark editor shell with a left folder rail and one blue add tile](https://pin.fontofweb.com/6371?format=jpg)](https://design.withfudge.com/share/pin-6371)

[Dark editor shell with a left folder rail and one blue add tile](https://design.withfudge.com/share/pin-6371)

[![Dense black templates grid with mixed preview art and slim badges](https://pin.fontofweb.com/6370?format=jpg)](https://design.withfudge.com/share/pin-6370)

[Dense black templates grid with mixed preview art and slim badges](https://design.withfudge.com/share/pin-6370)

[![White preview sheet with long rule-separated rows and two image wells](https://pin.fontofweb.com/6369?format=jpg)](https://design.withfudge.com/share/pin-6369)

[White preview sheet with long rule-separated rows and two image wells](https://design.withfudge.com/share/pin-6369)

[![Wide gallery page with oversized template cards and compact top nav](https://pin.fontofweb.com/6368?format=jpg)](https://design.withfudge.com/share/pin-6368)

[Wide gallery page with oversized template cards and compact top nav](https://design.withfudge.com/share/pin-6368)

[![Near-black hero with split oversized headline and tiny top chrome](https://pin.fontofweb.com/6367?format=jpg)](https://design.withfudge.com/share/pin-6367)

[Near-black hero with split oversized headline and tiny top chrome](https://design.withfudge.com/share/pin-6367)

## Overview

Cargo is a dark, spare site-builder system that lets content carry the visual weight. The frame stays quiet: tiny top navigation, faint separators, restrained icons, and a low-contrast left rail in the editor shell. The pages that matter are either huge black poster-like statements or dense grids of site thumbnails. That split is the brand.

The home page is the clearest expression of the system. It uses a vast black field, a large left-anchored headline, a second headline block far away on the right, and almost no surrounding ornament. The templates area changes the rhythm without changing the language: it keeps the same black background but fills the page with image-heavy cards, compact metadata, and small variant badges. A template preview then flips the ratio again, moving to a white sheet with table-like rows and a large pale image field. White is reserved for that preview sheet; the account dialog stays a dark charcoal modal over the gallery.

The visual identity depends on restraint. Large type, small labels, thin rules, and simple blue controls create the structure; the thumbnails and preview panels supply the color and texture. Keep the interface dark, flat, and spare so the content blocks and template images remain the focal points.

## Colors

Cargo is overwhelmingly monochrome. Black and near-black planes form the shell, white carries the headlines and the paper-like preview pages, and blue is reserved for explicit actions and links. Gray takes over wherever the interface needs to recede: metadata, secondary labels, dividers, and quiet utility text. The system does not rely on a broad palette; instead, it uses contrast between empty black space and bright content windows.

| token | value | role |
|---|---|---|
| `action` | `#0000EE` | Links, confirmation buttons, the plus tile, and other direct controls |
| `canvas` | `#000000` | The main site background and the deepest shell areas |
| `surface` | `#111111` | Dark page surfaces, gallery panels, and the main editor field |
| `surface-quiet` | `#141414` | Slightly lifted dark panels, cards, and rails |
| `surface-deep` | `#030303` | The darkest edge behind the shell and utility chrome |
| `ink` | `#FFFFFF` | Primary text on black and white chip text on blue controls |
| `muted-ink` | `#A1A1A1` | Secondary labels, row notes, and lighter metadata |
| `border` | `#707070` | Hairline rules and subdued separators on dark surfaces |
| `border-light` | `#D9D9D9` | Rules and edges inside the white preview sheet |
| `border-soft` | `#DCDCDC` | Soft dividers and low-contrast page framing |

The light and dark surfaces are not separate themes so much as two page conditions. Black chrome holds the home and gallery views. White appears when the content needs a document-like frame. Blue remains the single clear action color in both cases, so the user always knows which control will move them forward. The thumbnails themselves bring the visible variety, which keeps the interface colors disciplined.

## Typography

Cargo Diatype Plus is the voice of the public-facing pages. It sets the huge site title, the oversized “Cargo Site Builder” headline, the template labels, and the dense explanatory copy. SF Pro appears in the utility shell: small navigation, compact dialog text, and the control language around the preview and editor. The pairing is practical rather than decorative; one family makes the brand statement, the other keeps the interface readable and neutral. Licensing is not stated in the packet.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Cargo Diatype Plus | 3.785rem | 500 | 1 | -0.025em | Home hero and other oversized statements |
| `section-display` | Cargo Diatype Plus | 1.514rem | 300 | 1 | -0.025em | Smaller section headings and secondary display labels |
| `body` | Cargo Diatype Plus | 0.906rem | 400 | 1.65 | 0em | Dense body copy, row text, and explanatory notes |
| `label` | Cargo Diatype Plus | 0.906rem | 400 | 1.1 | 0em | Small labels, template names, and quiet metadata |
| `navigation` | Sf Pro | 0.906rem | 400 | 1 | 0em | Top navigation and compact shell text |
| `ui-small` | Sf Pro | 0.75rem | 400 | 1.4 | 0em | Dialog copy, field hints, and tiny controls |
| `button` | Sf Pro | 0.906rem | 400 | 1 | 0em | Primary and secondary actions in the shell |

The hierarchy is simple: display scale first, then plain body text, then very small utility text. The largest headlines stay compact and slightly tightened, which makes the empty black space feel deliberate rather than unfinished. The smaller text should not become airy or stylized; it needs to stay crisp and functional. The system should preserve the distinction between the two families: Cargo Diatype Plus for the brand voice and SF Pro for shell utility.

## Layout

### Hero field

The home page opens as a poster-like black field. The Cargo mark sits small in the top left, navigation is centered or pushed to the edges, and the main message is set in two enormous blocks spaced far apart across the width. There is almost no surrounding ornament. The layout works because the scale difference is extreme: tiny chrome against huge type, with a lot of empty space in between. That emptiness is not a gap to fill; it is the composition.

### Template grid

The templates pages switch to a gallery structure without changing the dark shell. Cards are arranged in a wide, regular grid with large gutters and thin separators that keep the page legible at a glance. Each tile is dominated by a preview image or mock page, then anchored by a short template name and a compact variant chip. The system lets thumbnails vary wildly while the container stays almost identical from card to card. That makes the grid feel orderly even when the previews are eclectic.

### Preview sheet

The template preview page becomes document-like. A white sheet sits inside the black browser frame, and the page is split into a left metadata column and a much larger right image field. Fine gray rules separate rows in the left table, while the right side stays open and quiet. The composition reads more like a printed catalog spread than a conventional web page. The white surface, tiny text, and measured grid are what create that effect.

### Editor shell

The editor view is the most stripped-down layout in the packet. A narrow left rail lists folders and filters, the top bar stays almost empty, and the main work area is a large black field with a single blue add tile near the upper left. The layout is almost diagrammatic: navigation on the side, one action in the canvas, nothing extra around it. This is the right place for the brand to feel functional rather than editorial.

The page structure should keep the same hierarchy as the viewport narrows. Small chrome remains first, then the main statement or thumbnail grid, then supporting labels. The hero should not collapse into a crowded stack that competes with the headline. The gallery should keep its card rhythm and preserve enough gutter space that each thumbnail remains readable. The white preview sheet should continue to feel like a page, not a compressed dialog. The editor shell should retain the side rail and the single action tile, even if the rail compresses or the canvas reduces in width.

## Visual language

Cargo uses contrast, scale, and density instead of ornament. Large type and large empty space define the hero and the editor shell. Dense thumbnail grids define the templates view. Fine rules and tiny labels define the white preview sheet. The system never needs decorative gradients or strong shadows because the content blocks already create enough variation.

Shape is understated. The visible corners are small and consistent, around five pixels, which keeps the cards and dialogs soft without making them playful. Most containers remain square and flat. Rounded corners are used to reduce friction, not to add personality. This is important: the brand is not trying to feel friendly through shape; it feels precise through restraint.

The thumbnail imagery carries much of the visual energy. Some previews are white and airy, some are busy and colorful, and some are text-heavy. The surrounding shell does not compete with them. Instead, it gives them a dark stage so the user can scan a gallery quickly. That relationship between mute frame and expressive content is the core visual language to preserve.

## Components

### Top navigation

- **Anatomy:** Small brand name at left, centered or right-aligned page links, and a short pair of terminal actions at the far edge.
- **Surface:** Transparent over black, with no heavy bar treatment.
- **Typography:** `navigation` for the main links, `ui-small` for secondary text where needed.
- **Spacing:** Tight horizontal spacing and a thin top rule on the gallery pages.
- **Composition:** Keep the navigation visually subordinate to the page title or gallery.
- **Visible states:** The active view can be implied by position or contrast, not by bulky decoration.

### Hero statement

- **Anatomy:** Two oversized text blocks, usually split across the width of the page.
- **Surface:** Pure black with almost no adjacent elements.
- **Typography:** `hero-display` or `section-display`.
- **Shape:** No container shape; the text sits directly in space.
- **Spacing:** Very large negative or open space between the blocks, with the message anchored low enough to feel monumental.
- **Composition:** Treat the black field as part of the type system.

### Template card

- **Anatomy:** Preview image, template name, and a compact variant badge.
- **Surface:** Dark gallery background with the card content holding all the visible color.
- **Typography:** `label` for names and `ui-small` for variant counts.
- **Shape:** `rounded.panel` on the preview container and any supporting UI chips.
- **Spacing:** Large gutters between cards, with thin separations between rows.
- **Composition:** Let the preview art dominate the card; keep text close and quiet.
- **Visible states:** One chip may appear filled or brighter to mark a selected or active template.

### Preview sheet

- **Anatomy:** Title row, metadata rows, a large image field, and supporting footer text.
- **Surface:** White paper-like canvas framed by black surroundings.
- **Typography:** `body` for dense table text and `ui-small` for low-priority notes.
- **Shape:** Slight rounding at the sheet corners, otherwise hard edges and thin rules.
- **Spacing:** Tight row spacing on the left, larger open field on the right.
- **Composition:** Read as a structured spread, not a floating dialog.

### Modal dialog

- **Anatomy:** Centered title, stacked input fields, a compact legal line, a link back to login, and a blue confirmation button.
- **Surface:** Dark charcoal panel over the black gallery.
- **Typography:** `navigation` or `ui-small` for the fields and notes, with the title slightly larger but still restrained.
- **Shape:** `rounded.panel` and a soft, even panel edge.
- **Spacing:** Compact vertical stacking; the dialog should feel contained and efficient.
- **Composition:** Keep it short and centered so the gallery remains visible behind it.
- **Visible states:** The dialog is a modal state that should feel layered but not theatrical.

### Editor shell

- **Anatomy:** Left folder rail, compact top bar, an empty central canvas, and one blue plus tile.
- **Surface:** Dark black-to-charcoal field with tiny gray accents.
- **Typography:** `ui-small` and `navigation` for the shell labels.
- **Shape:** Small rounded corners on controls, with the canvas itself staying flat.
- **Spacing:** Narrow side rail, expansive empty center, and a single action element placed high in the frame.
- **Composition:** The canvas is mostly negative space; the blue tile is the only high-energy object.
- **Visible states:** The highlighted rail row and the blue add tile provide the only strong cues.

## Responsive behavior

The system should keep the same visual hierarchy as the viewport narrows: small chrome first, then the main statement or thumbnail grid, then supporting labels. The hero should not collapse into a busy stack that competes with the headline. The gallery should keep its card rhythm and preserve enough gutter space that each thumbnail remains readable. The white preview sheet should continue to feel like a page, not a cramped modal. The editor shell should retain the side rail and the single action tile, even if the rail compresses or the canvas reduces in width.

## Practical implementation guidance

### Preserve

- Keep black as the default frame and use white only when the page needs a document-like surface.
- Keep the blue action color consistent across links, confirmation buttons, and the add control.
- Preserve the split between huge, sparse hero statements and dense thumbnail grids.
- Keep body copy compact and utility text even quieter.
- Keep card and dialog corners small and consistent.

### Avoid

- Avoid adding extra accent colors to the chrome.
- Avoid shadows that make the UI feel glossy or floating.
- Avoid turning every thumbnail into a framed card with heavy borders.
- Avoid centering large amounts of text inside the hero; the asymmetry is part of the system.
- Avoid stretching the preview sheet into a generic dashboard panel.

### Recommended build order

1. Establish the black shell, gray separators, and blue action color.
2. Build the oversized display type and the sparse home hero.
3. Build the template grid with preview art, names, and variant chips.
4. Build the white preview sheet with table rows and a large image field.
5. Build the centered modal dialog.
6. Build the editor shell with the left rail and blue add tile.
7. Check that the layout still feels quiet when the viewport changes.

### Accessibility

- Keep the blue action readable against black and white surfaces.
- Preserve strong contrast for all tiny labels and table rows.
- Give the preview thumbnails useful alternative text that names the template or content type.
- Keep touch targets generous enough for the small navigation and chip controls.
- If focus styles are rebuilt, make them visible without adding decorative clutter.

## Scope note

This guide covers the public home hero, templates grids, template preview sheet, modal dialog, and the editor shell shown in the supplied packet. It does not include mobile rearrangements, motion, drag behavior, or the rest of the editor toolset. Spacing and corner values are rounded to the packet’s rem grid.
