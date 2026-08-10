# How unheard.fm is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/unheard.fm-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with dark geometric background, white display headline, green Spotify login button, and phone mockup showing discovery filters interface](https://pin.fontofweb.com/4557?format=jpg)](https://design.withfudge.com/share/pin-4557)

[Hero section with dark geometric background, white display headline, green Spotify login button, and phone mockup showing discovery filters interface](https://design.withfudge.com/share/pin-4557)

[![Problem-solution narrative with sage green background, pull quote, UNHEARD.FM logo equation, and vintage cassette illustration](https://pin.fontofweb.com/4558?format=jpg)](https://design.withfudge.com/share/pin-4558)

[Problem-solution narrative with sage green background, pull quote, UNHEARD.FM logo equation, and vintage cassette illustration](https://design.withfudge.com/share/pin-4558)

[![Features grid with six icon-accented cards on sage green background showing No Repeats, Precision Filters, and Interactive Listening](https://pin.fontofweb.com/4559?format=jpg)](https://design.withfudge.com/share/pin-4559)

[Features grid with six icon-accented cards on sage green background showing No Repeats, Precision Filters, and Interactive Listening](https://design.withfudge.com/share/pin-4559)

[![FAQ accordion section with sage green background, collapsed and expanded question rows with chevron indicators](https://pin.fontofweb.com/4560?format=jpg)](https://design.withfudge.com/share/pin-4560)

[FAQ accordion section with sage green background, collapsed and expanded question rows with chevron indicators](https://design.withfudge.com/share/pin-4560)

## Overview

Unheard.FM presents a music discovery service for Spotify built around a distinctive visual identity that pairs organic sage tones with sharp geometric darkness. The design communicates trust and creative control through its restrained palette and clear information hierarchy. The hero section immerses visitors in a dark, patterned environment with bold white typography that immediately establishes the service's purpose. Below, the experience transitions to expansive sage green surfaces where feature explanations, process steps, and supporting content unfold with generous breathing room. The overall impression is of a tool that is both sophisticated and approachable—technical enough to promise precision filtering, yet warm enough to invite casual music explorers. The vintage cassette illustration in the solution section adds personality without undermining the modern interface aesthetic.

## Colors

The color system operates across three distinct modes: a dark geometric hero, light content sections, and the dominant sage green narrative surfaces. Every token derives from visible interface elements.

| token | value | use |
|---|---|---|
| canvas | `#F6F6F6` | Light section backgrounds, phone mockup surround, off-white content areas |
| surface | `#9BA88E` | Primary sage green for narrative sections, FAQ background, features grid |
| surface-dark | `#2B2B2B` | Hero background pattern base, dark UI elements in phone mockup |
| surface-darker | `#1A1A1A` | Deepest dark for hero overlay, near-black text on light surfaces |
| ink | `#1A1A1A` | Primary text on sage backgrounds, headings, body copy |
| ink-light | `#F6F6F6` | Hero headline, hero subhead, dark background text |
| ink-muted | `#5C5C5C` | Secondary text, descriptions, placeholder content |
| action | `#9BA88E` | Primary buttons, interactive accents, Spotify login surface |
| action-hover | `#8A9780` | Darker sage for button hover states |
| border | `#7A8770` | FAQ row dividers, accordion borders, subtle separators |
| border-light | `#B5C0A8` | Feature card icon backgrounds, elevated surface tints |

The dark hero creates immediate visual impact through its geometric tessellation in deep forest tones, while the sage green surfaces that dominate the page length evoke freshness and organic discovery. The light canvas sections provide necessary contrast for process demonstrations and device mockups. Text maintains strong contrast throughout: near-black on sage, pure white on dark. The action color draws from the sage family rather than introducing a foreign accent, keeping the palette cohesive and calm.

## Typography

The type system relies on Figtree, a sans-serif family designed by Erik Kennedy, for all text roles. Bootstrapicons supplies the icon font used for UI symbols including chevrons, checkmarks, and feature card icons. Verify licensing for these families before production use. Weights range from Regular to Bold, with Semibold serving section headings and Bold reserved for the hero display and emphasized phrases within body text.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Figtree | 3rem | 700 | 1.1 | -0.02em | Hero headline, all-caps display |
| section-display | Figtree | 2rem | 600 | 1.2 | -0.01em | Section headings, step titles |
| body | Figtree | 1rem | 400 | 1.6 | 0 | Primary paragraphs, descriptions |
| body-small | Figtree | 0.875rem | 400 | 1.5 | 0 | FAQ answers, secondary descriptions |
| label | Figtree | 0.75rem | 500 | 1.4 | 0.02em | Buttons, tags, small labels |
| navigation | Figtree | 0.875rem | 500 | 1 | 0 | Header links, menu items |

The hero display renders in all-caps with tight tracking, creating a monumental presence against the dark geometric background. Section displays use sentence case with slightly relaxed tracking for readability at medium scale. Body text maintains generous line height for comfortable reading across long feature descriptions. The label style serves the Spotify login button and similar compact interactive elements. Bold inline emphasis appears within body text for key phrases like "control" and "truly fresh," using the 700 weight without changing size.

## Layout

The page follows a single-column narrative flow with strategic width constraints and alternating background treatments. The hero section spans full viewport width with a fixed navigation bar overlay. Content below transitions through full-bleed sage sections and contained light panels.

The navigation bar sits at the top of the viewport with the UNHEARD.FM wordmark and hexagonal logo mark on the left, and a horizontal link group plus login button on the right. Navigation links appear as understated text without visible borders or backgrounds.

Hero content occupies the left portion of the viewport, approximately 50-60% width, with the headline stacking in two lines followed by a subparagraph, the primary Spotify login button, and two trust indicators with icon prefixes. The right portion of the hero contains the dark geometric pattern without competing content.

Below the hero, a light canvas section presents a phone mockup on the left and step-by-step explanatory text on the right. This two-column arrangement uses roughly equal width distribution with the device image slightly favoring the left. The phone displays the actual application interface with sage-toned filter controls.

The features section returns to full-bleed sage green with a six-card grid arranged in two rows of three. Each card contains an icon in a rounded square container, a bold title, and a descriptive paragraph. Cards align to a consistent top edge with uniform internal spacing.

The problem-solution section uses a centered, narrow content column with a pull quote offset by a left border, followed by a vertical logo equation and a centered illustration. The FAQ section concludes with a contained accordion list, each row spanning nearly full content width with a chevron toggle indicator on the right.

Section spacing runs generous, with approximately 6rem between major content zones. Internal content gaps within cards and feature grids measure 1.5rem.

## Visual language

The visual language balances geometric precision with organic warmth. The hexagonal logo mark and tessellated hero pattern establish a mathematical, almost crystalline identity that suggests algorithmic sophistication. This contrasts with the muted sage palette and the hand-labeled cassette illustration, which humanize the service and evoke analog music culture.

Iconography appears throughout in rounded square containers with subtle background tints. Feature icons use simple line or filled symbols—slashed circle for "No Repeats," sliders for "Precision Filters," play triangle for "Interactive Listening," list with sparkle for "Unbiased Discovery," recycling arrows for "On-Demand Mixes," and clock for "Real-Time Results." These icons share a consistent visual weight and stroke density.

The phone mockup serves as both demonstration and decorative element, its rounded rectangle form echoing the soft geometry of the icon containers. The device bezel is dark, allowing the sage interface within to read clearly against the light surrounding canvas.

Trust indicators in the hero use small circular icon backgrounds—checkmark for "free to sign-up" and user silhouette for "Trusted by 1.3k+ music lovers"—establishing credibility without visual noise. The Spotify login button incorporates the platform's circular logo mark as an inline suffix, reinforcing the integration.

## Components

### Primary action button

The main call-to-action appears as a solid sage rectangle with rounded corners, containing left-aligned text and a circular Spotify logo mark on the right. The button background uses the action token, with text in the ink color at label size. Padding creates a substantial clickable target. A secondary text line below the button uses muted ink with a small checkmark icon prefix.

### Feature card

Each feature card presents as a text block with an icon prefix. The icon lives in a rounded square container with a light border background. The card title uses section-display size at semibold weight, followed by body-size description text. Cards arrange in a grid with consistent horizontal and vertical gaps. No visible card border or shadow appears; the sage background provides sufficient separation.

### FAQ accordion

Accordion rows stack vertically with thin horizontal borders between items. Each row contains a left-aligned question in body-small size and a right-aligned chevron indicator. The expanded state reveals an answer paragraph below the question, maintaining left alignment with additional vertical padding. The active row shows an upward-pointing chevron; collapsed rows show downward chevrons. Borders use the border token at hairline weight.

### Navigation bar

The navigation bar overlays the hero with a transparent or subtly tinted background. The UNHEARD.FM wordmark appears left with the hexagonal logo mark. Right-aligned links include About, Features, How it Works, FAQs, and a Login button with slightly elevated background treatment. Links use navigation typography without underlines or visible hover states in the static view.

### Step demonstration panel

The process explanation pairs a device mockup with descriptive text. The phone image shows the actual application interface with filter categories, selection chips, and navigation buttons. Adjacent text uses section-display for the step title and body size for the explanation. The composition centers vertically within the light canvas section.

## Responsive behavior

The layout appears optimized for desktop viewing with substantial horizontal space. At narrower viewports, the two-column step demonstration should stack with the phone image above the text. The features grid should collapse from three columns to two, then to a single column on the narrowest screens. Hero headline text will require size reduction to maintain legibility without excessive line breaks. The navigation links should collapse to a menu trigger when horizontal space becomes constrained. Accordion rows maintain full width across all breakpoints but may require increased touch targets for mobile interaction.

## Practical implementation guidance

### Preserve
- The stark contrast between dark hero and sage narrative sections; this alternation defines the page rhythm
- Generous whitespace around content blocks; the calm spacing reinforces the service's confident, unhurried tone
- The single-type-family approach for text; Figtree's range of weights provides sufficient hierarchy without introducing secondary fonts
- The geometric pattern in the hero; this is the most distinctive visual element and primary brand differentiator
- The vintage cassette illustration's centered, isolated presentation; it functions as a memorable brand moment

### Avoid
- Adding saturated accent colors; the muted sage palette is intentionally restrained and additional hues would disrupt the calm atmosphere
- Reducing section spacing; the generous vertical rhythm is essential to the premium feel
- Using the dark hero pattern elsewhere; it should remain exclusive to the top-of-page introduction
- Introducing card shadows or borders in the features grid; the flat treatment maintains the clean aesthetic

### Recommended build order
1. Establish the color tokens and apply canvas, surface, and surface-dark backgrounds to the three major zones
2. Implement Figtree at all defined sizes and weights, beginning with the hero display
3. Build the navigation bar with logo mark and link structure
4. Create the hero section with geometric background, headline stack, and Spotify login button
5. Develop the step demonstration with phone mockup and two-column layout
6. Construct the features grid with icon containers and text blocks
7. Add the problem-solution narrative with pull quote styling
8. Implement the FAQ accordion with expand/collapse behavior
9. Apply responsive breakpoints for grid collapse and navigation adaptation

### Accessibility
- Ensure the white hero text maintains minimum 4.5:1 contrast against the dark geometric background; test across the pattern's varying tones
- Provide visible focus indicators for the Spotify login button and navigation links; the current design shows no explicit focus treatment
- Add aria-expanded attributes to FAQ accordion items and ensure chevron icons are decorative rather than informative
- Consider reducing motion for the geometric hero pattern if it includes any animation; static presentation should remain effective
- Verify that the muted ink color meets contrast requirements for body text size; if not, darken for accessibility compliance

## Scope note

This guide covers the marketing homepage surface of Unheard.FM. The actual application interface visible in the phone mockup, authentication flows, playlist generation screens, and user account areas are not represented in the supplied images. Motion behavior, hover states, and mobile-specific layouts are not documented. Measurements are practical adaptation targets derived from visual inspection.
