# How supabase.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/supabase.com-design)

Last updated: 2026-08-10

## Captured pages

[![Split-screen sign-in page with dark left panel containing email form and green primary button, right panel showing large testimonial quote with decorative quotation mark.](https://pin.fontofweb.com/6639?format=jpg)](https://design.withfudge.com/share/pin-6639)

[Split-screen sign-in page with dark left panel containing email form and green primary button, right panel showing large testimonial quote with decorative quotation mark.](https://design.withfudge.com/share/pin-6639)

[![Full-width footer with five-column link grid, security compliance badges, social icons, and dark near-black background with subtle top border.](https://pin.fontofweb.com/6638?format=jpg)](https://design.withfudge.com/share/pin-6638)

[Full-width footer with five-column link grid, security compliance badges, social icons, and dark near-black background with subtle top border.](https://design.withfudge.com/share/pin-6638)

[![Community section with centered heading, Discord CTA pill button, and staggered masonry grid of testimonial cards with avatars and muted text.](https://pin.fontofweb.com/6637?format=jpg)](https://design.withfudge.com/share/pin-6637)

[Community section with centered heading, Discord CTA pill button, and staggered masonry grid of testimonial cards with avatars and muted text.](https://design.withfudge.com/share/pin-6637)

[![Product feature section with tabbed interface selector, checkmark feature list, and large dashboard screenshot with rounded frame and inner shadow.](https://pin.fontofweb.com/6636?format=jpg)](https://design.withfudge.com/share/pin-6636)

[Product feature section with tabbed interface selector, checkmark feature list, and large dashboard screenshot with rounded frame and inner shadow.](https://design.withfudge.com/share/pin-6636)

## Overview

Supabase presents a developer-centric visual system built almost entirely in dark mode. The interface rests on deep near-black foundations that create a focused, technical atmosphere. A vivid emerald green serves as the singular accent color, appearing in the logo mark, primary actions, and interactive highlights. The typography relies on Circular Std in Book and Medium weights, delivering a geometric, modernist voice that feels precise and engineered. Layouts are spacious and centered, with generous horizontal margins that frame content against the dark canvas. Component surfaces layer subtly through slight lightness increases rather than heavy borders or shadows, creating depth through restrained tonal shifts. The overall impression is of a tool built for serious work—clean, confident, and visually quiet except where action is required.

## Colors

The palette is fundamentally monochromatic with a single vibrant accent. Dark surfaces dominate every context, from marketing pages to authentication flows to product dashboards.

| token | hex | use |
|---|---|---|
| canvas | #000000 | Page background, deepest layer |
| surface | #0F0F0F | Primary content areas, footer background |
| surface-elevated | #171717 | Card backgrounds, input fields, elevated panels |
| surface-highlight | #1F1F1F | Hover states, active tab backgrounds, secondary buttons |
| border-subtle | #2E2E2E | Dividers, card borders, section separators |
| border-default | #363636 | Input borders, focus rings, active borders |
| ink | #FAFAFA | Primary text, headings, active navigation |
| ink-secondary | #B4B4B4 | Body text, descriptions, secondary content |
| ink-muted | #898989 | Placeholder text, disabled states, timestamps |
| action-primary | #00C573 | Primary buttons, logo mark, success indicators |
| action-primary-hover | #3ECF8E | Button hover states, interactive highlights |
| action-primary-text | #002918 | Text on primary green backgrounds |
| accent-teal | #006239 | Darker green for subtle accents |

The color logic follows a strict hierarchy: backgrounds progress from pure black through #0F0F0F to #171717 as elevation increases. Text inverts this, with #FAFAFA reserved for primary content and stepping down through #B4B4B4 and #898989 for diminishing emphasis. The green accent (#00C573) is used sparingly and always signals action or brand identity. No gradients appear in the interface proper; a single linear gradient from #2E2E2E to transparent is used decoratively in some hero sections. Borders are consistently 1px and serve as optical separators rather than structural elements.

## Typography

The system uses Circular Std as its primary typeface, designed by Laurenz Brunner and available from Lineto. Two weights appear in the interface: Book (400) for body and display text, and Medium (500) for button labels and emphasized UI elements. The authentication page at supabase.com/dashboard/sign-in uses Custom Font, a separate family that appears in Regular weight at sizes including 16px, 30px, 14px, 12px, and 160px. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Circular Std | 4.5rem | 400 | 1.0 | normal | Large hero numerals, marquee text |
| section-display | Circular Std | 2.25rem | 400 | 1.2 | normal | Section headings, feature titles |
| body | Circular Std | 1rem | 400 | 1.5 | normal | Paragraphs, descriptions, navigation |
| body-small | Circular Std | 0.875rem | 400 | 1.428 | normal | Card text, labels, footer links |
| label | Circular Std | 0.75rem | 400 | 1.333 | normal | Captions, metadata, legal copy |
| navigation | Circular Std | 0.75rem | 400 | 1.333 | normal | Top nav, secondary actions |

Display sizes use tight line heights (1.0 to 1.2) while body text maintains comfortable readability at 1.5. Letter spacing remains normal throughout; no condensed or expanded tracking is applied. The 72px hero size appears in large statistical displays and animated marquee text. The 36px section heading anchors major content divisions. Body text at 16px with 24px line height forms the readable core. Smaller sizes at 14px and 12px handle secondary information without becoming illegible. The sign-in page uses a 30px heading with 36px line height and -0.75px letter spacing for its "Welcome back" display, and a 160px decorative quotation mark in the testimonial panel.

## Layout

The layout system centers content within generous margins. Primary sections use `padding: 96px 80px` with horizontal margins of `260px` on either side, creating a contained reading area that floats within the dark canvas. This produces an elegant, editorial feel with substantial breathing room around all content.

Sections stack vertically with consistent rhythm. The base spacing unit is `0.125rem` (2px), and all measurements derive from this. Common section padding values include `96px` vertical for major divisions, `32px` for internal card padding, and `24px` for compact groupings. Content blocks within sections typically separate with `16px` to `32px` gaps.

Grid structures appear in multiple configurations. The footer uses a five-column link grid with equal distribution. Testimonial sections employ a staggered masonry-like arrangement with cards at varying heights. Feature sections center content with tab selectors above and large media frames below.

Navigation sits at the top with `0px 80px` padding and the same `260px` side margins, maintaining visual alignment with page content. The nav contains logo, primary links, and action buttons in a horizontal flex arrangement.

## Visual language

The visual character is restrained and technical. Surfaces communicate hierarchy through subtle lightness shifts rather than shadows or borders. A card at #171717 on a #0F0F0F background creates sufficient distinction without visual noise. Borders are hairline-thin at 1px and colored #2E2E2E or #363636, serving as gentle separators rather than heavy outlines.

Imagery and media receive rounded frames at `12px` or `16px` radius, often with subtle inner borders that suggest depth. Dashboard screenshots appear with dark chrome frames, mimicking application windows. The aesthetic treats product imagery as embedded interface rather than decorative photography.

Iconography is minimal and functional. Small glyphs accompany buttons and navigation items. The logo mark is a geometric lightning bolt in emerald green, instantly recognizable and consistently placed.

Motion and interactivity are implied through state changes: buttons shift from #171717 to lighter surfaces on hover, primary green buttons brighten to #3ECF8E. Focus states use the same green as a ring or border highlight. No heavy drop shadows appear; elevation is suggested through color alone.

## Components

### Primary button

- **Anatomy**: Text label with optional leading icon, contained in a rounded rectangle
- **Surface**: Background `{colors.action-primary}`, text `{colors.action-primary-text}`
- **Typography**: `{typography.body-small}` at Medium (500) weight
- **Shape**: `border-radius: {rounded.button}`, padding `8px 16px`
- **Spacing**: Internal padding creates compact but tappable targets
- **Variants**: Secondary variant uses `{colors.surface-elevated}` background with `{colors.ink}` text and `{colors.border-subtle}` border; ghost variant uses transparent background with border

### Secondary button / Ghost button

- **Anatomy**: Text label with optional icon
- **Surface**: Background `{colors.surface-elevated}` or transparent, text `{colors.ink}`, border `{colors.border-subtle}` or `{colors.border-default}`
- **Typography**: `{typography.body-small}` or `{typography.body}`
- **Shape**: `border-radius: {rounded.button}`, `border: 1px solid`
- **Spacing**: Padding `8px 16px` standard, `4px 10px` for compact nav variants

### Card

- **Anatomy**: Container with optional header, body text, and footer metadata
- **Surface**: Background `{colors.surface-elevated}`, no border or subtle `{colors.border-subtle}` border
- **Typography**: Body text at `{typography.body-small}`, headings at `{typography.section-display}` or `{typography.body}`
- **Shape**: `border-radius: {rounded.card}`, padding `24px` or `32px`
- **Spacing**: Cards in grids use `16px` to `24px` gaps

### Input field

- **Anatomy**: Label, text input, optional icon or button
- **Surface**: Background `{colors.surface-elevated}`, border `{colors.border-default}`, text `{colors.ink}`, placeholder `{colors.ink-muted}`
- **Typography**: `{typography.body}` for input text, `{typography.body-small}` for labels
- **Shape**: `border-radius: {rounded.input}`, padding `8px 12px`
- **States**: Focus state uses `{colors.action-primary}` border or ring

### Tab selector

- **Anatomy**: Horizontal row of text buttons, one active
- **Surface**: Active tab uses `{colors.surface-elevated}` background or `{colors.action-primary}` background, inactive tabs transparent
- **Typography**: `{typography.body-small}`
- **Shape**: `border-radius: {rounded.pill}` for pill-style tabs, or `{rounded.button}` for rectangular
- **Composition**: Centered group with `8px` gaps between tabs

### Testimonial card

- **Anatomy**: Avatar image, username, platform icon, quote text
- **Surface**: Background `{colors.surface-elevated}`, subtle border `{colors.border-subtle}`
- **Typography**: Username at `{typography.body-small}` weight 500, quote at `{typography.body-small}` in `{colors.ink-secondary}`
- **Shape**: `border-radius: {rounded.card}`
- **Composition**: Avatar and name in a row, quote below with comfortable line height

### Navigation bar

- **Anatomy**: Logo, primary links, action buttons
- **Surface**: Background transparent or `{colors.surface}`, text `{colors.ink}`
- **Typography**: Links at `{typography.navigation}`, logo text at `{typography.body}` weight 500
- **Shape**: Full width, height approximately `64px`, padding `0px 80px`
- **Composition**: Logo left, links center or left-aligned, actions right

### Footer

- **Anatomy**: Logo and social icons, multi-column link grid, legal line
- **Surface**: Background `{colors.surface}`, top border `{colors.border-subtle}`
- **Typography**: Column headings at `{typography.body-small}` weight 500 in `{colors.ink}`, links at `{typography.body-small}` in `{colors.ink-secondary}`
- **Shape**: Full width, padding `96px 80px` top, `32px 80px` bottom
- **Composition**: Five equal columns for link groups, social icons in a row below logo

## Responsive behavior

The system appears optimized for desktop viewing with substantial margins and multi-column grids. At narrower viewports, the `260px` side margins should reduce progressively, likely collapsing to `24px` or `32px` on mobile. The five-column footer grid should stack to two columns then single column. Tab selectors may scroll horizontally or collapse to a dropdown. Hero display text at `72px` should scale down to `36px` or `24px` to maintain readability. Card grids should transition from multi-column masonry to single-column stacks with full-width cards.

## Practical implementation guidance

### Preserve
- The strict dark-mode palette with near-black foundations and single green accent
- Generous whitespace and centered content with substantial side margins
- Circular Std in Book weight for almost all text, reserving Medium for buttons and emphasis
- Subtle surface elevation through color shifts rather than shadows
- Consistent 6px radius for buttons and inputs, 12px for cards, 9999px for pills
- Hairline borders at 1px in #2E2E2E or #363636

### Avoid
- Light mode backgrounds or inverted color schemes that break the dark technical aesthetic
- Multiple accent colors competing with the emerald green
- Heavy drop shadows or material-style elevation
- Rounded corners larger than 16px on rectangular elements
- Body text smaller than 14px for readable content
- Generic system fonts in place of Circular Std

### Recommended build order
1. Establish the dark canvas (#000000) and surface hierarchy (#0F0F0F, #171717, #1F1F1F)
2. Implement Circular Std with Book and Medium weights at all specified sizes
3. Build the button system with primary green, secondary dark, and ghost variants
4. Create card and input components with consistent 6px and 12px radii
5. Lay out the navigation and footer with centered margins and grid structures
6. Add the tab selector and testimonial card patterns
7. Implement responsive margin reduction and grid collapsing

### Accessibility
- Ensure green (#00C573) on dark backgrounds meets WCAG AA contrast for large text; verify small text contrast ratios
- Provide visible focus indicators using the green accent as a ring or border
- Maintain placeholder text at #898989 or darker to clearly indicate inactive state
- Use `prefers-reduced-motion` for any marquee or animated text elements
- Ensure interactive targets meet minimum 44px touch area even when visual padding is smaller

## Scope note

This guide covers the marketing site and authentication interface as visible in the supplied images. Dashboard UI, mobile layouts, loading states, error handling, and interactive animations are not represented. Pricing page structures from legacy captures are excluded. The Custom Font family appears only on the sign-in page and lacks designer or vendor attribution in the available records. Measurements are exact values from the retained interface records.
