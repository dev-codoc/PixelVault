<div align="center">
  <img src="./public/logo.png" alt="PixelVault Logo" width="100" height="100" />
  
  # PixelVault
  
  > A curated collection of frontend design, animation, illustration, video and UI inspiration resources.
</div>

## 📋 Overview

PixelVault is a comprehensive resource hub designed for frontend developers, designers, and creative professionals. It provides a carefully curated collection of design inspiration, animation examples, UI components, and multimedia resources to accelerate your creative workflow.

## ✨ Features

- **Design Inspiration** - Curated design patterns and UI inspiration
- **Animation Resources** - Modern animation techniques and examples
- **Illustration Gallery** - High-quality illustrations for reference and inspiration
- **Video Tutorials** - Learn from professional video content
- **UI Components** - Ready-to-use component patterns and best practices
- **Responsive Design** - Fully optimized for all device sizes
- **Dark Mode** - Eye-friendly dark theme interface
- **Modern Stack** - Built with cutting-edge web technologies

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd PixelVault
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open your browser
Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) - React framework for production
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) - Utility-first CSS framework
- **UI Icons**: [Lucide React](https://lucide.dev) & [React Icons](https://react-icons.github.io/react-icons)
- **Language**: [TypeScript](https://www.typescriptlang.org) - Type-safe development
- **Linting**: [ESLint](https://eslint.org) - Code quality assurance

## 📁 Project Structure

```
├── app/
│   ├── components/
│   │   └── footer/           # Footer component
│   ├── resources/            # Resources page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── public/                   # Static assets
├── package.json              # Dependencies
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── next.config.ts            # Next.js configuration
```

## 📝 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm build

# Run production build
npm start

# Lint code
npm run lint
```

## 🎨 Customization

### Modify Styles

All global styles are in [app/globals.css](app/globals.css). The project uses Tailwind CSS v4 for component styling.

### Add New Pages

Create new pages in the `app/` directory following Next.js App Router conventions.

### Update Components

All reusable components are located in `app/components/`. Add new components there and import them where needed.

## 📦 Building for Production

```bash
npm run build
npm start
```

The optimized production build will be ready in the `.next` directory.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request with improvements or bug fixes.

## 📄 License

This project is open source and available under the MIT License.

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

Built with ❤️ for designers and developers
