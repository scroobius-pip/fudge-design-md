# How accounts.x.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/accounts.x.ai-design)

Last updated: 2026-08-03

## Captured pages

[![Wide account dashboard with left rail and stacked account cards](https://pin.fontofweb.com/10437?format=jpg)](https://design.withfudge.com/share/pin-10437)

[Wide account dashboard with left rail and stacked account cards](https://design.withfudge.com/share/pin-10437)

[![Centered device sign-in form with code field and wide continue button](https://pin.fontofweb.com/10202?format=jpg)](https://design.withfudge.com/share/pin-10202)

[Centered device sign-in form with code field and wide continue button](https://design.withfudge.com/share/pin-10202)

[![Consent screen with stacked permission rows and deny-allow pills](https://pin.fontofweb.com/10203?format=jpg)](https://design.withfudge.com/share/pin-10203)

[Consent screen with stacked permission rows and deny-allow pills](https://design.withfudge.com/share/pin-10203)

[![Authorized success page with split dark shell and bright side panel](https://pin.fontofweb.com/10204?format=jpg)](https://design.withfudge.com/share/pin-10204)

[Authorized success page with split dark shell and bright side panel](https://design.withfudge.com/share/pin-10204)

## Overview

accounts.x.ai is a dark account console, not a marketing page. The system keeps almost everything in black, charcoal, white, and muted gray, then uses a cool blue-gray illustration panel to soften the strictness of the shell. The result feels technical, calm, and controlled.

The account dashboard and the OAuth flows share the same visual logic. A narrow utility rail, compact headings, flat cards, and pill buttons handle account tasks. On the device sign-in and consent pages, a 24px flow-title tier carries the page title so the task reads clearly without swelling into a hero headline. When the flow changes into device sign-in or consent, the page splits into a left control surface and a right image field, but the same palette and type scale stay in place. Nothing ornamental competes with the task.

The design is built from a small set of repeated decisions: dark surfaces at three close values, 1px separators, 12–16px radii, and white filled pills for the main action. The hierarchy stays legible because spacing and contrast do most of the work.

## Colors

The palette is intentionally narrow. Black is the outer canvas. Two nearby charcoal surfaces handle cards and forms. Borders are darker still, so separation comes from edge contrast rather than bright rules. Text stays white or near-white on primary surfaces, while muted gray carries labels, hints, and secondary navigation.

### Core interface colors

| token | value | role |
|---|---|---|
| `canvas` | `#000000` | Page background and full-bleed shell |
| `surface-muted` | `#0D0D0D` | Deeper form wells and background relief |
| `surface` | `#111111` | Main page surface and larger content areas |
| `surface-raised` | `#1A1A1A` | Cards, panels, and grouped lists |
| `border` | `#303030` | Hairline separators, card edges, and input strokes |
| `ink` | `#FFFFFF` | Primary text, icons, and strongest contrast |
| `muted-ink` | `#ACAAAA` | Supporting copy, labels, and inactive nav items |

### Action and accent colors

| token | value | role |
|---|---|---|
| `action` | `#FAFAFA` | Filled primary pills on dark surfaces |
| `action-ink` | `#111111` | Text inside filled pills |
| `accent` | `#9CB8DD` | Soft blue-gray glow in the authorization illustration |

The palette should stay disciplined. White pills are the main interaction color, but they do not read as colorful; they read as the positive escape from the black shell. The blue-gray accent belongs to the large right-side authorization art and to small avatar-like discs, not to the whole UI. Dark modes do not need separate colors because the whole system is already dark; the only shift is from flat charcoal panels to the cooler illustrative field.

## Typography

The visible interface is Inter-led. System appears only where the device code field needs a monospace feel. Applesystem is present in the packet as a fallback family, but it does not define the voice of the site. Licensing is not specified in the packet.

The scale is compact and practical: 30px for the welcome line, 24px for the device sign-in and consent page titles, 20px for section heads, 16px for row titles, 14px for buttons and dense labels, 13px for explanatory notes, and 12px for the smallest meta copy. The 24px flow-title tier bridges the large welcome line and the smaller section heads, so the sign-in and consent screens keep a clear page title without borrowing the full weight of a landing-page hero. Headings keep a tighter leading than body copy; dense UI text opens up slightly so rows do not feel crowded.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Inter | 1.875rem | 500 | 1.2 | -0.025em | Welcome line and primary screen title |
| `flow-title` | Inter | 1.5rem | 400 | 1.333 | -0.025em | Device sign-in and consent page titles |
| `section-display` | Inter | 1.25rem | 500 | 1.25 | 0em | Section headers such as account and sign-in groups |
| `panel-heading` | Inter | 1rem | 500 | 1.25 | 0em | Row titles, card headings, and action labels |
| `body` | Inter | 1rem | 400 | 1.5 | 0em | Main descriptive text and form copy |
| `body-quiet` | Inter | 0.875rem | 400 | 1.43 | 0em | Secondary explanations and muted helper text |
| `label` | Inter | 0.8125rem | 400 | 1.38 | 0em | Field labels and small descriptors |
| `microcopy` | Inter | 0.75rem | 400 | 1.33 | 0em | Fine print, small notes, and secondary metadata |
| `code` | System | 0.875rem | 400 | 1.43 | 0.1em | Device code field and terminal-like entry |

The strongest text uses slight negative tracking only at the largest sizes. Most UI copy stays neutral in letterspacing. That keeps the page feeling precise rather than dramatic.

## Layout

The desktop dashboard is organized as a left utility rail and a right content column. The rail is narrow, vertically stacked, and visually quiet. The main content sits with a large amount of black space around it, so the page never feels edge-to-edge busy. This empty field is part of the system; it gives the small cards and pills room to read as tools.

The account summary card uses a single-column stack inside a rounded panel. Labels sit above values, with the action pill aligned to the right of each row. Thin separators divide the rows, so the card reads as a compact table without visible grid lines. The sign-in methods section repeats the same rhythm: icon, title, supporting line, and a right-aligned control.

The OAuth pages change structure. Device sign-in uses a centered form block with a code field, helper text, and one large white button. The consent screen keeps the same left-side column but adds a stacked permission list with a bottom action row. The success screen splits the page into two halves: text and controls on the left, a full-height illustrated panel on the right. On those flow pages, the 24px title tier sits above the form or permissions list so the user sees the step immediately, then the smaller helper copy explains the action below it.

Spacing is generous at the page level and compact inside rows. Outer sections breathe with 40–80px steps; inner controls use 12–16px steps. The repeated contrast between open page space and tight card structure is one of the system’s strongest signals.

## Visual language

The visual language is severe, minimal, and product-first. Flat charcoal panels carry most of the information. Borders are subtle. Shadows are nearly absent. A 1px line and a slight value shift are usually enough to separate surfaces.

Rounded forms are restrained. Cards and dialogs use 12–16px corners, while pills feel more capsule-like but still belong to the same family. Nothing is soft enough to become playful. The shape language stays close to settings UI, which is the right tone for account and identity tasks.

Icons are small and functional. Provider logos sit inside circular badges. Navigation glyphs stay thin and monochrome. The xAI mark stays light and quiet in the corner. The only visually expansive element is the authorization illustration, which uses a cool blue-gray wash and a large abstract mark to make the success and consent flows feel distinct without breaking the dark system.

The strongest visual contrast comes from white pills against black surfaces. That contrast is what makes the page feel decisive. It should be preserved everywhere the user is asked to continue, allow, connect, or enable.

## Components

### Shell and navigation

- **Anatomy:** Small top-left mark, left rail, active item indicator, inactive item labels.
- **Surface:** Black canvas with no visible framing box around the rail.
- **Typography:** `hero-display` for the greeting, `panel-heading` and `body` for nav and section titles.
- **States:** The active item uses brighter text and a small square marker; inactive items fall back to muted gray.
- **Spacing:** The rail keeps loose vertical spacing between items, with enough room that the section feels like a utility menu rather than a sidebar app.

### Account summary panel

- **Anatomy:** Title, short description, optional avatar disc, and four stacked rows for name, email, subscription, and creation date.
- **Surface:** `surface-raised` with a 1px `border`.
- **Typography:** Row labels use `label`; values use `body`; row actions use `body-quiet` or `panel-heading` depending on prominence.
- **Shape:** `rounded.dialog`.
- **Composition:** Labels sit above values. Actions sit on the far right so the left side can carry the information hierarchy.
- **Visible states:** The panel feels static and read-only except for the row-level pills.

### Sign-in methods list

- **Anatomy:** Circular provider icon, provider name, short descriptive line, right-side pill.
- **Surface:** Same raised charcoal panel, broken into rows by thin separators.
- **Typography:** Provider names use `panel-heading`; helper lines use `body-quiet`.
- **Action pattern:** White filled pill for positive actions such as Enable and Connect; outlined dark pill for Disable.
- **Composition:** The left side carries identity and context; the right side carries the next step.

### Device sign-in form

- **Anatomy:** Screen title, helper line, centered code field, cautionary note, and one large continue button.
- **Surface:** Black shell with a slightly lighter form field.
- **Typography:** The page title uses `flow-title`; the code uses `code`; surrounding copy uses `body-quiet`.
- **Shape:** The field is rectilinear and the button is a capsule.
- **Spacing:** The form block uses a simple vertical stack with clear separation between the code field and the button.

### Consent sheet

- **Anatomy:** Signed-in identity line, authorization title, permission list, deny button, allow button.
- **Surface:** Dark shell with a stacked list of flat permission rows.
- **Typography:** The authorization title uses `flow-title`; permission titles use `panel-heading`; explanations use `body-quiet`.
- **Shape:** Buttons keep the same pill family as the rest of the system.
- **Hierarchy:** The allow button is the strongest fill. Deny remains outlined so the primary decision is unmistakable.
- **Visible states:** The list is informational, not interactive-looking; the action row is what carries the decision.

### Success panel

- **Anatomy:** Short confirmation text on the left, full-height art panel on the right, small sign-out control at the top.
- **Surface:** Split between the black control side and the cool blue-gray illustration side.
- **Typography:** `panel-heading` for the confirmation line, `body-quiet` for the explanation.
- **Composition:** The right panel is not a decorative afterthought; it gives closure to the flow and balances the severe left-side text block.

## Responsive behavior

On narrower screens, the left utility rail should collapse into a top or stacked block, while the content cards remain full width. The account summary and sign-in list should keep their row order and preserve the right-aligned pills where space allows. If a row cannot keep both text and action on one line, the action should wrap below the text without changing the order.

The auth pages should keep their dark tone and avoid switching to a bright mobile pattern. The split-screen success and consent layouts can stack vertically on small widths, but the illustration should remain secondary to the task surface. Code fields should stay wide enough for easy reading, and the continue button should remain a full-width or near-full-width target.

Spacing should compress before type changes. Keep the 12–16px inner rhythm as long as possible; reduce outer gutters first. The system should remain legible without adding new visual states.

## Practical implementation guidance

### Preserve

- Keep the page almost entirely black, charcoal, white, and muted gray.
- Keep white pills as the main positive action.
- Keep 1px separators and row dividers.
- Keep the left utility rail and right content column on the account dashboard.
- Keep the blue-gray illustration panel limited to the OAuth success and consent flows.

### Avoid

- Avoid colorful button fills.
- Avoid glossy shadows or lifted material effects.
- Avoid heavy borders around every control.
- Avoid a marketing-style hero layout.
- Avoid expanding the navigation into a prominent sidebar shell.

### Recommended build order

1. Build the black shell and Inter type scale.
2. Add the left rail and active-state marker.
3. Recreate the account summary card with row-level pills.
4. Add the sign-in methods list and its icon badges.
5. Build the device code form and the OAuth consent stack.
6. Add the split success page with the cool-toned illustration panel.
7. Tune spacing and radii so the same parts feel consistent across routes.

### Accessibility

- Keep visible focus states on every pill and input.
- Preserve strong contrast for muted gray copy on black surfaces.
- Make the provider icons decorative only if the text labels are present.
- Keep the code field readable at the chosen size and tracking.
- Ensure the allow and deny actions remain clear without relying on color alone.

## Scope note

This guide covers the account dashboard plus device sign-in, consent, and success flows. It does not set mobile breakpoint values, motion, hover details, loading states, or error states beyond what appears in the supplied pages. All rem values are rounded to a consistent 0.125rem step.
