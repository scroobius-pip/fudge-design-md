# How profitpath.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/profitpath.com-design)

Last updated: 2026-08-10

## Captured pages

[![Social proof section with bright blue background, white testimonials, and yellow star ratings showing seller success stories](https://pin.fontofweb.com/4486?format=jpg)](https://design.withfudge.com/share/pin-4486)

[Social proof section with bright blue background, white testimonials, and yellow star ratings showing seller success stories](https://design.withfudge.com/share/pin-4486)

[![Feature grid showcasing six product capabilities with light UI cards, blue accents, and software interface screenshots](https://pin.fontofweb.com/4485?format=jpg)](https://design.withfudge.com/share/pin-4485)

[Feature grid showcasing six product capabilities with light UI cards, blue accents, and software interface screenshots](https://design.withfudge.com/share/pin-4485)

[![Pricing page with four tier columns, blue highlighted premium plan, toggle controls, and detailed feature checklists](https://pin.fontofweb.com/4484?format=jpg)](https://design.withfudge.com/share/pin-4484)

[Pricing page with four tier columns, blue highlighted premium plan, toggle controls, and detailed feature checklists](https://design.withfudge.com/share/pin-4484)

[![Hero section with large gradient headline, product dashboard screenshot, navigation bar, and partner logo row](https://pin.fontofweb.com/4483?format=jpg)](https://design.withfudge.com/share/pin-4483)

[Hero section with large gradient headline, product dashboard screenshot, navigation bar, and partner logo row](https://design.withfudge.com/share/pin-4483)

## Overview

ProfitPath presents a clean, modern SaaS aesthetic built around trust and data clarity. The visual system centers on generous white space, a vibrant blue accent palette, and crisp typography that balances authority with accessibility. The homepage opens with a bold gradient headline treatment that shifts from dark ink to bright blue, immediately establishing the brand's energetic yet professional character. Below the hero, the design transitions into feature showcases, social proof, and pricing tiers that maintain visual consistency through repeated surface treatments, rounded corners, and systematic spacing.

The interface feels intentionally lightweight despite the complexity of the underlying arbitrage software. Light gray surfaces elevate cards above the white canvas without heavy shadows, while the bright blue action color draws attention to conversion points throughout the page. Dashboard screenshots embedded in the hero and feature sections reinforce the product's data-rich nature, with colorful status indicators and chart visualizations that contrast against the restrained marketing page palette. The overall impression is of a capable, established tool that prioritizes user success and transparent pricing.

## Colors

The color system relies on a restrained foundation with a single vibrant accent. White and near-white surfaces dominate, with blue serving as the primary brand and action color across buttons, highlights, and section backgrounds.

| token | value | use |
|---|---|---|
| action | #3B82F6 | Primary buttons, links, highlighted borders, testimonial section backgrounds, and interactive accents |
| action-hover | #2563EB | Darker blue for hover states on action elements |
| canvas | #FFFFFF | Page background, elevated card surfaces, and text on dark or colored sections |
| surface | #F8FAFC | Subtle background for alternating sections, pricing cards, and feature grids |
| surface-elevated | #FFFFFF | Card backgrounds with borders, modal surfaces |
| ink | #111827 | Primary headings, body text, and navigation |
| ink-secondary | #4B5563 | Descriptive text, feature explanations, and secondary labels |
| ink-muted | #6B7280 | Placeholder text, disabled states, and fine print |
| border | #E5E7EB | Card outlines, dividers, and input borders |
| border-subtle | #F1F5F9 | Very light separators for nested content and feature card edges |
| success | #10B981 | Positive indicators, checkmarks, and ROI highlights in dashboard imagery |
| warning | #F59E0B | Attention badges, limited-time labels, and status indicators |
| star | #FBBF24 | Testimonial rating stars and achievement indicators |

The blue accent operates at full saturation for primary actions and section backgrounds, then shifts to a deeper tone for hover feedback. The neutral ink scale provides three clear levels of text hierarchy without introducing additional hues. Dashboard screenshots within the marketing page introduce green, orange, and red data indicators, but these remain confined to product imagery rather than the core interface palette.

## Typography

ProfitPath uses Geist as its sole typeface, a contemporary sans-serif with clean geometry and open apertures that perform well at both display and data-dense sizes. The type system emphasizes size and weight contrast over style variation, creating clear hierarchy through scale rather than multiple families.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Geist | 3.5rem | 700 | 1.1 | -0.02em | Homepage headline with gradient color treatment |
| section-display | Geist | 2.5rem | 700 | 1.2 | -0.01em | Section headings for features, testimonials, and pricing |
| price-display | Geist | 2.5rem | 700 | 1.1 | -0.02em | Plan prices with currency symbols |
| body-large | Geist | 1.25rem | 400 | 1.6 | 0em | Hero subheadings and introductory paragraphs |
| body | Geist | 1rem | 400 | 1.6 | 0em | General paragraphs, feature descriptions, and list items |
| body-small | Geist | 0.875rem | 400 | 1.5 | 0em | Fine print, feature details, and metadata |
| label | Geist | 0.75rem | 500 | 1.4 | 0.02em | Buttons, badges, category labels, and navigation |
| navigation | Geist | 0.875rem | 500 | 1.4 | 0em | Top-bar links and dropdown triggers |

The hero headline combines two weights of the same size, with "Best Amazon Software" in dark ink and "Simplifying Online Arbitrage" in the action blue, creating a gradient-like typographic effect without actual CSS gradients. Section headings use tight negative tracking for a compact, confident presence. Body text maintains generous line height for readability in longer feature descriptions. Price displays use the same weight and tracking as hero text but appear within structured card layouts.

Verify licensing for Geist before production use. The typeface is attributed to Basementstudio, Andrés Briganti, Mateo Zaragoza, with distribution through Vercel.

## Layout

The page follows a centered, single-column flow with contained width for text and expanded width for visual showcases. The navigation bar sits at the top with a floating, pill-shaped container that separates it from the content below. The hero section occupies significant vertical space, centering its headline, subtext, and dual-button group above a large product screenshot that breaks the container bounds and extends toward the edges.

Feature sections use a grid system that adapts to content density. The six feature cards in the capabilities section arrange in a 2x3 grid on desktop, with each card containing an upper screenshot area and lower text description. The testimonial section inverts the layout with a full-width blue background, centering its heading and distributing three testimonial columns below. The pricing page presents four equal-width columns with the premium option elevated through border emphasis and a "Most popular" badge.

Spacing follows a clear rhythm: 6rem between major sections, 2rem between related content blocks, and 1.5rem internal padding for cards. The grid background visible in the hero area adds subtle texture without competing with content, using very light lines that suggest technical precision and data organization.

## Visual language

The visual character balances SaaS professionalism with approachable warmth. Rounded corners appear consistently across buttons, cards, and the navigation container, softening the technical subject matter. Shadows are minimal or absent; depth comes instead from subtle border definitions and background color shifts between white and light gray surfaces.

Product screenshots dominate the visual storytelling. The hero features a large dashboard mockup showing product listings with colorful status indicators, while feature cards contain smaller interface excerpts that demonstrate specific capabilities. These screenshots use realistic data and recognizable retail interfaces, grounding the marketing claims in tangible functionality.

Iconography appears functional rather than decorative: checkmarks for feature lists, stars for ratings, flags for region selection, and simple arrows for navigation. The star rating system uses filled yellow shapes against both white and blue backgrounds, maintaining consistent recognition. Region selectors in the pricing interface use small flag icons within rounded square containers.

The overall density feels calibrated for scanning: headlines and prices are large and isolated, supporting details are smaller and grouped, and interactive elements carry sufficient padding to feel approachable. The blue accent color appears with discipline, reserved for primary actions and the single testimonial section rather than scattered indiscriminately.

## Components

### Navigation bar

- **Anatomy**: Logo mark with wordmark on the left, centered navigation links with dropdown indicators, region selector and authentication actions on the right
- **Surface**: Transparent or white background with subtle shadow on scroll; contained within a rounded pill shape with generous horizontal padding
- **Typography**: Navigation token for links, label token for active buttons
- **Shape**: Fully rounded pill container with 9999px border radius
- **Spacing**: Approximately 1rem vertical padding, 2rem horizontal padding within the container
- **Composition**: Flex row with space-between alignment; navigation links centered with even gaps

### Hero section

- **Anatomy**: Two-line display headline with color transition, supporting paragraph, dual-button group, large product screenshot, partner logo row
- **Surface**: White canvas with subtle grid pattern background
- **Typography**: Hero-display for headline with inline color change from ink to action blue; body-large for subtext
- **Shape**: Screenshot container with rounded panel corners and subtle shadow
- **Spacing**: Generous vertical padding above and below content; screenshot breaks lower boundary
- **Composition**: Centered text alignment; buttons arranged horizontally with gap; screenshot spans near full width

### Feature cards

- **Anatomy**: Upper screenshot or illustration area, bold heading, descriptive paragraph
- **Surface**: White or very light gray with subtle border; no shadow
- **Typography**: Section-display size for headings at smaller scale (approximately 1.25rem); body-small for descriptions
- **Shape**: Rounded card corners at 0.75rem
- **Spacing**: 1.5rem internal padding; consistent gaps in grid layout
- **Composition**: 2x3 grid on desktop with equal column widths; screenshot areas maintain aspect ratio

### Testimonial section

- **Anatomy**: Eyebrow label, large section heading, three-column testimonial cards with avatar, name, role, star rating, and quote
- **Surface**: Full-width action blue background; white text throughout
- **Typography**: Label token for eyebrow; section-display for heading; body for quotes; body-small for names and roles
- **Shape**: Large rounded corners on section container; circular avatars
- **Spacing**: Section-level vertical padding; 2rem gaps between columns
- **Composition**: Centered heading; equal three-column layout; bottom link to additional stories

### Pricing cards

- **Anatomy**: Plan name, price with interval, description, primary or secondary action button, feature checklist with checkmark icons
- **Surface**: White with light border; highlighted plan uses action blue border at 2px width and subtle background tint
- **Typography**: Section-display for plan names; price-display for amounts; body-small for descriptions and features; label for buttons
- **Shape**: Rounded panel corners at 1rem
- **Spacing**: 1.5rem internal padding; consistent vertical rhythm between price, description, button, and list
- **Composition**: Four equal columns; highlighted plan centered with visual elevation; "Most popular" badge as pill overlay at top
- **Variants**: Starter, Pro, Premium, Enterprise tiers with increasing feature inclusion; Premium receives visual emphasis

### Billing toggle

- **Anatomy**: Product selector tabs, interval toggle with "SAVE 20%" badge, region selector with flag icons
- **Surface**: White background with light border container
- **Typography**: Label token for all controls
- **Shape**: Rounded inputs and buttons; pill badge for savings indicator
- **Spacing**: Compact internal padding with clear separation between control groups
- **Composition**: Three-part horizontal layout with space-between alignment

## Responsive behavior

The design should maintain its single-column flow on narrower viewports with proportional scaling. The hero headline may reduce to a single size rather than the two-tone treatment if space constraints break the gradient effect. Feature cards should stack vertically below a two-column intermediate breakpoint. Pricing columns become horizontally scrollable or stack with the highlighted plan prominently centered. Navigation links collapse into a menu trigger, preserving the pill-shaped container aesthetic. The testimonial section transitions from three columns to a single column with maintained blue background and centered text alignment.

## Practical implementation guidance

### Preserve
- The disciplined use of a single blue accent against neutral surfaces; this restraint defines the brand
- Generous rounded corners on all interactive and container elements; the soft geometry is distinctive
- The two-tone headline treatment in the hero; it creates immediate visual identity
- Realistic product screenshots with actual data; they substantiate marketing claims
- The clear hierarchy between price display, plan name, and feature lists in pricing cards

### Avoid
- Heavy drop shadows; the design achieves depth through color and border instead
- Additional accent colors beyond the established blue; dashboard imagery contains greens and oranges but these should not leak into UI controls
- Tight line heights on body text; the generous leading supports scanning lengthy feature descriptions
- Sharp corners on buttons or cards; they would contradict the approachable tone
- Centered text in feature descriptions; left-aligned text supports readability in the card grid

### Recommended build order
1. Establish the type scale with Geist at all defined sizes, verifying rendering at display and body scales
2. Implement the color tokens with particular attention to the action blue and its hover state
3. Build the navigation container with its distinctive pill shape and internal flex layout
4. Create the hero section with the two-tone headline and screenshot container
5. Develop the feature card component with screenshot area and text stacking
6. Implement the pricing grid with toggle controls and four-tier card system
7. Add the testimonial section with inverted color scheme and column layout

### Accessibility
- Ensure the blue testimonial section meets contrast requirements for white text; the action blue may need adjustment for small text
- Provide visible focus indicators on all interactive elements, using the action color with sufficient offset or outline
- Maintain logical tab order through the pricing toggle and card buttons
- Use semantic heading hierarchy despite the visual size similarities between section-display and price-display tokens
- Consider motion preferences for any scroll-triggered animations of the screenshot elements

## Scope note

This guide covers the marketing homepage and pricing page surfaces visible in the supplied images. The full application dashboard, mobile navigation patterns, checkout flow, and account management interfaces are not represented. Authentication states, error messaging, and loading skeletons for the pricing toggle require additional design exploration. Measurements are practical adaptation targets derived from visual inspection.
