# How docs.swmansion.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/docs.swmansion.com-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with Software Mansion branding, navigation links, and large decorative TypeGPU watermark on white background](https://pin.fontofweb.com/4371?format=jpg)](https://design.withfudge.com/share/pin-4371)

[Footer section with Software Mansion branding, navigation links, and large decorative TypeGPU watermark on white background](https://design.withfudge.com/share/pin-4371)

[![Hero call-to-action with gradient purple-blue button, abstract geometric shapes, and soft lavender background](https://pin.fontofweb.com/4370?format=jpg)](https://design.withfudge.com/share/pin-4370)

[Hero call-to-action with gradient purple-blue button, abstract geometric shapes, and soft lavender background](https://design.withfudge.com/share/pin-4370)

[![Roadmap timeline with hexagonal icons, purple connector lines, and version release badges](https://pin.fontofweb.com/4369?format=jpg)](https://design.withfudge.com/share/pin-4369)

[Roadmap timeline with hexagonal icons, purple connector lines, and version release badges](https://design.withfudge.com/share/pin-4369)

[![Feature cards grid with rounded white panels, purple gradient icons, and lavender background](https://pin.fontofweb.com/4368?format=jpg)](https://design.withfudge.com/share/pin-4368)

[Feature cards grid with rounded white panels, purple gradient icons, and lavender background](https://design.withfudge.com/share/pin-4368)

## Overview

The TypeGPU documentation site presents a technical developer tool through a calm, approachable visual system. The design balances clinical precision with warmth, using a soft lavender-tinted canvas as its foundation against which white content surfaces float with generous rounded corners. The overall impression is of a modern developer product that takes type safety seriously without feeling austere.

The visual identity centers on a purple-to-blue gradient accent that appears in call-to-action buttons, decorative illustrations, and icon treatments. This gradient creates visual momentum and connects the functional interface to the abstract geometric imagery that represents GPU computation concepts. Typography relies on a single geometric sans-serif family at multiple weights, giving the site a cohesive, engineered feel appropriate for a WebGPU toolkit.

Content organization favors clear hierarchy through scale contrast rather than decorative elements. Section headings command attention with large, tightly-tracked display type, while body copy maintains comfortable readability through ample line height. The layout alternates between full-bleed tinted sections and contained white panels, creating a rhythmic reading experience that guides visitors from introduction through feature exploration to technical roadmap details.

## Colors

The palette is intentionally restrained, built on a cool lavender foundation with a vibrant purple-blue accent system. Black serves as the primary text color for maximum readability on light surfaces, while a medium gray handles secondary information. The gradient accent unifies interactive elements with the site's illustrative language.

| token | value | use |
|---|---|---|
| canvas | `#E8E8F4` | Page background, hero sections, tinted content areas |
| surface | `#FFFFFF` | Cards, footer, content panels, button text |
| ink | `#111111` | Primary headings, body text, navigation links |
| muted-ink | `#666666` | Secondary text, placeholder content, descriptions |
| action | `#7C5CFC` | Primary button fill, badge backgrounds, icon accents |
| action-gradient-start | `#A855F7` | Gradient top/left for buttons and illustrations |
| action-gradient-end | `#6366F1` | Gradient bottom/right for buttons and illustrations |
| link | `#2563EB` | Inline text links within body copy |
| border | `#E5E7EB` | Subtle dividers, icon container outlines |

The canvas color dominates the page experience, establishing a distinctive lavender atmosphere that differentiates the site from generic white documentation templates. White surfaces create necessary contrast for readable content while maintaining the clean, airy feeling. The action gradient appears most prominently in the primary call-to-action button, where it shifts from warm purple to cool blue, and in the abstract geometric illustrations that anchor major sections. This gradient treatment connects interactive elements with decorative imagery, making the interface feel cohesive.

The link color provides a familiar blue for inline hyperlinks, offering clear affordance without competing with the purple accent system. Border colors remain extremely subtle, used only where necessary to define icon containers or separate content regions.

## Typography

The site uses Aeonik, a geometric sans-serif designed by Mark Bloom and Joe Leadbeater at Co Type Foundry. The family contributes to the technical, precise character of the documentation while maintaining warmth through its rounded letterforms. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Aeonik | 3rem | 500 | 1.1 | -0.02em | Major section headings, CTA headlines |
| section-display | Aeonik | 2.5rem | 500 | 1.15 | -0.01em | Subsection headings, feature titles |
| body-large | Aeonik | 1.25rem | 400 | 1.5 | 0 | Introductory paragraphs, hero descriptions |
| body | Aeonik | 1rem | 400 | 1.6 | 0 | Primary content, descriptions, explanations |
| label | Aeonik | 0.875rem | 500 | 1.4 | 0.01em | Badges, tags, small labels |
| navigation | Aeonik | 0.875rem | 400 | 1.5 | 0 | Footer links, secondary navigation |

The type system relies on weight and scale contrast rather than multiple families. Display sizes use medium weight with negative tracking for a tight, confident appearance appropriate for technical product marketing. Body sizes maintain regular weight with neutral tracking and generous line height for extended reading comfort. The label style adds slight positive tracking for small uppercase or badge treatments, improving legibility at reduced sizes.

## Layout

The layout follows a centered, contained model with full-bleed tinted sections alternating with white content areas. Maximum content width appears to be approximately 1200px, with generous horizontal padding on smaller viewports.

Section spacing uses large vertical gaps to create clear separation between content topics. The hero section occupies substantial vertical space with centered text alignment, establishing the product's value proposition before visitors encounter detailed information. Content sections below maintain consistent top and bottom padding against the lavender canvas.

The feature cards section demonstrates an asymmetric grid layout, with cards arranged in a staggered two-column pattern that creates visual interest while maintaining readability. Cards appear at varying vertical positions, breaking the rigid alignment that would make the layout feel mechanical. This staggered approach accommodates cards of differing content lengths while preserving a dynamic, engaging composition.

The roadmap section uses a vertical timeline layout with hexagonal icons connected by a continuous line. This creates a clear progression narrative while conserving horizontal space. Content for each roadmap item sits to the right of its corresponding icon, with version badges positioned at the top right of each entry.

Footer content distributes across multiple columns, with branding and copyright information on the left and navigation links organized into logical groupings on the right. A large decorative watermark spelling "typegpu" in outline form occupies the bottom edge, reinforcing brand identity without interfering with functional content.

## Visual language

The visual language combines technical precision with approachable warmth through several distinctive elements. Geometric abstraction appears throughout, from the hexagonal roadmap icons to the crystalline shapes in the hero illustration. These forms suggest GPU architecture and computation without resorting to literal imagery.

The gradient treatment serves as a unifying visual thread, appearing in buttons, icons, and decorative illustrations alike. The purple-to-blue shift evokes digital space and technical capability while remaining vibrant and contemporary. This gradient is never harsh; it maintains smooth transitions that feel polished rather than garish.

Rounded corners feature prominently, with cards receiving substantial border radius that softens their rectangular forms. Buttons use full pill shapes, inviting interaction through their friendly, approachable silhouette. Even small elements like badges and icon containers receive rounded treatment, creating consistency across scales.

The decorative watermark typography at the page bottom demonstrates confident scale play, with enormous outlined letterforms creating texture and brand presence without demanding attention. This treatment shows how the design uses scale contrast to create hierarchy and visual interest.

Iconography follows a consistent pattern: simple geometric symbols rendered in the purple-blue gradient, contained within light-bordered rounded squares. This system provides recognizable visual anchors for feature cards while maintaining the overall aesthetic coherence.

## Components

### Primary action button

The primary call-to-action button uses a full pill shape with the purple-blue gradient background. White text sits centered with a right-pointing arrow icon, creating clear directional momentum. The button appears substantially sized, with generous horizontal padding that makes it feel substantial and worthy of attention. Typography uses the body-large token at medium weight. The gradient shifts from warmer purple at the top to cooler blue at the bottom, matching the illustrative language elsewhere on the page.

### Feature card

Feature cards float on the lavender canvas with white backgrounds and substantial rounded corners. Each card contains a gradient icon in a lightly bordered rounded square container, followed by a bold heading and descriptive paragraph. Cards vary in height based on content, and their staggered arrangement creates visual rhythm. The icon containers use thin borders in a light gray, with the icon itself rendered in the signature gradient. Headings use section-display typography at medium weight, while body copy uses the standard body token. Links within card text appear in the link blue color with underline treatment.

### Roadmap item

Roadmap entries combine hexagonal icons with connected vertical lines to create a timeline narrative. Each hexagon contains a subtle pattern or symbol rendered in light tones with a purple border. The connecting line uses the action purple color, creating a clear visual path through the content. To the right of each icon, a heading and description pair explains the feature, with a version badge positioned at the upper right. Badges use the action background color with white text in the label typography, rounded corners, and compact padding. The overall effect is a readable, scannable progression that communicates development maturity.

### Footer

The footer section uses a white background with the site's logo and descriptive tagline on the left. Navigation links organize into columns on the right, using the navigation typography at regular weight. Links appear in the ink color with underline treatment on hover. Below the functional content, a large decorative "typegpu" watermark in outlined letterforms spans the width, rendered in a very light tint that provides texture without competing with readable content. The Software Mansion copyright notice appears with a small logo mark, establishing authorship with minimal visual weight.

## Responsive behavior

The design should adapt gracefully to narrower viewports. The staggered card grid would likely collapse to a single column on mobile, with cards stacking vertically and losing their offset positioning. The roadmap timeline should maintain its vertical structure but may shift to a simplified layout with reduced horizontal padding.

The hero section's centered text alignment works across viewport sizes, though heading sizes should scale down to maintain appropriate line lengths. The primary action button should remain fully visible without horizontal overflow, potentially reducing its horizontal padding on very narrow screens.

Footer navigation columns should stack vertically on mobile, with each link group becoming a collapsible section or simple stacked list. The decorative watermark should scale down proportionally or hide entirely on small screens where it would consume excessive vertical space.

## Practical implementation guidance

### Preserve
- The lavender-tinted canvas as the dominant page background; this color is central to the site's distinctive atmosphere
- The purple-to-blue gradient as the primary accent, used consistently across buttons, icons, and illustrations
- Generous rounded corners on cards and containers; the substantial border radius contributes significantly to the friendly, approachable character
- The staggered card grid arrangement; this asymmetric layout creates visual interest that distinguishes the site from rigid template designs
- The hexagonal icon system in the roadmap; this geometric language reinforces the technical GPU theme

### Avoid
- Introducing additional accent colors that would compete with the established purple-blue gradient system
- Reducing the card border radius to small values; this would make the design feel generic and lose its distinctive softness
- Using dark backgrounds for content sections; the light, airy palette is fundamental to the site's readable, welcoming character
- Overcrowding the feature card grid; the generous spacing between cards is essential to the clean, breathable layout

### Recommended build order
1. Establish the lavender canvas background and white surface system
2. Implement the typography scale with Aeonik at the specified sizes and weights
3. Build the primary action button with its gradient treatment and pill shape
4. Create the feature card component with icon containers and staggered grid behavior
5. Develop the roadmap timeline with hexagonal icons and connecting lines
6. Add the footer with navigation columns and decorative watermark
7. Refine responsive behavior for card grids and timeline layouts

### Accessibility
- Ensure the gradient button meets contrast requirements; the white text on purple-blue gradient should maintain at least 4.5:1 ratio across the gradient range
- Provide focus indicators for all interactive elements that are visible against both canvas and surface backgrounds
- Consider adding reduced-motion preferences for any animated gradient or illustration effects
- Maintain readable text sizes in the roadmap badges; the label typography at 0.875rem should not go smaller
- Ensure link underlines or other non-color indicators distinguish interactive text from static content

## Scope note

This guide covers the TypeGPU marketing and documentation landing page visible in the supplied images. The documentation interior pages, API reference layouts, code block styling, and mobile navigation patterns are not represented. Interactive states including hover, focus, active, and disabled variations were not captured and should be designed to complement the visible system. Measurements are practical adaptation targets.
