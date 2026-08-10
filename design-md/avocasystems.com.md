# How avocasystems.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/avocasystems.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with dark teal radial gradient background, serif headline, and two action buttons on the homepage](https://pin.fontofweb.com/10517?format=jpg)](https://design.withfudge.com/share/pin-10517)

[Hero section with dark teal radial gradient background, serif headline, and two action buttons on the homepage](https://design.withfudge.com/share/pin-10517)

[![About page hero with gradient transition from dark teal to light mint, featuring mission statement in two-column layout](https://pin.fontofweb.com/10520?format=jpg)](https://design.withfudge.com/share/pin-10520)

[About page hero with gradient transition from dark teal to light mint, featuring mission statement in two-column layout](https://design.withfudge.com/share/pin-10520)

[![Booking engine feature section with channel cards, connecting dotted lines, and dark teal metric dashboard card](https://pin.fontofweb.com/10518?format=jpg)](https://design.withfudge.com/share/pin-10518)

[Booking engine feature section with channel cards, connecting dotted lines, and dark teal metric dashboard card](https://design.withfudge.com/share/pin-10518)

[![Patient experience timeline with vertical step indicators, mint highlight bar, and serif heading with body copy](https://pin.fontofweb.com/10519?format=jpg)](https://design.withfudge.com/share/pin-10519)

[Patient experience timeline with vertical step indicators, mint highlight bar, and serif heading with body copy](https://design.withfudge.com/share/pin-10519)

## Overview

Avoca's design system serves operational intelligence software for radiology networks. The visual language balances clinical credibility with technological sophistication through a distinctive pairing of deep teal atmospherics and warm mint accents. The system employs a dual-typography approach: KopubBatang, a Korean serif, delivers display headlines with editorial authority and human warmth, while Pretendard, a geometric sans-serif, handles all interface and body text with crisp precision. This combination signals both medical trustworthiness and modern efficiency.

The interface alternates between immersive dark hero sections and clean light content areas. Dark sections use radial gradients that pool from deep teal toward black, creating depth without heaviness. Light sections rest on a mint-tinted off-white canvas that feels cleaner than pure white while maintaining clinical brightness. The overall density is sparse, with generous vertical breathing room and clear hierarchical separation between sections.

## Colors

The palette is intentionally limited, built around a single teal family with mint derivatives and neutral inks. This restraint reinforces the clinical, focused nature of the product.

| token | value | use |
|---|---|---|
| accent | #1F8A5B | Primary action emphasis, success states, active indicators |
| accent-teal | #004449 | Dark surface backgrounds, primary buttons on light, brand identity |
| canvas | #F2F6F5 | Primary page background, light section fills |
| canvas-gradient-start | #EEF3F1 | Gradient endpoint for subtle vertical banding on light sections |
| surface-dark | #004449 | Hero backgrounds, metric cards, dark panels |
| surface-darker | #001F22 | Deepest radial gradient stop, extreme contrast moments |
| ink | #0C1414 | Primary text on light backgrounds, near-black for maximum legibility |
| ink-secondary | #475050 | Body text, descriptions, secondary content on light backgrounds |
| ink-tertiary | #7A8584 | Captions, metadata, disabled or least-prominent text |
| mint | #9BF0D0 | Highlight bars, timeline indicators, subtle emphasis backgrounds |
| mint-glow | #5FD0A8 | Gradient accent, glow effects, radial highlight centers |
| white | #FFFFFF | Primary button fills, text on dark surfaces, card backgrounds |

The dark mode expression uses radial gradients that transition from accent-teal through deeper teals to near-black. Light sections employ a subtle vertical gradient from canvas to canvas-gradient-start, preventing flatness without introducing competing color. The mint family serves as the sole chromatic accent against the teal-neutral axis, appearing in focused moments like timeline highlights and data visualizations.

## Typography

The type system pairs three families in role separation. KopubBatang carries all display and heading voices with its serif structure and slightly condensed proportions. Pretendard handles every functional text need with consistent geometric clarity. The system stack also includes -apple-system as a platform-optimized fallback in certain UI contexts. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | KopubBatang | 3.5rem | 400 | 1.05 | -0.015em | Homepage hero headlines, major page titles |
| section-display | KopubBatang | 2.5rem | 400 | 1.1 | -0.01em | Section headings, feature titles |
| body-large | Pretendard | 1.25rem | 400 | 1.5 | 0em | Hero descriptions, introductory paragraphs |
| body | Pretendard | 1rem | 400 | 1.625 | 0em | Long-form content, explanations, mission text |
| ui | Pretendard | 0.875rem | 400 | 1.5 | 0em | Navigation, buttons, captions, metadata |
| label | Pretendard | 0.8125rem | 600 | 1.5 | 0.14em | Overlines, category tags, eyebrow labels |

The label style uses uppercase transformation with wide positive tracking, creating a distinct voice for section categorization that sits clearly below headlines in hierarchy. Display sizes employ negative tracking for tighter, more impactful headlines. Body text maintains generous line height for comfortable reading of operational descriptions. No bold weight is used in display roles; the serif's inherent contrast provides sufficient emphasis.

## Layout

The layout follows a stacked section architecture with full-bleed hero areas transitioning to contained content bands. The maximum content width centers at approximately 75rem with responsive margins. Sections alternate between immersive dark and clean light treatments, creating rhythmic visual pacing down the page.

The hero section occupies full viewport height with centered content alignment. Navigation floats above as a semi-transparent pill-shaped bar with backdrop blur, avoiding the hard separation of a traditional header. Below the hero, content sections introduce two-column asymmetric layouts: a narrower left column for headings and labels, a wider right column for body text and supporting imagery.

Spacing follows a base-2 system with 0.125rem as the atomic unit. Section vertical padding uses 6rem as the standard rhythm, with hero sections extending to 9.375rem top padding. Component internal spacing uses 1.5rem as the standard comfortable padding. Gap between related elements sits at 0.5rem to 1rem depending on density needs.

The grid is fundamentally single-column for hero messaging, then splits to asymmetric two-column for feature explanations. Cards and metrics introduce contained modules that float within the wider column, using subtle shadows to establish elevation without heavy chrome.

## Visual language

The visual character draws from medical imaging and operational dashboards: precise, data-rich, yet human-centered. The homepage hero uses flowing, wave-like abstract forms in deep teal that suggest both organic tissue and data visualization.

Iconography appears in small rounded squares with light mint or white backgrounds, paired with text labels in a vertical timeline or channel list format. These icon containers use 2.5rem sizing with generous internal padding, creating approachable touch targets that feel more friendly than technical.

Data visualization moments appear as dark metric cards with large white numerals and small uppercase labels. These cards use rounded corners at 1rem and sit with subtle shadow elevation, drawing focus without aggressive contrast. Connecting elements between cards use dotted lines with small circular nodes, suggesting network flow and system integration.

The overall surface treatment favors flatness with selective depth. Cards lift slightly with soft shadows; buttons have no shadow in their rest state. The navigation bar's glassmorphism treatment—semi-transparent with blur and subtle border—provides contemporary polish while maintaining content visibility.

## Components

### Navigation Bar

The top navigation floats as a rounded pill containing the Avoca wordmark, dropdown menus for Platform and Company, and a primary action button. The bar uses a semi-transparent white background at approximately 8% opacity, with a 1px solid border at 10% white opacity and backdrop-filter blur. This creates a frosted glass effect that adapts to both dark hero and light content sections.

- Anatomy: Logo left, menu center-left, action button right
- Surface: rgba(255,255,255,0.08) with backdrop-blur, 1px border rgba(255,255,255,0.1)
- Typography: ui token for menus, label token for the active button
- Shape: pill border-radius at 9999px, internal padding approximately 0.5rem vertical and 1.5rem horizontal
- Spacing: Menu items separated by 2rem gap, button offset from edge with comfortable margin

### Primary Button

The primary button appears in two contexts: as a white fill on dark backgrounds, and as dark fill on light backgrounds. The homepage hero shows the white variant with teal text and a right arrow icon.

- Anatomy: Text label with trailing arrow icon
- Surface: White background (#FFFFFF), text in accent-teal (#004449)
- Typography: ui token with 600 weight
- Shape: 0.8125rem border-radius, padding 0.875rem 1.75rem
- Spacing: Icon offset 0.5rem from text
- Variants: Dark variant uses transparent background with white text and subtle white border for secondary actions

### Feature Timeline

The patient experience timeline presents vertical steps with icon containers, titles, and descriptions. Active or highlighted steps receive a mint-tinted background bar that extends behind the content.

- Anatomy: Vertical stack of icon-plus-text rows, connected by subtle line
- Surface: Default rows have transparent background; active row has mint (#9BF0D0) background at low opacity
- Typography: ui token 600 weight for step titles, body token for descriptions
- Shape: Icon containers are 2.5rem rounded squares with 0.625rem radius
- Spacing: 1.5rem vertical gap between steps, 1rem horizontal gap between icon and text
- Composition: Left-aligned icon column, right-aligned text block with left padding

### Channel Cards

Small rectangular cards represent input channels (Call, Online, eReferral) with icon, title, and subtitle. These connect via dotted lines to a central metric dashboard.

- Anatomy: Icon left, title and subtitle stacked right
- Surface: White background, subtle shadow
- Typography: ui token 600 weight for titles, smaller ui token for subtitles
- Shape: 0.625rem border-radius, padding 1rem 1.5rem
- Shadow: 0px 8px 22px 0px rgba(0,0,0,0.05)
- Spacing: Vertical stack with 1rem gap between cards

### Metric Dashboard Card

A dark prominent card displaying a key performance indicator with large numerals.

- Anatomy: Small uppercase label, large number, supporting description
- Surface: surface-dark (#004449) background, white text
- Typography: label token for the category, hero-display token for the number, ui token for description
- Shape: 1rem border-radius, padding 1.5rem
- Composition: Centered or left-aligned depending on context, with generous internal spacing

## Responsive behavior

The design targets desktop as the primary experience, with content max-width constrained to approximately 75rem. On narrower viewports, the two-column asymmetric layouts should stack to single column, with headings above body content. The navigation pill may collapse to a simplified menu or hamburger treatment below tablet breakpoints.

Hero text should scale down proportionally: hero-display reduces to section-display size, section-display reduces by approximately 20%. The navigation bar maintains its pill shape on tablet but may transition to full-width on mobile. Timeline and channel card components maintain their horizontal layout on tablet, stacking vertically only on narrow mobile screens.

Touch targets should maintain minimum 44px height for all interactive elements. The icon containers in timelines and cards already exceed this at 2.5rem (40px), requiring minimal adjustment.

## Practical implementation guidance

### Preserve
- The strict serif/sans-serif role separation: KopubBatang only for headlines, Pretendard for everything functional
- The deep teal to mint gradient system as the sole chromatic identity
- The frosted glass navigation treatment with precise opacity values
- The generous section spacing and sparse vertical rhythm
- The uppercase, wide-tracked label style for section overlines
- The subtle card shadows that suggest elevation without heaviness

### Avoid
- Introducing additional accent colors beyond the teal-mint family
- Using bold weights in serif display text; the typeface's contrast is sufficient
- Heavy borders or outlines on cards; prefer shadow or flat color separation
- Pure white backgrounds; the mint-tinted canvas (#F2F6F5) is essential to the clinical warmth
- Crowding the navigation with too many items; the pill format demands restraint

### Recommended Build Order
1. Establish the color tokens and gradient definitions, particularly the dark radial and light vertical gradients
2. Implement the typography scale with both families loaded and role assignments strict
3. Build the navigation bar with its glassmorphism treatment, testing against both dark and light sections
4. Create the button components in both primary (white) and secondary (transparent) variants
5. Develop the section layout primitives: full-bleed hero, two-column content, centered single-column
6. Build the card components: feature cards, metric dashboard, timeline items
7. Add the connecting visualization elements: dotted lines, nodes, flow indicators

### Accessibility
- Ensure all text on dark gradients meets WCAG AA contrast; the white on #004449 combination exceeds requirements
- The mint accent (#9BF0D0) on white fails contrast for text; reserve it for backgrounds and non-text indicators
- Provide focus states for the glassmorphism navigation that do not rely solely on color change
- The large display typography benefits from reduced motion preferences; respect prefers-reduced-motion for any gradient animations
- Arrow icons in buttons should have aria-hidden treatment with descriptive button labels

## Scope note

This guide covers the homepage and about page marketing surfaces visible in the supplied captures. Interior platform interfaces, mobile navigation patterns, form components, and footer areas are not represented. Motion design including the video background elements and scroll-triggered transitions are noted but not specified in detail. The system stack includes -apple-system as a platform fallback in certain UI contexts.
