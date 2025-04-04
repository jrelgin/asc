# Project Requirements Document (PRD)

## Project Overview
This project involves building a modern community website using NextJS and TinaCMS. The site is a one-page layout that showcases a community organization with multiple sections including a hero section, information about joining, team members, and community resources.

## Goals & Objectives
- ✅ Build a modern, performant website with NextJS
- ✅ Create a maintainable codebase with clear component structure
- ✅ Implement Tailwind CSS for styling
- 🔄 Implement TinaCMS for content management

## Target Audience
- Community members
- Potential new members
- Event participants
- Organizers and contributors

## Technical Requirements

### Tech Stack
- **Frontend Framework**: ✅ NextJS
- **Content Management**: 🔄 TinaCMS (in progress)
- **Styling**: ✅ Tailwind CSS
- **Deployment**: ✅ Vercel

### Component Structure
✅ We've implemented a section-based architecture for simplified maintenance:

```
components/
  ├── layout/
  │   ├── Header.tsx (implemented)
  │   ├── Footer.tsx (implemented)
  │   └── Layout.tsx (wrapper, implemented)
  ├── sections/
  │   ├── Hero.tsx (with vertical scroll gallery, implemented)
  │   ├── WhyJoin.tsx (implemented)
  │   ├── WhoWeAre.tsx (implemented)
  │   ├── ProcessSteps.tsx (implemented)
  │   ├── Organizers.tsx (implemented)
  │   └── SlackCommunity.tsx (implemented)
  ├── ui/
  │   ├── Button.tsx (implemented)
  │   ├── PersonCard.tsx (implemented)
  │   ├── StepCard.tsx (implemented)
  │   ├── ImageGallery.tsx (implemented)
  │   └── VerticalScrollGallery.tsx (implemented)
```

### Current Content Structure
The current TinaCMS content is organized as follows:

```
content/
  ├── page/
  │   ├── home.mdx 
  │   └── about.mdx
  ├── post/
  │   └── [...post files].md
  ├── home/
  │   (empty, prepared for future content)
```

## Page Sections (All Implemented with Static Content)

### 1. Hero Section
- Large headline: "Work for yourself, not by yourself"
- Supporting subheadline text
- Call-to-action button
- Vertical scrolling gallery showcasing community members

### 2. Why Join Section
- Section heading
- Descriptive text explaining benefits
- Supporting image

### 3. Who We Are Section
- Section heading
- Mission statement or description

### 4. Process Steps Section
- Section heading
- Step cards with icons
- Each card includes a title and description

### 5. Organizers Section
- Section heading
- Grid of team member cards
- Each card includes photo, name, title/role, and brief description

### 6. Slack Community Section
- Section heading
- Description of the Slack community
- Call-to-action to join

### 7. Header & Footer
- Navigation links
- Copyright information
- Social media links

## Current State
- ✅ Project structure with NextJS is set up and working
- ✅ All UI components have been created and styled with Tailwind CSS
- ✅ All page sections have been implemented with static/hardcoded content
- ✅ Responsive design has been implemented
- ✅ Site is deployed to Vercel (main branch)
- 🔄 Basic TinaCMS integration is in place but needs enhancement

## Remaining Implementation Plan
1. Enhance TinaCMS Schema (CURRENT PRIORITY)
   - Create schemas for each section component
   - Create schemas for team members
   - Define fields that match the component props
2. Connect Components to TinaCMS
   - Refactor components to use data from TinaCMS
   - Implement asset management for images
3. Test and Optimize
   - Test content editing workflows
   - Optimize performance

## Success Criteria
- ✅ Site has a modern, responsive design
- 🔄 Content is easily editable through TinaCMS
- ✅ Page loads quickly and performs well on all devices
- ✅ Codebase is clean, maintainable, and well-documented
