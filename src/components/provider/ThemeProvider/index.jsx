"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [isHydrated, setIsHydrated] = useState(false); // To handle hydration state
  const prevTheme = useRef(null);

  useEffect(() => {
    // Wait for client-side rendering before reading from localStorage
    setIsHydrated(true);

    const storedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    setTheme(storedTheme);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      if (typeof window !== "undefined") {
        if (prevTheme?.current) {
          document.documentElement.classList.remove(prevTheme?.current);
        }
        document.documentElement.setAttribute("data-theme", theme);
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(theme);
        localStorage.setItem("theme", theme);
        prevTheme.current = theme;
      }
    }
  }, [theme, isHydrated]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
