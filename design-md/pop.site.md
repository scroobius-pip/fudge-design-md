# How pop.site is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/pop.site-design)

Last updated: 2026-08-10

## Captured pages

[![Pricing page with three-tier card layout showing Personal, Personal Pro, and Business plans with blue claim button and large display typography.](https://pin.fontofweb.com/7732?format=jpg)](https://design.withfudge.com/share/pin-7732)

[Pricing page with three-tier card layout showing Personal, Personal Pro, and Business plans with blue claim button and large display typography.](https://design.withfudge.com/share/pin-7732)

[![Homepage hero with phone mockups showing personal sites, domain claim input, and minimal footer with multi-column links.](https://pin.fontofweb.com/7731?format=jpg)](https://design.withfudge.com/share/pin-7731)

[Homepage hero with phone mockups showing personal sites, domain claim input, and minimal footer with multi-column links.](https://design.withfudge.com/share/pin-7731)

[![Membership feature section with phone mockups and animated themes promotional area with repeated claim input pattern.](https://pin.fontofweb.com/7730?format=jpg)](https://design.withfudge.com/share/pin-7730)

[Membership feature section with phone mockups and animated themes promotional area with repeated claim input pattern.](https://design.withfudge.com/share/pin-7730)

[![Dark testimonial section with radial orange gradient, phone mockups, and italic display quote with avatar attribution.](https://pin.fontofweb.com/7729?format=jpg)](https://design.withfudge.com/share/pin-7729)

[Dark testimonial section with radial orange gradient, phone mockups, and italic display quote with avatar attribution.](https://design.withfudge.com/share/pin-7729)

## Overview

Pop Site presents a confident, minimal visual system built around a single idea: make personal site creation feel effortless and premium. The design alternates between expansive white space and dramatic dark moments, using oversized display typography as its primary visual signature. The interface relies on a tight typographic hierarchy with generous negative space, punctuated by a single vibrant blue action color that appears consistently across claim buttons, links, and interactive elements. Phone mockups serve as the primary illustrative device, floating against light or dark backgrounds to demonstrate the product's output. The overall impression is one of clarity and modern professionalism—no decorative excess, just bold statements, clean cards, and clear paths to action.

## Colors

The color system operates on a high-contrast binary: predominantly light surfaces with dark text, interrupted by strategic dark sections that create visual drama. The palette is intentionally restrained, with a single vibrant blue serving as the only saturated accent.

| token | hex | use |
|---|---|---|
| action | #3B82F6 | Primary buttons, claim actions, key links |
| ink | #000000 | Primary text, dark section backgrounds |
| muted-ink | #121212 | Secondary text, subtle dark surfaces |
| canvas | #FFFFFF | Page background, card surfaces |
| surface | #FAFAFC | Subtle off-white for section alternation |
| surface-elevated | #E3EEFF | Light blue tint for highlighted areas |
| border | #6E6E73 | Input borders, dividers, subtle separators |
| text-inverse | #FFFFFF | Text on dark or blue backgrounds |
| text-link | #0000EE | Standard hyperlink color |
| gradient-dark-start | #363836 | Dark radial gradient origin |
| gradient-dark-end | #000000 | Dark radial gradient terminus |
| gradient-accent-start | #C72B00 | Warm accent gradient origin |
| gradient-accent-end | #000000 | Warm accent gradient terminus |

Light mode dominates the experience. White and near-white surfaces provide the canvas for nearly all content, with #FAFAFC appearing as a subtle section background to create gentle vertical rhythm. Dark sections appear as deliberate interruptions—typically featuring radial gradients that emanate warm orange or neutral gray tones from the top center before fading to pure black. These dark moments serve as containers for testimonials, hero statements, or product showcases where white text and phone mockups create maximum contrast. The blue action color (#3B82F6) is reserved exclusively for interactive elements: claim buttons, "Learn More" actions, and text links within body copy. No other saturated colors compete for attention in the interface.

## Typography

The typographic system is built on three families: Satoshi for all marketing and interface text, False for footer legal copy, and False-Normal as the specific variant loaded for that role. System-Sansserif appears at a fixed 12px size for structural or fallback purposes. The design's most distinctive characteristic is its aggressive scale contrast—display headings reach 120px while body text remains a modest 15px, creating dramatic hierarchy without weight variation.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Satoshi | 7.5rem | 500 | 0.9 | -0.046em | Primary page headlines, pricing hero |
| section-display | Satoshi | 5.8125rem | 500 | 1 | -0.05em | Section headlines, feature callouts |
| quote-display | Satoshi | 3.3125rem | 500 | 1 | -0.05em | Testimonial quotes, italic statements |
| body-large | Satoshi | 1.3125rem | 500 | 1.4 | -0.03em | Intro paragraphs, feature descriptions |
| body | Satoshi | 0.9375rem | 500 | 1.3 | -0.03em | Standard body text, card descriptions |
| label | Satoshi | 0.9375rem | 500 | 1.3 | -0.03em | Button labels, navigation items |
| navigation | Satoshi | 0.9375rem | 500 | 1.3 | -0.03em | Header and footer link lists |
| legal | False | 0.8125rem | 400 | 1.2 | -0.03em | Footer legal text, copyright |
| system-ui | System-Sansserif | 0.75rem | 400 | 1 | 0em | Structural labels, fallback text |

Satoshi appears in Medium weight (500) exclusively—no Regular, Semibold, or Bold variants are used in the visible interface. This single-weight approach reinforces the clean, modern aesthetic. Tracking is consistently negative across all Satoshi sizes, becoming more aggressive at display scales (-5.52px at 120px, -2.65px at 53px). Line heights are tight: display sizes use 0.9 to 1.0, while body text uses 1.3 to 1.4. The italic variant of Satoshi appears only in testimonial quotes, creating a distinct voice for user statements.

False and False-Normal, designed by Deni Anggara for Indian Type Foundry, serve a single purpose at 13px in the footer. Verify licensing for these families before production use.

## Layout

The layout follows a centered, single-column philosophy with occasional two-column splits for feature sections. Maximum content width appears to be approximately 1200px, with generous horizontal padding of 40px on desktop. Sections stack vertically with substantial breathing room—80px top padding and 120-126px bottom padding are common for major sections.

The header is minimal and fixed: logo left, navigation links right, with no background separation from the page—navigation sits directly on the white canvas. The hero area typically centers a massive display headline with a subordinate claim input below, followed by a trust indicator ("No Credit Card Required").

Feature sections alternate between text-left/mockup-right and centered text patterns. The phone mockups are consistently presented as overlapping pairs, creating depth through shadow and slight rotation. Pricing uses a three-column grid of equal-width cards with internal left-aligned content. Footer content spreads across multiple columns: logo and tagline left, link categories center, copyright right.

Vertical rhythm is established through section spacing rather than rules or borders. The only horizontal divider visible is a subtle hairline separating the footer from the main content. Cards use internal padding of 20px with 10px border radius, creating contained but not elevated surfaces—no shadows, no borders, just clean white rectangles against white or off-white backgrounds.

## Visual language

The visual language communicates simplicity through restraint. Every element earns its place: there are no decorative patterns, no gratuitous icons, no background textures beyond the occasional radial gradient. The phone mockup is the singular illustrative motif, appearing in nearly every section to demonstrate the product's output in context.

Photography and imagery are entirely absent from the marketing interface; the product sells itself through its own output (the phone mockups) and bold typographic statements. When color appears beyond the blue accent, it does so dramatically: the dark testimonial sections with their warm radial gradients create emotional punctuation in an otherwise cool, clinical palette.

The design maintains consistent corner language: pills for inputs and primary actions (9999px radius), 26px radius for secondary buttons, 10px for cards, 8px for smaller containers. This creates a subtle hierarchy of roundness—more rounded for interactive elements, slightly more rectilinear for content containers.

Negative space is treated as an active design element. Display headlines float in vast white fields, with supporting text clustered tightly beneath rather than distributed. This compression of secondary information against expansive primary statements creates visual tension and clear reading order.

## Components

### Primary action button
- **Anatomy**: Text label centered within a solid blue pill
- **Surface**: Background #3B82F6, text #FFFFFF
- **Typography**: `{typography.label}` — Satoshi Medium, 15px
- **Shape**: Full pill, 9999px border radius (rendered as 26px in some contexts)
- **Spacing**: 16px vertical padding, 24px horizontal padding
- **Composition**: Typically appears adjacent to or below input fields; sometimes paired with a secondary text button

### Domain claim input
- **Anatomy**: Text input field with inline domain suffix, paired with submit button
- **Surface**: White background, subtle border; suffix text in muted gray
- **Typography**: Input text uses system defaults; suffix uses `{typography.body}`
- **Shape**: Full pill for combined input+button group, or rounded rectangle for standalone input
- **Spacing**: 12px left padding, 12px vertical padding for input; button overlaps or abuts
- **Variants**: Inline version (input and button as single pill) and split version (input with separate button)

### Pricing card
- **Anatomy**: Plan name, subtitle, price, feature list with checkmarks
- **Surface**: White background (#FFFFFF), no border, no shadow
- **Typography**: Plan name uses `{typography.body-large}`; price uses `{typography.section-display}` at smaller scale; features use `{typography.body}` in muted ink
- **Shape**: 10px border radius
- **Spacing**: 20px internal padding
- **Composition**: Three cards in equal-width grid; internal horizontal rules separate price from features

### Testimonial dark section
- **Anatomy**: Quote icon, italic statement, attribution with avatar and link
- **Surface**: Radial gradient from #C72B00 at top-center to #000000; or neutral variant from #363836
- **Typography**: Quote uses `{typography.quote-display}` in Satoshi Medium Italic; attribution name uses `{typography.body}` in white; role uses `{typography.body}` in muted gray; link uses `{typography.label}` in blue
- **Shape**: Full-bleed section, no border radius
- **Spacing**: 80px top padding, 126px bottom padding
- **Composition**: Phone mockups left, quote content right; or centered text with mockups above

### Navigation header
- **Anatomy**: Logo mark left, text links right
- **Surface**: Transparent, sits directly on page background
- **Typography**: Links use `{typography.navigation}`
- **Composition**: Horizontal list with consistent spacing; no dropdown indicators or icons

### Footer
- **Anatomy**: Logo and tagline, categorized link columns, copyright
- **Surface**: White or off-white background
- **Typography**: Links use `{typography.navigation}`; legal text uses `{typography.legal}` in False
- **Composition**: Multi-column grid with generous vertical spacing between link groups

## Responsive behavior

The design appears optimized for desktop viewing with a centered content strategy. At narrower viewports, the three-column pricing grid should stack to single column, maintaining card padding and internal spacing. The two-column feature sections (text + mockups) should reverse to single column with mockups above text.

Display typography scales down proportionally: the 120px hero should reduce to approximately 60-80px on tablet and 40-53px on mobile to maintain line breaks and readability. The 93px section display should similarly halve.

Phone mockups, currently shown as overlapping pairs, may reduce to single mockup on narrow screens. The claim input group should remain functional at minimum widths, potentially stacking input above button when horizontal space is insufficient.

Navigation should collapse to a hamburger menu or simplified list on mobile, though no mobile-specific navigation pattern is visible in the supplied images.

## Practical implementation guidance

### Preserve
- The extreme scale contrast between display and body typography—this is the design's primary personality
- Single-weight Satoshi (Medium only) throughout marketing content
- The consistent blue action color for all interactive elements
- Phone mockups as the sole illustrative device
- Generous section padding (80px top, 120px+ bottom) for breathing room
- Negative letter-spacing on all Satoshi sizes, increasing with scale

### Avoid
- Adding weight variations to Satoshi—Bold or Semibold would break the clean aesthetic
- Introducing additional accent colors beyond the blue action
- Using borders or shadows on cards—the flat white-on-white approach is intentional
- Decorative icons or illustrations beyond the phone mockups
- Background patterns or textures that compete with the typographic hierarchy

### Recommended build order
1. Establish the typographic foundation with Satoshi Medium at all scales
2. Implement the color system with white canvas, black ink, and single blue accent
3. Build the claim input component—this appears in nearly every section
4. Create the hero section with display typography and input group
5. Develop card components for pricing and features
6. Implement dark testimonial sections with radial gradients
7. Add phone mockup compositions with consistent shadow and overlap treatment

### Accessibility
- Ensure the blue action color (#3B82F6) meets contrast requirements against white; it may need darkening for small text
- Dark testimonial sections with white text should maintain minimum 4.5:1 contrast; verify the gradient doesn't compromise legibility at text positions
- Display typography at tight line heights (0.9) should be tested for readability; consider slight loosening for longer headlines
- The claim input requires clear focus states; implement visible outlines or background shifts
- Phone mockups should include descriptive alt text as they communicate product functionality

## Scope note

This guide covers the marketing homepage and pricing page surfaces visible in the supplied images. Mobile layouts, component hover states, form validation, account dashboards, and the actual site builder interface are not represented. The 7.95px spacing value appears in gradient text treatments with negative margin compensation and should be treated as a precise implementation detail rather than a scalable token.
