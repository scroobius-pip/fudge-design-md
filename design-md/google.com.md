# How google.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/google.com-design)

Last updated: 2026-07-28

## Design character

Google Search in **AI Mode** is a dark, conversation-first shell: near-black canvas, a single centered prompt capsule, and quiet suggestion lines. It reads less like classic blue-link SERP chrome and more like a calm assistant stage—with the familiar multicolor account avatar and product grid still anchoring “this is Google.”

What should survive adaptation:

- **Near-black full-bleed canvas** with white primary type
- **One hero prompt field** (large radius pill/capsule) as the sole focal control
- **Soft gray secondary type** for starter prompts
- **Cool blue accent** on interactive labels (measured ~`#99c3ff`)
- **Minimal chrome**: slim top nav modes + left rail icons
- **Account rainbow avatar** as the only high-chroma brand fleck in the dark shell

## Foundations

### Color

| Role | Hex | Notes |
| --- | --- | --- |
| Canvas | `#0E0E10`–`#121212` | AI Mode / dark search stage |
| Text primary | `#E6E8F0` / near-white | Greeting, field text |
| Text secondary | `#ADAFB8` | Suggestions, muted UI |
| Accent | `#99C3FF` | Links / cool interactive blue |
| Field fill | `#2A2A2E`–`#333` | Prompt capsule |
| Top bar | matches canvas | Hairline separator only |
| Account mark | multicolor | Profile chip top-right |

Light classic SERP variants may still appear in other captures; the dominant system in this set is the **dark AI Mode** shell.

### Typography

No declared family recorded. Visually a **humanist/system sans**:

| Use | Weight | Size |
| --- | --- | --- |
| Greeting / display | 500 | ~32px |
| Body / suggestions | 400 | 14–16px |
| Nav modes | 400–500 | ~14px |

Hierarchy is shallow: one greeting, one field, three suggestion lines.

### Spacing and layout

- Prompt is **vertically centered** with generous empty field above/below
- Field radius **~20–24px** (near-pill); some chips go full pill (`9999`)
- Side margins large; content optically centered ~480–640px wide
- Left rail icons sit in a narrow dark column with ~12–16px padding

## Visual language

- **Soft geometry**: large-radius capsules, not sharp cards
- Almost **no elevation**—depth is fill contrast only
- Icons are thin line glyphs (sparkle, mic, plus)
- Top mode tabs (AI Mode / All / Images…) are text-only with subtle active state

## Components

### Top bar
Modes center-left; utilities (labs, apps grid, avatar) right; product mark left.

### Prompt capsule
Placeholder “Ask anything”, leading `+`, trailing mic; dark elevated fill on darker canvas.

### Suggestion list
Three sparkle-prefixed lines in secondary gray—never competing with the field.

### Left rail
Compose / history style icon buttons, low contrast.

## Practical guidance

**Do**: keep one focal input; use cool blue sparingly; preserve empty stage breathing room; keep account multicolor as the brand wink.

**Don’t**: clutter the dark canvas with cards; turn suggestions into heavy tiles; introduce neon accents; revive dense blue-link walls inside AI Mode.

## Scope note

Eight captures across `/search` and `/webhp` (pins include 8713, 6925, 6604, 5849, 5375, 5177). Structured colors on dark AI Mode; no declared fonts. Classic light SERP and Images layouts appear in the set but AI Mode is the clearest system snapshot. Mobile not evidenced.

## Captured pages

[![AI Mode empty state](https://pin.fontofweb.com/6925?format=jpg)](https://design.withfudge.com/share/pin-6925)

[AI Mode empty state](https://design.withfudge.com/share/pin-6925)

[![AI Mode variant](https://pin.fontofweb.com/6604?format=jpg)](https://design.withfudge.com/share/pin-6604)

[AI Mode variant](https://design.withfudge.com/share/pin-6604)

[![Search conversation](https://pin.fontofweb.com/8713?format=jpg)](https://design.withfudge.com/share/pin-8713)

[Search conversation](https://design.withfudge.com/share/pin-8713)

[![Images results](https://pin.fontofweb.com/5375?format=jpg)](https://design.withfudge.com/share/pin-5375)

[Images results](https://design.withfudge.com/share/pin-5375)

## Colors

- `#0e0e10`
- `#e6e8f0`
- `#adafb8`
- `#99c3ff`
- `#2a2a2e`
- `#121212`
- `#ffffff`
