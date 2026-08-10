# How nga.gov is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/nga.gov-design)

Last updated: 2026-08-10

## Captured pages

[![Header with National Gallery of Art wordmark, utility links, and primary navigation on white background](https://pin.fontofweb.com/9275?format=jpg)](https://design.withfudge.com/share/pin-9275)

[Header with National Gallery of Art wordmark, utility links, and primary navigation on white background](https://design.withfudge.com/share/pin-9275)

[![About Us page with large serif heading, bold serif intro paragraph, and three-column image grid](https://pin.fontofweb.com/9274?format=jpg)](https://design.withfudge.com/share/pin-9274)

[About Us page with large serif heading, bold serif intro paragraph, and three-column image grid](https://design.withfudge.com/share/pin-9274)

[![Hero banner with family photo, blue rooster sculpture, white serif title overlay, and jump-to navigation](https://pin.fontofweb.com/9273?format=jpg)](https://design.withfudge.com/share/pin-9273)

[Hero banner with family photo, blue rooster sculpture, white serif title overlay, and jump-to navigation](https://design.withfudge.com/share/pin-9273)

[![Essential tips section with two-column layout, icon headings, and horizontal rule separators](https://pin.fontofweb.com/9272?format=jpg)](https://design.withfudge.com/share/pin-9272)

[Essential tips section with two-column layout, icon headings, and horizontal rule separators](https://design.withfudge.com/share/pin-9272)

## Overview

The National Gallery of Art's digital presence embodies a museum-quality editorial aesthetic that balances institutional gravitas with approachable clarity. The system is built on a stark black-and-white foundation, allowing artwork photography to command full attention while typography establishes hierarchy through contrast between classical serif display faces and modern sans-serif interface elements.

The visual language draws from print editorial traditions: generous whitespace, measured pacing between content sections, and a clear separation between navigational apparatus and content surfaces. Two type families create a deliberate tension—Empirica Headline, a refined serif with sharp contrast and elegant proportions, handles all display and editorial headings, while Mallory Compact, a clean geometric sans, manages navigation, labels, body copy, and interactive elements.

Color operates functionally rather than decoratively. Beyond the monochrome foundation, a vivid blue accent serves wayfinding and interactive states, while magenta and orange appear as secondary accents in specific contexts. The overall effect is one of quiet confidence: the design system recedes so that art and content can advance.

## Colors

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, dark backgrounds, wordmark, primary navigation |
| canvas | #FFFFFF | Page backgrounds, hero text on dark imagery, header surface |
| accent-blue | #4C40FF | Active navigation states, interactive highlights, wayfinding indicators |
| accent-magenta | #D600C5 | Secondary accent for specific interactive or promotional contexts |
| accent-orange | #FF5E21 | Tertiary accent for alerts, tags, or limited promotional use |
| surface-warm | #F7F7F7 | Subtle background variation for footer or alternating sections |
| border-light | #D7D7D7 | Horizontal rules, card borders, subtle dividers |

The color model is intentionally restrained. Black and white dominate all reading surfaces, creating maximum contrast for accessibility and allowing full-bleed photography to exist without chromatic competition. The blue accent (#4C40FF) carries the functional load of indicating state—active navigation items, selected jump-to links, and interactive affordances. This blue appears in navigation underlines as a gradient reveal, suggesting depth and responsiveness without decorative excess.

The warm surface tone (#F7F7F7) appears in the footer and potentially in alternating content bands, providing just enough variation to signal section boundaries without breaking the monochrome discipline. Light borders (#D7D7D7) separate content modules with hairline precision, particularly visible in the icon-card grid where horizontal rules divide stacked information.

When photography fills the viewport, as in hero banners, text reverses to white and often receives additional protection through gradient overlays that darken image edges while preserving center luminosity. This ensures the serif display typography remains legible against varied photographic content.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Empirica Headline | 4.5rem | 600 | 1 | -0.01em | Page titles over imagery, major section headers |
| section-display | Empirica Headline | 3.5rem | 600 | 1 | -0.01em | Content section headings, article titles |
| subhead-display | Empirica Headline | 2rem | 400 | 1.2 | 0em | Card titles, subsection headings, intro paragraphs |
| body-large | Mallory Compact | 1.375rem | 400 | 1.4 | 0em | Primary body copy, navigation, descriptions |
| body | Mallory Compact | 1.375rem | 400 | 1.4 | 0em | Standard paragraphs, lists, general content |
| label | Mallory Compact | 0.875rem | 600 | 1.15 | 0.05em | Jump-to navigation, category labels, uppercase tags |
| navigation-primary | Mallory Compact | 1.375rem | 400 | 1.4 | 0em | Main header navigation, dropdown menus |
| navigation-secondary | Mallory Compact | 1rem | 400 | 1.35 | 0em | Breadcrumbs, footer links, utility navigation |
| button | Mallory Compact | 1.25rem | 500 | 1 | 0em | Interactive buttons, toggle controls |

The typographic system is built on a clear functional division. Empirica Headline, designed by Tobias Frere-Jones and Nina Stössinger and available from Frere-Jones Type, serves all display and editorial purposes. Its Bold weight (rendered at 600) delivers commanding presence at large sizes with tight leading and subtle negative tracking, while its Regular weight (400) handles subheadings and introductory paragraphs with lighter, more open proportions.

Mallory Compact, designed by Tobias Frere-Jones and also available from Frere-Jones Type, manages every interactive and utilitarian text need. The Book weight (400) provides the workhorse body and navigation styles, while Medium (500) elevates button text and active states. Bold (600) appears sparingly for labels and small headings. The compact proportions of Mallory ensure navigation remains legible and scannable even at the small sizes required by dense header structures.

Verify licensing for these families before production use.

## Layout

The layout follows a consistent editorial grid with generous margins and clear content hierarchy. The primary content container maintains horizontal padding of approximately 4.3rem (69px), creating substantial breathing room that frames content against the viewport edges. This padding applies consistently across header, main content, and footer regions.

Vertical rhythm is established through section spacing of 6.25rem, with content modules separated by 3rem to 6.25rem depending on their hierarchical relationship. The jump-to navigation bar sits immediately below hero imagery with minimal vertical padding, creating a compressed transitional band between immersive header and detailed content.

The header occupies a fixed or sticky position with internal padding of 2.5rem top and variable bottom padding depending on content density. Navigation items distribute horizontally with 2.5rem vertical padding and 1.75rem bottom padding, creating generous touch targets while maintaining visual compactness.

Content sections employ flexible grid structures. The icon-card grid visible in the "Essential tips" section uses a two-column layout with internal horizontal rules separating each card's heading from its description. Image grids, as seen on the About Us page, use three-column arrangements with consistent gutter spacing of approximately 1.75rem.

Hero banners employ full-bleed imagery with text positioned in the lower-left quadrant, protected by gradient overlays that transition from transparent at 30% of height to 70% black opacity at 90% of height. This creates a natural reading zone without requiring solid color blocks that would obscure photographic content.

## Visual language

The visual language communicates institutional authority through restraint. Photography dominates the sensory experience—artwork, architectural views, and visitor documentation appear at full scale without decorative frames or shadows. When images accompany navigation cards, they sit flush to container edges with minimal or no border radius, treating the photograph as primary content rather than contained object.

Iconography appears as simple, outlined symbols in accent magenta, functioning as wayfinding markers rather than decorative elements. These icons precede card headings in the content grid, providing quick visual scanning without competing with the serif typography.

The wordmark "National Gallery of Art" receives special treatment as a logotype, set in Empirica Headline at display scale with "National" and "Gallery of Art" potentially receiving weight differentiation. This treatment anchors the header with cultural authority while the sans-serif navigation beneath it handles functional wayfinding.

Interactive states rely on color transition rather than shape change. Navigation links reveal blue underlines through gradient animation, buttons maintain consistent padding with text-color shifts, and the jump-to navigation indicates active sections through accent color alone. This restraint preserves the editorial calm of the overall experience.

## Components

### Site header

- **Anatomy**: Wordmark lockup left-aligned; utility links (hours, directions, animation toggle) right-aligned; primary navigation below with dropdown indicators; search and secondary actions far right
- **Surface**: White background with no border or shadow; black text throughout
- **Typography**: Navigation uses `{typography.navigation-primary}`; utility links use `{typography.navigation-secondary}` at smaller size
- **Spacing**: 2.5rem top padding, 4.3rem horizontal padding; navigation items have 2.5rem top padding and 1.75rem bottom padding
- **Composition**: Flexbox row with space-between alignment; navigation groups cluster left, actions cluster right

### Hero banner

- **Anatomy**: Full-bleed background image; gradient overlay from transparent to dark; serif title and sans-serif subtitle positioned lower-left; optional jump-to navigation bar below
- **Surface**: Image-dependent; gradient overlay provides text protection; text reverses to white
- **Typography**: Title uses `{typography.hero-display}` in white; subtitle uses `{typography.subhead-display}` in white
- **Shape**: No border radius on image; gradient is linear from top to bottom
- **Spacing**: Title positioned with 4.3rem left padding and approximately 3rem bottom padding from image base

### Jump-to navigation

- **Anatomy**: "JUMP TO:" label followed by linked section names; active section indicated by accent color and downward arrow icon
- **Surface**: White background; hairline bottom border in light gray
- **Typography**: Label uses `{typography.label}` in uppercase with wide tracking; links use `{typography.navigation-secondary}`
- **Spacing**: Compressed vertical padding of approximately 1rem; horizontal padding matches content container at 4.3rem
- **Composition**: Horizontal scroll or wrap on narrow viewports; items separated by 2.5rem to 3rem horizontal gaps

### Content section

- **Anatomy**: Section heading in Empirica Headline; optional introductory paragraph; content grid below
- **Surface**: White background default; alternating sections may use warm surface tone
- **Typography**: Heading uses `{typography.section-display}`; intro uses `{typography.subhead-display}` or `{typography.body-large}` depending on hierarchy
- **Spacing**: 6.25rem top margin from previous section; 3rem bottom margin to content grid

### Icon card grid

- **Anatomy**: Two-column grid of cards; each card contains accent-colored icon, serif heading, horizontal rule, and sans-serif description paragraph
- **Surface**: White background; horizontal rules in light gray
- **Typography**: Heading uses `{typography.subhead-display}`; body uses `{typography.body}`
- **Shape**: No card container border or shadow; rules are 1px solid
- **Spacing**: 3.5rem vertical gap between card rows; 1.75rem horizontal gutter; 1.75rem vertical padding within each card zone

### Image navigation card

- **Anatomy**: Full-bleed photograph with serif title below; no overlay or gradient
- **Surface**: Image exposed; title on white background below
- **Typography**: Title uses `{typography.subhead-display}` in black
- **Shape**: No border radius on image
- **Spacing**: Title positioned with 1rem top margin from image bottom

### Footer

- **Anatomy**: Multiple content zones separated by horizontal rules; navigation columns; legal and copyright information
- **Surface**: White or warm surface background; 1px top border in light gray
- **Typography**: Headings use `{typography.label}` or bold sans-serif at 1rem; links use `{typography.navigation-secondary}`
- **Spacing**: Generous vertical padding of 3rem to 3.5rem per zone; 4.3rem horizontal padding

## Responsive behavior

The design prioritizes desktop presentation in the available material. Several responsive adaptations should be considered for implementation:

Navigation should collapse to a hamburger menu at medium breakpoints, preserving the wordmark prominence while conserving viewport height. The primary navigation's horizontal dropdown structure does not translate directly to narrow viewports and requires either accordion expansion or drawer presentation.

Hero banner typography should scale down proportionally, with the 4.5rem title reducing to 2.5rem on small screens to prevent excessive line breaks. The gradient overlay may need strengthening to maintain text legibility when images crop differently.

The two-column icon card grid should stack to single column on narrow viewports, with horizontal rules becoming full-width dividers between stacked cards. Image grids should similarly collapse from three columns to two, then one, with maintained aspect ratios.

Jump-to navigation may require horizontal scroll with fade indicators when section names exceed viewport width, or conversion to a select dropdown on the smallest screens.

## Practical implementation guidance

### Preserve
- The stark black-and-white foundation with restrained accent color application
- The functional separation between Empirica Headline for display and Mallory Compact for interface
- Generous horizontal padding (4.3rem) that frames content with museum-quality whitespace
- Full-bleed photography without decorative borders or shadows
- Gradient text protection on hero imagery rather than solid color blocks
- The specific blue accent (#4C40FF) for all interactive and wayfinding states

### Avoid
- Introducing additional colors beyond the established palette; the system's power comes from restraint
- Using Empirica Headline for body copy or UI elements; its contrast and spacing are optimized for display sizes
- Adding background colors or textures behind content sections; maintain the white canvas discipline
- Decorative drop shadows on cards or navigation; rely on spacing and rules for separation
- Rounding image corners on hero or card photography; keep edges crisp and editorial

### Recommended build order
1. Establish the typographic foundation with Empirica Headline and Mallory Compact loaded at all required weights
2. Implement the header with wordmark, primary navigation, and utility links
3. Build the hero banner component with gradient overlay and positioned text
4. Create the jump-to navigation with active state behavior
5. Develop content section and icon card grid patterns
6. Add footer with multi-zone structure and horizontal rule separators
7. Implement responsive navigation collapse and grid stacking

### Accessibility
- Maintain the 4.5:1 contrast ratio between black text and white backgrounds throughout all body and navigation text
- Ensure hero banner text meets contrast requirements against both light and dark image regions through gradient overlay strength
- Provide visible focus indicators using the accent blue rather than browser defaults
- Support keyboard navigation through all dropdown menus and jump-to links
- Include aria-labels on icon-only buttons such as search and animation toggle
- Respect the `prefers-reduced-motion` media query, particularly for the animation toggle control visible in the header

## Scope note

This guide covers the primary public-facing pages including About Us, Visiting with Kids, and the homepage. Interior pages such as individual event or artwork detail pages, the collection search interface, and e-commerce flows are not represented. Mobile breakpoint behavior, animation specifications beyond the visible toggle control, and form components require additional research.
