# How builder.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/builder.io-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with dark gradient background, centered headline, AI prompt input field, and purple-accented action buttons](https://pin.fontofweb.com/4244?format=jpg)](https://design.withfudge.com/share/pin-4244)

[Hero section with dark gradient background, centered headline, AI prompt input field, and purple-accented action buttons](https://design.withfudge.com/share/pin-4244)

[![Feature section with product screenshot, cyan eyebrow label, and alternating dark card layouts with checkmark lists](https://pin.fontofweb.com/4245?format=jpg)](https://design.withfudge.com/share/pin-4245)

[Feature section with product screenshot, cyan eyebrow label, and alternating dark card layouts with checkmark lists](https://design.withfudge.com/share/pin-4245)

[![Newsletter signup with purple toggle switches, email input field, and multi-column footer with purple category headers](https://pin.fontofweb.com/4246?format=jpg)](https://design.withfudge.com/share/pin-4246)

[Newsletter signup with purple toggle switches, email input field, and multi-column footer with purple category headers](https://design.withfudge.com/share/pin-4246)

[![AI chat input interface with dark translucent panel, subtle border, and minimal attach button with send icon](https://pin.fontofweb.com/4247?format=jpg)](https://design.withfudge.com/share/pin-4247)

[AI chat input interface with dark translucent panel, subtle border, and minimal attach button with send icon](https://design.withfudge.com/share/pin-4247)

## Overview

Builder.io presents a dark-mode visual development platform with a sophisticated, technology-forward aesthetic. The design system centers on near-black canvases that create immersive depth, punctuated by vibrant purple accents and occasional cyan highlights. The interface communicates AI-powered capabilities through translucent, glass-like input surfaces and rounded geometric elements that soften the technical precision. Typography relies entirely on Poppins, leveraging its geometric sans-serif character to maintain clarity across marketing headlines, product interfaces, and dense footer navigation. The overall composition balances dramatic negative space in hero sections with information-dense feature layouts, creating visual rhythm through contrast between expansive dark fields and concentrated content zones. The brand identity emerges through consistent use of rounded pills for actions, subtle border definitions for elevated surfaces, and a restrained accent palette that avoids visual noise while maintaining energy.

## Colors

The color system operates on a dark-mode foundation with selective accent deployment. The canvas remains consistently black, allowing product screenshots and interface demonstrations to float with maximum contrast. Purple serves as the primary action and brand color, appearing in buttons, toggle states, and category labels. Cyan provides secondary accent emphasis for eyebrow labels and status indicators. Text exists on a gradient of opacity from pure white for headlines through muted gray for body copy to dim gray for placeholders and secondary information.

| token | value | use |
|---|---|---|
| canvas | #000000 | Page background, deepest surface layer |
| surface | #151515 | Card backgrounds, elevated panels |
| surface-elevated | #1a1a1a | AI input fields, interactive surfaces with subtle lift |
| action | #a855f7 | Primary buttons, toggle active states, category headers, newsletter submit |
| action-hover | #9333ea | Button hover states, interactive purple emphasis |
| accent-cyan | #06b6d4 | Eyebrow labels, "VISUAL DEVELOPMENT PLATFORM" tag, status indicators |
| ink | #ffffff | Headlines, primary text, navigation, footer links |
| ink-muted | #a1a1aa | Body copy, descriptions, secondary text |
| ink-dim | #71717a | Placeholder text in input fields, disabled states |
| border | #27272a | Card outlines, panel borders, dividers |
| border-subtle | #3f3f46 | Hover borders, focus rings, elevated surface edges |

The dark canvas system creates a cinematic quality that makes product imagery and interface screenshots appear luminous by contrast. Purple accents carry the brand energy without overwhelming the technical credibility. The cyan accent appears sparingly, reserved for highest-priority labels and category tags, ensuring it retains visual impact when deployed. Border colors remain subtle, functioning as structural definition rather than decorative elements. The overall palette avoids pure grays in favor of slightly warm or cool tinted neutrals that harmonize with the purple and cyan accents.

## Typography

The typographic system uses Poppins exclusively, designed by Jonny Pinhorn and published by Indian Type Foundry. The geometric construction of Poppins lends itself to the rounded, friendly yet precise character of the interface. Weights are deployed strategically: Regular for body readability, Medium for labels and navigation, and Semibold for display headlines. The system scales from compact labels through comfortable body sizes to dramatic hero display.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Poppins | 3rem | 600 | 1.1 | -0.02em | Hero headlines, "What should we build?" |
| section-display | Poppins | 2rem | 600 | 1.2 | -0.01em | Feature section headings, "Use your existing code" |
| body | Poppins | 1rem | 400 | 1.6 | 0 | Descriptions, feature lists, footer body |
| body-small | Poppins | 0.875rem | 400 | 1.5 | 0 | Captions, metadata, dense content |
| label | Poppins | 0.75rem | 500 | 1.4 | 0.05em | Uppercase category headers, button text, tags |
| navigation | Poppins | 0.875rem | 500 | 1 | 0 | Top nav items, dropdown triggers |

Display sizes use tight negative tracking to create cohesive headline blocks, while body sizes maintain neutral tracking for extended reading comfort. Labels employ positive tracking and uppercase transformation to create hierarchical separation from sentence-case content. The type scale progresses in whole-number multiples of the 4px base unit, ensuring consistent vertical rhythm across all text elements. Verify licensing for Poppins through Indian Type Foundry before production use.

## Layout

The layout system employs a centered, contained approach for marketing content with full-bleed dark backgrounds. Hero sections use generous vertical padding to create dramatic focus on the central value proposition. Content sections alternate between centered text blocks and asymmetric two-column arrangements featuring product screenshots alongside descriptive copy.

The grid establishes clear content hierarchy through scale contrast: hero headlines at 3rem command attention, while supporting descriptions at 1rem provide breathing room. Feature sections pair large product imagery on one side with compact checkmark lists on the other, creating scannable information architecture. The footer expands into a multi-column grid with category groupings, maximizing information density without visual clutter.

Spacing follows a 4px base unit system. Section vertical padding uses 6rem to create clear territorial boundaries between content types. Component internal padding uses 1.5rem for cards and panels. Content gaps between related elements use 1.5rem, while tighter 1rem gaps bind label-content pairs. The navigation bar maintains compact vertical padding with horizontal distribution between logo, menu items, and action buttons.

Border radius creates distinct material language: panels and cards use 0.75rem to 1rem for substantial rounded corners, while buttons and pills use full 9999px rounding for a friendly, approachable character. Input fields use moderate 0.5rem rounding that suggests interactivity without the full softness of buttons.

## Visual language

The visual language communicates AI-native development through a blend of technical precision and approachable warmth. Dark surfaces evoke terminal interfaces and code editors, establishing developer credibility, while rounded corners and pill-shaped buttons soften the aesthetic for broader team accessibility.

Glass-like translucency appears in the AI input interface, where subtle background blur and semi-transparent dark layers suggest computational depth behind the surface. This treatment distinguishes AI-interactive elements from static content, creating a material hierarchy without explicit labels.

The purple glow effect in hero backgrounds creates atmospheric depth, suggesting neural network visualization or code aurora. This photographic treatment remains contained to hero zones, preventing visual fatigue in content sections. Product screenshots appear with natural interface chrome, allowing real software to demonstrate capability without stylized mockups.

Iconography follows a minimal, line-weight approach with occasional filled states for active indicators. Checkmarks in feature lists use simple strokes rather than elaborate containers. Social icons in the footer maintain consistent stroke weight and sizing. The overall icon treatment prioritates scannability over decorative presence.

Brand logos in the trust bar appear in monochrome, subdued opacity, ensuring they read as social proof without competing with primary content. This treatment maintains the dark canvas dominance while acknowledging enterprise credibility.

## Components

### Navigation bar

The top navigation spans the full viewport width with a near-transparent or subtly dark background. The Builder.io logo appears left-aligned with its distinctive geometric mark. Centered navigation links include dropdown indicators for hierarchical sections. Right-aligned actions pair a bordered "Contact sales" button with a filled purple "Sign up" button.

- Anatomy: Logo, primary nav links with chevron indicators, secondary actions
- Surface: Transparent or subtly dark background, no visible border
- Typography: navigation token for all links
- Shape: Action buttons use full pill rounding
- Spacing: Compact vertical padding, generous horizontal gaps between nav clusters
- Composition: Flex row with space-between distribution

### Hero prompt input

The central interactive element of the hero section presents a large text area for AI prompts with distinctive glass-like treatment. The input field accepts natural language instructions for building applications.

- Anatomy: Placeholder text, attach button with plus icon, submit button with arrow icon
- Surface: surface-elevated background with border color outline, subtle inner glow or gradient
- Typography: body token for placeholder, label token for button text
- Shape: 0.75rem rounded panel with internal flex row for actions
- Spacing: 1rem internal padding, action buttons aligned to bottom edge
- Composition: Full-width within centered container, stacked above capability pills

### Capability pills

Below the hero input, a horizontal row of action chips provides quick-start options for common workflows. Each pill combines an icon with descriptive text.

- Anatomy: Icon, label text
- Surface: surface background with border color outline, or subtle elevated treatment
- Typography: body-small token
- Shape: Full 9999px pill rounding
- Spacing: Horizontal arrangement with 0.75rem gaps, compact internal padding
- Composition: Centered row, wrapping permitted on narrow viewports

### Feature section card

Alternating layout sections pair product screenshots with descriptive content. Each section uses a dark card or direct canvas background with checkmark-delimited feature lists.

- Anatomy: Eyebrow label (optional), section heading, description or checkmark list, product screenshot
- Surface: Canvas or surface background depending on section alternation
- Typography: accent-cyan label for eyebrows, section-display for headings, body for descriptions
- Shape: Screenshots appear with natural interface rounding; cards use 1rem radius
- Spacing: 6rem vertical section padding, 1.5rem gap between text and image
- Composition: Two-column asymmetric grid, reversing direction between sections

### Newsletter signup

The email capture section presents toggle switches for subscription preferences above a combined input and submit control.

- Anatomy: Two toggle rows with labels and descriptions, email input field, circular submit button, privacy policy link
- Surface: Canvas background, white input field, purple submit button
- Typography: label token for category, body for descriptions, body-small for legal text
- Shape: Input uses 9999px full pill rounding; submit button is circular
- Spacing: 1.5rem gap between toggles and input, centered alignment
- Composition: Narrow centered column, maximum width constrained for readability

### Footer

The multi-column footer organizes extensive link hierarchies into categorized groups with clear visual hierarchy.

- Anatomy: Category headers, link lists, legal row, social icon row
- Surface: Canvas background, subtle top border or separator
- Typography: action color label token for category headers, ink color body-small for links
- Shape: No card containers; direct text links
- Spacing: Generous column gaps, compact vertical link spacing, 1.5rem header-to-list gap
- Composition: Four-column grid for categories, full-width legal row below separator

## Responsive behavior

The design should maintain its dark canvas and accent hierarchy across all viewports. Hero headlines should scale down to 2rem on tablet and 1.5rem on mobile while preserving negative tracking. The hero input should remain full-width within padded containers, with capability pills wrapping to multiple rows as needed.

Feature sections should collapse from two-column to single-column stacking, with product screenshots preceding descriptive content to maintain visual interest. The footer should transition from four-column to two-column to single-column layouts, preserving category grouping integrity.

Navigation should collapse to a hamburger menu on mobile, with the logo and primary action button remaining visible. Touch targets should maintain minimum 44px height for all interactive elements. The newsletter input should remain single-row with inline submit button where width permits, stacking vertically on narrow viewports.

## Practical implementation guidance

### Preserve
- The near-black canvas as the dominant surface; avoid introducing light backgrounds that would destroy the immersive quality
- Purple as the singular action color; do not dilute with additional accent hues beyond the reserved cyan
- Full pill rounding for primary actions; this shape language is distinctive to the brand
- Generous section spacing; the dark canvas requires territorial breathing room to avoid visual compression
- Poppins throughout; the geometric character is integral to the technical-yet-approachable tone

### Avoid
- Pure white backgrounds for any surface; even cards and elevated elements should remain in the dark value range
- Sharp corners on interactive elements; the rounded language should extend to all user-touchable components
- Multiple competing accent colors beyond the established purple and cyan system
- Dense body text without adequate line height; the dark mode requires generous leading for readability
- Border-heavy designs; prefer subtle single-pixel definitions over pronounced outlines

### Recommended build order
1. Establish the dark canvas foundation with canvas, surface, and surface-elevated tokens
2. Implement Poppins with the complete type scale, verifying weight availability
3. Build the hero section with prompt input and capability pills as the signature interaction
4. Create the navigation with logo, links, and dual-action button pattern
5. Develop alternating feature sections with screenshot and checklist pattern
6. Construct the newsletter signup with toggle and pill input treatment
7. Assemble the multi-column footer with category header styling
8. Apply responsive behavior with viewport-specific scaling

### Accessibility
- Ensure white text on black canvas meets WCAG AAA contrast ratios; verify muted grays meet AA for body text
- Provide visible focus indicators on all interactive elements, using border-subtle or action color outlines
- Maintain keyboard navigability through the hero input and capability pills
- Add aria-labels to icon-only buttons including attach and submit controls
- Respect reduced-motion preferences for any background gradient or glow animations
- Ensure toggle switches have explicit state labeling for screen readers

## Scope note

This guide covers the Builder.io homepage including hero, feature sections, newsletter signup, and footer. Navigation dropdown states, additional interior pages, and motion behavior are not represented in the available material. Measurements are practical adaptation targets derived from visible proportions in the supplied imagery.
