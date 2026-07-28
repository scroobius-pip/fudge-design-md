# How ampcode.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ampcode.com-design)

Last updated: 2026-07-28

## Design character

Ampcode is a **dark, terminal-adjacent agent product**: charcoal/black stages, sharp white headlines, and a signature mint/neon green accent (`#00ff88`) on CTAs and highlights. Marketing pages sell velocity; the manual shifts into documentation with a left nav, but keeps the same night-mode electricity. It should feel like a serious coding tool with just enough glow to signal AI—not a pastel productivity app.

What should survive adaptation:
- Near-black canvas and high-contrast white type
- Mint green as the only loud accent
- Docs sidebar + content column on manual routes
- Code-forward samples and monospace moments inside an otherwise grotesk UI

## Foundations

### Color

Measured swatches seen across pages: `#f6f6f6`, `#00ff88`, `#f6fff5`, `#9ca49c`. Visual system: black/charcoal ground, off-white text, muted green-gray secondary (`#9ca49c`-range), mint primary actions, occasional soft green-tinted panels (`#f6fff5` on lighter islands). Keep green scarce so it stays electric.

### Typography

Observed text styles:
- **text**: unknown, weight 400, 13px, lh 20px
- **text**: unknown, weight 400, 13px, lh 20px
- **text**: unknown, weight 400, 16px, lh 20px
- **text**: unknown, weight 700, 16px, lh 24px
- **text**: unknown, weight 500, 32px, lh 36px
- **text**: unknown, weight 400, 32px, lh 36px
- **text**: unknown, weight 700, 13px, lh 20px
- **text**: unknown, weight 500, 13px, lh 20px
- **text**: unknown, weight 400, 24px, lh 32px
- **text**: unknown, weight 700, 32px, lh 36px
- **text**: unknown, weight 400, 20px, lh 28px
- **text**: unknown, weight 700, 16px, lh 20px

Large white grotesk marketing titles; denser sans for docs UI; monospaced snippets in the manual. Hierarchy is steep on marketing, flatter and more utilitarian in docs.

### Spacing and layout

Recurring spacing measurements include 4px, 8px, 10px, 12px, 16px, 20px, 24px, 28px, 48px, 64px, 94.49px, 96px, 128px. Marketing uses big hero stacks and feature bands; docs use a classic left-nav + main reading column with tighter component spacing. Observed corner radii include 4px, 6px, 8px.

## Visual language

Soft glows and gradient atmospheres behind heroes are acceptable if they stay green/neutral—not rainbow. Cards may lift slightly from the black field. Borders are thin and dark-gray. Prefer crisp geometry over illustration clutter.

## Components and states

- Dark header with wordmark + text links + green primary CTA
- Hero with oversized title and short value prop
- Feature grids and code/terminal panels
- Docs: sticky sidebar, article title, prose, code blocks
- Buttons: mint fill primary; ghost/outline secondary on dark

## Responsive behavior

Home and manual captures around ~1700px show desktop density. On smaller widths collapse the docs sidebar to a toggle and stack marketing mockups below copy while preserving black field continuity.

## Practical guidance

**Preserve** black stage, mint accent scarcity, docs/marketing duality, code readability.  
**Avoid** light-default Bootstrap skins, purple AI clichés, low-contrast gray-on-black body copy.

## Scope note

Studied 3 page captures on paths /, /manual. Some structural families were incomplete on these pages. Home marketing and /manual documentation were studied.

## Captured pages

[![Owner’s Manual - Amp](https://pin.fontofweb.com/9180?format=jpg)](https://design.withfudge.com/share/pin-9180)

[Owner’s Manual - Amp](https://design.withfudge.com/share/pin-9180)

[![Amp](https://pin.fontofweb.com/9179?format=jpg)](https://design.withfudge.com/share/pin-9179)

[Amp](https://design.withfudge.com/share/pin-9179)

[![Amp](https://pin.fontofweb.com/9178?format=jpg)](https://design.withfudge.com/share/pin-9178)

[Amp](https://design.withfudge.com/share/pin-9178)

## Colors

- `#f6f6f6`
- `#00ff88`
- `#f6fff5`
- `#9ca49c`
