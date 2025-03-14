import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// dark mode
import { useTheme } from './components/ThemeProvider'
// components
import Navbar from './components/Navbar'

function App() {
  
  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <div className="min-h-screen bg-white dark:bg-[#040708] text-black dark:text-white">
        <Navbar/>
        {/* body */}
        <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-7xl font-bold text-[#c4efdf] Poppins z-10">Full Stack Software Engineer</h1>
        <img
          src="/portrait.png"
          alt="Patrick"
          className="w-100 transition-all z-20 bottom-0 fixed-bottom bg-gradient-to-b"
        />
      </div>

      <section className=''>

      </section>
    </div>
  )
}

export default App
