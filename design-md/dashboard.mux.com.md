# How dashboard.mux.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dashboard.mux.com-design)

Last updated: 2026-08-08

## Captured pages

[![Signup card paired with the left-side feature grid and yellow continue button](https://pin.fontofweb.com/6451?format=jpg)](https://design.withfudge.com/share/pin-6451)

[Signup card paired with the left-side feature grid and yellow continue button](https://design.withfudge.com/share/pin-6451)

[![Login card showing the mirrored auth form beside the same benefit grid](https://pin.fontofweb.com/2001?format=jpg)](https://design.withfudge.com/share/pin-2001)

[Login card showing the mirrored auth form beside the same benefit grid](https://design.withfudge.com/share/pin-2001)

## Overview

Mux presents authentication as a calm, technical entry point rather than a marketing page. The layout is split into two clear halves: a left-side proof board with product claims and trust content, and a right-side rounded card that holds the actual sign up or log in form. The two screens share the same structure, so the experience feels mirrored and stable; only the headline and the helper link change.

The visual tone is spare and direct. A pale grid canvas sits behind both columns, the main form card stays white, and the text is mostly near-black. Color is used sparingly and with intent: the left panel uses narrow vertical accent bars to separate claims, and the primary action is a saturated yellow button that becomes the page’s strongest visual signal. The result feels like a developer product that values clarity, speed, and low-friction access.

## Colors

Mux uses a light, low-contrast foundation with a single strong action color. The background stays warm and quiet, the main card is white, and the text remains close to black. Accent color is reserved for the submit button and the thin color rails that organize the feature tiles on the left. The palette has no dark-mode counterpart in the supplied views; instead, hierarchy comes from contrast between pale surfaces, crisp borders, and one warm call to action.

| token | value | role | use |
|---|---|---|---|
| `canvas` | `#E7E6E0` | Page canvas | Full-viewport backdrop behind the split layout |
| `surface` | `#F4F3ED` | Soft surface | Left-side feature tiles and secondary button backgrounds |
| `panel` | `#FFFFFF` | Main panel | The right-side auth card and field surfaces |
| `ink` | `#242628` | Primary text | Logo, headlines, button text, and the most important labels |
| `muted-ink` | `#5B5E62` | Secondary text | Helper copy, small prompts, and quieter supporting lines |
| `border` | `#BCC0B9` | Divider and stroke | Hairline borders around cards, inputs, and the form shell |
| `action` | `#FFB400` | Primary action | The continue button and the warmest interaction color |
| `accent-pink` | `#F24AB5` | Feature rail | The first left-side accent stripe |
| `accent-green` | `#1FB64C` | Feature rail | The second left-side accent stripe |
| `accent-blue` | `#1F7AE0` | Feature rail | The third left-side accent stripe |
| `accent-gold` | `#F0B400` | Feature rail | The lower-left accent stripe and supporting color note |

The accent rails work as a compact system of orientation markers. Pink, green, blue, and gold keep the left column lively without turning the screen into a brand poster. The button gold is more saturated and more central than the rail gold, so the primary action remains easy to find even when the page is visually busy.

## Typography

Aeonik carries the full page voice: large, bold headlines; concise body copy; and small helper lines. Jet Brains Mono appears only in the button label, where it adds a slightly coded, tool-like note to the main action. The scale is tight and pragmatic. Sizes stay in a narrow range, and the hierarchy comes from weight, spacing, and line length as much as from size alone.

Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Aeonik | 2.25rem | 700 | 1.05 | -0.02em | Primary auth headline on the card |
| `page-title` | Aeonik | 2.125rem | 700 | 1.1 | -0.02em | Alternate form headline and large login title |
| `card-title` | Aeonik | 1.125rem | 700 | 1.2 | -0.01em | Left-side claim headings and tile titles |
| `body` | Aeonik | 0.875rem | 400 | 1.5 | 0em | Supporting lines, prompts, and short descriptions |
| `body-strong` | Aeonik | 0.875rem | 500 | 1.5 | 0em | Emphasized helper copy and secondary labels |
| `microcopy` | Aeonik | 0.75rem | 400 | 1.4 | 0em | Tiny notes, small trust text, and quiet hints |
| `button-label` | Jet Brains Mono | 0.75rem | 500 | 1 | 0.14em | Uppercase submit label on the yellow button |

The page title sits comfortably large without becoming theatrical. The left column headings are smaller and denser, which lets the right-side card remain the focal point. Button text is letterspaced and compact, making the action feel precise rather than promotional. The visual rhythm depends on short line counts and a clean vertical stack.

## Layout

The page is built as a centered split composition. The left side acts like a product board on graph paper: four benefit tiles arranged in a 2×2 grid, each tile divided from the next by soft borders and a thin colored rail. That grid is followed by a trust strip with a partner logo and a short sentence, and then a tiny arrow control cluster in the lower-left corner. The left column feels informative but not dense, because each tile carries only one claim and one small paragraph.

The right side is a single rounded white form card. It is visually taller than the left column’s feature grid and sits with generous internal padding. Inside, the logo is centered at the top, followed by a bold headline, a smaller sign-in or sign-up prompt, two equal social buttons, an email field, the large yellow submit button, and a final helper link. Everything is centered on the same axis, which gives the form a calm, sequential reading path.

Spacing is generous around the outside of the system. The canvas keeps a large margin around the main composition, and the white card floats cleanly within it. Borders are thin and mostly hairline, so the page depends on spacing and geometry rather than thick framing. The 28px corner radius on the main card softens the layout without making it feel playful.

## Visual language

Mux uses a restrained visual language with a strong technical backbone. The pale grid background suggests structure and precision, while the white auth card brings the user back to a simple task. The left side behaves like a compact pitch board: icon, title, and short copy, each tile marked by a vertical color strip. That strip is the most distinctive visual motif outside the button, and it gives the grid a scanned, annotated feel.

The system avoids decorative depth. There are no heavy shadows, no layered glows, and no complex gradients. Instead, the page relies on flat fills, crisp edges, and repeated spacing. The only highly saturated surface is the yellow button, which is intentionally warm and attention-getting. Even that button remains geometric and tidy, with a pill-like outline rather than a flashy treatment.

The overall tone is product-led and developer-friendly. The copy is direct, the components are obvious, and the page feels built to move someone through account entry quickly. The left column adds confidence, but the right column keeps the job in focus.

## Components

### Auth form card

The main card is the core container. It is white, tall, rounded at 28px, and centered in the right half of the layout. Inside, the spacing is spacious but disciplined: logo, title, prompt, social choices, email field, primary button, and secondary link all stack in a straight vertical path. The card uses a thin border instead of shadow, which keeps the surface quiet and modern.

### Benefit tiles

Each benefit tile is a compact statement block with an icon, bold heading, and short supporting paragraph. The tiles share the same surface color and border treatment, but their left-edge accent stripe changes color. That stripe is the primary differentiator, and it gives the four tiles a clear internal rhythm. The text stays left aligned and compact, with enough line space to keep each tile easy to scan.

### Social sign-in row

The GitHub and Google buttons sit side by side with equal width and matching height. They read as secondary entry points: pale background, centered icon plus label, and a thin border. The icons carry most of the identity weight, while the buttons themselves remain quiet and neutral. The row sits above the email field, so the user sees social options before typing.

### Email field

The text field is a plain rectangular input with a light border and centered placeholder text. It does not try to look decorative. The field is short, simple, and visually subordinate to the yellow button. The label appears above it in small body text, which keeps the interaction clear without crowding the control.

### Primary CTA

The submit button is the strongest component in the entire interface. It uses the `action` color, the `button-label` mono treatment, and a pill-like 28px radius. Its scale is larger than the social buttons and the field, so it reads immediately as the next step. The text is centered and tightly tracked, reinforcing a precise, engineered tone.

### Trust strip and helper link

The lower-left trust strip combines a partner logo mark with one sentence of endorsement. It works like a compact proof bar rather than a full testimonial block. The helper link beneath the primary CTA is understated and inline, which keeps it available without distracting from the form. Both elements use quieter text color and smaller size than the main headline.

### Login and sign-up variants

The login and sign-up views are structurally identical. The visual system does not switch layout, density, or component treatment between them. Only the headline, helper prompt, and account link swap. That symmetry is important: the user should feel that both steps belong to the same flow and that neither one is a special case.

## Responsive behavior

On narrower screens, the most important rule is to keep the form first and preserve the reading order inside the card. The left-side proof board should move below the form or collapse into a simpler stacked summary rather than competing with the entry task. The form card can stay rounded and centered, but its internal spacing should tighten before the text size shrinks too far. The social buttons should remain equal width if the row still fits; if not, they can stack while keeping icon alignment and consistent padding.

The accent rails and the yellow button should retain their color strength at smaller sizes, because they are doing real navigational work. Input height should remain generous enough for touch, and the helper link should stay separated from the button by a clear vertical gap. The grid background can simplify on mobile if needed, but the page should keep the same quiet, technical mood.

## Practical implementation guidance

### Preserve
- Keep the split between the proof board and the auth card.
- Use Aeonik for nearly all reading text and Jet Brains Mono only for the small uppercase action label.
- Keep the main card white, rounded, and bordered rather than shadow-heavy.
- Let the yellow button remain the one dominant warm accent.
- Keep the left-side color rails thin and consistent across all four tiles.

### Avoid
- Avoid replacing the split layout with a centered single-column marketing page on desktop.
- Avoid adding dark surfaces, decorative gradients, or large shadows.
- Avoid turning the left-side tiles into long paragraphs.
- Avoid changing the login and sign-up screens into different visual systems.
- Avoid mixing too many accent colors into the form area itself.

### Recommended build order
1. Establish the pale canvas, outer gutters, and grid background.
2. Build the white form card with headline, helper prompt, and field stack.
3. Add the yellow submit button and confirm its contrast.
4. Add the social button row and align icon-and-label spacing.
5. Recreate the left-side benefit grid with the four colored rails.
6. Finish the trust strip, helper link, and tiny arrow controls.
7. Mirror the structure for the alternate auth screen.

### Accessibility
- Keep visible focus styles on the social buttons, field, submit button, and inline links.
- Make sure the yellow button label stays readable against the fill color.
- Use explicit labels for the email field even when the placeholder is present.
- Maintain enough contrast for the small helper text and trust strip copy.
- Preserve clear tap targets if the layout compresses on smaller screens.

## Scope note

This guide covers the login and sign-up screens only, including the split auth layout, the feature tiles, and the form card. It does not cover the signed-in dashboard, mobile-specific breakpoints, motion, validation and error states, or alternate account recovery flows. Measurements are practical adaptation targets.
