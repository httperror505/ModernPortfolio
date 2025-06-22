import React from "react";

export default function Home() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="shadow-xl rounded-2xl max-w-7xl w-full p-6 sm:p-10 grid grid-cols-1 md:grid-cols-4 gap-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        {/* Sidebar / Profile */}
        <div className="col-span-1 flex flex-col items-center text-center">
          <img
            src="/portrait.png"
            alt="John Rey's Portrait"
            className="rounded-full h-60 w-60 sm:h-60 sm:w-60 object-cover mb-4 border-4 border-white dark:border-gray-700"
          />
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            John Rey S. Tolosa
          </h1>
          <h4 className="text-gray-500 dark:text-gray-400">@rjay</h4>
          <div className="mt-4 text-sm text-gray-700 dark:text-gray-300 text-left w-full px-2">
            <p>📍 Naga City, Philippines</p>
            <p>
              💻{" "}
              <a
                href="https://github.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com
              </a>
            </p>
            <p>
              🔗{" "}
              <a
                href="https://linkedin.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com
              </a>
            </p>
            <p>📞 0999-555-5559</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-1 md:col-span-3 space-y-8">
          {/* README-style Bio */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              👋 Hi there, I'm{" "}
              <span className="text-blue-600 dark:text-blue-400">
                John Rey!
              </span>
            </h2>
            <h3 className="text-lg text-gray-700 dark:text-gray-300 mt-1">
              🚀 Full Stack Software Engineer
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              I'm passionate about building efficient, scalable applications
              using modern web technologies. I love working with JavaScript,
              Node.js, React, and exploring backend architectures.
            </p>
          </div>

          {/* Pinned Projects */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              📌 Pinned Projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Project Card */}
              {[
                {
                  title: "EcoMarket 🌿",
                  desc: "An e-commerce platform for sustainable products built with MERN stack.",
                },
                {
                  title: "NCF Research Nexus 📚",
                  desc: "A digital repository for student research with PDF viewer and keyword tagging.",
                },
                {
                  title: "Taskify ✅",
                  desc: "Task management app with authentication and role-based permissions.",
                },
                {
                  title: "WeatherMate ⛅",
                  desc: "A real-time weather app powered by OpenWeather API and React Native.",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-4 shadow-sm"
                >
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {project.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <h1 className="text-8xl font-extrabold text-[#c4efdf] font-poppins">
          Full Stack 
        </h1>
        <h1 className="text-9xl font-black text-[#c4efdf] font-poppins">
          Software Engineer
        </h1> */}

      {/* <div className="text-center absolute inset-0 flex flex-col items-center justify-center z-0 pb-70">
        <h1 className="text-5xl sm:text-7xl md:text-6xl lg:text-9xl font-extrabold text-black dark:text-[#c4efdf] text-center">
          Fullstack <br />
          <span className="block sm:inline">Software Engineer</span>
        </h1>
      </div> */}

      {/* <div className="text-center absolute inset-0 flex flex-col items-center justify-center z-0 pb-70">
        <h1 className="text-5xl sm:text-7xl md:text-6xl lg:text-9xl font-extrabold text-[#0C0C0C] dark:text-[#c4efdf] text-center">
          <span className="typing-animation-line1">Fullstack</span>
          <br />
          <span className="typing-animation-line2">
            Software&nbsp;&nbsp;&nbsp;Engineer
          </span>
        </h1>
      </div>

      <div></div>

      <img
        src="/portrait.png"
        alt="John Rey's Portrait"
        className="absolute bottom-0 w-[50%] sm:w-[50%] md:w-[40%] lg:w-[23%] mx-auto left-0 right-0"
      /> 

      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 relative overflow-hidden">
        
        <div className="w-full md:w-1/3 flex justify-center md:justify-end mb-6 md:mb-0 slide-in-left">
          <img
            src="/portrait.png"
            alt="John Rey's Portrait"
            className="w-[60%] sm:w-[50%] md:w-[80%] lg:w-[70%] border border-[#c4efdf] rounded-4xl"
          />
        </div>

        <div className="w-full md:w-2/3 flex justify-center md:justify-start slide-in-right">
          <h1 className="text-3xl sm:text-5xl md:text-4xl lg:text-6xl font-extrabold text-[#0C0C0C] dark:text-[#c4efdf] text-center md:text-left">
            <span className="typing-line typing-line1">Fullstack</span>
            <span className="typing-line typing-line2 mt-2">
              Software Engineer
            </span>
          </h1>
        </div>
      </div>
      */}
    </section>
  );
}
