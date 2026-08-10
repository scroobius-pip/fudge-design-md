# How technologyreview.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/technologyreview.com-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero section with dark teal background, yellow display typography for '10 Things That Matter in AI Right Now', and featured article card with category label and abstract](https://pin.fontofweb.com/9174?format=jpg)](https://design.withfudge.com/share/pin-9174)

[Homepage hero section with dark teal background, yellow display typography for '10 Things That Matter in AI Right Now', and featured article card with category label and abstract](https://design.withfudge.com/share/pin-9174)

[![Homepage hero with navigation bar showing MIT Technology Review logo, Featured/Topics/Newsletters/Events/Audio links, and Sign In/Subscribe buttons with mint accent](https://pin.fontofweb.com/9173?format=jpg)](https://design.withfudge.com/share/pin-9173)

[Homepage hero with navigation bar showing MIT Technology Review logo, Featured/Topics/Newsletters/Events/Audio links, and Sign In/Subscribe buttons with mint accent](https://design.withfudge.com/share/pin-9173)

[![Content feed layout with dark teal page background, white article card with orange top border, sidebar carousel with dot indicators, and promotional banner with arrow icon](https://pin.fontofweb.com/9172?format=jpg)](https://design.withfudge.com/share/pin-9172)

[Content feed layout with dark teal page background, white article card with orange top border, sidebar carousel with dot indicators, and promotional banner with arrow icon](https://design.withfudge.com/share/pin-9172)

## Overview

MIT Technology Review's digital presence is built around editorial authority and visual confidence. The design system employs a dramatic two-mode surface strategy: expansive dark teal sections that immerse readers in feature content, alternating with clean white cards that organize article feeds with crystalline clarity. The typographic voice is singular and disciplined—Neue Haas Grotesk Std carries every weight from delicate body copy to commanding display headlines, creating a cohesive reading experience that feels both contemporary and institutionally grounded.

The homepage architecture reveals a clear content hierarchy. A massive hero zone dominates the upper viewport with oversized yellow display type set against deep teal, establishing immediate visual impact. Below, article cards float on white surfaces with precise metadata labels, category tags, and thumbnail imagery. Navigation remains restrained but functional, with a persistent header containing section links and conversion actions. The overall impression is of a publication that trusts its content to command attention rather than relying on decorative embellishment.

## Colors

The palette operates in deliberate contrast modes. Dark immersive surfaces alternate with light editorial cards, while a controlled accent system directs attention to calls-to-action and category indicators.

| token | hex | use |
|---|---|---|
| ink | #000000 | Primary text on light surfaces, header backgrounds, navigation links |
| ink-near | #08090C | Inset shadow on dark buttons, subtle depth effects |
| ink-muted | #111111 | Secondary text, captions, metadata on light backgrounds |
| canvas | #FFFFFF | Primary page background, article card surfaces, hero text on dark |
| surface | #004142 | Immersive hero backgrounds, dark section fills, footer areas |
| surface-light | #A0F5E9 | Mint accent for Subscribe button, promotional highlights |
| accent-yellow | #F2DC6F | Hero display headlines, featured labels, category tags on dark |
| accent-orange | #F5AD6E | Card top borders, sidebar accent borders, promotional emphasis |
| accent-mint | #A0F5E9 | Subscribe actions, success states, light promotional banners |
| border-light | #EBECF0 | Subtle dividers, card separators, inactive states |

The dark mode is not merely inverted—it is a fully realized surface with its own typographic logic. Yellow headlines on teal (#004142) achieve high luminance contrast without the harshness of pure white, while white body copy maintains readability for longer passages. Light mode sections use near-black text on pure white for maximum legibility in dense article lists. The orange accent (#F5AD6E) appears sparingly as a structural marker: a 2px top border on featured cards, a frame around sidebar carousels. The mint accent (#A0F5E9) is reserved exclusively for the Subscribe call-to-action, creating a recognizable conversion color that repeats across contexts.

## Typography

Neue Haas Grotesk Std serves as the sole type family, with three specific font files deployed: Neue Haas Grotesk Std-55 Roman (400), Neue Haas Grotesk Std-65 Medium (600), and Neue Haas Grotesk Std-75 Bold (700). These were designed by Christian Schwartz and are available from Linotype GmbH. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Neue Haas Grotesk Std | 3.875rem | 600 | 1.03 | normal | Immersive hero headlines, feature titles on dark teal |
| section-display | Neue Haas Grotesk Std | 2.5rem | 600 | 1.1 | normal | Section headers, major article titles in feeds |
| headline | Neue Haas Grotesk Std | 1.625rem | 600 | 1.08 | normal | Card headlines, sidebar feature titles |
| body | Neue Haas Grotesk Std | 1rem | 400 | 1.23 | normal | Article descriptions, navigation links, general content |
| body-small | Neue Haas Grotesk Std | 0.875rem | 400 | 1.71 | normal | Metadata, timestamps, category labels in lists |
| label | Neue Haas Grotesk Std | 0.75rem | 700 | 2.0 | 0.08em | Category tags, "New" indicators, uppercase metadata |
| navigation | Neue Haas Grotesk Std | 1.125rem | 600 | 1.33 | normal | Header section links, primary navigation items |

The hero display size (62px/3.875rem) with its tight 64px line height creates a stacked, monumental quality for feature headlines. Section display (40px/2.5rem) carries similar weight but at a scale suited for feed contexts. The label style's wide tracking (0.08em, approximately 0.96px at 12px) distinguishes metadata from reading copy without requiring a separate condensed face. Body copy maintains a compact 19.696px line height that respects editorial density while preventing claustrophobia. The type system avoids italic styles entirely, relying on weight and scale contrast for emphasis.

## Layout

The page architecture follows a centered container model with generous horizontal margins. The header spans full width with internal padding, while main content areas occupy a constrained central column that creates breathing room on large viewports.

The header establishes a three-zone composition: the MIT Technology Review wordmark lockup positioned left, primary navigation links centered, and utility actions (Sign In, Subscribe) aligned right. Navigation links use horizontal inline arrangement with consistent spacing. The header height is determined by content plus vertical padding, creating a clean horizontal band that separates from content below.

Content sections employ asymmetric two-column arrangements. The primary feed occupies a wider left column (approximately 60% of the content area), while a narrower right sidebar contains promotional carousels, secondary features, and recurring content modules. This ratio shifts in featured sections where a single hero may span the full content width before splitting into the two-column feed below.

Vertical rhythm is established through section spacing of 60px (3.75rem) between major content blocks. Article cards receive 40px (2.5rem) internal padding, creating consistent internal breathing room. Negative margins (-60px horizontal) on certain containers allow background colors to bleed to content edges while maintaining text alignment within the readable column. The promotional banner spans full content width with 16px vertical padding and 28px horizontal padding, creating a distinct horizontal band that interrupts the feed rhythm without disrupting it.

## Visual language

The aesthetic character balances institutional restraint with moments of editorial drama. The dark teal surface (#004142) is the system's signature: it transforms standard article promotions into immersive experiences that feel closer to magazine spreads than web templates. Against this ground, yellow display type acquires a luminous quality that photographs and illustrations cannot replicate.

Imagery treatment favors full-bleed photography with natural color grading—no heavy filters or duotone effects. The abstract, painterly quality of hero illustrations suggests commissioned editorial art rather than stock photography. Thumbnails in article cards maintain rectangular aspect ratios with crisp edges, presented without rounded corners or shadow effects.

Geometric precision defines the system's non-photographic elements. Category tags appear as sharp rectangles with solid fills. Buttons are unapologetically square-edged. The only softening element is a subtle 1px border radius on certain containers (approximately 1.008px), so minimal as to be nearly imperceptible—likely a technical artifact rather than an intentional design gesture. The orange top border on featured cards (2px solid) functions as a structural accent, a horizontal rule that elevates certain content without requiring badge overlays or background tints.

Shadow usage is extremely limited. A single visible shadow pattern appears as an inset effect: `rgb(8, 9, 12) 0px 0px 0px 2.496px inset`, creating a subtle inner border on interactive elements. No drop shadows elevate cards or create false depth—layering is achieved through color contrast and spatial separation alone.

## Components

### Header navigation

- **Anatomy**: Wordmark lockup (MIT / Technology / Review stacked), five primary links (Featured, Topics, Newsletters, Events, Audio), Sign In button, Subscribe button
- **Surface**: Transparent background over page content; switches to solid black (#000000) when scrolled or on dark sections
- **Typography**: Navigation token for links; label token for Sign In (uppercase, tracked); navigation token for Subscribe
- **Shape**: No border radius; Sign In uses 2px inset shadow for border definition; Subscribe uses solid mint fill
- **Spacing**: 100px horizontal page gutters; 20px vertical margins; 10px 20px button padding
- **Composition**: Flex row with space-between alignment; links centered as a group

### Hero feature block

- **Anatomy**: Full-width background image or illustration, overlaid with massive display headline, optional subheadline, metadata line (category tag + timestamp), description paragraph
- **Surface**: Dark teal (#004142) background or image with teal overlay; yellow (#F2DC6F) headline text; white (#FFFFFF) body text
- **Typography**: Hero-display for headline; body for description; label for category tag with solid fill background
- **Shape**: No border radius; content aligned left with generous internal padding
- **Spacing**: 60px internal padding; 40px vertical padding on text block; negative margins to bleed to edges
- **Variants**: Full-bleed image version with text overlay; solid color version with stacked typographic lockup

### Article card

- **Anatomy**: Optional top accent border, category label, timestamp, headline, description, thumbnail image
- **Surface**: White (#FFFFFF) background on dark sections; inherits page background in light sections
- **Typography**: Headline token for title; body for description; body-small for metadata; label for "New" indicator with black fill and white text
- **Shape**: Sharp corners (0rem radius); 2px solid orange (#F5AD6E) top border on featured variants
- **Spacing**: 40px internal padding; 40px top padding for content area; 0px 40px 0px 0px for image gutter
- **Composition**: Two-column internal layout with text left, image right; image occupies approximately 50% of card width

### Sidebar carousel

- **Anatomy**: Framed container with image, category label, headline, dot navigation indicators below
- **Surface**: Transparent background; 2px solid orange (#F5AD6E) border creating frame effect
- **Typography**: Headline token for featured title; body-small for metadata
- **Shape**: Sharp corners; border creates decorative frame without internal padding on image
- **Spacing**: 38px internal padding; 15px indicator spacing
- **Composition**: Vertical stack with image top, text below, dot indicators centered beneath

### Promotional banner

- **Anatomy**: Icon or emoji prefix, promotional text, arrow icon suffix
- **Surface**: Light mint or pale green background (#A0F5E9 variant); near-black text
- **Typography**: Body weight, standard size
- **Shape**: Sharp corners; full content width
- **Spacing**: 16px vertical padding; 28px horizontal padding
- **Composition**: Flex row with center alignment; arrow icon positioned at right edge

### Category tag

- **Anatomy**: Text label with optional solid background fill
- **Surface**: Yellow fill (#F2DC6F) with dark text for featured labels; black fill (#000000) with white text for "New" indicators
- **Typography**: Label token with uppercase styling and wide tracking
- **Shape**: Sharp rectangle; 2px 10px padding creating compact pill-like proportions without radius
- **Spacing**: 2px vertical padding; 10px horizontal padding; 12px right margin when adjacent to other metadata

## Responsive behavior

The desktop layout assumes a minimum viewport width of approximately 1200px based on the 388px auto margins that center content. At narrower viewports, the two-column feed should collapse to a single column with cards stacking vertically. The sidebar carousel would relocate below the primary feed or transform into a horizontal scroll container.

The hero block's massive display type (62px) requires viewport-based scaling to maintain impact without overflow. A reduction to section-display size (40px) at tablet widths and headline size (26px) at mobile widths preserves hierarchy while ensuring readability. The stacked wordmark lockup may compress to a single-line abbreviated form or reduce in scale on narrow viewports.

Navigation links in the header should collapse to a hamburger menu below approximately 900px, with the Subscribe action remaining visible as a persistent conversion point. The Sign In button may hide or compress to an icon-only treatment.

Dark immersive sections should maintain their teal background across all breakpoints, with internal padding reducing proportionally. Article card internal padding can compress from 40px to 24px on mobile to maximize content area without sacrificing touch targets.

## Practical implementation guidance

### Preserve
- The singular type family approach—every text element in Neue Haas Grotesk Std maintains system coherence
- The dramatic dark/light surface alternation that creates visual rhythm and editorial hierarchy
- The precise 2px orange top border as a featured-content signal without decorative excess
- The wide tracking on label elements that distinguishes metadata from reading copy
- The mint (#A0F5E9) Subscribe button as a consistent conversion color across all contexts

### Avoid
- Adding border radius to cards, buttons, or tags—the sharp corners are integral to the system's institutional character
- Introducing drop shadows for elevation—rely on color contrast and spatial separation instead
- Using the yellow accent (#F2DC6F) for body text or backgrounds—it is reserved for display headlines and small tags
- Expanding the type palette with additional families—the single-family discipline is a core strength
- Creating gradient backgrounds—the system relies on flat, assertive color fields

### Recommended build order
1. Establish the type scale with Neue Haas Grotesk Std at all weights, verifying web font licensing and subsetting for performance
2. Implement the dark teal (#004142) and white (#FFFFFF) surface system with proper contrast ratios
3. Build the header with wordmark, navigation, and dual-button pattern (Sign In outline, Subscribe fill)
4. Create the hero block with responsive display type scaling and metadata label system
5. Develop the article card component with optional orange top border and two-column internal layout
6. Add the sidebar carousel with framed border treatment and dot indicators
7. Implement spacing tokens (unit, section, content-gap, card-padding, page-gutter) across all components

### Accessibility
- Ensure yellow headlines on dark teal meet WCAG AA contrast requirements; the combination of #F2DC6F on #004142 should be verified with a contrast checker
- Provide focus indicators for all interactive elements; the existing 2px inset shadow pattern can serve as a focus style foundation
- Maintain logical heading hierarchy with a single h1 per page, typically the hero headline
- Ensure category tags with background fills maintain sufficient contrast between text and fill colors
- Consider reduced-motion preferences for any carousel or promotional banner animations
- The mint Subscribe button on dark backgrounds should be tested for color blindness visibility

## Scope note

This guide covers the MIT Technology Review homepage including the hero feature block, article feed cards, sidebar carousel, header navigation, and promotional banner components. Mobile layouts, article detail pages, search interfaces, newsletter signup forms, and footer content are not represented in the supplied materials. Interactive states including hover, active, focus, and loading behaviors should be defined during implementation based on these foundational patterns.
