# How oasishealth.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/oasishealth.app-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with centered headline, app store badges, and floating product-safety cards around a central phone mockup showing water analysis results.](https://pin.fontofweb.com/8461?format=jpg)](https://design.withfudge.com/share/pin-8461)

[Hero section with centered headline, app store badges, and floating product-safety cards around a central phone mockup showing water analysis results.](https://design.withfudge.com/share/pin-8461)

[![FAQ accordion section with chevron disclosures above a dark footer containing four-column link grid, social links, and copyright attribution.](https://pin.fontofweb.com/8462?format=jpg)](https://design.withfudge.com/share/pin-8462)

[FAQ accordion section with chevron disclosures above a dark footer containing four-column link grid, social links, and copyright attribution.](https://design.withfudge.com/share/pin-8462)

## Overview

Oasis Health presents a health and product-safety platform with a calm, trustworthy visual system built on generous whitespace and restrained typography. The interface centers on helping users understand contamination data, water quality, and everyday product safety through clear information hierarchy and intuitive visual cues. The design language balances clinical precision with approachable warmth: the off-white canvas avoids sterile white, while the near-black ink provides authoritative contrast without the harshness of pure black. Semantic color accents communicate safety states at a glance—green for acceptable levels, coral-red for warnings—integrated into floating cards and rating displays that orbit a central product visualization. The overall composition feels spacious and breathable, with content anchored to a centered column that expands and contracts with viewport width. Navigation remains minimal and unobtrusive, allowing product imagery and data visualizations to dominate attention. The system prioritizes readability and scanability, using Lato across all text weights to maintain typographic cohesion from bold hero headlines to subtle footer links.

## Colors

The palette is intentionally restrained, relying on a warm neutral foundation with high-contrast dark text and two semantic accent colors for status communication.

| token | value | use |
|---|---|---|
| canvas | `#FEFCF9` | Primary page background; warm off-white that reduces eye strain compared to pure white |
| surface | `#FFFFFF` | Card backgrounds, elevated panels, floating product cards |
| ink | `#131313` | Primary text, headings, footer background, primary button fills |
| muted-ink | `#737373` | Secondary body text, descriptions, supporting information |
| action-primary | `#3CB371` | Safe/positive indicators, acceptable test results, success states |
| action-danger | `#FE6F61` | Warning indicators, above-guideline results, alert states |
| border | `#FFFFFF` | Subtle dividers on dark backgrounds, card borders in shadow contexts |
| border-dark | `#131313` | Outlined buttons, focused borders, structural boundaries |

The warm canvas (`#FEFCF9`) establishes the dominant field across all visible page sections, creating a soft, approachable environment that distinguishes Oasis from clinical white medical interfaces. Against this field, near-black ink provides maximum readability without the stark contrast of pure black. The semantic accent system is critical to the product's function: medium sea green (`#3CB371`) signals safety and compliance, while coral-red (`#FE6F61`) draws immediate attention to concerning results. These accents appear in iconography, text labels, and circular progress indicators rather than as large background fields. The footer inverts the relationship, using ink as the background with white text and links, creating a definitive section boundary. No gradient backgrounds or complex color layering is present; the system achieves visual interest through typography scale, shadow depth, and the strategic placement of colored status indicators.

## Typography

All text uses Lato, loaded in Regular (400) and Bold (700) weights from the source files. The system leverages weight and size variation within this single family to establish hierarchy without introducing additional typefaces.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Lato | 3rem | 700 | 1 | -0.025em | Homepage hero headline; maximum impact, tight leading |
| section-display | Lato | 1.875rem | 600 | 1.2 | -0.025em | Section headings, FAQ title; sub-hero emphasis |
| body | Lato | 1rem | 400 | 1.5 | 0 | Default paragraph text, navigation links, descriptions |
| body-large | Lato | 1.25rem | 400 | 1.4 | 0 | Hero subheadlines, introductory paragraphs |
| label | Lato | 1.125rem | 600 | 1.556 | 0 | Card titles, metric labels, emphasized UI elements |
| button | Lato | 0.875rem | 500 | 1.429 | 0 | Button labels, compact actions |
| navigation | Lato | 1rem | 400 | 1.5 | 0 | Header navigation, footer links |

The type system is built on a 2px relative unit, with all sizes aligning to this grid. Hero display at 48px (3rem) uses tight, flush leading and negative tracking for a modern, confident headline presence. Section display at 30px (1.875rem) introduces slightly more breathing room while maintaining the compressed character feel. Body text at 16px (1rem) with 24px line height provides comfortable reading for longer passages. The 20px body-large variant serves hero descriptions and introductory content with proportionally tighter leading. Labels at 18px (1.125rem) with semibold weight distinguish card headers and metric names within data displays. Button text at 14px (0.875rem) prioritizes compact clarity for action elements. Verify licensing for these families before production use.

## Layout

The layout follows a centered, single-column model with generous horizontal margins that scale with viewport width. Content blocks stack vertically with substantial vertical rhythm, creating clear separation between functional zones.

The maximum content width appears to center around approximately 1200px, with internal margins of 212.5px to 404.5px on either side depending on section context—narrower for focused content like FAQs, wider for hero and feature sections. The header navigation spans the full width with internal padding, containing the logo mark left-aligned and utility actions right-aligned.

Section spacing follows a clear escalation pattern: standard content sections receive 48px top and 64px bottom padding, while emphasized sections like the hero use 80px top and 96px bottom padding. The FAQ section compresses this to 12px top and 56px bottom, reflecting its more contained, list-oriented nature. Footer padding begins at 32px top and tapers to 8px bottom.

The hero section employs an asymmetric floating composition: a central phone mockup anchors the visual field, surrounded by six product-safety cards positioned at varying distances and angles. These cards break the rigid grid, creating dynamic tension and drawing the eye through the composition. Below the hero, content returns to a strict vertical stack.

Card grids and link lists use consistent internal spacing: 20px padding for small cards, 16px to 32px for larger panels. The footer organizes into four equal columns with 8px vertical spacing between link items.

## Visual language

The visual language communicates health transparency through clarity, restraint, and purposeful color coding. Photography and product imagery appear within device mockups or as standalone subjects, always presented cleanly against the warm canvas without decorative frames or backgrounds.

Shadows play a significant role in establishing elevation. Floating product cards use a pronounced, soft shadow (`0 25px 50px -12px rgba(0, 0, 0, 0.25)`) that lifts them distinctly from the page plane, reinforcing their interactive, data-rich nature. This shadow is directional and diffuse, suggesting ambient light rather than harsh spot illumination.

Iconography is simple and functional: warning triangles for alerts, checkmarks and shields for safety confirmation, droplets and laboratory symbols for test categories. Icons appear at consistent sizes within cards, left-aligned with text labels, using the semantic accent colors to reinforce status meaning.

The phone mockup in the hero uses realistic device framing with rounded corners and subtle bezel shadow, grounding the app interface in physical context. The screen content within shows the actual product interface—water bottle imagery, circular score indicators, and category tags—creating a nested design system that previews the in-app experience.

Border treatments are minimal: 1px solid white borders appear on elevated dark elements, while 1px dark borders define outlined button variants. No decorative rules or divider lines separate content sections; spacing alone creates rhythm.

## Components

### Header navigation

- **Anatomy**: Logo mark with palm tree icon and "Oasis" wordmark left-aligned; primary navigation links ("Top rated", "About", "Hiring", "Search") centered; "Sign in" text link and "Get the app" pill button right-aligned
- **Surface**: Transparent background over canvas, no border or shadow
- **Typography**: Navigation token for all links; button token for "Get the app"
- **Spacing**: Full-width with internal horizontal padding; vertical height approximately 64px
- **Composition**: Flex row with space-between alignment; logo and actions at edges, navigation centered

### Hero section

- **Anatomy**: Centered headline, subheadline paragraph, dual app store badges (Google Play and App Store), floating product cards surrounding central phone mockup
- **Surface**: Canvas background
- **Typography**: Hero-display for headline; body-large for subheadline
- **Spacing**: Generous vertical padding (80px top, 96px bottom); centered content column
- **Composition**: Asymmetric floating layout with cards positioned at varying distances from center; cards overlap the phone mockup's horizontal bounds

### Product safety card

- **Anatomy**: Icon left, label and description stacked right; warning variant uses alert triangle icon, safe variant uses category-specific icon
- **Surface**: White background with prominent soft shadow
- **Typography**: Label token for metric name; body token for status description
- **Shape**: 12px border radius
- **Spacing**: 20px internal padding
- **Variants**: Warning state uses action-danger text; safe state uses action-primary text; neutral state uses muted-ink text

### App store badge

- **Anatomy**: Platform icon left, store name and "Get it on"/"Download on the" label stacked right
- **Surface**: White background with subtle border; dark variant for App Store
- **Typography**: Small system text; not using Lato at standard sizes
- **Shape**: 8px border radius with 1px border
- **Spacing**: Compact internal padding; badges sit side by side with small gap

### FAQ accordion

- **Anatomy**: Section heading followed by stacked question rows; each row contains question text and chevron icon right-aligned
- **Surface**: Canvas background; no card container
- **Typography**: Section-display for heading; body token for questions
- **Spacing**: 24px bottom margin on heading; generous vertical padding between items (approximately 24px)
- **Composition**: Single column, maximum width narrower than hero content
- **States**: Chevron points down in collapsed state; implied expansion on interaction

### Footer

- **Anatomy**: Logo mark top-left; four-column link grid below containing Support, Product, Social, and Legal categories; copyright and attribution bottom row
- **Surface**: Ink background (#131313)
- **Typography**: Navigation token for links; white text color
- **Spacing**: 32px top padding, 8px bottom padding; 8px vertical spacing between links within columns
- **Composition**: Four equal columns; copyright left-aligned, creator attribution right-aligned

### Primary button

- **Anatomy**: Text label with optional external-link icon
- **Surface**: Ink background, canvas text
- **Typography**: Button token
- **Shape**: Full pill (9999px radius)
- **Spacing**: 0 12px horizontal padding; 40px minimum height
- **Variants**: Dark fill for primary actions; outlined variant with 1px ink border and transparent background for secondary actions

## Responsive behavior

The design appears optimized for desktop viewport widths, with content constrained to a centered maximum width. The hero's floating card composition would require significant adaptation for narrower viewports: cards should likely collapse into a vertical stack or grid below the phone mockup rather than maintaining their orbital positions. The four-column footer grid should reflow to two columns on tablet and single column on mobile, maintaining category grouping.

Typography scales down proportionally: hero display at 48px may reduce to 36px or 32px on smaller screens to prevent overflow. Section display at 30px scales to 24px. Body text remains at 16px minimum for readability. The navigation collapses to a hamburger menu or simplified utility bar, with search and primary actions prioritized.

App store badges should remain side by side where possible, stacking vertically only at very narrow widths. FAQ accordion items maintain full width with comfortable touch targets of at least 44px height for each row.

## Practical implementation guidance

### Preserve
- The warm off-white canvas (`#FEFCF9`) as the dominant background; this subtle warmth is essential to the approachable health aesthetic
- Single-family typography using Lato across all weights; the cohesion of this choice is central to the system's cleanliness
- Semantic color coding for safety states; users must instantly recognize green as safe and coral-red as concerning
- Generous whitespace and section padding; the breathable layout conveys transparency and reduces cognitive load
- The asymmetric hero composition with floating cards; this distinctive layout differentiates Oasis from conventional product pages

### Avoid
- Pure white (`#FFFFFF`) as page background; it undermines the warm, approachable quality
- Additional font families; the single-family system is intentional and effective
- Heavy borders or divider lines between sections; rely on spacing and background shifts instead
- Shadow on static content cards; reserve the pronounced shadow for floating, interactive, or emphasized elements only
- Centered text for long passages; keep body text left-aligned for readability

### Recommended build order
1. Establish the canvas background and load Lato in Regular and Bold weights
2. Implement the centered content container with responsive max-width and horizontal margins
3. Build the header navigation with logo, links, and pill button
4. Create the hero section with headline, subheadline, and app store badges
5. Develop the product safety card component with icon, label, description, and shadow
6. Position cards around the phone mockup in the hero composition
7. Implement the FAQ accordion with chevron indicators
8. Build the dark footer with four-column link grid and attribution row
9. Add responsive breakpoints for card repositioning and grid reflow

### Accessibility
- Ensure the coral-red (`#FE6F61`) on white meets WCAG AA contrast ratios for text; it may need darkening for small text compliance
- The ink (`#131313`) on canvas (`#FEFCF9`) provides excellent contrast for all text sizes
- Maintain visible focus indicators on all interactive elements, particularly the pill buttons and FAQ accordion items
- Provide aria-expanded state for FAQ items and ensure keyboard navigation through the accordion
- Alt text for all product imagery and icons within cards should describe the safety status conveyed by color
- The phone mockup image should include descriptive alt text referencing the app interface preview

## Scope note

This guide covers the Oasis Health homepage including the hero section with product visualization, FAQ accordion, and site footer. Navigation dropdown states, mobile menu behavior, search functionality, in-app interface screens, and additional interior pages are not represented in the supplied material. Motion design, loading states, and form validation patterns are not documented. Measurements reflect the exact values retained from the source interface.
