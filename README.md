# International Conference on Emerging Technologies 2026 - Website

## Overview
A modern, responsive website for the International Conference on Emerging Technologies (ICET 2026) being conducted at your college. This website serves as the primary platform for conference information, registration, and participant engagement.

## Website Features

### 🎯 Core Components
1. **Navigation Bar** - Conference header with main navigation
2. **Hero Section** - Conference title, tagline, and call-to-action
3. **About Conference** - Conference details, statistics, and tracks
4. **Featured Speakers** - Keynote speaker profiles with photos
5. **Conference Schedule** - Three-day detailed schedule with color coding
6. **Registration** - Pricing tiers, important dates, and contact info
7. **Footer** - Quick links, important dates, and contact information

### 🎨 Design Features
- Modern, professional design suitable for academic conferences
- Fully responsive for mobile, tablet, and desktop
- Color-coded schedule for easy navigation
- Interactive elements with hover effects
- Animated marquee for highlighting key features
- Clean, organized layout without comments in code

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx           # Navigation with conference header
│   ├── Hero.tsx             # Main banner with conference title
│   ├── AboutConference.tsx  # Conference details and statistics
│   ├── Speakers.tsx         # Featured speakers section
│   ├── Schedule.tsx         # Three-day conference schedule
│   ├── Registration.tsx     # Registration information and pricing
│   └── Footer.tsx           # Footer with links and contact info
├── App.tsx                  # Main application component
├── index.css               # Global styles with Tailwind
└── main.tsx                # Application entry point
```

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization Guide

### 1. Update Conference Details
- Edit `src/components/Navbar.tsx` for conference name, dates, location
- Modify `src/components/Hero.tsx` for main title and tagline
- Update contact information in `src/components/Footer.tsx`

### 2. Add Real Content
- Replace placeholder speaker images with actual photos
- Update speaker information in `src/components/Speakers.tsx`
- Modify schedule details in `src/components/Schedule.tsx`
- Adjust pricing in `src/components/Registration.tsx`

### 3. Content Areas to Populate
- **Conference Tracks**: AI & ML, Emerging Technologies, Sustainable Tech
- **Speaker Profiles**: 4 featured speakers with placeholder images
- **Schedule**: Three-day detailed schedule with sessions
- **Registration**: Three pricing tiers with features
- **Contact Information**: Email, phone, venue details

## Technical Stack
- **React 19** - Frontend library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Vite** - Build tool and development server

## Development Server
The website runs on `http://localhost:5174/` (port may vary if 5173 is in use)

## Next Steps for Content Population
1. Collect real conference data (dates, venue, speakers)
2. Replace placeholder images with actual photos
3. Update schedule with actual session details
4. Configure registration pricing and policies
5. Add additional pages as needed (Contact, Venue, Accommodation)

## Notes
- All components are modular and easy to update
- Design follows modern web standards
- No comments in code as requested - clean, organized structure
- Placeholder content is clearly marked for easy replacement

## License
This project is for academic conference use. Customize as needed for your specific requirements.
