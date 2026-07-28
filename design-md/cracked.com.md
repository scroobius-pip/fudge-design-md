# How cracked.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cracked.com-design)

Last updated: 2026-07-28

## Design character

Cracked is a loud, editorial humor portal: black masthead, bold white/yellow wordmark energy, dense multi-column content grids, and thumbnail-led story modules. It reads like a classic internet magazine—high contrast, heavy weights, and packed modules—not a minimal SaaS landing page. Humor is in the headlines; the chrome is utilitarian black, white, and accent red/yellow from the brand bar.

What should survive adaptation:

- Strong **black masthead** with category navigation
- **Bold, weighty headlines** (700–900) over lighter body
- Thumbnail + headline story cards in tight grids
- High content density; short module padding (~10–20px)
- Clear section labels for verticals (Movies & TV, etc.)

## Foundations

### Color

Measured role colors were not recorded. From the captured pages:

- **Masthead / chrome**: near-black bars and footers
- **Page field**: light/white content wells under the header
- **Type**: black headlines on light cards; white type on dark chrome
- **Accents**: brand yellow/red notes in logo lockups and occasional badges (visual)
- **Rules**: 1px solid horizontal dividers between modules

Keep the system high-contrast editorial—black chrome, light reading surface, restrained accent.

### Typography

No declared families. Observed scale:

| Role | Size | Weight | Line-height |
|------|------|--------|-------------|
| Section / feature head | ~30–36px | 700–900 | ~40px |
| Card headline | ~20–26px | 700–900 | ~26–32px |
| Deck / blurb | ~16–22px | 400 | ~28–32px |
| Nav / meta / bylines | 16px | 700 (nav) / 400 (meta) | tight ~16px on nav |

Headlines dominate: heavy weight, short lines, little decoration. Body stays 16px with comfortable ~28px leading in blurbs.

### Spacing and layout

- Module padding clusters at **10px / 20px**; horizontal card padding ~16px on category pages
- Desktop home uses a wide multi-column magazine grid with side margins ~280px on very wide captures
- 1px top borders repeat as list/module separators
- Category pages stack vertical lists of story rows (thumb + text)
- Density is intentionally high—little dead air between stories

## Visual language

- **Shape**: mostly squared-off cards and media thumbs; radii not a defining feature
- **Borders**: thin solid rules, not soft shadows
- **Imagery**: photographic and illustrated article thumbs; large feature art in heroes
- **Logo**: bold wordmark in the black header
- **Motion**: not established

## Components and states

1. **Global header** — black bar, Cracked wordmark, category links, utility icons
2. **Feature / river modules** — big story with image + heavy headline
3. **Story card** — thumbnail, bold title, short deck, meta
4. **Section index** (e.g. Movies & TV) — titled hub with stacked editorial rows
5. **Footer chrome** — dark utilitarian close

Interaction states (hover underline, etc.) are not reliable from stills—preserve structure and type weight instead.

## Responsive behavior

Two paths captured: wide home (~1712px) and narrower category (~800px). At 800px the layout collapses toward single-column story stacks with 16px side padding while keeping bold 20–30px heads. Treat as content-first responsive: grids drop columns before type radically changes.

## Practical guidance

**Preserve**

- Black masthead + dense editorial grid
- 700–900 headlines as the primary voice
- Thumbnail-led modules and thin rules
- High information density

**Avoid**

- Airy startup spacing that undermines the magazine feel
- Soft pastel cards or large rounded corners
- Replacing bold humor headlines with thin geometric display type
- Over-branding every card with extra accent colors

**Adaptation**

- Start from header + story card + section index patterns
- Type ramp: display 36 / card 22–26 / body 16
- Keep accent color scarce; let photography and headlines carry energy

## Scope note

Based on Cracked home and `/humor-movies-tv.html` captures. Font families and measured palettes were unavailable; color guidance is visual. Article long-form interiors, ads, and comment UI were not the focus of these captures.

## Captured pages

[![Home — magazine grid](https://pin.fontofweb.com/8241?format=jpg)](https://design.withfudge.com/share/pin-8241)

[Home — magazine grid](https://design.withfudge.com/share/pin-8241)

[![Movies & TV hub](https://pin.fontofweb.com/8242?format=jpg)](https://design.withfudge.com/share/pin-8242)

[Movies & TV hub](https://design.withfudge.com/share/pin-8242)
