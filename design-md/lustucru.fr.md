# How lustucru.fr is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/lustucru.fr-design)

Last updated: 2026-08-10

## Captured pages

[![Hero banner featuring blue checkered background with Torsades 3 min product packaging, prepared pasta dishes on wooden surface, and red circular badge with white typography](https://pin.fontofweb.com/3128?format=jpg)](https://design.withfudge.com/share/pin-3128)

[Hero banner featuring blue checkered background with Torsades 3 min product packaging, prepared pasta dishes on wooden surface, and red circular badge with white typography](https://design.withfudge.com/share/pin-3128)

[![Product showcase with yellow tagliatelle pasta package on striped yellow background, recipe photography cards, and handwritten-style French promotional text](https://pin.fontofweb.com/3127?format=jpg)](https://design.withfudge.com/share/pin-3127)

[Product showcase with yellow tagliatelle pasta package on striped yellow background, recipe photography cards, and handwritten-style French promotional text](https://design.withfudge.com/share/pin-3127)

## Overview

Lustucru's visual system is built around the confident presentation of French pasta products through a lens of contemporary appetite appeal and heritage authenticity. The design language balances structured brand elements—specifically the signature blue-and-white checkered pattern that frames product packaging—with organic, food-centric photography and expressive handwritten typography. The result is a system that feels simultaneously established and approachable, premium and accessible.

The brand's core visual strategy places products at the center of compositions, surrounded by generous negative space and contextual food photography that demonstrates usage. Color operates in a high-contrast, emotionally direct manner: deep blues establish trust and French identity, energetic reds drive urgency and appetite, warm yellows convey the golden quality of pasta and eggs, and clean whites maintain clarity. The typographic voice splits between a geometric sans-serif for functional communication and flowing script-like treatments for emotional, promotional messaging. This dual voice allows the brand to speak with authority about product credentials while maintaining the warmth of home cooking and family meals.

## Colors

The Lustucru palette derives from product packaging, national identity, and food photography, creating a system where brand colors and appetizing tones interweave.

| token | value | use |
|---|---|---|
| brand-blue | #0055A4 | Primary brand color; checkered backgrounds, packaging frames, navigation surfaces, and structural UI elements |
| brand-red | #E1000F | Action and emphasis; promotional badges, call-to-action highlights, appetite triggers, and urgent messaging |
| brand-yellow | #F4C430 | Product warmth; egg pasta highlights, secondary backgrounds, ingredient photography accents, and heritage warmth |
| ink | #000000 | Primary text, packaging logotypes, and high-contrast functional typography |
| canvas | #FFFFFF | Page backgrounds, text on dark surfaces, packaging panels, and photographic negative space |

The blue checkered pattern functions as a signature brand texture rather than a flat color application. When deployed at scale, it creates immediate brand recognition while the red and yellow elements punctuate the composition with energy and appetite appeal. The palette operates in a light-dominant mode where white and pale wood tones from photography provide breathing room, while the deep blue and red carry the emotional weight of brand communication. Yellow appears selectively to draw attention to product differentiators such as egg content or quick-cooking benefits.

## Typography

The typographic system relies on Yantramanav, a geometric sans-serif with clean lines and open counters that performs well at display sizes while maintaining legibility in functional contexts. The family supports a single weight in the available source, requiring size and spacing differentiation to establish hierarchy rather than weight variation.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Yantramanav | 4rem | 400 | 1 | -0.02em | Major promotional headlines, hero banner claims, and product benefit statements |
| section-display | Yantramanav | 2.5rem | 400 | 1.1 | -0.01em | Section headers, product category titles, and medium-impact messaging |
| body | Yantramanav | 1rem | 400 | 1.5 | 0 | Descriptive text, ingredient lists, nutritional information, and functional content |
| label | Yantramanav | 0.75rem | 400 | 1.2 | 0.05em | Small caps treatments, packaging credentials, legal copy, and metadata |

Handwritten-style script typography appears in promotional contexts as a contrasting voice to the geometric sans-serif. This script treatment carries emotional, exclamatory messaging such as "Miam! C'est prêt!" and "de plaisir!"—phrases that simulate personal enthusiasm rather than corporate communication. The script is not part of the core font family and should be treated as a decorative accent, implemented through either a secondary script font or carefully applied graphic treatment.

Verify licensing for Yantramanav before production use. The available source provides Regular weight only; no attribution to specific designers or vendors is supported by the supplied materials.

## Layout

The page architecture follows a full-bleed, immersive approach where hero content dominates the viewport and product storytelling unfolds through layered compositions. The layout system uses a 4px relative unit, with major spacing increments building from this foundation.

The hero banner occupies the full viewport width with content positioned across a split or layered composition. In the primary visible treatment, the left two-thirds present lifestyle food photography on a natural wood surface, while the right third carries a solid blue checkered background with promotional messaging and product packaging. This asymmetric division creates visual tension and directs the eye from appetizing preparation imagery to the product claim and purchase prompt.

Product packaging serves as a central anchor element, scaled prominently and often rotated slightly to introduce dynamism against the structured grid. Supporting elements—prepared dishes, ingredients, and utensils—arrange in a loose, appetizing scatter that avoids rigid alignment while maintaining compositional balance.

Below the hero, content sections transition to varied backgrounds including warm yellow stripes and textured paper surfaces. These section breaks prevent monotony while maintaining brand coherence through consistent packaging presentation and checkered border treatments. Photography cards with rounded corners and subtle shadows create depth and invite exploration of recipe content.

The spacing scale derives from the 4px base unit: 0.25rem for micro-adjustments, 1rem for component internal padding, and 4rem for major section separations. This limited scale prioritizes generous whitespace around hero content while allowing tighter grouping of related product information.

## Visual language

The Lustucru visual language synthesizes French heritage cues with contemporary food marketing conventions. The blue-and-white checkered pattern references traditional French tablecloths and picnic culture, grounding the brand in national identity and domestic familiarity. This pattern scales from small packaging details to full-bleed backgrounds, functioning as both texture and brand signature.

Photography style emphasizes top-down and three-quarter views of prepared dishes, with natural lighting that highlights pasta texture and sauce gloss. Wood surfaces, fresh herbs, and rustic ceramics reinforce the homemade, quality positioning. Product packaging integrates into these scenes rather than floating separately, suggesting the natural place of Lustucru products in real cooking contexts.

Handwritten script elements introduce human warmth and spontaneity, contrasting with the precision of the geometric sans-serif and the regularity of the checkered pattern. These scripts often incorporate exclamation marks, arrows, and small illustrative flourishes that guide the eye and amplify enthusiasm.

The red circular badge operates as a concentrated attention device, isolating time-based claims such as "3 min" in high-contrast white typography against a saturated ground. This element borrows from promotional sticker conventions, creating urgency and simplicity in a single graphic unit.

Border treatments include thin checkered strips that frame sections and reinforce brand continuity across scroll depth. These borders maintain the 4px unit rhythm and appear at section transitions as visual punctuation.

## Components

### Hero banner

The hero banner is the primary brand statement, combining lifestyle photography with promotional messaging in a full-width composition.

- **Anatomy**: Background layer (photography or solid color), product packaging at center or offset, promotional text block, optional badge element, and small brand logo lockup
- **Surface**: Split treatment with photographic left and solid blue checkered right; or full-bleed photography with overlaid text panels
- **Typography**: Hero-display for major claims, handwritten script for emotional accents, label size for credentials and legal markers
- **Shape**: Full-bleed rectangle with no border radius; internal elements use panel rounding of 0.5rem for photography cards
- **Spacing**: Generous padding of 4rem from edges; product packaging positioned with 1rem clearance from text blocks
- **Composition**: Asymmetric two-thirds/one-third split or layered depth with foreground packaging and background scene
- **Variants**: Product-focused (packaging dominant), recipe-focused (prepared dish dominant), or promotion-focused (badge and claim dominant)

### Product badge

The circular promotional badge isolates urgent claims in a high-impact graphic unit.

- **Anatomy**: Circular container, large numeral or short word in white, supporting text in smaller size, optional icon or flag element
- **Surface**: Solid brand-red background with white text; no border or shadow
- **Typography**: Hero-display size for primary number or word, section-display for secondary clarification
- **Shape**: Perfect circle using 9999px border radius
- **Spacing**: Internal padding of approximately 1.5rem to maintain circular proportions across content lengths
- **Composition**: Positioned to overlap packaging or photography edge, creating depth and breaking the rectangular grid

### Product packaging card

The packaging presentation treats product boxes as hero objects with consistent framing.

- **Anatomy**: Product box photography or illustration, brand logo lockup, product name, weight or quantity, certification badges, and origin flags
- **Surface**: White or light panel with blue checkered border frame; or direct photography with natural shadow
- **Typography**: Section-display for product name, body for descriptive claims, label for certifications and legal text
- **Shape**: Rectangular with slight perspective rotation; or flat front-facing presentation
- **Spacing**: 1rem internal padding for text elements; packaging edges clear of frame by 0.5rem minimum

### Recipe photography card

Secondary content uses rounded cards to present serving suggestions and preparation ideas.

- **Anatomy**: Food photography, optional small caption or title, subtle shadow treatment
- **Surface**: White border or frame with 0.5rem radius; shadow suggesting elevation above background
- **Typography**: Label size for captions when present; often image-only
- **Shape**: 0.5rem border radius on all corners
- **Spacing**: 1rem gap between cards in grid arrangements

### Promotional text panel

Text-heavy promotional areas use textured or colored backgrounds with expressive typography.

- **Anatomy**: Background surface (textured paper, striped pattern, or solid color), headline text, supporting script text, decorative marks
- **Surface**: Warm yellow stripes, cream textured paper, or blue checkered continuation
- **Typography**: Section-display for uppercase functional headlines, handwritten script for emotional lowercase phrases
- **Shape**: Full-bleed or contained panel with 0.5rem radius when card-like
- **Spacing**: 2rem internal padding minimum to allow script typography breathing room

## Responsive behavior

The design's asymmetric compositions and large-scale product photography require careful adaptation for narrower viewports. The two-thirds/one-third hero split should stack vertically, with photography above and promotional content below, maintaining the blue checkered background for continuity. Product packaging should remain visually dominant, scaling to approximately 60-80% of viewport width on mobile to preserve impact.

Handwritten script elements may require size reduction or line breaks to prevent overflow; the exclamatory nature of this typography benefits from centered alignment on narrow screens. The red circular badge should maintain minimum touch-target dimensions of 44px for any interactive implementation.

Checkered border strips can simplify to solid color bars on very narrow viewports to reduce visual noise. Recipe photography cards should transition from horizontal scroll arrangements to single-column stacking with full-width images.

The limited weight range of Yantramanav means hierarchy on small screens must rely more heavily on size contrast and spacing than on weight differentiation. Consider increasing the section-display to hero-display scale jump for clearer distinction.

## Practical implementation guidance

### Preserve
- The blue-and-white checkered pattern as a signature brand texture; maintain consistent check size across applications
- High contrast between red badge elements and surrounding content for maximum appetite impact
- The dual typographic voice: geometric sans for credibility, script for warmth
- Product packaging as the central visual anchor in compositions
- Natural wood and food photography styling with top-down perspectives

### Avoid
- Replacing the checkered pattern with flat blue; the texture is essential to brand recognition
- Crowding the handwritten script with tight line heights or excessive tracking
- Using brand-red for large background areas; reserve it for badges, accents, and urgent highlights
- Introducing additional bright colors that compete with the established blue-red-yellow triad
- Flat, shadowless product presentations that lose depth and appetite appeal

### Recommended build order
1. Establish the 4px spacing unit and apply to page structure
2. Implement the checkered pattern as a reusable background asset
3. Set Yantramanav as the primary type family with the four defined size tokens
4. Build the hero banner component with split-background capability
5. Create the circular red badge as a self-contained unit
6. Develop product packaging presentation with consistent framing
7. Add recipe photography cards with rounded corners and subtle shadows
8. Implement section transitions with checkered border strips

### Accessibility
- Ensure text over photography meets contrast minimums; use text-shadow or semi-transparent overlays where necessary
- Provide alt text for product packaging that includes product name and key claims
- Maintain focus indicators on any interactive product or recipe cards
- Consider reduced-motion preferences for any scroll-triggered animations of product packaging
- The red-green color combination in some food photography should not carry meaning independently of text labels

## Scope note

This guide covers the homepage hero and product showcase surfaces visible in the supplied images. Interior pages, navigation menus, footer content, e-commerce flows, and mobile-specific layouts are not represented. Typography measurements are practical adaptation targets based on visual estimation from the provided imagery. Motion behavior, hover states, and form interactions are not documented. Verify licensing for Yantramanav before production use.
