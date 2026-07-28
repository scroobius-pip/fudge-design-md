# How hermes4.nousresearch.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/hermes4.nousresearch.com-design)

Last updated: 2026-07-28

## Design character

Hermes 4 (hermes4.nousresearch.com) is a **research-lab model showcase** staged as a split-screen observatory: left rail of monospace system-prompt documentation, right stage a **deep-space neural constellation** with floating chat theater. The mood is black-void, cinematic, and slightly hostile-intellectual — magenta or amber filament graphs, white role chips, and translucent message bubbles that read like intercepted transmissions.

What should survive adaptation:

- **True black void canvas** with almost no chrome
- **Constellation visualization** as hero art (magenta/pink or amber/orange filament webs with bright nodes)
- **Split composition**: editorial prompt docs left, generative graph + chat right
- **White rectangular role labels** (`USER`, `HERMES 4`) against the void
- **Dark translucent message bubbles** with small corner glyphs
- **Monospace / technical UI type** at a dominant 14px, wide-tracked section labels
- Prompt samples that feel like **operator manuals**, not marketing slogans

## Foundations

### Color

Structured color rows were empty. Palette below is read from four homepage pins spanning two constellation moods.

| Role | Hex (approx.) | Where it shows |
| --- | --- | --- |
| Void canvas | `#000000`–`#050505` | Full bleed behind graph and docs |
| Primary text (docs) | `#d8d8d8`–`#e8e8e8` | Left-rail body, headings |
| Mute / prompt meta | `#8a8a8a`–`#a0a0a0` | “SYSTEM PROMPT”, secondary lines |
| Role chip fill | `#ffffff` | `USER`, `HERMES 4` labels |
| Role chip text | `#0a0a0a` | Text inside white chips |
| Bubble surface | `#0c0c0c`–`#141414` @ high opacity | Chat messages over the graph |
| Bubble text | `#e6e6e6` | Message copy |
| Graph — magenta mode | `#ff2d6a`–`#c41e6a` filaments, hot white nodes | CoT / sycophancy scenes |
| Graph — amber mode | `#ff8a1a`–`#e85d04` filaments, white-hot cores | Casual DM scenes |
| Node glow | near-white with colored bloom | Bright graph vertices |
| Accent tags in graph | dim gold/gray micro-labels | `cots`, `evals`, `hermes`, `nous_chat` |

Relationships that matter:

- **One graph hue family per scene** (magenta *or* amber), never a rainbow mesh.
- **White chips are the only hard UI rectangles** floating in the void — they anchor reading order.
- Left rail stays **neutral gray type on black** so the right stage owns all chroma.
- Bubbles stay darker than the brightest filaments so type remains legible over the graph.

### Typography

No family names recorded. Visual + structured read:

- **UI/docs:** monospaced or mono-adjacent grotesque at small sizes (terminal/lab manual feel)
- **Section labels:** wide letter-spacing uppercase (e.g. `CHAIN OF THOUGHT`)
- **Chat body:** same 14px family as docs for continuity

Structured ladder (aggregated):

| Role | Weight | Size | Line height | Tracking | Notes |
| --- | --- | --- | --- | --- | --- |
| Display label | 700 | 26.25px | 26.25px | 0 | Sparse large labels (n small) |
| Body / chat / docs | 400 | 14px | 19.6px (also 22.75, 35) | 0 | Dominates every pin (n≈2700+) |
| Strong UI | 700–900 | 14px | 14px | 0–0.91 | Emphasized labels inside bubbles |
| Wide-track label | 800 | 14px | 14px | **+6.16** | All-caps section chips |
| Micro | 700 | 12.25px | 17.5px | +0.61 | Secondary tags |
| Fine print | 400 | 10.5px | 14px | +0.53 | Rare captions |

Patterns:

- **One size does almost everything (14px)**; hierarchy is weight, tracking, and placement.
- Positive tracking on labels makes the lab/OS aesthetic; body stays neutral.
- Long line-heights (35px) appear where chat or docs need air over the graph.

### Spacing and layout

- Ubiquitous **7px** padding on compact controls/chips (very high counts)
- **52.5px** right padding and vertical section padding on larger blocks
- **10.5px** and **14px** vertical margins for stack rhythm
- Occasional **~517px** left margin — consistent with a **fixed left documentation column** beside the stage
- Composition is **asymmetric split**: ~35–40% docs / ~60–65% visualization in the pins
- Graph is full-bleed within its pane; chat bubbles **float** at uneven depths, not a strict messenger column

## Visual language

- **No recorded radii or borders** — chips and bubbles read as sharp or barely-rounded rectangles; do not impose a 16px card system.
- **No CSS shadows recorded**; depth comes from **graph glow**, bubble opacity, and z-layering over the constellation.
- **Imagery = generative network art**, not photography. Filaments, particles, and bright singularities are the brand illustration language.
- Micro text annotations (`cots`, `evals`, `hermes`) sit *in* the graph like debug overlays.
- Still captures only — no motion tokens; the graph implies slow drift but that is interpretation.

## Components and states

1. **Left documentation rail** — title, short abstract, named scenario (e.g. Sycophancy, Casual DM), `SYSTEM PROMPT` block in mono.
2. **Constellation stage** — full-pane graph with colored filaments and labeled nodes.
3. **Role chip** — solid white rectangle, black uppercase/label text, sits near a bubble cluster.
4. **Thinking bubble** — dark panel with small brand glyph + long internal monologue.
5. **Speech bubble** — tighter dark panel for spoken lines; may include numbered lists or stage directions in asterisks.
6. **Graph micro-tags** — tiny dim labels anchored to regions of the mesh.

States are narrative (user vs model turns), not UI hover states.

## Responsive behavior

All four pins are **1712×1314** desktop viewports of `/`. Only one width is evidenced. Keep the split-rail + stage as the canonical desktop layout; do not invent mobile stacking from this set.

## Practical guidance

**Preserve**

- Black void + single-hue constellation + white role chips
- Split lab-manual / generative-stage composition
- 14px mono-technical type with wide-tracked labels
- Dark translucent chat over the graph, never a solid white messenger
- Scenario pages that pair a named prompt study with a live-looking CoT theater

**Avoid**

- SaaS marketing gradients, soft gray cards, or friendly blue CTAs
- Multi-color rainbow graphs that dilute the magenta-or-amber scene rule
- Large serif marketing display type
- Heavy drop shadows or neumorphic bubbles
- Crowding the left rail with navigation chrome — docs should feel like a dossier

## Evidence scope

Four viewport captures of `hermes4.nousresearch.com/` (pins `7872`, `7871`, `7870`, `7869`). Structured evidence covers text styles and spacing only; colors, radii, borders, shadows, fonts, and gradients were unsupported/empty and are supplied from pin inspection. Use for research-model marketing and CoT visualization patterns; not for authenticated app chrome or mobile layout.

## Captured pages

[![CoT — magenta constellation](https://pin.fontofweb.com/7872?format=jpg)](https://design.withfudge.com/share/pin-7872)

[CoT — magenta constellation](https://design.withfudge.com/share/pin-7872)

[![Sycophancy scenario](https://pin.fontofweb.com/7871?format=jpg)](https://design.withfudge.com/share/pin-7871)

[Sycophancy scenario](https://design.withfudge.com/share/pin-7871)

[![Casual DM — amber graph](https://pin.fontofweb.com/7870?format=jpg)](https://design.withfudge.com/share/pin-7870)

[Casual DM — amber graph](https://design.withfudge.com/share/pin-7870)

[![Chain of Thought overview](https://pin.fontofweb.com/7869?format=jpg)](https://design.withfudge.com/share/pin-7869)

[Chain of Thought overview](https://design.withfudge.com/share/pin-7869)

## Colors

- `#000000`
- `#050505`
- `#141414`
- `#e8e8e8`
- `#8a8a8a`
- `#ffffff`
- `#0a0a0a`
- `#ff2d6a`
- `#c41e6a`
- `#ff8a1a`
- `#e85d04`
