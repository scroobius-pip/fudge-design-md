# How fable.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/fable.co-design)

Last updated: 2026-08-08

## Captured pages

[![Beige hero with oversized serif headline, search field, and book collage](https://pin.fontofweb.com/6894?format=jpg)](https://design.withfudge.com/share/pin-6894)

[Beige hero with oversized serif headline, search field, and book collage](https://design.withfudge.com/share/pin-6894)

[![Wide shelf row with tall cover art, serif heading, and compact pricing labels](https://pin.fontofweb.com/6895?format=jpg)](https://design.withfudge.com/share/pin-6895)

[Wide shelf row with tall cover art, serif heading, and compact pricing labels](https://design.withfudge.com/share/pin-6895)

[![Centered search sheet with a vertical result list and thin separators](https://pin.fontofweb.com/6896?format=jpg)](https://design.withfudge.com/share/pin-6896)

[Centered search sheet with a vertical result list and thin separators](https://design.withfudge.com/share/pin-6896)

[![Dark sign-up modal centered over a tiled book-art background](https://pin.fontofweb.com/6898?format=jpg)](https://design.withfudge.com/share/pin-6898)

[Dark sign-up modal centered over a tiled book-art background](https://design.withfudge.com/share/pin-6898)

## Overview

Fable’s visual system presents reading as a calm, app-like storefront rather than a dense catalog tool. The page uses a spare white canvas, then brings in large serif statements, tidy content columns, and rows of book covers that do most of the visual talking. The result feels editorial but not fussy: the type is graceful, the chrome is quiet, and the books remain the main attraction.

The system moves between a few clear moods. One mode is bright and open, with generous white space and narrow content bands. Another mode is warmer and more theatrical, with a large serif headline and a collage of book art and social cues. A third mode is utilitarian: search and results appear in a centered sheet with fine separators, compact metadata, and a direct, readable hierarchy. Across all of it, the blue action color stays consistent and gives the interface a single unmistakable interactive signal.

## Colors

Fable relies on a very small UI palette. White sets the page canvas, deep near-black handles serious surfaces and dark buttons, and warm charcoal lines hold the structure together. The ink color is softer than pure black, which keeps body text and headings from feeling harsh. The strongest black remains useful for small marks and the heaviest text accents. Blue is reserved for the action signal and for small highlights that need to stand out without adding a second accent family.

| token | value | use |
|---|---|---|
| `action` | `#116ECD` | Links, active cues, small emphasis marks, and the blue star treatment |
| `ink` | `#161015` | Primary text, book titles, section headings, and most chrome labels |
| `inkStrong` | `#000000` | The darkest text accents and high-contrast marks |
| `border` | `#292229` | Thin rules, control outlines, and divider lines in light UI sections |
| `surface` | `#FFFFFF` | Main page canvas, sheets, cards, and open reading surfaces |
| `surfaceDeep` | `#070607` | Dark buttons, deep overlays, and the darkest control fill |

Light sections stay mostly on `surface`, with `ink` and `border` doing nearly all of the structural work. Dark controls switch to `surfaceDeep` and reverse the text to white. The image-led hero and catalog bands bring in warmer beige, green, coral, and blue tones, but those tones belong to the artwork and the book covers rather than to the system chrome. That separation keeps the interface stable even when the page mood changes from calm white to dramatic color.

## Typography

The page uses two material families: **Test Heldane** for the editorial voice and **Inter** for interface text. Test Heldane gives the site its bookstore feel. It appears in the biggest statements, section headers, and other moments where the design wants a slower, more literary rhythm. Inter keeps the app parts crisp: nav labels, metadata, prices, form copy, and legal text all need compact readability.

Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Test Heldane | 4.5rem | 400 | 0.92 | -0.04em | Large hero lines and opening campaign statements |
| `section-display` | Test Heldane | 3rem | 400 | 0.95 | -0.03em | Shelf headings and feature section titles |
| `card-heading` | Test Heldane | 1.375rem | 400 | 1.05 | -0.02em | Book title lines and short editorial headings |
| `body` | Inter | 1rem | 400 | 1.45 | 0em | Supporting copy, author names, and result text |
| `body-medium` | Inter | 1rem | 500 | 1.45 | 0em | Buttons, short emphasis lines, and form actions |
| `navigation` | Inter | 0.875rem | 600 | 1.2 | 0.01em | Header links, small utility labels, and compact controls |
| `legal-copy` | Inter | 0.75rem | 400 | 1.4 | 0em | Footnotes, minor notes, and the quietest supporting text |

The typographic system depends more on size contrast and spacing than on many weights. Headlines are light in weight but large in scale, which gives them a refined bookstore tone rather than a loud retail tone. Body text stays even and neutral. Inter should remain the default for anything that behaves like UI, while Test Heldane should stay reserved for moments that need a display voice.

## Layout

The layout is built around a very narrow reading lane centered in a much wider page. That choice is especially clear in the store surface, where content sits between huge side gutters and the visual weight stays concentrated in the middle. The page never tries to fill every inch; instead it keeps a calm column, then lets cover art and headline scale supply the energy.

The home and store sections use a repeated rhythm of large vertical breathing room, compact internal spacing, and long horizontal runs of repeated content. Section titles sit above the media rather than beside it, which makes the page feel like a sequence of curated shelves. In the shelf rows, the heading and subtitle anchor the left side while small circular arrows sit at the upper right. That placement keeps controls available without competing with the books.

The search surface uses a different geometry. It becomes a centered sheet with a wide input field at the top and a tall stack of results beneath it. Each result row is a simple two-column unit: cover on the left, title and metadata on the right, then a fine rule separating it from the next row. This pattern is efficient and legible because every row repeats the same compact structure.

The hero layout is the most theatrical. A large serif statement sits beside or over a wide image-led panel, and the supporting text remains short. The page uses that composition to say “books first” immediately, before the user reaches the more functional grid and list sections.

## Visual language

Fable’s visual language balances three things: editorial type, app utility, and book-cover imagery. The serif display type gives the brand a literary identity without making the page feel old-fashioned. Inter pulls the system back toward clarity whenever the design needs labels, pricing, or account actions. The book covers provide most of the color and motion in the composition, so the interface itself can stay plain and disciplined.

Rounded geometry is important, but it is not used everywhere in the same way. Small chips and cards keep modest rounding, while primary buttons and top-level controls become full pills. That mix prevents the page from looking boxy while also avoiding a soft, all-over bubble style. The controls feel friendly because they are rounded, but the rows and rules still feel orderly because the layout is mostly rectangular and grid-based.

The page also uses contrast in surface treatment rather than heavy decoration. White areas feel open and airy. Dark buttons and dark overlays create moments of emphasis. Thin rules, tiny marks, and small icon buttons keep the interface grounded. Book art is often the loudest color source, so the surrounding surfaces stay restrained to make the covers and the headlines carry the mood.

## Components

### Header and navigation

The header is simple and low-key. It uses a left-aligned brand mark, a small set of text links, and a few utility actions on the right. The typography should stay in `navigation`, with compact spacing and no oversized treatment. Keep the header light against the white canvas so the section titles and book art below can dominate the page. Active or selected states should remain subtle; the system does not need loud tabs or boxed navigation.

### Hero stage

The hero stage combines a large Test Heldane statement with a short supporting line and a clear action. The headline should feel tall and generous, not compressed into a banner. The supporting copy belongs in Inter and should stay smaller and quieter than the title. When the hero includes an image-led panel, let the panel carry much of the color and keep the text block clean. This component works because the type and the artwork are balanced rather than competing for attention.

### Search sheet

The search sheet is a centered white card with a large input, a circular icon button, and a vertical result stack. The input needs a soft rounded shape, a restrained border, and enough padding to feel easy rather than technical. The search button is a small black or near-black circle with a white icon, which makes the action obvious without introducing another accent color. Results should remain tightly aligned: cover thumbnail, title, author, rating, and count. The thin separators are part of the structure, so do not replace them with heavy card chrome.

### Shelf rows and carousel controls

Shelf rows present curated books as a wide run of cover tiles with metadata below. The heading sits above the row, and the subtitle gives the row a short editorial note. The carousel controls are paired circles in the upper right. One control can be quiet or inactive while the other is more assertive, but both should stay small enough that the books remain the focus. Use `pill-control` for these buttons so the outline and the roundness match the rest of the system.

### Book cards

Book cards are compact and front-facing. The cover art does the selling; the title and author sit directly underneath, and price or rating appears as a smaller secondary line. These cards should not grow into large product panels. Keep them aligned to the grid, with enough separation that the row reads as a shelf rather than a collage. `cover-tile` should remain visually light in the UI, letting the actual cover art provide the personality.

### Account and form modal

The account modal is the most contained component in the system. It uses a centered white panel over a darkened field, with stacked input rows, a clear primary action, and two secondary social sign-in buttons. The primary action should use `dark-button` so it feels weighty and decisive. The secondary buttons need the same overall size and roundness so the hierarchy comes from fill and contrast, not from arbitrary shape changes. The form should feel calm and obvious, with each field clearly separated and the text labels easy to scan.

## Responsive behavior

On narrower screens, the layout should protect the reading order first and the decorative structure second. The hero headline should break before the artwork feels cramped, and the action should remain visible without requiring a search for it. Shelf rows can become swipeable strips or fewer-column grids, but the cover art should keep its scale as long as possible. The narrow white search sheet should collapse into a single column with the input still prominent at the top.

The store surface should reduce its side gutters aggressively on smaller widths so the content lane remains usable. Section headings can shrink a step, but the relationship between the serif title and the Inter subtitle should stay intact. Carousel controls should remain reachable and large enough to tap, though they can move closer to the section heading if space becomes tight. Form modals should preserve their centered alignment, but the fields and buttons may stack more tightly to avoid vertical overflow.

If the page needs a mobile adaptation, keep the order stable: brand and nav, headline, action, featured art, then shelf content. Do not let the book grid turn into a dense wall of tiny covers. The design works because each book remains readable as an individual object.

## Practical implementation guidance

### Preserve

- Keep the serif display type reserved for the biggest statements and shelf headings.
- Keep Inter for any text that behaves like UI, metadata, form copy, or price text.
- Keep the page mostly white so the book art and the headline scale do the visual work.
- Keep the blue action color consistent across links, active cues, and small emphasis marks.
- Keep controls rounded, but do not let every container become a pill.

### Avoid

- Avoid adding extra accent colors to chrome when the book art already carries the palette.
- Avoid turning shelves into dense dashboards with too many tiny fields.
- Avoid replacing thin rules with heavy boxes around every row.
- Avoid using serif text for labels, prices, or utility controls.
- Avoid stretching the hero into a full-screen marketing poster that hides the books too early.

### Recommended build order

1. Establish the color pairings for white canvas, dark text, border rules, and the blue action tone.
2. Build the typographic hierarchy with Test Heldane for display and Inter for system text.
3. Create the header, pill controls, and form button styles.
4. Build the search sheet and result row pattern.
5. Build the shelf row and book card pattern.
6. Add the hero stage and then the dark account modal.
7. Tighten spacing, balance the gutters, and test the narrow-column behavior last.

### Accessibility

- Give the search control a clear accessible name and a visible focus style.
- Keep contrast strong on white surfaces and verify the blue action remains readable in small sizes.
- Do not rely on color alone for active states; pair the blue cue with position, underline, or icon change.
- Make the book cover art decorative only when the title and author already identify the item, and provide useful alternate text when the cover carries unique meaning.
- Ensure pill controls and form buttons have comfortable hit areas, especially where the rounded shapes shrink on smaller screens.

## Scope note

This guide covers the public home and bookstore surfaces, the search sheet, the shelf rows, and the sign-up modal. It does not include account settings, checkout, authenticated library states, motion rules, or mobile breakpoint values.
