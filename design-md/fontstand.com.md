# How fontstand.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/fontstand.com-design)

Last updated: 2026-07-28

## Design character

Fontstand is a **type-industry product site** that swings between two modes: a high-chroma conference campaign and a clean white SaaS marketing shell for apps, pricing, and foundry partners. Across both, the system stays **typographic-first**—large confident heads, generous white (or gradient) space, and UI that feels closer to a design festival than a generic fintech template.

What should survive adaptation:

- Bold display type as the primary brand signal  
- High-contrast CTAs in mint green and violet-blue  
- Product truth via device mockups and real font UI  
- Circular foundry marks in dense partner grids  
- Conference pages that lean into full-bleed color fields without cluttering the schedule content  

## Foundations

### Color

No measured site-wide role table was retained. Colors below are read from the captures and should be treated as visual interpretation:

| Swatch | Approx. hex | Role |
|--------|-------------|------|
| Canvas | `#ffffff` | Default marketing ground |
| Ink | `#111111` / near-black | Body and heads on light |
| Mint accent | `#00c9a7`–`#14d4a5` | Display heads, primary Download |
| Green solid CTA | `#22c55e`-ish | Compact Try / success actions |
| Violet CTA | `#6c5ce7`–`#7c6af0` | Rent / secondary purchase |
| Calculator surface | `#1a1a1a`–`#222` | Dark pricing module |
| Calculator header row | mid gray bar | Table banding |
| Conference field | red → cream → gold gradient | Full-bleed schedule backdrop |
| Pill outline | black 1px | Workshop tags |

Pair mint display type with black body on white for product pages. Keep the conference gradient behind content, not as text fill.

### Typography

Family names unknown; the voice is a contemporary grotesque with strong weight contrast.

Observed scale (conference + product):

- Hero / display: ~48–58px, weight 700–900 (e.g. “Introducing foundry subscriptions.” in mint)  
- Section titles: ~28–36px bold (“Schedule”, “Participating Type Foundries”)  
- Subheads / workshop titles: ~18–22px bold  
- Body: ~14–16px regular, comfortable measure  
- Meta / costs / captions: ~11–14px  
- Schedule times: tabular-feeling small caps/numerals in the left column  

Line lengths on conference body copy stay moderate; product marketing centers a short paragraph under the hero.

### Spacing and layout

Useful steps: **4 / 5 / 10 / 20 / 40** px, plus large hero padding. Radii span **3px** (tight controls) through **15 / 25 / 40px** (pills, soft cards, device chrome).

Layouts seen:

- **Conference schedule:** single centered column of timeline rows on a full-bleed gradient; time left, title mid, description right  
- **Apps:** centered hero copy above dual device mockups (iPad + laptop), then two feature columns with store badges  
- **Pricing calculator:** full-width dark rounded panel; filter row of white inputs; comparison table  
- **Foundries:** multi-column circular logo grid on white with small gray captions  

## Visual language

- **Product mode:** flat white, minimal borders, soft device shadows only on hardware mockups, mint as the singular brand flash  
- **Conference mode:** immersive warm-to-hot gradient field, black ink, hairline row dividers, outline pills for session tags  
- **Pricing mode:** inverted dark panel, light text, saturated green/violet buttons as the only chroma inside the tool  
- **Partner grid:** perfect circles, mixed brand colors inside marks, neutral labels underneath—no card boxes  
- Shadows and gradients outside the conference hero are restrained; chrome prefers flat fills

## Components and states

**Marketing hero**  
Large colored headline, one centered explanatory paragraph, optional dual product shots.

**Device showcases**  
Realistic tablet/laptop frames containing the actual Fontstand font browser UI—this is product evidence, not abstract illustration.

**Download / store cluster**  
Black App Store badge beside a bright green **Download** button and a quiet “Other versions” link.

**Price calculator**  
Dark container; family select + steppers for pageviews/users + currency; two-column matrix (All styles vs Single style) with row types (Trial, Rental, Shared, Hosted, After 12 months); violet **Rent** and green **Try** buttons.

**Schedule rows**  
Horizontal rules; time + outline pill; bold session title; paragraph description; small cost footnote.

**Foundry avatar grid**  
Circular marks in repeating columns; name + “N families · M fonts” in muted gray.

Visible state cues: filled primary buttons vs outline pills; free/N/A cells in the pricing grid. Interaction details beyond that are not claimed.

## Practical guidance

**Preserve**

- Mint as a sharp accent against black type and white ground  
- Large, almost poster-like product headlines  
- Real app UI inside device frames  
- Circular foundry identity grid without card chrome  
- Conference pages that let a bold gradient carry mood while type stays black and calm  
- Pricing as a serious dark tool island, not a pastel SaaS card  

**Avoid**

- Diluting mint into a full pastel theme  
- Heavy drop shadows on every section  
- Replacing device truth with stock lifestyle photos  
- Busy multi-color marketing illustrations competing with type  
- Softening the calculator into light-gray “friendly” tables that lose contrast  

## Scope note

Studied captures across `/conference` (hero gradient schedule), `/apps` (foundry subscriptions + devices), `/pricing` (price calculator), and `/contact` (foundry logo grid). Structured color/type tokens were sparse outside the conference set—product pages rely more on visual reading. Home storefront and in-app surfaces were not part of this batch.

## Captured pages

[![Fontstand International Typography Conference 2026](https://pin.fontofweb.com/6811?format=jpg)](https://design.withfudge.com/share/pin-6811)

[Fontstand International Typography Conference 2026](https://design.withfudge.com/share/pin-6811)

[![Fontstand International Typography Conference 2026](https://pin.fontofweb.com/6810?format=jpg)](https://design.withfudge.com/share/pin-6810)

[Fontstand International Typography Conference 2026](https://design.withfudge.com/share/pin-6810)

[![Application — Fontstand](https://pin.fontofweb.com/5505?format=jpg)](https://design.withfudge.com/share/pin-5505)

[Application — Fontstand](https://design.withfudge.com/share/pin-5505)

[![Pricing — Fontstand](https://pin.fontofweb.com/5493?format=jpg)](https://design.withfudge.com/share/pin-5493)

[Pricing — Fontstand](https://design.withfudge.com/share/pin-5493)

[![Contact — Fontstand](https://pin.fontofweb.com/5491?format=jpg)](https://design.withfudge.com/share/pin-5491)

[Contact — Fontstand](https://design.withfudge.com/share/pin-5491)

## Colors

- `#ffffff`
- `#111111`
- `#14d4a5`
- `#22c55e`
- `#6c5ce7`
- `#1a1a1a`
- `#e8e8e8`
- `#ff2a1f`
- `#f5c542`
