# How antigravity.google is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/antigravity.google-design)

Last updated: 2026-08-03

## Captured pages

[![Centered auth success message with confetti-like particle arc](https://pin.fontofweb.com/6298?format=jpg)](https://design.withfudge.com/share/pin-6298)

[Centered auth success message with confetti-like particle arc](https://design.withfudge.com/share/pin-6298)

[![Hero page with large black headline and scattered particle field](https://pin.fontofweb.com/5658?format=jpg)](https://design.withfudge.com/share/pin-5658)

[Hero page with large black headline and scattered particle field](https://design.withfudge.com/share/pin-5658)

[![Pricing grid with three pale panels and black primary button](https://pin.fontofweb.com/5033?format=jpg)](https://design.withfudge.com/share/pin-5033)

[Pricing grid with three pale panels and black primary button](https://design.withfudge.com/share/pin-5033)

[![Huge Antigravity wordmark with sparse footer and wide margins](https://pin.fontofweb.com/4836?format=jpg)](https://design.withfudge.com/share/pin-4836)

[Huge Antigravity wordmark with sparse footer and wide margins](https://design.withfudge.com/share/pin-4836)

[![Professional use case with giant rings and centered chip row](https://pin.fontofweb.com/4835?format=jpg)](https://design.withfudge.com/share/pin-4835)

[Professional use case with giant rings and centered chip row](https://design.withfudge.com/share/pin-4835)

[![Minimal changelog page with oversized title and empty white space](https://pin.fontofweb.com/5616?format=jpg)](https://design.withfudge.com/share/pin-5616)

[Minimal changelog page with oversized title and empty white space](https://design.withfudge.com/share/pin-5616)

## Overview

Antigravity uses a spare Google product register: a white page surface, a thin top navigation line, one strong headline or status message, and a compact set of pill actions. The system feels controlled rather than decorative. Most pages rely on one large typographic anchor, a few small links, and lots of open space so the message can land without competing elements.

The pages in this set share the same calm hierarchy even when the content changes from launch copy to pricing, use cases, changelog, or a success state. The black pill action is the clearest interactive shape. Secondary buttons stay visually quiet and let the primary choice remain obvious. Decorative particle fields add energy, but they never take over the page. The whole system is built to feel light, legible, and direct.

## Colors

The exact UI palette is deliberately small. `action` is the black used for the most important pill action and the strongest dark shapes. `ink` and `muted-ink` handle the two levels of text on the light page surface. That restraint matters because the layout already carries much of the visual weight through scale and spacing.

The page surface reads as white in the supplied views, but that should stay a descriptive surface condition rather than a new token. The same is true of the thin separators and card boundaries: they function as neutral structural lines, not as a branded color system. The decorative particle field should also stay out of the token set. Its dots and short strokes shift across blue, violet, red, yellow, and warm neutral tones from page to page, so it works best as a multicolor atmospheric device rather than a fixed accent color.

Use the black action color for the primary path, and keep the text colors near-black so the pages retain the same calm, high-contrast look across the full set of screens.

## Typography

Google Sans is the main family across the page body and the largest headings. Google Sans Flex appears in the top navigation and utility lines, where the interface needs the same Google identity with a slightly more compact, utility-like feeling. The hierarchy is simple: 32px medium-weight headlines establish the main message, while 16px regular and medium text carry body copy, buttons, and links. No designer or vendor credit is supplied for either family in the packet.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Google Sans | 2rem | 500 | 1.1 | 0em | Large launch headline and oversized product wordmark |
| section-display | Google Sans | 2rem | 500 | 1.1 | 0em | Changelog titles and centered use-case statements |
| body | Google Sans | 1rem | 400 | 1.5 | 0em | Supporting copy, short explanations, and helper lines |
| body-medium | Google Sans | 1rem | 500 | 1.5 | 0em | Button text and emphasized utility text |
| navigation | Google Sans Flex | 1rem | 400 | 1.5 | 0em | Top navigation, link rows, and small utility labels |

The scale should stay disciplined. The difference between regular and medium weight does most of the work for buttons and headline emphasis. Line length remains comfortable because the body copy sits on wide margins and because the pages avoid dense text blocks. That combination gives the interface a clean product feel rather than a promotional one.

## Layout

The layout is centered around generous horizontal breathing room and a small set of repeated structural patterns. A thin top bar holds the logo on the left, text links in the middle, and a dark pill action on the far right. That header is light in visual weight but still clearly functional. Under it, the page body opens into a wide central field where a hero statement, a confirmation message, or a comparison grid can sit without crowding the edges.

The auth success page is the clearest example of the system’s restraint. It uses a centered brand mark, a short confirmation line, a helper sentence, and tiny utility links, all surrounded by open space and a loose particle arc. The use-case page stretches the same logic into a larger centered statement, paired actions, and a lower chip row that feels like a mode selector. The pricing page shifts into three softly contrasted cards, spaced far enough apart that each plan reads as a separate choice. The product page goes the other direction and uses a single huge wordmark to dominate the canvas, with a minimal footer to close the composition. The changelog page is the sparsest of all: one oversized title, large blank fields, and almost no extra framing.

The spacing rhythm stays broad. The 72px outer gutter gives the desktop pages their roomy, editorial feel, while the smaller 8px rhythm keeps link rows, button stacks, and card internals aligned. That contrast between a large page rhythm and a small internal rhythm is a key part of the Antigravity look.

## Visual language

The visual language is built from four recurring ingredients: white space, black typography, rounded pills, and floating particles. The white space is not empty by accident; it is the structure that allows the headlines and action buttons to feel deliberate. Black text and black fills give the interface its strongest anchors. Rounded pills keep the page friendly and product-like without becoming playful.

The particle field is the signature visual detail. It appears as tiny dots, short dashes, and specks that curve into halos, arcs, and broad wave shapes around the copy. On the auth success page it reads as a loose celebratory scatter. On the professional use case page it forms giant circular rings that frame the hero area. On the pricing and hero pages it spreads more loosely so the content stays dominant. Because the particles shift across multiple hues, they should be treated as a dynamic decorative system rather than as a single color accent.

Surfaces stay simple. Cards are broad and lightly contrasted. Rules and borders are faint. Shadows are either absent or so subtle that they do not become part of the visual language. The result is a system that feels clear and modern without relying on heavy depth effects, gradients, or flashy treatment.

## Components

### Top navigation

- **Anatomy:** Logo at the left, a run of text links in the middle, and one dark pill action at the right edge.
- **Surface:** Light page surface with almost no chrome.
- **Typography:** 16px Google Sans Flex in a regular weight for the navigation line.
- **Composition:** Keep the bar thin and horizontally open so the body content can start with breathing room below it.
- **Visible state:** The rightmost pill is the strongest visual item in the row; the text links remain quiet and secondary.

### Primary action

- **Shape:** Compact pill with rounded ends.
- **Surface:** Solid black fill with light text.
- **Typography:** 16px Google Sans at medium weight.
- **Hierarchy:** This is the most assertive action in the system and should carry the main page decision.
- **Visible state:** It is often paired with a lighter secondary option, but it should remain the first thing the eye finds in any action row.

### Secondary action

- **Shape:** Same pill family as the primary action.
- **Surface:** Light fill or outline treatment that stays visually softer than the black button.
- **Typography:** 16px Google Sans at medium weight so the label stays clear without relying on fill color.
- **Role:** Supports comparison or alternates without competing with the primary action.
- **Visible state:** In pricing and hero sections, it sits beside the main button and preserves the page’s calm hierarchy.

### Hero statement

- **Anatomy:** One large headline, a short supporting line, and a compact action row.
- **Typography:** 32px Google Sans at medium weight for the main line, with 16px body copy below.
- **Composition:** Keep the hero centered or left aligned depending on the page family, but always give it wide margins and a lot of air around it.
- **Visible states:** Some hero sections sit inside particle fields; others stand alone against open white space.

### Pricing card

- **Anatomy:** Small status label, plan title, short explanatory copy, and one action.
- **Surface:** A lightly tinted or softly contrasted card plane that separates the plan from the page background.
- **Hierarchy:** The first plan gets the clearest action, while the others stay quieter and read as alternate choices.
- **Spacing:** Card interiors should feel generous, with enough room for the title, summary, and call to action to breathe.
- **Visible states:** Status chips such as “Public preview” and “Coming soon” add structure without adding visual noise.

### Chip row

- **Anatomy:** Rounded selectable pills with small icons or short labels.
- **Surface:** Light pills with clear selected and unselected states.
- **Role:** Lets the page present an audience or mode choice without using a heavy tab system.
- **Composition:** Keep the row centered and separated from the main copy so it feels like a decision line, not a navigation bar.
- **Visible states:** The selected chip should read as the strongest item in the row, with the others visually receding.

### Changelog heading block

- **Anatomy:** One oversized title with very little additional framing.
- **Typography:** 32px Google Sans in medium weight.
- **Surface:** Large open space around the heading so the page reads as calm and practical.
- **Role:** Makes the changelog feel deliberate and easy to scan.
- **Composition:** Resist the urge to add extra ornament, framing lines, or supporting badges unless they are necessary for clarity.

### Success confirmation state

- **Anatomy:** Brand mark, confirmation line, brief helper sentence, and tiny utility links.
- **Surface:** Clean white field with a soft multicolor particle scatter around the lower area.
- **Role:** Gives the user a checkpoint after authentication without turning the page into a marketing panel.
- **Visible states:** The helper links remain small and secondary, while the confirmation message stays central.

## Responsive behavior

When the page narrows, preserve the reading order first: logo, headline, action, supporting copy, then cards or chips. The wide desktop gutters should compress before the type hierarchy does. Pricing cards should stack into a single column before body text gets too tight. The particle field should thin out or drift farther from the text so the headline and buttons stay legible. The top navigation should keep its main download action easy to reach, even if the text links become tighter or collapse into a simpler form. The big hero and changelog titles should keep generous line breaks rather than shrinking into compressed blocks.

## Practical implementation guidance

### Preserve

- Keep the page mostly white, black, and near-black.
- Keep Google Sans in the body and Google Sans Flex in the utility line.
- Keep one large headline or one large status line as the main anchor on each page.
- Keep the black pill as the primary action shape and the lighter pill as the secondary option.
- Keep the particle field decorative, airy, and clearly separate from the page’s reading order.

### Avoid

- Avoid assigning a fixed UI token to the multicolor particle field.
- Avoid heavy shadows, glossy depth, or glass-style layering.
- Avoid extra font families or decorative type treatments.
- Avoid turning neutral separators into brand colors.
- Avoid crowding the pages with dense labels when open space can do the job.

### Recommended build order

1. Establish the white page surface, black text, and dark pill action.
2. Build the top navigation and the wide outer gutter rhythm.
3. Add the 32px medium-weight headline treatment.
4. Layer in the pricing cards and chip rows.
5. Add the multicolor particle system as a background-level decorative layer.
6. Finish with the sparse changelog and success-state variants.

### Accessibility

- Keep contrast strong for black text against the light page surface and for light text on the black pill.
- Give the chip row and utility links visible keyboard focus styles.
- Treat the particle field as decorative so it does not interrupt reading order.
- Keep link labels short and direct so the compact top bar stays understandable at a glance.
- Preserve the same reading order when cards stack on narrower screens.

## Scope note

This guide covers the supplied desktop auth success, product, pricing, changelog, and use-case pages. Mobile breakpoints, motion, hover and focus choreography, empty states, and alternate footer treatments are not included here; spacing uses the packet’s 8px step and 72px wide gutter.
