# How forbes.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/forbes.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dark-themed Innovation section mega-menu with multi-column category navigation, search bar, and Forbes logo centered at top](https://pin.fontofweb.com/9036?format=jpg)](https://design.withfudge.com/share/pin-9036)

[Dark-themed Innovation section mega-menu with multi-column category navigation, search bar, and Forbes logo centered at top](https://design.withfudge.com/share/pin-9036)

[![Newsletter signup banner with Schnyder S serif headline, email input field, and isometric illustration on black background](https://pin.fontofweb.com/9035?format=jpg)](https://design.withfudge.com/share/pin-9035)

[Newsletter signup banner with Schnyder S serif headline, email input field, and isometric illustration on black background](https://design.withfudge.com/share/pin-9035)

## Overview

Forbes presents a premium editorial experience built on dramatic contrast: near-black surfaces serve as the primary canvas, allowing white and red accents to command attention without visual noise. The system pairs a refined serif display face for headlines and editorial moments with a clean, contemporary sans-serif for navigation, labels, and body content. This dual-typography approach signals authority and readability simultaneously—serif for gravitas, sans-serif for utility. The design language is restrained and confident: generous whitespace, precise alignment, and a limited palette that lets photography and illustration carry emotional weight. Navigation surfaces as expansive mega-menus with clear hierarchical grouping, while promotional modules use bold typographic scale to interrupt the reading flow intentionally. Every element serves the core mission of presenting business journalism with visual sophistication.

## Colors

| token | value | use |
|---|---|---|
| ink | #000000 | Primary background, deepest surface layer, footer and menu foundations |
| ink-secondary | #171717 | Elevated dark surfaces, button backgrounds, subtle depth on black |
| ink-tertiary | #333333 | Borders, dividers, and hairline rules on dark backgrounds |
| canvas | #FCFCFC | Primary text on dark surfaces, input field backgrounds, light surface inversions |
| surface | #F0F0F0 | Secondary light backgrounds, subtle fills when pure white is too stark |
| muted | #BBBBBB | Secondary text on dark backgrounds, disabled states, placeholder text |
| muted-secondary | #7B7B7B | Tertiary text, legal copy, timestamps, de-emphasized labels |
| action | #DC0000 | Primary accent, subscription CTAs, brand moments, critical highlights |
| accent-blue | #4285F4 | Legal links, terms of service references, external trust indicators |

The color system operates in a near-monochrome dark mode with selective warm accents. Black and near-black dominate every surface, creating a cinematic depth that makes editorial photography appear to float. White text maintains crisp legibility across all dark contexts. The red action color appears sparingly—reserved for subscription prompts and high-value conversions where it must break through the disciplined palette. Blue enters only for legal and compliance links, establishing a distinct functional register separate from editorial content. No light-mode variant is visible in the supplied surfaces; the system commits fully to dark aesthetics.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Schnyder S | 2rem | 400 | 1.2 | normal | Editorial headlines, newsletter banners, major section titles |
| section-display | Schnyder S | 2rem | 400 | 1.2 | normal | Category headers, promotional module titles |
| body | Graphik | 1rem | 400 | 1.5 | normal | Default reading text, descriptions, general content |
| body-small | Graphik | 0.875rem | 400 | 1.5 | normal | Secondary body, menu descriptions, supporting copy |
| label | Graphik | 0.75rem | 500 | 1.5 | normal | Buttons, tags, category labels, navigation group headers |
| label-small | Graphik | 0.625rem | 400 | 1.5 | normal | Timestamps, metadata, fine print |
| navigation | Graphik | 0.875rem | 500 | 1.5 | normal | Primary navigation, menu items, header links |
| navigation-large | Graphik | 1.5rem | 400 | 1.5 | normal | Expanded menu links, featured story titles in navigation |
| quote | Georgia | 1.25rem | 400 | 1.4 | normal | Pull quotes, editorial asides, testimonial text |

The type system draws on four distinct families. Schnyder S and Schnyder S-Demi, designed by Christian Schwartz and available from Commercial Type Inc, provide the editorial voice—elegant serifs with sharp contrast between thick and thin strokes that read as both contemporary and established. The design facts list both Schnyder S and Schnyder S-Demi as available weights, with Schnyder S-Demi offering a slightly heavier demi-bold cut for moments requiring additional emphasis within the serif voice. Graphik, also by Christian Schwartz through Commercial Classics Inc, handles all interface and functional typography with geometric clarity and excellent legibility at small sizes. Georgia serves as the system serif for extended reading and quote blocks, offering familiar screen readability. Verify licensing for these families before production use.

## Layout

The layout system builds on a fluid container with generous horizontal padding and strong vertical rhythm. Major sections receive substantial breathing room, with `section` spacing at 5rem and `section-large` at 8rem creating clear territorial boundaries between content types. The navigation mega-menu demonstrates a multi-column grid approach: category clusters arranged in balanced columns with consistent internal spacing, separated by subtle horizontal rules.

Horizontal padding scales with context. The newsletter banner uses expansive `section-large` padding at 8rem horizontally, creating a premium, magazine-like presentation. Navigation elements compress to more utilitarian measures, with menu links padded at 0.625rem vertically and 1rem horizontally for tactile click targets. The overall grid favors asymmetry in promotional moments—text blocks occupy roughly half the width while illustration or photography fills the remainder, creating dynamic tension without chaos.

Vertical stacking follows a strict typographic hierarchy. Labels and metadata sit closest to their associated content with `tight` spacing at 0.5rem. Related paragraphs and descriptions separate by `compact` at 1rem. Distinct content modules require `spacious` at 2rem or `generous` at 2.5rem to signal their independence. The system avoids crowding; even dense navigation menus maintain clear scan paths through deliberate line height and padding choices.

## Visual language

Photography and illustration receive premium treatment against the dark ground. The newsletter banner demonstrates this with an isometric illustration rendered in red, black, and white—directly echoing the interface palette so the artwork feels native rather than decorative. Editorial imagery in category modules appears with natural color, where the dark surrounding frame makes colors appear more saturated by contrast.

The visual language avoids decorative excess. Borders are hairline precision: 1px solid rules in `#333333` separate navigation columns without visual weight. Rounded corners are restrained—0.5rem for functional elements, 1rem for pills and chips. No shadows are employed; depth comes from color value alone, maintaining the flat, confident aesthetic.

Iconography appears minimal and functional. Arrow indicators on category headers suggest expansion or navigation. Search and close icons in the menu bar are simple geometric forms. The Forbes wordmark itself serves as the central anchor, rendered in white against black with classical proportions that harmonize with the Schnyder S headline treatment.

## Components

### Primary button

- **Anatomy**: Text label centered within a rectangular container
- **Surface and text color**: Background `{colors.ink-secondary}`, text `{colors.canvas}`
- **Typography**: `{typography.label}` at 0.75rem, weight 500
- **Shape**: `borderRadius` of 0.5rem, no border
- **Spacing**: Padding of 0.625rem vertically, 2rem horizontally
- **Composition**: Inline with adjacent elements, or stacked with 1rem top margin
- **Variants**: The red subscription button in the header uses `{colors.action}` background with identical structure

### Secondary button

- **Anatomy**: Text label within a light-filled container
- **Surface and text color**: Background `{colors.canvas}`, text `{colors.muted-secondary}`
- **Typography**: `{typography.label}`
- **Shape**: `borderRadius` of 0.5rem
- **Spacing**: Identical padding to primary button
- **Composition**: Paired with primary buttons or used for lower-priority actions

### Navigation mega-menu

- **Anatomy**: Full-width overlay with centered Forbes logo, search bar, multi-column category grid, and utility links
- **Surface and text color**: Background `{colors.ink}`, all text `{colors.canvas}`
- **Typography**: Category headers use `{typography.navigation}` with arrow indicators; individual links use `{typography.navigation-large}` at 1.5rem for featured items and `{typography.body-small}` for standard entries
- **Shape**: No border radius on the container; internal category pills use 0.5rem radius
- **Spacing**: Container padding of 1.5rem vertical; category columns separated by 2rem horizontal gaps; list items padded 0px 0px 1.375rem for consistent touch targets
- **Composition**: Three to four column grid for categories, right-rail for featured content and utilities
- **Hierarchy**: "Featured" section receives visual priority with larger link sizes; standard categories follow in balanced columns

### Newsletter signup banner

- **Anatomy**: Section label, large serif headline, email input field, submit button, legal disclaimer, and supporting illustration
- **Surface and text color**: Background `{colors.ink}`, headline and label `{colors.canvas}`, legal text `{colors.muted-secondary}`, links `{colors.accent-blue}`
- **Typography**: Section label uses `{typography.label}` in all caps; headline uses `{typography.hero-display}` in Schnyder S; input placeholder uses `{typography.body}` in muted tone
- **Shape**: Input field with 0.5rem radius; button with 0.5rem radius
- **Spacing**: Generous 8rem horizontal padding; 1.5rem between headline and input row; 0.5rem between input and legal text
- **Composition**: Text block left-aligned occupying approximately 50% width; illustration positioned right with partial bleed
- **Variants**: Compact version may stack illustration above text on narrower viewports

### Input field

- **Anatomy**: Single-line text entry with placeholder text
- **Surface and text color**: Background `{colors.canvas}`, text `{colors.ink}`, placeholder `{colors.muted-secondary}`
- **Typography**: `{typography.body}`
- **Shape**: `borderRadius` of 0.5rem
- **Spacing**: Padding of 0.75rem vertical, 1rem horizontal
- **Composition**: Full-width within its container or constrained to a maximum readable measure

### Category link with arrow

- **Anatomy**: Text label followed by right-pointing arrow icon
- **Surface and text color**: Text `{colors.canvas}`
- **Typography**: `{typography.navigation}`
- **Shape**: No background; arrow as inline glyph
- **Spacing**: Standard link padding
- **Composition**: Used as section headers within menus to indicate drill-down navigation

## Responsive behavior

The navigation mega-menu likely collapses to a simplified drawer or accordion on smaller viewports, given the density of its multi-column desktop presentation. The category grid should reflow from four columns to two, then to a single stacked list, maintaining the hierarchical grouping but reducing simultaneous visual load.

The newsletter banner's side-by-side composition should invert to vertical stacking, with the illustration moving above the text block and horizontal padding reducing from 8rem to a standard container margin. The email input and submit button may stack vertically on narrow screens, with the button expanding to full width.

Typography scales down proportionally: the 2rem Schnyder S headline may reduce to 1.5rem on mobile, while navigation links compress to 1rem to fit narrower touch targets. Line heights remain generous to preserve readability on smaller screens.

Touch targets must maintain minimum 44px height; the current navigation link padding of 1.375rem bottom spacing supports this at standard root sizes but should be verified against actual computed values.

## Practical implementation guidance

### Preserve
- The stark black-to-white contrast ratio; it defines the premium character
- Schnyder S for all display headlines; the serif voice is irreplaceable for editorial authority
- Generous horizontal padding in promotional modules; the spaciousness signals quality
- The red accent restraint; overuse of `#DC0000` would cheapen the palette
- Multi-column navigation grouping; users scan categories, not linear lists

### Avoid
- Light backgrounds as primary surfaces; the dark mode commitment is total
- Decorative borders or shadows; depth must remain flat and color-based
- Mixing serif fonts; Georgia and Schnyder S serve distinct roles and should not substitute for each other
- Tight letter-spacing on headlines; the default tracking preserves elegance
- Generic button styling; the precise 0.5rem radius and specific padding ratios matter

### Recommended build order
1. Establish the dark foundation: black background, white text, `#171717` elevated surfaces
2. Implement typography hierarchy: Schnyder S at 2rem for headlines, Graphik scale for all UI text
3. Build navigation skeleton: header bar, mega-menu container, column grid
4. Create button and input components with exact padding and radius values
5. Develop newsletter banner as the primary conversion component
6. Add category modules and link patterns
7. Refine responsive behavior and touch targets

### Accessibility
- White text on black exceeds WCAG AAA contrast; maintain this for all essential content
- Red action buttons against black should be verified for contrast compliance; the red may need adjustment for small text
- Ensure focus indicators are visible against dark backgrounds; avoid default browser outlines that may disappear
- Provide skip navigation for the extensive mega-menu structure
- Label all icon-only buttons with accessible names
- Respect `prefers-reduced-motion` for any menu transitions

## Scope note

This guide covers the dark-themed navigation system, newsletter promotional module, and category browsing surfaces visible on the Forbes homepage and Innovation section. Article detail pages, video players, light-mode variants, search results, account flows, and mobile-specific layouts are not represented in the supplied materials.
