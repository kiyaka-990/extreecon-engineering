# Extreecon Engineering Company Limited — Next.js Website

A modern, full-featured Next.js 14 website for Extreecon Engineering Company Limited.

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **Google Fonts** (Bebas Neue + Barlow)

## Features
- ✅ Animated Hero with floating stat cards
- ✅ Auto-scrolling ticker/carousel
- ✅ Services grid with hover effects
- ✅ Filterable portfolio (Building / Water / Road)
- ✅ Animated testimonials slider
- ✅ Embedded Google Maps
- ✅ Contact form with validation
- ✅ Built-in AI chatbot (no API required)
- ✅ Glassmorphic UI throughout
- ✅ Fully responsive (mobile/tablet/desktop)
- ✅ Smooth scroll reveal animations
- ✅ Fixed navbar with scroll effect

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm start
```

## Project Structure
```
extreecon/
├── app/
│   ├── globals.css       # Global styles + Tailwind
│   ├── layout.tsx        # Root layout with fonts & metadata
│   └── page.tsx          # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx        # Fixed navigation with mobile menu
│   ├── Hero.tsx          # Hero section with animations
│   ├── Ticker.tsx        # Auto-scrolling marquee
│   ├── Services.tsx      # 6-card services grid
│   ├── Portfolio.tsx     # Filterable projects grid
│   ├── WhyUs.tsx         # Why choose us + stats
│   ├── Team.tsx          # Directors team cards
│   ├── Testimonials.tsx  # Animated testimonial slider
│   ├── MapSection.tsx    # Google Maps + contact info
│   ├── Contact.tsx       # Quote request form
│   ├── Footer.tsx        # Full footer
│   └── Chatbot.tsx       # AI-powered chatbot widget
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## Customization
- **Colors**: Edit `tailwind.config.js` and `app/globals.css` (CSS variables)
- **Content**: Update text/data directly in each component file
- **Chatbot**: Edit the `getReply()` function in `components/Chatbot.tsx`
- **Map**: Replace the Google Maps embed URL in `components/MapSection.tsx`

## Contact
Extreecon Engineering Company Limited  
6th Floor, View Park Towers, Monrovia Street, Nairobi  
Tel: 0726 859 938 / 0723 271 144  
Email: extreecon@gmail.com
