# How atlantide-festival.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/atlantide-festival.org-design)

Last updated: 2026-08-10

## Captured pages

[![Author grid page showing portrait cards with staggered masonry layout and edition filter dropdown](https://pin.fontofweb.com/916?format=jpg)](https://design.withfudge.com/share/pin-916)

[Author grid page showing portrait cards with staggered masonry layout and edition filter dropdown](https://design.withfudge.com/share/pin-916)

[![Footer section with split red and yellow promotional panels, navigation links, and partner logos](https://pin.fontofweb.com/915?format=jpg)](https://design.withfudge.com/share/pin-915)

[Footer section with split red and yellow promotional panels, navigation links, and partner logos](https://design.withfudge.com/share/pin-915)

[![Cabinet de curiosités display featuring product photography with handwritten note on light gray background](https://pin.fontofweb.com/914?format=jpg)](https://design.withfudge.com/share/pin-914)

[Cabinet de curiosités display featuring product photography with handwritten note on light gray background](https://design.withfudge.com/share/pin-914)

[![Author events section with large italic display typography and program call-to-action buttons](https://pin.fontofweb.com/913?format=jpg)](https://design.withfudge.com/share/pin-913)

[Author events section with large italic display typography and program call-to-action buttons](https://design.withfudge.com/share/pin-913)

## Overview

Atlantide Festival is a literary festival website that balances editorial warmth with contemporary graphic confidence. The design system centers on a striking typographic pairing: an elegant condensed italic serif for expressive display moments, and a clean geometric sans-serif for functional body text and navigation. The visual identity is anchored by bold, flat color blocks in coral and amber that punctuate the otherwise restrained palette of black, white, and warm neutrals. Photography of authors and cultural objects receives generous space, often arranged in staggered, asymmetric grids that suggest the curated, exploratory nature of a festival program. The overall impression is sophisticated yet accessible—literary without being precious, contemporary without being cold.

## Colors

The color system operates on a principle of restraint punctuated by warmth. The foundation is stark black and white, creating high-contrast readability for text and navigation. Against this neutral ground, two saturated accent colors—coral and amber—appear as large flat panels that divide space and draw attention to calls-to-action. A muted rose tone serves as a secondary accent for decorative display typography, while warm and cool neutral surfaces provide subtle differentiation between content areas without competing with photography.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, navigation, borders, and interface elements |
| canvas | #FFFFFF | Page background, card surfaces, and text on dark or colored panels |
| coral | #E8503A | Promotional panels, primary action backgrounds, and energetic accents |
| amber | #F5A623 | Secondary promotional panels, social buttons, and warm highlights |
| rose | #C4A4A0 | Decorative display typography, section watermarks, and subtle branding moments |
| surface-warm | #F5F0ED | Author card backgrounds, content banding, and soft content containers |
| surface-cool | #E8E4E1 | Alternate section backgrounds and secondary content areas |

The coral and amber panels are used at full saturation as large rectangular blocks that split the viewport horizontally, each containing white or black text depending on contrast needs. The rose tone appears at reduced opacity or as a watermark layer behind primary content, creating depth without demanding attention. Photography dominates the visual field on author and program pages, with the neutral surface colors serving as matte frames that let portraits and object photography breathe.

## Typography

The typographic system relies on two distinct voices: Gt Alpina-Condensed Light Italic for expressive, oversized display settings, and Outfit for all functional text. This pairing creates a dialogue between editorial heritage and contemporary clarity. Gt Alpina-Condensed Light Italic appears in enormous sizes as section titles and decorative watermarks, often cropped or partially obscured by page edges to create a sense of continuous, flowing content. Outfit handles navigation, body copy, labels, and captions with geometric precision and generous spacing.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Gt Alpina-Condensed Light Italic | 6rem | 300 | 1 | -0.01em | Page titles, decorative watermarks, and immersive section headers |
| section-display | Gt Alpina-Condensed Light Italic | 4rem | 300 | 1.1 | -0.01em | Secondary display moments and medium-scale expressive headings |
| body | Outfit | 1rem | 400 | 1.5 | 0 | Paragraph text, descriptions, and general content |
| body-semibold | Outfit | 1rem | 600 | 1.5 | 0 | Author names, emphasized labels, and card titles |
| label | Outfit | 0.875rem | 600 | 1.2 | 0.05em | Uppercase navigation labels, filter controls, and category tags |
| navigation | Outfit | 0.875rem | 400 | 1.2 | 0.02em | Footer links, secondary navigation, and utility text |
| caption | Outfit | 0.75rem | 400 | 1.4 | 0.01em | Metadata, dates, locations, and supplementary information |

Gt Alpina-Condensed Light Italic is credited to designer Reto Moser and distributed by Grilli Type. Outfit is credited to designer Rodrigo Fuenzalida and distributed by Frag Type. Verify licensing for these families before production use.

## Layout

The page architecture favors asymmetry and generous whitespace. Content areas are not rigidly centered but often offset, with large display type bleeding toward edges and photography occupying irregular grid positions. The layout system uses a consistent spacing unit of 0.25rem, with section-level padding at 6rem to create dramatic vertical breathing room between content bands.

The author grid demonstrates the layout philosophy: a staggered masonry-like arrangement where portrait images and text cards occupy positions at varying vertical alignments, creating visual rhythm without strict row alignment. Cards are not uniformly sized—some images are taller, some wider, and the accompanying text blocks sit at different heights relative to their images.

Promotional panels split the viewport into equal halves, each a solid color block with centered or left-aligned content. The footer extends this two-column logic, with navigation links on the left and partner logos with social buttons on the right. A thin horizontal rule separates the main footer from legal copy below.

The content width appears to max out at approximately 1200px for text-heavy sections, while full-bleed color panels and some image grids extend to viewport edges. Internal spacing within cards and panels uses 1.5rem padding, with 2rem gaps between grid items.

## Visual language

The visual identity of Atlantide Festival is defined by the tension between raw cultural material and refined graphic presentation. Author portraits are shown in natural, unposed moments—outdoor settings, candid expressions, environmental context—rather than studio headshots. This documentary approach to photography is framed by precise, almost architectural typography and flat color geometry.

The decorative display typography is a signature element: words like "cabinet de curiosités" and "les évènements" appear in enormous italic serif at low opacity, functioning as atmospheric texture rather than readable content. These watermarks often overlap with functional text and imagery, creating layered, poster-like compositions.

Color is deployed strategically rather than systematically. The coral and amber panels appear as deliberate interventions—moments of warmth and energy that break up long scrolling pages of photography and text. Social buttons carry the amber tone as filled circles, making them immediately identifiable against neutral backgrounds.

The overall aesthetic suggests a contemporary arts institution: confident with white space, respectful of its subjects, and willing to let expressive type and bold color carry brand personality without overwhelming the cultural content.

## Components

### Author Card

The author card combines portrait photography with minimal metadata in an asymmetric composition.

- **Anatomy**: Portrait image above or adjacent to a text block containing the author name in semibold and country/region in regular weight.
- **Surface**: Text block sits on warm neutral surface (#F5F0ED) when separated from image; images have no border or radius.
- **Typography**: Name uses body-semibold token; location uses body token at standard weight.
- **Shape**: Sharp corners (0 radius) throughout, maintaining editorial flatness.
- **Spacing**: 1.5rem internal padding on text blocks; images bleed to card edges.
- **Composition**: Cards appear in staggered grid with varying image heights and text block positions.

### Promotional Panel

Large color-block call-to-action sections that divide the viewport.

- **Anatomy**: Solid color background with heading, descriptive paragraph, and uppercase text link.
- **Surface**: Coral or amber background with black or white text depending on contrast.
- **Typography**: Heading uses body-semibold at larger scale; body text uses standard body token; link uses label token.
- **Shape**: Full-bleed rectangles with no radius.
- **Spacing**: Generous internal padding, approximately 6rem vertical.
- **Composition**: Two panels appear side by side at equal width, splitting the viewport horizontally.

### Footer

Multi-band navigation and information footer.

- **Anatomy**: Navigation columns, partner logos, social buttons, legal links, and attribution line.
- **Surface**: White background with thin horizontal rules separating bands.
- **Typography**: Navigation links use navigation token; legal text uses caption token.
- **Shape**: Social buttons are perfect circles (pill radius) with amber fill and black icons.
- **Spacing**: 2rem between navigation columns; 1.5rem vertical padding within bands.
- **Composition**: Left-aligned navigation clusters, right-aligned logos and social buttons, centered legal text in bottom band.

### Section Header with Watermark

Decorative page divisions combining functional headings with oversized background type.

- **Anatomy**: Small functional heading in sans-serif, enormous italic serif watermark behind or beside it.
- **Surface**: White or light neutral background; watermark in rose tone at reduced opacity.
- **Typography**: Functional heading uses body-semibold; watermark uses hero-display token.
- **Composition**: Watermark often cropped by viewport edge, creating continuous scroll effect.

## Responsive behavior

The design's asymmetric layouts and large display type will require careful adaptation at smaller viewports. The two-column promotional panels should stack vertically on narrow screens, with full-width color blocks maintaining their impact. The staggered author grid should collapse to a single column with consistent card sizing to preserve readability.

The enormous italic watermarks may need scaling reduction or selective hiding on mobile to prevent horizontal overflow and maintain performance. Navigation should collapse to a hamburger menu or simplified list, as the current footer-style exposed links would consume excessive vertical space.

Touch targets for social buttons and filter controls should maintain minimum 44px dimensions. The edition filter dropdown visible on the author grid page should become a full-width native select or bottom sheet on mobile for usability.

## Practical implementation guidance

### Preserve
- The stark contrast between expressive italic display and geometric sans-serif body text
- Full-bleed color panels with no border radius or shadow
- Staggered, asymmetric grid arrangements for author and content cards
- Documentary, environmental photography style with natural lighting
- Generous section spacing that lets content breathe

### Avoid
- Adding border radius or shadows to cards and panels—the flatness is intentional
- Centering all content; the offset, asymmetric compositions are core to the identity
- Using the display serif for body text or small sizes; it functions only at large scale
- Saturating the palette beyond the defined coral, amber, and rose accents

### Recommended Build Order
1. Establish the typographic foundation with Gt Alpina-Condensed Light Italic and Outfit at display and body scales
2. Implement the neutral surface system (white, warm, cool) for page backgrounds
3. Build the author card component with sharp corners and staggered grid logic
4. Add the coral and amber promotional panels as full-bleed sections
5. Implement footer with partner logos and circular social buttons
6. Layer in decorative watermark typography as absolutely-positioned background elements

### Accessibility
- Ensure coral and amber panels meet WCAG contrast requirements; the amber in particular may need dark text rather than white for sufficient contrast
- Provide text alternatives for all author portraits and cultural object photography
- Make the edition filter dropdown keyboard-navigable with clear focus indicators
- Consider reducing motion for the watermark typography layer for users with vestibular sensitivities
- Maintain logical tab order through the staggered grid despite visual asymmetry

## Scope note

This guide covers the author directory, individual author profiles, and homepage promotional sections visible in the supplied images. Program schedule pages, event detail templates, mobile navigation patterns, and checkout or ticketing flows are not represented. Measurements are practical adaptation targets derived from visual inspection of desktop layouts.
