import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// dark mode
import { useTheme } from "./components/ThemeProvider";
// components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function App() {
  // const storedTheme = localStorage.getItem("theme") || "light";
  // const [theme, setTheme] = useState(storedTheme);

  // useEffect(() => {
  //   document.documentElement.classList.toggle("dark", theme === "dark");
  //   localStorage.setItem("theme", theme);
  // }, [theme]);

  // const isDark = theme === "dark";

  const { theme, toggleTheme } = useTheme(); // Use the custom hook to access the theme

  return (
    <div className="min-h-screen bg-white dark:bg-[#040708] text-black dark:text-white">
      <Navbar toggleTheme={toggleTheme} />
      {/* body */}
      <Home/>
      <Education />
      <Projects/>
      <Skills/>
    </div>
  );
}
