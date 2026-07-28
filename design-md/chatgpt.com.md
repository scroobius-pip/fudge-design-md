# How chatgpt.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/chatgpt.com-design)

Last updated: 2026-07-28

## Design character

ChatGPT’s product surface is a **calm conversation operating system**: large readable type, generous bubble radii, a persistent sidebar, and a bottom composer that feels soft rather than technical. Light and dark themes share the same geometry—only values invert. Brand green may appear in marks/marketing, but in-app chrome is mostly neutral gray-scale with occasional purple accent moments.

What should survive adaptation:

- **Sidebar + main thread + composer** architecture
- **Soft geometry** (12–28px radii, pill composer treatments)
- **Dual theme** with white↔near-black primaries and mid-gray secondaries
- Typography optimized for **long message reading**, not poster heroes

## Foundations

### Color

Measured roles:

| Role | Light | Dark |
|------|-------|------|
| text_primary | `#0d0d0d` | `#ffffff` |
| text_secondary | `#8f8f8f` | `#afafaf` |
| accent (moments) | `#643cae` | (context-dependent) |
| Surfaces (visual) | white / `#f4f4f4` sidebars | `#212121` / near-black panels |

Borders separate surfaces more than heavy shadows. Keep chroma low in chrome.

### Typography

Sans system (family name not declared in captures):

- Titles / system messages ~**24–30px**, 400–600
- Body messages ~**16px**, 400–600, line-height **24–28px**
- UI chrome ~**14–16px**
- Occasional 16.8px medium labels

Hierarchy is subtle—weight and color do more than dramatic scale jumps.

### Spacing and layout

- Common **gap 8–16px** in stacks and toolbars
- Main column horizontal padding often **12–64px** depending on region
- Composer and cards use **12–24px** internal padding
- Message column is centered with comfortable max measure; sidebar fixed

## Visual language

- Radii: **8–12px** small controls, **16–24px** cards/bubbles, **22–28px** composer-like shells; fully pill values appear on circular icon buttons
- Shadows: soft low elevation (`y:3 blur:6`) on floating elements; many zero-offset hairlines
- 1px solid borders for sidebar rules and input rings
- Imagery mostly user/AI content inside the thread—not marketing photography

## Components and states

1. **Left sidebar** — history, projects, workspace switchers
2. **Message list** — alternating human/assistant blocks, soft bubbles or plain stacked prose depending on theme density
3. **Composer** — multi-line input, rounded shell, send and tool icons
4. **Top bar** — model/workspace context, minimal
5. **Cards / tool results** — nested rounded panels inside the thread

Populated conversation states are well represented; explicit hover/focus rings were not isolated.

## Responsive behavior

Widths from ~**580px** (embedded app) through ~**982px** to **2048px**. Narrow views compress the thread and may de-emphasize sidebar; wide views keep a centered readable column. Dual light/dark appears across captures.

## Practical guidance

**Preserve**

- Neutral dual theme + soft radii
- 16px body with ~1.5 line-height
- Composer as a friendly rounded dock
- Gray secondary text for meta

**Avoid**

- Loud multi-color chrome
- Sharp dense admin tables as the default chat aesthetic
- Tiny unreadable message type
- Heavy skeuomorphic message shadows

## Scope note

Eight captures spanning home, project workspace, conversations (wide/narrow), light thread, and a specialized workspace. Strong spacing/radius/border signal and text roles; declared font families absent. Marketing brand pages beyond the app shell are lightly represented.

## Captured pages

[![Marketing/home shell](https://pin.fontofweb.com/10040?format=jpg)](https://design.withfudge.com/share/pin-10040)

[Marketing/home shell](https://design.withfudge.com/share/pin-10040)

[![Home alternate](https://pin.fontofweb.com/10217?format=jpg)](https://design.withfudge.com/share/pin-10217)

[Home alternate](https://design.withfudge.com/share/pin-10217)

[![Project workspace (dark)](https://pin.fontofweb.com/9538?format=jpg)](https://design.withfudge.com/share/pin-9538)

[Project workspace (dark)](https://design.withfudge.com/share/pin-9538)

[![Conversation wide](https://pin.fontofweb.com/9539?format=jpg)](https://design.withfudge.com/share/pin-9539)

[Conversation wide](https://design.withfudge.com/share/pin-9539)

[![Conversation narrow ~982px](https://pin.fontofweb.com/9540?format=jpg)](https://design.withfudge.com/share/pin-9540)

[Conversation narrow ~982px](https://design.withfudge.com/share/pin-9540)

[![Light conversation](https://pin.fontofweb.com/9739?format=jpg)](https://design.withfudge.com/share/pin-9739)

[Light conversation](https://design.withfudge.com/share/pin-9739)

[![Rater workspace](https://pin.fontofweb.com/10192?format=jpg)](https://design.withfudge.com/share/pin-10192)

[Rater workspace](https://design.withfudge.com/share/pin-10192)

## Colors

- `#ffffff`
- `#0d0d0d`
- `#212121`
- `#f4f4f4`
- `#afafaf`
- `#8f8f8f`
- `#643cae`
- `#10a37f`
