# How salesforce.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/salesforce.com-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with Salesforce cloud logo, social icons, and multi-column link groups against a white background with a green landscape illustration above.](https://pin.fontofweb.com/2429?format=jpg)](https://design.withfudge.com/share/pin-2429)

[Footer section with Salesforce cloud logo, social icons, and multi-column link groups against a white background with a green landscape illustration above.](https://design.withfudge.com/share/pin-2429)

[![Customer proof section with three blue gradient stat cards showing 50%, 80%, and 20x metrics with white typography and underlined story links below.](https://pin.fontofweb.com/2428?format=jpg)](https://design.withfudge.com/share/pin-2428)

[Customer proof section with three blue gradient stat cards showing 50%, 80%, and 20x metrics with white typography and underlined story links below.](https://design.withfudge.com/share/pin-2428)

[![Learning resources section with two large cards featuring Trailhead bear mascot and event imagery, each with outlined action buttons.](https://pin.fontofweb.com/2427?format=jpg)](https://design.withfudge.com/share/pin-2427)

[Learning resources section with two large cards featuring Trailhead bear mascot and event imagery, each with outlined action buttons.](https://design.withfudge.com/share/pin-2427)

[![Support section with three pale yellow benefit cards and Astro character illustration in a landscape scene at the bottom.](https://pin.fontofweb.com/2426?format=jpg)](https://design.withfudge.com/share/pin-2426)

[Support section with three pale yellow benefit cards and Astro character illustration in a landscape scene at the bottom.](https://design.withfudge.com/share/pin-2426)

## Overview

The Salesforce homepage presents a confident yet friendly enterprise visual system. The design balances corporate credibility with approachable warmth through a carefully orchestrated interplay of typography, color, and illustration. Deep navy headlines establish trust and authority, while vibrant blue surfaces signal action and innovation. The system makes generous use of white space to let content breathe, punctuated by friendly mascot characters—particularly the Trailhead bear and Astro—that humanize the enterprise software experience. Cards serve as the primary content container, appearing in multiple surface treatments from gradient blues to warm creams depending on their functional role. The overall impression is of a mature design system that knows when to be serious and when to invite exploration.

## Colors

The color system operates on a clear hierarchy: dark navy for authority, vibrant blue for action and energy, warm accents for supportive content, and clean neutrals for structure.

| token | value | use |
|---|---|---|
| action | #0176D3 | Primary buttons, stat card backgrounds, active links, key interactive surfaces |
| action-hover | #014486 | Darker blue for hover states on action elements |
| ink | #032D60 | Headlines, primary text, strong emphasis, footer headings |
| muted-ink | #3E3E3C | Body copy, secondary text, descriptions, card captions |
| canvas | #FFFFFF | Page background, card surfaces, button text on dark backgrounds |
| surface | #F3F3F3 | Subtle section backgrounds, footer area, inactive states |
| surface-warm | #FFF1D8 | Benefit cards, supportive content blocks, success messaging |
| border | #C9C9C9 | Card outlines, dividers, subtle separators |
| border-action | #0176D3 | Outlined button borders, active focus rings |

The interface relies heavily on the contrast between deep navy ink and bright white canvas. Action blue appears as solid fills for primary buttons and stat cards, where white typography reverses out crisply. The warm surface tone provides a distinctive alternative to generic gray cards, giving benefit and support content a welcoming, less corporate feel. Image-palette colors from photography and illustrations—including greens, oranges, and purples from mascot scenes—enrich the visual experience but do not function as UI tokens. The system appears to operate in a single light mode; no dark mode surfaces are visible in the supplied images.

## Typography

Two font families drive the typographic hierarchy: Avant Garde For Salesforce W 05 Dm for display and headline settings, and Salesforce Sans for body text, labels, and navigation. Avant Garde contributes a geometric, modernist character with its distinctive tight apertures and confident stance, while Salesforce Sans provides neutral, highly legible reading text.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Avant Garde For Salesforce W 05 Dm | 3rem | 400 | 1.1 | -0.02em | Major page headlines, CTA section titles |
| section-display | Avant Garde For Salesforce W 05 Dm | 2.5rem | 400 | 1.15 | -0.01em | Section headings, card titles |
| stat-display | Avant Garde For Salesforce W 05 Dm | 4rem | 400 | 1 | -0.03em | Large statistics, metrics, numbers |
| body | Salesforce Sans | 1rem | 400 | 1.5 | 0 | Standard paragraphs, descriptions |
| body-medium | Salesforce Sans | 1.125rem | 400 | 1.5 | 0 | Introductory paragraphs, emphasized body |
| label | Salesforce Sans | 0.75rem | 700 | 1.25 | 0.05em | Category tags, uppercase labels, metadata |
| navigation | Salesforce Sans | 0.875rem | 400 | 1.25 | 0 | Footer links, secondary navigation |

Avant Garde For Salesforce W 05 Dm was designed by Herb Lubalin and Tom Carnase, supplied by Monotype ITC Inc. Salesforce Sans is supplied by Monotype Imaging Inc. Verify licensing for these families before production use.

The display family is used at large sizes with tight negative tracking, creating impactful headlines that feel contemporary and bold. Body text remains comfortably open for extended reading. Labels appear in bold weight with slight positive tracking, giving category tags like "Trailhead" and "Salesforce+" clear scannable presence without competing with headlines.

## Layout

The page follows a centered, contained layout with generous vertical rhythm. Content sections stack with substantial whitespace between them, typically using the section spacing token of 6rem to create clear visual separation. Within sections, content is generally centered with a maximum readable width for text blocks, while cards and multi-item layouts expand to fill the available container.

Horizontal padding appears consistent across breakpoints, with content inset from viewport edges. Card grids use a two-column or three-column arrangement depending on content density. The stat cards in the customer proof section display as three equal-width items with uniform gaps. The learning resources section shows a two-column card layout with large visual areas above text content.

The footer breaks from the centered pattern, using a multi-column grid that aligns the Salesforce logo and social icons on the left with organized link columns to the right. This creates a more utilitarian, information-dense zone while maintaining the system's clean aesthetic.

Visual illustrations—particularly the landscape scenes with mascot characters—span full section widths, often breaking the contained grid to create immersive moments. These illustrations sit between content sections as transitional elements, softening the otherwise rectilinear layout with organic shapes and natural scenery.

## Visual language

The visual language communicates enterprise capability through approachable means. The core metaphor combines clean digital interfaces with natural, friendly illustrations. Mascot characters—most prominently the Trailhead bear and Astro—appear throughout, lending personality and emotional connection to what could otherwise feel like abstract software marketing.

Illustrations employ a flat, contemporary style with soft gradients and gentle shading. Landscape scenes use layered hills, clouds, and foliage in greens, blues, and warm earth tones. Characters are rendered with dimensional depth through careful lighting and textural detail, particularly visible in the bear's fur and Astro's costume.

Photography appears within cards, showing real people and events with natural color treatment rather than heavy filtering. This maintains authenticity alongside the more stylized illustrations.

The card as a container unit is fundamental to the system. Cards receive distinct surface treatments based on their purpose: vibrant blue for persuasive statistics, warm cream for supportive benefits, white with subtle borders for content exploration. Rounded corners are consistently applied at 1rem, softening the enterprise rectilinearity without becoming playful.

Shadows are minimal or absent; the system prefers flat color fields and clean edges, relying on whitespace and color contrast to establish hierarchy rather than dimensional depth.

## Components

### Primary action button
- **Anatomy**: Text label centered within a solid rectangular button
- **Surface and text color**: Action blue background with white text
- **Typography**: Body token, Salesforce Sans
- **Shape**: Small 0.25rem radius corners
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Centered within its container, often below headline and body text
- **Variants**: The "Try for free" CTA uses this treatment prominently

### Secondary action button
- **Anatomy**: Text label within a bordered rectangle
- **Surface and text color**: White background with action blue text and matching border
- **Typography**: Body token, Salesforce Sans
- **Shape**: Small 0.25rem radius corners, 2px border width
- **Spacing**: Same padding as primary button
- **Composition**: Appears in card footers, paired with card content above
- **Variants**: "Learn for free" and "Explore events" use this outlined treatment

### Stat card
- **Anatomy**: Large percentage or multiplier figure, company logo above, descriptive label below, all within a rounded rectangle
- **Surface and text color**: Gradient or solid action blue background with white text throughout
- **Typography**: Stat-display token for the figure, body token for the description
- **Shape**: 1rem rounded corners
- **Spacing**: Generous internal padding, approximately 2rem
- **Composition**: Three cards in equal-width horizontal row with consistent gaps
- **Variants**: Each card carries a different company logo and metric but maintains identical structure

### Benefit card
- **Anatomy**: Centered text statement within a rounded rectangle
- **Surface and text color**: Warm cream surface with navy ink text
- **Typography**: Section-display token, centered alignment
- **Shape**: 1rem rounded corners
- **Spacing**: Substantial internal padding for comfortable text breathing room
- **Composition**: Three cards in horizontal row, equal width, with gaps between
- **Variants**: Each card contains a different support benefit statement

### Content card
- **Anatomy**: Large visual area above, category label, headline, and action button below
- **Surface and text color**: White surface with navy headline, muted ink body, action blue button border
- **Typography**: Label token for category tag, section-display for headline, body for button
- **Shape**: 1rem rounded corners, optional subtle border
- **Spacing**: Internal padding around text area, visual area fills card width at top
- **Composition**: Two-column grid for the learning resources section
- **Variants**: Visual content varies between illustration and photography

### Footer
- **Anatomy**: Salesforce cloud logo, social media icon row, phone number, contact link, and three columns of categorized text links
- **Surface and text color**: White or very light surface with navy ink headings and action blue link text
- **Typography**: Navigation token for links, body token for phone number, label-like treatment for column headings
- **Shape**: No visible borders or cards, open layout
- **Spacing**: Generous vertical padding above, organized horizontal spacing between columns
- **Composition**: Logo and social stack on left, link columns distributed to the right

## Responsive behavior

The design appears optimized for desktop viewport widths with substantial horizontal space. The two-column and three-column card layouts would require adaptation for narrower viewports. At smaller sizes, card grids should stack to single column, maintaining internal padding and typography scale. The stat cards in particular need careful handling—their large display figures and company logos require adequate width to remain impactful.

The centered text blocks with constrained maximum width provide a natural responsive behavior; they simply maintain their readable measure while side margins shrink. Footer link columns should reflow, potentially collapsing to accordion sections or a stacked list on mobile.

The landscape illustrations with mascot characters span full widths and should scale proportionally, preserving character visibility. Text within illustrations or overlaid on them should be checked for contrast at all viewport sizes.

Touch targets for buttons and footer links should maintain minimum 44px height on touch devices. The small-radius buttons may benefit from slightly increased padding on mobile for easier activation.

## Practical implementation guidance

### Preserve
- The distinctive pairing of Avant Garde display headlines with Salesforce Sans body text; this combination is central to the brand voice
- The warm cream benefit card treatment; it differentiates support content from marketing content
- The generous section spacing that lets each content area breathe
- The mascot illustration style and its integration between content sections
- The consistent 1rem card radius across all card variants

### Avoid
- Adding heavy drop shadows to cards; the system prefers flat, clean surfaces
- Using the action blue for large text blocks; reserve it for interactive surfaces and stat cards
- Tightening the Avant Garde tracking beyond its specified values; the negative letter spacing is already optimized
- Introducing additional accent colors beyond the established navy, blue, and warm cream system
- Making footer links smaller than the navigation token size; legibility is important in this dense area

### Recommended build order
1. Establish the typographic foundation with both font families and the full token set
2. Implement the color system with semantic tokens rather than raw hex values
3. Build the card component with its three surface variants (action, warm, white)
4. Create the button components with primary and secondary treatments
5. Assemble section layouts with proper spacing and centered content blocks
6. Add the footer grid with its multi-column link organization
7. Integrate illustration assets with proper responsive scaling behavior

### Accessibility
- Ensure action blue on white meets WCAG AA contrast for normal text; the dark navy ink provides safer contrast for body copy
- Provide visible focus indicators using the action color with sufficient offset or outline
- Maintain logical heading hierarchy: hero-display for page title, section-display for section headings, avoiding skipped levels
- Add descriptive alt text to mascot illustrations and event photography
- Ensure stat card figures are not the sole conveyance of information; the descriptive labels provide context
- Test the warm cream benefit cards for sufficient contrast with navy text; the combination appears safe but should be verified

## Scope note

This guide covers the homepage surface visible in the supplied images, including the CTA footer, customer proof statistics, learning resources, and support sections. Navigation, header, hero area, and additional page surfaces are not represented. Motion, hover states, form interactions, and mobile-specific layouts are not covered. Measurements are practical adaptation targets derived from visual inspection.
