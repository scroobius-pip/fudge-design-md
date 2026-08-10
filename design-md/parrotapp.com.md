# How parrotapp.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/parrotapp.com-design)

Last updated: 2026-08-10

## Captured pages

[![Footer and final call-to-action section with rounded white panel, yellow button, and Parrot logo on light gray background](https://pin.fontofweb.com/5399?format=jpg)](https://design.withfudge.com/share/pin-5399)

[Footer and final call-to-action section with rounded white panel, yellow button, and Parrot logo on light gray background](https://design.withfudge.com/share/pin-5399)

[![User testimonials section with large split-color heading, quote blocks, and orange star ratings on off-white](https://pin.fontofweb.com/5398?format=jpg)](https://design.withfudge.com/share/pin-5398)

[User testimonials section with large split-color heading, quote blocks, and orange star ratings on off-white](https://design.withfudge.com/share/pin-5398)

[![FAQ accordion section with vibrant yellow background, black typography, and circular chevron buttons](https://pin.fontofweb.com/5397?format=jpg)](https://design.withfudge.com/share/pin-5397)

[FAQ accordion section with vibrant yellow background, black typography, and circular chevron buttons](https://design.withfudge.com/share/pin-5397)

[![Pricing cards with white and orange surfaces, black action buttons, and split-color display heading](https://pin.fontofweb.com/5396?format=jpg)](https://design.withfudge.com/share/pin-5396)

[Pricing cards with white and orange surfaces, black action buttons, and split-color display heading](https://design.withfudge.com/share/pin-5396)

## Overview

Parrot's marketing site presents a language-learning product with confident, playful energy. The visual system relies on stark black typography against generous fields of white, light gray, and vibrant yellow. Orange appears as a secondary accent for ratings, social proof, and highlighted pricing tiers. The design avoids subtlety in favor of immediate readability and emotional warmth—large display type dominates every section, while rounded corners on panels and buttons soften the geometric precision. The overall impression is approachable yet authoritative, positioning the app as both fun and effective. Content flows through clearly separated horizontal bands: hero, social proof, pricing, FAQ, and footer. Each band uses surface color to create rhythm without visual noise.

## Colors

The palette is intentionally small and high-contrast, built around a single warm accent family that shifts from yellow to orange depending on context.

| token | value | use |
|---|---|---|
| ink | `#000000` | Primary text, headings, buttons, icons, and all foreground elements |
| canvas | `#F5F5F5` | Page background behind white panels and between sections |
| surface | `#FFFFFF` | Cards, panels, footer navigation area, and content containers |
| accent-yellow | `#F5B800` | Primary call-to-action buttons, FAQ section background, energetic highlights |
| accent-orange | `#F06C00` | Star ratings, Y Combinator badge, featured pricing card, secondary emphasis |
| muted-ink | `#999999` | Secondary text, disabled or decorative heading words, attribution labels |

The system operates in a light mode exclusively across all visible surfaces. Black ink on white or near-white surfaces provides maximum legibility for marketing copy. The yellow accent carries the brand's energy and appears in large fields rather than as small accents, making it feel immersive rather than decorative. Orange serves a more targeted role: it draws attention to ratings, the featured annual plan, and the Y Combinator credibility marker. Gray appears only for de-emphasized text and the split-color heading technique where the second word or phrase recedes visually. No dark mode or additional color themes are present.

## Typography

The site uses Poppins exclusively, a geometric sans-serif with rounded terminals that reinforce the friendly, approachable brand character. The family is employed in two weights: Regular for body text and Bold for all display and interface elements. The visual hierarchy depends on dramatic size contrasts rather than weight variation.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Poppins | 5rem | 700 | 1 | -0.03em | Main page headlines, CTA section headings |
| section-display | Poppins | 4rem | 700 | 1.05 | -0.02em | Section titles with split-color treatment |
| body-large | Poppins | 1.25rem | 400 | 1.5 | 0 | Testimonial quotes, expanded FAQ answers |
| body | Poppins | 1rem | 400 | 1.6 | 0 | Standard paragraphs, descriptions |
| label | Poppins | 0.875rem | 600 | 1.4 | 0.01em | Button text, plan labels, small headings |
| navigation | Poppins | 0.875rem | 500 | 1 | 0 | Footer links, header navigation |

Display headings use tight negative tracking and line heights approaching 1.0, creating dense, impactful blocks of text. The split-color technique—rendering the first word or phrase in black and the remainder in muted gray—appears consistently across section headings, adding visual interest without introducing additional type styles. Body text maintains generous line height for readability in longer testimonials. Button and navigation labels are compact and slightly heavier than body text for scannability.

Poppins was designed by Jonny Pinhorn for the Indian Type Foundry. Verify licensing for these families before production use.

## Layout

The page structure follows a centered, single-column flow with content bands that span the full viewport width. Each band contains a rounded panel or direct content with consistent horizontal margins.

The maximum content width appears to be approximately 1200px, centered with automatic margins. Within this constraint, content aligns to a flexible grid. The pricing section uses a two-column layout for standard plans with the featured annual plan breaking to full width below. Testimonials employ an asymmetric two-column arrangement with one longer quote on the left and a shorter quote on the right. The FAQ section presents questions in a single column with generous vertical spacing between items.

Section spacing is substantial, with approximately 6rem between major bands. Internal content gaps measure around 2rem. Cards and panels receive 2rem of internal padding, creating breathing room around text and interactive elements. The footer compresses vertically, using a single row for navigation links and a secondary row for legal and attribution content.

Rounded corners appear at multiple scales: large 1.5rem radii for major section panels, medium 0.75rem for cards, and small 0.5rem for buttons. Circular elements use full border-radius for chevron icons and avatar stacks.

## Visual language

The design communicates through bold simplicity and warm energy. Every section employs oversized display typography as its primary visual element, with imagery and decoration kept minimal. The split-color heading treatment—black followed by gray—creates a signature rhythm that unifies disparate sections.

Photography appears limited to small avatar clusters for social proof. The Parrot logo, visible in the footer, uses a flat geometric parrot illustration in blue, yellow, and orange within a rounded square. The Y Combinator badge replicates the accelerator's orange square with white "Y" mark.

Star ratings use five filled orange stars, rendered as iconography rather than text. FAQ accordion controls use solid black circles with white chevron marks, creating strong target areas against the yellow background.

The overall aesthetic avoids gradients, shadows, and complex textures. Surfaces are flat and opaque. Borders are absent except where implied by color contrast. The visual system prioritizes clarity and conversion over ornament.

## Components

### Primary Action Button

- **Anatomy**: Text label centered within a rounded rectangle
- **Surface**: Accent-yellow background with ink text
- **Typography**: Label token, semibold, uppercase or title-case depending on context
- **Shape**: 0.5rem border radius
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Centered within its container, often below display headings
- **Variants**: Secondary variant uses ink background with surface text for footer and pricing cards

### Pricing Card

- **Anatomy**: Plan label, price with currency and period, action button
- **Surface**: White for standard plans, accent-orange for featured annual plan
- **Typography**: Label token for plan name, hero-display size for price numerals, label token for period suffix
- **Shape**: 0.75rem border radius
- **Spacing**: 2rem internal padding, generous gap between price and button
- **Composition**: Two-column grid for standard plans, full-width breakout for featured plan below
- **Variants**: Standard (white surface, ink text), Highlighted (orange surface, white text, black button)

### FAQ Accordion

- **Anatomy**: Section heading, question text, answer text, circular toggle button
- **Surface**: Accent-yellow background for entire section, black circles for toggles
- **Typography**: Section-display for heading with split-color treatment, body-large for questions, body for answers
- **Shape**: 1.5rem border radius for section panel, 9999px for toggle buttons
- **Spacing**: Large internal padding, substantial vertical space between questions
- **Composition**: Questions stack vertically with toggle buttons aligned to the right edge
- **States**: Expanded state reveals answer text below question; collapsed state shows only question and toggle

### Testimonial Block

- **Anatomy**: Quotation text, attribution username, star rating
- **Surface**: Transparent over canvas background
- **Typography**: Body-large for quote text, body token for attribution in muted ink, star icons in accent-orange
- **Shape**: No containing border or background
- **Spacing**: Tight grouping of quote, attribution, and stars with larger gaps between testimonials
- **Composition**: Asymmetric two-column layout with varying quote lengths

### Footer Navigation

- **Anatomy**: Logo mark, text links, primary action button, legal text, attribution badge
- **Surface**: Canvas background with white panel above for main footer content
- **Typography**: Navigation token for links, label token for button
- **Shape**: No border radius on footer itself; button uses standard 0.5rem radius
- **Spacing**: Horizontal distribution of links with right-aligned action button
- **Composition**: Single row for navigation, centered row for Y Combinator attribution, centered row for copyright

## Responsive behavior

The layout appears optimized for desktop viewport widths. At narrower widths, the two-column pricing grid should stack to a single column with the featured plan remaining prominent. The asymmetric testimonial layout should collapse to a single column, preserving the vertical sequence of quote, attribution, and rating. FAQ accordion toggles may require increased touch targets on mobile, with the circular buttons expanding to at least 44px. The large display headings should scale down proportionally, maintaining the split-color treatment but reducing from 5rem to approximately 2.5rem on small screens to prevent overflow. Footer navigation links should wrap to multiple lines or collapse into a compact menu. Horizontal padding on the main content container should reduce from approximately 2rem to 1rem on narrow viewports.

## Practical implementation guidance

### Preserve
- The dramatic size contrast between display headings and body text; this is central to the brand voice
- The split-color heading technique using black and muted gray for consistent section identity
- The warm yellow field for the FAQ section; this large color block is distinctive
- The orange accent for ratings and the featured pricing tier; it creates clear hierarchy
- The generous rounded corners on panels and cards; they soften the bold typography

### Avoid
- Adding gradients, shadows, or glassmorphism effects; the design is intentionally flat
- Introducing additional font weights or families; the two-weight Poppins system is sufficient
- Using yellow text on the yellow FAQ background; maintain black for all text on that surface
- Making the orange pricing card larger than the white cards through extra padding or borders; the color alone should signal prominence
- Reducing the star rating size below legibility; they function as social proof indicators

### Recommended Build Order
1. Establish the color tokens and apply canvas background to the page
2. Load Poppins Bold and Regular weights with appropriate font-display strategy
3. Build the type scale with hero-display and section-display tokens
4. Create the primary and secondary button components with exact padding and radius
5. Implement the pricing card grid with standard and highlighted variants
6. Construct the FAQ accordion with yellow section background and circular toggles
7. Add testimonial blocks with star rating component
8. Assemble footer with navigation, logo, and attribution

### Accessibility
- Ensure all text on the yellow FAQ background meets contrast ratios; black text on `#F5B800` should be verified
- Provide visible focus indicators for buttons and accordion toggles; the current design shows no focus state
- Add aria-expanded attributes to FAQ accordion items
- Consider increasing the touch target for circular chevron buttons beyond their visual size
- Verify that the muted gray heading words (`#999999`) meet minimum contrast for large text

## Scope note

This guide covers the marketing landing page for Parrot including the hero, testimonials, pricing, FAQ, and footer sections. Mobile layouts, hover states, focus styles, loading indicators, error states, and the application interface itself are not represented in the supplied images. Measurements are practical adaptation targets derived from visual inspection.
