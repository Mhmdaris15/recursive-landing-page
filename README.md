# Recursive Tech Landing Page

## <a href="https://ui.shadcn.com/" target="_blank">ShadcnUI</a> + <a href="https://react.dev/" target="_blank">React</a> + <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> + <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a> + <a href="https://vitejs.dev/" target="_blank">Vite</a>

![Recursive Tech Landing Page](https://github.com/Mhmdaris15/shadcn-landing-page/assets/61714687/3ba7b51f-9589-4541-800a-5ab7cecad1b5)

A modern, fully responsive landing page template for IT solutions companies. Built with cutting-edge technologies and featuring a complete set of components for professional business websites. Perfect for showcasing complex systems development, web development, AI integration, and comprehensive IT services.

## 🚀 Live Demo

<a href="https://shadcn-landing-page.vercel.app/" target="_blank">View Live Demo</a>

## ✨ Features

- **🎨 Modern Design**: Clean, professional design with gradient accents and smooth animations
- **📱 Fully Responsive**: Optimized for all devices from mobile to desktop
- **🌙 Dark/Light Mode**: Built-in theme switching with persistent preferences
- **⚡ Performance Optimized**: Built with Vite for lightning-fast development and build times
- **🎯 SEO Ready**: Comprehensive meta tags and semantic HTML structure
- **♿ Accessible**: ARIA labels and keyboard navigation support
- **🔧 Type Safe**: Full TypeScript implementation for better development experience
- **🎪 Interactive Components**: Rich UI components powered by Radix UI primitives
- **📊 Analytics Ready**: Easy integration with tracking and analytics tools

## 📋 Sections Included

- [x] **Navigation Bar** - Responsive navbar with mobile hamburger menu
- [x] **Hero Section** - Eye-catching landing area with CTAs
- [x] **About Section** - Company introduction with statistics
- [x] **Services** - Comprehensive IT solutions showcase
- [x] **How It Works** - Step-by-step process explanation
- [x] **Features** - Key product/service highlights
- [x] **Testimonials** - Customer reviews and feedback
- [x] **Team** - Team member profiles with social links
- [x] **Pricing** - Flexible pricing plans with feature lists
- [x] **FAQ** - Frequently asked questions with accordion
- [x] **Newsletter** - Email subscription with form handling
- [x] **Call-to-Action** - Strategic conversion sections
- [x] **Footer** - Comprehensive site links and information

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS with CSS Variables
- **UI Components**: Shadcn/UI (Radix UI primitives)
- **Icons**: Lucide React + Radix Icons
- **Animations**: Tailwind CSS animations
- **Development**: ESLint for code quality

## 📦 Dependencies

### Core Dependencies
- `react` & `react-dom` - React framework
- `typescript` - Type safety
- `tailwindcss` - Utility-first CSS
- `vite` - Build tool

### UI Components
- `@radix-ui/react-*` - Accessible UI primitives
- `lucide-react` - Beautiful icons
- `class-variance-authority` - Component variants
- `clsx` & `tailwind-merge` - Conditional styling

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager
- Docker & Docker Compose (for containerized deployment)

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/Mhmdaris15/recursive-landing-page.git
cd recursive-landing-page
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🐳 Docker Deployment

### Quick Docker Setup

#### Production Deployment
```bash
# Build and run production container
docker-compose up -d

# Or using Docker directly
docker build -t recursive-landing-page .
docker run -p 3007:3007 recursive-landing-page
```

#### Development with Hot Reloading
```bash
# Run development environment with hot reloading
docker-compose --profile development up

# Or using Docker directly
docker build -f Dockerfile.dev -t recursive-landing-page-dev .
docker run -p 5173:5173 -v $(pwd):/app -v /app/node_modules recursive-landing-page-dev
```

### Docker Commands

```bash
# Build production image
docker build -t recursive-landing-page .

# Run production container
docker run -d -p 3007:3007 --name recursive-app recursive-landing-page

# Build development image
docker build -f Dockerfile.dev -t recursive-landing-page-dev .

# Run development container with volume mounting
docker run -p 5173:5173 -v $(pwd):/app -v /app/node_modules recursive-landing-page-dev

# View container logs
docker logs recursive-app

# Stop and remove container
docker stop recursive-app && docker rm recursive-app

# Health check
curl http://localhost:3007/
```

### Docker Compose Services

- **recursive-landing-page**: Production build served with Vite preview server
- **recursive-landing-page-dev**: Development environment with hot reloading (use `--profile development`)

### Production Access
- Website: `http://localhost:3007`
- Health Check: `http://localhost:3007/`

### Development Access
- Website: `http://localhost:5173`
- Hot reloading enabled for code changes

## 🎨 Customization

### Theming
The project uses CSS variables for theming. You can customize colors in [`src/App.css`](src/App.css):

```css
:root {
  --primary: 142.1 76.2% 36.3%;
  --secondary: 240 4.8% 95.9%;
  /* ... other variables */
}
```

### Components
All components are modular and located in [`src/components/`](src/components/). Key components include:

- **Hero** - Main landing section
- **About** - Company information
- **Services** - Service offerings
- **Testimonials** - Customer feedback
- **Pricing** - Pricing plans
- **Footer** - Site footer with links

### Content Updates
Update content by modifying the respective component files. Most content is stored as arrays or objects for easy maintenance.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── About.tsx       # About section
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services section
│   └── ...            # Other sections
├── assets/             # Static assets (images, icons)
├── lib/               # Utility functions
├── App.tsx            # Main app component
├── main.tsx           # App entry point
└── App.css            # Global styles and themes
```

## 🎯 Use Cases

This template is perfect for:

- **IT Solutions Companies** - Showcase technical expertise
- **Software Development Agencies** - Display services and portfolio
- **Tech Startups** - Professional landing pages
- **Consulting Firms** - Service-based businesses
- **SaaS Products** - Feature and pricing showcases

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Muhammad Aris Septanugroho (Leopoldo Miranda)**
- GitHub: [@Mhmdaris15](https://github.com/Mhmdaris15)
- LinkedIn: [Muhammad Aris Septanugroho](https://www.linkedin.com/in/muhammad-aris-septanugroho/)
- Email: leomirandadev@gmail.com

## 🙏 Acknowledgments

- [Shadcn/UI](https://ui.shadcn.com/) for the amazing component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) for accessible UI primitives
- [Lucide](https://lucide.dev/) for beautiful icons

## 🔖 Keywords

`react` `typescript` `shadcn` `shadcn/ui` `tailwind` `landing-page` `template` `responsive-design` `vite` `it-solutions` `business-website`

---

⭐ **Star this repository if you found it helpful!**
