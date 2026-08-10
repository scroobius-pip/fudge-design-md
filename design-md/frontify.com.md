# How frontify.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/frontify.com-design)

Last updated: 2026-08-10

## Captured pages

[![Pricing page hero with 'A fair approach to pricing' display type and three value proposition cards with dark icons on warm gray surfaces](https://pin.fontofweb.com/6111?format=jpg)](https://design.withfudge.com/share/pin-6111)

[Pricing page hero with 'A fair approach to pricing' display type and three value proposition cards with dark icons on warm gray surfaces](https://design.withfudge.com/share/pin-6111)

[![Homepage hero showing 'The complete brand-building platform' with product navigation list and dark device mockup on light gray background](https://pin.fontofweb.com/6110?format=jpg)](https://design.withfudge.com/share/pin-6110)

[Homepage hero showing 'The complete brand-building platform' with product navigation list and dark device mockup on light gray background](https://design.withfudge.com/share/pin-6110)

[![FAQ section with large display heading, dark pill button, and accordion questions with chevron indicators on warm off-white](https://pin.fontofweb.com/6109?format=jpg)](https://design.withfudge.com/share/pin-6109)

[FAQ section with large display heading, dark pill button, and accordion questions with chevron indicators on warm off-white](https://design.withfudge.com/share/pin-6109)

[![Customer testimonial cards featuring Nestlé and Emperor logos with quotes on muted sage-gray backgrounds and circular navigation arrows](https://pin.fontofweb.com/6108?format=jpg)](https://design.withfudge.com/share/pin-6108)

[Customer testimonial cards featuring Nestlé and Emperor logos with quotes on muted sage-gray backgrounds and circular navigation arrows](https://design.withfudge.com/share/pin-6108)

## Overview

Frontify presents itself as a sophisticated brand-management platform through an editorial visual language that balances restraint with warmth. The system relies on a near-black ink against warm off-white and muted sage-gray surfaces, creating a reading experience that feels premium without being cold. Large display typography in a light-weight serif sets an authoritative tone, while a clean sans-serif handles functional text at a consistent 18px size. The interface avoids decorative excess: rounded cards contain feature explanations, pill buttons invite action, and generous horizontal margins center content in a calm, focused column. Every element serves the narrative of clarity and professionalism that a brand-management tool demands.

## Colors

The palette is intentionally narrow, built around warmth and contrast rather than variety. The near-black ink provides maximum legibility, while the warm grays prevent sterility.

| token | hex | use |
|---|---|---|
| ink | #111110 | Primary text, headings, icons, primary button backgrounds |
| muted-ink | #575753 | Secondary text, captions, attribution lines |
| canvas | #F0F0EB | Page background, main surface behind content |
| surface | #E1E1DB | Card backgrounds, testimonial panels, elevated containers |
| white | #FFFFFF | Button text on dark backgrounds, occasional contrast surfaces |

The light mode dominates all visible pages: canvas serves as the ground, surface as the elevated plane, and ink as the figure. There is no dark mode in the captured interface. The warm cast of canvas and surface—slightly yellow-green rather than neutral gray—gives the brand a tactile, paper-like quality that distinguishes it from cooler tech aesthetics. Accent colors appear only within product screenshots and photography, never as interface chrome. The muted-ink token appears sparingly, reserved for attribution text and secondary labels where full ink would feel too heavy.

## Typography

Three supplied font families drive the typographic hierarchy. By Andrej Sevcik provides the display voice with a light weight and tight leading, giving headlines an elegant, almost classical presence. Abc Diatype handles all functional text—body, navigation, labels—in a single regular weight, creating consistency through size and context rather than weight variation. By Johannes Breyer Fabian Harb Elias Hanzer Renan Rosatti Erkin Karamemet appears in bold at 14px for small emphatic labels such as tag-style text and compact UI callouts.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | By Andrej Sevcik | 7.5rem | 300 | 1.0 | normal | Homepage hero headlines, major section openers |
| section-display | By Andrej Sevcik | 4rem | 300 | 1.0 | normal | Page titles, pricing hero, FAQ heading |
| subhead-display | By Andrej Sevcik | 2rem | 300 | 1.3 | normal | Product feature names, medium emphasis headings |
| body | Abc Diatype | 1.125rem | 400 | 1.3 | normal | Paragraphs, descriptions, navigation items |
| body-large | Abc Diatype | 1.125rem | 400 | 1.35 | normal | Card descriptions with slightly more breathing room |
| label | Abc Diatype | 0.875rem | 400 | 1.0 | normal | Button text, compact UI labels |
| navigation | Abc Diatype | 1.125rem | 400 | 1.3 | normal | Header links, dropdown menus |
| legal-copy | By Johannes Breyer Fabian Harb Elias Hanzer Renan Rosatti Erkin Karamemet | 0.875rem | 700 | 1.3 | 0.01em | Small bold labels, tag-style text |

By Andrej Sevcik is designed by Andrej Sevcik. Abc Diatype and By Johannes Breyer Fabian Harb Elias Hanzer Renan Rosatti Erkin Karamemet are designed by Johannes Breyer, Fabian Harb, Elias Hanzer, Renan Rosatti, and Erkin Karamemet, and distributed by Dinamo. Verify licensing for these families before production use.

The type scale is restrained: display sizes jump dramatically from 2rem to 4rem to 7.5rem, while functional text clusters tightly around 14px and 18px. This creates clear separation between editorial voice and utilitarian information.

## Layout

The layout follows a centered content model with generous external margins and disciplined internal spacing. A consistent horizontal margin of 228px (14.25rem) frames content on both sides, creating a narrow, focused reading column on large screens. Within this column, grids use 12px gutters and compensate with negative margins to maintain flush edges.

Vertical rhythm is established through section spacing of 80px (5rem) between major blocks, with 24px (1.5rem) as the standard content gap. Cards and containers receive 24px internal padding. The header floats above the main content with its own padding rhythm—typically 12px vertical with 24px horizontal, sometimes tightening to 8px in compact states.

The grid system visible in the pricing page arranges three value cards in equal columns with 24px gutters. On the homepage, a split layout places navigation links in a left column while product imagery occupies the right, maintaining the same outer margins. FAQ sections use an asymmetric two-column layout: a wide left column carries the section heading and call-to-action, while the right column hosts stacked accordion items.

## Visual language

The visual character is editorial and restrained, evoking high-end print design translated to digital surfaces. Rounded corners appear on cards (8px) and buttons (32px, full pill), but never on images or display text containers. The pill shape for buttons—both primary dark and secondary light—creates a soft, approachable counterpoint to the sharp typography.

Icons appear as simple white glyphs on dark rounded squares within value cards, or as chevrons in accordion headers. There are no outlined icons, no gradients, no shadows, and no border treatments beyond the single-pixel top borders that separate FAQ items. Photography and product mockups sit within rounded containers that match the card radius, creating nested depth through tone rather than shadow.

The warm gray palette prevents the minimalism from feeling clinical. Testimonial cards in surface gray feel like premium paper stock. The overall impression is of a system designed for extended reading and careful consideration—appropriate for enterprise software positioning.

## Components

### Primary button
- **Anatomy**: Text label centered within a pill-shaped container
- **Surface**: Solid ink background with white text
- **Typography**: `{typography.label}` at 14px
- **Shape**: Full pill, 32px radius
- **Spacing**: 12px vertical padding, 24px horizontal padding
- **Composition**: Appears inline with headings or at the end of content blocks

### Secondary button
- **Anatomy**: Text label centered within a pill-shaped container
- **Surface**: White background with ink text, or transparent with ink text on light surfaces
- **Typography**: `{typography.label}` at 14px
- **Shape**: Full pill, 32px radius
- **Spacing**: 12px vertical padding, 24px horizontal padding
- **Variants**: Header navigation uses a compact pill with reduced padding; some instances show 18px text for emphasis

### Value card
- **Anatomy**: Rounded rectangle containing an icon square, heading, and description paragraph
- **Surface**: Surface gray background
- **Typography**: Heading in `{typography.subhead-display}` at 20px bold sans-serif; body in `{typography.body}` at 18px
- **Shape**: 8px radius
- **Spacing**: 24px internal padding, icon positioned top-left with generous space below
- **Composition**: Three cards in a row with 24px gutters, equal width

### FAQ accordion
- **Anatomy**: Question text with right-aligned chevron icon, expandable answer below
- **Surface**: Transparent, separated by 1px top borders in surface gray
- **Typography**: Question in `{typography.body}` at 18px; answer in same family with normal weight
- **Shape**: Full-width items, no radius
- **Spacing**: 32px vertical padding per item, 24px between question and answer when expanded
- **Composition**: Stacked vertically in right column of asymmetric layout

### Testimonial card
- **Anatomy**: Company logo top-left, large quote in display type, attribution line below
- **Surface**: Surface gray background
- **Typography**: Quote in `{typography.subhead-display}` at 32px light weight; attribution in `{typography.body}` at 18px muted-ink
- **Shape**: 8px radius
- **Spacing**: Generous internal padding, approximately 32px
- **Composition**: Cards appear in a horizontal scroll or carousel with partial next-card visibility; circular arrow buttons (32px, 1px ink border) for navigation

### Header navigation
- **Anatomy**: Logo left, text links center, utility links and buttons right
- **Surface**: Transparent or white background depending on page
- **Typography**: Links in `{typography.navigation}` at 18px; active items may use bold weight
- **Shape**: No radius on container; individual buttons use pill radius
- **Spacing**: 12px to 24px horizontal padding on nav items, 8px to 16px vertical
- **Composition**: Fixed or sticky top, full width with centered content column matching page margins

## Responsive behavior

The captured interface shows desktop layouts exclusively. The 228px outer margins suggest a large-screen optimization that will need adaptation for narrower viewports. At tablet widths, the three-column value card grid should collapse to a single column with maintained 24px gutters. The asymmetric FAQ layout should stack vertically, placing the heading above the accordion list.

The display type scale—particularly the 120px homepage hero and 64px section headings—will require reduction on smaller screens. A proportional reduction to 48px for section displays and 32px for subheadings would preserve hierarchy without overflow. The pill buttons and card radii can remain constant across breakpoints, as their relative sizing holds at smaller scales.

Navigation should collapse to a hamburger menu or simplified link list when the centered content column becomes too narrow to accommodate all items. The testimonial carousel should maintain horizontal scroll with snap points rather than converting to vertical stack, preserving the narrative of social proof.

## Practical implementation guidance

### Preserve
- The warm off-white canvas against near-black ink; this contrast defines the brand's premium character
- The strict typographic system with By Andrej Sevcik for display and Abc Diatype for functional text; do not introduce additional families
- Generous whitespace and the 228px outer margins on large screens; cramped layouts destroy the editorial calm
- The 8px card radius and 32px pill radius as consistent shape language
- Single-pixel borders in surface gray for separators rather than shadows or background color bands

### Avoid
- Cool grays or pure white backgrounds; they strip away the tactile warmth
- Multiple button styles beyond the two pill variants; the system gains clarity through restraint
- Drop shadows on cards or buttons; elevation is communicated through tone alone
- Underlined text links; navigation relies on color and position, not decoration
- Icon fonts treated as typography; use SVG icons within the rounded square containers

### Recommended build order
1. Establish the color tokens and apply canvas background to the document
2. Implement Abc Diatype at 18px/1.3 for all body text and navigation
3. Add By Andrej Sevcik for display headings, starting with section-display at 64px
4. Build the card component with 8px radius and surface background
5. Create pill buttons with 32px radius and the two color variants
6. Implement the centered content column with 228px outer margins
7. Add the grid system for value cards and asymmetric FAQ layout
8. Polish with testimonial cards and carousel navigation

### Accessibility
- The ink-on-canvas contrast exceeds WCAG AAA for normal text; maintain this pairing for all essential content
- Ensure the 14px label text in buttons meets AA standards against both ink and white backgrounds
- Chevron icons in accordions need aria-expanded states and keyboard activation
- Testimonial carousel requires visible focus indicators and pause controls for auto-advance
- The light weight of By Andrej Sevcik display type may need slight darkening or size increase for users with low vision; consider a medium weight if the family supports it

## Scope note

This guide covers the homepage and pricing page surfaces visible in the captured images. Mobile breakpoints, form interactions, dropdown menus, loading states, and dark mode are not represented. Motion behavior for the testimonial carousel and accordion expand/collapse is not documented. The family label By Andrej Sevcik-11830113147103886438 appears in the source files but is not distinguished from By Andrej Sevcik in the visible interface; both refer to the same display typeface.
