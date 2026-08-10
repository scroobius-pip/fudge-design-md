# How nytimes.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/nytimes.com-design)

Last updated: 2026-08-10

## Captured pages

[![Subscription onboarding page with centered offer card, black primary action button, and legal footer on white canvas](https://pin.fontofweb.com/1324?format=jpg)](https://design.withfudge.com/share/pin-1324)

[Subscription onboarding page with centered offer card, black primary action button, and legal footer on white canvas](https://design.withfudge.com/share/pin-1324)

[![Account login modal with email field, black Continue button, and social sign-in options separated by hairline divider](https://pin.fontofweb.com/1314?format=jpg)](https://design.withfudge.com/share/pin-1314)

[Account login modal with email field, black Continue button, and social sign-in options separated by hairline divider](https://design.withfudge.com/share/pin-1314)

[![Gift subscriptions page with dark purple background, product tier list with circular icons, and white action buttons](https://pin.fontofweb.com/60?format=jpg)](https://design.withfudge.com/share/pin-60)

[Gift subscriptions page with dark purple background, product tier list with circular icons, and white action buttons](https://design.withfudge.com/share/pin-60)

[![Gift subscription plan card with cream background, coral BEST VALUE badge, and checkmark feature list](https://pin.fontofweb.com/59?format=jpg)](https://design.withfudge.com/share/pin-59)

[Gift subscription plan card with cream background, coral BEST VALUE badge, and checkmark feature list](https://design.withfudge.com/share/pin-59)

## Overview

The New York Times digital experience balances the authority of a historic publication with the clarity demanded by modern subscription and authentication flows. The system operates across two distinct modes: a light editorial canvas for reading and account management, and a rich, dark theatrical surface for gift and promotional experiences. Typography drives the hierarchy, with condensed serif display faces commanding attention at large sizes while a neutral sans-serif handles all functional text, labels, and legal copy. The interface avoids decoration in favor of precise spacing, deliberate contrast, and restrained color application. Black serves as the primary action color across both modes, creating consistent affordances whether the background is white or deep purple. The result is a design that feels simultaneously contemporary and institutionally grounded, guiding users through subscription decisions and account access with quiet confidence.

## Colors

The palette is intentionally narrow, relying on contrast and surface variation rather than chromatic complexity. Black and white form the foundation, with a warm cream and coral accent expanding the system for promotional contexts. A deep purple-dark surface creates dramatic separation for gift subscription experiences.

| token | value | use |
|---|---|---|
| ink | #121212 | Primary text, headlines, active states, primary button backgrounds |
| muted-ink | #333333 | Secondary text, descriptions, placeholder content |
| canvas | #ffffff | Default page background, card surfaces, input backgrounds |
| surface | #f6f6f6 | Subtle section backgrounds, footer areas, disabled states |
| dark-surface | #2a1f2d | Gift page backgrounds, theatrical promotional surfaces |
| cream | #fffaf0 | Featured plan cards, premium tier backgrounds |
| coral | #ff7f5c | Best-value badges, promotional highlights, accent markers |
| border | #e2e2e2 | Dividers, card outlines, input borders, hairline separators |
| action | #121212 | Primary button fill, active navigation, emphasized links |
| action-text | #ffffff | Text on primary buttons, inverted navigation items |

The light mode dominates authentication and standard subscription flows, presenting content on white with black text and minimal border definition. The dark mode inverts this relationship for gift subscriptions, placing cream cards and white text against the deep purple ground. Coral appears sparingly as an accent for value propositions, never competing with the primary black-and-white hierarchy. Borders remain light gray hairlines that recede visually while providing necessary structural separation.

## Typography

The system pairs a classical condensed serif family for display and headline use with a versatile sans-serif for all functional and body text. This combination preserves editorial gravitas while ensuring readability at small sizes and in dense legal contexts.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Nyt Cheltenham Condensed-Text Bold | 3rem | 700 | 1.05 | -0.01em | Page headlines, major offer titles, gift page headers |
| section-display | Nyt Cheltenham Condensed-Text Bold | 2rem | 700 | 1.1 | -0.01em | Card titles, section headers, plan names |
| body | Nyt Franklin | 1rem | 400 | 1.5 | 0 | Descriptions, feature explanations, form labels |
| body-small | Nyt Franklin | 0.875rem | 400 | 1.5 | 0 | Secondary descriptions, pricing details, metadata |
| label | Nyt Franklin | 0.75rem | 700 | 1.2 | 0.05em | Buttons, badges, category labels, uppercase treatments |
| navigation | Nyt Franklin | 0.875rem | 500 | 1.2 | 0.01em | Header links, utility navigation, sign-in prompts |
| legal-copy | Nyt Franklin | 0.75rem | 400 | 1.4 | 0 | Terms, privacy policy, cancellation details, footers |

Nyt Cheltenham Condensed-Text Bold appears exclusively for display settings, leveraging its compressed proportions and bold weight for impactful headlines without excessive vertical space. Nyt Franklin carries all functional communication across multiple weights, with Medium reserved for navigation and Bold for uppercase labels. The type scale builds from a 0.25rem grid unit, with sizes progressing in whole-number multiples: 0.75rem, 0.875rem, 1rem, 2rem, and 3rem. Verify licensing for these families before production use. Nyt Karnak Condensed, Fb, Tn, and Type families are present in the source but not assigned to visible roles in the captured interfaces.

## Layout

The layout system centers content within generous margins, using narrow maximum widths for focused tasks like authentication and subscription selection. Pages alternate between full-bleed dark surfaces and contained light panels depending on context.

The subscription onboarding page presents a single centered card approximately 28rem wide, floating on white with the masthead fixed above. This contained approach removes distraction and directs attention to the offer details and primary action. The gift subscription page expands to full viewport width with the dark purple background, then nests cream-colored plan cards within a centered column of similar maximum width. Feature lists within cards align to left margins with hanging checkmark icons, creating clean vertical rhythm.

Authentication modals and login screens employ the same centered narrow column, stacking form fields with consistent 1rem vertical spacing. Social sign-in options follow the primary action with equal visual weight, separated by horizontal hairline dividers with centered "or" text. The footer area on subscription pages spans full width with small legal copy, maintaining the narrow reading measure through centered text blocks.

Spacing follows a 0.25rem base unit, with component-level padding typically at 1.5rem and section breaks at 4rem. Cards receive 0.5rem corner radius while buttons use a tighter 0.25rem. Full-bleed dark surfaces extend to viewport edges, with inner content respecting the same centered constraints as light pages.

## Visual language

The visual character derives from restraint and typographic confidence rather than ornamental detail. Photography and illustration appear in promotional contexts—gift boxes with sparkles, product icons—while the interface itself remains clean and unadorned. The New York Times wordmark anchors the top of subscription pages in black against white, establishing immediate brand recognition without competing with page content.

Circular radio indicators and checkmarks provide the primary non-typographic visual elements. These simple geometric forms reinforce the system's clarity: filled circles for selected states, empty rings for unselected, and bold checkmarks for feature confirmation. The coral badge for "BEST VALUE" introduces the single warm accent, drawing attention through color temperature rather than size or motion.

Shadows are absent; depth is achieved through surface color contrast alone. The cream card against dark purple creates sufficient separation without elevation effects. Similarly, the white card against white page background relies on border definition rather than shadow for containment. This flat approach maintains the editorial seriousness of the brand while ensuring consistent rendering across devices.

Iconography is minimal and functional: payment provider logos appear at natural size within buttons, social sign-in icons sit beside text labels. No custom icon font is visible; the system relies on native form controls and simple SVG shapes.

## Components

### Primary Action Button

The primary button is the system's most consistent component, appearing identical across light and dark contexts. It fills the full width of its container on mobile and narrow columns, with fixed padding on wider breakpoints.

- **Anatomy**: Text label centered within rectangular container
- **Surface**: Solid black fill (#121212)
- **Typography**: Uppercase label token, white text, 0.75rem size with 0.05em tracking
- **Shape**: 0.25rem corner radius, no border
- **Spacing**: 0.875rem vertical padding, 1.5rem horizontal minimum
- **Composition**: Full-width in forms and cards, auto-width in feature rows

### Secondary Action Button

Used for alternative payment methods and social sign-in, the secondary button inverts the primary treatment.

- **Anatomy**: Icon and text label, or text alone, centered
- **Surface**: White fill, 1px solid border in light gray
- **Typography**: Same label token as primary, black text
- **Shape**: 0.25rem corner radius
- **Composition**: Stacked below primary with 0.75rem gap, equal height

### Offer Card

The subscription offer card contains pricing, description, and action in a contained unit.

- **Anatomy**: Header with plan name, body with pricing and billing details, expandable "What's Included" section, stacked action buttons
- **Surface**: White background, 1px light gray border, subtle border-radius
- **Typography**: Plan name in section-display, pricing in body with strikethrough original price, description in body-small
- **Shape**: 0.5rem corner radius
- **Spacing**: 1.5rem internal padding, 1rem between sections
- **Composition**: Centered on page, maximum width approximately 28rem

### Feature List

Checkmark lists appear within plan cards to enumerate included benefits.

- **Anatomy**: Leading checkmark icon followed by bold category name and regular description
- **Typography**: Body token for descriptions, with bold weight on category labels
- **Spacing**: 1rem between items, 0.5rem between icon and text baseline
- **Composition**: Left-aligned with consistent indent, hanging checkmark creates visual rhythm

### Input Field

Form inputs for authentication follow minimal styling.

- **Anatomy**: Label above, single-line text entry below
- **Surface**: White background, 1px light gray border
- **Typography**: Body token for input text, label token for field labels
- **Shape**: 0.25rem corner radius
- **Spacing**: 0.75rem vertical padding, 1rem horizontal padding, 0.5rem between label and input

### Badge

Promotional badges highlight value propositions.

- **Anatomy**: Uppercase text within pill shape
- **Surface**: Coral fill (#ff7f5c)
- **Typography**: Label token, black text for contrast
- **Shape**: Full pill with 9999px radius
- **Composition**: Positioned above or overlapping card headers

### Plan Card (Gift)

The featured gift subscription card uses an elevated surface treatment.

- **Anatomy**: Badge, tier name, headline price, action button, feature list
- **Surface**: Cream background (#fffaf0) against dark page
- **Typography**: Hero-display for headline, section-display for tier name, body for features
- **Shape**: 0.5rem corner radius
- **Composition**: Centered within dark surface, generous vertical padding

## Responsive behavior

The captured interfaces suggest a mobile-first approach with single-column layouts that maintain their structure at wider viewports. Authentication and subscription cards remain centered with fixed maximum widths rather than expanding to fill available space. This containment preserves readability and focus across device sizes.

On the gift subscription page, the dark background extends full-bleed while content stays within a centered column. The product tier list maintains its vertical stack with consistent row height, suggesting the same layout persists across breakpoints with adjusted padding. Buttons fill card widths on narrow screens and may shrink to content-width on desktop, though the captured images show predominantly full-width treatments.

Text scaling appears to use fixed rem values rather than fluid typography, with headlines remaining large and impactful on all sizes. The condensed serif display maintains legibility through its generous x-height and open counters even at reduced sizes. Implementation should ensure minimum touch targets of 44px for all interactive elements, with button heights exceeding this through padding.

## Practical implementation guidance

### Preserve
- The stark black-and-white hierarchy for all primary actions and text
- The classical serif display for headlines, maintaining its bold weight exclusively
- The generous whitespace around cards and within sections
- The uppercase label treatment for buttons and category markers
- The cream-and-coral pairing for featured promotional contexts
- The hairline border definition for cards and inputs rather than shadows

### Avoid
- Adding background colors or gradients to the light editorial canvas
- Using the display serif for body text or small sizes
- Introducing additional accent colors beyond the established coral
- Applying border-radius to buttons larger than the tight 0.25rem standard
- Shadow effects for elevation; rely on surface contrast instead
- Custom icon fonts; use simple geometric shapes or native controls

### Recommended Build Order
1. Establish the typographic foundation with Nyt Franklin body text and Nyt Cheltenham Condensed-Text Bold headlines
2. Implement the primary black button component with uppercase label styling
3. Build the centered card container with light gray border and 0.5rem radius
4. Add form input styling with matching border treatment
5. Create the dark surface variant for gift and promotional pages
6. Layer in the cream card and coral badge for featured plans
7. Refine spacing and vertical rhythm across all components

### Accessibility
- Ensure all text meets WCAG AA contrast ratios: black on white exceeds requirements, while cream backgrounds with black text should be verified
- Provide visible focus indicators for keyboard navigation, likely an outline offset from button and input borders
- Maintain the semantic heading hierarchy with h1 for page titles and descending levels for card content
- Use aria-label or visible text for icon-only elements like checkmarks in feature lists
- Ensure social sign-in buttons include accessible names that identify the provider and action

## Scope note

This guide covers subscription onboarding, authentication, and gift subscription surfaces as visible in the supplied images. The full New York Times homepage, article reading experience, games interfaces, and mobile-native applications are not represented. Navigation patterns beyond centered authentication headers, hover and focus states, loading skeletons, and error message styling are not included. Measurements are practical adaptation targets derived from visual inspection of the captured interfaces.
