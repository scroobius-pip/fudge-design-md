# How voiceos.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/voiceos.com-design)

Last updated: 2026-08-10

## Captured pages

[![Language support section with curved flag arc and centered headline on rounded white card](https://pin.fontofweb.com/6414?format=jpg)](https://design.withfudge.com/share/pin-6414)

[Language support section with curved flag arc and centered headline on rounded white card](https://design.withfudge.com/share/pin-6414)

[![Three-column pricing table with pill toggle, rounded cards, and checkmark feature lists](https://pin.fontofweb.com/6413?format=jpg)](https://design.withfudge.com/share/pin-6413)

[Three-column pricing table with pill toggle, rounded cards, and checkmark feature lists](https://design.withfudge.com/share/pin-6413)

[![FAQ accordion with expanded answer panel showing privacy details and chevron indicators](https://pin.fontofweb.com/6412?format=jpg)](https://design.withfudge.com/share/pin-6412)

[FAQ accordion with expanded answer panel showing privacy details and chevron indicators](https://design.withfudge.com/share/pin-6412)

[![Hero section with fn key badge, gradient headline, pill download button, and monospace footer](https://pin.fontofweb.com/6411?format=jpg)](https://design.withfudge.com/share/pin-6411)

[Hero section with fn key badge, gradient headline, pill download button, and monospace footer](https://design.withfudge.com/share/pin-6411)

## Overview

VoiceOS presents a voice-first productivity tool through a restrained, high-contrast visual system. The design centers on near-black typography against pure white backgrounds, creating immediate readability and a sense of technical precision. Large display type dominates the hero and section headers, set tight with negative letter-spacing for a modern, confident presence. The interface avoids decorative excess: content lives in softly rounded cards with faint blue-tinted borders that suggest digital clarity without visual noise. A monospace footer family provides subtle texture against the geometric sans used throughout the main content. The overall impression is of a focused, trustworthy utility—clean enough for casual browsing, precise enough for professional users evaluating a productivity tool.

## Colors

The palette is intentionally narrow, built on a near-black and white foundation with cool gray intermediates and a single blue accent family for interactive glow.

| token | value | use |
|---|---|---|
| ink | #0A0A0A | Primary headings, body text, and key UI elements |
| ink-secondary | #111827 | Strong emphasis within headings, secondary headings |
| ink-tertiary | #374151 | Feature labels, metadata, subdued text |
| muted | #4B5563 | Descriptions, supporting copy, pricing details |
| canvas | #FFFFFF | Page background, card surfaces, button fills |
| surface | #F3F4F6 | Toggle backgrounds, subtle container fills |
| border-subtle | #D1D5DB | Hairline dividers, inactive borders |
| border-glow | #D2EBFF | Card edge glow, active focus rings, soft boundaries |
| accent-blue | #E6F5FF | Gradient stops, hover state tints |
| accent-blue-light | #F0FAFF | Lighter gradient accents, pressed states |

The system operates in a single light mode. Dark values carry the typographic weight while the blue accent family provides the only chromatic presence, appearing in card borders, shadow tints, and gradient overlays. Photography and illustration colors are drawn from product imagery and do not participate in the UI palette.

## Typography

Two families serve distinct roles: Applesystem carries all interface and marketing text, while Dm Mono appears exclusively in the footer for legal and copyright lines.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Applesystem | 4.5rem | 400 | 1 | -0.025em | Hero headlines, key value propositions |
| section-display | Applesystem | 3.75rem | 400 | 1 | -0.025em | Section headers, pricing title, FAQ title |
| body-large | Applesystem | 1.25rem | 300 | 1.4 | normal | Lead paragraphs, hero subheads |
| body | Applesystem | 1rem | 400 | 1.5 | normal | Standard paragraphs, feature descriptions |
| body-small | Applesystem | 0.875rem | 400 | 1.625 | normal | Compact descriptions, pricing notes |
| label | Applesystem | 0.75rem | 500 | 1.333 | 0.025em | Tags, badges, plan labels |
| navigation | Applesystem | 1rem | 500 | 1.5 | normal | Nav links, primary actions |
| button-primary | Applesystem | 1.125rem | 400 | 1.556 | normal | Large download buttons |
| button-small | Applesystem | 0.875rem | 500 | 1.429 | normal | Toggle buttons, compact actions |
| legal | Dm Mono | 1rem | 400 | 1.5 | normal | Footer copyright, legal links |

Dm Mono is designed by Colophon Foundry. Verify licensing for these families before production use.

## Layout

The page follows a centered single-column rhythm with generous horizontal margins that create a calm reading environment. Content max-widths cluster around comfortable reading measures, with hero sections receiving the most breathing room.

Sections stack vertically with substantial top padding—hero areas begin with 10rem of headroom, while standard sections use 4rem. Internal spacing relies on a 0.25rem base unit, with component gaps typically at 1rem, 1.5rem, or 2rem depending on information density.

Cards and containers employ consistent 1.5rem corner radii, creating a family of rounded rectangles that soften the otherwise rectilinear layout. The pricing section arranges three equal cards in a horizontal row with even gutters. FAQ content centers a single column of accordion items. The hero section centers all elements with generous vertical space between the headline, subhead, and call-to-action.

Footer content splits horizontally: copyright left, social and legal links right, with the monospace family creating visual separation from the main content without additional rules or background changes.

## Visual language

The visual character balances technical precision with approachable simplicity. Rounded corners appear everywhere—cards, buttons, toggles, badges—unifying disparate components into a coherent soft geometry. The blue glow border on cards is the signature surface treatment: a faint, cool edge that suggests digital activation without the heaviness of solid strokes or drop shadows.

Typography drives hierarchy through size contrast rather than weight variation. Display sizes sit at 60px and 72px with tight leading, while body text remains light and airy at 300 weight for descriptions. Bold emphasis appears sparingly, reserved for key phrases within headlines and feature lists.

The fn key badge in the hero demonstrates a distinctive interaction pattern: keyboard glyphs rendered as physical-looking buttons with subtle shadow and border, set inline with flowing text. This bridges software and hardware metaphors, reinforcing the product's system-level integration.

Shadow usage is minimal and layered: soft ambient shadows for elevation, inset highlights for pressed or active states, and colored shadow tints in the blue accent family for focus and glow effects.

## Components

### Pricing card

- **Anatomy**: Rounded rectangle containing plan name, price with period suffix, description line, feature badge, and vertical checklist.
- **Surface**: White background with faint blue-tinted border glow.
- **Typography**: Plan name uses section-display size; price uses section-display with lighter weight suffix; features use body with bold lead words.
- **Shape**: 1.5rem border radius, consistent padding of 1.5rem.
- **Spacing**: Internal stack with 1rem gaps between price, description, badge, and list. List items spaced at 0.625rem.
- **Composition**: Three cards in equal-width row with shared top alignment.
- **Variants**: Free plan shows "/forever"; paid plans show "/per month" with billing note.

### Toggle pill

- **Anatomy**: Rounded container with two text options, active state indicated by white pill background.
- **Surface**: Light gray track with white selected indicator.
- **Typography**: button-small token, 500 weight.
- **Shape**: Full pill radius, compact padding of 0.5rem horizontal, 0.5rem vertical.
- **Composition**: Centered above pricing cards as mode selector.

### FAQ accordion

- **Anatomy**: Rounded container with question rows, each with text and chevron indicator; expanded row reveals answer paragraph.
- **Surface**: White with blue glow border matching pricing cards.
- **Typography**: Questions use body token; answers use body with bold emphasis on key phrases.
- **Shape**: 1.5rem outer radius; internal rows separated by subtle dividers.
- **Spacing**: Generous internal padding of 1.5rem; answer text indented or wrapped with comfortable line length.
- **States**: Collapsed shows down chevron; expanded shows up chevron with answer text revealed below.

### Download button

- **Anatomy**: Pill button with Apple logo glyph and text label.
- **Surface**: White fill with subtle border and soft shadow.
- **Typography**: button-small token.
- **Shape**: Full pill radius.
- **Spacing**: Comfortable padding of 0.5rem vertical, 1.25rem horizontal.

### Feature badge

- **Anatomy**: Compact pill with centered text label.
- **Surface**: White or near-white fill with subtle border.
- **Typography**: label token, uppercase or small-case usage indicator.
- **Shape**: Full pill radius.

### Footer

- **Anatomy**: Horizontal bar with copyright left, social icons and legal links right.
- **Typography**: legal token in Dm Mono for all text.
- **Spacing**: 2rem vertical padding, horizontal margins matching page gutters.

## Responsive behavior

The design appears optimized for desktop viewing with centered content and generous margins. At narrower viewports, the three-column pricing grid should stack vertically, maintaining card proportions and internal spacing. The hero headline with inline fn badge may need to break to multiple lines; the badge should remain visually connected to surrounding text. FAQ accordion width should remain constrained for readability, approaching full width on mobile but preserving internal padding. Footer horizontal layout should collapse to stacked or simplified arrangement. Typography scales down proportionally: section-display to 2.5rem, hero-display to 3rem on small screens.

## Practical implementation guidance

### Preserve
- The near-black on white contrast ratio; do not lighten ink below #0A0A0A for primary text.
- The distinctive blue glow border on cards; this is the primary visual signature.
- Tight negative letter-spacing on display sizes; loosening destroys the modern character.
- The two-family typographic split: geometric sans for content, monospace for footer legal.

### Avoid
- Adding more accent colors; the single blue family is sufficient.
- Heavy drop shadows; the existing layered shadows are subtle by design.
- Solid dark backgrounds for sections; the design relies on white space for clarity.
- Rounding corners inconsistently; the 1.5rem card radius and pill radius form a paired system.

### Recommended build order
1. Establish the color tokens and apply canvas background with ink text.
2. Set up Applesystem at body size with proper line height and spacing scale.
3. Build the hero section with display typography and fn badge component.
4. Create the card component with blue glow border and 1.5rem radius.
5. Implement pricing grid using the card component with internal spacing tokens.
6. Add FAQ accordion with expand/collapse behavior and chevron indicators.
7. Implement footer with Dm Mono family and horizontal layout.
8. Refine shadow system for buttons, badges, and active states.

### Accessibility
- Ensure the fn badge has sufficient contrast as an inline interactive element.
- Provide keyboard navigation for the pricing toggle and FAQ accordion.
- Maintain focus indicators that match the blue glow border treatment.
- Do not rely on color alone for plan differentiation; structure and text carry meaning.

## Scope note

This guide covers the VoiceOS marketing page surface including hero, pricing, FAQ, and footer sections. Mobile breakpoints, animation, form validation states, and application interface screens are not represented in the supplied material. The Dm Mono family appears only in the footer; verify licensing before expanding its use.
