'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface AboutProps {
  setActiveSection: (section: string) => void
}

export default function Skills({ setActiveSection }: AboutProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skills = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 90 },
      ]
    },
    {
      category: 'Styling & UI',
      technologies: [
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Styled Components', level: 80 },
        { name: 'Material UI', level: 75 },
        { name: 'CSS Modules', level: 85 },
        { name: 'Sass/SCSS', level: 80 },
      ]
    },
    {
      category: 'State Management',
      technologies: [
        { name: 'Redux', level: 80 },
        { name: 'Context API', level: 85 },
        { name: 'Zustand', level: 70 },
        { name: 'React Query', level: 75 },
      ]
    },
    {
      category: 'Tools & Others',
      technologies: [
        { name: 'Git', level: 85 },
        { name: 'Webpack', level: 70 },
        { name: 'Vite', level: 80 },
        { name: 'Jest', level: 75 },
        { name: 'Figma', level: 70 },
      ]
    }
  ]

  return (
    <section 
      id="skills" 
      ref={ref}
      className="section-padding bg-gray-50 dark:bg-gray-900"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Habilidades</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: groupIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                {skillGroup.category}
              </h3>
              
              <div className="space-y-4">
                {skillGroup.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: (groupIndex * 0.1) + (techIndex * 0.05) }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-100 font-medium">{tech.name}</span>
                      <span className="text-primary-600 font-semibold">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${tech.level}%` } : {}}
                        transition={{ duration: 1, delay: (groupIndex * 0.1) + (techIndex * 0.05) + 0.3 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            Outras Competências
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Responsive Design',
              'Performance Optimization',
              'Accessibility',
              'APIs',
              'Testing',
  
              
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.05) }}
                className="bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-md border border-gray-100 dark:border-gray-700"
              >
                <span className="text-gray-700 dark:text-gray-100 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 