# How uber.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/uber.com-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with ride booking form, city illustration, and six suggestion cards for Ride, Reserve, Rental Cars, Courier, Food, and Grocery services](https://pin.fontofweb.com/2483?format=jpg)](https://design.withfudge.com/share/pin-2483)

[Homepage hero with ride booking form, city illustration, and six suggestion cards for Ride, Reserve, Rental Cars, Courier, Food, and Grocery services](https://design.withfudge.com/share/pin-2483)

[![Dark footer with four-column link grid, social icons, app store badges, language and city selectors, and a sticky bottom See prices bar](https://pin.fontofweb.com/2448?format=jpg)](https://design.withfudge.com/share/pin-2448)

[Dark footer with four-column link grid, social icons, app store badges, language and city selectors, and a sticky bottom See prices bar](https://design.withfudge.com/share/pin-2448)

[![Plan for later section with Reserve and Rent toggle pills, date-time inputs on a teal background, and a benefits sidebar with icon list](https://pin.fontofweb.com/2447?format=jpg)](https://design.withfudge.com/share/pin-2447)

[Plan for later section with Reserve and Rent toggle pills, date-time inputs on a teal background, and a benefits sidebar with icon list](https://design.withfudge.com/share/pin-2447)

[![Account login prompt with primary and secondary actions beside an illustration of two people in a car with blue and black clothing](https://pin.fontofweb.com/2446?format=jpg)](https://design.withfudge.com/share/pin-2446)

[Account login prompt with primary and secondary actions beside an illustration of two people in a car with blue and black clothing](https://design.withfudge.com/share/pin-2446)

## Overview

The Uber homepage presents a product-first experience where ride booking, service discovery, and account conversion share equal visual weight. The system relies on stark black-and-white contrast, generous whitespace, and a single custom typeface to create immediate clarity across dense functional surfaces. Content alternates between light canvas backgrounds and occasional muted or accent panels, with illustration and photography providing the only chromatic relief. The overall impression is utilitarian and confident: every element exists to move a user toward a ride, delivery, or account action.

The hero section dominates the viewport with a two-column composition. On the left, a booking form with pickup and dropoff fields, date and time selectors, and a primary action button stacks vertically beneath a large headline. On the right, a detailed city illustration with a vehicle and pedestrians establishes context without competing for attention. Below the hero, a grid of suggestion cards surfaces additional services. Further down, promotional sections alternate between light and accent backgrounds, each pairing a functional form or call-to-action with editorial illustration. The footer inverts the entire palette to black, creating a definitive end to the page.

## Colors

The color system is intentionally restrained. Black and white handle nearly all interface roles, with a single cool accent and a light gray for secondary surfaces. This discipline ensures that product photography and illustration remain the primary sources of color and personality.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, active navigation, footer background, primary button fill |
| canvas | #ffffff | Page background, card text on dark surfaces, footer text |
| muted-surface | #f3f3f3 | Input fields, suggestion card backgrounds, secondary button hover |
| accent-teal | #96cfd9 | Promotional section backgrounds, as seen in the Reserve panel |
| action | #000000 | Primary button and high-emphasis interactive backgrounds |
| action-text | #ffffff | Text on primary buttons and dark surfaces |
| border | #e5e5e5 | Subtle dividers, secondary button outlines, input borders when focused |

The interface operates in a light mode throughout. Dark surfaces appear only in the footer and in primary action buttons, creating high-contrast moments that guide attention. The accent teal functions as a contained background color for specific promotional modules rather than a global brand accent, keeping its use intentional and limited. Illustrations and photography introduce warmer and cooler tones that complement this neutral foundation without requiring additional UI tokens.

## Typography

Uber Move, designed by Jeremy Mickel of MCKL Type Foundry, is the sole typeface. It appears in Medium weight for headlines, navigation, labels, and buttons, and Regular weight for body copy and longer descriptive text. The face is geometric and open, with a large x-height that maintains legibility at small sizes. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Uber Move | 3.5rem | 500 | 1.1 | -0.02em | Homepage headline, major section titles |
| section-display | Uber Move | 2rem | 500 | 1.2 | -0.01em | Subsection headings, card group titles |
| body | Uber Move | 1rem | 400 | 1.5 | 0em | Descriptions, form labels, footer links |
| label | Uber Move | 0.875rem | 500 | 1.25 | 0em | Buttons, navigation items, card titles |
| navigation | Uber Move | 0.875rem | 500 | 1.25 | 0em | Header menu, footer category headers |
| legal-copy | Uber Move | 0.75rem | 400 | 1.5 | 0em | Copyright, terms links, fine print |

The type scale builds from a 0.25rem unit. Hero display at 3.5rem (56px) provides commanding presence in the hero. Section display at 2rem (32px) separates content groups. Body at 1rem (16px) serves as the readable baseline. Label and navigation share the 0.875rem (14px) size with Medium weight, creating a consistent functional layer. Legal copy at 0.75rem (12px) handles auxiliary information. Tight negative tracking on display sizes adds density and confidence without sacrificing clarity.

## Layout

The page uses a centered content container with generous horizontal margins that expand on wider viewports. The hero occupies a full-width band with internal two-column asymmetry: the booking form takes roughly 45 percent of the width while the illustration fills the remaining 55 percent. This ratio keeps the functional left side compact and scannable while allowing the editorial right side to breathe.

Below the hero, suggestion cards arrange in a three-column grid with consistent gaps. Each card maintains internal horizontal padding and stacks a title, description, and action button above a right-aligned illustration. The grid gutters match the card internal padding, creating rhythmic squares of negative space.

Promotional sections alternate layout direction. The Reserve panel places its form on a teal background with rounded corners, while a benefits sidebar sits adjacent on the white canvas. The account login section returns to the two-column pattern with text and buttons left and illustration right. The footer spans full width with a black background, organizing links into four equal columns above social icons, app store badges, and legal links.

Vertical spacing between major sections measures approximately 5rem, creating clear territorial boundaries without excessive distance. Within sections, content gaps of 1.5rem separate related elements.

## Visual language

Illustration defines the visual personality. Characters and vehicles appear in flat, geometric style with minimal shading and bold color blocking. The hero illustration shows a blue vehicle, pedestrians in warm earth tones, and a city skyline in cool grays and blues. The account section features two figures in a car, one in bright blue clothing against a light gray background. These illustrations are contained within rounded rectangular frames that echo the card and panel shapes elsewhere.

Photography appears sparingly, primarily in suggestion card thumbnails where small product images represent services like rental cars and grocery delivery. These images use soft shadows and neutral backgrounds to integrate with the muted-surface cards.

Iconography is simple and functional: location pins, calendar and clock symbols for date-time selectors, and small benefit icons in the sidebar. Icons share the ink color with surrounding text and maintain a consistent stroke weight.

The overall aesthetic balances corporate reliability with approachable warmth. The strict black-and-white interface provides the structure; the illustration and photography provide the humanity.

## Components

### Primary action button

- **Anatomy**: Text label centered within a fully rounded pill shape.
- **Surface**: Solid black fill with white text.
- **Typography**: `{typography.label}` at Medium weight.
- **Shape**: Pill border radius of 9999px.
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding.
- **Composition**: Appears standalone or stacked above secondary actions; in the hero it sits beside a text link.
- **Variants**: The sticky bottom bar on mobile uses the same treatment at full width.

### Secondary action button

- **Anatomy**: Text label within a pill outline.
- **Surface**: Transparent background with black text and a light gray border.
- **Typography**: `{typography.label}` at Medium weight.
- **Shape**: Pill border radius of 9999px.
- **Spacing**: Matches primary button padding.
- **Composition**: Used for lower-priority actions like "Create an account" or toggled states like "Rent" in the Reserve panel.

### Suggestion card

- **Anatomy**: Title, description paragraph, and "Details" pill button stacked vertically; illustration positioned to the right.
- **Surface**: `{colors.muted-surface}` background with `{rounded.panel}` corners.
- **Typography**: Title uses `{typography.label}`, description uses `{typography.body}`.
- **Shape**: 0.75rem border radius.
- **Spacing**: 1.5rem internal padding.
- **Composition**: Three-column grid with equal gaps; illustration occupies roughly 40 percent of card width.

### Input field

- **Anatomy**: Icon prefix, placeholder or value text, and optional suffix icon or dropdown chevron.
- **Surface**: `{colors.muted-surface}` background with `{rounded.input}` corners.
- **Typography**: `{typography.body}` at Regular weight.
- **Shape**: 0.5rem border radius.
- **Spacing**: 0.75rem vertical padding, 1rem horizontal padding.
- **Composition**: Stacked vertically in forms with 0.5rem gaps; date and time selectors appear side by side.

### Footer

- **Anatomy**: Logo, help link, four-column link grid, social icon row, app store badges, language and city selectors, legal links.
- **Surface**: Full-width black background with white text.
- **Typography**: Category headers use `{typography.navigation}` at Medium weight; links use `{typography.body}` at Regular weight.
- **Shape**: No border radius; full-bleed to viewport edges.
- **Spacing**: Generous internal padding with 5rem top margin separating from content above.
- **Composition**: Four equal columns for link categories; bottom row distributes social icons left and selectors right.

## Responsive behavior

The two-column hero layout should stack vertically on narrower viewports, with the booking form preceding the illustration. The suggestion card grid should collapse from three columns to two, then to a single column with full-width cards. The footer link grid should reduce to two columns, then to a single stacked list.

The sticky "See prices" bar visible in the footer image suggests a persistent mobile action pattern. This full-width bar should maintain the primary button treatment and remain fixed to the viewport bottom on small screens.

Text sizes should scale down modestly: hero display may reduce to 2.5rem, section display to 1.5rem. Body and label sizes can remain fixed due to their already compact dimensions.

## Practical implementation guidance

### Preserve
- The stark black-and-white contrast as the foundational palette; it creates immediate recognizability.
- The single typeface approach; Uber Move in two weights handles all hierarchy.
- The rounded pill shape for all primary and secondary actions; this is a signature interaction pattern.
- The muted gray surface for input fields and suggestion cards; it creates subtle elevation without shadows.
- The geometric illustration style with flat color blocking and minimal detail.

### Avoid
- Adding additional accent colors beyond the contained teal; the system's strength is its restraint.
- Using shadows to create depth; the design relies on color contrast and spacing instead.
- Mixing in additional typefaces or weights beyond Regular and Medium.
- Making the footer anything other than black; the palette inversion is intentional and definitive.

### Recommended build order
1. Establish the type scale with Uber Move at root sizes.
2. Implement the color tokens with black, white, muted gray, and accent teal.
3. Build the pill button component with primary and secondary variants.
4. Create the input field with icon prefix support.
5. Assemble the hero section with two-column layout and stacked form.
6. Implement the suggestion card grid.
7. Build the footer with four-column link grid and full-width dark surface.
8. Add illustration containers with rounded corners and responsive aspect ratios.

### Accessibility
- Ensure all text on the black footer meets WCAG AA contrast ratios; white on black exceeds this requirement.
- The muted-surface inputs should maintain a visible focus state, likely a 2px black outline or border shift.
- Pill buttons should have a minimum touch target of 44px height; the current padding achieves this.
- Illustrations should include descriptive alt text when they convey meaningful context beyond decoration.
- The sticky bottom bar should not obscure focusable content; ensure adequate scroll padding.

## Scope note

This guide covers the Uber homepage and its primary conversion surfaces: ride booking, service suggestions, account prompts, and the global footer. Interior pages, driver onboarding flows, map interfaces, and motion behaviors are not represented in the supplied material. Measurements are practical adaptation targets derived from visible composition. The exact breakpoint behavior, form validation states, and live map interactions would require additional research to document precisely.
