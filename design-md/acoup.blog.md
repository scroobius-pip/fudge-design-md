# How acoup.blog is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/acoup.blog-design)

Last updated: 2026-08-03

## Captured pages

[![Dark article view with a large Fondamento headline and coin preview image](https://pin.fontofweb.com/9512?format=jpg)](https://design.withfudge.com/share/pin-9512)

[Dark article view with a large Fondamento headline and coin preview image](https://design.withfudge.com/share/pin-9512)

[![Home feed with coin hero, search rail, and pale tag cloud at right](https://pin.fontofweb.com/9511?format=jpg)](https://design.withfudge.com/share/pin-9511)

[Home feed with coin hero, search rail, and pale tag cloud at right](https://design.withfudge.com/share/pin-9511)

[![Home feed with relief hero and the same two-column reading frame](https://pin.fontofweb.com/9510?format=jpg)](https://design.withfudge.com/share/pin-9510)

[Home feed with relief hero and the same two-column reading frame](https://design.withfudge.com/share/pin-9510)

## Overview

acoup.blog is a dark reading site built around long historical essays. The page does not try to feel modern in a glossy sense. It feels bookish, steady, and slightly ceremonial. The strongest visual move is the pairing of a decorative serif for titles with Georgia for the reading copy, all placed on a cool charcoal-violet field. The accent color is a dusty pink-lilac that repeats in the navigation, links, tag cloud, and small utility details. That single accent carries most of the brand energy, so the rest of the interface can stay quiet.

The page structure is also consistent. A full-width hero image opens the page, then the content settles into a broad left reading column and a narrower right rail. The left side carries article titles, excerpts, meta information, and images. The right side carries search, short notes, recent posts, and tags. Nothing feels boxed in too tightly. The layout gives the prose room to breathe while keeping the side rail useful and clearly secondary.

The visual identity is strongest when the site combines three things at once: archival imagery, large serif headings, and a muted accent on a dark base. That is the system to keep intact.

## Colors

| token | value | role |
|---|---|---|
| `canvas` | `#413E4A` | Main page ground and article background |
| `surface` | `#404040` | Dark utility surfaces and deeper interface layers |
| `ink` | `#B5B5B5` | Primary reading text on the dark canvas |
| `ink-strong` | `#BCB2B8` | Article titles, key links, and higher-emphasis text |
| `ink-soft` | `#939393` | Quieter metadata and secondary sidebar copy |
| `action` | `#E8C3DF` | Links, nav labels, tag emphasis, and highlight color |
| `action-strong` | `#FFFFFF` | Hero title text and other highest-contrast text |
| `field` | `#FFFFFF` | Search field and read-more button surface |
| `field-text` | `#404040` | Text inside white utility surfaces |
| `border` | `#A1A1A1` | Thin form border and other light rules |
| `rule` | `#656565` | Hairline separators and restrained chrome |
| `quiet` | `#EEEEEE` | Small control highlights and pale utility text |
| `chrome` | `#6D6D6D` | Muted control and interface gray |

The palette is narrow, and that restraint is the point. Dark ground, pale text, and a pink-lilac accent create most of the contrast. The site does not rely on bright fills, gradients, or layered shadows. The white utility surfaces are isolated exceptions: the search field and the read-more button read as tools, not as a second theme. On the hero, white title text sits over pale historical imagery; in the reading area, the same family of colors shifts down to mauve titles, silver-gray body copy, and softer gray metadata. The accent is strong enough to carry links but soft enough to stay in the same visual key as the historic imagery.

## Typography

The packet names four families: **Fondamento**, **Georgia**, **Applesystem**, and **System**. The page uses them in a very deliberate split. Fondamento gives the site its chapter-like voice. Georgia carries the long-form reading voice. Applesystem handles the utility voice for navigation and metadata. System appears only in the button label and should stay there. Licensing for these families is not stated in the packet.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Fondamento | 2.9375rem | 400 | 1.2 | 0em | Hero title over the full-bleed image |
| `section-display` | Fondamento | 2.375rem | 400 | 1.3 | 0em | Large post and article headlines |
| `body` | Georgia | 1.125rem | 400 | 1.75 | 0em | Main article prose |
| `body-small` | Georgia | 1rem | 400 | 1.75 | 0em | Supporting copy and short notes |
| `meta` | Applesystem | 1rem | 400 | 1.75 | 0em | Author, category, date, and read-time row |
| `nav` | Applesystem | 1.0625rem | 700 | 1.75 | 0em | Top navigation links |
| `button` | System | 1.125rem | 600 | 1 | 0em | White read-more button |
| `tag-cloud` | Georgia | 0.9375rem | 700 | 1.4 | 0em | Tags in the sidebar cluster |
| `legal` | Applesystem | 0.875rem | 400 | 1.75 | 0em | Small utility copy and footer-like text |

The hierarchy depends on family contrast as much as size. Fondamento is not used for body copy; that keeps the decorative voice special and preserves the sense that the page is a stack of chapters. Georgia keeps the prose legible and calm. Applesystem gives the nav and metadata a plain, readable utility tone, which is important because those pieces sit directly under the decorative headlines. The size jumps are generous but not theatrical. Most of the reading copy lives between 1rem and 1.125rem with open leading, while the headings sit in the mid-40s px range and wrap across multiple lines.

## Layout

The layout is a two-part reading frame anchored by a full-width image banner. The hero spans the page edge to edge and uses the image as a stage, not as a framed card. The title sits in the middle of the image and stays centered, while the subtitle sits close beneath it and remains small. The hero works because the image already has a historical texture; the typography only needs to sit on top with enough contrast to remain legible.

Below the hero, the page shifts into a wide dark reading floor. The main column is left-aligned and much broader than the sidebar. It holds the article title, the utility meta row, the opening text, and the lead image or excerpt image. The sidebar is narrower, stacked, and visually quieter. It contains the search field, a short reminder note, the recent-post list, and the tag cloud. This split is one of the most important layout cues on the page. The reader instantly knows what is primary and what is secondary.

Spacing is generous and consistent. Large gutters separate the reading column from the rail. There is enough vertical air between the hero, the nav row, the article title, the excerpt, and the following blocks that the page never feels like a dense feed. The long line lengths are intentional: they suit essay reading and make the site feel closer to a magazine or archive than to a dashboard. The component rhythm is mostly stacked, with few nested frames. The page gets structure from whitespace, not from nested boxes.

## Visual language

The site’s visual language is archival and restrained. It treats historical imagery as the main ornament. Coin faces, carved reliefs, and similar monochrome or sepia images give the page its identity. Those images appear either full-bleed in the hero or as large inline previews inside the article stream. They are never crowded with extra decoration. The interface trusts the imagery enough to keep borders minimal and surfaces flat.

The accent color is quiet but distinct. It is soft enough to sit beside the dark background, yet pink-lilac enough to read as a brand cue. It appears in nav links, active-looking tag text, and selected headings. Because the color is repeated so consistently, the site can use very little else for emphasis. White is reserved for the hero title, the search field, and the read-more button, so those moments read as utility or entry points rather than as a general brand tone.

The page avoids glossy depth. There are no heavy shadows, no glass effects, and no bright card stacks. Hairlines, pale buttons, and low-contrast metadata do the quiet work. The result is scholarly rather than promotional. The visual weight sits in the type and the images, not in the interface chrome.

## Components

### Hero banner

- **Anatomy:** Full-width historical image, centered site title, short subtitle beneath it.
- **Surface:** Image-first stage with no obvious framed container.
- **Typography:** Fondamento in white for the title, smaller white text for the subtitle.
- **Composition:** The title sits in the visual center of the image rather than in a fixed header block.
- **Visible state:** The hero should stay legible across different historical images, which means the text needs enough contrast over both pale stone and darker relief backgrounds.

### Top navigation row

- **Anatomy:** A single horizontal link row below the hero.
- **Typography:** Applesystem in a bold utility weight.
- **Color:** The dusty pink-lilac accent carries the links.
- **Shape:** No pills or tabs; it is plain text on the dark ground.
- **Composition:** Items sit in one line with even separation and a calm, editorial cadence.

### Article teaser / post preview

- **Anatomy:** Large headline, one or more lines of excerpt, meta row, and a white read-more button.
- **Surface:** Directly on the dark canvas, with no heavy card framing.
- **Typography:** Fondamento for the headline, Georgia for the excerpt, Applesystem for the meta row.
- **Shape:** The button is a small rounded rectangle with a simple borderless look.
- **Visible state:** The button reads as the only strongly inverted surface in the block, which makes it easy to find without turning the teaser into a card.

### Article detail block

- **Anatomy:** Large title, icon-based meta line, opening prose, then a lead image or inline figure.
- **Surface:** Same dark reading field as the feed.
- **Typography:** Fondamento for the title, Georgia for the body, Applesystem for the metadata.
- **Composition:** The title starts the block; the image comes later and acts as support for the prose, not as a headline replacement.
- **Visible state:** The title color is a softer mauve-gray rather than pure white, which keeps the page from feeling shouty.

### Sidebar utilities

- **Anatomy:** Search field, short reminder copy, recent posts list, and tag cloud.
- **Surface:** The search input is white with a thin light border; the surrounding rail remains dark.
- **Typography:** Applesystem for utility copy and Georgia for the tag cloud.
- **Spacing:** Each utility block is separated by clear vertical gaps, so the rail reads as a stack rather than as one dense panel.
- **Visible state:** The search field is the only obvious form control in the rail, so it should stay crisp and unambiguous.

### Tag cloud

- **Anatomy:** Many short tags in mixed sizes.
- **Color:** The pink-lilac accent and pale gray sit together without hard contrast.
- **Typography:** Georgia with heavier weights on the larger tags.
- **Composition:** Dense, but not chaotic; larger tags anchor the group while smaller ones fill the edges.
- **Visible state:** The cloud should look like editorial index material, not like a marketing keyword block.

### Small theme control

- **Anatomy:** A small circular control near the lower-left edge.
- **Surface:** Flat and quiet, with a simple icon.
- **Shape:** Full roundness.
- **Role:** It is present but not dominant, so it should not compete with the reading content.

## Responsive behavior

On narrower screens, the reading order should stay intact: hero, nav, title, body, then rail utilities. The sidebar can move below the main column, but its hierarchy should remain secondary. The hero image may crop more aggressively, yet the title must remain centered and legible. Long headlines should be allowed to wrap naturally rather than being forced into cramped one-line fits. The read-more button, search field, and metadata should keep their utility scale, only tightening spacing where necessary. The site should still feel like a long-form essay page, not a collapsed app shell.

## Practical implementation guidance

### Preserve

- Keep Fondamento reserved for the display voice and Georgia reserved for reading copy.
- Keep the dusty pink-lilac accent as the main interactive color.
- Keep the dark charcoal-violet page ground as the default surface.
- Keep archival imagery large and central.
- Keep the right rail subordinate to the article column.

### Avoid

- Avoid bright saturated primaries.
- Avoid glossy shadows, glass effects, and decorative gradients.
- Avoid replacing the serif headline voice with a neutral sans.
- Avoid wrapping every block in a card.
- Avoid making the sidebar as visually loud as the article.

### Recommended build order

1. Set the dark canvas, accent color, and base reading copy.
2. Build the hero banner with centered title treatment.
3. Build the main reading column and right rail as a stable two-column frame.
4. Add the article teaser pattern with the white button.
5. Add the search field, recent-post list, and tag cloud.
6. Add the small theme control and verify spacing against the dark system.

### Accessibility

- Keep the hero title readable against every hero image crop.
- Keep body text at a calm, legible size and preserve the open leading.
- Give the white search field a clear focus ring.
- Keep link color distinct from body text, not just from surrounding space.
- Use meaningful alt text for coins, reliefs, and inline images.
- Preserve clear contrast for metadata, because it carries important article context.

## Scope note

This guide covers the visible home feed, the article detail layout, the right-rail utilities, and the small circular control shown in the supplied images. Exact mobile behavior, motion, hover, focus, loading, and disabled states are not included. Spacing and radius values are written on the packet’s 0.125rem step. Font licensing is not stated in the packet.
