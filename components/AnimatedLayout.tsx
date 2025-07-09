'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, createContext } from 'react'

export const ThemeContext = createContext<'light' | 'dark'>('light')

export default function AnimatedLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [prevTheme, setPrevTheme] = useState<'light' | 'dark'>('light')
  const [showWipe, setShowWipe] = useState(false)
  const [wipeDirection, setWipeDirection] = useState<'left' | 'right'>('right')

  useEffect(() => {
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light')
    setPrevTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const newTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
      if (newTheme !== theme) {
        setPrevTheme(theme)
        setTheme(newTheme)
        setShowWipe(true)
        setWipeDirection(theme === 'light' && newTheme === 'dark' ? 'right' : 'left')
        setTimeout(() => setShowWipe(false), 700) // 700ms = duração do wipe
      }
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => {
      observer.disconnect()
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={theme}>
      <AnimatePresence>
        {showWipe && (
          <motion.div
            key={theme + '-wipe'}
            initial={{ x: wipeDirection === 'right' ? '100%' : '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: wipeDirection === 'right' ? '-100%' : '100%' }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="fixed inset-0 z-[9999] pointer-events-none"
            style={{ background: theme === 'dark' ? '#1a2332' : '#f8fdfa' }}
          />
        )}
      </AnimatePresence>
      <motion.div
        key={theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </ThemeContext.Provider>
  )
} 