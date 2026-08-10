# How hash.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/hash.dev-design)

Last updated: 2026-08-10

## Captured pages

[![Community section with three outlined action buttons and multi-column footer with HASH.dev branding and resource links](https://pin.fontofweb.com/3927?format=jpg)](https://design.withfudge.com/share/pin-3927)

[Community section with three outlined action buttons and multi-column footer with HASH.dev branding and resource links](https://design.withfudge.com/share/pin-3927)

[![Newsletter signup with rounded input and teal button above blog post grid with featured article cards](https://pin.fontofweb.com/3926?format=jpg)](https://design.withfudge.com/share/pin-3926)

[Newsletter signup with rounded input and teal button above blog post grid with featured article cards](https://design.withfudge.com/share/pin-3926)

[![Product illustration showing block-based interface with light blue wireframe components and annotation labels](https://pin.fontofweb.com/3925?format=jpg)](https://design.withfudge.com/share/pin-3925)

[Product illustration showing block-based interface with light blue wireframe components and annotation labels](https://design.withfudge.com/share/pin-3925)

[![Block Protocol diagram with purple-outlined cards, table structure, and descriptive annotation text](https://pin.fontofweb.com/3924?format=jpg)](https://design.withfudge.com/share/pin-3924)

[Block Protocol diagram with purple-outlined cards, table structure, and descriptive annotation text](https://design.withfudge.com/share/pin-3924)

## Overview

HASH.dev presents a developer-facing brand identity built on clarity, openness, and systematic thinking. The visual language balances generous whitespace with precise geometric structure, using a restrained palette of near-black ink, clean white canvas, and a distinctive teal action color that appears in buttons, links, and product annotations. The overall impression is of a technical platform that values readability and approachable expertise over visual noise.

The system employs two type families in complementary roles: Open Sauce Two carries display and heading voice with its slightly geometric, modernist character, while Inter handles body text, labels, and navigation with neutral legibility. Product illustrations and diagrams use light wireframe styling with selective color coding—teal for HASH-specific features, purple for Block Protocol concepts, blue for data-flow elements—creating a consistent visual grammar across explanatory graphics.

Layout patterns favor centered single-column compositions for messaging and calls-to-action, transitioning to asymmetric grids for content discovery such as blog posts. The footer anchors pages with a multi-column link structure against a subtle cool-gray surface. Rounded corners appear consistently on interactive elements, with full pill shapes for primary buttons and inputs, while cards and panels use modest rounding that maintains a crisp technical feel.

## Colors

The color system is intentionally minimal, deriving its character from a near-black ink against white canvas, with teal as the singular vibrant accent. Supporting surfaces use a very light cool gray that reads as white in most contexts but provides subtle separation for footer and section backgrounds.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headings, strong emphasis |
| canvas | #FFFFFF | Page background, card surfaces, input backgrounds |
| surface | #F6F9FC | Footer background, section alternation, subtle containment |
| action | #0FA7DB | Primary buttons, links, active states, annotation highlights |
| action-muted | #E8F4F8 | Button hover backgrounds, light teal tints, icon fills |
| accent-purple | #7B61FF | Block Protocol diagram elements, secondary feature highlights |
| accent-blue | #4A9EFF | Data-flow illustrations, tertiary diagram accents |
| muted-ink | #5A6B7B | Secondary text, descriptions, footer body copy |
| hairline | #D1D5DB | Borders, dividers, input outlines, card edges |

The interface operates in a light mode exclusively across visible surfaces. The teal action color carries the full interactive burden—appearing in the "Get Updated" button, inline links, author names, and product annotation labels. Purple and blue serve illustrative rather than interactive roles, appearing in the Block Protocol and data-structure diagrams where they help distinguish conceptual layers. The near-black ink provides maximum contrast for reading, while muted-ink softens supporting text without drifting into generic gray. The surface token creates barely-there section separation that keeps long pages from feeling monotonous.

## Typography

The type system pairs a display-oriented geometric sans with a highly legible body family. Open Sauce Two, designed by Alfredo Marco Pradil and provided by Creative Sauce Fz Llc, handles all display and heading settings with confident spacing and modern proportions. Inter, designed by Rasmus Andersson and provided by Rsms, manages everything from body paragraphs to navigation labels with neutral clarity.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Open Sauce Two | 3rem | 400 | 1.1 | -0.02em | Page headlines, major section titles |
| section-display | Open Sauce Two | 2rem | 400 | 1.2 | -0.01em | Subsection headings, card titles |
| body-large | Inter | 1.25rem | 400 | 1.5 | 0em | Introductory paragraphs, newsletter description |
| body | Inter | 1rem | 400 | 1.6 | 0em | Standard paragraphs, footer descriptions |
| label | Inter | 0.75rem | 500 | 1.4 | 0.05em | Author names, category tags, uppercase labels |
| navigation | Inter | 0.875rem | 400 | 1.5 | 0em | Menu items, button text, footer links |

Open Sauce Two appears at 400 weight for all display settings, relying on size and tight tracking rather than boldness for hierarchy. Inter uses 400 Regular for body and navigation, with 500 Medium reserved for small labels that need slight emphasis. The hero-display setting at 3rem with negative tracking suits the centered "Be the first to know..." headline, while section-display at 2rem handles "Recent blog posts" and similar section anchors. Label typography uses uppercase transformation in application, as visible in author names like "CIARAN MORINAN" and "TIM DIEKMANN."

Verify licensing for these families before production use. Open Sauce Two and Inter are both available from their respective designers with established licensing paths.

## Layout

The page architecture follows a centered single-column model for hero and call-to-action sections, expanding to wider asymmetric grids for content browsing. Maximum content width appears to sit around 75rem, with internal padding creating breathable margins on either side.

Section spacing uses 5rem as the standard vertical rhythm between major content blocks. The newsletter section demonstrates this clearly: generous top and bottom padding isolates the signup form from adjacent content. Within sections, content-gap at 1.5rem separates related elements like the headline-description pair or the input-button combination.

The blog post grid in the "Recent blog posts" section shows an asymmetric layout with one featured article spanning wider space, accompanied by two standard cards below and a third positioned to the right. This creates visual interest without abandoning the underlying grid. Cards maintain consistent internal spacing with approximately 1.5rem padding between image, label, title, and description elements.

The footer employs a four-column grid on wider viewports: brand and description occupy the first column, with "Resources," "Projects," and "Get Involved" link lists distributed across the remaining columns. A bottom row holds legal links right-aligned beneath the rightmost columns. The footer background extends full-bleed while content respects the central max-width container.

Horizontal rules appear as 1px hairlines in the muted border color, separating the footer link columns from bottom legal text and potentially dividing content sections elsewhere.

## Visual language

Product illustrations on HASH.dev adopt a distinctive wireframe aesthetic: light gray structural outlines with selective color fills for emphasis. The block-based interface diagram shows this clearly—pale blue rectangles represent data fields, with a brighter blue indicating active or primary elements, while annotation text in teal connects labels to components with thin leader lines.

The Block Protocol diagram shifts to purple outlines for its card containers, with a lighter purple fill for the table cell highlight. This color coding creates instant visual association: teal means HASH, purple means Block Protocol, blue means data structures. The illustrations avoid heavy shadows or dimensional effects, relying on flat geometry and subtle color differentiation.

Photography appears in blog post cards with rounded corners, treated naturally without heavy filters. The images provide warm contrast to the cool systematic palette elsewhere—an iridescent palette illustration, an architectural interior scene—suggesting human creativity within technical infrastructure.

Iconography in buttons and links uses simple line-style marks: a speech bubble for issues, the GitHub mark for starring, an envelope for contact. These appear at small scale beside text, maintaining the clean functional aesthetic. External link indicators use a small diagonal arrow, consistently applied.

## Components

### Newsletter signup

Anatomy: Centered headline, descriptive paragraph, inline input and button row.

Surface: Headline and description use ink on canvas background. Input field uses white background with hairline border. Button uses action background with white text.

Typography: Headline uses hero-display, description uses body-large, input placeholder uses body at muted-ink color, button uses label.

Shape: Input uses full pill rounding (9999px). Button uses matching pill shape. Both elements share similar height for visual alignment.

Spacing: Generous section padding above and below. Tight 0.75rem gap between input and button. Input appears wider than button, roughly 2:1 proportion.

Composition: All elements center-aligned. Input and button sit on a shared horizontal axis.

### Action button (outlined)

Anatomy: Icon left, text right, contained in rounded rectangle with border.

Surface: White background, hairline border, ink text. Icon inherits action color for emphasis—teal speech bubble, teal GitHub mark, teal envelope.

Typography: Navigation token for text weight and size.

Shape: Pill rounding (9999px). Moderate horizontal padding (1.5rem) and vertical padding (0.75rem).

Spacing: Buttons arrange horizontally with 1rem gap between instances.

Variants: Three visible instances differ only in icon and label: "Browse open issues," "Star us on GitHub," "Get in touch."

### Blog post card

Anatomy: Image thumbnail, author label, title, description. Featured variant spans wider with larger image.

Surface: White card background. Image fills top portion with rounded top corners. Text sits below with standard padding.

Typography: Author uses label token in action color, uppercase. Title uses section-display in ink. Description uses body in muted-ink.

Shape: Card uses panel rounding (0.5rem). Image shares top rounding, square bottom edge.

Spacing: Approximately 1rem between image and text block. Tight spacing between label, title, and description within text block.

Composition: Standard cards arrange in two-column grid. Featured card breaks grid with larger presence.

### Footer

Anatomy: Brand mark and tagline, four link columns, social icons, legal links.

Surface: Surface background color. Ink for headings, muted-ink for body and links. Action color for ".dev" in logo.

Typography: Logo uses section-display weight. Tagline uses body. Column headings use label token, uppercase. Links use navigation token.

Shape: No border radius on footer container. Social icons use simple circular or square hit areas.

Spacing: Generous internal padding. Columns distribute with approximately equal width. Legal links right-aligned with small gap between "LEGAL" and "PRIVACY."

Composition: Four-column grid above, single row below for legal. Social icons sit below tagline in first column.

## Responsive behavior

The visible desktop layout suggests a system that should adapt gracefully to narrower viewports. The centered single-column sections—newsletter, community call-to-action—will compress naturally with maintained centering and reduced side padding. The blog grid should transition from asymmetric multi-column to stacked single-column, with the featured card collapsing to standard proportions.

The footer four-column grid should stack to two columns on tablet widths, then single column on mobile with accordion-style expansion or simple vertical stacking. Navigation items in the footer remain tappable at small sizes due to their generous line height.

The pill-shaped input-button pair in the newsletter section should stack vertically on narrow screens, with the button expanding to full width below the input. Touch targets should maintain minimum 44px height, which the current generous padding already supports.

Product illustrations with annotation labels may need simplified layouts at small sizes, potentially hiding leader lines and placing labels directly adjacent to referenced elements.

## Practical implementation guidance

### Preserve
- The teal action color as the singular interactive accent; do not introduce additional button colors.
- The two-family type hierarchy: Open Sauce Two for display, Inter for everything else.
- Generous whitespace around sections; the airy quality is central to the brand.
- Pill shapes for all primary interactive elements.
- The wireframe illustration style with selective color coding by concept area.

### Avoid
- Dark mode implementations without explicit design exploration; the current system is built for light surfaces.
- Heavy shadows or dimensional effects; the flat, clean aesthetic depends on absence of elevation.
- Additional accent colors beyond teal, purple, and blue; the restrained palette is intentional.
- Tight letter spacing on body text; Inter reads best at default or slightly loose tracking.
- Borders heavier than 1px; the hairline weight maintains delicacy.

### Recommended build order
1. Establish the type scale with both families loaded and baseline grid set to 0.25rem increments.
2. Implement the color tokens, verifying teal accessibility against white.
3. Build the newsletter section as the primary component exercise—it exercises hero-display, body-large, input, and button together.
4. Create the footer layout to establish grid behavior and link typography.
5. Add blog cards with image handling and asymmetric grid logic.
6. Implement product illustrations last, as they require custom SVG or canvas work.

### Accessibility
- Ensure teal action color meets WCAG 2.1 AA contrast against white for text; the button text may need adjustment if the teal is too light.
- Maintain visible focus indicators on pill buttons and inputs; the hairline border can intensify on focus.
- Provide alt text for all product illustrations describing the depicted structure and annotation relationships.
- Use semantic heading hierarchy: single h1 per page, followed by h2 for sections, h3 for card titles.

## Scope note

This guide covers the HASH.dev homepage including the newsletter section, blog post grid, community call-to-action, and footer. Product illustrations and diagram components are described from visible static states only. Measurements are practical adaptation targets. Mobile breakpoints, hover states, form validation, and interior page layouts are not represented in the supplied material and require additional design exploration.
