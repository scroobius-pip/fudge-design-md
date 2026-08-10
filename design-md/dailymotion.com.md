# How dailymotion.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dailymotion.com-design)

Last updated: 2026-08-10

## Captured pages

[![Video grid layout with dark thumbnail cards, sidebar navigation, and pink login button on Dailymotion movies category page](https://pin.fontofweb.com/3577?format=jpg)](https://design.withfudge.com/share/pin-3577)

[Video grid layout with dark thumbnail cards, sidebar navigation, and pink login button on Dailymotion movies category page](https://design.withfudge.com/share/pin-3577)

[![Collapsed sidebar navigation showing category icons, popular channels list, and footer links on Dailymotion homepage](https://pin.fontofweb.com/3576?format=jpg)](https://design.withfudge.com/share/pin-3576)

[Collapsed sidebar navigation showing category icons, popular channels list, and footer links on Dailymotion homepage](https://design.withfudge.com/share/pin-3576)

## Overview

Dailymotion presents a video streaming experience built around immersive dark surfaces that let thumbnail imagery dominate the visual field. The interface organizes content into a responsive grid of video cards, each featuring rounded-corner thumbnails with duration badges and overlaid metadata. A collapsible left sidebar provides primary navigation, channel discovery, and category browsing, while a persistent top bar houses search and global actions. The design system prioritizes content density through tight spacing and compact typography, using a vibrant pink accent to draw attention to primary actions like authentication. The overall mood is utilitarian and entertainment-focused, with high contrast between the near-black canvas and bright content imagery, punctuated by the warm accent color that appears sparingly to maintain its impact.

## Colors

The color system is built on a dark-mode foundation with minimal surface variation and a single warm accent. The near-black canvas absorbs visual noise and allows video thumbnails to read as the primary color elements on the page.

| token | value | use |
|---|---|---|
| canvas | `#000000` | Page background, sidebar background, base layer behind all content |
| surface | `#121212` | Video card backgrounds, elevated containers, dropdown menus |
| surface-elevated | `#1e1e1e` | Hover states on navigation items, search bar background, active tooltips |
| ink | `#ffffff` | Primary text, icons on dark backgrounds, button labels on accent |
| muted-ink | `#a0a0a0` | Secondary text, timestamps, channel names, footer links, placeholder text |
| accent | `#ff6b9d` | Login button, active navigation states, primary call-to-action elements |
| accent-hover | `#ff8fb0` | Hover state for accent buttons, lighter pink for pressed or focused states |
| border | `#2a2a2a` | Dividers between sidebar sections, card outlines in focused states, hairline rules |
| overlay | `#000000` | Thumbnail gradient overlays for text legibility, modal backdrops |

The dark palette creates a cinematic viewing environment where the pink accent gains disproportionate visual weight. White text maintains readability across all surfaces, while the muted gray reduces hierarchy for supporting information. The border color is subtle enough to separate regions without introducing visual clutter. No light-mode variant is visible in the supplied material.

## Typography

Two type families serve distinct roles: Abc Ginto Normal Variable handles display and brand moments with its geometric, high-impact character, while Poly Sans-Median manages interface text and body content with clean, neutral legibility. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| brand-display | Abc Ginto Normal Variable | 1.5rem | 700 | 1 | -0.02em | Logo wordmark, major section headers |
| section-heading | Abc Ginto Normal Variable | 1.25rem | 600 | 1.2 | -0.01em | Category titles, page headings |
| body | Poly Sans-Median | 1rem | 400 | 1.5 | 0 | Descriptions, longer content blocks |
| label | Poly Sans-Median | 0.875rem | 500 | 1.25 | 0.01em | Video titles, button labels, navigation items |
| caption | Poly Sans-Median | 0.75rem | 400 | 1.33 | 0.02em | Timestamps, view counts, footer legal text |
| navigation | Poly Sans-Median | 0.875rem | 500 | 1.25 | 0 | Sidebar menu items, category labels |

The brand display weight is reserved for the Dailymotion wordmark and major section divisions, using tight negative tracking to create a cohesive visual mass. Poly Sans-Median at label size carries most of the interface's information density, with the medium weight providing enough presence for navigation without competing with content imagery. Caption size handles the fine-grained metadata that accompanies every video card. Line heights are compact to support dense layouts, with body text receiving slightly more breathing room for readability in longer passages.

## Layout

The page structure follows a classic sidebar-and-content pattern with a fixed navigation rail and scrollable main area. The sidebar occupies a persistent left column that can collapse to an icon-only state, preserving access to primary navigation while maximizing viewport for video content.

The main content area uses a responsive grid of video cards, with columns adapting to available width. Cards maintain consistent aspect ratios for thumbnails, typically 16:9, with metadata stacked below. The grid gap creates subtle separation without requiring visible borders between items.

Vertical rhythm is established through section groupings, each introduced by a heading with generous top spacing. Within sections, cards flow in rows with consistent internal spacing. The sidebar organizes navigation into hierarchical groups: primary actions at top, followed by popular channels with avatar-icon pairs, then category exploration with emoji-style icons, and finally footer links.

The top bar spans the full width above the content area, containing search and global actions while remaining visually subordinate to the content grid. On scroll, the top bar may gain a background fill to maintain legibility over passing content.

## Visual language

The visual character is content-first and minimally decorative. Video thumbnails dominate every view, with the interface receding into a supportive dark frame. Rounded corners appear on all interactive containers, from cards to buttons to avatars, creating a friendly, approachable tone that offsets the stark darkness of the canvas.

Imagery is presented without borders or frames, relying on the thumbnail's own rectilinear shape and rounded corners to define card boundaries. Duration badges and channel verification marks overlay thumbnails directly, using semi-transparent dark backgrounds with white text for guaranteed legibility.

The pink accent is used with restraint, appearing almost exclusively for the login action and active navigation states. This discipline preserves its attention-grabbing power. Icons are simple and functional, with the hamburger menu, home, compass, and checkmark shapes reading clearly at small sizes.

Channel avatars are uniformly circular, creating a recognizable pattern in the popular channels list. Category icons in the explore section use colorful, almost emoji-like imagery that introduces variety against the monochrome interface.

## Components

### Sidebar navigation

- **Anatomy**: Vertical stack of navigation groups separated by subtle spacing. Primary navigation items include icon-label pairs with optional active indicators. Popular channels display circular avatar images beside channel names with verification badges. Category exploration uses illustrative icons. Footer links cluster at the bottom in compact rows.
- **Surface and text color**: Background matches canvas black. Default item text uses ink white. Active or hovered items show accent pink for text and surface-elevated for background.
- **Typography**: Navigation token for all interactive items. Caption token for footer links.
- **Shape and border**: No visible border on individual items. Full sidebar has a right border in border color. Individual nav items use small button-radius rounding on hover.
- **Spacing**: Generous vertical padding between groups. Nav items use nav-item-padding for comfortable touch targets.
- **Composition**: Icon left, label right, with consistent 0.75rem gap. Verification badges appear as small icons inline with channel names.
- **Variants**: Expanded state shows full labels and channel names. Collapsed state hides labels, showing icons only with tooltips on hover.

### Login button

- **Anatomy**: Text label centered within a rectangular button with no icon.
- **Surface and text color**: Solid accent pink background with ink white text.
- **Typography**: Label token, medium weight.
- **Shape and border**: Button-radius rounding, no border.
- **Spacing**: Compact horizontal padding, moderate vertical padding for a pill-like but not fully rounded appearance.
- **Variants**: Hover state lightens toward accent-hover. No visible disabled or loading state in supplied material.

### Video card

- **Anatomy**: Thumbnail image with rounded corners, duration badge positioned bottom-left or bottom-right, title text below, channel name and metadata beneath title, optional channel avatar inline with metadata.
- **Surface and text color**: Thumbnail sits on surface background. Title uses ink. Metadata uses muted-ink. Duration badge uses overlay background with ink text.
- **Typography**: Title uses label token, often two lines with truncation. Metadata uses caption token.
- **Shape and border**: Thumbnail-radius rounding on media container. No visible border on card itself.
- **Spacing**: Tight internal spacing between thumbnail and text. Card-padding for internal breathing room.
- **Composition**: Thumbnail dominates, typically 16:9 aspect ratio. Text stacks below with minimal gap. Metadata row may include small circular avatar, channel name, timestamp, and verification badge.
- **Variants**: Some cards show progress bars or "watched" indicators. Hover state may lift card slightly or brighten thumbnail.

### Search bar

- **Anatomy**: Text input with search icon, placeholder text, and optional clear action.
- **Surface and text color**: Surface-elevated background. Muted-ink for placeholder. Ink for entered text.
- **Typography**: Body token for input text.
- **Shape and border**: Pill-radius for fully rounded ends. No visible border.
- **Spacing**: Comfortable horizontal padding, moderate height.

### Channel avatar

- **Anatomy**: Circular image, sometimes with verification badge overlay.
- **Shape and border**: Fully circular with avatar-radius. No border by default.

## Responsive behavior

The sidebar collapses to icon-only width on smaller viewports or when explicitly toggled, preserving navigation access without consuming horizontal space. The video grid reflows from multiple columns to fewer as viewport narrows, maintaining card size readability rather than squeezing thumbnails below usable dimensions.

On very narrow viewports, the sidebar may hide entirely behind a hamburger toggle, with navigation becoming a full-screen overlay. The top bar search may collapse to an icon that expands on interaction, preserving horizontal space for the logo and primary actions.

Touch targets should maintain minimum 44 by 44 pixel dimensions for all interactive elements. The dense grid layout benefits from generous card padding to prevent accidental taps on adjacent videos.

## Practical implementation guidance

### Preserve
- The near-black canvas as the dominant background; any lighter surface will compete with video content
- The restrained use of pink accent; limit to primary actions and active states only
- Circular avatars as a consistent pattern for channel identification
- Rounded corners on all card and button surfaces for the friendly, approachable tone
- High contrast between thumbnail imagery and overlaid text badges

### Avoid
- Adding decorative borders or shadows that increase visual weight against the dark canvas
- Using the accent color for large background areas; it will overwhelm the interface
- Reducing thumbnail aspect ratios below 16:9; content imagery needs predictable framing
- Light mode implementations without careful consideration of thumbnail contrast

### Recommended build order
1. Establish the dark canvas and surface color tokens
2. Implement the sidebar navigation with collapsed and expanded states
3. Build the video card component with thumbnail, duration badge, and metadata stack
4. Add the responsive grid layout with column reflow behavior
5. Integrate search and top bar components
6. Apply accent color to login and active states last, ensuring restraint

### Accessibility
- Ensure all text over thumbnails meets WCAG contrast requirements; use the overlay token behind text badges
- Provide visible focus indicators on all interactive elements, using accent color or white outlines against dark surfaces
- Include aria-labels on icon-only navigation items in collapsed sidebar state
- Support keyboard navigation through the video grid with clear focus management
- Respect reduced-motion preferences for any sidebar collapse or card hover animations

## Scope note

This guide covers the video browsing grid and sidebar navigation visible on the supplied homepage and category page surfaces. Player page chrome, upload flows, user profiles, settings panels, and mobile-specific layouts are not represented. Motion design, hover states, and loading skeletons are not documented from still images. Measurements are practical adaptation targets.
