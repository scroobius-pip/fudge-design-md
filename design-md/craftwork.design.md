# How craftwork.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/craftwork.design-design)

Last updated: 2026-07-28

## Design character

Craftwork is a dark, premium design-asset marketplace: charcoal canvases, white and muted gray type, soft elevated cards, and a single electric **lime** CTA. Inspiration browsers show full-bleed site shots in a dim theater; Pro/marketing surfaces lean into testimonial walls and subscription unlock panels. The mood is pro-tool quiet with one neon commit button.

What should survive adaptation:

- Near-black charcoal UI field
- White primary type + gray secondary (`#ffffff` / `#a0a0a0`)
- **Lime/yellow-green** solid CTAs only for purchase/subscribe
- Rounded cards (~10–16px) with subtle borders/shadows on dark surfaces
- Gallery-first layout: large visual tiles, minimal chrome

## Foundations

### Color

Measured text roles on curated views:

- **Primary text**: `#ffffff`
- **Secondary text**: `#a0a0a0`

Visually consistent across Pro and newsletter surfaces:

- **Canvas**: deep charcoal / near-black (`#121212`–`#1a1a1a` range)
- **Elevated surface**: slightly lighter charcoal cards
- **Action**: saturated lime button (“Subscribe for 16$ / month”)
- **Accent moments**: small rainbow/illustration spots; gold stars on testimonials
- **Hairlines**: low-contrast 1px borders around cards and checklist boxes

Do not flood the UI with lime—reserve it for the economic action.

### Typography

Families not declared. Observed sans hierarchy on dark UI:

| Role | Size | Weight | Tracking |
|------|------|--------|----------|
| Section title | ~22px+ | 600 | slight negative |
| Card / body | 16px | 400 | default; lh ~24 |
| Secondary / meta | 14–18px | 400–500 | light negative on some 14–18 |
| Dense UI | 14px | 400 | lh ~20 |

Type stays clean and product-like—readable gray-on-charcoal, not display-poster scale on every page. Large marketing lines appear on unlock panels (“Keep exploring and start creating”).

### Spacing and layout

- Card internal padding often **15px** with **25px** bottom; page gutters ~45px horizontal on dense grids
- Curated sections use multi-column inspiration tiles with 1px framed shots
- Testimonial “Wall of Love” is a masonry-like stack of soft dark cards
- Radii: **10px** common, **15–16px** on larger panels, occasional pill ~33–54px
- Shadows are subtle (0–2px offsets, small blur)—depth without glass gloss

## Visual language

- **Dark theater** for browsing other sites’ designs; UI chrome recedes
- **Soft cards** for social proof and pricing checklists
- **Borders** on all four sides of many tiles (1px solid)
- **Imagery**: website screenshots, product previews; tiny playful icons (rainbow) as relief
- **CTA shape**: wide rounded rectangle, high-luminance fill, dark label text

## Components and states

1. **Inspiration browser** — grid/detail of captured sites, dim backdrop, white titles
2. **Subscribe unlock panel** — headline, benefit checklist in a bordered box, lime CTA, Paddle trust line
3. **Wall of Love** — star ratings, quote, name + role on charcoal cards
4. **Newsletter / marketing blocks** — same dark system, focused capture forms or promos
5. **Pro positioning** — feature storytelling on charcoal with product imagery

Populated gallery and checklist states are visible; hover/active micro-interactions are not specified here.

## Responsive behavior

Captures include narrow newsletter (~233–779px) and wider Pro/curated (~1000–1712px). On small widths, grids collapse toward single column; lime CTA remains full-width in unlock sections. Dark foundation and type roles hold across widths.

## Practical guidance

**Preserve**

- Charcoal field + white/gray type pair
- Lime as the sole high-energy action fill
- 10–16px radii and quiet elevation
- Screenshot-led browsing with minimal UI chrome

**Avoid**

- Light-mode default that breaks the premium asset-store feel
- Multiple competing accent colors on buttons
- Heavy skeuomorphic shadows or glassmorphism stacks
- Tiny low-contrast gray text on charcoal (keep secondary at `#a0a0a0` or lighter)

**Adaptation**

- Tokens: `bg`, `surface`, `text`, `text-muted`, `cta-lime`, `radius-md` (10–16px)
- Build gallery tile + testimonial card + subscribe panel as the core set

## Scope note

Pages studied: `/curated/sections`, `/newsletter`, `/pro` across several viewports. Measured colors cover primary/secondary text; lime and charcoal values are from visual reading. Font files/families were not identified. Motion and authenticated app chrome are outside this set.

## Captured pages

[![Curated sections — inspiration grid](https://pin.fontofweb.com/7386?format=jpg)](https://design.withfudge.com/share/pin-7386)

[Curated sections — inspiration grid](https://design.withfudge.com/share/pin-7386)

[![Curated — unlock CTA panel](https://pin.fontofweb.com/3960?format=jpg)](https://design.withfudge.com/share/pin-3960)

[Curated — unlock CTA panel](https://design.withfudge.com/share/pin-3960)

[![Pro — marketing wide](https://pin.fontofweb.com/1873?format=jpg)](https://design.withfudge.com/share/pin-1873)

[Pro — marketing wide](https://design.withfudge.com/share/pin-1873)

[![Pro — Wall of Love](https://pin.fontofweb.com/1874?format=jpg)](https://design.withfudge.com/share/pin-1874)

[Pro — Wall of Love](https://design.withfudge.com/share/pin-1874)

[![Newsletter](https://pin.fontofweb.com/2925?format=jpg)](https://design.withfudge.com/share/pin-2925)

[Newsletter](https://design.withfudge.com/share/pin-2925)

[![Pro — narrower](https://pin.fontofweb.com/1875?format=jpg)](https://design.withfudge.com/share/pin-1875)

[Pro — narrower](https://design.withfudge.com/share/pin-1875)

## Colors

- `#ffffff`
- `#a0a0a0`
