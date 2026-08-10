# How twitch.tv is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/twitch.tv-design)

Last updated: 2026-08-10

## Captured pages

[![Twitch Turbo subscription modal with purple gradient header, feature list, and primary action buttons on dark canvas](https://pin.fontofweb.com/6568?format=jpg)](https://design.withfudge.com/share/pin-6568)

[Twitch Turbo subscription modal with purple gradient header, feature list, and primary action buttons on dark canvas](https://design.withfudge.com/share/pin-6568)

[![Channel page header showing streamer avatar, live badge, title, category tags, and dark navigation bar](https://pin.fontofweb.com/3694?format=jpg)](https://design.withfudge.com/share/pin-3694)

[Channel page header showing streamer avatar, live badge, title, category tags, and dark navigation bar](https://design.withfudge.com/share/pin-3694)

## Overview

Twitch presents a dark-first interface built for high-volume content consumption and real-time community interaction. The visual system prioritizes immediate readability against near-black surfaces, using electric purple as the singular accent color for actions, branding moments, and interactive states. Information density is high: channels, categories, and live statuses compete for attention in tightly packed grids and lists, so the typography stays compact and the color hierarchy aggressively separates active from inactive elements.

The platform's personality emerges through two typefaces: Roobert Tw for display moments that need brand presence, and Inter for everything functional—navigation, labels, body copy, and buttons. This pairing keeps the interface feeling contemporary and utilitarian while reserving warmer, more distinctive letterforms for headlines and marketing surfaces. Rounded corners are minimal and purposeful: 4px for panels and cards, full pills for buttons and badges. Shadows are sparse and heavy when they appear, creating depth through opacity rather than blur diffusion.

## Colors

The palette is built on a near-black foundation with a narrow range of grays for text hierarchy and one saturated purple for all interactive and branded moments. Every color serves a specific role in reducing eye strain during extended viewing sessions while maintaining sufficient contrast for small text and UI chrome.

| token | value | use |
|---|---|---|
| canvas | `#0E0E10` | Primary page background, main content areas |
| surface | `#000000` | Elevated panels, modals, tag backgrounds, deepest shadows |
| ink | `#EFEFF1` | Primary text, headings, active navigation |
| muted-ink | `#D3D3D9` | Secondary text, descriptions, inactive labels |
| dim-ink | `#53535F` | Tertiary text, placeholders, disabled states |
| action | `#772CE8` | Primary buttons, links, branded headers, live status indicators |
| on-action | `#FFFFFF` | Text on action-colored backgrounds |

The dark mode is not an alternative—it is the default and only visible state. Light text on dark surfaces reduces glare for users watching streams in dim environments. The action purple (`#772CE8`) carries all interactive meaning: it appears in subscription buttons, category highlights, marketing headers like the Twitch Turbo modal, and the live badge visible on the channel avatar. Grays are carefully stepped: ink for maximum contrast, muted-ink for supporting copy, dim-ink for structural or disabled elements. No pastel or mid-tone backgrounds appear; surfaces are either canvas-level or fully black.

## Typography

Two families drive the hierarchy: Roobert Tw for display and brand moments, Inter for functional interface text. Roobert Tw appears in Medium weight only, giving headlines a rounded, approachable character without heaviness. Inter covers four sizes across Regular and Semibold weights, handling everything from navigation to legal disclaimers.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Roobert Tw | 2.5rem | 500 | 1.1 | -0.02em | Modal headers, marketing headlines |
| section-display | Roobert Tw | 1.5rem | 500 | 1.2 | -0.01em | Section titles, feature callouts |
| body | Inter | 0.875rem | 400 | 1.4 | normal | Primary body text, descriptions |
| body-small | Inter | 0.75rem | 400 | 1.4 | normal | Secondary descriptions, metadata |
| label | Inter | 0.75rem | 600 | 1.33 | normal | Tags, badges, category labels |
| button | Inter | 0.875rem | 600 | 1.4 | normal | Button text, primary actions |

Inter is designed by Rasmus Andersson and distributed by Rsms. Roobert Tw carries no attributed designer or vendor in the available records. Verify licensing for these families before production use.

The type scale is tight: 12px and 14px dominate the interface, with display sizes reserved for modal marketing surfaces. Line heights stay compact (1.4 or tighter) to preserve vertical space in scrollable lists. Letter spacing is slightly negative for display sizes to prevent looseness at large scale, and neutral for body text. No italic styles or additional weights appear in the visible system.

## Layout

The interface follows a full-bleed dark canvas with contained content regions. Navigation and discovery surfaces use a single-column or grid layout depending on context, while modals and marketing overlays center above the page with fixed positioning.

The base spacing unit is 4px (0.25rem), with common increments at 8px, 12px, 16px, and 24px. This produces a dense, efficient rhythm: 8px for internal element padding, 16px for card and panel gutters, 24px for section breaks. Margins between unrelated groups typically run 16px vertical, with 8px for tightly coupled label-value pairs.

Page structure places persistent navigation at the top, followed by scrollable content regions. Channel pages show a header band with streamer identity, live status, and metadata tags, then content below. Modals like the Twitch Turbo overlay use a rounded-top container (4px top radius, 0px bottom) that sits above the page with a shadow layer. The modal header often carries a gradient or solid action color, while the body returns to canvas or surface tone.

Grid behavior for content discovery is not fully visible in the supplied images, but the density suggests a responsive column system that reflows cards at standard breakpoints. Channel thumbnails and category tiles likely share uniform aspect ratios with consistent internal padding.

## Visual language

The aesthetic is deliberately utilitarian with moments of brand warmth. Purple gradients in marketing headers provide the only color complexity; elsewhere, the interface is flat, borderless, and shadow-minimal. Elevation is communicated through background color shifts rather than borders—surface black against canvas gray creates subtle depth without visual noise.

Imagery and avatars are circular, cropped tightly, and displayed without borders. The live badge overlays the avatar edge with a small purple pill, creating a status halo effect that uses the same action color as interactive elements. Category and content tags use the same minimal radius as panels, keeping the vocabulary consistent.

Motion and animation are not visible in still images, but the system's density implies quick transitions: immediate color inverts on hover, rapid modal entrances. The heavy shadow (`rgba(0, 0, 0, 0.9) 0px 1px 2px 0px, rgba(0, 0, 0, 0.9) 0px 0px 2px 0px`) on modal chrome suggests hard-edged, performant elevation rather than diffuse ambient depth.

Iconography is simple and monochrome, matching text color at each level. No outlined icon style appears; fills are solid and compact. The gift icon in the Turbo modal uses the same muted-ink as secondary text, while the subscribe button pairs a white icon with white text on purple.

## Components

### Primary button

- **Anatomy**: Text label with optional leading icon, no visible border.
- **Surface**: Solid action purple (`#772CE8`) background.
- **Typography**: Inter Semibold, 14px, white text.
- **Shape**: Full pill radius (9999px), padding 12px horizontal.
- **Spacing**: Height emerges from padding and line height; no fixed height declared.
- **Composition**: Icon and text sit inline with standard gap; icon precedes text for actions like "Subscribe" or "Gift Turbo."
- **Variants**: A secondary variant uses surface black background with ink text for lower-emphasis actions.

### Tag / category pill

- **Anatomy**: Text label only, no icon.
- **Surface**: Surface black background.
- **Typography**: Inter Regular, 12px, muted-ink color.
- **Shape**: 4px radius, padding 4px 8px.
- **Composition**: Tags flow inline with 8px gaps, wrapping naturally.
- **Variants**: Active or selected tags may shift to action purple with white text; this state is implied by the system's color logic but not confirmed in still images.

### Live badge

- **Anatomy**: Text label "LIVE" in uppercase.
- **Surface**: Action purple (`#772CE8`) background.
- **Typography**: Inter Semibold, 12px, white text.
- **Shape**: Full pill radius, tight padding.
- **Composition**: Overlaps avatar or thumbnail edge, typically bottom-left or top-left corner.
- **States**: Static in supplied images; likely pulses or glows during broadcast.

### Modal / marketing overlay

- **Anatomy**: Header region with branded background, body with feature list, footer with action buttons.
- **Surface**: Header uses action purple or gradient; body uses canvas or surface.
- **Typography**: Header uses Roobert Tw Medium for product name; body uses Inter Regular for descriptions.
- **Shape**: 4px top radius, squared bottom; full-width on mobile, constrained width on desktop.
- **Spacing**: 24px top margin for header text, 16px between feature items, 16px bottom margin for legal disclaimer.
- **Composition**: Centered content, stacked vertically; feature items use icon + text pairs with 8px gaps.
- **Shadow**: Heavy black shadow for elevation above page content.

### Avatar

- **Anatomy**: Circular image container.
- **Surface**: No border, no shadow; image fills container.
- **Shape**: 50% radius for perfect circle.
- **Composition**: Typically 40–48px in channel headers, larger on profile surfaces.

## Responsive behavior

The supplied images show desktop-width layouts. The modal overlay likely becomes full-screen or near-full-screen on narrow viewports, with stacked action buttons replacing side-by-side arrangements. Channel header information may collapse: tags could hide behind a "more" disclosure, and secondary metadata might move below the title rather than remaining inline.

Text sizes should remain fixed at 14px and 12px for body content; display sizes may scale down slightly on mobile but should preserve the Roobert Tw brand presence. Touch targets for buttons and tags must maintain at least 44px height when converted to native mobile equivalents, though the web interface may rely on padding expansion.

Grid-based discovery surfaces should reflow from multi-column to single-column at approximately 768px, with cards expanding to full width and maintaining their aspect ratios. The left navigation sidebar, if present in full layouts, likely collapses to icons or hides entirely on narrow screens.

## Practical implementation guidance

### Preserve
- The near-black canvas as the only background mode; do not introduce light themes without complete palette rederivation.
- The strict two-family type hierarchy: Roobert Tw for display, Inter for everything functional.
- Full pill buttons as the primary interactive shape; reserve 4px radius for containers and tags only.
- The action purple as the single accent for both interactive and status purposes.

### Avoid
- Mid-tone grays between dim-ink and canvas; they create muddy depth in dark interfaces.
- Borders as separators; rely on background color shifts and spacing instead.
- Multiple accent colors; purple carries all interactive and status meaning.
- Large border-radius values on panels; 4px is the maximum visible container radius.

### Recommended build order
1. Establish the dark canvas and surface color tokens.
2. Implement Inter at 14px/12px with Regular and Semibold weights for all functional text.
3. Add Roobert Tw Medium for modal headers and marketing surfaces.
4. Build the pill button component with action purple and full radius.
5. Create the tag component with surface background and muted-ink text.
6. Implement modal structure with gradient or solid header, feature list, and stacked footer actions.
7. Add live badge as an overlay component with absolute positioning.

### Accessibility
- White and ink text on action purple must meet WCAG AA contrast; the current `#772CE8` on white passes, but verify for smaller text sizes.
- Dark mode is mandatory for user comfort; respect system preferences if offering alternatives.
- Focus indicators should use visible outlines (likely white or action-colored) rather than relying on browser defaults against dark backgrounds.
- Live badge should not be the sole indicator of status; pair with text or ARIA live regions for screen readers.

## Scope note

This guide covers the channel page header, subscription modal, and global navigation chrome visible in the supplied images. It does not include chat interfaces, video player controls, creator dashboards, mobile-native layouts, animation specifications, or dark-mode toggle behavior. Measurements are drawn from retained interface records and verified against visible composition.
