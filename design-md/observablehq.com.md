# How observablehq.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/observablehq.com-design)

Last updated: 2026-08-10

## Captured pages

[![Top navigation with Resources dropdown menu showing three-column link layout and purple footer section with Learn more links](https://pin.fontofweb.com/1650?format=jpg)](https://design.withfudge.com/share/pin-1650)

[Top navigation with Resources dropdown menu showing three-column link layout and purple footer section with Learn more links](https://design.withfudge.com/share/pin-1650)

[![Sign up modal dialog with social authentication buttons, SSO and Email options, and terms agreement text](https://pin.fontofweb.com/1649?format=jpg)](https://design.withfudge.com/share/pin-1649)

[Sign up modal dialog with social authentication buttons, SSO and Email options, and terms agreement text](https://design.withfudge.com/share/pin-1649)

[![Purple grid background with three library cards for Observable Plot, D3, and Observable Framework with monospace headings](https://pin.fontofweb.com/1648?format=jpg)](https://design.withfudge.com/share/pin-1648)

[Purple grid background with three library cards for Observable Plot, D3, and Observable Framework with monospace headings](https://design.withfudge.com/share/pin-1648)

[![Split-screen layout with light notebook signup section and dark canvas demo section featuring data visualization screenshots](https://pin.fontofweb.com/1647?format=jpg)](https://design.withfudge.com/share/pin-1647)

[Split-screen layout with light notebook signup section and dark canvas demo section featuring data visualization screenshots](https://design.withfudge.com/share/pin-1647)

## Overview

Observable's design system serves a technical audience of data practitioners, visualization engineers, and analytics teams. The visual language balances editorial clarity with creative energy: clean sans-serif typography provides readable structure, while vibrant purple accents and monospace type treatments signal the platform's code-native identity. The interface alternates between light and dark section modes, creating visual rhythm across long product pages. Component patterns favor directness over decoration—buttons are rectangular with minimal radius, cards use flat color fields rather than shadows, and navigation organizes dense content into scannable column layouts. The overall impression is of a tool built by and for people who work with data: precise, approachable, and technically credible.

## Colors

The color system operates in three modes: a light editorial mode for reading and documentation, a dark immersive mode for product showcases, and a vibrant purple accent mode for brand expression and calls to action.

| token | value | use |
|---|---|---|
| canvas | #ffffff | Primary background for light sections, modal surfaces, dropdown panels |
| ink | #1a1a1a | Primary text, primary button backgrounds, dark section backgrounds |
| muted-ink | #666666 | Secondary text, descriptions, footer links on light backgrounds |
| action | #7b2cbf | Brand purple for library cards, footer sections, interactive highlights |
| action-hover | #5a1e8a | Darker purple for hover states on action elements |
| surface-dark | #1a1a1a | Dark section backgrounds for product showcases |
| surface-light | #f5f5f5 | Subtle off-white for alternating section backgrounds |
| border | #e5e5e5 | Hairline borders for navigation, dropdowns, cards |
| border-inverse | #333333 | Borders on dark backgrounds |

The light mode dominates editorial and navigation surfaces, providing maximum readability for documentation and marketing content. Dark sections appear as immersive breaks, typically showcasing product interfaces with screenshots that pop against the deep background. The purple accent color functions as the brand's signature: it fills large footer areas, backgrounds for open-source library promotions, and interactive highlights. No gradients appear in the interface; color transitions are handled through section breaks and flat fills.

## Typography

Two font families serve distinct roles: Inter handles all interface, editorial, and marketing text with its clean geometric clarity, while Spline Sans Mono provides technical credibility for code-related headings and developer-facing content.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 4rem | 700 | 1.1 | -0.02em | Homepage hero headlines |
| section-display | Inter | 2.5rem | 600 | 1.2 | -0.01em | Section headlines, feature titles |
| body | Inter | 1rem | 400 | 1.6 | 0em | Paragraphs, descriptions |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0em | Card descriptions, secondary content |
| label | Inter | 0.75rem | 500 | 1.4 | 0.05em | Category labels, uppercase section headers |
| navigation | Inter | 0.875rem | 500 | 1.4 | 0em | Nav links, buttons, dropdown items |
| technical-display | Spline Sans Mono | 2.5rem | 400 | 1.2 | -0.02em | Library section headings, code-related titles |
| technical-body | Spline Sans Mono | 1rem | 400 | 1.6 | 0em | Inline code, technical descriptions |
| legal-copy | Inter | 0.75rem | 400 | 1.5 | 0em | Terms text, modal footers |

Inter is designed by Rasmus Andersson and distributed by Rsms. Spline Sans Mono carries no attributed designer or vendor in the available records. Verify licensing for these families before production use.

Type scale follows a 4px relative unit. Display sizes use tight leading and negative tracking for editorial impact, while body text maintains generous line height for readability. Monospace headings appear in the library showcase section, where the technical typeface reinforces the code-native positioning of Observable's open-source tools.

## Layout

The layout system uses a content-max-width container of 75rem centered within the viewport, with sections separated by 6rem vertical padding. Navigation sits fixed at the top with a 3.5rem height and a hairline bottom border.

Page sections alternate between full-bleed light backgrounds and contained dark panels. The split-screen composition visible in the product showcase divides the viewport into two equal columns: light on the left for notebook signup, dark on the right for canvas demos. This pattern creates visual rhythm and allows each product to establish its own atmospheric context.

The dropdown navigation organizes links into three equal columns with 1.5rem gutters between groups. Each column carries a small-caps label at the top, followed by stacked link items. This pattern scales to accommodate dense information architecture without overwhelming the user.

Grid systems appear explicitly in the library showcase section, where a visible purple grid pattern overlays the background and cards align to an implicit three-column grid with consistent 1.5rem gaps. Cards maintain equal height through flexbox or grid alignment.

Responsive behavior should collapse the three-column dropdown into a single stacked column below medium breakpoints, and convert the split-screen sections into stacked full-width blocks. The navigation bar should remain fixed with a hamburger menu replacement for the dropdown on small viewports.

## Visual language

Observable's visual identity emerges from the tension between technical precision and creative expression. The interface avoids decorative flourishes in favor of structural clarity: rectangular buttons, flat cards, visible grid lines, and direct typography.

Photography and screenshots appear as realistic product captures rather than stylized illustrations. Data visualizations, code editors, and map interfaces are shown in their actual working state, reinforcing the platform's utility. These images sit within sections without heavy framing or shadows, often bleeding to the edge of their container.

The purple grid pattern in the library section is a distinctive brand element: a subtle geometric field that suggests plotting coordinates and data space without competing with content. This pattern appears at low opacity behind cards, creating depth through texture rather than shadow.

Iconography is minimal and functional. External links carry diagonal arrow indicators. Social authentication buttons display recognized brand marks. The close control on modals uses a simple X mark in a circular container. No custom icon set dominates the interface; the system relies on text labels and familiar platform icons.

Motion and interaction are implied by the static state but not visible in captures. The design suggests snappy transitions: modal appearances, dropdown expansions, and button state changes likely execute quickly without elaborate easing curves.

## Components

### Navigation bar

- **Anatomy**: Logo left, primary links center-left, utility links right, full-width dropdown on hover
- **Surface**: White background with 1px bottom border in border color
- **Typography**: Navigation token for links, label token for dropdown column headers
- **Shape**: Full width, 3.5rem height, no radius
- **Spacing**: Horizontal padding matches content container; dropdown panel has 1.5rem internal padding
- **Composition**: Flexbox row with space-between alignment; dropdown uses three-column grid
- **Variants**: Default state shows links in ink; hover state likely shifts to action purple

### Primary action button

- **Anatomy**: Text label with optional arrow icon
- **Surface**: Ink background, canvas text
- **Typography**: Navigation token, medium weight
- **Shape**: 0.25rem radius, rectangular with slight rounding
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Inline-flex with icon trailing after text
- **Variants**: Default (ink fill), inverse (canvas fill with ink text for dark backgrounds)

### Secondary action button

- **Anatomy**: Text label with optional arrow icon
- **Surface**: Canvas background, ink text, 1px border
- **Typography**: Navigation token
- **Shape**: 0.25rem radius
- **Spacing**: Matches primary button
- **Composition**: Inline-flex with icon trailing
- **Variants**: Used on light backgrounds where primary button would be too heavy

### Sign up modal

- **Anatomy**: Centered card with close control, headline, social auth buttons, divider, SSO and Email options, footer text with terms link
- **Surface**: Canvas background, modal overlay at 50% black
- **Typography**: Section-display for headline, body-small for buttons, legal-copy for terms
- **Shape**: 0.75rem radius, generous internal padding
- **Spacing**: 2rem padding, 1rem gaps between button rows
- **Composition**: Centered fixed position, max-width constraint
- **Variants**: Sign up and sign in modes with swapped footer text

### Social authentication button

- **Anatomy**: Platform icon left, platform name right
- **Surface**: Canvas background, 1px border, transparent fill
- **Typography**: Navigation token
- **Shape**: 0.25rem radius
- **Spacing**: Compact padding, roughly 0.5rem vertical
- **Composition**: Inline-flex with centered icon and text
- **Variants**: GitHub, Google, Microsoft, SSO, Email

### Library showcase card

- **Anatomy**: Logo or icon top, heading, description, learn more link with arrow
- **Surface**: Action purple background, canvas text
- **Typography**: Technical-display for headings, body-small for descriptions, navigation for links
- **Shape**: 0.5rem radius
- **Spacing**: 2rem padding
- **Composition**: Stacked flex column, equal height across row
- **Variants**: Observable Plot, D3, Observable Framework

### Split feature section

- **Anatomy**: Two equal columns, each with headline, description, action button, and product screenshot
- **Surface**: Left column canvas background, right column surface-dark background
- **Typography**: Section-display for headlines, body for descriptions
- **Shape**: Full-bleed section, no radius
- **Spacing**: Generous vertical padding, content aligned to container edges
- **Composition**: 50/50 split, screenshots positioned at bottom of each column
- **Variants**: Light-left/dark-right orientation; content swaps for different product pairings

### Footer section

- **Anatomy**: Full-width band with learn more links and decorative grid lines
- **Surface**: Action purple background
- **Typography**: Navigation token for links, muted opacity
- **Shape**: Full width, no radius
- **Spacing**: Section-level vertical padding
- **Composition**: Links arranged horizontally with arrow indicators, subtle horizontal rules between items

## Responsive behavior

The design targets desktop as the primary experience, with clear adaptation paths for smaller viewports. The three-column dropdown navigation should collapse to a single column stack below 768px, with column headers becoming section dividers. Split-screen sections should stack vertically, preserving the light-dark alternation as full-width bands. Library cards should shift from three-column to single-column layout, maintaining their internal padding and typography scale.

The navigation bar should remain fixed across all breakpoints, converting to a hamburger-triggered drawer on small screens. Modal dialogs should shrink to near-full-width on mobile with reduced padding, keeping the internal button grid but stacking social options vertically if horizontal space is insufficient.

Type scale should reduce by approximately 20% on small viewports: hero-display drops to 3rem, section-display to 2rem. Body text remains at 1rem for readability. Touch targets for buttons should maintain a minimum 44px height, which the current padding already satisfies.

## Practical implementation guidance

### Preserve
- The strict alternation between light and dark section modes; this rhythm is central to the brand experience
- Monospace typography for developer-facing content; the technical typeface is a key differentiator
- Visible grid patterns and geometric backgrounds in purple sections; these signal the data-visualization domain
- Flat, shadowless card treatments; depth comes from color contrast, not elevation
- Direct, arrow-suffixed link language ("Learn more →", "Sign up →")

### Avoid
- Adding drop shadows to cards or modals; the system relies on overlay and border for separation
- Using border-radius beyond the modest 0.5rem maximum; the aesthetic is intentionally rectilinear
- Mixing purple backgrounds with colorful imagery; the library cards use flat color with white text and simple logos
- Generic placeholder illustrations; product screenshots and real data visualizations are the expected imagery

### Recommended build order
1. Establish the color tokens and section background modes
2. Implement Inter and Spline Sans Mono with the full type scale
3. Build the navigation bar with dropdown behavior
4. Create the button system with primary, secondary, and social variants
5. Implement the modal dialog with overlay and close control
6. Build the split-section layout component for product showcases
7. Add the library card grid with purple background treatment
8. Polish with footer sections and responsive adaptations

### Accessibility
- Ensure the action purple (#7b2cbf) meets WCAG AA against white text; test specifically for the library cards
- Provide visible focus indicators on all interactive elements; the rectilinear buttons suit outline or inset focus styles
- Maintain sufficient contrast in the split-screen dark sections; the surface-dark background with canvas text should exceed AA standards
- Label social authentication buttons with full platform names, not just icons
- Ensure modal traps focus and provides escape key dismissal
- Respect reduced-motion preferences for any dropdown or modal animations

## Scope note

This guide covers the marketing and product showcase surfaces of observablehq.com, including navigation, authentication modals, library promotions, and split-screen feature sections. Pricing tables, interactive notebook interfaces, and logged-in dashboard experiences are not represented in the supplied images. Measurements are practical adaptation targets derived from visible proportions rather than extracted specifications.
