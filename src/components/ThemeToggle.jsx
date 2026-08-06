import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle Dark/Light Mode"
      className="w-9 h-9 rounded-xl bg-slate-200 dark:bg-slate-900/40 border border-slate-300 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-[#FE9A00] dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-[#FE9A00]/10 hover:border-[#FE9A00]/30 transition-all duration-300 cursor-pointer"
    >
      {darkMode ? (
        <FiSun className="text-lg text-[#FE9A00]" />
      ) : (
        <FiMoon className="text-lg" />
      )}
    </button>
  );
};

export default ThemeToggle;
