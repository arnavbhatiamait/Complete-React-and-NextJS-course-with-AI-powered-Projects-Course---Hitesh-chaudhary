import { useAppStore } from "../store/appStore";

import React from 'react'

export default function Navbar() {
    const {user, login, logout, theme, toggleTheme} = useAppStore((state) => ({
        user: state.user,
        login: state.login,
        logout: state.logout,
        theme: state.theme,
        toggleTheme: state.toggleTheme,
    }))
  return (

    <nav>
        <span>Theme: {theme}</span>
        <button onClick={toggleTheme}>Toggle Theme</button>
        {user ? (
            <> 
            <span>Welcome, {user.name}!</span> 
            <button onClick={logout}>Logout</button>
            </>
        ) : (
            <span>Please log in.</span>
        )}
    </nav>  
  )
}
