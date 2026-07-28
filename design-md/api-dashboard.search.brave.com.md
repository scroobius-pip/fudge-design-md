# How api-dashboard.search.brave.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/api-dashboard.search.brave.com-design)

Last updated: 2026-07-28

## Design character

Brave’s Search API dashboard is a **utilitarian developer console**: light gray application background, white content panels, left navigation, tables and key management, and soft lavender/blue accent chips. Brand personality is present but subordinated to clarity—keys, plans, and status must be obvious.

What should survive adaptation:
- Light app shell with white work surfaces
- Left nav + main content pattern
- Soft blue/lavender accents (`#b2c3ff`-range) rather than neon
- Dense tables and forms with calm borders (`#e4e4e5`, `#c9c9ca`)

## Foundations

### Color

Measured swatches seen across pages: `#b2c3ff`, `#e4e4e5`, `#909093`, `#c9c9ca`. Neutrals dominate; accents highlight selection, badges, and primary actions. Text is dark on white; secondary labels mute to mid gray (`#909093`).

### Typography

Observed text styles:
- **text**: unknown, weight 400, 14px, lh 22px
- **text**: unknown, weight 400, 20px
- **text**: unknown, weight 600, 12px, lh 18px
- **text**: unknown, weight 600, 22px, lh 28px
- **text**: unknown, weight 400, 12px, lh 18px
- **text**: unknown, weight 600, 14px, lh 22px
- **text**: unknown, weight 600, 12px, lh 20px
- **text**: unknown, weight 600, 12px, lh 20px
- **text**: unknown, weight 600, 12px, lh 18px
- **text**: unknown, weight 600, 12px, lh 18px
- **text**: unknown, weight 600, 12px, lh 18px
- **text**: unknown, weight 400, 14px, lh 22px

Compact UI sans for nav, tables, and forms. Page titles medium weight; cell text smaller; mono may appear for key strings. No marketing display serif inside the console.

### Spacing and layout

Recurring spacing measurements include 8px, 24px, 64px, 170px. Dashboard padding is regular; tables consume primary width; side nav is narrow and persistent on desktop. Observed corner radii include 10px, 12px, 16px, 24px, 1000px.

## Visual language

Hairline borders, modest radii, quiet chips, minimal shadow. Empty states should be instructional, not illustrative posters. Avoid heavy gradients in the app chrome.

## Components and states

- Left navigation (dashboard, keys, subscriptions, etc.)
- Top page title + primary actions (Create key, Subscribe)
- Data tables and key rows
- Plan/subscribe panels
- Verify-account and other status screens
- Form fields with calm focus rings

## Responsive behavior

Desktop captures (~1712px). On narrower widths collapse the left nav and keep tables horizontally scrollable rather than crushing columns into illegibility.

## Practical guidance

**Preserve** console clarity, soft accent chips, bordered white panels, table-first IA.  
**Avoid** marketing-hero theatrics inside authenticated tools; avoid dark neon that hurts long-form admin readability.

## Scope note

Studied 5 page captures on paths /app/dashboard, /app/keys, /app/subscriptions/subscribe, /verify-account. Some structural families were incomplete on these pages. Dashboard, keys, subscribe, and verify-account routes were studied.

## Captured pages

[![Brave Search - API](https://pin.fontofweb.com/9446?format=jpg)](https://design.withfudge.com/share/pin-9446)

[Brave Search - API](https://design.withfudge.com/share/pin-9446)

[![Brave Search - API](https://pin.fontofweb.com/9445?format=jpg)](https://design.withfudge.com/share/pin-9445)

[Brave Search - API](https://design.withfudge.com/share/pin-9445)

[![Brave Search - API](https://pin.fontofweb.com/9443?format=jpg)](https://design.withfudge.com/share/pin-9443)

[Brave Search - API](https://design.withfudge.com/share/pin-9443)

[![Brave Search - API](https://pin.fontofweb.com/9442?format=jpg)](https://design.withfudge.com/share/pin-9442)

[Brave Search - API](https://design.withfudge.com/share/pin-9442)

[![Brave Search - API](https://pin.fontofweb.com/9444?format=jpg)](https://design.withfudge.com/share/pin-9444)

[Brave Search - API](https://design.withfudge.com/share/pin-9444)

## Colors

- `#b2c3ff`
- `#e4e4e5`
- `#909093`
- `#c9c9ca`
