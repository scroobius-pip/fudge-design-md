# How accounts.theatlantic.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/accounts.theatlantic.com-design)

Last updated: 2026-07-28

## Design character

The Atlantic accounts/subscriptions surface is **editorial commerce**. A cream page, black top band, italic/serif campaign display, and two clean white plan cards sell journalism with magazine taste rather than startup growth UI. Photography of print objects and devices supports the offer without neon gimmicks.

What should survive adaptation:
- Cream canvas + black header band
- High-taste display headline (wide tracking / serif presence)
- White plan cards with solid near-black Select buttons
- Restrained red only where the brand already uses it for Subscribe

## Foundations

### Color

Measured:
- Black: `#000000` (header band, primary text/buttons)
- Warm gray text: `#6f6c69`
- White: `#ffffff` (cards, header bar top)
- Canvas cream/off-white (visual)
- Subscribe control reads as a dark red brick in the top bar (visual accent)

### Typography

- Campaign display large (**~45–62px** range observed) with generous line-height
- Section heads ~**32–36px**
- Card titles ~**24px**; body **16–20px**
- Weights mostly 300–500 — elegance over ultra-bold sales type
- Small legal **16px** light

### Spacing and layout

- Card and section padding **24–64px**; large bottom pads ~**80px**
- Two-up plan cards on desktop centered under hero
- Radii modest (~**4px**) — slightly rounded, not bubble UI
- Magazines/totes as right-side photography in the dark hero band

## Visual language

- Split hero: dark upper band + cream lower commerce
- Product photography (devices, issues, tote)
- Checkbox add-ons inside cards
- Payment mark row in muted gray
- Floating help chat affordance possible bottom-right

## Components and states

1. Logo + text nav + Subscribe pill  
2. Campaign hero headline + price teaser  
3. Plan cards (price, bullets, Select)  
4. What’s included sections below  
5. Legal/tax microcopy  

Select is a full-width dark rectangle; secondary actions stay quiet.

## Responsive behavior

Products and free-trial routes at wide desktop. Stack the two plan cards on small screens; keep the black band + cream page pairing.

## Practical guidance

**Preserve:** cream/black editorial commerce, serif campaign voice, simple plan cards.  
**Avoid:** neon SaaS pricing tables, huge mint accents, app-dashboard sidebars.

## Scope note

Two captures: `/products/` and `/products/free-trial/`. Colors and type sizes measured; exact serif family name not declared in the capture payload.

## Captured pages

[![The Atlantic Magazine & Digital Subscriptions - The Atlantic](https://pin.fontofweb.com/9224?format=jpg)](https://design.withfudge.com/share/pin-9224)

[The Atlantic Magazine & Digital Subscriptions - The Atlantic](https://design.withfudge.com/share/pin-9224)

[![The Atlantic](https://pin.fontofweb.com/9223?format=jpg)](https://design.withfudge.com/share/pin-9223)

[The Atlantic](https://design.withfudge.com/share/pin-9223)

## Colors

- `#000000`
- `#6f6c69`
- `#ffffff`
