# How godaddy.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/godaddy.com-design)

Last updated: 2026-08-10

## Captured pages

[![FAQ accordion section with bold question headers and expanded answer text on white background](https://pin.fontofweb.com/9215?format=jpg)](https://design.withfudge.com/share/pin-9215)

[FAQ accordion section with bold question headers and expanded answer text on white background](https://design.withfudge.com/share/pin-9215)

[![Video carousel with large lifestyle imagery and centered headline above FAQ section](https://pin.fontofweb.com/9214?format=jpg)](https://design.withfudge.com/share/pin-9214)

[Video carousel with large lifestyle imagery and centered headline above FAQ section](https://design.withfudge.com/share/pin-9214)

[![Feature card grid with rounded panels showing domain search, security, and business tools](https://pin.fontofweb.com/9213?format=jpg)](https://design.withfudge.com/share/pin-9213)

[Feature card grid with rounded panels showing domain search, security, and business tools](https://design.withfudge.com/share/pin-9213)

[![Airo testimonial section with split layout showing portrait photography and feature checklist](https://pin.fontofweb.com/9212?format=jpg)](https://design.withfudge.com/share/pin-9212)

[Airo testimonial section with split layout showing portrait photography and feature checklist](https://design.withfudge.com/share/pin-9212)

## Overview

GoDaddy's design system is built for commercial clarity at scale. The visual language centers on a single variable font family—Gd Sherpa, delivered as Gd Sherpa-Text Thin—that spans whisper-thin labels to commanding display headlines through weight and size alone. The interface relies on extreme contrast: near-black ink on white canvas, with generous negative space and rounded card surfaces that soften the technical subject matter of domains, hosting, and web tools. Photography is lifestyle-forward and warmly lit, while UI elements communicate through scale and weight hierarchy rather than color complexity. The system feels approachable to small business owners while maintaining the credibility of a global infrastructure platform.

## Colors

The palette is intentionally restrained, using color as a signal rather than decoration. Black and white handle almost all functional communication; teal appears as a sparing accent for trust and security moments; warm yellow surfaces occasionally for promotional emphasis.

| token | value | use |
|---|---|---|
| ink | #111111 | Primary text, headlines, body copy, iconography |
| ink-secondary | #444444 | Secondary text, captions, metadata |
| canvas | #FFFFFF | Page background, card surfaces, button text on dark |
| surface | #F5F7F8 | Feature card backgrounds, alternating section fills |
| surface-warm | #F5F5F5 | Subtle warm neutral for promotional panels |
| border | #D6D6D6 | Hairline dividers, accordion separators, input borders |
| border-subtle | #D4DBE0 | Footer borders, subtle structural lines |
| accent | #09757A | Security indicators, trust badges, icon fills |
| accent-light | #D8EFEF | Light teal backgrounds for highlighted features |
| accent-warm | #FFEEA9 | Promotional highlights, attention surfaces |
| action-primary | #000000 | Primary button fill, dark header backgrounds |
| action-primary-text | #FFFFFF | Text on primary buttons, header navigation |
| action-secondary-bg | #FFFFFF | Outlined button fill |
| action-secondary-border | #000000 | Outlined button stroke |
| muted | #767676 | Disabled states, placeholder text, tertiary information |
| muted-light | #BAC0C3 | Decorative borders, non-interactive separators |

The system operates in a light mode exclusively across the visible surfaces. Dark sections appear as full-bleed photography or near-black (#000000) headers, where white text reverses out. The teal accent is reserved for functional trust signals—SSL locks, globe icons, security messaging—rather than general decoration. Warm yellow appears only in promotional contexts, keeping the core interface cool and businesslike.

## Typography

All text is set in Gd Sherpa, delivered as the Gd Sherpa-Text Thin variable font file from Famira Fonts. The family covers the full range from 400 to 900 weight, enabling dramatic size-to-weight pairings where large display text can be bold while remaining highly legible. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Gd Sherpa | 3.25rem | 700 | 1.25 | normal | Page hero headlines, major value propositions |
| section-display | Gd Sherpa | 2.875rem | 700 | 1.25 | normal | Section headers, "Why work with GoDaddy" |
| feature-headline | Gd Sherpa | 2rem | 700 | 1.25 | normal | Card titles, FAQ questions, feature names |
| body-large | Gd Sherpa | 1.125rem | 450 | 1.5 | normal | Lead paragraphs, expanded FAQ answers |
| body | Gd Sherpa | 1rem | 450 | 1.5 | normal | Standard paragraphs, descriptions, navigation |
| body-small | Gd Sherpa | 0.875rem | 450 | 1.5 | normal | Captions, metadata, footer links |
| label | Gd Sherpa | 0.875rem | 850 | 1.25 | normal | Button text, category tags, bold labels |
| label-small | Gd Sherpa | 0.8125rem | 850 | 1.25 | normal | Compact labels, badge text |
| navigation | Gd Sherpa | 1rem | 450 | 1.5 | normal | Header links, primary navigation |
| navigation-bold | Gd Sherpa | 0.875rem | 850 | 1.25 | normal | Active nav items, dropdown headers |
| quote-display | Gd Sherpa | 1.625rem | 700 | 1.4 | normal | Pull quotes, testimonial body text |

The type scale is built on a 2px relative unit, with sizes snapping to whole multiples. Display sizes (51.9571px, 46.1841px, 41.0526px) cluster around 2.5–3.25rem for maximum impact. Body text holds steady at 1rem with 1.5 line height for comfortable reading. Weight is the primary differentiator: 450 for body, 700 for headlines, 850 for labels and navigation emphasis, 900 for the heaviest display moments.

## Layout

The page uses a centered content model with generous horizontal padding. Maximum content width is controlled through padding values of 82.24px (approximately 5.125rem) on either side, creating a comfortable reading measure without hard-coding a pixel container. Sections stack vertically with substantial vertical rhythm—41.12px to 82.24px (2.5–5.125rem) between major content blocks.

The grid is implicit rather than explicit: feature cards arrange in 2- or 3-column formations with 16px gutters, while full-bleed sections break the padded container for photography or dark backgrounds. Cards use consistent internal padding of 24–40px, with larger cards receiving 40px for breathing room around complex imagery.

Spacing follows a compact semantic scale:

| token | value | use |
|---|---|---|
| unit | 0.125rem | Base grid unit |
| gutter | 1rem | Column gutters, card margins |
| section | 5.125rem | Major section vertical padding |
| content-max | 5.125rem | Horizontal page padding |

Border radius is a distinctive feature of the system. Cards receive 16px (1rem) or 24px (1.5rem) rounding, creating friendly, approachable surfaces. Buttons use 8px (0.5rem) for a crisp but modern feel, while pill-shaped navigation elements use full 9999px rounding. Small tags and badges use 4px (0.25rem).

## Visual language

Photography dominates the emotional layer of the design. Images are warm-toned, naturally lit, and feature diverse subjects in authentic work environments—laptops, creative studios, small business settings. The photography treatment avoids heavy overlays or gradients; images sit in rounded containers or bleed full-width with clean edges.

Iconography is simple and functional: line-style icons in the accent teal color for feature lists, solid circles for carousel navigation, and minimal arrow indicators for accordions. Icons never compete with photography; they supplement text in feature lists and navigation.

The overall impression is one of confident simplicity. There are no decorative patterns, no gradient backgrounds, no drop shadows on cards. Depth is created through photography, scale contrast, and the subtle layering of rounded surfaces against flat backgrounds. The system trusts its content—bold headlines, real photography, clear calls-to-action—rather than embellishing around it.

## Components

### Feature card

Feature cards are the primary content container across the site. They appear in grids of two or three, each with a rounded surface background.

- **Anatomy**: Rounded rectangle containing an icon or illustration, headline, optional body text, and sometimes a screenshot or product mockup.
- **Surface**: Background color `{colors.surface}` or `{colors.canvas}` with no border or shadow.
- **Typography**: Headline uses `{typography.feature-headline}`; body uses `{typography.body}` or `{typography.body-large}`.
- **Shape**: Border radius `{rounded.card}` (16px) or `{rounded.card-large}` (24px) for prominent cards.
- **Spacing**: Internal padding of 24–40px; external margin of 16px between cards.
- **Composition**: Icon positioned top-left or centered above text; product imagery anchored to bottom or right edge.

### FAQ accordion

The FAQ section uses a clean accordion pattern with horizontal separators.

- **Anatomy**: Stacked items with a question header, expand/collapse icon, and expandable answer region.
- **Surface**: Transparent background with `{colors.border}` horizontal rules between items.
- **Typography**: Question uses `{typography.feature-headline}` at weight 700; answer uses `{typography.body-large}` at weight 450.
- **Shape**: No border radius; full-width separators at 1px.
- **Spacing**: Item padding of 24px vertical; answer text indented or contained within the same width.
- **Composition**: Chevron icon right-aligned; expanded state reveals body text below with smooth height transition.

### Primary button

Buttons are compact and high-contrast, designed for immediate action.

- **Anatomy**: Text label centered within a rounded rectangle.
- **Surface**: Background `{colors.action-primary}`, text `{colors.action-primary-text}`.
- **Typography**: `{typography.label}` at weight 850.
- **Shape**: Border radius `{rounded.button}` (8px) or `{rounded.button-pill}` for navigation.
- **Spacing**: Padding of 12px vertical, 48px horizontal for prominent actions; 8px/16px for compact variants.
- **Variants**: Solid black fill is default; white fill with black border appears on dark backgrounds.

### Secondary button

Used for alternative actions or less prominent CTAs.

- **Anatomy**: Text label within an outlined rectangle.
- **Surface**: Background `{colors.action-secondary-bg}`, border `{colors.action-secondary-border}` at 2px solid.
- **Typography**: `{typography.label}` at weight 850.
- **Shape**: Border radius `{rounded.button}` (8px).
- **Spacing**: Same padding scale as primary.

### Testimonial card

A split-layout component combining photography with quoted text.

- **Anatomy**: Large rounded container with full-bleed photography on the left and text content on the right.
- **Surface**: Background `{colors.canvas}` for the text panel; photography extends to container edges.
- **Typography**: Quote uses `{typography.quote-display}`; attribution and feature list use `{typography.body}`.
- **Shape**: Border radius `{rounded.card-large}` (24px) for the outer container.
- **Spacing**: Generous internal padding of 40px+ on the text side.
- **Composition**: Photography occupies 50–60% width; text panel overlays or sits adjacent with rounded corners creating visual separation.

### Video carousel

A media-heavy component for storytelling.

- **Anatomy**: Full-width container with large centered imagery, play button overlay, and navigation arrows.
- **Surface**: Transparent background; images have rounded corners.
- **Typography**: Section header above uses `{typography.section-display}`; caption below uses `{typography.body}`.
- **Shape**: Images use `{rounded.card}`; circular play button at 50% radius.
- **Spacing**: 16px margin between slides; centered pagination with circular indicators.
- **Composition**: Three-up layout with partial side slides visible, suggesting horizontal scroll.

### Header navigation

The site header uses a dark or light treatment depending on context.

- **Anatomy**: Logo left, navigation links center, utility actions right.
- **Surface**: Background `{colors.action-primary}` (black) with white text, or transparent over imagery.
- **Typography**: Links use `{typography.navigation}`; active or emphasized items use `{typography.navigation-bold}`.
- **Shape**: Pill-shaped container for search or utility buttons at `{rounded.button-pill}`.
- **Spacing**: Horizontal padding of 82.24px; vertical padding of 16px.

## Responsive behavior

The system is documented from desktop viewport widths. At narrower widths, the multi-column card grids should collapse to single-column stacking with maintained internal padding. The 82.24px horizontal padding reduces proportionally—likely to 24–32px on tablet and 16px on mobile—to preserve content area without excessive margins.

Typography scales down modestly: hero display may reduce from 3.25rem to 2.5rem on tablet and 2rem on mobile. Body text holds at 1rem for readability. The FAQ accordion maintains its full-width treatment across breakpoints, with touch targets expanding to minimum 44px height for finger interaction.

The video carousel should transition to a single-slide view on mobile with swipe gesture support, hiding the partial side slides. Navigation arrows may collapse to bottom indicators or swipe-only interaction.

## Practical implementation guidance

### Preserve
- The single-font-family approach; use Gd Sherpa's weight axis exclusively for hierarchy rather than introducing secondary fonts.
- Generous whitespace around content; the 82.24px horizontal padding and 40px+ section gaps are essential to the premium feel.
- Rounded corners on all interactive and container surfaces; the 16px/24px card radius is a signature element.
- High contrast for all actionable text; maintain the near-black on white standard.

### Avoid
- Adding drop shadows to cards; the system uses flat surfaces and photography for depth.
- Introducing additional accent colors beyond the documented teal and warm yellow; the palette's restraint is intentional.
- Reducing body text below 1rem (16px) for primary content; the 450 weight at smaller sizes becomes too light.
- Using the 900 weight at small sizes; reserve it for large display contexts only.

### Recommended build order
1. Establish the type scale with Gd Sherpa loaded as a variable font, confirming 450–900 weight range availability.
2. Implement the base spacing system with the 2px unit and 82.24px content padding.
3. Build the feature card component with surface background, 16px radius, and internal padding.
4. Create the button system with solid and outlined variants at 8px radius.
5. Implement the FAQ accordion with border separators and expand/collapse behavior.
6. Add the testimonial split-layout with responsive image/text stacking.
7. Integrate photography with rounded containers and full-bleed options.

### Accessibility
- Maintain minimum 4.5:1 contrast ratio for all body text; the #111111 on #FFFFFF pairing exceeds 15:1.
- Ensure accordion headers are keyboard-focusable with visible focus indicators.
- Provide aria-expanded state for FAQ items and aria-labels for icon-only buttons like carousel navigation.
- Respect reduced-motion preferences for accordion expand/collapse and carousel transitions.
- Use semantic heading hierarchy: h1 for page hero, h2 for sections, h3 for card titles and FAQ questions.

## Scope note

This guide covers the marketing and product explanation surfaces visible on GoDaddy's homepage and Airo builder pages. It does not include account dashboard interfaces, checkout flows, domain search result pages, or mobile-specific navigation patterns. Motion specifications, hover states, and loading skeletons are not documented from the available material. The Gd Sherpa-Text Thin font file is the delivered source for all Gd Sherpa weights in this system. Measurements reflect the extracted interface values and should be verified against current production implementations.
