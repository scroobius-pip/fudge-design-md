# How redis.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/redis.io-design)

Last updated: 2026-08-10

## Captured pages

[![Community testimonials section with dark navy cards, social proof avatars, and GitHub and Discord action buttons with red borders.](https://pin.fontofweb.com/7591?format=jpg)](https://design.withfudge.com/share/pin-7591)

[Community testimonials section with dark navy cards, social proof avatars, and GitHub and Discord action buttons with red borders.](https://design.withfudge.com/share/pin-7591)

[![Features grid with lime-green accent headline, six icon-driven capability cards, and an Explore docs button on a near-black background.](https://pin.fontofweb.com/7590?format=jpg)](https://design.withfudge.com/share/pin-7590)

[Features grid with lime-green accent headline, six icon-driven capability cards, and an Explore docs button on a near-black background.](https://design.withfudge.com/share/pin-7590)

[![Code playground with language tabs, syntax-highlighted JavaScript example, and a dark terminal-style container with rounded corners.](https://pin.fontofweb.com/7589?format=jpg)](https://design.withfudge.com/share/pin-7589)

[Code playground with language tabs, syntax-highlighted JavaScript example, and a dark terminal-style container with rounded corners.](https://design.withfudge.com/share/pin-7589)

[![Deployment options with three dark cards and a tech-stack logo grid showing AWS, Azure, Kubernetes, and other partner integrations.](https://pin.fontofweb.com/7588?format=jpg)](https://design.withfudge.com/share/pin-7588)

[Deployment options with three dark cards and a tech-stack logo grid showing AWS, Azure, Kubernetes, and other partner integrations.](https://design.withfudge.com/share/pin-7588)

## Overview

The Redis.io homepage presents a dark, developer-centric visual language built on near-black foundations with strategic bursts of high-saturation color. The system communicates technical credibility through restrained structure while using bold typographic moments and lime-green accents to create energy and draw attention to key messages. The design prioritizes readability in long-form technical content, with careful hierarchy that separates marketing language from interactive code demonstrations. Every surface sits on a deep canvas, with elevated cards and panels creating subtle depth through border definition rather than heavy shadows. The overall impression is of a mature infrastructure product: confident, precise, and built for practitioners who value clarity over ornament.

## Colors

The palette is anchored by a near-black canvas with cool navy elevations, using warm and electric accents for functional emphasis. The system relies on border color rather than background variation to define component boundaries.

| token | value | use |
|---|---|---|
| canvas | #000000 | Page background, deepest layer |
| surface | #091A23 | Card backgrounds, elevated panels |
| surface-elevated | #0D212C | Code blocks, active tab containers |
| border | #163341 | Card borders, dividers, inactive states |
| border-muted | #2D4754 | Subtle separators, hover borders |
| ink | #FFFFFF | Primary text, headings, icons |
| ink-muted | #B9C2C6 | Body text, descriptions, secondary content |
| ink-dim | #999999 | Tertiary text, timestamps, metadata |
| accent-lime | #DCFF1E | Keyword highlights, display text emphasis, active indicators |
| accent-red | #FF4438 | Primary action borders, error states, critical CTAs |
| accent-red-soft | #FF6960 | Hover states, secondary red applications |
| accent-coral | #F8C555 | Syntax highlighting, warm code tokens |
| accent-purple | #C795E3 | Syntax highlighting, type annotations |
| accent-teal | #D9D9D9 | Neutral code tokens, comments |

The dark mode is intrinsic and non-optional: all text assumes light ink on dark surfaces. Accent colors serve distinct functional roles—lime for marketing emphasis and energy, red for actionable boundaries, and the syntax palette for code readability. No light-mode equivalent is visible in the current system.

## Typography

Four families appear in the extracted material: TT Trailers BD for dramatic display moments, Space Grotesk for all interface and marketing text, Space Mono for code and technical annotations, and Arial which appears in button elements at 13.3333px as a system-level fallback.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | TT Trailers BD | 7.5rem | 400 | 0.82 | -0.01em | Homepage hero headlines, large display statements |
| section-display | Space Grotesk | 2rem | 500 | 1.2 | normal | Section headings, feature titles |
| body | Space Grotesk | 1rem | 400 | 1.6 | normal | Paragraphs, descriptions, card content |
| body-small | Space Grotesk | 0.875rem | 400 | 1.5 | normal | Compact descriptions, metadata |
| label | Space Grotesk | 0.875rem | 500 | 1.5 | normal | Buttons, navigation, tab labels |
| code | Space Mono | 0.75rem | 400 | 1.5 | normal | Code blocks, inline syntax, terminal text |
| legal-copy | Space Grotesk | 0.75rem | 400 | 1.5 | normal | Fine print, captions, footer text |

TT Trailers BD is designed by Ivan Gladkikh, Vika Usmanova, Yulia Gonina, Kirill Maslov, Antonina Samokhina, and Lada Sobchenko with technical designers Yuriy Nako and Victor Rubenko, available from Type Type. Space Grotesk is designed by Florian Karsten. Space Mono is designed by Colophon Foundry and Benjamin Critton. Arial appears as a fallback family in button contexts. Verify licensing for these families before production use.

## Layout

The page uses a centered container system with generous horizontal margins that create breathing room around content. The main content column sits within a max-width constraint, with full-bleed dark backgrounds extending to viewport edges.

The grid system is flexible and content-driven. Feature sections use asymmetric layouts where a left-side headline and CTA anchor the composition, while a right-side grid of capability cards fills the remaining space. The capability grid appears to use two columns on desktop, with each card containing an icon, bold label, and descriptive paragraph.

Card-based sections employ a masonry or variable-height grid for testimonials and social proof, creating visual rhythm through differing content lengths. Deployment options use a strict three-column grid of equal-width cards, each with consistent internal spacing and bottom-aligned actions.

The code demonstration section uses a single centered container with language tabs across the top and a full-width code block below. This container is narrower than the page maximum, creating focus on the interactive content.

Vertical rhythm is established through consistent section padding, with major sections separated by substantial whitespace. Internal component spacing uses a base unit of 0.125rem, with practical increments at 0.5rem, 0.75rem, 1rem, 1.5rem, 2rem, and 3rem.

## Visual language

The aesthetic is deliberately technical and restrained. Surfaces are flat with no visible shadows; depth is created entirely through border color and subtle background elevation. The near-black canvas absorbs light, making the lime and red accents appear to glow against the darkness.

Iconography is line-based and minimal, using single-weight strokes that match the ink color of their context. Icons sit to the left of labels in capability cards, creating a consistent visual anchor. The style is functional rather than decorative—each icon directly represents its concept without embellishment.

Photography and avatars appear in circular masks for social proof elements, with small verification badges or platform indicators overlaid. The treatment is consistent and unobtrusive, letting the text content dominate.

The syntax highlighting in code blocks uses a restrained palette: lime for keywords and strings, coral for values, purple for types and special tokens, with muted gray for comments. This creates readable code without the visual noise of a full IDE theme.

Motion and interaction are implied through state changes rather than explicit animation: border color shifts, background elevation on hover, and text color transitions. The system feels responsive and alive without demanding attention.

## Components

### Primary action button

- **Anatomy**: Text label centered within a bordered container; no visible icon in default state
- **Surface**: Transparent or surface-colored background with accent-red border
- **Typography**: label token, medium weight, white ink
- **Shape**: 5px radius corners, 1px solid border
- **Spacing**: 10px vertical padding, 24px horizontal padding
- **Composition**: Inline or stacked with sibling buttons; minimum touch target maintained
- **Variants**: Default shows red border; hover likely shifts to accent-red-soft or fills background

### Secondary action button

- **Anatomy**: Text label with muted border treatment
- **Surface**: surface-elevated background with border-muted border
- **Typography**: label token, medium weight
- **Shape**: 5px radius corners
- **Spacing**: Same padding as primary
- **Composition**: Used for lower-priority actions like "Explore docs" or "See all integrations"

### Feature card

- **Anatomy**: Icon, bold label, and description paragraph stacked vertically
- **Surface**: Transparent background; no visible card container in the features grid
- **Typography**: label token for title, body-small for description
- **Shape**: No border or radius; pure typographic and iconographic grouping
- **Spacing**: Icon sits above title with 0.75rem gap; title to description uses 0.5rem
- **Composition**: Two-column grid with generous horizontal and vertical gaps

### Content card

- **Anatomy**: Optional icon or avatar, heading, body text, and optional action link
- **Surface**: surface background with border border
- **Shape**: 10px or 14px radius depending on context; 1px solid border
- **Spacing**: 24px internal padding; 32px for larger promotional cards
- **Composition**: Used for deployment options, testimonials, and promotional content

### Code block

- **Anatomy**: Language tab bar, code content area, and optional copy action
- **Surface**: surface-elevated background with border border; 14px radius
- **Typography**: code token for all content; syntax highlighting applies color variants
- **Shape**: Rounded container with internal padding
- **Spacing**: 18px top padding, 20px side and bottom padding; tabs sit flush to top with 8px padding
- **Composition**: Centered within page, narrower than full content width; tabs use label typography with active state indicated by underline or background shift

### Navigation

- **Anatomy**: Logo mark, text links, and primary CTA button
- **Surface**: Transparent over dark canvas; likely gains subtle background on scroll
- **Typography**: label token for links; body-small for dropdown or secondary items
- **Shape**: No visible border in default state
- **Spacing**: 24px horizontal page gutter; vertical padding approximately 16px
- **Composition**: Horizontal flex layout with logo left, links center, action right

## Responsive behavior

The layout assumes a desktop viewport in the visible material. The centered container with 157.5px side margins suggests a max-width approach that would compress on narrower screens. The feature grid's two-column layout should collapse to single-column on tablet and mobile, with cards stacking vertically. The three-column deployment cards would similarly sequence to single file.

The hero display type at 120px will require dramatic scaling down on smaller viewports—likely to 48px or 64px—to maintain readability without overflow. Section headings at 32px may reduce to 24px on mobile.

Code blocks should remain horizontally scrollable rather than wrapping, preserving line integrity for copy-paste functionality. The language tab bar may need horizontal scrolling or a dropdown on narrow screens.

Touch targets for buttons and navigation links should maintain minimum 44px height even as horizontal padding compresses. Card internal padding can reduce from 32px to 24px or 16px on mobile without losing structural clarity.

## Practical implementation guidance

### Preserve
- The extreme contrast between near-black canvas and white ink; this is foundational to the brand impression
- The lime-green accent for keyword emphasis in display type; it creates signature moments without overwhelming
- The three-family typographic system with clear role separation
- The border-defined card aesthetic without shadows
- The syntax highlighting palette for code blocks
- The generous horizontal margins that frame content

### Avoid
- Adding background gradients or image textures behind content
- Using the red accent for non-action elements; it carries strong CTA semantics
- Introducing rounded corners larger than 14px on rectangular surfaces; the system stays crisp
- Mixing icon styles; maintain the single-weight line aesthetic
- Light mode without complete palette redefinition; the current system is built for dark values

### Recommended build order
1. Establish the canvas, surface, and ink color tokens with proper contrast ratios
2. Implement the typographic scale with all three families loaded and fallbacks specified
3. Build the centered container with responsive max-width and gutter behavior
4. Create the button variants with correct border treatments and padding
5. Implement the card component with flexible radius and padding options
6. Build the code block with syntax highlighting and tab interaction
7. Add the feature grid layout with icon and text composition
8. Polish with accent color applications and hover states

### Accessibility
- Ensure all lime and red accent text on dark backgrounds meets WCAG AA contrast; the lime especially may need brightness adjustment for small text
- Code blocks should include a visible focus indicator for keyboard navigation
- Language tabs need clear active state beyond color alone
- Button borders provide important affordance; do not rely solely on background color for action identification
- The extreme dark canvas may cause eye strain in bright environments; consider a subtle elevated surface for very long reading sections

## Scope note

This guide covers the Redis.io homepage visible in the supplied material, including the hero, features, code demonstration, deployment options, community testimonials, and navigation. Interior documentation pages, mobile breakpoints, loading states, form interactions, and animation specifications are not represented. Footer content, additional marketing pages, and the full documentation site structure fall outside the current scope.
