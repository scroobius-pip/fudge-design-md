# How app.base44.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.base44.com-design)

Last updated: 2026-07-28

## Design character

Base44’s captured experience is an **in-product builder paywall on a dark editor stage**: behind the scenes, a dimmed app chrome; front and center, a large white rounded pricing modal with an orange promotional banner, countdown, and four plan cards. The system is SaaS-familiar—soft shadows, peach discount pills, clear primary orange subscribe on the recommended plan—optimized for conversion without leaving the editor context.

What should survive adaptation:
- Dark editor backdrop vs bright modal sheet contrast
- Orange accent for urgency banner and primary subscribe
- Four-up plan cards with checklist features
- Clean UI sans and soft 12–16px radii

## Foundations

### Color

Measured swatches seen across pages: `#2563eb`, `#09090b`, `#6b7280`, `#4b5563`, `#94a3b8`. Measured blues/grays (`#2563eb`, `#09090b`, `#6b7280`, `#4b5563`, `#94a3b8`) appear in UI chrome; the pricing story visually adds orange/peach accents for sale state. Black/zinc dark editor (`#09090b`) frames the white modal.

### Typography

Observed text styles:
- **text**: unknown, weight 400, 14px, lh 24px
- **text**: unknown, weight 400, 14px, lh 20px
- **text**: unknown, weight 400, 16px, lh 24px
- **text**: unknown, weight 400, 16px, lh 24px
- **text**: unknown, weight 400, 12px, lh 16px
- **text**: unknown, weight 500, 12px, lh 18px
- **text**: unknown, weight 400, 12px, lh 16px
- **text**: unknown, weight 400, 12px, lh 16px
- **text**: unknown, weight 400, 16px, lh 24px
- **text**: unknown, weight 500, 14px, lh 20px
- **text**: unknown, weight 400, 16px, lh 24px
- **text**: unknown, weight 400, 16px, lh 24px

Modal title centered and bold; plan names medium; prices large with struck old prices; feature lists small with check icons. UI sans throughout—no editorial serif inside the builder paywall.

### Spacing and layout

Recurring spacing measurements include 4px, 7px, 8px, 12px, 14px, 16px, 24px, 28px. Modal is centered with internal grid of plan cards; banner spans full modal width; trust logos row beneath. Observed corner radii include 2px, 4px, 6px, 8px, 10px, 12px, 20px, 26px, 9999px.

## Visual language

Soft modal shadow, light card borders, pill badges (“30% off”), solid orange primary button vs outline secondary plan buttons. Countdown timer reads as functional urgency, not gamification confetti.

## Components and states

- Dimmed editor chrome (sidebar/canvas hints)
- Promo banner with countdown
- Plan cards: name, price, credits, CTA, feature checklist
- Highlighted recommended plan (solid CTA)
- Compliance/trust badge row
- Close control on the modal

## Responsive behavior

Wide editor captures (~2048px). On smaller widths, plan cards should stack vertically inside a scrollable sheet while the orange banner remains sticky at the top of the modal.

## Practical guidance

**Preserve** modal-on-dark-editor pattern, orange sale accent, checklist plan comparison clarity.  
**Avoid** restyling plans as dark cards that blend into the editor; avoid extra novelty illustrations inside the paywall.

## Scope note

Studied 3 page captures on paths /apps/69a0c0c2e9e84046e13cb675/editor/preview. Some structural families were incomplete on these pages. All captures share the editor/preview route focused on the pricing modal state.

## Captured pages

[![Curated | Base44](https://pin.fontofweb.com/7412?format=jpg)](https://design.withfudge.com/share/pin-7412)

[Curated | Base44](https://design.withfudge.com/share/pin-7412)

[![Curated | Base44](https://pin.fontofweb.com/7411?format=jpg)](https://design.withfudge.com/share/pin-7411)

[Curated | Base44](https://design.withfudge.com/share/pin-7411)

[![untitled | Base44](https://pin.fontofweb.com/7410?format=jpg)](https://design.withfudge.com/share/pin-7410)

[untitled | Base44](https://design.withfudge.com/share/pin-7410)

## Colors

- `#2563eb`
- `#09090b`
- `#6b7280`
- `#4b5563`
- `#94a3b8`
