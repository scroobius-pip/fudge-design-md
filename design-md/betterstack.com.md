# How betterstack.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/betterstack.com-design)

Last updated: 2026-07-28

## Design character

Better Stack is a **dark-first observability SaaS** brand: near-black canvases, crisp white headlines, and a soft **lavender–periwinkle** interactive accent. Marketing pages feel like a product cockpit—dense feature carousels, glass-dark cards, and realistic UI chrome—while still reading as approachable and sharp rather than neon cyberpunk.

What should survive adaptation:

- **Near-black marketing canvas** with white primary type
- **Soft purple/lavender links and secondary CTAs** (not harsh electric blue)
- **16px-rounded product cards** on slightly lifted dark surfaces
- **Dual surfaces**: dark marketing vs light auth/signup
- **Status green** only for live/healthy signals inside product UI
- **Pink rounded-square mark** as the brand fleck against monochrome UI

## Foundations

### Color

Structured palette capture was empty; values below are read from representative screens (home, enterprise, signup).

| Role | Hex (approx.) | Where it shows |
| --- | --- | --- |
| Marketing canvas | `#0B0B12` | Full-bleed home & enterprise backgrounds |
| Primary text (dark UI) | `#FFFFFF` | Heroes, section titles, card titles |
| Secondary text (dark UI) | `#9CA3AF`–`#A1A1AA` | Subcopy, muted descriptions |
| Interactive / link | `#8B8CF8`–`#A5A6F6` | Inline links, “request a deployment”, mention chips |
| Card / elevated surface | `#12121A`–`#16161F` | Feature cards, testimonial tiles, compliance tiles |
| Hairline border | `rgba(255,255,255,0.08–0.12)` | Card outlines, input rings on dark |
| Primary CTA fill | `#FFFFFF` | “Start for free”, solid header button |
| Ghost / secondary control | transparent + light border | “Explore docs”, carousel chevrons, “Watch a demo” |
| Status success | `#22C55E` family | “Active” database rows in product mock |
| Brand mark pink | `#F5A3C7` family | Logo tile in nav and signup |
| Auth canvas | `#FFFFFF` | Sign-up split layout |
| Auth body text | `#18181B` / near-black | Form labels and legal |
| Auth border / input | `#E4E4E7` | Fields, social buttons |
| Social bird accent | Twitter blue | Testimonial attribution icons only |

Relationships that matter:

- **Accent is cool lavender, not brand-pink for UI chrome.** Pink stays in the mark; interaction color is the soft purple family.
- **Contrast is extreme on marketing** (white on near-black) with mid-gray body for long copy so heroes don’t compete with paragraphs.
- **Signup flips the system**: light paper, dark ink, same pink mark—proof the brand isn’t locked to dark-only.

### Typography

No declared webfont family was recorded. Visually the stack is a **modern geometric sans** with:

| Use | Weight | Size (observed) | Notes |
| --- | --- | --- | --- |
| Display / section H1 | 700 | ~28–36px | Tight leading (~1.08), slight negative tracking on larger sizes |
| Signup title | 700 | ~32px / 38.4 lh | Centered over form column |
| Body | 400 | 16px / 24 lh | Default marketing copy |
| Dense UI / form | 400 | 14px / ~21.7 lh | Signup fields, fine print, card meta |
| Labels / chips | 500 | 12–16px | Medium weight for nav and small UI |
| Mentions in cards | 400–500 | body | `@BetterStackHQ` tinted lavender |

Hierarchy is **headline → quiet subcopy → card title → card body**. Avoid adding a second display serif; the system is single-family and weight-driven.

### Spacing and layout

Recurring measurements:

- **Card padding** often ~20px (home product tiles) or ~20–28px (enterprise/list cards)
- **Section vertical rhythm** large: 40–56px tops on enterprise bands; home feature rows sit in generous black field
- **Horizontal gutters** 12–40px; content often centered with large side margins on wide viewports (~300px optical gutters on some home frames)
- **16px radius** dominates cards; pills use full round (`9999`) for chips and primary buttons
- **1px solid borders** on elevated dark cards (high occurrence on enterprise/list UIs)
- Signup: **split layout**—left brand/product panel, right form column with social stack then email field

Layout patterns:

1. **Centered manifesto hero** (title + sub + dual CTAs)
2. **Horizontal product carousel** (section title left, chevrons + text link right, 2–3 cards visible)
3. **Masonry / multi-column testimonials** on dark field under logo strip
4. **Equal card grids** for compliance (3-up) and enterprise dual feature (2-up)
5. **Auth split** light form vs branded side

## Visual language

### Shape and depth

- Default geometry: **16px rounded rectangles** for product and social proof cards
- Controls: **pill buttons** (fully rounded) for primary and many secondary actions
- Depth is **subtle**, not skeuomorphic: dark cards lift mainly via border + slight fill shift; signup uses soft stacked shadows (`y:2 blur:4` and `y:4 blur:6` family) on light surfaces
- Product mock chrome is **desaturated UI on darker-than-canvas panels**—service maps, charts, MCP chat bubbles, S3 trees

### Imagery and product fiction

- Prefer **in-product screens** (service maps with red nodes, latency charts, log lines, region maps) over stock photos
- Decorative maps use **hex/dot fields** and small lavender location pills
- AI SRE section mixes **chat bubbles, avatars, and embedded charts**—still framed in the same 16px dark cards
- Logo walls stay **muted monochrome** so they don’t fight the purple accent

### Borders and dividers

- Cards: continuous 1px low-contrast border
- Rare hard section rules; separation is mostly **space + background continuity**
- Ghost buttons: 1px light border, transparent fill

## Components

### Navigation (marketing)

- Left: pink rounded mark + wordmark
- Center/right: text links in muted light gray
- Trailing cluster: ghost “Explore docs” + solid white “Start for free”
- Optional utility: language/globe control

### Buttons

| Variant | Look |
| --- | --- |
| Primary | White fill, dark label, full pill |
| Secondary / ghost | Transparent, light border, light label, pill |
| Text link with chevron | Lavender or light gray + `>` |

Keep button labels short; pair primary + ghost under heroes.

### Cards

- **Feature card**: image/UI top or full bleed mock, title + 1–2 lines body, 16px radius, dark elevated fill
- **Testimonial card**: quote body, avatar, name, handle, small blue bird; lavender `@` mentions
- **Compliance card**: circular monochrome badge, bold title, quiet body
- **Enterprise dual card**: illustration left/top, explanatory copy with one lavender inline link

### Forms (signup)

- Light canvas, centered column
- Stacked social providers (full-width bordered buttons with brand glyphs)
- “or” divider, then email field + continue
- Fine print centered under actions
- Same pink mark anchors trust continuity from dark marketing

### Product UI fragments (inside marketing)

- Tables with green “Active” pills
- Chart cards with sparse grids
- Chat / MCP panes with avatar chips and question bubbles
- Tree browsers (S3 / Iceberg) in monochrome + soft blue folder accents

## Responsive notes

Captures are **desktop-wide viewports** (~1280–1712px). Observed behaviors to respect when adapting:

- Feature rows become **horizontal carousels** with chevrons rather than wrapping dense 3-up grids too tightly
- Testimonials use **multi-column masonry** on wide screens—collapse to single column on narrow
- Signup stays a **focused form column**; the branded side may stack above/below on small widths (not evidenced here—treat as guidance)
- Enterprise compliance is natural **1 → 3 column** progression

## Practical guidance

**Do**

- Lead with white type on near-black; keep body one step down in gray
- Use **lavender for links and quiet emphasis**, white for the money CTA
- Round product surfaces at **16px**; pills for actions
- Show **real product chrome** (maps, traces, logs) inside cards
- Keep the **pink mark** as the only warm brand fleck in chrome
- Mirror the system on auth with a **light inversion**, not a new palette

**Don’t**

- Turn the whole UI pink or use pink as link color
- Introduce neon greens/blues outside status and chart data
- Over-shadow dark cards into murky gray mush—prefer border + fill
- Mix a second display typeface for heroes
- Make secondary buttons high-chroma; ghosts stay quiet
- Flatten testimonials into a single quote carousel if you can keep the lively masonry density

## Scope note

Based on eight desktop captures: home (`/`, pins 7010–7013), sign-up (`/users/sign-up`, 7014), and enterprise (`/enterprise`, 7015–7017). No measured structured palette or declared font families were available—color hexes are screenshot-derived. Mobile breakpoints and motion were not in scope.

## Captured pages

[![Home — Tracing product cards](https://pin.fontofweb.com/7010?format=jpg)](https://design.withfudge.com/share/pin-7010)

[Home — Tracing product cards](https://design.withfudge.com/share/pin-7010)

[![Home — Social proof masonry](https://pin.fontofweb.com/7011?format=jpg)](https://design.withfudge.com/share/pin-7011)

[Home — Social proof masonry](https://design.withfudge.com/share/pin-7011)

[![Home — mid scroll band](https://pin.fontofweb.com/7012?format=jpg)](https://design.withfudge.com/share/pin-7012)

[Home — mid scroll band](https://design.withfudge.com/share/pin-7012)

[![Home — lower marketing band](https://pin.fontofweb.com/7013?format=jpg)](https://design.withfudge.com/share/pin-7013)

[Home — lower marketing band](https://design.withfudge.com/share/pin-7013)

[![Sign up — light auth split](https://pin.fontofweb.com/7014?format=jpg)](https://design.withfudge.com/share/pin-7014)

[Sign up — light auth split](https://design.withfudge.com/share/pin-7014)

[![Enterprise — AI SRE](https://pin.fontofweb.com/7015?format=jpg)](https://design.withfudge.com/share/pin-7015)

[Enterprise — AI SRE](https://design.withfudge.com/share/pin-7015)

[![Enterprise — S3 / regions](https://pin.fontofweb.com/7016?format=jpg)](https://design.withfudge.com/share/pin-7016)

[Enterprise — S3 / regions](https://design.withfudge.com/share/pin-7016)

[![Enterprise — compliance trio](https://pin.fontofweb.com/7017?format=jpg)](https://design.withfudge.com/share/pin-7017)

[Enterprise — compliance trio](https://design.withfudge.com/share/pin-7017)

## Colors

- `#0b0b12`
- `#ffffff`
- `#8b8cf8`
- `#a5a6f6`
- `#16161f`
- `#9ca3af`
- `#22c55e`
- `#f5a3c7`
- `#e4e4e7`
- `#18181b`
