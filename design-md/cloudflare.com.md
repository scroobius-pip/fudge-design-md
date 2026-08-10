# How cloudflare.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cloudflare.com-design)

Last updated: 2026-08-10

## Captured pages

[![Personal plan hero with orange Cloudflare logo, navigation bar, and illustrated character with laptop on white background](https://pin.fontofweb.com/1249?format=jpg)](https://design.withfudge.com/share/pin-1249)

[Personal plan hero with orange Cloudflare logo, navigation bar, and illustrated character with laptop on white background](https://design.withfudge.com/share/pin-1249)

[![Free plan features grid showing CDN, DNS, WAF, and analytics with orange accent links and signup button](https://pin.fontofweb.com/1248?format=jpg)](https://design.withfudge.com/share/pin-1248)

[Free plan features grid showing CDN, DNS, WAF, and analytics with orange accent links and signup button](https://design.withfudge.com/share/pin-1248)

[![Customer trust logos section with ao.com, Shopify, OkCupid, and other brand marks on clean white surface](https://pin.fontofweb.com/1247?format=jpg)](https://design.withfudge.com/share/pin-1247)

[Customer trust logos section with ao.com, Shopify, OkCupid, and other brand marks on clean white surface](https://design.withfudge.com/share/pin-1247)

[![FAQ accordion with orange plus-minus icons, expanded answer text, and underlined link to full FAQs page](https://pin.fontofweb.com/1246?format=jpg)](https://design.withfudge.com/share/pin-1246)

[FAQ accordion with orange plus-minus icons, expanded answer text, and underlined link to full FAQs page](https://design.withfudge.com/share/pin-1246)

## Overview

Cloudflare's marketing site presents a confident, approachable visual system built for explaining complex infrastructure to a broad audience. The design relies on stark white backgrounds, high-contrast dark typography, and a single energetic orange accent that carries all interactive energy. The overall impression is one of clarity and trustworthiness—enterprise credibility delivered through friendly illustration and restrained, purposeful color.

The system balances density with breathing room. Hero sections pair oversized headlines with generous whitespace and character-driven illustrations. Feature grids use clean two-column layouts with clear hierarchy. Navigation remains minimal and unobtrusive, letting content drive attention. The orange accent appears selectively: primary calls-to-action, text links, and small functional icons like accordion toggles. This disciplined use of color makes every orange element feel intentional and actionable.

Typography is exclusively Inter, used across all weights from thin navigation labels to bold display headlines. The type scale is restrained, with clear jumps between display, body, and label sizes. Rounded corners are modest and consistent, appearing on buttons and cards but never becoming a dominant visual feature. The overall effect is a system that feels modern, accessible, and technically credible without coldness.

## Colors

The palette is intentionally minimal: a near-white canvas, near-black ink, and a vibrant orange that performs all accent duties. Supporting neutrals handle borders and subtle backgrounds. Every color serves a clear functional role, with the orange reserved exclusively for interactive and emphasized elements.

| token | value | use |
|---|---|---|
| canvas | #FFFFFF | Primary page background, card surfaces, button text on dark |
| ink | #1D1D1D | Primary headings, body text, logo mark |
| muted-ink | #4A4A4A | Secondary descriptions, supporting text, logo subtitles |
| action | #F6821F | Primary buttons, text links, accordion icons, CTA emphasis |
| action-hover | #E57416 | Button hover states, link hover |
| surface-warm | #FFF8F0 | Subtle warm tint for featured sections or highlights |
| border-light | #E5E5E5 | Dividers, accordion borders, card outlines |
| border-medium | #D1D1D1 | Secondary button borders, input borders |

The orange (#F6821F) is the system's signature. It appears in the Cloudflare logo mark, primary "Sign up" and "Contact sales" buttons, underlined "Learn more" links, and the plus-minus icons in accordions. This concentration makes the color synonymous with action throughout the interface.

Dark text on white provides maximum readability for long-form content. The near-black ink avoids the harshness of pure black while maintaining strong contrast. Muted ink appears sparingly for secondary descriptions and in the "jetBlue travel products" style of logo attribution.

The warm surface tone appears in illustration backgrounds and could extend to section highlights, though it remains subtle in the visible pages. Border colors are light enough to separate content without drawing attention.

## Typography

Inter, designed by Rasmus Andersson and distributed by Rsms, is the sole typeface. The system uses a range of weights from Regular to Bold, with Semibold handling most emphasis and Bold reserved for display headlines. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3rem | 700 | 1.1 | -0.02em | Page headlines, hero titles |
| section-display | Inter | 2.25rem | 700 | 1.15 | -0.01em | Section headings, "What's included" |
| body-large | Inter | 1.125rem | 400 | 1.6 | 0 | Hero descriptions, introductory paragraphs |
| body | Inter | 1rem | 400 | 1.6 | 0 | Feature descriptions, accordion answers |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0 | Feature details, metadata |
| label | Inter | 0.75rem | 600 | 1.4 | 0.05em | "FREE PLAN" category labels, badges |
| navigation | Inter | 0.875rem | 500 | 1.4 | 0 | Top nav items, secondary actions |

Display sizes use tight negative tracking for a modern, compact feel. Body text maintains generous line height for readability across long descriptions. The label style is distinctly small-caps in spirit, with uppercase text and slightly wider tracking, though the visible "FREE PLAN" appears to use natural case with the label size and weight.

Navigation uses medium weight at body-small size, creating clear hierarchy without competing with headlines. Buttons use the body size at regular weight, letting color and shape carry the interactive signal rather than bold text.

## Layout

The layout system follows a centered, max-width container with consistent section padding. Content rarely touches viewport edges, maintaining a premium, breathable feel even in information-dense sections.

The page grid uses a single centered column for hero content, transitioning to asymmetric two-column layouts for features and mixed content. The hero section places headline and description on the left with illustration on the right, creating a natural reading flow. Feature grids like "What's included" use a narrow left sidebar for section title and illustration, with a wider right area for the feature grid.

Section spacing is generous. Major sections receive substantial vertical padding, typically 5rem or more, creating clear separation between topics. Within sections, component gaps of 1.5rem maintain relatedness without crowding.

The navigation bar spans full width with internal max-width constraints. Logo sits left, primary navigation center-left, utility actions right. The "Log in" and "Contact sales" buttons cluster together, with the primary action receiving the orange fill and the secondary action remaining outlined.

Content alignment is predominantly left-aligned, even in centered hero sections where the text block itself is left-aligned within its container. This creates a consistent reading edge and professional tone. The FAQ section uses full-width items with internal padding, accordion toggles right-aligned within each row.

## Visual language

Illustration style is friendly and character-driven, with flat vector art in warm orange and coral tones. The personal plan hero shows a figure with headphones at a laptop, surrounded by small lifestyle details—a cat, a cap, a drink. This humanizes infrastructure technology and aligns with the "personal" positioning. Feature illustrations like the DNS laptop with orbiting icons use the same warm palette with simple geometric shapes.

Photography and logos appear in a dedicated trust section, rendered in grayscale or original brand colors against white. The logo grid uses consistent sizing and spacing, with no borders or backgrounds, letting the marks speak directly. This treatment feels confident—Cloudflare doesn't need visual tricks to establish credibility.

Iconography is minimal and functional. The accordion uses simple plus and minus marks in orange, with no circle container or background. Navigation lacks icons entirely, relying on text clarity. The overall approach favors words over symbols, appropriate for a technical audience.

Motion and interaction are implied rather than visible in still images. The accordion's plus-to-minus transition suggests smooth state changes. Buttons appear to have subtle hover states through color shift. No heavy animation or parallax is suggested by the static compositions.

## Components

### Primary Button

- **Anatomy**: Text label centered within a filled rectangular shape
- **Surface**: Solid action orange background (#F6821F) with white text
- **Typography**: body token, weight 400, white
- **Shape**: 0.5rem border radius, no border
- **Spacing**: 0.875rem vertical padding, 1.5rem horizontal padding
- **Composition**: Typically left-aligned in hero, full-width in narrow contexts
- **Variants**: "Sign up for free" and "Contact sales" share identical styling

### Secondary Button

- **Anatomy**: Text label within outlined rectangular shape
- **Surface**: White background with medium gray border (#D1D1D1), dark text
- **Typography**: body token, weight 400, ink color
- **Shape**: 0.5rem border radius, 1px border
- **Spacing**: Matches primary button padding
- **Composition**: Appears adjacent to primary button in navigation

### Feature Grid Item

- **Anatomy**: Bold title, description paragraph, underlined "Learn more" link
- **Surface**: Transparent or white background, no visible card container
- **Typography**: Title uses body at weight 600 or section-display at smaller size; description uses body; link uses body with action color and underline
- **Shape**: No border radius, separated by light horizontal rules
- **Spacing**: Generous internal padding, typically 1.5rem between title and description
- **Composition**: Two-column grid within right content area, stacked on narrow viewports
- **Variants**: CDN, DNS, WAF, Analytics, Bot protection, DDoS protection, IP-based rate limiting all share identical structure

### Accordion

- **Anatomy**: Question text left, toggle icon right, expandable answer below
- **Surface**: White background, separated by light horizontal rules (#E5E5E5)
- **Typography**: Question uses body at weight 600; answer uses body at weight 400 with generous line height
- **Shape**: Full-width items, no border radius
- **Spacing**: 1.25rem vertical padding per item, answer indented or flowing below with additional padding
- **Composition**: Stacked vertically with consistent divider lines
- **States**: Collapsed shows plus icon (+), expanded shows minus icon (−), both in action orange

### Navigation Bar

- **Anatomy**: Logo left, text links center-left, utility buttons right
- **Surface**: White background, no visible border or shadow
- **Typography**: navigation token for links, body for buttons
- **Shape**: Full-width bar, no border radius
- **Spacing**: Generous horizontal padding, items spaced with gap of approximately 2rem
- **Composition**: Flex row with space-between alignment on outer container

### Section Label

- **Anatomy**: Small uppercase or emphasized text preceding major heading
- **Surface**: Transparent
- **Typography**: label token, action color
- **Shape**: No background or border
- **Spacing**: Tight margin below label, larger gap to preceding content
- **Composition**: Left-aligned above section heading, as seen with "FREE PLAN" above "What's included"

## Responsive behavior

The visible pages suggest a desktop-first approach with clear adaptation paths. The hero section's two-column layout (text left, illustration right) should stack vertically on narrower viewports, with illustration moving below text. The feature grid's sidebar-and-content layout should similarly collapse to a single column, with the illustration and section title preceding the feature list.

Navigation likely collapses to a hamburger menu on mobile, given the number of items and the prominence of utility buttons. The "Log in" and "Contact sales" actions should remain accessible, possibly as icon-only or stacked below the menu.

Accordion items maintain their full-width structure across breakpoints, with touch targets expanding to accommodate finger interaction. The plus-minus icons should scale slightly or maintain minimum 44×44 tap areas.

Typography scales down modestly on smaller screens. The hero-display token may reduce to 2rem or 2.25rem, preserving hierarchy without overwhelming narrow viewports. Body text remains at 1rem for readability, with line height increasing slightly for touch scrolling.

Button widths should adapt from fixed or content-width to full-width in narrow containers, particularly for primary CTAs. The "Sign up free" button in the feature sidebar appears full-width in its narrow column, suggesting this pattern extends naturally to mobile.

## Practical implementation guidance

### Preserve
- The strict orange discipline: one accent color for all interactive and emphasized elements
- Generous whitespace around sections and between components
- Left-aligned text blocks even in centered containers
- Inter at all sizes with negative tracking on display text
- Flat illustration style with warm orange-coral palette
- Light horizontal rules as the primary content separator

### Avoid
- Adding secondary accent colors that compete with the orange
- Heavy shadows or dimensional effects on cards and buttons
- Pure black text (#000000) instead of the softer near-black ink
- Icon-heavy navigation that duplicates text labels
- Tight line height on body text that harms readability
- Card containers with heavy borders or backgrounds for feature items

### Recommended Build Order
1. Establish the color tokens and apply canvas and ink as base page styles
2. Set up Inter with the full type scale, testing display sizes with negative tracking
3. Build the navigation bar with logo, links, and both button variants
4. Create the hero section with two-column layout and illustration placement
5. Implement the feature grid with title-description-link pattern
6. Add the accordion with plus-minus toggle states
7. Polish with section spacing, border rules, and responsive breakpoints

### Accessibility
- Ensure the orange action color meets contrast requirements against white; if it falls short for small text, use it only for large buttons and links with additional underline indicators
- Maintain visible focus states on buttons and links, likely using a dark outline or offset ring
- Accordion toggles should be keyboard-activatable with clear aria-expanded states
- Logo images in the trust section require appropriate alt text or aria-labels
- Body text at 1rem with 1.6 line height supports comfortable reading for low-vision users
- Consider a reduced-motion preference for any accordion expand-collapse animation

## Scope note

This guide covers the marketing page surfaces visible in the supplied images: the personal plan landing page, small business page, and homepage sections including hero, features, trust logos, and FAQ. Pricing tables, documentation, dashboard interfaces, and mobile-specific layouts are not represented. Footer content, search functionality, and account management flows fall outside this scope. Measurements are practical adaptation targets derived from visual inspection of the desktop interface.
