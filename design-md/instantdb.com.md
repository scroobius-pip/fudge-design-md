# How instantdb.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/instantdb.com-design)

Last updated: 2026-08-10

## Captured pages

[![Pricing page with four-tier card layout showing Free, Pro, Startup, and Enterprise plans with orange-highlighted CTA and checkmark feature lists](https://pin.fontofweb.com/8779?format=jpg)](https://design.withfudge.com/share/pin-8779)

[Pricing page with four-tier card layout showing Free, Pro, Startup, and Enterprise plans with orange-highlighted CTA and checkmark feature lists](https://design.withfudge.com/share/pin-8779)

[![Homepage hero with warm gradient background, terminal-style install command, orange primary button, video thumbnail, and monospace statistics row](https://pin.fontofweb.com/8778?format=jpg)](https://design.withfudge.com/share/pin-8778)

[Homepage hero with warm gradient background, terminal-style install command, orange primary button, video thumbnail, and monospace statistics row](https://design.withfudge.com/share/pin-8778)

[![Minimal login modal with email input, lavender send button, Google OAuth option, and monospace logo mark](https://pin.fontofweb.com/1705?format=jpg)](https://design.withfudge.com/share/pin-1705)

[Minimal login modal with email input, lavender send button, Google OAuth option, and monospace logo mark](https://design.withfudge.com/share/pin-1705)

[![About section with monospace heading, two-column investor list, orange Start Building CTA, and monospace footer metadata](https://pin.fontofweb.com/1704?format=jpg)](https://design.withfudge.com/share/pin-1704)

[About section with monospace heading, two-column investor list, orange Start Building CTA, and monospace footer metadata](https://design.withfudge.com/share/pin-1704)

## Overview

Instant presents itself as a developer infrastructure brand with a visual system that balances technical credibility against approachable warmth. The identity relies on two type families working in deliberate contrast: Berkeley Mono delivers the mechanical precision expected of terminal interfaces and code samples, while Switzer provides the human readability needed for marketing narratives and interface labels. The color story anchors everything in warm off-white and near-black neutrals, reserving a single vivid orange for calls to action and highlighted states. This restraint makes the orange feel energetic rather than overwhelming. The overall composition favors generous whitespace, centered hero messaging, and card-based information architecture that keeps complex pricing and feature data scannable. Every surface decision reinforces the product's positioning as modern backend tooling that respects developer attention.

## Colors

The palette operates on a principle of warm neutrality with a single high-saturation accent. Backgrounds never read as cold pure white; instead they carry subtle cream warmth that reduces eye strain during long technical reading sessions. Text hierarchy is established through luminance rather than hue variation, keeping the interface calm and focused.

| token | value | use |
|---|---|---|
| action | #EA580C | Primary buttons, highlighted borders, active plan indicators, video play button |
| action-hover | #F54900 | Hover state for primary actions, shadow tints |
| ink | #333333 | Primary headings, body text, high-emphasis labels |
| ink-secondary | #364153 | Secondary text, pricing descriptions, subdued labels |
| ink-muted | #6A7282 | Tertiary text, captions, footer metadata, checkmark list prefixes |
| canvas | #FBF9F6 | Page background, hero gradient base, warm neutral ground |
| surface | #FFFFFF | Card backgrounds, modal surfaces, input fields, elevated panels |
| surface-elevated | #F9FAFB | Terminal blocks, subtle secondary panels, code snippet backgrounds |
| border | #E5E7EB | Card outlines, section dividers, input borders, terminal block borders |
| border-subtle | #ECECEC | Hairline separators, internal card divisions |
| border-hairline | #F2F2F2 | Very light structural borders, footer top rules |

The orange accent appears most aggressively on the primary call-to-action buttons and the highlighted pricing plan border, creating a clear visual funnel toward conversion. The warm canvas background in the hero area transitions smoothly to pure white surface cards below, establishing depth without shadow dependency. Dark text on light ground remains the dominant reading mode throughout; no dark mode surfaces are visible in the supplied material.

## Typography

The type system is bifurcated by function. Switzer handles all marketing prose, interface labels, and body reading at multiple weights. Berkeley Mono appears exclusively for technical expressions: statistics, terminal commands, section headings that need mechanical character, and footer metadata. This split reinforces the product's identity as infrastructure that speaks fluently in both human and machine registers.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Switzer | 3rem | 400 | 1 | normal | Homepage hero headline, pricing page headline |
| section-display | Switzer | 1.875rem | 400 | 1.2 | -0.025em | Section subheadings, plan names |
| body | Switzer | 1rem | 400 | 1.5 | normal | Paragraphs, descriptions, navigation |
| body-large | Switzer | 1.25rem | 400 | 1.4 | normal | Hero subtext, introductory paragraphs |
| body-small | Switzer | 0.875rem | 400 | 1.4286 | normal | Feature lists, captions, fine print |
| label | Switzer | 1rem | 500 | 1.5 | normal | Button labels, navigation emphasis |
| label-strong | Switzer | 1rem | 600 | 1.5 | normal | Active navigation, bold labels |
| mono-display | Berkeley Mono | 3rem | 600 | 1 | -0.05em | Large statistics, technical headlines |
| mono-body | Berkeley Mono | 1.125rem | 400 | 1.5556 | normal | Terminal commands, code samples |
| mono-small | Berkeley Mono | 1rem | 400 | 1.5 | normal | Inline code, small technical labels |
| mono-caption | Berkeley Mono | 0.75rem | 400 | 1.3333 | normal | Statistic labels, footer metadata |

Switzer is designed by Jeremie Hornus and distributed by Indian Type Foundry. Berkeley Mono is designed by Neil Panchal and distributed by Berkeley Graphics. Verify licensing for these families before production use.

## Layout

The page architecture follows a centered single-column model with strategic width constraints. Hero sections occupy full viewport width with warm gradient backgrounds, while content sections narrow to readable measure and center horizontally. This creates a rhythmic breathing pattern between expansive brand moments and focused information delivery.

The maximum content width for readable text blocks is approximately 48rem, seen in the hero subtext and about-section paragraphs. Wider structural containers reach approximately 75rem, used for navigation bars and multi-card grids. The pricing page demonstrates a four-column equal-width grid at this maximum width, with cards separated by consistent gutters.

Vertical rhythm is generous. Major sections receive 6rem to 10rem of vertical padding, creating clear territorial separation between functional areas. Within cards, internal spacing uses 1.5rem padding with 1rem gaps between content zones. The statistics row on the homepage uses a three-column centered layout with substantial horizontal breathing room around each number-label pair.

Navigation sits at the top in a full-width bar with flex distribution: logo mark left, link cluster center, utility actions right. The utility cluster includes a GitHub star count badge and a primary dashboard button, establishing social proof adjacent to conversion. No sidebar navigation or complex multi-level menus appear in the visible material.

## Visual language

The aesthetic character merges startup optimism with engineering rigor. Rounded corners are restrained—cards and panels use 0.5rem, buttons use 0.25rem—avoiding the overly friendly softness of larger radii. The single exception is the pill-shaped badge in the navigation, which uses full rounding for its star count display.

Shadow usage is minimal and functional. The primary action button carries a warm orange-tinted shadow that extends significantly below the element, creating elevation and drawing attention without harshness. Cards and panels rely on border definition rather than shadow for their containment, keeping the surface language flat and modern.

Iconography appears sparingly. Checkmarks in pricing feature lists use simple stroke glyphs. The terminal block includes a copy icon. The video thumbnail uses a solid orange circle with a white play triangle. These elements are geometric and unadorned, matching the monospace sensibility.

The warm gradient in the hero area transitions horizontally from cream through subtle peach tones, creating an atmospheric glow behind the central content without competing for attention. This gradient is the only visible use of non-solid color in the interface; no additional gradients or patterns appear in cards, buttons, or backgrounds.

## Components

### Primary action button
Anatomy: Text label centered within a solid filled rectangle.
Surface and text color: Orange action background with white text.
Typography: Switzer 500 at 1rem, line height 1.5.
Shape and border: 0.25rem radius, no border, substantial orange-tinted shadow below.
Spacing: 0.5rem vertical padding, 2rem horizontal padding.
Composition: Often paired with a secondary terminal-style block and the word "or" as a conjunction.
Variants: The navigation variant uses identical styling but smaller horizontal padding. The authentication modal uses a lavender-filled variant with identical structure.

### Secondary terminal block
Anatomy: Monospace text with a leading dollar-sign prompt, copy action icon at right.
Surface and text color: Elevated gray background with secondary ink text.
Typography: Berkeley Mono Regular at 1rem.
Shape and border: 0.5rem radius, 1px solid border in neutral tone.
Spacing: 0.75rem vertical padding, 1rem horizontal padding.
Composition: Positioned inline with or adjacent to primary action buttons, forming a dual-path conversion pattern.

### Pricing card
Anatomy: Vertical stack with plan name, description, price, feature checklist, and action button at bottom.
Surface and text color: White surface with neutral border; highlighted variant uses orange border.
Typography: Plan name in section-display, price in hero-display with smaller "/month" suffix in body-small, features in body-small with muted ink.
Shape and border: 0.5rem radius, 1px solid border.
Spacing: 1.5rem internal padding, 1rem gaps between zones.
Composition: Four cards in equal-width row. The highlighted card (Startup) receives orange border and orange primary button; others use ghost or secondary buttons.
Variants: Free and Pro use outlined secondary buttons; Enterprise uses a text-link style contact action.

### Statistics row
Anatomy: Three equal columns with large monospace number above small monospace label.
Surface and text color: Transparent background, dark ink numbers, muted ink labels.
Typography: Numbers in mono-display, labels in mono-caption.
Shape and border: No containing border or background.
Spacing: Generous horizontal separation, centered within content width.
Composition: Positioned below hero media as social proof, establishing technical credibility through scale metrics.

### Input field
Anatomy: Single-line text entry with placeholder text.
Surface and text color: White background, neutral border, placeholder in muted ink.
Typography: Switzer Regular at 1rem.
Shape and border: 0.25rem radius, 1px solid border.
Spacing: 0.5rem vertical padding, 1rem horizontal padding.
Composition: Full width within modal or form container, stacked above primary action with tight vertical gap.

### Navigation bar
Anatomy: Logo mark with wordmark left, horizontal link cluster center, utility actions right.
Surface and text color: Transparent or warm canvas background, dark ink links.
Typography: Switzer Regular at 1rem for links, Switzer 600 for active/hover states.
Shape and border: No visible border or background separation.
Spacing: 2rem horizontal padding, comfortable gaps between link items.
Composition: Fixed or sticky at viewport top. Utility cluster includes GitHub star badge with icon and pill shape, plus orange dashboard button.

## Responsive behavior

The visible material shows desktop layouts exclusively. Based on the component structures, several responsive adaptations are recommended. The four-column pricing grid should collapse to two columns on tablet and single column on mobile, maintaining card internal spacing. The hero headline at 3rem should scale down to 2.25rem on narrow viewports to prevent overflow. The statistics row should stack vertically on mobile, preserving the number-label pairing. Navigation links should collapse to a hamburger menu or simplify to essential items on small screens, keeping the logo and dashboard button visible. The terminal block and primary button pair may need vertical stacking with the "or" conjunction centered between them.

## Practical implementation guidance

### Preserve
- The strict type family separation: Switzer for marketing and UI, Berkeley Mono for technical and statistical content.
- The warm off-white canvas background against pure white cards; this subtle temperature shift creates depth without shadow.
- The single orange accent used sparingly for primary actions and highlighted states.
- The generous vertical section spacing that lets each content area breathe.
- The monospace statistics with tight tracking for large numbers, creating visual impact through mechanical precision.

### Avoid
- Adding additional accent colors; the system derives its energy from orange restraint against warm neutrals.
- Using Berkeley Mono for long reading passages; its fixed-width character is designed for short technical expressions.
- Increasing card border radius beyond 0.5rem; the current value maintains engineering credibility.
- Replacing the terminal block with a standard button; the command-line installation path is core to developer audience appeal.
- Using pure black (#000000) for text; the slightly softened #333333 reduces harshness on warm backgrounds.

### Recommended build order
1. Establish the type system with both font families loaded and the semantic token hierarchy mapped.
2. Implement the warm canvas background and pure white surface tokens across page and card containers.
3. Build the primary action button with its orange fill, white text, and distinctive warm shadow.
4. Create the terminal block component with monospace typography and copy interaction.
5. Construct the navigation bar with logo, link cluster, and utility actions including the star badge.
6. Develop the pricing card with its four variants and responsive grid behavior.
7. Add the statistics row with monospace display numbers and caption labels.
8. Polish with input fields, modal containers, and footer metadata patterns.

### Accessibility
Ensure the orange action color meets contrast requirements against white text at all sizes; the vivid hue may need darkening for small text applications. Provide visible focus states on the terminal block copy action and all button variants. Maintain semantic heading hierarchy despite the visual similarity between hero-display and mono-display sizes. Use aria-labels on the statistics row to contextualize raw numbers for screen reader users. Consider keyboard navigation for the pricing card action buttons, ensuring tab order follows visual layout.

## Scope note

This guide covers the marketing site surfaces visible on the homepage, pricing page, about section, and authentication modal. Dashboard internals, mobile breakpoints, dark mode, loading states, and motion behaviors are not represented in the supplied material. The IBM Plex Sans family appears in the font inventory but is not visibly used in the captured interfaces; verify whether it serves a specific functional role before including in production builds. The authentication modal's button color is described from visual interpretation of the supplied image and should be verified against live implementation.
