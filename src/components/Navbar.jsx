import React, { useState, useEffect } from "react";

export default function Navbar () {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
      );

      useEffect(() => {
        if (darkMode) {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      }, [darkMode]);

    return (
        <nav className="bg-white dark:bg-black text-black dark:text-white p-4 flex justify-between items-center">
            {/* Menu Links */}
            <ul className="flex space-x-6 font-semibold">
                <li className="hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer">Home</li>
                <li className="hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer">Education</li>
                <li className="hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer">Projects</li>
                <li className="hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer">Skills</li>
                <li className="hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer">Contact</li>
            </ul>

            {/* Dark Mode Toggle */}
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="bg-gray-300 dark:bg-gray-700 p-2 rounded-full flex items-center"
            >
                <span className="text-yellow-500 dark:hidden">☀️</span>
                <span className="hidden dark:block text-white">🌙</span>
            </button>
        </nav>
    );

};