# How us.dollarshaveclub.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/us.dollarshaveclub.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dark navy footer with newsletter signup, orange CTA button, and social icons](https://pin.fontofweb.com/3013?format=jpg)](https://design.withfudge.com/share/pin-3013)

[Dark navy footer with newsletter signup, orange CTA button, and social icons](https://design.withfudge.com/share/pin-3013)

[![Sky-blue press section with white headline and four publication logos](https://pin.fontofweb.com/3012?format=jpg)](https://design.withfudge.com/share/pin-3012)

[Sky-blue press section with white headline and four publication logos](https://design.withfudge.com/share/pin-3012)

[![Product carousel with white background, orange action buttons, and pagination dots](https://pin.fontofweb.com/3011?format=jpg)](https://design.withfudge.com/share/pin-3011)

[Product carousel with white background, orange action buttons, and pagination dots](https://design.withfudge.com/share/pin-3011)

[![Hero banner with blue grid background, shaving photography, and orange CTA](https://pin.fontofweb.com/3010?format=jpg)](https://design.withfudge.com/share/pin-3010)

[Hero banner with blue grid background, shaving photography, and orange CTA](https://design.withfudge.com/share/pin-3010)

## Overview

Dollar Shave Club's visual system communicates straightforward confidence through stark color contrast, geometric patterning, and unapologetically bold typography. The design pairs a deep midnight navy with electric orange accents to create immediate visual hierarchy and recognizable brand presence. Every element serves the core message of accessible, no-nonsense grooming products.

The system relies on two type families: Dsc Specter, a custom sans-serif with multiple weights that handles all interface and display text with muscular authority, and Gelica, a softer rounded sans used sparingly for supporting contexts. The layout philosophy favors full-bleed sections with generous internal padding, creating breathing room around product photography and call-to-action elements. Photography features direct, unglamorous depictions of grooming in progress—real skin texture, shaving cream, and everyday bathroom environments—reinforcing the brand's democratic positioning against polished competitor imagery.

## Colors

The palette operates on a principle of maximum contrast: deep darkness against brilliant warmth, with strategic sky blue for environmental atmosphere.

| token | value | use |
|---|---|---|
| action | #FF5500 | Primary buttons, promotional badges, CTA backgrounds, and interactive emphasis |
| ink | #000000 | Primary text on light surfaces, logo marks, and iconography |
| canvas | #FFFFFF | Page backgrounds, product card surfaces, and text on dark sections |
| surface | #051024 | Footer backgrounds, dark sections, and newsletter field fills |
| sky | #5B9BD5 | Hero section backgrounds, press section fills, and atmospheric environmental color |

The orange action color dominates interactive moments. It appears as solid fills for all primary buttons—"START CUSTOMIZING," "LET'S DO IT," "Select Size," "Add to Cart"—creating an unmissable path for user action. The deep navy surface color anchors the footer and provides dramatic contrast for white text and orange buttons. Sky blue functions as a distinctive environmental hue, appearing behind hero photography with a subtle grid pattern overlay and as the full background for press recognition sections. White canvas serves as the neutral ground for product browsing and transactional flows.

The system does not employ gradients or shadows for dimensional effects. Color relationships are flat and declarative: orange on navy, black on white, white on blue. This restraint reinforces the brand's direct personality.

## Typography

Dsc Specter, designed by Jeremy Mickel and available from Mckl, serves as the exclusive typeface for headlines, body copy, navigation, labels, and buttons. Its weight range from Regular through Black enables dramatic scale contrast without changing family. Gelica appears in the font stack but its visible role is limited; verify licensing for both families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Dsc Specter | 3rem | 700 | 1 | -0.02em | Hero headlines, maximum impact statements |
| section-display | Dsc Specter | 1.5rem | 700 | 1.1 | 0.01em | Section headings, product category titles |
| body | Dsc Specter | 1rem | 400 | 1.5 | 0 | Descriptions, form microcopy, legal text |
| body-small | Dsc Specter | 0.875rem | 400 | 1.5 | 0 | Consent microcopy, secondary descriptions, fine print |
| label | Dsc Specter | 0.875rem | 600 | 1.25 | 0.02em | Button text, product names, navigation links |
| navigation | Dsc Specter | 0.875rem | 600 | 1.25 | 0.01em | Footer links, menu items, utility text |

Headlines favor uppercase setting with tight leading and minimal tracking, creating dense, impactful blocks of text that command attention. The hero display token at 3rem produces commanding presence for statements like "TIRED OF ONE-SIZE-FITS-ALL GROOMING?" Body copy maintains comfortable readability at 1rem with generous line height. The body-small token handles consent language and secondary explanations at a slightly reduced size while preserving the same open leading. Labels and navigation share the same size but differentiate through context and weight application.

## Layout

The page structure follows a sectional rhythm with full-width bands alternating between atmospheric imagery, product grids, social proof, and conversion-focused closers. Each section maintains generous vertical padding, typically 6rem, creating clear territorial boundaries without visible borders.

The hero section employs an asymmetric split: text content occupies the left third while photography dominates the right two-thirds, extending to the viewport edge. This creates dynamic tension and allows the lifestyle imagery to breathe. The blue grid pattern behind the hero adds texture without competing with the foreground elements.

Product carousels center their content with horizontal navigation arrows positioned at the vertical midpoint of the card row. Pagination indicators sit below the product grid as simple dot markers. Cards themselves are minimal containers—white backgrounds, centered product photography, product name below, and full-width orange action buttons at the bottom.

The footer compresses information into a three-column layout: navigation links in two left columns, newsletter conversion in the right column. Social icons cluster below the link columns, while legal copy and region selector occupy the bottom edge. A persistent promotional button—"Get 25% Off"—anchors the lower left corner as a floating element.

Spacing follows a 0.25rem base unit. Section breaks use 6rem, component internal padding uses 1.5rem, and tight groupings use 0.5rem. This limited scale prevents fragmentation while allowing sufficient flexibility for distinct component types.

## Visual language

Photography direction emphasizes authenticity over aspiration. Subjects appear in real bathroom environments with visible skin texture, water droplets, and shaving cream application. The color temperature of photography skews warm, creating natural contrast against the cool blue environmental backgrounds.

Geometric patterns appear as subtle overlays—specifically the grid pattern in the hero section, which suggests bathroom tile without literal representation. This pattern uses a lighter value of the sky blue, creating depth through tone-on-tone variation rather than additional colors.

Iconography is minimal and functional: simple arrow chevrons for carousel navigation, social platform marks in monochrome, and a chat bubble for customer support. No decorative illustration or mascot imagery appears in the visible system.

The overall impression is of a brand that respects the customer's intelligence—no flashy effects, no excessive chrome, just clear product presentation and direct calls to action. The visual confidence comes from restraint and contrast rather than complexity.

## Components

### Primary action button

- **Anatomy**: Text label centered within a solid rectangular fill
- **Surface and text color**: Orange action background with black ink text
- **Typography**: Label token, uppercase, semibold weight
- **Shape**: Zero border radius, sharp corners
- **Spacing**: 1rem vertical padding, 2rem horizontal padding
- **Composition**: Full-width within parent containers in product cards; intrinsic width in hero and footer contexts
- **Variants**: "START CUSTOMIZING" in hero, "LET'S DO IT" in newsletter, "Select Size" / "Add to Cart" / "Select Color" in product carousel

### Product card

- **Anatomy**: Product photograph centered above product name and action button
- **Surface and text color**: White canvas background, black ink text
- **Typography**: Product name uses label token, semibold; button uses label token uppercase
- **Shape**: Zero border radius
- **Spacing**: Generous internal padding around photograph, consistent spacing between name and button
- **Composition**: Equal-width columns in carousel, with horizontal scroll indicated by arrow controls
- **States**: Pagination dots indicate position; active dot filled, inactive dot outlined or muted

### Newsletter signup

- **Anatomy**: Headline, descriptive text, email input field, submit button, consent microcopy
- **Surface and text color**: Dark surface background with white canvas text; input field uses dark fill with light border
- **Typography**: Headline uses section-display token; body and microcopy use body-small token
- **Shape**: Input field and button both use zero border radius
- **Spacing**: Comfortable vertical rhythm between elements; button full-width of input container
- **Composition**: Right-aligned within footer grid, occupying approximately one-third of footer width

### Footer navigation

- **Anatomy**: Grouped link lists under category headings
- **Surface and text color**: Dark surface background with white canvas text
- **Typography**: Category headings use label token, semibold; links use label token, regular weight
- **Shape**: No containers or separators
- **Spacing**: Tight vertical stacking within columns, generous horizontal gutter between columns
- **Composition**: Two link columns left-aligned, newsletter module right-aligned

### Press recognition bar

- **Anatomy**: Section headline above row of publication logos
- **Surface and text color**: Sky blue background with white headline and black logo marks
- **Typography**: Section-display token, uppercase, white color override
- **Shape**: Full-bleed horizontal band
- **Spacing**: Centered alignment, generous vertical padding
- **Composition**: Logos evenly distributed horizontally; no links or interaction indicated

## Responsive behavior

The visible desktop layout suggests several responsive adaptation points. The hero section's asymmetric split should stack vertically on narrower viewports, with photography preceding or following text depending on priority. The product carousel should maintain horizontal scroll or convert to a swipeable single-column layout. Footer columns should collapse to a single stacked sequence with newsletter signup prominently positioned.

The persistent promotional button should remain fixed in viewport corner across breakpoints, though its size may reduce on mobile to avoid obstruction. Press logos should wrap to two rows on mid-width viewports and single column on narrowest widths.

Touch targets for carousel arrows and pagination dots should maintain minimum 44px hit areas. The zero-radius button aesthetic should persist across breakpoints as a brand signature.

## Practical implementation guidance

### Preserve
- The stark orange-on-black and orange-on-navy contrast ratios; these define brand recognition
- Uppercase headline setting with tight leading; this creates the characteristic vocal tone
- Sharp-cornered buttons; rounded corners would dilute the brand's direct personality
- Authentic photography direction with visible texture and real environments
- The limited two-family type system with Dsc Specter carrying all interface weight

### Avoid
- Introducing additional accent colors; the orange-navy-white-sky palette is intentionally constrained
- Adding border radius to buttons or cards; the system relies on rectilinear confidence
- Using drop shadows for elevation; flat color blocks maintain the straightforward aesthetic
- Replacing uppercase headlines with sentence case; this would significantly alter brand voice
- Crowding the product carousel with more than four visible items; the generous spacing is integral

### Recommended build order
1. Establish color tokens and type scale with Dsc Specter loaded at all weights
2. Build the primary action button component with zero radius and uppercase label
3. Construct the hero section with asymmetric layout and blue grid background pattern
4. Implement product card and carousel with consistent spacing and pagination
5. Assemble footer with three-column grid and newsletter module
6. Add press recognition bar as full-bleed section with logo row
7. Implement persistent promotional button as fixed-position element

### Accessibility
- Ensure orange action buttons on dark backgrounds meet minimum contrast ratios; the orange may need slight lightening for WCAG AA compliance on navy
- Provide visible focus indicators for all interactive elements; the flat design risks losing focus state visibility
- Add aria-labels to carousel navigation arrows and pagination dots
- Ensure email input in newsletter has associated label, visible or screen-reader only
- Consider reduced-motion preferences for any carousel auto-advance behavior

## Scope note

This guide covers the homepage surface visible in supplied imagery: hero, product carousel, press recognition, and footer with newsletter capture. Navigation header, product detail pages, checkout flow, account interfaces, and mobile-specific layouts are not represented. Measurements are practical adaptation targets derived from visual inspection of the desktop presentation.
