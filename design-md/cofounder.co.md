# How cofounder.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cofounder.co-design)

Last updated: 2026-07-28

## Design character

Cofounder markets agent automation with an unusually soft, storybook posture: pure white chrome, near-black serif-like display headlines, quiet gray body, and full-bleed **pixel-art landscapes** as the emotional core. UI chrome is minimal — text nav, ghost buttons, one black pill “Sign up” — while product moments appear as translucent glass prompts and toast cards floating over illustrated worlds (sunflowers, parks, laptops in grass).

What should survive adaptation:

- White marketing frame + `#0a0a0a` primary type and `#646464` secondary
- Huge, calm display lines (46–90px) with generous whitespace
- Pixel / painterly illustration as primary media, not stock photos
- Black filled primary button vs outlined/ghost secondary
- Soft floating cards (~8–16px radius) over the art
- Sparse density; illustration does the heavy lifting

## Foundations

### Color

Measured:

| Role | Hex | Use |
|------|-----|-----|
| Accent / primary action | `#0a0a0a` | Filled buttons, strong labels |
| Primary text | `#0a0a0a` | Headlines and key UI |
| Secondary text | `#646464` | Supporting copy |

Canvas reads pure white in chrome; illustration supplies full-spectrum greens, sky blues, and sunflower yellows. Keep UI monochrome so the art stays loud.

### Typography

Families undeclared. Texture reads editorial/serif for display on several crops, with simpler UI sans for nav and cards.

| Role | Size | Weight | Line-height | Tracking |
|------|------|--------|-------------|----------|
| Hero display | ~90px | 400 | ~90px | ~-1.8px |
| Section / pricing display | 46–54px | 400 | ~50–54px | slight tighten |
| Subhead | ~24px | 500 | ~31px | slight negative |
| Body | 16px | 400 | 24px | default |
| UI / nav | 13–16px | 500 | ~17–22px | slight negative |

Display is large and relatively light (not ultra-black poster type). Body stays classic 16/24.

### Spacing and layout

- Wide desktop heroes with large top padding and centered copy blocks.
- Side padding often ~48–120px; some ultra-wide crops push huge outer margins.
- Pricing mobile-ish crop (~660px) still keeps centered stacks with ~24px padding and ~16px card radius.
- Gaps between chrome and art are intentional white bands or hard illustration bleeds.

## Visual language

- **Illustration-first:** Pixel landscapes, soft clouds, props (laptop, book, flower) set tone.
- **Glass UI:** Frosted prompt bars and notification toasts over the scene; light borders and soft shadows (`y:1–6`, small blurs).
- **Radius:** 4–10px on small controls; ~16px on larger pricing cards; occasional full pills on primary buttons.
- **Borders:** 1px neutral outlines on ghosts and cards.
- **Motion:** Not established from stills; floating cards imply gentle product life without proving animation specs.

## Components and states

1. **Marketing header** — wordmark; text links; ghost “Log in”; black pill “Sign up” / “Run a company”.
2. **Hero** — oversized claim, short gray subcopy, dual CTAs, optional text link (“Watch our launch video”).
3. **Illustration stage** — full-width pixel scene with overlaid prompt composer and email toast.
4. **Side mini-nav** (some crops) — vertical text list over white margin beside the art.
5. **Pricing** — large display price/headline on white; simple card with soft shadow (narrow viewport capture).

Only default resting states are visible.

## Responsive behavior

Set includes ultra-wide home (~2540px), standard wide (~2048px), and a narrow pricing crop (~660px). Chrome collapses toward simpler stacked headers on smaller widths while illustration remains dominant on home. Exact breakpoint tokens were not recorded.

## Practical guidance

**Preserve**

- Monochrome UI over rich pixel worlds
- Massive calm headlines and airy white margins
- Black pill primary + ghost secondary pairing
- Glass prompt/toast vocabulary for “product in the world”

**Avoid**

- Generic purple-gradient AI clichés
- Dense dashboard marketing above the fold
- Heavy shadows or neon accents on chrome
- Replacing illustration with abstract 3D blobs without a new art system

**Adaptation**

Build the brand around one illustration language and keep controls almost invisible. If art changes, keep the black/white type and button recipe stable.

## Scope note

Six captures on `/` and `/pricing` (pins 8169–8173, 9470–9471). No declared fonts. Color roles only cover black/gray UI — illustration palettes are visual only. App-authenticated product screens were not in this set.

## Captured pages

[![Home — white hero and claim](https://pin.fontofweb.com/8169?format=jpg)](https://design.withfudge.com/share/pin-8169)

[Home — white hero and claim](https://design.withfudge.com/share/pin-8169)

[![Home — hero with art break](https://pin.fontofweb.com/8170?format=jpg)](https://design.withfudge.com/share/pin-8170)

[Home — hero with art break](https://design.withfudge.com/share/pin-8170)

[![Home — pixel park landscape](https://pin.fontofweb.com/9471?format=jpg)](https://design.withfudge.com/share/pin-9471)

[Home — pixel park landscape](https://design.withfudge.com/share/pin-9471)

[![Home — sunflower prompt stage](https://pin.fontofweb.com/8173?format=jpg)](https://design.withfudge.com/share/pin-8173)

[Home — sunflower prompt stage](https://design.withfudge.com/share/pin-8173)

[![Pricing — narrow viewport](https://pin.fontofweb.com/8171?format=jpg)](https://design.withfudge.com/share/pin-8171)

[Pricing — narrow viewport](https://design.withfudge.com/share/pin-8171)

## Colors

- `#0a0a0a`
- `#646464`
