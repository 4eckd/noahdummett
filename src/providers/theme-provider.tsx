"use client"

import * as React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "violet" | "emerald" | "amber" | "aurora"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  attribute?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  themes: Theme[]
}

const initialState: ThemeProviderState = {
  theme: "dark",
  setTheme: () => null,
  themes: ["dark", "violet", "emerald", "amber", "aurora"],
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  attribute = "data-theme",
  disableTransitionOnChange = false,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  useEffect(() => {
    const root = window.document.documentElement
    root.setAttribute(attribute, theme)
  }, [theme, attribute])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      if (!disableTransitionOnChange) {
        // Add smooth transition
        document.documentElement.style.setProperty('transition', 'all 0.3s ease-in-out')
        setTimeout(() => {
          document.documentElement.style.removeProperty('transition')
        }, 300)
      }
      
      localStorage.setItem("investigation-theme", theme)
      setTheme(theme)
    },
    themes: ["dark", "violet", "emerald", "amber", "aurora"] as Theme[],
  }

  // Load theme from localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("investigation-theme") as Theme
    if (storedTheme && initialState.themes.includes(storedTheme)) {
      setTheme(storedTheme)
    }
  }, [])

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
