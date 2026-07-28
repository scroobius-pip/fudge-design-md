# How goose.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/goose.ai-design)

Last updated: 2026-07-28

## Design character

GooseAI is a **deep-indigo developer marketing site** with a single joke told seriously: migration, geese, and API drop-in parity. The look is night-sky purple-navy, thin luminous line art, soft yellow display accents, and code samples as first-class UI. Sections breathe with large centered margins; content is a short stack of bold claims, outlined cards, and one peach solid CTA rather than a busy SaaS dashboard aesthetic.

What should survive adaptation:

- **Near-black indigo/navy canvas** with lavender line illustration
- **Pale yellow display emphasis** on key phrases (“goosebumps”)
- **Outlined cards** with 1–2px cool borders, not heavy fills
- **One warm peach CTA** against cooler purple chrome
- **Code block as product proof** (tabbed Python/JS, green diff highlight)

## Foundations

### Color

No measured role palette was returned for these captures. From the screenshots:

- **Canvas**: deep navy/indigo (almost black-violet)
- **Line art / borders**: cool lavender-blue strokes
- **Primary text**: white to soft lavender-white
- **Display accent**: muted yellow for punch lines
- **Secondary/muted copy**: gray-lavender
- **CTA fill**: solid peach/apricot with dark label
- **Code highlight**: green on the changed API base line
- **Card fills**: slightly lifted translucent navy inside thin borders

Use a cool, low-saturation night palette; warmth is reserved for CTA and occasional highlight text.

### Typography

Declared families were not captured. Observed type roles:

- **Hero / section display**: ~50px, weight 500–700, tight friendly sans; line-height ~1.3–1.35
- **Supporting display**: ~26–38px for secondary headlines
- **Body**: 16px / ~24.8px line-height regular; 20px / 31px for larger body
- **UI labels**: 12–16px; some labels push **900** weight for strong UI emphasis
- Hierarchy leans on **size jumps + one accent color word**, not mixed serif/sans pairings

### Spacing and layout

- Wide side margins (~**296px** in large viewports) create a narrow content column on desktop
- Section padding often **32px** inward; some hero bands use very large vertical padding (**~200px**)
- Card internal padding ~**15–35px**; stacked feature rows with consistent gaps
- Two-column sections (copy left / samples right) appear on wider frames; single column when tight
- Overall density is **sparse**—large empty navy field around illustration and type

## Visual language

- **Illustration**: continuous-line geese in flight, monoline, same stroke weight as card borders—brand mark and decoration in one system
- **Radii**: modest (**~4px** where measured); cards read as soft rectangles more than pills
- **Borders**: 1–2px solid on all sides of cards and code chrome; borders carry more structure than shadows
- **Shadows**: not observed as a primary depth tool
- **Code UI**: dark panel, tab labels (Python / JavaScript), monospace body, single-line green emphasis for the migration diff
- **Motion**: not established

## Components and states

1. **Hero claim** — short setup line + large punch line + paragraph + code card over illustration
2. **Feature split** — left headline/body/CTA stack; right stack of bordered sample-output cards
3. **Primary CTA** — filled peach bar with trailing chevron (active product path)
4. **Secondary / disabled rows** — outlined buttons with “Coming Soon!” muted label (inactive paths stay visible but quiet)
5. **Sample cards** — bordered prose blocks; active sample uses brighter type and orange word highlights; inactive samples fade
6. **Code tabs** — text tabs with underline/active treatment above the snippet

State language: filled vs outline, full opacity vs muted, accent words inside otherwise white body copy.

## Responsive behavior

Four homepage captures from roughly **1730–2050px** wide show the same dark marketing system with generous side margins. Narrower behavior is not strongly documented—expect the two-column feature/proof layout to stack and side margins to collapse before type scale changes.

## Practical guidance

**Preserve**

- Indigo night canvas + monoline goose art as the brand signature
- Yellow only for display punch; peach only for the primary CTA
- Bordered navy cards and a real code sample with a one-line green diff
- Wide margins and sparse sections—do not pack like a docs portal
- “Coming soon” paths as quiet outlines beside one loud CTA

**Avoid**

- White marketing pages or generic purple gradients without the line-art system
- Multiple competing solid CTAs
- Heavy drop shadows or glassmorphism that fight the flat navy cards
- Dropping the code proof—the product story is API parity
- Warm brown or earth tones that break the cool night key

## Scope note

Based on four homepage viewport captures of goose.ai. Structured color roles and declared font families were not available; color and type notes combine spacing/radius/border measurements with visual reading of the screenshots. Inner docs, dashboard, and pricing flows are not in this set.

## Captured pages

[![Hero — Geese migrate](https://pin.fontofweb.com/6491?format=jpg)](https://design.withfudge.com/share/pin-6491)

[Hero — Geese migrate](https://design.withfudge.com/share/pin-6491)

[![Hero alternate crop](https://pin.fontofweb.com/6492?format=jpg)](https://design.withfudge.com/share/pin-6492)

[Hero alternate crop](https://design.withfudge.com/share/pin-6492)

[![Goosebumps feature split](https://pin.fontofweb.com/6493?format=jpg)](https://design.withfudge.com/share/pin-6493)

[Goosebumps feature split](https://design.withfudge.com/share/pin-6493)

[![Homepage wide frame](https://pin.fontofweb.com/6494?format=jpg)](https://design.withfudge.com/share/pin-6494)

[Homepage wide frame](https://design.withfudge.com/share/pin-6494)
