# How miro.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/miro.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with AI prompt input, floating collaborator avatars, and social proof logos on a light dotted canvas background](https://pin.fontofweb.com/3700?format=jpg)](https://design.withfudge.com/share/pin-3700)

[Hero section with AI prompt input, floating collaborator avatars, and social proof logos on a light dotted canvas background](https://design.withfudge.com/share/pin-3700)

[![Top navigation bar with Miro logo, dropdown menus, and blue primary action button on a dark announcement banner](https://pin.fontofweb.com/3699?format=jpg)](https://design.withfudge.com/share/pin-3699)

[Top navigation bar with Miro logo, dropdown menus, and blue primary action button on a dark announcement banner](https://design.withfudge.com/share/pin-3699)

## Overview

Miro's marketing presence presents itself as an infinite digital workspace brought to life. The design language centers on a light, airy canvas aesthetic that evokes the feeling of a physical whiteboard without literal mimicry. A subtle dotted grid texture covers the background, reinforcing the product's collaborative DNA while remaining visually quiet enough to let content breathe. The interface floats above this canvas in clean, rounded panels with soft shadows, suggesting depth without heaviness. Typography pairs a refined, lightweight display face for headlines with a workhorse sans-serif for everything else, creating a hierarchy that feels both aspirational and functional. The color system is deliberately restrained—near-monochrome with a single vivid blue serving as the unmistakable action color. This blue appears in primary buttons, AI-generated highlights, and interactive accents, making it the visual anchor that guides users toward engagement. Floating collaborator avatars, speech-bubble annotations, and live-cursor indicators scatter across the composition, turning a static page into a snapshot of active teamwork.

## Colors

| token | value | use |
|---|---|---|
| canvas | `#F0F0F0` | Page background with subtle dotted texture overlay |
| surface | `#FFFFFF` | Cards, input fields, navigation bar, and floating panels |
| ink | `#1F1F1F` | Primary text, headlines, and high-contrast UI elements |
| muted-ink | `#5C5C5C` | Secondary text, descriptions, placeholder content |
| action | `#4262FF` | Primary buttons, AI highlights, interactive accents, links |
| action-hover | `#3350E0` | Hover state for action elements |
| dark-surface | `#1A1A1A` | Announcement banner, dark mode surfaces |
| light-border | `#E6E6E6` | Subtle dividers, card borders, input outlines |

The palette operates in a near-monochrome mode with a single chromatic anchor. The canvas and surface tones create a clean, expansive stage that lets product imagery and floating UI elements feel dimensional. The ink and muted-ink pair provides clear typographic hierarchy without introducing additional hues. The action blue is saturated and distinctive enough to function as the brand's signature color—it appears in the "Generate" button, the "Miro AI" badge, and gradient accents on the announcement banner. Dark surfaces appear sparingly, reserved for the top announcement banner where white text on near-black creates maximum contrast for promotional messaging. The light-border token keeps dividers nearly invisible, maintaining the floating, unbounded quality of the workspace metaphor.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Matter | 3rem | 300 | 1.1 | -0.02em | Main headline, hero section |
| section-display | Matter | 2rem | 300 | 1.2 | -0.01em | Section headings, feature titles |
| body | Noto Sans | 1rem | 400 | 1.5 | 0em | Paragraphs, descriptions, general content |
| body-small | Noto Sans | 0.875rem | 400 | 1.5 | 0em | Secondary descriptions, metadata, captions |
| label | Noto Sans | 0.75rem | 600 | 1.4 | 0.01em | Buttons, tags, badges, navigation items |
| navigation | Noto Sans | 0.875rem | 400 | 1 | 0em | Top nav links, dropdown triggers |

Matter serves as the display face, rendered in a light weight that gives headlines an elegant, open quality. The tight negative tracking on display sizes keeps headlines compact and impactful. Noto Sans handles all functional typography with clarity and neutrality. The Semibold weight appears only in labels and buttons, creating a clear distinction between interactive and reading text. Body text maintains generous line height for comfortable scanning of feature descriptions and AI-generated content previews. The type scale is built on a 4px grid, with display sizes at 48px and 32px, body at 16px, and descending steps at 14px and 12px for supporting text.

Matter was designed by Martin Vácha and is available from Displaay. Noto Sans was designed by the Monotype Design Team and is available from Monotype Imaging Inc. Verify licensing for these families before production use.

## Layout

The page structure follows a centered, single-column rhythm with strategic asymmetry introduced through floating elements. The hero section occupies the full viewport width, with content constrained to a comfortable reading measure centered on the canvas. Below the hero, content sections maintain generous vertical breathing room, with section spacing at 6rem creating clear territorial boundaries between narrative moments.

The dotted canvas background extends edge-to-edge, establishing the infinite workspace metaphor. Floating UI elements—collaborator avatars, AI badges, document previews—break the centered alignment, appearing at offset positions to suggest a live, multi-user environment. These elements use absolute or fixed positioning relative to the viewport, creating a layered composition where the main content sits at one depth and ambient collaboration signals float at another.

The navigation bar spans full width with internal content aligned to the same center measure as the hero. It maintains a fixed height of 4rem with horizontal padding that matches the content container. The announcement banner above the navigation uses a separate dark surface that bleeds to edges, creating a visual sandwich that frames the navigation in light between two dark horizontal bands.

Content cards, particularly the AI prompt interface, use a contained width with internal padding of 1.5rem. The card itself has a subtle shadow and rounded corners that lift it from the canvas. Inside the card, a vertical stack with 1rem gaps separates the prompt input area from the suggestion chips and action button. The button aligns to the right, following a familiar conversational interface pattern.

## Visual language

The aesthetic balances clinical precision with playful human touches. The dotted canvas background is the most distinctive surface treatment—visible as a subtle grid of small dots that evoke graph paper or a digital whiteboard's infinite plane. This texture remains consistent across the page, unifying disparate sections into a single spatial environment.

Depth is created through shadow rather than color variation. Cards and floating panels cast soft, diffuse shadows with minimal offset, suggesting elevation without the aggressive layering of traditional material design. The AI prompt card demonstrates this clearly: a white rectangle with rounded corners appears to hover slightly above the dotted gray field.

Human presence is rendered through small, circular avatar images paired with name labels in rounded pill shapes. These elements use bright accent colors—lavender, yellow, blue—for their backgrounds, creating scattered points of warmth against the neutral canvas. The avatars connect to content through thin curved lines, suggesting relationships and activity flows without explicit diagramming.

The Miro logo appears as a stylized "M" mark in black, paired with a wordmark in the same typeface as navigation text. This mark uses a distinctive folded-ribbon geometry that reads as both abstract and dynamic, appropriate for a tool about visual thinking.

Product imagery and screenshots within floating cards show the actual interface—pale purple highlights on document previews, checkboxes, and progress indicators—hinting at the in-product color system without letting it dominate the marketing page.

## Components

### Primary button

- **Anatomy**: Text label centered within a rectangular container
- **Surface**: Solid action blue background
- **Typography**: Label token, white text, semibold weight
- **Shape**: Rounded corners at 0.5rem
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Typically right-aligned within card footers or centered in hero CTAs
- **Variants**: The "Watch video" variant uses a dark surface instead of action blue, suggesting secondary hierarchy despite its prominent placement

### Secondary button

- **Anatomy**: Text label within bordered container
- **Surface**: White background with light-border outline
- **Typography**: Label token, ink color
- **Shape**: Same rounded corners as primary
- **Spacing**: Identical padding to primary for visual pairing
- **Composition**: Appears alongside primary buttons in navigation and forms

### AI prompt card

- **Anatomy**: Text input area at top, horizontal row of suggestion chips below, primary action button at bottom right
- **Surface**: White with soft shadow
- **Typography**: Body-small for placeholder text, label for chips and button
- **Shape**: 0.75rem border radius
- **Spacing**: 1.5rem internal padding, 1rem between input and chips, 1rem between chips and button
- **Composition**: Centered in hero, width approximately 60% of content measure
- **Variants**: Suggestion chips use colored icons—green for Product Roadmap, orange for Onboarding Flow, red for Strategy Presentation—providing quick visual categorization

### Navigation bar

- **Anatomy**: Logo at left, dropdown menu triggers for Product, Solutions, Resources, flat link for Pricing, utility links and buttons at right
- **Surface**: White with bottom border
- **Typography**: Navigation token for all links
- **Shape**: Full-width bar, fixed height
- **Spacing**: Horizontal padding matching content container, items spaced with comfortable gaps
- **Composition**: Logo and primary navigation left-aligned, utility actions right-aligned

### Announcement banner

- **Anatomy**: Centered text with inline link, gradient-accented CTA button at right
- **Surface**: Dark surface background
- **Typography**: Body-small, white text
- **Shape**: Full-width strip, no border radius
- **Composition**: Text centered, button offset to right with small avatar indicator

### Floating collaborator badge

- **Anatomy**: Circular avatar image, name label in rounded pill, optional connecting line to content
- **Surface**: Colored pill background—lavender, yellow, or blue variants
- **Typography**: Label token, ink color
- **Shape**: Pill shape with 9999px radius
- **Composition**: Positioned absolutely relative to viewport or parent container, offset from main content flow

## Responsive behavior

The design should maintain its centered single-column structure across viewports, with the content measure narrowing on smaller screens. The hero headline should scale down to maintain comfortable line lengths—consider reducing hero-display to 2rem on narrow viewports. The AI prompt card should remain centered but expand to nearly full width on mobile, with suggestion chips wrapping to multiple lines if horizontal space is insufficient.

Floating collaborator badges may need to reposition or hide on smaller screens to prevent overlap with essential content. The navigation bar should collapse to a hamburger menu on mobile, with the announcement banner potentially becoming a dismissible strip to preserve vertical space.

The dotted canvas texture should remain visible at all sizes, though the dot density may appear to increase on smaller screens if the pattern is fixed-size. Consider scaling the pattern or using a CSS background-size adjustment to maintain consistent visual weight.

## Practical implementation guidance

### Preserve
- The dotted canvas background as the foundational surface treatment
- The light weight of Matter for headlines—heavier weights will lose the airy quality
- The single action blue as the only saturated color in UI elements
- Rounded corners on all interactive surfaces and cards
- Generous whitespace between sections, at least 6rem vertically
- Floating avatar badges with colored pill backgrounds as humanizing accents

### Avoid
- Additional accent colors beyond the action blue system
- Sharp corners on cards or buttons
- Dark backgrounds outside the announcement banner context
- Dense text blocks without visual breaks
- Shadows that are too dark or sharply defined
- Centering all elements symmetrically—preserve the intentional asymmetry of floating badges

### Recommended build order
1. Establish the dotted canvas background pattern and base spacing scale
2. Implement typography with Matter and Noto Sans loaded and fallbacks specified
3. Build the navigation bar with logo, dropdown triggers, and utility buttons
4. Create the hero section with headline, subhead, and CTA button
5. Develop the AI prompt card with input, chips, and generate button
6. Add floating collaborator badges with absolute positioning
7. Implement the announcement banner as an overlay or prepend to navigation
8. Refine shadows and hover states across all interactive elements

### Accessibility
- Ensure the action blue meets WCAG AA contrast against white backgrounds
- Provide visible focus indicators on all interactive elements, using a 2px outline offset from the element boundary
- Make floating badges non-essential to content comprehension so their absence does not block understanding
- Include aria-labels on icon-only buttons and dropdown triggers
- Ensure the dotted canvas pattern does not interfere with text readability—test with reduced transparency or a subtle overlay behind text areas if needed

## Scope note

This guide covers the Miro marketing homepage hero and navigation surfaces visible in the supplied images. In-product interface colors, additional page sections, mobile layouts, animation behavior, and form validation states are not represented. Measurements are practical adaptation targets.
