# How happy.bg is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/happy.bg-design)

Last updated: 2026-08-10

## Captured pages

[![Newsletter signup section with red pill button, awards carousel on light gray background, red navigation bar, and black footer with brand logos and social icons](https://pin.fontofweb.com/2111?format=jpg)](https://design.withfudge.com/share/pin-2111)

[Newsletter signup section with red pill button, awards carousel on light gray background, red navigation bar, and black footer with brand logos and social icons](https://design.withfudge.com/share/pin-2111)

[![Instagram feed gallery showing food photography and brand content with red like badges and Instagram handle link](https://pin.fontofweb.com/2110?format=jpg)](https://design.withfudge.com/share/pin-2110)

[Instagram feed gallery showing food photography and brand content with red like badges and Instagram handle link](https://design.withfudge.com/share/pin-2110)

[![News carousel with Back to School promotional banner featuring green chalkboard background, red Happy logo, and red read-more pill button](https://pin.fontofweb.com/2109?format=jpg)](https://design.withfudge.com/share/pin-2109)

[News carousel with Back to School promotional banner featuring green chalkboard background, red Happy logo, and red read-more pill button](https://design.withfudge.com/share/pin-2109)

[![Delivery promotion with red pill-shaped banner, delivery driver photo, yellow duck mascot, and menu section with food photography](https://pin.fontofweb.com/2108?format=jpg)](https://design.withfudge.com/share/pin-2108)

[Delivery promotion with red pill-shaped banner, delivery driver photo, yellow duck mascot, and menu section with food photography](https://design.withfudge.com/share/pin-2108)

## Overview

Happy Bar & Grill's website presents a confident, appetite-driven visual system built around immediate recognition and energetic warmth. The design prioritizes bold red as the primary brand signal, using it for navigation, calls-to-action, and promotional highlights against a restrained foundation of white and black. The overall impression is direct and uncluttered: large food photography dominates content sections, while typography stays clean and functional through a single sans-serif family. Playful brand elements—a yellow duck mascot, heart-shaped logo treatments, and casual promotional language—soften the commercial urgency without undermining it. The layout alternates between full-bleed photographic moments and contained card-based content, creating rhythm through contrast in density rather than complexity in structure. Every interactive element is immediately identifiable through consistent pill-shaped buttons and the persistent red navigation bar, ensuring that ordering, reserving, or exploring the menu remains visually prioritized across all page sections.

## Colors

The color system is intentionally compact, deriving its energy from a single saturated red against neutral extremes. This restraint allows food photography and promotional imagery to carry the visual variety while maintaining brand coherence.

| token | value | use |
|---|---|---|
| action | #E31E24 | Primary buttons, navigation bar, promotional banners, read-more links, like badges |
| action-hover | #C41920 | Hover state for interactive red elements |
| ink | #000000 | Primary text, footer background, high-contrast moments |
| ink-inverse | #FFFFFF | Text on red or black backgrounds, button labels |
| canvas | #FFFFFF | Page background, card surfaces, newsletter section |
| surface | #F5F5F5 | Awards carousel background, subtle section alternation |
| surface-inverse | #000000 | Footer background, high-contrast footer content |
| border | #E0E0E0 | Subtle dividers, card outlines when needed |
| accent-yellow | #FFD700 | Mascot elements, playful brand accents |

The red action color functions as the dominant brand identifier, appearing in the fixed navigation, all primary buttons, promotional banners, and interactive highlights. White canvas provides breathing room around dense photographic content. The light gray surface appears selectively to group secondary content like award recognitions. Black anchors the footer and provides maximum contrast for legal text and subsidiary brand logos. The yellow accent appears sparingly through the duck mascot and select promotional graphics, adding warmth without competing with the primary red signal. No dark mode or alternative theme is visible in the supplied material.

## Typography

The typographic system relies entirely on Roboto, a neutral grotesque that stays out of the way of bold imagery while maintaining clarity at all sizes. The hierarchy is established through weight and scale rather than family variation.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Roboto | 3rem | 700 | 1.1 | -0.01em | Delivery banner headlines, major promotional titles |
| section-display | Roboto | 2.5rem | 700 | 1.2 | 0 | Section headings, menu and news titles |
| body-large | Roboto | 1.25rem | 400 | 1.5 | 0 | Newsletter descriptions, featured content |
| body | Roboto | 1rem | 400 | 1.5 | 0 | General content, footer links, card descriptions |
| label | Roboto | 0.875rem | 500 | 1.4 | 0.02em | Button text, navigation items, metadata |
| navigation | Roboto | 0.875rem | 500 | 1 | 0.05em | Uppercase navigation bar links |
| legal-copy | Roboto | 0.75rem | 400 | 1.5 | 0 | Copyright, fine print, attribution |

Roboto is designed by Christian Robertson and distributed by Google. Verify licensing for these families before production use. Font Awesome 5 Solid supplies iconography for social media and UI indicators; it is not used for body text.

## Layout

The page structure follows a straightforward single-column flow with full-width sections and a consistent content container. The navigation bar spans the full viewport width with centered link distribution. Content sections alternate between contained widths and edge-to-edge photographic treatments.

The grid system appears to use a centered container with generous horizontal padding, approximately 1.5rem on smaller viewports expanding to wider margins on desktop. Section spacing is pronounced, with 4rem to 6rem vertical gaps between major content areas creating clear territorial boundaries.

The awards carousel occupies a full-width band with light gray background, containing a horizontal scroll of award cards with fixed widths and internal padding. The Instagram feed similarly spans full width, with images arranged in a horizontal strip that suggests overflow scrolling.

News cards use a two-part structure: a full-width photographic banner with rounded top corners, followed by a white content area with title, description, and right-aligned pill button. The delivery promotion splits into asymmetric two-column layout on desktop—photography left, typography and action right—with the menu section reversing this relationship.

Footer content stacks vertically: brand logos centered horizontally, followed by link rows, social icons, and copyright attribution. The persistent Viber channel banner appears fixed to the viewport bottom, indicating a sticky promotional element.

## Visual language

The visual personality balances commercial directness with approachable playfulness. The red heart logo and script "Happy" wordmark appear consistently across promotional materials, establishing emotional warmth. The yellow duck mascot—wearing sunglasses in the delivery section—adds casual humor that targets a broad family audience without undermining food quality signals.

Photography dominates the experience: high-saturation food shots, lifestyle imagery of staff and locations, and user-generated social content. Images receive rounded corner treatment at 1rem, softening the rectangular grid without becoming ornamental. The pill-shaped button is the signature interactive form, appearing at all scales from small text links to massive delivery banners.

Iconography is minimal and functional: social media logos in the footer, Instagram icons on feed items, navigation arrows in carousels. The Font Awesome solid style provides weight that matches the bold typographic presence.

Promotional graphics employ high-contrast compositions—green chalkboard backgrounds with red and white typography for seasonal campaigns, or photographic scenes with overlaid red graphic elements. These maintain brand consistency through repeated color and type treatment rather than rigid template adherence.

## Components

### Primary Action Button

- **Anatomy**: Text label with right-pointing chevron icon, contained in a pill-shaped background
- **Surface**: Solid red background with white text
- **Typography**: `{typography.label}`, uppercase, medium weight
- **Shape**: Full pill with `9999px` border radius
- **Spacing**: Generous horizontal padding, approximately 2rem, with 0.875rem vertical padding
- **Composition**: Icon follows text with small gap; entire pill is clickable
- **Variants**: Smaller variant appears in news cards with reduced padding; larger variant appears in hero promotional areas

### Navigation Bar

- **Anatomy**: Horizontal row of uppercase text links, full viewport width
- **Surface**: Solid red background, no border or shadow
- **Typography**: `{typography.navigation}`, white, letter-spaced
- **Shape**: Rectangular, no radius
- **Spacing**: Links evenly distributed with approximately 2rem gaps; 1rem vertical padding
- **Composition**: Centered alignment, single row on desktop
- **Variants**: Fixed position suggested by persistent visibility across page sections

### Newsletter Section

- **Anatomy**: Heading, descriptive paragraph, and pill button stacked vertically
- **Surface**: White background, no card container
- **Typography**: Heading uses `{typography.section-display}`, body uses `{typography.body-large}`
- **Shape**: No containing border or background
- **Spacing**: Generous vertical padding, approximately 6rem; left-aligned content with standard container margins
- **Composition**: Simple vertical stack with clear hierarchy

### Awards Carousel

- **Anatomy**: Horizontal scrollable row of award cards, each with logo image, organization name, and year
- **Surface**: Light gray section background; individual cards have white backgrounds with subtle shadow
- **Typography**: Organization name in small bold text, year in larger bold display
- **Shape**: Cards with rounded corners, approximately 0.5rem
- **Spacing**: Cards separated by consistent gap, section padded vertically
- **Composition**: Centered row with partial visibility of edge cards suggesting scroll

### News Card

- **Anatomy**: Full-width image banner, title, description paragraph, and right-aligned pill button
- **Surface**: White card background with no visible border
- **Typography**: Title in `{typography.section-display}`, body in `{typography.body}`, button in `{typography.label}`
- **Shape**: Image has rounded top corners; card itself may have full rounding
- **Spacing**: Content padding approximately 1.5rem below image
- **Composition**: Asymmetric text block left, button right; clear visual separation between image and content

### Instagram Feed

- **Anatomy**: Horizontal strip of square images with Instagram icon and like count overlay on first item
- **Surface**: White background; images have no border
- **Typography**: Handle link below feed in `{typography.body}`
- **Shape**: Square images with no radius or minimal radius
- **Spacing**: Small gaps between images; section padding above and below
- **Composition**: Overflowing horizontal arrangement with partial right-edge image

### Footer

- **Anatomy**: Brand logos row, link row, social icon row, copyright line
- **Surface**: Black background throughout
- **Typography**: Links in `{typography.body}`, copyright in `{typography.legal-copy}`, all white
- **Shape**: Full width, no radius
- **Spacing**: Generous vertical padding; rows separated by approximately 2rem
- **Composition**: Centered alignment for logos and links; social icons in horizontal cluster left; copyright and attribution split to edges

### Delivery Banner

- **Anatomy**: Large pill-shaped container with text and delivery car illustration
- **Surface**: Solid red background, white text and graphics
- **Typography**: `{typography.hero-display}`, uppercase, bold
- **Shape**: Full pill, extremely wide relative to height
- **Spacing**: Substantial internal padding
- **Composition**: Text left-aligned within pill, car graphic right-aligned, overlapping pill edge

## Responsive behavior

The supplied images show desktop-width layouts. Based on the visible structure, several responsive adaptations are recommended. The navigation bar's horizontal link row should collapse to a hamburger menu on narrow viewports, preserving the red background and white text. The asymmetric two-column layouts in delivery and menu sections should stack vertically, with photography preceding typography on mobile to maintain visual priority. The awards carousel and Instagram feed already employ horizontal scrolling, which translates naturally to touch interfaces without structural change. News cards should maintain their image-content relationship but may shift the button below the description on narrow screens. The newsletter section's left-aligned content should become centered on mobile for balanced margins. Footer link rows should wrap to multiple lines, and social icons should remain horizontally clustered. The fixed Viber banner should persist across breakpoints, potentially reducing in height to minimize viewport obstruction.

## Practical implementation guidance

### Preserve
- The saturated red as the singular action color; do not dilute it with secondary button colors
- Pill-shaped buttons as the exclusive interactive form; maintain `9999px` radius consistently
- High-quality food photography with warm, saturated treatment
- The playful mascot elements and script logo treatments that differentiate brand tone
- Full-width section alternation between white and light gray backgrounds
- Uppercase, letter-spaced navigation treatment

### Avoid
- Introducing additional accent colors that compete with the established red-yellow-black palette
- Sharp-cornered buttons or cards that break the soft, approachable geometry
- Thin or light font weights that reduce legibility against photographic backgrounds
- Cluttered layouts that compete with food imagery for attention
- Generic placeholder imagery in promotional sections

### Recommended Build Order
1. Establish color tokens and typography scale with Roboto at all weights
2. Build the pill button component with hover state
3. Implement the full-width red navigation bar
4. Create the section container and background alternation system
5. Develop the asymmetric two-column promotional layout
6. Build the news card with image banner and content area
7. Implement the awards carousel with horizontal scroll
8. Construct the footer with logo row, link groups, and social icons
9. Add the Instagram feed strip and newsletter section
10. Polish with mascot graphics and promotional banner treatments

### Accessibility
- Ensure white text on red backgrounds meets contrast ratios; the saturated red may need adjustment for small text
- Provide visible focus states on pill buttons, likely as an outline or subtle background shift
- Add descriptive alt text to all food and promotional photography
- Maintain keyboard navigability through the horizontal carousels with arrow key support
- Consider reduced motion preferences for any scroll-triggered animations

## Scope note

This guide covers the visible homepage surface including navigation, promotional sections, news carousel, Instagram feed, awards display, newsletter signup, and footer. Mobile layouts, interior pages, menu interfaces, reservation flows, and online ordering systems are not represented in the supplied material. Measurements are practical adaptation targets derived from visual inspection. No motion, sound, or interactive state behavior beyond static hover assumptions is documented.
