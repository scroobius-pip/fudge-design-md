# How bfl.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/bfl.ai-design)

Last updated: 2026-07-28

## Design character

Black Forest Labs presents frontier image models with the restraint of a research studio and the drama of a cinema still. The canvas is almost black (`#000000` / deep forest green-black around `#07130e`), full-bleed photographic or painterly nature textures fill the frame, and typography does most of the branding work: huge, tight white display lines, then calm mid-weight body copy in soft gray-white.

What should survive adaptation:

- **Dark field + luminous type** as the primary brand pairing
- **Full-bleed atmospheric imagery** behind sparse UI chrome
- **Oversized, slightly condensed display headlines** with short supporting lines
- **Soft white surface cards** floating over the dark field for product modes
- **Quiet, low-chroma CTAs** (lavender/gray pills) rather than neon accents

## Foundations

### Color

Measured / role colors:

| Role | Hex | Notes |
|------|-----|-------|
| Canvas / accent dark | `#000000`, `#07130e` | Near-black forest base |
| Primary text | `#ffffff` | Headlines and nav on dark |
| Secondary text | soft gray-white (visual) | Body on dark panels |
| Card surface | near-white / off-white | Mode cards (API, Open Weights, Enterprise) |
| CTA fill | muted lavender-gray | “Contact Sales”, secondary actions |
| Nav / utility | white text, minimal chrome | Logo left, links right |

The system is essentially monochrome-dark with one soft secondary fill. Color does not shout; imagery and type hierarchy carry emotion.

### Typography

Declared font families were not captured; the visual system reads as a clean grotesque / neo-grotesque stack.

Observed hierarchy (approx.):

- **Display**: ~59–91px, weight 500, tight leading (sometimes slightly tighter than the size) — hero lines like “The home of world-class…”
- **Section display**: ~30px medium/regular for “Built to fit. Ready to run.”
- **Body**: 16px / 24px at weight 500 — nav and primary reading size
- **Supporting**: ~15–18px medium; secondary body ~17–23px regular
- **Tracking**: large display often slightly negative (~−2.5% to −5%)

Tone: confident, technical, unornamented. Avoid playful display faces or heavy slab serifs.

### Spacing and layout

- Recurring **28px** padding on dense blocks; **16px** on tighter groups
- **48px** vertical rhythm between larger stacks; horizontal inset around **40px** on some bands
- Layout pattern: full-bleed hero → sparse nav → stacked narrative sections → **right-aligned card stack** over imagery for product modes
- Density is intentionally **sparse**: large empty dark field, few competing modules

## Visual language

- **Shape**: small radii (~4px) on buttons/chips; cards feel softly rounded but not bubbly
- **Borders**: 1px solid hairlines on card edges
- **Shadows**: largely absent; depth comes from layered imagery and card opacity
- **Imagery**: monochrome or desaturated forest/nature photography used as environment, not decoration stickers
- **Motion**: not established from still captures

## Components and states

Recurring pieces:

1. **Top nav** — wordmark left; text links (Models, Pricing, Company, Blog, Docs, Careers); small utility actions right
2. **Hero band** — multi-line oversized headline, short subtitle, minimal primary actions
3. **Mode cards** — white sheets listing API / Open Weights / Enterprise with short copy and a single muted button
4. **Text-forward sections** — left copy column, right visual or empty field
5. **Footer / utility** — still quiet; no loud multi-column marketing footer in the hero views

Buttons stay low-contrast on purpose: the product story is the models and the photography, not a yellow “Sign up” brick.

## Responsive behavior

Captures span roughly **1464–1712px** wide viewports at varying heights. The composition stays desktop-marketing: full-bleed imagery and large type. Narrower mobile stacking was not observed in this set—do not invent a mobile system beyond “collapse cards under copy and reduce display size.”

## Practical guidance

**Preserve**

- Near-black canvas with white type
- Huge, calm display headlines with short subcopy
- Soft white cards for product tiers/modes
- Atmospheric full-bleed photography
- Restrained CTA color (no neon green/blue defaults)

**Avoid**

- Bright SaaS purple gradients or glassmorphism for its own sake
- Dense feature grids fighting the hero photography
- High-chroma primary buttons that break the lab mood
- Inventing a loud multi-color illustration system

## Scope note

Studied eight homepage viewport captures of `bfl.ai` (paths `/` only) across widths ~1464–1712px. Structured color roles and text metrics were partial; palette roles and visual reading of screenshots informed the dark/light relationships. No declared font family names were available.

## Captured pages

[![Home hero — oversized type on dark forest field](https://pin.fontofweb.com/6151?format=jpg)](https://design.withfudge.com/share/pin-6151)

[Home hero — oversized type on dark forest field](https://design.withfudge.com/share/pin-6151)

[![Home — deeper scroll with product storytelling](https://pin.fontofweb.com/6144?format=jpg)](https://design.withfudge.com/share/pin-6144)

[Home — deeper scroll with product storytelling](https://design.withfudge.com/share/pin-6144)

[![Mode cards — API / Open Weights / Enterprise](https://pin.fontofweb.com/6148?format=jpg)](https://design.withfudge.com/share/pin-6148)

[Mode cards — API / Open Weights / Enterprise](https://design.withfudge.com/share/pin-6148)

[![Wide short viewport — compressed hero](https://pin.fontofweb.com/6146?format=jpg)](https://design.withfudge.com/share/pin-6146)

[Wide short viewport — compressed hero](https://design.withfudge.com/share/pin-6146)

[![Alternate crop — mid-page narrative](https://pin.fontofweb.com/6150?format=jpg)](https://design.withfudge.com/share/pin-6150)

[Alternate crop — mid-page narrative](https://design.withfudge.com/share/pin-6150)

## Colors

- `#000000`
- `#07130e`
- `#ffffff`
