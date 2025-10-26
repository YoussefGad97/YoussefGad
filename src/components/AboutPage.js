import React from "react";

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

export default AboutPage;
