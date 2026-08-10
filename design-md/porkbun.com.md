# How porkbun.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/porkbun.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with domain search bar, cartoon pig mascot in toast costume, and trust badges including USA Today, Forbes, Trustpilot, and Facebook ratings](https://pin.fontofweb.com/8324?format=jpg)](https://design.withfudge.com/share/pin-8324)

[Hero section with domain search bar, cartoon pig mascot in toast costume, and trust badges including USA Today, Forbes, Trustpilot, and Facebook ratings](https://design.withfudge.com/share/pin-8324)

[![Dark footer with newsletter signup, multi-column link navigation, contact information, social media icons, and payment method logos](https://pin.fontofweb.com/5321?format=jpg)](https://design.withfudge.com/share/pin-5321)

[Dark footer with newsletter signup, multi-column link navigation, contact information, social media icons, and payment method logos](https://design.withfudge.com/share/pin-5321)

[![Free domain features grid with five feature cards showing WHOIS Privacy, SSL Certificates, URL Forwarding, Email Forwarding, and Cloudflare DNS Management](https://pin.fontofweb.com/5320?format=jpg)](https://design.withfudge.com/share/pin-5320)

[Free domain features grid with five feature cards showing WHOIS Privacy, SSL Certificates, URL Forwarding, Email Forwarding, and Cloudflare DNS Management](https://design.withfudge.com/share/pin-5320)

[![Trustpilot testimonial carousel with verified review cards, star ratings, reviewer names, and aggregate score display](https://pin.fontofweb.com/5319?format=jpg)](https://design.withfudge.com/share/pin-5319)

[Trustpilot testimonial carousel with verified review cards, star ratings, reviewer names, and aggregate score display](https://design.withfudge.com/share/pin-5319)

## Overview

Porkbun presents a domain registrar experience built on personality and clarity. The visual system centers on a warm coral accent color that appears in buttons, borders, and the brand mascot, balanced against a predominantly white and light gray canvas. The interface communicates trust through social proof badges and customer testimonials while maintaining an approachable, slightly playful tone through cartoon pig illustrations. Typography relies entirely on Open Sans across all weights and sizes, creating a consistent, readable hierarchy from large all-caps section headers to small price labels. The layout follows a centered, container-based approach with generous vertical breathing room between sections. A dramatic shift occurs in the footer, where the system inverts to a near-black background with coral links, creating a strong visual conclusion to the page. The overall impression is of a consumer-friendly service that prioritizes transparency and ease without sacrificing professional credibility.

## Colors

The color system operates in two distinct modes: a light, airy primary interface and a dark, grounded footer section.

| token | value | use |
|---|---|---|
| action | #EF7878 | Primary buttons, borders, links, mascot accents, and interactive highlights |
| action-hover | #FEF9F9 | Button hover states and subtle warm backgrounds |
| ink | #333333 | Primary body text, headings, and navigation |
| ink-secondary | #222222 | Secondary text, link defaults, and emphasized labels |
| ink-tertiary | #191919 | Footer background, darkest surfaces |
| muted-ink | #595959 | Subheadings, supporting text, and metadata |
| canvas | #FFFFFF | Primary page background and card surfaces |
| surface | #F3F3F3 | Subtle section backgrounds and testimonial cards |
| surface-warm | #FEF9F9 | Warm tinted hover and focus areas |
| border | #EF7878 | Button outlines, input borders, and decorative rules |
| border-subtle | #000000 | Hairline dividers and minimal borders |
| footer-bg | #191919 | Footer background, dark section surfaces |
| footer-ink | #FFFFFF | Footer primary text and headings |
| footer-link | #EF7878 | Footer navigation links and interactive elements |

The coral accent (#EF7878) functions as the brand's signature, appearing in the logo mark, primary buttons with their matching borders, and the cartoon pig mascot's coloring. This warm red-pink creates energetic contrast against the neutral grays and whites that dominate the content areas. The dark footer (#191919) provides visual weight and closure, with coral links maintaining brand continuity while white text ensures readability. No gradient or shadow colors beyond the single coral glow effect are present in the interface palette.

## Typography

The type system uses Open Sans exclusively, with Segoe UI appearing only for a specific UI element. The hierarchy ranges from large display headings to small functional labels, with weight and size creating distinction rather than multiple families.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Open Sans | 2.25rem | 500 | 1.1 | normal | Main page headline |
| section-display | Open Sans | 2.1875rem | 400 | 1.4 | 0.125em | Section headings in all caps |
| body | Open Sans | 0.875rem | 400 | 1.4286 | normal | Paragraph text and descriptions |
| body-large | Open Sans | 1rem | 400 | 1.6875 | 0.09375em | Feature descriptions and subheadings |
| label | Open Sans | 1.3125rem | 400 | 1.4 | normal | Feature card titles |
| navigation | Open Sans | 0.875rem | 400 | 1.4286 | normal | Top navigation items |
| navigation-large | Open Sans | 1.125rem | 400 | 1.1111 | normal | Logo-adjacent nav and prominent links |
| button | Open Sans | 1rem | 400 | 1.25 | normal | Button labels and CTAs |
| price-label | Open Sans | 0.75rem | 400 | 1.3333 | normal | Domain pricing information |
| testimonial-title | Open Sans | 0.875rem | 600 | 1.4286 | normal | Review card headings |
| testimonial-body | Open Sans | 0.875rem | 400 | 1.4286 | normal | Review excerpt text |
| legal | Open Sans | 0.75rem | 400 | 1.3333 | normal | Footer small print and metadata |

Open Sans is designed by the Monotype Design Team and distributed by Monotype Imaging Inc. Segoe UI is provided by Microsoft Corporation. Glyphicons Halflings, designed by Jan Kovarik, appears as an icon font. Font Awesome 6 Brands and Font Awesome 6 Free-Solid serve as icon and symbol fonts. Verify licensing for these families before production use.

The display hierarchy favors generous sizing with moderate weights—hero-display at 500 weight creates presence without heaviness, while section-display uses 400 weight with wide letter spacing for an airy, architectural quality. Body text remains compact at 0.875rem with comfortable 1.4286 line height for efficient reading in feature descriptions.

## Layout

The page structure follows a centered single-column approach with contained width limits. The navigation bar spans full width with internal padding, sitting above a thin coral rule that separates it from content. Below, the hero section places text and search functionality on the left with the mascot illustration on the right in a two-column arrangement.

Content sections stack vertically with substantial vertical padding—approximately 5rem between major sections. The feature grid in "All-in-One Domain Management Tools" uses a four-column layout with centered content in each cell: illustration above, title below, description text, and a bottom-aligned button. The "Save Money with Free Domain Features" section adapts to a three-column top row and two-column bottom row, maintaining centered alignment within each card.

The testimonial carousel presents four review cards in a horizontal row with navigation arrows at the extremes. Each card contains consistent internal padding and maintains equal height through the row.

The footer dramatically shifts to full-width dark background with a multi-column link grid. The left column contains brand description, newsletter signup, and contact information. Three right columns organize links under "Products," "Support," and "Our Company" headings. Social media icons and payment method logos occupy the bottom edge.

Container widths appear constrained with horizontal margins of approximately 16.71875rem on larger viewports, creating generous side margins that focus attention on content. Internal gutters use 0.9375rem padding consistently.

## Visual language

The visual personality balances professional domain registrar functionality with approachable, memorable character. The cartoon pig mascot—appearing in multiple costumes and poses throughout the page—provides distinctive brand recognition without undermining credibility. Illustrations use flat colors with minimal shading, matching the clean interface aesthetic.

Iconography mixes three systems: Font Awesome for social media and UI icons, Glyphicons for smaller interface indicators, and custom illustrations for feature representations. The custom icons in the features section (eye, shield, arrow, envelope, cloud) use solid dark fills with simple geometric forms.

The coral accent color appears with restraint, primarily in interactive elements and the brand mark. This creates a "coral on white" signature for buttons and links that feels energetic rather than overwhelming. The thin coral rule beneath navigation and the subtle coral glow shadow on primary buttons reinforce this accent without visual noise.

Photography is absent; the system relies entirely on illustration and iconography. Trust signals use official badge graphics from review platforms, maintaining their native color schemes as external credibility markers.

Border treatments are minimal and precise—1px solid coral for buttons and inputs, with 3px radius corners that soften edges without appearing rounded. The overall geometric vocabulary is rectilinear with these slight radius modifications.

## Components

### Primary button

Anatomy: Text label centered within a bordered rectangle.

Surface: Transparent background with 1px solid coral (#EF7878) border; on hover or active state, fills with coral (#EF7878) background and white text.

Typography: `{typography.button}` in `#222222` default, shifting to `#FFFFFF` on filled state.

Shape: 3px corner radius, rectangular proportions.

Spacing: Padding of 0.375rem 0.75rem for compact variant; 1.125rem 1rem 0.875rem for search-adjacent variant.

Composition: Often appears in card footers or beside inputs; standalone use in feature grids.

Variants: Default (outline), filled (coral background), and search-integrated with icon.

### Domain search bar

Anatomy: Text input field with placeholder text, dropdown selector, and submit button with search icon.

Surface: White background with coral border; dropdown and button share the coral accent.

Typography: Input placeholder in muted tone at `{typography.body}`; dropdown label at same size.

Shape: 3px radius on input; button attaches with slight overlap or flush connection.

Spacing: Full-width within container; internal padding comfortable for touch.

Composition: Positioned prominently in hero section with pricing labels below.

### Feature card

Anatomy: Centered illustration, title, description paragraph, and call-to-action button stacked vertically.

Surface: Transparent or white background; no visible card border in default state.

Typography: Title at `{typography.label}`, description at `{typography.body}`, button at `{typography.button}`.

Shape: No border radius on card itself; internal elements use standard 3px where applicable.

Spacing: Generous vertical spacing between elements; consistent horizontal padding.

Composition: Equal-width columns in grid; bottom-aligned buttons create visual rhythm.

### Testimonial card

Anatomy: Star rating row with verification badge, review title, excerpt text, reviewer name and timestamp.

Surface: Light gray (#F3F3F3) background distinguishing from white canvas.

Typography: Title at `{typography.testimonial-title}`, body at `{typography.testimonial-body}`, metadata at `{typography.legal}`.

Shape: Subtle card appearance without strong border; slight shadow or border possible.

Spacing: Internal padding approximately 0.9375rem; consistent card dimensions in carousel.

Composition: Horizontal scroll or carousel with arrow navigation; four visible at desktop width.

### Navigation bar

Anatomy: Logo mark with wordmark, primary navigation links with dropdown indicators, utility links for sign-in and cart.

Surface: White background with full-width coral rule beneath.

Typography: Links at `{typography.navigation}` or `{typography.navigation-large}` for logo area.

Shape: Full-width bar; dropdown menus appear below on interaction.

Spacing: Horizontal padding 0.9375rem; link spacing generous with 2.0625rem margins between items.

Composition: Flex row with logo left, navigation center-left, utilities right.

### Footer

Anatomy: Brand column with description, newsletter form, contact details; three link columns; social and payment bottom row.

Surface: Near-black (#191919) background throughout.

Typography: Headings at `{typography.navigation-large}` in white; links at `{typography.body}` in coral; small print at `{typography.legal}`.

Shape: Full-width, no radius; form inputs with slight radius.

Spacing: Multi-column grid with substantial vertical padding; link lists tightly spaced.

Composition: Asymmetric left-heavy layout with brand presence dominant.

## Responsive behavior

The layout appears optimized for desktop viewing with contained width. At narrower viewports, the four-column feature grid should collapse to two columns and then single column, maintaining centered content alignment. The testimonial carousel would reduce visible cards from four to two or one with swipe or arrow navigation preserved.

The navigation bar likely collapses to a hamburger menu on mobile, with dropdown categories becoming expandable sections. The hero section's two-column layout would stack vertically, placing the search functionality above the mascot illustration.

Footer columns should stack sequentially on narrow screens, with the brand column remaining first to maintain newsletter signup visibility. Social and payment icons may wrap to multiple rows.

Touch targets for buttons and navigation items should maintain minimum 44px height. The search bar would benefit from full-width treatment on mobile with stacked or simplified dropdown integration.

## Practical implementation guidance

### Preserve
- The coral accent as the singular brand color, used consistently for all interactive elements and the mascot illustration palette.
- Open Sans throughout; the single-family approach creates cohesion across all text elements.
- The dramatic footer inversion to dark background—this provides strong visual closure and distinguishes utility content.
- Generous vertical section spacing; the airy layout prevents information density from overwhelming users.
- Centered content alignment with constrained maximum width; this creates focus and readability.

### Avoid
- Introducing additional accent colors; the coral-neutral binary is distinctive and should not be diluted.
- Heavy shadows or dimensional effects; the flat illustration style and clean borders define the aesthetic.
- Multiple border radius values; the consistent 3px treatment should apply universally.
- Replacing custom illustrations with generic stock photography; the mascot character is central to brand recognition.
- Dark text on the coral background without sufficient contrast; white or very dark text only on filled coral surfaces.

### Recommended build order
1. Establish the color tokens and Open Sans font loading with all required weights (300, 400, 500, 600, 700).
2. Build the navigation bar with logo, links, and coral bottom rule.
3. Implement the hero section with search bar, trust badges, and mascot placement.
4. Create the feature card component with illustration, title, description, and button pattern.
5. Assemble the feature grids with appropriate column layouts.
6. Build the testimonial card and carousel structure.
7. Implement the dark footer with multi-column link organization and newsletter form.
8. Add interactive states: button hover fills, input focus borders, and carousel navigation.

### Accessibility
- Ensure coral on white and white on coral combinations meet WCAG AA contrast ratios; the #EF7878 coral may need adjustment for small text compliance.
- Provide visible focus indicators on all interactive elements, using the coral accent with sufficient offset or outline.
- Implement keyboard navigation for the testimonial carousel and dropdown menus.
- Add appropriate ARIA labels to the search functionality and icon-only buttons.
- Maintain semantic heading hierarchy from h1 through h4 without skipping levels.
- Ensure the mascot illustrations have descriptive alt text or are marked decorative appropriately.

## Scope note

This guide covers the Porkbun homepage including hero, feature grids, testimonials, and footer surfaces. Pricing pages, account dashboards, checkout flows, and mobile-specific layouts are not represented in the supplied material. Motion behavior, loading states, and form validation styling are not documented. Measurements derive from the retained interface values where available.
