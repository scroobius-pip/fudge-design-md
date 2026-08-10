# How flowgenie.pro is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/flowgenie.pro-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with monospace headline, gradient CTA buttons, and blueprint editor preview on light background](https://pin.fontofweb.com/7689?format=jpg)](https://design.withfudge.com/share/pin-7689)

[Hero section with monospace headline, gradient CTA buttons, and blueprint editor preview on light background](https://design.withfudge.com/share/pin-7689)

[![Feature section showing form builder interface with CSS code panel and two-column layout](https://pin.fontofweb.com/7691?format=jpg)](https://design.withfudge.com/share/pin-7691)

[Feature section showing form builder interface with CSS code panel and two-column layout](https://design.withfudge.com/share/pin-7691)

[![Form-to-flow integration diagram with connected nodes and conditional logic visualization](https://pin.fontofweb.com/7690?format=jpg)](https://design.withfudge.com/share/pin-7690)

[Form-to-flow integration diagram with connected nodes and conditional logic visualization](https://design.withfudge.com/share/pin-7690)

[![Collaboration section with team workflow editor and terminal-style node interface](https://pin.fontofweb.com/7692?format=jpg)](https://design.withfudge.com/share/pin-7692)

[Collaboration section with team workflow editor and terminal-style node interface](https://design.withfudge.com/share/pin-7692)

## Overview

FlowGenie's landing page presents a visual programming platform through a design language that deliberately bridges developer credibility with approachable clarity. The system centers on a stark near-white canvas that lets complex interface screenshots and blueprint-style editor imagery command attention. Typography creates immediate hierarchy: a monospace hero headline establishes technical authority, while Geist's clean sans-serif handles all body and interface text. Color is used sparingly but decisively—gradient call-to-action buttons in blue and pink provide the primary chromatic moments against an otherwise neutral palette of blacks, grays, and subtle cool tones. The overall composition favors generous vertical breathing room, with content sections separated by substantial whitespace that prevents visual fatigue when presenting dense technical concepts. Editor screenshots and flow diagrams appear as framed panels with soft shadows, treated as first-class content rather than decorative elements.

## Colors

The color system operates on a near-monochrome foundation with selective accent deployment. The palette prioritizes readability for technical content while using gradient buttons to create memorable action points.

| token | value | use |
|---|---|---|
| canvas | #FFFFFF | Primary page background, hero area, content sections |
| ink | #171717 | Primary headings, body text, navigation |
| muted-ink | #525252 | Secondary body text, descriptions, captions |
| subtle-ink | #62748E | Tertiary text, metadata, code labels |
| action-blue | #0284C7 | Gradient endpoint, link text, active states |
| action-blue-light | #60A5FA | Gradient startpoint, hover highlights |
| action-pink | #EC4899 | Secondary gradient startpoint, alternate CTA |
| action-pink-deep | #9F1239 | Secondary gradient endpoint |
| action-indigo | #155DFC | Text links, inline actions |
| accent-teal | #1E2939 | Dark UI chrome, terminal backgrounds |

The interface maintains a predominantly light mode throughout. Dark values appear only within product screenshots showing the actual editor interface. The two gradient directions—blue cooling downward and pink warming downward—provide clear visual distinction between primary actions without competing for attention. Neutral grays handle all informational hierarchy, reserving color for interactive elements and the occasional code syntax highlight.

## Typography

The type system pairs a monospace face for hero display with Geist for all functional text, creating a developer-authentic voice without sacrificing readability.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | System-Uimonospace | 3rem | 500 | 1.25 | normal | Hero headline, technical statements |
| section-display | Geist | 3.5rem | 400 | 1.25 | normal | Major section headings |
| subsection-heading | Geist | 1.25rem | 400 | 1.5 | normal | Feature titles, card headers |
| body | Geist | 1.125rem | 400 | 1.625 | normal | Primary descriptions, paragraphs |
| body-small | Geist | 0.875rem | 400 | 1.625 | normal | Secondary text, metadata, captions |
| label | Geist | 1rem | 500 | 1.5 | normal | Button text, navigation, emphasis |
| navigation | Geist | 0.875rem | 500 | 1.25 | normal | Header links, utility text |

Geist serves as the workhorse family across all sizes from 14px to 56px, with Regular weight handling body copy and Medium reserved for labels and navigation. The monospace hero display at 48px creates immediate technical distinction, suggesting code and command-line authenticity. Line heights remain generous—1.625 for body text—to accommodate multi-line technical descriptions without crowding. Letter spacing stays neutral throughout; no tightening or loosening is applied, preserving the typefaces' intended rhythm.

The Geist family is designed by Basementstudio Andrés Briganti Mateo Zaragoza and distributed by Basementstudio Vercel Andrés Briganti Guido Ferreyra Mateo Zaragoza. Verify licensing for these families before production use.

## Layout

The page follows a centered single-column structure with controlled width for readability. The hero section occupies full viewport width with centered content, while subsequent sections introduce asymmetric two-column arrangements for feature presentations.

Content containers max out at approximately 1200px centered with auto margins, creating consistent side gutters. The hero stacks vertically: navigation bar, generous top padding (208px), headline, subheadline, button pair, social proof badge, then substantial bottom padding (144px) before the first content section. This vertical generosity signals confidence and prevents the page from feeling rushed.

Feature sections alternate between centered single-column intros and two-column splits. In the two-column layouts, imagery occupies roughly 55% width while text takes 45%, with the visual weight shifting left or right between sections to create rhythm. Editor screenshots and flow diagrams receive full-width treatment within their containers, often with subtle rounded corners and soft shadows that lift them from the canvas.

Spacing follows a clear modular system. Section vertical padding uses 96px top margins and 80px bottom padding as a standard rhythm. Content gaps within sections settle at 32px between elements. Component internal padding uses 24px for cards and panels, 16px for compact elements. The 2px relative unit allows fine-grained control without arbitrary values.

## Visual language

The visual identity draws from developer tools and integrated development environments, translated into a polished marketing context. Interface screenshots dominate the content—flow editors, form builders, and node-based programming environments appear as realistic product captures rather than stylized illustrations. These screenshots use the product's actual dark chrome (#1E2939) and syntax highlighting, creating authentic contrast against the light landing page.

Editor imagery receives subtle treatment: rounded corners at 16px, faint shadows suggesting elevation, and occasional browser-style chrome dots (red, yellow, green) in the upper left of panel captures. This framing device presents technical interfaces as approachable, contained experiences.

The gradient buttons represent the most expressive visual element. Both primary actions use linear gradients with glossy, almost dimensional surfaces—blue from #60A5FA to #0284C7, pink from #EC4899 to #9F1239. A subtle inset highlight at the top edge suggests light catching a convex surface, adding physical presence without skeuomorphic excess.

Iconography appears minimal and functional: small arrows for external links, code brackets for API references, simple geometric shapes for node types. The overall impression is of a tool serious enough for engineers but accessible enough for teams expanding beyond pure code.

## Components

**Primary action button**
- Anatomy: Text label centered within a rounded pill shape
- Surface: Linear gradient background (blue or pink direction), white text
- Typography: `{typography.label}` at 16px, Medium weight
- Shape: 12px to 16px border radius, full padding of 12px vertical and 32px horizontal
- Spacing: Paired with sibling button at 16px to 24px gap
- Composition: Centered or left-aligned in hero, inline in feature sections
- Variants: Blue gradient for primary actions, pink gradient for secondary or alternate paths

**Secondary text link**
- Anatomy: Text with trailing arrow or chevron icon
- Surface: Transparent background, colored text
- Typography: `{typography.navigation}` or `{typography.body-small}`, Medium weight
- Shape: No border radius, inline with text flow
- Spacing: Right margin of 32px when grouped, 8px internal icon gap
- Composition: Appears after primary buttons or within feature descriptions

**Feature card**
- Anatomy: Optional image or screenshot, heading, description, optional link
- Surface: Transparent background, no visible border
- Typography: `{typography.subsection-heading}` for title, `{typography.body-small}` for description
- Shape: 8px to 16px radius on image containers
- Spacing: 24px internal padding, 32px to 48px bottom margin
- Composition: Two-column grid with text left/image right or reversed

**Editor screenshot panel**
- Anatomy: Browser chrome or plain container, product screenshot, optional shadow
- Surface: `{colors.canvas}` background, `rgba(0,0,0,0.1)` shadow
- Shape: 16px radius, 0px border
- Spacing: 24px padding, generous vertical margin (96px top)
- Composition: Full-width within content container, centered

**Navigation bar**
- Anatomy: Logo left, text links center, utility action right
- Surface: Transparent or `{colors.canvas}` background
- Typography: `{typography.navigation}`
- Shape: No border, no radius
- Spacing: 24px horizontal padding, 16px vertical
- Composition: Flex row, space-between alignment

**Form input (within screenshots)**
- Anatomy: Label text, input field, optional helper text
- Surface: `{colors.canvas}` background, subtle border
- Typography: `{typography.body-small}` for labels, `{typography.body}` for input text
- Shape: 8px radius, 1px border
- Spacing: 16px vertical gap between fields, 10px to 16px internal padding

## Responsive behavior

The layout assumes desktop viewport widths where the two-column feature grids and side-by-side button arrangements function as designed. At narrower viewports, the two-column feature sections should stack vertically, with imagery preceding text to maintain visual interest. The hero headline at 48px monospace should reduce to 32px or 36px on smaller screens to prevent horizontal overflow and maintain comfortable line lengths.

Navigation links in the header should collapse to a hamburger menu or simplify to essential items on mobile. Editor screenshots, which contain dense interface detail, should remain visible at reduced scale rather than being replaced; users expect to see the actual product interface. The gradient buttons should maintain their horizontal pairing on tablet widths but stack vertically on phones with full-width treatment.

The substantial hero padding (208px top, 144px bottom) should compress to roughly 96px top and 64px bottom on mobile to respect viewport proportions. Section spacing should similarly reduce from 96px to 48px between content blocks.

## Practical implementation guidance

**Preserve**
- The monospace hero headline paired with sans-serif body; this technical-authenticity signal is central to the brand
- Generous whitespace around editor screenshots; crowding these dense images undermines their impact
- The two distinct gradient directions for CTAs; this color logic helps users distinguish action types
- Rounded corners on all interactive elements and image containers; the 8px to 16px range creates consistent softness

**Avoid**
- Adding borders to cards or sections that don't have them in the source; the design relies on whitespace and subtle shadows for separation
- Using the dark editor chrome colors (#1E2939) for landing page backgrounds; reserve these for product imagery only
- Tightening line heights below 1.5 for body text; technical descriptions need breathing room
- Introducing additional accent colors beyond the blue-pink gradient pair; the restrained palette is intentional

**Recommended build order**
1. Establish the canvas background and Geist type scale across all body text sizes
2. Implement the hero section with monospace headline, centered layout, and full padding
3. Add the two gradient button styles with correct color stops and inset highlight
4. Build the navigation bar with logo, links, and utility action
5. Create the two-column feature section pattern with reversible image/text order
6. Style editor screenshot containers with radius, shadow, and optional browser chrome
7. Refine spacing tokens against actual content density

**Accessibility**
- Ensure gradient buttons meet contrast requirements; the white text on blue gradient passes WCAG AA, but verify the pink direction independently
- Provide visible focus states for all interactive elements; the source shows no custom focus treatment, so implement at minimum a 2px outline offset
- Maintain semantic heading hierarchy; the h1 monospace hero should not be skipped in favor of styled divs
- Add descriptive alt text to all editor screenshots, as these convey core product functionality
- Consider reduced-motion preferences for any scroll-triggered animations; the static source suggests motion is not essential to the experience

## Scope note

This guide covers the FlowGenie landing page hero and feature sections as visible in the supplied captures. Pricing, documentation, changelog, and authenticated application interfaces are not represented. Mobile breakpoints, hover states, form validation feedback, and the actual editor interface beyond its screenshot presentation are not documented.
