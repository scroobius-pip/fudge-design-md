# How joshwcomeau.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/joshwcomeau.com-design)

Last updated: 2026-08-10

## Captured pages

[![Navigation dropdown with light panel, arrow indicator, and playful cardboard box mascot on near-black background](https://pin.fontofweb.com/1383?format=jpg)](https://design.withfudge.com/share/pin-1383)

[Navigation dropdown with light panel, arrow indicator, and playful cardboard box mascot on near-black background](https://design.withfudge.com/share/pin-1383)

[![About page bento grid with dark cards, pink accents, interactive map, and whimsical illustrations](https://pin.fontofweb.com/1366?format=jpg)](https://design.withfudge.com/share/pin-1366)

[About page bento grid with dark cards, pink accents, interactive map, and whimsical illustrations](https://design.withfudge.com/share/pin-1366)

[![Hero section with large display type, biographical text, and cutout portrait against cloud shapes](https://pin.fontofweb.com/1365?format=jpg)](https://design.withfudge.com/share/pin-1365)

[Hero section with large display type, biographical text, and cutout portrait against cloud shapes](https://design.withfudge.com/share/pin-1365)

[![Interactive SVG tutorial with syntax-highlighted code, grid visualization, and yellow play button](https://pin.fontofweb.com/1364?format=jpg)](https://design.withfudge.com/share/pin-1364)

[Interactive SVG tutorial with syntax-highlighted code, grid visualization, and yellow play button](https://design.withfudge.com/share/pin-1364)

## Overview

Josh W. Comeau's personal website presents a dark-mode-first design system that balances technical authority with playful personality. The visual language centers on near-black backgrounds that make vibrant accents—hot pink, golden yellow, and soft blue—feel electric against the darkness. Editorial typography in Wotfard provides readable structure for long-form educational content, while hand-drawn illustrations, whimsical mascots, and interactive demos create a sense of craft and approachability. The system serves dual purposes: establishing personal brand identity on the homepage and about page, then transforming into a rich interactive learning environment for technical tutorials. Components feel tactile and dimensional, with elevated surfaces, soft shadows, and rounded corners that avoid the flatness typical of dark themes. The overall impression is of a developer-educator who takes joy seriously—precise in code examples, generous in personality, and inventive in interaction design.

## Colors

The color system operates on a dark-mode foundation with selective, high-saturation accents that guide attention and express personality. The near-black canvas creates immersive reading conditions for long technical content while allowing illustrations and interactive elements to glow.

| token | value | use |
|---|---|---|
| canvas | #0e0e10 | Primary page background, deepest layer |
| surface | #1a1a1e | Card backgrounds, secondary containers |
| surface-elevated | #25252a | Interactive demo panels, elevated cards |
| ink | #ffffff | Primary text, headings, navigation |
| ink-muted | #a0a0a8 | Secondary text, captions, metadata |
| action | #ff4f8a | Links, emphasis text, "NEW" badges, decorative accents |
| action-secondary | #ffd700 | Primary buttons, play controls, highlight moments |
| accent-blue | #6b8cff | Active navigation states, code syntax, secondary interactive elements |
| border | #2a2a30 | Subtle dividers, card outlines, hairline separators |

The palette divides into functional and expressive roles. Neutrals from canvas through surface-elevated create depth through layered darkness rather than shadows alone. The hot pink action color carries emotional weight—appearing in pronoun displays, download statistics, and decorative flourishes—while golden yellow marks moments of user initiation like play buttons. Blue serves the practical role of indicating interactivity and selection states, particularly in code syntax highlighting and table-of-contents navigation. White ink maintains crisp readability even at small sizes against the dark ground. The system avoids gradients in favor of flat, confident color fields that let illustrations and photography provide visual complexity.

## Typography

Three font families create typographic hierarchy: Wotfard for structural text, Cartograph Cf for code, and Sriracha for playful accent moments. Wotfard appears in multiple weights from Regular through Semibold to Bold, enabling clear information hierarchy without changing family. Cartograph Cf provides the monospace texture essential to a developer-education brand. Sriracha's casual script personality appears sparingly, lending warmth to headings or decorative labels.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Wotfard | 4rem | 700 | 1.1 | -0.02em | Homepage and about page hero headings |
| section-display | Wotfard | 2.5rem | 700 | 1.15 | -0.01em | Section headings, article titles |
| body | Wotfard | 1.125rem | 400 | 1.6 | 0em | Paragraph text, descriptions |
| body-small | Wotfard | 1rem | 400 | 1.5 | 0em | Card content, secondary descriptions |
| label | Wotfard | 0.875rem | 600 | 1.4 | 0.01em | Buttons, tags, metadata |
| navigation | Wotfard | 1rem | 500 | 1.5 | 0em | Top-level navigation items |
| code | Cartograph Cf | 0.875rem | 400 | 1.6 | 0em | Inline and block code, SVG path data |
| accent | Sriracha | 1.25rem | 400 | 1.3 | 0em | Playful headings, decorative labels |

Type sizing follows a 4px grid, with display sizes creating dramatic contrast against body text. Hero display at 4rem establishes immediate personality on landing, while the tight negative tracking on large sizes keeps headlines feeling connected and energetic. Body text at 1.125rem with generous 1.6 line height supports extended reading in tutorials. Code blocks use the smaller 0.875rem size to fit more content horizontally while maintaining the characterful monospace rhythm of Cartograph Cf. Verify licensing for these families before production use.

## Layout

The layout system alternates between immersive full-bleed sections and contained content columns that center readable text. The homepage and about pages use a bento-grid approach—irregular card arrangements that break rigid symmetry while maintaining visual balance through careful sizing relationships. Tutorial pages adopt a two-column structure with a wide primary content area and a narrower sidebar for table-of-contents navigation.

Section spacing uses 6rem vertical padding to create breathing room between content zones. Cards and panels sit within this rhythm at 1.5rem internal padding, creating nested spatial hierarchy. The bento grid on the about page demonstrates asymmetric composition: a large map card spans left, medium cards cluster right, and smaller personality cards fill remaining gaps. This irregularity feels curated rather than chaotic because card sizes relate through consistent multiples of the base unit.

Content containers appear to max out around 1200px for text-heavy pages, while interactive demos and hero sections can break to full width. The tutorial page shows a contained code visualization with rounded corners floating within the content flow, suggesting that interactive elements receive elevated surface treatment even when embedded in articles. Navigation remains fixed or consistently present at the top, with dropdown menus appearing as elevated panels with small arrow indicators connecting to their trigger.

Grid gaps in card layouts use 1rem to 1.5rem, tight enough to feel connected but sufficient to prevent visual merging of dark surfaces. The overall spatial logic prioritizes vertical scrolling with occasional horizontal emphasis moments—like the SVG path animation scrubber—breaking the single-axis flow.

## Visual language

The visual language merges technical precision with whimsical personality. Illustrations and photographs appear as rounded rectangles with soft edges, never harshly clipped. The about page features a world map with animated location markers, a Pride flag rendered in soft gradients, and a cartoon cat mascot peeking from the corner—each element contributing to a narrative of global, queer, cat-loving developer identity.

Photography receives consistent treatment: the hero portrait shows Josh on stage with natural lighting, cut out against cloud-shaped background elements that add depth without competing. The desk photograph in the about grid uses warm interior lighting that contrasts the cool digital palette, grounding the technical content in physical reality.

Decorative elements include hand-drawn style icons, animated SVG illustrations, and small mascot characters like the cardboard box with a face that appears in the courses dropdown. These elements avoid feeling juvenile through refined execution and restrained placement—one or two per section rather than overwhelming density.

Motion appears integral to the brand even in still images: the SVG tutorial shows a play button and timeline scrubber, suggesting that static explanations transform into animated walkthroughs. The "NEW" badge on "Whimsical Animations" uses the action pink to create urgency through color rather than aggressive animation cues.

The overall aesthetic resists minimalism in favor of maximalist warmth—every space that could be empty receives thoughtful illustration, photography, or interactive potential, yet the dark canvas prevents this richness from feeling cluttered.

## Components

**Navigation Bar**
- Anatomy: Logo mark with stylized "Josh Comeau" wordmark, primary link items, dropdown trigger with animated arrow
- Surface: Transparent or canvas-colored background, transitioning to solid on scroll
- Typography: Navigation token, medium weight
- Spacing: Generous horizontal padding, items spaced for readability
- Composition: Left-aligned logo, right-aligned link cluster with consistent gaps

**Navigation Dropdown**
- Anatomy: Elevated panel with small upward-pointing arrow connecting to trigger, link list with arrow prefixes, optional promotional image
- Surface: Light surface (#e8e8ec) against dark page, creating strong contrast inversion
- Typography: Body-small token for links, label token for "Student Login" button
- Shape: Rounded panel with 1rem radius
- Spacing: Comfortable vertical padding between items, promotional image anchored bottom-right

**Hero Section**
- Anatomy: Large display heading, supporting paragraph stack, optional portrait or illustration
- Surface: Canvas background with subtle cloud or decorative shapes at lower boundary
- Typography: Hero-display token for primary heading, body token for description
- Composition: Asymmetric split with text left, imagery right; generous vertical padding

**Content Card (Bento Grid)**
- Anatomy: Rounded container with internal padding, may contain text, image, illustration, or mixed media
- Surface: Surface color (#1a1a1e), slightly elevated from canvas
- Typography: Section-display or body-small depending on card prominence
- Shape: 0.75rem radius
- Spacing: 1.5rem internal padding
- Variants: Large feature cards, medium content cards, small stat or personality cards

**Interactive Demo Panel**
- Anatomy: Code block paired with live visualization, control bar with play button and timeline
- Surface: Surface-elevated color, creating nested depth within article content
- Typography: Code token for syntax, label token for controls
- Shape: 1rem radius for outer container, smaller radius for internal elements
- Composition: Side-by-side or stacked code and visualization, with control bar below

**Primary Button**
- Anatomy: Text label with optional icon prefix
- Surface: Action-secondary background (golden yellow), dark text for contrast
- Typography: Label token, semibold weight
- Shape: 0.5rem radius, pill variant available for special actions
- Spacing: Comfortable horizontal and vertical padding for tactile target size

**Code Block**
- Anatomy: Syntax-highlighted code with language-appropriate coloring, optional line numbers
- Surface: Surface color with subtle border
- Typography: Code token, monospace family
- Shape: 0.75rem radius
- Composition: Full-width within content column, with horizontal scroll for overflow

**Table of Contents Sidebar**
- Anatomy: Nested link list with indentation for hierarchy, active state indicator
- Surface: Transparent, blending with page canvas
- Typography: Body-small token, with accent-blue for active item
- Composition: Sticky positioning alongside scrolling content, collapsible on smaller viewports

## Responsive behavior

The bento grid on the about page should collapse from multi-column irregular layout to single-column stacking on narrow viewports, preserving card order and internal proportions. Hero sections should reflow from side-by-side to stacked, with portrait imagery moving below text. Navigation should condense to a hamburger menu or simplified link set, with dropdown content becoming full-screen overlay panels.

Tutorial two-column layouts should transform to single-column with the table of contents becoming a collapsible top bar or floating action button that reveals section navigation. Code blocks should remain horizontally scrollable rather than wrapping, preserving formatting integrity. Interactive demos should maintain side-by-side code and visualization where possible, stacking only when viewport width forces compromise.

Type sizes should scale down proportionally: hero-display reducing to section-display on tablet, then to a large body size on mobile. The 4px grid base remains constant, but spacing tokens should compress—section padding reducing from 6rem to 4rem to 3rem as viewport narrows.

## Practical implementation guidance

**Preserve**
- The dark canvas as default experience; light-mode should be opt-in or absent
- Rounded corners on all containers—sharp rectangles break the friendly personality
- Generous internal padding in cards; cramped spacing destroys the tactile quality
- Three-family typography stack with clear role separation
- Whimsical illustrations and mascots in at least one position per major section

**Avoid**
- Pure black backgrounds; the slight warmth of #0e0e10 prevents harsh contrast
- Flat design without elevation layers; the surface hierarchy creates depth
- Generic stock photography; all imagery should feel personal and specific
- Border-heavy designs; rely on background color shifts and spacing for separation
- System fonts for body text; Wotfard's character is integral to the brand voice

**Recommended build order**
1. Establish canvas, surface, and ink color tokens with dark-mode default
2. Implement Wotfard typography scale with hero-display through body sizes
3. Build navigation bar with transparent-to-solid scroll behavior
4. Create card component with consistent padding and radius
5. Develop bento grid layout system for about page content
6. Add interactive demo wrapper with code block and visualization pairing
7. Integrate Cartograph Cf for code content and Sriracha for accent moments
8. Implement illustration and mascot system with consistent art direction

**Accessibility**
- Ensure golden yellow buttons (#ffd700) against dark backgrounds meet contrast minimums; the bright value should satisfy WCAG AA for large text but may need darkening for small labels
- Provide focus indicators that match the rounded aesthetic, not default browser outlines
- Code blocks should support keyboard selection and screen reader announcement of syntax structure
- Interactive demos need pause controls and reduced-motion alternatives for path animations
- Navigation dropdowns should trap focus and support escape-to-close behavior

## Scope note

This guide covers the homepage, about page, and interactive tutorial page surfaces visible in the supplied images. Footer content, article listing pages, course landing pages, and checkout flows are not represented. Motion specifications, hover states, and mobile breakpoint behavior are inferred from static images and should be validated against live implementation. Measurements are practical adaptation targets. Verify licensing for Cartograph Cf, Sriracha, and Wotfard before production use.
