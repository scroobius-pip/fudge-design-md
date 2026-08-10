# How bsky.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/bsky.app-design)

Last updated: 2026-08-10

## Captured pages

[![Bluesky landing page with centered butterfly logo, dark navy canvas, blue action button, and muted secondary sign-in button above footer links](https://pin.fontofweb.com/2864?format=jpg)](https://design.withfudge.com/share/pin-2864)

[Bluesky landing page with centered butterfly logo, dark navy canvas, blue action button, and muted secondary sign-in button above footer links](https://design.withfudge.com/share/pin-2864)

[![Bluesky Discover feed with left sidebar CTA, post cards containing media thumbnails, interaction icons, and verified badges in blue](https://pin.fontofweb.com/1961?format=jpg)](https://design.withfudge.com/share/pin-1961)

[Bluesky Discover feed with left sidebar CTA, post cards containing media thumbnails, interaction icons, and verified badges in blue](https://design.withfudge.com/share/pin-1961)

## Overview

Bluesky presents a dark-first social interface that prioritizes content readability and clear calls to action over decorative complexity. The design system rests on a deep navy canvas that extends edge to edge, creating an immersive, low-light environment suited for extended browsing sessions. Electric blue serves as the singular accent color, appearing in the butterfly logo, primary buttons, verified badges, and interactive links. The interface avoids gradients and heavy shadows, relying instead on subtle border divisions and generous negative space to separate content regions. Typography is handled entirely by Inter Tight, a geometric sans-serif that delivers crisp legibility at all scales. The layout philosophy splits between centered landing experiences and asymmetric feed layouts, with a persistent left sidebar anchoring navigation and conversion actions while the main content area scrolls through card-based posts. This system demonstrates restraint: every element earns its place through functional necessity rather than ornamental impulse.

## Colors

The color palette is intentionally narrow, deriving its character from value contrast rather than chromatic variety. The deep navy canvas establishes a nighttime atmosphere that reduces eye strain and makes photographic content pop. Electric blue functions as the sole accent, carrying all interactive and brand meaning. Neutral grays handle secondary text and borders without competing for attention.

| token | value | use |
|---|---|---|
| canvas | `#0f1720` | Primary background for all screens, the dominant dark navy that fills the viewport |
| surface | `#1a2332` | Elevated panels, secondary button backgrounds, and subtle containment areas |
| action | `#208bfe` | Primary buttons, butterfly logo, verified badges, active navigation states, and inline links |
| action-hover | `#4da3ff` | Lighter blue for hover states on interactive elements |
| ink | `#ffffff` | Primary text on dark backgrounds, headings, and high-priority content |
| muted-ink | `#8a9bb0` | Secondary text, timestamps, placeholder copy, and inactive states |
| border | `#2a3441` | Hairline divisions between cards, sidebar separators, and subtle containment borders |
| verified | `#208bfe` | Checkmark badges adjacent to account names, identical to action for brand consistency |

The palette operates in a single dark mode with no light variant visible. Photographic content appears unfiltered against the dark canvas, allowing user-generated images to supply their own color temperature. The blue accent is saturated enough to remain visible against both the dark canvas and lighter media thumbnails, ensuring accessibility for interactive elements. No gradient overlays or shadow tints are employed; color transitions happen through flat value steps.

## Typography

All text is set in Inter Tight, a geometric sans-serif designed by Rasmus Andersson and distributed by Rsms. The family is used in Regular and Bold weights only, with size and weight pairings creating hierarchy rather than stylistic variation. Tracking is tight for display sizes and neutral for body text, preserving the typeface's engineered clarity.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter Tight | 3rem | 700 | 1.1 | -0.02em | Landing page brand name and major headlines |
| section-display | Inter Tight | 2rem | 700 | 1.2 | -0.01em | Sidebar section headings and empty-state titles |
| body | Inter Tight | 1rem | 400 | 1.5 | 0em | Post text, descriptions, and general reading content |
| body-medium | Inter Tight | 1rem | 500 | 1.5 | 0em | Emphasized body text and account display names |
| label | Inter Tight | 0.875rem | 500 | 1.25 | 0em | Button labels, navigation items, and metadata |
| navigation | Inter Tight | 0.875rem | 500 | 1.25 | 0em | Sidebar links, footer links, and wayfinding |
| legal-copy | Inter Tight | 0.75rem | 400 | 1.5 | 0em | Copyright, terms links, and auxiliary fine print |

Verify licensing for these families before production use. The type scale is built on a 4px grid, with sizes progressing from 12px (0.75rem) through 14px (0.875rem), 16px (1rem), 32px (2rem), and 48px (3rem). No italic styles or condensed variants are employed. Line heights are generous for body reading and tight for display, preventing the large headings from feeling loose while maintaining comfortable paragraph scanning.

## Layout

The interface adapts its layout structure based on user authentication state. Unauthenticated visitors encounter a centered, vertically stacked composition with the brand mark, value proposition, and dual action buttons occupying the vertical center of the viewport. Authenticated or browsing users see a split-pane layout with a fixed left sidebar and a scrolling main content area.

The centered landing layout uses a maximum content width of approximately 28rem, with all elements aligned to a single central axis. The butterfly logo sits above the wordmark with comfortable vertical spacing, followed by a subtitle, then the primary and secondary actions stacked with a narrow gap. Below the fold, a minimal footer spans the full width with inline links and a language selector.

The feed layout establishes an 18rem left sidebar that remains fixed during scroll. This sidebar contains the brand mark, a section heading, the primary conversion actions, and language selection. The main content area occupies the remaining viewport width, with a maximum readable column for post cards. A top navigation bar spans the main area, presenting tab switches between "Discover" and "Feeds" with an underline indicator for the active state.

Post cards within the feed stack vertically with hairline borders separating them. Each card contains a header row with avatar, account name, handle, timestamp, and options; a body region with text and optional media; and a footer row with interaction icons and counts. Media attachments span the full card width with rounded corners, sitting flush against the card padding.

Spacing follows a 4px base unit. Major sections are separated by 1.5rem to 2rem. Card internal padding is 1rem on all sides. The sidebar uses 1.5rem internal padding. Content gaps between unrelated elements are 1rem. The overall density is moderate, with enough breathing room to prevent the dark interface from feeling heavy.

## Visual language

The visual character of Bluesky is defined by restraint and functional clarity. The butterfly logo is the sole illustrative element, rendered in flat electric blue without outline or dimension. No other icons receive color treatment; interaction icons in post footers remain in muted gray, activating only on hover or when selected.

Rounded corners are applied consistently but conservatively. Buttons use a moderate 8px radius that feels friendly without appearing pill-shaped. Cards and media containers use slightly larger 12px radii to soften their containment. The language selector and fully rounded elements use 9999px for perfect circles or capsules.

Borders are hairline thin, appearing as 1px solid lines in the border color. They separate cards, define the sidebar edge, and underline active navigation tabs. No box shadows are employed for elevation; depth is communicated purely through the surface color step between canvas and elevated panels.

Photographic content appears without overlay, border, or filter. Media thumbnails in posts are cropped to consistent aspect ratios and rounded at the corners. The dark canvas creates natural contrast that makes images feel luminous without additional treatment.

The interface avoids decorative patterns, background textures, and animated elements in its static state. Motion, if present, would likely be reserved for micro-interactions such as button presses and like-state toggles. The overall impression is of a tool rather than a destination, prioritizing content consumption over brand spectacle.

## Components

**Primary Action Button**
- Anatomy: Text label centered within a solid fill container
- Surface: action background with ink text
- Typography: label token, medium weight
- Shape: 8px border radius, full-width on mobile or fixed width on desktop
- Spacing: 12px vertical padding, 24px horizontal padding
- Composition: Stacked above secondary action with 8px gap on landing; inline with secondary action in sidebar
- States: Default presents at full saturation; hover would shift to action-hover

**Secondary Action Button**
- Anatomy: Text label centered within a solid fill container
- Surface: surface background with muted-ink text
- Typography: label token, medium weight
- Shape: 8px border radius, matching primary action dimensions
- Spacing: Identical padding to primary action
- Composition: Paired with primary action; receives less visual weight through color value
- States: Default is subdued; hover would likely lighten text to ink

**Post Card**
- Anatomy: Header row, body region, optional media attachment, footer interaction bar
- Surface: Transparent against canvas, separated by border hairlines
- Typography: body for content, body-medium for account names, label for metadata and counts
- Shape: No outer border radius on the card itself; media attachments use 8px radius
- Spacing: 16px internal padding, 12px gap between header and body, 8px gap between body and footer
- Composition: Full-width within content column, stacked vertically with adjacent cards
- Hierarchy: Account name and avatar establish authorship; timestamp and options recede to muted-ink; content occupies primary reading zone; media breaks the text rhythm when present

**Sidebar Panel**
- Anatomy: Brand mark, section heading, action button group, language selector
- Surface: Canvas background, continuous with page
- Typography: section-display for heading, label for buttons, navigation for links
- Shape: Fixed 18rem width, no border radius on the panel
- Spacing: 24px internal padding, 16px gap between elements
- Composition: Vertically stacked, left-aligned, fixed position during scroll
- Variants: Landing page simplifies to centered stack without sidebar structure

**Top Navigation Tabs**
- Anatomy: Two text labels with active indicator
- Surface: Transparent, with border-bottom on active state
- Typography: label token, medium weight
- Shape: Full-width bar, underline indicator at 2px height
- Spacing: 16px horizontal padding per tab, 12px vertical padding
- Composition: Centered within main content area, above scrollable feed
- States: Active tab receives action-colored underline; inactive tabs remain in muted-ink

**Interaction Bar**
- Anatomy: Row of icon-button pairs for reply, repost, like, bookmark, share, and options
- Surface: Transparent, icons in muted-ink
- Typography: label token for counts
- Shape: Icon buttons are touch targets with no visible button chrome
- Spacing: Equal distribution across available width, 8px gap between icon and count
- Composition: Horizontal row below post content
- States: Default is muted; selected states would shift to action color for likes and reposts

## Responsive behavior

The layout transitions between centered single-column and split-pane based on viewport width. At narrow widths, the sidebar collapses or hides entirely, presenting the feed full-width with a minimal top bar for navigation. The landing page maintains its centered stack across all widths, with button widths expanding to fill available horizontal space on the narrowest viewports.

Typography scales down modestly on smaller screens. The hero-display reduces from 48px to 36px or 32px to prevent overflow. Body text remains at 16px for readability. Touch targets for interaction icons expand to minimum 44px height.

The feed's media attachments maintain aspect ratio while scaling to fit the available card width. On very narrow viewports, card padding reduces from 16px to 12px to maximize content area.

When implementing responsive behavior, the sidebar should become a slide-out drawer or collapse to a bottom navigation bar rather than compressing horizontally. The dual-button pattern in the sidebar should stack vertically when horizontal space is constrained.

## Practical implementation guidance

**Preserve**
- The dark canvas as the default and only mode; do not introduce a light theme without explicit design direction
- The single blue accent for all interactive and brand moments; resist adding secondary accent colors
- The flat, shadowless elevation system; rely on borders and spacing for separation
- The generous line height on body text for comfortable reading of potentially long posts
- The consistent 4px spacing grid throughout all measurements

**Avoid**
- Gradient backgrounds or gradient buttons that would break the flat material language
- Drop shadows on cards or buttons; the dark canvas makes shadows invisible or muddy
- Multiple font families; the system depends on Inter Tight's neutrality
- Rounded corners larger than 12px on containers, which would feel overly casual
- Borders thicker than 1px, which would add visual weight inconsistent with the hairline aesthetic

**Recommended build order**
1. Establish the dark canvas background and load Inter Tight with Regular and Bold weights
2. Implement the type scale with exact rem values and verify vertical rhythm on sample posts
3. Build the primary and secondary button components with correct color, radius, and padding
4. Create the post card structure with header, body, media, and footer regions
5. Assemble the split-pane layout with fixed sidebar and scrolling main area
6. Add the top navigation tabs with active underline indicator
7. Implement interaction icons with touch targets and count labels
8. Polish with hover states and verify contrast ratios meet WCAG AA for all text sizes

**Accessibility**
- Ensure the action blue (#208bfe) against canvas (#0f1720) meets WCAG AA contrast for normal text; the combination should exceed 4.5:1
- Provide visible focus indicators that do not rely solely on color change; consider outline or background shift
- Maintain minimum 44px touch targets for all interactive icons in post footers
- Use semantic heading hierarchy with a single h1 per view, descending logically through post content
- Ensure the language selector is keyboard accessible and announces its purpose to screen readers
- Verify that muted-ink text (#8a9bb0) against canvas meets at least 3:1 for large text or UI components, though it may fall below 4.5:1 for small body text; consider lightening if used for critical information

## Scope note

This guide covers the unauthenticated landing page and Discover feed visible in the supplied images. Measurements are practical adaptation targets. Items not covered include authenticated user flows, profile pages, search interfaces, notification systems, settings panels, composer interfaces, direct messaging, mobile-native layouts, dark-to-light mode switching, loading and empty states, error pages, and any motion or animation behavior. The exact spacing, radius, and font-size values were not retained in the source material and have been reconstructed from visual inspection against the 4px grid.
