# How dashboard.exa.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dashboard.exa.ai-design)

Last updated: 2026-07-28

## Design character

Exa’s dashboard is a **compact AI-search developer console**: home plus API keys. It feels like a modern AI infra app—**blue-forward accents**, dark text on light gray scale, and focused utility pages rather than a sprawling enterprise suite.

What should survive adaptation:

- Strong blue accents (`#1f40ed`, `#0972d5`) against near-black text `#111827` / `#000000`.
- Secondary gray text `#6b7280` / `#737373` for meta.
- Tight scope: **home overview + API keys** as core surfaces.
- Developer-trust clarity—keys and home status without marketing clutter.
- Compact SaaS radii and form controls typical of API dashboards.

## Foundations

### Color

| Role-ish value | Hex |
| --- | --- |
| Primary blue | `#1f40ed` |
| Link/action blue | `#0972d5` |
| Primary text | `#111827` / `#000000` |
| Secondary text | `#6b7280` / `#737373` |

### Typography

Families not declared. UI-focused sizes for keys tables and home labels; keep readable 14–16px-class body patterns common to API consoles.

### Spacing and layout

- Two-page product set: `/home` and `/api-keys`.
- Likely left nav or top product nav with a single content column.
- Forms and key lists need consistent vertical rhythm over hero padding.

## Visual language

- Light mode, blue interactive accents, gray supporting text.
- Minimal illustration; functional tables/buttons dominate.
- Motion not established.

## Components and states

### Home
Account/product overview and entry into tools.

### API keys
List/create/revoke patterns—high clarity, destructive actions secondary.

## Responsive behavior

Two captures; widths not a full breakpoint matrix. Keep keys table horizontally scrollable rather than crushing columns on narrow screens.

## Practical guidance

**Preserve**

1. Blue accent pair + slate text system.
2. Home/keys as the spine of the product UI.
3. Developer clarity over lifestyle branding.
4. Secondary gray for non-essential meta.

**Avoid**

1. Rainbow AI gradients in the console chrome.
2. Hiding API keys behind overly playful UI.
3. Font licence invention.

**Adaptation recipe**

- Light console → blue actions → slate type → home summary → keys table.

## Scope note

Two captures: `/home`, `/api-keys`. Supported: blue/slate palette and core IA. Gaps: billing, multi-width responsive rules, fonts, motion.

## Captured pages

[![Home | Exa API](https://pin.fontofweb.com/9452?format=jpg)](https://design.withfudge.com/share/pin-9452)

[Home | Exa API](https://design.withfudge.com/share/pin-9452)

[![API Keys | Exa API](https://pin.fontofweb.com/9451?format=jpg)](https://design.withfudge.com/share/pin-9451)

[API Keys | Exa API](https://design.withfudge.com/share/pin-9451)

## Colors

- `#1f40ed`
- `#111827`
- `#6b7280`
- `#0972d5`
- `#000000`
- `#737373`
