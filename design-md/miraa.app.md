# How miraa.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/miraa.app-design)

Last updated: 2026-08-10

## Captured pages

[![AI Materials section with media format icons and Seamless Echoing feature showing iPhone mockup with bilingual subtitle interface on pale green background](https://pin.fontofweb.com/5676?format=jpg)](https://design.withfudge.com/share/pin-5676)

[AI Materials section with media format icons and Seamless Echoing feature showing iPhone mockup with bilingual subtitle interface on pale green background](https://design.withfudge.com/share/pin-5676)

[![Hero section with AI Bilingual Subtitles & Learning headline, App Store and Google Play download badges, and iPhone mockup displaying Japanese-English subtitle learning interface](https://pin.fontofweb.com/5675?format=jpg)](https://design.withfudge.com/share/pin-5675)

[Hero section with AI Bilingual Subtitles & Learning headline, App Store and Google Play download badges, and iPhone mockup displaying Japanese-English subtitle learning interface](https://design.withfudge.com/share/pin-5675)

## Overview

Miraa presents an AI-powered bilingual subtitle and language-learning tool through a calm, inviting interface that prioritizes clarity and warmth. The design language centers on generous whitespace, soft green tonal accents, and heavily rounded typography that feels friendly rather than clinical. The visual system supports two primary narratives: the functional promise of transcribing media into subtitles, and the emotional benefit of seamless, self-paced language echoing. Large iPhone mockups anchor each section, showing the actual product interface with Japanese-English bilingual content. The overall impression is of a polished consumer app—approachable for language learners, credible for tech-savvy users, and visually distinct through its consistent use of pale green surfaces and bold rounded letterforms.

## Colors

The palette is intentionally restrained, built on a near-white green-tinted canvas with black ink for maximum readability and a single muted green accent for hierarchy and warmth.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headlines, button surfaces, strong emphasis |
| muted-ink | #6B705C | Secondary descriptions, captions, subdued labels |
| canvas | #F8F9F0 | Page background, section fills, large feature panels |
| surface | #FFFFFF | Card backgrounds, icon bar fills, elevated elements |
| accent | #7A8B5C | Feature headlines, highlighted phrases, active states |
| accent-light | #A8B896 | Decorative highlights, soft indicators, progress fills |

The canvas color dominates the experience, appearing as the full-bleed background across both hero and feature sections. This pale green-gray creates a distinctive ambient warmth that separates Miraa from generic white-background SaaS sites. Black ink provides sharp contrast for all primary headlines and the download badge surfaces. The muted green accent appears selectively for secondary headlines like "Seamlessly transcribe your media into echoing material" and "Seamless Echoing," creating a clear typographic hierarchy without introducing additional hues. The lighter accent tone appears within the app mockups themselves, suggesting it carries into the product interface for progress indicators and selection states. No dark mode or additional theme is visible in the supplied material.

## Typography

The type system relies on a single family with weight and size variation to establish hierarchy. All visible text uses SF Pro Rounded, giving every headline, label, and description a uniformly soft, approachable character.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Sf Pro Rounded | 4rem | 700 | 1.1 | -0.02em | Main page headline, maximum impact |
| section-display | Sf Pro Rounded | 3rem | 700 | 1.15 | -0.01em | Feature section headlines |
| body-large | Sf Pro Rounded | 1.25rem | 400 | 1.5 | 0 | Hero subheadings, introductory descriptions |
| body | Sf Pro Rounded | 1rem | 400 | 1.6 | 0 | General descriptions, explanatory text |
| label | Sf Pro Rounded | 0.875rem | 500 | 1.4 | 0.01em | Button text, badges, small UI labels |

The hero headline "AI Bilingual Subtitles & Learning" stacks across three lines at a large display size, with the ampersand receiving the same weight treatment as surrounding words for visual consistency. Section headlines like "Seamless Echoing" use a slightly smaller but still prominent display size. Body text maintains comfortable readability with generous line height. The rounded letterforms of SF Pro Rounded eliminate any harshness from the bold weights, making even the heaviest headlines feel approachable rather than aggressive. Verify licensing for these families before production use.

## Layout

The page follows a centered, single-column content flow with generous vertical rhythm. Sections alternate between full-bleed canvas backgrounds and contained content widths, creating a breathing, scroll-driven narrative.

The hero section occupies the full viewport width with the canvas background. Content centers horizontally with a comfortable maximum width, placing the headline and subheading on the left and the iPhone mockup on the right in a balanced asymmetric composition. Below the hero, a media format icon bar sits centered as a discrete content element, followed by the "Seamless Echoing" feature section which returns to full canvas width with the phone mockup now on the left and text on the right.

Section spacing uses substantial vertical padding—approximately 6rem between major content zones—allowing each feature to feel distinct without visual crowding. The iPhone mockups are rendered at large scale, occupying roughly 40-45% of the content width, making the interface details clearly visible and serving as the primary visual anchor in each section.

Content alignment varies deliberately: the hero left-aligns text against the right-positioned device, while the echoing section reverses this relationship. This alternating pattern creates visual interest and guides the eye downward through the page. Internal spacing within text blocks uses approximately 1.5rem between headline and description, with tighter 0.75rem spacing between description and action elements like download badges.

## Visual language

The visual identity of Miraa is defined by three interconnected qualities: warmth through color, softness through typography, and credibility through device presentation.

The persistent pale green canvas creates an immediately recognizable atmosphere. Unlike the stark white of many productivity tools, this tinted background suggests approachability and reduces eye strain, aligning with the app's educational purpose. The green accent carries subtle associations with growth and learning without being overtly thematic.

SF Pro Rounded's consistently rounded terminals appear in every text element, from the massive hero headline to the smallest badge label. This typographic unity eliminates visual fragmentation and reinforces the friendly, consumer-app positioning. The heavy weight used for headlines (equivalent to the "Heavy" source file) provides strong presence without the cold precision of a geometric sans.

The iPhone mockups are presented with realistic proportions, showing actual app interface states rather than abstract illustrations. Within these mockups, the product reveals its own visual system: bilingual text with ruby annotations, color-coded word highlighting in yellow and blue, playback controls with rounded pill buttons, and a progress scrubber with a green fill. These internal details validate the external marketing claims and create continuity between promise and product.

Iconography in the media format bar uses simple, recognizable glyphs for YouTube, audio, video, AAC, and MP3 formats—each with its own brand-appropriate color on a white rounded rectangle. This bar functions as both social proof of format support and a visual palette cleanser between the major sections.

## Components

### Hero section

- **Anatomy**: Left-aligned text block (headline, subheading, download badges) paired with right-positioned iPhone mockup
- **Surface**: Full-bleed canvas background
- **Typography**: Hero display for headline, body-large for subheading
- **Spacing**: Generous internal padding, approximately 4rem vertical within section
- **Composition**: Asymmetric two-column layout with text and device visually balanced

### Download badge group

- **Anatomy**: Two side-by-side badges (App Store, Google Play) with optional APK link below
- **Surface**: Black ink background with white text and logos
- **Typography**: Label token for badge text
- **Shape**: Rounded rectangle with approximately 0.75rem radius
- **Spacing**: Approximately 1rem gap between badges, 0.5rem to APK text
- **Composition**: Horizontal row, left-aligned to text block

### Media format icon bar

- **Anatomy**: Five format icons in a horizontal row (YouTube, audio, video, AAC, MP3)
- **Surface**: White surface background with subtle shadow or border
- **Shape**: Rounded card container, individual icons on rounded squares
- **Spacing**: Even distribution with approximately 2rem between icons
- **Composition**: Centered horizontally, discrete from surrounding sections

### Feature section (Seamless Echoing)

- **Anatomy**: Left-positioned iPhone mockup with right-aligned text block (headline, description)
- **Surface**: Full-bleed canvas background, matching hero
- **Typography**: Section display in accent color for headline, body for description
- **Shape**: Large rounded panel feel through background continuity
- **Spacing**: Matching hero section proportions, reversed asymmetry
- **Composition**: Mirror of hero layout to maintain visual rhythm

### In-app interface elements (visible in mockups)

- **Anatomy**: Video player with bilingual subtitle overlay, playback controls, word highlighting
- **Surface**: Light gray card surfaces within the app, white text areas
- **Typography**: System-like labels for controls, bilingual text with ruby annotations
- **Shape**: Pill buttons for primary actions (Listen, Echo, Play), rounded corners on cards
- **States**: Color-coded word highlighting (yellow, blue) indicating selection or difficulty

## Responsive behavior

The supplied images show a desktop presentation. Based on the visible layout patterns, several responsive adaptations are recommended:

At narrower viewports, the asymmetric two-column layouts should stack vertically. The iPhone mockups, which serve as primary visual anchors, should remain prominent—likely centering above or below their accompanying text blocks. Headline sizes should scale down proportionally, with the hero display reducing to approximately 2.5rem on small screens to prevent excessive line breaks.

The media format icon bar should remain horizontally scrollable or wrap to two rows rather than compressing icon spacing, maintaining touch-friendly tap targets. Download badges should stack vertically on very narrow screens, with each badge maintaining full width for easy mobile interaction.

The canvas background color should persist across all breakpoints, as it defines the brand atmosphere. Internal spacing within sections should reduce by approximately 30-40% on mobile, with section padding compressing to 3-4rem to maintain scroll momentum without excessive whitespace.

## Practical implementation guidance

### Preserve
- The pale green canvas as the dominant background color; it is the most distinctive ambient quality of the experience
- SF Pro Rounded at heavy weights for headlines; the rounded character is essential to the friendly positioning
- Large, realistic device mockups showing actual interface states rather than stylized illustrations
- The alternating left-right layout rhythm between hero and feature sections
- Black download badges with white text for clear, high-contrast action elements

### Avoid
- Introducing additional accent colors beyond the muted green family; the restrained palette is intentional
- Using sharp-cornered or non-rounded typefaces that would break the soft visual consistency
- Crowding the generous whitespace between sections; the breathing room communicates quality
- Replacing device mockups with abstract graphics that obscure the actual product interface

### Recommended build order
1. Establish the canvas background color and base typography scale with SF Pro Rounded
2. Build the hero section with headline, subheading, and download badge group
3. Add the first iPhone mockup with appropriate positioning and scale
4. Create the media format icon bar as a centered, discrete component
5. Build the feature section with reversed layout asymmetry
6. Refine spacing and responsive stacking behavior across breakpoints

### Accessibility
- Ensure the muted green accent (#7A8B5C) against canvas (#F8F9F0) meets minimum contrast ratios for large text; the current pairing may need darkening for WCAG AA compliance on smaller sizes
- Provide text alternatives for all format icons in the media bar
- Maintain visible focus indicators on download badges that respect the rounded shape
- Consider reduced-motion preferences for any scroll-triggered animations of the device mockups
- Ensure bilingual text in mockups is not presented as images alone; actual text content should be available to assistive technologies

## Scope note

This guide covers the marketing page surface visible in the supplied images, including the hero section, media format support bar, and feature showcase with device mockups. Mobile breakpoints, additional interior pages, in-app interface states beyond those visible, motion design, form interactions, and dark mode variants are not represented in the available material. Measurements are practical adaptation targets.
