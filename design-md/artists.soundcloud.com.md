# How artists.soundcloud.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/artists.soundcloud.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with dark gradient background, large white headline 'Pick the plan that fits you', body copy, and two outlined pill buttons over a photograph of two people in a](https://pin.fontofweb.com/5221?format=jpg)](https://design.withfudge.com/share/pin-5221)

[Hero section with dark gradient background, large white headline 'Pick the plan that fits you', body copy, and two outlined pill buttons over a photograph of two people in a](https://design.withfudge.com/share/pin-5221)

[![Social proof section with white headline and three embedded video testimonials from artists Odetari, Shaboozey, and Hit Boy against a pure black background](https://pin.fontofweb.com/5219?format=jpg)](https://design.withfudge.com/share/pin-5219)

[Social proof section with white headline and three embedded video testimonials from artists Odetari, Shaboozey, and Hit Boy against a pure black background](https://design.withfudge.com/share/pin-5219)

[![Pricing comparison table with green checkmarks, purple highlighted price callout showing $8.25/month, and outlined pill button on black background](https://pin.fontofweb.com/5218?format=jpg)](https://design.withfudge.com/share/pin-5218)

[Pricing comparison table with green checkmarks, purple highlighted price callout showing $8.25/month, and outlined pill button on black background](https://design.withfudge.com/share/pin-5218)

[![Feature section with white headline 'Get heard, with Artist Pro', body copy with bullet points, outlined button, and decorative blue graphic with 'BUZZING' text on right side](https://pin.fontofweb.com/5217?format=jpg)](https://design.withfudge.com/share/pin-5217)

[Feature section with white headline 'Get heard, with Artist Pro', body copy with bullet points, outlined button, and decorative blue graphic with 'BUZZING' text on right side](https://design.withfudge.com/share/pin-5217)

## Overview

The SoundCloud for Artists marketing site presents a bold, dark-themed visual system designed to resonate with musicians and creators. The design language centers on maximum contrast: pure black backgrounds serve as a stage for large, confident white typography and strategic accent colors that punctuate key moments. The overall impression is cinematic and music-industry authentic—reminiscent of dark recording studios and live performance venues.

The system employs a single type family across all text, creating cohesion through weight and size variation rather than family mixing. Photography and video content sit directly against the black canvas without framing containers, allowing artist imagery to feel immersive and immediate. The layout philosophy favors generous vertical breathing room, asymmetric two-column compositions, and centered social-proof grids that let testimonials dominate the visual field.

Navigation is minimal and unobtrusive, floating as transparent text links at the top of the viewport. Calls to action use a consistent pill-shaped outline treatment that inverts on hover, creating a tactile button language without heavy chrome. The design avoids gradients on UI elements, relying instead on flat color fields, thin borders, and the natural contrast between black and white to establish hierarchy.

## Colors

The color system is intentionally restrained, built on a near-monochrome foundation with three functional accent colors. Every color serves a specific communicative role, from the immersive black canvas to the green validation indicators and purple price highlights.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, section backgrounds, navigation bar |
| ink | #ffffff | Primary text, headlines, body copy, button labels, navigation links |
| muted-ink | #a0a0a0 | Secondary text, captions, artist handles, pricing comparison values |
| accent-orange | #ff5500 | SoundCloud brand moments, logo, energetic highlights |
| accent-green | #7ed321 | Success states, feature checkmarks, positive indicators |
| accent-purple | #9013fe | Price callout emphasis, promotional highlights, special offers |

The black canvas is absolute and unmodulated—no subtle gradients or texture overlays appear in the interface layer. This creates a theatrical void that makes white typography appear to float forward and allows photography to carry full tonal range without competing against background variation.

White ink is used at full strength for all primary reading text, from the largest hero headlines down to navigation links. The muted-ink gray steps back for supporting information like social media handles beneath video embeds and the "Average other service" pricing column, establishing clear information hierarchy without introducing additional hues.

The three accent colors appear with surgical precision. Green checkmarks in the pricing table provide immediate visual confirmation of included features. Purple rings the highlighted price in the comparison section, drawing the eye to the value proposition. Orange persists as the brand's energetic signature, visible in the SoundCloud logo mark and available for high-impact moments.

## Typography

The typographic system relies on a single family, Söhne-Buch, designed by Kris Sowersby and distributed by Klim Type Foundry. This is a contemporary grotesque with clean, open forms that perform well at display sizes while maintaining readability in body text. The Buch (Book) weight provides a calm, confident voice—neither aggressively bold nor timidly light.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Söhne-Buch | 4rem | 400 | 1.1 | -0.02em | Page hero headlines, major section titles |
| section-display | Söhne-Buch | 2.5rem | 400 | 1.15 | -0.01em | Section headlines, feature introductions |
| body | Söhne-Buch | 1rem | 400 | 1.6 | 0em | Paragraphs, descriptions, list items |
| label | Söhne-Buch | 0.875rem | 400 | 1.4 | 0.01em | Button labels, captions, small metadata |
| navigation | Söhne-Buch | 0.875rem | 400 | 1 | 0em | Top navigation links, utility text |

The type scale is built on a 4px relative unit, with sizes landing at clean multiples: 16px for body, 14px for labels and navigation, 40px for section displays, and 64px for hero displays. Negative letter spacing on larger sizes tightens the word image for impact, while body text tracks at zero for comfortable reading.

Headlines frequently break across two lines, with the line break positioned for rhythmic phrasing rather than strict length equalization. The hero display on the pricing page reads "Pick the plan that fits / you."—the break creates a conversational pause that mirrors spoken language.

Verify licensing for Söhne-Buch through Klim Type Foundry before production use.

## Layout

The layout system employs a full-bleed approach where sections extend edge-to-edge without visible container boundaries. Content is constrained to a centered maximum width, creating consistent reading measure while allowing background imagery and color fields to reach the viewport edges.

The grid is fundamentally asymmetric. Hero and feature sections typically split into a 55/45 or 60/40 text-to-media arrangement, with text aligned left and imagery positioned to the right. This creates dynamic tension and prevents the predictable center-stacked layouts common to SaaS marketing pages. The "Get heard, with Artist Pro" section demonstrates this clearly: substantial left-aligned text occupies roughly half the width, while a decorative blue graphic with artist photography floats in the remaining space.

Vertical rhythm is generous. Sections are separated by substantial padding—approximately 6rem above and below—creating clear territorial boundaries between messages. Within sections, element spacing follows a 1.5rem component gap for related items like headlines and body copy, expanding to 3rem between distinct content blocks.

The navigation bar floats at the top of the viewport with the SoundCloud logo mark left-aligned and navigation links centered, followed by a right-aligned "Sign in" button. No background container or shadow separates the navigation from content below; it relies on content-aware placement, typically over dark hero imagery where white text maintains sufficient contrast.

Video testimonial sections use a strict three-column grid with equal-width columns and consistent gutters. Each column contains a quote, embedded video player, and artist handle, creating a modular system that scales predictably.

## Visual language

The visual language draws heavily from music culture and nightlife aesthetics. The persistent black background evokes darkened venues, recording booths, and the intimate atmosphere of listening sessions. Against this void, white typography achieves a luminous quality, and accent colors read as stage lights or neon signage.

Photography treatment favors authentic, documentary-style imagery over polished stock. Artists appear in casual settings—studios, home environments, performance spaces—captured with natural lighting that preserves shadow detail. Images are not cropped to severe aspect ratios; they breathe with generous framing that includes environmental context.

Decorative graphics introduce controlled color energy. The blue geometric frame surrounding the "BUZZING" chart graphic in the feature section uses angular, pixel-referenced shapes that suggest digital culture and screen-native aesthetics. These elements are not photorealistic but rather stylized illustrations that complement the photographic content without competing for attention.

Motion is implied through the video embeds, which autoplay or present with prominent play controls. The red YouTube play buttons provide familiar interaction cues against the dark thumbnails. Video content shows artists in mid-conversation, creating a sense of ongoing dialogue and community.

The overall mood balances professionalism with creative authenticity—corporate enough to convey reliability for payment and distribution services, yet culturally attuned enough to signal genuine understanding of artist life.

## Components

### Primary action button

- **Anatomy**: Text label centered within a pill-shaped outline container
- **Surface**: Transparent background with 1px solid white border
- **Typography**: `{typography.label}` at 0.875rem
- **Shape**: Full pill with `border-radius: 9999px`
- **Spacing**: 0.75rem vertical padding, 2rem horizontal padding
- **Composition**: Frequently appears in pairs with 1.5rem gap between buttons
- **Variants**: Two visible variants—"Get Artist Pro" and "Get Artist"—suggesting primary and secondary emphasis through label rather than style differentiation

### Navigation bar

- **Anatomy**: Logo mark left, text links center, outlined button right
- **Surface**: Fully transparent, no background or blur
- **Typography**: `{typography.navigation}` for links, `{typography.label}` for sign-in button
- **Composition**: Horizontal flex layout with space-between distribution
- **Visible items**: "For Artists", "Get Heard", "Distribution", "Insights", "Plans", "Sign in"

### Feature section

- **Anatomy**: Headline, body copy with bullet points, optional call-to-action button, and supporting media or graphic
- **Surface**: Transparent against black canvas
- **Typography**: `{typography.section-display}` for headline, `{typography.body}` for description
- **Composition**: Asymmetric two-column layout with text left, media right; or full-width centered for testimonials
- **Spacing**: 1.5rem between headline and body, 2rem between body and button

### Pricing comparison table

- **Anatomy**: Column headers, feature rows with checkmarks or price values, highlighted total row
- **Surface**: Transparent with horizontal 1px dividers between rows
- **Typography**: `{typography.body}` for feature names, `{typography.label}` for values
- **Color**: Green checkmarks (`{colors.accent-green}`) for included features, white for SoundCloud column, muted gray for competitor column
- **Highlight**: Purple oval outline (`{colors.accent-purple}`) around the $8.25/month price with "Nice!" label beneath

### Video testimonial card

- **Anatomy**: Quote text, embedded video player, artist handle
- **Surface**: Transparent against black canvas
- **Typography**: `{typography.body}` for quote with artist name in bold, `{typography.label}` for handle
- **Composition**: Vertical stack with consistent spacing, three cards in equal grid
- **Media**: Embedded YouTube Shorts with native player chrome including play button, progress bar, and "Shorts" branding

## Responsive behavior

The design should maintain its dark, immersive character across viewport sizes. At narrower widths, the asymmetric two-column layouts should stack vertically with text preceding imagery, preserving the reading order. The three-column testimonial grid should collapse to a single column with full-width video embeds to maintain legibility of artist expressions and on-screen text.

Navigation should convert to a hamburger menu or simplified link list on mobile, as the full horizontal arrangement will overflow narrow viewports. The pill buttons should remain tappable with increased vertical padding to meet minimum touch targets of 44px.

Hero headlines should scale down proportionally, maintaining the 4rem/2.5rem relationship between hero and section displays. Line breaks in headlines should reflow naturally rather than forcing mid-word breaks.

Video embeds should maintain aspect ratio and use native responsive behavior, with artist handles remaining visible beneath each player. The pricing table should scroll horizontally or stack into a card-based comparison on small screens to prevent crushing of financial data.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the unifying background throughout all sections
- The single-type-family approach using Söhne-Buch exclusively
- The pill-shaped outline button as the primary interactive element
- The asymmetric text-to-media composition in feature sections
- The generous vertical spacing between major content sections
- The green checkmark and purple highlight language in pricing contexts

### Avoid
- Introducing additional font families that would dilute the cohesive typographic voice
- Using filled or solid-color buttons that would compete with the outline treatment
- Adding background colors or gradients behind content sections that would break the immersive black void
- Centering body text in feature sections—the left alignment creates purposeful asymmetry
- Shrinking the video testimonial grid below three columns on desktop, as the social proof loses impact when isolated

### Recommended build order
1. Establish the black canvas and load Söhne-Buch with appropriate weights
2. Implement the navigation bar with transparent background and white text links
3. Build the hero section with large display type, body copy, and paired pill buttons
4. Create the asymmetric feature section pattern with text left, media right
5. Develop the pricing comparison table with green indicators and purple highlight
6. Construct the three-column testimonial grid with embedded video players
7. Add the footer or additional sections following established spacing and color rules

### Accessibility
- Ensure white text on black backgrounds meets WCAG AAA contrast ratios (7:1 for body text, 4.5:1 for large text)
- Provide visible focus indicators on pill buttons that maintain the outline treatment while adding distinct focus state
- Include alt text for all artist photography and descriptive labels for video content
- Consider a reduced-motion preference that pauses autoplay video embeds
- Ensure the pricing table is navigable by screen readers with proper header associations and row descriptions

## Scope note

This guide covers the SoundCloud for Artists marketing homepage and its visible sections: hero, feature explanations, pricing comparison, and artist testimonials. Interior pages, authenticated dashboard interfaces, mobile-specific layouts, and motion or interaction states are not represented in the supplied material. Measurements are practical adaptation targets derived from visual inspection of the desktop presentation.
