import React from 'react'
import { Sun, Moon } from 'lucide-react'

const ThemeToggle = ({ isDark, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            className="relative h-14 w-14 rounded-full  border-[rgb(var(--border-secondary))] bg-[rgb(var(--bg-navbar))] shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-300 group"
            aria-label="Toggle theme"
        >
            {/* Sun Icon - visible in dark mode */}
            <Sun
                className={`absolute transition-all duration-500 ease-in-out ${isDark
                    ? 'opacity-100 rotate-0 scale-100'
                    : 'opacity-0 rotate-90 scale-0'
                    }`}
                size={22}
                strokeWidth={2.5}
                color="#FDB813"
            />

            {/* Moon Icon - visible in light mode */}
            <Moon
                className={`absolute transition-all duration-500 ease-in-out ${!isDark
                    ? 'opacity-100 rotate-0 scale-100'
                    : 'opacity-0 -rotate-90 scale-0'
                    }`}
                size={22}
                strokeWidth={2.5}
                color="#6366f1"
            />

            {/* Animated background glow */}
            <div
                className={`absolute inset-0 rounded-full transition-all duration-500 ${isDark
                    ? 'bg-linear-to-br from-yellow-500/10 to-orange-500/10'
                    : 'bg-linear-to-br from-indigo-500/10 to-purple-500/10'
                    }`}
            />

            {/* Hover ring effect */}
            <div className="absolute h-14 w-14 flex items-center justify-center inset-0 rounded-full ring-2 ring-transparent group-hover:ring-[rgb(var(--text-accent))] transition-all duration-300" />
        </button>
    )
}

export default ThemeToggle