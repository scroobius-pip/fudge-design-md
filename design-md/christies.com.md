# How christies.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/christies.com-design)

Last updated: 2026-08-03

## Captured pages

[![Beige hero slide with split text column and sweeping abstract artwork](https://pin.fontofweb.com/7374?format=jpg)](https://design.withfudge.com/share/pin-7374)

[Beige hero slide with split text column and sweeping abstract artwork](https://design.withfudge.com/share/pin-7374)

[![Wide Art Finance banner with pale copy block and peach textured image](https://pin.fontofweb.com/7383?format=jpg)](https://design.withfudge.com/share/pin-7383)

[Wide Art Finance banner with pale copy block and peach textured image](https://design.withfudge.com/share/pin-7383)

[![Private Sales split panel with light text block and bright pink handbag](https://pin.fontofweb.com/7381?format=jpg)](https://design.withfudge.com/share/pin-7381)

[Private Sales split panel with light text block and bright pink handbag](https://design.withfudge.com/share/pin-7381)

[![Latest stories grid with large feature image and stacked teaser articles](https://pin.fontofweb.com/7382?format=jpg)](https://design.withfudge.com/share/pin-7382)

[Latest stories grid with large feature image and stacked teaser articles](https://design.withfudge.com/share/pin-7382)

[![Upcoming auctions list with filters, thumbnails, and long sale titles](https://pin.fontofweb.com/7376?format=jpg)](https://design.withfudge.com/share/pin-7376)

[Upcoming auctions list with filters, thumbnails, and long sale titles](https://design.withfudge.com/share/pin-7376)

[![Dark lower band with three promo cards above a dense footer link matrix](https://pin.fontofweb.com/7384?format=jpg)](https://design.withfudge.com/share/pin-7384)

[Dark lower band with three promo cards above a dense footer link matrix](https://design.withfudge.com/share/pin-7384)

## Overview

Christie’s homepage feels like an auction catalog arranged with the pacing of an editorial magazine. White ground, black and charcoal text, and wide image fields do most of the work. The design depends on restraint: a narrow palette, thin rules, small utility text, and long horizontal compositions that let art, objects, and real-estate imagery stay central.

The site keeps copy short and hierarchy clear. Headings are elegant and light, utility text is compact, and body copy stays steady and readable. Light sections feel open and institutional. Dark sections appear as punctuation near the bottom of the page and in selected hero variations. The result is formal, calm, and expensive without leaning on ornament.

## Colors

Christie’s uses a strict monochrome base. Black and white carry the structure, while charcoal softens the reading edge for body text, links, and secondary labels. The interface avoids decorative accent hues; the artworks, photography, and product shots supply the chromatic energy instead. That separation is essential to the brand feel: the UI stays neutral so the content can feel singular.

| token | value | role |
|---|---|---|
| action | `#000000` | Filled actions, dark panels, strongest contrast surfaces |
| ink | `#222222` | Primary text, links, secondary labels, hairline rules |
| canvas | `#FFFFFF` | Main page field, open sections, card backgrounds |
| inverse-ink | `#FFFFFF` | Text on black surfaces |
| inverse-canvas | `#000000` | Footer, dark promo bands, inverse hero panels |
| hairline | `#222222` | Thin borders, subtle separators, outlined control edges |

The visual relationship is simple: white space keeps the page airy, while black blocks ground the experience and create a formal rhythm. The strongest action treatment is a black fill with white text. Secondary controls stay outlined or lightly framed. That lets the page move between editorial openness and dense institutional structure without changing color language.

## Typography

Three families shape the system. `Abc Arizona Serif` supplies the editorial voice for major headings and section introductions. `By Elias Hanzer` handles navigation, labels, story links, and button text. `Times` carries the longer reading text and supporting copy. Licensing for these families needs separate confirmation.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Abc Arizona Serif | 2rem | 300 | 1.2 | 0em | Hero headings and major promotional opens |
| section-display | Abc Arizona Serif | 2rem | 300 | 1.2 | 0em | Section titles for stories, auctions, and footer promos |
| story-link | By Elias Hanzer | 1.5rem | 300 | 1.2 | 0em | Larger story teasers and prominent inline links |
| nav-link | By Elias Hanzer | 1rem | 300 | 1.4 | 0em | Main navigation and quiet link clusters |
| ui-label | By Elias Hanzer | 0.875rem | 500 | 1.2 | 0em | Buttons, filters, compact metadata, utility actions |
| body | Times | 1rem | 400 | 1.4 | 0em | Paragraphs, descriptions, list copy, and support text |

The hierarchy depends on family contrast as much as on size. The serif headings are refined rather than heavy. The sans text stays light and deliberate, even when it becomes the main navigation. `Times` gives the page a calmer reading texture in list-heavy and descriptive sections. Weight changes are minimal and purposeful: medium appears where a control must stand out, while most of the system stays light.

## Layout

The page is arranged in long horizontal bands. The header spans the full width with the Christie’s wordmark at left, nav items across the center, and utilities to the right. The hero then splits into a text surface and a large image surface. In one treatment the text side stays pale and the image side carries a warm paint-like field; in another the text side turns black and the image side becomes a bright artwork stage. That alternating structure gives the page a strong editorial cadence.

Below the hero, the system repeats with measured variation. The Art Finance and Private Sales banners are broad split panels with calm copy on one side and a tightly cropped image on the other. The stories area shifts into a white grid with one dominant image and smaller teaser cards arranged beside it. The auctions section becomes more catalog-like, with filters, dates, locations, thumbnails, and long sale names aligned into rows that stretch across the page. Near the bottom, the dark promo band and footer close the page with a heavier visual weight and a dense information grid.

Spacing is generous but disciplined. The visible layouts use 48px outer gutters, then step inward with 24px, 32px, and 40px separations between headings, images, and content blocks. The page feels spacious because the gaps are meaningful, not because the content is sparse. That spacing lets each lot, story, or banner feel framed and important.

## Visual language

Christie’s visual language is institutional and image-led. Corners stay nearly square, so surfaces read as framed panels rather than soft cards. Shadows are absent. Borders, when present, are thin and functional. The overall effect is quiet authority rather than decorative branding.

The imagery carries the variation. Paintings, object photography, estates, and collection images bring the color and the emotional charge, while the interface holds steady in black, white, and charcoal. Light panels keep the copy and image relationship open. Dark panels provide contrast and create chapter breaks. The system can move from an airy editorial spread to a dense auction list without changing its core rules.

Controls stay modest. Buttons are small and direct. A filled black action reads as primary. An outlined action stays secondary. Filter chips and small utility links rely on type contrast and spacing more than embellishment. That makes the page feel orderly and mature.

## Components

### Global header

- **Anatomy:** Wordmark at left, primary navigation across the center, sign-in and language utilities at right, search at the far edge.
- **Surface:** White field with charcoal text and minimal framing.
- **Typography:** Small By Elias Hanzer labels, mostly 14px to 16px, with medium weight reserved for compact utility actions.
- **Shape:** Nearly square geometry with very small radii.
- **Spacing:** Wide horizontal breathing room and compact control padding.
- **Visible states:** Active items depend on placement and contrast rather than decorative markers.

### Split hero panels

- **Anatomy:** A text column with a serif headline, short supporting text, and one clear action; paired with a large image or artwork block.
- **Surface:** Either pale neutral or black, depending on the hero variation.
- **Typography:** Abc Arizona Serif for the headline, By Elias Hanzer or Times for support and utility text.
- **Composition:** One side carries the message; the other side carries the artwork, object, or textured image.
- **Visible states:** The hero alternates between light and dark treatments while keeping the same rhythm and scale.

### Editorial promo banners

- **Anatomy:** Heading, short supporting line, and button on one side; image or textured artwork field on the other.
- **Surface:** Light neutral block with an image panel that fills the adjacent half.
- **Typography:** Serif headline with small supporting copy beneath it.
- **Shape:** Flat rectangles with little rounding and no shadow.
- **Spacing:** Open internal padding so the copy sits away from the image edge.
- **Composition:** These banners work best when the text stays calm and the image supplies the visual emphasis.

### Story grid

- **Anatomy:** One large feature image, smaller stacked teasers, article dates, and concise headlines.
- **Surface:** White.
- **Typography:** Serif for article titles; By Elias Hanzer for dates and labels; Times for supporting descriptions.
- **Composition:** Mixed-size modules make the section feel like a magazine spread rather than a uniform card deck.
- **Visible states:** The “view all” control stays small and aligned to the upper right, which keeps the section editorial instead of promotional.

### Auction list and filter row

- **Anatomy:** Filter chips, long sale names, dates, locations, and thumbnails.
- **Surface:** White with charcoal text.
- **Typography:** Utility labels in By Elias Hanzer; long names in the serif family; support lines in Times.
- **Composition:** Rows stretch horizontally and tolerate long titles, which gives the section a catalog feel.
- **Visible states:** One filter is filled dark to mark selection; the others stay light and quiet.

### Dark lower band and footer

- **Anatomy:** Three promo cards above a black footer with multi-column links, social icons, and legal text.
- **Surface:** Black.
- **Typography:** White serif headings above quiet utility link text.
- **Composition:** Promo cards stay image-forward; the footer turns into a structured information grid.
- **Visible states:** The dark field increases contrast and closes the page with a formal finish.

## Responsive behavior

On narrower screens, the hierarchy should stay intact. The logo and utilities come first, then the hero message, then the artwork or object image, then the supporting sections. Split hero panels should stack before the type becomes cramped. Story modules should collapse into a single-column or two-up rhythm only if the images still read as editorial; otherwise they should stack one by one. Auction rows should keep their dates and locations close to the title so the catalog logic survives the narrower width. The footer should collapse into clear link groups with enough spacing to keep the dense navigation usable.

## Practical implementation guidance

### Preserve

- Keep the interface monochrome and let the artwork provide color.
- Preserve the serif headline voice and the quieter sans for labels and navigation.
- Hold the near-square corner treatment; it is part of the institutional tone.
- Keep the page bands wide and the spacing deliberate.
- Use black fill only where the page needs a decisive action or a dark surface.

### Avoid

- Avoid bright accent colors that compete with the lots and images.
- Avoid soft playful rounding or heavy shadows.
- Avoid turning filters or footer links into colorful product UI.
- Avoid mixing the utility sans into long reading copy.
- Avoid compressing the editorial bands into cramped stacked cards without a clear reason.

### Recommended build order

1. Build the header and shared utility controls.
2. Establish the serif headline scale and the Times body rhythm.
3. Recreate one split hero panel in both light and dark treatments.
4. Add the Art Finance and Private Sales promo banners.
5. Build the story grid with mixed image sizes and short teasers.
6. Add the auction list rows and filter states.
7. Finish with the dark lower band and footer link matrix.

### Accessibility

- Keep black-on-white and white-on-black contrast strong throughout.
- Give arrow buttons, filter chips, and search controls visible focus states.
- Do not rely on color alone to mark the active tab or selected filter.
- Ensure image alt text names the work, object, or scene rather than a generic label.
- Keep touch targets large enough around the small utility labels and footer links.

## Scope note

This guide covers the desktop homepage surfaces shown here: the header, hero variations, Art Finance, Private Sales, stories, auctions, and footer. Spacing values are rounded to the 0.25rem scale listed in the packet. Interior lot pages, bidding flows, mobile rearrangements, motion, and authenticated states are not included.
