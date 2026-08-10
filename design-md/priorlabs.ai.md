# How priorlabs.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/priorlabs.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Careers page showing Open Positions heading, job listing cards with filters, and an Interested sidebar with a dark blue View All Jobs button on white background.](https://pin.fontofweb.com/6866?format=jpg)](https://design.withfudge.com/share/pin-6866)

[Careers page showing Open Positions heading, job listing cards with filters, and an Interested sidebar with a dark blue View All Jobs button on white background.](https://design.withfudge.com/share/pin-6866)

[![Four city cards in a 2x2 grid with alternating dark blue and white backgrounds, each featuring curved line patterns and location names Berlin, Freiburg, New York, San Francisco.](https://pin.fontofweb.com/6865?format=jpg)](https://design.withfudge.com/share/pin-6865)

[Four city cards in a 2x2 grid with alternating dark blue and white backgrounds, each featuring curved line patterns and location names Berlin, Freiburg, New York, San Francisco.](https://design.withfudge.com/share/pin-6865)

[![Careers hero section with large centered heading about tabular foundation models, a dark blue CTA button, and a horizontal strip of team photographs below on a light textured](https://pin.fontofweb.com/6864?format=jpg)](https://design.withfudge.com/share/pin-6864)

[Careers hero section with large centered heading about tabular foundation models, a dark blue CTA button, and a horizontal strip of team photographs below on a light textured](https://design.withfudge.com/share/pin-6864)

[![Partner logo grid showing Elastic, AMD, Black Forest Labs, DataRobot, Meta, Qonto, Snowflake, Snyk, and others in dark blue monochrome on off-white background.](https://pin.fontofweb.com/6863?format=jpg)](https://design.withfudge.com/share/pin-6863)

[Partner logo grid showing Elastic, AMD, Black Forest Labs, DataRobot, Meta, Qonto, Snowflake, Snyk, and others in dark blue monochrome on off-white background.](https://design.withfudge.com/share/pin-6863)

## Overview

Prior Labs presents a visual identity that balances technical precision with approachable warmth. The system is built around a deep navy ink that serves as both primary text and interactive action color, set against clean white and subtle warm-gray surfaces. The typographic approach pairs a geometric variable sans for display headings with a semi-mono sans for all body, navigation, and interface text—creating a rhythm that feels computational without being cold. Every element, from job listings to city cards to partner logos, shares this restrained palette and consistent spacing logic. The result is a design language that communicates research credibility and engineering excellence while remaining inviting to potential collaborators and hires.

## Colors

The color system is intentionally narrow, relying on contrast and surface variation rather than multiple hues. Deep navy dominates as the signature brand color, appearing in text, borders, fills, and interactive states. Warm off-white and near-white surfaces provide breathing room and hierarchy. Black appears as a subtle structural color in background declarations.

| token | hex | use |
|---|---|---|
| ink | #101075 | Primary text, headings, borders, dark card fills, primary button backgrounds |
| ink-muted | #252C32 | Secondary text, subtle labels, less prominent body copy |
| canvas | #FFFFFF | Page background, light card fills, button text on dark surfaces |
| surface | #F8F8F9 | Subtle section backgrounds, alternating panels, footer areas |
| action | #101075 | Interactive elements, links, CTA buttons—identical to ink for cohesion |
| action-text | #FFFFFF | Text on primary buttons and dark surfaces |
| border-subtle | #000000 | Structural backgrounds, default browser resets, minimal UI borders |

The deep navy (#101075) carries a slight purple undertone that distinguishes it from generic corporate blues. This color appears in every context: as solid fills on hero buttons and city cards, as 1px and 2px borders on cards and secondary buttons, and as the default text color across all body copy. White and off-white surfaces alternate to create section rhythm without introducing new colors. The warm gray surface (#F8F8F9) appears in footer regions and select content panels, providing just enough differentiation from pure white to signal a new content zone. Black (#000000) is present in the interface as a background-color reset on structural elements, though it rarely appears visibly due to layered content. No gradients or shadows are used; depth and hierarchy come from color inversion and border presence alone.

## Typography

The type system uses three related families from Displaay Type Foundry: Saans Vf for display headings, Saans Semi Mono for all interface and body text, and Saans Mono for specific mono-spaced needs. A fourth family, Saans Vftrial, is present in the source files but does not appear in the visible interface. All credited families were designed by Martin Vácha and are available from Displaay Type Foundry Sro. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Saans Vf | 3rem | 500 | 1 | normal | Page titles, major section headings, careers hero |
| section-display | Saans Vf | 2rem | 600 | 1.2 | normal | Subsection headings, card titles, city names |
| body | Saans Semi Mono | 1rem | 400 | 1.31 | normal | Paragraphs, descriptions, job listing details |
| body-small | Saans Semi Mono | 0.875rem | 400 | 1.31 | normal | Captions, metadata, footer links, fine print |
| label | Saans Semi Mono | 0.9375rem | 400 | 1.31 | normal | Button text, navigation links, form labels |
| navigation | Saans Semi Mono | 1rem | 400 | 1.31 | normal | Primary navigation, header links |

Saans Vf at 48px (3rem) with weight 500 and tight 1.0 line height creates impactful, compact headings that sit confidently on the page. The variable font allows precise weight control—section headings shift to weight 600 at 32px (2rem) for clear hierarchy without size alone. Saans Semi Mono dominates the interface at 16px (1rem) with a comfortable 20.96px line height, giving body text a technical, measured quality. At 15px (0.9375rem), the same family handles button labels and navigation with slightly tighter presence. The 14px (0.875rem) size serves captions and footer utility links. Saans Mono appears at 20px for specific mono-spaced display contexts. Tracking remains normal throughout; no letter-spacing adjustments are applied, preserving the natural rhythm of the mono-influenced forms.

## Layout

The layout system relies on generous horizontal margins and consistent vertical spacing to create a calm, readable rhythm. Content is centered within viewport bounds with substantial side margins that expand on wider screens.

Page margins use 148.5px on the careers and about pages, creating a narrow, focused content column that feels editorial and precise. The homepage employs wider margins at 414px for certain sections, pushing content toward the center and emphasizing the surrounding whitespace. Navigation and some full-width sections use 48px or 72px of horizontal padding for internal alignment.

Vertical spacing follows a modular rhythm based on 32px increments. Standard section gaps are 64px, with larger 80px and 100px gaps reserved for major section breaks. Content blocks within sections typically separate by 32px. Card internal padding is consistently 32px, creating uniform breathing room. Button padding is 10px on all sides, giving compact but tappable targets.

The grid structure visible in the careers page shows a two-column layout for the main content area: a wide left column for job listings and a narrower right sidebar for calls to action. City cards arrange in a clean 2x2 grid with equal gaps. Partner logos distribute in a four-column grid on desktop, maintaining consistent alignment. The hero section on the careers page centers all content with generous vertical space above and below, while a horizontal strip of photographs anchors the bottom edge.

## Visual language

The visual character of Prior Labs is defined by restraint, precision, and subtle warmth. Every element feels intentionally placed, with no decorative excess beyond the functional.

Photography appears in two distinct modes: documentary team photographs in a horizontal scroll or strip, and abstract curved-line illustrations on city cards. The team photos are candid, warmly lit, and presented with rounded corners that match the card radius. The city card illustrations use thin, flowing curved lines in a lighter tint of the card's background color—white lines on navy, navy lines on white—creating a sense of movement and organic growth that contrasts with the rigid grid.

Borders are a critical visual tool. Cards use 1px solid navy borders. Secondary buttons and outlined actions use 2px solid navy borders for emphasis. The border radius system distinguishes components: cards and panels use 16px (1rem) for a soft but defined corner, buttons use approximately 9.6px (0.6rem) for a slightly more compact pill shape, and true circular or full-pill elements use 9999px.

The partner logo grid demonstrates a strict monochrome treatment: all logos render in the same deep navy, regardless of their native brand colors. This enforces visual unity and prevents the page from feeling like a cluttered sponsorship board. Logo sizing varies by mark complexity, but alignment to a consistent baseline grid keeps the composition orderly.

No shadows, gradients, or glassmorphism effects appear. Depth is achieved solely through color inversion (navy cards on white, white text on navy) and spatial separation.

## Components

### Primary Action Button

- **Anatomy**: Text label with optional arrow icon, single rectangular shape
- **Surface**: Solid ink (#101075) background with white text
- **Typography**: label token at 0.9375rem, weight 400
- **Shape**: Approximately 0.6rem border radius, compact but not fully pill
- **Spacing**: 10px padding on all sides
- **Composition**: Centered text, can include right-aligned arrow icon
- **Variants**: Appears in hero sections, cards, and navigation contexts

### Secondary Action Button

- **Anatomy**: Text label within bordered container
- **Surface**: Transparent or white background with 2px solid ink border
- **Typography**: label token, ink color
- **Shape**: Same 0.6rem radius as primary
- **Spacing**: 10px padding
- **Composition**: Used when the action is supportive rather than primary

### Job Listing Card

- **Anatomy**: Job title as linked heading, metadata line below with department, location, and employment type
- **Surface**: White background, no visible border in default state
- **Typography**: Title in body token with ink color, metadata in body-small or muted ink
- **Shape**: No radius; sits flush within its container
- **Spacing**: Generous vertical padding between entries, grouped under department headings
- **Composition**: Stacked vertically in a single column, separated by subtle dividers or whitespace

### City Card

- **Anatomy**: Large city name heading, descriptive paragraph below, full-bleed curved line illustration
- **Surface**: Alternating ink and canvas backgrounds in a 2x2 grid
- **Typography**: City name in section-display token; description in body token with reduced opacity or lighter weight on dark variants
- **Shape**: 1rem border radius on all corners
- **Spacing**: Internal padding of 32px, comfortable text inset from edges
- **Composition**: Text positioned in lower-left quadrant, illustration fills remaining space
- **Variants**: Dark (ink background, white text) and light (white background, ink text) alternate in checkerboard pattern

### Content Card / Panel

- **Anatomy**: Container for grouped information, may include heading, body text, and action button
- **Surface**: White with 1px solid ink border, or solid ink with white text
- **Typography**: Inherits heading and body tokens as appropriate
- **Shape**: 1rem border radius
- **Spacing**: 32px internal padding
- **Composition**: Used for sidebars, feature callouts, and grouped content

### Partner Logo Grid

- **Anatomy**: Multiple logo marks in a multi-column arrangement
- **Surface**: Transparent, sitting on page background
- **Typography**: None; logomarks only
- **Shape**: No bounding shapes; logos sit as inline images
- **Spacing**: Generous gaps between rows and columns, approximately 32px
- **Composition**: Four-column grid on desktop, center-aligned within each cell
- **Variants**: All logos rendered in monochrome ink color

### Navigation Bar

- **Anatomy**: Logo or wordmark left, link cluster right, optional CTA button
- **Surface**: Transparent or white background depending on scroll state
- **Typography**: navigation token for links, label token for CTA
- **Shape**: No distinct container shape; items sit inline
- **Spacing**: 48px horizontal padding, comfortable vertical height
- **Composition**: Flex row with space-between alignment

## Responsive behavior

The design maintains its core character across viewport sizes through proportional scaling and selective reflow. The narrow content column with wide side margins suggests a desktop-first approach where the reading experience is prioritized.

On narrower viewports, the two-column careers layout should stack to a single column, with the sidebar CTA appearing below the job listings. The city card grid should collapse from 2x2 to a single column, preserving the alternating dark/light pattern. Partner logos should reduce from four columns to two, then to a single column with centered alignment.

Typography scales down modestly: the 48px hero heading may reduce to 36px or 32px on smaller screens, while body text remains at 16px for readability. Button and card padding should remain consistent to maintain tappable targets. The horizontal photograph strip on the careers page should become scrollable or wrap to multiple rows rather than scaling down to illegibility.

Navigation should collapse to a hamburger menu or simplified link list when horizontal space is constrained. The generous desktop margins should reduce to 24px or 16px on mobile to reclaim usable space.

## Practical implementation guidance

### Preserve
- The strict two-color palette of deep navy and warm off-white; this is the brand's signature
- The mono-influenced type pairing: geometric sans for display, semi-mono for everything else
- The 1px and 2px border system as the primary means of defining component edges
- The alternating dark/light city card pattern and its curved line illustrations
- Generous whitespace and wide side margins on desktop

### Avoid
- Adding accent colors beyond the navy family; the system derives variety from value contrast alone
- Using shadows, gradients, or blur effects; the design is intentionally flat
- Replacing the semi-mono body font with a conventional sans; the technical character depends on this choice
- Cropping or altering partner logos; the monochrome treatment is intentional and should be applied consistently
- Tightening line height on body text below 1.31; readability depends on this openness

### Recommended Build Order
1. Establish the color tokens and apply to base HTML elements
2. Load Saans Vf, Saans Semi Mono, and Saans Mono with appropriate weights and subsets
3. Build the type scale with exact pixel-to-rem conversions
4. Create the button components (primary and secondary) as they appear most frequently
5. Implement the card component with its border and radius system
6. Build the navigation bar and page shell with correct margins
7. Add the city card grid with alternating color logic
8. Implement the job listing layout and sidebar composition
9. Add the partner logo grid with monochrome SVG treatment
10. Polish spacing, responsive breakpoints, and photograph strip behavior

### Accessibility
- Ensure the deep navy (#101075) on white meets WCAG AA contrast for normal text; the darkness of this blue suggests it should pass, but verify with a contrast checker
- Provide visible focus indicators on all interactive elements; the 2px border style can serve as a focus ring with adjusted color
- Maintain button padding at 10px or greater to create minimum 44px tappable targets when combined with text height
- Use semantic heading hierarchy: h1 for page titles, h2 for sections, h3 for subsections
- Ensure the curved line illustrations on city cards are decorative only and do not convey essential information
- For the horizontal photograph strip, provide alt text describing the team context rather than individual identities

## Scope note

This guide covers the visible desktop surfaces of the Prior Labs homepage, careers page, and about page. Mobile layouts, animation, hover states, form validation, and dark mode are not represented in the supplied material. The careers page job listing interactions—including filter dropdown behavior and application flows—are described structurally but not functionally. Saans Vftrial is present in source files but does not appear in the visible interface. Measurements are derived from the exact values present in the interface records.
