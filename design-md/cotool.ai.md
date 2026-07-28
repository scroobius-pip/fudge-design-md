# How cotool.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cotool.ai-design)

Last updated: 2026-07-28

## Design character

Cotool is a calm, high-clarity security-product marketing system: cool light-gray canvas, near-black sans display type, a single saturated royal-blue action color, and product UI framed as soft floating cards over pale blue stages. It sells agentic detection without cyber-noir drama—no neon greens, no terminal grit. The brand mark is a small multicolor pixel cluster; everything else stays monochrome plus blue.

What should survive adaptation:

- Light cool canvas (soft gray, not pure white) with generous breathing room
- One loud **royal blue** for primary CTAs and product accent chips
- Large, slightly tight display headlines (roughly 36–64px) with short body at 16px
- Product chrome as white cards / dark tool panels staged on pale blue fields
- Small radii (~4–7px) and restrained chrome—not soft consumer bubbles

## Foundations

### Color

Structured role colors were not captured; the system is clear from the pages:

- **Canvas**: cool light gray behind the marketing frame; pure white for cards and nav bar
- **Ink**: near-black for headlines and body
- **Primary action**: solid royal blue pills (“Book a demo →”) in nav and hero
- **Product stage**: soft sky-blue panels with white particle / graph motifs
- **Status**: blue dots for Active; muted chips for schedule (Hourly / Weekly); severity as text + small icons
- **Trust row**: monochrome partner marks on the light field

Keep blue as the only saturated marketing color. Reserve greens/reds for in-product severity if needed; marketing stays blue + gray + black.

### Typography

Declared font families were not available. Observed hierarchy (sans throughout):

| Role | Approx size | Weight | Notes |
|------|-------------|--------|--------|
| Display / hero | 36–64px | ~400–450 | Slight negative tracking on large lines |
| Section title | 40–48px | ~450 | Tight line-height (~1.1) |
| Subhead | 20–28px | 400–450 | Supporting claims |
| Body / UI label | 14–16px | 400–450 | ~1.3 line-height on 16px |
| Meta / chips | 11–14px | 400 | Dense product chrome |

Body is medium-weight and compact (16 / 20.8). Display is large but not ultra-black—weight stays around book/medium rather than 800+.

### Spacing and layout

- Wide content gutters: horizontal margins often ~140–290px on large viewports; sections feel centered and airy
- Section vertical padding clusters around 60–94px; some blocks use ~80px top/bottom
- Nav is a thin white bar: logo left, text links, blue CTA right
- Hero stacks left-aligned copy above a full-width product stage
- Product mock cards sit centered on the blue stage with internal 12–20px padding
- Corner radius is consistently small: **4px** common on chips/cards, ~7px on a few controls

Do not invent a full spacing token scale—use large section air + tight internal product density.

## Visual language

- **Shape**: slightly rounded rectangles; status pills and CTA capsules; no heavy skeuomorphism
- **Borders / shadows**: marketing relies more on flat white-on-gray and white-on-blue than deep shadows; product panels read as soft elevated cards
- **Imagery**: abstract particle fields, network dots, and realistic dark-mode detection UI screenshots—not stock photos of people
- **Logo**: wordmark + multicolor grid mark; keep the mark small in nav
- **Motion**: not established from stills

## Components and states

Recurring pieces:

1. **Top nav** — white strip, sparse links, blue “Book a demo” pill with arrow
2. **Hero claim** — multi-line display with optional blue highlight on a key word (e.g. “Detect” in a soft blue chip)
3. **Primary CTA** — solid blue rounded button, often with →
4. **Logo cloud** — “Loved by teams at:” + muted marks
5. **Product stage** — pale blue full-bleed panel hosting white dual-column agent cards (metrics, Active chip, severity)
6. **Split feature blocks** — left typography (“Agentic Detections”), right dark tool UI (Recent Detection Runs / Detection Output)
7. **About / team narrative** — same light system, long-form sections with large display openers

Visible states in product chrome: Active (blue dot), schedule chips, High / Critical severity labels. Do not invent hover/focus behavior beyond what stills show.

## Responsive behavior

Captures span roughly 1240–1712px wide viewports. Narrower crops keep the same hierarchy (nav + claim + stage) with reduced side margins and slightly smaller display type (~36–48px). Mobile-specific breakpoints were not captured in depth—treat the system as desktop-first marketing with fluid gutters.

## Practical guidance

**Preserve**

- Cool gray marketing canvas + white cards + one royal blue CTA
- Product UI as the hero art (cards and dark panels), not illustration mascots
- Compact 16px body against oversized but medium-weight headlines
- Small radii and calm spacing—enterprise quiet, not startup loud

**Avoid**

- Cyberpunk neon, red alert walls, or busy mesh gradients on the marketing canvas
- Turning every surface blue; blue is for actions and accents only
- Soft 24px+ consumer radii or heavy drop shadows on every card
- Mixing in a second accent family (orange/purple) for primary actions

**Adaptation**

- Rebuild nav + hero + product stage first; secondary pages (About, Detect) reuse the same type ramp and blue CTA
- For a design system, tokens can be: `canvas`, `surface`, `ink`, `action`, `stage-blue`, `radius-sm` (~4px)

## Scope note

Studied Cotool captures across `/`, `/about`, and `/detect` (multiple viewport widths). Declared font families and measured semantic color roles were not available—color notes above are from visual reading of the screenshots. Motion, dark-mode marketing, and fine interaction states are out of scope.

## Captured pages

[![Home — hero claim and demo CTA](https://pin.fontofweb.com/8601?format=jpg)](https://design.withfudge.com/share/pin-8601)

[Home — hero claim and demo CTA](https://design.withfudge.com/share/pin-8601)

[![Home — mid sections](https://pin.fontofweb.com/8602?format=jpg)](https://design.withfudge.com/share/pin-8602)

[Home — mid sections](https://design.withfudge.com/share/pin-8602)

[![Detect — product hero](https://pin.fontofweb.com/8605?format=jpg)](https://design.withfudge.com/share/pin-8605)

[Detect — product hero](https://design.withfudge.com/share/pin-8605)

[![Detect — desktop deep view](https://pin.fontofweb.com/8606?format=jpg)](https://design.withfudge.com/share/pin-8606)

[Detect — desktop deep view](https://design.withfudge.com/share/pin-8606)

[![About](https://pin.fontofweb.com/8608?format=jpg)](https://design.withfudge.com/share/pin-8608)

[About](https://design.withfudge.com/share/pin-8608)

[![Home — wide short crop](https://pin.fontofweb.com/8604?format=jpg)](https://design.withfudge.com/share/pin-8604)

[Home — wide short crop](https://design.withfudge.com/share/pin-8604)
