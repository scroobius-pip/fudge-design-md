# How bankofamerica.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/bankofamerica.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dark blue specialist CTA section with white pill buttons for revenue-based segmentation](https://pin.fontofweb.com/1111?format=jpg)](https://design.withfudge.com/share/pin-1111)

[Dark blue specialist CTA section with white pill buttons for revenue-based segmentation](https://design.withfudge.com/share/pin-1111)

[![Credit card carousel with product image, headline, description, and navy pill CTA button](https://pin.fontofweb.com/1110?format=jpg)](https://design.withfudge.com/share/pin-1110)

[Credit card carousel with product image, headline, description, and navy pill CTA button](https://design.withfudge.com/share/pin-1110)

[![Multi-column product grid with tabbed navigation, card thumbnails, and navy action buttons](https://pin.fontofweb.com/1109?format=jpg)](https://design.withfudge.com/share/pin-1109)

[Multi-column product grid with tabbed navigation, card thumbnails, and navy action buttons](https://design.withfudge.com/share/pin-1109)

[![Hero banner with login panel overlay, photographic background, and revenue selection radio group](https://pin.fontofweb.com/1108?format=jpg)](https://design.withfudge.com/share/pin-1108)

[Hero banner with login panel overlay, photographic background, and revenue selection radio group](https://design.withfudge.com/share/pin-1108)

## Overview

Bank of America's digital presence for business banking communicates institutional trust through a restrained, high-contrast visual system. The design anchors itself in a deep navy brand color that signals financial authority and stability, paired with generous white space that prevents information density from overwhelming business customers. The interface balances promotional content with functional tools—credit card carousels, product grids, and account access panels coexist within a consistent framework of pill-shaped buttons, clean sans-serif typography, and photography that emphasizes human business activity.

The system prioritizes clarity over ornamentation. Navigation and wayfinding rely on typographic hierarchy rather than decorative elements. Action items use rounded pill buttons that soften the otherwise rectilinear grid. Product imagery—credit cards, laptops showing dashboards, business owners at work—sits within card containers with subtle borders. The overall impression is of a mature, regulated institution that has modernized its digital touchpoints without sacrificing the gravitas expected of a major financial services provider.

## Colors

The color system is built on a foundation of deep navy authority, with a limited accent palette and neutral supporting tones. The brand navy dominates interactive elements, headers, and call-to-action sections, while white and light grays provide breathing room. A single red accent appears in product imagery and brand marks but is restrained in interface usage.

| token | value | use |
|---|---|---|
| brand-navy | #012169 | Primary brand color; fills hero backgrounds, primary buttons, active tab indicators, and headline text |
| brand-red | #E31837 | Accent for brand marks and product imagery; used sparingly in interface elements |
| canvas | #FFFFFF | Page background, card surfaces, text on dark backgrounds, secondary button fills |
| ink | #000000 | Primary body text, strong emphasis, iconography |
| muted-ink | #5A5A5A | Secondary body text, descriptions, placeholder text in form fields |
| surface | #F5F5F5 | Subtle section backgrounds, form field fills, disabled or resting states |
| border | #D5D5D5 | Card outlines, dividers, input field borders, subtle separators |
| action-text | #FFFFFF | Text on navy buttons and dark backgrounds |
| link-blue | #0057B8 | Inline links, secondary navigation, help text, forgot-password links |

The color logic follows a strict hierarchy: navy commands attention and action, white provides clarity and space, grays handle information density, and black anchors readable text. The hero sections invert this relationship, placing white text on navy fields to create dramatic contrast for key messaging. Product photography introduces warmer tones—skin tones, wood, metal, fabric—that humanize the interface without competing with the cool institutional palette.

## Typography

The type system uses two families: Connections for display and navigation, and Roboto for body text and interface labels. Connections carries the brand voice with its geometric clarity and open counters, while Roboto provides neutral readability at small sizes. The hierarchy is established through size and weight rather than style variation, maintaining a disciplined, single-voice approach.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Connections | 3rem | 400 | 1.1 | -0.01em | Hero headlines, major section introductions |
| section-display | Connections | 2rem | 400 | 1.2 | 0em | Section headings, product titles, card headlines |
| body | Roboto | 1rem | 400 | 1.5 | 0em | Paragraph text, descriptions, general content |
| body-small | Roboto | 0.875rem | 400 | 1.5 | 0em | Secondary descriptions, captions, metadata |
| label | Roboto | 0.875rem | 500 | 1.4 | 0em | Button text, form labels, navigation items |
| navigation | Connections | 1rem | 400 | 1.2 | 0em | Primary navigation, tab labels, category headers |

Connections appears exclusively in weight 400 for display use; the Bold variant is available in the source but the visible interface relies on the Regular weight for headlines. Roboto serves at 400 and 500 weights, with the medium weight reserved for labels and interactive elements to provide subtle emphasis without visual noise. Line heights are generous to maintain readability across the variable content lengths typical of financial product descriptions. Verify licensing for these families before production use; Connections is provided by Parachute Worldwide and Roboto by Google through Christian Robertson.

## Layout

The layout follows a centered, contained model with maximum content widths that prevent line lengths from becoming unwieldy. Sections stack vertically with substantial vertical rhythm, creating clear territorial boundaries between functional areas. The grid is implicit rather than overt—content aligns to consistent margins but does not force rigid columnar structures on all components.

The hero area occupies full viewport width with a photographic or solid-color background. A login panel overlays the left portion of the hero, floating above the imagery with a white surface and subtle shadow. This panel contains tabbed navigation between account types, form fields for credentials, and a cluster of action buttons. Below the hero, content sections introduce product offerings through a combination of tabbed left navigation and multi-column card grids.

Card grids appear in two and three-column arrangements, with cards maintaining consistent internal padding and external gutters. The product carousel presents a single featured item with left-right navigation controls, occupying a narrower centered container than the full-width hero. Revenue-selection segments use horizontal button groups with equal visual weight, suggesting a stepwise decision flow rather than a traditional form.

Spacing between sections measures approximately 4rem, with internal component gaps of 1.5rem. Card padding holds at 1.5rem on all sides, creating comfortable touch targets and readable text blocks. The overall density is moderate—information is chunked into scannable units without excessive whitespace that might feel uncommitted.

## Visual language

The visual language communicates established reliability through conservative shapes, limited color variation, and photography that emphasizes real business contexts over abstract illustration. Rounded corners appear on buttons and cards but stop short of playfulness—the pill shape for actions and modest rounding for containers suggest efficiency rather than whimsy.

Photography follows a documentary style: business owners in their environments, hands on laptops, products in use. The color temperature tends warm, providing human contrast to the cool navy interface tones. Credit card imagery is rendered with realistic materials—metallic sheens, embossed details, chip textures—reinforcing tangibility and trust.

Iconography is minimal and functional. Small location and calendar icons accompany utility links. Navigation arrows in carousels are simple chevrons. The visual system avoids decorative illustration, relying instead on product photography and typographic hierarchy to create interest. Tab indicators use a solid navy underline rather than background fills, preserving the clean surface aesthetic.

Shadows are restrained and functional. The login panel carries a subtle drop shadow to establish elevation above the hero photograph. Cards do not appear to float— they rest on the page surface with borders defining their edges. This grounded approach reinforces the stability message appropriate to financial services.

## Components

### Primary action button

The primary action button is the workhorse of the interface, appearing in navy fill with white text. It uses a full pill shape with generous horizontal padding, creating a substantial target that invites interaction.

- **Anatomy**: Text label centered within a rounded container
- **Surface and text color**: `{colors.brand-navy}` background, `{colors.action-text}` text
- **Typography**: `{typography.label}` at 500 weight
- **Shape**: `{rounded.pill}` with padding of 0.75rem vertical and 1.5rem horizontal
- **Spacing**: Appears isolated or in small groups with 1rem between siblings
- **Composition**: Left-aligned within content blocks, centered within narrow containers

### Secondary action button

The secondary variant inverts the primary scheme for non-dominant actions, appearing as an outlined pill on white or light backgrounds.

- **Anatomy**: Text label within a bordered container
- **Surface and text color**: `{colors.canvas}` background, `{colors.brand-navy}` text and border
- **Typography**: `{typography.label}` at 500 weight
- **Shape**: `{rounded.pill}` with 1px solid `{colors.brand-navy}` border
- **Spacing**: Same padding structure as primary, used in parallel button groups

### Product card

Product cards organize promotional content into scannable units with consistent internal structure.

- **Anatomy**: Thumbnail image, headline, description paragraph, and action button stacked vertically
- **Surface**: `{colors.canvas}` background with 1px `{colors.border}` outline
- **Typography**: Headline in `{typography.section-display}`, description in `{typography.body}`, action in `{typography.label}`
- **Shape**: `{rounded.panel}` corners
- **Spacing**: `{spacing.card-padding}` on all internal sides, images flush to top edge
- **Composition**: Cards arranged in grids with `{spacing.component-gap}` gutters

### Login panel

The login panel is a distinctive overlay component that provides account access without leaving the promotional context.

- **Anatomy**: Tab navigation, two text input fields, checkbox with label, inline link, and three action buttons stacked with a divider above utility links
- **Surface**: `{colors.canvas}` background with subtle shadow
- **Typography**: Tabs in `{typography.navigation}`, labels in `{typography.body-small}`, actions in `{typography.label}`
- **Shape**: `{rounded.panel}` corners
- **Spacing**: 1.5rem internal padding, 0.75rem between form elements
- **Composition**: Positioned left within hero, vertically centered against photographic background

### Revenue selector

The revenue selector presents mutually exclusive options as a horizontal button group.

- **Anatomy**: Label text and pill-shaped option buttons
- **Surface**: Options use `{colors.canvas}` fill with `{colors.brand-navy}` text and border
- **Typography**: `{typography.body}` for label, `{typography.label}` for options
- **Shape**: `{rounded.pill}` for each option
- **Spacing**: Options spaced evenly with approximately 1.5rem between
- **Composition**: Full-width within section, options distributed horizontally

### Tab navigation

Vertical tab navigation organizes content categories in the product discovery area.

- **Anatomy**: Stacked text labels with active state indicator
- **Surface**: Transparent background, active item receives left border accent
- **Typography**: `{typography.navigation}` for all items
- **Shape**: No border radius; left border indicator on active state
- **Spacing**: 1rem vertical padding per item, 0.5rem left indent for text
- **Composition**: Left column of two-column layout, approximately one-third width

## Responsive behavior

The layout appears optimized for desktop viewport widths, with generous margins and multi-column arrangements that would require significant reorganization at narrower sizes. The login panel overlay, positioned over the hero photograph, would need to stack above or below the hero content on smaller screens to maintain usability and prevent occlusion of the background imagery.

The product grid's three-column arrangement should collapse to two columns and then single column as viewport width decreases, maintaining card proportions and internal spacing. The revenue selector's horizontal button group would benefit from wrapping to multiple lines or converting to a vertical stack on narrow viewports, preserving the pill shape and touch target size.

Typography should scale down proportionally: hero display reducing to 2rem, section display to 1.5rem, with body text holding at 1rem for readability. The navigation tabs would convert to a horizontal scroll or dropdown pattern on mobile, as vertical stacking consumes excessive vertical space.

Image handling requires attention: the hero photograph should maintain coverage without cropping critical subjects, and product card thumbnails should reflow to stack above text rather than side-by-side arrangements.

## Practical implementation guidance

### Preserve
- The deep navy brand color as the dominant action and authority signal; it is the most recognizable element of the visual identity
- The pill-shaped button treatment across all action variants; this shape is consistent and functionally distinctive
- The generous white space around sections and within cards; density reduction supports the trust message
- The two-family type system with Connections for display and Roboto for body; this pairing is balanced and proven
- The documentary photography style with warm, human subjects against the cool interface palette

### Avoid
- Introducing additional accent colors beyond the established navy and restrained red; the palette is intentionally limited
- Sharp-cornered buttons or cards; the rounded treatment is integral to the approachable institutional tone
- Drop shadows on cards or sections beyond the functional login panel elevation; the system prefers borders for definition
- Decorative illustration or iconography that departs from the minimal functional set; ornamentation undermines the serious tone
- Centered text blocks for body content; the visible system left-aligns readable paragraphs for scanning efficiency

### Recommended build order
1. Establish the color tokens and type scale, as these govern every subsequent decision
2. Implement the pill button component with primary and secondary variants; buttons appear in nearly every section
3. Build the card container with consistent padding, border, and corner radius
4. Construct the hero section with solid navy and photographic variants, including the login panel overlay
5. Develop the product grid with tab navigation and card population
6. Add the revenue selector and carousel components for interactive content sections

### Accessibility
- Ensure navy text on white backgrounds meets WCAG AA contrast ratios; the deep navy typically satisfies this against white
- Provide visible focus indicators on pill buttons, as the rounded shape can make default browser outlines appear clipped
- Associate form labels explicitly with input fields in the login panel; placeholder text alone is insufficient
- Maintain touch target sizes of at least 44 by 44 pixels for pill buttons on touch devices
- Consider reduced motion preferences for carousel transitions; the visible system does not indicate animation requirements

## Scope note

This guide covers the business banking landing page and its immediate product promotion surfaces. Consumer banking pages, authenticated account interfaces, mobile applications, and marketing campaign variations are not represented. Motion, hover states, form validation feedback, and responsive breakpoint behavior are not documented from the supplied material. Measurements are practical adaptation targets derived from visible proportions.
