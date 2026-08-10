# How kimi.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/kimi.com-design)

Last updated: 2026-08-10

## Captured pages

[![Kimi agent interface showing a split-pane layout with a task tree on the left and a code editor displaying Tailwind configuration on the right, demonstrating the dark-themed](https://pin.fontofweb.com/8499?format=jpg)](https://design.withfudge.com/share/pin-8499)

[Kimi agent interface showing a split-pane layout with a task tree on the left and a code editor displaying Tailwind configuration on the right, demonstrating the dark-themed](https://design.withfudge.com/share/pin-8499)

[![Kimi Claw product page featuring a cream-colored hero card with playful lobster-claw and ghost illustrations, dark surrounding canvas, and a create-action row with an orange](https://pin.fontofweb.com/6570?format=jpg)](https://design.withfudge.com/share/pin-6570)

[Kimi Claw product page featuring a cream-colored hero card with playful lobster-claw and ghost illustrations, dark surrounding canvas, and a create-action row with an orange](https://design.withfudge.com/share/pin-6570)

[![Kimi search results panel showing a research session with expandable reasoning steps, source citations with favicons, and PDF badges against a near-black background.](https://pin.fontofweb.com/6091?format=jpg)](https://design.withfudge.com/share/pin-6091)

[Kimi search results panel showing a research session with expandable reasoning steps, source citations with favicons, and PDF badges against a near-black background.](https://design.withfudge.com/share/pin-6091)

[![Kimi chat interface in a narrow viewport showing a user message bubble, agent response with thinking steps, and a bottom input bar with agent selector and send button.](https://pin.fontofweb.com/6090?format=jpg)](https://design.withfudge.com/share/pin-6090)

[Kimi chat interface in a narrow viewport showing a user message bubble, agent response with thinking steps, and a bottom input bar with agent selector and send button.](https://design.withfudge.com/share/pin-6090)

## Overview

Kimi presents a developer-focused AI interface built on extreme contrast: near-black backgrounds with crisp white typography and selective blue accents. The system serves two primary contexts: a conversational chat experience and an agentic workspace with split-pane layouts for code, research, and task management. The visual personality emerges from the tension between utilitarian dark-mode surfaces and playful pixel-art typography used for branding moments. The interface prioritates information density through compact spacing, subtle surface layering, and a restrained color palette that keeps attention on content rather than chrome. Every element reinforces the product's positioning as a reasoning engine—expandable thinking steps, source citations with favicons, and code blocks are treated as first-class content types rather than afterthoughts.

## Colors

The color system is built on a dark-mode foundation with minimal chromatic variation. The palette emphasizes readability and hierarchy through luminance contrast rather than hue.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary background, chat canvas, empty states |
| surface | #121212 | Secondary panels, reasoning step backgrounds, footer areas |
| surface-elevated | #161717 | Input bars, elevated cards, active task rows |
| surface-subtle | #1F1F1F | Tertiary containers, hover states on dark surfaces |
| ink | #FFFFFF | Primary text, icons, borders on dark backgrounds |
| action | #1A88FF | Links, active indicators, interactive accents |
| action-hover | #0000EE | Visited links, pressed states |
| danger | #FF4756 | Error states, destructive actions |
| danger-bright | #FF5252 | High-attention alerts, badges |
| border | #292929 | Dividers, hairline borders, subtle separators |

The interface operates in a single dark mode with no light variant. Photographic content and user-generated imagery introduce color through content rather than UI chrome. The blue action color appears sparingly—primarily in links, agent status indicators, and interactive highlights—while red tones are reserved for error feedback and PDF badge accents. White borders at 0.5px width create optical definition without visual weight. Secondary text and metadata rely on reduced opacity or the border token rather than a dedicated muted gray, keeping the palette strictly to the extracted values.

## Typography

The type system combines a system sans-serif for all functional text with a pixel-art display face for brand moments and section headers.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Pixelify Sans | 1.25rem | 400 | 1.4 | normal | Brand headers, product names, playful section titles |
| body | Applesystem | 0.875rem | 400 | 1.43 | normal | Primary interface text, messages, descriptions |
| body-relaxed | Applesystem | 0.875rem | 400 | 1.43 | normal | Long-form content, search result excerpts |
| body-large | Applesystem | 1rem | 400 | 1.625 | normal | Expanded reasoning text, featured descriptions |
| label | Applesystem | 0.875rem | 500 | 1.43 | normal | Buttons, badges, navigation labels |
| title-medium | Applesystem | 1rem | 400 | 1.5 | normal | Card titles, result headings |
| title-large | Applesystem | 1rem | 400 | 2 | normal | Hero statements, large display lines |

Pixelify Sans, designed by Stefie Justprince and distributed by Typecalism Foundryline, provides a distinctive retro-gaming character that appears in product branding and celebratory moments. Applesystem handles all functional text at 14px and 16px sizes with tight leading appropriate for dense information display. Verify licensing for these families before production use.

## Layout

The interface employs a flexible layout system centered on a two-pane architecture for agent workspaces and a single-column chat view for conversational contexts.

**Grid and containment.** The split-pane workspace uses a fixed or proportional sidebar on the left for task navigation and a fluid main area on the right for content display. The chat interface centers content with generous horizontal margins, creating a readable measure for text-heavy interactions. Maximum content widths are implied by comfortable reading line lengths rather than rigid breakpoints.

**Spacing scale.** The system uses a 2px base unit (0.125rem), producing these semantic values:

| token | value | use |
|---|---|---|
| unit | 0.125rem | Base grid unit |
| xs | 0.5rem | Tight internal padding, icon gaps |
| sm | 0.625rem | Button padding, compact row spacing |
| md | 0.75rem | Standard component padding |
| lg | 1rem | Card padding, section gutters |
| xl | 1.5rem | Panel padding, modal insets |
| 2xl | 2rem | Section spacing, major divisions |
| 3xl | 3rem | Hero section padding |
| 4xl | 4rem | Major section breaks |

**Surface layering.** Three distinct surface elevations create depth: canvas (#000000) at the base, surface (#121212) for contained panels, and surface-elevated (#161717) for interactive elements like input bars and active rows. This layering is reinforced by 0.5px white borders on elevated elements and 1px borders on footer regions.

**Z-index and focus.** The input bar remains fixed at the bottom of chat interfaces, with agent selection and send controls anchored to its right edge. Modality is rare; the system prefers inline expansion and progressive disclosure over overlays.

## Visual language

**Shape language.** Rounded corners follow a geometric progression from 4px for small controls to 32px for pill-shaped buttons and navigation elements. Cards and panels typically use 12px or 16px radii, while avatars and status indicators employ full circles. The 20px radius appears frequently on footer elements and promotional cards, creating a distinctive soft-cornered container style.

**Iconography and imagery.** Icons are simple, monochrome, and functional—search magnifiers, document indicators, and expand chevrons appear as white or reduced-opacity glyphs without background containers. User avatars and product mascots use flat, illustrative styles with limited color palettes. The Kimi Claw product card demonstrates a playful approach: textured red lobster claws and a blue ghost figure against a cream background, contrasting sharply with the surrounding dark interface.

**Motion and feedback.** While still images cannot confirm motion patterns, the interface suggests a preference for immediate state changes over elaborate transitions. Expandable reasoning steps use chevron rotation and height animation. The search results panel implies scroll-based loading with progressive result appearance.

**Density and rhythm.** Information density is high but not cramped. The 14px body size with 20px line height creates a compact readable block. Margins between major sections use 24px to 48px, while related elements cluster at 8px to 12px intervals. The visual rhythm alternates between dense information clusters and generous breathing room around hero moments.

## Components

**Chat message bubble.** User messages appear as elevated pills with rounded corners (approximately 20px radius) and surface-elevated background, right-aligned in the conversation stream. Agent responses use the canvas background with full-width text blocks, creating clear authorship distinction without color variation. Typography uses the body token at 14px.

**Reasoning step (Think block).** Expandable research steps use the surface background with subtle left-edge indentation. Each step includes an icon prefix (lightbulb for ideas, search for queries), a title in label weight, and expandable body text in body-relaxed. Nested steps indent further, creating a visual hierarchy of investigation depth. Borders are 0.5px white hairlines on the container perimeter.

**Search result card.** Each result presents a source favicon, verified domain badge, publication date, title in title-medium weight, and excerpt in body-relaxed. PDF badges use danger-bright background with white text. The "Read more" link uses the action color. Cards stack vertically with 8px to 12px spacing, separated by hairline borders or subtle background shifts.

**Input bar.** Fixed to the viewport bottom, the input bar uses surface-elevated background with a rounded container (approximately 20px radius). It contains a text input with placeholder text at reduced opacity, an attachment button, a token counter, an agent selector dropdown, and a circular send button. The agent selector displays "K2.5 Agent" with a dropdown chevron, while the send button uses a filled circle with a right-arrow icon.

**Action button.** Two variants appear: a filled white button with canvas text for primary actions, and an inverse outline button with white border and text for secondary actions. Both use 8px to 12px horizontal padding, 8px vertical padding, and 8px to 10px border radius. The label token at 500 weight provides sufficient emphasis.

**Task progress header.** Agent workspace headers display a pixel-art computer icon, product name in hero-display typography, a green status dot, and task description in body size. Progress indicators show "Task Progress 4/8" with a right-arrow link to the current subtask.

**Product card (Kimi Claw).** A distinctive promotional component with cream background contrasting against the dark canvas. Features large playful illustrations, product name in system sans-serif, beta badge in reduced-opacity text, and a create-action row with orange avatar, description, and white create button. The card uses 12px to 16px internal padding and approximately 16px corner radius.

## Responsive behavior

The interface adapts primarily through panel visibility and content reflow. The split-pane workspace collapses to a single column on narrow viewports, with the task tree becoming a collapsible overlay or disappearing entirely. Chat interfaces maintain their centered single-column layout across widths, with maximum line lengths preserved through padding reduction rather than content narrowing.

The input bar remains fixed-position at all sizes, with touch targets expanding to minimum 44px on mobile contexts. Agent selector and send button maintain their right-edge anchoring. Reasoning steps retain their indent hierarchy but may truncate titles with ellipsis on narrow screens.

Image generation and code preview panels stack vertically when horizontal space is insufficient. The Tailwind configuration view from the agent workspace implies a responsive code editor that maintains syntax highlighting and line numbers across widths.

## Practical implementation guidance

**Preserve.** The extreme contrast between near-black backgrounds and white text is central to the brand; maintain #000000 canvas and #FFFFFF ink as non-negotiable foundations. The pixel-art typography in hero-display moments provides essential personality differentiation from generic AI interfaces. The 0.5px hairline borders on elevated surfaces create subtle depth without visual noise—preserve this delicate treatment.

**Avoid.** Do not introduce light mode variants without extensive rethinking of the color system; the current palette is optimized for dark-mode contrast ratios. Avoid increasing body text size beyond 16px for functional text, as density is a core value proposition. Do not use the pixel font for body text or UI labels; reserve it for brand headers and celebratory moments. Avoid colored backgrounds for message bubbles; the authorship distinction comes from alignment and surface elevation, not hue.

**Recommended build order.** Establish the color tokens and typography scale first, as these govern every subsequent decision. Build the chat message container and input bar as the foundational layout primitives. Implement the reasoning step component with its expand/collapse interaction and nested indentation. Add search result cards with their favicon, badge, and citation structure. Finally, layer in the agent workspace split-pane layout and task progress header.

**Accessibility.** Maintain a minimum 7:1 contrast ratio for all body text against the canvas background; the current white-on-black pairing exceeds this. Ensure interactive elements have visible focus indicators, likely using the action blue with sufficient offset or outline. The pixel-art font should never be used for critical instructions or small sizes; reserve it for decorative headers at 20px and above. Provide text alternatives for all icon-only buttons, particularly the send button and attachment controls. When implementing expandable reasoning steps, use proper heading hierarchy and aria-expanded attributes for screen reader users.

## Scope note

This guide covers the conversational chat interface, agent workspace with split-pane layouts, search results presentation, and product marketing cards as visible in the supplied captures. Pricing pages, settings panels, and subscription flows are not represented. Motion design, mobile-specific layouts, and dark-to-light mode transitions fall outside the current scope.
