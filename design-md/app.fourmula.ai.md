# How app.fourmula.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.fourmula.ai-design)

Last updated: 2026-08-03

## Captured pages

[![Split create-asset workspace with dark sidebar and orange look action](https://pin.fontofweb.com/8677?format=jpg)](https://design.withfudge.com/share/pin-8677)

[Split create-asset workspace with dark sidebar and orange look action](https://design.withfudge.com/share/pin-8677)

[![Centered start hero over a dim portrait grid with a bright orange CTA](https://pin.fontofweb.com/8676?format=jpg)](https://design.withfudge.com/share/pin-8676)

[Centered start hero over a dim portrait grid with a bright orange CTA](https://design.withfudge.com/share/pin-8676)

## Overview

Formula AI uses a dark, controlled studio language rather than a bright marketing system. The page surface is almost entirely black and charcoal, with white type, muted gray support text, and one hot orange action color that carries the whole interface. The start screen centers a short promise over a dense grid of figure tiles, while the create-asset workspace turns the same visual language into a split production layout with a left staging column and a larger right adjustment column.

The system feels compact and task-driven. Panels are padded, but not loose. Corners are soft, but not decorative. The orange controls do the work of calling attention to the next step, while the rest of the chrome stays nearly invisible. That balance is the key trait to preserve: a tool that looks serious, dark, and efficient, but still gives the hero enough scale to feel like a launch surface.

## Colors

Formula AI is built on a very small set of exact interface colors. Black and near-black do most of the framing. White carries the headline and body text. The only saturated note is the orange action family, which appears in primary buttons, active outlines, small badges, and emphasis labels. The result is a system that reads as monochrome until a control needs emphasis.

The deepest black, `#000000`, works as the page canvas. `#020108` acts like a frame color and is useful for edge treatment, separators, and the darkest shell boundaries. `#111111` is the main panel color, while `#1A1A1A` is the raised panel tone that lifts cards, placeholders, and secondary surfaces off the canvas without introducing a new hue. `#FFFFFF` is the dominant text color, and `#686A6E` is the muted support tone for labels, helper copy, and inactive states.

The orange pair carries hierarchy. `#FF6B02` is the brighter action color and should be the default for buttons and active highlights. `#F94A00` is the deeper companion tone, useful when the interface needs a hotter edge, a stronger fill, or a denser accent against black. The palette should stay restrained; the design depends more on tonal separation and card layering than on introducing additional colors.

| token | value | role |
|---|---|---|
| `canvas` | `#000000` | Full-page background and the deepest negative space |
| `shell` | `#020108` | Outer frame, edge tone, and near-black separators |
| `surface` | `#111111` | Primary panels, cards, and tool regions |
| `surface-raised` | `#1A1A1A` | Elevated placeholders and secondary blocks |
| `ink` | `#FFFFFF` | Main headings, labels, and active copy |
| `muted-ink` | `#686A6E` | Secondary text, subdued hints, and unavailable notes |
| `action` | `#FF6B02` | Primary buttons and active highlights |
| `action-strong` | `#F94A00` | Denser orange emphasis and deeper button fill |

## Typography

SF Pro is the only visible family in the supplied pages, and it carries both the launch-screen headline and the product UI. The hierarchy relies on a small size ladder rather than multiple families: 52px for the hero, 22px for section titles, then 16px, 14px, and 12px for body, UI, and meta text. Medium weight defines the hero and section headings; regular weight handles support copy and controls. Licensing is not stated in the packet; confirm reuse before shipping outside this context.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Sf Pro | 3.25rem | 500 | 1 | -0.04em | Start-screen statement and the largest launch copy |
| `section-heading` | Sf Pro | 1.375rem | 500 | 1.56 | 0em | Panel headers such as the workspace column titles |
| `body` | Sf Pro | 1rem | 400 | 1.5 | 0em | Supporting paragraphs and standard explanatory copy |
| `body-strong` | Sf Pro | 1rem | 500 | 1.5 | 0em | Button labels, highlighted labels, and selected text |
| `ui` | Sf Pro | 0.875rem | 400 | 1.43 | 0em | Toolbar items, helper labels, and compact controls |
| `meta` | Sf Pro | 0.75rem | 400 | 1.33 | 0em | Tiny hints, “coming soon” notes, and secondary captions |

The hero headline is the only place where the type becomes large and tightly set. Everywhere else the system keeps a calmer rhythm: modest titles, normal body leading, and low-contrast helper text. That keeps the interface from feeling typographic-heavy once the user enters the workspace.

## Layout

The page layout is driven by a thick dark frame, rounded outer shells, and two internal scales of spacing. At the outer level, the interface sits inside a black border that reads like a console housing. Inside that frame, the surfaces are arranged with 24px and 40px breathing room, while smaller controls use 12px, 16px, and 24px spacing to keep the density compact. The overall impression is controlled and modular rather than airy.

The start page uses a centered composition. A top bar runs across the page, then the hero statement sits in the middle of a dark tile field. The background grid is made of many rounded portrait cards, each with soft edges and a dim, low-contrast image treatment. The headline sits over that field without a heavy banner, and the orange button lands directly beneath the copy as the one obvious next step.

The create-asset workspace uses a split layout. A narrow left column holds “Your visuals” and a large empty staging card with the “Add your look” action centered inside it. The broader right column begins with “Adjust look” and then stacks bands of selection rows: a face strip, a row of apparel thumbnails, and a lower background section. The sections are separated by subtle horizontal rules rather than bright panel borders. This keeps the interface readable while still feeling like one continuous production surface.

The panels are all built from the same rounded geometry. Large sections use 16px corners, which is enough to soften the hard black environment without making the interface playful. Smaller controls and pills use the tighter 7px control radius. That mix creates a useful contrast: panels feel sturdy, while actions feel quick.

## Visual language

Formula AI’s visual language is dense, dark, and economical. The interface prefers matte black surfaces, soft charcoal tiles, and thin orange highlights instead of visible ornament. The imagery is intentionally subdued in the background and more explicit in the selector rows, where head-and-body thumbnails are framed as small tiles. The start screen uses a similar idea at larger scale: a grid of figure images forms a textured backdrop, but the center message still wins because the contrast stays low and the copy stays bright.

The orange accent is the system’s strongest signal. It marks the main button fill, active selection edges, small badges, and the “signed in” or “coming soon” style notes. That consistent use gives the product a clear visual rhythm. A viewer can scan the page and immediately see what is actionable, what is inactive, and what is part of the working set.

Depth is created through layering rather than shadow-heavy cards. Panels sit on the black canvas with slight tonal differences, while inactive tiles sink into the background by losing contrast. The overall mood is studio equipment more than consumer app chrome: quiet, technical, and ready for work.

## Components

### Top bar

The top bar is a narrow dark strip with rounded ends and minimal content. It carries the breadcrumb on the start screen and action buttons on both pages. Its job is to stay visually light while still framing the page. The bar uses the darkest shell tone, white or orange text, and compact pill controls at the far right. The buttons are small, right-aligned, and separated from the rest of the page so they read as utility actions rather than primary content.

### Hero stage

The hero stage is built from a centered headline, a short support line, and one orange call to action placed directly below the copy. The headline uses the largest SF Pro size in the system and sits on top of a dim grid of image tiles. The composition is simple: the background adds texture, but the text keeps the center of gravity. The button is the same orange used elsewhere, so the hero feels like the first step into the rest of the product rather than a separate campaign page.

### Visual staging card

The left column in the workspace contains the empty “Your visuals” area. It is a large, softly rounded card with a centered button and a quiet placeholder label above it. Lower in the same column, the page shows dimmer areas that read as unfinished or inactive. That contrast between the active staging zone and the subdued lower blocks is important. It makes the upload action feel like the intended entry point without needing extra explanation.

### Adjustment rail

The right column is organized as a stack of horizontal adjustment bands. The face row uses a thin label with a small orange availability note, then a strip of figure thumbnails. Below that, the clothing row shows selectable cards with orange borders on the active items and darker, lower-contrast treatment on the inactive items. Tiny corner markers reinforce state. The background section follows the same pattern: label first, content below, subdued when unavailable. This arrangement makes the workspace feel structured and keeps the user’s attention moving from top to bottom.

### Primary action

The primary button is a compact orange pill with near-black text. It appears in the hero, in the top bar, and inside the workspace. The orange fill is the most visually assertive surface in the whole system, so it should remain reserved for the primary next step. The button shape is soft, but not oversized; it reads as a control rather than a badge. When the interface needs to imply importance, this is the component to use.

### Secondary action and unavailable state

Secondary actions can invert the primary treatment by using a dark fill, orange text, and a thin orange border or edge. That works well for utility actions such as canceling or signing in. Unavailable states are handled by lowering contrast rather than by adding decorative effects. Dimmed cards, quieter labels, and small orange notes are enough to show hierarchy without making the interface noisy.

## Responsive behavior

On smaller screens, the visual order should stay the same even if the columns stack. The top bar should remain first, the hero statement should stay above the action, and the workspace should keep the staging area before the adjustment bands. The grid of figure tiles should collapse without losing the central headline. The orange button should remain prominent, but the surrounding spacing should compress from the 24px and 40px desktop rhythm into tighter 16px and 12px stacking so the interface still feels deliberate. The large 52px headline should step down before it wraps into an awkward three-line block.

## Practical implementation guidance

### Preserve

- Keep the interface dark-first, with black and charcoal doing the structural work.
- Use orange as the only strong accent family across buttons, states, and notes.
- Preserve the SF Pro hierarchy and the strong 52px hero size for the start screen.
- Keep panels at 16px corners and controls at the smaller 7px corner treatment.
- Use tonal separation and image dimming instead of decorative shadows.

### Avoid

- Avoid adding new accent colors, soft gradients, or light surfaces that dilute the studio mood.
- Avoid making every block a card; the layout already gets enough structure from the major panels.
- Avoid oversized pill buttons that compete with the headline.
- Avoid introducing extra type families or a broader font scale.
- Avoid filling the workspace with visible borders when subtle separation is enough.

### Recommended build order

1. Build the dark shell, top bar, and panel geometry.
2. Add the SF Pro type scale and the orange action tokens.
3. Recreate the hero stage with centered copy and the background tile grid.
4. Build the split workspace with the left staging card and the right adjustment rail.
5. Add active, inactive, and unavailable visual states for cards and labels.
6. Tune spacing, corner treatment, and the contrast ladder between black, charcoal, and orange.

### Accessibility

- Keep white copy bright enough against the black and charcoal surfaces.
- Make sure the orange button text remains readable against both orange fills.
- Use a visible focus indicator that is not only a color shift in the orange family.
- Give every figure tile and product tile a useful text label.
- Preserve enough line height in the body and meta text so the compact UI stays legible at smaller widths.

## Scope note

This guide covers the desktop start screen and create-asset workspace for app.fourmula.ai. It does not include mobile breakpoints, motion rules, hover and press transitions, or the full set of unavailable and error states. Rounding values are expressed with the 4px unit used in the packet, with 7px and 16px corners for controls and panels.
