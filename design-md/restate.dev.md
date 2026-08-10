# How restate.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/restate.dev-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with gradient sky background, large display headline, announcement pill, and interactive pixel-art landscape with trees and helicopter.](https://pin.fontofweb.com/7558?format=jpg)](https://design.withfudge.com/share/pin-7558)

[Hero section with gradient sky background, large display headline, announcement pill, and interactive pixel-art landscape with trees and helicopter.](https://design.withfudge.com/share/pin-7558)

[![Feature section with dark headline, muted body text, and large UI screenshot showing workflow tracing with error states and timeline visualization.](https://pin.fontofweb.com/7559?format=jpg)](https://design.withfudge.com/share/pin-7559)

[Feature section with dark headline, muted body text, and large UI screenshot showing workflow tracing with error states and timeline visualization.](https://design.withfudge.com/share/pin-7559)

[![Full homepage view including navigation bar, hero with dual CTA buttons, pixel-art scene, and scrolling logo marquee of enterprise customers.](https://pin.fontofweb.com/7557?format=jpg)](https://design.withfudge.com/share/pin-7557)

[Full homepage view including navigation bar, hero with dual CTA buttons, pixel-art scene, and scrolling logo marquee of enterprise customers.](https://design.withfudge.com/share/pin-7557)

## Overview

Restate's visual identity positions developer infrastructure as approachable and resilient. The homepage opens with a full-viewport gradient sky that transitions from pale blue at the top to near-white at the bottom, creating an expansive, optimistic atmosphere. Against this canvas, a mechanical display typeface delivers the core message with engineering precision, while a playful pixel-art landscape at the bottom of the hero humanizes the technical proposition. The design balances two modes: the marketing surface, which relies on atmosphere and illustration, and the product-surface sections, which present dense UI screenshots and workflow diagrams with clean, readable typography. This dual personality requires a system that can shift from expressive to utilitarian without feeling like two different websites.

## Colors

The palette is anchored by a deep institutional blue that carries both trust and technical authority, supported by a full range of neutral surfaces that enable complex UI screenshots to sit comfortably within marketing pages.

| token | value | use |
|---|---|---|
| ink | `#000000` | primary text, borders on light buttons, header navigation text |
| deep-blue | `#001880` | hero headline text, primary dark text on gradient backgrounds |
| accent-blue | `#1447E6` | primary action buttons, interactive emphasis, link hover states |
| muted-ink | `#14151A` | subtle dark surfaces, code block backgrounds |
| body-text | `#6A7282` | paragraph text, secondary descriptions, caption content |
| border-subtle | `#D1D5DC` | hairline dividers, secondary button borders, announcement pill edges |
| surface-elevated | `#DEE0E3` | elevated card backgrounds, subtle panel fills |
| surface-canvas | `#E5E7EB` | section alternating backgrounds, screenshot chrome |
| tint-blue | `#EFF6FF` | light blue washes, info-state backgrounds |
| surface-warm | `#F7F7F8` | warm neutral sections, footer-adjacent areas |
| surface-cool | `#F9FAFB` | cool neutral sections, alternating stripe backgrounds |
| white | `#FFFFFF` | primary background, announcement pills, secondary buttons |

The hero gradient uses an `oklab` color space transition from a pale desaturated blue at `0.746` lightness down to transparent, creating the airy sky effect that fills the upper viewport. Product imagery introduces saturated accent colors—greens, oranges, and blues—within UI screenshots, but these remain photographic rather than systemic. The dark mode for text hierarchy inverts cleanly: deep-blue headlines against white or gradient, with body-text paragraphs providing the secondary layer.

## Typography

Three family labels appear in the source material: Inter, Pp Neue Machina, and Pp Neue Machina-Plain Regular. The design uses Pp Neue Machina for display and expressive moments with its mechanical, engineered character; Inter provides the workhorse readability for everything else. Pp Neue Machina-Plain Regular is the specific font file served for display use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Pp Neue Machina | 4rem | 400 | 1 | -0.025em | homepage hero headline, major section titles |
| section-display | Pp Neue Machina | 1.875rem | 400 | 1.2 | normal | subsection headings, feature titles |
| body-large | Inter | 1.25rem | 400 | 1.4 | normal | hero descriptions, lead paragraphs |
| body | Inter | 1rem | 400 | 1.5 | normal | general content, navigation, UI labels |
| label | Inter | 0.875rem | 500 | 1.4286 | normal | buttons, pills, tags, compact UI elements |
| code-inline | Inter | 0.875rem | 400 | 1.5 | normal | inline code, technical annotations, monospace-styled UI text |

Pp Neue Machina, designed by Mathieu Desjardins and available from Pangram Pangram, contributes a constructed, technical voice that aligns with distributed-systems subject matter. Its tight tracking at display sizes and consistent stroke weight give headlines a machined quality. Inter handles all interface text with its extensive weight range and screen-optimized forms. Pp Neue Machina-Plain Regular is the served weight for display typography. Verify licensing for these families before production use.

The type scale derives from a `2px` relative unit, with display sizes snapping to whole multiples. Hero display at `64px` and section display at `30px` establish the two expressive anchors, while body sizes at `16px` and `20px` maintain the `8px` grid rhythm. Labels at `14px` provide the compact tier for UI chrome.

## Layout

The page structure follows a centered, max-width container pattern with generous vertical breathing room. Horizontal padding locks to `32px` on desktop, creating consistent gutters without excessive width. Content blocks center within the viewport with margins that approach `236.5px` on wide screens, producing a reading column that feels editorial rather than edge-to-edge.

Vertical rhythm uses `160px` top padding for major section entrances, establishing dramatic separation between the hero and subsequent content. Internal section padding runs `64px` top to `96px` bottom, with `80px` bottom padding for closing transitions. Component-level spacing clusters around `24px` for paragraph margins, `40px` for headline-to-content gaps, and `10px` for tight internal grouping.

The hero section occupies full viewport height with its gradient background extending to the bottom edge where pixel-art illustration begins. Navigation floats above this as a dark, semi-transparent bar that inverts the light page aesthetic. Below the hero, content sections alternate between white and subtle warm-gray backgrounds, creating gentle progression without harsh contrast.

## Visual language

The most distinctive element is the pixel-art landscape that anchors the hero section: flat green trees with rounded canopies, a small helicopter, collectible stars, and error-code enemies (`500`, `429`) rendered in a game-like aesthetic. This illustration sits on a bright green ground plane that contrasts sharply with the pale sky gradient above, creating a horizon line that divides the atmospheric upper page from the playful lower edge. The "Restate Mode" badge in the corner reinforces the game metaphor.

UI screenshots within feature sections use realistic browser chrome—traffic-light dots, address bars, and shadowed panels—to present the product interface as tangible and production-ready. These screenshots show dense technical content: workflow traces, error states, timeline visualizations with color-coded bars, and structured log output. The visual language thus oscillates between whimsy and precision, using illustration to soften infrastructure complexity while maintaining technical credibility through realistic product imagery.

The announcement pill component bridges these modes: a white rounded capsule with subtle border, containing compact label text and a trailing arrow, hovering between the atmospheric background and the content below.

## Components

### Navigation bar

- **Anatomy**: Logo mark left, text links center-right, utility actions far right
- **Surface**: Dark semi-transparent background (`#14151A` or similar dark value) with slight blur
- **Typography**: `body` token for links, `label` token for actions
- **Shape**: Full-width bar, fixed or sticky positioning
- **Spacing**: `5px 16px` to `5px 20px` padding on individual nav items
- **Composition**: Horizontal flex with `16px` gaps between text links; GitHub star count displayed as social proof; "Cloud Login" as text button; "Get Started" as filled white pill button with dark text

### Announcement pill

- **Anatomy**: Rounded capsule containing leading label and trailing description with arrow
- **Surface**: `white` background, `border-subtle` hairline border
- **Typography**: `label` token, weight 500
- **Shape**: `pill` radius (`9999px`)
- **Spacing**: Compact internal padding, approximately `6px` vertical and `12px` horizontal
- **Composition**: Centered below navigation, above hero headline; acts as secondary navigation to product updates

### Hero headline

- **Anatomy**: Two-line display text with selective color emphasis
- **Surface**: Transparent over gradient background
- **Typography**: `hero-display` token; the word "innately" renders in `accent-blue` while remaining in the same family
- **Shape**: No bounding box, free-floating text
- **Spacing**: `40px` top margin from announcement pill
- **Composition**: Centered, maximum width constrained for line-break control

### Primary action button

- **Anatomy**: Text label with trailing arrow icon
- **Surface**: `accent-blue` background, `white` text
- **Typography**: `label` token, weight 500
- **Shape**: `button` radius (`12px`)
- **Spacing**: `8px 20px 8px 12px` or `8px 12px 8px 20px` depending on icon position
- **Composition**: Paired with secondary button; arrow icon indicates external or forward action

### Secondary action button

- **Anatomy**: Text label with leading icon (book/documentation symbol)
- **Surface**: `white` background, `ink` text, `border-subtle` border
- **Typography**: `label` token, weight 500
- **Shape**: `button` radius (`12px`)
- **Spacing**: Similar padding to primary with reversed icon margin
- **Composition**: Sits adjacent to primary with `12px` gap; icon establishes content type

### Feature section with screenshot

- **Anatomy**: Centered headline, centered body paragraph, full-width screenshot panel
- **Surface**: `surface-canvas` or `white` background; screenshot has subtle shadow and rounded chrome
- **Typography**: `section-display` for headline, `body-large` for description
- **Shape**: Screenshot panel uses `panel` radius with browser chrome styling
- **Spacing**: `64px` top padding, `96px` bottom padding; `24px` between headline and paragraph; generous horizontal margins
- **Composition**: Stacked vertical centering; screenshot dominates visual weight

### Logo marquee

- **Anatomy**: Horizontal scrolling row of grayscale customer logos
- **Surface**: `white` or `surface-warm` background
- **Typography**: None
- **Shape**: Logos presented in monochrome, uniform height
- **Spacing**: Continuous horizontal flow with fade edges
- **Composition**: Full-width, below hero or major sections; establishes enterprise credibility

## Responsive behavior

The design appears optimized for desktop presentation with its expansive hero and centered content columns. At narrower viewports, the `236.5px` side margins should collapse to the `32px` minimum gutter, allowing content to breathe without excessive reflow. The two-line hero headline will likely require manual breakpoint control to prevent awkward breaks; the word "innately" must maintain its accent color regardless of wrapping.

The pixel-art landscape scales as a bottom-anchored illustration; its elements should maintain relative positioning rather than absolute pixel placement to avoid cropping on short viewports. Navigation items beyond the logo and primary CTA should collapse to a menu at moderate widths, preserving the dark bar aesthetic.

Announcement pill text truncates with ellipsis on narrow screens. Screenshot panels should scroll horizontally within their containers if the aspect ratio cannot be maintained, preserving the realistic browser chrome while allowing content exploration.

## Practical implementation guidance

### Preserve
- The gradient sky background with its `oklab` color space definition; standard RGB gradients will appear harsher
- Pp Neue Machina for all display headlines; the mechanical character is essential to brand voice
- The selective accent color within headlines (blue "innately" against dark "Build...backends and agents")
- Pixel-art illustration with its specific green ground plane and game-element vocabulary
- Realistic screenshot chrome with traffic lights and subtle shadows

### Avoid
- Generic sans-serif substitutions for display text; the engineered quality will be lost
- Removing the pixel-art illustration for "cleaner" aesthetic; it differentiates the brand
- Darkening the hero gradient; the lightness conveys optimism and technical clarity
- Edge-to-edge text blocks; the generous margins are editorial and intentional
- Multiple accent colors competing with the established blue; the palette is intentionally restrained

### Recommended build order
1. Establish the gradient sky background and verify `oklab` gradient rendering across browsers
2. Implement Pp Neue Machina with correct weight and tracking for hero display
3. Build navigation bar with dark semi-transparent surface and blur backdrop
4. Create announcement pill with precise border and pill radius
5. Position pixel-art landscape with bottom anchoring and responsive scaling
6. Develop button pair with correct padding asymmetry for icon placement
7. Construct feature sections with screenshot chrome and shadow system
8. Add logo marquee with monochrome treatment and continuous scroll

### Accessibility
- Ensure the gradient background meets contrast minimums for text; the deep-blue headline at `4rem` provides sufficient size compensation but verify against the lightest gradient stops
- The dark navigation bar should maintain `4.5:1` contrast for all text links
- Pixel-art illustration contains no informational text; decorative treatment is appropriate
- Screenshot images require alt text describing the visible workflow state
- Button icons should have aria-labels when text alone does not describe action destination

## Scope note

This guide covers the Restate homepage marketing surface including hero, feature sections with product screenshots, navigation, and customer logo marquee. Interior documentation pages, interactive playground functionality, mobile navigation patterns, and dark mode variants are not represented in the supplied material. The pixel-art game interaction and any motion behavior beyond static presentation are outside current scope.
