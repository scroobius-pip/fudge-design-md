# How fiverr.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/fiverr.com-design)

Last updated: 2026-07-28

## Design character

Fiverr’s captured surfaces are **dense marketplace product pages** for individual gigs. The system is utilitarian and trust-oriented: white canvas, charcoal sans-serif type, thin gray hairlines, and compact package/pricing blocks. Creative work lives inside seller imagery and portfolio thumbs; the chrome around it stays neutral so buyers can scan price, delivery, and reviews without brand theatrics.

What should survive adaptation:
- A **light, neutral marketplace shell** that never competes with seller creatives.
- **Clear text hierarchy** for gig title, seller meta, package names, and fine print.
- **Bordered cards and tabs** rather than heavy shadows.
- **Rounded but restrained** controls (small radii on inputs/cards; pills only for status chips).

## Foundations

### Color

| Role | Hex | Context |
| --- | --- | --- |
| Canvas / surfaces | `#ffffff` | Page and card backgrounds (visual) |
| Primary text | `#222325` | Strong headings and key labels |
| Primary text (alt) | `#404145` | Body and UI labels |
| Secondary text | `#62646a` | Meta, helper copy |
| Secondary text (alt) | `#74767e` | Quieter captions |
| Neutral accent / rules | `#b5b6ba` | Borders, muted icons |
| Warm accent | `#9b6928` | Status / level-style highlight on gig chrome |

The system is essentially **charcoal-on-white with one warm metallic accent**. Green marketplace brand marks may appear in global chrome outside these crops; within the gig body, warmth shows up as bronze/gold badges rather than saturated CTAs.

### Typography

No family names were declared. Observed sizes and weights:

- **Gig / section titles:** ~20–28px, weight 600–700.
- **Body and list copy:** 16px regular.
- **Meta, tabs, secondary UI:** 14px regular or bold for selected labels.
- **Single sans family** across heading, body, and UI roles.

Line length stays moderate inside the main column; package comparison blocks use short labels and tight stacked rows. Prefer weight and size shifts over color shouting for hierarchy.

### Spacing and layout

Recurring spacing: **8 / 10 / 16 / 20 / 24 / 32 / 40px**, with occasional larger section gaps (~64px+). Gig layouts read as a **main content column + sticky/side purchase card** pattern. Inside cards, rows are compact (package name, price, delivery time, revisions). Borders do more separation work than whitespace — density is moderate-to-high, appropriate for comparison shopping.

## Visual language

- **1px solid borders** everywhere: cards, tabs, dividers, avatar rings, input edges. Counts are high; separation is linear, not shadowed.
- **Radii:** 4px on most cards/inputs, ~16px on larger media frames, full pills (`999` / `9999`) for chips and some buttons.
- **No observed drop shadows** in these crops — flat surfaces with border structure.
- **Seller media** (portfolio grids, video thumbs) supply color and personality; UI chrome stays gray-scale.
- **Status chips and badges** (Level, Pro-like marks, stars) are small and high-contrast against white.

## Components and states

- **Gig header:** title, seller avatar row, rating stars, order counts.
- **Package / pricing card:** tier tabs or stacked packages, bold price, delivery and revision meta, primary order CTA.
- **About / description blocks:** long-form sans body with simple subheads.
- **FAQ / accordion rows:** bordered list rows with chevrons (structure visible; motion not captured).
- **Review cards:** avatar, name, country meta, star row, quote body.
- **Portfolio / related thumbs:** rounded image tiles in a dense grid.

Resting marketplace states only — do not invent hover elevations that the captures do not show.

## Practical guidance

**Preserve**
- Neutral white shell so seller work is the hero.
- Charcoal text ladder (`#222325` → `#404145` → `#62646a` → `#74767e`).
- Hairline borders and 4px radii as the default surface language.
- Compact package cards with price-first scanning.

**Avoid**
- Heavy colored page backgrounds or large brand gradients on gig interiors.
- Oversized display marketing type inside transactional pages.
- Shadow-stack cards that fight the flat bordered system.
- Turning every badge into a saturated rainbow — keep accents sparse (one warm metallic, star gold, rare status color).

## Scope note

Studied two section crops from individual gig detail URLs (logo design and typography t-shirt gigs). No homepage, search results, or responsive widths. This guide covers **gig detail marketplace UI**, not Fiverr’s global marketing site.

## Captured pages

[![Gig detail — packages and media](https://pin.fontofweb.com/9890?format=jpg)](https://design.withfudge.com/share/pin-9890)

[Gig detail — packages and media](https://design.withfudge.com/share/pin-9890)

[![Gig detail — logo offering](https://pin.fontofweb.com/9889?format=jpg)](https://design.withfudge.com/share/pin-9889)

[Gig detail — logo offering](https://design.withfudge.com/share/pin-9889)

## Colors

- `#ffffff`
- `#222325`
- `#404145`
- `#62646a`
- `#74767e`
- `#b5b6ba`
- `#9b6928`
