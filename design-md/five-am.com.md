# How five-am.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/five-am.com-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with 5AM logo, navigation pill, studio location metadata, and large display headline 'WE BUILD STUNNING ONLINE EXPERIENCES' above a concrete-textured phone mockup](https://pin.fontofweb.com/8238?format=jpg)](https://design.withfudge.com/share/pin-8238)

[Homepage hero with 5AM logo, navigation pill, studio location metadata, and large display headline 'WE BUILD STUNNING ONLINE EXPERIENCES' above a concrete-textured phone mockup](https://design.withfudge.com/share/pin-8238)

[![Full-bleed project showcase featuring a LANCH app phone mockup on dark concrete with 'OPEN PROJECT' link, pagination indicator, and slide counter](https://pin.fontofweb.com/8237?format=jpg)](https://design.withfudge.com/share/pin-8237)

[Full-bleed project showcase featuring a LANCH app phone mockup on dark concrete with 'OPEN PROJECT' link, pagination indicator, and slide counter](https://design.withfudge.com/share/pin-8237)

## Overview

5AM presents itself as a design and technology studio through a deliberately restrained visual system. The homepage opens with a stark, almost monastic layout: warm off-white canvas, near-black typography, and generous negative space that lets the work breathe. The design philosophy centers on contrast—between the quiet restraint of the interface and the bold confidence of its oversized headlines, between the minimal UI chrome and the rich, tactile photography of project showcases.

The system is built on a single type family, Satoshi, deployed at dramatic scale differences. A massive display headline dominates the upper viewport while small, precise labels handle navigation and metadata. The color palette is essentially binary—black on warm gray-white—with photography providing the only chromatic variation. This creates a gallery-like environment where the studio's digital work becomes the focal point, framed by architectural concrete textures and dramatic lighting in the project imagery.

Navigation is handled through a floating pill-shaped container that hovers in the header, softening the otherwise rectilinear layout. Action elements follow the same pill logic, creating a family of rounded, capsule-like interactive shapes that punctuate the grid. The overall impression is of a contemporary European studio site: confident, uncluttered, and materially aware.

## Colors

The color system is intentionally minimal, functioning as a neutral stage for project photography rather than an expressive palette in its own right.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headlines, body copy, navigation labels, button backgrounds |
| canvas | #EEEEEE | Page background, section fills, the warm off-white that dominates the viewport |
| surface | #FFFFFF | Navigation pill background, elevated UI elements, button text on dark buttons |

The relationship between these colors is strictly hierarchical. The canvas (#EEEEEE) serves as the dominant ground, appearing across roughly ninety percent of the visible page area. Against this warm gray-white, ink (#000000) provides maximum contrast for all reading material. The surface (#FFFFFF) appears only in contained UI elements like the navigation pill, creating a subtle lift through temperature difference rather than strong value contrast.

Photography introduces the full range of chromatic variation. The project showcases feature desaturated concrete grays, deep blacks in shadow areas, and occasional warm highlights from artificial lighting. These image palettes are never sampled into UI tokens; they remain purely photographic, allowing each project to bring its own atmospheric color while the interface maintains consistent neutrality.

No dark mode is visible in the supplied material. The system appears optimized for light presentation, with the warm canvas providing enough value separation from pure white to prevent clinical coldness.

## Typography

All typography uses Satoshi, a variable sans-serif designed by Deni Anggara and distributed by Indian Type Foundry. The family is deployed at three distinct sizes that create a dramatic scale hierarchy.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Satoshi | 5rem | 400 | 0.9 | -0.0625em | Massive section headlines, the "WE BUILD STUNNING ONLINE EXPERIENCES" statement |
| body-large | Satoshi | 1.125rem | 400 | 1.25 | -0.01875em | Introductory paragraphs, studio description text |
| body | Satoshi | 0.875rem | 400 | 1.3 | -0.01875em | General body copy, metadata, location information |
| label | Satoshi | 0.875rem | 400 | 1.3 | -0.01875em | Button labels, navigation items, small functional text |
| navigation | Satoshi | 0.875rem | 400 | 1.3 | normal | Navigation pill items |
| caption | Satoshi | 0.875rem | 400 | 1.3 | -0.01875em | Parenthetical labels, secondary metadata, image credits |

The most distinctive characteristic is the hero-display treatment: 80px (5rem) type with exceptionally tight line-height (0.9) and aggressive negative tracking (-5px, or -0.0625em). This creates dense, impactful blocks of uppercase text that sit heavily on the page. The tracking is particularly notable—letters nearly touch in the headline, giving it a custom logotype quality despite being standard typesetting.

At the opposite extreme, body and label sizes use 14px (0.875rem) with more relaxed but still tight leading at 18.2px (1.3). The -0.3px letter spacing (-0.01875em) provides a refined, slightly compressed feel that prevents the small text from feeling generic. The 18px (1.125rem) body-large size appears for the studio's positioning statement, offering slightly more presence without breaking the scale hierarchy.

Weight remains consistently at 400 throughout. The visual emphasis comes entirely from scale and tracking manipulation rather than bolding, reinforcing the system's restraint. Verify licensing for Satoshi through Indian Type Foundry before production use.

## Layout

The layout follows an asymmetric editorial model with strong horizontal divisions and unexpected spatial relationships.

The header occupies the full viewport width, containing the 5AM wordmark anchored left and the navigation pill floating right. Below this, a thin horizontal rule separates the header from the main content area, creating a crisp division that feels more like a printed broadsheet than a typical web header.

The hero section introduces a three-column information structure that defies conventional centering. Left-aligned location metadata (Hamburg, Germany; local time; Open Google Maps link) sits beside date information (Monday, March 23, 2026), while the studio description paragraph occupies the right third of the width. This asymmetric distribution creates visual tension and establishes the site's editorial ambition.

The massive hero headline breaks below this metadata row, spanning approximately two-thirds of the viewport width in uppercase. Its scale is such that individual words become graphic elements, with line breaks occurring mid-phrase for rhythmic effect.

Project showcases receive full-bleed treatment within rounded containers. The photography extends edge-to-edge within these panels, with interface chrome overlaid at the bottom edge: an "OPEN PROJECT" link with arrow icon at lower left, a series of vertical progress bars at center, and a slide counter ("1/12") at lower right. This creates a self-contained presentation mode within each project card.

Spacing follows a 4px base unit (0.25rem), with key measurements including 8px (0.5rem) for tight internal padding, 16px (1rem) for content gaps, 28px (1.75rem) for section padding, and larger section breaks implied by the generous white space around the hero headline.

## Visual language

The visual language balances brutalist directness with refined material touches. The near-total absence of color in the interface creates a deliberate void that forces attention toward typography and photography. This is not minimalism for its own sake but a framing device—the studio's work is meant to be the visual event, not the container.

The pill shape emerges as the system's singular soft element. Navigation, buttons, and the header's floating container all share this fully rounded, capsule-like geometry. Against the otherwise rectilinear grid and sharp horizontal rules, these pills function as organic interruptions, suggesting precision manufacturing or medical packaging in their smooth completeness.

Photography treatment emphasizes material texture and dramatic lighting. The LANCH project showcase presents a phone mockup resting on raw concrete, with deep shadows and selective highlights that emphasize surface quality over product clarity. The phone screen itself contains another layer of UI photography, creating a mise-en-abyme effect that speaks to the studio's digital-native focus.

Typography operates as image at display scale. The hero headline's tight tracking and negative line-height cause letterforms to interlock visually, creating a texture nearly as dense as the concrete photography below. This equivalence between type and image—both treated as material surfaces rather than transparent communication—defines the system's sophisticated visual logic.

The small functional text maintains a whispered quality. Location metadata, navigation labels, and button text all share the same 14px size, creating a baseline hum of information that never competes with the headline or photography. Arrow icons accompany functional links, providing directional cues without decorative elaboration.

## Components

**Navigation pill**

- Anatomy: Horizontal container with four text links (WORK, STUDIO, CAREER, CONTACT) and a circular accent button at right
- Surface: White (#FFFFFF) background with near-black text
- Typography: 14px Satoshi, normal letter spacing
- Shape: Fully rounded capsule, border-radius 9999px
- Spacing: Generous internal padding, approximately 2px vertical and 8px horizontal per link
- Composition: Floats right in header, detached from left-aligned wordmark

**Primary action button**

- Anatomy: Text label with optional icon, contained within rounded boundary
- Surface: Near-black (#000000) background with white (#FFFFFF) text, or inverse for secondary treatment
- Typography: 14px Satoshi label style
- Shape: Pill-shaped, fully rounded
- Spacing: Compact padding, approximately 2px vertical and 8px horizontal
- Variants: Dark fill with light text (primary), light fill with dark text (secondary)

**Project showcase card**

- Anatomy: Full-bleed photography container with overlaid bottom chrome
- Surface: Warm gray (#EEEEEE) background frame, image fills interior
- Shape: Rounded corners, approximately 8px radius
- Composition: Large imagery with minimal overlaid UI—project link at lower left, progress indicator center, slide counter lower right
- States: Appears as carousel with multiple slides indicated by vertical bar progress indicator

**Metadata row**

- Anatomy: Multi-column layout with location, time, date, and description
- Typography: 14px body for all entries, with arrow icon on interactive links
- Composition: Asymmetric three-column distribution, left and center columns for factual data, right column for narrative description
- Spacing: Generous vertical breathing room below header rule

**Section headline**

- Anatomy: Large uppercase text block, often with parenthetical label prefix
- Typography: 80px hero-display treatment
- Composition: Left-aligned, spanning partial width with intentional line breaks
- Hierarchy: Small parenthetical label ("(5AM values)") precedes main statement at standard body size

## Responsive behavior

The supplied images show only desktop presentation. Based on the visible layout structure, several responsive adaptations are recommended.

The asymmetric three-column metadata row should stack vertically on narrower viewports, with the studio description moving below the factual metadata. The hero headline at 80px will require scaling down—consider a reduction to 48px (3rem) on tablet and 32px (2rem) on mobile to maintain readability without excessive line breaks.

The navigation pill, currently floating right with multiple items, should collapse to a menu trigger or hamburger icon on mobile. The pill shape can be retained for the trigger button, maintaining visual continuity.

Project showcase cards with full-bleed imagery should remain edge-to-edge on all breakpoints, but the overlaid bottom chrome may need repositioning. The progress indicator and slide counter could move to a more thumb-accessible location on mobile devices.

The generous section spacing (approximately 7rem) should compress to 4rem on tablet and 3rem on mobile to maintain proportional rhythm without excessive scrolling.

## Practical implementation guidance

**Preserve**
- The dramatic scale contrast between 80px headlines and 14px body text
- The warm off-white canvas (#EEEEEE) rather than pure white; this temperature is essential to the site's material quality
- Pill-shaped interactive elements throughout; this is the system's signature geometry
- Asymmetric editorial layouts rather than centered or balanced compositions
- Tight tracking on display type; the -5px treatment is not a browser default and must be explicitly specified
- Full-bleed photography with minimal overlay chrome

**Avoid**
- Adding color to the interface palette; the monochrome restraint is deliberate
- Bolding text for emphasis; the system uses scale and tracking, not weight
- Centering the hero headline; left-alignment with partial width creates the intended editorial tension
- Replacing the pill navigation with conventional horizontal links
- Using pure white (#FFFFFF) for page backgrounds; this creates a colder, more generic impression

**Recommended build order**
1. Establish the 4px base grid and warm canvas background
2. Implement Satoshi at 400 weight with the three defined sizes
3. Build the navigation pill with proper floating behavior
4. Create the hero section with asymmetric metadata row
5. Add the display headline with exact tracking and line-height
6. Implement project showcase cards with rounded containers and overlaid chrome
7. Refine spacing relationships between sections

**Accessibility**
- The near-black on warm off-white provides strong contrast for body text
- The 80px headline's tight line-height (0.9) may cause clipping in some browsers; test carefully and consider a slightly relaxed value if necessary
- Navigation within the pill should maintain clear focus indicators despite the rounded shape
- Project showcase imagery should include alt text describing the visible work; the overlaid text alone may not sufficiently describe the project
- The small 14px text size meets minimum standards but should not be reduced further; ensure browser zoom behaves correctly

## Scope note

This guide covers the 5AM homepage including header, hero section with studio metadata, and project showcase presentation. Interior pages, mobile breakpoints, hover states, loading behavior, and motion design are not represented in the supplied material. The contact form, career listings, and studio detail pages are outside the current scope. Verify licensing for Satoshi through Indian Type Foundry before production use.
