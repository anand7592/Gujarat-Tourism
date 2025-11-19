# Gujarat Tourism Admin Panel

A modern, responsive admin panel for managing Gujarat Tourism data built with React, TypeScript, and Vite. This application provides comprehensive management capabilities for tourism-related content including places, hotels, packages, users, and ratings.

## 🌟 Features

- **Dashboard Overview**: Comprehensive statistics and analytics
- **User Management**: Admin capabilities for user administration
- **Place Management**: Add, edit, and manage tourist destinations
- **Subplace Management**: Manage sub-locations within major destinations
- **Package Management**: Tourism package creation and management
- **Hotel Management**: Hotel listings and administration
- **Rating System**: Review and rating management
- **Responsive Design**: Mobile-first responsive UI
- **Modern UI Components**: Built with Radix UI and Tailwind CSS

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Language**: TypeScript
- **Build Tool**: Vite 7.2.2
- **Styling**: Tailwind CSS 4.1.17
- **UI Components**: Radix UI
- **Routing**: React Router DOM 7.9.6
- **Icons**: Lucide React
- **Carousel**: Embla Carousel
- **Code Quality**: ESLint

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18.0 or higher)
- npm or yarn package manager
- Git

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/anand7592/Gujarat-Tourism.git
cd Gujarat-Tourism
```

### 2. Install Dependencies

```bash
npm install
```

or with yarn:

```bash
yarn install
```

### 3. Start Development Server

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🗂️ Project Structure

```
Gujarat-Tourism/
├── public/
│   └── images/          # Static images
├── src/
│   ├── components/
│   │   ├── Admin/       # Admin panel components
│   │   │   ├── Dashboard/
│   │   │   ├── Users/
│   │   │   ├── Place/
│   │   │   ├── Subplace/
│   │   │   ├── Package/
│   │   │   ├── Hotel/
│   │   │   ├── Rating/
│   │   │   ├── Navbar/
│   │   │   └── Footer/
│   │   └── ui/          # Reusable UI components
│   ├── lib/
│   │   └── utils.ts     # Utility functions
│   ├── assets/          # Static assets
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # App entry point
│   └── index.css        # Global styles
├── components.json      # shadcn/ui configuration
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## 🧭 Routing

The application uses React Router for navigation:

- `/admin` - Dashboard overview
- `/admin/user` - User management
- `/admin/place` - Place management
- `/admin/subplace` - Subplace management
- `/admin/package` - Package management
- `/admin/hotel` - Hotel management
- `/admin/rating` - Rating management

## 🎨 UI Components

This project uses a combination of:
- **Radix UI**: Accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Pre-built component library
- **Lucide React**: Beautiful icon library

### Adding New UI Components

To add new shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

## 🔧 Configuration

### Tailwind CSS

Tailwind configuration is handled through Vite plugin. The project uses Tailwind CSS v4 with:
- Custom color schemes
- Responsive design utilities
- Component-specific styling

### TypeScript

The project is fully typed with TypeScript. Configuration files:
- `tsconfig.json` - Base TypeScript config
- `tsconfig.app.json` - App-specific config
- `tsconfig.node.json` - Node.js config

### Path Aliases

The project uses path aliases for cleaner imports:
- `@/` maps to `./src/`

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

### Deployment Options

The built application can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Code Style

- Follow TypeScript best practices
- Use meaningful component and variable names
- Maintain consistent file structure
- Write self-documenting code
- Use proper TypeScript types

## 🐛 Issues and Support

If you encounter any issues:
1. Check existing GitHub issues
2. Create a new issue with detailed description
3. Include steps to reproduce the problem

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- **Anand** - [@anand7592](https://github.com/anand7592)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the lightning-fast build tool
- Radix UI for accessible components
- Tailwind CSS for utility-first styling

---

**Made with ❤️ for Gujarat Tourism**