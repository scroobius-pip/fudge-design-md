# How akukolabs.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/akukolabs.com-design)

Last updated: 2026-08-04

## Captured pages

[![Wide red landing hero with stacked vendor names, a centered keyboard board, and a left utility rail](https://pin.fontofweb.com/3023?format=jpg)](https://design.withfudge.com/share/pin-3023)

[Wide red landing hero with stacked vendor names, a centered keyboard board, and a left utility rail](https://design.withfudge.com/share/pin-3023)

[![Tall gold card stack with rounded image tiles, dark hardware strip, and colored project tags](https://pin.fontofweb.com/3022?format=jpg)](https://design.withfudge.com/share/pin-3022)

[Tall gold card stack with rounded image tiles, dark hardware strip, and colored project tags](https://design.withfudge.com/share/pin-3022)

[![Black about page with a gold line portrait, italic serif chapter title, and subscribe field](https://pin.fontofweb.com/3021?format=jpg)](https://design.withfudge.com/share/pin-3021)

[Black about page with a gold line portrait, italic serif chapter title, and subscribe field](https://design.withfudge.com/share/pin-3021)

[![Orange blueprint spread with AP-1 headline type, a full keyboard diagram, and side tools](https://pin.fontofweb.com/3020?format=jpg)](https://design.withfudge.com/share/pin-3020)

[Orange blueprint spread with AP-1 headline type, a full keyboard diagram, and side tools](https://design.withfudge.com/share/pin-3020)

[![Close artisan keycap crop with black keys, yellow legends, and a warm photo-lit background](https://pin.fontofweb.com/3019?format=jpg)](https://design.withfudge.com/share/pin-3019)

[Close artisan keycap crop with black keys, yellow legends, and a warm photo-lit background](https://design.withfudge.com/share/pin-3019)

[![Gold product stage with a side rail, a dark keyboard body, and vertical category labels](https://pin.fontofweb.com/3016?format=jpg)](https://design.withfudge.com/share/pin-3016)

[Gold product stage with a side rail, a dark keyboard body, and vertical category labels](https://design.withfudge.com/share/pin-3016)

## Overview

Akuko Labs uses a poster-first visual language built from keyboard photography, saturated color blocks, and type that behaves like signage. The page does not read like a conventional catalog or portfolio. It reads like a sequence of printed sheets: one sheet may be red with a stacked list of names, another may be gold with a grid of product cards, and another may turn nearly black to introduce an editorial voice. The design relies on hard contrast, generous framing, and very few quiet surfaces.

The system is easiest to recognize by three habits. First, it keeps a warm gold field as the default canvas, so almost every dark mark feels deliberate. Second, it pairs that canvas with a narrow black utility language: rails, dividers, pills, labels, and tiny interface icons. Third, it uses the third family, the italic serif, only when the page wants to slow down and speak in a human voice. The result is tactile and slightly theatrical, but still exact.

## Colors

The palette is blunt and highly role-based. Gold carries the main page field, black carries type and controls, red turns a section into a loud cover image, and deep charcoal takes over when the page becomes editorial. Cream and muted gray only appear as support around product photography or close-up card surfaces. Small coded accents in blue, green, and yellow show up inside key legends, stickers, and keycap markings, not as broad surfaces. Keep the system graphic; do not soften it with powdery neutrals or low-contrast UI chrome.

| token | value | role |
|---|---|---|
| `action` | `#000000` | Filled pills, icon buttons, rails, and the strongest text on gold surfaces |
| `ink` | `#000000` | Body text, rules, and dark type on warm backgrounds |
| `canvas` | `#fcae00` | Main warm page field and the loudest background surface |
| `canvas-bright` | `#fbad00` | Alternate gold for framed product panels and broad poster areas |
| `canvas-red` | `#a22615` | Hero pages and poster-like cover sections |
| `surface-dark` | `#000000` | Editorial black pages and the deepest reading surface |
| `paper` | `#dcd2c1` | Cream product cards, inset panels, and light photographic support |
| `paper-muted` | `#b0adad` | Soft neutral backing for lighter close-ups and subdued planes |
| `accent-blue` | `#0e4089` | Small keycap legends and diagram notes |
| `accent-green` | `#6a8c48` | Label tags, status chips, and tiny callout marks |
| `accent-gold` | `#e5a200` | Key legends, outlined UI notes, and highlighted annotations |

Light, dark, photographic, and accent modes are related by contrast rather than by separate systems. Light pages feel like printed stock under warm light. Dark pages invert the hierarchy so gold type and line work sit on near-black. Photographic panels often sit inside gold borders, which makes the image feel mounted rather than floating. Accent colors are never allowed to take over; they annotate the system the way a maker’s pen would annotate a prototype.

## Typography

The type system depends on scale, narrow proportions, and a very small family set. Aperture Priority carries the loud display layers and the AP-1 wordmark-style treatment. Poly Sans-Slim handles utility text, labels, and long all-caps copy; it is credited to Milos Mitrovic and Gradient. Pp Editorial New supplies the italic chapter voice and is credited to Mathieu Desjardins and Pangram Pangram Foundry. Confirm reuse rights before implementation.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Aperture Priority | 5.5rem | 700 | 0.92 | -0.03em | Hero names, oversized headers, and the loudest poster type |
| `section-display` | Aperture Priority | 4.25rem | 700 | 0.94 | -0.025em | Large chapter headlines and cover-style labels |
| `panel-display` | Aperture Priority | 3.25rem | 700 | 0.96 | -0.02em | Product-sheet headings and strong section subheads |
| `editorial-italic` | Pp Editorial New | 2.5rem | 300 | 1.02 | 0em | Chapter titles such as the designer and artisan callouts |
| `label` | Poly Sans-Slim | 0.875rem | 500 | 1.1 | 0.08em | Chip labels, nav text, and compact UI words |
| `body` | Poly Sans-Slim | 0.875rem | 400 | 1.45 | 0.02em | Long explanatory blocks and small description copy |
| `legal-copy` | Poly Sans-Slim | 0.75rem | 500 | 1.4 | 0.12em | Side rail text, social labels, and legal or utility text |

The hierarchy is driven more by width and spacing than by font switching. Display copy stays compact and almost immovable. Utility text becomes narrow and uppercase, with extra tracking that gives it the feel of a technical annotation. The italic serif should be treated as a chapter marker, not a decorative flourish; it is the one place where the page briefly feels editorial and reflective.

## Layout

The page is organized like a set of framed posters. The left edge often acts as a rail with the brand mark, small icons, and a vertical call-to-action. The main field then fills the rest of the frame with one of three gestures: a single hero image with a stacked name list, a gold product grid with card tiles, or a black editorial page with a portrait or hand-drawn line image. Those gestures feel related because they all keep the same hard outer frame and the same dense, warm palette.

Spacing is generous but not airy. The system prefers wide margins, thick bands of color, and a small number of very clear alignments. Image blocks are large and usually dominate the composition. Text is typically constrained to one edge of the frame or to one side of a split layout. When the page shows many projects at once, it stacks them vertically in a narrow column so the rhythm feels like browsing contact sheets rather than scanning a dense grid.

The biggest structural habit is the hard chapter break. One page section does not gently fade into the next; it changes color, contrast, and type scale all at once. The red hero is a loud opening poster. The gold card stack feels like a catalog wall. The black editorial section slows down and introduces a personal voice. The blueprint spread then turns the keyboard into a diagram, which makes the product feel engineered rather than merely styled.

## Visual language

Akuko Labs mixes maker culture, technical drawing, and magazine layout. The imagery is usually a close-up of keyboards, keycaps, switches, or layout mockups, but the shots are lit and framed like product still lifes. Edges are crisp. Reflections are controlled. Legends and labels are tiny but highly legible. This gives the work a strong sense of precision without making it cold.

A few visual habits make the system distinct. Rounded pills appear around project names and small actions, but they sit inside hard rectangular frames, so the page always feels structured. Many panels use black outlines and black gutters instead of soft shadowing. The serif italic voice adds a human counterpoint to the machinery of the keyboard imagery. Large type is often stacked, centered, or set as a vertical list, which makes the page feel like a poster wall or a zine spread. The result is tactile, graphic, and a little obsessive in the best way.

## Components

### Hero poster
- **Anatomy:** A full-bleed or nearly full-bleed image stage, a small brand mark at the edge, and a stacked list of names or project labels.
- **Surface:** Red or gold background with a large central product image.
- **Typography:** Aperture Priority in a very large size, usually centered or stacked with tight leading.
- **Shape:** Hard edges, minimal rounding, and a framed composition rather than a soft card.
- **Composition:** One dominant image and one dominant text block. Avoid splitting the hero into many equal parts.

### Project card stack
- **Anatomy:** Rounded rectangular tiles, each with a product image, a small name chip, and often a narrow dark strip at the side.
- **Surface:** Warm gold backgrounds with cream or black image planes.
- **Typography:** Small Poly Sans-Slim labels with extra tracking.
- **Shape:** 1.25rem corners on the card body, pill labels for titles.
- **Visible states:** Labels can read as green, pink, yellow, or cream chips depending on the image set.
- **Composition:** Vertical stacking is more important than a full grid; the cards should feel like a column of specimens.

### Editorial black panel
- **Anatomy:** A portrait or line drawing at the top, a large italic chapter heading, a block of uppercase copy, and a compact subscription or sign-up row.
- **Surface:** Near-black with gold line art and gold text.
- **Typography:** Pp Editorial New for the heading, Poly Sans-Slim for the body block.
- **Shape:** Mostly square framing with a thin divider line and a pill-shaped action.
- **Composition:** Keep the chapter heading separated from the paragraph so the panel reads in two beats: title, then explanation.

### Blueprint / product diagram spread
- **Anatomy:** A giant AP-1 title, a keyboard diagram or product plan, side labels, and small utility controls.
- **Surface:** Bright gold with black line work.
- **Typography:** Oversized Aperture Priority for the title and narrow sans for annotations.
- **Shape:** Rectangular field with sharp corners and diagram-style internal lines.
- **Visible states:** Small chips can appear filled black, outlined, or framed as technical tags.
- **Composition:** Treat the keyboard as a diagram, not as a loose photo; the spacing between keys matters as much as the keys themselves.

### Close-up artisan strip
- **Anatomy:** Tight crop of keycaps or a key module, a serif caption, and a short explanation anchored low in the frame.
- **Surface:** Warm lit gold, black, and cream with a small accent color in the key legends.
- **Typography:** The italic serif is allowed to become softer and more intimate here, while the note text stays narrow and uppercase.
- **Shape:** Cropped edges, no decorative border, and a cinematic feel.
- **Composition:** Keep the caption low and quiet so the hardware remains the focus.

### Utility rail and action pill
- **Anatomy:** Brand mark, small icon stack, vertical social labels, and one tall call-to-action pill.
- **Surface:** Usually set inside the warm canvas rather than floating apart from it.
- **Typography:** Legal-copy and label styles with strong tracking.
- **Shape:** A slim rail and a very round pill, often black on gold.
- **Visible states:** Filled black buttons, outlined fields, and tiny icon-only controls all appear in the same family.
- **Composition:** The rail should stay subordinate to the art and the product imagery.

## Responsive behavior

The visual system should collapse by priority, not by symmetry. On narrower screens, the image remains the anchor and the text becomes more vertical. The side rail should condense into a top or bottom utility strip rather than competing with the product image. Stacked cards can remain stacked, but their labels and overlays need more room so the product detail does not crowd the type. The editorial black page should keep its chapter heading and paragraph separation, even if the portrait moves above the text. The blueprint spread should preserve the sense of a diagram; if the full keyboard plan cannot fit, reduce the annotation density before shrinking the title too far. Keep the sharp frame and the strong color breaks intact.

## Practical implementation guidance

### Preserve
- Keep gold as the default canvas and black as the structural ink.
- Treat each major section as a poster or sheet, not as a generic dashboard card.
- Use Aperture Priority for the loudest copy, Poly Sans-Slim for utility text, and Pp Editorial New only for the editorial italic voice.
- Keep the small black pill as the main action shape.
- Let photography stay crisp, tightly lit, and product-centered.

### Avoid
- Avoid soft gradients, gray-heavy UI, and generic rounded cards without the hard outer frame.
- Avoid mixing too many accent colors into one section.
- Avoid thin, airy body copy that loses the industrial feel.
- Avoid replacing the left rail with a typical horizontal nav bar if the rail is part of the composition.
- Avoid adding decorative shadows when line work and contrast already do the job.

### Recommended build order
1. Establish the color frame: gold canvas, black ink, red cover mode, and black editorial mode.
2. Build the utility rail and the black pill action.
3. Recreate the hero poster with stacked display type and one dominant image.
4. Build the project card stack with rounded tiles and small chips.
5. Add the editorial black panel with the italic chapter heading.
6. Add the blueprint spread and the tight artisan close-up treatment.
7. Refine spacing so the page keeps its poster rhythm at every width.

### Accessibility
- Keep black-on-gold contrast strong and verify small labels before finalizing crops.
- Give icon-only controls explicit labels; several controls are visually tiny.
- Maintain readable tracking in uppercase labels so they do not become decorative noise.
- Keep the focus state visible on pills, buttons, and rail controls.
- Use alt text that names the product or section plainly, especially for intricate keyboard photography and line-art portraits.

## Scope note

This guide covers the poster-style homepage, the stacked project card column, the black editorial profile section, the AP-1 blueprint spread, and the close-up artisan product imagery. Measurements are practical adaptation targets. Mobile choreography, hover behavior, motion, exact breakpoints, and licensing terms are not included.
