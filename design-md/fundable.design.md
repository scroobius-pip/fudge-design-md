# How fundable.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/fundable.design-design)

Last updated: 2026-08-10

## Captured pages

[![Dark hero section with split layout showing logo design service headline, pricing pill, and lifestyle photography on black background](https://pin.fontofweb.com/6714?format=jpg)](https://design.withfudge.com/share/pin-6714)

[Dark hero section with split layout showing logo design service headline, pricing pill, and lifestyle photography on black background](https://design.withfudge.com/share/pin-6714)

[![Bright yellow-green process section with serif headline, checklist items, and floating card mockup illustration](https://pin.fontofweb.com/5699?format=jpg)](https://design.withfudge.com/share/pin-5699)

[Bright yellow-green process section with serif headline, checklist items, and floating card mockup illustration](https://design.withfudge.com/share/pin-5699)

[![Yellow-green brand foundation section with serif display heading, body copy, and three checkmark list items with placeholder image area](https://pin.fontofweb.com/5698?format=jpg)](https://design.withfudge.com/share/pin-5698)

[Yellow-green brand foundation section with serif display heading, body copy, and three checkmark list items with placeholder image area](https://design.withfudge.com/share/pin-5698)

[![Warm cream pricing page with three-tier cards, brown primary action button, and customer logo avatars row](https://pin.fontofweb.com/5697?format=jpg)](https://design.withfudge.com/share/pin-5697)

[Warm cream pricing page with three-tier cards, brown primary action button, and customer logo avatars row](https://design.withfudge.com/share/pin-5697)

## Overview

Fundable presents itself as a premium design service for startups seeking credible visual identities. The site's visual language operates on a dramatic mode-switching principle: deep black canvases with high-contrast white typography establish authority and premium positioning, while expansive yellow-green sections inject energy and optimism into the service narrative. This alternation creates visual rhythm across the page, preventing the darkness from feeling oppressive or the brightness from feeling cheap.

The design system centers on a typographic tension between an expressive serif display face and a neutral, tightly-tracked sans-serif for everything functional. Photography plays a supporting role—lifestyle imagery with natural lighting and outdoor settings reinforces the "real company" positioning without overwhelming the service messaging. Component design favors restraint: pills for actions, rounded rectangles for cards, and minimal chrome throughout. The overall impression is of a service that understands startup aesthetics—confident, modern, and slightly irreverent—without resorting to generic SaaS patterns.

## Colors

The color system is built around two distinct environmental modes that serve different communicative purposes. The dark mode uses pure black canvas with white ink for maximum contrast and premium gravitas. The warm mode inverts this with a cream-tinted background and warm brown ink for approachable readability.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary dark page background, hero sections |
| surface | #FFFFFF | Card backgrounds on dark, text on dark buttons |
| surface-elevated | #CDC4FB | Lavender-tinted action pill backgrounds |
| accent | #924BDE | Primary brand purple, glow effects, active states |
| accent-glow | #0000EE | Deep blue link and action text |
| ink | #FFFFFF | Primary text on dark backgrounds |
| ink-primary | #000000 | Text on light surfaces, dark UI elements |
| action-primary | #924BDE | Purple glow, focus rings, brand moments |
| action-surface | #CDC4FB | Lavender pill button backgrounds |
| action-text | #0000EE | Deep blue text on lavender actions |
| pricing-action-text | #FFFFFF | White text on brown pricing buttons |

The dark mode dominates the hero and conversion areas, using the purple accent as a single point of chromatic interest against the monochrome field. The yellow-green highlight color appears in large environmental swaths for process and value-proposition sections, creating an almost editorial magazine feel. The pricing section shifts to warm cream with brown actions, grounding the commercial moment in earth tones that feel stable and trustworthy.

## Typography

The type system pairs Piazzolla, a contemporary serif with classical proportions, for display and emotional headlines, against Inter for all functional, navigational, and body text. This creates a clear hierarchy: serif for persuasion, sans-serif for information. The supplied font families include False-Normal, Inter, Manrope, Open Runde, Piazzolla, System, and System-Sansserif. False-Normal does not appear in the visible interface typography and may serve a decorative or fallback role.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 2.4375rem | 600 | 1.1 | -0.028em | Dark hero headlines, major statements |
| section-display | Piazzolla | 2.5rem | 400 | 1.15 | -0.01em | Light section headings, brand promises |
| body | Inter | 1rem | 500 | 1.3 | -0.02em | Paragraphs, descriptions, pricing details |
| body-small | Inter | 0.875rem | 500 | 1.4 | -0.04em | Secondary descriptions, list items |
| label | Inter | 0.75rem | 500 | 1.3 | 0.001em | Pills, badges, small UI labels |
| navigation | System-Sansserif | 0.75rem | 400 | 1.5 | normal | Nav links, system-level text |

Inter appears at weights 500 and 600, with the heavier weight reserved for display-scale headlines to maintain optical density. Piazzolla is used exclusively at Regular weight, letting its inherent stroke contrast provide presence without additional bolding. Tracking is consistently negative for Inter, tightening the modern sans-serif forms, while Piazzolla receives minimal adjustment to preserve its classical spacing. Line heights are tight across the system, reflecting the site's confident, space-efficient layout.

Font credits: Piazzolla by Juan Pablo Del Peral (Huerta Tipografica); Inter by Rasmus Andersson (Rsms); Manrope by Mikhail Sharanda; Open Runde by Laurids Kern; False-Normal by Mikhail Sharanda. Verify licensing for these families before production use.

## Layout

The page employs a split-panel architecture in its dark hero section, with content constrained to a narrow left column while imagery occupies the remaining width. This asymmetric ratio—approximately one-third content to two-thirds visual—creates editorial tension and allows lifestyle photography to dominate without sacrificing message hierarchy.

Content sections in the yellow-green mode use centered or left-aligned text blocks with generous surrounding space. The maximum content width appears constrained to a comfortable reading measure, with process sections alternating image-left and image-right to maintain visual interest. Pricing cards adopt a multi-column grid with one featured card spanning full height while secondary options stack beside it.

Spacing follows a 4px base unit. Section padding uses 6rem vertical gaps to create breathing room between mode switches. Component internal padding uses 1rem to 1.5rem for cards and 0.75rem for compact elements like pills. The 24px padding value appears frequently as a container gutter, while 12px and 16px serve for button and inline spacing.

Border radius values are semantically distinct: 100px creates full pill shapes for actions and badges, while 10px provides subtle rounding for cards and containers. This two-tier radius system prevents visual confusion between interactive and structural elements.

## Visual language

Photography on the site favors natural-light lifestyle imagery with human subjects in outdoor or architectural settings. The treatment is documentary rather than staged—subjects appear engaged in activity rather than posing for product placement. Color grading leans warm with lifted shadows, complementing the yellow-green section backgrounds without competing for attention.

Iconography is minimal and functional. Checkmarks appear as simple strokes in circles for feature lists. Small glyphs accompany service attributes in the hero—designer level, timeline, revision count—using minimal line icons at 12px scale. The overall icon approach is to reduce rather than elaborate, letting typography carry the communicative load.

Decorative elements include floating card mockups in process sections, rendered with soft shadows and slight rotations to suggest depth without breaking the flat design language. These illustrations use the site's own color palette, creating cohesion between functional UI and promotional imagery.

The mode-switching between dark and light creates an implicit scroll narrative: dark sections for impact and conversion, light sections for explanation and reassurance. This rhythm prevents either mode from overstaying its welcome and provides natural resting points for the eye.

## Components

**Primary Action Pill**
- Anatomy: Text label centered within a fully rounded container
- Surface: Lavender background (#CDC4FB) with deep blue text (#0000EE)
- Typography: Label token, 12px Inter Medium
- Shape: Pill radius (100px), no border
- Spacing: 12px vertical, 16px horizontal padding
- Composition: Inline with surrounding text or standalone in hero
- Variants: None visible; single consistent treatment

**Pricing Card**
- Anatomy: Header row with icon, title, and price; body with feature list; footer with action button
- Surface: Warm cream card on lighter cream page background
- Typography: Section-display for card titles, body for descriptions, label for badges
- Shape: 10px radius corners, no visible border
- Spacing: 24px internal padding, generous gaps between price and features
- Composition: Featured card (Brand) spans full height with prominent brown CTA; secondary cards (Website, Both) stack with muted gray actions
- Variants: "High Demand" badge as highlight pill overlay; "Book a call" secondary action in gray

**Feature List Item**
- Anatomy: Circular checkmark icon followed by text label
- Surface: Transparent; icon uses subtle background circle
- Typography: Body-small token, 14px Inter Medium
- Shape: Icon circle approximately 20px diameter
- Spacing: 12px gap between icon and text, 16px between stacked items
- Composition: Left-aligned in content columns, vertically stacked
- Variants: None visible

**Accordion/FAQ Item**
- Anatomy: Trigger row with plus icon and question text
- Surface: Transparent with subtle bottom border on dark background
- Typography: Body-small token, white text on black
- Shape: Full-width row, no radius
- Spacing: 16px vertical padding, 24px horizontal
- Composition: Stacked vertically in left column of hero
- Variants: Collapsed state visible; expanded state not shown

**Highlight Badge**
- Anatomy: Text label within fully rounded container
- Surface: Yellow-green background with dark text
- Typography: Label token, 12px Inter Medium
- Shape: Pill radius
- Spacing: Compact internal padding, approximately 8px vertical, 16px horizontal
- Composition: Inline with headings or card headers as status indicator
- Variants: "Pricing" section label, "High Demand" demand indicator, "15" count badge

**Customer Avatar Stack**
- Anatomy: Overlapping circular logos with count badge
- Surface: Individual logo circles with colored backgrounds
- Typography: Label token for count number
- Shape: Circular (50%) for individual logos, pill for count badge
- Spacing: Negative overlap of approximately 8px between circles
- Composition: Horizontal row, centered below pricing cards
- Variants: None visible

## Responsive behavior

The split-panel hero layout should stack vertically on narrower viewports, with the content column preceding the imagery. The asymmetric ratio becomes full-width blocks, maintaining the dark background throughout. Pricing cards should transition from asymmetric grid to stacked single-column, with the featured Brand card remaining first in source order.

Typography scales down modestly: hero-display may reduce to 2rem, section-display to 2rem. Body text remains at 1rem for readability. The generous section padding (6rem) should compress to 3rem on mobile to prevent excessive scrolling between content blocks.

The floating card mockups in process sections should simplify or hide on narrow viewports, as their decorative complexity may not survive at small sizes. Checkmark lists can remain but with increased touch targets for the accordion triggers.

## Practical implementation guidance

**Preserve**
- The stark black-to-yellow-green mode switching; this is the site's most distinctive quality
- The serif/sans-serif typographic tension; Piazzolla for persuasion, Inter for function
- The pill-shaped primary actions with their specific lavender/blue color pairing
- The warm brown pricing CTA against cream; it signals commercial seriousness distinct from the creative sections
- The tight negative tracking on Inter headlines; this density is part of the modern feel

**Avoid**
- Generic blue primary buttons; the purple-accented lavender pills are the brand's action signature
- Pure white backgrounds in light sections; the warm cream tint is essential to the approachable tone
- Adding borders to the dark accordion items; the subtle hairline separation is sufficient
- Overriding Piazzolla with a heavier weight; the Regular weight's elegance depends on its stroke contrast

**Recommended build order**
1. Establish the dark canvas and Inter typography for the hero section
2. Implement the pill action component with exact lavender/blue colors
3. Build the yellow-green section mode with Piazzolla headings
4. Create the pricing card grid with asymmetric layout
5. Add the accordion FAQ pattern with subtle borders
6. Polish with avatar stacks and floating mockup illustrations

**Accessibility**
- Ensure the lavender action pills meet contrast requirements against black; the deep blue text on light lavender should be verified for WCAG AA compliance
- The yellow-green sections with brown text should be checked for contrast, as warm tones can fail unexpectedly
- Accordion triggers need clear focus indicators; consider using the purple accent for focus rings
- The mode switching between dark and light may cause disorientation for some users; maintain consistent navigation positioning across modes

## Scope note

This guide covers the homepage and pricing surface visible in the supplied images. Mobile layouts, hover states, form interactions, checkout flows, and motion design are not represented. The System-Sansserif family appears only in navigation contexts and may be replaceable with Inter for consistency. False-Normal is present in the font sources but does not appear in visible interface typography.
