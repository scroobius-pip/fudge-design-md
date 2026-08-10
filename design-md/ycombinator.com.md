# How ycombinator.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ycombinator.com-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with large serif typography and company photo comparison slider showing Stripe founders during YC and now](https://pin.fontofweb.com/6679?format=jpg)](https://design.withfudge.com/share/pin-6679)

[Homepage hero with large serif typography and company photo comparison slider showing Stripe founders during YC and now](https://design.withfudge.com/share/pin-6679)

[![Editorial section with drop-cap paragraph, photo strip of founders, and testimonial quotes with inline avatars](https://pin.fontofweb.com/6678?format=jpg)](https://design.withfudge.com/share/pin-6678)

[Editorial section with drop-cap paragraph, photo strip of founders, and testimonial quotes with inline avatars](https://design.withfudge.com/share/pin-6678)

[![Knowledge & News section with podcast cards, featured article thumbnail, and sidebar navigation links](https://pin.fontofweb.com/6677?format=jpg)](https://design.withfudge.com/share/pin-6677)

[Knowledge & News section with podcast cards, featured article thumbnail, and sidebar navigation links](https://design.withfudge.com/share/pin-6677)

[![Job posting page with company header, role details card, founder profiles, and similar jobs sidebar](https://pin.fontofweb.com/10032?format=jpg)](https://design.withfudge.com/share/pin-10032)

[Job posting page with company header, role details card, founder profiles, and similar jobs sidebar](https://design.withfudge.com/share/pin-10032)

## Overview

Y Combinator's visual system balances institutional credibility with startup energy through a deliberate typographic tension. The interface rests on a warm cream canvas that avoids sterile white, creating an approachable editorial atmosphere. Navigation and functional labels use a thin-weight geometric sans-serif, while headlines and body copy deploy an elegant serif with dramatic scale contrasts. The homepage alternates between immersive dark sections and light editorial passages, using photography as a bridge between the two modes. Job postings and internal pages maintain this same warmth while introducing structured card-based layouts for practical information. The overall impression is of a refined publication that happens to fund companies—authoritative but never corporate, with orange accents that punctuate rather than dominate.

## Colors

The palette is built around warmth and contrast, with a cream foundation that distinguishes the site from generic white-background platforms.

| token | value | use |
|---|---|---|
| canvas | #F5F5EE | Page background, primary surface |
| surface | #FFFFFF | Cards, elevated panels, button fills |
| ink | #16140F | Primary text, dark section backgrounds |
| muted-ink | #364153 | Secondary text, navigation links |
| subtle-ink | #6A7282 | Tertiary text, captions, metadata |
| border | #D1D5DC | Card borders, dividers |
| border-light | #E5E7EB | Subtle separators, hairline rules |
| action | #FB651E | Primary buttons, active states, YC logo mark |
| dark-surface | #000000 | Footer background, immersive sections |
| dark-ink | #FDFDF8 | Text on dark backgrounds |

The cream canvas (#F5F5EE) appears consistently across pages, creating continuity between the marketing homepage and functional job listings. Dark sections use pure black with warm off-white text, producing high contrast without the harshness of pure white. The orange action color appears sparingly—primarily in the YC logo mark and primary call-to-action buttons—preserving its impact. Border colors are cool grays that recede visually, keeping focus on content and photography.

## Typography

The system pairs three distinct families: Outfit for interface elements, Source Serif 4 for editorial content, and Applesystem as a system fallback. Source Serif 4-Italic is supplied as a separate file for italic display treatments. This creates clear hierarchy through family contrast rather than weight alone.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Source Serif 4 | 5.25rem | 400 | 1.1 | -0.02em | Homepage hero headlines |
| section-display | Source Serif 4 | 3rem | 400 | 1.1 | normal | Section headings, large quotes |
| body-serif | Source Serif 4 | 1.2rem | 400 | 1.7 | normal | Long-form paragraphs, editorial body |
| body-sans | Outfit | 1rem | 200 | 1.5 | normal | UI text, descriptions, job details |
| label | Outfit | 0.875rem | 300 | 1.3 | 0.05em | Tags, categories, uppercase labels |
| navigation | Outfit | 0.875rem | 400 | 1.25 | 0.025em | Nav links, breadcrumbs |
| caption | Outfit | 0.75rem | 200 | 1.33 | normal | Small metadata, timestamps |

Source Serif 4 appears in Regular and Italic styles, with Source Serif 4-Italic used for display headlines and pull quotes to introduce rhythmic variation. Outfit serves at Thin (200), Light (300), Regular (400), and Medium (500) weights, with the thin weight carrying most body text for an airy, contemporary feel. Applesystem appears as a fallback family at 14px in limited UI contexts. The hero display size of 84px (5.25rem) appears on the homepage with tight leading, while interior pages scale down to 60px (3.75rem) or 48px (3rem) for section headers.

Outfit is designed by Rodrigo Fuenzalida and published by Frag Type. Source Serif 4 and Source Serif 4-Italic credits are not specified in available records. Applesystem credits are not specified in available records. Verify licensing for these families before production use.

## Layout

The layout system centers content with generous margins, using a narrow measure for readability and wider configurations for media-rich sections.

Content containers center with horizontal margins that adapt to viewport width—ranging from approximately 132px to 470px on either side depending on section purpose. The job posting page uses a two-column asymmetrical layout: the main content column holds the role description and application flow, while a narrower sidebar presents company metadata, founder profiles, and similar opportunities. This sidebar maintains visual connection through shared card styling and consistent internal spacing.

Vertical rhythm follows a base of 24px (1.5rem) for comfortable reading, with section breaks at 64px (4rem) and 96px (6rem) to create breathing room between content types. The homepage alternates between full-bleed dark sections and contained light passages, with photography strips breaking the narrow text measure to restore visual energy.

Grid gaps of 32px (2rem) separate major content blocks, while tighter 16px (1rem) and 8px (0.5rem) gaps organize related items within cards and lists. Navigation links carry 32px to 40px gaps between items, with dropdown triggers indicated by chevron icons.

## Visual language

Photography treatment is documentary and candid—founders in natural settings, team gatherings, and workspace moments rather than staged corporate portraits. Images receive subtle rounded corners (8px/0.5rem) that soften their presence without becoming decorative. The company comparison slider on the homepage pairs historical and contemporary photos with minimal captions, letting the visual transformation tell the story.

Decorative typography includes drop caps in editorial sections, where a massive serif capital anchors the opening paragraph. Inline avatars appear within testimonial quotes, creating a conversational texture that breaks the formal column. The YC logo mark—an orange square with white "Y"—serves as a persistent navigational anchor, its geometric simplicity contrasting with the organic serif headlines.

Shadows are minimal and functional: a subtle 1px 3px rgba(0,0,0,0.1) elevation appears on card hover states and dropdown panels, never competing with content. Borders are consistently 1px solid rules in cool gray, used to define card perimeters and separate list items without visual weight.

## Components

### Navigation bar

- **Anatomy**: Logo mark left, primary links center, utility links right ("Log in", "Apply" button)
- **Surface**: Transparent over cream canvas, or dark over immersive sections
- **Typography**: `{typography.navigation}` for links, with active states in `{colors.ink}`
- **Spacing**: 12px vertical padding, 20px horizontal; link gaps of 32-40px
- **Shape**: No border radius on container; "Apply" button uses `{rounded.button}`

### Hero display

- **Anatomy**: Large serif headline, optional italic variation, supporting paragraph, call-to-action
- **Surface**: Full-bleed dark (`{colors.dark-surface}`) or contained light (`{colors.canvas}`)
- **Typography**: `{typography.hero-display}` in Source Serif 4, with italic alternates for emphasis
- **Spacing**: 22px vertical padding on CTA button; generous margin above and below text block
- **Composition**: Centered or left-aligned depending on section; narrow measure for readability

### Content card

- **Anatomy**: White panel with optional header image, title, description, metadata row
- **Surface**: `{colors.surface}` with `{colors.border}` 1px solid border
- **Shape**: `{rounded.card}` (8px/0.5rem) corners
- **Spacing**: 24px internal padding; 20px margin below in stacks
- **Variants**: Job role cards include salary/location metadata; founder cards include avatar and social links

### Company profile sidebar

- **Anatomy**: Stacked cards for company info, founder profiles, similar opportunities
- **Surface**: `{colors.surface}` with subtle border
- **Typography**: `{typography.body-sans}` for data, `{typography.label}` for section headers
- **Spacing**: 24px padding internal; 16px gaps between cards
- **Composition**: Right-aligned on desktop, full-width on narrow viewports

### Primary button

- **Surface**: `{colors.action}` background, `{colors.surface}` text
- **Typography**: `{typography.label}` with uppercase treatment
- **Shape**: `{rounded.button}` (6px/0.375rem) corners
- **Spacing**: 8px vertical, 24px horizontal padding
- **States**: Default orange; hover should darken for visual feedback

### Testimonial block

- **Anatomy**: Pull quote in italic serif, inline circular avatars, attribution line
- **Typography**: `{typography.section-display}` or `{typography.body-serif}` at larger scale
- **Spacing**: 32px top margin, 12px between quote and attribution
- **Visual treatment**: Avatars at 24-32px diameter, slightly overlapping quote text

### Footer

- **Anatomy**: Dark full-width band with link columns, copyright, social links
- **Surface**: `{colors.dark-surface}` background, `{colors.dark-ink}` text
- **Typography**: `{typography.body-sans}` for links, `{typography.caption}` for legal copy
- **Spacing**: 64px vertical padding, 24px horizontal; 96px left margin for link columns
- **Border**: 1px top border in warm gray separating from content

## Responsive behavior

The narrow text measure (approximately 640px effective width) suggests a mobile-first approach where content remains readable without excessive reflow. Navigation collapses to a hamburger menu or simplified link set on narrow viewports, though the exact breakpoint is not visible in supplied images. The two-column job posting layout should stack vertically on mobile, with the sidebar moving below the main content. Hero typography scales down proportionally—84px display type may reduce to 48px or 36px on smaller screens to maintain line integrity. Photo strips should scroll horizontally or stack vertically rather than compressing to illegibility.

## Practical implementation guidance

### Preserve
- The cream canvas as the default page background; pure white only for elevated cards
- The Outfit/Source Serif 4 pairing; do not substitute a single family for both roles
- Thin-weight Outfit (200) for body text; the airy quality is distinctive
- Italic Source Serif 4 for display headlines and pull quotes
- Minimal shadow treatment; rely on borders and spacing for separation
- Documentary photography style with rounded corners

### Avoid
- Heavy drop shadows or gradient backgrounds that compete with photography
- Pure black text on pure white backgrounds; the warm ink and canvas are intentional
- Bold sans-serif headlines; the serif carries display weight
- Decorative borders or ornamental rules beyond the 1px functional style
- Centered body text; maintain left alignment for readability

### Recommended build order
1. Establish cream canvas and load both font families with appropriate weights
2. Implement navigation with transparent/dark variants
3. Build hero section with responsive serif scaling
4. Create card component with border and padding system
5. Implement two-column layout for job postings
6. Add dark footer with warm off-white text
7. Refine spacing scale and vertical rhythm across sections

### Accessibility
- Ensure 4.5:1 contrast for body text; the muted-ink on canvas combination may need verification
- Provide focus indicators for navigation links and buttons
- Maintain keyboard accessibility for company comparison slider
- Use semantic heading hierarchy despite visual styling variations
- Consider reduced-motion preferences for any scroll-triggered animations

## Scope note

This guide covers the Y Combinator homepage and job posting pages as visible in supplied images. Mobile breakpoints, dropdown menu behavior, form interactions, and animation details are not included. The company comparison slider's full interaction pattern and any carousel or tab components beyond the visible states are not documented. Measurements reflect the extracted interface values where available.
