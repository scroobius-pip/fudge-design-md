# How lennysproductpass.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/lennysproductpass.com-design)

Last updated: 2026-08-10

## Captured pages

[![Three-tier pricing cards with cream, peach, and orange backgrounds showing Monthly, Annual, and Insider subscription options with black pill buttons](https://pin.fontofweb.com/5323?format=jpg)](https://design.withfudge.com/share/pin-5323)

[Three-tier pricing cards with cream, peach, and orange backgrounds showing Monthly, Annual, and Insider subscription options with black pill buttons](https://design.withfudge.com/share/pin-5323)

[![Hero section with scattered orange and yellow product icons, bold headline, orange pill CTA, and product cards with value callouts and corner ribbons](https://pin.fontofweb.com/5322?format=jpg)](https://design.withfudge.com/share/pin-5322)

[Hero section with scattered orange and yellow product icons, bold headline, orange pill CTA, and product cards with value callouts and corner ribbons](https://design.withfudge.com/share/pin-5322)

## Overview

Lenny's Product Pass is a subscription landing page with a distinctive personality that balances professional credibility with approachable warmth. The design centers on a cream-and-orange color story that feels energetic without being aggressive, supported by a typographic system that pairs a bold, confident sans-serif for headlines with a casual hand-drawn script for accents and emphasis. The page communicates value through clear hierarchy: a hero section establishes the proposition, a product showcase demonstrates tangible benefits with partner logos and value calculations, and a pricing section closes with three distinct tiers. Floating product illustrations—rendered in a consistent orange-and-yellow palette with black outlines—scatter across the hero to create visual energy and reinforce the "tools" theme. The overall impression is of a premium offering delivered with personality, targeting product professionals who appreciate both substance and style.

## Colors

The color system builds warmth from a soft cream foundation, layering peach and orange tones to create progression and emphasis. Black provides strong contrast for readability and button surfaces.

| token | value | use |
|---|---|---|
| canvas | `#FFF5EB` | Page background, establishes warm foundation |
| surface | `#FFFFFF` | Cards, content containers, highest contrast areas |
| surface-warm | `#FFD9B8` | Highlighted pricing tier, value badges, secondary emphasis |
| accent | `#F5841F` | Primary CTA buttons, premium pricing tier, value highlights |
| ink | `#000000` | Primary text, secondary buttons, strong borders |
| ink-muted | `#808080` | Disabled tier labels, secondary descriptions, reduced emphasis |
| ink-on-accent | `#000000` | Text on orange surfaces, maintaining contrast |

The palette operates in three temperature zones. The cream canvas (`#FFF5EB`) creates an inviting, non-clinical atmosphere distinct from typical SaaS landing pages. Warm peach (`#FFD9B8`) serves as an intermediate emphasis layer, used for the middle pricing tier and product value badges. Vibrant orange (`#F5841F`) reserves attention for the highest-value actions and the premium tier. Black anchors the system with confident contrast, particularly in pill-shaped buttons and headline text. The product illustrations extend this palette with yellow accents and orange fills, creating visual cohesion without introducing new hues. No dark mode is visible in the supplied material; the system assumes light-background presentation throughout.

## Typography

Three font families create a deliberate contrast between structural authority and casual personality. Degular, designed by Oh No Type Company, delivers bold, slightly condensed headlines with confident weight. Geist, from Basement Studio and Vercel, provides clean, modern body text with excellent readability. Fave-Hand Pro contributes a brush-script character for emphasis, pricing tier labels, and promotional callouts.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Degular | 3.5rem | 700 | 1.1 | -0.02em | Main page headline |
| section-display | Degular | 2.5rem | 700 | 1.15 | -0.01em | Section headings, pricing page title |
| body | Geist | 1rem | 400 | 1.6 | 0em | Paragraph text, descriptions |
| body-large | Geist | 1.25rem | 400 | 1.5 | 0em | Hero subheadline, introductory text |
| label | Geist | 0.875rem | 500 | 1.4 | 0.01em | Button text, navigation, small labels |
| script-accent | Fave-Hand Pro | 1.5rem | 400 | 1.3 | 0em | Tier labels, emphasis phrases |
| script-large | Fave-Hand Pro | 2rem | 400 | 1.2 | 0em | Promotional callouts, large script moments |
| price | Degular | 3rem | 400 | 1 | -0.01em | Pricing figures |
| legal | Geist | 0.75rem | 400 | 1.5 | 0.01em | Fine print, terms |

Type scale follows a 4px grid with sizes at 12px, 14px, 16px, 20px, 24px, 32px, 40px, and 56px equivalents. Headlines use tight negative tracking for a composed, editorial feel. The script family appears at larger sizes where its hand-drawn character remains legible; it is not used for body reading. Weight distinctions are limited: Degular appears at 400 and 700, Geist at 400 and 500, and Fave-Hand Pro at a single weight. Verify licensing for these families before production use. Degular and Fave-Hand Pro are available from their respective sources; Geist carries attribution to Basement Studio, Vercel, Andrés Briganti, Guido Ferreyra, and Mateo Zaragoza.

## Layout

The page employs a centered, single-column composition for the hero and pricing sections, with product cards arranged in a multi-column grid. Maximum content width appears constrained to approximately 1200px, with generous horizontal padding on smaller viewports.

The hero section stacks vertically: a small script logo mark at top, followed by the large headline, supporting description, and centered CTA button. Product illustrations float in the margins, breaking the rectangular grid with organic placement. Below the hero, a logo marquee scrolls partner brands horizontally, followed by a prominent script promotional message.

The product grid uses three columns of equal width with consistent gap spacing. Each product card contains: partner logo and name, description paragraph, and a value badge with circular arrow action. Corner ribbons on select cards indicate "Insider Only" exclusivity.

The pricing section presents three cards in a horizontal row. The left card (Monthly) receives reduced emphasis with muted text. The center card (Annual) uses the warm peach background. The right card (Insider) uses the full orange background as the premium offering. Cards maintain equal height through flex alignment, with action buttons anchored to the bottom.

Vertical rhythm separates major sections with substantial whitespace—approximately 5rem to 7.5rem—creating breathing room between the dense information of the product grid and the decision point of pricing.

## Visual language

The aesthetic combines editorial confidence with playful informality. The hand-drawn script elements and floating illustrations soften what would otherwise be a conventional SaaS layout, creating a personality that feels personal rather than corporate.

Illustration style is consistent across all floating icons: flat shapes with black outlines, filled with orange and yellow tones, occasionally with simple dimensionality. Objects include documents, envelopes, boxes, clocks, and abstract shapes—tools and artifacts of product work. These scatter asymmetrically around the hero headline, with some partially cropped at edges to suggest a larger field.

The script typography reinforces this handmade quality. Fave-Hand Pro appears with a natural, brush-drawn texture, used for the page logo, tier names on pricing cards, and the large promotional statement. White rectangular backgrounds behind script text on pricing cards create a sticker-like effect, adding tactile personality.

Value communication is direct and numerical. Product cards display dollar values prominently in orange within warm badges. The hero includes a large aggregate figure ("$25,000+ IN PRODUCTS") in script, followed by a supporting statement in the same hand-drawn style. This pairing of precise numbers with casual presentation reduces intimidation while maintaining credibility.

Corner ribbons on product cards use diagonal text in small caps, creating a seal-of-approval effect for exclusive offerings. Circular arrow buttons in orange invite interaction within each product card.

## Components

### Primary action button
- **Anatomy**: Text label with right arrow icon, centered within a pill shape
- **Surface**: Orange fill (`{colors.accent}`) with black text (`{colors.ink-on-accent}`)
- **Typography**: `{typography.label}` at medium weight
- **Shape**: Full pill with `{rounded.pill}` (9999px)
- **Spacing**: Comfortable internal padding, approximately 1.5rem vertical and 2.5rem horizontal
- **Composition**: Centered in hero; full-width within pricing cards
- **Variants**: Black fill variant (`{colors.ink}`) with white text for secondary actions in pricing cards

### Pricing card
- **Anatomy**: Tier name, price figure, period label, access description, feature list with checkmarks, bottom action button
- **Surface**: Three distinct treatments—white (`{colors.surface}`) for standard, peach (`{colors.surface-warm}`) for highlighted, orange (`{colors.accent}`) for premium
- **Typography**: Tier name in `{typography.script-accent}` with white sticker background; price in `{typography.price}`; features in `{typography.body}`
- **Shape**: `{rounded.card}` corners (1rem)
- **Spacing**: Generous internal padding with feature list separated by horizontal rule
- **Composition**: Equal height cards in row layout; button anchored to bottom
- **Variants**: Monthly (muted, reduced emphasis), Annual (warm, recommended), Insider (orange, premium)

### Product card
- **Anatomy**: Partner logo and name, description paragraph, value badge with circular action button
- **Surface**: White card (`{colors.surface}`) with subtle shadow
- **Typography**: Partner name in `{typography.section-display}` at smaller scale; description in `{typography.body}`; value in `{typography.script-accent}` within badge
- **Shape**: `{rounded.card}` corners
- **Spacing**: Compact internal padding with comfortable gap between elements
- **Composition**: Three-column grid with consistent gaps
- **Variants**: Standard cards and "Insider Only" variants with diagonal corner ribbon in orange

### Value badge
- **Anatomy**: Dollar value, offer description, circular arrow button
- **Surface**: Warm peach background (`{colors.surface-warm}`)
- **Typography**: Value in orange script; description in smaller sans-serif
- **Shape**: Rounded rectangle with `{rounded.card}`
- **Composition**: Full-width within product card; arrow button positioned at right edge

### Script promotional block
- **Anatomy**: Large aggregate value, supporting statement, decorative underline
- **Typography**: `{typography.script-large}` for value, slightly smaller script for statement
- **Composition**: Centered between hero and product grid; partner logos scrolling above and below

## Responsive behavior

The three-column product grid and pricing card row should collapse to single-column stacking on narrow viewports, maintaining card internal proportions. Hero headline scales down to preserve line breaks and readability; the floating illustrations may reduce in count or reposition to avoid overlap with text. The partner logo marquee likely requires horizontal scroll or reduced logo count on mobile. Pricing card action buttons should become full-width on narrow screens. Script text sizes require careful scaling to maintain legibility of the hand-drawn character at smaller sizes.

## Practical implementation guidance

### Preserve
- The warm cream-to-orange progression that distinguishes this from generic SaaS pages
- The three-weight typographic hierarchy: bold sans-serif for structure, clean sans-serif for reading, script for personality
- The sticker-like white backgrounds behind script labels on colored surfaces
- The floating illustration style with black outlines and limited orange-yellow palette
- The explicit dollar-value communication in product cards

### Avoid
- Adding cool blues or greens that conflict with the warm palette
- Using the script family at small sizes or for body reading
- Creating additional button styles beyond the two visible treatments
- Removing the hand-drawn quality in favor of more conventional geometric shapes
- Cluttering the hero with too many floating illustrations

### Recommended build order
1. Establish the cream canvas and type scale with Degular headlines and Geist body
2. Implement the primary orange pill button as the foundational interactive element
3. Build the three pricing card variants with their distinct surface treatments
4. Create the product card grid with value badges and corner ribbon variants
5. Add floating illustrations and script accents as the final personality layer

### Accessibility
- Ensure orange-on-cream and orange-on-white combinations meet contrast minimums for text; the black text on orange surfaces provides sufficient contrast
- Provide text alternatives for the floating decorative illustrations
- Consider motion sensitivity for the partner logo marquee; offer reduced-motion alternatives
- Maintain visible focus indicators on pill buttons that complement their rounded shape
- Script text should not convey critical information exclusively; pair with standard type for essential content

## Scope note

This guide covers the landing page surface visible in the supplied images, including the hero section, product showcase grid, and pricing tier cards. Navigation, footer, form interactions, checkout flows, and mobile-specific layouts are not represented. Motion behavior for the logo marquee and illustration floating effects are not documented. Measurements are practical adaptation targets derived from visual inspection.
