'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface AboutProps {
  setActiveSection: (section: string) => void
}

export default function About({ setActiveSection }: AboutProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section 
      id="about" 
      ref={ref}
      className="section-padding bg-white dark:bg-gray-900"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Sobre mim</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-100 leading-relaxed mb-6">
              Tenho 19 anos e sou estudante da segunda fase do curso de Sistemas de Informação. Atualmente, atuo como estagiário de TI no Sicoob Crediserra, onde venho desenvolvendo habilidades práticas em suporte técnico, manutenção de sistemas e infraestrutura. Estou focado em me tornar um desenvolvedor full stack, com interesse especial em construir aplicações completas, do backend ao frontend. Busco aplicar o que aprendo em projetos que unam funcionalidade e uma boa experiência para o usuário, sempre com atenção à qualidade do código e boas práticas de desenvolvimento.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-primary-600 dark:text-blue-300 mb-2">2+</div>
                <div className="text-gray-600 dark:text-gray-100">cursos concluídos na área</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-primary-600 dark:text-blue-300 mb-2">70+</div>
                <div className="text-gray-600 dark:text-gray-100">horas dedicadas a estudos</div>
              </div>
            </div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-96 h-96 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center shadow-xl dark:from-gray-700 dark:to-gray-800">
                <div className="text-center">
                  <div className="text-8xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Foco em Performance
                  </h3>
                  <p className="text-gray-600 dark:text-gray-100">
                    Experiências digitais rápidas e escaláveis
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-red-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 