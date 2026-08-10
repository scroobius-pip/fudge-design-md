# How unicorn.studio is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/unicorn.studio-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large display typography, aurora gradient background, and centered call-to-action on near-black canvas](https://pin.fontofweb.com/8329?format=jpg)](https://design.withfudge.com/share/pin-8329)

[Hero section with large display typography, aurora gradient background, and centered call-to-action on near-black canvas](https://design.withfudge.com/share/pin-8329)

[![Inspiration gallery with masonry grid of WebGL effect thumbnails, filter pills, and dark immersive browsing surface](https://pin.fontofweb.com/8332?format=jpg)](https://design.withfudge.com/share/pin-8332)

[Inspiration gallery with masonry grid of WebGL effect thumbnails, filter pills, and dark immersive browsing surface](https://design.withfudge.com/share/pin-8332)

[![Pricing cards with glowing purple border treatment, tier comparison, and feature checklist layout](https://pin.fontofweb.com/8330?format=jpg)](https://design.withfudge.com/share/pin-8330)

[Pricing cards with glowing purple border treatment, tier comparison, and feature checklist layout](https://design.withfudge.com/share/pin-8330)

[![Footer with centered signup prompt, aurora gradient accent, and multi-column link navigation](https://pin.fontofweb.com/8331?format=jpg)](https://design.withfudge.com/share/pin-8331)

[Footer with centered signup prompt, aurora gradient accent, and multi-column link navigation](https://design.withfudge.com/share/pin-8331)

## Overview

Unicorn Studio presents a dark, immersive visual system built around the creative possibilities of WebGL. The design language establishes immediate technical credibility through its near-black canvas, allowing aurora-like gradient effects and vibrant user-generated content to become the focal point. The interface maintains a restrained, editorial quality where typography and spacing feel deliberately considered rather than utilitarian.

The system balances two distinct voices: large, confident display typography for moments of product definition, and a refined, smaller-scale interface layer for navigation, actions, and dense information like pricing tables. Purple serves as the singular accent color, appearing in primary buttons, featured card borders, and gradient backgrounds. This limited palette keeps attention on the creative output while providing clear wayfinding through interactive states.

Content density varies dramatically across surfaces. The hero and gallery pages embrace generous negative space, while the pricing interface presents structured comparison data with tight vertical rhythm. Throughout, rounded corners remain subtle at 4px for buttons and 10px for panels, avoiding the overly friendly feel of larger radii while maintaining contemporary softness.

## Colors

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, deepest layer |
| surface | #08080A | Card backgrounds, elevated panels |
| surface-elevated | #17171C | Featured pricing card, badge backgrounds |
| border-subtle | #31313A | Default card borders, divider lines |
| border-default | #3A3A45 | Active input borders, secondary button strokes |
| ink-muted | #62626F | Disabled states, tertiary information |
| ink-secondary | #8B8E9C | Navigation links, captions, filter pills |
| ink-primary | #DAD7DE | Primary headings, body text on dark |
| accent-purple | #724FC9 | Primary buttons, core brand moments |
| accent-purple-light | #8E6CE4 | Hover states, gradient endpoints, featured borders |
| accent-purple-glow | #AB8FF1 | Aurora gradient highlights, glow effects |
| action-primary | #724FC9 | CTA buttons, signup actions |
| action-primary-hover | #8E6CE4 | Button hover, link hover |
| action-text | #FFFFFF | Text on primary buttons |
| badge-new | #FFFFFF | New badge text |
| badge-new-bg | #17171C | New badge background |

The color system operates on a dark-first principle. The canvas at pure black provides maximum contrast for luminous WebGL content and photography. Text hierarchy moves through three gray values: muted for de-emphasized content, secondary for navigation and labels, and primary for readable body and headings. The purple accent family creates a cohesive glow language, from the deep #724FC9 of actionable elements to the lighter #8E6CE4 used in radial gradients behind hero sections and featured pricing cards. These gradients appear as soft, diffused aurora effects rather than sharp transitions, suggesting light emanating from behind interface elements.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Overused Grotesk | 4rem | 500 | 1 | -0.04em | Main hero headlines |
| section-display | Overused Grotesk | 3rem | 500 | 1 | -0.04em | Section titles, CTA headings |
| subhead-display | Overused Grotesk | 1.625rem | 500 | 1 | -0.03em | Card titles, feature headings |
| sprat-hero | Sprat | 3.84rem | 500 | 1 | -0.04em | Alternate display, numeric highlights |
| body-large | Applesystem | 1.125rem | 400 | 1.4 | 0em | Hero descriptions, lead paragraphs |
| body | Applesystem | 1rem | 400 | 1.5 | 0em | Navigation, general content |
| body-small | Applesystem | 0.875rem | 400 | 1.2 | 0em | Feature lists, pricing details |
| label | Applesystem | 0.75rem | 400 | 1.5 | 0em | Badges, timestamps, metadata |
| navigation | Applesystem | 1rem | 400 | 1.5 | 0em | Header links, footer columns |
| button-primary | Applesystem | 0.875rem | 400 | 1.5 | 0em | Primary and secondary buttons |
| pricing-amount | Overused Grotesk | 3rem | 500 | 1 | -0.04em | Pricing tier costs |

The typographic system pairs two distinct voices. Overused Grotesk, in Medium weight, handles all display moments with tight negative tracking and flush line-height, creating a dense, editorial presence. Its geometric construction feels contemporary and technically precise. Sprat appears as a condensed alternate for special display treatments, bringing narrower proportions and similar weight. Applesystem serves the entire interface layer with neutral, highly legible forms at smaller sizes.

The design facts identify Sprat-Condensed Medium as a distinct font family in the source. Verify licensing for these families before production use. Overused Grotesk and Sprat require license verification; Sprat is designed by Ethan Nakache.

## Layout

The layout system centers content within generous horizontal margins, creating a contained reading experience against the full-bleed dark canvas. The standard content width appears at approximately 940px centered, with wider moments at roughly 1010px for hero text blocks. Navigation sits at the full viewport width with internal padding matching the content margins.

Vertical rhythm follows a section-based model with substantial gaps between major content areas. The hero section occupies significant viewport height with centered alignment. Below, content sections stack with consistent top margins of 40px to 96px depending on hierarchy. The inspiration gallery breaks from centered containment, using a full-width masonry grid with internal padding.

Grid behavior varies by content type. The pricing page uses a two-column comparison at equal width, while the footer organizes links into four columns with asymmetric widths. Filter pills in the gallery use a horizontal scroll or wrap pattern with 10px gaps. Card grids maintain consistent gutter spacing of approximately 20px.

Spacing tokens derive from a 2px base unit, expressed in rem at 0.125rem per step. Common values include 10px (0.625rem) for button padding, 20px (1.25rem) for card padding, 30px (1.875rem) for horizontal content padding, 40px (2.5rem) for section internal spacing, and 96px (6rem) for major section separations.

## Visual language

The visual language establishes atmosphere through three core techniques: luminous depth, restrained interface chrome, and content-forward presentation.

Depth emerges from layered dark values and gradient glows. The pure black canvas recedes visually, while panels at #08080A and #17171C float forward with subtle border definition. Aurora gradients in purple and blue tones appear behind hero content and within featured pricing cards, rendered as soft radial blooms rather than directional bands. These gradients use #8E6CE4 as a central highlight diffusing toward darker edges, creating the impression of light sources behind the interface.

Interface chrome remains minimal. Buttons use flat fills without shadows in their default state. The primary button at #724FC9 reads clearly against black without additional elevation. When depth is needed, a subtle inset shadow at #31313A 1px appears on input-like elements, and a soft drop shadow at rgba(0,0,0,0.25) 0px 1px 4px provides minimal lift for floating elements.

Content presentation prioritizes the creative work. The inspiration gallery displays WebGL effects and generative art in a masonry layout with rounded 10px corners and no visible borders between items. Creator names appear in muted text at card bottoms. The hero section similarly subordinates interface to atmosphere, with the aurora gradient occupying the majority of viewport height and typography floating above it.

The "New" badge uses a pill shape with a small dot indicator, rendered in the elevated surface color with white text. This pattern appears for feature announcements and gallery updates.

## Components

### Primary Button

- **Anatomy**: Text label centered within a rectangular container
- **Surface**: Solid fill at accent-purple (#724FC9)
- **Typography**: button-primary token, white text
- **Shape**: 4px border radius
- **Spacing**: 10px vertical padding, 20px horizontal padding
- **Composition**: Centered within its container, often paired with secondary text below
- **Variants**: Default state with solid fill; hover transitions to accent-purple-light (#8E6CE4)

### Secondary Button

- **Anatomy**: Text label within a bordered container
- **Surface**: Transparent background with border-default (#3A3A45) 1px stroke
- **Typography**: button-primary token, ink-primary text
- **Shape**: 4px border radius
- **Spacing**: 10px vertical padding, 20px horizontal padding
- **Composition**: Used alongside primary buttons or in isolation for lower-emphasis actions

### Filter Pill

- **Anatomy**: Text label within a fully rounded container
- **Surface**: Transparent background with border-subtle (#31313A) 1px stroke
- **Typography**: body-small token, ink-secondary text
- **Shape**: Full pill at 9999px radius
- **Spacing**: 6px vertical padding, 14px horizontal padding
- **Composition**: Horizontal row with 10px gaps, scrollable or wrapping
- **Variants**: Default state; active state likely inverts to filled surface with ink-primary text

### Pricing Card

- **Anatomy**: Tier name, price amount, billing note, feature checklist with checkmarks, CTA button
- **Surface**: Surface (#08080A) background with border-subtle (#31313A) 1px stroke, 10px radius
- **Typography**: Tier name in subhead-display, price in pricing-amount with /mo suffix in body-small, features in body-small
- **Shape**: 10px border radius
- **Spacing**: 40px internal padding
- **Composition**: Vertical stack with consistent 10px gaps between feature items

### Featured Pricing Card

- **Anatomy**: Same structure as standard pricing card with enhanced visual treatment
- **Surface**: Surface-elevated (#17171C) background with accent-purple-light (#8E6CE4) 1px border glow
- **Typography**: Same as standard card
- **Shape**: 10px border radius with luminous border treatment
- **Spacing**: 40px internal padding
- **Composition**: Positioned as the recommended tier, often the right card in a two-column layout

### Navigation Bar

- **Anatomy**: Logo mark and wordmark left, link cluster center-right, auth buttons far right
- **Surface**: Transparent over hero, likely solidifies on scroll
- **Typography**: navigation token for links, button-primary for auth actions
- **Composition**: Horizontal flex with space-between, consistent 30px horizontal padding
- **Variants**: Default link in ink-secondary; active or hovered link in ink-primary

### Footer

- **Anatomy**: Logo and tagline left, three link columns right, copyright below
- **Surface**: Canvas (#000000) background continuing from page
- **Typography**: navigation token for column headers, body-small for links
- **Composition**: Asymmetric grid with logo area wider than link clusters
- **Spacing**: 20px vertical padding, 75px left margin for link columns

### New Badge

- **Anatomy**: Dot indicator followed by text label within a rounded container
- **Surface**: Surface-elevated (#17171C) background
- **Typography**: label token, white text
- **Shape**: Small pill with 4px radius
- **Spacing**: 5px vertical padding, 10px horizontal padding
- **Composition**: Inline before headline text or within navigation items

## Responsive behavior

The design targets desktop as its primary experience, with content widths fixed rather than fluid. At narrower viewports, the centered content blocks should maintain their internal padding while scaling down proportionally. The hero headline at 64px should reduce to 48px and then 26px on smaller screens, following the established type scale.

The inspiration gallery masonry grid should collapse from multi-column to single-column scrolling, maintaining card aspect ratios and 10px corner radii. Filter pills should become horizontally scrollable with fade indicators at the edges rather than wrapping to multiple lines.

Pricing cards should stack vertically on narrow viewports, with the featured card's glow border remaining visible. The two-column comparison becomes a scrollable horizontal section or stacked cards with sticky tier headers.

Navigation should collapse to a hamburger menu or simplified logo-plus-CTA pattern, preserving the Sign up button as the persistent action. Footer columns should stack to two-then-single column arrangements.

## Practical implementation guidance

### Preserve
- The near-black canvas as the default background; never introduce light themes without complete recoloring
- The tight negative tracking on Overused Grotesk display sizes; this is essential to the editorial character
- The aurora gradient as a full-bleed atmospheric element, not a small decorative accent
- The 4px button radius and 10px panel radius; these subtle values maintain technical precision
- The single purple accent family; introducing additional accent colors would fragment the glow language

### Avoid
- Adding drop shadows to primary buttons; the flat fill provides sufficient contrast
- Using Sprat at small sizes; its condensed form is designed for display use only
- Introducing border radii larger than 10px; the system avoids overly friendly, bubbly forms
- Placing light photography or video directly against the canvas without a surface panel beneath
- Using ink-primary (#DAD7DE) for large background areas; it is strictly a text color on dark

### Recommended Build Order
1. Establish the canvas, surface, and ink color tokens with pure black foundation
2. Implement Overused Grotesk for hero and section display at the three documented sizes
3. Build the primary button with exact purple fill and 4px radius
4. Create the pricing card component with standard and featured variants
5. Implement the aurora gradient as a reusable background element
6. Add the Applesystem interface layer for navigation, body, and button text
7. Build the masonry gallery grid with rounded image containers
8. Polish with filter pills, badges, and footer layout

### Accessibility
- Ensure aurora gradient backgrounds maintain sufficient contrast for overlaid text; the gradient shifts in luminance, so text may need a subtle text-shadow or scrim in lighter gradient areas
- Primary buttons at #724FC9 on #000000 meet WCAG AA for large text but should be verified for small button labels
- Focus states should use accent-purple-light (#8E6CE4) with a 2px outline offset, visible against both canvas and surface backgrounds
- The filter pill row should be keyboard navigable with visible focus indicators on each pill
- Pricing feature checklists should use semantic lists with proper heading hierarchy for screen reader navigation

## Scope note

This guide covers the marketing site surfaces visible in the supplied images: homepage hero, inspiration gallery, pricing comparison, and footer navigation. The WebGL editor interface shown in the hero screenshot is not documented in component detail. Mobile breakpoints, animation specifications, form validation states, and account dashboard interfaces are not included. The design facts identify Sprat-Condensed Medium as a distinct font family in the source.
