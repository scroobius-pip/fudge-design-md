# How vercel.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/vercel.com-design)

Last updated: 2026-08-10

## Captured pages

[![Project Settings form with dark card panels, input fields, and blue accent links on black canvas](https://pin.fontofweb.com/9715?format=jpg)](https://design.withfudge.com/share/pin-9715)

[Project Settings form with dark card panels, input fields, and blue accent links on black canvas](https://design.withfudge.com/share/pin-9715)

[![Danger zone with red-bordered Delete Project card and muted Transfer section above](https://pin.fontofweb.com/9714?format=jpg)](https://design.withfudge.com/share/pin-9714)

[Danger zone with red-bordered Delete Project card and muted Transfer section above](https://design.withfudge.com/share/pin-9714)

[![Project Overview dashboard with sidebar navigation, deployment preview, and analytics cards](https://pin.fontofweb.com/9713?format=jpg)](https://design.withfudge.com/share/pin-9713)

[Project Overview dashboard with sidebar navigation, deployment preview, and analytics cards](https://design.withfudge.com/share/pin-9713)

[![All Projects grid with usage metrics, project cards, and left navigation rail](https://pin.fontofweb.com/9712?format=jpg)](https://design.withfudge.com/share/pin-9712)

[All Projects grid with usage metrics, project cards, and left navigation rail](https://design.withfudge.com/share/pin-9712)

## Overview

The Vercel dashboard presents a dark-first developer experience built around density, clarity, and surgical precision. The interface immerses users in near-black canvas surfaces where content floats on subtly elevated cards with hairline borders. Every element serves a functional purpose: project cards surface deployment status at a glance, settings forms organize complex configuration into scannable sections, and the persistent left navigation provides immediate access to deep tooling. The visual system avoids decorative excess in favor of typographic hierarchy, measured spacing, and a single blue accent that signals interactivity without visual noise. This is a system designed for prolonged use by technical users who need to parse information quickly and act with confidence.

## Colors

The palette is built on a foundation of pure black and near-black surfaces, with text ranging from bright white to carefully stepped grays. A single blue family handles all interactive and link states, while red serves danger actions exclusively.

| token | value | use |
|---|---|---|
| canvas | #000000 | Page background, sidebar ground |
| surface | #0A0A0A | Primary card and panel backgrounds |
| ink | #EDEDED | Primary headings, active nav, primary button text |
| muted-ink | #A1A1A1 | Body text, descriptions, inactive states |
| dim-ink | #888888 | Tertiary labels, timestamps, metadata |
| border | #1A1A1A | Default card and section borders |
| border-strong | #2E2E2E | Input borders, dividers, focus rings |
| action | #006EFE | Links, active states, primary interactive |
| action-hover | #47A8FF | Link hover, button hover backgrounds |
| danger | #F32E40 | Destructive actions, error states |
| danger-muted | #FF565F | Danger hover, error badges |
| success | #62C073 | Status indicators, confirmation states |
| code-bg | #1A1A1A | Inline code backgrounds |
| code-border | #292929 | Code block borders |

The color model follows a strict dark-mode philosophy: surfaces lighten as they elevate, creating depth without shadows. Text inverts this pattern, with the brightest values reserved for active elements and headings. The blue accent appears only in links, active nav items, and status badges—never as a background fill at rest. Danger red is quarantined to destructive actions and error messaging, preventing alarm fatigue in routine use.

## Typography

The system relies on Geist for all interface text, with Geist Mono handling code, hashes, and technical metadata. Geist Pixel appears in specialized display contexts on the font marketing page but does not participate in the dashboard interface. Applesystem is present in the font stack as a system-level fallback.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| body | Geist | 0.875rem | 400 | 1.5 | 0 | Default body text, descriptions |
| body-large | Geist | 1rem | 400 | 1.5 | 0 | Hero paragraphs, login body |
| section-heading | Geist | 1.25rem | 600 | 1.3 | -0.02em | Card titles, section headers |
| display | Geist | 2.5rem | 400 | 1 | -0.06em | Marketing hero, large numerals |
| label | Geist | 0.875rem | 500 | 1.25 | 0 | Buttons, badges, nav labels |
| label-small | Geist | 0.8125rem | 400 | 1.23 | 0 | Metadata, timestamps, hints |
| mono-body | Geist Mono | 0.875rem | 400 | 1.5 | 0 | Code blocks, deployment IDs |
| mono-label | Geist Mono | 0.8125rem | 400 | 1.54 | 0 | Inline code, commit hashes |
| nav-item | Geist | 0.875rem | 400 | 1.5 | 0 | Sidebar navigation items |

Geist is designed by Basement Studio, Andrés Briganti, Mateo Zaragoza, and Guido Ferreyra. Geist Mono shares the same design lineage. Geist Pixel and Geist Pixel-Square are designed by Andrés Briganti. Applesystem carries no attributed designer or vendor in the available records. Verify licensing for these families before production use.

## Layout

The dashboard employs a fixed left sidebar with a fluid main content area. The sidebar occupies 256px and contains hierarchical navigation with icon-text pairs, expandable sections, and status indicators. The main content area receives a 276px left margin to clear the sidebar, with internal content constrained by consistent horizontal padding.

Content regions use a card-based architecture where each logical section becomes a bordered panel with internal padding of 24px. Cards stack vertically with 24px gaps, creating rhythmic breathing room between dense information clusters. Within cards, form fields arrange in single-column or two-column grids depending on relationship density.

The header bar spans the full viewport width, sitting above both sidebar and main content. It contains breadcrumb navigation, contextual actions, and user controls. On project overview pages, the header compresses to a minimal chrome, allowing the deployment preview and metrics cards to dominate the visual hierarchy.

Grid systems inside cards favor 8px and 16px gaps for related elements, expanding to 24px and 32px for distinct sections. The spacing scale derives from a 2px base unit, with all measurements snapping to whole multiples: 4px, 8px, 12px, 16px, 24px, 32px, 48px.

## Visual language

The visual character is austere and technical, communicating reliability through geometric precision rather than warmth. Cards are strictly rectangular with 6px corner radii—soft enough to avoid harshness, tight enough to maintain density. Buttons and inputs share the same radius, creating family resemblance across interactive elements.

Shadows are rare and functional. When they appear, they use a layered approach: a faint white border overlay combined with a black outer ring creates a subtle halo effect that defines elevation without the softness of traditional drop shadows. This "hard shadow" technique appears on dropdowns, modals, and elevated tooltips.

Borders are the primary depth mechanism. The 1px hairline in #1A1A1A separates cards from canvas, while #2E2E2E handles input borders and focus states. A 1px white border at 14.5% opacity occasionally appears as a top highlight on elevated surfaces, simulating a light source from above.

Status communication uses color-coded dots and pills: green for ready/success, red for error/failed, blue for information. These appear as 6px circles or 4px-radius pills with 2px padding, maintaining the system's miniature scale.

## Components

### Card

Cards are the fundamental content container across all dashboard views.

- **Anatomy**: Header area with optional title and action, body content area, footer with secondary actions or metadata
- **Surface**: Background #0A0A0A, border 1px solid #1A1A1A, border-radius 6px
- **Typography**: Title uses section-heading token, body uses body token
- **Spacing**: 24px internal padding, 24px vertical gap between stacked cards
- **Variants**: Default card, elevated card with shadow halo for dropdowns, danger card with red border tint for destructive actions

### Input

Text inputs appear in form-heavy settings pages and search interfaces.

- **Anatomy**: Label above, input field, optional helper text or inline icon
- **Surface**: Background #0A0A0A, border 1px solid #2E2E2E, border-radius 6px
- **Typography**: Body token for value, label-small for helper text
- **Spacing**: 12px vertical padding, 12px horizontal padding, 8px gap between label and input
- **States**: Default border #2E2E2E, focus border transitions to action blue with subtle glow

### Button

Buttons follow a strict hierarchy with clear visual weight differentiation.

- **Anatomy**: Text label, optional leading icon, optional dropdown chevron
- **Surface**: Primary buttons use #EDEDED background with #000000 text; danger buttons use #F32E40 background; ghost buttons use transparent background with #888888 text
- **Typography**: Label token, 500 weight
- **Shape**: Border-radius 6px, padding 8px 14px for standard, 6px 12px for compact
- **Spacing**: 8px gap between icon and text, 6px internal horizontal padding for icon-only variants

### Sidebar Navigation

The persistent left rail organizes the application's deep feature set.

- **Anatomy**: Team/project switcher at top, scrollable section list, user profile at bottom
- **Surface**: Background #000000, full viewport height
- **Typography**: Nav-item token, 400 weight default, 500 weight for active
- **Spacing**: 8px vertical padding per item, 2px left indent for nested items, 6px gap between icon and label
- **States**: Default #888888, hover #A1A1A1, active #EDEDED with subtle left border or background pill

### Deployment Card

Project overview pages feature prominent deployment status cards.

- **Anatomy**: Preview thumbnail, deployment URL, status indicator, metadata row, action buttons
- **Surface**: Background #0A0A0A, border 1px solid #1A1A1A, optional shadow halo for elevation
- **Typography**: Mono-label for commit hash, body for URL, label for status
- **Composition**: Thumbnail left, details right in a 1:2 ratio, or full-width stacked on narrow viewports
- **States**: Green dot for ready, red dot for error, blue link for active deployment URL

### Project List Item

The All Projects grid displays projects as dense information cards.

- **Anatomy**: Project icon, name, domain, last deployment, branch indicator, status icon
- **Surface**: Background #0A0A0A, border 1px solid #1A1A1A, border-radius 6px
- **Typography**: Label for project name, body for domain and metadata, mono-label for branch
- **Spacing**: 16px padding, 12px internal gaps, 24px grid gap between cards
- **Composition**: Icon and name as primary row, metadata stacked below, action menu icon at far right

## Responsive behavior

The sidebar collapses to a minimal icon rail below 1024px viewport width, expanding to full text labels on hover or focus. The main content margin adjusts from 256px to 64px in this collapsed state. Card grids transition from three columns to two columns at 1280px and to single column at 768px. Form layouts shift from two-column to single-column at 960px.

Touch targets maintain minimum 44px height on all interactive elements. The system assumes pointer precision for desktop but does not degrade on touch devices.

## Practical implementation guidance

### Preserve
- The strict dark palette; light mode would require a complete color inversion, not a tint adjustment
- The 2px base grid and whole-number multiples for all spacing
- The 6px border-radius family across cards, buttons, and inputs
- The hairline border hierarchy: #1A1A1A for cards, #2E2E2E for inputs
- The single blue accent for all interactive states
- Geist for interface text and Geist Mono for technical content

### Avoid
- Adding decorative gradients or background textures to the canvas
- Using shadows as primary depth indicators; prefer borders
- Introducing additional accent colors beyond blue and red
- Rounding corners beyond 6px for standard components
- Using font weights below 400 or above 600 in the interface

### Recommended build order
1. Establish the color tokens and dark canvas foundation
2. Implement the typography scale with Geist loaded at 400, 500, and 600 weights
3. Build the card component with correct border and padding
4. Construct the sidebar navigation with icon-text pairs and active states
5. Implement form inputs and button hierarchy
6. Add the deployment card with status indicators
7. Compose the project grid layout
8. Polish with focus states, hover transitions, and the shadow halo elevation system

### Accessibility
- Maintain minimum 4.5:1 contrast for all body text; the #A1A1A1 on #0A0A0A pairing meets this threshold
- Use #EDEDED for critical text and interactive elements to ensure 7:1 contrast
- Provide visible focus indicators using the action blue with 2px outline offset
- Ensure sidebar navigation is fully keyboard accessible with arrow key traversal
- Label all icon-only buttons with aria-label attributes
- Respect reduced-motion preferences for any hover or focus transitions

## Scope note

This guide covers the Vercel developer dashboard interface including project management, settings, and overview surfaces. Marketing pages, the Geist font specimen pages, pricing tables, and blog content use extended typographic scales and additional layout patterns not documented here. Motion, animation, and mobile-native adaptations are not included.
