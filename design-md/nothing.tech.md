# How nothing.tech is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/nothing.tech-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with teal Nothing Phone (3a) community edition, pixel-art cursor avatars, and retro desktop UI metaphor with floating .ntg file icons](https://pin.fontofweb.com/5524?format=jpg)](https://design.withfudge.com/share/pin-5524)

[Homepage hero with teal Nothing Phone (3a) community edition, pixel-art cursor avatars, and retro desktop UI metaphor with floating .ntg file icons](https://design.withfudge.com/share/pin-5524)

[![Support Centre landing page with large serif heading, floating product photography of transparent phone and earbuds, and rounded search input](https://pin.fontofweb.com/3035?format=jpg)](https://design.withfudge.com/share/pin-3035)

[Support Centre landing page with large serif heading, floating product photography of transparent phone and earbuds, and rounded search input](https://design.withfudge.com/share/pin-3035)

[![Support category grid with six pill-shaped outline buttons labeled Product Guide, Troubleshooting, FAQs, After-Sales Service, Software Download, Product Status](https://pin.fontofweb.com/3034?format=jpg)](https://design.withfudge.com/share/pin-3034)

[Support category grid with six pill-shaped outline buttons labeled Product Guide, Troubleshooting, FAQs, After-Sales Service, Software Download, Product Status](https://design.withfudge.com/share/pin-3034)

[![Contact Us section with dotted horizontal rule, body text, and a solid dark pill-shaped SEND US A MESSAGE button on light gray background](https://pin.fontofweb.com/3033?format=jpg)](https://design.withfudge.com/share/pin-3033)

[Contact Us section with dotted horizontal rule, body text, and a solid dark pill-shaped SEND US A MESSAGE button on light gray background](https://design.withfudge.com/share/pin-3033)

## Overview

Nothing's digital presence embodies a deliberate tension between raw technological transparency and playful retro-computing nostalgia. The system operates on a near-monochrome foundation—pitch black against clean white and soft gray—allowing product photography and occasional electric accents to command full attention. The homepage transforms the browser into a simulated desktop environment, complete with draggable file icons, pixel-art cursors, and chat-bubble annotations that frame product reveals as collaborative design sessions. This desktop metaphor extends to window chrome, title bars, and floating UI layers that recall early graphical interfaces without descending into pastiche.

The Support Centre strips back this theatricality for clarity while retaining the brand's typographic DNA. Large serif-style display headings anchor pages with editorial confidence, while body copy maintains the same measured, slightly technical tone. Product photography floats against neutral grounds, presented with museum-like isolation that emphasizes industrial design details—the transparent casings, visible screws, and internal components that define Nothing's hardware identity. The overall effect is a design system that feels simultaneously contemporary and anachronistic, rigorous and playful, minimal yet richly detailed.

## Colors

The palette is intentionally constrained, deriving visual energy from contrast and materiality rather than chromatic variety. Black serves as the primary structural ink for all text, borders, and key UI elements. White provides the dominant canvas, with a near-white gray softening large background fields. A single electric yellow-green appears as an accent in interactive moments and promotional highlights. Deep navy functions as the solid action color for primary buttons, offering a cooler alternative to pure black that maintains sophistication.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, borders, window chrome, icon fills |
| canvas | #FFFFFF | Page backgrounds, input fields, product card surfaces |
| surface | #F5F5F5 | Section backgrounds, secondary page grounds, footer areas |
| accent | #E1FF00 | Promotional highlights, chat bubbles, hover states, badges |
| action | #002B5C | Primary button fills, critical CTAs, emphasis backgrounds |

The homepage deploys accent yellow-green sparingly in floating chat bubbles and annotation labels, creating focal points against the teal product photography without competing for dominance. Support pages largely suppress this accent in favor of the neutral triad, reserving the deep navy action color for the single most important conversion point on each page. Product photography introduces its own chromatic world—teal handsets, orange cables, metallic grays—that the UI palette deliberately steps back to frame. Dark mode is not visibly deployed in the captured surfaces; the system appears optimized for light-ground presentation with black as the dominant figure.

## Typography

Nothing's typographic system is built on three distinct families that serve different communicative registers. N Type 82, a contemporary serif with classical proportions, handles all display and body text with calm authority. Lettera Mono Ll provides the technical voice—labels, captions, metadata, and interface chrome—its monospaced rhythm evoking terminal output and engineering documentation. Ndot, a dot-matrix display face, appears in navigation and branding moments, its pixelated construction reinforcing the retro-computing aesthetic.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | N Type 82 | 4rem | 400 | 1 | -0.02em | Homepage headlines, major product announcements |
| section-display | N Type 82 | 2.5rem | 400 | 1.1 | -0.01em | Page titles, section headers, Support Centre headings |
| body | N Type 82 | 1rem | 400 | 1.5 | 0em | Paragraphs, descriptions, form text |
| label | Lettera Mono Ll | 0.75rem | 400 | 1.2 | 0.05em | Buttons, tags, metadata, timestamps |
| navigation | Ndot | 1rem | 400 | 1 | 0.08em | Primary nav, brand marks, category labels |
| legal-copy | Lettera Mono Ll | 0.625rem | 400 | 1.4 | 0.02em | Footnotes, copyright, fine print |

N Type 82 is designed by Colophon Foundry. Lettera Mono Ll is designed by Kobi Benezri for Lineto. Ndot is designed by Colophon Foundry. Verify licensing for these families before production use.

The type scale is built on a 4px relative unit. Display sizes use tight leading and negative tracking for impactful headlines, while body text opens up for comfortable reading. The monospaced label style is used extensively in pill buttons and interface elements, its even character widths creating visual regularity that complements the rounded geometric containers. The dot-matrix navigation face appears at a consistent size with generous letter-spacing to maintain legibility despite its pixelated construction.

## Layout

The layout system alternates between two distinct modes: the theatrical, non-linear compositions of the homepage and the disciplined, editorial grids of support and product pages.

Homepage layouts employ a centered, floating composition where a primary product image anchors the viewport, surrounded by satellite elements—file icons, cursor avatars, chat bubbles—that appear to exist in a shallow three-dimensional space. The central "window" containing the product maintains a fixed aspect ratio with subtle drop shadow, suggesting a layer above the desktop ground. Navigation sits at the top in a minimal bar, with the brand mark centered and utility icons flanking. This layout resists conventional responsive reflow; elements maintain their relative positions through scale transformations rather than stack-based reordering.

Support and content pages adopt a conventional single-column flow with generous margins. The Support Centre hero places a large heading and search input in the left third of the viewport, with product photography occupying the right two-thirds in a floating, asymmetrical arrangement. Below this, content sections stack vertically with consistent section spacing. Category grids use a three-column layout of equal-width pill buttons with uniform gaps.

The underlying grid appears to be fluid rather than fixed-width, with content areas that expand to fill available space while maintaining comfortable measure for text. Section spacing is generous, creating clear rhythmic separation between functional areas without excessive whitespace that would feel austere.

## Visual language

Nothing's visual language is defined by three core motifs: transparency, pixelation, and industrial precision.

Transparency appears literally in product photography—phones with clear backs revealing internal circuitry, earbuds in open cases—and metaphorically in the UI's refusal to hide its own structure. Window chrome, title bars, and visible grid lines on the homepage background all suggest a system that exposes rather than conceals its workings.

Pixelation manifests in the dot-matrix typeface, the 1-bit cursor icons, and the dithered aesthetic of floating avatars. These elements are not merely decorative but functional: the pixel cursors indicate interactive presence, the chat bubbles suggest real-time collaboration, the file icons imply a navigable file system. This is a UI that asks to be manipulated, not merely consumed.

Industrial precision appears in the exacting geometry of all components. Pill buttons have perfectly semicircular ends. Search inputs maintain mathematically consistent corner radii. Borders are hairline-thin and exactly 1px. The dotted horizontal rule in the Contact section uses a regular dot pattern that feels machined rather than hand-drawn. Even the playful elements obey rigorous constraints.

Imagery treatment favors high-key photography with soft, diffuse lighting that eliminates harsh shadows. Products float against neutral grounds, often with subtle reflections that suggest premium presentation without ostentation. The overall impression is of a design studio that treats consumer electronics with the same reverence traditionally reserved for luxury goods or museum pieces.

## Components

### Primary action button

A solid filled pill with deep navy background and white text. Uses the monospaced label typography with generous horizontal padding, creating a substantial target that feels authoritative without heaviness.

- Anatomy: Text label centered within a full pill shape
- Surface: Solid action color background, canvas text
- Typography: `{typography.label}`, uppercase or title-case depending on context
- Shape: Full pill border radius
- Spacing: 1rem vertical padding, 2.5rem horizontal padding
- Composition: Typically right-aligned or centered within its container
- Variants: None visible; appears as single emphasis element per section

### Secondary outline pill

A transparent pill with 1px black border and black text. Used for category navigation and non-primary choices, creating a lighter visual weight that allows multiple instances to coexist without competing.

- Anatomy: Text label centered within outlined pill
- Surface: Transparent background, ink border and text
- Typography: `{typography.label}`
- Shape: Full pill border radius
- Spacing: 1rem vertical padding, 2rem horizontal padding
- Composition: Grid of three columns with consistent gaps
- Variants: None visible; uniform treatment across all category instances

### Search input

A white rounded rectangle with subtle shadow or border, containing a search icon and placeholder text. The generous corner radius creates a friendly, approachable entry point that softens the technical context.

- Anatomy: Icon prefix, text input area, optional clear button
- Surface: Canvas background, ink icon and placeholder text
- Typography: `{typography.body}`
- Shape: 2rem border radius, creating a stadium shape
- Spacing: 1rem vertical padding, 1.5rem horizontal padding
- Composition: Full-width within its container on mobile, constrained width on desktop

### Dotted rule

A horizontal divider composed of evenly spaced dots rather than a continuous line. This element appears in content sections to separate headings from body copy with visual interest that avoids the severity of a solid rule.

- Anatomy: Single horizontal line of dots
- Surface: Ink color at 1px weight
- Shape: Continuous dot pattern
- Spacing: 1.5rem vertical margin above and below
- Composition: Full-width within content area

### Product window

The homepage's central content container, presenting a product image within a simulated window frame with title bar, close/minimize/expand controls, and subtle shadow suggesting elevation above the desktop ground.

- Anatomy: Title bar with window controls, content area, optional status elements
- Surface: Canvas background, ink chrome elements
- Typography: `{typography.label}` for title bar text
- Shape: Small radius on outer corners, sharp or slightly rounded on window controls
- Spacing: Tight internal padding, substantial external margin
- Composition: Centered in viewport with surrounding satellite elements

### Cursor avatar

Pixel-art hand cursor icons that serve as user presence indicators in the collaborative desktop metaphor. Each cursor carries a name label in a small black pill, suggesting multiple simultaneous viewers or contributors.

- Anatomy: 1-bit pixel hand icon, name label pill
- Surface: Black label with white text, monochrome cursor
- Typography: `{typography.legal-copy}` for name labels
- Shape: Irregular cursor outline, pill label
- Composition: Scattered around product window at various angles

## Responsive behavior

The desktop experience prioritizes the full theatrical presentation of the homepage desktop metaphor and the generous proportions of the Support Centre layout. At narrower viewports, the system should maintain its essential character while adapting for touch interaction and reduced horizontal space.

The homepage's floating window composition likely scales down proportionally, with satellite elements repositioning to avoid overlap. The three-column category grid on Support pages should reflow to two columns and then single column, with pill buttons expanding to full width for comfortable touch targets. The asymmetrical hero layout with left text and right imagery should stack vertically, preserving text hierarchy by placing the heading and search input above the product photograph.

Touch targets should maintain minimum 44px height; the existing pill buttons already exceed this. The search input should remain easily tappable with its generous padding. Cursor avatars and desktop metaphors may require alternative presentation or suppression on touch devices where hover and precise positioning are unavailable.

Typography should scale down proportionally, with hero display reducing to section-display size and section-display reducing to a size that maintains impact without overwhelming narrow viewports. The monospaced label style remains legible at small sizes due to its generous x-height and clear construction.

## Practical implementation guidance

### Preserve
- The exacting contrast between black and white as the primary figure-ground relationship
- The three-family typographic hierarchy: serif for editorial voice, monospace for technical voice, dot-matrix for brand voice
- Full pill shapes for all interactive elements—buttons, inputs, category selectors
- The transparent, exposed aesthetic in product presentation and UI chrome
- Generous section spacing that allows each functional area to breathe
- The dotted rule as a distinctive separator that avoids solid-line severity

### Avoid
- Introducing additional accent colors beyond the electric yellow-green; the system's power comes from restraint
- Rounded rectangles with modest radii where pills are established; the semicircular ends are essential to the language
- Drop shadows on content cards or buttons; elevation should be suggested through composition, not decorative shadow
- Generic sans-serif substitutions for N Type 82; the serif construction provides necessary warmth and editorial authority
- Crowding the desktop metaphor with too many interactive elements; the current sparse arrangement maintains clarity

### Recommended build order
1. Establish the color foundation with ink, canvas, and surface tokens
2. Implement N Type 82 for all display and body text with appropriate scale and leading
3. Build the pill button system with primary and secondary variants
4. Create the search input component with its distinctive stadium shape
5. Develop the Support Centre page template with hero layout, category grid, and contact section
6. Layer in the homepage desktop metaphor with window chrome, cursor avatars, and floating elements
7. Add the dot-matrix navigation face and monospaced label system for complete typographic coverage

### Accessibility
- Ensure all text meets WCAG contrast ratios against its background; the black-on-white and white-on-navy pairings exceed requirements
- Provide visible focus indicators for all interactive elements; the existing 1px borders can be enhanced with outline offsets
- Consider motion sensitivity for the homepage's floating elements; provide reduced-motion alternatives that maintain layout without parallax or drift
- Ensure the dotted rule is not relied upon as the sole visual separator for users with low vision; structural headings and spacing should reinforce section boundaries
- Test the pixelated Ndot face at navigation sizes to confirm legibility for users with visual impairments; the generous letter-spacing aids recognition but may require larger minimum sizes

## Scope note

This guide covers the homepage desktop metaphor and Support Centre surfaces as captured. Product detail pages, checkout flows, account interfaces, and mobile-specific layouts are not represented. The CMF sub-brand pages with their warmer color palette and distinct photography treatment would require separate documentation. Motion behavior, hover states, and form validation patterns are not visible in still images and should be designed to match the system's restrained, precise character. Measurements are practical adaptation targets.
