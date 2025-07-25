// import React, { createContext, useState, useEffect } from "react";

// // Create Context
// export const ThemeContext = createContext();

// // Theme Provider
// export const ThemeProvider = ({ children }) => {
//     const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

//     // Apply theme on load
//     useEffect(() => {
//         if (theme === "dark") {
//             document.documentElement.classList.add("dark");
//         } else {
//             document.documentElement.classList.remove("dark");
//         }
//     }, [theme]);

//     // Toggle Theme
//     const toggleTheme = () => {
//         const newTheme = theme === "dark" ? "light" : "dark";
//         setTheme(newTheme);
//         localStorage.setItem("theme", newTheme);

//         if (newTheme === "dark") {
//             document.documentElement.classList.add("dark");
//         } else {
//             document.documentElement.classList.remove("dark");
//         }
//     };

//     return (
//         <ThemeContext.Provider value={{ theme, toggleTheme }}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };

import React, { createContext, useState, useEffect } from "react";

// Create Context
export const ThemeContext = createContext();

// Theme Provider
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    const [isAnimating, setIsAnimating] = useState(false);

    // Apply theme on load
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    // Toggle Theme with Animation
    const toggleTheme = () => {
        setIsAnimating(true);
        setTimeout(() => {
            const newTheme = theme === "dark" ? "light" : "dark";
            setTheme(newTheme);
            localStorage.setItem("theme", newTheme);
            setIsAnimating(false);
        }, 500); // Animation duration
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isAnimating }}>
            <div className={`transition-all duration-500 ease-in-out ${isAnimating ? "opacity-50" : "opacity-100"}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};
