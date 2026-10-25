# Implementation Plan

**Portfolio Refinement: Black & Champagne Gold Theme Enhancement**

This plan implements UI/UX improvements to Aashya Madhan's Next.js portfolio with a focus on the black-and-champagne-gold theme, responsive design, and a new modal-based project details system.

## Pre-Implementation Notes

- **Project Stack**: Next.js 16.1.6, React 19, TypeScript, Tailwind CSS v4, Framer Motion 12.34.0
- **Build Command**: `npm run build`
- **Dev Command**: `npm run dev -p 3002`
- **Known Issue**: The project references a missing `~/lib/blog` module in `src/app/sitemap.ts`. This is a pre-existing issue unrelated to our changes.
- **Color Palette**:
  - Background: #080808
  - Section background: #111111
  - Card background: #181818
  - Primary gold: #C5A568
  - Light gold: #DFC58F
  - Main text: #F5F1E8
  - Body text: #B8B5AE
  - Muted text: #858585
  - Borders: #2A2A2A
  - Gold border: #403522

## Priority Order

The Projects section changes (items 3-7) are **highest priority** and involve creating new files, so they are implemented first. Then Hero, About, Experience, Skills, Contact/Resume sections, and finally global polish.

---

## Implementation Steps

- [ ] 1. **Extend Project type interface to support modal content**
      
      Add optional `modalContent` field to the `Project` interface in `src/types/data.ts` to support rich project details including problem statement, contribution, challenges, results, and future screenshot placeholders.
      
      **Files**: `src/types/data.ts`
      
      **Changes**:
      - Add optional `modalContent?: { introduction?: string; problemStatement?: string; contribution?: string; features?: string[]; challenges?: string[]; results?: string; }` field to `Project` interface
      - Add optional `screenshots?: string[]` field to `Project` interface for future image paths
      
      **Verify**: Run `npm run build` and confirm TypeScript compilation succeeds with no type errors.

- [ ] 2. **Update project data with modal content placeholders**
      
      Enhance `src/data/projects.ts` to include `modalContent` and `screenshots` placeholders for SafePulse, PrepForge, and VerifAura AI using ONLY existing information from the current descriptions and highlights. Do NOT invent features, results, or technical details.
      
      **Files**: `src/data/projects.ts`
      
      **Changes**:
      - For each project (SafePulse, PrepForge, VerifAura AI), add `modalContent` object with:
        - `introduction`: Brief 1-2 sentence intro (use existing description as base)
        - `problemStatement`: Extract from current context if available, otherwise use "Details coming soon"
        - `contribution`: Extract from highlights if available (e.g., "Built full-stack authentication system...")
        - `features`: Convert existing `highlights` detail text into feature list format
        - `challenges`: Use "Technical challenges and solutions coming soon" as placeholder
        - `results`: Use "Quantitative results and impact metrics coming soon" as placeholder
      - Add `screenshots` field with placeholder paths: `["/projects/<project-id>-1.jpg", "/projects/<project-id>-2.jpg"]` with TODO comment noting these are placeholders for future screenshots
      
      **Verify**: Run `npm run build` and confirm no TypeScript errors. Check that project data is properly structured.

- [ ] 3. **Create ProjectModal component**
      
      Build a reusable, accessible modal component at `src/components/ui/ProjectModal.tsx` that displays full project details with smooth animations, keyboard navigation, focus trapping, and body scroll lock.
      
      **Files**: `src/components/ui/ProjectModal.tsx` (new file)
      
      **Component Requirements**:
      - Props: `project: Project | null`, `onClose: () => void`
      - Use Framer Motion's `AnimatePresence` and `motion.div` for entrance/exit animations
      - Fixed overlay with dark backdrop (`bg-black/80 backdrop-blur-sm`)
      - Centered modal container with `max-w-4xl`, scrollable content, `bg-[#181818]`, `border border-[#2A2A2A]`, `rounded-2xl`
      - Close button (X icon) in top-right, clearly visible with gold hover (`text-[#B8B5AE] hover:text-[#C5A568]`)
      - Close on backdrop click, Escape key press
      - Body scroll lock: use `useEffect` to add/remove `overflow-hidden` on `document.body` when modal is open
      - Accessibility: `role="dialog"`, `aria-modal="true"`, focus trap (focus on modal when opened, return focus on close)
      - Layout sections (render only when data exists):
        1. Header: Project title + close button
        2. Screenshot placeholder: if `project.screenshots?.[0]`, show placeholder div with text "Screenshot coming soon" and border, otherwise skip
        3. Introduction (if `modalContent.introduction`)
        4. Problem Statement (if `modalContent.problemStatement` and not "coming soon")
        5. Description (always show `project.description`)
        6. Contribution (if `modalContent.contribution`)
        7. Features list (if `modalContent.features?.length > 0`, render as bulleted list)
        8. Tech Stack (show `project.techStack` as badges matching card style)
        9. Challenges (if `modalContent.challenges` and not "coming soon")
        10. Results (if `modalContent.results` and not "coming soon")
        11. Footer: GitHub and Live Demo links as buttons (handle click to stop propagation)
      - Typography: headings in `text-[#F5F1E8]`, body text in `text-[#B8B5AE]`, gold accents for links/buttons
      - Responsive: full padding adjustments for mobile (`p-4 md:p-6`)
      
      **Verify**: Component compiles without errors. Test by temporarily importing and rendering in a test page.

- [ ] 4. **Refactor ProjectCard into compact clickable card**
      
      Transform `src/components/ui/ProjectCard.tsx` from a detailed card into a compact, scannable card with title, short summary, key tech badges, and "View Details" cue. Accept an `onClick` prop.
      
      **Files**: `src/components/ui/ProjectCard.tsx`
      
      **Changes**:
      - Add `onClick?: () => void` to `ProjectCardProps`
      - Remove the large `highlights` grid section (it will now be in the modal)
      - Show only:
        1. Project title (`text-xl font-semibold text-[#F5F1E8]`)
        2. Description truncated to 2-3 lines using `line-clamp-3` utility
        3. Only first 2-3 tech stack badges (not all)
        4. Subtle "View Details" text or arrow icon at bottom (`text-sm text-[#C5A568] flex items-center gap-1` with `ArrowRight` icon from `lucide-react`)
      - Remove or minimize the GitHub/npm/live links (they'll be in modal)
      - Keep hover effect: `hover:border-[#C5A568] hover:-translate-y-1` for subtle elevation
      - Add `onClick` handler to card wrapper div with `cursor-pointer` class
      - Maintain `disabled` state styling (opacity-40, no hover)
      - Remove `featured` grid spanning logic (grid will be uniform in Projects section)
      - Target card height: uniform, not excessively tall (let content determine, but keep description truncated)
      
      **Verify**: Run `npm run build` and confirm no errors. Visual check: cards should look compact and uniform.

- [ ] 5. **Update Projects section with grid and modal integration**
      
      Modify `src/components/sections/Projects.tsx` to use a responsive 3-column grid, manage modal state, and pass `onClick` handlers to each ProjectCard.
      
      **Files**: `src/components/sections/Projects.tsx`
      
      **Changes**:
      - Import `ProjectModal` from `~/components/ui/ProjectModal`
      - Add state: `const [selectedProject, setSelectedProject] = useState<Project | null>(null);` (import `useState` from React)
      - Replace `space-y-6` layout with responsive grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
      - Remove `featured` prop from `<ProjectCard>` (all cards are now uniform)
      - Add `onClick={() => setSelectedProject(project)}` to each `<ProjectCard>`
      - Remove `className="h-full"` from ProjectCard if it causes issues
      - At the end of the section (after the grid), render:
        ```tsx
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
        ```
      - Ensure section has proper scroll margin to avoid navbar overlap: add `scroll-mt-20` to section or AnimatedSection wrapper
      
      **Verify**: Run `npm run build`. Check for TypeScript errors. Test clicking a card to open modal, Escape to close, backdrop click to close.

- [ ] 6. **Hero section: champagne gold name and stat values**
      
      Update `src/components/sections/Hero.tsx` to make "Aashya Madhan" champagne gold (or gradient), make statistic values (9.41, 3+, 2+, IEEE) champagne gold, and refine stat card styling for a premium look.
      
      **Files**: `src/components/sections/Hero.tsx`
      
      **Changes**:
      - Change name `<span className="gradient-text">` to either:
        - Option A: `text-[#C5A568]` for flat champagne gold
        - Option B: Keep `gradient-text` class but verify it uses gold gradient (check globals.css: `linear-gradient(135deg, #F5F1E8 0%, #C5A568 100%)` — this is acceptable, or update to `linear-gradient(135deg, #C5A568 0%, #DFC58F 100%)` for full gold gradient via inline `style` or new class)
      - Statistic cards: change all stat values from `gradient-text` to `text-[#C5A568]` (9.41, 3+, 2+, and the "IEEE" text)
      - Stat card labels: ensure they use `text-[#858585]` or `text-[#B8B5AE]` (muted color)
      - Stat cards styling refinement:
        - Keep `glass` class (provides `bg-[#181818]`, `border border-[#2A2A2A]`)
        - Verify cards have consistent padding `p-6`, `rounded-2xl`
        - Add subtle gold highlight on hover via `card-hover` class (already has gold border on hover)
      - Ensure all hero content is centered: verify `text-center`, `mx-auto`, `justify-center` classes are in place
      - Responsive: verify grid is `grid-cols-2 md:grid-cols-4` for stats
      
      **Verify**: Run dev server `npm run dev -p 3002`, open `http://localhost:3002`, check that name is gold, stat values are gold, labels are muted, cards look premium with dark bg and subtle borders.

- [ ] 7. **About section: fix text alignment and spacing**
      
      Refactor `src/components/sections/About.tsx` to center the heading/subtitle, place bio text in a max-width container with left-aligned paragraphs, ensure stat cards are equal height, reduce excessive whitespace, and add scroll margin to prevent navbar overlap.
      
      **Files**: `src/components/sections/About.tsx`
      
      **Changes**:
      - SectionHeading is already centered (verify `text-center` in `<SectionHeading>`)
      - Bio paragraph:
        - Wrap `<p>` in a container: `<div className="max-w-3xl mx-auto"><p className="text-[#B8B5AE] leading-relaxed text-lg text-left">`
        - Change from `text-center` to `text-left` for paragraph text
        - Container is centered (`mx-auto`) but text inside is left-aligned for readability
      - Stat cards grid:
        - Change from `grid grid-cols-2 md:grid-cols-4` to `grid grid-cols-2 md:grid-cols-5` (4 stats + 1 "Building Tools" card = 5 items)
        - Or keep `md:grid-cols-4` and have last card span or wrap
        - Ensure all cards have equal height by keeping consistent `p-6`, no auto-height variations
        - Verify all stat cards use same classes: `glass card-hover rounded-2xl p-6`
      - Reduce vertical spacing:
        - Change `space-y-10` to `space-y-8` or `space-y-6` between bio and stats
        - Verify section padding is `py-20` or `py-24` (check AnimatedSection default)
      - Add scroll margin: in `<AnimatedSection id="about">`, add `className="scroll-mt-20"` to prevent sticky navbar from covering section heading when scrolling
      
      **Verify**: Run dev server, check About section: heading centered, bio in narrow centered column with left-aligned text, stat cards equal height in one row on desktop, reduced spacing, navbar doesn't hide heading when navigating to #about.

- [ ] 8. **Experience section: refine layout and visual hierarchy**
      
      Polish `src/components/sections/Experience.tsx` for consistent card padding, date alignment, typography hierarchy, and responsive timeline layout.
      
      **Files**: `src/components/sections/Experience.tsx`
      
      **Changes**:
      - Card padding: ensure all experience cards have consistent `p-6` (verify in `glass card-hover rounded-2xl p-6`)
      - Date alignment desktop: use `flex justify-between items-start` on the row containing role and date
        ```tsx
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <h3 className="text-lg font-semibold text-[#F5F1E8]">{exp.role}</h3>
          <span className="text-sm text-[#858585] font-mono sm:text-right">{exp.period}</span>
        </div>
        ```
      - Company/org links: keep `text-[#C5A568]` for clickable company names
      - Typography hierarchy:
        - Role: `text-lg font-semibold text-[#F5F1E8]`
        - Company: `text-sm font-medium text-[#C5A568]`
        - Highlights: `text-sm text-[#B8B5AE]`
        - Tech badges: `text-xs text-[#B8B5AE] font-mono`
      - Bullet points: keep gold bullet `text-[#C5A568]`
      - Remove oversized empty areas: verify no excessive padding or margins inside cards
      - Mobile timeline: already single column with `relative pl-10` (timeline dot on left)
      - Preserve all factual details (dates, achievements, metrics) exactly as is
      
      **Verify**: Run dev server, check Experience section: cards have consistent padding, dates align right on desktop, typography is clear, no large gaps, single-column timeline on mobile.

- [ ] 9. **Skills/TechStack section: refine badge alignment**
      
      Improve `src/components/sections/TechStack.tsx` and `src/components/ui/SkillBadge.tsx` for uniform badge heights, consistent spacing, and natural wrapping.
      
      **Files**: `src/components/sections/TechStack.tsx`, `src/components/ui/SkillBadge.tsx`
      
      **Changes TechStack.tsx**:
      - Verify category heading is `text-xl font-bold text-[#F5F5F5]` (or `text-[#F5F1E8]`)
      - Badge container: ensure `flex flex-wrap gap-3` for natural wrapping
      - Section uses `space-y-10` between categories (reasonable)
      
      **Changes SkillBadge.tsx**:
      - Ensure badge has uniform height: `px-4 py-2.5` (already present)
      - Verify `rounded-xl glass` classes are applied
      - Icon size: `width={20} height={20}` (already present)
      - Text: `text-sm font-medium text-[#F5F1E8]`
      - Hover: `hover:border-[#C5A568]` transition
      - Keep original icon colors (do NOT recolor third-party logos via CSS filters)
      
      **Verify**: Run dev server, check Skills section: badges have uniform height, spacing is consistent, they wrap cleanly on narrow screens, icons retain brand colors.

- [ ] 10. **Contact section: equal card heights and consistent styling**
       
       Update `src/components/sections/Contact.tsx` to make all three contact cards equal height on desktop, align icon containers, headings, descriptions, and buttons consistently.
       
       **Files**: `src/components/sections/Contact.tsx`
       
       **Changes**:
       - Grid: `grid md:grid-cols-3 gap-6` (already present)
       - Each card: add `h-full flex flex-col` to ensure equal height
       - Icon container: `w-14 h-14 rounded-2xl bg-[#C5A568]/8 flex items-center justify-center mx-auto mb-4 border border-[#403522]` (already present, verify consistency)
       - Heading: `text-xl font-bold text-[#F5F1E8] mb-3` (check consistency across all 3 cards)
       - Description text: `text-sm text-[#858585]` (check email card: `break-all` class may be too aggressive, use `break-words` instead)
       - Button/link styling:
         - Primary actions: `text-sm text-[#C5A568] hover:text-[#DFC58F] font-semibold`
         - Social buttons: `glass px-4 py-2.5 rounded-xl text-sm text-[#B8B5AE] hover:text-[#C5A568] hover:border-[#403522]`
       - Card background: `glass rounded-2xl p-8` (verify consistent padding)
       - Ensure all cards have same `p-8`, same structure (icon, heading, description, action)
       
       **Verify**: Run dev server, check Contact section on desktop: all 3 cards same height, icons/headings/text aligned, styling consistent, dark bg with gold accents.

- [ ] 11. **Resume CTA section: gold button styling**
       
       Refine `src/components/sections/ResumeCTA.tsx` to ensure the primary "View Resume" button uses champagne gold background with dark text, and secondary elements have subtle borders.
       
       **Files**: `src/components/sections/ResumeCTA.tsx`
       
       **Changes**:
       - Primary button: `bg-[#C5A568] hover:bg-[#DFC58F] text-[#080808] font-semibold` (verify dark text for contrast)
       - Button shadow: `shadow-lg shadow-[#C5A568]/25 hover:shadow-[#DFC58F]/30` (already present, verify)
       - Section container: `bg-[#181818] border border-[#2A2A2A] rounded-2xl` (already present)
       - Heading: `text-[#F5F1E8]` with gold punctuation `text-[#C5A568]` (already present)
       - Description: `text-[#B8B5AE]` (already present)
       - No secondary buttons in this section, but if added later, use: `border border-[#2A2A2A] text-[#B8B5AE] hover:border-[#C5A568]`
       
       **Verify**: Run dev server, check Resume section: button is gold with dark text, hover transitions smoothly, section has dark bg.

- [ ] 12. **Global layout and visual polish**
       
       Apply final global refinements to `src/app/globals.css` and section wrappers for consistent padding, scroll behavior, starfield opacity, and responsive overflow handling.
       
       **Files**: `src/app/globals.css`, `src/components/ui/AnimatedSection.tsx`
       
       **Changes globals.css**:
       - Starfield opacity: reduce if it's too distracting for readability
         - Find `.star-field::before` and `.star-field::after` rules
         - Reduce opacity values in `box-shadow` rgba() from current values (e.g., `rgba(255,255,255,0.5)` → `rgba(255,255,255,0.3)`) or add `opacity: 0.5;` to `.star-field` itself
       - Verify no horizontal overflow: add `html, body { overflow-x: hidden; }` if not already present (check for existing overflow rules)
       - Verify scroll-behavior: `html { scroll-behavior: smooth; }` (already present)
       - No new dependencies: do NOT import external libraries, keep existing setup
       
       **Changes AnimatedSection.tsx**:
       - Verify consistent section padding: `py-20 md:py-24` (check current `py-[60px] md:py-[120px]` — this is 60px/120px which is ~15rem/30rem, quite large)
       - Adjust to more standard: `py-16 md:py-24` (4rem/6rem) for tighter spacing, or keep existing if spacing is intentional
       - Ensure `scroll-mt-20` or `scroll-mt-24` is added to sections that can be navbar targets (About, Projects, Skills, Experience, Contact) to prevent navbar overlap
       
       **Verify**: Run dev server, full page scroll test: sections have consistent spacing, no horizontal scroll, starfield is subtle, smooth scroll works, navbar doesn't hide section headings.

- [ ] 13. **Final build verification and responsive testing**
       
       Run full build, test all interactive elements, and verify responsive behavior on desktop, tablet, and mobile viewports.
       
       **No file changes — testing phase**
       
       **Actions**:
       1. Run `npm run build` and ensure successful build with no errors
       2. Run `npm run dev -p 3002` and open `http://localhost:3002`
       3. Test all sections:
          - Hero: name is gold, stat values are gold, cards look premium
          - About: bio text centered container with left-aligned paragraphs, stat cards equal height, no excessive whitespace
          - Projects: click each project card, modal opens with full details, close via X/Escape/backdrop, GitHub/Live Demo links work inside modal, no accidental card clicks when clicking links
          - Experience: timeline looks polished, dates align right on desktop, consistent padding
          - Skills: badges uniform height, wrap cleanly, icons retain colors
          - Contact: 3 cards equal height on desktop
          - Resume: gold button with dark text
       4. Responsive testing:
          - Desktop (1920px): 3-column project grid, 4-stat grid in hero, all cards side-by-side
          - Tablet (768px): 2-column project grid, stat cards adapt, timeline readable
          - Mobile (375px): 1-column project grid, stat cards stack or 2-col, timeline single column, modal scrollable, no horizontal overflow
       5. Keyboard navigation: Tab through links, Enter to open modal, Escape to close modal, focus visible
       6. Accessibility: verify modal has `role="dialog"`, `aria-modal="true"`, focus trap works
       
       **Verify**: All sections display correctly, interactions work, responsive layouts adapt smoothly, build succeeds, no console errors, no horizontal overflow, navbar doesn't hide headings, starfield is subtle.

---

## Post-Implementation

After completing all steps:
- The portfolio will have a polished black-and-champagne-gold theme with consistent typography and spacing
- Projects section will feature a clean card grid with detailed modal popups
- All sections will be properly aligned, responsive, and accessible
- The modal system will be maintainable and ready for future screenshot and content additions
- No new dependencies will be added; all changes use existing Framer Motion, Tailwind, and Lucide React setup

## Notes

- **Do NOT invent data**: Use only existing project information. Placeholder text for missing data is acceptable.
- **Accessibility**: Ensure modal has proper focus management, keyboard navigation, and ARIA attributes.
- **No new dependencies**: Use existing setup (React 19, Framer Motion, Tailwind CSS v4, Lucide React).
- **Color consistency**: Use only the specified black-and-gold palette; no teal, cyan, green, or bright yellow.
- **Pre-existing issue**: The missing `~/lib/blog` module in `sitemap.ts` is unrelated to this work and should be ignored during implementation.
