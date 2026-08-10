# How mega.nz is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/mega.nz-design)

Last updated: 2026-08-10

## Captured pages

[![Contacts empty-state modal with dark background, centered illustration, and primary action button with rounded corners](https://pin.fontofweb.com/8651?format=jpg)](https://design.withfudge.com/share/pin-8651)

[Contacts empty-state modal with dark background, centered illustration, and primary action button with rounded corners](https://design.withfudge.com/share/pin-8651)

[![Chat panel with tab navigation, empty-state illustration, and two stacked action buttons with distinct surface treatments](https://pin.fontofweb.com/8650?format=jpg)](https://design.withfudge.com/share/pin-8650)

[Chat panel with tab navigation, empty-state illustration, and two stacked action buttons with distinct surface treatments](https://design.withfudge.com/share/pin-8650)

[![Cloud drive toolbar with search input, icon buttons, and primary action buttons on dark surface](https://pin.fontofweb.com/8649?format=jpg)](https://design.withfudge.com/share/pin-8649)

[Cloud drive toolbar with search input, icon buttons, and primary action buttons on dark surface](https://design.withfudge.com/share/pin-8649)

[![Account settings page with sidebar navigation, storage dashboard, profile form, and toggle switches](https://pin.fontofweb.com/8647?format=jpg)](https://design.withfudge.com/share/pin-8647)

[Account settings page with sidebar navigation, storage dashboard, profile form, and toggle switches](https://design.withfudge.com/share/pin-8647)

## Overview

MEGA's interface presents a dark-first productivity environment built around file management, communication, and account administration. The visual system prioritizes content density and task completion over decorative elements, using a near-black canvas with carefully elevated surfaces to create depth without visual noise. The design language is immediately recognizable through its distinctive accent strategy: a vibrant teal gradient system for primary actions and progress indicators, paired with magenta for user identity and secondary highlights. This dual-accent approach creates clear hierarchy while maintaining visual interest across what would otherwise be a monochromatic dark interface.

The interface structure follows a conventional application layout with persistent navigation, contextual toolbars, and modular content areas. Empty states receive full visual treatment with centered illustrations and clear calls-to-action, ensuring the interface remains approachable even when no content exists. Settings and account management are organized into a two-column layout with a collapsible sidebar and scrollable detail panels. Throughout, the system maintains consistent touch targets, rounded corners on interactive elements, and generous whitespace around primary actions to prevent accidental activation in a dense information environment.

## Colors

The color system is built on a dark-mode foundation with three surface layers, a muted text scale, and two vibrant accent families. Every color serves a specific functional role in the interface hierarchy.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary application background, empty states, modal backdrops |
| surface | #151616 | Sidebar navigation, secondary panels, elevated base layer |
| surface-elevated | #222222 | Cards, input fields, button secondary backgrounds, storage dashboard |
| surface-highlight | #222324 | Hover states, active navigation items, subtle elevation changes |
| border | #303233 | Dividers, input borders, card separators |
| border-subtle | #444444 | Disabled states, tertiary boundaries, inactive toggle tracks |
| ink | #FFFFFF | Primary text, active navigation, icon buttons on dark |
| ink-muted | #989A9C | Secondary text, descriptions, placeholder content, labels |
| ink-dim | #666666 | Tertiary text, disabled states, metadata, helper copy |
| accent-teal | #03CA8B | Primary action buttons, toggle switches active, progress indicators, success states |
| accent-teal-bright | #08E7C0 | Gradient endpoints, hover highlights, storage visualization |
| accent-magenta | #BC2086 | User avatars, identity elements, premium indicators |
| accent-magenta-deep | #880E4F | Gradient endpoints for magenta elements, deep accent states |
| action-primary-bg | #03CA8B | Filled buttons for upload, upgrade, create actions |
| action-primary-text | #000000 | Text on teal buttons for maximum contrast |
| action-secondary-bg | #222324 | Ghost buttons, icon buttons, secondary actions |
| action-secondary-text | #FFFFFF | Text on dark secondary buttons |
| action-tertiary-bg | #F4F4F5 | Light buttons for empty states, high-visibility actions on dark |
| action-tertiary-text | #222222 | Text on light buttons |
| success | #03CA8B | Completion states, verified indicators, positive feedback |
| info | #69A3FB | Links, informational highlights, external references |

The dark surface hierarchy creates depth through value rather than shadow. The canvas at pure black provides maximum contrast for content, while surface-elevated at #222222 appears to float above without heavy drop shadows. The teal accent family dominates functional elements—buttons, toggles, progress rings—while magenta serves identity and personalization. This separation prevents accent fatigue and creates predictable color coding: teal means action, magenta means user. Light button variants appear sparingly, reserved for empty states and high-priority single actions where maximum visibility against the dark canvas is required.

## Typography

The type system uses two families with clear role separation: Poppins for display and branded headings, Inter for all interface text and body content. Poppins Bold appears at a single size for section titles and empty-state headlines, while Inter spans a range of weights and sizes for navigation, body, labels, and buttons.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Poppins | 1.25rem | 700 | 1.5 | normal | Empty-state headlines, modal titles, section headers |
| section-display | Inter | 1.25rem | 600 | 1.5 | normal | Settings section headings, dashboard labels |
| body | Inter | 0.875rem | 400 | 1.43 | normal | Navigation items, descriptions, form labels, metadata |
| body-large | Inter | 1rem | 400 | 1.5 | normal | Empty-state descriptions, helper text, form inputs |
| label | Inter | 0.75rem | 400 | 1.5 | normal | Captions, hints, tertiary information, badge text |
| navigation | Inter | 0.875rem | 400 | 1.43 | normal | Sidebar links, top-bar items, tab labels |
| button-primary | Inter | 1rem | 600 | 1.5 | normal | Primary and secondary button labels |

Poppins appears exclusively in Bold weight at 20px, creating a clear typographic signature for the MEGA brand without overuse. Inter handles all functional text at 14px for standard interface elements and 16px for expanded readability contexts. The 13.333px size detected in button elements rounds to the practical equivalent of 14px in implementation. Line heights remain tight and efficient: 20px for 14px text, 24px for 16px text, 30px for 20px display text. No letter-spacing adjustments are applied, maintaining natural reading rhythm. Verify licensing for these families before production use; Poppins is attributed to designers Ninad Kale, Devanagari, Jonny Pinhorn, Latin through vendor Indian Type Foundry.

## Layout

The application layout follows a three-zone structure: a collapsible left sidebar for primary navigation, a central content area for files and data, and a right panel for contextual actions and chat. On settings pages, this resolves to sidebar-plus-detail with the navigation occupying approximately 240px of fixed width and the content area filling the remaining viewport.

The sidebar uses surface color (#151616) with vertical navigation items padded to 16px vertical and 20-24px horizontal. Active items receive a subtle background highlight. Section headers within the sidebar use muted ink with icon prefixes, while expandable sections reveal nested items with additional left indentation.

Content areas employ generous vertical rhythm. Settings panels use 24px top padding with section spacing of 40px between major groupings. Form fields stack with 16px vertical gaps, and horizontal rule dividers at 1px using border color separate logical sections. The storage dashboard card spans nearly the full content width with internal three-column layout: circular progress indicators for storage and transfer quotas, plus a right-aligned primary action button.

Empty states center both horizontally and vertically within their container, with illustration, headline, description, and action button stacked with 16px-24px spacing. Modal panels and overlays appear to use a slightly elevated surface treatment with rounded corners at 12px.

The top toolbar spans full width with search input as the dominant element, receiving rounded treatment and internal icon buttons. Utility icons cluster right-aligned with consistent 8-12px spacing. Avatar indicators use circular clipping with magenta background and white initial.

## Visual language

The visual character of MEGA's interface is defined by restraint punctuated with moments of vibrant color. The near-black canvas creates a focused, immersive environment appropriate for extended use with media and files. Surfaces elevate through subtle value shifts rather than heavy shadows, though a faint inset shadow on some elements suggests depth without material realism.

Rounded corners are applied systematically: 8px for standard buttons and inputs, 12px for panels and cards, 16px for pill-shaped buttons, 50% for avatars and circular indicators. This creates a family of related shapes that feel cohesive without monotony. The 4px radius appears on small utility buttons and compact elements.

Iconography is simple and functional, rendered in white or muted gray depending on prominence. Icons accompany text in buttons and navigation, or stand alone in toolbars. The visual weight of icons matches the Inter typeface—clean, geometric, unobtrusive.

Progress and status visualization uses circular forms with teal stroke against dark backgrounds. Storage indicators show percentage completion with numerical readout. Toggle switches use the full pill shape with teal fill and white indicator, creating immediate recognition of active states.

The empty-state illustrations use soft, dimensional style with gradient shading—books, chat bubbles, and abstract forms that feel friendly without becoming childish. These illustrations are the only place where complex color appears outside the functional palette, yet they harmonize through shared value ranges.

## Components

### Primary button

- Anatomy: Text label with optional leading icon, contained within a rounded rectangle
- Surface: Solid teal background (#03CA8B) with black text
- Typography: Inter 16px Semibold, line-height 24px
- Shape: 8px border radius, height implied by 24px vertical padding with 24px horizontal padding
- Spacing: 24px horizontal padding, centered text, optional 8px gap to icon
- Composition: Full-width in mobile contexts, auto-width with minimum touch target on desktop
- Variants: Gradient variant using teal-to-bright-teal for premium actions like "Upgrade account"

### Secondary button

- Anatomy: Text label with optional icon, contained within rounded rectangle
- Surface: Dark background (#222324) with white text
- Typography: Inter 16px Semibold or 14px Regular depending on context
- Shape: 8px border radius, same padding structure as primary
- Spacing: 24px horizontal padding
- Composition: Appears alongside primary or in toolbar clusters
- Variants: Ghost variant with transparent background for icon-only actions

### Tertiary button

- Anatomy: Text label with optional icon, light surface on dark background
- Surface: Near-white background (#F4F4F5) with dark text (#222222)
- Typography: Inter 16px Semibold
- Shape: 8px border radius
- Spacing: 24px horizontal padding, 16px vertical implied
- Composition: Centered in empty states, stacked with 8-12px margin to other buttons
- Variants: Outlined variant with 2px white border and transparent fill for "Note to self" style

### Sidebar navigation

- Anatomy: Vertical list of text links with leading icons, section headers with expand/collapse
- Surface: #151616 background, active items at #222324
- Typography: Inter 14px Regular, 20px line height
- Shape: Full-width items, no border radius on container
- Spacing: 16px vertical padding per item, 20-24px left padding, 10px between icon and text
- Composition: Fixed width, scrollable vertically
- Variants: Expanded state shows nested items with additional left indent; collapsed state shows icons only

### Search input

- Anatomy: Text field with leading search icon, optional filter chips, clear button
- Surface: #222222 background, 1px #303233 border
- Typography: Inter 14px Regular placeholder and input
- Shape: 8px border radius, full-width in toolbar context
- Spacing: 12-14px vertical padding, 12px left padding for icon, 12px right padding for actions
- Composition: Dominant element in top toolbar, flex-grow to fill available space

### Empty state

- Anatomy: Centered illustration, headline, description paragraph, action button
- Surface: Transparent or canvas background
- Typography: Poppins 20px Bold headline, Inter 16px Regular description
- Shape: No containing border, free-floating in content area
- Spacing: 24px below illustration, 16px below headline, 24px below description to button
- Composition: Vertical centering in available space, maximum width approximately 320px for text

### Toggle switch

- Anatomy: Circular indicator on rounded track, optional label
- Surface: Teal fill (#03CA8B) when active, gray track when inactive
- Shape: Pill shape at 9999px border radius, circular indicator
- Spacing: Compact, approximately 44px wide by 24px tall
- Composition: Right-aligned in settings rows, vertically centered to label

### Storage dashboard card

- Anatomy: Two circular progress indicators with labels, action button
- Surface: #222222 background, 12px border radius
- Typography: Inter 14px Regular for labels, 16px Semibold for values
- Shape: Rounded rectangle containing circular progress rings
- Spacing: 24px internal padding, even distribution of elements
- Composition: Full-width of content area, three-column internal layout

## Responsive behavior

The interface appears optimized for desktop viewport widths with a fixed sidebar and expansive content area. At narrower widths, the sidebar likely collapses to icon-only mode or hides behind a toggle, as suggested by the dense navigation structure that would consume excessive horizontal space.

Touch targets maintain minimum 44px height across buttons and navigation items, suitable for hybrid pointer/touch interaction. The 8px and 12px spacing values around buttons and icons suggest consideration for both precise cursor targeting and finger-based interaction.

Empty states and modal panels appear to use centered, width-constrained layouts that would adapt naturally to narrower viewports by maintaining internal spacing while reducing external margins. The stacked button pattern in chat and contacts modals would remain functional as a single column on any width.

Settings forms use two-column layouts for paired fields (first name/last name, birth date/country) that should stack vertically on narrow viewports to prevent horizontal scrolling or cramped input widths. The storage dashboard's three-column layout would similarly benefit from stacking on reduced widths.

## Practical implementation guidance

### Preserve
- The dark canvas as default; light mode exists as user preference but the system identity is dark-first
- Teal-to-bright-teal gradient on primary action buttons for premium/upgrade contexts
- Circular progress indicators with numerical readouts for storage visualization
- Magenta avatar backgrounds with white initials for user identity
- 8px border radius as the standard for all rectangular interactive elements
- Poppins Bold exclusively for headlines and section titles, never for body or interface text

### Avoid
- Adding drop shadows to elevated surfaces; the system uses value contrast and subtle inset highlights instead
- Using magenta for functional actions; reserve it for identity and personalization
- Applying letter-spacing adjustments to Inter; the system uses normal tracking throughout
- Creating additional surface colors between the defined hierarchy; the three-layer system is intentionally constrained
- Using pure white backgrounds except in tertiary buttons and empty-state actions

### Recommended build order
1. Establish the dark canvas and surface hierarchy with exact hex values
2. Implement Inter at 14px/20px and 16px/24px for all body and navigation text
3. Add Poppins Bold at 20px/30px for headlines and modal titles
4. Build the button system with primary (teal), secondary (dark), and tertiary (light) variants
5. Create the sidebar navigation with icon-text pairs and active state highlighting
6. Implement the search input with integrated icons and clear action
7. Add the storage dashboard card with circular progress visualization
8. Polish with toggle switches, empty states, and gradient button variants

### Accessibility
- Ensure teal buttons maintain 4.5:1 contrast ratio; the #03CA8B on #000000 pairing exceeds this threshold
- Provide visible focus indicators on all interactive elements; the current system relies on background changes that may be insufficient for keyboard navigation
- Add aria-labels to icon-only buttons in the top toolbar (search, notifications, user menu)
- Ensure empty-state illustrations have appropriate alt text or are marked decorative
- Support reduced-motion preferences for any progress indicator animations
- Maintain touch target minimums of 44px for all buttons and navigation items

## Scope note

This guide covers the authenticated file manager, account settings, chat, and contacts surfaces of MEGA. Marketing pages, public file links, mobile native applications, and the light-mode variant are not represented in the supplied material. Motion design, loading states beyond static skeletons, and error page treatments are not documented. Measurements are derived from the retained interface values where available.
