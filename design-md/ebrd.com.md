# How ebrd.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ebrd.com-design)

Last updated: 2026-08-10

## Captured pages

[![Cookie consent banner with dark navy background, lime green primary button, and outlined secondary button showing clear two-tone action pattern](https://pin.fontofweb.com/2619?format=jpg)](https://design.withfudge.com/share/pin-2619)

[Cookie consent banner with dark navy background, lime green primary button, and outlined secondary button showing clear two-tone action pattern](https://design.withfudge.com/share/pin-2619)

[![Homepage hero with large display typography, architectural photography with rounded corners, statistics with green accent bars, and full navigation header](https://pin.fontofweb.com/2618?format=jpg)](https://design.withfudge.com/share/pin-2618)

[Homepage hero with large display typography, architectural photography with rounded corners, statistics with green accent bars, and full navigation header](https://design.withfudge.com/share/pin-2618)

## Overview

The European Bank for Reconstruction and Development website presents a formal, authoritative visual system balanced with approachable warmth. The design communicates institutional credibility through a deep navy foundation while injecting energy and forward momentum through bright lime green accents. The homepage opens with a spacious hero composition: large humanist display typography sits left-aligned against a clean off-white canvas, paired with rounded-corner photography that softens the institutional tone. A consistent two-level navigation structure provides wayfinding without visual heaviness, and the overall density remains breathable with generous whitespace between content zones. The system prioritizes clarity and trust, using photography of infrastructure and people to ground abstract financial concepts in tangible human outcomes. Every element reinforces the bank's positioning as a modern, transparent, and impact-focused institution.

## Colors

The color system rests on a high-contrast pairing of deep navy and bright lime green, with neutral support from pure white and warm off-white. This creates a distinctive institutional palette that avoids the coldness of traditional banking blues.

| token | value | use |
|---|---|---|
| navy | #0A2540 | Primary brand color, navigation bar background, body text on light surfaces, footer and banner backgrounds |
| navy-deep | #051E34 | Deeper variant for cookie consent banner and emphasis surfaces |
| lime | #7ED321 | Primary action color, accent bars for statistics, energy and progress indicator |
| white | #FFFFFF | Primary canvas, button text on dark backgrounds, navigation text on navy |
| off-white | #F5F5F5 | Page background, hero section canvas, content area fill |
| ink | #1A1A1A | Maximum contrast text, display headings |
| muted-ink | #4A4A4A | Secondary body text, captions, supporting descriptions |

The navy establishes authority and trust across all major structural surfaces. The lime green functions as a single vibrant accent reserved for calls-to-action and progress indicators, creating clear visual hierarchy without chromatic noise. Photography introduces warmer tones—terracotta, sage, and sky blue—that harmonize with the cool institutional base. Dark surfaces use white text at high contrast; light surfaces use navy or ink text. The system does not show a dark mode variant in the supplied material.

## Typography

Two font families create a clear role separation: Bellota Text for display moments and Noto Sans for all functional and body text. Bellota Text, designed by Kemie Guaida, brings a humanist warmth with its slightly rounded letterforms and open counters, making institutional messaging feel approachable rather than austere. Noto Sans, from the Monotype Design Team, provides neutral, highly legible text across all sizes and weights with extensive language coverage appropriate for a multilateral institution.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Bellota Text | 3.5rem | 400 | 1.1 | -0.01em | Homepage hero headlines, major section titles |
| section-display | Bellota Text | 2rem | 400 | 1.2 | 0 | Secondary headlines, feature titles |
| body | Noto Sans | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, general content |
| body-medium | Noto Sans | 1rem | 500 | 1.6 | 0 | Emphasized body text, introductory paragraphs |
| label | Noto Sans | 0.875rem | 600 | 1.4 | 0.02em | Buttons, tags, category labels, navigation items |
| navigation | Noto Sans | 0.875rem | 500 | 1 | 0.01em | Top navigation, dropdown triggers, utility links |

Display sizes use Bellota Text at weights 400 only, relying on size and color for emphasis rather than heavier weights. The hero display at 3.5rem creates commanding presence without aggression. Body text at 1rem with 1.6 line height ensures comfortable reading for extended institutional content. Labels and navigation at 0.875rem maintain clarity at small sizes with slightly tightened leading. Verify licensing for these families before production use.

## Layout

The layout follows a centered container model with generous horizontal margins. The navigation bar spans full width with a navy background, containing a left-aligned logo lockup, center-weighted primary navigation, and right-aligned utilities including search and language selection. Below this, content sections alternate between full-bleed imagery and contained text blocks.

The homepage hero uses an asymmetric two-column composition: approximately 45% width for text content with left alignment and generous right padding, and 55% width for a dominant photographic element with substantial rounded corners. This creates visual tension between the rational, structured text and the organic, immersive image. Statistics appear as inline blocks below the hero description, each preceded by a vertical lime accent bar.

Spacing follows a modular system based on 0.25rem units. Major section breaks use 5rem vertical padding. Component internal spacing uses 1.5rem. The overall density is low, with ample breathing room that reinforces the institution's transparency and openness. Content never crowds the edges; even full-width imagery maintains internal padding through its rounded container.

The grid appears to use a 12-column foundation with content constrained to approximately 10 columns maximum for readability. Text blocks maintain a comfortable measure of 60-75 characters per line. Images break this containment on the right side, creating dynamic asymmetry that draws the eye through the page.

## Visual language

Photography treatment defines much of the site's character. Images receive large, consistent rounding at corners—approximately 2rem radius on the hero image, creating a pill-like softness that contrasts with the rectilinear grid. This rounded treatment appears on all photography, from the large hero to smaller supporting images, unifying diverse subjects under a single friendly gesture.

The lime green accent appears sparingly and purposefully: as vertical bars preceding statistics, as the fill for primary buttons, and potentially as progress indicators. This restraint prevents the bright hue from overwhelming the sober institutional tone. The accent bars are thin and tall, functioning as typographic punctuation rather than decorative elements.

Iconography uses Linearicons, a clean line-icon system, for functional indicators like search, language selection, and dropdown chevrons. These remain small, neutral, and subordinate to text labels.

The overall visual rhythm alternates between structured, text-heavy zones and immersive photographic moments. A subtle background pattern of thin curved lines appears in the hero section, adding depth without competing with content. These lines echo the circular forms in the hero photograph, creating thematic cohesion between photography and graphic elements.

## Components

**Primary action button**
- Anatomy: Text label centered within a fully rounded pill shape
- Surface: Solid lime green background (#7ED321) with navy text (#0A2540)
- Typography: label token, 0.875rem, semibold weight
- Shape: Full pill border radius (9999px), no border
- Spacing: 0.75rem vertical padding, 1.5rem horizontal padding
- Composition: Standalone or paired with secondary action

**Secondary action button**
- Anatomy: Text label centered within a fully rounded pill shape with hairline border
- Surface: Transparent background with white text (#FFFFFF) and 1px white border
- Typography: label token, 0.875rem, semibold weight
- Shape: Full pill border radius (9999px)
- Spacing: 0.75rem vertical padding, 1.5rem horizontal padding
- Composition: Paired with primary action on dark backgrounds, as seen in cookie banner

**Cookie consent banner**
- Anatomy: Full-width bar with left-aligned text block and right-aligned button stack
- Surface: Deep navy background (#051E34)
- Typography: Section title in section-display token (white), description in body token (white)
- Shape: No border radius, fixed to viewport bottom
- Spacing: Generous internal padding, approximately 1.5rem all sides
- Composition: Two buttons stacked vertically on the right, primary above secondary

**Navigation bar**
- Anatomy: Full-width bar with three zones: logo left, primary nav center, utilities right
- Surface: Navy background (#0A2540) for top bar, white background for main nav
- Typography: navigation token for all items, dropdown triggers include chevron icon
- Shape: No border radius, full-bleed width
- Spacing: Approximately 1rem vertical padding, items spaced with 1.5-2rem gaps
- Composition: Logo lockup includes circular mark and wordmark; search presented as pill-shaped input with icon

**Statistics block**
- Anatomy: Number and label pair, preceded by vertical accent bar
- Surface: Transparent, inherits section background
- Typography: Number in section-display token (navy), label in body token (muted-ink)
- Shape: 0.25rem wide lime green vertical bar, full height of text block
- Spacing: 1rem padding between bar and text
- Composition: Multiple statistics arranged horizontally with generous gaps

**Hero image container**
- Anatomy: Single large photograph with rounded corners
- Surface: Photographic content with no overlay
- Shape: Approximately 2rem border radius on all corners, creating soft rectangle
- Spacing: Fills right portion of hero section, breaks grid containment
- Composition: May include subtle internal circular graphic elements that echo the rounded corner treatment

## Responsive behavior

The two-column hero composition should stack vertically on narrower viewports, with the image moving above or below the text block. The asymmetric proportion may shift to full-width for both elements. Navigation items with dropdowns should collapse to a menu trigger on small screens, preserving the search and language utilities in a compressed form.

The cookie consent banner's side-by-side layout should stack to vertical on narrow screens, with buttons expanding to full width. Statistics blocks should wrap to multiple lines rather than compressing horizontally. Rounded image corners may reduce slightly on smaller screens to maintain proportional relationship to reduced dimensions.

Type sizes should scale down modestly: hero-display may reduce to 2.5rem, section-display to 1.5rem. Body text should remain at 1rem for readability. Line heights can increase slightly at smaller sizes to maintain comfortable reading rhythm.

## Practical implementation guidance

**Preserve**
- The distinctive pairing of deep navy authority with lime green energy; this contrast is central to brand recognition
- Large, consistent rounded corners on all photography; this softening treatment differentiates the institutional tone
- The two-font system with Bellota Text reserved exclusively for display and Noto Sans for everything functional
- Generous whitespace and low content density; the breathable layout communicates transparency
- The vertical lime accent bar as the sole decorative element for statistics and emphasis

**Avoid**
- Adding additional accent colors beyond the lime green; the restrained palette is intentional
- Using Bellota Text at small sizes or for body content; its humanist details lose clarity below display sizes
- Sharp-cornered imagery; this would break the approachable visual character
- Heavy drop shadows or dimensional effects; the system relies on flat color and photography for depth
- Center-aligned display text; the left-aligned, asymmetric composition creates purposeful visual tension

**Recommended build order**
1. Establish the color tokens and apply navy/off-white page foundation
2. Implement Noto Sans at body and label sizes for all functional text
3. Add Bellota Text at hero-display and section-display sizes with careful line-height tuning
4. Build the navigation structure with full-width navy bar and white secondary bar
5. Create the rounded image component with consistent 2rem radius
6. Implement the two-button pattern with lime primary and outlined secondary variants
7. Add the statistics block with vertical lime accent bars
8. Refine spacing and responsive stacking behavior

**Accessibility**
- Ensure lime green buttons maintain minimum 4.5:1 contrast ratio against navy text; the combination appears to meet this threshold
- Provide visible focus states for all interactive elements, likely using a navy or white outline offset from button shapes
- Preserve text alternatives for all photography, describing the human and infrastructure subjects meaningfully
- Maintain logical tab order through the navigation dropdowns and cookie consent buttons
- Consider reduced motion preferences for any animated transitions, particularly for the cookie banner entrance

## Scope note

This guide covers the homepage hero, navigation, cookie consent, and statistics components visible in the supplied images. Interior pages, additional components, form patterns, table styles, and footer content are not represented. Motion behavior, hover states, focus indicators, and mobile-specific layouts were not captured and should be designed to complement the visible system. Measurements are practical adaptation targets.
