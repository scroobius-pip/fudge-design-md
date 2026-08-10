# How subframe.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/subframe.com-design)

Last updated: 2026-08-10

## Captured pages

[![Component library overview page showing a drag-and-drop editor interface with a dark hero banner and light signup modal overlay containing social authentication options.](https://pin.fontofweb.com/7662?format=jpg)](https://design.withfudge.com/share/pin-7662)

[Component library overview page showing a drag-and-drop editor interface with a dark hero banner and light signup modal overlay containing social authentication options.](https://design.withfudge.com/share/pin-7662)

[![Templates gallery page with a large search bar, category filter pills, and a grid of preview cards showing dashboard and pricing page layouts.](https://pin.fontofweb.com/7602?format=jpg)](https://design.withfudge.com/share/pin-7602)

[Templates gallery page with a large search bar, category filter pills, and a grid of preview cards showing dashboard and pricing page layouts.](https://design.withfudge.com/share/pin-7602)

[![Feature comparison table with bold heading, three product columns, and checkmark indicators against a clean white background.](https://pin.fontofweb.com/6467?format=jpg)](https://design.withfudge.com/share/pin-6467)

[Feature comparison table with bold heading, three product columns, and checkmark indicators against a clean white background.](https://design.withfudge.com/share/pin-6467)

[![Testimonials section with a large bold heading and six customer quote cards arranged in a masonry-like grid with avatar photos and attribution.](https://pin.fontofweb.com/6466?format=jpg)](https://design.withfudge.com/share/pin-6466)

[Testimonials section with a large bold heading and six customer quote cards arranged in a masonry-like grid with avatar photos and attribution.](https://design.withfudge.com/share/pin-6466)

## Overview

Subframe's design system presents a disciplined, engineering-forward visual language built for clarity and speed. The interface alternates between two distinct modes: a light editorial mode for marketing and documentation surfaces, and a dark product mode for the builder interface and code-centric tools. Both modes share the same structural DNA—generous whitespace, precise typography, and a restrained palette that keeps attention on content rather than decoration.

The system's personality emerges through typographic contrast rather than color complexity. Large, tightly-tracked headings in Inter Bold anchor every section, while a serif display face (Instrument Serif) introduces editorial warmth on the homepage hero. The component architecture favors rounded rectangles with subtle borders over heavy shadows, creating a flat, contemporary feel that reads as both professional and approachable. Navigation is minimal and persistent, with small label-sized links and a prominent dark "Start for free" call-to-action.

## Colors

The palette operates in two modes with shared accent colors. Light mode dominates marketing pages; dark mode appears in the product builder and select immersive sections.

| token | hex | use |
|---|---|---|
| ink | #171717 | Primary headings, body text, button backgrounds |
| muted-ink | #737373 | Secondary text, descriptions, disabled states |
| canvas | #FAFAFA | Page background in light mode |
| surface | #FFFFFF | Cards, modals, elevated panels |
| surface-elevated | #F5F5F5 | Input backgrounds, subtle hover states, filter pills |
| border | #E5E5E5 | Card borders, dividers, table rules |
| border-strong | #D4D4D4 | Focused inputs, active filter states |
| action | #242424 | Primary button fill, dark hero backgrounds |
| action-inverse | #FFFFFF | Text on dark buttons, dark hero headings |
| dark-canvas | #0A0A0A | Deep product backgrounds |
| dark-surface | #171717 | Builder panels, code editor chrome |
| dark-ink | #F5F5F5 | Primary text on dark surfaces |
| dark-muted | #A3A3A3 | Secondary text on dark surfaces |
| dark-border | #242424 | Subtle separators in dark mode |
| accent-blue | #2563EB | Links, active states, chart data series |
| accent-green | #4ADE80 | Success indicators, positive metrics |
| accent-red | #EF4444 | Errors, destructive actions, alerts |

Light mode creates an airy, editorial atmosphere where #FAFAFA canvas and #FFFFFF surfaces layer cleanly with #E5E5E5 borders. Dark mode inverts this hierarchy with #0A0A0A canvas and #171717 surfaces, using #242424 for borders that remain visible without harsh contrast. Accent colors appear sparingly—blue for interactive emphasis, green and red for status. The system avoids gradients in favor of flat fills and subtle border differentiation.

## Typography

Four font families define the typographic system: Inter for all interface text, Instrument Serif for display accents, Fragment Mono for code and technical labels, and System-Uimonospace for small system annotations in code-heavy contexts.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 4rem | 700 | 1 | -0.05em | Page titles, major section headings |
| section-display | Inter | 3rem | 700 | 1 | -0.05em | Section headings, comparison tables |
| serif-display | Instrument Serif | 5rem | 400 | 1 | -0.025em | Homepage hero, editorial accents |
| body-large | Inter | 1.5rem | 500 | 1.17 | -0.025em | Lead paragraphs, testimonial quotes |
| body | Inter | 1.125rem | 500 | 1.33 | -0.025em | Descriptions, navigation, links |
| body-small | Inter | 0.875rem | 500 | 1.43 | -0.01em | Card metadata, captions |
| label | Inter | 0.75rem | 500 | 1.33 | -0.005em | Buttons, tags, table headers, nav |
| mono-label | Fragment Mono | 1.125rem | 400 | 1.33 | -0.025em | Code snippets, technical labels |
| system-mono | System-Uimonospace | 0.625rem | 500 | 1.7 | -0.005em | Small system annotations, status text |

Inter serves as the workhorse at weights 400, 500, 600, and 700. The 500 weight is the default for body text, creating a slightly heavier, more intentional read than typical 400. Headings use 700 with aggressive negative tracking (-0.05em) that tightens large sizes without feeling compressed. Instrument Serif appears only at display sizes (80px–128px equivalent) for homepage hero treatments, adding editorial contrast to the otherwise geometric system. Fragment Mono handles code and technical annotations at a single size. System-Uimonospace appears at 10px in the builder interface for small status indicators and system-level labels, rendered at 500 weight with tight leading.

Verify licensing for these families before production use. Instrument Serif is designed by Rodrigo Fuenzalida and distributed by Frag Type. Fragment Mono is by Wei Huang. Inter and System-Uimonospace credits are not listed in the source materials.

## Layout

The layout system relies on centered content containers with generous vertical rhythm and consistent horizontal padding. Pages feel spacious and uncluttered, with content rarely touching viewport edges.

**Container behavior.** Maximum content width centers around 1200px for marketing pages, with the builder interface expanding to fill available space. Horizontal padding scales from 1rem on narrow viewports to 3rem on desktop. The templates gallery (Image 2) shows this clearly: a wide search bar and filter row sit above a three-column card grid, all contained within comfortable margins.

**Section spacing.** Vertical rhythm uses 6rem between major sections and 8rem for hero-to-content transitions. Internal section padding typically runs 3rem to 4rem. The comparison table (Image 3) demonstrates compact vertical density within a section, while the testimonials grid (Image 4) uses looser spacing to let quote cards breathe.

**Grid patterns.** Marketing pages favor single-column centered layouts for text-heavy sections, switching to multi-column grids for cards and features. The builder interface uses a more complex spatial layout with sidebar navigation, central canvas, and right-side properties panel—though this remains outside the scope of visible marketing surfaces.

**Navigation.** A persistent top bar spans the full viewport width with minimal height (~48px). Links are label-sized (12px) with generous horizontal spacing. The "Start for free" button uses a dark fill with rounded corners, creating clear hierarchy against ghost navigation links.

## Visual language

**Shape language.** Rounded corners define the system's friendliness. Large panels and modals use 24px radius (1.5rem). Cards and smaller containers use 12px (0.75rem). Buttons and inputs use 16px (1rem) and 8px (0.5rem) respectively. Filter pills and category tags use full 9999px radius for organic, clickable shapes. The builder interface preview in Image 1 shows these radii layered: a large rounded modal over a rounded card container.

**Surface treatment.** Flat fills dominate. Cards use white or near-white backgrounds with single-pixel #E5E5E5 borders rather than shadows. When elevation is needed, a subtle shadow appears: `rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(0, 0, 0, 0.04) 0px 1px 4px -1px` for cards and dropdowns. Dark mode surfaces rely on value shifts between #0A0A0A and #171717 without additional shadow.

**Imagery and icons.** UI screenshots and component previews replace photography. Icons are small, monochrome, and functional—checkmarks in comparison tables, search magnifiers in inputs, social provider logos in authentication flows. Avatar images in testimonials are small circles (~40px) with consistent border radius.

**Motion and interactivity.** Static images suggest hover states through cursor indicators and subtle border color shifts. Buttons in dark mode show an inset shadow treatment suggesting depth: layered white and black inset shadows creating a pressed or tactile appearance. The system likely employs smooth transitions for state changes, though this cannot be confirmed from still images.

## Components

**Buttons**

- Anatomy: Text label with optional leading icon, contained in a rounded rectangle.
- Surface and text color: Primary uses #242424 fill with #FFFFFF text. Secondary uses #FFFFFF fill with #171717 text and #D4D4D4 border. Ghost uses transparent fill with #171717 text.
- Typography: label token (12px Inter 500).
- Shape: 16px border radius, 40px height.
- Spacing: 0 20px horizontal padding for primary; 0 16px for compact variants.
- Composition: Centered text, optional icon left-aligned with 8px gap.
- Variants: Primary (dark fill), secondary (bordered), ghost (text only), icon-only circular.

**Cards**

- Anatomy: Rounded container with optional header, media area, and footer.
- Surface: #FFFFFF fill with #E5E5E5 1px border in light mode; #171717 fill with #242424 border in dark mode.
- Typography: Varies by content—section-display for card titles, body for descriptions, label for metadata.
- Shape: 12px or 24px border radius depending on hierarchy.
- Spacing: 24px to 32px internal padding.
- Composition: Vertical stack with consistent 16px gaps between elements.
- Variants: Template preview cards (Image 2) show screenshot thumbnails with title below; testimonial cards (Image 4) are text-only with avatar and attribution.

**Inputs and search**

- Anatomy: Rounded rectangle with placeholder text, optional leading icon, and clear button.
- Surface: #F5F5F5 fill with #E5E5E5 border, transitioning to #D4D4D4 on focus.
- Typography: label token for placeholder and value.
- Shape: 8px border radius, 40px height.
- Spacing: 0 16px horizontal padding, 12px left padding when icon present.
- Composition: Full-width within container, icon positioned 12px from left edge.

**Filter pills and tags**

- Anatomy: Rounded pill with text label, optional close icon.
- Surface: #F5F5F5 fill in default state; #242424 fill with #FFFFFF text when active/selected.
- Typography: label token.
- Shape: 9999px border radius.
- Spacing: 8px 16px padding.
- Composition: Horizontal row with 8px gap between pills.

**Comparison table**

- Anatomy: Header row with product logos, feature rows with checkmark indicators.
- Surface: Transparent; no visible borders between rows.
- Typography: section-display for heading, body for feature names, label for column headers.
- Shape: No border radius; full-width layout.
- Spacing: 24px vertical padding per row, generous horizontal gutters.
- Composition: Three-column grid with left-aligned feature names and centered indicators.

**Modal / overlay**

- Anatomy: Centered panel with backdrop, containing form elements and social authentication options.
- Surface: #FFFFFF fill with 24px border radius; backdrop uses dark scrim.
- Typography: section-display for headline, body for description, label for buttons.
- Shape: 24px border radius, max-width approximately 480px.
- Spacing: 32px to 48px internal padding.
- Composition: Vertical stack with 16px gaps; social buttons use full-width layout with provider icons.

## Responsive behavior

The system appears designed with desktop as the primary viewport. Marketing pages use centered containers that maintain readability across widths. The templates grid (Image 2) shows a three-column layout that would likely collapse to two columns on tablet and single column on mobile. Navigation links would compress into a mobile menu, though this pattern is not visible in supplied images.

Typography scales down proportionally: hero-display likely reduces to 2.5rem on mobile, section-display to 2rem. Line heights remain tight (1.0–1.17) at all sizes to maintain the system's compact, intentional feel. Horizontal padding reduces from 48px to 16px on narrow viewports.

Touch targets should maintain minimum 44px height for buttons and inputs when adapting to mobile. The 40px desktop button height provides close adherence to this standard.

## Practical implementation guidance

### Preserve
- The tight negative tracking on large headings; this is essential to the system's refined, editorial character.
- The 12px label size for buttons and navigation; it creates hierarchy against larger body text.
- The two-mode palette structure; light and dark modes should share accent colors and spacing values.
- The flat card treatment with single-pixel borders; avoid adding heavy shadows that would contradict the system's restraint.
- The generous section spacing (6rem–8rem); compressing this would make pages feel crowded.

### Avoid
- Adding gradients to cards or buttons; the system uses flat fills exclusively.
- Using Instrument Serif at small sizes; it is reserved for large display treatments only.
- Mixing border radii arbitrarily; respect the hierarchy (24px panels, 12px cards, 16px buttons, 8px inputs).
- Introducing additional accent colors beyond the blue/green/red trio; the palette is intentionally narrow.
- Using 400 weight Inter for body text; 500 is the established default.

### Recommended build order
1. Establish the color tokens in both light and dark modes, starting with ink, canvas, surface, and border values.
2. Implement the Inter type scale with exact sizes and tracking values; verify rendering at 12px label size.
3. Build the button component with primary, secondary, and ghost variants; test border radius and padding precision.
4. Create the card component with proper border treatment and internal spacing.
5. Implement the section layout patterns with correct max-width containers and vertical rhythm.
6. Add the filter pill and input components for interactive surfaces.
7. Integrate Instrument Serif for homepage hero display only.

### Accessibility
- Ensure #171717 text on #FAFAFA canvas meets WCAG AAA contrast (it does, with ratio ~16:1).
- Verify #737373 muted-ink on #FFFFFF surface meets WCAG AA for large text (ratio ~4.6:1); use only for secondary content.
- Dark mode #F5F5F5 text on #0A0A0A background exceeds AAA requirements.
- Button text should remain 12px minimum; consider 14px for touch interfaces.
- Focus indicators should use #2563EB accent with 2px outline offset, visible in both light and dark modes.
- Modal overlays should trap focus and announce via ARIA when opened.

## Scope note

This guide covers the marketing and documentation surfaces of subframe.com, including the homepage, design systems page, templates gallery, and component library overview. The in-product builder interface, code editor, and interactive component playground are not represented. Motion, animation, and responsive breakpoint behavior are inferred from static images and should be verified in implementation. Measurements are derived from the supplied design facts and rounded to practical token values.
