# How dash.cloudflare.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dash.cloudflare.com-design)

Last updated: 2026-08-08

## Captured pages

[![Wide dashboard with left rail, metrics, and right-side controls](https://pin.fontofweb.com/10060?format=jpg)](https://design.withfudge.com/share/pin-10060)

[Wide dashboard with left rail, metrics, and right-side controls](https://design.withfudge.com/share/pin-10060)

[![Centered domain-ready page with four next-step cards](https://pin.fontofweb.com/10039?format=jpg)](https://design.withfudge.com/share/pin-10039)

[Centered domain-ready page with four next-step cards](https://design.withfudge.com/share/pin-10039)

[![Dense registration form with summary rail and field error](https://pin.fontofweb.com/9843?format=jpg)](https://design.withfudge.com/share/pin-9843)

[Dense registration form with summary rail and field error](https://design.withfudge.com/share/pin-9843)

[![Single-column payment panel with red error strip](https://pin.fontofweb.com/9840?format=jpg)](https://design.withfudge.com/share/pin-9840)

[Single-column payment panel with red error strip](https://design.withfudge.com/share/pin-9840)

[![Two-column registration screen with pricing summary rail](https://pin.fontofweb.com/9839?format=jpg)](https://design.withfudge.com/share/pin-9839)

[Two-column registration screen with pricing summary rail](https://design.withfudge.com/share/pin-9839)

[![High-density billing table with product dots and zero totals](https://pin.fontofweb.com/9664?format=jpg)](https://design.withfudge.com/share/pin-9664)

[High-density billing table with product dots and zero totals](https://design.withfudge.com/share/pin-9664)

## Overview

Cloudflare’s dashboard is a dark enterprise console built for account work rather than display. The page stays inside a black field, uses thin rules to separate sections, and keeps blue as the single dominant action color. That makes the interface feel calm, technical, and efficient. The main layout is not trying to entertain; it is trying to help a user move through domain, billing, and security tasks with as little visual noise as possible.

The screens in this family share the same attitude even when the page structure changes. A centered handoff page can stand almost empty and still feel complete because the headline, the status card, and the next-step cards are arranged with strong spacing. A registration flow can become a dense form without losing clarity because the supporting panel stays close to the action. A billing page can expand into a long table and still feel consistent because the same dark surface, pale text, and blue emphasis remain in place. The result is a system that speaks in restraint, compact hierarchy, and precise separation.

## Colors

The palette is narrow and role-based. Black carries nearly every surface. Pale text carries the reading load. Blue marks the path forward, green marks safe status, and red marks trouble. Because the interface avoids decorative color fields, each hue does work. Blue is for links, primary actions, and selected emphasis. Green appears in success chips and positive state markers. Red appears in the checkout error banner and other urgent states. The screen family stays in the dark range rather than shifting between bright and dim presentations, so contrast comes from color role, weight, and spacing instead of from large background changes. There is no photographic layer in the shown surfaces; the accent system is the main source of contrast.

| token | value | use |
|---|---|---|
| `canvas` | `#000000` | Full-page background and shell fields |
| `surface` | `#000000` | Panels, cards, and table bodies |
| `field-fill` | `#000000` | Input backgrounds and nested controls |
| `text-strong` | `#FFFFFF` | Primary headings and highest-contrast labels |
| `text` | `#FAFAFA` | Main copy and headline text |
| `text-soft` | `#D9D9D9` | Body copy, table values, and helper lines |
| `text-muted` | `#A1A1A1` | Quiet metadata, timestamps, and secondary labels |
| `action` | `#056DFF` | Primary button fill and active links |
| `action-hover` | `#086FFF` | Hover state for the main button color |
| `action-soft` | `#4693FF` | Secondary blue emphasis and lighter link accents |
| `chart-line` | `#82B6FF` | Thin chart strokes and line highlights |
| `success` | `#00A63E` | Enabled states, success chips, and safe markers |
| `danger` | `#FF6467` | Payment error text and urgent state markers |
| `danger-soft` | `#FECCC8` | Soft red fill behind the checkout error banner |

The same palette behaves differently across the page families. In the overview and security surfaces, blue and green carry the most meaning because the user is scanning for status and next actions. In checkout, red becomes the loudest note because it flags a problem that blocks progress. In billing, the palette cools back down and lets the table structure do most of the work. The dark base keeps these shifts from feeling abrupt. It also makes the blue action read as a functional signal instead of a decorative brand splash.

## Typography

The interface uses **Inter** for the main content voice and **Applesystem** for compact UI text, labels, and shell chrome. Inter handles the larger headings, the metric values, and the longer form and table copy. Applesystem works in smaller controls, navigation rows, and legal text. The pairing keeps the dashboard crisp and practical rather than soft or editorial. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Inter | 2rem | 700 | 1.05 | -0.03em | Centered handoff headline and route title |
| `section-display` | Inter | 1.5rem | 700 | 1.1 | -0.02em | Page section headers and strong panel titles |
| `panel-title` | Inter | 1.125rem | 600 | 1.2 | -0.01em | Card labels, form group titles, and sidebar headings |
| `metric-display` | Inter | 1.25rem | 700 | 1.05 | -0.02em | Large values in overview cards and usage summaries |
| `body` | Inter | 1rem | 400 | 1.5 | 0em | Paragraph copy, helper text, and table content |
| `body-strong` | Inter | 1rem | 600 | 1.5 | 0em | Inline emphasis, key values, and task labels |
| `ui` | Applesystem | 0.875rem | 500 | 1.43 | 0em | Buttons, tabs, sidebar items, and utility links |
| `label` | Applesystem | 0.75rem | 600 | 1.25 | 0.06em | Micro-labels, section captions, and compact badges |
| `legal` | Applesystem | 0.75rem | 400 | 1.4 | 0em | Disclaimers, helper notes, and footer-style copy |

The size ladder stays compact. Headings are strong, but they do not become theatrical. The hierarchy comes from weight, line length, and spacing as much as from size. Small labels tighten into a practical utility voice, while body text stays highly readable inside forms and tables. That makes the interface feel suited to repeat account work: familiar, calm, and quick to scan.

## Layout

The overview dashboard uses a three-part composition. A left rail keeps the account and product navigation visible. The center column carries the working surface, where metrics, charts, and task cards stack in a clear vertical run. A right rail holds status, configuration, and quick actions. This split creates a command-center feeling: the user reads in the middle, navigates on the left, and edits or confirms on the right.

The centered domain-handoff page follows a different plan but keeps the same discipline. It places one headline and one short explanatory paragraph in a narrow middle column, then supports them with a single status card and a row of next-step cards. The empty black margins are part of the design. They give the message room to stand out and prevent the page from feeling crowded. Because the task is simple, the layout stays simple too.

The registration screen shifts into a two-column structure. The left side carries the long form, while the right side carries the price summary, renewal details, and the main call to action. This keeps the total visible while the user edits personal details. It also keeps the decision point near the form, which is important when the page has to report an error or request a missing field.

The checkout screen uses a single-column stack. The order summary sits above the payment method, then the error strip appears near the action area, followed by the consent checkbox and the primary purchase button. That vertical order keeps the total, payment step, and problem state in one straight read, which suits a narrow payment panel.

The billing view expands horizontally into a full-width table. Rows run across the page, and the left column holds the product names while the right side holds totals and cost. Colored dots near the product names create fast category scanning without extra ornament. Across the whole system, horizontal space is used generously on large screens, but the internal rows and cards remain compact. That contrast gives the interface its enterprise feel: wide page structure, tight working units.

## Visual language

Cloudflare’s visual language is built from restraint, not from decoration. Surfaces stay flat and dark. Rules stay thin and quiet. Shadows are minimal. A panel reads as a panel because of its outline and spacing, not because it floats. A field reads as a field because of its fill, border, and label position. That makes the pages feel precise and functional.

Color does the signaling work. Blue marks the primary path and selected emphasis. Green marks positive state. Red marks a problem the user needs to fix. The same idea appears in small pieces and large ones: a blue button, a green status chip, a red error strip. The system never asks the user to decode a large decorative palette. Instead, it presents a small number of cues that repeat across tasks.

Shape stays modest. Most corners are gently rounded, closer to a control than to a soft consumer card. The rounded pills and small chips are used sparingly and mainly for action or state. The overall mood is technical, controlled, and slightly austere. That works well for billing, domains, and security because the design keeps attention on the task and away from the frame around it.

## Components

### Shell and navigation

The shell is a dark account frame with a left rail, a top account row, and compact navigation items. The rail needs small text, clear grouping, and simple separators so the account tree remains legible. Active rows should stand out through fill, line, or contrast changes rather than through loud color. The overall feel should stay dense but not crowded.

### Overview metric cards

The overview cards combine a label, a large metric, and a pale blue line chart. Their anatomy is simple and repeatable. The number is the focus, the label explains it, and the line chart adds movement without visual clutter. These cards work because they are wide, low, and visually calm. The chart line should remain slim and bright enough to stand off the black field.

### Domain handoff strip and next-step cards

The handoff screen centers a status strip with the domain name, a short status marker, and a compact pair of actions. Below it, the next-step cards form a short row with evenly sized blocks. Each card uses a small icon area, a short title, and a one-line explanation. The cards should feel like quick routes, not like promotional panels. Spacing is the key to the composition.

### Registration and checkout forms

The registration flow is the densest component family. It uses stacked labels, bordered text fields, helper copy, and a right-side summary rail. The fields should stay dark and quiet, with visible label-to-input pairing. The summary rail keeps the price and renewal state visible so the main decision never gets lost. In checkout, the primary button stays bright blue and the error strip sits directly above the action area so the user sees the problem before clicking again.

### Error strip and payment state

The red strip in checkout is short, flat, and direct. It uses a strong red fill with a pale red tone around it so the message reads as urgent but contained. The copy is plain and centered on the problem. It should be placed close to the button and close to the payment method row, because that is where the user needs it. This component is about clarity, not drama.

### Status chips and inline state markers

The green chip style is small, rounded, and efficient. It works well for safe billing notes, active state markers, and short labels in the side rail. The chip should remain low in visual weight so it can sit inside dense rows without stealing focus. It is a signpost, not a headline.

### Billing table

The billing surface is a high-density data table with long rows, stable columns, and small colored dots at the start of each product name. The table depends on strong alignment. The product name column is left-aligned, the totals stay easy to compare, and the cost column remains visually quiet. The row separators should stay subtle so the table reads as one continuous working surface. This is the part of the system that best shows Cloudflare’s practical side.

## Responsive behavior

On narrower screens, the navigation should collapse before the content becomes cramped. The left rail can turn into a shorter navigation surface or a stacked drawer, but the hierarchy should remain the same: navigation first, task content second, support details last. The right rail in the handoff, registration, and checkout screens should move under the main form so the summary remains close to the decision point. The billing table may need horizontal scrolling or a stacked row treatment, but it should not lose its column logic. Buttons, labels, and chips should keep their compact size and remain easy to tap.

## Practical implementation guidance

### Preserve

- Keep the black canvas and the thin dark rules as the main structural language.
- Keep one bright blue action color for primary buttons and active links.
- Keep green for safe state and red for problems that need attention.
- Keep cards, fields, and tables compact and strongly aligned.
- Keep the side rails close to the main work area on wide screens.

### Avoid

- Avoid bright neutral page backgrounds that flatten the console feel.
- Avoid soft, airy card styling that makes the system feel consumer-oriented.
- Avoid large shadows or heavy lifts around panels.
- Avoid adding extra accent colors beyond the blue, green, and red set.
- Avoid oversized display type in billing, registration, or checkout surfaces.

### Recommended build order

1. Build the shell and left navigation.
2. Add the reusable panel, field, and action styles.
3. Recreate the overview cards and chart cards.
4. Add the centered handoff state and next-step row.
5. Build the registration and checkout layouts with the summary rail and error state.
6. Add the status chips and the billing table.
7. Check the narrow-screen layout and keep the reading order stable.

### Accessibility

- Keep text contrast high on all black surfaces, especially in helper copy and table rows.
- Make the blue action obvious by shape, fill, and label, not by color alone.
- Keep the red error strip close to the button it affects and use plain wording.
- Attach labels directly to fields and keep helper text near the related control.
- Keep focus states visible on links, tabs, toggles, and buttons.
- Use clear row spacing and stable columns so the table stays readable at a glance.

## Scope note

This guide covers the desktop dashboard, domain handoff, registration, checkout, and billing surfaces shown here. It does not define mobile collapse behavior, motion, or alternate light themes.
