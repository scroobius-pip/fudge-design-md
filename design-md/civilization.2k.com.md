# How civilization.2k.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/civilization.2k.com-design)

Last updated: 2026-08-10

## Captured pages

[![Footer with social icons, partner logos, ESRB rating, and legal text on pure black background with white condensed typography](https://pin.fontofweb.com/3077?format=jpg)](https://design.withfudge.com/share/pin-3077)

[Footer with social icons, partner logos, ESRB rating, and legal text on pure black background with white condensed typography](https://design.withfudge.com/share/pin-3077)

[![Account creation section featuring hexagonal Napoleon portrait frame with gold border, gold action button, and white serif headline on black background](https://pin.fontofweb.com/3076?format=jpg)](https://design.withfudge.com/share/pin-3076)

[Account creation section featuring hexagonal Napoleon portrait frame with gold border, gold action button, and white serif headline on black background](https://design.withfudge.com/share/pin-3076)

[![Social media follow section with gold rectangular icon buttons and large white display serif heading on black background](https://pin.fontofweb.com/3075?format=jpg)](https://design.withfudge.com/share/pin-3075)

[Social media follow section with gold rectangular icon buttons and large white display serif heading on black background](https://design.withfudge.com/share/pin-3075)

[![Settler's Edition product card with gold-accented cover art, gold buy button, and feature list with column icons on dark background](https://pin.fontofweb.com/3074?format=jpg)](https://design.withfudge.com/share/pin-3074)

[Settler's Edition product card with gold-accented cover art, gold buy button, and feature list with column icons on dark background](https://design.withfudge.com/share/pin-3074)

## Overview

The Civilization VII marketing site presents a visually austere yet luxurious design system rooted in absolute black canvas, gold metallic accents, and classical typography. The aesthetic evokes historical grandeur and premium positioning appropriate for a flagship strategy game franchise. Every surface begins from pure darkness, allowing photography, illustration, and gold elements to command full attention. The system relies on extreme contrast rather than complexity: white and gold against black creates immediate hierarchy without decorative noise. Serif display typography in Very Vogue Display carries the voice of authority and tradition, while condensed sans-serif body copy in Artegra Sans Condensed maintains efficient readability at small sizes. The overall impression is that of a museum exhibition or collector's edition presentation—restrained, expensive, and timeless.

## Colors

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary background for all sections, footer, and base layer |
| ink | #ffffff | Primary text, headings, body copy, and icon fills on dark surfaces |
| accent | #d4af37 | Primary action buttons, social icon backgrounds, decorative borders, and hexagonal frames |
| muted | #7c7c7c | Secondary text, disabled states, and subtle dividers |
| surface-elevated | #141414 | Slightly lifted card surfaces when separation from pure black is needed |
| border-gold | #b8960c | Darker gold for borders and pressed states of accent elements |

The color system operates on a near-monochrome foundation with a single warm metallic accent. Black dominates every viewport, functioning not as absence but as a deliberate stage for content. White ink provides maximum legibility against this darkness. The gold accent derives from classical associations with empire, treasure, and achievement—core themes of the Civilization franchise. This gold appears in multiple material expressions: flat fills for buttons, thin borders for decorative frames, and solid backgrounds for social icon blocks. No gradients are visible in the interface; all color transitions are sharp and decisive. The muted gray serves sparingly for legal text and secondary information that must recede without disappearing. When photography appears, it often contains its own warm gold tones that harmonize with the accent without requiring additional interface colors.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Very Vogue Display | 3rem | 400 | 1 | 0.02em | Major section headings, social callouts, account creation titles |
| section-display | Very Vogue Display | 2.5rem | 400 | 1.05 | 0.01em | Product edition names, subsection headings |
| body | Artegra Sans Condensed | 1rem | 300 | 1.5 | 0 | Primary descriptive paragraphs, account benefits text |
| body-small | Artegra Sans Condensed | 0.875rem | 300 | 1.5 | 0 | Feature lists, terms and conditions, detailed explanations |
| label | Artegra Sans Condensed | 0.875rem | 300 | 1.2 | 0.05em | Navigation links, footer utility links, uppercase treatments |
| legal | Artegra Sans Condensed | 0.75rem | 300 | 1.4 | 0 | Copyright text, trademark notices, fine print |

The typographic system pairs two distinct voices: Very Vogue Display provides the ceremonial, editorial presence of a historical document or monument inscription, while Artegra Sans Condensed delivers modern, space-efficient information. The display face appears exclusively in uppercase with slight positive tracking, reinforcing its monumental quality. The condensed sans-serif maintains light weight throughout, preserving elegance even at small sizes while maximizing characters per line. No bold weights are employed in the visible system; hierarchy derives from size, family contrast, and color rather than weight variation. The legal token compresses further for dense footer text. Verify licensing for these families before production use. Very Vogue Display carries no attributed designer or vendor in the available records; Artegra Sans Condensed was designed by Ceyhun Birinci and is available from Artegra.

## Layout

The layout system embraces full-bleed darkness with centered content bands. Sections stack vertically with generous breathing room, typically six to eight units of separation between major content blocks. Content max-width appears constrained to a readable measure, approximately 1200 pixels, with internal elements center-aligned. The account creation section demonstrates an asymmetric two-column composition: a large illustrative element occupies the left portion while text content anchors the right, both framed within a thin gold border that creates a contained stage. Product cards follow a vertical stack with centered alignment—cover art, edition title, action button, description, and feature list all sharing a single central axis.

Spacing follows a four-pixel base unit, with component gaps at 24 pixels and section breaks at 96 pixels. The social media section compresses its elements tightly: heading directly above a horizontal row of identical square buttons with minimal gap. Footer sections layer vertically with consistent rhythm: social icons, partner logos, rating badge, utility links, legal links, and copyright text each separated by uniform space. No sidebar navigation or complex grid systems are visible; the layout prioritizes vertical scrolling and single-column reading experiences even when illustrations accompany text.

## Visual language

The visual language draws from classical and imperial design traditions translated into digital form. Hexagonal frames reference the series' iconic game tiles while suggesting gem-cutting and heraldic shields. Gold borders function as both decoration and containment, elevating content within the black void. The social icon buttons reject conventional circular or rounded treatments in favor of sharp rectangles with solid gold fills—more bullion bar than modern app icon. Photography and illustration receive no border radius, presenting as physical artifacts placed on the digital surface.

The system avoids decorative texture, shadow, or depth effects. Flat color and sharp edges dominate. When illustration appears, it carries its own dimensional lighting and atmosphere, contrasting with the flat interface elements that surround it. The ESRB rating badge and partner logos appear in their native forms, respected as external brand assets rather than restyled. This restraint allows the game's own visual production—historical costumes, architectural renderings, painted landscapes—to provide all necessary richness. The interface's role is to present, not compete.

## Components

**Primary Action Button**
- Anatomy: Text label centered within a rectangular gold fill
- Surface: Solid accent gold background with canvas-colored text
- Typography: hero-display token at reduced size for button context
- Shape: Minimal border radius, near-sharp corners
- Spacing: Generous horizontal padding creating wide pill-like proportion despite minimal rounding
- Composition: Typically appears below descriptive text, centered within its container
- Variants: None visible; single dominant action style

**Secondary Action Link**
- Anatomy: Underlined text without background container
- Surface: Transparent with ink-colored text
- Typography: label token with underline decoration
- Shape: Inline text treatment
- Spacing: Positioned adjacent to primary button with horizontal gap
- Composition: Offers alternative path without competing visually

**Social Icon Button**
- Anatomy: Single icon centered in square gold container
- Surface: Solid accent gold background with canvas-colored icon
- Typography: None; icon-only
- Shape: Minimal border radius, near-square with precise edges
- Spacing: Tight horizontal row with minimal gap between buttons
- Composition: Seven buttons in equal row, each identical in dimension
- Variants: Each carries distinct platform icon while maintaining identical container treatment

**Product Edition Card**
- Anatomy: Cover image, edition title, buy button, description paragraph, feature list
- Surface: Canvas background with no visible card border or elevation
- Typography: section-display for title, hero-display for button, body for description, body-small for features
- Shape: All elements with minimal radius, effectively rectangular
- Spacing: Vertical stack with consistent 16-pixel gaps
- Composition: Centered alignment throughout, narrow width creating focused presentation
- Feature List: Each item prefixed with classical column icon in accent gold, followed by body-small text in ink

**Hexagonal Portrait Frame**
- Anatomy: Six-sided border containing character illustration
- Surface: Transparent center with accent gold border
- Border: 4px solid gold, potentially with subtle inner shadow or bevel suggesting depth
- Shape: Polygon with six sides, wider than tall, flat top and bottom
- Composition: Positioned left of accompanying text block, large scale dominating its column
- Variants: May contain single or composite portraits

**Footer**
- Anatomy: Social icons, partner logos, rating badge, utility links, legal links, copyright
- Surface: Canvas background continuing from main content
- Typography: label for utility links, legal for copyright
- Spacing: Generous vertical separation between functional groups
- Composition: Centered alignment, horizontal rows for icons and links that wrap as needed

## Responsive behavior

The visible desktop layout suggests a system that would compress gracefully to single-column for smaller viewports. The asymmetric two-column account section should stack vertically, with the hexagonal frame above the text content. Product cards already follow a narrow centered pattern that would require minimal adjustment. Social icon rows may wrap to two rows or reduce button count displayed. Typography should scale down proportionally: hero-display to section-display size, section-display to a new 2rem size, maintaining the display family's presence without overwhelming small screens. The gold accent remains essential at all sizes, serving as the primary interactive signal. Touch targets for social buttons and primary actions should maintain minimum 44 pixel dimensions. Consider increasing horizontal padding on buttons for touch contexts.

## Practical implementation guidance

**Preserve**
- Absolute black canvas as the non-negotiable foundation
- Gold accent as the sole interactive and decorative color
- Near-sharp corners on all interface elements with minimal rounding
- The two-typeface hierarchy: display serif for voice, condensed sans for information
- Hexagonal framing motif for character or featured imagery
- Centered, focused content widths rather than full-bleed text

**Avoid**
- Prominent rounded corners on buttons, cards, or containers
- Multiple accent colors or gradient fills
- Heavy font weights in body or display text
- Decorative shadows, glows, or dimensional effects on interface elements
- Background textures or patterns that compete with photography
- Left-aligned layouts for primary content blocks

**Recommended Build Order**
1. Establish canvas black and ink white as base tokens
2. Implement accent gold and verify contrast against both canvas and ink
3. Load Very Vogue Display and Artegra Sans Condensed with light weight
4. Build primary action button with minimal rounding and gold fill
5. Create social icon button grid with identical near-square treatment
6. Implement hexagonal frame component with gold border
7. Assemble product card with vertical centered stack
8. Construct footer with layered centered groups

**Accessibility**
- Ensure gold accent on black meets minimum contrast for large text and UI components; the combination of #d4af37 on #000000 provides approximately 8.6:1 contrast, exceeding WCAG AA for large text but verify for small text applications
- Provide visible focus indicators that do not rely solely on color change; consider white outline offset for gold buttons
- Maintain semantic heading hierarchy with single h1 per page despite decorative uppercase presentation
- Ensure social icon buttons have accessible labels despite icon-only appearance
- Respect reduced-motion preferences for any scroll-triggered reveals

## Scope note

This guide covers the Civilization VII marketing page surfaces visible in the supplied images: account creation, product edition presentation, social media promotion, and footer systems. Interior article pages, navigation headers, mobile layouts, form validation states, and motion design are not represented. Measurements are practical adaptation targets derived from visual estimation against a four-pixel base unit.
