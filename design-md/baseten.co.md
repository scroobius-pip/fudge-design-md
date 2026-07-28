# How baseten.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/baseten.co-design)

Last updated: 2026-07-28

## Design character

Baseten markets **production ML inference** with a calm, infrastructure-forward system: pure white (and soft mint-gray) canvases, near-black sans type, and a single electric **neon lime** brand signal. Product storytelling is carried by **isometric technical diagrams**—mint cubes, cylinders, dashed rings, metric chips—rather than photography. A hairline **blueprint grid** (dashed column/row guides) sits under heroes and feature bands, making the whole site feel like a precise engineering drawing, not a lifestyle brand.

What should survive adaptation:

- **One loud green** (`#10e86d` family) as the only full-bleed brand flash (top bar, diagram fills, status)
- **Black primary CTAs** and black display type on white—not green buttons everywhere
- **Isometric mint + magenta diagram language** for product explainer art
- **Dashed blueprint guides** and multi-column logo / feature grids
- **Quiet body copy** at 16/24 with tight, confident display headlines

## Foundations

### Color

Measured / clearly visible values from the marketing surfaces:

| Role | Hex | Where it shows |
|------|-----|----------------|
| Brand neon / announcement bar | `#10e86d` | Full-width top promo strip; diagram greens; status chip |
| Deeper diagram green | `#00b86c` / `#00e060` | Solid isometric volumes, gauge fills |
| Magenta accent | `#ffa8fe` | Diagram diamonds, “YOUR CLOUD” toggle pills |
| Canvas | `#ffffff` | Primary page background |
| Soft mint page band | `#f6f8f5` | Resource / testimonial sections |
| Ink | `#000000` | Wordmark, display type, filled CTAs, footer field |
| Muted UI chrome | `#e8e8e8`–`#c0c0c0` | Logo-wall marks, hairlines, secondary borders |
| Footer field | `#000000` | Dense link footer on pure black |

Relationships that matter:

- **Green is a signal, not a paint bucket.** The loudest green is the thin top bar and the product illustrations. Primary actions stay **black filled / white outlined**, so the brand never becomes a neon UI kit.
- **Pink is secondary sparkle** inside diagrams only—never body text or primary buttons.
- **Soft mint-gray bands** (`#f6f8f5`) separate long-scroll storytelling from pure white heroes without introducing a second brand color.
- **Footer inverts** to pure black with light gray link columns and a lime status pill (“ALL SYSTEMS NORMAL”), echoing ops dashboards.

### Typography

No declared webfont family is recorded for these captures; the face reads as a **modern geometric sans** with confident negative tracking on large sizes.

Observed hierarchy (approximate, from structured type samples):

| Role | Size / line-height | Weight | Tracking | Notes |
|------|--------------------|--------|----------|-------|
| Display hero (product) | ~64 / 70 | 600 | ≈ −1.92 | “Built for every stage…” scale moments |
| Large section title | ~48 / 60 | 600 | ≈ −1.44 | Feature / journey heads |
| Mid section title | ~32 / 44 | 400 | ≈ −1.28 | Card-cluster titles; home feature heads |
| Emphasized UI / card title | ~18 / 24 | 600 | 0 | Dense labels |
| Body / nav / links | 16 / 24 | 400 | 0 or ≈ −0.32 | Dominant text rhythm |
| Small meta | 14 / 18 | 400 | ≈ −0.28 | Captions, attribution |
| Micro | 12 / 16 | 400 | 0 | Rare chrome |

Patterns:

- **Display is tight and heavy**; body stays open at 16/24 so long infrastructure copy remains readable.
- **CTA and nav labels often render in uppercase** (“GET STARTED”, “LOG IN”, “LEARN MORE”) with arrow affordances—small caps energy without a true small-caps face.
- **Quotes use the same sans** at large body size; emphasis comes from scale and whitespace, not italics-as-brand.
- Category chips (“MODEL APIS”, “TRAINING”, “GUIDE”) sit above card titles in compact uppercase labels.

### Spacing and layout

Recurring padding measurements cluster around **8 · 16 · 24 · 32 · 40 · 44** px—not a polished token deck, but a clear density ladder:

- **16px** horizontal padding and small vertical rhythm on wide home frames
- **24px** all-around padding on mid-width home captures
- **32–40px** vertical section padding on product marketing bands
- **40px** box padding on dense product content blocks

Layout habits:

- **Centered content column** with visible **dashed blueprint guides** dividing hero copy | diagram, and slicing 2×2 / 3-up card grids.
- Home hero is a **split board**: left stacked headline + body + dual CTAs; right large isometric system diagram.
- Logo wall is a **strict multi-column grid** (about five across on wide frames) under the hero, light gray marks on white cells.
- Feature storytelling prefers a **2×2 card matrix** (title + short body + “LEARN MORE” pill + diagram).
- Journey / resources use a **3-up card row** on a mint band, each with category chip, title, body, outline button.
- Footer is a **wide multi-column link matrix** on black with logo + socials left, legal/compliance bottom-right.

## Visual language

### Blueprint structure

Dashed vertical and horizontal guides create a drafting-table feel behind heroes, cards, and testimonials. They are decorative structure—not form fields. Preserve the **light gray dashed line** language if you want the same “engineered” calm.

### Isometric product art

The brand’s image system is almost entirely **vector-isometric infrastructure**:

- Mint / neon green **cubes, stacked cylinders, pipes, and rings**
- Small **metric chips** (TPS, REQUEST/M, TTFT, REPLICA counts) as labeled tags
- **Magenta diamonds and soft pink toggles** as secondary nodes
- Occasional circular **brand-mark badges** (stylized “B” / rune) inside dashed rings
- Cloud-vendor glyphs treated as diagram nodes, not hero logos

Art sits on white or mint fields with generous negative space; it never fights black display type.

### Shape, border, chrome

- Cards and pills read as **slightly rounded rectangles** (soft, not bubbly); structured samples did not lock a single radius token.
- **1px solid borders** appear on product-page card chrome.
- Primary button: **filled black**, white label, trailing chevron.
- Secondary button: **white fill, light border, black label**, trailing chevron.
- Outline “LEARN MORE” / “EXPLORE RESOURCES” pills align to the secondary pattern.
- No heavy drop-shadow system—depth comes from **isometric drawing and flat layering**, not material elevation.

### Decorative bands

Between major sections, thin **horizontal collage strips** of green, pink, sage, and off-white blocks act as brand “ticker tape.” They echo the neon bar without repeating a full-bleed green field.

### Footer / ops tone

The black footer flips the light marketing system into an **ops console**: multi-column IA, social icons, compliance marks, and a lime **status chip**—a rare place where green returns as UI chrome rather than illustration fill.

## Components

### Announcement bar
Full-bleed `#10e86d` strip, single line of black (or near-black) promo copy plus underlined text link and chevron. Always the topmost chrome on light marketing pages.

### Global nav
Left wordmark (geometric mark + “baseten”). Center/right text links with simple dropdown carets (Product, Platform, Developer, Resources…). Trailing pair: outline **LOG IN** + filled **GET STARTED**. Sparse, high-contrast, no megamenu noise in the collapsed chrome.

### Hero
Large multi-line display headline (“Inference is everything”), short supporting paragraph, dual CTAs, optional right-rail isometric diagram. Blueprint guides frame the split.

### Logo wall
Equal cells, muted grayscale marks, multi-row grid—trust without color competition against the neon bar.

### Feature card (2×2)
Title + body left-aligned; small outline “LEARN MORE” control top-right of the text block; large isometric vignette below. Equal cells divided by dashed guides.

### Resource / journey card
Mint band background; category chip; title; 2–3 lines body; outline CTA. Three-up on wide viewports.

### Testimonial
Centered quote card on mint/white, company wordmark or avatar attribution, generous measure—no star ratings or carousel chrome in the captured frames.

### Status chip
Compact pill with lime dot + uppercase status on black footer (“ALL SYSTEMS NORMAL”).

### Footer IA
Logo + social row; labeled link columns (Product, Deployment options, Developer, Popular models, Legal…); copyright + compliance badges.

## Responsive behavior

Captures include wide home (~2048px) and mid home (~1287px) plus wide product frames (~2048px).

- The **same white + neon bar + black CTA system** holds across widths; mid-width home keeps the split hero and logo grid with tighter 24px padding.
- Product storytelling remains **card-and-band** driven; exact column collapse breakpoints are not instrumented beyond these viewports.
- Prefer **reflowing card grids and stacking the hero diagram under copy** over inventing a separate mobile brand.

## Practical guidance

**Do**

- Lead with **white space, black type, and one neon green signal**
- Use **isometric mint/pink diagrams** for product explanation instead of stock photos
- Keep primary actions **black filled**; reserve green for bar, art, and status
- Structure pages with **dashed blueprint guides** and even card matrices
- Hold body copy near **16/24**; tighten tracking only on large display
- Invert to **black footer** for IA density and ops cues

**Don’t**

- Turn the whole UI lime—green buttons + green backgrounds collapse the brand into a generic “AI green” template
- Replace isometric art with heavy photography or 3D skeuomorphism that fights the flat blueprint grid
- Introduce extra accent hues beyond **mint green + magenta sparkle**
- Over-round cards or add glamorous shadows; the system is flat, technical, and precise
- Loosen display tracking or pair a decorative serif—the voice is geometric and direct

## Scope note

This guide is based on marketing captures of **baseten.co** home (`/`) and the **Dedicated Inference** product page (`/products/dedicated-inference/`), including wide and mid home viewports plus product bands (hero/features, journey cards, testimonials, black footer). Structured color tokens were empty; hex values above come from screenshot measurement and clear on-image neutrals/accents. No declared font family or licence data was available—treat type as a modern geometric sans matched by eye. App/console UI is out of scope.

## Captured pages

[![Home — neon bar + inference hero](https://pin.fontofweb.com/9008?format=jpg)](https://design.withfudge.com/share/pin-9008)

[Home — neon bar + inference hero](https://design.withfudge.com/share/pin-9008)

[![Home — 2×2 feature grid](https://pin.fontofweb.com/9324?format=jpg)](https://design.withfudge.com/share/pin-9324)

[Home — 2×2 feature grid](https://design.withfudge.com/share/pin-9324)

[![Dedicated Inference — journey cards](https://pin.fontofweb.com/9326?format=jpg)](https://design.withfudge.com/share/pin-9326)

[Dedicated Inference — journey cards](https://design.withfudge.com/share/pin-9326)

[![Dedicated Inference — quote + green strip](https://pin.fontofweb.com/9325?format=jpg)](https://design.withfudge.com/share/pin-9325)

[Dedicated Inference — quote + green strip](https://design.withfudge.com/share/pin-9325)

[![Site footer — black IA matrix](https://pin.fontofweb.com/9328?format=jpg)](https://design.withfudge.com/share/pin-9328)

[Site footer — black IA matrix](https://design.withfudge.com/share/pin-9328)

## Colors

- `#10e86d`
- `#00b86c`
- `#00e060`
- `#ffa8fe`
- `#ffffff`
- `#f6f8f5`
- `#000000`
- `#c0c0c0`
- `#e8e8e8`
