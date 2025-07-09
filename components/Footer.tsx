'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <>
      <div className="w-full h-[2px] bg-[#22b455]" />
      <footer className="bg-[#101926] text-white py-12">
        <div className="container-custom">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold text-blue-300 dark:text-blue-200 mb-2">
                Portfolio
              </h3>
              <p className="text-gray-200 dark:text-white">
                Desenvolvedor Front-end especializado em criar experiências digitais incríveis
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center space-x-6 mb-8"
            >
              <a
                href="https://github.com/seu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 dark:text-white hover:text-blue-300 transition-colors duration-200"
              >
                Github
              </a>
              <a
                href="https://linkedin.com/in/seu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 dark:text-white hover:text-blue-300 transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="mailto:seu-email@gmail.com"
                className="text-gray-300 dark:text-white hover:text-blue-300 transition-colors duration-200"
              >
                Email
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="border-t border-gray-700 dark:border-gray-800 pt-8"
            >
              <p className="text-gray-300 dark:text-white text-sm">
                © {new Date().getFullYear()} Erik Domingos Candido.
              </p>
            </motion.div>
          </div>
        </div>
      </footer>
    </>
  )
} 