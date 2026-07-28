# How app.fourmula.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.fourmula.ai-design)

Last updated: 2026-07-28

## Design character

Formula AI (app.fourmula.ai) runs a **two-act visual system**. Onboarding and start surfaces are **light, airy, and editorial**—huge tight headlines on white, soft gray panels, and a single dark pill CTA. Once you enter a project, the product flips to a **dark production studio**: charcoal rails, denser forms, product imagery, and violet/purple accents that mark the brand inside the tool.

What should survive adaptation:

- A clear **light → dark mode shift** between marketing/start and the working product
- **Oversized, tightly tracked headlines** on empty/start states
- **Card stacks and soft 16px rounding** as the default container language
- **Purple as the product accent** inside the dark studio (not rainbow multi-accents)

## Foundations

### Color

| Context | Values | Role |
| --- | --- | --- |
| Start canvas | pure white `#ffffff` | Full-page ground |
| Start cards / wells | light gray (~`#f4f4f5`) | Secondary panels, upload wells |
| Start ink | near-black | Headlines and primary labels |
| Start CTA | black/near-black pill | Primary button on light UI |
| Studio ground | deep charcoal (~`#0a0a0b`–`#141416`) | App background |
| Studio surfaces | elevated dark gray | Forms, lists, preview chrome |
| Brand accent | violet/purple (~`#7c3aed`–`#a78bfa`) | Active nav, links, focus, badges |
| Studio text | white / light gray | Primary vs muted copy |

Structured hex roles were sparse in capture; the pairs above are the stable visual system visible across both screens.

### Typography

No declared family name was captured. The type feel is a modern **grotesk UI sans**:

- Start hero: **~52px, weight 500**, line-height ~1.0, strong negative tracking (~-2px)—display, not product chrome
- Studio titles: **~22px medium**
- Body / UI: **16px / 24px** regular
- Secondary: **14px / 20px**

The contrast between **billboard start type** and **compact studio UI type** is intentional. Do not flatten them into one size scale.

### Spacing and layout

Measured padding clusters heavily around **24px** and **16px**, with **40px** section breathing and **12px** stack gaps.

Layouts:

- **Start**: top bar + vertically centered hero column (headline, supporting line, large soft cards, single CTA)
- **Studio**: three-zone desktop—*left project rail*, *center brief/form*, *right preview/output* (product angles, generations)

## Visual language

- **16px radius** is the workhorse on cards and inputs (very frequent)
- Light mode uses **soft gray fills** more than hard shadows
- Dark mode uses **low-contrast borders** and nested panels
- Purple appears as **text links, active rail items, and small brand marks**, not giant gradient heroes inside the tool
- Imagery is **product photography** in the preview column—square tiles, multi-angle grids

## Components and states

1. **Top utility bar** (both acts) — wordmark, breadcrumbs or project context, ghost icon buttons
2. **Hero empty state** — massive title, short subtitle, two feature cards (templates vs blank), dark pill CTA
3. **Project rail** — dark list of workflow steps/assets with purple active indication
4. **Brief form** — labels, text areas, chips, and structured fields for PDP/asset generation
5. **Preview stack** — multi-angle clothing/product frames, download/action affordances
6. **Primary buttons** — black pills on light; lighter or purple-tinted actions on dark

## Responsive behavior

Both captures are wide desktop viewports (~1712px). The studio’s three-column split is a **desktop composition**. Collapse behavior is not documented here—if adapting, stack preview below the form rather than inventing a separate mobile visual language.

## Practical guidance

**Preserve**

- The emotional cut between bright start and dark build
- Huge tight hero type only on empty/onboarding moments
- 16px card radius and 24px padding rhythm
- Purple as a *signal* color inside charcoal UI
- Product imagery confined to preview columns

**Avoid**

- Keeping the entire app in marketing-white once work begins
- Rainbow gradients or playful illustration in the studio chrome
- Small timid headlines on the start screen
- Over-decorated cards that fight product photos

## Scope note

Drawn from two desktop pages: `/start` and `/project/create-pdp`. Font families and formal color tokens were largely undeclared in structured data; values above combine measured type sizes with screenshot reads. Motion and narrow breakpoints were not observed.

## Captured pages

[![Start — first project empty state](https://pin.fontofweb.com/8676?format=jpg)](https://design.withfudge.com/share/pin-8676)

[Start — first project empty state](https://design.withfudge.com/share/pin-8676)

[![Create Assets workspace](https://pin.fontofweb.com/8677?format=jpg)](https://design.withfudge.com/share/pin-8677)

[Create Assets workspace](https://design.withfudge.com/share/pin-8677)

## Colors

- `#ffffff`
- `#f4f4f5`
- `#0a0a0b`
- `#141416`
- `#a78bfa`
- `#7c3aed`
- `#e4e4e7`
- `#18181b`
