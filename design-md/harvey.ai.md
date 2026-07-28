# How harvey.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/harvey.ai-design)

Last updated: 2026-07-28

## Design character

Harvey is a **dark-first legal-tech brand** that reads like a premium professional-services studio: near-black canvases, warm off-white type, restrained stone neutrals, and editorial photography of lawyers and operators at work. Marketing pages alternate between **cinematic dark bands** (solutions mega-menu, security, customer trust) and **light editorial surfaces** (blog, feature marquees). The system feels confident, sparse, and institutional—never neon AI chrome.

What should survive adaptation:

- **Near-black marketing canvas** with warm stone primary text (`#fafaf9`)
- **Muted secondary text** in warm grays (`#cccac6`, `#706d66`)—not cool blue-gray
- **Dual surfaces**: dark product/marketing vs light blog/editorial paper
- **Serif display** for large editorial headlines; clean sans for UI and body
- **Soft light cards** floating on dark (rounded white/stone panels for partner grids)
- **Quiet CTAs**: white pill on dark, black pill on light—no loud brand chroma
- **Documentary photography** of legal professionals, not stock AI illustrations

## Foundations

### Color

Measured text roles on the home capture:

| Role | Hex | Where it shows |
| --- | --- | --- |
| Primary text (dark UI) | `#fafaf9` | Nav wordmark, section titles, body on black |
| Secondary text | `#cccac6` | Supporting copy, menu descriptions |
| Muted / tertiary | `#706d66` | Quieter labels, de-emphasized lines |
| Marketing canvas | near-black (visually ~`#0B0B0B`–`#121212`) | Full-bleed home solutions & security bands |
| Elevated light surface | warm off-white / stone | Partner logo card, blog hero panel |
| Blog / editorial canvas | white–light gray | `/blog` page field |
| Primary CTA (on dark) | white fill, dark label | “Request a Demo”, “Explore Platform” |
| Primary CTA (on light) | near-black fill, white label | Blog header “Request a Demo” |
| Ghost control | transparent + light hairline | “More About Security”, “Our Customers” |
| Hairline / rules | low-contrast light on dark | Nav underline, card edges |

Relationships that matter:

- **Warm neutrals only.** The measured secondary pair is stone/taupe, not slate blue—keep the palette “legal paper and ink,” not SaaS blue.
- **No saturated brand accent in chrome.** Emphasis comes from type scale, photography, and black/white inversion—not a purple or green product color.
- **Light editorial is a full inversion**, not a tinted dark theme: black type, black CTA, generous white field, portrait photography.

### Typography

No declared webfont family was recorded. Visually the system is **dual-family**:

- **Display / editorial**: transitional or modern serif for large stacked capability lists and blog titles (e.g. “Document Storage”, “A New Era of Collaboration…”).
- **UI / body**: neutral geometric or neo-grotesque sans for nav, body, buttons, and meta.

Observed sizes and weights:

| Use | Weight | Size / line-height | Notes |
| --- | --- | --- | --- |
| Hero / marquee display | 400 | ~56px / ~58.8px | Slight negative tracking (~-0.56) |
| Section title | 500 | ~36px / ~38–40px | Tight leading, mild negative tracking |
| Lead / card title | 400–500 | 20px / 26px | Solutions labels, subheads |
| Body | 400 | 16px / 24px | Default marketing and blog copy |
| UI / nav / meta | 400–500 | 14px / 18–20px | Nav links, chips, “by Harvey Team” |
| Medium UI | 500 | 14–16px | Active nav, button labels |

Hierarchy is **serif spectacle → quiet sans body → small medium-weight UI**. Avoid introducing a third display face or heavy black weights on heroes—display often stays at 400.

### Spacing and layout

Recurring measurements:

- **Section padding** often **72px** on all sides for large dark content blocks
- **Horizontal margins** ~**68px** common on wide frames
- **Inner gutters** 36px, 28px, 24px, 16px, 12px, 8px
- **Card / control radius** primarily **4px** (buttons, small chrome); larger soft rounds on photo cards and light partner panels (visual)
- **1px solid borders** on elevated controls and outlined buttons
- Content often **split two-column**: left label stack + right panel, or title left + copy right on security

Layout patterns:

1. **Centered wordmark nav** with dropdowns and trailing Login / Request a Demo
2. **Solutions mega panel**: left vertical list of use-cases, right light card of partner logos
3. **Full-bleed photo band** with overlaid white headline + white CTA
4. **Logo trust strip** over photography with ghost “Our Customers”
5. **Light editorial hero**: photo left, serif title + sans body right on stone panel
6. **Security band**: dark two-column copy + four compliance icon tiles
7. **Vertical marquee** of serif capability names fading in opacity on white

## Visual language

### Shape and depth

- Default control geometry: **4px rounded rectangles** (not full pills on every action—buttons look slightly rounded rects)
- Partner and feature cards: **larger soft radius** on light panels against pure black
- Depth is minimal: dark UI uses **flat black + hairline + fill shift**; light cards sit as solid paper sheets
- Shadows are not a dominant language in the captures—separation is **value contrast** and photography

### Imagery

- Prefer **real workplace photography**: annotated contracts, counsel reviewing paper, executive portraits
- Logo walls stay **monochrome / white on dark** so they don’t fight the type
- Compliance marks (SOC2, CCPA, ISO, GDPR) render as **quiet line icons** in muted gray on black
- Blog uses **studio portrait crops** in a three-up row under “Innovation Spotlight”

### Borders and dividers

- Nav: thin bottom rule; active item can show a short underline
- Ghost buttons: 1px light border, transparent fill, 4px radius
- Light partner card: soft continuous edge, no heavy drop shadow required

## Components and states

### Navigation

- Left: “Harvey” wordmark in primary text color
- Center: Platform, Solutions, Customers, Security, Resources, About (dropdown chevrons)
- Right: Login text + solid **Request a Demo** (black on light pages, may invert on dark)
- Open Solutions: full dark overlay with left taxonomy list and right white logo matrix card

### Buttons

| Variant | Look |
| --- | --- |
| Primary on dark | White fill, dark label, ~4px radius |
| Primary on light | Near-black fill, white label |
| Ghost / secondary | Transparent, 1px light border, light label |
| Text + arrow | Muted label with external-link affordance under compliance tiles |

Keep labels short (“Request a Demo”, “Explore Platform”, “More About Security”).

### Cards and panels

- **Partner matrix card**: light stone fill, multi-row logo pairs with hairline connectors
- **Blog feature card**: large photo + serif headline + sans deck on light gray panel
- **Compliance tile**: icon above label + “Details” link—four-up on dark
- **Portrait strip**: equal cropped headshots under section title

### Editorial list / marquee

- Stacked serif capability names with **opacity falloff** (focused line darkest, neighbors fade)—used for “top legal teams use Harvey for…”

## Responsive behavior

Captures are **desktop viewports** (~1357–1712px wide). Patterns to respect when adapting:

- Mega-menu and two-column security layouts assume **wide horizontal space**—stack list above partner card on narrow widths
- Photo bands keep type in the **open negative space** of the image (left third in the customer band)
- Blog hero is naturally **1→2 column** (image / copy)
- Capability marquee is a **single focused column**—don’t crush into multi-column chips

## Practical guidance

**Do**

- Lead with warm off-white type on near-black; keep secondary text in stone grays
- Invert cleanly for editorial: white paper, black ink, black CTA
- Use **serif for spectacle headlines**, sans everywhere else
- Prefer **documentary legal photography** and monochrome logo walls
- Keep CTAs quiet (black/white only) and radii tight (~4px on controls)
- Give dark sections **generous 72px padding** so the brand feels expensive, not cramped

**Don’t**

- Introduce electric blue, purple, or neon green as a brand accent
- Over-round buttons into candy pills if the rest of the system stays 4px
- Replace photography with abstract AI gradients or 3D mascots
- Use cold blue-grays for muted text—stay warm stone
- Crowd the mega-menu; the left list + right paper card needs air
- Heavy drop shadows on dark cards—let flat black and paper panels do the work

## Scope note

Based on eight desktop captures: home (`/`, pins 8737–8743) covering hero marquee, solutions menu, security, and customer photography, plus blog (`/blog`, pin 8744). Measured color roles are text primaries/secondaries only; canvas hexes are visual reads. No declared font families. Mobile breakpoints and motion were not in scope.

## Captured pages

[![Hero capability marquee](https://pin.fontofweb.com/8737?format=jpg)](https://design.withfudge.com/share/pin-8737)

[Hero capability marquee](https://design.withfudge.com/share/pin-8737)

[![Solutions mega-menu + customer band](https://pin.fontofweb.com/8743?format=jpg)](https://design.withfudge.com/share/pin-8743)

[Solutions mega-menu + customer band](https://design.withfudge.com/share/pin-8743)

[![Enterprise security band](https://pin.fontofweb.com/8741?format=jpg)](https://design.withfudge.com/share/pin-8741)

[Enterprise security band](https://design.withfudge.com/share/pin-8741)

[![Blog editorial hero](https://pin.fontofweb.com/8744?format=jpg)](https://design.withfudge.com/share/pin-8744)

[Blog editorial hero](https://design.withfudge.com/share/pin-8744)

[![Home mid section](https://pin.fontofweb.com/8739?format=jpg)](https://design.withfudge.com/share/pin-8739)

[Home mid section](https://design.withfudge.com/share/pin-8739)

[![Home supporting frame](https://pin.fontofweb.com/8740?format=jpg)](https://design.withfudge.com/share/pin-8740)

[Home supporting frame](https://design.withfudge.com/share/pin-8740)

## Colors

- `#fafaf9`
- `#cccac6`
- `#706d66`
