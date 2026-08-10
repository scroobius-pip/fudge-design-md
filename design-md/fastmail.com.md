# How fastmail.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/fastmail.com-design)

Last updated: 2026-08-10

## Captured pages

[![Blog index page with deep blue hero banner, white search bar, and three-column article grid with author avatars and category tags](https://pin.fontofweb.com/2861?format=jpg)](https://design.withfudge.com/share/pin-2861)

[Blog index page with deep blue hero banner, white search bar, and three-column article grid with author avatars and category tags](https://design.withfudge.com/share/pin-2861)

[![FAQ accordion section with bold question labels, expand/collapse chevrons, and clean horizontal dividers on white background](https://pin.fontofweb.com/2860?format=jpg)](https://design.withfudge.com/share/pin-2860)

[FAQ accordion section with bold question labels, expand/collapse chevrons, and clean horizontal dividers on white background](https://design.withfudge.com/share/pin-2860)

[![Pricing feature comparison table with blue primary action buttons, green checkmarks, and colored plan header bars](https://pin.fontofweb.com/2859?format=jpg)](https://design.withfudge.com/share/pin-2859)

[Pricing feature comparison table with blue primary action buttons, green checkmarks, and colored plan header bars](https://design.withfudge.com/share/pin-2859)

[![Full pricing page with cream hero background, tabbed plan selector, three pricing cards with per-month costs and detailed feature lists](https://pin.fontofweb.com/2858?format=jpg)](https://design.withfudge.com/share/pin-2858)

[Full pricing page with cream hero background, tabbed plan selector, three pricing cards with per-month costs and detailed feature lists](https://design.withfudge.com/share/pin-2858)

## Overview

Fastmail's design system presents a trustworthy, approachable visual language for an email and calendar service. The system balances warmth with professionalism through a cream-toned canvas background, deep blue action elements, and a clear typographic hierarchy that guides users through pricing decisions and content discovery. The design prioritizes readability and conversion, with generous whitespace, confident display typography for headlines, and structured data presentation in pricing tables and FAQ sections. Two font families create distinct roles: Wotfard serves display and headline text with a friendly, slightly rounded character, while Proxima Nova handles body copy, labels, and navigation with clean geometric clarity. The overall impression is of a mature, reliable service that values user privacy and simplicity without feeling austere.

## Colors

The color palette centers on warmth and trust, using cream backgrounds to soften the clinical feel typical of tech services while maintaining blue as the primary action color for familiarity and confidence.

| token | value | use |
|---|---|---|
| action | #0066CC | Primary buttons, links, active tab indicators, and interactive accents |
| action-hover | #0052A3 | Darker blue for button hover states and link underlines |
| ink | #1A1A1A | Primary text, headings, and strong content |
| muted-ink | #666666 | Secondary text, descriptions, captions, and metadata |
| canvas | #F5F0E8 | Page background, hero sections, and pricing page header area |
| surface | #FFFFFF | Cards, panels, input fields, and content containers |
| border | #E5E5E5 | Dividers, card borders, table rules, and subtle separators |
| success | #2D8A4E | Feature checkmarks, confirmation states, and positive indicators |
| accent-warm | #E8A87C | Decorative accents, illustration highlights, and warm visual interest |

The canvas color creates a distinctive warm foundation that separates Fastmail from cooler, more generic SaaS competitors. White surfaces provide clean contrast for readable content areas. The action blue is saturated enough to command attention without feeling aggressive. Green checkmarks in pricing tables provide immediate visual confirmation of included features. The warm accent appears in illustrations and decorative elements, adding personality without competing with functional colors.

## Typography

Fastmail uses two font families with clear role separation. Wotfard carries display and headline duties with a friendly, contemporary feel. Proxima Nova, designed by Mark Simonson and available from Mark Simonson Studio LLC, handles all body text, labels, and navigation with proven geometric clarity. The design facts identify four specific font sources: By Mark Simonson-12163226078811677034 (Proxima Nova Regular), By Mark Simonson-15846924265813753846 (Proxima Nova Bold), Proxima Nova-Semibold, and Wotfard-Regular. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Wotfard | 3rem | 400 | 1.1 | -0.02em | Page titles, major section headers, pricing hero |
| section-display | Wotfard | 2rem | 400 | 1.2 | -0.01em | Subsection headings, feature titles |
| price-display | Wotfard | 2.5rem | 400 | 1.1 | -0.02em | Pricing amounts, numerical highlights |
| body | Proxima Nova | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, general content |
| body-bold | Proxima Nova | 1rem | 700 | 1.6 | 0 | Emphasized body text, FAQ questions, strong labels |
| label | Proxima Nova | 0.875rem | 600 | 1.4 | 0.01em | Buttons, tags, category labels, small headings |
| navigation | Proxima Nova | 0.875rem | 400 | 1.4 | 0 | Top navigation, secondary links, metadata |

The type scale uses a 4px relative unit, with sizes snapping to whole multiples. Display sizes employ negative letter spacing for tighter, more impactful headlines. Body text maintains generous line height for comfortable reading in longer passages. The label size with semibold weight creates clear hierarchy for interactive elements without requiring larger dimensions.

## Layout

The layout system follows a centered, contained approach with clear content zones and responsive-friendly structure.

Page containers center content with maximum widths appropriate to the content type. Pricing tables and feature comparisons use full-width layouts on desktop, while blog grids and general content follow narrower reading measures. The header navigation spans the full width with internal containment.

Section spacing uses 5rem vertical padding for major content breaks, creating breathing room between functional areas. Content gaps of 1.5rem separate related elements within sections. Card-based layouts, such as pricing plans and blog articles, use consistent internal padding of 2rem.

The pricing page demonstrates a layered layout structure: a warm cream hero area with centered title and icon row, followed by a white content area with tabbed plan selector, then three equal-width pricing cards with detailed feature lists below. This progressive disclosure allows users to understand plan tiers before examining granular features.

Grid systems visible in the blog index use three-column layouts for article cards, with consistent aspect ratio thumbnails and aligned text baselines. The FAQ section uses a single-column stack with full-width items and right-aligned expand controls.

## Visual language

Fastmail's visual character combines approachable warmth with functional clarity. Illustrations and icons use a friendly, slightly rounded style with blue and warm accent colors against cream or white backgrounds. The blog header features a deep blue gradient with subtle geometric shapes, creating depth without distraction.

Iconography appears as simple, recognizable symbols: envelope for email, calendar grid for scheduling, person silhouettes for user counts, and cloud for file storage. These icons use the action blue or muted ink colors, maintaining consistency with the text palette.

Photography and illustration treatments favor clean, modern styles with ample whitespace. Blog article thumbnails show interface screenshots, conceptual illustrations, and event graphics with consistent rounded corners. Author avatars appear as small circular portraits with name and title labels.

The pricing page uses color-coded plan headers with thin top borders in distinct hues—blue for Individual, purple-tinted blue for Duo, and warm coral for Family—providing immediate visual differentiation without overwhelming the comparison.

Shadows are minimal and subtle, with pricing cards showing only faint elevation against the white background. The design relies more on borders and background color shifts than on dimensional effects.

## Components

### Primary action button

- **Anatomy**: Text label centered within a solid rectangular button
- **Surface**: Background uses action blue; text uses white
- **Typography**: label token, semibold weight
- **Shape**: Small border radius of 0.25rem, creating slight rounding without pill shape
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Full-width within card containers on pricing plans, intrinsic width in navigation
- **Variants**: Default state shows solid blue; hover should darken to action-hover

### Pricing card

- **Anatomy**: Plan name with user count, description, price block, primary action button, and detailed feature list
- **Surface**: White background with subtle border; colored top accent bar
- **Typography**: Plan name uses section-display; price uses price-display with "per month" label in body size; features use body with icon prefixes
- **Shape**: 0.5rem border radius on corners
- **Spacing**: 2rem internal padding; 1.5rem gaps between major sections
- **Composition**: Equal-width columns in a three-column grid; feature lists align across cards for easy comparison
- **Variants**: Individual plan uses blue accent; Duo uses purple-tinted accent; Family uses warm coral accent

### FAQ accordion item

- **Anatomy**: Question text with right-aligned chevron icon; expandable answer area below
- **Surface**: Transparent background with bottom border divider
- **Typography**: Question uses body-bold; answer uses body
- **Shape**: Full-width item with 1px border-bottom in border color
- **Spacing**: Generous vertical padding, approximately 1.5rem per item
- **Composition**: Stacked vertically in single column; chevron rotates to indicate expanded state
- **Variants**: Collapsed shows down chevron; expanded shows up chevron with answer text revealed

### Blog article card

- **Anatomy**: Thumbnail image, title, excerpt, author avatar with name and role, category tags
- **Surface**: White or transparent background; tags use light blue tinted background
- **Typography**: Title uses section-display at smaller size or body-bold; excerpt uses body; author name uses label; category tags use label in action color
- **Shape**: Thumbnail corners rounded at 0.5rem; author avatar circular
- **Spacing**: 1.5rem gap between image and text; 0.75rem between author avatar and name
- **Composition**: Vertical stack within grid cell; tags appear as horizontal row below author

### Search input

- **Anatomy**: Text field with search icon prefix and placeholder text
- **Surface**: White background with border
- **Typography**: body token for input text
- **Shape**: 0.25rem border radius
- **Spacing**: Internal padding approximately 0.75rem vertical, 1rem horizontal with icon inset
- **Composition**: Full-width within content container, appearing below hero areas

## Responsive behavior

The design should adapt gracefully from desktop to smaller viewports. The three-column pricing card layout should stack vertically on narrow screens, with each card becoming full-width and maintaining internal structure. The blog grid should reduce from three columns to two, then single column, with thumbnails maintaining aspect ratio.

The FAQ accordion remains functionally identical across breakpoints, though touch targets should expand for comfortable mobile interaction. Navigation should collapse to a hamburger menu or simplified structure on mobile, though this pattern is not visible in the supplied images.

Pricing table comparisons become challenging on narrow screens; consider horizontal scroll or stacked feature lists per plan as alternatives. The tabbed plan selector should remain accessible, possibly converting to a dropdown or swipeable tabs on mobile.

## Practical implementation guidance

### Preserve
- The warm cream canvas background as a distinctive brand element
- The two-family typographic system with Wotfard for display and Proxima Nova for body
- Generous whitespace and section padding for breathable layouts
- Color-coded plan accents in pricing for instant tier recognition
- Circular author avatars with name and role labels in blog contexts

### Avoid
- Replacing the cream background with stark white across all surfaces; maintain the warm/cool contrast
- Using Wotfard for body text or long paragraphs; reserve it for display sizes
- Removing borders from pricing cards; the subtle definition aids scannability
- Cluttering pricing cards with excessive feature detail above the fold
- Using generic checkmark colors; the specific green reinforces positive associations

### Recommended build order
1. Establish the color tokens and typographic scale with both font families
2. Build the page shell with header navigation and cream canvas background
3. Implement the pricing card component with all variants and responsive stacking
4. Create the FAQ accordion with expand/collapse behavior
5. Add the blog card grid with author attribution and category tags
6. Polish with icon integration, focus states, and hover transitions

### Accessibility
- Ensure all interactive elements meet minimum 4.5:1 contrast ratios; the action blue on white passes, but verify against cream backgrounds
- Provide visible focus indicators for keyboard navigation, particularly on tabbed interfaces and accordion controls
- Use semantic heading hierarchy with Wotfard display sizes mapping to h1-h2 levels
- Include aria-expanded attributes on FAQ items and aria-selected on plan tabs
- Maintain touch targets of at least 44px for mobile accordion chevrons and buttons

## Scope note

This guide covers the marketing site surfaces visible in the supplied images: the blog index, pricing page with plan comparison, and FAQ section. The account dashboard, mobile applications, email client interface, and checkout flows are not represented. Measurements are practical adaptation targets derived from visual inspection of the desktop layouts shown.
