"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AlertTriangle, FileText, Scale, Home } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/providers/theme-provider"

const navigation = [
  {
    name: "Investigation",
    href: "/",
    icon: Home,
    description: "Main investigation overview"
  },
  {
    name: "Evidence",
    href: "/evidence",
    icon: FileText,
    description: "Comprehensive evidence archive"
  },
  {
    name: "Legal",
    href: "/legal", 
    icon: Scale,
    description: "Legal documentation and filings"
  },
  {
    name: "Documentation",
    href: "/docs",
    icon: FileText,
    description: "Complete documentation hub"
  }
]

const themes = [
  { name: "Dark", value: "dark" as const },
  { name: "Violet", value: "violet" as const },
  { name: "Emerald", value: "emerald" as const },
  { name: "Amber", value: "amber" as const },
  { name: "Aurora", value: "aurora" as const },
]

export function Header() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <AlertTriangle className="h-6 w-6 text-red-500" />
          <span className="font-bold text-lg">
            Noah Dummett <span className="text-red-500">Investigation</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navigation.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== "/" && pathname.startsWith(item.href))
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center space-x-1 transition-colors hover:text-foreground/80",
                  isActive ? "text-foreground" : "text-foreground/60"
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>

        {/* Theme Selector */}
        <div className="flex items-center space-x-2">
          <div className="relative">
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value as "dark" | "violet" | "emerald" | "amber" | "aurora")}
              className="flex h-9 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              {themes.map((themeOption) => (
                <option key={themeOption.value} value={themeOption.value}>
                  {themeOption.name}
                </option>
              ))}
            </select>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground/60 hover:text-foreground/80 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== "/" && pathname.startsWith(item.href))
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground/60 hover:text-foreground/80 hover:bg-accent/50"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
