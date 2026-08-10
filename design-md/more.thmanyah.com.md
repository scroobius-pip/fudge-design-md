# How more.thmanyah.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/more.thmanyah.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with dark green cinematic background, 3D footballer figure, white Arabic headline, and pill-shaped CTA button with Thmanyah logo in corner](https://pin.fontofweb.com/2950?format=jpg)](https://design.withfudge.com/share/pin-2950)

[Hero section with dark green cinematic background, 3D footballer figure, white Arabic headline, and pill-shaped CTA button with Thmanyah logo in corner](https://design.withfudge.com/share/pin-2950)

[![Dark black section with white Arabic display typography, device mockup showing football match video with playback controls and platform icons](https://pin.fontofweb.com/2949?format=jpg)](https://design.withfudge.com/share/pin-2949)

[Dark black section with white Arabic display typography, device mockup showing football match video with playback controls and platform icons](https://design.withfudge.com/share/pin-2949)

## Overview

Thmanyah More is a premium Arabic streaming platform with a dark, immersive visual identity built around cinematic sports content. The design prioritizes full-bleed video and photography, letting imagery dominate while UI elements recede into minimal, high-contrast accents. The system uses a single type family—Thmanyah Sans 12—across all weights, creating a cohesive voice that ranges from delicate light settings to commanding black headlines. The overall mood is editorial and confident: generous negative space, restrained color, and typography that scales dramatically without losing its Arabic character. Every interactive element is reduced to essential form, with pill-shaped buttons and subtle surface layers that feel native to a dark viewing environment.

## Colors

The palette is intentionally narrow, built on deep darkness with selective warm and functional accents. The design avoids chromatic noise, using color only where it serves hierarchy or brand recognition.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, deepest layer behind all content |
| surface | #1A1A1A | Elevated panels, device mockup frames, secondary containers |
| ink | #FFFFFF | All primary text, headlines, icons, and interactive labels |
| muted-ink | #B3B3B3 | Secondary text, captions, and de-emphasized metadata |
| action | #FF0033 | Save button background, critical interactive highlights |
| accent-green | #2D4A3E | Hero section atmospheric background, cinematic tint |

The canvas color establishes an infinite-depth field that allows photography and video to feel luminous by contrast. Surface appears only on raised elements like the device mockup frame, creating subtle elevation without shadow dependency. Ink is applied at full strength for all reading text, ensuring accessibility against the darkest backgrounds. The action red is used sparingly and precisely—currently visible only on the save interaction—making it highly salient when present. The accent green serves an atmospheric role, tinting immersive hero sections with a moody, stadium-like quality that connects to sports content without literal theming.

## Typography

Thmanyah Sans 12 is the sole type family, available in Light, Medium, Bold, and Black weights. The design leverages the full weight range for dramatic hierarchy, with Black reserved for display moments and Light appearing in delicate supporting text. All sizes are built on a 4px relative unit grid.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Thmanyah Sans 12 | 3rem | 700 | 1.2 | -0.01em | Primary headlines in immersive hero sections |
| section-display | Thmanyah Sans 12 | 2.5rem | 700 | 1.3 | -0.01em | Section titles, transitional statements |
| body | Thmanyah Sans 12 | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, general reading |
| label | Thmanyah Sans 12 | 0.75rem | 500 | 1.4 | 0.02em | Buttons, tags, compact metadata |
| navigation | Thmanyah Sans 12 | 0.875rem | 500 | 1.5 | 0 | Menu items, wayfinding |

The Arabic script receives special attention through generous line height in display sizes, accommodating the vertical depth of Arabic letterforms. Negative tracking on headlines tightens the visual texture without compromising readability. The label size uses slight positive tracking for optical compensation at small scale. Verify licensing for these families before production use.

## Layout

The layout system is built on a fluid, full-bleed approach with centered content anchoring. Sections stack vertically with substantial breathing room, using the 5rem section spacing to create clear territorial boundaries between content modes.

The hero section occupies the full viewport width and height, with content positioned through atmospheric composition rather than rigid grid alignment. The headline sits in the lower-right quadrant, balanced against the Thmanyah logo in the upper-right corner. This diagonal tension creates visual interest while maintaining reading order.

Below the hero, content transitions to a centered, narrower composition. The section display text occupies the upper portion with generous top margin, while the device mockup anchors the lower-right, partially bleeding beyond the implied content boundary. This asymmetry suggests depth and continuation beyond the visible frame.

The implicit grid uses approximately 4rem horizontal margins on desktop, with content maxing around 1200px for text blocks while imagery remains unrestricted. Spacing between elements follows a 1.5rem content-gap for related items, expanding to 5rem between major sections. The 0.25rem unit provides fine adjustment for internal component padding.

Platform icons align horizontally at the bottom-left, establishing a secondary navigation layer that feels grounded and utilitarian against the floating content above.

## Visual language

The visual language draws from premium streaming and editorial sports photography. Imagery is treated with cinematic color grading—desaturated, high-contrast, often with directional lighting that creates depth. The 3D-rendered footballer in the hero exemplifies this approach: monochromatic figure against textured green, with a single warm accent in the golden ball.

Photography in the device mockup maintains this treatment, with crowd and action slightly blurred to emphasize the platform's broadcast quality. The device frame itself is minimal, a dark surface with subtle rounding that contains but does not compete with the content.

Motion is implied through the play button overlay and the dynamic poses of captured athletes. The system suggests kinetic energy without literal animation—frozen moments that anticipate action.

Iconography is reduced to essential glyphs: play triangles, platform logos, and functional media controls. These inherit the ink color and appear at 1.5rem for platform identification, smaller for embedded controls. The save button uses a distinctive red pill with white icon and label, creating a recognizable interaction pattern.

The Thmanyah wordmark appears as a signature element, positioned consistently in the upper-right across contexts, functioning as both brand anchor and navigation home.

## Components

**Hero Section**

- Anatomy: Full-bleed background image or video, Thmanyah logo lockup, headline block, optional save action, CTA button
- Surface: Background uses accent-green tint or photographic imagery; text sits directly on this layer without additional backing
- Typography: hero-display for primary headline, label for CTA
- Shape: No border radius on section; internal elements use pill or panel rounding
- Spacing: Content inset from edges with comfortable margins; headline positioned low to avoid visual competition with central imagery
- Composition: Asymmetric balance with logo upper-right, text lower-right, negative space dominating center-left
- Variants: Imagery may be photographic, 3D render, or video; atmospheric tint adjusts to content mood

**Primary Action Button**

- Anatomy: Text label with optional icon, contained within pill shape
- Surface: surface background with ink text; subtle opacity variation possible for hierarchy
- Typography: label token, medium weight
- Shape: pill rounding at 9999px
- Spacing: 0.75rem vertical padding, 1.5rem horizontal padding
- Composition: Typically positioned near content it serves, often lower-right in hero context
- States: Default appears as described; hover and active states would logically invert or brighten

**Save Button**

- Anatomy: Icon with compact text label, contained in small pill
- Surface: action red background, ink text and icon
- Typography: label token at smallest practical size
- Shape: pill rounding, more compact than primary action
- Spacing: Tight internal padding, approximately 0.5rem by 1rem
- Composition: Positioned as secondary action, currently visible lower-left in hero context
- States: Default only visible; toggled state would logically desaturate or swap icon

**Device Mockup**

- Anatomy: Framed container with rounded corners, internal media content, optional control overlays
- Surface: surface background frame, 1px subtle border possible; internal content full-bleed
- Shape: panel rounding at 0.75rem
- Spacing: Internal padding of 0.5rem creating bezel effect
- Composition: Offset from center, often lower-right; media content bleeds to frame edge
- Overlays: Play button centered on media; control icons in upper-left of frame

**Platform Icon Row**

- Anatomy: Horizontal sequence of platform logos or device icons
- Surface: Transparent, inheriting canvas
- Color: ink for all glyphs
- Spacing: 1.5rem between icons, aligned to left margin
- Composition: Grounding element at section bottom, establishing technical compatibility

## Responsive behavior

The design's full-bleed hero and centered content blocks adapt naturally across viewports. The hero headline should scale down to section-display size on tablet, maintaining lower-right positioning. On mobile, the headline likely centers or moves to lower-center, with margins compressing to 1.5rem.

The device mockup, currently shown at partial scale, should maintain aspect ratio while scaling to fit available width. Platform icons may wrap to two rows or collapse to a scrollable horizontal list on narrow screens.

Text sizes should reduce proportionally: hero-display to 2rem on tablet, 1.75rem on mobile; section-display to 1.75rem and 1.5rem respectively. The 4px unit grid maintains alignment at all sizes.

The save button and primary action should remain tappable at minimum 44px height, with touch targets expanding if visual size compresses.

## Practical implementation guidance

**Preserve**
- The extreme contrast between dark canvas and white ink; this is the system's defining characteristic
- Single-family typography across all weights and sizes
- Full-bleed imagery with minimal UI overlay
- Pill-shaped buttons as the exclusive interactive shape language
- Thmanyah logo placement in upper-right as consistent brand anchor

**Avoid**
- Adding background colors behind text that break the immersive dark field
- Introducing additional type families that fragment the voice
- Using the action red for non-critical elements; its scarcity is its power
- Heavy borders or shadows that compete with photographic content
- Centering all content symmetrically; the asymmetric tension is intentional

**Recommended build order**
1. Establish canvas and ink as foundational colors
2. Implement Thmanyah Sans 12 with complete weight loading
3. Build hero section with full-bleed container and positioned text layers
4. Create pill button component with consistent padding and rounding
5. Add device mockup frame with internal media handling
6. Implement platform icon system with consistent sizing
7. Fine-tune spacing scale across section transitions

**Accessibility**
- Maintain minimum 4.5:1 contrast for all body text; the current ink-on-canvas exceeds 15:1
- Ensure interactive elements meet 44px minimum touch target
- Provide focus indicators that respect the dark theme, likely using ink outlines or subtle surface shifts
- Consider reduced-motion preferences for any cinematic background treatments
- Arabic text requires logical CSS properties for proper bidirectional rendering

## Scope note

This guide covers the landing page hero and feature presentation surfaces visible in the supplied imagery. Interior pages, video player controls beyond the mockup frame, subscription flows, and mobile-specific layouts are not represented. Motion behavior, hover states, and loading sequences are recommended but not documented from still images. Measurements are practical adaptation targets.
