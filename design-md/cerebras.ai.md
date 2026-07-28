# How cerebras.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cerebras.ai-design)

Last updated: 2026-07-28

## Design character

Cerebras reads as **semiconductor-serious**: vast black fields, white sans type, almost no decorative chrome, and photography of silicon wafers, data centers, and people doing the emotional work. The UI is intentionally austere—filters, lists, and nav feel like a precise instrument panel rather than a startup landing template.

What should survive adaptation:

- **Monochrome first** (black/white/gray) with photography as the color source
- **Tiny radii** and hairline structure—industrial, not playful
- Sparse type hierarchy with calm body sizes
- Occasional **warm orange labels** for taxonomy (department names), not rainbow CTAs

## Foundations

### Color

| Use | Value | Notes |
|-----|-------|-------|
| Hero / chrome | `#000000` / near-black | Full-bleed dark regions |
| Content sheet | `#ffffff` | Jobs list panel, body sections |
| Primary text on light | near-black | Job titles |
| Secondary text | mid gray | Locations, meta |
| Accent labels | warm orange ~`#e85a2a` | Small caps department tags (FIELDML, SILICON) |
| Filter chips | dark gray raised controls | On charcoal header |

### Typography

Families not declared. Measured sizes:

- Section titles ~**36px** / 400
- Emphasis ~**20px** / 500
- Body ~**16px** / 400–500, ~24px line-height
- Micro labels ~**13px** / 600 (department tags)

Visually a clean grotesque/sans; careers list uses clear primary/secondary line pairs.

### Spacing and layout

- Common padding **48px** on major containers
- Tight control padding **8px** vertical / **20px** horizontal on chips
- Open positions: dark frame → white floating content panel with generous internal list spacing
- Filters sit top-right as compact dropdowns

## Visual language

- **Radius ~2px** on controls—essentially squared-off
- Separation via large value contrast (black frame / white sheet) more than shadow
- Photography is cinematic and desaturated-cool; UI never competes
- Borders minimal; list rows use spacing and light rules

## Components and states

1. **Marketing hero** — dark, photographic, minimal type
2. **Primary text links / buttons** — restrained, often white-on-black or inverse
3. **Filter dropdowns** — dark filled, small radius
4. **Jobs list** — department label (orange micro) → title → location meta → chevron
5. **Content panel** — white sheet inset on charcoal

Default/resting only in captures.

## Responsive behavior

Pair captures at ~**1000px** and ~**2000px** on company/build/join pages show the same structure compressing horizontally. The jobs sheet remains a centered white panel. No dedicated mobile set.

## Practical guidance

**Preserve**

- Black/white austerity + photo warmth
- Micro orange only for taxonomy labels
- Near-square controls
- Quiet density on lists

**Avoid**

- Soft big SaaS radii (16–24px everywhere)
- Purple/blue AI clichés
- Busy multi-card marketing grids that dilute the hardware gravity
- Loud gradients behind type

## Scope note

Eight captures: home, company, build-with-us, join-us, open-positions at wide and mid widths. Spacing/radius partial; color roles and families not declared—accent orange and neutrals from screenshots. Product console UI not included.

## Captured pages

[![Home — dark hardware hero](https://pin.fontofweb.com/9329?format=jpg)](https://design.withfudge.com/share/pin-9329)

[Home — dark hardware hero](https://design.withfudge.com/share/pin-9329)

[![Company — wide](https://pin.fontofweb.com/3197?format=jpg)](https://design.withfudge.com/share/pin-3197)

[Company — wide](https://design.withfudge.com/share/pin-3197)

[![Company — narrower](https://pin.fontofweb.com/3198?format=jpg)](https://design.withfudge.com/share/pin-3198)

[Company — narrower](https://design.withfudge.com/share/pin-3198)

[![Build with us](https://pin.fontofweb.com/3199?format=jpg)](https://design.withfudge.com/share/pin-3199)

[Build with us](https://design.withfudge.com/share/pin-3199)

[![Join us](https://pin.fontofweb.com/3201?format=jpg)](https://design.withfudge.com/share/pin-3201)

[Join us](https://design.withfudge.com/share/pin-3201)

[![Open positions list](https://pin.fontofweb.com/3203?format=jpg)](https://design.withfudge.com/share/pin-3203)

[Open positions list](https://design.withfudge.com/share/pin-3203)

## Colors

- `#000000`
- `#0d0d0d`
- `#ffffff`
- `#f5f5f5`
- `#e85a2a`
- `#6b6b6b`
