# How moondream.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/moondream.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large display typography, announcement pill, dual CTAs, and tilted device mockup grid on near-black background](https://pin.fontofweb.com/7953?format=jpg)](https://design.withfudge.com/share/pin-7953)

[Hero section with large display typography, announcement pill, dual CTAs, and tilted device mockup grid on near-black background](https://design.withfudge.com/share/pin-7953)

[![Solutions section with feature cards showing product screenshots, icon headings, and muted body text on dark canvas](https://pin.fontofweb.com/7954?format=jpg)](https://design.withfudge.com/share/pin-7954)

[Solutions section with feature cards showing product screenshots, icon headings, and muted body text on dark canvas](https://design.withfudge.com/share/pin-7954)

[![Login modal with split-panel layout, social auth buttons, and legal links on dark overlay background](https://pin.fontofweb.com/7955?format=jpg)](https://design.withfudge.com/share/pin-7955)

[Login modal with split-panel layout, social auth buttons, and legal links on dark overlay background](https://design.withfudge.com/share/pin-7955)

## Overview

Moondream's visual identity is built for a technical audience: researchers, engineers, and product builders working with vision AI. The system communicates precision and scale through a near-black canvas, restrained color palette, and sharp geometric typography. Every surface sits close to absolute black, with white and warm-gray ink providing high-contrast readability without the sterility of pure monochrome.

The design language avoids decorative flourish. Hierarchy is established through size contrast, weight shifts within a single type family, and generous negative space. Component shapes are subtly rounded rather than fully square, softening the engineering aesthetic just enough to feel approachable. Photography and device mockups provide the primary visual warmth, appearing as dimensional objects against the flat dark ground.

## Colors

The palette is intentionally narrow, optimized for long reading sessions in dark environments and for presenting technical content with clarity.

| token | value | use |
|---|---|---|
| canvas | `#090909` | Page background, the deepest surface |
| surface | `#18181D` | Cards, modals, elevated panels |
| surface-elevated | `#26262B` | Borders, dividers, subtle structural lines |
| ink | `#F8F8F8` | Primary text, headings, active labels |
| muted-ink | `#A1A1A8` | Secondary text, descriptions, captions |
| action | `#F8F8F8` | Primary button fills, high-emphasis CTAs |
| action-inverse | `#18181D` | Text on primary buttons |
| border | `#26262B` | Visible borders on cards and buttons |
| border-subtle | `#18181D` | Hairline dividers, inactive borders |
| accent-warm | `#A1A1A8` | Social proof metrics, tertiary information |
| scrim | `#000000` | Modal overlays, backdrop dimming |

The canvas and surface layers create a shallow depth system: most content sits directly on `#090909`, with `#18181D` reserved for modals and contained panels. The warm-gray muted ink prevents the secondary text from competing with primary content while maintaining sufficient contrast against dark backgrounds. No gradient fills appear in the interface; a single linear gradient with low-opacity white is used decoratively for visual texture in specific presentation contexts. The scrim provides full-black overlay for modal backdrops, ensuring focus remains on the elevated panel.

## Typography

The system uses a single type family, Geist, designed by Basement Studio and distributed by Vercel. It is a neo-grotesque with engineered precision, featuring tight apertures and consistent stroke modulation that reads cleanly at both display and UI sizes.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Geist | 3.75rem | 600 | 1 | -0.05em | Homepage hero headlines |
| section-display | Geist | 3rem | 400 | 1.25 | -0.025em | Section headings, major statements |
| body | Geist | 1rem | 400 | 1.5 | 0em | Paragraphs, general content |
| body-large | Geist | 1.125rem | 400 | 1.556 | 0em | Hero descriptions, lead text |
| label | Geist | 0.875rem | 500 | 1.429 | 0em | Buttons, tags, navigation labels |
| navigation | Geist | 1rem | 400 | 1.5 | 0em | Top-bar links |
| legal-copy | Geist | 0.75rem | 400 | 1.333 | 0em | Terms, privacy, fine print |

Display sizes use negative tracking for tighter, more impactful headlines. The hero display at 60px with -3px tracking creates a dense, authoritative presence. Body text maintains neutral tracking for comfortable reading. Weight distinctions are meaningful: 400 for body and display, 500 for interactive labels, 600 for the largest display size. Verify licensing for these families before production use.

## Layout

The layout system is center-weighted with generous horizontal margins. Content rarely stretches to viewport edges; instead, it occupies a comfortable reading column that emphasizes the technical copy.

The top navigation spans the full width, containing a logo mark with wordmark on the left, text links in the center, and utility actions on the right. Below the navigation, hero sections center all content vertically and horizontally, using stacked alignment for the announcement pill, headline, description, and button pair.

Section spacing uses 32px vertical padding as a base unit, expanding to 64px for major section breaks. Content blocks within sections maintain 16px to 24px internal padding. The feature grid in the Solutions section uses a two-column asymmetric layout: a media panel on the left occupying roughly 40% width, and a text panel on the right with an icon, heading, description, and link.

Modals appear centered in the viewport with a dark scrim behind them. The login modal uses a split-panel composition: the left side contains the form and actions on a solid surface background, while the right side displays a full-bleed photographic or generated image.

## Visual language

The visual character is dark, technical, and confident. The near-black canvas absorbs light, making white typography and colorful photography feel luminous by contrast. Rounded corners are restrained—approximately 5.2px on panels and buttons—preventing the interface from feeling harsh without becoming friendly or casual.

Photography and generated imagery are treated as first-class content. In the Solutions section, each feature is anchored by a realistic screenshot or render showing the product in use: bridge photography with overlay tags, interior robotics scenes, e-commerce interfaces with detection bounding boxes. These images sit inside subtly rounded containers with soft shadows that lift them from the dark background.

Iconography is minimal and functional. Small 16px icons precede section labels and feature headings, rendered in the same muted ink as secondary text. The announcement pill uses a small "New" badge with inverted contrast to draw attention without breaking the dark palette.

Shadows are extremely subtle, using low-opacity black at 5% to 10% with minimal blur and offset. They provide just enough separation for elevated elements without creating visible halos against the dark canvas.

## Components

### Announcement pill
A compact, pill-shaped container for highlighting new features or updates. It combines a small inverted badge with a text label and optional arrow icon.

- **Anatomy**: Inline-flex container with a "New" badge and text label, sometimes followed by a right arrow.
- **Surface**: Background uses surface color; badge uses ink background with action-inverse text.
- **Typography**: `{typography.label}` at 14px weight 500.
- **Shape**: Full pill radius with padding of 2px vertical and 12px horizontal.
- **Spacing**: Sits 16px to 24px above the hero headline.

### Primary button
The main call-to-action, used for "Try the Playground," "Sign up," and similar high-intent actions.

- **Anatomy**: Text label centered within a rectangular button.
- **Surface**: Solid ink background with action-inverse text.
- **Typography**: `{typography.label}`.
- **Shape**: 5.2px border radius, 1px solid border matching the background.
- **Spacing**: 8px vertical padding, 16px horizontal padding.
- **Composition**: Often paired with a secondary button in a horizontal group with 8px to 12px gap.

### Secondary button
Used for lower-priority actions like "View Documentation" or "Learn more."

- **Anatomy**: Text label with transparent background.
- **Surface**: Transparent fill with ink text and border color.
- **Typography**: `{typography.label}`.
- **Shape**: 5.2px border radius, 1px solid border.
- **Spacing**: 8px vertical padding, 16px horizontal padding.

### Feature card
A composite component pairing media with descriptive content, used in the Solutions section.

- **Anatomy**: Media container on the left; icon, heading, paragraph, and link on the right.
- **Surface**: Transparent background; media may have subtle rounded corners and shadow.
- **Typography**: Heading uses `{typography.section-display}` at 20px weight 600; body uses `{typography.body}` in muted ink; link uses `{typography.label}`.
- **Shape**: Media container at 5.2px radius.
- **Spacing**: 24px to 32px gap between media and text panels; 16px between heading and paragraph.
- **Composition**: Horizontal layout on desktop, likely stacking vertically on narrow viewports.

### Login modal
A centered authentication panel with social provider options.

- **Anatomy**: Split panel with form side and image side; or single panel with stacked social buttons.
- **Surface**: Surface color background, centered on canvas with dark scrim.
- **Typography**: Heading uses `{typography.section-display}` at 24px weight 700; description uses `{typography.body}` in muted ink; button labels use `{typography.label}`.
- **Shape**: 5.2px border radius for the modal container; 5.2px for buttons.
- **Spacing**: 40px padding inside the modal; 16px between social buttons.
- **Composition**: Social buttons stack vertically with full-width alignment; legal copy sits below at 12px in muted ink.

### Navigation bar
Fixed or static top bar spanning the viewport width.

- **Anatomy**: Logo mark with wordmark, text links, utility buttons.
- **Surface**: Transparent or matching canvas background.
- **Typography**: Links use `{typography.navigation}`; active or emphasized links use weight 500.
- **Spacing**: 16px horizontal padding on links; 8px to 16px gap between utility buttons.

## Responsive behavior

The system appears designed for desktop-first presentation with clear adaptation paths. The hero headline at 60px should scale down to 40px or 32px on tablet and mobile to prevent overflow. The two-column feature grid should collapse to a single column with media stacking above text.

Navigation links should collapse to a hamburger menu on narrow viewports, preserving the logo and primary CTA. The login modal should become full-width on mobile, eliminating the split-panel image side to prioritize the form.

Button groups in the hero should stack vertically on narrow screens, with the primary button remaining first in the tab order. Section padding should reduce from 64px to 32px vertical on mobile, maintaining 16px horizontal margins.

## Practical implementation guidance

### Preserve
- The extremely dark canvas; even small shifts lighter than `#090909` will visibly change the mood.
- The single-family typography system; introducing a second family would fracture the technical coherence.
- The tight tracking on display sizes; it is essential to the engineered personality.
- The asymmetric media-text pairing in feature cards; this rhythm distinguishes the Solutions section.

### Avoid
- Pure white `#FFFFFF` backgrounds; the system is built for dark-mode immersion.
- Heavy drop shadows with large blur radii; they create visible halos against dark surfaces.
- Rounded corners larger than 8px; they conflict with the precise, technical character.
- Saturated accent colors; the palette derives energy from photography, not interface hues.

### Recommended build order
1. Establish the canvas, surface, and ink color tokens.
2. Implement Geist at all sizes with correct weights and tracking.
3. Build the navigation and hero section with announcement pill and button pair.
4. Create the feature card component with media container and text stack.
5. Add the login modal with social button pattern.
6. Apply subtle shadows and border treatments last.

### Accessibility
- Ensure all text meets WCAG AA contrast against the dark canvas; ink on surface exceeds requirements, but verify muted ink on canvas.
- Provide visible focus indicators for keyboard navigation; the default browser outline may need customization to be visible against dark surfaces.
- Maintain touch targets of at least 44px for mobile buttons, even if visual padding is smaller.
- Use `prefers-reduced-motion` to respect user motion preferences for any scroll or entrance animations.

## Scope note

This guide covers the homepage and login page surfaces visible in the supplied images. Pricing, documentation, blog, and playground interfaces are not represented. Motion, hover states, loading indicators, and form validation styling are not documented. Measurements reflect the extracted interface values and should be verified against the live site during implementation.
