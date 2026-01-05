# Portfolio Website

A professional, modern, and fully responsive portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

## Features

✨ **Modern UI Design**
- Clean and minimal aesthetic
- Professional color palette with blue accents
- Smooth animations and transitions
- Mobile-first responsive design

🎯 **Key Sections**
- **Navbar**: Sticky navigation with smooth scroll links
- **Hero**: Eye-catching landing section with CTAs
- **About**: Professional introduction and highlights
- **Skills**: Organized skill categories with badges
- **Projects**: Featured projects in responsive grid
- **Contact**: Easy contact options and social links
- **Footer**: Copyright and tech stack info

⚡ **Performance & SEO**
- Server-side rendering with Next.js
- SEO-optimized metadata and open graph tags
- Fast loading and smooth scrolling
- Accessibility features built-in

🎨 **Responsive Design**
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interactive elements
- Flexible grid layouts

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Built-in Next.js bundler
- **Package Manager**: npm

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main page combining all sections
│   │   └── globals.css         # Global Tailwind styles
│   └── components/
│       ├── Navbar.tsx          # Navigation bar component
│       ├── Hero.tsx            # Hero section component
│       ├── About.tsx           # About me section component
│       ├── Skills.tsx          # Skills section component
│       ├── Projects.tsx        # Projects section component
│       ├── Contact.tsx         # Contact section component
│       └── Footer.tsx          # Footer component
├── public/                     # Static assets
├── package.json                # Project dependencies
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
└── next.config.js             # Next.js configuration
```

## Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio.

4. **Build for production**
```bash
npm run build
npm start
```

## Customization

### Edit Personal Information

**Update your details in components:**

- **Hero Section** (`src/components/Hero.tsx`): Name, title, tagline
- **About Section** (`src/components/About.tsx`): Introduction text
- **Skills Section** (`src/components/Skills.tsx`): Add/remove skills
- **Projects Section** (`src/components/Projects.tsx`): Add your projects
- **Contact Section** (`src/components/Contact.tsx`): Email and social links

### Modify Color Scheme

Edit `tailwind.config.js` to change colors:

```javascript
colors: {
  primary: {
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    // ... more colors
  },
  dark: {
    900: '#0f172a',
    800: '#1e293b',
    // ... more colors
  },
}
```

### Add Custom Fonts

In `src/app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');

:root {
  --font-family: 'Your Font', sans-serif;
}
```

### Update Metadata

Edit `src/app/layout.tsx` to update:
- Site title and description
- Social media metadata
- Open Graph images
- Favicon

## Features Explained

### Smooth Scrolling
Native CSS `scroll-behavior: smooth` combined with anchor links for smooth navigation between sections.

### Responsive Grid
- Mobile: Single column
- Tablet: 2 columns
- Desktop: 3 columns (projects)
- Uses Tailwind's `grid` and `md:` breakpoints

### Animations
- Fade-in animations on scroll
- Hover effects on buttons and cards
- Bounce animations on hero section
- Transform effects on interactive elements

### Accessibility
- Semantic HTML elements
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support
- Focus visible states

### SEO Optimization
- Metadata in layout
- Open Graph tags
- Structured data ready
- Mobile-friendly viewport
- Proper heading structure

## Performance Tips

1. **Image Optimization**: Use Next.js Image component for images
2. **Code Splitting**: Next.js automatically splits code
3. **CSS Optimization**: Tailwind CSS purges unused styles
4. **Lazy Loading**: Implement if adding more content

## Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Other Platforms

The project can be deployed to any Node.js hosting:
- Netlify
- AWS Amplify
- Railway
- Render
- DigitalOcean

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Build errors
```bash
# Clear cache
rm -rf .next
npm run build
```

### Styling issues
```bash
# Rebuild Tailwind
npm run build
```

## Future Enhancements

- [ ] Add dark/light mode toggle
- [ ] Add blog section
- [ ] Integrate contact form
- [ ] Add animations on scroll using Framer Motion
- [ ] Add testimonials section
- [ ] Implement newsletter signup
- [ ] Add PWA support

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open an issue on GitHub.

---

**Built with ❤️ by Nishant Kumar Maurya**
