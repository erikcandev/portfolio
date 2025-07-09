'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface HeroProps {
  setActiveSection: (section: string) => void
  isSwapped?: boolean
}

export default function Hero({ setActiveSection, isSwapped = false }: HeroProps) {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection('about')
    }
  }

  // wipeKey força o remount do motion.div da foto para animar o wipe na troca de layout
  const [wipeKey, setWipeKey] = useState(0)
  useEffect(() => {
    setWipeKey(isSwapped ? 1 : 0)
  }, [isSwapped])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container-custom section-padding">
        <motion.div className="grid lg:grid-cols-2 gap-12 items-center" layout>
          {isSwapped ? (
            <>
              {/* Avatar */}
              <motion.div layout className="flex justify-center lg:justify-start">
                <a
                  href="https://www.linkedin.com/in/erik-domingos-candido-646628366/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Erik Domingos Cândido"
                >
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.08, rotate: 4 }}
                  >
                    <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-2xl dark:from-gray-700 dark:to-gray-800">
                      <div className="w-72 h-72 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                        <div className="w-64 h-64 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                          <Image
                            src="/pfp.jpg"
                            alt="Foto de Erik Domingos Cândido"
                            width={180}
                            height={180}
                            className="rounded-full object-cover w-40 h-40"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                    {/* Floating elements */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-400 rounded-full"
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                  </motion.div>
                </a>
              </motion.div>
              {/* Content */}
              <motion.div layout className="text-center lg:text-left">
                <motion.h1
                  className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-2 whitespace-nowrap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Olá, eu sou o <span className="text-primary-600">Erik</span>
                </motion.h1>
                <motion.h2
                  className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Bem-vindo ao meu <span className="text-primary-600">Portfólio</span> :)
                </motion.h2>
                
                <motion.p
                  className="text-xl text-gray-600 dark:text-gray-100 mb-8 max-w-2xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  estudante de sistemas de informação, focado em aprendizado e experiências
                </motion.p>
                
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.button
                    className="btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const element = document.getElementById('projects')
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                        setActiveSection('projects')
                      }
                    }}
                  >
                    Ver Projetos
                  </motion.button>
                  
                  <motion.button
                    className="btn-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToAbout}
                  >
                    Sobre Mim
                  </motion.button>
                </motion.div>
              </motion.div>
            </>
          ) : (
            <>
              {/* Content */}
              <motion.div layout className="text-center lg:text-left">
                <motion.h1
                  className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-2 whitespace-nowrap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Olá, eu sou o <span className="text-primary-600">Erik</span>
                </motion.h1>
                <motion.h2
                  className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Bem-vindo ao meu <span className="text-primary-600">Portfólio</span> :)
                </motion.h2>
                
                <motion.p
                  className="text-xl text-gray-600 dark:text-gray-100 mb-8 max-w-2xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  estudante de sistemas de informação, focado em aprendizado e experiências
                </motion.p>
                
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.button
                    className="btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const element = document.getElementById('projects')
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                        setActiveSection('projects')
                      }
                    }}
                  >
                    Ver Projetos
                  </motion.button>
                  
                  <motion.button
                    className="btn-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToAbout}
                  >
                    Sobre Mim
                  </motion.button>
                </motion.div>
              </motion.div>
              {/* Avatar */}
              <motion.div layout className="flex justify-center lg:justify-end">
                <a
                  href="https://www.linkedin.com/in/erik-domingos-candido-646628366/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Erik Domingos Cândido"
                >
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.08, rotate: 4 }}
                  >
                    <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-2xl dark:from-gray-700 dark:to-gray-800">
                      <div className="w-72 h-72 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                        <div className="w-64 h-64 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                          <Image
                            src="/pfp.jpg"
                            alt="Foto de Erik Domingos Cândido"
                            width={180}
                            height={180}
                            className="rounded-full object-cover w-40 h-40"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                    {/* Floating elements */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-400 rounded-full"
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                  </motion.div>
                </a>
              </motion.div>
            </>
          )}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-gray-600 hover:text-primary-600 transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm mb-2 text-gray-600 dark:text-white">Scroll</span>
            <ChevronDown size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 