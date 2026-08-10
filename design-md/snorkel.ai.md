# How snorkel.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/snorkel.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Modal dialog with three-column service selection on dark hero background showing gradient text treatment](https://pin.fontofweb.com/9591?format=jpg)](https://design.withfudge.com/share/pin-9591)

[Modal dialog with three-column service selection on dark hero background showing gradient text treatment](https://design.withfudge.com/share/pin-9591)

[![Hero section with cream background, gradient headline, and three dark feature cards with abstract line art](https://pin.fontofweb.com/9590?format=jpg)](https://design.withfudge.com/share/pin-9590)

[Hero section with cream background, gradient headline, and three dark feature cards with abstract line art](https://design.withfudge.com/share/pin-9590)

[![Dark research section with grid of collaboration cards featuring category pills and descriptive text](https://pin.fontofweb.com/9589?format=jpg)](https://design.withfudge.com/share/pin-9589)

[Dark research section with grid of collaboration cards featuring category pills and descriptive text](https://design.withfudge.com/share/pin-9589)

[![Autonomy Horizon diagram with 3D wireframe visualization and centered Stanford origin story on dark navy](https://pin.fontofweb.com/9588?format=jpg)](https://design.withfudge.com/share/pin-9588)

[Autonomy Horizon diagram with 3D wireframe visualization and centered Stanford origin story on dark navy](https://design.withfudge.com/share/pin-9588)

## Overview

Snorkel AI presents a dual-surface visual system that alternates between warm cream and deep navy, creating distinct moods for commercial narrative and technical depth. The interface balances enterprise credibility with research-lab precision through restrained typography, abstract generative imagery, and a carefully limited palette. Geist serves as the primary typeface across all weights, delivering a contemporary sans-serif voice with excellent legibility at both display and body sizes. Geist Mono appears exclusively for uppercase category labels and metadata, establishing a clean technical accent without overwhelming the humanist tone of the primary family.

The design organizes content in generous vertical sections with substantial breathing room. Hero areas employ gradient text treatments that shift from ink to violet, signaling innovation without decorative excess. Dark sections use near-black navy backgrounds with subtle periwinkle line art, creating immersive technical environments. The overall impression is of a company that operates at the intersection of rigorous research and practical implementation—precise but not cold, ambitious but not flashy.

## Colors

The color system operates on a light-dark axis with a small set of functional accents. Light surfaces use warm off-white and cream tones; dark surfaces use deep navy and midnight blues. A single violet gradient provides the primary brand accent.

| token | hex | use |
|---|---|---|
| ink | #000000 | Primary text on light surfaces; header border |
| deep-navy | #0E1725 | Dark section backgrounds; card surfaces |
| midnight | #111C2D | Primary dark background; button fills; modal backdrop |
| indigo | #14194D | Deep accent; gradient endpoint |
| violet | #5E5AD1 | Gradient mid-tone; interactive accent |
| periwinkle | #A0AFEE | Line art illustrations; subtle highlights on dark |
| stone | #F1EFE9 | Modal background; elevated surfaces |
| cream | #F5F3EF | Primary page background; hero sections |
| white | #FFFFFF | Pure background; high-contrast text on dark |

Light mode dominates the marketing narrative, with cream (#F5F3EF) as the default canvas and stone (#F1EFE9) for elevated cards and modal dialogs. Dark mode serves technical and research content, with midnight (#111C2D) and deep-navy (#0E1725) creating immersive reading environments. The violet-to-indigo gradient appears in hero headlines and select interactive states, providing the single saturated moment in an otherwise muted palette. Periwinkle (#A0AFEE) functions exclusively as an illustrative accent for abstract line art and wireframe graphics, never as a UI element color.

## Typography

The typographic system relies on Geist across all weights, with Geist Mono reserved for technical labels. Applesystem appears in the source as a system font fallback at 14px, though the visible interface renders Geist for all text. The hierarchy uses weight and size contrast rather than multiple families, creating a cohesive voice.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Geist | 4.5rem | 300 | 1.05 | -0.02em | Hero headlines; major section titles |
| section-display | Geist | 3rem | 300 | 1.06 | -0.02em | Section headings; card titles |
| body-large | Geist | 1.25rem | 400 | 1.6 | normal | Lead paragraphs; descriptive text |
| body | Geist | 0.875rem | 400 | 1.7 | normal | Default paragraph; UI copy |
| label | Geist Mono | 0.75rem | 500 | 1.33 | 0.2em | Category tags; section metadata |
| navigation | Geist | 1rem | 400 | 1.7 | normal | Header links; menu items |
| button | Geist | 0.875rem | 500 | 1.7 | normal | Button labels; CTAs |

Display sizes use light weight (300) with tight negative tracking for an airy, confident presence. The hero-display token at 4.5rem supports the site's most prominent message moments. Body text maintains generous line height at 1.7 for comfortable reading of technical content. Labels set in Geist Mono at 0.75rem with expanded tracking and uppercase transformation create clear category hierarchies without competing with display text.

Geist was designed by Basementstudio, Andrés Briganti, and Mateo Zaragoza; distributed by Basementstudio, Vercel, Andrés Briganti, Guido Ferreyra, and Mateo Zaragoza. Geist Mono shares the same attribution. Verify licensing for these families before production use.

## Layout

The layout follows a centered content model with generous margins and substantial vertical rhythm. Sections stack with clear background color transitions, creating distinct thematic zones.

Content containers use horizontal margins of approximately 13.28rem (212.5px at reference) on desktop, producing a narrow, focused reading width. Hero sections receive additional top padding at 15.5rem (248px) to clear the fixed header, with 10rem (160px) bottom padding. Standard content sections maintain 10rem vertical padding. A negative top margin of -5.125rem (-82px) on main content areas creates intentional overlap with preceding sections, producing layered depth.

The header remains fixed with a subtle bottom border in ink at 1px, using flex distribution between logo, navigation, and primary action. Navigation links space at 2rem intervals. The footer expands to wider padding at 5rem (80px) horizontal, accommodating multi-column link groups.

Grid systems vary by content type: hero cards use three-column equal distribution with 1px dividing borders; research collaborations use two-column grids with 1rem gaps; feature cards employ asymmetric ratios with dominant imagery. All grids maintain consistent internal padding of 2.5rem (40px) for card content.

## Visual language

The visual identity centers on abstract generative imagery—wireframe landscapes, contour lines, and dot-matrix gradients rendered in periwinkle on dark navy. These illustrations suggest data topology, neural networks, and mathematical surfaces without literal representation.

Photography is absent; the entire image system is vector-based and algorithmic in appearance. Line art uses consistent stroke weights and dot densities, creating a family of related visual textures. The three hero cards demonstrate this range: halftone dots, concentric contour lines, and 3D wireframe meshes, all sharing the same periwinkle-on-navy treatment.

Gradient text appears selectively, transitioning from ink through violet to indigo. This treatment applies only to key phrases within headlines, never to body text or UI elements. The gradient creates a subtle shimmer that draws attention without animation.

Shadows are minimal and functional: inset 1px borders in midnight or cream define card edges and button states. No drop shadows appear in the system; depth derives from color contrast and section overlap rather than elevation effects.

## Components

### Header

- **Anatomy**: Fixed top bar with logo left, navigation center, primary CTA right
- **Surface**: `{colors.cream}` background with 1px solid `{colors.ink}` bottom border
- **Typography**: Navigation links use `{typography.navigation}` in ink
- **Shape**: Full-width, height approximately 3.5rem; `{rounded.card}` not applicable
- **Spacing**: Logo and navigation separated by auto margins; CTA button with 1.5rem left margin
- **Composition**: Flex row, align center; z-index above all content

### Primary button

- **Anatomy**: Text label with optional icon; contained or text-only variants
- **Surface**: `{colors.cream}` fill with 1px `{colors.ink}` stroke for bordered variant; `{colors.midnight}` fill with `{colors.white}` text for filled variant
- **Typography**: `{typography.button}` in ink or white depending on variant
- **Shape**: `{rounded.pill}` for contained variants
- **Spacing**: Internal padding 0.875rem 1.5rem; gap 0.625rem for icon
- **Variants**: Bordered cream; filled midnight; text-only transparent

### Modal dialog

- **Anatomy**: Centered overlay with close control, headline, and multi-column content
- **Surface**: `{colors.stone}` background; midnight backdrop at high opacity
- **Typography**: Section label in `{typography.label}`; headline in `{typography.section-display}` with gradient accent
- **Shape**: `{rounded.card}` corners; generous internal padding
- **Spacing**: 2.5rem internal padding; three-column grid with 1px column borders
- **Composition**: Centered vertically and horizontally; dismissible via close button

### Feature card

- **Anatomy**: Full-bleed abstract imagery with bottom-aligned text overlay
- **Surface**: `{colors.deep-navy}` background; periwinkle line art
- **Typography**: Card title in `{typography.section-display}` at reduced size; description in `{typography.body}` in white
- **Shape**: `{rounded.card}`; no border
- **Spacing**: 2.5rem internal padding; text positioned at bottom with safe margins
- **Composition**: Aspect ratio approximately 16:9; image fills container; text overlay with subtle gradient scrim

### Research card

- **Anatomy**: Category pill, title, and description in bordered container
- **Surface**: Transparent background; 1px border in `{colors.midnight}`
- **Typography**: Category in `{typography.label}`; title in `{typography.section-display}` at 2rem; description in `{typography.body}`
- **Shape**: `{rounded.card}`
- **Spacing**: 2.5rem padding; 1rem gap between elements
- **Composition**: Stacked vertical; full width within grid cell

### Category pill

- **Anatomy**: Text label with optional status indicator ("New")
- **Surface**: Transparent with 1px border in current text color; filled variant for status
- **Typography**: `{typography.label}` in current color
- **Shape**: `{rounded.pill}`
- **Spacing**: Horizontal padding 0.75rem; vertical padding 0.25rem

## Responsive behavior

The design targets desktop as the primary experience, with content margins and multi-column grids as the defining layout characteristics. At narrower viewports, the three-column modal grid should stack to single column, removing internal borders. Research collaboration grids should transition from two columns to single column. Hero card groups should stack vertically, maintaining aspect ratio but losing side-by-side comparison.

Navigation collapses to a menu trigger below approximately 64rem viewport width. The fixed header remains fixed across all sizes, with reduced horizontal padding on small screens.

Typography scales down proportionally: hero-display should reduce to 3rem on tablet and 2.5rem on mobile. Section-display reduces to 2rem and 1.75rem respectively. Body and label sizes remain constant to preserve readability.

## Practical implementation guidance

### Preserve
- The cream-to-navy section alternation; this rhythm defines the brand experience
- Generous vertical padding (10rem) between thematic sections
- Light weight display typography with negative tracking for headlines
- Geist Mono exclusively for uppercase labels with expanded tracking
- Abstract line art in periwinkle on dark backgrounds
- Gradient text limited to single phrases within headlines

### Avoid
- Adding saturated colors beyond the violet-indigo gradient
- Using drop shadows for elevation; rely on color contrast and overlap
- Mixing additional font families beyond Geist and Geist Mono
- Reducing line height below 1.6 for body text
- Using periwinkle as a text or UI color on light backgrounds

### Recommended build order
1. Establish color tokens and body typography with cream background
2. Implement fixed header with navigation and primary CTA
3. Build hero section with gradient headline and abstract imagery
4. Create modal system for service selection
5. Implement dark section variants with research card grids
6. Add footer with expanded horizontal padding
7. Refine responsive stacking and typography scaling

### Accessibility
- Ensure gradient text meets contrast requirements; provide solid-color fallback for reduced-motion preferences
- Maintain 4.5:1 contrast for body text on both cream and dark-navy backgrounds
- Use aria-labels for icon-only buttons in header and modal close
- Implement focus-visible states with 2px outline in violet
- Respect prefers-reduced-motion for any scroll-triggered animations

## Scope note

This guide covers the Snorkel AI homepage including hero, service modal, research collaborations, and origin story sections. Interior pages, documentation, product interfaces, and mobile-specific layouts are not represented. Motion behavior, hover states, and form validation patterns were not captured in the supplied materials.
