# How vimeo.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/vimeo.com-design)

Last updated: 2026-08-10

## Captured pages

[![Join Vimeo survey page with pricing selection cards, yearly/monthly toggle, and Continue button on white canvas with video thumbnail sidebar](https://pin.fontofweb.com/6442?format=jpg)](https://design.withfudge.com/share/pin-6442)

[Join Vimeo survey page with pricing selection cards, yearly/monthly toggle, and Continue button on white canvas with video thumbnail sidebar](https://design.withfudge.com/share/pin-6442)

[![Vimeo join page with split layout showing email signup form and colorful video grid mosaic on right side](https://pin.fontofweb.com/6441?format=jpg)](https://design.withfudge.com/share/pin-6441)

[Vimeo join page with split layout showing email signup form and colorful video grid mosaic on right side](https://design.withfudge.com/share/pin-6441)

[![Vimeo homepage footer with product navigation columns, cyan Join button, and Summer 2025 Release promotional cards](https://pin.fontofweb.com/6440?format=jpg)](https://design.withfudge.com/share/pin-6440)

[Vimeo homepage footer with product navigation columns, cyan Join button, and Summer 2025 Release promotional cards](https://design.withfudge.com/share/pin-6440)

[![Dark community section with Staff Pick video thumbnails in staggered masonry grid and Discover Staff Picks button](https://pin.fontofweb.com/6439?format=jpg)](https://design.withfudge.com/share/pin-6439)

[Dark community section with Staff Pick video thumbnails in staggered masonry grid and Discover Staff Picks button](https://design.withfudge.com/share/pin-6439)

## Overview

Vimeo's design system presents a refined, content-forward visual language built for a professional video platform. The interface alternates between crisp light-mode surfaces and immersive dark-mode environments, using a distinctive cyan accent to guide user action. Custom typefaces by Erkin Karamemet—distributed by Dinamo—provide geometric precision with subtle humanist warmth, creating a typographic identity that feels both technical and approachable. The system prioritizes video content through generous whitespace, restrained UI chrome, and high-contrast section breaks. Navigation remains understated, allowing imagery and motion to dominate the visual hierarchy. Component design favors rounded rectangles with consistent corner radii, creating a soft but structured feel that scales from compact mobile interfaces to expansive desktop layouts.

## Colors

The color architecture supports two primary modes: a light canvas for functional and marketing surfaces, and a deep dark mode for immersive content experiences.

| token | hex | use |
|---|---|---|
| canvas | #FAFCFD | Primary light background for forms, marketing pages, and footer areas |
| canvas-dark | #0A0E12 | Immersive dark sections, hero backgrounds, video showcase areas |
| ink | #141A20 | Primary text on light surfaces, button fills |
| ink-secondary | #3D4751 | Secondary headings, active navigation states |
| ink-muted | #68727C | Supporting text, footer links, disabled states |
| surface | #F1F5F9 | Subtle elevated cards, input backgrounds on dark |
| surface-elevated | #FFFFFF | Pure white cards, modal backgrounds, pricing panels |
| action | #00AACF | Primary buttons, links, interactive highlights, cyan accent |
| action-hover | #03C1EB | Hover states for action elements |
| action-glow | #17D5FF | Focus rings, glow effects, maximum emphasis moments |
| border | #DFE4EA | Dividers, input borders, card outlines on light |
| border-subtle | #A9B2BC | Secondary borders, inactive states |
| text-inverse | #FFFFFF | Text on dark or filled button backgrounds |
| text-on-dark | #F9FAFB | Primary text on dark surfaces |
| text-on-dark-muted | #68727C | Secondary text on dark backgrounds |

The light mode dominates functional flows—signup, pricing, and account management—where readability and task completion are paramount. Dark mode appears in content-rich sections like the Staff Picks showcase, where the interface recedes to let video thumbnails command attention. The cyan action color provides consistent wayfinding across both modes, never competing with the colorful video content that defines the platform.

## Typography

Vimeo employs custom typefaces from Dinamo designed by Erkin Karamemet: By Erkin Karamemet for all interface and display text, Abc Repro Mono for technical labels and metadata, and Abc Repro Basic alongside Abc Repro Basic-Screen for additional interface contexts. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | By Erkin Karamemet | 4.5rem | 500 | 1 | -0.05em | Homepage hero headlines, major campaign titles |
| section-display | By Erkin Karamemet | 2.5rem | 500 | 1 | -0.04em | Section headings, feature callouts |
| subhead | By Erkin Karamemet | 1.25rem | 400 | 1.4 | -0.03em | Lead paragraphs, descriptive text under headings |
| body | By Erkin Karamemet | 1rem | 400 | 1.5 | 0em | Paragraphs, descriptions, general content |
| body-medium | By Erkin Karamemet | 1rem | 500 | 1.4 | -0.03em | Emphasized body, navigation labels, button text |
| label | By Erkin Karamemet | 0.875rem | 500 | 1.25 | -0.03em | Small labels, badges, metadata, pricing details |
| navigation | By Erkin Karamemet | 1rem | 400 | 1.5 | 0em | Header links, footer category headings |
| mono-label | Abc Repro Mono | 1rem | 400 | 1 | -0.03em | Technical tags, version labels, monospace contexts |

The type system relies on tight negative letter-spacing at display sizes, creating compact, impactful headlines that feel contemporary and confident. Weights are restrained: Regular (400) for body and navigation, Medium (500) for emphasis and display. The geometric construction of By Erkin Karamemet pairs naturally with the rounded interface elements, while its slightly condensed proportions allow efficient information density without crowding.

## Layout

The layout system uses a centered container model with generous horizontal margins that scale with viewport width. Maximum content width is approximately 77rem, creating comfortable line lengths for reading while preserving whitespace on large screens.

Section spacing follows a clear rhythm: compact sections use 3.5rem vertical padding, standard sections use 5rem, and hero or feature sections may extend to 7rem or more. Horizontal padding is consistently 2rem for content areas, expanding to accommodate the full container width.

The grid structure is flexible, adapting from single-column mobile layouts to multi-column arrangements. The footer demonstrates a six-column link grid on desktop, collapsing to fewer columns as space constrains. Content sections frequently employ asymmetric layouts—text on one side, imagery or video on the other—with the visual weight balanced through scale rather than equal division.

Navigation sits in a fixed or sticky header with minimal height, using horizontal lists with 3.25rem left margin offsets for grouped items. Dropdown menus appear as needed for nested categories like Features, Use Cases, and Enterprise.

Card-based layouts use consistent internal padding of 1.5rem to 2rem, with 1rem corner radii creating approachable containers that feel distinct from the background without harsh shadows.

## Visual language

The visual identity centers on video content as the primary expressive medium. Photography and video thumbnails receive maximum visual priority, often bleeding to edges or occupying half the viewport. UI elements remain deliberately restrained—thin borders, subtle backgrounds, and minimal ornamentation—so that colorful video content dominates.

Rounded corners appear throughout at multiple scales: 1rem for cards and panels, 0.75rem for primary buttons, 0.5rem for inputs, and full pill shapes for tags or compact actions. This creates a family of related shapes that feel cohesive without monotony.

The cyan accent (#00AACF) functions as the singular brand color in the interface, appearing on primary buttons, active states, and key links. Its high saturation against both light and dark backgrounds ensures visibility without the visual weight of a second dark color. On dark surfaces, the accent gains a subtle glow quality through proximity to black.

Imagery treatment varies by context: marketing sections use bright, saturated photography with natural color; video thumbnails retain their original grading; Staff Picks display in a staggered masonry with rounded corners and minimal overlay except for the circular Staff Pick badge.

## Components

### Primary Button

- **Anatomy**: Text label with optional arrow icon, contained in a rounded rectangle
- **Surface**: Filled background using action (#00AACF) on light surfaces, or white fill on dark sections
- **Typography**: body-medium token, weight 500
- **Shape**: 0.75rem corner radius, full pill variant available with 9999px radius
- **Spacing**: 1rem vertical padding, 1.5rem horizontal padding; compact variant uses 0.75rem vertical
- **Composition**: Centered text, icon positioned right with small gap
- **Variants**: Default (cyan fill, white text), secondary (white/transparent fill, dark text with border), dark mode (white fill, dark text)

### Secondary Button / Text Button

- **Anatomy**: Text label with underline or arrow icon, no background fill
- **Surface**: Transparent, inherits parent background
- **Typography**: body or label token, weight 400 or 500
- **Shape**: No border radius needed for text variant; bordered variant uses 0.75rem radius
- **Spacing**: 0.5rem to 1rem padding depending on context
- **Composition**: Inline with text or grouped with other actions

### Card / Panel

- **Anatomy**: Container with optional header, body content, and footer actions
- **Surface**: surface-elevated (#FFFFFF) on light canvas, or surface (#F1F5F9) for subtle elevation
- **Shape**: 1rem corner radius, 1px border using border token when outlined
- **Spacing**: 1.5rem to 2rem internal padding
- **Composition**: Full-width on mobile, constrained to grid columns on desktop

### Pricing Selection Card

- **Anatomy**: Radio-style selection with title, description, price, and selection indicator
- **Surface**: White fill with border, selected state uses action border and subtle action tint
- **Typography**: label for metadata, body-medium for title, body for description
- **Shape**: 1rem corner radius, 1px border default, 1px action border when selected
- **Spacing**: 1rem internal padding
- **Composition**: Stacked vertically with consistent gap, selection indicator as filled circle on left

### Input Field

- **Anatomy**: Text input with placeholder, optional label above
- **Surface**: Transparent or white fill, 1px border using border token
- **Typography**: body token for input text, label token for field label
- **Shape**: 0.5rem corner radius
- **Spacing**: 0.75rem vertical padding, 1rem horizontal padding
- **Composition**: Full-width within form container, label positioned above with compact gap

### Navigation Header

- **Anatomy**: Logo left, horizontal link list center-right, utility actions far right
- **Surface**: Transparent or canvas-matching background, subtle blur on scroll
- **Typography**: navigation token for links, label token for active indicators
- **Spacing**: 1rem horizontal padding, 2rem vertical padding in header area
- **Composition**: Flex row with space-between, dropdown triggers indicated by small chevron

### Footer

- **Anatomy**: Multi-column link grid, social icons, legal text, language selector
- **Surface**: canvas (#FAFCFD) or canvas-dark (#0A0E12) depending on page mode
- **Typography**: navigation token for category headings, body token for links
- **Spacing**: 3rem top padding, 2rem bottom padding, generous column gutters
- **Composition**: Six-column link grid on desktop, collapsing to fewer columns; social icons and legal row at bottom

### Staff Pick Thumbnail

- **Anatomy**: Video thumbnail with circular Staff Pick badge overlay
- **Surface**: Image fill, no border or shadow
- **Shape**: 1rem corner radius on thumbnail, circular badge positioned top-left
- **Composition**: Staggered masonry grid with varying heights, consistent horizontal rhythm

## Responsive behavior

The system adapts through fluid scaling rather than abrupt breakpoints. Container margins increase from 1rem on narrow viewports to 2rem on desktop. Typography scales down proportionally: hero-display reduces from 4.5rem to approximately 2.5rem on mobile, section-display from 2.5rem to 1.75rem.

Navigation collapses to a hamburger menu on smaller screens, with the full link list accessible through a slide-out panel. Multi-column grids like the footer link grid reduce from six columns to three, then two, then single column as viewport narrows.

Pricing cards and form panels stack vertically on mobile, losing their side-by-side arrangement. The split-layout join page transitions from horizontal division to vertical stacking, with the video grid moving below the signup form.

Dark mode sections like Staff Picks maintain their immersive quality across all sizes, with thumbnail grid columns reducing from five or six to two or three on mobile.

## Practical implementation guidance

### Preserve
- The distinctive cyan accent as the sole brand color in interactive elements
- Tight negative letter-spacing on display type, especially at hero sizes
- Generous whitespace around video content and imagery
- Consistent rounded corner language across all components
- High contrast between text and background in both light and dark modes
- The custom typeface pairing: By Erkin Karamemet for UI, Abc Repro Mono for technical labels

### Avoid
- Introducing additional accent colors that compete with the cyan action
- Sharp 90-degree corners on interactive elements
- Dense text blocks without adequate line-height or paragraph spacing
- Shadows or dimensional effects that conflict with the flat, clean aesthetic
- Generic system fonts that break the geometric typographic identity

### Recommended Build Order
1. Establish the type scale with licensed font files, ensuring proper weights load
2. Implement the color system with CSS custom properties supporting light/dark modes
3. Build the spacing scale and container system
4. Create the button component family with all variants
5. Implement form elements (input, radio, checkbox) with consistent styling
6. Build navigation header with responsive collapse behavior
7. Construct card and panel components for content containers
8. Implement footer with multi-column grid
9. Add Staff Pick thumbnail grid with masonry layout

### Accessibility
- Ensure cyan action elements meet WCAG contrast requirements against both light and dark backgrounds; the #00AACF against white passes for large text but may need darkening for small text
- Provide visible focus indicators using action-glow (#17D5FF) with sufficient offset
- Maintain keyboard navigation order in the staggered thumbnail grid
- Use semantic heading hierarchy: h1 for hero, h2 for sections, h3 for subsections
- Ensure form labels are programmatically associated with inputs
- Support prefers-color-scheme for automatic dark mode adoption

## Scope note

This guide covers the marketing, signup, and content showcase surfaces visible on the homepage and join flows. Video player internals, dashboard interfaces, account settings, and mobile-native applications are not represented. Motion design, loading states, and hover micro-interactions are not documented from the still images provided. The type families Abc Repro Basic and Abc Repro Basic-Screen appear in the source but are not assigned to specific visible tokens in this guide.
