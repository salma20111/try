"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        if(typeof window !== "undefined") {
            localStorage.getItem("theme") ?? "light";
        }
    });
    

    const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme)
        //only in useeffect becaus it work in client not server 
    }, [theme]);


    return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
}

export function useTheme() {
    return useContext(ThemeContext);
}
