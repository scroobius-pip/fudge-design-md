# How notewave.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/notewave.app-design)

Last updated: 2026-08-10

## Captured pages

[![Feature grid section showing AI note-taking capabilities with app screenshots for transcription, language support, summaries, and quiz generation on light gray background](https://pin.fontofweb.com/6359?format=jpg)](https://design.withfudge.com/share/pin-6359)

[Feature grid section showing AI note-taking capabilities with app screenshots for transcription, language support, summaries, and quiz generation on light gray background](https://design.withfudge.com/share/pin-6359)

[![Hero section with centered Feynman AI logo, bold headline, app store download buttons, and five iPhone mockups demonstrating app features](https://pin.fontofweb.com/6358?format=jpg)](https://design.withfudge.com/share/pin-6358)

[Hero section with centered Feynman AI logo, bold headline, app store download buttons, and five iPhone mockups demonstrating app features](https://design.withfudge.com/share/pin-6358)

[![Top of landing page with dark navigation bar containing Feynman AI logo and Download now button on white background](https://pin.fontofweb.com/6357?format=jpg)](https://design.withfudge.com/share/pin-6357)

[Top of landing page with dark navigation bar containing Feynman AI logo and Download now button on white background](https://design.withfudge.com/share/pin-6357)

## Overview

Notewave (branded as Feynman AI) presents a product landing page built around clarity and conversion. The design system prioritizes immediate comprehension of the app's value proposition through bold, tightly-tracked headlines, generous whitespace, and prominent device mockups that demonstrate real functionality. The visual approach is deliberately restrained: a near-monochrome palette of blacks, whites, and grays keeps attention on the product imagery and call-to-action elements. The page structure follows a classic landing pattern—navigation bar, hero with download actions, feature grid with screenshots—executed with consistent spacing and typographic discipline. The overall impression is of a polished, trustworthy productivity tool rather than an experimental or playful brand.

## Colors

The color system is intentionally minimal, relying on value contrast rather than hue variation to create hierarchy and focus.

| token | value | use |
|---|---|---|
| ink | #0A0A0A | Primary text, headlines, primary button backgrounds |
| ink-secondary | #171717 | Navigation bar background, dark surfaces |
| muted | #6B7280 | Secondary text, captions, subtle UI elements |
| canvas | #FFFFFF | Page background, button text on dark surfaces |
| surface | #FAFAFA | Feature card backgrounds, elevated panels |
| surface-warm | #FAF9F8 | Alternate light background tint |
| border | #F5F5F5 | Dividers, hairline separators |
| action | #0A0A0A | Primary interactive backgrounds |
| action-text | #FFFFFF | Text on primary interactive elements |
| accent-blue | #6B7280 | Links, subtle accent text |

The palette operates in a light mode throughout. Dark elements appear only in the navigation bar and primary buttons, creating high-contrast focal points that guide users toward conversion actions. The near-absence of color in the UI itself allows the colorful app screenshots within device mockups to become the visual center of attention. Gray tones serve functional roles: muted text for descriptions, warm off-whites for card differentiation, and pure white for the primary reading surface. No dark mode or gradient surfaces are present in the visible interface.

## Typography

The type system uses Inter exclusively for interface text, with a single Arial instance at 12px appearing in a secondary context. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3rem | 700 | 1 | -0.05em | Main headline, hero section |
| section-display | Inter | 3rem | 600 | 1 | normal | Section headings, feature titles |
| body-large | Inter | 1.25rem | 500 | 1.4 | normal | Hero description, lead paragraphs |
| body | Inter | 1rem | 400 | 1.5 | normal | General body text, descriptions |
| label | Inter | 0.875rem | 400 | 1.5 | normal | Small text, captions |
| navigation | Inter | 1.5rem | 900 | 1.33 | -0.025em | Logo wordmark |
| button-primary | Inter | 1.125rem | 600 | 1.56 | normal | Primary CTA buttons |
| button-secondary | Inter | 1rem | 400 | 1.5 | normal | Secondary buttons |

The typographic hierarchy is established through weight and size rather than color variation. Headlines at 48px use tight negative tracking (-2.4px) for a compact, impactful presence. Body text at 16px maintains comfortable readability with standard line height. The 20px/500 weight combination for descriptions provides sufficient presence without competing with headlines. No italic styles or display variants are employed.

## Layout

The page uses a centered, single-column layout with constrained content width and generous vertical spacing.

**Container behavior**: Content is centered with horizontal margins of approximately 212.5px on desktop, creating a readable line length and substantial side margins. The hero section narrows further for descriptive text with margins of 96px, while paragraph text receives even more constraining margins of 176px to optimize reading comfort.

**Section spacing**: Vertical rhythm is established with 64px padding on major sections and 64px bottom margins between content blocks. The hero area uses substantial top spacing before the headline appears, creating breathing room below the fixed navigation.

**Grid structure**: The feature section employs a multi-column grid for feature cards, each containing a heading, description, and screenshot. Cards appear to use equal-width columns with consistent internal padding of 24px.

**Navigation**: A full-width navigation bar sits at the top with the brand logo left-aligned and a primary download button right-aligned. The nav bar itself uses a pill-shaped container with rounded corners, floating above the content rather than extending to edges.

**Responsive considerations**: The layout appears designed for desktop-first viewing, with the iPhone mockups in the hero suggesting mobile is addressed through separate app experiences rather than responsive web adaptation. Content margins would need reduction on narrower viewports.

## Visual language

The visual character is clean, modern, and product-centric. The design avoids decorative elements in favor of functional clarity.

**Imagery strategy**: The primary visual content consists of realistic iPhone mockups displaying the actual app interface. These are presented at slight rotations and overlapping arrangements to suggest depth and activity. The mockups show authentic app states—recording interfaces, mind maps, quiz screens, video playback—rather than abstract illustrations. Feature section screenshots appear as direct captures without device frames, allowing closer inspection of functionality.

**Iconography**: The brand mark combines a microphone icon with a star element, rendered in white on dark backgrounds. App store badges use standard Apple and Google Play iconography. No custom icon set is visible in the interface.

**Shadow and depth**: Subtle shadows appear on elevated elements, using a layered shadow approach: `rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px` for larger panels and a lighter variant `rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px` for smaller elements. These create gentle elevation without dramatic depth.

**Border treatments**: Dashed borders in the accent color appear on circular elements, suggesting a subtle decorative or status indicator pattern. Solid borders are minimal, with most separation achieved through background color contrast and spacing.

## Components

**Navigation bar**
- Anatomy: Logo mark (icon + wordmark) left, primary CTA button right
- Surface: Dark background (#171717) with rounded pill shape
- Typography: Navigation token for wordmark, button text in white
- Shape: 12px border radius, full pill when floating
- Spacing: Internal padding with comfortable touch targets

**Primary button**
- Anatomy: Text label with optional icon prefix
- Surface: Solid dark background (#0A0A0A), white text
- Typography: button-primary token, 18px/600 weight
- Shape: 12px border radius
- Spacing: Horizontal padding of 32px, vertical padding implied by line height
- Variants: Full-width in navigation context, auto-width in hero

**Secondary button**
- Anatomy: Text label, lighter visual weight
- Surface: Transparent or white background, dark text
- Typography: button-secondary token
- Shape: 12px border radius
- Spacing: Horizontal padding of 16px

**Feature card**
- Anatomy: Heading, description paragraph, screenshot image
- Surface: Light gray background (#FAFAFA), 24px border radius
- Typography: Section-display for headings, body for descriptions
- Spacing: 24px internal padding, 16px heading top margin
- Composition: Vertical stack with image below text

**App store badge**
- Anatomy: Platform icon, store name, action text
- Surface: Black background with platform-appropriate branding
- Typography: Platform-standard sizing
- Shape: Moderate border radius matching platform conventions

**Device mockup group**
- Anatomy: Multiple iPhone frames in overlapping arrangement
- Surface: No containing frame, phones float on page background
- Composition: Centered cluster with slight rotational variation, largest/central phone most prominent

**Web version button**
- Anatomy: Globe icon prefix with two-line text label
- Surface: Solid dark background matching primary buttons
- Typography: Mixed weights—regular for "Start on the", semibold for "Web version"
- Shape: 12px border radius, wider than standard buttons
- Spacing: Generous horizontal padding, comfortable vertical proportions

## Responsive behavior

The visible design targets desktop viewport widths with fixed pixel margins. Implementation should consider:

- Navigation bar may transition from floating pill to full-width bar on narrow screens
- Hero headline should scale down from 48px; consider 32px at tablet and 28px at mobile widths
- Device mockup cluster should reduce to single representative phone or horizontal scroll on narrow viewports
- Feature grid should collapse from multi-column to single column with full-width cards
- Content margins (212.5px, 176px, 96px) should reduce proportionally, reaching 16px-24px on mobile
- App store badges should stack vertically when horizontal space is constrained
- Touch targets should maintain minimum 44px height for all interactive elements

## Practical implementation guidance

### Preserve
- The stark black-white-gray palette; color should enter only through product screenshots
- Tight negative tracking on large headlines; this is central to the brand's crisp personality
- Generous whitespace around all content; the page feels airy despite information density
- Realistic device mockups showing actual app states rather than illustrations
- The floating pill-shaped navigation bar as a distinctive brand element

### Avoid
- Adding accent colors to UI elements; the monochrome system is intentional
- Reducing headline sizes below readable thresholds; the 48px/32px distinction is important
- Crowding the hero with additional elements; the current three-part structure (headline, description, actions) is balanced
- Using borders where background color contrast suffices
- Generic stock photography replacing app screenshots

### Recommended build order
1. Establish base typography with Inter at 16px/24px line height
2. Implement color tokens with pure blacks, whites, and functional grays
3. Build navigation bar with pill shape and download CTA
4. Create hero section with centered content and headline tracking
5. Add device mockup cluster with appropriate shadow treatment
6. Construct feature grid with card components and screenshot placement
7. Implement button variants with consistent radius and padding
8. Add responsive breakpoints for margin reduction and layout stacking

### Accessibility
- Ensure 4.5:1 contrast ratio for all text; the #0A0A0A on #FFFFFF pairing exceeds this significantly
- Provide visible focus states for keyboard navigation; consider outline or background shift
- Maintain logical heading hierarchy with single h1 in hero
- Add alt text to all device mockups describing visible app functionality
- Ensure download buttons have descriptive labels including platform
- Test that reduced motion preferences are respected for any scroll-triggered animations

## Scope note

This guide covers the notewave.app landing page visible in the supplied images, including the navigation, hero section with download actions, and feature grid with app screenshots. Footer content, additional interior pages, pricing tables, documentation, and mobile-responsive adaptations are not represented. Motion design, hover states, and form interactions are not documented from the still images provided. Verify licensing for Inter before production use.
