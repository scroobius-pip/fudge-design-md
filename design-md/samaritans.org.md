# How samaritans.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/samaritans.org-design)

Last updated: 2026-08-10

## Captured pages

[![Full page view of Samaritans phone support page showing green header bar, white content area with contact cards, and navigation structure](https://pin.fontofweb.com/2290?format=jpg)](https://design.withfudge.com/share/pin-2290)

[Full page view of Samaritans phone support page showing green header bar, white content area with contact cards, and navigation structure](https://design.withfudge.com/share/pin-2290)

[![Close-up of green navigation button with white text reading Visit a branch showing rounded pill shape and bold typography](https://pin.fontofweb.com/2289?format=jpg)](https://design.withfudge.com/share/pin-2289)

[Close-up of green navigation button with white text reading Visit a branch showing rounded pill shape and bold typography](https://design.withfudge.com/share/pin-2289)

## Overview

The Samaritans support website presents a calm, reassuring visual system designed for accessibility and emotional clarity. The interface centers on a distinctive forest-green identity that signals trust and stability, paired with generous white space and rounded, approachable component shapes. The design prioritizes immediate comprehension for users who may be experiencing distress, using bold, clear typography and high-contrast color relationships to guide attention without visual noise.

The page structure follows a straightforward hierarchy: a persistent green navigation bar anchors the top, followed by a white content area containing contact information cards, explanatory text, and prominent call-to-action buttons. The overall impression is institutional yet warm—professional credibility balanced with human approachability. Every element serves the core mission of making help-seeking feel uncomplicated and unthreatening.

## Colors

The color system is intentionally restrained, built around a single strong brand hue that dominates the interface while supporting neutrals provide reading comfort and structural clarity.

| token | value | use |
|---|---|---|
| brand-green | #00843D | Primary navigation bar, action buttons, active states, and brand identification |
| white | #FFFFFF | Page canvas, card backgrounds, button text on green, navigation text |
| dark-ink | #1A1A1A | Primary body text, headings, and high-priority content |
| muted-ink | #4A4A4A | Secondary descriptions, supporting text, and less critical information |
| surface-warm | #F5F5F0 | Subtle section backgrounds or alternating panel tones for visual rest |

The brand-green serves as the emotional and functional anchor of the interface. It appears at full saturation in the persistent top navigation and primary action buttons, creating immediate visual recognition. Against this green, white text maintains excellent contrast for accessibility compliance. The dark-ink and muted-ink pair provides a clear typographic hierarchy without introducing additional hues, keeping the palette disciplined. The warm off-white surface tone offers a gentle alternative to pure white for extended reading sections or alternating content bands, reducing eye strain while preserving cleanliness.

## Typography

The type system relies on a single family, Ah, used across all weights and sizes to maintain cohesion. Bold weights dominate interface elements and headings, while regular weight serves longer reading passages.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Ah | 3rem | 700 | 1.1 | -0.01em | Major page titles and emotional entry points |
| section-display | Ah | 2rem | 700 | 1.2 | 0em | Content section headings and card titles |
| body | Ah | 1rem | 400 | 1.6 | 0em | Paragraph text, descriptions, and explanations |
| body-bold | Ah | 1rem | 700 | 1.6 | 0em | Emphasized inline text and important details |
| label | Ah | 0.875rem | 700 | 1.4 | 0.02em | Button text, tags, and compact UI labels |
| navigation | Ah | 1rem | 700 | 1.2 | 0em | Top-bar navigation items and menu links |

The Ah family appears in Bold for all interactive and navigational elements, creating a consistent voice of authority and clarity. The generous line height of 1.6 on body text supports readability for longer explanations about services and contact methods. Section headings at 2rem establish clear content boundaries without overwhelming the page. The slight negative letter spacing on hero-display tightens large titles optically, while the positive tracking on labels aids legibility at smaller sizes. Verify licensing for these families before production use.

## Layout

The page follows a centered, contained layout with a full-width green navigation bar that breaks the content boundary. Below the navigation, the main content area sits within a moderate-width container that prevents excessive line lengths and maintains focus.

The navigation bar spans the full viewport width with internal padding, creating a stable header that persists across pages. Within this bar, navigation items distribute horizontally with comfortable gaps, while a prominent pill-shaped action button anchors the right side for high-priority user paths.

The content area below uses vertical stacking with consistent section spacing. Contact information cards appear as distinct white panels with rounded corners, elevated slightly from the page background through their contained shape and internal padding. These cards group related information—phone numbers, availability times, and alternative contact methods—into scannable units.

Horizontal rhythm relies on generous gutters and card padding. The layout avoids dense side-by-side arrangements in favor of clear vertical flow, respecting the cognitive state of users seeking urgent support. When multiple contact options appear, they stack vertically rather than competing horizontally, reducing decision friction.

## Visual language

The visual language communicates accessibility through softness and clarity. Rounded shapes pervade the interface: pill-shaped buttons, rounded card corners, and gently curved container edges replace sharp angles that might feel clinical or harsh. This rounding extends to the primary action buttons, which use full pill shapes with generous horizontal padding, making them feel inviting and easy to target.

The green identity carries connotations of growth, safety, and go-forward action—appropriate for a crisis support service. Its saturation is strong enough for brand recognition but not so bright as to feel aggressive or commercial. Against this green, the interface maintains a predominantly white and light environment, creating breathing room around important information.

Photography and illustration, where present, likely features natural, unposed imagery with warm tones that complement the green identity. The overall aesthetic avoids decorative excess; every visual element serves wayfinding or reassurance. Shadows are minimal or absent, keeping the interface flat and honest rather than layered and abstract.

## Components

**Navigation bar**
- Anatomy: Full-width green bar containing logo mark, horizontal navigation links, and a prominent pill-shaped action button
- Surface: Solid brand-green background with no border or shadow
- Typography: Navigation token in white, bold weight for all items
- Shape: Rectangular bar with no radius; internal elements use pill shapes
- Spacing: Generous vertical padding (approximately 1rem) with horizontal padding matching content container
- Composition: Logo left-aligned, navigation links center-left, primary action right-aligned

**Primary action button**
- Anatomy: Text label centered within a fully rounded container
- Surface: Solid brand-green background with white text; no border
- Typography: Label token, bold weight, white color
- Shape: Pill shape with border-radius of 9999px
- Spacing: Vertical padding approximately 0.75rem, horizontal padding approximately 1.5rem
- Composition: Inline-flex with centered text; appears standalone or in navigation bar

**Content card**
- Anatomy: Container with heading, body text, and optional action link or button
- Surface: White background with subtle or no border; may have light shadow or flat presentation
- Typography: Section-display for card title, body for description text
- Shape: Rounded corners at approximately 0.75rem
- Spacing: Internal padding of approximately 1.5rem on all sides
- Composition: Vertical stack with title at top, content below, action at bottom if present

**Contact information block**
- Anatomy: Grouping of phone number, availability hours, and explanatory note
- Surface: Typically presented within a content card or as a distinct white panel
- Typography: Section-display or body-bold for the phone number itself; body for supporting details
- Shape: Follows parent container rounding
- Spacing: Tight vertical stacking with small gaps between related items
- Composition: Phone number most prominent, followed by availability, then explanatory context

## Responsive behavior

The layout should maintain its single-column vertical stack on narrow viewports, with navigation collapsing to a hamburger menu or simplified priority-plus pattern. The green navigation bar remains full-width with reduced internal padding. Content cards expand to fill available width with maintained internal padding.

Pill-shaped buttons should remain fully rounded at all sizes, with touch targets expanding to at least 44px height for mobile accessibility. Typography scales down proportionally: hero-display may reduce to 2rem, section-display to 1.5rem, while body text remains at 1rem for readability.

Section spacing should compress from 4rem to approximately 2.5rem on mobile to respect shorter viewport heights. Card padding may reduce slightly but should not fall below 1rem to maintain content breathing room.

## Practical implementation guidance

**Preserve**
- The distinctive brand-green as the sole accent color; do not introduce competing hues
- Full pill shapes for primary actions; partial rounding feels inconsistent with the system's softness
- Bold weight for all navigation and button text; this is a core voice characteristic
- Generous white space around contact information; density undermines the calming intent

**Avoid**
- Sharp-cornered buttons or cards; they contradict the approachable visual strategy
- Multiple competing actions in the same view; prioritize a single clear path
- Decorative gradients or shadows that add visual complexity without functional benefit
- Color combinations that reduce contrast below WCAG AA standards, particularly green-on-white or white-on-green pairings

**Recommended build order**
1. Establish the color tokens and apply brand-green to a full-width navigation bar
2. Implement the Ah family at all weights and verify bold rendering in buttons and navigation
3. Create the pill button component with proper padding and full border-radius
4. Build the content card with rounded corners and internal spacing
5. Compose the contact information layout with clear typographic hierarchy
6. Add responsive behavior for navigation collapse and type scaling

**Accessibility**
- Maintain minimum 4.5:1 contrast ratio for all text against its background
- Ensure interactive elements have visible focus indicators, preferably using the brand-green with adjusted brightness or outline
- Provide skip navigation links for keyboard users
- Use semantic heading hierarchy without level gaps
- Ensure phone numbers are clickable tel: links on supported devices
- Test color independence: information should not rely solely on green color coding

## Scope note

This guide covers the visible phone support page and navigation elements from the supplied images. Footer content, form interactions, additional service pages, and mobile-specific layouts are not represented. Motion, hover states, and loading behavior are not documented. Measurements are practical adaptation targets derived from visual inspection.
