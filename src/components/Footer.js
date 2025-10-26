import React from "react";

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

const Footer = () => (
  <footer className="w-full bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-6 text-center mt-auto rounded-t-lg shadow-inner">
    <div className="container mx-auto px-4">
      <p>&copy; {new Date().getFullYear()} Youssef Gad. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a
          href="https://github.com/YoussefGad97"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label="GitHub profile"
        >
          <GithubIcon className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/youssef-gad-1a9678258/"
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

export default Footer;
