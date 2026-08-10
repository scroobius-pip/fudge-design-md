# How twelvelabs.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/twelvelabs.io-design)

Last updated: 2026-08-10

## Captured pages

[![Hero CTA section with floating translucent gradient blobs on light gray background, featuring headline and two pill buttons](https://pin.fontofweb.com/2605?format=jpg)](https://design.withfudge.com/share/pin-2605)

[Hero CTA section with floating translucent gradient blobs on light gray background, featuring headline and two pill buttons](https://design.withfudge.com/share/pin-2605)

[![Footer with multi-column link grid, large TwelveLabs wordmark logo, and soft green-to-peach gradient bottom edge](https://pin.fontofweb.com/2604?format=jpg)](https://design.withfudge.com/share/pin-2604)

[Footer with multi-column link grid, large TwelveLabs wordmark logo, and soft green-to-peach gradient bottom edge](https://design.withfudge.com/share/pin-2604)

[![Three-tier pricing table with checkmark feature rows, tier headers, and outlined action buttons on light surface](https://pin.fontofweb.com/2603?format=jpg)](https://design.withfudge.com/share/pin-2603)

[Three-tier pricing table with checkmark feature rows, tier headers, and outlined action buttons on light surface](https://design.withfudge.com/share/pin-2603)

[![Feature showcase with rounded panel containing search UI mockup, tab pills, and split content layout](https://pin.fontofweb.com/2602?format=jpg)](https://design.withfudge.com/share/pin-2602)

[Feature showcase with rounded panel containing search UI mockup, tab pills, and split content layout](https://design.withfudge.com/share/pin-2602)

## Overview

TwelveLabs presents a technical SaaS identity built on restraint and precision. The system pairs near-black typography against warm light-gray surfaces, creating immediate readability without visual fatigue. The signature element is a family of floating, translucent, gradient-filled 3D blobs—soft organic shapes in peach, green, and yellow tones that drift across hero sections and footers, providing the only color warmth in an otherwise monochrome interface. This contrast between rigorous grid-based layouts and playful atmospheric accents defines the brand's personality: serious infrastructure with approachable intelligence.

The design language avoids decoration beyond these blob accents. Components are reduced to essential forms—pill buttons, rounded rectangles, thin hairline borders, and generous whitespace. Navigation and content hierarchy rely entirely on typographic scale and weight, with Geist providing a contemporary sans-serif voice that feels engineered rather than styled. The overall impression is of a developer-focused platform that values clarity and speed of comprehension over visual spectacle.

## Colors

The palette is intentionally minimal, using black and near-white as the primary structural colors with a single mid-tone for de-emphasized content. The warm grays prevent the interface from feeling sterile, while the blob gradients introduce photographic color that never hardens into flat UI swatches.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, filled buttons, active states, logo |
| canvas | #f5f5f5 | Page background, feature panel fills |
| surface | #ffffff | Pricing cards, elevated content areas, button text on dark |
| muted | #999999 | Disabled features, secondary metadata, unavailable tier items |
| border | #e5e5e5 | Card dividers, table rows, inactive tab borders |

The light mode dominates all visible surfaces. Dark elements appear only as text or as filled primary buttons, creating a high-contrast, inverted relationship that draws attention to actions. The gradient blobs operate in a separate visual layer—they are atmospheric, not functional, and their colors (soft peach, lime green, buttery yellow, pale pink) should be treated as photographic assets rather than interface tokens. No dark mode is visible in the supplied material.

## Typography

Two font families serve distinct roles: Geist handles all interface text with clean neutrality, while Milling-Duplex 1 Mm appears reserved for display or brand moments requiring mechanical character. The type scale is built on a 4px relative unit, with sizes snapping to whole-number multiples.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Geist | 3rem | 400 | 1.1 | -0.02em | Page headlines, major section titles |
| section-display | Geist | 2.5rem | 400 | 1.15 | -0.01em | Feature headings, pricing section title |
| body | Geist | 1rem | 400 | 1.5 | 0 | Descriptions, feature explanations |
| body-small | Geist | 0.875rem | 400 | 1.5 | 0 | Navigation links, footer columns, button labels |
| label | Geist | 0.75rem | 500 | 1.4 | 0.01em | Tab pills, tags, compact metadata |
| navigation | Geist | 0.875rem | 400 | 1.4 | 0 | Primary nav, footer category headers |

Geist is designed by Basementstudio (Andrés Briganti, Mateo Zaragoza) and distributed by Basementstudio, Vercel, and collaborators. Milling-Duplex 1 Mm is designed by Tanguy Vanlaeys and distributed by 205 Tf. Verify licensing for these families before production use.

The typographic hierarchy depends on size contrast rather than weight variation. Most text uses Regular weight; only labels employ Medium for slight emphasis. Negative tracking on display sizes tightens headlines without condensing them, preserving Geist's open forms.

## Layout

The page structure follows a centered, contained model with generous vertical breathing room. Major sections stack with substantial gaps, while content within sections often splits into asymmetric two-column or three-column arrangements.

The hero CTA section centers text and buttons against the full viewport width, allowing blob imagery to bleed to edges. Feature sections use a rounded panel container with internal padding, creating a card-within-page hierarchy that separates the demonstration from the surrounding canvas. The pricing section employs a three-column grid with equal-width cards separated by thin vertical rules.

Footer content spans the full width in a multi-column link grid—four primary columns for navigation, plus a legal column with certification badge. The TwelveLabs wordmark anchors the footer center at large scale, establishing brand presence at the scroll conclusion.

Horizontal rhythm relies on consistent internal padding of 1.5rem within components and 6rem between major sections. The rounded panel corners (2rem) create soft containment without the severity of sharp rectangles or the casualness of full pills.

## Visual language

The floating gradient blobs are the system's most distinctive visual element. These soft, translucent, organically shaped forms appear to have depth through internal color gradients—peach melting into green, yellow into pink—rendered with a glassy, slightly reflective surface. They overlap, cast soft shadows, and drift at various scales, some cropped by viewport edges. Their placement is asymmetric and appears randomized, preventing compositional stiffness.

This blob language contrasts deliberately with the rigid geometry of UI components. Where buttons are perfect pills and panels are precise rounded rectangles, the blobs introduce organic unpredictability. The effect suggests computational creativity: structured systems producing fluid, natural results.

Elsewhere, the visual language maintains restraint. Borders are hairline-thin (1px) and light. Shadows are minimal or absent—elevation is suggested through background color shifts rather than drop shadows. The only strong shadow visible appears beneath blob elements as soft ambient occlusion, grounding them in the scene.

Iconography is simple and functional: checkmarks for feature lists, arrows for external links, play triangles for video thumbnails. These icons are small, monochrome, and integrated into text lines rather than treated as independent illustrations.

## Components

**Primary Action Button**
- Anatomy: Text label with optional trailing arrow icon
- Surface: Solid black fill with white text
- Typography: `{typography.body-small}`
- Shape: Full pill with 9999px radius
- Spacing: 0.75rem vertical, 1.5rem horizontal padding
- Composition: Often paired with secondary button, placed below descriptive text

**Secondary Action Button**
- Anatomy: Text label with optional trailing arrow icon
- Surface: Transparent with 1px black border, black text
- Typography: `{typography.body-small}`
- Shape: Full pill with 9999px radius
- Spacing: Identical to primary for visual pairing
- Variants: May appear with reduced prominence in feature panels

**Feature Panel**
- Anatomy: Large rounded container holding demonstration UI and text content
- Surface: Light gray background (`{colors.canvas}`), no border
- Shape: 2rem corner radius, creating soft rectangle
- Composition: Internal split layout with visual mockup left, text and actions right
- Spacing: Generous internal padding, content vertically centered

**Tab Pills**
- Anatomy: Horizontal row of selectable text labels with icons
- Surface: Active state uses black fill with white text; inactive uses transparent with light border
- Typography: `{typography.label}`
- Shape: Full pill, compact padding (0.375rem vertical, 0.75rem horizontal)
- Composition: Clustered horizontally with small gaps between items

**Pricing Card**
- Anatomy: Tier header with name and description, action button, feature list with checkmarks
- Surface: White background with light border
- Typography: Tier name uses `{typography.section-display}` at smaller scale; features use `{typography.body-small}`
- Shape: Subtle rounding (0.75rem), vertical rules between cards
- Composition: Three cards in equal grid, features aligned across tiers for comparison
- States: Unavailable features shown in muted gray without checkmark

**Footer Link Grid**
- Anatomy: Category headers with stacked link lists
- Surface: Transparent, page background shows through
- Typography: Category headers use `{typography.body-small}` with Medium weight; links use Regular
- Composition: Four-plus columns with consistent vertical alignment
- Hierarchy: Social links separated, legal links with certification badge

## Responsive behavior

The supplied images show desktop layouts exclusively. Based on the visible structure, several responsive adaptations are recommended.

The three-column pricing grid should collapse to a single stacked column on narrow viewports, with each card becoming a full-width unit. Feature comparison alignment across tiers will require horizontal scrolling or a transformed presentation showing one tier at a time with a selector.

The hero section's centered text and button pair can maintain their arrangement across widths, but headline size should reduce to maintain comfortable line lengths. The floating blobs may need repositioning or reduced count to prevent obscuring text on smaller screens.

The feature panel's internal split layout should stack vertically, with the demonstration UI above the text content. Tab pills can wrap to multiple rows if necessary.

Footer columns should collapse to two-column then single-column grids, with the large wordmark scaling down proportionally or shifting to a stacked position above link groups.

## Practical implementation guidance

**Preserve**
- The extreme contrast between black ink and warm light surfaces—this is the system's foundational readability
- The pill button shape for all actions; the full radius is a brand signature
- The floating blob imagery as atmospheric, non-functional decoration
- The thin 1px hairline borders that separate without heavy visual weight
- The generous whitespace between major sections and within components

**Avoid**
- Adding color to functional UI elements beyond black, white, and gray—the blobs provide all necessary warmth
- Using shadows for elevation; rely on background color shifts instead
- Introducing additional border weights; the single hairline is sufficient
- Treating the blob colors as extractable UI tokens; they belong to illustration

**Recommended Build Order**
1. Establish the type scale with Geist at all sizes, verifying rendering at each step
2. Implement the color foundation: black text, warm gray canvas, white surfaces
3. Build the pill button system with primary and secondary variants
4. Create the feature panel container with its 2rem radius and internal split layout
5. Develop the pricing card with aligned feature rows and checkmark states
6. Add the footer grid and large wordmark treatment
7. Integrate blob imagery as positioned background or overlay elements

**Accessibility**
- Ensure the 1px hairline borders meet minimum contrast requirements against adjacent backgrounds; the light border on light surface may fail WCAG non-text contrast
- Provide visible focus states for pill buttons, likely an inset ring or offset outline in black
- The gradient blobs are decorative and should be hidden from screen readers
- Maintain text contrast: black on white and black on canvas both exceed 7:1; muted gray for disabled features should still meet 4.5:1 or be marked as decorative
- Arrow icons on buttons should have appropriate aria-labels if the visual arrow is the only external-link indicator

## Scope note

This guide covers the TwelveLabs marketing homepage visible in the supplied images, including hero, feature showcase, pricing, and footer surfaces. Navigation header, mobile layouts, motion behavior, form states, and interior product pages are not represented. Measurements are practical adaptation targets derived from visible proportions.
