# How lapa.ninja is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/lapa.ninja-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with newsletter subscription, social links, and resource columns on dark background with pink subscribe button](https://pin.fontofweb.com/5903?format=jpg)](https://design.withfudge.com/share/pin-5903)

[Footer section with newsletter subscription, social links, and resource columns on dark background with pink subscribe button](https://design.withfudge.com/share/pin-5903)

[![Hero section with large white headline, navigation bar, and three-column card grid showing website screenshots on dark background](https://pin.fontofweb.com/5902?format=jpg)](https://design.withfudge.com/share/pin-5902)

[Hero section with large white headline, navigation bar, and three-column card grid showing website screenshots on dark background](https://design.withfudge.com/share/pin-5902)

## Overview

Lapa Ninja presents a dark, immersive browsing environment for discovering landing page design inspiration. The visual system prioritizes content density and scannability through a near-black canvas that makes colorful website screenshots pop. The interface balances editorial confidence with utilitarian clarity: large, tightly-tracked headlines establish hierarchy while compact label-style tags enable rapid filtering. The overall mood is that of a curated design archive rather than a marketing site—content-forward, minimally decorated, and optimized for repeated visits by creative professionals seeking reference material.

The design relies on a restrained two-family typographic pairing, with Inter handling all interface and display text and Roboto appearing in medium weight for small labels and metadata. Color is used sparingly and purposefully: a vivid magenta-pink serves as the sole action accent, while blue appears only in tag links and interactive pills. The dark value scale creates depth through subtle surface elevation changes rather than heavy shadows, keeping the focus on the showcased website thumbnails.

## Colors

| token | value | use |
|---|---|---|
| canvas | #0a0a0a | Main page background, deepest layer |
| surface | #141414 | Card backgrounds, footer sections |
| surface-elevated | #1a1a1a | Input fields, tag pills, hover states |
| ink | #ffffff | Primary text, headlines, navigation |
| muted-ink | #a0a0a0 | Secondary text, descriptions, placeholders |
| action | #ff1a8c | Subscribe button, primary CTAs |
| action-hover | #ff4da6 | Button hover state |
| accent-blue | #3b82f6 | Tag text, link pills, category labels |
| border | #2a2a2a | Subtle dividers, card outlines |

The color model is strictly dark-mode with no light variant apparent. The canvas at #0a0a0a is deep enough to eliminate glare during extended browsing sessions while providing sufficient contrast against the #ffffff ink for accessibility compliance. The surface tokens create a shallow depth system: cards sit one step above canvas, and interactive elements like inputs and tags float one step higher still.

The action magenta (#ff1a8c) is the most saturated color in the interface and draws immediate attention to conversion points. It appears most prominently in the newsletter subscribe button, where its warmth contrasts against the cool neutrality of the dark grays. The accent blue (#3b82f6) is reserved for navigation and taxonomy, appearing in category tags and link pills throughout the footer and filtering areas. This separation of warm-action versus cool-navigation helps users distinguish between doing something (subscribe) and going somewhere (browse categories).

No gradients or shadows are used as decorative elements; depth is achieved purely through surface value changes. Image palettes from the showcased websites introduce color variety, but the interface itself remains disciplined.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3rem | 700 | 1.1 | -0.02em | Main page headline |
| section-display | Inter | 1.5rem | 600 | 1.2 | -0.01em | Card titles, section headers |
| body | Inter | 1rem | 400 | 1.6 | 0 | Descriptions, paragraphs |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0 | Card descriptions, metadata |
| label | Roboto | 0.75rem | 500 | 1.4 | 0.02em | Tags, pills, badges, buttons |
| navigation | Inter | 0.875rem | 500 | 1.4 | 0 | Top nav, footer links |

Inter serves as the workhorse typeface across all display and body roles, leveraging its extensive weight range and excellent screen rendering at small sizes. The hero display at 3rem with tight -0.02em tracking creates an authoritative, magazine-like headline presence. Section display at 1.5rem maintains similar character but with slightly relaxed tracking for subordinate headings.

Roboto Medium appears exclusively at 0.75rem for label and button text, where its slightly wider proportions and mechanical clarity improve legibility in all-caps and small-size contexts. The positive 0.02em tracking on labels compensates for the small size and ensures tags remain readable when scanned quickly.

Body text maintains a generous 1.6 line height for comfortable reading of longer descriptions, while the compact 1.4 line height on navigation and label tokens keeps multi-word pills and menu items visually tight. Verify licensing for these families before production use.

## Layout

The page employs a centered single-column structure for the hero area, transitioning to a multi-column grid for content browsing. Maximum content width appears constrained to approximately 1200px, with generous horizontal padding that scales with viewport size.

The hero section stacks vertically: navigation bar, then headline, then subheadline with inline link, then the card grid. This vertical rhythm creates clear information hierarchy without sidebar distractions. The card grid uses three columns on desktop with consistent 1.5rem gutters between cards.

Spacing follows a 0.25rem base unit with semantic multiples. Section vertical padding uses 5rem (20 units) to create breathing room between major areas. Content gaps within sections use 1.5rem (6 units). Card internal padding uses 1rem (4 units) for the text area beneath thumbnails.

The footer expands into a multi-column layout with three resource categories side by side, each containing stacked link lists. Below this, a full-width tag cloud wraps category pills with centered alignment. The newsletter subscription form sits in a dedicated surface-elevated container with internal padding, positioned above the footer link columns.

Navigation sits in a fixed or sticky bar with logo left, menu center, and utility controls right. The search input and theme toggle occupy the far right, maintaining consistent touch targets.

## Visual language

The visual character is deliberately understated to avoid competing with the showcased designs. Rounded corners appear throughout but with restraint: cards use 0.75rem, buttons and inputs use 0.5rem, while tags and pills use full 9999px rounding. This creates a subtle hierarchy of roundness—more organic for interactive elements, slightly more structured for content containers.

Imagery dominates the visual field through the website screenshot cards. Each card presents a full-width thumbnail with no border radius on the image itself, allowing the card's rounded corners to frame the content. A small colored dot indicator appears on some cards, likely denoting category or freshness. Card footers contain a small icon, title, category label, and truncated description.

The tag pill system is a distinctive visual motif: small rounded capsules with blue text, sometimes preceded by a circular icon, arranged in horizontal scrolling or wrapping rows. These pills function as both navigation and content discovery, their uniform sizing and spacing creating a rhythmic texture against the dark background.

No decorative illustrations or background patterns appear. The brand mark is a simple wordmark with a small icon, treated with the same restraint as functional text.

## Components

### Navigation bar
- Anatomy: Logo mark with icon and "lapa" wordmark left; horizontal menu items center; search input and theme toggle right
- Surface: Transparent or matching canvas background
- Typography: Navigation token, Inter 0.875rem medium weight
- Composition: Flex row with space-between alignment, vertically centered items
- Spacing: Horizontal padding matching content container, vertical padding approximately 1rem

### Hero headline
- Anatomy: Two-line centered headline with paragraph subtext below
- Typography: Hero-display token for headline, body token for description
- Color: Ink on canvas
- Composition: Centered text alignment, maximum width constrained for readability
- Spacing: Generous top and bottom margin, approximately 3rem above and below

### Resource card
- Anatomy: Full-bleed thumbnail image top; footer with icon, title, category label, and description below
- Surface: Surface token background, card border radius
- Typography: Section-display for title, label for category badge, body-small for description
- Shape: 0.75rem border radius, overflow hidden on image
- Spacing: 1rem padding in text footer, image fills width
- Variants: Some cards show colored dot indicator; category labels vary (Foundry, Portfolio, Inspiration)

### Tag pill
- Anatomy: Optional circular icon prefix, text label, full pill rounding
- Surface: Surface-elevated background, optional border
- Typography: Label token, Roboto Medium 0.75rem
- Color: Accent-blue text, border token outline
- Shape: 9999px border radius
- Spacing: 0.5rem vertical padding, 1rem horizontal padding
- Composition: Inline-flex with centered items, horizontal gap between icon and text

### Newsletter subscription
- Anatomy: Heading, description paragraph, email input with inline subscribe button
- Surface: Surface-elevated container with internal padding
- Typography: Section-display for heading, body-small for description, label for button
- Color: Action background on button, ink text on button
- Shape: Input and button share 0.5rem radius, button positioned inside or adjacent to input
- Spacing: Approximately 1.5rem internal padding on container

### Footer link columns
- Anatomy: Three-column grid with category heading and stacked links
- Typography: Label token for headings in uppercase or small caps, body-small for links
- Color: Muted-ink for links, transitioning to ink on hover
- Composition: Equal-width columns, left-aligned text

## Responsive behavior

The three-column card grid should collapse to two columns on tablet viewports and single column on mobile, maintaining consistent gutters. Hero headline should scale down to section-display size on smaller screens to prevent overflow.

Navigation menu items should collapse to a hamburger menu on mobile, with search input potentially moving below the logo or becoming an expandable icon. Tag pill rows should wrap naturally rather than requiring horizontal scroll, though some implementations may prefer scrollable pill containers for dense category lists.

Footer columns should stack vertically on mobile, with each category becoming a collapsible section or simply a stacked block with increased vertical spacing.

The dark theme should persist across breakpoints without introducing a light variant. Touch targets for pills and navigation items should maintain minimum 44px height for accessibility.

## Practical implementation guidance

### Preserve
- The near-black canvas and high-contrast white text; this is the core identity
- The two-typeface system with Inter for display and body, Roboto for small labels
- The single magenta action color against the dark ground
- The card thumbnail-to-footer structure with consistent internal spacing
- The pill-shaped tags with blue text as a recurring navigation motif

### Avoid
- Introducing additional accent colors beyond magenta and blue
- Using heavy drop shadows instead of surface elevation for depth
- Making cards or containers lighter than surface-elevated; the dark hierarchy is shallow
- Using border-radius on thumbnail images themselves; let the card frame them
- Generic button styling that doesn't match the pill or rounded rectangle vocabulary

### Recommended build order
1. Establish the dark canvas and surface tokens with Inter at base size
2. Build the navigation bar with logo, menu items, and search input
3. Implement the hero headline with proper max-width and centering
4. Create the card component with image aspect ratio and text footer
5. Add the three-column grid layout with responsive breakpoints
6. Implement tag pills with proper flex behavior and wrapping
7. Build newsletter form with inline button positioning
8. Assemble footer with link columns and final tag cloud

### Accessibility
- Ensure white text on near-black canvas meets WCAG AAA contrast (it should exceed 4.5:1 comfortably)
- The magenta action button against white text should be verified for contrast compliance; consider darkening the pink or adding a text shadow if needed
- Provide visible focus states on pills and cards, likely using the accent-blue or a light outline
- Ensure thumbnail images have descriptive alt text since they are the primary content
- Maintain keyboard navigability through the tag cloud and card grid

## Scope note

This guide covers the homepage hero, card grid, and footer sections visible in the supplied images. Interior pages, individual design detail views, search results, and mobile-specific layouts are not represented. Motion, loading states, and hover interactions are not documented. Measurements are practical adaptation targets based on visual estimation from the provided screenshots.
