# How suno.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/suno.com-design)

Last updated: 2026-08-10

## Captured pages

[![Pricing page with three dark cards, pink accent border on Pro Plan, and white pill buttons against near-black background](https://pin.fontofweb.com/4866?format=jpg)](https://design.withfudge.com/share/pin-4866)

[Pricing page with three dark cards, pink accent border on Pro Plan, and white pill buttons against near-black background](https://design.withfudge.com/share/pin-4866)

[![Hero section with warm gradient glow, large display headline, and app store rating cards with white download buttons](https://pin.fontofweb.com/4865?format=jpg)](https://design.withfudge.com/share/pin-4865)

[Hero section with warm gradient glow, large display headline, and app store rating cards with white download buttons](https://design.withfudge.com/share/pin-4865)

[![Pricing page showing monthly/yearly toggle with checkmark icons and feature list hierarchy in dark theme](https://pin.fontofweb.com/4864?format=jpg)](https://design.withfudge.com/share/pin-4864)

[Pricing page showing monthly/yearly toggle with checkmark icons and feature list hierarchy in dark theme](https://design.withfudge.com/share/pin-4864)

[![Feature card with audio stem visualization using blue, orange, and green waveform blocks on dark surface](https://pin.fontofweb.com/4863?format=jpg)](https://design.withfudge.com/share/pin-4863)

[Feature card with audio stem visualization using blue, orange, and green waveform blocks on dark surface](https://design.withfudge.com/share/pin-4863)

## Overview

Suno's design system is built for a music creation platform that communicates creative possibility through restraint and contrast. The interface sits on a near-black canvas, letting generative imagery and warm atmospheric gradients become the emotional center of each section. Typography splits duties between an elegant, high-contrast editorial serif for headlines and a precise neo-grotesque sans-serif for everything functional. The result feels like a professional audio tool that has been given the visual confidence of a culture magazine—dark, spacious, and punctuated by moments of vivid pink and clean white.

The system prioritizes readability in low-light conditions while using color and scale to guide users toward conversion points. Pricing, app downloads, and feature explanations share a consistent card-based architecture that floats above the canvas with subtle borders rather than heavy shadows. Every interactive element is immediately identifiable: white pills for primary actions, dark pills for secondary choices, and pink badges for social proof and urgency.

## Colors

The palette is intentionally narrow, deriving its energy from a single warm accent against a deep neutral ground. This constraint keeps the interface feeling focused and premium while allowing marketing imagery to supply chromatic variety.

| token | value | use |
|---|---|---|
| canvas | #0a0a0a | Page background, deepest layer behind all content |
| surface | #171717 | Card backgrounds, elevated panels, pricing tiers |
| surface-elevated | #1f1f1f | Featured cards, hover states, active selections |
| ink | #ffffff | Primary text, headlines, primary button fill |
| ink-muted | #a3a3a3 | Secondary descriptions, feature list text, metadata |
| ink-dim | #737373 | Tertiary labels, disabled hints, fine print |
| action | #ec4899 | Featured borders, badges, "MOST POPULAR" labels, accent strokes |
| action-subtle | #be185d | Darker pink for pressed states or subtle action backgrounds |
| success | #22c55e | Checkmark icons, positive indicators, included features |
| border | #262626 | Default card borders, dividers, structural lines |
| border-subtle | #404040 | Input borders, inactive toggles, hairline separators |

The color logic follows a clear hierarchy: canvas recedes, surface elevates, and ink commands attention. The action pink is reserved for moments of conversion emphasis—never used as a background wash, only as a signal. Success green appears exclusively in functional contexts like feature verification. Warm gradients in hero sections are photographic or generated assets, not CSS gradients, and should be treated as imagery rather than interface color.

## Typography

Two families from Pangram Pangram Foundry, designed by Mathieu Desjardins, define the typographic voice. Pp Editorial New supplies the editorial personality; Pp Neue Montreal handles utilitarian clarity. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Pp Editorial New | 5rem | 300 | 1 | -0.02em | Homepage hero headlines, major value propositions |
| section-display | Pp Editorial New | 2.5rem | 300 | 1.1 | -0.01em | Section titles, pricing plan names, card headers |
| body-large | Pp Neue Montreal | 1.25rem | 400 | 1.5 | 0 | Lead paragraphs, app store descriptions |
| body | Pp Neue Montreal | 1rem | 400 | 1.5 | 0 | Feature lists, body copy, general content |
| body-medium | Pp Neue Montreal | 1rem | 500 | 1.5 | 0 | Button labels, emphasized body text |
| label | Pp Neue Montreal | 0.875rem | 500 | 1.25 | 0.02em | Badges, tags, category labels |
| caption | Pp Neue Montreal | 0.75rem | 500 | 1.25 | 0.01em | Fine print, review counts, legal hints |

The editorial serif is always light weight, never heavier, preserving its airy elegance even at display scale. The sans-serif spans 400 and 500 weights only—no bold is used in the visible system, maintaining a calm, confident tone. Negative tracking on display type tightens word shapes without collapsing them. Body sizes use neutral tracking and generous leading for comfortable reading in dark mode.

## Layout

The layout system is centered and spacious, with content constrained to a readable maximum width and generous vertical breathing room between sections.

The page uses a single centered column for hero messaging, expanding to a three-column grid for pricing cards. Cards are equal-width with consistent internal padding, separated by gutters that match the card padding value. The overall rhythm is: full-bleed atmospheric hero, then contained structured content, then another full-bleed transition if needed.

Section spacing uses 4rem between major content blocks, with 2rem internal padding for cards. The pricing grid shows a clear hierarchy through elevation: the featured Pro Plan card receives a pink border and slightly elevated surface color, while flanking cards sit at the default surface level. Toggle controls for monthly/yearly billing sit centered above the grid, reinforcing the decision point before users reach the cards.

App store rating cards in the hero use a two-column layout with identical internal structure: platform icon, category label, star rating with numeric score, review count, and download button. These cards float above the gradient background with subtle borders rather than solid backgrounds, letting the atmospheric color show through.

## Visual language

The visual identity balances technical credibility with creative warmth. Dark surfaces dominate, but they never feel heavy because of the generous whitespace, light typography weights, and strategic use of atmospheric gradient imagery.

Gradients appear as full-bleed background photography—warm amber, rose, and gold tones that evoke stage lighting or sunset hours. These are not interface elements but environmental textures that position the product in a world of music and performance. Against these, white text and clean cards maintain perfect legibility.

Borders are thin and dark, functioning as subtle separators rather than outlines. The only vivid border is the pink stroke on the featured pricing tier, which draws the eye without shouting. Rounded corners are consistent: cards use 1rem, buttons are fully pill-shaped, and small badges use tighter rounding. There are no sharp corners in the component set.

Iconography is minimal and functional: checkmarks for included features, crosses for excluded ones, platform logos for app stores. These icons inherit color from their context—success green for checks, muted ink for crosses, white for platform marks.

## Components

### Pricing Card

The pricing card is the system's most complex visible component, appearing in three variants.

**Anatomy:** Card container, plan name, description, price block with currency and interval, primary action button, and feature list with icon-leading items.

**Surface and text color:** Default cards use surface background (#171717) with border (#262626). The featured variant uses surface-elevated (#1f1f1f) with action pink border (#ec4899). All text starts with ink (#ffffff) for plan names and prices, shifting to ink-muted (#a3a3a3) for descriptions and feature lists.

**Typography:** Plan names use section-display token. Prices use body-large with the currency symbol and interval in caption. Feature items use body token.

**Shape and border:** 1rem radius, 1px solid border. Featured variant keeps identical geometry, only changing border color.

**Spacing:** 2rem internal padding. Price block sits with 1.5rem vertical space from description and 2rem above the button. Feature list begins after 2rem below the button, with 0.75rem between items.

**Composition:** Three cards in a row, equal width, with the featured card centered. On the featured card, a "MOST POPULAR" badge floats in the top-right corner, using action background and label typography.

**Variants:** Free Plan uses a dark secondary button (surface-elevated background, ink text). Pro Plan uses a white primary button (ink background, canvas text). Premier Plan uses a dark secondary button matching Free Plan.

### App Store Rating Card

**Anatomy:** Card container, platform icon and category label, numeric rating with star icon, review count, and download button.

**Surface and text color:** Transparent or near-transparent background with subtle border, allowing the hero gradient to show through. All text is ink (#ffffff).

**Typography:** Category label uses body-medium. Rating number uses section-display scale. Review count uses caption.

**Shape and border:** 1rem radius, 1px border-subtle outline.

**Spacing:** 1.5rem internal padding. Rating number has 1rem above and 0.25rem below. Download button sits at the bottom with standard button padding.

**Composition:** Two cards side by side, equal width, with identical internal structure. Platform icons (Apple, Google Play) lead the category label.

### Feature List Item

**Anatomy:** Icon indicator and text label.

**Surface and text color:** No independent background. Text uses ink-muted. Included features use success (#22c55e) checkmark. Excluded features use ink-dim cross mark.

**Typography:** Body token.

**Spacing:** 0.75rem between items, icon sized to match text line height with 0.5rem right margin.

### Toggle Control

**Anatomy:** Radio-style selector with two options and a save indicator.

**Surface and text color:** Selected option shows checkmark icon in ink. Unselected option shows empty circle in border-subtle. "SAVE 20%" label uses action background with label typography.

**Typography:** Body-medium for option text. Label token for the save badge.

**Shape and border:** Circular indicators, 1rem size. Badge uses standard badge rounding.

**Composition:** Horizontally arranged, centered above pricing grid, with 1rem gap between options.

### Primary Button

**Anatomy:** Pill-shaped container with centered text and optional leading icon.

**Surface and text color:** Ink (#ffffff) background, canvas (#0a0a0a) text.

**Typography:** Body-medium.

**Shape and border:** Full pill (9999px radius). No border.

**Spacing:** 1rem vertical padding, 2rem horizontal minimum.

### Secondary Button

**Anatomy:** Pill-shaped container with centered text.

**Surface and text color:** Surface-elevated (#1f1f1f) background, ink (#ffffff) text.

**Typography:** Body-medium.

**Shape and border:** Full pill. No border.

## Responsive behavior

The three-column pricing grid should collapse to a single stacked column on narrow viewports, with the featured Pro Plan card remaining visually distinct through its pink border. Card padding can reduce from 2rem to 1.5rem to preserve proportional spacing.

Hero display type should scale down to section-display size on smaller screens to prevent excessive line breaks. The two app store rating cards should stack vertically when horizontal space is constrained.

Toggle controls should remain horizontally arranged but may wrap if localized text expands. The save badge should stay adjacent to its associated option.

Atmospheric gradient backgrounds should remain full-bleed and centered, with content maintaining safe margins. No horizontal scrolling should occur at any viewport width.

## Practical implementation guidance

### Preserve
- The dark canvas as the default page background; never introduce a light mode without rethinking the entire color hierarchy.
- The editorial serif for headlines only; using it for body copy would degrade readability and dilute its impact.
- The pink accent as a scarce resource; overuse will eliminate its power to signal importance.
- Pill-shaped buttons as the exclusive button style; sharp-cornered buttons would break the system's calm rhythm.
- Generous internal card padding; the spaciousness is part of the premium feel.

### Avoid
- Adding drop shadows to cards; the system uses borders and surface elevation instead.
- Using pure black (#000000) for backgrounds; the slightly lifted canvas (#0a0a0a) prevents the harshness of absolute black.
- Introducing additional accent colors beyond pink and success green; the palette's restraint is intentional.
- Making the editorial serif heavier than 300; the light weight is essential to its character.
- Using gradients as CSS backgrounds for UI elements; reserve them for photographic or generated imagery.

### Recommended Build Order
1. Establish the canvas, surface, and ink color tokens with dark mode as the only mode.
2. Implement the typography scale with both families loaded, verifying that Editorial New Light renders crisply at display sizes.
3. Build the pricing card component with all three variants, ensuring the featured border color is exact.
4. Create the pill button system with primary and secondary states.
5. Add the toggle control and badge components.
6. Implement the hero section with atmospheric background handling and app store cards.
7. Compose the pricing page layout with grid behavior and responsive stacking.

### Accessibility
- Maintain a minimum contrast ratio of 4.5:1 for all body text; the ink-on-canvas pairing exceeds 15:1.
- Ensure the pink action color on white or dark backgrounds meets 3:1 for large text and UI components.
- Provide visible focus states for all interactive elements; consider a 2px outline in action pink offset from the element edge.
- Do not rely on color alone for feature inclusion; the checkmark and cross icons provide necessary non-color indicators.
- Respect reduced-motion preferences for any gradient or atmospheric background animations.

## Scope note

This guide covers the Suno homepage and pricing surface as visible in the supplied images. Mobile layouts, navigation menus, footer content, audio player interfaces, account dashboards, and motion or sound design are not represented. Measurements are practical adaptation targets. Verify licensing for Pp Editorial New and Pp Neue Montreal before production use.
