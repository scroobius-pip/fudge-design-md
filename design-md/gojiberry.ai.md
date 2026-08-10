# How gojiberry.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/gojiberry.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with warm geometric gradient background, centered headline with orange accent word, and email capture form](https://pin.fontofweb.com/10694?format=jpg)](https://design.withfudge.com/share/pin-10694)

[Hero section with warm geometric gradient background, centered headline with orange accent word, and email capture form](https://design.withfudge.com/share/pin-10694)

[![Pricing section with two-column layout showing Pro and Custom plans, feature lists with checkmarks, and gradient tags](https://pin.fontofweb.com/10693?format=jpg)](https://design.withfudge.com/share/pin-10693)

[Pricing section with two-column layout showing Pro and Custom plans, feature lists with checkmarks, and gradient tags](https://design.withfudge.com/share/pin-10693)

[![Integrations section with radial network diagram connecting Gojiberry logo to partner tool icons](https://pin.fontofweb.com/10692?format=jpg)](https://design.withfudge.com/share/pin-10692)

[Integrations section with radial network diagram connecting Gojiberry logo to partner tool icons](https://design.withfudge.com/share/pin-10692)

## Overview

Gojiberry AI's visual system is built around warmth and clarity, designed to make AI-powered sales outreach feel approachable rather than mechanical. The interface balances clean white space with soft geometric gradients in peach and coral tones, creating an inviting atmosphere that contrasts with typical cold, clinical SaaS aesthetics. The design centers on a single conversion goal—getting visitors to launch their AI agent—while supporting that journey with clear pricing, integrations, and feature communication.

The system uses a restrained palette anchored by warm orange accents against neutral surfaces, paired with a humanist sans-serif typeface that feels friendly at display sizes and crisp at UI sizes. Rounded corners appear throughout, from pill-shaped buttons to softly curved cards, reinforcing the approachable personality. The layout follows a centered, contained model with generous vertical breathing room, letting each section stand as a distinct moment in the visitor's scroll.

## Colors

The color system is intentionally limited, relying on warmth and contrast rather than complexity. The primary accent is a burnt orange that appears in headlines, buttons, and interactive elements, drawing attention without overwhelming. Neutrals span from pure white through warm grays to near-black, with surfaces shifting subtly between canvas white and a slightly warmer off-white.

| token | value | use |
|---|---|---|
| action | #D86B23 | Primary buttons, accent words in headlines, interactive highlights |
| action-hover | #111111 | Dark hover state for buttons and links |
| canvas | #FFFFFF | Page background, card surfaces, input backgrounds |
| surface | #F5F4F3 | Subtle section backgrounds, footer area |
| surface-warm | #FAFAFA | Alternate section backgrounds, pricing card interiors |
| ink | #0A0A0A | Primary text, display headlines |
| ink-secondary | #111111 | Body text, secondary headings |
| muted-ink | #919191 | Placeholder text, disabled states, subtle labels |
| border | #EAEAEA | Card borders, input borders, dividers |
| success | #67DABF | Gradient endpoints, positive indicators |
| success-soft | #D6FFF5 | Tag backgrounds, soft success surfaces |
| warning | #FFEA00 | Gradient endpoints, highlight accents |
| warning-soft | #FFFBC9 | Tag backgrounds, soft warning surfaces |

The interface operates in light mode exclusively across the visible pages. Photography and illustration integrate through the same warm spectrum—peach, coral, and soft yellow tones that harmonize with the accent orange. Gradients appear as decorative background elements, flowing from mint-green to teal or from yellow to cream, adding depth without competing with content.

## Typography

The type system pairs Fustat as the primary display and body family with Inter for UI elements, Inter Display for navigation, and DM Mono for technical data. The system also includes -apple-system as a platform-native fallback in the computed font stack. This combination gives headlines a warm, slightly organic character while keeping interface text clean and legible. Weights stay in the regular to medium range, avoiding heavy bolds that would feel too aggressive for the friendly aesthetic.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Fustat | 3.5rem | 400 | 1 | -0.05em | Hero headlines, major section titles |
| section-display | Fustat | 3rem | 400 | 1.05 | -0.04em | Section headings, pricing titles |
| body | Fustat | 1.0625rem | 400 | 1.18 | -0.006em | Primary body text, descriptions |
| body-small | Fustat | 0.875rem | 400 | 1.43 | -0.007em | Secondary text, feature lists, captions |
| label | Inter | 0.625rem | 500 | 1.2 | -0.01em | Badges, micro-labels, metadata |
| navigation | Inter Display | 0.875rem | 400 | 1.57 | -0.007em | Top nav links, menu items |
| button | Inter Display | 0.9375rem | 500 | 1.07 | -0.007em | Button text, CTAs |
| mono | DM Mono | 0.75rem | 400 | 2 | -0.017em | Code snippets, technical data |

Display sizes use tight negative tracking for a modern, compact feel, while body sizes maintain slightly looser spacing for readability. The hero display at 56px (3.5rem) creates strong visual hierarchy without feeling oversized. Verify licensing for these families before production use.

## Layout

The layout follows a centered, single-column model with content constrained to a comfortable reading width. Sections stack vertically with generous padding, creating clear separation between functional areas. The top navigation remains fixed, providing persistent access to key pages and the primary conversion action.

The grid is simple and implicit: content lives within a central container that maxes out around 1200px, with internal elements either centering or using modest two-column splits for comparative content like pricing. Horizontal padding scales from 1.5rem on mobile to 2.5rem on desktop, keeping content from touching viewport edges.

Spacing follows a semantic rhythm rather than a dense scale. Section padding uses 6.25rem (100px) vertically to create dramatic white space between major areas. Component gaps of 1.5rem handle internal card spacing, while content gaps of 1.25rem manage text-to-element relationships. The hero section breaks this pattern with even more generous vertical padding, allowing the geometric gradient background to breathe around the centered headline and form.

Radii are component-specific: pills at 999px for buttons and tags, 100px for large rounded buttons, 1rem for cards, 0.75rem for inputs, and 50px for gradient tags. This creates a family of related curves that feel cohesive without being uniform.

## Visual language

The visual language centers on softness and approachability. Geometric gradients—built from triangular tessellations in peach, coral, and cream—serve as decorative backgrounds in the hero and select sections. These gradients never overpower content; they sit behind white or near-white overlays that ensure text remains perfectly legible.

Line work appears as thin, curved strokes that frame or connect elements, suggesting organic growth or network connections without literal illustration. The integrations section uses this most explicitly, with curved lines radiating from a central Gojiberry mark to partner logos.

Iconography and marks follow a flat, simple style. Checkmarks in feature lists use a warm orange stroke. Partner logos appear in their native colors, creating a patchwork of familiar marks that grounds the abstract network diagram in real tool integrations. The Gojiberry mark itself combines a berry-like shape with a checkmark, rendered in the accent orange.

Shadows are minimal and soft: a 4px 20px blur at 12% opacity for card elevation, and an inset 1px highlight at 10% white for subtle depth on dark elements. No heavy drop shadows or glassmorphism appear.

## Components

### Top Navigation

The top navigation spans the full width with a white background and a subtle bottom border. The Gojiberry logo sits left, featuring the berry mark in orange followed by the wordmark in dark gray. Centered links use the navigation typography with small superscript numbers (01, 02, 03, 04) indicating section order. Right-aligned actions include a text-only Login link and a prominent "Start for free" button with an arrow icon.

- Anatomy: Logo, centered link group, right action group
- Surface: White background, 1px bottom border in #EAEAEA
- Typography: Navigation for links, button for CTA
- Shape: Full-width bar, pill button for primary action
- Spacing: 1.5rem vertical padding, 2.5rem horizontal padding

### Hero Section

The hero is the most visually rich section, featuring a full-width geometric gradient background in warm peach and coral tones. A large rounded rectangle contains the gradient, sitting within the white page canvas with generous margin. Centered content includes a headline with the word "10" rendered in accent orange, a subheadline in muted gray, and a combined email input and submit button.

- Anatomy: Gradient background container, headline, subheadline, input-button group, trust line
- Surface: Geometric gradient background, white input field, dark button
- Typography: Hero-display for headline, body for subheadline, button for CTA
- Shape: 1rem rounded corners on gradient container, pill button, rounded input
- Spacing: 6.25rem+ vertical padding, 1.25rem gap between elements

### Pricing Cards

Pricing appears in a two-column layout with cards of equal height. Each card has a white background, subtle border, and 1rem rounded corners. The Pro plan shows a price ($99/month) in large type with a "/month" suffix, while the Custom plan uses "Talk with us" as its headline. Feature lists use orange checkmarks with body-small text, grouped under "What's included" subheads.

- Anatomy: Plan label, price/headline, description, gradient tags, CTA button, feature list
- Surface: White card, 1px border, subtle shadow on hover
- Typography: Section-display for prices, body for descriptions, body-small for features
- Shape: 1rem card radius, pill tags, pill buttons
- Spacing: 2.5rem internal padding, 1.5rem between major groups

### Integration Network

The integrations section displays a radial diagram with the Gojiberry mark at center and curved lines connecting to partner tool logos arranged in an arc below. This creates an immediate visual metaphor for connectivity and ecosystem breadth.

- Anatomy: Section heading, central mark, connecting curves, partner logo row
- Surface: White background, thin gray curves
- Typography: Section-display for heading, body for description
- Shape: Circular logo containers, organic curves
- Spacing: Generous vertical padding, centered alignment

### Text Input with Button

A combined input and button pattern appears in the hero, with the input field taking the majority width with rounded corners, placeholder text in muted gray, and a dark button attached or adjacent.

- Anatomy: Input field, submit button
- Surface: White input with border, dark or accent button
- Typography: Body-small for placeholder, button for action
- Shape: 0.75rem input radius, pill button
- Spacing: Tight integration, minimal gap between elements

## Responsive behavior

The design is visible at desktop widths around 1720px viewport. At narrower widths, the two-column pricing layout should stack to a single column, with cards maintaining full width and internal spacing. The hero gradient container scales down while maintaining aspect ratio, with headline size reducing from 3.5rem to 2.5rem on tablet and 2rem on mobile.

Navigation should collapse to a hamburger menu below approximately 768px, with the "Start for free" button potentially persisting as a sticky element. The integration network diagram may simplify to a horizontal scroll or grid of logos on mobile, as the radial layout requires significant horizontal space.

Typography scales proportionally: hero display drops to 2.5rem on tablet and 2rem on mobile, section display to 2rem and 1.75rem respectively. Body text remains at 1.0625rem across breakpoints for readability. Section padding reduces from 6.25rem to 4rem on tablet and 3rem on mobile.

## Practical implementation guidance

### Preserve
- The warm orange accent (#D86B23) as the primary action and highlight color
- Generous white space between sections—this is central to the premium feel
- The geometric gradient backgrounds in hero areas
- Pill-shaped buttons with 100px+ radius for primary actions
- The Fustat/Inter type pairing that creates warmth in headlines and clarity in UI

### Avoid
- Heavy drop shadows or glassmorphism effects
- Saturated or cool-toned accents that clash with the warm palette
- Dense, multi-column layouts that break the centered, breathable rhythm
- Bold weights above 500—the design achieves hierarchy through size and color, not weight
- Sharp 0px corners on interactive elements

### Recommended Build Order
1. Establish the color tokens and type scale in CSS custom properties
2. Build the top navigation with logo, links, and CTA button
3. Create the hero section with gradient background, headline, and input-button form
4. Implement the pricing section with responsive two-column cards
5. Add the integrations network diagram with SVG curves
6. Polish with hover states, focus rings, and reduced-motion alternatives

### Accessibility
- Ensure the geometric gradient backgrounds maintain sufficient contrast ratios for overlaid text; use semi-transparent white overlays if needed
- The orange accent (#D86B23) against white meets WCAG AA for large text but should be tested for small UI elements
- Provide visible focus indicators on all interactive elements, using the ink color or a 2px outline
- The input-button group needs clear labeling and error states for form validation
- Partner logos in the integrations section should include accessible names or aria-labels

## Scope note

This guide covers the Gojiberry AI landing page including hero, pricing, and integrations sections as visible in the supplied captures. Footer content, mobile navigation behavior, form validation states, and any dashboard or authenticated experiences are not represented. Motion, hover effects, and loading states are not documented from still images. The -apple-system family appears in the computed font stack but is not used as a primary design typeface. Measurements are practical adaptation targets.
