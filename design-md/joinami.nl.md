# How joinami.nl is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/joinami.nl-design)

Last updated: 2026-08-10

## Captured pages

[![News grid with diagonal red accent stripe, large italic display headline, and salmon-pink background with blog cards](https://pin.fontofweb.com/1232?format=jpg)](https://design.withfudge.com/share/pin-1232)

[News grid with diagonal red accent stripe, large italic display headline, and salmon-pink background with blog cards](https://design.withfudge.com/share/pin-1232)

[![Blog listing page with filter dropdowns, featured article with italic display type, and grid of portrait photography cards](https://pin.fontofweb.com/1231?format=jpg)](https://design.withfudge.com/share/pin-1231)

[Blog listing page with filter dropdowns, featured article with italic display type, and grid of portrait photography cards](https://design.withfudge.com/share/pin-1231)

[![Hero section with full-bleed portrait photography, white italic display headline over dark image, and scrolling location marquee](https://pin.fontofweb.com/1230?format=jpg)](https://design.withfudge.com/share/pin-1230)

[Hero section with full-bleed portrait photography, white italic display headline over dark image, and scrolling location marquee](https://design.withfudge.com/share/pin-1230)

[![Footer area with salmon-pink background, white AMI logo, green WhatsApp action button, and red vacancy alert CTA](https://pin.fontofweb.com/1229?format=jpg)](https://design.withfudge.com/share/pin-1229)

[Footer area with salmon-pink background, white AMI logo, green WhatsApp action button, and red vacancy alert CTA](https://design.withfudge.com/share/pin-1229)

## Overview

JoinAMI presents AMI Kappers as a modern, approachable employer in the Dutch hairdressing industry. The visual system centers on warm salmon-pink surfaces that distinguish the brand from clinical corporate recruitment sites. Bold italic display typography in Cera Pro creates energetic headlines that feel personal and dynamic, while Avenir Black handles navigation and labels with confident authority. The design relies heavily on authentic photography of people—colleagues in salon environments, candid moments, and professional portraits—placing human connection above abstract messaging. High contrast between dark photography and white typography, or between warm backgrounds and dark text, creates visual drama without coldness. The overall impression is of a professional yet welcoming organization that values its people and communicates with straightforward warmth.

## Colors

The palette balances warm brand personality with functional clarity. Four core colors anchor the system: deep black for photography and text grounding, warm salmon-pink for brand surfaces, vibrant red for actions and alerts, and clean white for text on dark or saturated backgrounds.

| token | value | use |
|---|---|---|
| ink | #111111 | Primary text, photography backgrounds, dark UI surfaces |
| canvas | #E8AFA3 | Page backgrounds, card surfaces, footer areas, brand warmth |
| action | #E85A4F | Primary buttons, links, alerts, diagonal accent stripes |
| action-hover | #D94A3F | Hover state for primary buttons and interactive red elements |
| surface | #FFFFFF | Text on dark backgrounds, dropdown menus, content cards |
| inverse-ink | #FFFFFF | Text on dark or saturated backgrounds |
| muted-ink | #666666 | Secondary body text, captions, metadata |
| accent-green | #7CB342 | WhatsApp contact button, positive actions |

The salmon-pink canvas color dominates page backgrounds and creates immediate brand recognition. It appears in the news grid, blog listings, and footer areas as a continuous surface that unifies content sections. Black serves dual purposes: as the literal background of full-bleed photography and as the ink color for text on light surfaces. The red action color appears in diagonal graphic stripes, link text, and button fills, creating energetic focal points. The darker action-hover red provides clear interactive feedback on hover states. White text on photography ensures readability without dimming the images. The green accent is reserved for the WhatsApp action, leveraging platform recognition while maintaining brand warmth.

## Typography

Two font families create a clear hierarchy: Cera Pro for expressive display and body text, and Avenir Black for structural labels and navigation. Cera Pro's italic styles carry the brand voice in headlines, while upright styles handle readable body content.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Cera Pro | 4rem | 700 | 0.95 | -0.02em | Hero headlines, major section titles |
| section-display | Cera Pro | 2.5rem | 700 | 1 | -0.01em | Card headlines, featured article titles |
| body | Cera Pro | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, form text |
| body-italic | Cera Pro | 1rem | 400 | 1.6 | 0 | Emphasized body text, quotes |
| label | Avenir | 0.75rem | 900 | 1.2 | 0.08em | Buttons, tags, category labels, "READ MORE" |
| navigation | Avenir | 0.875rem | 900 | 1.2 | 0.06em | Menu items, footer links, filter labels |

Cera Pro appears in Bold Italic for display headlines and Regular Italic for body emphasis, giving the brand a distinctive slanted energy that suggests forward momentum and personality. The tight line height on display sizes (0.95) creates dense, impactful headline blocks. Avenir Black's heavy weight and generous letter-spacing ensure navigation and labels remain legible and authoritative at small sizes.

Cera Pro is designed by Jakob Runge with help from Lisa Fischbach, Irene Vlachou, Ilya Ruderman, and Yury Ostromentsky, available from Type Mates. Avenir is designed by Adrian Frutiger, available from Linotype GmbH. Verify licensing for these families before production use.

## Layout

The layout system alternates between immersive full-bleed photography and structured content grids. Hero sections use edge-to-edge imagery with overlaid text positioned in the lower-left quadrant, maintaining safe margins from screen edges. Content sections on salmon-pink backgrounds employ asymmetric grids: featured articles may span two-thirds width while supporting cards occupy remaining columns.

The news grid demonstrates a clear hierarchy with large featured cards containing full-bleed photography and italic display headlines, alongside smaller cards with portrait images and condensed information. Filter controls appear as a horizontal bar with left-aligned "FILTER BY" label, two dropdown selectors, and a right-aligned apply button.

Spacing follows a modular rhythm based on a 0.25rem unit. Section padding is generous at 6rem, creating breathing room between content areas. Component gaps of 2rem separate cards and related elements. Tight 1rem spacing handles internal card padding and button interiors.

The footer compresses information into a three-zone layout: brand mark and social links left, navigation column center, and promotional CTA right. This maintains hierarchy while accommodating varied content lengths.

## Visual language

Photography drives the visual experience. Images show real people in authentic salon and workplace contexts—colleagues collaborating, stylists at work, candid portraits with genuine expressions. The photographic treatment favors natural lighting, shallow depth of field, and warm color temperatures that harmonize with the salmon-pink interface.

Graphic accents include diagonal red stripes that slash across featured article cards, creating dynamic tension against rectangular photography. These stripes appear at approximately 30-degree angles and use the action red at full opacity.

The "Blog" category tag appears as a small white label with subtle shadow, positioned in the upper-left corner of card images. This treatment maintains readability across varied photography without requiring image darkening.

A scrolling location marquee at the bottom of hero sections uses large display type in salmon-pink on white, or inverse, creating a ticker-tape effect that communicates geographic breadth. The text appears to use the same italic display style as headlines, maintaining typographic continuity.

Iconography is minimal and functional: a hamburger menu icon, dropdown chevrons, and arrow indicators on links. The WhatsApp button includes the platform's speech-bubble icon in white against the green background.

## Components

### Hero Section
- **Anatomy**: Full-bleed background photograph, overlaid text block in lower-left, optional scrolling marquee at bottom edge
- **Surface**: Dark photography background with semi-transparent gradient overlay ensuring text legibility
- **Typography**: `{typography.hero-display}` in white, with `{typography.label}` for category tags
- **Shape**: Full viewport width, approximately 60-70vh height
- **Spacing**: Text inset from left edge by section padding, bottom-aligned with comfortable margin above marquee

### Blog Card (Featured)
- **Anatomy**: Full-bleed photograph, diagonal red accent stripe, white italic headline overlay, "READ MORE" link with arrow
- **Surface**: Photography fills card; text overlays directly with no additional background
- **Typography**: `{typography.section-display}` in white italic for headline; `{typography.label}` in white for link
- **Shape**: Rectangular, approximately 16:9 aspect ratio
- **Spacing**: Internal padding of component spacing; headline positioned in lower-left quadrant

### Blog Card (Standard)
- **Anatomy**: Portrait photograph above, salmon-pink background below, category tag, headline, excerpt, "READ MORE" link
- **Surface**: `{colors.canvas}` for text area; photograph above without border radius
- **Typography**: `{typography.section-display}` in red italic for headline; `{typography.body}` in dark for excerpt; `{typography.label}` in red for link
- **Shape**: Rectangular, approximately 3:4 overall with 1:1 or 4:5 photograph
- **Spacing**: Tight padding between photograph and text; component padding internal to text block

### Filter Bar
- **Anatomy**: "FILTER BY" label, two dropdown selectors, "APPLY" button
- **Surface**: Transparent or matching page background; dropdowns use `{colors.canvas}` with subtle border
- **Typography**: `{typography.navigation}` for label; `{typography.body}` for dropdown text; `{typography.label}` for button
- **Shape**: Rectangular dropdowns with small border radius; square button
- **Composition**: Horizontal row with label left, controls center, button right

### WhatsApp Action Button
- **Anatomy**: Platform icon plus "SEND US A MESSAGE" text
- **Surface**: `{colors.accent-green}` background; `{colors.inverse-ink}` icon and text
- **Typography**: `{typography.label}`
- **Shape**: `{rounded.button}` with moderate horizontal padding
- **Spacing**: Positioned below hero headline with component gap

### Footer
- **Anatomy**: Three columns—brand/social left, navigation center, promotional CTA right
- **Surface**: `{colors.canvas}` continuous with page background
- **Typography**: `{typography.navigation}` in white for links; `{typography.section-display}` in white italic for promotional headline; `{typography.label}` for CTA button
- **Shape**: Full-width panel with generous vertical padding
- **Composition**: Asymmetric three-column grid with brand mark prominent left, navigation stacked center, alert block right

### Vacancy Alert Button
- **Anatomy**: "ACTIVATE VACANCY ALERT" text
- **Surface**: `{colors.action}` background; `{colors.inverse-ink}` text
- **Typography**: `{typography.label}`
- **Shape**: `{rounded.button}`

## Responsive behavior

The design should maintain its warm, people-first character across viewport sizes. At narrower widths, the asymmetric grid collapses to single-column stacking with featured cards remaining full-width. Hero text should scale down proportionally, maintaining the lower-left position with increased margins to preserve readability against photography.

The filter bar should stack vertically on small screens: label above, dropdowns full-width, button full-width below. This prevents horizontal overflow and maintains touch-friendly tap targets.

Footer columns should stack to single column on mobile, with brand mark centered, navigation links in a horizontal row or accordion, and promotional CTA prominent at bottom.

The scrolling location marquee should reduce type size and scroll speed on smaller screens to prevent horizontal layout breakage. Consider hiding or simplifying to a static location count on very narrow viewports.

Touch targets for all interactive elements should maintain minimum 44×44dp for accessibility.

## Practical implementation guidance

### Preserve
- The warm salmon-pink background as the dominant brand surface; it differentiates AMI from cooler corporate competitors
- Italic display typography for headlines; the slanted energy is central to brand personality
- Full-bleed photography with direct text overlay; the design's confidence comes from not hiding images behind opaque panels
- High contrast between white text and dark photography
- The diagonal red accent stripe as a signature graphic element on featured content

### Avoid
- Replacing photography with illustrations or stock imagery; authenticity is core to the recruitment message
- Adding background colors behind hero text that would separate it from photography
- Using the accent green for non-WhatsApp purposes; it carries specific platform association
- Rounding card corners; the design uses sharp rectangles for editorial authority
- Centering display headlines; the left alignment creates dynamic asymmetry

### Recommended Build Order
1. Establish color tokens and apply salmon-pink canvas to page background
2. Implement Cera Pro italic display at hero and section sizes
3. Build hero section with full-bleed photography and overlaid text
4. Create blog card components in featured and standard variants
5. Add filter bar with functional dropdown styling
6. Implement footer with three-column layout
7. Add interactive states and responsive breakpoints

### Accessibility
- Ensure all text over photography meets WCAG AA contrast; use gradient overlays or text shadows where needed
- Provide visible focus indicators for keyboard navigation, particularly on salmon-pink backgrounds
- Maintain logical heading hierarchy: single h1 per page, section displays as h2
- Add aria-labels to icon-only controls like the hamburger menu
- Ensure dropdown filters are operable via keyboard and screen reader

## Scope note

This guide covers the recruitment and news surfaces of joinami.nl as visible in the supplied images. Mobile layouts, form interactions, loading states, and motion behavior are not represented. Measurements are practical adaptation targets derived from visual inspection. The exact spacing, border, and radius values were not retained in the source material and should be verified during implementation.
