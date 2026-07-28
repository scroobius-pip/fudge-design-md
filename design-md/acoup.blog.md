# How acoup.blog is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/acoup.blog-design)

Last updated: 2026-07-28

## Design character

A Collection of Unmitigated Pedantry is a long-form history blog that dresses like a quiet museum gallery after hours. The interface is almost entirely **dark charcoal** with **dusty rose / mauve** accents, so the eye rests on serif article titles and archival imagery rather than on chrome. The site feels scholarly, slightly old-world, and deliberately slow: large type, long line lengths, and a two-column reading frame that never hurries the reader.

What should survive adaptation:

- A **near-monochrome dark canvas** with one soft pink accent for links and nav.
- **Serif display titles** that read like book chapter heads, paired with calm sans-like body text.
- **Hero imagery as scholarship**, not marketing—coins, reliefs, manuscripts full-bleed or large and centered.
- A **persistent right rail** for search, support, and recent posts that stays secondary to the article.

## Foundations

### Color

Measured roles and the screens make a tight palette:

| Role | Value | Use |
| --- | --- | --- |
| Page ground | deep charcoal / cool gray-violet (visually ~`#2f2f35`–`#3a3a42`) | Full page field |
| Primary text | `#ffffff` / light gray `#b5b5b5` | Titles read white-to-silver; body sits a step softer |
| Secondary text | `#b5b5b5` / `#939393` | Meta lines, sidebar copy, quieter UI |
| Accent / links | `#e8c3df` (dusty pink-lilac) | Nav links, in-text links, tag emphasis, Patreon callouts |
| Surfaces | white cards for CTAs and search | “Continue reading” buttons and search field punch as light islands |

There is no bright brand primary. Contrast comes from **light type on dark ground** and occasional **white UI chips**. Photography stays desaturated or monochrome so it never fights the mauve accent.

### Typography

Declared font families are not available in the captures, but the visual system is clear:

- **Display / article titles**: large transitional or old-style **serif**, light-to-regular weight, generous size (roughly mid-30s–upper-40s px on home cards; large chapter scale on articles). Titles wrap naturally over 2–4 lines.
- **Body**: ~16–19px with comfortable line-height (~1.7–1.75×; measured body around 18px / 31.5px). Weight 400 dominates; 700 appears sparingly for emphasis.
- **UI / meta**: smaller 15–17px lines for bylines, dates, comment counts, and sidebar labels.
- **Nav**: single-line horizontal menu in the accent color, sentence case, no heavy weights.

Hierarchy is title → deck/body → meta → sidebar. The serif title is the brand moment; everything else stays utilitarian.

### Spacing and layout

- **Content + sidebar**: main column left, narrow right rail (~search, support blurb, recent posts, tag cloud on longer views).
- Vertical rhythm is open: post cards stack with large gaps; “Continue reading” sits under a short excerpt, then meta icons.
- Measured spacing clusters around ~16–63px for component gaps, with larger section breaks.
- Corner radii stay modest (`~3px` on tight UI, up to ~`44px` on pill-like controls such as the theme toggle).
- 1px solid borders appear on framed media and light UI chrome.

## Visual language

- **Shape**: mostly rectangular media frames with slight rounding; white rectangular buttons with soft corners; circular sun/moon theme control bottom-left.
- **Borders / shadows**: thin 1px rules; shadows are not a defining device—depth comes from value contrast (white control on charcoal).
- **Imagery**: full-width header heroes (classical reliefs, coin close-ups) with centered white wordmark overlaid; in-article figures are large, bordered, documentary.
- **Motion**: not observed in still captures.
- **Density**: moderate—long reading measure, not a dashboard.

## Components and states

Recurring pieces across home and article:

1. **Masthead hero** — full-bleed archival image, centered title “A Collection of Unmitigated Pedantry” plus a one-line subtitle.
2. **Accent nav bar** — single row of text links on the dark field directly under the hero.
3. **Post card / teaser** — serif title, multi-line excerpt, white “Continue reading” button, icon meta row (author, category, comments, date, read time).
4. **Article header** — oversized serif title, meta row, long body copy with inline accent links (including roman-numeral series links).
5. **Sidebar stack** — white search field; short support copy with accent link; “Recent Posts” list; on denser views a weighted **tag cloud** in mixed sizes using the accent color.
6. **Theme control** — small circular control fixed toward the lower left.

Primary actions are quiet white buttons, not saturated fills. Links do the colorful work.

## Responsive behavior

Captures are wide desktop viewports (~1711×1314). The two-column article/sidebar split and full-bleed heroes are validated at that width only; narrower breakpoints were not in the set.

## Practical guidance

**Preserve**

- Dark museum field + single dusty-pink accent.
- Serif chapter titles and long-form body measure.
- Scholarly imagery treated as artifacts, not stock lifestyle.
- Sidebar as reference furniture, never competing with the essay.

**Avoid**

- Bright saturated primaries, heavy card shadows, or marketplace-style product grids.
- All-caps UI shouting or oversized marketing CTAs.
- Inventing a second accent; the system is intentionally limited.

**Adaptation tips**

- If you lighten the theme, keep the same hierarchy: serif display, soft accent links, restrained buttons.
- Keep tag clouds and meta icon rows secondary; the essay remains the product.

## Scope note

Studied three desktop captures: home (two similar states) and a long-form Collections article on Carthaginian armies. Font family names, exact background hex tokens, and mobile layouts were not declared in the available measurements—color roles and type sizes above mix measured values with direct screenshot reading.

## Captured pages

[![Home — relief hero and post feed](https://pin.fontofweb.com/9511?format=jpg)](https://design.withfudge.com/share/pin-9511)

[Home — relief hero and post feed](https://design.withfudge.com/share/pin-9511)

[![Home — coin hero variant](https://pin.fontofweb.com/9510?format=jpg)](https://design.withfudge.com/share/pin-9510)

[Home — coin hero variant](https://design.withfudge.com/share/pin-9510)

[![Article — Carthaginian armies series](https://pin.fontofweb.com/9512?format=jpg)](https://design.withfudge.com/share/pin-9512)

[Article — Carthaginian armies series](https://design.withfudge.com/share/pin-9512)

## Colors

- `#e8c3df`
- `#ffffff`
- `#b5b5b5`
- `#939393`
