# How inceptionlabs.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/inceptionlabs.ai-design)

Last updated: 2026-07-28

## Design character

Inception Labs presents frontier LLM speed with a **cinematic dark site**: pure black stages, oversized white headlines, and an electric violet accent (`#7674ff`). Sections feel like research keynotes — sparse hero statements, then model/enterprise cards with soft luminous edges. The mood is serious and futuristic without clutter.

What should survive adaptation:
- Black void as the default stage
- Violet as the single chromatic accent
- Monumental white display type with short supporting lines
- Large rounded cards and pill CTAs

## Foundations

### Color

Measured:
- Accent: `#7674ff` (violet)
- Primary text: `#ffffff`

Visual system beyond measured roles:
- Page ground: near-pure black
- Secondary text: muted cool gray on black
- Card surfaces: elevated dark charcoal with subtle violet edge light
- Occasional soft purple/blue glow behind heroes and model art

### Typography

Family not declared; reads as a modern grotesque/display sans.
- Heroes: very large, weighty, tight leading
- Section titles: still large but secondary to heroes
- Body: medium size, short paragraphs, high line-height for calm reading on black
- UI labels and meta: smaller, wider tracking in nav and cards

### Spacing and layout

Spacing observations span **10–48px** common UI steps, with large section gaps **80–120px**.
- Wide desktop heroes with generous empty black field
- Content blocks centered; cards in simple 1–3 column rows
- Radii large: **~50–60px** on major rounded containers (soft “superellipse” product cards)

## Visual language

- Glow and blur around violet accents (light as brand material)
- Deep rounded rectangles rather than sharp enterprise boxes
- Minimal chrome: thin top nav, few icons
- Model pages lean on structured lists/cards rather than dense tables
- Photography/3D is secondary to type + glow

## Components and states

- Text-link nav + one primary pill CTA (“Get started” / contact patterns)
- Hero stack: eyebrow → massive title → one sentence → CTA row
- Feature/model cards: title, short blurb, optional badge
- Enterprise sections: calmer copy density, same dark shell
- Footer: low-contrast link columns on black

## Responsive behavior

Home, models, about, and enterprise were captured at multiple widths. The composition remains stacked marketing bands; cards wrap from multi-column to single column. Maintain the large type hierarchy when narrowing — do not densify into a dashboard.

## Practical guidance

**Preserve**
- One accent hue (violet) on black
- Huge type with lots of negative space
- Soft, oversized rounded cards

**Avoid**
- Rainbow AI gradients competing with violet
- Light gray page backgrounds
- Small, dense SaaS marketing grids

## Scope note

Pages studied: `/`, `/models`, `/about`, `/enterprise` (multiple viewports). Structured color roles are sparse (accent + white text); typography family undeclared. Treat glow and card materials as visual interpretation from screenshots.

## Captured pages

[![Our Models – Inception](https://pin.fontofweb.com/8042?format=jpg)](https://design.withfudge.com/share/pin-8042)

[Our Models – Inception](https://design.withfudge.com/share/pin-8042)

[![About – Inception](https://pin.fontofweb.com/7215?format=jpg)](https://design.withfudge.com/share/pin-7215)

[About – Inception](https://design.withfudge.com/share/pin-7215)

[![Enterprise – Inception](https://pin.fontofweb.com/7213?format=jpg)](https://design.withfudge.com/share/pin-7213)

[Enterprise – Inception](https://design.withfudge.com/share/pin-7213)

[![Inception – A new frontier in LLM speed](https://pin.fontofweb.com/7210?format=jpg)](https://design.withfudge.com/share/pin-7210)

[Inception – A new frontier in LLM speed](https://design.withfudge.com/share/pin-7210)

## Colors

- `#000000`
- `#ffffff`
- `#7674ff`
