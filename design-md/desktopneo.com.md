# How desktopneo.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/desktopneo.com-design)

Last updated: 2026-08-10

## Captured pages

[![Voice section with blue VOICE badge, large display heading, body text in two columns, and horizontal command tag pills at bottom](https://pin.fontofweb.com/3819?format=jpg)](https://design.withfudge.com/share/pin-3819)

[Voice section with blue VOICE badge, large display heading, body text in two columns, and horizontal command tag pills at bottom](https://design.withfudge.com/share/pin-3819)

[![Gesture overview grid with blue badge, eight gesture cards with dot-pattern icons on light gray tiles, and muted instructional text](https://pin.fontofweb.com/3818?format=jpg)](https://design.withfudge.com/share/pin-3818)

[Gesture overview grid with blue badge, eight gesture cards with dot-pattern icons on light gray tiles, and muted instructional text](https://design.withfudge.com/share/pin-3818)

[![Finder interface mockup on blue gradient background with white panel, search bar, content cards, sidebar sections, and feature descriptions](https://pin.fontofweb.com/3808?format=jpg)](https://design.withfudge.com/share/pin-3808)

[Finder interface mockup on blue gradient background with white panel, search bar, content cards, sidebar sections, and feature descriptions](https://design.withfudge.com/share/pin-3808)

## Overview

Desktop Neo presents a vision for rethinking desktop productivity through a clean, modern interface language. The design prioritizes clarity and calm over density, using generous whitespace and a restrained blue-accented palette to create an environment that feels spacious and intentional. The visual system centers on card-based organization, where content modules float against light or gradient backgrounds with subtle borders and soft shadows. Typography is light and open, with thin display weights that establish hierarchy without visual weight. The interface communicates through a combination of labeled badges, instructional gesture cards, and horizontal command pills that suggest voice or text-based interaction. Every element feels deliberately placed, with consistent internal spacing and rounded corners that soften the technical nature of the productivity concepts being presented.

## Colors

The color system is intentionally minimal, built around a single vibrant blue accent against a neutral foundation. The palette supports both light content surfaces and atmospheric gradient backgrounds.

| token | value | use |
|---|---|---|
| action | #007AFF | Primary buttons, badges, active states, links, and interactive highlights |
| ink | #1A1A1A | Primary text, headings, and strong content |
| muted-ink | #8A8A8A | Secondary text, captions, instructions, and placeholder content |
| canvas | #FFFFFF | Primary content backgrounds, cards, and panels |
| surface | #F5F5F5 | Subtle backgrounds, command pills, and inactive states |
| border | #E5E5E5 | Card outlines, dividers, and structural boundaries |
| blue-gradient-start | #4A90D9 | Left and top edges of atmospheric page backgrounds |
| blue-gradient-end | #5BA3D0 | Right and bottom edges of atmospheric page backgrounds |

The blue gradient creates an immersive backdrop for feature presentations, transitioning smoothly from a deeper blue to a slightly lighter tone. Against this gradient, white panels and cards achieve strong contrast and visual prominence. In content-heavy sections, the pure white canvas dominates with surface gray reserved for secondary elements like command pills and gesture icon tiles. The action blue appears consistently for badges, interactive text, and functional highlights, creating a clear visual thread through all sections. No dark mode is visible in the supplied material.

## Typography

The type system uses Source Sans Pro exclusively, with a light weight for display purposes and regular weight for body content. The hierarchy is established through size and weight rather than family variation.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Source Sans Pro | 2.5rem | 300 | 1.2 | -0.01em | Major section headings like "Hey Siri, get back to work!" |
| section-display | Source Sans Pro | 2rem | 300 | 1.2 | -0.01em | Feature titles like "Quick access to your content." |
| body | Source Sans Pro | 1rem | 400 | 1.6 | 0 | Primary paragraphs and descriptions |
| body-small | Source Sans Pro | 0.875rem | 400 | 1.5 | 0 | Secondary descriptions, card content, and command labels |
| label | Source Sans Pro | 0.75rem | 600 | 1.2 | 0.05em | Uppercase badges like "VOICE" and "FINDER" |
| navigation | Source Sans Pro | 0.875rem | 400 | 1.4 | 0 | Interface labels, tags, and wayfinding text |

Source Sans Pro was designed by Paul D Hunt and is available from Adobe Systems Incorporated. Verify licensing for these families before production use.

## Layout

The layout follows a centered, single-column content flow with generous vertical breathing room between sections. Content typically occupies a moderate width container that prevents line lengths from becoming unwieldy, with text blocks reading comfortably without edge-to-edge expansion.

Section spacing uses 5rem between major content areas, creating clear separation without excessive distance. Within sections, content gaps of 1.5rem organize related elements. The base unit of 0.25rem provides fine-grained control for internal padding and small adjustments.

The gesture overview section demonstrates a grid-based layout, with cards arranged in rows of four on desktop. Each gesture card contains a square icon tile above stacked text lines. The icon tiles use a light gray background with centered dot patterns, while the text below aligns left with consistent vertical rhythm.

The Finder feature presentation uses a split composition: a large interface mockup occupies the left portion while descriptive text with labeled subsections fills the right. The mockup itself shows a complex internal layout with a top search and tag bar, a two-column card grid in the main area, and stacked list items below. This nested structure demonstrates how the design system scales from page-level sections down to dense information surfaces.

Command pills at the bottom of content sections arrange horizontally with wrapping, creating a tag-cloud-like visualization of possible voice commands. Each pill maintains consistent internal padding and border treatment.

## Visual language

The visual language communicates modern productivity through restraint and clarity. Rounded corners appear throughout at three scales: 0.25rem for compact badges, 0.5rem for standard cards and pills, and 0.75rem for large panels. This progression creates appropriate hierarchy without visual confusion.

Shadows are subtle and functional, appearing primarily on floating panels like the Finder mockup to establish elevation against gradient backgrounds. The effect is soft and diffuse rather than sharp or dramatic.

Iconography in the gesture section uses abstract dot patterns to represent touch configurations—gray dots for inactive positions and blue dots for active finger placements. This systematic approach allows complex interactions to be communicated through simple geometric arrangements.

Photography and imagery within cards appears natural and unconstrained by heavy borders, with content thumbnails showing at their native aspect ratios. The surrounding card structure provides containment without clipping or masking.

The overall impression is of a system designed for focus: minimal chrome, clear type hierarchy, and color used purposefully to guide attention rather than decorate.

## Components

### Badge

Badges function as section labels and category markers.

- **Anatomy**: A compact rectangular container with uppercase text.
- **Surface and text color**: Action blue background with white text.
- **Typography**: Label token, uppercase, semibold weight with positive letter spacing.
- **Shape**: Small rounded corners at 0.25rem.
- **Spacing**: Internal padding of 0.5rem vertical and 0.75rem horizontal.
- **Composition**: Positioned at the start of content sections, above headings.

### Command Pill

Command pills suggest available voice or text commands.

- **Anatomy**: A rounded rectangle containing a text label, sometimes with a prefix icon or avatar.
- **Surface and text color**: Surface gray background with ink-colored text; some variants show blue text for linked or active states.
- **Typography**: Body-small token.
- **Shape**: Rounded corners at 0.5rem with a 1px border in border color.
- **Spacing**: Internal padding of 0.5rem vertical and 1rem horizontal; external gaps of 0.5rem between pills.
- **Composition**: Arranged in horizontal flowing rows that wrap naturally.

### Gesture Card

Gesture cards explain interaction patterns with visual and textual information.

- **Anatomy**: A vertical stack containing an icon tile, a bold action title, and two lines of instructional text.
- **Surface and text color**: White or transparent background with muted-ink text; icon tiles use surface gray with blue or gray dots.
- **Typography**: Body-small for titles and instructions.
- **Shape**: Icon tiles are square with rounded corners at 0.5rem.
- **Spacing**: 1.5rem internal padding; consistent gaps between tile, title, and description.
- **Composition**: Grid arrangement with four cards per row, equal widths, and uniform vertical alignment.

### Content Card

Content cards organize information in the Finder interface.

- **Anatomy**: A rectangular container that may include an image thumbnail, title, metadata, and action links.
- **Surface and text color**: White background with ink text; metadata in muted-ink.
- **Typography**: Body-small for titles and content; label token for category markers.
- **Shape**: Rounded corners at 0.5rem with 1px border.
- **Spacing**: 1rem internal padding.
- **Composition**: Arranged in grids or lists depending on content type.

### Finder Panel

The Finder panel represents the primary application interface.

- **Anatomy**: A large rounded rectangle containing a search bar, tag filters, content areas, and sidebar sections.
- **Surface and text color**: White background with ink text; blue accents for interactive elements.
- **Typography**: Mix of label, body-small, and navigation tokens.
- **Shape**: Large rounded corners at 0.75rem with soft shadow.
- **Spacing**: Generous internal padding with structured grid gutters.
- **Composition**: Centered or offset against gradient backgrounds; internal two-column layout for card grid and sidebar.

## Responsive behavior

The design appears optimized for desktop presentation, with layouts that assume adequate horizontal space for multi-column grids and side-by-side compositions. When adapting to narrower viewports, the gesture grid should collapse from four columns to two, then to a single column with maintained card proportions. The Finder panel's internal two-column structure should stack vertically, with the sidebar content moving below the main card grid. Command pills should continue wrapping naturally. Typography scales should maintain readability without reduction below 0.875rem for body content. The atmospheric blue gradient backgrounds should remain full-bleed regardless of viewport width.

## Practical implementation guidance

### Preserve
- The light, open quality of Source Sans Pro at thin weights for display text.
- The consistent use of action blue as the sole accent against neutral grays and white.
- Generous whitespace between sections and around individual elements.
- The systematic rounding progression from badges to cards to panels.
- The card-based information architecture with subtle borders and soft shadows.

### Avoid
- Heavy borders or strong shadows that would contradict the airy aesthetic.
- Multiple accent colors competing with the established blue.
- Dense packing of elements that eliminates breathing room.
- Typography weights heavier than 400 for body content.
- Clipping or masking of thumbnail imagery within cards.

### Recommended build order
1. Establish the color tokens and apply the blue gradient to page backgrounds.
2. Set up Source Sans Pro with the complete type scale, verifying the light weight renders crisply.
3. Build the badge component as the simplest atomic element.
4. Create content cards with consistent padding, border, and radius.
5. Assemble gesture cards with icon tiles and text stacks.
6. Construct the command pill system with wrapping behavior.
7. Build the Finder panel as a composite of cards, lists, and search components.

### Accessibility
- Ensure the light weight display typography meets contrast requirements against both white and gradient backgrounds; consider a minimum weight of 400 if contrast is insufficient.
- Provide visible focus indicators for interactive pills and cards that maintain the design's clean aesthetic.
- Gesture instructions should include keyboard alternatives in implementation.
- The blue action color should maintain 3:1 contrast against white for interactive elements and 4.5:1 for text.

## Scope note

This guide covers the landing page presentation of Desktop Neo's productivity concepts, including the voice interaction section, gesture overview, and Finder feature demonstration. Measurements are practical adaptation targets. Mobile breakpoints, animation behavior, form interactions, and additional page surfaces are not represented in the supplied material.
