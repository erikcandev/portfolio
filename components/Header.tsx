'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, Menu, X } from 'lucide-react'

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light'
    }
    return 'light'
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Projetos' },
    { id: 'contact', label: 'Contatos' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setMenuOpen(false)
    }
  }

  const handleSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-800/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-gray-800 dark:bg-gray-900'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 px-4 relative">
            {/* Menu Sanduíche */}
            <div className="flex items-center">
              <button
                className="md:hidden text-white p-2 focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Abrir menu"
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
              {/* Menu lateral mobile com navegação e botões */}
              {menuOpen && (
                <motion.nav
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -200, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed top-0 left-0 h-full w-64 bg-gray-800 dark:bg-gray-900 shadow-lg z-50 flex flex-col pt-20 gap-2"
                >
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-8 py-4 text-lg font-medium transition-colors duration-200 ${
                        activeSection === item.id
                          ? 'text-blue-300 dark:text-blue-200'
                          : 'text-gray-200 dark:text-white hover:text-blue-300 dark:hover:text-blue-200'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="flex flex-col gap-4 mt-8 px-8">
                    <motion.button
                      className="bg-transparent border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-gray-800 font-medium py-2 px-6 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download size={16} />
                      <span>Download CV</span>
                    </motion.button>
                    <motion.button
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => scrollToSection('contact')}
                    >
                      <Mail size={16} />
                      <span>Entrar em contato</span>
                    </motion.button>
                  </div>
                </motion.nav>
              )}
            </div>

            {/* Logo centralizado */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <motion.span
                className="text-2xl md:text-3xl font-extrabold text-white"
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                style={{ cursor: 'pointer', pointerEvents: 'auto' }}
              >
                Portfólio
              </motion.span>
            </div>

            {/* Switch no canto direito */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={theme === 'dark'}
                  onChange={handleSwitch}
                  aria-label="Alternar modo escuro"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-400 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
                <div className="absolute left-1 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-200 peer-checked:translate-x-5"></div>
              </label>
            </div>
        </div>
      </div>
      <div className="border-b border-primary-600 w-full" />
    </motion.header>
  )
} 