# How dribbble.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dribbble.com-design)

Last updated: 2026-08-10

## Captured pages

[![Custom lettering logotype shot page with deep navy background and cream script typography for image inc](https://pin.fontofweb.com/4185?format=jpg)](https://design.withfudge.com/share/pin-4185)

[Custom lettering logotype shot page with deep navy background and cream script typography for image inc](https://design.withfudge.com/share/pin-4185)

[![Homepage hero section with navigation bar, Pro upgrade banner, and lime green accent cards showing user metrics](https://pin.fontofweb.com/4184?format=jpg)](https://design.withfudge.com/share/pin-4184)

[Homepage hero section with navigation bar, Pro upgrade banner, and lime green accent cards showing user metrics](https://design.withfudge.com/share/pin-4184)

[![Blog article page with split editorial layout featuring green and lime brand imagery alongside article headline and social share buttons](https://pin.fontofweb.com/733?format=jpg)](https://design.withfudge.com/share/pin-733)

[Blog article page with split editorial layout featuring green and lime brand imagery alongside article headline and social share buttons](https://design.withfudge.com/share/pin-733)

[![Stories blog index with dated article list, thumbnail images, and muted metadata typography on white background](https://pin.fontofweb.com/732?format=jpg)](https://design.withfudge.com/share/pin-732)

[Stories blog index with dated article list, thumbnail images, and muted metadata typography on white background](https://design.withfudge.com/share/pin-732)

## Overview

Dribbble presents a dual-mode visual system built for creative professionals. The platform alternates between a clean, airy light mode for browsing and editorial reading, and a dramatic dark mode for showcasing portfolio work. The interface centers on a variable sans-serif typeface that scales from tight, bold headlines to readable body copy without switching families. A signature lime green accent punctuates the otherwise restrained palette, appearing in promotional cards, Pro badges, and select interactive moments. The overall impression is gallery-like: generous whitespace frames full-bleed imagery and designer content, while the UI recedes into precise, functional geometry. Navigation stays minimal and persistent, allowing the creative work to dominate the visual hierarchy.

## Colors

The color system operates in two primary modes with a shared accent. Light mode serves the homepage, blog, and discovery surfaces. Dark mode appears on individual shot pages and portfolio presentations. The lime accent bridges both contexts.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, button fills, dark backgrounds, navigation |
| canvas | #ffffff | Page backgrounds, card surfaces, button text on dark |
| surface | #f3f4f6 | Subtle section backgrounds, banner bars, inactive states |
| accent-lime | #c8f560 | Promotional cards, Pro highlights, metric callouts, energetic accents |
| deep-navy | #0a0a1a | Shot page dark backgrounds, immersive portfolio presentation |

Light mode dominates the marketing and editorial experience. The near-white canvas lets photography and design work read with full saturation. A cool gray surface tone appears behind announcement banners and secondary sections, creating gentle elevation without shadow. The ink black provides maximum contrast for headlines and primary actions.

Dark mode inverts this relationship for content presentation. The deep navy ground absorbs light and makes bright artwork pop, as seen in the custom lettering shot where cream logotype floats against the void. This mode is reserved for immersive viewing, not utility navigation.

The lime accent functions as the platform's energetic signature. It appears in metric cards on the homepage, drawing attention to quantitative claims without overwhelming the composition. It also surfaces in promotional contexts and seasonal campaigns. The saturation is high enough to feel electric against neutrals, yet the yellow-green bias keeps it from reading as pure commercial urgency.

## Typography

The system relies on a single variable font family, Mona Sans, deployed across all weights and optical sizes. This creates cohesion from billboard headlines to legal microcopy. The variable weight axis allows smooth graduation between Regular, Medium, Semibold, and Bold as contexts demand.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Mona Sans | 4rem | 700 | 1.1 | -0.02em | Homepage headlines, major section titles |
| section-display | Mona Sans | 2.5rem | 700 | 1.2 | -0.01em | Article titles, feature headings |
| body | Mona Sans | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, general reading |
| body-small | Mona Sans | 0.875rem | 400 | 1.5 | 0 | Secondary descriptions, metadata, captions |
| label | Mona Sans | 0.75rem | 500 | 1.4 | 0.02em | Buttons, badges, category tags, timestamps |
| navigation | Mona Sans | 0.875rem | 500 | 1 | 0 | Primary nav items, dropdown triggers |

The hero-display token carries tight negative tracking and a dense line height that suits large viewport presentations. Section-display relaxes slightly for longer editorial headlines. Body copy maintains generous leading for comfortable reading in blog articles and description blocks. The label token's slight positive tracking aids legibility at small sizes, particularly in uppercase badge treatments.

Verify licensing for these families before production use. The variable font file supports weight and width axes; implementers should confirm subsetting and licensing terms for web deployment.

## Layout

The layout system favors centered, contained widths with generous vertical breathing room. Major sections stack with substantial separation, creating clear narrative progression down the page.

The homepage employs a split-composition hero: large typographic claims occupy the left portion while illustrative or data-driven cards float on the right. This asymmetry breaks the rigid grid without abandoning structure. Below the hero, content flows in standard single-column or multi-column grids depending on density needs.

Blog pages use a two-column editorial split. The left column carries full-bleed imagery or featured media; the right column holds headline, byline, date, and social sharing actions. This arrangement mirrors magazine layouts and keeps reading lines at optimal measure. Article index pages revert to a vertical list with thumbnail previews, dates, and excerpt text.

Navigation persists as a top bar with minimal height. Items align left with dropdown indicators; primary actions anchor right. A full-width banner below the nav communicates promotional messaging with an icon badge, text, and linked call-to-action.

Spacing follows a 4px base unit. Section vertical padding typically equals 6rem, establishing clear territory between content blocks. Internal component padding uses 1rem to 1.5rem for cards and panels. Tight 0.5rem spacing handles inline badge and label groupings.

## Visual language

The visual language balances creative expression with functional clarity. Rounded corners appear throughout but with purpose: buttons use full pill shapes for friendly clickability, cards use moderate rounding for contained content, and small badges use minimal rounding for tag-like immediacy.

Imagery dominates the experience. Thumbnails, hero shots, and article feature images appear without heavy borders or shadows, letting color and composition speak. When UI elements do carry backgrounds, they are flat and opaque—no glassmorphism or heavy drop shadows appear in the visible system.

The lime accent operates as a selective highlighter rather than a dominant theme. It appears where the platform needs to direct attention: upgrade prompts, new feature announcements, and quantitative proof points. This restraint prevents the energetic color from diluting its own impact.

Typography carries the structural load. With only one family in play, weight and size variations must do the work of establishing hierarchy. Bold headlines against light body weights create clear scansion without introducing secondary typefaces. The variable font's width axis could support condensed treatments for space-constrained navigation, though standard widths suffice for most contexts.

## Components

**Primary Button**
- Anatomy: Text label centered within a pill-shaped container
- Surface and text color: Ink background with canvas text; or canvas background with ink text for secondary variant
- Typography: label token, medium weight, slight positive tracking
- Shape: Full pill with 9999px border radius
- Spacing: 0.75rem vertical padding, 1.5rem horizontal padding
- Composition: Typically appears in navigation bar or hero CTAs
- Variants: Filled primary on dark; outlined secondary on light backgrounds

**Secondary Button / Ghost Button**
- Anatomy: Text label with optional icon, bordered container
- Surface and text color: Transparent or canvas background, ink border and text
- Typography: label token
- Shape: Full pill matching primary button
- Spacing: Same padding as primary
- Composition: Used for less critical actions, social shares, or filter toggles

**Accent Card**
- Anatomy: Background container with headline, metric, or promotional content
- Surface and text color: Lime accent background with ink text
- Typography: Varies by content; labels for metadata, section-display for headlines
- Shape: 1rem border radius
- Spacing: 1.5rem internal padding
- Composition: Floats in hero sections or grid cells as attention anchor
- Variants: May include small circular indicators or percentage badges

**Article Card**
- Anatomy: Thumbnail image, date label, headline, excerpt text
- Surface and text color: Canvas background, ink headline, muted ink or gray for excerpt
- Typography: label for date, section-display for headline, body-small for excerpt
- Shape: 0.75rem border radius on thumbnail
- Spacing: 1rem gap between image and text, 1.5rem between list items
- Composition: Vertical stack in index lists; horizontal split in featured treatments

**Pro Badge**
- Anatomy: Small rectangular pill with "PRO" text
- Surface and text color: Ink background, canvas text
- Typography: label token, often uppercase
- Shape: Minimal 0.25rem radius
- Spacing: 0.25rem vertical, 0.5rem horizontal
- Composition: Inline before promotional text or adjacent to user names

**Navigation Bar**
- Anatomy: Logo or wordmark left, primary links center-left, actions right
- Surface and text color: Transparent or canvas background, ink text
- Typography: navigation token
- Shape: Full-width bar, no border radius
- Spacing: Approximately 1rem vertical padding
- Composition: Sticky or fixed top position; dropdown indicators on parent items

**Announcement Banner**
- Anatomy: Icon badge, text message, linked CTA with arrow
- Surface and text color: Surface gray background, ink text, underlined link
- Typography: body-small for message, label for badge
- Shape: Full-width strip, no radius
- Spacing: Compact vertical padding, generous horizontal inset
- Composition: Sits directly below navigation, dismissible or persistent

## Responsive behavior

The layout assumes a desktop-first presentation based on visible material. Implementers should plan for stack transformations at narrower viewports. The homepage hero's split composition should collapse to single-column, with accent cards falling below the typographic headline. Blog article splits should similarly stack, placing imagery above the text column.

Navigation should compress to a hamburger menu or condensed icon set on small screens, preserving the right-aligned primary action. The announcement banner may truncate or wrap its message, maintaining the badge and link as touch targets.

Type scale should reduce proportionally. Hero-display may drop to section-display size on tablets and to a large body size on mobile. Maintain minimum 1rem body copy for readability. Touch targets for buttons and links should meet 44px minimum height regardless of viewport.

Grid systems should reflow from multi-column to single-column at appropriate breakpoints. Article index lists already present as vertical stacks and require minimal adjustment. Card grids should shift from three or four columns to two, then one.

## Practical implementation guidance

**Preserve**
- The stark contrast between light editorial surfaces and dark immersive presentation modes
- Single-family typography hierarchy using weight and size rather than family switching
- Selective, restrained use of the lime accent for maximum impact
- Generous whitespace and section separation that lets creative content breathe
- Pill-shaped primary actions with bold, immediate presence

**Avoid**
- Introducing secondary typefaces that compete with the clean Mona Sans system
- Overusing the lime accent to the point of visual fatigue
- Heavy shadows, borders, or dimensional effects that fight the flat, gallery-like aesthetic
- Tight line heights on body copy that impair reading in longer articles
- Generic placeholder imagery that dilutes the designer-centric positioning

**Recommended Build Order**
1. Establish the type scale with Mona Sans at all weights, verifying variable font loading
2. Implement the dual-mode color system with CSS custom properties for light and dark contexts
3. Build the navigation bar and announcement banner as persistent top surfaces
4. Create the button system with pill shapes and clear primary/secondary distinction
5. Develop card components for metrics, articles, and promotional content
6. Compose the homepage hero with asymmetric split layout
7. Build blog article and index templates with editorial spacing
8. Add accent elements and badges with disciplined color application

**Accessibility**
- Ensure ink-on-canvas and canvas-on-ink combinations meet WCAG AA contrast minimums; the visible pairings do
- Test lime accent on both light and dark grounds; it may need dark text overlay for sufficient contrast
- Provide focus indicators for all interactive elements; the flat design benefits from clear outline or offset focus rings
- Maintain logical heading hierarchy from hero-display through body tokens
- Respect reduced-motion preferences for any scroll-triggered or hover animations

## Scope note

This guide covers the homepage, shot presentation, and blog article surfaces visible in the supplied material. Mobile breakpoints, interactive dropdowns, search interfaces, user profiles, and motion behavior are not represented. Measurements are practical adaptation targets based on visual interpretation of the desktop experience.
