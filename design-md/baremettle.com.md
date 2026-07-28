# How baremettle.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/baremettle.com-design)

Last updated: 2026-07-28

## Design character

Bare Mettle’s captured surface is **not a marketing site**—it is the **official forums** (Coffee Diary), dressed like a dark game-studio shell around a classic forum product. The mood is quiet, nocturnal, and slightly industrial: deep black atmospheric art behind the chrome, charcoal toolbars, near-black content cards, and restrained light-gray type. The only loud brand move in the UI is a **moss-green primary button** for Register; everything else stays monochrome and low-contrast so thread lists stay scannable.

What should survive adaptation:

- Near-black canvas and stacked charcoal surfaces, not pure SaaS slate-blue dark mode.
- One green CTA against otherwise gray UI chrome.
- Forum density: compact rows, small radii, thin hairline structure, muted section labels.
- Game-studio framing (top site nav + wordmark) sitting *above* forum chrome, then forum tools, then the thread list.

## Foundations

### Color

No structured palette was recorded for this domain. Colors below are **screenshot-sampled** from the Coffee Diary forum captures and should be treated as observed UI paint, not a formal token set.

| Role (interpreted) | Hex | Where it shows |
| --- | --- | --- |
| Page / void | `#000000` | Outer canvas and deep footer field |
| Atmospheric side wash | `#191c23` | Dim blue-black edge of the background art |
| Primary content surface | `#0a0b0d` – `#111111` | Forum / title panels and thread rows |
| Raised chrome | `#313131` – `#4f4f4d` | Sub-nav and top site bars (slightly warm charcoal) |
| Breadcrumb / secondary bar | `#0c0d11` | Path strip under forum tools |
| Section rail | `#3f3f3f` / `#404040` | “STICKY THREADS” / “REGULAR THREADS” label bands |
| Body / title text | `#d6d6d6` – `#f8f8f8` (cluster around `#d6d8d7`) | “COFFEE DIARY”, thread titles |
| Muted meta | `#b0b0b0` – `#707070` | Pagination digits, authors, secondary labels |
| Primary CTA fill | `#68af51` | Register button |
| CTA label | `#ffffff` | Text on Register |
| Pure white accents | `#ffffff` | Sparse UI glyphs / copyright line |

Relationships that matter:

- **Hierarchy is value, not hue.** Almost every surface is a step of black→charcoal; green is reserved for the one acquisition action.
- Text never goes pure white on large body blocks—titles sit in soft light gray so they don’t bloom on the near-black cards.
- Background art is desaturated forest/stone; UI panels are flatter and darker so the list remains legible over the scene.

### Typography

No declared font families were available for this domain, so treat type as **system / forum-default sans** rather than a branded stack.

Observed hierarchy (visual):

- **Site nav (studio shell):** wide-tracked uppercase labels (`HOME`, `GAMES`, `MEDIA`, `STORE`, `FORUMS`) in a light metal gray, centered, with thin horizontal rules framing the bar—more “game portal header” than product app nav.
- **Forum tool labels:** sentence or title case in the secondary bar (`Forums`, `What's new`, `Members`, `Log in`) at a compact UI size; active section does not scream with color.
- **Board title:** `COFFEE DIARY` in large, wide-tracked uppercase light gray; subtitle underneath in smaller, dimmer gray (“Weekly or frequent updates on development.”).
- **Thread titles:** medium-weight sans, light gray on black rows—the primary scan line.
- **Meta:** much quieter—author · timestamp, `Replies` / `Views` labels, relative dates—smaller and mid-gray.
- **Section labels:** all-caps, low-contrast gray on the charcoal rail (`STICKY THREADS`, `REGULAR THREADS`).
- **Wordmark (footer):** custom white gothic/brush logotype “Bare Mettle” with a tiny subtitle line—brand moment isolated from the forum UI type.

Practical type rules: keep display moments (board title, site nav) wide and airy; keep the thread list tight and utilitarian. Do not introduce a second display family inside the list.

### Spacing and layout

Recorded spacing is dense forum chrome, not a marketing scale:

- **Common padding:** ~**9–12px** vertical/horizontal on the main list capture; footer capture also shows **10px** and **15px** padding clusters.
- **Panel gutters:** **12px** and **20px** horizontal padding appear on larger blocks.
- **Row rhythm:** thread rows feel like a single compact band (avatar + title stack + stats + last activity), with small vertical separation rather than card gaps.
- **Page structure (top → bottom):** studio nav → forum utility bar (search/menus/auth) → breadcrumb + utility icons → board header card → pagination → filters + sticky/regular lists.
- **Width:** content is a centered column over full-bleed dark art; large side margins (~370px recorded on the wide viewport) keep the list readable on desktop.
- **Footer capture:** utility strip, thin-ruled site links, centered wordmark, copyright—generous vertical black field, not a dense multi-column footer.

Do not invent an 8pt token ladder; preserve **compact internal padding** and **wide outer margins**.

## Visual language

- **Shape:** small radii dominate—about **4px** (and occasional **3px**). Controls feel slightly rounded, never pill-like except where a default forum control already is.
- **Borders:** sparse **1px solid** edges; structure comes more from stacked value changes (black on black) than outlined boxes. Thin double rules frame the studio link row in the footer.
- **Depth:** no meaningful shadow or gradient system recorded. Depth is painted background art + flat stacked panels.
- **Imagery:** full-bleed, muted environmental plate behind the UI; circular avatar thumbs (character art or initials) on every thread row.
- **Iconography:** small monochrome glyphs in the forum bar (search, menus, theme toggle); a tiny amber/gold RSS mark appears in the footer utility strip.
- **Texture:** top bars read slightly metallic/grainy charcoal rather than flat CSS gray—keep chrome a hair warmer and noisier than pure `#333` if you restyle.

## Components

### Studio shell

Centered uppercase game-site nav with hairline rules; active item (`FORUMS`) sits in the same family as siblings—emphasis is position/weight, not a bright pill.

### Forum utility bar

Dark rounded strip: left dropdown cluster (Forums / What’s new / Members), right cluster with text **Log in**, filled **Register**, theme toggle, and search. Register is the sole green filled control; Log in stays ghost/text.

### Breadcrumb strip

Full-width dark bar with chevron path (`Forums › Official Forums`) and a short icon button group on the right—lower contrast than the utility bar above it.

### Board header

Single dark card: large uppercase board name, one-line description. No hero illustration inside the card; the environment art stays outside.

### Pagination

Compact dark chips (`1` `2` `3` `…` `12` `Next ›`). Active page is a light-on-dark contrast flip within the same small footprint—not a large filled brand button.

### Thread list

- Section rails label sticky vs regular.
- Each row: circular avatar | title + author/time stack | reply/view stats | last activity + avatar.
- Sticky row can carry a small pin glyph; otherwise rows are visually identical bands on `#111`.
- “Filters” sits as a quiet text control on the list header, right-aligned.

### Auth CTA

**Register** = moss green (`#68af51`) rectangle, ~4px radius, white label. Do not multiply this green across links or nav.

### Footer brand block

Utility links in mid charcoal, then lots of black air, then the white calligraphic wordmark and a single copyright line in light type.

## Responsive behavior

Only wide desktop viewports (~1700×1314 and a short footer strip) were captured. No mobile or breakpoint behavior can be claimed. Assume the system is documented here as a **desktop forum layout** only.

## Practical guidance

**Preserve**

1. Near-black stack + one green CTA; resist multicolor forum badges.
2. Soft light-gray titles on black rows (not pure white body type).
3. Compact 9–12px internal padding and small 3–4px radii.
4. Clear separation: studio nav shell → forum chrome → board content.
5. Atmospheric full-bleed art behind flatter UI panels.

**Avoid**

1. Turning this into a bright marketing landing—the captures are forum UI.
2. Inventing a large type scale or custom font story without new evidence.
3. Heavy shadows, glassmorphism, or large rounded cards that break the XenForo-like density.
4. Spreading the Register green into links, pagination, or section headers.
5. Assuming homepage / store / media pages match this system—they were not in scope.

## Scope note

Based on two captures of **Coffee Diary | Bare Mettle Forums** (`/forums/index.php`): the main thread index (pin 6253) and the lower utility/footer band (pin 6254). This guide describes the **official forums skin only**, not the broader baremettle.com marketing or store experience. Color values are screenshot-measured; fonts were not declared in the available data.

## Captured pages

[![Coffee Diary — thread index](https://pin.fontofweb.com/6253?format=jpg)](https://design.withfudge.com/share/pin-6253)

[Coffee Diary — thread index](https://design.withfudge.com/share/pin-6253)

[![Coffee Diary — footer shell](https://pin.fontofweb.com/6254?format=jpg)](https://design.withfudge.com/share/pin-6254)

[Coffee Diary — footer shell](https://design.withfudge.com/share/pin-6254)

## Colors

- `#000000`
- `#0a0b0d`
- `#111111`
- `#191c23`
- `#313131`
- `#404040`
- `#4f4f4d`
- `#68af51`
- `#b0b0b0`
- `#d6d8d7`
- `#ffffff`
