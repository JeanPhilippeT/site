# JPT Fashion Website - Deployment Guide

## ✅ Changes Made

### 1. **Logo Size Updates**
- **Header logo**: Increased from `h-10 md:h-14` to `h-16 md:h-20`
- **Footer logo**: Increased from `h-12 md:h-16` to `h-20 md:h-24`
- Updated across all pages:
  - Main page (`page.tsx`)
  - Collections page (`/collections/page.tsx`)
  - Individual collection pages (`/collections/[slug]/page.tsx`)
  - Interview page (`/interview/page.tsx`)

### 2. **Port Configuration**
Added multiple port options in `package.json`:

```json
"scripts": {
  "dev": "next dev",
  "dev:8080": "next dev -p 8080",
  "dev:4000": "next dev -p 4000",
  "build": "next build",
  "start": "next start", 
  "start:8080": "next start -p 8080",
  "start:4000": "next start -p 4000",
  "lint": "next lint"
}
```

## 🚀 Currently Running Servers

### Production Server (Built & Optimized)
- **URL**: http://localhost:8080
- **Command used**: `npm run start:8080`
- **Status**: ✅ Running (PID: 74019)

### Development Server (Hot Reload)
- **URL**: http://localhost:4000  
- **Command used**: `npm run dev:4000`
- **Status**: ✅ Running (PID: 74044)

## 🎯 Available Commands

### Development (with hot reload)
```bash
npm run dev         # Default port 3000
npm run dev:4000    # Port 4000
npm run dev:8080    # Port 8080
```

### Production (optimized build)
```bash
npm run build       # Build the application
npm run start       # Start on default port 3000
npm run start:4000  # Start on port 4000
npm run start:8080  # Start on port 8080
```

## 🔍 Testing Your Website

### Production Version (Port 8080)
Visit: **http://localhost:8080**
- Optimized for performance
- All static assets compiled
- Best for final testing

### Development Version (Port 4000)  
Visit: **http://localhost:4000**
- Hot reload enabled
- Real-time changes
- Best for continued development

## 📋 What to Test

### Logo Visibility
- Check header logo size on all pages
- Verify footer logo size
- Test responsiveness on mobile/desktop

### Collections Functionality
- Browse collections from main page
- Click individual collection items
- Test lightbox image viewer
- Navigate between related collections

### Navigation
- Test all menu links
- Verify collection page routing
- Check back button functionality

## 🛑 Managing Servers

### To Stop Servers
```bash
# Find running processes
lsof -i :8080
lsof -i :4000

# Kill specific process (replace PID)
kill 74019  # Production server
kill 74044  # Development server
```

### To Restart
```bash
# Production
npm run build && npm run start:8080

# Development  
npm run dev:4000
```

## ✨ Logo Size Changes Summary

| Location | Before | After |
|----------|--------|-------|
| Header Mobile | h-10 (40px) | h-16 (64px) |
| Header Desktop | h-14 (56px) | h-20 (80px) |
| Footer Mobile | h-12 (48px) | h-20 (80px) |
| Footer Desktop | h-16 (64px) | h-24 (96px) |

The logo is now significantly more prominent and maintains the luxury brand aesthetic across all devices.
