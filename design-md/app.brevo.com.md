# How app.brevo.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.brevo.com-design)

Last updated: 2026-07-28

## Design character

Brevo’s app surfaces are a **professional marketing-automation console**: light gray shell, white content cards, purple brand accent (`#6358de`) for primary buttons and active states, and dense campaign/settings information architecture. It feels trustworthy and operational—built for lists, campaigns, and keys—not for cinematic product marketing.

What should survive adaptation:
- Light gray app background + white panels
- Purple primary actions (`#6358de`)
- Dark primary text (`#1b1b1b`) and muted secondary (`#696969`)
- Left navigation + listing tables + settings forms

## Foundations

### Color

Measured swatches seen across pages: `#6358de`, `#1b1b1b`, `#696969`. Keep purple scarce enough to mean “primary”; neutrals do the heavy lifting. Success/warning colors may appear in statuses but should not overwrite brand purple.

### Typography

Observed text styles:
- **text**: unknown, weight 400, 16px, lh 24px
- **text**: unknown, weight 400, 16px, lh 24px
- **text**: unknown, weight 400, 16px, lh 24px
- **text**: unknown, weight 400, 14px
- **text**: unknown, weight 400, 16px, lh 16px
- **text**: unknown, weight 400, 14px, lh 16px
- **text**: unknown, weight 400, 16px, lh 24px
- **text**: unknown, weight 400, 16px, lh 24px
- **text**: unknown, weight 400, 14px
- **text**: unknown, weight 400, 16px, lh 24px
- **text**: unknown, weight 400, 16px, lh 16px
- **text**: unknown, weight 400, 16px, lh 24px

Compact UI sans for nav and tables; clearer medium titles on page headers; smaller helper text in gray. Monospace can appear for API keys on settings routes.

### Spacing and layout

Recurring spacing measurements include 4px, 16px, 24px, 32px. App padding is regular; listings use row density suitable for inboxes/campaigns; settings pages use form widths narrower than full bleed. Observed corner radii include 8px, 12px, 16px, 20px, 32px.

## Visual language

Subtle card elevation, thin borders, purple filled buttons, quiet secondary outline buttons. Tables and empty states stay plain. Avoid illustrative heroes inside authenticated routes.

## Components and states

- Left sidebar navigation
- Top page headers with primary CTA (e.g., create campaign)
- Campaign listing rows/tables
- Billing/plan customization flows
- API keys settings panels
- Form inputs, toggles, and status chips

## Responsive behavior

Desktop captures (~1712–2048px). Collapse sidebar on smaller screens; keep tables scrollable; preserve purple primary CTAs in headers.

## Practical guidance

**Preserve** purple accent discipline, light console structure, listing density, readable dark text.  
**Avoid** consumer-portal yellows or dark neon skins that fight Brevo’s operational clarity.

## Scope note

Studied 6 page captures on paths /, /billing/account/plans/customize/starter, /campaigns/listing, /settings/keys/api. Some structural families were incomplete on these pages. Home/app entry, campaigns listing, API keys settings, and billing plan customization were studied.

## Captured pages

[![Campaigns - Brevo](https://pin.fontofweb.com/10111?format=jpg)](https://design.withfudge.com/share/pin-10111)

[Campaigns - Brevo](https://design.withfudge.com/share/pin-10111)

[![Hello Simdi - Brevo](https://pin.fontofweb.com/10059?format=jpg)](https://design.withfudge.com/share/pin-10059)

[Hello Simdi - Brevo](https://design.withfudge.com/share/pin-10059)

[![API keys & MCP - Brevo](https://pin.fontofweb.com/10058?format=jpg)](https://design.withfudge.com/share/pin-10058)

[API keys & MCP - Brevo](https://design.withfudge.com/share/pin-10058)

[![Customize Starter plan - Brevo](https://pin.fontofweb.com/5148?format=jpg)](https://design.withfudge.com/share/pin-5148)

[Customize Starter plan - Brevo](https://design.withfudge.com/share/pin-5148)

[![Customize Starter plan - Brevo](https://pin.fontofweb.com/5147?format=jpg)](https://design.withfudge.com/share/pin-5147)

[Customize Starter plan - Brevo](https://design.withfudge.com/share/pin-5147)

[![Customize Starter plan - Brevo](https://pin.fontofweb.com/5146?format=jpg)](https://design.withfudge.com/share/pin-5146)

[Customize Starter plan - Brevo](https://design.withfudge.com/share/pin-5146)

## Colors

- `#6358de`
- `#1b1b1b`
- `#696969`
