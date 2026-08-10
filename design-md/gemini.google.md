# How gemini.google is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/gemini.google-design)

Last updated: 2026-08-10

## Captured pages

[![Subscription benefits section with four-column feature grid, blue accent text, and pill-shaped plan toggle between Google AI Pro and Ultra.](https://pin.fontofweb.com/6640?format=jpg)](https://design.withfudge.com/share/pin-6640)

[Subscription benefits section with four-column feature grid, blue accent text, and pill-shaped plan toggle between Google AI Pro and Ultra.](https://design.withfudge.com/share/pin-6640)

[![Hero section for Nano Banana Pro with centered headline, blue gradient product name, body copy, and rounded blue primary action button.](https://pin.fontofweb.com/4978?format=jpg)](https://design.withfudge.com/share/pin-4978)

[Hero section for Nano Banana Pro with centered headline, blue gradient product name, body copy, and rounded blue primary action button.](https://design.withfudge.com/share/pin-4978)

[![Image generation showcase with large rounded photo frame, thumbnail selectors, and blue accent word in the section headline.](https://pin.fontofweb.com/4977?format=jpg)](https://design.withfudge.com/share/pin-4977)

[Image generation showcase with large rounded photo frame, thumbnail selectors, and blue accent word in the section headline.](https://design.withfudge.com/share/pin-4977)

[![FAQ accordion with left-aligned section title, chevron expand indicators, and blue inline text links within expanded answer content.](https://pin.fontofweb.com/4976?format=jpg)](https://design.withfudge.com/share/pin-4976)

[FAQ accordion with left-aligned section title, chevron expand indicators, and blue inline text links within expanded answer content.](https://design.withfudge.com/share/pin-4976)

## Overview

The Gemini marketing site presents Google's AI products through a restrained, confident visual system. The design prioritizes clarity and breathing room: large type sits in open space, photography and generated imagery appear in softly rounded frames, and a single blue accent color guides attention to product names, calls to action, and interactive highlights. The overall impression is technological without being cold—warm whites, approachable rounded corners, and human-centered imagery keep the experience grounded.

The system serves two primary page types visible in the supplied material: subscription and feature-overview pages. Subscription pages use structured grids to compare benefits across plans, while feature pages rely on centered hero compositions, full-bleed media showcases, and accordion FAQs to tell product stories. Both share the same foundational vocabulary of type, space, and surface.

## Colors

The palette is intentionally minimal, built around a near-white canvas with black typography and a single vibrant blue for interactive emphasis.

| token | value | use |
|---|---|---|
| action | #078EFB | Primary buttons, active toggle states, inline links, and accent words in headlines |
| ink | #000000 | Primary text, headings, and iconography |
| muted-ink | #666666 | Secondary body text, descriptions, and supporting copy |
| canvas | #FFFFFF | Page background, card surfaces, and button text on dark surfaces |
| surface | #E5E5E5 | Subtle borders, divider lines, and inactive toggle backgrounds |
| border | #E5E5E5 | Hairline rules and outline button borders |

The blue accent (#078EFB) carries the brand's energy. It appears selectively—never as a background wash, always as a precise signal: the word "Style" in a headline, the fill of a primary button, the active pill in a plan selector. Black ink provides maximum contrast for readability, while muted ink softens descriptive paragraphs so they recede behind headings. The near-absence of additional colors keeps focus on product imagery, which supplies its own chromatic variety.

## Typography

Google Sans and Google Sans 18 Pt are the supplied font families. Google Sans serves as the primary type family across all visible interface text, used in Regular and Medium weights. The system relies on size and weight contrast rather than multiple families to establish hierarchy. Google Sans 18 Pt is present in the source files but not visibly deployed in the captured interface elements; it may be reserved for specific display contexts or alternate loading scenarios not represented in the supplied images.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Google Sans | 3rem | 500 | 1.1 | -0.04em | Page hero headlines, centered above feature descriptions |
| section-display | Google Sans | 2.5rem | 500 | 1.15 | -0.03em | Section titles, left-aligned in FAQ and feature areas |
| body | Google Sans | 1rem | 400 | 1.5 | normal | Primary paragraphs, feature descriptions, and accordion answers |
| body-small | Google Sans | 0.875rem | 400 | 1.4 | 0.006em | Tighter spaces, captions, and fine print |
| label | Google Sans | 1.125rem | 500 | 1.4 | 0.006em | Button labels and emphasized UI text |
| navigation | Google Sans | 1rem | 500 | 1.5 | normal | Nav items and plan toggle options |

Tight negative tracking on display sizes gives headlines a modern, compact presence. Body text maintains comfortable readability with neutral tracking and generous line height. The Medium weight (500) is reserved for headings, labels, and active states; Regular (400) carries all descriptive content. Verify licensing for these families before production use. Google Sans is attributed to Google Inc.

## Layout

The layout system is center-weighted and generous. Maximum content widths are constrained and centered, with substantial horizontal padding that scales with viewport size. The exact padding of 368px on either side at desktop widths creates a narrow, focused reading column for text-heavy sections, while media showcases break into wider frames.

Vertical rhythm follows a clear cadence. Section spacing of 3.5rem separates major content blocks. Within sections, content gaps of 1rem stack related elements—headline over body, body over button. Larger margins of 3.5rem to 3.75rem appear between section headlines and their supporting grids or media.

The four-column feature grid on subscription pages distributes equal-width cards with icon, title, description, and media thumbnail in vertical stacks. This grid collapses responsively; at narrower widths, cards should stack to two columns then single column while maintaining internal spacing proportions.

Media frames use rounded rectangles with 1.5rem corner radius, creating a soft container that contrasts with the sharp rectangularity of the page canvas. These frames often hold photographic or generated imagery and may include internal UI chrome—thumbnails, selectors, or preview controls—nested with smaller 0.5rem radius corners.

## Visual language

The visual language balances Google's systematic precision with approachable warmth. Rounded corners appear everywhere: media frames, buttons, thumbnails, and toggle containers. The pill shape (6.25rem radius) is reserved for buttons and plan selectors, creating a friendly, tactile quality that invites interaction.

Imagery plays a central role. Generated and photographic content sits in large, rounded frames that dominate feature sections. Thumbnail selectors appear as small rounded squares along frame edges, suggesting a gallery or carousel interface. A subtle sparkle or decorative mark occasionally appears near imagery, adding light personality without clutter.

The blue accent operates as a narrative device. In headlines, specific words receive blue color to emphasize product names or key benefits—"and other benefits," "Nano Banana Pro," "Style." This creates visual anchors that scan before the reader processes full sentences. Inline links in body copy use the same blue, maintaining a consistent interactive signal.

Dividers are minimal: 1px solid lines in surface color separate accordion items and section boundaries. No shadows, gradients, or glass effects appear in the visible interface. The flatness keeps attention on content and interaction states.

## Components

### Primary action button

- **Anatomy**: Text label centered within a pill-shaped container
- **Surface**: Solid action blue (#078EFB) background with canvas white text
- **Typography**: label token at 1.125rem, Medium weight
- **Shape**: Full pill with 6.25rem border radius
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Centered within its container, often appearing below body copy with 1rem top margin

### Secondary action button / plan toggle

- **Anatomy**: Paired text options within a rounded outline container
- **Surface**: Canvas background with surface border; active state fills with action blue and switches text to canvas white
- **Typography**: label token, Medium weight
- **Shape**: Full pill container with individual pill segments
- **Spacing**: Tight internal padding, generous external margin
- **Variants**: Default (outline), active (filled blue)

### Feature card

- **Anatomy**: Vertical stack of icon, title, description, and optional media thumbnail
- **Surface**: Transparent or canvas background; no visible card border
- **Typography**: Title uses body token at Medium weight; description uses body token at Regular weight in muted ink
- **Shape**: No border radius on the card itself; internal media uses panel radius
- **Spacing**: Icon sits above title with 1rem gap; description follows with 0.75rem gap; media thumbnail appears below with 1.5rem top margin
- **Composition**: Equal-width columns in a row of four; stacks vertically on narrow viewports

### Media frame

- **Anatomy**: Large rounded container for imagery, with optional thumbnail selectors and decorative sparkle
- **Surface**: Surface color (#E5E5E5) or photographic fill
- **Shape**: 1.5rem border radius with overflow hidden
- **Composition**: Full-width within content constraints; thumbnail selectors positioned at left or right edges with 0.5rem radius

### Accordion / FAQ item

- **Anatomy**: Question text with right-aligned chevron icon; expandable answer area below
- **Surface**: Transparent background; 1px surface border separates items
- **Typography**: Question uses section-display token at smaller size or body token Medium; answer uses body token Regular in muted ink
- **Shape**: No border radius
- **Spacing**: Generous vertical padding within each item; answer text indented or aligned with question
- **States**: Collapsed (chevron down), expanded (chevron up, answer visible)
- **Composition**: Left section title ("Frequently asked questions") balances right-aligned accordion stack in a two-column layout at desktop

## Responsive behavior

The center-weighted layout adapts gracefully to narrower viewports. At desktop widths, the 368px side padding creates a focused reading experience. This padding should reduce progressively—first to 160px, then to 16px—maintaining readable line lengths without excessive whitespace.

The four-column feature grid should collapse to two columns at tablet widths and single column on mobile, with card internal spacing preserved. Media frames should remain full-width within the content column, maintaining their 1.5rem corner radius at all sizes.

The FAQ two-column layout (section title left, accordion right) should stack vertically on mobile, with the section title becoming a full-width heading above the accordion. Accordion items should expand to full width with comfortable touch targets of at least 44px height.

Type scale should reduce modestly: hero-display from 3rem to 2.25rem on tablet and 1.875rem on mobile; section-display from 2.5rem to 2rem and 1.5rem respectively. Body text remains at 1rem for readability.

## Practical implementation guidance

### Preserve
- The strict two-color type system: black for primary, blue for accent and interaction
- Generous whitespace and centered narrow content columns
- Pill-shaped buttons and toggle segments
- Rounded media frames with 1.5rem radius
- The pattern of blue-highlighted words within black headlines

### Avoid
- Adding background colors behind content sections; keep the canvas white continuous
- Using the blue accent for large areas or backgrounds
- Sharp-cornered buttons or cards; the rounded language is consistent
- Multiple type families or weights beyond Regular and Medium
- Shadows, gradients, or glassmorphism effects

### Recommended build order
1. Establish the type system with Google Sans at root, implementing the six semantic tokens
2. Build the center-weighted layout container with responsive padding
3. Create the pill button component with primary and secondary variants
4. Implement the media frame with rounded corners and overflow handling
5. Build the feature card grid with icon, title, description, and thumbnail stack
6. Add the accordion with chevron states and divider lines
7. Implement the plan toggle with active state transition

### Accessibility
- Ensure blue action elements meet contrast ratios against white; the #078EFB on #FFFFFF combination should be verified for WCAG AA compliance at all text sizes
- Provide visible focus indicators for pill buttons and accordion triggers; a 2px outline offset or subtle background shift works within the flat system
- Chevron icons in accordions should have accessible labels indicating expand/collapse state
- Maintain touch targets of at least 44px for all interactive elements on mobile
- Respect reduced-motion preferences for any toggle or accordion animations

## Scope note

This guide covers the subscription and feature-overview page surfaces visible in the supplied images. Navigation headers, footers, form interactions, mobile-specific layouts, loading states, and dark mode variants are not represented. Motion behavior for accordions, carousels, and toggle transitions are recommended but not documented from still images. Google Sans 18 Pt is present in source files but not visibly used in captured interface elements. Measurements are exact where retained in the source data.
