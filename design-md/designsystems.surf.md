# How designsystems.surf is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/designsystems.surf-design)

Last updated: 2026-07-28

## Design character

designsystems.surf is a **documentation-and-product hybrid** for people who collect and build design systems. The shell is deliberately quiet: white canvas, black ink, light gray separators, and a slim top bar with a pill search field. Personality arrives through **soft gray content cards**, **orange gradient commerce CTAs**, circular brand marks in side navigation, and simple diagram illustrations—not through a loud marketing skin.

What should survive adaptation:

- A **library IA**: top nav + optional left brand list + main reading column (+ optional right purchase rail on product pages).
- **Neutral chrome, warm CTA**—almost everything is black/gray/white until “Buy” / “Get for free” / “Subscribe”.
- **Card-heavy education**: feature explanations live in rounded soft-gray tiles with small diagrams.
- **Large, confident product titles** with short gray supporting paragraphs.
- **Pill controls** for search, subscribe, and primary purchase actions.

## Foundations

### Color

Measured values:

| Hex | Notes |
| --- | --- |
| `#000000` | Primary text / ink |
| `#0000ee` | Recorded secondary text; treat cautiously—screenshots read true body secondary as **muted gray**, while default link blue may be an artifact |

**Visual reading (authoritative for brand feel):**

- **Page canvas:** pure white.
- **Primary text:** near-black.
- **Secondary text:** medium gray for descriptions and meta (“FOUNDATIONS: 13 / COMPONENTS: 21”).
- **Surfaces:** very light gray card fills (`~#f4f5f7` range) with no hard border, sometimes a whisper divider.
- **Accent CTA:** bright orange to orange-yellow **horizontal gradient** on primary buttons (“Buy for $99”, “Get for free”).
- **Chips / diagrams:** pale blue-gray nodes and strokes inside explanatory cards; brand logos in the left rail keep their native colors.
- **Nav badge:** small solid orange count pip on “Products”.

Do not promote raw browser blue as a brand color. Prefer black ink, gray secondary, light gray surface, orange CTA.

### Typography

Families were not captured; the UI reads as a **single neutral sans** (system-like geometric).

Observed scale:

| Role | Size | Weight | Line-height |
| --- | --- | --- | --- |
| Product / page display | 40px | 600 | ~48px |
| Section heading | 32px | 600 | ~35–38px |
| Card / subsection title | 20–24px | 500–600 | ~29–30px |
| Body | 16–18px | 400 | ~24–30px |
| UI / meta / lists | 12–14px | 400–500 | ~18–21px |

Display lines are tight and confident; body stays airy (~1.5). Weight steps (400 / 500 / 600) matter more than italic or alternate families. Logo walls and meta labels often sit in small caps-like gray tracking.

### Spacing and layout

Strong repeated measurements:

- **Top offset under sticky chrome:** padding-top **100–124px** appears constantly—content clears a persistent header.
- **Card padding:** 16–24px common; side padding **22–32px** on main columns.
- **Section vertical rhythm:** 48px and 32px bottoms; 12–16px between stacked list rows.
- **Radii:** **16px** dominates content cards; also 12, 24, 32; **100px / 200px** for pills and fully round chips.

Layout archetypes:

1. **Component / system reference:** left scrollable brand list + main article column (title, prose, foundation links, promo card).
2. **Product landing:** main storytelling column + **sticky right rail** (toolkit list, checklist, orange buy button, student note).
3. **Marketing mid-sections:** 1-up soft card, then 2-up diagram cards on light gray fills.

## Visual language

- **Corners:** medium-soft (12–16px) on content cards; fully pillular search and CTAs.
- **Depth:** essentially **flat**—no meaningful shadow system recorded; separation is fill contrast and hairline rules.
- **Diagrams:** rounded node-and-edge illustrations in pale blue/gray, teaching tokens and workflows without heavy illustration style.
- **Logo treatments:** circular cropped brand marks in the left nav; monochrome or original-color logo strips for social proof.
- **Header:** minimal—mark, text links, center pill search, right outline/light “Subscribe” pill.

## Components and states

- **Global header:** libraries/resources/products links, search pill, subscribe.
- **Left system index:** vertical list of design systems with circular favicons; active item implied by position/scroll, not a heavy highlight in the stills.
- **Page hero block:** large title, gray meta counts, 1–2 paragraphs, text links (“Source”, “Figma”).
- **Featured resource / promo row:** icon + title + blurb + orange pill CTA.
- **Foundation / component lists:** simple stacked text links under a bold heading—documentation barebones by design.
- **Product sidebar:** checklist with black circular checks, template rows with icons, gradient buy button.
- **Soft info cards:** light gray rounded rectangles holding diagrams + title + gray description.
- **Search field:** tall pill, leading icon, placeholder “Search for a design system”.

Interactive states beyond default are not evidenced; accordions and filters appear as content destinations rather than richly styled widgets in these frames.

## Responsive behavior

Desktop frames (~1712×1314) show the full library + article or article + buy rail. Narrower product captures (~800–958px) keep stacked cards and simplified chrome; the buy rail likely collapses below or into a shorter stack. Exact breakpoint tokens were not measured—preserve the idea that **navigation density drops before type scale does**.

## Practical guidance

**Preserve**

- White, quiet documentation chrome with orange reserved for conversion.
- Soft gray educational cards and flat separation (no heavy shadows).
- 16px-radius content language + pill CTAs/search.
- Clear IA: browse systems on the left, read in the center, buy on the right when selling kits.
- Large 32–40px titles with short gray ledes and generous header clearance (~100px+).

**Avoid**

- Turning the whole site into a dark “design tool” theme; the product is a bright reference library.
- Rainbow section backgrounds or glassmorphism—diagrams already supply interest.
- Dense table-UI styling for foundations lists; the calm text list is part of the brand.
- Treating the recorded `#0000ee` as intentional brand blue.
- Shrinking display type to generic 24px marketing; scale is a trait here.

## Evidence scope

Based on eight captures across component reference (`/components/accordion`), system detail (`/design-systems/apple`), and product pages (`/products/typography-foundation`, `/products/ai-ds-starter-stack`) at desktop and mid widths. Spacing, radii, type sizes, and black primary text are measured; font files, true secondary gray hexes, orange CTA hexes, and motion were inferred visually or left unspecified. Use this as a desktop-first docs/commerce shell guide.

## Captured pages

[![Accordion component reference](https://pin.fontofweb.com/8109?format=jpg)](https://design.withfudge.com/share/pin-8109)

[Accordion component reference](https://design.withfudge.com/share/pin-8109)

[![Apple HIG system detail](https://pin.fontofweb.com/8105?format=jpg)](https://design.withfudge.com/share/pin-8105)

[Apple HIG system detail](https://design.withfudge.com/share/pin-8105)

[![Typography Foundation product](https://pin.fontofweb.com/8102?format=jpg)](https://design.withfudge.com/share/pin-8102)

[Typography Foundation product](https://design.withfudge.com/share/pin-8102)

[![AI DS Starter Stack mid-page cards](https://pin.fontofweb.com/8108?format=jpg)](https://design.withfudge.com/share/pin-8108)

[AI DS Starter Stack mid-page cards](https://design.withfudge.com/share/pin-8108)

[![Typography kit mid-width cards](https://pin.fontofweb.com/8104?format=jpg)](https://design.withfudge.com/share/pin-8104)

[Typography kit mid-width cards](https://design.withfudge.com/share/pin-8104)

## Colors

- `#000000`
- `#0000ee`
