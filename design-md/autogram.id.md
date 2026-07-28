# How autogram.id is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/autogram.id-design)

Last updated: 2026-07-28

## Design character

Autogram presents as a **calm, airy personal-OS product**: a near-white stage, near-black type, and a constellation of floating social/app tiles orbiting a centered hero. The chrome is minimal so the metaphor of “everything you share in one place” can live as motion-ready cards rather than dense marketing sections.

What should survive adaptation:

- A **soft white canvas** with generous negative space and almost no hard section chrome.
- **Orbiting product metaphors** — app icons, document cards, and name chips as soft elevated tiles.
- **One decisive blue primary** for claim/demo CTAs against black secondary actions.
- **Segmented audience toggle** (For people / For companies) as a soft pill control in the header.

## Foundations

### Color

Measured roles and surfaces:

| Role | Value | Notes |
|------|-------|-------|
| Primary text / ink | `#111111` | Near-black headlines and body |
| Pure black | `#000000` | Solid header CTAs (“Request a demo”, “Create a page”) |
| Canvas | `#fdfdfc` | Warm off-white stage |
| Primary action (visual) | vivid blue | Filled pill buttons (“Request demo”, “Claim ID”) — brand accent not returned as a structured role hex |
| Soft chrome | light gray pills | Audience toggle inactive/active states |

Color personality is **monochrome UI + third-party brand color on tiles** (LinkedIn blue, WhatsApp green, Instagram gradient, etc.). Keep Autogram’s own chrome quiet; let partner marks and photo cards carry chroma.

### Typography

Declared family names were not captured. Visually and by measured sizes:

- **Display**: very large, tight leading (~68px at weight ~450) for the two-line hero.
- **Body / subcopy**: ~15–16px, weight 400–500, line-height ~1.5 (22.5–24px).
- **UI chrome**: ~14–15px medium weight on nav and toggle labels.
- Overall voice is **friendly geometric sans**, high x-height, no decorative serif.

### Spacing and layout

- Hero is **dead-center** in a large empty field; supporting tiles float in a wide ring.
- Comfortable control padding around 12–32px; larger section breathing room (~64px) in the shell.
- Header is a classic three-zone bar: logo left, segment control center, auth/CTA right.
- Content is not a multi-column marketing grid on the captured heroes — it is a **single focal column** with satellite ornaments.

## Visual language

- **Soft elevation**: white cards and icon tiles read as lightly lifted (soft shadow) on the pale stage; no hard drop shadows in the chrome.
- **Radii**: small UI radii around **8px** on chips/inputs; icon tiles and cards are more rounded (visually ~12–16px+). Ignore extreme outlier radius values in raw dumps.
- **Borders**: hairline / none on floating cards; inputs use a light gray fill rather than a heavy stroke.
- **Imagery**: photographic tiles and colorful app glyphs break the monochrome shell. Document cards use pale blue file glyphs and short metadata lines.
- **Name chips**: tiny colored pills (orange, purple) anchored to tiles — human attribution without cluttering the hero type.

## Components and states

Recurring pieces:

1. **Header** — wordmark + circular mark; centered segmented control; text “Log in”; solid black pill CTA.
2. **Audience segment** — dual pill; active segment is white-on-soft-track (or inverse), inactive is muted.
3. **Hero stack** — display headline, one-sentence subcopy, combined **input + primary button** (email or `autogram.id/name`).
4. **Floating tiles** — app icons, stats cards (“QR Scans”), document previews, photo cards, short quote cards.
5. **Attribution chips** — small colored labels (“Eric”, “Bianca”, “Alex”) attached to tiles.

Primary buttons are **bright blue filled pills**; secondary/header CTAs are **black filled pills**. Text links in the header stay weight-regular without underlines in the capture.

## Responsive behavior

Only wide section crops (~1712×1314) were studied. Treat the orbiting-tile composition as a **desktop hero pattern**; expect the ring of tiles to collapse or reduce on smaller viewports, but that behavior is not evidenced here.

## Practical guidance

**Preserve**

- White stage, black type, single blue primary.
- Centered hero with one combined field+CTA.
- Floating multi-format tiles as the product story instead of long feature grids.
- Quiet header with a clear dual-audience toggle.

**Avoid**

- Crowding the canvas with dense marketing sections that kill the orbit metaphor.
- Introducing a second strong brand accent that fights the blue CTA.
- Heavy borders, harsh shadows, or dark mode shell on these pages.
- Inventing a proprietary display face — match a clean geometric sans at the measured scale ladder.

## Scope note

Studied two section crops: home (`/`) and companies (`/companies`). Both share the same shell and hero pattern with different copy and CTA labels. No mobile widths, no deep product UI, and no declared font family names were available.

## Captured pages

[![Home — personal hero with orbiting tiles](https://pin.fontofweb.com/10167?format=jpg)](https://design.withfudge.com/share/pin-10167)

[Home — personal hero with orbiting tiles](https://design.withfudge.com/share/pin-10167)

[![Companies — OS-for-teams hero](https://pin.fontofweb.com/10168?format=jpg)](https://design.withfudge.com/share/pin-10168)

[Companies — OS-for-teams hero](https://design.withfudge.com/share/pin-10168)

## Colors

- `#111111`
- `#000000`
- `#fdfdfc`
