# How mailchimp.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/mailchimp.com-design)

Last updated: 2026-08-10

## Captured pages

[![Footer with mustard-yellow background, multi-column link grid, Intuit brand family logos, and app store badges](https://pin.fontofweb.com/4585?format=jpg)](https://design.withfudge.com/share/pin-4585)

[Footer with mustard-yellow background, multi-column link grid, Intuit brand family logos, and app store badges](https://design.withfudge.com/share/pin-4585)

[![Hero section with serif headline, yellow Sign Up button, and four-column feature preview with product UI screenshots](https://pin.fontofweb.com/4584?format=jpg)](https://design.withfudge.com/share/pin-4584)

[Hero section with serif headline, yellow Sign Up button, and four-column feature preview with product UI screenshots](https://design.withfudge.com/share/pin-4584)

[![Pricing comparison table with four plan tiers, yellow Buy Now buttons, and detailed feature matrix](https://pin.fontofweb.com/4583?format=jpg)](https://design.withfudge.com/share/pin-4583)

[Pricing comparison table with four plan tiers, yellow Buy Now buttons, and detailed feature matrix](https://design.withfudge.com/share/pin-4583)

[![Standard plan promotion with pill tab navigation, yellow checkmark list, and pricing card with contact selector](https://pin.fontofweb.com/4582?format=jpg)](https://design.withfudge.com/share/pin-4582)

[Standard plan promotion with pill tab navigation, yellow checkmark list, and pricing card with contact selector](https://design.withfudge.com/share/pin-4582)

## Overview

Mailchimp's marketing platform presents a confident, approachable visual identity built on three core elements: a distinctive mustard-yellow accent, an elegant serif display typeface for headlines, and a warm neutral palette that shifts between clean white surfaces and rich golden backgrounds. The system balances editorial sophistication with SaaS clarity—serif headlines establish brand personality while sans-serif UI elements ensure functional readability across complex pricing tables, feature comparisons, and product demonstrations.

The design operates across two primary modes: a light, airy presentation for product marketing and conversion flows, and a warm, saturated mode for brand expression and footer areas. This duality creates visual rhythm across long pages while maintaining consistent component behavior. The interface prioritizes clear hierarchy through scale contrast between the light-weight serif display and medium-weight sans-serif labels, with the signature yellow serving as the unifying action color across buttons, highlights, and interactive states.

## Colors

| token | value | use |
|---|---|---|
| action | #FFE01B | Primary buttons, checkmark icons, promotional highlights, and key interactive accents |
| action-hover | #F4D800 | Hover state for primary buttons and interactive yellow elements |
| ink | #241C15 | Primary text, dark backgrounds, active tab pills, and footer link text on warm surfaces |
| canvas | #FFFFFF | Main page backgrounds, pricing card surfaces, and content areas |
| surface | #F6F6F4 | Alternate section backgrounds, table rows, and subtle content separation |
| surface-warm | #E8C547 | Footer backgrounds, brand expression areas, and warm section fills |
| border | #DBD9D2 | Card borders, table dividers, and structural separators |
| border-subtle | #E5E5E5 | Light dividers and secondary boundaries |
| muted | #6B6B6B | Secondary text, disabled states, and supporting information |
| success | #00A91C | Positive indicators and confirmation states |

The color system centers on the high-visibility yellow action color against near-black ink text. This pairing ensures accessible contrast while creating an energetic, optimistic brand impression. The warm surface tone extends the yellow family into larger background areas without overwhelming the interface. White canvas areas dominate conversion-focused sections like pricing and signup, while the warm surface appears in brand-heavy zones like the footer. Neutral borders provide subtle structure without competing for attention. The muted gray handles secondary information and disabled states, maintaining hierarchy without introducing additional chromatic complexity.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Means Web | 3.5rem | 300 | 1.1 | -0.02em | Page headlines, hero statements, and major value propositions |
| section-display | Means Web | 2rem | 400 | 1.2 | -0.01em | Section headings, feature titles, and plan names |
| body | Graphik Web | 1rem | 400 | 1.5 | 0em | Paragraph text, descriptions, and general content |
| body-medium | Graphik Web | 1rem | 500 | 1.5 | 0em | Emphasized body text and mid-weight labels |
| label | Graphik Web | 0.875rem | 500 | 1.4 | 0em | Buttons, navigation items, and compact UI labels |
| navigation | Graphik Web | 0.875rem | 500 | 1 | 0em | Top-bar menu items and utility links |
| legal-copy | Graphik Web | 0.75rem | 400 | 1.5 | 0em | Footer legal text, terms references, and fine print |

Means Web, designed by Greg Gazdowicz and available from Commercial Type Inc, serves as the brand's editorial voice. Its light weight in hero-display creates an open, confident headline presence with slight negative tracking for tighter word spacing. The regular weight in section-display provides slightly more presence for subordinate headings. Graphik Web, designed by Christian Schwartz and available from Commercial Type, handles all functional typography with medium weight for labels and navigation, ensuring clarity at small sizes. Verify licensing for these families before production use.

Type sizes follow a 4px relative unit, with display sizes at 56px and 32px, body at 16px, labels at 14px, and legal copy at 12px. The contrast between the light serif display and medium sans-serif functional text creates clear hierarchy without relying on color alone.

## Layout

The layout system employs a centered content model with generous vertical breathing room. Maximum content width caps at approximately 75rem, creating comfortable line lengths for reading while maintaining visual focus. Sections stack vertically with substantial padding—typically 6rem top and bottom—creating clear separation between content zones.

The header presents a split navigation model: primary navigation clusters left with dropdown indicators, while utility functions (search, language, sales contact, authentication) align right. A promotional banner bar sits above the main navigation, using dark background with light text for temporary messaging. The hero section centers text alignment with a single dominant headline, supporting subhead, and prominent action button, creating a focused conversion entry point.

Below the hero, content often organizes into multi-column grids. Feature previews display in four equal columns with product screenshots, each topped by a concise serif heading. The pricing page demonstrates a more complex layout: a persistent selector bar at top, a sidebar recommendation tool on the left, and a four-column plan comparison grid occupying the majority of the width. This sidebar-main structure repeats in plan detail views, where promotional copy and feature lists occupy the left two-thirds while a sticky pricing card anchors the right third.

Footer areas span full width with warm background, organizing links into five-column grids above a consolidated brand and legal zone. App store badges, social icons, and trademark notices cluster in a centered sub-footer.

## Visual language

The visual language combines editorial restraint with playful brand moments. Rounded pill shapes dominate interactive elements—buttons, tabs, and selectors all use full border-radius rather than sharp corners, creating a friendly, approachable feel. This softness contrasts with the precise grid alignment of pricing tables and feature matrices, balancing personality with functional credibility.

Photography and illustration appear in product screenshots rather than as standalone hero imagery. These interface previews use realistic UI representations with subtle shadows and layered cards to suggest depth without heavy dimensional effects. User avatars in segmentation features appear as circular crops, reinforcing the pill-shape motif.

The yellow accent functions as both functional indicator and brand signature. Checkmarks, active states, and primary actions all draw from the same yellow pool, creating instant recognition. Underline highlights on promotional text extend this accent into typographic treatments, drawing attention to key value propositions without disrupting reading flow.

Iconography remains minimal and functional—small arrows for links, checkmarks for feature lists, and simple glyphs for navigation. The Intuit brand family logos appear in monochrome treatments, maintaining visual cohesion with the primary ink color.

## Components

### Primary Button

- **Anatomy**: Text label centered within a fully rounded pill container
- **Surface**: Solid action yellow background with ink text
- **Typography**: label token, medium weight, centered
- **Shape**: 9999px border-radius creating perfect pill
- **Spacing**: 0.875rem vertical padding, 2rem horizontal padding
- **Composition**: Typically appears singly below headlines or within cards
- **Variants**: Default yellow; hover shifts to slightly deeper yellow

### Secondary Button

- **Anatomy**: Text label within rounded pill with border
- **Surface**: Transparent background with ink border and ink text
- **Typography**: label token
- **Shape**: 9999px border-radius, 1px solid ink border
- **Spacing**: Matches primary button dimensions
- **Composition**: Used for alternative actions like "Log In" or "Request a demo"

### Pricing Card

- **Anatomy**: Vertical stack containing plan name, description, price block, action button, and terms
- **Surface**: White canvas background with subtle border
- **Typography**: Plan name uses section-display; price uses hero-display scale; terms use legal-copy
- **Shape**: 0.5rem border-radius
- **Spacing**: 2rem internal padding
- **Composition**: Cards align in equal-width columns with consistent internal spacing
- **Variants**: Featured plans may include "Best value" badges; disabled states show gray button with muted text

### Tab Pill Group

- **Anatomy**: Horizontal row of rounded pill buttons, one active
- **Surface**: Active pill uses ink background with white text; inactive uses transparent with ink text
- **Typography**: label token
- **Shape**: 9999px border-radius per pill
- **Spacing**: 0.625rem vertical, 1.25rem horizontal padding per pill
- **Composition**: Centered or left-aligned above related content
- **Variants**: Email Marketing, Websites, Transactional Email as visible options

### Feature Check List

- **Anatomy**: Yellow circle with checkmark icon, followed by text label
- **Surface**: Transparent; icon uses action color
- **Typography**: body token for descriptions
- **Shape**: Circular icon containers, approximately 1.25rem diameter
- **Spacing**: Standard component-gap between items; two-column layout for longer lists
- **Composition**: Appears in promotional sections alongside pricing information

### Pricing Comparison Table

- **Anatomy**: Header row with plan names, feature rows with checkmarks or text values, section dividers
- **Surface**: Alternating white and surface rows for readability
- **Typography**: Feature names use body-medium with underline; values use body
- **Shape**: Full-width table with 1px border separators
- **Spacing**: Generous cell padding, approximately 1rem vertical
- **Composition**: Four-column layout matching pricing cards above

### Footer Link Grid

- **Anatomy**: Column headers with stacked link lists below
- **Surface**: Warm yellow background with ink text
- **Typography**: Headers use body-medium; links use body with underline
- **Shape**: No border-radius; full-bleed background
- **Spacing**: Columns evenly distributed with consistent vertical rhythm
- **Composition**: Five primary columns plus brand promotional column

## Responsive behavior

The design should maintain its centered content model across viewports, with the 75rem maximum width preventing excessive line lengths on large screens. Navigation should collapse to a hamburger menu on smaller viewports, preserving the split utility functions in a consolidated drawer.

The four-column feature grid should stack to two columns on tablet and single column on mobile, maintaining image-to-text relationships. Pricing comparison tables require horizontal scroll or accordion treatment on narrow viewports, as four-column comparison cannot reasonably compress below approximately 60rem.

Pricing cards should stack vertically on mobile with the sidebar recommendation tool appearing above or as a collapsible section. The sticky pricing card in plan detail views should become static and full-width on mobile, appearing after promotional content rather than beside it.

Footer link grids should reflow from five columns to two or three on tablet, then single column on mobile with collapsible section headers to manage vertical space.

## Practical implementation guidance

### Preserve
- The distinctive mustard-yellow action color against near-black text for primary interactions
- The Means Web and Graphik Web type pairing, with serif for display and sans-serif for UI
- Full pill border-radius on all buttons and tab selectors
- Generous section spacing with 6rem vertical rhythm
- The warm yellow footer as a brand signature element
- Underlined text links as the default interactive text treatment

### Avoid
- Sharp-cornered buttons or square treatments for primary actions
- Replacing the yellow with alternative accent colors in conversion paths
- Using Means Web for body text or small labels where readability suffers
- Eliminating the warm footer background in favor of generic dark themes
- Crowding pricing tables without adequate cell padding

### Recommended build order
1. Establish type system with Means Web loading strategy and Graphik Web fallbacks
2. Implement color tokens with yellow action system and warm surface variant
3. Build pill button component with primary and secondary variants
4. Create section spacing utilities and max-width container
5. Develop pricing card and comparison table as core conversion components
6. Add tab pill group for plan category switching
7. Implement footer with multi-column link grid and warm background
8. Polish with feature check lists and promotional highlight treatments

### Accessibility
- Ensure yellow action buttons maintain 3:1 contrast against white backgrounds; the ink text on yellow meets this threshold
- Provide visible focus states with ink outline or offset ring on yellow buttons
- Use semantic heading hierarchy with single h1 per page, typically the hero-display headline
- Make pricing tables navigable by keyboard with proper cell header associations
- Include aria-labels on icon-only buttons like search and language selector
- Ensure warm footer background with ink text maintains sufficient contrast; the combination shown meets WCAG AA for large text and UI components

## Scope note

This guide covers the marketing homepage and pricing plan surfaces visible in the supplied images. Mobile layouts, animation behavior, form validation states, account dashboard interfaces, and email template editor tools are not represented. Measurements are practical adaptation targets.
