import React from "react";
import Project1 from "../assets/images/Project1.png";
import Project2 from "../assets/images/Project2.png";
import Project3 from "../assets/images/Project3.png";
import Project4 from "../assets/images/Project4.png";
import Project5 from "../assets/images/Project5.png";
import Project6 from "../assets/images/Project6.png";
import Project7 from "../assets/images/Project7.png";

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

const ProjectCard = ({ project }) => (
  <div
    className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 hover:scale-105 group"
    style={{ cursor: "pointer" }}
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover object-center group-hover:scale-105 transition-all duration-300"
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
            className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300"
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
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors shadow-md group-hover:scale-105"
          >
            Live Demo
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 text-sm font-medium rounded-md hover:bg-gray-300 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500 transition-colors shadow-md group-hover:scale-105"
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
    {
      id: 6,
      title: "Bakery Shop Website",
      description:
        "A bakery shop's website featuring their products, services, and contact details.",
      image: Project6,
      technologies: [
        "React",
        "Tailwind CSS",
        "React Router",
        "Context API",
        "Axios",
      ],
      liveLink:
        "https://bakery-74f9q4qcu-youssef-gads-projects-48f45a94.vercel.app/", // Link to itself

      githubLink: "https://github.com/YoussefGad97/Bakery",
    },
    {
      id: 7,
      title: "Personal Video Gallery",
      description:
        "A platform for users to upload and manage their personal video collections. Features a responsive gallery and video playback.",
      image: Project7, 
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
       liveLink:
        "https://personal-video-archive.vercel.app/", // Link to itself

      githubLink: "https://github.com/YoussefGad97/personal-video-archive",
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

export default ProjectsPage;
