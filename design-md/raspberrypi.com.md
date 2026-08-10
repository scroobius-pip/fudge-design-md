# How raspberrypi.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/raspberrypi.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero banner with product imagery on light grey background, featuring Raspberry Pi logo, navigation bar, and two product call-to-action sections with dark and magenta gradient](https://pin.fontofweb.com/2969?format=jpg)](https://design.withfudge.com/share/pin-2969)

[Hero banner with product imagery on light grey background, featuring Raspberry Pi logo, navigation bar, and two product call-to-action sections with dark and magenta gradient](https://design.withfudge.com/share/pin-2969)

[![News section with card grid layout showing product announcements, article thumbnails, read-more links with arrow icons, and a blue pill-shaped view-all button](https://pin.fontofweb.com/2970?format=jpg)](https://design.withfudge.com/share/pin-2970)

[News section with card grid layout showing product announcements, article thumbnails, read-more links with arrow icons, and a blue pill-shaped view-all button](https://design.withfudge.com/share/pin-2970)

[![Three-column promotional grid with rounded photography cards for Store, Events, and Foundation, each with bold headings and blue arrow links](https://pin.fontofweb.com/2971?format=jpg)](https://design.withfudge.com/share/pin-2971)

[Three-column promotional grid with rounded photography cards for Store, Events, and Foundation, each with bold headings and blue arrow links](https://design.withfudge.com/share/pin-2971)

[![Multi-column footer with social links, categorized navigation sections, and dense text links on light grey background](https://pin.fontofweb.com/2972?format=jpg)](https://design.withfudge.com/share/pin-2972)

[Multi-column footer with social links, categorized navigation sections, and dense text links on light grey background](https://design.withfudge.com/share/pin-2972)

## Overview

The Raspberry Pi website presents a product-forward visual system built around clarity, accessibility, and hardware photography. The design alternates between light neutral sections and bold product showcases, using a restrained palette of greys, white, and a distinctive raspberry magenta to frame computing products for both consumer and industrial audiences. The overall impression is technical yet approachable: precise typography, generous whitespace, and rounded card containers keep the focus on product imagery and clear calls to action. Navigation is persistent and understated, while content sections use rhythmic alternation between light and dark backgrounds to create visual momentum down the page.

## Colors

The color system is built on a neutral foundation with two accent directions: a functional blue for links and actions, and a warm raspberry magenta for brand expression and product highlights.

| token | value | use |
|---|---|---|
| canvas | `#F5F5F5` | Page background, footer area, neutral section fills |
| surface | `#FFFFFF` | Card backgrounds, button fills, content containers |
| ink | `#1A1A1A` | Primary text, dark button backgrounds, strong headings |
| muted-ink | `#666666` | Secondary body text, descriptions, captions |
| action | `#1A5FB4` | Text links, arrow indicators, interactive accents |
| action-hover | `#154A8C` | Darker action state for hover implementation |
| raspberry | `#C51C5A` | Brand magenta, gradient endpoint, product highlight sections |
| raspberry-deep | `#8B1540` | Darker magenta for gradient starts and depth |
| dark-surface | `#2D2D2D` | Dark product banner backgrounds, contrast sections |
| border | `#E0E0E0` | Subtle dividers, card edges when needed |

The light mode dominates the experience: canvas grey provides a soft ambient ground that lets white cards and product photography stand forward. Dark sections appear as full-bleed banners for specific product callouts, creating dramatic contrast that draws the eye to hardware photography. The raspberry gradient serves as the most expressive brand moment, used selectively for flagship product launches. Blue action links provide consistent wayfinding across both light and dark contexts, maintaining usability without competing with the magenta brand moments.

## Typography

The site uses Roboto as its sole typeface, deployed in a limited weight range that emphasizes readability and modern neutrality. The hierarchy is established through size and weight rather than family variation, with Regular weight handling most text and Medium appearing in labels, navigation emphasis, and card headings.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Roboto | 2.5rem | 400 | 1.2 | -0.01em | Hero banner headlines, major product titles |
| section-display | Roboto | 2rem | 400 | 1.2 | -0.01em | Section headings, "News", "More from Raspberry Pi" |
| card-heading | Roboto | 1.25rem | 500 | 1.3 | 0 | Card titles, article headlines, product names |
| body | Roboto | 1rem | 400 | 1.5 | 0 | Paragraph text, descriptions, general content |
| body-small | Roboto | 0.875rem | 400 | 1.5 | 0 | Secondary descriptions, footer links, metadata |
| label | Roboto | 0.75rem | 500 | 1.4 | 0.02em | Buttons, tags, uppercase labels, counts |
| navigation | Roboto | 0.875rem | 400 | 1 | 0 | Primary nav items, dropdown categories |

Roboto is designed by Christian Robertson and distributed by Google. Verify licensing for these families before production use.

The type scale is modest, with the largest display size at 2.5rem creating impact without heaviness. Negative tracking on display sizes tightens headlines optically. The 1.5 line height on body text ensures comfortable reading for technical content and product descriptions.

## Layout

The layout follows a centered container model with responsive padding, using a consistent 4px relative unit for all spacing decisions. Sections stack vertically with full-bleed backgrounds alternating between canvas, surface, dark-surface, and the raspberry gradient.

The navigation bar sits at the top with the Raspberry Pi logo on the left, primary category links centered, and utility links on the right. Below the nav, hero sections use asymmetric two-column layouts: text content left-aligned with generous padding, product imagery positioned right with subtle drop shadows and floating hardware elements.

Content sections below the hero employ grid systems for card arrangements. The news section uses an irregular grid with one large feature card spanning two rows on the left, and two smaller cards stacked on the right. The "More from Raspberry Pi" section uses a regular three-column grid with equal-width cards.

Footer content organizes into four or more columns of categorized links, with social media links in the leftmost column featuring icon-and-text pairings. The footer maintains the canvas background, creating visual closure with the page's starting environment.

Section spacing uses 4rem vertical padding as a baseline rhythm, with tighter 1.5rem gaps between related content elements within sections. Card internal padding is 1.5rem on all sides, with news cards using zero padding on their image areas and standard padding on text content below.

## Visual language

The visual language balances technical precision with approachable warmth. Product photography is heroically scaled, often showing hardware at slight angles with soft shadows that suggest three-dimensionality without heavy styling. The Raspberry Pi logo—a stylized raspberry fruit—appears in full color in the navigation, anchoring brand identity without overwhelming the clean interface.

Cards use rounded corners at 0.75rem, softening the rectilinear hardware photography and creating a contemporary feel. Buttons are fully pill-shaped, contrasting with the squarer cards and providing clear interactive targets. Arrow icons accompany text links, reinforcing directionality and action.

The raspberry magenta appears most dramatically in gradient backgrounds for flagship products, transitioning from deep burgundy to bright magenta. This creates an energetic, almost neon-adjacent glow when paired with white product photography. Dark grey sections provide a more restrained alternative for professional and industrial product positioning.

Iconography is minimal and functional: social media platform icons in the footer, arrow indicators on links, and a small comment-count badge with rounded corners. The overall effect is utilitarian elegance—every element serves navigation or product comprehension.

## Components

### Navigation bar

- **Anatomy**: Logo left, primary links center-right, utility links far right
- **Surface**: Transparent or canvas background, transitioning to surface on scroll
- **Typography**: `{typography.navigation}` for all items
- **Spacing**: Compact horizontal spacing between items, generous vertical padding

### Hero banner

- **Anatomy**: Headline, supporting paragraph, optional secondary line, pill button, product imagery
- **Surface**: Light grey canvas background with subtle geometric patterns
- **Typography**: `{typography.hero-display}` for headline, `{typography.body}` for description
- **Composition**: Text left-aligned with 50% width, imagery floating right with layered hardware elements
- **Shape**: No border radius on section itself

### Product highlight banner

- **Anatomy**: Product name with outlined badge styling, description, price, pill button, large product photography
- **Variants**:
  - Dark variant: `{colors.dark-surface}` background, white text, white-outlined product name badge
  - Magenta variant: raspberry gradient background, white text, same badge treatment
- **Typography**: `{typography.section-display}` for product name, `{typography.body}` for description
- **Shape**: Full-bleed section, no border radius

### Content card

- **Anatomy**: Rounded image container, heading, description, action link with arrow
- **Surface**: `{colors.surface}` background
- **Typography**: `{typography.card-heading}` for title, `{typography.body-small}` for description, `{typography.body-small}` with action color for link
- **Shape**: `{rounded.card}` on image and card container
- **Spacing**: Image fills top, text content padded below

### News card

- **Anatomy**: Large image, headline, excerpt, read-more link with arrow, comment count badge
- **Surface**: `{colors.surface}` background
- **Typography**: `{typography.card-heading}` for headline, `{typography.body-small}` for excerpt
- **Shape**: `{rounded.card}` with overflow hidden
- **Composition**: Feature variant spans double height; standard variant is single cell

### Comment badge

- **Anatomy**: Small rounded pill containing a number
- **Surface**: `{colors.dark-surface}` background
- **Typography**: `{typography.label}` in white
- **Shape**: Small pill radius, approximately 1rem height

### Pill button

- **Anatomy**: Text label with optional icon
- **Variants**:
  - Primary: `{colors.ink}` background, `{colors.surface}` text
  - Secondary: `{colors.surface}` background, `{colors.ink}` text with border
  - Action: `{colors.action}` background, `{colors.surface}` text
- **Typography**: `{typography.label}`
- **Shape**: `{rounded.pill}`
- **Spacing**: 0.75rem vertical, 1.5rem horizontal padding

### Action link

- **Anatomy**: Text with right-pointing arrow icon
- **Surface**: Transparent
- **Typography**: `{typography.body-small}`, `{colors.action}`
- **States**: Should darken to `{colors.action-hover}` on hover

### Footer

- **Anatomy**: Social links column, multiple category columns with heading and link lists
- **Surface**: `{colors.canvas}` background
- **Typography**: `{typography.body-small}` for links, `{typography.label}` for column headings
- **Composition**: Four to six columns, left-aligned within each

## Responsive behavior

The design should maintain its structural integrity across viewport widths. The hero banner's two-column layout should stack to single column on narrow viewports, with product imagery moving below text content. The news grid should collapse from asymmetric layout to a single column of stacked cards. The three-column promotional grid should become a single column with full-width cards.

Navigation should collapse to a hamburger menu or condensed category list on smaller screens, preserving access to primary product categories. Pill buttons should remain tappable with adequate touch targets, maintaining their 0.75rem vertical padding as a minimum.

The raspberry gradient banner should remain full-bleed at all widths, with text content receiving adequate side padding to prevent edge collision. Footer columns should stack to two columns on tablet and single column on mobile, with social links remaining prominent at the top.

## Practical implementation guidance

### Preserve
- The restrained grey-to-white foundation with selective magenta accents
- Pill-shaped buttons as the primary interactive element shape
- Arrow-accompanied text links for secondary actions
- Generous section spacing that lets product photography breathe
- The outlined badge treatment for product names in dark sections
- Layered, shadowed product photography with slight rotation

### Avoid
- Adding additional accent colors beyond the blue and raspberry system
- Using sharp-cornered buttons or cards that clash with the rounded language
- Crowding the hero with too much text—keep to headline, one paragraph, one button
- Applying the magenta gradient to non-flagship or non-product contexts
- Reducing contrast in dark sections below WCAG AA standards

### Recommended build order
1. Establish the 4px relative unit and type scale with Roboto
2. Implement the canvas background and navigation bar
3. Build the hero banner with two-column responsive behavior
4. Create the card component with image, text, and link patterns
5. Implement dark and magenta product banner variants
6. Add the news grid with feature and standard card sizes
7. Construct the footer with multi-column link organization
8. Apply interaction states: hover darkening on links, button press states

### Accessibility
- Ensure all text on dark and magenta backgrounds meets WCAG AA contrast minimums
- Provide visible focus indicators on pill buttons and text links
- Maintain logical heading hierarchy from hero through card levels
- Add descriptive alt text to all product photography
- Consider reduced-motion preferences for any scroll-triggered animations
- Ensure touch targets for pill buttons meet 44px minimum in at least one dimension

## Scope note

This guide covers the homepage surface visible in the supplied images, including navigation, hero banners, product highlights, news cards, promotional grids, and footer. Measurements are practical adaptation targets. Unseen interior pages, mobile-specific layouts, dropdown menu behavior, form interactions, and e-commerce checkout flows are not represented. Easing curves, scroll animations, and loading states are not documented from still images alone.
