# How app.flora.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.flora.ai-design)

Last updated: 2026-07-28

## Design character

FLORA is a **dark, canvas-first creative OS** for generative workflows. The product feels like a calm production studio: near-black surfaces, soft layered panels, and very little chrome competing with the node graph. Personality shows up in rounded cards, subtle elevation, and a few precise accents (blue primary, green live status)—not in loud decoration.

What should survive adaptation:

- A **charcoal operating environment** where content and nodes float above the void.
- **Soft geometry**: 8–12px radii on cards, full pills for compact controls.
- **Quiet hierarchy**: white primary text, muted gray secondary, one clear primary action color.
- **Tooling that recedes**: thin rails, icon buttons, and floating bars that never dominate the canvas.

## Foundations

### Color

Observed roles and surfaces from the product UI:

| Role | Value | Use |
| --- | --- | --- |
| Canvas / app ground | near-black charcoal (~`#0b0b0c`–`#121214`) | Full-bleed workspace background |
| Elevated surface | dark gray (~`#161618`–`#1c1c1f`) | Modals, node cards, side panels |
| Hairline / edge | slightly lighter charcoal (~`#2a2a2e`) | Card borders, separators |
| Text primary | `#ffffff` | Titles, key labels, selected UI |
| Text secondary | `#8c8c8c` | Meta, placeholders, idle icons |
| Primary action | vivid blue (~`#3b82f6`) | Create / confirm buttons |
| Live / success | green (~`#22c55e`) | Online/presence dots |

The system is intentionally **limited and muted**. Color is reserved for status and the single primary CTA; everything else stays neutral so generated imagery and node previews can carry the emotion.

### Typography

Declared font families were not captured. Visually and by measured styles, type is a clean **UI sans** with:

- Body / dense UI: **16px / 24px**, weight 400 (dominant)
- Compact labels: **14px** at ~19px line-height, often with slight negative tracking (~-0.32px)
- Micro labels / chips: **12px**
- Weights stay mostly **regular (400)**; emphasis comes from color and size, not heavy bold stacks

Headlines inside empty states are larger and brighter, but the product chrome itself stays modest and operational.

### Spacing and layout

Recurring padding rhythm:

- **32px** — page and major panel padding (very common)
- **16px** — section gaps inside cards
- **12px** / **8px** — control clusters and compact rows
- **4px** — tight icon/label packing

Layout patterns:

- **Left app rail** (narrow icon column) + main stage
- **Centered empty states** with one elevated dialog
- **Freeform canvas** for projects, with floating HUD controls rather than fixed side inspectors on every view

## Visual language

- **Rounded corners** dominate: ~12px on cards/modals, ~8px on smaller controls, **pill (9999)** on icon buttons and chips.
- **Layered dark surfaces**: modals and nodes sit above the canvas with soft multi-stop shadows (observed stacks up to large y-offsets with 16–48px blur)—elevation instead of hard drop shadows as a brand move.
- **Hairline borders** on dark cards keep silhouettes readable without high-contrast outlines.
- **Flat fills + subtle depth**: no loud gradients in chrome; depth is shadow and value shift.
- Imagery lives **inside nodes** and previews; the shell stays abstract and technical.

## Components and states

Recurring pieces:

1. **App rail** — monochrome icons, active state via contrast, not bright fills.
2. **Empty project grid** — dashed or quiet placeholder cards waiting for content.
3. **Create modal** — elevated dark card, labeled fields, helper captions, full-width blue primary button, text secondary actions.
4. **Node cards** — rounded rectangles with title bar, body preview/text, and ports; selection shown with a light outline/halo.
5. **Connector network** — thin light edges between nodes; the graph is the hero.
6. **Floating bottom toolbar** — pill/clustered dark controls over the canvas (hand, select, etc.).
7. **Top utility cluster** — project name, status (green “Online”), share/presence avatars.

Visible states to preserve: idle charcoal controls, **white/light selection**, blue primary affordance, green presence. Do not invent hover motion beyond what stills show.

## Responsive behavior

Both studied views are large desktop viewports (roughly 1700–2050px wide). The system is clearly **desktop-canvas first**. Treat narrow layouts as unproven; keep the rail + stage mental model if you adapt down, but do not claim a documented mobile pattern from these captures.

## Practical guidance

**Preserve**

- Near-black canvas with only a few elevated surface steps
- One blue primary CTA against an otherwise neutral UI
- Soft 8–12px rounding and pill icon buttons
- Node/selection outlines instead of heavy filled chrome
- Generous 32px stage padding and calm empty states

**Avoid**

- Light-mode defaulting or colorful app shells
- Thick skeuomorphic shadows or neon accents everywhere
- Dense multi-column admin tables as the primary metaphor
- Competing accent colors that outshine node content

**Adaptation tip**

If you borrow FLORA for another generative tool, keep the **void + floating graph** metaphor. Let documents, images, and model outputs be the only colorful surfaces; the OS around them should feel like dim studio lighting.

## Scope note

Based on two desktop captures: Projects home (with Create Project modal) and an open project canvas with multi-selected nodes. Color roles include white primary text and gray secondary text; many decorative values are visual reads from screenshots. Font family names, motion, and small-screen behavior were not established.

## Captured pages

[![Projects home — empty state + create modal](https://pin.fontofweb.com/7888?format=jpg)](https://design.withfudge.com/share/pin-7888)

[Projects home — empty state + create modal](https://design.withfudge.com/share/pin-7888)

[![Project canvas — node graph workspace](https://pin.fontofweb.com/7889?format=jpg)](https://design.withfudge.com/share/pin-7889)

[Project canvas — node graph workspace](https://design.withfudge.com/share/pin-7889)

## Colors

- `#0b0b0c`
- `#161618`
- `#1c1c1f`
- `#2a2a2e`
- `#ffffff`
- `#8c8c8c`
- `#3b82f6`
- `#22c55e`
