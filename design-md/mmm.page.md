# How mmm.page is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/mmm.page-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with coral watercolor splash behind 'Digital Paper' serif headline, vintage sewing figure, and social media blocks in grass foreground](https://pin.fontofweb.com/3832?format=jpg)](https://design.withfudge.com/share/pin-3832)

[Hero section with coral watercolor splash behind 'Digital Paper' serif headline, vintage sewing figure, and social media blocks in grass foreground](https://design.withfudge.com/share/pin-3832)

[![Community showcase with scattered user website thumbnails surrounding centered signup messaging on white background](https://pin.fontofweb.com/3831?format=jpg)](https://design.withfudge.com/share/pin-3831)

[Community showcase with scattered user website thumbnails surrounding centered signup messaging on white background](https://design.withfudge.com/share/pin-3831)

[![Primary landing with 'mmm' brushstroke logo, 3D geometric shapes, purple and mint action buttons, and floating user page previews](https://pin.fontofweb.com/3830?format=jpg)](https://design.withfudge.com/share/pin-3830)

[Primary landing with 'mmm' brushstroke logo, 3D geometric shapes, purple and mint action buttons, and floating user page previews](https://design.withfudge.com/share/pin-3830)

[![Top-of-page view with navigation bar, brushstroke logo, and vertically stacked explore and signup buttons with arrow icons](https://pin.fontofweb.com/3829?format=jpg)](https://design.withfudge.com/share/pin-3829)

[Top-of-page view with navigation bar, brushstroke logo, and vertically stacked explore and signup buttons with arrow icons](https://design.withfudge.com/share/pin-3829)

## Overview

mmm.page presents itself as a website builder through a deliberately unpolished, scrapbook-like visual language. The design rejects corporate minimalism in favor of tactile textures: watercolor brushstrokes, 3D-rendered geometric primitives, hand-drawn arrows, and vintage illustration cutouts. The landing experience is built around a central vertical axis where messaging and calls-to-action anchor the composition, while decorative elements orbit in seemingly random positions that nonetheless balance the page. The system communicates creative freedom by example—the marketing page itself looks like something a user might make, with playful juxtapositions of serif headlines, sans-serif utility text, and expressive accent typography. The overall impression is of a digital zine or moodboard rather than a conventional SaaS landing page, with the product's value proposition embedded in the very aesthetic of the page.

## Colors

The color system is intentionally restrained to let texture and imagery carry visual interest. Four core interface colors define the palette, supplemented by a warm coral wash that appears as a photographic/illustrative element.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, navigation bar background, logo letterforms, arrow icons |
| canvas | #FFFFFF | Page background, button text on dark surfaces, card backgrounds |
| coral-wash | #F4A488 | Hero brushstroke texture behind "Digital Paper" headline, decorative watercolor accents |
| mint-action | #6EE7B7 | Secondary CTA button fill, edit badge background, interactive highlights |
| purple-action | #7C3AED | Primary CTA button fill, dominant action color |
| muted-ink | #6B7280 | Supporting body text, descriptive paragraphs, secondary messaging |

The palette operates in a light-dominant mode: white canvas covers most of the viewport, with black used for text density and navigation containment. The two action colors—purple and mint—never appear mixed in equal proportion; purple carries the primary conversion intent while mint signals secondary or in-context editing actions. The coral wash functions as a warm accent that bridges the gap between interface and illustration, appearing in organic shapes rather than geometric containers. No dark mode is visible in the supplied material. The 3D primitives and user thumbnail content introduce their own chromatic variety, but the interface itself maintains discipline around these six tokens.

## Typography

The type system mixes six distinct font families across expressive and functional roles, creating deliberate tension between editorial elegance and casual utility.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Playfair | 4rem | 400 | 1.1 | -0.01em | Hero headlines, "Digital Paper" splash text |
| logo-display | Calistoga | 5rem | 400 | 1 | -0.02em | "mmm" brushstroke logo wordmark |
| section-display | National Park-Variable | 2.5rem | 400 | 1.2 | 0em | Section headlines, community count |
| body | Lato | 1.25rem | 400 | 1.5 | 0em | Descriptive paragraphs, supporting copy |
| body-italic | Lato-Italic | 1.25rem | 400 | 1.5 | 0em | Emphasized words within body text |
| label | Lato | 0.875rem | 700 | 1.2 | 0.05em | Button labels, navigation items, badges |
| navigation | Lato | 0.875rem | 400 | 1.2 | 0.02em | Top bar login/signup text |
| hand-accent | Patrick Hand Sc | 1.5rem | 400 | 1.3 | 0.01em | Handwritten annotations, arrow labels |

Playfair, designed by Claus Eggers Sørensen, anchors the most expressive moments with high-contrast serifs that feel editorial and art-directed. Calistoga provides a softer, rounded display character for the logo. National Park-Variable offers a utilitarian but friendly sans-serif for mid-weight headlines. Lato handles all functional text across three weights and styles. Patrick Hand Sc introduces deliberate informality for annotations and callouts. Verify licensing for these families before production use.

## Layout

The page employs a centered single-column layout with asymmetric decorative framing. The core content area maintains a maximum readable width of approximately 42rem, within which headlines, body text, and action buttons stack vertically with consistent rhythm. Outside this central column, 3D geometric primitives—cubes, pyramids, springs, and cylinders—float at seemingly arbitrary positions, creating a diorama-like depth without overwhelming the reading path.

Vertical spacing follows a section-based rhythm: major content blocks separate by 6rem, while internal component gaps use 1rem. The navigation bar breaks the centered convention by sitting at the top-left in a pill-shaped container, with a matching "EXPLORE" pill at the top-right, creating a horizontal tension that frames the vertical descent.

The thumbnail gallery in lower sections abandons grid regularity in favor of scattered, rotated cards that overlap slightly and sit at varying angles. This "messy pile" composition reinforces the product's positioning against rigid templates. A dotted vertical line runs through the center of some sections, suggesting a timeline or scroll path that connects the floating elements into a coherent journey.

## Visual language

The visual system is defined by three core material qualities: watercolor texture, 3D primitive geometry, and vintage collage. Brushstroke washes appear behind key text—most notably the "mmm" logo and "Digital Paper" headline—creating the impression that text was painted onto the page. These washes use soft edges and color variation within a single hue family, avoiding hard vector gradients.

The 3D primitives are uniformly white or light gray with soft shadows, rendered in a low-fidelity style that suggests clay or matte plastic rather than chrome or glass. Their placement follows no strict grid: some overlap the content area, others sit entirely in the margins, and their sizes vary dramatically. This creates a sense of physical space without establishing a literal perspective system.

Collage elements include vintage illustrations (the sewing figure), botanical cutouts (flowers and grass), and hand-drawn arrows with labels like "LONG TERM VISION." These elements sit at varying depths, with some appearing behind text and others in front, breaking the flatness of the digital page. The "Sorry minimalism" text in the lower right of the hero suggests self-aware rejection of conventional design trends.

User-generated content appears as phone-shaped thumbnails with realistic shadows and slight rotations, making the community gallery feel like scattered photographs on a table rather than a structured portfolio grid.

## Components

**Navigation Bar**
- Anatomy: Horizontal pill containing hamburger icon, "Login" text link, and "Sign Up" text link
- Surface: Solid black fill with white text
- Typography: Navigation token for all items
- Shape: Full pill with 9999px radius
- Spacing: Compact internal padding of approximately 0.5rem vertical, 1rem horizontal
- Composition: Fixed or sticky top-left position

**Primary Action Button**
- Anatomy: Full-width or wide rectangular button with centered label and right arrow icon
- Surface: Purple-action fill with canvas text
- Typography: Label token, uppercase with arrow symbol
- Shape: 0.75rem border radius
- Spacing: Generous 1.25rem vertical padding, 2rem horizontal
- States: Default only visible; hover/focus not determinable from still images

**Secondary Action Button**
- Anatomy: Matching dimensions to primary, with centered label and right arrow icon
- Surface: Mint-action fill with ink text
- Typography: Label token, uppercase with arrow symbol
- Shape: 0.75rem border radius
- Spacing: Identical to primary
- Composition: Stacks vertically below primary with 1rem gap

**Edit Badge**
- Anatomy: Small rectangular badge with "EDIT" label and pencil icon
- Surface: Mint-action fill with ink text
- Typography: Label token at smaller effective size
- Shape: 0.75rem border radius
- Composition: Fixed bottom-right corner of viewport

**Thumbnail Card**
- Anatomy: Phone-proportioned rectangle containing user website screenshot
- Surface: Canvas background with soft drop shadow
- Shape: 1rem border radius with slight rotation (typically -5 to +5 degrees)
- Spacing: Overlapping placement with no consistent gutter
- Shadow: 0 4px 24px rgba(0,0,0,0.12) for lift effect

**Hero Brushstroke Container**
- Anatomy: Irregular watercolor texture shape with text overlaid
- Surface: Coral-wash texture with organic edge variation
- Typography: Hero-display token centered within
- Composition: Positioned above main content, large enough to dominate upper viewport

## Responsive behavior

The supplied images show a desktop viewport experience. The centered single-column structure suggests natural adaptation to narrower screens: the 42rem content maximum would become a percentage-based width with side margins, and the 3D primitives would likely reduce in count or scale to prevent crowding. The stacked button pair would remain vertical on mobile, likely expanding to full width minus margins.

The floating thumbnail gallery presents the greatest responsive challenge; the scattered, rotated composition may need to collapse into a simpler horizontal scroll or reduced grid on small viewports to maintain legibility. The navigation pill could expand to a full-width bar or hamburger-only treatment.

The fixed edit badge in the bottom-right corner should maintain its position across breakpoints, though its tap target should expand to meet minimum accessibility sizes on touch devices.

## Practical implementation guidance

**Preserve**
- The deliberate tension between precise UI elements (buttons, navigation) and organic decorative elements (brushstrokes, 3D shapes, vintage illustrations)
- The centered vertical reading path with asymmetric margin decoration
- The watercolor texture behind key headlines rather than flat color blocks
- The scattered, rotated thumbnail composition that rejects grid rigidity
- The uppercase, arrow-suffixed button labels that feel like signposts

**Avoid**
- Aligning the 3D primitives to a strict grid or symmetrical pattern
- Replacing the brushstroke textures with CSS gradients or solid color blocks
- Constraining the thumbnail gallery to a regular grid or carousel
- Using the action colors for non-interactive elements
- Overloading the page with additional font families beyond the six established roles

**Recommended build order**
1. Establish the white canvas background and centered content column
2. Implement the type hierarchy with Playfair for hero, National Park-Variable for sections, and Lato for body
3. Build the navigation pill and stacked action buttons with exact color values
4. Add the brushstroke texture elements as positioned background images or SVG masks
5. Place 3D primitives as absolutely positioned decorative layers
6. Compose the thumbnail gallery with varied rotations and overlapping shadows
7. Add collage elements (vintage figures, botanicals, hand-drawn arrows) as final texture layers

**Accessibility**
- Ensure the purple-action buttons meet WCAG contrast requirements against white text; the vibrant purple may need lightness adjustment for small text
- Provide text alternatives for all collage and 3D decorative images
- Maintain keyboard focus visibility on the scattered thumbnail cards if they become interactive
- Consider reducing motion for users who prefer it, as the floating elements may trigger vestibular sensitivity
- The mint-action text on buttons should be verified for contrast against the light green background

## Scope note

This guide covers the mmm.page landing and hero experience as visible in the supplied images. Mobile breakpoints, animation behavior, hover and focus states, form interactions, and the actual website builder interface are not represented. The thumbnail gallery shows user-generated content but not its creation or management flows. Measurements are practical adaptation targets derived from visual estimation against a 4px relative unit grid.
