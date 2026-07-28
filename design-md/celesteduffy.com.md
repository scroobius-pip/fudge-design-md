# How celesteduffy.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/celesteduffy.com-design)

Last updated: 2026-07-28

## Design character

Celeste Duffy’s site is an **illustrator’s gallery that behaves like a quiet boutique**: warm off-white paper backgrounds, black serif display type, and a minimal navigation chrome so the artwork can dominate. Personality lives in the illustrations—bold characters, saturated scenes—while the shell stays editorial and restrained. A full-width **coral/orange commission band** is the one loud brand surface outside the art itself.

What should survive adaptation:

- **Paper-warm neutrals** instead of pure cold gray-white
- **Serif-forward display** for titles; simple sans or quiet UI for forms/nav
- **Art-first grids** where cards are mostly image
- One **high-chroma accent band** for conversion (commission/contact), not rainbow UI chrome

## Foundations

### Color

From screenshots (roles were not machine-labeled):

| Use | Approx. value | Notes |
|-----|---------------|-------|
| Page canvas | warm ivory `#f7f1e8` range | Slightly creamy, never pure #fff everywhere |
| Primary text | near-black brown-black `#1a120c` | Soft black, not pure blue-black |
| Commission band | vivid coral/orange ~`#e85d3b` | Full-bleed section with dark type |
| Form fields on coral | light peach/cream inputs | Low contrast fields on loud ground |
| Footer | deep brown/black bar | Anchors the page |
| Art | full spectrum inside images | Not part of UI tokens |

### Typography

Families not declared in capture data. Visual system:

- **Display / section titles:** large serif, ~35–64px, weight ~400, elegant editorial feel (“Would you like customization…”, portfolio titles)
- **Body:** ~14–16px, comfortable reading measure, weight 400
- **UI labels / nav:** smaller, simpler; forms use clear required labels
- Line-heights on display stay relatively tight (~1.05–1.15); body nearer 1.4–1.5

### Spacing and layout

- Horizontal padding often ~**69px** on home, ~**22–32px** on denser grids
- Vertical section padding ~**26–69px** depending on block
- Portfolio uses a multi-column image grid with modest gutters
- Commission section is a **two-column** split: serif story left, form right
- Margins between stacked text blocks ~**16–32px**

## Visual language

- Corners mostly **sharp or lightly softened** (~15px rare); the site is more editorial than “app rounded”
- Form controls on the coral band are **light filled rectangles** with minimal border
- Primary submit is a **dark filled rounded rectangle** (near-black) on coral—high contrast
- Imagery is the brand: character illustration, textured scenes, print mockups
- No heavy drop shadows on the marketing chrome; separation is color blocking (ivory / coral / near-black footer)

## Components and states

1. **Top nav** — wordmark + text links, minimal
2. **Masonry/grid gallery** — image tiles, little chrome
3. **Store cards** — product image + quiet price/meta
4. **Commission band** — loud coral, serif headline, multi-field form, checkbox groups, date field, dark submit
5. **Footer** — dark bar with newsletter or wordmark lockup

Interaction states beyond default were not captured.

## Responsive behavior

Captures are desktop-width (~1567–1712px) across home, prints, portfolio, licensing, and contact. The commission block’s two-column split is the main layout that would need stacking on small screens; no mobile captures were present.

## Practical guidance

**Preserve**

- Warm paper canvas + serif headlines + art-led grids
- Coral only as a deliberate full-bleed conversion surface
- Dark footer as a heavy base note
- Sparse UI chrome

**Avoid**

- Cold SaaS blues and purple gradients
- Heavy card shadows and glassmorphism over artwork
- Turning every section into a loud color block
- Over-labeling gallery images with badges and chips

## Scope note

Eight captures across `/`, `/prints`, `/portfolio`, `/licensing-1`, and `/contact`. Spacing and some borders measured; color roles and font families were not declared—palette above is from visual reading of screenshots. Mobile layouts not observed.

## Captured pages

[![Home — illustration hero grid](https://pin.fontofweb.com/7856?format=jpg)](https://design.withfudge.com/share/pin-7856)

[Home — illustration hero grid](https://design.withfudge.com/share/pin-7856)

[![Home — alternate scroll state](https://pin.fontofweb.com/7857?format=jpg)](https://design.withfudge.com/share/pin-7857)

[Home — alternate scroll state](https://design.withfudge.com/share/pin-7857)

[![Prints store](https://pin.fontofweb.com/7858?format=jpg)](https://design.withfudge.com/share/pin-7858)

[Prints store](https://design.withfudge.com/share/pin-7858)

[![Portfolio grid](https://pin.fontofweb.com/7860?format=jpg)](https://design.withfudge.com/share/pin-7860)

[Portfolio grid](https://design.withfudge.com/share/pin-7860)

[![Licensing / commission form](https://pin.fontofweb.com/7861?format=jpg)](https://design.withfudge.com/share/pin-7861)

[Licensing / commission form](https://design.withfudge.com/share/pin-7861)

[![Contact / about](https://pin.fontofweb.com/7862?format=jpg)](https://design.withfudge.com/share/pin-7862)

[Contact / about](https://design.withfudge.com/share/pin-7862)

## Colors

- `#f7f1e8`
- `#ffffff`
- `#1a120c`
- `#e85d3b`
- `#2b2118`
- `#f0e6d8`
