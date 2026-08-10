# How humantouch.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/humantouch.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dark forest footer with email capture, social icons, and multi-column navigation links on near-black background](https://pin.fontofweb.com/2576?format=jpg)](https://design.withfudge.com/share/pin-2576)

[Dark forest footer with email capture, social icons, and multi-column navigation links on near-black background](https://design.withfudge.com/share/pin-2576)

[![Three-column engagement section with rounded pill buttons and oval-cropped lifestyle photography on warm off-white](https://pin.fontofweb.com/2575?format=jpg)](https://design.withfudge.com/share/pin-2575)

[Three-column engagement section with rounded pill buttons and oval-cropped lifestyle photography on warm off-white](https://design.withfudge.com/share/pin-2575)

[![Blog grid with asymmetric image layout, serif headlines, and underlined READ MORE links on white](https://pin.fontofweb.com/2574?format=jpg)](https://design.withfudge.com/share/pin-2574)

[Blog grid with asymmetric image layout, serif headlines, and underlined READ MORE links on white](https://design.withfudge.com/share/pin-2574)

[![Portrait testimonial card with video play button, white text overlay, and rounded corners on photographic background](https://pin.fontofweb.com/2573?format=jpg)](https://design.withfudge.com/share/pin-2573)

[Portrait testimonial card with video play button, white text overlay, and rounded corners on photographic background](https://design.withfudge.com/share/pin-2573)

## Overview

Human Touch presents a wellness brand identity built on the tension between restorative warmth and grounded sophistication. The system pairs deep forest greens and near-black surfaces with warm off-white backgrounds, creating a visual rhythm that moves from airy editorial moments to immersive dark zones. Typography establishes hierarchy through contrast: a refined serif display face carries emotional weight in headlines, while a clean sans-serif handles functional body text and navigation. Photography favors natural light, candid human connection, and lifestyle contexts over sterile product isolation. The overall impression is of a mature health brand that trusts its audience with understated elegance rather than aggressive promotion. Rounded pill buttons and generously curved image corners soften the geometry, reinforcing the comfort and ease central to the product promise.

## Colors

The palette operates in two modes: a warm light mode for editorial and product discovery, and a deep dark mode for footer immersion and dramatic contrast moments.

| token | value | use |
|---|---|---|
| ink | #141E1A | Primary text, dark backgrounds, primary button fill |
| canvas | #F5F3EE | Page background, warm neutral ground for photography |
| surface | #FFFFFF | Card backgrounds, input fields, lightest contrast layer |
| action | #D97A3E | Submit buttons, accent CTAs, warm energetic highlight |
| action-hover | #C26A32 | Darkened action for hover states |
| muted | #6B7B73 | Secondary text, footer navigation, disabled impressions |
| border | #D4CFC7 | Subtle dividers, input borders, hairline separators |

The dark footer in `ink` creates a grounding bookend to the experience, with `canvas` providing the warm, inviting atmosphere where product photography dominates. `action` appears sparingly as a warm terracotta accent reserved for high-commitment interactions like form submission. Text on dark surfaces uses `canvas` or `surface` for legibility, while `muted` handles de-emphasized navigation and supporting copy. The border tone is deliberately warm rather than cool gray, maintaining cohesion with the photography's natural light quality.

## Typography

The type system pairs Taviraj's elegant serifs for display moments with Lato's neutral clarity for functional text. Roboto appears only at the smallest sizes for legal and technical copy.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Taviraj | 3rem | 400 | 1.1 | -0.01em | Testimonial names, major section headers |
| section-display | Taviraj | 2.25rem | 400 | 1.15 | 0 | Blog headlines, feature titles |
| body | Lato | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, general content |
| body-large | Lato | 1.25rem | 400 | 1.5 | 0 | Lead paragraphs, emphasized descriptions |
| label | Lato | 0.875rem | 700 | 1.4 | 0.02em | Button text, category labels, CTAs |
| navigation | Lato | 0.875rem | 400 | 1.4 | 0.01em | Footer links, header navigation |
| legal-copy | Roboto | 0.75rem | 400 | 1.5 | 0 | Copyright, policy links, fine print |

Taviraj's classical proportions with slightly condensed character shapes give headlines a distinctive editorial presence without feeling ornate. Lato's geometric clarity ensures readability at small sizes and maintains neutrality against the more expressive display face. The tracking on labels is intentionally tightened to create compact, confident button text. Verify licensing for these families before production use.

## Layout

The page structure alternates between full-bleed immersive sections and contained content bands. The three-column engagement section demonstrates a balanced grid with equal-width columns, generous internal padding, and consistent vertical rhythm. Blog content uses an asymmetric grid: a dominant feature article occupies roughly half the width with stacked secondary articles filling the remainder, creating visual interest through scale variation rather than uniform repetition.

Section spacing follows a 5rem baseline between major content bands, with 1.5rem gutters between related elements. The footer compresses this rhythm, using tighter 1rem vertical spacing between navigation columns while maintaining horizontal breathing room. Content containers appear to max out around 1200px with centered alignment, leaving comfortable margins on wider viewports.

Image treatment is integral to layout logic: oval and rounded-rectangle crops break the rectangular monotony, with lifestyle photography bleeding to column edges while product shots maintain internal padding. The testimonial card uses full-bleed photography with text overlaid in the lower third, protected by gradient or shadow treatment rather than solid scrims.

## Visual language

Photography direction centers on authentic human wellness moments: couples in natural settings, individuals in contemplative rest, and product integration into lived environments. Color grading leans warm with lifted shadows, avoiding the clinical coolness of medical equipment marketing. The oval crop treatment for engagement section images creates a soft, approachable frame that echoes the rounded button language.

The dark footer represents a deliberate mood shift: from the airy optimism of product discovery to grounded institutional trust. Endorsement badges from chiropractic and wellness organizations appear here, reinforcing credibility through third-party validation rather than self-claim. Social icons use simple line weights without circular containers, maintaining the clean, uncluttered aesthetic.

Decorative minimalism defines the system: no heavy shadows, no gradient backgrounds on UI elements, no border-radius variation beyond the consistent pill and rounded-corner vocabulary. The horizontal rule flanking "Human TouchPoints" in the blog header provides rare linear ornament, used to center and elevate the section title without competing with photography.

## Components

### Primary Button

- **Anatomy**: Text label centered within a pill-shaped container
- **Surface**: `ink` background with `surface` text, or `action` background for high-emphasis submission
- **Typography**: `{typography.label}` — bold, compact, uppercase-ready weight
- **Shape**: Full pill with `9999px` border radius
- **Spacing**: 1rem vertical padding, 2.5rem horizontal padding
- **Composition**: Typically full-width within its column or centered below descriptive text

### Secondary Button

- **Anatomy**: Same pill structure as primary, reduced visual weight
- **Surface**: `action` background for warm accent, or `ink` for dark variant
- **Typography**: `{typography.label}`
- **Shape**: Full pill, slightly more compact padding at 0.875rem by 2rem
- **Composition**: Appears in triptych engagement cards with equal width per column

### Testimonial Card

- **Anatomy**: Full-bleed portrait photograph with overlaid text block in lower portion
- **Surface**: Transparent over photography, text in `surface` for contrast
- **Typography**: Name in `{typography.hero-display}`, role in `{typography.body}`, quote in `{typography.body-large}`
- **Shape**: 1.5rem rounded corners on card container
- **Composition**: Play button centered as circular overlay, 3rem diameter, `surface` fill with `ink` triangle icon
- **Spacing**: Text inset 1.5rem from edges, vertically stacked with 0.5rem between elements

### Blog Card

- **Anatomy**: Image thumbnail with headline, description, and underlined link below
- **Surface**: `surface` background, `ink` text
- **Typography**: Headline in `{typography.section-display}`, body in `{typography.body}`, link in `{typography.label}` with underline
- **Shape**: 1rem rounded corners on images
- **Composition**: Asymmetric grid with feature card spanning full height, secondary cards stacked
- **Variants**: Feature variant with larger image proportion; standard variant with thumbnail beside text

### Email Capture

- **Anatomy**: Text input field with adjacent submit button
- **Surface**: Input uses `surface` fill with subtle `border` stroke; submit uses `action` pill
- **Typography**: Input placeholder in `{typography.body}`, submit in `{typography.label}`
- **Shape**: Input with 9999px pill radius matching button; button slightly taller for visual balance
- **Spacing**: Tight 0.5rem gap between input and button, 1.5rem below preceding headline

### Footer

- **Anatomy**: Logo lockup, mission statement, email capture, social row, multi-column navigation, legal bar
- **Surface**: `ink` background throughout, `canvas` text, `muted` for secondary links
- **Typography**: Column headers in `{typography.label}`, links in `{typography.navigation}`, legal in `{typography.legal-copy}`
- **Composition**: Five-column grid on desktop: brand block spanning two columns, three link columns, with full-width legal bar below separated by hairline
- **Spacing**: 5rem top padding, 2rem bottom padding, 1rem between link rows

## Responsive behavior

The three-column engagement grid should stack vertically on narrow viewports, maintaining full-width pill buttons and centered text alignment. Blog asymmetry may collapse to a single column with feature article leading, followed by stacked secondary cards. Footer navigation columns should reflow to two-column then single-column as space compresses, with social icons remaining horizontally grouped.

Testimonial cards require text size reduction on small screens to maintain readable line lengths over photography. The play button should remain touch-accessible at 44px minimum. Input and button in email capture should stack vertically on mobile, with button remaining full-width for thumb reachability.

## Practical implementation guidance

### Preserve
- The warm `canvas` page background against which photography sits; pure white would feel sterile
- Taviraj's delicate serifs for emotional headlines; substituting a geometric sans would lose editorial distinction
- Full pill buttons as the exclusive interactive shape; partial rounding would fragment the soft vocabulary
- Dark footer as immersive closure; light footers would undermine the brand's grounded maturity

### Avoid
- Cool gray neutrals that clash with the warm photography grade
- Sharp-cornered cards or buttons that contradict the comfort positioning
- Multiple accent colors competing with the singular `action` terracotta
- Body text in Taviraj at small sizes; its fine details degrade below 1.25rem

### Recommended Build Order
1. Establish `canvas` and `ink` as foundation colors with `surface` for elevated layers
2. Implement Taviraj at display sizes and Lato for body, verifying webfont loading performance
3. Build pill button component with consistent padding and full radius
4. Create image crop variants: 1rem rounded rectangle for blog, 1.5rem for cards, oval for lifestyle
5. Assemble footer as dark-mode template with navigation grid and email capture
6. Layer in `action` accent sparingly for primary conversion points only

### Accessibility
- Ensure `ink` text on `canvas` meets WCAG AA contrast; the dark tone is intentionally rich
- Testimonial overlays require sufficient text-shadow or gradient backing for `surface` text over varied photography
- Focus indicators should use `action` color with 2px outline offset for visibility on both light and dark surfaces
- Form inputs need visible `border` states and clear error styling beyond color alone

## Scope note

This guide covers the homepage surface visible in supplied captures: hero engagement, blog discovery, testimonial promotion, and footer navigation. Product detail pages, checkout flows, and mobile navigation patterns are not represented. Measurements are practical adaptation targets derived from visible proportions.
