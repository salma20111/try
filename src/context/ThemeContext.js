"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");
    console.log(theme);

    const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme])

    return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
}

export function useTheme() {
    return useContext(ThemeContext);
}
