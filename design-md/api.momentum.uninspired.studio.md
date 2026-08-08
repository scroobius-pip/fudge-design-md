# How api.momentum.uninspired.studio is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/api.momentum.uninspired.studio-design)

Last updated: 2026-08-08

## Captured pages

[![Compact preset cards with purple outlines and rounded metric chips across the top strip](https://pin.fontofweb.com/3662?format=jpg)](https://design.withfudge.com/share/pin-3662)

[Compact preset cards with purple outlines and rounded metric chips across the top strip](https://design.withfudge.com/share/pin-3662)

[![Wide dark editor with a white central stage and side control panels](https://pin.fontofweb.com/3661?format=jpg)](https://design.withfudge.com/share/pin-3661)

[Wide dark editor with a white central stage and side control panels](https://design.withfudge.com/share/pin-3661)

## Overview

Momentum presents itself as a compact sequencing workspace: a dark shell wraps a bright white stage, and the whole layout is organized like a tool for arranging and tuning visual sequences. The page does not rely on decorative imagery or soft marketing surfaces. Instead, it uses a controlled editor grammar made from rails, cards, chips, tabs, sliders, and a central composition field. That gives the interface a precise, technical character while still feeling polished and intentional.

The strongest contrast is structural. Dark side panels hold the controls and navigation, while the center opens into a clean white working area where the sequence is displayed. A narrow top strip of preset cards adds another layer of structure, with purple labels and outlined active states that make the current mode easy to identify. The overall system is calm, rigid, and highly legible, with only a few saturated accents used for selection, action, and deletion.

## Colors

| token | value | role | use |
|---|---|---|---|
| `canvas` | `#FFFFFF` | bright stage canvas | The main work area, where the sequence sits against a clean white field |
| `surface-deep` | `#0B0B0B` | outer shell | The page backdrop, rails, and dark frame around the editor |
| `surface-1` | `#131313` | raised control surface | Secondary panels, chips, and inactive control areas |
| `surface-2` | `#1B1B1B` | card surface | Preset cards and grouped controls that need to sit above the shell |
| `surface-3` | `#232323` | lifted panel surface | Slightly brighter dark areas for section separation and depth |
| `border` | `#2B2B2B` | hairline border | Thin outlines around cards, fields, and segmented controls |
| `border-strong` | `#8E44D6` | active border | The highlighted outline on the selected preset card and other active states |
| `ink` | `#F4F1EC` | main text on dark | Primary labels, headings, and control text inside the dark chrome |
| `muted-ink` | `#A8A4A0` | secondary text | Inactive labels, helper text, and less important control captions |
| `action` | `#8A49E3` | primary action | The main purple action color used for play, add, and emphasis states |
| `action-soft` | `#5F2A9A` | subdued action | Quiet purple text and secondary accent use, especially in tight labels |
| `warning` | `#C58A24` | active tool cue | The amber/orange highlight for the selected global tool and status emphasis |
| `danger` | `#8E3A39` | destructive action | The delete button and other irreversible actions |

The palette is intentionally narrow. Dark grays carry the bulk of the interface so that the white stage can feel emphatic rather than routine. Purple is the main brand-like accent: it marks the active preset border, the primary action, and small labels that need to feel alive without competing with the content. Amber is reserved for the active navigation tile, which makes the current mode immediately readable. Red is used only for destructive work. Keep that separation strict so that each accent retains a clear job.

The white stage should stay pure and un-tinted. It is the only place where the sequence gets visual relief from the dark shell, and that contrast is one of the system’s defining traits. Hairline borders remain dark and restrained, never glossy or beveled.

## Typography

Momentum uses two kinds of voice: a serif voice for section-level statements and a clean sans voice for tools, controls, and numeric labels. The serif family gives the workspace a slightly editorial edge, while the sans family keeps the editor functionally clear. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Instrument Serif | 2.5rem | 400 | 1 | -0.02em | Large page or screen titles when the interface needs a focal line |
| `section-display` | Instrument Serif | 2rem | 400 | 1.05 | -0.015em | Panel headings such as the main timing section and mode titles |
| `panel-title` | Inter 18 Pt | 1.25rem | 500 | 1.2 | 0em | Small screen titles, tab names, and compact labels that need stronger hierarchy |
| `body` | Inter | 1rem | 400 | 1.5 | 0em | Explanatory copy, settings descriptions, and readable interface prose |
| `label` | Inter | 0.75rem | 500 | 1.2 | 0.02em | Control names, chip text, button labels, and compact UI metadata |
| `microcopy` | Inter | 0.75rem | 400 | 1.3 | 0em | Helper text, hints, and low-priority panel notes |

The hierarchy depends on contrast between family and scale rather than on a wide size range. Serif headings need enough breathing room to feel deliberate, but they should remain compact because the workspace is dense and functional. Sans labels are small, firm, and slightly tightened so that sliders, tabs, buttons, and value fields stay visually consistent. Numeric readouts should use the same sans family as nearby labels so the controls feel like one system.

Keep the typography disciplined: do not add a second decorative family, and do not introduce oversized display text inside the control panels. The interface works because the serif is rare and the sans is steady.

## Layout

The layout is built around a three-zone desktop shell. A narrow rail sits at the left edge, the central stage occupies the majority of the width, and the inspector occupies the right edge. The shell itself stays dark so these zones read as tools rather than content sections. Inside that shell, the central white stage is the main focal area; it is the only large bright surface and therefore carries the sequence with a strong sense of focus.

The top strip of preset cards is a separate band above the stage. Those cards are compact, dark, and highly regular, which makes the row feel like a mode selector or presets palette. Each card contains a small label at the top and two lines of metric chips beneath it. The selected card is the only one with a bright purple outline, so the active choice reads quickly without needing extra decoration.

The left rail is stacked vertically and keeps icons and labels close together. It behaves like a stable control spine: narrow, dark, and consistent from top to bottom. The active tile uses warm amber, which stands apart from the cooler purple used elsewhere. That separation prevents the navigation and the action states from blurring into each other.

The right inspector is the most information-dense area. It groups tabs, section headings, dropdowns, sliders, segmented controls, and value fields. Its structure is simple and repetitive, which is important because the controls themselves already demand attention. The central stage gets the most visual relief, the inspector gets the most utility, and the rail gives the whole interface a fixed anchor.

At the bottom, the interface uses a transport-like bar with reset and play on the left and a stronger action cluster on the right. That placement gives the destructive action a separate zone, away from the calmer playback controls. The result is a clear operational hierarchy: navigate, configure, preview, then commit or discard.

## Visual language

Momentum’s visual language is built from restraint, contrast, and a small set of strong cues. The dark surfaces are nearly black, but they are not flat black everywhere; some panels lift just enough to separate card surfaces from the shell. That layered darkness gives the interface depth without adding shadows that feel glossy or decorative.

Purple is the language of selection and action. It appears in the active preset border, the main add/play button, and small text accents. Amber is the language of the active mode in the left rail. Red is reserved for deletion and should remain visually heavier than the other accents. Because each accent has a distinct job, the page can stay simple and still remain readable.

Rounded corners are present but controlled. The preset cards, chips, buttons, and fields all use softened corners, yet the geometry remains close to rectangular. That keeps the editor feeling engineered rather than playful. The stage itself should stay the softest and cleanest shape in the layout, with a larger rounded frame that sets it apart from the darker utility surfaces around it.

The composition also depends on stillness. There is no sense of clutter or layering of competing surfaces. Each region has one main task, and the spacing around that task is generous enough to keep the interface calm. That makes the white stage feel even brighter and the active purple state feel even more deliberate.

## Components

### Preset card

- **Anatomy:** Small title chip, two rows of compact metric chips, and a subtle icon button in the corner.
- **Surface:** Dark card base with a slightly raised tone over the shell.
- **Typography:** `label` for the title and `microcopy` for the metric values.
- **Shape:** Soft but restrained corners, closer to a utility card than a lounge card.
- **Spacing:** Tight internal padding, with the title separated from the metrics by a short vertical gap.
- **Composition:** Title first, then the metric rows, with the corner icon kept small and quiet.
- **Visible states:** The active card gets a purple outline that is stronger than the standard border; inactive cards keep the low-contrast border.

### Left rail

- **Anatomy:** Vertical icon stack with short labels beneath or beside the icons.
- **Surface:** Deep black rail that merges with the outer shell.
- **Typography:** `microcopy` and small `label` text.
- **Shape:** Compact stacked tiles with rounded corners.
- **Spacing:** Very tight vertical rhythm so the rail stays narrow and efficient.
- **Composition:** One active tile at a time should remain visually louder than the rest.
- **Visible states:** The selected tile uses the amber warning color, while the others remain muted.

### Inspector panel

- **Anatomy:** Tabs at the top, then headings, sliders, dropdowns, segmented controls, and numeric fields.
- **Surface:** Dark utility panel with clear section breaks.
- **Typography:** `panel-title` for larger headings, `body` for descriptions, and `label` for control text.
- **Shape:** Rounded outer frame with smaller field and control radii inside.
- **Spacing:** Each control group needs enough vertical air to keep the panel legible.
- **Composition:** Tab, heading, control, value. Repeat that order throughout the panel.
- **Visible states:** Active tabs should use the brighter label treatment and an underline or equivalent cue; inactive tabs should stay muted.

### Stage canvas

- **Anatomy:** Large white field holding the sequence artwork or arrangement.
- **Surface:** Pure white canvas set against the dark shell.
- **Typography:** Any labels on the stage should remain secondary to the content.
- **Shape:** Larger rounded frame than the small cards and chips.
- **Spacing:** Wide padding around the staged content so the center feels open.
- **Composition:** Keep the sequence centered and avoid adding busy controls inside the field.
- **Visible states:** The stage should remain visually stable so the changing sequence becomes the focus.

### Transport and action bar

- **Anatomy:** Reset and play on the left, primary action near the center or right, destructive action grouped separately.
- **Surface:** Dark footer-like control strip.
- **Typography:** `label` for all actions.
- **Shape:** Buttons should share the same small rounded treatment so the bar feels consistent.
- **Spacing:** Place enough gap between playback and deletion so the destructive action is not mistaken for a routine control.
- **Composition:** Calmer controls first, stronger actions last.
- **Visible states:** Primary actions use purple; destructive actions use red; quiet controls stay gray or muted.

### Control chips and values

- **Anatomy:** Small chips for sizes, counts, and values.
- **Surface:** Slightly raised dark surfaces.
- **Typography:** `microcopy` or `label` depending on importance.
- **Shape:** Rounded pills with compact horizontal padding.
- **Spacing:** Keep them close enough to read as a group, but not so close that the values blur together.
- **Composition:** Use chips as a visual ledger for settings rather than as decorative badges.
- **Visible states:** Active or focused chips should receive a stronger border or brighter fill rather than a different shape.

## Responsive behavior

The desktop composition is the clearest expression of this system, so any smaller-screen version should keep the same hierarchy: stage first, controls second, nav third, and destructive actions last. The white stage must remain the main focal point even when the layout compresses. If the rail collapses, its active state still needs a clear amber cue. If the inspector stacks below the stage, keep the headings and controls in the same order so the workflow remains recognizable.

Text should not scale down by more than the surrounding density requires. The serif headings can shrink, but they should not lose the editorial contrast that separates them from the sans control labels. Chips and fields need enough height for easy tapping, and the bottom action bar should continue to distinguish between routine preview actions and destructive actions.

If the interface gains modal panels or drawers on smaller screens, those surfaces should still reuse the same dark grays, purple accent, and rounded card language rather than introducing a separate mobile style.

## Practical implementation guidance

### Preserve

- Keep the white stage as the clearest surface in the interface.
- Use the serif family only for headings and larger screen titles.
- Keep purple as the main action and selection color.
- Retain the amber active rail cue and the red destructive action.
- Preserve the compact, utility-first rhythm of chips, tabs, and fields.
- Keep borders thin and dark so the layout feels crisp rather than heavy.

### Avoid

- Avoid glossy gradients, glass effects, and soft drop shadows that would weaken the editor feel.
- Avoid introducing extra accent colors that compete with purple, amber, or red.
- Avoid making every panel equally bright; the stage should remain the brightest region.
- Avoid oversized radii on utility controls; the system wants restraint, not softness.
- Avoid mixing serif and sans in the same label cluster unless the hierarchy clearly needs it.
- Avoid crowding the inspector with dense helper text.

### Recommended build order

1. Build the dark shell and the three-zone desktop frame.
2. Add the central white stage and confirm its contrast against the shell.
3. Create the left rail and lock in the amber active state.
4. Add the right inspector with tabs, headings, sliders, dropdowns, and value fields.
5. Recreate the top preset cards and their active purple outline.
6. Add the bottom transport and action bar with separate destructive emphasis.
7. Tune spacing, rounded corners, and label sizes so every control cluster feels like part of one system.

### Accessibility

- Keep text contrast high on every dark surface and verify the white stage edge remains clear against the shell.
- Give every interactive control a visible focus state that is stronger than the static border.
- Use color as one cue, not the only cue, for active preset cards, rail selection, and deletion.
- Keep button labels short and legible at small sizes.
- Maintain enough target size for sliders, segmented controls, and rail tiles.
- Make destructive actions visually separate from playback or reset actions so the wrong choice is less likely.

## Scope note

This guide covers the desktop sequence editor workspace shown here: the top preset strip, left navigation rail, central white stage, right inspector, and bottom action bar. Mobile layouts, motion timing, hover detail, and keyboard interaction states are not included. Measurements are practical adaptation targets.
