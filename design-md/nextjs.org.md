# How nextjs.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/nextjs.org-design)

Last updated: 2026-08-10

## Captured pages

[![Footer bar with monospace navigation links and social icons on pure black background](https://pin.fontofweb.com/2218?format=jpg)](https://design.withfudge.com/share/pin-2218)

[Footer bar with monospace navigation links and social icons on pure black background](https://design.withfudge.com/share/pin-2218)

[![Centered login form with large white heading, blue action button, and email input field](https://pin.fontofweb.com/2217?format=jpg)](https://design.withfudge.com/share/pin-2217)

[Centered login form with large white heading, blue action button, and email input field](https://design.withfudge.com/share/pin-2217)

[![Vercel logo centered above footer navigation with copyright and social icons](https://pin.fontofweb.com/2216?format=jpg)](https://design.withfudge.com/share/pin-2216)

[Vercel logo centered above footer navigation with copyright and social icons](https://design.withfudge.com/share/pin-2216)

[![Sponsors section with tiered partner grid showing Sanity, AWS, Clerk, and smaller logos](https://pin.fontofweb.com/2215?format=jpg)](https://design.withfudge.com/share/pin-2215)

[Sponsors section with tiered partner grid showing Sanity, AWS, Clerk, and smaller logos](https://design.withfudge.com/share/pin-2215)

## Overview

The Next.js Conf 2025 design system presents a stark, cinematic dark environment built on absolute black with disciplined typographic contrast. The visual language rejects decorative gradients and ornamental borders in favor of raw material honesty: pure black canvas, white type, and a single electric blue for interactive momentum. The system pairs two font families from the same design lineage—Geist for display moments and Geist Mono for functional, navigational, and label text—creating tension between humanist clarity and mechanical precision. This is not a generic dark theme but a purposefully reduced palette that lets content hierarchy speak through scale, spacing, and typeface choice alone. The conference context demands immediate comprehension: large display headings anchor pages, monospace labels organize secondary information, and the blue action color appears only when the interface requires forward motion. Every element feels engineered rather than decorated, with zero border radius throughout and spacing that breathes through generous negative space rather than decorative containers.

## Colors

The color system is intentionally minimal, operating on a principle of maximum contrast with a single functional accent. The pure black canvas creates immersion and allows white typography to achieve its full luminous quality without competition.

| token | value | use |
|---|---|---|
| canvas | #000000 | Page background, base layer for all surfaces |
| ink | #ffffff | Primary text, headings, interactive labels, logos |
| muted-ink | #999999 | Secondary labels, tier badges, disabled or supporting text |
| action | #0055ff | Primary buttons, submit actions, forward navigation |
| surface-elevated | #111111 | Slightly lifted containers, sponsor tier badge backgrounds |
| border-subtle | #333333 | Input field outlines, grid dividers, hairline separators |

The relationship between colors is hierarchical rather than harmonious. Black and white establish an absolute figure-ground relationship with no intermediate gray values used for text. The muted-ink token serves only for structural labels and category markers, never for body reading. The action blue is saturated and luminous against black, reserved exclusively for moments of commitment—form submission, primary conversion. No gradients appear in the interface; photographic or illustrative content may contain its own color, but the UI itself remains achromatic except for the single blue intervention. Sponsor logos appear in white or their native brand colors against the black canvas, treated as content rather than interface.

## Typography

The typographic system divides labor between two related families: Geist handles display and human-readable moments, while Geist Mono manages functional, navigational, and label text. This creates a consistent voice with clear role differentiation.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Geist | 3rem | 400 | 1.1 | -0.02em | Page titles, login headings, major announcements |
| section-display | Geist | 2.5rem | 400 | 1.15 | -0.01em | Section headers, sponsor page titles |
| body | Geist Mono | 1rem | 400 | 1.5 | 0em | Descriptive text, form instructions, supporting copy |
| label | Geist Mono | 0.75rem | 400 | 1.2 | 0.05em | Input placeholders, button text, tier badges, category labels |
| navigation | Geist Mono | 1rem | 400 | 1 | 0.02em | Footer links, header navigation, utility links |

Geist and Geist Mono were designed by Basementstudio (Andrés Briganti, Mateo Zaragoza) and are available through Vercel. Verify licensing for these families before production use.

The display sizes use negative tracking to achieve tight, confident headlines that feel contemporary and engineered. The monospace tokens employ positive tracking for labels to compensate for the fixed-width rhythm and improve scannability at small sizes. All functional text is uppercase, creating a mechanical, systematic voice that contrasts with the sentence-case display headings. The 0.25rem grid step means every size lands on a 4px increment at 16px root, maintaining crisp rendering across densities.

## Layout

The layout system is center-weighted and spacious, with content rarely touching viewport edges. The fundamental unit is 0.25rem (4px at standard root), and major sections are separated by 6rem of vertical space.

Content maxes out at 75rem (1200px), creating comfortable reading measure without excessive line length. The login form in the center of the viewport demonstrates the system's confidence in negative space—no sidebar, no decorative frame, just essential elements floating in black. Horizontal padding scales with viewport but maintains generous minimums.

The sponsor grid reveals a structured tier system: single-column diamond partner, two-column platinum partners, and five-column gold partners. Grid lines are hairline borders in subtle gray, creating separation without visual weight. Tier labels occupy their own row above each group, left-aligned with the grid edge.

Footer navigation distributes horizontally with ample gap, while copyright and social icons cluster right. The overall rhythm is: generous top space, centered or left-aligned content block, generous bottom space, then the persistent footer bar. No card elevations, no shadow systems, no rounded corners interrupt the flat, planar aesthetic.

## Visual language

The visual character is austere, confident, and technically precise. Every shape is rectilinear—zero border radius on inputs, buttons, and containers. This refusal of softness signals engineering culture and refuses decorative warmth. The interface reads as a tool rather than an experience, appropriate for a developer-facing conference.

Imagery and logos appear in their native form against black, with no forced containerization. The Sanity logo, AWS mark, and others sit directly on the canvas, their own shapes providing sufficient visual interest. No background panels, no hover lifts, no shadow depth.

The blue action color is the only warm gesture in the system, and even it is cool-toned and electric. It appears as a solid fill, never as outline or ghost style. When a user must act—submit credentials, confirm attendance—the blue expands to fill its container, becoming impossible to miss against the monochrome field.

Typography provides the primary visual texture. The shift from Geist's fluid, slightly geometric humanism to Geist Mono's mechanical regularity creates rhythm without decoration. Uppercase monospace labels feel like interface chrome, while sentence-case sans display feels like human voice.

## Components

### Primary action button

- **Anatomy**: Solid rectangular button containing uppercase label and optional directional icon
- **Surface and text color**: Action blue background (#0055ff) with white text
- **Typography**: Label token, uppercase, with 0.05em tracking
- **Shape**: Zero border radius, full-width in form contexts or intrinsic width in navigation
- **Spacing**: 1rem vertical padding, 2rem horizontal padding
- **Composition**: Icon appears after text with inline spacing, arrow or external-link indicator
- **Variants**: Full-width in constrained forms; inline in footer or navigation contexts

### Text input

- **Anatomy**: Single-line field with placeholder label, no visible title above
- **Surface and text color**: Transparent/black background, white text, subtle gray border (#333333)
- **Typography**: Label token for placeholder, uppercase
- **Shape**: Zero border radius, 1px border on all sides
- **Spacing**: 1rem internal padding, full-width within form container
- **Composition**: Stacked vertically with submit button below, consistent gap

### Sponsor tier grid

- **Anatomy**: Section heading, tier label badge, logo container cells arranged in responsive columns
- **Surface and text color**: Black canvas, white or native-color logos, muted gray tier labels
- **Typography**: Section-display for heading, label token for tier badge
- **Shape**: Zero radius on all cells, 1px dotted or solid grid borders in subtle gray
- **Spacing**: Generous internal padding per cell (approximately 3rem vertical), tier badge offset into grid margin
- **Composition**: Diamond tier spans full width, platinum splits 50/50, gold distributes across five equal columns
- **Variants**: Tier badge background elevates slightly (#111111) to separate from canvas

### Footer navigation

- **Anatomy**: Horizontal link row with copyright and social icon cluster
- **Surface and text color**: Black background, white text and icons
- **Typography**: Navigation token, uppercase, monospace
- **Shape**: Full-width bar with top hairline border
- **Spacing**: Links separated by 2rem gap, copyright and icons right-aligned with matching gap
- **Composition**: Left cluster for page links, right cluster for legal and social; GitHub, X, and Discord icons in monochrome

## Responsive behavior

The system should maintain its center-weighted composition across viewport widths. The login form remains centered with consistent internal spacing rather than stretching to fill. Sponsor grids should collapse progressively: gold tier from five columns to three to two, platinum from two to stacked, while diamond remains full-width. Footer navigation should wrap to two lines on narrow viewports with links left-aligned and copyright below.

Touch targets should maintain minimum 44px height despite the compact monospace labels. The action button should remain full-width on mobile forms for thumb reachability. No breakpoint-specific color changes are indicated; the dark theme persists across all contexts.

## Practical implementation guidance

### Preserve
- The absolute black canvas as foundation; do not lighten to charcoal or near-black
- Zero border radius on all interactive elements; the rectilinear quality is essential
- The single blue action color; do not introduce secondary accent colors
- Monospace uppercase for all functional and navigational text
- Generous negative space around centered content blocks

### Avoid
- Gradient backgrounds or gradient buttons
- Card containers with elevation shadows
- Rounded pill shapes or soft corners
- Multiple accent colors competing with the blue action
- Body text in sans-serif; keep descriptive copy in monospace for consistency

### Recommended build order
1. Establish black canvas and white text defaults
2. Implement Geist and Geist Mono with complete type scale
3. Build primary action button with exact blue and zero radius
4. Create text input with matching rectilinear treatment
5. Construct sponsor grid with tier-responsive columns
6. Add footer navigation with social icon cluster
7. Verify all spacing lands on 0.25rem grid

### Accessibility
- Ensure blue action buttons meet 3:1 contrast against black for large text, or darken slightly if needed for small text compliance
- Provide visible focus states; consider white outline or inverted treatment since default browser rings may clash with the stark aesthetic
- Maintain logical tab order in centered forms; the visual center should match DOM order
- Social icons need accessible labels despite their visual recognizability

## Scope note

This guide covers the Next.js Conf 2025 event pages including login and sponsor surfaces. Marketing pages, documentation, interactive schedules, and mobile-specific layouts are not represented in the supplied material. Measurements are practical adaptation targets derived from visible composition.
