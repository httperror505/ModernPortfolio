import React, { useState, useEffect } from "react";

export default function Navbar() {
  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <nav className="bg-white dark:bg-[#040708] text-black dark:text-white p-6 flex justify-end items-center w-full">
      {/* Menu Links */}
      <ul className="flex space-x-6 font-semibold mx-5">
        <li className="hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer">
          Home
        </li>
        <li className="hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer">
          Education
        </li>
        <li className="hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer">
          Projects
        </li>
        <li className="hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer">
          Skills
        </li>
        <li className="hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer">
          Contact
        </li>
      </ul>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => [
          setTheme(isDark ? "light" : "dark"),
          console.log(theme),
        ]}
        className="relative w-18 h-10 flex items-center rounded-full p-1 
          transition-colors bg-gray-300 data-[theme=dark]:bg-white"
      >
        {/* Sun & Moon Emojis */}
        <span className="absolute left-2 text-xl transition-opacity dark:opacity-50 z-10">
          ☀️
        </span>
        <span className="absolute right-2 text-xl opacity-0 transition-opacity dark:opacity-100 z-10">
          🌙
        </span>

        {/* Moving Toggle */}
        <div
          className={`absolute w-8 h-8 rounded-full flex items-center justify-center shadow-md 
            transition-transform ${
              isDark ? "bg-black translate-x-8 z-0" : "bg-white translate-x-0"
            }`}
        />
      </button>
    </nav>
  );
}
