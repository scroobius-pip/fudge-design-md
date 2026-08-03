# How carcard.arible.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/carcard.arible.co-design)

Last updated: 2026-08-03

## Captured pages

[![Warm mustard intro band with three compact columns and a large serif headline](https://pin.fontofweb.com/7745?format=jpg)](https://design.withfudge.com/share/pin-7745)

[Warm mustard intro band with three compact columns and a large serif headline](https://design.withfudge.com/share/pin-7745)

[![Centered paper-white workspace with a serif hero, dashed upload box, and green completed rows](https://pin.fontofweb.com/7743?format=jpg)](https://design.withfudge.com/share/pin-7743)

[Centered paper-white workspace with a serif hero, dashed upload box, and green completed rows](https://design.withfudge.com/share/pin-7743)

## Overview

Carcard uses two closely related visual modes: a warm editorial intro band and a calm card-scanning workspace. The first mode is poster-like and condensed, with small upper labels, a large serif statement, and a thin closing rule. The second mode is a clean single-page utility surface with a centered hero, a black primary action, a dashed upload area, a search field, and a vertical list of scanned cards. The system feels quiet rather than minimal for its own sake. It keeps the structure legible, gives the brand a soft literary tone, and uses very little color beyond ink, muted neutrals, paper white, and a green success state.

The strongest impression comes from restraint. The page does not rely on shadows, gradients, or loud icon sets. Instead, it separates parts with whitespace, hairline borders, and small changes in text scale. Georgia gives the product its voice; Applesystem keeps the interface practical. The result is a utility site that still feels authored.

## Colors

The palette is small and functional. Black is the main action color as well as the deepest text color, so the strongest buttons and the strongest words share the same weight. That makes the page feel deliberate rather than playful. The green status color is reserved for completion and confirmation. It should remain narrow in use, because the page already carries a lot of visual calm through off-white surfaces and pale borders.

`canvas` and `surface` are the two main light grounds. `canvas` is the brighter paper white used for the app workspace, while `surface-soft` is a warmer off-white that suits the more editorial top band and any quiet inset panels. `border` is the light rule color for the upload well, header separators, and list dividers. `subtle-ink` is the faintest text tone in the system and belongs to helper copy, search placeholders, and secondary labels. `muted-ink` carries explanatory text that still needs to read clearly against white. The full system can stay almost monochrome and still feel finished because the typography and spacing are doing most of the work.

Use these color roles directly:

| token | value | role |
|---|---|---|
| action | #1A1A1A | Primary buttons and strongest interface emphasis |
| ink | #1A1A1A | Main headlines and body copy |
| muted-ink | #6B6B6B | Supporting copy and quiet labels |
| subtle-ink | #999999 | Placeholders, secondary metadata, and de-emphasized text |
| canvas | #FAFAF8 | Main page ground in the app workspace |
| surface | #FFFFFF | Cards, inputs, rows, and white panel surfaces |
| surface-soft | #F0F0EA | Warmer editorial plane and soft inset surfaces |
| border | #E5E5E0 | Hairline rules, input edges, and upload boundaries |
| success | #3A7D44 | Completed state, status dot, and confirmation text |

The color relationship is simple: black for action, green for completion, white for structure, and pale gray for separation. The design never needs a bright secondary hue to stay understandable.

## Typography

Georgia carries the brand voice. Applesystem carries the controls, instructions, filenames, and status text. That split is the core of the page’s character: the product feels human and editorial at the top, then turns practical and low-friction as the interface begins. The display face is not used in a showy way. It is set with enough size and enough air around it that the words remain calm even when the message is large. Applesystem is comparatively neutral and stays out of the way.

The packet does not state reuse licensing for either family.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Georgia | 3rem | 400 | 1.15 | -0.01em | Main centered headline and prominent editorial statement |
| section-display | Georgia | 2.75rem | 400 | 1.15 | -0.01em | Smaller serif statement in the opening band |
| body | Applesystem | 1rem | 400 | 1.6 | 0em | Supporting copy, row text, and explanatory paragraphs |
| body-strong | Applesystem | 1rem | 600 | 1.5 | 0em | Primary button labels and emphasized inline values |
| utility | Applesystem | 0.875rem | 500 | 1.6 | 0em | Header buttons, compact controls, and utility actions |
| micro-label | Applesystem | 0.75rem | 500 | 1.6 | 0.04em | Tiny uppercase lead-ins and small section labels |
| status | Applesystem | 0.875rem | 500 | 1.6 | 0.04em | COMPLETED state text and success markers |

The hierarchy depends on scale and spacing more than on many weights. Georgia is always light in texture, never heavy. Applesystem becomes stronger only when the interface needs a control label or a filename to stand out. The system works because the serif headline and the sans UI never compete.

## Layout

The page reads as a centered vertical column with generous side breathing room. The app workspace is especially narrow relative to the viewport, which makes the hero, upload well, search field, and result rows feel ordered and easy to scan. The opening editorial band uses a looser grid: three compact columns at the top, then one large serif statement, then a thin divider and a small line of footer text. That top area is less like a dashboard and more like a printed manifesto.

Spacing is quiet but disciplined. The page leans on 0.25rem increments for fine separation, then climbs through 0.75rem, 1rem, 1.25rem, 2rem, 2.5rem, and a large 5rem section rhythm for the main stack. The upload well gets the most room because it is the clearest call to action after the hero. The result list is separated by hairline rules rather than card shadows, so the page never turns into a box on box on box layout.

The central column has three visible layers:

1. A thin top bar with the product name and utility actions.
2. A centered hero stack with kicker, title, description, and primary action.
3. A workflow area with the upload well, search field, and completed rows.

That sequence should stay intact. The design’s clarity depends on the page moving from statement to task without detours.

## Visual language

The site combines editorial softness with utilitarian precision. The opening band is warm and poster-like, with small uppercase section labels and a large serif sentence that behaves like a title page. The app workspace is far quieter: white fields, pale borders, a black button, and one green success state. That contrast gives the site its identity. It feels authored at the top and operational below.

Shape is restrained. Small controls use slightly rounded corners, the upload well uses a fuller rounded rectangle, and the rows stay mostly flat. The design avoids decorative curves, floating chips, and complex shadows. Hairline rules are more important than depth. They keep the long list readable without making the interface feel dense. The thumbnail images in the list are tiny and square, which gives the rows a steady rhythm and keeps attention on the filenames and states.

The visual tone is calm, almost desk-like. The hero and the upload area invite action without visual noise. The result rows say “done” in a way that feels factual rather than celebratory. That balance is the system’s defining trait.

## Components

### Editorial intro band

This is the warm opening section with three compact text columns, small uppercase labels, and one large two-line serif statement. The upper columns act like concise framing notes: philosophy, product identity, and credits. The main line below is the visual anchor. Keep it large, centered, and lightly tracked. The band should feel like a poster with just enough structure to stay readable. The thin horizontal rule near the bottom is important because it closes the composition without adding another block.

### Top utility bar

The top bar is simple and light. The product name sits on the left in a compact sans face, while the actions sit on the right as neutral outlined buttons. Their borders are pale, their corners are slightly rounded, and their padding is tight. The bar should not pull focus away from the hero. It is a control strip, not a navigation system with many branches.

### Hero stack

The hero uses a small kicker, a large centered Georgia headline, a short two-line description, and one strong black button. The kicker is quiet and low-contrast. The headline is the main thing on the page and should remain open, airy, and centered. The body copy beneath it is muted rather than gray-black, which keeps the button as the clear next step. The black action button works because it is the only dense shape in the stack.

### Upload well

The upload area is a large dashed rectangle on white. It uses generous internal padding, a pale border, and centered text. It reads as an invitation rather than a framed card. The dashed edge matters because it distinguishes the drop target from the rest of the page without adding weight. Keep the prompt text simple and centered. Do not add extra chrome inside this area.

### Search field

The search input is a soft rounded bar with a pale border and subdued placeholder text. It is wide enough to sit comfortably above the list without feeling like a sidebar control. The search field should stay visually secondary to the upload area but more prominent than the list rows. That balance helps the workflow: add cards first, then refine the set.

### Result rows

Each row combines a small thumbnail, a filename, a green completion label, and a subtle separator beneath. The row is visually low-friction: no strong background tint, no heavy card shadow, and no nested panel inside the panel. The green state should stay precise and narrow, used for the dot and the completed word only. The row feels successful because of the plain structure, not because the status color is loud.

### Footer line in the intro band

The opening band closes with a thin rule and a tiny line of contact or copyright text. It should feel almost printed. Keep it small and quiet, with the same dark ink used elsewhere. The footer line is useful because it gives the large heading a finish without introducing a second visual language.

## Responsive behavior

On narrower screens, the order should remain the same: utility bar, hero stack, upload well, search field, then result rows. The three-column intro notes should stack cleanly rather than compress into unreadable strips. The Georgia headline should stay centered and may wrap into two or three lines before it loses its calm. The upload well should remain large enough to feel like a target, and the list rows should keep their thumbnail-left, text-right structure. Avoid turning the whole page into a dense mobile dashboard. The desktop hierarchy is already simple enough to compress naturally.

## Practical implementation guidance

### Preserve

- Keep Georgia for the brand statement and Applesystem for every control, label, and row.
- Keep black as the primary action color.
- Keep green only for completed or confirmed states.
- Keep hairline separators and pale borders as the main structural devices.
- Keep the editorial top band distinct from the white workflow area.

### Avoid

- Avoid adding shadows to rows, inputs, or buttons.
- Avoid introducing a second accent color.
- Avoid mixing serif and sans inside the same small control.
- Avoid heavy iconography when text already communicates the action.
- Avoid making the green state decorative instead of functional.

### Recommended build order

1. Set the two-surface color system and the border color.
2. Build the typography roles for Georgia and Applesystem.
3. Add the top utility bar and the centered hero stack.
4. Build the dashed upload well and the search field.
5. Build the result rows with thumbnail, filename, and green status.
6. Add the editorial intro band and its closing rule.
7. Tune spacing so the column still feels airy at desktop width.

### Accessibility

- Keep the black button and pale borders at strong contrast against the light surfaces.
- Do not rely on green alone to signal completion; keep the word label visible.
- Ensure the upload area has a clear focus state and a clear keyboard path.
- Give the search field a meaningful label, not placeholder-only text.
- Provide useful alternative text for thumbnails and keep row actions named clearly.

## Scope note

This guide covers the warm landing band and the main card-scanning workspace on the homepage. It does not define alternate breakpoints, motion, loading or empty states, hover details, or export and OCR behavior beyond what is visible in the supplied views.
