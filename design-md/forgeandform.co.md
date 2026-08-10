# How forgeandform.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/forgeandform.co-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with black background, coral f&f logo, contact prompt, and legal links in muted gray text](https://pin.fontofweb.com/113?format=jpg)](https://design.withfudge.com/share/pin-113)

[Footer section with black background, coral f&f logo, contact prompt, and legal links in muted gray text](https://design.withfudge.com/share/pin-113)

[![Social feed grid with six Twitter-style cards on vibrant coral-red background showing app design work](https://pin.fontofweb.com/112?format=jpg)](https://design.withfudge.com/share/pin-112)

[Social feed grid with six Twitter-style cards on vibrant coral-red background showing app design work](https://design.withfudge.com/share/pin-112)

[![Projects grid with four portfolio items on light gray background including First Contact, Squall, Meek, and Wide Sky](https://pin.fontofweb.com/111?format=jpg)](https://design.withfudge.com/share/pin-111)

[Projects grid with four portfolio items on light gray background including First Contact, Squall, Meek, and Wide Sky](https://design.withfudge.com/share/pin-111)

[![Clients section with electric purple background displaying Netflix, Dropbox, Uber, and Target logos in white](https://pin.fontofweb.com/110?format=jpg)](https://design.withfudge.com/share/pin-110)

[Clients section with electric purple background displaying Netflix, Dropbox, Uber, and Target logos in white](https://design.withfudge.com/share/pin-110)

## Overview

Forge and Form presents a portfolio experience built on dramatic color blocking and confident typographic restraint. The visual system alternates between neutral, content-forward surfaces and saturated accent fields that announce section boundaries with authority. The design prioritizes large-scale imagery and motion work, letting project thumbnails and social embeds dominate the viewport while maintaining clear hierarchical structure through scale and weight differences. The overall impression is of a studio comfortable with bold color, generous whitespace, and precise grid alignment—qualities that reflect the motion and interactive design work being showcased. Navigation and secondary information recede visually, allowing the creative output to remain the focal point across every section.

## Colors

The palette operates on a principle of high-contrast alternation: neutral grounds for content density, saturated accents for section definition, and absolute black for the footer anchor. The system uses color as a spatial tool, creating clear territorial boundaries between portfolio sections.

| token | value | use |
|---|---|---|
| ink | `#000000` | Primary text, footer background, Meek project thumbnail ground |
| canvas | `#e8e8e8` | Projects section background, neutral content surfaces |
| accent-coral | `#e85a5a` | Social feed section background, brand logo mark |
| accent-purple | `#4a00ff` | Clients section background, First Contact project thumbnail |
| surface-light | `#ffffff` | Card backgrounds, social embed containers, logo color on dark grounds |
| muted-ink | `#666666` | Secondary text, captions, legal copy, footer links |

The two accent colors—coral and purple—never appear together in the same section, maintaining visual clarity and preventing chromatic competition. The coral red carries warmth and energy appropriate for social and community content, while the electric purple conveys technical sophistication and enterprise credibility for the client roster. Black serves dual duty as both maximum-contrast text on light grounds and the absorptive footer ground that closes the page with finality. White appears primarily as a surface color within cards and as reversed text or logos on saturated fields. The muted gray handles all secondary information without competing for attention.

## Typography

The type system pairs a humanist sans-serif for running text and navigation with a bold geometric sans for display and brand moments. This combination creates functional hierarchy through weight and family contrast rather than size alone.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Proxima Nova | 4rem | 700 | 1 | -0.02em | Client logos as text, major section statements |
| section-display | Gibson | 2rem | 400 | 1.2 | 0 | Section headings like "Projects" and "Clients" |
| body | Gibson | 1rem | 400 | 1.5 | 0 | Project descriptions, card content, general reading |
| label | Gibson | 0.75rem | 400 | 1.4 | 0.02em | Dates, metadata, footer legal text |
| navigation | Gibson | 0.875rem | 400 | 1.4 | 0 | Primary navigation, secondary links |

Proxima Nova appears exclusively in its Bold weight, deployed for maximum impact at display scale. Gibson carries the communicative load across all sizes and contexts, from small legal copy to section headings. The type scale is tightly constrained: display sizes are multiples of the 0.25rem unit, with the hero at 16 units and section display at 8 units. Body text sits at 4 units, creating clear octave relationships between levels. Letter spacing remains tight or neutral throughout; no size uses expanded tracking, preserving the modern, compact character of the system.

Verify licensing for these families before production use. Proxima Nova is designed by Mark Simonson and available through Mark Simonson Studio. Gibson attribution is not supported by the available source data.

## Layout

The page structure follows a full-bleed section model where each major area extends to viewport edges with distinct background colors. Content within sections is constrained to a centered grid with consistent internal margins.

The Projects section uses a two-column grid with equal-width cards separated by substantial gutters. Each card contains a thumbnail image above a text baseline with project name and category description. The grid maintains consistent vertical rhythm: thumbnails share aspect ratio, text baselines align across columns, and horizontal rules separate entries with precision.

The Social feed section abandons the neutral canvas for the coral field, placing three columns of Twitter-style embed cards at the top and continuing with additional rows below. Cards float as discrete white rectangles with internal padding, rounded corners, and shadow separation from the saturated ground. The layout breathes through generous external margins between cards and the section edges.

The Clients section returns to a single-row, four-column presentation on the purple field. Logos distribute evenly with ample horizontal space, avoiding crowding while maintaining visual connection through consistent scale and white color treatment.

The Footer inverts to black, using a horizontal flex layout: brand mark and contact prompt left-aligned, legal and policy links right-aligned, with a vertical divider separating the logo zone from the content zone.

Section spacing follows a rhythm of 6rem vertical padding, creating clear breathing room between color fields without excessive distance. Internal grid gaps of 1.5rem maintain card separation without fragmenting the visual field.

## Visual language

The design language balances editorial restraint with playful color confidence. Imagery dominates every content section—project thumbnails, social embeds, and client logos all function as visual anchors. The system avoids decorative elements; every visual choice serves content presentation.

Photography and screenshots appear without borders or frames, relying on grid alignment and background contrast for definition. Cards within the social section receive subtle rounded corners and implied elevation through white surfaces against saturated grounds. The brand mark "f&f" uses a distinctive ligature treatment with an ampersand that reads as part of the monogram, rendered in the accent coral on dark grounds.

Motion and interactivity are suggested through the nature of the work shown—After Effects interfaces, video editors, animated UI components—rather than through interface chrome. The design system itself remains static and confident, letting the portfolio content demonstrate kinetic capability.

Iconography is minimal and functional: social platform icons in the header, small disclosure indicators on project cards. These reduce to simple geometric forms without stylistic elaboration.

## Components

### Project Card

- **Anatomy**: Thumbnail image, project name, category description, disclosure indicator
- **Surface**: Thumbnail sits directly on the canvas background; text area below with no visible card container
- **Typography**: Project name uses `{typography.section-display}` at reduced scale or `{typography.body}` with bold weight; category uses `{typography.label}` in muted ink
- **Shape**: Thumbnail corners are sharp (0 radius); no border
- **Spacing**: Thumbnail occupies full card width; text baseline sits 1rem below image bottom; horizontal rule appears 0.75rem below text baseline
- **Composition**: Two cards per row with 1.5rem gutter; equal widths
- **Variants**: Some thumbnails use photographic content, others use solid color grounds with centered text or graphics

### Social Embed Card

- **Anatomy**: Header with avatar, username, handle, and platform icon; media content area; date footer
- **Surface**: `{colors.surface-light}` background with `{rounded.card}` corners
- **Typography**: Username uses `{typography.body}` with bold weight; handle and date use `{typography.label}` in muted ink
- **Shape**: 0.5rem border radius on card container
- **Spacing**: Internal padding of 1rem on all sides; media fills width between padding zones
- **Composition**: Three-column grid on desktop with 1.5rem gutters; cards maintain consistent internal structure across content types

### Client Logo Row

- **Anatomy**: Section heading and four logo marks in horizontal distribution
- **Surface**: `{colors.accent-purple}` full-bleed background
- **Typography**: "Clients" heading uses `{typography.section-display}` in ink on purple; logos render as white SVG or image assets
- **Shape**: No containers or borders; logos float directly on color field
- **Spacing**: Logos distribute with equal visual weight; generous horizontal margins prevent crowding
- **Composition**: Single row, four items; heading positioned above with standard section padding

### Footer

- **Anatomy**: Brand mark, contact prompt with call-to-action, legal links
- **Surface**: `{colors.ink}` background throughout
- **Typography**: Prompt label uses `{typography.label}` in muted ink; call-to-action uses `{typography.body}` in surface-light; legal links use `{typography.label}` in muted ink
- **Shape**: Full-bleed black bar; vertical divider line separates brand zone from content zone
- **Spacing**: Generous vertical padding; horizontal flex with space-between distribution
- **Composition**: Brand mark left-aligned with contact prompt; legal and policy links right-aligned

## Responsive behavior

The grid system should collapse gracefully as viewport narrows. The Projects two-column grid should transition to single-column at moderate widths, maintaining thumbnail aspect ratio and text proportions. The Social feed three-column grid should reduce to two columns then one, with cards expanding to fill available width while preserving internal padding. The Clients logo row should wrap to two-by-two or stack vertically on narrow viewports, maintaining logo scale and white color treatment. Footer content should stack vertically with brand and contact above legal links, preserving the horizontal divider as a full-width rule. Touch targets for all links should maintain minimum 44px height. The accent color fields should remain full-bleed at all widths, with content margins scaling proportionally.

## Practical implementation guidance

### Preserve
- The stark alternation between neutral and saturated section backgrounds—this rhythm defines the page character
- The tight typographic hierarchy with Gibson handling all functional text and Proxima Nova reserved for bold display moments
- The generous grid gutters that prevent content crowding
- The absolute black footer as a strong terminal element
- White card surfaces as the only elevation mechanism against saturated grounds

### Avoid
- Adding decorative borders or shadows to project cards—their flat presentation is intentional
- Mixing coral and purple in the same section—keep accents territorially separated
- Expanding the type scale beyond the established multiples—restraint is part of the system
- Using Proxima Nova at text sizes—it functions only as display weight
- Reducing footer contrast—the black ground with muted links is a deliberate quiet close

### Recommended build order
1. Establish the section color fields with full-bleed containers
2. Implement the type scale with Gibson at body and navigation sizes
3. Build the Projects grid with two-column layout and consistent thumbnail treatment
4. Add the Social feed section with card components on coral ground
5. Implement the Clients section with purple field and logo distribution
6. Construct the footer with black ground and flex layout
7. Apply Proxima Nova for any display-size headings or logo treatments

### Accessibility
- Ensure white text and logos on purple and coral fields meet WCAG contrast requirements; the purple especially may need verification at smaller sizes
- Provide visible focus indicators for all interactive elements; the minimal interface chrome requires deliberate focus styling
- Maintain semantic heading hierarchy across sections despite the visual size restraint
- Consider reduced-motion preferences for any scroll-triggered section transitions

## Scope note

This guide covers the landing page surface visible in the supplied images: Projects grid, Social feed, Clients roster, and Footer. Navigation behavior, interior project pages, form interactions, and motion specifications are not included. Measurements are practical adaptation targets derived from visual inspection.
