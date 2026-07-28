# How ads.pinterest.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ads.pinterest.com-design)

Last updated: 2026-07-28

## Design character

Pinterest’s ads create experience is a **calm, spacious ads-manager workflow**—not the consumer red-grid feed. The create flow sits on white and soft gray surfaces, uses rounded white cards with light hairline borders, and reserves saturated red for primary continuum actions (e.g. Create ad). Hierarchy is quiet: dark eggplant/near-black titles, warm-gray secondary copy, and lilac informational banners instead of loud alert chrome.

What should survive adaptation:

- **White / soft-gray workspace** with floating rounded panels.
- **Red as the scarce primary action**, not a page wash.
- **Card-based steps**: choose a path → configure details, each in its own softly elevated or bordered container.
- **Friendly empty states** (illustrated pin + short guidance) rather than dense empty tables.

## Foundations

### Color

Measured roles from captures:

| Role | Hex | Use |
| --- | --- | --- |
| Text primary | `#211922` / `#000000` | Headings, emphasis (eggplant-black vs pure black depending on surface) |
| Text secondary | `#62625b` | Supporting labels, descriptions, muted UI copy |
| Accent (light) | `#ffffff` | Card fills, primary surfaces |
| Accent (muted) | `#62625b` | Secondary emphasis / chrome alignment with secondary text |

From screenshots (visual interpretation beyond measured roles):

- **Page canvas**: light cool gray behind cards.
- **Primary CTA**: Pinterest red fill with white label on the main Create control.
- **Info banner**: soft lilac / lavender wash with darker info icon and copy (“Each ad group requires…”).
- **Tip chip**: small purple pin glyph + purple-tinted helper text above the choice cards.
- **Icon strokes**: dark gray line icons in choice tiles.

Do not flood the shell with consumer-feed scarlet; red is for decisive actions.

### Typography

Declared families were not available. Measured scale:

| Style | Weight | Size | Line-height |
| --- | --- | --- | --- |
| Page / panel title | 700 | **28px** | ~30.8px |
| Card / section title | 700 | **16px** | ~22.4px |
| Body / description | 400–500 | **14px** | ~19.6px |
| Meta / dense UI | 400–500 | **12px** | ~18px or compact |

Type is a clean product sans—readable, slightly compact, with bold used sparingly for step titles (“Ads”, “Select Pins”, “Create ad”). No display marketing scale inside this flow.

### Spacing and layout

- Spacing clusters around **8 / 12 / 16 / 20 / 24px** (with occasional negative overlap for stacked chrome).
- Layout is a **centered or content-column workflow**: large rounded outer shell, internal sections stacked vertically.
- Choice step: **three equal cards in a row** (Select Pins / Create ad / Create Idea ad) inside a parent card.
- Follow-on section (“Set up ad details”) is a full-width sibling card beneath.
- Empty preview states use generous padding around illustration + short copy.

Density is lighter than classic enterprise ads UIs—more breathing room, fewer grid lines.

## Visual language

- **Radii**: **8 / 12 / 16px** dominate. Outer workflow shells trend toward the larger end; inner controls and inputs sit nearer 8–12px. Pill-like only where the design already softens (banners).
- **Borders**: ubiquitous **1px solid** hairlines on cards and nested tiles; occasional **2px** for stronger emphasis. Borders are light gray on white—structure without heaviness.
- **Shadows**: soft single elevation appears (`0 3px 12px`) under key shells—subtle lift, not dramatic marketing glows.
- **Icons**: rounded-square outline icons paired with bold title + short description inside choice cards.
- **Illustration**: flat, friendly empty-state art (oversized pin, soft shapes) on pale grounds.
- **Motion**: not established from still captures.

## Components and states

- **Workflow shell**: large white rounded container on gray page ground.
- **Section header**: bold title + optional help affordance (question mark).
- **Helper tip row**: icon + concise guidance (URL parameters note).
- **Choice cards**: bordered rounded tiles with icon, bold name, muted description—three-up for ad creation paths.
- **Info banner**: full-width soft lavender bar with info icon and instructional sentence.
- **Primary button**: filled red, medium weight label, placed as the decisive action in empty or complete states.
- **Empty state**: illustration + short explanation + primary CTA centered in a content panel.
- **Form / detail regions**: labeled zones ready for ad setup once a path is chosen (structure visible even when sparse).

Visible composition only—no hover/focus inventory from these frames.

## Responsive behavior

Captures include a **narrow strip (~1048×454)** and **large viewports (1712×1314)**:

- Large: three choice cards in a horizontal row; dual-panel feelings (setup + preview) where the flow shows them.
- Narrower crop: same card language and radii; content compresses, cards may tighten but keep 8–16px rounding and 1px borders.

Exact breakpoint math is not published; preserve card stacking over shrinking type below readability.

## Practical guidance

**Preserve**

- Gray page + white rounded cards + hairline borders.
- Red primary CTA scarcity.
- 28px bold step titles and 12–14px UI text.
- Lilac info banners for non-blocking guidance.
- Friendly empty states before the grid fills.

**Avoid**

- Consumer-feed masonry and heavy scarlet backgrounds inside Ads Manager.
- Sharp 2px industrial corners or dense data-table first views for creation.
- Multiple competing primary colors (green success stacks, rainbow tags) in the create shell.
- Oversized marketing display type in operational steps.

**Adaptation tips**

- Token-wise: background gray, surface white, text `#211922`, muted `#62625b`, border light gray, radius 8/12/16, space 8–24, shadow `0 3 12`.
- One brand red for primary; purple only for small tips/brand glyphs.
- Structure create flows as carded decisions, then carded configuration.

## Scope note

Three viewport captures of the Pinterest Ads **create** path (`/advertiser/…/ads/create/`) at narrow and large widths. Covers choice cards, empty create state, and setup framing—not the full Ads Manager navigation, reporting, or consumer Pinterest. Font families undeclared; colors include measured text/accent roles plus screenshot-observed red/lilac/gray canvas.

## Captured pages

[![Create flow — choice cards](https://pin.fontofweb.com/7069?format=jpg)](https://design.withfudge.com/share/pin-7069)

[Create flow — choice cards](https://design.withfudge.com/share/pin-7069)

[![Create ad empty state](https://pin.fontofweb.com/7068?format=jpg)](https://design.withfudge.com/share/pin-7068)

[Create ad empty state](https://design.withfudge.com/share/pin-7068)

[![Narrow create chrome](https://pin.fontofweb.com/7070?format=jpg)](https://design.withfudge.com/share/pin-7070)

[Narrow create chrome](https://design.withfudge.com/share/pin-7070)

## Colors

- `#211922`
- `#000000`
- `#62625b`
- `#ffffff`
