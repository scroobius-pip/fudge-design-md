# How designwithvibbbes.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/designwithvibbbes.com-design)

Last updated: 2026-07-28

## Design character

designwithvibbbes.com (Vibbbes) is an **AI design-system product site** that sells with soft light, glassy cards, and a floating pill chrome. Marketing surfaces flip between a deep navy/indigo void and a pale lavender wash; product and pricing UI sits on frosted white cards with pastel gradient fills. The brand mark is a small flower glyph plus uppercase **VIBBBES** wordmark. Personality is modern SaaS-meets-design-tool: calm, premium, slightly playful through orange/green CTA accents—not loud neon.

What should survive adaptation:

- **Floating capsule navigation** centered over the hero, separate from the page edge
- **Frosted pricing/FAQ cards** with soft multi-stop pastel fills on a light field
- **Dark navy primary actions** paired with a **hot orange lifetime CTA** and a **green best-value** callout
- **Generous section air** and large display pricing type, not dense admin UI
- A **footer brand wash** ending in a huge translucent wordmark

## Foundations

### Color

Measured roles and palette:

| Role / swatch | Hex | Where it shows up |
| --- | --- | --- |
| Text primary (light UI) | `#374151` | Body copy, FAQ questions, card titles on light surfaces |
| Text secondary | `#6b7280` | Supporting lines, muted labels |
| Text on dark / inverse | `#ffffff` | Hero titles, nav links, dark-footer copy |
| Accent (soft blue-lilac) | `#c8d0ff` | Accent read on marketing surfaces |

Visual reading from screenshots (not all measured as roles):

- Page canvas shifts from **near-black / deep indigo** (footer, some docs chrome) to **soft white–lavender** (pricing body)
- Hero/header wash: **blue–violet radial/linear glow** behind white display type
- Pro card: cool **lavender–white glass**; Lifetime card: warmer **peach–cream glass**
- Lifetime primary button: saturated **orange**; Best Value pack: **bright green** fill and green outline
- Monthly/default subscribe: **near-black navy pill**
- Pill nav shell: translucent **dark navy glass** over the gradient

Keep the system limited: neutrals for type, one cool lilac accent, then orange/green only for conversion emphasis. Do not invent a full Material-style semantic token set beyond what is observed.

### Typography

Font family names were not captured—treat the stack as a clean **single-family sans**. Observed sizes and weights that shape hierarchy:

| Use | Size / weight / line-height | Notes |
| --- | --- | --- |
| Giant brand / display (home) | ~127px / 300, lh ~190px; also ~68px / 500, lh 85px | Oversized wordmark energy in hero/footer |
| Pricing H1 | 40px / 700, lh 48px | “Simple, Transparent Pricing” |
| Section / card titles | 30px / 700, lh 36px; 24px / 700, lh 32px | Plan names, FAQ heading |
| Body | 16px / 400, lh 24px (dominant) | Default reading size across pricing and docs |
| UI / meta | 14px / 400–600, lh 20px; 12px / 400–700 | Feature lists, badges, fine print |
| Nav / labels | 14–16px medium | Pill nav links |

Weights in play: 300 (display), 400 body, 500–600 UI emphasis, 700 headings. Tracking looks slightly tight on large display titles; body is open and readable. No serif pairing observed.

### Spacing and layout

Recurring measurements:

- Horizontal page padding clusters at **32px** and **24px**; content inset often **20px** inside cards
- Wide layouts show large side margins (~**152–252px**), implying a **centered content column** rather than full-bleed grids
- Section padding is bold: **112–128px** top on some docs/marketing blocks, **56–80px** bottom, **32px** card padding
- Stack gaps: **16px** and **32px** between blocks; tight **4–6px** inside compact UI rows
- Pricing hero uses a **two-up plan card row**, then a **three-up credit pack row** under a secondary heading
- Docs captures show card grids with **~20px** internal padding and **10px** corner radius

Rhythm is marketing-first: big vertical breath between sections, then denser lists inside cards.

## Visual language

- **Radii:** 4–6px (chips/small controls), **8–10px** (default cards—very frequent at 10px), **12px** and **20px** on larger marketing tiles, **9999px** full pills for nav shell and primary buttons
- **Borders:** mostly **1px solid** around cards; marketing tiles also use **2px dashed** borders in home captures; FAQ uses hairline row dividers
- **Shadows:** soft ambient stacks—e.g. `0 5 10`, `0 15 30`, `0 20 40`, plus subtle `0 2 8` / `0 4 12` and near-zero blur hairlines for elevation without harsh drop shadows
- **Surfaces:** frosted glass / soft gradient fills inside cards; solid dark footer with gradient light leak and oversized ghost wordmark
- **Imagery:** product is mostly UI chrome and abstract gradients—no heavy photography in these captures
- **Iconography:** circular check marks in blue (Pro) vs amber/orange (Lifetime); small flower logo mark

The overall effect is **soft depth + pill geometry**: nothing sharp-edged or industrial.

## Components and states

**Floating pill nav**  
Centered capsule with left links (Explore / Pricing / MCP), centered logo, right Sign In + filled Get Started. Sits above the gradient, not glued to the viewport edge.

**Pricing plan cards**  
Two large equal cards: title, billing toggle or badge, oversized price, short descriptor, checklist, full-width pill CTA. Lifetime card carries a “100 Seats Left” orange pill badge and warmer fill so it reads as the push offer.

**Credit packs**  
Three smaller white cards; middle “Builder Pack” uses green outline + green solid CTA + “Best Value” pill—clear hierarchical emphasis without changing card size.

**FAQ accordion**  
Single rounded panel, light frosted fill, stacked questions with chevrons; expanded answer in secondary gray body text and row dividers.

**Docs cards**  
Bordered ~10px-radius tiles with title + body; denser than marketing but still airy.

**Primary buttons**  
Full-pill shapes: navy filled (default), orange filled (lifetime), green filled (best value), white/soft filled secondary “Buy Now”.

Visible state cues in stills: selected billing toggle (Monthly pill vs Annual text link with green “Save” label), badge callouts, expanded FAQ row. Do not invent hover/focus motion beyond what stills show.

## Responsive behavior

- Desktop pricing: two large plans side-by-side, three packs below
- Narrower capture (~768px) still centers the same card language (FAQ stack), suggesting cards **collapse to a single column** while keeping radius, type, and frosted fills
- Nav remains a compact pill; at narrow widths expect link compression or overflow rather than a heavy left drawer (not fully evidenced—treat as inference from marketing pattern)

## Practical guidance

**Preserve**

1. Floating glass pill nav + gradient hero wash behind white display type  
2. Frosted multi-stop card fills (cool vs warm) to rank offers  
3. One dark primary CTA, one orange “premium/lifetime” CTA, green only for “best value”  
4. 10px-ish card corners and full-pill buttons—mixed radius scale is intentional  
5. 16/24 body type and large 30–40px section titles  
6. Huge translucent brand wordmark as footer theater  

**Avoid**

1. Flat pure-white enterprise cards with hard 2px gray borders and no gradient air  
2. Turning orange/green into a rainbow of status colors  
3. Dense data-table pricing—this brand sells with air and hierarchy, not spreadsheets  
4. Square buttons or tiny 2px radii on primary actions  
5. Claiming specific font licences or family names without separate verification  

## Evidence scope

Studied captures: home (`/`, pins 7189/7188), docs (`/docs`, 7192/7191/7190), pricing desktop and narrow (`/pricing`, 7193/7194). Seven captures total. Font families, full background token names, and interaction motion were not available—color roles and type sizes above are the reliable foundation; gradient/canvas descriptions lean on screenshot reading.

## Captured pages

[![Home footer — brand wash and link columns](https://pin.fontofweb.com/7189?format=jpg)](https://design.withfudge.com/share/pin-7189)

[Home footer — brand wash and link columns](https://design.withfudge.com/share/pin-7189)

[![Pricing — dual plans and credit packs](https://pin.fontofweb.com/7193?format=jpg)](https://design.withfudge.com/share/pin-7193)

[Pricing — dual plans and credit packs](https://design.withfudge.com/share/pin-7193)

[![Docs — bordered content cards](https://pin.fontofweb.com/7192?format=jpg)](https://design.withfudge.com/share/pin-7192)

[Docs — bordered content cards](https://design.withfudge.com/share/pin-7192)

[![Pricing FAQ accordion](https://pin.fontofweb.com/7194?format=jpg)](https://design.withfudge.com/share/pin-7194)

[Pricing FAQ accordion](https://design.withfudge.com/share/pin-7194)

## Colors

- `#374151`
- `#6b7280`
- `#ffffff`
- `#c8d0ff`
