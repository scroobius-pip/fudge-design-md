# How drawabox.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/drawabox.com-design)

Last updated: 2026-08-10

## Captured pages

[![Lesson page with orange navigation bar, left sidebar menu, purple section header, and illustrated content cards showing the full three-column layout with instructional imagery](https://pin.fontofweb.com/5906?format=jpg)](https://design.withfudge.com/share/pin-5906)

[Lesson page with orange navigation bar, left sidebar menu, purple section header, and illustrated content cards showing the full three-column layout with instructional imagery](https://design.withfudge.com/share/pin-5906)

[![Collapsed sponsor banner revealing the orange Drawabox logo bar with LESSONS navigation and LOGIN button, showing the header anatomy and dark promotional overlay](https://pin.fontofweb.com/5905?format=jpg)](https://design.withfudge.com/share/pin-5905)

[Collapsed sponsor banner revealing the orange Drawabox logo bar with LESSONS navigation and LOGIN button, showing the header anatomy and dark promotional overlay](https://design.withfudge.com/share/pin-5905)

## Overview

Drawabox presents a warm, approachable visual system built around art instruction. The design centers on an energetic orange palette that signals creative encouragement without overwhelming the educational content. The interface organizes dense lesson material into a three-column structure: a persistent left sidebar for navigation, a central content column for instructional text and media, and a right sidebar for supplementary tools and community features. Cartoon illustrations of a recurring character appear throughout, reinforcing the friendly, beginner-welcoming tone. The system balances playful personality with clear information hierarchy, using color-coded section headers, consistent card containers, and prominent audio-listening features to accommodate different learning preferences. The overall impression is of a handcrafted educational experience that prioritizes accessibility and student comfort over corporate polish.

## Colors

The color system derives from a warm, energetic base with functional neutrals and a single cool accent for section differentiation.

| token | value | use |
|---|---|---|
| action | `#F5A623` | Primary navigation bar, lesson buttons, interactive highlights, and key call-to-action surfaces |
| ink | `#000000` | Primary text, logo wordmark, navigation labels, and emphasis |
| muted-ink | `#4A4A4A` | Secondary body text, sidebar descriptions, and less prominent content |
| canvas | `#FFFFFF` | Page background, content card surfaces, and text on dark or colored backgrounds |
| surface | `#F5F5F5` | Subtle background variations, inactive states, and secondary containers |
| surface-warm | `#FFF8E7` | Featured content cards, audio player backgrounds, and highlighted lesson sections |
| accent-purple | `#9B8EC7` | Section headers, lesson subheadings, and category dividers |
| border | `#D4D4D4` | Card outlines, sidebar separators, and subtle structural divisions |
| dark-overlay | `#1A1A1A` | Sponsor banner backgrounds, modal overlays, and promotional surfaces |

The orange action color dominates the header and primary interactive elements, creating immediate visual identity. Black ink provides maximum readability for instructional content. The warm surface tone creates inviting containers for featured material without competing with the orange header. Purple serves as the sole cool accent, reserved for section organization and lesson subdivision. The dark overlay appears only in promotional contexts, creating dramatic contrast for sponsor messaging. The system maintains sufficient contrast for text readability while using warmth to reduce the intimidation factor of rigorous art instruction.

## Typography

Drawabox uses Open Sans across all text, with weight and size variations creating hierarchy. The type renders cleanly at all sizes, supporting extended reading sessions.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Open Sans | 2rem | 700 | 1.2 | -0.01em | Page titles, lesson headings |
| section-display | Open Sans | 1.5rem | 700 | 1.3 | 0em | Section headers within lessons |
| body | Open Sans | 1rem | 400 | 1.6 | 0em | Primary instructional text |
| body-bold | Open Sans | 1rem | 700 | 1.6 | 0em | Emphasized terms, warnings, key concepts |
| label | Open Sans | 0.875rem | 600 | 1.4 | 0.02em | Buttons, navigation items, tags |
| navigation | Open Sans | 1.125rem | 700 | 1 | 0.04em | Main menu items, uppercase treatments |
| legal-copy | Open Sans | 0.75rem | 400 | 1.5 | 0em | Disclaimers, fine print, attributions |

The hierarchy relies primarily on weight and size rather than secondary families. Bold weights at body size create emphasis without breaking the reading rhythm. The navigation token uses slight positive tracking for uppercase menu items, improving legibility at the orange bar's reduced contrast. Line heights remain generous for body text, accommodating the lengthy paragraphs typical of educational content. Verify licensing for these families before production use.

## Layout

The page structure follows a fixed three-column pattern on desktop. The viewport fills with a full-width promotional banner at the top, followed by the persistent orange navigation bar. Below this, the content area divides into three vertical zones.

The left sidebar occupies a fixed width, containing the lesson navigation tree, action buttons for FAQ and homework submission, and sponsor or tool promotions. This sidebar remains visually connected to the main content through shared background tones but separates through a subtle border or spacing.

The central content column carries the primary instructional material. It expands to a comfortable reading width, roughly 48rem maximum, with generous internal padding. Lesson sections stack vertically, each introduced by a colored header bar. Content flows through text paragraphs, embedded illustrations, and interactive elements like the audio player.

The right sidebar provides supplementary material: tool recommendations, community links, and additional promotional content. It mirrors the left sidebar in width and treatment.

Spacing follows a 0.25rem base unit. Section breaks use 2rem vertical gaps. Content within cards and sections pads at 1.5rem. The navigation bar uses taller vertical padding, approximately 1rem, to accommodate the logo and menu items comfortably.

## Visual language

The visual personality combines instructional clarity with playful encouragement. A recurring cartoon character—depicted with dark hair, glasses, and expressive gestures—appears in section illustrations, audio player interfaces, and sidebar decorations. This character reinforces the approachable tone and provides visual anchors across long pages.

Illustrations throughout the lessons use a warm, hand-drawn aesthetic with visible linework and watercolor-like color washes. The "Getting Equipped" section header shows this clearly: a landscape illustration with architectural elements, rendered in muted earth tones with orange accents, framed within a rounded container.

The audio listening feature receives prominent visual treatment. A dedicated card with warm background color, character illustration, and a dark play button creates an inviting alternative to reading. This reflects the site's commitment to multiple learning modalities.

Social sharing appears as simple text icons—Facebook, Twitter, Tumblr—rendered in the body text color, positioned near content headers without competing for attention.

The sponsor banner creates a dramatic interruption when expanded, using dark background photography with white and orange text overlay. Collapsed, it reduces to a minimal control bar, preserving the orange navigation's visual continuity.

## Components

### Navigation Bar

- **Anatomy**: Logo lockup on the left, horizontal menu center, utility cluster right
- **Surface**: Solid orange action background
- **Typography**: Navigation token, uppercase, bold weight
- **Shape**: Full-width bar, no border radius
- **Spacing**: Approximately 1rem vertical padding, 2rem horizontal margins
- **Composition**: Logo combines cube icon with "DRAW A BOX" wordmark; menu items read LESSONS, ARTICLES, COMICS, FAQ, GIVE BACK; right side holds Patreon, YouTube, Discord icons with "CHAT WITH US" label and LOGIN button
- **Variants**: Collapsed sponsor state shows full bar; expanded sponsor state sits above with dark overlay

### Lesson Section Header

- **Anatomy**: Colored bar with section title, optional action icons
- **Surface**: Purple accent background
- **Typography**: Section-display token, white text
- **Shape**: Rounded rectangle, approximately 0.5rem radius
- **Spacing**: Tight horizontal padding, comfortable vertical padding
- **Composition**: Title left-aligned, optional link or audio icons right-aligned
- **Variants**: Purple for standard sections; orange bars appear for alternate section types

### Audio Player Card

- **Anatomy**: Character illustration left, descriptive text right, play button overlay
- **Surface**: Warm surface background
- **Typography**: Body for description, label for button text
- **Shape**: Rounded card with subtle border
- **Spacing**: Generous internal padding, approximately 1.5rem
- **Composition**: Illustration occupies left third; text and button stack in right two-thirds; play button uses dark background with white text and triangle icon

### Sidebar Action Button

- **Anatomy**: Full-width button with centered text
- **Surface**: Orange action background or white with orange border
- **Typography**: Label token, bold
- **Shape**: Rounded rectangle, approximately 0.25rem radius
- **Spacing**: Approximately 0.75rem vertical padding
- **Composition**: Stacked vertically in sidebar with consistent gaps
- **Variants**: Primary orange for main actions; secondary white for alternate paths

### Content Card

- **Anatomy**: Rounded container with optional header, body content, and footer actions
- **Surface**: White or warm surface background
- **Typography**: Body for content, section-display for headers
- **Shape**: Rounded corners, approximately 0.75rem
- **Spacing**: 1.5rem internal padding
- **Composition**: Flexible for text, images, or mixed media; often includes embedded illustrations

### Sponsor Banner

- **Anatomy**: Full-width promotional area with background imagery, text overlay, and action buttons
- **Surface**: Dark overlay with photography; collapsed state shows minimal bar
- **Typography**: Mixed weights and sizes for promotional copy; label for buttons
- **Shape**: Full-width, variable height
- **Composition**: Logo and value proposition centered; action buttons in a row; collapse control in corner

## Responsive behavior

The three-column layout likely compresses on narrower viewports. The right sidebar would collapse first, moving supplementary content below the main lesson or into expandable sections. The left sidebar navigation would transition to a collapsible menu, preserving the lesson hierarchy while freeing horizontal space for content.

The central content column should maintain comfortable reading width, with padding reducing proportionally. Typography scales down modestly: the hero-display token may drop to 1.5rem, section-display to 1.25rem, with body text remaining at 1rem for readability.

The orange navigation bar requires careful treatment. Menu items would collapse into a hamburger menu, with the logo and login action remaining visible. The utility icons for social and chat would consolidate or hide behind a single access point.

Audio player cards should stack vertically on narrow screens, with the character illustration moving above the text rather than beside it. Touch targets for the play button and other interactive elements should expand to minimum 44px height.

## Practical implementation guidance

### Preserve
- The warm orange header as the immediate visual signature
- The three-column structure for desktop lesson presentation
- The recurring character illustration style across interactive elements
- The purple section headers for lesson organization
- The prominent audio listening alternative
- The generous line height and paragraph spacing for readability

### Avoid
- Replacing the warm palette with cooler or more corporate tones
- Removing the character illustrations in favor of generic icons
- Condensing the sidebar navigation into hidden menus on desktop
- Using the dark sponsor overlay style for primary content areas
- Introducing additional accent colors beyond the established orange and purple

### Recommended Build Order
1. Establish the 0.25rem spacing unit and orange action color
2. Implement the full-width navigation bar with logo and menu
3. Create the three-column grid structure with fixed sidebars
4. Build the lesson section header component with purple variant
5. Develop the content card with warm surface option
6. Add the audio player with character illustration
7. Implement the sponsor banner with collapse behavior
8. Refine typography scale and responsive breakpoints

### Accessibility
- Ensure the orange navigation bar meets minimum contrast ratios; the black text on orange may need adjustment for WCAG AA compliance
- Provide text alternatives for all instructional illustrations
- Include transcripts or captions for audio content
- Maintain keyboard navigation through the lesson sidebar hierarchy
- Use focus indicators that complement the orange and purple palette
- Consider a high-contrast mode for the detailed linework illustrations

## Scope note

This guide covers the lesson page surface and header components visible in the supplied images. The complete mobile breakpoint behavior, form interactions for homework submission, video player styling, and user account interfaces are not represented. Measurements are practical adaptation targets. The full color system beyond the nine tokens identified, extended animation behavior, and icon font implementation details would require additional reference material.
