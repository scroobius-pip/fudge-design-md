# How tailscale.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/tailscale.com-design)

Last updated: 2026-08-10

## Captured pages

[![Documentation quickstart page with left navigation sidebar, embedded YouTube video, and step-by-step numbered instructions with inline code styling](https://pin.fontofweb.com/2177?format=jpg)](https://design.withfudge.com/share/pin-2177)

[Documentation quickstart page with left navigation sidebar, embedded YouTube video, and step-by-step numbered instructions with inline code styling](https://design.withfudge.com/share/pin-2177)

[![Why Tailscale security section with large heading, body text with underlined inline links, and clean white background with generous line spacing](https://pin.fontofweb.com/2176?format=jpg)](https://design.withfudge.com/share/pin-2176)

[Why Tailscale security section with large heading, body text with underlined inline links, and clean white background with generous line spacing](https://design.withfudge.com/share/pin-2176)

[![Dark green promotional card with geometric shapes, split into free trial CTA with white button and demo scheduling section with dark button on green background](https://pin.fontofweb.com/2175?format=jpg)](https://design.withfudge.com/share/pin-2175)

[Dark green promotional card with geometric shapes, split into free trial CTA with white button and demo scheduling section with dark button on green background](https://design.withfudge.com/share/pin-2175)

[![Why Tailscale hero with large centered display heading, descriptive paragraph with multiple underlined links, and decorative dot grid pattern below](https://pin.fontofweb.com/2174?format=jpg)](https://design.withfudge.com/share/pin-2174)

[Why Tailscale hero with large centered display heading, descriptive paragraph with multiple underlined links, and decorative dot grid pattern below](https://design.withfudge.com/share/pin-2174)

## Overview

Tailscale's design system presents a developer-friendly visual language that balances technical credibility with approachable simplicity. The system centers on a distinctive green accent color that appears across promotional materials, call-to-action elements, and decorative geometric compositions. The overall aesthetic is clean and modern, with generous whitespace, clear typographic hierarchy, and a restrained palette that lets content breathe. The design communicates security and reliability through its structured layouts and understated confidence rather than aggressive visual claims.

The system serves multiple page types: marketing landing pages with hero sections and feature explanations, documentation with sidebar navigation and procedural content, and blog posts with readable long-form text. Across all contexts, the design maintains consistency through shared typography, spacing rhythms, and the signature green accent. The visual approach prioritizes readability and scanability for technical audiences who need to quickly assess information and take action.

## Colors

The color system operates in two primary modes: a light mode for documentation and content pages, and a dark green mode for promotional and call-to-action sections. The light mode uses near-white backgrounds with dark text for maximum readability, while the dark green mode creates visual impact and draws attention to conversion moments.

| token | value | use |
|---|---|---|
| canvas | #FFFFFF | Primary page background, button fills on dark surfaces |
| ink | #1A1A1A | Primary text, headings, body copy |
| muted-ink | #4A4A4A | Secondary text, navigation items, captions |
| surface | #F5F5F5 | Subtle background variations, code blocks |
| action | #3ECF8E | Primary accent, promotional backgrounds, geometric shapes |
| action-hover | #2DB87D | Interactive state for accent elements |
| dark-surface | #0D1F17 | Deep green-black for promotional cards and hero sections |
| dark-action | #2A9D6A | Darker green for secondary accents and hover states |
| border | #E5E5E5 | Dividers, sidebar separators, subtle boundaries |
| link | #1A1A1A | Underlined inline links within body text |

The green accent (#3ECF8E) functions as the brand's signature color, appearing in large geometric shapes on promotional cards, as background fills for call-to-action sections, and in decorative elements. The dark green-black (#0D1F17) provides dramatic contrast for high-priority conversion moments. The neutral palette ensures that content remains legible and professional across all contexts. Links within body text use the ink color with underline styling rather than a distinct link color, maintaining typographic cohesion while indicating interactivity.

## Typography

The system uses Inter as its sole typeface, a variable font designed by Rasmus Andersson and provided by Rsms. For iconography, Md Io Variable by Rutherford Craze of Mass Driver supplies symbolic elements. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 4rem | 700 | 1.1 | -0.02em | Page titles, major marketing headlines |
| section-display | Inter | 2.5rem | 600 | 1.2 | -0.01em | Section headings, feature titles |
| body | Inter | 1rem | 400 | 1.6 | 0 | Paragraph text, descriptions, documentation |
| body-large | Inter | 1.25rem | 400 | 1.5 | 0 | Lead paragraphs, introductory copy |
| label | Inter | 0.875rem | 500 | 1.4 | 0.01em | Buttons, tags, metadata |
| navigation | Inter | 0.875rem | 500 | 1.4 | 0 | Sidebar navigation, menu items |
| code | Inter | 0.875rem | 400 | 1.5 | 0 | Inline code, technical references |

The type scale builds from a 0.25rem relative unit, with sizes at 0.875rem, 1rem, 1.25rem, 2.5rem, and 4rem. Display sizes use tight negative letter spacing for a modern, compact appearance, while body sizes maintain neutral tracking for readability. Weights are restrained: Regular (400) for body and code, Medium (500) for labels and navigation, Semibold (600) for section headings, and Bold (700) for hero display. The system avoids excessive weight variations, relying on size and spacing hierarchy rather than dramatic weight shifts.

## Layout

The layout system follows a content-first approach with generous margins and clear structural divisions. Pages use a maximum content width that centers material comfortably on large screens while maintaining readability.

The documentation layout employs a three-column structure: a fixed left sidebar for navigation, a central content area for primary material, and an optional right sidebar for page-specific navigation or table of contents. The left sidebar uses a vertical navigation tree with expandable sections, indented child items, and clear active-state indication. Content spacing within the documentation uses 1.5rem gaps between major elements, with additional breathing room around embedded media like videos.

Marketing pages use a centered single-column layout for hero sections, with text aligned center and constrained to a readable measure. Below the hero, content may shift to asymmetric or two-column arrangements for feature explanations. The promotional card component splits horizontally or vertically, with text content on one side and decorative geometric shapes on the other.

Section spacing uses 6rem between major content blocks, creating clear visual separation without excessive distance. Internal content gaps of 1.5rem maintain relationship between related elements. The system avoids dense packing; even technical documentation maintains comfortable line lengths and paragraph spacing.

Grid-based decorative elements appear as subtle background patterns, such as the dot grid visible below hero content on marketing pages. These patterns use low-contrast fills and serve as texture rather than competing content.

## Visual language

The visual language communicates technical sophistication through restraint and precision. Geometric shapes—circles, rounded rectangles, and abstract compositions in the signature green—provide the primary decorative vocabulary. These shapes appear in promotional cards, creating a distinctive brand signature that suggests connectivity and network topology without literal illustration.

Photography and video content integrate directly into layouts with full-width treatment, as seen in the documentation quickstart's embedded video. Imagery tends toward practical demonstration rather than abstract lifestyle content, reinforcing the product's utility.

The system employs minimal shadow and depth effects. Elevation is communicated through color contrast and spacing rather than drop shadows. Borders are hairline-thin, used primarily for sidebar dividers and subtle container separation.

Iconography uses simple, geometric symbols consistent with the Md Io Variable family. These appear at small sizes in navigation, buttons, and inline indicators. The visual treatment favors outline and filled geometric forms over detailed illustrations.

Decorative patterns include the dot grid visible on marketing pages, composed of evenly spaced circles with selective filled elements creating subtle visual interest. These patterns use the surface color for unfilled dots and ink for filled accents, maintaining low contrast and avoiding distraction from primary content.

## Components

### Primary button

- **Anatomy**: Text label with optional trailing arrow icon, contained within a rounded rectangle
- **Surface**: White background (#FFFFFF) on dark surfaces, or dark surface background on light contexts
- **Typography**: label token, Medium weight, 0.875rem
- **Shape**: 0.5rem border radius
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Inline-flex with centered content, icon offset slightly to the right of text
- **Variants**: Default with arrow icon; may appear without icon in compact contexts

### Secondary button

- **Anatomy**: Text label within a rounded rectangle
- **Surface**: Dark green-black background (#0D1F17) with white text, or green background with dark text
- **Typography**: label token, Medium weight
- **Shape**: 0.5rem border radius
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Centered text, no icon by default

### Promotional card

- **Anatomy**: Large container split into content area and decorative geometric composition
- **Surface**: Dark green-black (#0D1F17) upper section, bright green (#3ECF8E) lower section or right section
- **Typography**: section-display for headline, body-large for supporting text
- **Shape**: 1rem border radius for outer container
- **Spacing**: 3rem internal padding
- **Composition**: Asymmetric layout with text left-aligned and shapes positioned to the right or bottom
- **Variants**: Single CTA variant with one button; split variant with two action areas

### Navigation sidebar

- **Anatomy**: Vertical list of navigation items with expandable sections and nested child items
- **Surface**: Transparent or subtle off-white background
- **Typography**: navigation token for parent items, body token for child items
- **Shape**: No border radius on individual items
- **Spacing**: Compact vertical spacing between items, with indentation for nested levels
- **Composition**: Left-aligned text with chevron indicators for expandable sections
- **Variants**: Documentation sidebar with deep nesting; marketing site sidebar with flatter structure

### Inline link

- **Anatomy**: Text span with underline decoration
- **Surface**: No background, inherits page color
- **Typography**: body or body-large token, with underline text decoration
- **Composition**: Flows within paragraph text, maintaining baseline with surrounding content
- **Variants**: Standard underline link; may appear in bold weight for emphasis within technical documentation

### Code reference

- **Anatomy**: Inline monospaced text span
- **Surface**: Subtle background tint or no background
- **Typography**: code token, Regular weight
- **Composition**: Inline with body text, using backtick delimiters in rendered output

## Responsive behavior

The design should adapt gracefully across viewport sizes. The documentation sidebar collapses to a hamburger menu or overlay drawer on narrow viewports, with the content area expanding to full width. Marketing page hero text scales down from 4rem to approximately 2.5rem on tablet and 2rem on mobile, maintaining the tight line height and negative letter spacing.

The promotional card's asymmetric layout should stack vertically on narrow screens, with the geometric shapes appearing below the text content rather than beside it. Button widths may expand to full-width on mobile for easier touch interaction.

Navigation items in the sidebar should remain accessible through touch, with adequate tap targets of at least 44px height. The dot grid decorative pattern may reduce in density or hide entirely on narrow viewports to prevent visual clutter.

Content max-width constraints should remain in effect across breakpoints, preventing excessive line lengths that impair readability. Images and embedded video should scale proportionally, maintaining aspect ratio while filling available width.

## Practical implementation guidance

### Preserve
- The distinctive green accent (#3ECF8E) as the primary brand color for promotional moments and decorative elements
- Generous whitespace between sections; the 6rem section spacing contributes significantly to the premium, uncluttered feel
- Tight negative letter spacing on display headings for the modern, compact typographic voice
- Underlined inline links rather than colored link text, maintaining typographic cohesion
- The asymmetric promotional card composition with geometric shapes as a signature brand element

### Avoid
- Adding drop shadows or elevation effects; the system communicates hierarchy through color and spacing
- Using additional accent colors beyond the green family; the restrained palette is intentional
- Dense packing of navigation items; maintain breathing room in sidebar layouts
- Generic placeholder imagery; the system favors practical demonstration content or abstract geometric decoration

### Recommended build order
1. Establish the typography scale with Inter at all specified sizes and weights
2. Implement the color tokens, ensuring the green accent and dark green-black are available
3. Build the documentation layout with three-column structure and collapsible sidebar
4. Create the promotional card component with geometric shape decoration
5. Implement button components with primary and secondary variants
6. Add marketing page layouts with centered hero sections and dot grid patterns
7. Refine responsive behavior for sidebar collapse and promotional card stacking

### Accessibility
- Ensure the green accent on white meets WCAG AA contrast ratios for text; the bright green may need darkening for small text use
- Provide visible focus indicators for all interactive elements, particularly navigation items and buttons
- Maintain semantic heading hierarchy across page types, with hero-display as h1 and section-display as h2
- Ensure sidebar navigation is keyboard accessible with proper expand/collapse behavior
- Consider adding skip links for documentation pages with extensive navigation
- Test color contrast in the dark green promotional sections; white text on #0D1F17 should exceed AA requirements

## Scope note

This guide covers the marketing and documentation surfaces visible in the supplied images, including the homepage, Why Tailscale, documentation quickstart, and related promotional components. Mobile layouts, animation behavior, form components beyond buttons, and dark mode variations are not represented in the available material. Measurements are practical adaptation targets derived from visual inspection.
