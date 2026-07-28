# How coolors.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/coolors.co-design)

Last updated: 2026-07-28

## Design character

Coolors is a **color-first product UI** wrapped in a bright SaaS marketing shell. The product experience is full-bleed vertical palette columns with overlaid hex/name labels; the marketing site is white canvas, oversized black display type, soft multi-color gradient wordmarks, and a dense grid of rounded pastel feature cards. Chrome stays quiet so the palette itself is the hero.

What should survive adaptation:

- **Palette-as-interface**: full-height color columns, not small swatches in a sidebar
- **Near-black primary type** (`#0a0a0a`) on white marketing surfaces; **white type** on saturated palette columns
- **Soft 10–14px card radii** and generous 40px card padding on marketing grids
- **Multi-accent energy** (green, purple, cyan, blue, pink) used as feature chips and CTAs—not a single brand primary
- Clean thin top bars with logo wordmark + utility icons, never heavy chrome

## Foundations

### Color

Measured roles across home and palette editor captures:

| Role | Hex | Where it shows |
|------|-----|----------------|
| Text primary | `#0a0a0a` | Marketing headlines, nav, body |
| Text on color / inverse | `#ffffff` | Labels on palette columns; light secondary on dark UI |
| Muted secondary | `#525252` | Supporting copy, toolbar labels |
| Accent green | `#16a34a` | Positive / generate-adjacent accents |
| Accent purple | `#9333ea` | Feature highlights, chips |
| Accent cyan | `#0891b2` | Secondary accent |
| Accent blue | `#0066ff` | Primary link/CTA blue on marketing |
| Accent pink | `#ec4899` | Palette-tool accents |
| Accent gold | `#ca8a04` | Occasional highlight |

The palette *content* is intentionally unbounded—user colors fill the viewport (e.g. charcoal / steel / butter / lemon / coral columns). Marketing keeps a pure white field so those colors read as the product.

### Typography

Declared font families were not captured. Observed scale (weight/size/line-height):

- **Display / hero**: ~110px weight 700, tight leading (~99px), negative tracking (~−3.85) — marketing claims
- **Palette column type**: ~15px regular for hex/name stacks; occasional ~30px labels with slight positive tracking
- **Body / UI**: 15–18px regular; ~24px for section titles; 12–13px for dense meta
- Color Bot and tool surfaces stay at a tight 15/15 system for control density

Use a clean geometric sans; keep display type very large and tightly tracked on marketing, and monoline utilitarian sizes inside tools.

### Spacing and layout

- Marketing feature cards: **40px** padding on all sides; large **14px** corner radius (hundreds of instances)
- Section rhythm: **80–100px** vertical padding and bottom margins between major blocks
- Horizontal content breathing: ~100px side padding on wide marketing sections; ~102px side margins on some card rows
- Tool chrome: **10px** control padding; **4–7px** icon gaps; **20px** horizontal padding on toolbars
- Palette editor is edge-to-edge columns under a slim header—no content max-width cage

## Visual language

- **Shape**: cards ~10–14px radius; smaller controls 4–8px; Color Bot chips ~8px
- **Shadows**: almost none—occasional 0-offset 1px spread “border shadow” instead of soft elevation
- **Borders**: minimal; separation comes from color blocks and white gutters
- **Imagery**: product is the image—live palettes, gradient logo fills, soft pastel illustration tiles on marketing
- **Motion**: not established from stills

## Components and states

- **Top bar**: logo (gradient fill on “Coolors”), center tools (picker / image / create / export metaphors), right utilities (account, pro)
- **Palette stage**: 5 equal vertical strips; each shows hex, optional name, lock/copy affordances near bottom
- **Marketing card grid**: multi-column rounded tiles with soft tinted backgrounds, short titles, and small accent icons
- **Hero**: huge black headline with a multi-stop gradient on a key word (“palettes”)
- **Color Bot**: chat/tool panel with 15px dense type and small rounded chips
- Visible states beyond default (hover/focus/error) were not captured as distinct frames

## Responsive behavior

Captures are mostly wide desktop viewports (~1630–1712px). A shorter home crop (~1380×361) still keeps the oversized display type. No mobile breakpoint system was measured—treat the full-bleed column palette and card grid as desktop-first.

## Practical guidance

**Preserve**

- Full-bleed color columns as the core interaction surface
- White marketing canvas + multi-accent feature language
- Large, tight display type paired with quiet 15px UI type
- Soft 14px cards with roomy 40px padding
- Thin utility chrome that never competes with color

**Avoid**

- Boxing palettes into small swatch grids
- Heavy drop shadows or skeuomorphic toolbars
- A single rigid brand accent when the product sells color range
- Inventing a declared typeface stack—families were not recorded

## Scope note

Studied Coolors home (`/`), two Create a Palette URLs with distinct five-color sets, and Color Bot (`/color-bot`) across eight captures. Declared font families were unavailable; color roles come from measured UI chrome, while palette column fills are content-driven.

## Captured pages

[![Home — super fast palettes hero](https://pin.fontofweb.com/6391?format=jpg)](https://design.withfudge.com/share/pin-6391)

[Home — super fast palettes hero](https://design.withfudge.com/share/pin-6391)

[![Home — feature card grid](https://pin.fontofweb.com/6393?format=jpg)](https://design.withfudge.com/share/pin-6393)

[Home — feature card grid](https://design.withfudge.com/share/pin-6393)

[![Home — alternate marketing pass](https://pin.fontofweb.com/6392?format=jpg)](https://design.withfudge.com/share/pin-6392)

[Home — alternate marketing pass](https://design.withfudge.com/share/pin-6392)

[![Create a Palette — warm set](https://pin.fontofweb.com/6229?format=jpg)](https://design.withfudge.com/share/pin-6229)

[Create a Palette — warm set](https://design.withfudge.com/share/pin-6229)

[![Create a Palette — green set](https://pin.fontofweb.com/6228?format=jpg)](https://design.withfudge.com/share/pin-6228)

[Create a Palette — green set](https://design.withfudge.com/share/pin-6228)

[![Color Bot tool](https://pin.fontofweb.com/6905?format=jpg)](https://design.withfudge.com/share/pin-6905)

[Color Bot tool](https://design.withfudge.com/share/pin-6905)

## Colors

- `#0a0a0a`
- `#ffffff`
- `#525252`
- `#0066ff`
- `#16a34a`
- `#9333ea`
- `#0891b2`
- `#ec4899`
- `#ca8a04`
