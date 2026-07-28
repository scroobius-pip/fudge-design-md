# How accounts.x.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/accounts.x.ai-design)

Last updated: 2026-07-28

## Design character

accounts.x.ai is a **black account console** for Grok/xAI identity. The system is severe and modern: pure black page, charcoal elevated panels, white primary pills, and compact sans UI. It feels like a developer/account utility spun out of the same dark universe as the product — not a marketing site.

What should survive adaptation:
- True black canvas
- Charcoal list panels with subtle borders
- White filled pills for primary actions; dark outline pills for secondary
- Left utility nav + right content column

## Foundations

### Color

Measured:
- White: `#ffffff` (primary buttons, key text)
- Muted gray: `#acaaaa` (secondary copy)
- Surfaces: black page, slightly lifted charcoal cards
- Brand avatar accent may introduce a saturated disc (e.g. purple/blue avatar) without recoloring the whole shell

### Typography

- Welcome/display ~**24–30px** weights 400–500
- Section titles **16–20px** weight 500
- Row labels **14px**; meta **12–13px**
- Line-heights ~1.4–1.5 on UI stacks
- No declared family in captures; neutral geometric sans read

### Spacing and layout

- Panel padding **16–24px**; section gaps **40–48px**
- Grid/gap tokens ~**12px**
- Radii **12–16px** on panels and pills
- Desktop: left nav rail, right main column; mobile capture shows narrower single column account

## Visual language

- Flat dark panels, hairline separators between rows
- Pill buttons (Enable/Connect/Disable)
- Circular provider icons in sign-in method lists
- Minimal illustration; avatar badge as the only colorful mark
- Theme toggle (moon) as a small utility

## Components and states

1. Top bar with mark + theme  
2. Left account nav (Account, Security, Sessions, Data)  
3. Profile summary panel (name, email, subscription, created)  
4. Sign-in methods list with row actions  
5. OAuth device consent/done flows on related routes — same black system, centered cards  

Primary = white pill on black; secondary = dark pill with light label; destructive/disable stays quiet outline.

## Responsive behavior

Account and OAuth device routes at desktop and a narrow account capture (~461px). Collapse to a single column and keep panels full-width; do not introduce a light marketing layout.

## Practical guidance

**Preserve:** black field, charcoal panels, white pills, compact settings type.  
**Avoid:** white dashboard Material defaults, large hero marketing headers, colorful sidebar paints.

## Scope note

Seven captures across `/account` and OAuth device consent/done flows. Colors, radii, spacing, and type sizes measured; font family names not declared.

## Captured pages

[![Your SpaceXAI API Account | SpaceXAI Accounts](https://pin.fontofweb.com/10437?format=jpg)](https://design.withfudge.com/share/pin-10437)

[Your SpaceXAI API Account | SpaceXAI Accounts](https://design.withfudge.com/share/pin-10437)

[![Device Sign-in | Grok](https://pin.fontofweb.com/10204?format=jpg)](https://design.withfudge.com/share/pin-10204)

[Device Sign-in | Grok](https://design.withfudge.com/share/pin-10204)

[![Authorize — Grok | Grok](https://pin.fontofweb.com/10203?format=jpg)](https://design.withfudge.com/share/pin-10203)

[Authorize — Grok | Grok](https://design.withfudge.com/share/pin-10203)

[![Device Sign-in | Grok](https://pin.fontofweb.com/10202?format=jpg)](https://design.withfudge.com/share/pin-10202)

[Device Sign-in | Grok](https://design.withfudge.com/share/pin-10202)

## Colors

- `#ffffff`
- `#acaaaa`
