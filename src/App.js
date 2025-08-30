import React, { useState, useEffect, createContext, useContext } from "react";
import Project1 from "./assets/images/Project1.png"; // Ensure this image exists in the specified path
import Project2 from "./assets/images/Project2.png"; // Ensure this image exists in the specified path
import Project3 from "./assets/images/Project3.png"; // Ensure this image exists in the specified path
import Project4 from "./assets/images/Project4.png"; // Ensure this image exists in the specified path
import Project5 from "./assets/images/Project5.png"; // Ensure this image exists in the specified path

// Create a Context for the theme
const ThemeContext = createContext();

// Theme Provider Component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Default theme is light

  useEffect(() => {
    // On mount, check if there's a theme preference in local storage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
const useTheme = () => useContext(ThemeContext);

// --- Icons (using lucide-react, will be mocked for this example as it's an external library) ---
// In a real project, you would import these from 'lucide-react'
const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-home"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-user"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const FolderCogIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-folder-cog"
  >
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 4 3H2v15a2 2 0 0 0 2 2Z" />
    <circle cx="12" cy="13" r="3" />
    <path d="M12 10v1" />
    <path d="M12 15v1" />
    <path d="m16.96 14.96-.7.7" />
    <path d="m7.74 10.26-.7-.7" />
    <path d="m16.26 10.26.7.7" />
    <path d="m7.04 14.96.7.7" />
  </svg>
);
const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-mail"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-sun"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);
const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-moon"
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);
const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-github"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.44-.78-3.46 0 0-1.09-.35-3.57 1.34A7.36 7.36 0 0 0 12 6.32c-1.28 0-2.5.28-3.66.83-2.48-1.69-3.57-1.34-3.57-1.34A3.71 3.71 0 0 0 2 7.9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-linkedin"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// --- Navigation Component ---
const Navbar = ({ setCurrentPage }) => {
  // Receive setCurrentPage as prop
  const { theme, toggleTheme } = useTheme();
  // currentPage state is now managed higher up in App component
  // to be passed down. For now, using local state for active class.
  const [activePage, setActivePage] = useState("home");

  const navLinks = [
    { name: "Home", icon: HomeIcon, path: "home" },
    { name: "About", icon: UserIcon, path: "about" },
    { name: "Projects", icon: FolderCogIcon, path: "projects" },
    { name: "Contact", icon: MailIcon, path: "contact" },
  ];

  const handleNavLinkClick = (e, page) => {
    e.preventDefault(); // Prevent default link behavior (hash change)
    setCurrentPage(page); // Update the page state in the App component
    setActivePage(page); // Update local state for active link styling
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-md z-50 rounded-b-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          <a
            href="#"
            onClick={(e) => handleNavLinkClick(e, "home")}
            className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            Youssef Gad{" "}
            <span className="text-blue-600 dark:text-blue-400">.dev</span>
          </a>
        </h1>
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href="#" // Removed hash to prevent security error
                  onClick={(e) => handleNavLinkClick(e, link.path)}
                  className={`flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors rounded-md p-2
                    ${
                      activePage === link.path
                        ? "bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-white"
                        : ""
                    }`}
                >
                  <link.icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <MoonIcon className="w-5 h-5" />
            ) : (
              <SunIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

// --- Footer Component ---
const Footer = () => (
  <footer className="w-full bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-6 text-center mt-auto rounded-t-lg shadow-inner">
    <div className="container mx-auto px-4">
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label="GitHub profile"
        >
          <GithubIcon className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com/in/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label="LinkedIn profile"
        >
          <LinkedinIcon className="w-6 h-6" />
        </a>
      </div>
    </div>
  </footer>
);

// --- Home Page Component ---
const HomePage = (
  { setCurrentPage } // Receive setCurrentPage to navigate
) => (
  <section
    id="home"
    className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] py-16 px-4 text-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-xl"
  >
    <div className="max-w-4xl mx-auto">
      <img
        src="/Profile.png"
        alt="Your Profile"
        className="w-40 h-40 rounded-full object-cover border-4 border-blue-400 dark:border-blue-600 shadow-lg mb-8"
      />
      <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
        Hi, I'm{" "}
        <span className="text-blue-600 dark:text-blue-400">Youssef Gad</span>.
      </h2>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        A passionate{" "}
        <span className="font-semibold text-blue-700 dark:text-blue-300">
          Frontend Developer
        </span>{" "}
        dedicated to building interactive and user-friendly web applications. I
        thrive on bringing ideas to life through elegant code and cutting-edge
        technologies.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => setCurrentPage("projects")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-700"
        >
          View My Work
        </button>
        <button
          onClick={() => setCurrentPage("contact")}
          className="bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-500"
        >
          Get in Touch
        </button>
      </div>
    </div>
  </section>
);

// --- About Page Component ---
const AboutPage = () => (
  <section
    id="about"
    className="min-h-[calc(100vh-12rem)] py-16 px-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl"
  >
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-10 border-b-4 border-blue-600 dark:border-blue-400 pb-2">
        About Me
      </h2>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Hello! I'm a dedicated frontend developer with a passion for
            creating engaging and intuitive user experiences. My journey into
            web development began with a fascination for how interactive
            interfaces are built, and since then, I've been continuously
            learning and honing my skills.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I specialize in building responsive web applications using modern
            JavaScript frameworks, with a strong focus on **React**. I love
            turning complex problems into simple, beautiful, and efficient
            solutions. When I'm not coding, you can find me exploring new
            technologies, contributing to open-source projects, or enjoying a
            good book.
          </p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            My Skills
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300 text-lg">
            {[
              "React",
              "JavaScript (ES6+)",
              "TypeScript",
              "HTML5",
              "CSS3",
              "Tailwind CSS",
              "RESTful APIs",
              "Git",
              "Redux (or Zustand)",
              "Webpack/Vite",
              "Unit Testing (Jest/RTL)",
              "Figma Basics",
            ].map((skill) => (
              <li key={skill} className="flex items-center space-x-2">
                <span className="text-blue-600 dark:text-blue-400 font-semibold text-xl">
                  &bull;
                </span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// --- Projects Page Component ---
const ProjectCard = ({ project }) => (
  <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover object-center"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src =
          "https://placehold.co/400x200/E0F2F7/007bff?text=Project+Image";
      }}
    />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        {project.title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 text-base mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-end space-x-3">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors shadow-md"
          >
            Live Demo
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 text-sm font-medium rounded-md hover:bg-gray-300 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500 transition-colors shadow-md"
          >
            <GithubIcon className="w-4 h-4 mr-2" />
            GitHub
          </a>
        )}
      </div>
    </div>
  </div>
);

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      description:
        "A personal portfolio website for someone to showcase their skills projects and work exprience.",
      image: Project1,
      technologies: [
        "React",
        "Tailwind CSS",
        "Context API",
        "React Router",
        "lucide-react",
      ],
      liveLink: "https://fokir2.vercel.app/", // Link to itself
      githubLink: "https://github.com/YoussefGad97/YoussefGad",
    },
    {
      id: 2,
      title: "E-commerce Store Frontend",
      description:
        "A responsive e-commerce platform built with React, featuring product listings, shopping cart, and user authentication. Integrates a fake API for product data.",
      image: Project2,
      technologies: [
        "React",
        "Tailwind CSS",
        "React Router",
        "Context API",
        "Axios",
      ],
      liveLink: "https://jewelry-xi.vercel.app/", // Link to itself

      githubLink: "https://github.com/YoussefGad97/jewelry",
    },
    {
      id: 3,
      title: "Movies App",
      description:
        "A movie discovery app that fetches data from The Movie Database (TMDb) API, allowing users to browse, search, and view details about their favorite movies.",
      image: Project3,
      technologies: [
        "React",
        "Recharts",
        "Fetch API",
        "React Query",
        "Tailwind CSS",
      ],
      liveLink: "https://movies-app-v2-0.vercel.app/",
      githubLink: "https://github.com/YoussefGad97/Movies-App-V2.0",
    },
    {
      id: 4,
      title: "Restaurant Site & Ordering Platform",
      description:
        "A responsive website showcasing a burger restaurant, featuring a menu, reviews, and an ordering system.",
      image: Project4,
      technologies: [
        "React",
        "Tailwind CSS",
        "Context API",
        "React Router",
        "lucide-react",
      ],
      liveLink: "https://q-burger-brown.vercel.app/", // Link to itself
      githubLink: "https://github.com/YoussefGad97/QBurger",
    },
    {
      id: 5,
      title: "Marketing Firm Landing Page",
      description:
        "A marketing firm's landing page showcasing their services, products, and contact information.",
      image: Project5,
      technologies: [
        "React",
        "Tailwind CSS",
        "React Router",
        "Context API",
        "Axios",
      ],
      liveLink: "https://redline-media.vercel.app/", // Link to itself

      githubLink: "https://github.com/YoussefGad97/RedlineMedia",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-[calc(100vh-12rem)] py-16 px-4 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-xl"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-10 border-b-4 border-blue-600 dark:border-blue-400 pb-2">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {/* Vercel Projects Portfolio Link */}
        <div className="mt-12 text-center">
          <a
            href="https://vercel.com/youssef-gads-projects-48f45a94"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition-colors text-lg"
          >
            View All My Deployed Projects on Vercel
          </a>
        </div>
      </div>
    </section>
  );
};

// --- Contact Page Component ---
const ContactPage = () => {
  const [status, setStatus] = useState("");

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgvlwzjk";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.target);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-[calc(100vh-12rem)] py-16 px-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl"
    >
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-10 border-b-4 border-blue-600 dark:border-blue-400 pb-2">
          Contact Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8">
          Recruiters and collaborators: Please fill out the form below. I look
          forward to connecting!
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-md space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="e.g. Jane Doe"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-600 text-gray-900 dark:text-white transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="e.g. jane@company.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-600 text-gray-900 dark:text-white transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="e.g. Frontend Developer Position"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-600 text-gray-900 dark:text-white transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="linkedin"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              LinkedIn Profile (optional)
            </label>
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              placeholder="e.g. https://linkedin.com/in/your-profile"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-600 text-gray-900 dark:text-white transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="reason"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Reason for Contact
            </label>
            <select
              id="reason"
              name="reason"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-600 text-gray-900 dark:text-white transition-colors"
            >
              <option value="">Select a reason</option>
              <option value="job">Job Opportunity</option>
              <option value="collaboration">Collaboration</option>
              <option value="general">General Inquiry</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Type your message here..."
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-600 text-gray-900 dark:text-white resize-y transition-colors"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {status === "loading" ? (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Send Message"
            )}
          </button>
          {status === "success" && (
            <p className="mt-4 text-center text-green-600 dark:text-green-400">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-center text-red-600 dark:text-red-400">
              Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

// --- Main App Component ---
function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // No longer listening to hashchange, relying on internal state for navigation
  // and passing setCurrentPage down to Navbar.

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />; // Pass setCurrentPage to HomePage
      case "about":
        return <AboutPage />;
      case "projects":
        return <ProjectsPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        {" "}
        {/* Removed font-sans, antialiased, bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200, transition-colors duration-300 from here */}
        <Navbar setCurrentPage={setCurrentPage} />{" "}
        {/* Pass setCurrentPage down */}
        <main className="flex-grow container mx-auto px-4 py-8 mt-20 mb-8">
          {" "}
          {/* Added margin-top to clear fixed navbar */}
          {renderPage()}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
