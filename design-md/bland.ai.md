# How bland.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/bland.ai-design)

Last updated: 2026-07-28

## Design character

Bland’s marketing site is high-clarity enterprise SaaS: pure white fields, heavy black display headlines, thin navigation, and a single warm **amber/gold** action color for primary buttons (“Book a demo”, “Request a demo”). Trust is signaled with green checks and sober body copy, not playful illustration noise. Pricing and demo flows reuse the same light card language.

What should survive adaptation:

- **White canvas + near-black type** (`#151515`)
- **Amber/gold solid CTAs** as the only loud color
- **Green** reserved for success/trust marks (`#0f6435` family)
- **Card forms and pricing tiles** with 1px borders and small radii
- **Huge display claims** (48–64px) with short supporting lines

## Foundations

### Color

| Role | Hex | Use |
|------|-----|-----|
| Text primary | `#151515` | Headlines, body ink |
| Accent (warm) | `#d8441f` (role) / amber-gold buttons (visual) | Emphasis; primary buttons read as saturated gold/amber |
| Trust / secondary | `#0f6435` | Checks, positive meta |
| Surfaces | `#ffffff` | Cards, page |
| Promo bar | solid orange-red strip (visual) | Announcement banner |

Keep chroma limited: black/white + one warm CTA + green for positivity.

### Typography

- **Display**: 64px weight 600, lh 64 (hero); also 48px weight 300 for alternate large lines
- **Section heads**: 32px/35px weight 600; 24px weight 600
- **Body**: 16px / 22.4px regular (dominant)
- **UI / meta**: 14px regular or medium / 21px; micro labels 11px medium
- **Lead**: 20px / 29–30px

Tone is modern grotesque, slightly tight on large heads, highly legible in forms.

### Spacing and layout

- Large horizontal page padding (**80px**) and side margins (~388px on wide centered columns)
- Section padding often **96–120px** top and **48–80px** bottom
- Form pages: split layout — bold left headline + checklist, right bordered card form
- Pricing: card-heavy, moderate density

### Radii and borders

- Radii mostly **6px** (sometimes 4px); pill radii appear rarely
- 1px solid borders define cards and inputs
- Shadows largely unused — separation is border + spacing

## Visual language

- Light mode, flat surfaces, border-separated cards
- Minimal illustration; product truth via copy, logos, and UI forms
- Announcement bar as a full-width warm strip above the nav

## Components and states

1. **Announcement bar** + **marketing nav** (text links, ghost “Try for free”, solid gold “Book a demo”)
2. **Hero** with massive headline
3. **Logo wall** / social proof
4. **Demo form card** — labeled fields, radio groups, checkbox groups, full-width gold submit
5. **Pricing cards** and comparison modules
6. **Trust checklist** with green ticks

## Responsive behavior

Viewports from ~**1207–2048px** across `/`, `/pricing`, `/book-a-demo`. Wide pages keep split hero/form layouts; narrower widths should stack the form under the pitch while keeping 16px body and amber CTA semantics.

## Practical guidance

**Preserve**: white field, black display type, amber primary buttons, green trust only, bordered cards, large section padding.

**Avoid**: dark cyberpunk voice-AI clichés, purple gradients, icon salad, shadow-heavy glass cards, or multi-accent rainbow buttons.

## Scope note

Six captures across home, pricing, and book-a-demo. Color roles and spacing metrics were strong; declared font families were not present.

## Captured pages

[![Home — enterprise voice AI hero](https://pin.fontofweb.com/9665?format=jpg)](https://design.withfudge.com/share/pin-9665)

[Home — enterprise voice AI hero](https://design.withfudge.com/share/pin-9665)

[![Home — narrower marketing viewport](https://pin.fontofweb.com/9667?format=jpg)](https://design.withfudge.com/share/pin-9667)

[Home — narrower marketing viewport](https://design.withfudge.com/share/pin-9667)

[![Pricing](https://pin.fontofweb.com/9670?format=jpg)](https://design.withfudge.com/share/pin-9670)

[Pricing](https://design.withfudge.com/share/pin-9670)

[![Pricing — wide](https://pin.fontofweb.com/9669?format=jpg)](https://design.withfudge.com/share/pin-9669)

[Pricing — wide](https://design.withfudge.com/share/pin-9669)

[![Book a demo — split form](https://pin.fontofweb.com/9668?format=jpg)](https://design.withfudge.com/share/pin-9668)

[Book a demo — split form](https://design.withfudge.com/share/pin-9668)

[![Home — short viewport](https://pin.fontofweb.com/9666?format=jpg)](https://design.withfudge.com/share/pin-9666)

[Home — short viewport](https://design.withfudge.com/share/pin-9666)

## Colors

- `#151515`
- `#ffffff`
- `#d8441f`
- `#0f6435`
