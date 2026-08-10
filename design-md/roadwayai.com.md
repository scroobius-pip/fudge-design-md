# How roadwayai.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/roadwayai.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with orange brand mark, email capture form, and multi-column footer with compliance badges](https://pin.fontofweb.com/3704?format=jpg)](https://design.withfudge.com/share/pin-3704)

[Hero section with orange brand mark, email capture form, and multi-column footer with compliance badges](https://design.withfudge.com/share/pin-3704)

[![Workspace feature section with orange checkmark list, dashboard screenshot, and Mobbin testimonial block](https://pin.fontofweb.com/3703?format=jpg)](https://design.withfudge.com/share/pin-3703)

[Workspace feature section with orange checkmark list, dashboard screenshot, and Mobbin testimonial block](https://design.withfudge.com/share/pin-3703)

[![Attribution feature section with purple accent icons, overlapping dashboard UI mockups, and data visualization](https://pin.fontofweb.com/3702?format=jpg)](https://design.withfudge.com/share/pin-3702)

[Attribution feature section with purple accent icons, overlapping dashboard UI mockups, and data visualization](https://design.withfudge.com/share/pin-3702)

[![Product interface preview with sidebar navigation, summary report panel, and customer logo bar](https://pin.fontofweb.com/3701?format=jpg)](https://design.withfudge.com/share/pin-3701)

[Product interface preview with sidebar navigation, summary report panel, and customer logo bar](https://design.withfudge.com/share/pin-3701)

## Overview

Roadway AI's marketing site presents a growth-analytics platform through a restrained, product-centric visual system. The design prioritizes clarity and conversion: generous white space frames bold headline typography, while a single vivid orange anchors every interactive element. The overall impression is of enterprise-grade software confidence—clean lines, minimal ornament, and a strict hierarchy that moves visitors from value proposition to product demonstration to social proof.

The site structure follows a classic SaaS landing pattern: a centered hero with email capture, alternating feature sections with product screenshots, customer testimonials with embedded metrics, and a dense utility footer. What distinguishes the system is its disciplined use of two type weights within the Neue Haas Grotesk family, its warm near-white canvas against pure white cards, and the consistent orange-to-purple accent progression that signals feature categories without visual noise.

## Colors

The palette is intentionally narrow: a near-neutral foundation with one high-saturation action color and a secondary purple accent for feature differentiation. Every color serves a specific structural or interactive role.

| token | value | use |
|---|---|---|
| action | #F26522 | Primary buttons, brand mark, checkmark icons, category labels—every conversion point |
| action-hover | #D94E0F | Darker orange for button hover states |
| ink | #1A1A1A | Headlines, primary body text, logo wordmark |
| muted-ink | #6B6B6B | Secondary text, footer links, captions, metadata |
| canvas | #FAFAFA | Page background, testimonial sections, alternating feature bands |
| surface | #FFFFFF | Cards, input fields, navigation bar, footer background |
| border | #E5E5E5 | Input outlines, card edges, dividers, footer top border |
| accent-purple | #8B5CF6 | Feature category labels, attribution section icons, decorative marks |

The color logic separates content from interface clearly. Dark ink on white or near-white grounds provides maximum readability for long-form explanations, while the orange action system creates unmissable conversion paths. The purple accent appears sparingly—reserved for "Attribution" and similar feature tags—preventing the palette from fragmenting. No dark mode is visible in the supplied material; the system assumes a light-environment default.

## Typography

The type system relies on three related weights from the Neue Haas Grotesk family, loaded via Adobe Typekit. The display cut (Neue Haas Grotesk Disp Pro Md) handles all headlines with a tighter line height and negative tracking, while the text cuts (Neue Haas Grotesk Pro Regular and Neuehaasgrotesk-500) manage body copy and interface labels. This creates a clear functional separation between reading text and display text without introducing unrelated typefaces.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Neue Haas Grotesk Disp Pro Md | 3rem | 600 | 1.1 | -0.02em | Page hero headlines |
| section-display | Neue Haas Grotesk Disp Pro Md | 2.5rem | 600 | 1.15 | -0.02em | Feature section headlines |
| body | Neue Haas Grotesk Pro | 1rem | 400 | 1.6 | 0em | Paragraphs, descriptions, UI copy |
| body-medium | Neuehaasgrotesk-500 | 1rem | 500 | 1.6 | 0em | Emphasized body, button labels |
| label | Neuehaasgrotesk-500 | 0.75rem | 500 | 1.4 | 0.05em | Category tags, footer column headers |
| navigation | Neue Haas Grotesk Pro | 0.875rem | 400 | 1.5 | 0em | Top-bar links, dropdown items |

Neue Haas Grotesk Pro is credited to Christian Schwartz after Max Miedinger, available from Commercial Type. Verify licensing for these families before production use. The 500-weight cut appears to be a medium weight used for labels and emphasized interface text; no bold weight is visibly deployed in the marketing surface.

## Layout

The layout follows a centered single-column rhythm with occasional two-column splits for feature sections. Maximum content width appears constrained to approximately 1200px, with generous horizontal padding that keeps text lines readable and product screenshots properly scaled.

The hero section uses full vertical centering: brand mark above, headline below, then the email capture form. This vertical stacking creates a clear focal path from identity to value proposition to conversion. The footer breaks this pattern with a multi-column grid—logo and compliance badges left, four link columns right—suggesting a 12-column underlying grid.

Feature sections alternate between text-left/screenshot-right and full-width centered headlines with three-column benefit grids below. The testimonial block uses an asymmetric two-column layout: company logo and case study link left, pull quote and attribution right. This variation prevents the alternating pattern from becoming monotonous.

The product interface preview shows a more complex layout: a fixed sidebar navigation left, a main content area with summary cards and report sections right, and a full-width customer logo bar below. This suggests the marketing site borrows layout patterns from the actual application interface, creating visual continuity between promise and product.

Spacing between major sections is substantial—approximately 6rem—allowing each feature claim to breathe. Internal component padding tends toward 2rem for cards and 1.5rem for tighter groupings.

## Visual language

The visual language communicates precision and analytical depth without coldness. The orange brand mark—a stylized roadway or trend line in a rounded square—appears at multiple scales, from favicon-sized navigation indicator to hero-scale centerpiece. Its rounded corners (approximately 0.75rem) soften the geometric mark and echo the pill-shaped buttons throughout.

Photography and illustration are absent from the marketing surface; instead, the design relies on product screenshots and dashboard mockups to demonstrate capability. These screenshots use realistic data—campaign names, dollar figures, percentage changes—grounding the abstract AI claims in concrete marketing operations. The screenshots float on the canvas background with subtle shadow, creating depth without decorative elements.

Iconography is minimal and functional: checkmarks for feature lists, small interface icons in the product preview, and the compliance badge seals in the footer. The checkmarks use the action orange with a thin circular outline, creating a consistent micro-element that ties feature sections to the conversion system.

The customer logo bar uses monochrome or near-monochrome treatments of partner marks, preventing competing color systems from disrupting the page palette. This restraint keeps attention on the product narrative rather than brand dilution.

## Components

### Navigation bar
- **Anatomy**: Logo wordmark left, dropdown menus center ("Product", "Resources"), utility actions right ("Log in", "Get started")
- **Surface**: White background, no visible border, subtle shadow on scroll implied by flat initial state
- **Typography**: Navigation token for menus, body-medium for "Get started" button
- **Shape**: Full-width bar, height approximately 4rem
- **Composition**: Flexbox row with space-between alignment, logo locked left, actions locked right

### Hero section
- **Anatomy**: Centered brand mark, hero-display headline, email input with inline submit button
- **Surface**: Canvas background, white input field with border
- **Typography**: Hero-display for "Accelerate growth with AI coworkers", body for placeholder text
- **Shape**: Rounded-square brand mark (~3rem), pill input and button
- **Spacing**: Generous vertical rhythm, approximately 2rem between mark and headline, 1.5rem to form
- **Composition**: Strict vertical centering, maximum content width constrained

### Email capture form
- **Anatomy**: Text input with "Work email" placeholder, adjacent "Get started" button
- **Surface**: White input with border, orange button with white text
- **Typography**: Body for placeholder, body-medium for button label
- **Shape**: Both elements pill-shaped (9999px radius), button slightly taller than input
- **Spacing**: Tight horizontal coupling, no gap or minimal gap between input and button

### Feature section
- **Anatomy**: Category label, section-display headline, three benefit items with checkmark icons, product screenshot
- **Surface**: Alternating canvas and white backgrounds
- **Typography**: Label token for "Workspace" or "Attribution" tags, section-display for headlines, body for descriptions
- **Shape**: Screenshots with panel rounding (~0.75rem), subtle shadow
- **Composition**: Two-column split at desktop, text left/screenshot right or full-width centered

### Testimonial block
- **Anatomy**: Company logo, case study link, pull quote, avatar, name and title attribution
- **Surface**: Canvas background, no visible card border
- **Typography**: Section-display for quote, body for attribution, body-medium for link
- **Shape**: Circular avatar (~2.5rem), rounded button for case study link
- **Composition**: Asymmetric two-column, logo and link left, quote and attribution right

### Footer
- **Anatomy**: Logo, compliance badges (SOC 2, GDPR, USDP), four link columns, legal bar
- **Surface**: White background, top border in border color
- **Typography**: Label token for column headers, body for links, smaller text for copyright
- **Composition**: Two-row structure: main footer grid above, legal bar below with terms and cookie links

## Responsive behavior

The desktop-first layout suggests clear adaptation points. The two-column feature sections should stack vertically on narrower viewports, with screenshots moving above text to maintain visual interest. The hero centering remains appropriate at all widths, though headline size should scale down to prevent overflow.

The navigation dropdowns ("Product", "Resources") imply a horizontal menu that should collapse to a hamburger or simplified drawer below approximately 768px. The footer four-column grid should reflow to two columns then single column, with compliance badges stacking below the logo.

The email capture form's inline button attachment may require stacking on very narrow screens, with the button expanding to full width below the input. Product screenshots should remain visible but scaled, as they carry significant persuasive weight; hiding them behind tabs or accordions would weaken the feature narrative.

## Practical implementation guidance

### Preserve
- The strict two-weight type hierarchy: display medium for headlines, regular and medium for everything else
- The single orange action color for every interactive and conversion element
- The alternating canvas/white section backgrounds that create rhythm without decorative elements
- The realistic product screenshots with actual data rather than generic placeholders
- The pill-shaped buttons and inputs that soften the geometric precision

### Avoid
- Introducing additional accent colors beyond orange and the sparing purple feature tags
- Using bold weights where medium suffices; the system deliberately avoids heavy typographic contrast
- Decorative gradients, illustrations, or photography that would compete with the product screenshots
- Dark mode implementations without verified brand guidance
- Rounding corners inconsistently—maintain the pill/panel distinction

### Recommended build order
1. Establish the type system with Neue Haas Grotesk web fonts and the six semantic tokens
2. Implement the color palette with CSS custom properties, starting with action orange and canvas white
3. Build the navigation bar with logo, dropdowns, and utility buttons
4. Create the hero section with centered brand mark, headline, and email capture form
5. Develop the feature section pattern with alternating layouts and screenshot containers
6. Add the testimonial block with asymmetric two-column composition
7. Construct the multi-column footer with compliance badge integration
8. Apply responsive stacking and scaling rules

### Accessibility
- Ensure the orange action color meets WCAG 2.1 contrast requirements against white; the vivid hue may need darkened text or increased size for small elements
- Provide visible focus states for pill buttons and inputs, likely a 2px offset ring in ink or darker orange
- Maintain logical heading hierarchy: single h1 per page, section displays as h2, benefit items as h3 or strong text
- Add aria-labels to the email capture form and dropdown navigation triggers
- Test keyboard navigation through the product screenshot carousels or tabs if implemented

## Scope note

This guide covers the marketing landing page surface visible in the supplied images: hero, feature sections, testimonials, product preview, and footer. Pricing pages, documentation, authenticated application interfaces, and mobile-specific layouts are not represented. Motion, hover states, and form validation styling were not visible and should be designed to match the system's restrained character. Measurements are practical adaptation targets.
