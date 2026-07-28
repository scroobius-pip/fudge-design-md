# How app.superdesign.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.superdesign.dev-design)

Last updated: 2026-07-28

## Design character

Superdesign is a **prompt-to-UI workshop** with a split personality that is the product:

1. **Tool chrome** — dark, compact, operational (brief, summary, style/layout accordions, tags)
2. **Generated stage** — often neo-brutalist / high-contrast compositions (massive type, hard borders, sticker-like cards, lime accents)

The design system you should copy for the *app* is the dark workshop. The loud preview styles are **outputs**, not necessarily the chrome.

What should survive adaptation:

- **Split view**: brief controls | live preview
- Dark tool surfaces with **white/black pill buttons**
- **8px radius** on tool cards; previews may use sharper geometric language
- Lime/volt color as an **output accent**, used sparingly in chrome if at all

## Foundations

### Color

Tool shell (visual):

- Ground: ~`#0c0c0e`
- Panels: ~`#161618`
- Text: white / light gray
- Buttons: white filled and dark outline/filled pairs

Preview specimen observed:

- Black marketing ground, white display type
- Lime (~`#ccff00`) checklist labels and energy accents
- White input + black “JOIN NOW” block CTA
- Hard white/black cards with thick borders

### Typography

Measured chrome styles:

- Body: **16px / 24px**, weight 400, tracking ~-0.18px
- Secondary: **14px / 20px**
- Meta/tags: **12px / 16px**, weight 500, same slight negative tracking

Preview type can jump to huge display sizes—that belongs to generated art direction, not the editor IA.

### Spacing and layout

Padding rhythm **24px** and **16px** / **12px** compact clusters. Layout is consistently **left brief (~⅓)** and **right preview (~⅔)** on desktop.

## Visual language

- Tool radius **8px** common; also 12, 20, and pills on chips
- Preview may ignore softness in favor of **brutalist hard edges and thick strokes**
- Tags/chips in the brief use muted dark fills
- Countdown tiles and testimonial stickers in previews are composition devices, not app nav patterns

## Components and states

1. **Brief header** — title, long description, author chip
2. **Prompt actions** — Insert prompt / Copy full prompt pills
3. **Accordion sections** — Summary, Style, Layout, Components, Special Notes
4. **Tag row** — product launch, waitlist, etc.
5. **Live preview frame** — rounded outer stage containing the generated page
6. **Preview CTAs** — extreme contrast email field + join block

## Responsive behavior

Two desktop-width captures of the home workspace. Assume **desktop split-first**; stacking brief above preview would be an adaptation, not an observed mobile system.

## Practical guidance

**Preserve** dark workshop chrome, split brief/preview, compact negatively tracked UI type, white/black tool buttons.

**Avoid** forcing neo-brutalist lime into every chrome control; keep that energy inside generated previews unless the brand intentionally bleeds.

**Adaptation tip**

When building a similar AI design tool, separate **tokens for the editor** from **style packs for outputs**. Superdesign’s clarity comes from that separation.

## Scope note

Two captures of the main app workspace/home, including a neo-brutalist generated landing (“Disruptor Beta Launch”). Structured color roles empty; type/spacing/radius measured; specimen colors from screenshots. No declared font families.

## Captured pages

[![Workspace — prompt + preview](https://pin.fontofweb.com/6128?format=jpg)](https://design.withfudge.com/share/pin-6128)

[Workspace — prompt + preview](https://design.withfudge.com/share/pin-6128)

[![Disruptor Beta Launch composition](https://pin.fontofweb.com/6127?format=jpg)](https://design.withfudge.com/share/pin-6127)

[Disruptor Beta Launch composition](https://design.withfudge.com/share/pin-6127)

## Colors

- `#0c0c0e`
- `#161618`
- `#ffffff`
- `#111111`
- `#ccff00`
- `#e5e5e5`
