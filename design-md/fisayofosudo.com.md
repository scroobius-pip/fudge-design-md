# How fisayofosudo.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/fisayofosudo.com-design)

Last updated: 2026-08-10

## Captured pages

[![Orange newsletter section with bold black display type, email input field, and social icon row on grid background](https://pin.fontofweb.com/2985?format=jpg)](https://design.withfudge.com/share/pin-2985)

[Orange newsletter section with bold black display type, email input field, and social icon row on grid background](https://design.withfudge.com/share/pin-2985)

[![Press coverage list with publication logos, dates, and external-link arrows on pale grid background](https://pin.fontofweb.com/2984?format=jpg)](https://design.withfudge.com/share/pin-2984)

[Press coverage list with publication logos, dates, and external-link arrows on pale grid background](https://design.withfudge.com/share/pin-2984)

[![Yellow projects grid with six media cards showing thumbnails and diagonal arrow links](https://pin.fontofweb.com/2983?format=jpg)](https://design.withfudge.com/share/pin-2983)

[Yellow projects grid with six media cards showing thumbnails and diagonal arrow links](https://design.withfudge.com/share/pin-2983)

[![Brand partner logos in horizontal strip with thin vertical dividers on white grid background](https://pin.fontofweb.com/2982?format=jpg)](https://design.withfudge.com/share/pin-2982)

[Brand partner logos in horizontal strip with thin vertical dividers on white grid background](https://design.withfudge.com/share/pin-2982)

## Overview

This design system captures the visual language of a personal brand and portfolio website built around bold typographic presence, high-contrast section backgrounds, and a consistent grid motif that runs across every surface. The site alternates between warm neutral, vivid orange, and bright yellow section backgrounds, creating a rhythmic progression that keeps long pages visually engaging without relying on photography or illustration as the primary design element. Typography is the dominant voice: oversized, tightly tracked display headings in a single geometric sans-serif family establish hierarchy immediately, while body text stays restrained and highly legible. The grid pattern that appears behind all content reinforces a technical, precise personality—suggesting planning, measurement, and creative production. Components are modular and repeatable, from press-mention cards to project thumbnails, each sharing common border treatments, corner radii, and arrow-link conventions. The overall impression is confident, contemporary, and deliberately structured, with enough color variation to prevent monotony while maintaining strong brand coherence.

## Colors

The palette is intentionally small and high-contrast, built around three distinct section backgrounds that create clear territorial boundaries between content types. Black serves as the universal ink color for text, borders, and icons, while white surfaces provide relief and readability against the more saturated backgrounds.

| token | value | use |
|---|---|---|
| canvas | `#F3F0E6` | Primary neutral background for press, brands, and general content sections |
| canvas-warm | `#E85D04` | Newsletter and subscription section background |
| canvas-bright | `#FFB703` | Projects and featured work section background |
| ink | `#000000` | All text, borders, icons, and UI chrome |
| surface | `#FFFFFF` | Card backgrounds, input fields, and elevated content containers |
| border | `#000000` | Card outlines, dividers, input borders, and hairline separators |

The three canvas colors create a warm progression from neutral cream through burnt orange to saturated yellow. This sequence appears to follow the page flow: neutral sections for credibility and information (press, brands), warm orange for conversion and community building (newsletter), and bright yellow for creative output and energy (projects). Black ink against all three backgrounds maintains consistent readability without requiring inverted text colors. White surfaces appear only as card fills and input fields, never as full section backgrounds, which keeps the page feeling grounded and intentional rather than defaulting to conventional white-page design.

## Typography

The entire typographic system relies on Space Grotesk, designed by Florian Karsten and distributed by Florian Karsten. The design facts identify three specific family labels: Space Grotesk-300, Space Grotesk-500, and Space Grotesk-600, alongside the base Space Grotesk family. These correspond to Light, Medium, and Semibold weights respectively. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Space Grotesk | 6rem | 700 | 0.9 | -0.03em | Primary page headlines, newsletter lockup |
| section-display | Space Grotesk | 3rem | 700 | 1 | -0.02em | Section titles, "In The Press", "Our Projects" |
| body | Space Grotesk | 1rem | 400 | 1.5 | 0em | Descriptions, card captions, form helper text |
| body-light | Space Grotesk-300 | 1rem | 300 | 1.5 | 0em | Lighter body text for subtle hierarchy |
| label | Space Grotesk-500 | 1rem | 500 | 1.2 | 0.02em | Dates, metadata, small UI labels |
| navigation | Space Grotesk-600 | 1rem | 600 | 1 | 0.05em | Footer links, category labels, uppercase treatments |

The display hierarchy is extreme: hero-display at 6rem creates an almost poster-like impact, while section-display at half that size maintains presence without competing. Negative tracking on both display sizes is essential to the tight, engineered feel. Body text remains neutral and readable at 1rem with generous line height. The body-light token provides a lighter weight alternative using Space Grotesk-300 for instances where subtle differentiation is needed without size change. The label token uses Space Grotesk-500 for medium-weight emphasis on dates and metadata. The navigation token uses Space Grotesk-600 with uppercase treatment and wide tracking for footer categories like "CAREERS", "BLOG", "CONTACT", "LINKS". No italic styles are employed; emphasis comes entirely from weight and size contrast.

## Layout

The layout is built on a visible grid system that serves as both structural guide and decorative texture. Grid lines are subtle, appearing as thin hairlines that divide the background into regular squares without overwhelming content. This grid is present across all visible sections, suggesting a consistent underlying measurement system.

Content is organized in full-width sections with generous vertical padding, typically 6rem or more, creating breathing room between the high-contrast background color zones. Horizontal margins are substantial, keeping content centered and focused. The maximum content width appears to be around 80rem, with narrower text blocks for readability.

The press section uses an asymmetric two-column layout: a sticky or fixed left column carries the section title and description, while the right column scrolls through a vertical stack of press cards. This creates a magazine-like reading experience where context stays visible while content moves.

The projects section uses a strict three-column grid of equal-width cards with consistent 1.5rem gaps. Cards are uniform in height within each row, creating a clean masonry-like appearance without actual masonry complexity.

The brand strip at the bottom uses a horizontal scroll or marquee-style arrangement, with vertical dividers separating each logo cell. This creates a ticker-tape effect that suggests ongoing activity and breadth of partnership.

## Visual language

The visual language is defined by three repeating motifs: the grid, the arrow, and the rounded rectangle. The grid background appears on every section, unifying the page across color changes. It reads as technical and precise, reinforcing the creator's identity as someone who plans and executes with care.

Arrows appear consistently as diagonal external-link indicators, always pointing up and to the right. They appear on press cards, project cards, and the newsletter submit button, creating a vocabulary of outward motion and connection. These arrows are simple line icons, not filled shapes, maintaining the lightweight technical aesthetic.

Rounded rectangles define every interactive and content container. Cards, input fields, buttons, and social icon buttons all share the same family of corner radii—large enough to feel friendly and contemporary, never so large as to become pills or circles. The consistency of this rounding across all elements creates a soft precision that balances the hard grid lines.

Social presence is handled through a row of square icon buttons with rounded corners, each containing a platform logo in black on white. This treatment matches the card aesthetic and keeps the footer feeling like a continuation of the design system rather than an afterthought.

Photography and thumbnails within cards use the full card width, with no internal padding between image and card edge, creating immersive preview images that break the grid momentarily before the card border reasserts structure.

## Components

### Newsletter section

- **Anatomy**: Centered lockup with oversized headline, subheadline paragraph, email input with integrated submit button, and footer area with social links and navigation
- **Surface**: Full-bleed warm orange background (`{colors.canvas-warm}`) with visible grid overlay
- **Typography**: Headline uses `{typography.hero-display}` in black; subheadline uses `{typography.body}` in black; submit button uses `{typography.label}` uppercase
- **Shape**: Input field is a long rounded rectangle with `{rounded.input}` corners; submit button is attached to the right end of the input, sharing the same height and corner radius on its outer edge
- **Spacing**: Generous vertical padding above and below the lockup; input field sits below the text block with comfortable margin
- **Composition**: Centered alignment for all elements; headline breaks across two lines with trademark symbol superscript

### Press card

- **Anatomy**: Horizontal card with publication logo thumbnail, vertical divider, publication name, date, article title, and diagonal arrow link
- **Surface**: White card background (`{colors.surface}`) with black border (`{colors.border}`); no shadow
- **Typography**: Publication name uses `{typography.section-display}` at reduced size or `{typography.label}` scaled up; date uses `{typography.label}`; article title uses `{typography.body}`
- **Shape**: `{rounded.card}` corners; thin vertical divider between logo and text content
- **Spacing**: Internal padding of approximately 1.5rem; logo thumbnail is square or slightly rectangular
- **Composition**: Left-aligned content with arrow positioned at the far right, vertically centered

### Project card

- **Anatomy**: Vertical card with full-width thumbnail image, project title, and diagonal arrow link
- **Surface**: White card background (`{colors.surface}`) with black border (`{colors.border}`)
- **Typography**: Title uses `{typography.body}` at medium weight; no additional description visible
- **Shape**: `{rounded.card}` corners; image fills top portion with no internal border radius clipping visible
- **Spacing**: Title and arrow in a horizontal row at the bottom with padding matching press cards
- **Composition**: Three-column grid with equal widths and consistent gaps

### Brand strip

- **Anatomy**: Horizontal sequence of brand logos separated by thin vertical dividers
- **Surface**: Neutral cream background (`{colors.canvas}`) with grid overlay
- **Typography**: Section title above uses `{typography.section-display}`
- **Shape**: No card containers; logos sit directly on background with vertical hairline dividers
- **Spacing**: Logos centered within invisible cells; dividers extend full height of strip
- **Composition**: Single row, potentially scrolling or marquee behavior

### Social icon button

- **Anatomy**: Square button with platform icon centered
- **Surface**: White background (`{colors.surface}`) with black border (`{colors.border}`)
- **Typography**: None; icon only
- **Shape**: `{rounded.icon-button}` corners
- **Spacing**: Buttons arranged in horizontal row with consistent gap
- **Composition**: Equal sizing across all platforms; icons in black

## Responsive behavior

The three-column project grid should collapse to two columns on tablet widths and single column on mobile, maintaining card proportions and internal spacing. The press section's two-column layout should stack on smaller screens, with the section title moving above the card list rather than remaining fixed to the left.

The newsletter input field and button should stack vertically on narrow screens, with the button becoming full-width below the input. The brand strip may require horizontal scrolling or a wrapped multi-row layout on mobile to maintain logo legibility.

Display type sizes should scale down proportionally: hero-display from 6rem to approximately 3rem on mobile, section-display from 3rem to 2rem. The grid background pattern should remain visible but may become finer or less prominent on smaller screens to avoid visual noise.

## Practical implementation guidance

### Preserve
- The extreme size contrast between display and body type; this is the system's primary personality
- The consistent grid background across all section colors; removing it would flatten the design
- The black-only ink color; do not introduce gray text for "softer" hierarchy
- The rounded rectangle as the sole container shape language
- The diagonal arrow as the consistent external-link indicator

### Avoid
- Adding shadows to cards; the system relies on borders and color contrast for definition
- Using additional font families; the single-family constraint is essential to the technical aesthetic
- Introducing gradient backgrounds; the flat, bold color blocks are intentional
- Making cards fully circular or pill-shaped; the current rounding is calibrated to feel precise but friendly

### Recommended build order
1. Establish the grid background pattern as a reusable overlay or pseudo-element
2. Implement the type scale with Space Grotesk at all weights
3. Build the section color system with the three canvas tokens
4. Create the card component with consistent border, radius, and padding
5. Implement the press card with its asymmetric two-column section layout
6. Build the project grid with three-column responsiveness
7. Add the newsletter section with integrated input-button pattern
8. Polish with arrow icons and social button row

### Accessibility
- Ensure the warm orange (`#E85D04`) and bright yellow (`#FFB703`) backgrounds meet contrast requirements with black text; both appear to satisfy WCAG AA for large text but should be verified for body copy sizes
- The grid background pattern should not interfere with text readability; consider reducing opacity or removing it if user testing shows distraction
- Arrow icons should have accessible labels indicating "external link" or the destination name
- The email input should have a visible focus state distinct from the default border, likely a thicker black outline or inverted colors
- Social icon buttons need aria-labels with platform names

## Scope note

This guide covers the homepage and blog page surfaces visible in the supplied images, including the newsletter, press, projects, and brand partnership sections. Navigation behavior, mobile menu patterns, form validation states, hover and focus effects, page transitions, and any interior blog post layouts are not represented in the available material. Measurements are practical adaptation targets derived from visual inspection against a 4px relative unit grid.
