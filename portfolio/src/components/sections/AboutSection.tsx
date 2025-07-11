'use client';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  
  // Estados para controle da digitação
  const [firstPart, setFirstPart] = useState('');
  const [secondPart, setSecondPart] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingSecondPart, setIsTypingSecondPart] = useState(false);

  const firstText = "Olá, eu sou o ";
  const secondText = "João Pedro";

  // Efeito de digitação em duas partes
  useEffect(() => {
    // Primeira parte - texto branco
    let i = 0;
    const firstInterval = setInterval(() => {
      if (i < firstText.length) {
        setFirstPart(firstText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(firstInterval);
        
        // Pausa de 2 segundos antes de começar a segunda parte
        setTimeout(() => {
          setIsTypingSecondPart(true);
          let j = 0;
          const secondInterval = setInterval(() => {
            if (j < secondText.length) {
              setSecondPart(secondText.substring(0, j + 1));
              j++;
            } else {
              clearInterval(secondInterval);
              // Cursor piscando no final
              const cursorInterval = setInterval(() => {
                setShowCursor(prev => !prev);
              }, 500);
              return () => clearInterval(cursorInterval);
            }
          }, 150); // Velocidade da segunda parte
        }, 2000); // Delay de 2 segundos
      }
    }, 100); // Velocidade da primeira parte

    return () => clearInterval(firstInterval);
  }, []);

  // Função para download do CV
  const downloadCV = () => {
    const pdfUrl = '/CV_JP.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'CV_JP';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const createObserver = (ref: React.RefObject<HTMLElement>, animationClass: string) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add(animationClass);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
        observers.push(observer);
      }

      return observer;
    };

    createObserver(containerRef, 'animate-fadeInUp');
    createObserver(imageRef, 'animate-fadeIn');
    createObserver(contentRef, 'animate-fadeInLeft');
    createObserver(socialRef, 'animate-fadeInUp');

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div 
          ref={containerRef}
          className="flex flex-col md:flex-row items-center gap-12 opacity-0"
        >
          <div className="md:w-1/2">
            <div 
              ref={imageRef}
              className="relative w-64 h-64 md:w-80 md:h-80 mx-auto opacity-0"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-md animate-pulse"></div>
              <img
                src="/jp.jpeg"
                alt="João Pedro"
                className="relative z-10 w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div 
              ref={contentRef}
              className="opacity-0 translate-x-[-20px]"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
                <span className="text-white dark:text-white">
                  {firstPart}
                </span>
                {isTypingSecondPart && (
                  <span className="text-purple-600 dark:text-purple-400">
                    {secondPart}
                    <span className={`inline-block w-1 h-8 bg-purple-600 dark:bg-purple-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
                  </span>
                )}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Desenvolvedor Full Stack em formação, com foco em transformar conhecimento acadêmico em soluções tecnológicas reais. Familiaridade com ReactJS, Node.js, .NET e bancos de dados relacionais e NoSQL.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Apaixonado por desenvolvimento web, análise de dados e arquitetura de sistemas, busco contribuir com projetos inovadores, enquanto aprofundo minhas habilidades técnicas e evoluo profissionalmente no universo da tecnologia.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadCV}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 dark:bg-purple-600 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-purple-700 transition-colors mb-8"
              >
                <FiDownload className="w-5 h-5" />
                Download CV
              </motion.button>
            </div>
            
            <div 
              ref={socialRef}
              className="flex space-x-4 opacity-0 translate-y-[20px]"
            >
              <a href="https://github.com/joaopedroccarvalho" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <FiGithub className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a href="https://www.linkedin.com/in/joaopedroccarvalho/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <FiLinkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;