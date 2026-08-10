# How temporal.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/temporal.io-design)

Last updated: 2026-08-10

## Captured pages

[![Two testimonial cards with white surfaces and black drop shadows against a vibrant purple-to-orange gradient background, featuring quotes from Vercel and HashiCorp executives.](https://pin.fontofweb.com/7545?format=jpg)](https://design.withfudge.com/share/pin-7545)

[Two testimonial cards with white surfaces and black drop shadows against a vibrant purple-to-orange gradient background, featuring quotes from Vercel and HashiCorp executives.](https://design.withfudge.com/share/pin-7545)

[![Dark section with large light headline 'One platform, two great hosting paths' and a diagram showing Self-Hosted and Cloud options with neon green and magenta accent shapes.](https://pin.fontofweb.com/7544?format=jpg)](https://design.withfudge.com/share/pin-7544)

[Dark section with large light headline 'One platform, two great hosting paths' and a diagram showing Self-Hosted and Cloud options with neon green and magenta accent shapes.](https://design.withfudge.com/share/pin-7544)

[![Footer with starry night sky illustration, moon and cloud graphics, purple gradient section headings, and email signup with 'Get Started for Free' and 'Log In' buttons.](https://pin.fontofweb.com/7543?format=jpg)](https://design.withfudge.com/share/pin-7543)

[Footer with starry night sky illustration, moon and cloud graphics, purple gradient section headings, and email signup with 'Get Started for Free' and 'Log In' buttons.](https://design.withfudge.com/share/pin-7543)

[![Full page view showing navigation bar with Temporal logo, purple 'Try Free' button, and extensive footer landscape illustration with layered purple hills and white clouds.](https://pin.fontofweb.com/7542?format=jpg)](https://design.withfudge.com/share/pin-7542)

[Full page view showing navigation bar with Temporal logo, purple 'Try Free' button, and extensive footer landscape illustration with layered purple hills and white clouds.](https://design.withfudge.com/share/pin-7542)

## Overview

Temporal's design system establishes a developer-first identity that balances technical authority with imaginative visual storytelling. The foundation is an almost-black canvas punctuated by electric purple gradients, neon green accents, and strategic white surfaces for high-contrast moments. The system uses Aeonik as its primary typeface—chosen for its geometric precision and contemporary engineering aesthetic—paired with Noto Sans Mono for labels, navigation, and code-adjacent elements that need mechanical credibility.

The visual narrative draws from space and time metaphors: starry night skies, lunar landscapes, and orbital mechanics appear as atmospheric illustrations throughout the footer and hero areas. This cosmic theming reinforces Temporal's positioning around durable, long-running execution without becoming decorative excess. The interface maintains a disciplined dark-mode-first approach where content hierarchy emerges through weight variation in Aeonik's Light and Regular cuts rather than color alone. Component surfaces are predominantly flat with zero border-radius, creating sharp, architectural edges that echo infrastructure diagrams and terminal aesthetics.

## Colors

The palette operates in three distinct modes: deep space backgrounds, electric accent gradients, and high-contrast white surfaces for social proof and calls-to-action.

| token | value | use |
|---|---|---|
| canvas | #141414 | Primary page background, the near-black that establishes spatial depth |
| surface | #000000 | Pure black for footer regions, navigation overlays, and maximum contrast zones |
| ink | #F8FAFC | Primary text on dark backgrounds, near-white with subtle warmth |
| muted-ink | #CACBF9 | Secondary text, descriptions, and supporting copy in content sections |
| dim-ink | #7C8FB1 | Tertiary text, footer links in inactive states, and de-emphasized labels |
| action-primary | #B664FF | Electric purple for primary buttons, gradient starts, and section headings |
| action-secondary | #444CE7 | Deep violet for gradient ends, link underlines, and secondary actions |
| success | #1FF1A5 | Neon green for status indicators, code syntax highlights, and success states |
| success-bright | #C3FF62 | Lime accent for high-visibility badges, promotional highlights |
| accent-magenta | #FF6BFF | Hot pink for diagram elements, decorative shapes, and visual punctuation |
| accent-green | #34D399 | Teal-green for secondary success states, diagram accents, and complementary highlights |
| border-subtle | #1F203F | Divider lines between dark sections, minimal contrast boundaries |
| border-hairline | #465A78 | Visible borders on interactive elements, input outlines |

The gradient system is central to Temporal's identity. The primary action gradient runs 45 degrees from #B664FF to #444CE7, appearing on primary buttons, navigation hover states, and footer links. A secondary gradient at 255 degrees creates vertical depth for text treatments and section dividers. A distinctive green gradient from #1FF1A5 to #C3FF62 appears on promotional buttons and success-oriented calls-to-action. For dark sections needing atmospheric separation, a subtle gradient from rgba(20, 20, 20, 0.8) to rgba(31, 32, 63, 0.6) provides layered depth without competing with content.

White surfaces appear strategically for testimonial cards and high-trust moments, creating immediate visual relief against the dark canvas. These white cards carry black drop shadows offset 8px by 8px with zero blur—a deliberate, hard-edged shadow that reinforces the system's flat, graphic quality rather than soft realism.

## Typography

Temporal's typographic system relies on Aeonik's weight spectrum to create hierarchy without size inflation. The Light weight at large sizes delivers airy, confident headlines while Regular and Medium weights handle functional text at a consistent 16px base.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Aeonik | 4.25rem | 300 | 1.1 | -0.03em | Page headlines, major section titles |
| section-display | Aeonik | 1.5rem | 700 | 1.4 | normal | Footer category headings, card titles |
| body | Aeonik | 1rem | 400 | 1.5 | normal | Paragraphs, descriptions, general content |
| body-large | Aeonik | 1.5rem | 300 | 1.6 | 0.008em | Lead paragraphs, introductory copy |
| label | Noto Sans Mono | 1rem | 500 | 1.5 | normal | Buttons, navigation, category labels |
| code | Noto Sans Mono | 1rem | 400 | 1.5 | normal | Inline code, technical references |
| navigation | Aeonik | 1rem | 500 | 1.5 | normal | Primary navigation, menu items |

Aeonik appears in four weights across the system: Light (300) for display and lead text, Regular (400) for body copy, Medium (500) for navigation and emphasis, and Bold (700) for section headings. Noto Sans Mono contributes Medium (500) for primary labels and Regular (400) for secondary technical text. The mono face's slightly narrower proportions and mechanical rhythm distinguish interactive elements from reading content without requiring size differentiation.

The hero display size of 68px (4.25rem) with -2px letter spacing creates tight, impactful headlines. Body-large at 24px (1.5rem) with 0.2px positive tracking opens up lead paragraphs for comfortable scanning. All functional text locks to the 16px base with 24px line-height, maintaining consistent vertical rhythm across components.

Aeonik was designed by Joe Leadbeater and Mark Bloom of Co Type Foundry. Noto Sans Mono carries no attributed designer in the available records. Verify licensing for these families before production use.

## Layout

Temporal's layout follows a full-bleed dark canvas with contained content zones. Sections stack vertically with generous padding—80px to 128px vertical spacing creates breathing room between major content blocks. The footer extends this dramatically with 768px bottom padding, accommodating the extensive illustrated landscape that anchors the page.

Horizontal containment uses 24px gutters on mobile and expands to comfortable reading widths on larger viewports. Content rarely exceeds a maximum width, instead favoring asymmetric compositions where text and diagrams occupy distinct zones. The "One platform, two great hosting paths" section demonstrates this: left-aligned text block with right-aligned diagram, neither centered nor constrained to narrow columns.

The footer organizes into a multi-column link grid with five categories—Discover, Explore, Developers, Community, Company—each topped by a purple gradient heading. Below this, primary actions stack vertically with "Get Started for Free" as a filled gradient button and "Log In" as an outlined secondary button. An email capture field spans nearly full width with a purple submit icon, sitting above legal links and copyright.

Spacing follows a 4px base unit with semantic steps: 8px for tight internal padding, 16px for component gaps, 24px for comfortable element separation, 32px for section internals, 48px for major divisions, 80px and 96px for section breaks, and 128px for hero-level vertical space. Margins between related elements typically use 12px or 16px.

## Visual language

The system's visual character emerges from the tension between technical precision and cosmic imagination. Interface elements are ruthlessly flat—zero border-radius on buttons, sharp corners on cards, hairline borders that separate without softening. This geometric severity is offset by flowing, hand-drawn illustrations of night skies, moons, clouds, and rolling hills that occupy the footer and atmospheric sections.

Color application follows a disciplined hierarchy: purple gradients signal action and identity, green accents indicate success and promotion, magenta appears as decorative punctuation in diagrams, and white surfaces create trust moments. The testimonial cards invert the dark canvas entirely, presenting black text on white with a hard black shadow that makes them appear to lift off the gradient background.

Typography reinforces the engineering positioning through weight rather than ornament. No italic styles appear in the system. Code-adjacent elements use Noto Sans Mono's mechanical rhythm, while marketing language breathes in Aeonik Light's generous letterforms. The mono face's presence in navigation, buttons, and labels creates a consistent "system voice" that reads as configured rather than composed.

Shadows are rare and purposeful: the testimonial card's 8px offset shadow is the primary example, creating depth through graphic displacement rather than atmospheric blur. Borders function as optical hairlines—1px for subtle separators, 2px for interactive emphasis, 4px for top-edge accents on gradient-topped sections.

## Components

### Primary Button
- **Anatomy**: Text label centered within a rectangular surface
- **Surface**: Gradient fill from #B664FF to #444CE7 at 45 degrees
- **Typography**: Noto Sans Mono Medium, 16px, white text
- **Shape**: Zero border-radius, sharp rectangular corners
- **Spacing**: 16px vertical padding, 24px horizontal padding
- **Composition**: Typically appears as the leading action in button pairs

### Secondary Button
- **Anatomy**: Text label centered within a bordered surface
- **Surface**: Transparent or black fill with 2px solid #B664FF border
- **Typography**: Noto Sans Mono Medium, 16px, white text
- **Shape**: Zero border-radius matching primary button
- **Spacing**: 16px vertical padding, 24px horizontal padding
- **Composition**: Appears below or beside primary button, as in "Log In" below "Get Started for Free"

### Testimonial Card
- **Anatomy**: Quotation mark icon, quote text, avatar image, name, title, company logo
- **Surface**: White (#FFFFFF) background with black drop shadow offset 8px horizontally and vertically
- **Typography**: Aeonik Regular 16px for quote body, Aeonik Light for attribution details
- **Shape**: Zero border-radius, sharp corners maintaining graphic flatness
- **Spacing**: Generous internal padding, approximately 32px
- **Composition**: Cards appear in pairs against vibrant gradient backgrounds, creating maximum contrast

### Navigation Bar
- **Anatomy**: Temporal wordmark left, link cluster center-right, action buttons far right
- **Surface**: Transparent over dark content, or black when scrolled
- **Typography**: Aeonik Medium 16px for links, Noto Sans Mono Medium 16px for accent links
- **Shape**: Full-width bar, no border-radius
- **Composition**: Logo mark precedes wordmark; "Try Free" uses gradient fill, "Log In" uses bordered style

### Footer Link Group
- **Anatomy**: Gradient-colored heading followed by stacked text links
- **Surface**: Transparent over starry background illustration
- **Typography**: Section heading in Aeonik Bold 24px with purple gradient text fill; links in Aeonik Regular 16px white
- **Spacing**: 32px top padding for group separation, 8px between individual links
- **Composition**: Five-column grid on desktop, responsive stack on smaller viewports

### Email Capture Field
- **Anatomy**: Text input with placeholder, submit button with icon
- **Surface**: White input field, purple gradient submit button
- **Typography**: Noto Sans Mono for placeholder and button
- **Shape**: Zero border-radius on both elements
- **Spacing**: Full-width field with compact submit button attached

### Hosting Path Diagram
- **Anatomy**: Two option cards (Self-Hosted, Cloud) connected by line graphics with decorative shapes
- **Surface**: Dark cards with subtle borders, neon accent shapes in magenta and green
- **Typography**: Aeonik Light for card labels
- **Composition**: Cards sit within a bordered frame with directional arrows and code bracket symbols as decorative elements

## Responsive behavior

The system prioritizes desktop presentation with dark, immersive full-bleed sections. Key responsive considerations include:

- Navigation collapses to a condensed menu on smaller viewports, preserving the gradient "Try Free" button as the persistent call-to-action
- Footer link grid transitions from five columns to stacked groups, maintaining category hierarchy through purple gradient headings
- Testimonial cards stack vertically rather than side-by-side, preserving white surfaces and black shadows for contrast against gradient backgrounds
- Hero headlines scale down from 68px while maintaining tight letter-spacing; body-large text may reduce to standard body size on narrow viewports
- The extensive footer illustration crops gracefully, keeping the moon and cloud focal points visible while hiding peripheral landscape details
- Hosting path diagram reflows to vertical stack with cards full-width and connecting lines simplified

When implementing, ensure the dark canvas remains continuous without light-mode breakpoints—the system is designed for sustained dark viewing appropriate to developer tooling contexts.

## Practical implementation guidance

### Preserve
- The exact purple-to-violet gradient angles (45° for buttons, 255° for text treatments) as they are signature to the brand
- Zero border-radius on all buttons, cards, and inputs—this sharp geometry is essential to the technical aesthetic
- The 4px base grid and its multiples for spacing; the system's rhythm depends on this fine granularity
- White testimonial cards with hard black shadows as the primary light-surface moment
- Noto Sans Mono for all button labels and navigation to maintain the configured-system voice

### Avoid
- Rounded corners on any component—they contradict the flat, terminal-inspired visual language
- Soft or blurred shadows; the 8px hard shadow is the only shadow treatment
- Light mode backgrounds; the near-black canvas is foundational to color perception throughout
- Generic gray text for secondary content; use the muted-ink (#CACBF9) or dim-ink (#7C8FB1) tokens instead
- Mixing Aeonik weights arbitrarily; stick to Light for display, Regular for body, Medium for navigation, Bold for headings

### Recommended Build Order
1. Establish the dark canvas (#141414) and typography scale with Aeonik and Noto Sans Mono loaded
2. Implement the gradient button system with exact purple-to-violet stops
3. Build navigation with transparent-to-black scroll behavior and mono labels
4. Create the footer structure with link groups, email capture, and illustrated background
5. Add testimonial cards with white surfaces and hard black shadows
6. Implement content sections with asymmetric text-diagram compositions
7. Fine-tune spacing against the 4px grid, verifying section padding at 80px, 96px, and 128px breakpoints

### Accessibility
- Ensure white text on gradient buttons maintains 4.5:1 contrast; the purple-to-violet gradient may need a subtle dark overlay or text shadow
- The starry footer background should use `prefers-reduced-motion` considerations if any parallax or animation is added
- Testimonial cards on vibrant gradients need sufficient surrounding contrast; the black shadow helps but verify perceived boundaries
- Focus indicators should use the success green (#1FF1A5) for visibility against dark surfaces
- Code and technical content in Noto Sans Mono should scale cleanly; verify at 200% zoom

## Scope note

This guide covers the Temporal homepage's dark-mode marketing experience including navigation, hero sections, hosting path diagrams, testimonial cards, and the illustrated footer. Interior pages, documentation layouts, dashboard interfaces, and mobile-specific adaptations are not represented in the available material. Motion design, hover states, and form validation styling were not captured and should be designed to complement the static system. Measurements derive from the documented pixel values and 4px base grid.
