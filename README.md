# Shaurya Sharma - Full Stack Developer Portfolio

A modern, SEO-optimized portfolio website showcasing my skills, projects, and experience as a Full Stack Developer and Computer Science Engineering student at KIIT University.

## 🚀 Features

- **SEO Optimized**: Comprehensive meta tags, structured data, and semantic HTML
- **Performance Focused**: Optimized images, lazy loading, and Core Web Vitals
- **Accessibility**: WCAG 2.1 compliant with proper ARIA labels and semantic markup
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Dark/Light Mode**: Theme switching with system preference detection
- **PWA Ready**: Progressive Web App capabilities with manifest and service worker support

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Comprehensive icon library

### Backend & Infrastructure
- **Vercel** - Hosting and deployment
- **Vercel Analytics** - Performance monitoring
- **Vercel Speed Insights** - Core Web Vitals tracking

### SEO & Performance
- **Structured Data** - JSON-LD schema markup
- **Sitemap** - Dynamic XML sitemap generation
- **Robots.txt** - Search engine crawling directives
- **Image Optimization** - WebP/AVIF formats with responsive sizing
- **Font Optimization** - Preloaded fonts with display swap

## 📊 SEO Optimizations

### Meta Tags
- Comprehensive Open Graph tags for social sharing
- Twitter Card optimization
- Proper title and description tags
- Canonical URLs and alternate languages

### Structured Data
- Person schema for personal information
- WebSite schema for site metadata
- Organization schema for professional details

### Performance
- Image optimization with Next.js Image component
- Font preloading and display swap
- Bundle optimization and code splitting
- Compression and caching headers

### Accessibility
- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/shaurya-afk/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── favicon.ico        # Favicon
│   ├── favicon.svg        # SVG favicon
│   ├── manifest.json      # PWA manifest
│   ├── robots.txt         # SEO robots file
│   ├── browserconfig.xml  # Windows tile config
│   └── images/            # Optimized images
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # Root layout with SEO
│   │   ├── page.tsx      # Home page
│   │   ├── globals.css   # Global styles
│   │   └── sitemap.ts    # Dynamic sitemap
│   ├── components/       # React components
│   │   ├── home/         # Home page components
│   │   ├── skills/       # Skills section
│   │   ├── projects/     # Projects showcase
│   │   ├── contact/      # Contact form
│   │   ├── footer/       # Footer component
│   │   └── ui/           # Reusable UI components
│   └── lib/              # Utility functions
├── next.config.ts        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS config
└── package.json          # Dependencies and scripts
```

## 🎯 SEO Features

### Technical SEO
- ✅ Semantic HTML structure
- ✅ Meta tags optimization
- ✅ Open Graph and Twitter Cards
- ✅ Structured data (JSON-LD)
- ✅ XML sitemap generation
- ✅ Robots.txt configuration
- ✅ Canonical URLs
- ✅ Image optimization
- ✅ Font optimization
- ✅ Core Web Vitals optimization

### Content SEO
- ✅ Keyword-rich content
- ✅ Proper heading hierarchy
- ✅ Alt text for images
- ✅ Internal linking structure
- ✅ Mobile-friendly design
- ✅ Fast loading times
- ✅ Accessible navigation

## 📈 Performance Metrics

### Core Web Vitals
- **Largest Contentful Paint (LCP)**: < 2.5s
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 🔧 Customization

### SEO Configuration
Update the metadata in `src/app/layout.tsx`:
- Site URL and canonical links
- Social media handles
- Google Analytics ID
- Meta descriptions and keywords

### Content Updates
- Projects: Edit `src/components/projects/page.tsx`
- Skills: Modify `src/components/skills/page.tsx`
- Contact: Update form endpoint in `src/components/contact/page.tsx`

### Styling
- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.js`
- Component styles: Inline Tailwind classes

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
# Upload the .next folder to your hosting provider
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: shauryasha090@gmail.com
- **GitHub**: [@shaurya-afk](https://github.com/shaurya-afk)
- **LinkedIn**: [shaurya-afk](https://linkedin.com/in/shaurya-afk)
- **Twitter**: [@shauryadotafk](https://x.com/shauryadotafk)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
