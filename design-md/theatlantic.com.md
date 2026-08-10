# How theatlantic.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/theatlantic.com-design)

Last updated: 2026-08-10

## Captured pages

[![World Edition homepage with red Atlantic logo, hamburger menu, navigation bar, and three-column article grid featuring photography and serif headlines](https://pin.fontofweb.com/8964?format=jpg)](https://design.withfudge.com/share/pin-8964)

[World Edition homepage with red Atlantic logo, hamburger menu, navigation bar, and three-column article grid featuring photography and serif headlines](https://design.withfudge.com/share/pin-8964)

[![Subscription modal with red SUBSCRIBE and START FREE TRIAL buttons, centered OR divider, and italic Atlantic branding in a clean white dialog](https://pin.fontofweb.com/6191?format=jpg)](https://design.withfudge.com/share/pin-6191)

[Subscription modal with red SUBSCRIBE and START FREE TRIAL buttons, centered OR divider, and italic Atlantic branding in a clean white dialog](https://design.withfudge.com/share/pin-6191)

[![Article paywall banner with red warning text, blue SIGN_IN link, and right-aligned Subscribe Now text with red underline on white background](https://pin.fontofweb.com/2764?format=jpg)](https://design.withfudge.com/share/pin-2764)

[Article paywall banner with red warning text, blue SIGN_IN link, and right-aligned Subscribe Now text with red underline on white background](https://design.withfudge.com/share/pin-2764)

[![Expanded paywall banner showing italic Atlantic branding, red SUBSCRIBE NOW button, and blue sign-in link with dropdown chevron](https://pin.fontofweb.com/2763?format=jpg)](https://design.withfudge.com/share/pin-2763)

[Expanded paywall banner showing italic Atlantic branding, red SUBSCRIBE NOW button, and blue sign-in link with dropdown chevron](https://design.withfudge.com/share/pin-2763)

## Overview

The Atlantic's design system is built around the tension between editorial heritage and contemporary clarity. The visual language centers on classical serif typography for headlines and body text, paired with a clean sans-serif for navigation and functional labels. A distinctive red brand mark—an oversized italic "A"—anchors the masthead, while the wordmark "The Atlantic" appears in an elegant italic script below it. The overall impression is one of intellectual authority: generous white space, disciplined grids, and photography that carries visual weight without competing with the text. The system supports both light and dark contexts, with the primary interface defaulting to black text on white canvas, while promotional and paywall surfaces can invert to white text on dark backgrounds. Every element serves the reading experience, from the measured line heights of the Garamond family to the tight letter-spacing of the monospace labels that denote section categories and author credits.

## Colors

The palette is intentionally restrained, drawing impact from a single strong red against neutral grounds.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headlines, body copy, and iconography |
| canvas | #FFFFFF | Page background, card surfaces, and modal dialogs |
| action | #E7131A | Primary buttons, brand mark, section labels, and promotional accents |
| action-hover | #D0021B | Button hover states and active navigation elements |
| muted | #DBDBDB | Hairline borders, dividers, and secondary separators |

The red action color carries the brand's identity, appearing in the masthead "A," subscription buttons, and category labels such as "EXCLUSIVE." It is used with precision—never as a background wash, always as a deliberate accent. The muted gray serves horizontal rules and the subtle borders that separate article cards without creating visual heaviness. Dark mode contexts, visible in navigation overlays, invert the relationship: white text on black grounds with the same red preserved for calls to action.

## Typography

The system employs five distinct type families: A Garamond Pro, Adobe Garamond Pro, Graphik, Logic Monospace, and Applesystem. Applesystem appears in the design facts as a detected family at 14px in unknown regions, likely serving as a system-ui fallback for interface elements rather than a primary design voice. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | A Garamond Pro | 2.375rem | 400 | 1.16 | normal | Lead article headlines, major feature titles |
| section-display | A Garamond Pro | 1.5rem | 400 | 1.33 | normal | Article card headlines, secondary features |
| body | Adobe Garamond Pro | 1.375rem | 400 | 1.5 | normal | Article body text, long-form reading |
| body-small | A Garamond Pro | 1.125rem | 400 | 1.44 | normal | Card descriptions, tertiary headlines |
| label | Logic Monospace | 0.8125rem | 500 | 1 | 0.038em | Section tags, author credits, timestamps |
| navigation | Graphik | 0.875rem | 400 | 1.15 | 0.018em | Top-bar links, utility navigation |
| navigation-large | Graphik | 1rem | 400 | 1.15 | 0.016em | Primary section navigation, sign-in links |

A Garamond Pro and Adobe Garamond Pro share a classical lineage with subtle differences in cut and spacing; the Adobe variant is reserved for extended reading passages where its slightly more open counters aid legibility at the 22px body size. Graphik, designed by Christian Schwartz and available from Commercial Type, provides the sans-serif backbone for all navigation and functional text—its neutral geometry prevents competition with the serif headlines. Logic Monospace handles metadata with mechanical precision; its 13px size and 0.5px letter-spacing create a distinct hierarchy layer that reads as editorial infrastructure rather than content. The italic wordmark "The Atlantic" appears as a custom logotype, not drawn from the standard Garamond italic.

## Layout

The layout system is built on a centered container with generous external margins and consistent internal gutters. The main content area is constrained by horizontal margins of 212.5px on each side—approximately 13.3rem—creating a narrow, focused reading column that reinforces the publication's deliberate pace. Within this container, content organizes into flexible grids.

The homepage employs a three-column architecture: a narrow left rail for secondary articles, a dominant center column for the lead feature, and a matching narrow right rail for additional stories. This asymmetry—center-weighted with supporting columns—creates visual hierarchy without relying on size alone. Article cards within these columns stack vertically with 40px row gaps and 32px column gaps, maintaining rhythm across the page.

Section dividers appear as 1px solid lines in muted gray, spanning the full content width. The masthead sits above a hairline border, with the navigation bar containing hamburger menu, search, section links, and utility actions (Sign In, Subscribe) distributed across its width. The Atlantic's red "A" mark and italic wordmark occupy the absolute center of the masthead, creating a symmetrical anchor that contrasts with the asymmetrical content grid below.

Vertical spacing follows a modular scale: 20px between related elements, 32px between distinct article groupings, 40px between major sections, and 48px before structural breaks. This progression creates predictable breathing room without excessive white space that would fragment the reading flow.

## Visual language

Photography and illustration carry substantial weight in the composition. Images appear at full column width with no border radius, their rectangular edges aligning with the system's typographic rectangles. Captions sit directly beneath images in Logic Monospace at label size, often including attribution to photographers or illustrators. The visual treatment favors documentary realism—portraits, reportage, and conceptual illustration—over stylized or filtered photography.

The red brand mark operates as both logo and navigational beacon. The oversized italic "A" dominates the masthead center, its color matching the action buttons and category labels below. This chromatic threading unifies the page vertically. The italic wordmark beneath the "A" echoes the italic styling used for "The Atlantic" within subscription messaging, creating a consistent voice even across functional surfaces.

Borders are used sparingly and precisely: 1px hairlines in muted gray separate sections, while buttons receive 4px radius corners that soften their geometry without becoming pill-shaped. The overall effect is one of editorial restraint—every decorative element earns its place through function.

## Components

### Masthead

- **Anatomy**: Horizontal bar containing hamburger menu (left), search icon, section links (Popular, Latest, Newsletters), centered red "A" mark with italic "The Atlantic" wordmark below, and utility actions (Sign In, Subscribe) aligned right.
- **Surface**: White background with 1px bottom border in muted gray.
- **Typography**: Navigation links use Graphik at 14px; the wordmark is a custom italic logotype.
- **Spacing**: 20px vertical padding; 32px horizontal padding on inner containers; 40px top margin on navigation lists below the logo.

### Article card

- **Anatomy**: Vertical stack containing image (full width), optional caption in Logic Monospace, headline in A Garamond Pro, and author credit in Logic Monospace.
- **Surface**: White background; no border or shadow.
- **Typography**: Headlines use section-display (24px) or hero-display (38px) for lead features; author names use label token with all-caps treatment and expanded tracking.
- **Spacing**: 20px gap between image and headline; 12px between headline and author; 40px bottom margin between cards.

### Subscription prompt

- **Anatomy**: Centered modal or banner with italic branding ("Keep reading *The Atlantic*"), headline in A Garamond Pro, two-column layout with OR divider, and paired action buttons.
- **Surface**: White background; vertical 1px divider in ink between columns.
- **Typography**: Headline uses section-display; body text uses body-small; buttons use label token with all-caps treatment.
- **Shape**: Buttons have 4px border radius.
- **Composition**: Two equal columns with centered text; buttons span approximately half column width each.

### Paywall banner

- **Anatomy**: Full-width bar with warning text left ("THIS IS YOUR LAST FREE ARTICLE"), sign-in link, and Subscribe Now action right.
- **Surface**: White background; red text for warnings; blue text for links.
- **Typography**: Warning uses label token in action color; sign-in uses navigation token; Subscribe Now uses section-display with 1px bottom border in action color.
- **States**: Expanded variant reveals additional copy ("Never miss a story from *The Atlantic*") and a full red SUBSCRIBE NOW button.

### Primary button

- **Anatomy**: Text label centered within rectangular button.
- **Surface**: Action red background with white text.
- **Typography**: Logic Monospace, 13px, weight 500, all caps, 0.5px letter-spacing.
- **Shape**: 4px border radius.
- **Spacing**: 10px top padding, 18px horizontal padding, 11px bottom padding.

## Responsive behavior

The three-column homepage grid should collapse to a single column on narrow viewports, with the center feature stacking above the side rails. The masthead navigation links (Popular, Latest, Newsletters) should hide behind the hamburger menu at reduced widths, preserving only the logo, search, and Subscribe action. The subscription modal's two-column layout should stack vertically on mobile, with the OR divider converting to a horizontal rule. Article body text should maintain its 22px size across breakpoints, with margins reducing proportionally to preserve line length for readability. The 212.5px side margins should scale down to approximately 16-24px on mobile devices.

## Practical implementation guidance

### Preserve
- The classical serif/sans-serif pairing; the editorial authority depends on this contrast.
- The centered red "A" mark and italic wordmark as the absolute masthead center.
- Generous white space and the narrow content column; rushing the margins destroys the reading pace.
- All-caps Logic Monospace labels for metadata; this mechanical voice is signature to the brand.
- The precise red (#E7131A) across all brand touchpoints.

### Avoid
- Rounded corners on images or cards; the system uses sharp rectangles throughout.
- Drop shadows on cards or modals; rely on white space and borders for separation.
- Multiple accent colors beyond the established red; the palette gains power from restraint.
- Body text smaller than 18px; the Garamond family needs room to breathe.

### Recommended build order
1. Establish the type scale with A Garamond Pro and Adobe Garamond Pro loaded, then add Graphik and Logic Monospace.
2. Build the masthead with centered logo, navigation distribution, and hairline border.
3. Implement the three-column grid with 32px gutters and 40px row gaps.
4. Create the article card component with image, caption, headline, and author stack.
5. Add the subscription modal with two-column layout and red primary buttons.
6. Implement the paywall banner with its expanded/collapsed states.

### Accessibility
- Ensure the red action color meets contrast requirements when used for text; the 3:1 ratio against white may be insufficient for small text, so reserve it for large labels and buttons.
- Provide visible focus states on navigation links and buttons; the default browser outline may be replaced with a 2px offset outline in action color.
- Maintain logical heading hierarchy across article cards, with lead features as h2 and secondary cards as h3.
- The hamburger menu should expose an accessible navigation pattern with proper ARIA labeling.

## Scope note

This guide covers the homepage, article cards, subscription surfaces, and paywall banners visible in the supplied images. Article body pages, comment systems, video players, newsletter signup forms, and mobile-specific navigation patterns are not represented. Footer components, search results, and author profile pages fall outside the current scope. The Applesystem family appears in the source data but is not used in any visible component described here.
