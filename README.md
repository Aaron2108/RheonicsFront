# Rheonics - News & Insights Frontend Component

A reusable and responsive frontend section inspired by the Rheonics website, built with React and Vite.

This project demonstrates:
- reusable component architecture,
- responsive UI development,
- semantic HTML structure,
- clean CSS organization,
- and modern frontend development practices.

---

# Features

- Reusable `NewsCard` component
- Responsive `NewsInsightsSection`
- Semantic HTML structure
- Lazy-loaded images
- Responsive layout for desktop, tablet, and mobile
- Clean component-based architecture

---

## Architecture

This project follows a **component-based architecture** using React and Vite.  
- Each UI element is encapsulated in its own folder under `src/components`, with dedicated `.jsx` and `.css` files.  
- Static data is stored in `src/constants` to separate configuration from presentation logic.  
- Assets such as images and icons are organized in `src/assets`.  
- This modular structure ensures **reusability, scalability, and maintainability**, following modern frontend development best practices.


# Technologies Used

- React
- Vite
- CSS3
- JavaScript (ES6+)

---

## Prerequisites

To run this project you need to have installed:

- **Node.js** (recommended version: 18 or higher)  
- **npm** (comes bundled with Node.js)  

You can verify if they are installed by running the following commands in your terminal:

```bash
node -v
npm -v


# Project Structure

```bash
│
├── node_modules/              # Project dependencies
├── public/                    # Static assets and public files
├── src/                       # Main source folder
│   ├── assets/                # Images, icons, and other media
│   ├── components/            # Reusable React components
│   │   ├── ContactBar/        # Contact information bar
│   │   ├── Header/            # Page header component
│   │   ├── icons/             # Custom icon components
│   │   ├── Inicio/            # Home section component
│   │   ├── Navbar/            # Navigation bar component
│   │   ├── NewCard/           # Individual news card component
│   │   └── NewsInsightsSection/ # Main news and insights section
│   ├── constants/             # Static data and configuration files
│   │   ├── navigation.js      # Navigation links and menu items
│   │   └── news.js            # News data and content
│   └── App.jsx                # Root React component
│
├── .gitignore                 # Git ignored files
├── eslint.config.js           # ESLint configuration
├── index.html                 # Main HTML entry point
├── package-lock.json          # Dependency lock file
├── package.json               # Project metadata and scripts
├── README.md                  # Project documentation
└── vite.config.js             # Vite configuration file
```

# How to Run the Project

## 1. Clone the repository

```bash
git clone <repository-url>
```

## 2. Navigate into the project folder

```bash
cd project-name
```

## 3. Install dependencies

```bash
npm install
```

## 4. Start the development server

```bash
npm run dev
```

The project will run locally at:

```bash
http://localhost:5173
```