# How fonttrio.xyz is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/fonttrio.xyz-design)

Last updated: 2026-07-28

## Design character

Fonttrio is a **dark, utility-forward font pairing lab** aimed at shadcn-style product UI. It opens with a monumental stacked wordmark, then settles into a bordered catalog of pairings—less brand theater, more workshop bench. The mood is late-night design tool: near-black canvas, pale text, hairline separators, and just enough violet to mark selection.

What should survive adaptation:

- Oversized monochrome wordmark as the only real “hero art”  
- Dark surfaces with light text and secondary gray meta  
- Card/index browsing of pairings with clear selected state  
- Compact metadata (category chips, monospaced tags like `h2` / `Sans-serif`)  
- Restraint: no gradients, no soft shadows, borders do the structure  

## Foundations

### Color

Measured text roles:

| Role | Hex | Use |
|------|-----|-----|
| Primary text | `#ededed` | Heads, body, wordmark |
| Secondary text | `#888888` | Meta, labels, quieter UI |

Visual reading of surfaces (interpretation):

| Swatch | Approx. hex | Role |
|--------|-------------|------|
| Page canvas | `#0a0a0a`–`#111` | Deep black ground |
| Raised panel | `#141414`–`#1a1a1a` | Cards / list chrome |
| Hairline border | `#2a2a2a`–`#333` | 1px separators everywhere |
| Selection / accent | `#6d28d9`–`#7c3aed` (violet) | Active pairing row/card edge or fill cue |
| Chip fill | dark gray with light label | Category pills (Modern, etc.) |

Keep chroma minimal. Violet is a selection signal, not a rainbow system.

### Typography

Families not declared in the capture set; the UI reads as a sharp geometric sans. Pairing previews intentionally sample many faces—that is content, not the product chrome.

Observed chrome sizes:

- Display wordmark: ~192px, weights 400 and 800 stacked (“font” light/regular over “trio” heavy)  
- Pairing titles / heads: ~28px at 700–800  
- Body and list text: ~14–16px regular  
- UI labels and chips: ~12–14px medium (500)  
- Micro tags: ~10–12px  

Hierarchy is extreme at the hero (billboard type) then compresses into a dense index. Previews inside cards show mixed serif/sans specimens at reading sizes—those faces belong to the pairing content.

### Spacing and layout

Spacing steps: **4 / 10 / 12 / 16 / 20 / 32 / 48 / 64** px. Radii **6–8px** on cards and controls.

Home structure:

1. Top utility bar (brand mark, nav, actions)  
2. Massive centered **font / trio** stack with short supporting line  
3. Transition into a **card-heavy index** of pairings—bordered tiles or rows with specimen lines, titles, and meta chips  
4. Moderate-to-sparse density: hero is airy; catalog tightens with repeated 1px borders  

Large desktop width (~2048 CSS px in captures) keeps the hero monumental; the catalog still feels like a dashboard, not a magazine.

## Visual language

- **Flat dark surfaces** only—no recorded shadows or gradients  
- **1px solid borders** on all sides of cards/list regions (high border counts)  
- **8px rounding** softens tools without going pill-playful  
- Selection communicated with violet emphasis against gray neighbors  
- Specimen lines inside cards are the decorative layer; chrome stays austere  
- Sans-serif UI chrome; display role reserved for the wordmark and pairing names  

## Components and states

**Wordmark hero**  
Two-line stack, extreme scale, weight contrast between lines. This is the brand signature.

**Pairing catalog**  
Border-separated cards or rows showing:

- Pairing name  
- Short specimen / preview lines  
- Category chip (e.g. Modern)  
- Technical tags (`h2`, `Sans-serif`, similar monospaced or small labels)  

**Selected item**  
One card/row clearly active via violet accent against dim siblings—populated index, not empty state.

**Utility chrome**  
Compact top bar and small controls at 12–14px; secondary text in `#888888`.

Only static selected vs idle contrast is claimed; hover/focus motion is unknown.

## Practical guidance

**Preserve**

- Black lab atmosphere with `#ededed` / `#888888` type  
- Monumental stacked wordmark before the tool  
- Border-defined cards at ~8px radius, zero shadow  
- Violet only for selection/activation  
- Pairing content as the colorful/typographic variety; chrome stays neutral  

**Avoid**

- Light-mode default without redesigning contrast  
- Soft neumorphic cards or colored gradients behind the hero  
- Turning every pairing into a loud marketing tile  
- Overusing violet until the catalog feels neon  
- Shrinking the wordmark into a generic 32px logo treatment on the home view  

## Scope note

Two viewport captures of `/` only (hero + pairing index). No secondary routes, docs, or light theme were available—responsive reflow and non-home patterns are unconfirmed.

## Captured pages

[![Fonttrio - Font Pairings for shadcn](https://pin.fontofweb.com/7846?format=jpg)](https://design.withfudge.com/share/pin-7846)

[Fonttrio - Font Pairings for shadcn](https://design.withfudge.com/share/pin-7846)

[![Fonttrio - Font Pairings for shadcn](https://pin.fontofweb.com/7847?format=jpg)](https://design.withfudge.com/share/pin-7847)

[Fonttrio - Font Pairings for shadcn](https://design.withfudge.com/share/pin-7847)

## Colors

- `#ededed`
- `#888888`
- `#0a0a0a`
- `#1a1a1a`
- `#2a2a2a`
- `#7c3aed`
