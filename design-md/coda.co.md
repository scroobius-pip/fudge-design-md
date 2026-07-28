# How coda.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/coda.co-design)

Last updated: 2026-07-28

## Design character

Coda’s Merchant of Record landing is calm B2B finance marketing: a soft warm-gray field, near-black headlines, olive-gray secondary copy, and a single black pill CTA. The page is sparse and editorial — one bold claim, one short subline, one action — then a large product mockup that does the selling. Soft 3D icons and rounded chip cards sit on the muted canvas without loud brand color.

What should survive adaptation:

- Warm light canvas (not pure white) with black primary type
- Olive-gray secondary text (`#5a5a4f`) instead of cool slate
- Extra-bold, slightly tight display headlines (~64px / weight 800)
- Black solid pill CTAs as the only strong action
- Large rounded cards (~23px) and softer chip radii (~14px)
- Product UI mockups and soft 3D icons as the hero media

## Foundations

### Color

Measured roles:

| Role | Hex | Use |
|------|-----|-----|
| Primary text | `#000000` | Headlines, nav wordmark, primary CTA fill/label contrast |
| Secondary text | `#5a5a4f` | Supporting body, meta lines |

Visually the page sits on a warm stone/gray canvas (not measured as a role color). Interactive emphasis is near-black rather than a saturated brand hue. Logo lockups and small product accents introduce blue/green only inside media — keep chrome monochrome.

### Typography

Declared font families were not captured; treat stacks as unknown and match by metrics and texture.

Observed scale on the MoR landing:

| Role | Size | Weight | Line-height | Notes |
|------|------|--------|-------------|-------|
| Display hero | ~64px | 800 | ~58px (tight) | Slight negative tracking (~-0.6px); multi-line claim |
| Lead / subhead | ~23px | 400 | ~30px | Short supporting sentence under the hero |
| Body / nav | 16px | 400 | 24px | Dominant reading size |
| Compact / legal | 12px | 400 | ~14px | Footer and fine print |
| Mid UI | ~16–18px | 400 | ~16–27px | Mockup chrome and secondary lines |

Hierarchy is extreme: one heavy display line, then restrained regular-weight support. Avoid medium/semibold ladders; jump from regular body to extra-bold display.

### Spacing and layout

- Section and card padding clusters around ~46px and ~92px on the taller crop; denser mockup chrome uses ~14px and ~28px.
- Hero is vertically centered in a wide, low-density field with generous side margin.
- Content reads as a single centered column above a full-bleed product stage.
- Density stays moderate — lots of open canvas between claim, CTA, and mockup.

## Visual language

- **Corners:** Pill-dominant CTAs (full round) plus large card radii ~23px and softer chips ~9–14px. Avoid sharp rectangles.
- **Borders:** Sparse 1px solid edges on a few frames; most separation comes from fill contrast and radius, not heavy outlines.
- **Shadows:** Not a defining system in the captures — elevation is subtle if present.
- **Imagery:** Soft matte 3D icons (globe, chat, calendar, chart) and a large light product window with rounded chrome. Media is illustrative and friendly, not photographic.
- **Background:** Solid muted field; no loud gradients in the marketing chrome.

## Components and states

Recurring pieces on the MoR page:

1. **Top nav** — wordmark left; text links; black pill “Talk to sales” (or equivalent) right.
2. **Hero stack** — extra-bold multi-line claim → olive-gray subcopy → single black pill CTA.
3. **Product stage** — large rounded window showing app UI (tables, side rails, soft panels).
4. **Icon chips** — rounded tiles with 3D glyphs for feature beats.
5. **Footer** — compact 12px legal/meta on the same muted field.

Visible states in stills: default marketing only. Do not invent hover/focus choreography beyond the clear default/emphasis contrast of black pills vs quiet text links.

## Responsive behavior

Only wide desktop viewports (~1700×830 and ~1710×1310) of the same path were captured. Treat the system as desktop-first centered marketing; do not claim mobile breakpoints from this set.

## Practical guidance

**Preserve**

- Warm gray canvas + pure black type and CTAs
- Olive secondary (`#5a5a4f`), not cool gray
- Extra-bold tight display vs regular 16/24 body
- Soft large radii and pill buttons
- One primary action per hero; product mockup as proof

**Avoid**

- Saturated brand rainbows in chrome
- Harsh pure-white clinical SaaS look
- Skinny geometric display type or multi-weight UI ladders
- Dense card grids competing with the hero claim
- Sharp 2–4px corners that fight the pill language

**Adaptation**

Reuse the quiet finance-SaaS posture: muted field, black action, soft 3D/product proof. Swap only the mockup content and claim copy; keep the monochrome action model.

## Scope note

Studied two viewport captures of `https://coda.co/merchant-of-record/` (pins 6758, 6759). No other Coda paths, mobile widths, or declared font families were in this set. Background canvas hex and motion were not measured as roles — describe those from the screenshots as warm solid fields only.

## Captured pages

[![MoR landing — full hero and product stage](https://pin.fontofweb.com/6759?format=jpg)](https://design.withfudge.com/share/pin-6759)

[MoR landing — full hero and product stage](https://design.withfudge.com/share/pin-6759)

[![MoR landing — wide hero crop](https://pin.fontofweb.com/6758?format=jpg)](https://design.withfudge.com/share/pin-6758)

[MoR landing — wide hero crop](https://design.withfudge.com/share/pin-6758)

## Colors

- `#000000`
- `#5a5a4f`
