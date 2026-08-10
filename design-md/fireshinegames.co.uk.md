# How fireshinegames.co.uk is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/fireshinegames.co.uk-design)

Last updated: 2026-08-10

## Captured pages

[![Bright yellow game pitch section with bold condensed uppercase typography, halftone dot pattern, and anime character illustration for Denshattack!](https://pin.fontofweb.com/4898?format=jpg)](https://design.withfudge.com/share/pin-4898)

[Bright yellow game pitch section with bold condensed uppercase typography, halftone dot pattern, and anime character illustration for Denshattack!](https://design.withfudge.com/share/pin-4898)

[![Screenshots gallery grid on deep blue painterly background with white condensed heading and ten game image thumbnails in rounded white frames](https://pin.fontofweb.com/4897?format=jpg)](https://design.withfudge.com/share/pin-4897)

[Screenshots gallery grid on deep blue painterly background with white condensed heading and ten game image thumbnails in rounded white frames](https://design.withfudge.com/share/pin-4897)

[![Three vivid red platform wishlist buttons with white icons and condensed uppercase text on green dotted background](https://pin.fontofweb.com/4896?format=jpg)](https://design.withfudge.com/share/pin-4896)

[Three vivid red platform wishlist buttons with white icons and condensed uppercase text on green dotted background](https://design.withfudge.com/share/pin-4896)

[![Dark footer bar with Fireshine Games and Undercoders logos, copyright text, and red Press Kit button](https://pin.fontofweb.com/4895?format=jpg)](https://design.withfudge.com/share/pin-4895)

[Dark footer bar with Fireshine Games and Undercoders logos, copyright text, and red Press Kit button](https://design.withfudge.com/share/pin-4895)

## Overview

Fireshine Games presents a visually explosive, anime-influenced design language built for game marketing. The system trades corporate restraint for maximalist energy: saturated color fields, condensed bold typography, and full-bleed illustration that bleeds across section boundaries. Every page surface behaves like a poster or magazine spread rather than a conventional web layout.

The design organizes content into distinct horizontal bands, each with its own dominant background color. A bright yellow canvas carries the primary game pitch, deep blue hosts screenshot galleries, green supports platform calls-to-action, and near-black anchors the footer. This banded architecture creates rhythm and allows each section to feel like a self-contained visual statement. Typography reinforces this poster-like quality through aggressive use of uppercase, tight line heights, and a condensed display face that packs headlines into dense, impactful blocks.

The visual system prioritizes character art and game imagery over UI chrome. Navigation and secondary actions recede; the game content and its emotional tone dominate. This is a design built for fandom and pre-release excitement, where every pixel serves the goal of making the game feel unmissable.

## Colors

The palette is intentionally small and high-contrast, derived from the game's own art direction rather than a neutral corporate system. Each color serves a specific section or component role.

| token | value | use |
|---|---|---|
| action | #FF0040 | Primary buttons, wishlist CTAs, Press Kit button |
| ink | #000000 | Primary text on light backgrounds, bullet markers |
| canvas | #FFE600 | Hero pitch section background, key messaging band |
| surface | #0A0000 | Footer background, deep contrast areas |
| surface-blue | #0066FF | Screenshots gallery section background |
| surface-green | #00C878 | Platform buttons section background |
| text-inverse | #FFFFFF | All text on dark or colored backgrounds, button labels, screenshot frame borders |

The color logic follows a theatrical stage model: each section is a different colored spotlight. Yellow canvas carries the emotional pitch with black ink text for maximum readability. Blue surface provides cool contrast for the screenshot grid, making game imagery pop. Green surface creates a fresh transition into platform actions. The near-black surface grounds the footer with legal and corporate information. Red action color appears only for interactive targets, creating a consistent "click here" signal across all contexts. White text-inverse unifies all non-light surfaces.

No gradients or shadows are visible in the interface layer; color transitions happen through hard section breaks. Photography and illustration colors are drawn from the game art itself and should not be treated as UI tokens.

## Typography

The type system relies on three families with distinct roles: a condensed sans for display and labels, a humanist sans for body copy, and a geometric sans for navigation and UI microcopy. The supplied font set also includes Fabrands 400, which serves as the brand icon font for social and platform logos.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Barlow Condensed | 3rem | 700 | 1 | 0.02em | Main game pitch headlines, section titles |
| section-display | Barlow Condensed | 2.5rem | 700 | 1.1 | 0.01em | Screenshots heading, secondary section titles |
| body | Open Sans | 1rem | 400 | 1.6 | 0 | Descriptive paragraphs, metadata |
| label | Barlow Condensed | 1.25rem | 600 | 1.2 | 0.04em | Button text, feature list items, platform labels |
| navigation | Montserrat | 0.875rem | 400 | 1.4 | 0.02em | Footer legal text, secondary links |

Barlow Condensed drives the visual personality. Its narrow proportions allow long uppercase headlines to fill horizontal space without wrapping prematurely, critical for the poster-like composition. The 700 weight is used for all display settings; no lighter weights appear in headlines. Open Sans provides readable body copy at the 1rem base, with generous 1.6 line height for longer descriptive text. Montserrat handles the fine print and navigation with its cleaner, more neutral character. Fabrands 400 supplies the platform and social brand marks rendered as icon glyphs, including the Steam, PlayStation, and Xbox symbols on the wishlist buttons.

All display typography is set in uppercase. Tracking is slightly opened on labels to compensate for the condensed form at smaller sizes. The 4px relative unit governs all type sizes: 3rem equals 48px (12 units), 2.5rem equals 40px (10 units), 1.25rem equals 20px (5 units), 1rem equals 16px (4 units), and 0.875rem equals 14px (3.5 units rounded to nearest whole unit at 14px, or strictly 3 units at 12px—use 0.75rem for 12px if tighter navigation is desired).

Montserrat is designed by Julieta Ulanovsky. Open Sans is designed by the Monotype Design Team. Verify licensing for these families before production use.

## Layout

The page follows a strict horizontal banding system with full-bleed sections. Each band spans the viewport width and carries a single background color. Content within bands is constrained to a centered maximum width, creating consistent margins on large screens while allowing backgrounds to extend to the edges.

The hero pitch band (yellow canvas) uses an asymmetric two-column composition: text content occupies the left portion while character illustration bleeds into the right edge, partially overlapping the text area. This overlap is intentional and creates depth. The text block itself uses a tight stack with minimal vertical spacing between elements.

The screenshots band (blue surface) centers its heading and arranges thumbnails in a responsive grid. Ten thumbnails appear in two rows of five on desktop, each with consistent internal spacing and white borders that create a filmstrip or contact-sheet aesthetic.

The platform band (green surface) uses a three-column layout with equal-width cards. Each card contains a platform icon, directional arrow, and wishlist call-to-action.

The footer band (surface) splits into two zones: logo and corporate identity on the left, legal text and action button on the right. The legal text aligns to the right edge while the Press Kit button floats at the far right.

Vertical rhythm is established through section spacing of 4rem (64px) internal padding on each band. Component spacing of 1.5rem (24px) separates related elements within a band. Tight spacing of 0.5rem (8px) handles inline relationships like bullet markers and their text.

No sidebar navigation, no sticky header, and no card-based content architecture are visible. The layout is deliberately flat and scroll-driven, prioritizing the sequential reveal of each colorful section.

## Visual language

The aesthetic fuses Japanese anime poster design with Western indie game marketing. Key visual traits include:

- **Halftone dot patterns**: The yellow hero section features a white dot halftone gradient that fades from dense at the edges to sparse toward the center, creating a vintage print texture behind the flat color.
- **Hard color blocking**: No subtle transitions between sections. Each band is a solid, unmodulated color field.
- **Illustration bleed**: Characters and decorative elements break their containers, extending to or beyond section edges. The yellow section's character overlaps the right margin; the blue section's character portraits frame the screenshot grid from both sides.
- **White frames as structure**: Screenshot thumbnails use thick white borders not merely as decoration but as compositional grid lines that unify disparate game imagery.
- **Brush and hand-drawn accents**: Small arrow icons and bullet markers have a rough, painted quality that contrasts with the clean geometry of the typography.

The overall effect is energetic and slightly chaotic in a controlled way—like a shonen manga page or a gig poster. The design does not aim for corporate polish but for emotional immediacy and cultural authenticity to the game's anime aesthetic.

## Components

### Platform Wishlist Button

Three identical buttons for Steam, PlayStation, and Xbox platforms.

- **Anatomy**: Platform icon (white, centered top), rightward arrow icon (white, hand-drawn style), "WISHLIST NOW" label (white, uppercase, condensed)
- **Surface**: Solid action red (#FF0040) background with subtle texture or noise visible at close inspection
- **Typography**: label token, white text-inverse
- **Shape**: Rounded rectangle with 0.25rem border radius, generous internal padding creating a substantial click target
- **Spacing**: Equal width within a three-column row, separated by component spacing
- **Composition**: Icon and arrow sit above the text, centered horizontally within each button

### Screenshot Thumbnail

Grid cell containing a game screenshot.

- **Anatomy**: Game image, white border frame, no overlay or caption
- **Surface**: Image content visible through frame; white border provides separation from blue background
- **Shape**: 0.75rem border radius on outer corners; border appears as 4px solid white
- **Composition**: Ten thumbnails in 5×2 grid on desktop, equal spacing between cells

### Footer Bar

Full-width dark footer containing corporate identity and legal information.

- **Anatomy**: Fireshine Games logo (stylized "fs" mark plus wordmark), Undercoders logo (heart-shaped game controller icon), copyright text, Press Kit button, Fireshine Website link
- **Surface**: surface color (#0A0000) background
- **Typography**: navigation token for legal text, label token for Press Kit button
- **Shape**: No border radius; full-bleed horizontal band
- **Composition**: Logos and primary link left-aligned; legal text and button right-aligned in a stacked arrangement

### Feature List

Bulleted game features in the hero section.

- **Anatomy**: Hand-drawn circular bullet markers, uppercase condensed text
- **Typography**: label token, ink color
- **Spacing**: Tight vertical spacing between items, consistent left indentation

## Responsive behavior

The banded layout naturally adapts to narrower viewports through vertical stacking. On reduced widths, the hero section's two-column composition should collapse to a single column with the character illustration moving below or above the text block. The screenshot grid should reflow from five columns to fewer, maintaining the white frame borders at reduced size. The three platform buttons should stack vertically with full-width treatment.

Text scaling should preserve the poster-like quality: hero-display may reduce to section-display size on small screens, but the uppercase condensed treatment must remain. The halftone dot pattern in the hero section should scale or crop rather than distort, maintaining its edge-density effect.

Touch targets for platform buttons must remain generous; the current substantial padding supports this. No hover-dependent information is visible in the supplied images, so all content should remain accessible without pointer interaction.

## Practical implementation guidance

### Preserve
- The hard color banding and full-bleed section backgrounds
- Uppercase setting for all Barlow Condensed display text
- White frame borders on screenshot thumbnails
- Character illustration bleed and overlap effects
- The limited palette: only action red, canvas yellow, surface blue, surface green, and near-black surface plus white and black text
- Hand-drawn quality of small icons and bullets

### Avoid
- Subtle gradients or shadows between sections
- Neutral gray backgrounds or conventional card elevations
- Rounded corners on the footer or full-width bands
- Mixed-case headlines or non-condensed display fonts
- Generic button styling that loses the poster-like urgency

### Recommended Build Order
1. Establish the horizontal band structure with full-bleed backgrounds and centered content containers
2. Implement Barlow Condensed at hero-display and label sizes with uppercase transformation
3. Add the yellow hero section with halftone dot pattern and two-column composition
4. Build the screenshot grid with white-bordered thumbnails on blue surface
5. Create the platform button row with red action backgrounds
6. Finish with the dark footer and logo lockups

### Accessibility
- Ensure sufficient contrast between ink text and canvas yellow; the combination is bold but verify WCAG compliance for body-sized text
- Provide text alternatives for all platform icons and the directional arrows
- Maintain keyboard focus visibility on the red action buttons; the high-contrast red/white pairing helps but add visible focus rings
- Consider reduced-motion preferences for any scroll-triggered section reveals
- Test that the halftone dot pattern does not interfere with text readability at any viewport size

## Scope note

This guide covers the Denshattack! game page surface as visible in the supplied images: hero pitch, screenshots gallery, platform wishlist section, and footer. Navigation header, mobile layouts, additional pages, hover states, and motion effects are not represented. Measurements are practical adaptation targets based on visual estimation from the provided images.
