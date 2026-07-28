# How bolt.new is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/bolt.new-design)

Last updated: 2026-07-28

## Design character

Bolt.new splits into two related faces:

1. **Marketing/entry** — centered prompt-led hero, product promise, rounded controls on a dark or dim field  
2. **Builder workspace** (`/~/…`) — IDE-like multi-pane UI: files, preview, chat/agent, dense toolbars

Shared DNA: modern developer tool aesthetics, **12px-ish rounding**, 1px borders, 14–16px UI type, and functional density that still feels soft rather than brutalist.

What should survive adaptation:

- **Prompt-as-hero** on marketing
- **Workspace density** without abandoning rounded softness
- **14/16px UI type ladder** (not magazine display)
- **Pill and 12px radii** on controls
- **Bordered panes** over heavy drop shadows

## Foundations

### Color

Structured role colors missing. Visual system reads as dark-to-charcoal builder chrome with light preview surfaces, accent actions in a single brand highlight (often cool or vivid against charcoal). Keep marketing and workspace linked by the same control geometry even if surfaces flip light/dark.

### Typography

- Dominant UI/body: **16/24** and **14/20** regular
- Occasional **18/28** for marketing supporting lines
- Medium 14px for emphasized UI labels
- Large marketing display is present visually but metrics skew toward UI sizes in the structured samples—pair a strong hero display with this UI base

### Spacing and layout

- Horizontal padding **16 / 24 / 32 / 40px** depending on pane
- **64px** vertical margins on marketing sections
- Builder: multi-column panes with tight toolbars; mobile capture **422px** wide shows collapsed builder chrome

### Radii and borders

- Radii: **4, 6, 8, 12, 24px** and full pills (**9999**) for chips/CTAs
- 1px solid borders around inputs, panels, cards
- Shadows minimal in samples — structure via borders and contrast

## Visual language

- Developer-tool clarity
- Soft-rounded rectangles and pills
- Preview frames and code/chat panes as primary imagery
- Motion not established

## Components and states

- Marketing: logo, prompt input, primary generate/CTA, feature row
- Builder: sidebar, tab bar, preview canvas, agent/chat rail, status chips
- Inputs with pill or 12px rounding
- Icon+label toolbar buttons

## Responsive behavior

Captures include **422px** (builder), **1119–1713px** marketing/builder. On small widths the builder collapses panes; marketing stacks the prompt and CTAs. Preserve pane border language when collapsing.

## Practical guidance

**Preserve**: prompt hero, rounded 12px controls, 14/16 UI type, bordered panes, builder density.

**Avoid**: skeuomorphic desktop OS chrome, tiny unreadable microcopy, rainbow gradients behind the prompt, or turning the builder into a marketing landing page.

## Scope note

Four captures: home and a project builder route at multiple widths including a narrow 422px viewport. Color roles undeclared; geometry and type metrics were clearer than palette roles.

## Captured pages

[![Marketing home — prompt hero](https://pin.fontofweb.com/6000?format=jpg)](https://design.withfudge.com/share/pin-6000)

[Marketing home — prompt hero](https://design.withfudge.com/share/pin-6000)

[![Home — narrower viewport](https://pin.fontofweb.com/5999?format=jpg)](https://design.withfudge.com/share/pin-5999)

[Home — narrower viewport](https://design.withfudge.com/share/pin-5999)

[![Builder workspace — wide](https://pin.fontofweb.com/6001?format=jpg)](https://design.withfudge.com/share/pin-6001)

[Builder workspace — wide](https://design.withfudge.com/share/pin-6001)

[![Builder — narrow mobile width](https://pin.fontofweb.com/6002?format=jpg)](https://design.withfudge.com/share/pin-6002)

[Builder — narrow mobile width](https://design.withfudge.com/share/pin-6002)
