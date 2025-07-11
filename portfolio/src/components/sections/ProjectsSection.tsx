'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { FiGithub, FiExternalLink, FiX, FiPlay, FiPause, FiVolume2, FiVolumeX } from 'react-icons/fi';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiSharp } from 'react-icons/si';

const projects = [
  {
    title: "SaudávelMente",
    description: "Plataforma digital de saúde mental que conecta pacientes a profissionais como psicólogos, psiquiatras e terapeutas. Oferece agendamento de consultas, fórum interativo e acesso a conteúdos educativos, promovendo bem-estar emocional na era digital.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    icons: [FaHtml5, FaCss3Alt, FaJs, FaBootstrap],
    images: [
      "/saudavelmente/saudavelmenteimage.png",
      "/saudavelmente/saudavelmente2.png"
    ],
    video: "saudavelmente/saudavelmente.mp4",
    github: "https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t9-saudavelmente",
    features: [
      "Busca por profissionais de diferentes especialidades da saúde mental",
      "Visualização de perfil com histórico de consultas",
      "Perfil detalhado dos profissionais em atendimento",
      "Fórum interativo com tópicos e busca por palavras-chave",
      "Área do profissional com lista de pacientes e dados relevantes",
      "Interface intuitiva e foco em acessibilidade emocional"
    ]
  },
  {
    title: "RepoInsight",
    description: "Ferramenta de análise de contribuições em repositórios GitHub, voltada para professores, Scrum Masters e líderes técnicos. Oferece métricas quantitativas de commits e pull requests, facilitando a avaliação de desempenho, identificação de padrões de colaboração e reconhecimento de contribuintes em equipes de desenvolvimento.",
    tags: ["C#", "HTML", "JavaScript", "CSS", "Banco de Dados Relacional"],
    icons: [SiSharp, FaHtml5, FaJs, FaCss3Alt, FaDatabase],
    images: [
      "/repoinsight/repoinsightimage.png"
    ],
    video: "repoinsight/repoinsightvideo.mp4",
    github: "https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e2-proj-int-t6-repoinsight",
    features: [
      "Integração com a API do GitHub para dados em tempo real",
      "Visualização organizada de commits e pull requests",
      "Filtro de métricas por contribuinte e intervalo de datas",
      "Gerenciamento de usuários e repositórios monitorados",
      "Busca por commits em repositórios específicos",
      "Listagem e destaque dos principais contribuintes",
      "Painel de métricas personalizável por projeto"
    ]
  },
  {
    title: "PontIn",
    description: "Plataforma intuitiva para gestão de jornada de trabalho, ideal para empresas com equipes presenciais ou remotas. Permite o registro de ponto, emissão de relatórios detalhados e cálculo automático de horas extras, promovendo eficiência, transparência e praticidade no controle de horas trabalhadas.",
    tags: ["C#", "JavaScript", "React Native", "Banco de Dados Relacional"],
    icons: [SiSharp, FaJs, FaReact, FaDatabase],
    images: [
      "/pontin/pontinimage.png",
      "/healthtrack/healthtrack2.png"
    ],
    video: "/pontin/pontinvideo.mp4",
    github: "https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-2-e3-proj-mov-t2-pont-in",
    features: [
      "Registro de início, pausas e término da jornada de trabalho",
      "Emissão de relatórios mensais por profissionais de RH",
      "Edição de registros de ponto por usuários e RH",
      "Cálculo automático de horas trabalhadas e horas extras",
      "Visualização de horas totais e diárias por colaborador",
      "Interface prática e acessível para diferentes perfis de usuário"
    ]
  },
  {
    title: "Bico",
    description: "Marketplace de serviços que conecta clientes a profissionais autônomos de diversas áreas. A plataforma oferece uma experiência segura e eficiente de contratação, com avaliações públicas, agendamentos, intermediação de pagamentos e perfis completos dos prestadores. Ideal para quem busca praticidade e confiabilidade na contratação de serviços.",
    tags: ["C#", "JavaScript", "TypeScript", "CSS", "ReactJS", "React Native", "Banco de Dados não Relacional"],
    icons: [SiSharp, FaJs, SiTypescript, FaCss3Alt, FaReact, FaReact, FaDatabase],
    images: [
      "/bico/bicoimage.jpeg",
      "/healthtrack/healthtrack2.png"
    ],
    video: "/bico/bicovideo.mp4",
    github: "https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e4-proj-dad-t2-projeto-bico",
    features: [
      "Cadastro de serviços com título, descrição, categoria, preço e localização",
      "Perfis detalhados de prestadores com fotos, vídeos e avaliações",
      "Busca avançada por categoria, localização e outros filtros",
      "Sistema de mensagens e agendamento de serviços",
      "Avaliações públicas com comentários e nota média no perfil",
      "Notificações para prestadores sobre novos contatos ou solicitações"
    ]
  },
  {
    title: "Quiz Real Madrid",
    description: "Quiz interativo sobre o Real Madrid, desenvolvido em JavaScript, que desafia os fãs do clube com perguntas de múltipla escolha e tempo limitado para resposta. A aplicação oferece uma experiência envolvente e divertida, ideal para testar os conhecimentos sobre a história, títulos, jogadores e curiosidades do maior campeão europeu. Com pontuação em tempo real e design responsivo, o quiz é perfeito para torcedores e entusiastas do futebol.",
    tags: ["HTML", "CSS", "JavaScript"],
    icons: [FaHtml5, FaJs, FaCss3Alt],
    images: [
      "/realmadrid/realmadridimage.svg"
    ],
    video: "/realmadrid/realmadridvideo.mp4",
    github: "https://github.com/joaopedroccarvalho/quizRM/tree/main/quiz",
    features: [
      "Perguntas de múltipla escolha sobre o Real Madrid: títulos, jogadores, história e curiosidades",
      "Timer regressivo para cada pergunta, incentivando agilidade nas respostas",
      "Pontuação em tempo real com feedback visual imediato após cada resposta",
      "Layout responsivo, acessível em dispositivos móveis e desktops",
      "Transições animadas entre as perguntas para maior interatividade",
      "Tela final com resultado e mensagem personalizada de acordo com o desempenho do usuário"
    ]
  },
  {
    title: "Finanças Pessoais",
    description: "Aplicação web de controle de finanças pessoais desenvolvida com React e TypeScript, voltada para o gerenciamento simples e eficiente do orçamento mensal. O sistema permite registrar ganhos e despesas, visualizar o saldo disponível em tempo real, aplicar filtros por categoria e acompanhar os gastos por meio de gráficos intuitivos. Ideal para usuários que buscam organização financeira com praticidade e clareza visual.",
    tags: ["HTML", "JavaScript", "TypeScript", "CSS", "ReactJS", "Chakra UI", "Node.js"],
    icons: [FaHtml5, FaJs, SiTypescript, FaCss3Alt, FaReact],
    images: [
      "/financas/financasimage.jpg",
    ],
    video: "/financas/financasvideo.mp4",
    github: "https://github.com/joaopedroccarvalho/personalFinance/tree/main/src",
    features: [
      "Registro de receitas e despesas com descrição, valor, data e categoria",
      "Cálculo automático do saldo mensal com base nas transações registradas",
      "Filtro por tipo de transação (ganhos ou despesas) e categorias específicas",
      "Gráfico dinâmico que representa visualmente os gastos do mês",
      "Interface responsiva desenvolvida com React, garantindo boa experiência em qualquer dispositivo",
      "Utilização de TypeScript para maior segurança e organização do código",
      "Atualização em tempo real das informações ao adicionar, editar ou excluir transações"
    ]
  },
  {
    title: "Search Weather",
    description: "Aplicação de previsão do tempo que fornece dados climáticos em tempo real para cidades em todo o mundo. A plataforma oferece uma experiência intuitiva e visualmente atraente para consultar condições meteorológicas detalhadas, com informações precisas sobre temperatura, umidade, vento e outros parâmetros essenciais.",
    tags: ["JavaScript", "ReactJS", "Tailwind CSS", "API"],
    icons: [FaJs, FaReact, FaCss3Alt],
    images: [
      "/weather/weatherimage.jpg",
    ],
    video: "/weather/weathervideo.mp4",
    github: "https://github.com/joaopedroccarvalho/weatherSearch/tree/main/weather-app-pro",
    "features": [
    "Interface de usuário moderna e profissional com design system consistente",
    "Alternância entre modo claro e escuro para melhor experiência visual",
    "Funcionalidade de busca de dados climáticos por cidade",
    "Exibição detalhada das condições climáticas atuais (temperatura, sensação térmica, umidade, vento, pressão, visibilidade, temperaturas mínima e máxima)",
    "Tratamento de erros com mensagens amigáveis e opção de tentar novamente",
    "Indicadores visuais de carregamento para feedback ao usuário",
    "Otimização da busca com debounce para requisições eficientes",
    "Botões de acesso rápido para cidades populares",
    "Design responsivo para compatibilidade com diversos dispositivos"
  ]
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const openModal = (index: number) => {
    setSelectedProject(index);
    setIsPlaying(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsPlaying(false);
    document.body.style.overflow = 'auto';
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

 const nextSlide = () => {
  setCurrentSlide((prev) => {
    // Verifica se chegou ao final e volta para o início
    if (prev >= projects.length - 2) return 0;
    return prev + 1; // Muda apenas 1 slide por vez para uma transição mais suave
  });
};

const prevSlide = () => {
  setCurrentSlide((prev) => {
    // Verifica se está no início e vai para o final
    if (prev <= 0) return projects.length - 2;
    return prev - 1; // Muda apenas 1 slide por vez
  });
};

  useEffect(() => {
    if (selectedProject !== null && videoRef.current) {
      videoRef.current.currentTime = 0;
      if (isPlaying) {
        videoRef.current.play();
      }
    }
  }, [selectedProject, isPlaying]);

  useEffect(() => {
  const interval = setInterval(() => {
    nextSlide();
  }, 5000); // Muda de slide a cada 5 segundos

  return () => clearInterval(interval); // Limpa o intervalo quando o componente desmontar
}, [currentSlide]);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Meus <span className="text-blue-600 dark:text-purple-400">Projetos</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Soluções completas que desenvolvi para resolver problemas reais com tecnologia inovadora.
          </p>
        </motion.div>

        <div className="relative">
          <div 
            ref={carouselRef}
            className="overflow-hidden"
          >
            <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentSlide * 50}%)` }}>
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => openModal(index)}
                  className="w-full sm:w-1/2 px-4 mb-8 flex-shrink-0 cursor-pointer"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden group relative h-[400px]">
                    <div className="relative h-3/4 w-full">
                      <motion.img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover brightness-90 group-hover:brightness-75 transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                          <FiPlay className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="h-1/4 p-6 flex flex-col items-center justify-center">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-3">{project.title}</h3>
                      <div className="flex gap-4">
                        {project.icons.map((Icon, idx) => (
                          <Icon key={idx} className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Modal/Popup Ampliado com Vídeo */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-96">
                  <div className="relative h-full w-full bg-black">
                    <video
                      ref={videoRef}
                      src={projects[selectedProject].video}
                      className="w-full h-full object-contain"
                      loop
                      muted={isMuted}
                      onClick={togglePlay}
                    />
                    
                    {/* Controles do vídeo */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <button 
                            onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                            className="text-white hover:text-blue-400 transition-colors"
                          >
                            {isPlaying ? (
                              <FiPause className="w-6 h-6" />
                            ) : (
                              <FiPlay className="w-6 h-6" />
                            )}
                          </button>
                          <button 
                            onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                            className="text-white hover:text-blue-400 transition-colors"
                          >
                            {isMuted ? (
                              <FiVolumeX className="w-6 h-6" />
                            ) : (
                              <FiVolume2 className="w-6 h-6" />
                            )}
                          </button>
                        </div>
                        
                        <div className="text-white text-sm">
                          {projects[selectedProject].title} - Demo
                        </div>
                      </div>
                    </div>
                    
                    {/* Botão de tela cheia */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (videoRef.current) {
                          if (videoRef.current.requestFullscreen) {
                            videoRef.current.requestFullscreen();
                          }
                        }
                      }}
                      className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="p-6 overflow-y-auto">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {projects[selectedProject].title}
                    </h3>
                    <button 
                      onClick={closeModal}
                      className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition p-1"
                    >
                      <FiX className="w-6 h-6" />
                    </button>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {projects[selectedProject].description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                      Principais Funcionalidades:
                    </h4>
                    <ul className="space-y-2">
                      {projects[selectedProject].features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-500 dark:text-purple-400 mr-2">•</span>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[selectedProject].tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-blue-100 dark:bg-purple-900/40 text-blue-800 dark:text-purple-300 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={projects[selectedProject].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition"
                    >
                      <FiGithub className="w-5 h-5" />
                      Ver Código
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;