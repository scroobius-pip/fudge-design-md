# How helloaxel.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/helloaxel.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with pink axolotl mascot, savings counter, phone mockup, and investor logo bar on white background](https://pin.fontofweb.com/5236?format=jpg)](https://design.withfudge.com/share/pin-5236)

[Hero section with pink axolotl mascot, savings counter, phone mockup, and investor logo bar on white background](https://design.withfudge.com/share/pin-5236)

[![Testimonials carousel with green savings badges, pink read-more links, and member attribution cards on white background](https://pin.fontofweb.com/5237?format=jpg)](https://design.withfudge.com/share/pin-5237)

[Testimonials carousel with green savings badges, pink read-more links, and member attribution cards on white background](https://design.withfudge.com/share/pin-5237)

## Overview

Axel presents itself as a travel-savings service that automatically finds lower prices and refunds the difference. The visual system balances playful personality with financial trustworthiness. A cartoon axolotl mascot—pink, friendly, and waving—anchors the brand identity in the hero section, immediately distinguishing Axel from conventional travel apps. The interface relies on high-contrast black text against pure white backgrounds, with strategic accent colors directing attention to savings outcomes and calls to action.

The design language speaks to casual travelers who may not be technically inclined. Large rounded buttons, generous card padding, and explicit savings badges reduce cognitive load. The overall impression is approachable automation: the service works in the background while the interface celebrates results. Photography is minimal; instead, a phone mockup demonstrates the app interface, and investor logos provide social proof through recognizable names rather than elaborate visuals.

## Colors

The palette is intentionally restrained, with two high-saturation accents against a neutral foundation. Pink carries the brand personality and action hierarchy; mint green exclusively signals savings and positive outcomes.

| token | value | use |
|---|---|---|
| action | #E85A8A | Primary buttons, "read more" links, mascot accents, CTA emphasis |
| action-hover | #D64A7A | Button hover states, interactive pink elements |
| canvas | #FFFFFF | Page backgrounds, card surfaces, input fields |
| ink | #1A1A1A | Primary headings, body text, navigation |
| muted-ink | #6B7280 | Secondary text, captions, investor logo labels, timestamps |
| success | #00D09C | Savings badges, positive indicators, "Saved $X" labels |
| surface | #F8F9FA | Hero stat panel background, subtle section alternation |
| border | #E5E7EB | Card borders, dividers, subtle containment |

The color logic follows a clear emotional mapping. Pink (#E85A8A) appears on every interactive element that advances the user journey: the "Start Saving Now" button, testimonial "read more" links, and the mascot's body. Mint green (#00D09C) is reserved for quantified savings, appearing as compact badges with black text for maximum legibility. This separation prevents accent fatigue and trains users to associate green with money saved.

Black (#1A1A1A) provides authoritative weight for headlines and the savings counter, while gray (#6B7280) handles supporting information without competing for attention. The near-white surface (#F8F9FA) creates subtle depth behind the hero's value proposition panel without introducing a true dark mode or secondary background color.

## Typography

Two families serve distinct roles: Inter handles all interface text with its geometric clarity, while Lato appears in bold weight for compact labels and badges.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3rem | 700 | 1.1 | -0.02em | Hero headline "Travel? Axel gets you money back." |
| section-display | Inter | 2rem | 600 | 1.2 | -0.01em | Section headings: "Testimonials", "How repricing works" |
| body | Inter | 1rem | 400 | 1.6 | 0 | Testimonial excerpts, descriptions |
| body-large | Inter | 1.25rem | 400 | 1.5 | 0 | Hero subhead, value proposition text |
| label | Lato | 0.75rem | 700 | 1.2 | 0.02em | Savings badges, category tags, timestamps |
| navigation | Inter | 0.875rem | 500 | 1.4 | 0 | Header links, footer links |
| button | Inter | 1rem | 600 | 1.2 | 0 | CTA button text |

Inter's tight tracking in display sizes creates confident, modern headlines that occupy horizontal space efficiently. The hero headline at 3rem with -0.02em tracking achieves punchy density without feeling cramped. Body text at 1rem with 1.6 line height maintains comfortable reading for multi-line testimonial excerpts.

Lato's bold weight at 0.75rem with positive tracking provides the mechanical, data-forward voice for savings figures. The badge typography is intentionally compact and uppercase-feeling despite mixed case, ensuring "$300 Saved" reads as a factual claim rather than marketing fluff.

Verify licensing for these families before production use. Inter is designed by Rasmus Andersson and distributed by Rsms. Lato attribution is not specified in available records.

## Layout

The page follows a centered single-column structure with contained width and generous vertical breathing room. Sections stack with clear separation, each announced by a centered heading that re-establishes reading gravity after the asymmetric hero composition.

The hero section breaks the centered pattern with a two-zone layout: textual content and the value proposition panel occupy the left, while the phone mockup and mascot float on the right. The mascot overlaps the boundary between these zones, creating visual continuity. Below the hero, content returns to full-width centered alignment.

A persistent top navigation spans the full viewport width with internal containment. Logo left, links center-right, and a prominent pink CTA button at the far right establish standard SaaS header conventions. The navigation appears to sit on or near the canvas without a visible border or shadow, relying on whitespace separation.

The testimonials section implements a horizontal scrolling carousel on desktop, with cards partially visible at the viewport edges suggesting additional content. Cards maintain consistent internal padding and equal height through implicit grid alignment. The "How repricing works" section begins below, implying further vertical continuation.

Spacing follows a 0.25rem base unit. Section vertical padding appears substantial—approximately 5rem—creating deliberate pause between functional areas. Card internal padding of 1.5rem provides comfortable text containment without excessive white space. Grid gaps between testimonial cards measure roughly 1.5rem, sufficient to distinguish individual stories while maintaining scanability as a group.

## Visual language

The aesthetic position sits between fintech credibility and consumer app friendliness. Rounded corners dominate: buttons are fully pill-shaped, cards use 1rem radius, and even compact badges have slight rounding. This softness counterbalances the financial subject matter, preventing the interface from feeling like a traditional banking product.

The axolotl mascot is the unmistakable brand signature—pink, cartoon-rendered, with a simple smiling face and waving gesture. It appears at medium scale in the hero, positioned to peek over the value proposition panel and partially overlap the phone mockup. The character's style is flat-shaded 3D with soft gradients, neither hyper-realistic nor aggressively geometric.

Photography is absent from the interface itself; the phone mockup uses clean UI screenshots rather than lifestyle imagery. Investor logos appear as grayscale or muted text treatments, providing social proof without visual competition. The overall imagery strategy prioritizes clarity and speed of comprehension over emotional lifestyle association.

Shadow usage is minimal and subtle. The phone mockup may carry a soft diffuse shadow to lift it from the background, but cards and panels rely on borders and whitespace rather than elevation shadows. This restraint keeps the interface feeling light and responsive rather than materially heavy.

## Components

### Primary button

- **Anatomy**: Text label centered within a fully rounded container
- **Surface**: Solid action pink (#E85A8A) background
- **Typography**: button token, white text
- **Shape**: 9999px border radius creating pill shape
- **Spacing**: Generous horizontal padding, approximately 1rem vertical and 2rem horizontal
- **Composition**: Full-width within its container in the hero panel; likely auto-width in navigation
- **Variants**: Navigation variant appears smaller; hero variant is the dominant conversion element

### Savings badge

- **Anatomy**: Compact label with savings amount and optional "Saved" prefix
- **Surface**: Solid success mint (#00D09C) background
- **Typography**: label token in Lato Bold, black ink text
- **Shape**: Small rounded rectangle, approximately 0.25rem radius
- **Spacing**: Tight internal padding, approximately 0.25rem vertical and 0.5rem horizontal
- **Composition**: Positioned at top-left of testimonial cards, left-aligned within card padding
- **Variants**: Some badges show amount only ("$300"), others include "Saved" verb; category tag "Flight" appears as separate muted element

### Testimonial card

- **Anatomy**: Savings badge, category tag, excerpt text, "read more" link, member name, membership date
- **Surface**: White canvas with subtle border (#E5E7EB)
- **Typography**: body for excerpt, label for metadata, navigation for member name
- **Shape**: 1rem rounded corners
- **Spacing**: 1.5rem internal padding, consistent vertical rhythm between elements
- **Composition**: Fixed width within horizontal scroll container; equal heights implied by grid
- **Variants**: Some cards truncate excerpt with ellipsis; "read more" reveals full text

### Hero stat panel

- **Anatomy**: Large savings counter, descriptive label
- **Surface**: Subtle surface gray (#F8F9FA) with rounded container
- **Typography**: hero-display for dollar amount, body-large for suffix text
- **Shape**: 1rem rounded card
- **Spacing**: Comfortable internal padding, approximately 1.5rem vertical and 2rem horizontal
- **Composition**: Positioned above main headline as credibility anchor; left-aligned within hero zone

### Navigation header

- **Anatomy**: Logo mark with "Axel" wordmark, text links, CTA button, language selector
- **Surface**: Transparent or white background, no visible border
- **Typography**: navigation token for links, button token for CTA
- **Composition**: Logo left, links center-right, CTA and language selector far right
- **Variants**: Scrolled state not visible; may acquire background or shadow on scroll

### Phone mockup

- **Anatomy**: Device frame with app interface screenshot, notification overlay
- **Surface**: Physical device rendering with screen content
- **Composition**: Right-positioned in hero, overlapping with mascot; demonstrates actual app savings notifications
- **Variants**: Static presentation; no visible interaction state

## Responsive behavior

The horizontal testimonial carousel suggests a touch-friendly pattern that likely adapts to swipe gestures on smaller viewports. On narrow screens, the two-zone hero composition should stack vertically, with the mascot and phone mockup moving below the text content. The savings counter and headline would remain prominent, but the phone mockup may scale down or reposition to maintain visual hierarchy.

Navigation links beyond the CTA likely collapse to a hamburger menu on mobile, given the six visible items plus language selector. The investor logo bar may scroll horizontally or wrap to multiple rows on narrow viewports, as the full set of names exceeds comfortable reading width.

Button widths should remain full-container within the hero panel across breakpoints, but the navigation CTA may shrink to icon-only or text-only on the smallest screens. Card padding can reduce proportionally, though the 1.5rem base provides reasonable touch targets even on mobile.

## Practical implementation guidance

### Preserve
- The pink-and-mint accent separation: pink for actions and brand personality, mint exclusively for savings quantification
- The axolotl mascot's scale and positioning as a boundary-crossing element between content zones
- Generous whitespace between sections; the relaxed pacing reinforces the "automatic" service promise
- Pill-shaped primary buttons with bold centered text; this is the dominant conversion pattern
- High-contrast black text on white for all reading content; accessibility and clarity are brand-aligned

### Avoid
- Adding additional accent colors beyond pink and mint; the discipline of this pairing is distinctive
- Heavy shadows or elevation effects; the interface succeeds through flat clarity
- Small savings badges with insufficient contrast; the black-on-mint combination must remain legible at small sizes
- Centering body text beyond headings; left-aligned text maintains reading rhythm for testimonials and descriptions

### Recommended build order
1. Establish the color tokens and typography scale with Inter as the primary family
2. Build the navigation header with contained width and right-aligned CTA
3. Implement the hero section with asymmetric two-zone layout, stat panel, and pill button
4. Create the savings badge component with Lato Bold labels
5. Construct testimonial cards with horizontal scroll container
6. Add the investor logo bar as a grayscale trust signal
7. Integrate the mascot and phone mockup as positioned decorative elements

### Accessibility
- Ensure the pink action button meets contrast ratios against white; the #E85A8A value may need verification for WCAG AA compliance with white text
- Provide visible focus states for the horizontal carousel, as keyboard navigation is essential for the scrollable region
- Consider reduced-motion preferences for any carousel auto-advance; static pagination may be preferable
- The "read more" links should expand content in-place or navigate to full testimonials with clear context
- Language selector should include proper aria-labeling given its icon-only presentation in the header

## Scope note

This guide covers the helloaxel.com landing page hero, testimonials, and navigation as visible in the supplied images. Footer content, additional sections below "How repricing works," mobile layouts, form interactions, and authenticated app interfaces are not represented. Motion behavior, hover states, and the full investor logo set are inferred from partial visibility. Measurements are practical adaptation targets derived from visual estimation against a 4px base unit.
