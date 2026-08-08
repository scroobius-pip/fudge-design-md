# How yuskavage.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/yuskavage.com-design)

Last updated: 2026-08-08

## Captured pages

[![Home page with pale left rail and three-column media cards](https://pin.fontofweb.com/7293?format=jpg)](https://design.withfudge.com/share/pin-7293)

[Home page with pale left rail and three-column media cards](https://design.withfudge.com/share/pin-7293)

[![Exhibitions page with nested filter rail and compact list rows](https://pin.fontofweb.com/7295?format=jpg)](https://design.withfudge.com/share/pin-7295)

[Exhibitions page with nested filter rail and compact list rows](https://design.withfudge.com/share/pin-7295)

[![Bio page with one narrow reading column and dense text blocks](https://pin.fontofweb.com/7294?format=jpg)](https://design.withfudge.com/share/pin-7294)

[Bio page with one narrow reading column and dense text blocks](https://design.withfudge.com/share/pin-7294)

[![Media page with image grid and small metadata links under each card](https://pin.fontofweb.com/7296?format=jpg)](https://design.withfudge.com/share/pin-7296)

[Media page with image grid and small metadata links under each card](https://design.withfudge.com/share/pin-7296)

## Overview

Yuskavage.com is built like an art archive rather than a promotional site. The interface keeps the page almost entirely on a light field, then uses a narrow left rail to hold the brand, navigation, and utility links while the main area carries the content. That split gives the site a museum-catalog calm: the rail behaves like a directory spine, and the right side changes format depending on whether the page is a media index, an exhibition list, or a long biography.

The visual system is restrained on purpose. There are no dramatic surfaces, no ornamental borders, and no button-heavy sales language. Instead, the site relies on four things: a tight monochrome type palette, thin horizontal rules, lots of white space, and image thumbnails that sit close to their labels. The result is quiet but not empty. Every page feels like a list or record, even when the content is image-led.

The qualities to keep are:

- A fixed-feeling left rail with the brand at the top and utility links lower down.
- Monochrome text where active states are black and secondary text stays in softer gray.
- Square, unembellished cards and rows that let content define the rhythm.
- A strong separation between navigation density and the open reading area.
- Small image thumbnails paired with compact metadata, not large hero treatments.

## Colors

### Core interface colors

| token | value | role |
|---|---|---|
| `action` | `#000000` | Active rail items, primary text anchors, and the most assertive utility marks |
| `ink` | `#2B2B2B` | Main headings, card titles, and body text on the open white field |
| `muted-ink` | `#4A4A4A` | Secondary metadata, captions, and the quieter lines under each item |

The interface stays effectively monochrome. Black carries the strongest emphasis, but it does not behave like a button color in a retail system; it acts more like the printed-ink color that marks the current section or the most important label. The darker gray handles the long reading column and the fine-grained metadata under images, so the page can separate hierarchy without introducing extra hues.

There is no separate dark mode in the visible pages. The tonal variation comes from content rather than from UI theming. Artwork thumbnails, exhibition photos, and media stills bring the color, while the interface itself stays disciplined and neutral so the images can do the expressive work. The accent color is therefore not a bright brand signal; it is the black that repeats in the rail, headings, and active labels. That keeps the archive feel intact and makes the content structure easy to scan.

## Typography

The visible system uses three families in a practical split. Gibson and Canadatypegibson carry the rail, headings, and compact display labels. Times supports the reading-heavy areas and the small metadata lines beneath cards. The overall effect is editorial rather than tech-forward: sans-serif for navigation and headings, serif for sustained reading. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `masthead` | Canadatypegibson | 1.125rem | 700 | 1.1 | -0.01em | The brand wordmark at the top of the rail |
| `section-heading` | Canadatypegibson | 1rem | 700 | 1.15 | 0em | Section labels such as exhibition headings and page divisions |
| `navigation` | Gibson | 0.875rem | 400 | 1.45 | 0em | Left-rail links, utility items, and compact menu labels |
| `card-title` | Gibson | 1.125rem | 400 | 1.2 | 0em | Media titles and exhibition item names |
| `body` | Times | 0.875rem | 400 | 1.6 | 0em | Bio paragraphs and longer explanatory text |
| `meta` | Times | 0.75rem | 400 | 1.5 | 0em | Dates, venues, tags, and short supporting lines |
| `utility-link` | Times | 0.75rem | 400 | 1.4 | 0em | Inline action phrases such as listen/view prompts |

The typographic hierarchy is modest but strict. The site does not use oversized editorial headlines or flashy weight jumps. Instead, it separates roles by family, size, and spacing. The rail stays compact and functional. The card titles sit just above the metadata but never overwhelm the image. The bio page stretches the serif text into a calm reading column, where the line length and leading matter more than scale. That combination gives the site a printed-reference feel rather than a blog feel.

## Layout

The layout is organized around a fixed left rail and a flexible content field. The rail is about 14.375rem wide and sits against a pale gray strip that is visually distinct from the main white canvas. It holds the brand at the top, then a vertical list of section links, then a divider, then search and lightbox utilities, then the small copyright block. That structure makes the rail feel like a navigational index, not a header bar.

The main content area uses large, even gutters and a lot of open space. On the home and media pages, cards fall into a three-up grid. Each card begins with a small thumbnail, then a title, then source and date metadata, then a short action line. The vertical spacing between those lines is small and regular, so the page reads like a catalog of entries rather than a gallery of oversized tiles. The visual density comes from repetition, not from packed containers.

The exhibitions page changes the rhythm slightly. It adds a secondary filter rail on the left of the content pane, then introduces section bars such as current exhibitions and solo exhibitions. Each block uses thin horizontal rules to separate groups. The item list is compact and row-based, with a thumbnail at left and a tight stack of title, venue, location, and date to the right. That makes the page feel like a reference list.

The bio page is the loosest layout, but it still obeys the same left alignment and top inset. The copy sits in one narrow text column with long paragraphs and generous breathing room below. Nothing floats, overlaps, or frames the text. The page simply gives the words the room they need.

## Visual language

The visual language is archival, minimal, and intentionally unshowy. The site treats content records as the main event. Thumbnails are small enough to stay subordinate to the text, but they are large enough to give each entry a face. That balance is important: the page does not become a pure text index, yet it also avoids turning every image into a poster.

The rail establishes the tone first. Its pale surface, stacked links, and understated utility area suggest a library finding aid or a museum website from a clean contemporary redesign. The links are plain and text-led, with the current section shifting to black so the user can orient immediately. Small chevrons and the bottom-right eye mark are the only visible symbols that break the text-first discipline.

The content field stays flat and quiet. There are no shadows, no rounded cards, and no layered chrome. Separation comes from whitespace, rules, and repeated structure. The exhibition page uses hairline dividers; the media pages use empty gaps between cards; the bio page uses paragraph breaks and line length. Because the site avoids decorative framing, the color range stays narrow and the typography carries most of the identity.

## Components

### Left rail navigation

- **Anatomy:** Brand mark, stacked section links, divider, search and lightbox utilities, and a small copyright block.
- **Typography:** Compact sans-serif labels with a heavier active state for the current section.
- **Surface:** Pale rail against a cleaner white content field.
- **Shape:** Square edges, no visible card treatment.
- **Spacing:** Tight vertical stacking with a clear gap before the utility area.
- **Visible states:** The current section is darker and more assertive; inactive links stay in softer ink.

### Media card

- **Anatomy:** Thumbnail, title, source or category line, date line, and a short action phrase.
- **Typography:** Title in a readable sans face; metadata and prompts in smaller serif text.
- **Composition:** Image first, then text in a clean vertical stack.
- **Spacing:** Thin separation between title, metadata, and action line; wider gap between cards.
- **Visible states:** Cards do not need borders to read as separate items; the grid spacing carries the separation.
- **Treatment:** Keep the thumbnail small and aligned to the top edge so the page stays list-like rather than poster-like.

### Exhibition list block

- **Anatomy:** Section heading, thin rule, rows with thumbnails and descriptive metadata, then another rule before the next block.
- **Typography:** Upper section labels in a heavier sans face; item names in a lighter but still prominent line; dates and places in muted text.
- **Composition:** A left-aligned column of content with a strong horizontal cadence.
- **Spacing:** Slightly tighter than the media grid so the page feels more like a records list.
- **Visible states:** The current exhibitions row is visually privileged by placement, not by color.
- **Treatment:** Preserve the narrow thumbnail column and the restrained metadata stack.

### Bio reading column

- **Anatomy:** One continuous text column with paragraph breaks and no supporting card framing.
- **Typography:** Serif body copy with regular weight and generous leading.
- **Surface:** Open white page with no enclosing box.
- **Spacing:** Wide top inset and comfortable paragraph separation.
- **Composition:** Keep the column narrow enough for sustained reading; do not widen it into a magazine spread.
- **Visible states:** There are no special text treatments beyond hierarchy and spacing.

### Utility marks and small links

- **Anatomy:** Search, lightbox, listen, and view prompts; the small eye icon at the lower-right corner.
- **Typography:** Small serif labels, usually understated and text-first.
- **Role:** These items behave like quiet action cues rather than button chrome.
- **Treatment:** Use black only where the site needs emphasis; keep the rest in gray so utility never competes with content.

## Responsive behavior

On narrower screens, the left rail should become a top or side drawer, but the ordering should stay the same: brand first, navigation second, utilities last. The content pages should keep the same record-based structure, even if the three-column media grid collapses to one or two columns. The exhibition rows should remain thumbnail-plus-text rows, not turn into cards with heavy framing. The bio page should keep one readable column and avoid stretching into a full-width paragraph block.

If the layout tightens, reduce the number of simultaneous columns before reducing the typography too aggressively. The site depends more on spacing and hierarchy than on large type. A smaller viewport should still feel calm and editorial, not dense. Keep the white field open, preserve the thin rules, and let the thumbnails remain modest. The eye icon and other small utility marks should stay available without dominating the page.

## Practical implementation guidance

### Preserve

- Keep the left rail narrow, pale, and text-led.
- Let black and the darker gray do the hierarchy work instead of adding more colors.
- Use square-edged cards and thin rules rather than rounded panels or strong borders.
- Keep the media grid compact so image thumbnails remain part of a list system.
- Preserve the serif reading column for long copy; it slows the page in a good way.

### Avoid

- Avoid button-heavy chrome, filled pills, and decorative shadows.
- Avoid turning cards into large visual tiles; the site is not trying to feel like a portfolio hero wall.
- Avoid adding extra brand colors or gradients.
- Avoid large type jumps that would break the archive rhythm.
- Avoid wrapping every section in a box; the open field is part of the identity.

### Recommended build order

1. Build the rail, including the brand mark, link stack, divider, and utilities.
2. Establish the core type scale for rail items, titles, metadata, and long text.
3. Recreate the media card pattern with image-first vertical stacking.
4. Build the exhibition list pattern with section bars and row-based entries.
5. Add the bio reading column and verify line length.
6. Tighten spacing so the whole system still feels like one family across all pages.

### Accessibility

- Keep the current section clearly distinguishable without relying on color alone.
- Give all thumbnails meaningful alternative text tied to the item title or venue.
- Preserve readable line length in the bio and other long-text pages.
- Keep keyboard focus visible on rail links, utility items, and any image-triggered controls.
- Ensure the small utility links remain readable at their reduced size and do not collapse into icon-only controls unless a text label is still available.

## Scope note

This guide covers the desktop home, media, exhibitions, and bio page surfaces with the fixed left rail, the open white content field, the list-style media grid, and the long reading column. Mobile reflow, hover and focus styling, lightbox behavior, animation, and any fallback font stack beyond the named families are not included here.
