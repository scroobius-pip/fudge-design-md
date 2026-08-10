# How zapier.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/zapier.com-design)

Last updated: 2026-08-10

## Captured pages

[![Pricing page announcement banner with white card on textured green background, featuring bold headline and arrow link](https://pin.fontofweb.com/4045?format=jpg)](https://design.withfudge.com/share/pin-4045)

[Pricing page announcement banner with white card on textured green background, featuring bold headline and arrow link](https://design.withfudge.com/share/pin-4045)

[![Interactive task slider with orange pill badge showing 400,000 tasks and dark circular handle on light track](https://pin.fontofweb.com/4044?format=jpg)](https://design.withfudge.com/share/pin-4044)

[Interactive task slider with orange pill badge showing 400,000 tasks and dark circular handle on light track](https://design.withfudge.com/share/pin-4044)

[![Four-column pricing grid with Free, Professional, Team, and Enterprise cards, dark buttons, and feature checklists](https://pin.fontofweb.com/4043?format=jpg)](https://design.withfudge.com/share/pin-4043)

[Four-column pricing grid with Free, Professional, Team, and Enterprise cards, dark buttons, and feature checklists](https://design.withfudge.com/share/pin-4043)

[![Notion integrations page with app icon, breadcrumb navigation, category tags, and three-column integration links](https://pin.fontofweb.com/1555?format=jpg)](https://design.withfudge.com/share/pin-1555)

[Notion integrations page with app icon, breadcrumb navigation, category tags, and three-column integration links](https://design.withfudge.com/share/pin-1555)

## Overview

Zapier's design system presents a mature, product-first visual language built for clarity and conversion. The interface rests on a warm off-white canvas that reduces eye strain while maintaining a clean, contemporary feel. Dark near-black typography provides strong readability hierarchy, with Degular serving as the distinctive display face for headlines and pricing, while Inter handles body text and interface elements with neutral efficiency. The signature orange accent appears sparingly but decisively—primarily on interactive moments like the task slider badge—creating memorable focal points without overwhelming the restrained palette. The system balances enterprise credibility with approachable warmth through rounded corners on cards and buttons, generous whitespace, and a consistent 4px relative unit that keeps all measurements in harmonious proportion.

## Colors

The color system operates on a principle of restraint with strategic warmth. The foundation is a warm off-white canvas that distinguishes Zapier from cooler, starker competitors. Dark ink tones anchor all text and primary actions, while a single vibrant orange serves as the unmistakable brand accent.

| token | value | use |
|---|---|---|
| canvas | #FAF8F5 | Page background, warm neutral ground |
| surface | #FFFFFF | Cards, banners, elevated containers |
| ink | #1A1A1A | Primary text, buttons, slider handles, strong borders |
| muted-ink | #4A4A4A | Secondary text, descriptions, feature lists |
| action | #FF4A00 | Task count badges, primary interactive highlights |
| action-hover | #E54200 | Hover state for action elements |
| border | #E5E2DE | Card outlines, dividers, subtle separators |
| border-strong | #D1CEC9 | Focused borders, banner outlines |

The warm canvas (#FAF8F5) appears consistently across pricing, integration, and homepage surfaces, creating continuity between marketing and product contexts. Dark ink (#1A1A1A) dominates all meaningful text and primary button surfaces, providing the weight and confidence expected of a workflow automation platform. The orange action color (#FF4A00) is deployed with discipline—visible in the task slider pill and potentially in primary call-to-action moments—ensuring it retains impact when encountered. Muted ink (#4A4A4A) serves descriptive copy and feature details, establishing clear hierarchy without introducing additional hue complexity. Border tones derive from the canvas warmth, avoiding the clinical gray common in generic systems.

## Typography

Zapier employs a dual-type strategy: Degular for display and brand moments, Inter for functional interface text. Degular's geometric confidence with subtle character shapes carries headline and pricing weight, while Inter's neutrality ensures readability across dense feature lists and navigation. The supplied font families include Degular, GT Alpina, Inter, Inter-500, and Inter-600.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Degular | 3rem | 600 | 1.05 | -0.02em | Page headlines, major announcements |
| section-display | Degular | 2rem | 600 | 1.1 | -0.01em | Section headers, plan names |
| heading | Degular | 1.5rem | 600 | 1.2 | 0 | Card titles, subsections |
| price-display | Degular | 2.5rem | 600 | 1 | -0.02em | Pricing amounts, large numerals |
| body | Inter | 1rem | 400 | 1.5 | 0 | Paragraphs, descriptions |
| body-medium | Inter | 1rem | 500 | 1.5 | 0 | Emphasized body, feature intros |
| label | Inter | 0.875rem | 500 | 1.4 | 0 | Buttons, tags, navigation items |
| caption | Inter | 0.75rem | 400 | 1.4 | 0.01em | Fine print, metadata |
| navigation | Inter | 0.875rem | 500 | 1 | 0 | Header links, footer links |

Degular appears in Medium, Regular, and Semibold weights from Oh No Type Company. GT Alpina Thin is available for specialized editorial moments. Inter spans Regular, 500, 600, and Bold weights from Rasmus Andersson via Rsms. The Inter-500 and Inter-600 families correspond to the Medium and Semibold weights of Inter, respectively. Verify licensing for these families before production use.

Type sizing follows a 4px step system. Display sizes use tighter leading and negative tracking for impact, while body sizes maintain generous line height for extended reading. Pricing numerals use the tightest leading to keep multi-line price displays compact.

## Layout

The layout system centers content with generous margins, using a consistent 4px base unit for all spacing decisions. Page containers appear to max out around 1200px with comfortable side padding. The pricing page demonstrates a four-column grid for plan cards at desktop widths, with the task slider occupying full container width above.

Key layout patterns include:

- **Centered single column** for announcement banners and hero content, with text-aligned-left content blocks
- **Multi-column grids** for pricing cards (4 columns), integration links (3 columns), and feature comparisons
- **Full-width interactive bands** for the task slider, with internal padding creating a contained feel
- **Split layouts** for navigation areas with logo left, actions right

Spacing follows semantic roles rather than arbitrary increments. Card internal padding sits at 1.5rem, creating breathable containers without excessive looseness. Section gaps of 3rem separate major content areas. Grid gaps of 1.5rem maintain consistent rhythm between related elements. The task slider introduces vertical space above and below its track to accommodate the pill badge and handle interaction zone.

Border treatments reinforce containment: cards use full 1px borders in #E5E2DE, while the announcement banner uses a slightly stronger #D1CEC9 border to elevate its presence against the textured background.

## Visual language

Zapier's visual character balances enterprise solidity with approachable warmth. The warm off-white canvas immediately distinguishes the experience from clinical SaaS competitors, suggesting human-centered automation rather than cold infrastructure. Photography and textured backgrounds appear behind announcement content, with white cards overlaid to ensure text legibility—this layered approach adds depth without sacrificing readability.

The orange accent operates as a signature element, appearing in the task slider as a filled pill containing the selected value. This treatment transforms a functional control into a brand moment. The dark circular slider handle with its white ring border provides tactile affordance while maintaining visual weight against the light track.

Iconography appears minimal and functional: checkmarks for feature lists, arrows for links, simple glyphs for external resources. The Zapier logo in the footer maintains its distinctive orange underline, anchoring brand recognition without demanding attention.

Shadows are absent or extremely subtle; depth is achieved through background layering and border definition rather than elevation effects. This flat-but-layered approach keeps the interface feeling contemporary and performant.

## Components

### Announcement Banner

- **Anatomy**: White card container with headline, body paragraph, and text-link with arrow
- **Surface**: White (#FFFFFF) background with #D1CEC9 border
- **Typography**: Headline uses Degular at heading size, body uses Inter body size
- **Shape**: 0.5rem border radius, full container width with internal padding
- **Spacing**: 1.5rem vertical padding, 2rem horizontal padding
- **Composition**: Left-aligned text stack; link sits below body copy with right arrow character

### Task Slider

- **Anatomy**: Label text, orange value pill, track with fill and handle, scale markers
- **Surface**: Track uses #E5E2DE unfilled, #1A1A1A filled; handle is dark circle with white ring
- **Typography**: "I need" and "tasks per month" in Inter label weight; value in white text on orange pill
- **Shape**: Pill badge with 9999px radius; circular handle
- **Spacing**: Generous vertical space for pill badge above track; handle diameter approximately 1.5rem
- **Composition**: Label and pill left-aligned; "Learn about tasks" link right-aligned; track spans full width with logarithmic scale markers

### Pricing Card

- **Anatomy**: Plan name, description, price block, primary button, feature list with checkmarks
- **Surface**: White background, #E5E2DE border
- **Typography**: Plan name in Degular section-display; price in Degular price-display with "/mo" suffix in label size; features in Inter body
- **Shape**: 0.5rem border radius
- **Spacing**: 1.5rem internal padding; price block has significant vertical space above button
- **Composition**: Vertical stack with plan name at top, price as visual anchor, button centered, features listed below with left-aligned checkmarks

### Primary Button

- **Anatomy**: Text with optional arrow icon
- **Surface**: #1A1A1A background, white text
- **Typography**: Inter label weight, white
- **Shape**: 0.375rem border radius
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Centered text; arrow follows text with small gap

### Secondary Button / Link

- **Anatomy**: Text with underline or border treatment
- **Surface**: Transparent or white background; #1A1A1A text
- **Typography**: Inter label or body weight
- **Shape**: 0.375rem border radius when bordered; otherwise text-only with underline
- **Variants**: "Learn more" style with external link icon; "Help" style with question mark icon

### Integration Link List

- **Anatomy**: Three-column grid of text links with "Show more" expanders
- **Surface**: Transparent; links use standard text color
- **Typography**: Inter body size, regular weight
- **Spacing**: Generous line height between items; column gaps at 1.5rem
- **Composition**: Equal-width columns; "Show more" as plain underlined link at column bottom

### Footer

- **Anatomy**: Logo, social icons, navigation links, legal links, chat button
- **Surface**: Canvas background or slightly differentiated tone
- **Typography**: Inter navigation size for links; caption size for copyright
- **Composition**: Logo and social left; primary navigation center-right; legal and chat bottom-right

## Responsive behavior

The pricing grid's four-column layout should collapse to two columns on tablet and single column on mobile, maintaining card internal spacing while stacking vertically. The task slider requires horizontal scroll or simplified scale markers on narrow viewports to preserve touch target sizes. Announcement banner padding should reduce proportionally, maintaining readable line lengths without excessive side margins.

Navigation likely collapses to a hamburger menu on mobile, with the footer reorganizing into stacked sections. Integration link columns should stack to single column on mobile for comfortable tap targets. Type sizes may reduce by one step on mobile for hero-display and section-display tokens to prevent overflow.

The warm canvas and card-based components adapt naturally to dark mode if implemented, though the current system appears optimized for light presentation. Consider maintaining orange accent visibility against any dark mode background.

## Practical implementation guidance

### Preserve
- The warm off-white canvas as the distinctive foundation; avoid pure white page backgrounds
- Degular for all display and pricing typography; its character shapes are central to brand recognition
- The disciplined orange accent usage; reserve #FF4A00 for highest-priority interactive moments
- Generous card padding and section spacing; the breathable quality supports trust and readability
- Left-aligned content within centered containers; avoid centering long text blocks

### Avoid
- Adding additional accent colors beyond the orange; the restrained palette is intentional
- Using pure black (#000000) for text; the slightly warmer #1A1A1A maintains the approachable tone
- Heavy shadows or elevation effects; rely on borders and background layering for depth
- Tight line heights for body text; Inter needs its specified 1.5 leading for readability
- Generic button styling; the dark fill with white text is a signature treatment

### Recommended Build Order
1. Establish the 4px base unit and color tokens, particularly canvas, surface, ink, and action
2. Implement Inter at body and label sizes for all functional text
3. Add Degular for display hierarchy with specified sizes and tracking
4. Build the card component with border, radius, and padding tokens
5. Create primary and secondary button variants
6. Implement the pricing grid layout with responsive breakpoints
7. Add the task slider with custom styling for track, fill, handle, and pill badge
8. Layer in announcement banner and footer components

### Accessibility
- Ensure the orange action color meets contrast requirements when used for text; the pill badge uses white text on orange which should be verified at 4.5:1 minimum
- Slider handle requires minimum 44px touch target; consider increasing visible size if needed
- Feature list checkmarks should have text alternatives for screen readers
- Price display numerals should use semantic markup for currency and period
- Focus states should be visible on all interactive elements; consider adding outline offset to dark buttons

## Scope note

This guide covers the pricing, integration, and homepage surfaces visible in the supplied images. Navigation dropdowns, mobile layouts, form validation states, loading skeletons, and dark mode implementations are not represented. Measurements are practical adaptation targets derived from visible proportions.
