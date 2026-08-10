# How ordinarypeople.info is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ordinarypeople.info-design)

Last updated: 2026-08-10

## Captured pages

[![Netflix K-Content brand spectrum diagram showing neutral-to-branded content progression with geometric white-on-black graphics](https://pin.fontofweb.com/10410?format=jpg)](https://design.withfudge.com/share/pin-10410)

[Netflix K-Content brand spectrum diagram showing neutral-to-branded content progression with geometric white-on-black graphics](https://design.withfudge.com/share/pin-10410)

[![Typography weight exploration grid with clean cuts, curves, and blocks across heavy-to-light spectrum in white on black](https://pin.fontofweb.com/10409?format=jpg)](https://design.withfudge.com/share/pin-10409)

[Typography weight exploration grid with clean cuts, curves, and blocks across heavy-to-light spectrum in white on black](https://design.withfudge.com/share/pin-10409)

[![Netflix Sans type specimen showing bold title, medium subtitle, and body copy with caption styles in white on black](https://pin.fontofweb.com/10408?format=jpg)](https://design.withfudge.com/share/pin-10408)

[Netflix Sans type specimen showing bold title, medium subtitle, and body copy with caption styles in white on black](https://design.withfudge.com/share/pin-10408)

[![Color palette grid with red, purple, blue, green, yellow families plus black, white, and gray neutrals](https://pin.fontofweb.com/10407?format=jpg)](https://design.withfudge.com/share/pin-10407)

[Color palette grid with red, purple, blue, green, yellow families plus black, white, and gray neutrals](https://design.withfudge.com/share/pin-10407)

## Overview

Ordinary People presents creative portfolio work through a stark, high-contrast editorial system. The design language centers on a black canvas with white typography, allowing project imagery and color to become the primary visual focus. The system balances refined serif body text with clean sans-serif display and functional type, creating a gallery-like atmosphere where work speaks without interface interference.

The visual approach treats each project as an independent editorial object. Navigation and structural elements recede into the background while content occupies the foreground. This hierarchy demands disciplined spacing and typographic restraint, with the black field serving as a unifying constant across diverse project presentations. The result is a portfolio that feels simultaneously minimal and materially rich, where the absence of decorative elements amplifies the impact of the work itself.

## Colors

The color system operates on a principle of maximum contrast with selective chromatic intervention. The foundation is absolute: black canvas and white text. Project-specific palettes introduce saturated accents only within content imagery, never as interface chrome.

| token | value | use |
|---|---|---|
| canvas | #000000 | Page background, all structural surfaces |
| ink | #FFFFFF | Primary text, icons, borders, interactive elements |
| muted | #AFAFAF | Secondary information, disabled states, subtle dividers |

The interface maintains strict monochrome discipline. Black and white handle every structural need, from navigation to captions to grid lines. Color enters only through project imagery and embedded graphics, where full-spectrum palettes appear as content rather than decoration. The Netflix K-Content project shown in the images demonstrates this approach with its vibrant red, purple, blue, green, and yellow palette contained entirely within project graphics. This separation ensures the portfolio system remains neutral while individual projects express distinct visual identities. The muted gray serves sparingly for secondary metadata or transitional states where full white would compete with primary content.

## Typography

The type system pairs a refined serif for body content with a functional sans-serif for display, navigation, and interface elements. A secondary serif wordmark adds editorial distinction to the site header.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Calibrewr | 3.5rem | 400 | 1 | normal | Project titles, major headlines |
| section-display | Calibrewr | 1.75rem | 400 | 1.5 | normal | Section headings, medium emphasis |
| body | Adobe Garamond Pro | 1.24rem | 400 | 1.25 | normal | Paragraphs, descriptions, captions |
| body-accent | Adobe Garamond Pro | 1.19rem | 400 | 1.2 | 0.02em | Emphasized body, linked content |
| label | Calibrewr | 1rem | 400 | 1.25 | normal | Tags, metadata, small functional text |
| navigation | Calibrewr | 1rem | 400 | 1 | normal | Menu items, header links |
| wordmark | Orpheus Pro | 1.33rem | 400 | 1 | normal | Site identity, logo treatment |

Calibrewr handles all display and functional typography with a neutral, contemporary voice. Adobe Garamond Pro brings classical refinement to reading content, with its slightly condensed proportions and sharp serifs. Orpheus Pro appears only in the wordmark, where its high-contrast strokes and distinctive character shapes provide memorable identity without competing with project content.

The extracted data also records Applesystem at 14px, Signifierwr at 17.44px for paragraph text on some project pages, and System-Sansserif at 16px as root fallbacks. These families appear in specific regional contexts or as system-level defaults rather than as primary design tokens. Verify licensing for these families before production use. Adobe Garamond Pro and Orpheus Pro are available through Adobe Typekit.

## Layout

The layout system relies on generous negative space and consistent modular spacing. Content flows within a flexible grid that adapts to project needs while maintaining systemic rhythm.

The base spacing unit is 0.125rem, with all measurements building from this foundation. Key layout values include:

- **Section padding**: 4.625rem top spacing between major content regions
- **Content padding**: 2.78rem internal padding for content containers
- **Grid gutter**: 1rem between grid items
- **Component spacing**: 2rem between related elements

The grid system uses negative margin techniques to achieve full-bleed imagery within padded containers. A common pattern applies -1.0625rem horizontal margins to counteract 0.5rem internal padding, allowing images to extend to container edges while maintaining text alignment.

Article-level containers receive consistent padding on all sides, creating framed content areas that float within the black canvas. Section containers add top padding only, allowing vertical stacking without compounding internal spacing.

Image grids employ aspect-ratio preservation through padding-bottom techniques, with values ranging from 220px to 812px depending on desired proportions. This approach maintains layout stability before images load while enabling responsive scaling.

## Visual language

The visual language prioritizes restraint and material honesty. Every element exists in service of the work being presented.

**Contrast and legibility**: The black-white polarity ensures maximum legibility across all viewing conditions. Text remains crisp and photographs retain full tonal range without interface color contamination.

**Geometric precision**: The system favors clean edges, right angles, and mathematical spacing. Rounded corners appear only in navigation pills and circular buttons, never on content frames or image containers.

**Image treatment**: Photography and graphics display without borders, shadows, or frames. The black canvas acts as the only frame needed. Images sit flush against the background or within strict grid alignments.

**Typography as texture**: At display sizes, type becomes a graphic element. Uppercase treatments, tight leading, and weight variations create typographic texture that complements rather than competes with imagery.

**Project-specific expression**: Individual projects introduce their own color, type, and graphic systems within the neutral portfolio container. The Netflix K-Content project demonstrates this with its custom sans-serif system, vibrant color palette, and geometric pattern language. The portfolio framework accommodates this variation without imposing its own visual identity on the work.

## Components

### Site header

- **Anatomy**: Fixed or sticky top bar containing wordmark, navigation links, and utility actions
- **Surface**: Transparent or black background, no border
- **Typography**: Navigation token for menu items, wordmark token for site identity
- **Spacing**: 1.39rem vertical padding, 2.78rem horizontal padding
- **Composition**: Flex row with space-between alignment, navigation grouped with 1.39rem gaps
- **Variants**: Minimal variant shows wordmark only; expanded variant reveals full navigation

### Navigation pill

- **Anatomy**: Text link with optional border treatment
- **Surface**: Transparent background, white border at 1.5px when active or outlined
- **Typography**: Navigation token
- **Shape**: 20px border radius for pill appearance
- **Spacing**: 0.1rem vertical padding, 0.5rem horizontal padding
- **States**: Default shows text only; active or current state adds border; hover inverts to white background with black text

### Project hero

- **Anatomy**: Full-width section containing project title, metadata, and optional description
- **Surface**: Black background
- **Typography**: Hero display for project name, body for description, label for metadata
- **Spacing**: Section padding top, content padding sides
- **Composition**: Left-aligned or centered depending on project; generous vertical spacing before content

### Image grid

- **Anatomy**: Responsive grid of project images with consistent gaps
- **Surface**: Black background between items
- **Spacing**: 1rem gutters, 2rem row gaps
- **Composition**: 2-column or 3-column layouts with items spanning equal widths; occasional full-width spans for emphasis
- **Image treatment**: Object-fit cover, full bleed within grid cell, no border radius

### Caption block

- **Anatomy**: Text block below images or as standalone annotation
- **Typography**: Body token for descriptions, label token for titles or credits
- **Spacing**: 1rem top margin from associated image
- **Composition**: Left-aligned with content padding, or centered for standalone statements

### Circular button

- **Anatomy**: Icon or text button with circular boundary
- **Surface**: Transparent or white background depending on context
- **Shape**: 50% border radius for perfect circle
- **Spacing**: 0.1875rem internal padding
- **Use**: Close actions, menu toggles, utility controls

## Responsive behavior

The system maintains its high-contrast character across viewport sizes while adjusting proportions for readability.

At narrower viewports, the multi-column image grid collapses to single column with maintained gutter spacing. Hero typography scales down proportionally, with hero-display reducing to approximately 2.5rem to preserve line breaks and visual impact. Navigation may collapse to a menu trigger or horizontal scroll depending on item count.

Content padding reduces from 2.78rem to approximately 1.5rem on small screens, preserving the framed container effect without excessive horizontal margin. Section spacing compresses modestly but remains generous to maintain the gallery-like pacing.

Image aspect ratios remain fixed through the padding-bottom technique, ensuring layout stability regardless of viewport width. Grid negative margins adjust to match reduced gutter values.

Touch targets for circular buttons and navigation pills expand to minimum 44px dimensions for accessibility.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the default background; never introduce gray or tinted neutrals
- The sharp contrast between white text and black ground
- The separation of interface typography (Calibrewr) from reading typography (Adobe Garamond Pro)
- Generous spacing between sections; the rhythm of content is as important as the content itself
- Full-bleed image presentation without borders, shadows, or decorative frames

### Avoid
- Adding background colors or gradients to content containers
- Using project accent colors for interface elements like buttons or navigation
- Introducing border radius on images or content cards
- Competing display type treatments; let one sans-serif family handle all functional and display needs
- Dense information clustering; maintain breathing room around all elements

### Recommended build order
1. Establish the black canvas and white text foundation
2. Implement the type system with Adobe Garamond Pro for body and Calibrewr for display
3. Build the grid system with consistent gutters and aspect-ratio preservation
4. Add the site header with wordmark and navigation
5. Create project page templates with hero, image grid, and caption components
6. Refine responsive behavior for grid collapse and type scaling

### Accessibility
- Maintain minimum 4.5:1 contrast for all text; the black-white pairing exceeds this automatically
- Ensure interactive elements have visible focus indicators, such as outline or border changes
- Provide alt text for all project images describing content and context
- Consider reduced-motion preferences for any scroll-triggered animations
- Test navigation pill and circular button targets at minimum 44px for touch accessibility

## Scope note

This guide covers the portfolio project presentation system as visible on work detail pages. It does not include the homepage, about page, contact forms, or any motion behavior such as page transitions, scroll animations, or loading states. The circular button component and its specific iconography are partially described based on visible states; full interaction patterns may require additional reference. Measurements reflect the extracted interface values and should be verified against live implementation.
