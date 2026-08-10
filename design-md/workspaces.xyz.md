# How workspaces.xyz is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/workspaces.xyz-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with newsletter subscription form, featured workspace photograph, and section labels in monospace caps](https://pin.fontofweb.com/10218?format=jpg)](https://design.withfudge.com/share/pin-10218)

[Homepage hero with newsletter subscription form, featured workspace photograph, and section labels in monospace caps](https://design.withfudge.com/share/pin-10218)

[![Grid of workspace setup cards with portrait photography, numbered badges, and category pill tags](https://pin.fontofweb.com/10219?format=jpg)](https://design.withfudge.com/share/pin-10219)

[Grid of workspace setup cards with portrait photography, numbered badges, and category pill tags](https://design.withfudge.com/share/pin-10219)

[![About page with dark header bar, statistics panel, and editorial body copy on warm off-white canvas](https://pin.fontofweb.com/10221?format=jpg)](https://design.withfudge.com/share/pin-10221)

[About page with dark header bar, statistics panel, and editorial body copy on warm off-white canvas](https://design.withfudge.com/share/pin-10221)

[![Dark footer with testimonial quote, multi-column navigation links, and social media row](https://pin.fontofweb.com/10220?format=jpg)](https://design.withfudge.com/share/pin-10220)

[Dark footer with testimonial quote, multi-column navigation links, and social media row](https://design.withfudge.com/share/pin-10220)

## Overview

Workspaces is an editorial archive and weekly newsletter showcasing real desk setups from designers, founders, and builders around the world. The visual system balances warm, approachable surfaces with precise typographic discipline. Every page rests on an off-white canvas that evokes paper and natural light, while near-black ink provides sharp readability. Monospace headings from IBM Plex Mono establish a technical, catalog-like voice that suits the numbered archive format. IBM Plex Sans handles body copy with open, humanist proportions. Forest green accents appear sparingly for primary actions, creating a deliberate contrast against the muted palette. The overall impression is that of a well-organized print magazine translated to the web: generous whitespace, clear hierarchy, and photography treated as the dominant visual element.

## Colors

The palette is intentionally restrained, built around warm neutrals with a single functional accent. Light values dominate the interface, while dark values anchor type and borders. The green action color carries natural, organic connotations appropriate for a site about physical workspaces.

| token | hex | use |
|---|---|---|
| ink | #1A1916 | Primary text, headings, header borders, input borders |
| muted-ink | #6B6960 | Secondary text, captions, metadata, footer body copy |
| canvas | #F4F3EF | Page background, section backgrounds |
| surface | #FFFFFF | Cards, header bar, input fields, button fills |
| border | #D8D6CF | Card borders, dividers, subtle separators |
| border-strong | #1A1916 | Header bottom border, focused input borders |
| action | #2D6A2D | Primary buttons, subscribe actions, active states |
| action-hover | #3A3830 | Darker green for hover states on action elements |

The light mode is universal across all visible pages. No dark mode interface is present, though the footer inverts to a near-black background with white text and links. Photography carries its own color temperature—warm wood tones, green plants, and neutral electronics—so the UI palette stays muted to avoid competition. The green accent is reserved for high-priority actions only: subscribe buttons and the occasional label badge.

## Typography

Two families drive the typographic system: IBM Plex Mono for display, labels, and navigation; IBM Plex Sans for body copy and descriptions. This pairing creates tension between technical precision and human readability. The monospace family reinforces the archival, numbered nature of the content, while the sans-serif keeps long-form reading comfortable. The design facts also list Applesystem and Times as detected families, but these appear to be system fallback references rather than actively rendered typefaces in the visible interface.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | IBM Plex Mono | 2.75rem | 700 | 1.1 | -0.02em | Homepage hero heading, major page titles |
| section-display | IBM Plex Mono | 2rem | 600 | 1.15 | -0.015em | Section headings, quote attribution |
| card-title | IBM Plex Mono | 1.15rem | 600 | 1.2 | -0.01em | Workspace card names, profile titles |
| body | IBM Plex Sans | 1rem | 400 | 1.6 | 0 | Default paragraphs, navigation items |
| body-large | IBM Plex Sans | 1rem | 400 | 1.75 | 0 | Featured descriptions, about page copy |
| label | IBM Plex Mono | 0.875rem | 500 | 1.4 | 0.06em | Buttons, category tags, section labels |
| label-small | IBM Plex Mono | 0.72rem | 500 | 1.6 | 0.08em | Metadata badges, image captions |
| stat-number | IBM Plex Mono | 2rem | 600 | 1 | -0.02em | Statistics, large numerals |
| navigation | IBM Plex Mono | 1rem | 400 | 1.6 | 0 | Header nav links, footer links |
| quote | IBM Plex Mono | 1.5rem | 400 | 1.4 | 0.02em | Pull quotes, testimonials |

IBM Plex Mono and IBM Plex Sans are designed by Mike Abbink, Paul Van Der Laan, and Pieter Van Rosmalen, distributed by Bold Monday. Verify licensing for these families before production use.

## Layout

The layout follows a centered, max-width container system with generous horizontal padding. Content never stretches to full viewport width, maintaining a readable measure and editorial feel.

The base spacing unit is 0.125rem (2px), allowing fine-grained control. Major sections use 3rem vertical padding, with 48px appearing as the standard section rhythm. Content containers max out at approximately 73rem (1168px), centered with auto margins. Horizontal padding varies by breakpoint: 32px on wider viewports, 24px on narrower ones.

The header is fixed-height with 48px top padding and 40px bottom padding, separated from content by a 1px bottom border in near-black. Inside, the logo and navigation sit in a flex row with 56px horizontal padding and 32px gaps between elements.

Main content sections stack vertically with consistent 48px vertical padding. Grid layouts for workspace cards use 24px gaps both horizontally and vertically. Individual cards contain internal padding of 16px, with 4px gaps between metadata rows.

The footer inverts the color scheme: near-black background, white text, and multi-column link grids with 40px column gaps. A testimonial quote section precedes the footer, centered with generous 80px vertical padding on a canvas background.

## Visual language

The visual language is editorial and archival, treating each workspace as a documented artifact. Photography dominates every surface—large hero images, card thumbnails, and profile portraits. Images are presented without rounded corners, maintaining a documentary flatness that keeps focus on content rather than decoration.

Borders are structural rather than ornamental. The 1px solid border appears on cards, header separators, and footer dividers, always in muted gray or near-black. No shadows are used; depth is created through color contrast and spacing alone.

Labels and badges use uppercase monospace with wide letter-spacing, giving them the appearance of catalog tags or archive stamps. The "//" prefix on section labels reinforces this technical, commented-code aesthetic.

The green accent is disciplined: it appears only on subscribe buttons, occasional "latest issue" badges, and the active subscribe button in the header. This restraint makes the green highly scannable when it does appear.

Typography hierarchy is established through family switching rather than size alone. A card title in IBM Plex Mono at 1.15rem carries more visual weight than body text at 1rem in IBM Plex Sans, even with minimal size difference.

## Components

### Site header

- **Anatomy**: Logo mark with wordmark, horizontal navigation links, advertise button, subscribe button
- **Surface**: White background with 1px bottom border in near-black
- **Typography**: Navigation links in IBM Plex Mono at 1rem; buttons in label style
- **Shape**: No border radius; full-width bar
- **Spacing**: 48px top padding, 40px bottom padding; 56px horizontal padding; 32px gap between nav clusters
- **Composition**: Flex row, space-between alignment; logo left, nav center-left, actions right

### Primary action button

- **Anatomy**: Text label with optional icon gap
- **Surface**: Forest green background (#2D6A2D), white text
- **Typography**: IBM Plex Mono, 0.875rem, weight 500, uppercase, 0.06em tracking
- **Shape**: No border radius (rectangular)
- **Spacing**: 10px vertical padding, 20px horizontal padding; 6.4px gap for icons
- **Variants**: Header version is compact; hero version sits adjacent to email input

### Secondary action button

- **Anatomy**: Text label with border
- **Surface**: White background, near-black border, near-black text
- **Typography**: Same label style as primary
- **Shape**: No border radius
- **Spacing**: Same padding as primary

### Workspace card

- **Anatomy**: Photograph (top), metadata row (issue number, date, location), name heading, description paragraph, category tag row
- **Surface**: White background, 1px border in warm gray
- **Typography**: Name in card-title token; metadata in label-small; description in body; tags in label-small uppercase
- **Shape**: No border radius on image or card
- **Spacing**: 16px internal padding; 4px gap between metadata elements; 24px gap between cards in grid
- **Composition**: Vertical stack; image aspect ratio appears consistent across cards

### Email capture form

- **Anatomy**: Text input field, subscribe button, social proof line with reader count
- **Surface**: White input with 1.5px left and bottom borders in near-black; green subscribe button
- **Typography**: Input in IBM Plex Sans at 0.95rem; button in label token; social proof in body-small
- **Shape**: No border radius on input or button
- **Spacing**: 10.4px vertical input padding, 13.6px horizontal; 12px gap below form

### Statistics panel

- **Anatomy**: Section label, three-column grid of metric cards
- **Surface**: White card backgrounds with 1px borders, or direct on canvas with divider lines
- **Typography**: Metric labels in label-small uppercase; numbers in stat-number; descriptions in body
- **Shape**: No border radius
- **Spacing**: 24px gap between columns; internal card padding 24px

### Footer

- **Anatomy**: Testimonial quote section (light), then dark footer with logo, description, social links, multi-column navigation, legal copy
- **Surface**: Near-black background (#1A1916), white and muted text
- **Typography**: Column headers in label-small uppercase; links in navigation token; legal in body-small muted
- **Shape**: No border radius
- **Spacing**: 48px top padding, 32px bottom padding; 40px column gaps; 12px row gaps in link clusters

### Category tag

- **Anatomy**: Uppercase text label
- **Surface**: Light warm background or white with subtle border
- **Typography**: IBM Plex Mono, 0.72rem, weight 500, uppercase, 0.08em tracking
- **Shape**: No border radius or slight pill radius
- **Spacing**: 3px vertical padding, 8px horizontal padding

## Responsive behavior

The design shows a desktop-first layout with centered max-width containers. At narrower viewports, the workspace card grid should collapse from three columns to two, then to a single column. The header navigation may compress into a hamburger menu or horizontal scroll, though the exact mobile pattern is not visible in the supplied images.

The hero section on the homepage splits into text-left and image-right at desktop; this should stack vertically on smaller screens with the image preceding the text. Footer columns should reflow from four-across to two, then to a single stacked column.

Font sizes remain consistent across breakpoints—the hierarchy relies on spacing and layout rather than dramatic type scaling. The 24px horizontal padding on containers provides safe margins on narrow devices.

## Practical implementation guidance

### Preserve
- The warm off-white canvas (#F4F3EF) as the default page background; pure white should be reserved for cards and header only
- The strict two-family typographic system; do not introduce a third font for display or body
- The documentary, unrounded treatment of photography—no border-radius on card images
- The uppercase monospace label style with wide tracking for all metadata, tags, and buttons
- The forest green accent used sparingly and only for primary subscribe actions

### Avoid
- Adding drop shadows to cards or buttons; the design achieves hierarchy through color and spacing alone
- Using rounded corners on primary surfaces; the aesthetic is deliberately rectilinear and archival
- Introducing additional accent colors; the green carries all functional emphasis
- Stretching images or containers beyond the max-width; the centered, bounded layout is essential to the editorial feel
- Using the dark footer background anywhere except the footer; it is a deliberate inversion, not a theme

### Recommended build order
1. Establish the color tokens and apply canvas background to body, white to header
2. Set up IBM Plex Mono and IBM Plex Sans with the complete type scale
3. Build the site header with logo, navigation, and action buttons
4. Create the workspace card component with image, metadata, and tag structure
5. Implement the homepage hero with email capture form
6. Build the statistics panel for the About page
7. Construct the dark footer with multi-column navigation

### Accessibility
- Ensure the forest green action color (#2D6A2D) on white meets WCAG AA contrast ratios for text; the button uses white text on green, which should be verified
- The near-black ink on off-white canvas exceeds AAA contrast and provides excellent readability
- Form inputs should have visible focus states using the border-strong color
- Navigation should be keyboard-accessible with clear focus indicators
- Image cards should have descriptive alt text for workspace photographs

## Scope note

This guide covers the homepage, about page, and footer surfaces visible in the supplied images. Individual workspace detail pages, mobile navigation patterns, hover and focus states, loading skeletons, and error states are not included. The design system is built for a light-mode editorial experience; dark mode is limited to the footer inversion only. Applesystem and Times are listed in the source records but do not appear as active design fonts in the visible interface.
