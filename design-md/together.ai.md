# How together.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/together.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Dark-themed code interpreter page with syntax-highlighted Python examples and blue accent headings](https://pin.fontofweb.com/6850?format=jpg)](https://design.withfudge.com/share/pin-6850)

[Dark-themed code interpreter page with syntax-highlighted Python examples and blue accent headings](https://design.withfudge.com/share/pin-6850)

[![Light-themed product page hero with LLM workflow diagram and blue pill-shaped CTA button](https://pin.fontofweb.com/6849?format=jpg)](https://design.withfudge.com/share/pin-6849)

[Light-themed product page hero with LLM workflow diagram and blue pill-shaped CTA button](https://design.withfudge.com/share/pin-6849)

[![Expanded navigation mega-menu showing product categories and model cards on light background](https://pin.fontofweb.com/6848?format=jpg)](https://design.withfudge.com/share/pin-6848)

[Expanded navigation mega-menu showing product categories and model cards on light background](https://design.withfudge.com/share/pin-6848)

[![Bold blue banner with oversized typography reading START BUILDING YOURS HERE with geometric shapes](https://pin.fontofweb.com/6847?format=jpg)](https://design.withfudge.com/share/pin-6847)

[Bold blue banner with oversized typography reading START BUILDING YOURS HERE with geometric shapes](https://design.withfudge.com/share/pin-6847)

## Overview

Together AI's visual system is built for technical credibility and developer trust. The design alternates between warm off-white surfaces and deep charcoal backgrounds, using electric blue as a consistent accent for calls-to-action, syntax highlighting, and interactive states. The typography relies on Aeonik, a precise geometric sans-serif, with Aeonik Fono serving as a distinctive monospace-style variant for labels and technical annotations. The result is a clean, engineering-forward aesthetic that feels both approachable and authoritative.

The system supports two primary modes: a light mode with warm paper-like backgrounds for product marketing and documentation, and a dark mode with near-black surfaces for code-heavy and immersive experiences. Both modes maintain high contrast ratios and consistent spacing rhythms. The visual language emphasizes clarity through generous whitespace, restrained color application, and deliberate typographic hierarchy that scales from micro-labels to oversized display treatments.

## Colors

| token | value | use |
|---|---|---|
| action | #0F6FFF | Primary buttons, links, active states, syntax accents |
| action-hover | #217AFF | Button hover and focus states |
| ink | #13171B | Primary text on light backgrounds, dark mode backgrounds |
| ink-secondary | #1F232E | Code block backgrounds, elevated dark surfaces |
| muted-ink | #323745 | Secondary text, inactive navigation items |
| muted-ink-secondary | #626E7F | Tertiary text, metadata, captions |
| canvas | #F1EFED | Primary page background in light mode |
| canvas-warm | #F9FAFB | Subtle surface variation, card backgrounds |
| surface | #FFFFFF | Cards, dropdowns, elevated panels |
| surface-inverse | #000000 | Hero sections, maximum contrast areas |
| border | #D3D1D1 | Dividers, card outlines, input borders |
| border-subtle | #DFDDDC | Hairline separators, inactive states |
| text-inverse | #FFFFFF | Text on dark or action backgrounds |
| text-muted | #7C7C7C | Disabled text, placeholders |
| code-string | #A8FF60 | Syntax highlighting for strings |
| code-keyword | #C6C5FE | Syntax highlighting for keywords |
| code-comment | #C5C8C6 | Syntax highlighting for comments |
| syntax-blue | #237CFF | Additional syntax accent |

The light mode palette centers on warm off-white (#F1EFED) as the canvas, with near-black (#13171B) for primary text. Electric blue (#0F6FFF) serves as the singular accent color, appearing in buttons, links, highlighted keywords, and interactive elements. Dark mode inverts this relationship, using #13171B or #000000 as the background with #F1EFED or #FFFFFF for text. The syntax highlighting system uses a restrained set of semantic colors—green for strings, lavender for keywords, gray for comments—maintaining readability against dark code block surfaces.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Aeonik | 7rem | 400 | 0.82 | -0.02em | Homepage hero headlines, maximum impact statements |
| section-display | Aeonik | 4.5rem | 400 | 1 | -0.02em | Section headlines, blog post titles |
| feature-heading | Aeonik | 2.5rem | 400 | 1.1 | -0.02em | Feature titles, sub-section headings |
| body-large | Aeonik | 1.75rem | 400 | 1.2 | -0.02em | Lead paragraphs, hero descriptions |
| body | Aeonik | 1rem | 400 | 1.5 | normal | Primary body text, navigation, UI labels |
| body-small | Aeonik | 0.875rem | 400 | 1.5 | normal | Secondary descriptions, metadata |
| label | Aeonik Fono | 0.875rem | 400 | 1.5 | normal | Button text, badges, technical labels |
| label-large | Aeonik Fono | 1rem | 400 | 1.2 | normal | Featured labels, category tags |
| code | System-Monospace | 0.875rem | 400 | 1.5 | normal | Code blocks, inline syntax, API references |
| micro | Aeonik | 0.625rem | 400 | 1.5 | normal | Fine print, data visualization labels |

Aeonik, designed by Mark Bloom and Joe Leadbeater and available from Co Type Foundry, serves as the primary typeface across all weights and sizes. Aeonik Fono, a monospace-influenced variant designed by Mark Bloom, provides technical character for labels and code-adjacent text. System-Monospace handles actual code rendering. Verify licensing for these families before production use.

The type scale is built on a 2px relative unit, with sizes snapping to whole multiples. Display sizes use tight negative tracking (-0.02em) and aggressive line-height compression (0.82 for hero), while body text maintains comfortable 1.5 line-height for extended reading. The contrast between oversized display treatments and precise label typography creates a clear information hierarchy.

## Layout

The layout system uses a consistent 2rem (32px) horizontal gutter across all breakpoints, with content constrained to a centered maximum width. Sections stack vertically with generous padding that scales by importance: standard sections receive 6rem vertical padding, feature sections receive 7.5rem, and hero areas extend to 18.75rem for dramatic whitespace.

The grid is fundamentally single-column for content with occasional two-column splits for feature explanations paired with code examples. Navigation spans full-width with internal flex distribution. The mega-menu dropdown uses a multi-column grid with categorized sections—Products, Code Execution, Tools, Models—each with icon-led list items.

Spacing follows a 2px base unit, with semantic tokens aggregating common combinations. Component spacing ranges from 0.5rem for tight internal padding to 2rem for card interiors. Section spacing starts at 4rem for compact areas and extends to 18.75rem for homepage hero zones. Margins between typographic elements follow a 1.5rem baseline for headings and 1.25rem for paragraphs.

## Visual language

The visual language balances technical precision with approachable warmth. Geometric elements—circles, pills, and perfect rectangles—dominate the component vocabulary. The blue accent color appears with discipline: always #0F6FFF for interactive elements, never diluted across decorative surfaces. Photography and illustration are absent from the core UI; instead, the system relies on typographic scale, code syntax highlighting, and diagrammatic graphics to communicate technical concepts.

Iconography uses simple line styles or filled geometric shapes, often paired with Aeonik Fono labels. The workflow diagrams on product pages use circular nodes connected by implied relationships, with blue-filled circles for active states and outlined rectangles for process steps. The "START BUILDING YOURS HERE" banner demonstrates the system's capacity for expressive typographic composition—oversized letterforms mixed with solid and outlined geometric shapes on a full-bleed blue field.

Code presentation is a first-class citizen. Code blocks use dark surfaces (#1F232E) with syntax highlighting in green, lavender, and gray against the dark ground. Line numbers and copy controls sit in the block header. The contrast between warm marketing pages and cool technical surfaces creates clear context switching for users.

## Components

### Primary button
- **Anatomy**: Text label centered within a pill-shaped container
- **Surface**: Solid #0F6FFF background with #FFFFFF text
- **Typography**: Aeonik Fono at 0.875rem, weight 400
- **Shape**: Full pill border-radius (9999px)
- **Spacing**: 0.5625rem vertical, 2rem horizontal padding
- **Composition**: Inline-flex with centered content
- **Variants**: Inverse variant uses #000000 background; outline variant uses transparent background with #D3D1D1 border

### Secondary button
- **Anatomy**: Text label within outlined pill container
- **Surface**: Transparent background with #D3D1D1 border, #13171B text
- **Typography**: Aeonik Fono at 0.875rem
- **Shape**: Full pill border-radius
- **Spacing**: 0.5625rem vertical, 2rem horizontal padding

### Navigation bar
- **Anatomy**: Logo left, category links center, utility actions right
- **Surface**: Transparent or #F1EFED background depending on page mode
- **Typography**: Aeonik at 1rem, weight 400 for links
- **Composition**: Flex row with 2rem horizontal page gutter
- **Variants**: Dark mode uses #13171B background with #F1EFED text; includes pill-shaped search/CTA container with #D3D1D1 border

### Mega-menu dropdown
- **Anatomy**: Four-column grid with category headers, icon-led links, and model cards
- **Surface**: #FFFFFF background with #D3D1D1 border, subtle shadow (0 1.25rem 2.5rem rgba(0,0,0,0.08))
- **Typography**: Category headers in Aeonik at 1rem; items in Aeonik at 0.875rem with #626E7F descriptions
- **Shape**: 1rem bottom border-radius, 0 top border-radius
- **Composition**: Fixed-position overlay spanning content width

### Code block
- **Anatomy**: Dark container with line numbers, syntax-highlighted content, and copy button
- **Surface**: #1F232E background
- **Typography**: System-Monospace at 0.875rem; strings in #A8FF60, keywords in #C6C5FE, comments in #C5C8C6
- **Shape**: 0.75rem border-radius
- **Spacing**: 0.75rem vertical, 1.25rem horizontal padding
- **Composition**: Relative positioning with absolute copy control in upper right

### Feature section (two-column)
- **Anatomy**: Heading and description left, code example or diagram right
- **Surface**: Transparent or #13171B background depending on mode
- **Typography**: Feature heading in Aeonik at 2.5rem; body in Aeonik at 1rem
- **Spacing**: 6rem to 7.5rem vertical section padding
- **Composition**: Asymmetric two-column grid with generous gap

### Testimonial card
- **Anatomy**: Company logo, quote text, attribution
- **Surface**: #F1EFED background with #DFDDDC border
- **Typography**: Quote in Aeonik at 1.75rem; attribution in Aeonik at 1rem
- **Shape**: 0.75rem border-radius
- **Spacing**: 2.5rem padding

### Workflow diagram
- **Anatomy**: Vertical stack of circular nodes connected to rectangular process steps
- **Surface**: Blue-filled circles (#0F6FFF) with #FFFFFF text; outlined rectangles with #13171B text
- **Typography**: Aeonik at 1rem for labels
- **Composition**: Flex row with circular nodes left and rectangular steps right

## Responsive behavior

The design targets desktop as the primary experience, with a content maximum width centered in the viewport. The 2rem horizontal gutter remains constant. Typography scales down proportionally for smaller viewports: hero-display reduces from 7rem toward 4.5rem, section-display from 4.5rem toward 2.5rem. The two-column feature layout should stack to single-column on narrow viewports, with code examples following descriptive text. Navigation collapses to a hamburger menu or simplified link list when space is constrained. The mega-menu should become a full-screen overlay on mobile rather than a multi-column dropdown.

## Practical implementation guidance

### Preserve
- The strict alternation between warm off-white and deep charcoal backgrounds—this temperature contrast defines the brand
- Aeonik Fono for all button labels and technical annotations; it provides distinctive character without sacrificing readability
- The single blue accent (#0F6FFF) used with discipline; avoid introducing secondary accent colors
- Generous section padding (6rem minimum) to maintain the airy, confident pacing
- Syntax highlighting colors exactly as specified for code blocks

### Avoid
- Gradients or decorative background patterns; the system relies on solid color fields
- Multiple accent colors; the blue is intentionally singular
- Tight line-height on body text; reserve compression for display sizes only
- Border-radius values between pill and card; use the semantic tokens (9999px, 0.75rem, 1rem) rather than arbitrary intermediates
- Generic sans-serif fallbacks; Aeonik's geometric precision is essential to the character

### Recommended build order
1. Establish the color tokens and mode-switching logic (light/dark)
2. Implement the type scale with Aeonik and Aeonik Fono at all specified sizes
3. Build the navigation component with transparent and dark variants
4. Create the button system (primary, secondary, inverse) with consistent pill shaping
5. Implement code block rendering with syntax highlighting
6. Build section layouts with proper vertical rhythm and two-column splits
7. Add the mega-menu with categorized grid structure
8. Polish with workflow diagrams and testimonial cards

### Accessibility
- Maintain minimum 4.5:1 contrast for all body text; the #13171B on #F1EFED pairing exceeds this
- Ensure #0F6FFF on #FFFFFF meets contrast requirements for button text (it does at normal sizes)
- Provide focus indicators that match the blue accent color
- Code blocks should support keyboard selection and screen reader announcement of syntax structure
- Respect `prefers-reduced-motion` for any animated transitions between sections

## Scope note

This guide covers the homepage, product pages, and blog post surfaces visible in the supplied images. Mobile breakpoints, form validation states, loading skeletons, and animation specifications are not included. The footer, pricing tables, and documentation interior pages are not represented in the current material. Verify licensing for Aeonik and Aeonik Fono before production use.
