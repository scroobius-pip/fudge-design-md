# How figr.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/figr.design-design)

Last updated: 2026-08-10

## Captured pages

[![Contact page with split-layout hero, serif headline, and form with purple submit button on light canvas](https://pin.fontofweb.com/7414?format=jpg)](https://design.withfudge.com/share/pin-7414)

[Contact page with split-layout hero, serif headline, and form with purple submit button on light canvas](https://design.withfudge.com/share/pin-7414)

[![Homepage hero with centered serif display, product diagram in rounded purple frame, and dual CTA buttons](https://pin.fontofweb.com/7413?format=jpg)](https://design.withfudge.com/share/pin-7413)

[Homepage hero with centered serif display, product diagram in rounded purple frame, and dual CTA buttons](https://design.withfudge.com/share/pin-7413)

## Overview

Figr presents itself as an AI design agent for product teams, and its visual system communicates that positioning through restrained elegance rather than flashy effects. The design pairs a warm, near-white canvas with sharp black typography, letting content breathe while a single purple accent provides energy and hierarchy. The overall impression is of a tool built for designers—confident, uncluttered, and typographically sophisticated. The homepage establishes the product narrative through a centered editorial headline and an illustrative product diagram, while the contact page demonstrates the system's adaptability to functional forms without losing its refined character. Every element feels intentional: generous whitespace, precise corner radii, and a clear separation between content and interface chrome.

## Colors

The palette is intentionally minimal, built around a high-contrast core with one distinctive accent. The warm off-white canvas prevents sterility, while the purple action color carries almost all interactive meaning.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headlines, body copy, navigation |
| canvas | #FAFAF8 | Page background, creating warmth against pure white |
| surface | #FFFFFF | Input fields, cards, elevated panels |
| action | #6B5CE7 | Primary buttons, submit actions, key interactive elements |
| action-hover | #5A4BD4 | Darker purple for button hover states |
| muted-ink | #6B6B6B | Secondary text, descriptions, placeholders |
| border | #E5E5E5 | Subtle dividers, input borders, card outlines |
| border-dashed | #CCCCCC | Dashed borders for upload zones and secondary boundaries |

The system operates in a light mode exclusively across the captured surfaces. Black ink on the warm canvas provides maximum readability without the harshness of pure white backgrounds. The purple accent appears only on primary actions—buttons that advance the user toward conversion—making it a scarce and therefore meaningful signal. The product diagram on the homepage introduces a light lavender-tinted frame (#E8E4F7) that extends the purple family into decorative surfaces without competing for attention. No dark mode is visible in the supplied material.

## Typography

Two families create a clear functional hierarchy: GT Alpina for editorial display moments and Inter for everything functional. The serif's light weight and slight tracking compression give headlines a refined, magazine-like quality that elevates the product positioning.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | GT Alpina | 4.75rem | 300 | 1.05 | -0.02em | Homepage and page headlines |
| section-display | GT Alpina | 3rem | 300 | 1.1 | -0.01em | Secondary headings, form page titles |
| body | Inter | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, form labels |
| body-large | Inter | 1.25rem | 400 | 1.5 | 0 | Hero subheadings, introductory text |
| label | Inter | 0.875rem | 500 | 1.4 | 0 | Buttons, tags, form field labels |
| navigation | Inter | 0.875rem | 400 | 1 | 0 | Top-bar links, utility text |

GT Alpina appears exclusively at light weight (300), leveraging its high contrast strokes for impact at large sizes. Inter handles all interface text at regular and medium weights, ensuring clarity at small sizes. The hero display size of 4.75rem creates commanding presence on the homepage, while the section display at 3rem adapts the same voice to interior pages. Body text maintains generous line height for comfortable reading of product descriptions and form instructions. Verify licensing for these families before production use.

## Layout

The layout system favors centered, single-column compositions for hero content and asymmetric two-column arrangements for functional pages. The homepage hero occupies a centered container with generous vertical padding, while the contact page splits into a left text block and right form area.

The navigation bar spans the full width with internal padding of 2rem horizontally, keeping the logo and links aligned to a consistent edge. Content sections use substantial vertical spacing—8rem between major sections—to maintain the airy, unhurried rhythm. The product diagram on the homepage sits within a rounded container that breaks the full-width pattern, creating a focal point through containment.

Horizontal margins on interior content appear to reach approximately 29rem on each side in the centered homepage layout, suggesting a narrow reading column for editorial content. The contact page uses a wider effective content area with the form occupying roughly half the available width. Grid gaps between related elements typically measure 1rem to 2rem, with tighter 0.5rem spacing for label-input pairs.

## Visual language

The visual language balances editorial sophistication with product clarity. Rounded corners appear throughout but remain restrained—8px for interactive elements, expanding to 24px for major containers and the distinctive product frame. This creates a family of related shapes without monotony.

The product diagram on the homepage introduces the most distinctive visual element: a rounded rectangle with a subtle grid texture in light purple, containing a flowchart-like illustration with icon nodes and connecting lines. This frame demonstrates how the system handles complex information visualization while maintaining its clean aesthetic. The rounded container creates a "device" or "window" metaphor that elevates the screenshot-like content.

Photography and illustration appear minimal in the captured surfaces. The interface relies on typography, spacing, and the single purple accent to create visual interest. Iconography is simple and functional, appearing in the product diagram as small colored markers rather than as a comprehensive icon system.

## Components

**Navigation bar**
- Anatomy: Logo left, text links center-left, utility links and primary CTA right
- Surface: Transparent over canvas background
- Typography: Navigation token for all links
- Spacing: 2rem horizontal padding, comfortable vertical centering
- Composition: Horizontal flex with space-between logic on outer sections

**Primary button**
- Anatomy: Text label with optional arrow icon
- Surface: Solid action purple background, white text
- Typography: Label token, medium weight
- Shape: 8px border radius
- Spacing: 0.75rem vertical padding, 1.5rem horizontal padding
- Variants: Homepage version appears slightly larger than navigation version

**Secondary button**
- Anatomy: Text label only
- Surface: Canvas-colored background with subtle border
- Typography: Label token, regular weight
- Shape: 8px border radius
- Spacing: Matching primary button dimensions

**Text input**
- Anatomy: Label above, single-line field below
- Surface: White background, light gray border
- Typography: Body token for entered text, label token for field label
- Shape: 8px border radius
- Spacing: 1rem internal padding, 0.5rem gap between label and field

**Textarea**
- Anatomy: Label above, multi-line field below with placeholder text
- Surface: White background, light gray border
- Typography: Body token
- Shape: 8px border radius
- Spacing: Generous internal padding for comfortable text entry

**File upload zone**
- Anatomy: Dashed border container with centered icon, instruction text, and helper text
- Surface: Transparent with dashed border
- Typography: Label token for primary instruction, smaller text for file type acceptance
- Shape: 8px border radius
- Spacing: Substantial vertical padding for drag-and-drop target area

**Product frame**
- Anatomy: Large rounded container with internal grid texture, containing illustrative content
- Surface: Light lavender-tinted background (#E8E4F7)
- Shape: 24px border radius
- Spacing: 3rem internal padding
- Composition: Centered within page, wider than text content above

## Responsive behavior

The captured layouts suggest a desktop-first approach with fixed-width content areas. The homepage hero maintains its centered composition, while the contact page's two-column layout would naturally stack on narrower viewports. The navigation bar's link list would likely collapse to a menu at smaller breakpoints.

The product frame's fixed aspect ratio and internal illustration would require scaling or scroll behavior on mobile. Form fields should expand to full width on narrow screens, maintaining their internal padding. Typography sizes may require reduction on mobile, particularly the 4.75rem hero display which could overwhelm smaller screens.

## Practical implementation guidance

**Preserve**
- The warm off-white canvas against pure black text; this subtle warmth distinguishes the system from generic gray-white designs
- GT Alpina's light weight for headlines; heavier weights would lose the refined editorial quality
- The scarcity of the purple accent; use it only for primary conversion actions
- Generous section spacing; the airy rhythm is essential to the premium feel

**Avoid**
- Introducing additional accent colors; the single purple against black and white is the core identity
- Heavy borders or shadows; the system relies on spacing and background color for separation
- Tight line heights on body text; the generous 1.6 leading contributes to readability
- Rounding corners beyond the established 8px/24px system; consistency matters more than novelty

**Recommended build order**
1. Establish the canvas and ink color tokens with the warm off-white background
2. Implement GT Alpina at 300 weight for hero and section display sizes
3. Build the navigation bar with Inter at navigation size
4. Create primary and secondary button components with matching padding
5. Implement form components with consistent 8px radius and border treatment
6. Add the product frame as a specialized container for homepage content

**Accessibility**
- Ensure the purple action color meets contrast requirements against white text; the visible shade appears to have sufficient darkness
- Maintain visible focus indicators on all interactive elements; the clean aesthetic should not remove accessibility affordances
- Form labels should remain visually associated with their fields through proximity and consistent spacing
- The light weight GT Alpina headlines should be tested at smaller sizes for readability; consider a minimum size threshold

## Scope note

This guide covers the homepage and contact page surfaces of figr.design. Mobile layouts, additional interior pages, dark mode, motion behavior, and comprehensive component states are not represented in the supplied material. Measurements are practical adaptation targets derived from visible desktop compositions.
