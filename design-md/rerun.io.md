# How rerun.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/rerun.io-design)

Last updated: 2026-08-10

## Captured pages

[![Web Viewer dashboard showing multi-panel graph visualizations with node-link diagrams, bubble charts, lattice structures, and Markov chains against a dark interface with sidebar](https://pin.fontofweb.com/9394?format=jpg)](https://design.withfudge.com/share/pin-9394)

[Web Viewer dashboard showing multi-panel graph visualizations with node-link diagrams, bubble charts, lattice structures, and Markov chains against a dark interface with sidebar](https://design.withfudge.com/share/pin-9394)

[![Web Viewer displaying a 3D animated URDF robotic arm model with green grid environment, property inspector panel, and stream timeline at the bottom.](https://pin.fontofweb.com/9393?format=jpg)](https://design.withfudge.com/share/pin-9393)

[Web Viewer displaying a 3D animated URDF robotic arm model with green grid environment, property inspector panel, and stream timeline at the bottom.](https://design.withfudge.com/share/pin-9393)

[![Web Viewer welcome screen with onboarding cards for Send data, Explore data, Query data out, and Rerun Hub, plus a grid of example recording thumbnails including URDF, ARKit](https://pin.fontofweb.com/9392?format=jpg)](https://design.withfudge.com/share/pin-9392)

[Web Viewer welcome screen with onboarding cards for Send data, Explore data, Query data out, and Rerun Hub, plus a grid of example recording thumbnails including URDF, ARKit](https://design.withfudge.com/share/pin-9392)

[![Marketing homepage hero section with stacked isometric logo, Rerun Hub badge, large display heading, four-column feature grid, and gradient call-to-action button on a black](https://pin.fontofweb.com/9391?format=jpg)](https://design.withfudge.com/share/pin-9391)

[Marketing homepage hero section with stacked isometric logo, Rerun Hub badge, large display heading, four-column feature grid, and gradient call-to-action button on a black](https://design.withfudge.com/share/pin-9391)

## Overview

Rerun's design system is built for developers working with robotics, computer vision, and physical AI data. The visual language is aggressively dark, placing rich visualizations and 3D content at center stage while surrounding them with minimal, functional chrome. The interface avoids decorative elements in favor of density and clarity—every pixel serves the work of inspecting, debugging, and sharing multimodal data.

The system spans two distinct surfaces: a marketing site that explains the platform's value, and a web-based data viewer that handles real-time and recorded sensor data, point clouds, meshes, graphs, and images. Both share a common dark foundation, system-derived typography, and restrained accent usage. The mint-green accent color appears sparingly, reserved for interactive highlights, selection states, and the occasional call-to-action. The overall impression is technical, trustworthy, and unobtrusive—designed to fade into the background so that the user's data can speak.

## Colors

The color palette is built on a near-black foundation with layered gray surfaces and a single vibrant accent. This creates maximum contrast for data visualization while maintaining readable text hierarchy.

| token | value | use |
|---|---|---|
| canvas | #000000 | Page background, deepest layer |
| surface | #0A0A0A | Primary content areas, viewer panels |
| surface-elevated | #171717 | Elevated cards, sidebar sections, header bars |
| ink | #F5F5F5 | Primary headings, active navigation, important labels |
| ink-secondary | #A1A1A1 | Body text, descriptions, inactive states |
| ink-muted | #525252 | Tertiary text, metadata, disabled elements |
| border | #171717 | Subtle dividers between dark regions |
| border-subtle | #404040 | Visible borders on interactive elements, input outlines |
| accent | #5EE9B5 | Primary action color, selection highlights, links |
| action-primary | #5EE9B5 | Buttons, active states, focus rings |
| action-primary-text | #0A0A0A | Text on accent-colored buttons |

The dark mode is not an alternative—it is the default and only mode. The near-black canvas absorbs light so that colorful data visualizations, 3D renders, and video content appear luminous by contrast. Warm grays for text prevent the coldness of pure white-on-black while maintaining excellent readability. The mint accent is used with restraint: it appears in the logo, primary buttons, selection states, and link hover effects, but never as large background areas that would compete with user content.

Marketing pages introduce subtle variation through photographic imagery and occasional light surfaces, but the viewer interface remains consistently dark. Gradients are rare and functional, appearing primarily on promotional call-to-action buttons where a warm orange-to-pink transition draws attention without breaking the dark aesthetic.

## Typography

The type system relies on system fonts for performance and familiarity, with a single monospace family for code elements. The documented families are Applesystem, System-Uisansserif, and System-Uimonospace. In practice, the interface uses System as the primary sans-serif stack, which resolves to System-Uisansserif, while Applesystem appears at 14px for specific UI labels. System-Uimonospace handles code values. Weights range from 400 to 550, creating hierarchy through size and weight rather than font family changes.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | System | 3.984375rem | 500 | 1.1 | -0.02em | Marketing page hero headings |
| section-display | System | 2.8125rem | 450 | 1 | -0.01em | Large section headings in viewer |
| body | System | 0.9375rem | 450 | 1.5 | 0em | Primary body text, navigation |
| body-large | System | 1.1875rem | 400 | 1.5 | 0em | Lead paragraphs, descriptions |
| label | System | 0.8203125rem | 450 | 1.428571 | 0.05em | Buttons, badges, metadata labels |
| navigation | System | 0.9375rem | 450 | 1.5 | 0em | Top navigation, sidebar items |
| code | System-Uimonospace | 0.80625rem | 450 | 1.6 | 0em | Inline code, technical values |

The base font size of 0.9375rem (15px) with 1.5 line height provides comfortable reading for extended technical content. Headings use tighter line heights and negative letter spacing for a crisp, modern appearance. The 550 weight for small headings and button labels creates sufficient distinction from body text without requiring a separate font family.

Verify licensing for these families before production use. The system font stack ensures broad compatibility but may need augmentation with web fonts for brand consistency across platforms.

## Layout

The layout system is built on a 2px relative unit, producing a granular but coherent spacing scale. Content is organized with generous margins and clear section breaks, avoiding the cramped density common in developer tools.

The marketing homepage uses centered content blocks with substantial horizontal margins—approximately 17rem to 23rem on either side at desktop widths—creating a focused reading experience. Sections are separated by 7.5rem of vertical space, with internal content gaps of 2.8125rem to 5.625rem. Feature grids use four-column layouts with consistent 1.40625rem gaps between items.

The web viewer employs a full-bleed layout with a fixed left sidebar for navigation and data sources, a central viewport area for visualization panels, and optional right panels for properties and selection details. The viewport uses a grid system that allows multiple visualization panels to coexist, each with its own title bar and controls. A bottom timeline or stream panel provides temporal navigation.

Spacing tokens follow a modular progression:

| token | value | use |
|---|---|---|
| unit | 0.125rem | Base grid unit |
| tight | 0.46875rem | Compact internal padding, icon gaps |
| compact | 0.9375rem | Button padding, small card gaps |
| default | 1.40625rem | Standard element gaps, list spacing |
| comfortable | 2.8125rem | Card padding, section internal gaps |
| spacious | 5.625rem | Major section separations |
| section | 7.5rem | Page section vertical margins |

## Visual language

The visual identity balances technical precision with approachable warmth. The Rerun logo is a simple wordmark in a custom sans-serif, appearing in off-white against dark backgrounds. The isometric stacked-squares motif in the marketing hero suggests layered data infrastructure without literal illustration.

Imagery throughout the system is functional and authentic: screenshots of actual data visualizations, 3D renders from the viewer, and photographic content showing robotics applications. These are presented with minimal framing—subtle rounded corners on thumbnails, no heavy shadows or borders that would distract from the content itself.

Iconography is thin-line and monochrome, matching the muted text color. Icons in the viewer's sidebar and panel headers are small (approximately 0.9375rem) with generous touch targets. The overall density is medium-high in the viewer interface, where screen real estate is valuable, and more relaxed on marketing pages where reading comprehension matters.

The accent color appears in the logo mark, primary buttons, and selection highlights. A gradient treatment—warm orange through pink to coral—appears exclusively on promotional call-to-action buttons, creating a moment of warmth in the otherwise cool dark interface. This gradient is not used elsewhere, preserving its impact.

## Components

### Navigation Bar

The top navigation appears on marketing pages with a transparent or near-black background. Links are set in the navigation typography token with ink-secondary color, transitioning to ink on hover. The active page receives no special background treatment—only a color change—maintaining the minimal aesthetic. A search input with rounded corners and subtle border sits at the far right.

- Anatomy: Logo wordmark left, horizontal link list center-right, search input far right
- Surface: Transparent or canvas background
- Typography: navigation token, ink-secondary default, ink on hover
- Spacing: compact horizontal padding between links, default gap

### Primary Button

The primary button uses the accent background with dark text, fully rounded corners (pill shape), and compact padding. It appears for the most important action on a page or in a panel.

- Anatomy: Text label with optional leading icon, no visible border
- Surface: action-primary background, action-primary-text color
- Typography: label token, weight 500
- Shape: 9999px border radius for full pill
- Spacing: 0.703125rem vertical, 1.171875rem horizontal
- Variants: Gradient background for promotional CTAs

### Secondary Button

Secondary buttons are transparent with a subtle border, used for alternative actions or in dense toolbars where multiple controls coexist.

- Anatomy: Text label with optional icon
- Surface: Transparent background, border-subtle 1px border
- Typography: label token, ink color
- Shape: 9999px border radius
- Spacing: 0.703125rem vertical, 1.171875rem horizontal

### Card

Cards appear in the viewer's welcome screen and example galleries, with dark elevated surfaces and subtle borders.

- Anatomy: Thumbnail image top, title and metadata below, optional action links
- Surface: surface background, border 1px solid
- Typography: body for descriptions, label for metadata tags
- Shape: 0.46875rem border radius
- Spacing: 1.875rem internal padding

### Feature Grid

Marketing pages use a four-column grid of text features with headings, descriptions, and arrow links. These have no visible container—just clear typographic hierarchy and consistent spacing.

- Anatomy: Small label, heading with arrow, paragraph description
- Surface: Transparent, no background or border
- Typography: label token for category, body-large for heading, body for description
- Spacing: comfortable gap between items, default gap between text elements

### Badge

Small metadata tags appear below example thumbnails and in property panels, using elevated surfaces with subtle borders.

- Anatomy: Text label only
- Surface: surface-elevated background, border 1px solid
- Typography: label token, ink-secondary color
- Shape: 2.125rem border radius
- Spacing: 0.3515625rem vertical, 0.9375rem horizontal

### Viewer Panel

The core visualization container in the web viewer has a title bar with controls and a content area that fills available space.

- Anatomy: Title bar with label and action icons, content canvas below
- Surface: surface background, border-top divider
- Typography: label token for title
- Shape: 0px border radius for seamless grid integration
- Spacing: tight internal padding on title bar

### Sidebar

The left sidebar in the viewer contains collapsible sections for data sources, blueprints, and streams.

- Anatomy: Section headers with expand/collapse, nested item lists, scrollable container
- Surface: canvas background, border-right divider
- Typography: body for items, label for section headers
- Spacing: compact horizontal padding, tight vertical item spacing

## Responsive behavior

The marketing site uses centered content with fluid margins that compress on narrower viewports. At extreme widths, content remains capped rather than stretching indefinitely. The four-column feature grid should collapse to two columns on tablet widths and single column on mobile, maintaining comfortable reading measure.

The web viewer is inherently responsive through its panel grid system. On smaller screens, the sidebar may collapse to icons or hide entirely, with a toggle to restore it. The bottom timeline panel can be minimized to a thin scrubber. Multiple visualization panels stack vertically when horizontal space is insufficient, preserving their internal aspect ratios where possible.

Touch targets in the viewer should maintain minimum 44px dimensions even on desktop, as the interface may be used on tablets in lab or field environments. The dense information panels on the right side should become collapsible drawers on narrow screens.

## Practical implementation guidance

### Preserve
- The near-black canvas as the default and only background mode
- System font stack for all UI text, with monospace reserved for code values
- Mint accent used sparingly—never as large background areas
- Subtle borders and dividers rather than heavy shadows for elevation
- Functional, authentic imagery over decorative illustrations
- Generous whitespace on marketing pages, efficient density in the viewer

### Avoid
- Light mode variants without explicit product requirement
- Pure white (#FFFFFF) text except for highest emphasis moments
- Multiple accent colors competing for attention
- Decorative gradients outside the promotional CTA pattern
- Borders stronger than 1px on any element
- Custom fonts that increase load time without clear benefit

### Recommended Build Order
1. Establish the dark canvas and surface color tokens
2. Implement the system font stack with base size and line height
3. Build the spacing scale from the 2px unit
4. Create button components with pill shape and accent variant
5. Implement card and panel containers with subtle borders
6. Add the navigation patterns for both marketing and viewer contexts
7. Refine viewer-specific components: sidebar, panel grid, timeline

### Accessibility
- Maintain minimum 4.5:1 contrast for all body text against dark backgrounds
- Use the accent color only for interactive elements, not informational text
- Ensure focus indicators are visible against dark surfaces with adequate offset
- Provide keyboard navigation for all viewer panel controls and timeline scrubbing
- Consider reduced-motion preferences for animated data visualizations
- Test sidebar collapse behavior with screen readers to maintain landmark navigation

## Scope note

This guide covers the marketing homepage and web viewer interface as visible in the supplied images. Mobile layouts, additional marketing pages, documentation site styling, and viewer plugin interfaces are not represented. Animation specifications, data visualization color palettes, and 3D rendering defaults are implementation concerns beyond this system.
