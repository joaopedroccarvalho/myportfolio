'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiBook, FiAward, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const educationData = [
  {
    id: 1,
    degree: "Graduação em Análise e Desenvolvimento de Sistemas",
    institution: "Pontifícia Universidade Católica de Minas Gerais (PUC-MG)",
    period: "2023 - 2025",
    description: "Formação tecnológica voltada para o desenvolvimento de software, com foco em projetos práticos, sistemas distribuídos e gestão de processos de TI. Ênfase em programação, banco de dados, engenharia de software e aplicações web e mobile.",
    courses: [
      "Algoritmos e Programação",
      "Programação Orientada a Objetos",
      "Banco de Dados Relacionais e NoSQL",
      "Engenharia de Software",
      "Desenvolvimento Web e Mobile",
      "Redes de Computadores",
      "Sistemas Operacionais",
      "Computação em Nuvem",
      "Interação Humano-Computador",
      "Gestão de Projetos de Software"
    ]

    // achievements: [
    //   "Melhor trabalho no Simpósio Brasileiro de IA (2023)",
    //   "Bolsa de pesquisa CAPES"
    // ]
  },
  {
    id: 2,
    degree: "Formação Online - Fullstack",
    institution: "B7Web",
    period: "2022 - 2025",
    description: "Formação completa em desenvolvimento web fullstack, com foco em tecnologias modernas para criação de aplicações front-end, back-end e mobile. Ênfase em práticas de mercado, projetos reais e integração entre tecnologias JavaScript e TypeScript.",
    courses: [
      "HTML5 e CSS3",
      "JavaScript Moderno",
      "TypeScript",
      "ReactJS",
      "Next.js",
      "Node.js",
      "APIs RESTful",
      "MySQL e Sequelize",
      "MongoDB",
      "Autenticação com JWT",
      "Git e GitHub",
      "Consumo de APIs",
      "React Native (apps mobile)"
    ]
  },
  {
    id: 3,
    degree: "Formação Power BI Para Business Intelligence e Data Science",
    institution: "Data Science Academy (DSA)",
    period: "2024 - 2025",
    description: "Formação voltada para análise de dados com foco em Business Intelligence, utilizando o Power BI para criação de dashboards interativos, modelagem de dados, visualização e tomada de decisões orientadas por dados. Inclui fundamentos de estatística e integração com diversas fontes de dados.",
    courses: [
      "Fundamentos de Business Intelligence",
      "Modelagem Dimensional e ETL",
      "Power BI Desktop",
      "Power Query e M Language",
      "DAX (Data Analysis Expressions)",
      "Criação de Dashboards Interativos",
      "Visualização de Dados com Power BI",
      "Integração com Excel e outras fontes",
      "Publicação e Compartilhamento no Power BI Service",
      "Conceitos básicos de Data Science e Análise Preditiva"
    ]
  }
];

const EducationSection = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section id="education" className="py-24 px-4 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Jornada <span className="text-blue-600 dark:text-purple-400">Acadêmica</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Minha trajetória de aprendizado e conquistas no mundo da tecnologia
          </p>
        </motion.div>

        <div className="relative">
          {/* Linha do tempo vertical */}
          <div className="absolute left-6 md:left-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-600 dark:from-blue-600 dark:to-purple-800 transform -translate-x-1/2"></div>

          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`mb-12 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start`}
            >
              {/* Ponto na linha do tempo */}
              <div className="hidden md:flex md:w-1/2 justify-center relative">
                {index % 2 === 0 ? (
                  <div className="absolute right-0 top-4 w-4 h-4 rounded-full bg-blue-600 dark:bg-purple-500 border-4 border-white dark:border-gray-800 transform translate-x-1/2"></div>
                ) : (
                  <div className="absolute left-0 top-4 w-4 h-4 rounded-full bg-blue-600 dark:bg-purple-500 border-4 border-white dark:border-gray-800 transform -translate-x-1/2"></div>
                )}
              </div>

              {/* Conteúdo */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden cursor-pointer"
                  onClick={() => toggleExpand(item.id)}
                >
                  <div className="p-8">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{item.degree}</h3>
                        <p className="text-lg text-blue-600 dark:text-purple-400 mb-1">{item.institution}</p>
                        <p className="text-gray-500 dark:text-gray-400">{item.period}</p>
                      </div>
                      <div className="text-blue-600 dark:text-purple-400">
                        {expandedItem === item.id ? (
                          <FiChevronUp className="w-6 h-6" />
                        ) : (
                          <FiChevronDown className="w-6 h-6" />
                        )}
                      </div>
                    </div>

                    <AnimatePresence>
                      {expandedItem === item.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6"
                        >
                          <p className="text-gray-600 dark:text-gray-300 mb-6">{item.description}</p>

                          <div className="mb-6">
                            <div className="flex items-center gap-2 mb-3">
                              <FiBook className="text-blue-500 dark:text-purple-400" />
                              <h4 className="font-semibold text-gray-800 dark:text-gray-200">Disciplinas Relevantes:</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {item.courses.map((course, i) => (
                                <span 
                                  key={i}
                                  className="text-sm bg-blue-50 dark:bg-gray-700 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full"
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            {/* <div className="flex items-center gap-2 mb-3">
                              <FiAward className="text-blue-500 dark:text-purple-400" />
                              <h4 className="font-semibold text-gray-800 dark:text-gray-200">Conquistas:</h4>
                            </div> */}
                            {/* <ul className="space-y-2">
                              {item.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-blue-500 dark:text-purple-400 mr-2">•</span>
                                  <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                                </li>
                              ))}
                            </ul> */}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}

          {/* Elemento decorativo no final da linha do tempo */}
          <div className="absolute left-6 md:left-1/2 bottom-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-800 transform -translate-x-1/2 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-white dark:bg-gray-800"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;