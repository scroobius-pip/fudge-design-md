# How pinata.cloud is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/pinata.cloud-design)

Last updated: 2026-08-10

## Captured pages

[![Footer with rounded purple panel, Pinata logo, social icons, and multi-column link grid on dark background](https://pin.fontofweb.com/4478?format=jpg)](https://design.withfudge.com/share/pin-4478)

[Footer with rounded purple panel, Pinata logo, social icons, and multi-column link grid on dark background](https://design.withfudge.com/share/pin-4478)

[![Hero section with bold display headline, colorful piñata mascot, checkmark feature list, and pill-shaped CTA buttons on dark background](https://pin.fontofweb.com/4477?format=jpg)](https://design.withfudge.com/share/pin-4477)

[Hero section with bold display headline, colorful piñata mascot, checkmark feature list, and pill-shaped CTA buttons on dark background](https://design.withfudge.com/share/pin-4477)

[![Developer testimonials in code-block cards with syntax highlighting, company logos, and dark rounded surfaces](https://pin.fontofweb.com/4476?format=jpg)](https://design.withfudge.com/share/pin-4476)

[Developer testimonials in code-block cards with syntax highlighting, company logos, and dark rounded surfaces](https://design.withfudge.com/share/pin-4476)

[![Blog section with vibrant abstract artwork, light content cards, orange pill buttons, and category labels](https://pin.fontofweb.com/4475?format=jpg)](https://design.withfudge.com/share/pin-4475)

[Blog section with vibrant abstract artwork, light content cards, orange pill buttons, and category labels](https://design.withfudge.com/share/pin-4475)

## Overview

Pinata's design system presents a developer-centric brand identity that balances technical credibility with playful personality. The visual language centers on immersive dark environments that make vibrant accent colors and expressive typography feel electric. A colorful piñata mascot serves as the brand's emotional anchor, appearing in hero moments and scattered as decorative elements throughout the experience.

The system employs a high-contrast approach: near-black canvas surfaces allow purple, green, and orange accents to achieve maximum saturation impact. Typography alternates between two distinct voices—geometric display faces with mechanical character for headlines, and clean sans-serif for readable body text. Code-centric components, such as testimonial cards styled as syntax-highlighted blocks, reinforce the technical audience while maintaining visual warmth through rounded shapes and approachable spacing.

Content density remains moderate, with generous breathing room between sections and clear hierarchical separation between marketing messaging and functional interfaces. The overall impression is of a tool built by developers for developers, one that takes its infrastructure seriously without taking itself too seriously.

## Colors

| token | value | use |
|---|---|---|
| canvas | `#0a0a0f` | Primary page background, deepest layer |
| surface | `#111118` | Card backgrounds, elevated panels, testimonial blocks |
| surface-elevated | `#1a1a24` | Hover states, secondary containers |
| action | `#6c5ce7` | Primary buttons, footer panel, interactive highlights |
| action-hover | `#5b4ed4` | Button hover states, pressed interactions |
| accent-green | `#4ade80` | Secondary CTAs, success indicators, "Read docs" button |
| accent-orange | `#f59e0b` | Tertiary actions, blog "Read more" buttons, warm emphasis |
| ink | `#ffffff` | Primary text, headings, icons on dark surfaces |
| ink-muted | `#a1a1aa` | Secondary text, captions, metadata |
| ink-inverse | `#0a0a0f` | Text on light surfaces, button labels on green/orange |
| border | `#27272a` | Subtle dividers, card outlines, input borders |

The color strategy operates in three modes. The dominant dark mode uses canvas and surface values to create depth, with action purple serving as the brand's signature interactive color. Accent green and orange provide functional differentiation—green typically signals documentation and learning paths, while orange marks content exploration and blog engagement. Light surfaces appear selectively, primarily in blog cards where photographic artwork and dark text create readable contrast against the dark page background.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Pp Neue Machina-Inktrap Ultrabold | 4rem | 800 | 1 | -0.02em | Primary headlines, hero statements |
| section-display | Pp Neue Machina-Plain Bold | 2.5rem | 700 | 1.1 | -0.01em | Section headings, feature titles |
| body | Inter | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, general reading |
| body-medium | Inter | 1rem | 500 | 1.6 | 0 | Emphasized body, card descriptions |
| label | Pp Telegraf | 0.875rem | 600 | 1.25 | 0.05em | Buttons, tags, category labels, CTAs |
| navigation | Pp Telegraf | 0.875rem | 500 | 1.25 | 0.02em | Menu items, footer links, breadcrumbs |
| code | Jet Brains Mono | 0.875rem | 500 | 1.5 | 0 | Code blocks, technical testimonials, syntax |

The typographic system pairs two display families from Pangram Pangram with functional sans-serif and monospace complements. Pp Neue Machina delivers the brand's distinctive voice—its Inktrap Ultrabold weight features angular terminals and mechanical construction that evoke technical precision, while the Plain Bold offers slightly cleaner geometry for secondary headlines. Pp Telegraf handles interface text with confident weight gradations from Regular through Ultrabold.

Inter provides the workhorse body text with excellent screen readability at standard weights. Jet Brains Mono appears exclusively in code contexts, its medium weight offering sufficient presence for syntax-highlighted testimonials without overwhelming the dark card surfaces.

Verify licensing for these families before production use. Pp Neue Machina and Pp Telegraf are available from Pangram Pangram; Inter from Rasmus Andersson; Jet Brains Mono from Jet Brains; Fira Code from its respective designers and vendors.

## Layout

The page structure follows a centered single-column flow with contained width for primary content and full-bleed sections for visual impact. Maximum content width appears to be approximately 1200px, with consistent horizontal padding of 1.5rem to 2rem on viewport edges.

Section spacing uses a generous 6rem vertical rhythm, creating clear separation between functional areas. Within sections, content gaps of 1.5rem maintain related-element proximity without crowding.

The hero section centers all elements—mascot, headline, feature list, and action buttons—establishing immediate focus on the conversion path. Feature items arrange horizontally in a flex row with equal distribution, each anchored by a circular checkmark icon.

Testimonials employ a two-column grid with equal-width cards, each containing a company logo, syntax-highlighted quote block, and attribution. The grid gap matches standard content spacing at 1.5rem.

Blog cards stack vertically with substantial vertical separation. Each card uses a split composition: vibrant abstract artwork occupies the left half with rounded corners on the leading edge, while text content fills the right half on a light background with rounded corners on the trailing edge. This asymmetric pairing creates visual rhythm and distinguishes editorial content from functional sections.

The footer inverts the dark canvas with a rounded purple panel containing multi-column link navigation, social icons, and legal text. The panel's generous border radius and internal padding create a contained, card-like feel that contrasts with the full-bleed sections above.

## Visual language

The visual identity derives energy from the tension between technical precision and playful warmth. The piñata mascot—rendered in saturated rainbow segments—serves as the emotional core, appearing at scale in hero moments and as scattered decorative icons throughout the experience. Supporting decorative elements include simple geometric shapes: circular icons with abstract marks, starbursts, and smiley faces in accent colors.

Photographic and illustrative content follows a vibrant, high-saturation approach. Blog artwork uses bold flat-color abstractions with flowing organic shapes in yellow, purple, orange, and green. These compositions avoid photographic realism in favor of graphic impact that complements the brand's digital-native positioning.

Surface treatments favor solid colors over gradients or textures. Shadows remain minimal or absent, with depth created through color value shifts between canvas, surface, and elevated surface layers. Border treatments are rare and subtle when present, typically using the border token at 1px for input fields or card outlines.

Iconography appears simple and geometric—social platform icons in the footer use clean line weights, while feature checkmarks employ filled circles with white marks on purple grounds. The overall icon style prioritizes immediate recognition over decorative complexity.

## Components

### Primary Action Button

- **Anatomy**: Pill-shaped container with centered text label
- **Surface**: Solid action purple background with white text
- **Typography**: Label token, uppercase styling with positive letter-spacing
- **Shape**: Full pill radius (9999px), generous horizontal padding (2rem), vertical padding (0.875rem)
- **Spacing**: Typically appears in button groups with 0.75rem gap between siblings
- **Composition**: Often paired with arrow icon in preceding circular container for directional emphasis
- **Variants**: Secondary variant uses accent-green background with dark text for documentation paths

### Feature List Item

- **Anatomy**: Circular checkmark icon followed by primary metric and secondary descriptor
- **Surface**: Transparent on dark canvas
- **Typography**: Label token for metric value (e.g., "500 Pinned Files"), body token for descriptor ("Total")
- **Shape**: Checkmark icon in filled purple circle, approximately 1.5rem diameter
- **Spacing**: Items distribute horizontally with even spacing, wrapping as needed
- **Composition**: Five items visible in hero, creating balanced rhythm across viewport width

### Testimonial Card

- **Anatomy**: Company logo, code-block styled quote, attribution with name and title
- **Surface**: Surface color background with card border radius
- **Typography**: Code token for the syntax-highlighted block, with color-coded keywords (const in pink, strings in yellow, properties in white, values in light blue)
- **Shape**: 1.5rem border radius, internal padding of 2rem
- **Spacing**: 1.5rem gap in two-column grid
- **Composition**: Logo positioned top-left, code block fills majority of card, attribution indented to match code structure

### Blog Card

- **Anatomy**: Split layout with artwork left and content right
- **Surface**: Light background (white/very light gray) for text area, artwork extends to card edge
- **Typography**: Label token for category tag in action purple, section-display token for headline, body token for excerpt
- **Shape**: 2rem border radius on outer card, artwork clipped to rounded corners on left side
- **Spacing**: Internal content padding approximately 2rem, card vertical margin 1.5rem
- **Composition**: Artwork occupies roughly 45% width, content 55%; "Read more" button in accent-orange pill positioned below excerpt

### Footer Panel

- **Anatomy**: Rounded container with logo lockup, social icons, multi-column links, legal text
- **Surface**: Action purple background with white text and icons
- **Typography**: Navigation token for column headers and links, smaller size for copyright and legal
- **Shape**: 2rem border radius, contained within page margins with dark canvas visible as border
- **Spacing**: Internal padding 3rem, column gaps generous for scanability
- **Composition**: Logo and tagline left-aligned, four link columns right-aligned, social icons between logo and columns, legal text bottom-left

## Responsive behavior

The layout appears optimized for desktop viewport widths, with centered content and horizontal feature distributions. At narrower viewports, the following adaptations should be considered:

- Hero headline should scale down to section-display size, maintaining line breaks for readability
- Feature list items should stack vertically with consistent horizontal alignment, checkmark icons remaining left of text
- Testimonial grid should collapse to single column, preserving internal card padding and code block formatting
- Blog cards should stack artwork above content, maintaining rounded corners on all sides rather than split-side treatment
- Footer link columns should collapse to two-column then single-column layout, with logo and social icons centered above

Touch targets for buttons should maintain minimum 44px height. Code blocks in testimonials may require horizontal scroll containers on narrow viewports to preserve formatting integrity.

## Practical implementation guidance

### Preserve
- The dark canvas as the dominant background; light surfaces should remain exceptional, used only where content readability demands contrast
- The distinctive display typography for headlines; the mechanical character of Pp Neue Machina is central to brand recognition
- The syntax-highlighted testimonial format; this component uniquely communicates developer credibility
- The piñata mascot's rainbow color sequence and simple geometric construction
- Generous section spacing; the breathing room between functional areas contributes to the premium technical feel

### Avoid
- Introducing additional accent colors beyond the established purple, green, and orange; the restrained palette maintains focus
- Using light backgrounds for primary content areas; this would undermine the immersive dark environment
- Replacing the code-block testimonials with conventional quote formatting; the technical styling is a differentiator
- Tightening border radius values; the soft rounding is essential to the approachable personality
- Mixing display fonts for body text; Inter should remain the reading typeface

### Recommended Build Order
1. Establish canvas and surface color tokens with dark mode as default
2. Implement hero section with display typography and centered composition
3. Build pill button components with primary and secondary variants
4. Create testimonial card with code syntax highlighting and proper font stack
5. Develop blog card with split layout and artwork handling
6. Construct footer panel with contained rounded treatment
7. Add decorative elements and mascot imagery

### Accessibility
- Ensure white text on action purple meets WCAG AA contrast ratios; the purple may need adjustment for small text
- Provide focus indicators that maintain visibility against dark surfaces, likely using accent-green outlines
- Code blocks should include proper semantic markup and consider screen reader alternatives for syntax coloring
- Interactive elements should have minimum 44px touch targets when adapted for mobile
- Decorative mascot and shape elements should be marked as presentational or include meaningful alt text when functional

## Scope note

This guide covers the Pinata marketing homepage visible in the supplied images, including hero, testimonials, blog preview, and footer sections. Navigation header, interior pages, dashboard interfaces, pricing tables, and mobile-specific layouts are not represented. Motion, hover states, loading sequences, and form interactions are not documented. Measurements are practical adaptation targets derived from visual inspection.
