# How ashmolean.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ashmolean.org-design)

Last updated: 2026-08-03

## Captured pages

[![Working page with gray band and four-up staff video cards](https://pin.fontofweb.com/6602?format=jpg)](https://design.withfudge.com/share/pin-6602)

[Working page with gray band and four-up staff video cards](https://design.withfudge.com/share/pin-6602)

[![Appeal hero with dark artwork and centered white title card](https://pin.fontofweb.com/6601?format=jpg)](https://design.withfudge.com/share/pin-6601)

[Appeal hero with dark artwork and centered white title card](https://design.withfudge.com/share/pin-6601)

[![Visit hero with bright interior photo and stacked action buttons](https://pin.fontofweb.com/6599?format=jpg)](https://design.withfudge.com/share/pin-6599)

[Visit hero with bright interior photo and stacked action buttons](https://design.withfudge.com/share/pin-6599)

[![Home header above a full-width welcome image and white panel](https://pin.fontofweb.com/6598?format=jpg)](https://design.withfudge.com/share/pin-6598)

[Home header above a full-width welcome image and white panel](https://design.withfudge.com/share/pin-6598)

[![Social band above membership and print-shop promotional tiles](https://pin.fontofweb.com/6596?format=jpg)](https://design.withfudge.com/share/pin-6596)

[Social band above membership and print-shop promotional tiles](https://design.withfudge.com/share/pin-6596)

## Overview

Ashmolean.org is built like a museum publication translated into a web page: calm, documentary, and easy to scan. The site keeps a white or warm off-white canvas, black primary text, and a restrained sage-green action color. Photography carries the emotional load. The interface stays quiet around it, using centered cards, pale section bands, and long horizontal margins to make each page feel spacious rather than busy.

The strongest pattern is the overlap between image and message. A full-width photograph sets the scene, then a white title card or content panel sits on top of it with a short heading and a short supporting line. Below that, the page shifts into pale blocks with evenly spaced cards, short labels, and direct calls to action. The result is formal without feeling rigid.

The qualities to preserve are:

- Black, high-contrast typography with one muted secondary tone.
- Large photography used as context, not decoration.
- Flat white or paper cards placed over full-width image bands.
- Sage-green buttons and tile actions as the only persistent accent.
- Pale section fills that separate content chapters without heavy borders.
- A grid that feels centered and generous rather than compressed.

## Colors

| token | value | role |
|---|---|---|
| `ink` | `#231F20` | Main body copy, headings, and most interface text |
| `contrast` | `#000000` | Logo marks, strong utility text, and icon silhouettes |
| `muted-ink` | `#555555` | Supporting copy and quieter explanatory text |
| `support-ink` | `#444444` | Secondary paragraph text and section descriptions |
| `canvas` | `#FFFFFF` | Main page background and header ground |
| `paper` | `#FDFDFD` | White cards and floating panels over photography |
| `surface` | `#F0F0EC` | Pale section bands and soft content wells |
| `surface-alt` | `#EFEFEF` | Light gray background for grouped promotional areas |
| `surface-muted` | `#E9EBE8` | Slightly cooler band for alternate panels |
| `border` | `#E0DED9` | Card edges, tile separators, and subtle framing lines |
| `rule` | `#E5E5E5` | Hairline dividers and gentle structural rules |
| `action` | `#A3B09A` | Primary buttons, tile CTAs, and emphasis blocks |
| `link` | `#337AB7` | Inline links and the rare colored text accent |

The palette is mostly monochrome, which lets the photographs set the atmosphere. White and paper surfaces hold the structure; pale gray and warm gray sections add rhythm; `#E0DED9` and `#E5E5E5` keep separation quiet. The green `action` token is not decorative noise. It appears as a calm, solid fill on donation, visit, and promo buttons, so the page always has one obvious place to click. `#337AB7` appears as a sparing link tone and should stay secondary. The supplied views stay on a light canvas; when the imagery runs darker, the UI remains simple and readable on top.

## Typography

Montserrat does the structural work across the site. Helvetica Neue appears in narrower utility and header contexts where the page needs a more neutral, compact tone. Font Awesome 6 Brands supplies the social glyphs. The hierarchy comes from scale, weight, and spacing rather than from changing families. Licensing and reuse terms are not supplied in the packet and should be confirmed before production.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Montserrat | 2.19rem | 600 | 1.1 | 0em | Large page titles on hero cards |
| `section-display` | Montserrat | 1.8rem | 600 | 1.1 | 0em | Section headings and campaign banners |
| `card-heading` | Montserrat | 1.19rem | 600 | 1.2 | 0em | Card titles, tile labels, and strong subheads |
| `body` | Montserrat | 1.1rem | 300 | 1.43 | 0em | Descriptive paragraphs and supporting copy |
| `body-strong` | Montserrat | 1rem | 600 | 1.43 | 0em | Short labels, button copy, and emphasis lines |
| `navigation` | Helvetica Neue | 1rem | 400 | 1.43 | 0em | Main navigation and utility links |
| `utility` | Helvetica Neue | 0.875rem | 400 | 1.43 | 0em | Small header links and compact helper text |
| `social-icon` | Font Awesome 6 Brands | 2rem | 900 | 1 | 0em | Social media glyph row |

The page favors bold, centered statements for section titles and lighter paragraph text for explanation. Most headings are set in uppercase or all-caps style and sit close to their content, which makes the layout feel editorial rather than marketing-heavy. Body copy opens up with a comfortable 1.43 line-height so the long visitor information stays readable. Small utility links sit in Helvetica Neue to keep the top bar from competing with the main content. The overall hierarchy is not theatrical; it is measured, legible, and steady.

## Layout

The desktop layout is built around a centered column with strong full-width breakouts. The header sits on a white band and stretches edge to edge, but the main content repeatedly opens into large image bands and pale section panels. That shift between contained text and expanded imagery is the key structural move. The page can feel expansive because the text itself is restrained: headings are short, paragraphs are narrow, and each content block gives the next one room to breathe.

The hero sections use a familiar pattern. A full-width image establishes place or mood, then a white card lands over the image with a title and supporting copy. On the visit page, that card is centered over a bright interior photograph. On the appeal page, the card sits against a darker artwork image so the contrast is stronger. In both cases the card stays rectangular and calm, with generous interior padding and no decorative border treatment.

Below the hero, content bands shift into pale fills such as `#F0F0EC`, `#EFEFEF`, and `#E9EBE8`. These bands hold card rows, tile grids, and centered explanatory copy. Cards are arranged in clean rows with equal widths, image-first composition, and captions underneath. The working pages use a slightly denser structure: a centered heading and paragraph lead into a four-up grid of staff videos with a small image label and a text block below each thumbnail. The visual rhythm stays orderly even when the content is varied.

The footer and social sections remain spacious but less dominant. They use centered copy, a pale ground, and prominent icon rows or promotional tiles. Even there, the layout still follows the same rule: keep the page wide, keep the text centered or aligned in a clear column, and let the image or icon carry the visual weight.

## Visual language

The site looks like an institutional publication with modern pacing. Surfaces are mostly flat. Shadows are rare. Corners stay square or only lightly softened. When separation is needed, the design prefers a thin rule, a background shift, or a white card floating over a photograph rather than a heavy border or drop shadow.

Photography is the main expressive layer. The images are documentary and place-based: gallery interiors, artworks in context, staff portraits, museum objects, and broad views of people moving through the institution. The imagery feels purposeful and specific. It shows the museum as a working place, not just a display shell. That keeps the brand human without losing its formality.

The text language is equally restrained. Black headings sit in strong uppercase or tight title case. Supporting copy uses gray rather than color and stays short enough that the page can breathe. Call-to-action buttons are rectangular, sage green, and direct. They do not look playful. They look dependable. Links are underlined or clearly separated from surrounding body copy, which matters because the rest of the palette is so quiet.

A useful mental model is “paper over photograph.” The page often lays a white or pale card over a full-width image, then adds a centered title and a few lines of explanation. That treatment appears in the hero, in promotional blocks, and in visit information sections. It is the core visual gesture to preserve.

## Components

### Header

- **Anatomy:** Left-aligned museum mark, a row of main navigation links, a small utility strip in some views, and a search affordance at the far right.
- **Typography:** Navigation and utility text use Helvetica Neue; the mark is a strong black graphic.
- **Surface:** Pure white, with no heavy framing.
- **Visible state:** The current section is marked by a dark underline beneath the active navigation item.
- **Composition:** Keep the header quiet and wide. It should frame the page, not compete with the hero image below it.

### Hero card

- **Anatomy:** A large photo band with a white centered or offset card holding a short kicker, a title, and a short explanation.
- **Typography:** Large Montserrat title, then lighter supporting copy.
- **Surface:** Paper white against either a bright or dark photo.
- **Shape:** Rectangular and clean; the power comes from proportion, not ornament.
- **Composition:** Let the image fill the width and keep the card's text block compact enough to read in one glance.

### Visit information panel

- **Anatomy:** Hero image, title card, a small row of buttons, then a short explanatory section below.
- **Surface:** Sage-green buttons on a white background, with pale content bands beneath.
- **Typography:** Strong centered headings and short body text.
- **Composition:** The page wants a clear entry point: one title, one primary action, then a supporting set of practical links.

### Content cards and video tiles

- **Anatomy:** Image first, then a label or heading, then a short sentence or two below.
- **Surface:** Light paper or pale gray panels with subtle separators.
- **Typography:** Card-heading for titles, body for captions.
- **Visible states:** Some tiles show a small top-left label such as “Video”; others keep the heading beneath the image.
- **Composition:** Keep grids even and consistent. The cards should feel like a neat series, not a scattered mosaic.

### Social and promotional strip

- **Anatomy:** Centered section heading, supporting line, icon row, then promotional tiles or membership cards below.
- **Typography:** Centered section-display with smaller body text.
- **Surface:** Pale gray or warm gray panels over white page space.
- **Composition:** Keep social icons large enough to read as actions, but not so large that they break the calm of the band.

### Buttons and links

- **Anatomy:** Flat rectangle, solid sage fill, dark text, and simple all-caps or compact label text.
- **Surface:** No gradient, no gloss, no heavy shadow.
- **Visible state:** The button should remain blunt and legible even at small sizes.
- **Hierarchy:** Use one primary action per block and keep links visually quieter than buttons.

## Responsive behavior

When the layout narrows, the hierarchy should stay the same: header first, hero image and card next, then the practical sections, then the promotional or social footer. The page should stack rather than squeeze. The image cards should drop from multi-column rows into a single column or a clean two-up layout only when the card width still supports the image-caption relationship. The large title card can remain centered, but its text should shorten through wrapping before the card itself becomes too narrow. Keep the page generous at every size; the design weakens if the content gets dense.

## Practical implementation guidance

### Preserve

- Keep the monochrome foundation and let photography do the expressive work.
- Use Montserrat for the main hierarchy and Helvetica Neue for narrow utility text.
- Keep the sage action color as the one persistent CTA tone.
- Preserve full-width image bands with white paper cards on top.
- Maintain the calm, flat look: rules, spacing, and background shifts should do the separation work.

### Avoid

- Avoid gradients, glossy button treatments, and decorative shadows.
- Avoid adding extra display families or playful serif pairings.
- Avoid hard-cornered card grids that feel like a dashboard.
- Avoid overusing the blue link tone; it should stay secondary.
- Avoid crowding the page with too many small badges or outlined chips.

### Recommended build order

1. Build the white header with its navigation and search affordance.
2. Establish the hero image band and the overlaid white card.
3. Add the practical visit or appeal action row.
4. Build the pale section bands with consistent card grids.
5. Add the social strip and promotional tiles.
6. Tune spacing, card widths, and image cropping so the page stays open.

### Accessibility

- Keep the active navigation state visible with more than color alone; the underline is part of the cue.
- Use strong contrast for text on photographs by placing the copy on a paper card or a well-separated panel.
- Give all artwork, staff, and interior images descriptive alternative text.
- Keep button labels clear and short so the action is understandable without a visual scan.
- Make focus styles visible on links, buttons, and any tile that behaves as a control.

## Scope note

This guide covers the visible desktop home, visit, appeal, working, collections, social, and promo sections from the supplied packet. It does not define mobile breakpoints, motion, hover behavior, menus in the open state, or content that was not visible in the selected views.
