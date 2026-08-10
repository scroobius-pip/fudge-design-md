# How milanote.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/milanote.com-design)

Last updated: 2026-08-10

## Captured pages

[![Registration page with playful collage-style illustration, orange Submit button, and centered form on light gray background](https://pin.fontofweb.com/869?format=jpg)](https://design.withfudge.com/share/pin-869)

[Registration page with playful collage-style illustration, orange Submit button, and centered form on light gray background](https://design.withfudge.com/share/pin-869)

[![Security section with orange padlock illustration, serif heading, and bullet list on pale gray surface](https://pin.fontofweb.com/868?format=jpg)](https://design.withfudge.com/share/pin-868)

[Security section with orange padlock illustration, serif heading, and bullet list on pale gray surface](https://design.withfudge.com/share/pin-868)

[![User journey planning section with card-based flow diagram, green and blue accent borders, and orange link text](https://pin.fontofweb.com/867?format=jpg)](https://design.withfudge.com/share/pin-867)

[User journey planning section with card-based flow diagram, green and blue accent borders, and orange link text](https://design.withfudge.com/share/pin-867)

[![Product manager landing hero with dark charcoal background, large serif headline, orange CTA, and app interface screenshot](https://pin.fontofweb.com/866?format=jpg)](https://design.withfudge.com/share/pin-866)

[Product manager landing hero with dark charcoal background, large serif headline, orange CTA, and app interface screenshot](https://design.withfudge.com/share/pin-866)

## Overview

Milanote's design system balances editorial sophistication with creative playfulness. The visual language centers on a warm, energetic orange accent against restrained neutrals, creating an inviting atmosphere for creative professionals organizing visual projects. Large serif display typography—set in Tiempos Text—establishes authority and craft, while the geometric sans-serif Inter handles functional body text and interface labels with clarity. The system's distinctive personality emerges through collage-style illustrations that combine halftone textures, bold black shapes, and vibrant orange accents. These illustrations appear across marketing pages, registration flows, and feature sections, unifying the brand experience. The layout philosophy favors generous whitespace, centered content blocks, and card-based information architecture that mirrors the product's own board-and-card interface. Dark hero sections alternate with light content areas to create visual rhythm and emphasize key conversion moments.

## Colors

The color palette is intentionally restrained, allowing the orange action color and collage illustrations to carry emotional weight. Four core colors define the interface:

| token | value | use |
|---|---|---|
| ink | #1A1A1A | Primary text, headings, and strong UI elements |
| muted-ink | #6B6B6B | Secondary text, descriptions, and helper copy |
| canvas | #F5F5F5 | Page backgrounds, section alternation, and illustration grounds |
| surface | #FFFFFF | Cards, forms, input fields, and elevated content containers |
| action | #F05A28 | Primary buttons, links, and accent highlights |
| action-hover | #D94E1F | Button hover states and interactive emphasis |
| border | #E0E0E0 | Card outlines, input borders, and subtle dividers |
| dark-surface | #2D2D3A | Hero sections, dark promotional panels, and high-contrast moments |

The palette operates in two primary modes. Light mode dominates: white cards and forms float on warm gray canvas backgrounds, with orange drawing attention to calls-to-action and linked resources. Dark mode appears strategically in hero sections, where the deep charcoal surface creates dramatic contrast for large serif headlines and orange buttons. The orange action color is consistently saturated and warm, avoiding the cooler reds common in corporate interfaces. This warmth aligns with the hand-crafted, creative positioning of the product. Illustrations introduce additional colors—teal, yellow, green, blue—within their own contained compositions, but these remain illustrative rather than interface colors.

## Typography

Milanote pairs a refined serif with a neutral sans-serif, creating hierarchy through contrast in genre rather than weight alone. Tiempos Text, designed by Kris Sowersby at Klim Type Foundry, serves all display and editorial headings. Inter, designed by Rasmus Andersson, handles body copy, labels, navigation, and interface elements. Source Sans Pro appears in the font sources but is not visibly dominant in the captured interfaces.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Tiempos Text | 3.5rem | 600 | 1.1 | -0.02em | Landing page heroes, major section headlines |
| section-display | Tiempos Text | 2rem | 600 | 1.2 | -0.01em | Feature section headings, card titles |
| body | Inter | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, form labels |
| body-medium | Inter | 1rem | 500 | 1.6 | 0 | Button text, emphasized body, navigation |
| label | Inter | 0.875rem | 500 | 1.4 | 0 | Form field labels, small headings |
| navigation | Inter | 0.875rem | 500 | 1.4 | 0 | Header navigation, utility links |
| legal-copy | Inter | 0.75rem | 400 | 1.5 | 0 | Captions, terms, privacy notices |

Tiempos Text at 600 weight provides substantial presence without heaviness, its slightly condensed proportions allowing large headlines without excessive line breaks. The negative letter spacing on display sizes tightens word spacing optically, compensating for the serif's inherent openness. Inter's medium weight (500) is used sparingly for interactive elements, maintaining clear distinction from regular body text without requiring bold. Verify licensing for these families before production use.

## Layout

The layout system relies on centered content blocks with generous vertical breathing room. Sections typically span full viewport width with internal max-width constraints, creating framed compositions that feel spacious without edge-to-edge clutter.

The base spacing unit is 0.25rem, with semantic multiples defining practical layout tokens. Section spacing of 5rem separates major content areas, while 1.5rem gaps maintain rhythm within component groups. Card padding of 1.5rem creates consistent internal margins for bordered containers.

Page structures follow predictable patterns: a dark hero section with left-aligned or centered headline and call-to-action, followed by alternating light sections with feature descriptions and product screenshots. The registration page inverts this slightly, centering a white form card on a light gray ground with illustration fragments bleeding from the edges.

Grid behavior is implicit rather than rigid. Feature sections often use asymmetric two-column layouts—text left, visual right, or vice versa—with the visual column frequently containing layered cards, diagrams, or interface mockups. The card-based flow diagrams in the user journey section demonstrate this: connected cards with colored top borders cascade diagonally, suggesting process and relationships without enforcing strict grid alignment.

Form layouts use stacked full-width fields with clear label-field pairs, occasionally splitting related fields like first and last name into equal columns. Buttons within forms span full width, emphasizing the primary action.

## Visual language

Milanote's visual identity is defined by the interplay between editorial restraint and creative exuberance. The collage illustrations are the most distinctive element: halftone-textured geometric shapes, bold black silhouettes, and selective orange accents combine in compositions that feel handmade and spontaneous. These illustrations often break the frame, with elements bleeding beyond card edges or appearing to float in the page margins.

The illustration style carries specific characteristics: grainy halftone dots create tonal variation on flat shapes; thick black outlines and solid fills provide graphic weight; orange appears as both flat color and textured gradient; and simple facial features on abstract forms add approachable personality. The security padlock illustration demonstrates this clearly—an orange body with halftone shading, black keyhole, and gray metallic shackle, all rendered with visible texture rather than smooth vectors.

Product screenshots are presented with care: interface mockups show realistic content within the Milanote application, complete with colored category icons, checklists, and embedded media. These screenshots often appear at slight angles or with subtle depth, suggesting physical boards without excessive skeuomorphism.

Iconography within the product interface uses simple, filled shapes in rounded squares—purple for documents, orange for roadmaps, green for tasks—creating a recognizable visual vocabulary that extends the brand color system into functional contexts.

## Components

**Primary Action Button**

- Anatomy: Text label centered within a solid filled rectangle
- Surface and text color: Orange action background (#F05A28) with white text
- Typography: Inter Medium, 1rem, line-height 1.6
- Shape: Slight border radius (0.25rem), no visible border
- Spacing: 0.75rem vertical padding, 1.5rem horizontal padding
- Composition: Full-width within forms, intrinsic width in hero contexts
- Variants: Dark hero variant maintains same styling; secondary variant uses white background, dark text, and light border for social sign-in options

**Form Card**

- Anatomy: White container with stacked label-field pairs, checkboxes, action buttons, and footer text
- Surface: White (#FFFFFF) with subtle shadow or border
- Typography: Inter for labels and inputs; Tiempos Text for page heading above the card
- Shape: 0.5rem border radius, creating a soft panel appearance
- Spacing: 1.5rem internal padding; 1rem gaps between field groups
- Composition: Centered on page with illustration fragments visible at edges; maximum width constrains readability
- States: Input fields show light gray borders (#E0E0E0) with placeholder text in muted gray

**Feature Card (Flow Diagram)**

- Anatomy: White card with colored top border, title, and description text; connected to other cards by thin lines
- Surface: White with 1px light gray border; top border in accent colors (green, blue, orange)
- Typography: Tiempos Text Semibold for card titles; Inter Regular for body descriptions
- Shape: 0.5rem border radius
- Spacing: 1.5rem padding; cards offset vertically and horizontally to create flow
- Composition: Cards arranged in cascading relationship, with thin connector lines suggesting sequence

**Dark Hero Section**

- Anatomy: Full-width section with large serif headline, supporting description, and orange call-to-action button
- Surface: Deep charcoal (#2D2D3A) background
- Typography: Tiempos Text at 3.5rem for headline; Inter Regular at 1rem for description
- Shape: No border radius; extends full bleed
- Spacing: Generous vertical padding (5rem+); left-aligned content with comfortable measure
- Composition: Text block left, product screenshot or illustration right; screenshot often overlaps section boundary

**Security/Trust Section**

- Anatomy: Light gray background with illustration left, text content right
- Surface: Pale gray (#F5F5F5) with no card container
- Typography: Tiempos Text at 2rem for heading; Inter Regular for body and bullet list
- Shape: Illustration floats without frame
- Spacing: 5rem vertical section padding; comfortable gap between image and text
- Composition: Two-column asymmetric layout; bullet markers are simple dots with generous line spacing

## Responsive behavior

The design adapts through proportional scaling and stack rearrangement. Hero headlines should reduce from 3.5rem to approximately 2.5rem on narrower viewports, maintaining line breaks that preserve semantic phrasing. Two-column feature sections should stack vertically, with illustrations preceding text to maintain visual interest above the fold.

Form cards should remain centered with reduced horizontal margins, maintaining internal padding at 1.5rem minimum for touch targets. Full-width buttons in forms should retain their span to remain easily tappable.

The cascading card diagrams should simplify on narrow screens, potentially collapsing to a vertical stack with connector lines becoming implicit through proximity and numbering rather than drawn paths.

Dark hero sections should maintain their atmospheric quality by ensuring sufficient contrast ratios; the charcoal background with white text exceeds accessibility thresholds, but care should be taken if overlaying images or reducing headline sizes.

## Practical implementation guidance

**Preserve**
- The serif/sans-serif pairing: Tiempos Text for display, Inter for everything functional
- The warm orange action color against restrained neutrals
- Generous whitespace and centered content framing
- Collage illustration style with halftone texture and bold black accents
- Card-based information architecture with subtle borders and light shadows

**Avoid**
- Cool reds or corporate blues replacing the warm orange
- Heavy drop shadows or excessive elevation on cards
- Tight letter spacing on body text; reserve negative tracking for display sizes only
- Borderless form fields; maintain the light gray input borders for affordance
- Pure black (#000000) for text; the slightly warm ink (#1A1A1A) reduces harshness

**Recommended Build Order**
1. Establish color tokens and typography scale with Tiempos Text and Inter
2. Build the dark hero section component as the primary conversion template
3. Create the form card component with full-width primary action and secondary social buttons
4. Develop feature card variants with colored top borders for process diagrams
5. Implement the light section layout with asymmetric two-column composition
6. Add collage illustration system with texture treatments and color constraints

**Accessibility**
- Ensure orange action buttons maintain 3:1 contrast against white; the #F05A28 orange meets this for large text but verify for smaller sizes
- Provide visible focus states on all interactive elements, likely using the orange with increased outline offset
- Use semantic heading hierarchy: single H1 per page, logical progression through section headings
- Form labels should remain visible and persist above fields; placeholder text alone is insufficient
- Illustrations should have appropriate alt text describing their conceptual content rather than decorative absence

## Scope note

This guide covers Milanote's marketing and registration surfaces as visible in the supplied captures. The product interface itself—boards, cards, editing tools, and collaboration features—is represented only through screenshots and mockups within these marketing pages. Mobile layouts, animation behavior, loading states, and error handling are not documented. Measurements are practical adaptation targets derived from visual inspection.
