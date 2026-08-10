# How phrasing.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/phrasing.app-design)

Last updated: 2026-08-10

## Captured pages

[![Language Graph feature section with isometric card illustrations and bold heading over light background](https://pin.fontofweb.com/6190?format=jpg)](https://design.withfudge.com/share/pin-6190)

[Language Graph feature section with isometric card illustrations and bold heading over light background](https://design.withfudge.com/share/pin-6190)

[![Engineered for results grid showing four feature cards with 3D app mockups and purple accent labels](https://pin.fontofweb.com/6189?format=jpg)](https://design.withfudge.com/share/pin-6189)

[Engineered for results grid showing four feature cards with 3D app mockups and purple accent labels](https://design.withfudge.com/share/pin-6189)

[![FAQ accordion with expanded answer revealing paragraph text and plus-minus toggle controls](https://pin.fontofweb.com/6188?format=jpg)](https://design.withfudge.com/share/pin-6188)

[FAQ accordion with expanded answer revealing paragraph text and plus-minus toggle controls](https://design.withfudge.com/share/pin-6188)

[![Footer with iPhone device frames showing multilingual app screens and brand mark with social links](https://pin.fontofweb.com/6187?format=jpg)](https://design.withfudge.com/share/pin-6187)

[Footer with iPhone device frames showing multilingual app screens and brand mark with social links](https://design.withfudge.com/share/pin-6187)

## Overview

Phrasing.app presents a language-learning product through a warm, contemporary visual system that balances technical credibility with approachable softness. The design centers on generous white space, isometric 3D illustrations of app interfaces, and a restrained palette of purple, coral, and amber accents against near-white backgrounds. The overall impression is of a polished consumer application—clean enough to feel trustworthy, colorful enough to feel human.

The site structure follows a classic product-marketing flow: a hero section establishing the brand promise, a features grid demonstrating core capabilities, an FAQ for objection handling, and a footer with device mockups and contact pathways. Typography is exclusively Inter for UI elements, with The Artisan appearing occasionally for editorial quotes. The visual rhythm relies on consistent card-based containers, soft radial gradients that bleed behind content, and tight negative letter-spacing that gives headlines a modern, engineered feel.

## Colors

The color system operates in three layers: a neutral foundation of blacks and grays, warm surface tints for section differentiation, and vibrant accents for labels, buttons, and interactive states.

| token | value | use |
|---|---|---|
| ink | `#000000` | Primary headings, body text, borders |
| ink-secondary | `#212021` | Feature titles, emphasized body text |
| ink-tertiary | `#271B2E` | Deep purple-black for gradient endpoints |
| muted | `#949494` | Secondary descriptions, captions |
| muted-secondary | `#636263` | Tertiary text, footer metadata |
| muted-tertiary | `#525252` | Subtle UI elements |
| canvas | `#FFFFFF` | Page background, card surfaces |
| surface | `#F4F4F4` | Subtle section alternation |
| surface-warm | `#F9F9FF` | Lavender-tinted section backgrounds |
| surface-rose | `#FFF3F2` | Pink-tinted feature sections |
| surface-cream | `#FFF9F5` | Amber-tinted warm sections |
| surface-lavender | `#F1EBFF` | Purple-tinted card backgrounds |
| surface-peach | `#FFEEED` | Coral-tinted soft backgrounds |
| accent-purple | `#966CEB` | Primary action buttons, labels, links |
| accent-purple-soft | `#ECE3FF` | Purple gradient stops, hover states |
| accent-coral | `#FF88BB` | Secondary accents, gradient endpoints |
| accent-coral-soft | `#FFDBEB` | Coral tint backgrounds |
| accent-amber | `#FFCB87` | Tertiary accents, warm highlights |
| accent-amber-soft | `#FFE5CC` | Amber tint backgrounds |
| action-primary | `#966CEB` | CTA buttons, primary links |
| action-secondary | `#FF88BB` | Alternative action emphasis |
| action-tertiary | `#FFCB87` | Warm accent actions |
| border | `#000000` | Hairline dividers, card outlines |
| border-light | `#A9A9A9` | Subtle separators |

The interface maintains a predominantly light mode with no dark variant visible. Color application follows a clear hierarchy: near-black ink for readability, muted grays for supporting text, and reserved accent purple for interactive elements. Warm surface tints appear as section backgrounds rather than component fills, creating atmospheric zones without cluttering the card-based content structure. Gradients typically run from white through soft lavender, coral, or amber tints, often as radial washes behind hero content.

## Typography

The type system is built on Inter with weights 400, 500, 600, and 700, supplemented by The Artisan for occasional editorial quotes. The supplied font families include Inter, Inter-Italic, and The Artisan. All sizes use tight negative letter-spacing for a contemporary, compact feel.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3rem | 600 | 1 | -0.05em | Page hero headlines |
| section-display | Inter | 2rem | 700 | 1.5 | -0.03em | Section titles, FAQ header |
| feature-title | Inter | 1.625rem | 600 | 1 | -0.05em | Card headings, feature names |
| body-large | Inter | 1.375rem | 500 | 1.6 | -0.04em | Lead paragraphs, descriptions |
| body | Inter | 1rem | 400 | 1.6 | -0.01em | Standard paragraphs |
| body-small | Inter | 0.875rem | 400 | 1.5 | -0.03em | Captions, metadata |
| label | Inter | 0.75rem | 400 | 1 | normal | UI labels, timestamps |
| quote | The Artisan | 1.75rem | 400 | 1.6 | -0.03em | Editorial quotes, testimonials |
| navigation | Inter | 0.875rem | 500 | 1.6 | -0.02em | Nav links, footer links |
| button | Inter | 1rem | 600 | 1.2 | normal | Button text |

Inter serves all functional typography with weights distributed logically: Regular (400) for body text, Medium (500) for emphasized descriptions and navigation, Semibold (600) for headlines and feature titles, and Bold (700) for section displays and strong emphasis. The Artisan appears at 28px for a single editorial voice, providing humanistic contrast to Inter's geometric precision. Inter-Italic is available in the font set for emphasized or editorial text treatments.

Letter-spacing is consistently negative across display sizes, reaching -0.05em for hero and feature titles. This tight tracking, combined with Inter's large x-height, creates dense, impactful headlines that feel contemporary and product-focused. Line heights stay compact at 1 for display text and 1.5–1.6 for body, maintaining vertical rhythm without excessive looseneness.

Verify licensing for these families before production use. The Artisan is attributed to Ef Studio Luthfi Fauzi.

## Layout

The page employs a centered, contained layout with generous horizontal padding and clear section demarcation through background tints rather than heavy dividers.

**Container behavior.** Content lives within a max-width container centered on the page. The navigation bar spans full width with internal padding. Hero and feature sections use asymmetric padding—often heavier top padding (250px equivalent at desktop) to accommodate gradient backgrounds that bleed from the top edge.

**Section rhythm.** Sections alternate between pure white and tinted surfaces (lavender, rose, cream). The transition between sections is handled through background color changes rather than visible separators, creating a continuous scroll experience with atmospheric variation.

**Grid structure.** The features section uses a 2×2 grid of equal-width cards with consistent gap spacing. Cards maintain internal padding of 24px with rounded corners. The FAQ section stacks full-width accordion items with uniform vertical spacing.

**Navigation.** A fixed or sticky navigation bar sits at the top with logo left, links center, and CTA button right. The nav uses a translucent or solid white background with subtle bottom border.

**Footer composition.** The footer centers device mockups showing multilingual app screens, followed by brand mark, tagline, email contact, and social icons in a horizontal row. Location metadata sits below with a small flag icon.

**Spacing scale.** The system uses a 2px base unit (0.125rem). Key spacing values include: 8px for tight component gaps, 16px for internal padding, 24px for card padding, 48px for section internal spacing, 56px for hero offsets, 64px for large content blocks, and 250px for dramatic top padding in hero sections.

## Visual language

The visual identity balances technical precision with playful warmth through three core elements: isometric illustration, soft atmospheric gradients, and a restrained accent palette.

**Isometric illustrations.** Feature sections and cards are anchored by detailed 3D renderings of app interfaces—floating cards, phone screens, and UI components shown at isometric angles. These illustrations use soft shadows, rounded corners, and pastel tints (lavender, coral, mint, amber) that echo the site's color system. The 3D quality adds tangible product presence without photographic heaviness.

**Gradient system.** Background gradients are predominantly radial, emanating from the upper portion of sections. They transition from pure white through soft tints—lavender (`#F1EBFF`), coral (`#FFEEED`), amber (`#FFF9F5`)—creating atmospheric glow rather than bold color blocks. Linear gradients appear occasionally for card backgrounds, running at oblique angles (107–119 degrees) with similar soft stops.

**Card surfaces.** Content cards use white backgrounds with 1px solid borders in light gray or near-black, combined with 12px border radius. This creates subtle elevation without shadows, keeping the interface flat and contemporary. Cards containing illustrations often have no visible border, letting the artwork define the edge.

**Accent application.** Purple (`#966CEB`) serves as the primary action color, appearing in buttons, links, and small labels. Coral (`#FF88BB`) and amber (`#FFCB87`) function as secondary accents, often in gradient combinations or as category indicators. These accents are used sparingly—typically as small labels, icon backgrounds, or gradient endpoints rather than large fills.

**Iconography and marks.** The brand mark uses a stylized bird or speech bubble form in gradient purple-to-coral. Social icons are simple line or filled variants in muted gray. UI controls (FAQ toggles) use plus/minus icons in circular containers with soft tint backgrounds.

## Components

### Feature card

**Anatomy.** A bordered container with rounded corners containing: an isometric illustration at top, a bold title below, and a muted description paragraph beneath the title.

**Surface.** White background (`#FFFFFF`) with 1px solid border in light gray or near-black. No visible shadow. Border radius of 12px.

**Typography.** Title uses `feature-title` token (Inter 600, 26px, tight tracking). Description uses `body` token (Inter 400, 15–16px, muted gray color).

**Shape.** 12px border radius. Consistent internal padding of 24px.

**Spacing.** Illustration sits flush or near-flush with card top edge. Title follows with 12–16px margin-top. Description maintains 12px margin from title.

**Composition.** Cards appear in 2×2 grid with equal gaps. Illustrations vary by feature but maintain consistent visual weight and isometric perspective.

**Variants.** Some cards show full-bleed illustrations that extend to card edges; others have contained illustrations with visible background. Labels above section titles use accent purple in small uppercase or sentence-case text.

### FAQ accordion

**Anatomy.** A stack of full-width items, each containing: a toggle icon (plus or minus) in a rounded square, a bold question text, and an expandable answer paragraph.

**Surface.** White background with 1px solid border. Toggle icon sits in a soft-tint rounded container (lavender or gray background).

**Typography.** Question uses Semibold weight at 16–18px in near-black. Answer uses Regular weight at 16px in muted gray, with comfortable line height for readability.

**Shape.** Items have 12px border radius. Toggle containers use smaller radius (4–8px) or full circles.

**Spacing.** Items stack with small gap (8–12px). Internal padding of 24px. Toggle icon positioned left with generous right margin before question text.

**States.** Collapsed state shows plus icon; expanded state shows minus icon with answer text revealed below. Only one item appears expanded at a time in the visible examples.

### Primary button

**Anatomy.** A rounded rectangular button containing centered text, occasionally with an icon.

**Surface.** Solid purple fill (`#966CEB`) with white text. No visible border. Hover state not captured in still images.

**Typography.** Inter 600 at 16px, normal letter-spacing, white color.

**Shape.** 10px border radius. Padding approximately 12px vertical, 32px horizontal.

**Composition.** Appears in navigation bar and hero sections. Nav variant may be more compact.

### Navigation bar

**Anatomy.** Horizontal bar containing: brand mark and wordmark left, text links center, CTA button right.

**Surface.** White or translucent background. Subtle bottom border possible.

**Typography.** Links use `navigation` token (Inter 500, 14–15px). Brand wordmark uses Semibold weight.

**Spacing.** Horizontal padding of 24px. Vertical padding minimal to maintain compact height. Links spaced with generous gap (24–32px).

### Footer

**Anatomy.** Section containing: row of device mockups showing app screens, brand mark with tagline, email contact with icon, social icon row, and location metadata.

**Surface.** White or very light tinted background. Device frames use realistic phone bezels with app screenshots inside.

**Typography.** Brand name uses Semibold. Tagline and contact use Regular in muted gray. Location text uses small size with flag emoji.

**Composition.** Devices centered horizontally, overlapping slightly to create depth. Brand elements left-aligned below. Social icons right-aligned or centered. Location centered at very bottom.

## Responsive behavior

The visible desktop layout suggests a single-column stacking for narrower viewports, though specific breakpoints are not captured. Implementation should consider:

- Hero headlines should scale down from 48px to 32px on tablet and 28px on mobile, maintaining tight tracking.
- The 2×2 feature grid should collapse to single column on mobile, with cards maintaining full width and internal proportions.
- FAQ accordion items should remain full-width with increased touch targets for toggle icons (minimum 44×44px).
- Device mockups in footer should reduce from five overlapping phones to a single centered device or horizontal scroll carousel.
- Navigation should collapse to hamburger menu on mobile, with CTA button potentially hidden or moved to menu.
- Section padding should reduce proportionally: 250px top padding in hero becomes 120px on tablet, 80px on mobile.
- Card padding should maintain 24px internally but reduce external gaps to 16px on mobile.

## Practical implementation guidance

### Preserve
- The tight negative letter-spacing on all display text; this is essential to the modern, engineered character.
- The isometric illustration style with soft pastel tints—replace with flat illustrations and the technical credibility diminishes.
- The restrained accent palette: purple for primary actions, coral and amber only as secondary highlights or gradient components.
- The generous top padding in hero sections that allows radial gradients to breathe.
- The 1px bordered card style with no shadow; this flat precision is central to the aesthetic.

### Avoid
- Heavy drop shadows on cards or buttons; the interface relies on borders and color contrast for definition.
- Saturated or harsh accent colors; the current palette is deliberately desaturated and warm.
- Loose letter-spacing or increased line height on headlines; this would break the compact, contemporary feel.
- Dark mode without careful adaptation; the warm tints and gradients are designed for light backgrounds.
- Multiple expanded FAQ items simultaneously; the pattern suggests single-expand behavior.

### Recommended build order
1. Establish the Inter type scale with exact tracking values, as typography defines the interface character.
2. Implement the color tokens, particularly the warm surface tints and gradient stops.
3. Build the card component with border, radius, and padding specifications.
4. Create the feature grid layout with placeholder illustrations.
5. Implement the FAQ accordion with toggle states.
6. Add the navigation and footer with device mockup composition.
7. Apply gradient backgrounds to hero and feature sections.
8. Introduce The Artisan for any editorial or quote elements.

### Accessibility
- Ensure the purple action color (`#966CEB`) meets WCAG 2.1 AA contrast against white (4.5:1 for text, 3:1 for UI components).
- The muted gray text (`#949494`) at 16px may fail contrast; consider darkening to `#757575` for body text or limiting to captions above 18px.
- FAQ toggle icons need visible focus states and keyboard operability.
- Isometric illustrations require descriptive alt text or aria-labels when they convey feature meaning.
- The tight letter-spacing on small sizes (12px labels) should not compromise legibility; consider normal tracking below 14px.

## Scope note

This guide covers the Phrasing.app marketing page surface including hero, features grid, FAQ accordion, and footer with device mockups. Pricing tables, authentication flows, in-app interfaces, mobile navigation behavior, animation specifications, and dark mode are not represented in the supplied material. Inter-Italic is available in the font set but not visibly deployed in the captured interface states.
