# How ledger.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ledger.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dark product comparison grid showing four Ledger hardware wallets with purple-tinted radial gradient backgrounds, star ratings, and 'Learn more' links](https://pin.fontofweb.com/7797?format=jpg)](https://design.withfudge.com/share/pin-7797)

[Dark product comparison grid showing four Ledger hardware wallets with purple-tinted radial gradient backgrounds, star ratings, and 'Learn more' links](https://design.withfudge.com/share/pin-7797)

[![Light navigation dropdown with product thumbnails, category links, and dark hero section with orange primary button and device photography](https://pin.fontofweb.com/7796?format=jpg)](https://design.withfudge.com/share/pin-7796)

[Light navigation dropdown with product thumbnails, category links, and dark hero section with orange primary button and device photography](https://design.withfudge.com/share/pin-7796)

[![Dark hero section with large headline, orange CTA button, device photography on purple gradient, and three-column feature grid with icons](https://pin.fontofweb.com/7795?format=jpg)](https://design.withfudge.com/share/pin-7795)

[Dark hero section with large headline, orange CTA button, device photography on purple gradient, and three-column feature grid with icons](https://design.withfudge.com/share/pin-7795)

## Overview

Ledger's design system establishes a premium, security-focused visual identity for crypto hardware wallets. The system operates in two distinct modes: a light, clean interface for navigation and product discovery, and an immersive dark mode for hero sections and product storytelling. The contrast between these modes creates visual hierarchy while maintaining brand consistency through typography, iconography, and a singular vibrant orange accent.

The dark sections dominate the homepage experience, using deep black backgrounds with subtle purple-tinted radial gradients to create depth and atmosphere. Product photography floats against these dark surfaces, illuminated by soft gradient lighting that suggests technological sophistication. The light sections provide breathing room and functional clarity for navigation, dropdown menus, and product browsing.

Inter serves as the sole typeface across all contexts, deployed with careful weight differentiation. Semibold weights carry headlines and feature labels, medium weights handle navigation and buttons, and regular weights manage body copy. This restrained typographic approach reinforces the brand's focus on clarity and trustworthiness in a complex technical domain.

## Colors

The color system is built on extreme contrast: pure black and white form the foundation, with a vibrant orange serving as the singular brand accent. A limited set of grays provides subtle hierarchy without diluting the high-contrast impact.

| token | value | use |
|---|---|---|
| action | #FF5300 | Primary buttons, CTAs, promotional badges, interactive emphasis |
| ink | #000000 | Dark section backgrounds, primary text on light surfaces |
| ink-secondary | #262626 | Subtle dark surfaces, dropdown shadows, elevated dark panels |
| ink-tertiary | #525252 | Borders on dark cards, secondary text, disabled states |
| muted-ink | #949494 | Tertiary text, captions, metadata, star rating outlines |
| canvas | #FFFFFF | Light section backgrounds, primary text on dark surfaces |
| surface | #E5E5E5 | Light borders, dividers, subtle background tints |
| surface-elevated | #352B3D | Purple-tinted gradient origin, dark card highlights |
| border | #525252 | Dark card borders, subtle separators |
| border-subtle | #E5E5E5 | Light mode borders, hairline dividers |

The dark mode palette relies on a radial gradient that transitions from #352B3D at its center to #000000 at the edges, creating an atmospheric glow behind product photography. A secondary linear gradient at 196 degrees adds a faint white sheen (rgba(255, 255, 255, 0.05)) to suggest surface reflection on glass and metal devices.

Light mode inverts the relationship: white backgrounds with black text, maintaining the same structural logic. The orange accent remains consistent across both modes, ensuring brand recognition regardless of context.

## Typography

Inter is the exclusive typeface, loaded as a variable or static font with weights 400, 500, and 600. The scale is compact and purposeful, with display sizes tightly tracked and body sizes generously leaded for readability.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3.125rem | 600 | 1.12 | -0.045em | Homepage headlines, major section titles |
| section-display | Inter | 1.5rem | 600 | 1.33 | -0.045em | Card titles, feature headings, sub-section headers |
| body | Inter | 1rem | 400 | 1.75 | 0em | Paragraph text, descriptions, general content |
| body-large | Inter | 1.25rem | 400 | 1.4 | 0em | Lead paragraphs, hero descriptions |
| body-small | Inter | 0.8125rem | 400 | 1.5 | 0em | Captions, metadata, fine print |
| label | Inter | 0.8125rem | 500 | 1.69 | 0em | Button text, badges, category labels |
| navigation | Inter | 0.8125rem | 500 | 1.69 | 0em | Main nav, dropdown links, footer links |
| feature-lead | Inter | 1.125rem | 600 | 1.4 | -0.045em | Feature callouts, stat labels, emphasis text |

Display sizes use aggressive negative tracking (-0.045em) to create tight, impactful headlines that feel modern and technical. Body text maintains neutral tracking with generous line height (1.75) for comfortable reading of security and product information. The 13px base for labels and navigation ensures UI density without sacrificing legibility.

Verify licensing for these families before production use.

## Layout

The layout system uses a centered container with generous horizontal margins that scale with viewport width. Content blocks alternate between full-bleed dark sections and contained light sections, creating a rhythmic scroll experience.

Section spacing follows a clear hierarchy: major dark sections receive 80px vertical padding (5rem), while tighter content clusters use 40px (2.5rem). The hero section employs a two-column asymmetric layout with text content on the left and product photography on the right, maintaining roughly 45:55 proportions.

The navigation system occupies a fixed or sticky header with two states: a light variant with black text on white for dropdown menus, and a dark variant with white text on black for the scrolled or hero state. Navigation links are evenly distributed with 24px horizontal padding, creating generous touch targets.

Content grids use a 12-column implicit system. The product comparison grid displays four equal cards with consistent internal padding. Feature grids below the hero use a three-column layout with vertical dividers between columns. All grids maintain 24px gutter spacing.

The product photography in hero sections receives special treatment: devices are rendered at large scale, often breaking the grid boundary, with soft gradient backgrounds that extend full-bleed. This creates immersive moments that contrast with the structured grid below.

## Visual language

The visual language balances technical precision with approachable warmth. Product photography uses soft, diffused lighting against gradient backgrounds, avoiding harsh shadows or sterile white-box renders. Devices are shown at slight angles to emphasize three-dimensionality and physical presence.

Iconography follows a thin, geometric line style. Feature icons use simple circular containers with centered symbols. Navigation icons are minimal and functional. The overall icon language avoids filled shapes in favor of outlines that feel lightweight against the heavy typographic presence.

Badges and labels use uppercase text with tight letter spacing for product specifications ("3.7" CURVED SCREEN", "NEW", "NEW COLORS"). These micro-labels create information hierarchy within product cards without competing with headlines.

The orange accent (#FF5300) appears sparingly but decisively: primary call-to-action buttons, promotional badges, and occasional emphasis. Its warmth contrasts with the cool purple tints in dark gradients, creating visual energy that guides attention to conversion points.

Shadows are minimal and functional. A subtle rgba(0, 0, 0, 0.25) shadow with 2.4px blur appears on elevated elements, providing depth without the heavy material shadows common in other design systems.

## Components

### Primary Button

- **Anatomy**: Text label with right-pointing arrow icon, full background fill
- **Surface**: Solid #FF5300 background with white text
- **Typography**: `{typography.label}` — 13px medium weight
- **Shape**: Full pill border-radius (100px / 9999px)
- **Spacing**: 13px vertical padding, 24px horizontal padding
- **Composition**: Icon follows text with small gap, creating directional momentum
- **Variants**: Appears in dark sections with orange fill; light sections may use black fill or outline variant

### Secondary Button / Text Link

- **Anatomy**: Text with arrow icon, transparent or minimal background
- **Surface**: Transparent background, white or black text depending on context
- **Typography**: `{typography.label}` or `{typography.navigation}`
- **Shape**: No border-radius (0px) for text links; pill shape for outlined variants
- **Spacing**: 8px vertical padding, 16px horizontal padding for outlined; minimal padding for pure text
- **Composition**: Arrow icon creates implied action without heavy button chrome

### Product Card

- **Anatomy**: Product image, title, specification badge, description, star rating, action link
- **Surface**: Black (#000000) background with subtle border (#525252)
- **Typography**: Title uses `{typography.section-display}`, description uses `{typography.body}`, badge uses `{typography.label}` with uppercase transform
- **Shape**: Sharp corners (0px radius), full-bleed image area
- **Spacing**: Internal padding creates consistent text block at card bottom
- **Composition**: Image occupies upper 60% of card, content below with left-aligned text
- **Variants**: "NEW" badge appears as small purple-tinted label in upper corner for new products

### Navigation Bar

- **Anatomy**: Logo mark, primary links, language selector, cart icon
- **Surface**: White background in light mode, black in dark mode; full-width with centered content
- **Typography**: Links use `{typography.navigation}` — 13px medium weight
- **Spacing**: 32px vertical padding in expanded dropdown state; tighter in collapsed bar
- **Composition**: Logo left-aligned, links center-clustered, utilities right-aligned
- **Variants**: Light variant for product browsing, dark variant for immersive hero experience

### Feature Grid Item

- **Anatomy**: Icon, headline, description text
- **Surface**: Transparent, sitting on dark background
- **Typography**: Headline uses `{typography.feature-lead}`, description uses `{typography.body}`
- **Spacing**: Generous internal padding, separated by vertical dividers in three-column layout
- **Composition**: Icon above headline, headline tight to description with consistent vertical rhythm

### Announcement Banner

- **Anatomy**: Full-width bar with centered text and optional action link
- **Surface**: Dark gray (#262626) background with white text
- **Typography**: `{typography.body-small}` or `{typography.label}`
- **Spacing**: Compact vertical padding, full horizontal bleed
- **Composition**: Text centered, action link right-aligned or inline with arrow

## Responsive behavior

The design system maintains its core visual identity across viewport sizes while adapting layout density. The two-column hero layout should stack vertically on narrow viewports, with product photography moving above or below text content. The four-column product grid should collapse to two columns on tablet and single column on mobile, maintaining card proportions.

Navigation collapses to a hamburger menu or simplified icon set on narrow screens, preserving the logo and cart as persistent elements. The announcement banner may truncate or wrap text, with the action link moving to a second line if necessary.

Typography scales down modestly: hero-display may reduce to 2.5rem on tablet and 2rem on mobile while maintaining the tight tracking characteristic. Body text remains at 1rem for readability. Touch targets for buttons and links should maintain minimum 44px height regardless of viewport.

The dark/light section alternation remains consistent across breakpoints, though padding values should reduce proportionally (80px to 48px to 32px) to maintain appropriate content density on smaller screens.

## Practical implementation guidance

### Preserve
- The extreme contrast between dark immersive sections and light functional sections
- The single orange accent color for all primary actions and emphasis
- Tight negative tracking on display type for technical, modern feel
- Full-pill button shapes for primary calls-to-action
- Generous section padding that lets dark gradient backgrounds breathe
- Product photography with soft, atmospheric lighting against gradients

### Avoid
- Multiple accent colors competing with the orange brand mark
- Heavy drop shadows or material design elevation
- Rounded corners on product cards or structural panels
- Generic stock photography without the specific gradient treatment
- Body text smaller than 13px or display text without negative tracking
- Borders thicker than 1px except for special emphasis cases

### Recommended Build Order
1. Establish the color tokens and gradient system (dark radial, light linear sheen)
2. Implement Inter with weights 400, 500, 600 and the full type scale
3. Build the two navigation variants (light and dark) with correct spacing
4. Create the hero section with asymmetric two-column layout and product photography
5. Implement primary and secondary button components with pill shapes
6. Build the product card grid with consistent internal spacing
7. Add the feature grid with iconography and vertical dividers
8. Polish with announcement banners, badges, and micro-interactions

### Accessibility
- Ensure white text on dark gradients maintains WCAG AA contrast; the purple-tinted gradient center may need text positioning adjustment to avoid contrast degradation
- Provide visible focus states for keyboard navigation; consider white or orange outlines on dark backgrounds
- The orange accent (#FF5300) against white fails normal text contrast; reserve it for large text, buttons, or non-text elements
- Maintain logical heading hierarchy: single h1 per page, followed by h2 for sections and h3 for cards
- Arrow icons on links should have accessible labels or be decorative with appropriate aria attributes

## Scope note

This guide covers the Ledger homepage including the hero section, product comparison grid, feature highlights, and navigation system. Product detail pages, checkout flows, account dashboards, and mobile-specific layouts are not represented in the supplied material. Footer content, additional marketing pages, and interactive states such as hover, focus, and loading are not documented. Measurements are derived from the desktop viewport captured in the source images.
