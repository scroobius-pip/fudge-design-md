# How rachelchen.tech is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/rachelchen.tech-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with large Tiempos display type, italic accent, and two-column project grid featuring OpenAI x Hardware and PokerGPT cards](https://pin.fontofweb.com/7300?format=jpg)](https://design.withfudge.com/share/pin-7300)

[Homepage hero with large Tiempos display type, italic accent, and two-column project grid featuring OpenAI x Hardware and PokerGPT cards](https://design.withfudge.com/share/pin-7300)

[![Project case study header with Tiempos serif title, orange-purple gradient hero image, and left sidebar navigation with section anchors](https://pin.fontofweb.com/7301?format=jpg)](https://design.withfudge.com/share/pin-7301)

[Project case study header with Tiempos serif title, orange-purple gradient hero image, and left sidebar navigation with section anchors](https://design.withfudge.com/share/pin-7301)

[![Case study overview section with metadata grid, three-column process breakdown, and problem statement with stack diagram](https://pin.fontofweb.com/7302?format=jpg)](https://design.withfudge.com/share/pin-7302)

[Case study overview section with metadata grid, three-column process breakdown, and problem statement with stack diagram](https://design.withfudge.com/share/pin-7302)

[![Fun page with large display headline, photography grid of hackathon and hardware projects, and monospace category labels](https://pin.fontofweb.com/7303?format=jpg)](https://design.withfudge.com/share/pin-7303)

[Fun page with large display headline, photography grid of hackathon and hardware projects, and monospace category labels](https://design.withfudge.com/share/pin-7303)

## Overview

This design system describes a personal portfolio website for a product designer and engineer. The visual language is deliberately restrained: a near-white canvas supports dark slate typography, with warm orange accents appearing only in navigation active states and select UI moments. The system pairs a refined serif display face with a modern geometric sans-serif for body copy and a monospace face for labels and metadata, creating clear typographic hierarchy without relying on weight variation.

The portfolio structure spans a homepage with project grid, individual case study pages with deep scroll navigation, and supplementary pages showcasing side projects. Each page maintains consistent header navigation and generous whitespace, letting project imagery and typography carry the visual interest. The overall impression is editorial and confident—professional without corporate stiffness.

## Colors

The palette is intentionally minimal, built around high-contrast readability with a single warm accent drawn from image content.

| token | value | use |
|---|---|---|
| ink | #32404F | Primary text, headings, body copy, and interactive elements |
| canvas | #FAFCFD | Page background, card surfaces, and primary container fill |
| surface | #000000 | Hero image overlays, dark media backgrounds, and inverse contexts |

The ink color reads as a warm dark slate rather than pure black, reducing harshness against the cool-tinted canvas. The canvas itself carries an almost imperceptible blue-white cast that keeps the page feeling crisp and contemporary. Black appears only in photographic or media-heavy contexts, such as the hero image overlay on case studies where white text requires maximum contrast. The orange accent visible in navigation active states and small dot indicators near project metadata is drawn from the photographic palette—specifically the warm orange tones in the OpenAI x Hardware gradient hero—rather than defined as a standalone interface token. No gradients, shadows, or borders are defined in the interface system; visual depth comes entirely from typography scale and photography.

## Typography

Four font families appear in the system: Tiempos for display and editorial moments, Geist for interface and body text, Geist Mono for labels and metadata, and Arial which appears in button elements and fallback contexts. Tiempos is designed by Kris Sowersby of Klim Type Foundry. Geist and Geist Mono are designed by Basement Studio and Vercel. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Tiempos | 3.25rem | 400 | 1.1 | -0.02em | Homepage hero headlines, case study titles |
| section-display | Tiempos | 2rem | 400 | 1.2 | -0.02em | Section headings within case studies |
| project-title | Tiempos | 1.0625rem | 400 | 1.5 | -0.02em | Card titles, project names in grids |
| body | Geist | 0.9375rem | 400 | 1.5 | 0em | Paragraph text, descriptions |
| body-large | Geist | 1rem | 400 | 1.5 | 0em | Navigation, larger body contexts |
| label | Geist Mono | 0.9375rem | 400 | 1.5 | 0em | Metadata labels, category tags, captions |
| navigation | Geist | 1rem | 400 | 1.5 | 0em | Primary navigation items |

The system relies on family contrast and size rather than weight variation for hierarchy. Tiempos Regular at large sizes provides elegant, authoritative display type with its slight negative tracking tightening word spacing. Geist at 15px and 16px handles all functional text with clean neutrality. Geist Mono at 15px creates a technical, systematic voice for labels like "HACKATHON" or "CONCEPT 2025" without feeling decorative. Italic Tiempos appears selectively for emphasis within display text, as seen in the homepage hero where "engineers" is set in italic. Arial appears at 16px in button elements, likely serving as a system fallback.

## Layout

The layout system uses a consistent page gutter and generous vertical spacing to create breathing room around content.

**Page structure.** A fixed header navigation spans the full viewport width with horizontal padding of 1.5rem. Below the header, content flows in a single centered column on case study pages or a two-column grid on the homepage. Maximum content width appears to be approximately 1200px, with elements aligning to a shared left margin.

**Grid system.** The homepage project grid uses two equal columns with consistent gap spacing. Case study pages employ a single main column for narrative content, with a left sidebar for section navigation on wider viewports. The sidebar contains anchor links to page sections like Overview, Solution, and Research.

**Spacing scale.** The system uses a 4px base unit:
- 1rem (16px): tight element padding, button internal spacing
- 1.5rem (24px): page gutters, standard content padding
- 2rem (32px): section internal padding, card spacing
- 3rem (48px): major section vertical gaps
- 21.5rem (344px): homepage hero top padding creating dramatic vertical offset

**Responsive approach.** The two-column homepage grid should collapse to single column on narrower viewports. The case study sidebar should either collapse to a horizontal scroll or move above content on mobile. Navigation items may compress to a menu trigger below approximately 768px.

## Visual language

**Photography and imagery.** Project imagery favors large-format photography with soft gradients and product-focused compositions. The OpenAI x Hardware case study uses an abstract orange-to-purple gradient as its hero, suggesting technological warmth and creative exploration. Photography on the fun page shows candid documentary moments—hackathon scenes, hardware prototypes—rather than polished product renders.

**Motion and interaction.** Small orange dots appear near project metadata, functioning as status or category indicators. Navigation items show active state through color change to orange. Buttons use fully rounded pill shapes with no visible border. The overall motion language suggests subtle transitions rather than dramatic effects.

**Iconography.** Minimal icon usage: a small arrow accompanies external links, and simple geometric shapes represent categories. No extensive icon set is visible; the system prefers typographic labels over symbolic communication.

**Surface treatments.** No shadows, borders, or background textures appear on cards or containers. Separation comes from whitespace and typographic hierarchy alone. The occasional light gray background appears for specific content blocks like the strategy breakdown card.

## Components

**Navigation bar**
- Anatomy: Logo/identity left, primary links center-right, external link far right
- Surface: Transparent or canvas background, no border
- Typography: `{typography.navigation}` in ink, active item in orange from image palette
- Spacing: 1.5rem horizontal padding, comfortable vertical height
- Composition: Horizontal flex with space-between alignment

**Project card**
- Anatomy: Full-bleed image top, title and metadata below
- Surface: Canvas background, no border, no shadow
- Typography: Title in `{typography.project-title}`, metadata in `{typography.label}`
- Spacing: Image fills card width, text padding below at 1.5rem
- Composition: Stacked vertical, image aspect ratio approximately 4:3

**Case study hero**
- Anatomy: Full-width media container with centered overlay text
- Surface: Black background with image, white text for contrast
- Typography: Project name in large sans-serif (white), title below in `{typography.hero-display}`
- Shape: No border radius on media container
- Composition: Media fills width, text centered vertically and horizontally

**Metadata grid**
- Anatomy: Four-column layout for role, timeline, team, skills
- Typography: Labels in `{typography.label}` uppercase, values in `{typography.body}`
- Spacing: Generous vertical padding above and below, 3rem typical

**Section anchor navigation**
- Anatomy: Vertical list of section names with active indicator
- Surface: No background, flush left alignment
- Typography: `{typography.body}` in muted gray, active in ink
- Composition: Fixed position on scroll, collapsible on mobile

**Pill button**
- Anatomy: Text-only with generous horizontal padding
- Surface: No background, no border
- Shape: Fully rounded with 9999px radius
- Typography: `{typography.body-large}`
- Spacing: 0.5rem internal padding

## Responsive behavior

The system is designed primarily for desktop viewing. Key responsive adaptations should include:

- Homepage grid collapsing from two columns to single column below 768px
- Case study sidebar moving above content or becoming a horizontal scroll
- Hero display size scaling down from 3.25rem to maintain readability
- Navigation compressing to hamburger menu on narrow viewports
- Metadata grid stacking to two columns then single column

## Practical implementation guidance

### Preserve
- The stark contrast between Tiempos display type and Geist body copy; this pairing defines the site's character
- Generous whitespace, especially the dramatic top padding on the homepage hero
- The restrained accent usage—orange should remain rare and meaningful
- Monospace labels for metadata and categories; this technical voice balances the warmth of Tiempos
- Full-bleed imagery without borders or shadows

### Avoid
- Adding background colors to cards or containers; the flat canvas approach is intentional
- Introducing additional font weights; the system achieves hierarchy through family and size only
- Using pure black (#000000) for text; the warm slate ink is softer and more distinctive
- Decorative borders or dividers; rely on spacing instead
- Shadow effects; the design is explicitly flat

### Recommended build order
1. Establish the typographic system with Tiempos, Geist, Geist Mono, and Arial loaded and configured
2. Implement the color tokens with ink on canvas as the primary pairing
3. Build the navigation component with active state behavior
4. Create the homepage hero with proper vertical offset and two-column grid
5. Develop project card components with image handling and metadata layout
6. Construct case study template with hero, metadata grid, and section navigation
7. Add the accent color only to navigation active states and indicator dots

### Accessibility
- Ensure the warm slate ink (#32404F) on canvas (#FAFCFD) meets WCAG AA contrast ratios; at approximately 7.8:1, it exceeds the threshold
- Provide focus indicators for pill buttons and navigation items; the current design shows no visible focus state
- Consider adding skip navigation for case study pages with lengthy sidebar anchors
- Maintain semantic heading hierarchy: h1 for page titles, h2 for sections, h3 for subsections
- Ensure interactive elements have minimum 44px touch targets when adapted for mobile

## Scope note

This guide covers the homepage, project case study template, and fun/projects listing page. Mobile breakpoints, hover states, form components, loading sequences, and additional project pages are not represented. The spacing scale derives from documented pixel values converted to rem units. Measurements are practical adaptation targets.
