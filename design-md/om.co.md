# How om.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/om.co-design)

Last updated: 2026-08-10

## Captured pages

[![Single blog post page with author bio card, date stamp, category tags, and comment section header showing the editorial reading experience](https://pin.fontofweb.com/9814?format=jpg)](https://design.withfudge.com/share/pin-9814)

[Single blog post page with author bio card, date stamp, category tags, and comment section header showing the editorial reading experience](https://design.withfudge.com/share/pin-9814)

[![Homepage with circular author portrait, tabbed navigation for latest posts, and chronological article list with date stamps and bold headlines](https://pin.fontofweb.com/9813?format=jpg)](https://design.withfudge.com/share/pin-9813)

[Homepage with circular author portrait, tabbed navigation for latest posts, and chronological article list with date stamps and bold headlines](https://design.withfudge.com/share/pin-9813)

## Overview

Om.co is a personal publishing platform built around long-form editorial content. The design prioritizes readability through classical typography, generous whitespace, and a deliberately restrained color palette. Every surface serves the reading experience: the page canvas is pure white, text is set in a warm serif face at a comfortable size with ample line height, and structural elements recede until needed. The visual system balances editorial gravitas with contemporary cleanliness—there are no decorative borders, no background textures, no ornamental flourishes beyond the precise hierarchy of type. Navigation is minimal, appearing as understated text links and category tabs rather than heavy chrome. Author presence is established through a circular portrait and brief bio card, grounding the publication in a personal voice. The overall impression is of a well-edited magazine rendered for the web: confident, unhurried, and entirely focused on the quality of the words.

## Colors

The palette is intentionally narrow, built from neutrals with a single functional accent. This restraint lets photography and content breathe while maintaining clear wayfinding.

| token | hex | use |
|---|---|---|
| ink | #333333 | Primary text, headings, borders, structural rules |
| muted-ink | #888888 | Secondary text, inactive navigation, category tags, hairline borders |
| canvas | #FFFFFF | Page background, all primary surfaces |
| surface | #EAEAEB | Author bio card background, subtle content containers |
| accent | #0065B3 | Date stamps, active links, interactive emphasis |
| accent-hover | #006BBD | Accent hover state |
| border | #333333 | Main content divider rules |
| hairline | #888888 | Avatar ring, subtle separators |

The system operates in a single light mode. Dark values are reserved for text and rules; the accent blue appears sparingly to mark temporal information and interactive elements. The surface gray is cool and extremely light, providing just enough differentiation for the author bio card without competing with content. No dark mode or alternative theme is present in the visible system. Image palettes from photography are not incorporated into UI tokens.

## Typography

Four type families appear in the extracted system: Adelle, a warm slab serif, handles all editorial and display text; Adellesans, a clean sans serif, manages labels, navigation, and supporting information; Applesystem provides fallback UI text; and System-Sansserif serves as a root-level fallback. The primary pairing of Adelle and Adellesans creates clear role separation—serif for reading, sans for wayfinding.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| body | Adelle | 1.125rem | 400 | 1.9 | 0em | Article paragraphs, bio text, general content |
| body-tight | Adelle | 1.125rem | 400 | 1.667 | 0em | Bio card text, space-constrained editorial |
| display | Adelle | 1.625rem | 700 | 1.2 | 0em | Post titles, page headings |
| headline | Adelle | 1.125rem | 700 | 1.4 | 0em | Article list titles, section headings |
| label | Adellesans | 0.875rem | 700 | 1.9 | 0.125em | Date stamps, category tags, uppercase labels |
| label-nav | Adellesans | 0.875rem | 700 | 1.9 | 0.1em | Navigation tabs, menu items |
| caption | Adellesans | 0.9375rem | 400 | 1.6 | 0em | Supporting sans-serif text |
| system-small | Applesystem | 0.875rem | 400 | 1.4 | 0em | System-level fallback text |

The body size of 18px with 34.2px line height creates a measured, comfortable reading rhythm. Display type at 26px with tight leading provides clear hierarchy for post titles without shouting. Label styles use uppercase treatment with positive letter spacing for scannability. Bold weight in Adelle is reserved for headings and emphasis; the regular weight carries the reading experience. Verify licensing for these families before production use.

## Layout

The layout follows a centered single-column model with generous margins. Content is constrained to a readable measure, creating ample breathing room on either side.

The header sits at the top with horizontal padding of 28px vertical, establishing the site identity with the OM wordmark left-aligned and minimal navigation right-aligned. Below the header, main content carries a 50px bottom margin, creating separation before the article stream.

The article page places the date stamp above the title, followed by the post body with 32px paragraph spacing. The author bio card appears after the article content, set within a light gray surface with 38px internal padding and a 16px bottom margin. A circular avatar sits left of the bio text, with the avatar image rendered at 50% border radius.

The homepage introduces a hero section with the circular author portrait left-aligned beside introductory text. Below this, tabbed navigation separates content categories, followed by a chronological article list. Each list item carries 24px bottom padding with a bottom border rule, and the list container provides 9px gap between elements.

Section spacing uses 100px vertical margins for major divisions, while content blocks within sections use 80px vertical padding. The overall rhythm is spacious and unhurried, appropriate for editorial consumption.

## Visual language

The visual character is editorial and personal, evoking the clarity of print magazines translated to digital. Rounded elements are minimal and purposeful: the circular avatar is the sole organic shape, contrasting with the otherwise rectilinear system. The OM wordmark uses custom letterforms with the O and M connected, establishing brand recognition without decorative complexity.

Rules and borders are thin and precise. The main content divider is a 1px solid line in ink, while avatar rings and subtle separators use the lighter hairline value. No shadows, gradients, or background patterns appear. The aesthetic relies entirely on typographic hierarchy, whitespace discipline, and the single accent color to create visual interest.

Imagery is treated simply: the author portrait is circular with a thin border, while article images appear without elaborate framing. The visual system does not compete with content—it establishes a calm, authoritative environment for reading.

## Components

### Site header

- **Anatomy**: Wordmark left, navigation right, search icon far right
- **Surface**: Transparent over canvas background
- **Typography**: Navigation uses `{typography.label-nav}` in muted-ink; active items use ink
- **Spacing**: 28px vertical padding, horizontal margins matching content column
- **Composition**: Flex row with space-between alignment

### Post title

- **Anatomy**: Single heading element
- **Typography**: `{typography.display}` in ink
- **Spacing**: Appears below date stamp with natural flow spacing

### Date stamp

- **Anatomy**: Uppercase text, often with month-day-year format
- **Typography**: `{typography.label}` in accent blue
- **Use**: Temporal wayfinding for articles, appears above titles and in list items

### Article body

- **Anatomy**: Paragraph blocks with optional strong emphasis
- **Typography**: `{typography.body}` in ink
- **Spacing**: 32px bottom margin between paragraphs
- **Composition**: Single column, maximum readable measure

### Author bio card

- **Anatomy**: Circular avatar image left, text block right
- **Surface**: `{colors.surface}` background
- **Typography**: `{typography.body-tight}` in ink; name in bold
- **Shape**: 4px border radius on card container
- **Spacing**: 38px internal padding, 16px bottom margin
- **Composition**: Flex row with avatar and text aligned center

### Navigation tabs

- **Anatomy**: Horizontal text links with underline on active state
- **Typography**: `{typography.label-nav}`
- **States**: Active tab in ink with underline; inactive in muted-ink
- **Spacing**: 24px gap between tab items

### Article list item

- **Anatomy**: Date stamp above, bold headline below, separated by bottom rule
- **Typography**: Date in `{typography.label}` accent; headline in `{typography.headline}`
- **Border**: 1px solid hairline bottom rule
- **Spacing**: 24px bottom padding per item

### Category tags

- **Anatomy**: Uppercase text labels, comma-separated
- **Typography**: `{typography.label}` in muted-ink
- **Use**: Post categorization, appears below article content

### Search trigger

- **Anatomy**: Magnifying glass icon
- **Color**: Ink or accent depending on context
- **Position**: Header right, aligned with navigation

## Responsive behavior

The visible system shows a desktop-optimized layout with a centered content column. The narrow measure suggests the design was conceived for comfortable reading at standard viewport widths. For implementation, consider these adaptations:

- Maintain the single-column reading experience across all breakpoints; the generous margins should compress rather than reflow dramatically
- Reduce section spacing from 100px to 64px on mid-width viewports and 48px on narrow screens
- Scale display type to 1.375rem on mobile to preserve hierarchy without overflow
- Ensure the author bio card stacks vertically on narrow viewports, with avatar centered above text
- Navigation tabs may scroll horizontally if category count exceeds viewport width
- The 500.5px horizontal margins in the source suggest a max-width container approach; implement with `max-width` and auto margins rather than fixed pixel values

## Practical implementation guidance

### Preserve
- The warm serif reading experience at 18px with 1.9 line height; this is the core of the design's character
- Generous paragraph spacing at 32px; the rhythm depends on this breathing room
- The single blue accent for dates and links; resist adding secondary accent colors
- Circular avatar treatment with thin border ring
- Uppercase labels with positive letter spacing for navigation and metadata

### Avoid
- Heavy borders, shadows, or background textures that would break the editorial calm
- Multi-column layouts that would compromise reading measure
- Decorative elements around images or pull quotes
- Expanding the palette beyond the established neutrals and single accent
- Reducing line height below 1.6 for body text

### Recommended build order
1. Establish the typographic foundation with Adelle at body size and line height
2. Implement the centered content column with maximum readable measure
3. Build the header with wordmark and minimal navigation
4. Create the article template with date stamp, title, and body spacing
5. Add the author bio card with surface background and circular avatar
6. Implement the homepage article list with tabbed navigation
7. Refine label styles and spacing tokens across all components

### Accessibility
- Ensure the accent blue (#0065B3) meets contrast requirements against white for interactive elements; the 4.5:1 ratio should be verified for small text
- Provide visible focus indicators for navigation tabs and links that maintain the understated aesthetic
- Consider increasing label letter spacing slightly if rendered at smaller sizes on high-density displays
- The circular avatar should include descriptive alt text for screen readers
- Maintain logical heading hierarchy: display for post titles, headline for list items and section headings

## Scope note

This guide covers the homepage and single post page surfaces visible in the supplied images. Footer content, archive pages, search results, and subscription forms are not represented. No mobile breakpoint behavior, loading states, or interactive feedback beyond basic hover is documented. The design system assumes a light-mode-only presentation. System-Sansserif appears in the source as a root fallback family but is not actively used in visible components.
