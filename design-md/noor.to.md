# How noor.to is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/noor.to-design)

Last updated: 2026-08-10

## Captured pages

[![Footer with multi-column link grid, Noor logo mark, and copyright notice on white background](https://pin.fontofweb.com/3?format=jpg)](https://design.withfudge.com/share/pin-3)

[Footer with multi-column link grid, Noor logo mark, and copyright notice on white background](https://design.withfudge.com/share/pin-3)

[![Changelog timeline with date labels in muted gray and release titles in bold black text](https://pin.fontofweb.com/2?format=jpg)](https://design.withfudge.com/share/pin-2)

[Changelog timeline with date labels in muted gray and release titles in bold black text](https://design.withfudge.com/share/pin-2)

[![Hero section with large headline, blue and black action buttons, and app screenshot on orange gradient background](https://pin.fontofweb.com/1?format=jpg)](https://design.withfudge.com/share/pin-1)

[Hero section with large headline, blue and black action buttons, and app screenshot on orange gradient background](https://design.withfudge.com/share/pin-1)

## Overview

Noor presents itself as a team chat application for high-performance teams, and its landing page communicates this through a direct, product-first visual approach. The design centers on a dramatic hero section where a large app screenshot floats against a warm orange gradient, immediately establishing the product's identity. Above this, a minimal navigation bar and bold headline deliver the core message without distraction. The overall system favors clarity over ornament: generous whitespace, a single type family in two weights, and a restrained palette of black, white, blue, and warm orange. The page structure flows from hero to changelog to footer, each section maintaining consistent spacing and typographic rhythm. The visual personality is confident and modern—professional enough for enterprise teams yet approachable through its warm accent colors and rounded interface elements.

## Colors

The color system is built around a high-contrast foundation with a single warm accent gradient and one functional action color.

| token | value | use |
|---|---|---|
| action | #007AFF | Primary buttons, links, and interactive highlights |
| action-hover | #0056CC | Hover state for primary action elements |
| ink | #000000 | Headlines, body text, secondary button backgrounds |
| muted-ink | #666666 | Footer links, changelog dates, secondary text |
| canvas | #FFFFFF | Page background, navigation bar, footer surface |
| surface | #F5F5F5 | Subtle panel backgrounds, input fields |
| border | #E5E5E5 | Dividers, subtle separators |
| hero-gradient-start | #FFB84D | Top-left of hero background gradient |
| hero-gradient-end | #FF6B35 | Bottom-right of hero background gradient |

The hero section deploys a diagonal warm gradient that transitions from golden orange to deeper coral-orange, creating an energetic backdrop for the product screenshot. This gradient is the most distinctive color moment on the page and serves as the brand's visual signature. Against this warmth, the app screenshot appears with its own internal color system—soft beiges, light blues, and neutral grays—creating a layered depth effect.

The functional UI operates in near-monochrome: black for emphasis and secondary actions, white for surfaces, and a single blue for primary calls to action. This restraint ensures the hero gradient remains the focal point while maintaining clear hierarchy throughout the page. The muted gray serves navigation, footer links, and chronological metadata without competing for attention. No dark mode variant is visible in the supplied materials.

## Typography

The type system uses a single family, Rm Neue, in Regular and Bold weights. Verify licensing for this family before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Rm Neue | 3rem | 700 | 1.1 | -0.02em | Main headline in hero section |
| section-display | Rm Neue | 1.5rem | 700 | 1.2 | -0.01em | Section headings like "What's New" |
| body | Rm Neue | 1rem | 400 | 1.5 | 0em | Descriptive text, footer links |
| body-bold | Rm Neue | 1rem | 700 | 1.5 | 0em | Changelog titles, button labels |
| label | Rm Neue | 0.875rem | 400 | 1.4 | 0em | Footer column headers, metadata |
| navigation | Rm Neue | 0.875rem | 400 | 1.4 | 0em | Top navigation items |
| legal-copy | Rm Neue | 0.75rem | 400 | 1.4 | 0em | Copyright notice |

The hero headline at 3rem with tight negative tracking creates immediate impact without feeling oversized. Section headings at 1.5rem maintain the same bold weight but with slightly relaxed tracking, establishing clear hierarchy. Body text at 1rem provides comfortable reading density for descriptions and longer content. The label and navigation sizes at 0.875rem handle interface chrome efficiently, while legal copy at 0.75rem sits distinctly below the main content hierarchy.

Line heights are tight for display type (1.1–1.2) and more generous for reading content (1.4–1.5), creating appropriate rhythm for each context. The single-family approach simplifies implementation while weight and size variations provide sufficient differentiation.

## Layout

The page follows a centered, contained layout with consistent horizontal padding and vertical section spacing.

The navigation bar spans the full width with internal content constrained to a maximum width, likely around 1200px based on the proportional relationship between navigation items and the hero content below. Navigation items are distributed with the logo mark and wordmark left-aligned, primary links center-clustered, and utility links (Sign In) right-aligned.

The hero section breaks from the contained width, using a full-bleed gradient background that extends to viewport edges. Within this, content is centered: headline, subheadline, button pair, and the large app screenshot. The screenshot itself appears to float with subtle shadow, positioned to overlap the gradient boundary slightly and create depth.

Below the hero, content sections return to the contained width. The changelog section uses a two-column layout with dates left-aligned and titles right-aligned, creating a readable timeline structure. The footer expands into a six-column grid: logo and copyright in the first column, followed by five link columns (Learn, Resources, Apps, Follow, Why Switch) with stacked link lists.

Vertical rhythm is maintained through consistent section spacing of 4rem between major content areas. Internal component spacing uses 1rem for related elements and 2rem for distinct groupings. The tight 0.5rem spacing handles inline button pairs and list item density.

## Visual language

The visual language balances warmth and precision. The orange gradient hero introduces an energetic, approachable personality uncommon in enterprise software, while the monochrome UI elements maintain professional credibility. This tension—warm background against cool, precise interface—defines the brand's visual character.

Imagery strategy centers on product screenshots presented in realistic context. The hero screenshot shows the actual application interface within a macOS window chrome, complete with menu bar and dock icons. This contextual framing authenticates the product and helps visitors immediately understand what Noor is. The screenshot's internal color palette—soft beiges, light blues, avatar colors—reads as harmonious against the warm gradient without direct color matching.

Shape language is predominantly rounded: buttons use 0.5rem radius, the app screenshot panel has 0.75rem radius, and the primary action button suggests a pill-like quality. This softness contrasts with the sharp typography, creating visual interest through geometry variation.

Shadow appears minimal and functional, likely a subtle drop shadow beneath the floating screenshot to separate it from the gradient background. No heavy shadows or glassmorphism effects are present.

The logo mark—a rounded square with stylized face-like elements in blue and white—appears consistently in navigation and footer, serving as the brand's atomic visual unit.

## Components

### Navigation bar

- **Anatomy**: Logo mark (icon + wordmark "Noor"), primary links (Features, Changelog, X, YouTube, Download), utility link (Sign In)
- **Surface**: Transparent or white background, no visible border
- **Typography**: `{typography.navigation}`, black text
- **Spacing**: Horizontal layout with generous gaps between link groups, likely 2rem between items
- **Composition**: Three-zone layout—brand left, primary links center, utility right

### Hero section

- **Anatomy**: Headline, subheadline, primary action button, secondary action button, product screenshot
- **Surface**: Full-bleed diagonal gradient from `{colors.hero-gradient-start}` to `{colors.hero-gradient-end}`
- **Typography**: Headline uses `{typography.hero-display}`, subheadline uses `{typography.body}` in muted contrast
- **Shape**: Buttons use `{rounded.button}`; screenshot panel uses `{rounded.panel}`
- **Spacing**: Generous vertical padding, likely 4rem above headline and 2rem between text elements and screenshot
- **Composition**: Centered vertical stack with screenshot extending below the gradient boundary

### Primary action button

- **Anatomy**: Text label only, no icon
- **Surface**: `{colors.action}` background, `{colors.canvas}` text
- **Typography**: `{typography.body-bold}`
- **Shape**: `{rounded.button}` with padding `{spacing.component}` vertical and `{spacing.layout}` horizontal
- **States**: Visible as solid blue; hover should shift to `{colors.action-hover}`

### Secondary action button

- **Anatomy**: Text label only ("More platforms")
- **Surface**: `{colors.ink}` background, `{colors.canvas}` text
- **Typography**: `{typography.body-bold}`
- **Shape**: `{rounded.button}` with matching padding to primary
- **Composition**: Positioned inline with primary button, separated by `{spacing.tight}`

### Changelog section

- **Anatomy**: Section heading, subtitle, dated list items
- **Typography**: Heading uses `{typography.section-display}`, subtitle uses `{typography.body}`, dates use `{typography.label}` in `{colors.muted-ink}`, titles use `{typography.body-bold}`
- **Composition**: Two-column layout with dates left-aligned (fixed width) and titles flowing right
- **Spacing**: List items separated by `{spacing.component}` vertical space

### Footer

- **Anatomy**: Logo mark, copyright notice, five link columns with headers
- **Surface**: `{colors.canvas}` background
- **Typography**: Column headers use `{typography.label}` in `{colors.ink}`, links use `{typography.label}` in `{colors.muted-ink}`, copyright uses `{typography.legal-copy}`
- **Composition**: Six-column grid with first column wider for brand elements
- **Spacing**: Generous top padding of `{spacing.section}`, internal column gaps of `{spacing.layout}`

## Responsive behavior

The supplied images show desktop layouts only. Based on the visual structure, the following responsive adaptations are recommended:

At narrower viewports, the navigation bar should collapse to a hamburger menu or consolidate link groups, preserving the logo and primary action visibility. The hero headline at 3rem should scale down to 2rem or 1.75rem on mobile to prevent overflow. The button pair should stack vertically with full-width buttons, maintaining the primary action on top.

The changelog two-column layout should collapse to a single column with dates positioned above titles or inline with lighter weight, preventing horizontal scrolling. The footer six-column grid should reflow to a two-column or single-column stack, with link columns becoming collapsible sections to manage vertical length.

The hero screenshot should maintain aspect ratio while scaling down, potentially cropping to focus on the core interface rather than the full window chrome. The gradient background should remain full-bleed regardless of viewport width.

## Practical implementation guidance

### Preserve
- The single type family approach with weight-based hierarchy
- The warm orange gradient as the distinctive brand moment
- The high-contrast button pairing (blue primary, black secondary)
- The generous whitespace and restrained component density
- The product screenshot in realistic OS context for authenticity

### Avoid
- Adding additional accent colors that compete with the orange gradient
- Heavy shadows or glassmorphism that would distract from the clean UI
- Serif typefaces or decorative fonts that contradict the modern, technical personality
- Tight line heights on body text that would reduce readability
- Border-heavy card treatments that would fragment the open layout

### Recommended build order
1. Establish the type scale with Rm Neue Regular and Bold, verifying web font loading
2. Implement the hero gradient as a CSS linear-gradient with the specified angle
3. Build the navigation with logo, links, and responsive collapse behavior
4. Create the button components with exact color, radius, and padding specifications
5. Position the product screenshot with subtle shadow and responsive scaling
6. Implement the changelog timeline with proper date/title alignment
7. Construct the footer grid with correct column distribution and link grouping

### Accessibility
- Ensure the blue action color (#007AFF) meets contrast requirements against white; it should achieve 4.5:1 for text
- Verify that text over the orange gradient maintains sufficient contrast; consider a subtle dark overlay or text shadow if needed
- Provide visible focus states for all interactive elements, using outline or box-shadow that matches the action color
- Ensure the changelog date/title relationship is programmatically clear for screen readers, using definition lists or proper heading hierarchy
- Maintain touch targets of at least 44×44px for mobile navigation and footer links

## Scope note

This guide covers the Noor landing page hero, changelog, and footer sections visible in the supplied materials. Mobile layouts, additional interior pages, dark mode, loading states, and motion design are not represented. The app interface shown within the screenshot has its own internal design system not documented here. Measurements are practical adaptation targets derived from visual inspection.
