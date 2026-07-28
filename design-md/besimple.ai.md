# How besimple.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/besimple.ai-design)

Last updated: 2026-07-28

## Design character

Besimple is a calm, editorial marketing site for licensed voice-AI audio data. The canvas is a warm off-white / light stone field, not pure white. Headlines are large **serif** display type in near-black; body and chrome stay muted warm gray. The brand mark is a simple orange fruit with a green leaf — and that same citrus orange is the only loud accent on the page.

What should survive adaptation:

- **Warm light canvas** (paper/stone, not cold white)
- **Serif display + quieter sans UI** pairing
- **Orange accent** (`#ff6533`) for brand, stats, labels, and illustration fills
- **Black primary CTAs** with a small orange grid icon — not orange-filled buttons
- **Generous empty space** and centered hero claims
- **Flat surfaces**, 1px borders, tiny radii (2–4px) — almost no shadow

## Foundations

### Color

Measured roles:

| Role | Hex | Use |
|------|-----|-----|
| Accent | `#ff6533` | Logo fruit, YC badge dot, section labels (“BENCHMARK REPORT”), “Besimple Approach” titles, big stats (68.7%), “SPOKEN” chips, waveform/pixel art fills, secondary text links on dark-free chrome |
| Text primary | `#252322` | Display headlines, primary body, nav labels |
| Text secondary | `#5d5852` | Subheads, muted comparisons (“Traditional Approach”), supporting copy |

Visually consistent companions (not in the measured unique set, but clear on screens):

- **Canvas** — warm light beige/stone behind hero and sections
- **Chrome bar** — white / near-white top nav strip
- **Primary button fill** — near-black (`#0a0a0a`–`#1a1a1a` family) with white label
- **Secondary button / chip fill** — soft warm gray pill on the same canvas
- **Leaf green** — only on the fruit mark and the footer sprout illustration (supporting brand art, not a second UI accent system)

Rules of the palette:

1. Orange is the *signal* color — labels, emphasis titles, data callouts, decorative audio graphics.
2. Actions that convert (“Book a Demo”) sit on **black**, with orange only as the tiny grid glyph beside the label.
3. Never flood large surfaces with orange; keep it as punctuation on the warm field.

### Typography

No declared webfont family was captured; treat stacks as **unknown** and match the *roles*:

- **Display / H1** — serif, weight ~400, ~46–64px, tight-to-solid line height (e.g. 62/62, 64/64, 46/48.76). Centered on marketing heroes (“Licensed Audio Data for Voice AI Models”); left-aligned on article titles.
- **Section titles** — same serif family at large size (“Why Besimple”, “Ready to turbo-charge your voice AI?”).
- **Body** — ~16px regular; blog/article denser runs at 16 with lighter 18/27.36 for lead paragraphs. Secondary tone uses the warm gray.
- **UI / nav / chips** — ~13–14px, regular weight, sans-like proportions in the chrome and pill tabs.
- **Eyebrow / category** — small caps-feeling labels in orange (e.g. “BENCHMARK REPORT”) or uppercase section tags (“PROBLEM”, “WER”).
- **Stat callout** — oversized orange numerals (~display scale) inside bordered cards.

Hierarchy is serif-forward and editorial: one huge claim, one quiet subline, then controls. Avoid heavy black sans display; the warmth comes from the serif on stone.

### Spacing and layout

Recurring structure:

- **Horizontal inset** ~40px on section shells; wide desktop content often sits with large side margins (~90–230px effective centering).
- **Section vertical rhythm** is airy: ~92–130px top padding on major blocks; blog content uses ~46–52px between stacked blocks.
- **Hero** is vertically centered emptiness — claim, subcopy, dual CTAs, then a full-bleed orange pixel-waveform along the bottom edge.
- **Comparison band** (“Why Besimple”) is a three-column idea: muted left copy, center waveform graphic, orange-titled right copy.
- **Article layout** mixes a left narrative column with a right bordered metric card; below, pill tab rows and bordered token tables.

Density stays low. Prefer more whitespace over tighter SaaS dashboards.

## Visual language

- **Surfaces**: solid warm backgrounds; white floating nav capsule; white cards with **1px solid borders** and **3–4px radii** (occasionally 2px). No drop-shadow language in captures.
- **Nav**: white bar with orange fruit mark left, text links center, black “Book a Demo” right — often reading as a rounded capsule over the page.
- **Illustration system**:
  - Bottom hero: rounded-square **pixel waveform** in orange tints (brand signature).
  - Mid-page: continuous **audio waveform** half gray / half orange (old vs new).
  - Footer: soft orange bar chart rising into a green sprout.
- **Chips & pills**: light gray filled rounded rectangles for secondary actions, section jump links, and “Backed by Y Combinator”.
- **Tables / token rows**: full-width bordered rows; left “SPOKEN” in orange micro-label; monospace-feeling values; muted “transcribed as …” notes.

The overall effect is **quiet research lab + citrus brand**, not neon AI chrome.

## Components

### Primary button
Near-black fill, white label, small orange 2×2/grid icon leading the text, ~4px radius. Used for “Book a Demo” and “View Benchmark Page”.

### Secondary button
Light warm-gray fill, dark label, same small radius — “Explore our data”, “Open Hugging Face”.

### Nav
Minimal text links + one primary CTA. Logo is the orange only (no wordmark required in chrome).

### Eyebrow + title + lead
Orange small label → serif H1 → gray body → button row. Reused on blog/report heroes.

### Metric card
1px-bordered white panel: quiet caption, huge orange percentage, model name, short helper text.

### Pill tab row
Horizontal light pills (“Problem”, “Results”, …) with a separate orange-outline/text control (“Benchmark dashboard”) on the trailing edge.

### Footer band
Soft stone panel; link pills; legal microcopy; brand illustration anchored bottom-right.

### Comparison split
Two text columns flanking a brand graphic; left intentionally de-emphasized (secondary gray), right titled in accent orange.

## Responsive notes

Captures are wide section crops (~1625–1712px). Patterns that should hold when narrowing:

- Keep the **centered hero stack** (badge → serif title → subcopy → dual CTAs).
- Allow the **pixel waveform** to crop or scale as a full-width footer graphic rather than reflowing into the copy.
- Stack the **Why Besimple** three-part band (copy / wave / copy) vertically while preserving orange vs muted title contrast.
- Article: stack metric card under the title block; keep pill tabs scrollable or wrapping.

Exact breakpoints were not measured.

## Practical guidance

**Do**

- Lead with one serif sentence on a warm field.
- Use orange for emphasis, data, and brand art — not as the primary button fill.
- Pair black CTA + light secondary side by side.
- Keep radii tiny and borders 1px; skip heavy shadows and gradients.
- Let audio metaphors (waveforms, pixel EQ, bars) carry the product story.

**Don’t**

- Swap the canvas to pure cool white or dark mode without redesigning the orange relationships.
- Make primary buttons solid orange (that fights the black-CTA + orange-glyph system).
- Introduce a second loud accent (blues/purples) for UI state.
- Crowd the hero; emptiness is part of the brand.
- Replace serif display with generic bold sans — the editorial voice collapses.

## Scope note

Guide drawn from five wide section captures on `besimple.ai`: home hero (9798, 9799), home “Why Besimple” and closing CTA/footer bands (9801, 9800), and the Voice Code Bench article/report (9802). Font family names and licences were not declared in capture data; color roles above mix measured hexes with clearly visible neutrals on screenshots. Motion and small-viewport behavior were not recorded.

## Captured pages

[![Home — hero and pixel waveform](https://pin.fontofweb.com/9798?format=jpg)](https://design.withfudge.com/share/pin-9798)

[Home — hero and pixel waveform](https://design.withfudge.com/share/pin-9798)

[![Home — hero crop](https://pin.fontofweb.com/9799?format=jpg)](https://design.withfudge.com/share/pin-9799)

[Home — hero crop](https://design.withfudge.com/share/pin-9799)

[![Home — Why Besimple split](https://pin.fontofweb.com/9801?format=jpg)](https://design.withfudge.com/share/pin-9801)

[Home — Why Besimple split](https://design.withfudge.com/share/pin-9801)

[![Home — closing CTA and footer](https://pin.fontofweb.com/9800?format=jpg)](https://design.withfudge.com/share/pin-9800)

[Home — closing CTA and footer](https://design.withfudge.com/share/pin-9800)

[![Blog — Voice Code Bench report](https://pin.fontofweb.com/9802?format=jpg)](https://design.withfudge.com/share/pin-9802)

[Blog — Voice Code Bench report](https://design.withfudge.com/share/pin-9802)

## Colors

- `#ff6533`
- `#252322`
- `#5d5852`
- `#f5f2ec`
- `#0a0a0a`
- `#ffffff`
