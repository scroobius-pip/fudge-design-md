# How joinbeni.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/joinbeni.com-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with oversized white BENI wordmark on black background, social icons, and legal links](https://pin.fontofweb.com/1130?format=jpg)](https://design.withfudge.com/share/pin-1130)

[Footer section with oversized white BENI wordmark on black background, social icons, and legal links](https://design.withfudge.com/share/pin-1130)

[![Social proof section with serif headline, user testimonial cards, and lifestyle photography on dark gradient](https://pin.fontofweb.com/1129?format=jpg)](https://design.withfudge.com/share/pin-1129)

[Social proof section with serif headline, user testimonial cards, and lifestyle photography on dark gradient](https://design.withfudge.com/share/pin-1129)

[![Media logo bar with TechCrunch, TODAY, Business Insider, marie claire, WWD, Good Morning America, Sourcing Journal on black](https://pin.fontofweb.com/1128?format=jpg)](https://design.withfudge.com/share/pin-1128)

[Media logo bar with TechCrunch, TODAY, Business Insider, marie claire, WWD, Good Morning America, Sourcing Journal on black](https://design.withfudge.com/share/pin-1128)

[![Feature showcase with phone mockups, serif headlines, body copy, and yellow-green action buttons on black](https://pin.fontofweb.com/1127?format=jpg)](https://design.withfudge.com/share/pin-1127)

[Feature showcase with phone mockups, serif headlines, body copy, and yellow-green action buttons on black](https://design.withfudge.com/share/pin-1127)

## Overview

Join Beni presents a bold, editorial dark-mode experience built around dramatic contrast and confident typography. The design system centers on a pure black canvas that makes white serif headlines and warm yellow-green accents feel luminous and intentional. The visual identity speaks to a fashion-conscious, sustainability-minded audience through oversized display type, curated lifestyle photography, and a restrained palette that lets content breathe. The system balances editorial sophistication with product clarity—serif type establishes brand personality while clean sans-serif body copy and button labels keep interactions legible and direct. Every section feels considered, from the monumental footer wordmark to the densely packed social proof grid, creating a rhythm between spacious hero moments and information-rich feature blocks.

## Colors

The color system is intentionally minimal, relying on extreme contrast between black and white with a single warm accent for calls to action. This restraint creates a gallery-like atmosphere where photography and typography become the primary visual events.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, footer ground, all dark sections |
| ink | #ffffff | Primary text, headlines, icons, logo marks, wordmarks |
| muted-ink | #a8a29e | Secondary body text, captions, supporting descriptions |
| surface-elevated | #1c1917 | Card backgrounds, testimonial panels, elevated containers |
| accent | #d4d435 | Primary action buttons, highlights, key interactive elements |
| accent-hover | #e5e54a | Brighter accent state for hover feedback |
| border-subtle | #292524 | Card borders, dividers, subtle structural lines |

The black canvas dominates every visible surface, creating a cinematic depth that makes white typography appear to float forward. The accent color reads as a muted chartreuse or olive-yellow—warm enough to feel organic against the cool darkness, yet saturated enough to command attention as the sole interactive signal. Muted ink appears sparingly for secondary descriptions that should recede from the main narrative. Surface elevated provides just enough lift from pure black to define card boundaries without breaking the dark continuity. No gradients are used in the interface itself; any color variation comes from photography or the subtle warmth of the accent.

## Typography

The type system pairs distinctive serif display families with a neutral sans-serif for functional text, creating clear hierarchy through contrast in both form and scale.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Awesome Serif | 4rem | 400 | 1 | -0.02em | Major section headlines, footer wordmark at scale |
| section-display | Awesome Serif | 3rem | 400 | 1.1 | -0.01em | Feature headlines, social proof heading |
| body | Inter | 1rem | 400 | 1.5 | 0 | Standard paragraphs, descriptions |
| body-large | Inter | 1.25rem | 400 | 1.4 | 0 | Lead paragraphs, emphasized descriptions |
| label | Inter | 0.875rem | 400 | 1.25 | 0.01em | Buttons, navigation, small functional text |
| navigation | Inter | 0.875rem | 400 | 1 | 0 | Footer links, secondary navigation |

Awesome Serif and Awesome Serif-Medium Regular, both designed by Nicky Laatz, supply the brand's editorial voice with elegant, high-contrast letterforms that carry authority and fashion-world sophistication. The light weight of Awesome Serif creates refined headlines that feel expensive and intentional, while Awesome Serif-Medium Regular offers a slightly heavier cut for moments requiring additional presence. Inter, designed by Rasmus Andersson and provided by Rsms, handles all functional typography with clean neutrality, ensuring readability at small sizes and maintaining the system's modern utility. The scale relationship is dramatic: display type can reach twelve times the body size for the monumental footer wordmark, while maintaining tight leading that keeps serif headlines compact and powerful. Verify licensing for these families before production use.

## Layout

The layout philosophy embraces full-bleed darkness with centered, contained content zones that create breathing room around dense information. Sections stack vertically with generous internal padding, typically six to eight rem, establishing clear territorial boundaries between narrative moments.

Content containers appear to max out at a comfortable reading width, roughly 75 to 85 characters for body text, with feature sections often splitting asymmetrically between imagery and copy. The social proof section demonstrates a complex masonry-style grid where testimonial cards interlock with lifestyle photography at varied heights, creating visual rhythm through size variation rather than uniform repetition. Phone mockups in feature sections float with subtle rotation and overlap, suggesting depth without breaking the flat design language.

The footer inverts typical hierarchy by making the brand wordmark the dominant visual element, spanning nearly the full viewport width at enormous scale. Legal and navigation links shrink to minimal labels at the edges, treating functional information as peripheral to the brand statement. This approach—making the logo the climactic visual event—reinforces brand memorability over conventional conversion optimization.

Spacing follows a four-pixel base unit, with semantic steps at 0.5rem, 1rem, 1.5rem, 2rem, 3rem, and 6rem. Component padding typically uses 1.5rem for cards and 0.75rem vertical with 1.5rem horizontal for buttons. Section vertical rhythm uses 6rem to create dramatic pauses between content blocks.

## Visual language

The visual language draws from editorial fashion and contemporary gallery design, treating the interface as a frame for content rather than decoration. Photography is candid and lifestyle-oriented—mirror selfies, everyday interiors, authentic moments rather than polished product shots. This authenticity aligns with the secondhand shopping mission, suggesting real people and real finds.

The monumental typography treatment, especially the footer wordmark, references fashion house branding and magazine coverlines, positioning Beni as a cultural participant rather than a utility tool. The single accent color functions like a highlighter in a physical notebook, marking only the most important actions without competing for attention.

Iconography is minimal and functional—social platform icons in simple outline style, a bookmark flag for save actions. No decorative illustration or pattern work appears; the visual interest comes entirely from type, photography, and the interplay of scale. The overall effect is confident restraint: every element justifies its presence through clarity or emotional impact.

## Components

**Primary Action Button**
- Anatomy: Text label with optional leading icon, contained within a rounded rectangle
- Surface: Solid accent fill (#d4d435) with black text
- Typography: Label token, Inter at 0.875rem
- Shape: 0.5rem border radius, creating a pill-like but not fully circular form
- Spacing: 0.75rem vertical padding, 1.5rem horizontal padding
- Composition: Typically left-aligned within feature blocks or centered below descriptions
- Variants: Appears with bookmark flag icon for "Start Saving" and "Start Following" actions

**Testimonial Card**
- Anatomy: Avatar image, username, star rating, review text
- Surface: Elevated surface (#1c1917) with subtle border (#292524)
- Typography: Username in label style, review text in body style
- Shape: 1rem border radius, generous internal padding
- Spacing: 1.5rem internal padding, cards arranged in masonry grid with 1rem gaps
- Composition: Cards interlock at varying heights alongside lifestyle photography
- States: Static display, no visible hover or interaction states

**Media Logo Bar**
- Anatomy: "As Seen On" label above horizontal row of publication logos
- Surface: Transparent on black canvas
- Typography: Small centered label above logos
- Composition: Logos evenly distributed, all rendered in white for unity
- Variants: TechCrunch, TODAY, Business Insider, marie claire, WWD, Good Morning America, Sourcing Journal

**Phone Mockup Feature Block**
- Anatomy: Two or three overlapping phone renders, headline, description, action button
- Surface: Transparent on black canvas
- Typography: Section-display headline, body description, label button
- Composition: Phones positioned at slight angles with partial overlap, copy aligned to one side
- Variants: Wishlist organization feature, brand following feature

**Footer**
- Anatomy: Oversized brand wordmark, social icon row, legal links, copyright
- Surface: Pure black canvas
- Typography: Hero-display scaled to approximately 12rem for "BENI" wordmark
- Composition: Wordmark centered and dominant, social icons above, legal links and copyright at bottom edges
- States: Static, with social icons as functional links

## Responsive behavior

The design appears optimized for desktop viewing with its expansive layouts and large typography. At narrower viewports, the masonry testimonial grid should collapse to a single column or simplified two-column arrangement to maintain readability. The monumental footer wordmark will require scaling down to prevent horizontal overflow, likely reducing to 4-6rem on tablet and 2.5-3rem on mobile while maintaining its visual dominance relative to other footer elements.

Phone mockup feature blocks should stack vertically on narrow screens, with copy preceding imagery to maintain narrative flow. The media logo bar may require horizontal scrolling or two-row wrapping to preserve logo legibility. Button widths should expand to full container on mobile for touch accessibility, maintaining the same vertical padding for adequate tap targets.

## Practical implementation guidance

**Preserve**
- The extreme contrast between black canvas and white typography; this is the system's defining characteristic
- The serif/sans-serif pairing; losing either breaks the editorial personality
- The single accent color discipline; introducing additional colors will dilute the focused palette
- The authentic, lifestyle photography style; polished stock imagery will feel mismatched
- The monumental footer wordmark as a brand signature moment

**Avoid**
- Light or white backgrounds; the dark canvas is fundamental to the visual identity
- Multiple accent colors or gradient fills on interactive elements
- Rounded corners larger than 1rem on cards; the current radius feels intentional, not playful
- Decorative patterns, textures, or illustration that competes with photography
- Body text in serif; Inter maintains functional clarity at small sizes

**Recommended build order**
1. Establish the black canvas and white typography foundation with Inter body text
2. Integrate Awesome Serif for display headlines at section-display and hero-display scales
3. Add the accent color to primary buttons and key interactive moments
4. Build the testimonial card component with elevated surface and subtle borders
5. Implement the masonry grid layout for social proof section
6. Create the phone mockup feature blocks with overlapping composition
7. Develop the monumental footer wordmark as the climactic brand element

**Accessibility**
- Ensure white text on black canvas meets WCAG AAA contrast ratios; the pure #ffffff on #000000 combination exceeds requirements
- The accent color (#d4d435) on black should be verified for minimum 4.5:1 contrast for body text, though it is used primarily on buttons with large text
- Provide focus indicators that are visible against the dark canvas, likely using the accent color with sufficient offset
- Consider reduced motion preferences for any parallax or scroll-driven effects on phone mockups
- Ensure touch targets for footer social icons and legal links meet minimum 44x44 pixel requirements

## Scope note

This guide covers the joinbeni.com homepage visible in the supplied images, including the hero area, social proof section, media endorsement bar, feature showcases with phone mockups, and footer. Navigation header, interior pages, mobile-specific layouts, form interactions, and motion design are not represented in the available material. Measurements are practical adaptation targets derived from visual inspection.
