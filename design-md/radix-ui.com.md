# How radix-ui.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/radix-ui.com-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with large serif headline, component preview cards, and dark gradient background](https://pin.fontofweb.com/8038?format=jpg)](https://design.withfudge.com/share/pin-8038)

[Homepage hero with large serif headline, component preview cards, and dark gradient background](https://design.withfudge.com/share/pin-8038)

[![Themes playground showing typography specimen with theme customization panel on the right](https://pin.fontofweb.com/8037?format=jpg)](https://design.withfudge.com/share/pin-8037)

[Themes playground showing typography specimen with theme customization panel on the right](https://design.withfudge.com/share/pin-8037)

[![Button component matrix with accent, gray, disabled, and loading variants in multiple styles](https://pin.fontofweb.com/8036?format=jpg)](https://design.withfudge.com/share/pin-8036)

[Button component matrix with accent, gray, disabled, and loading variants in multiple styles](https://design.withfudge.com/share/pin-8036)

[![Alert Dialog and Avatar component demos with aspect ratio images and theme controls](https://pin.fontofweb.com/8035?format=jpg)](https://design.withfudge.com/share/pin-8035)

[Alert Dialog and Avatar component demos with aspect ratio images and theme controls](https://design.withfudge.com/share/pin-8035)

## Overview

Radix UI presents a dark-first, developer-centric visual system built around deep black canvases, high-contrast off-white typography, and vivid blue-violet accents. The design prioritizes clarity for technical documentation and interactive component exploration. Every surface sits on near-black foundations, with content emerging through careful luminance layering rather than heavy chrome. The homepage establishes this character immediately: a massive serif headline anchors the left side while floating component previews demonstrate real-world usage patterns on the right. The overall impression is one of precision engineering—every element serves a functional purpose, and decorative flourishes are restrained to gradients, subtle glows, and the occasional accent shadow.

The system supports extensive customization through a persistent theme panel that controls accent color, gray scale, appearance mode, radius scaling, and density. This panel itself demonstrates the design's component vocabulary: rounded corners, translucent borders, and compact control layouts. The visual language scales from marketing pages to dense component matrices without losing coherence, maintaining the same typographic rhythm and spatial logic throughout.

## Colors

The color system is built on a dark-mode foundation with semantic roles that remain consistent across theme variations. The canvas is pure black, with surfaces stepping up through carefully controlled luminance increases. Accents draw from a vivid blue-violet spectrum that provides energy without overwhelming the technical content.

| token | value | use |
|---|---|---|
| canvas | #000000 | Page background, deepest layer |
| surface | #111113 | Card backgrounds, primary containers |
| surface-elevated | #171918 | Elevated panels, theme controls |
| ink | #EEEEEE | Primary headings, important body text |
| muted-ink | #ECEEED | Secondary text, descriptions |
| subtle-ink | #ECEEED | Tertiary text, captions, metadata |
| accent | #3E63DD | Primary buttons, active states, links |
| accent-bright | #5B81FE | Hover states, focus rings, glows |
| accent-violet | #E18BFF | Gradient endpoints, decorative accents |
| accent-coral | #FF5D61 | Error states, destructive actions |
| accent-teal | #00F9F9 | Special highlights, code accents |
| border | #222325 | Card borders, dividers, input outlines |
| border-subtle | #2A2A28 | Inactive states, disabled borders |
| shadow | #0C111C | Deep shadows, backdrop overlays |

The interface operates almost exclusively in dark mode, with light mode available as a system-level toggle. The dark palette achieves readability through extreme contrast ratios—ink on canvas exceeds 15:1—while surfaces create depth through minimal luminance steps. Accent colors appear in gradients on the homepage hero, transitioning from deep blue through violet to soft pink, establishing the brand's energetic technical personality. Component states use the accent family consistently: default buttons use #3E63DD, hover states brighten to #5B81FE, and focus rings emit a subtle glow. The theme panel exposes twenty-four accent color options and eight gray scale variants, demonstrating the system's flexibility while maintaining the same structural relationships.

## Typography

The type system pairs a refined serif display face with a clean neo-grotesque sans-serif for all functional text. This combination signals technical credibility while providing visual warmth at large sizes. The hierarchy is established through size contrast, weight variation, and careful tracking adjustments rather than color changes.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Adobe Pro | 4.875rem | 400 | 0.9 | -0.05em | Homepage headlines, major page titles |
| section-display | Untitled Sans | 3.75rem | 700 | 1 | -0.04em | Section headers, playground titles |
| heading-large | Untitled Sans | 2.1875rem | 700 | 1.15 | -0.015em | Component category headers |
| heading | Untitled Sans | 1.5rem | 700 | 1.25 | -0.01em | Card titles, subsection headers |
| body-large | Untitled Sans | 1.25rem | 400 | 1.4 | -0.01em | Lead paragraphs, feature descriptions |
| body | Untitled Sans | 1rem | 400 | 1.5 | normal | Default body text, UI labels |
| body-small | Untitled Sans | 0.875rem | 400 | 1.43 | normal | Buttons, compact UI, metadata |
| label | Untitled Sans | 0.75rem | 400 | 1.33 | 0.005em | Captions, helper text, badges |
| navigation | Untitled Sans | 0.875rem | 700 | 1.43 | normal | Nav links, tabs, breadcrumbs |
| code | Klim Type Foundry | 0.83125rem | 400 | 1.65 | -0.015em | Inline code, syntax blocks |

Adobe Pro, designed by Robert Slimbach and available from Adobe Systems Incorporated, serves exclusively for hero headlines at 78px with tight negative tracking. Untitled Sans, designed by Kris Sowersby at Klim Type Foundry, carries all functional typography from body text through display headings. The Medium weight (700) provides emphasis without the heaviness of traditional bold. Klim Type Foundry-Buch handles code specimens at 13.3px with slightly expanded line height for readability. Applesystem appears in the design facts as a detected font family in playground contexts, though it serves as a system fallback rather than a primary design voice. Verify licensing for these families before production use.

## Layout

The layout system uses a fluid approach with consistent inset patterns and generous vertical rhythm. Content containers center with maximum widths that prevent excessive line lengths, while component playgrounds expand to fill available space.

The homepage employs an asymmetric split: the left third carries the value proposition and call-to-action, while the right two-thirds display a stacked arrangement of component previews including team management, notifications, pricing tables, and payment confirmations. These preview cards float with subtle shadows and rounded corners, creating depth against the dark gradient background.

Navigation sits at the top with a compact horizontal bar containing the Radix logo, primary section links, and utility actions. The logo lockup combines a geometric mark with "Made by WorkOS" attribution. Navigation links use the body-small size with medium weight, maintaining the same color as body text until hover states apply accent color.

Section spacing follows a major-third rhythm. The homepage hero receives substantial top padding before the headline, with the component preview column extending below the fold. Interior pages like the playground use a two-column layout: the main content area occupies roughly seventy percent of the width, while a fixed theme panel occupies the right edge. This panel remains visible during scroll, providing immediate access to appearance controls.

Component matrices organize variants in grids with consistent gaps. The Button section displays five style variants (Classic, Solid, Soft, Surface, Outline, Ghost) against four color treatments (Accent, Gray, Disabled, Loading) in a six-by-four grid. Each cell maintains uniform padding and alignment, with labels positioned above the matrix rather than inline.

## Visual language

The visual character balances technical precision with approachable warmth. Surfaces are universally dark, but never harsh—rounded corners appear on nearly every element, from tiny 3px radii on compact buttons to 12px on cards and 9999px on pill-shaped actions. This rounding softens the otherwise severe dark palette.

Gradients serve as the primary decorative element, appearing in hero backgrounds and component highlights. The signature gradient moves from deep blue (#3E63DD) through violet to soft pink (#E18BFF), often applied at low opacity or as subtle background washes. Component previews on the homepage use this gradient as a faint backdrop glow, creating atmosphere without competing with content.

Shadows are layered and sophisticated. Cards carry multiple shadow values: a tight inner highlight suggesting surface curvature, a mid-range drop shadow for elevation, and a deep ambient shadow for grounding. The theme panel demonstrates this with `rgba(0, 0, 0, 0.15) 0px 8px 40px` combined with inset borders that simulate translucency.

Borders are hairline-thin and low-contrast, serving as structural definition rather than visual emphasis. The border token at #222325 is only slightly lighter than the surface it contains, creating subtle containment. Active and hover states brighten borders to accent values.

Imagery is sparse and functional. When photographs appear—as in the Aspect Ratio component demo—they display at natural ratios without decorative framing. Icons are simple, line-based, and monochrome, matching the text color of their context.

## Components

### Button

Buttons are the most extensively demonstrated component, appearing in six style variants across multiple color treatments.

- **Anatomy**: Text label with optional leading or trailing icon. Loading states replace text with a spinner.
- **Surface and text color**: Classic variant uses accent background with white text. Solid uses accent with subtle gradient overlay. Soft applies accent at reduced opacity. Surface matches the elevated surface color. Outline uses transparent background with accent border. Ghost uses no background until hover.
- **Typography**: body-small token, medium weight for emphasis.
- **Shape and border**: 4px radius for standard buttons, 9999px for pill variants. Borders are 1px when present, using accent or border-subtle colors.
- **Spacing**: Horizontal padding of 12px to 24px depending on size variant. Height targets 32px for standard, 40px for large.
- **Composition**: Icons sit 8px from text, aligned to the optical center. Loading spinners replace the trailing icon position.
- **Variants**: Size (small, standard, large), style (classic, solid, soft, surface, outline, ghost), color (accent, gray, disabled, loading).

### Card

Cards contain the component previews on the homepage and the theme configuration examples.

- **Anatomy**: Header with title and optional action, content area, footer with metadata.
- **Surface and text color**: surface background, ink for titles, muted-ink for descriptions.
- **Typography**: heading for card titles, body for content, body-small for footer metadata.
- **Shape and border**: 12px radius, 1px border using border color. Subtle shadow stack for elevation.
- **Spacing**: 32px internal padding, 24px gap between header and content.
- **Composition**: Content aligns to top, actions align to right in headers.

### Theme Panel

The persistent configuration panel demonstrates the system's own component vocabulary.

- **Anatomy**: Section headers with icon indicators, control groups for color selection, segmented controls for appearance and radius, action button at base.
- **Surface and text color**: surface-elevated background with slightly brighter borders than standard cards. Section headers use ink, controls use body-small.
- **Typography**: heading for panel title, body-small for control labels, label for helper text.
- **Shape and border**: 12px radius for the panel itself, 4px for individual control buttons, 9999px for color swatches.
- **Spacing**: 24px internal padding, 16px between sections, 8px within control groups.
- **Composition**: Color swatches arrange in horizontal rows with 8px gaps. Segmented controls fill available width with equal distribution.

### Alert Dialog

Modal dialogs demonstrate overlay patterns and button grouping.

- **Anatomy**: Backdrop overlay, centered panel, title, description, action button row.
- **Surface and text color**: Backdrop uses shadow at partial opacity. Panel uses surface-elevated. Title uses heading, description uses body.
- **Typography**: heading for dialog title, body for message text.
- **Shape and border**: 12px panel radius, 4px button radius.
- **Spacing**: 32px panel padding, 16px between title and description, 24px to action row.
- **Composition**: Actions align right with 12px gap between buttons. Primary action uses accent, secondary uses outline style.

### Avatar

Circular user representations with fallback initials.

- **Anatomy**: Circular image container with optional status indicator, or initials on colored background.
- **Surface and text color**: Accent or gray background for fallback, white text for initials.
- **Typography**: body-small, medium weight for initials.
- **Shape and border**: 9999px radius for full circles. Status indicators use 6px radius dots positioned at bottom-right.
- **Spacing**: 2px border when used as group, 8px gap between avatars in stacks.
- **Variants**: Size (small, standard, large), style (solid, soft), color (accent, gray).

## Responsive behavior

The layout adapts through content reflow rather than breakpoint-driven transformation. The homepage split becomes a single column on narrower viewports, with component previews stacking below the value proposition. The theme panel transitions from a fixed sidebar to a collapsible drawer on smaller screens, accessible through a toggle in the navigation bar.

Typography scales down proportionally. The hero-display reduces from 78px to approximately 48px on mid-size screens and 36px on mobile, maintaining the same tight leading and negative tracking. Component matrices reflow from multi-column grids to single-column stacks, preserving the variant relationships through consistent vertical spacing.

Navigation collapses to a hamburger menu on mobile, with section links moving to a full-screen overlay that maintains the dark canvas and accent hover states. The playground's tab navigation scrolls horizontally when space is constrained, with fade indicators suggesting additional content.

## Practical implementation guidance

### Preserve
- The extreme contrast between canvas (#000000) and ink (#EEEEEE) is fundamental to the system's readability; maintain this ratio for all primary text.
- The pairing of Adobe Pro for display and Untitled Sans for functional text creates the distinctive technical-editorial tone.
- Rounded corners on all interactive elements soften the dark palette; even small 3-4px radii contribute significantly to the approachable character.
- The layered shadow system—combining inset highlights, mid-range drops, and deep ambients—creates sophisticated depth without heavy visual weight.

### Avoid
- Pure white (#FFFFFF) for large text areas; the system prefers slightly dimmed off-whites that reduce eye strain in dark mode.
- Sharp corners on containers or buttons; they contradict the system's pervasive rounding.
- Saturated accent colors at full strength for backgrounds; accents should appear as highlights, not fields.
- Generic gray palettes; the system uses warm-tinted grays with subtle blue or green undertones.

### Recommended build order
1. Establish the dark canvas and surface color tokens with proper luminance steps.
2. Implement the typography hierarchy with Adobe Pro for hero and Untitled Sans for all functional text.
3. Build the button component matrix with all six style variants; buttons appear most frequently and establish the accent color usage patterns.
4. Create the card component with proper shadow stacking and border treatment.
5. Implement the theme panel as a demonstration of compositional patterns and control density.
6. Add gradient backgrounds and glow effects for hero sections and decorative moments.

### Accessibility
- Maintain the 15:1 contrast ratio between ink and canvas for all primary text; this exceeds WCAG AAA requirements and supports the developer audience's preference for crisp readability.
- Ensure focus indicators use the accent-bright color with sufficient glow spread; the default browser outline should be replaced with a 2px solid ring plus subtle box-shadow.
- Provide reduced-motion alternatives for gradient backgrounds and shadow transitions; respect `prefers-reduced-motion`.
- Code blocks need syntax highlighting with sufficient contrast for all token colors; the Klim Type Foundry face at 13.3px requires careful color selection against the dark surface.
- Interactive color swatches in the theme panel need visible focus states and proper ARIA labels for screen reader users.

## Scope note

This guide covers the homepage, themes playground, and component documentation surfaces visible in the supplied images. Mobile layouts, animation specifications, form validation states, and the light mode color inversion are not fully represented. The color swatch system in the theme panel suggests extensive palette generation capabilities not detailed here. Measurements are derived from the exact values in the design facts where available, with semantic rounding to the 2px relative unit grid.
