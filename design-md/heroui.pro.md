# How heroui.pro is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/heroui.pro-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large Britti Sans headline, product mockup carousel showing map navigation, AI chat, music player, and shopping experience cards on light gray background](https://pin.fontofweb.com/8795?format=jpg)](https://design.withfudge.com/share/pin-8795)

[Hero section with large Britti Sans headline, product mockup carousel showing map navigation, AI chat, music player, and shopping experience cards on light gray background](https://design.withfudge.com/share/pin-8795)

[![Green gradient early access membership card with Kfoster name, joined date, and member number on light gray background with carousel navigation arrows](https://pin.fontofweb.com/8797?format=jpg)](https://design.withfudge.com/share/pin-8797)

[Green gradient early access membership card with Kfoster name, joined date, and member number on light gray background with carousel navigation arrows](https://design.withfudge.com/share/pin-8797)

[![Pricing page with three-tier card layout showing Web Hero, Mobile Hero, and Super Hero plans with gradient headers and feature lists on light gray background](https://pin.fontofweb.com/8796?format=jpg)](https://design.withfudge.com/share/pin-8796)

[Pricing page with three-tier card layout showing Web Hero, Mobile Hero, and Super Hero plans with gradient headers and feature lists on light gray background](https://design.withfudge.com/share/pin-8796)

[![Teams and Enterprise pricing tab with three cards featuring blue, purple, and yellow gradient headers with per-seat pricing and renewal information](https://pin.fontofweb.com/8798?format=jpg)](https://design.withfudge.com/share/pin-8798)

[Teams and Enterprise pricing tab with three cards featuring blue, purple, and yellow gradient headers with per-seat pricing and renewal information](https://design.withfudge.com/share/pin-8798)

## Overview

HeroUI Pro presents a refined, premium aesthetic built around confident display typography and restrained color usage. The system pairs a distinctive, tightly-tracked sans-serif display face with a neutral grotesque for interface text, creating clear hierarchy without visual noise. The overall impression is one of polished professionalism: generous whitespace, soft gray backgrounds, and carefully rounded containers that feel contemporary without being trendy.

The design communicates value through restraint rather than ornament. Product demonstrations appear as floating device mockups and component cards, giving visitors tangible proof of the system's capabilities. Gradient accents appear sparingly, reserved for pricing card headers and promotional moments where they signal premium tiers. The dark ink on light canvas approach ensures excellent readability while allowing colorful product screenshots to remain the focal point.

## Colors

| token | value | use |
|---|---|---|
| canvas | #EBEBEC | Page background, the neutral gray that frames all content |
| surface | #FFFFFF | Card backgrounds, button fills, input fields |
| ink | #000000 | Primary text, headings, primary button text on light surfaces |
| muted-ink | #71717A | Secondary text, captions, strikethrough prices, disabled states |
| action | #0485F7 | Links, active tab indicators, countdown timers, interactive accents |
| accent-green | #10B981 | Gradient start color, success states, promotional highlights |
| accent-green-deep | #053C2E | Gradient end color, deep green for rich backgrounds |
| border-subtle | #000000 | 1px hairline borders with low opacity for dividers and card outlines |

The color philosophy centers on near-monochrome neutrality with selective color injection. The canvas gray (#EBEBEC) avoids the sterility of pure white, creating a subtle warmth that makes white cards pop forward. Black ink provides maximum contrast for reading confidence. The single blue action color handles all interactive signaling, from navigation links to countdown emphasis. Green gradients serve a specific promotional role, appearing in membership cards and pricing headers to denote value and exclusivity. No additional accent colors compete for attention in the interface chrome.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Britti Sans | 4.5rem | 500 | 0.9 | -0.015em | Main page headlines, hero statements |
| section-display | Britti Sans | 3rem | 500 | 1 | -0.015em | Section headings, pricing page titles |
| card-title | Britti Sans | 1.25rem | 500 | 1.2 | normal | Pricing tier names, feature card headers |
| body | Inter | 1rem | 400 | 1.5 | normal | Paragraphs, descriptions, general content |
| body-small | Inter | 0.875rem | 400 | 1.43 | normal | Secondary descriptions, metadata |
| label | Inter | 0.75rem | 500 | 1.34 | normal | Badges, timestamps, small UI labels |
| button | Inter | 0.875rem | 500 | 1.43 | normal | Button text, navigation actions |
| price-display | Inter | 2rem | 600 | 1 | normal | Pricing amounts, numerical highlights |

The typographic system relies on contrast between two families. Britti Sans carries display duties with its light weight and subtle character, lending an editorial quality to headlines. Its negative tracking tightens wordmarks into cohesive visual units. Inter handles everything functional: body copy, buttons, labels, and interface chrome. The weight progression stays restrained—Regular for reading, Medium for emphasis, Semibold only for price figures that demand attention.

Verify licensing for these families before production use. Britti Sans is available from Nois Type Studio. Inter was designed by Rasmus Andersson and is available from Rsms.

## Layout

The layout follows a centered, contained approach with generous breathing room. Content max-widths create comfortable reading measure while allowing hero sections to feel expansive. The grid system favors single-column centered arrangements for marketing content, transitioning to multi-column grids for pricing cards and component showcases.

Section spacing uses 5rem vertical padding as the standard rhythm, with tighter 1.25rem gaps between related elements. Horizontal page padding scales from 1.5rem on mobile to 4rem on desktop. Cards maintain internal padding of 1.25rem, with pricing cards expanding to 1.5rem for their denser information architecture.

The hero section establishes the compositional pattern: centered headline stack, followed by descriptive subhead, then a prominent media area. Below the fold, content alternates between full-width showcases and contained feature grids. The pricing page demonstrates a three-column equal-width grid with 1rem gutters, each card sharing identical internal structure for easy comparison.

Component mockups appear as floating cards with subtle shadows, often overlapping or arranged in perspective to suggest depth. This layered presentation creates visual interest without requiring additional decorative elements.

## Visual language

The visual language balances clinical precision with approachable warmth. Rounded corners appear universally—1.5rem for cards and buttons, 1.25rem for panels, full pills for tags and toggles—creating a family of related shapes that feel intentionally designed rather than default.

Shadows remain subtle and functional. Cards carry a soft lift: `rgba(0, 0, 0, 0.04) 0px 2px 4px, rgba(0, 0, 0, 0.06) 0px 1px 2px` for resting state, with slightly deeper shadows for hover or emphasis. Inset shadows create hairline borders on buttons and inputs, avoiding explicit border declarations while maintaining definition.

Gradients serve as premium signals. The green membership gradient runs from #10B981 through intermediate stops to #053C2E, creating rich depth for exclusive content. Pricing cards use softer gradients—blue sky, purple haze, golden warmth—differentiating tiers while maintaining family resemblance.

Product imagery favors clean, isolated presentations. Component screenshots appear on neutral backgrounds with subtle device chrome. The mockup carousel in the hero section demonstrates the system's versatility through realistic application contexts: map interfaces, chat conversations, media players, and e-commerce flows.

## Components

### Navigation bar

- **Anatomy**: Logo mark left, utility actions right
- **Surface**: Transparent over hero, transitioning to canvas on scroll
- **Typography**: `{typography.body-small}` for links, `{typography.button}` for primary action
- **Shape**: Full-width, height approximately 3.5rem
- **Spacing**: Horizontal padding matches page gutters, internal gap of 1.5rem between actions
- **Composition**: Flex row with space-between alignment

### Primary button

- **Anatomy**: Text label with optional icon, full-width or intrinsic width
- **Surface**: `{colors.surface}` fill with subtle inset shadow for definition, or `{colors.ink}` fill with `{colors.surface}` text for emphasis
- **Typography**: `{typography.button}`
- **Shape**: `{rounded.button}` pill shape
- **Spacing**: Horizontal padding 0.75rem, height 2.5rem
- **States**: Default shows subtle shadow; emphasis variant inverts to black surface

### Pricing card

- **Anatomy**: Gradient header with tier name, description, and price; white body with feature list; footer with renewal terms
- **Surface**: `{colors.surface}` card with gradient header band (blue, purple, or gold variant)
- **Typography**: `{typography.card-title}` for tier name, `{typography.price-display}` for current price, `{typography.body-small}` with `{colors.muted-ink}` for strikethrough original price, `{typography.label}` for feature items
- **Shape**: `{rounded.card}` with internal padding `{spacing.card-padding}`
- **Spacing**: Feature list uses 0.75rem vertical gap between items
- **Composition**: Vertical stack with clear separation between header, body, and footer

### Tab toggle

- **Anatomy**: Segmented control with two options, active state indicated by white pill
- **Surface**: `{colors.canvas}` track with `{colors.surface}` active pill
- **Typography**: `{typography.body-small}`
- **Shape**: `{rounded.pill}` track with internal pill
- **Spacing**: Compact height, generous horizontal padding per option

### Component showcase card

- **Anatomy**: Device frame containing live component demo, category label above
- **Surface**: `{colors.surface}` with soft shadow, subtle gray device chrome
- **Typography**: `{typography.label}` for category, component-specific text inherits system defaults
- **Shape**: `{rounded.panel}` for outer card, sharper corners for internal mockup
- **Composition**: Centered in viewport with adjacent cards partially visible, suggesting carousel

### Membership card

- **Anatomy**: Gradient background with logo, member name, status label, and metadata fields
- **Surface**: Green gradient from `{colors.accent-green}` to `{colors.accent-green-deep}`
- **Typography**: `{typography.section-display}` in white for name, `{typography.body-small}` in white with reduced opacity for metadata
- **Shape**: `{rounded.card}` with slight perspective rotation in carousel context
- **Composition**: Centered in viewport with sibling cards visible at edges, navigation arrows on either side

## Responsive behavior

The layout adapts through progressive containment. At narrow viewports, the three-column pricing grid collapses to a single column with full-width cards. The hero headline scales down from 4.5rem to approximately 2.5rem, maintaining line breaks for readability. Component showcase cards stack vertically rather than appearing in overlapping perspective.

Navigation simplifies to essential actions, with secondary links moving to a collapsible menu. Tab toggles remain usable at all sizes due to their compact pill design.

Touch targets maintain minimum 44px height for buttons and interactive elements. Card padding reduces slightly on mobile to maximize content area within narrow viewports.

## Practical implementation guidance

### Preserve
- The distinctive pairing of Britti Sans for display and Inter for body text
- Generous canvas gray background rather than pure white pages
- Subtle shadow system rather than heavy drop shadows
- Gradient accents limited to promotional and premium contexts
- Rounded corner consistency across all container types
- Strikethrough pricing with muted-ink for original prices

### Avoid
- Additional accent colors beyond the established blue and green
- Sharp corners on interactive elements
- Heavy borders; prefer inset shadows for definition
- Cluttered hero sections; maintain the headline-subhead-media rhythm
- Generic stock photography; use realistic component mockups

### Recommended build order
1. Establish canvas background and base typography scale
2. Implement button and card primitives with rounded corners and shadows
3. Build navigation with transparent-to-canvas scroll behavior
4. Create pricing card component with gradient header variants
5. Develop component showcase carousel with perspective transforms
6. Add membership card with green gradient and metadata layout
7. Polish with micro-interactions: hover lifts, active states, smooth transitions

### Accessibility
- Ensure all text meets WCAG AA contrast against gradient backgrounds; the green gradient may require text-shadow or positioned overlays for the lightest gradient stops
- Provide keyboard navigation for the component showcase carousel
- Include reduced-motion alternatives for perspective transforms and carousel animations
- Maintain visible focus indicators on all interactive elements, particularly the subtle shadow buttons
- Use semantic heading hierarchy despite the visual similarity between display sizes

## Scope note

This guide covers the marketing and pricing surfaces of HeroUI Pro as visible in the supplied homepage and pricing page screenshots. Component library documentation pages, authentication flows, and account management interfaces are not represented. Motion design, mobile-specific layouts, and dark mode variants fall outside the current scope. Measurements reflect the desktop viewport state shown in source images.
