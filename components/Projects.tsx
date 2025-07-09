import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, FileCode2, FileType2, Feather, Zap, Code2, MoveRight, Star } from 'lucide-react';

const techIcons = {
  'HTML5': <FileCode2 size={16} className="inline-block mr-1" />, 
  'CSS3': <Feather size={16} className="inline-block mr-1" />, 
  'JavaScript (ES6+)': <Zap size={16} className="inline-block mr-1" />, 
  'React': <Star size={16} className="inline-block mr-1" />, 
  'Next.js': <MoveRight size={16} className="inline-block mr-1" />, 
  'TypeScript': <FileType2 size={16} className="inline-block mr-1" />, 
  'Tailwind CSS': <Feather size={16} className="inline-block mr-1" />, 
  'Framer Motion': <Zap size={16} className="inline-block mr-1" />
} as const;

const projects = [
  {
    name: 'GameboXD',
    description: 'Aplicação web para entusiastas de videogames: descubra, organize e avalie jogos favoritos, consumindo dados em tempo real da API RAWG.io. Permite criar biblioteca pessoal, marcar status, escrever reviews e dar notas. Desenvolvido com HTML5, CSS3 e JavaScript puro, com design responsivo.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)'],
    github: 'https://github.com/erikcandev/GameBoxd',
  },
  {
    name: 'Bagg.io',
    description: 'Sistema web para gestão patrimonial, com controle de bens, conferências, filiais e usuários. Suporta importação/exportação de planilhas, dashboards, permissões e layout responsivo. Interface intuitiva e recursos completos para o ciclo de vida dos ativos.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/erikcandev/Bagg.io-',
  },
  {
    name: 'Portfólio',
    description: 'Projeto pessoal focado em responsividade, performance e experiência do usuário. Seções bem estruturadas, navegação fluida, grid de projetos, formulário de contato e layout adaptável. Inspirado no design de Rhuan Bello.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/erikcandev/portfolio',
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-white drop-shadow-lg">Projetos</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={32}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            900: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="mb-16"
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={project.name}>
              <motion.div
                className="relative bg-gradient-to-br from-gray-900/90 to-primary-900/60 dark:from-gray-800/90 dark:to-primary-900/60 rounded-2xl shadow-lg p-6 flex flex-col items-center cursor-pointer transition-colors duration-200 border-2 border-primary-700/30 hover:border-primary-500 group min-h-[370px] z-10"
                style={{ overflow: 'visible' }}
                onClick={() => setSelected(idx)}
              >
                <div className="overflow-hidden rounded-xl w-40 h-40 mb-4 border-2 border-primary-400 group-hover:shadow-md group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-xl font-bold text-primary-400 dark:text-primary-300 text-center mb-2 drop-shadow-sm group-hover:text-primary-500 transition-colors duration-200">
                  {project.name}
                </div>
                <div className="flex gap-2 flex-wrap justify-center mb-2">
                  {project.technologies && project.technologies.map((tech, i) => (
                    <span key={i} className="flex items-center text-xs font-semibold px-2 py-1 rounded-full bg-primary-700/70 text-primary-100 shadow-sm border border-primary-500/30">
                      {(techIcons as Record<string, JSX.Element>)[tech] || <Code2 size={14} className="mr-1" />} {tech}
                    </span>
                  ))}
                </div>
                <div className="text-gray-300 text-sm text-center line-clamp-4 mt-2 mb-4">
                  {project.description}
                </div>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex justify-center px-4 py-2 bg-primary-500 text-white rounded-lg font-semibold shadow hover:bg-primary-600 transition-all duration-200 mt-auto"
                  whileHover={{ scale: 1.04 }}
                  onClick={e => e.stopPropagation()}
                >
                  <Github size={18} className="mr-2" /> Ver no GitHub
                </motion.a>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Modal */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 rounded-3xl shadow-2xl max-w-2xl w-full p-0 relative flex flex-col items-center border-2 border-primary-700 overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                onClick={e => e.stopPropagation()}
              >
                <div className="relative w-full h-72 overflow-hidden">
                  <img
                    src={projects[selected].image}
                    alt={projects[selected].name}
                    className="object-cover w-full h-full scale-105 blur-sm opacity-60 absolute top-0 left-0 z-0"
                  />
                  <img
                    src={projects[selected].image}
                    alt={projects[selected].name}
                    className="object-cover w-full h-full z-10 relative rounded-b-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent z-20" />
                </div>
                <div className="w-full flex flex-col items-start px-8 py-6 z-30 relative">
                  <div className="text-3xl font-extrabold text-primary-400 mb-3 drop-shadow-lg">{projects[selected].name}</div>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {projects[selected].technologies && projects[selected].technologies.map((tech, i) => (
                      <span key={i} className="flex items-center text-xs font-semibold px-2 py-1 rounded-full bg-primary-700/80 text-primary-100 shadow-sm backdrop-blur border border-primary-500/40">
                        {(techIcons as Record<string, JSX.Element>)[tech] || <Code2 size={14} className="mr-1" />} {tech}
                      </span>
                    ))}
                  </div>
                  <div className="text-gray-200 text-base mb-6 leading-relaxed">{projects[selected].description}</div>
                  <motion.a
                    href={projects[selected].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary-500 to-blue-500 text-white rounded-lg font-semibold shadow hover:from-primary-600 hover:to-blue-600 transition-all duration-200 text-base"
                    whileHover={{ scale: 1.07 }}
                  >
                    <Github size={20} /> Ver no GitHub
                  </motion.a>
                </div>
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-primary-400 text-3xl font-bold z-50 bg-black/30 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200"
                  onClick={() => setSelected(null)}
                  aria-label="Fechar"
                >
                  ×
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 