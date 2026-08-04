# How absolu.ca is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/absolu.ca-design)

Last updated: 2026-08-04

## Captured pages

[![Full-bleed hero with red-blue split and oversized white wordmark](https://pin.fontofweb.com/5904?format=jpg)](https://design.withfudge.com/share/pin-5904)

[Full-bleed hero with red-blue split and oversized white wordmark](https://design.withfudge.com/share/pin-5904)

[![Dark green contact panel with giant orange headline and thin divider](https://pin.fontofweb.com/3527?format=jpg)](https://design.withfudge.com/share/pin-3527)

[Dark green contact panel with giant orange headline and thin divider](https://design.withfudge.com/share/pin-3527)

[![White careers spread with centered copy and a small right-side portrait](https://pin.fontofweb.com/3501?format=jpg)](https://design.withfudge.com/share/pin-3501)

[White careers spread with centered copy and a small right-side portrait](https://design.withfudge.com/share/pin-3501)

[![Project index page with oversized serif rows and tiny inline thumbnails](https://pin.fontofweb.com/3500?format=jpg)](https://design.withfudge.com/share/pin-3500)

[Project index page with oversized serif rows and tiny inline thumbnails](https://design.withfudge.com/share/pin-3500)

[![Dark green manifesto block with large white sentence and orange list](https://pin.fontofweb.com/3499?format=jpg)](https://design.withfudge.com/share/pin-3499)

[Dark green manifesto block with large white sentence and orange list](https://design.withfudge.com/share/pin-3499)

[![White section with a giant serif heading and a right-aligned arrow](https://pin.fontofweb.com/3498?format=jpg)](https://design.withfudge.com/share/pin-3498)

[White section with a giant serif heading and a right-aligned arrow](https://design.withfudge.com/share/pin-3498)

## Overview

Absolu reads like a creative agency poster series translated into a web page. The design language is built from oversized serif headlines, compact grotesk support text, and a sharp split between bright campaign surfaces and restrained editorial pages. Large words carry the identity. Small labels, project names, and utility copy keep the structure legible. The site feels theatrical without becoming ornate because the system depends on a narrow set of repeated moves: huge type, thin rules, broad color fields, and very deliberate spacing.

The visual rhythm alternates between three moods. The first is the full-bleed campaign stage, where people and objects sit inside saturated red, orange, and blue fields. The second is the pale index page, where black type, hairline dividers, and small thumbnails produce a magazine-like list. The third is the deep green statement panel, which acts like a pause between louder sections. Reproducing the system means preserving that alternation rather than flattening everything into one generic layout.

## Colors

The palette is intentionally compact and strongly polarized. The light pages sit on a near-white paper ground with black text and rules. The dark panels pull into a deep forest green that makes the white type feel brighter and more editorial. The campaign scenes use scarlet, orange, and cobalt as full-surface fields rather than small accents. That makes the pages feel printed and art-directed, not assembled from standard interface surfaces.

| token | value | role |
|---|---|---|
| `canvas` | `#fdfcfb` | Near-white paper ground for white pages and open editorial spreads |
| `ink` | `#000000` | Main text, rules, arrows, and the clearest contrast line on pale layouts |
| `surface-forest` | `#0d2d22` | Dark statement panels, contact-like sections, and quiet interludes |
| `surface-cobalt` | `#155db6` | Blue field used for bold campaign backdrops and side panels |
| `surface-scarlet` | `#d6320c` | Hot red field for the hero and other high-energy poster compositions |
| `action` | `#fe4814` | Bright orange emphasis for callouts, small captions, and energetic inserts |

The relationship between the colors matters more than any single swatch. Canvas and ink set up the editorial baseline. Forest green reverses that baseline into a dark mode with white typography. Scarlet and cobalt break the grid and turn the page into a campaign surface. Orange sits between those extremes and works best as a compact emphasis color inside larger red or blue compositions. The design feels strongest when each hue owns a broad area instead of being scattered into many small UI details.

## Typography

Oakes Grotesk and Pp Fragment-Glare Bold play distinct roles. Oakes Grotesk handles the working voice: labels, project lists, small explanatory lines, footer copy, and the short utility text that sits near edges and rules. Pp Fragment-Glare Bold supplies the poster voice: the giant Absolu wordmark, section openers, and the bold declarative lines that anchor each surface. That contrast gives the site its character. The serif face carries scale and drama; the grotesk face keeps the structure controlled and readable.

Oakes Grotesk is credited to Samuel Oakes. Pp Fragment-Glare Bold is credited to Francesca Bolognini and Mat Desjardins at Pangram Pangram. Licensing should be checked before reuse.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Pp Fragment-Glare Bold | 5.5rem | 700 | 0.9 | -0.03em | Oversized wordmarks and the main homepage statement |
| `section-display` | Pp Fragment-Glare Bold | 3.75rem | 700 | 0.95 | -0.025em | Section openers, dark panel headlines, and large list-page titles |
| `body` | Oakes Grotesk | 1rem | 400 | 1.5 | 0em | Paragraphs, explanatory copy, and general reading text |
| `body-medium` | Oakes Grotesk | 1rem | 500 | 1.45 | 0em | Captions, primary supporting lines, and emphasized short copy |
| `label` | Oakes Grotesk | 0.875rem | 500 | 1.2 | 0.02em | Navigation, project labels, side notes, and small service text |
| `legal` | Oakes Grotesk | 0.75rem | 400 | 1.4 | 0em | Copyright, footer text, and secondary metadata |

The hierarchy works because the largest text is dramatically larger than everything around it. The display words stay tight, heavy, and theatrical. The support copy opens just enough to read comfortably across broad white pages and inside dark panels. Smaller grotesk roles remain quiet so the serif headings can dominate without competing detail. The type system should be preserved as a two-voice model rather than expanded into many unnecessary tiers.

## Layout

The layout shifts between three structures. The first is the full-bleed campaign stage: a saturated field, oversized figures, a central brand word, and tiny navigation tucked near the top edge. The second is the white index page: wide margins, left-aligned titles, thin horizontal rules, and rows that feel closer to a contents page than a grid of cards. The third is the dark statement panel: a deep green surface with a large sentence, compact supporting text, and small aligned service or footer blocks.

Spacing is generous, but not empty in a decorative way. The white pages use space to create tension between the oversized serif heading and the smaller grotesk notes around it. The dark pages use space to let the headline breathe and to keep the service list readable at a glance. The campaign pages use space differently again: the figures, the wordmark, and the strong color fields compete for attention, so the composition needs to stay centered and poster-like.

Edge alignment is a major part of the system. Thin rules begin and end with purpose. Arrows sit at the far right. Thumbnails float inside rows instead of inside boxed cards. Headings often begin near a left margin and then stretch across the page with very little interruption. That produces an editorial rhythm that feels closer to print layout than to app chrome. The design should keep that discipline even when the content changes.

## Visual language

Absolu’s visual language feels like studio art direction, not product UI. The site uses billboard scale, cropped portraits, and flat color fields that look meant for a wall. Typography then cuts across the art with a confident, almost literary tone. The serif headlines are bold enough to read as logos or chapter titles. The grotesk copy stays plain and small, which keeps the emphasis where it belongs.

The repeated motifs are simple: big word, thin rule, small arrow, small label, oversized image. On the campaign slides, the composition can become playful and dense, with insert-like boxes, strong foreground figures, and layered color planes. On the white pages, the opposite happens: the design strips back into spacing, alignment, and list structure. The dark green sections sit between those poles and act as calm separators. That contrast is central to the brand. Reproduce it with strong surfaces and a small set of repeated structural moves, not with decorative variation.

## Components

### Hero stage

- **Anatomy:** Large wordmark, top navigation, supporting microcopy, portrait figures, and a central insert or caption block.
- **Surface:** Full-bleed scarlet, cobalt, and orange fields with black framing edges or deep side bands.
- **Typography:** The main word uses `hero-display`; small navigation and side labels use `label`.
- **Composition:** The text sits low and wide, overlapping the figures. The figures function as frame and subject at the same time.
- **Visible states:** Campaign slides can shift from portrait-driven to graphic insert-driven, but the overall scale stays poster-like.

### Section header with divider and arrow

- **Anatomy:** A large heading, a thin horizontal rule, and a right-aligned arrow cue.
- **Surface:** Usually the pale canvas or the dark forest field.
- **Typography:** `section-display` for the headline, `label` or `body-medium` for supporting notes when present.
- **Shape:** No soft corner treatment; the linework and arrow keep the section crisp.
- **Composition:** The rule gives the heading room and separates the title from the rest of the page without boxing it in.

### Project index row

- **Anatomy:** Large project name, small thumbnail, thin separator line, and arrow cue at the far edge.
- **Surface:** Pale canvas with black rules and compact inline images.
- **Typography:** The project name uses `section-display`; the small row notes use `label`.
- **Spacing:** Rows need generous vertical separation so the names remain the dominant element.
- **Visible states:** Rows can contain a thumbnail centered in the row or offset toward the right, but they should still feel like part of the same index system.

### Dark statement panel

- **Anatomy:** One large sentence, a short supporting paragraph, a short service list or link stack, and a low footer-like line.
- **Surface:** Deep forest green with white text and orange emphasis text.
- **Typography:** `section-display` or `body-medium` for the lead line, `body` for the paragraph, `label` for the list.
- **Composition:** Left text block and right service list create a clean two-column split.
- **Visible states:** The surface can serve as a contact, manifesto, or footer-like closing panel without changing its basic structure.

### Campaign caption block

- **Anatomy:** A small caption field, compact text, and a strong background color that sits inside a larger poster composition.
- **Surface:** Scarlet or orange with white text.
- **Typography:** `body-medium` for the caption line and `label` for small supporting text.
- **Composition:** The block should feel like a placed sticker or editorial tag, not a floating card.
- **Visible states:** The caption can sit over an image or against a solid field, but it should stay small relative to the headline.

## Responsive behavior

On narrower screens, the hierarchy should stay poster-first. The main word or sentence comes before the secondary text. Rules and arrows remain useful only if they still fit the line length, so they should compress cleanly rather than wrap awkwardly. The big campaign hero can stack the portraits, but the image treatment should remain bold and cropped rather than shrinking into a small illustration. White index rows should keep their generous vertical rhythm even when they collapse into a single column. Dark panels should retain the split between the main statement and the smaller service list. The goal is to keep the page feeling like a sequence of large authored compositions, not a compressed dashboard.

## Practical implementation guidance

### Preserve

- Keep the contrast between Pp Fragment-Glare Bold for landmarks and Oakes Grotesk for support text.
- Preserve the alternation between saturated campaign art, pale index pages, and dark green interludes.
- Keep thin rules thin and arrows small.
- Let large photography or poster art provide the visual weight instead of adding extra chrome.
- Maintain the wide, editorial spacing around headline words.

### Avoid

- Avoid generic rounded cards, soft shadows, and pill-shaped UI accents.
- Avoid turning the white pages into dense grids or dashboard tables.
- Avoid spreading the bright palette across many small controls.
- Avoid replacing the serif headline voice with a single bland sans-serif throughout.
- Avoid adding decorative effects that do not belong to the poster language already present.

### Recommended build order

1. Set the type roles and the black-on-light, white-on-dark text pairs.
2. Build the full-bleed hero composition.
3. Build the white index rows with rules and right-aligned arrows.
4. Add the dark forest statement panel.
5. Add the campaign caption block and the smaller poster variants.
6. Tune spacing so the page still feels open at large sizes and compact at small sizes.

### Accessibility

- Keep white text large enough when it sits on scarlet, cobalt, orange, or forest surfaces.
- Give arrow-only cues a text label nearby so direction is not carried by shape alone.
- Keep long project names and manifesto lines readable by preserving generous line height.
- Provide concise alternative text for portraits, thumbnails, and poster art so the content remains understandable without the image.

## Scope note

This guide covers absolu.ca’s homepage and campaign/index surfaces: the full-bleed hero, dark green statement panels, white project and careers layouts, and the footer-like contact treatment. It does not include hidden templates, interaction states, or other route families. Measurements are practical adaptation targets.
