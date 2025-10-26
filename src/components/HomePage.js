import React from "react";

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

export default HomePage;
