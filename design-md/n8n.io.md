# How n8n.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/n8n.io-design)

Last updated: 2026-08-10

## Captured pages

[![Careers hero with dark gradient background, orange accent label, and team photo card with rounded corners](https://pin.fontofweb.com/4022?format=jpg)](https://design.withfudge.com/share/pin-4022)

[Careers hero with dark gradient background, orange accent label, and team photo card with rounded corners](https://design.withfudge.com/share/pin-4022)

[![Testimonial carousel with dark translucent cards, gradient background, and avatar-name attribution rows](https://pin.fontofweb.com/4021?format=jpg)](https://design.withfudge.com/share/pin-4021)

[Testimonial carousel with dark translucent cards, gradient background, and avatar-name attribution rows](https://design.withfudge.com/share/pin-4021)

[![Feature section with dark navy background, lightning bolt icon in circular glow, and checkmark list items](https://pin.fontofweb.com/4020?format=jpg)](https://design.withfudge.com/share/pin-4020)

[Feature section with dark navy background, lightning bolt icon in circular glow, and checkmark list items](https://design.withfudge.com/share/pin-4020)

[![Split-screen feature with warm off-white background, code editor visualization, and angled device frame](https://pin.fontofweb.com/4019?format=jpg)](https://design.withfudge.com/share/pin-4019)

[Split-screen feature with warm off-white background, code editor visualization, and angled device frame](https://design.withfudge.com/share/pin-4019)

## Overview

The n8n design system presents a developer-focused automation platform through a dramatic dark-mode-first aesthetic that alternates with warm, approachable off-white sections. The visual language balances technical credibility with human warmth: deep navy-black backgrounds evoke terminal environments and code editors, while electric orange accents signal energy and action. Geomanist, a geometric sans-serif with subtle humanist touches, serves as the sole type family across all weights, reinforcing the brand's unified voice. The system employs generous rounded corners on cards and images, translucent glassmorphism for testimonial surfaces, and a restrained accent palette of orange, cyan, and purple that appears in functional moments rather than decorative excess. Component patterns favor clarity over ornament—checkmark lists, attributed quotes, and split-screen feature layouts guide users through complex product narratives without visual fatigue.

## Colors

The color architecture operates in two distinct modes: a dominant dark theme for product immersion and a warm light theme for editorial breathing room. Both modes share the same accent vocabulary.

| token | value | use |
|---|---|---|
| canvas-dark | `#0a0a0f` | Primary page background, hero sections, feature deep-dives |
| canvas-warm | `#f5f0e8` | Alternating editorial sections, code-feature backgrounds |
| surface-elevated | `#14141b` | Card backgrounds on dark canvas, elevated panels |
| surface-glass | `#1a1a24` | Testimonial carousel cards with backdrop blur |
| ink-primary | `#ffffff` | Headlines, primary body text on dark backgrounds |
| ink-secondary | `#a0a0b0` | Supporting text, captions, metadata on dark backgrounds |
| ink-dark | `#1a1a1a` | Headlines and body text on warm light backgrounds |
| action-orange | `#ff6d2e` | Primary buttons, accent labels, CTAs, energetic highlights |
| action-orange-hover | `#ff8552` | Button hover states, interactive orange feedback |
| accent-cyan | `#00d4aa` | Success indicators, secondary interactive highlights |
| accent-purple | `#7c5cff` | Tertiary accents, gradient endpoints, icon glows |
| border-subtle | `#2a2a35` | Card borders on dark backgrounds, dividers |
| border-warm | `#e8e3db` | Subtle borders on warm backgrounds |

The dark canvas dominates the product experience, creating continuity with developer tools and reducing eye strain for technical audiences. The warm off-white canvas appears strategically to break rhythm and signal editorial or explanatory content. Orange functions as the singular call-to-action color, ensuring that every interactive moment carries consistent energy. Cyan and purple remain reserved for functional differentiation—checkmark icons, gradient accents on illustrative elements, and subtle glow effects—preventing the palette from fragmenting into decorative noise.

## Typography

The type system relies entirely on Geomanist, a geometric sans-serif family available in Light, Regular, and Book weights. The family carries a technical precision suited to developer audiences while maintaining enough warmth for marketing narratives. The source files identify an additional family label, "By Atipo-1498499749804639123", which corresponds to the Geomanist Regular weight served from the n8n domain. Verify licensing for these families before production use. Atipo designed the Geomanist Regular weight.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Geomanist | 3.5rem | 400 | 1.05 | -0.02em | Homepage hero headlines, major section titles |
| section-display | Geomanist | 2.5rem | 400 | 1.1 | -0.01em | Section headers, feature introductions |
| body-large | Geomanist | 1.25rem | 400 | 1.5 | 0 | Lead paragraphs, introductory descriptions |
| body | Geomanist | 1rem | 400 | 1.6 | 0 | Standard paragraphs, list items, card descriptions |
| label | Geomanist | 0.875rem | 500 | 1.4 | 0.01em | Buttons, tags, category labels, navigation items |
| navigation | Geomanist | 0.875rem | 400 | 1 | 0 | Top-bar navigation, footer links |

The hierarchy depends on size contrast and weight rather than multiple families. Tight negative tracking on display sizes creates a compact, confident presence appropriate for technical product messaging. The 1.6 line height on body text ensures readability in longer feature descriptions without looseness. Labels and navigation share the same size but diverge in weight, creating a subtle distinction between interactive and wayfinding elements.

## Layout

The layout system employs a centered content column with generous section padding, alternating background modes to create visual rhythm, and asymmetric two-column compositions for feature storytelling.

**Grid and containment.** Content lives within a max-width container centered on the viewport, with consistent horizontal padding that scales with viewport width. Sections stack vertically with no visible borders between them, relying on background color changes to demarcate territory.

**Section rhythm.** Dark and warm backgrounds alternate in long vertical sequences, typically with 6rem vertical padding per section. This creates a breathing pattern that prevents dark-mode fatigue while maintaining product immersion.

**Two-column feature layouts.** Product capabilities frequently present as split compositions: text content on the left with headlines, descriptions, and checkmark lists; visual demonstrations on the right with screenshots, code visualizations, or illustrative icons. The text column maintains a readable measure, while the visual column may bleed toward the viewport edge or contain rounded-corner framed images.

**Card grids.** Value propositions and testimonials organize into horizontal rows of equal-width cards with consistent internal padding. On the careers page, two large cards sit side by side with rounded images above text blocks. In the testimonial section, three cards appear in a carousel or grid with glassmorphism surfaces.

**Spacing scale.** The base unit is 0.25rem, with semantic steps at 1.5rem for content gaps, 2rem for card internal padding, and 6rem for section vertical breathing room. Component internal spacing uses multiples of the base unit to maintain alignment across the system.

## Visual language

The visual language communicates technical sophistication through restrained effects and purposeful illustration style.

**Background treatments.** Dark sections frequently employ subtle gradient shifts and soft glow effects rather than flat color. The careers hero shows a warm orange-to-purple gradient wash behind the content, while testimonial cards float against a deeper gradient with scattered particle-like accents. These effects suggest depth without competing with content.

**Glassmorphism.** Testimonial cards use translucent dark surfaces with backdrop blur, allowing the gradient background to show through while maintaining text legibility. This treatment signals premium quality and modern interface craft.

**Iconography and illustration.** Product illustrations favor neon-cyan line art against dark backgrounds—circuit patterns, architectural diagrams, and abstract workflow visuals. The "Run. Tweak. Repeat" section centers a lightning bolt icon within concentric circular glows, creating a focal point that reads as both technical and energetic. Photography, when used, receives rounded-corner treatment and sits within elevated cards.

**Code visualization.** The split-screen code feature presents actual syntax-highlighted code within an angled device frame, reinforcing the product's developer credibility. The frame uses a subtle shadow and rounded corners to separate from the warm background.

**Checkmark patterns.** Feature lists use simple checkmark icons rather than numbered steps or bullets, emphasizing completion and capability over process.

## Components

**Primary button**

- Anatomy: Text label centered within a solid filled container
- Surface and text color: `{colors.action-orange}` background with `{colors.ink-primary}` text
- Typography: `{typography.label}` at 500 weight
- Shape: `{rounded.button}` border radius
- Spacing: 0.75rem vertical padding, 1.5rem horizontal padding
- Composition: Inline-flex, often appearing below descriptive text with 1.5rem top margin
- Variants: Hover state shifts to `{colors.action-orange-hover}`; no visible disabled state in supplied images

**Feature card (value proposition)**

- Anatomy: Rounded-corner container with internal image area and text block below
- Surface: `{colors.surface-elevated}` background with `{colors.border-subtle}` 1px border
- Typography: Section title in `{typography.section-display}` at reduced size, body description in `{typography.body}`
- Shape: `{rounded.card}` outer radius, image area uses `{rounded.image}` for internal media
- Spacing: `{spacing.card-padding}` internal padding, image-to-text gap of 1.5rem
- Composition: Vertical stack with image top-aligned, text left-aligned below

**Testimonial card**

- Anatomy: Quote text block above avatar-name attribution row
- Surface: `{colors.surface-glass}` with backdrop blur for translucency
- Typography: Quote in `{typography.body-large}` with selective bold phrases, attribution name in `{typography.label}` weight 500, handle in `{typography.body}` at `{colors.ink-secondary}`
- Shape: `{rounded.card}` border radius
- Spacing: `{spacing.card-padding}` internal padding
- Composition: Horizontal row of three cards with equal width and consistent gap

**Split-screen feature**

- Anatomy: Left text column with headline, description, and icon-list; right visual column with framed screenshot or illustration
- Surface: `{colors.canvas-warm}` background for the section
- Typography: Headline in `{typography.hero-display}` at reduced scale, list items in `{typography.body}` with bold lead phrases
- Shape: Visual frame uses `{rounded.card}` with subtle shadow
- Composition: Asymmetric two-column with text column narrower than visual column; vertical centering of content

**Navigation bar**

- Anatomy: Logo left, link cluster center-right, CTA button far right
- Surface: Transparent over dark backgrounds, likely with blur or solid treatment on scroll
- Typography: Links in `{typography.navigation}`
- Composition: Horizontal flex with space-between alignment

## Responsive behavior

The two-column feature layouts should stack vertically on narrower viewports, with the visual column preceding the text column when the image carries primary narrative weight. Testimonial cards should scroll horizontally as a swipeable carousel on mobile rather than compressing to unreadable widths. The primary button maintains its padding and border radius across breakpoints, with text size scaling down to `{typography.label}` minimum. Section vertical padding should reduce from 6rem to 4rem on tablet and 3rem on mobile to maintain proportional breathing room. The dark-warm background alternation should persist across all breakpoints as the primary rhythm device.

## Practical implementation guidance

**Preserve**
- The strict dark-mode-first hierarchy with warm sections as deliberate contrast
- Geomanist as the sole type family across all weights and sizes
- Electric orange as the exclusive CTA color to maintain action clarity
- Generous border radii on cards and images to soften the technical aesthetic
- Glassmorphism on testimonial surfaces with actual backdrop-filter blur

**Avoid**
- Introducing additional accent colors beyond orange, cyan, and purple
- Flat dark backgrounds without subtle gradient or glow depth
- Sharp-cornered cards or buttons that contradict the system's rounded warmth
- Multiple type families that fragment the unified technical voice
- Decorative illustrations that depart from the neon-line-art or photography-with-glow treatment

**Recommended build order**
1. Establish the dark canvas and warm canvas as root background tokens
2. Implement Geomanist at all six type sizes with correct weights and tracking
3. Build the primary button with orange fill and hover state
4. Create the feature card component with elevated surface and border
5. Construct the split-screen layout pattern for product storytelling
6. Add the testimonial card with glassmorphism and backdrop blur
7. Implement the two-column grid with responsive stacking behavior

**Accessibility**
- Ensure orange buttons on dark backgrounds meet minimum contrast ratios; the `#ff6d2e` against `#0a0a0f` should be verified for WCAG AA compliance
- Provide focus indicators that complement the rounded button shapes, such as offset rings in `{colors.accent-cyan}`
- Maintain text contrast on glassmorphism cards by keeping background blur substantial and avoiding busy imagery behind testimonial text
- Respect reduced-motion preferences for any gradient or particle background animations

## Scope note

This guide covers the marketing site surfaces visible in the supplied homepage and careers page images, including hero sections, feature layouts, testimonial displays, and value proposition cards. Pricing tables, documentation interfaces, the actual workflow editor, mobile navigation patterns, and interactive states such as loading, error, or form validation are not represented in the available material. Measurements are practical adaptation targets derived from visible proportions in the supplied images.
