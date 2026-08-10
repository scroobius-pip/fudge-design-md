# How offscript.sh is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/offscript.sh-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with oversized blue 'Offscript' wordmark on warm cream background, showing the site's maximalist display typography and minimal navigation](https://pin.fontofweb.com/4730?format=jpg)](https://design.withfudge.com/share/pin-4730)

[Homepage hero with oversized blue 'Offscript' wordmark on warm cream background, showing the site's maximalist display typography and minimal navigation](https://design.withfudge.com/share/pin-4730)

[![Story page with portrait photo, handwritten blue script heading, and narrative body text on cream background](https://pin.fontofweb.com/4729?format=jpg)](https://design.withfudge.com/share/pin-4729)

[Story page with portrait photo, handwritten blue script heading, and narrative body text on cream background](https://design.withfudge.com/share/pin-4729)

[![Contact page with handwritten greeting, email link, interactive whiteboard embed, and social icons in footer](https://pin.fontofweb.com/4731?format=jpg)](https://design.withfudge.com/share/pin-4731)

[Contact page with handwritten greeting, email link, interactive whiteboard embed, and social icons in footer](https://design.withfudge.com/share/pin-4731)

## Overview

Offscript is a personal studio website for an indie software builder, built around a striking tension between mechanical precision and human warmth. The visual system centers on a single electric blue accent against a warm cream canvas, letting typography carry almost all of the expressive weight. The homepage presents an enormous geometric wordmark that dominates the viewport, while interior pages shift to a more intimate mode with handwritten script headings and conversational body text. The overall impression is of someone who codes with technical rigor but communicates with personal authenticity—the design itself goes "off script" from typical developer portfolios by embracing idiosyncrasy rather than minimalism for its own sake.

The site structure is intentionally simple: a persistent top navigation, a central content area that adapts to page purpose, and minimal footer elements. The homepage is essentially a single typographic statement. The story page adds a portrait photograph and narrative text. The contact page introduces an interactive whiteboard embed as a functional conversation starter. Throughout, the design maintains generous whitespace and a restrained two-color palette that keeps attention on the words and the work.

## Colors

The color system is deliberately austere: one warm neutral ground, one electric blue for all interactive and expressive moments, and near-black for readable text. This constraint creates strong brand recognition and ensures the typographic contrasts remain the primary visual event.

| token | value | use |
|---|---|---|
| action | #1a53ff | Primary buttons, active navigation states, links, script headings, wordmark, social icons, and all interactive accents |
| ink | #1a1a1a | Body text, inactive navigation, and primary readable content |
| muted-ink | #4a4a4a | Secondary text and less prominent content when hierarchy requires subtle differentiation |
| canvas | #f5f0e8 | Page background, creating warm, approachable atmosphere across all pages |
| surface | #ffffff | Card backgrounds, whiteboard embed, and any elevated panels needing contrast against canvas |
| action-hover | #0040e6 | Darker blue for hover states on interactive elements |

The warm cream canvas (#f5f0e8) is the dominant surface, appearing behind all content and giving the site its distinctive personality compared to cooler gray or pure white portfolios. The electric blue (#1a53ff) functions as the sole chromatic voice: it appears in the massive homepage wordmark, in handwritten script headings on interior pages, in navigation active states, in text links, and in functional icons. This blue has enough saturation to feel energetic and youthful without tipping into playful or unprofessional territory. The near-black ink provides comfortable reading contrast without the harshness of pure black against the warm ground.

No dark mode is visible in the supplied pages. All photography appears in natural color without color grading toward the brand palette.

## Typography

Three font families create a clear hierarchy: Accelerator for maximum-impact display, Homemade Apple for personal script moments, and Inter for all functional text. The contrast between the geometric, almost industrial Accelerator and the loose, hand-drawn Homemade Apple is the site's central typographic drama.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Accelerator | 8rem | 400 | 0.9 | -0.02em | Homepage wordmark and oversized display statements |
| section-display | Homemade Apple | 2rem | 400 | 1.4 | 0 | Page headings, greetings, and personal introductions |
| body | Inter | 1rem | 400 | 1.6 | 0 | Paragraph text and general reading content |
| body-medium | Inter | 1rem | 500 | 1.6 | 0 | Emphasized body text and link contexts |
| navigation | Inter | 0.875rem | 500 | 1 | 0.05em | Top navigation labels, uppercase treatment |
| label | Inter | 0.75rem | 500 | 1 | 0.05em | Small functional labels and metadata |

Accelerator appears only at display scale, where its geometric construction and unusual letterforms—particularly the distinctive 'f' with its horizontal crossbar extension—create immediate visual identity. The font is used at a scale where individual characters become architectural elements, filling significant portions of the viewport.

Homemade Apple provides the human counterpoint. Its irregular baseline, varying stroke weight, and connected letterforms mimic actual handwriting. It is used for greetings ("Hey there!", "Hi! I'm Avery...") and section introductions, never for long passages where readability would suffer.

Inter handles all functional typography with clarity. The medium weight (500) is used for navigation and labels to maintain crispness at small sizes, while regular weight serves longer reading passages. Navigation labels appear in uppercase with slight positive tracking for a technical, measured feel that contrasts with the organic script.

Accelerator is designed by Frongile and available via FontStruct. Homemade Apple is an open-source script font. Inter is designed by Rasmus Andersson. Verify licensing for these families before production use.

## Layout

The layout follows a centered, narrow-column approach that keeps content readable and focused. The maximum content width is approximately 42rem, creating comfortable line lengths for body text while allowing display typography to break out of the container through scale rather than width.

The page structure is consistent across views: a top navigation bar centered or slightly offset at the top, followed by page-specific content, with minimal footer elements appearing only on the contact page. The navigation sits roughly 1.5rem from the top edge with horizontal spacing of about 2rem between items.

Vertical rhythm uses a base of 4px (0.25rem), with section spacing at 4rem creating clear separation between content groups. The homepage hero centers its wordmark vertically in the available viewport space below navigation. Interior pages begin content closer to the top, with the story page placing a portrait image before text and the contact page leading with a script greeting followed by body text and an embedded whiteboard.

The whiteboard embed on the contact page uses a 16:10 aspect ratio container with rounded corners, sitting centered in the content column. Social icons appear in a horizontal row at the bottom of the contact page, spaced evenly with approximately 2rem between icons.

No sidebar, grid system, or complex layout machinery is visible. The design relies on single-column flow with typographic scale and spacing to create hierarchy.

## Visual language

The visual language balances two opposing temperaments: the precision of engineered typography and the warmth of personal handwriting. This duality reflects the site's subject—a software engineer with a non-traditional path—without needing explicit illustration.

The cream background establishes an approachable, slightly nostalgic atmosphere that distinguishes the site from stark white technical portfolios. Against this warm ground, the electric blue elements feel alive and intentional rather than corporate.

Imagery appears sparingly. The story page includes one portrait photograph with rounded corners, presented at moderate size without dramatic cropping or effects. The photograph shows natural color and environment, not treated to match the brand palette. The whiteboard embed on the contact page functions as both tool and visual element, its blank white surface creating a moment of negative space that invites interaction.

No gradients, shadows, or dimensional effects are used. The design is flat and direct, with confidence in its typographic and color choices. Rounded corners appear on buttons (full pill shape), navigation active states, images, and the whiteboard container—softening the geometric precision without becoming playful.

The partial blue circle visible at the bottom-right corner of the homepage suggests decorative graphic elements may extend beyond the visible viewport, hinting at a larger visual system of simple geometric shapes.

## Components

### Navigation

The top navigation consists of a logo mark and three text links: Story, Work, and Contact. The logo "Go Offscript" uses Accelerator in blue, with "Go" at normal weight and "Offscript" in the same family, creating a lockup that reads as a single brand element.

- Anatomy: Logo left of center, navigation links to the right, all in one horizontal row
- Surface: Transparent background over the cream canvas
- Typography: Navigation token, uppercase, medium weight
- Spacing: Approximately 2rem between navigation items
- Variants: Active state uses a filled blue pill background with white text; inactive state shows blue text on transparent background

### Primary button

Used for the primary call-to-action in navigation contexts.

- Anatomy: Text label within a pill-shaped container
- Surface: action background with surface text
- Typography: Navigation token
- Shape: Full pill border radius (9999px)
- Spacing: 0.75rem vertical padding, 1.5rem horizontal padding

### Script heading

The distinctive content headings using Homemade Apple.

- Anatomy: One or two lines of handwritten text, left-aligned
- Typography: Section-display token
- Color: action blue
- Spacing: 2rem below heading before body content begins
- Composition: Often begins with a greeting or personal introduction, setting conversational tone

### Body content block

Standard paragraph groups for narrative and informational text.

- Anatomy: Sequential paragraphs with consistent spacing
- Typography: Body token
- Color: ink
- Spacing: 1.5rem between paragraphs
- Composition: Left-aligned, maximum width constrained for readability

### Portrait image

The story page's personal photograph.

- Anatomy: Single photograph in rounded container
- Shape: 0.75rem border radius
- Spacing: Centered in content column, 2rem margin below before heading text
- Composition: Square or near-square aspect ratio, showing subject in environmental context

### Whiteboard embed

Interactive functional element on the contact page.

- Anatomy: Rectangular container with toolbar icons in top-right corner
- Surface: surface white background
- Shape: 0.75rem border radius
- Spacing: Fills content column width, generous vertical margin above and below
- Composition: 16:10 aspect ratio, refresh and download icons positioned top-right

### Social icon row

Footer contact links on the contact page.

- Anatomy: Horizontal row of three icon buttons (email, X/Twitter, LinkedIn)
- Color: action blue icons
- Spacing: Evenly spaced with approximately 2rem between icons
- Composition: Centered below whiteboard embed

## Responsive behavior

The supplied images show desktop layouts. Based on the visual system, several responsive adaptations are recommended:

At viewports below approximately 768px, the hero wordmark should scale down proportionally, likely to 4rem or 3rem to prevent horizontal overflow. The navigation may need to collapse to a horizontal scroll or hamburger menu given the centered layout and limited horizontal space.

The content column width should remain comfortable for reading, potentially expanding to near-full width with 1.5rem side margins on small screens. Portrait images should remain centered and may expand to fill available width.

The whiteboard embed should maintain its aspect ratio while scaling to fit the narrower viewport, with touch targets for its toolbar icons increased to minimum 44px.

Script headings in Homemade Apple remain legible down to smaller sizes, though line-height may need slight increase to prevent ascender-descender collisions at reduced scale.

## Practical implementation guidance

### Preserve
- The warm cream canvas as the universal background—this is the site's most distinctive atmospheric choice
- The extreme scale contrast between Accelerator display type and Inter body text
- The handwritten script in blue for personal greetings and section introductions
- The single-accent color discipline: electric blue for everything interactive and expressive
- The pill-shaped active navigation state as a clear, consistent indicator
- The generous whitespace that lets typography breathe

### Avoid
- Adding secondary accent colors that would dilute the blue's impact
- Using Homemade Apple for long passages—reserve it for short, personal statements
- Pure white backgrounds that would lose the warm, approachable quality
- Shadows, gradients, or dimensional effects that contradict the flat, direct aesthetic
- Tight letter-spacing on Accelerator at display sizes—the slight openness is part of its character

### Recommended build order
1. Establish the cream canvas background and load all three font families
2. Implement the navigation with logo lockup and active/inactive pill states
3. Build the homepage hero with responsive Accelerator wordmark scaling
4. Create the script heading component with Homemade Apple
5. Implement the content column constraint and body text styles
6. Add the whiteboard embed container with proper aspect ratio and toolbar positioning
7. Build the social icon row and footer area
8. Test responsive behavior at key breakpoints, especially hero scale and navigation layout

### Accessibility
- Ensure the electric blue (#1a53ff) on cream (#f5f0e8) meets WCAG AA contrast ratios for all text sizes; the combination appears to provide approximately 4.5:1 contrast for normal text
- Provide visible focus indicators for all interactive elements, using the action color with an outline offset
- The whiteboard embed requires keyboard accessibility for its refresh and download functions
- Consider offering a reduced-motion option if any page transitions or animations are added
- Ensure Homemade Apple headings have sufficient size for readability; the script style may challenge users with dyslexia, so keep accompanying body text clear and direct

## Scope note

This guide covers the homepage, story page, and contact page of offscript.sh as visible in the supplied images. The work portfolio page, any mobile layouts, hover and focus states, loading behavior, and potential dark mode are not represented. Measurements are practical adaptation targets derived from visual inspection. The partial blue circle on the homepage suggests additional decorative elements may exist below the visible area.
