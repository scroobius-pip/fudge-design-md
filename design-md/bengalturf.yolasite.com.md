# How bengalturf.yolasite.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/bengalturf.yolasite.com-design)

Last updated: 2026-07-28

## Design character

Bengal Turf is a **local lawn-and-landscape brochure site** on a classic Yola template: one solid olive-green field, a light green “glass” title banner, a black strip of simple text tabs, and a centered two-column body that pairs one garden photo with short service copy. It reads like a neighborhood contractor card more than a modern marketing site—trust, phone-first CTA, and service list over polish.

What should survive adaptation:

- A **single deep olive canvas** that fills the whole viewport so white page chrome never appears.
- A **centered light-to-mid green gradient banner** carrying the business name as the only logo treatment.
- **Phone-led hero type** (“Call For a Free Consultation …”) in heavy black before any body copy.
- **Simple two-column content blocks**: photo + About, then Mission + Services list.
- **Minimal chrome**: three text tabs, no mega-menu, no cards, no fancy shadows beyond the banner’s soft drop.

## Foundations

### Color

No structured palette was recorded; values below are sampled from the homepage captures.

| Role (interpretive) | Hex | Where it shows |
| --- | --- | --- |
| Page canvas | `#496c10` | Full-bleed olive background |
| Canvas variation | `#598435` | Slightly lighter mid-field green in places |
| Deep banner edge / shadow green | `#3e5d0d` | Lower edge of the title banner |
| Banner highlight | `#e7f5d1` / `#f4ffdf` | Top of the glossy title bar |
| Banner mid gradient | `#bde282` | Center of the title bar fill |
| Title wordmark olive | `#496c10` / `#496810` | Business name on the light banner (matches canvas) |
| Primary text / CTA | `#000000` | Headline phone line, section titles, body |
| Top nav strip | `#000000` | Thin black bar behind tabs |
| Active / light tab chip | near `#E6F4D0` | “index” tab chip against the black strip |

Relationships that matter:

- **Green-on-green branding**: the wordmark is the same family of olive as the page, set on a pale lime gradient so it feels “lawn” without introducing a second brand hue.
- **Black for action and reading**: the free-consultation line and body copy stay pure black on olive for maximum contrast; there is no secondary accent color (no orange CTA, no link blue in the main view).
- **Photo is the only full-color interruption**—real garden pinks, blues, and lawn greens sit inside a hard rectangular frame on the green field.

### Typography

Font families were not declared in the capture. Visually the stack is a **generic system serif/sans mix typical of older website builders**: section titles look bold serif-ish; body is a plain readable sans or default UI face. Treat type as utilitarian, not branded.

Observed sizes (approximate, from structured text metrics on the homepage):

| Use | Size | Weight | Notes |
| --- | --- | --- | --- |
| Business name in banner | ~30–39px | 700 | Slight negative tracking (~-3) on large bold lines |
| Phone CTA line | large display (~30–39px class) | 700 | Dominates the fold; black on olive |
| Section headings (About Us, Mission Statement, Services) | ~15–16px range visually bold | 700 | Short labels above short paragraphs |
| Body / list copy | **13px** dominant (hundreds of occurrences) | 400 | Line-height ~20.8px when set |
| Secondary body | 15–16px / 24px lh | 400 | Occasional larger paragraph measure |

Hierarchy is shallow: **banner name → phone CTA → H2-style section labels → 13px body**. There is no display/marketing type scale beyond that CTA.

### Spacing and layout

- **Centered column**: large equal side margins (~403px at 1592px-wide captures) pin content to a middle column roughly ~780px wide—classic fixed-template centering, not a fluid modern grid.
- **Tight default padding**: 5px padding is extremely common (template chrome); content blocks also use ~20px vertical padding.
- **Vertical rhythm**: banner → generous gap → CTA → gap → photo/About row → Mission/Services row. Sections stack with modest air, not a strict 8px scale.
- **No card gutters or multi-breakpoint grid** is evident; layout is one desktop brochure composition.

## Visual language

- **Flat green field** instead of section bands, waves, or photography full-bleed backgrounds.
- **Glossy title capsule**: rounded rectangle with a vertical light-green gradient, soft drop shadow into the olive field—the main decorative object.
- **Hard-edged photo**: one rectangular garden image, no rounded mask, no overlay captions.
- **No recorded radii/border/shadow tokens** beyond what the banner shows visually; UI chrome is sparse.
- **Imagery**: a single sunny perennial-bed photo sells “curb appeal” more than logos or icons do.
- **Motion**: none observed; static brochure page.

## Components

1. **Top utility nav** — Black full-width strip; right-aligned text tabs (`index` / `Services` / `Contact Us`). Active tab reads as a light chip; others are plain light labels on black.
2. **Brand banner** — Centered gradient bar with the full business title as the logo.
3. **Phone CTA headline** — Centered bold line with the local number inline (primary conversion).
4. **Media + copy row** — Left: garden photo. Right: “About Us” + short paragraphs.
5. **Two-up text sections** — “Mission Statement” paragraph beside “Services” intro + bullet list (lawn care, landscaping, fertilization, …).
6. **Services list** — Simple bullets, no icons, no cards, no pricing table in the captured fold.

States beyond default/active tab are not visible in stills; do not invent hover or focus treatments.

## Responsive behavior

Only **1592×763 viewport** crops of `/` were captured (three near-identical frames). There is **no multi-breakpoint evidence**. Expect a traditional fixed/centered template that may letterbox or scale poorly on small screens rather than a deliberate mobile system.

## Practical guidance

**Preserve**

- One decisive **lawn green** canvas and a pale lime brand bar—not a white marketing page with a green accent.
- **Phone number as the hero**, not a generic “Get a quote” button farm.
- Short **trust paragraphs + service bullets** next to one real outdoor photo.
- Extremely small nav (three items) and almost no decorative UI.

**Avoid**

- Importing modern SaaS patterns (glass cards, large product sans, purple gradients, sticky mega-footers).
- Adding a second brand color that fights the olive field.
- Over-photographing; one strong garden shot matches the captured restraint.
- Pretending this is a custom design system—it is a **Yola (yolasite) template** dressed for a local turf business.

## Scope note

Based on three homepage viewport captures of `bengalturf.yolasite.com/` (pins 9475, 9474, 9473)—same path and layout, different crops of one brochure page. No declared fonts, no structured color tokens, and no other routes were in scope. Use this as a **local service / website-builder template** reference, not as a multi-page product design system.

## Captured pages

[![Home — brand banner and phone CTA](https://pin.fontofweb.com/9475?format=jpg)](https://design.withfudge.com/share/pin-9475)

[Home — brand banner and phone CTA](https://design.withfudge.com/share/pin-9475)

[![Home — about and mission fold](https://pin.fontofweb.com/9474?format=jpg)](https://design.withfudge.com/share/pin-9474)

[Home — about and mission fold](https://design.withfudge.com/share/pin-9474)

[![Home — services list on olive field](https://pin.fontofweb.com/9473?format=jpg)](https://design.withfudge.com/share/pin-9473)

[Home — services list on olive field](https://design.withfudge.com/share/pin-9473)

## Colors

- `#496c10`
- `#598435`
- `#3e5d0d`
- `#bde282`
- `#e7f5d1`
- `#f4ffdf`
- `#000000`
