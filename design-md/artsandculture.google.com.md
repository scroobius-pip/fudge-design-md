# How artsandculture.google.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/artsandculture.google.com-design)

Last updated: 2026-08-03

## Captured pages

[![Centered Art Remix editor with the artwork, slider, and action chips](https://pin.fontofweb.com/7274?format=jpg)](https://design.withfudge.com/share/pin-7274)

[Centered Art Remix editor with the artwork, slider, and action chips](https://design.withfudge.com/share/pin-7274)

[![Split Art Remix card with a bold title column and framed preview image](https://pin.fontofweb.com/7273?format=jpg)](https://design.withfudge.com/share/pin-7273)

[Split Art Remix card with a bold title column and framed preview image](https://design.withfudge.com/share/pin-7273)

[![Home page section with stacked feature tiles and a vivid color-led band](https://pin.fontofweb.com/7271?format=jpg)](https://design.withfudge.com/share/pin-7271)

[Home page section with stacked feature tiles and a vivid color-led band](https://design.withfudge.com/share/pin-7271)

[![Editorial browse page with tall color tiles, blue banners, and wide white margins](https://pin.fontofweb.com/7270?format=jpg)](https://design.withfudge.com/share/pin-7270)

[Editorial browse page with tall color tiles, blue banners, and wide white margins](https://design.withfudge.com/share/pin-7270)

[![Weekly highlights grid with compact cards, share icons, and small metadata](https://pin.fontofweb.com/7269?format=jpg)](https://design.withfudge.com/share/pin-7269)

[Weekly highlights grid with compact cards, share icons, and small metadata](https://design.withfudge.com/share/pin-7269)

[![Explore page with image rails, active tab underline, and category blocks](https://pin.fontofweb.com/7267?format=jpg)](https://design.withfudge.com/share/pin-7267)

[Explore page with image rails, active tab underline, and category blocks](https://design.withfudge.com/share/pin-7267)

## Overview

Google Arts & Culture uses a restrained, gallery-like interface that keeps the artwork, collection tiles, and editorial headings in front of the chrome. The page is almost always built on a white canvas with thin dark or gray rules, compact navigation text, and blue links or actions. The result feels like a museum index rather than a product dashboard: quiet around the edges, image-forward in the middle, and highly legible at a glance.

The system changes emphasis by page type, not by introducing new visual families. Home and explore views use centered section headings and wide card rails. The Art Remix views switch to a more focused experiment stage with a large title, a framed artwork panel, a control row, and a dense text block. Across all of it, the interface keeps the same neutral base and lets the art supply most of the color.

## Colors

| token | value | role |
|---|---|---|
| `action` | `#1A73E8` | Links, selected tabs, active controls, and primary emphasis |
| `ink` | `#202124` | Main body text, headings, and dense interface copy |
| `ink-strong` | `#000000` | Mastheads, icon marks, and the sharpest contrast moments |
| `ink-soft` | `#3C4043` | Secondary text in browsable sections |
| `muted-ink` | `#5F6368` | Captions, metadata, and lighter supporting copy |
| `muted-ink-2` | `#80868B` | Tertiary labels and understated metadata |
| `canvas` | `#FFFFFF` | Page background and card fill |
| `border` | `#DADCE0` | Hairline borders, panel edges, and control outlines |
| `surface` | `#E8EAED` | Soft separators and pale section support |
| `surface-soft` | `#E3E3E3` | Subtle chips, rules, and low-emphasis blocks |
| `surface-faint` | `#E1E3E1` | The lightest neutral support tone |
| `on-action` | `#FFFFFF` | Text and icons on blue controls |

The visible palette is intentionally narrow. White does most of the work, blue marks the interactive path, and the grays carry the hierarchy without competing with the artwork. In the supplied views there is no heavy dark shell; instead, imagery and feature art bring in richer color while the interface stays neutral. That separation is important: the brand color stays fixed and the content color changes from page to page.

## Typography

Google Sans is the primary interface voice. Google Sans 18 Pt and Google Sans Flex 18 Pt handle the larger editorial moments, while Google Sans covers the 11–16px interface range. Roboto appears in compact controls and utility labels, and Google Sans Mono gives the Art Remix explanation block its typed, technical feel. Font licensing should be confirmed before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Google Sans Flex 18 Pt | 4.375rem | 700 | 1 | -0.01em | The Art Remix masthead and other large experiment titles |
| `section-display` | Google Sans 18 Pt | 2.25rem | 400 | 1.22 | 0em | Centered section headings such as “Weekly highlights” |
| `card-heading` | Google Sans 18 Pt | 1.375rem | 400 | 1.27 | 0em | Large card titles and feature names |
| `body` | Google Sans | 0.875rem | 400 | 1.43 | 0.014em | Explanatory copy, summaries, and standard metadata |
| `body-medium` | Google Sans | 0.875rem | 500 | 1.43 | 0.014em | Action labels, active navigation, and emphasized inline text |
| `label` | Google Sans | 0.75rem | 500 | 1.33 | 0.02em | Uppercase or compact section labels |
| `mono-body` | Google Sans Mono | 1.25rem | 400 | 1.6 | 0em | The typed Art Remix explanation block |
| `control` | Roboto | 0.875rem | 500 | 1.43 | 0.014em | Compact buttons, chips, and icon-adjacent control text |

The hierarchy depends on scale more than on weight variation. Headings are large but not loud; body text stays calm at 14px with generous leading; metadata compresses cleanly to 12–13px without breaking the rhythm. The title treatment in the Art Remix flow is the exception: it pushes to a much larger display size and pairs with a very plain surrounding layout so the words stay readable against the artwork and the controls.

## Layout

The page frame is centered and spacious. Large side gutters keep the content column narrow enough for dense text and image labels, while the surrounding whitespace gives the artwork room to breathe. Some home and explore views sit far in from the viewport edges, with the content visually anchored in the middle rather than stretched across the full width. That center-heavy framing is a core trait of the site.

Section spacing is generous but consistent. The browser does not stack blocks tightly; it places whole stories apart from one another, then uses headings, rails, and cards to define the internal rhythm. The page often alternates between a headline, a row of cards, and a second visual system below it. In the Art Remix detail view, that rhythm becomes more vertical and more focused: a top title, a large framed artwork, a slim control strip, then a structured text and action area. The layout keeps each section self-contained.

Card geometry is simple. The workhorse radius is the small 8px corner, which appears on image tiles, panels, and many bordered containers. More rounded pills are used for utility buttons and chips, while circular controls appear as pure circles rather than as soft rectangles. Borders are usually 1px and do the separation work that shadows would handle in a more theatrical interface.

The section grid itself is flexible. Some pages use narrow editorial cards in long rows; others use larger feature tiles with image-first composition; the Art Remix page uses a split card with a text rail on the left and a preview image on the right. The linework and spacing stay consistent enough that these different arrangements still feel like one system.

## Visual language

The visual language is quiet and documentary. White space is the dominant surface, and the interface treats artworks, screenshots, and feature images as the main visual objects. Blue is reserved for navigation state and actionable elements, so the page does not become a color field of its own. This is a collection browser that keeps its brand signal small.

Borders matter more than shadows. Thin rules outline cards, separate header rows, divide metadata from action rows, and frame the Art Remix controls. The system feels precise because the edges are crisp. The same restraint shows up in the chip and pill treatment: compact outlines, small radius, and very little decoration beyond the label itself.

The page also uses a strong editorial hierarchy. Large centered headings sit above image rails. Short labels sit above titles. Supporting text stays small and cool. In the feature and recommendation views, cards often put the image first and the title directly below it, which keeps the eye moving from visual to textual summary without interruption. In the Art Remix detail page, the system becomes more demonstrative: the artwork panel dominates, the title beneath it is large and broken into highlighted phrases, and the lower action area is shaped like a practical tool rather than a promotional banner.

## Components

### Top bar

- **Anatomy:** Wordmark at the left, navigation items across the top, utility icons at the right, with the selected destination marked by a blue underline.
- **Surface:** White canvas with no heavy chrome.
- **Typography:** 14px Google Sans for standard nav items; compact labels stay close to 14px and medium weight.
- **Shape:** Icons and profile affordances are circular or near-circular; the bar itself stays flat.
- **Visible states:** The active section uses the blue action color and a short underline instead of a filled tab.

### Art Remix hero

- **Anatomy:** Large centered title, square artwork card, small badge in the image, a round-edged “Remix” chip, and a slider below the image.
- **Composition:** The artwork is the focal point; the surrounding controls are narrow and centered beneath it.
- **Typography:** Display-sized title above, then a smaller numeric readout beside the slider.
- **Control language:** Blue thumb, light track, and compact icon marks. The slider feels like a precision tool, not a decorative control.

### Split experiment card

- **Anatomy:** Title, subtitle, date and category row, primary launch button, and utility icons in a left column; artwork preview in a right column.
- **Surface:** White panel with 1px border and 8px corners.
- **Hierarchy:** The title is large and bold-looking; metadata is quiet; the launch button is the only saturated element.
- **Spacing:** Inner rows are separated by thin rules and compact padding, which makes the card feel engineered rather than playful.

### Card rails and story tiles

- **Anatomy:** Image-first tiles with a short category line, a title, a small summary, and a share glyph or secondary utility.
- **Composition:** Rows feel like a gallery shelf. The cards are evenly spaced, and the images carry the first read.
- **Shape:** Small-radius corners and flat fills. The system avoids deep shadows.
- **Variants:** Some tiles are narrow editorial cards; others are wider feature blocks with stronger image emphasis.

### Color and theme browsing blocks

- **Anatomy:** Tall vertical swatches, broad feature panels, and content cards with large imagery.
- **Composition:** These sections use strong image blocks to create rhythm within the white page.
- **Typography:** Titles are clear and direct, often centered over the block or placed low and left within the card.
- **Visible states:** Selected navigation remains blue; the content itself can be highly colorful without changing the shell language.

### Utility chips and secondary actions

- **Anatomy:** Small outlined pills such as category chips, more-info buttons, and compact social or action controls.
- **Surface:** White fill with gray border.
- **Typography:** Small Google Sans or Roboto utility text.
- **Shape:** Rounded pills and circular icons.
- **Hierarchy:** These controls stay below the primary image or title and never compete with the main call to action.

## Responsive behavior

The supplied views already suggest a responsive system that preserves the same reading order at different widths. As the viewport narrows, the centered column should stay intact, the artwork and cards should stack before the text becomes too cramped, and the rail layouts should collapse into fewer columns without changing the hierarchy. The Art Remix editor, especially, depends on the title-image-control stack staying vertically coherent.

Navigation also needs to degrade cleanly. The selected state should remain obvious even when the full horizontal menu compresses, and the icon cluster at the right should stay accessible without crowding the wordmark. Image cards should keep their 8px corners and border treatment at all widths; only the grid density should change.

## Practical implementation guidance

### Preserve

- Keep the page white, flat, and quiet around the artwork.
- Use blue only for selection, links, and primary actions.
- Preserve the 8px panel radius and the 1px divider language.
- Keep the 36px section headings and 14px body text in the same hierarchy.
- Let image content carry most of the color and emotional weight.

### Avoid

- Avoid shadows as a primary framing device.
- Avoid broad color tokens that fight the artwork.
- Avoid heavy rounded corners on large panels.
- Avoid wrapping every small control in a separate card.
- Avoid mixing multiple display families when one clear Google Sans hierarchy is enough.

### Recommended build order

1. Set the centered page frame and the white canvas.
2. Build the top bar, selected underline, and utility icon cluster.
3. Define the small set of type roles and the blue action color.
4. Build the bordered card primitive with the 8px radius.
5. Recreate the Art Remix hero and the split experiment card.
6. Add the rail and grid patterns for recommendations and explore pages.
7. Finish with the compact chips, share actions, and slider controls.

### Accessibility

- Keep the blue underline and blue action text paired with non-color cues where possible.
- Maintain strong contrast for all copy placed over artwork.
- Label icon-only controls clearly.
- Keep focus outlines visible on white backgrounds and inside outlined pills.
- Make slider state, selected tabs, and action buttons readable without relying on hue alone.

## Scope note

This guide covers the light home, explore, recommended, weekly highlights, and Art Remix views supplied in the packet. It does not include unseen dark-mode behavior, mobile-only navigation patterns, motion rules, account flows, or alternate locale layouts. Type and spacing values follow the packet’s rounded relative-unit scale.
