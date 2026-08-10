# How wip.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/wip.co-design)

Last updated: 2026-08-10

## Captured pages

[![Main feed view showing todo items, user avatars, sidebar navigation with streaks leaderboard, and yellow join CTA card](https://pin.fontofweb.com/7067?format=jpg)](https://design.withfudge.com/share/pin-7067)

[Main feed view showing todo items, user avatars, sidebar navigation with streaks leaderboard, and yellow join CTA card](https://design.withfudge.com/share/pin-7067)

[![Join modal overlay with WIP logo, headline, feature grid with emoji icons, and maker community social proof avatars](https://pin.fontofweb.com/7066?format=jpg)](https://design.withfudge.com/share/pin-7066)

[Join modal overlay with WIP logo, headline, feature grid with emoji icons, and maker community social proof avatars](https://design.withfudge.com/share/pin-7066)

## Overview

WIP.co presents a productivity community platform built around daily shipping habits. The interface combines a social feed format with task-oriented functionality, creating a space where makers share incremental progress. The visual system relies on stark contrast: a near-black sidebar anchors the left edge while the main content area remains clean and white. Yellow appears as an energetic accent reserved for community calls-to-action, particularly the "Join now" button and promotional card. The overall impression is utilitarian and focused—content density is high, ornamentation is minimal, and every element serves the core loop of posting, tracking, and celebrating daily work. The design prioritizes scannability through consistent avatar sizing, standardized card treatments, and a clear hierarchy between user-generated content and platform chrome.

## Colors

The color system operates in three distinct modes: the dark navigation shell, the light content surface, and the yellow accent system for conversion moments.

| token | value | use |
|---|---|---|
| canvas | `#000000` | Left sidebar background, modal backdrop overlay |
| surface | `#FFFFFF` | Main feed background, card backgrounds, modal content |
| surface-elevated | `#FFFFFF` | Elevated cards with subtle shadow |
| ink | `#000000` | Primary text, headings, feed item content |
| ink-secondary | `#171717` | Secondary headings, button text on light surfaces |
| ink-tertiary | `#404040` | Muted labels, tertiary information |
| ink-muted | `#737373` | Timestamps, inactive states, helper text |
| ink-inverse | `#FFFFFF` | Text on dark sidebar, icons in navigation |
| border | `#E5E5E5` | Card borders, dividers, input borders |
| border-subtle | `#D4D4D4` | Hairline separators, subtle boundaries |
| action-primary | `#FADC00` | Primary CTA buttons, join card background, logo mark |
| action-primary-hover | `#FFDF20` | Brighter yellow for hover states on primary actions |
| action-secondary | `#E9D4FF` | Pro badge backgrounds, subtle accent surfaces |
| action-link | `#155DFC` | Hashtag links, external references, interactive text |
| action-link-bright | `#2B7FFF` | Hover state for links, brighter interactive moments |
| status-pro | `#8200DB` | Pro membership indicator text and accents |

The dark sidebar creates a strong vertical frame that contains navigation icons and the platform logo. Against this black shell, the yellow logo mark and white icons achieve maximum visibility. The main content area inverts this relationship: black text on white ground with gray borders defining card boundaries. Yellow is deliberately constrained to conversion surfaces—the "New to WIP?" card and "Join now" button—making it function as a visual alarm for community entry points. Purple appears exclusively as a status indicator for Pro members, creating a secondary accent system that signals membership tier without competing with the primary yellow action color. Green checkmarks in the feed indicate completed tasks, rendered with a standard success hue rather than a custom brand color.

## Typography

The type system uses system sans-serif families across all contexts, relying on weight and size variation rather than family change to establish hierarchy. The documented families are System and System-Uisansserif. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | System | 3rem | 800 | 1 | -0.02em | Modal headlines, major landing moments |
| section-display | System | 1.875rem | 400 | 1.2 | normal | Section introductions, empty states |
| heading | System | 1.125rem | 700 | 1.556 | normal | Card titles, feature names, CTA headlines |
| subheading | System | 1.125rem | 600 | 1.556 | normal | Feed item context, secondary headings |
| body | System | 1rem | 400 | 1.5 | normal | Primary reading text, todo descriptions |
| body-large | System | 1.125rem | 400 | 1.556 | normal | Introductory paragraphs, explanatory copy |
| label | System | 0.875rem | 500 | 1.429 | normal | Buttons, navigation labels, metadata |
| caption | System | 0.875rem | 400 | 1.429 | normal | Timestamps, secondary metadata |
| micro | System | 0.6rem | 500 | 1 | normal | Pro badges, compact status indicators |
| navigation | System | 1rem | 600 | 1.25 | normal | Sidebar navigation items |

The 48px hero weight creates immediate impact in the join modal, while the 30px section display offers a calmer alternative for persistent page headers. Body text at 16px with 24px line-height provides comfortable reading for feed content. The 14px label size with 500 weight handles button text and navigation efficiently. Notably, the system employs tight line-height for display sizes (48px/48px, 24px/32px) while maintaining generous leading for body content. The 9.6px micro size appears exclusively for Pro badges, rendered in all-caps or small-label form to indicate membership status without consuming horizontal space.

## Layout

The page follows a three-zone structural model: a fixed dark sidebar on the left, a scrollable central feed, and a right-hand secondary column for community features and calls-to-action.

The sidebar occupies approximately 64px of fixed width, containing vertically stacked icon navigation with a logo mark at top and a "Join" button at bottom. Icons are centered with generous vertical spacing, creating a toolbar-like rhythm. The central feed column maintains a maximum readable width for content, with feed items stacked vertically and separated by hairline borders. Each feed item contains a horizontal header with avatar and identity, followed by task content, optional media, and interaction controls.

The right column presents a modular stack: a search input at top, followed by the yellow "New to WIP?" conversion card, a "New Projects" discovery module, and a "Streaks" leaderboard. This column appears to share the same background as the main feed, with modules defined by internal padding and occasional borders rather than distinct card backgrounds.

Spacing follows an 8px base unit with 16px as the primary increment. Feed items use 16px vertical padding with 8px horizontal padding for internal elements. The right column modules use 16px padding consistently. Modal content employs more generous 32px padding with 40px bottom padding to create breathing room around conversion content. The overall density is high but not cramped—sufficient whitespace exists between distinct content zones while maintaining the scannable list format essential to the feed experience.

## Visual language

The visual character balances productivity-tool directness with community warmth. Rounded corners are restrained: avatars and buttons use full pill shapes, while cards and inputs employ modest 8px or 16px radii. The 16px card radius appears on the join modal and right-column modules, creating a family of rounded rectangles that soften the otherwise rectilinear layout.

Emoji function as integral visual elements rather than decorative additions—checkmarks precede completed tasks, project icons carry brand identity, and feature icons in the join modal use emoji to humanize the value proposition. This choice reinforces the indie-maker aesthetic: personal, unpretentious, and globally legible.

Shadow usage is minimal and functional. The join modal employs a subtle shadow (`0 1px 2px rgba(0,0,0,0.05)`) to separate from its dark backdrop. Most elevated surfaces rely on border definition rather than shadow, maintaining the flat, utilitarian character. The dark modal backdrop at full opacity creates a clear focus trap for conversion flows.

Avatar presentation is consistent across contexts: circular crops, approximately 40px in feed headers, smaller in streaks leaderboard and social proof clusters. The social proof row in the join modal overlaps avatars slightly, creating a dense cluster that communicates community scale.

## Components

### Feed Item

The feed item is the core content unit, presenting a user's daily todo or progress update.

- **Anatomy**: Avatar (left, circular), identity block (name, username, optional Pro badge), task content with optional hashtag links, media attachment (when present), interaction bar (heart count, reply button, timestamp)
- **Surface**: White background, 1px `#E5E5E5` bottom border separating from next item
- **Typography**: Username in `{typography.subheading}` weight 600, task text in `{typography.body}`, hashtags in `{typography.body}` with `{colors.action-link}` color, timestamp in `{typography.caption}` with `{colors.ink-muted}`
- **Shape**: No border-radius on the item itself; internal avatar uses `{rounded.avatar}`
- **Spacing**: 16px vertical padding, 8px horizontal padding for content; avatar sits in left gutter with text offset
- **Composition**: Horizontal header row with avatar and identity, vertical stack of content below
- **Variants**: Text-only items, items with single image, items with external link preview

### Sidebar Navigation

The persistent left-edge navigation provides global wayfinding.

- **Anatomy**: Logo mark (yellow lightning bolt), vertical stack of icon buttons, "Join" pill button at bottom
- **Surface**: `{colors.canvas}` background, `{colors.ink-inverse}` icons
- **Typography**: No text labels visible; icons are self-explanatory
- **Shape**: Square icon hit areas, `{rounded.button}` for Join button
- **Spacing**: Icons stacked with 8px-16px vertical gaps; generous padding from edges
- **Composition**: Vertically centered icon cluster with logo at top, action at bottom

### Join CTA Card

The yellow conversion card appears in the right column for non-members.

- **Anatomy**: Headline, descriptive paragraph, primary button
- **Surface**: `{colors.action-primary}` background, `{colors.ink}` text
- **Typography**: Headline in `{typography.heading}`, body in `{typography.body}`, button in `{typography.label}` with weight 700
- **Shape**: `{rounded.card}` border-radius
- **Spacing**: 16px internal padding
- **Composition**: Vertical stack, button full-width within card

### Join Modal

The modal overlay presents the full membership pitch.

- **Anatomy**: Close button (top-right), WIP logo with wordmark, hero headline, subheadline, dual action buttons, social proof avatar cluster, 2x3 feature grid
- **Surface**: `{colors.surface-elevated}` on `{colors.canvas}` backdrop
- **Typography**: Headline in `{typography.hero-display}`, subheadline in `{typography.body-large}`, feature titles in `{typography.heading}`, feature descriptions in `{typography.body}`
- **Shape**: `{rounded.modal}` for container, `{rounded.button}` for actions
- **Spacing**: 32px top/side padding, 40px bottom padding; 16px between major sections
- **Composition**: Centered single column, feature grid in two equal columns with emoji-icon + title + description pattern
- **Variants**: Primary "Join now" button in `{colors.action-primary}`, secondary "Log in" button as outline style

### Streaks Leaderboard

The right-column ranking display shows community engagement.

- **Anatomy**: Section title, vertical list of user rows (avatar, name, Pro badge, streak count with flame emoji)
- **Surface**: Transparent/inherited background
- **Typography**: Section title in `{typography.heading}`, user names in `{typography.label}`, counts in `{typography.label}` right-aligned
- **Shape**: No card boundary; list items separated by minimal vertical space
- **Spacing**: Compact vertical rhythm, approximately 8px between rows

## Responsive behavior

The layout assumes a desktop viewport with sufficient width for three columns. At narrower widths, the right column should collapse or reorder below the feed. The sidebar may compress to icon-only at intermediate widths, potentially converting to a bottom tab bar on mobile viewports. Feed items should maintain their horizontal avatar-plus-content structure across breakpoints, with text wrapping naturally. The join modal should remain centered with consistent padding, potentially reducing to single-column feature grid on narrow screens. Touch targets in the sidebar and interaction bars should maintain minimum 44px hit areas if adapted for mobile.

## Practical implementation guidance

### Preserve
- The stark black sidebar against white content area—this contrast defines the platform's visual identity
- Yellow as a conversion-exclusive accent; do not dilute it by applying to non-action elements
- Circular avatars and pill buttons as the primary rounded shape vocabulary
- Emoji integration in feature descriptions and status indicators
- The 16px/8px spacing rhythm that creates density without clutter
- Pro badge treatment with purple text on light purple background

### Avoid
- Adding shadows to feed items or cards—the border-based separation is intentional
- Introducing additional font families; the system sans hierarchy is sufficient
- Using yellow for non-conversion purposes like success states or notifications
- Creating card backgrounds in the right column; keep modules open and border-defined
- Excessive border-radius on primary content containers

### Recommended Build Order
1. Establish the three-zone layout structure with dark sidebar and white content areas
2. Implement the type scale with system font stack, verifying weight availability
3. Build the feed item component with avatar, identity, content, and interaction patterns
4. Create the sidebar navigation with icon system and Join button
5. Add right-column modules: search, CTA card, projects, streaks
6. Implement the join modal with feature grid and social proof
7. Refine spacing and border treatments across all components

### Accessibility
- Ensure the yellow primary button maintains 3:1 contrast against white; the `#FADC00` on white may need a dark text treatment or border to meet standards
- The dark sidebar should use true black (`#000000`) consistently for predictable focus indicator visibility
- Modal backdrop should trap focus and provide escape key dismissal
- Feed item interaction controls need visible focus states beyond default browser outlines
- Pro badge text at 9.6px should be considered decorative or supplemented with aria-labels; avoid critical information at this size

## Scope note

This guide covers the logged-out or new-user homepage experience including the feed, sidebar navigation, right-column modules, and join modal. User profiles, settings interfaces, notification systems, and mobile-specific layouts are not represented in the supplied material. Measurements are derived from the documented interface values with 2px as the base relative unit.
