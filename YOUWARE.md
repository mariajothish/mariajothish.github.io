# Maria Jothish - Professional Portfolio

This is a professional job application portfolio website built for Maria Jothish, showcasing her experience as a Computer Science student and AI researcher at Georgia Tech.

## Project Overview

**Project Type**: React + TypeScript Professional Portfolio Website
**Entry Point**: `src/main.tsx` (React application entry)
**Build System**: Vite 7.0.0 (Fast development and build)
**Styling System**: Tailwind CSS 3.4.17 (Atomic CSS framework)

## Key Features Implemented

### Single-Page Portfolio Structure
- **Navigation**: Fixed top-right navigation bar with smooth scrolling to sections
- **Sections**: Home, About, Projects, Experience, Contact (all on one long page)
- **Smooth Scrolling**: Custom JavaScript implementation for anchor navigation

### Visual Design Elements
- **Animated Background**: Canvas-based moving dots with connection lines
- **Gradient Typography**: Beautiful gradient text effects for headings
- **Glass Morphism**: Backdrop blur effects throughout the interface
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Interactive Components
- **Resume Download**: Direct PDF download functionality from public/resume/
- **Contact Form**: Email integration with pre-filled mailto functionality
- **Scroll-based Navigation**: Active section highlighting based on scroll position
- **Hover Animations**: Smooth transitions and transform effects

### Content Sections

#### Hero Section
- Centered name with gradient text effect
- Role subtitle and bio paragraph
- Two CTA buttons: "Download Resume" and "Get in Touch"
- Animated chevron for scroll indication

#### About Section
- Professional headshot display (left side)
- Comprehensive bio and achievements (right side)
- Key metrics highlighting impact (40% and 66% improvements)

#### Projects Section
- Two featured projects: Microsoft Copilot Agent and TI-Share
- Detailed achievements and technology stacks
- Additional projects showcase in grid layout

#### Experience Section
- Timeline-based chronological display
- Alternating left/right layout for visual interest
- Type badges (Internship, Research, Part-time)
- Comprehensive achievement bullets and technology tags

#### Contact Section
- Contact information with clickable links
- "Currently Open To" opportunities list
- Full contact form with email integration
- Professional messaging and clear CTAs

## Technical Architecture

### Component Structure
```
src/components/
├── AnimatedBackground.tsx    # Canvas-based moving dots animation
├── Navigation.tsx           # Fixed navigation with scroll detection
├── Hero.tsx                # Main landing section with CTAs
├── About.tsx               # Professional introduction and photo
├── Projects.tsx            # Featured and additional projects
├── Experience.tsx          # Timeline-based experience display
└── Contact.tsx             # Contact info and messaging form
```

### Dependencies Added
- `@heroicons/react`: Professional iconography throughout the interface

### Asset Management
- Professional headshot: `src/assets/maria-professional-headshot.jpg`
- Resume file: `public/resume/MariaJ_Resume.pdf`
- Project documents: `public/documents/CS-4675-Proposal.pdf`, `public/documents/TI-SHARE-Final-Presentation.pdf`

## Content Strategy

### Professional Information Extracted
- **Personal Details**: Maria Jothish, Georgia Tech CS student
- **Contact**: mariaphilipj@gmail.com, (470) 546-2777, LinkedIn profile
- **Education**: CS with Intelligence & Information Internetworks concentration
- **Key Experience**: Cox Enterprises (Test Automation), GT VIP (AI Research)
- **Major Projects**: Microsoft Copilot Agent, TI-Share, StudyBuzz
- **Skills**: Python, AI integration, automation, full-stack development

### Design Approach
- **Professional Color Scheme**: Deep blues, purples, and gradients on dark background
- **Modern Aesthetics**: Glass morphism, smooth animations, gradient text
- **Information Hierarchy**: Clear sections with visual separation and progressive disclosure
- **Call-to-Action Strategy**: Prominent resume download and contact options

## Development Commands

- **Install dependencies**: `npm install`
- **Build project**: `npm run build`
- **Development server**: Available but not used per project requirements

## Build Verification

✅ **Build Status**: Successfully compiled with Vite
✅ **Visual Verification**: Screenshots confirm proper rendering of all sections
✅ **Interactive Elements**: Navigation, downloads, and contact forms functional
✅ **Responsive Design**: Mobile and desktop layouts working properly

## Future Enhancement Opportunities

Based on the completed portfolio, potential enhancements could include:
- Blog section for technical writing and project updates
- Interactive project demos or live links
- Skills visualization with progress indicators
- Testimonials or recommendations section
- Integration with professional networks or project repositories

## File Organization

The project maintains clean separation of concerns:
- **Components**: Modular React components for each portfolio section
- **Assets**: Professional images and downloadable resources
- **Styling**: Tailwind CSS classes with custom animations
- **Types**: TypeScript interfaces for type safety throughout