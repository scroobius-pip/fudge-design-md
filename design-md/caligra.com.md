# How caligra.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/caligra.com-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with 'Build with Us' heading, email subscription form, and company details on white background](https://pin.fontofweb.com/5423?format=jpg)](https://design.withfudge.com/share/pin-5423)

[Footer section with 'Build with Us' heading, email subscription form, and company details on white background](https://design.withfudge.com/share/pin-5423)

[![Dark hero section with 'Computers for experts' display type and manifesto text in light gray on charcoal](https://pin.fontofweb.com/5422?format=jpg)](https://design.withfudge.com/share/pin-5422)

[Dark hero section with 'Computers for experts' display type and manifesto text in light gray on charcoal](https://design.withfudge.com/share/pin-5422)

[![Split layout with 'Made for Making' heading, body copy, and technical software screenshots on warm gray band](https://pin.fontofweb.com/5421?format=jpg)](https://design.withfudge.com/share/pin-5421)

[Split layout with 'Made for Making' heading, body copy, and technical software screenshots on warm gray band](https://design.withfudge.com/share/pin-5421)

[![Product specification table and c100 Developer Terminal pricing card with rust-colored reserve button](https://pin.fontofweb.com/5420?format=jpg)](https://design.withfudge.com/share/pin-5420)

[Product specification table and c100 Developer Terminal pricing card with rust-colored reserve button](https://design.withfudge.com/share/pin-5420)

## Overview

Caligra presents itself as a computer company for technical professionals, and its visual system reinforces that positioning through restraint and contrast. The design alternates between stark white spaces and deep charcoal grounds, using a warm off-white as a transitional surface for product information. Classical serif letterforms in large display sizes establish an editorial, almost literary tone, while a clean sans-serif handles all functional text. The overall impression is of a company that values craft over flash—substantial margins, deliberate pacing, and a single warm rust accent that appears only at moments of action. The system is built on a 4-pixel relative unit, with spacing and type sizes deriving from that grid. No gradients, no shadows, no decorative borders beyond the functional hairlines that separate information.

## Colors

The palette is intentionally narrow: three neutrals and one accent. The charcoal serves as both dark-mode ground and light-mode text. The warm off-white appears as a band behind product specifications and screenshots, preventing the page from feeling sterile. The rust accent is reserved for the primary reserve button, giving it material presence against the muted surroundings.

| token | value | use |
|---|---|---|
| ink | #2D2D2D | Primary text on light grounds; dark section backgrounds; button fills; table borders |
| canvas | #FFFFFF | Page background; input fields; text on dark grounds |
| surface-warm | #E8E6E1 | Product specification bands; pricing card background; screenshot presentation area |
| accent-rust | #B85C2E | Primary reserve/deposit button; sole warm accent in interface |
| muted-ink | #6B6B6B | Footer company details; secondary legal copy; placeholder text |

The dark hero section inverts the relationship: ink becomes the ground, canvas becomes the text. This is the only place where the palette fully inverts. The warm surface appears only in the lower product sections, creating a visual descent from manifesto to specification. No photographic tints or derived palette colors appear in the interface itself.

## Typography

Two families carry the entire system. Signifier, a classical serif designed by Kris Sowersby at Klim Type Foundry, handles all display and editorial headings. Its sharp serifs and refined contrast give the company voice a literary, considered quality. Söhne-Buch, also from Klim, provides the sans-serif body and functional text—neutral, warm, and highly legible at small sizes.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Signifier | 4rem | 400 | 1 | -0.02em | Main page headings: "Build with Us", "Made for Making" |
| section-display | Signifier | 3rem | 400 | 1.1 | -0.01em | Dark hero heading: "Computers for experts" |
| body | Söhne-Buch | 1.25rem | 400 | 1.5 | 0 | Manifesto paragraphs; product description blocks |
| body-small | Söhne-Buch | 1rem | 400 | 1.5 | 0 | Specification table content; pricing details; legal copy |
| label | Söhne-Buch | 0.875rem | 400 | 1.4 | 0.01em | Button labels; form helper text; announcement bar |
| navigation | Söhne-Buch | 1rem | 400 | 1 | 0 | Footer links; inline policy references |

Signifier appears only in two sizes: the larger for light-ground headings, the slightly smaller for the dark hero where optical compensation prevents the weight from feeling oversized. Söhne-Buch carries everything else at three functional sizes. The body size is generous, reflecting the editorial nature of the manifesto sections. Label size is tight and purposeful, keeping buttons and form elements compact.

Verify licensing for these families before production use. Both Signifier and Söhne-Buch are available from Klim Type Foundry.

## Layout

The page follows a strict two-column logic that shifts weight depending on content type. Editorial sections place large serif headings in the left column with supporting body text in the right, maintaining roughly equal width. Product sections invert this: descriptive text occupies the left while screenshots or specification tables fill the right. The overall width is contained, with substantial external margins that breathe on large viewports.

Vertical rhythm is established through section spacing of 6rem, with content gaps of 2rem between related elements. The warm surface band breaks this rhythm, extending full-bleed horizontally while maintaining internal padding of 2rem. The announcement bar at the top is a full-width strip of 0.75rem vertical padding, centered text, with no border or shadow.

The footer collapses to a single column on the left for company details, leaving the majority of the width open. A horizontal hairline separates the main content from the footer, drawn at 1px in the ink color.

Grid behavior: the two-column layout appears to use a flexible proportion rather than fixed columns, allowing the serif headings to set their own measure while the sans-serif body maintains a comfortable line length of approximately 60 characters.

## Visual language

The aesthetic is editorial and material. Large type dominates, set with negative tracking that tightens word spaces without feeling compressed. The single rust button is the only saturated color in the interface; everything else reads as tone-on-tone. Screenshots of technical software appear unframed, presented directly on the warm surface without device chrome or shadow.

Hairline borders at 1px define tables, cards, and input fields. No border-radius appears on major containers; only buttons and inputs receive the minimal 0.25rem rounding. The announcement bar is flat, the hero is flat, the pricing card is flat. Depth is suggested only through color temperature: the warm surface advances slightly against the cool white and charcoal.

The "made for making +−×" mark in the footer operates as a quiet signature, using mathematical operators as a nod to the technical audience. This is not a logo treatment but a textual gesture, set in the sans-serif at body-small size.

## Components

### Announcement bar
- **Anatomy**: Full-width strip, single line of text, arrow indicator
- **Surface**: Solid ink background, canvas text
- **Typography**: `{typography.label}`, centered
- **Spacing**: 0.75rem vertical padding
- **Composition**: Text and arrow inline, no additional structure

### Primary action button
- **Anatomy**: Text label centered within rectangular button
- **Surface**: Solid accent-rust background, canvas text
- **Typography**: `{typography.label}`
- **Shape**: 0.25rem border radius
- **Spacing**: 0.75rem vertical padding, 2rem horizontal padding
- **Variants**: The reserve button shows this treatment; the subscribe button uses ink background instead

### Secondary action button
- **Anatomy**: Text label centered within rectangular button
- **Surface**: Solid ink background, canvas text
- **Typography**: `{typography.label}`
- **Shape**: 0.25rem border radius
- **Spacing**: 0.75rem vertical padding, 2rem horizontal padding

### Text input
- **Anatomy**: Single-line field with placeholder text
- **Surface**: Canvas background, 1px ink border
- **Typography**: `{typography.body-small}` for placeholder
- **Shape**: 0.25rem border radius
- **Spacing**: 0.75rem vertical padding, 1rem horizontal padding

### Specification table
- **Anatomy**: Two-column grid of label-value pairs, full border treatment
- **Surface**: Warm surface background, 1px ink borders between cells
- **Typography**: `{typography.body-small}` for all content
- **Spacing**: Generous cell padding, approximately 1.5rem vertical
- **Composition**: Left column contains hardware attributes, right column contains specifications; no header row

### Pricing card
- **Anatomy**: Contained card with product name, horizontal rule, price block, shipping details, terms link, and action button
- **Surface**: Warm surface background, 1px ink border, no shadow
- **Typography**: Product name in `{typography.body-small}`, price in `{typography.section-display}` with "USD" label in `{typography.label}`, details in `{typography.body-small}`
- **Shape**: 0.25rem border radius
- **Spacing**: 2rem internal padding
- **Composition**: Centered alignment for all elements; horizontal rules separate name from price and price from details

### Footer
- **Anatomy**: Company wordmark, address block, legal links, trademark notice, and signature mark
- **Surface**: Canvas background, separated by 1px ink hairline
- **Typography**: Wordmark in `{typography.section-display}` at muted-ink color; details in `{typography.body-small}` at muted-ink; links underlined
- **Spacing**: 6rem top padding below hairline, generous internal spacing between address and links
- **Composition**: Three-column intention with company details left, legal center, signature right; collapses visually to left-aligned stack

## Responsive behavior

The two-column editorial layout should stack to single column on narrow viewports, with display headings maintaining size but gaining line breaks. The specification table should remain two-column if possible, but may collapse to stacked label-value pairs below approximately 640px. The pricing card should maintain its contained proportions, centered within the viewport width.

The dark hero section's large display type may require size reduction on small screens to prevent excessive line breaks; a reduction to 2.5rem maintains presence without overflow. The warm surface band should remain full-bleed at all widths, with internal padding reducing to 1.5rem on narrow viewports.

Touch targets for buttons and inputs should maintain minimum 44px height; the current design exceeds this. No hover states are documented from the still images; implement visible focus states for keyboard navigation using the ink color at 2px outline offset.

## Practical implementation guidance

### Preserve
- The stark contrast between Signifier display and Söhne-Buch body; this pairing is the core of the brand voice
- The single rust accent, used only for the primary reserve action
- Full-bleed warm surface bands behind product content
- 1px hairline borders with no additional depth effects
- Generous external margins and internal spacing; the page breathes

### Avoid
- Additional accent colors; the system depends on restraint
- Border-radius on major containers; keep it minimal and functional
- Shadows, gradients, or glassmorphism effects
- Compressed or tight line heights in body text; the 1.5 ratio is essential for readability
- Generic sans-serif fallbacks that lack Söhne-Buch's warmth

### Recommended build order
1. Establish the 4px relative unit and set base font size to 16px
2. Implement the color tokens, testing both light and dark ground combinations
3. Load Signifier and Söhne-Buch with appropriate font-display strategy
4. Build the type scale, verifying that display sizes work at viewport extremes
5. Construct the two-column grid system with flexible proportions
6. Implement the announcement bar as the topmost layer
7. Build the dark hero section with full inversion
8. Create the specification table and pricing card on the warm surface band
9. Implement the footer with hairline separation and three-column layout
10. Add the subscription form with input and button pair

### Accessibility
- Ensure the rust accent on the reserve button meets contrast requirements against white text; the current combination appears sufficient but should be verified
- The dark hero section with canvas text on ink background provides strong contrast; maintain this exact pairing
- Underline inline links in body text and footer; do not rely on color alone
- Provide visible focus indicators for all interactive elements, using ink at 2px offset
- The manifesto text in the hero uses a generous size; ensure line length does not exceed 80 characters when the layout is fluid

## Scope note

This guide covers the landing page surface for Caligra's c100 Developer Terminal announcement, including the hero manifesto, product specification, pricing, subscription, and footer sections. Mobile breakpoints, animation, form validation states, and checkout flow are not represented in the supplied material. Measurements are practical adaptation targets derived from visible proportions.
