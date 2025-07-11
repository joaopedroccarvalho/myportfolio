'use client';
import { motion } from 'framer-motion';
import { FaJs, FaNode, FaReact, FaDatabase, FaCloud } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiPython, SiSharp, SiPostgresql, SiMongodb, SiHtml5, SiCss3 } from 'react-icons/si';

const skills = [
  // Front-end
  { name: 'HTML & CSS', icon: <div className="flex gap-3"><SiHtml5 className="w-10 h-10"/><SiCss3 className="w-10 h-10"/></div> },
  { name: 'JavaScript', icon: <FaJs className="w-10 h-10" /> },
  { name: 'TypeScript', icon: <SiTypescript className="w-10 h-10" /> },
  { name: 'ReactJS', icon: <FaReact className="w-10 h-10" /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss className="w-10 h-10" /> },
  { name: 'NextJS', icon: <SiNextdotjs className="w-10 h-10" /> },
  
  // Back-end
  { name: 'NodeJS', icon: <FaNode className="w-10 h-10" /> },
  { name: 'Python', icon: <SiPython className="w-10 h-10" /> },
  { name: 'C#', icon: <SiSharp className="w-10 h-10" /> },
  
  // Bancos de Dados
  { name: 'Banco Relacional', icon: <SiPostgresql className="w-10 h-10" /> },
  { name: 'Banco Não-Relacional', icon: <SiMongodb className="w-10 h-10" /> },
  
  // Cloud
  { name: 'Cloud Computing', icon: <FaCloud className="w-10 h-10" /> }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Minhas <span className="text-blue-600 dark:text-purple-400">Habilidades</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tecnologias que domino e utilizo para criar soluções completas.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-30px" }}
              whileHover={{ 
                y: -5,
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 flex flex-col items-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                className="text-blue-600 dark:text-purple-400 mb-6"
              >
                {skill.icon}
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="text-xl font-semibold text-gray-800 dark:text-white text-center"
              >
                {skill.name}
              </motion.h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;