# How zillow.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/zillow.com-design)

Last updated: 2026-08-10

## Captured pages

[![Zillow footer with category navigation dropdowns, legal links, app store badges, and social media icons on white background](https://pin.fontofweb.com/457?format=jpg)](https://design.withfudge.com/share/pin-457)

[Zillow footer with category navigation dropdowns, legal links, app store badges, and social media icons on white background](https://design.withfudge.com/share/pin-457)

[![Three-column feature cards for Buy, Rent, and Sell with illustrations, bold headings, and blue outline buttons on light gray background](https://pin.fontofweb.com/456?format=jpg)](https://design.withfudge.com/share/pin-456)

[Three-column feature cards for Buy, Rent, and Sell with illustrations, bold headings, and blue outline buttons on light gray background](https://design.withfudge.com/share/pin-456)

[![Single feature card for Buy a home with illustration, bold heading, description text, and blue outline button with rounded corners](https://pin.fontofweb.com/455?format=jpg)](https://design.withfudge.com/share/pin-455)

[Single feature card for Buy a home with illustration, bold heading, description text, and blue outline button with rounded corners](https://design.withfudge.com/share/pin-455)

[![BuyAbility mortgage section with Zillow Home Loans calculator card, blue primary action button, and property listing cards with orange badges](https://pin.fontofweb.com/454?format=jpg)](https://design.withfudge.com/share/pin-454)

[BuyAbility mortgage section with Zillow Home Loans calculator card, blue primary action button, and property listing cards with orange badges](https://design.withfudge.com/share/pin-454)

## Overview

Zillow's design system presents a clean, approachable interface for real estate discovery and financial services. The visual language balances professional trustworthiness with consumer-friendly warmth through a strategic combination of bold typographic hierarchy, restrained color application, and illustration-driven feature communication. The system organizes dense real estate information into scannable, card-based layouts that prioritize property imagery while maintaining clear pathways to action.

The interface operates on a light, neutral foundation with white surfaces and subtle gray backgrounds that allow property photography to remain the visual focal point. Blue serves as the singular action color, creating consistent affordances across search, save, and apply flows. Typography employs a dual-family approach: a heavy geometric sans for headlines and section titles that demands attention, paired with a highly legible humanist sans for body text, navigation, and data display. Component architecture favors rounded rectangles with moderate corner radii, avoiding sharp edges that might feel clinical while maintaining enough structure for information density. The overall impression is of a platform that is simultaneously authoritative and accessible, designed to guide users through high-stakes financial decisions with clarity and confidence.

## Colors

| token | value | use |
|---|---|---|
| action | #006AFF | Primary buttons, links, interactive text, and focus indicators |
| action-hover | #0051D5 | Hover state for primary actions and links |
| ink | #2A2A33 | Primary text, headings, and high-contrast UI elements |
| muted-ink | #6B6B78 | Secondary text, descriptions, placeholders, and disabled states |
| canvas | #F7F7FA | Page backgrounds, section alternation, and card container surfaces |
| surface | #FFFFFF | Cards, modals, dropdowns, and elevated content areas |
| border | #D1D1D5 | Card outlines, dividers, input borders, and subtle separators |
| accent-warm | #E85D04 | Urgency badges, promotional labels, and qualification indicators |
| success | #1E8E3E | Confirmation states, positive financial indicators, and completion markers |

The color system is intentionally restrained, with blue carrying nearly all interactive meaning. The action blue is a vibrant, medium-saturated tone that reads clearly against both white and light gray backgrounds without the heaviness of a navy or the playfulness of a brighter cyan. Text hierarchy is established through ink density rather than color variation: near-black ink for primary content, muted ink for supporting information. The warm accent appears sparingly, reserved for high-attention labels like "Within BuyAbility" qualification badges that must break through the blue-green visual field of property photography. The canvas gray provides necessary breathing room between white card clusters, preventing the interface from feeling like an unbroken expanse of identical surfaces. Dark mode is not represented in the visible interface; all documentation assumes light-mode presentation.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Pp Object Sans | 2.5rem | 800 | 1.1 | -0.02em | Page titles, major section headers, value propositions |
| section-display | Pp Object Sans | 1.5rem | 800 | 1.2 | -0.01em | Card titles, feature headings, module headers |
| body | Inter | 1rem | 400 | 1.5 | 0em | Paragraphs, descriptions, general content |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0em | Card descriptions, secondary explanations, captions |
| label | Inter | 0.875rem | 600 | 1.25 | 0em | Button text, badge text, form labels, emphasized metadata |
| navigation | Inter | 1rem | 500 | 1.25 | 0em | Top-level menu items, dropdown triggers, footer category links |
| legal-copy | Inter | 0.75rem | 400 | 1.5 | 0em | Disclaimers, copyright, regulatory text, fine print |

The typographic system pairs Pp Object Sans Heavy for display purposes with Inter for all functional text. Pp Object Sans delivers bold, geometric presence with tight negative tracking that creates compact, impactful headlines. Its heavy weight and slightly condensed proportions allow multi-word headings to occupy single lines without excessive horizontal space. Inter provides excellent screen readability across weights, with its open apertures and balanced x-height supporting extended reading of property descriptions and financial details.

Type scale progression follows a 4px grid, with display sizes at 40px and 24px, body at 16px, and descending sizes at 14px and 12px. No half-step sizes are employed. Line heights are tight for display text to maintain visual cohesion with accompanying imagery, while body text receives generous leading for readability of longer passages. Weight distinctions are limited to Regular, Medium, and Semibold in Inter, with Pp Object Sans used exclusively at Heavy weight.

Font attribution: Inter was designed by Rasmus Andersson, available from Rsms. Pp Object Sans carries no supported designer or vendor attribution in the supplied records. Verify licensing for these families before production use.

## Layout

The layout system employs a centered, max-width container approach with responsive internal grids. Major sections stack vertically with consistent section gaps, while content within sections organizes into flexible grid patterns that adapt to available viewport width.

The feature card section visible in the imagery demonstrates a three-column grid with equal-width cards, each containing centered content: illustration at top, bold heading, descriptive paragraph, and bottom-aligned action button. Cards maintain equal height through implicit grid alignment, with internal spacing distributed to push action buttons to consistent vertical positions regardless of description length variation. Grid gaps between cards are substantial, preventing visual crowding while maintaining relationship between related options.

The BuyAbility section shows an asymmetric two-region layout: a fixed-width calculator card on the left containing financial data fields and a primary action, with a horizontally scrolling property card row on the right. This pattern prioritizes the interactive tool while offering immediate visual proof of the service's output. Property cards within the scroll region maintain consistent aspect ratios for photography, with text placeholders below indicating structured data display.

Footer layout organizes into stacked horizontal bands: category navigation with dropdown triggers, legal link rows with centered alignment, regulatory disclosure blocks, and bottom utility row with brand mark, social links, and copyright. Links group semantically with adequate horizontal spacing, while vertical rhythm separates distinct information types.

Spacing follows a 4px base unit. Section gaps of 32px separate major content blocks. Card internal padding is 24px. Component gaps of 16px separate related elements within cards. These values create breathable but efficient layouts appropriate for information-dense real estate browsing.

## Visual language

The visual language communicates accessibility and professionalism through rounded geometry, friendly illustration, and photographic authenticity. Corner radii are consistently applied: 16px for cards creating soft container edges, 8px for buttons providing tactile affordance, and full pill shapes for badges and tags requiring high visual distinction. No sharp 0px corners appear in the visible component set.

Illustrations employ a flat, contemporary style with warm skin tones, saturated but limited color palettes, and rounded character proportions. Figures are shown in active, collaborative poses that suggest guidance and partnership rather than transactional distance. Background shapes behind illustrations use soft, organic blobs in warm tints that complement without competing.

Photography receives prominent placement with minimal overlay treatment. Property images display at natural aspect ratios with slight rounding at top corners when contained in cards. Badges overlay photography only when necessary for qualification signaling, using high-contrast warm tones with white text for immediate scannability.

Shadow application is subtle and functional: soft, diffuse shadows beneath elevated cards create separation from canvas backgrounds without dramatic depth effects. Shadow color appears to derive from the ink tone at very low opacity, maintaining color harmony rather than introducing neutral gray shadows.

Iconography in the footer uses familiar platform-native marks for social media and app stores, rendered at consistent sizes with adequate touch targets. The Zillow wordmark combines a custom house-roof icon with clean sans letterforms, establishing brand presence without decorative excess.

## Components

### Feature card

Anatomy: Rounded rectangular container with top-centered illustration, bold heading, descriptive paragraph, and bottom-centered outline button. Cards sit on light gray canvas with white surfaces.

Surface and text color: White background with ink headings and muted-ink body text. No border visible in primary presentation; subtle shadow provides elevation.

Typography: Section-display token for headings, body-small for descriptions, label for button text.

Shape and border: 16px corner radius. No visible border; shadow defines card edge.

Spacing: 24px internal padding. Illustration sits near top with generous space below before heading. Heading to description gap of 8px. Description to button gap expands to push button toward bottom, creating consistent button alignment across cards in a row.

Composition: Centered text alignment throughout. Illustration width approximately 60% of card width. Button width determined by text content plus horizontal padding.

Variants: Three visible variants for Buy, Rent, and Sell flows, differentiated by illustration and copy only. Structure remains identical.

### Primary action button

Anatomy: Solid blue rectangular button with rounded corners, containing centered white label text.

Surface and text color: Action blue background with white text. No border.

Typography: Label token, Semibold weight.

Shape and border: 8px corner radius. Full-width in calculator context, content-width in other applications.

Spacing: 12px vertical padding, 24px horizontal padding in standard form; expanded to full container width in prominent placement.

Composition: Centered text. May include leading icon in some contexts.

States: Visible in default state only. Hover would shift to action-hover blue.

### Outline action button

Anatomy: Transparent background with blue border and blue text, rounded corners.

Surface and text color: Transparent surface, action blue text and border.

Typography: Label token, Semibold weight.

Shape and border: 8px corner radius, 1px solid border in action blue.

Spacing: 10px vertical padding, 20px horizontal padding.

Composition: Centered text, content-width sizing.

### Property qualification badge

Anatomy: Pill-shaped overlay positioned at top-left of property photography.

Surface and text color: Accent-warm background with white text.

Typography: Label token at reduced size, Semibold weight.

Shape and border: Full pill radius (9999px). No border.

Spacing: 4px vertical padding, 12px horizontal padding.

Composition: Positioned absolutely over image with small inset from edges.

### Footer navigation dropdown

Anatomy: Text label with trailing chevron icon, separated by vertical dividers into category groups.

Surface and text color: Ink text on white background. Blue chevron indicators.

Typography: Navigation token, Medium weight.

Shape and border: No visible container; sits within full-width bordered section.

Spacing: Generous horizontal spacing between category groups, compact spacing within link rows below.

Composition: Four major categories in primary row, stacked above multi-row legal links.

### Calculator card

Anatomy: White rounded card containing branded header, data field grid, and full-width primary button.

Surface and text color: White surface, ink for values, muted-ink for labels.

Typography: Section-display for header, body for values, body-small for field labels, label for button.

Shape and border: 16px corner radius. Subtle border or shadow for elevation.

Spacing: 24px internal padding. Grid of three data fields with consistent gaps.

Composition: Stacked vertically with clear value-label pairing.

## Responsive behavior

The visible interface suggests desktop-primary design with responsive considerations. The three-column feature card grid would logically collapse to single column on narrow viewports, maintaining internal card structure while stacking vertically. Property card rows indicate horizontal scroll behavior rather than grid reflow, preserving card aspect ratios and preventing image cropping.

The calculator card in the BuyAbility section likely stacks above property scroll on narrow screens, ensuring the interactive tool remains accessible before scrolling through listings. Footer navigation dropdowns would convert to accordion patterns or inline expanded lists, eliminating hover-dependent disclosure.

Typography scales down modestly: hero-display may reduce to 2rem, section-display to 1.25rem on intermediate breakpoints. Body text remains at 1rem for readability minimum. Touch targets for buttons and links should maintain 44px minimum height regardless of viewport.

Horizontal padding on the main container likely increases from 16px to 24px to 48px as viewport expands, keeping content readable without excessive line lengths.

## Practical implementation guidance

### Preserve
- The strict blue-only action color discipline; do not introduce additional button colors that dilute the established interactive pattern
- The heavy display typography for section headings; this weight contrast is central to Zillow's approachable authority
- Rounded card containers with consistent 16px radius; this softness differentiates from sharper competitor interfaces
- Centered content alignment within feature cards; the symmetry supports the friendly, guidance-oriented tone
- Warm illustration style with diverse representation; this human element balances the financial data density

### Avoid
- Sharp 0px corners on interactive elements; they contradict the established friendly geometry
- Multiple competing accent colors; the warm orange is reserved for qualification and urgency only
- Body text in the display typeface; Pp Object Sans Heavy is illegible at small sizes and should remain display-only
- Borders without purpose; prefer subtle shadows for card elevation to maintain the clean aesthetic
- Left-aligned text in centered card compositions; the visible system commits to center alignment in feature contexts

### Recommended build order
1. Establish the 4px spacing grid and type scale with Inter body sizes
2. Implement the color tokens, confirming action blue accessibility against white and gray backgrounds
3. Build the feature card component with illustration, heading, body, and outline button regions
4. Create primary and outline button variants with consistent padding and radius
5. Implement the calculator card with data grid and full-width action
6. Construct the footer with dropdown navigation, legal link rows, and bottom utility band
7. Add property cards with image containers, badge overlays, and text placeholder regions
8. Apply responsive stacking and scroll behaviors

### Accessibility
- Ensure action blue meets WCAG 2.1 AA contrast against white backgrounds for all text sizes
- Provide visible focus indicators using the action color with offset or underline treatment
- Maintain touch targets at minimum 44px for all interactive footer links and buttons
- Use semantic heading hierarchy: single H1 per page, feature card headings as H2 or H3 depending on nesting
- Include alt text for all property photography and descriptive text for illustration content
- Ensure dropdown triggers are keyboard operable with Escape to close and arrow navigation
- Provide sufficient color-independent indicators for state changes, particularly for the warm accent badges

## Scope note

This guide covers the Zillow homepage footer, feature card section, and BuyAbility mortgage module as visible in the supplied imagery. Navigation header, search interface, property detail pages, map views, and authenticated account flows are not represented. Motion, hover states, loading skeletons, and form validation patterns are not documented. Measurements are practical adaptation targets derived from visible proportions against the 4px grid.
