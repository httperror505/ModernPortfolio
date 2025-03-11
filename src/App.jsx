import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// dark mode
import { useTheme } from './components/ThemeProvider'
// components
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <nav className="bg-white dark:bg-black text-black dark:text-white p-6 flex justify-end items-center w-full">
            {/* Menu Links */}
            <ul className="flex space-x-6 font-semibold mx-5">
                <li className="hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer">Home</li>
                <li className="hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer">Education</li>
                <li className="hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer">Projects</li>
                <li className="hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer">Skills</li>
                <li className="hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer">Contact</li>
            </ul>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => [setTheme(isDark ? "light" : "dark"), console.log(theme)]}
              className="relative w-16 h-8 flex items-center rounded-full p-1 
                transition-colors bg-gray-300 data-[theme=dark]:bg-white"
            >
              {/* Sun & Moon Emojis */}
              <span className="absolute left-2 text-xl transition-opacity data-[theme=dark]:opacity-0">
                ☀️
              </span>
              <span className="absolute right-2 text-xl opacity-0 transition-opacity data-[theme=dark]:opacity-100">
                🌙
              </span>

              {/* Moving Toggle */}
              <div
                className={`absolute w-6 h-6 rounded-full flex items-center justify-center shadow-md 
                  transition-transform ${isDark ? "bg-black translate-x-8" : "bg-white translate-x-0"}`}
              />
            </button>
            
        </nav>
        {/* body */}
        <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold text-green-600 Poppins z-10">Full Stack Software Engineer</h1>
        <img
          src="/portrait.png"
          alt="Patrick"
          className="w-100 transition- z-20"
        />
      </div>
    </div>
  )
}

export default App
