# Ganesh Portfolio

## Overview
This is a personal portfolio website for Ganesh, a Full-Stack Developer. The project showcases Ganesh's skills, projects, education, and contact information in a modern, responsive single-page application (SPA). Built using React and styled with Tailwind CSS, the site features smooth animations, interactive elements, and a clean design to highlight professional achievements.

The portfolio is designed to be visually appealing and user-friendly, allowing visitors to easily navigate through sections like Home, About, Education, Skills, Projects, and Contact. It serves as an online resume and project showcase, demonstrating Ganesh's expertise in web development.

## Features
- **Responsive Design**: The website adapts seamlessly to different screen sizes, from mobile devices to desktops, ensuring a consistent experience across platforms.
- **Smooth Animations**: Integrated animations using AOS (Animate On Scroll) library to enhance user engagement and provide a dynamic feel.
- **Interactive Elements**: Includes particle effects with TS Particles for a modern, interactive background, and typing animations for dynamic text display.
- **Navigation**: A fixed navigation bar that allows smooth scrolling to different sections of the page.
- **Sections**:
  - **Home**: Introduction with a hero banner, profile image, and animated text.
  - **About**: Personal background and professional summary.
  - **Education**: Academic qualifications and certifications.
  - **Skills**: Technical skills represented with icons and progress bars.
  - **Projects**: Showcase of key projects with descriptions, images, and links.
  - **Contact**: Contact form and social media links.
  - **Footer**: Additional links and copyright information.
- **Accessibility**: Basic accessibility features like semantic HTML and keyboard navigation support.

## Technologies Used
This project leverages a modern web development stack. Below, each technology is explained in simple terms for beginners:

### Core Frameworks and Libraries
- **React (v19.2.0)**: A JavaScript library for building user interfaces. React allows us to create reusable components (like Nav, Home, etc.) that manage their own state and update efficiently. It's component-based, meaning the UI is broken into small, manageable pieces. For example, the `Home` component handles the hero section independently.
- **React DOM (v19.2.0)**: A package that provides DOM-specific methods for React. It renders React components into the browser's DOM (Document Object Model), which is the structure of the web page.

### Build Tool and Development Server
- **Vite (v7.2.2)**: A fast build tool and development server for modern web projects. Vite provides quick hot module replacement (HMR) during development, meaning changes to code are reflected instantly in the browser without a full reload. It's configured with a React plugin to handle JSX (JavaScript XML) syntax.

### Styling
- **Tailwind CSS (v4.1.17)**: A utility-first CSS framework. Instead of writing custom CSS classes, Tailwind provides pre-built classes for styling (e.g., `bg-blue-500` for background color). It's highly customizable via the `tailwind.config.js` file, where we added custom animations like slide-in effects. This keeps styles consistent and reduces the need for separate CSS files.
- **Tailwind CSS Vite Plugin**: Integrates Tailwind directly into the Vite build process for optimized CSS generation.

### Icons and Fonts
- **FontAwesome (v7.1.0)**: A library of scalable vector icons. We use it for social media icons, skill badges, and other UI elements. It's included via CDN in `index.html` for easy access.
- **React FontAwesome**: React-specific bindings for FontAwesome icons, allowing us to use them as React components.

### Animations and Effects
- **AOS (Animate On Scroll, v2.3.4)**: A library for animating elements as they come into view while scrolling. Initialized in `App.jsx` with a duration of 1000ms, it adds fade-in effects to sections for a polished look.
- **React Type Animation (v3.2.0)**: Creates typing effects for text, like simulating someone typing out a message. Used in the Home section for dynamic introductions.
- **TS Particles (v3.9.1)**: A lightweight library for creating particle animations (e.g., floating dots or stars). It adds visual flair to the background, making the site more engaging.

### Development Tools
- **ESLint (v9.39.1)**: A tool for identifying and fixing code issues. Configured in `eslint.config.js` with rules for React hooks and refresh, it ensures code quality by catching errors like unused variables.
- **React Hooks ESLint Plugin**: Enforces best practices for React hooks (e.g., useEffect, useState).
- **React Refresh Plugin**: Enables fast refresh in Vite for React components during development.

### Other Dependencies
- **React Icons (v5.5.0)**: A collection of popular icons as React components, providing alternatives to FontAwesome for specific needs.

### Configuration Files
- **package.json**: Defines the project metadata, dependencies, and scripts (e.g., `npm run dev` to start the development server).
- **vite.config.js**: Configures Vite with React and Tailwind plugins.
- **tailwind.config.js**: Customizes Tailwind with additional animations and specifies content paths for purging unused CSS.
- **eslint.config.js**: Sets up linting rules and ignores certain directories like `dist` (build output).
- **index.html**: The entry HTML file that loads the React app via `src/main.jsx`.
- **src/index.css**: Imports Tailwind CSS globally.
- **src/main.jsx**: The entry point for React, rendering the `App` component into the DOM.

## Project Structure
```
shivam-portfolio/
├── public/                          # Static assets (e.g., images, PDFs)
│   ├── Ganesh-Full-Stack-Developer-Resume.pdf
│   └── vite.svg
├── src/
│   ├── assets/                      # Images and media files
│   │   ├── Air-Ganesh.png
│   │   ├── Calculator.png
│   │   └── ... (other project images)
│   ├── Components/                  # Reusable React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── Nav.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx                      # Main app component
│   ├── index.css                    # Global styles
│   └── main.jsx                     # React entry point
├── .gitignore                       # Files to ignore in Git
├── eslint.config.js                 # ESLint configuration
├── index.html                       # HTML template
├── package.json                     # Project dependencies and scripts
├── README.md                        # This file
├── tailwind.config.js               # Tailwind CSS configuration
└── vite.config.js                   # Vite configuration
```

## Installation and Setup
To run this project locally, follow these steps. Ensure you have Node.js (v16 or higher) and npm installed.

1. **Clone the Repository**:
   ```
   git clone <repository-url>
   cd shivam-portfolio
   ```

2. **Install Dependencies**:
   ```
   npm install
   ```
   This installs all packages listed in `package.json`, including React, Vite, Tailwind, and others.

3. **Start the Development Server**:
   ```
   npm run dev
   ```
   Open your browser to `http://localhost:5173` (default Vite port) to view the site. Changes will auto-refresh.

4. **Build for Production**:
   ```
   npm run build
   ```
   This creates an optimized build in the `dist` folder.

5. **Preview the Build**:
   ```
   npm run preview
   ```
   Serves the production build locally for testing.

6. **Lint the Code**:
   ```
   npm run lint
   ```
   Checks for code issues using ESLint.

## Usage
- Navigate the site using the top navigation bar.
- Scroll through sections to view content.
- Interact with elements like the contact form (if implemented) or project links.
- For development, use browser dev tools to inspect components and styles.

## Contributing
Contributions are welcome! If you'd like to improve the portfolio:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/new-feature`).
3. Make changes and commit (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.

Please ensure code follows ESLint rules and is tested.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
- **Name**: Ganesh Prasad Panda
- **Email**: [roy862452@gmail.com]
- **LinkedIn**: [[LinkedIn Profile](https://www.linkedin.com/in/dev-roy-81319a378/)]
- **GitHub**: [[GitHub Profile](https://github.com/Ganeshpanda34)]
- **Portfolio**: [https://ganesh-panda.netlify.app/]

For questions or collaborations, feel free to reach out via the contact section on the site.
