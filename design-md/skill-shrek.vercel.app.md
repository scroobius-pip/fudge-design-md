# How skill-shrek.vercel.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/skill-shrek.vercel.app-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with bold typographic headline, pink feature card, and colorful character avatars on black background](https://pin.fontofweb.com/6625?format=jpg)](https://design.withfudge.com/share/pin-6625)

[Hero section with bold typographic headline, pink feature card, and colorful character avatars on black background](https://design.withfudge.com/share/pin-6625)

[![Animated marquee banners with diagonal blue and pink strips displaying repeated words in condensed display type](https://pin.fontofweb.com/6622?format=jpg)](https://design.withfudge.com/share/pin-6622)

[Animated marquee banners with diagonal blue and pink strips displaying repeated words in condensed display type](https://design.withfudge.com/share/pin-6622)

[![Massive stacked headline with gradient purple text, floating cartoon character cards, and pill navigation on dark canvas](https://pin.fontofweb.com/6621?format=jpg)](https://design.withfudge.com/share/pin-6621)

[Massive stacked headline with gradient purple text, floating cartoon character cards, and pill navigation on dark canvas](https://design.withfudge.com/share/pin-6621)

[![Founding member pricing panel with dark card, purple pill badges, feature list, and handwritten annotation arrows](https://pin.fontofweb.com/6620?format=jpg)](https://design.withfudge.com/share/pin-6620)

[Founding member pricing panel with dark card, purple pill badges, feature list, and handwritten annotation arrows](https://design.withfudge.com/share/pin-6620)

## Overview

Skill Shrek is an edutainment platform with a visual identity built on extreme typographic contrast and playful digital illustration. The system pairs oversized condensed display lettering with a near-black canvas, creating immediate visual impact that reads as confident and unconventional. The design language borrows from meme culture and streetwear aesthetics: all-caps headlines, neon accent gradients, floating cartoon characters with expressive eyes, and diagonal motion banners. Every element competes for attention yet resolves into a coherent hierarchy through scale, color blocking, and generous negative space. The overall impression is of an educational product that refuses to look institutional—bright, loud, and deliberately informal while maintaining readable structure.

## Colors

The palette operates on a high-contrast dark mode with selective neon accents. The near-black canvas provides theatrical depth, while saturated purples, greens, pinks, and blues function as spot colors for energy and wayfinding.

| token | value | use |
|---|---|---|
| canvas | `#0B0B0D` | Primary page background, deepest layer |
| surface | `#1A1A1A` | Elevated cards, panels, and content containers |
| surface-elevated | `#262626` | Hover states, secondary card layers |
| ink | `#F1F1F1` | Primary text on dark backgrounds, headlines |
| ink-muted | `#9CA3AF` | Secondary body text, descriptions, captions |
| ink-dim | `#6B7280` | Tertiary text, disabled states, subtle labels |
| accent-purple | `#6C3BFF` | Primary action buttons, gradient endpoints, key badges |
| accent-purple-light | `#C89BFF` | Gradient start points, decorative highlights |
| accent-green | `#00FF94` | Success states, live indicators, verification marks |
| accent-pink | `#FFB6C1` | Alternate marquee strips, character cards, playful accents |
| accent-yellow | `#FFE070` | Warning highlights, character elements, attention spots |
| accent-blue | `#0029FF` | Primary marquee strip backgrounds, alternate actions |
| border | `#333333` | Subtle dividers, card outlines on dark surfaces |
| border-light | `#FFFFFF` | High-contrast outlines, nav pills, emphasis borders |

The color system relies on a dark-first assumption. Light text on dark ground is the default reading mode. Accent colors appear in large flat blocks—marquee strips, card backgrounds, button fills—rather than as thin lines or small dots. Gradients are used sparingly and always linear, running horizontally from light purple to deep violet for text fills that shimmer against the black canvas. Photography and illustration pull from the same accent family: pink, yellow, and cyan character cards float across compositions without breaking the overall dark coherence.

## Typography

Five families appear in the system: Barlow Condensed drives all display and headline matter; Inter handles body and interface text; Anton provides occasional heavy poster-style treatments; and two system families—System-Uimonospace and System-Uisansserif—appear in sparse interface contexts such as small labels and navigational microcopy. The system is unapologetically bold, with display sizes pushing past 17rem for hero moments.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Barlow Condensed | 17.2rem | 900 | 0.85 | -0.029em | Massive hero headlines, full-bleed typographic statements |
| section-display | Barlow Condensed | 8rem | 900 | 1 | -0.05em | Section-opening headlines, major transitions |
| headline | Barlow Condensed | 3.75rem | 900 | 1 | -0.025em | Card titles, feature headers, prominent labels |
| subheadline | Barlow Condensed | 2.25rem | 900 | 0.85 | -0.025em | Compact headlines, stacked type treatments |
| body | Inter | 0.875rem | 400 | 1.43 | 0 | Paragraph text, descriptions, feature explanations |
| body-large | Inter | 1rem | 400 | 1.5 | 0 | Expanded reading contexts, longer explanations |
| label | Inter | 0.6875rem | 700 | 1.5 | 0.15em | Buttons, badges, navigation labels, uppercase tracking |
| navigation | Barlow Condensed | 1rem | 900 | 0.85 | -0.05em | Nav links, compact header elements |
| marquee | Barlow Condensed | 6.875rem | 900 | 1 | -0.05em | Scrolling banner text, diagonal strip content |

Barlow Condensed is used at weight 900 with tight negative tracking for all display purposes, creating dense, impactful blocks of uppercase lettering. Inter provides the necessary contrast at smaller sizes—neutral, highly legible, and spaced normally. The hero-display token at 275.2px (17.2rem) represents the upper extreme of the system, reserved for the initial viewport statement. Label text uses aggressive uppercase tracking (0.15em) to create small but authoritative interface elements. Anton appears at 48px for specific poster-style treatments with a slightly different rhythm than Barlow Condensed. System-Uimonospace and System-Uisansserif appear in limited utility roles at small sizes with tight spacing. Verify licensing for these families before production use.

## Layout

The layout system is built on a fluid full-width approach with contained content islands. The page uses a single central column for primary messaging, with asymmetric card clusters that break the grid for visual energy.

**Grid and containment.** Content sits within a max-width container with 40px horizontal padding (2.5rem). Major sections stack vertically with substantial breathing room—section spacing of 7rem creates clear territorial boundaries between ideas. The hero section abandons conventional centering, allowing massive type to bleed toward edges while maintaining readable margins.

**Card architecture.** Feature cards use a rounded rectangle vocabulary with 2.5rem corner radii. Cards float at various depths, some with visible borders, others with subtle shadow elevation. The composition in the hero shows cards overlapping and offset—pink card left, blue card center-bottom, character grid right—creating a collage effect rather than a rigid grid.

**Z-axis layering.** The design employs deliberate depth: massive headline text at the rear, floating character illustrations at mid-depth, and interactive cards at the front. This is achieved through scale contrast rather than heavy shadow—cards have thin 1px borders and minimal shadow, relying on size and color to separate planes.

**Spacing rhythm.** The base unit is 0.125rem (2px), allowing fine-grained control. Component gaps of 1.5rem and content gaps of 2rem handle most internal spacing. Card padding is generous at 3rem, giving interior content room to breathe against bold backgrounds. Margins between major sections use the 7rem token to reset visual attention.

**Responsive considerations.** At reduced widths, the massive display type should scale down proportionally while maintaining line breaks that preserve meaning. Card clusters should reflow from side-by-side to stacked, maintaining their internal padding and border treatments. The marquee strips must remain horizontally scrollable or reduce in font size to prevent clipping.

## Visual language

The visual language fuses brutalist typography with cartoon playfulness. Every page section competes for dominance through scale, yet the system maintains coherence through repeated motifs.

**Character system.** Floating square and rectangular characters with expressive eyes appear throughout—pink, yellow, cyan, and red variants with simple dot pupils and raised eyebrows. These characters break the formal grid, sitting atop letters, peeking from card corners, or floating in negative space. They function as emotional punctuation, softening the aggressive typography with approachable personality.

**Marquee motion.** Diagonal strips of repeated text create kinetic energy even in static compositions. Blue strips carry white outlined text; pink strips carry black filled text. The diagonal angle suggests forward momentum and disrupts the horizontal calm of the page. These strips use full-bleed width with hidden overflow, implying continuous motion beyond the viewport.

**Gradient accents.** Linear purple gradients appear as text fills rather than backgrounds, creating luminous headline moments that feel digital and contemporary. The gradient runs from `#C89BFF` to `#6C3BFF`, always horizontal, always applied to large display type.

**Handwritten annotations.** Casual handwritten-style arrows and notes appear near calls-to-action—"closes after 50 signups" and "best gift ever"—adding human urgency and informal credibility to otherwise polished surfaces. These sit in stark contrast to the geometric precision of the type and cards.

**Border vocabulary.** Cards and containers use 1px borders extensively—white borders on dark cards, dark borders on light cards, creating definition without heavy shadow. The 2.5rem card radius is consistent across almost all containers, with full pills reserved for badges, buttons, and navigation elements.

## Components

**Hero section.** The hero stacks massive display type across multiple lines, with color shifts between lines—white, then gradient purple, then white again. Floating character cards with eyes and speech bubbles overlay the text at asymmetric positions. A small pill badge ("THE SOLUTION" or "HANDS-ON COURSES ON") sits above the headline as a category marker. The composition fills the viewport height with generous top and bottom padding.

**Feature cards.** Rounded rectangles with 2.5rem radius and 1px borders. Variants include: pink background with dark text for emphasis; light blue background with dark text for calm content; dark surface with white text for standard features. Interior padding of 3rem. Cards may contain avatar images, subheadlines, body text, and small icon illustrations. Some cards show character grids—repeating patterns of colored squares with eyes.

**Marquee banner.** Full-width diagonal strips with 8px vertical padding. Two variants: blue background (`#0029FF`) with white outlined or filled text; pink background (`#FFB6C1`) with black filled text. Text repeats infinitely and is set in Barlow Condensed at 6.875rem. The strip angle is consistent across instances, creating visual rhythm through repetition.

**Primary button.** Pill-shaped with 9999px radius, filled with accent-purple (`#6C3BFF`), white text in label typography. Padding of 12px vertical and 32px horizontal. Subtle glow shadow: `0 0 15px rgba(45, 50, 170, 0.4)`. Used for "JOIN NOW" and major conversion actions.

**Secondary button.** Pill-shaped, filled with accent-blue (`#0029FF`), white text. Slightly more compact padding at 12px by 24px. Used for alternate actions like "GIFT".

**Navigation pill.** Outlined pill with 1px white border, transparent or canvas background, white text. Used for mid-page category labels and filter options. Padding of 8px by 16px.

**Badge cluster.** Small pill badges in accent-purple with white uppercase label text, used for feature tags like "LIFETIME ACCESS" and "VIP SUPPORT". These group horizontally with small gaps between them.

**Pricing panel.** Dark surface card (`#1A1A1A`) with 2.5rem radius, containing a headline, badge cluster, body text, bullet list, icon grid, and action row. The panel uses 1px border in dark tone for subtle definition. Interior sections separated by thin horizontal rules. Handwritten annotations with arrows point to buttons for urgency.

**Character avatar.** Small rounded rectangle with portrait image, name in label style, and role descriptor. Used for mentor introductions and social proof. Background color matches card context.

## Responsive behavior

The design is built desktop-first with extreme display sizes that require careful scaling. At viewport widths below 1024px, the hero display type should reduce to the section-display token (8rem) to prevent horizontal overflow and maintain legibility. Card clusters should transition from multi-column collage to single-column stack, preserving internal padding and border treatments. Marquee strips must remain fully visible—either through font-size reduction or horizontal scroll containment. Navigation collapses to a compact header with hamburger menu, maintaining the pill button for "GET UPDATES". Touch targets for all buttons and cards should maintain minimum 44px height. Character illustrations scale proportionally but should not dominate reduced viewports—consider hiding decorative characters below 768px to preserve content hierarchy.

## Practical implementation guidance

**Preserve.** The extreme scale contrast between hero type and body text is the system's signature—maintain the 17.2rem to 0.875rem ratio for maximum impact. The near-black canvas with neon accents creates the distinctive mood; avoid lightening the background. The rounded 2.5rem card radius and full pill buttons are essential to the friendly-but-bold personality. Barlow Condensed at weight 900 with negative tracking must remain the display voice.

**Avoid.** Do not introduce serif typefaces or organic script fonts—they break the brutalist poster aesthetic. Avoid heavy drop shadows on cards; the system uses thin borders and flat color blocks for definition. Do not create additional gradient directions or colors; the horizontal purple gradient is the only approved text-gradient treatment. Avoid reducing marquee strip angles or making them horizontal—they lose their kinetic energy.

**Recommended build order.** Establish the canvas color and load Barlow Condensed at weight 900. Build the hero section with massive type and gradient fills. Implement the card system with consistent 2.5rem radius and 1px borders. Add marquee strips with diagonal transform and overflow hidden. Layer character illustrations as absolute-positioned elements. Finally, refine button states and add the handwritten annotation elements near calls-to-action.

**Accessibility.** The high-contrast light-on-dark default meets WCAG AA for large text, but body text in ink-muted (`#9CA3AF`) on canvas should be verified for small-text compliance. Gradient text fills should have a solid-color fallback for users with reduced motion or contrast preferences. All interactive elements need visible focus states—consider a 2px outline in accent-green offset by 2px from the element edge. Marquee strips should respect `prefers-reduced-motion` by pausing animation or displaying static text. Character illustrations that convey meaning need alt text; purely decorative characters should be hidden from assistive technology.

## Scope note

This guide covers the landing page surface including hero, feature cards, marquee banners, and founding member pricing panel. Mobile layouts, form validation states, checkout flows, and interior course pages are not represented in the supplied material. The character illustration system and motion behavior for marquee strips are described as visible in static compositions; full animation specifications would require additional review.
