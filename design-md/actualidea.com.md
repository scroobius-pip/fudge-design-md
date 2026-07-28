# How actualidea.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/actualidea.com-design)

Last updated: 2026-07-28

## Design character

actualidea.com is a **creative-direction portfolio** built like a digital lookbook. Case-study pages (especially the Nylon work) put photography and large display type first; UI chrome almost disappears. The mood is dark, cinematic, and print-adjacent—black fields, white and soft-gray type, and full-bleed editorial images that read as spreads rather than marketing sections.

What should survive adaptation:

- **Image as the primary surface**, with type sitting on or beside photography instead of in card grids.
- **Magazine hierarchy**: one huge title, a short supporting line, then quiet body or captions.
- **Near-black canvases** and restrained monochrome UI so color lives in the photography.
- **Sparse navigation**—identity and a few links, never competing with the work.

## Foundations

### Color

Structured color roles were not recorded on these captures. From the screenshots, the system is effectively monochrome chrome over photographic color:

- **Canvas**: deep black / near-black behind case-study spreads and the Nylon landing lockup.
- **Type on dark**: white for primary titles and key labels; softer gray for secondary lines and metadata.
- **Type on light photo fields**: near-black when a spread flips to a pale photographic ground.
- **Accent**: almost none in the UI. Warmth, reds, and skin tones come from the photos (fashion, beauty, still life), not from buttons or brand chips.

Treat UI color as a quiet frame. Do not invent a multi-stop brand palette for chrome.

### Typography

Declared font families were not available. Visually and from measured styles:

- **Display titles** sit very large and tight—editorial serif or high-contrast display energy on the Nylon spreads (“NYLON”, story headlines). Weight reads heavy; tracking is tight enough to feel magazine-locked.
- **Supporting lines** under titles stay small and calm (around **11–16px** measured), often medium/bold for tiny labels and regular for body-like captions.
- **Body / caption text** clusters around **16px / weight 400**, with line-height near the size itself on some layers (dense, caption-like) rather than airy marketing leading.
- Hierarchy is extreme: one word or short phrase can own half the viewport; everything else is subordinate.

When rebuilding, pair a sharp display face for case titles with a neutral grotesque for meta and captions. Do not flatten everything to one product sans size.

### Spacing and layout

- Spreads behave like **full-bleed pages**: photography edge-to-edge, type inset with generous margins rather than a 12-column app grid.
- Measured spacing is sparse and not a clean token ladder (including large offsets used for layered compositions). Rhythm comes from **asymmetric editorial placement**—title left, image right; stacked cover + wordmark; floating labels—not from equal card gaps.
- Content width is the viewport; there is little sense of a centered product max-width container.
- Rounded containers appear at about **10–20px** radius on some framed panels; many images remain hard-cropped rectangles.

## Visual language

- **Shape**: mostly rectangular photography. Occasional soft-rounded frames (~20px) for inset panels; not a pill-button language.
- **Borders / shadows**: essentially absent as UI decoration. Depth comes from photo lighting and contrast against black, not drop shadows.
- **Imagery**: fashion and beauty photography, still lifes, studio product shots, and full-bleed portraits. Cropping is intentional and sometimes aggressive (faces, fabric, product detail).
- **Motion**: not established from still captures.
- **Overall effect**: a quiet stage for loud pictures—closer to a studio site or annual than a SaaS landing page.

## Components and states

Recurring patterns visible across captures:

- **Case-study hero / cover**: giant wordmark or title over or beside a hero image; minimal secondary copy.
- **Editorial spread**: split or stacked photo + headline compositions that feel like magazine pages (“The Beauty Issue”, story openers).
- **Project index moments**: dense typographic lists or simple title stacks when not in full photo mode (seen on tighter crops).
- **Chrome**: thin top identity / nav; no heavy footers or multi-card feature rows in the studied frames.

Interactive states (hover, focus, open menus) were not captured—do not invent them.

## Responsive behavior

All studied captures are **small viewports** (roughly 730–780×440–550). At this width the system still prioritizes:

- Full-bleed imagery
- Oversized titles that can wrap or dominate the frame
- Minimal competing UI

True desktop multi-column behavior is not well represented here; assume editorial stacking and large type scale down carefully rather than turning into a dashboard grid.

## Practical guidance

**Preserve**

- Black stage + photographic color as the brand moment.
- Extreme type scale contrast (billboard title vs caption).
- Full-bleed, print-like compositions over card grids.
- Almost no decorative UI chrome.

**Avoid**

- Bright product CTAs, gradient blobs, or generic SaaS illustration.
- Equal-width feature cards and heavy drop shadows.
- Crowding the frame with nav, badges, and social proof.
- Inventing a colorful UI palette that fights the photography.

**Adaptation tips**

- For a similar portfolio: one type pairing, one near-black canvas, and a strict rule that every case opens as a spread.
- Keep secondary pages as quiet as the heroes—lists and meta should feel like colophon text, not marketing modules.

## Scope note

Based on five viewport captures of Mickey Pangilinan’s Nylon-related case-study paths (`/26/`, `/nylon/`, `/nylon4/`) at small widths. Color roles, font family names, and larger desktop layouts were not recorded; character and layout guidance lean on screenshot inspection. Use this as an editorial-portfolio reference, not a full multi-page design system dump.

## Captured pages

[![Nylon cover lockup on black](https://pin.fontofweb.com/8697?format=jpg)](https://design.withfudge.com/share/pin-8697)

[Nylon cover lockup on black](https://design.withfudge.com/share/pin-8697)

[![Nylon project index / type stack](https://pin.fontofweb.com/8696?format=jpg)](https://design.withfudge.com/share/pin-8696)

[Nylon project index / type stack](https://design.withfudge.com/share/pin-8696)

[![Editorial beauty spread](https://pin.fontofweb.com/8695?format=jpg)](https://design.withfudge.com/share/pin-8695)

[Editorial beauty spread](https://design.withfudge.com/share/pin-8695)

[![Case study hero crop](https://pin.fontofweb.com/8694?format=jpg)](https://design.withfudge.com/share/pin-8694)

[Case study hero crop](https://design.withfudge.com/share/pin-8694)

[![Dark case study viewport](https://pin.fontofweb.com/8693?format=jpg)](https://design.withfudge.com/share/pin-8693)

[Dark case study viewport](https://design.withfudge.com/share/pin-8693)
