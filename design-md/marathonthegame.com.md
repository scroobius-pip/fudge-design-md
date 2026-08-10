# How marathonthegame.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/marathonthegame.com-design)

Last updated: 2026-08-10

## Captured pages

[![Italian homepage hero with neon lime sidebar, alien face video backdrop, and platform purchase bar](https://pin.fontofweb.com/7792?format=jpg)](https://design.withfudge.com/share/pin-7792)

[Italian homepage hero with neon lime sidebar, alien face video backdrop, and platform purchase bar](https://design.withfudge.com/share/pin-7792)

[![Footer grid with social media links, legal navigation, diagonal hazard stripes, and ESRB rating](https://pin.fontofweb.com/6564?format=jpg)](https://design.withfudge.com/share/pin-6564)

[Footer grid with social media links, legal navigation, diagonal hazard stripes, and ESRB rating](https://design.withfudge.com/share/pin-6564)

[![Atmospheric hero section with purple planet, UESC facility, and dark info card with lime accent](https://pin.fontofweb.com/6563?format=jpg)](https://design.withfudge.com/share/pin-6563)

[Atmospheric hero section with purple planet, UESC facility, and dark info card with lime accent](https://design.withfudge.com/share/pin-6563)

[![Large display typography reading FROM THE CREATORS OF HALO AND DESTINY with split content layout](https://pin.fontofweb.com/6562?format=jpg)](https://design.withfudge.com/share/pin-6562)

[Large display typography reading FROM THE CREATORS OF HALO AND DESTINY with split content layout](https://design.withfudge.com/share/pin-6562)

## Overview

The Marathon design system presents a dark, militarized sci-fi aesthetic built on absolute contrast: pure black canvas against electric-lime accents and stark white typography. The visual language draws from tactical interfaces, industrial signage, and retro-futuristic terminal aesthetics. Every element communicates urgency and precision—sharp corners, zero border radius, monospace data readouts, and aggressive display type that fills horizontal space. The system balances dense information architecture with cinematic hero moments, using photography and illustration as immersive backdrops while UI elements overlay with calculated restraint. Navigation and actions favor directness over decoration, with link lists presented as bracketed protocol entries and buttons as stark rectangular triggers. The overall impression is of a classified operations terminal crossed with a premium entertainment property.

## Colors

The color system is intentionally minimal, relying on extreme contrast and a single accent hue to create visual hierarchy across dark environments.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary background for all surfaces, hero sections, and footer |
| surface | #1C1C1C | Elevated card backgrounds, info panels, and secondary containers |
| surface-elevated | #333333 | Subtle borders, dividers, and tertiary structural lines |
| ink | #FFFFFF | Primary text, headings, navigation labels, and body copy on dark |
| ink-muted | #C0FE04 | Secondary accent text, labels, and decorative data points |
| accent | #C0FE04 | Primary action backgrounds, highlight panels, and interactive emphasis |
| accent-bright | #C2FE0C | Slightly brighter lime variant for hover states and maximum visibility |
| border | #1C1C1C | Structural borders between grid cells and major sections |
| border-muted | #333333 | Hairline borders for secondary actions and subtle dividers |

The palette operates in a near-monochrome mode with chromatic accent. Black dominates every surface, creating infinite depth for photography and illustration. White provides maximum legibility for reading text. The electric lime (#C0FE04) functions as the sole emotional color—appearing in purchase buttons, hazard stripes, promotional panels, and data highlights. This restriction makes every lime element feel intentional and urgent. Dark photography with teal, purple, and blue atmospheric tones sits comfortably against the black canvas without color competition. When lime appears in large panels, it inverts the typical dark-mode relationship, demanding attention through sheer brightness against the surrounding void.

## Typography

The type system combines four distinct families into a rigid hierarchy: an aggressive geometric display face for headlines, a clean sans-serif for body reading, a technical monospace for data and labels, and a constructed industrial face for interface elements.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Marathon Shapiro | 7.6875rem | 700 | 0.8 | -0.02em | Primary hero headlines, full-width display statements |
| section-display | Marathon Shapiro | 3.5625rem | 700 | 0.85 | normal | Section headings, major content divisions |
| subhead-display | Marathon Shapiro | 2.4375rem | 700 | 0.85 | normal | Card titles, secondary headlines |
| body | TT Interphases Pro Rg | 1rem | 400 | 1.5 | normal | Paragraph text, descriptions, general reading |
| body-mono | PP Fraktion Mono | 0.9375rem | 500 | 1.2 | normal | Data readouts, technical descriptions, captions |
| label-mono | PP Fraktion Mono | 0.75rem | 500 | 1.2 | normal | Small labels, metadata, timestamps |
| navigation | Marathon Shapiro | 1rem | 400 | 1.5 | normal | Primary navigation items, menu labels |
| interface | Kh Interference | 0.9375rem | 400 | 1 | normal | Buttons, tags, compact UI labels |
| interface-loose | Kh Interference | 0.9375rem | 400 | 1.5 | normal | Multi-line button text, action descriptions |

Marathon Shapiro, designed by Oliver Jeschke and available from OGJ Type Design, provides the display voice—wide, geometric, and mechanically precise. Its bold weight dominates hero sections with sizes up to 123px, while regular weight handles navigation at 16px. TT Interphases Pro Rg, from Type Type, serves as the workhorse body face at 16px with comfortable 24px line height. PP Fraktion Mono, designed by Juri Zaech and available from Pangram Pangram, delivers technical credibility at 15px and 12px sizes. Kh Interference, from Kh Type by Kurppa Hosk, adds an industrial constructed quality for interface elements. Shapiro-55 Middle, also designed by Oliver Jeschke and available from OGJ Type Design, appears at 18px and 15px in select interface contexts. At Open Sans is present in the source but does not appear in visible interface elements. Verify licensing for these families before production use.

## Layout

The layout system favors full-bleed immersion broken by rigid grid interventions. Pages scroll as continuous vertical experiences where hero photography fills the viewport and content sections interrupt with stark rectangular panels.

The global header spans the full width with a black background, presenting a horizontal navigation of bracketed links—each item marked with directional arrows like `[↗]` to indicate external or secondary destinations. The Marathon logomark occupies the left edge as a circular icon. A persistent action button, typically "PRE-ORDER NOW" or "ACQUISTA ORA," anchors the right side in lime green.

Hero sections employ edge-to-edge photography or video with overlaid UI elements. A distinctive right-side vertical sidebar appears in lime green on some hero variants, containing rotated display text, social icons, and decorative marks. This sidebar creates a strong vertical rhythm and houses secondary navigation without competing with central imagery.

Content sections use asymmetric splits: large display typography occupies the left or top, while supporting imagery fills the remaining space. Info cards overlay photography in the lower right or left corners, using dark or lime backgrounds with contained padding of 21px. These cards present headline-label pairs followed by descriptive paragraphs and action links.

The footer collapses into a dense grid of link categories separated by thin white lines on black. Social media links receive lime treatment while legal links remain white. A diagonal hazard-stripe pattern in lime and black provides visual punctuation between grid zones.

Spacing follows a tight tactical rhythm. Section padding of 130px creates dramatic vertical breathing room for major transitions. Internal gutters of 21px maintain consistent information density. Grid cells in the footer use 24px vertical and 21px horizontal padding. Margins of 156.5px center content blocks with asymmetric offset.

## Visual language

The visual language communicates through industrial hazard aesthetics and terminal-era computing. Diagonal stripes in lime and black appear as decorative elements, evoking caution tape and restricted zones. Bracketed link syntax—`[↗] NEWS`, `[●] DISCORD`—presents navigation as command-line entries, reinforcing the sci-fi operational fiction.

Imagery favors dark atmospheric environments: derelict space colonies, neon-lit corridors, alien landscapes under purple skies. Photography receives no rounded corners or softening treatment; every image edge remains sharp, matching the zero-radius UI. Color grading in source photography emphasizes teal, purple, and deep blue tones that harmonize with the black canvas without requiring palette expansion.

Iconography is minimal and functional. Social platform icons appear as simple monochrome marks. The Marathon wordmark uses a distinctive wide geometric construction with internal cutouts. Interface icons favor squares, circles, and directional arrows in pure white or lime.

The lime accent operates as both functional signal and emotional beat. It appears in purchase buttons, promotional panels, hazard decorations, and selected text highlights. Its restricted use ensures that every instance reads as a call to action or critical information. White text on lime panels inverts the standard dark-mode relationship, creating maximum contrast for urgent messaging.

Typography composition favors extreme scale contrast. Hero headlines at 123px sit adjacent to 15px monospace labels, creating dramatic hierarchical jumps that guide scanning. All-caps treatment is standard for display type, while body and interface text use sentence case for readability.

## Components

### Primary Action Button
- **Anatomy**: Rectangular button with zero border radius, containing centered text
- **Surface**: Lime green background (#C0FE04) with black text, or black background with lime text for ghost variant
- **Typography**: Kh Interference at 15px, weight 400, line height 1.5
- **Shape**: Sharp corners, no radius
- **Spacing**: Horizontal padding of 16px to 50px depending on emphasis; height determined by content
- **Composition**: Typically positioned at the end of info cards or as persistent header actions
- **Variants**: Filled lime with black text; ghost black with lime text; black with white text and subtle border

### Info Card
- **Anatomy**: Rectangular panel containing label, headline, paragraph, and optional action link
- **Surface**: Dark background (#1C1C1C) or lime background (#C0FE04) depending on emphasis level
- **Typography**: Label uses PP Fraktion Mono at 15px in lime or white; headline uses Marathon Shapiro at 24px or 39px in white; body uses TT Interphases Pro Rg at 16px in white or black
- **Shape**: Zero border radius, sharp edges
- **Spacing**: Padding of 21px on all sides, or 21px vertical with 12px horizontal for compact variants
- **Composition**: Positioned absolutely over hero photography, typically lower right or lower left; casts subtle white or lime box-shadow for depth separation

### Navigation Header
- **Anatomy**: Full-width bar with logomark, horizontal link list, utility icons, and primary action
- **Surface**: Black background with white text
- **Typography**: Marathon Shapiro Wide 65 at 16px, weight 400, for navigation items; Kh Interference for action button
- **Shape**: Fixed height, no border radius
- **Spacing**: Navigation links padded 16px; right-side action button with 0px 16px padding
- **Composition**: Logomark left, links center-left, social icons center-right, action button far right
- **Variants**: English and localized versions maintain identical structure; bracketed arrows `[↗]` indicate external links

### Footer Grid
- **Anatomy**: Multi-column grid of link categories separated by hairline borders
- **Surface**: Black background with white and lime text; diagonal lime-black hazard stripe as decorative element
- **Typography**: Category headers in PP Fraktion Mono at 15px; links in TT Interphases Pro Rg at 16px or Kh Interference at 15px
- **Shape**: Grid cells with 1px white borders; zero radius throughout
- **Spacing**: Cell padding of 24px vertical and 21px horizontal; social link list with 8px left margin on items
- **Composition**: Social media column left, legal links right, ESRB rating and copyright bottom center, Bungie logo bottom right

### Hero Panel
- **Anatomy**: Full-viewport section with background media, overlaid UI elements, and optional sidebars
- **Surface**: Photography or video fills entire viewport; UI elements float without backing cards
- **Typography**: Display headlines in Marathon Shapiro at maximum scale; supporting labels in PP Fraktion Mono
- **Shape**: Full bleed, no container boundaries
- **Spacing**: Internal UI elements positioned with 21px gutters; sidebar width approximately 130px
- **Composition**: Central media focus with peripheral UI; right sidebar contains rotated text and icons; bottom bar contains platform logos and purchase actions

### Content Section
- **Anatomy**: Split layout with large display text and supporting imagery
- **Surface**: Black background with white text; imagery occupies 50-60% width
- **Typography**: Marathon Shapiro at 57px to 123px for headlines; TT Interphases Pro Rg at 16px for body; PP Fraktion Mono at 15px for labels
- **Shape**: Zero radius on all elements
- **Spacing**: Section padding of 130px vertical; internal gaps of 21px to 30px
- **Composition**: Text block left-aligned with generous right margin; imagery right-aligned or full-bleed opposite

## Responsive behavior

The design system prioritizes desktop presentation with immersive full-viewport experiences. At narrower viewports, the rigid grid structures should stack vertically while maintaining sharp edges and typographic hierarchy.

The navigation header should collapse into a compact bar with hamburger trigger, preserving the logomark and primary action button while hiding bracketed links behind a drawer. Hero sidebars should reposition below the main media or hide entirely on small screens, with their rotated text returning to horizontal orientation.

Display typography should scale down proportionally: hero headlines from 123px to approximately 48px, section displays from 57px to 32px. Body text remains at 16px across all breakpoints for readability. Info cards should expand to full width on mobile, losing their absolute positioning over imagery and stacking in the natural flow.

Footer grids should collapse from multi-column to single-column stacked lists, with hazard stripe elements scaling to maintain proportions. Platform logo bars in hero sections should wrap to multiple rows rather than compressing horizontally.

Touch targets for buttons and links should maintain minimum 44px height even as horizontal padding reduces. The zero-radius aesthetic must persist across all breakpoints as a core brand identifier.

## Practical implementation guidance

### Preserve
- Absolute black (#000000) as the dominant canvas color; never substitute dark grays
- Electric lime (#C0FE04) as the sole accent; resist adding secondary brand colors
- Zero border radius on all UI elements; sharp corners are foundational to the tactical aesthetic
- Bracketed navigation syntax with directional arrows for all link lists
- Marathon Shapiro for all display headlines at aggressive scales
- The four-family type stack: display, body, mono, and interface each serve distinct roles

### Avoid
- Rounded buttons or cards; softness contradicts the industrial fiction
- Gradient backgrounds; the system relies on flat color and photography
- Drop shadows for elevation; use flat color contrast or subtle box-shadow in accent colors only
- Centered text alignment for display type; left alignment maintains the terminal aesthetic
- Generic sans-serif substitutions for Kh Interference; its constructed quality is irreplaceable for interface elements

### Recommended Build Order
1. Establish the black canvas and white text foundation with TT Interphases Pro Rg body styles
2. Implement Marathon Shapiro display scale with hero, section, and subhead sizes
3. Add PP Fraktion Mono for labels, captions, and data readouts
4. Integrate Kh Interference for buttons and compact interface text
5. Build the navigation header with bracketed link pattern and persistent action button
6. Create hero section templates with full-bleed media and overlay card positioning
7. Develop the footer grid with border-separated cells and hazard stripe decoration
8. Apply lime accent sparingly to actions, highlights, and promotional panels

### Accessibility
- Maintain 4.5:1 minimum contrast for body text; white on black exceeds this, but lime on black should be limited to large text or decorative elements
- Ensure interactive elements have visible focus indicators; consider white or lime outlines against black
- Provide pause controls for any autoplay video in hero sections
- Use semantic heading hierarchy despite visual scale jumps; hero display should map to h1, section display to h2
- Test keyboard navigation through bracketed link lists; the unconventional syntax should not impede screen reader comprehension
- Respect reduced-motion preferences for any parallax or video transitions

## Scope note

This guide covers the Marathon homepage and its primary marketing surfaces. Interior pages, checkout flows, account dashboards, and game-specific UI are not represented. Motion design, video behavior, and responsive breakpoints below desktop width are not documented. At Open Sans and Shapiro-55 Middle are present in the source but do not appear in visible interface elements in the supplied images.
