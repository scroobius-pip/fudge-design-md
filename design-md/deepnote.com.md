# How deepnote.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/deepnote.com-design)

Last updated: 2026-08-10

## Captured pages

[![Sign-up page with centered authentication form, social login buttons, and enterprise trust logos on a clean white canvas.](https://pin.fontofweb.com/1403?format=jpg)](https://design.withfudge.com/share/pin-1403)

[Sign-up page with centered authentication form, social login buttons, and enterprise trust logos on a clean white canvas.](https://design.withfudge.com/share/pin-1403)

[![Close-up of the sign-up form showing the blue primary action button, outlined secondary buttons, and email input field with clear typographic hierarchy.](https://pin.fontofweb.com/1402?format=jpg)](https://design.withfudge.com/share/pin-1402)

[Close-up of the sign-up form showing the blue primary action button, outlined secondary buttons, and email input field with clear typographic hierarchy.](https://design.withfudge.com/share/pin-1402)

[![Comparison page with a two-column grid of platform cards featuring the Deepnote brand mark, competitor logos, and action buttons with rounded corners.](https://pin.fontofweb.com/1401?format=jpg)](https://design.withfudge.com/share/pin-1401)

[Comparison page with a two-column grid of platform cards featuring the Deepnote brand mark, competitor logos, and action buttons with rounded corners.](https://design.withfudge.com/share/pin-1401)

[![Blog index with large dark navy article thumbnails, white card titles, and a Latest releases section with horizontal list layout.](https://pin.fontofweb.com/1400?format=jpg)](https://design.withfudge.com/share/pin-1400)

[Blog index with large dark navy article thumbnails, white card titles, and a Latest releases section with horizontal list layout.](https://design.withfudge.com/share/pin-1400)

## Overview

Deepnote's visual system presents a data-science platform with clarity and confidence. The design rests on a near-white canvas that keeps attention on content, while a deep navy ink provides authoritative structure. A single vibrant blue serves as the unmistakable action color, appearing in primary buttons, links, and brand moments. The typographic pairing of Degular for display headlines and Inter for body text creates a modern, technical personality without coldness. Component surfaces are flat and clean, with subtle borders defining card boundaries rather than heavy shadows. The overall impression is of a tool built for serious work—collaborative notebooks, team analytics, and machine learning workflows—delivered through an interface that feels approachable and uncluttered. The system scales from authentication flows to content-heavy comparison pages and editorial blog indexes with consistent spacing and recognizable component patterns.

## Colors

The palette is intentionally restrained, built around a high-contrast relationship between light canvas and dark ink, with a single blue accent carrying all interactive meaning.

| token | value | use |
|---|---|---|
| action | #2563EB | Primary buttons, text links, active states, and brand emphasis |
| ink | #1E293B | Headlines, body text, and primary content on light surfaces |
| muted-ink | #64748B | Secondary text, placeholders, captions, and metadata |
| canvas | #FAFAFA | Page backgrounds and section fills |
| surface | #FFFFFF | Cards, input fields, and elevated content containers |
| border | #E2E8F0 | Card outlines, input borders, and dividers |
| dark-surface | #0F172A | Article thumbnails, dark sections, and inverse backgrounds |

The light mode dominates all visible surfaces. White cards sit on a slightly warm off-white canvas, creating minimal depth through tone rather than shadow. The dark-surface token appears dramatically in blog article thumbnails, where white text overlays a deep navy background with subtle grid-line textures. The action blue is saturated and warm enough to feel energetic without competing with the professional tone. No gradient fills are present in interface elements; color is applied flat and consistently. The border color is cool and light, functioning as an optical hairline that separates components without drawing attention to itself.

## Typography

Two families drive the typographic hierarchy: Degular for display and brand moments, Inter for everything else. Degular's geometric character with subtle humanist details gives headlines a distinctive, contemporary voice. Inter's extensive weight range and screen-optimized forms ensure readability at all body sizes.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Degular | 3.5rem | 700 | 1.1 | -0.02em | Page titles, major section headers |
| section-display | Degular | 2.5rem | 700 | 1.15 | -0.01em | Section headings, card titles |
| body | Inter | 1rem | 400 | 1.6 | 0em | Paragraphs, descriptions, form labels |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0em | Captions, metadata, helper text |
| label | Inter | 0.875rem | 500 | 1.4 | 0em | Button text, input labels, navigation |
| navigation | Inter | 0.875rem | 500 | 1 | 0em | Top-level navigation items |

Display sizes use tight negative tracking for a compact, confident presence. Body text maintains generous line height for comfortable reading of technical content. The 0.875rem label size appears frequently in buttons and form contexts, establishing a consistent small-scale rhythm. Font sizing follows a 4px relative unit, with all values as whole-number multiples: 14px (0.875rem), 16px (1rem), 40px (2.5rem), and 56px (3.5rem).

Degular is designed by Oh No Type Company. Inter is designed by Rasmus Andersson. Verify licensing for these families before production use.

## Layout

The layout system favors centered, single-column flows for focused tasks and multi-column grids for browsing and comparison content. Maximum content widths create comfortable reading lines while allowing generous whitespace at larger viewports.

Page sections stack vertically with consistent 5rem gaps between major regions. Content containers center within the viewport with horizontal padding of 1.5rem on each side. The sign-up page demonstrates a narrow, centered form layout—approximately 400px maximum width—creating a focused authentication experience. Comparison pages use a two-column grid with equal-width cards and 1.5rem gutters. Blog indexes pair a two-column thumbnail grid above with a single-column article list below, creating visual rhythm through density variation.

Cards maintain internal padding of 1.5rem on all sides, with content aligned to a consistent top edge. Buttons within cards sit at the bottom, creating predictable scan patterns. The blog's Latest releases section uses a horizontal layout with a fixed-aspect thumbnail on the left and text content on the right, separated by 1.5rem.

Border radius creates hierarchy: panels and cards use 0.75rem, buttons use 0.5rem, and input fields use 0.375rem. This descending scale reinforces containment relationships without visual noise.

## Visual language

The visual character balances technical credibility with approachable simplicity. Brand expression comes through color discipline and typographic personality rather than ornament.

Photography and illustration are minimal in the interface itself. The sign-up page includes enterprise trust logos—Papaya, SoundCloud, Estée Lauder, Gusto—rendered in monochrome to avoid visual competition. Blog article thumbnails use abstract data-visualization imagery: dark navy backgrounds with faint grid lines and geometric markers, suggesting notebook interfaces without literal screenshots. This treatment unifies editorial content while maintaining the platform's technical identity.

Iconography appears functional and unobtrusive: small brand marks for social login providers, platform logos in comparison cards, and the Deepnote mark itself—a stylized arrow or paper fold in action blue. No decorative icon system is visible; visual interest comes from typography and color blocking.

Shadows are absent from the visible system. Elevation is suggested through background tone shifts and thin borders alone. This flat approach reinforces the clean, modern aesthetic and ensures the interface feels lightweight and fast.

## Components

### Primary action button

A filled button with action blue background and white text. Rounded corners at 0.5rem. Uses label typography at 500 weight. Full-width in form contexts, intrinsic width in card contexts. No visible shadow. The Google social login variant uses this same surface treatment with a Google icon prefix.

### Secondary action button

An outlined button with white background, ink text, and a light border. Same corner radius and typography as the primary variant. Appears in comparison cards and as alternative social login options (GitHub, Microsoft, SSO). Hover states are not visible in still images; implementation should add subtle background tint.

### Input field

A single-line text input with light border, white background, and muted placeholder text. Rounded at 0.375rem. Label positioned above the field in 500-weight body text. Full-width within form containers. The email field on the sign-up page demonstrates standard spacing: label with 0.5rem bottom margin, input with comfortable internal padding.

### Comparison card

A bordered container with rounded corners at 0.75rem, white background, and 1.5rem internal padding. Contains a platform logo and name in a horizontal header, a descriptive paragraph in body typography, and one or two action buttons at the bottom. Cards arrange in a two-column grid with equal heights per row. The Deepnote card receives special treatment with a filled primary action button, while competitor cards use outlined secondary buttons.

### Article thumbnail

A dark container with rounded corners at 0.75rem, filled with deep navy background. White title text overlays the surface in a medium weight. A small Deepnote logo mark appears in the lower left. Subtle horizontal and vertical grid lines create texture without reducing legibility. Used in both grid and list layouts at varying aspect ratios.

### Social login stack

A vertical sequence of full-width buttons with consistent 0.75rem spacing between items. Each button contains a provider icon and text label. The primary provider (Google) uses the filled action style; remaining providers use the outlined secondary style. A horizontal "or" divider with thin lines and muted text separates social options from email input.

## Responsive behavior

The visible layouts suggest a desktop-first approach with clear adaptation paths. The centered sign-up form maintains its narrow width across viewport sizes, with surrounding whitespace expanding. Comparison grids should collapse to single-column on smaller viewports, preserving card internal structure. Blog thumbnails in the two-column grid should stack vertically, while the Latest releases list should maintain its horizontal thumbnail-plus-text pattern with adjusted proportions.

Typography should scale down modestly: hero-display may reduce to 2.5rem, section-display to 2rem on narrow viewports. Touch targets for buttons and inputs should maintain minimum 44px height. Horizontal padding on content containers should increase to 2rem on very wide viewports to prevent excessive line lengths.

## Practical implementation guidance

### Preserve
- The strict two-family typographic hierarchy: Degular for display, Inter for everything else
- The single action blue across all interactive elements; do not introduce additional accent colors
- Flat surfaces with border-defined cards; avoid adding drop shadows
- Generous whitespace between sections and around focused forms
- The dark thumbnail treatment for editorial content, with grid-line texture

### Avoid
- Gradient fills on buttons or backgrounds
- Multiple accent colors competing with the action blue
- Heavy shadows or simulated depth effects
- Decorative background patterns behind content
- Font substitutions that lose Degular's distinctive character

### Recommended build order
1. Establish the color tokens and apply canvas and ink to base elements
2. Implement typography scale with Degular headlines and Inter body text
3. Build the button system with primary and secondary variants
4. Create input field styling with proper focus indicators
5. Construct card components with consistent padding and border treatment
6. Implement grid layouts for comparison and blog content
7. Add the dark thumbnail component with overlay text

### Accessibility
- Ensure action blue on white meets WCAG AA contrast ratios for normal text; the visible #2563EB should be verified against 4.5:1 minimum
- Provide visible focus states on all interactive elements, likely a 2px outline offset from the element edge
- Maintain semantic heading hierarchy: h1 for page titles, h2 for sections, h3 for card titles
- Add aria-labels to icon-only buttons and social login providers
- Ensure form labels are programmatically associated with inputs
- Dark thumbnail text should maintain sufficient contrast against the navy background; the visible white text appears adequate

## Scope note

This guide covers the marketing site surfaces visible in the supplied images: sign-up authentication, platform comparison, and blog index pages. The product workspace interface, mobile navigation patterns, interactive states, and animation are not represented. Measurements are practical adaptation targets derived from visible proportions.
