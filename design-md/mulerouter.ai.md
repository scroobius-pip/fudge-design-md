# How mulerouter.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/mulerouter.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large Stack Sans Notch display typography over a dithered blue-green gradient image of a deer, featuring a tabbed carousel navigation and a search bar with blue](https://pin.fontofweb.com/9055?format=jpg)](https://design.withfudge.com/share/pin-9055)

[Hero section with large Stack Sans Notch display typography over a dithered blue-green gradient image of a deer, featuring a tabbed carousel navigation and a search bar with blue](https://design.withfudge.com/share/pin-9055)

[![Model directory grid showing Popular Models and Image & Video Generation Models sections with thumbnail cards, category tags, and pagination arrows on a near-black background.](https://pin.fontofweb.com/9056?format=jpg)](https://design.withfudge.com/share/pin-9056)

[Model directory grid showing Popular Models and Image & Video Generation Models sections with thumbnail cards, category tags, and pagination arrows on a near-black background.](https://design.withfudge.com/share/pin-9056)

[![Footer section with MuleRouter branding, multi-column link groups for Models, Resources, Social, and Playground, plus Discord and Client Support buttons with bordered outlines.](https://pin.fontofweb.com/9057?format=jpg)](https://design.withfudge.com/share/pin-9057)

[Footer section with MuleRouter branding, multi-column link groups for Models, Resources, Social, and Playground, plus Discord and Client Support buttons with bordered outlines.](https://design.withfudge.com/share/pin-9057)

## Overview

MuleRouter presents a dark, technically precise interface for an AI model routing platform. The design establishes authority through extreme contrast: near-black surfaces against bright white and electric blue accents, with dithered, posterized photographic imagery providing atmospheric depth. The visual system balances industrial functionality with moments of expressive typography, particularly in the hero display treatment that uses a distinctive notched sans-serif at large scale.

The interface organizes dense model information into scannable grid layouts, using consistent card patterns with thumbnail imagery, provider labels, and capability tags. Navigation remains minimal and utilitarian, while the hero section employs full-bleed imagery with gradient overlays to create visual drama without sacrificing readability. The overall impression is of a tool built for practitioners—direct, information-dense, and visually restrained except where display typography or hero imagery demands attention.

## Colors

The color system operates on a near-monochrome dark foundation with a single vibrant blue accent. All colors serve functional roles in the interface hierarchy.

| token | value | use |
|---|---|---|
| canvas | `#000000` | Page background, deepest layer |
| surface | `#0B0B0D` | Card backgrounds, footer sections |
| surface-elevated | `#111114` | Elevated panels, input backgrounds |
| surface-highlight | `#18181C` | Tag backgrounds, subtle highlights |
| ink | `#FBFBFF` | Primary headings, hero text, buttons on dark |
| ink-secondary | `#DFE0EA` | Body text, navigation, primary content |
| ink-muted | `#A7A9B8` | Descriptions, secondary labels, footer body |
| ink-dim | `#5B5D6B` | Tertiary text, disabled states, metadata |
| action | `#0055FF` | Primary buttons, search submit, active indicators |
| border | `#FFFFFF` | Ghost button borders, footer button outlines |
| border-subtle | `#000000` | Minimal dividers, hairline separators |

The dark mode is absolute and unmodulated—there is no light theme apparent in the interface. Photographic imagery provides the only color variation, with dithered blues, teals, and warm accents appearing in hero and card thumbnails. These image-derived tones are not replicated in UI elements, maintaining strict separation between content imagery and interface chrome. The blue action color appears sparingly, reserved for the search submission button and primary calls-to-action, ensuring it carries maximum weight when deployed.

## Typography

Three font families establish the typographic hierarchy: Stack Sans Notch for expressive display moments, Inter for all interface text, and Jet Brains Mono for technical metadata and code-adjacent content. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Stack Sans Notch | 4rem | 600 | 1 | -0.025em | Hero headlines, major campaign titles |
| section-display | Inter | 2.625rem | 600 | 0.9 | -0.025em | Section headings, "Popular Models" |
| body | Inter | 0.875rem | 400 | 1.5 | normal | Navigation, card titles, general UI |
| body-large | Inter | 1.09375rem | 400 | 1.625 | normal | Hero descriptions, introductory paragraphs |
| label | Inter | 0.6875rem | 700 | 1.5 | 0.1em | Category headers, footer column titles |
| label-small | Inter | 0.5rem | 700 | 1.5 | 0.1em | Tags, badges, metadata labels |
| navigation | Inter | 0.875rem | 400 | 1.5 | normal | Header links, dropdown items |
| button | Inter | 0.875rem | 400 | 1.5 | normal | Button labels, form actions |
| mono | Jet Brains Mono | 0.6875rem | 400 | 1.5 | normal | Technical specs, provider codes, footer metadata |

Stack Sans Notch, designed by Koto Dylan Young and available from Koto, appears exclusively at display scale with tight negative tracking and a weight of 600. Its distinctive notched terminals create a technical, engineered character that differentiates the brand voice from generic sans-serif platforms. Inter handles all functional typography with weights ranging from 400 to 700, maintaining clarity at small sizes through its open apertures and balanced proportions. Jet Brains Mono appears in the footer and potentially in code-adjacent contexts, providing the monospaced rhythm expected in developer-facing tools.

## Layout

The layout system employs generous horizontal margins and strict grid alignment to organize dense model information. Content containers use `0px 120px` horizontal padding on desktop, creating substantial breathing room at viewport edges while maintaining content focus. Section vertical rhythm alternates between tight internal spacing and generous section breaks.

The header occupies a fixed position with `0px 24px` horizontal padding, containing the MuleRouter logomark, primary navigation links, and utility actions. Navigation items distribute horizontally with consistent gaps, while the "Sign in" button and settings icon cluster at the right edge.

Hero sections implement full-bleed imagery with gradient overlays. The `linear-gradient(to top, oklab(0 0 0 / 0.8) 0%, oklab(0 0 0 / 0.2) 50%, rgba(0, 0, 0, 0) 100%)` overlay ensures text legibility against complex photographic backgrounds. Below the hero, a tabbed navigation strip provides carousel-style section access with numbered indicators and descriptive labels.

The model grid employs a responsive column system with `1.25rem` gaps between cards. Cards themselves use no border-radius, maintaining the sharp, technical aesthetic throughout. Section headers combine a small "FEATURED" or category label with a large section title and optional description, followed by pagination controls aligned to the right.

The search interface spans a contained width with `0px 120px` horizontal padding, featuring an input field with icon prefix and a blue "Find" action button positioned at the right edge.

## Visual language

The visual language synthesizes technical precision with atmospheric imagery. The dithered, posterized photographic treatment—visible in hero imagery and card thumbnails—creates a distinctive digital aesthetic that suggests AI-generated or processed content. These images feature limited color palettes, high contrast, and visible pixel structure that harmonizes with the interface's sharp edges and zero-radius components.

Imagery consistently employs gradient overlays for text legibility, transitioning from transparent at top to heavily darkened at bottom. This treatment allows large display typography to sit directly on photographic content without background panels or text shadows.

The absence of rounded corners throughout the interface reinforces an industrial, tool-like character. Buttons, cards, tags, and inputs all share `0rem` border-radius, creating visual consistency and suggesting computational precision over organic softness.

Accent deployment is extremely restrained. The `#0055FF` blue appears only in primary action buttons and active states, creating high-value targets in an otherwise monochrome field. White borders on ghost buttons provide secondary emphasis without competing with the blue accent.

Tag and badge systems use uppercase micro-typography with generous letter-spacing, creating scannable metadata that reads as labels rather than content. Provider names ("ALIBABA", "OPENAI", "KLINGAI") and capability tags ("Text To Image", "Video Generation") follow this pattern consistently.

## Components

### Header

- **Anatomy**: Logomark with mule icon and "MuleRouter" wordmark, primary navigation links (Explore, Wan, Qwen, Docs, Playground dropdown), settings icon, "Sign in" button
- **Surface**: Transparent background over page content, `0px 24px` horizontal padding
- **Typography**: Navigation links use `{typography.navigation}` in `{colors.ink-secondary}`; active or emphasized items may use `{colors.ink}`
- **Composition**: Horizontal flex layout with logo and navigation left-aligned, utilities right-aligned
- **Variants**: Playground item includes dropdown indicator; announcement banner may appear above header

### Hero Carousel

- **Anatomy**: Full-bleed background image, gradient overlay, display headline, description paragraph, primary action button, tabbed navigation strip at bottom
- **Surface**: Background image with `linear-gradient(to top, oklab(0 0 0 / 0.8) 0%, oklab(0 0 0 / 0.2) 50%, rgba(0, 0, 0, 0) 100%)` overlay
- **Typography**: Headline uses `{typography.hero-display}` in `{colors.ink}`; description uses `{typography.body-large}` in `{colors.ink-secondary}`
- **Shape**: No border-radius; full viewport width
- **Spacing**: Content positioned left with `0px 120px` horizontal padding; vertical padding varies by content density
- **Composition**: Text block left-aligned, occupying approximately 40% of width; imagery fills remaining space
- **Variants**: Multiple slides accessible via numbered tab strip; active tab indicated by visual emphasis

### Search Bar

- **Anatomy**: Text input with search icon prefix, placeholder text, "Find" action button with arrow icon
- **Surface**: Input background `{colors.surface}`; button background `{colors.action}`
- **Typography**: Input placeholder uses `{typography.body}` in `{colors.ink-dim}`; button uses `{typography.button}` in `{colors.ink}`
- **Shape**: No border-radius; `1px solid {colors.surface-highlight}` border
- **Spacing**: `0px 120px` horizontal padding on container; input height approximately `3.5rem`
- **Composition**: Input expands to fill available width; button fixed at right edge with `0px 16px` padding

### Model Card

- **Anatomy**: Thumbnail image, provider label, model name, description excerpt, capability tags, external link icon
- **Surface**: Background `{colors.surface}`; no border
- **Typography**: Provider label uses `{typography.label-small}` in `{colors.ink-dim}` uppercase; model name uses `{typography.body}` weight 600 in `{colors.ink}`; description uses `{typography.body}` in `{colors.ink-muted}` at smaller size
- **Shape**: No border-radius; sharp corners throughout
- **Spacing**: Internal padding approximately `1.25rem`; image aspect ratio consistent within grid
- **Composition**: Vertical stack with image top, metadata below; tags arranged horizontally with small gaps
- **Variants**: Featured cards may include "NEW", "FEATURED", "POPULAR" badges positioned over thumbnail; some cards show multiple tags

### Section Header

- **Anatomy**: Small category label, large section title, optional description, pagination arrows
- **Typography**: Label uses `{typography.label}` in `{colors.ink}` with background highlight; title uses `{typography.section-display}` in `{colors.ink}`; description uses `{typography.body}` in `{colors.ink-muted}`
- **Composition**: Title and description left-aligned; pagination controls right-aligned when present

### Footer

- **Anatomy**: Brand description, multi-column link groups, social/support buttons, copyright, legal links
- **Surface**: Background `{colors.surface}`; `40px 30px` padding
- **Typography**: Column headers use `{typography.label}` in `{colors.ink}` with `1.1px` letter-spacing; links use `{typography.body}` in `{colors.ink-muted}`; brand description uses smaller body size in `{colors.ink-dim}`
- **Composition**: Five-column grid on desktop: brand column wide, four link columns narrow; buttons and legal row at bottom
- **Variants**: "Join Discord" and "Client Support" buttons use `{colors.border}` outline style with icon prefixes

### Button

- **Primary**: Background `{colors.action}`, color `{colors.ink}`, no border, height `2.625rem`, padding `0 1rem`
- **Secondary/Outline**: Background transparent, color `{colors.ink}`, border `1px solid {colors.border}`, height `2.625rem`, padding `0 1.25rem`
- **Ghost**: Background transparent, color `{colors.ink-secondary}`, no border, padding `0 1rem`

## Responsive behavior

The desktop layout assumes a minimum viewport width that accommodates the `120px` horizontal margins and multi-column grids. At narrower viewports, the following adaptations should occur:

- Horizontal margins reduce from `120px` to `32px` and eventually `24px` to preserve content proportion
- The hero carousel tab strip transitions to horizontal scroll or collapses to dots
- Model grids reflow from five columns to three, then two, then single column
- Footer columns stack vertically, with brand description full-width above link groups
- Header navigation collapses to a menu trigger, with Playground dropdown becoming a sheet or modal

The search bar should remain full-width within its container at all breakpoints, with the action button maintaining fixed dimensions. Card aspect ratios and internal spacing should persist across breakpoints to maintain visual consistency.

## Practical implementation guidance

### Preserve
- The absolute zero border-radius on all components—this is a defining characteristic
- The dithered, limited-palette photographic treatment in hero and card imagery
- The strict typographic hierarchy: Stack Sans Notch only at display scale, Inter for everything functional
- The generous `120px` desktop margins that create premium breathing room
- The restrained blue accent, deployed only for primary actions

### Avoid
- Introducing rounded corners on any component; this would break the technical aesthetic
- Using Stack Sans Notch at small sizes or for body text; it is strictly display-purpose
- Adding background colors behind hero text; the gradient overlay is the established pattern
- Creating light mode variants without careful consideration of the image treatment implications
- Overusing the blue accent; it should remain a high-value signal

### Recommended Build Order
1. Establish the dark color foundation with canvas, surface, and ink tokens
2. Implement Inter at base size with proper weights for navigation and body
3. Build the header with transparent background and flex navigation
4. Create the hero carousel with gradient overlay system and tab navigation
5. Develop the model card component with thumbnail, labels, and tags
6. Implement the grid system with consistent gaps and responsive reflow
7. Add the search bar with input and action button pattern
8. Build the footer with multi-column layout and outline buttons
9. Integrate Stack Sans Notch for hero display treatment last, as it requires careful sizing

### Accessibility
- Ensure the gradient overlay provides sufficient contrast for hero text; test with actual imagery
- The blue action color against black meets WCAG AA for large text but verify for small button labels
- Add focus indicators that respect the zero-radius aesthetic, perhaps using outline offsets
- Consider reduced-motion preferences for the carousel transition
- Ensure tab navigation in the hero is keyboard accessible with visible active states
- Provide alt text for model card thumbnails that describes the visual content meaningfully

## Scope note

This guide covers the MuleRouter homepage including the hero carousel, model directory grids, search interface, and footer. Interior pages, mobile navigation patterns, loading states, and form validation are not represented in the supplied material. The dark theme is treated as the sole mode; no light variant is documented.
