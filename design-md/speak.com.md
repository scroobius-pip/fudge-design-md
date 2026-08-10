# How speak.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/speak.com-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with large white Speak logotype on vibrant blue background and multi-column link navigation](https://pin.fontofweb.com/5340?format=jpg)](https://design.withfudge.com/share/pin-5340)

[Footer section with large white Speak logotype on vibrant blue background and multi-column link navigation](https://design.withfudge.com/share/pin-5340)

[![FAQ accordion panel with rounded gray surface, dark navy questions, and blue inline text links](https://pin.fontofweb.com/5339?format=jpg)](https://design.withfudge.com/share/pin-5339)

[FAQ accordion panel with rounded gray surface, dark navy questions, and blue inline text links](https://design.withfudge.com/share/pin-5339)

[![Hero section with centered navy headline, pink and blue feature cards, and blue call-to-action button](https://pin.fontofweb.com/5338?format=jpg)](https://design.withfudge.com/share/pin-5338)

[Hero section with centered navy headline, pink and blue feature cards, and blue call-to-action button](https://design.withfudge.com/share/pin-5338)

[![Statistics section with bar chart visualization and lifestyle photography showing mobile app usage](https://pin.fontofweb.com/5337?format=jpg)](https://design.withfudge.com/share/pin-5337)

[Statistics section with bar chart visualization and lifestyle photography showing mobile app usage](https://design.withfudge.com/share/pin-5337)

## Overview

Speak presents a confident, approachable visual identity for language learning that prioritizes clarity and encouragement. The system pairs a vibrant electric blue with softer supporting accents—warm pink and fresh mint—against a clean light gray canvas. Deep navy ink provides authoritative structure for headlines and primary content, while muted slate tones handle secondary information with restraint. The overall impression is modern and app-like: generous rounded corners on cards and buttons, ample whitespace, and a single geometric sans-serif family that scales from monumental display settings to compact navigation labels. The design communicates fluency and progress through bold color blocking, friendly illustration-style UI elements, and data visualizations that celebrate user achievement.

## Colors

The palette balances energetic brand presence with calm readability. Electric blue dominates as the primary action and brand color, appearing in buttons, links, the footer ground, and accent cards. Deep navy anchors all text hierarchy. A soft gray canvas lets colored elements breathe, while pink and mint serve as warm, humanizing accents in feature illustrations and success states.

| token | value | use |
|---|---|---|
| action | #2563FF | Primary buttons, inline links, footer background, blue accent cards, bar chart bars |
| action-hover | #1D4ED8 | Button hover states, link hover |
| ink | #0F1D40 | Headlines, body text, accordion questions, navigation labels |
| muted-ink | #6B7B9E | Secondary descriptions, captions, chart axis labels, footer secondary links |
| canvas | #F5F7FA | Page background behind cards and sections |
| surface | #FFFFFF | Card backgrounds, FAQ panel ground, content containers |
| surface-elevated | #F0F2F5 | FAQ accordion surface, subtle elevated panels |
| accent-pink | #E85D75 | Feature cards, motivational UI elements, warm accent moments |
| accent-mint | #34D399 | Success checkmarks, positive reinforcement indicators |
| border | #E2E8F0 | Subtle dividers, card borders when needed |

The system operates in a light mode throughout. Photography appears natural and warm, with skin tones and indoor environments that complement rather than compete with the UI palette. No dark mode is visible in the supplied material.

## Typography

Speak uses Axiforma exclusively, a geometric sans-serif designed by Galin Kastelov and distributed by Kastelov. The family presents clean, open letterforms with a friendly geometric structure that reads confidently at display sizes and remains legible in compact UI labels. Three weights are employed: Regular for body and descriptions, Medium for emphasis and navigation, and Semibold for labels and small headings. Bold weight appears in the largest display settings.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Axiforma | 3.5rem | 700 | 1.1 | -0.02em | Homepage hero headlines, major section titles |
| section-display | Axiforma | 2.5rem | 700 | 1.15 | -0.01em | Section headlines, feature introductions |
| body | Axiforma | 1rem | 400 | 1.6 | 0em | Paragraphs, descriptions, accordion answers |
| body-medium | Axiforma | 1rem | 500 | 1.6 | 0em | Emphasized body, navigation links |
| label | Axiforma | 0.875rem | 600 | 1.4 | 0em | Button text, card headings, small titles |
| navigation | Axiforma | 0.875rem | 500 | 1.4 | 0em | Footer links, header navigation |
| legal-copy | Axiforma | 0.75rem | 400 | 1.5 | 0em | Copyright, fine print |

Display sizes use tight negative tracking for a crisp, contemporary feel. Body text maintains neutral tracking and generous line height for comfortable reading. The type scale builds on a 4px relative unit, with sizes at 12px, 14px, 16px, 40px, and 56px to ensure every step aligns to the grid.

Verify licensing for Axiforma through Kastelov before production use.

## Layout

The page structure follows a centered, contained model with generous vertical breathing room. Major sections stack with substantial padding between them, creating clear narrative progression. Content typically lives within a max-width container that keeps line lengths readable and centers the visual focus.

Horizontal rhythm relies on card-based composition. Feature sections pair a text block on the left with a visual demonstration or illustration on the right, both sitting within a rounded card container. The FAQ section centers a single accordion panel with ample margin on all sides. The statistics section splits into two equal cards side by side—one housing a data visualization, the other a lifestyle photograph.

Vertical spacing uses a base 4px grid. Section padding is substantial, typically 6rem or more, establishing clear separation between topics. Card internal padding is generous at 2rem, keeping content comfortable and uncluttered. Between related elements within a card, spacing tightens to 1rem or 1.5rem to maintain visual connection.

The footer breaks from the light canvas with a full-bleed electric blue background. Its layout spreads a massive logotype on the left against multi-column link groups on the right, using the full viewport width without the centered container constraint.

## Visual language

Roundedness is a defining characteristic. Cards carry 1.5rem corner radii, creating soft, approachable containers that feel app-native rather than web-formal. Buttons use slightly tighter 0.75rem radii, maintaining consistency while feeling more compact and actionable. Pill shapes appear for tags and special labels.

Shadows are subtle and diffuse, suggesting gentle elevation rather than dramatic depth. Cards appear to float slightly above the canvas with soft, large-radius shadows in low-opacity navy.

The visual system favors flat color blocks over gradients and textures. Feature illustrations use solid pink and blue rectangles with rounded corners, containing simple iconography and white text. This abstraction keeps the focus on content and action rather than decorative complexity.

Data visualization follows the same restraint. Bar charts use solid blue bars with rounded tops, labeled in muted ink with clean numeric callouts. No grid lines or background fills compete for attention.

Photography appears candid and natural—users in everyday environments engaging with the app. Images receive moderate rounded corners when framed within cards, softening their edges to match the UI language.

## Components

### Primary action button

- **Anatomy**: Text label centered within a solid background shape
- **Surface and text color**: action background with surface text
- **Typography**: label token, semibold weight
- **Shape**: 0.75rem border radius, full-width or auto-width depending on context
- **Spacing**: 1rem vertical padding, 2rem horizontal padding
- **Composition**: Often placed below explanatory content or within feature cards
- **Variants**: Full-width version inside mobile-style mockups; auto-width in standalone contexts

### Feature card

- **Anatomy**: Rounded container with optional icon, heading, description, and action area
- **Surface and text color**: surface background with ink text; or solid accent-pink or action background with surface text
- **Typography**: section-display or label for headings, body for descriptions
- **Shape**: 1.5rem border radius
- **Spacing**: 2rem internal padding
- **Composition**: Paired in two-column layouts with text content on the left; or stacked in mockup demonstrations
- **Variants**: Neutral white version for general content; solid pink or blue version for motivational moments

### FAQ accordion

- **Anatomy**: Rounded panel containing expandable question rows with toggle icons
- **Surface and text color**: surface-elevated background; ink for questions, muted-ink for answers
- **Typography**: body-medium for questions, body for answers
- **Shape**: 1.5rem border radius for outer panel; horizontal hairline borders between rows
- **Spacing**: 2rem panel padding; generous vertical space between questions
- **Composition**: Centered single column, narrow width for readability
- **States**: Expanded state reveals answer text with a close icon; collapsed state shows plus icon

### Statistics card

- **Anatomy**: Rounded container with headline, subhead, and bar chart visualization
- **Surface and text color**: surface background; ink for headline, action for emphasized numbers, muted-ink for axis labels
- **Typography**: section-display for headline, label for chart annotations, legal-copy for axis labels
- **Shape**: 1.5rem border radius; bars have rounded tops
- **Spacing**: 2rem internal padding
- **Composition**: Left card in a two-card row, balanced by lifestyle photography card on right

### Footer

- **Anatomy**: Full-bleed section with oversized logotype, multi-column link grid, and copyright
- **Surface and text color**: action background; surface for primary links, muted-ink for secondary links and copyright
- **Typography**: navigation for link columns, legal-copy for copyright
- **Shape**: No border radius; full viewport width
- **Spacing**: Generous internal padding; columns evenly distributed across right portion
- **Composition**: Massive "Speak" logotype anchors left; link columns organize by topic on right

## Responsive behavior

The layout appears optimized for desktop viewing with a contained content width. At narrower viewports, the two-column card layouts should stack vertically, with the text block preceding its paired visual. The FAQ accordion should remain centered but expand to near-full width on small screens. The footer link columns should collapse from five columns into fewer grouped sections or a single stacked list. Typography should scale down proportionally: hero-display reducing to section-display size, section-display to a 2rem headline, preserving hierarchy without overflow. Card padding can reduce from 2rem to 1.5rem on mobile to preserve screen real estate while maintaining touch targets.

## Practical implementation guidance

### Preserve
- The electric blue as the dominant brand color; it appears in every major section and provides instant recognition
- Generous rounded corners on all containers; this is central to the friendly, app-like personality
- The single-type-family discipline; Axiforma at three weights covers all needs without visual fragmentation
- High contrast between ink and canvas for readability; the navy is deep enough to feel authoritative without black's harshness
- Asymmetric footer composition with oversized logotype as brand anchor

### Avoid
- Introducing additional accent colors beyond pink and mint; the palette is intentionally tight
- Sharp corners on cards or buttons; they would break the approachable character
- Multiple type families; the geometric consistency is part of the brand voice
- Dense information layouts; the system depends on whitespace and clear section breaks
- Dark mode without careful recalibration; the pink and mint accents would need saturation adjustment

### Recommended build order
1. Establish the 4px base grid and type scale with Axiforma loaded at Regular, Medium, and Semibold
2. Implement the color tokens, starting with action, ink, canvas, and surface
3. Build the card component with its 1.5rem radius and shadow treatment
4. Create the primary action button and verify hover states
5. Assemble the hero section with centered headline and body text pattern
6. Implement the two-column feature section with text left, visual right
7. Build the FAQ accordion with expand/collapse behavior
8. Construct the statistics card with SVG or CSS bar chart
9. Implement the full-bleed footer with multi-column link layout

### Accessibility
- Ensure action blue on white meets WCAG AA for normal text; the vibrant shade appears to satisfy 4.5:1 but verify numerically
- Provide visible focus indicators on buttons and accordion toggles, using ink or darkened action outlines
- Maintain touch targets of at least 44px for accordion toggles and footer links on mobile
- Use semantic heading hierarchy: single h1 per page, section-display as h2, label-sized headings as h3
- Include aria-expanded and aria-controls on FAQ accordion items for screen reader context

## Scope note

This guide covers the marketing homepage surface visible in the supplied images, including the hero, feature sections, FAQ, statistics, and footer. Navigation header, mobile layouts, form interactions, motion, and additional interior pages are not represented. Measurements are practical adaptation targets derived from visual inspection against the 4px grid.
