"use client"

import { useTheme } from "next-themes"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Ensure hydration is complete before rendering theme UI
  useEffect(() => setMounted(true), [])

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between p-4 shadow-md bg-white dark:bg-gray-900">
      {/* Left: Logo */}
      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
        MyPortfolio
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        <Link href="/" className="hover:text-blue-500 dark:hover:text-blue-300">Home</Link>
        <Link href="/about" className="hover:text-blue-500 dark:hover:text-blue-300">About</Link>
        <Link href="/projects" className="hover:text-blue-500 dark:hover:text-blue-300">Projects</Link>
        <Link href="/contact" className="hover:text-blue-500 dark:hover:text-blue-300">Contact</Link>

        {/* Theme Toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-md border px-3 py-1 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="absolute top-16 right-4 w-48 rounded-lg bg-white dark:bg-gray-800 shadow-lg md:hidden flex flex-col gap-4 p-4">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

          {mounted && (
            <button
              onClick={() => {
                setTheme(theme === "light" ? "dark" : "light")
                setMenuOpen(false)
              }}
              className="rounded-md border px-3 py-1 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
          )}
        </div>
      )}
    </nav>
  )
}
