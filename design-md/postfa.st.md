# How postfa.st is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/postfa.st-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with product dashboard preview showing social media scheduling interface and platform icons row](https://pin.fontofweb.com/7482?format=jpg)](https://design.withfudge.com/share/pin-7482)

[Hero section with product dashboard preview showing social media scheduling interface and platform icons row](https://design.withfudge.com/share/pin-7482)

[![Pricing page with four-tier card layout featuring gradient-highlighted Pro plan and dark Enterprise tier](https://pin.fontofweb.com/7481?format=jpg)](https://design.withfudge.com/share/pin-7481)

[Pricing page with four-tier card layout featuring gradient-highlighted Pro plan and dark Enterprise tier](https://design.withfudge.com/share/pin-7481)

## Overview

PostFast presents a modern SaaS landing experience built around social media scheduling automation. The visual system balances professional credibility with approachable clarity through a restrained palette dominated by crisp whites, deep navy inks, and a single strong blue action color. The interface relies on clear typographic hierarchy to guide users from value proposition through product demonstration to pricing conversion.

The design employs two complementary typefaces: Exo 2 for display and heading elements, lending a contemporary geometric character to key messages, and Roboto for all body text and interface labels, ensuring excellent readability across dense information surfaces. Layouts favor generous whitespace with contained max-width content areas, while component surfaces use subtle elevation through borders and soft shadows rather than heavy chrome. The hero section establishes immediate product context through a split composition—bold headline and social proof on the left, realistic product interface preview on the right—while the pricing section demonstrates sophisticated tier differentiation through color-coded card treatments.

## Colors

The color system operates on a principle of maximum contrast for readability with selective accent deployment for action and hierarchy. The palette is intentionally narrow, deriving visual interest from typography and photography rather than chromatic variety.

| token | value | use |
|---|---|---|
| action | #2563EB | Primary buttons, links, featured pricing tier background, interactive highlights |
| action-hover | #3B82F6 | Button hover states, gradient endpoints, navigation CTA background |
| accent-purple | #A855F7 | Decorative gradient accents, subtle background tints |
| ink | #020817 | Primary headings, hero display text, maximum emphasis body copy |
| ink-secondary | #0F172A | Secondary headings, card titles on light surfaces |
| ink-tertiary | #1F2937 | Tertiary text, labels, metadata |
| muted | #4B5563 | Body paragraphs, descriptions, secondary information |
| muted-light | #6B7280 | Captions, disabled states, placeholder text |
| canvas | #FFFFFF | Page background, card surfaces, button text on dark |
| surface | #F8FAFC | Subtle section alternation, input backgrounds |
| surface-elevated | #FFFFFF | Cards, modals, floating panels with shadow |
| border | #E2E8F0 | Card borders, dividers, structural separators |
| border-light | #DBEAFE | Focus rings, subtle boundaries, tinted borders |
| warning | #F59E0B | Badges, promotional labels, "NEW" indicators |
| dark-surface | #111827 | Enterprise tier card, dark mode surfaces, footer areas |
| dark-ink | #FFFFFF | Text on dark surfaces, dark card content |

The interface maintains a predominantly light mode with white canvas and near-black ink providing maximum legibility. Blue serves as the singular brand accent, appearing in primary actions, link text, and the highlighted pricing tier. A subtle decorative gradient—fading from low-opacity blue through transparent to low-opacity purple—appears behind product imagery, adding depth without competing for attention. The dark surface token enables dramatic contrast in the Enterprise pricing tier and any premium positioning contexts.

## Typography

The dual-typeface system separates display personality from functional readability. Exo 2 contributes geometric distinction to headlines with its slightly squared forms and confident stance, while Roboto handles all continuous reading and interface elements with neutral clarity.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Exo 2 | 3.75rem | 700 | 1 | -0.025em | Hero headlines, primary value propositions |
| section-display | Exo 2 | 3rem | 700 | 1 | -0.05em | Section headings, page titles |
| heading-large | Exo 2 | 1.25rem | 700 | 1.4 | 0 | Card titles, feature headings |
| heading-medium | Exo 2 | 1rem | 500 | 1.5 | 0 | Subheadings, pricing tier names |
| body-large | Roboto | 1.125rem | 400 | 1.556 | 0 | Lead paragraphs, hero descriptions |
| body | Roboto | 1rem | 400 | 1.5 | 0 | Standard paragraphs, list items |
| body-small | Roboto | 0.875rem | 400 | 1.429 | 0 | Descriptions, secondary content |
| label | Roboto | 0.875rem | 500 | 1.429 | 0 | Buttons, navigation, category labels |
| caption | Roboto | 0.75rem | 400 | 1.333 | 0 | Fine print, metadata, legal text |
| stat-number | Roboto | 1.875rem | 700 | 1.2 | 0 | Pricing figures, metrics, counts |

Exo 2 appears exclusively at 700 weight for display and 500 weight for medium headings, never in regular weight for UI text. Roboto spans 400 through 700 weights with 500 serving as the standard semibold for interactive elements. The hero display employs tight negative tracking for impactful headlines, while body text maintains neutral spacing for comfortable reading. Verify licensing for these families before production use. Roboto is attributed to Google.

## Layout

The layout system centers content within a constrained maximum width, creating focused reading lanes that prevent visual fatigue on large displays. The standard content container employs horizontal padding of 1.5rem and centers with auto margins, producing approximately 9.5rem side margins at full desktop width.

Vertical rhythm follows a base-4 system with 0.25rem as the atomic unit. Section spacing scales from 3rem between related content groups to 6rem for major section breaks. Component internal spacing uses 1rem as the standard comfortable unit, with 1.25rem for card padding and 2rem for spacious interior regions.

The hero section implements an asymmetric two-column composition: textual content occupies approximately 45% of the width with left alignment, while the product preview fills the remaining space with a subtle perspective offset suggesting depth. Below the hero, content sections stack vertically with centered alignment for headings and left-aligned body text within the centered container.

The pricing section presents four equal-width columns in a grid, each card maintaining consistent internal padding of 1.25rem. Cards share equal height within the row through flexbox alignment, with the featured Pro tier receiving visual elevation through background color rather than dimensional offset.

## Visual language

The visual character communicates efficiency and reliability through disciplined restraint. Surfaces are predominantly flat with minimal shadow—only the product preview card and floating interface elements receive subtle elevation through soft drop shadows (0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)). This shadow treatment appears selectively to establish layering in complex compositions.

Border radii remain modest and functional: 0.375rem for buttons, 0.5rem for cards, and 0.75rem for larger panels. The system avoids excessive rounding that would undermine professional credibility.

Photography and illustration follow a clean, realistic approach. The product preview shows actual interface screenshots with authentic content rather than abstract representations. Social platform icons appear in their native brand colors arranged in horizontal rows, providing familiar visual anchors without custom iconography.

Decorative elements include the subtle blue-to-purple gradient wash behind hero imagery, implemented as a low-opacity linear gradient that suggests technological sophistication without visual noise. Check indicators in feature lists use simple strokes in action blue or white depending on card background.

## Components

### Navigation Bar

The top navigation spans full width with fixed or sticky positioning potential. It contains the PostFast wordmark on the left—a geometric mark combining grid dots with bold sans letterforms—followed by horizontal text links for primary sections. Navigation links use the body typography at standard weight with ink color, transitioning to action blue on hover. The right cluster holds a text-only "Sign In" link and a primary button CTA for "Sign Up" with action background and white text.

- **Anatomy**: Logo mark, text links, auth cluster
- **Surface**: Transparent or canvas background, no border
- **Typography**: `{typography.body}` for links, `{typography.label}` for CTA
- **Shape**: Full-width bar, no radius
- **Spacing**: 1rem vertical padding, 1.5rem horizontal

### Hero Section

The hero establishes immediate product comprehension through its split layout. The left column stacks a "Watch Demo" text link with play icon, the main headline with selective blue color on key phrases, a descriptive paragraph, platform icon row, and dual action buttons. The right column presents a realistic product dashboard screenshot with floating UI elements suggesting depth.

- **Anatomy**: Eyebrow link, headline, description, platform proof, CTAs, product preview
- **Surface**: Canvas background with subtle gradient wash behind preview
- **Typography**: `{typography.hero-display}` for headline, `{typography.body-large}` for description
- **Shape**: No containing border; preview image has subtle radius
- **Spacing**: 3rem between major elements vertically

### Primary Button

Solid fill buttons with action blue background and white text. Standard height derives from 0.5rem vertical padding plus line height, with generous 2rem horizontal padding creating pill-like proportions without full rounding.

- **Anatomy**: Text label, optional arrow icon
- **Surface**: `{colors.action}` background, `{colors.canvas}` text
- **Typography**: `{typography.label}`
- **Shape**: `{rounded.button}` radius
- **Spacing**: 0.5rem 2rem padding

### Secondary Button

Outlined or ghost variant for alternative actions. White background with ink text and light border, or transparent with ink text depending on context.

- **Anatomy**: Text label
- **Surface**: `{colors.canvas}` background, `{colors.border}` border, `{colors.ink}` text
- **Typography**: `{typography.label}`
- **Shape**: `{rounded.button}` radius
- **Spacing**: 0.5rem 2rem padding

### Pricing Card

Four variants serve different tier presentations. The standard card has white surface, light border, and dark text. The featured Pro variant inverts to action blue background with white text and a "POPULAR" badge. The Enterprise variant uses dark surface with white text and a "NEW" badge in warning orange. The Starter and Creator tiers maintain standard treatment.

- **Anatomy**: Tier name with icon, price with period, description, CTA button, feature list with checkmarks
- **Surface**: Variant-dependent—white, action blue, or dark surface
- **Typography**: `{typography.heading-medium}` for tier name, `{typography.stat-number}` for price figure, `{typography.body-small}` for features
- **Shape**: `{rounded.card}` radius
- **Spacing**: 1.25rem internal padding, 1rem between content groups
- **Variants**: Standard (white), Featured (blue), Dark (navy), Promotional (with badge)

### Feature List

Vertical stack of checkmark-prefixed items with trailing values. Each row distributes label and value to opposite edges using flexbox space-between.

- **Anatomy**: Check icon, feature label, optional value
- **Surface**: Transparent, inherits card background
- **Typography**: `{typography.body-small}` for labels, same weight for values
- **Spacing**: 0.75rem between rows, 0.5rem between check and label

### Badge

Small pill-shaped indicators for promotional states. The "POPULAR" badge uses action blue background with white text; the "NEW" badge uses warning orange.

- **Anatomy**: Text label
- **Surface**: Variant color background, white text
- **Typography**: `{typography.caption}` at 500 weight
- **Shape**: `{rounded.pill}` or small radius with horizontal padding

## Responsive behavior

The layout assumes desktop-first presentation with clear adaptation paths. The hero two-column composition should stack vertically on narrower viewports, with the product preview moving above or below the textual content depending on priority. Headline sizes should scale down proportionally: hero-display to 2.5rem on tablet and 2rem on mobile, section-display to 2rem and 1.75rem respectively.

The pricing grid of four columns should transition to two columns on tablet and single column on mobile, with the featured Pro tier maintaining visual priority through vertical placement. Card internal spacing can reduce to 1rem on mobile to maximize content visibility.

Navigation should collapse to a hamburger menu on mobile, preserving the Sign Up CTA as a persistent element if feasible. Platform icon rows in the hero should wrap naturally rather than scaling down, maintaining touch-friendly minimum sizes.

## Practical implementation guidance

### Preserve
- The strict two-typeface hierarchy with Exo 2 reserved for display and Roboto for everything else
- The selective use of blue—limit to actions, links, and the single featured pricing tier
- The modest border radii that keep the interface feeling precise rather than playful
- The generous whitespace around major sections, particularly the hero-product separation
- The realistic product preview approach over abstract illustrations

### Avoid
- Adding additional accent colors beyond the established blue-purple pairing
- Using Exo 2 for body text or small labels where Roboto's readability excels
- Creating excessive shadow layers that would undermine the flat, efficient aesthetic
- Center-aligning body text paragraphs, which reduces readability in the established system
- Using the dark surface for more than one pricing tier or special emphasis element

### Recommended Build Order
1. Establish the type scale with both families loaded and base sizes verified
2. Implement the color tokens with particular attention to the action blue values
3. Build the navigation and hero section as the primary visual anchors
4. Create the button components with both primary and secondary variants
5. Develop the pricing card system with all four tier treatments
6. Add the feature list component for consistent specification presentation
7. Implement responsive breakpoints starting with the pricing grid collapse

### Accessibility
- Ensure the action blue (#2563EB) meets WCAG AA contrast against white for all text sizes
- Verify that white text on the featured blue pricing card maintains sufficient contrast
- Provide visible focus indicators using the border-light token with 2px offset
- Maintain logical heading hierarchy: single h1 in hero, h2 for sections, h3 for cards
- Include descriptive alt text for the product preview screenshot showing interface functionality
- Ensure platform icon rows have appropriate aria-labels since they serve as social proof rather than interactive elements

## Scope note

This guide covers the PostFast landing page including hero, navigation, and pricing sections. Footer content, interior dashboard interfaces, authentication flows, and mobile-specific layouts are not represented in the source material. Motion, animation, and interactive states beyond static hover assumptions are not documented. Measurements derive from the supplied interface analysis with values snapped to the 0.25rem base unit.
