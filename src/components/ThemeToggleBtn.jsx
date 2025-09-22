import React, { useEffect } from "react";
import assets from "../assets/assets";


const ThemeToggleBtn = ({ theme, setTheme }) => {
    const isDark = theme === "dark";

    useEffect(() => {
        const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(theme || (prefersDarkMode ? "dark" : "light"))
    },[])

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    }, [theme])
  
    return (
      <button onClick={() => setTheme(isDark ? "light" : "dark")}  className="p-1.5 border border-gray-500 rounded-full">
        <img src={isDark ? assets.sun_icon : assets.moon_icon} className="size-4.5" alt={isDark ? "Switch to light mode" : "Switch to dark mode"} />
      </button>
    );
  };
  
export default ThemeToggleBtn;  
