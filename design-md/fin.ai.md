# How fin.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/fin.ai-design)

Last updated: 2026-08-10

## Captured pages

[![FAQs section with accordion questions and answers on a clean white background using Saans typography](https://pin.fontofweb.com/9648?format=jpg)](https://design.withfudge.com/share/pin-9648)

[FAQs section with accordion questions and answers on a clean white background using Saans typography](https://design.withfudge.com/share/pin-9648)

[![Customer testimonial block with orange highlighted quote text and portrait photo on warm off-white background](https://pin.fontofweb.com/9647?format=jpg)](https://design.withfudge.com/share/pin-9647)

[Customer testimonial block with orange highlighted quote text and portrait photo on warm off-white background](https://design.withfudge.com/share/pin-9647)

[![Three-column pricing tier cards showing year-over-year discounts with large display numerals on warm cream cards](https://pin.fontofweb.com/9646?format=jpg)](https://design.withfudge.com/share/pin-9646)

[Three-column pricing tier cards showing year-over-year discounts with large display numerals on warm cream cards](https://design.withfudge.com/share/pin-9646)

[![Hero section with abstract gradient mesh artwork, navigation bar, and footer with multi-column link groups](https://pin.fontofweb.com/9645?format=jpg)](https://design.withfudge.com/share/pin-9645)

[Hero section with abstract gradient mesh artwork, navigation bar, and footer with multi-column link groups](https://design.withfudge.com/share/pin-9645)

## Overview

Fin.ai presents a sophisticated, editorial visual system that balances technical authority with approachable warmth. The design employs a restrained palette of warm off-whites and deep blacks, creating high-contrast readability while avoiding sterile corporate coldness. A distinctive type pairing anchors the identity: Serrif and Ivory Ll provide elegant, light-weight display typography for headlines, while Saans and Ll families handle functional body text and navigation with clean geometric precision. The overall composition favors generous whitespace, measured pacing between sections, and subtle surface variations that distinguish content areas without relying on heavy borders or shadows. Component surfaces range from pure white to warm cream and parchment tones, establishing gentle hierarchy through temperature shifts rather than dramatic value jumps. The system supports both light marketing pages and dark immersive experiences, with a consistent structural rhythm that carries across product, pricing, and program pages.

## Colors

The color system operates on a principle of warm neutrality: surfaces progress from pure white through cream and parchment tones, while text remains predominantly deep black with selective accent use.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, icons, primary button fills |
| muted-ink | #111111 | Secondary headings, footer links on dark surfaces |
| canvas | #FFFFFF | Primary page background, hero sections |
| warm-canvas | #FAF9F6 | Alternate page background, testimonial sections |
| surface | #F4F3EC | Card backgrounds, elevated panels, pricing tiers |
| warm-surface | #EAE6DC | Footer backgrounds, deep surface layers |
| border | #D3CEC6 | Card borders, dividers, hairline rules |
| hairline | #C5C5C1 | Subtle separators, table rules, disabled borders |
| accent | #FF5600 | Highlighted text backgrounds, active states, CTAs |
| deep-ink | #020917 | Dark mode backgrounds, immersive sections |
| dark-surface | #080F1E | Deep panels, code blocks, dark cards |

The warm surface family creates a subtle progression from pure white through cream to parchment, used to separate content areas without introducing color complexity. The accent orange appears sparingly as a text highlight background for testimonials and key statements, never as a primary button fill. Dark mode surfaces employ deep navy-blacks rather than pure black, maintaining warmth even in low-light presentations. Border colors are consistently desaturated warm grays that harmonize with the cream surfaces rather than contrasting sharply against them.

## Typography

The type system pairs editorial serifs for display with geometric sans-serifs for functional text, creating a voice that is simultaneously technical and refined.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Serrif | 6.25rem | 300 | 0.95 | -0.046em | Homepage hero headlines, brand statements |
| section-display | Ivory Ll | 4.5rem | 300 | 1 | -0.056em | Section headlines, model pages, feature headers |
| medium-display | Ll-300 | 2.5rem | 300 | 1.08 | -0.03em | Subsection titles, stat displays, pricing numerals |
| body | Saans | 1rem | 400 | 1.5 | normal | Paragraphs, descriptions, general content |
| body-large | Saans | 1.125rem | 400 | 1.4 | -0.01em | Lead paragraphs, featured descriptions |
| label | Aeonik Fono | 0.6875rem | 400 | 1.27 | 0.137em | Category labels, eyebrow text, metadata |
| navigation | Ll | 1rem | 400 | 1 | -0.025em | Nav links, buttons, compact UI text |
| mono-label | Saans Mono | 0.6875rem | 400 | 1.27 | 0.137em | Technical labels, code references, data tags |

Serrif (designer unspecified, vendor unspecified) serves as the primary display face for the most expressive brand moments, set at a light weight with tight negative tracking. Ivory Ll and Ll-300 (designers unspecified, vendors unspecified) provide the workhorse display typography for section headers and medium-scale headlines, offering a clean geometric sans with an elegant light weight. Saans, designed by Martin Vácha and available from Displaay Type Foundry Sro, handles all body text with neutral readability. Aeonik Fono, designed by Mark Bloom and available from Co Type Foundry, provides the distinctive uppercase label style with wide tracking. Saans Mono, also by Martin Vácha at Displaay Type Foundry Sro, serves technical and data contexts. The system also includes Applesystem, Ll-600, System-Systemui, and System-Uisansserif as registered families in the source. Verify licensing for these families before production use.

## Layout

The layout system employs a consistent structural rhythm across all page types, with generous section spacing and a clear content hierarchy.

Page sections use vertical padding of 5rem for standard sections, expanding to 10rem for hero areas and major transitions. Horizontal padding follows a responsive scale: 1rem on narrow viewports, 1.5rem on standard desktop, and expanding to 3rem for wide presentations. Content containers center with maximum widths that vary by purpose—marketing content typically spans approximately 73rem while technical documentation and model pages may use narrower reading widths around 62rem.

The grid system relies on flexible column arrangements with consistent gap spacing. Standard content gaps measure 1.5rem, while tighter component groupings use 1rem. Card grids and feature lists frequently employ three-column layouts on desktop, collapsing to single column on narrow viewports. The navigation system uses a split composition with logo and primary actions left-aligned, utility links right-aligned, and a centered navigation group that maintains visual balance.

Section backgrounds alternate between canvas, warm-canvas, and surface tones to create visual rhythm without requiring heavy separators. Gradients appear sparingly as fade overlays on hero imagery, typically running from surface-color to transparent in either horizontal or vertical directions. Radial dot patterns provide subtle texture on technical sections, using low-opacity black on warm surfaces.

## Visual language

The visual character of Fin.ai emerges from its disciplined restraint and typographic confidence. Photography and illustration follow an editorial approach—portraits appear in natural light with minimal styling, while abstract imagery favors soft gradient meshes and organic forms in warm coral, mint, and lemon tones against cream backgrounds.

Iconography remains minimal and functional, typically using simple arrow indicators for links and chevrons for expandable content. The accent orange appears only as a text highlight background, creating a marker-pen effect that draws attention to customer quotes and key statements without overwhelming the neutral palette.

Surface treatments favor subtlety: cards use the warm-surface background with no visible border, relying on background color contrast to define edges. When borders are necessary, they employ 1px solid rules in the border or hairline colors. Rounded corners appear consistently at 1.5rem for major panels and cards, with smaller 0.375rem rounding for buttons and compact elements.

The overall density is low, with generous line heights and paragraph spacing that prioritizes scanning and readability. Text blocks rarely exceed comfortable reading widths, and display typography frequently breaks across multiple lines to maintain large scale without cramped composition.

## Components

### Navigation Bar

The navigation bar presents a split composition with the Fin logo left-aligned, a centered cluster of primary navigation links, and right-aligned utility actions including "Log in," "Contact sales," and "Start free trial." The "View demo" button uses a filled black background with white text, while "Intercom" appears as a text link with an external arrow indicator.

- **Surface**: Transparent on light pages, blending with canvas or warm-canvas backgrounds
- **Typography**: Navigation token for links, label token for compact indicators
- **Spacing**: 0.75rem vertical padding, horizontal padding matching page gutters
- **Shape**: No border radius on the bar itself; individual buttons use 0.375rem rounding
- **Composition**: Flex row with space-between alignment; navigation links grouped with 0.625rem gaps

### Hero Section

The hero section combines large display typography with abstract gradient mesh artwork. Headlines use the hero-display or section-display tokens, frequently breaking across two lines with natural phrase breaks. Supporting text uses body-large at a slightly muted weight. Primary and secondary actions appear as a button pair, with the primary action filled black and the secondary as an outlined or text-only variant.

- **Surface**: Canvas or warm-canvas background; artwork overlays using multiply or soft-light blending
- **Typography**: hero-display for homepage, section-display for interior pages
- **Spacing**: 10rem top padding, 6rem bottom padding, content constrained to reading width
- **Shape**: Full-width section with no border radius
- **Composition**: Centered text alignment with buttons below; artwork positioned as background layer

### Pricing Tier Cards

Pricing cards present tiered information in equal-width columns, each with a warm-surface background and generous internal padding. A label token identifies the tier name, followed by a medium-display price or discount figure, then body text describing inclusions. A text link with arrow provides the primary action.

- **Surface**: warm-surface background, no visible border
- **Typography**: label for tier name, medium-display for price, body for description
- **Spacing**: 2rem internal padding, 1rem gap between cards
- **Shape**: 1.5rem border radius
- **Composition**: Three-column grid on desktop, stacking vertically on narrow viewports

### Testimonial Block

The testimonial section features a large quotation with selective orange highlighting on key phrases. The quote uses section-display sizing with normal weight. Attribution appears below with a name and title in body size, plus a company logo with arrow link. A portrait photograph anchors the right side of the composition.

- **Surface**: warm-canvas or surface background
- **Typography**: section-display for the quote, body for attribution
- **Color**: accent background on highlighted text spans, ink for remaining text
- **Spacing**: 5rem vertical padding, generous margin between quote and attribution
- **Composition**: Asymmetric layout with text left and portrait right, portrait typically occupying 30-40% of width

### FAQ Accordion

FAQ items present as a vertical stack with full-width rows. Each question uses body-large typography with a disclosure arrow right-aligned. Expanded answers reveal body text with comfortable line length. Rows separate with 1px solid borders in border color.

- **Surface**: Transparent, inheriting page background
- **Typography**: body-large for questions, body for answers
- **Border**: 1px solid border top and bottom, creating continuous horizontal rules
- **Spacing**: 1.25rem vertical padding per row, 1.5rem between question and answer
- **Shape**: No border radius; full-bleed horizontal rules
- **Composition**: Two-column layout with "FAQs" heading left-aligned, accordion right-aligned

### Footer

The footer organizes links into multiple columns grouped by category, with a label token heading each column. Links use body size with normal weight. A chat input field appears as a floating pill above the footer on some pages. The footer background matches warm-surface or surface depending on page context.

- **Surface**: warm-surface or surface background
- **Typography**: label for column headings, body for links
- **Spacing**: 4.5rem top padding, 2.25rem bottom padding, 1.5rem column gaps
- **Composition**: Multi-column grid with 5-6 categories, links stacked vertically with 0.25rem gaps

### Primary Button

The primary button uses a filled black background with white text and compact padding. A small arrow or icon may appear at the right edge with a 0.25rem gap from text.

- **Surface**: ink background, canvas text
- **Typography**: navigation token
- **Spacing**: 0.5rem vertical padding, 0.75rem horizontal padding; icon gap 0.25rem
- **Shape**: 0.375rem border radius
- **States**: Default filled; hover may invert to outlined

### Secondary Button

The secondary button appears as an outlined variant with 1px solid border in ink, transparent background, and ink text. Used for less prominent actions alongside primary buttons.

- **Surface**: Transparent background, ink border and text
- **Typography**: navigation token
- **Border**: 1px solid ink
- **Spacing**: Matching primary button
- **Shape**: 0.375rem border radius

## Responsive behavior

The design maintains its editorial character across viewport sizes through proportional scaling and strategic simplification. Display typography scales down by approximately 25-35% on tablet and 40-50% on mobile, preserving the light weight and tight tracking that defines the brand voice. Multi-column layouts transition to single column at approximately 48rem viewport width, with card grids stacking vertically and navigation collapsing to a menu trigger.

Section padding reduces proportionally: 10rem hero padding becomes 6rem on tablet and 4rem on mobile. Horizontal page gutters maintain 1rem minimum throughout all sizes. The FAQ accordion shifts from a two-column layout to full-width single column on narrow viewports, with the section heading appearing above rather than beside the content.

Navigation transforms to a simplified header with hamburger menu on mobile, preserving the "View demo" and "Start free trial" actions as visible buttons while collapsing category links into a drawer. Footer columns stack vertically on mobile, maintaining category groupings but presenting as a single scrollable list.

## Practical implementation guidance

### Preserve
- The warm off-white surface progression from canvas through surface to warm-surface; this temperature variation is central to the brand identity
- The light-weight display typography with negative tracking; substituting heavier weights or looser tracking will lose the refined editorial quality
- The selective orange text highlight for testimonials and key statements; this should remain the only prominent color accent
- The generous whitespace and low information density; crowding components will undermine the premium positioning
- The 1.5rem border radius on cards and panels; this roundedness softens the technical precision of the typography

### Avoid
- Pure white backgrounds paired with pure black text without warm intermediates; this creates a harsher contrast than the intended system
- Additional accent colors beyond the specified orange; the palette is intentionally restrained
- Heavy drop shadows or dimensional effects; surfaces should read as flat with color-defined edges
- Tight line heights on body text; the 1.5 ratio is essential for readability at the specified sizes
- Underlined text links outside of body content; navigation and buttons should rely on color and position rather than decoration

### Recommended Build Order
1. Establish the type system with all font families loaded, verifying that Serrif and Ivory Ll render correctly at light weights
2. Implement the surface color progression as CSS custom properties, testing the warm tones against actual content
3. Build the navigation component with its split composition and responsive collapse behavior
4. Create the hero section with display typography and abstract background treatment
5. Develop card components for pricing and features with consistent padding and radius
6. Add the FAQ accordion with proper border treatment and expand/collapse states
7. Implement the footer with multi-column link groups and responsive stacking
8. Apply the testimonial block with orange highlight spans and asymmetric layout

### Accessibility
- Ensure the light-weight display typography meets contrast requirements; the 300 weight on large sizes may need verification at smaller viewport scales
- Provide visible focus indicators for all interactive elements; the minimal button styling should not rely solely on color change
- Maintain the 1.5 line height as a minimum for body text to support readers with dyslexia or low vision
- Use the accent orange only as a background highlight, never as the sole color conveying meaning; pair with weight or position changes
- Test the warm surface colors against both black and white text to ensure sufficient contrast ratios across all surface variants

## Scope note

This guide covers the marketing and product marketing surfaces of Fin.ai including the homepage, pricing, model pages, and program pages. Dark mode immersive experiences, interactive demos, and authenticated application interfaces are not fully represented in the supplied material. Motion behavior, hover states, loading sequences, and form validation patterns should be developed with additional research. Measurements are based on extracted values from the desktop viewport range.
