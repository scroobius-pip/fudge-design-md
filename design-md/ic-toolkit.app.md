# How ic-toolkit.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ic-toolkit.app-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large Clash Grotesk headline, app discovery grid with four product cards featuring distinct logos, and pill-shaped Explore buttons on a near-white background](https://pin.fontofweb.com/7238?format=jpg)](https://design.withfudge.com/share/pin-7238)

[Hero section with large Clash Grotesk headline, app discovery grid with four product cards featuring distinct logos, and pill-shaped Explore buttons on a near-white background](https://design.withfudge.com/share/pin-7238)

[![What is Toolkit section with centered dark heading, body text, KEY FEATURES label, three dark pill tags, and footer with logo, navigation links, and social links on light gray](https://pin.fontofweb.com/7239?format=jpg)](https://design.withfudge.com/share/pin-7239)

[What is Toolkit section with centered dark heading, body text, KEY FEATURES label, three dark pill tags, and footer with logo, navigation links, and social links on light gray](https://design.withfudge.com/share/pin-7239)

## Overview

Toolkit presents a disciplined, engineering-forward visual identity built for a decentralized infrastructure platform. The design communicates technical credibility through stark contrast, generous whitespace, and geometric precision. A near-white canvas dominates, allowing bold display typography and colorful product iconography to become the primary focal points. The system balances approachability with authority: rounded pill buttons soften the clinical palette, while tight letterspacing on headlines creates a modern, compact rhythm. Every element serves wayfinding clarity for developers and governance participants navigating SNS management, asset tools, and launchpad services. The overall impression is of a mature product suite—clean enough for quick scanning, structured enough for complex feature hierarchies.

## Colors

The palette is intentionally restrained, deriving visual interest from product iconography rather than chromatic complexity. Black and near-black tones establish hierarchy, while cool grays provide subtle depth without competing for attention.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary headings, hero display text, footer logo |
| ink-secondary | #263238 | Body text, card headings, active navigation, button fills |
| muted-ink | #78909C | Secondary descriptions, disabled states, placeholder text |
| surface | #ECEFF1 | Page background on select sections, subtle section alternation |
| surface-raised | #CFD8DC | Card borders, hairline dividers, inactive tag borders |
| canvas | #FFFFFF | Primary page background, card surfaces, button text on dark fills |
| action | #263238 | Primary button fills, interactive emphasis |
| action-text | #FFFFFF | Text on primary buttons |
| action-secondary | #000000 | Alternate button fills, high-contrast moments |
| action-secondary-text | #FFFFFF | Text on secondary buttons |
| link | #263238 | Footer links, navigation hover states |
| border | #CFD8DC | Card outlines, container boundaries |

The system operates in a single light mode. Dark text on light grounds is the invariant rule. Product icons introduce saturated purples, greens, and teals as the only color accents, functioning as wayfinding beacons within the neutral architecture. Shadows are minimal or absent; depth is achieved through borders and background shifts rather than elevation effects.

## Typography

Five families appear in the source: Clash Grotesk commands display moments, Satoshi handles interface text and labels, Roboto serves longer body passages and legal content, False provides the geometric overline face, and Arial renders at 24px in one button instance.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Clash Grotesk | 4.5rem | 500 | 0.9 | -0.02em | Homepage hero headline |
| section-display | Clash Grotesk | 3rem | 500 | 0.9 | -0.02em | Section headings like "What is Toolkit" |
| card-heading | Clash Grotesk | 1.25rem | 500 | 1.1 | -0.02em | Product card titles |
| overline | False | 0.75rem | 600 | 1.5 | 0.15em | Uppercase section labels |
| body | Satoshi | 1rem | 500 | 1.2 | -0.02em | Primary interface text, descriptions |
| body-secondary | Roboto | 1rem | 500 | 1.5 | 0.009em | Longer paragraphs, legal copy |
| navigation | Satoshi | 1rem | 500 | 1.2 | -0.02em | Header and footer links |
| button | Satoshi | 1rem | 500 | 1.2 | -0.02em | All button labels |
| footer-legal | Roboto | 1rem | 500 | 1.5 | 0.009em | Copyright and attribution lines |

Clash Grotesk is designed by Shiva Nallaperumal for Indian Type Foundry. Satoshi is designed by Deni Anggara for Indian Type Foundry. Roboto is designed by Christian Robertson for Google. False is designed by Shiva Nallaperumal for Indian Type Foundry. Arial carries no attributed designer or vendor in the supplied records. Verify licensing for these families before production use.

## Layout

The page structure follows a centered, single-column rhythm with contained width. Content blocks are generously separated, allowing each section to breathe and establish its own visual territory.

The header spans the full width. It contains the Toolkit wordmark left-aligned, with navigation links and utility actions right-aligned. The wordmark combines a geometric mark with the logotype, maintaining consistent lockup spacing.

Hero sections center their content with substantial vertical padding. The hero headline occupies a narrow measure—roughly eight to ten words per line—creating a stacked, monumental block. Supporting text sits below with comfortable separation, followed by call-to-action elements.

The app discovery grid uses a four-column layout at desktop widths, with equal-width cards arranged in a single row. Cards maintain consistent internal padding and uniform height within the row. Below the primary row, additional cards begin a second row, suggesting a wrapping flex or grid behavior.

Section spacing follows a pronounced rhythm. Major sections are separated by 6rem or more, while internal content gaps use 2.5rem. Card internal padding is 1.5rem, providing adequate breathing room for icons, titles, descriptions, and buttons without excessive whitespace.

Footer content distributes across the full width: logo and brand mark left, navigation links center, social and external links right. A copyright line centers below, separated by additional vertical space.

## Visual language

The visual character is defined by geometric precision and systematic restraint. Every interactive element is pill-shaped—buttons, tags, and potentially input fields share the same full-radius convention, creating a family resemblance that unifies the interface. This roundedness contrasts with the sharp rectangularity of cards and containers, producing a subtle tension between organic and engineered forms.

Product icons are the primary source of color and visual energy. Each app or service receives a distinct geometric mark: radial gradients, interlocking shapes, and abstract symbols rendered in saturated hues against the neutral ground. These icons are large within their cards, occupying significant vertical space before the text content begins.

Typography treatment emphasizes horizontal compression. Negative letterspacing on display and body text creates a dense, contemporary texture. Overlines are set in all caps with wide tracking, creating a stark contrast to the tight settings elsewhere—this establishes them as navigational signals rather than content.

Borders are hairline thin, one pixel, and cool gray. They define card perimeters without suggesting elevation. The absence of shadows throughout reinforces the flat, technical aesthetic. Background shifts between pure white and light cool gray demarcate sections more than any decorative element.

## Components

### Primary Button

- **Anatomy**: Text label centered within a fully rounded container.
- **Surface**: Background filled with ink-secondary (#263238); text in canvas white.
- **Typography**: button token, Satoshi at 1rem, medium weight.
- **Shape**: Border radius of 2.5rem, creating a complete pill.
- **Spacing**: Padding of 0.5rem vertical, 1rem horizontal.
- **Composition**: Typically appears as a solitary action or in small groups.
- **Variants**: A secondary variant inverts to black fill; a muted variant uses surface-raised background with muted-ink text for disabled or coming-soon states.

### Feature Tag

- **Anatomy**: Text label within a rounded rectangular container.
- **Surface**: Dark fill in ink-secondary with canvas text; or inverted with light border.
- **Typography**: body token, Satoshi at 1rem.
- **Shape**: Slight rounding at 0.25rem, more restrained than buttons.
- **Spacing**: Padding of 0.625rem vertical, 1rem horizontal.
- **Composition**: Appears in horizontal clusters, often three items, centered beneath section descriptions.

### App Card

- **Anatomy**: Product icon, title, description paragraph, and Explore button stacked vertically.
- **Surface**: Canvas white background with hairline border in surface-raised.
- **Typography**: card-heading for the title, body-secondary for the description, button for the action.
- **Shape**: 1rem border radius on corners.
- **Spacing**: 1.5rem internal padding; icon sits at top with generous space below before title.
- **Composition**: Equal-width columns in a grid; icon height is standardized across cards.
- **Variants**: Coming-soon cards reduce opacity on description text and use a muted button state; a small overline badge may appear in the card corner.

### Overline Label

- **Anatomy**: Uppercase text string, often centered above a content block.
- **Typography**: overline token, False at 0.75rem, semibold, with wide positive tracking.
- **Color**: ink black.
- **Composition**: Always precedes a larger heading or card grid, establishing section identity.

### Navigation Link

- **Anatomy**: Text label, potentially with underline on hover.
- **Typography**: navigation token, Satoshi at 1rem.
- **Color**: ink-secondary default; may shift to ink on interaction.
- **Composition**: Horizontal arrangement in header and footer; footer links include external social platforms.

### Header

- **Anatomy**: Logo lockup left, text links center-right, utility buttons far right.
- **Surface**: Transparent or canvas background.
- **Typography**: navigation for links; body for utility labels.
- **Composition**: Full-width bar with horizontal padding matching content containers.

## Responsive behavior

The design follows a desktop-first construction with clear adaptation paths. The four-column app grid should collapse to two columns at medium widths and single column on narrow viewports, maintaining card proportions and internal spacing. Hero headline size should scale down proportionally, potentially to the section-display token at smaller sizes to preserve line breaks and readability.

Navigation should consolidate to a menu trigger on narrow screens, preserving the Apps menu button as a persistent utility. Footer content should stack vertically, centering the logo and links while maintaining the horizontal rule of the copyright line.

Touch targets for pill buttons and cards should maintain minimum 44px height. Card internal spacing may increase slightly on touch devices to prevent accidental activation of adjacent elements.

## Practical implementation guidance

### Preserve
- The stark light-mode palette; dark mode would require complete rethinking of the icon color strategy.
- The tight letterspacing on Clash Grotesk and Satoshi; loosening it would destroy the contemporary density.
- The pill shape as the universal interactive language—buttons, tags, and potentially inputs should share this radius convention.
- The generous section spacing; compressing it would make the page feel like a dense dashboard rather than a product narrative.

### Avoid
- Adding drop shadows to cards or buttons; the flat aesthetic is intentional and shadows would introduce unwanted skeuomorphism.
- Using saturated colors for UI chrome; reserve chroma for product icons only.
- Mixing additional font families; the existing hierarchy is already at maximum complexity for this restrained system.
- Creating non-pill button shapes; rectangular buttons would break the established visual language.

### Recommended Build Order
1. Establish the type scale with Clash Grotesk and Satoshi loaded, verifying the negative letterspacing renders correctly.
2. Implement the color tokens as CSS custom properties, ensuring the cool gray progression is perceptually even.
3. Build the pill button component with its two variants, establishing the radius and padding as foundational constants.
4. Construct the app card with standardized icon containers and the Explore button placement.
5. Assemble the header with logo lockup and navigation pattern.
6. Implement the section spacing rhythm and overline label system.
7. Add the footer with its three-zone layout.

### Accessibility
- Ensure the ink-secondary text on canvas white meets WCAG AA contrast ratios; the near-black on white combination exceeds requirements.
- Provide visible focus indicators for pill buttons, likely an outline offset or background shift, since the fully rounded shape may clip standard outlines.
- Consider motion preferences for any icon animations; the static marks should communicate meaning without movement.
- Maintain logical heading hierarchy: overline as visual styling on span or paragraph, not as heading element; h1 for hero, h2 for sections, h3 for card titles.

## Scope note

This guide covers the homepage and its primary sections as visible in the supplied captures. Interior application pages, authentication flows, and the SNS management dashboard are not represented. Mobile breakpoint behavior, loading states, and form interactions are derived from desktop patterns rather than directly visible. Motion design and icon animation specifications are not included. The Arial family appears in one button instance at 24px; its role is limited and may warrant replacement with a primary interface family for consistency.
