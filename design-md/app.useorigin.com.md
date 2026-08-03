# How app.useorigin.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.useorigin.com-design)

Last updated: 2026-08-03

## Captured pages

[![Dark dashboard with left rail and centered offer modal](https://pin.fontofweb.com/8926?format=jpg)](https://design.withfudge.com/share/pin-8926)

[Dark dashboard with left rail and centered offer modal](https://design.withfudge.com/share/pin-8926)

[![Centered pricing card with stacked feature list and buy buttons](https://pin.fontofweb.com/8925?format=jpg)](https://design.withfudge.com/share/pin-8925)

[Centered pricing card with stacked feature list and buy buttons](https://design.withfudge.com/share/pin-8925)

[![Split sign-up page with brand panel and email form](https://pin.fontofweb.com/8924?format=jpg)](https://design.withfudge.com/share/pin-8924)

[Split sign-up page with brand panel and email form](https://design.withfudge.com/share/pin-8924)

## Overview

Origin uses a nocturnal finance aesthetic: near-black surfaces, white type, cyan actions, and a smaller violet accent for status and emphasis. The page language is confident and controlled rather than glossy. Large display type carries the marketing message, while the in-app screens compress the same brand into compact cards, rails, and overlays. The result is not a generic banking dashboard; it is a premium product shell that feels designed for concentration.

The strongest continuity comes from contrast. The background stays deep and quiet, then the interface pieces glow against it: bright text, thin borders, soft card fills, and small light buttons. The typography also reinforces this split. Lyon App gives the page its editorial voice, Inter keeps the interface legible, and Roboto Mono adds a technical note to tiny labels and chips. Reuse should preserve that hierarchy, the restrained color count, and the small-radius card language that keeps the system neat without looking sharp or clinical.

## Colors

The interface runs on a very small set of visible colors. `canvas` and `surface-deep` keep the outer page close to black, while `surface` and `surface-rail` step up just enough to separate cards, side rails, and overlays. `ink` is pure white and does the heavy lifting for headings, labels, and body copy on dark ground. `action` is the one persistent interactive color; it should stay cyan across buttons, links, chips, and highlight marks. `accent-violet` appears as a secondary emphasis color for tiny controls and status marks, not as a competing primary brand color.

The system works because the dark tones are distinct even when they are all very deep. `#000000`, `#050505`, and `#01000A` are not interchangeable: each creates a slightly different depth layer. That matters on a page where the visual structure is built more from shade breaks than from bright borders. White text and white button fills create the loudest contrast, while cyan provides the clearest action cue. Keep the palette narrow so the experience stays premium and disciplined. Avoid introducing bright greens, reds, or warm neutrals as brand tokens; they would fight the system’s cold, nocturnal character.

## Typography

Lyon App handles the large public-facing statements. Inter 18 Pt handles all ordinary interface text. Roboto Mono appears in the smallest labels, the code-like badges, and the tiny uppercase-style annotations that need a more technical rhythm. The hierarchy depends more on scale and spacing than on many weights. In the supplied views, the system stays mostly in Regular; medium weight is reserved for the smallest mono labels and selected emphasis. Licensing terms were not supplied here, so confirm them before reuse.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Lyon App | 6rem | 400 | 1.083 | -0.025em | Main offer headlines and hero pricing |
| section-display | Lyon App | 3rem | 400 | 1.167 | -0.033em | Secondary marketing statements and dashboard leads |
| card-heading | Lyon App | 2.125rem | 400 | 1.176 | -0.024em | Large card copy and offer emphasis |
| body | Inter 18 Pt | 1rem | 400 | 1.5 | 0em | Body copy, panel explanation, and labels in prose |
| button | Inter 18 Pt | 1rem | 400 | 1.5 | -0.01em | Primary and secondary button text |
| label | Inter 18 Pt | 0.875rem | 400 | 1.43 | -0.01em | Navigation items, form labels, and compact UI text |
| micro | Inter 18 Pt | 0.8125rem | 400 | 1.5 | 0em | Small helper text, legal copy, and subtle captions |
| mono-label | Roboto Mono | 0.625rem | 500 | 1.6 | 0.16em | Tiny badges, status tags, and technical chips |

The visual voice comes from the combination of large serif display type and calm sans-serif interface text. Lyon App is intentionally dramatic at 48px and 96px; it gives prices and offers a sense of scale. Inter stays quiet and even, so forms and dashboard text do not compete with the display layer. Roboto Mono should remain rare; if it appears too often, the system starts to feel coded rather than premium.

## Layout

The layout strategy is built around centered focus and strong side contrast. On the dashboard view, the left rail holds track and service navigation in a tight vertical list. The main workspace opens wide to the right and uses a stacked field of cards rather than one dominant grid. This makes the page feel like a command center: navigation stays compact, while the content field can absorb charts, summaries, and a modal overlay without collapsing into clutter.

The sign-up and offer views use a more theatrical arrangement. The centered pricing card sits inside a large black field, which gives the white call-to-action buttons room to breathe. In the split sign-up view, the page divides into a brand-led panel and a form-led panel. That split is not decorative; it creates a direct contrast between emotional pitch and task completion. The right panel can be a starry or atmospheric image field, while the left panel carries the actual account action. Keep both sides balanced in visual weight so the page does not feel lopsided.

Panel geometry is consistent. Large cards use a 16px radius, smaller controls use 8px, and the tiniest pills and nav items can sit at 4px. Padding is generous on marketing and purchase surfaces, with the most common rhythm falling on 16px, 24px, 32px, 48px, and 56px increments. The layout should keep vertical breathing room around the hero offer and around any overlay card, because the design depends on isolation as much as grouping. Thin borders and dark fill shifts do the separation work that white backgrounds would do in a lighter product.

## Visual language

Origin feels cinematic, but not ornamental. The page takes on a deep, almost silent base, then uses light, glow, and contrast to carve out structure. The dashboard cards are matte and understated, with lines and faint fills that read like market graphs without turning into dense analytics chrome. The offer card uses a soft, luminous field that feels closer to night sky than to a standard pricing panel. That cosmic tone gives the product a premium, forward-looking mood.

The page language relies on a few repeated moves. First, a strong white headline or price anchors the composition. Second, a cyan action or link confirms where the eye should go next. Third, subtle dividers and card outlines keep sections legible without heavy framing. Fourth, small violet accents add a second note of emphasis, but only in minor roles. The system should not become colorful just because it is financial. It works because almost everything is restrained and the few bright pieces carry real weight.

Shadows are light or absent; depth comes from layering, not from heavy blur. Card surfaces are flat or only slightly raised. Buttons are the main exception: they are often bright white against the dark field, so they read as tactile objects without needing a lot of shadow. Charts and mini panels should use thin strokes, quiet fills, and a calm rhythm of spacing. The whole system is meant to feel focused, controlled, and expensive.

## Components

### App shell and sidebar

- **Anatomy:** Brand mark at the top, a compact track list, a services list below, and a bottom utility action.
- **Surface:** Black or near-black rail with white text and low-contrast dividers.
- **Typography:** Inter 18 Pt at label size for the nav list; tiny helper text can move into the micro range.
- **Shape:** Small 4px to 8px rounding on items; no soft pill treatment across the whole rail.
- **Composition:** Keep the rail narrow and vertical. It should frame the main workspace, not compete with it.
- **Visible states:** The selected item sits in a darker pill-like highlight with brighter text and a clear icon.

### Dashboard cards and charts

- **Anatomy:** Net worth or spend summary, thin line charts, compact data captions, and small action chips.
- **Surface:** Deep charcoal cards over a darker base, with barely-there border lines.
- **Typography:** Lyon App for the largest summary number or headline; Inter for captions and values.
- **Shape:** 16px corner radius on the card body; tiny icon controls can sit in 8px containers.
- **Spacing:** Leave broad inner padding and a visible buffer between cards so the layout feels layered.
- **Composition:** Charts sit low and wide, with labels near the top edge and the data path taking the middle and lower band.

### Pricing modal and offer card

- **Anatomy:** Centered headline, price, short terms line, and a short list of included features.
- **Surface:** A darker card or a luminous blue-toned field that stands away from the dashboard behind it.
- **Typography:** Lyon App for the price and offer line; Inter for list items and terms.
- **Shape:** 16px radius with rounded card corners; the card should still feel rectangular and grounded.
- **Spacing:** Keep the headline stack tight and the feature list separated by even rows.
- **Visible states:** The offer button is bright white with dark text, making it the strongest object in the panel.

### Sign-up split panel

- **Anatomy:** Brand-side message on one side and the form on the other, with social buttons, email input, and legal copy.
- **Surface:** A dark form card paired with a starry or atmospheric promotional field.
- **Typography:** Lyon App for the offer headline; Inter for fields, links, and disclaimers.
- **Shape:** Card corners stay at 16px; the input and buttons use smaller 8px treatment.
- **Composition:** Keep the marketing copy centered and the form stack vertically ordered. The page should read from pitch to action in one sweep.
- **Visible states:** The sign-up button is white and full-width; the alternative sign-in buttons are darker and sit higher in the hierarchy.

### Buttons, chips, and small controls

- **Surface:** Primary controls are white or cyan; secondary controls stay dark with subtle borders.
- **Typography:** Inter button sizing for action text; Roboto Mono only for the smallest badges.
- **Shape:** 8px on buttons, 4px on the smallest pills, and circular shapes for compact icons.
- **Spacing:** Use generous horizontal padding on primary actions so the control feels deliberate rather than cramped.
- **Visible states:** The active or emphasized control should be obvious without needing animation; color and fill do the work.

## Responsive behavior

The design is desktop-first and should keep its core structure on smaller widths by simplifying rather than redesigning. The dashboard rail should collapse into a drawer or top-level navigation when horizontal room tightens. The stacked card field should flow into a single column before the cards become too narrow to read. The split sign-up layout should become a vertical stack if the form and promo panel can no longer share space cleanly. The centered pricing card should remain centered, but its padding and button widths may need to scale down in measured steps. Keep the headline rhythm intact; reduce only when the text would otherwise wrap in a way that weakens the hierarchy.

## Practical implementation guidance

### Preserve

- Keep the black-on-black depth structure; the page depends on small shade steps, not bright section breaks.
- Keep Lyon App for the largest statements and Inter for the functional interface.
- Keep cyan as the main action color and violet as a secondary accent only.
- Keep 16px panels and 8px controls as the default geometry.
- Keep the interface quiet: thin borders, flat cards, and limited decorative treatment.

### Avoid

- Avoid adding extra brand colors for charts, alerts, or section styling.
- Avoid heavy blur shadows or glossy gradients on every panel.
- Avoid replacing the serif display voice with a generic sans headline.
- Avoid over-rounding cards into pills; the design needs rectangular discipline.
- Avoid dense form stacks that erase the spacious, premium feel of the purchase flow.

### Recommended build order

1. Set the dark canvas, shade steps, and text colors.
2. Establish the Lyon App and Inter hierarchy.
3. Build the sidebar and the main card surfaces.
4. Add the centered pricing modal and its button treatment.
5. Build the split sign-up composition and form controls.
6. Finish small chips, icon buttons, and chart accents.
7. Tune spacing so the pages feel centered and calm rather than crowded.

### Accessibility

- Keep white text on dark surfaces at strong contrast ratios.
- Give icon-only controls clear labels.
- Preserve visible focus styles on buttons, nav items, and form fields.
- Do not rely on cyan alone to signal state; use fill, border, and placement as well.
- Maintain large enough click targets for the compact side rail and the small circular utilities.

## Scope note

This guide covers the dark dashboard, centered offer card, and split sign-up surfaces shown in the supplied views. It does not include mobile behavior, hover or focus specifics, motion, empty states, chart interaction, or licensing details; the 4/8/16 px geometry is expressed here as 0.25/0.5/1rem for consistency.
