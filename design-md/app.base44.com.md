# How app.base44.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.base44.com-design)

Last updated: 2026-08-03

## Captured pages

[![Desktop editor header, filter chips, and selected image tile](https://pin.fontofweb.com/7412?format=jpg)](https://design.withfudge.com/share/pin-7412)

[Desktop editor header, filter chips, and selected image tile](https://design.withfudge.com/share/pin-7412)

[![Centered pricing modal with orange promo bar and four cards](https://pin.fontofweb.com/7411?format=jpg)](https://design.withfudge.com/share/pin-7411)

[Centered pricing modal with orange promo bar and four cards](https://design.withfudge.com/share/pin-7411)

[![Empty workspace with centered building state and warm glow](https://pin.fontofweb.com/7410?format=jpg)](https://design.withfudge.com/share/pin-7410)

[Empty workspace with centered building state and warm glow](https://design.withfudge.com/share/pin-7410)

## Overview

Base44’s visual language is a desktop builder with two competing stages: a calm editing workspace and a bright purchase sheet. The workspace is mostly white, lightly bordered, and sparse. The purchase sheet sits on top as a large rounded panel with a thin cool outline, a vivid orange promotion band, and four plan cards lined up with even spacing. The result feels like a software workspace that briefly turns into a sales moment without changing its core grammar.

The system is intentionally neutral outside the orange promo accents. Black and near-black carry the strongest calls to action. Soft grays shape the rails, dividers, and secondary copy. White remains the dominant canvas color, so the page never feels crowded even when multiple controls, tabs, and cards appear at once. The design depends more on spacing, soft corners, and a clear hierarchy than on decoration.

Three qualities define the page:
- A builder-first layout with a left conversation rail and a large right-side preview canvas.
- Compact controls with rounded corners and low visual noise.
- A pricing overlay that uses orange urgency, white cards, and a strong central headline.

## Colors

| token | value | role |
|---|---|---|
| `action` | `#09090B` | Primary buttons, strong labels, and dark controls |
| `action-strong` | `#111827` | Deep UI chrome and darker utility text |
| `accent` | `#FF7B42` | Promo band, sale pills, and warm emphasis |
| `accent-strong` | `#FF631F` | Hotter orange used for the strongest sale moments |
| `accent-soft` | `#FED7C3` | Pale peach chip fill and soft price-tag tint |
| `accent-soft-strong` | `#FFCCAC` | Slightly richer peach for secondary badges |
| `canvas` | `#FFFFFF` | Main page field, cards, and modal surface |
| `canvas-soft` | `#F8FAFC` | Light working surface and airy utility panels |
| `surface` | `#F3F4F6` | Secondary panels, muted chrome, and dividers |
| `surface-strong` | `#020617` | Deep backdrop when the modal sits over the editor |
| `border` | `#E5E7EB` | Card outlines, inputs, and panel separation |
| `border-strong` | `#D1D5DB` | Slightly firmer border used in dense chrome |
| `ink` | `#09090B` | Main text and the most legible button labels |
| `muted-ink` | `#6B7280` | Supporting copy, descriptions, and utility labels |
| `quiet-ink` | `#94A3B8` | Softer metadata, helper copy, and tertiary text |
| `focus` | `#2563EB` | Selected card outline and active-state emphasis |
| `hairline` | `#E7E5E4` | Very light separators and subtle card breaks |

The palette is mostly achromatic until the sale state appears. Black buttons and black text establish the default action language. Gray tones keep the editor rails, supporting text, and neutral controls quiet. Orange is not a general-purpose accent; it belongs to urgency, discount messaging, and the promotional strip. Blue is reserved for selection and attention, especially around the selected design tile. The modal keeps a white face so the orange band and the plan buttons remain the strongest signals on the page.

## Typography

The visible text relies on **Wix Madefor App** for large headings and body copy, with **Wix Madefor** for compact UI labels and buttons. Licensing should be confirmed separately before reuse.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Wix Madefor App | 2.1875rem | 400 | 1.03 | 0em | Large workspace headline such as “Design Inspiration” |
| `section-display` | Wix Madefor App | 1.875rem | 500 | 1.1 | 0em | Modal heading and strong section titles |
| `feature-display` | Wix Madefor App | 1.5rem | 400 | 1.15 | 0em | Smaller headline treatments and loading-state text |
| `card-heading` | Wix Madefor App | 1rem | 500 | 1.5 | 0em | Plan names, toolbar labels, and compact headings |
| `body` | Wix Madefor App | 1rem | 400 | 1.5 | 0em | Supporting paragraphs and editor copy |
| `body-medium` | Wix Madefor | 0.875rem | 500 | 1.43 | 0em | Buttons, tabs, and short action labels |
| `label` | Wix Madefor | 0.75rem | 500 | 1.33 | 0.02em | Pills, promo tags, and microcopy |
| `legal` | System | 0.75rem | 400 | 1.33 | 0em | Trust notes and small explanatory copy |

The hierarchy is simple and effective: a regular headline for the workspace, a slightly heavier title for the modal, and compact medium-weight text for controls. The page does not need a second expressive family. Instead, scale and weight do the work. The body copy stays calm at 16px, while buttons and pills compress to 12–14px for a dense product feel. The type color usually stays near-black or muted gray; orange is not a text color for long passages.

## Layout

The page is built as a two-part desktop workspace. The left side is a narrow conversation rail with stacked messages, short utility rows, and a composer at the bottom. The right side is the main canvas, which is much wider and much quieter. That canvas is where the page switches between states: a large hero for the design gallery, a selected asset tile, or a centered empty-building state. This side-by-side structure keeps the app feeling like an editor even when the preview area is mostly empty.

The spacing rhythm is generous. Cards and rails use rounded corners and soft separation, but the overall grid remains strict. Top chrome is shallow and low contrast, so the content owns the screen. In the gallery-like view, the main headline sits upper left with plenty of white room around it, followed by a single row of category chips and a card grid that starts directly below. The selected card gets a clear blue outline, which makes the active state readable without adding extra chrome.

The pricing overlay uses a different but related structure. A darkened full-screen backdrop reduces the editor to a faint context layer. The modal sheet is centered, wide, and rounded, with an orange banner running edge to edge across the top. The title and trust line are centered beneath that strip. Four equal plan cards sit in a row, each card aligned to the same baseline so the prices and buttons feel orderly. A trust badge row sits below the pricing grid, staying secondary to the plans but still visible.

The loading state is even simpler: a centered mark, a short line of text, and a soft warm glow near the lower edge. That state leaves nearly the whole page blank, which matches the rest of the system’s preference for air and restraint.

## Visual language

Base44 uses restraint as its main visual device. Most surfaces are white or near-white. Most edges are light gray. Most text is black or muted gray. The system becomes memorable only when it changes mode: the orange promotion band, the blue selection outline, the warm glow behind the loading mark, and the darkened backdrop behind the modal.

Shape is soft but not playful. Rounded rectangles dominate, especially on cards, buttons, and the modal sheet. Pills and badges are more oval than square, which helps them read as short labels rather than separate containers. The design avoids heavy shadows; depth comes from a few soft shadows, a modal outline, and the contrast between surface layers.

The most important visual contrast is not color alone but density. The workspace is thin, open, and editorial. The pricing sheet is dense, structured, and transactional. Even so, both modes share the same neutral base, so the product never feels like it has changed brands.

## Components

### App shell

- **Anatomy:** Top utility bar, left conversation rail, and a broad right working canvas.
- **Surface:** White canvas with fine gray dividers and a few softened panels.
- **Typography:** Compact labels and body text; utility text stays small and quiet.
- **Composition:** The rail stays narrow and vertical. The canvas gets most of the width and most of the visual breathing room.
- **Visible state:** The shell should feel stable and always present, even when the canvas content changes.

### Hero and category row

- **Anatomy:** Large two-line heading, short supporting sentence, and a horizontal strip of filter chips.
- **Typography:** The heading uses a large regular face; the supporting line drops to smaller, lighter copy.
- **Shape:** Category chips are pill-like, but only the active chip is fully filled.
- **State:** The active chip is a black pill with white text. Inactive chips are simple gray labels with no heavy framing.
- **Composition:** The row sits directly under the hero and acts as the bridge into the gallery grid.

### Design card

- **Anatomy:** Single image tile with a compact top label and a visible active outline when selected.
- **Surface:** White or image-backed, with a blue selection edge when active.
- **Typography:** Small utility label for the element tag, larger image surface for the preview itself.
- **Shape:** Square or near-square image area with softly rounded corners.
- **State:** The selected card is the only tile with a clearly visible blue border; that border carries the active meaning.
- **Spacing:** The tile sits with enough margin to read as a discrete object rather than part of a dense board.

### Pricing sheet

- **Anatomy:** Centered modal frame, orange promo strip, title, trust line, pricing grid, and trust badges.
- **Surface:** White modal over a darkened editor backdrop.
- **Typography:** Centered title in the stronger display style; prices and plan names in compact medium-weight text.
- **Shape:** Large rounded corners on the modal; smaller rounded cards inside the grid.
- **Visible states:** One plan uses a solid orange button, while the others stay neutral. Discount pills sit near the top of each card.
- **Composition:** The sheet reads from top banner to title to pricing columns to trust row. The order is clear and does not depend on decoration.

### Trust badges

- **Anatomy:** Small icon plus short label in a row beneath the plans.
- **Surface:** Very light cards with muted separators.
- **Typography:** Small legal or utility text with enough spacing to stay legible.
- **Composition:** These badges support the pricing decision without competing with the plans.

## Responsive behavior

On narrower screens, the shell should collapse into a more vertical stack. The left rail can become a top or bottom panel, while the main canvas should keep the headline, chips, and selected content in a sensible reading order. The category row should remain usable with wrapping or horizontal scrolling rather than cramming the labels together.

The pricing sheet should also reflow cleanly. Four plan columns are comfortable on a wide desktop, but they should become a two-column or single-column stack on smaller widths so the plan names, prices, and buttons stay readable. The orange promo strip should remain at the top of the modal, because it carries the sale message and the sense of urgency. The loading state should keep its centered composition, but the warm glow should scale down so it does not dominate the smaller viewport.

## Practical implementation guidance

### Preserve

- Keep the workspace/editor contrast. The product feels like a builder because the canvas stays open and calm.
- Keep black as the default action color and orange as the sale color.
- Keep the blue selection outline for active content.
- Keep the modal wide, white, and softly rounded.
- Keep the copy brief. The design depends on space as much as on color.

### Avoid

- Avoid introducing extra accent colors outside the black, gray, orange, and blue mix.
- Avoid heavy shadows or glossy effects; the system is mostly flat.
- Avoid turning every chip into a filled pill. Only the active state should carry that weight.
- Avoid making the left rail feel as important as the main canvas.
- Avoid crowding the modal with extra icons, illustrations, or decorative frames.

### Recommended build order

1. Build the shell: top bar, left rail, and main canvas.
2. Add the hero headline and category row.
3. Add the selected design tile and its blue active outline.
4. Build the pricing modal as a separate centered layer.
5. Add the plan cards, orange promo band, and trust badge row.
6. Finish with the loading state and smaller utility chrome.

### Accessibility

- Keep visible focus states on chips, buttons, and plan cards.
- Do not rely on orange alone to communicate sale state; pair it with text.
- Make the selected tile identifiable by outline as well as by color.
- Keep text contrast strong on white and dark surfaces.
- Give the modal an obvious close control and clear tab order.
- Ensure the pricing columns stay readable when stacked on smaller screens.

## Scope note

This guide covers the desktop builder shell, the design gallery state, the loading state, and the pricing modal shown in the supplied pages. It does not define motion, hover treatment, exact mobile breakpoints, or deeper interaction states that are not visible in those pages.
