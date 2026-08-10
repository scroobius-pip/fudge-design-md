# How cara.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cara.app-design)

Last updated: 2026-08-10

## Captured pages

[![Global navigation bar with dark theme, search field, and action buttons including yellow-accented coffee support link](https://pin.fontofweb.com/3220?format=jpg)](https://design.withfudge.com/share/pin-3220)

[Global navigation bar with dark theme, search field, and action buttons including yellow-accented coffee support link](https://design.withfudge.com/share/pin-3220)

[![Split-screen login page with painterly artwork on the left and minimal dark authentication form on the right](https://pin.fontofweb.com/3219?format=jpg)](https://design.withfudge.com/share/pin-3219)

[Split-screen login page with painterly artwork on the left and minimal dark authentication form on the right](https://design.withfudge.com/share/pin-3219)

[![Post detail page showing artwork with engagement metrics, comments section, and sidebar with media grid and categories](https://pin.fontofweb.com/3218?format=jpg)](https://design.withfudge.com/share/pin-3218)

[Post detail page showing artwork with engagement metrics, comments section, and sidebar with media grid and categories](https://design.withfudge.com/share/pin-3218)

[![Expanded artwork lightbox modal with comment thread and cookie consent banner featuring blue action buttons](https://pin.fontofweb.com/3217?format=jpg)](https://design.withfudge.com/share/pin-3217)

[Expanded artwork lightbox modal with comment thread and cookie consent banner featuring blue action buttons](https://design.withfudge.com/share/pin-3217)

## Overview

Cara is a dark-themed social platform and portfolio space built specifically for artists. The interface operates on a near-black canvas that eliminates visual competition with the artwork itself. Every structural element—navigation, forms, sidebars, and modals—recedes into the background through disciplined use of deep grays and careful contrast control. The design philosophy centers on photographic and illustrative content as the primary visual event, with UI elements functioning as minimal, legible infrastructure.

The platform's personality emerges through restrained warmth: a single amber accent appears in support-oriented calls to action, while cool blue handles interactive commitments like cookie consent and authentication flows. Typography is clean, contemporary, and slightly tightened at display sizes to feel crafted rather than default. Layouts favor single-column reading experiences for posts, with contextual sidebars that collapse into supporting roles. The overall impression is of a professional gallery space—quiet, confident, and intentionally unobtrusive.

## Colors

The color system is built on a dark-mode foundation with three functional accents. Every token serves a specific role in the interface hierarchy.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background; navigation bar base; empty space around content |
| surface | #1a1a1a | Elevated cards, input fields, secondary buttons, sidebar panels |
| surface-raised | #262626 | Cookie banner, hover states, tertiary structural elements |
| ink | #ffffff | Primary text, icons on dark backgrounds, active navigation labels |
| muted-ink | #a3a3a3 | Secondary text, timestamps, placeholder text, disabled states |
| action | #3b82f6 | Primary interactive buttons, links, cookie consent actions |
| accent-warm | #f59e0b | Support and donation prompts, "Buy Cara a coffee" branding |

The dark canvas creates a natural spotlight effect for artwork. Surface grays establish depth without introducing color competition. The warm amber accent is reserved for community-support gestures, distinguishing it from the cool blue used for functional commitments. Muted ink provides readable hierarchy for metadata and secondary information without drawing attention. No light-mode variant is visible in the supplied material.

## Typography

The type system relies on a single sans-serif family with weight and size differentiation to create hierarchy. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 2rem | 700 | 1.2 | -0.02em | Modal titles, post headings, major section headers |
| section-display | Inter | 1.5rem | 600 | 1.25 | -0.01em | Sidebar section titles, category headers |
| body | Inter | 1rem | 400 | 1.5 | 0 | Comment text, post descriptions, form labels |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0 | Navigation items, button labels, metadata, timestamps |
| label | Inter | 0.75rem | 500 | 1.4 | 0.01em | Tags, badges, category pills, fine print |
| navigation | Inter | 0.875rem | 500 | 1 | 0 | Top-bar wayfinding, active page indicators |

Display sizes use negative tracking for a tighter, more intentional feel appropriate to a creative platform. Body sizes maintain neutral tracking for extended reading. The weight range is limited to Regular, Medium, Semibold, and Bold, with Medium serving as the default for interactive labels to distinguish them from passive text.

## Layout

The platform employs a full-bleed dark canvas with content constrained to readable widths. The global navigation spans the viewport width at 3.5rem height, with internal content aligned to a centered maximum width. Navigation items distribute horizontally with icon-and-label pairings, while search occupies a prominent centered position in the bar.

Post pages use a two-column structure: the primary content column occupies roughly 60% of the available width, containing the artwork, engagement metrics, and comment thread. A narrower sidebar holds media grids, tag collections, and category navigation. This ratio keeps artwork dominant while providing contextual discovery paths.

The login page breaks from this pattern with a true split-screen composition: artwork occupies the left half as a full-bleed photographic panel, while the authentication form centers in the right half against pure black. This creates an immersive entry experience that showcases platform content before account access.

Modals and lightbox views overlay the full viewport with a semi-transparent black scrim, presenting content at maximum readable size. The cookie consent banner anchors to the bottom-right as a floating panel, avoiding interference with primary navigation or content scroll.

Spacing follows a 0.25rem base unit. Section breaks use 4rem vertical gaps. Component internal padding standardizes at 1rem, with 1.5rem gaps between related content blocks.

## Visual language

The visual character is deliberately restrained to amplify user-generated content. Interface elements avoid borders in favor of subtle background value shifts—surface grays against canvas black create boundaries without lines. Where borders do appear, they are 1px hairlines in muted ink at reduced opacity.

Iconography is simple and functional: outline-style glyphs for navigation, filled glyphs for active states, and standard platform icons for social authentication. The avatar system uses perfect circles with consistent sizing across comment threads and profile headers.

Photography and illustration receive maximum treatment: artwork displays at full native resolution without decorative frames, rounded corners, or shadows. The only container treatment is a subtle background value shift when images load against the dark canvas.

The warm amber accent appears sparingly—limited to the "Buy Cara a coffee" prompt—creating a recognizable brand gesture without diluting its impact. Blue handles all functional interaction, from login links to cookie acceptance, establishing a clear pattern of cool-commit versus warm-support.

## Components

### Global Navigation Bar

- **Anatomy**: Logo mark with "beta" label, primary wayfinding links (Home, Blog, Jobs, Explore), centered search field, support prompt, utility actions (Your Best 9, Post, Messages, Notifications), and user avatar
- **Surface**: Canvas background with no border; active page indicated by underline on label
- **Typography**: Navigation token for all wayfinding items; body-small for search placeholder
- **Shape**: Full-width bar at 3.5rem height; search field uses pill radius; avatar is circular
- **Spacing**: Horizontal padding at 1.5rem; items spaced with 1.5rem gaps; search field has internal 1rem horizontal padding
- **Composition**: Flex row with centered search; utility actions cluster rightward

### Search Field

- **Anatomy**: Magnifying glass icon, placeholder text, full-width input behavior
- **Surface**: Surface background color; no visible border
- **Typography**: Body-small in muted ink for placeholder
- **Shape**: Pill radius (9999px)
- **Spacing**: Vertical padding 0.5rem, horizontal padding 1rem

### Authentication Form

- **Anatomy**: Social login buttons (Google, Apple), divider with "OR" label, email/username input, remember-me checkbox, primary submit button, sign-up link
- **Surface**: Canvas background; input fields use surface background; submit button uses ink background with canvas text
- **Typography**: Hero-display for "Log In" heading; body for "Welcome back!"; body-small for button labels and links
- **Shape**: Input fields and social buttons at 0.5rem radius; submit button at 0.5rem radius
- **Spacing**: 1.5rem between major sections; 0.75rem between stacked buttons
- **Variants**: Social buttons include platform icons left-aligned with centered labels

### Post Card / Artwork Display

- **Anatomy**: Artist header with avatar and name, artwork image, timestamp, engagement metrics (comments, shares, likes), action icon row, comment thread
- **Surface**: Canvas background; artwork displayed without frame or border
- **Typography**: Section-display for artist name; body for post title; body-small for metrics and timestamps
- **Shape**: Artwork displayed at full width with natural aspect ratio; no border radius on image itself
- **Spacing**: 1rem between header and artwork; 1.5rem between artwork and metrics; 1rem between metrics and action bar

### Engagement Action Bar

- **Anatomy**: Comment, share, like, bookmark, and link icons in horizontal row
- **Surface**: Transparent; icons in muted ink
- **Typography**: None
- **Shape**: Icon buttons at 2.5rem touch target
- **Spacing**: Evenly distributed across available width with 1.5rem gaps

### Sidebar Panel

- **Anatomy**: Section title, content grid or list, optional "View more" link
- **Surface**: Surface background at panel radius
- **Typography**: Section-display for titles; body-small for list items and links
- **Shape**: 0.75rem panel radius
- **Spacing**: 1rem internal padding; 1rem between title and content

### Media Grid

- **Anatomy**: 3-column grid of thumbnail images
- **Surface**: No visible container background; thumbnails sit flush
- **Shape**: No radius on individual thumbnails
- **Spacing**: 0.25rem gaps between thumbnails

### Cookie Consent Banner

- **Anatomy**: Privacy explanation text with policy links, "Reject all" and "Accept all" buttons
- **Surface**: Surface-raised background with panel radius
- **Typography**: Body-small for explanation; label for button text
- **Shape**: 0.75rem radius
- **Spacing**: 1rem internal padding; 0.75rem gap between buttons
- **Composition**: Anchored bottom-right as floating panel

## Responsive behavior

The two-column post layout should collapse to single-column on narrower viewports, with the sidebar relocating below the primary content or becoming accessible through a toggle. The split-screen login should stack vertically, with the artwork panel becoming a header image above the form on small screens.

Navigation items beyond the logo, search, and primary actions should collapse into a menu affordance at reduced widths. The search field should remain visible but compress to icon-only activation if space is constrained.

The cookie consent banner should span full width on mobile rather than floating as a corner panel, maintaining its internal padding and button arrangement.

Artwork in lightbox modals should scale to fit viewport dimensions while preserving aspect ratio, with maximum dimensions preventing overscaling of smaller images.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the dominant background; any lightening reduces the gallery effect
- The single warm accent limited to support gestures; do not expand amber to general UI
- Full-bleed artwork presentation without decorative frames or shadows
- The tight tracking on display headings; it contributes significantly to the crafted feel
- Circular avatars at consistent sizing across all contexts

### Avoid
- Adding borders to separate content areas; rely on background value shifts instead
- Multiple accent colors competing for attention; the restricted palette is intentional
- Rounding corners on artwork images; the sharp rectangle emphasizes photographic intent
- Light-mode defaults without explicit dark-mode implementation; the system is built dark-first

### Recommended Build Order
1. Establish the canvas black background and surface gray hierarchy
2. Implement the type scale with Inter at the specified sizes and weights
3. Build the global navigation with search field and action clustering
4. Create the post layout with two-column structure and sidebar panels
5. Add authentication flow with split-screen composition
6. Implement modal system with semi-transparent overlay
7. Add cookie consent with floating panel behavior
8. Polish interaction states and responsive breakpoints

### Accessibility
- Ensure all text on canvas black meets WCAG AA contrast ratios; muted ink should not be used for critical information
- Provide visible focus indicators on all interactive elements; the minimal chrome risks invisible keyboard navigation
- Maintain touch targets at minimum 2.5rem for icon buttons in engagement bars
- Consider reduced-motion preferences for modal transitions and image loading
- Verify that the amber accent on "Buy Cara a coffee" meets contrast requirements when used as text

## Scope note

This guide covers the home feed navigation, post detail page, authentication flow, and modal lightbox visible in the supplied material. Mobile breakpoints, animation specifications, form validation states, settings pages, and user profile layouts are not included. Measurements are practical adaptation targets.
