# How patreon.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/patreon.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dark login screen with centered white social auth buttons, email input field, and muted legal copy on near-black background](https://pin.fontofweb.com/2532?format=jpg)](https://design.withfudge.com/share/pin-2532)

[Dark login screen with centered white social auth buttons, email input field, and muted legal copy on near-black background](https://design.withfudge.com/share/pin-2532)

[![Olive-green pricing section with oversized black display type and white rounded feature cards in a grid layout](https://pin.fontofweb.com/2531?format=jpg)](https://design.withfudge.com/share/pin-2531)

[Olive-green pricing section with oversized black display type and white rounded feature cards in a grid layout](https://design.withfudge.com/share/pin-2531)

[![White pricing panel with large 10% figure, checkmark list items, and section headings on sage green background](https://pin.fontofweb.com/2530?format=jpg)](https://design.withfudge.com/share/pin-2530)

[White pricing panel with large 10% figure, checkmark list items, and section headings on sage green background](https://design.withfudge.com/share/pin-2530)

[![Homepage hero with full-bleed creator photography, white oversized headline overlay, and pill-shaped navigation buttons](https://pin.fontofweb.com/2529?format=jpg)](https://design.withfudge.com/share/pin-2529)

[Homepage hero with full-bleed creator photography, white oversized headline overlay, and pill-shaped navigation buttons](https://design.withfudge.com/share/pin-2529)

## Overview

Patreon's design system serves a dual-audience platform connecting creators with their supporters. The visual language shifts dramatically between functional authentication surfaces and expressive marketing pages. The authentication experience immerses users in a near-black environment with centered, stacked controls that reduce friction for account creation and login. Marketing pages employ a warm, editorial aesthetic with sage-green backgrounds, oversized display typography that breaks conventional scale, and rounded white cards that float above colored surfaces. This contrast between dark utility and light expression mirrors the platform's purpose: serious infrastructure for creative freedom. The system relies on a single variable type family with optical-size variation, allowing seamless transitions from monumental headlines to readable body copy without changing font files.

## Colors

The palette operates in two distinct modes: a dark authentication mode and a light marketing mode, unified by consistent ink and canvas values.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, button fills, logo, and iconography across all surfaces |
| canvas | #ffffff | Card backgrounds, button text on dark fills, and hero text overlays on photography |
| muted-ink | #666666 | Secondary body text, feature descriptions, and legal copy |
| surface-dark | #0d0d0d | Authentication page background, creating immersive focus on input controls |
| surface-elevated | #2a2a2a | Input field backgrounds on dark surfaces, providing subtle separation from page background |
| border-subtle | #999999 | Divider lines, disabled states, and tertiary boundaries |
| accent-sage | #a8b894 | Marketing section backgrounds, providing warm, organic context for feature cards |
| accent-warm | #c4a574 | Photographic accent tones, supporting imagery warmth without direct UI application |

The dark authentication mode uses surface-dark as its foundation, with canvas text and elevated surfaces for interactive elements. The marketing mode inverts this relationship, placing canvas cards against accent-sage backgrounds with ink text. The accent colors derive from photographic and environmental tones visible across the homepage and pricing imagery, grounding the digital interface in physical, creative workspace contexts. No gradient or shadow tokens are defined in the retained values; the system relies on flat color blocking and spatial separation rather than dimensional effects.

## Typography

Patreon employs two related variable font families from Dinamo: Patreon Oracle Plus Variable for display and headline settings, and Abc Oracle Plus Variable Regular for body, label, and interface text. Both were designed by Johannes Breyer, Andree Paat, and Robert Janes. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Patreon Oracle Plus Variable | 8rem | 400 | 0.9 | -0.03em | Homepage hero headlines, full-bleed photographic overlays |
| section-display | Patreon Oracle Plus Variable | 6rem | 400 | 0.95 | -0.02em | Pricing page headlines, section-leading typography |
| heading-large | Patreon Oracle Plus Variable | 3rem | 400 | 1.1 | -0.01em | Feature card titles, subsection headings |
| body | Abc Oracle Plus Variable Regular | 1rem | 400 | 1.5 | 0 | Paragraph text, descriptions, list items |
| body-small | Abc Oracle Plus Variable Regular | 0.875rem | 400 | 1.5 | 0 | Compact descriptions, card body text |
| label | Abc Oracle Plus Variable Regular | 0.75rem | 400 | 1.4 | 0.01em | Navigation items, button labels, captions |
| navigation | Abc Oracle Plus Variable Regular | 0.875rem | 400 | 1 | 0 | Primary navigation, category links |

The display sizes exploit the variable font's optical sizing for tight tracking and compressed line height, creating dramatic visual presence without sacrificing legibility. Body sizes maintain generous leading for extended reading. The type scale builds from a 0.25rem relative unit, with sizes at 3rem, 6rem, and 8rem representing whole-number multiples of the 4px base.

## Layout

The layout system alternates between centered, narrow-column authentication flows and full-bleed, asymmetric marketing compositions.

Authentication pages constrain content to a single centered column approximately 24rem wide, with stacked elements separated by 0.75rem gaps. Social authentication buttons fill this width, while email input and continue actions maintain consistent horizontal margins. This narrow focus eliminates peripheral distraction during account creation.

Marketing pages employ a fluid container with generous horizontal padding, estimated at 4rem on desktop based on visible card positioning. The hero section uses full-viewport photography with overlaid text positioned in the lower-left quadrant, creating asymmetrical balance against the right-weighted imagery. Below the hero, content sections alternate between full-bleed colored backgrounds and contained white card grids.

The feature card grid visible in the pricing section uses three columns with 1.5rem gutters, each card maintaining internal padding of 2rem. Cards are not uniform in height based on content; the system appears to allow natural height variation rather than forced equalization.

Section spacing follows a 6rem vertical rhythm, with 3rem gaps between related content clusters within sections. This creates breathable pacing between the dense information architecture of feature lists and the expansive display typography of section headers.

## Visual language

The visual character balances creator authenticity with platform credibility. Photography dominates the homepage hero, showing real creators in their workspaces with natural lighting and unposed compositions. Text overlays on photography use canvas color at massive scale, trusting the image's tonal range to maintain contrast rather than applying dark scrims or gradient overlays.

The rounded corner language is pronounced: cards use 1.5rem radius, buttons are fully pill-shaped at 9999px, and even the Patreon logo mark carries organic, asymmetrical curves that echo the button treatment. This softness counteracts the stark black-and-white palette, preventing the interface from feeling corporate or sterile.

Iconography appears as simple, filled shapes—checkmarks for feature lists, category icons for feature cards—rendered in ink at 1.5rem size. No outlined or multi-weight icon system is visible; the visual weight remains consistent with the flat, confident typography.

The sage green accent background (accent-sage) provides the primary color expression beyond black and white, appearing in large surface areas behind white cards. This limited palette discipline ensures that creator photography and colorful work samples remain the focal point rather than competing interface chrome.

## Components

### Primary button

- **Anatomy**: Text label centered within a pill-shaped container
- **Surface**: Ink background with canvas text, or canvas background with ink text for secondary variant
- **Typography**: label token, 0.75rem size
- **Shape**: Full pill radius at 9999px
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Inline with other navigation elements or stacked in authentication flows
- **Variants**: Filled (ink/canvas) for primary actions; outlined (canvas/ink with border) for secondary actions

### Secondary button / social auth button

- **Anatomy**: Brand icon left-aligned with centered text label, full-width container
- **Surface**: Canvas background with ink text and 1px ink border
- **Typography**: body-small token for readable social provider names
- **Shape**: 0.5rem radius, creating rounded rectangle rather than full pill
- **Spacing**: 0.875rem vertical padding, matching authentication input height
- **Composition**: Stacked vertically with 0.75rem gap between buttons

### Feature card

- **Anatomy**: Icon at top-left, heading below, body text beneath heading
- **Surface**: Canvas background with ink text
- **Typography**: heading-large for titles, body-small for descriptions
- **Shape**: 1.5rem border radius
- **Spacing**: 2rem internal padding, icon positioned at top-left with 1.5rem margin to heading
- **Composition**: Grid arrangement with 1.5rem gutters, natural height based on content

### Authentication input

- **Anatomy**: Single-line text field with placeholder text
- **Surface**: surface-elevated background with canvas text
- **Typography**: body token for input text
- **Shape**: 0.5rem radius
- **Spacing**: 0.875rem vertical padding, 1rem horizontal padding
- **Composition**: Full-width within centered authentication column, stacked below social auth options

### Navigation bar

- **Anatomy**: Logo centered, primary links left-aligned, utility actions right-aligned
- **Surface**: Transparent over hero photography, transitioning to canvas on scroll
- **Typography**: navigation token for primary links, label token for pill-shaped category buttons
- **Shape**: Category buttons use full pill radius; utility buttons use outlined pill treatment
- **Spacing**: 1.5rem horizontal gap between navigation clusters
- **Composition**: Fixed or sticky positioning at viewport top

### Pricing panel

- **Anatomy**: Large percentage figure left-aligned with explanatory text right-aligned, followed by grouped checkmark lists
- **Surface**: Canvas background with ink text, appearing as elevated card or full section
- **Typography**: section-display for percentage figure, heading-large for group titles, body for list items
- **Shape**: When card-contained, uses 1.5rem radius
- **Spacing**: 2rem between percentage header and list groups, 1rem between list items
- **Composition**: Asymmetric two-column header with single-column lists below

## Responsive behavior

The design system should maintain its core character across viewport sizes while adapting layout density. The authentication column remains centered and narrow regardless of viewport, though touch targets should expand to minimum 44px height on mobile devices.

Marketing page display typography should scale down proportionally: hero-display at 8rem on desktop may reduce to 4rem on tablet and 2.5rem on mobile, maintaining the tight tracking and line height ratios. The three-column feature card grid should collapse to two columns on tablet and single column on mobile, with cards maintaining their 2rem internal padding.

Navigation should collapse to a hamburger menu on mobile, with the centered logo remaining visible. The full-bleed hero photography should maintain aspect ratio rather than cropping, potentially shifting to a taller portrait orientation on narrow viewports.

Category pill buttons in the navigation dropdown should stack vertically on mobile rather than maintaining their horizontal arrangement.

## Practical implementation guidance

### Preserve
- The extreme scale contrast between display headlines and body text; this is the system's most distinctive characteristic
- Full pill shapes for primary actions; partial rounding only for inputs and secondary surfaces
- The warm sage background against pure white cards; this combination creates recognizable Patreon context
- Real photography with natural lighting in hero sections; avoid stock imagery or illustrated replacements
- Tight tracking on display sizes; the negative letter spacing is essential to the compact, confident headline appearance

### Avoid
- Adding gradient overlays to hero photography; the system relies on direct image contrast
- Using border-radius values between 0.5rem and 1.5rem for cards; commit to the pronounced 1.5rem or use sharp corners
- Mixing additional font families; the Oracle variable family handles all weights and sizes
- Darkening the authentication background further; the current surface-dark provides sufficient depth without becoming pure black
- Adding drop shadows to cards; spatial separation and color contrast provide adequate hierarchy

### Recommended build order
1. Establish the type scale with Patreon Oracle Plus Variable loaded and optical-size axis configured
2. Implement the authentication flow with centered column, dark surface, and stacked social buttons
3. Build the navigation with centered logo, pill-shaped category buttons, and transparent-to-solid scroll behavior
4. Create the hero section with full-bleed photography and oversized canvas text overlay
5. Develop the feature card component with icon, heading, and body text arrangement
6. Compose the pricing section with asymmetric percentage header and checkmark list groups

### Accessibility
- Ensure canvas text on hero photography meets WCAG AA contrast against the darkest image regions; test with actual photography rather than placeholder images
- Provide visible focus indicators on dark authentication inputs; the surface-elevated background may require adjusted focus ring color
- Maintain logical tab order through stacked social auth buttons before reaching email input
- Use aria-label for icon-only elements in feature cards if icons lack accompanying visible text
- Respect reduced-motion preferences for any scroll-triggered animations; the still-image documentation does not confirm motion behavior

## Scope note

This guide covers the Patreon homepage and pricing marketing surfaces, plus the login authentication flow. Creator dashboard interfaces, membership tiers, checkout flows, and mobile-native applications are not represented. Measurements are practical adaptation targets derived from visible compositions. No motion, interaction, or dark-mode marketing variants are documented in the supplied materials.
