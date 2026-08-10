# How stardrift.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/stardrift.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with centered search input, red Explore pill button, and destination photo strip at bottom](https://pin.fontofweb.com/5842?format=jpg)](https://design.withfudge.com/share/pin-5842)

[Hero section with centered search input, red Explore pill button, and destination photo strip at bottom](https://design.withfudge.com/share/pin-5842)

[![Feature section with flight booking cards on warm gray panels and category carousel with Flights, Rail, Hotels](https://pin.fontofweb.com/5845?format=jpg)](https://design.withfudge.com/share/pin-5845)

[Feature section with flight booking cards on warm gray panels and category carousel with Flights, Rail, Hotels](https://design.withfudge.com/share/pin-5845)

[![Calendar integration demo with itinerary map and floating preference pills in light blue](https://pin.fontofweb.com/5844?format=jpg)](https://design.withfudge.com/share/pin-5844)

[Calendar integration demo with itinerary map and floating preference pills in light blue](https://design.withfudge.com/share/pin-5844)

[![Testimonial carousel with red quotation marks, user avatars, and navigation arrows](https://pin.fontofweb.com/5843?format=jpg)](https://design.withfudge.com/share/pin-5843)

[Testimonial carousel with red quotation marks, user avatars, and navigation arrows](https://design.withfudge.com/share/pin-5843)

## Overview

Stardrift presents an AI-powered travel assistant through a deliberately restrained visual system. The interface balances generous whitespace with warm, tactile surfaces, letting functional content breathe while maintaining clear hierarchy. A single vivid red accent punctuates an otherwise neutral palette, drawing attention to primary actions without visual noise. The system pairs a clean sans-serif for all reading text with a monospace face for labels and metadata, creating a subtle technical-meets-human tone appropriate for an intelligent assistant. Rounded corners appear throughout at consistent scales, from full pill buttons to softly rounded panels, reinforcing approachability. The overall impression is of a premium but unpretentious service—sophisticated enough for business travel, friendly enough for leisure planning.

## Colors

The color system is intentionally minimal, relying on temperature and saturation contrast rather than complexity. Warm off-whites and light grays establish a physical, paper-like quality, while near-black text ensures crisp readability. The red accent is used sparingly but decisively for the most important interactive moments.

| token | value | use |
|---|---|---|
| canvas | #FFFFFF | Primary page background, preference pill fills, input field interiors |
| surface | #F5F3EF | Feature card backgrounds, search input background, testimonial card fills |
| ink | #111111 | Primary text, headings, navigation links, body copy |
| muted-ink | #6B6B6B | Secondary text, placeholder copy, preference pill text, metadata |
| action | #E53935 | Primary buttons, logo mark, quotation marks, active states |
| action-hover | #C62828 | Darker red for pressed or hovered action states |
| border | #E5E5E5 | Subtle dividers, card outlines, input borders in rest state |
| border-subtle | #EEEEEE | Very light separators, internal card divisions |

The warm surface tone distinguishes Stardrift from cooler, more clinical SaaS interfaces. Red appears exclusively for interactive commitment—booking, exploring, signing up—never as decorative emphasis. Dark text on light backgrounds provides the primary reading mode; no dark mode is visible in the supplied material. Photography in destination strips introduces natural color variation that the neutral system accommodates without competition.

## Typography

Two families drive the typographic hierarchy: Schibsted Grotesk for all proportional text and DM Mono for labels, tags, and technical metadata. This pairing creates clear functional separation—human voice versus system voice—without visual clutter.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Schibsted Grotesk | 3rem | 400 | 1.1 | -0.02em | Hero headline, major section titles |
| section-display | Schibsted Grotesk | 2.25rem | 400 | 1.15 | -0.01em | Feature section headings |
| body | Schibsted Grotesk | 1rem | 400 | 1.5 | 0 | Paragraphs, descriptions, card content |
| body-small | Schibsted Grotesk | 0.875rem | 400 | 1.5 | 0 | Secondary descriptions, card metadata |
| label | DM Mono | 0.75rem | 400 | 1.4 | 0.05em | Category tags, section labels, button text |
| navigation | Schibsted Grotesk | 0.875rem | 400 | 1 | 0 | Top-bar links, utility navigation |

Schibsted Grotesk carries the full range of display and body work with a single weight, relying on size and spacing for hierarchy rather than weight contrast. DM Mono, designed by Colophon Foundry, provides the technical accent for small uppercase-style labels. Verify licensing for these families before production use. Type sizes are set in rem units based on a 16px root, with the 4px relative unit providing the underlying grid for all measurements.

## Layout

The page employs a centered, single-column content flow with occasional full-bleed interruptions. Maximum content width appears constrained to a comfortable reading measure, approximately 1200px, with generous horizontal padding that expands on wider viewports.

The hero section occupies substantial vertical space, centering the brand name, tagline, and primary search interaction against pure white. Below, destination photography breaks to full viewport width, creating a grounding horizontal band that separates the airy hero from subsequent content.

Feature sections alternate between white and warm surface backgrounds, establishing clear territorial boundaries without heavy separators. The "Smart Travel Search" section places editorial text left with a cascading card composition right, suggesting an asymmetric two-column grid that favors content over rigid symmetry. Cards within this composition overlap and stagger, implying depth without shadow dependency.

The testimonial section uses a horizontal scroll or carousel pattern, with cards arranged in a continuous row that extends beyond the viewport edge. Navigation arrows sit at the section bottom-right, indicating manual control rather than auto-advance.

Spacing between major sections is generous, approximately 6rem, allowing each feature to register as a distinct thought. Internal component padding of 1.5rem maintains consistent breathing room across cards, inputs, and interactive elements.

## Visual language

The interface communicates through restraint and selective warmth. Rounded corners are pervasive but disciplined—panels use 1rem, buttons and pills use full rounding, creating a family of related shapes rather than arbitrary variation. The absence of heavy shadows keeps the space feeling open; depth is suggested through overlapping card placement and subtle border definition rather than elevation effects.

A distinctive decorative element appears in the form of fine dotted patterns, visible behind certain card compositions. These patterns use the action red at very low opacity, creating a sense of digital constellation or mapping that reinforces the travel and AI themes without literal illustration.

Photography treatment in destination strips is cinematic and immersive—full-bleed images with gradient overlays that preserve text legibility for location labels. Images are not rounded or framed; they meet the viewport edge directly, contrasting with the contained, rounded UI elements above.

The red logo mark in the navigation bar reappears as quotation marks in testimonials, creating a consistent brand signature that scales from icon to decorative accent. This repetition builds recognition without requiring a complex icon system.

## Components

### Primary action button

The primary button is a fully rounded pill containing white label text and often a trailing arrow icon. It sits at the bottom-right of the search input in the hero, and as a standalone sign-up trigger in the navigation.

- **Anatomy**: Background fill, centered text, optional right icon
- **Surface**: Solid action red background with white text
- **Typography**: DM Mono label style, uppercase treatment implied by font choice
- **Shape**: Full pill rounding, generous horizontal padding
- **Spacing**: 0.75rem vertical, 1.5rem horizontal padding
- **Composition**: Typically right-aligned within its container or inline with related elements

### Search input

A large, inviting text entry field that dominates the hero section. It combines the functional role of search with the visual presence of a feature card.

- **Anatomy**: Rounded rectangle container, placeholder text, embedded primary action button
- **Surface**: Warm surface background, no visible border in rest state
- **Typography**: Body size placeholder in muted ink
- **Shape**: 0.75rem corner radius, substantial height suggesting multi-line capability
- **Spacing**: 1.25rem vertical padding, 1.5rem horizontal, with internal button inset
- **Composition**: Centered in hero, width approximately 600px, button positioned bottom-right interior

### Feature card

Used for flight, rail, and hotel booking examples, these cards demonstrate the product interface within the marketing page.

- **Anatomy**: Rounded panel containing route information, airline branding, pricing, and secondary action
- **Surface**: White or near-white fill, subtle border definition
- **Typography**: Mixed hierarchy—route codes in bold, times in body-small, prices emphasized
- **Shape**: 1rem corner radius
- **Spacing**: 1.5rem internal padding
- **Composition**: Overlapping and staggered in cascading arrangements, with dotted decorative patterns behind

### Preference pill

Floating tags that represent user-configurable travel preferences. They appear in clusters around profile and personalization sections.

- **Anatomy**: Fully rounded container, text label, checkmark or dropdown indicator
- **Surface**: White fill, subtle border, muted ink text
- **Typography**: Body-small in Schibsted Grotesk
- **Shape**: Full pill rounding
- **Spacing**: Compact padding, 0.5rem vertical, 1rem horizontal
- **Composition**: Free-floating, often overlapping or clustered in loose groups suggesting AI-generated suggestions

### Testimonial card

Horizontal carousel items containing user quotes, attribution, and role information.

- **Anatomy**: Quotation mark decoration, paragraph text, avatar image, name, and title
- **Surface**: Warm surface background
- **Typography**: Body for quote, body-small for attribution, label style for section header
- **Shape**: 1rem corner radius
- **Spacing**: 1.5rem padding, substantial internal vertical space
- **Composition**: Equal-width cards in horizontal sequence, partial card visible at viewport edge indicating scrollability

### Navigation bar

Fixed or sticky top bar containing logo, primary links, and utility actions.

- **Anatomy**: Logo mark left, text links center-left, secondary and primary actions right
- **Surface**: Transparent or white background
- **Typography**: Navigation style for links, label style for buttons
- **Shape**: No distinct container shape; elements float freely
- **Spacing**: Comfortable horizontal gaps between elements
- **Composition**: Flex row, space-between alignment, vertically centered

## Responsive behavior

The supplied images show a desktop viewport experience. Based on the visible patterns, several responsive adaptations are recommended. The hero search input should maintain its centered prominence but may reduce internal padding and font size on narrower viewports. The asymmetric feature section with left text and right card cascade should stack vertically on mobile, with cards simplifying to a single column rather than overlapping composition.

Destination photography strips should maintain full bleed but reduce to fewer visible items, potentially scrolling horizontally on narrow screens. Testimonial cards should transition to a single visible card with swipe or arrow navigation, preserving the quotation mark decoration and avatar layout. Preference pills may wrap to multiple lines rather than maintaining their floating, scattered desktop arrangement.

The generous section spacing should compress proportionally, maintaining approximately 60% of desktop values on mobile to preserve breathing room without excessive scrolling. Navigation should collapse to a hamburger menu or simplified logo-plus-action pattern, hiding text links behind an expandable layer.

## Practical implementation guidance

### Preserve
- The warm surface tone against pure white; this temperature difference is central to the brand feel
- The single red accent discipline—use it only for primary commitment actions and brand marks
- The monospace label voice for all small metadata and button text
- Full pill rounding for all primary actions; partial rounding for containers
- Generous whitespace around every major section and component

### Avoid
- Adding secondary accent colors; the system derives energy from restraint
- Heavy drop shadows; use borders and overlapping composition for depth instead
- Weight contrast in Schibsted Grotesk; hierarchy comes from size and spacing
- Sharp-cornered interactive elements; they will feel foreign to this rounded system
- Decorative patterns beyond the subtle dotted constellation motif

### Recommended build order
1. Establish the color foundation with canvas, surface, ink, and action tokens
2. Implement Schibsted Grotesk at hero, section, body, and small sizes
3. Add DM Mono for label and button text
4. Build the search input component as the hero centerpiece
5. Create pill and panel shape tokens, then apply to buttons and cards
6. Implement feature card composition with overlapping placement
7. Add destination strip with gradient overlay text treatment
8. Build testimonial carousel with consistent card structure

### Accessibility
- Ensure the red action color meets contrast requirements against white; the vivid tone suggests it may be borderline for small text
- Provide visible focus states that maintain the rounded aesthetic, perhaps using outline or ring treatments that follow component shapes
- The search input's embedded button should be reachable by keyboard independently of the text field
- Testimonial carousel requires arrow key or swipe gesture alternatives to mouse-only navigation
- Destination image strips should include alt text describing location and visible context, not just generic "travel photo" labels

## Scope note

This guide covers the Stardrift marketing homepage visible in the supplied images, including hero, feature sections, destination photography, and testimonials. Navigation, footer, and interior application screens are not represented. Measurements are practical adaptation targets. No mobile breakpoint behavior, loading states, form validation, or dark mode are documented. Verify licensing for DM Mono and Schibsted Grotesk before production use.
