# How onmy.land is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/onmy.land-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with serif headline 'Your page, on your land.' on light canvas, dark footer with four-column link grid and Åland Islands badge](https://pin.fontofweb.com/9995?format=jpg)](https://design.withfudge.com/share/pin-9995)

[Hero section with serif headline 'Your page, on your land.' on light canvas, dark footer with four-column link grid and Åland Islands badge](https://design.withfudge.com/share/pin-9995)

[![Pricing section with italic serif 'Pro' card on dark surface, overlaid on grayscale botanical illustration with toggle and feature list](https://pin.fontofweb.com/9994?format=jpg)](https://design.withfudge.com/share/pin-9994)

[Pricing section with italic serif 'Pro' card on dark surface, overlaid on grayscale botanical illustration with toggle and feature list](https://design.withfudge.com/share/pin-9994)

[![Homepage hero with dark background, three demo site previews in carousel, and navigation with logo and utility links](https://pin.fontofweb.com/9993?format=jpg)](https://design.withfudge.com/share/pin-9993)

[Homepage hero with dark background, three demo site previews in carousel, and navigation with logo and utility links](https://design.withfudge.com/share/pin-9993)

## Overview

Onmy.land is a personal-site builder whose marketing presence uses a dark, editorial aesthetic to position user-created pages as owned digital land. The design language pairs a near-black canvas with warm off-white typography, creating a gallery-like environment where light-colored demo pages and content panels appear to float forward. The system relies on two principal type families: Lt Remark, a refined serif with italic cuts, for display headlines that carry literary weight; and Inter, a neutral sans-serif, for all interface, body, and label text. Applesystem appears as a system fallback at 14px in isolated contexts. This pairing creates clear hierarchy without visual noise—serif commands attention at large sizes, while sans-serif recedes into efficient navigation and functional copy. The overall impression is restrained, confident, and slightly academic: a platform that treats personal websites as craft objects rather than social profiles.

## Colors

The palette is intentionally narrow, built on a dark-mode foundation with selective warmth. The canvas and surfaces occupy the lower luminance range, while text and interactive elements push toward high contrast.

| token | value | use |
|---|---|---|
| canvas | #0A0A0A | Page background, footer ground, hero sections |
| surface | #171717 | Elevated cards, pricing panel, input fields |
| surface-raised | #262626 | Hover states, active inputs, subtle elevation |
| ink | #FAFAFA | Primary text, headings, primary button fill |
| ink-muted | #A1A1A1 | Secondary body text, descriptions, captions |
| ink-dim | #808080 | Tertiary text, footer links, inactive states |
| border | #808080 | Footer divider, structural hairlines |
| border-subtle | #262626 | Internal dividers, inactive borders |
| action-primary | #FAFAFA | Primary button background, light CTAs |
| action-primary-text | #0F0C0C | Text on primary buttons |
| action-secondary | #171717 | Secondary button background, dark CTAs |
| action-secondary-text | #FAFAFA | Text on secondary buttons |
| action-secondary-border | #FFFFFF | Border on secondary buttons |

The color logic follows a dark-first hierarchy: the deepest value anchors the page, mid-tones create elevation, and near-white provides reading contrast. Light panels—such as the hero section in the footer-adjacent view—invert this relationship temporarily, using #FAFAFA as background with #0A0A0A text, demonstrating the platform's flexibility while maintaining the dark-mode default. Demo site previews introduce their own internal color systems—warm orange, neutral gray, monochrome photography—demonstrating platform versatility without adding marketing interface colors.

## Typography

The type system combines Lt Remark, designed by Daniel Lyons and distributed by Lyons Type, with Inter. Lt Remark carries all display roles; Inter handles everything else. Applesystem appears as a system fallback at 14px in limited contexts. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Lt Remark | 3rem | 400 | 1 | -0.025em | Homepage hero, pricing headline |
| section-display | Lt Remark | 1.875rem | 400 | 1.2 | -0.025em | Card titles, section headers |
| pricing-amount | Lt Remark | 3rem | 400 | 1 | -0.05em | Dollar amounts, large numerals |
| body | Inter | 1rem | 400 | 1.5 | 0 | Default paragraphs, descriptions |
| body-large | Inter | 1.125rem | 400 | 1.556 | 0 | Hero subheadings, lead copy |
| body-muted | Inter | 1rem | 400 | 1.5 | 0 | Descriptions in muted color |
| label | Inter | 0.75rem | 500 | 1.333 | 0.025em | Form labels, small caps, tags |
| label-small | Inter | 0.75rem | 500 | 1.333 | 0 | Compact labels, toggle text |
| navigation | Inter | 0.875rem | 400 | 1.429 | 0 | Header links, footer navigation |
| navigation-active | Inter | 0.75rem | 500 | 1.333 | 0 | Active nav item, current page |
| footer-heading | Inter | 0.75rem | 600 | 1.333 | 0 | Footer column titles |
| footer-link | Inter | 0.875rem | 400 | 1.429 | 0 | Footer link lists |
| feature-list | Inter | 1rem | 500 | 1.5 | 0 | Feature bullets, checklist items |

Lt Remark appears in Regular and Italic cuts. The italic variant serves expressive moments—such as the "Pro" plan name—adding editorial flair without changing family. Inter operates at weights 400, 500, and 600, with 500 reserved for labels, active navigation, and feature emphasis, and 600 for footer headings. The tight negative tracking on Lt Remark headlines (-0.025em to -0.05em) creates a composed, magazine-like density that distinguishes display text from the open, neutral spacing of Inter body copy.

## Layout

The page structure follows a centered, max-width container system with generous vertical breathing room. Horizontal margins of 278.5px (approximately 17.4rem at 16px root) frame content on wide viewports, creating a narrow, focused reading column that emphasizes the editorial quality of the typography.

The header occupies the full canvas width with internal padding of 1rem vertical and 2rem horizontal. Navigation items distribute with 0.75rem gaps, maintaining loose but connected grouping. The main content area introduces sections with substantial vertical padding: 7rem top and 5rem bottom for the primary hero, 5rem for standard sections, and 2rem for compact transitions. This stepped rhythm creates clear territorial boundaries between the dark hero, the demo carousel, and the light footer-adjacent panel.

The demo site carousel uses a three-up presentation with overlapping or adjacent cards, each representing a live user page. These cards sit on the dark canvas but contain their own internal color systems—warm orange, neutral gray, monochrome photography—demonstrating platform versatility. Below the carousel, a horizontal feature strip with em-dashed separators ("Section types — Custom domains — Publish in minutes") spans the content width, using Lt Remark at section-display size for a tagline-like conclusion.

The footer reverses to a light panel (#FAFAFA background with #0A0A0A text) in one visible state, or maintains the dark canvas in another. Four equal columns organize link groups under small-caps headings, with a bottom bar containing the Åland Islands badge and copyright notice. Footer padding runs 5rem top and 2rem bottom, with a 1px top border in #808080 separating it from main content.

## Visual language

The visual character derives from high contrast, generous whitespace, and the deliberate tension between classical serif and contemporary sans-serif. Photography and illustration play a supporting role: the pricing section overlays a grayscale botanical illustration with fine linear textures, creating depth without competing with the foreground card. Demo site previews use real user content—architectural portfolios, athletic resumes, photography galleries—rendered at reduced scale to suggest a browser-window or device-frame context.

Shadows appear on interactive elements and elevated cards. The primary shadow stack uses layered rgba values: a subtle 1px outline in oklab(0.6 0 0 / 0.04), followed by diffuse shadows at increasing blur radii (14px, 8px with -4px offset, 2px, and 1px) in near-black at low opacity. This creates a soft, multi-planar lift that feels physical without harsh edges.

Borders function as optical separators rather than containers. The footer hairline at 1px solid #808080 and card borders at 1px solid #FFFFFF on dark buttons demonstrate this restraint. Rounded corners stay modest at 0.5rem for most components, with pills and tags extending to full radius for categorical items.

The demo carousel includes pagination dots below the three-up preview, suggesting swipe or scroll behavior on touch devices while remaining subtle on desktop.

## Components

### Hero section

- **Anatomy**: Centered text block with optional subheading and dual-action button row.
- **Surface**: Dark canvas (#0A0A0A) default; light inversion (#FAFAFA) in footer-adjacent variant.
- **Typography**: hero-display for headline, body-large for subheading.
- **Spacing**: 7rem top padding, 5rem bottom padding; 2rem horizontal padding within max-width container.
- **Composition**: Headline centered or left-aligned depending on context; subheading below with 0.25rem top margin; buttons in horizontal row with 0.5rem gap.

### Pricing card

- **Anatomy**: Dark panel containing plan name in italic serif, price block with currency symbol and interval, handle input field, feature checklist, and primary CTA button.
- **Surface**: #171717 background with subtle shadow elevation.
- **Typography**: section-display in Lt Remark Italic for plan name; pricing-amount for dollar value; label for interval; feature-list for bullet items; body for supporting copy.
- **Shape**: 0.5rem border radius.
- **Spacing**: 2rem internal padding; 2.5rem between price block and feature list; 2rem between feature list and CTA.
- **Variants**: Monthly/yearly toggle above card in pill-shaped segmented control.

### Button

- **Primary**: #FAFAFA background, #0F0C0C text, 0.5rem radius, 0.75rem horizontal padding, 0.5rem vertical padding. Inter 500 at 1rem.
- **Secondary**: #171717 background, #FAFAFA text, 1px #FFFFFF border, same metrics as primary.
- **Pill toggle**: Full radius, compact padding, Inter 500 at 0.75rem, used for plan interval selection.

### Text input

- **Anatomy**: Single-line field with placeholder text and optional suffix (e.g., ".onmy.land").
- **Surface**: #262626 background, #FAFAFA text.
- **Typography**: body token for input text; label-small for suffix.
- **Shape**: 0.5rem radius.
- **Spacing**: 0.75rem vertical padding, 1rem horizontal padding.

### Feature checklist

- **Anatomy**: Vertical list of prefixed items with "+" symbol or bullet.
- **Typography**: feature-list token, Inter 500 at 1rem.
- **Spacing**: 0.5rem between items; 3rem top margin from preceding content.

### Demo site carousel

- **Anatomy**: Three visible preview cards with pagination dots below.
- **Surface**: Transparent on dark canvas; cards contain internal backgrounds.
- **Composition**: Cards overlap slightly or sit edge-to-edge with 1.5rem gaps; each card shows a cropped browser-like view of a live site.
- **Typography**: Lt Remark at 1.5rem for section labels below carousel.

### Footer

- **Anatomy**: Four-column link grid, bottom bar with badge and copyright.
- **Surface**: Dark (#0A0A0A) or light (#FAFAFA) depending on page position.
- **Typography**: footer-heading for column titles; footer-link for items.
- **Shape**: 1px top border in #808080 when on dark canvas.
- **Spacing**: 5rem top padding, 2rem bottom padding; 2rem horizontal padding; 6rem top margin from preceding content.

## Responsive behavior

The design targets desktop as its primary expression, with the centered max-width container and generous margins creating a deliberate, magazine-like reading experience. At narrower viewports, the 278.5px side margins should collapse to 2rem minimum padding, allowing content to breathe without excessive narrowing. The four-column footer should reflow to two columns on tablet and single column on mobile, maintaining heading-to-link grouping.

The three-up demo carousel should reduce to one visible card with peek on mobile, preserving the pagination dots for orientation. Pricing card width should expand to nearly full viewport on small screens, maintaining internal padding while allowing the botanical background to crop or fade.

Typography scales down by approximately 15-20% on mobile: hero-display to 2.5rem, section-display to 1.5rem, preserving line-height ratios. Touch targets for buttons and navigation links should maintain minimum 44px height.

## Practical implementation guidance

### Preserve
- The stark dark-canvas-to-light-content contrast; this is the brand's signature atmosphere.
- Lt Remark for all display headlines; substituting a different serif will alter the editorial character significantly.
- The generous vertical spacing between sections; compression will make the page feel like a conventional SaaS site rather than a curated gallery.
- The italic cut of Lt Remark for plan names and expressive moments; this typographic gesture is distinctive.

### Avoid
- Adding saturated colors to the marketing interface; color belongs to demo content only.
- Rounding corners beyond 0.5rem for structural cards; the design's restraint depends on modest radii.
- Using Inter at weights below 400 or above 600; the available range is intentionally narrow.
- Centering body text in long paragraphs; the existing left-alignment supports readability.

### Recommended build order
1. Establish the dark canvas (#0A0A0A) and load Lt Remark Regular/Italic plus Inter 400/500/600.
2. Build the max-width container with 2rem minimum padding and centered alignment.
3. Implement hero-display and body-large tokens for the homepage hero.
4. Create the pricing card component with surface background, shadow stack, and internal spacing.
5. Add the footer with four-column grid and responsive collapse behavior.
6. Integrate the demo carousel with placeholder images, then replace with live previews.

### Accessibility
- Ensure #FAFAFA text on #0A0A0A canvas meets WCAG AAA contrast (it does, at approximately 18:1).
- For the light footer inversion, verify #0A0A0A text on #FAFAFA background similarly passes.
- Add visible focus states to buttons and links; the current design's minimalism should not remove keyboard navigation indicators.
- Use aria-label on the plan interval toggle to communicate state changes.
- Provide alt text for demo site previews that describes the content type, not just "screenshot."

## Scope note

This guide covers the onmy.land marketing homepage including the hero, pricing, demo carousel, and footer surfaces. It does not include the actual site builder interface, user dashboard, account settings, or checkout flow. Motion behavior for the carousel, hover states on demo previews, and mobile-specific navigation patterns are not documented here. Measurements are exact where retained; spacing values derive from the extracted pixel scale converted to rem at 16px root.
