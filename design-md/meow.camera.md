# How meow.camera is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/meow.camera-design)

Last updated: 2026-08-10

## Captured pages

[![Live cat feeder camera view with control bar showing yellow action button, blue camera toggle pills, and dark overlay interface on video content](https://pin.fontofweb.com/3682?format=jpg)](https://design.withfudge.com/share/pin-3682)

[Live cat feeder camera view with control bar showing yellow action button, blue camera toggle pills, and dark overlay interface on video content](https://design.withfudge.com/share/pin-3682)

[![Dark sidebar navigation with search field, expandable feeder categories, scrollable location list with blue active selection, and footer icons](https://pin.fontofweb.com/3681?format=jpg)](https://design.withfudge.com/share/pin-3681)

[Dark sidebar navigation with search field, expandable feeder categories, scrollable location list with blue active selection, and footer icons](https://design.withfudge.com/share/pin-3681)

## Overview

meow.camera presents a dark, immersive interface built around live video feeds of cat feeders. The design prioritizes the video content by wrapping it in near-black surroundings, then punctuates the darkness with two high-contrast accent colors: a warm yellow for primary actions and a vivid blue for secondary controls and selection states. The interface splits into two primary surfaces: a full-bleed video stage that dominates the viewport, and a collapsible sidebar for navigation between feeder locations. Typography is restrained and functional, using a single sans-serif family at modest sizes that recede behind the imagery. The overall mood is utilitarian and cozy—functional enough for quick interactions, dark enough for comfortable extended viewing, and playful in its naming and iconography without becoming childish.

## Colors

The palette is fundamentally dark-mode, built on layered blacks and grays with two bold accent colors that serve distinct purposes. The yellow draws the eye to primary actions; the blue handles selection, toggles, and interactive feedback.

| token | value | use |
|---|---|---|
| canvas | `#0C0C0C` | Deepest background, video letterboxing, empty states |
| surface | `#1A1A1A` | Sidebar background, elevated panels |
| surface-elevated | `#242424` | Search fields, input backgrounds, hover states on dark surfaces |
| ink | `#FFFFFF` | Primary text, icons on dark backgrounds, active feeder names |
| ink-muted | `#A0A0A0` | Secondary text, timestamps, metadata labels, placeholder text |
| action | `#FFC107` | Primary action buttons, "Open in Purrrr" CTA, star icons |
| action-ink | `#0C0C0C` | Text on action-colored buttons for maximum contrast |
| accent | `#3D5AFE` | Camera toggle pills, selected feeder row, active navigation |
| accent-hover | `#536DFE` | Hover state for accent-interactive elements |
| border | `#333333` | Subtle dividers between sidebar sections, input borders |

The dark base layers create a cinematic viewing environment where the live video appears to float. The yellow action color is used sparingly—typically one instance per view—to maintain its urgency and visibility. The blue accent appears more frequently in toggle groups and list selections, where its cooler temperature differentiates it from the warm action without competing for attention. No gradients or shadows are visible in the interface; depth is created through tonal layering alone.

## Typography

The interface uses Gellix as its sole typeface, a clean geometric sans-serif that renders crisply at small sizes on dark backgrounds. The family is employed at four semantic sizes, all snapped to the 4px relative unit grid.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| display | Gellix | 1.5rem | 400 | 1.2 | -0.01em | Feeder names in header, section titles |
| body | Gellix | 1rem | 400 | 1.5 | 0 | List items, navigation labels, button text |
| label | Gellix | 0.875rem | 400 | 1.25 | 0.01em | Compact buttons, tags, metadata |
| caption | Gellix | 0.75rem | 400 | 1.33 | 0.02em | Timestamps, footer text, fine print |

All weights are Regular (400); the hierarchy is established through size and color contrast rather than weight variation. The slight negative tracking on display text tightens headlines without feeling compressed. Positive tracking on captions improves legibility for the smallest sizes. Verify licensing for these families before production use.

## Layout

The layout follows a classic two-zone pattern: a main content area for immersive video and a secondary sidebar for navigation. On desktop, the sidebar occupies a fixed narrow column on the left, while the video stage fills the remaining viewport width. The video maintains aspect ratio within its container, with the canvas color visible in any letterboxed areas.

The sidebar contains three stacked regions: a header with logo and search, a collapsible category filter, and a scrollable feeder list. The feeder list uses compact row heights with generous horizontal padding, allowing many locations to remain visible without excessive scrolling. A footer with utility icons anchors the bottom of the sidebar.

The video stage overlays its controls directly on the video content rather than in a separate chrome bar. This control bar sits at the bottom edge, using a semi-transparent dark background with backdrop blur to maintain partial visibility of the video beneath. Camera angle toggles ("Front", "Top", "Back") group together on the right side of this bar, while primary actions and sharing tools cluster on the left.

Spacing follows a 4px base unit. Key layout measurements include: 0.5rem for internal button padding, 0.75rem for list item vertical padding, 1rem for sidebar section gutters, and 2rem for major zone separations. The sidebar width appears to be approximately 16-20rem, providing enough room for long feeder names without dominating the viewport.

## Visual language

The visual character is dark, minimal, and content-forward. The interface avoids decorative elements in favor of functional clarity. Rounded corners appear on buttons and inputs at 0.5rem, creating a slightly softened geometric feel without becoming bubbly. Toggle pills for camera angles use full rounding (9999px) to distinguish them from standard buttons and suggest a switchable, mutually-exclusive relationship.

Iconography is simple and line-based, appearing in the muted ink color at rest and brightening to full white on hover. The cat-face logo in the sidebar header uses a hand-drawn, slightly irregular stroke that introduces personality without undermining the otherwise systematic aesthetic.

Photography and video dominate the visual field. The interface makes no attempt to compete with this content; instead, it frames it with darkness and provides tools that appear only when needed. The yellow action button is the single warm element in an otherwise cool-dark environment, creating a clear focal point for the most common user goal—opening a feeder in the companion application.

## Components

### Video Stage
- **Anatomy**: Full-bleed video element with optional letterboxing, overlaid bottom control bar
- **Surface**: Canvas color (`#0C0C0C`) visible in aspect-ratio gaps; video content fills center
- **Typography**: Feeder name in display token, timestamp in caption token, both overlaid on video or control bar
- **Shape**: No border radius on stage itself; rectangular crop
- **Spacing**: Control bar inset 1rem from bottom edge, extending full width with internal 1rem horizontal padding

### Control Bar
- **Anatomy**: Horizontal flex container with left action cluster and right toggle cluster
- **Surface**: Semi-transparent dark background, approximately 85% opacity on canvas color, with 8px backdrop blur
- **Typography**: Button labels in label token, feeder name in display token
- **Shape**: No explicit border radius on bar; individual buttons carry 0.5rem radius
- **Spacing**: 0.75rem gap between buttons; 1rem internal padding
- **Composition**: Primary action (yellow) left-aligned; camera toggles (blue pills) right-aligned; metadata and secondary actions centered between or flanking

### Primary Action Button
- **Anatomy**: Icon + text label, or icon-only in compact states
- **Surface**: Action yellow (`#FFC107`) background with action-ink (`#0C0C0C`) text and icon
- **Typography**: Label token, weight 400
- **Shape**: 0.5rem border radius
- **Spacing**: 0.5rem vertical padding, 0.75rem horizontal padding; 0.5rem gap between icon and text
- **Variants**: "Open in Purrrr" with external-link icon; "Favorite" with star icon; "Copy link" with chain icon; "Snap" with camera icon; "Clip" with scissors icon

### Toggle Pill Group
- **Anatomy**: Two or more horizontally adjacent pill buttons
- **Surface**: Accent blue (`#3D5AFE`) for active/selected; surface-elevated or transparent for inactive
- **Typography**: Label token, white text
- **Shape**: 9999px full pill radius
- **Spacing**: 0.25rem gap between pills; 0.5rem vertical padding, 1rem horizontal padding per pill
- **Composition**: "Front", "Top", "Back" camera angles; exactly one active at a time

### Sidebar
- **Anatomy**: Vertical stack: logo header, search field, category dropdown, feeder list, footer icons
- **Surface**: Surface color (`#1A1A1A`) background; border-right in border color
- **Typography**: Category headers in label token with muted ink; feeder names in body token; selected feeder in body token with white ink on accent background
- **Shape**: No border radius on sidebar container; internal inputs at 0.5rem
- **Spacing**: 1rem horizontal padding throughout; 0.75rem vertical padding on list items; 2rem between major sections

### Search Field
- **Anatomy**: Text input with search icon prefix
- **Surface**: Surface-elevated (`#242424`) background; no visible border; placeholder in muted ink
- **Typography**: Body token for input text; caption token for placeholder
- **Shape**: 0.5rem border radius
- **Spacing**: 0.75rem vertical padding, 1rem horizontal padding; 0.5rem gap between icon and text

### Feeder List Item
- **Anatomy**: Single-line text row, optionally with subtitle parenthetical
- **Surface**: Transparent at rest; accent blue (`#3D5AFE`) when selected
- **Typography**: Body token; white ink when selected, standard ink otherwise
- **Shape**: No border radius on full-width rows
- **Spacing**: 0.75rem vertical padding, 1rem horizontal padding
- **States**: Default, hover (subtle surface-elevated background), selected (accent background, white text)

## Responsive behavior

The interface appears optimized for desktop viewing given the side-by-side sidebar and video stage. For narrower viewports, the sidebar should collapse to an overlay or drawer pattern, allowing the video to remain visible at meaningful size. The control bar should remain fixed at the bottom of the video area, with buttons potentially collapsing to icon-only at the smallest widths.

The camera toggle pills may need to reduce to a dropdown or segmented control on very narrow screens. The primary action button should remain fully visible and tappable, as it represents the core conversion path.

Touch targets should maintain minimum 44px height even when visual padding compresses. The dark palette naturally reduces eye strain during nighttime viewing, which aligns with likely usage patterns for live pet cameras.

## Practical implementation guidance

### Preserve
- The near-black canvas color as the dominant background; any lighter value will break the immersive video experience
- The single yellow primary action per view—multiple yellow buttons dilute the hierarchy
- The full-pill shape for camera angle toggles; this distinguishes them from standard actions
- The hand-drawn quality of the cat logo against the otherwise systematic geometry

### Avoid
- Adding borders or shadows to the video stage; the flat darkness is intentional
- Using the accent blue for primary actions; reserve it for selection and toggle states
- Introducing additional font weights or families; the single-weight Gellix system is sufficient
- Light-mode variants unless specifically required; the dark palette is central to the brand

### Recommended build order
1. Establish the dark color system with canvas, surface, and ink tokens
2. Implement Gellix at the four defined sizes with proper line heights
3. Build the video stage with aspect-ratio preservation and letterboxing
4. Create the control bar with backdrop blur and button clusters
5. Construct the sidebar with search, category filter, and scrollable list
6. Add interaction states: hover, selected, active for all interactive elements
7. Implement responsive collapse for the sidebar on narrow viewports

### Accessibility
- Ensure the yellow action button meets contrast ratios against its dark surroundings; the black text on yellow should exceed 4.5:1
- Provide visible focus indicators on all interactive elements; the default browser outline may be insufficient against dark backgrounds
- Add `aria-pressed` or similar state indication to the camera angle toggle group
- Consider reduced-motion preferences for any video loading or transition effects
- The search field should have an accessible label even if visually hidden

## Scope note

This guide covers the live feeder camera view and sidebar navigation as visible on the landing experience. Mobile layouts, breakpoint-specific adaptations, loading states, error handling, and video playback controls beyond camera angle selection are not represented in the source material. Measurements are practical adaptation targets derived from visual inspection.
