# How vaultandzn.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/vaultandzn.com-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with navigation, announcement banner, and category grid showing product cards with rounded corners and dark theme](https://pin.fontofweb.com/5302?format=jpg)](https://design.withfudge.com/share/pin-5302)

[Homepage hero with navigation, announcement banner, and category grid showing product cards with rounded corners and dark theme](https://design.withfudge.com/share/pin-5302)

[![Footer section with email signup form, brand logo, social icons, country selector, and payment method badges on dark background](https://pin.fontofweb.com/5303?format=jpg)](https://design.withfudge.com/share/pin-5303)

[Footer section with email signup form, brand logo, social icons, country selector, and payment method badges on dark background](https://design.withfudge.com/share/pin-5303)

## Overview

Vault andzn presents a dark, immersive e-commerce experience built around curated design tools and assets. The visual system prioritizes content density through high-contrast typography against near-black backgrounds, creating a gallery-like atmosphere where product imagery becomes the focal point. The interface employs a restrained two-tier color structure: deep charcoal surfaces elevate slightly from an even darker canvas, while white and light gray typography maintains legibility without visual fatigue. Rounded containers soften the otherwise stark minimalism, appearing in navigation bars, product cards, input fields, and footer panels. The overall impression is that of a premium digital boutique—editorial in its spacing, confident in its restraint, and technically precise in its component execution. The homepage architecture flows from an announcement banner through a hero value proposition into a browsable category grid, concluding with a newsletter capture and comprehensive footer.

## Colors

The color system operates on a near-monochrome dark palette with strategic warmth in photographic content. All interface colors serve functional roles rather than decorative purposes.

| token | value | use |
|---|---|---|
| canvas | #0a0a0a | Deepest background layer, page base |
| surface | #141414 | Elevated panels, cards, input fields, footer sections |
| ink | #e8e8e8 | Primary headings, body text, active navigation |
| muted-ink | #a0a0a0 | Secondary descriptions, placeholders, inactive states |
| border | #2a2a2a | Container outlines, dividers, input borders |
| action | #ffffff | High-emphasis interactive elements, logo mark |

The canvas and surface relationship creates subtle depth without introducing color complexity. Surface elements appear to float approximately 4-6% lighter than the base, sufficient for boundary recognition without breaking the immersive dark environment. Ink provides the primary reading experience at roughly 91% lightness, ensuring WCAG-compliant contrast against both canvas and surface. Muted-ink serves descriptive and supplementary text at approximately 63% lightness, establishing clear information hierarchy. Border values remain intentionally subdued—visible enough to define interactive regions like input fields and navigation containers, yet receding from conscious attention. The action token appears sparingly, reserved for the brand logo mark and moments requiring maximum emphasis. Product photography introduces external color warmth—terracotta, sage, amber, and denim blues—which provides the only chromatic variation in the experience.

## Typography

The typographic system pairs a clean sans-serif for display and interface elements with a monospace face for technical and supplementary content. This dual-family approach reinforces the brand's positioning between creative expression and technical precision.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3rem | 600 | 1.1 | -0.02em | Homepage hero headlines |
| section-display | Inter | 2.25rem | 600 | 1.15 | -0.01em | Section headings, category titles |
| body | Inter | 1rem | 400 | 1.6 | 0em | General reading text |
| body-mono | JetBrains Mono | 0.875rem | 400 | 1.5 | 0.02em | Announcements, captions, form labels |
| label | Inter | 0.75rem | 500 | 1.4 | 0.04em | Product tags, metadata |
| navigation | Inter | 0.875rem | 500 | 1.5 | 0em | Menu items, buttons |

Display typography employs tight negative tracking and weights no lighter than 600, creating assertive headlines that anchor each section. The hero-display token at 3rem establishes the maximum type scale, used for the homepage value proposition "Analog Feel. Digital Power." Section-display at 2.25rem serves secondary headings like "Browse by category" and "Keep In Touch." Body text maintains generous line height at 1.6 for comfortable reading of longer descriptions. The body-mono token introduces technical character through JetBrains Mono—visible in the announcement banner, email input placeholder, and footer legal text. This monospace presence suggests tool-building precision without overwhelming the creative sensibility. Label typography at 0.75rem appears in uppercase or small-caps treatment for product metadata tags. Navigation weight at 500 sits between body and display, providing clear affordance without competing with headlines.

Verify licensing for these families before production use.

## Layout

The layout system employs centered content bands with generous horizontal padding and consistent vertical rhythm. Maximum content width appears constrained to approximately 1200px, creating focused reading lanes that prevent visual dispersion on large viewports.

The page structure follows a predictable vertical stack: announcement banner, navigation header, hero section, category grid, newsletter section, and footer. Each major section receives substantial vertical padding—approximately 5rem at section boundaries—to create breathing room between content groupings. Internal content gaps of 1.5rem separate related elements within sections.

The navigation header floats as a rounded pill-shaped container, horizontally spanning most of the viewport width with internal padding. This treatment distinguishes it from edge-to-edge alternatives while maintaining full navigational utility. The hero section left-aligns its text content with the category grid below, establishing a consistent left margin that anchors the reading path.

The category grid employs a four-column layout with equal-width cards and 1.5rem gutters. Cards maintain a 4:5 aspect ratio for their imagery, creating vertical emphasis that accommodates product previews effectively. Below each card image, product titles center-align while category links left-align with arrow indicators, creating a subtle hierarchical distinction.

Footer architecture divides into two rounded panels: an upper panel for newsletter capture and a lower panel for brand identity, social links, and legal information. This panel-within-panel structure extends the surface elevation logic while organizing disparate footer functions.

## Visual language

The visual language balances technical minimalism with organic warmth introduced through photography. The dominant impression is one of curated restraint—every element earns its place through functional necessity rather than decorative impulse.

Rounded corners appear universally: navigation containers, cards, input fields, and footer panels all share softened corners that mitigate the severity of the dark palette. The radius scale progresses from 0.5rem for compact inputs through 0.75rem for product cards to 1rem for major panels, creating consistent proportional relationships.

Imagery treatment varies by content type. Product photography appears full-bleed within cards with slight rounded corners, preserving photographic integrity while containing it within the design system. The brand logo mark—a continuous line forming abstract letterforms—appears in white against dark backgrounds, its organic curves providing the only non-rectilinear visual element in the interface.

Iconography remains minimal and functional: social platform icons in the footer, utility icons for search and account access in navigation, and arrow indicators for category links. These elements adopt the muted-ink color by default, transitioning to ink on interaction.

The announcement banner at page top introduces a thin horizontal rule beneath its text, creating separation without visual weight. This hairline treatment extends the border token's role into temporal content—information that updates rather than persists.

## Components

### Announcement Bar

A full-width text strip at the page apex containing time-sensitive messaging. Anatomy consists of centered text with a trailing arrow indicator and a subtle bottom border. Typography uses body-mono at 0.875rem with ink color. The border below uses the border token at 1px height. Background remains canvas, allowing the bar to recede while remaining legible.

### Navigation Header

A rounded pill-shaped container floating below the announcement bar. Anatomy includes the brand logo mark left-aligned, primary navigation links center-clustered, and utility controls right-aligned. The container uses surface background with border token outline, rounded to approximately 1rem. Navigation links use the navigation token at 0.875rem weight 500. The active state receives an underline treatment. Utility area contains region selector, search icon, account icon, and cart icon—each as simple stroke icons in muted-ink. The region selector displays "Nigeria | NGN" with a dropdown indicator, suggesting localization functionality.

### Hero Section

A text-focused value proposition occupying substantial vertical space. Anatomy includes a headline, supporting description, and call-to-action button. The headline uses hero-display token, left-aligned with generous right margin to prevent line-length issues. Description follows at body-mono token, providing technical specificity. The "Shop All" button uses primary-button styling: transparent background, 1px border in border color, pill-shaped with 0.75rem vertical and 1.5rem horizontal padding. Typography uses navigation token at 0.875rem weight 500.

### Product Card

A vertical content unit combining imagery, metadata tags, title, and category link. Anatomy includes: image container at 4:5 aspect ratio with rounded corners; overlaid label pills at bottom-left containing format indicators and descriptors; product title in section-display token below image; category link in navigation token with right arrow. Surface background elevates cards from canvas. Label pills use semi-transparent dark backgrounds with label typography in ink. The title appears in uppercase treatment for product names, creating distinctive visual rhythm against sentence-case body content.

### Email Capture Form

A centered subscription interface within the upper footer panel. Anatomy includes a heading in section-display token, descriptive text in body-mono, and a single input field with submit affordance. The input uses surface background, border token outline, and rounded corners at 0.5rem. Placeholder text "Email" appears in muted-ink with body-mono styling. A right-aligned arrow icon within the input provides submit affordance without separate button element.

### Footer Panel

Two stacked rounded containers completing the page. The upper panel contains the email capture form. The lower panel centers the brand logo mark, tagline "Your Design Toolkit, Curated," description "Assets and tools for designers," and social platform icons in a horizontal row. Below this, a region selector dropdown and payment method badges occupy a split layout. Legal links and copyright occupy the bottom edge in body-mono at reduced size. The entire lower panel uses surface background with 1rem rounded corners and internal padding of approximately 2.5rem.

## Responsive behavior

The supplied images show a desktop viewport. Based on the component structures visible, several responsive adaptations should be considered. The four-column category grid should collapse to two columns on tablet viewports and single column on mobile, maintaining card proportions and internal spacing. The navigation pill should transform to a hamburger menu on narrow viewports, preserving access to the full link set without horizontal overflow. Hero headline size should scale down to section-display dimensions on mobile to prevent excessive line breaks. The email input should remain full-width within its container across all breakpoints. Footer social icons and payment badges should wrap to multiple rows rather than compressing horizontally. Region selector and legal links should stack vertically on narrow viewports.

## Practical implementation guidance

### Preserve
- The near-black canvas with slightly elevated surface panels—this two-tier depth system defines the immersive quality
- Monospace typography for technical and supplementary content; the Inter/JetBrains Mono pairing is distinctive
- Generous section spacing and rounded container corners throughout
- Product card aspect ratio and overlaid label pill treatment
- Uppercase product titles against sentence-case body text

### Avoid
- Introducing additional colors beyond the monochrome system and photographic content
- Sharp-cornered containers that would contradict the softened aesthetic
- Decorative elements without functional purpose
- Body text smaller than 1rem, which would compromise legibility on dark backgrounds
- Border colors lighter than the surface elevation would support

### Recommended Build Order
1. Establish canvas and surface color tokens with proper contrast ratios
2. Implement typography scale with both sans-serif and monospace families
3. Build navigation header with rounded container and utility icon layout
4. Create hero section with headline hierarchy and pill button
5. Develop product card component with image container, label pills, and title treatment
6. Construct category grid with responsive column behavior
7. Implement footer panels with email capture and brand information
8. Add announcement banner with temporal content support

### Accessibility
- Ensure all text meets WCAG AA contrast minimums against dark backgrounds; ink on canvas exceeds 7:1 ratio
- Provide visible focus indicators for all interactive elements, using border or outline treatments that respect the rounded corner system
- Maintain keyboard operability for the email input arrow submit pattern
- Use semantic heading hierarchy: single h1 in hero, h2 for section headings, h3 for product titles
- Include alt text for all product imagery that describes visible content and overlaid labels
- Consider reduced-motion preferences for any scroll-triggered animations

## Scope note

This guide covers the homepage surface including navigation, hero, category browsing, newsletter capture, and footer components. Product detail pages, checkout flows, account interfaces, and mobile-specific layouts are not represented in the supplied material. Measurements are practical adaptation targets derived from visual inspection. Motion behavior, loading states, and form validation feedback are not documented and should be designed to complement the established static system.
