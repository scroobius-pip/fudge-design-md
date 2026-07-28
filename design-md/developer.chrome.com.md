# How developer.chrome.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/developer.chrome.com-design)

Last updated: 2026-07-28

## Design character

developer.chrome.com is Google’s **Chrome for Developers** hub: a dark, documentation-forward product site that mixes Material-ish cards with bold marketing display type. The shell is near-black, type is light gray/white, and accent is a calm sky blue. Home is a hero + illustrated feature cards; docs is a searchable catalog of topic cards. Even the 404 stays on-brand—minimal, centered, same chrome and rainbow footer rule.

What should survive adaptation:

- **Dark canvas first**, with light text and blue interactive accents
- **Large rounded feature cards** (≈24px) carrying illustration + short title/body + outlined blue CTA
- **Pill primary buttons** in solid blue on the hero
- **Quiet top chrome**: logo wordmark, sparse nav, search, theme and language controls
- A thin **Chrome rainbow hairline** above the footer as the only multi-hue brand flourish

## Foundations

### Color

Measured roles:

| Role | Hex | Use |
| --- | --- | --- |
| Accent | `#70b1ff` | Links, outlined buttons, hero highlight word, focus-ish blues |
| Text primary | `#f8f9fa` | Headings and primary body on dark |
| Text secondary | `#afb2b6` | Supporting copy, muted nav/meta |

Visual reading from screenshots:

- Page background: **near-black / charcoal** (`~#202124`-class), not pure black
- Hero title splits **blue** (“A Powerful Web.”) and **white** (“Made Easier.”)
- Feature cards: saturated **blue illustration panel** beside **white content panel**, or full blue art cards
- Outlined CTAs: blue stroke + blue label on dark
- Filled hero CTA: solid medium blue pill, white label
- 404 numeral and message: mid gray on the same dark field
- Footer separator: horizontal **red→yellow→green→blue** gradient rule (Chrome identity)
- Small gray “FEATURED” / “LATEST NEWS” pills on cards

Palette span is intentionally limited: dark neutrals + one blue accent + illustration color inside media only.

### Typography

Family names were not captured; visuals read as a **geometric Google sans** single family.

| Role | Size / weight / line-height | Context |
| --- | --- | --- |
| Display hero | 96px / 700, lh ~105.6px | Home marketing headline |
| Section / page title | 48px / 700, lh 60px | Docs H1, major section heads |
| Card / subhead | 28px / 500, lh 36px; 20px / 700, lh 24px | Feature titles, list heads |
| Body | 16px / 400, lh 24px (also 16/26) | Default paragraph and card body |
| UI / meta | 14px / 500, lh 20px; 13px / 400, lh 18–24; 12px / 500, lh 16 | Nav, chips, dense docs chrome |
| 404 display | large light gray tabular “404” | Error state |

Hierarchy jumps hard from 96 → 48 → 28 → 16; marketing is billboard-scale, docs settle into compact 13–16px UI type. Weights 400 / 500 / 700 dominate.

### Spacing and layout

- Card padding commonly **32px** all sides; secondary padding **16px** and **24px**
- Docs list rows use tight **12px** horizontal padding and **10px** control padding
- Vertical rhythm: **32px** margins between major blocks; **18px** between denser docs items; **8–16px** micro spacing
- Content often centered with ~**212px** side margins on wide viewports—a max-width column feel
- Home: centered hero stack (title, subtitle, CTA) above a **two-column card row**, then a full-width section title
- Docs: page title + long subtitle, search field, then **multi-column card grid** (about three cards across at wide widths)
- 404: large empty center field, search affordance, standard footer

Density is moderate: marketing is airy; docs packs more cards per viewport without feeling like a spreadsheet.

## Visual language

- **Radii:** **24px** (and 25px) on primary marketing/feature cards—signature soft tile; **8px** on smaller controls/inputs
- **Borders:** **2px solid** frames appear on some home cards/illustrations; docs show lighter **1px** rules; outlined buttons use a clear blue stroke
- **Shadows:** subtle Material-like stacks on elevated docs chrome (`0 1 2`, `0 2 6 2`, `0 4 6 -4`)—quiet, not dramatic
- **Illustration:** isometric/3D UI metaphors, bright secondary colors inside art only (red/green/yellow nodes) while chrome stays monochrome+blue
- **Footer:** three-column link groups under the rainbow rule; legal row beneath a hairline
- **Empty/error:** 404 is typographic and sparse—no mascot required

Shapes read as **large soft rectangles + pills**, aligned with contemporary Google developer sites.

## Components and states

**Top app bar**  
Chrome logo + “chrome for developers” wordmark; text nav (Docs dropdown, Case studies, Blog, New in Chrome); icon cluster for search, theme toggle, language, Sign in.

**Hero**  
Centered multi-line display title (blue + white), muted subtitle, single filled blue **Get Started** pill.

**Feature / story cards**  
Large 24px-radius tiles: illustration zone + title + body + outlined blue text button (“Get started”, “Explore now”). Optional small gray category pill above the title.

**Docs catalog cards**  
Smaller equal tiles in a grid: short title, one-line description, generous padding, consistent radius—browse-by-topic rather than long article body in these captures.

**Search**  
Prominent field under docs H1; 404 also centers search as recovery.

**Footer**  
Rainbow gradient rule; Contribute / Related content / Follow columns; Terms | Privacy.

Stills show default and empty-error states clearly; hover/focus specifics are not documented here.

## Responsive behavior

- Mid-width home (~1232px) keeps the **two-up** feature cards and stacked hero
- Wider home (~1712px) preserves the same structure with more horizontal margin
- Docs at ~1701px shows a wide title block and card grid
- Prefer **collapsing card grids** and retaining 24px card radius over inventing a different mobile visual language (narrow mobile home not in the pin set)

## Practical guidance

**Preserve**

1. Dark charcoal canvas + `#f8f9fa` primary type + `#70b1ff` accent  
2. Billboard 48–96px marketing titles with short muted subtitles  
3. 24px-radius illustrated feature cards and blue outlined secondary CTAs  
4. Sparse top nav and search-led docs index  
5. Rainbow footer hairline as the sole multi-color brand stripe  
6. Calm 404 that reuses shell chrome instead of a novelty error page  

**Avoid**

1. Light-mode-only recreations that lose the dark developer-hub feel (unless implementing the theme toggle explicitly)  
2. Sharp 4px cards or heavy drop shadows—soft large radii are the signature  
3. Turning illustration neons into UI chrome colors  
4. Dense left-nav API reference styling for the marketing home (different page type)  
5. Inventing font file names or licences without verification  

## Evidence scope

Studied captures: home at multiple widths (`/`, pins 6426/6425/6424), docs index (`/docs`, 6427), and 404 (`/extensions/experimental_devtools_console`, 5809). Five captures total. Font families, explicit light-theme tokens, and motion were not measured; accent/text roles and spacing/radius figures above are the reliable structural guide.

## Captured pages

[![Home — hero and feature cards](https://pin.fontofweb.com/6426?format=jpg)](https://design.withfudge.com/share/pin-6426)

[Home — hero and feature cards](https://design.withfudge.com/share/pin-6426)

[![Home — wide marketing layout](https://pin.fontofweb.com/6424?format=jpg)](https://design.withfudge.com/share/pin-6424)

[Home — wide marketing layout](https://design.withfudge.com/share/pin-6424)

[![Docs index — topic card grid](https://pin.fontofweb.com/6427?format=jpg)](https://design.withfudge.com/share/pin-6427)

[Docs index — topic card grid](https://design.withfudge.com/share/pin-6427)

[![404 — minimal recovery](https://pin.fontofweb.com/5809?format=jpg)](https://design.withfudge.com/share/pin-5809)

[404 — minimal recovery](https://design.withfudge.com/share/pin-5809)

## Colors

- `#70b1ff`
- `#f8f9fa`
- `#afb2b6`
