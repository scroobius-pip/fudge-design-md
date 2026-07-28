# How cohere.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cohere.com-design)

Last updated: 2026-07-28

## Design character

Cohere’s marketing site is polished enterprise AI: a **white canvas**, near-black display type, generous section padding, and a single loud **coral/orange brand accent** (`#ff7759` family) reserved for primary CTAs and product moments. The system feels calm and institutional until a saturated accent or purple product field breaks the monochrome. Product demos live inside soft-edged light cards with warm sand backdrops; developer sections flip to deep **indigo/violet** full-bleed fields with floating docs chrome.

What should survive adaptation:

- White marketing field + charcoal/black type (`#212121` / `#000000`)
- Coral/orange solid CTAs and brand marks as the only warm loud color
- Large, slightly tight display headlines (48–72px range) at regular weight
- Soft card radii (~20–22px) and pill buttons (~9999px)
- Occasional full-bleed saturated product stages (purple docs, sand product UI)

## Foundations

### Color

Measured text roles:

- **Primary text:** `#212121` and `#000000` (near-black body and display)
- **Secondary text:** charcoal variants of the same family

Observed (not instrumented as roles) but visually dominant:

- **Canvas:** pure white marketing backgrounds
- **Brand accent / CTA:** saturated coral-orange on solid buttons (“Talk to sales”, “Try now”, “Generating…”) and the C-mark logo
- **Product stage purple:** deep indigo-to-violet grain field behind developer resources
- **Sand product surface:** warm beige behind chat/demo cards
- **Soft neutrals:** light gray nav chrome, muted secondary labels, mint-tinted active nav rows in docs UI

Keep the palette mostly monochrome-neutral; spend color on CTAs and staged product art, not decorative gradients on every section.

### Typography

Declared font families were not captured. Visually the stack is a clean contemporary **sans** with:

- **Display:** ~48–72px, weight ~400, tight tracking (letter-spacing around −0.5 to −1.4px on large sizes), line-height near 1.0–1.2
- **Section titles:** ~24–32px regular
- **Body:** 16px / 24px line-height dominates almost every page
- **Small UI / nav / meta:** 12–14px
- **About hero:** oversized single-line claim (“Intelligence is only as powerful…”) at ~72px

Hierarchy is size-led more than weight-led—regular weight stays surprisingly light even at display sizes.

### Spacing and layout

Recurring measurements:

- Horizontal content padding ~**40px**; outer margins ~**28–48px**
- Large vertical section rhythm: **80px**, **96px**, **144px**, even **160px** top padding on hero/product stages
- Card and grid gaps often **16–40px**; some home modules use very wide column gaps (~128–176px)
- Contact and about pages keep generous top padding (~144px) before the first form or hero block

Layout is wide desktop marketing (~1920–2048px captures): multi-column feature grids, split hero (copy left / product art right), and centered about claims.

## Visual language

- **Radii:** cards and panels cluster around **20–22px**; small controls ~**4–8px**; pills and primary buttons go full **9999px**
- **Borders:** 1px solid hairlines on cards, form fields, and list rows—quiet, not heavy frames
- **Shadows:** largely absent in structured measurements; depth comes from soft fills and staged product surfaces rather than drop shadows
- **Imagery:** photographic leadership portraits on About; abstract brand marks; in-product UI mockups (chat, docs) with warm or purple stage backdrops
- **Accent line:** thin multi-stop gradient hairline above product feature titles (Command / Transcribe / Embed)

## Components and states

Recurring patterns:

- **Top nav:** logo left, text links, dual CTAs (ghost/outline “Log in” + solid coral “Talk to sales”)
- **Hero:** large display line + short supporting sentence + dual actions (solid + text link)
- **Product feature accordion/list:** titled rows (Command, Transcribe, Embed, Rerank) with check lists and “Learn more →”
- **Demo cards:** rounded white chat bubbles on sand stage; coral status chip (“Generating…”)
- **Sales form:** multi-field light form with country select, checkbox legal line, full-width coral submit
- **About story:** oversized centered quote-like headline, then portrait grid with name/title captions
- **Developer band:** purple full-bleed with white pill CTA and floating docs window (sidebar + code sample)
- **Footer:** multi-column link grid, social icons, legal row

Visible states in stills: default buttons, active sidebar item (soft mint fill), and a loading/generating chip—do not invent hover/focus beyond what is shown.

## Responsive behavior

Captures are wide desktop section crops. Treat mobile as unobserved: preserve the type scale and coral accent, but do not assume the same multi-column gaps or 144px section padding will hold on small viewports.

## Practical guidance

**Preserve**

- White field + near-black type + coral CTA triangle
- Soft 20–22px cards and pill primary buttons
- Size-led hierarchy with restrained weight
- Alternation between calm white marketing and rare saturated product stages

**Avoid**

- Rainbow decorative gradients on every section
- Heavy shadows or glassmorphism competing with product mockups
- Turning secondary text multicolored
- Crowding the 80–144px section rhythm into dense startup packing

**Adaptation**

- Keep brand coral for primary action only
- Use sand/beige only inside product demo stages
- Reserve deep purple for developer/docs moments so marketing stays serene

## Scope note

Studied eight section crops on cohere.com: home (hero, product demo, feature list, developer resources), About (mission headline + leadership grid), and Contact Sales (form). Color roles measured for text (`#212121`, `#000000`); coral, purple, and sand are visual. No declared font families. Mobile breakpoints not in this set.

## Captured pages

[![Home — enterprise hero](https://pin.fontofweb.com/9950?format=jpg)](https://design.withfudge.com/share/pin-9950)

[Home — enterprise hero](https://design.withfudge.com/share/pin-9950)

[![Home — North logos + North card](https://pin.fontofweb.com/9949?format=jpg)](https://design.withfudge.com/share/pin-9949)

[Home — North logos + North card](https://design.withfudge.com/share/pin-9949)

[![Home — models product demo](https://pin.fontofweb.com/9947?format=jpg)](https://design.withfudge.com/share/pin-9947)

[Home — models product demo](https://design.withfudge.com/share/pin-9947)

[![Home — developer resources](https://pin.fontofweb.com/9946?format=jpg)](https://design.withfudge.com/share/pin-9946)

[Home — developer resources](https://design.withfudge.com/share/pin-9946)

[![About — mission headline](https://pin.fontofweb.com/9952?format=jpg)](https://design.withfudge.com/share/pin-9952)

[About — mission headline](https://design.withfudge.com/share/pin-9952)

[![About — leadership grid](https://pin.fontofweb.com/9953?format=jpg)](https://design.withfudge.com/share/pin-9953)

[About — leadership grid](https://design.withfudge.com/share/pin-9953)

[![Contact sales form](https://pin.fontofweb.com/9951?format=jpg)](https://design.withfudge.com/share/pin-9951)

[Contact sales form](https://design.withfudge.com/share/pin-9951)

## Colors

- `#212121`
- `#000000`
- `#ffffff`
