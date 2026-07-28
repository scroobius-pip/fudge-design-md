# How creem.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/creem.io-design)

Last updated: 2026-07-28

## Design character

Creem is a **playful merchant-of-record SaaS** that sells seriousness (global payments, tax, compliance) with **cartoon energy**. The marketing site is loud on purpose: a lavender hero field, ultra-heavy black display type, a wide-eyed mascot peeking from the bottom edge, and pastel product cards with thick ink outlines. Checkout flips the mood—clean white commerce chrome, amber primary pay button, and quiet gray type—so the money moment feels trustworthy after the playful pitch.

What should survive adaptation:

- **Mascot-led brand moments** on marketing surfaces, not inside the payment form.
- A **soft pastel canvas** (lavender / cream) paired with **near-black type** and one warm CTA.
- **Chunky outlined cards** and pills with hard black borders—illustration language, not glassmorphism.
- A deliberate **tone split**: expressive landing vs. restrained checkout.
- Short product chips and pill CTAs rather than long marketing paragraphs as the primary UI.

This is not a minimal fintech bank site. It is a **friendly global-commerce brand** that uses illustration and color blocks to make tax and payments feel approachable.

## Foundations

### Color

Measured roles:

| Role | Value | Where it shows |
| --- | --- | --- |
| Accent (marketing) | `#ffbe98` | Peach/coral “Get started” and warm highlights |
| Primary text (marketing) | `#151617` | Heavy headlines and body on pastel fields |
| Inverse / light | `#ffffff` | Secondary buttons, card fills, checkout canvas |
| Checkout primary text | `#111827` | Form labels and totals |
| Checkout secondary text | `#6b7280` | Helper copy, muted meta |

Visually (beyond measured roles):

- **Hero canvas**: saturated soft purple/lavender full-bleed field.
- **Section canvas**: warm off-white / cream behind support and MoR sections.
- **Feature cards**: solid pastel fills—lavender purple, peach, blue—with black outlines.
- **Checkout accent**: solid amber/gold primary “Pay” button and selected plan border; payment method selected state uses a matching gold ring.
- **Status / chips**: small green dots and soft green affiliate chip; lilac MoR chip.

Keep the system to **pastel blocks + black ink + one warm CTA**. Do not invent a large enterprise blue palette for marketing.

### Typography

Declared font families were not retained on these captures, so this guide does not name a proprietary face or licence. Measured and visible behavior:

- **Sans-serif** throughout.
- **Display**: very large, ultra-bold, tight leading—marketing hero around **~125px** optical size with line-height slightly tighter than the size; section heads around **48px** at weight 400–700 with tight 1.0 leading.
- **Body / UI**: **14–16px** at 400–500, line-heights ~20–28px; small labels **9–12px**.
- **Weight contrast**: marketing leans on heavy black display; UI chrome uses 600–700 for buttons and 400 for body.
- **Checkout**: more conventional scale—**24px** headings, **16–18px** emphasis, **14px** body, **12px** fine print.

Hierarchy reading: mascot-adjacent display lockup → section headline with optional colored word → body blurb → pill/button labels → form meta.

### Spacing and layout

Recurring measurements:

- Content gutters often **32px** horizontal; section stacks use **24–64px** vertical margins; some hero blocks push **80–112px** bottom padding.
- Card internal padding commonly **16–24px**; checkout fields **16px** padding with **8px** radii.
- Wide desktop marketing centers content with large side margins (~212px class on mid-width views).

Layout patterns:

- **Floating pill nav** over the hero (logo left, Product/Resources, Login outline + peach Get started).
- **Centered hero stack**: huge display type, short subtitle, agent/skill deep-link chip, dual CTAs, three feature chips, mascot rising from bottom.
- **Bento / split sections**: left copy + right illustrated card cluster (support channels); large solid MoR panel beside “zero tax” headline.
- **Checkout split**: product story + plan picker on the left; sticky-feeling payment card on the right (email, method, card fields, totals, full-width pay).

## Visual language

**Shape**

- Marketing cards and chips: **12–16px** rounded rectangles; some fully pill (**9999px**) for status/nav actions.
- Checkout controls: **6–8px** rounded inputs and buttons—tighter than marketing.
- Thick **black outer strokes** on illustrated cards (visually ~2–3px) give a sticker/comic finish.

**Borders and elevation**

- **1–3px solid** borders everywhere on chrome and cards.
- Shadows are sparse and often **hard offsets** (2–6px x/y, little or no blur)—sticker depth, not soft Material elevation.
- Checkout relies more on hairline borders and white cards on a cool gray page wash than on drop shadows.

**Imagery**

- Flat vector mascot (big eyes, ice-cream cone hat) is the brand anchor.
- UI-in-illustration cards (live chat, email, Discord) sit as mini product windows with soft fills.
- Product screenshots appear on checkout left rail when selling a specific SKU.

**Motion**

- Still frames only; do not invent parallax or hover choreography beyond obvious button affordances.

## Components and states

### Marketing navigation
Centered floating bar: wordmark, two dropdowns, outline Login, filled peach Get started with arrow.

### Dual CTAs
White filled “GET STARTED →” beside black “BOOK DEMO”. Equal visual weight, opposite fill.

### Feature chips
Small white rounded cards with colored icon tiles (purple shield, peach bolt, green people) and two-line labels.

### Illustrated support cards
Pastel tiles with black border, tiny status (“LIVE NOW”), embedded mini UI, short title + benefit line. Mascot can sit on the cluster edge.

### MoR panel
Large solid pastel rectangle, icon + title, giant “$0” price treatment, checklist rows.

### Checkout plan selector
Radio-style stacked plans; selected plan gets gold border + check; unselected stay neutral gray border.

### Payment form
Email field, Card vs Google Pay segmented choice (selected = gold outline), standard card fields, country select, order summary, full-width amber Pay button, security note, Creem MoR footer.

Visible states worth copying: **selected plan**, **selected pay method**, **primary vs secondary CTA pair**, **pill nav over color field**.

## Responsive behavior

- Desktop marketing (~1600–1700px) keeps wide centered hero and multi-card rows.
- Narrow marketing crop (~450px) still shows outlined cards and 12–16px radii—components compress rather than changing language.
- Checkout appears as a focused single-column form on smaller widths and a two-pane product+pay layout on wide desktop.
- Full mobile nav patterns are not fully established beyond the compressed marketing crop.

## Practical guidance

**Preserve**

1. Lavender/cream marketing canvases with black display type and one peach CTA.
2. Hard black outlines and hard-offset “sticker” shadows on feature cards.
3. Mascot and illustration only on marketing—not inside the payment card.
4. Checkout restraint: white surfaces, gray secondary text, single amber pay action.
5. Pill nav floating over the hero color field.
6. Dual opposite CTAs (light + dark) under the hero.

**Avoid**

1. Turning checkout into the same loud pastel playground—trust drops.
2. Soft multi-stop gradients and glass blur as the primary finish (this system is flat fills + ink).
3. Naming a UI font family from this guide—the captures did not retain declared families.
4. Overloading every section with the mascot; one strong appearance per scroll region is enough.
5. Enterprise navy/teal substitutions that erase the warm peach accent.

**Adaptation recipe**

- Pick one **pastel brand field**, one **warm CTA**, and **near-black ink**.
- Draw product benefits as **outlined pastel stickers**.
- Keep **commerce forms monochrome + single accent**.
- Let a simple character mark emotional tone on the landing only.

## Scope note

Studied from six captures on `creem.io`: multiple home viewport crops (hero, support/MoR mid-page, narrow) and checkout for a daisyUI Blueprint product at wide and narrow widths.

Supported well: marketing color blocks, display hierarchy, outlined card language, mascot role, checkout form anatomy, plan selection, pay CTA.

Not established: exact font family/licence, full motion, complete mobile navigation, and a tokenized spacing scale beyond the retained samples.

## Captured pages

[![Home hero — lavender field, mascot, dual CTAs](https://pin.fontofweb.com/7117?format=jpg)](https://design.withfudge.com/share/pin-7117)

[Home hero — lavender field, mascot, dual CTAs](https://design.withfudge.com/share/pin-7117)

[![Support + Merchant of Record section](https://pin.fontofweb.com/7118?format=jpg)](https://design.withfudge.com/share/pin-7118)

[Support + Merchant of Record section](https://design.withfudge.com/share/pin-7118)

[![Home upper marketing chrome](https://pin.fontofweb.com/7119?format=jpg)](https://design.withfudge.com/share/pin-7119)

[Home upper marketing chrome](https://design.withfudge.com/share/pin-7119)

[![Checkout — product + payment split](https://pin.fontofweb.com/6200?format=jpg)](https://design.withfudge.com/share/pin-6200)

[Checkout — product + payment split](https://design.withfudge.com/share/pin-6200)

[![Checkout narrow](https://pin.fontofweb.com/6201?format=jpg)](https://design.withfudge.com/share/pin-6201)

[Checkout narrow](https://design.withfudge.com/share/pin-6201)

[![Home narrow crop](https://pin.fontofweb.com/7116?format=jpg)](https://design.withfudge.com/share/pin-7116)

[Home narrow crop](https://design.withfudge.com/share/pin-7116)

## Colors

- `#ffbe98`
- `#151617`
- `#ffffff`
- `#111827`
- `#6b7280`
