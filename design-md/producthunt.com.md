# How producthunt.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/producthunt.com-design)

Last updated: 2026-08-10

## Captured pages

[![Daily leaderboard with ranked product cards, vote counts, category tags, and a right-hand launch archive sidebar on a white canvas.](https://pin.fontofweb.com/10088?format=jpg)](https://design.withfudge.com/share/pin-10088)

[Daily leaderboard with ranked product cards, vote counts, category tags, and a right-hand launch archive sidebar on a white canvas.](https://design.withfudge.com/share/pin-10088)

[![Full-bleed error page with a photographic background of two dogs and a rounded white dialog containing a coral CTA button.](https://pin.fontofweb.com/10047?format=jpg)](https://design.withfudge.com/share/pin-10047)

[Full-bleed error page with a photographic background of two dogs and a rounded white dialog containing a coral CTA button.](https://design.withfudge.com/share/pin-10047)

[![Advertising landing page with a dark hero headline, coral accent text, avatar cluster, trust logos, and stat cards on a near-black background.](https://pin.fontofweb.com/7371?format=jpg)](https://design.withfudge.com/share/pin-7371)

[Advertising landing page with a dark hero headline, coral accent text, avatar cluster, trust logos, and stat cards on a near-black background.](https://design.withfudge.com/share/pin-7371)

[![Developer tools topic listing with product rows, star ratings, review counts, category tags, and trophy badges on a white background.](https://pin.fontofweb.com/7370?format=jpg)](https://design.withfudge.com/share/pin-7370)

[Developer tools topic listing with product rows, star ratings, review counts, category tags, and trophy badges on a white background.](https://design.withfudge.com/share/pin-7370)

## Overview

Product Hunt presents a content-dense product discovery experience built on a white-dominant canvas with strategic coral accents. The interface prioritizes scannable product listings through consistent card patterns, clear typographic hierarchy, and restrained use of color. The system balances density with breathing room: product rows contain rich metadata—icons, titles, descriptions, category tags, vote counts, and review scores—while maintaining visual clarity through systematic spacing and subtle borders.

The design operates in two primary modes: a light, airy browsing experience for everyday product discovery, and a dramatic dark mode reserved for high-impact landing pages like the advertising sponsor page. Both modes share the same structural DNA—rounded pill buttons, systematic card containers, and the signature coral action color—while adapting their surface treatments to context. The overall impression is of a mature, trustworthy platform that lets product imagery and community signals take center stage.

## Colors

The palette is intentionally restrained, with coral serving as the singular brand accent against a foundation of cool grays and near-black inks.

| token | hex | use |
|---|---|---|
| action | #FF6154 | Primary buttons, active states, stat highlights, brand moments |
| ink | #0C111D | Primary headings, body text on light surfaces |
| ink-secondary | #101828 | Secondary headings, emphasized body text |
| ink-tertiary | #21293C | Tertiary text, subtle labels |
| muted-ink | #344054 | Category tags, metadata, secondary labels |
| muted | #475467 | Descriptions, helper text, inactive elements |
| muted-light | #667085 | Placeholder text, disabled states |
| canvas | #FFFFFF | Page background, card surfaces, input backgrounds |
| surface | #F9FAFB | Subtle section backgrounds, hover states |
| surface-raised | #F2F4F7 | Elevated panels, sidebar sections |
| border | #D0D5DD | Card borders, dividers, structural lines |
| border-light | #EAECF0 | Subtle separators, header bottom border |
| border-subtle | #DEE1E5 | Hairline borders on dark surfaces |
| input-bg | #F9FAFB | Search field background |
| input-text | #4B587C | Search placeholder and input text |
| dark-canvas | #000000 | Hero sections, immersive landing pages |
| dark-surface | #0C111D | Card backgrounds on dark pages |
| dark-ink | #FFFFFF | Text on dark backgrounds |
| dark-muted | #D8E1EC | Secondary text on dark backgrounds |
| dark-border | #D0D5DD | Subtle borders on dark surfaces |

The light mode dominates the product browsing experience. White cards float on a white canvas, separated by hairline borders and systematic spacing. The coral accent appears sparingly—on primary buttons, active navigation states, and vote counts—creating clear action hierarchy without visual fatigue. Dark mode inverts this relationship for landing pages: near-black surfaces make coral stat numbers and white headlines pop with dramatic contrast. The system avoids gradients and shadows in favor of flat, bordered containers that feel crisp and performant.

## Typography

The type system uses Applesystem across all weights and sizes, creating a cohesive, platform-native feel. The scale ranges from small labels to large display headings, with weight and color carrying most of the hierarchical load.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Applesystem | 3rem | 700 | 1.17 | normal | Landing page headlines, major brand moments |
| section-display | Applesystem | 1.875rem | 600 | 1.27 | normal | Section headings, page titles |
| subhead | Applesystem | 1.5rem | 600 | 1.33 | normal | Card titles, feature headings |
| body-large | Applesystem | 1.125rem | 400 | 1.56 | normal | Lead paragraphs, descriptive text |
| body | Applesystem | 1rem | 400 | 1.5 | normal | Primary body text, navigation, buttons |
| body-small | Applesystem | 0.875rem | 400 | 1.71 | normal | Descriptions, metadata, tags |
| label | Applesystem | 0.75rem | 400 | 1.67 | normal | Badges, timestamps, fine print |
| navigation | Applesystem | 1rem | 600 | 1.5 | normal | Top nav links, active states |
| stat-number | Applesystem | 3rem | 700 | 1.17 | normal | Large metrics, hero statistics |

Weight distinctions are meaningful: Regular (400) for body and descriptions, Medium (500) for interactive elements and emphasized links, Semibold (600) for navigation, headings, and active states, and Bold (700) for display headlines and stat numbers. Line heights are tight for display type (1.17) and generous for body text (1.5–1.71), ensuring readability at small sizes. Letter spacing remains normal throughout, preserving the neutral, system-font character.

Verify licensing for these families before production use.

## Layout

The layout follows a centered, max-width container pattern with responsive internal grids. The header spans full width with centered content, while main content areas constrain to approximately 73.5rem with consistent horizontal padding.

The header establishes the primary navigation layer: logo left, search center, navigation links and user actions right. It sits at a fixed height with 20px vertical padding and a 1px bottom border in border-light. The search input receives prominent placement with its pill shape and keyboard shortcut hint, signaling search as a primary interaction mode.

Content areas use a two-column asymmetric split on listing pages: a wider main column for product cards (approximately 70% width) and a narrower sidebar for contextual navigation, archives, or related content. The sidebar uses surface-raised backgrounds and vertical stacking with 16px gaps between sections.

Product cards within the main column stack vertically with consistent 16px gaps. Each card maintains internal padding of 16px and uses flexbox alignment to position the product icon, text content, and vote actions. The vote buttons sit in a fixed-width right column, creating visual alignment across all rows regardless of content length.

Landing pages abandon the two-column structure for full-width hero sections with centered text alignment. Hero content constrains to a readable maximum width (roughly 40rem) while decorative elements—avatar clusters, stat cards—extend into the surrounding space. Below the hero, content returns to the centered max-width container with alternating section backgrounds.

Spacing follows a 2px base unit, with semantic steps at 4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px, and 96px. Section breaks use 96px vertical margins to create clear content separation without arbitrary values.

## Visual language

The visual language is deliberately utilitarian with moments of warmth. Rounded corners are systematic: 4px for small tags, 6–8px for cards and panels, 12px for larger containers, and 9999px for pills, buttons, and avatars. This creates a family of related shapes that feel cohesive without monotony.

Borders are the primary structural device. Cards, buttons, inputs, and dividers all use 1px solid borders in varying opacities of gray. The system avoids drop shadows almost entirely on light surfaces, relying on border contrast and background color shifts to create depth. On dark surfaces, a subtle shadow appears: `rgba(0, 0, 0, 0.05) 0px 2px 6px 0px` for minimal elevation.

Product icons are square with 12px corner radius, creating a slightly softer presence than full squares while maintaining recognizability. Category tags use full pill rounding with light gray backgrounds and darker gray text, making them scannable without competing with product content.

The coral accent (#FF6154) appears in controlled doses: primary buttons, active navigation underlines, vote counts, and stat highlights. It never serves as a background color at large scale, preserving its impact for interactive moments. On dark pages, the same coral becomes the primary light source, making statistics and calls-to-action glow against the near-black canvas.

Avatar clusters use overlapping circular images with white borders, creating social proof through density. Trophy and achievement badges use simple geometric shapes with flat fills, avoiding ornamentation that would clutter the already information-rich product rows.

## Components

### Product card

The product card is the fundamental unit of the browsing experience. It presents a product's identity, description, categorization, and community signals in a single scannable row.

- **Anatomy**: Square product icon (left), text content block (center), vote/action column (right)
- **Surface**: White background with 1px border-light border, 6px border radius
- **Typography**: Product name uses body at 600 weight in ink; description uses body-small in muted; category tags use body-small in muted-ink
- **Shape**: Full-width row with 16px internal padding, 16px gap between icon and text
- **Spacing**: 16px vertical gap between cards in a list
- **Composition**: Icon locks to 48px square; text block flexes; vote column maintains fixed width for alignment
- **Variants**: Featured state adds a subtle left border in action color; promoted products display a "Promoted" label

### Vote button

The vote button captures community endorsement with minimal friction.

- **Anatomy**: Pill-shaped button with upvote icon and count
- **Surface**: White background, 1px border in border color, transparent fill
- **Typography**: body-small, 600 weight, muted-ink color for count; icon inherits same color
- **Shape**: 9999px border radius, 0px 12px horizontal padding
- **Spacing**: 4px internal gap between icon and number
- **States**: Active/upvoted state fills background with action color and inverts text to white

### Search input

Search receives premium placement in the global header.

- **Anatomy**: Pill-shaped input with search icon and keyboard shortcut hint
- **Surface**: surface background (#F9FAFB), no visible border
- **Typography**: body size, input-text color for placeholder
- **Shape**: 9999px border radius, 40px height, 0px 40px horizontal padding
- **Composition**: Icon positioned left internally, shortcut text (⌘ + K) right-aligned in muted color

### Category tag

Tags organize products by topic without visual heaviness.

- **Anatomy**: Pill-shaped label with text only
- **Surface**: surface background, 1px border-light border
- **Typography**: body-small, Regular weight, muted color
- **Shape**: 9999px border radius, 4px 12px padding
- **Composition**: Inline flow with 8px gaps between multiple tags

### Primary button

The primary action uses the signature coral fill.

- **Anatomy**: Text label centered in pill shape
- **Surface**: action background, no border
- **Typography**: body, 600 weight, white text
- **Shape**: 9999px border radius, 8px 16px padding
- **States**: Active state maintains fill; focus state should add visible ring

### Secondary button

Secondary actions use outline treatment for hierarchy de-emphasis.

- **Anatomy**: Text label centered in pill shape
- **Surface**: White background, 1px border in border color
- **Typography**: body, Regular weight, ink-secondary color
- **Shape**: 9999px border radius, 8px 16px padding

### Stat card

Used on landing pages to display audience metrics with impact.

- **Anatomy**: Large number with small label below
- **Surface**: dark-surface background, 1px dark-border border, 12px border radius
- **Typography**: stat-number for the figure (coral color), body-small for the label (dark-muted)
- **Spacing**: 24px internal padding, 16px gap between number and label
- **Composition**: Left-aligned content within fixed-width card

### Header

The global header anchors every page with consistent navigation.

- **Anatomy**: Logo, search, navigation links, submit button, notifications, user avatar
- **Surface**: White background, 1px bottom border in border-light
- **Typography**: Navigation links use navigation token; active link may use action color
- **Spacing**: 20px vertical padding, 32px gap between major sections
- **Composition**: Flexbox row with space-between alignment; content centers within max-width container

## Responsive behavior

The design maintains its structural integrity across viewport sizes through progressive simplification. The two-column layout on listing pages collapses to single column on narrower viewports, with the sidebar either stacking below the main content or collapsing into a toggleable drawer. Product cards maintain their row-based structure but may reduce internal padding and hide secondary metadata (review counts, "used by" lists) to preserve scannability.

The search input in the header collapses to an icon-only trigger on small screens, expanding to full input on focus or tap. Navigation links consolidate into a "More" dropdown or hamburger menu, preserving the most frequent actions (Submit, Notifications, Profile) as persistent icons.

Landing page heroes remain full-width with centered text, but headline sizes scale down through the type hierarchy. Avatar clusters and stat grids reflow from horizontal to vertical stacking. The stat cards, which appear in horizontal rows on desktop, stack vertically with full-width treatment on mobile.

Touch targets maintain minimum 44px height for all interactive elements. Vote buttons expand their horizontal padding on mobile to improve tap accuracy. Product card rows increase their vertical padding slightly to prevent accidental taps between adjacent items.

## Practical implementation guidance

### Preserve
- The systematic use of 1px borders for all card and button definitions; this flat, bordered aesthetic is central to the brand
- Coral as a single accent against neutral grays; resist introducing additional brand colors
- The pill shape (9999px radius) for all primary actions, search, and tags
- Square product icons with subtle rounding (12px); this creates consistency with the platform's app-icon heritage
- The two-column listing layout with fixed-width vote column; this alignment is critical for scannable density

### Avoid
- Drop shadows on light surfaces; the design achieves depth through borders and spacing instead
- Gradient backgrounds or overlays; the palette is intentionally flat
- Rounded corners larger than 12px on cards; the 6–8px range maintains utility while softening edges
- Multiple font families; Applesystem's neutrality is a deliberate choice
- Background colors behind product card text; white-on-white with borders is the established pattern

### Recommended build order
1. Establish the 2px base unit and semantic spacing scale
2. Implement the type system with Applesystem at all defined sizes and weights
3. Build the header with search, navigation, and user actions
4. Create the product card component with icon, text, and vote button regions
5. Implement the two-column layout with main content and sidebar
6. Add the category tag and primary/secondary button components
7. Build dark mode variants for landing page surfaces
8. Implement responsive collapse behaviors for navigation and layout

### Accessibility
- Ensure all vote buttons have accessible labels indicating current state (upvote count, whether already voted)
- Maintain 4.5:1 contrast ratios for all body text; the muted-ink (#344054) on white passes, but verify lighter grays for small text
- Search input should have an accessible name and keyboard shortcut announcement
- Product icons require alt text with product name
- The coral accent on white should be reserved for large text or UI components, not small body copy
- Dark mode pages should maintain equivalent contrast ratios with adjusted text colors

## Scope note

This guide covers the product browsing experience, landing pages, and authentication flows visible in the supplied images. Mobile layouts, animation behaviors, hover states, loading skeletons, form validation states, and the complete checkout or submission flows are not represented. Measurements are derived from the documented interface values.
