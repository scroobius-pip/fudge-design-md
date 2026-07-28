# How dash.cloudflare.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dash.cloudflare.com-design)

Last updated: 2026-07-28

## Design character

Cloudflare’s dashboard is a **dense enterprise operations console**: account-scoped routes for domains, billing, API tokens, and checkout. The visual system is **light, blue-accented, highly utilitarian**—built for scanning tables, forms, and multi-step account tasks rather than brand storytelling.

What should survive adaptation:

- **Blue primary accent** `#056dff` (with lighter `#4693ff` relatives) on white/`#ffffff` surfaces.
- Neutral supporting grays `#d9d9d9` / `#a1a1a1` for borders and secondary UI.
- Form-heavy flows (API token create, billing usage, payment, domain registration checkout/success).
- Clear account-context chrome and hierarchical navigation.
- Compact, trustworthy enterprise density.

## Foundations

### Color

| Role | Value | Notes |
| --- | --- | --- |
| Accent | `#056dff` | Primary actions/links |
| Accent light | `#4693ff` | Related blue emphasis |
| Surface | `#ffffff` | App canvas/cards |
| Neutral border/text support | `#d9d9d9`, `#a1a1a1` | Chrome separation |

### Typography

Families not declared. Expect dense UI sans at small-to-medium sizes for tables/forms; headings quieter than marketing sites.

### Spacing and layout

- Multi-route app shell with content panes for billing, domains, tokens, checkout.
- Forms and transactional pages (payment, registration success) share the same enterprise spacing discipline—consistent field groups, not landing-page hero padding.

## Visual language

- Light mode, flat/bordered panels, blue interactive accents.
- Functional imagery sparse; status and data matter more.
- Motion not established.

## Components and states

### App shell / domain overview
Account-scoped domain dashboard views.

### API token create
Multi-field privileged form—clarity and hierarchy over decoration.

### Billing / usage
Data-forward panels for billable usage.

### Checkout / payment / domain registration
Transactional steps including success state—keep reassurance and summary patterns.

## Responsive behavior

Eight desktop-class captures across flows; treat as wide-console UI. Narrow behavior not fully evidenced—collapse side nav before crushing form labels.

## Practical guidance

**Preserve**

1. White enterprise canvas + `#056dff` actions.
2. Gray border language for structure.
3. Form/table density appropriate to ops tools.
4. Consistent shell across billing and domain tasks.
5. Success/checkout as first-class calm states.

**Avoid**

1. Marketing-purple rebrand of the ops console.
2. Oversized display type in token/billing forms.
3. Inventing font licences.
4. Playful illustration noise on privileged flows.

**Adaptation recipe**

- Light shell → blue accent → bordered panels → dense forms/tables → transactional success.

## Scope note

Eight captures across domain overview, API tokens, billing usage, payment checkout, domain registration checkout/success. Supported: blue/gray/white console palette and multi-flow IA. Gaps: font family, mobile shell, motion.

## Captured pages

[![fontofweb.com | fontofweb.com | xxx@xxx.com's Account | Cloudflare](https://pin.fontofweb.com/10060?format=jpg)](https://design.withfudge.com/share/pin-10060)

[fontofweb.com | fontofweb.com | xxx@xxx.com's Account | Cloudflare](https://design.withfudge.com/share/pin-10060)

[![Domains | Registrations | xxx@xxx.com's Account | Cloudflare](https://pin.fontofweb.com/10039?format=jpg)](https://design.withfudge.com/share/pin-10039)

[Domains | Registrations | xxx@xxx.com's Account | Cloudflare](https://design.withfudge.com/share/pin-10039)

[![Domains | Registrations | xxx@xxx.com's Account | Cloudflare](https://pin.fontofweb.com/9843?format=jpg)](https://design.withfudge.com/share/pin-9843)

[Domains | Registrations | xxx@xxx.com's Account | Cloudflare](https://design.withfudge.com/share/pin-9843)

[![Domains | Registrations | Cloudflare](https://pin.fontofweb.com/9840?format=jpg)](https://design.withfudge.com/share/pin-9840)

[Domains | Registrations | Cloudflare](https://design.withfudge.com/share/pin-9840)

[![Domains | Registrations | Cloudflare](https://pin.fontofweb.com/9839?format=jpg)](https://design.withfudge.com/share/pin-9839)

[Domains | Registrations | Cloudflare](https://design.withfudge.com/share/pin-9839)

[![Billing | Billable usage | xxx@xxx.com's Account | Cloudflare](https://pin.fontofweb.com/9664?format=jpg)](https://design.withfudge.com/share/pin-9664)

[Billing | Billable usage | xxx@xxx.com's Account | Cloudflare](https://design.withfudge.com/share/pin-9664)

[![Account API tokens | Sim04ful@gmail.com's Account | Cloudflare](https://pin.fontofweb.com/9239?format=jpg)](https://design.withfudge.com/share/pin-9239)

[Account API tokens | Sim04ful@gmail.com's Account | Cloudflare](https://design.withfudge.com/share/pin-9239)

[![Account API tokens | Sim04ful@gmail.com's Account | Cloudflare](https://pin.fontofweb.com/9238?format=jpg)](https://design.withfudge.com/share/pin-9238)

[Account API tokens | Sim04ful@gmail.com's Account | Cloudflare](https://design.withfudge.com/share/pin-9238)

## Colors

- `#056dff`
- `#ffffff`
- `#d9d9d9`
- `#a1a1a1`
- `#4693ff`
