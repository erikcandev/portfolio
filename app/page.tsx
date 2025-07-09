'use client'

import { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { ThemeContext } from '@/components/AnimatedLayout'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const theme = useContext(ThemeContext)

  return (
    <main className="min-h-screen">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero setActiveSection={setActiveSection} isSwapped={theme === 'dark'} />
      <About setActiveSection={setActiveSection} />
      <Skills setActiveSection={setActiveSection} />
      <Projects setActiveSection={setActiveSection} />
      <Contact setActiveSection={setActiveSection} />
      <Footer />
    </main>
  )
} 