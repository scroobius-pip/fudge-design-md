# How bbc.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/bbc.com-design)

Last updated: 2026-08-04

## Captured pages

[![Homepage mosaic with sponsor band, centered BBC mark, and LIVE story rail](https://pin.fontofweb.com/6962?format=jpg)](https://design.withfudge.com/share/pin-6962)

[Homepage mosaic with sponsor band, centered BBC mark, and LIVE story rail](https://design.withfudge.com/share/pin-6962)

[![Article hero with play overlay and dense single reading column](https://pin.fontofweb.com/9109?format=jpg)](https://design.withfudge.com/share/pin-9109)

[Article hero with play overlay and dense single reading column](https://design.withfudge.com/share/pin-9109)

[![Russian World Service page with byline, translation note, and tight body text](https://pin.fontofweb.com/9169?format=jpg)](https://design.withfudge.com/share/pin-9169)

[Russian World Service page with byline, translation note, and tight body text](https://design.withfudge.com/share/pin-9169)

## Overview

BBC.com is a public-service news system that makes the institution legible before it makes the story legible. The homepage is a calm, white editorial dashboard: a centered three-tile BBC mark, a thin topic rail, then a dense but orderly story mosaic that mixes large photography, compact headlines, small decks, and quiet metadata. The article views keep the same brand discipline but reduce the visual noise. English longform leans on a media hero and a single reading column; the Russian World Service page strips the page down to byline, translation note, and text-first paragraphs.

The system’s power comes from restraint. Black and white do almost all of the structural work. Photography carries the local color. The LIVE status cue is a small interrupt, not a palette change. Because the layout logic shifts by page type, the brand feels consistent without becoming repetitive: home is mosaic, feature article is media-led, World Service is typographic.

The visible BBC Reith cuts appear under the names By Dalton Maag Ltd-10102547792741969005, By Dalton Maag Ltd-10553158067486637325, By Dalton Maag Ltd-1093719771734060195, By Dalton Maag Ltd-13103360817388916986, By Dalton Maag Ltd-14071579629747431287, and By Dalton Maag Ltd-6816961286281792606; all are credited to Dalton Maag Ltd. Times handles the plain structural wrapper text, while Times New Roman is reserved for the small button-style labels and utility text that sit beside the editorial voice rather than inside it.

## Colors

BBC.com is essentially monochrome. White canvas and near-black text carry the news hierarchy, while pale gray frames the sponsor band and other quiet surfaces. The palette below is the practical UI set; it stays close to the page materials and avoids turning every visual accent into a named brand token.

| token | hex | use |
|---|---|---|
| `action` | `#000000` | BBC blocks, Register button, and the strongest controls |
| `ink` | `#141414` | Main reading text on white pages |
| `ink-strong` | `#202224` | Secondary headlines, darker chrome, and rule weight |
| `muted-ink` | `#545658` | Deck copy, timestamps, and translation-note text |
| `canvas` | `#FFFFFF` | Main page background and article field |
| `surface` | `#F6F6F6` | Pale sponsor band and light framing fields |
| `rule` | `#202224` | Separators, active underline, and hard edge detail |

Light is the default field. Dark appears as text and the black mark, not as a separate theme. Photography supplies the only broad color variation. The accent system stays narrow and status-based: LIVE is a signal, not a palette family. If a darker page field is introduced elsewhere, it should remain monochrome, keep white text, and preserve the same restrained status treatment instead of inventing a second chromatic layer.

## Typography

The visible type system is narrowly controlled. The Dalton Maag family does almost all of the editorial work: navigation, buttons, headlines, decks, body copy, and microcopy all stay inside one family and vary by weight, size, and line height rather than by switching faces. Times appears on the plain structural wrapper text, and Times New Roman appears on the small button-style labels and utility text. Neither serif face should be treated as a fallback; each one has a visible role.

The BBC Reith cuts are surfaced through the file names By Dalton Maag Ltd-10102547792741969005, By Dalton Maag Ltd-10553158067486637325, By Dalton Maag Ltd-1093719771734060195, By Dalton Maag Ltd-13103360817388916986, By Dalton Maag Ltd-14071579629747431287, and By Dalton Maag Ltd-6816961286281792606. They stay in one editorial voice and shift only by weight and size.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `nav` | By Dalton Maag Ltd | 0.875rem | 500 | 1.2857 | 0em | Topic rail, utility links, and quiet header actions |
| `button` | By Dalton Maag Ltd | 1rem | 500 | 1.125 | 0em | Register and similar top-level CTA labels |
| `story-headline` | By Dalton Maag Ltd | 1.125rem | 500 | 1.2222 | -0.02em | Home story titles and compact lead headlines |
| `story-deck` | By Dalton Maag Ltd | 0.875rem | 400 | 1.2857 | 0em | Card decks and short supporting copy |
| `article-body` | By Dalton Maag Ltd | 1.125rem | 400 | 1.4444 | -0.02em | English article reading column |
| `service-body` | By Dalton Maag Ltd | 1rem | 400 | 1.375 | 0em | World Service paragraphs and denser text blocks |
| `meta` | By Dalton Maag Ltd | 0.75rem | 400 | 1.1667 | -0.01em | Time, section, byline, and translation metadata |
| `structural-wrapper` | Times | 1rem | 400 | 1 | 0em | Plain wrapper text and shell labels on the homepage and article pages |
| `button-utility` | Times New Roman | 0.8333rem | 400 | 1 | 0em | Button-style labels and stripped utility copy |

The hierarchy stays calm because the weights stay close. Headlines are medium, not heavy. Body text is regular, not airy. Tracking tightens slightly on the most visible story lines and translation notes, then returns to normal on quieter labels. The result is a page that reads like editorial print translated into a web grid, not like a marketing layout pretending to be news. Licensing details are not included in the supplied material.

## Layout

The layout model changes by page type, but the chrome stays in family. The homepage uses a centered wide band with a top sponsor strip, a masthead, then a horizontal topic rail. Below that, the content becomes a three-part grid: a left stack of story cards, a large central lead, and a right text rail. The English article template moves to a single reading path after the hero media. The Russian World Service page compresses further and lets the text itself define the page rhythm.

### Homepage grid

The homepage relies on asymmetry that still feels ordered. A lead image occupies the center, smaller image cards stack at left, and text-forward items line the right column. Headlines are short enough to hold the grid together, but the visuals do most of the structural work. The spacing between modules is wide enough to keep the page breathable and tight enough to avoid floating islands of content. The top sponsor band sits outside the editorial grid so that advertising remains visibly separate from BBC’s own chrome.

### English article

The longform article page is a different density, not a different brand. The media hero spans the content width and gets a circular translucent play control and a small duration chip. The caption sits directly below the media. After that, the page becomes a single reading column with generous line height and a little negative tracking. That reading column should stay narrow enough for sustained text and wide enough for comfortable scanning.

### World Service article

The Russian World Service page removes the hero and trusts text. Byline, service names, time, reading duration, and the translation note appear before the body. The paragraphs are compact, direct, and denser than the English longform page. This page is the clearest proof that the BBC system can become almost invisible when the story demands it without losing the BBC identity.

## Visual language

BBC.com uses editorial restraint, not decoration. Rectangles dominate the system: cards, rails, the sponsor band, the article field, and most of the chrome are square or near-square. The BBC mark itself is the most literal expression of that logic: three equal black tiles with white letters. The only soft forms that matter are the circular play control and the round-ended action chip. Everything else should stay firm and flat.

Photography is the main source of visual variety. On the homepage it is cropped into cards and a single bigger lead frame. On the article page it becomes a hero that can carry motion and atmosphere. On World Service text pages, the absence of a lead image is itself part of the language; the page feels quieter and more serious because the type has to carry the whole load. The UI never competes with the images. It frames them.

Color discipline is equally strict. White space stays white. Black stays black. Muted gray handles the small informational labels. The LIVE marker is a status cue, not a general accent. Underlines and hairlines do more work than shadows. Depth is created by spacing, not elevation. That makes the pages feel stable, even when the stories themselves are urgent.

The visual rhythm also depends on contrast between dense and open zones. The homepage uses a crowded mosaic, but it still leaves enough white field around the top strip, the masthead, and the story clusters to keep the page from feeling noisy. The article page makes the opposite move: one strong lead, one caption, one column, then repeated paragraphs. The World Service page goes even quieter, with no hero image and almost no chrome. Across all three, the strongest shapes are the ones that organize content, not the ones that decorate it.

## Components

### Sponsor band

- **Anatomy:** Small label, stacked promotional headline, short support line, and a black pill CTA.
- **Surface:** Pale gray field against the white page, with a white ad card sitting inside it.
- **Typography:** The promo copy is large and dense compared with the editorial rails, but it still stays within the same plain news tone.
- **Shape:** The CTA is the softest object on the page; most of the rest stays square.
- **Spacing:** The band needs enough vertical air to read as separate from BBC’s own masthead and grid.
- **Visible states:** The sponsor label remains small and quiet so the ad never outweighs the news brand.

### Masthead and topic rail

- **Anatomy:** Centered BBC tile mark, left utility icons, right account actions, then a horizontal topic list.
- **Surface:** Pure white, with thin rule lines and no decorative backdrop.
- **Typography:** `nav` for the topic rail and compact utility links; `button` for the Register CTA.
- **Shape:** The BBC mark is squared; the Register control is a hard-edged black block; the rest stays flat.
- **Composition:** Keep the mark centered and let the rail stretch wide. The active topic is underlined rather than filled.
- **Visible states:** Home is the active item in the homepage rail; the account CTA reverses to white text on black.

### Story mosaic card

- **Anatomy:** Image, headline, optional deck, and a small time/section line.
- **Surface:** White card field with almost no visible elevation.
- **Typography:** `story-headline` for the title, `story-deck` for the short explanation, `meta` for the small line underneath.
- **Shape:** Mostly rectangular. Avoid adding a second layer of framing around every card.
- **Spacing:** The card has enough internal breathing room to keep the image and copy from collapsing into each other.
- **Variants:** Large lead stories, smaller left-column cards, and text-only right-rail items all share the same grammar.
- **Visible states:** LIVE items add the red status marker before the headline and should keep the text weight identical to ordinary leads.

### Article lead and body column

- **Anatomy:** Full-width media, translucent play control, duration chip, caption strip, then a single reading column.
- **Surface:** White page with a strong photographic lead.
- **Typography:** The caption stays small and quiet; the body uses `article-body` on the English page and `service-body` on the Russian page.
- **Spacing:** The reading column needs generous vertical rhythm and a restrained measure so the paragraphs remain calm.
- **Composition:** Media first, caption second, text third. Do not split the reading path into side rails.
- **Visible states:** The play control sits over the image, not beside it, and the duration chip behaves like a status label rather than a button.

### World Service translation strip

- **Anatomy:** Byline, service names, time, reading time, italic translation note, then dense paragraphs.
- **Surface:** Plain white field with very little chrome.
- **Typography:** The note and the body sit in the same family, but the note steps down in size and emphasis.
- **Spacing:** Tight vertical stacking keeps the page readable even when the text is long.
- **Hierarchy:** The translation note belongs at the top of the reading path so the reader understands the source and language context immediately.
- **Visible states:** Inline links should stay obvious without adding extra color noise.

### Utility label and status details

- **Anatomy:** Small label text, compact counters, section tags, and button-style utility copy.
- **Surface:** No special panel treatment; these live directly on the white page or the black control block.
- **Typography:** Times New Roman covers the stripped utility labels, while Times covers the plain shell text around them.
- **Shape:** Zero rounding and minimal ornament keep these elements out of the way.
- **Spacing:** These details use very little internal padding and sit close to the text they qualify.
- **Visible states:** The button-style labels should remain legible at small sizes without gaining extra visual weight.

## Responsive behavior

The three supplied pages already show the system’s density range, and that range should be preserved. The homepage should keep its magazine grid when space is wide enough, then collapse by removing side columns before it collapses by stacking images and text into a single dense ribbon. The article page should keep the hero media above the text and never bury the reading column under cards. The World Service template should stay text-first and allow the byline and note to lead the page.

If this system is adapted downward, keep the following order: masthead, topic rail, lead image or lead text, then supporting copy. If the page must simplify, remove side embellishment before you remove hierarchy. If a compact version needs a smaller type scale, keep the same weight logic and preserve the line-height contrast between headline, deck, body, and meta.

On wider screens, the homepage grid can breathe while still holding a centered editorial spine. On narrower screens, the card stack should become a single column without changing the order of information inside each card. The article template should hold onto its lead media and caption even when the reading column narrows. The World Service template should never switch into a magazine layout; its strength is the calm, text-led rhythm.

## Practical implementation guidance

### Preserve

- Keep the BBC mark centered and black on white.
- Keep the page mostly monochrome; let photography provide the color variation.
- Keep the LIVE status cue as a small signal, not a broad accent token.
- Keep story cards flat and let spacing, not shadow, separate modules.
- Keep the English article hero media-led and the World Service page text-led.

### Avoid

- Avoid tinting the whole chrome to match image colors.
- Avoid over-rounding; the page depends on hard-edged rectangles more than soft panels.
- Avoid heavy drop shadows and glass effects.
- Avoid giving every story card a different layout grammar.
- Avoid letting utility faces replace the Dalton Maag family in editorial hierarchy.

### Recommended build order

1. Set the monochrome palette and the Dalton Maag type scale.
2. Build the centered masthead and topic rail.
3. Add the sponsor band and the primary black CTA.
4. Build the homepage story card grammar and the LIVE variant.
5. Add the article hero with play control and duration chip.
6. Add the English reading column and the Russian translation-first template.
7. Tighten spacing, line lengths, and metadata rhythm across the three page types.

### Accessibility

- Keep black text on white strong enough for long reading paths.
- Do not rely on the LIVE color alone; keep the word live in the label.
- Preserve visible focus for topic links, the Register button, and any media control.
- Keep caption text and metadata legible at smaller sizes.
- Hold a readable line length in the article column so paragraphs do not sprawl across the viewport.

## Scope note

This guide covers the white homepage, the English feature article, and the Russian World Service article. It does not cover the footer, comments, account flows, search pages, or mobile breakpoints and interaction states beyond the visible play control and basic header actions.
