# How pitch.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/pitch.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero pricing section with purple gradient background, three-tier pricing cards, and toggle switch for monthly/yearly billing](https://pin.fontofweb.com/5269?format=jpg)](https://design.withfudge.com/share/pin-5269)

[Hero pricing section with purple gradient background, three-tier pricing cards, and toggle switch for monthly/yearly billing](https://design.withfudge.com/share/pin-5269)

[![Feature grid showing engagement analytics, unbranded exports, high-res assets, and AI-powered creation cards with product screenshots](https://pin.fontofweb.com/5272?format=jpg)](https://design.withfudge.com/share/pin-5272)

[Feature grid showing engagement analytics, unbranded exports, high-res assets, and AI-powered creation cards with product screenshots](https://design.withfudge.com/share/pin-5272)

[![Detailed feature comparison table with Free, Pro, and Business columns organized by Teams, Collaboration, and Media & Integrations sections](https://pin.fontofweb.com/5270?format=jpg)](https://design.withfudge.com/share/pin-5270)

[Detailed feature comparison table with Free, Pro, and Business columns organized by Teams, Collaboration, and Media & Integrations sections](https://design.withfudge.com/share/pin-5270)

[![Frequently asked questions accordion with expand/collapse chevrons and horizontal divider lines between items](https://pin.fontofweb.com/5271?format=jpg)](https://design.withfudge.com/share/pin-5271)

[Frequently asked questions accordion with expand/collapse chevrons and horizontal divider lines between items](https://design.withfudge.com/share/pin-5271)

## Overview

Pitch presents a confident, modern SaaS identity built around a saturated purple gradient hero that immediately signals creative energy. The pricing page balances bold promotional messaging with dense functional information, using a three-tier card system to guide plan selection. The visual system relies on high-contrast white cards floating against a vibrant gradient field, with typography that shifts between the geometric authority of Mark Pro for headlines and the clean readability of Eina 01 for body content. Feature sections below the fold use a bento-grid arrangement with rounded cards containing product screenshots and icon-led descriptions. The overall impression is polished and product-forward, emphasizing collaboration and AI-powered creation without visual clutter. Navigation remains minimal and transparent over the hero, allowing the gradient to dominate first impressions. The design successfully scales from persuasive hero messaging to detailed comparison tables while maintaining consistent spacing, corner radius language, and color discipline.

## Colors

The color system centers on a vibrant purple gradient that defines the hero and brand identity, with neutral surfaces providing contrast and readability for content-heavy sections.

| token | value | use |
|---|---|---|
| action | #7B61FF | Primary buttons, plan name highlights, interactive accents, toggle switches |
| action-hover | #6B51EF | Button hover states, interactive element darkening |
| canvas | #FFFFFF | Page background, card surfaces, hero text |
| surface | #F5F5F7 | Feature card backgrounds, alternating table rows, subtle containers |
| surface-elevated | #FFFFFF | Pricing cards with shadow, modal backgrounds |
| ink | #1A1A2E | Primary headings, body text, icon strokes |
| ink-secondary | #4A4A5A | Descriptions, secondary labels, feature list items |
| ink-muted | #8A8A9A | Disabled states, metadata, helper text |
| accent-purple | #7B61FF | Free plan badge, Business plan highlight, gradient endpoint |
| accent-orange | #F5A623 | Pro plan badge, yearly savings callout, promotional emphasis |
| border | #E5E5EA | Dividers, card outlines, table row separators |
| hero-gradient-start | #5B21B6 | Deep violet anchor for hero background gradient |
| hero-gradient-end | #A78BFA | Light lavender terminus for hero background gradient |

The hero gradient flows from deep violet through saturated purple to soft lavender, creating dimensional depth with abstract 3D ring shapes rendered in translucent purple tones. White text maintains excellent contrast across the full gradient range. The three pricing plans use distinct color coding: Free in purple, Pro in orange, and Business in a deeper purple, creating immediate visual differentiation without breaking the overall palette harmony. Feature sections retreat to near-white and light gray surfaces, letting product screenshots and icons provide color interest. The system avoids dark mode in the visible surfaces; all content areas read as light theme with generous whitespace.

## Typography

Pitch employs two font families with clear role separation: Mark Pro carries display and heading duties with geometric confidence, while Eina 01 handles body text and interface elements with neutral clarity. Both families are served from Pitch's own font infrastructure. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Mark Pro | 4rem | 700 | 1.1 | -0.02em | Hero headline "Switch to Pitch" |
| section-display | Mark Pro | 2.5rem | 700 | 1.2 | -0.01em | Section headings, FAQ questions, feature titles |
| pricing-amount | Mark Pro | 3rem | 700 | 1 | -0.02em | Dollar amounts in pricing cards |
| label | Mark Pro | 0.75rem | 700 | 1.2 | 0.05em | Category labels, uppercase section headers |
| body-large | Eina 01 | 1.25rem | 400 | 1.5 | 0em | Hero subheadline, introductory paragraphs |
| body | Eina 01 | 1rem | 400 | 1.6 | 0em | Feature descriptions, FAQ answers, comparison text |
| body-small | Eina 01 | 0.875rem | 400 | 1.5 | 0em | Metadata, plan details, fine print |
| navigation | Eina 01 | 0.875rem | 400 | 1.2 | 0em | Top navigation links, utility text |

Mark Pro appears in Heavy weight for the hero display and Bold for section headings, creating a clear weight hierarchy without additional family variants. Eina 01 Regular provides consistent body texture across all reading contexts. The tight negative tracking on display sizes reinforces the modern, compact aesthetic. Type sizes scale in whole-number multiples of the 4px base unit, ensuring clean alignment with the spacing system.

## Layout

The page follows a centered single-column structure with contained width for content sections and full-bleed gradient for the hero. The hero occupies approximately 60% of initial viewport height, with the pricing cards breaking out of the gradient boundary to overlap the white content area below, creating depth through layering.

Navigation spans the full width with logo left, menu center, and authentication actions right. The menu uses a horizontal list with dropdown indicators for Product, Use Cases, Templates, and Resources, with Pricing as a direct link. Below the hero, content sections stack vertically with generous section spacing of 6rem between major blocks.

The feature grid in the "Features to win work" section uses an asymmetric bento layout: two larger cards on the top row (engagement analytics and unbranded exports) with two smaller cards below (high-res assets and AI-powered creation). Cards maintain consistent internal padding of 2rem and share uniform corner radius. The comparison table uses a three-column grid with plan headers fixed above scrollable feature categories, each category introduced by a bold uppercase label.

FAQ items stack vertically with full-width horizontal rules between entries, each question as a clickable row with chevron indicator right-aligned. The accordion pattern keeps content density manageable while allowing progressive disclosure.

## Visual language

The visual identity communicates creative professionalism through saturated color, generous whitespace, and rounded geometric forms. The purple gradient hero with floating 3D torus shapes establishes immediate brand recognition and differentiates Pitch from more conservative business tools. These abstract shapes use soft shadows and translucent layering to suggest depth without photographic realism.

Iconography throughout the interface uses simple line-weight strokes, typically 1.5px to 2px, with rounded caps and joins. Feature icons sit above titles in a consistent 24px to 32px size range. Product screenshots within feature cards show the actual Pitch interface, providing credible context and breaking up the abstract visual system with concrete functionality.

The pricing cards use subtle shadow elevation (0 4px 24px rgba) to separate from both the gradient hero and the white content surface below. Plan badges use small pill-shaped containers with member count ranges, color-coded to match plan branding. The monthly/yearly toggle uses a rounded pill container with a sliding white indicator, reinforcing the approachable, friendly interaction model.

Photography and illustration remain minimal; the design relies on UI screenshots, abstract 3D shapes, and iconography rather than lifestyle imagery. This maintains focus on product capability and keeps the visual system lightweight and performant.

## Components

### Pricing Card

- **Anatomy**: Plan badge with member range, plan name in brand color, price amount with billing period, description paragraph, primary action button, feature list with check icons
- **Surface**: White background with subtle shadow elevation, no visible border
- **Typography**: Plan name uses accent color at body-large size; price uses pricing-amount token; description uses body-small in ink-secondary; features use body in ink
- **Shape**: 1rem border radius, consistent 2rem internal padding
- **Spacing**: 1.5rem vertical rhythm between major elements, 0.75rem between feature list items
- **Composition**: Left-aligned content, full-width button at bottom, feature list with icon-leading alignment
- **Variants**: Free plan uses purple text and outlined secondary button; Pro and Business use filled primary buttons in purple; Pro plan name renders in orange

### Toggle Switch

- **Anatomy**: Pill-shaped track containing two text labels and a sliding indicator
- **Surface**: Purple track background, white active indicator, inactive label in white at reduced opacity
- **Typography**: Label token, uppercase or title-case billing period text
- **Shape**: Full pill radius (9999px), indicator with matching pill shape
- **Spacing**: Compact horizontal padding, indicator inset from track edge
- **States**: Monthly active shows indicator left; Yearly active shows indicator right with associated savings callout below in accent-orange

### Feature Card

- **Anatomy**: Icon or screenshot container, title, description paragraph
- **Surface**: Light gray surface (#F5F5F7) with no shadow, creating subtle separation from white page background
- **Typography**: Title in section-display at smaller scale; description in body
- **Shape**: 1rem border radius matching pricing cards
- **Spacing**: 2rem padding, 1rem between icon and title, 0.5rem between title and description
- **Composition**: Top-aligned content, screenshots right-aligned or full-width within card bounds

### FAQ Accordion

- **Anatomy**: Question text as clickable row, expand/collapse chevron icon, answer text revealed below
- **Surface**: Transparent background, full-width bottom border in border color
- **Typography**: Question in section-display at reduced size; answer in body with comfortable line length
- **Shape**: No border radius; full-bleed horizontal rules
- **Spacing**: 1.5rem vertical padding per item, 1rem between question and revealed answer
- **States**: Collapsed shows right-facing chevron; expanded shows downward chevron with answer text displayed

### Navigation Bar

- **Anatomy**: Logo mark left, horizontal menu center, Log in and Sign up buttons right
- **Surface**: Transparent over hero, presumably white or blurred on scroll
- **Typography**: Navigation token for menu items; label token for Sign up button
- **Shape**: Sign up button uses standard button radius; Log in appears as text link
- **Composition**: Flex row with space-between alignment, consistent horizontal page margins

## Responsive behavior

The pricing page likely adapts through several breakpoints. At narrower viewports, the three pricing cards should stack vertically rather than sitting side by side, with the hero headline scaling down to maintain readability. The feature bento grid would simplify to a single column, preserving card aspect ratios and internal spacing. The comparison table requires horizontal scroll or transformation into a stacked plan selector, as its three-column structure cannot compress indefinitely.

The navigation collapses to a hamburger menu or simplified logo-plus-actions pattern on mobile, hiding the full dropdown menu structure. FAQ items maintain their accordion behavior across all sizes, as the pattern translates well to narrow viewports. Touch targets for the billing toggle and card buttons should expand to at least 44px height for comfortable mobile interaction.

## Practical implementation guidance

### Preserve
- The vibrant purple gradient hero with floating 3D shapes as the immediate brand signature
- The two-font system with Mark Pro for display and Eina 01 for body, maintaining their distinct roles
- Plan color coding: purple for Free, orange for Pro, deeper purple for Business
- Card-based information architecture with consistent 1rem corner radius
- Generous whitespace between sections, approximately 6rem on desktop

### Avoid
- Generic gray SaaS aesthetics that would dilute the distinctive purple identity
- Additional accent colors beyond the established purple and orange system
- Sharp corners or angular shapes that contradict the rounded, friendly visual language
- Dense border usage; prefer shadow elevation and background color shifts for separation
- Mixed button styles within the same hierarchy level

### Recommended Build Order
1. Establish the gradient hero with Mark Pro hero-display typography and centered layout
2. Implement the pricing card component with all three plan variants and toggle switch
3. Build the feature grid with asymmetric bento layout and screenshot containers
4. Create the comparison table with sticky plan headers and categorized rows
5. Add FAQ accordion with smooth height animation for expand/collapse
6. Polish navigation with transparent-to-solid scroll behavior

### Accessibility
- Ensure white text on the purple gradient maintains WCAG AA contrast; the gradient midpoint may require text shadow or localized darkening
- Provide visible focus states for the toggle switch and accordion interactions, using outline or ring treatments in the action color
- Mark accordion items with appropriate ARIA expanded states and button roles
- Include reduced-motion preferences that disable smooth height animations
- Verify color is not the sole indicator for plan selection; text labels and structure should communicate equivalently

## Scope note

This guide covers the Pitch pricing page visible in the supplied images, including the hero, pricing cards, feature grid, comparison table, and FAQ accordion. Mobile layouts, dropdown menu interactions, checkout flows, and dashboard interfaces are not represented. Footer content, additional marketing pages, and motion design specifications fall outside the current scope. Measurements are practical adaptation targets derived from visual inspection of the desktop presentation.
