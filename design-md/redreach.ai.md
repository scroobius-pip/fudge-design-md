# How redreach.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/redreach.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Parasite SEO feature page with green-accented hero, Google search mockup, and orange CTA button on warm off-white canvas](https://pin.fontofweb.com/10189?format=jpg)](https://design.withfudge.com/share/pin-10189)

[Parasite SEO feature page with green-accented hero, Google search mockup, and orange CTA button on warm off-white canvas](https://design.withfudge.com/share/pin-10189)

[![Lead generation feature page showing feature list with icons, inbound/outbound UI mockups, and orange-purple gradient accents](https://pin.fontofweb.com/10188?format=jpg)](https://design.withfudge.com/share/pin-10188)

[Lead generation feature page showing feature list with icons, inbound/outbound UI mockups, and orange-purple gradient accents](https://design.withfudge.com/share/pin-10188)

[![Homepage hero with 'Get Customers from Reddit' headline, Reddit logo badge, gradient CTA, and floating Reddit post cards](https://pin.fontofweb.com/10186?format=jpg)](https://design.withfudge.com/share/pin-10186)

[Homepage hero with 'Get Customers from Reddit' headline, Reddit logo badge, gradient CTA, and floating Reddit post cards](https://design.withfudge.com/share/pin-10186)

[![Pricing page with three-tier cards, orange 'Recommended' badge, monthly/yearly toggle, and detailed feature checklists](https://pin.fontofweb.com/10185?format=jpg)](https://design.withfudge.com/share/pin-10185)

[Pricing page with three-tier cards, orange 'Recommended' badge, monthly/yearly toggle, and detailed feature checklists](https://design.withfudge.com/share/pin-10185)

## Overview

Redreach.ai presents a modern SaaS identity built on the tension between editorial warmth and technical precision. The visual system pairs the humanist serif Recoleta for display typography against the neutral, highly legible Inter for all body and interface text. This combination creates immediate brand recognition: the serif headings feel trustworthy and editorial, while the sans-serif body maintains the clarity expected of a productivity tool.

The color story centers on a vibrant orange gradient family that evokes energy and action without the aggression of pure red. This orange anchors every conversion moment—primary buttons, highlighted pricing tiers, accent badges, and gradient backgrounds. Supporting palettes of soft green and purple appear in feature-specific contexts, creating visual variety while maintaining hierarchy. The overall canvas is warm off-white rather than stark white, reducing eye strain and lending an approachable, premium feel.

The layout philosophy favors generous whitespace, rounded containers, and centered content blocks that feel spacious on desktop. Feature pages use asymmetric two-column compositions with text on one side and illustrative UI mockups on the other. The homepage and pricing pages employ card-based layouts with consistent border treatments and subtle shadows to create depth without heaviness.

## Colors

The palette is built around a warm neutral foundation with a vibrant orange action family and two supporting accent colors for feature differentiation.

| token | hex | use |
|---|---|---|
| action | #FD5B1D | Primary buttons, highlighted borders, active states, gradient endpoints |
| action-hover | #FB5118 | Button hover states, darker gradient stops |
| action-muted | #FDBA74 | Subtle orange backgrounds, inactive toggle states |
| ink | #0F172A | Primary headings, hero display text, logo mark |
| ink-secondary | #1E293B | Section headings, card titles, emphasized body |
| ink-tertiary | #334155 | Subheadings, feature titles in lists |
| muted-ink | #475569 | Body text, descriptions, secondary content |
| canvas | #FFFFFF | Primary page background, card surfaces, input backgrounds |
| surface | #FCF8F4 | Warm off-white page sections, alternating backgrounds |
| surface-warm | #FFF7ED | Orange-tinted feature sections, pricing highlight backgrounds |
| surface-green | #F0FDF4 | Green-themed feature sections, success states |
| surface-purple | #FAF5FF | Purple-themed feature sections, alternative feature highlights |
| border | #E5E7EB | Default card borders, dividers, input borders |
| border-warm | #FED7AA | Highlighted card borders, orange accent outlines |
| border-green | #86EFAC | Green accent borders, success indicators |
| border-purple | #D8B4FE | Purple accent borders, alternative feature outlines |
| success | #16A34A | Green badges, checkmarks, positive indicators |
| success-light | #22C55E | Lighter green accents, gradient endpoints |
| accent-purple | #A855F7 | Purple badges, gradient endpoints, feature icons |
| accent-purple-deep | #9333EA | Darker purple for emphasis, gradient stops |

The orange gradient appears in multiple forms: linear gradients for buttons and text accents (`linear-gradient(90deg, #FE6422, #FA4A13)`), radial gradients for hero backgrounds (`radial-gradient(125% 125% at 50% 10%, #FFFFFF 55%, #FF4500 100%)`), and conic gradients for animated accent elements. Green gradients support the Parasite SEO feature page (`linear-gradient(90deg, #16A34A, #059669)`), while purple gradients appear in alternative feature contexts (`linear-gradient(to right, #A855F7, #9333EA)`).

Text color follows a clear hierarchy: near-black ink for headings, slightly lighter ink-secondary for subheadings, and muted-ink for body copy. The warm off-white surface color creates subtle section alternation without jarring contrast shifts.

## Typography

The type system relies on four families with distinct roles. Recoleta carries all display and heading weight with its warm, editorial character. Inter handles every pixel of body text, labels, and interface elements with neutral clarity. Urbanist appears exclusively for the logo wordmark, providing geometric distinction. Applesystem serves as a system-level fallback at 14px for native UI chrome and unstyled containers.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Recoleta | 4.5rem | 700 | 1 | -0.03em | Homepage hero, major page titles |
| section-display | Recoleta | 3rem | 700 | 1.1 | -0.02em | Section headings, feature page titles |
| subhead-display | Recoleta | 2.25rem | 600 | 1.2 | -0.01em | Card titles, pricing tier names |
| body-large | Inter | 1.125rem | 400 | 1.75 | 0em | Hero descriptions, feature explanations |
| body | Inter | 1rem | 400 | 1.5 | 0em | Default paragraph text, navigation |
| body-medium | Inter | 1rem | 500 | 1.5 | 0em | Emphasized body, button labels |
| label | Inter | 0.875rem | 500 | 1.25 | 0em | Buttons, badges, form labels |
| caption | Inter | 0.75rem | 500 | 1.33 | 0em | Small labels, metadata, tags |
| navigation | Inter | 1rem | 400 | 1.5 | 0em | Header links, footer links |
| logo-wordmark | Urbanist | 1.875rem | 600 | 1.2 | 0em | Brand logo text |

Recoleta is used in weights 500 (Medium), 600 (Semi Bold), and 700 (Bold). The 700 weight dominates display headings, while 600 appears in subheadings and emphasized inline text. Inter spans 400 (Regular), 500 (Medium), and 600 (Semi Bold) for interface hierarchy. Urbanist at 600 provides the logo's geometric presence. Applesystem appears at 14px/400 as a fallback for unstyled divs and system-level containers.

Display sizes use tight negative letter spacing for visual impact: -0.03em at hero scale, -0.02em at section scale. Body text maintains neutral tracking. Line heights are tight for display (1 to 1.2) and generous for reading (1.5 to 1.75).

Recoleta was designed by Jorge Cisterna and is available from Latinotype Ltda. Urbanist was designed by Corey Hu. Verify licensing for these families before production use.

## Layout

The layout system is built on a centered container model with generous horizontal padding and substantial vertical section spacing.

**Container structure:** Content lives within centered containers that max out at comfortable reading widths. The standard container uses `padding: 0 2rem` (32px) with auto margins. Wider hero sections extend to `padding: 0 4rem` (64px). Narrow centered text blocks for testimonials and section descriptions constrain to approximately 55-60 characters per line.

**Section spacing:** Vertical rhythm follows a clear hierarchy. Major sections receive `padding: 6rem 0` (96px) top and bottom. Tighter sections use `padding: 4rem 0` (64px). Hero sections often use asymmetric padding with `padding-top: 1.5rem` (24px) and `padding-bottom: 6rem` (96px) to accommodate the fixed header.

**Grid patterns:** The homepage hero uses a two-column asymmetric split with text content on the left (approximately 45%) and illustrative UI mockups on the right (approximately 55%). Feature pages alternate this pattern. Pricing uses a three-column grid with equal-width cards. Feature lists stack vertically with consistent item spacing.

**Card spacing:** Internal card padding follows a scale: `1.5rem` (24px) for standard cards, `2rem` (32px) for pricing cards, and `1rem` (16px) for compact feature items. Gap between grid cards is typically `2rem` (32px) to `3rem` (48px).

**Negative margins:** The system employs negative margins for visual overlap effects. Hero images and floating cards often use `margin-top: -3rem` (-48px) or `margin-top: -6rem` (-96px) to break section boundaries and create depth.

**Header:** The fixed header uses `padding: 0.75rem 2rem` (12px 32px) with a subtle bottom margin of `1.25rem` (20px). Navigation links are spaced with `gap: 1rem` (16px) in the desktop menu.

## Visual language

**Shape language:** The system is overwhelmingly rounded. Cards and panels use `1.5rem` (24px) radius. Buttons use `0.75rem` (12px) radius. Badges and pills use full `9999px` radius. Inputs use `1rem` (16px) radius. This consistent rounding creates a friendly, approachable character that softens the technical subject matter.

**Shadow system:** Two primary shadow levels create depth hierarchy. The standard card shadow is `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)`—visible but not heavy. A lighter shadow `0 1px 2px 0 rgba(0,0,0,0.05)` appears for subtle elevation on badges and small elements. Special contexts use colored shadows: orange-tinted shadows for highlighted pricing cards, and multi-layered shadows for floating UI mockups.

**Border treatments:** Most cards use `1px solid` borders in the default border color. Highlighted states upgrade to `2px` in warm orange or feature-specific colors. The pricing page's recommended tier uses a `2px` orange border with an additional orange shadow layer.

**Gradient patterns:** Gradients serve multiple purposes. Hero backgrounds use radial gradients that fade from white center to orange edge, creating a soft glow effect. Buttons use linear gradients with three stops for dimensional depth. Text accents use sharp linear gradients for emphasis. Feature sections use subtle warm gradients (`linear-gradient(to right bottom, #FFF7ED, #FFFBEB)`) for background texture.

**Iconography and badges:** Small circular icons with colored backgrounds precede feature list items. Green circles with white checkmarks indicate included features. Orange circles with white icons mark feature categories. Text badges use pill shapes with colored backgrounds and matching text—green for "Parasite SEO Tool for Reddit," orange for "The Strategy," purple for feature categories.

**Imagery style:** UI mockups dominate the visual content. These are rendered with realistic shadows, rounded corners, and subtle perspective tilts to suggest depth. Screenshot-style cards float at slight angles with soft shadows. The Reddit brand mark appears as an orange circular badge with the alien logo.

## Components

**Primary button**
- Anatomy: Text label with optional right arrow icon, contained within a rounded rectangle
- Surface: Linear gradient background (`#FF6B2B` to `#E8501A`) with white text
- Typography: `{typography.label}` at 500 weight
- Shape: `0.75rem` (12px) radius, padding `0.375rem 0.75rem` (6px 12px) for compact, `0.875rem 1.25rem` (14px 20px) for prominent
- Spacing: Internal gap of `0.25rem` (4px) between text and icon
- Shadow: Subtle orange-tinted shadow for elevated instances
- Variants: Compact header version, prominent hero version, full-width card version

**Secondary button**
- Anatomy: Text label only, minimal container
- Surface: Transparent background with `1px` border in default border color
- Typography: `{typography.label}` in ink-secondary color
- Shape: `0.75rem` (12px) radius, padding `0.375rem 0.75rem`

**Feature card**
- Anatomy: Icon or image top, title, description, optional feature list
- Surface: White background, `1px` border in default border color, standard card shadow
- Typography: Title in `{typography.subhead-display}`, body in `{typography.body}`
- Shape: `1.5rem` (24px) radius, padding `1.5rem` (24px)
- Composition: Vertical stack with `1rem` (16px) gap between elements

**Pricing card**
- Anatomy: Tier name, price with period indicator, description, feature checklist, CTA button
- Surface: White background, `1px` border (default) or `2px` border in warm orange (highlighted)
- Typography: Tier name in `{typography.subhead-display}`, price in `{typography.hero-display}` scaled to `2.25rem` with currency symbol at smaller size
- Shape: `1.5rem` (24px) radius, padding `2rem` (32px)
- Variants: Standard tier with default border, highlighted "Recommended" tier with orange border and shadow, plus an orange badge pill in the top-right corner

**Badge**
- Anatomy: Text label within a pill container
- Surface: Colored background matching semantic intent—warm for orange, green for success, purple for alternative
- Typography: `{typography.caption}` in matching darker tone
- Shape: `9999px` full pill radius, padding `0.25rem 0.75rem` (4px 12px)

**Feature list item**
- Anatomy: Leading icon (colored circle with white symbol), text label, optional description
- Surface: Transparent, no border
- Typography: Label in `{typography.body-medium}` or `{typography.label}` depending on hierarchy
- Spacing: Items stack with `1rem` (16px) vertical gap, icon and text have `0.75rem` (12px) horizontal gap

**Testimonial/quote block**
- Anatomy: Quotation text, attribution with avatar and name/role
- Surface: White background with subtle border, or transparent with large decorative quote marks
- Typography: Quote in `{typography.subhead-display}` at reduced size, attribution in `{typography.label}`
- Shape: `1rem` (16px) radius for card variant

**Input field**
- Anatomy: Text input with placeholder, optional icon
- Surface: White background, `1px` border in neutral gray, subtle inner shadow
- Typography: `{typography.label}` for input text
- Shape: `1rem` (16px) radius, padding `1rem 1.25rem` (16px 20px)

**Header navigation**
- Anatomy: Logo left, navigation links center, auth/CTA buttons right
- Surface: Transparent or warm off-white background, subtle bottom border on scroll
- Typography: Links in `{typography.navigation}`, CTA in compact primary button style
- Spacing: `2rem` (32px) horizontal padding, `1rem` (16px) gap between links

## Responsive behavior

The design is documented from desktop viewport widths. The centered container model with percentage-based max-widths should adapt naturally to smaller screens by maintaining horizontal padding while allowing content to reflow.

At reduced widths, the two-column hero and feature layouts should stack to single column with the visual mockup following the text content. The three-column pricing grid should collapse to a single stacked column with full-width cards, preserving the highlighted tier's visual prominence through border and shadow rather than position.

Navigation should collapse to a hamburger menu at tablet widths, with the primary CTA remaining visible in the header. Font sizes should scale down proportionally: hero display to `3rem`, section display to `2.25rem`, maintaining the hierarchy while preserving readability.

Card padding can reduce by `0.5rem` on mobile. Section vertical spacing should compress from `6rem` to `4rem` to maintain density without crowding.

## Practical implementation guidance

**Preserve**
- The Recoleta/Inter type pairing—this is the core brand signature
- Orange gradient buttons with white text for all primary actions
- Warm off-white (`#FCF8F4`) alternating with pure white for section backgrounds
- Rounded corners at all scales; avoid sharp corners except for technical diagrams
- The floating card aesthetic with subtle shadows and slight perspective tilts
- Green and purple accent palettes for feature-specific contexts, used consistently

**Avoid**
- Pure black text; the ink colors (`#0F172A`, `#1E293B`) provide warmth and reduce harshness
- Flat orange fills without gradient depth; the gradient creates the premium feel
- Sharp-cornered cards or buttons; they contradict the approachable brand character
- Overusing the purple accent; reserve it for specific feature contexts to maintain its impact
- Crowding the hero section; the generous whitespace is essential to the premium positioning

**Recommended build order**
1. Establish the type scale with Recoleta and Inter loaded at all required weights
2. Implement the color tokens, especially the orange gradient family and warm neutrals
3. Build the header with logo, navigation, and primary CTA
4. Create the hero section with asymmetric two-column layout and floating mockup
5. Implement card components with consistent border, shadow, and radius treatments
6. Build pricing section with three-tier cards and highlighted state
7. Add feature sections with icon lists and gradient backgrounds
8. Polish with badge components, testimonial blocks, and footer

**Accessibility**
- Ensure orange buttons meet WCAG contrast against white text; the gradient darkens sufficiently at the edges
- Provide focus states with visible outlines, using the action color at full opacity
- Maintain readable line lengths (55-75 characters) for body text blocks
- Use semantic heading hierarchy: single H1 per page, logical H2-H3 progression
- Ensure interactive elements have minimum `44px` touch targets on mobile
- Provide text alternatives for all UI mockup images describing the demonstrated feature

## Scope note

This guide covers the homepage, feature pages (Parasite SEO and Lead Generation), and pricing page as visible in the supplied materials. Mobile breakpoints, animation behavior, form validation states, and dashboard interface screens are not included. Measurements are exact values from the retained interface data.
