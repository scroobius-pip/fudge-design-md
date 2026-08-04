# How brookings.edu is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/brookings.edu-design)

Last updated: 2026-08-04

## Captured pages

[![Article lead with oversized headline, wide hero image, and share row](https://pin.fontofweb.com/9557?format=jpg)](https://design.withfudge.com/share/pin-9557)

[Article lead with oversized headline, wide hero image, and share row](https://design.withfudge.com/share/pin-9557)

[![Home page with dark research band, three image columns, and CTA](https://pin.fontofweb.com/9554?format=jpg)](https://design.withfudge.com/share/pin-9554)

[Home page with dark research band, three image columns, and CTA](https://design.withfudge.com/share/pin-9554)

[![Upcoming events strip with date blocks, orange caps, and listings](https://pin.fontofweb.com/9552?format=jpg)](https://design.withfudge.com/share/pin-9552)

[Upcoming events strip with date blocks, orange caps, and listings](https://design.withfudge.com/share/pin-9552)

[![Deep blue footer with newsletter field, social icons, and link columns](https://pin.fontofweb.com/9551?format=jpg)](https://design.withfudge.com/share/pin-9551)

[Deep blue footer with newsletter field, social icons, and link columns](https://design.withfudge.com/share/pin-9551)

[![Home story grid with large image card, right rail list, and white spacing](https://pin.fontofweb.com/9553?format=jpg)](https://design.withfudge.com/share/pin-9553)

[Home story grid with large image card, right rail list, and white spacing](https://design.withfudge.com/share/pin-9553)

## Overview

Brookings reads like a serious editorial institution, not a glossy marketing site. The visual system is built from a narrow set of strong roles: a blue header strip, white content fields, deep navy promotional bands, orange section markers, and black-to-gray body text. The result is direct and legible. It feels closer to a research desk than a campaign landing page.

The home page and article pages share the same language. White space keeps the reading path clear, while the blue bands gather the more institutional messages such as research, events, and newsletter sign-up. Photography is used as documentation: people in context, buildings, devices, flags, conference rooms, and other news-facing scenes. The typography does most of the work, with large headlines, compact metadata, and restrained navigation.

The system depends on contrast between modes rather than visual decoration. White article canvases carry the long reads. Deep blue sections carry institutional calls to action. Orange appears in thin rules, markers, and short emphasis bars. That small accent keeps the page from feeling flat without weakening the sober tone.

## Colors

Brookings uses a compact palette with one primary action blue, one deeper structural blue, one darker navy for the heaviest bands, and a limited set of grays for text and rules. The palette is disciplined: most surfaces are white or near-white, the biggest blocks are blue, and orange is reserved for emphasis. Black appears only in the smallest utility details.

| token | hex | use |
|---|---|---|
| action | `#00649F` | Links, donate buttons, section accents, and brand blue in the utility chrome |
| action-deep | `#003A70` | Top utility strip, footer edge, and other strong institutional blue fields |
| surface-hero | `#022A4E` | Deep promotional bands and the heaviest dark sections |
| ink | `#191919` | Main article text, article headlines, and the dominant dark copy on white |
| ink-soft | `#4D4D4D` | Secondary copy inside cards and modules |
| meta | `#666666` | Dates, bylines, captions, and low-emphasis labels |
| muted | `#B3B3B3` | Tertiary separators and the quietest supporting text |
| rule | `#E3E3E3` | Hairlines, card dividers, and subtle section boundaries |
| canvas-soft | `#F2F2F2` | Pale article and card backgrounds that need a softer field than pure white |
| highlight | `#FF9E1B` | Orange section bars, thin dividers, and small callout markers |
| canvas | `#FFFFFF` | Main page background, article field, and card surfaces |
| utility | `#000000` | Tiny chrome details, icon strokes, and the sharpest micro-contrast |

The relationship between the modes is straightforward. White and pale gray hold the reading experience. `#00649F` is the active blue for editorial actions and small brand touches. `#003A70` is the more structural blue that supports the site chrome and the footer architecture. `#022A4E` goes deepest and carries the strongest institutional panels. `#FF9E1B` never dominates a surface; it marks hierarchy and selection. This keeps the page calm even when it moves between news, research, and donation prompts.

## Typography

Brookings is overwhelmingly an **Inter** system. The face carries headlines, body copy, navigation, metadata, and footer text with only weight and size changes. That keeps the voice steady across article pages and home modules. **Applesystem** appears only in incidental utility text, so it should be treated as a small fallback-like presence rather than a branded display face. Licensing is not supplied here.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| display-xl | Inter | 3.375rem | 700 | 1 | -0.015em | Dark promotional statements and the biggest institutional headings |
| article-title | Inter | 2.625rem | 700 | 1.24 | -0.02em | Article headlines and other major white-page statements |
| section-title | Inter | 2rem | 700 | 1.24 | -0.015em | Footer headings and other strong secondary leads |
| card-title | Inter | 1.3125rem | 600 | 1.24 | -0.02em | Card titles, side cards, and compact feature headings |
| body | Inter | 1rem | 400 | 1.5 | 0em | Article copy and general explanatory text |
| body-strong | Inter | 1rem | 600 | 1.5 | 0em | Inline emphasis, link text, and stronger sentence fragments |
| navigation | Inter | 0.9375rem | 600 | 1.36 | 0em | Top navigation, utility links, and the donate treatment |
| meta | Inter | 0.8125rem | 400 | 1.36 | 0em | Dates, authors, captions, section labels, and quiet supporting copy |
| legal | Inter | 0.6875rem | 400 | 1.36 | 0em | Footer legal copy and the smallest supporting text |
| utility | Applesystem | 0.875rem | 400 | 1 | 0em | Tiny browser-like utility text and incidental system-rendered marks |

The hierarchy is based on scale and weight more than on typographic variety. Headlines are heavy and compact. Metadata sits just below the copy in size and contrast. Navigation is semibold but not shouty. The line height stays open enough for long article reads, while the large display styles compress tightly so the home page can carry a strong statement without looking theatrical.

## Layout

The page is organized around a wide desktop grid with strong outer gutters and a small set of repeating internal gaps. The broad rhythm is easy to read: the content sits in a white field, then a blue band interrupts it, then the white field returns, and finally the footer closes the page in a deeper blue. The structure feels deliberate and hierarchical rather than fluid and exploratory.

On the article page, the lead area is a two-column composition. The left side carries a kicker, a large headline, and compact byline metadata. The right side carries a large rectangular lead image with a caption below it. Beneath that opening, the page shifts into a reading layout with a left section rail, a central text column, and a right-side promo card. The left rail gives the reader a map of the piece. The main column keeps a readable measure. The right column keeps related institutional material close without crowding the body.

On the home page, the structure becomes more modular. A row of story cards anchors the top. The cards rely on large thumbnails, heavy headlines, and thin horizontal rules rather than dense borders or shadows. Farther down, the page moves into a deep blue research band with three linked columns and circular image crops. An events strip follows the same logic with date blocks, compact event titles, and a centered action. The footer then expands into a wide, multi-column field with a strong newsletter prompt, social icons, and dense institutional links.

The strongest spacing signals are the 81.7px outer gutters, 40px internal separations, and the smaller 16px and 20px gaps inside cards and side rails. The layout is serious because it is ruled, not because it is crowded.

## Visual language

Brookings uses an editorial language made from rules, blocks, and documentary photography. The design avoids playful effects. Depth comes from section changes, not from heavy shadows. The image treatment is straightforward: rectangular frames, clear captions, and scenes that explain the subject matter quickly. A flag, a phone, a hearing room, a building facade, or a conference image each supports the story without decoration.

The most distinctive visual cue is the orange bar. It appears as a thin accent above or beside a section, a small marker near the start of a story, or a short rule inside a band. It never becomes a full surface color. Instead it acts like a reading guide. The blue fields carry weight and institutional seriousness. The white page fields carry the text. The gray rules hold the structure together.

Shape is mostly square and restrained. Cards are rectangular. Section groups are blocky. The only fully rounded forms are icon buttons and small circular controls. That contrast matters: the circles soften the social and utility areas, while the article system stays square and composed. The result is a page that feels public, civic, and information-first.

## Components

### Global header

The header is two-tiered. A narrow blue utility strip runs across the top with all-caps links and a donate action. Beneath it, a white masthead row holds the Brookings wordmark, a horizontal topic nav, and a search icon. The utility strip uses white text on `#003A70` and makes the site feel institutional before the reader reaches content. The white masthead below it keeps the main navigation calm and readable.

### Article lead

The article lead starts with a small kicker, then a very large headline, then author and date in smaller copy. The lead image sits to the right in a wide rectangle and takes almost as much visual weight as the title. A caption sits below the image in quiet gray text. Below the hero, social/share controls and a read-time line stay light and secondary. The first body block begins with a narrow black vertical bar and a short orange marker, which gives the opening paragraph a distinct editorial edge.

### Story cards

Home story cards use a large image, a bold title, and compact metadata. The cards stay flat. They rely on spacing and thin rules instead of elevated surfaces. When a card is paired with a sidebar or a right rail, the image remains the anchor and the text stacks cleanly below or beside it. The visual weight sits in the thumbnail and the headline, not in ornament.

### Research band

The dark promotional band uses `#022A4E` or nearby deep blue fields with large white headline text. Inside it, three linked columns break the content into equal parts. Each column uses a circular image crop, a strong subhead, a body paragraph, and a bottom link. The band works because it is strict: clear columns, thin dividers, and one strong statement on the left.

### Events strip

The events section keeps the same deep blue family but shifts into a lighter informational rhythm. Date blocks sit at the left of each event. Titles and venue details sit to the right. A small orange rule caps the date blocks and keeps the section aligned with the rest of the system. The centered action below the row is visually quiet but still clearly primary.

### Footer

The footer is a full institutional closing block. It starts with the newsletter prompt, then an email field with a right-pointing arrow, then a row of social icons, then a large monogrammed brand mark and multiple link columns. The deepest blue field gives the footer strong separation from the content above it. The legal bar at the very bottom is white and low contrast, which helps it feel administrative rather than promotional.

### Side rails and overlays

The article section rail is narrow, white, and highly structured. A thin orange marker indicates the current section. The rail is paired with a dark, clean main reading column. One visible overlay version also shows a right-side blue menu panel and a left-side section list. Both use the same visual grammar: stacked links, thin dividers, and restrained contrast.

## Responsive behavior

The shown pages are desktop-first and should stay that way in spirit. When the layout tightens, the reading order should remain intact: kicker, headline, media, metadata, body, related content, then footer. The blue bands should keep their hierarchy, even if the internal columns collapse. Story cards should stack without losing the image-first cadence. The article rail should either move above the body or condense into a compact index before the text begins.

If the footer compresses, the newsletter field should remain visible before the link columns. If the story grid becomes narrower, the image and headline relationship should survive as a unit. The orange section markers should stay visible at smaller sizes because they are part of the reading logic, not just decoration.

## Practical implementation guidance

### Preserve

- Keep the system editorial and flat. Use white fields, ruled separators, and deep blue bands rather than shadows or glassy surfaces.
- Preserve the 81.7px outer gutter feel, the 40px internal rhythm, and the smaller 16px/20px gaps inside cards.
- Keep `#00649F` as the active editorial blue and `#FF9E1B` as a narrow accent only.
- Preserve the large headline-to-metadata contrast on article pages.
- Keep photography documentary and context-rich, not decorative.

### Avoid

- Avoid soft gradient branding, rounded card systems, or playful illustration that weakens the civic tone.
- Avoid turning the orange accent into a broad fill color.
- Avoid replacing the strong blue footer and header fields with generic gray chrome.
- Avoid mixing too many font families. Inter should carry the interface; Applesystem should remain incidental.
- Avoid border-heavy boxed layouts that fight the open editorial feel.

### Recommended build order

1. Build the blue utility strip and white masthead.
2. Build the article lead with headline, byline, and wide media.
3. Build the section rail and article reading column.
4. Build the story-card grid.
5. Build the dark research band with three linked columns.
6. Build the events strip.
7. Finish with the newsletter footer, social row, and legal bar.

### Accessibility

- Keep contrast strong on white and deep blue surfaces.
- Give the orange section bar a text label or position cue so it is not the only sign of hierarchy.
- Make captions, bylines, dates, and link text readable at smaller sizes.
- If social icons, search, share, and menu controls are interactive, pair them with clear names and visible focus styling.
- Keep the article measure comfortable so long-form text does not become a wide unreadable slab.

## Scope note

This guide covers Brookings’ desktop home page, article page, story cards, section rail, blue research band, events strip, newsletter footer, and the visible slide-out navigation style. Mobile rearrangements, motion, hover behavior, and the full fallback stack are not included.
