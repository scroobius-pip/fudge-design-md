# How visualelectric.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/visualelectric.com-design)

Last updated: 2026-08-10

## Captured pages

[![Top navigation bar with white text links, centered logo, and orange pill-shaped Get Started button on black background](https://pin.fontofweb.com/2727?format=jpg)](https://design.withfudge.com/share/pin-2727)

[Top navigation bar with white text links, centered logo, and orange pill-shaped Get Started button on black background](https://design.withfudge.com/share/pin-2727)

[![Footer section with tilted image collage of diverse photography and large white wordmark with orange sunburst icon](https://pin.fontofweb.com/2726?format=jpg)](https://design.withfudge.com/share/pin-2726)

[Footer section with tilted image collage of diverse photography and large white wordmark with orange sunburst icon](https://design.withfudge.com/share/pin-2726)

[![Call-to-action section with centered headline, orange pill button, and scattered rotated image cards on black background](https://pin.fontofweb.com/2725?format=jpg)](https://design.withfudge.com/share/pin-2725)

[Call-to-action section with centered headline, orange pill button, and scattered rotated image cards on black background](https://design.withfudge.com/share/pin-2725)

[![Testimonial section with three staggered paper-texture quote cards in mint and pink on black background](https://pin.fontofweb.com/2724?format=jpg)](https://design.withfudge.com/share/pin-2724)

[Testimonial section with three staggered paper-texture quote cards in mint and pink on black background](https://design.withfudge.com/share/pin-2724)

## Overview

Visual Electric presents itself as a creative platform for generating AI images and videos, built around a stark dark-mode aesthetic that lets colorful photography and bold accent elements command attention. The design system operates on a high-contrast principle: an absolute black canvas supports white typography, while a vivid orange serves as the singular energetic accent for calls to action and brand identity. The overall impression is editorial and gallery-like, with content arranged in deliberately casual, rotated compositions that suggest creative freedom rather than rigid grid conformity. The interface avoids decorative chrome in favor of generous negative space, allowing the product's visual output to become the primary design material. Navigation is minimal and unobtrusive, appearing as simple text links that recede until needed. The system balances professional credibility with creative playfulness through its combination of restrained UI elements and expressive image treatments.

## Colors

The color system is intentionally austere, built on a near-monochrome foundation with a single high-saturation accent. This restraint ensures that user-generated imagery and promotional photography remain the chromatic focus of every view.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, navigation bar, footer, all dark sections |
| ink | #FFFFFF | Primary text, logos, navigation links, button labels on dark surfaces |
| action | #FF4D00 | Primary call-to-action buttons, brand sunburst icon, hover emphasis |
| surface | #1A1A1A | Elevated card backgrounds, testimonial cards, subtle container differentiation |
| muted-ink | #999999 | Secondary text, footer category labels, disabled or less prominent states |

The canvas color establishes an immersive dark environment that makes photography pop while reducing eye strain during extended creative sessions. The action orange carries significant brand equity, appearing in the sunburst logo mark and every conversion-focused button. No gradient fills are present in the interface; color transitions happen through photography or solid blocks. The surface token provides just enough lift from pure black to create depth for layered elements like testimonial cards without introducing visual noise. Text hierarchy relies entirely on weight and size rather than color variation, maintaining the binary light-on-dark relationship throughout.

## Typography

The type system pairs a distinctive extended sans-serif for display and brand moments with a neutral grotesque for functional text. This creates clear role separation between expressive headlines and utilitarian interface copy.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Maison Neue Ext-Demi | 3.5rem | 600 | 1.1 | -0.02em | Page headlines, major section titles, brand statements |
| section-display | Maison Neue Ext-Demi | 2.5rem | 600 | 1.15 | -0.01em | Subsection headings, feature introductions |
| body | Inter | 1rem | 400 | 1.5 | 0 | Paragraph text, descriptions, testimonials |
| label | Maison Neue | 0.75rem | 500 | 1.2 | 0.05em | Buttons, category tags, uppercase metadata |
| navigation | Inter | 0.875rem | 400 | 1 | 0 | Top navigation links, footer links |

Maison Neue Ext-Demi, designed by Timo Gaessner and available from Monotype Imaging Inc, provides the brand's distinctive voice through its wide proportions and confident weight. The extended width creates visual impact at large sizes without requiring excessive weight. Inter, designed by Rasmus Andersson and available from Rsms, handles all functional reading tasks with its optimized screen proportions and extensive character support. The label style uses uppercase transformation with positive tracking for button text and category headers, creating a crisp, technical counterpoint to the fluid imagery. Display sizes employ negative tracking to maintain tight, cohesive word shapes despite the extended character widths. Verify licensing for these families before production use.

## Layout

The layout philosophy prioritizes immersive full-bleed sections with minimal container constraints. Content areas frequently extend to viewport edges, using internal padding rather than max-width containers to control measure. The system relies on strong vertical rhythm established through generous section spacing rather than visible dividers.

Section spacing follows a 6rem baseline between major content areas, with internal component spacing at 1.5rem for related elements. The navigation bar maintains a fixed or sticky position with horizontal padding of approximately 2rem, distributing links across the full width with the logo centered precisely. This center-weighted navigation creates formal balance against the asymmetric content below.

Content composition deliberately breaks conventional grid alignment. Image cards appear rotated at slight angles—typically between 8 and 15 degrees—creating a scattered, organic arrangement that suggests creative spontaneity. These rotated elements overlap slightly and cast subtle shadows, enhancing the dimensional quality. Despite this apparent randomness, the compositions maintain optical balance through careful size variation and color distribution.

The testimonial section uses a three-column arrangement with intentional vertical offset: the center card sits lower than the flanking cards, creating a subtle pyramid or staggered rhythm. Cards maintain consistent internal padding while allowing their rotated positioning to create dynamic negative space between them.

## Visual language

The visual language centers on photography as the primary expressive material, with the interface designed to recede completely. Images receive no border radius in their default presentation, appearing as sharp rectangles that emphasize their content. The rotation treatment applied to promotional imagery is the signature compositional gesture, transforming standard product photography into dynamic, poster-like elements.

The brand mark combines a geometric sunburst icon with extended wordmark typography. The sunburst appears in orange against white or white against orange depending on context, maintaining consistent proportions. This icon appears both in the navigation and as a standalone element above call-to-action sections.

Shadow usage is minimal and functional, appearing only to separate overlapping rotated images from the black background. These shadows are soft and diffuse rather than sharp, suggesting ambient depth rather than directional light. No border treatments separate elements; contrast and spacing perform this role exclusively.

The overall aesthetic references editorial design and contemporary art direction more than conventional SaaS interfaces. The darkness of the canvas creates a theater-like presentation environment where each image becomes a focal point. This approach aligns with the product's purpose as a visual creation tool, demonstrating confidence in visual content over interface embellishment.

## Components

**Navigation bar**
- Anatomy: Horizontal flex container with left-aligned text links, center-aligned logo mark, right-aligned authentication actions
- Surface: Transparent or solid black background matching canvas
- Typography: Navigation token for all text links
- Composition: Links distributed with generous gap spacing, logo positioned with mathematical centering
- Variants: Default state shows text links in white; active or hover states may shift to muted-ink

**Primary action button**
- Anatomy: Pill-shaped container with centered label text
- Surface: Solid action orange background with white text
- Typography: Label token, uppercase
- Shape: Full pill radius (9999px)
- Spacing: 0.75rem vertical padding, 1.5rem horizontal padding
- States: Default appears as filled orange; no visible disabled state in supplied imagery

**Secondary action button**
- Anatomy: Pill-shaped container with centered label text
- Surface: Transparent background with 1px white border
- Typography: Label token
- Shape: Full pill radius matching primary action
- Spacing: Identical padding to primary action
- Use: Login and less prominent actions in navigation area

**Image card**
- Anatomy: Rectangular photograph with optional rotation transform
- Surface: No border radius, no visible border
- Composition: Rotated between 8-15 degrees, overlapping adjacent cards slightly
- Shadow: Subtle diffuse shadow separating from black background
- Variants: Various aspect ratios visible including portrait and landscape orientations

**Testimonial card**
- Anatomy: Rectangular container with quote text, attribution block containing circular avatar and name/title/company text
- Surface: Paper-texture background in mint or pink tint
- Typography: Body token for quote text, label token for attribution names in uppercase
- Shape: 0.5rem border radius
- Spacing: 2rem internal padding
- Composition: Staggered vertical positioning with center card offset downward

**Footer**
- Anatomy: Multi-column link grid with category headers, social icon row, large wordmark lockup
- Surface: Black background continuous with page canvas
- Typography: Label token for category headers in muted-ink, navigation token for link text
- Composition: Four-column link grid left-aligned, social icons right-aligned, full-width wordmark below
- Hierarchy: Category labels in muted gray establish grouping; links in white provide readable targets

## Responsive behavior

The supplied imagery shows desktop presentation exclusively. Based on the visual system, several responsive adaptations should be considered. The navigation bar's spread layout with centered logo will require collapse to a hamburger menu or simplified arrangement at narrow widths. The rotated image compositions, while visually striking, may need reduced rotation angles and simplified stacking on mobile to maintain legibility and prevent excessive scroll height. The three-column testimonial arrangement should stack vertically on narrow viewports, preserving the staggered offset as sequential spacing rather than horizontal displacement. The large footer wordmark will require significant scale reduction to fit mobile widths, potentially becoming a centered element rather than left-aligned. Touch targets for pill buttons should maintain minimum 44px height across all breakpoints. The dark canvas color remains appropriate across all device types and lighting conditions.

## Practical implementation guidance

**Preserve**
- The absolute black canvas as the dominant background; any lightening breaks the gallery-like immersion
- The single orange accent for all primary actions; distributing this color elsewhere dilutes its conversion impact
- The extended display type for headlines; substituting a narrower face loses the brand's confident stance
- The rotated image treatment for promotional compositions; this is the primary distinctive visual gesture
- Generous section spacing; crowding elements destroys the editorial breathing room

**Avoid**
- Adding decorative borders, dividers, or background patterns that compete with photography
- Using gradient fills or drop shadows on UI elements; keep dimensional effects for image layers only
- Introducing additional accent colors beyond the orange; the monochrome-plus-one system is intentionally strict
- Rounding image corners; the sharp rectangle treatment maintains editorial seriousness
- Centering body text except in explicit call-to-action sections; left alignment supports reading rhythm

**Recommended build order**
1. Establish the black canvas and white text defaults
2. Implement the typography scale with Maison Neue Ext-Demi for headlines and Inter for body
3. Build the navigation bar with centered logo and pill button pattern
4. Create the primary and secondary button components with exact pill shaping
5. Develop the rotated image card composition system with transform utilities
6. Add the testimonial card with paper texture backgrounds and staggered positioning
7. Construct the footer with multi-column link grid and large wordmark

**Accessibility**
- Ensure orange action buttons maintain minimum 3:1 contrast ratio against black; the vivid orange typically satisfies this
- Provide visible focus states for all interactive elements; the current design shows no focus indication
- Add `prefers-reduced-motion` support for any rotation animations; static rotation is acceptable but animated entrance may cause vestibular issues
- Consider a light mode alternative for users with photophobia, though this extends beyond the current system
- Maintain semantic heading hierarchy despite the visual casualness of rotated elements

## Scope note

This guide covers the marketing homepage surface of Visual Electric as visible in supplied desktop imagery. Mobile layouts, in-app interface elements, pricing tables, documentation pages, and motion behavior are not represented. Measurements are practical adaptation targets derived from visual estimation against a 4px relative unit. The image rotation angles and exact stagger positions should be treated as directional rather than mathematically precise values.
