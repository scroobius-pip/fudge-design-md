# How mellow.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/mellow.io-design)

Last updated: 2026-08-10

## Captured pages

[![Testimonials section with three cards in warm peach and sage green, featuring serif display headings and star ratings](https://pin.fontofweb.com/6738?format=jpg)](https://design.withfudge.com/share/pin-6738)

[Testimonials section with three cards in warm peach and sage green, featuring serif display headings and star ratings](https://design.withfudge.com/share/pin-6738)

[![Dark footer with multi-column navigation, trust badges, and app store download buttons](https://pin.fontofweb.com/6736?format=jpg)](https://design.withfudge.com/share/pin-6736)

[Dark footer with multi-column navigation, trust badges, and app store download buttons](https://design.withfudge.com/share/pin-6736)

[![FAQ accordion section with cream background, serif FAQ heading, and chevron expand icons](https://pin.fontofweb.com/6735?format=jpg)](https://design.withfudge.com/share/pin-6735)

[FAQ accordion section with cream background, serif FAQ heading, and chevron expand icons](https://design.withfudge.com/share/pin-6735)

[![Close-up of single testimonial card showing serif body text, avatar, and five-star rating](https://pin.fontofweb.com/6737?format=jpg)](https://design.withfudge.com/share/pin-6737)

[Close-up of single testimonial card showing serif body text, avatar, and five-star rating](https://design.withfudge.com/share/pin-6737)

## Overview

Mellow.io presents a sophisticated fintech identity that balances editorial warmth with professional credibility. The system serves freelancers and contractors seeking international payment solutions, and its visual language reflects this through approachable elegance rather than corporate austerity. The design alternates between deep, immersive dark surfaces and soft cream canvases, creating rhythmic contrast across page sections. A distinctive serif display typeface provides personality and trust, while a clean Swiss sans-serif handles functional text with precision. The overall impression is of a modern financial tool that understands creative professionals—polished enough for business, warm enough for human connection.

## Colors

The palette operates in two primary modes: a light mode built on warm cream with near-black text, and a dark mode that inverts to pure black surfaces with light text. Accent colors appear as soft, desaturated surfaces rather than loud highlights.

| token | value | use |
|---|---|---|
| ink | #232222 | Primary text on light surfaces, active navigation states |
| ink-secondary | #222222 | Secondary text, button backgrounds |
| canvas | #F8F2E9 | Primary page background, light sections |
| surface-dark | #000000 | Footer, dark sections, primary action backgrounds |
| surface-peach | #F6D8BA | Testimonial cards, warm accent surfaces |
| surface-sage | #C6D3CE | Alternate testimonial cards, muted accent surfaces |
| surface-warm | #EDE2D6 | Subtle warm backgrounds, card variations |
| accent-teal | #5E8B7F | Success indicators, subtle UI accents |
| muted | #8A8686 | Secondary labels, disabled states, footer category headers |
| action-primary | #232222 | Primary button text, dark interactive elements |
| action-inverse | #FFFFFF | Text on dark buttons, footer links, inverse actions |

The light mode dominates content sections, with the cream canvas providing a warm alternative to sterile white. Dark mode appears in the footer and select immersive sections, creating visual weight at page boundaries. The peach and sage surfaces function as soft differentiators within card-based layouts, particularly for social proof and testimonials. No gradients or shadows are used; color blocking and surface contrast provide all spatial definition.

## Typography

Two families create a clear hierarchy: PP Neue World for display and editorial moments, and Font—specifically the file labeled "Font-Copyright C 2016 Swiss Typefaces Sàrl All Rights Reserved"—for everything functional and readable.| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | PP Neue World | 5.833rem | 400 | 1 | -0.03em | Page hero headlines, primary value propositions |
| section-display | PP Neue World | 4.333rem | 400 | 1 | -0.03em | Section headings, FAQ titles, testimonial headers |
| sub-section-display | PP Neue World | 3rem | 400 | 1.2 | normal | Card titles, medium display moments |
| body-large | Font | 1.5rem | 400 | 1.2 | normal | Primary body text, navigation, card descriptions |
| body | Font | 1.5rem | 400 | 1.2 | normal | Standard paragraph text |
| body-small | Font | 1.167rem | 400 | 1.3 | normal | Secondary descriptions, footer links |
| label | Font | 1rem | 400 | 1.16 | normal | Captions, metadata, small UI text |
| label-medium | Font | 1.167rem | 500 | 1.3 | normal | Emphasized labels, button text, active states |
| navigation | Font | 1.5rem | 400 | 1.2 | normal | Header navigation, dropdown menus |

PP Neue World, designed by Mathieu Desjardins and available from Pangram Pangram Foundry, brings an editorial serif quality with tight tracking that feels contemporary rather than traditional. The functional sans-serif, credited to Swiss Typefaces as "Font-Copyright C 2016 Swiss Typefaces Sàrl All Rights Reserved," provides the clean, neutral readability expected in financial interfaces. Verify licensing for these families before production use.

## Layout

The layout follows a generous, centered container model with substantial horizontal breathing room. Page gutters are wide at 8rem, creating an editorial margin that frames content elegantly. Sections stack vertically with consistent 5.333rem vertical rhythm, allowing each content block to feel distinct without excessive separation.

The header uses a split composition: logo anchored left, navigation centered-right, and a prominent dark "Log In" button at the far right. Navigation items include dropdown indicators, suggesting hierarchical wayfinding for "For Businesses," "For Contractors," and "Resources."

Content sections employ asymmetric layouts where display headings often sit left-aligned with body content flowing to the right. The FAQ section demonstrates this clearly: a large serif "FAQ" heading occupies the left third, while accordion items fill the remaining two-thirds. This ratio creates visual tension and prevents the page from feeling like a centered column.

Cards appear in grid formations with consistent 2rem gaps. Testimonial cards use equal-width columns, while feature cards may vary in surface color to create visual rhythm. The footer expands to full dark width, using a multi-column grid that organizes dense link hierarchies into scannable categories.

## Visual language

The visual character is defined by warmth through restraint. Rounded corners are present but modest—cards use 1.333rem radii, buttons are slightly more pill-like at 0.833rem. There are no sharp 90-degree corners on interactive elements, yet nothing feels overly soft or playful.

Photography and illustration appear minimal in the captured surfaces; the system relies on typography and color blocking for expression. When avatars appear, they are simple line-drawn portraits rather than photographs, maintaining the clean, approachable aesthetic.

Iconography is sparse and functional: chevrons for accordion states, arrows for external links, stars for ratings. The star ratings use filled black stars on semi-transparent dark pills, creating subtle contrast against warm card backgrounds.

The overall density is low. Text sizes are large, line lengths are comfortable, and padding within cards is generous at 2rem. This spaciousness communicates confidence and reduces the cognitive load of financial decision-making.

## Components

### Header

- **Anatomy**: Logo mark left, horizontal navigation center-right, primary action button far right
- **Surface**: Transparent over cream canvas, or cream background when scrolled
- **Typography**: Navigation uses `{typography.navigation}` at 1.5rem regular weight
- **Shape**: No border radius on the container; individual buttons use `{rounded.button}`
- **Spacing**: 1.333rem vertical padding, 8rem horizontal page gutter
- **Composition**: Flex row with logo fixed left, navigation cluster centered, action pinned right

### Primary Button

- **Anatomy**: Text label with generous horizontal padding
- **Surface**: Dark background `{colors.action-primary}` with `{colors.action-inverse}` text, or inverse for secondary
- **Typography**: `{typography.label-medium}` at 1.167rem, weight 500
- **Shape**: `{rounded.button}` at 0.833rem, creating a soft rectangle
- **Spacing**: 1.333rem vertical, 2rem horizontal padding
- **States**: The "Log In" button shows the filled dark treatment; navigation links show text-only with hover potential

### Testimonial Card

- **Anatomy**: Serif quote text, avatar with name and role, five-star rating pill
- **Surface**: Alternating `{colors.surface-peach}` and `{colors.surface-sage}` backgrounds
- **Typography**: Quote uses `{typography.section-display}` at 4.333rem PP Neue World; attribution uses `{typography.body-small}` Font
- **Shape**: `{rounded.card}` at 1.333rem
- **Spacing**: 2rem internal padding, generous vertical space for quote breathing room
- **Composition**: Quote dominates upper two-thirds; attribution and rating sit bottom-left and bottom-right respectively
- **Variants**: Peach and sage colorways alternate in grid position

### FAQ Accordion

- **Anatomy**: Question text with right-aligned chevron icon, expandable answer area
- **Surface**: Transparent on cream canvas; hairline dividers between items
- **Typography**: Questions use `{typography.body-large}` Font at 1.5rem; answers use same family at 1.5rem with relaxed leading
- **Shape**: No card container; full-width items with bottom borders
- **Spacing**: 2rem vertical padding per item, 8rem left gutter for section heading
- **Composition**: Section heading "FAQ" in serif display left-aligned; accordion stack right-aligned with ample margin
- **States**: Chevron rotates to indicate expand/collapse; one item shows expanded answer with paragraph text

### Footer

- **Anatomy**: Logo and trust badges left, multi-column link grid center, social and app downloads right
- **Surface**: Full-width `{colors.surface-dark}` with white and muted text
- **Typography**: Category headers use `{typography.label}` in muted gray; links use `{typography.body-small}` in white
- **Shape**: No border radius on container; app store buttons use `{rounded.button}`
- **Spacing**: Generous internal padding, column gaps wide enough for scanability
- **Composition**: Four-column link grid with clear category hierarchy; social icons with external link arrows

### Star Rating Pill

- **Anatomy**: Five filled stars on semi-transparent dark rounded background
- **Surface**: Dark pill with near-black stars
- **Shape**: Full pill radius at 9999px
- **Spacing**: Compact internal padding, positioned bottom-right of testimonial cards

## Responsive behavior

The wide 8rem page gutters should compress on narrower viewports, likely reducing to 2rem on tablet and 1rem on mobile. The FAQ's asymmetric two-thirds layout should stack vertically on smaller screens, with the serif heading moving above the accordion. Testimonial cards should transition from three-column grid to single-column scroll on mobile, maintaining card width and internal spacing. Navigation should collapse to a hamburger menu, with the "Log In" button remaining visible in the header bar. Typography scales should reduce proportionally: hero display may drop to 3.5rem, section display to 2.5rem, while body text maintains 1.5rem for readability.

## Practical implementation guidance

### Preserve
- The warm cream canvas as the dominant light mode background; do not substitute pure white
- The strict serif/sans-serif pairing: PP Neue World for display only, Font for all functional text
- Alternating peach and sage card surfaces in testimonial grids
- Generous page gutters and internal card padding; the spaciousness is core to the brand feel
- The dark footer as a full-width visual anchor with multi-column link organization

### Avoid
- Adding drop shadows to cards; the system uses flat color blocking exclusively
- Using the serif face for body text or long paragraphs; it is display-only
- Introducing bright, saturated accent colors; the palette is intentionally muted and warm
- Centering all content; the asymmetric left-heading layouts are distinctive
- Shrinking body text below 1.5rem; readability is prioritized over density

### Recommended build order
1. Establish the cream canvas and dark surface color tokens
2. Implement Font at 1.5rem body with proper line height
3. Add PP Neue World for section and hero display sizes
4. Build the header with navigation and primary button
5. Create the FAQ accordion with asymmetric layout
6. Implement testimonial cards with alternating surface colors
7. Construct the dark footer with multi-column grid

### Accessibility
- Ensure the cream canvas `#F8F2E9` against ink `#232222` meets WCAG AA contrast ratios; it should pass for large text and likely passes for normal text
- Dark footer links must maintain sufficient contrast against the black background; the muted category headers may need adjustment for WCAG compliance
- Accordion items need clear focus indicators and keyboard operability
- The serif display typeface should be used at sizes large enough for readability; avoid below 2rem

## Scope note

This guide covers the contractor-facing marketing pages including testimonials, FAQ, and footer surfaces. Pricing tables, dashboard interfaces, mobile navigation behavior, and form interactions are not represented in the captured materials. Animation, hover states, and loading patterns are not documented." Verify licensing for these families before production use.
