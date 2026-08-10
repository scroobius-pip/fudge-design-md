# How northendboutique.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/northendboutique.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dark-themed homepage with hero image, product grid, and open cart drawer showing empty state with shop now button](https://pin.fontofweb.com/9936?format=jpg)](https://design.withfudge.com/share/pin-9936)

[Dark-themed homepage with hero image, product grid, and open cart drawer showing empty state with shop now button](https://design.withfudge.com/share/pin-9936)

[![Full dark mode homepage with navigation bar, hero banner with learn more button, and new arrivals product grid](https://pin.fontofweb.com/9935?format=jpg)](https://design.withfudge.com/share/pin-9935)

[Full dark mode homepage with navigation bar, hero banner with learn more button, and new arrivals product grid](https://design.withfudge.com/share/pin-9935)

[![Light-themed mobile navigation overlay with category links and close button on white background](https://pin.fontofweb.com/9934?format=jpg)](https://design.withfudge.com/share/pin-9934)

[Light-themed mobile navigation overlay with category links and close button on white background](https://design.withfudge.com/share/pin-9934)

[![Light mode footer with marquee brand text, about section, payment icons, email subscription form, and social links](https://pin.fontofweb.com/9933?format=jpg)](https://design.withfudge.com/share/pin-9933)

[Light mode footer with marquee brand text, about section, payment icons, email subscription form, and social links](https://design.withfudge.com/share/pin-9933)

## Overview

North End Boutique presents a refined e-commerce experience for women's clothing and accessories, built around a distinctive dual-mode visual system. The design alternates between a dramatic dark mode with near-black surfaces and warm off-white typography, and a clean light mode with white backgrounds and deep charcoal text. This polarity creates visual rhythm across the shopping journey while maintaining consistent typographic elegance.

The brand identity centers on Tenor Sans for display and wordmark settings, lending an editorial, boutique quality to headlines and the logo. DM Sans handles all body text, navigation, and interface labels with approachable clarity. Product photography dominates the visual field, presented in generous grids with minimal chrome. The overall impression is uncluttered and confident—letting merchandise speak while providing clear pathways to purchase.

Key structural elements include a persistent top navigation with category links, a hero banner with lifestyle photography, product grids with hover-reveal interactions, a slide-out cart drawer, and a comprehensive footer with brand marquee, payment trust signals, and email capture. The system prioritizes readability and browsing efficiency over decorative flourish.

## Colors

The palette operates in two distinct modes with shared accent values. Dark mode uses deep charcoal surfaces with warm off-white text; light mode inverts this relationship. Both modes share muted warm-gray accents for secondary information and borders.

| token | hex | use |
|---|---|---|
| ink | #171717 | Primary text in light mode, deep emphasis |
| ink-deep | #262626 | Dark mode surfaces, button backgrounds |
| ink-muted | #747474 | Secondary text, captions, disabled states |
| canvas | #FFFFFF | Light mode backgrounds, card surfaces |
| surface | #F7F7F7 | Subtle section backgrounds, input fields |
| surface-warm | #EEF1E9 | Footer background, warm accent regions |
| border | #C1C1C1 | Dividers, structural separators |
| border-light | #E6E6E6 | Hairline borders, button outlines in light mode |
| action | #262626 | Primary button fill in dark mode |
| action-surface | #F7F7F7 | Primary button fill in light mode |
| action-border | #E6E6E6 | Button borders, subtle boundaries |
| inverse-ink | #E6E6E6 | Dark mode primary text |
| inverse-canvas | #1F1F1F | Dark mode page background |
| inverse-surface | #252525 | Dark mode elevated surfaces, cart drawer |
| inverse-border | #969696 | Dark mode borders, muted separators |
| accent-warm | #767E68 | Olive-warm accent for special labels, badges |

Dark mode dominates the homepage experience, creating a gallery-like environment where product photography pops against the near-black ground. Light mode appears in overlays, the footer, and secondary pages, offering visual relief and maintaining accessibility for extended reading. The warm olive accent appears sparingly for promotional badges and special callouts, connecting to the natural, approachable brand personality.

## Typography

The type system pairs an elegant serif display face with a clean geometric sans-serif for all functional text. Tenor Sans provides editorial distinction for headlines and the brand wordmark, while DM Sans ensures excellent readability across all body sizes and interface elements. The interface also references Applesystem as a system fallback, Times in legacy HTML contexts, and DM Sans-500 as a specific Medium weight instance for navigation and header elements.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Tenor Sans | 3.75rem | 400 | 1.1 | -0.02em | Hero headlines, major section titles |
| section-display | Tenor Sans | 2.5rem | 400 | 1.1 | -0.02em | Section headings, product category titles |
| body | DM Sans | 1.125rem | 400 | 1.5 | normal | Paragraphs, descriptions, general content |
| body-small | DM Sans | 0.875rem | 400 | 1.5 | normal | Secondary descriptions, metadata |
| label | DM Sans | 0.75rem | 700 | 1 | -0.01em | Tags, badges, button text, price labels |
| navigation | DM Sans | 0.875rem | 500 | 1.5 | normal | Menu items, category links, breadcrumbs |
| brand-wordmark | Tenor Sans | 1.875rem | 400 | 1 | -0.02em | Logo, brand lockup in header |

Tenor Sans appears at larger sizes with tight negative tracking, creating a refined, magazine-like presence for the boutique name and major headlines. At smaller sizes, it loses legibility and should be reserved for display contexts above 1.25rem. DM Sans maintains clarity across all weights and sizes, with the Medium weight (500) used for navigation to create subtle hierarchy against Regular body text. Bold (700) is reserved for labels, prices, and call-to-action emphasis.

The DM Sans family is designed by Colophon Foundry and Jonny Pinhorn. Verify licensing for these families before production use. Tenor Sans carries no attributed designer or vendor in the available records. Applesystem and Times appear as system fallback references without attributed credits.

## Layout

The layout follows a centered, contained model with generous horizontal padding and clear vertical rhythm. Content lives within a maximum width container, creating comfortable reading margins on large screens while maintaining full-bleed sections for visual impact.

The header occupies a fixed position with two tiers: a top bar for utility functions (search, account, cart, dark mode toggle) and a primary navigation row with category links. The brand wordmark centers in the header, anchoring the composition. Header padding uses 2.5rem horizontal gutters with 1.125rem top spacing.

Hero sections employ full-width photography with overlaid text and call-to-action buttons positioned in the lower left quadrant. This asymmetric placement creates dynamic tension while keeping the subject visible. Below the hero, product grids use consistent card sizing with 0.5rem gaps between items, creating tight, scannable rows.

Section spacing follows a 4rem vertical rhythm for major divisions, with 2.5rem for related content groups. Product cards use a 6px corner radius for subtle softness without excessive roundness. The cart drawer slides from the right edge, occupying approximately one-third of viewport width on desktop with a dark surface treatment matching the header.

The footer expands to full width with a warm off-white background, organized in a multi-column grid. A distinctive marquee element repeats the brand name with decorative star separators, creating horizontal motion and brand reinforcement. Below, utility links, payment icons, currency selector, and email subscription form distribute across the available space.

## Visual language

Photography drives the visual experience, with lifestyle and product images presented at large scale with minimal framing. The dark mode environment creates a gallery aesthetic where images appear to float on the deep charcoal ground. Product cards show full-bleed photography with information appearing on hover or below the image.

The brand voice is warm and personal, reflected in the serif display typography and the handwritten-quality botanical illustration in the footer. The starburst or asterisk motif appears as a decorative separator in the marquee and potentially elsewhere as a brand signature element.

Interface elements maintain restraint: buttons use subtle borders and minimal fill, letting typography carry the interaction signal. The dark mode toggle, cart indicator, and search icon use simple line weights without heavy containers. This lightness prevents the interface from competing with merchandise photography.

Color mode switching is a core interaction, with the toggle prominently placed in the header. The transition between dark and light modes should feel intentional, with all surfaces, text, and borders shifting in coordinated harmony. The warm accent color provides continuity across both modes.

## Components

### Header

- **Anatomy**: Two-row structure with utility bar above and category navigation below, centered brand wordmark
- **Surface**: Dark mode uses inverse-canvas (#1F1F1F) with inverse-ink (#E6E6E6) text; light mode uses canvas (#FFFFFF) with ink (#171717) text
- **Typography**: Navigation links use navigation token; brand uses brand-wordmark token
- **Spacing**: 2.5rem horizontal padding, 1.125rem top padding, 1rem vertical gaps between elements
- **Composition**: Flexbox with space-between alignment for utility items, centered logo, horizontal scroll or wrap for category links

### Hero Banner

- **Anatomy**: Full-width container with background image, text overlay in lower left, primary CTA button
- **Surface**: Image-driven with semi-transparent dark gradient overlay for text legibility
- **Typography**: Hero headline uses hero-display token; CTA uses label token
- **Shape**: 0.375rem corner radius on container
- **Spacing**: Generous internal padding (10rem+ top) to push content toward lower portion

### Product Card

- **Anatomy**: Image container with optional secondary image on hover, product title, price, and quick-action buttons
- **Surface**: Transparent in grid context; image fills container with 0.375rem radius
- **Typography**: Product name uses body-small; price uses label token
- **Spacing**: 0.5rem gap in grid layout; internal padding 1.75rem 2.25rem for information area

### Button (Primary)

- **Anatomy**: Text label with optional icon, contained within bordered rectangle
- **Surface**: Dark mode uses action (#262626) fill with inverse-ink text; light mode uses action-surface (#F7F7F7) fill with ink text
- **Border**: 1px solid action-border in light mode, 1px solid inverse-border in dark mode
- **Shape**: 0.125rem corner radius for subtle squareness
- **Spacing**: Horizontal padding 2.8125rem, vertical padding context-dependent (0.625rem for compact, 1.25rem for prominent)

### Cart Drawer

- **Anatomy**: Slide-out panel from right edge, header with title and close action, empty state or item list, footer with checkout action
- **Surface**: inverse-canvas (#1F1F1F) background, inverse-ink (#E6E6E6) text
- **Typography**: Title uses section-display; empty state uses body; CTA uses label
- **Spacing**: 2.5rem internal padding, 1rem gaps between sections

### Footer

- **Anatomy**: Marquee brand text, multi-column link grid, payment icons, currency selector, email subscription, social links, legal text
- **Surface**: surface-warm (#EEF1E9) background with ink (#171717) text
- **Typography**: Section headers use body with Medium weight; links use body-small; legal uses body-small at muted color
- **Border**: 1px solid border (#C1C1C1) top and bottom separators
- **Spacing**: 3.75rem vertical padding, 2.5rem horizontal padding

### Navigation Overlay

- **Anatomy**: Full-screen or partial overlay with category links, close control, secondary link list
- **Surface**: canvas (#FFFFFF) background with ink (#171717) text
- **Typography**: Primary links use section-display; secondary links use body
- **Spacing**: 2.5rem padding from edges, 1.5rem vertical gaps between link groups

## Responsive behavior

The design maintains its dual-mode character across viewport sizes with proportional scaling. The header collapses to a hamburger-triggered overlay on narrow screens, preserving the category structure in a vertical stack. Product grids reflow from four columns to two and finally single column, maintaining consistent card proportions.

The cart drawer becomes full-screen on mobile, maximizing touch targets and readable line lengths. Hero banners shift from side-positioned text to centered overlays as viewport narrows, ensuring the call-to-action remains accessible without obscuring the photographic subject.

Typography scales down modestly: hero-display reduces to 2.5rem on tablet and 2rem on mobile, while body text maintains 1.125rem for readability. Navigation links in the overlay use larger sizes (section-display) to create clear touch targets.

Footer columns stack vertically on narrow screens, with the email subscription form expanding to full width. Payment icons and social links center-align when the multi-column layout breaks down.

## Practical implementation guidance

### Preserve
- The stark contrast between dark and light modes—this polarity is central to the brand experience
- Tenor Sans for display and brand contexts; its editorial quality distinguishes the boutique positioning
- Generous product photography with minimal framing; the gallery-like presentation elevates merchandise
- The warm olive accent for special moments; used sparingly, it creates memorable brand recognition
- Consistent 0.375rem card radius across product and content containers

### Avoid
- Adding heavy shadows or dimensional effects; the flat, clean aesthetic is intentional
- Using Tenor Sans below 1.25rem; legibility suffers and the refined character is lost
- Introducing additional accent colors; the restrained palette supports merchandise photography
- Centering hero text on desktop; the asymmetric lower-left placement creates visual interest
- Overloading the header with promotional banners; the clean utility bar maintains focus

### Recommended Build Order
1. Establish color mode system with CSS custom properties and toggle mechanism
2. Implement DM Sans and Tenor Sans with complete weight loading
3. Build header with dual-row structure and responsive collapse
4. Create hero banner with gradient overlay and asymmetric text placement
5. Develop product card component with hover states and grid system
6. Implement cart drawer with slide animation and empty state
7. Construct footer with marquee, multi-column grid, and subscription form
8. Add navigation overlay for mobile and collapsed states

### Accessibility
- Ensure color mode toggle respects system preferences via prefers-color-scheme
- Maintain minimum 4.5:1 contrast for all body text in both modes
- Provide visible focus indicators on all interactive elements; the subtle borders need clear focus states
- Include aria-labels on icon-only buttons (cart, search, close, dark mode toggle)
- Ensure product images have descriptive alt text for screen reader users
- Test keyboard navigation through the cart drawer and mobile overlay; trap focus appropriately when these are open

## Scope note

This guide covers the homepage, cart drawer, navigation overlay, and footer as visible in the supplied captures. Product detail pages, checkout flow, account dashboards, and collection filtering interfaces are not represented. Motion behavior for mode transitions, hover states, and cart interactions should be defined during implementation. Measurements are exact values from the retained interface records.
