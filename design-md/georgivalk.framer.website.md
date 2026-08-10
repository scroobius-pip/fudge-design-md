# How georgivalk.framer.website is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/georgivalk.framer.website-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with lime-green radial gradient background, large display headline "Hi, I'm Georgi", floating navigation pill, and cartoon mascot character with radiating light beams](https://pin.fontofweb.com/6534?format=jpg)](https://design.withfudge.com/share/pin-6534)

[Hero section with lime-green radial gradient background, large display headline "Hi, I'm Georgi", floating navigation pill, and cartoon mascot character with radiating light beams](https://design.withfudge.com/share/pin-6534)

[![Dark services section with three feature cards showing abstract lime icons, white headings, and muted gray body text on near-black background with subtle radial gradients](https://pin.fontofweb.com/6533?format=jpg)](https://design.withfudge.com/share/pin-6533)

[Dark services section with three feature cards showing abstract lime icons, white headings, and muted gray body text on near-black background with subtle radial gradients](https://design.withfudge.com/share/pin-6533)

[![Call-to-action section with lime-to-cream radial gradient, large display text "Let's make something you'll love!", and white pill button with peeking mascot character](https://pin.fontofweb.com/6532?format=jpg)](https://design.withfudge.com/share/pin-6532)

[Call-to-action section with lime-to-cream radial gradient, large display text "Let's make something you'll love!", and white pill button with peeking mascot character](https://design.withfudge.com/share/pin-6532)

## Overview

This design system powers a personal portfolio website with an unmistakably bold and playful character. The visual identity centers on extreme contrast: electric lime green accents explode against deep black backgrounds, while warm cream surfaces provide breathing room for oversized display typography. A recurring cartoon mascot—a round lime-green character with large expressive eyes and white-gloved hands—serves as the emotional anchor across sections, appearing in hero imagery, decorative illustrations, and interactive moments.

The system operates across three distinct atmospheric modes: a radiant light mode with lime-to-cream radial gradients, a dark mode with near-black surfaces and subtle green radial glows, and high-contrast accent moments where pure lime becomes the dominant field. Typography is deliberately maximalist, with display sizes pushing well into the 140px range for name and statement headlines, creating an immediate, confident impression. The overall effect is energetic, approachable, and unapologetically graphic—more editorial poster than conventional web page.

## Colors

| token | value | use |
|---|---|---|
| action | #B8FF1F | Primary buttons, navigation pills, icon fills, mascot accents |
| action-deep | #69F70A | Gradient endpoints, hover states, depth shadows |
| ink | #000000 | Primary text on light surfaces, deep backgrounds |
| ink-muted | #B8B8B8 | Secondary text, captions, disabled states |
| canvas | #F7FFE8 | Light section backgrounds, gradient endpoints |
| surface | #050800 | Dark section primary backgrounds |
| surface-mid | #172100 | Dark gradient midpoints, card depth layers |
| surface-light | #223002 | Dark gradient outer rings, subtle elevation |
| text-primary | #FFFFFF | Headings on dark backgrounds |
| text-secondary | #BABABA | Body text on dark backgrounds |
| border-subtle | #0C0C0C | Hairline dividers, shadow layers |

The color strategy relies on temperature and saturation contrast rather than complex hue variation. The lime family (#B8FF1F through #69F70A) functions as the sole accent, appearing in gradients, solid fills, and the mascot character. Dark sections use a sophisticated near-black with green undertones (#050800) rather than pure neutral black, creating cohesion with the lime accent even in absence. Light sections reverse to warm cream (#F7FFE8), which prevents the lime from becoming garish by providing a soft, yellow-tinted foundation.

Gradients are radial and atmospheric: the hero uses a lime-center-to-cream-edge burst that suggests radiating energy, while dark sections employ inverse radial gradients that pool green light at card centers before fading to black edges. These gradients are not decorative flourishes but structural elements that define section identity.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | False | 8.75rem | 700 | 1.1 | 0.02em | Homepage name headline |
| section-display | False | 4.5rem | 700 | 1.1 | 0.02em | Section statement headlines |
| statement-display | False | 5.75rem | 700 | 1.1 | 0.02em | CTA display text |
| heading-large | Instrument Sans | 2.625rem | 700 | 1.2 | 0.02em | Card titles, sub-section heads |
| heading-medium | False | 2rem | 700 | 1.2 | 0.02em | Service category labels |
| body-large | Instrument Sans | 1.5rem | 400 | 1.6 | 0em | Descriptive paragraphs |
| body-medium | Cabinet Grotesk | 1.25rem | 500 | 1.2 | 0em | Card descriptions, supporting text |
| body-small | Instrument Sans | 1.25rem | 400 | 1.0 | 0.03em | Labels with tight leading |
| label | System | 0.75rem | 400 | 1.0 | 0em | Navigation, tags, metadata |
| navigation | System | 0.75rem | 400 | 1.0 | 0em | Pill navigation items |

Four type families create the hierarchy. False (designed by Shiva Nallaperumal, Indian Type Foundry) handles all display and heading work with a bold, geometric character and distinctive ink traps that give it a contemporary editorial feel. Instrument Sans (designed by Rodrigo Fuenzalida, Frag Type) manages body and subheading roles with clean, open forms optimized for readability at medium sizes. Cabinet Grotesk (designed by Shiva Nallaperumal, Indian Type Foundry) appears in medium weight for card descriptions, bridging the gap between display personality and functional clarity. System and System-Sansserif handle navigation and micro-labels at 12px, keeping interface chrome unobtrusive.

Tracking is consistently tight-positive (0.02em) for display sizes, adding density and presence to large headlines. Body text uses neutral tracking with generous line-height (1.6) for comfortable reading. The 12px system labels rely on native browser rendering without custom tracking adjustments.

Verify licensing for these families before production use.

## Layout

The layout follows a centered, single-column editorial model with generous vertical rhythm. Sections stack with substantial padding (180px top and bottom, or 11.25rem) that creates clear territorial boundaries between content modes. Content max-width appears constrained to a comfortable reading measure, with text blocks and card grids centered within the viewport.

The navigation sits as a floating pill element near the top of the viewport, detached from any header bar or border. This pill uses the action lime color with rounded-full geometry, containing inline navigation links with even horizontal distribution. The floating treatment reinforces the playful, non-corporate tone.

Card grids in dark sections use a three-column arrangement with consistent gap spacing. Cards themselves are tall rectangles with internal padding that creates breathing room for abstract icon illustrations above text content. The icons occupy significant vertical space within cards—roughly 60% of card height—making them the primary visual draw before typography.

Vertical section transitions are dramatic: the site moves from radiant lime-cream hero through deep black services, then back to lime-cream for the call-to-action. These transitions are not subtle fades but hard cuts between atmospheric modes, each section functioning as a distinct visual chapter.

## Visual language

The mascot character is the defining visual element: a perfect lime-green circle with oversized white eyes containing black pupils, a small smiling mouth with a single visible tooth, and white-gloved cartoon hands that emerge from black sleeves. The character appears in multiple poses and scales—full-figure with raised hands in the hero, peeking over buttons in the CTA, and as abstracted icon forms in service cards. This repetition creates instant brand recognition and emotional continuity.

Iconography in service cards abstracts the mascot into geometric primitives: a semicircle with floating circle for "Web Design," a circle with star-eyes for "UX/UI Design," and a vertical bar with triangular point for "Branding." These icons share the mascot's lime color and simple black-outline treatment, maintaining visual family relationships without literal repetition.

Decorative elements include radiating light beams in the hero—soft lime wedges emanating from behind the mascot—and small floating geometric shapes (circles, dots) that drift in peripheral vision. A tiny purple dot appears as an Easter egg in lower corners, adding an unexpected color accent that breaks the lime-black binary.

Shadows are minimal and functional: a subtle dark shadow (rgb(12, 12, 12) at 1px offset) appears beneath the primary action button, providing lift without material realism. No heavy drop shadows or elevation systems are present; depth is created through color contrast and gradient atmosphere rather than simulated lighting.

## Components

### Navigation pill
- **Anatomy**: Horizontal inline list of text links contained within a rounded pill shape
- **Surface**: Solid action lime (#B8FF1F) background
- **Typography**: System 12px regular, ink color
- **Shape**: Full pill border-radius (9999px)
- **Spacing**: 12px vertical padding, generous horizontal padding creating even link distribution
- **Composition**: Centered in viewport, floating above hero content without attachment to page edge

### Primary action button
- **Anatomy**: Text label centered within rounded rectangle
- **Surface**: Gradient background from action (#B8FF1F) through action-deep (#69F70A) and back to action; subtle dark shadow beneath
- **Typography**: System 12px regular, ink color, uppercase treatment
- **Shape**: 84px border-radius creating elongated pill
- **Spacing**: 24px vertical, 42px horizontal padding
- **Composition**: Centered below headline text in hero; mascot character may peek from behind

### Secondary action button
- **Anatomy**: Text label centered within rounded rectangle
- **Surface**: Solid white background
- **Typography**: System 12px regular, ink color, uppercase treatment
- **Shape**: Full pill border-radius
- **Spacing**: Generous padding creating substantial clickable area
- **Composition**: Centered in CTA section with mascot character peeking over top edge

### Feature card
- **Anatomy**: Abstract icon illustration, heading text, description paragraph
- **Surface**: Dark surface (#050800) with radial gradient pooling green light at center; 12px border-radius
- **Typography**: Heading uses heading-large or heading-medium in white; description uses body-medium in text-secondary
- **Shape**: 12px corner radius
- **Spacing**: 12px internal padding with 42px bottom padding for text breathing room
- **Composition**: Three cards in horizontal row with even gaps; icon dominates upper portion, text anchors bottom

### Section label
- **Anatomy**: Icon glyph paired with uppercase text
- **Typography**: body-small or label token
- **Color**: Action lime for icon and text on dark backgrounds
- **Composition**: Centered above section headings as chapter marker

## Responsive behavior

The design's bold scale and centered composition suggest a relatively straightforward responsive adaptation. At reduced viewport widths, the three-column card grid should collapse to a single column with maintained internal proportions. Display typography requires aggressive scaling down—hero-display at 140px will need reduction to maintain viewport fit, likely stepping down through the established size hierarchy rather than introducing intermediate values.

The floating navigation pill may need conversion to a full-width bar or hamburger menu on narrow viewports to prevent link crowding. Mascot illustrations should maintain aspect ratio while scaling down; the peeking character in the CTA button may need repositioning to remain visible at smaller sizes.

Section padding (180px vertical) should reduce proportionally on mobile, likely to 90px or 60px to prevent excessive scrolling between content zones. Card internal padding can compress slightly but should maintain the generous proportions that allow icon illustrations to dominate.

## Practical implementation guidance

### Preserve
- The extreme scale contrast between 140px display headlines and 12px system labels
- The three-atmosphere color rhythm: lime-cream radiant, deep black with green glow, lime-cream return
- The mascot character's consistent proportions and expressions across all appearances
- The radial gradient as a structural section-defining element, not merely decoration
- The tight-positive tracking on all display and heading sizes

### Avoid
- Introducing additional accent colors beyond the lime family and single purple Easter egg
- Adding conventional header bars or bordered navigation containers
- Using drop shadows for card elevation—rely on gradient atmosphere instead
- Reducing the mascot to a simple logo mark; the full character with hands and expression is essential
- Generic placeholder imagery in service cards; the abstracted mascot icons are the established pattern

### Recommended build order
1. Establish the three color atmospheres as CSS custom properties or theme tokens
2. Implement the radial gradient system for hero and dark sections
3. Set up the type scale with False for display, Instrument Sans for body, Cabinet Grotesk for descriptions
4. Build the floating navigation pill with exact padding and border-radius
5. Create the mascot as an SVG component with variants for full-figure, peeking, and abstracted icon poses
6. Construct feature cards with internal gradient and icon-text hierarchy
7. Implement section spacing and vertical rhythm

### Accessibility
- The lime-on-cream and lime-on-black combinations should be verified for WCAG contrast compliance; the action lime may need darkening for small text
- The 12px system labels at normal weight may fail minimum size recommendations; consider 14px floor for interactive elements
- Ensure mascot illustrations have appropriate alt text describing character pose and context
- Provide focus indicators that maintain the playful aesthetic while meeting visibility requirements
- The dark sections with green radial gradients should not rely on color alone to convey information hierarchy

## Scope note

This guide covers the homepage surface including hero introduction, services showcase, and call-to-action sections. Interior pages, project case studies, contact forms, and footer content are not represented in the supplied material. Motion behavior, hover states, and loading sequences are not documented. The mascot character system exists as rendered images; vector source files or animation variants are not included. Measurements reflect the desktop viewport state captured in the source images.
