# How wisprflow.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/wisprflow.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Dark teal savings calculator panel with lavender-accented display typography and illustrated character juggling currency symbols](https://pin.fontofweb.com/7402?format=jpg)](https://design.withfudge.com/share/pin-7402)

[Dark teal savings calculator panel with lavender-accented display typography and illustrated character juggling currency symbols](https://design.withfudge.com/share/pin-7402)

[![Light cream pricing page with three-tier card layout, lavender pill-shaped toggle, and outlined navigation header](https://pin.fontofweb.com/7401?format=jpg)](https://design.withfudge.com/share/pin-7401)

[Light cream pricing page with three-tier card layout, lavender pill-shaped toggle, and outlined navigation header](https://design.withfudge.com/share/pin-7401)

[![Cinematic hero section with rotating circular text ring around serif headline over blurred team photography](https://pin.fontofweb.com/7400?format=jpg)](https://design.withfudge.com/share/pin-7400)

[Cinematic hero section with rotating circular text ring around serif headline over blurred team photography](https://design.withfudge.com/share/pin-7400)

[![Full-bleed hero with motion-blurred figure, dotted elliptical path animation, and centered call-to-action buttons](https://pin.fontofweb.com/7399?format=jpg)](https://design.withfudge.com/share/pin-7399)

[Full-bleed hero with motion-blurred figure, dotted elliptical path animation, and centered call-to-action buttons](https://design.withfudge.com/share/pin-7399)

## Overview

Wispr Flow presents a voice dictation product through a design language that balances technical credibility with human warmth. The system rests on three visual pillars: an airy cream-and-teal color story that avoids sterile tech conventions, a dramatic typographic pairing of classical serif display with geometric sans-serif body copy, and generous rounded corners that soften every container into approachable shapes. The result feels like a premium editorial publication reimagined for software—confident in its voice, restrained in its ornament, and consistently warm across every surface.

The brand operates across two dominant modes. A light mode bathes pages in warm off-white and pale yellow surfaces, letting dark ink typography anchor the reading experience. A dark mode inverts this relationship, plunging sections into deep teal while preserving the same lavender and cream accents as points of warmth. Photography throughout receives heavy motion blur treatment, suggesting movement and voice rather than static product shots. Decorative elements include dotted elliptical paths, rotating circular text rings, and hand-drawn illustrative characters that reinforce the human-centered positioning.

## Colors

| token | value | use |
|---|---|---|
| ink | #1A1A1A | Primary text, dark backgrounds, button borders |
| ink-secondary | #222222 | Subdued text, secondary dark surfaces |
| canvas | #FFFDF9 | Page background, primary light surface |
| surface | #FFFFEB | Card backgrounds, elevated panels, navigation bar |
| surface-warm | #E4E4D0 | Borders, dividers, subtle background tints |
| accent-lavender | #F0D7FF | Primary buttons, active states, pricing toggle fill |
| accent-lavender-deep | #DDDDDD | Hover states, secondary lavender surfaces |
| accent-teal | #034F46 | Dark section backgrounds, calculator panels |
| accent-orange | #FFA946 | Illustrative accents, decorative highlights |
| action-primary | #F0D7FF | Filled buttons, selected pricing tier |
| action-primary-text | #1A1A1A | Text on lavender buttons |
| action-secondary | #1A1A1A | Outlined button borders, secondary button text |
| action-secondary-text | #FFFDF9 | Text on dark buttons, text on teal backgrounds |
| border-light | #E4E4D0 | Card borders, navigation bar borders |
| border-medium | #DDDDDD | Subtle dividers, inactive toggle borders |

The palette derives its character from temperature contrast rather than saturation. Warm creams and pale yellows dominate light surfaces, while a single deep teal provides dramatic dark sections without the harshness of pure black. Lavender functions as the brand's signature accent—appearing in buttons, pricing highlights, and decorative elements—while remaining soft enough to avoid garishness. The orange appears sparingly in illustrations and decorative photography, never in interface elements. Dark sections use cream text at high contrast against teal, preserving the warm palette temperature even in inverted contexts.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | EB Garamond | 7.5rem | 400 | 0.85 | -0.03em | Page heroes, major section headlines |
| section-display | EB Garamond | 4rem | 400 | 1.1 | -0.03em | Section headings, pricing titles |
| body-large | Figtree | 1.25rem | 500 | 1.3 | normal | Lead paragraphs, feature descriptions |
| body | Figtree | 1rem | 400 | 1.3 | normal | Primary body copy, navigation items |
| body-small | Figtree | 0.875rem | 400 | 1.3 | normal | Captions, metadata, fine print |
| label | Figtree | 0.875rem | 500 | 1.15 | 0.03em | Uppercase labels, category tags |
| navigation | Figtree | 1rem | 600 | 1 | normal | Nav links, header actions |
| button | Figtree | 1rem | 600 | 1 | normal | Button labels, call-to-action text |

EB Garamond, designed by Georg Duffner and Octavio Pardo, carries all display responsibilities with its classical proportions and delicate serifs. At 120px for hero treatments, it commands attention through scale and elegance rather than weight. The typeface's natural tightness is amplified by negative letter-spacing that brings headlines into cohesive word-shapes. Figtree, designed by Erik Kennedy, handles every utilitarian role with clean geometric clarity. Its weight range from Regular through Bold supports the full information hierarchy without ever competing with the serif display. Verify licensing for these families before production use.

The type system observes a strict division: EB Garamond never appears below 32px, and Figtree never exceeds 24px in display contexts. This preserves the editorial character of the serif while maintaining the sans-serif's role as the invisible servant of readability.

## Layout

The layout system builds on a 2px relative unit, yielding a granular but practical spacing scale. Major sections receive 128px vertical padding, creating dramatic breathing room that lets the large display typography resonate. Content containers use 40px horizontal padding, establishing consistent side margins without rigid max-width constraints.

The page architecture follows a stacked section model with full-bleed alternation. Light cream sections alternate with dark teal sections, creating natural rhythm and visual landmarks as users scroll. Within sections, content typically centers with generous top padding and asymmetric bottom padding that bleeds into the next section. Negative margins appear between sections, pulling adjacent surfaces into overlapping proximity that breaks rigid grid monotony.

The navigation bar floats as a pill-shaped container near the top of the viewport, not spanning full width. This creates a header that feels like a discrete object rather than a structural beam. Navigation items cluster left, with primary actions positioned right in a lavender-filled pill. Dropdown menus appear as rounded panels with subtle borders, maintaining the soft geometry of the parent container.

Pricing pages adopt a three-column card layout with equal-width tiers. The center card receives visual emphasis through border treatment rather than scale, preserving horizontal harmony while guiding selection. Calculator sections split asymmetrically: large display typography and interactive controls occupy the left, while results and summary data render in a bordered panel on the right.

## Visual language

The visual language centers on softness and motion. Every container receives rounded corners—panels at 40px, cards at 12px, buttons at 12px, pills at full radius. This consistent rounding eliminates sharp corners from the interface, reinforcing the approachable brand personality.

Photography treatment is distinctive: heavy motion blur applied to human subjects, creating impressionistic figures that suggest activity and voice without revealing identity. These blurred photographs serve as atmospheric backgrounds for hero sections, with display typography overlaid in cream or dark ink depending on the underlying image density. Decorative dotted ellipses trace paths across hero sections, suggesting sound waves or voice trajectories without literal representation.

Illustrations appear as flat, hand-drawn characters with minimal detail—simple line work, limited color palettes of teal, lavender, and orange, and playful poses that humanize technical content. The savings calculator features a character juggling dollar-sign blocks, directly connecting financial benefit to brand personality.

Circular text rings rotate around central headlines, carrying manifesto copy in continuous loops. This kinetic typography reinforces the voice-first positioning while creating memorable visual moments. The rings use small sans-serif text at high contrast against photographic backgrounds.

## Components

### Navigation Bar

Anatomy: Logo mark and wordmark left, primary navigation links center-left, secondary actions right, all contained within a pill-shaped floating bar.

Surface: Background uses surface token (#FFFFEB) with a 2px border in border-light (#E4E4D0). Border radius is approximately 10px, creating a soft pill rather than sharp rectangle.

Typography: Navigation links use navigation token at 16px Semibold. The active or primary action button uses the same typography with action-primary background.

Spacing: Internal padding is asymmetric—slightly more left padding to accommodate the logo, comfortable right padding before actions. Height is compact, allowing the bar to float without dominating the viewport.

### Hero Section

Anatomy: Full-bleed background (photographic or solid), centered or left-aligned display headline, supporting body copy below, primary and secondary action buttons, optional decorative elements (dotted ellipses, circular text rings).

Surface: Background varies by context—cream canvas for light heroes, deep teal for dark heroes, or full-bleed photography with overlay. Text color inverts accordingly: ink on light, cream on dark.

Typography: Headlines use hero-display at 120px with tight line-height. Supporting copy uses body-large at 20px or 24px. Button labels use button token.

Shape: The hero container often receives large border radius (40px) when it appears as a panel within the page flow, or remains full-bleed when at the top.

Composition: Content centers vertically and horizontally, with generous padding (96px to 128px) that lets the large typography breathe. Decorative dotted paths arc from the headline toward the edges, creating dynamic movement.

### Pricing Card

Anatomy: Category label at top, plan name in section-display, price in hero-display or section-display, billing period note, feature list with checkmarks, primary action button at bottom.

Surface: Background uses surface (#FFFFEB) with 2px border in border-light. The featured or recommended plan may use action-primary background or accent-lavender border treatment.

Typography: Category labels use label token in uppercase. Plan names use section-display at 48px or 64px. Prices use hero-display at 64px for dollar amounts. Feature lists use body at 16px.

Shape: Large border radius of 40px creates a friendly, approachable container. The card feels more like a physical object than a digital panel.

Spacing: Internal padding of 32px to 40px creates comfortable reading margins. Feature lists use consistent vertical spacing with checkmark icons aligned to the first line of each item.

### Button

Anatomy: Text label centered within rounded container. Two variants: filled primary and outlined secondary.

Surface: Primary uses action-primary background (#F0D7FF) with action-primary-text (#1A1A1A). Secondary uses transparent background with 2px border in ink and ink text.

Typography: Both variants use button token—16px Figtree Semibold with tight line-height.

Shape: 12px border radius creates a soft rectangle. Padding is 16px vertical, 24px horizontal, creating a substantial click target that feels confident.

### Savings Calculator

Anatomy: Section headline left, interactive slider with value display, hourly rate input, results panel right with summary metrics and final savings calculation.

Surface: Deep teal background (#034F46) with cream text. Results panel uses slightly lighter teal or transparent background with border.

Typography: Headlines use hero-display with lavender accent color on key words ("savings"). Body copy and labels use body in cream. Results figures use section-display or hero-display in lavender.

Shape: The entire section receives large border radius (40px), creating a distinct panel within the page flow. The results panel has its own rounded border.

### Toggle Switch

Anatomy: Two-option segmented control, typically "Monthly" and "Annual" with discount badge.

Surface: Background uses surface or canvas. Active segment uses action-primary fill. Inactive segment uses transparent background.

Typography: Small body text, 16px or slightly smaller, with the active segment potentially using Semibold weight.

Shape: Full pill radius creates a capsule shape. The active segment animates or snaps within the container.

## Responsive behavior

The design prioritizes desktop presentation with substantial typography and generous spacing. At narrower viewports, several adaptations should occur: the three-column pricing grid should stack to single column with the featured plan remaining visually distinct; hero display typography should scale down to section-display sizes to prevent overflow; the floating navigation bar should collapse to a hamburger menu or simplify to essential actions; and asymmetric calculator layouts should stack vertically with the results panel following the controls.

The circular text rings and dotted elliptical paths may require simplification or removal at small sizes, as their decorative density becomes overwhelming on narrow screens. Photography backgrounds should maintain their blur treatment but may need repositioning to keep focal points visible.

Touch targets should maintain minimum 44px height for all interactive elements. The generous button padding already satisfies this requirement.

## Practical implementation guidance

### Preserve
- The strict typographic division between EB Garamond display and Figtree body copy
- Large border radii throughout—40px for panels, 12px for buttons, full pills for toggles
- Warm cream surfaces rather than pure white; the subtle yellow tint is essential to brand character
- Motion-blurred photography treatment with overlay typography
- Lavender as the single accent color for interactive states and highlights

### Avoid
- Sharp corners on any container; the softness is systematic
- Pure black backgrounds; use the deep teal (#034F46) for dark sections
- EB Garamond at small sizes or Figtree at display sizes; the role division is fundamental
- Saturated purple or violet in place of the soft lavender; the accent must remain muted
- Tight section spacing; the 128px vertical rhythm is essential to the airy character

### Recommended Build Order
1. Establish the color tokens and apply canvas background to the document
2. Load EB Garamond and Figtree with complete weight ranges
3. Build the floating navigation bar with pill shape and border treatment
4. Create the hero section with full-bleed capability and centered content alignment
5. Implement the button system with primary filled and secondary outlined variants
6. Build the pricing card with large radius and internal spacing
7. Add the calculator panel with dark teal inversion
8. Apply decorative elements (dotted paths, circular text) as enhancement layers

### Accessibility
- Maintain 4.5:1 minimum contrast for all body text; the ink-on-cream and cream-on-teal pairings exceed this
- Ensure interactive elements have visible focus states; consider adding a 2px offset outline in accent-lavender
- Provide reduced-motion alternatives for the rotating circular text and dotted path animations
- Do not rely on color alone for pricing tier differentiation; the featured plan uses border weight and background treatment that remains visible to color-blind users

## Scope note

This guide covers the marketing site surfaces visible in the supplied home, about, and pricing pages. It does not include the application interface, mobile app design, documentation site, or any authenticated user experiences. Motion specifications for the circular text rings and dotted elliptical paths are not fully defined here; implementers should design appropriate timing and easing. Measurements reflect the desktop viewport state captured in the source material.
