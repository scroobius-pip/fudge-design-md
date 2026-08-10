# How buick.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/buick.com-design)

Last updated: 2026-08-10

## Captured pages

[![FAQ accordion section with orange plus icons and centered Buick Safety button on white background](https://pin.fontofweb.com/932?format=jpg)](https://design.withfudge.com/share/pin-932)

[FAQ accordion section with orange plus icons and centered Buick Safety button on white background](https://design.withfudge.com/share/pin-932)

[![2025 Envision SUV split layout with interior cockpit photo and exterior vehicle image on light gray background](https://pin.fontofweb.com/931?format=jpg)](https://design.withfudge.com/share/pin-931)

[2025 Envision SUV split layout with interior cockpit photo and exterior vehicle image on light gray background](https://design.withfudge.com/share/pin-931)

[![2026 Encore GX SUV with left-aligned text content and right-side interior dashboard photography](https://pin.fontofweb.com/930?format=jpg)](https://design.withfudge.com/share/pin-930)

[2026 Encore GX SUV with left-aligned text content and right-side interior dashboard photography](https://design.withfudge.com/share/pin-930)

[![2025 Envista crossover SUV showcase with city skyline interior photo and blue exterior vehicle image](https://pin.fontofweb.com/929?format=jpg)](https://design.withfudge.com/share/pin-929)

[2025 Envista crossover SUV showcase with city skyline interior photo and blue exterior vehicle image](https://design.withfudge.com/share/pin-929)

## Overview

The Buick.com design system presents a premium automotive experience built on restraint and warmth. The visual language avoids cold corporate sterility in favor of an approachable elegance that mirrors the brand's positioning in the luxury crossover market. The foundation rests on a warm off-white canvas that softens the technical precision of vehicle photography, while a distinctive copper-orange accent provides energy and clear wayfinding without overwhelming the composed atmosphere.

The system organizes content through generous spatial rhythm and deliberate asymmetry. Vehicle showcases employ split layouts that pair immersive interior photography with concise product information, creating a narrative flow from experience to specification. Typography carries the brand voice through a single custom sans-serif family with carefully modulated weights, avoiding the harsh contrast of ultra-bold display treatments common in automotive interfaces. Component design favors subtle borders and minimal backgrounds, letting photography and negative space establish hierarchy. The overall effect is confident but unhurried—information surfaces when needed, and the path to deeper exploration remains visible without demanding attention.

## Colors

The color system operates through disciplined contrast between warm neutrals and a single vibrant accent. The palette supports both the emotional appeal of lifestyle photography and the functional clarity of vehicle configuration.

| token | value | use |
|---|---|---|
| canvas | #F5F5F0 | Primary page background; warm off-white that reduces eye strain and complements vehicle photography |
| surface | #FFFFFF | Card backgrounds, FAQ content areas, button fills, and any elevated content requiring crisp separation |
| ink | #1A1A1A | Primary text, headings, vehicle model names, and navigation |
| muted-ink | #4A4A4A | Secondary body text, descriptions, trim labels in inactive states, and legal disclaimers |
| action | #C45C26 | Interactive accents—arrow icons, active trim underlines, accordion expand indicators, and hover states |
| action-hover | #A84D1F | Darkened action state for hover feedback on links and interactive elements |
| border | #D4D4D4 | Structural dividers, accordion item separators, and trim selector inactive borders |
| border-light | #E8E8E8 | Subtle hairlines, FAQ item top borders, and background-against-background divisions |

The warm canvas tone distinguishes the experience from cooler gray automotive competitors, creating an immediate sense of approachable luxury. Black text on this warm ground maintains excellent readability while feeling less clinical than pure white backgrounds. The copper-orange action color appears with discipline—reserved for moments of user progression and selection confirmation rather than decorative abundance. Dark vehicle photography, particularly interior cockpit shots, provides natural contrast against the light ground without requiring additional UI chrome. Exterior vehicle images in deep blues and metallic grays further enrich the visual field while harmonizing with the neutral system.

## Typography

The typographic system relies on a single custom family, Web Use Only Copyright C Emtype Foundry-Emtypenet, designed by Eduardo Manso of Emtype Foundry. This approach creates cohesive voice across all content while weight and size variations establish clear information hierarchy.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Web Use Only Copyright C Emtype Foundry-Emtypenet | 3rem | 400 | 1.1 | -0.01em | Page-level headlines, section introductions |
| section-display | Web Use Only Copyright C Emtype Foundry-Emtypenet | 2.5rem | 400 | 1.15 | -0.01em | Vehicle category headers, major section titles |
| vehicle-model | Web Use Only Copyright C Emtype Foundry-Emtypenet | 2rem | 500 | 1.2 | 0em | Model year and name combinations, primary product identifiers |
| body | Web Use Only Copyright C Emtype Foundry-Emtypenet | 1rem | 400 | 1.6 | 0em | Paragraph descriptions, feature explanations, general content |
| body-small | Web Use Only Copyright C Emtype Foundry-Emtypenet | 0.875rem | 400 | 1.5 | 0em | Secondary descriptions, trim details, supporting information |
| label | Web Use Only Copyright C Emtype Foundry-Emtypenet | 0.75rem | 500 | 1.4 | 0.02em | Category tags, uppercase labels, small navigation items |
| price | Web Use Only Copyright C Emtype Foundry-Emtypenet | 1.125rem | 500 | 1.3 | 0em | Starting price displays, financial information |
| navigation | Web Use Only Copyright C Emtype Foundry-Emtypenet | 0.875rem | 500 | 1.4 | 0.01em | Text links, button labels, tab navigation |
| legal-copy | Web Use Only Copyright C Emtype Foundry-Emtypenet | 0.75rem | 400 | 1.5 | 0em | Disclaimers, terms, footnotes, safety information |

The Medium weight (500) serves as the primary emphasis tool rather than bold, maintaining the system's refined character. Tight tracking on display sizes creates compact, confident headlines that feel engineered rather than decorative. Body text employs generous line height for comfortable reading of vehicle descriptions and feature explanations. The label style with slight positive tracking performs well at small sizes for category tags like "Crossover SUV" and "Compact SUV."

Verify licensing for Web Use Only Copyright C Emtype Foundry-Emtypenet through Emtype Foundry before production use. The family is distributed under web-use-only terms through GM's brand asset system.

## Layout

The layout system prioritizes immersive vehicle presentation through asymmetric two-column compositions and generous vertical breathing room.

**Page Structure**
The canvas fills the full viewport width with content constrained to a centered maximum width. Sections stack vertically with substantial separation, typically five rem between major content areas. This spacing allows each vehicle showcase to feel like a distinct moment rather than continuous scrolling density.

**Vehicle Showcase Grid**
The signature layout pairs a large-format photograph (occupying roughly 55-60% width) with a text content block (40-45% width). The image side alternates between left and right placement across successive vehicles, creating visual rhythm and preventing monotony. Images maintain aspect ratios that emphasize horizontal sweep for exteriors and vertical depth for interiors.

**Content Alignment**
Text blocks employ left-aligned content with consistent internal spacing. Vehicle category labels sit above model names with modest separation. Price information follows immediately, then descriptive paragraphs. Action links appear as paired text-with-arrow elements, horizontally distributed within the content area. Trim selectors occupy the full content block width, with tab-style options evenly spaced.

**FAQ Section Structure**
Accordion items stack vertically with full-width horizontal rules. Each item contains a left-aligned question, an expand/collapse indicator positioned at the left margin, and revealed content that maintains the same text width as questions. Expanded content includes paragraph blocks and a centered call-to-action button.

**Responsive Considerations**
The split layout should stack to single column on narrower viewports, with images preceding text content to maintain narrative flow. Trim selectors may scroll horizontally or wrap to multiple rows when space constrains even distribution.

## Visual language

The visual language communicates precision craftsmanship through photographic quality, typographic refinement, and restrained color application.

**Photography Treatment**
Vehicle imagery dominates the visual experience. Interior shots emphasize technology integration—wide digital displays, steering wheel controls, and premium material surfaces—positioned against lifestyle backdrops visible through windshields. Exterior photography presents vehicles in three-quarter views that convey stance and proportion, with natural environments providing context without competing for attention. Images receive subtle rounded corners that soften their presence against the geometric page structure.

**Iconography and Indicators**
Arrow icons accompany text links, pointing right to indicate forward progression. These appear in the action copper-orange color, creating consistent wayfinding cues. Accordion indicators use plus and minus symbols in the same accent color, with horizontal and vertical strokes of equal weight. The trim selector employs a thin underline as its active state indicator rather than filled backgrounds or border boxes.

**Surface and Depth**
The system largely avoids shadows and dimensional effects. Hierarchy emerges through spacing, size contrast, and the occasional border line. Elevated surfaces like FAQ content areas use the pure white surface token against the warm canvas, creating subtle depth through color temperature difference rather than shadow projection.

**Line and Division**
Horizontal rules serve as the primary structural element, appearing in border-light for subtle separations and border for more pronounced divisions. These rules extend full-width within their containers, creating clean edges that organize without enclosing.

## Components

**Vehicle Showcase Card**
- Anatomy: Large-format photograph paired with text content block containing category label, model name, starting price, description, dual action links, and trim selector
- Surface: Photograph sits directly on canvas background; text block uses no additional background
- Typography: Category label uses label token uppercase; model name uses vehicle-model token; price uses price token; description uses body token
- Shape: Photograph corners rounded to 1rem; no border or shadow on image container
- Spacing: Internal content padding of 1.5rem within text block; 2rem gap between description and action links
- Composition: Image and text block share vertical center alignment; action links distribute horizontally with arrow icons trailing
- Variants: Image position alternates left/right across instances; interior and exterior photography may swap positions

**Text Link with Arrow**
- Anatomy: Label text followed by right-pointing arrow icon
- Surface: Transparent background; text in ink color; arrow in action color
- Typography: navigation token
- Shape: No visible container; arrow sits inline with text baseline
- Spacing: Comfortable hit area through generous padding around text
- Composition: Pairs appear in horizontal sets of two, evenly distributed within content width
- States: Hover should shift arrow color toward action-hover; underline may appear on hover

**Trim Selector**
- Anatomy: Horizontal tab set with three options; active state indicated by bottom border
- Surface: Transparent background; inactive text in muted-ink; active text in ink with action-colored underline
- Typography: navigation token
- Shape: Full-width container; underline at 2px height in active state
- Spacing: Options evenly distributed with equal spacing; underline spans option text width
- Composition: Label text above selector reads "View [Model] trims below:" in body-small token
- States: Active trim shows action underline; inactive shows no underline; hover may show border-color underline

**Accordion Item**
- Anatomy: Horizontal rule, expand icon, question text, optional revealed content
- Surface: Transparent background; content reveals without background change
- Typography: Question uses body token; revealed content uses body token; legal disclaimers use legal-copy token
- Shape: Full-width horizontal rules at 1px in border-light; icon as plus/minus symbol
- Spacing: Vertical padding of 1rem above and below each question; content padding of 1.5rem when expanded
- Composition: Icon positioned at left margin; question text follows with standard gap; content indented to align with question text
- States: Collapsed shows plus icon; expanded shows minus icon; multiple items may be expanded simultaneously

**Centered CTA Button**
- Anatomy: Text label within bordered container
- Surface: Surface background; border in border color; text in ink
- Typography: navigation token
- Shape: Rounded corners at 0.5rem; border at 1px
- Spacing: Horizontal padding of 2rem; vertical padding of 0.75rem
- Composition: Centered within parent container; full width on mobile
- States: Hover should darken border to border or shift background toward canvas

## Responsive behavior

The design system should adapt gracefully across viewport sizes while preserving its core visual character.

**Breakpoint Strategy**
The split-layout vehicle showcases require intervention at moderate widths. When content blocks become narrower than comfortable reading measure, the layout should stack to single column with images preceding text. This maintains the narrative flow from visual impression to detailed information.

**Typography Scaling**
Display sizes may reduce by approximately 20% on smaller viewports to prevent overwhelming narrow screens. The vehicle-model token should remain prominent but not exceed viewport width. Body text maintains its 1rem size for readability across all contexts.

**Image Behavior**
Photography should maintain aspect ratio while scaling to full container width in stacked layouts. The rounded corner treatment remains consistent at all sizes. Interior shots with vertical emphasis may benefit from slight cropping at extreme aspect ratios.

**Navigation and Controls**
Trim selectors with three options should remain horizontally arranged where possible. On very narrow viewports, options may stack vertically with active underline shifting to left border rather than bottom border. Accordion items maintain full-width presentation with touch-appropriate hit targets of at least 44px height.

**Spacing Adjustments**
Section spacing may reduce from five rem to three rem on smaller viewports to prevent excessive scrolling between content areas. Internal component padding should maintain minimum comfortable margins without crowding.

## Practical implementation guidance

**Preserve**
- The warm off-white canvas as the dominant background; this temperature choice significantly affects brand perception
- Alternating left/right image placement in vehicle showcases; this rhythm prevents visual fatigue
- The single-font typographic system; introducing additional families would break the cohesive voice
- Copper-orange accent discipline; reserve this color for interactive states and wayfinding only
- Generous negative space around vehicle photography; crowding degrades the premium impression

**Avoid**
- Pure white backgrounds as the default canvas; the warmth is intentional and differentiating
- Bold weight for headings; the Medium weight provides sufficient emphasis within this family's range
- Shadow-based elevation; rely on spacing and subtle color shifts instead
- Decorative borders around images; the rounded corners alone provide sufficient containment
- Center-aligned body text; maintain left alignment for readability and consistent visual rhythm

**Recommended Build Order**
1. Establish the canvas and surface color tokens with typography scale
2. Implement the vehicle showcase component as the primary content pattern
3. Build the text link with arrow and trim selector for product interaction
4. Create the accordion pattern for FAQ and expandable content
5. Add the centered CTA button for conversion moments
6. Refine responsive behavior for the split layout

**Accessibility**
- Ensure all text meets WCAG contrast ratios against the warm canvas; ink on canvas should exceed 4.5:1
- Provide visible focus indicators for keyboard navigation; consider outline or background shift in action color
- Maintain arrow icon as decorative with appropriate aria-hidden treatment; the link text must convey purpose
- Accordion items should use button elements with aria-expanded states for screen reader clarity
- Trim selector should implement roving tabindex or radio group pattern for keyboard accessibility
- Vehicle images require descriptive alt text conveying model and visual context

## Scope note

This guide covers the SUV showcase and FAQ page surfaces visible in the supplied images. Header navigation, footer content, form interactions, vehicle configurator flows, and mobile-specific layouts are not represented. Motion behavior, loading states, and hover transitions are not documented from still images. Measurements are practical adaptation targets derived from visual estimation against the four-pixel relative unit grid.
