# How uselogly.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/uselogly.app-design)

Last updated: 2026-08-10

## Captured pages

[![Footer with Logly logo, tagline, product and legal links, social links, and decorative food line illustrations on warm off-white background](https://pin.fontofweb.com/6915?format=jpg)](https://design.withfudge.com/share/pin-6915)

[Footer with Logly logo, tagline, product and legal links, social links, and decorative food line illustrations on warm off-white background](https://design.withfudge.com/share/pin-6915)

[![Dark hero section with Iowan Old Style headline, muted body text, pill-shaped download button, and chef illustration with golden bowl accent](https://pin.fontofweb.com/6914?format=jpg)](https://design.withfudge.com/share/pin-6914)

[Dark hero section with Iowan Old Style headline, muted body text, pill-shaped download button, and chef illustration with golden bowl accent](https://design.withfudge.com/share/pin-6914)

[![Testimonials section with three quote cards featuring serif italic quotes, avatar initials, and attribution on warm off-white background](https://pin.fontofweb.com/6913?format=jpg)](https://design.withfudge.com/share/pin-6913)

[Testimonials section with three quote cards featuring serif italic quotes, avatar initials, and attribution on warm off-white background](https://design.withfudge.com/share/pin-6913)

[![Feature section with phone mockups showing weight tracking and nutrition goals interfaces, with serif headings and sans-serif body text](https://pin.fontofweb.com/6912?format=jpg)](https://design.withfudge.com/share/pin-6912)

[Feature section with phone mockups showing weight tracking and nutrition goals interfaces, with serif headings and sans-serif body text](https://design.withfudge.com/share/pin-6912)

## Overview

Logly presents itself as an effortless food journal, and its visual system reinforces that positioning through restraint and warmth. The design avoids the clinical coldness typical of health-tracking applications, instead embracing an editorial sensibility that feels more like a premium lifestyle publication than a utility app. The page structure flows from a dramatic dark hero into lighter, airy feature sections, creating visual rhythm through contrast rather than decoration.

The system rests on a deliberate type pairing: Iowan Old Style BT brings classical credibility and human warmth to headlines and quotes, while DM Sans 9 Pt handles interface text with clean neutrality. This serif-sans relationship echoes the brand's promise of making disciplined health tracking feel approachable and even pleasurable. The color palette is extremely restrained—essentially warm off-white against near-black, with a single muted stone tone for secondary information—allowing the typography and occasional illustration to carry emotional weight.

Spacing is generous and confident, with section breaks that let content breathe. Rounded corners appear consistently but vary by component role: cards receive modest rounding, while buttons and avatars go fully pill-shaped. The overall impression is of a product that respects the user's attention and doesn't compete for it.

## Colors

| token | value | use |
|---|---|---|
| ink | #1A1A1A | Primary text, headings, dark button fills, logo |
| ink-deep | #000000 | Hero section background, maximum contrast surfaces |
| muted-ink | #7B756B | Secondary text, descriptions, captions, footer links |
| canvas | #FFFEFA | Primary page background, card surfaces |
| surface | #F8F6F2 | Subtle elevated surfaces, alternate section backgrounds |
| surface-warm | #EFECE7 | Avatar initials, tag backgrounds, warm accents |
| border | #E9E7E2 | Card borders, dividers, hairline rules |
| action-on-dark | #FFFFFF | Text and buttons on dark backgrounds |
| action-on-light | #1A1A1A | Primary action fills on light backgrounds |

The color system operates in two modes. The hero section inverts the palette entirely: a deep black background carries white text, creating immediate drama and focus. Everywhere else, the warm off-white canvas dominates, with ink text providing strong but not harsh contrast. The muted stone tone (#7B756B) serves as the only true mid-tone, reserved for supporting copy where full black would feel too heavy.

No gradients appear in the interface. The single shadow treatment—a soft diffuse drop shadow used sparingly on phone mockups—provides the only dimensional effect. The warm cast throughout the neutrals prevents the design from feeling sterile; even the grays carry subtle yellow undertones that harmonize with the food and lifestyle photography.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Iowan Old St Bt | 3.75rem | 400 | 1 | normal | Hero headlines, maximum impact |
| section-display | Iowan Old St Bt | 3rem | 400 | 1.11 | normal | Section headings, testimonial titles |
| quote-display | Iowan Old St Bt | 1.125rem | 400 | 1.625 | normal | Testimonial quotes, italic treatment |
| body | Dm Sans 9 Pt | 1rem | 400 | 1.5 | normal | Default paragraphs, UI text |
| body-large | Dm Sans 9 Pt | 1.125rem | 400 | 1.625 | normal | Feature descriptions, hero subheads |
| label | Dm Sans 9 Pt | 0.875rem | 500 | 1.43 | normal | Buttons, tags, navigation |
| caption | Dm Sans 9 Pt | 0.75rem | 500 | 1.33 | normal | Avatars, metadata, small labels |
| navigation | Dm Sans 9 Pt | 0.875rem | 500 | 1.43 | normal | Header and footer links |

The type system depends on the contrast between two distinct personalities. Iowan Old Style BT, a transitional serif with generous proportions and sharp contrast, carries all display and editorial text. Its Roman weight feels authoritative yet warm, avoiding the coldness of geometric sans-serif headlines common in health tech. The serif appears at 60px for hero headlines, 48px for section headings, and 18px for testimonial quotes where it renders in italic for a personal, handwritten quality.

DM Sans 9 Pt handles everything functional: body copy at 16px and 18px, button labels at 14px with Medium weight, and small captions at 12px. The family includes Regular (400), Medium (500), and Semibold (600) weights, with Medium serving as the primary emphasis weight for labels and navigation. Line heights stay tight for display type (1.0 for heroes) and open up for reading text (1.5 for body, 1.625 for larger descriptions).

Verify licensing for these families before production use.

## Layout

The page follows a single-column centered flow with contained width for text content and occasional asymmetric arrangements for feature showcases. The hero section breaks the mold with full-bleed dark background and left-aligned content paired with right-side illustration, creating an editorial spread feeling.

Content width peaks at approximately 680px for readable text blocks, with feature sections expanding to wider containers that accommodate phone mockups alongside descriptive text. The phone mockups themselves appear at realistic scale, floating with generous margins that emphasize their physicality.

Vertical rhythm is established through consistent section spacing of 80px to 100px between major blocks. Within sections, the spacing tightens: 16px between heading and body, 24px between body and action, 32px between related elements. Cards sit in grids with 24px gaps, maintaining visual separation without fragmenting the page.

The footer compresses the layout into a practical three-zone system: brand and tagline left, link columns right, social and copyright centered below. Decorative line illustrations of food items—avocado, utensils, egg, bowl, mug—span the bottom edge as a subtle brand signature, rendered in the same muted ink as secondary text.

## Visual language

The visual character balances editorial sophistication with app-like clarity. Illustrations appear as refined line drawings with selective color accents—a golden bowl in the hero, for instance—rather than photographs, which elevates the brand above typical health-app visual noise. These illustrations carry human warmth without literal realism.

Phone mockups serve as the primary product demonstration device, shown with realistic device frames and subtle shadows that lift them from the page. The mockups display actual interface states—weight tracking charts, nutrition goal settings—grounding the marketing claims in tangible functionality.

The warm off-white background (#FFFEFA) is critical to the system's personality. It avoids the sterility of pure white while maintaining cleanliness. Against this canvas, the near-black text creates crisp definition, and the occasional warm gray surface (#F8F6F2) provides just enough variation to organize content without introducing true color.

Border treatments are consistently 1px solid in the muted border tone, appearing on cards, buttons, and dividers. The radius vocabulary is disciplined: 16px for cards, 40px for larger panels, and 9999px for pills and circles. No sharp corners appear on interactive elements, reinforcing the approachable brand character.

## Components

**Hero Section**

- Anatomy: Full-bleed dark container, left-aligned text block, right-aligned illustration, single call-to-action button
- Surface: Solid black (#000000) background
- Typography: Hero-display for headline (white), body-large for description (muted tone on dark)
- Shape: Large rounded corners on container (40px visible radius), pill button
- Spacing: 80px internal padding, generous margins around illustration
- Composition: Asymmetric two-column feel with text dominating left 50%
- Variants: Dark mode exclusive; no light variant visible

**Testimonial Card**

- Anatomy: Quotation text, attribution with avatar initial and name/role
- Surface: White card with 1px border in #E9E7E2
- Typography: Quote-display in italic serif for quotation, label for attribution name, caption for role
- Shape: 16px border radius
- Spacing: 24px internal padding, 16px between quote and attribution
- Composition: Three-column grid with equal-width cards
- Hierarchy: The italic serif quote dominates visually; attribution sits anchored at bottom

**Feature Section with Phone Mockup**

- Anatomy: Section label tag, serif heading, body description, phone mockup image
- Surface: Warm off-white canvas, occasional light surface cards
- Typography: Caption/label for uppercase tags, section-display for headings, body for descriptions
- Shape: Phone mockups with realistic device corners and soft shadow
- Spacing: 80px section margins, 16px between tag and heading, 16px between heading and body
- Composition: Alternating left-right layout for visual rhythm; text and mockup paired asymmetrically
- Variants: Weight tracking and nutrition goals as visible examples

**Primary Button**

- Anatomy: Text label centered in pill container
- Surface: White fill on dark backgrounds, or dark fill on light backgrounds
- Typography: Label token, Medium weight
- Shape: Full pill (9999px radius)
- Spacing: 0px vertical padding, 28px to 32px horizontal padding
- States: Default and filled variants visible; filled uses dark background with white text

**Secondary Button**

- Anatomy: Text label in bordered pill
- Surface: Transparent with 1px border
- Typography: Label token, Medium weight
- Shape: Full pill
- Spacing: Similar horizontal padding to primary

**Avatar Initial**

- Anatomy: Single letter in circular container
- Surface: Warm off-white (#EFECE7) background
- Typography: Caption token, Medium weight, ink color
- Shape: Perfect circle (50% radius)
- Spacing: 16px diameter, 12px margin to adjacent text

**Footer**

- Anatomy: Logo and tagline, link columns, social links, copyright, decorative illustration strip
- Surface: Warm off-white canvas
- Typography: Body for links and tagline, caption for copyright
- Spacing: 64px top padding, generous internal margins
- Composition: Four-column link grid, centered social and legal below

## Responsive behavior

The desktop layout assumes a viewport width of approximately 1200px or greater, with content centered and constrained. The hero section's two-column arrangement would naturally stack on narrower viewports, with the illustration moving below the text. Phone mockups in feature sections should scale down or stack vertically, maintaining their aspect ratio.

The three-column testimonial grid should collapse to a single column on mobile, with cards stacking and maintaining full width. Navigation links visible in the footer would likely compress into a more compact arrangement or accordion on small screens.

Type sizes should scale down proportionally: the 60px hero headline may reduce to 40px or 32px on mobile, while maintaining the same line-height ratio. Body text at 16px can remain consistent across breakpoints for readability. Touch targets for buttons must maintain at least 44px height regardless of viewport.

## Practical implementation guidance

**Preserve**
- The warm off-white background (#FFFEFA) as the default canvas; pure white feels too cold
- The serif-sans type pairing; losing either breaks the editorial personality
- Generous section spacing (80px+) that lets content breathe
- Pill-shaped buttons with ample horizontal padding
- The restrained single-accent palette; resist adding brand colors

**Avoid**
- Pure black text on pure white backgrounds; the subtle warmth is intentional
- Sharp corners on interactive elements; the system is consistently rounded
- Multiple competing shadows; the single soft mockup shadow is sufficient
- Replacing the line illustrations with stock photography

**Recommended build order**
1. Establish the color tokens and apply canvas background
2. Set up the two font families with complete weight loading
3. Build the hero section with dark inversion as the visual anchor
4. Create the testimonial card component with border and padding system
5. Implement feature sections with phone mockup placement
6. Add footer with link grid and decorative illustration strip
7. Refine spacing scale across all sections

**Accessibility**
- Ensure the dark hero section meets WCAG AAA contrast (white on black does)
- Verify that muted-ink text (#7B756B) on off-white meets AA standards for small text; it may need darkening for caption sizes
- Provide focus indicators that respect the rounded shape vocabulary
- Maintain logical heading hierarchy: h1 for hero, h2 for sections, h3 for card titles
- Alt text for phone mockups should describe the interface state shown, not merely "phone screenshot"

## Scope note

This guide covers the Logly marketing landing page as captured, including the hero, testimonials, feature showcases with phone mockups, and footer. Pricing pages, app interface internals, authentication flows, and mobile navigation patterns are not represented in the supplied material. Motion, hover states, and form interactions are not documented. Measurements reflect the desktop viewport captured in the source images.
