// "use client";

// import { createContext, useContext, useEffect, useRef, useState } from "react";

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState(
//     localStorage.setItem("theme", theme) || "light",
//   );
//   const prevTheme = useRef(null);

//   useEffect(() => {
//     const theme =
//       localStorage.getItem("theme") ||
//       (window.matchMedia("(prefers-color-scheme: dark)").matches
//         ? "dark"
//         : "light");

//     setTheme(theme);
//   }, []);

//   useEffect(() => {
//     if (prevTheme?.current) {
//       document.documentElement.classList.remove(prevTheme?.current);
//     }
//     document.documentElement.setAttribute("data-theme", theme);
//     document.documentElement.classList.remove(theme);
//     document.documentElement.classList.add(theme);
//     localStorage.setItem("theme", theme);
//     prevTheme.current = theme;
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);
