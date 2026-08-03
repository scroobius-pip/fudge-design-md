# How coda.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/coda.co-design)

Last updated: 2026-08-03

## Captured pages

[![Dark hero with cream headline and green sculptural form](https://pin.fontofweb.com/6759?format=jpg)](https://design.withfudge.com/share/pin-6759)

[Dark hero with cream headline and green sculptural form](https://design.withfudge.com/share/pin-6759)

[![Cream directory sheet with expanded navigation shell](https://pin.fontofweb.com/6758?format=jpg)](https://design.withfudge.com/share/pin-6758)

[Cream directory sheet with expanded navigation shell](https://design.withfudge.com/share/pin-6758)

## Overview

Coda’s merchant-of-record landing page is built as a two-mode finance story. The first mode is a dark hero stage with a huge cream claim on a charcoal background, a compact light action, and a glossy green sculptural form that fills the right half of the viewport. The second mode is a warm cream directory sheet that opens the product family into a multicolumn grid without changing the page’s quiet tone. Between those modes sits an olive-gray feature band that explains the offer in shorter, utility-shaped blocks.

The system feels restrained rather than decorative. It uses one dominant text color on each surface, one primary action style, and a narrow set of accent colors that stay small and controlled. The result is editorial and corporate at the same time: large statements, rounded shells, small utility labels, and a lot of open space around the content. The navigation remains present and calm, so the page reads as a single branded environment rather than a set of unrelated modules.

## Colors

The palette is intentionally narrow. Black and warm cream carry the main hierarchy; olive-gray softens the explanatory copy; blue and purple appear only in small navigational or product marks. The page does not rely on saturated chroma to feel branded. Instead, it separates sections with clear surface changes: a near-black shell for the hero, a warm off-white canvas for the directory, and a muted olive surface for the feature band. That shift in value does most of the work.

| token | value | role |
|---|---|---|
| `ink` | `#000000` | Main headline text, primary action fill, dense utility text |
| `action-accent` | `#002EFF` | Small directional emphasis, status marks, and utility contrast |
| `muted-ink` | `#5A5A4F` | Supporting copy on warm surfaces and feature explanations |
| `canvas` | `#F8F9EB` | Light page base and the directory sheet |
| `surface` | `#EDEEE1` | The olive-gray feature band and secondary panels |
| `shell` | `#202020` | Hero backdrop and top announcement strip |
| `accent-purple` | `#671FFF` | Product badges and store markers in the directory grid |
| `on-dark` | `#FFFFFF` | Copy and UI on the dark hero and banner |

The warm surfaces are close in value but distinct in use. `canvas` is the brightest field and feels like paper. `surface` is a shade deeper and carries the feature content without pulling attention from the hero. `shell` is the deepest tone and gives the page its strongest contrast. The accent colors stay small, which keeps the page from turning into a multicolor SaaS dashboard. White text only appears where the background is genuinely dark, not as a decorative choice.

## Typography

The page is driven by **Abc Monument Grotesk**. Heavy weights carry the hero and section headlines, while Regular and Medium handle navigation, body copy, and item labels. **Jet Brains Mono** appears in compact labels and small technical ticks. **System** is present for utility-sized text and legal copy. Licensing details are not supplied here.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Abc Monument Grotesk | 4rem | 800 | 0.9 | -0.015em | The large merchant-of-record headline |
| `section-display` | Abc Monument Grotesk | 1.4375rem | 800 | 1 | -0.01em | Strong feature headings and menu headings |
| `body` | Abc Monument Grotesk | 1rem | 400 | 1.5 | 0em | Supporting paragraphs and item descriptions |
| `body-medium` | Abc Monument Grotesk | 1.125rem | 500 | 1.45 | 0em | Primary button text and stronger body lines |
| `nav` | Abc Monument Grotesk | 1rem | 500 | 1.25 | 0em | Top navigation items and utility links |
| `label` | System | 0.75rem | 400 | 1.2 | 0.12em | Small uppercase section labels |
| `mono-label` | Jet Brains Mono | 0.9rem | 400 | 1 | 0.04em | Directory headings and compact technical tags |
| `legal` | System | 0.75rem | 400 | 1.4 | 0em | Banner copy and fine print |

The hierarchy depends on scale and weight more than on many type families. Headlines are compressed and heavy, with very little extra leading, so they read as single visual objects rather than loose paragraphs. Body copy opens up a little more, but it still stays tight enough to support the finance tone. Small labels use extra tracking so they read as utility markers, not as mini headlines. Keep the family switch disciplined: Abc Monument Grotesk for the marketing voice, Jet Brains Mono for short technical labels, System for the smallest utility text.

## Layout

The page is structured around a wide desktop frame with strong internal padding and very little ornamental fragmentation. The top announcement strip sits flush across the viewport in a dark tone and keeps the message short. Beneath it, the main navigation sits inside a long cream rounded shell that spans nearly the full width of the page. That shell contains the wordmark at left, centered navigation items, a language control, a contact link, and a black pill action at the far right. The shell is visually quiet: the rounded corners and warm fill do more work than borders or shadows.

The hero is a two-column composition. The left column carries the headline, a short paragraph, and a single action. The right column is reserved for a large green, glossy, biomorphic object that feels closer to a sculptural product symbol than to literal photography. The composition leaves a large amount of dark negative space between the copy and the object, which gives the headline room to breathe and keeps the page from feeling crowded.

Lower on the page, the olive-gray feature band becomes a broad rounded rectangle. It uses a three-column rhythm: a small label block, then a row of short benefit blocks with icon, headline, and support line. The spacing is generous but not airy; it feels like a compact explanation surface placed inside a larger canvas. The open directory sheet in the second view follows the same logic. It swaps the dark shell for a cream field and uses columns to group product families and store links. The expanded sheet still feels like part of the same page because the nav shell and rounded corners remain consistent.

## Visual language

The design language is spare, strong, and slightly industrial. The hero object is the most expressive element on the page, but even it stays within the system’s restraint: glossy, soft-edged, and simplified into a single green mass rather than a busy illustration. The rest of the page avoids ornamental noise. There are no heavy shadows, no loud gradients, and no dense background textures competing with the message. Instead, the page leans on proportion, contrast, and surface changes.

Roundness is one of the main signals of the brand. The shell around the navigation is pill-like and soft; the feature band and directory sheet use large rounded corners; the button is fully pill-shaped. Smaller corners are used sparingly, mostly on item badges and compact cards. That consistent softness keeps the hard black headline from feeling severe. The color system reinforces the same balance: black for certainty, cream for openness, olive for support, and small purple/blue touches for wayfinding.

The page also treats labels as part of the composition. Tiny uppercase markers and mono-like tags do not interrupt the hierarchy; they sit beside it. The directory grid in particular depends on this discipline. Small badges, compact headings, and short lines of supporting copy let the large surface stay calm even when the page lists many products.

## Components

### Announcement strip

- **Anatomy:** One-line message, a “Read more” link, and a close control at the far right.
- **Surface:** Dark shell on the same black family as the hero.
- **Typography:** Small System text with wide tracking, sized like a utility line rather than a headline.
- **Composition:** The content stays centered horizontally and reads as a narrow band above the main navigation.
- **Visible state:** Quiet, low-emphasis, and separate from the main call to action.

### Navigation shell

- **Anatomy:** Wordmark, four main links, locale control, contact link, and a pill action.
- **Surface:** Warm cream inside a full-width rounded shell.
- **Typography:** Medium-weight Abc Monument Grotesk for the links, with the wordmark set much heavier and more compact.
- **Shape:** Large pill radius on the shell; smaller pill treatment on the action.
- **Hierarchy:** The action is the only filled control; the rest of the nav stays text-forward and calm.

### Hero stage

- **Anatomy:** Large claim, short supporting paragraph, one primary action, and a decorative green sculptural form.
- **Surface:** Dark shell with white or cream text.
- **Typography:** Extra-bold, tightly set display type for the claim; regular body for the supporting copy.
- **Composition:** Left-aligned copy, right-aligned sculpture, large empty center field.
- **Spacing:** Wide gap between the copy block and the sculptural form; strong vertical breathing room under the action.

### Primary action

- **Fill:** Pure black with light text.
- **Typography:** Medium-weight Abc Monument Grotesk.
- **Shape:** Full pill.
- **Spacing:** Compact horizontal padding and a slightly taller vertical pad, so the button reads as solid and deliberate.
- **Usage:** One principal action per major section, never a crowded row of competing buttons.

### Feature band

- **Anatomy:** Small label chip, then a row of benefit blocks with icon, headline, and support line.
- **Surface:** Olive-gray rounded rectangle.
- **Typography:** Medium or bold for the block heads, smaller regular copy for the support lines, mono-like or uppercase treatment for the label chip.
- **Composition:** Horizontal rhythm with clear spacing between columns; icons sit close to the headlines.
- **State:** Flat and quiet; the band explains the offer without trying to become a separate visual event.

### Product directory sheet

- **Anatomy:** Category headings, product names, sublines, and occasional external-link marks.
- **Surface:** Warm cream sheet with the same large rounding used elsewhere.
- **Typography:** Small uppercase labels for categories, regular text for item names, smaller support lines beneath.
- **Color:** Small blue, purple, and black badges mark product groups and stores without taking over the page.
- **Composition:** A wide multicolumn grid that reads like an expanded menu rather than a dense catalog.

## Responsive behavior

The desktop layout depends on wide breathing room, but its logic should scale in a simple order. The announcement strip should stay first, the navigation shell should stay compact, and the hero copy should remain above the decorative form when the viewport narrows. The feature band should collapse from a wide row into stacked blocks before the directory grid loses legibility. The directory sheet can reduce columns, but the category labels and item groupings should remain intact so the page still feels organized rather than compressed.

When space tightens, preserve the hierarchy rather than the exact geometry. Keep the claim large, keep the action obvious, and let the sculptural form become secondary before the copy does. The system relies on contrast and spacing more than on delicate alignment tricks, so a narrower layout should still work if the order stays consistent.

## Practical implementation guidance

### Preserve

- Keep the black-on-cream contrast model and the one-black-action pattern.
- Preserve the large rounded shells around the navigation, feature band, and directory sheet.
- Keep Abc Monument Grotesk as the main voice for headlines, nav, and body text.
- Let the green hero form remain oversized and decorative rather than turning it into a busy product mock.
- Keep accent colors small and local, not page-wide.

### Avoid

- Avoid adding gradients, glows, or shadow stacks that compete with the flat, controlled surfaces.
- Avoid replacing the warm canvas with bright white or cool gray.
- Avoid splitting the headline into multiple competing weights.
- Avoid turning the directory into a dense table or a card wall.
- Avoid introducing a second strong action color; the system already has enough contrast.

### Recommended build order

1. Set the page surfaces: top strip, hero shell, warm navigation shell, and cream directory field.
2. Add the type hierarchy, starting with the heavyweight hero and then the nav and body roles.
3. Build the pill action and make it the only strong filled control.
4. Lay out the hero copy and the sculptural right-side form.
5. Add the olive feature band with its small icon blocks.
6. Add the multicolumn directory sheet and its badges.
7. Tighten spacing, rounding, and label treatment across all sections so the page feels like one system.

### Accessibility

- Keep text contrast strong on both the dark shell and the warm canvas.
- Do not rely on accent color alone to distinguish stores, links, or active nav items.
- Keep the pill action large enough to read and tap comfortably.
- Preserve clear focus styling on the nav links, action, and directory items.
- Treat the green hero form as decorative if it carries no content, so it does not need to compete with the headline for meaning.

## Scope note

This guide covers the Coda merchant-of-record landing page shown here: the announcement strip, rounded cream header, dark hero with green sculpture, olive feature band, and open product directory sheet. It does not define mobile reflow, motion, hover or focus styling, or pages outside this landing surface. Spacing and radii are expressed with a 0.125rem-step system.
