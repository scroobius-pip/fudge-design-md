# How leaflet.pub is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/leaflet.pub-design)

Last updated: 2026-08-10

## Captured pages

[![Discover page showing sidebar navigation, publication cards with varied accent colors including dark and purple themes, and tab filters for Recently Updated and Popular](https://pin.fontofweb.com/2866?format=jpg)](https://design.withfudge.com/share/pin-2866)

[Discover page showing sidebar navigation, publication cards with varied accent colors including dark and purple themes, and tab filters for Recently Updated and Popular](https://design.withfudge.com/share/pin-2866)

[![Close-up of page header with Discover title, italic subtitle with sparkle emoji and blue link, and pill-shaped Recently Updated and Popular tabs with blue active state](https://pin.fontofweb.com/2865?format=jpg)](https://design.withfudge.com/share/pin-2865)

[Close-up of page header with Discover title, italic subtitle with sparkle emoji and blue link, and pill-shaped Recently Updated and Popular tabs with blue active state](https://design.withfudge.com/share/pin-2865)

## Overview

Leaflet is a publication discovery platform with a deliberately restrained, reader-first interface. The design prioritizes content hierarchy through generous whitespace, a warm off-white canvas, and a single blue accent for interactive elements. Publisher identity emerges through avatar initials, custom card themes, and personal descriptions rather than heavy chrome. The visual system is built around a monospaced-adjacent typeface with humanist proportions, creating a literary, zine-like atmosphere that feels personal rather than corporate. Cards serve as the primary content unit, with each publication represented as a contained block showing the publisher's avatar, name, description, and freshness timestamp. The interface supports both light and publisher-defined dark themes within the same feed, creating visual rhythm through contrast.

## Colors

The palette is intentionally minimal, relying on a near-white canvas with black typography and a single blue accent for all interactive states. Publisher cards introduce controlled chromatic variety through dark and purple surface themes.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, active navigation, card titles on light surfaces |
| muted-ink | #5C5C5C | Secondary text, timestamps, inactive navigation, descriptions |
| canvas | #FEFEFE | Page background, creating warmth against pure white cards |
| surface | #FFFFFF | Card backgrounds, active navigation item fill |
| border | #E5E5E5 | Card outlines, dividers, inactive tab borders |
| action | #0000FF | Links, active tab text, interactive emphasis |
| action-surface | #E8E8FF | Active tab background, subtle blue tint for selected states |
| dark-surface | #1A1A1A | Publisher-defined dark card theme background |
| dark-ink | #E5E5E5 | Text on dark card surfaces |
| purple-surface | #4A0E4E | Publisher-defined purple card theme background |
| purple-ink | #D4A5D4 | Text on purple card surfaces |

The system operates in a light-dominant mode. The canvas and surface colors are nearly identical, with canvas providing the page warmth and surface providing the card elevation. The blue accent is saturated and electric, used sparingly for links and active states. Publisher theme cards introduce dark surfaces with light text, creating visual anchors in the feed. The purple theme shows how the system accommodates expressive color while maintaining readability through light-on-dark contrast.

## Typography

The type system uses a single family with regular and italic cuts, creating hierarchy through weight, size, and style rather than family change. The face has monospaced roots with humanist proportions, lending a typewriter-literary quality appropriate for a publication platform.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| page-title | I A Writer Quattro V | 2rem | 700 | 1.2 | -0.01em | Page headings, "Discover" |
| section-italic | I A Writer Quattro V-Italic | 1rem | 400 | 1.5 | 0 | Subtitles, emphasized inline links |
| body | I A Writer Quattro V | 1rem | 400 | 1.5 | 0 | Card descriptions, primary content |
| label | I A Writer Quattro V | 0.75rem | 400 | 1.4 | 0.01em | Timestamps, tab labels, metadata |
| navigation | I A Writer Quattro V | 0.875rem | 400 | 1.4 | 0 | Sidebar items, secondary labels |

The page title uses bold weight with tight tracking for presence. Body text maintains generous line height for readability in longer descriptions. Labels are small but not cramped, with slight positive tracking for clarity at reduced size. Italic appears in subtitles and inline links, creating emphasis without color change. The typeface is I A Writer Quattro V, designed by Mike Abbink, Paul Van Der Laan, Pieter Van Rosmalen, and Oliver Reichenstein; the italic cut is credited to Mike Abbink, Paul Van Der Laan, and Pieter Van Rosmalen. Vendors are Bold Monday and Information Architects Inc. Verify licensing for these families before production use.

## Layout

The page uses a two-region composition with a fixed narrow sidebar and a scrollable main content area. The sidebar occupies approximately one-quarter of the viewport width, providing persistent navigation without competing for attention. The main area centers content with comfortable margins, creating a reading-column feel.

The sidebar contains stacked navigation items with icons and labels, plus a secondary action for publishing. Items are separated by generous vertical space, with the active item receiving a bordered container to indicate location. The main content area begins with a centered header block containing the page title, subtitle, and filter tabs. Below this, publication cards stack vertically with consistent gap spacing.

Cards themselves use a horizontal internal layout: a circular avatar or initial badge on the left, followed by text content stacked vertically. The publisher name sits above the description, with the timestamp below. This creates a clear information hierarchy within each card. Dark and purple themed cards maintain the same structure but invert the color relationship, with the avatar and text appearing against the tinted surface.

The overall density is low, with ample breathing room between elements. The centered alignment of the main content against the left-aligned sidebar creates an asymmetrical balance that feels editorial rather than mechanical.

## Visual language

The aesthetic is clean, personal, and slightly retro-computing in its sensibility. The typewriter-derived typeface, minimal chrome, and focus on text content evoke early personal publishing and zine culture. There are no gradients, no shadows, no rounded excessive corners beyond the functional pill shapes. Elevation is achieved through borders and background color alone.

Avatars appear as small circular images or colored circles with single initials, creating a friendly, informal identity system. The sparkle emoji in the subtitle adds personality without breaking the restrained palette. Publisher theme cards introduce the only strong color moments, and these are controlled by content creators rather than the platform, making the interface feel like a frame for individual expression.

The blue accent is used with discipline: it appears for links, the active tab state, and publisher names that function as links. It never appears in backgrounds except as the subtle tint of the active tab pill. This restraint makes the accent more effective when it does appear.

## Components

### Sidebar navigation

- Anatomy: Icon and label stacked vertically within each item, with a secondary description line for some items
- Surface: Transparent background for inactive items, white fill with border for active
- Typography: Navigation token for labels, label token for descriptions
- Shape: No border radius on items; active item uses card radius
- Spacing: Generous vertical padding between items, internal padding on active state
- Composition: Left-aligned icon above or beside text, depending on item complexity

### Filter tabs

- Anatomy: Two pill-shaped buttons, "Recently Updated" and "Popular"
- Surface: Active tab uses action-surface background with action border and text; inactive uses canvas background with border and muted-ink text
- Typography: Label token, with active state potentially slightly bolder
- Shape: Full pill radius
- Spacing: Horizontal gap between pills, internal horizontal padding approximately 1rem
- States: Active shows filled selection with blue accent; inactive shows outline style

### Publication card (light)

- Anatomy: Circular avatar or initial badge, publisher name, description, timestamp
- Surface: White background with light border
- Typography: Body token for name and description, label token for timestamp
- Shape: Card radius, circular avatar
- Spacing: Card padding, internal gap between avatar and text block
- Composition: Horizontal flex with avatar left, text stack right

### Publication card (dark theme)

- Anatomy: Same as light variant
- Surface: Dark-surface background, dark-ink text
- Typography: Same tokens, color inverted
- Shape: Same as light variant
- Variants: Publisher-defined, appears inline with light cards

### Publication card (purple theme)

- Anatomy: Same as light variant
- Surface: Purple-surface background, purple-ink text
- Typography: Same tokens, color inverted
- Shape: Same as light variant
- Variants: Publisher-defined, appears inline with light cards

## Responsive behavior

The sidebar navigation should collapse to a horizontal bar or hamburger menu on narrow viewports, preserving the iconography while reducing width demand. The main content column should maintain comfortable reading margins, potentially expanding to full width with increased horizontal padding. Cards should remain single-column; the density does not support a multi-column grid without significant restructuring. Filter tabs may wrap or reduce to icon-only on very narrow screens. Publisher theme cards with dark or purple surfaces should maintain their color identity across all breakpoints.

## Practical implementation guidance

### Preserve
- The warm off-white canvas against pure white cards; this subtle distinction creates depth without shadow
- The single blue accent discipline; resist adding secondary accent colors
- The typewriter-literary typeface personality; do not substitute a generic sans-serif
- Publisher theme card colors as content-defined, not system-defined
- The generous vertical spacing between cards; this breathing room is essential to the editorial feel

### Avoid
- Adding shadows or gradients; the system achieves hierarchy through color and space alone
- Increasing the color palette beyond the single blue accent for UI elements
- Making cards more complex; the current three-line structure is intentionally minimal
- Using the italic cut for body text; reserve it for subtitles and inline emphasis

### Recommended build order
1. Establish the canvas and surface color foundation
2. Implement the type system with I A Writer Quattro V at all specified sizes
3. Build the sidebar navigation with active state treatment
4. Create the filter tab component with active and inactive states
5. Implement the publication card with avatar, text stack, and timestamp
6. Add publisher theme support for dark and purple surface variants
7. Polish spacing and alignment across all components

### Accessibility
- Ensure the blue action color meets contrast requirements against both white and off-white backgrounds
- Publisher theme cards must maintain minimum contrast ratios; the dark and purple variants shown appear to use light text on dark surfaces, which should be verified
- Provide focus indicators for all interactive elements, using the action color or an outline style
- Consider adding aria-labels to icon-only navigation items if the sidebar collapses
- The sparkle emoji in the subtitle should have an appropriate text alternative or be marked as decorative

## Scope note

This guide covers the Discover page of leaflet.pub, including sidebar navigation, filter tabs, and publication cards with publisher-defined light and dark themes. Measurements are practical adaptation targets. Mobile layouts, hover states, focus styles, loading skeletons, error states, and the publication creation flow are not represented in the supplied material. The full color range of publisher theme cards is not exhaustively documented.
