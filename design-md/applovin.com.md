# How applovin.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/applovin.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dark footer with multi-column navigation, AppLovin logo, language selector, and social icons on deep navy background](https://pin.fontofweb.com/2435?format=jpg)](https://design.withfudge.com/share/pin-2435)

[Dark footer with multi-column navigation, AppLovin logo, language selector, and social icons on deep navy background](https://design.withfudge.com/share/pin-2435)

[![Hero section with gradient background, bold white headline, subtitle, and purple-blue gradient CTA button above the footer](https://pin.fontofweb.com/2434?format=jpg)](https://design.withfudge.com/share/pin-2434)

[Hero section with gradient background, bold white headline, subtitle, and purple-blue gradient CTA button above the footer](https://design.withfudge.com/share/pin-2434)

[![Industry impact section with dark overlay on photography, cyan accent link, and five category cards showing client success stories](https://pin.fontofweb.com/2433?format=jpg)](https://design.withfudge.com/share/pin-2433)

[Industry impact section with dark overlay on photography, cyan accent link, and five category cards showing client success stories](https://design.withfudge.com/share/pin-2433)

[![Solutions section with light gray background, gradient headline text, four product cards with icons and illustrations, and cyan CTA link](https://pin.fontofweb.com/2432?format=jpg)](https://design.withfudge.com/share/pin-2432)

[Solutions section with light gray background, gradient headline text, four product cards with icons and illustrations, and cyan CTA link](https://design.withfudge.com/share/pin-2432)

## Overview

AppLovin's design system presents a dark-mode-first enterprise aesthetic that balances technical credibility with approachable warmth. The visual language centers on deep navy-to-black canvas surfaces that allow gradient accents and photography to carry emotional weight. The homepage alternates between immersive dark sections with atmospheric gradients and lighter functional zones for product information, creating a rhythmic reading experience that guides visitors from brand promise through solution exploration to social proof.

The system relies on a tightly controlled typographic hierarchy using Avenir across all weights, from the delicate Light cut for body copy to the commanding Heavy weight for display headlines. DM Sans appears exclusively for call-to-action elements, creating a subtle but discernible functional separation between editorial content and interactive targets. Color operates in three modes: the dominant dark surfaces, vibrant gradient accents in purple-to-blue for primary actions and headline emphasis, and a distinctive cyan for secondary links and interactive hints. This restrained palette ensures that every accent carries maximum impact against the dark ground.

## Colors

| token | value | use |
|---|---|---|
| canvas | #0a0a0f | Deepest background, hero sections with gradient overlays |
| surface | #14141f | Footer background, secondary dark sections |
| surface-elevated | #1e1e2e | Card backgrounds on dark, elevated panels |
| ink | #ffffff | Primary text, headlines, logo |
| ink-muted | #a0a0b0 | Secondary text, footer links, captions |
| action | #7c3aed | Primary action base, gradient start |
| action-gradient-start | #7c3aed | Button gradients, headline color transitions |
| action-gradient-end | #3b82f6 | Button gradients, headline color transitions |
| accent-cyan | #06b6d4 | Text links with arrows, secondary CTAs, interactive hints |
| border-subtle | #2a2a3a | Dividers, card borders on dark backgrounds |

The color system divides into functional zones. Dark values dominate: canvas at #0a0a0f provides the immersive foundation for hero sections where purple and blue atmospheric gradients bleed across the viewport, while surface at #14141f anchors the structured footer and navigation areas. Surface-elevated at #1e1e2e creates necessary hierarchy for cards that float above darker grounds, particularly visible in the industry impact section where success story cards sit atop a photographic background with dark overlay.

Text contrast is absolute: pure white ink for all primary reading, with ink-muted at #a0a0b0 reserved for supporting information and legal text. The action gradient from #7c3aed to #3b82f6 serves as the brand's signature motion, appearing on primary buttons and as a chromatic accent in display headlines where "Powerful, flexible solutions" transitions from purple to blue across the word "flexible." The cyan accent at #06b6d4 operates as a distinct secondary action color, appearing on arrow-linked text like "Explore success stories" and "Create an account," providing a cooler counterpoint to the warmer purple gradient.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Avenir | 3.5rem | 700 | 1.1 | -0.02em | Hero headlines, major section titles |
| section-display | Avenir | 2.5rem | 700 | 1.15 | -0.01em | Section headers, impact statements |
| body | Avenir Lt Pro-35 Light | 1rem | 300 | 1.6 | 0 | Paragraphs, descriptions, footer body |
| body-medium | Avenir Lt Pro-65 Medium | 1rem | 500 | 1.5 | 0 | Emphasized body, card descriptions |
| label | Avenir Lt Pro-85 Heavy | 0.75rem | 800 | 1.2 | 0.05em | Category labels, uppercase tags |
| navigation | Avenir Lt Pro-65 Medium | 0.875rem | 500 | 1.4 | 0 | Menu items, footer links |
| cta-text | Dm Sans 9 Pt | 0.875rem | 600 | 1.3 | 0 | Button labels, action text |

The typographic system is built on Avenir across its full weight range, with Adrian Frutiger's original design distributed by Monotype GmbH and Linotype GmbH. The Light cut at 300 provides the airy, readable body copy that prevents dark sections from feeling heavy, while Medium at 500 handles navigation and emphasized content. Heavy at 800 drives the label style with its forceful presence and slight positive tracking for uppercase treatments. The display weights use tight negative tracking to create compact, impactful headlines that feel contemporary and technically precise.

DM Sans, credited to no listed designer or vendor in the available records, serves a specialized role for call-to-action elements. Its semi-bold weight at 0.875rem creates a slightly more geometric, compact button presence that distinguishes interactive targets from editorial reading. Verify licensing for these families before production use.

Type sizing follows a 4px relative unit, with display sizes at 56px and 40px, body at 16px, and labels at 12px. The hierarchy maintains clear differentiation: hero-display commands attention at 3.5rem with tightest tracking, while body-light at 1rem with generous 1.6 line height ensures comfortable reading across longer descriptions.

## Layout

The page structure follows a full-bleed, section-based rhythm with alternating atmospheric and contained zones. Hero sections occupy the full viewport width with centered content alignment, typically carrying a headline, subtitle, and single primary action button. These immersive areas use the gradient canvas background without side margins, allowing color to extend to browser edges.

Content sections transition to contained widths with generous internal padding. The solutions section demonstrates a four-column card grid with consistent 2rem gaps between cards, each card maintaining internal padding of 2rem. Cards themselves are rounded at 1rem, creating soft containers that contrast with the sharp rectangular edges of the overall page structure.

The footer presents a complex multi-column layout: five navigation columns plus a language selector and social links, all aligned to a consistent top baseline. Legal links occupy a separate sub-footer row with horizontal spacing between items. The footer maintains the full dark surface treatment with no bottom rounding, creating a grounded terminal element.

Vertical rhythm uses section spacing of 6rem between major content zones, with internal content gaps of 2rem. The gradient accent line appearing below the solutions section provides a decorative horizontal rule that spans nearly full width, transitioning from purple to blue and serving as both visual punctuation and brand reinforcement.

## Visual language

The visual character combines enterprise precision with creative industry energy. Photography receives consistent treatment: the industry impact section shows desaturated, cool-tinted imagery with heavy dark overlay, ensuring text legibility while preserving human presence. This treatment unifies diverse photography into a cohesive system that supports rather than competes with content.

Geometric elements appear throughout: circular avatar crops in solution cards, rounded rectangles for all interactive elements, and the distinctive AppLovin logo mark—a triangular node network rendered in white line art. These geometric forms create visual consistency across product imagery and UI elements.

Gradient usage defines the system's most distinctive moments. The hero background blends purple and blue atmospheric gradients that shift across the viewport. The primary action button captures this same gradient as a solid filled shape. Display headlines in the solutions section apply the gradient directly to text fill, creating chromatic emphasis on key phrases. A single horizontal rule below the solutions grid repeats the gradient as a thin line, approximately 4px in height, serving as a section divider with brand character.

Iconography is minimal and functional: small arrow indicators on text links, social platform icons in the footer, and product logos within cards. The language selector presents as a bordered button with flag icon and "ENG" label, maintaining the system's clean rectangular vocabulary.

## Components

### Primary action button

- **Anatomy**: Text label centered within a rounded rectangular container
- **Surface**: Filled gradient from action-gradient-start to action-gradient-end at 135 degrees
- **Typography**: cta-text token, white ink
- **Shape**: 0.5rem border radius
- **Spacing**: 0.875rem vertical padding, 2rem horizontal padding
- **Composition**: Centered within hero sections, typically solitary or paired with minimal surrounding elements

### Solution card

- **Anatomy**: Product icon and name in header row, descriptive text below, illustrative imagery at bottom
- **Surface**: surface-elevated background at #1e1e2e
- **Typography**: Product name in body-medium, description in body-light
- **Shape**: 1rem border radius
- **Spacing**: 2rem internal padding, icons offset to top-left of card area
- **Composition**: Four-column grid with 2rem gaps, cards of equal height with imagery aligned to bottom edge

### Industry impact card

- **Anatomy**: Category label in uppercase, client logo, success metric description
- **Surface**: surface background with subtle transparency against photographic overlay
- **Typography**: label token for category, body-light for description
- **Shape**: 1rem border radius
- **Spacing**: 2rem internal padding
- **Composition**: Five-column horizontal scroll or grid, each card containing bottom-aligned imagery

### Footer navigation

- **Anatomy**: Logo mark left-aligned, five category columns with header labels and link lists, language selector and social icons right-aligned
- **Surface**: surface background
- **Typography**: label token for column headers, navigation token for links
- **Spacing**: Generous top padding, 2rem between columns, legal row separated by additional spacing
- **Composition**: Asymmetric balance with logo anchoring left, utility controls right, navigation filling center

### Text link with arrow

- **Anatomy**: Inline text with right-pointing arrow icon
- **Surface**: Transparent
- **Typography**: body-medium weight, accent-cyan color
- **Composition**: Appears below descriptive paragraphs, typically centered or left-aligned to content block

## Responsive behavior

The four-column solution card grid should collapse to two columns on tablet viewports and single column on mobile, maintaining internal card proportions and padding. The industry impact card row, visible as a horizontal arrangement, should implement horizontal scroll or stack to single column on narrow viewports to preserve readability of client success stories.

Hero section headlines should scale down from 3.5rem to approximately 2.5rem on tablet and 2rem on mobile, maintaining the tight line height and negative tracking. The centered composition of headline, subtitle, and single button should remain consistent across breakpoints, with horizontal margins increasing to maintain readable line lengths.

Footer navigation columns should reflow: five columns can compress to three then two, with the logo and social elements repositioning to top and bottom of the footer stack respectively. The language selector should remain accessible but may move below primary navigation on narrow screens.

Gradient backgrounds should maintain their color stops without banding; consider increasing gradient angle or adding subtle noise texture on very large displays. The decorative gradient rule below solutions should remain full-width but reduce to 2px height on mobile to preserve proportional subtlety.

## Practical implementation guidance

### Preserve
- The dark-mode-first approach with true black-navy canvas; light sections should remain exceptions
- Gradient text fills on display headlines for brand moments
- The strict Avenir hierarchy with Light for body, Heavy for labels, and Medium for navigation
- Cyan as a distinct secondary action color separate from the purple-blue gradient
- Generous section spacing that lets dark surfaces breathe

### Avoid
- Adding additional accent colors beyond the established purple-blue gradient and cyan
- Using DM Sans for body copy or editorial content; reserve for buttons and actions only
- Flat color fills where gradients establish brand presence
- Tightening body copy line height below 1.5; the Light weight needs air to remain legible
- Rounding beyond 1rem for cards; the system favors crisp edges with moderate softening

### Recommended build order
1. Establish dark canvas and surface color tokens with proper contrast ratios
2. Implement Avenir font loading with all four weights (Light, Medium, Heavy, Black)
3. Build hero section with gradient background and centered typographic stack
4. Create primary action button with gradient fill and DM Sans label
5. Develop solution card component with consistent padding and bottom-aligned imagery
6. Construct footer with multi-column grid and responsive collapse behavior
7. Add gradient text utility for display headlines
8. Implement industry cards with overlay treatment and horizontal arrangement

### Accessibility
- Ensure gradient text meets contrast requirements; provide solid color fallback for motion-sensitive users
- Maintain 4.5:1 contrast ratio for body text on surface-elevated backgrounds
- Add visible focus states to all interactive elements, using cyan accent or white outline
- Preserve keyboard navigation order through footer columns left-to-right, top-to-bottom
- Consider reduced-motion preferences for gradient backgrounds and hover transitions

## Scope note

This guide covers the AppLovin homepage including hero, solutions, industry impact, and footer surfaces. Mobile breakpoints, hover states, form components, interior pages, and the Axon.ai promotional banner are not represented in the available material. Measurements are practical adaptation targets derived from visible proportions.
