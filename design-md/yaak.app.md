# How yaak.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/yaak.app-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with gradient headline, download button, feature cards, and API client screenshot on dark background](https://pin.fontofweb.com/3867?format=jpg)](https://design.withfudge.com/share/pin-3867)

[Hero section with gradient headline, download button, feature cards, and API client screenshot on dark background](https://design.withfudge.com/share/pin-3867)

[![Testimonials grid with nine social proof cards showing developer quotes on dark purple background](https://pin.fontofweb.com/3868?format=jpg)](https://design.withfudge.com/share/pin-3868)

[Testimonials grid with nine social proof cards showing developer quotes on dark purple background](https://design.withfudge.com/share/pin-3868)

[![Changelog section with version badges, release notes list, and outlined roadmap button](https://pin.fontofweb.com/3869?format=jpg)](https://design.withfudge.com/share/pin-3869)

[Changelog section with version badges, release notes list, and outlined roadmap button](https://design.withfudge.com/share/pin-3869)

## Overview

Yaak's landing page presents a developer-focused API client through a dark, immersive visual environment. The design prioritizes technical credibility and modern aesthetics, using a deep purple-navy canvas as the foundation for all content. The page structure flows from a commanding hero section through feature highlights, social proof, and release history, maintaining visual consistency through disciplined use of color, typography, and spacing.

The visual identity centers on gradient-accented headlines that shift between warm and cool tones—yellows, greens, and cyans—creating energy against the dark background without overwhelming the technical content. UI screenshots are presented as realistic product previews rather than stylized illustrations, reinforcing the tool's practical utility. The overall impression is of a polished, opinionated product made by developers for developers: minimal decoration, maximum clarity, with subtle depth created through layered surfaces and strategic accent color.

## Colors

The color system operates on a dark-first principle with a limited, purposeful accent palette. All interface colors derive from the deep canvas and surface layers, with text contrast ensured through careful luminance separation.

| token | value | use |
|---|---|---|
| canvas | `#1a1625` | Page background, deepest layer |
| surface | `#252236` | Feature cards, secondary containers |
| surface-raised | `#2d2a3e` | Testimonial cards, elevated panels |
| ink | `#e8e6f0` | Primary text, headings, body copy |
| ink-muted | `#9b96b0` | Secondary text, descriptions, metadata |
| accent-blue | `#5ba3e0` | Version badges, links, interactive highlights |
| accent-cyan | `#4ecdc4` | Gradient transitions, code elements |
| accent-green | `#4ade80` | Success states, gradient headlines, positive indicators |
| accent-yellow | `#facc15` | Gradient headlines, emphasis text |
| accent-pink | `#f472b6` | Gradient headlines, social proof emphasis |
| accent-purple | `#a855f7` | Primary action buttons, brand moments |
| action-primary | `#7c3aed` | Download buttons, main CTAs |
| action-primary-hover | `#8b5cf6` | Button hover states |
| border-subtle | `#3d3852` | Card borders, dividers, hairline separators |

The dark canvas creates a focused reading environment that lets colorful UI screenshots and gradient typography stand out. Accent colors appear primarily in gradient combinations within headlines rather than as solid blocks, preserving the dark atmosphere while adding visual interest. The blue accent serves functional roles in badges and links, while purple anchors the primary action system. Green, yellow, pink, and cyan cycle through headline gradients to mark different page sections with distinct emotional tones—green for growth and improvement, pink for community warmth, yellow for energy and innovation.

## Typography

The type system uses a single sans-serif family with weight and size variation to establish hierarchy. Display text is bold and tightly tracked, while body text maintains comfortable readability through generous line height.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 4rem | 700 | 1.1 | -0.02em | Main page headline |
| section-display | Inter | 3rem | 700 | 1.15 | -0.02em | Section headings |
| body-large | Inter | 1.25rem | 400 | 1.6 | 0 | Hero descriptions, lead paragraphs |
| body | Inter | 1rem | 400 | 1.6 | 0 | Card text, general content |
| label | Inter | 0.875rem | 500 | 1.4 | 0.01em | Buttons, navigation, badges |
| caption | Inter | 0.75rem | 400 | 1.5 | 0.02em | Version numbers, metadata |

Display headlines employ italic styling for emphasized words within the gradient treatment, creating a dynamic rhythm that breaks the monotony of bold sans-serif text. The italic words receive the full gradient color treatment while surrounding words remain in neutral ink, directing attention to key messaging. Body text stays in regular weight with neutral tracking, ensuring readability for longer descriptive passages. Labels and captions use medium and regular weights respectively, with slightly positive tracking to compensate for smaller sizes.

Verify licensing for these families before production use.

## Layout

The page employs a centered, single-column layout with content constrained to a comfortable reading width. Sections stack vertically with generous vertical rhythm, creating clear separation between thematic areas.

The hero section occupies the full viewport height with centered content: a pill-shaped announcement badge sits above the main headline, followed by description text, paired action buttons, platform availability note, and a three-column feature card row. Below this, a large product screenshot extends to the edges of the content area, demonstrating the actual application interface.

Content sections maintain consistent horizontal padding and a maximum width that keeps line lengths readable. The testimonials section breaks into a three-column grid of equal-height cards, with each card containing an avatar, name, source icon, and quote text. The changelog section returns to a centered, narrow column with a vertical list of version entries.

Spacing follows a modular scale based on quarter-rem increments. Section breaks use 6rem of vertical space to create dramatic pauses between content areas. Within components, 1.5rem provides comfortable internal padding, while 1rem separates related elements and 0.5rem handles tight groupings like badge text and icon pairs.

## Visual language

The visual language balances technical precision with approachable warmth. The dark environment evokes code editors and developer tools, establishing immediate audience rapport. Against this backdrop, gradient typography introduces organic color movement that prevents the page from feeling sterile.

Gradients flow horizontally across italicized words in headlines, typically transitioning between two or three accent colors. The hero headline shifts from yellow through green to cyan, while section headlines use context-appropriate pairings like pink to neutral for testimonials. These gradients are smooth and saturated, creating luminous effects against the dark canvas.

Product screenshots are presented with realistic fidelity—actual application chrome with colored traffic lights, sidebar navigation, code editors, and response panels. This transparency about the product's appearance builds trust more effectively than abstract illustrations would. The screenshots include syntax highlighting with the same accent colors used elsewhere, creating visual continuity between marketing and product.

Iconography appears sparingly, primarily as small functional indicators: download arrows, external link markers, platform logos, and feature icons. These use the ink color at muted opacity or inherit accent colors when interactive.

## Components

### Primary action button

The main call-to-action uses a filled purple surface with white text and a small download icon. A secondary metric badge—showing download count—sits inline within the button, differentiated by a slightly lighter purple background. The button has rounded corners and comfortable padding, with a subtle hover state that lightens the purple.

- Anatomy: Icon, label text, inline metric badge
- Surface: `{colors.action-primary}` background, `{colors.ink}` text
- Typography: `{typography.label}`
- Shape: `{rounded.button}` border radius
- Spacing: `{spacing.comfortable}` vertical, `{spacing.spacious}` horizontal

### Secondary action button

Paired with the primary button, this outline style uses a transparent background with a subtle border. It contains an icon and label, maintaining the same dimensions as the primary button for visual balance.

- Anatomy: Icon, label text
- Surface: Transparent background, `{colors.border-subtle}` border
- Typography: `{typography.label}`
- Shape: `{rounded.button}` border radius
- Spacing: Matches primary action button

### Announcement badge

A pill-shaped container for version announcements or news, positioned above the hero headline. Uses a dark surface with subtle border and small text with an arrow indicator.

- Anatomy: Version text, arrow icon
- Surface: Dark fill with subtle border
- Typography: `{typography.caption}`
- Shape: Full pill with `{rounded.badge}`
- Spacing: Compact internal padding

### Feature card

Three-column cards in the hero section, each with an icon, bold title, and description. These use a slightly elevated surface with subtle border, creating depth without strong shadows.

- Anatomy: Icon, title, description
- Surface: `{colors.surface}` background, `{colors.border-subtle}` border
- Typography: Title uses `{typography.label}` weight, description uses `{typography.body}`
- Shape: `{rounded.card}` border radius
- Spacing: `{spacing.comfortable}` internal padding
- Composition: Icon top-aligned, title and description stacked below

### Testimonial card

Grid cards containing social proof quotes. Each card shows an avatar image, author name, source platform icon, and quote text with inline bold emphasis on key phrases.

- Anatomy: Avatar, name, source icon, quote text
- Surface: `{colors.surface-raised}` background
- Typography: Name uses `{typography.label}`, quote uses `{typography.body}`
- Shape: `{rounded.card}` border radius
- Spacing: `{spacing.comfortable}` internal padding
- Composition: Avatar and name in a row, quote below with natural line breaks

### Version badge

Small pill badges for changelog version numbers. Solid blue background with white text, compact sizing.

- Anatomy: Version number text
- Surface: `{colors.accent-blue}` background, `{colors.ink}` text
- Typography: `{typography.caption}`
- Shape: Full pill with `{rounded.badge}`
- Spacing: `{spacing.tight}` vertical, `{spacing.compact}` horizontal

### Changelog entry

Horizontal row pairing a version badge with release description text. Multiple entries stack vertically with consistent spacing.

- Anatomy: Version badge, description text
- Composition: Badge left, description right with comfortable gap
- Spacing: `{spacing.compact}` between badge and text, `{spacing.comfortable}` between entries

### Product screenshot

Large realistic image of the application interface, presented with subtle rounded corners and often extending beyond the content width to create immersion.

- Surface: Actual application chrome with dark theme
- Shape: `{rounded.panel}` border radius
- Composition: Full interface with sidebar, editor, and response panels

## Responsive behavior

The layout should maintain its centered single-column structure on smaller viewports, with the three-column feature card row and testimonial grid collapsing to single columns. Hero headline size should reduce proportionally to preserve readability without excessive line breaks. The product screenshot should scroll horizontally or scale down to remain visible.

Navigation items in the header should collapse to a menu on narrow screens. Button pairs in the hero should stack vertically with full-width treatment when horizontal space is insufficient. Testimonial cards should maintain internal spacing while adapting to single-column flow, preserving avatar and text relationships.

## Practical implementation guidance

### Preserve
- The dark canvas as the default and only theme; do not introduce a light mode without complete color system redesign
- Gradient headline treatment for key section titles, using italic styling on emphasized words only
- Realistic product screenshots rather than stylized illustrations
- The purple-to-lighter-purple primary action system
- Generous section spacing that lets content breathe

### Avoid
- Adding background colors behind product screenshots that compete with the dark canvas
- Using gradient accents on body text or long passages; reserve for display headlines only
- Introducing additional accent colors beyond the established palette
- Making cards too light or elevated; subtle surface differentiation is sufficient

### Recommended build order
1. Establish the dark canvas and surface color tokens
2. Implement the type scale with Inter at all sizes
3. Build the hero section with gradient headline, announcement badge, and action buttons
4. Create the feature card component and three-column layout
5. Add the product screenshot with appropriate containment
6. Build the testimonial card and responsive grid
7. Implement the changelog section with version badges
8. Polish with spacing tokens and hover states

### Accessibility
- Ensure gradient headlines maintain sufficient contrast; provide a solid-color fallback for users with reduced motion or color preferences
- Make the download count badge within the primary button perceivable as supplementary information, not the sole action indicator
- Maintain focus indicators on all interactive elements that are visible against the dark canvas
- Use semantic heading hierarchy despite the visual similarity of some display sizes
- Provide alt text for product screenshots that describes the interface purpose, not every visual detail

## Scope note

This guide covers the Yaak landing page's marketing surface as visible in the supplied images: hero, features, testimonials, and changelog sections. Navigation behavior, footer content, pricing page details, documentation, and the actual application interface are not represented. Motion, hover states, and responsive breakpoints below desktop width are not documented. Measurements are practical adaptation targets.
