# How behance.net is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/behance.net-design)

Last updated: 2026-07-28

## Design character

Behance is a **creative portfolio network** built as a dense discovery grid first, marketing stage second. On Explore, the chrome is deliberately quiet—white canvas, charcoal type, one electric blue CTA—so project covers can be loud. On Pro, the product flips: full-bleed dark hero with a soft spectrum wash, oversized white display type, then pale product sections with soft white cards. The system’s personality is **gallery-native Adobe polish**: thin utility chrome, pill controls, rounded media tiles, and a single blue that marks “primary action” everywhere from Start Free Trial to For You chips to Got it.

What should survive adaptation:

- **Work-first masonry/grid** where project covers carry color and emotion; chrome stays near-neutral.
- **One saturated blue accent** (`#0057ff`) for primary CTAs, active chips, and key links—not a rainbow of brand colors in the UI shell.
- **Pill language** across search, filters, category chips, and buttons (small radius on chips, full pill on primary actions).
- **Dual mood**: bright dense feed vs. cinematic Pro hero with soft multicolor glow behind centered type.
- **Metadata under cards**—avatar, owner, appreciations, views—in small gray type that never competes with the cover.

## Foundations

### Color

Measured values from the product surfaces:

| Hex | Role in the system |
| --- | --- |
| `#0057ff` | Primary accent — Start Free Trial, active For You chip, solid primary buttons, key text links |
| `#ffffff` | Canvas and card surfaces; inverted type on dark Pro hero; outlined secondary buttons |
| `#191919` | Primary text and strong headings on light surfaces; near-black solid CTAs on marketing sections |
| `#707070` / `#696969` | Secondary / meta text (owner labels, footer, supporting copy) |

**Relationships that matter**

- Feed and chrome live on pure white with near-black type; blue is the only loud UI color in the shell.
- Category chips are dark translucent tiles with cover art bleeding through; the selected chip flips to solid blue with white label.
- Pro hero inverts: black field, white display type, white primary pill + ghost outline secondary; spectrum blues/cyans/oranges/purples appear only as **background art**, not as UI tokens.
- Benefit cards keep white surfaces on a pale cool page; icon tints (blue / green / purple) are section accents, not a second brand system.
- PRO badges on avatars use the same electric blue family as primary CTAs.

Do not invent extra brand greens or oranges for chrome—those hues belong inside project covers and Pro hero art.

### Typography

No durable family name was declared in capture. Visually the stack is a clean **neo-grotesque UI sans**: geometric, slightly tight tracking on large sizes, excellent at dense meta labels.

Observed hierarchy (approximate sizes from product surfaces):

| Role | Size / weight | Notes |
| --- | --- | --- |
| Pro display | ~60px / 600, tracking ~−1.8 | Centered hero; tight leading (≈1.0) |
| Section title | ~35px / 600 (tablet) · large black headings on light | “Why upgrade to Pro?”, job pitch headlines |
| Marketing body | ~18–20px / 400, slight negative tracking | Hero subcopy, benefit descriptions |
| Card title | ~14–16px / 600 | Benefit card titles, dense UI emphasis |
| UI / nav | ~12–14px / 400–600 | Top nav, chips, search, meta under projects |
| Micro meta | ~12px / 400, lh ≈ 15.6 | Appreciations, views, footer |

Practical rules:

- **Display is bold and tight**; body is regular with comfortable ~1.4 line-height.
- Feed type stays small so five-up covers dominate; marketing type jumps an order of magnitude.
- Avoid decorative serifs or display faces in chrome—the portfolio imagery is the expression layer.

### Spacing and layout

Recurring measurements:

- Horizontal page padding / section inset often **~28–40px**; some Pro content blocks show large side margins (~279px) that read as a **narrow centered column** on wide desktops.
- Card internal padding clusters around **30px** (and tighter **7px** on dense controls).
- Vertical rhythm under marketing blocks: **~20px** between stacked elements; large section gaps **~112–128px** on Pro storytelling.
- Explore is a **multi-column project grid** (about five tiles wide at ~1700px) with thin gutters; covers are nearly square-to-landscape media with metadata directly beneath—not inside a heavy frame.
- Sticky dual bars: primary nav, then filter/search/chip row—both full-bleed white with hairline separation.

Density: **dense on Explore**, **moderate on Pro** landing sections. Do not stretch feed cards into large editorial gaps; discovery thrives on many simultaneous covers.

## Visual language

**Corners**

- ~**6px** on small controls and some chips.
- ~**14–20px** on project tiles, feature cards, and search fields (soft modern cards).
- **Fully pill** (`border-radius: 100px`-class) on primary CTAs, avatar PRO badges, and selected filter pills.

**Borders & elevation**

- 1px solid hairlines define outlined buttons, search field, filter capsule, and card edges.
- Soft shadow appears sparingly (`0 1px 15px`) under elevated marketing cards—not under every feed tile. Covers mostly sit flat on white; elevation is for product UI mockups and feature cards.

**Imagery**

- Explore: user project photography, packaging, type specimens, UI mockups—full-bleed inside rounded tiles; optional corner badges (FOLLOWING, NEW, price).
- Pro hero: abstract spectrum glow (blue→cyan→orange→magenta) behind type; treated as art direction, not a reusable gradient token for buttons.
- In-feed promo tile (“Do more with Behance Pro”) matches grid geometry but uses gradient + white pill CTA—chrome stays product-blue, promo may borrow spectrum.

**Motion**

Still captures only—no motion tokens. Preserve a calm, instant-click feel rather than theatrical page transitions in chrome.

## Components

**Top navigation**  
Wordmark left; text links (Explore underlined when active); Hire dropdown; right cluster: blue **Start Free Trial** pill, white **Share Work** outline pill, icon buttons (messages, notifications), circular avatar, Adobe mark. On Pro the search field moves into the header as a dark translucent capsule.

**Filter / search row**  
Pill **Filter** control, elongated search field with leading magnifier, segmented pills (Projects / People / Assets / Images), sort dropdown. Soft gray fills, 1px borders, white page.

**Category chip rail**  
Horizontal scroller of rounded tiles: active = solid blue + white label + icon; inactive = darkened cover thumbnails with white labels. Chevron affordance for overflow.

**Project card**  
Rounded media; optional top-right status pill; below: owner avatar + name (or Multiple Owners), optional blue PRO badge, appreciation and view counts in gray with simple icons. No heavy drop shadow required.

**Primary / secondary buttons**  
- Primary filled: `#0057ff` or near-black `#191919` depending on context (header trial vs. in-section trial).  
- Secondary: white fill, 1px border, dark label—or ghost white outline on dark hero.  
- Both fully pill-shaped with comfortable horizontal padding.

**Feature / benefit cards**  
White rounded rectangles (~20px), light border or soft shadow, centered tinted icon in a rounded square, bold title, gray body, colored “Learn More” text link matching the icon hue.

**Split product panels (Pro)**  
Left: gradient stage with floating UI mockups and play affordance; right: white copy column. Large corner radius, generous internal padding.

**Modal (gallery / comments)**  
Centered white card, simple X dismiss, playful illustration, bold section heads, gray body, single blue **Got it** pill—same accent grammar as the rest of the product.

## Responsive behavior

Captures span ~518px (gallery modal), ~992px (Pro mid), and ~1646–1712px (desktop feed/Pro).

- Desktop Explore: multi-column grid + dual sticky toolbars + horizontal chip rail.
- Mid widths: Pro display type steps down (~35px class headings); benefit cards stack or reduce columns; side margins compress.
- Narrow gallery context: modal-first utility UI, single column, large touch-friendly primary pill.
- Keep the **blue pill CTA** reachable in the header at all widths; collapse secondary nav before sacrificing trial.

## Practical guidance

**Preserve**

1. One electric blue for primary actions; neutrals for everything else in chrome.
2. Work-first grid density—many covers, small meta type.
3. Pill CTAs + soft 14–20px cards + 6px micro controls.
4. Dark cinematic Pro hero as a mood shift, not a second product theme applied to Explore.
5. Clear hierarchy: display → section title → body → 12px meta.
6. Outline secondary beside filled primary (never two competing filled hues).

**Avoid**

1. Coloring the entire nav or chip rail in brand gradients.
2. Heavy shadows under every project tile.
3. Oversized body type in the feed that pushes covers off-screen.
4. Declaring custom display fonts for UI chrome without a real licence path—keep chrome system/UI sans.
5. Mixing black filled CTAs and blue filled CTAs in the same tight cluster without a clear primary.
6. Turning category chips into flat gray tags—the darkened art-backed chip is part of the brand.

## Scope note

Drawn from Behance Explore home (desktop feed + header), Behance Pro marketing (desktop and mid-width sections including jobs/pricing storytelling), and a project gallery comment-guidelines modal. Font family names and licences were not declared; treat type as an unnamed UI sans. Color list is limited to measured neutrals plus `#0057ff`. Spectrum hues in the Pro hero are art direction inside imagery, not chrome tokens.

## Captured pages

[![Explore — For You feed](https://pin.fontofweb.com/7311?format=jpg)](https://design.withfudge.com/share/pin-7311)

[Explore — For You feed](https://design.withfudge.com/share/pin-7311)

[![Explore — header & chips](https://pin.fontofweb.com/7320?format=jpg)](https://design.withfudge.com/share/pin-7320)

[Explore — header & chips](https://design.withfudge.com/share/pin-7320)

[![Behance Pro — hero & benefits](https://pin.fontofweb.com/7315?format=jpg)](https://design.withfudge.com/share/pin-7315)

[Behance Pro — hero & benefits](https://design.withfudge.com/share/pin-7315)

[![Behance Pro — jobs storytelling](https://pin.fontofweb.com/7317?format=jpg)](https://design.withfudge.com/share/pin-7317)

[Behance Pro — jobs storytelling](https://design.withfudge.com/share/pin-7317)

[![Gallery — comment guidelines](https://pin.fontofweb.com/5277?format=jpg)](https://design.withfudge.com/share/pin-5277)

[Gallery — comment guidelines](https://design.withfudge.com/share/pin-5277)

## Colors

- `#0057ff`
- `#ffffff`
- `#191919`
- `#707070`
- `#696969`
