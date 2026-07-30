# How grok.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/grok.com-design)

Last updated: 2026-07-30

## Captured pages

[![Grok home](https://pin.fontofweb.com/10170?format=jpg)](https://design.withfudge.com/share/pin-10170)

[Grok home](https://design.withfudge.com/share/pin-10170)

[![SuperGrok plans](https://pin.fontofweb.com/9970?format=jpg)](https://design.withfudge.com/share/pin-9970)

[SuperGrok plans](https://design.withfudge.com/share/pin-9970)

[![Grok conversation](https://pin.fontofweb.com/7233?format=jpg)](https://design.withfudge.com/share/pin-7233)

[Grok conversation](https://design.withfudge.com/share/pin-7233)

[![Grok pricing view](https://pin.fontofweb.com/6778?format=jpg)](https://design.withfudge.com/share/pin-6778)

[Grok pricing view](https://design.withfudge.com/share/pin-6778)

[![Grok workspace](https://pin.fontofweb.com/6255?format=jpg)](https://design.withfudge.com/share/pin-6255)

[Grok workspace](https://design.withfudge.com/share/pin-6255)

## Design character

Grok is a deliberately quiet AI interface: large fields of near-black or near-white space, one centered task, and carefully contained utility. It feels more like a focused instrument than a dashboard. The strongest visual contrast comes from surface mode, not from a large color palette.

## Overview

### Overall visual thesis

Keep attention on the next prompt, answer, or plan decision. Reduce chrome, center the important action, and give supporting information a low-contrast but clearly structured home. Product information appears in rounded, outlined panels; promotional emphasis is warm orange used sparingly against dark surfaces.

### Key characteristics

- Dark product and pricing screens with white primary text and subdued gray supporting copy.
- An alternate light workspace and reading surface, still sparse and panel-light.
- Large centered brand or page title, then a single prominent input or decision module.
- Rounded panels, full-pill controls, hairline rules, and exceptionally restrained shadows.
- Pricing and product information organized as a small number of equal-weight cards rather than dense comparison tables.

### What must be preserved

Preserve the centered task hierarchy and the silence around it. A similar interface should have few competing visual events, readable controls, and enough empty space for the composer or primary decision to feel inevitable.

## Structured design tokens

| Token | Exact value | Use in the captured pages |
| --- | --- | --- |
| `color/text-primary-dark` | `#FCFCFC` | Primary text on dark conversation and product surfaces |
| `color/text-primary-plans` | `#FFFFFF` | Plan names, prices, and CTA labels |
| `color/text-secondary` | `#9E9E9E` | Supporting copy and lower-emphasis information on dark surfaces |
| `color/accent-orange` | `#FF6B35` | Small promotional and accent text moments |
| `space/compact` | `4px`, `6px`, `8px` | Tight metadata, icon, and internal control spacing |
| `space/standard` | `12px`, `14px`, `16px` | Panel padding and repeated control spacing |
| `space/section` | `24px`, `32px`, `36px`, `48px` | Card separation and larger content intervals |
| `radius/soft` | `8px`, `12px`, `16px`, `24px` | Inputs, cards, and contained surfaces |
| `radius/pill` | `9999px` | Toggles, rounded action controls, and icon buttons |
| `border/hairline` | `1px` | Most panel and control outlines |
| `border/strong` | `2px` | Selected or heavier contained boundaries |

The captured metrics vary by page and component, so these are observed values rather than a claim of a complete public token library.

## Colors

Dark mode supplies the main product character. Primary text is recorded as `#FCFCFC` or white, with `#9E9E9E` carrying supporting copy. That pairing creates clear reading hierarchy without introducing many intermediate text colors. `#FF6B35` is a compact accent: use it for a promotion, status, or high-value highlight, not as the default action background.

The workspace capture also shows a near-white reading surface with black primary text and gray secondary text. Treat it as a purposeful alternate surface mode, not as a diluted version of the dark UI. The captures do not establish a complete success, error, hover, or disabled-color system.

## Typography

The retained type records identify a sans-serif system but not a named family or a licensable font file. Preserve the hierarchy and metrics; choose a production font separately.

| Token | Font family | Size | Weight | Line height | Letter spacing | Usage |
| --- | --- | --- | --- | --- | --- | --- |
| Display | Sans-serif; family not retained | `30px` | `700` | `36px` | not retained | Prominent plan or product heading |
| Large UI title | Sans-serif; family not retained | `20px` | `550` | `28px` | not retained | Product and plan headings |
| UI label | Sans-serif; family not retained | `14px` | `500–550` | `21px` | `-0.1px` where recorded | Buttons, labels, and compact navigation |
| Body | Sans-serif; family not retained | `16px` | `400` | `24–28px` | `-0.1px` where recorded | Answers, supporting copy, and card content |
| Small body | Sans-serif; family not retained | `13–14px` | `400` | `19.5–21px` | `-0.1px` where recorded | Secondary content and metadata |

Numerals are used as part of strong plan-price hierarchy, but the captures do not establish a special numeral feature set. Do not imply a font licence or a fallback stack from these records.

## Layout

### Containers and alignment

The product home centers a single vertical stack: logo or title, prompt composer, then a compact supporting panel. Pricing keeps the same centered centerline but opens into a three-card row. Conversation and workspace pages use a reading column with a composer anchored close to the content.

### Spacing and whitespace

Repeated values cluster around 8px, 12–16px, 24px, 32px, 36px, and 48px. Use the smallest values for icon-to-label relationships, 12–16px for controls and card interiors, and the larger values to separate the primary task from supporting information. The home view gains its calmness from broad unoccupied space around the composer; do not fill that area with extra navigation or cards.

### Grid and cards

The plans page is a three-column comparison at the observed wide viewport. Each card shares a common outer footprint, then uses internal rhythm for title, price, CTA, and feature rows. Keep card borders subtle and spacing consistent; the highlighted card may use an additional surface treatment, but not a radically different geometry.

## Visual language

### Surfaces and depth

Use large, solid dark fields with slightly differentiated charcoal panels. The light workspace uses the inverse idea: a near-white reading field with soft gray divisions. Shadows are minimal; most separation comes from a 1px outline, surface contrast, and radius.

### Borders and shape

Rounded rectangles are the default: 8–24px corners for panels and controls, full-pill rounding for compact toggles and circular actions. Hairline borders define cards, prompt fields, and feature rows. A 2px rule appears for stronger selected or emphasized boundaries.

### Imagery and illustration

The plans view uses a restrained dark atmospheric image behind the heading. It acts as an ambient backdrop, not as an illustration competing with the plan cards. The other inspected screens rely on typography, whitespace, and functional controls rather than decorative imagery.

### Motion

Still captures do not establish animation, loading, or transition behavior. Keep any motion limited and functional unless it is separately observed.

## Components

### Prompt composer

- **Purpose:** the primary entry point for a question or task.
- **Anatomy:** leading add/attachment affordance, single-line prompt area, compact mode selector, and a circular send action.
- **Background:** dark charcoal on the dark home; light in the workspace mode.
- **Text:** primary text for input and action; secondary text for inactive hints.
- **Shape:** a wide rounded field, with a full-pill or circular send control.
- **Padding:** use the observed 12–16px control range before refining from product requirements.
- **States:** only resting and selected-looking controls are visible; loading, error, and disabled behavior are not established.

### Contained product callout

- **Purpose:** surface a product update, install path, or useful next action below the composer.
- **Anatomy:** title, compact status or promotion tag, supporting copy, and a contained code or action module.
- **Background:** slightly raised charcoal panel on the dark home.
- **Border and radius:** quiet outline with a soft rounded rectangle.
- **Guidance:** retain the low density; it should support the composer, not become a second hero.

### Plan card

- **Purpose:** compare subscription levels without creating a dense matrix.
- **Anatomy:** plan name, price, one clear CTA, then a vertically spaced feature list with circular utility icons.
- **Background:** charcoal surface; the emphasized option may add a restrained colored or image-backed treatment.
- **Text:** white for price and title, muted gray for supporting description.
- **Shape:** large soft radius, thin outline, consistent height across the three-card group.
- **Visible states:** a selected personal/business segmented control and one visually emphasized plan are shown. No hover or checkout behavior is established.

### Conversation reading surface

- **Purpose:** present a generated answer and keep the next prompt nearby.
- **Anatomy:** reading content, lightweight action row, suggested follow-ups, and the composer.
- **Background:** near-white workspace surface in the inspected light example.
- **Typography:** body-led reading hierarchy with small utility controls.
- **Guidance:** keep action icons visually subordinate to the answer.

## Responsive behavior

The returned captures include wide product and plans views plus a narrower workspace capture, but not matched desktop and mobile views of the same page. Preserve the primary task before secondary information when adapting to smaller screens. The plans grid, navigation behavior, and exact stacking order at mobile sizes are not established by this set.

## Practical implementation guidance

### Preserve

- The centered primary task and large zones of intentional empty space.
- Dark/light mode as a surface-level decision, not merely a color swap.
- A small, repeatable radius and spacing vocabulary.
- Borders and surface contrast instead of large shadows.
- Orange as a selective accent rather than a universal CTA treatment.

### Avoid

- Filling the home surface with dashboard widgets.
- Introducing many bright colors, gradients, or oversized callouts.
- Giving every panel a heavy shadow or a different radius.
- Treating the observed three-card desktop plans layout as proof of mobile behavior.
- Claiming a named font, font licence, or unobserved interaction state.

### Recommended implementation order

1. Establish the dark and light base surfaces plus text hierarchy.
2. Build the composer, panel, and card primitives with the observed border/radius rules.
3. Compose the centered home and reading flows.
4. Build the three-card plans arrangement and its selected/featured visual treatments.
5. Validate whitespace and hierarchy against the representative captures before adding responsive or animated variants.

### Accessibility considerations

Maintain strong contrast between white primary text and dark panels, and do not use orange as the only indication of promotion or selection. Preserve visible keyboard focus even though focus styling is not shown. Give icon-only actions accessible names and keep the composer’s controls reachable in a logical keyboard order.

## Scope

This guide is based on eight returned Grok captures spanning home, plans, conversation, and workspace surfaces. It supports a practical visual-system reference, but not a named font stack, font licence, complete state-color specification, or exact responsive behavior.

## Colors

- `#fcfcfc`
- `#ffffff`
- `#9e9e9e`
- `#ff6b35`
