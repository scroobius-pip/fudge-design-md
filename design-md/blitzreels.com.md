# How blitzreels.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/blitzreels.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dark footer with multi-column navigation, social icons, and language toggle with green accent border](https://pin.fontofweb.com/5268?format=jpg)](https://design.withfudge.com/share/pin-5268)

[Dark footer with multi-column navigation, social icons, and language toggle with green accent border](https://design.withfudge.com/share/pin-5268)

[![Comparison section contrasting negative and positive feature lists with green checkmarks and dark cards](https://pin.fontofweb.com/5267?format=jpg)](https://design.withfudge.com/share/pin-5267)

[Comparison section contrasting negative and positive feature lists with green checkmarks and dark cards](https://design.withfudge.com/share/pin-5267)

[![Hero section with large white headline, green primary button, and three video preview cards showing creator content](https://pin.fontofweb.com/5266?format=jpg)](https://design.withfudge.com/share/pin-5266)

[Hero section with large white headline, green primary button, and three video preview cards showing creator content](https://design.withfudge.com/share/pin-5266)

## Overview

BlitzReels presents a dark, cinematic interface built for video creators who want to produce short-form content without technical barriers. The visual system rests on three pillars: an almost-black canvas that lets video content dominate attention, electric green accents that signal action and success, and clean geometric typography that communicates speed and modernity. The homepage structure moves visitors from a bold value proposition through social proof in the form of creator video previews, then into a persuasive comparison that contrasts traditional editing pain points with BlitzReels' streamlined workflow. Every surface reinforces the product's promise of professional results without the learning curve—dark backgrounds evoke the editing bay, while the bright green action elements feel like a record button ready to press.

## Colors

The color system is intentionally restrained, using darkness as a canvas and a single vibrant green as the emotional and functional accent. This creates high contrast for readability while establishing a tech-forward, creator-tool identity.

| token | value | use |
|---|---|---|
| canvas | #0A0A0A | Primary page background, deepest layer |
| surface | #111111 | Cards, footer sections, secondary containers |
| surface-elevated | #1A1A1A | Highlighted cards, positive comparison states |
| action | #00E676 | Primary buttons, success indicators, active states, logo accent |
| action-hover | #00C853 | Button hover states, interactive emphasis |
| ink | #FFFFFF | Headlines, primary text, icons on dark |
| muted-ink | #9E9E9E | Body text, secondary labels, footer links, inactive states |
| border | #2A2A2A | Card outlines, dividers, subtle separation |
| error | #EF5350 | Negative indicators, cross marks, problem states |
| success | #00E676 | Check marks, positive confirmation, completed states |

The dark hierarchy runs from canvas through surface to surface-elevated, with each step lighter to create depth without breaking the monochrome mood. The green action color appears sparingly and always carries meaning: it is the color of doing, of recording, of moving forward. White ink is reserved for headlines and primary interactive elements, while muted-ink handles explanatory text and navigation. The error red appears only in the comparison section to mark the "hard way" path, creating immediate visual opposition to the green "BlitzReels way."

## Typography

The type system uses a single family, Onest, designed by Andrey Kudryavtsev and distributed by Dmitri Voloshin Andrey Kudryavtsev. Verify licensing for this family before production use. Onest contributes a geometric, contemporary sans-serif character with open apertures and clean lines that read well at display sizes and remain legible in dense UI contexts.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Onest | 3.5rem | 700 | 1.1 | -0.02em | Homepage headline, major value propositions |
| section-display | Onest | 2rem | 700 | 1.2 | -0.01em | Section headers, comparison titles |
| body-large | Onest | 1.25rem | 400 | 1.5 | 0 | Subheadlines, introductory paragraphs |
| body | Onest | 1rem | 400 | 1.6 | 0 | General reading text, descriptions |
| label | Onest | 0.75rem | 500 | 1.4 | 0.05em | Buttons, badges, uppercase labels |
| navigation | Onest | 0.875rem | 500 | 1.4 | 0 | Header links, footer categories |

The weight contrast between 400 Regular and 700 Bold provides sufficient hierarchy without introducing additional font files. Display sizes use negative tracking for a tighter, more impactful presence, while body text loosens up for comfortable reading. The label style carries slight positive tracking and medium weight to feel intentional and button-appropriate at small sizes.

## Layout

The page structure follows a centered, single-column flow with contained width for text content and full-bleed dark backgrounds. The hero section anchors the viewport with a centered text block and prominent call-to-action, followed by a three-column grid of video preview cards that breaks the vertical rhythm with horizontal visual interest.

Content containers appear to max out around 1200px, with generous internal padding that keeps text from crowding edges. The comparison section uses a two-column layout at desktop widths, placing the negative and positive paths side by side for immediate visual contrast. The footer expands into a multi-column link grid, organizing navigation by product category, tool type, company information, and legal pages.

Vertical spacing between major sections runs large—approximately 6rem—to let each message land with breathing room. Within sections, content gaps of 1.5rem separate related elements. Cards maintain consistent internal padding of 1.5rem, creating a predictable rhythm across the interface.

The header remains minimal: logo left, navigation center, utility controls and primary action right. This three-zone pattern keeps wayfinding accessible without competing with the hero message.

## Visual language

The aesthetic communicates professional creative tools through darkness and precision. Rounded corners appear on cards and buttons but stay restrained—0.75rem for cards, 0.5rem for buttons—avoiding the playful softness of larger radii. The overall impression is closer to a professional camera interface or editing timeline than a consumer social app.

Photography and video thumbnails dominate the middle of the page, showing real creators in authentic settings. These images carry their own color temperature—warm skin tones, studio lighting, environmental context—creating natural contrast against the cool, neutral interface. The BlitzReels watermark logo appears as a subtle overlay on video previews, establishing brand presence without obscuring content.

Iconography follows a simple line style: check circles, cross marks, social platform logos, and utility icons all share the same stroke weight and geometric clarity. The green checkmark against dark green circle background in the comparison section creates a satisfying filled-icon moment that draws the eye toward the preferred path.

Shadows are minimal or absent; depth comes from background color layering and border definition rather than elevation effects. This flatness reinforces the interface's speed and modernity.

## Components

### Primary button

- **Anatomy**: Text label with optional arrow icon, contained within a solid green rectangle
- **Surface**: Solid action green background (#00E676) with canvas-colored text
- **Typography**: label token, medium weight, with slight letter spacing
- **Shape**: 0.5rem border radius, creating a pill-like but not fully rounded rectangle
- **Spacing**: Generous vertical padding (approximately 0.875rem) with 1.5rem horizontal padding
- **Composition**: Centered text, icon positioned to the right of label with small gap
- **Variants**: The hero button includes a right-arrow icon suggesting forward motion; footer language toggle uses the same shape with icon-only content

### Video preview card

- **Anatomy**: Vertical rectangle containing background image/video still, with BlitzReels logo watermark in upper portion and optional interface chrome at bottom
- **Surface**: Dark surface background with rounded overflow; image fills container
- **Typography**: Watermark uses small white text with green accent mark; bottom chrome uses label-sized text for controls
- **Shape**: 0.75rem border radius with overflow hidden
- **Spacing**: Tight internal layout with image edge-to-edge
- **Composition**: Three cards appear in equal-width horizontal row with consistent gaps
- **States**: Bottom chrome shows active recording state with green "Record" button and dropdown selector

### Comparison card

- **Anatomy**: Header with icon and title, followed by bulleted list of features
- **Surface**: Negative card uses surface background with border; positive card uses surface-elevated with action-colored border
- **Typography**: Section-display for titles, body for list items
- **Shape**: 0.75rem border radius
- **Spacing**: 1.5rem internal padding with comfortable list item spacing
- **Composition**: Icon left-aligned with title, list items indented with icon markers
- **Variants**: Negative variant shows red cross icons; positive variant shows green check circles with filled backgrounds

### Footer navigation

- **Anatomy**: Logo mark, multi-column link grid, social icon row, bottom bar with copyright and utility controls
- **Surface**: Canvas-colored background, continuous with page
- **Typography**: Category headers use body weight at standard size with white ink; links use slightly smaller body text with muted-ink color
- **Shape**: No containing border; full-width section
- **Spacing**: Generous top padding, structured column gaps of approximately 3-4rem
- **Composition**: Five columns for link categories, social row below, bottom bar spans full width with flex separation
- **Elements**: Social icons (Twitter/X, TikTok, Instagram, LinkedIn, Facebook) appear as simple monochrome glyphs; language selector shows flag icon with "English" label; theme toggle presents as three-icon segmented control with green active indicator

## Responsive behavior

The three-column video preview grid should collapse to a single column on narrow viewports, with cards stacking vertically and maintaining aspect ratio. The comparison section's side-by-side layout should sequence vertically on mobile, placing the positive "BlitzReels Way" card below the negative alternative to end on the preferred message. Footer columns should reflow into two-column or single-column arrangements, preserving category grouping. The hero headline should scale down to section-display size on mobile while maintaining line breaks for readability. Navigation should collapse to a hamburger menu or simplified icon set when horizontal space is constrained.

## Practical implementation guidance

### Preserve
- The near-black canvas as the dominant background; any lighter shift will break the cinematic mood
- The single green accent color for all interactive and positive states; do not introduce secondary accent colors
- The weight contrast between 400 and 700 as the sole typographic hierarchy mechanism
- The generous section spacing that lets each message breathe
- The rounded-but-not-pill card corners that balance friendliness with professionalism

### Avoid
- Adding gradient backgrounds or glassmorphism effects; the flat darkness is intentional
- Using the action green for large text blocks or backgrounds; it is strictly for interactive elements and indicators
- Introducing serif fonts or decorative type that conflicts with Onest's geometric clarity
- Crowding the video preview cards with additional chrome or borders
- Making the footer lighter than the page background; it should sink, not float

### Recommended build order
1. Establish the canvas background and install Onest with complete weight coverage
2. Implement the hero section with headline, subheadline, and primary button
3. Build the video preview card component with image handling and responsive grid
4. Create the comparison card pair with icon systems and border variants
5. Construct the footer with multi-column link layout and utility controls
6. Add interactive states: button hover, focus rings, and active navigation

### Accessibility
- Ensure the green action color meets contrast requirements against the dark canvas; the bright #00E676 should satisfy WCAG AA for large text and UI components
- Provide visible focus indicators that do not rely solely on color change
- Add aria-labels to icon-only buttons in the footer utility controls
- Maintain logical heading hierarchy from hero-display through section-display to body
- Consider a reduced-motion preference for any video autoplay or interface animations

## Scope note

This guide covers the BlitzReels homepage including hero, social proof, comparison, and footer surfaces. Pricing pages, dashboard interfaces, and authenticated tool workflows are not represented. Measurements are practical adaptation targets derived from visual inspection. Motion behavior, mobile breakpoints, and form validation states are not documented.
