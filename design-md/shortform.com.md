# How shortform.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/shortform.com-design)

Last updated: 2026-08-10

## Captured pages

[![Onboarding step with testimonial card featuring Sahil Bloom quote, green circular illustration, and yellow Continue button](https://pin.fontofweb.com/9189?format=jpg)](https://design.withfudge.com/share/pin-9189)

[Onboarding step with testimonial card featuring Sahil Bloom quote, green circular illustration, and yellow Continue button](https://design.withfudge.com/share/pin-9189)

[![Onboarding step showing book stack illustration with Upgrade Your Career heading and green accent text](https://pin.fontofweb.com/9188?format=jpg)](https://design.withfudge.com/share/pin-9188)

[Onboarding step showing book stack illustration with Upgrade Your Career heading and green accent text](https://design.withfudge.com/share/pin-9188)

[![Onboarding introduction with animated book character on green book pile and yellow Continue button](https://pin.fontofweb.com/9187?format=jpg)](https://design.withfudge.com/share/pin-9187)

[Onboarding introduction with animated book character on green book pile and yellow Continue button](https://design.withfudge.com/share/pin-9187)

## Overview

Shortform's onboarding flow presents a clean, centered experience designed to build trust and guide new users through personalized setup. The visual system relies on a near-white canvas with generous breathing room, allowing friendly illustrations and focused content to dominate each step. A single geometric sans-serif typeface—Rotunda—handles all text, creating consistency across headings, body copy, and interface labels. The color palette is intentionally restrained: deep navy ink for primary text, muted gray for secondary information, a vibrant green for accent emphasis, and a warm yellow for the primary action button. The overall impression is approachable and modern, balancing professionalism with the playful character of custom illustrations featuring books, characters, and social proof elements.

## Colors

The color system serves a clear functional hierarchy with warm, humanistic tones.

| token | value | use |
|---|---|---|
| ink | #141C31 | Primary headings, body text, logo wordmark |
| muted-ink | #363B48 | Secondary body text, captions, descriptions |
| medium-gray | #6B6D76 | Tertiary text, subtle labels |
| canvas | #F8F8F8 | Page background, empty states |
| surface | #FFFFFF | Card backgrounds, elevated panels |
| border | #E7EAEE | Card borders, dividers, subtle containers |
| accent-green | #5AA96B | Emphasized words in headings, illustration accents |
| action-yellow | #FFC906 | Primary buttons, progress indicators, logo mark |

The background remains consistently light across all steps, using canvas (#F8F8F8) as the base with surface (#FFFFFF) for elevated card elements. The deep ink (#141C31) provides strong contrast for readability without the harshness of pure black. The accent green appears selectively to highlight key value propositions—"Career" in headings, "Over 15,000 books" in subheadings—creating visual anchors that draw the eye without overwhelming the composition. The action yellow functions as the single call-to-action color, appearing in the Continue button, the progress bar fill, and the logo's geometric mark. This limited palette ensures each color carries clear semantic weight.

## Typography

All text is set in Rotunda, a geometric sans-serif designed by Tipo Type Team. The family is available in Regular (400) and Medium (500) weights. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Rotunda | 2rem | 500 | 1.125 | -0.02em | Step headings, primary value propositions |
| section-display | Rotunda | 1.75rem | 500 | 1.214 | normal | Secondary headings, emphasized statements |
| body | Rotunda | 1.125rem | 400 | 1.5 | normal | Primary body text, button labels |
| body-small | Rotunda | 1rem | 400 | 1.5 | normal | Descriptions, card content |
| caption | Rotunda | 0.875rem | 400 | 1.571 | normal | Fine print, attribution, metadata |
| label | Rotunda | 1.125rem | 400 | 1 | normal | Navigation, step indicators |

The type scale is compact and functional, with clear differentiation between display and body sizes. Headings use Medium weight for emphasis, while all body and interface text remains Regular. Line heights are generous, particularly for body text at 1.5, ensuring comfortable reading during the onboarding process. The hero-display token's slight negative letter spacing (-0.02em) tightens headings optically without feeling compressed. No italic or bold variants are employed in the visible interface.

## Layout

The onboarding flow uses a centered, single-column layout with constrained maximum width. Content is vertically stacked with generous vertical spacing between major sections. The layout prioritizes mobile-first presentation while maintaining comfortable proportions on larger viewports.

The page structure follows a consistent pattern: a fixed header containing the logo and progress indicator, a flexible content area centered both horizontally and vertically, and a persistent action area at the bottom. The header occupies minimal vertical space, using padding of 2.5rem top and 3rem horizontal. The main content area receives substantial top padding (3rem to 6rem depending on step density) to create visual breathing room above illustrations and text.

Content containers use horizontal padding of 3rem on desktop, creating comfortable margins without excessive whitespace. Cards and grouped content receive internal padding of 3rem, with content gaps of 1.5rem between related elements. The bottom action area positions the primary button with adequate clearance from content above, typically using 6rem of bottom padding on the main container.

The centered composition creates a focused, step-by-step rhythm. Each onboarding step presents one primary message with supporting illustration, avoiding cognitive overload. When social proof or testimonials appear, they are contained within rounded cards that sit above the main content flow, creating clear hierarchy through elevation and surface treatment.

## Visual language

The visual identity balances friendly illustration with clean, systematic interface elements. Custom illustrations dominate the content area, featuring flat, colorful characters and objects—stacks of books, anthropomorphic book figures, circular social scenes with avatar clusters. These illustrations use a palette of greens, corals, yellows, and soft blues that complement but remain distinct from the interface color system.

The Shortform logo combines a geometric yellow mark with the wordmark in ink. The mark resembles a stylized open book or folded page, reinforcing the brand's literary focus. This appears centered in the header with the step indicator below.

Progress indication uses a horizontal bar with a thin track in border color and a filled segment in action-yellow. The fill width corresponds to step completion, with a small rounded cap. Step labels appear as muted text above the bar.

Shadows are minimal and soft when present: a subtle combination of white and ink-tinted shadows creates gentle elevation for cards. The visible shadow uses rgba(255, 255, 255, 0.1) and rgba(20, 28, 49, 0.1) layers with moderate blur, producing depth without harshness.

Illustration style is consistently flat with occasional dimensional elements. Characters have simple, expressive faces. Book spines and covers show minimal detail, relying on color blocking and typography to suggest titles. The overall illustration approach feels contemporary and accessible, avoiding either corporate sterility or excessive whimsy.

## Components

### Primary button

The Continue button is the dominant interactive element.

- **Anatomy**: Text label centered within a full-width or fixed-width pill shape
- **Surface**: Solid action-yellow (#FFC906) background
- **Typography**: body token, ink text color
- **Shape**: Fully rounded pill with 53px / 3.3125rem radius
- **Spacing**: Horizontal padding of 2.375rem, height implied by content plus padding
- **Composition**: Centered at bottom of viewport or content area, full width on mobile with comfortable side margins
- **States**: Default state visible

### Progress indicator

A horizontal step tracker appearing below the logo.

- **Anatomy**: Step label text above, horizontal bar below with filled and unfilled segments
- **Surface**: Track uses border color (#E7EAEE), fill uses action-yellow (#FFC906)
- **Typography**: caption token for step label, muted-ink color
- **Shape**: 24px / 1.5rem radius on track ends, creating a soft capsule shape
- **Spacing**: Compact vertical stack, centered with content
- **Composition**: Fixed position in header area, consistent across steps

### Testimonial card

A social proof component featuring user attribution and quote.

- **Anatomy**: Avatar image, name heading, credential line, quote block
- **Surface**: White (#FFFFFF) background with subtle shadow elevation
- **Typography**: Name uses body-small at Medium weight, credentials use caption in muted-ink, quote uses body-small in ink
- **Shape**: 24px / 1.5rem border radius
- **Spacing**: Internal padding of approximately 3rem, avatar overlaps top edge
- **Composition**: Centered within decorative circular illustration frame, stacked vertically

### Content card

Container for step information with illustration and text.

- **Anatomy**: Illustration area, heading, subheading or description
- **Surface**: Transparent or canvas background, no visible border in primary use
- **Typography**: hero-display or section-display for headings, body for descriptions
- **Shape**: No border radius when flush to layout; rounded corners when elevated
- **Spacing**: Generous vertical spacing between illustration and text, typically 3rem to 6rem
- **Composition**: Centered alignment, vertical stack

### Step heading

Primary text element for each onboarding step.

- **Anatomy**: Single or multi-line heading with optional emphasized word in accent-green
- **Surface**: Transparent
- **Typography**: hero-display token, ink color with selective accent-green
- **Shape**: N/A
- **Spacing**: Bottom margin of 1.5rem to following content
- **Composition**: Centered, maximum width constrained for readability

## Responsive behavior

The onboarding flow appears optimized for mobile viewport widths, with content scaling gracefully for larger screens. The centered single-column layout naturally adapts: horizontal padding increases slightly on wider viewports while content max-width prevents excessive line lengths. The Continue button maintains full-width behavior on narrow screens, transitioning to a fixed comfortable width on larger breakpoints if implemented.

Illustrations scale proportionally within their containers, maintaining center alignment. Text sizes should remain consistent across breakpoints to preserve readability, with the compact scale already suited to mobile viewing. The header with logo and progress indicator remains fixed in relative position, ensuring orientation context persists during scroll.

For implementation, consider maintaining the generous vertical spacing on taller viewports to prevent content from feeling compressed. The circular decorative frames around testimonials may scale down on very narrow screens to preserve composition integrity.

## Practical implementation guidance

### Preserve
- The single-typeface system using only Rotunda Regular and Medium
- The generous vertical rhythm with 3rem to 6rem between major elements
- The selective use of accent-green for only one or two words per heading
- The warm yellow action color against near-white backgrounds
- The friendly, flat illustration style with simple character expressions
- The pill-shaped button with fully rounded ends

### Avoid
- Introducing additional font families or weights beyond Rotunda Regular and Medium
- Using pure black (#000000) for text; the specified ink (#141C31) is warmer and more readable
- Adding borders or heavy shadows to cards; the system prefers subtle elevation or clean flat surfaces
- Cluttering steps with multiple calls-to-action; maintain one primary Continue button per view
- Shrinking body text below 1rem; the 1.125rem base supports comfortable reading

### Recommended build order
1. Establish the canvas background and centered layout container with max-width constraint
2. Implement the type scale with Rotunda at all specified sizes
3. Build the header with logo mark and wordmark, progress indicator track and fill
4. Create the pill button component with full rounding and action-yellow surface
5. Develop content card patterns with illustration areas and text stacks
6. Add testimonial card with avatar overlap and shadow elevation
7. Refine spacing tokens and vertical rhythm across all step variations

### Accessibility
- Ensure the action-yellow button meets contrast requirements; the ink text on yellow should verify at 4.5:1 minimum
- Provide visible focus states for the Continue button, likely an outline or slight darkening
- Maintain the logical step progression through progress indicator for screen reader users
- Preserve heading hierarchy with h1 for step titles, avoiding skipped levels
- Consider adding aria-labels to purely decorative illustrations to prevent screen reader verbosity

## Scope note

This guide covers the Shortform onboarding flow at shortform.com/app/onboarding. It documents the visual system as seen in the step-by-step introduction, career upgrade, and social proof testimonial views. Navigation patterns beyond the Continue button, form inputs, selection controls, and post-onboarding application interfaces are not represented in the supplied material. Motion, animation timing, and additional breakpoint behaviors should be verified during implementation.
