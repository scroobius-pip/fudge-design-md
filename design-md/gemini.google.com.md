# How gemini.google.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/gemini.google.com-design)

Last updated: 2026-07-28

## Design character

gemini.google.com is the Gemini app shell: dark charcoal workspace, left rail of chats, and a central conversation column. It feels like a focused AI workbench—low chrome contrast, soft blue accent for selection/actions, and light gray primary text on deep surfaces. Unlike the marketing site, this is product UI density with calm dark mode as the default captured look.

## Foundations

### Color

Measured roles:

| Role | Hex |
|---|---|
| accent | `#8ab4f8` |
| text_primary | `#e3e3e3` |
| text_secondary | `#c4c7c5` |

Accent `#8ab4f8` (Google blue-leaning) marks interactive emphasis on dark UI. Primary text `#e3e3e3` and secondary `#c4c7c5` keep hierarchy soft rather than pure white-on-black. Canvas is near-black/charcoal from screenshots.

### Typography

- 16px / weight 400 (undeclared UI sans) — seen ~216 times
- 14px / weight 400 (undeclared UI sans, line-height 21px) — seen ~169 times
- 14px / weight 500 (undeclared UI sans, line-height 20px) — seen ~20 times
- 16px / weight 400 (undeclared UI sans, line-height 24px) — seen ~14 times
- 24px / weight 400 (undeclared UI sans) — seen ~8 times
- 14px / weight 500 (undeclared UI sans) — seen ~4 times

Conversation UI centers on 14–16px regular; occasional 24px for empty-state or titles. Weights stay mostly 400–500 for a readable chat cadence.

### Spacing and layout

- padding-left: 16px (×151)
- padding-bottom: 16px (×135)
- padding-right: 16px (×135)
- padding-top: 16px (×135)
- padding-top: 80px (×54)
- padding-left: 12px (×39)
- padding-right: 12px (×39)
- padding-bottom: 24px (×29)

16px padding repeats heavily—comfortable gutters inside rails and message columns. Layout pattern: left history rail + main transcript + composer. App captures around 1176–2048px wide show the rail remaining present on desktop widths.

## Visual language

- 4px (×32)
- 16px (×32)

4px for small controls; 16px for larger panels/inputs—Material-ish soft corners without candy pills everywhere. Borders are subtle edge definitions on dark surfaces. Imagery is sparse; the UI is typography and list density.

## Components and states

- **Chat list rail** with selected row highlight
- **Message bubbles / plain transcript blocks**
- **Composer** with rounded input and send control
- **Model/account chrome** in the header
- **Empty or prompt starter states** with larger type

Taxonomy tags present include AI-enabled / generative AI capability framing.

## Responsive behavior

Two app paths at different widths. The shell remains a multi-pane desktop chat; do not assume a separate marketing layout here.

## Practical guidance

**Preserve**
- Dark charcoal shell with `#8ab4f8` accent
- Soft gray text pair (`#e3e3e3` / `#c4c7c5`)
- 14–16px chat type and 16px padding rhythm
- Rail + transcript + composer structure

**Avoid**
- Bright white marketing styling inside the app shell
- Harsh pure-white body text or neon accents
- Oversized display type in the transcript column

## Scope note

Two app captures (`/app/...`, `/u/1/app`). Marketing pages are covered separately under gemini.google.

## Captured pages

[![Replicating Semantic UI Design - Google Gemini](https://pin.fontofweb.com/8794?format=jpg)](https://design.withfudge.com/share/pin-8794)

[Replicating Semantic UI Design - Google Gemini](https://design.withfudge.com/share/pin-8794)

[![Google Gemini](https://pin.fontofweb.com/5688?format=jpg)](https://design.withfudge.com/share/pin-5688)

[Google Gemini](https://design.withfudge.com/share/pin-5688)

## Colors

- `#8ab4f8`
- `#e3e3e3`
- `#c4c7c5`
