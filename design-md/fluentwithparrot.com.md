# How fluentwithparrot.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/fluentwithparrot.com-design)

Last updated: 2026-08-10

## Captured pages

[![Parrot+ subscription checkout page with email input, payment method selection, and blue Start trial button on light gray background](https://pin.fontofweb.com/5404?format=jpg)](https://design.withfudge.com/share/pin-5404)

[Parrot+ subscription checkout page with email input, payment method selection, and blue Start trial button on light gray background](https://design.withfudge.com/share/pin-5404)

[![Premium trial page with timeline showing learning milestones and selectable Weekly versus Monthly pricing cards](https://pin.fontofweb.com/5403?format=jpg)](https://design.withfudge.com/share/pin-5403)

[Premium trial page with timeline showing learning milestones and selectable Weekly versus Monthly pricing cards](https://design.withfudge.com/share/pin-5403)

[![Onboarding completion screen with green checkmark, feature benefit cards, and blue Continue button](https://pin.fontofweb.com/5402?format=jpg)](https://design.withfudge.com/share/pin-5402)

[Onboarding completion screen with green checkmark, feature benefit cards, and blue Continue button](https://design.withfudge.com/share/pin-5402)

[![Personalized learning plan loading screen with orange parrot logo, progress bar, and testimonial card with star rating](https://pin.fontofweb.com/5401?format=jpg)](https://design.withfudge.com/share/pin-5401)

[Personalized learning plan loading screen with orange parrot logo, progress bar, and testimonial card with star rating](https://design.withfudge.com/share/pin-5401)

## Overview

Parrot's design system presents a clean, approachable interface for language learning that prioritizes clarity and forward momentum. The visual language centers on a near-white canvas with energetic blue actions and warm orange brand accents, creating an environment that feels both professional and encouraging. The interface employs generous whitespace, rounded rectangular cards, and a consistent vertical rhythm to guide users through onboarding sequences, subscription decisions, and payment flows without visual fatigue.

The system is built for mobile-first presentation, with content constrained to a readable maximum width and centered on the viewport. Every screen maintains a clear hierarchy: a prominent header establishes context, the middle area presents the primary content in stacked cards or forms, and a persistent action button anchors the bottom of the viewport. This predictable structure helps users maintain orientation as they progress through multi-step flows.

## Colors

| token | value | use |
|---|---|---|
| action | #0A84FF | Primary buttons, active states, progress indicators, selected borders, timeline active steps |
| action-hover | #0077E6 | Button hover and pressed states |
| brand-orange | #F5A623 | Logo wordmark, brand moments, accent highlights |
| success | #34C759 | Completion checkmarks, positive confirmations |
| ink | #1C1C1E | Primary headings, body text, input values |
| ink-secondary | #3A3A3C | Secondary headings, emphasized labels |
| muted-ink | #8E8E93 | Placeholder text, captions, inactive timeline elements, footer links |
| canvas | #F2F2F7 | Page background behind cards and forms |
| surface | #FFFFFF | Cards, input fields, elevated content containers |
| surface-elevated | #FFFFFF | Selected pricing cards with active border |
| border | #E5E5EA | Card outlines, input borders, dividers, inactive progress tracks |
| border-active | #0A84FF | Selected state outlines, focused inputs |
| timeline-inactive | #E5E5EA | Pending timeline connector lines |

The color system operates in a light mode exclusively across all visible screens. The canvas provides a subtle warm gray that separates content areas without harsh contrast. Against this, pure white cards float with light borders, creating gentle elevation without shadows. The action blue dominates interactive moments—buttons, selected states, and progress—while the brand orange appears more sparingly in the logo and celebratory moments. Success green marks completion states. The ink scale runs from near-black for primary content through medium gray for secondary information to muted gray for placeholders and legal text. No dark mode or additional accent colors are visible in the current interface.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Poppins | 2rem | 600 | 1.2 | -0.01em | Page titles, onboarding headlines, subscription headers |
| section-display | Poppins | 1.5rem | 600 | 1.25 | -0.01em | Card titles, feature headings, pricing plan names |
| body | Poppins | 1rem | 400 | 1.5 | 0em | Descriptions, form labels, testimonial quotes, timeline body |
| body-bold | Poppins | 1rem | 600 | 1.5 | 0em | Feature titles, emphasized prices, button labels |
| label | Poppins | 0.875rem | 400 | 1.4 | 0em | Input labels, secondary descriptions, timeline dates |
| caption | Poppins | 0.75rem | 400 | 1.4 | 0em | Legal text, fine print, footer links, disclaimers |
| navigation | Poppins | 1rem | 500 | 1.5 | 0em | Back buttons, top bar actions |

The type system relies entirely on Poppins, a geometric sans-serif with open apertures and friendly curves that reinforce the approachable brand character. Weights are used distinctly: 600 for all headings and primary actions, 500 for navigation elements, and 400 for body and supporting text. The scale is compact, with display sizes tightly leaded for impact and body sizes generously spaced for readability. Negative tracking on headlines prevents looseness at larger sizes. Verify licensing for these families before production use.

## Layout

The layout follows a centered, single-column pattern optimized for mobile viewports. Content is constrained to a maximum width of approximately 28rem, centered with automatic margins, ensuring comfortable reading without excessive line lengths. The page canvas extends full-width in a light gray, while all interactive and readable content lives within this central column.

Vertical spacing follows a consistent rhythm. Between major sections, 1.5rem gaps separate content groups. Within cards, 1rem padding provides breathable internal space. The bottom of each screen reserves space for a full-width primary action button, typically positioned with 1rem page padding from the viewport edge.

Cards stack vertically with standard gaps, each card being a rounded rectangle with uniform padding. Form inputs follow the same width constraints as cards, with internal field spacing of 0.75rem vertical and 1rem horizontal. The timeline component introduces horizontal structure within the vertical flow: circular icons align left with text content offset to their right, connected by vertical lines that create a sense of progression.

The top of screens varies by context. Some show only the centered logo; others include a back arrow left-aligned and a progress indicator spanning most of the header width. The parrot mascot icon appears in the upper right on certain screens, adding brand personality without disrupting the content hierarchy.

## Visual language

The visual character is clean, optimistic, and systematically friendly. Rounded corners appear everywhere—cards, buttons, inputs, and avatar containers—creating a soft, approachable feel that avoids any harsh edges. The corner radius of 0.75rem on cards and buttons is substantial enough to feel modern without becoming playful or childish.

Progress indication is a recurring motif. Linear progress bars appear at the top of onboarding screens, with rounded caps and a bright blue fill against a light gray track. Timeline steps use circular icons with internal symbols, connected by vertical lines that fill with blue as steps complete. These elements transform abstract process states into tangible visual progress.

Photography and illustration are minimal but purposeful. User avatars appear as circular crops. The parrot mascot provides brand recognition in small doses. Emoji-style icons accompany feature benefits, adding quick visual scanning cues without custom iconography. Star ratings use filled yellow shapes for social proof.

The absence of shadows is notable—elevation is communicated solely through background contrast and border definition. This flat approach keeps the interface feeling lightweight and fast, appropriate for an app-like experience.

## Components

### Primary Action Button

- **Anatomy**: Full-width rectangular button with centered text label
- **Surface and text color**: Solid action blue background with white text
- **Typography**: body-bold token, 1rem at weight 600
- **Shape**: 0.75rem border radius, no border
- **Spacing**: 1rem vertical padding, 1.5rem horizontal padding
- **Composition**: Spans full width of content area minus page padding
- **Variants**: Default state as described; selected pricing plan cards use similar visual weight but different context

### Pricing Selection Card

- **Anatomy**: Rounded rectangle containing plan name, price display, and selection indicator
- **Surface and text color**: White background with ink text; selected variant uses action blue border
- **Typography**: section-display for plan name, body for price details
- **Shape**: 0.75rem border radius, 1px default border or 2px active border
- **Spacing**: 1rem internal padding
- **Composition**: Two cards appear side by side with small gap; selected card shows checkmark icon
- **Variants**: Unselected with gray border; selected with action border and blue checkmark; promotional badge overlays top edge with "7 DAYS FREE" label

### Feature Benefit Card

- **Anatomy**: Horizontal row with leading icon, bold title, and description text
- **Surface and text color**: White background, ink-secondary title, muted-ink description
- **Typography**: body-bold for title, body for description
- **Shape**: 0.75rem border radius
- **Spacing**: 1rem padding, icon sized to text line height
- **Composition**: Full-width cards stack vertically with small gaps; icons left-aligned with text block to right

### Testimonial Card

- **Anatomy**: Centered layout with circular avatar, star rating, author name, and quote text
- **Surface and text color**: White background, ink text, yellow star fills
- **Typography**: body for quote and name, implicit star iconography
- **Shape**: 0.75rem border radius, circular avatar at 50%
- **Spacing**: 1.5rem padding, avatar centered above text
- **Composition**: Vertically stacked centered elements with consistent spacing

### Text Input

- **Anatomy**: Labeled field with placeholder or value text
- **Surface and text color**: White background, ink value text, muted-ink placeholder, ink-secondary label
- **Typography**: label for field name, body for input content
- **Shape**: 0.5rem border radius, 1px border
- **Spacing**: 0.75rem vertical padding, 1rem horizontal padding
- **Composition**: Full-width within form area, label positioned above input with small gap

### Timeline Step

- **Anatomy**: Vertical sequence of circular icons with connecting line and text block
- **Surface and text color**: Active steps use action blue icon fill and line; inactive steps use muted-ink icon and timeline-inactive line
- **Typography**: label for date prefix, body for description
- **Shape**: Circular icons with internal symbols, straight vertical connector
- **Spacing**: Consistent vertical rhythm between steps
- **Composition**: Icon and text aligned horizontally, line extends below to next step

### Progress Bar

- **Anatomy**: Horizontal track with partial fill
- **Surface and text color**: Light gray track, action blue fill
- **Shape**: Fully rounded caps (pill shape), 0.5rem height
- **Composition**: Centered horizontally, width approximately one-third of content area for indeterminate loading

## Responsive behavior

The visible interface is optimized for narrow viewports, with all content scaling within a centered maximum width container. On wider viewports, the same centered column should persist, maintaining the readable line lengths and touch-friendly tap targets established in the mobile view. The full-width button pattern should remain, expanding to fill the content column rather than the entire viewport.

The pricing card layout, which shows two cards side by side, should maintain its two-column arrangement at moderate widths but could stack vertically on the narrowest viewports if horizontal space becomes constrained. Form inputs and timeline components should retain their single-column structure across all widths.

## Practical implementation guidance

### Preserve
- The centered content column with generous canvas margins; this creates focus and reduces cognitive load
- The consistent 0.75rem border radius on all interactive containers; this unifies the visual system
- The full-width primary action button anchored near the viewport bottom; this creates clear forward momentum
- The weight distinction between headings (600) and body (400) without introducing additional weights
- The flat, shadowless elevation model using only background contrast and borders

### Avoid
- Adding drop shadows to cards or buttons; the flat aesthetic is intentional
- Using the brand orange for primary actions; reserve it for logo and accent moments to maintain blue's action association
- Introducing additional font families; Poppins carries the entire typographic load effectively
- Making the content column wider than approximately 28rem; readability suffers and the intimate scale is lost
- Using half-step or arbitrary font sizes; stick to the 4px grid-based scale

### Recommended Build Order
1. Establish the canvas background and content column constraints
2. Implement the type scale with Poppins at all specified sizes and weights
3. Build the primary action button component with full-width behavior
4. Create the card component with configurable border and selection states
5. Implement form inputs with consistent labeling and spacing
6. Add the timeline and progress indicator components
7. Polish with brand orange accents and success states

### Accessibility
- Ensure the action blue (#0A84FF) on white meets WCAG AA contrast requirements for text; if it falls short, darken to action-hover for small text
- Maintain visible focus indicators on all interactive elements, using the border-active color
- Provide clear error states for form validation with distinct color and iconography
- Ensure touch targets meet minimum 44px height for all buttons and inputs
- When implementing the timeline, convey step status through text and icon changes, not color alone

## Scope note

This guide covers the onboarding, premium selection, and subscription checkout surfaces visible in the supplied images. The broader learning application interface, dashboard, lesson player, settings pages, and any dark mode are not represented. Measurements are practical adaptation targets derived from visual inspection. Verify licensing for Poppins before production use.
