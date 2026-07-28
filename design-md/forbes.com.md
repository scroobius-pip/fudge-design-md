# How forbes.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/forbes.com-design)

Last updated: 2026-07-28

## Design character

Forbes.com presents as a **premium business-media brand** with two interlocking modes: a dense editorial content index (Innovation and section hubs) and high-contrast **brand campaign strips** (newsletter “For Your Inbox”). The system mixes classical serif display for authority with a clean sans for UI and decks. Black, white, and Forbes red do the heavy lifting; photography and bold 3D illustration sit on pure black stages.

What should survive adaptation:

- **Serif display + sans UI** pairing for headlines vs chrome.
- A **black/white/red** brand core — red reserved for Forbes marks, illustration accents, and scarce emphasis.
- Editorial **card grids** with 8–16px radii and generous 24–32px padding.
- Campaign blocks that flip to **full black** with white serif headlines and a simple email + Sign Up row.

## Foundations

### Color

Structured role colors were not returned. From screenshots:

| Role | Hex (approx.) | Use |
|------|----------------|-----|
| Canvas (editorial) | `#ffffff` | Section hubs, article grids |
| Canvas (campaign) | `#000000` | Newsletter / brand modules |
| Primary text on light | `#111111` | Headlines, body |
| Primary text on dark | `#ffffff` | Campaign headlines |
| Secondary / meta | `#6b6b6b` | Bylines, labels |
| Forbes red | `#e31c23` / bright red | Logo, illustration, accents |
| Input fill | `#ffffff` | Email field on black |
| Control fill | `#e8e8e8` | Sign Up button on black |
| Link blue | `#2f6fed` | Legal/policy links in fine print |

Red is brand punctuation, not a wash. Campaign modules go fully black so red illustration and white type punch.

### Typography

No declared families recorded. Visual system:

- **Display / campaign headlines:** high-contrast transitional/modern **serif**, large (visually ~32–48px+), elegant italic optional in brand moments.
- **Section titles & decks:** sans at 24px / 36px lh (measured) and 16px body.
- **Meta / UI:** 12–14px medium sans (measured 12px w500, 14px w500).

Measured ladder:

| Role | Size | Weight | LH |
|------|------|--------|-----|
| UI / body base | 16px | 400 | 16–24px |
| Meta | 12–14px | 500 | 18–21px |
| Deck / card title | 24px | 400 | 36px |
| Display | ~32px+ | 400 | ~38px |

### Spacing and layout

- Section padding often **24px** vertical and **32px** horizontal; home campaign uses **40px** vertical with **128px** side padding on wide frames.
- Card radius **8px** dominant; occasional **16px**.
- Innovation hub: multi-column story cards, topic chips, standard media-site header density.
- Newsletter module: left copy column + right illustration, hairline rule under “For Your Inbox”.

## Visual language

- Soft **8px** cards on light editorial surfaces.
- **Flat black stages** for brand marketing with crisp vector/3D still-life (keyboard, mug, Forbes Daily booklet) in red/black/white.
- Hairline rules and quiet greys rather than heavy shadows.
- Imagery is photographic for news cards; illustrative for brand acquisition modules.

## Components and states

1. **Section hub header** — title, filters/topics, story grid.
2. **Story card** — image, eyebrow, headline, deck.
3. **Newsletter band** — black full-bleed, serif H1, email field, muted Sign Up, legal microcopy with blue links.
4. **Utility links** — “See All Newsletters →” top-right on dark bands.

Default/resting states only in captures; Sign Up reads secondary (light gray) next to a white field so the email input is the focus.

## Responsive behavior

Two widths observed (~1460×406 strip and 1712×1314 hub). The campaign strip stays single-row on wide screens with illustration right-aligned; editorial hub keeps multi-column cards. Narrow behavior not fully captured.

## Practical guidance

**Preserve**

- Serif authority on big statements; sans everywhere else.
- Black campaign slabs as brand punctuation inside a mostly light site.
- Scarce Forbes red.
- 8px card rounding and 24/32 padding rhythm.

**Avoid**

- Turning the whole site into a dark theme.
- Overusing red backgrounds.
- Dropping serif display in favor of all-sans “tech startup” tone.
- Heavy drop shadows on news cards.

## Scope note

Studied Innovation hub (`/innovation/`) and a home newsletter strip (`/`). Color roles, font families, and shadows were not structured — palette and serif/sans pairing come from screenshot reading. Only two captures; inner article templates are out of scope.

## Captured pages

[![Innovation hub](https://pin.fontofweb.com/9036?format=jpg)](https://design.withfudge.com/share/pin-9036)

[Innovation hub](https://design.withfudge.com/share/pin-9036)

[![For Your Inbox campaign](https://pin.fontofweb.com/9035?format=jpg)](https://design.withfudge.com/share/pin-9035)

[For Your Inbox campaign](https://design.withfudge.com/share/pin-9035)

## Colors

- `#000000`
- `#ffffff`
- `#111111`
- `#6b6b6b`
- `#e8e8e8`
- `#e31c23`
- `#2f6fed`
