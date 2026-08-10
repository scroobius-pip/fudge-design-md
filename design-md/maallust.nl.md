# How maallust.nl is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/maallust.nl-design)

Last updated: 2026-08-10

## Captured pages

[![Contact page staff cards with black headers, sepia brewery photography, and gold contact links on warm cream background](https://pin.fontofweb.com/2036?format=jpg)](https://design.withfudge.com/share/pin-2036)

[Contact page staff cards with black headers, sepia brewery photography, and gold contact links on warm cream background](https://design.withfudge.com/share/pin-2036)

[![Contact page header with Maallust logo, navigation bar, form fields, and three black-topped info cards with gold links](https://pin.fontofweb.com/2035?format=jpg)](https://design.withfudge.com/share/pin-2035)

[Contact page header with Maallust logo, navigation bar, form fields, and three black-topped info cards with gold links](https://design.withfudge.com/share/pin-2035)

[![Footer section with dark charcoal background, newsletter signup, multi-column link groups, and social icons](https://pin.fontofweb.com/2034?format=jpg)](https://design.withfudge.com/share/pin-2034)

[Footer section with dark charcoal background, newsletter signup, multi-column link groups, and social icons](https://design.withfudge.com/share/pin-2034)

[![Homepage split-layout heritage section with sepia photography, cream text areas, and outlined dark buttons](https://pin.fontofweb.com/2033?format=jpg)](https://design.withfudge.com/share/pin-2033)

[Homepage split-layout heritage section with sepia photography, cream text areas, and outlined dark buttons](https://design.withfudge.com/share/pin-2033)

## Overview

Maallust is a Dutch craft brewery website rooted in historical storytelling. The visual system pairs industrial heritage with warm hospitality through a distinctive palette of cream backgrounds, charcoal surfaces, and gold accents. Photography receives a consistent sepia treatment that unifies modern brewery scenes with archival imagery, reinforcing the brand's claim of brewing on historical grounds since 2011. The typography employs a single bold display family for all text, creating a strong, uniform voice across navigation, headings, labels, and body copy. Layouts favor split-screen compositions that alternate photographic and text panels, while card-based components organize contact information and team details with black headers that anchor the cream content areas. The overall impression is of a confident, established brewery that values tradition without appearing dated.

## Colors

The color system derives from the brewery's physical environment—copper kettles, aged wood, and dark brewing equipment—translated into a restrained digital palette.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, card headers, button outlines, navigation bar background |
| charcoal | #212121 | Footer background, dark sections, newsletter area |
| cream | #F5E6D3 | Primary page background, card content areas, text panels |
| warm-white | #FDF6ED | Header text on dark backgrounds, inverted text, card header text |
| gold | #C8941F | Contact links, phone numbers, email addresses, footer links, accent text |
| action-blue | #2563EB | Primary buttons, form submit actions, newsletter signup button |

The cream background dominates the light experience, providing warmth that distinguishes the site from cooler neutral approaches. Black serves as the strong structural color for navigation, card headers, and button outlines rather than pure functional darkness. Gold appears exclusively for interactive contact information, creating a consistent "reach out" signal across phone numbers, emails, and route links. The charcoal footer introduces a deliberate mode shift that contains the newsletter signup and site links in a contained, grounded space. Action blue provides the single cool accent for primary conversion moments, contrasting effectively against both cream and charcoal.

## Typography

The site employs Maallust Pro as its sole type family for all visible text, a bold industrial display face with squared proportions and mechanical detailing that evokes brewery equipment and historical signage. The design facts also identify Cl 3 Iskicons and Modules as loaded font families; these serve as icon fonts and are not part of the typographic voice. All text content uses Maallust Pro, creating an unusually unified voice where navigation, headings, body copy, and labels share the same structural DNA.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Maallust Pro | 3rem | 700 | 1 | 0.05em | Page titles, major section headings |
| section-display | Maallust Pro | 2rem | 700 | 1.1 | 0.04em | Card headers, section subheadings, staff names |
| body | Maallust Pro | 1rem | 400 | 1.6 | 0 | Paragraph text, descriptions, form labels |
| label | Maallust Pro | 0.875rem | 700 | 1.2 | 0.06em | Navigation, buttons, roles, contact details, uppercase treatments |
| navigation | Maallust Pro | 0.875rem | 700 | 1 | 0.08em | Main menu items, uppercase with wide tracking |

The type scale is built on a 4px relative unit, with sizes at 12px (0.75rem), 14px (0.875rem), 16px (1rem), 32px (2rem), and 48px (3rem). All sizes are whole-number multiples of the base unit. The bold weight dominates, with Regular reserved for body paragraphs to maintain readability at smaller sizes. Letter spacing is intentionally generous for navigation and labels, reinforcing the industrial signage aesthetic. Uppercase treatment is standard for headings, navigation, and buttons.

Verify licensing for Maallust Pro, Cl 3 Iskicons, and Modules before production use.

## Layout

The layout system centers on full-width sections with contained content, alternating between cream and charcoal backgrounds to create rhythmic contrast. The maximum content width appears at approximately 1200px, centered with generous horizontal padding.

Split-screen compositions are fundamental to the homepage experience. These divide the viewport into two equal panels, one carrying sepia photography and the other carrying text content on cream. The text panels employ centered alignment for headings and body copy, with buttons placed below. This creates a deliberate, contemplative reading pace that matches the storytelling content.

The contact page demonstrates a different pattern: a centered form at the top, followed by a three-column grid of information cards below. The form uses a two-column layout for name fields and contact details, with a full-width message area beneath. Cards in grids maintain equal heights through their header-content structure, with black headers establishing consistent top edges.

Vertical spacing between major sections measures approximately 5rem (80px), with component internal padding at 2rem (32px). The footer breaks from the cream rhythm with a full-width charcoal band containing a two-column newsletter signup above and a five-column link grid below.

## Visual language

Photography receives a consistent sepia treatment that unifies diverse subjects—brewery equipment, staff portraits, historical archives, and ingredient photography—into a single warm, aged aesthetic. This treatment desaturates images while adding brown warmth, connecting modern operations to the 2011 founding date and the prison-village heritage of Veenhuizen.

The visual hierarchy relies on scale contrast between the bold display type and the generous whitespace of cream backgrounds. Black headers on cards create strong horizontal bands that organize content and provide resting points for the eye. Gold links introduce warmth and interactivity without competing with the primary black-cream contrast.

Iconography is minimal and functional. Social media icons appear in the footer as simple colored squares (Facebook blue, Instagram gradient). The brewery logo combines wordmark with decorative arrow elements, centered in the navigation bar. No decorative patterns or textures overlay the clean surfaces; the photography itself provides all visual richness.

The overall mood balances industrial confidence with approachable warmth. The squared, mechanical typography prevents the cream and sepia from feeling nostalgic or soft, while the warm tones prevent the bold type from feeling cold or corporate.

## Components

### Navigation bar

- **Anatomy**: Centered logo with decorative arrow flanking text, full-width horizontal menu below
- **Surface**: Black background (#000000), cream text
- **Typography**: `{typography.navigation}` uppercase with wide tracking
- **Spacing**: Approximately 1.5rem vertical padding, menu items spaced evenly
- **Composition**: Logo centered above menu, menu items in single horizontal row

### Staff card

- **Anatomy**: Black header band with role label, sepia photograph, name, title, gold contact details
- **Surface**: Cream card body, black header, sepia image
- **Typography**: Header uses `{typography.label}` uppercase; name uses `{typography.section-display}`; role uses `{typography.label}`; contact uses `{typography.label}` in gold
- **Shape**: Slight border radius on card corners
- **Spacing**: Header padding approximately 1rem, body content centered with 1.5rem padding
- **Composition**: Vertical stack with image between header and text content

### Information card

- **Anatomy**: Black header with category label, cream body with centered text and gold links
- **Surface**: Black header, cream body
- **Typography**: Header uses `{typography.section-display}`; body uses `{typography.body}`; links use `{typography.label}` in gold
- **Shape**: Matching slight border radius
- **Spacing**: Consistent with staff card proportions
- **Composition**: Centered text alignment in body, header text centered

### Contact form

- **Anatomy**: Section heading, two-column name fields, two-column contact fields, full-width message area, submit button
- **Surface**: Cream page background, white input fields with thin borders
- **Typography**: Labels use `{typography.label}` uppercase; button uses `{typography.label}`
- **Shape**: Sharp-cornered inputs, slight radius on button
- **Spacing**: 2rem gap between field rows, generous vertical spacing before button
- **Composition**: Left-aligned section heading, form fields below

### Outlined button

- **Anatomy**: Text label within rectangular border
- **Surface**: Transparent background, black border, black text
- **Typography**: `{typography.label}` uppercase
- **Shape**: Zero border radius, 2px solid border
- **Spacing**: Padding approximately 0.75rem vertical, 1.5rem horizontal
- **Variants**: Appears in text panels adjacent to photography

### Primary button

- **Anatomy**: Text label on solid background
- **Surface**: Action blue background, white text
- **Typography**: `{typography.label}`
- **Shape**: Slight border radius
- **Spacing**: Similar padding to outlined button
- **Use**: Form submission, newsletter signup

### Footer

- **Anatomy**: Two-column newsletter section, five-column link grid, centered logo, legal line
- **Surface**: Charcoal background throughout
- **Typography**: Headings use `{typography.section-display}` in warm-white; body uses `{typography.body}`; links use `{typography.label}` in gold; legal uses smaller size in muted gray
- **Spacing**: Generous vertical padding, column gaps approximately 2rem
- **Composition**: Newsletter signup left with heading and text, right with email input and button; link columns below with category headings

## Responsive behavior

The split-screen homepage sections should stack vertically on narrower viewports, with photography above text content to maintain visual priority. The contact form's two-column fields should collapse to single-column at medium breakpoints to prevent cramped input widths. The three-column information card grid should similarly reduce to single column on mobile, maintaining full-width cards with comfortable touch targets.

Navigation should convert to a mobile menu pattern below tablet width, as the full horizontal menu will overflow. The footer link grid should reorganize from five columns to two or three columns on tablet, then single column on mobile, with the newsletter section stacking its two columns vertically.

Typography should scale down proportionally: hero-display reducing to 2rem on mobile, section-display to 1.5rem. Body text remains at 1rem for readability. Touch targets for buttons and links should maintain minimum 44px height.

## Practical implementation guidance

### Preserve
- The unified Maallust Pro type family across all text elements; mixing in secondary faces would break the industrial character
- Sepia photography treatment as a defining brand element
- Black header bands on cards as the primary content organization device
- Gold exclusively for contact information and interactive links
- The cream-to-charcoal section rhythm that creates visual breathing room

### Avoid
- Introducing additional accent colors beyond the established gold and action blue
- Rounding corners on outlined buttons; the sharp rectangle is intentional
- Using the bold weight for long body paragraphs; Regular maintains readability
- Placing text directly on sepia photography without sufficient contrast treatment
- Creating card variants without the black header; the consistency is structural to the system

### Recommended build order
1. Establish the cream background and black text defaults with Maallust Pro loaded
2. Build the navigation bar with centered logo and horizontal menu
3. Create the split-screen section component for homepage use
4. Implement card components with black headers and cream bodies
5. Add form patterns with white inputs on cream
6. Build the charcoal footer with newsletter and link grid
7. Apply sepia treatment to all photography

### Accessibility
- Ensure gold links on cream backgrounds meet minimum contrast ratios; the current gold may need darkening for small text
- Provide visible focus states for all interactive elements, particularly the sharp-cornered buttons
- Maintain semantic heading hierarchy despite the uniform type family; visual weight should match document structure
- Add alt text to sepia photographs that describes content, not merely "sepia photo"
- Consider increasing action-blue button contrast against charcoal footer backgrounds

## Scope note

This guide covers the homepage and contact page surfaces visible in the supplied images. Interior pages, product catalogs, event listings, and the beer bus booking flow are not represented. Measurements are practical adaptation targets derived from visual inspection. Motion, hover states, loading behavior, and mobile breakpoints are not documented and should be designed to match the established static system. The icon fonts Cl 3 Iskicons and Modules are excluded from typography guidance.
