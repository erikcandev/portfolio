'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react'

interface ContactProps {
  setActiveSection: (section: string) => void
}

export default function Contact({ setActiveSection }: ContactProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // if (!mounted) return null;

  const contactInfo = [
    {
      icon: Mail,
      label: 'E-mail',
      value: 'candidoerik93@gmail.com',
      href: 'mailto:candidoerik93@gmail.com'
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '(49) 99202-0704',
      href: 'https://api.whatsapp.com/send?phone=5549992020704&text=Ol%C3%A1!%20Tenho%20interesse%20em%20um%20or%C3%A7amento.%20Podemos%20conversar%3F'
    },
    {
      icon: Linkedin,
      label: 'Linkedin',
      value: 'erik-domingos-candido',
      href: 'https://www.linkedin.com/in/erik-domingos-candido-646628366/'
    },
    {
      icon: Github,
      label: 'Github',
      value: 'erikcandev',
      href: 'https://github.com/erikcandev'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Lages - SC - Brasil',
      href: '#'
    }
  ]

  return (
    <section 
      id="contact" 
      ref={ref}
      className="section-padding bg-gray-50 dark:bg-gray-900"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={mounted && inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contatos</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={mounted && inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Vamos conversar?
            </h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-100 mb-8 leading-relaxed">
              Estou sempre aberto a novas oportunidades e projetos interessantes. 
              Se você tem uma ideia ou projeto em mente, não hesite em entrar em contato!
            </p>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.label === 'E-mail' || contact.label === 'Telefone' ? undefined : '_blank'}
                  rel={contact.label === 'E-mail' || contact.label === 'Telefone' ? undefined : 'noopener noreferrer'}
                  initial={{ opacity: 0, x: -20 }}
                  animate={mounted && inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary-100 dark:bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-primary-200 group-hover:dark:bg-gray-600 transition-colors duration-300">
                    <contact.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-200 font-medium">
                      {contact.label}
                    </div>
                    <div className="text-gray-900 dark:text-white font-semibold">
                      {contact.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={mounted && inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Envie uma mensagem
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="seu-email@exemplo.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Assunto da mensagem"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Conte-me sobre seu projeto ou oportunidade..."
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="w-full btn-primary py-4 text-lg font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Enviar Mensagem
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 