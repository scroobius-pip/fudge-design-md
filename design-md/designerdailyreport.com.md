# How designerdailyreport.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/designerdailyreport.com-design)

Last updated: 2026-07-28

## Design character

Designer Daily Report is a **design-news product** that toggles between two tightly related faces of the same system: a **dark, card-stacked issue index** for daily reading, and a **light, editorial landing** that sells the newsletter with large type and product mockups. Both faces share the same geometry—soft rounded cards, restrained gold/peach accents, and a calm sans hierarchy—but they flip the canvas so the brand can feel premium in marketing and focused in consumption.

What should survive adaptation:

- A **dual-surface system**: near-black reading chrome vs warm off-white marketing canvas, not a single forever-dark skin.
- **Peach-gold as the only loud accent**—CTAs, icons, and brand sparks—against navy/slate neutrals.
- **Rounded card stacks** (issue rows, feature cards, mock UI) as the primary content unit.
- **Large, quiet display type** on the landing paired with dense, scannable issue lists in the app view.

## Foundations

### Color

Measured palette:

| Hex | Observed role |
| --- | --- |
| `#ffc37a` | Warm peach-gold accent (primary CTA fill, brand sparks on dark) |
| `#815104` | Deeper gold/brown accent on the light marketing surface |
| `#ffffff` | Primary text on dark surfaces; also pure surface highlights |
| `#272f3f` | Near-navy primary text on light surfaces |
| `#5e6c8d` | Secondary slate body/meta on light |
| `#7d8aa8` | Lighter secondary slate for quieter labels |

**Visual reading (from screenshots):** The issue index sits on a deep charcoal/black field with white titles and muted gray meta. Soft peach fills primary buttons (“Get Unlimited Access”) and small brand marks. The light landing uses a warm cream paper canvas, navy headlines, slate body, and gold icon chips; a large product mock keeps the same dark UI language inside a floating window. Do not expand the accent family—one warm metal tone is enough.

### Typography

Font family names were not captured. Visually the system is a **clean geometric sans** for UI and body, with a **softer serif or high-contrast display face** used for oversized marketing headlines on the light landing (paired type system).

Observed sizes and weights:

| Use | Size | Weight | Notes |
| --- | --- | --- | --- |
| Marketing display | 72px | 400 | ~79px line-height; hero wordmark energy |
| Section / issue title | 36–44px | 400 | Landing and modal titles |
| Card / list heading | 28px | 400–600 | ~33–36px line-height |
| Lead body | 18–20px | 400 | ~27–28px line-height |
| Default body / UI | 16px | 400 | Dominant reading size |
| Meta / chrome | 12–14px | 300–600 | Labels, dates, nav, badges |

Hierarchy is size-led more than weight-led: many display lines stay at 400 while still reading as headlines through scale and color contrast.

### Spacing and layout

Recurring measurements:

- **Card padding:** 16px, 24px, and 32px dominate; vertical section padding often 64–80px.
- **Centered column:** horizontal auto-margins around **212.5px** (and ~430px on wider frames) imply a **~1200px-class content column** rather than full-bleed text.
- **Stack rhythm:** list cards use consistent vertical gaps; marketing sections separate with large top margins (~96px) and mid gaps (~48px).
- Density is **moderate**: issue rows are comfortable, not packed magazine-tight.

Layout patterns:

1. **Dark index:** sticky-ish top chrome (logo, nav, avatar) over a single-column feed of large rounded issue cards.
2. **Light landing:** centered hero → multi-card feature grid → floating product mock → social proof → long-form sections.
3. **Modal overlay:** centered white (or light) dialog on dimmed dark UI for gated content.

## Visual language

- **Corners:** heavy use of **20px and 28px** radii on cards; also 16px, 15–19px, 10px, and ~24px. The product feels “soft device UI,” not sharp dashboard.
- **Borders:** 1px solid edges appear on many cards—especially in the dark index—so surfaces are **border-separated**, not pure shadow blobs.
- **Shadows:** mostly subtle (`0 1px 1px`) on chrome; deeper lifts (`0 6px 20px`, `0 20px 56px`) under the product mock and floating panels.
- **Surfaces:** flat fills; no loud gradients in the chrome. Accent color is solid peach/gold rather than neon.
- **Imagery:** product UI mockups, simple icon plates, and soft abstract shapes—editorial but product-aware.

## Components and states

Recurring pieces visible across captures:

- **Top navigation:** wordmark left; text links; avatar or account control right. On dark, links stay quiet gray/white.
- **Primary CTA button:** filled peach/gold, highly rounded, short label (“Get Unlimited Access”, “Subscribe”).
- **Issue / content card:** large radius, optional thumbnail or date meta, bold title, short excerpt, full-width hit target feel.
- **Feature grid cards:** equal-radius tiles with icon chip + title + body on the marketing page.
- **Gating modal:** title, supporting copy, primary button, dismiss control—centered over the feed.
- **Product frame:** rounded window chrome showing the dark app UI inside the light marketing page—bridge between the two modes.
- **Footer:** multi-column links on the light page; simpler legal row patterns elsewhere.

Visible state cues are limited to still frames: filled vs text buttons, dimmed backdrop behind modals, and accent vs muted meta. Do not invent hover/focus specs beyond “accent stays rare and solid.”

## Responsive behavior

Captures are desktop viewports at different widths (~1308–1712). The system keeps a **centered column with growing side margin** rather than stretching text full-bleed. Card stacks remain single-column in the issue index; marketing feature areas move between multi-card rows depending on width. No dedicated mobile breakpoints were measured—treat phone layout as unspecified.

## Practical guidance

**Preserve**

- Dual light/dark canvases that share radius, accent family, and card logic.
- Peach-gold as a single accent lane on both modes (lighter peach on dark, deeper gold on light).
- Soft 20–28px cards with light 1px borders and restrained shadow.
- Size-driven hierarchy with calm 16px body and occasional oversized display.
- Centered reading measure with generous vertical section padding.

**Avoid**

- Rainbow accents or high-chroma blues fighting the gold metal tone.
- Sharp 2–4px corners that make the product feel like a dense admin tool.
- Heavy drop shadows on every list row—reserve depth for mocks and modals.
- Turning the dark index into a loud dashboard; it should stay editorial and quiet.
- Inventing a second display font stack beyond the observed sans + marketing display pairing.

## Evidence scope

Based on three homepage captures of `designerdailyreport.com` (dark issue index with gating modal, dark feed, and light marketing landing with product mock). Color roles, radii, spacing, and type sizes are measured; font family names, motion, and true mobile breakpoints were not established. Treat this as a desktop editorial/SaaS hybrid system brief.

## Captured pages

[![Dark issue index with access modal](https://pin.fontofweb.com/7431?format=jpg)](https://design.withfudge.com/share/pin-7431)

[Dark issue index with access modal](https://design.withfudge.com/share/pin-7431)

[![Dark homepage feed](https://pin.fontofweb.com/7430?format=jpg)](https://design.withfudge.com/share/pin-7430)

[Dark homepage feed](https://design.withfudge.com/share/pin-7430)

[![Light marketing landing + product mock](https://pin.fontofweb.com/7429?format=jpg)](https://design.withfudge.com/share/pin-7429)

[Light marketing landing + product mock](https://design.withfudge.com/share/pin-7429)

## Colors

- `#ffc37a`
- `#ffffff`
- `#815104`
- `#272f3f`
- `#5e6c8d`
- `#7d8aa8`
