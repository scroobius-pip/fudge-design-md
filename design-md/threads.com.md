# How threads.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/threads.com-design)

Last updated: 2026-08-10

## Captured pages

[![Home feed showing three-column layout with left navigation rail, central thread cards with media carousels, and right sidebar with topic suggestions and trending posts](https://pin.fontofweb.com/9543?format=jpg)](https://design.withfudge.com/share/pin-9543)

[Home feed showing three-column layout with left navigation rail, central thread cards with media carousels, and right sidebar with topic suggestions and trending posts](https://design.withfudge.com/share/pin-9543)

[![Post activity modal overlay displaying engagement metrics, follower list with circular avatars, and white Follow buttons against dark background](https://pin.fontofweb.com/8486?format=jpg)](https://design.withfudge.com/share/pin-8486)

[Post activity modal overlay displaying engagement metrics, follower list with circular avatars, and white Follow buttons against dark background](https://design.withfudge.com/share/pin-8486)

[![Account settings page with two-panel layout showing left navigation menu and right content area with grouped setting rows and external-link icons](https://pin.fontofweb.com/4470?format=jpg)](https://design.withfudge.com/share/pin-4470)

[Account settings page with two-panel layout showing left navigation menu and right content area with grouped setting rows and external-link icons](https://design.withfudge.com/share/pin-4470)

[![Privacy settings page with icon-labeled menu items, chevron indicators, and Beta badge on Fediverse sharing option](https://pin.fontofweb.com/4469?format=jpg)](https://design.withfudge.com/share/pin-4469)

[Privacy settings page with icon-labeled menu items, chevron indicators, and Beta badge on Fediverse sharing option](https://design.withfudge.com/share/pin-4469)

## Overview

Threads presents a dark-first social feed experience built around readability and content density. The interface uses a near-black canvas with slightly elevated surface layers to create subtle depth without heavy shadows. Content flows in a three-column desktop layout: a persistent left navigation rail, a central feed of thread cards, and a right sidebar for discovery. The visual system prioritizes photography and media by keeping UI chrome minimal—borders are thin and desaturated, typography stays in a narrow weight range, and interactive elements use rounded pill shapes that feel friendly without being playful. The overall impression is of a calm, focused reading environment where user-generated content takes center stage.

## Colors

The color system is built for dark-mode dominance, with a very limited light-mode accent for specific interactive moments.

| token | hex | use |
|---|---|---|
| canvas | #0A0A0A | Page background, the deepest layer behind all content |
| surface | #101010 | Thread cards, modals, and primary content containers |
| surface-elevated | #181818 | Hover states, active navigation items, settings panels |
| ink | #F3F5F7 | Primary text, headings, active navigation labels |
| ink-secondary | #CCCCCC | Secondary text, timestamps, metadata lines |
| ink-muted | #777777 | Tertiary text, disabled states, placeholder copy |
| action | #18A3FE | Links, verified badges, active states, interactive accents |
| action-hover | #385898 | Pressed or hovered link states |
| border | #2D2D2D | Card borders, dividers, structural separators |
| border-subtle | #1E1E1E | Hairline borders on dark surfaces, inset dividers |
| inverse-surface | #FFFFFF | Primary buttons, follow buttons on dark backgrounds |
| inverse-ink | #000000 | Text on inverse-surface buttons |
| verified-badge | #18A3FE | Verified account indicator dots and checkmarks |

The dark palette creates a cinematic quality that makes photography and video thumbnails pop. Light values are used sparingly: white appears almost exclusively as a button fill to create high-contrast calls to action against the dark canvas. The blue action color is reserved for links and verified indicators, never used for primary surfaces. Border colors are desaturated neutrals that recede visually, keeping attention on content rather than container edges.

## Typography

The type system uses system fonts exclusively for performance and native feel. Two families appear: Applesystem for a small set of UI labels, and System (system-ui) for all body and display text. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| body | System | 0.9375rem | 400 | 1.4 | normal | Thread text, navigation labels, descriptions |
| body-semibold | System | 0.9375rem | 600 | 1.4 | normal | Usernames, thread headings, active nav items |
| section-heading | System | 1.25rem | 600 | 1.25 | normal | Modal titles, page headers, section labels |
| label | System | 0.8125rem | 400 | 1.4 | normal | Timestamps, metadata, secondary descriptions |
| label-semibold | System | 0.8125rem | 600 | 1.4 | normal | Badge text, small headings, metric labels |
| caption | System | 0.75rem | 400 | 1.4 | normal | Fine print, legal copy, helper text |

The hierarchy is flat by design. Most interface text sits at the 15px body size, with weight shifts (400 to 600) doing the work of establishing importance rather than dramatic size jumps. The 20px section-heading appears only for modal titles and page-level headers. Line heights are tight at 1.4, appropriate for a reading-heavy interface where vertical space is at a premium. Letter spacing remains normal throughout—no tracked-out labels or tight display settings.

## Layout

The desktop layout follows a three-column grid with fixed-width sidebars and a fluid center column.

The left navigation rail spans the full viewport height and contains the application logo, primary navigation links (Home, Search, Messages, Activity, Profile), secondary links (Fediverse, Insights, Saved), and feed filters (For you, Following). Navigation items stack vertically with consistent padding, and the active state receives a subtle background fill on surface-elevated. The rail width accommodates icon-plus-label pairs with comfortable internal padding.

The center column carries the main feed content. At its top sits a composer input area with user avatar, placeholder text, and a primary Post button. Below, thread cards stack with consistent vertical spacing. Each card contains the full thread content: user header with avatar, name, handle, timestamp, and overflow menu; text body; media attachments in grid layouts; and an action bar with like, reply, repost, and share controls. The center column has maximum readable width—thread text does not stretch uncomfortably wide.

The right sidebar surfaces discovery content: topic suggestions, trending posts, and recommended accounts. These modules use the same card surfaces as the main feed but with tighter padding and more compact typography.

Spacing follows a 2px base unit. Common values include 8px for tight internal gaps, 12px for card padding, 16px for section separation, and 24px for major structural divisions. Cards use 24px border radius for a soft, approachable silhouette. Media containers inside cards use 12px radius, creating a nested rounding effect that distinguishes content from its frame.

## Visual language

The visual language balances density with breathing room. Thread cards are generously padded internally but sit flush against each other in the feed, separated only by the subtle tonal shift between canvas and surface. This creates a continuous scrolling experience where individual posts read as distinct units without excessive gutter space.

Avatars are circular at 40px for standard posts, with a 2px ring in action blue for verified accounts. Media attachments appear in rounded rectangles with 12px radius, often arranged in grids of two or four with tight 4-8px gaps. Carousels show partial peek images at the edges, inviting horizontal exploration.

Icons are simple line weights, never filled, in the ink or ink-muted colors depending on importance. The navigation rail uses 24px icons with 10px gaps to their labels. Action bars use smaller 20px icons with compact spacing, keeping the interaction layer unobtrusive.

Shadows appear only on elevated surfaces: modals and dropdowns use a subtle black shadow with 4% opacity and 12px blur, plus a deeper 8% shadow with 8px vertical offset for the most prominent overlays. These are the only instances of true depth in the interface—everything else relies on tonal layering.

## Components

### Thread card

Anatomy: User header row with circular avatar, display name in body-semibold, username handle in ink-muted, timestamp, and overflow menu. Text body in body typography. Optional media grid with 1-4 items. Action bar with heart, reply, repost, and share icons with counts in label size.

Surface and text color: Background is surface (#101010). Text uses ink for primary content, ink-secondary for handles and timestamps, action for verified indicators.

Typography: User name in body-semibold, body text in body, metadata in label, action counts in label.

Shape and border: 24px border radius, no visible border by default. Media containers inside use 12px radius.

Spacing: 24px padding on all sides. 12px gap between header and body. 8px gap between body and media. 12px gap between media and action bar. Action bar icons spaced at 16px gaps with 4px between icon and count.

Composition: Full-width within center column. Media grids use CSS grid with auto-fit behavior—single images span full width, pairs sit side-by-side, four items form a 2x2 grid.

Variants: Text-only posts omit the media section. Posts with external links show a link preview card with thumbnail, title, and domain. Carousel posts show horizontal scroll with peek indicators.

### Navigation item

Anatomy: Icon in 24px size, label in body typography, optional notification badge.

Surface and text color: Default state shows transparent background with ink color. Active state uses surface-elevated background fill. Hover transitions between these states.

Typography: body token for labels.

Shape and border: 8px border radius for the clickable area.

Spacing: 8px vertical padding, 12px horizontal padding. 10px gap between icon and label.

Composition: Horizontal flex layout with icon leading. Full width of navigation rail.

### Primary button

Anatomy: Text label, optional leading icon.

Surface and text color: inverse-surface background with inverse-ink text. No border.

Typography: body-semibold.

Shape and border: 10px border radius.

Spacing: 6.5px vertical padding, 9px horizontal padding. 10px gap between icon and text when present.

Variants: Follow buttons appear in this style. Post buttons in the composer use the same treatment.

### Secondary button

Anatomy: Text label only.

Surface and text color: Transparent background, ink text, 1px border in border color.

Typography: body-semibold.

Shape and border: 10px border radius, 1px solid border.

Spacing: Same padding as primary button.

### Modal overlay

Anatomy: Centered panel with title bar, close or back control, scrollable content area.

Surface and text color: surface background, ink title in section-heading, body content in body.

Typography: section-heading for title, body for content, label for metadata.

Shape and border: 24px border radius. Subtle shadow: rgba(0,0,0,0.04) 0px 0px 12px, rgba(0,0,0,0.08) 0px 6px 8px.

Spacing: 16px padding in title bar, 24px padding in content area.

Composition: Fixed maximum width, centered in viewport. Backdrop is canvas at partial opacity.

### Settings row

Anatomy: Leading icon, label text, trailing value or chevron, optional external-link icon.

Surface and text color: Transparent background, ink for label, ink-muted for values, action for external links.

Typography: body for labels, label for values and badges.

Shape and border: Full width, 8px border radius on hover.

Spacing: 12px vertical padding, 24px horizontal padding. 16px gap between icon and label.

Composition: Flex row with space-between alignment. Divider lines between rows at border-subtle.

Variants: Rows with toggle values show current state on the right. Rows with external links show diagonal arrow icon. Beta features show a small pill badge in surface-elevated with label-semibold text.

## Responsive behavior

The three-column layout collapses progressively. At intermediate widths, the right sidebar hides to prioritize feed reading space. At narrow widths, the left navigation rail collapses to icon-only or moves to a bottom tab bar. The center column maintains readable line lengths through max-width constraints rather than fluid expansion.

Thread cards remain full-width in single-column layouts, with media grids adapting to available width. Composer input expands to fill the viewport width with appropriate padding. Modal overlays transition to bottom-sheet behavior on small screens, sliding up from the viewport bottom with a drag handle.

Touch targets maintain minimum 44px height throughout. Action bar icons increase slightly in tap area without changing visible size. Long-press interactions should expose additional options currently hidden behind hover states.

## Practical implementation guidance

### Preserve
- The dark canvas as the default and dominant experience. Light mode, if implemented, should be a complete inversion rather than a partial adjustment.
- The flat type hierarchy with weight-based emphasis. Avoid introducing additional font sizes beyond the established scale.
- The generous card padding (24px) that creates breathing room around dense social content.
- The nested rounding pattern: 24px for cards, 12px for media, 9999px for avatars and pills.
- The system font stack for native performance and platform consistency.

### Avoid
- Heavy borders or outlines on cards. The tonal separation between canvas and surface provides sufficient definition.
- Drop shadows on static cards. Reserve shadows exclusively for elevated overlays and modals.
- Filled icons in the action bar. The line-weight icon style maintains the light, readable interface character.
- Pure black (#000000) for backgrounds. The slightly lifted #0A0A0A canvas prevents harsh contrast with white media content.

### Recommended build order
1. Establish the color tokens and apply canvas and surface backgrounds.
2. Implement the type scale with system fonts at the specified sizes and weights.
3. Build the navigation rail with active and hover states.
4. Create the thread card component with all internal spacing and nested elements.
5. Add the composer input area with avatar, placeholder, and Post button.
6. Implement modal overlays with proper shadow and backdrop behavior.
7. Add the right sidebar with discovery modules.
8. Polish interaction states: hover backgrounds, pressed buttons, focus rings.

### Accessibility
- Ensure all text meets WCAG AA contrast ratios against the dark backgrounds. The ink (#F3F5F7) on surface (#101010) exceeds 7:1.
- Provide visible focus indicators on all interactive elements. The default browser outline may need enhancement for dark backgrounds.
- Add aria-labels to icon-only buttons in the action bar and navigation.
- Respect reduced-motion preferences for any scroll-triggered or entrance animations.
- Maintain logical tab order through the three-column layout: navigation first, then main content, then sidebar.

## Scope note

This guide covers the desktop feed experience, post detail modals, and settings surfaces visible in the supplied images. Mobile layouts, notification systems, direct messaging interfaces, and creation flows beyond the basic composer are not represented. Animation specifications, dark-to-light mode switching logic, and full form validation states are outside the current scope. Measurements derive from the retained interface data where available.
