# How uneed.best is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/uneed.best-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with grid background, orange CTA button, product listings with voting, and partner sidebar with search and submit action](https://pin.fontofweb.com/6623?format=jpg)](https://design.withfudge.com/share/pin-6623)

[Hero section with grid background, orange CTA button, product listings with voting, and partner sidebar with search and submit action](https://design.withfudge.com/share/pin-6623)

[![Footer with multi-column link categories, social icons, theme toggle, and copyright bar with chat bubble](https://pin.fontofweb.com/6624?format=jpg)](https://design.withfudge.com/share/pin-6624)

[Footer with multi-column link categories, social icons, theme toggle, and copyright bar with chat bubble](https://design.withfudge.com/share/pin-6624)

## Overview

Uneed is a product launch platform and community directory where makers submit tech products, gain visibility, and receive feedback. The visual system balances professional credibility with approachable warmth through a restrained palette anchored by a vibrant orange accent against near-white surfaces. The interface employs a distinctive grid-patterned hero background that evokes technical precision and planning, while the content areas use clean card-based layouts with generous whitespace. The design prioritizes scannable product listings with clear hierarchy: voting counts, product names, descriptions, and categorical badges read in a predictable vertical rhythm. Community elements—user avatars, post previews, and statistics—are integrated without visual noise, maintaining focus on the products themselves. The overall impression is that of a curated, active marketplace rather than an anonymous directory.

## Colors

The color system is intentionally minimal, relying on a warm neutral scale with a single energetic accent. Light surfaces dominate, with strategic use of darker tones for text hierarchy and the footer.

| token | hex | use |
|---|---|---|
| action | #F1781E | Primary CTA buttons, active states, vote counts, accent badges |
| action-hover | #F49643 | Hover state for action elements, gradient partner card accents |
| ink | #171717 | Primary headings, body text, logo |
| muted-ink | #404040 | Secondary text, descriptions, footer body copy |
| secondary-ink | #525252 | Footer links, tertiary navigation |
| tertiary-ink | #737373 | Meta text, timestamps, disabled states |
| canvas | #FAFAFA | Page background, subtle surface variation |
| surface | #FFFFFF | Cards, modals, input fields, elevated content |
| surface-alt | #F5F5F5 | Alternate row backgrounds, subtle grouping |
| border | #E5E7EB | Card borders, dividers, input outlines |
| border-strong | #A1A1A1 | Stronger borders when more definition is needed |
| dark-ink | #273846 | Deep navy for special emphasis text |
| dark-bg | #000000 | Footer background, maximum contrast regions |

The orange accent (#F1781E) carries the brand's energetic personality and appears exclusively on interactive elements: the "Get started" hero button, "Submit a product" sidebar action, vote counts, and ranking badges. This disciplined application prevents visual fatigue while making actions immediately identifiable. Text hierarchy is established through ink density rather than color variety—headings use #171717, body uses #404040, and meta information uses #737373. The footer inverts to near-black (#000000) with muted text, creating a definitive page boundary. Partner cards in the sidebar use a subtle gradient from white to warm cream (#F49643 tint), distinguishing sponsored content without breaking the visual system.

## Typography

The entire interface uses Inter, a neutral, highly legible sans-serif that supports dense information layouts without fatigue. The type scale is compact, with display sizes reserved for the hero and section headings.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3rem | 700 | 1 | -0.025em | Hero headline "Launch. Get seen. Grow." |
| section-display | Inter | 1.5rem | 600 | 1.33 | normal | Section headings like "Best products launching today" |
| body | Inter | 1rem | 400 | 1.5 | normal | Primary body text, descriptions, navigation |
| body-large | Inter | 1.125rem | 400 | 1.56 | normal | Hero subheadline, emphasized descriptions |
| body-small | Inter | 0.875rem | 400 | 1.375 | normal | Card descriptions, footer links, secondary content |
| label | Inter | 0.75rem | 600 | 1.33 | normal | Badges, timestamps, category labels, uppercase headings |
| navigation | Inter | 0.875rem | 500 | 1.43 | normal | Top navigation, tab switches |
| button | Inter | 0.875rem | 500 | 1.43 | normal | All button labels |

The hero headline at 48px with tight negative tracking (-0.025em) creates immediate impact, while the 18px body-large subheadline provides breathable readability for the value proposition. Navigation and buttons share the 14px/500 weight pairing, unifying interactive elements. Labels at 12px with semibold weight establish clear micro-hierarchy for timestamps, vote counts, and category tags. The footer uses 14px uppercase labels for column headings, creating visual separation from the 16px link lists below. Verify licensing for these families before production use.

## Layout

The page uses a centered, max-width container with asymmetric three-column content below the hero. The hero section spans full width with a subtle grid pattern overlay, centering its content for maximum focus. Below, the layout resolves into a left sidebar (community posts and statistics), a central content area (product listings with tabs), and a right sidebar (search, submit action, and partner cards).

The main content area employs a fixed left navigation rail for "2026 Statistics" and "Latest Posts," a fluid center column for the primary product feed with tabbed time filters (Daily, Weekly, Monthly, Yearly), and a fixed right sidebar for utility actions and partner promotions. This three-column structure remains consistent below the fold, with the center column carrying the primary user task of browsing and voting on products.

Spacing follows a 4px base unit (0.25rem), with common increments at 8px, 12px, 16px, 20px, 24px, 32px, and 40px. Section breaks use 40px vertical spacing, while card internal padding uses 16px. The hero section receives generous vertical breathing room with approximately 160px top margin before content begins. Grid gaps between product cards use 16px consistently. The footer spans full width with 32px vertical padding, containing five columns of links plus a bottom bar for copyright and legal links.

## Visual language

The interface communicates through clean geometric forms with subtle depth cues. Cards float on the canvas through 1px borders rather than shadows, creating a flat-but-defined aesthetic. The only shadow in the system is a minimal `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` for subtle elevation on interactive elements.

The grid-patterned hero background is the most distinctive visual element—a faint technical grid that suggests planning, building, and precision without competing with the headline. This pattern stops abruptly at the content boundary, creating a clear hierarchy between atmospheric header and functional content.

Product identity is handled through rounded-square app icons (16px radius) with consistent 48px sizing, paired with text descriptions. Voting interfaces use simple up-triangle icons with numeric counts, positioned right-aligned for scannability. User avatars are perfect circles with 2px white borders for overlap effects in the hero social proof.

Badges and tags use pill shapes with 4px radius, appearing in orange for rankings (#1, #2, #3) and green for categorical labels like "Deals." The color coding is immediate: orange for competitive standing, green for commercial attributes.

The footer introduces a chat bubble action in the bottom-right corner, using the brand orange with a speech icon, providing persistent access to support without cluttering the primary navigation.

## Components

### Primary button

- **Anatomy**: Text label with optional leading icon, contained within a solid fill shape
- **Surface**: Background `{colors.action}`, text `{colors.surface}`
- **Typography**: `{typography.button}` at 14px/500
- **Shape**: 6px border radius, padding 6px 10px
- **Spacing**: Often appears with 8px horizontal margin when paired with secondary actions
- **Variants**: Default (orange fill), ghost (white fill with orange text for "Log in")

### Product listing card

- **Anatomy**: Rounded app icon (48px, 16px radius), product name, description, ranking badge, vote count with up-arrow
- **Surface**: Transparent or `{colors.surface}` background, 1px `{colors.border}` when cardified
- **Typography**: Product name at `{typography.body}` 16px/600, description at `{typography.body-small}` 14px/400 in `{colors.muted-ink}`
- **Shape**: Full-width row with 16px vertical padding, 16px horizontal padding when contained
- **Composition**: Icon left, text center-left, vote action right-aligned; badges inline with product name
- **States**: Vote count shows interaction affordance with up-arrow icon

### Partner card

- **Anatomy**: Partner logo, name, description, "Visit" link with external arrow icon
- **Surface**: `{colors.surface}` with subtle warm gradient overlay, 1px `{colors.border}`, 8px radius
- **Typography**: Name at `{typography.body}` 16px/600, description at `{typography.body-small}` 14px/400
- **Shape**: 8px border radius, 16px internal padding
- **Spacing**: 16px vertical margin between cards in sidebar stack

### Statistics panel

- **Anatomy**: Label "2026 STATISTICS" with info icon, two metric cards showing visits and page views
- **Surface**: `{colors.surface}` with 1px `{colors.border}`, 8px radius
- **Typography**: Numbers at `{typography.section-display}` 24px/600, labels at `{typography.label}` 12px/400 uppercase
- **Shape**: 8px radius cards with internal padding
- **Composition**: Horizontal pair with equal width, centered text

### Community post preview

- **Anatomy**: User avatar (circular, 32px), username, timestamp, post title preview, interaction counts (heart, comment)
- **Surface**: `{colors.surface}` card with 1px `{colors.border}`, 8px radius
- **Typography**: Username at `{typography.body-small}` 14px/600, timestamp at `{typography.label}` 12px/400 in `{colors.tertiary-ink}`, preview text at `{typography.body}` 16px/400 truncated
- **Shape**: 8px radius, 16px padding
- **Composition**: Avatar top-left, content flows right and below; interaction icons bottom-left

### Footer

- **Anatomy**: Logo and description block, five link columns with uppercase headings, social icons, theme toggle, copyright bar
- **Surface**: `{colors.dark-bg}` background, `{colors.muted-ink}` text, `{colors.secondary-ink}` links
- **Typography**: Column headings at `{typography.label}` 14px/600 uppercase, links at `{typography.body}` 16px/400
- **Shape**: Full-width, 32px vertical padding
- **Composition**: Five-column grid for links, bottom bar centered for copyright
- **Elements**: Social icons (butterfly, bird, envelope), theme toggle buttons (sun, moon, system), chat bubble action fixed bottom-right

### Search input

- **Anatomy**: Search icon, placeholder text, keyboard shortcut hint
- **Surface**: `{colors.surface}` with 1px `{colors.border}`, 8px radius
- **Typography**: Placeholder at `{typography.body-small}` 14px/400
- **Shape**: 8px radius, 12px horizontal padding, 8px vertical padding

## Responsive behavior

The three-column layout likely collapses to single column on narrow viewports, with sidebars stacking above or below the primary product feed. The hero grid background should scale to maintain pattern density without visible repetition seams. Navigation items "Launchpad," "Community," "Pricing," "Products," and "More" collapse to a hamburger menu or consolidate into icon-only forms when horizontal space is insufficient.

The statistics panel and latest posts sidebar should appear above the product feed on mobile to maintain context, or collapse into expandable sections to preserve vertical space. Partner cards in the right sidebar stack vertically with full width and maintain their internal proportions.

The footer five-column link grid should reflow to two columns on tablet and single column on mobile, with the logo description block spanning full width at the top. Theme toggle buttons remain accessible but may reduce to icon-only at smallest sizes.

Touch targets for voting buttons and product cards should expand to minimum 44px height on mobile. The persistent chat bubble remains fixed bottom-right but should avoid overlap with system gestures.

## Practical implementation guidance

### Preserve
- The disciplined orange accent usage—reserve #F1781E exclusively for primary actions and competitive indicators
- The grid-patterned hero background as a distinctive brand moment
- The 48px app icon size with 16px radius for product identity consistency
- The uppercase 14px footer column headings for clear information architecture
- The minimal shadow system—rely on borders and whitespace for separation

### Avoid
- Adding background colors to product cards that compete with app icons
- Using the orange accent for non-interactive decorative elements
- Introducing additional font weights beyond the 400/500/600/700 scale
- Creating card shadows heavier than the existing 1px 2px subtle elevation
- Breaking the three-column asymmetry with equal-width columns

### Recommended build order
1. Establish the 4px spacing grid and color tokens
2. Implement Inter with the defined type scale, starting with body and navigation
3. Build the hero section with grid background and centered content
4. Create the three-column layout shell with responsive breakpoints
5. Develop product listing cards with icon, text, badge, and vote patterns
6. Implement sidebar components: statistics, posts, search, submit, partners
7. Build footer with multi-column link grid and bottom bar
8. Add interactive states: button hovers, vote feedback, tab switching

### Accessibility
- Ensure the orange action color (#F1781E) on white meets WCAG AA contrast for text; the 3:1 ratio may require darkening for small text
- The grid background pattern should remain subtle enough to not trigger visual discomfort; keep opacity below 5%
- Product voting interfaces need clear focus indicators and keyboard operability
- Truncated post previews should expose full content on focus or via expand action
- Theme toggle should respect system preferences and persist user choice
- Footer links in #525252 on #000000 should be verified for minimum 4.5:1 contrast ratio

## Scope note

This guide covers the Uneed homepage including hero, product listings, community sidebar, partner promotions, and footer. Interior pages such as individual product detail, submission flows, user profiles, and administrative interfaces are not represented. Measurements derive from the documented interface values with spacing snapped to the 4px base grid. Motion, loading states, and mobile-specific adaptations are not covered and should be designed to match the established visual rhythm.
