# How framer.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/framer.com-design)

Last updated: 2026-07-30

## Captured pages

[![Platform capability grid](https://pin.fontofweb.com/10162?format=jpg)](https://design.withfudge.com/share/pin-10162)

[Platform capability grid](https://design.withfudge.com/share/pin-10162)

[![AI agents landing page](https://pin.fontofweb.com/10163?format=jpg)](https://design.withfudge.com/share/pin-10163)

[AI agents landing page](https://design.withfudge.com/share/pin-10163)

[![Home alternate section](https://pin.fontofweb.com/10161?format=jpg)](https://design.withfudge.com/share/pin-10161)

[Home alternate section](https://design.withfudge.com/share/pin-10161)

[![Home product band](https://pin.fontofweb.com/10160?format=jpg)](https://design.withfudge.com/share/pin-10160)

[Home product band](https://design.withfudge.com/share/pin-10160)

## Design character

Framer’s captured marketing pages are a high-contrast product stage: a visually black field, broad white statements, subdued gray detail, and product demonstrations that supply the texture. The interface is deliberately quiet around the demonstrations. Thin dividers, rounded dark panels, and modest pill actions create order without turning the page into conventional light SaaS chrome.

The lasting character is **cinematic but operational**: a large claim establishes ambition, an orderly capability matrix proves it, and crisp product imagery or video-like scenes make the platform tangible.

## Supported foundations

### Color

Only the values below were returned with explicit color roles. They are observations from the listed home captures, not an official Framer token file.

| Practical label | Recorded value | Recorded role and context |
|---|---:|---|
| `color.accent-blue` | `#0099ff` | Accent in the 1605px home capture |
| `color.accent-blue-alt` | `#0000ee` | Accent in two home captures |
| `color.text-primary` | `#ffffff` | Primary text across recorded home crops |
| `color.text-secondary` | `#999999` | Secondary text across recorded home crops |
| `color.text-secondary-strong` | `#cccccc` | Secondary text in two home crops |
| `color.accent-warm` | `#d67a5c` | Accent in one home crop |

The screenshots visibly use a black canvas and dark product surfaces, but the batch does not provide measured background values. Preserve the dark-field relationship; do not promote an inferred canvas or surface hex into a production token from this evidence.

### Typography

No font family or type-role mapping was returned, so this guide deliberately names no family and includes no font-usage component. The captured hierarchy is nevertheless concrete.

| Practical label | Size | Weight | Line height | Tracking | Captured use |
|---|---:|---:|---:|---:|---|
| `type.display-lg` | 54px | 500 | 54px | -2.16px | Large statement in the agents capture and one home crop |
| `type.display` | 44px | 500 | 48.4px | -1.76px | Home section heading |
| `type.section` | 34px | 500 | 37.4px | -1.36px | Agents-page section heading |
| `type.body-lg` | 18px | 400 | 24.3px | -0.2px | Supporting marketing copy |
| `type.body` | 15px | 400 | 20.25px | -0.1px | Supporting copy |
| `type.ui` | 14px | 500 | 21px | Not recorded | Compact navigation and interface emphasis |
| `type.micro` | 12px | 500 | 14.4–16.8px | Not recorded | Dense UI labels and metadata |

The display tier is tight and medium-weight rather than heavy. Supporting copy opens its line height, while small UI text stays compact. Reproduce those relationships with a licensed family chosen separately; the evidence does not establish a font name or license.

### Spacing and layout

The values below recur in the desktop section crops. They are a supported inventory, not a normalized spacing scale.

| Value | Repeated captured context |
|---:|---|
| 10px | Internal grid gaps and compact local spacing |
| 20px | Repeated horizontal section inset |
| 40px | Home-grid gap and local panel inset |
| 50px | Agents-page matrix gap |
| 60px | Section bottom padding and wider home-grid gap |
| 64px | Repeated section top padding |
| 100px | Agents hero top padding and a wide home gap |
| 120px | Repeated home section padding |
| 160px | Home section top padding in several crops |

At the observed wide desktop sizes (1408–1712px), content sits in a centered, generously margined frame. The agents page moves from header to statement, actions, a five-column capability matrix, then paired visual cards. The home crop uses a two-by-three capability grid. These are observed compositions, not a claim about every Framer page.

### Shape and depth

| Practical label | Recorded value | Captured context |
|---|---:|---|
| `radius.panel` | 18–20px | Large visual cards and dark content panels |
| `radius.surface` | 25px | Frequently recorded rounded surfaces |
| `radius.control` | 100px | Pill-like controls |
| `shadow.quiet` | 0 2px 4px 0 | One home crop |
| `shadow.quiet-alt` | 0 4px 8px 0 | One home crop |

Some radius and spacing observations are truncated in individual crops; treat the table as a recurring-value reference rather than a complete component inventory.

## Visual language

The black field is not empty: it makes white typography, subtle gray UI, saturated imagery, and blue marks feel intentional. Panels are usually dark-on-dark rather than light cards on a dark page. Their soft corners and hairline-looking seams create structure with very little apparent depth.

The strongest color and image moments belong to the product demonstrations. In the agents capture, an abstract purple card sits beside a photographic, play-affordance video card; in the platform capture, blue is concentrated in small performance indicators rather than spread across every tile. This keeps the shell restrained and makes proof moments carry the visual energy.

## Components and visible states

### Global header

The agents capture shows a compact horizontal header: Framer mark at left, grouped navigation links, Log in, and a light Sign up pill at right. It is a wide-desktop observation only.

### Statement and action pair

A large multiline statement is followed by two adjacent pill-shaped actions. The light-filled action leads; the darker adjacent action supports it. Preserve a clear primary/secondary contrast instead of giving both actions equal fill.

### Capability matrix

The agents page presents ten capability cells in a two-row, five-column rounded matrix. Each cell contains a small icon and a short multiline label, separated by fine visible rules. The home capture uses the same evidence-first idea as a two-by-three product grid with a label and arrow per tile.

### Visual story cards

The agents capture pairs a colored abstract story card with a wider photographic media card containing a visible play affordance. Treat the play symbol as a visible state of that captured card, not evidence for video controls, autoplay, or playback behavior elsewhere.

### Supported states

| Component | Visible state | Evidence |
|---|---|---|
| Primary action | Light-filled | Agents hero |
| Secondary action | Dark-filled | Agents hero |
| Visual media card | Play affordance visible | Agents media card |

Hover, focus, pressed, disabled, loading, validation, empty, error, menu-open, and responsive-navigation states are not established.

## Practical guidance

### Preserve

1. Start with a visually black field and let white display text carry the first read.
2. Keep saturated blue and richer media concentrated in proof moments, not across the whole UI.
3. Use large rounded dark panels with quiet seams instead of bright generic cards.
4. Maintain the tight display / relaxed-support-copy contrast.
5. Make capability proof scannable through short labels, icons, and ruled matrices.
6. Pair one clearly leading action with one quieter alternative.

### Avoid

1. Recasting the system as a pale dashboard or filling every region with gray cards.
2. Applying blue as a default background, link, badge, and action all at once.
3. Replacing the low-noise matrix with decorative icon clouds or heavy shadows.
4. Treating the captured family-unknown typography as permission to name or distribute a font.
5. Inventing mobile collapse rules, motion, or unseen interaction states.

## Known gaps

This batch does not establish exact background, border, gradient, or media-system values; a complete palette; a font family or licensing; a repeatable shadow system; full spacing/radius inventories; interaction behavior beyond the visible states above; motion; accessibility treatments; or mobile/tablet behavior and breakpoints.

## Reference scope

This guide studies eight Framer desktop section crops: seven from `https://framer.com/` and one from `https://framer.com/agents/`, at widths from 1408px to 1712px. The four pins above are the representative visual references. It describes the captured marketing surfaces only, not the editor, account, template, documentation, or full site system.

## Colors

- `#0099ff`
- `#0000ee`
- `#ffffff`
- `#999999`
- `#cccccc`
- `#d67a5c`
