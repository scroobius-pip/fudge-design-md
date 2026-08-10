# How sweetshop.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/sweetshop.app-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with pink background, dripping icing graphic, Sweet Shop logo, and device mockups showing comic store app interface](https://pin.fontofweb.com/3079?format=jpg)](https://design.withfudge.com/share/pin-3079)

[Hero section with pink background, dripping icing graphic, Sweet Shop logo, and device mockups showing comic store app interface](https://design.withfudge.com/share/pin-3079)

[![Publisher announcement cards with dark navy panels, pink icing drips, and IDW and Image Comics branding on light cream background](https://pin.fontofweb.com/3080?format=jpg)](https://design.withfudge.com/share/pin-3080)

[Publisher announcement cards with dark navy panels, pink icing drips, and IDW and Image Comics branding on light cream background](https://design.withfudge.com/share/pin-3080)

[![Features grid with nine white cards showing app capabilities with navy icons and text on warm cream background](https://pin.fontofweb.com/3081?format=jpg)](https://design.withfudge.com/share/pin-3081)

[Features grid with nine white cards showing app capabilities with navy icons and text on warm cream background](https://design.withfudge.com/share/pin-3081)

[![Newsletter signup section with email input, pink submit button, social media links in colorful pills, and footer attribution](https://pin.fontofweb.com/3082?format=jpg)](https://design.withfudge.com/share/pin-3082)

[Newsletter signup section with email input, pink submit button, social media links in colorful pills, and footer attribution](https://design.withfudge.com/share/pin-3082)

## Overview

Sweet Shop presents a digital comics storefront with a distinctive confectionery aesthetic. The design pairs a warm cream canvas with bold pink accents that evoke candy and icing, creating an immediately playful and approachable personality. Navy blue provides the primary typographic anchor, grounding the sweetness with professional readability. The visual system relies on generous rounded corners, card-based content organization, and illustrative elements like dripping icing graphics that reinforce the brand's candy-store metaphor across every section.

The homepage structure flows from a dramatic hero announcement through publisher partnerships, feature explanations, and finally a newsletter conversion area. Each section maintains consistent spacing rhythm and typographic hierarchy while allowing background color shifts to create visual progression. Device mockups demonstrate the app's actual interface, connecting the marketing page to the product experience. The overall impression balances fun and functionality—appealing to comic readers without sacrificing clarity about the service's capabilities.

## Colors

| token | value | use |
|---|---|---|
| action | #E85A9C | Primary buttons, links, submit actions, and accent text |
| action-hover | #D14A8C | Hover state for interactive pink elements |
| ink | #1A2B4A | Primary headings, body text, and dark card backgrounds |
| ink-secondary | #4A6B8A | Descriptions, secondary text, and muted content |
| canvas | #FFF5EE | Page background and light sections |
| surface | #FFFFFF | Card backgrounds, input fields, and content panels |
| surface-dark | #1A2B4A | Publisher announcement cards and dark feature panels |
| accent-blue | #5AB4E8 | Informational highlights, ribbon badges, and secondary accents |
| accent-coral | #E87A5A | Warm accent for variety and publisher branding moments |
| border | #E8DDD5 | Subtle dividers and input field borders |

The color system operates in three modes. The light mode dominates: warm cream canvas with white cards and navy text. Dark mode appears selectively for publisher announcement cards, where the navy background inverts to create emphasis and visual rest. The pink action color threads throughout as the brand's signature, appearing in buttons, links, and decorative elements. The accent-blue serves functional highlighting in corner ribbons and informational labels, while accent-coral provides warm variety in illustrated publisher assets. No true black appears in the interface; the deepest value is the navy ink, which softens the overall impression and harmonizes with the warm cream.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Poppins | 4rem | 800 | 1.1 | -0.02em | Main hero headline and major announcements |
| section-display | Poppins | 2.5rem | 700 | 1.2 | -0.01em | Section headings and feature titles |
| body | Poppins | 1rem | 400 | 1.6 | 0 | Primary reading text and descriptions |
| body-small | Poppins | 0.875rem | 400 | 1.5 | 0 | Secondary descriptions and card content |
| label | Poppins | 0.75rem | 600 | 1.4 | 0.05em | Buttons, tags, and uppercase labels |
| navigation | Poppins | 0.875rem | 600 | 1.4 | 0.02em | Navigation items and social links |

The type system uses Poppins across all roles, leveraging its geometric clarity and friendly roundness to match the brand personality. Weights range from Regular (400) through Semi Bold (600), Bold (700), and Extra Bold (800), with the heaviest weight reserved for the hero display to create maximum impact. The tight negative tracking on display sizes enhances the bold, graphic quality of headlines. Body text maintains generous line height for comfortable reading of feature descriptions and publisher details.

Poppins was designed by Jonny Pinhorn for the Indian Type Foundry. Verify licensing for these families before production use.

## Layout

The page follows a single-column centered layout with maximum content width constraints. Sections stack vertically with generous vertical spacing between them, creating clear separation without heavy borders. The hero section breaks this pattern with a full-bleed pink background that extends edge to edge, establishing immediate visual drama.

Content containers center within the viewport with consistent horizontal padding. The features grid uses a three-column layout at desktop widths, with cards arranged in rows of three maintaining equal heights through implicit grid alignment. The publisher announcement cards use a two-column internal layout: illustrated asset on the left, text content on the right, with the entire card sitting centered on the cream canvas.

Spacing follows a modular system based on a 0.25rem unit. Section spacing of 6rem creates breathing room between major content areas. Card internal padding of 1.5rem provides comfortable text margins without excessive whitespace. Grid gaps of 1.5rem maintain consistent rhythm between related cards. The newsletter section compresses slightly with tighter vertical spacing, signaling its supporting role in the page hierarchy.

## Visual language

The design's most distinctive element is the confectionery metaphor executed through color, illustration, and form. The dripping icing graphic that spans the top of the publisher section transforms a simple color block into a playful brand moment. This organic, flowing shape contrasts with the otherwise geometric card-based layout, adding personality and movement.

Corner ribbons in accent-blue announce new information with diagonal text, creating urgency without disrupting the card's rectangular calm. Device mockups in the hero section use realistic framing with soft shadows, presenting the app interface as tangible and ready to use. The mockup composition layers phone, tablet, and desktop views with slight rotation, suggesting depth and cross-platform availability.

Icons throughout the features section use simple, recognizable symbols in navy against light backgrounds, maintaining consistency with the typographic color system. Social media pills use platform-appropriate brand colors while maintaining uniform shape and typography, creating a recognizable pattern that scales across multiple services. The overall visual impression is polished and professional while maintaining the accessible, fun character appropriate for a comics audience.

## Components

### Primary Action Button

- **Anatomy**: Text label centered within a rectangular container
- **Surface**: Solid pink background with white text
- **Typography**: `{typography.label}` with uppercase treatment
- **Shape**: Rounded corners at `{rounded.button}`
- **Spacing**: Padding of 0.75rem vertical and 1.5rem horizontal
- **Composition**: Typically appears inline with input fields or standalone
- **Variants**: The newsletter submit button demonstrates the standard treatment

### Input Field

- **Anatomy**: Text entry area with placeholder text
- **Surface**: White background with subtle border
- **Border**: `{colors.border}` at 1px
- **Typography**: `{typography.body}` for entered text, muted color for placeholder
- **Shape**: Rounded corners matching button radius
- **Spacing**: Padding of 0.75rem vertical and 1rem horizontal
- **Composition**: Frequently paired with action button in horizontal arrangement

### Feature Card

- **Anatomy**: Icon, heading, and description stacked vertically
- **Surface**: White background on cream canvas
- **Typography**: Heading uses `{typography.section-display}` at smaller responsive size, description uses `{typography.body-small}`
- **Shape**: Rounded corners at `{rounded.card}`
- **Spacing**: Internal padding of `{spacing.card-padding}`
- **Composition**: Arranged in three-column grid with consistent gaps
- **Hierarchy**: Icon above heading above description, all left-aligned

### Publisher Announcement Card

- **Anatomy**: Illustrated panel, text block with label, heading, description, and link
- **Surface**: Dark navy background with light text
- **Typography**: Label uses `{typography.label}` in accent-blue, heading uses `{typography.section-display}` in white, description uses `{typography.body-small}` in muted light tone
- **Shape**: Rounded corners at `{rounded.card}`
- **Spacing**: Generous internal padding, image panel occupies roughly half the card width
- **Composition**: Horizontal layout with image left, text right
- **Variants**: Corner ribbon variant for "Just Announced!" announcements

### Social Pill

- **Anatomy**: Platform icon and username label
- **Surface**: Platform-specific brand color as solid background
- **Typography**: `{typography.navigation}` in white
- **Shape**: Full pill at `{rounded.pill}`
- **Spacing**: Padding of 0.5rem vertical and 1.25rem horizontal
- **Composition**: Horizontal row of pills with consistent spacing between items

## Responsive behavior

The design should maintain its single-column structure on narrow viewports, with the three-column features grid collapsing to two columns and then one column as space decreases. The publisher announcement cards should stack their internal image and text vertically on smaller screens, preserving readability while adapting the horizontal desktop layout.

The hero section's device mockups should scale proportionally, potentially reducing to a single primary device view on mobile to prevent overcrowding. Typography should scale down by approximately 20-25% on mobile, with the hero display reducing to approximately 2.5rem to maintain fit within viewport width.

The newsletter input and button should stack vertically on narrow screens, with the button expanding to full width below the input field. Social pills should wrap to multiple rows as needed, maintaining their pill shape and internal spacing.

## Practical implementation guidance

### Preserve
- The warm cream canvas as the dominant background; it distinguishes the brand from sterile white-page competitors
- The bold pink action color for all primary interactive elements; it carries the confectionery brand promise
- The navy-to-white contrast hierarchy; it ensures readability while maintaining personality
- The rounded card aesthetic; the generous radius is essential to the friendly, approachable character
- The dripping icing illustration as a signature brand element; it transforms generic sections into memorable moments

### Avoid
- Replacing the cream with pure white; this loses the warmth that softens the bold pink and navy
- Using black instead of navy for text; the navy harmonizes with the warm palette while black would create harsh contrast
- Sharp corners on cards and buttons; the rounded aesthetic is fundamental to the brand personality
- Cluttering the hero with additional text; the device mockups and headline should dominate
- Overusing the accent-blue; it should remain special for announcements and highlights

### Recommended Build Order
1. Establish the color system and typography scale with Poppins loaded at all required weights
2. Build the section spacing and max-width container system
3. Create the card component with its rounded corners and padding
4. Implement the features grid as the primary content pattern
5. Add the hero section with its full-bleed pink background and device mockups
6. Build the publisher announcement cards with dark variant styling
7. Add the newsletter section with input-button pair and social pills
8. Implement the dripping icing graphic as a decorative top border element

### Accessibility
- Ensure the pink action color meets contrast requirements against white; the vivid tone may need darkening for small text
- Provide visible focus states on all interactive elements, using outline or box-shadow in navy
- Maintain readable text sizes on the dark publisher cards; the muted description text may need lightening
- Add alt text to all device mockups describing the app interface shown
- Ensure the diagonal ribbon text remains readable and does not rely solely on color for meaning

## Scope note

This guide covers the Sweet Shop marketing homepage as visible in the supplied images, including the hero announcement, publisher partnerships, features grid, and newsletter conversion sections. The actual app interface shown in device mockups, mobile-specific layouts, animation behavior, form validation states, and checkout flows are not included. Measurements are practical adaptation targets derived from visual inspection.
