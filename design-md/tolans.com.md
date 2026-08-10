# How tolans.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/tolans.com-design)

Last updated: 2026-08-10

## Captured pages

[![Article listing page showing 'More Articles' section with colorful abstract illustration card and Portola footer branding](https://pin.fontofweb.com/1020?format=jpg)](https://design.withfudge.com/share/pin-1020)

[Article listing page showing 'More Articles' section with colorful abstract illustration card and Portola footer branding](https://design.withfudge.com/share/pin-1020)

[![Blog article body featuring two 3D character renders with expressive faces against muted green and sage backgrounds](https://pin.fontofweb.com/1019?format=jpg)](https://design.withfudge.com/share/pin-1019)

[Blog article body featuring two 3D character renders with expressive faces against muted green and sage backgrounds](https://design.withfudge.com/share/pin-1019)

[![Article hero with large display headline 'Designing Tolan, Part 1: Characters' and pink alien character illustration in left margin](https://pin.fontofweb.com/1018?format=jpg)](https://design.withfudge.com/share/pin-1018)

[Article hero with large display headline 'Designing Tolan, Part 1: Characters' and pink alien character illustration in left margin](https://design.withfudge.com/share/pin-1018)

[![Blog index card showing group of colorful alien characters with rounded corners against warm cream background](https://pin.fontofweb.com/1017?format=jpg)](https://design.withfudge.com/share/pin-1017)

[Blog index card showing group of colorful alien characters with rounded corners against warm cream background](https://design.withfudge.com/share/pin-1017)

## Overview

Tolans.com presents an AI companion brand through a warm, editorial design language that balances playful character illustration with refined typographic restraint. The system centers on generous cream backgrounds that feel approachable and human, allowing vibrant 3D character artwork to become the emotional focal point. The visual approach treats technology storytelling as a craft publication—spacious layouts, large display type, and thoughtful pacing that lets illustrations breathe.

The design operates across two primary surfaces: a marketing homepage and a blog/article system. Both share the same foundational palette and typographic voice, with the blog extending the system into long-form reading experiences. The brand identity, "Portola," appears in the footer alongside social and legal navigation, grounding the playful character work in a credible product context. The overall impression is of a company confident enough to let its creative output speak directly, without heavy interface chrome or aggressive conversion patterns.

## Colors

The color system is intentionally restrained in the interface layer, reserving vibrancy for photographic and illustrative content. The warm cream canvas creates an immediate emotional warmth that distinguishes the brand from typical tech-product coldness.

| token | value | use |
|---|---|---|
| canvas | `#F5F2E8` | Primary page background, card backgrounds, footer area |
| ink | `#1A1A1A` | Primary headings, navigation text, "Read More" links |
| ink-secondary | `#333333` | Body text, article paragraphs, metadata |
| muted | `#888888` | Secondary metadata, dates, divider lines |
| border | `#D4D0C4` | Horizontal rules, subtle dividers between sections |
| accent-pink | `#FF6B9D` | Character illustration highlights, decorative moments |
| accent-green | `#4A9B6B` | Secondary illustration accents, environmental backgrounds |

The interface maintains a near-monochrome discipline: black text on warm cream, with no colored buttons, badges, or UI chrome competing with the character artwork. This restraint makes the colorful 3D illustrations—pinks, greens, yellows, blues—pop dramatically when they appear. The cream background has enough yellow warmth to feel inviting without crossing into vintage or rustic territory. Dark values are reserved for text and never used as solid surfaces, preserving the light, airy quality throughout.

## Typography

The typographic system relies on a single family with weight and size variation to create hierarchy. GT America, designed by Noel Leu and distributed by Grilli Type, provides a contemporary sans-serif voice with enough character to feel designed but not decorative.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | GT America | 5rem | 400 | 1.05 | -0.02em | Article headlines, major page titles |
| section-display | GT America | 3.5rem | 400 | 1.1 | -0.01em | Article card titles, section headers |
| body-large | GT America | 1.25rem | 400 | 1.6 | 0 | Introductory paragraphs, lead copy |
| body | GT America | 1rem | 400 | 1.6 | 0 | Standard paragraphs, descriptions |
| body-italic | GT America | 1rem | 400 | 1.6 | 0 | Emphasized narrative text, quotes |
| label | GT America | 0.875rem | 400 | 1.4 | 0.01em | Dates, author names, metadata |
| navigation | GT America | 0.875rem | 400 | 1.4 | 0 | Footer links, primary navigation |

The display sizes use tight negative tracking that gives headlines a crafted, editorial density. Body text maintains generous line height for comfortable reading in longer articles. The italic style appears in narrative moments, creating a more personal, reflective voice within articles. No bold weights are visibly employed—the hierarchy relies entirely on size and spacing contrast. Verify licensing for GT America through Grilli Type before production use.

## Layout

The layout system favors asymmetry and generous whitespace over rigid grids. Article pages use a split composition where headlines and metadata occupy the left portion of the viewport while body text flows in a narrower column offset to the right. This creates dynamic tension and allows space for character illustrations to intrude from margins.

The article card pattern seen in listing pages places text content on the left and a large rounded image on the right, with the image occupying roughly half the horizontal space. Cards are separated by full-width horizontal rules in muted border color. The footer spreads navigation across the full width, with brand identity left-aligned and legal links right-aligned.

Section spacing is substantial, with major divisions receiving 6rem or more of vertical breathing room. Content within sections maintains 2rem gaps between related elements. The overall density is low—this is a system designed for scrolling contemplation rather than rapid information scanning. Rounded corners at 1.5rem on images and cards soften the geometry without becoming overly playful in the interface itself.

## Visual language

The visual language derives its personality from the tension between restrained editorial design and exuberant character illustration. The 3D characters—simple rounded forms with expressive faces—appear as environmental elements, sometimes bleeding into margins, sometimes contained within rounded image frames. Their colors are saturated and warm: bubblegum pink, sunflower yellow, teal, coral.

Photography and illustration treatment is consistent: rounded rectangle frames with 1.5rem radius, no borders, no shadows. When characters appear inline with text, they float without frames, creating a more immersive, storybook quality. The "Loop" series inspiration mentioned in content suggests an aesthetic of smooth, satisfying motion translated into static form—glossy surfaces, simple geometries, emotional readability.

The Portola brand mark appears as a wordmark in the footer, set in what appears to be a compact sans-serif with a registered trademark symbol. This anchors the playful character work in product reality. Social links (Discord, Instagram, TikTok) suggest a community-forward brand posture.

## Components

**Article Card**
- Anatomy: Date/author metadata row, large display title, descriptive paragraph, "Read More" text link, paired with large rounded image
- Surface: Transparent/canvas background, no card border or shadow
- Typography: Title uses section-display, metadata uses label, description uses body, link uses label with ink color
- Shape: Image receives 1.5rem border radius
- Spacing: 2rem vertical padding between cards, separated by 1px horizontal rules in border color
- Composition: Text left, image right, roughly 45/55 split with generous gap

**Article Hero**
- Anatomy: Back navigation link with left arrow, massive display headline, date/author metadata, optional character illustration in left margin
- Surface: Canvas background, no containing box
- Typography: Headline uses hero-display at maximum scale, metadata uses label
- Shape: No border radius on text elements
- Spacing: Headline sits close to metadata (tight vertical rhythm), generous space below before article body begins
- Composition: Headline spans wide, body text column offset to right creating asymmetric flow

**Inline Character Illustration**
- Anatomy: Floating 3D character render, no frame or caption
- Surface: Transparent, allowing cream background to show through
- Spacing: Characters appear to have generous margin, sometimes overlapping into text areas
- Composition: Used as punctuation in long-form reading, breaking up text density

**Footer**
- Anatomy: Brand wordmark left, social links center-left, legal and contact links right
- Surface: Canvas background, top border in border color
- Typography: All links use navigation size, brand mark slightly larger
- Spacing: Comfortable padding above and below link rows

**"Read More" Link**
- Anatomy: Text only, no button shape or background
- Surface: Transparent
- Typography: label token, ink color, appears to have no underline by default
- States: Standard text link, likely with hover underline

## Responsive behavior

The asymmetric layouts with offset text columns will require careful adaptation at narrower viewports. The article card's side-by-side composition should stack vertically on smaller screens, with the image moving above the text content to preserve visual hierarchy. The hero headline scale will need reduction to maintain reasonable line lengths and avoid excessive wrapping.

The floating character illustrations that appear in article margins will likely need repositioning or hiding on narrow viewports, as they depend on horizontal space to avoid obscuring text. The footer navigation, currently spread across the full width, should stack into logical groupings on mobile.

## Practical implementation guidance

**Preserve**
- The warm cream canvas as the dominant background; it is the system's most distinctive quality
- Generous whitespace and low information density; the unhurried pacing is core to the brand
- Single-family typography with size-only hierarchy; adding bold weights would break the refined voice
- Rounded image treatment at exactly 1.5rem; this softens the editorial geometry consistently
- Asymmetric text columns in article layouts; the offset creates visual interest without decoration

**Avoid**
- Adding colored buttons, badges, or UI chrome; the interface should remain neutral to let illustration shine
- Tightening the line height on body text; the generous 1.6 leading is essential for readability
- Using borders or shadows on cards; the flat, clean separation is intentional
- Introducing additional font families; the monolithic GT America treatment is a deliberate choice
- Dark mode without careful consideration; the warm cream is load-bearing for brand identity

**Recommended build order**
1. Establish the canvas background and ink text colors as foundational tokens
2. Implement GT America at body and hero-display sizes with correct tracking
3. Build the article card component with asymmetric text/image layout
4. Add horizontal rule dividers and footer navigation pattern
5. Integrate rounded image treatment and floating illustration positioning
6. Refine spacing scale with generous section padding

**Accessibility**
- Ensure the cream background (`#F5F2E8`) against ink text (`#1A1A1A`) meets contrast requirements; the combination appears to provide strong contrast
- The large display headlines should maintain readability when scaled down; test at minimum 1.5rem equivalent
- Floating character illustrations should not interfere with text readability; consider `aria-hidden` if purely decorative
- "Read More" links need sufficient target size even as text-only elements; consider padding expansion
- The italic body style should be used sparingly for emphasis; extended italic passages may reduce readability for some users

## Scope note

This guide covers the blog article system and index pages visible in the supplied images. The marketing homepage, FAQ, and About pages are referenced in the site structure but not fully represented in the image set. Measurements are practical adaptation targets. Mobile breakpoints, navigation dropdowns, form elements, loading states, and character animation behavior are not documented here. The full color range of character illustrations extends beyond the interface tokens defined; those values describe photography and illustration palettes rather than UI surfaces.
