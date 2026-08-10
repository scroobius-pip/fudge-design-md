# How arc.net is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/arc.net-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with electric-blue textured background, large white display quote, and paired download buttons for Mac and Windows](https://pin.fontofweb.com/4907?format=jpg)](https://design.withfudge.com/share/pin-4907)

[Hero section with electric-blue textured background, large white display quote, and paired download buttons for Mac and Windows](https://design.withfudge.com/share/pin-4907)

[![Testimonial grid on cream background with electric-blue quotes, followed by a solid blue CTA band and textured footer](https://pin.fontofweb.com/4909?format=jpg)](https://design.withfudge.com/share/pin-4909)

[Testimonial grid on cream background with electric-blue quotes, followed by a solid blue CTA band and textured footer](https://design.withfudge.com/share/pin-4909)

[![Browser window mockup showing Arc's sidebar with Spaces and Profiles, featuring a purple-tinted architecture website](https://pin.fontofweb.com/4908?format=jpg)](https://design.withfudge.com/share/pin-4908)

[Browser window mockup showing Arc's sidebar with Spaces and Profiles, featuring a purple-tinted architecture website](https://design.withfudge.com/share/pin-4908)

[![Developers page with dark slate background, white testimonial quote, and browser screenshot showing code editor and map](https://pin.fontofweb.com/4910?format=jpg)](https://design.withfudge.com/share/pin-4910)

[Developers page with dark slate background, white testimonial quote, and browser screenshot showing code editor and map](https://design.withfudge.com/share/pin-4910)

## Overview

Arc's marketing site presents a browser as a cultural object rather than a utility. The design language is built on electric-blue dominance, high-contrast white typography, and playful surface textures that suggest both technical precision and creative warmth. The homepage moves through distinct atmospheric zones: a textured electric-blue hero with oversized display quotes, a cream-colored social-proof band with electric-blue testimonials, and a solid blue conversion footer. The developers page inverts this logic, using a dark slate canvas with white type to signal technical depth. Throughout, the system relies on expressive display typography—heavy, tightly tracked sans-serifs for headlines, clean geometric sans for body copy, and a monospace face for labels and attributions. The result is a site that feels simultaneously confident and approachable, premium without austerity.

## Colors

The palette is intentionally small and high-contrast, built around a signature electric blue that functions as both background and accent. Darker and lighter variants support hierarchy without diluting brand recognition.

| token | value | use |
|---|---|---|
| electric-blue | #3B3BFF | Primary brand color; hero backgrounds, testimonial text, footer surfaces, active states |
| deep-indigo | #1A1A8C | Announcement bar backgrounds, secondary button fills, hover depths |
| cream | #FFFEF0 | Testimonial section backgrounds, light-mode canvas alternative |
| ink | #000000 | Body text on light surfaces, code editor chrome, technical UI elements |
| white | #FFFFFF | Hero display text, primary button fills, navigation on dark backgrounds |
| muted-ink | #6B6B8C | Secondary body text, captions, inactive navigation states |

The electric-blue serves as the dominant atmospheric color, appearing in textured hero fields, solid CTA bands, and as the text color for testimonials on cream. Deep-indigo provides depth for announcement bars and secondary actions. Cream offers warmth and visual rest between high-energy blue sections. Ink and white establish the core reading contrast, with muted-ink reserved for de-emphasized content. The developers page introduces a dark slate field that reads as a near-black with subtle warmth, treated here as an extension of ink rather than a separate token.

## Typography

The type system combines three distinct voices: a heavy display family for headlines, a clean geometric sans for interface and body text, and a monospace face for technical labels and attributions.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Marlin Soft-Extra Black | 4rem | 900 | 1 | -0.02em | Homepage hero quotes, major section headlines |
| section-display | Marlin Soft Sq | 2.5rem | 700 | 1.1 | -0.01em | Testimonial quotes, feature headlines |
| body | Inter | 1rem | 400 | 1.5 | 0 | Descriptions, explanatory copy, navigation |
| body-large | Inter | 1.25rem | 400 | 1.5 | 0 | Introductory paragraphs, emphasized descriptions |
| label | Abc Favorit Mono | 0.75rem | 700 | 1.2 | 0.05em | Attribution pills, button text, category labels |
| navigation | Inter | 0.875rem | 400 | 1.4 | 0 | Primary navigation, announcement bar text |

Marlin Soft-Extra Black and Marlin Soft Sq, designed by Michael Hagemann, provide the system's expressive weight. Inter, designed by Rasmus Andersson and available from Rsms, handles all functional reading. Abc Favorit Mono, designed by Johannes Breyer, Fabian Harb, and Chi Long Trieu for Dinamo, supplies the technical voice. Verify licensing for these families before production use.

Font sizes are set in rem at whole-number multiples of 0.25rem. The hero-display at 4rem (64px) and section-display at 2.5rem (40px) create clear hierarchy. Body text at 1rem (16px) maintains standard readability, while body-large at 1.25rem (20px) serves introductory content with greater presence. Label at 0.75rem (12px) provides fine-grained UI text with slight positive tracking for all-caps or small-caps treatments.

## Layout

The page architecture uses full-bleed atmospheric bands that stack vertically, each with distinct color and texture treatments. The hero occupies the full viewport width with centered content and generous vertical padding. Navigation sits fixed or sticky at the top, with a logo mark, text links, and a download button arranged horizontally.

Content within bands is typically centered with a max-width container, estimated at approximately 75rem (1200px) based on comfortable reading measure and button placement. The testimonial grid uses a four-column layout on desktop, with each quote centered within its column and attribution pills below. The footer converts to a two-zone layout: navigation links on the left, company mark on the right, with social icons anchored near the link columns.

Spacing between sections is dramatic, using 6rem (96px) or greater to create clear atmospheric shifts. Within components, 1.5rem (24px) separates related elements like headlines and body copy, or quotes and attributions. Buttons carry 0.75rem (12px) vertical padding and 1.5rem (24px) horizontal padding, creating pill-like proportions without full circularity.

The developers page narrows the content focus, centering a single testimonial with supporting screenshot below. The browser mockup receives subtle shadow treatment and rounded corners, floating above the textured background to suggest depth without breaking the flat graphic language.

## Visual language

Surface texture is a defining characteristic. The electric-blue backgrounds carry a fine grain or noise texture that prevents flatness and suggests digital materiality. This texture appears consistently across the hero, footer, and announcement bar, unifying disparate page sections. The cream testimonial band is smooth, providing tactile contrast to the textured fields.

Decorative elements include wavy horizontal rules that separate major zones—these appear as scalloped or zigzag edges in deep-indigo against electric-blue, or electric-blue against cream. A circular "Now Available on Windows" stamp appears in the hero, adding a playful, almost sticker-like quality to the otherwise clean composition. Small emoji-style icons (peace sign, heart, sparkle) appear above the testimonial grid, reinforcing the personable brand voice.

The browser mockups are presented with realistic chrome—traffic lights, address bar, sidebar—rendered in a flattened, illustrative style rather than photorealistic. This maintains the graphic unity of the page while still communicating product function. Screenshots within the browser frame show actual interface states: code editors, maps, web pages, reinforcing the product's utility through contextual demonstration.

## Components

### Primary button

- **Anatomy**: Icon prefix (Apple logo or Windows grid), label text, full background fill
- **Surface**: White background on electric-blue or deep-indigo fields; deep-indigo background when appearing on white or cream
- **Typography**: `{typography.label}` in all-caps or title-case with tracking
- **Shape**: 0.75rem border radius, creating a rounded rectangle rather than a full pill
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Centered within its container, often paired with a secondary button variant
- **Variants**: White fill with electric-blue text (primary), deep-indigo fill with white text (secondary/inverted)

### Secondary button

- **Anatomy**: Icon prefix, label text, full background fill
- **Surface**: Deep-indigo background, white text
- **Typography**: `{typography.label}`
- **Shape**: 0.75rem border radius
- **Spacing**: Matches primary button
- **Composition**: Appears adjacent to primary button, slightly subordinate in visual weight

### Testimonial quote

- **Anatomy**: Opening quotation mark glyph, quote text, closing quotation mark glyph, attribution line below
- **Surface**: Electric-blue text on cream background; white text on dark slate (developers page)
- **Typography**: `{typography.section-display}` for quote, `{typography.label}` for attribution
- **Shape**: Text wraps naturally, no containing border
- **Spacing**: 1.5rem between quote and attribution, generous vertical padding within the band
- **Composition**: Centered within grid column, four columns across on desktop

### Attribution pill

- **Anatomy**: Handle or name text, optional border container
- **Surface**: Transparent with 1px electric-blue border; or text-only without border
- **Typography**: `{typography.label}` in uppercase with positive tracking
- **Shape**: Full pill border radius (9999px) when bordered
- **Spacing**: Horizontal padding approximately 1rem, vertical padding 0.5rem
- **Composition**: Centered below quote, or inline with quote text

### Announcement bar

- **Anatomy**: Text message, arrow indicator, product icon (Dia browser)
- **Surface**: Deep-indigo background, white text
- **Typography**: `{typography.navigation}`
- **Shape**: Full-width band, wavy or scalloped bottom edge
- **Spacing**: Compact vertical padding, approximately 0.75rem
- **Composition**: Centered text with icon positioned to the right of the message

### Navigation bar

- **Anatomy**: Logo mark, text links (Max, Mobile, Developers, Students, Blog), download button
- **Surface**: Transparent over textured electric-blue, or matching background
- **Typography**: `{typography.navigation}` for links, `{typography.label}` for button
- **Shape**: No visible container, links as plain text
- **Spacing**: Horizontal distribution with logo left, links center-left, button right
- **Composition**: Flex row with space-between logic

### Footer

- **Anatomy**: Link columns (Product, Resources), social icons, company mark and location
- **Surface**: Textured electric-blue matching hero
- **Typography**: `{typography.navigation}` for links, `{typography.label}` for column headers
- **Shape**: No containing card, full-bleed band
- **Spacing**: Generous top padding, moderate gap between link rows
- **Composition**: Left-aligned link clusters, right-aligned company mark with decorative underline

## Responsive behavior

The four-column testimonial grid should collapse to two columns on tablet and single column on mobile, maintaining centered text alignment throughout. Hero display text should scale down to approximately 2.5rem on narrow viewports to prevent overflow. Navigation links should collapse to a menu trigger or horizontal scroll when space is constrained.

The announcement bar may wrap to two lines on mobile; the product icon should remain adjacent to the text rather than breaking to a new line. Browser mockups should scale proportionally, potentially switching from side-by-side layouts to stacked single views. Button pairs should stack vertically on mobile with the primary action above the secondary.

The textured backgrounds should maintain their grain quality across densities; consider a slightly larger noise tile on high-DPI displays to prevent moiré patterns.

## Practical implementation guidance

### Preserve
- The electric-blue textured surface as the primary brand atmosphere—this texture is not decorative excess but core identity
- The three-typeface hierarchy: heavy display, clean sans, monospace label
- High-contrast white-on-blue for hero moments, blue-on-cream for social proof
- The wavy section dividers as zone-transition markers
- Centered, generous spacing that lets display type breathe

### Avoid
- Flat, untextured electric-blue backgrounds—the grain is essential to the material quality
- Adding more than one or two additional colors; the palette's restraint is part of its impact
- Tightening letterspacing on body text; the display tracking is specific to headline sizes
- Replacing the monospace label face with a proportional sans, which would lose the technical voice
- Cluttering the hero with multiple messages; the single-quote format is proven

### Recommended build order
1. Establish the textured electric-blue surface and noise/grain implementation
2. Set up the type hierarchy with Marlin display, Inter body, and Favorit Mono labels
3. Build the navigation and announcement bar as shared top elements
4. Implement the hero section with display quote and button pair
5. Create the testimonial grid with attribution pills
6. Add the footer with link columns and company mark
7. Adapt the developers page variant with dark slate surface

### Accessibility
- Ensure the textured electric-blue background meets contrast requirements with white text; the deep-indigo variant may be needed for smaller text
- Provide visible focus states for navigation links and buttons, using outline or background shift rather than relying on color change alone
- Maintain keyboard operability for the announcement bar as a clickable region
- Consider reduced-motion preferences for any scroll-triggered animations; the static design should communicate fully without motion
- Test the grain texture at high zoom levels to ensure it does not interfere with text legibility for low-vision users

## Scope note

This guide covers the Arc marketing homepage and developers landing page as visible in desktop screenshots. Mobile layouts, additional product pages, and interactive states such as hover, focus, and loading are not represented. Motion design, video backgrounds, and the browser application interface itself are outside this scope. Measurements are practical adaptation targets derived from visible proportions.
