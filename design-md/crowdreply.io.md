# How crowdreply.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/crowdreply.io-design)

Last updated: 2026-07-28

## Design character

CrowdReply is a **soft, airy AI-search marketing site** built like a product brochure: warm off-white canvas, bold centered headlines, and a **bento grid of pale pastel cards** that mix testimonials, KPI tiles, and dark product UI mockups. The brand feels optimistic and B2B-clean—closer to a modern growth-tool landing page than a dense dashboard.

What should survive adaptation:

- **Warm paper canvas** with generous vertical rhythm and centered section titles.
- **Pastel metric tiles** (peach, lavender, sand, soft blue) as proof objects beside quote cards.
- **Dark inset product charts** inside light cards—product depth without darkening the page.
- **Pill section labels** above each major block (“Testimonials”, “AI Search”).
- Rounded **12–18px** cards and calm sans hierarchy rather than brutalist or neon AI aesthetics.

## Foundations

### Color

Structured color roles were not retained on these captures. Visually the system reads as:

- **Canvas**: warm off-white / cream page background.
- **Surfaces**: pure white cards; pastel fills for metric tiles (peach gradient chart card, soft blue ring chart, sand share-of-voice, lavender “2X” tile).
- **Text**: near-black headlines and body; quieter gray subcopy under titles.
- **Product chrome inside mockups**: near-black panels with blue→orange chart strokes and small green positive deltas.
- **Logo color** on tiles stays brand-native (client marks), not a single global accent forced everywhere.

Do not invent a full semantic token set beyond this light/pastel/dark-inset pattern.

### Typography

No declared family names were retained. Measured styles:

- **Display / section titles**: ~**44–56px**, weight **600**, line-height ~1.1–1.2 (e.g. 56/61.6, 44/52.8).
- **Body**: **14–18px** at 400–500, line-heights ~19–30px.
- **UI / labels**: **11–14px**, including tight 11–12px meta.
- **Tone**: confident, short marketing headlines; body stays readable and mid-weight.

### Spacing and layout

- Large section padding appears in hero-scale blocks (e.g. **134–220px** vertical padding on wide hero crop; **24–32px** padding common on card grids).
- Card grids use consistent internal padding (**24–32px**) and **12px** corner radius at high frequency.
- Layout is **centered single column of sections**, each: pill label → title → subtitle → 2×2 or masonry card grid.

## Visual language

- **Corners**: dominant **12px** rounding on cards; chips/buttons often **8–10px**; occasional larger pills (~18–68px) for labels and avatars.
- **Borders/shadows**: cards read as soft elevated or flat white plates on cream—structured shadow values were not retained; separation is mostly fill contrast.
- **Imagery**: dashboard mockups (line charts, citation bars, stacked prompt cards), avatar photos on quotes, brand logos on KPI tiles.
- **Motion**: not established from stills.

## Components and states

### Section header
Centered pill badge, bold title, one-line gray subtitle.

### Testimonial card
White rounded plate, quote, circular avatar, name + role.

### Metric / logo tile
Pastel fill, simple chart or big number, partner logo bottom-left.

### Feature bento cell
Title + short paragraph + either dark product screenshot or illustrated UI cluster.

### Nav (hero)
From the wide home crop: light marketing header with product CTAs over a spacious hero (exact nav chrome varies by crop).

## Responsive behavior

Captures span ~**936–1701px** widths, all home sections. Card grids reflow from wide multi-column bento to tighter stacks; radii and pastel language hold. Dedicated mobile nav patterns are not fully documented here.

## Practical guidance

**Preserve**

1. Cream page + white cards + pastel proof tiles.
2. Dark product charts as insets, not full-page dark mode.
3. Pill labels above every major section.
4. Big semibold centered titles with short subtitles.
5. Mix quotes and KPI tiles in the same bento rhythm.

**Avoid**

1. Neon cyberpunk AI clichés or heavy gradients on the page chrome.
2. Dense multi-column blog layouts—this site sells with open air.
3. Inventing a proprietary font name from this guide.
4. Turning every card dark; darkness is for product previews only.

**Adaptation recipe**

- Off-white brochure canvas → section pill → bold title → pastel/white bento → dark product inset for credibility.

## Scope note

Studied from eight home viewport crops on `crowdreply.io` (hero through testimonials and feature grids). Supported: marketing section rhythm, card radii, type scale, pastel proof language, product-mock inset pattern. Not established: exact brand accent hex roles, font family/licence, checkout/app chrome, motion.

## Captured pages

[![Home hero / wide](https://pin.fontofweb.com/8154?format=jpg)](https://design.withfudge.com/share/pin-8154)

[Home hero / wide](https://design.withfudge.com/share/pin-8154)

[![Testimonials bento](https://pin.fontofweb.com/8153?format=jpg)](https://design.withfudge.com/share/pin-8153)

[Testimonials bento](https://design.withfudge.com/share/pin-8153)

[![AI Search features grid](https://pin.fontofweb.com/8150?format=jpg)](https://design.withfudge.com/share/pin-8150)

[AI Search features grid](https://design.withfudge.com/share/pin-8150)

[![Home mid section](https://pin.fontofweb.com/8152?format=jpg)](https://design.withfudge.com/share/pin-8152)

[Home mid section](https://design.withfudge.com/share/pin-8152)

[![Home compact cards](https://pin.fontofweb.com/8148?format=jpg)](https://design.withfudge.com/share/pin-8148)

[Home compact cards](https://design.withfudge.com/share/pin-8148)

[![Home CTA region](https://pin.fontofweb.com/8147?format=jpg)](https://design.withfudge.com/share/pin-8147)

[Home CTA region](https://design.withfudge.com/share/pin-8147)
