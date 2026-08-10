# How lemonsqueezy.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/lemonsqueezy.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with bold white headline on vibrant purple background, yellow announcement banner, and star testimonials](https://pin.fontofweb.com/4947?format=jpg)](https://design.withfudge.com/share/pin-4947)

[Hero section with bold white headline on vibrant purple background, yellow announcement banner, and star testimonials](https://design.withfudge.com/share/pin-4947)

[![Footer with four-column link grid on purple background, white section headers and muted link text](https://pin.fontofweb.com/4946?format=jpg)](https://design.withfudge.com/share/pin-4946)

[Footer with four-column link grid on purple background, white section headers and muted link text](https://design.withfudge.com/share/pin-4946)

[![FAQ accordion section with light pink background, numbered questions, and magenta accent indicators](https://pin.fontofweb.com/4945?format=jpg)](https://design.withfudge.com/share/pin-4945)

[FAQ accordion section with light pink background, numbered questions, and magenta accent indicators](https://design.withfudge.com/share/pin-4945)

[![Dark custom pricing section with laptop dashboard mockup and white pill button on black background](https://pin.fontofweb.com/4944?format=jpg)](https://design.withfudge.com/share/pin-4944)

[Dark custom pricing section with laptop dashboard mockup and white pill button on black background](https://design.withfudge.com/share/pin-4944)

## Overview

Lemon Squeezy's pricing page presents a confident, modern SaaS visual system built on dramatic color blocking and typographic clarity. The design alternates between three distinct surface modes: a vibrant purple hero that commands immediate attention, a soft pink content area that eases reading density, and a near-black dark section that elevates enterprise messaging through contrast. The system relies on two type families—Circular Std for commanding display headlines and Inter for readable body text and functional labels—creating a clear hierarchy without visual noise. Component shapes are consistently rounded, with pill buttons serving as the primary interactive signature across all surface modes. The overall impression is friendly yet authoritative, using color psychology to guide users from enthusiastic discovery through careful evaluation to decisive action.

## Colors

| token | value | use |
|---|---|---|
| action | `#FFC233` | Primary buttons, announcement banner background, star ratings, logo accent |
| canvas | `#FCECF4` | FAQ and content section backgrounds |
| ink | `#1A1A1A` | Primary text on light surfaces, button text on yellow |
| surface | `#6C2BD9` | Hero background, footer background, primary brand purple |
| surface-dark | `#0A0A0A` | Custom pricing section background, dark mode surfaces |
| muted-ink | `#6B7280` | Secondary body text, footer links, descriptive copy |
| accent-magenta | `#D946EF` | FAQ numbering, expand icons, section labels |

The color system operates through intentional temperature contrast. The warm yellow action color (`#FFC233`) activates against cool purple surfaces, creating accessible, energetic focal points. The purple hero surface (`#6C2BD9`) serves as the brand's dominant identity color, appearing in the hero, navigation bar, and footer as a continuous vertical experience. The light pink canvas (`#FCECF4`) provides thermal relief for dense content like FAQs, while the near-black dark surface (`#0A0A0A`) signals premium or enterprise-tier messaging. White text on purple maintains high contrast for accessibility, while the magenta accent introduces playful punctuation for interactive indicators and labels without competing with the primary yellow action color.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Circular Std | 4rem | 700 | 1.1 | -0.02em | Hero headlines, major page titles |
| section-display | Circular Std | 3rem | 700 | 1.15 | -0.01em | Section headings, FAQ title |
| body | Inter | 1rem | 400 | 1.6 | 0 | Paragraph text, descriptions |
| body-large | Inter | 1.25rem | 400 | 1.5 | 0 | Hero subheadings, introductory copy |
| label | Inter | 0.75rem | 500 | 1.4 | 0.08em | Buttons, tags, uppercase labels |
| navigation | Inter | 0.875rem | 500 | 1.4 | 0 | Nav links, footer headers |

Circular Std, designed by Laurenz Brunner and available from Lineto, carries display duties with geometric precision and slightly condensed proportions that feel contemporary without being cold. Its bold weight delivers the hero headline with authority, while the tight negative tracking keeps multi-line titles visually cohesive. Inter, designed by Rasmus Andersson and available from Rsms, handles all functional and body text with excellent screen readability at small sizes. The type scale builds from a 4px relative unit, with display sizes at 48px and 64px intervals, body at 16px, and labels at 12px. Verify licensing for these families before production use.

## Layout

The page follows a full-bleed sectional architecture with three distinct surface treatments stacked vertically. The hero section occupies the full viewport width with centered content constrained to a maximum readable measure. Navigation sits within the purple hero as a transparent overlay, with logo left-aligned, primary links centered, and authentication actions right-aligned. Below the hero, content sections transition to the light pink canvas with asymmetric two-column layouts—headlines left, supporting copy right—creating editorial rhythm. The FAQ section uses a single-column centered layout with generous vertical padding between items. The dark custom pricing section returns to full-bleed treatment with a split composition: text content left-aligned at 40% width, product imagery occupying the remaining 60% with intentional overflow into the viewport edge. Footer restores the purple surface with a four-column link grid and centered legal bar.

Spacing follows a 4px base unit (0.25rem), with section vertical padding at 96px (6rem) to create clear territorial boundaries between modes. Content max-width constrains readable text to approximately 1200px (75rem), while hero headlines may expand slightly wider for dramatic effect. The FAQ accordion items separate with 1px hairline borders in muted tones, using 24px (1.5rem) internal padding per item.

## Visual language

The visual personality balances playful confidence with professional credibility. The lemon logo mark introduces organic curvature that softens the geometric type, while the yellow-purple complementary pairing evokes energy and creativity. Photography and product mockups appear in dark, atmospheric treatment—laptop screens glow with purple-tinted dashboard interfaces, creating continuity with the brand surface color. Star ratings use filled yellow shapes at small scale for social proof without visual heaviness.

Shape language is consistently rounded: buttons are fully pill-shaped, cards and panels use 16px (1rem) corner radius, and the overall absence of sharp corners reinforces the friendly, approachable positioning. Shadows are minimal or absent; the design relies on color value contrast rather than elevation for hierarchy. Iconography is simple and functional—plus signs for expansion, arrows for navigation—rendered in the accent magenta or white depending on surface context.

## Components

### Announcement Banner
- **Anatomy**: Full-width strip above navigation, containing centered text and inline text-link button
- **Surface**: Solid yellow (`{colors.action}`) background
- **Typography**: `{typography.navigation}` in dark ink
- **Shape**: No border radius; flush to viewport edges
- **Spacing**: 12px (0.75rem) vertical padding

### Navigation Bar
- **Anatomy**: Logo mark with wordmark, dropdown links (Platform, Resources), direct links (Pricing, Wedges, Help), sign-in text link, primary pill button
- **Surface**: Transparent over hero purple; white text and logo
- **Typography**: `{typography.navigation}` for links; `{typography.label}` for "Get started" button
- **Shape**: Button uses `{rounded.pill}`
- **Spacing**: 16px (1rem) horizontal gap between links; 24px (1.5rem) gap before auth actions

### Hero Section
- **Anatomy**: Centered headline, two-line subheading, primary pill CTA, three-column testimonial row with star ratings and quotes
- **Surface**: `{colors.surface}` purple background; white headline and subheading; yellow stars
- **Typography**: `{typography.hero-display}` for headline; `{typography.body-large}` for subheading; `{typography.label}` for button; `{typography.body}` for testimonials
- **Shape**: Pill button with arrow icon
- **Spacing**: Generous vertical padding, approximately 120px (7.5rem) above headline; 48px (3rem) between subheading and button; 80px (5rem) to testimonials

### FAQ Accordion
- **Anatomy**: Section label, large headline, two-column intro text, numbered question rows with expand triggers
- **Surface**: `{colors.canvas}` pink background; dark ink text; magenta numbering and icons
- **Typography**: `{typography.label}` uppercase for "ALL-IN-ONE" tag; `{typography.section-display}` for headline; `{typography.body}` for questions and descriptions
- **Shape**: Full-width rows with 1px bottom borders; no card containers
- **Spacing**: 24px (1.5rem) vertical padding per row; 16px (1rem) between number and question text

### Custom Pricing Section
- **Anatomy**: Uppercase label, large headline, descriptive paragraph, secondary pill button; laptop mockup with dashboard UI
- **Surface**: `{colors.surface-dark}` near-black background; white text; purple-tinted screen content in mockup
- **Typography**: `{typography.label}` for "CUSTOM PRICING"; `{typography.section-display}` for headline; `{typography.body}` for description
- **Shape**: Pill button; mockup with subtle device frame rounding
- **Spacing**: Asymmetric layout with 40/60 text-to-image split; generous internal padding

### Footer
- **Anatomy**: Logo mark, four-column link grid (Resources, Features, Platform, Company), legal bar with copyright and policy links
- **Surface**: `{colors.surface}` purple background; white column headers; muted gray links
- **Typography**: `{typography.navigation}` weight for headers; `{typography.body}` at reduced opacity for links
- **Spacing**: 48px (3rem) vertical padding; even column distribution with 24px (1.5rem) row gaps

## Responsive behavior

The design's bold color blocking and centered compositions suggest natural responsive adaptations. The hero headline should scale down to `{typography.section-display}` at smaller viewports to prevent overflow. The asymmetric two-column FAQ intro should stack vertically, with the descriptive paragraph moving below the headline. The four-column footer grid should collapse to two columns on tablet and single column on mobile, maintaining section grouping. The custom pricing section's 40/60 split should reverse to full-width stacked layout with the mockup appearing above or below text content. Navigation dropdowns should convert to a consolidated menu pattern. Pill buttons maintain their shape but may expand to full-width on narrow viewports for touch accessibility.

## Practical implementation guidance

### Preserve
- The distinctive three-mode surface system: purple hero, pink content, dark enterprise
- Circular Std for all display headlines with tight negative tracking
- Consistent pill button shape across all CTA variants
- Yellow action color reserved for interactive elements and social proof stars
- Generous section spacing that lets each surface mode breathe

### Avoid
- Introducing additional accent colors beyond the established yellow and magenta
- Using sharp-cornered buttons or cards that contradict the rounded language
- Placing body text directly on purple without sufficient contrast adjustment
- Crowding the hero with secondary imagery that competes with the headline

### Recommended Build Order
1. Establish the 4px spacing unit and type scale with Inter body sizes
2. Implement the purple hero surface with centered content structure
3. Add Circular Std display headlines with proper tracking
4. Build pill button component with yellow and white variants
5. Create the FAQ accordion with pink canvas and magenta accents
6. Implement the dark custom pricing section with asymmetric layout
7. Add the four-column footer restoring purple surface continuity

### Accessibility
- Ensure white text on purple meets WCAG AA contrast ratios; the vibrant purple may require slight lightening for small text
- Maintain focus indicators on pill buttons that are visible against both yellow and white backgrounds
- Use semantic heading hierarchy: single h1 in hero, h2 for section titles, h3 for footer columns
- Provide aria-expanded states for FAQ accordion items
- Consider reduced-motion preferences for any accordion expand/collapse animations

## Scope note

This guide covers the pricing page surface visible in the supplied images, including hero, FAQ, custom pricing, and footer sections. Navigation dropdown states, mobile breakpoints, form interactions, checkout flows, and animation specifications are not included. Measurements are practical adaptation targets derived from visual inspection against a 4px base unit.
