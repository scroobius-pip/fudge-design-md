# How app.quiver.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.quiver.ai-design)

Last updated: 2026-08-04

## Captured pages

[![Explore wall with oversized headline and dense rounded tile grid](https://pin.fontofweb.com/9928?format=jpg)](https://design.withfudge.com/share/pin-9928)

[Explore wall with oversized headline and dense rounded tile grid](https://design.withfudge.com/share/pin-9928)

[![Wide onboarding split with blue gradient panel and form column](https://pin.fontofweb.com/9927?format=jpg)](https://design.withfudge.com/share/pin-9927)

[Wide onboarding split with blue gradient panel and form column](https://design.withfudge.com/share/pin-9927)

[![Centered onboarding card with chips, select field, and disabled action](https://pin.fontofweb.com/9926?format=jpg)](https://design.withfudge.com/share/pin-9926)

[Centered onboarding card with chips, select field, and disabled action](https://design.withfudge.com/share/pin-9926)

## Overview

QuiverAI is a restrained light interface that lets artwork and typography carry the personality. The Explore screen feels like a tidy studio wall: a narrow left rail, a pale top bar, an oversized headline, and a dense masonry of rounded cards that hold logos, poster-like illustrations, mascot drawings, diagrams, and interface samples. The onboarding screens keep the same calm palette, but shift the composition into two clearer modes: a centered card for focus and a wide split layout that balances the form with a large illustrated panel.

The tone is regular and composed rather than dramatic. Large text sits on open canvas with generous breathing room, while the controls stay compact and almost conversational. The system reads as a creative workspace first and a product shell second. Its confidence comes from spacing, frame quality, and a limited set of strong colors, not from heavy chrome or decorative effects.

## Colors

| token | value | use |
|---|---|---|
| `action` | `#2B7FFF` | Primary submissions, active accents, progress dots |
| `ink` | `#000000` | Strong text, icon marks, darkest utility detail |
| `ink-strong` | `#171717` | Main page headings and deep body text on light panels |
| `ink-soft` | `#262626` | Secondary dark labels and compact control text |
| `text` | `#404040` | Body copy, chips, and quieter interface labels |
| `muted` | `#737373` | Helper copy, placeholders, and low-emphasis metadata |
| `support` | `#A1A1A1` | Inactive hints and the lightest readable gray |
| `border` | `#E5E5E5` | Card edges, field outlines, rail dividers |
| `border-soft` | `#ECECEC` | Softer separators inside panels and cards |
| `surface-soft` | `#F3F3F3` | Filled controls, subtle containers, low-contrast backdrops |
| `surface` | `#F8F8F8` | Quiet lifted surfaces and pale interior framing |
| `canvas` | `#FCFCFC` | Main page ground and empty structural space |
| `panel` | `#FFFFFF` | Cards, form panels, tile frames |
| `accent-lime` | `#DBF58A` | Bright badge inside the onboarding illustration |

The palette is intentionally narrow. White and near-white surfaces hold most of the interface, black and near-black establish the text hierarchy, and gray carries structure without distraction. Blue is the only persistent interactive color and should remain the clearest signal for actions, selected states, and progress marks. The lime accent appears inside content art, where it supplies contrast without becoming a second interface color. The whole system stays light-first; the visual variety comes from artwork and illustration, not from shifting the shell into darker modes.

## Typography

QuiverAI uses **Geist** for nearly everything and **Geist Mono** only for the smallest utility-like marks. Geist handles headings, body copy, chips, controls, and labels with the same regular, neutral voice. Geist Mono appears where numbers, counts, or compact machine-flavored tags need separation from the main reading rhythm. Applesystem is present as a fallback/system face rather than a brand voice.

The supplied font credits support only the families listed here. Geist and Geist Mono are credited to Basementstudio, Andrés Briganti, Mateo Zaragoza, and Vercel in the supplied packet. No credit claim is supported for Applesystem, so it should stay a fallback reference only.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Geist | 2.75rem | 400 | 1.2 | -0.025em | Large Explore headline |
| `section-display` | Geist | 2.25rem | 400 | 1.11 | -0.025em | Onboarding title and compact page headings |
| `card-heading` | Geist | 1.875rem | 400 | 1.2 | -0.025em | Smaller display moments and emphasis inside cards |
| `body` | Geist | 1rem | 400 | 1.5 | 0em | Main explanatory copy |
| `body-medium` | Geist | 0.875rem | 400 | 1.43 | 0em | Buttons, chips, and control labels |
| `label` | Geist | 0.875rem | 400 | 1.5 | 0em | Form prompts and rail text |
| `micro-label` | Geist Mono | 0.75rem | 500 | 1.2 | 0.06em | Tiny counts, utility tags, and dense coded text |

The hierarchy depends on scale more than weight. Even the largest headings remain regular rather than bold, which makes the spacing and line breaks do most of the work. On Explore, the headline is wide and airy before the masonry begins. Onboarding keeps the same tone but compresses it into a more editorial structure. Small labels stay quiet, close to their controls, and legible without shouting.

## Layout

The Explore page is arranged as a left-to-right workspace. A narrow rail holds the product sections and account links; the main pane takes nearly all visual weight. Across the top, a slim header identifies the current section and then yields to the content below. The headline sits high on the canvas but still leaves a large band of empty space before the masonry starts. That opening matters because it gives the grid a gallery feeling instead of a feed feeling.

The masonry itself is dense but not cramped. Cards vary in height, yet the gaps stay consistent, so the page reads as a set of independent outputs rather than a strict table. White frames and soft shadows keep the grid legible without adding heavy outlines. The left rail and header stay visually quiet so the content wall can dominate. This is a layout that wants the artwork to do the talking while the shell stays almost invisible.

The onboarding surfaces use two related rhythms. The centered card version relies on a single narrow column: logo, title, helper line, chip groups, a dropdown, and a subdued primary action. The spacing is deliberate and symmetrical, so the card feels self-contained and calm. The wide version splits the page into a minimal text column and a large illustration panel. That panel uses a broad rounded frame, a blue gradient field, a dotted texture, and an inset white card that reads like a product sample pinned into place.

Spacing stays generous at the outer edges and tighter inside controls. The system uses short repeatable gaps between chips and fields, then opens up dramatically around the masonry and the onboarding illustrations. That contrast is one of the reasons the interface feels composed even when the screen is full of tiles and form rows. The overall structure should preserve those two speeds: compact inside components, roomy around the major compositions.

## Visual language

The strongest visual idea is a curated wall of creative outputs. Explore mixes many kinds of content, but each tile is treated the same way: white surface, rounded corners, thin boundary, and a clear centered image or mark. Because the artwork varies so much, the chrome must stay nearly invisible. That restraint is what makes the page feel like a gallery rather than a tool palette.

Illustrations and logos are the main expressive medium. Some tiles feel like poster art, some like brand marks, some like mascot stickers, and some like interface previews. The system does not force them into a single visual type beyond the card frame. That gives the grid life while preserving a predictable reading pattern. The frame is the constant; the content inside it provides the change.

The onboarding illustration panel uses a different texture: a cool blue gradient, a dotted field, an inset white card, and a bright lime badge. That panel has more depth than the Explore cards, but it still follows the same rounded-card logic. The gradient stays soft rather than glossy, so it supports the form instead of competing with it. Across both views, the language prefers crisp edges, light shadows, and measured contrast over heavy skeuomorphism.

## Components

### App shell

- **Anatomy:** Slim left rail, top section label, main content pane.
- **Surface:** Near-white shell with thin gray boundaries.
- **Typography:** Small regular-weight Geist text; muted rail labels remain quiet.
- **Shape:** Straight outer framing with rounded cards inside the shell.
- **Spacing:** Tight vertical rhythm in the rail; larger clearance between shell and content.
- **Composition:** The rail anchors navigation, but it should never overpower the grid or form.

### Masonry tile

- **Anatomy:** White card, centered artwork or logo, minimal edge treatment.
- **Surface:** Pure white or very pale background with a soft shadow and a 1px border feel.
- **Typography:** Most tiles contain little or no text; where text appears, it is small and secondary.
- **Shape:** Rounded rectangle, usually around the 12–16px range.
- **Spacing:** Artwork sits with comfortable internal padding so the card feels like a frame rather than a tight box.
- **Visible states:** The default state is the main state; no alternate state needs to be invented from the stills.

### Explore headline block

- **Anatomy:** Large statement, short supporting line, then the grid.
- **Surface:** The headline sits directly on the canvas without a separate panel.
- **Typography:** 44px regular-weight Geist with a soft gray tone.
- **Spacing:** A large band of empty space separates the headline from the masonry.
- **Composition:** The text acts as a calm lead-in; the grid does the selling.

### Filter chips and controls

- **Anatomy:** Small pill buttons, icon-plus-label pairs, and a compact dropdown.
- **Surface:** White fills, light borders, dark gray text.
- **Typography:** 12–14px Geist, regular weight.
- **Shape:** Small rounded pills and a low-profile field with a gentle radius.
- **Spacing:** Chips sit close together with short gaps and modest internal padding.
- **Visible states:** One chip may appear active through slightly stronger contrast, but the system remains subtle and does not depend on loud selected styling.

### Prompt composer

- **Anatomy:** Bottom-centered input bar with inline actions.
- **Surface:** White card over the canvas, lightly elevated from the page.
- **Typography:** Small helper text and compact control labels.
- **Shape:** Softly rounded corners with a restrained inset feel.
- **Spacing:** The bar is wide, shallow, and horizontally packed, with icons and text aligned in a single line.
- **Visible states:** The action area can appear subdued when the prompt is empty.

### Centered onboarding card

- **Anatomy:** Logo, title, helper line, chip groups, a select field, and a primary action with pager dots below.
- **Surface:** White panel with a light border and quiet elevation.
- **Typography:** 36px or 30px regular-weight Geist for the title; 14–16px for helper text and form labels.
- **Shape:** Rounded rectangle with generous internal padding.
- **Spacing:** Chips are centered and stacked in neat rows; the form field and button sit below with clear separation.
- **Composition:** The card is narrow, balanced, and self-contained so the focus stays on the content choices.
- **Visible states:** The primary action reads as inactive when the form is incomplete, using a pale gray fill and low-contrast text.

### Wide split onboarding panel

- **Anatomy:** Large gradient field, dotted texture, inset white sample card, circular accent badge.
- **Surface:** Blue gradient with a soft transition into deeper blue.
- **Typography:** Large product-name text inside the sample card, with secondary text beneath it.
- **Shape:** Large rounded outer panel and a smaller rounded card nested inside it.
- **Spacing:** The artwork occupies most of the panel, while the inset card creates the focal point.
- **Composition:** This component balances the left text column in the split onboarding layout.
- **Visible states:** The panel should stay crisp and flat enough to keep the form column visually dominant.

## Responsive behavior

The system should compress by stacking, not by changing character. On smaller widths, the rail can tighten and the masonry should reduce its column count before any brand changes appear. Headings may wrap, but they should stay regular-weight and roomy. The centered onboarding card should remain readable, with chip groups wrapping into additional rows rather than shrinking into illegibility. The wide split illustration panel should collapse into a vertical stack only after preserving the form’s readability. The main rule is simple: keep the white canvas, the muted chrome, the rounded cards, and the blue action color intact while the layout adapts.

## Practical implementation guidance

### Preserve

- Keep the interface light-first, with white or near-white shells and only a few strong color accents.
- Use regular-weight Geist for display text instead of leaning on bold faces.
- Keep the masonry as the hero surface on Explore; the cards should feel like framed outputs.
- Preserve thin gray boundaries and subtle elevation rather than heavy shadows.
- Keep the action blue stable across buttons, progress dots, and active signals.

### Avoid

- Avoid dark admin-style panels, saturated gradients inside the grid, or dense chrome around every tile.
- Avoid heavy typographic weight changes as the main hierarchy tool.
- Avoid square corners on the content cards; the rounded frame is part of the identity.
- Avoid overcomplicated icon treatment in chips and rail items.
- Avoid adding decorative surfaces that compete with the artwork.

### Recommended build order

1. Build the canvas, rail, and top bar.
2. Add the Geist type ramp and the regular-weight display headings.
3. Recreate the masonry card system and its spacing rhythm.
4. Add chips, dropdowns, and the bottom prompt composer.
5. Build the centered onboarding card and its inactive action state.
6. Add the split illustration panel and confirm the blue gradient, dotted texture, and inset card proportions.

### Accessibility

- Keep gray text on white surfaces dark enough to remain readable at small sizes.
- Give every icon-only control a clear label.
- Maintain a visible focus treatment on chips, buttons, and the dropdown.
- Make the primary action large enough to tap comfortably even when visually quiet.
- Ensure the masonry cards and onboarding chips remain understandable without relying on color alone.

## Scope note

This guide covers the desktop Explore wall plus the centered and split onboarding screens shown here. It does not define mobile layouts, motion, hover choreography, loading or error states, or any other product surface not present in the supplied pages.
