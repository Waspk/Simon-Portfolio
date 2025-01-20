# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern UI/UX with smooth animations
- 📱 Fully responsive design
- 📧 Contact form with EmailJS integration
- 🎯 Smooth scroll navigation
- 🌙 Clean and minimal design
- ⚡ Fast performance with Vite

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- EmailJS
- Lucide Icons

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory with your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server
```bash
npm run dev
```

## Project Structure

```
src/
├── components/        # React components
├── config/           # Configuration files
├── services/         # Service layer (e.g., EmailJS)
├── utils/            # Utility functions
└── types/           # TypeScript type definitions
```

## Building for Production

```bash
npm run build
```

This will create a `dist` directory with optimized production build.

## Deployment

The site is configured for easy deployment to platforms like Netlify or Vercel. The `_redirects` file is included for proper SPA routing.

## Customization

- Update the projects in `src/components/Projects.tsx`
- Modify skills in `src/components/Skills.tsx`
- Edit contact form configuration in `src/config/email.ts`
- Customize styles in `tailwind.config.js`

## License

MIT License - feel free to use this project for your own portfolio!

## Contact

Simon Abouelkhir - simon.abouelkhir@gmail.com