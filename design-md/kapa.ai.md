# How kapa.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/kapa.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Dark-themed enterprise trust section with customer metrics cards, testimonial quotes, and brand logo bar showing OpenAI, Grafana, Nokia, and others.](https://pin.fontofweb.com/9502?format=jpg)](https://design.withfudge.com/share/pin-9502)

[Dark-themed enterprise trust section with customer metrics cards, testimonial quotes, and brand logo bar showing OpenAI, Grafana, Nokia, and others.](https://design.withfudge.com/share/pin-9502)

[![Light-themed feature showcase with product capability cards, code snippet previews, and gradient accent backgrounds in purple and blue tones.](https://pin.fontofweb.com/9501?format=jpg)](https://design.withfudge.com/share/pin-9501)

[Light-themed feature showcase with product capability cards, code snippet previews, and gradient accent backgrounds in purple and blue tones.](https://design.withfudge.com/share/pin-9501)

[![Dark-themed footer region with multi-column link groups, social icons, and legal navigation on near-black background.](https://pin.fontofweb.com/9500?format=jpg)](https://design.withfudge.com/share/pin-9500)

[Dark-themed footer region with multi-column link groups, social icons, and legal navigation on near-black background.](https://design.withfudge.com/share/pin-9500)

[![Dark-themed hero section with large display typography, primary call-to-action button, and abstract gradient visual element.](https://pin.fontofweb.com/9499?format=jpg)](https://design.withfudge.com/share/pin-9499)

[Dark-themed hero section with large display typography, primary call-to-action button, and abstract gradient visual element.](https://design.withfudge.com/share/pin-9499)

## Overview

The kapa.ai design system presents a dark-first, technically precise visual language built for AI infrastructure messaging. The interface operates on a near-black canvas with carefully graduated surface layers that create depth without visual noise. Typography is handled by Geist and Geist Mono, lending a contemporary, engineering-credible voice that avoids the warmth of traditional SaaS aesthetics. The system prioritizes information density and scanability: large metric displays anchor trust sections, compact label typography organizes feature hierarchies, and electric-blue accents appear sparingly to signal interactivity and AI-native capability. Every surface treatment reinforces the product's positioning as serious technical infrastructure—controlled contrast and systematic spacing let code snippets, performance data, and customer quotes speak directly to engineering buyers.

## Colors

The color architecture is built on a monochromatic dark foundation with a single vibrant accent. This restraint creates a technical atmosphere where content hierarchy is established through luminance rather than hue variation.

| token | value | use |
|---|---|---|
| canvas | #171717 | Global page background, the deepest layer |
| surface | #1E1E1E | Primary content containers, cards, and sections |
| surface-raised | #242424 | Elevated cards, metric displays, hover states |
| surface-sunken | #0F0F0F | Code blocks, embedded media, deepest inset areas |
| ink | #E4E4E6 | Primary headings, hero display text, active navigation |
| ink-secondary | #A1A1AA | Body text, descriptions, secondary labels |
| ink-tertiary | #71717A | Captions, metadata, footer links, disabled states |
| accent | #38BDF8 | Interactive highlights, links, focus indicators, AI feature badges |
| border | #2E2E2E | Visible dividers, card outlines, structural separators |
| border-subtle | #1F1F1F | Hairline borders on dark surfaces, nearly invisible edges |
| action-primary | #FAFAFA | Primary button fills, high-contrast CTAs |
| action-primary-ink | #171717 | Text on primary buttons |
| action-secondary-bg | #262626 | Secondary button fills, ghost button backgrounds |
| action-secondary-ink | #FAFAFA | Text on secondary buttons |

The dark mode is the native state. Light values are reserved for interactive affordances and maximum-contrast moments. The accent blue is used with surgical precision—appearing in link underlines, focus rings, and occasional badge backgrounds rather than broad fills. This prevents the interface from feeling like a generic "tech blue" product while still providing clear wayfinding signals. Photographic and illustrative content sits within the dark frame without adaptation; inbound imagery should be prepared for dark contexts or carry its own background treatment.

## Typography

The type system is anchored by Geist, a contemporary sans-serif with engineered proportions, supported by Geist Mono for technical annotations and label treatments. System and System-Sansserif appear in the font stack for navigation and fallback contexts. Applesystem is also present in the loaded families. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Geist | 4.5rem | 400 | 0.95 | -0.04em | Homepage hero, major landing headlines |
| section-display | Geist | 3rem | 400 | 1.02 | -0.03em | Section headers, trust banners |
| heading-large | Geist | 1.75rem | 500 | 1.2 | -0.02em | Feature titles, card headers |
| heading | Geist | 1.25rem | 500 | 1.3 | -0.01em | Subsection titles, form labels |
| body-large | Geist | 1.25rem | 400 | 1.5 | 0em | Lead paragraphs, introductory copy |
| body | Geist | 1rem | 400 | 1.5 | 0em | Standard paragraphs, descriptions |
| body-small | Geist | 0.875rem | 400 | 1.5 | 0em | Compact descriptions, metadata |
| label | Geist Mono | 0.8125rem | 400 | 1 | 0.08em | Category tags, metric labels, eyebrow text |
| caption | Geist | 0.75rem | 400 | 1.5 | 0em | Fine print, timestamps, legal |
| navigation | System | 0.875rem | 400 | 1.5 | 0em | Header links, dropdown items |

Geist is designed by Basementstudio, Andrés Briganti, and Mateo Zaragoza, with distribution through Basementstudio and Vercel. Geist Mono shares the same design and vendor lineage. The mono variant's tight leading and positive letter-spacing create a distinctive technical voice for labels and code-adjacent content. Display sizes use tight negative tracking that would feel cramped at smaller scales but creates impact at headline sizes. Body text maintains neutral tracking for extended reading comfort. The weight range is intentionally narrow—Regular and Medium only—avoiding the visual disruption of Bold in a system that relies on size and color contrast for hierarchy.

## Layout

The layout follows a centered, contained model with generous vertical breathing room between major sections. Horizontal padding is consistent across breakpoints, creating a framed presentation that feels intentional rather than arbitrary.

The page structure uses a single-column flow with occasional two-column splits for feature explanations and metric showcases. Maximum content width is constrained to maintain readable line lengths, with hero sections occasionally breaking the container for visual impact. Section spacing is dramatic: major thematic transitions receive 11.25rem of top padding, while related content groups sit closer at 6.25rem. This creates a clear rhythm of exposition and rest.

Grid behavior is implicit rather than explicitly gridded—cards and feature blocks align to consistent internal padding rather than a visible column system. The metric cards in trust sections use a flexible grid that accommodates 2-up or 4-up arrangements depending on viewport width. Gap spacing between cards is consistently 1.5rem, creating tight but breathable relationships between related data points.

Navigation sits fixed at the top with a blurred or translucent background treatment that separates it from scrolling content without a hard border. The footer expands to a multi-column link architecture with 3rem of internal gap spacing between columns, organized by topic rather than hierarchy. All interactive regions maintain minimum 44px touch targets even when visual presentation is more compact.

## Visual language

The visual character is restrained and technical, communicating infrastructure reliability rather than consumer delight. Depth is achieved through layered surfaces rather than shadows—each elevation step is a distinct background color rather than a drop shadow. The surface stack progresses from canvas (#171717) through surface (#1E1E1E) to raised (#242424), with sunken (#0F0F0F) reserved for code and media embeds.

Border treatments are minimal and functional. Most cards carry no visible border, relying on background contrast to define edges. Where borders appear, they are 1px solid lines in border (#2E2E2E) or border-subtle (#1F1F1F), serving as dividers within cards rather than outlines around them. The absence of heavy borders contributes to the system's clean, modern technical aesthetic.

Imagery and illustration follow a dark-adapted approach. Product screenshots carry their own context and are not framed. Abstract visual elements use gradient meshes in cool tones—blues, purples, and magentas—that harmonize with the accent color without competing for attention. These appear primarily in hero sections as atmospheric background texture.

Iconography is simple and geometric, typically single-weight line icons or filled shapes in ink-secondary or accent colors. The system avoids multi-color illustrations and emoji-style graphics. Social proof elements—customer logos, team photos—are presented in monochrome or with reduced opacity to maintain visual cohesion.

## Components

### Primary Button

- **Anatomy**: Text label with optional leading icon, contained within a pill-shaped fill.
- **Surface and text color**: action-primary background with action-primary-ink text.
- **Typography**: label token, Geist Mono, uppercase treatment with positive letter-spacing.
- **Shape**: pill border radius (9999px), fully rounded ends.
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding, 0.5rem gap between icon and text.
- **Composition**: Centered content, minimum width determined by text length.
- **Variants**: Secondary variant uses action-secondary-bg with action-secondary-ink; ghost variant uses transparent background with ink text and border-subtle border.

### Metric Card

- **Anatomy**: Eyebrow label, large numeric display, supporting unit text, optional quote attribution.
- **Surface and text color**: surface-raised background, ink for the numeric value, ink-secondary for supporting text, ink-tertiary for attribution.
- **Typography**: label token for the eyebrow, hero-display token for the number (scaled down to 3rem within cards), body for quotes.
- **Shape**: card border radius (1rem), no border.
- **Spacing**: 1.5rem internal padding, 1rem gap between elements.
- **Composition**: Stacked vertical layout with left alignment; quote cards add horizontal rule separator above attribution.
- **Variants**: Compact variant removes quote and attribution for pure data display; featured variant uses surface background for emphasis within a raised context.

### Testimonial Card

- **Anatomy**: Quote text, attribution with avatar and role, company logo.
- **Surface and text color**: surface background, ink-secondary for quote, ink for attribution name, ink-tertiary for role.
- **Typography**: body-large for quote, body-small for attribution, caption for role.
- **Shape**: panel border radius (1.5rem), no border.
- **Spacing**: 2rem internal padding, 1.5rem gap between quote and attribution block.
- **Composition**: Vertical stack with attribution row at bottom; avatar is 2.5rem circle, logo aligns right in attribution row.
- **Variants**: Minimal variant removes avatar and logo for text-only presentation.

### Feature Card

- **Anatomy**: Icon or visual, heading, description, optional code snippet or link.
- **Surface and text color**: surface-raised background, ink for heading, ink-secondary for description.
- **Typography**: heading-large for title, body for description, label for category tag.
- **Shape**: card border radius (1rem), no border.
- **Spacing**: 1.5rem internal padding, 1rem gap between elements.
- **Composition**: Vertical stack with icon at top; code snippets use sunken background with button radius and mono typography.
- **Variants**: Horizontal variant places icon left of text for compact layouts; expanded variant adds full-width media above text.

### Code Block

- **Anatomy**: Syntax-highlighted code, optional filename header, copy action.
- **Surface and text color**: surface-sunken background, ink-secondary for code text with syntax highlighting in accent tones.
- **Typography**: Geist Mono at body-small size, 1.5 line height.
- **Shape**: button border radius (0.75rem), no border.
- **Spacing**: 1.5rem internal padding.
- **Composition**: Full-width within container, scrollable horizontally if content exceeds bounds.
- **Variants**: Inline variant for single-line code within body text uses pill background with reduced padding.

### Navigation Bar

- **Anatomy**: Logo left, link groups center, utility actions right.
- **Surface and text color**: Transparent or blurred canvas background, ink-secondary for links, ink for active state.
- **Typography**: navigation token for all links.
- **Shape**: Full-width, height approximately 4rem.
- **Spacing**: 2.5rem horizontal padding, 2rem gap between link groups.
- **Composition**: Flex row with space-between alignment; dropdown menus use surface-raised with card radius.
- **Variants**: Scrolled variant adds subtle bottom border in border-subtle; mobile variant collapses to hamburger with full-screen overlay.

### Footer

- **Anatomy**: Multi-column link groups, social icon row, legal text row.
- **Surface and text color**: canvas background, ink-tertiary for links, ink-secondary for headings.
- **Typography**: body-small for links, label for column headings.
- **Shape**: Full-width, no border radius.
- **Spacing**: 6.25rem top padding, 3rem bottom padding, 3rem gap between major rows, 2.5rem gap between columns.
- **Composition**: Grid layout with 4-6 columns for links, stacked rows below for social and legal.
- **Variants**: Minimal variant reduces to single column for narrow viewports.

## Responsive behavior

The system is designed desktop-first with clear adaptation paths for smaller viewports. Hero display typography scales down to section-display size on tablet and heading-large on mobile, maintaining the tight leading that characterizes the brand voice. Section spacing reduces proportionally: section-large becomes section, section becomes spacious.

Navigation collapses to a hamburger menu at approximately tablet width, with the full-screen overlay preserving the dark canvas and using the same surface-raised treatment as dropdowns. Metric cards transition from 4-up to 2-up to 1-up as viewport narrows, maintaining internal spacing while allowing edge-to-edge presentation on mobile.

Feature cards stack vertically on narrow viewports, with horizontal variants converting to standard vertical layout. Code blocks remain horizontally scrollable rather than wrapping, preserving readability for technical content. Touch targets expand to minimum 48px on all interactive elements in mobile contexts.

The dark canvas is maintained across all breakpoints; there is no light-mode alternative in the current system. Images and media should be prepared for dark presentation or carry their own background isolation.

## Practical implementation guidance

### Preserve
- The strict dark palette—canvas, surface, and raised layers are essential to the technical character.
- Geist's tight display tracking and the mono label treatment; these create the engineered voice.
- Generous section spacing; the rhythm of exposition and rest is part of the brand.
- Pill-shaped primary actions; the fully rounded CTA is a distinctive signature.
- Layered surfaces without heavy shadows; depth comes from color, not elevation effects.

### Avoid
- Introducing additional accent colors beyond the electric blue; the monochromatic discipline is deliberate.
- Using bold weights in typography; the system achieves hierarchy through size and color contrast.
- Light backgrounds for any primary surface; even modals and overlays remain in the dark surface stack.
- Decorative gradients as broad fills; gradients are reserved for atmospheric hero backgrounds only.
- Rounded corners larger than 1.5rem on containers; the pill shape is reserved for buttons.

### Recommended Build Order
1. Establish the dark canvas and surface color stack with CSS custom properties.
2. Implement Geist and Geist Mono with the complete type scale, verifying web font loading performance.
3. Build the navigation component with scroll-aware state changes.
4. Create the button system with primary, secondary, and ghost variants.
5. Develop card components starting with metric cards, as these appear in the highest-visibility trust section.
6. Implement section spacing and container constraints.
7. Add code block styling with syntax highlighting integration.
8. Build footer architecture with responsive column behavior.

### Accessibility
- Maintain minimum 4.5:1 contrast for all body text; the ink-secondary (#A1A1AA) on surface (#1E1E1E) achieves approximately 7:1.
- Use accent color (#38BDF8) only for interactive elements, never for static information, to support color-blind wayfinding.
- Ensure focus indicators use accent with sufficient offset or outline thickness for visibility against dark surfaces.
- Respect reduced-motion preferences; the system has no essential motion but any scroll-triggered reveals should disable gracefully.
- Provide aria-labels for icon-only buttons in navigation and footer social links.

## Scope note

This guide covers the homepage and primary landing surfaces of kapa.ai as visible in the supplied captures. Pricing tables, documentation pages, and authenticated dashboard interfaces are not represented. Motion design, micro-interactions, and mobile-specific navigation patterns are not documented. The Geist, Geist Mono, Applesystem, System, and System-Sansserif families require license verification before production deployment.
