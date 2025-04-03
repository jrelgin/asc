# Project Requirements Document (PRD)

## Project Overview
This project involves migrating an existing Webflow site to a modern tech stack using NextJS and TinaCMS. The site is a one-page layout that showcases a community or organization with multiple sections including a hero section, information about joining, team members, and community resources.

## Goals & Objectives
- Migrate the existing Webflow site to NextJS and TinaCMS
- Maintain the current design aesthetic while improving performance
- Create a maintainable codebase with clear component structure
- Implement Tailwind CSS for styling
- Ensure content is easily editable through TinaCMS

## Target Audience
- Community members
- Potential new members
- Event participants
- Organizers and contributors

## Technical Requirements

### Tech Stack
- **Frontend Framework**: NextJS
- **Content Management**: TinaCMS
- **Styling**: Tailwind CSS
- **Deployment**: TBD

### Component Structure
We will implement a section-based architecture for simplified maintenance and content editing:

```
components/
  ├── layout/
  │   ├── Header.tsx
  │   ├── Footer.tsx
  │   └── Layout.tsx (wrapper)
  ├── sections/
  │   ├── Hero.tsx (with image gallery)
  │   ├── WhyJoin.tsx
  │   ├── WhoWeAre.tsx
  │   ├── ProcessSteps.tsx
  │   ├── Organizers.tsx
  │   └── SlackCommunity.tsx
  ├── ui/
  │   ├── Button.tsx
  │   ├── Card.tsx
  │   ├── ImageGallery.tsx
  │   ├── PersonCard.tsx
  │   └── StepCard.tsx
```

### Content Structure
TinaCMS content will be organized as follows:

```
content/
  ├── pages/
  │   └── home.md 
  ├── sections/
  │   ├── hero.md
  │   ├── why-join.md
  │   ├── who-we-are.md
  │   ├── process.md
  │   ├── organizers.md
  │   └── community.md
  ├── team/
  │   └── [member-files].md
```

## Page Sections

### 1. Hero Section
- Large headline: "Work for yourself, not by yourself"
- Supporting subheadline text
- Call-to-action button
- Image grid/gallery showcasing community members

### 2. Why Join Section
- Section heading
- Descriptive text explaining benefits
- Supporting image

### 3. Who We Are Section
- Section heading
- Mission statement or description
- Supporting visuals if needed

### 4. Process Steps Section ("Be a Part of it")
- Section heading
- 3-4 step cards with icons
- Each card includes a title and description

### 5. Organizers Section
- Section heading
- Grid of team member cards
- Each card includes:
  - Photo
  - Name
  - Title/Role
  - Brief description

### 6. Slack Community Section
- Section heading
- Description of the Slack community
- Call-to-action to join

### 7. Footer
- Navigation links
- Copyright information
- Social media links

## Responsive Design Requirements
- Mobile-first approach
- Breakpoints for common device sizes
- Optimized images for different screen sizes

## Current State
- Project structure with NextJS is set up
- TinaCMS is integrated and connected to Vercel
- Basic content schema exists but needs enhancement
- Simple page structure is in place

## Implementation Plan
1. Install Tailwind CSS for responsive styling
2. Enhance TinaCMS Schema
   - Update collections to support sections from Webflow design
   - Create schemas for components (hero, features, team members, etc.)
3. Create Component Architecture
   - Develop reusable UI components (Button, Card, etc.)
   - Build section components matching the Webflow design
   - Create robust layout with header and footer
4. Implement Home Page
   - Recreate the design from Webflow
   - Connect to TinaCMS for content management
5. Add Responsive Styling
   - Implement responsive design using Tailwind
6. Test and Optimize

## Success Criteria
- Site visually matches the design from Webflow
- Content is editable through TinaCMS
- Page loads quickly and performs well on all devices
- Codebase is clean, maintainable, and well-documented
