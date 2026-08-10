# How calligraphy.ge is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/calligraphy.ge-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with dark charcoal background, ornate Georgian calligraphy logo in white, search input field with orange button, and contact information in muted gray text](https://pin.fontofweb.com/1681?format=jpg)](https://design.withfudge.com/share/pin-1681)

[Footer section with dark charcoal background, ornate Georgian calligraphy logo in white, search input field with orange button, and contact information in muted gray text](https://design.withfudge.com/share/pin-1681)

[![Homepage hero with flowing black calligraphic signature on white canvas, minimal navigation with Georgian script menu items, and social media links at bottom](https://pin.fontofweb.com/1680?format=jpg)](https://design.withfudge.com/share/pin-1680)

[Homepage hero with flowing black calligraphic signature on white canvas, minimal navigation with Georgian script menu items, and social media links at bottom](https://design.withfudge.com/share/pin-1680)

## Overview

This design system captures the visual identity of a Georgian calligraphy showcase, where the art form itself becomes the dominant visual element. The system is built on radical simplicity: vast white space serves as a gallery wall for intricate black calligraphic work, while minimal interface elements recede into supporting roles. The aesthetic draws from traditional manuscript presentation—generous margins, careful hierarchy, and the reverent placement of script as the primary content. Two distinct modes emerge across the page surfaces: an airy, museum-like upper region where calligraphy floats against pure white, and a grounded, functional footer zone in deep charcoal where practical information and search tools reside. The emotional tone is contemplative and scholarly, positioning the website as both portfolio and cultural archive.

## Colors

The color philosophy is deliberately austere, derived from the materials of classical calligraphy: black ink on white paper, with a single warm accent for interactive moments and a deep charcoal for functional zones.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, calligraphic artwork, navigation labels, social media icons |
| canvas | #FFFFFF | Page background, input field backgrounds, logo fill on dark surfaces |
| charcoal | #242424 | Footer background, deep contrast zones |
| muted | #888888 | Secondary text in footer, copyright lines, contact details |
| accent | #E85A3C | Search button background, primary interactive actions |

The light mode dominates the experience. The upper page is essentially monochrome—pure black ink on pure white canvas—allowing the calligraphic forms to command full attention without chromatic competition. The charcoal footer introduces necessary depth for functional content, with muted gray text ensuring readability without visual intrusion. The accent orange appears sparingly, reserved for the search submission button where it draws the eye to a single actionable element. No dark mode is visible in the supplied material; the charcoal zone functions as a contained dark surface rather than a global theme inversion. The warm accent provides the only departure from the achromatic palette, echoing the terracotta and earth pigments found in historical Georgian manuscript illumination.

## Typography

The typographic system separates display calligraphy from functional text, using distinct families for each role. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Dm Begtabeg | 6rem | 400 | 1 | 0em | Large ornamental calligraphy, signature pieces |
| section-display | Prompt | 2rem | 400 | 1.2 | 0em | Section headings, introductory statements |
| body | Noto Sans | 1rem | 400 | 1.6 | 0em | Paragraph text, descriptions, contact details |
| label | Noto Sans | 0.75rem | 400 | 1.4 | 0.02em | Buttons, captions, metadata |
| navigation | Noto Sans | 0.875rem | 400 | 1 | 0.01em | Menu items, language switcher |

Dm Begtabeg serves as the expressive core—a Georgian display typeface with ornamental flourishes that carries the cultural and artistic weight of the site. It appears at large scale for signature calligraphic work, treated as artwork rather than readable text. Prompt, sourced from a Georgian serif file, handles secondary display needs with appropriate cultural alignment. Noto Sans provides the workhorse functionality for all interface text, chosen for its extensive script coverage and neutral clarity. Raleway Thin is available in the family list but does not appear prominently in the visible interface; it may serve loading states or subtle decorative numerals. Font Awesome 5 Brands supplies the social media icons. The Noto Sans attribution belongs to the Monotype Design Team and Monotype Imaging Inc; no designer or vendor credits are supported for the other families.

## Layout

The layout follows a centered, single-column gallery model with asymmetric header navigation and a full-width footer interruption.

The upper content zone employs extreme horizontal padding, creating the impression of a matted frame around the calligraphic work. The hero signature piece occupies the visual center, scaled to dominate the viewport without touching the edges—approximately 60-70% of the content width. Below, body text paragraphs maintain a comfortable measure, roughly 60-80 characters per line, centered or with modest left alignment.

The navigation bar stretches full-width at the top, with the ornamental logo mark positioned at the left margin and menu items clustered right-of-center, concluding with an "EN" language switcher at the far right. This creates an asymmetrical balance that feels intentional rather than default.

The footer breaks the white-space continuity with a full-bleed charcoal band. Internally, it uses a two-column or offset layout: the calligraphic logo and search tools occupy the left portion, while contact information and copyright stack on the right. A secondary, darker footer bar below repeats essential contact details in smaller text with a social icon anchored at the far right.

Vertical rhythm is spacious. The hero calligraphy sits well below the navigation, with generous breathing room before the body text begins. Section spacing uses multiples of 1.5rem for internal grouping and 6rem for major zone separations. The footer padding is substantial, approximately 3-4rem vertical, preventing the dark zone from feeling cramped.

## Visual language

The visual language emerges from the tension between maximal expression in the calligraphy and maximal restraint in everything surrounding it.

Imagery is non-photographic; the "images" are the calligraphic forms themselves—vector-perfect black strokes with varying weight, dramatic swashes, and the distinctive loops and angles of Georgian script. These pieces function as both content and decoration, their organic curves contrasting with the rigid geometry of the layout grid.

Texture is absent by design. No gradients, shadows, or dimensional effects appear in the interface. The calligraphy carries all visual interest through its own line quality and compositional energy. The only surface variation is the flat color shift from white to charcoal at the footer boundary.

Iconography is minimal and functional: a magnifying glass for search, standard social media brand marks, and the ornamental logo mark. The logo itself is a miniature calligraphic composition, maintaining the artistic standard of the larger works.

The overall impression is that of a contemporary digital manuscript—clean, reverent, and confident in letting traditional craft speak without digital embellishment. The design avoids trendy effects in favor of timeless presentation appropriate to cultural heritage content.

## Components

### Navigation bar

- **Anatomy**: Horizontal bar containing ornamental logo mark (left), five Georgian-script menu items, and "EN" language switcher (right)
- **Surface and text color**: Transparent or white background with ink-colored text
- **Typography**: `{typography.navigation}`
- **Shape**: Full-width, no border, no shadow
- **Spacing**: Approximately 1.5rem vertical padding, menu items spaced evenly with comfortable gaps
- **Composition**: Asymmetrical balance with logo as visual anchor left, menu cluster right-of-center, language switcher at far right edge
- **Variants**: The "EN" switcher suggests an alternate language state; no active/hover states are visible

### Hero calligraphy display

- **Anatomy**: Single large calligraphic composition, centered horizontally
- **Surface and text color**: Ink on canvas—pure black strokes on white background
- **Typography**: `{typography.hero-display}` using Dm Begtabeg
- **Shape**: Organic, flowing vector paths with dramatic thick-thin contrast and extended swashes
- **Spacing**: Generous margins on all sides, approximately 15-20% of viewport width
- **Composition**: Centered placement with optical balance; the descending loop extends below the baseline, requiring additional bottom margin

### Body text block

- **Anatomy**: Paragraphs of Georgian script, left-aligned or with slight indent
- **Surface and text color**: Ink on canvas
- **Typography**: `{typography.body}`
- **Shape**: Rectangular text blocks with ragged right edge
- **Spacing**: Paragraph spacing approximately 1.5rem, comfortable line height at 1.6
- **Composition**: Narrow to medium column width for readable measure

### Search form

- **Anatomy**: Text input field with inline search button
- **Surface**: Input field uses canvas white background; button uses accent orange
- **Typography**: Input uses `{typography.body}` at reduced size; button uses `{typography.label}` with canvas color
- **Shape**: Sharp corners on both elements—0 radius, creating a utilitarian, almost industrial contrast to the organic calligraphy
- **Spacing**: Tight coupling between input and button, minimal internal padding
- **Composition**: Positioned in footer left column, below the logo mark

### Footer

- **Anatomy**: Two-tier structure—primary footer in charcoal with logo, search, and contact info; secondary bar below with repeated contact details and social icon
- **Surface and text color**: Charcoal background with muted gray text; logo in white inverse
- **Typography**: Contact details use `{typography.body}` at reduced contrast; copyright uses `{typography.label}`
- **Shape**: Full-bleed bands, no rounded corners
- **Spacing**: Generous internal padding, clear separation between primary and secondary tiers
- **Composition**: Offset two-column layout in primary tier; single row with space-between in secondary tier

### Social links

- **Anatomy**: Icon-label pairs for Facebook, YouTube, Instagram
- **Surface**: Canvas background in upper zone; charcoal in footer context
- **Typography**: `{typography.label}` with brand icon preceding text
- **Shape**: Inline horizontal arrangement with consistent gaps
- **Spacing**: Approximately 1.5rem between items
- **Composition**: Centered in upper page; right-aligned in footer secondary bar

## Responsive behavior

No mobile layouts are visible in the supplied material. The following guidance represents recommended adaptation based on the visual system's characteristics.

The navigation should collapse to a hamburger menu on narrow viewports, with the ornamental logo remaining visible as the primary brand anchor. The hero calligraphy should scale down proportionally, maintaining its centered position and generous margins; at very small sizes, the intricate details of Dm Begtabeg may require minimum width constraints to remain legible as art.

Body text columns should expand to full width with increased side padding on mobile, maintaining the comfortable measure through font size adjustment if necessary. The footer two-column layout should stack vertically, with search and contact information in sequence rather than side-by-side.

The language switcher should remain accessible, potentially moving into the collapsed menu on narrow screens. Social links should maintain their horizontal arrangement but wrap if space is constrained.

## Practical implementation guidance

### Preserve
- The stark black-on-white presentation of calligraphic work; any background color or texture diminishes the gallery effect
- Generous whitespace as a deliberate compositional element, not merely unused space
- The sharp 0-radius corners on interactive elements—these create productive tension with organic calligraphy
- The single warm accent used sparingly and exclusively for primary actions
- The ornamental logo mark at consistent scale and placement

### Avoid
- Adding shadows, gradients, or dimensional effects that compete with calligraphic line quality
- Using Dm Begtabeg at small sizes where its detail is lost; it is display art, not body text
- Introducing additional accent colors that fragment the monochrome discipline
- Tightening the footer padding; the charcoal zone needs room to breathe
- Centering body text; the visible system uses left alignment for readable paragraphs

### Recommended build order
1. Establish the white canvas background and black ink text defaults
2. Implement Noto Sans for all navigation and body text at specified sizes
3. Add the hero calligraphy zone with Dm Begtabeg at large scale, centered with generous margins
4. Build the navigation bar with logo placement and menu clustering
5. Create the footer charcoal zone with two-tier structure
6. Add the search form with sharp-cornered input and accent button
7. Implement social links and language switcher
8. Fine-tune vertical spacing and responsive breakpoints

### Accessibility
- Ensure the accent orange button meets contrast requirements against both white and charcoal backgrounds; the warm tone may need darkening for WCAG AA compliance
- Provide text alternatives for all calligraphic images, describing the content and cultural significance
- Maintain keyboard focus visibility on the zero-radius buttons, potentially with an offset outline or underline
- Consider the readability of Georgian script at small sizes; the body text minimum should remain at 1rem or above
- The language switcher should use proper `lang` attributes and hreflang annotations for the Georgian/English alternates

## Scope note

This guide covers the homepage and footer surfaces visible in the supplied images. Interior pages, gallery grids, individual artwork pages, motion behavior, hover states, form validation, and mobile breakpoints are not represented. Measurements are practical adaptation targets.
