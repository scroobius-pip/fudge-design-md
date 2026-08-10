# How quiver.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/quiver.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large display headline, product demo mockup showing vectorized dog illustration, and dual pill-shaped CTAs on a near-white canvas](https://pin.fontofweb.com/7618?format=jpg)](https://design.withfudge.com/share/pin-7618)

[Hero section with large display headline, product demo mockup showing vectorized dog illustration, and dual pill-shaped CTAs on a near-white canvas](https://design.withfudge.com/share/pin-7618)

[![Use cases section with left-aligned feature copy, dark pill CTA, and right-side wireframe grid mockup demonstrating vector editing precision](https://pin.fontofweb.com/7617?format=jpg)](https://design.withfudge.com/share/pin-7617)

[Use cases section with left-aligned feature copy, dark pill CTA, and right-side wireframe grid mockup demonstrating vector editing precision](https://design.withfudge.com/share/pin-7617)

## Overview

QuiverAI presents itself as a frontier AI platform for vector design, and its visual system communicates that positioning through radical restraint. The interface is built on a near-binary contrast between deep charcoal ink and warm off-white canvas, with almost no chromatic distraction. This austerity serves a functional purpose: the design foregrounds the product's output—clean vector graphics, wireframes, and generated illustrations—rather than competing with them. Every element feels precision-engineered, from the tightly tracked display type to the hairline borders and pill-shaped controls. The overall impression is of a tool built by researchers for designers, one that treats visual noise as a bug to be eliminated. The system relies on a single type family, Geist, deployed across a wide weight and size range, and a spacing vocabulary rooted in a 2px base unit that keeps all measurements mathematically related.

## Colors

The palette is intentionally narrow, operating in a grayscale spectrum that avoids pure black and pure white in favor of warmer, more usable extremes.

| token | hex | use |
|---|---|---|
| ink | #141414 | Primary text, dark backgrounds, filled buttons, announcement bar |
| ink-secondary | #333333 | Display headlines, secondary headings, body emphasis |
| ink-tertiary | #565656 | Muted body text, descriptions, tertiary information |
| muted | #737373 | Placeholder text, disabled states, subtle labels |
| border | #EBEBEB | Hairline borders, card outlines, divider lines |
| surface | #FCFCFC | Slightly warmed page background, subtle elevation |
| canvas | #FFFFFF | Primary page background, card surfaces, inverted text on dark |

The color logic follows a strict hierarchy. The announcement bar and primary call-to-action buttons use ink as a solid fill, with canvas text for maximum contrast. Body text defaults to ink-tertiary for comfortable reading density, while display headlines use ink-secondary to sit between the extremes without the harshness of pure black. The border token appears as a 1px solid rule around secondary buttons and as the subtle edge definition on feature cards. No accent colors appear in the interface chrome; any color emerges from user-generated content or product demonstrations, keeping the system's own voice neutral and authoritative.

## Typography

The typographic system is built entirely on Geist, a sans-serif family designed by Basement Studio with Vercel. All weights and sizes are drawn from the exact values present in the interface.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Geist | 4.5rem | 500 | 1 | -0.02em | Homepage hero headline |
| section-display | Geist | 2rem | 500 | 1 | -0.02em | Section headings, feature titles |
| body-large | Geist | 1.125rem | 400 | 1.2 | -0.02em | Lead paragraphs, feature descriptions |
| body | Geist | 1rem | 400 | 1.5 | normal | Default body text, navigation items |
| label | Geist | 0.875rem | 500 | 1.2 | -0.02em | Small headings, metadata, tags |
| navigation | Geist | 0.8125rem | 400 | 1.5 | normal | Header links, announcement bar |
| cta | Geist | 0.6875rem | 500 | 1.2 | -0.02em | Button labels, compact actions |
| stat | Geist | 2rem | 500 | 1 | -0.02em | Numerical highlights, metrics |

The design makes aggressive use of negative letter-spacing at display sizes, pulling characters together for a dense, engineered feel. The hero-display token at 72px with -1.44px tracking creates a headline that feels almost monolithic, while the body tokens relax into normal spacing for readability. Weight 500 serves as the primary emphasis level, appearing in headlines, buttons, and labels, while 400 handles all running text. The 13px navigation size and 11px CTA size are notably compact, treating interface chrome as information-dense infrastructure rather than marketing theater. Verify licensing for these families before production use.

## Layout

The page structure follows a centered, max-width container pattern with generous vertical breathing room. The header sits fixed or sticky at the top, containing a logo mark, horizontal navigation, and authentication actions. Below this, content sections stack with substantial padding—128px top and bottom for major sections, 96px for secondary breaks, and 64px for tighter groupings. Horizontal margins of 388px on either side create a narrow, focused reading column on large viewports, though this relaxes to 20px of padding on smaller breakpoints.

The hero section centers all elements: a massive display headline, a supporting line with inline pill tags, a secondary tagline, and a pair of horizontally arranged buttons. Below this, a product mockup occupies the visual center, framed by subtle border-radius and shadow treatments that suggest a floating application window without heavy chrome.

Feature sections alternate between centered section headers and asymmetric two-column layouts. In the use-cases pattern, left-aligned copy with a section heading, paragraph, and CTA occupies roughly 40% of the width, while a large product mockup fills the remaining space. This creates a rhythmic alternation between reading and demonstration that keeps the page from becoming a static brochure.

Spacing tokens derive from a 2px base unit, producing a scale of 4, 8, 12, 16, 20, 24, 32, 48, 64, 80, 96, and 128px. Component padding and margins snap to these values, ensuring mathematical consistency across the system.

## Visual language

The aesthetic character is one of controlled minimalism with subtle warmth. The near-white background avoids clinical sterility, while the charcoal ink avoids the harshness of pure black. Rounded corners appear sparingly: 12px on card-like containers and product mockups, 9999px on all interactive elements. This pill-shaped treatment for buttons, tags, and inline labels creates a soft, approachable counterpoint to the otherwise rectilinear layout.

Shadows are extremely restrained. Feature cards and mockup frames use a compound shadow: a 1px border in #EBEBEB combined with a subtle 1px 2px rgba(0,0,0,0.05) drop shadow. This creates elevation without depth, suggesting a layered interface rather than a floating one. No gradients appear in the interface chrome; all surfaces are flat and opaque.

Inline tags within body text—such as "Generating," "Editing," and "Animating"—use the same pill shape as buttons but with a lighter treatment: canvas background, ink-tertiary text, and the standard hairline border. These function as both semantic emphasis and interactive affordance, blurring the line between content and control.

Product mockups are framed as browser-like windows with three-dot traffic lights in the upper left and a centered title bar. This convention, repeated across hero and feature sections, establishes a consistent visual metaphor for the product as a precision tool with a clean, technical interface.

## Components

### Announcement bar
A full-width strip at the very top of the viewport, filled with ink and displaying centered canvas text at navigation size. The content is typically a brief update with an inline link, separated by a vertical divider. The bar is compact, with 8px vertical padding and 16px horizontal padding, establishing immediate hierarchy without consuming excessive space.

### Header
A fixed navigation bar containing the QuiverAI wordmark on the left, a horizontal link list in the center, and authentication actions on the right. The header uses a transparent or surface background with a subtle bottom border. Navigation links appear in body size with normal tracking, while the "Get started" button uses the primary-cta treatment. The "Sign in" link is text-only, creating a clear hierarchy between entry points.

### Primary CTA
A filled pill button with ink background and canvas text. The compact 11px size with 500 weight and negative tracking makes it feel like a precise control rather than a marketing shout. Padding of 8px vertical and approximately 20px horizontal gives it a squat, authoritative proportion. Used for the most important actions: "Start creating," "Get started."

### Secondary CTA
A pill button with canvas background, ink-secondary text, and a 1px border in the border color. The same compact typography as the primary variant, but visually lighter. Used for alternative actions like "Explore Arrow 1.0" where the primary action already has focus.

### Feature card
A rounded container with 12px border radius, canvas background, and the compound shadow treatment. Internal padding of 24px creates comfortable space for content. Cards appear in product mockups and potentially in grid layouts, though the supplied images show them primarily as framing devices for demonstrations.

### Product mockup
A browser-window frame containing live product demonstrations. The frame includes three 8px circles in the upper left (traffic lights), a centered title in muted text, and a rounded 12px container with subtle shadow. Inside, the actual product interface shows vector graphics, code panels, or editing canvases. This component is the visual centerpiece of the marketing page, demonstrating capability without abstract description.

### Inline tag
A small pill-shaped element embedded within body text, using canvas background, ink-tertiary text, and the standard hairline border. These tags often include a small leading icon and function as both categorical labels and subtle interactive elements. They bridge the gap between static content and the pill-shaped button vocabulary.

## Responsive behavior

The design appears optimized for a centered, max-width desktop experience. The 388px side margins suggest a fixed content well that would need to collapse on narrower viewports. At tablet widths, the two-column feature layouts should stack vertically, with the product mockup preceding or following the text block depending on narrative priority. The hero headline at 72px will require scaling down—potentially to the 32px or 24px range—to maintain readability without excessive line breaks.

The compact navigation bar may require a hamburger menu or condensed link list on smaller screens. The authentication buttons, currently exposed as text and pill, could collapse to icon-only or move behind a menu. The announcement bar should remain visible but may truncate with an ellipsis or expand to multiple lines.

Touch targets for the small 11px CTA buttons should be increased to at least 44px on mobile, even if the visual size remains compact. The pill shape accommodates this well, as the hit area can extend beyond the visible bounds without visual penalty.

## Practical implementation guidance

### Preserve
- The stark ink-to-canvas contrast as the primary visual signature
- The single-family typographic system with aggressive negative tracking at display sizes
- The pill-shaped treatment for all interactive elements
- The compound shadow pattern for subtle elevation
- The browser-window framing for product demonstrations
- The mathematical spacing scale based on 2px increments

### Avoid
- Introducing accent colors into the interface chrome; let user content provide chromatic interest
- Using pure black or pure white; the warmed extremes are intentional
- Heavy drop shadows or gradient fills that would break the flat, technical aesthetic
- Multiple type families; the system's authority comes from typographic restraint
- Rounding corners on large structural containers; reserve radius for interactive and framing elements

### Recommended build order
1. Establish the color tokens and apply ink and canvas as the foundation
2. Set up the Geist family with exact weights and tracking values
3. Build the spacing scale from the 2px base unit
4. Create the pill button components with exact padding and typography
5. Implement the header with navigation and authentication patterns
6. Construct the hero section with centered composition and product mockup frame
7. Build the alternating feature section layout with two-column composition
8. Add the announcement bar as a fixed or static top element
9. Refine shadows and borders for the card and mockup treatments

### Accessibility
- Ensure the ink-on-canvas and canvas-on-ink combinations meet WCAG AAA contrast ratios; the near-black and near-white values should exceed 7:1
- The muted ink-tertiary text on canvas should be checked for AA compliance at minimum; consider darkening to #565656 or heavier if it falls short
- The small 11px CTA size requires careful attention to contrast; the filled ink background helps, but verify against the minimum 4.5:1 ratio
- Pill buttons should have visible focus states, likely an outline offset or subtle ring, since the filled and outlined variants may not show focus clearly otherwise
- Product mockups containing code or interface details should have alt text describing the demonstrated capability, not just "screenshot"

## Scope note

This guide covers the QuiverAI homepage and its primary marketing sections, including the hero, use-cases feature blocks, and global navigation. Pricing, documentation, authenticated application interfaces, and mobile-specific layouts are not represented in the supplied material. Motion, hover states, and form interactions are not documented. Measurements are drawn from the exact values present in the interface.
