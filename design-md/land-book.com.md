# How land-book.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/land-book.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large display headline, pricing card, and dark UI mockup showing website gallery grid with category pills](https://pin.fontofweb.com/10108?format=jpg)](https://design.withfudge.com/share/pin-10108)

[Hero section with large display headline, pricing card, and dark UI mockup showing website gallery grid with category pills](https://design.withfudge.com/share/pin-10108)

[![Testimonial carousel with four white cards containing user quotes, avatar circles, and horizontal scrollbar](https://pin.fontofweb.com/10107?format=jpg)](https://design.withfudge.com/share/pin-10107)

[Testimonial carousel with four white cards containing user quotes, avatar circles, and horizontal scrollbar](https://design.withfudge.com/share/pin-10107)

[![Feature section with accordion list and dotted-grid canvas showing draggable website screenshot cards](https://pin.fontofweb.com/10106?format=jpg)](https://design.withfudge.com/share/pin-10106)

[Feature section with accordion list and dotted-grid canvas showing draggable website screenshot cards](https://design.withfudge.com/share/pin-10106)

[![Expanded accordion state revealing descriptive text alongside scattered website preview cards on dotted background](https://pin.fontofweb.com/10105?format=jpg)](https://design.withfudge.com/share/pin-10105)

[Expanded accordion state revealing descriptive text alongside scattered website preview cards on dotted background](https://design.withfudge.com/share/pin-10105)

## Overview

Land-book is a design inspiration platform whose visual system balances gallery-like spaciousness with precise utility. The interface rests on a warm off-white canvas that feels inviting rather than sterile, allowing colorful website screenshots to become the true content. Typography is restrained and confident: large display headings use tight leading and minimal tracking to create editorial impact, while body text remains highly readable at a compact size. The system employs a consistent language of rounded pills for interactive elements—buttons, inputs, tags—and softer large-radius cards for content containers. A distinctive dotted-grid background pattern appears behind interactive canvases, creating a sense of creative workspace. The overall impression is of a curated tool: approachable enough for casual browsing, structured enough for professional workflows.

## Colors

The palette is intentionally muted to let user-submitted website imagery dominate. Warm neutrals establish hierarchy through value contrast rather than chromatic intensity.

| token | hex | use |
|---|---|---|
| canvas | #F7F6F5 | Primary page background, establishes warm atmosphere |
| surface | #FFFFFF | Cards, modals, input backgrounds, elevated containers |
| surface-warm | #F0EFED | Secondary surfaces, tag backgrounds, accordion headers |
| ink | #2B2A2A | Primary text, headings, body copy, navigation links |
| ink-deep | #1D1C1C | Hero display text, active states, primary button text on dark |
| ink-muted | #4A4948 | Secondary text, descriptions, placeholder content |
| accent-teal | #017669 | Primary action buttons, "Join for free" CTA, pro badges |
| accent-teal-hover | #017C6E | Hover state for teal actions |
| border-light | #DDDCD9 | Card borders, input borders, divider lines |
| border-warm | #E7E6E3 | Subtle separators, accordion borders |
| border-muted | #B0A7A3 | Inactive tab borders, tertiary boundaries |
| shadow-soft | #B3B3B3 | Multi-layered soft shadows on elevated cards |
| dot-grid | #151414 | Radial dot pattern on interactive canvases at low opacity |

The color logic follows a warm-light hierarchy: canvas and surface create depth through subtle temperature difference, ink values provide readable contrast without pure black harshness, and accent-teal appears only at moments of conversion or primary action. Dark UI mockups within promotional imagery use near-black surfaces (#151414, #131F33) to showcase the platform's content in context, but these are photographic rather than interface tokens.

## Typography

The system uses Inter as its primary typeface for all interface text, leveraging weight variation to create hierarchy within a single family. The design facts also record Applesystem and Times as detected font families in the page source; these appear to be fallback or system-level declarations rather than actively rendered typefaces in the visible interface. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3.0625rem | 600 | 1 | -0.02em | Hero headlines, primary value propositions |
| section-display | Inter | 2.1875rem | 600 | 1 | -0.01em | Section headings, feature titles |
| body-large | Inter | 1.09375rem | 400 | 1.5 | normal | Lead paragraphs, expanded accordion descriptions |
| body | Inter | 0.875rem | 400 | 1.5 | normal | Default text, navigation, card content |
| body-strong | Inter | 0.875rem | 600 | 1.5 | normal | Emphasized body, testimonial attributions |
| label | Inter | 0.875rem | 500 | 1.2 | normal | Buttons, tags, navigation actions |
| caption | Inter | 0.765625rem | 500 | 1.2 | normal | Small labels, metadata, pro badges |
| navigation | Inter | 0.875rem | 400 | 1.5 | normal | Header links, footer links |

Display sizes use tight line-height (1) to create solid blocks of text that feel intentional and designed. Body sizes maintain generous 1.5 line-height for readability across longer passages. The 0.875rem base size is compact but legible, allowing dense information display without clutter. Weight 500 serves as the middle ground for interactive elements that need more presence than body but less aggression than headings.

## Layout

The layout system centers content with generous horizontal margins and vertical breathing room. Sections stack with 4rem top padding, creating clear rhythmic separation. Content containers use a centered column approach with max-width constraints—hero sections appear to span approximately 1150px with asymmetric composition, while standard sections center at roughly 920px.

Horizontal padding follows a consistent 4px (0.25rem) gutter system for grid containers, with negative margins (-8px) compensating for item padding to maintain flush edges. Card grids use 8px gaps between items, creating tight but breathable arrangements.

The hero area employs intentional asymmetry: large display text occupies the left portion while a pricing and social-proof card floats right. Below, a full-width dark UI mockup demonstrates the product in context, breaking the light surface with dramatic contrast.

Interactive canvases use a dotted-grid background created via radial gradients at 0.8px dot size with 16px spacing, establishing a design-tool aesthetic that suggests draggable, creative workspace. Cards within these canvases carry subtle multi-layered shadows with increasing blur radii (0.1px to 6.65px) to create natural elevation.

Section spacing uses 64px (4rem) as the primary vertical rhythm unit, with 32px (2rem) for tighter internal groupings and 16px (1rem) for element-level separation.

## Visual language

The visual language communicates curation and creative utility. Three distinctive patterns define the system:

**Surface hierarchy**: The warm off-white canvas (#F7F6F5) recedes, while pure white cards advance through contrast and subtle borders. This creates a gallery wall effect where content containers feel like mounted pieces.

**Pill-shaped interaction**: Every interactive element—buttons, inputs, category tags, navigation actions—uses full pill rounding (9999px). This creates a friendly, approachable rhythm that softens the density of a content-heavy interface. Active states invert the logic: the "Sections" tag in hero navigation uses a dark border on white rather than filled background.

**Dotted creative grids**: Feature sections showcasing the platform's capabilities use a light gray dotted background with scattered, slightly rotated website preview cards. A "Drag me" pill label explicitly invites interaction. This pattern transforms functional feature explanation into playful demonstration.

Imagery treatment favors rounded corners (approximately 14px) on screenshots, with occasional full-bleed presentation in mockups. Avatar images in testimonials use perfect circles (50% radius) at small scale with name and role stacked beside.

Shadows are sophisticated and layered: content cards use a complex 8-step shadow stack creating diffuse, natural elevation rather than harsh drops. Dark UI mockups employ inner shadows with teal-tinted edges for depth.

## Components

### Header Navigation

- **Anatomy**: Logo left, primary links center ("Websites", "Experts", "Templates"), search input center-right, utility actions right ("Sign In", "Get Pro" with star icon, "Sign up" filled button)
- **Surface**: Transparent over canvas, no border
- **Typography**: `{typography.navigation}` for links, weight 500 for active/current
- **Shape**: Full-bleed width, 8px vertical padding
- **Spacing**: 16px between nav items, 220.5px side margins on centered container
- **Search input**: Pill-shaped with 32px left padding for icon, 1px border in border-light

### Hero Section

- **Anatomy**: Large display headline left, subheadline below, pricing/social-proof card right, full-width UI mockup below
- **Surface**: Canvas background, mockup uses dark near-black surface with inner glow
- **Typography**: `{typography.hero-display}` for "Get inspired. Get discovered. Join Landbook." with ink-deep color; `{typography.body-large}` for description
- **Shape**: Mockup container uses 16px radius with complex shadow stack
- **Spacing**: Asymmetric layout with ~60/40 text-to-card ratio, 64px vertical gap to mockup
- **Category tags**: Pill-shaped with icon+label, active state uses dark border

### Pricing Card

- **Anatomy**: "Use for free forever." / "$9 monthly for professionals." text stack, "Join for free" teal button, avatar row with "Used by thousands every day"
- **Surface**: White card with subtle border
- **Typography**: `{typography.body}` for pricing text, `{typography.label}` for button
- **Shape**: Rounded card with internal padding
- **Spacing**: 16px internal gaps, avatar circles overlap slightly

### Testimonial Cards

- **Anatomy**: Quote text top, avatar circle + name/role bottom
- **Surface**: White card with 1px border-light, no shadow
- **Typography**: `{typography.body}` for quote, `{typography.body-strong}` for name, `{typography.body}` in ink-muted for role
- **Shape**: 24px radius, generous internal padding (40px)
- **Composition**: Horizontal scroll carousel with partial next-card visibility, scrollbar track visible
- **Spacing**: 8px gap between cards

### Feature Accordion

- **Anatomy**: Icon + header text left, expand/collapse indicator right, expandable description area
- **Surface**: Warm surface (#F0EFED) for collapsed headers, white for expanded state
- **Typography**: `{typography.label}` for headers, `{typography.body-large}` for expanded description
- **Shape**: 16px radius on items, full-width within container
- **Spacing**: 8px gap between items, 16px internal padding
- **States**: Collapsed shows plus icon, expanded shows close icon and reveals text

### Dotted Canvas

- **Anatomy**: Radial dot-grid background with scattered, slightly rotated website preview cards
- **Surface**: Light warm background with radial-gradient dots at 0.8px size
- **Typography**: "Drag me" pill label in `{typography.label}`
- **Shape**: Large rounded container (24px radius), cards with 16px radius and shadow elevation
- **Composition**: Asymmetric scatter suggesting depth and interactivity
- **Spacing**: Cards overlap canvas edges slightly, creating immersive feel

### Primary Button

- **Anatomy**: Text label, optional icon
- **Surface**: `{colors.accent-teal}` background, white text
- **Typography**: `{typography.label}`
- **Shape**: Pill radius, 4px 12px padding
- **States**: Hover shifts to accent-teal-hover

### Secondary/Ghost Button

- **Anatomy**: Text label, optional icon
- **Surface**: White or transparent background, dark or muted text
- **Typography**: `{typography.label}`
- **Shape**: Pill radius, 1px border in border-light or border-warm
- **Spacing**: 4px 12px padding

## Responsive behavior

The system appears optimized for desktop presentation with centered content columns. At narrower viewports, the asymmetric hero layout should stack vertically: display headline full-width, pricing card below, mockup maintaining full width. The testimonial carousel already suggests horizontal scroll behavior that translates naturally to touch interfaces.

Category tag rows should wrap to multiple lines on narrow screens. The dotted canvas with scattered cards may require simplified composition—fewer visible cards with larger tap targets, or transformation into a vertical scroll of featured examples.

Accordion components maintain their vertical stack across breakpoints, with touch-friendly tap targets (minimum 44px height). Search input in navigation should collapse to icon-only on smallest screens, expanding on tap.

Grid layouts using the 4px gutter system should transition to 2-column then single-column arrangements, maintaining the negative-margin compensation pattern for edge alignment.

## Practical implementation guidance

### Preserve
- The warm off-white canvas as the foundational surface; pure white feels sterile in comparison
- Pill-shaped interactive elements as the consistent rounding language
- Multi-layered shadow stacks for elevated cards rather than single-drop shadows
- The dotted-grid pattern for creative-tool contexts
- Tight display line-height (1) for editorial impact in headings
- Weight-based hierarchy within Inter rather than introducing additional typefaces

### Avoid
- Pure black (#000000) for text; the system's ink values (#2B2A2A, #1D1C1C) provide sufficient contrast with warmth
- Harsh geometric corners on interactive elements; the pill language is defining
- Saturated colors outside the teal accent; the neutral palette exists to showcase user content
- Flat cards without borders or shadows; the subtle elevation system is essential to the gallery aesthetic
- Tight section spacing; the 64px rhythm creates necessary breathing room

### Recommended Build Order
1. Establish canvas and surface color tokens with warm neutrals
2. Implement Inter at 0.875rem base with 1.5 line-height
3. Create pill-shaped button and input components with full rounding
4. Build card component with border-light and subtle shadow
5. Implement hero layout with asymmetric text/card composition
6. Add dotted-grid canvas pattern for feature sections
7. Create accordion with expand/collapse states and warm surface headers
8. Build testimonial carousel with horizontal scroll and partial card visibility

### Accessibility
- Ensure teal accent (#017669) on white meets WCAG AA contrast ratios; test specifically for the "Join for free" button
- Provide visible focus states on pill buttons; consider outline offset or subtle background shift
- Maintain touch targets at minimum 44px for mobile accordion headers and carousel cards
- Include aria-expanded states for accordion components
- Ensure horizontal scroll carousels are keyboard navigable with visible scroll indicators
- Test dotted-grid pattern at reduced opacity does not create visual noise for users with visual processing differences

## Scope note

This guide covers the Land-book marketing and product experience pages visible in the supplied imagery, including hero sections, feature accordions, testimonial carousels, and dotted-grid canvases. Mobile breakpoints, animation specifications, form validation states, and the full website gallery browsing interface are not represented in the available material. The dark UI mockups within promotional imagery demonstrate product context but are not part of the design system tokens. Applesystem and Times are recorded in the source but do not appear as active visual typefaces in the rendered interface.
