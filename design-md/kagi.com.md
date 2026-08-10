# How kagi.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/kagi.com-design)

Last updated: 2026-08-10

## Captured pages

[![Full pricing page showing four-tier card layout with Trial, Starter, Professional, and Ultimate plans against a split dark-and-yellow background with pill-shaped toggle controls.](https://pin.fontofweb.com/9410?format=jpg)](https://design.withfudge.com/share/pin-9410)

[Full pricing page showing four-tier card layout with Trial, Starter, Professional, and Ultimate plans against a split dark-and-yellow background with pill-shaped toggle controls.](https://design.withfudge.com/share/pin-9410)

[![Family and Duo plan pricing cards with warm yellow lower background, featuring illustrated dog mascots and per-month pricing with feature bullet lists.](https://pin.fontofweb.com/9412?format=jpg)](https://design.withfudge.com/share/pin-9412)

[Family and Duo plan pricing cards with warm yellow lower background, featuring illustrated dog mascots and per-month pricing with feature bullet lists.](https://design.withfudge.com/share/pin-9412)

[![Team plan tab selected showing Professional and Ultimate tier cards with per-user pricing and AI feature callouts on the yellow-accented pricing page.](https://pin.fontofweb.com/9411?format=jpg)](https://design.withfudge.com/share/pin-9411)

[Team plan tab selected showing Professional and Ultimate tier cards with per-user pricing and AI feature callouts on the yellow-accented pricing page.](https://design.withfudge.com/share/pin-9411)

[![Fair Pricing section with large curved yellow-to-dark gradient divider, playful seesaw illustration with dog mascot, and centered policy explanation text.](https://pin.fontofweb.com/9413?format=jpg)](https://design.withfudge.com/share/pin-9413)

[Fair Pricing section with large curved yellow-to-dark gradient divider, playful seesaw illustration with dog mascot, and centered policy explanation text.](https://design.withfudge.com/share/pin-9413)

## Overview

Kagi's visual identity centers on a dark, trustworthy canvas punctuated by warm amber energy and playful illustrated mascots. The design communicates privacy and professionalism through deep navy surfaces while using friendly dog characters and bold pricing displays to feel approachable rather than corporate. The system balances high-contrast readability with moments of warmth, creating a distinctive personality in the search-product space. Every page section uses generous vertical breathing room, with content anchored in centered compositions that guide the eye through clear hierarchies. The interplay between dark technical surfaces and humanizing illustration creates a brand that feels both capable and kind.

## Colors

The palette operates in a dark-first mode with selective warm accents. The foundation is a deep navy-black that reduces eye strain and signals seriousness about privacy. Amber provides the primary energy and call-to-action warmth, while lavender offers a secondary accent for premium or highlighted states.

| token | value | use |
|---|---|---|
| canvas | #181824 | Primary page background, deepest surface |
| canvas-deep | #23232F | Card backgrounds, elevated surfaces |
| surface | #2F2F3B | Toggle backgrounds, secondary containers |
| surface-elevated | #454553 | Hover states, subtle elevation |
| ink | #FFFFFF | Primary text, icons, headings |
| ink-muted | #E8E8F0 | Secondary headings, emphasized body |
| ink-dim | #CFCFD1 | Feature lists, supporting text |
| ink-faint | #9F9FA5 | Tertiary labels, disabled hints |
| accent-amber | #FFB319 | Primary CTAs, active toggles, gradient accents |
| accent-amber-light | #FFE1A4 | Information banners, soft highlights |
| accent-lavender | #C9C1FF | Premium tier CTAs, special callouts |
| border | #454549 | Card outlines, structural dividers |
| border-subtle | #2F2F31 | Inner boundaries, hairline separators |
| shadow | #000000 | Drop shadows at 50% opacity for depth |

The pricing page employs a dramatic split-background technique: a dark upper region carries the header and plan introduction, while a warm amber lower region anchors the pricing cards visually. A curved gradient transition between these zones—visible in the Fair Pricing section—creates organic movement that softens the otherwise geometric layout. The lavender accent appears exclusively on the Ultimate tier call-to-action, creating a clear premium signal without disrupting the amber-dominant energy.

## Typography

The type system draws from multiple families: Lufga for display and brand moments, Helvetica for body and interface text on the pricing page, and system fonts including Applesystem, System-Systemui, and System-Uisansserif on the homepage. Arial appears in the footer at reduced sizes. Lufga's geometric warmth with slight character quirks appears in headings and price displays, while Helvetica's neutrality ensures readability across dense feature lists and policy explanations. The system font stack handles homepage body content, and Arial serves footer utility text.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Lufga | 4.5rem | 700 | 1 | normal | Page titles, major section headers |
| section-display | Lufga | 3rem | 700 | 1.05 | normal | Subsection headings, feature titles |
| card-title | Lufga | 2.25rem | 600 | 1.15 | normal | Pricing tier names, plan labels |
| price-display | Lufga | 4.875rem | 700 | 1 | normal | Dollar amounts, prominent figures |
| body | Helvetica | 1rem | 400 | 1.45 | normal | Paragraphs, descriptions, lists |
| body-large | Helvetica | 1.25rem | 400 | 1.5 | normal | Introductory paragraphs, policy text |
| label | Helvetica | 0.875rem | 400 | 1.5 | normal | Toggle labels, metadata, captions |

Lufga is designed by Adam Ladd. Verify licensing for these families before production use. The display sizes use tight leading to create impactful blocks of text, while body text maintains generous line height for comfortable reading of feature lists and policy details. Price displays are intentionally oversized relative to surrounding text, creating immediate visual anchors that communicate value before visitors read specifics.

## Layout

The layout system relies on centered content with generous horizontal margins and clear vertical rhythm. The main content container uses a maximum width with automatic side margins, creating consistent alignment across viewport sizes.

Page sections stack vertically with substantial padding between them—typically 4rem to 8rem depending on content importance. The pricing page header occupies the full dark upper portion, with plan cards positioned to straddle the dark-to-amber transition. This creates visual tension that draws attention to the pricing decision.

The pricing cards themselves use a grid layout that adapts from single column on narrow viewports to four columns on desktop. Cards maintain equal height through flexbox alignment, with internal content distributed from top to bottom: tier name, description, illustration, price, feature list, and call-to-action button. This consistent internal structure allows visitors to scan across plans efficiently.

Spacing follows a modular scale based on 0.125rem increments. Common values include 1.5rem for card internal gaps, 2rem for card padding, and 3rem for section separations. The horizontal page margins are substantial—approximately 5rem on each side at desktop—creating a framed, editorial feel that prevents content from feeling scattered.

## Visual language

Illustration style defines much of Kagi's personality. The dog mascot appears throughout in simple line-art renderings with minimal color fills—typically white outlines against dark backgrounds, with occasional amber or lavender accents. These characters engage in human activities: using laptops, wearing ties, balancing on seesaws. The style is flat with consistent stroke weights, avoiding gradients or complex shading within the illustrations themselves.

Photography is absent from the interface; all visual interest comes from illustration, color blocking, and typography. The amber lower background on pricing pages functions almost as a character itself—warm, energetic, and distinctly different from the dark technical upper region.

Shadows are used sparingly but purposefully: pricing cards carry a soft, large-radius shadow that lifts them from the amber background, while input fields and buttons use subtler elevation. The shadow color is pure black at reduced opacity, maintaining the dark palette's coherence.

Border radius communicates component function. Cards use 1.5rem for a friendly but structured feel. Buttons and toggles use full pill shapes. Input fields use 2rem—rounded but not fully circular. This progression from structural to interactive creates intuitive affordances.

## Components

### Pricing card

The central component of the pricing experience. Each card presents a single subscription tier.

- **Anatomy**: Tier name, subtitle description, mascot illustration, price block, feature bullet list, "Learn more" link, and "Get started" call-to-action button.
- **Surface**: Background is canvas-deep (#23232F) with a 2px border in border (#454549). Cards on the Ultimate tier use an accent-lavender border instead to signal premium status.
- **Typography**: Tier name uses card-title token. Price uses price-display with "/mo" suffix in body size. Feature lists use body with ink-dim color.
- **Shape**: 1.5rem border radius on all corners. Full-width within grid column.
- **Spacing**: 2rem internal padding with 1.5rem vertical gaps between content blocks. Price block receives additional top margin for visual separation from illustration.
- **Composition**: All content center-aligned. Feature lists left-aligned with consistent bullet markers. Call-to-action button spans full card width at bottom.
- **Variants**: Standard cards use white CTA buttons with dark text. The Ultimate tier uses a lavender-filled CTA. The Trial tier displays "Free" as price text rather than a dollar amount.

### Toggle pill group

Segmented control for switching between plan categories and billing intervals.

- **Anatomy**: Container with multiple pill-shaped buttons. One active state, remainder inactive.
- **Surface**: Container uses surface background. Inactive pills are transparent with ink-dim text. Active pill uses accent-amber fill with canvas text.
- **Typography**: Label token, centered within each pill.
- **Shape**: Full pill radius (9999px). Individual pills separated by minimal gap.
- **Spacing**: Container padding approximately 0.25rem. Individual pill padding 0.5rem vertical, 1.25rem horizontal.
- **Composition**: Two groups typically appear side by side: plan type (Individual/Family/Team) and billing interval (Monthly/Annually).

### Information banner

Highlighted policy or explanation block.

- **Anatomy**: Rounded rectangle containing centered paragraph text with inline links.
- **Surface**: accent-amber-light background with canvas text. Links are underlined for identification.
- **Typography**: body-large token for comfortable reading of policy details.
- **Shape**: 1.5rem border radius, matching card radius for family consistency.
- **Spacing**: Generous internal padding—2rem vertical, 1.875rem horizontal. Positioned below pricing cards with adequate separation.

### Header navigation

Top-of-page wayfinding with logo and primary links.

- **Anatomy**: Logo mark left-aligned, navigation links right-aligned. Dropdown indicator on "Kagi for" item.
- **Surface**: Transparent or canvas background. Ink-colored text.
- **Typography**: Lufga Regular at 1rem for logo and navigation items.
- **Composition**: Horizontal flex layout with 2rem gap between navigation items. Sign-up and sign-in actions grouped at far right.

## Responsive behavior

The pricing card grid collapses from four columns to two columns at intermediate widths, then to a single stacked column on narrow viewports. Cards maintain their internal structure and proportions throughout, with padding scaling down modestly.

The dramatic split background on pricing pages simplifies on smaller screens—the amber region may extend higher or the transition may flatten to a horizontal rule rather than a curve. The Fair Pricing section's large curved divider likely becomes a simpler angled or straight transition.

Typography scales down by approximately 15-20% on mobile: hero-display moves from 4.5rem to approximately 3.5rem, price-display from 4.875rem to 3.5rem. Body text remains at 1rem for readability.

Navigation collapses to a hamburger menu or simplified icon set on narrow viewports, though this behavior is not visible in the supplied images and should be implemented based on standard patterns.

## Practical implementation guidance

### Preserve
- The dark-first palette with true black shadows and deep navy surfaces
- Lufga's role in all display and brand typography; never substitute a generic geometric sans
- The illustrated mascot style with consistent line weight and minimal fill
- The amber-to-dark split background as a signature pricing-page element
- Full-pill shapes for interactive elements, maintaining that friendly softness
- Centered compositions with generous horizontal margins

### Avoid
- Light backgrounds for primary surfaces; the dark mode is core to brand identity
- Multiple accent colors beyond amber and lavender; the palette is intentionally restrained
- Sharp-cornered cards or buttons; radius is part of the friendly personality
- Generic stock photography; the illustration system is distinctive
- Tight line heights in body text; the generous leading aids readability

### Recommended build order
1. Establish the dark canvas and surface color tokens
2. Implement Lufga for headings with exact size and weight specifications
3. Build the pricing card component with proper border, shadow, and internal spacing
4. Create the toggle pill group with active and inactive states
5. Add the split-background layout with gradient transition
6. Integrate illustration assets with consistent sizing and positioning
7. Implement responsive collapse for card grids

### Accessibility
- Ensure all text on amber backgrounds meets contrast requirements; the dark canvas text on accent-amber-light should be verified
- Provide focus indicators that match the pill-shaped interactive elements
- Maintain semantic heading hierarchy: page title as h1, tier names as h2 or h3
- Include aria-pressed or similar state indication on toggle pills
- Ensure mascot illustrations have appropriate alt text describing the scene rather than decorative null alt

## Scope note

This guide covers the pricing page and homepage surfaces visible in the supplied images. Mobile layouts, animation behavior, form validation states, and checkout flows are not represented. The footer area appears in limited detail; its full structure and link organization would require additional reference. Measurements are exact where retained in the design facts; adapted values follow the documented relative unit scale.
