# How rfef.es is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/rfef.es-design)

Last updated: 2026-08-10

## Captured pages

[![Cookie consent banner with dark navy background, white text, and light gray revoke button showing legal compliance UI at page bottom](https://pin.fontofweb.com/259?format=jpg)](https://design.withfudge.com/share/pin-259)

[Cookie consent banner with dark navy background, white text, and light gray revoke button showing legal compliance UI at page bottom](https://design.withfudge.com/share/pin-259)

[![Page footer with deep maroon sponsor band, bright red footer bar, RFEF circular logo, and social media icon row](https://pin.fontofweb.com/258?format=jpg)](https://design.withfudge.com/share/pin-258)

[Page footer with deep maroon sponsor band, bright red footer bar, RFEF circular logo, and social media icon row](https://design.withfudge.com/share/pin-258)

[![Sponsor grid on dark maroon background showing Adidas, Mapfre, Ebro, Halcon Viajes, TCL, Cervezas Victoria, La Roche-Posay, and Iberia logos with gold category labels](https://pin.fontofweb.com/257?format=jpg)](https://design.withfudge.com/share/pin-257)

[Sponsor grid on dark maroon background showing Adidas, Mapfre, Ebro, Halcon Viajes, TCL, Cervezas Victoria, La Roche-Posay, and Iberia logos with gold category labels](https://design.withfudge.com/share/pin-257)

[![Four competition cards in red gradient sequence from bright to dark with gold category labels, white titles, and gold plus icons](https://pin.fontofweb.com/256?format=jpg)](https://design.withfudge.com/share/pin-256)

[Four competition cards in red gradient sequence from bright to dark with gold category labels, white titles, and gold plus icons](https://design.withfudge.com/share/pin-256)

## Overview

The Royal Spanish Football Federation's digital presence channels the energy of Spanish football through a bold, patriotic visual system. The design centers on a dramatic red gradient that moves from vivid scarlet through deep crimson to dark maroon, evoking both national identity and competitive intensity. This chromatic progression serves as the backbone for competition cards, sponsor sections, and footer architecture.

The system pairs a custom condensed display typeface—La Roja-Estrecha Bold—with the neutral, highly legible Montserrat for body content. This creates a clear hierarchy where headlines shout with athletic authority while supporting information remains calm and readable. Gold accents appear sparingly as category labels and interactive indicators, adding a premium, trophy-like quality without overwhelming the dominant red narrative.

Visual composition favors strong horizontal bands and grid-based card arrangements. The competition cards demonstrate the system's signature pattern: four equal-width panels in a stepped red gradient, each containing a gold category label, a white headline in the custom display face, and a gold circular action indicator. This modular approach allows content to scale while maintaining visual rhythm.

The overall impression is confident, institutional, and unmistakably Spanish—designed for a sports federation that commands national attention and international respect.

## Colors

The color system builds on a patriotic red foundation with strategic neutrals and gold accents. The palette derives from Spanish national colors reinterpreted for digital sports presentation.

| token | value | use |
|---|---|---|
| action | #C8102E | Primary buttons, competition cards, footer bar, active states |
| action-hover | #A00D24 | Darker red for card progression and hover states |
| canvas | #0A1628 | Cookie banner background, deep contrast surfaces |
| canvas-elevated | #4A0D1A | Sponsor band background, premium maroon sections |
| surface | #FFFFFF | Primary content backgrounds, text on dark surfaces |
| surface-muted | #F0F0F0 | Secondary buttons, disabled backgrounds |
| ink | #FFFFFF | Primary text on dark or red backgrounds |
| ink-muted | #B8B8B8 | Secondary text, placeholder content |
| ink-inverse | #000000 | Text on light surfaces |
| accent | #FFB81C | Category labels, plus icons, trophy-like highlights |
| border | #D0D0D0 | Subtle dividers, form field outlines |

The red gradient sequence defines the system's most distinctive pattern. Four competition cards progress from bright scarlet (#C8102E) through successively deeper reds to near-maroon (#4A0D1A), creating visual depth without introducing alien hues. This gradient functions as both decorative identity and navigational hierarchy—brighter cards draw primary attention while darker cards recede.

Gold appears exclusively as an accent against red or maroon backgrounds, never as a large surface. Its role is categorical and interactive: marking competition types, indicating expandable content, and adding celebratory punctuation.

The dark navy canvas (#0A1628) provides maximum contrast for legal and compliance interfaces, separating functional content from brand expression. White and near-white serve as the primary text colors, ensuring legibility across all red intensities.

## Typography

The typographic system combines a proprietary condensed display face with an open-source geometric sans-serif, creating a sports-specific hierarchy with broad language support.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | La Roja-Estrecha Bold | 4rem | 700 | 0.9 | 0.02em | Major headlines, hero announcements |
| section-display | La Roja-Estrecha Bold | 2.5rem | 700 | 1 | 0.01em | Card titles, section headers |
| category-label | La Roja-Estrecha Bold | 0.875rem | 700 | 1.2 | 0.08em | Competition categories, sponsor tiers |
| body | Montserrat | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions |
| body-small | Montserrat | 0.875rem | 400 | 1.5 | 0 | Secondary content, metadata |
| legal-copy | Montserrat | 0.75rem | 400 | 1.5 | 0 | Footer links, cookie text, copyright |

La Roja-Estrecha Bold carries the brand's voice. Its extreme condensation allows long Spanish names—"Primera Federación Iberdrola," "Selecciones Autonómicas"—to fit compact spaces without breaking lines. The face is used exclusively in uppercase or title case with generous positive tracking to compensate for tight letterforms. It appears only in white or gold against dark or red backgrounds, never in black or on white.

Montserrat, designed by Julieta Ulanovsky, handles all functional text. Its geometric clarity supports the system's modern athletic aesthetic while ensuring readability at small sizes. The Regular weight (400) is sufficient for all body applications; no heavier weights are employed.

All type sizes are whole-number multiples of 4px (0.25rem), creating a rational vertical rhythm. The display sizes step aggressively—4rem for heroes, 2.5rem for sections—while functional text clusters tightly around 0.75–1rem.

Verify licensing for these families before production use. La Roja-Estrecha Bold is a proprietary RFEF asset; Montserrat is available under the SIL Open Font License.

## Layout

The layout system employs full-width horizontal bands with contained content grids, creating a layered page architecture that separates brand expression from functional content.

**Band structure.** The page stacks distinct horizontal zones: hero imagery, competition cards, sponsor recognition, and footer. Each band spans the full viewport width while content respects a central maximum width. The sponsor band uses a deep maroon background that visually anchors the page, while the footer transitions to bright red for legal and social content.

**Competition grid.** The four competition cards demonstrate the core grid logic: equal-width columns with no gutters, creating a continuous gradient surface. Each card maintains internal padding of 1.5rem, with content aligned to the top-left. The plus icon positions absolutely at the bottom-right, creating asymmetric balance. On narrower viewports, this grid should stack vertically while preserving the red gradient sequence.

**Sponsor hierarchy.** The sponsor section organizes logos into tiered rows with centered alignment. Category labels—"SPONSOR TÉCNICO," "SOCIO PATROCINADOR," "PATROCINADORES OFICIALES," "COLABORADORES OFICIALES"—precede each row in gold uppercase text. Logos within each tier distribute horizontally with consistent vertical spacing between tiers. The dark maroon background unifies diverse brand marks into a coherent presentation.

**Footer architecture.** The footer splits into two functional zones: a maroon sponsor band above and a red action bar below. The RFEF circular logo overlaps this boundary, creating vertical connection. The red bar distributes copyright, legal links, and social icons horizontally, with pipe separators between text links.

**Spacing scale.** The system uses a 4px base unit. Section spacing measures 4rem (64px), creating clear separation between content bands. Component internal padding uses 1.5rem (24px) for comfortable touch targets and readable line lengths. The tight 1rem (16px) component gap suits dense information displays like sponsor grids.

## Visual language

The visual language communicates institutional authority through restrained drama—bold color moves, disciplined typography, and minimal decorative elements.

**Gradient as identity.** The red gradient is not merely decorative but definitional. Four stepped values create a recognizable progression that appears across competition cards, promotional modules, and potentially navigation states. This gradient suggests movement, hierarchy, and national passion without relying on animation or imagery.

**Circular motifs.** The RFEF logo's circular badge appears as a recurring geometric anchor. The plus icons on competition cards echo this circularity at a smaller scale, creating visual rhyme between brand mark and interaction indicator. Gold circles against red surfaces become a signature pattern.

**Photographic treatment.** When photography appears, it likely receives high-contrast treatment with saturated reds and deep shadows, matching the palette's intensity. The system prioritizes graphic color fields over photographic realism, using images as emotional amplifiers rather than content carriers.

**Icon style.** Social media icons in the footer appear as simple white glyphs on transparent backgrounds, maintaining legibility without competing with brand marks. The plus icons use a filled gold circle with a centered cross, functioning as both decorative element and affordance.

**Texture and depth.** The system avoids gradients within individual elements, preferring flat color blocks with stepped value changes. Shadows are minimal or absent; depth derives from color contrast and overlapping bands rather than dimensional effects.

## Components

### Competition Card

The competition card is the system's most characteristic component, appearing as a full-height panel within a four-card gradient sequence.

- **Anatomy:** Gold category label at top-left, white headline below, gold circular plus icon at bottom-right. No additional imagery or description.
- **Surface:** Flat red background, with each card in the sequence using a progressively darker value from #C8102E to #4A0D1A.
- **Typography:** Category label uses category-label token in uppercase with accent color. Headline uses section-display token in white.
- **Shape:** Sharp corners, no border radius. The card fills its grid cell completely.
- **Spacing:** 1.5rem internal padding on all sides. Plus icon positioned with equivalent inset from edges.
- **Composition:** Text aligns top-left; icon anchors bottom-right. Asymmetric balance creates dynamic tension.
- **Variants:** Four color values in the standard sequence. Content variations include "Copa del Rey," "Primera Federación," "Primera Federación Iberdrola," and "Selecciones Autonómicas."

### Sponsor Band

The sponsor band presents partner logos in a tiered hierarchy against a unified dark background.

- **Anatomy:** Category label, followed by one or more logo rows. Logos appear as white or light monochrome marks.
- **Surface:** Deep maroon (#4A0D1A) background across full width.
- **Typography:** Category labels use category-label token in gold, centered above each tier.
- **Shape:** Full-width band with no internal containers or cards.
- **Spacing:** Generous vertical padding between tiers, approximately 2rem. Horizontal logo distribution with visual balance rather than strict grid.
- **Composition:** Centered alignment for labels and single logos; distributed alignment for multi-logo rows.

### Footer Bar

The footer bar combines legal information with social connectivity.

- **Anatomy:** Copyright notice, text links with pipe separators, social media icon row, and cookie management button.
- **Surface:** Bright red (#C8102E) background with white text and icons.
- **Typography:** Legal links use legal-copy token. Social icons appear as simple glyphs.
- **Shape:** Full-width bar with sharp top edge where it meets the sponsor band above.
- **Spacing:** Compact vertical padding, approximately 0.75rem. Horizontal distribution with copyright at left, links center, social and cookie at right.
- **Composition:** Single horizontal row on desktop; should stack logically on narrow viewports with social icons centered below links.

### Cookie Banner

The cookie banner provides legal compliance with minimal visual intrusion.

- **Anatomy:** Explanatory text and a single action button.
- **Surface:** Dark navy (#0A1628) background with white text and light gray button.
- **Typography:** Body-small for explanation, body-small for button label.
- **Shape:** Full-width band with modest vertical padding.
- **Spacing:** Text and button separated by substantial horizontal space, with button aligned right.
- **Composition:** Flex row with space-between justification.

## Responsive behavior

The system should adapt gracefully across viewport sizes while preserving its bold visual character.

**Competition cards.** On viewports below approximately 768px, the four-column grid should collapse to a single column, maintaining the gradient sequence as stacked bands. Each card requires adequate touch target height; consider increasing vertical padding to 2rem on mobile.

**Sponsor grid.** Multi-logo rows should wrap to two columns on tablet and single column on mobile, with logos scaling proportionally. Category labels remain centered.

**Footer.** The horizontal footer bar should stack to three lines: copyright, links (wrapped), and social icons centered. The cookie button may move to full-width below the text.

**Typography.** Hero display should scale down to 2.5rem on mobile to prevent overflow. Section display reduces to 1.75rem. Category labels may reduce tracking slightly at small sizes for density.

**Navigation.** While not visible in supplied images, any primary navigation should collapse to a hamburger menu on mobile, with the red gradient potentially appearing as an expanded menu background.

## Practical implementation guidance

### Preserve
- The exact four-step red gradient sequence; this is the system's signature
- La Roja-Estrecha Bold for all display and category text; the condensed form is irreplaceable
- Gold accent exclusivity—use only for labels, icons, and categorical highlights
- Full-width horizontal bands with contained content
- The circular plus icon pattern for expandable or linked content

### Avoid
- Introducing additional accent colors; the red-gold-white palette is intentionally limited
- Using La Roja-Estrecha Bold for body text or long paragraphs; its condensation harms readability
- Applying border radius to competition cards; the sharp edges maintain graphic intensity
- Placing gold text on light backgrounds; it requires dark or red surfaces for contrast
- Adding shadows or dimensional effects; the system relies on flat color and value contrast

### Recommended Build Order
1. Establish the color tokens and gradient sequence
2. Implement La Roja-Estrecha Bold with fallbacks, verifying licensing
3. Build the competition card component with four color variants
4. Construct the sponsor band with tiered logo layout
5. Assemble the footer with legal links and social icons
6. Add the cookie banner as a bottom-fixed or inline band
7. Implement responsive stacking for the card grid

### Accessibility
- Ensure white text on red backgrounds meets WCAG AA contrast; the bright red (#C8102E) with white passes at large sizes but may need adjustment for small body text
- Provide visible focus states for the gold plus icons; consider a white outline or scale transform
- Make sponsor logos accessible with appropriate alt text or aria-labels
- Ensure the cookie banner's "Revocar consentimiento" button has sufficient contrast against its light gray surface
- Support keyboard navigation through the footer link row and social icons

## Scope note

This guide covers the homepage surface of rfef.es including the competition card grid, sponsor recognition bands, and footer architecture. Mobile layouts, interior pages, match statistics displays, and motion behavior are not represented in the supplied images. Measurements are practical adaptation targets derived from visual inspection of the desktop interface.
