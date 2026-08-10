# How tweek.so is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/tweek.so-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with Tweek mascot, bold headline, dual CTA buttons, and iPhone mockups showing calendar and task views on warm cream background](https://pin.fontofweb.com/6395?format=jpg)](https://design.withfudge.com/share/pin-6395)

[Homepage hero with Tweek mascot, bold headline, dual CTA buttons, and iPhone mockups showing calendar and task views on warm cream background](https://design.withfudge.com/share/pin-6395)

[![Black Friday promotional modal with rounded pill tags, bold white text on black background, and large rounded CTA button](https://pin.fontofweb.com/5127?format=jpg)](https://design.withfudge.com/share/pin-5127)

[Black Friday promotional modal with rounded pill tags, bold white text on black background, and large rounded CTA button](https://design.withfudge.com/share/pin-5127)

[![Mac or iPad feature section with iPad mockup displaying weekly calendar grid with color-coded tasks and full-width black CTA button](https://pin.fontofweb.com/3558?format=jpg)](https://design.withfudge.com/share/pin-3558)

[Mac or iPad feature section with iPad mockup displaying weekly calendar grid with color-coded tasks and full-width black CTA button](https://design.withfudge.com/share/pin-3558)

[![Features page with large display headline, section dividers, and paired iPhone mockups showing month and day calendar views](https://pin.fontofweb.com/3557?format=jpg)](https://design.withfudge.com/share/pin-3557)

[Features page with large display headline, section dividers, and paired iPhone mockups showing month and day calendar views](https://design.withfudge.com/share/pin-3557)

## Overview

Tweek presents itself as a minimal weekly planner and todo list app through a design language that prioritizes clarity, warmth, and confident simplicity. The visual system rests on a distinctive cream-colored canvas that separates it from the sterile white backgrounds common to productivity tools. This warm foundation—paired with bold Swiss typography and high-contrast black action elements—creates an interface that feels approachable yet authoritative. The design communicates "pen and paper" naturalness through digital means: generous spacing, clear hierarchy, and restrained use of color beyond the core palette. Every element serves the core promise of simplicity, from the oversized rounded buttons to the clean device mockups that demonstrate the app's calendar and task views. The overall impression is of a tool that respects the user's attention while remaining visually memorable.

## Colors

The color system is intentionally restrained, built around a warm neutral canvas with stark black for emphasis and action.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headlines, borders, and active UI elements |
| canvas | #EDEAE3 | Page background, establishing the warm, paper-like atmosphere |
| surface | #FFFFFF | Card backgrounds, modal surfaces, and content panels |
| action | #000000 | Primary button fills, emphasis blocks, and high-priority interactive surfaces |
| action-text | #FFFFFF | Text on action backgrounds, ensuring maximum contrast |

The cream canvas (#EDEAE3) is the defining atmospheric choice, appearing across all major page surfaces and creating visual continuity between marketing pages and the app interface itself. Black serves dual roles as both text color and action color, creating a bold, confident presence in buttons and headlines. White appears primarily within device mockups and as a surface for promotional modals, where it provides clean separation from the warm background. The system avoids decorative accent colors in the UI chrome, reserving color for functional purposes within the app screenshots—task categories, calendar highlights, and status indicators. This discipline reinforces the "minimal" positioning while allowing the product's internal color coding to remain the focal point of visual interest.

## Typography

Tweek employs Swiss Typefaces' Suisse Intl family as its primary typeface, leveraging its clean geometry and extensive weight range to create clear hierarchy without visual noise. The design uses Bold for display and emphasis, Book (450) for body text at larger sizes, and Regular for standard reading contexts. The exactValues data also references Arial and Font (with the full label "Font-Copyright C 2016 Swiss Typefaces Sàrl All Rights Reserved") as detected font families in the interface, though Suisse Intl carries the visible design load. Flowicons appears as an icon font in the source data. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Suisse Intl | 2.625rem | 700 | 1.05 | -0.02em | Homepage headlines, major page titles |
| section-display | Suisse Intl | 2rem | 700 | 1.1 | -0.01em | Section headings, feature titles |
| body-large | Suisse Intl | 1.3125rem | 450 | 1.3 | normal | Lead paragraphs, introductory descriptions |
| body | Suisse Intl | 1rem | 400 | 1.4 | normal | Standard paragraphs, feature descriptions |
| label | Suisse Intl | 1rem | 700 | 1 | normal | Button text, tags, navigation labels |
| navigation | Suisse Intl | 1.125rem | 700 | 1 | normal | Primary navigation, section anchors |

The hero-display treatment features tight negative letter spacing that gives headlines a compact, impactful presence against the warm canvas. Body-large at 21px provides comfortable reading for introductory content without overwhelming the minimal aesthetic. The type scale maintains consistent alignment to 2px increments, ensuring crisp rendering across the interface. Suisse Intl is credited to Swiss Typefaces as both designer and vendor.

## Layout

The layout system follows a centered, content-focused approach with generous breathing room. Maximum content width appears constrained to maintain readability and focus, with major sections stacking vertically with substantial separation.

Page sections employ consistent horizontal padding of 32px (2rem) on content containers, creating comfortable margins without excessive whitespace. The hero section stacks elements vertically with clear rhythm: mascot icon, headline, description, social proof line, and paired call-to-action buttons. This vertical stacking continues through feature sections, where text content precedes device mockups in a predictable pattern.

Device mockups—iPhones and iPads—serve as the primary visual content, presented in pairs or singly depending on the narrative need. These mockups float within rounded panels or directly on the canvas, often accompanied by minimal pagination indicators when multiple views are available. The layout avoids complex grids in favor of this single-column, centered approach that keeps attention on the product demonstration.

Spacing between major sections uses 40px (2.5rem) to 80px (5rem) depending on narrative importance, with tighter 16px (1rem) gaps between related elements like headlines and descriptions. The overall density is low, reinforcing the "without the fuss" positioning through literal visual simplicity.

## Visual language

The visual language centers on restraint and warmth. The cream canvas creates an immediate emotional distinction from competitors, suggesting analog comfort in a digital tool. Black elements—headlines, buttons, borders—provide necessary contrast and confidence without coldness.

Rounded corners appear throughout at 22px for buttons and panels, softening the geometric precision of the Swiss typography. This rounding is consistent and deliberate, appearing in primary buttons, promotional tags, and content containers alike. Full pill shapes (9999px) appear for smaller tags and status indicators.

Device mockups are presented with realistic proportions but minimal chrome—no excessive shadows or reflections, allowing the app interface within to communicate the value proposition. The mockups often appear in pairs, showing complementary views (month and day, calendar and task list) that demonstrate the app's flexibility without requiring explanation.

Iconography is minimal and functional. The Tweek mascot—a simple black bird-like figure—appears as a brand mark in the header. Interface icons within the app screenshots use thin, consistent strokes. The Flowicons family provides symbolic support where needed.

Borders appear as hairline rules (2px solid black) for section dividers, creating clean separation without decorative weight. These rules extend full-width within content containers, anchoring section transitions with graphic confidence.

## Components

### Primary button

- Anatomy: Text label centered within a rounded rectangular container
- Surface: Solid black fill (#000000) with white text
- Typography: label token, Suisse Intl Bold at 1rem
- Shape: 22px border radius, creating a pill-like but not fully circular form
- Spacing: 3px top padding, 24px horizontal padding, 0px bottom padding for optical centering
- Composition: Often paired with secondary button, with 16-24px gap between

### Secondary button

- Anatomy: Text label within rounded rectangular outline
- Surface: Transparent fill with 2px solid black border, black text
- Typography: label token, matching primary button
- Shape: 22px border radius, identical to primary
- Spacing: Same padding structure as primary
- States: Provides lower-emphasis alternative when paired with primary action

### Promotional tag

- Anatomy: Short text phrase within fully rounded container
- Surface: Colored fill (lavender, peach, or white depending on hierarchy) with dark text
- Typography: label token or slightly smaller
- Shape: Full pill (9999px radius)
- Composition: Stacked vertically in promotional contexts, creating badge-like hierarchy

### Device mockup panel

- Anatomy: Rounded container holding device screenshot or illustration
- Surface: Slightly darker cream or white, creating subtle elevation from canvas
- Shape: 22px border radius for outer panel
- Spacing: 40px internal padding, generous breathing room around device image
- Composition: Centered within section, often with pagination dots below

### Section divider

- Anatomy: Horizontal rule spanning content width
- Surface: 2px solid black line
- Composition: Separates major content sections, often with 32-40px vertical spacing

### Modal overlay

- Anatomy: Centered panel with close control, containing promotional content
- Surface: Black background with white and colored text elements
- Shape: Rounded corners for panel and internal tags
- Composition: Dark overlay creates focus interruption for high-priority messaging

## Responsive behavior

The design appears optimized for desktop and tablet presentation, with content centered and scaled appropriately. The single-column layout structure adapts naturally to narrower viewports by maintaining vertical stacking and reducing horizontal padding.

Device mockups should scale proportionally, maintaining their aspect ratio while fitting within available width. At narrower breakpoints, paired mockups may stack vertically rather than sitting side by side.

Typography should scale down modestly for mobile, with hero-display potentially reducing to 2rem and body-large to 1.125rem to maintain comfortable line lengths. Button touch targets should maintain minimum 44px height regardless of viewport size.

The cream canvas and black action elements maintain their roles across all breakpoints, ensuring brand recognition regardless of device. Navigation should collapse to a hamburger menu or simplified icon set when horizontal space is constrained.

## Practical implementation guidance

### Preserve
- The warm cream canvas as the defining atmospheric element; do not default to white
- The bold black action buttons with their specific 22px rounding
- Suisse Intl as the primary typeface family, using weight and size for hierarchy
- Generous spacing between sections and around device mockups
- The restrained color palette—resist adding decorative accent colors to UI chrome

### Avoid
- Shadows and dimensional effects on buttons or cards; the design is flat and confident
- Multiple typeface families in display text; the Swiss clarity depends on typographic consistency
- Small, cramped touch targets; maintain the generous proportions that communicate simplicity
- Pure white backgrounds for primary surfaces; reserve white for panels and modals
- Decorative gradients or textures that compete with the clean, paper-like aesthetic

### Recommended build order
1. Establish the cream canvas background and black text defaults
2. Implement the type scale with Suisse Intl, verifying weights and spacing
3. Build the primary and secondary button components with exact rounding and padding
4. Create the section layout patterns with consistent horizontal padding and vertical rhythm
5. Add device mockup panels with proper aspect ratio handling
6. Implement promotional tags and modal patterns for marketing contexts

### Accessibility
- Ensure black text on cream canvas meets WCAG AA contrast standards
- Provide visible focus states for keyboard navigation, likely as outline or background shift
- Maintain semantic heading hierarchy despite the visual boldness of all display text
- Device mockups should include descriptive alt text explaining the shown interface state
- Button text should remain legible at all sizes; the Bold weight aids readability
- Consider reduced-motion preferences for any scroll-triggered animations of mockups

## Scope note

This guide covers the marketing and promotional surfaces of Tweek including the homepage, features page, and pricing page. The in-app calendar interface shown within device mockups is not fully specified here. Mobile-specific layouts, animation behavior, form interactions, and the complete icon set are not covered. The exactValues data references Arial and Font (labeled "Font-Copyright C 2016 Swiss Typefaces Sàrl All Rights Reserved") as detected families alongside Suisse Intl and Flowicons; these appear in limited contexts within the interface. Verify licensing for these families before production use.
