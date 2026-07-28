# How dashboard.internetcomputer.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dashboard.internetcomputer.org-design)

Last updated: 2026-07-28

## Design character

The Internet Computer dashboard is a **network operations view**: home plus network subnets. Visually it leans **cool technical light-mode**—white surfaces, soft blue accents (`#66aeff`, `#9e9eff`), and muted gray text (`#a3a3a3`). It should feel like infrastructure observability: charts, status, and subnet structure—not a consumer marketing site.

What should survive adaptation:

- White canvas with **sky/periwinkle blue accents**.
- Gray secondary text for metrics meta.
- Network topology/subnet navigation as a first-class IA node.
- Data-forward panels and status readability.
- Calm, precise infra aesthetic (no playful fintech pastels).

## Foundations

### Color

| Value | Role |
| --- | --- |
| `#ffffff` | Surfaces |
| `#66aeff` | Primary accent blue |
| `#9e9eff` | Secondary violet-blue accent |
| `#a3a3a3` | Muted text/chrome |

### Typography

Families not declared. Use clear UI sans for metrics and navigation; prioritize numeral legibility in network stats.

### Spacing and layout

- `/` overview plus `/network/subnets` detail.
- Dashboard grids and tables with consistent panel padding.
- Four captures support multiple states/widths of these core routes.

## Visual language

- Light infra panels, blue highlights on interactive/selected network elements.
- Charts/status colors should stay subordinate to the blue/gray base.
- Motion not established.

## Components and states

### Network home
Overview metrics and entry into network structure.

### Subnets view
Structured list/detail of subnet information—scannable rows, clear labels.

## Responsive behavior

Four captures across the two routes; treat as desktop dashboard first. Collapse secondary panels before metric labels.

## Practical guidance

**Preserve**

1. White + `#66aeff` / `#9e9eff` + gray meta.
2. Subnets as a primary destination.
3. Observability density without clutter.
4. Cool technical tone.

**Avoid**

1. Warm consumer ecommerce styling.
2. Over-saturating every metric in different hues.
3. Unsupported font claims.

**Adaptation recipe**

- White ops canvas → cool blue accents → overview metrics → subnet tables.

## Scope note

Four captures on `/` and `/network/subnets`. Supported: accent palette and network IA. Gaps: fonts, full responsive matrix, auth pages, motion.

## Captured pages

[![Subnets - ICP Dashboard](https://pin.fontofweb.com/9061?format=jpg)](https://design.withfudge.com/share/pin-9061)

[Subnets - ICP Dashboard](https://design.withfudge.com/share/pin-9061)

[![ICP Dashboard](https://pin.fontofweb.com/9060?format=jpg)](https://design.withfudge.com/share/pin-9060)

[ICP Dashboard](https://design.withfudge.com/share/pin-9060)

[![ICP Dashboard](https://pin.fontofweb.com/9059?format=jpg)](https://design.withfudge.com/share/pin-9059)

[ICP Dashboard](https://design.withfudge.com/share/pin-9059)

[![ICP Dashboard](https://pin.fontofweb.com/9058?format=jpg)](https://design.withfudge.com/share/pin-9058)

[ICP Dashboard](https://design.withfudge.com/share/pin-9058)

## Colors

- `#66aeff`
- `#ffffff`
- `#a3a3a3`
- `#9e9eff`
