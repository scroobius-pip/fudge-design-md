# How helium.computer is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/helium.computer-design)

Last updated: 2026-08-10

## Captured pages

[![Full landing page showing split-view browser screenshots, feature grid, !bangs search demo, centered love message, and footer with download CTA](https://pin.fontofweb.com/6939?format=jpg)](https://design.withfudge.com/share/pin-6939)

[Full landing page showing split-view browser screenshots, feature grid, !bangs search demo, centered love message, and footer with download CTA](https://design.withfudge.com/share/pin-6939)

[![Hero section with centered starburst logo, headline, and browser mockup showing Kagi search results page](https://pin.fontofweb.com/6938?format=jpg)](https://design.withfudge.com/share/pin-6938)

[Hero section with centered starburst logo, headline, and browser mockup showing Kagi search results page](https://design.withfudge.com/share/pin-6938)

[![Tight crop of hero area with navigation bar, starburst mark, headline, subhead, and primary download button on deep blue gradient](https://pin.fontofweb.com/6937?format=jpg)](https://design.withfudge.com/share/pin-6937)

[Tight crop of hero area with navigation bar, starburst mark, headline, subhead, and primary download button on deep blue gradient](https://design.withfudge.com/share/pin-6937)

[![Feature section with floating browser UI mockups demonstrating !bangs search shortcuts alongside descriptive text](https://pin.fontofweb.com/3806?format=jpg)](https://design.withfudge.com/share/pin-3806)

[Feature section with floating browser UI mockups demonstrating !bangs search shortcuts alongside descriptive text](https://design.withfudge.com/share/pin-3806)

## Overview

Helium presents itself as a privacy-first web browser through a single, vertically-scrolling landing page. The design language is immediately distinctive: an extremely dark, almost black-to-deep-blue gradient canvas that lets floating browser mockups and white typography carry the entire visual story. There is no sidebar, no card-based dashboard, no heavy chrome—just generous negative space, a tight typographic hierarchy, and carefully placed screenshots of the browser in action.

The page opens with a centered hero that establishes trust through simplicity: a geometric starburst mark, a bold promise about uninterrupted browsing, and a single download button. Below this, the design alternates between full-width browser mockups and asymmetric two-column feature grids. The mockups are not flat illustrations; they are photorealistic screenshots with subtle shadows and rounded corners, appearing to float above the gradient background. This creates depth without introducing decorative elements.

The overall rhythm is calm and confident. Sections breathe with large vertical padding. Text never crowds the imagery. Even dense feature explanations are broken into short paragraphs with clear headings. The design communicates technical credibility through restraint rather than complexity.

## Colors

The palette is extremely constrained, built from four exact interface colors that create a nocturnal, atmospheric environment.

| token | hex | use |
|---|---|---|
| canvas | #000000 | Page background; the deepest layer of the gradient |
| surface | #5669BD | Mid-tone blue for gradient transitions and hover states |
| accent | #AFBEFF | Light periwinkle for secondary text, links, and subtle highlights |
| ink | #FFFFFF | Primary headings, navigation, and button text on dark backgrounds |
| muted-ink | #AFBEFF | Body copy and descriptive paragraphs to reduce visual weight |
| action-bg | #FFFFFF | Primary button fill and inverted text surfaces |
| action-ink | #000000 | Text on primary buttons |

The background operates as a continuous gradient from pure black at the top through deep navy toward the bottom. This gradient is not a decorative flourish; it unifies every section and makes the white browser mockups appear to glow. The accent color #AFBEFF serves a functional role: it de-emphasizes explanatory text so that headings and screenshots dominate attention. There are no additional brand colors, no success or error states visible, no borders in the conventional sense. The palette's discipline reinforces the product's positioning as minimal and focused.

## Typography

The type system relies on a single family, Instrument Sans, used at weights and sizes that create dramatic scale contrast between hero statements and body explanations. Instrument Serif is available in the source but does not appear in the visible interface.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Instrument Sans | 3rem | 500 | 0.9 | -0.1em | Main headline "Internet without interruptions" |
| section-display | Instrument Sans | 2.25rem | 500 | 0.9 | -0.06em | Feature headings in two-column grid |
| body | Instrument Sans | 1.25rem | 500 | 1.3 | -0.01em | Primary descriptive paragraphs |
| body-small | Instrument Sans | 1rem | 500 | 1.2 | -0.01em | Secondary explanations and footer text |
| label | Instrument Sans | 0.75rem | 500 | 1 | -0.01em | Small tags and metadata |
| navigation | Instrument Sans | 1rem | 500 | 1.2 | -0.01em | Header links and button labels |

The negative letter spacing is aggressive, particularly on hero-display and section-display tokens, giving headlines a compressed, editorial quality that feels intentional rather than cramped. Line heights are tight, especially for display sizes, which keeps multi-line headings visually cohesive. The 500 weight is used universally; there is no bold weight visible in the interface, maintaining an even, calm rhythm.

Instrument Sans was designed by Rodrigo Fuenzalida and is distributed by Frag Type. Verify licensing for these families before production use.

## Layout

The page follows a single-column flow with two distinct interior patterns: centered hero sections and asymmetric two-column feature grids.

The global container uses generous horizontal padding of 2rem on standard viewports, expanding slightly for the hero area which feels more spacious. The header is a fixed or sticky navigation bar with the logo mark and wordmark on the left, utility links centered or right-aligned, and the primary download button as the rightmost element. Header padding is 1.875rem top, 2rem sides, and 1rem bottom, creating a slightly taller top edge.

Hero sections are fully centered with a maximum readable width of approximately 40rem for the headline and subhead. The starburst logo mark sits above the headline, acting as a visual anchor. Below the text, the primary download button is centered, followed by a small platform label.

Feature sections use a two-column grid with roughly equal width columns and a 2rem gap. The left column typically contains a heading and two to three short paragraphs; the right column mirrors this structure. When a feature includes a browser mockup, the mockup spans nearly full width above or between text sections, breaking the two-column grid and creating visual variety.

Vertical rhythm is established through section spacing of 5.625rem, with some areas using larger 90px top padding to create dramatic separation between major content blocks. The browser mockups themselves have subtle rounded corners and appear to cast soft shadows, though these are part of the screenshot imagery rather than CSS effects.

## Visual language

The starburst mark is the central brand symbol: an eight-pointed geometric asterisk that appears above the hero headline and as the browser favicon. It is drawn with thin white strokes, precise and mathematical, suggesting both radiation (the namesake) and a compass or network hub. This mark never appears with color; it is always white or near-white against the dark gradient.

Browser mockups are the primary visual content. They are presented as floating windows with realistic macOS traffic lights (red, yellow, green circles) in the upper left, rounded corners, and subtle shadow. The mockups show actual browser interfaces: search results, split-view image galleries, and !bangs search dropdowns. This realism serves a persuasive function; the product is not abstract, it is immediately recognizable as a working browser.

The gradient background shifts from absolute black at the top through deep indigo to a slightly lighter navy at the bottom. This progression is so gradual that individual sections do not feel separated by color changes; instead, the entire page feels like one continuous environment. The floating mockups catch light against this darkness, creating natural focal points without explicit borders or containers.

There is no visible iconography beyond the starburst and standard interface elements. No social proof badges, no trust seals, no decorative patterns. The visual confidence comes from this reduction.

## Components

### Navigation bar

- **Anatomy**: Logo mark (starburst) and wordmark "Helium" on the left; text links "Bangs", "Sponsor", "GitHub" in the center-right; primary "Download" button on the far right.
- **Surface**: Transparent background over the gradient; no visible border or shadow.
- **Typography**: navigation token for all links; button uses the same size with inverted colors.
- **Spacing**: 1.875rem top padding, 2rem horizontal padding, 1rem bottom padding.
- **Shape**: No border radius on the bar itself; buttons use 3.125rem pill radius.

### Primary button

- **Anatomy**: Icon + label pattern; download icon precedes text.
- **Surface**: action-bg fill with action-ink text; no border.
- **Typography**: navigation token.
- **Shape**: 3.125rem pill radius.
- **Spacing**: 0.5625rem vertical padding, 1rem horizontal padding.
- **Variants**: A secondary transparent variant with white text appears for less prominent actions.

### Hero section

- **Anatomy**: Centered stack of starburst mark, headline, subheadline, primary button, platform label.
- **Typography**: hero-display for the headline; body token for the subheadline; label token for the platform note.
- **Spacing**: Generous vertical padding above and below; headline sits well below the navigation.
- **Composition**: All elements center-aligned; maximum width constrained for readability.

### Browser mockup

- **Anatomy**: Screenshot image with intrinsic rounded corners and shadow from the source file; no additional CSS frame needed.
- **Surface**: The mockup itself contains white and light-gray interface elements; it contrasts naturally against the dark gradient.
- **Spacing**: Typically full-width within the content container; large vertical margins separate mockups from adjacent text.
- **Composition**: Some mockups show single windows; others show split-view arrangements with two content panels side by side.

### Feature grid

- **Anatomy**: Two-column layout with heading and paragraphs in each column.
- **Typography**: section-display for headings; body for descriptions.
- **Color**: Headings use ink; body text uses muted-ink.
- **Spacing**: 2rem column gap; 5.625rem section padding.
- **Composition**: Columns are roughly equal width; text left-aligned within each column.

### Footer

- **Anatomy**: Centered logo mark, link columns for "Legal stuff", "Resources", "Socials", and a small attribution line.
- **Typography**: body-small for links; label token for the attribution.
- **Color**: Links use muted-ink; attribution is slightly more subdued.
- **Spacing**: Compact vertical spacing compared to main sections; generous bottom padding.

## Responsive behavior

The design is documented from desktop viewports. The two-column feature grid should collapse to a single column on narrower screens, with headings and paragraphs stacking sequentially. The hero section should maintain center alignment but reduce headline size to preserve line breaks and readability.

The navigation bar likely compresses on smaller screens: text links may collapse into a menu or hide entirely, leaving only the logo and download button. The primary button should remain tappable with adequate touch targets; its pill shape and padding already support this.

Browser mockups, being full-width images, will scale proportionally. Their fine interface details may become less legible on small screens; consider allowing horizontal scroll within mockup containers or switching to cropped detail views rather than full screenshots.

## Practical implementation guidance

### Preserve
- The extreme contrast between dark gradient background and white floating mockups; this is the core visual identity.
- The tight negative letter spacing on display headings; it gives the design its editorial, confident character.
- The single-font-family discipline; introducing a second sans-serif would dilute the systematic calm.
- The generous section spacing; crowding sections would destroy the breathable, premium feel.
- The starburst mark as a pure geometric form without color fills or gradients.

### Avoid
- Adding background colors or borders to feature sections; the continuous gradient is the only container needed.
- Using bold weights where 500 is specified; the even weight distribution is intentional.
- Introducing additional accent colors; the periwinkle #AFBEFF is sufficient for all secondary emphasis.
- Flat illustration styles for browser imagery; the photorealistic mockups are essential to credibility.
- Card-based layouts with explicit shadows and borders; the design avoids these conventions entirely.

### Recommended build order
1. Establish the gradient background and set base typography with Instrument Sans at 500 weight.
2. Build the navigation bar with transparent background and pill-shaped download button.
3. Implement the hero section with centered stack and starburst mark.
4. Create the two-column feature grid with exact heading and body color roles.
5. Add full-width browser mockups between text sections, ensuring they break the grid rhythm.
6. Polish spacing and vertical rhythm using the section and content-gap tokens.

### Accessibility
- The dark gradient with white text provides strong contrast for headings, but verify that muted-ink body text (#AFBEFF on #000000) meets WCAG AA standards for small text; it may need slight lightening.
- The starburst mark should include an accessible label or be hidden from screen readers if decorative.
- Download buttons need clear focus indicators; the pill shape can accommodate an outline or subtle background shift.
- Browser mockups containing text should have descriptive alt text explaining the feature demonstrated, since the interface detail within images is not readable by assistive technology.

## Scope note

This guide covers the Helium landing page as a single-page marketing surface. It does not include documentation for additional pages such as the bangs directory, download flows, or settings interfaces. Motion, hover states, and mobile-specific navigation patterns are not represented in the supplied material. Measurements are exact where retained in the source data.
