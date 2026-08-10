# How ovhcloud.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ovhcloud.com-design)

Last updated: 2026-08-10

## Captured pages

[![Deep blue footer with multi-column link grid, email subscription form, social icons, and floating plan-a-call button with gradient background.](https://pin.fontofweb.com/3315?format=jpg)](https://design.withfudge.com/share/pin-3315)

[Deep blue footer with multi-column link grid, email subscription form, social icons, and floating plan-a-call button with gradient background.](https://design.withfudge.com/share/pin-3315)

[![FAQ accordion section with blue question links, expand/collapse chevrons, and gray body text on white background.](https://pin.fontofweb.com/3314?format=jpg)](https://design.withfudge.com/share/pin-3314)

[FAQ accordion section with blue question links, expand/collapse chevrons, and gray body text on white background.](https://design.withfudge.com/share/pin-3314)

[![Two-column feature grid with dark navy section headings, blue inline links, and gray descriptive text for dedicated server capabilities.](https://pin.fontofweb.com/3313?format=jpg)](https://design.withfudge.com/share/pin-3313)

[Two-column feature grid with dark navy section headings, blue inline links, and gray descriptive text for dedicated server capabilities.](https://design.withfudge.com/share/pin-3313)

[![Promotional banner with geometric server illustration, navy headline, blue outlined price button, and light blue border.](https://pin.fontofweb.com/3312?format=jpg)](https://design.withfudge.com/share/pin-3312)

[Promotional banner with geometric server illustration, navy headline, blue outlined price button, and light blue border.](https://design.withfudge.com/share/pin-3312)

## Overview

The OVHcloud design system presents a corporate cloud-infrastructure identity built on authoritative deep blues and clean structural clarity. The visual language communicates technical reliability through disciplined typography, generous whitespace, and a restrained palette that shifts between light informational surfaces and immersive dark footer environments. The system prioritizes scannable content hierarchies: bold navy headlines establish section identity, medium-weight body copy delivers technical specifications, and bright blue accents guide users toward actions and inline references. Component patterns favor modularity—feature grids break complex offerings into digestible units, accordions manage dense FAQ content, and promotional banners isolate calls-to-action with illustrated visual interest. The overall impression is of an established European technology provider: precise, accessible, and visually consistent across marketing and product surfaces.

## Colors

The color architecture operates in two primary modes: a light canvas for content consumption and a deep inverse surface for footer navigation and brand immersion. The palette derives from OVHcloud's corporate identity, with navy serving as the authoritative ink and a vibrant blue handling all interactive and emphasis roles.

| token | value | use |
|---|---|---|
| action | #0056D6 | Primary buttons, inline links, accordion questions, interactive chevrons |
| action-hover | #004BB8 | Button hover states, link hover states |
| ink | #00185E | Headlines, section titles, feature card headings, footer column labels |
| ink-secondary | #4D5B7C | Body copy, descriptions, secondary text, FAQ answers |
| canvas | #FFFFFF | Page background, card surfaces, input fields, banner backgrounds |
| surface | #F5F5F5 | Subtle section alternation, code blocks, disabled input backgrounds |
| surface-inverse | #000E9C | Footer background, deep brand moments, high-contrast navigation areas |
| border | #B8C4E0 | Card outlines, banner borders, structural dividers |
| border-light | #E0E6F0 | Accordion item separators, subtle horizontal rules |
| accent-cyan | #00C9FF | Illustration accents, gradient endpoints, decorative geometric elements |
| accent-green | #5CE1E6 | Illustration fills, secondary gradient stops, promotional highlights |

The light mode dominates content sections: white canvas with navy ink and blue action elements. The dark inverse mode appears exclusively in the footer, where the deep blue surface carries white text and a brighter blue subscribe button. Accents cyan and green appear primarily in illustrative contexts—geometric server graphics and promotional imagery—rather than as UI chrome. The system maintains consistent contrast: ink on canvas for readability, white on inverse for accessibility, and action blue against both for interactive prominence.

## Typography

Source Sans Pro serves as the sole type family, providing a neutral, highly legible sans-serif suitable for technical content at scale. The hierarchy distinguishes roles through weight and size rather than family change, creating a cohesive reading experience.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Source Sans Pro | 2.5rem | 700 | 1.1 | -0.01em | Page hero headlines, major promotional titles |
| section-display | Source Sans Pro | 2rem | 700 | 1.2 | 0 | Section headings, feature grid titles |
| body | Source Sans Pro | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, FAQ answers |
| body-bold | Source Sans Pro | 1rem | 700 | 1.6 | 0 | Emphasized inline terms, technical parameters |
| label | Source Sans Pro | 0.875rem | 600 | 1.4 | 0.01em | Button text, navigation labels, form labels |
| navigation | Source Sans Pro | 0.875rem | 600 | 1.4 | 0 | Footer column headers, menu items |
| legal-copy | Source Sans Pro | 0.75rem | 400 | 1.5 | 0 | Copyright, terms, privacy notices |

The type scale builds on a 4px relative unit, with sizes at 10rem steps (40px hero, 32px section, 16px body, 14px label/navigation, 12px legal). Line heights remain tight for display (1.1-1.2) and generous for body (1.6) to support extended technical reading. Letter spacing is slightly negative for hero display to tighten large headlines, neutral elsewhere. Verify licensing for Source Sans Pro through Adobe Systems Incorporated before production use; designed by Paul D Hunt.

## Layout

The layout system employs a centered content container with responsive padding, establishing consistent reading measure across viewports. Sections stack vertically with generous separation, while internal grids use two-column arrangements for feature breakdowns.

The page structure flows from hero through content sections to a deep footer. Content sections maintain horizontal rhythm through aligned left edges and consistent internal gutters. The feature grid in the dedicated server section uses a two-column layout with substantial vertical spacing between rows—each feature block contains a bold heading, descriptive paragraph, and optional inline link. This pattern creates scannable technical documentation without overwhelming density.

The footer inverts the page logic: full-bleed dark blue background with a multi-column link grid. Four primary columns organize navigation (Tools, Support, News, Keep in touch) with labeled subsections. The rightmost column contains an email capture form with stacked input and subscribe button. Below the main grid, a secondary row holds copyright, legal links, and company information. A floating action button with gradient background anchors the bottom-right corner, providing persistent contact access.

Spacing follows a modular scale based on 0.25rem units. Section vertical padding measures 4rem, creating clear territorial boundaries between content types. Component internal padding ranges from 1rem for compact elements to 1.5rem for cards and feature blocks. Grid gutters between feature columns maintain 1.5rem separation.

## Visual language

The visual identity balances corporate authority with approachable clarity. Geometric illustration style dominates promotional and decorative contexts: flat color shapes, isometric server representations, and gradient overlays in cyan-to-green transitions. These illustrations provide the primary color warmth in an otherwise cool palette.

Photography appears minimal; the system relies on constructed graphics and iconography. Social icons in the footer use simple line or filled treatments in white against the dark background. The accordion chevrons are thin, precise, and functional rather than decorative.

Surface treatments remain flat with rare dimensional effects. The promotional banner introduces a light blue border as its defining frame, creating a card-like elevation without shadow. Buttons are solid fills or outlined strokes without gradient, except for the floating plan-a-call button which uses a yellow-to-cyan gradient as a persistent attention element.

The overall density is moderate—technical content requires information richness, but the system manages this through typographic hierarchy and generous line height rather than compact packing. Visual breathing room signals confidence and reduces cognitive load for infrastructure decision-makers.

## Components

### Primary Action Button
- **Anatomy**: Text label centered within a rectangular button
- **Surface and text color**: Solid action blue background (#0056D6) with white text
- **Typography**: label token, 0.875rem, semibold weight
- **Shape**: 0.25rem border radius, no border
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Full-width in forms, intrinsic width in inline contexts
- **Variants**: Hover state darkens to action-hover (#004BB8)

### Secondary Action Button
- **Anatomy**: Text label within a bordered rectangular button
- **Surface and text color**: Transparent background with action blue text and matching border
- **Typography**: label token
- **Shape**: 0.25rem border radius, 1px solid action border
- **Spacing**: Identical padding to primary button
- **Composition**: Appears in promotional banners alongside descriptive text

### Feature Card / Feature Block
- **Anatomy**: Heading, descriptive paragraph, optional inline link
- **Surface and text color**: White or transparent background, ink-secondary body text
- **Typography**: section-display or body-bold for headings, body for descriptions
- **Shape**: No border radius unless contained in panel
- **Spacing**: 1.5rem bottom margin between stacked features; 1.5rem gutter in two-column grids
- **Composition**: Two-column grid on desktop, single column on narrow viewports
- **Hierarchy**: Heading in ink color establishes topic; body in ink-secondary provides detail; inline link in action blue offers deeper navigation

### Accordion Item
- **Anatomy**: Question link, expand/collapse chevron, answer content area
- **Surface and text color**: White background; question text in action blue; answer text in ink-secondary
- **Typography**: label weight for questions (semibold, action-colored), body for answers
- **Shape**: No border radius; bottom border in border-light separates items
- **Spacing**: 1rem vertical padding per item; answer content indented or full-width below question
- **Composition**: Stacked vertical list with right-aligned chevron indicator
- **States**: Collapsed shows question and down chevron; expanded reveals answer and up chevron

### Promotional Banner
- **Anatomy**: Illustrated graphic, headline, description, price button
- **Surface and text color**: White background with light blue border; navy headline; ink-secondary description
- **Typography**: hero-display for headline, body for description, label for button
- **Shape**: 0.5rem border radius for panel; 0.25rem for button
- **Spacing**: Generous internal padding; illustration positioned left with text right
- **Composition**: Horizontal flex layout with graphic and text regions

### Footer (Inverse)
- **Anatomy**: Multi-column link grid, email subscription form, social icon row, legal footer bar
- **Surface and text color**: surface-inverse background (#000E9C); white text; action blue subscribe button
- **Typography**: navigation for column headers, body for links, legal-copy for copyright
- **Shape**: Full-bleed background, no border radius
- **Spacing**: 4rem vertical padding; column gutters distribute evenly
- **Composition**: Four-column grid above, single-row legal bar below
- **Elements**: Social icons (X, LinkedIn, Facebook, YouTube, Twitch, Discord, GitHub, messaging) in white; email input with white background; subscribe button full-width below input

### Floating Action Button
- **Anatomy**: Circular button with phone icon and label
- **Surface and text color**: Yellow-to-cyan gradient background; dark text
- **Typography**: label token
- **Shape**: Pill or circular form with 9999px radius
- **Composition**: Fixed position, bottom-right viewport corner

## Responsive behavior

The design should adapt from multi-column desktop layouts to stacked single-column arrangements on narrow viewports. The feature grid collapses from two columns to one, maintaining vertical spacing between items. The footer link grid should stack columns sequentially, preserving section grouping. Accordion items remain functionally identical across breakpoints, with touch targets expanding to minimum 44px height. The promotional banner should stack illustration above text on narrow screens, with the price button remaining prominent. Typography scales down modestly: hero-display may reduce to 2rem, section-display to 1.5rem on mobile. Horizontal page padding should increase proportionally as viewport narrows, maintaining content readability without excessive line length.

## Practical implementation guidance

### Preserve
- The deep blue footer as a strong brand signature; the surface-inverse color is distinctive to OVHcloud's identity
- Source Sans Pro as the exclusive type family; the weight range (400-700) provides sufficient hierarchy without family proliferation
- The two-column feature grid pattern for technical specification presentation
- Action blue for all interactive elements; maintain consistent link and button coloring
- Geometric illustration style with cyan-green gradients for promotional moments

### Avoid
- Introducing additional type families; the system's neutrality depends on Source Sans Pro's consistency
- Using the accent cyan and green for UI chrome; reserve these for illustration and decorative contexts
- Shadow-based elevation; the system relies on borders and color contrast for separation
- Generic placeholder imagery; constructed graphics align with the technical brand

### Recommended Build Order
1. Establish color tokens and type scale with Source Sans Pro loading
2. Build the footer inverse component as the most structurally complex reusable element
3. Implement accordion pattern for FAQ content
4. Create feature grid with responsive two-column behavior
5. Add promotional banner with illustration placement
6. Polish button states and floating action button positioning

### Accessibility
- Ensure action blue on white meets WCAG AA contrast (4.5:1) for body text; the ink color should exceed this threshold comfortably
- White text on surface-inverse footer background must maintain minimum 4.5:1 contrast
- Accordion questions should be keyboard-focusable with visible focus indicators
- Email input in footer requires associated label for screen readers
- Social icons need accessible names rather than relying on visual recognition alone
- Floating action button should not obscure essential content on zoom or small viewports

## Scope note

This guide covers the marketing page surfaces for OVHcloud's bare-metal server and VPS offerings, including footer navigation, feature grids, FAQ accordions, and promotional banners. It does not include the VPS configurator interface, account dashboard, checkout flows, or mobile-specific navigation patterns. Motion, loading states, and form validation styling are not represented in the supplied material. Measurements are practical adaptation targets derived from visible proportions.
