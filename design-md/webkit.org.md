# How webkit.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/webkit.org-design)

Last updated: 2026-08-10

## Captured pages

[![Blog article page with dark charcoal background, white display typography, and blue hyperlink accents in the WebKit header and body content](https://pin.fontofweb.com/1960?format=jpg)](https://design.withfudge.com/share/pin-1960)

[Blog article page with dark charcoal background, white display typography, and blue hyperlink accents in the WebKit header and body content](https://design.withfudge.com/share/pin-1960)

[![Homepage article grid with dark cards, colorful hero imagery in coral and purple tones, and blue read-more links](https://pin.fontofweb.com/1959?format=jpg)](https://design.withfudge.com/share/pin-1959)

[Homepage article grid with dark cards, colorful hero imagery in coral and purple tones, and blue read-more links](https://design.withfudge.com/share/pin-1959)

[![Hero section with deep navy blue background, white centered headline, and light blue link text with geometric line pattern](https://pin.fontofweb.com/1958?format=jpg)](https://design.withfudge.com/share/pin-1958)

[Hero section with deep navy blue background, white centered headline, and light blue link text with geometric line pattern](https://design.withfudge.com/share/pin-1958)

## Overview

WebKit.org presents a dark-mode-first documentation and blog platform for the open-source WebKit browser engine. The visual system prioritates technical credibility through restrained color usage, generous whitespace, and clear typographic hierarchy. The design operates across two primary surface modes: a deep navy blue hero treatment for the homepage that evokes technical precision and trust, and a near-black charcoal background for blog content and article listings that reduces eye strain during extended reading sessions.

The interface relies on system-level sans-serif typography with tight tracking on display sizes, creating a contemporary developer-tool aesthetic. Electric blue serves as the singular accent color, reserved exclusively for interactive elements and inline hyperlinks. This disciplined palette ensures that color carries semantic weight—users can immediately identify what is clickable. The overall composition balances dense technical content with breathable layouts, using card-based grids for article discovery and straightforward single-column reading flows for long-form documentation.

## Colors

The color system is built on a dark foundation with high-contrast text and a single vibrant accent. Every surface serves a specific functional role, from the immersive navy hero to the utilitarian charcoal content areas.

| token | value | use |
|---|---|---|
| canvas | `#0a2540` | Hero section backgrounds, homepage masthead, primary brand surface |
| surface | `#1a1a1a` | Blog content background, article cards, secondary content areas |
| ink | `#ffffff` | Primary headings, body text, navigation labels |
| muted-ink | `#e6e6e6` | Secondary body text, descriptions, card excerpts |
| action | `#5ac8fa` | Hyperlinks, read-more indicators, interactive text |
| action-hover | `#7dd4fb` | Lighter blue for link hover states |
| border | `#2a2a2a` | Subtle dividers between cards and content sections |

The deep navy canvas (`#0a2540`) establishes the homepage hero with an atmospheric quality, reinforced by faint geometric line patterns that suggest technical diagrams without competing for attention. The charcoal surface (`#1a1a1a`) provides a slightly elevated plane for blog articles and card grids, creating enough separation from pure black to avoid harsh contrast while maintaining the dark-mode reading experience.

White ink at full opacity handles all primary text, with muted-ink reserved for longer excerpts and secondary descriptions to establish visual hierarchy without introducing additional hues. The action blue (`#5ac8fa`) is the system's only saturated color, appearing consistently across all interactive text elements. This restraint makes every blue element immediately recognizable as actionable.

## Typography

The typographic system uses Apple's system font stack, ensuring native rendering quality across macOS, iOS, and related platforms. Weights range from Regular for body text to Bold for display headings, with no extraneous weights in use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | -apple-system, BlinkMacSystemFont, sans-serif | 3rem | 700 | 1.1 | -0.02em | Homepage hero headline |
| section-display | -apple-system, BlinkMacSystemFont, sans-serif | 2rem | 700 | 1.2 | -0.01em | Article titles, section headings |
| body-large | -apple-system, BlinkMacSystemFont, sans-serif | 1.25rem | 400 | 1.5 | 0 | Hero description, introductory paragraphs |
| body | -apple-system, BlinkMacSystemFont, sans-serif | 1rem | 400 | 1.6 | 0 | Article body text, card excerpts |
| label | -apple-system, BlinkMacSystemFont, sans-serif | 0.875rem | 600 | 1.4 | 0.01em | Read-more links, metadata, captions |
| navigation | -apple-system, BlinkMacSystemFont, sans-serif | 0.875rem | 500 | 1 | 0 | Site header menu items |

Display sizes employ negative letter spacing for a tighter, more engineered appearance appropriate to a browser engine project. Body text maintains generous line height for readability in technical documentation. The label style carries slightly increased letter spacing to distinguish utility text from body content.

Verify licensing for these families before production use. The system font stack references Apple platform fonts that may require appropriate platform targeting or fallback licensing consideration.

## Layout

The layout system follows a centered, contained approach with responsive padding. The homepage hero occupies the full viewport width with centered text alignment, while interior pages use a narrower reading column for blog articles.

The site header spans the full width with horizontal navigation items distributed to the right of the WebKit logo. Navigation items include dropdown indicators for hierarchical sections like Feature Status, Documentation, Policies, Contribute, and Blog. A search icon occupies the rightmost position.

Content areas on article pages center within a maximum width, estimated at approximately 48rem for optimal line length. The blog article layout places metadata (date and author) in a left-aligned position above the title, with the main content flowing below in a single column.

The homepage article grid arranges cards in a multi-column layout with consistent gaps. Cards stack vertically with image thumbnails occupying the upper portion, followed by title, description excerpt, and a read-more link. Grid density suggests either two or three columns depending on viewport width, with cards maintaining equal height within rows.

Spacing follows a modular scale based on 0.25rem increments. Section padding uses 5rem vertical spacing to create clear separation between content areas. Content gaps between cards and related elements use 1.5rem. Internal card padding appears to be approximately 1.5rem on all sides.

## Visual language

The visual identity communicates technical authority through geometric precision and atmospheric depth. The homepage hero features a subtle overlay of faint geometric lines and shapes—suggesting wireframes, constellation diagrams, or technical schematics—rendered at very low opacity against the navy background. This treatment adds visual interest without distracting from the centered headline and description.

Photography and illustration in article cards employ bold, saturated colors that contrast sharply with the dark card surfaces. Coral pinks, vivid purples, and warm oranges appear in featured images, creating visual entry points that draw the eye through the grid. These images are not filtered to match the site palette; instead, their natural saturation provides necessary warmth against the cool dark interface.

The WebKit logo combines a compass-like geometric mark with the wordmark, rendered in white against dark backgrounds. The mark's blue and yellow gradient suggests exploration and energy, serving as the site's only multi-color element.

Iconography is minimal and functional. Dropdown arrows in navigation use simple chevrons. The search icon is a standard magnifying glass. Read-more links use a right-pointing arrow character (›) rather than a separate icon element, maintaining typographic consistency.

Card surfaces are flat with no visible shadow, relying on the dark background and subtle border color to define edges. This flat treatment reinforces the technical, utilitarian character of the site.

## Components

### Site header

- **Anatomy**: Fixed-position bar containing WebKit logo (left), primary navigation links with dropdown chevrons (center-right), and search icon (far right)
- **Surface**: Background uses `canvas` color on homepage, transitions to `surface` on scroll or interior pages
- **Typography**: Navigation style at 0.875rem, medium weight
- **Spacing**: Horizontal padding approximately 1.5rem, vertical padding approximately 1rem
- **Composition**: Flexbox row with space-between alignment; navigation items grouped with consistent gaps

### Hero section

- **Anatomy**: Full-width container with centered text block containing headline, description paragraph, and inline links
- **Surface**: `canvas` background with faint geometric line pattern overlay at very low opacity
- **Typography**: Hero-display for headline, body-large for description
- **Spacing**: Generous vertical padding, approximately 5rem top and bottom
- **Composition**: Center-aligned text with maximum width constraint for readability

### Content card

- **Anatomy**: Vertical stack with thumbnail image (top), title, description excerpt, and read-more link
- **Surface**: `surface` background, no border or shadow
- **Typography**: Section-display for title (at smaller scale, approximately 1.25rem), body for description, label for read-more link
- **Spacing**: Internal padding approximately 1.5rem; image bleeds to card edges with no border radius on image itself
- **Shape**: Card border radius 0.5rem
- **Variants**: Featured cards span multiple columns with larger thumbnails; standard cards are uniform in grid

### Article content block

- **Anatomy**: Sequential sections with heading, subheading, and bulleted lists
- **Surface**: `surface` background
- **Typography**: Section-display for headings, body for paragraphs, label for inline code and metadata
- **Spacing**: Section margins approximately 2.5rem between major blocks; list item spacing approximately 0.75rem
- **Composition**: Single column with left-aligned text; inline code elements use monospace with subtle background highlight

### Text link

- **Anatomy**: Inline text with no underline in default state
- **Color**: `action` for default, `action-hover` for hover
- **Typography**: Inherits surrounding text style
- **States**: Hover state lightens to `action-hover`; focus state should include visible outline for accessibility

### Read-more link

- **Anatomy**: Text string followed by right-pointing arrow (›)
- **Color**: `action`
- **Typography**: Label style, semibold weight
- **Spacing**: Margin above approximately 1rem from preceding content

## Responsive behavior

The layout adapts from a multi-column grid on wider viewports to stacked single columns on narrow screens. The homepage article grid collapses from three columns to two, then to a single vertical stack. Card thumbnails maintain aspect ratio through these transitions.

The site header navigation condenses to a hamburger menu or collapses into a more compact form on mobile, though the exact breakpoint is not visible in supplied images. Navigation dropdowns should convert to accordion-style expanders or full-screen overlays on touch devices.

Hero section text scales down proportionally, with the headline reducing from 3rem to approximately 2rem on smaller screens. Line length constraints become more critical on narrow viewports; the reading column should maintain comfortable measure through adjusted padding rather than reduced font size.

Touch targets for navigation items and links should meet minimum 44×44 pixel requirements. The search icon and dropdown toggles require adequate spacing for reliable activation.

## Practical implementation guidance

### Preserve
- The dark-mode-first palette; light-mode variants would require complete recoloring rather than simple inversion
- Generous vertical spacing between content sections to maintain breathable reading experience
- Single accent color discipline; resist adding secondary button colors or status indicators in other hues
- System font stack for native platform integration and performance
- Flat card surfaces without shadows; the dark background provides sufficient depth cues

### Avoid
- Pure black (`#000000`) backgrounds; the near-black `surface` color prevents excessive contrast and eye strain
- Underlined links in default state; the blue color alone carries sufficient affordance in this context
- Rounded corners on images within cards; let the card radius contain the rectangular image
- Multi-line navigation items; keep labels concise for horizontal header layout

### Recommended build order
1. Establish dark color tokens and apply to body and content surfaces
2. Implement system font stack with complete type scale
3. Build site header with logo, navigation, and search
4. Create hero section with centered composition and geometric background pattern
5. Develop card component with image, title, excerpt, and read-more link
6. Construct article grid with responsive column behavior
7. Implement article page template with metadata, title, and content flow
8. Add interactive states for links and navigation

### Accessibility
- Ensure all blue link text meets minimum 4.5:1 contrast ratio against dark backgrounds; the `#5ac8fa` on `#1a1a1a` exceeds this threshold
- Provide visible focus indicators for keyboard navigation; do not rely solely on color change
- Maintain semantic heading hierarchy from h1 through h3 in article content
- Add aria-label to search icon button if using icon-only presentation
- Consider `prefers-reduced-motion` for any geometric background animations

## Scope note

This guide covers the homepage hero, article grid, and blog content pages visible in the supplied images. Footer content, search functionality, navigation dropdown menus, mobile-specific layouts, and animation behavior are not represented. Measurements are practical adaptation targets derived from visual inspection of desktop viewport captures.
