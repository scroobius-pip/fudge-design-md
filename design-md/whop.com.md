# How whop.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/whop.com-design)

Last updated: 2026-08-10

## Captured pages

[![Landing page hero with centered headline 'Join the future of work' and two pill-shaped action buttons on near-black background](https://pin.fontofweb.com/10222?format=jpg)](https://design.withfudge.com/share/pin-10222)

[Landing page hero with centered headline 'Join the future of work' and two pill-shaped action buttons on near-black background](https://design.withfudge.com/share/pin-10222)

[![Login page with centered card containing email input, blue continue button, and social login options against dark patterned background](https://pin.fontofweb.com/6948?format=jpg)](https://design.withfudge.com/share/pin-6948)

[Login page with centered card containing email input, blue continue button, and social login options against dark patterned background](https://design.withfudge.com/share/pin-6948)

[![Dashboard start page with left sidebar navigation, embedded video player, and platform statistics in blue accent](https://pin.fontofweb.com/6947?format=jpg)](https://design.withfudge.com/share/pin-6947)

[Dashboard start page with left sidebar navigation, embedded video player, and platform statistics in blue accent](https://design.withfudge.com/share/pin-6947)

[![Finance feature page with 3D money illustration, feature grid with icons, and blue waitlist button](https://pin.fontofweb.com/6946?format=jpg)](https://design.withfudge.com/share/pin-6946)

[Finance feature page with 3D money illustration, feature grid with icons, and blue waitlist button](https://design.withfudge.com/share/pin-6946)

## Overview

Whop's visual system is built around a dark-first, high-contrast philosophy that positions the platform as a modern workspace for creators and entrepreneurs. The interface operates almost exclusively on near-black surfaces, using color as a deliberate accent rather than a dominant theme. Two distinct accent colors serve different functional roles: electric orange drives primary marketing actions and brand identity, while blue handles authenticated interactions and financial features. The typography system splits personality between FFF Acid Grotesk—used for bold, editorial headlines with tight tracking—and Inter, which carries all interface, navigation, and body copy with measured, utilitarian clarity. Applesystem appears as a system-level fallback at 14px in certain native UI contexts. This creates a hierarchy where marketing moments feel expressive and product moments feel precise. The layout philosophy emphasizes generous negative space, centered hero compositions, and a persistent left sidebar for authenticated navigation that anchors the user in a consistent spatial model across dashboard, finance, and discovery surfaces.

## Colors

The color system is intentionally restrained, using a near-monochrome dark foundation with two functional accent colors.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, sidebar ground |
| surface | #111111 | Elevated cards, input fields, secondary containers |
| surface-elevated | #191919 | Active navigation states, tertiary elevation |
| ink | #EEEEEE | Primary text, headlines, active labels |
| ink-muted | #B4B4B4 | Secondary text, placeholders, disabled states, footer links |
| action-orange | #FA4616 | Primary marketing CTA buttons, brand logo mark, hero accents |
| action-orange-deep | #B62600 | Button shadow accents, pressed states, depth indicators |
| action-blue | #1754D8 | Authenticated actions, continue buttons, financial features |
| action-blue-muted | #88B5FF | Statistics display, secondary blue highlights |
| border | #313131 | Subtle dividers, input borders, card outlines |
| border-light | #FFFFFF | High-contrast borders on dark surfaces, focus rings |

The dark mode is not an alternative—it is the singular visual environment. Light surfaces appear only in specific content embeds like video players or external media. Orange dominates unauthenticated and marketing contexts, establishing brand warmth and urgency. Blue takes over in product flows, signaling trust and progression through authenticated states. The muted gray ink prevents visual fatigue across long dashboard sessions while maintaining sufficient contrast against the black canvas.

## Typography

The type system pairs an expressive display face with a neutral workhorse, creating clear role separation. Three font families are present in the interface: FFF Acid Grotesk for display headlines, Inter for all interface and body text, and Applesystem as a system fallback in specific native contexts.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | FFF Acid Grotesk | 3.5rem | 700 | 1 | -0.03em | Landing page headlines, major marketing statements |
| section-display | FFF Acid Grotesk | 2.5rem | 700 | 1.5 | -0.055em | Section headers, feature introductions |
| body | Inter | 1rem | 400 | 1.5 | normal | Paragraphs, descriptions, general content |
| body-medium | Inter | 1.125rem | 500 | 1.444 | -0.016em | Button labels, emphasized body text, navigation |
| label | Inter | 0.875rem | 400 | 1.429 | -0.006em | Captions, metadata, form labels |
| navigation | Inter | 1.125rem | 500 | 1.444 | -0.016em | Sidebar items, top-level menu links |
| stat-display | Inter | 2rem | 600 | 1.188 | -0.043em | Large numbers, financial figures, metrics |
| legal-copy | Inter | 0.75rem | 400 | 1.333 | 0.001em | Terms, disclaimers, fine print |

FFF Acid Grotesk appears exclusively in Bold and Medium weights, delivering high-impact headlines with characteristically tight tracking that creates a compressed, editorial density. Inter handles everything else across Regular, Medium, Semibold, and Bold weights, with negative tracking applied at larger sizes to maintain optical consistency. Applesystem appears at 14px in certain system-level contexts as a fallback face. The 16px root size establishes a readable baseline for extended dashboard use.

FFF Acid Grotesk is designed by Pablo Fernández De La Fuente of Folch Studio. Verify licensing for these families before production use.

## Layout

The layout system operates on two distinct page architectures: marketing pages and authenticated application pages.

Marketing pages use a centered, contained composition with a maximum width that creates generous side margins. The hero section occupies the full viewport height, with content vertically and horizontally centered. A minimal top navigation bar floats above with the brand mark left-aligned and utility links right-aligned. The footer anchors the bottom with a hairline separator, legal links left-aligned, and social icons right-aligned.

Authenticated pages introduce a persistent left sidebar approximately 240px wide, creating a two-column spatial model. The sidebar contains the brand mark, primary navigation with icon-and-label pairs, and secondary actions. The main content area fills the remaining viewport width, with internal padding that creates breathing room between the sidebar edge and content blocks. This sidebar remains fixed during scroll, establishing consistent wayfinding across dashboard, finance, discover, and messaging surfaces.

Content sections within the main area use vertical stacking with 40px gaps between major blocks. Cards and elevated surfaces receive 24px internal padding and 16px-24px border radii. The spacing scale derives from a 2px base unit, with semantic steps at 4px, 8px, 16px, 24px, 32px, 40px, and 80px serving component and layout needs without proliferation.

## Visual language

The visual language balances restraint with moments of deliberate expression. Surfaces are overwhelmingly flat—shadows appear only as subtle colored offsets on primary action buttons, specifically an orange-deep shadow that creates a slight three-dimensional lift. No blur-based shadows or elevation systems are present.

Borders function as precise hairlines at 1px, using dark gray for subtle definition and white for high-contrast moments like focused inputs. Radius values follow functional logic: navigation items use 14px for a soft pill shape, buttons use 10px for a rounded rectangle, cards and media containers use 24px for generous rounding, and full pills use 9999px for perfect semicircles.

Iconography appears as simple line icons in the sidebar navigation, paired with text labels for clarity. The brand mark is an abstract geometric form in orange, scaled consistently across header contexts. Photography and illustration appear in contained areas—3D rendered illustrations for feature pages, video embeds for onboarding—always rounded at 24px when framed.

The overall impression is of a premium tool: minimal decoration, maximum clarity, with color reserved for action and brand identification.

## Components

### Primary action button

- **Anatomy**: Text label centered within a fully rounded container
- **Surface**: Solid orange fill (#FA4616) with subtle deep-orange shadow offset 3px below
- **Typography**: Inter Medium at 1.125rem, white text
- **Shape**: Full pill (9999px radius), height 48px, padding 0 24px
- **Spacing**: Appears in pairs with 16px gap to secondary actions
- **Variants**: Blue variant (#1754D8) for authenticated flows; black variant with white text for alternate contexts

### Secondary action button

- **Anatomy**: Text label within bordered container
- **Surface**: Transparent fill with 1px border (#313131)
- **Typography**: Inter Medium at 1.125rem, white text
- **Shape**: Full pill (9999px radius), matching height to primary
- **Spacing**: Positioned adjacent to primary with consistent gap

### Sidebar navigation

- **Anatomy**: Vertical stack of icon-label pairs with optional badges
- **Surface**: Transparent default, #191919 fill for active/hover state
- **Typography**: Inter Medium at 1.125rem, muted gray default, white active
- **Shape**: 14px radius on individual items, full-width within sidebar
- **Spacing**: 16px vertical padding on container, 9px horizontal padding on items
- **Composition**: Icon left, label right, badge far right in blue pill for new features
- **States**: Default (muted), active (white text on elevated surface)

### Input field

- **Anatomy**: Label above, text entry area below
- **Surface**: #111111 fill with 1px #313131 border
- **Typography**: Inter Regular at 1rem for input, slightly smaller for label
- **Shape**: 10px radius
- **Spacing**: 12px vertical padding, 16px horizontal padding
- **States**: Default with muted placeholder, focused with white border

### Feature card

- **Anatomy**: Media area above, text content below
- **Surface**: Transparent or #111111 depending on context
- **Typography**: FFF Acid Grotesk Bold for headlines, Inter Regular for descriptions
- **Shape**: 24px radius on media containers
- **Spacing**: 24px internal padding, 40px gap between cards in grids

### Statistics display

- **Anatomy**: Large number above, small label below
- **Typography**: Inter Semibold at 2rem for numbers, Inter Regular at 0.875rem for labels
- **Color**: Blue-muted (#88B5FF) for figures, muted gray for labels
- **Spacing**: Tight vertical coupling between number and label, horizontal separation between stat pairs

### Login card

- **Anatomy**: Centered modal containing logo, headline, form, divider, social options, and legal text
- **Surface**: #111111 fill with subtle border
- **Typography**: Inter Semibold at 1.75rem for headline, Inter Regular for body
- **Shape**: 24px radius
- **Spacing**: 32px internal padding, 24px between major sections
- **Composition**: Vertically centered in viewport, 72px top padding to clear header area

## Responsive behavior

The authenticated layout with left sidebar should collapse to a bottom tab bar or hamburger menu on viewports below 1024px, preserving the dark surface and navigation hierarchy. The marketing hero maintains its centered composition across widths, with headline size scaling down from 3.5rem to 2.5rem on smaller screens. Button pairs should stack vertically with full-width treatment on mobile, maintaining 16px gaps. The statistics display should reflow from horizontal pairs to vertical stacking. Video embeds and media containers should maintain their 24px radius while scaling to fit available width. Touch targets for sidebar navigation should expand to minimum 44px height on mobile implementations.

## Practical implementation guidance

### Preserve
- The near-black canvas as the universal background; resist adding light mode
- The strict separation of orange for marketing and blue for product actions
- FFF Acid Grotesk exclusively for large headlines, never for body or interface text
- The 24px radius on media containers and cards as a consistent signature
- The persistent sidebar model for authenticated navigation

### Avoid
- Adding elevation shadows or depth systems beyond the subtle button offset
- Using orange and blue in close proximity without clear functional separation
- Applying tight negative tracking to Inter at small sizes where readability suffers
- Creating additional surface colors beyond the established three-level hierarchy
- Using border-radius values between 10px and 14px for ambiguous shapes

### Recommended build order
1. Establish the dark canvas and surface hierarchy with exact hex values
2. Implement Inter at 16px root with proper weight and tracking scale
3. Add FFF Acid Grotesk for hero and section display sizes only
4. Build the sidebar navigation with active states and badge system
5. Create the three button variants (orange, blue, bordered) with consistent pill shape
6. Implement input fields with focus states and proper border transitions
7. Add feature cards with 24px radius and media containment
8. Polish with statistics displays and legal copy sizing

### Accessibility
- Maintain minimum 4.5:1 contrast for all body text against the black canvas
- Ensure the orange action buttons meet 3:1 contrast for large text and UI components
- Provide visible focus indicators using the white border token on interactive elements
- Support keyboard navigation through the sidebar with clear active state visibility
- Consider reduced motion preferences for any animated transitions between states

## Scope note

This guide covers the landing page, login flow, dashboard start page, and finance feature page as visible in the supplied materials. Mobile breakpoints, hover and focus state animations, loading skeletons, error pages, and notification systems are not documented. The design system does not include data visualization components, table layouts, or complex form patterns beyond single-field inputs. Measurements are derived from the exact values present in the interface.
