# How templifica.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/templifica.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large display headline, neon yellow highlight on 'in minutes', checkmark feature list, and dark primary action button on light background](https://pin.fontofweb.com/3376?format=jpg)](https://design.withfudge.com/share/pin-3376)

[Hero section with large display headline, neon yellow highlight on 'in minutes', checkmark feature list, and dark primary action button on light background](https://design.withfudge.com/share/pin-3376)

[![Blog index page with oversized section heading, three-column card grid with rounded image thumbnails, date labels, and article titles](https://pin.fontofweb.com/3375?format=jpg)](https://design.withfudge.com/share/pin-3375)

[Blog index page with oversized section heading, three-column card grid with rounded image thumbnails, date labels, and article titles](https://design.withfudge.com/share/pin-3375)

[![Dark footer section with large white display text, email signup form with neon accent, navigation columns, and social links](https://pin.fontofweb.com/3374?format=jpg)](https://design.withfudge.com/share/pin-3374)

[Dark footer section with large white display text, email signup form with neon accent, navigation columns, and social links](https://design.withfudge.com/share/pin-3374)

[![Pricing card with product thumbnails, neon 'Best value' badge, dark action button with lightning icon, and checkmark feature list](https://pin.fontofweb.com/3373?format=jpg)](https://design.withfudge.com/share/pin-3373)

[Pricing card with product thumbnails, neon 'Best value' badge, dark action button with lightning icon, and checkmark feature list](https://design.withfudge.com/share/pin-3373)

## Overview

Templifica is a Framer template marketplace that communicates speed, confidence, and creative energy through an intentionally bold visual system. The design relies on extreme scale contrasts—massive display headlines set against generous whitespace—to immediately establish hierarchy and draw attention to key messages. A distinctive neon yellow accent color punctuates the otherwise restrained monochrome palette, functioning as both a brand signature and a functional highlight for calls-to-action, badges, and emphasized text fragments.

The interface alternates between light and dark modes: the primary browsing experience uses a near-white canvas with dark text for maximum readability, while the footer and certain immersive sections invert to a deep charcoal surface with white typography. This dual-mode approach creates visual rhythm across long pages and helps section boundaries feel intentional rather than arbitrary. Component design favors rounded rectangles with consistent corner radii, giving the entire system a friendly, approachable character that balances the aggressive scale of the typography.

## Colors

| token | value | use |
|---|---|---|
| canvas | #F6F6F6 | Primary page background; subtle warm gray that reduces eye strain compared to pure white |
| surface | #FFFFFF | Card backgrounds, elevated panels, and content containers on light sections |
| ink | #1A1A1A | Primary text, headings, and dark button surfaces; near-black with slight warmth |
| ink-inverse | #FFFFFF | Text on dark backgrounds, button labels on dark surfaces |
| accent | #DFFF4F | Neon yellow for highlighted text spans, badges, checkmark icons, and primary CTAs |
| muted | #6B6B6B | Secondary text, captions, dates, and de-emphasized content |
| border | #E5E5E5 | Subtle dividers, card outlines, and input field borders |
| surface-inverse | #1E1E1E | Dark section backgrounds, footer, and immersive panels |

The color system operates on a principle of disciplined restraint with strategic eruption. The canvas and surface tokens are nearly indistinguishable in isolation, but their separation allows for subtle elevation effects when cards appear against the page background. The ink color avoids pure black, lending a softer, more contemporary feel to the heavy typography. The accent yellow is the system's emotional core—saturated and slightly green-tinged, it appears in controlled doses: as a background highlight behind key headline words, as a pill badge for "Best value" labels, as filled circles for checkmark icons, and as a thin vertical line accenting form submit buttons. Dark sections use surface-inverse as a deep charcoal rather than true black, preventing harsh contrast while maintaining dramatic impact.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Outfit | 5rem | 600 | 1.05 | -0.03em | Homepage hero headlines; maximum impact at top of page |
| section-display | Outfit | 3.5rem | 600 | 1.1 | -0.02em | Section headings, blog index title, footer display text |
| body | Outfit | 1rem | 400 | 1.6 | 0em | Paragraphs, descriptions, general reading content |
| body-medium | Outfit | 1rem | 500 | 1.6 | 0em | Button labels, emphasized body text, navigation items |
| label | Outfit | 0.75rem | 500 | 1.4 | 0.02em | Dates, captions, small metadata, badge text |
| navigation | Outfit | 0.875rem | 500 | 1.5 | 0em | Header and footer link lists |

The typographic system is built on Outfit, a geometric sans-serif with clean circular forms and confident stroke weights. The design leverages three weights: Regular (400) for extended reading, Medium (500) for interface elements and emphasis, and Semibold (600) for display headlines. The display sizes use aggressive negative tracking to create tight, impactful word shapes that feel intentional and designed rather than default. Line heights are tight for headlines—approaching 1.0—to create solid blocks of color that read as graphic elements, while body text receives generous leading for comfortable reading. The type scale is rooted in a 4px grid, with sizes progressing in whole-number multiples: 12px (0.75rem), 14px (0.875rem), 16px (1rem), 56px (3.5rem), and 80px (5rem).

The supplied font sources include Outfit and False. False is a separate family sourced from a distinct origin; it is not used in the visible interface components documented here. Outfit was designed by Rodrigo Fuenzalida and is distributed by Frag Type. False was designed by Deni Anggara and is distributed by Indian Type Foundry. Verify licensing for these families before production use.

## Layout

The layout system is fundamentally centered and contained, with content rarely stretching to the full viewport width. A maximum content width of approximately 1200px keeps line lengths readable and creates generous side margins that contribute to the premium, unhurried feeling. Sections stack vertically with substantial spacing between them—typically 6rem or more—allowing each content block to breathe and establish its own visual territory.

The grid is flexible and content-driven rather than rigidly columnar. The blog index uses a three-column card grid with consistent gaps, while the footer organizes into a three-column navigation structure on the dark background. The hero section centers all content vertically and horizontally, creating a focused, conversion-oriented landing experience. Cards within grids maintain equal heights through their internal padding and image aspect ratios rather than explicit grid constraints.

Spacing follows a 4px base unit, with semantic tokens aggregating these into practical values. Section spacing at 6rem creates clear hierarchy between major page areas, while content gaps of 1.5rem handle relationships between related elements like card images and their titles. Card padding of 1.5rem provides consistent internal breathing room across all container components. The system avoids hairline spacing—gaps are either tight (0.5rem for related items) or deliberately generous (1.5rem+ for distinct elements), reinforcing the bold, confident character.

## Visual language

The visual language is defined by three core characteristics: extreme typographic scale, neon accent punctuation, and rounded geometric containment. Headlines function as graphic elements as much as text, with individual words or phrases isolated on highlight backgrounds that transform reading into a visual scanning experience. The neon yellow accent appears in organic, slightly irregular highlight shapes behind headline words—suggesting marker strokes rather than precise geometric boxes—which adds human energy to the otherwise clean system.

Imagery follows a curated, professional aesthetic: blog thumbnails show lifestyle photography and device mockups with warm color grading, while product cards display template screenshots in stacked, angled compositions that suggest depth and variety. Images receive rounded corners that match the card radius, creating visual continuity between photograph and container.

Iconography is minimal and functional: checkmarks appear as simple circles with interior dots in the accent color, while buttons use small arrow or lightning icons to indicate action. Social links in the footer use circular dark containers with white symbols. The overall effect is of a system that knows when to be loud (headlines, accents) and when to recede (icons, metadata), creating a rhythm of visual intensity that guides the eye through page content.

## Components

### Primary Action Button

- **Anatomy**: Rectangular container with label text and optional leading or trailing icon
- **Surface**: Dark ink background with white text; or accent background with ink text for secondary emphasis
- **Typography**: `{typography.body-medium}` at 1rem
- **Shape**: 0.75rem border radius, creating a pill-adjacent but distinctly rectangular form
- **Spacing**: 1rem vertical padding, 2rem horizontal padding; icon sits inset with comfortable margin
- **Composition**: Label left-aligned, icon right-aligned; or icon leading with label following
- **Variants**: Dark default on light backgrounds; accent variant for high-visibility promotions; dark with subtle icon background circle for feature buttons

### Content Card

- **Anatomy**: Rounded container with image thumbnail, date label, and title text
- **Surface**: White background on gray canvas; subtle shadow optional
- **Typography**: Date uses `{typography.label}` in muted color; title uses `{typography.body-medium}` at 1rem in ink
- **Shape**: 1rem border radius on container; image fills top portion with matching radius
- **Spacing**: 1.5rem internal padding; image aspect ratio approximately 16:10
- **Composition**: Vertical stack with image dominant, metadata below, title beneath
- **Variants**: Blog card with date and title; pricing card with feature list and action button

### Feature List Item

- **Anatomy**: Accent-colored checkmark icon followed by descriptive text
- **Surface**: Transparent; inherits parent background
- **Typography**: `{typography.body}` at 1rem in muted or ink color
- **Shape**: Circular checkmark container, approximately 1.25rem diameter, filled with accent color
- **Spacing**: 0.75rem between icon and text; 0.75rem between stacked items
- **Composition**: Horizontal alignment with center-vertical icon placement

### Badge

- **Anatomy**: Small pill container with label text
- **Surface**: Accent yellow background with ink text
- **Typography**: `{typography.label}` at 0.75rem, medium weight
- **Shape**: 0.5rem border radius, creating a soft pill
- **Spacing**: 0.25rem vertical padding, 0.75rem horizontal padding
- **Composition**: Inline with related content, typically following a headline or price

### Email Capture Form

- **Anatomy**: Text input field with submit button
- **Surface**: Dark surface-inverse background; input uses subtle border or bottom-edge definition
- **Typography**: Placeholder in muted color; submit label in white medium weight
- **Shape**: Input with minimal radius; submit button with accent left border accent
- **Spacing**: Generous vertical padding in input; submit button full-width with internal padding
- **Composition**: Vertical stack on narrow containers; horizontal expansion possible on wider layouts

### Footer Navigation

- **Anatomy**: Columnar link lists with section headers
- **Surface**: Dark surface-inverse background with white text
- **Typography**: Section headers in muted or small label style; links in `{typography.navigation}` at 0.875rem
- **Spacing**: Generous column gaps; comfortable link spacing within columns
- **Composition**: Three-column grid on desktop, stacking on smaller viewports

## Responsive behavior

The design's bold scale and centered composition suggest a relatively straightforward responsive adaptation. The hero headline at 5rem should reduce to approximately 3rem on tablet and 2.5rem on mobile to maintain readability without excessive line breaks. The three-column blog grid should collapse to two columns on tablet and single column on mobile, with cards maintaining their internal proportions.

The footer navigation's three-column layout should stack vertically on mobile, with each column becoming a collapsible section or simply a stacked block. The email capture form should remain full-width within its container across all breakpoints, with the submit button maintaining its accent border treatment.

Dark sections like the footer should maintain their surface-inverse background across all sizes, as the high contrast is part of the brand expression rather than a luxury of large screens. Touch targets for buttons and links should maintain minimum 44px height, with the primary action button's generous padding already satisfying this requirement.

## Practical implementation guidance

### Preserve
- The extreme scale contrast between display headlines and body text; this is the system's primary personality
- The neon yellow accent in its specific hue; substitutions will lose the energetic, contemporary feeling
- The tight tracking on display sizes; the compressed word shapes are intentional
- The rounded corner consistency across cards, buttons, and images
- The alternation between light and dark sections for visual rhythm

### Avoid
- Pure black (#000000) for text or backgrounds; the slightly warmed ink and charcoal values are essential
- Adding borders or shadows to cards that compete with the clean, flat aesthetic
- Using the accent yellow for large background areas; it functions best in small, focused doses
- Tightening body text line height below 1.5; the generous leading supports readability
- Mixing additional font families; the single-family system is part of the cohesive identity

### Recommended Build Order
1. Establish the 4px base grid and type scale with Outfit at the defined sizes
2. Implement the color tokens, ensuring the accent yellow is exact
3. Build the hero section with centered layout and highlight text treatment
4. Create the card component with image, date, and title structure
5. Implement the primary action button with icon support
6. Build the dark footer with navigation columns and email capture
7. Add the feature list with accent checkmarks for pricing and benefits

### Accessibility
- Ensure the neon yellow accent meets minimum contrast ratios when used for text; the badge application on dark ink text should be verified
- Provide focus indicators for all interactive elements that are visible against both light and dark backgrounds
- Maintain semantic heading hierarchy despite the visual scale; the hero h1 should be followed by logical section h2 elements
- Consider a reduced-motion preference for any scroll-triggered animations of the highlight text treatments
- Ensure placeholder text in email inputs does not substitute for visible labels

## Scope note

This guide covers the homepage and blog index surfaces visible in the supplied images, including hero sections, card grids, pricing presentation, and footer navigation. Template detail pages, checkout flows, and mobile-specific layouts are not represented. Measurements are practical adaptation targets. Motion behavior, hover states, and form validation styling are not documented and should be designed to match the system's bold, clean character. The family False is named in the supplied sources but does not appear in the visible interface documented here.
