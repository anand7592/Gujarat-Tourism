# Gujarat Tourism Admin Panel

Hi there! 👋 Welcome to the Gujarat Tourism Admin Panel. This is a modern, responsive dashboard built with React, TypeScript, and Vite. It's designed to help you manage all things related to Gujarat tourism—like places, hotels, packages, users, and ratings—without breaking a sweat!

## 🚀 Live Demo

Want to see it in action? Check out the live site here: https://gujarattour.netlify.app/

## 🌟 What It Does

Here's what you can do with this app:

- **Dashboard Overview**: Get a quick look at all your important stats.
- **User Management**: Easily handle user accounts and permissions.
- **Place Management**: Add or edit tourist spots effortlessly.
- **Subplace Management**: Organize specific locations within those bigger destinations.
- **Package Management**: Create and manage awesome tour packages.
- **Hotel Management**: Keep your hotel listings up to date.
- **Rating System**: See what people are saying with reviews and ratings.
- **Responsive Design**: Looks great on your phone, tablet, or desktop!
- **Modern UI**: Built with Radix UI and Tailwind CSS for a sleek look.

## 🛠️ The Tech Inside

Here are the tools we used to build this:

- **Frontend**: React 19.2.0
- **Language**: TypeScript
- **Build Tool**: Vite 7.2.2
- **Styling**: Tailwind CSS 4.1.17
- **Components**: Radix UI
- **Routing**: React Router DOM 7.9.6
- **Icons**: Lucide React
- **Carousel**: Embla Carousel
- **Code Quality**: ESLint

## 📋 What You Need

Before you jump in, just make sure you have these installed:

- Node.js (version 18.0 or higher)
- npm or yarn (to install packages)
- Git (to grab the code)

## 🚀 Let's Get Started!

### 1. Grab the Code

First, clone the repo to your local machine:

```bash
git clone https://github.com/anand7592/Gujarat-Tourism.git
cd Gujarat-Tourism
```

### 2. Install Dependencies

Next, install everything you need:

```bash
npm install
```

or if you prefer yarn:

```bash
yarn install
```

### 3. Run It!

Now, let's fire up the development server:

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

Open up http://localhost:5173 in your browser, and you're good to go!

## 📜 Handy Scripts

- `npm run dev` - Starts the dev server.
- `npm run build` - Bundles everything for production.
- `npm run lint` - Checks your code for issues.
- `npm run preview` - Lets you see the production build locally.

## 🗂️ Where Things Live

Here's a quick look at the project structure:

```
Gujarat-Tourism/
├── public/
│   └── images/          # Where we keep static images
├── src/
│   ├── components/
│   │   ├── Admin/       # All the admin panel goodness
│   │   │   ├── Dashboard/
│   │   │   ├── Users/
│   │   │   ├── Place/
│   │   │   ├── Subplace/
│   │   │   ├── Package/
│   │   │   ├── Hotel/
│   │   │   ├── Rating/
│   │   │   ├── Navbar/
│   │   │   └── Footer/
│   │   └── ui/          # Reusable UI bits
│   ├── lib/
│   │   └── utils.ts     # Helper functions
│   ├── assets/          # Other assets
│   ├── App.tsx          # The main app component
│   ├── main.tsx         # The entry point
│   └── index.css        # Global styles
├── components.json      # shadcn/ui config
├── vite.config.ts       # Vite settings
├── tsconfig.json        # TypeScript settings
└── package.json         # Dependencies
```

## 🧭 Getting Around

We use React Router to handle navigation. Here are the main routes:

- `/admin` - The main Dashboard
- `/admin/user` - Manage Users
- `/admin/place` - Manage Places
- `/admin/subplace` - Manage Subplaces
- `/admin/package` - Manage Packages
- `/admin/hotel` - Manage Hotels
- `/admin/rating` - Manage Ratings

## 🎨 UI Components

We're using some cool libraries to make things look nice:

- **Radix UI**: Solid, accessible building blocks.
- **Tailwind CSS**: Makes styling a breeze.
- **shadcn/ui**: A collection of pre-built components.
- **Lucide React**: Beautiful icons.

Want to add more components?

Just run this command:

```bash
npx shadcn@latest add [component-name]
```

## 🔧 Tweaking Settings

### Tailwind CSS

We're using Tailwind CSS v4 for styling. It handles:

- Custom colors
- Responsive layouts
- Component styles

### TypeScript

Everything is typed! You can find the configs here:

- `tsconfig.json` - The base config
- `tsconfig.app.json` - App-specific stuff
- `tsconfig.node.json` - Node.js stuff

### Path Aliases

To keep imports clean, we map `@/` to `./src/`. Nice and tidy!

## 🚀 Ready to Deploy?

### Build for Production

When you're ready to go live, run:

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

### Preview It First

Want to check the build before deploying? Run:

```bash
npm run preview
```

### Hosting

You can deploy this app pretty much anywhere:

- Vercel
- Netlify
- GitHub Pages
- Any static host you like!

## 🤝 Want to Help?

We'd love your help! Here's how to contribute:

1. Fork the repo.
2. Create a branch (`git checkout -b feature/cool-new-thing`).
3. Commit your changes (`git commit -m 'Added a cool new thing'`).
4. Push to your branch (`git push origin feature/cool-new-thing`).
5. Open a Pull Request!

## 📝 Coding Tips

- Stick to TypeScript best practices.
- Name things clearly so we know what they do.
- Keep files organized.
- Add comments if something is complex.
- Use proper types!

## 🐛 Found a Bug?

If something isn't working right:

1. Check if anyone else reported it in the Issues tab.
2. Create a new issue and tell us what happened.
3. Let us know how to reproduce it so we can fix it faster.

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for more info.

## 👥 The Author

**Anand** - [@anand7592](https://github.com/anand7592)

## 🙏 Big Thanks To

- The React team for the awesome framework.
- The Vite team for making builds super fast.
- Radix UI for the accessible components.
- Tailwind CSS for making styling fun.

---

**Made with ❤️ for Gujarat Tourism**