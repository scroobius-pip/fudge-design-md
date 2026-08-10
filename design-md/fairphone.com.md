# How fairphone.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/fairphone.com-design)

Last updated: 2026-08-10

## Captured pages

[![Specifications modal overlay showing product color selector, display details, and dimensions list with white background and dark green text.](https://pin.fontofweb.com/10732?format=jpg)](https://design.withfudge.com/share/pin-10732)

[Specifications modal overlay showing product color selector, display details, and dimensions list with white background and dark green text.](https://design.withfudge.com/share/pin-10732)

[![Moments feature section with large serif headline, phone mockup showing Essentials mode, and sparse light gray background layout.](https://pin.fontofweb.com/10731?format=jpg)](https://design.withfudge.com/share/pin-10731)

[Moments feature section with large serif headline, phone mockup showing Essentials mode, and sparse light gray background layout.](https://design.withfudge.com/share/pin-10731)

[![Feature carousel cards showing modularity, expandable storage, and integrated accessories with rounded image containers and dark green headings.](https://pin.fontofweb.com/10730?format=jpg)](https://design.withfudge.com/share/pin-10730)

[Feature carousel cards showing modularity, expandable storage, and integrated accessories with rounded image containers and dark green headings.](https://design.withfudge.com/share/pin-10730)

[![Expanded Shop mega-menu with categorized product columns, promotional card with phone image, and dark green navigation accents on white background.](https://pin.fontofweb.com/10726?format=jpg)](https://design.withfudge.com/share/pin-10726)

[Expanded Shop mega-menu with categorized product columns, promotional card with phone image, and dark green navigation accents on white background.](https://design.withfudge.com/share/pin-10726)

## Overview

Fairphone's design system communicates ethical technology through restraint and clarity. The visual language pairs a warm, near-white canvas with deep forest green as the primary brand voice, punctuated by a sharp lime-yellow accent that appears sparingly on calls-to-action and interactive highlights. The experience feels spacious and unhurried: generous section padding, large product photography, and a clear hierarchy that lets sustainable messaging breathe. Content moves between full-bleed atmospheric imagery and contained, rounded cards that soften the technical nature of smartphone specifications. The overall impression is trustworthy, modern, and distinctly European in its typographic sensibility—functional without coldness, expressive without excess.

## Colors

The palette is intentionally limited, built around a nature-inspired core that reinforces Fairphone's sustainability positioning. Light surfaces dominate, with dark green serving as the primary expressive color rather than black.

| token | value | use |
|---|---|---|
| accent | #D8FF4F | Primary CTA buttons, active states, cart icon, promotional highlights |
| canvas | #F7F7F7 | Page background, section fills, modal backdrop base |
| surface | #FFFFFF | Cards, modals, navigation dropdowns, content panels |
| ink | #1F2021 | Primary headings, body text on light backgrounds |
| ink-secondary | #646462 | Secondary text, captions, metadata, inactive navigation |
| muted | #AAAAAA | Tertiary text, disabled states, subtle borders |
| deep-green | #00433D | Navigation text, feature headings, primary button backgrounds, chat bubble |
| teal | #00786E | Hover states, secondary interactive accents |

The system operates primarily in light mode. Dark text on light surfaces is the default reading experience. The deep green (#00433D) functions as the brand's signature color, appearing in headlines, navigation, and primary actions. The lime accent (#D8FF4F) is reserved for high-priority conversion moments—buy buttons, cart indicators, and key highlights—ensuring it retains visual punch through scarcity. Photography throughout the interface tends toward muted, natural tones that harmonize with the palette rather than competing.

## Typography

Two families create a clear role separation: Bricolage Grotesque carries display and heading voice with characterful serif warmth, while DM Sans handles all body, UI, and functional text with clean geometric neutrality. A system sans-serif stack serves micro-labels and fallback contexts.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Bricolage Grotesque | 7.5rem | 600 | 1.04 | 0 | Hero headlines, major campaign statements |
| section-display | Bricolage Grotesque | 4.5rem | 600 | 1.04 | 0 | Section-leading headlines, product page titles |
| heading-large | Bricolage Grotesque | 2rem | 600 | 1.04 | 0 | Feature card titles, modal headings |
| heading-medium | Bricolage Grotesque | 1.5rem | 400 | 1.04 | 0 | Subsection headings, secondary titles |
| body-large | DM Sans | 1.25rem | 400 | 1.04 | 0 | Lead paragraphs, introductory copy |
| body | DM Sans | 1rem | 400 | 1.16 | 0 | Standard paragraphs, descriptions, lists |
| body-small | DM Sans | 0.875rem | 400 | 1.16 | 0 | Captions, metadata, fine print |
| label | DM Sans | 0.875rem | 600 | 1.16 | 0 | Button text, navigation labels, form labels |
| ui-small | -apple-system | 0.6875rem | 600 | 1 | 0 | Badges, tags, micro-interactions |

Bricolage Grotesque appears exclusively in Semibold (600) for displays and headings, with Regular (400) used selectively for medium headings. DM Sans employs Regular (400) for reading text and Semibold (600) for labels and interactive elements. The system stack handles UI micro-text at 11px with tight 1:1 line-height. Verify licensing for these families before production use.

## Layout

The layout follows a centered, single-column reading model with periodic full-bleed interruptions for hero imagery and atmospheric photography. Maximum content width is constrained by generous horizontal margins—approximately 152px on each side at desktop scale—creating a refined, magazine-like presentation.

Sections stack vertically with substantial vertical rhythm. Standard section padding runs 80px top and bottom; hero and feature sections expand to 120px for emphasis. Internal content uses a 16px base grid with multiples at 8px, 16px, 24px, 32px, and 40px for gaps and component spacing.

The product detail page demonstrates a split composition: editorial copy and headlines occupy the left portion while product renders and phone mockups anchor the right, often breaking the central column to create visual tension. Feature grids use horizontal scrolling carousels on narrower viewports, with navigation arrows appearing as simple chevron icons in deep green.

Modals and overlays center content panels with rounded corners and internal padding of 40px above a dimmed backdrop. The specifications modal shows a two-column internal layout: product imagery and color selector centered above, with specification categories arranged in a heading-plus-list pattern below.

## Visual language

Photography and product renders receive premium treatment. Phone mockups appear at large scale, often extending beyond implied boundaries, with soft shadows that ground them without heaviness. Product images favor clean studio lighting on white or near-white backgrounds, letting hardware details remain visible.

Cards and containers use rounded corners throughout—24px for large feature cards, 4px for small UI elements, and 999px for pill-shaped buttons and tags. This consistent rounding softens the technical product context and reinforces approachability.

Shadows are subtle and functional: a soft 20px-by-30px shadow with teal-tinted darkness lifts modals and dropdowns, while a lighter 4px-by-20px shadow adds depth to cards. An inset 1px highlight on dark surfaces provides delicate dimensionality.

The chat support bubble anchors the bottom-right corner as a persistent floating action, rendered as a solid deep-green circle with a white icon—simple, visible, and unobtrusive.

Iconography throughout is line-based and minimal, favoring clarity over decoration. Navigation icons, specification bullets, and carousel controls share a consistent 1.5px stroke weight.

## Components

### Primary button
- Anatomy: Text label with optional icon, rendered as a pill-shaped container
- Surface: Deep green background (#00433D) with lime accent text (#D8FF4F)
- Typography: `{typography.label}` at 0.875rem Semibold
- Shape: Full pill radius (`9999px`), padding 0.75rem vertical and 1.25rem horizontal
- Spacing: Appears isolated or in button groups with 16px gap
- Variants: A secondary variant inverts to white surface with deep green text and 1px border

### Feature card
- Anatomy: Rounded image container above, heading and description below, optional link with arrow icon
- Surface: White background on light gray canvas, no visible border
- Typography: `{typography.heading-large}` for title, `{typography.body}` for description, `{typography.label}` for link text
- Shape: 24px border radius on image container, content padding 24px–40px
- Composition: Horizontal scroll carousel on product pages, 16px–24px gap between cards
- States: Hover on link text reveals underline and arrow movement

### Specifications modal
- Anatomy: Centered panel with close control, product image with color swatches, categorized specification lists with heading-plus-bullet structure
- Surface: White panel (`#FFFFFF`) over dimmed backdrop (`rgba(31, 32, 33, 0.6)`)
- Typography: `{typography.heading-large}` for "Specifications" title, `{typography.heading-medium}` for category labels, `{typography.body}` for list items
- Shape: 24px panel radius, internal padding 40px
- Spacing: 80px vertical padding around content sections within modal

### Navigation bar
- Anatomy: Logo left, primary links center-left, utility links right, expandable mega-menu on Shop hover
- Surface: White background with subtle bottom border in canvas color
- Typography: `{typography.label}` for primary links, `{typography.body-small}` for dropdown categories
- Shape: Full-width, fixed or sticky positioning, dropdown panels with 24px radius
- Composition: Mega-menu organizes into three columns—Smartphones, Audio, Accessories—with promotional card rightmost

### Chat bubble
- Anatomy: Circular floating button with speech icon
- Surface: Deep green solid fill, white icon
- Shape: Perfect circle via `9999px` radius, approximately 56px diameter
- Position: Fixed bottom-right, 24px–40px from viewport edges

## Responsive behavior

The generous margins and large type scales suggest a breakpoint-driven reduction: section margins should compress to 24px–40px on tablet and 16px–24px on mobile. Hero display type should scale down to `{typography.section-display}` or `{typography.heading-large}` to maintain readability without overflow.

Feature card carousels should become horizontally scrollable on narrower viewports, with touch-friendly swipe gestures replacing arrow navigation. The specifications modal should transition to full-screen or near-full-screen on mobile, with stacked single-column layout replacing the desktop two-column arrangement.

Navigation should collapse to a hamburger menu on mobile, with the mega-menu transforming into accordion sections. The persistent chat bubble should remain visible but shrink slightly to avoid obstructing primary content.

## Practical implementation guidance

### Preserve
- The deep green and lime accent pairing as the primary brand signature; this combination is distinctive and immediately identifiable with Fairphone's ethical positioning
- Generous whitespace around content; the spaciousness communicates quality and intentionality
- The serif/sans pairing of Bricolage Grotesque and DM Sans; the contrast between expressive headings and neutral body text is central to the voice
- Rounded corners on all interactive and image containers; this softens the technical product context
- Large, high-quality product renders that break grid boundaries

### Avoid
- Adding more accent colors; the limited palette is a strength
- Tightening margins or padding; the breathing room is intentional and supports readability
- Using the lime accent for non-actionable decorative elements; its scarcity maintains conversion impact
- Replacing Bricolage Grotesque with a generic sans for headlines; the serif character is part of the brand warmth
- Heavy drop shadows or dimensional effects; the flat, clean surfaces reinforce sustainability values

### Recommended build order
1. Establish the color tokens and typography scale as foundational variables
2. Build the navigation bar with mega-menu behavior and responsive collapse
3. Implement the section spacing system and hero layout patterns
4. Create the button components with primary and secondary variants
5. Develop feature cards with image containers and carousel wrapper
6. Construct the specifications modal with internal grid and color selector
7. Add the persistent chat bubble and shadow system
8. Polish with micro-interactions: link underlines, button hovers, carousel transitions

### Accessibility
- Ensure deep green text on white meets WCAG AA contrast ratios; the #00433D on #FFFFFF combination should be verified
- Provide focus indicators for all interactive elements, using the lime accent or a visible outline
- Maintain logical heading hierarchy: hero-display (h1) through heading-medium (h3) without skips
- Ensure modal close controls are keyboard accessible and trap focus within the modal
- Add aria-labels to icon-only buttons like the chat bubble and carousel arrows
- Respect `prefers-reduced-motion` for any scroll-triggered or hover animations

## Scope note

This guide covers the desktop homepage and product detail page surfaces. Mobile breakpoints, checkout flows, account pages, and animation specifications are not included. Verify all measurements against live implementation before production use.
