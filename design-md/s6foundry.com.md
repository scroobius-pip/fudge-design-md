# How s6foundry.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/s6foundry.com-design)

Last updated: 2026-08-10

## Captured pages

[![Contact page with black background, portrait photography, and outlined CTA button with coral text links](https://pin.fontofweb.com/1603?format=jpg)](https://design.withfudge.com/share/pin-1603)

[Contact page with black background, portrait photography, and outlined CTA button with coral text links](https://design.withfudge.com/share/pin-1603)

[![Minimal footer with white text on black, horizontal rule, and multi-column retail font partner links](https://pin.fontofweb.com/1602?format=jpg)](https://design.withfudge.com/share/pin-1602)

[Minimal footer with white text on black, horizontal rule, and multi-column retail font partner links](https://design.withfudge.com/share/pin-1602)

[![Type specimen carousel showing Rotary Sans and RNA Sans with orange weight labels and large white glyphs](https://pin.fontofweb.com/1601?format=jpg)](https://design.withfudge.com/share/pin-1601)

[Type specimen carousel showing Rotary Sans and RNA Sans with orange weight labels and large white glyphs](https://design.withfudge.com/share/pin-1601)

[![Hupla Metric specimen with blue accent panel and variable weight axis visualization on white surface](https://pin.fontofweb.com/1600?format=jpg)](https://design.withfudge.com/share/pin-1600)

[Hupla Metric specimen with blue accent panel and variable weight axis visualization on white surface](https://design.withfudge.com/share/pin-1600)

## Overview

S6 Foundry presents itself as a contemporary type foundry where the typefaces are the protagonists. The design system is built on an unapologetically dark foundation—absolute black canvases that make white letterforms explode forward with maximum contrast. This is not a system that competes with its fonts; it stages them. The homepage and contact page share a consistent visual grammar: generous negative space, minimal UI chrome, and a typographic hierarchy that scales from restrained navigation labels to monumental specimen displays that fill the viewport.

The emotional register is confident, craft-oriented, and gallery-like. Photography appears in black and white, maintaining the monochrome discipline. When color does appear, it functions as a precise accent—coral links that signal interactivity without breaking the dark-room atmosphere. The system feels closer to an exhibition catalog or a premium print specimen than to a conventional marketing site. Every element, from the hairline footer rules to the unrounded button borders, reinforces a commitment to typographic purity and editorial restraint.

## Colors

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, specimen stage, footer ground |
| ink | #ffffff | Primary text, display glyphs, button borders, navigation |
| muted-ink | #b3b3b3 | Secondary descriptions, captions, disabled states |
| accent | #ff6b4a | Interactive text links, hover states, weight labels in specimens |
| surface | #1a1a1a | Elevated panels, subtle differentiation from pure black |
| border | #333333 | Horizontal rules, divider lines, footer separators |

The color philosophy is subtractive: remove everything that does not serve the type. The absolute black canvas creates a void that makes white letterforms appear to emit light. This is especially effective in the specimen carousel, where fonts like Rotary Sans and RNA Sans are shown at heroic scale against uninterrupted black. The coral accent (#ff6b4a) appears sparingly—primarily in inline links and weight labels—providing just enough warmth to guide the eye without introducing chromatic competition.

The muted-ink token handles descriptive copy and secondary information, stepping back from the high-contrast primary text to establish clear information hierarchy. The surface token offers a near-black for subtle elevation when pure black would create unwanted optical vibration, such as in layered specimen panels. Border values remain dark and understated, functioning as structural hairlines rather than decorative elements.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Neues Grotesque Trial | 8rem | 400 | 0.9 | -0.03em | Monumental specimen glyphs, full-bleed type showcases |
| section-display | Neues Haus | 2rem | 500 | 1.1 | -0.01em | Section headings, CTA button text, specimen names |
| body | Neues Haus | 1rem | 400 | 1.6 | 0em | Paragraphs, descriptions, contact copy |
| label | Neues Haus | 0.75rem | 500 | 1.2 | 0.05em | Weight indicators, metadata, small caps |
| navigation | Neues Haus | 0.875rem | 400 | 1 | 0em | Header links, footer links, utility text |
| legal-copy | Neues Haus | 0.75rem | 400 | 1.4 | 0em | Copyright notice, fine print, attribution text |

The typographic system is bifurcated between display and functional roles. Neues Grotesque Trial serves exclusively as the voice of the fonts themselves—rendered at enormous scale with tight leading and negative tracking that lets the letterforms interlock and breathe as graphic objects. Neues Haus handles all interface and editorial text, providing a clean, contemporary sans-serif that recedes in service of the featured typefaces.

The size scale is deliberately extreme: hero-display at 8rem (128px) creates the immersive specimen experience, while body at 1rem (16px) maintains readable proportions for descriptive content. The 2rem section-display bridges these extremes for headings and interactive elements. Label sizes at 0.75rem (12px) handle the fine-print weight indicators and carousel pagination without disappearing. The legal-copy token at 0.75rem with regular weight covers copyright notices and attribution text in the footer, distinguishing it from the medium-weight label role.

Verify licensing for these families before production use. The foundry's own retail and custom fonts—including Abaliss Trial, Agger Trial, Aisling, Alskar Extended Trial, Bix Metric Trial-One, and Faffin—may appear in specimen contexts but are not used as interface typography in the visible surfaces.

## Layout

The layout architecture is fundamentally editorial and full-bleed. The homepage specimen carousel dominates the viewport with edge-to-edge black stages, while the contact page employs an asymmetric two-column composition: a black-and-white photographic portrait occupies roughly half the width, with text content and a call-to-action occupying the remainder.

Horizontal rhythm relies on generous margins and deliberate asymmetry. The contact page places its content block with substantial left and right breathing room, avoiding the centered-column convention in favor of an offset, magazine-like arrangement. The specimen carousel uses a split-screen or full-bleed approach where type specimens occupy distinct horizontal zones, each with its own pagination dots indicating scrollable depth.

Vertical spacing follows a section-based rhythm. Major content blocks are separated by significant whitespace—approximately 6rem (96px) between the header and primary content, and equivalent spacing between the contact narrative and the CTA button. The footer compresses this rhythm, stacking information in a dense but orderly multi-column grid that respects the same baseline grid.

The header maintains a fixed or sticky presence with minimal height, containing the wordmark left-aligned and navigation right-aligned. No background separation distinguishes the header from the canvas—it floats as white text on black, relying on scroll position and content spacing for definition.

## Visual language

The visual language of S6 Foundry is that of a contemporary gallery or premium print foundry. Imagery is strictly monochrome—black and white photography with high contrast and visible grain, treated as texture rather than narrative content. The contact page portrait exemplifies this: the subjects are present, but the image reads as tonal mass against the black ground, not as personal storytelling.

Specimen presentation is the system's signature gesture. Fonts are not merely named; they are performed. Rotary Sans appears with its weight names stacked vertically in coral, followed by oversized white glyphs that demonstrate its geometric construction and ink traps. RNA Sans receives identical treatment, establishing a repeatable format that makes each typeface feel like an exhibition piece. Pagination dots below each specimen suggest a browsable collection, reinforcing the gallery metaphor.

The blue accent visible in the Hupla Metric specimen (a bright, saturated panel) appears to be content-specific—belonging to the font's own identity rather than the site's systematic palette. This suggests the system accommodates color injections from the typefaces themselves, treating each specimen as a sovereign visual environment within the black frame.

Borders and rules are universally hairline-thin and sharp-cornered. The footer uses a single horizontal rule to separate the utility zone from the content above. Buttons are rectangular with 1px solid borders, rejecting rounded corners entirely. This angularity extends to every container, maintaining a machined, print-production aesthetic.

## Components

**Primary Button**
- Anatomy: Rectangular container with text label centered
- Surface: Transparent background, 1px solid white border
- Typography: section-display token, white text
- Shape: 0rem border radius, sharp corners
- Spacing: Generous internal padding—approximately 1.5rem vertical, 2rem horizontal
- Composition: Left-aligned or centered within its content block, never full-width
- Variants: No visible filled variant; the outline treatment is the consistent expression

**Text Link**
- Anatomy: Inline text with no underline by default
- Surface: Transparent, inheriting parent background
- Typography: body token, coral accent color
- Shape: No border, no background shape
- Spacing: Inline with surrounding text flow
- Composition: Appears within paragraphs to signal interactivity
- Variants: Hover state not visible in still images; recommend subtle brightness shift

**Specimen Card**
- Anatomy: Full-bleed black stage with stacked weight labels, oversized glyphs, and descriptive footer
- Surface: canvas background, ink text, accent weight labels
- Typography: hero-display for glyphs, label for weight names, body for descriptions
- Shape: 0rem border radius, edge-to-edge within carousel
- Spacing: Weight labels positioned upper-left with generous margin, glyphs centered or offset, description and CTA at bottom
- Composition: Split-screen or full-width within horizontal scroll or carousel
- Variants: Each font receives identical structural treatment with content-specific glyph selection and optional color injection from the typeface's own identity

**Footer**
- Anatomy: Multi-column grid with copyright, contact links, social links, and retail partner list
- Surface: canvas background, ink text, border top rule
- Typography: body for content, navigation for links, legal-copy for copyright
- Shape: Full-width, 0rem border radius
- Spacing: Compressed vertical rhythm compared to main content, columns evenly distributed
- Composition: Four-column layout at desktop: copyright, contact/social, retail partners, and empty or logo zone
- Variants: Single visible state; no expansion or collapse behavior shown

**Header/Navigation**
- Anatomy: Wordmark left, inline links right
- Surface: Transparent over canvas
- Typography: navigation token, white text
- Shape: No container, no background pill, 0rem border radius
- Spacing: Moderate horizontal padding from viewport edges
- Composition: Flexbox row with space-between alignment
- Variants: No visible mobile hamburger in supplied images; links remain inline

## Responsive behavior

The supplied images show desktop-width compositions exclusively. Based on the visual structure, several responsive adaptations are recommended.

The specimen carousel, which presents two typefaces side by side at desktop, should stack vertically on narrower viewports. The hero-display typography at 8rem will require scaling down—potentially to 4rem or 5rem—to maintain glyph integrity without horizontal overflow. The split-screen contact layout should transition to a single column, with the portrait stacking above the text content and the CTA button expanding to full width within comfortable margins.

Navigation links in the header will likely require a mobile menu pattern below a certain breakpoint, though no hamburger icon is visible in the supplied images. The footer multi-column grid should collapse to a single column with stacked sections, preserving the horizontal rule as a section separator.

The black canvas and white text combination maintains sufficient contrast at all sizes, but the coral accent links should be tested against the black background for WCAG compliance. The hairline borders and rules may require thickening to 2px on high-density displays to remain visible.

## Practical implementation guidance

**Preserve**
- The absolute black canvas as the default ground; never introduce gray backgrounds that would dilute the specimen impact
- Sharp-cornered buttons and containers; rounding would betray the system's machined precision
- The two-family typographic split: Neues Grotesque Trial for display specimens, Neues Haus for all interface and editorial text
- Generous negative space around specimens; the black void is as important as the letterforms
- Monochrome photography treatment when human subjects or physical artifacts appear

**Avoid**
- Centered text blocks for editorial content; the system prefers left-aligned, asymmetric compositions
- Drop shadows, glows, or dimensional effects that would compete with flat specimen presentation
- Multiple accent colors; coral is the systematic signal for interactivity
- Card-based layouts with visible containers; specimens sit directly on the canvas
- Rounded buttons or pill-shaped tags; the rectangular outline is the consistent interactive language

**Recommended build order**
1. Establish the black canvas and white text foundation with Neues Haus body typography
2. Implement the header with wordmark and right-aligned navigation
3. Build the specimen carousel structure with full-bleed black stages and pagination dots
4. Add Neues Grotesque Trial hero-display treatment for specimen glyphs
5. Style the outline button and coral text link components
6. Construct the multi-column footer with hairline top border
7. Implement the contact page asymmetric two-column layout with portrait and CTA

**Accessibility**
- Ensure coral accent links (#ff6b4a) against black (#000000) meet minimum 4.5:1 contrast ratio; adjust brightness if necessary
- Provide visible focus states for outline buttons, potentially using the coral accent as a focus ring
- Add aria-labels to specimen carousel navigation dots
- Consider reduced-motion preferences for any carousel auto-advance
- Maintain semantic heading hierarchy despite the visual flattening of display sizes

## Scope note

This guide covers the homepage type specimen carousel, contact page, and footer as visible in desktop-width captures. Mobile breakpoints, hover states, form validation, and e-commerce or font-purchase flows are not represented in the supplied material. Measurements are practical adaptation targets. The Fontutti and Roboto families appear in the source but are not visibly used in the captured interface surfaces.
