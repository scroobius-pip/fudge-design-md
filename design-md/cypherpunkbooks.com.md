# How cypherpunkbooks.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cypherpunkbooks.com-design)

Last updated: 2026-07-28

## Design character

The Cypherpunk Library is a **literary archive dressed as a quiet bookshop**: warm paper-like canvas, near-black olive text (`#1c1b12`), muted secondary taupe (`#6b6856`), and **book covers that cast real soft shadows**. Serif-leaning display titles sit large and calm; the UI never tries to look like a crypto exchange. Personality lives in the collection grid and long-form book pages, not in neon accents.

What should survive adaptation:

- **Warm neutral reading chrome** (ink on paper, not pure startup blue/white).
- **Cover-first browsing** with soft multi-layer shadows on book art.
- **Large serif-feeling display** (56–64px class) for collection and book titles.
- Generous side margins (~262px class on wide desktop) and **56px** content gutters.
- Sparse UI: 1px rules, small radii (2–7px), almost no loud CTAs.

## Foundations

### Color

| Role | Value | Use |
| --- | --- | --- |
| Primary text | `#1c1b12` | Titles and body ink |
| Secondary text | `#6b6856` | Meta, muted lines |
| Accent / inverse | `#ffffff` | Light accents on darker treatments |

Canvas reads as warm off-white/cream. Covers supply full-color art; chrome stays monochrome-warm.

### Typography

Declared families not retained; taxonomy marks **serif** for the system. Measured:

- Display **56–64px** weight 500, often 1.0 line-height.
- Section/card titles **19–22px** weight 500; body **16–19px** with open leading (~33px on 19px reading lines).
- UI meta **11–15px**; micro labels down to ~8.5–12px.
- Book pages favor long comfortable measures over marketing stack type.

### Spacing and layout

- Horizontal content pad **56px**; outer centering margins ~**262px** on 1712px frames.
- Large bottom padding ~**140px** on major shells.
- Collection grids: column-gap ~**28px**, row-gap ~**36px**; book layouts also use **72px** gaps in places.
- Home can use tighter **24px** gaps in denser rows.

## Visual language

- **Near-square corners** (2–7px) on chrome; covers get the elevation story.
- Shadows are intentional: soft cover lifts (e.g. 0/14/30, 0/26/56) plus hairline 0/1/1 contacts.
- 1px solid borders on filters/chips; flat page surfaces behind dimensional books.
- Motion not established.

## Components and states

### Collection index
Large page title, filter/UI chips, dense cover grid with title/meta under each book.

### Book page
Hero title (64px-class), secondary author/meta in taupe, long reading column, related covers with the same shadow language.

### Home library
Rows of covers with compact padding (6–16px) and multi-shadow stack for depth.

## Responsive behavior

Captures are mostly ~1455–1712px desktop. Side margins will collapse on smaller screens; keep cover shadows and warm ink pairing when narrowing.

## Practical guidance

**Preserve**

1. Warm ink `#1c1b12` / taupe `#6b6856` on paper canvas.
2. Cover shadows as the main “depth” device.
3. Large calm display titles; quiet UI chrome.
4. Wide reading margins on desktop.
5. Serif-leaning literary tone over SaaS sans shouting.

**Avoid**

1. Neon crypto gradients and glass dashboards.
2. Huge pill marketing CTAs dominating the archive.
3. Flat covers with no elevation—books should feel physical.
4. Inventing a named font licence from this guide.

**Adaptation recipe**

- Paper canvas + warm ink → cover grid with soft shadows → serif display titles → long book pages with taupe meta.

## Scope note

Six captures: home, collection (×2), and two book pages. Supported: warm palette, type scale, cover elevation, collection/book layout. Gaps: mobile, exact font family, motion.

## Captured pages

[![Collection grid](https://pin.fontofweb.com/9525?format=jpg)](https://design.withfudge.com/share/pin-9525)

[Collection grid](https://design.withfudge.com/share/pin-9525)

[![Book page — Cypherpunk's Manifesto](https://pin.fontofweb.com/9526?format=jpg)](https://design.withfudge.com/share/pin-9526)

[Book page — Cypherpunk's Manifesto](https://design.withfudge.com/share/pin-9526)

[![Home library](https://pin.fontofweb.com/9524?format=jpg)](https://design.withfudge.com/share/pin-9524)

[Home library](https://design.withfudge.com/share/pin-9524)

[![Home alternate](https://pin.fontofweb.com/9522?format=jpg)](https://design.withfudge.com/share/pin-9522)

[Home alternate](https://design.withfudge.com/share/pin-9522)

[![Book page narrow](https://pin.fontofweb.com/9527?format=jpg)](https://design.withfudge.com/share/pin-9527)

[Book page narrow](https://design.withfudge.com/share/pin-9527)

[![Collection dense](https://pin.fontofweb.com/9523?format=jpg)](https://design.withfudge.com/share/pin-9523)

[Collection dense](https://design.withfudge.com/share/pin-9523)

## Colors

- `#ffffff`
- `#1c1b12`
- `#6b6856`
