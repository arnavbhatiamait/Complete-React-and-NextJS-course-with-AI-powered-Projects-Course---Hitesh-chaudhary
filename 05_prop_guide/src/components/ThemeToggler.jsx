import React, { useState } from 'react'
import { createContext } from 'react'
// ! this is just a placeholder component to show how to use context for theme toggling. The actual implementation will be done in the next section on context API.
const ThemeContext=createContext();

// ! theme provider component
export function ThemeProvider({children}){
    const [theme,setTheme]=useState("light");
    const toggleTheme=()=>{
        setTheme((prevTheme)=>prevTheme==="light"?"dark":"light");
    }
    const value={
        theme,
        toggleTheme,
        isDark:theme==="dark"
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}
function ThemeToggler() {
  return (
    <div>ThemeToggler</div>
  )
}

export default ThemeToggler