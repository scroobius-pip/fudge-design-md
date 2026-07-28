# How bbc.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/bbc.com-design)

Last updated: 2026-07-28

## Design character

BBC.com is a **public-service news portal** first and a reading product second. The wide homepage is a calm, white editorial dashboard: three-block **BBC** wordmark centered in a thin masthead, a long horizontal topic rail, then a dense but orderly story mosaic of photography, headlines, decks, and tiny metadata. Live coverage is the only loud signal—a small red disc and **LIVE** label—against otherwise restrained black type on white.

Article surfaces stay in the same family but drop the portal density. English longform opens with the same black-block logo and topic nav, then a full-bleed media hero (often video with a translucent play control) and a single reading column of serif-feeling body copy. World Service pages, like the Russian-language article, strip even further: byline and time chips, a translation note, then long paragraphs on a plain white field with almost no chrome in the viewport. The brand is consistent; the **layout energy** is not—homepage is mosaic, English article is media-led story, World Service article is pure text.

What should survive adaptation:
- Black three-block logo as the sole hard brand mark
- White canvas, black primary type, gray secondary meta
- Photography-led cards on the portal; calmer single-column reading on articles
- LIVE as a small red interrupt, not a red theme
- Honest multi-locale variance: same institution, different density by product surface

## Foundations

### Color

No structured palette was captured. Colors below are taken from the visible UI on the homepage and article screens.

| Swatch | Role (interpreted) |
| --- | --- |
| `#FFFFFF` | Page canvas, cards, article field |
| `#F6F6F6` / light gray surround | Soft page wash behind the home content band (visual) |
| `#000000` | Primary text, logo blocks, Register CTA fill, nav underline |
| `#FFFFFF` on black | Logo glyphs and primary button label |
| `#5A5A5A`–`#6B6B6B` | Decks, timestamps, section chips, muted ad copy (visual) |
| `#E0E0E0` | Hairline rules between rail items and under masthead (visual) |
| `#BB1919` / strong red | LIVE badge disc and label—the only saturated brand accent on the home mosaic |

Relationships that matter: the system is **monochrome plus one emergency red**. Accents do not tint the chrome. Sponsored modules at the top of home may introduce third-party color, but editorial chrome stays black/white/gray.

### Typography

Font families were not declared in the capture set. Hierarchy is clear from size, weight, and role:

**Homepage (wide ~2048px viewport)**
- Primary card headlines: medium weight (~500), about **18px / 22px**, slight negative tracking—scannable, not giant display
- Decks and supporting lines: regular **14–16px**, tighter leading on meta
- Meta row (`time | region`): small **12–14px**, muted gray
- Nav labels: regular ~**14–16px**, active item marked with a thick black underline rather than a fill
- Occasional **700** weight at 14px for emphasis chips

**English article (~721px-wide capture)**
- Body cluster around **18px / 26px** regular with slight negative tracking—the dominant reading size
- Caption under hero media: smaller, quieter than body
- Secondary UI chrome still ~13–16px regular; medium **14/18** for compact labels

**Russian World Service article (narrow ~645px)**
- Body heavily **16px / ~22px** regular—long Cyrillic paragraphs, generous but not airy
- Byline line slightly emphasized; timestamp and reading-time in lighter gray
- Inline translation note in the same size family, with a simple underline on the “original” link

Across surfaces, BBC favors **medium-for-headlines, regular-for-body**, not extreme display weights. Tracking tightens slightly on mid-size headlines. Do not invent a named BBC Reith stack here—families were not recorded.

### Spacing and layout

Recurring spacing from the captures (not a full token scale):

| Pattern | Approx. values |
| --- | --- |
| Home card internal padding | **12px** vertical common; **16px** horizontal on many blocks; **8px** on tighter chips |
| Home mosaic gutters | Tight, magazine-like; negative **−12px** margin appears in the home capture (overlapping/overlap trim) |
| Article side margins | **16px** horizontal margins/padding common on the English article |
| Compact control padding | **8px** horizontal on article chrome |
| World Service vertical rhythm | Heavy **24px** bottom padding occurrences; **40px** right padding on the narrow Russian capture (reading column inset) |
| Rules | **2px** solid borders appear on home (logo blocks / strong dividers)—not soft 1px-only UI |

Layout models:
1. **Home portal** — centered masthead + full-width topic rail; content as a multi-column mosaic (left stack of image+headline cards, large center feature image, right text rail with LIVE items and hairline separators).
2. **English article** — logo + topic nav; hero media edge-to-edge in the content width; caption; then a single text column with comfortable measure.
3. **World Service article** — minimal chrome in-frame; byline → time/reading time → translation callout → stacked paragraphs. No hero in the captured viewport.

## Visual language

- **Logo:** three equal black rounded-square tiles, white **B B C** glyphs, centered. High contrast, no tagline in the masthead.
- **Geometry:** mostly sharp editorial rectangles for photos and cards. Logo tiles and the black **Register** pill are the main rounded forms; the home ad CTA is a fully rounded black capsule.
- **Borders & dividers:** thin gray horizontal rules separate right-rail stories; masthead sits on a hairline. Home also records **2px** solid edges—used sparingly for strong structure (logo), not card outlines everywhere.
- **Imagery:** documentary and news photography drive emotion. Home uses varied crop ratios in a masonry-like mosaic; articles may lead with video stills plus a large circular translucent play control and a small duration chip (`3:02`) on the media.
- **Motion/live:** only the red LIVE marker and play icon suggest realtime/media; no decorative motion language is visible still.
- **Shadows:** none recorded—depth comes from layout and photography, not elevation.
- **Ads:** a light bordered promo module can sit above the masthead on home; it is visually separated (label “ADVERTISEMENT”) so editorial black/white stays authoritative underneath.

## Components

**Masthead**
- Left utility (menu + search icons on home)
- Center BBC blocks
- Right account actions: solid black **Register**, text **Sign in**
- Below: horizontal topic list (Home, News, Sport, …) with active **Home** underlined

**Story card (home)**
- Thumbnail or large photo
- Bold/medium headline
- Optional one- or two-line deck
- Meta: relative time + pipe + section/region in muted type
- LIVE variant: red disc + **LIVE** before headline; sometimes a play glyph for video/audio leads

**Right rail**
- Text-forward list, hairline separators, same meta grammar; mixes LIVE and standard items

**Article hero**
- Wide media, centered circular play affordance, duration badge bottom-left, short caption beneath

**Article body**
- Continuous paragraphs; pull quotes are not required in these captures—voice stays in running text and attributed speech inside paragraphs
- World Service: byline (multi-author, service names), relative time, reading time, translation disclaimer with text link

**Buttons**
- Primary: black fill, white label, pill radius (Register, external Open)
- Ghost/text: Sign in, nav labels

## Responsive behavior

Three viewports support a clear split:

| Surface | Width×height (capture) | Behavior |
| --- | --- | --- |
| Home | 2048×1194 | Multi-column mosaic, full topic rail, promo above chrome |
| English article | 721×730 | Single column under full nav; hero media dominates above the fold |
| Russian article | 645×552 | Narrow reading column; chrome mostly out of frame; text-first World Service template |

Collapse pattern to preserve: **portal → media story → text story**. Do not force the three-column home mosaic onto article routes. Narrow World Service pages can omit the heavy hero and still feel on-brand through type, spacing, and byline grammar.

## Practical guidance

**Do**
- Keep the canvas white and the logo black-on-white (or inverted only if you intentionally flip the whole chrome)
- Use one red LIVE treatment; resist rainbow section colors in the global chrome
- Pair every home image card with a short deck and a time|section meta line
- Let article body sit larger and calmer than home card titles
- Allow locale/product templates (World Service) to be quieter and more typographic

**Don't**
- Turn the whole UI red because LIVE is red
- Add drop shadows and glass cards—BBC’s depth is photographic and structural
- Replace the three-block mark with a wordmark-only lockup if you are referencing this system
- Pack World Service longform with home-mosaic density
- Claim a specific licensed font stack without a separate source—families were not captured here

## Scope note

Drawn from three bbc.com captures: wide homepage (`/`), English news article (`/news/articles/...` Attenborough feature), and narrow Russian World Service article (`/russian/articles/...`). Structured color and font-family data were empty; color guidance is screenshot-grounded. This brief describes the public news portal and article templates only—not iPlayer, Sounds, Weather, or account flows.

## Captured pages

[![BBC Home - Breaking News, World News, US News, Sports, Business, Innovation, Climate, Culture, Travel, Video & Audio](https://pin.fontofweb.com/6962?format=jpg)](https://design.withfudge.com/share/pin-6962)

[BBC Home - Breaking News, World News, US News, Sports, Business, Innovation, Climate, Culture, Travel, Video & Audio](https://design.withfudge.com/share/pin-6962)

[![When Attenborough met the gorillas - the story behind his iconic TV moment](https://pin.fontofweb.com/9109?format=jpg)](https://design.withfudge.com/share/pin-9109)

[When Attenborough met the gorillas - the story behind his iconic TV moment](https://design.withfudge.com/share/pin-9109)

[![Наступление повстанцев в Мали: три сценария развития событий для военного правительства, которое поддерживает Россия - BBC News Русская служба](https://pin.fontofweb.com/9169?format=jpg)](https://design.withfudge.com/share/pin-9169)

[Наступление повстанцев в Мали: три сценария развития событий для военного правительства, которое поддерживает Россия - BBC News Русская служба](https://design.withfudge.com/share/pin-9169)

## Colors

- `#ffffff`
- `#f6f6f6`
- `#000000`
- `#5a5a5a`
- `#6b6b6b`
- `#e0e0e0`
- `#bb1919`
