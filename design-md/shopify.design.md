# How shopify.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/shopify.design-design)

Last updated: 2026-08-10

## Captured pages

[![Large typographic list of remote office locations with red accent headline and embedded studio photograph](https://pin.fontofweb.com/8597?format=jpg)](https://design.withfudge.com/share/pin-8597)

[Large typographic list of remote office locations with red accent headline and embedded studio photograph](https://design.withfudge.com/share/pin-8597)

[![Grid of creative work samples with neon pink typography, classical artwork, and mobile app interfaces](https://pin.fontofweb.com/8590?format=jpg)](https://design.withfudge.com/share/pin-8590)

[Grid of creative work samples with neon pink typography, classical artwork, and mobile app interfaces](https://design.withfudge.com/share/pin-8590)

[![Hero section with massive black display type reading 'Make the new normal' and event pill navigation](https://pin.fontofweb.com/8589?format=jpg)](https://design.withfudge.com/share/pin-8589)

[Hero section with massive black display type reading 'Make the new normal' and event pill navigation](https://design.withfudge.com/share/pin-8589)

[![Hero section with 'Make the new normal' headline and partial grid of portfolio work below](https://pin.fontofweb.com/8588?format=jpg)](https://design.withfudge.com/share/pin-8588)

[Hero section with 'Make the new normal' headline and partial grid of portfolio work below](https://design.withfudge.com/share/pin-8588)

## Overview

The Shopify Design site presents a bold editorial identity built around extreme scale contrasts and typographic confidence. The system pairs monumental serif letterforms with a clean, almost austere monochrome foundation, allowing vivid accent colors and rich photographic content to command attention. The design philosophy centers on letting content breathe through generous whitespace while creating dramatic focal points through oversized display type that often exceeds conventional viewport boundaries.

The visual language communicates creative authority through restraint: black ink on white canvas, precise geometric spacing, and selective use of high-saturation color for emphasis. Navigation and metadata remain deliberately understated, rendered in compact monospaced and small serif forms that recede behind the primary content. This hierarchy ensures that portfolio work, location storytelling, and editorial headlines dominate the reader's attention without competing interface elements.

## Colors

The palette operates on a near-monochrome foundation with strategic accent deployment. The system avoids gradients, shadows, and complex surface treatments in favor of flat, decisive color application.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, borders, and structural lines |
| muted-ink | #6F7680 | Secondary metadata, subdued labels, and inactive states |
| accent | #FE432A | Editorial emphasis, location headlines, and energetic callouts |
| canvas | #FFFFFF | Primary background, card surfaces, and pill containers |

The ink and canvas pairing creates maximum contrast for readability and photographic presentation. The accent color appears selectively in large typographic moments rather than as pervasive UI chrome, preserving its impact. Muted-ink serves functional metadata roles where full black would create excessive visual weight. No dark mode variant is visible in the supplied material; the system appears optimized for light-surface presentation with photography providing tonal variation.

## Typography

Three font families establish the typographic hierarchy: Antique Legacy for commanding display and navigation, Times for body content, and Fragment Mono for technical labels and metadata.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Antique Legacy | 13.75rem | 500 | 0.8 | -0.04em | Monumental headlines and location names |
| section-display | Antique Legacy | 10rem | 500 | 0.85 | -0.04em | Secondary large statements and accent text |
| body | Times | 1rem | 400 | 1.5 | 0em | Paragraphs, descriptions, and general content |
| subtitle | Times | 1rem | 400 | 1.5 | 0em | Hero supporting text and centered descriptions |
| label | Fragment Mono | 0.875rem | 400 | 1.5 | 0.02em | Metadata, tags, timestamps, and technical notes |
| navigation | Antique Legacy | 1rem | 500 | 1.5 | -0.015em | Header links and wayfinding |

Antique Legacy carries the voice of the brand at scale, with tight negative tracking and compressed line heights that create dense, impactful blocks of text. The Medium weight provides sufficient presence without the heaviness of full bold. Times serves as the quiet workhorse for readable body copy and centered subtitle statements beneath hero headlines, while Fragment Mono adds a technical, editorial precision to supporting information.

The Fragment Mono family is designed by Wei Huang, based on Nimbus Sans by URW Studio, itself based on Helvetica by Max Miedinger. Verify licensing for these families before production use.

## Layout

The layout system employs generous fixed margins and substantial vertical padding to create an expansive, gallery-like presentation. Content sits within a centered column that maintains consistent side margins across sections.

The primary content margin measures 19.25rem on each side, creating a narrow central reading column for body text while allowing display type to break outward or fill the full viewport width. Section spacing uses 7.5rem vertical padding to separate major content areas, with smaller 3.5rem and 1.25rem increments for internal grouping.

The grid for portfolio work uses a three-column arrangement with consistent gap spacing. Cards within this grid feature rounded corners at 1rem, softening the otherwise rectilinear composition. The hero section centers massive display type with a supporting subtitle below, maintaining substantial empty space above and below to isolate the typographic statement.

Header navigation floats at the top with a distinct pill-shaped event indicator positioned to the right. This pill uses a fully rounded form with thin border definition, containing event details and a date marker. The overall spatial rhythm alternates between dense typographic moments and open breathing room, preventing visual fatigue across long scrolls.

## Visual language

The aesthetic character merges editorial print traditions with contemporary technology presentation. Monumental typography references poster design and exhibition graphics, while the clean white ground and precise spacing suggest digital-native refinement.

Photographic content appears within rounded containers, often showing interface mockups, artistic compositions, and product photography. A distinctive treatment overlays vibrant magenta and neon pink typography on photographic surfaces, creating layered compositions where text and image interweave. This approach appears in portfolio cards where repeated word marks create pattern-like textures behind physical objects.

The location list treatment demonstrates the system's typographic play: city names at extreme scale with geographic coordinates rendered in tiny monospaced labels positioned at the baseline. An embedded photograph interrupts the typographic flow, creating a moment of material warmth within the abstract letterforms. The accent color shifts from black to vivid red for the section header, establishing hierarchy through chromatic rather than scale variation.

Small functional details reinforce the technical precision: a live indicator dot in bright green, outbound link arrows in simple geometric form, and timestamp badges with calendar iconography. These elements maintain the restrained palette while adding informational density.

## Components

### Event Pill

A compact, fully rounded container for event announcements and temporal information.

- **Anatomy**: Horizontal pill containing event title, separator dot, date text, and calendar icon with outbound arrow
- **Surface**: White background with 1px black border
- **Typography**: Fragment Mono at label size, black text with muted-ink secondary elements
- **Shape**: 9999px border radius creating perfect capsule form
- **Spacing**: Internal padding approximately 0.75rem vertical and 1.125rem horizontal
- **Composition**: Positioned in header area, right-aligned with navigation

### Portfolio Card

Container for creative work samples with rounded corners and full-bleed media.

- **Anatomy**: Rounded rectangle containing photographic or video media, with optional overlaid typography
- **Surface**: White background, media fills container with 1rem corner radius
- **Typography**: Varies by content; may include large display text in accent colors overlaid on imagery
- **Shape**: 1rem border radius
- **Spacing**: Gaps between cards maintain consistent rhythm within three-column grid
- **Composition**: Media-driven with text either overlaid or absent; some cards show interface mockups, others show artistic photography

### Hero Headline

Primary page statement using maximum scale typography.

- **Anatomy**: Two to three lines of display text centered horizontally, with optional subtitle below
- **Typography**: Antique Legacy at hero-display size, black
- **Spacing**: Generous vertical margins isolating the headline from adjacent content
- **Composition**: Center-aligned, frequently breaking across lines with natural word breaks

### Hero Subtitle

Supporting description beneath the main headline.

- **Anatomy**: Single line of text centered below hero headline
- **Typography**: Times at body size, black
- **Spacing**: Moderate top margin separating from headline, larger bottom margin before content
- **Composition**: Center-aligned, narrower measure than headline for comfortable reading

### Location List

Specialized typographic component for geographic storytelling.

- **Anatomy**: Stacked city names at extreme scale with small coordinate labels positioned at right edge
- **Typography**: Antique Legacy at section-display size for names, Fragment Mono at label size for coordinates
- **Color**: Accent red for section header, black for city names
- **Composition**: Ragged right alignment with labels tucked against baseline; embedded photograph interrupts flow between entries

### Header Navigation

Minimal top-bar wayfinding with logo and event indicator.

- **Anatomy**: Left-aligned wordmark, right-aligned event pill with arrow link
- **Typography**: Antique Legacy at navigation size for logo, Fragment Mono for event details
- **Surface**: Transparent or white background, no visible border or shadow
- **Spacing**: Full-width with content-margin horizontal padding

## Responsive behavior

The supplied images show desktop presentation at a single breakpoint. Based on the extreme scale of display typography and fixed margin measurements, several adaptive strategies are recommended for narrower viewports.

Display type should reduce proportionally, with hero-display scaling to maintain legibility without excessive line breaks. The three-column portfolio grid should collapse to two columns and then single column, maintaining card aspect ratios and corner radii. The 19.25rem side margins should reduce to standard responsive padding, likely between 1.5rem and 3rem depending on viewport width.

The location list composition, with its precise label positioning and embedded media, will require careful reflowing. City names should remain large but may need reduced tracking, while coordinate labels may stack below rather than floating at right. The event pill should remain visible but may truncate text or simplify to icon-only at the smallest sizes.

## Practical implementation guidance

### Preserve
- The stark black-white-red color hierarchy and its restraint in application
- Extreme scale contrast between display and body type
- Tight negative tracking on Antique Legacy at large sizes
- Generous whitespace as a deliberate compositional element
- Rounded corners on media containers against sharp typographic edges
- Monospaced labels for metadata and technical information

### Avoid
- Adding background colors or textures behind content areas
- Introducing drop shadows or dimensional effects
- Using the accent color for interactive states or UI chrome
- Tightening line height on body text beyond comfortable reading
- Breaking the monochrome foundation with additional palette colors

### Recommended Build Order
1. Establish the spacing scale with content margins and section padding
2. Implement the three type scales with exact tracking values
3. Build the header with logo and event pill
4. Create the hero headline component with centering behavior
5. Develop the portfolio card grid with rounded media containers
6. Add the location list with embedded media interruption
7. Refine responsive behavior for display type and grid collapse

### Accessibility
- Ensure the extreme display sizes do not trigger horizontal overflow at any viewport
- Maintain sufficient color contrast for muted-ink text on white backgrounds
- Provide visible focus indicators for the event pill and any interactive cards
- Consider reduced-motion preferences for any scroll-linked typographic effects
- Verify that overlaid text on portfolio imagery maintains readable contrast

## Scope note

This guide covers the Shopify Design homepage and its visible components including the hero section, portfolio grid, location list, and header navigation. Mobile breakpoints, hover states, form interactions, and interior pages are not represented in the supplied material. The spacing values derive from exact pixel measurements and convert cleanly to the relative unit scale.
