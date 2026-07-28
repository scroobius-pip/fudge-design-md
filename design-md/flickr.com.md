# How flickr.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/flickr.com-design)

Last updated: 2026-07-28

## Design character

Flickr’s marketing site is a **dark, photography-first editorial brand**. Huge condensed cream headlines shout over charcoal fields; real photographs do the storytelling; and a single hot-pink accent drives every signup path. Voice is irreverent and community-forward (“Come for the photos, stay for the weirdos”) while the visual system stays disciplined: black stage, pink action, white type, film-strip and card motifs.

What should survive adaptation:
- **Near-black stages** that let photographs glow.
- **Monumental uppercase-feeling display** (often title case at huge sizes) in off-white.
- **Hot pink (`#ff0084`) as the only hard UI accent** for primary CTAs and text links.
- **Photography as structure** — full-bleed heroes, overlapping frames, film-strip bands — not stock-in-a-box.

## Foundations

### Color

| Role | Hex | Context |
| --- | --- | --- |
| Accent | `#ff0084` | SIGN UP, JOIN US, inline links (“MORE MORE MORE”) |
| Primary text (dark UI) | `#ffffff` | Headlines and body on charcoal |
| Secondary text (dark UI) | `#d9d7ce` | Soft cream supporting copy |
| Primary text (light UI) | `#333333` / `#232323` | Type on pale cards and light moments |
| Secondary text (light) | `#787878` | Muted meta on light |
| Link (legacy/light) | `#0000ee` | Occasional default-link blue on light surfaces |
| Canvas (visual) | `#121212`–`#1a1a1a` | Marketing field |
| Loud campaign accent (visual) | `#f5e800` approx. | MODE festival yellow blocks |

Pink is the brand verb. Yellow appears as campaign/festival energy, not everyday chrome. Cream secondary text (`#d9d7ce`) keeps dark-theme body copy warmer than pure gray.

### Typography

Families undeclared; the look is a **heavy grotesque display + lighter sans body**:

- **Display:** ~56–138px, weight 700, very tight leading, multi-line poster stacks (“THE BEST PLACE TO BE A PHOTOGRAPHER ONLINE.”).
- **Section heads:** ~28–56px bold.
- **Body:** ~20–22px regular or light (300–400) on dark; comfortable measure beside image columns.
- **UI / nav:** ~16–20px, often uppercase tracking in the top bar; bold 700 on active items and pink CTAs.
- Logo wordmark sits beside the blue·pink dual-dot mark.

Hierarchy is theatrical: one enormous claim, then a short paragraph, then a pink text link or pill button.

### Spacing and layout

Observed steps cluster around **~11 / 22 / 27 / 33 / 56px**, with large hero gaps and negative-overlap moments (images tucked under headlines). Layout patterns:

- **Split hero:** massive type left, stacked photo tiles right.
- **Editorial band:** photo | photo | copy column on dark.
- **Film-strip / ticker:** horizontal repeating labels (e.g. “GET YOUR PASSES”) over campaign imagery.
- **About cards:** three equal photo tiles with overlaid white headlines and arrow affordances on a pale gray stage.

Content width feels wide and cinematic; margins are generous but images often break to full bleed.

## Visual language

- **Flat dark surfaces** — no soft UI shadows in the marketing captures.
- **Small radii (5–7px)** on buttons, inputs, and some media frames; photo cards can read nearly square.
- **Thick ornamental borders** appear around certain framed photo modules (large equal-side borders in the data) — treat photos as mounted prints, not floating glass cards.
- **Logo:** wordmark + cyan and magenta dots.
- **Motifs:** 35mm film perforations, overlapping polaroid-like frames, full-bleed photographer imagery, pale gray gutters between about-page tiles.
- **Campaign yellow** for MODE and pass CTAs — high-chroma interruption on dark or photo fields.

## Components and states

- **Top promo bar:** light strip pushing Flickr Pro, small dual-dot bullet.
- **Primary nav:** dark bar, uppercase links, search + LOGIN text, pink **SIGN UP** pill.
- **Primary CTA button:** filled `#ff0084`, white label, slight radius (~5–7px), not a soft super-pill.
- **Text link CTA:** pink label + chevron (“MORE MORE MORE”, “BEST. NEIGHBORS. EVER.”).
- **Email capture:** rounded input + square-ish submit with arrow on photo backdrop.
- **Comment / social proof chips:** small white cards over photos (avatar, name, PRO badge, quote).
- **About story cards:** image fill, large white headline, smaller caption + arrow.

Only static marketing states are documented.

## Practical guidance

**Preserve**
- Charcoal stage + cream display + pink action triad.
- Photography-led composition with type as bold overlay, not the other way around.
- Irreverent short copy paired with huge type.
- Sparse chrome; one pink button per view when possible.

**Avoid**
- Turning the site into light-mode SaaS with gray cards and soft shadows.
- Diluting pink into multiple competing brights (except deliberate campaign yellow).
- Timid headline sizes — display must feel poster-scale.
- Generic stock with heavy gradients or mockup devices replacing real photographs.

## Scope note

Studied six desktop viewports across `/`, `/features`, `/flickr-pro`, and `/company/about-us/`. No app authenticated UI, no mobile widths. Use this for **public marketing and brand storytelling**, not the logged-in photo manager.

## Captured pages

[![Home — photographer hero](https://pin.fontofweb.com/8225?format=jpg)](https://design.withfudge.com/share/pin-8225)

[Home — photographer hero](https://design.withfudge.com/share/pin-8225)

[![Home — community band](https://pin.fontofweb.com/8226?format=jpg)](https://design.withfudge.com/share/pin-8226)

[Home — community band](https://design.withfudge.com/share/pin-8226)

[![Features](https://pin.fontofweb.com/8227?format=jpg)](https://design.withfudge.com/share/pin-8227)

[Features](https://design.withfudge.com/share/pin-8227)

[![Flickr Pro](https://pin.fontofweb.com/8228?format=jpg)](https://design.withfudge.com/share/pin-8228)

[Flickr Pro](https://design.withfudge.com/share/pin-8228)

[![About — story](https://pin.fontofweb.com/8229?format=jpg)](https://design.withfudge.com/share/pin-8229)

[About — story](https://design.withfudge.com/share/pin-8229)

[![About — card row](https://pin.fontofweb.com/8230?format=jpg)](https://design.withfudge.com/share/pin-8230)

[About — card row](https://design.withfudge.com/share/pin-8230)

## Colors

- `#ffffff`
- `#d9d7ce`
- `#ff0084`
- `#333333`
- `#232323`
- `#787878`
- `#0000ee`
- `#121212`
