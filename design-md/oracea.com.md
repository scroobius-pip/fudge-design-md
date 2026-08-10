# How oracea.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/oracea.com-design)

Last updated: 2026-08-10

## Captured pages

[![Deep indigo footer with product branding, multi-column navigation links, and legal bar on white background](https://pin.fontofweb.com/1964?format=jpg)](https://design.withfudge.com/share/pin-1964)

[Deep indigo footer with product branding, multi-column navigation links, and legal bar on white background](https://design.withfudge.com/share/pin-1964)

[![Hero section with circular portrait overlay, testimonial quote typography, and bold display headline on photographic background](https://pin.fontofweb.com/1963?format=jpg)](https://design.withfudge.com/share/pin-1963)

[Hero section with circular portrait overlay, testimonial quote typography, and bold display headline on photographic background](https://design.withfudge.com/share/pin-1963)

[![Header navigation with product lockup, dropdown menu pill, and top-bar safety links on blurred imagery](https://pin.fontofweb.com/1962?format=jpg)](https://design.withfudge.com/share/pin-1962)

[Header navigation with product lockup, dropdown menu pill, and top-bar safety links on blurred imagery](https://design.withfudge.com/share/pin-1962)

## Overview

The Oracea design system serves a pharmaceutical education and patient-support platform for a rosacea treatment. The visual identity balances clinical authority with approachable warmth through a distinctive deep indigo palette and generous use of circular motif overlays on photography. The system prioritizes readability and trust, presenting medical information with clear hierarchy while using human-centered imagery to connect with patients seeking clearer skin.

The design operates across two primary modes: immersive hero sections that fill the viewport with soft-focus photography, and structured content areas with solid color backgrounds for navigation and legal information. The circular element—appearing as a large ring overlay on portraits—functions as a signature brand motif that draws the eye toward patient stories and creates visual continuity between sections. Typography is uniformly set in Segma, a geometric sans-serif family that conveys modernity and clarity across weights from Regular to Black.

## Colors

The color system is intentionally restrained, relying on a single strong brand color supported by neutrals and photographic warmth. The deep indigo carries the brand's authority, while white and gray provide necessary contrast for readability across contexts.

| token | value | use |
|---|---|---|
| indigo | #2E1A5E | Primary brand color; footer backgrounds, navigation emphasis, CTA buttons |
| white | #FFFFFF | Primary canvas; text on dark backgrounds, dropdown pills, header backgrounds |
| black | #000000 | Primary text on light backgrounds; legal copy, body content |
| cool-gray | #7A8B99 | Secondary text; muted labels, captions, disabled states |
| light-gray | #E8E8E8 | Subtle borders; dividers between footer columns, hairline rules |

The indigo dominates the footer and structural areas, creating a strong anchor for the page. On the hero section, this same indigo appears in the active navigation pill and would extend to primary action buttons. The photographic content introduces warm skin tones and soft environmental grays that complement the cool palette without competing for attention. Text on the hero uses white for maximum contrast against variable photography, while the footer inverts to white text on indigo for consistent legibility. The cool-gray token serves supporting information and legal contexts where hierarchy demands de-emphasis.

## Typography

The typographic system is built entirely on Segma, a geometric sans-serif family available in Regular, Medium, Bold, and Black weights. The family delivers consistent character across all communication, from small legal disclaimers to large emotional headlines. No attribution to specific designers or vendors is supported by the source material. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Segma | 4rem | 700 | 1 | -0.02em | Hero headlines; emotional statements like "NOW LOOK AT ME" |
| section-display | Segma | 2.5rem | 700 | 1.1 | -0.01em | Section headings; patient testimonial quotes |
| body | Segma | 1rem | 400 | 1.5 | 0em | Primary body text; paragraph content |
| body-small | Segma | 0.875rem | 400 | 1.5 | 0em | Secondary content; footer navigation links |
| label | Segma | 0.75rem | 500 | 1.2 | 0.05em | Uppercase labels; category tags, small headers |
| navigation | Segma | 0.875rem | 500 | 1.2 | 0.02em | Main navigation; dropdown items, top-bar links |
| legal-copy | Segma | 0.75rem | 400 | 1.4 | 0em | Legal disclaimers; copyright, safety information |

The hero-display token carries the emotional weight of patient testimonials at large scale with tight leading and negative tracking for impact. Section-display serves quoted patient speech with slightly more relaxed proportions. The navigation token uses medium weight to distinguish interactive elements from body content without heaviness. Label applies uppercase treatment with positive tracking for small categorical text. Legal-copy maintains readability at small sizes through increased line height.

## Layout

The page structure follows a layered approach with distinct zones for utility, immersion, and information. The header occupies a fixed or sticky position at the viewport top, containing safety information, prescribing links, and primary navigation. Below this, hero sections extend to full viewport height with photographic backgrounds and centered content. The footer provides a deep indigo closure with multi-column navigation and legal information on a white sub-footer.

The header organizes into three horizontal bands: a top utility bar with small links for safety information and healthcare provider access; a main navigation row with the product lockup left-aligned and primary categories center-right; and a prominent call-to-action for finding a dermatologist positioned at the far right. The product lockup includes the brand name, generic descriptor, dosage information, and pronunciation guide stacked vertically, creating a distinctive signature block that anchors the left side.

Hero sections center content both horizontally and vertically, using the circular motif as a framing device for photography. The circular overlay creates a portal-like focus on patient faces while allowing environmental context to blur softly at the edges. Text overlays sit below the circular element, maintaining clear reading order.

The footer uses a four-column grid for navigation categories, with vertical dividers between columns. Below this, a full-width legal bar separates via horizontal rule, containing regulatory links and copyright information. The sub-footer on white provides additional privacy and policy links in a centered horizontal arrangement.

Spacing between major sections uses generous vertical rhythm, with the indigo footer creating strong visual separation from preceding content. Component-level spacing maintains consistent internal padding for touch targets and readability.

## Visual language

The defining visual element is the circular motif—a large, thin-stroked ring that overlays photography and frames patient portraits. This circle carries subtle tick marks along portions of its circumference, suggesting measurement, progress, or clinical precision without literal medical iconography. The ring uses a light, possibly white or very pale stroke that remains visible against varied photographic backgrounds through contrast and subtle glow effects.

Photography favors natural, candid patient portraits with shallow depth of field. Subjects appear in everyday environments—offices, homes—rather than clinical settings, reinforcing the message that treatment integrates into normal life. Warm color temperature in photography balances the cool indigo of interface elements.

The product lockup in the header uses careful typographic hierarchy: "ONCE-DAILY" as a small uppercase label, "ORACEA" in large bold letters with registered trademark, the generic name and dosage in smaller text, and bead technology details in the smallest size. The pronunciation guide "[Or-RAY-sha]" appears in brackets, adding approachable personality to clinical information.

Navigation interactions use a pill-shaped dropdown container with rounded ends, clearly distinguishing the active category from flat text links. The pill uses white fill with dark text, creating a button-like affordance within the transparent header.

## Components

### Header Navigation

- **Anatomy**: Product lockup (brand name, generic, dosage, pronunciation), primary category links, dropdown pill for active section, utility links row, search icon, CTA button
- **Surface**: Transparent background over photography; white text and icons
- **Typography**: Product name uses body-small at larger scale; navigation uses navigation token; utility links use label token
- **Shape**: Flat text links with pill-shaped dropdown for active category
- **Spacing**: Generous horizontal spacing between categories; product lockup occupies left third
- **Composition**: Horizontal flex layout with left lockup, center navigation, right CTA

### Hero Section

- **Anatomy**: Full-bleed photographic background, circular overlay ring with tick marks, centered portrait within circle, testimonial quote text, large emotional headline below
- **Surface**: Photography with darkened or blurred edges; white text overlay
- **Typography**: Quote uses section-display; headline uses hero-display
- **Shape**: Circular frame with thin stroke; tick marks at regular intervals along partial arc
- **Spacing**: Text positioned below circle with comfortable margin; generous vertical padding
- **Composition**: Centered alignment; circle dominates upper two-thirds, text occupies lower third

### Footer

- **Anatomy**: Indigo background container, four-column link grid with headers, vertical dividers, legal code, white sub-footer with horizontal link row and copyright
- **Surface**: Indigo fill (#2E1A5E); white text; white sub-footer with black text
- **Typography**: Column headers use label token uppercase; links use body-small; legal uses legal-copy
- **Shape**: Full-width block; sub-footer separated by horizontal rule
- **Spacing**: Generous internal padding; column gutters with vertical dividers
- **Composition**: Grid layout with equal columns; sub-footer centered

### Dropdown Pill

- **Anatomy**: Rounded container, category label, downward chevron icon
- **Surface**: White fill; dark text; subtle shadow or border for definition
- **Typography**: navigation token
- **Shape**: Full pill with 9999px border radius
- **Spacing**: Horizontal padding comfortable for click target; icon with left margin

## Responsive behavior

The header navigation should collapse to a hamburger menu on smaller viewports, with the product lockup remaining visible. The four-column footer grid should stack to two columns on tablet and single column on mobile, maintaining vertical dividers as horizontal rules where appropriate.

The hero circular motif should scale proportionally, potentially reducing to a smaller percentage of viewport width on mobile while maintaining the portrait framing. Text sizes should reduce by approximately 25-30% on mobile, with hero-display dropping to around 2.5rem to prevent overflow.

The utility bar containing safety information should remain accessible but may wrap to two lines on narrow viewports. The "Find a Dermatologist" CTA should remain prominent, potentially moving below the navigation bar on mobile rather than competing for horizontal space.

## Practical implementation guidance

### Preserve
- The deep indigo as the singular brand color; do not introduce additional strong hues
- The circular motif with tick marks as the signature framing device for patient photography
- The stacked product lockup with pronunciation guide in the header
- The pill-shaped active dropdown in navigation
- The warm, candid photography style with shallow depth of field

### Avoid
- Competing accent colors that would dilute the indigo authority
- Harsh geometric shapes that conflict with the circular motif
- Clinical or sterile photography; maintain everyday environmental context
- Body text smaller than 0.875rem for accessibility
- Removing the pronunciation guide from the product lockup

### Recommended Build Order
1. Establish the color tokens and Segma font family loading
2. Build the header with product lockup and navigation structure
3. Implement the hero section with circular overlay and text hierarchy
4. Create the footer grid with indigo background and column dividers
5. Add the white sub-footer with legal links
6. Refine responsive behavior for navigation collapse and grid stacking

### Accessibility
- Ensure white text on photography meets contrast ratios; consider subtle dark gradient overlays behind text if needed
- Maintain keyboard navigability for the dropdown pill and all footer links
- Provide aria-labels for the circular decorative element so screen readers do not announce it as meaningful content
- The pronunciation guide benefits users with screen readers; preserve it in markup
- Safety information links at the top should be reachable before main content for regulatory compliance

## Scope note

This guide covers the homepage hero, header navigation, and footer as visible in the supplied images. Interior pages, form interactions, mobile-specific layouts, animation behavior for the circular motif, and hover or focus states are not represented. Measurements are practical adaptation targets based on visual estimation from the provided screenshots.
