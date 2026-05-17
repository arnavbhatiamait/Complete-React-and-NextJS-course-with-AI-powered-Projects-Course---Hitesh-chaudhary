import React, { use, useState } from 'react'
import { useContext } from 'react';
import { createContext } from 'react'
// ! this is just a placeholder component to show how to use context for theme toggling. The actual implementation will be done in the next section on context API.
const ThemeContext = createContext();

// ! theme provider component
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
    }
    const value = {
        theme,
        toggleTheme,
        isDark: theme === "dark"
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}
export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}

function ThemeToggleButton() {
    const { theme, toggleTheme, isDark } = useTheme();
    return (
        function ThemeToggleButton() {
            const { theme, toggleTheme, isDark } = useTheme();

            return (
                <button
                    onClick={toggleTheme}
                    className={`
        relative w-16 h-8 rounded-full transition-colors duration-300
        ${isDark ? "bg-blue-600" : "bg-gray-300"}
      `}
                >
                    <div
                        className={`
          absolute top-1 left-1 w-6 h-6 rounded-full bg-white
          transition-transform duration-300 flex items-center justify-center
          ${isDark ? "transform translate-x-8" : ""}
        `}
                    >
                        {isDark ? "🌙" : "☀️"}
                    </div>
                </button>
            );
        }
    );
}

function ThemeCard({ title, children }) {
    const {isDark} = useTheme();
    return (
            <div
      className={`
        p-6 rounded-lg shadow-lg transition-colors duration-300
        ${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"}
      `}
    >
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <div>{children}</div>
    </div>
    )

}

function ThemeToggler() {
    const { theme, toggleTheme, isDark } = useTheme();

    return (
        <div>ThemeToggler</div>
    )
}

export default ThemeToggler