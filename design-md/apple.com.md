# How apple.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/apple.com-design)

Last updated: 2026-07-30

## Pins

- **MacBook Pro family listing** — `/shop/buy-mac/macbook-pro` — product-family commerce view with a utility bar and product-led layout.
- **Configured MacBook Pro detail** — `/shop/buy-mac/macbook-pro/16-inch-space-black-nano-texture-display-apple-m5-max-chip-18-core-cpu-40-core-gpu-48gb-memory-4tb-storage` — configuration view with option groups, rules, and a focused content column.
- **Configuration strip** — same product-detail path — representative narrow section crop for spacing and control density.
- **Bag / checkout** — `/shop/bag` — populated commerce state with line items, totals, and supporting links.

## Design character

The captured Apple shop pages are quiet, light, and product-led. The interface keeps the visual field neutral and lets product information, large imagery, and a small number of actions carry emphasis. The strongest recurring qualities are centered content, generous horizontal margins on wide screens, fine rules, and a restrained neutral palette with blue reserved for interactive text.

Preserve the relationship between a broad, low-noise canvas and a narrower information column. The page should feel precise rather than decorative: hierarchy comes from scale, weight, alignment, and whitespace, not from many colors or heavy containers.

## Foundations

### Color

The raw captures record these modeled text colors:

- **Primary text:** `#1d1d1f`
- **Secondary text:** `#6e6e73`

The existing capture notes also identify `#0066cc` as the recurring blue accent and list `#86868b`, `#000000`, and `#ffffff` among observed palette values. The raw structured color-role evidence supports the first two roles most directly; use the remaining values as observed palette references, not as a complete semantic token map.

A useful reference grouping is `canvas: white`, `ink: #1d1d1f`, `muted: #6e6e73`, and `link/action: #0066cc`, with light neutral surfaces where the captured commerce panels require separation. The evidence supports a light, neutral, largely monochrome system; it does not establish a full state-color set.

### Typography

The captures record a single generic sans-serif direction, but no declared or captured family name. Do not label it SF Pro from these files alone.

Observed text-style values include:

- Body/readable text: weight 400, `17px / 25px`; another repeated body size is `14px / 20px`.
- Utility and compact text: weight 400, `12px / 16px`.
- Emphasis and headings: weight 600 at `17px / 21px`, `19.89px / 29.25px`, `25.5px / 37.5px`, and `32px / 36px`.
- Some captured styles omit line-height, so the values above should be treated as observed style pairs, not a complete type scale.

The hierarchy is built from a regular sans body, heavier display/heading weights, and deliberate size jumps. Keep text color near `#1d1d1f`, use `#6e6e73` for supporting copy, and maintain the generous line-height visible in the 17px and 14px styles.

### Spacing and layout

The captures are wide desktop section crops at `2048 × 1194px`. Repeated measurements show large centered margins of `516px` and `538px` on some sections, with `22px` horizontal padding in a narrower content region. Repeated vertical values include `9.6px`, `11px`, `13.6px`, and `17px` for margins and padding. Other captures record larger section spacing such as `30px`, `40px`, `48px`, `60px`, `70px`, and `76px`.

Treat these as context-specific measurements, not a universal spacing scale. The stable layout idea is a wide outer frame with a narrow, centered commerce column; dense controls and copy sit inside that column while product presentation can occupy more space.

## Visual language

The raw captures record solid neutral surfaces, a neutral/light taxonomy, 1px solid top and bottom borders, and no recorded shadows or gradients. Two captures record rounded geometry at `12px` and `18px`; another records `8px` corner evidence. These values support softly rounded commerce controls or tiles, but not one universal radius token.

Use hairline rules to divide utility, configuration, and summary regions. Keep elevation quiet: the available raw evidence does not establish a shadow system. Product imagery is part of the captured page context, but the raw structured media family is unsupported, so its crop, treatment, and responsive behavior should not be generalized beyond the pinned views.

## Components and states

The pinned captures support these recurring component patterns:

- **Global utility/header:** a compact top region with navigation and commerce utilities, separated by fine rules where recorded.
- **Product presentation:** a large product-led region paired with a focused title, price, and configuration or purchase content.
- **Option groups and tiles:** grouped choices in the configuration view, using clear hierarchy, rounded geometry in some captures, and neutral text with blue links/actions.
- **Commerce summary:** populated bag content with line items, supporting links, quantities or controls, and a visually prominent total/action area.
- **Footer/legal navigation:** dense supporting links appear in the existing guide’s scope, but detailed footer structure is not directly represented in the raw structured families.

The captured state evidence is strongest for populated product-detail and bag views. Empty, loading, error, hover, focus, disabled, and validation states are not established by these files and should be treated as open gaps rather than copied assumptions.

## Responsive behavior

The available captures are all wide desktop crops, so no mobile breakpoint or collapse rule is evidenced. The safe responsive principle is to retain the centered information hierarchy while allowing the outer margins and product region to contract. Exact breakpoint values, mobile navigation behavior, and small-screen stacking remain unknown from this capture set.

## Practical guidance

**Preserve** the neutral/light canvas, `#1d1d1f` and `#6e6e73` text relationship, blue interactive accent, 1px rules, centered commerce column, measured type jumps, and product-led emphasis.

**Avoid** treating the page as a dense marketplace grid, adding multiple competing accent colors, using heavy shadows as the primary grouping device, or asserting a named font family or mobile breakpoint that the captures do not provide.

## Evidence scope

Studied eight raw captures for `apple.com`, all focused on MacBook Pro listing/configuration and a populated bag, at `2048 × 1194px` section-crop dimensions. Exact font family names, full background/media/structure observations, and mobile or interaction-state behavior were not captured in the available raw evidence.

## Captured pages

[![MacBook Pro family listing](https://pin.fontofweb.com/9884?format=jpg)](https://design.withfudge.com/share/pin-9884)

[MacBook Pro family listing](https://design.withfudge.com/share/pin-9884)

[![Bag / checkout](https://pin.fontofweb.com/9886?format=jpg)](https://design.withfudge.com/share/pin-9886)

[Bag / checkout](https://design.withfudge.com/share/pin-9886)

[![Configured MacBook Pro detail](https://pin.fontofweb.com/9883?format=jpg)](https://design.withfudge.com/share/pin-9883)

[Configured MacBook Pro detail](https://design.withfudge.com/share/pin-9883)

[![Configuration strip](https://pin.fontofweb.com/9888?format=jpg)](https://design.withfudge.com/share/pin-9888)

[Configuration strip](https://design.withfudge.com/share/pin-9888)

## Colors

- `#1d1d1f`
- `#6e6e73`
- `#0066cc`
- `#000000`
- `#86868b`
- `#ffffff`
