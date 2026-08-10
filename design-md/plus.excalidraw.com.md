# How plus.excalidraw.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/plus.excalidraw.com-design)

Last updated: 2026-08-10

## Captured pages

[![Security page hero with hand-drawn illustration and feature cards on dark background](https://pin.fontofweb.com/8131?format=jpg)](https://design.withfudge.com/share/pin-8131)

[Security page hero with hand-drawn illustration and feature cards on dark background](https://design.withfudge.com/share/pin-8131)

[![Teams page showing navigation bar and collaborative workspace section with product screenshot](https://pin.fontofweb.com/8130?format=jpg)](https://design.withfudge.com/share/pin-8130)

[Teams page showing navigation bar and collaborative workspace section with product screenshot](https://design.withfudge.com/share/pin-8130)

[![Landing page hero with hand-drawn chart illustration and company logo marquee](https://pin.fontofweb.com/8129?format=jpg)](https://design.withfudge.com/share/pin-8129)

[Landing page hero with hand-drawn chart illustration and company logo marquee](https://design.withfudge.com/share/pin-8129)

[![Pricing comparison table with Free vs Plus columns and feature checkmarks](https://pin.fontofweb.com/8128?format=jpg)](https://design.withfudge.com/share/pin-8128)

[Pricing comparison table with Free vs Plus columns and feature checkmarks](https://design.withfudge.com/share/pin-8128)

## Overview

Excalidraw Plus presents a distinctive visual identity that merges the spontaneous charm of hand-drawn illustrations with the clarity of modern interface design. The system is built on a near-black canvas with deep navy ink, creating a dramatic, high-contrast foundation that makes the playful sketch elements feel intentional rather than accidental. The design speaks to creative professionals and teams who value both aesthetic warmth and functional precision.

The personality emerges through two complementary typefaces: Assistant, a clean humanist sans-serif that handles all interface text with approachable readability, and Excalifont, a deliberately irregular hand-drawn display face that injects personality into headlines and key moments. This dual-typeface strategy creates a rhythm between system clarity and creative expression. Rounded pill-shaped buttons, soft card corners, and generous whitespace reinforce the friendly, unpretentious tone. The overall composition balances structured content areas with organic illustration zones, suggesting a tool that is both powerful and pleasantly informal.

## Colors

The color system operates on a dark-mode-first philosophy with carefully restrained accents. The near-black canvas creates immersive depth while the deep navy ink provides readable contrast without the harshness of pure white-on-black.

| token | value | use |
|---|---|---|
| ink | #030064 | Primary text, headings, body copy |
| ink-muted | #6965DB | Secondary text, subtle icons, decorative elements |
| canvas | #000000 | Page background, immersive sections |
| surface | #FFFFFF | Card backgrounds, elevated panels, table cells |
| surface-elevated | #F5F5F9 | Subtle background variation for layered content |
| border | #C5C5D0 | Hairline dividers, table row separators |
| border-light | #F0EFFF | Card borders, soft containment boundaries |
| accent | #6965DB | Interactive elements, focus rings, icon fills |
| accent-glow | #6965DB | Focus shadow base color, used at 8% opacity |
| action-primary | #6965DB | Primary buttons, CTAs, active nav items |
| action-primary-text | #FFFFFF | Text on primary buttons |
| action-secondary-bg | #FFFFFF | Outlined button fills |
| action-secondary-border | #C5C5D0 | Outlined button borders |
| action-tertiary-bg | #FFE599 | Special highlight buttons |
| action-tertiary-text | #705400 | Text on tertiary buttons |
| highlight-warm | #FFE599 | Warm sketch highlight backgrounds behind Excalifont words |
| highlight-cool | #F0EFFF | Cool sketch highlight backgrounds behind Excalifont words |

The dark canvas dominates the experience, with surface white used strategically for cards, tables, and content containers that need to feel lifted from the background. The purple accent is used sparingly for actions and focus, while the sketch highlights in warm yellow and cool lavender appear behind hand-drawn headline words to create the effect of marker or highlighter strokes. The system avoids gradients, relying on flat color fields and subtle borders for depth.

## Typography

The type system pairs a functional sans-serif with an expressive hand-drawn display face. All sizes are anchored to a 2px relative unit grid.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Assistant | 3.5rem | 600 | 1.15 | normal | Page headlines, hero titles |
| section-display | Assistant | 2.75rem | 600 | 1.15 | normal | Section headings |
| sub-section-heading | Assistant | 1.875rem | 600 | 1.2 | normal | Card group titles, pricing tiers |
| card-heading | Assistant | 1.5rem | 500 | 1.15 | normal | Feature card titles |
| body | Assistant | 1rem | 480 | 1.4 | normal | Paragraphs, lists, descriptions |
| body-large | Assistant | 1.25rem | 480 | 1.8 | normal | Hero descriptions, lead text |
| body-small | Assistant | 0.875rem | 480 | 1.43 | normal | Captions, metadata, fine print |
| label | Assistant | 0.75rem | 480 | 1.33 | normal | Tags, badges, minimal labels |
| navigation | Assistant | 0.875rem | 480 | 1.43 | 0.05em | Header nav links |
| navigation-active | Assistant | 0.875rem | 500 | 1.43 | 0.05em | Active/current nav item |
| button-primary | Assistant | 1rem | 600 | 1.4 | 0.05em | Primary CTA buttons |
| button-small | Assistant | 0.875rem | 480 | 1.43 | 0.05em | Secondary buttons |
| sketch-display | Excalifont | 3.5rem | 400 | 1.15 | normal | Hand-drawn headline words |
| sketch-section | Excalifont | 2.75rem | 400 | 1.15 | normal | Hand-drawn section titles |

Assistant serves as the workhorse family across all interface text, with weights 480 (near-Regular), 500 (Medium), and 600 (Semibold) creating hierarchy without visual noise. Excalifont appears only for display moments, typically one or two words within a headline that are wrapped in a colored highlight background to simulate hand-drawn emphasis. The sketch tokens use weight 400 exclusively, as the irregular glyph shapes already provide sufficient visual distinction.

Verify licensing for these families before production use. Excalifont is attributed to Your Own Font Foundry, Virgil, Ján Filípek, Dizajn Design, and Excalifont Modifications via dizajndesign.sk.

## Layout

The layout system favors centered, spacious compositions with generous vertical breathing room. Content is typically constrained to a comfortable reading width and centered within the viewport.

The page structure follows a consistent pattern: a fixed header navigation bar at the top, followed by a large hero section with substantial top padding, then alternating content sections. The hero areas use dramatic vertical spacing with 280px top padding and 170px bottom padding, creating a sense of arrival and focus. This generous spacing isolates the headline and call-to-action from the content below, giving the hand-drawn illustrations room to breathe.

Content sections typically use a maximum width container with horizontal padding of 40px on each side. Feature grids employ a three-column layout on desktop, with cards separated by consistent gutters. The pricing comparison table spans nearly the full container width, with feature names left-aligned and tier columns right-aligned.

The header navigation maintains a fixed position with the Excalidraw logomark on the left, primary navigation links in the center-left area, and utility actions (Sign in, Free whiteboard) on the right. The navigation uses a transparent or matching background that sits cleanly atop the dark canvas.

Vertical rhythm between content sections is maintained through consistent margin patterns: headings receive 8px bottom margin to their following paragraphs, while paragraphs carry 20px bottom margin to separate from subsequent elements. Lists use 60px left padding for indentation with 160px bottom padding on list items in feature descriptions, creating substantial vertical separation between distinct points.

## Visual language

The visual language is defined by the tension between digital precision and analog warmth. Hand-drawn illustrations appear throughout, rendered in a consistent sketch style with thin lines, occasional color fills, and informal labeling. These illustrations are not decorative afterthoughts but integral content elements that explain features through visual metaphor.

The sketch aesthetic extends to typography through Excalifont, which appears as highlighted words within otherwise clean headlines. These highlighted words sit on rounded rectangular backgrounds in soft yellow or lavender, creating the impression of marker emphasis added after the fact. This technique appears in headlines like "Security at Excalidraw" where "Security" is rendered in Excalifont on a warm background, while "at Excalidraw" remains in clean Assistant.

Iconography follows the same hand-drawn philosophy. Feature cards display simple line icons with a sketched quality, using the accent purple for consistency. The icons are not geometrically perfect but carry slight irregularities that reinforce the human-made quality.

Photography is absent from the system; all imagery is illustration-based. The illustration style favors isometric or flat diagrammatic compositions with labeled elements, arrows, and small figures. Color within illustrations is restrained, using the same purple accent, soft pastels, and occasional warm tones that appear in the UI palette.

The overall effect is of a whiteboard come to life, appropriate for a collaborative drawing tool. The visual language suggests that the product itself extends the informal, creative energy of its interface into its marketing presence.

## Components

### Header navigation

The header spans the full viewport width with a transparent or matching dark background. The Excalidraw logomark sits left, rendered in white or light color. Primary navigation links follow in a horizontal row: Pricing, Teams, Roadmap, Resources (with dropdown indicator). The right side holds utility links and actions.

- **Anatomy**: Logo, nav links, utility icons (GitHub star count), Sign in text link, Free whiteboard pill button
- **Surface**: Transparent background, nav links use ink color on dark canvas
- **Typography**: `{typography.navigation}` for links, `{typography.button-small}` for Sign in, `{typography.button-primary}` for Free whiteboard
- **Shape**: Nav links have square 8px radius on hover; Free whiteboard uses full pill radius
- **Spacing**: Links padded 12px; primary CTA padded 12px 24px

### Hero section

The hero occupies substantial vertical space with left-aligned content and right-aligned illustration. Headlines mix clean and sketch typefaces.

- **Anatomy**: Headline with mixed typography, supporting description, primary CTA button, hand-drawn illustration
- **Surface**: Dark canvas background
- **Typography**: `{typography.hero-display}` for clean words, `{typography.sketch-display}` for emphasized words with highlight background
- **Shape**: Sketch highlight backgrounds use soft rounded rectangles
- **Spacing**: 280px top padding, 170px bottom padding; headline margin-bottom approximately 50px

### Primary button

The primary action uses a filled pill shape with the accent purple.

- **Anatomy**: Text label, optional icon
- **Surface**: `{colors.action-primary}` background, `{colors.action-primary-text}` text
- **Typography**: `{typography.button-primary}`
- **Shape**: Full pill radius (9999px)
- **Spacing**: 12px 24px padding
- **States**: Focus shows accent-glow shadow at 8% opacity (0 0 0 3px)

### Secondary button

Used for less prominent actions, with outlined appearance.

- **Anatomy**: Text label
- **Surface**: White background, 1px border in border color
- **Typography**: `{typography.button-small}`
- **Shape**: Full pill radius
- **Spacing**: 12px 24px padding

### Feature card

White cards on dark background, containing icon, title, and description.

- **Anatomy**: Icon (top), heading, paragraph text
- **Surface**: `{colors.surface}` background, `{colors.border-light}` 1px border, 16px radius
- **Typography**: `{typography.card-heading}` for title, `{typography.body}` for description
- **Shape**: 16px border radius
- **Spacing**: 24px padding

### Comparison table

Structured feature comparison with tier columns.

- **Anatomy**: Section headers, feature rows, checkmark/x icons, tier headers with price
- **Surface**: White background container with subtle border
- **Typography**: `{typography.sub-section-heading}` for tier names, `{typography.body}` for features
- **Shape**: 16px container radius, internal row borders at 1px
- **Composition**: Feature names left-aligned, tier indicators center-aligned in columns

### Sketch highlight

Inline emphasis element for headline words.

- **Anatomy**: Text in Excalifont, colored background
- **Surface**: `{colors.highlight-cool}` or `{colors.highlight-warm}` background
- **Typography**: `{typography.sketch-display}` or `{typography.sketch-section}`
- **Shape**: Small rounded corners (approximately 4px)
- **Spacing**: Tight padding around text (4px horizontal)

## Responsive behavior

The design is documented from desktop viewport widths. The spacious hero padding and three-column feature grids should adapt for narrower viewports by stacking vertically and reducing horizontal padding. The navigation collapses to a hamburger menu or condensed form on mobile, though the exact breakpoint is not specified.

The comparison table, with its multiple columns, requires horizontal scrolling or column rearrangement on smaller screens. Consider converting the table to a stacked card view on mobile, with each feature shown as a card indicating availability per tier.

Typography scales down proportionally: hero-display at 56px may reduce to 44px or 36px on tablet, and section-display at 44px scales to maintain hierarchy. Sketch typefaces maintain their sizes longer than body text, as their display role benefits from preserved impact.

Illustrations in hero sections should maintain their aspect ratio while scaling down, potentially moving below the text on narrow viewports rather than sitting side-by-side.

## Practical implementation guidance

### Preserve
- The dark canvas as the default background; do not invert to light mode without careful consideration of the brand identity
- The mixed-typeface headline technique with Excalifont for one or two emphasized words only
- The hand-drawn illustration style with thin lines and informal labeling
- The generous hero spacing that creates dramatic arrival moments
- The purple accent used sparingly for actions and focus states only
- The pill-shaped primary buttons with their distinctive full rounding

### Avoid
- Adding gradients or shadows beyond the subtle accent-glow focus indicator
- Using Excalifont for body text or long passages; it is strictly display-only
- Pure white backgrounds for full sections; use surface tokens for contained cards only
- Geometrically perfect icons that clash with the sketch aesthetic
- Tight spacing that compresses the airy, open feel

### Recommended build order
1. Establish the dark canvas background and ink text colors
2. Implement Assistant at body size with proper weights
3. Add Excalifont with sketch-highlight backgrounds for display moments
4. Build the pill button system with primary, secondary, and ghost variants
5. Create the feature card component with proper border and radius
6. Implement the hero section with correct spacing and mixed typography
7. Add the comparison table with row borders and checkmark icons
8. Integrate hand-drawn illustrations with consistent line weight and color

### Accessibility
- The dark mode default with deep navy (#030064) on black provides sufficient contrast for large text but should be verified for small body text; consider slightly lightening the ink if needed
- Focus states use the visible accent-glow shadow; ensure this meets non-text contrast requirements
- Navigation links need clear hover and focus indicators beyond color change
- The hand-drawn typeface in headlines should not be used for critical information alone; ensure content is understandable without the sketch emphasis
- Buttons should maintain minimum 44px touch targets on all viewport sizes

## Scope note

This guide covers the marketing and informational pages of Excalidraw Plus including the landing page, teams page, pricing comparison, and security documentation. The actual whiteboard editor interface, user dashboard, and account management flows are not represented. Motion behavior, mobile-specific layouts, and interactive states beyond focus are not documented. Measurements are exact values from the retained interface analysis.
