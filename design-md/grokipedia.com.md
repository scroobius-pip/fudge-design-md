# How grokipedia.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/grokipedia.com-design)

Last updated: 2026-07-28

## Design character

Grokipedia is a **dark encyclopedia**: near-black reading canvas, high-contrast article titles, blue inline links, and amber/brown inline code chips. It borrows Wikipedia’s information hierarchy (TOC rail, H1, long body, subsections) but skins it as a modern Grok-adjacent product with a centered top search pill and quiet utility chips.

What should survive adaptation:

- **Near-black article canvas** with white body text
- **Blue link color** (`#BFDBFE` family accents measured)
- **Amber inline code chips** on dark
- **Left TOC rail** in muted gray
- **Centered top search pill** + right utilities
- Calm long-form reading measure—not a dashboard grid

## Foundations

### Color

| Role | Hex | Notes |
| --- | --- | --- |
| Canvas | `#0C0C0C`–`#111` | Page background |
| Text primary | `#FCFCFC` | Titles and body |
| Text secondary | `#858585`–`#9E9E9E` | TOC, meta |
| Links / accent | `#BFDBFE` / lighter blue | Inline anchors |
| Code chip fill | `#3A2A1A`–brown amber | `eval`, list literals |
| Code chip text | light amber | On chip |
| Search field | dark elevated | Top center pill |
| Borders | hairline dark gray | Section rules |

### Typography

| Use | Weight | Size / lh |
| --- | --- | --- |
| Article H1 | 400–500 | large display (~28–36 optical) |
| Body | 400 | 16px / 24–29.6 |
| H2 section | 400–500 | ~22–24px |
| Meta / TOC | 400 | 14px |
| UI chips | 400–500 | 12–14px |

Body is long-form; keep comfortable line length and 1.5-ish leading.

### Spacing and layout

- Content column with left sticky TOC
- Article padding ~32px; bottom padding large (~128px)
- Search centered in header; brand left; actions right
- Radii: 8–12px cards/controls; pills for some chips; soft stacked shadows on elevated bits (`y:4 blur:6`, `y:10 blur:15`)

## Visual language

- Editorial, not flashy
- Inline code as rounded rect chips, not monospace-only bare text
- Fact-check meta line under title with small icon
- Section dividers are subtle horizontal rules

## Components

### Header
Wordmark + version, center search, theme/suggest/edit utilities.

### TOC
Left list of section anchors in secondary gray.

### Article body
H1, paragraphs with blue links, amber code tokens, H2 blocks.

### Search (home/search routes)
Large empty field treatment consistent with dark Grok family.

## Practical guidance

**Do** protect long-form readability; keep blue for links only; use amber chips for code; preserve TOC + article split.

**Don’t** turn articles into card masonry; neon the body; collapse hierarchy into undifferentiated gray text.

## Scope note

Eight captures across `/`, `/search`, and article pages (Homoiconicity, Quine, Kowalski). Measured text roles on article pins. No declared fonts. Desktop-focused.

## Captured pages

[![Article — Homoiconicity](https://pin.fontofweb.com/9343?format=jpg)](https://design.withfudge.com/share/pin-9343)

[Article — Homoiconicity](https://design.withfudge.com/share/pin-9343)

[![Search](https://pin.fontofweb.com/9678?format=jpg)](https://design.withfudge.com/share/pin-9678)

[Search](https://design.withfudge.com/share/pin-9678)

[![Home](https://pin.fontofweb.com/9677?format=jpg)](https://design.withfudge.com/share/pin-9677)

[Home](https://design.withfudge.com/share/pin-9677)

[![Article — Kowalski](https://pin.fontofweb.com/9649?format=jpg)](https://design.withfudge.com/share/pin-9649)

[Article — Kowalski](https://design.withfudge.com/share/pin-9649)

## Colors

- `#0c0c0c`
- `#fcfcfc`
- `#bfdbfe`
- `#858585`
- `#9e9e9e`
- `#1a1a1a`
- `#ffffff`
