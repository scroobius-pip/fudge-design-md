# How cal.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cal.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large display headline, Google sign-up button, and interactive scheduling widget showing calendar and duration selection](https://pin.fontofweb.com/4812?format=jpg)](https://design.withfudge.com/share/pin-4812)

[Hero section with large display headline, Google sign-up button, and interactive scheduling widget showing calendar and duration selection](https://design.withfudge.com/share/pin-4812)

[![Feature comparison table with Cal.com highlighted column against Calendly and SavvyCal competitors](https://pin.fontofweb.com/4810?format=jpg)](https://design.withfudge.com/share/pin-4810)

[Feature comparison table with Cal.com highlighted column against Calendly and SavvyCal competitors](https://design.withfudge.com/share/pin-4810)

[![Four-tier pricing grid with Individuals, Teams, Organizations, and Enterprise plans including feature checklists](https://pin.fontofweb.com/4809?format=jpg)](https://design.withfudge.com/share/pin-4809)

[Four-tier pricing grid with Individuals, Teams, Organizations, and Enterprise plans including feature checklists](https://design.withfudge.com/share/pin-4809)

[![Social proof logo bar with Scale, Mercury, Coinbase, Storyblok, AngelList, and Raycast company marks](https://pin.fontofweb.com/4808?format=jpg)](https://design.withfudge.com/share/pin-4808)

[Social proof logo bar with Scale, Mercury, Coinbase, Storyblok, AngelList, and Raycast company marks](https://design.withfudge.com/share/pin-4808)

## Overview

Cal.com presents itself as an open scheduling infrastructure with a visual system built around radical clarity and understated confidence. The design avoids decorative excess in favor of generous whitespace, crisp typographic hierarchy, and a restrained warm-neutral palette that keeps attention on scheduling actions. The homepage hero pairs an oversized geometric headline with a functional scheduling widget, demonstrating the product while describing it. The pricing page extends this language into structured comparison tools and tiered cards that make plan selection feel effortless. Throughout, the system maintains a consistent rhythm: dark ink on warm off-white, rounded rectangles with moderate curvature, and a clear separation between content density zones and breathing room. The overall impression is of a tool that respects the user's time—precise, modern, and quietly authoritative.

## Colors

The color system operates on a near-monochrome foundation with strategic warmth. The interface avoids pure black and pure white, instead using warm stone tones that reduce eye strain and create subtle depth through temperature variation.

| token | value | use |
|---|---|---|
| ink | #1C1917 | Primary text, active buttons, logo mark, table headers |
| muted-ink | #78716C | Secondary text, descriptions, disabled states, comparison table competitor columns |
| canvas | #FAFAF9 | Page background, navigation bar, feature comparison section |
| surface | #FFFFFF | Cards, modals, scheduling widget, pricing cards, elevated containers |
| surface-inverse | #292524 | Highlighted pricing tier, dark mode-ready surfaces |
| border | #E7E5E4 | Card outlines, table dividers, input borders |
| border-subtle | #F5F5F4 | Hairline separators, section dividers on canvas backgrounds |
| action | #1C1917 | Primary button fill, link text, interactive emphasis |
| action-inverse | #FAFAF9 | Text on dark buttons, text on inverse surfaces |
| accent-warm | #F97316 | Star ratings, trust indicators, subtle promotional highlights |

The palette distinguishes itself through temperature rather than saturation. The canvas background carries a faint warm cast that prevents the sterility of pure gray, while the ink maintains enough brown undertone to feel organic rather than mechanical. Dark surfaces use surface-inverse with slightly lifted lightness to preserve shadow detail and prevent crushing. The accent-warm appears sparingly—confined to rating stars and social proof elements—preventing it from overwhelming the neutral system. Border colors create elevation through value contrast rather than shadow, keeping the interface flat and contemporary.

## Typography

The type system pairs a distinctive geometric display face with a neutral grotesque for body text, creating clear role separation between expressive headlines and functional reading matter.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Cal Sans | 4rem | 600 | 1.1 | -0.02em | Homepage headline, major page titles |
| section-display | Cal Sans | 3rem | 600 | 1.15 | -0.02em | Section headings, feature breakdown title |
| heading | Cal Sans | 1.5rem | 600 | 1.2 | -0.01em | Card titles, pricing plan names, widget headers |
| body | Inter | 1rem | 400 | 1.6 | 0em | Paragraphs, descriptions, feature lists |
| body-large | Inter | 1.25rem | 400 | 1.5 | 0em | Hero subheadlines, introductory paragraphs |
| label | Inter | 0.875rem | 500 | 1.4 | 0em | Buttons, badges, navigation items, metadata |
| navigation | Inter | 0.875rem | 400 | 1 | 0em | Top navigation links, footer links |
| mono | Roboto Mono | 0.875rem | 600 | 1.4 | 0em | Code snippets, technical labels, duration pills |

Cal Sans, designed by Mark Davis, provides the brand voice through its geometric construction and tight apertures. It appears exclusively in Semibold weight for display use, creating consistent visual weight across all headline sizes. Inter, designed by Rasmus Andersson, handles all functional text with its extensive weight range and screen-optimized forms. The type scale uses a 4px relative unit, with display sizes at 64px and 48px, body at 16px and 20px, and labels at 14px. Line heights stay tight for display (1.1–1.2) and generous for body (1.5–1.6) to support extended reading in feature descriptions and documentation. Verify licensing for these families before production use.

## Layout

The layout system follows a centered container model with generous section padding and clear content width constraints. The homepage hero splits asymmetrically: the left column carries the value proposition and conversion actions at approximately 55% width, while the right column presents a live scheduling widget that demonstrates product functionality. This split creates immediate comprehension without requiring imagination from the visitor.

Navigation sits in a full-width bar with fixed positioning behavior implied by its visual separation from content. The logo mark appears left-aligned with primary navigation links centered, while authentication and primary conversion actions cluster right. Below the navigation, content sections stack vertically with consistent 6rem section spacing, creating predictable pacing through long pages.

The pricing page introduces a four-column grid for plan comparison, with equal-width cards that maintain alignment across tier names, prices, descriptions, and feature lists. The highlighted Teams card breaks the rhythm through inverse coloring and slight elevation, drawing attention without disrupting the grid's mathematical regularity. Feature comparison tables use a sticky left column for category labels while the Cal.com column receives visual emphasis through background contrast.

Spacing follows a 4px base unit with semantic multiples: 8px for tight internal padding, 16px for component gaps, 24px for card padding, 32px for section subsections, and 96px for major section breaks. This limited set prevents arbitrary values while supporting the generous, breathable aesthetic.

## Visual language

The visual language communicates through restraint and precision. Rounded corners appear consistently but moderately—0.5rem for buttons and inputs, 0.75rem for cards and panels—avoiding the playfulness of full rounding or the severity of sharp corners. Pills and badges use full border-radius for categorical distinction.

Shadows are minimal to absent in the visible interface; elevation communicates through background value shifts rather than cast shadows. The scheduling widget on the homepage demonstrates this: it sits on the same plane as surrounding content but reads as distinct through its surface background and internal border structure.

Iconography appears functional and line-based, with simple geometric marks for navigation dropdowns, checkmarks in feature lists, and information indicators. The star ratings use filled warm accent shapes against neutral backgrounds. Logo marks in the social proof section maintain grayscale presentation, with no color variation that would compete with the interface palette.

Photography and illustration are absent from the visible pages; the product itself serves as imagery through interactive widgets and interface previews. This self-referential approach reinforces the tool's utility while eliminating the need for stock photography or abstract decoration.

## Components

**Primary Button**
- Anatomy: Text label with optional trailing chevron icon
- Surface: Solid ink fill with inverse text
- Typography: Label token, medium weight
- Shape: 0.5rem border radius, generous horizontal padding
- Spacing: 0.75rem vertical, 1.5rem horizontal
- States: The visible state shows solid fill; inverse variants exist for dark backgrounds

**Secondary Button**
- Anatomy: Text label with trailing chevron on light background
- Surface: Transparent or surface fill with ink text and subtle border
- Typography: Label token
- Shape: 0.5rem border radius
- Spacing: Matches primary button dimensions
- Composition: Often paired with primary button as alternative action

**Pricing Card**
- Anatomy: Tier name, price block, description, CTA button, feature checklist
- Surface: White with subtle border, or inverse dark for highlighted tier
- Typography: Heading for tier name, body for description, label for price metadata
- Shape: 0.75rem border radius
- Spacing: 1.5rem internal padding, consistent vertical rhythm between sections
- Variants: Default white, highlighted dark, and enterprise contact variant with adjusted CTA

**Scheduling Widget**
- Anatomy: Avatar, host name, event title, description, duration selector, location, timezone, calendar grid
- Surface: White card with internal hairline borders
- Typography: Heading for event title, body for description, label for metadata
- Shape: 0.75rem outer radius, individual cells with 0.5rem radius
- Composition: Two-column internal layout with event details left and calendar right

**Feature Comparison Table**
- Anatomy: Category headers, feature rows, competitor columns with checkmark or cross indicators
- Surface: Canvas background with white highlighted column for Cal.com
- Typography: Label for category headers, body for feature names
- Shape: Full-width container with internal horizontal rules
- Composition: Sticky left column, scrollable comparison area

**Navigation Bar**
- Anatomy: Logo mark, primary links with dropdown indicators, authentication links, primary CTA
- Surface: Canvas background, full-width
- Typography: Navigation token for links, label for CTA
- Composition: Flex row with space-between alignment, centered navigation cluster

## Responsive behavior

The visible desktop layouts suggest a breakpoint system that collapses the hero split into a single column on narrower viewports. The scheduling widget would stack below the headline and conversion buttons, maintaining its internal two-column layout until further reduction forces calendar and details into vertical arrangement.

The pricing four-column grid would transition to two columns on tablet widths, then single column on mobile with the highlighted Teams card maintaining its visual priority through vertical placement. Feature comparison tables would likely transform into accordion sections or horizontal scroll containers to preserve readability without excessive compression.

Navigation would collapse to a hamburger menu or simplified drawer, with the centered link cluster hidden behind a toggle. The logo and primary CTA would remain visible in a compressed header bar.

## Practical implementation guidance

**Preserve**
- The warm-neutral palette with its subtle temperature variation; pure grays will feel clinical and wrong
- Cal Sans exclusively for display headlines; mixing in other geometric faces will dilute brand recognition
- The generous section spacing and breathing room; crowding components destroys the calm authority
- The asymmetric hero split with functional widget demonstration
- Consistent 4px grid alignment for all measurements

**Avoid**
- Pure black (#000000) for text or backgrounds; the ink token carries necessary warmth
- Heavy drop shadows for elevation; rely on background value and border contrast
- Saturated accent colors beyond the warm orange for ratings; the palette succeeds through restraint
- Rounding beyond 0.75rem for major containers; excessive rounding undermines the precise tone
- Multiple button styles beyond the primary/secondary pair; the system thrives on binary choice clarity

**Recommended Build Order**
1. Establish the 4px spacing grid and color tokens in CSS custom properties
2. Implement Inter at 400 and 500 weights for all body and label text
3. Add Cal Sans at 600 weight with display size tokens
4. Build the navigation bar with canvas background and centered link cluster
5. Create the hero section with asymmetric two-column layout
6. Implement button components with consistent padding and radius
7. Construct the scheduling widget as a self-contained card component
8. Build pricing cards with variant system for default, highlighted, and enterprise
9. Add feature comparison table with sticky column behavior
10. Polish with border-subtle dividers and micro-interactions

**Accessibility**
- Ensure the ink on canvas combination meets WCAG AAA contrast ratios; the warm tones should not reduce legibility
- Provide visible focus indicators for keyboard navigation that respect the border-radius system
- Maintain semantic heading hierarchy with Cal Sans limited to h1–h3 roles
- Ensure the scheduling widget calendar grid supports keyboard date selection and screen reader announcement
- Test the inverse pricing card for sufficient contrast between muted text and surface-inverse background

## Scope note

This guide covers the homepage and pricing page surfaces visible in the supplied images. Mobile breakpoints, dark mode implementation, form validation states, loading skeletons, and animation specifications are not included. Measurements are practical adaptation targets derived from visual inspection against a 4px base grid. Verify licensing for Cal Sans, Inter, Matter, Roboto Mono, and Satoshi families before production use.
