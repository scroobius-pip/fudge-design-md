# How emailtooltester.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/emailtooltester.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with cream background, large display headline, colorful line-art illustration, navigation bar, and four white action cards with arrow icons](https://pin.fontofweb.com/5166?format=jpg)](https://design.withfudge.com/share/pin-5166)

[Hero section with cream background, large display headline, colorful line-art illustration, navigation bar, and four white action cards with arrow icons](https://design.withfudge.com/share/pin-5166)

[![Three-column help section with playful illustrations, muted ink headings, gray body text, and outlined pill buttons on cream background](https://pin.fontofweb.com/5167?format=jpg)](https://design.withfudge.com/share/pin-5167)

[Three-column help section with playful illustrations, muted ink headings, gray body text, and outlined pill buttons on cream background](https://design.withfudge.com/share/pin-5167)

[![Dark testimonial carousel with portrait photography, yellow accent underline on name, and navigation arrows](https://pin.fontofweb.com/5168?format=jpg)](https://design.withfudge.com/share/pin-5168)

[Dark testimonial carousel with portrait photography, yellow accent underline on name, and navigation arrows](https://design.withfudge.com/share/pin-5168)

[![Dark footer with newsletter input field, colorful logo, social icons, and organized link columns with muted text](https://pin.fontofweb.com/5169?format=jpg)](https://design.withfudge.com/share/pin-5169)

[Dark footer with newsletter input field, colorful logo, social icons, and organized link columns with muted text](https://design.withfudge.com/share/pin-5169)

## Overview

Emailtooltester.com presents a warm, approachable design system built around a cream-colored canvas that feels inviting rather than clinical. The visual identity balances playful, colorful line-art illustrations with clean, modern typography and confident use of high-contrast dark sections for testimonials and the footer. The overall impression is of a trustworthy resource that doesn't take itself too seriously—professional enough for business decision-makers, yet friendly enough to reduce the intimidation factor of choosing email marketing software.

The design employs a two-mode surface strategy: light sections use a warm off-white background with dark ink text, while dark sections invert to near-black with white text. This creates natural rhythm and visual hierarchy across the page. Accent colors appear primarily in illustrations and the occasional underline highlight, keeping the interface itself restrained while allowing personality to emerge through imagery. The system is built for content density—multiple tools, guides, and resources need to be discoverable without overwhelming the visitor.

## Colors

The color system is intentionally restrained, with most expression happening through illustration rather than interface chrome. The palette divides cleanly into light-mode and dark-mode surfaces, with a single warm accent that bridges both contexts.

| token | value | use |
|---|---|---|
| ink | #1a1a1a | Primary text, borders, button outlines, navigation |
| muted-ink | #6b6b6b | Secondary body text, descriptions, captions |
| canvas | #f5f0e8 | Page background, primary surface for light sections |
| surface | #ffffff | Cards, input fields, elevated elements on canvas |
| action | #1a1a1a | Button borders, interactive outlines; same as ink |
| accent | #f5c518 | Highlight underlines, illustration accents, emphasis |
| dark-surface | #1a1a1a | Background for testimonials, footer, dark sections |
| dark-ink | #ffffff | Primary text on dark surfaces |
| dark-muted | #a0a0a0 | Secondary text on dark surfaces, legal copy |
| border | #1a1a1a | Hairline borders for inputs, dividers |

The light mode dominates the experience. The canvas color (#f5f0e8) is a warm, slightly yellow-tinted off-white that avoids the sterility of pure white and complements the playful illustration style. Against this, ink (#1a1a1a) provides strong but not harsh contrast—softened from pure black for better harmony with the warm background. Muted ink (#6b6b6b) handles all secondary reading material, creating clear hierarchy without introducing additional hues.

The dark mode appears in the testimonial section and footer, using the same ink value (#1a1a1a) as a full-bleed background. This creates dramatic contrast and signals a shift in content type—from active tools and guides to social proof and site navigation. The accent yellow (#f5c518) appears sparingly as an underline beneath names in testimonials and as illustration details, providing warmth and drawing attention without competing for hierarchy.

## Typography

The site uses a single font family throughout: Dm Sans 9 Pt. This geometric sans-serif contributes to the friendly, modern character while maintaining excellent readability across sizes. The type system is built on a 4px relative unit, with sizes scaling in whole-number multiples.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Dm Sans 9 Pt | 3.5rem | 500 | 1.1 | -0.02em | Homepage hero headline |
| section-display | Dm Sans 9 Pt | 2rem | 500 | 1.2 | -0.01em | Section headings, testimonial names |
| body-large | Dm Sans 9 Pt | 1.25rem | 400 | 1.5 | 0 | Hero subhead, introductory paragraphs |
| body | Dm Sans 9 Pt | 1rem | 400 | 1.6 | 0 | General reading text, descriptions |
| label | Dm Sans 9 Pt | 1rem | 500 | 1.4 | 0.02em | Button text, card labels, uppercase treatments |
| navigation | Dm Sans 9 Pt | 1rem | 500 | 1 | 0 | Main navigation, dropdown triggers |
| legal-copy | Dm Sans 9 Pt | 0.75rem | 400 | 1.5 | 0 | Footer copyright, fine print |

The weight range is narrow: 400 for body text and 500 for headings, labels, and navigation. This creates subtle hierarchy without the stark contrast of a heavy bold. Negative letter spacing on display sizes (-0.02em at hero, -0.01em at section) tightens the headlines for a more refined, contemporary feel. Body text uses generous line height (1.6) for comfortable reading of longer descriptions.

The hero display at 3.5rem (56px) is the system's largest size, used for the homepage headline "Boost Your Business With Email Marketing." Section display at 2rem (32px) handles module headings like "How can we help you?" and testimonial names. The label style at 1rem (16px) appears in all-caps for buttons ("GET STARTED", "TAKE QUIZ", "COMPARE PRICES") and maintains the 500 weight for confident, scannable action labels.

Verify licensing for these families before production use.

## Layout

The layout follows a centered, contained model with generous breathing room. Content max-width appears to be approximately 1200px, centered with automatic margins. Sections stack vertically with substantial padding between them—typically 5rem top and bottom for major content blocks.

The hero section uses an asymmetrical two-column composition: text content occupies the left portion (roughly 45%), while a large illustration fills the right. Below the hero, a four-column grid of action cards spans the full content width. These cards are equal-width with consistent internal padding and a right-aligned arrow icon.

The "How can we help you?" section uses a three-column grid with centered content in each column. Each column contains an illustration, a heading, descriptive text, and a pill-shaped button. This symmetry creates easy scanning and comparison between the three offerings.

The testimonial section breaks the light-mode pattern with a full-bleed dark background. Content here is arranged in a carousel format with left/right navigation arrows. A single testimonial occupies the visible area, with a portrait image on the left, quote text in the center, and a partial next image peeking in from the right edge.

The footer returns to full-bleed dark, organized in a multi-column layout: newsletter signup on the left, link columns in the center, and logo with social icons on the right. A small floating action button (chat or scroll-to-top) appears fixed in the bottom-right corner.

Spacing between elements follows the 4px base unit. Card padding is 1.5rem (24px). Section vertical padding is 5rem (80px). Content gaps within components are typically 1.5rem (24px). The overall rhythm is open and breathable, with white space serving as an active design element rather than leftover area.

## Visual language

The illustration style is a defining characteristic of the visual system. Characters are rendered in simple line art with flat color fills—primarily black outlines with selective use of orange, yellow, and blue for clothing and accent elements. The style is playful and contemporary, avoiding the corporate stiffness common in B2B software sites. Illustrations are large, often occupying half the horizontal space in a section, and they frequently include small decorative elements like stars, moons, and geometric shapes that float around the main composition.

Photography appears in the testimonial section, where professional portraits of customers are shown in natural settings. These images are rectangular with slight rounded corners, maintaining the card aesthetic without becoming overly soft.

Iconography is minimal and functional. Navigation arrows in the testimonial carousel are simple left/right chevrons. Card action indicators are right-pointing arrows. Social icons in the footer use standard platform glyphs in white against the dark background. The search and language selectors in the navigation use universally recognized symbols.

The accent yellow (#f5c518) appears as a hand-drawn style underline beneath "Email Marketing" in the hero headline and beneath testimonial names. This treatment adds personality and draws the eye to key words without using heavy backgrounds or borders. The underline has a slightly irregular, brush-stroke quality that reinforces the human, approachable tone.

Decorative elements include small floating shapes—circles, stars, crescents—that orbit the main illustrations. These appear in accent colors and add energy and movement to otherwise static compositions. They are never random; they always relate to the illustration's narrative content.

## Components

**Navigation bar**
- Anatomy: Logo left, primary navigation center-right, utility icons (search, language) far right
- Surface: Transparent over canvas background, or with subtle background on scroll
- Typography: `{typography.navigation}`, ink color
- Composition: Horizontal flex with items spaced by approximately 2rem
- Variants: Top announcement banner in dark surface with centered text and outlined "FIND OUT MORE" button

**Hero section**
- Anatomy: Headline, subheadline, supporting paragraph, large illustration
- Surface: Canvas background
- Typography: Headline uses `{typography.hero-display}` with accent underline on key phrase; subheadline uses `{typography.body-large}`; body uses `{typography.body}` with muted ink
- Composition: Two-column asymmetric, text left (45%), illustration right (55%)
- Shape: No containing border; full-bleed feel within content max-width

**Action cards**
- Anatomy: Label text, right-aligned arrow icon
- Surface: `{colors.surface}` background
- Typography: `{typography.label}`, ink color
- Shape: `{rounded.card}` border radius
- Spacing: `{spacing.card-padding}` internal padding
- Composition: Four-column grid, equal width, gap of approximately 1rem
- Variants: Each card links to different tool or resource category

**Help/resource cards**
- Anatomy: Illustration, heading, description, pill button
- Surface: Transparent on canvas background
- Typography: Heading uses `{typography.section-display}`; description uses `{typography.body}` with muted ink; button uses `{typography.label}`
- Shape: Button has `{rounded.button}` (full pill)
- Spacing: Vertical stack with 1.5rem gaps between elements
- Composition: Three-column grid, centered content in each column

**Testimonial carousel**
- Anatomy: Section heading, portrait image, quote text, attribution, name with accent underline, navigation arrows
- Surface: `{colors.dark-surface}` full-bleed background
- Typography: Section heading uses `{typography.section-display}` in dark ink; name uses `{typography.section-display}` with accent underline; quote uses `{typography.body-large}` in dark ink; attribution uses `{typography.label}` in dark muted
- Shape: Images have slight rounding; navigation arrows are simple chevrons
- Composition: Horizontal carousel with partial next slide visible
- States: Left/right arrows for manual navigation

**Newsletter input**
- Anatomy: Text input with placeholder, submit arrow button
- Surface: Transparent with bottom border only
- Typography: Placeholder text in dark muted; input text in dark ink
- Shape: No border radius; 1px bottom border in muted tone
- Composition: Full-width within footer column

**Footer**
- Anatomy: Newsletter signup, link columns (About Us, Our Methodology, etc.), logo, social icons, copyright
- Surface: `{colors.dark-surface}` full-bleed
- Typography: Links use `{typography.body}` in dark ink; copyright uses `{typography.legal-copy}` in dark muted
- Composition: Multi-column grid, approximately 4 columns with varied width
- Spacing: Generous vertical padding, consistent with section spacing

**Floating action button**
- Anatomy: Circular button with icon (chat or scroll-to-top)
- Surface: Accent color or muted tone
- Shape: Full circle (`50%` or `9999px`)
- Position: Fixed bottom-right corner

## Responsive behavior

The design appears optimized for desktop viewing with a contained content width. At narrower viewports, the following adaptations are recommended: the hero two-column layout should stack vertically with illustration following text; the four-column action card grid should collapse to two columns then single column; the three-column help section should stack to single column with centered illustrations; the testimonial carousel should maintain horizontal swipe but show single slides; the footer multi-column layout should stack to single column with newsletter signup first.

The navigation should collapse to a hamburger menu on smaller screens, with the announcement banner remaining visible but potentially wrapping text. Font sizes should scale down modestly: hero display to 2.5rem, section display to 1.5rem on mobile. Touch targets for buttons and cards should maintain minimum 44px height.

## Practical implementation guidance

**Preserve**
- The warm cream canvas (#f5f0e8) as the dominant background; it distinguishes the site from competitors using stark white
- The playful illustration style with line-art characters and floating decorative elements
- The accent yellow underline treatment for emphasis on key phrases and names
- The two-mode surface strategy (light sections for tools, dark sections for social proof and navigation)
- The single font family approach with weight-based hierarchy rather than multiple families

**Avoid**
- Pure white backgrounds that would eliminate the warm, approachable character
- Heavy drop shadows or elevation effects; the design relies on flat color and spacing for hierarchy
- Multiple accent colors in the interface; keep expression in illustrations only
- Bold weights above 500; the design's lightness depends on restrained typography
- Rounded corners on buttons; the pill shape is distinctive and should be maintained

**Recommended build order**
1. Establish the canvas background and content max-width container
2. Implement Dm Sans 9 Pt with the full type scale and weight system
3. Build the navigation with logo, links, and utility icons
4. Create the hero section with asymmetric layout and accent underline
5. Develop the action card component with white surface and arrow icon
6. Build the help section three-column grid with illustrations and pill buttons
7. Implement the dark testimonial section with carousel behavior
8. Construct the footer with newsletter input and multi-column links
9. Add floating action button and announcement banner

**Accessibility**
- Ensure the accent yellow (#f5c518) on cream background meets minimum contrast ratios; use it only for decorative underlines, not critical text
- Dark section text (white on #1a1a1a) provides excellent contrast and should be the primary reading mode for testimonials
- Maintain focus indicators on all interactive elements; the pill buttons and cards need visible focus states
- Carousel navigation should include pause controls and keyboard accessibility
- Language selector and search icon need accessible labels
- Newsletter input should have associated label, not rely on placeholder alone

## Scope note

This guide covers the homepage surface including hero, tools section, help resources, testimonials, and footer. Interior pages, tool comparison interfaces, pricing calculator functionality, and mobile navigation patterns are not represented in the supplied images. Measurements are practical adaptation targets derived from visible proportions. Motion, hover states, loading behavior, and form validation states are not documented.
