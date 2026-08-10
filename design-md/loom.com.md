# How loom.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/loom.com-design)

Last updated: 2026-08-10

## Captured pages

[![Video editing sidebar with tab navigation, upgrade banner, feature list with lock icons, and NPS survey at bottom](https://pin.fontofweb.com/9907?format=jpg)](https://design.withfudge.com/share/pin-9907)

[Video editing sidebar with tab navigation, upgrade banner, feature list with lock icons, and NPS survey at bottom](https://design.withfudge.com/share/pin-9907)

[![404 error page with glitch-art video thumbnail, centered headline, and action links on white background](https://pin.fontofweb.com/6646?format=jpg)](https://design.withfudge.com/share/pin-6646)

[404 error page with glitch-art video thumbnail, centered headline, and action links on white background](https://design.withfudge.com/share/pin-6646)

[![Referral page with blue gradient card, email input, invite buttons, and progress tracker with illustration](https://pin.fontofweb.com/4576?format=jpg)](https://design.withfudge.com/share/pin-4576)

[Referral page with blue gradient card, email input, invite buttons, and progress tracker with illustration](https://design.withfudge.com/share/pin-4576)

[![Invite tracking modal with tab switcher, mint green stat card, and invitation status table](https://pin.fontofweb.com/4575?format=jpg)](https://design.withfudge.com/share/pin-4575)

[Invite tracking modal with tab switcher, mint green stat card, and invitation status table](https://design.withfudge.com/share/pin-4575)

## Overview

Loom's design system is built around clarity and speed for video-centric workflows. The interface prioritizes content over chrome, using generous white space, rounded containers, and a tightly controlled blue accent palette that signals action without overwhelming the product surface. The system serves two distinct contexts: dense application interfaces like the video editor sidebar, and broader marketing or account surfaces like referral programs and error pages. Both share the same typographic foundation and spacing logic, but adapt density to task complexity. The visual personality is friendly yet precise—rounded corners soften the technical nature of video processing, while high-contrast typography maintains scannability in long feature lists and data tables.

## Colors

The color system is intentionally restrained, built on a near-neutral foundation with a single dominant blue accent and selective supporting hues.

| token | hex | use |
|---|---|---|
| ink | #292A2E | Primary text, headings, active UI elements |
| ink-muted | #6B6E76 | Secondary text, placeholders, disabled labels |
| canvas | #FFFFFF | Page backgrounds, card surfaces, input fields |
| surface | #F8F8F8 | Subtle section backgrounds, progress tracker fills |
| surface-blue | #E9F2FE | Gradient start for promotional banners, stat highlights, hover states |
| border | #F8F8F8 | Hairline dividers between list items |
| border-strong | #000000 | Button outlines, focus rings, high-contrast edges |
| action | #1868DB | Primary buttons, links, active tab indicators |
| action-hover | #0065FF | Link hover states, gradient endpoints |
| action-alt | #0469FF | Banner borders, secondary action emphasis |
| accent-purple | #BF63F3 | Conic gradient accent in promotional graphics |
| accent-orange | #FFA900 | Warm accent in gradient systems, achievement states |

The interface operates in a light mode exclusively across captured surfaces. The near-black ink (#292A2E) against white canvas creates a softer reading experience than pure black, reducing eye strain during extended video review sessions. Blue accents are deployed surgically: primary actions, active navigation states, and upgrade prompts. Promotional surfaces use a subtle gradient from surface-blue to white, creating depth without departing from the core palette. The conic gradient visible in upgrade imagery rotates through blue, purple, and orange—this is a decorative system for marketing moments, not applied to functional UI elements. The stat card in the invite tracking modal uses surface-blue as its background, aligning promotional metrics with the banner gradient system rather than introducing additional hues.

## Typography

All interface text is set in Atlassian Sans, a humanist sans-serif with open apertures and moderate contrast that performs well at small sizes in dense product interfaces. The type scale is compact, with most interface text at 14px and display sizes reserved for page titles and empty states. The design facts also list Applesystem and Times as detected font families; these appear to be system fallback references and are not used as active design tokens in the captured interface.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Atlassian Sans | 2rem | 653 | 1.125 | -0.015625em | Page titles, empty state headlines |
| section-display | Atlassian Sans | 1.5rem | 653 | 1.16 | -0.0125em | Card headings, modal titles |
| body | Atlassian Sans | 0.875rem | 400 | 1.57 | 0em | Default paragraph text, descriptions |
| body-large | Atlassian Sans | 1.125rem | 400 | 1.44 | -0.0125em | Subheadings, explanatory copy |
| label | Atlassian Sans | 0.75rem | 400 | 1.57 | 0em | Captions, metadata, table headers |
| navigation | Atlassian Sans | 0.875rem | 500 | 1.57 | 0em | Tab labels, menu items |
| button | Atlassian Sans | 0.875rem | 500 | 1.57 | 0em | Button labels, action text |

Atlassian Sans is designed by Rasmus Andersson with modifications by Atlassian Pty Ltd. Verify licensing for these families before production use. The weight 653 used in display sizes is a variable font instance between Semibold and Bold, providing crisp headlines without the heaviness of full Bold. Letter spacing tightens slightly at display sizes to maintain even color, while body text uses default spacing for maximum readability. The 14px base size with 21.98px line height creates a comfortable 1.57 ratio that accommodates multi-line descriptions in feature lists without excessive leading.

## Layout

The layout system uses a 2px relative unit, yielding a 0.125rem base step that allows fine-grained control without fractional pixel rendering issues. Spacing follows a semantic scale from tight (4px) through spacious (32px), with a dramatic 136px section break for hero surfaces.

The application interface in the video editor sidebar demonstrates a narrow-panel layout: fixed-width container with internal padding of 24px left, 20px right, creating asymmetric breathing room that aligns content to the visual weight of the video preview. Sections stack vertically with 16px gaps, separated by hairline borders in surface color. Feature rows use a horizontal flex layout: 44px right padding creates space for lock icons, with 12px gaps between icon, text, and action elements.

Marketing surfaces like the referral page use a centered, max-width container approach. The blue gradient card spans nearly full width with generous internal padding (24px), placing form elements on the left and illustrative graphics on the right in a 50/50 split. Below, the progress tracker uses a full-width surface card with 16px vertical padding and 20px horizontal padding, establishing clear hierarchy between the promotional moment and the tracking data.

Modal surfaces overlay the full viewport with a dark scrim, centering a white panel with 24px border radius and 24px internal padding. Content inside modals follows the same section stacking as the sidebar, with tab navigation at top, content sections below separated by 1px borders in surface color.

## Visual language

The visual language balances technical credibility with approachable warmth. Rounded corners are systematic: 8px for buttons, 12px for inputs, 16px for cards and panels, 24px for large promotional surfaces, and 9999px for pill buttons. This progression creates tactile hierarchy—smaller radii for interactive elements, larger for containers, full pills for primary actions.

Shadows are minimal and functional: a soft diffuse shadow (rgba(0,0,0,0.1) 0px 6px 24px) appears on elevated cards and modal panels, providing depth without the harshness of directional shadows. Borders function as optical separators rather than structural elements—hairline 1px rules in surface color divide list items, while stronger 1px black outlines define secondary button boundaries.

Iconography is simple and linear, matching the 14px text size with 1.5px stroke weights. Lock icons in feature rows, link icons in buttons, and navigation chevrons all share the same visual weight, creating consistency across functional and decorative uses. The illustration style in promotional surfaces is flat, colorful, and human-centered, contrasting with the restrained UI palette to draw attention to conversion moments.

## Components

### Upgrade banner

A promotional surface that appears at section tops, combining gradient background with border emphasis to drive attention without modal interruption.

- **Anatomy**: Container with left-aligned text stack and right-aligned chevron icon
- **Surface**: Linear gradient from surface-blue to white, with 1px action-alt border and 16px border radius
- **Typography**: Section-display for headline, body for description, action color for "Upgrade now" link
- **Spacing**: 16px vertical padding, 24px horizontal padding, 12px gap between text and icon
- **Shape**: 16px radius on all corners, subtle shadow on some variants

### Feature row

A list item pattern for capability disclosure, common in upgrade prompts and settings.

- **Anatomy**: Horizontal flex with icon, text block, and optional status indicator
- **Surface**: Transparent background, 1px bottom border in surface color
- **Typography**: Body for description, label for secondary detail
- **Spacing**: 16px vertical padding, 12px gap between icon and text, 44px right padding reserved for lock or action icons
- **Shape**: Full-width, no radius, separated by hairline borders

### Primary button

The dominant action pattern, using full pill shape for maximum clickability.

- **Anatomy**: Text label with optional left icon
- **Surface**: Action background, canvas text
- **Typography**: Button token, 500 weight
- **Shape**: 9999px border radius, creating full pill
- **Spacing**: 8px vertical padding, 12px horizontal padding minimum, 4px gap between icon and text

### Secondary button

Alternative action for non-destructive secondary choices.

- **Anatomy**: Text label with optional icon
- **Surface**: Canvas background, 1px border-strong outline, ink text
- **Typography**: Button token, 500 weight
- **Shape**: 9999px border radius or 8px for contained variants
- **Spacing**: 8px vertical padding, 12px horizontal padding

### Modal panel

Centered overlay for focused tasks like invite tracking.

- **Anatomy**: Header with tab switcher, content sections, optional footer actions
- **Surface**: Canvas background, modal-overlay scrim behind
- **Typography**: Section-display for title, body for descriptions, label for table headers
- **Shape**: 16px border radius, 24px internal padding
- **Spacing**: 16px gaps between sections, 1px borders in surface color between content areas

### Stat card

Highlight metric in a contained surface, used for progress and achievement display.

- **Anatomy**: Large number with supporting label
- **Surface**: Surface-blue background, 16px border radius
- **Typography**: Hero-display for number, body for label
- **Spacing**: 16px padding on all sides

### Progress tracker

Horizontal visualization for cumulative goals.

- **Anatomy**: Title row with info icon, segmented bar with milestone markers, status labels
- **Surface**: Surface background, 16px border radius, optional 1px border
- **Typography**: Section-display for headline, label for axis markers
- **Spacing**: 24px padding, 12px gaps between title and bar, 8px between bar and labels

### Tab navigation

Segmented control for switching between related content views.

- **Anatomy**: Horizontal row of text labels with optional icons
- **Surface**: Transparent background, 2px action underline for active state
- **Typography**: Navigation token, 500 weight for active, 400 for inactive
- **Spacing**: 12px horizontal gaps between tabs, 8px vertical padding

## Responsive behavior

The captured surfaces show a desktop-first approach with fixed-width sidebars and centered main content. The video editor sidebar appears to maintain a narrow fixed width, suggesting a responsive strategy where the video preview scales while controls remain constant. Marketing surfaces like the referral page use max-width containers that would naturally stack on smaller viewports—form and illustration moving from side-by-side to vertical arrangement.

For implementation, the referral card's two-column layout should become single-column below approximately 768px, with the illustration moving above or below the form. The progress tracker maintains usability at narrow widths through its segmented bar design, though milestone labels may require horizontal scrolling or abbreviation. Modal panels should transition to full-screen sheets on mobile, preserving the 24px padding but using viewport-width boundaries.

Touch targets should maintain the 44px minimum despite the compact 14px type scale—buttons already exceed this with their 8px vertical padding and line height. Feature rows with lock icons may need increased tap areas on mobile, potentially expanding to full-width tappable surfaces with chevron indicators.

## Practical implementation guidance

### Preserve
- The tight 14px base size with generous line height (1.57) for dense product readability
- Asymmetric padding in sidebar contexts (24px left, 20px right) to align with content gravity
- Full pill radius (9999px) for primary actions to maximize perceived clickability
- The surface-blue stat card pattern for positive metrics and achievements
- Hairline borders in surface color for section separation rather than heavy dividers

### Avoid
- Pure black (#000000) for text—the near-black ink (#292A2E) is calibrated for reduced eye strain
- Multiple accent colors in functional UI; reserve purple and orange for decorative gradients
- Sharp corners on interactive elements; maintain minimum 8px radius on all tappable surfaces
- External shadows on static content; reserve elevation for modals and promotional moments

### Recommended build order
1. Establish the 2px spacing grid and semantic scale
2. Implement Atlassian Sans with the full type hierarchy, testing 653 weight rendering
3. Build button components (primary pill, secondary outlined, text link)
4. Create card surfaces with gradient and solid variants
5. Implement feature row pattern with icon + text + status lockup
6. Build modal system with overlay, panel, and tab navigation
7. Add promotional components (upgrade banner, stat card, progress tracker)

### Accessibility
- Maintain 4.5:1 contrast minimum for all body text; the ink/canvas pairing exceeds 15:1
- Use border-strong outlines on secondary buttons to ensure visible boundaries in high-contrast modes
- Provide focus indicators that match the action color with 2px offset rings
- Ensure lock icons in feature rows have accessible labels indicating upgrade requirement
- Tab navigation should support arrow key traversal with visible focus states
- Progress tracker milestones should include screen-reader text for current position and goal

## Scope note

This guide covers the video editor sidebar, referral program surfaces, error pages, and invite tracking modals visible in the captured materials. Mobile layouts, dark mode, animation specifications, and video player controls are not represented. The 2px relative unit supports fine-grained spacing control; all measurements are exact values from the retained interface records. Applesystem and Times are listed in the source detection but do not appear as active design tokens in the captured interface.
