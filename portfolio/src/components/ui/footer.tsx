'use client';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="w-5 h-5" />,
      url: 'https://github.com/joaopedroccarvalho',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/joaopedroccarvalho/',
    }
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center animate-fade-in [animation-fill-mode:both]">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              João Pedro
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Desenvolvedor Full Stack
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-400 transition-colors hover:-translate-y-1"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a
                href="#about"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-purple-400 transition-colors text-sm"
              >
                Sobre Mim
              </a>
              <a
                href="#skills"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-purple-400 transition-colors text-sm"
              >
                Habilidades
              </a>
              <a
                href="#projects"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-purple-400 transition-colors text-sm"
              >
                Projetos
              </a>
              <a
                href="#contact"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-purple-400 transition-colors text-sm"
              >
                Contato
              </a>
            </div>
          </div>
        </div>

        {/* <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in [animation-fill-mode:both] [animation-delay:200ms]">
          <p className="text-gray-500 dark:text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Lucas Oliveira. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Feito com ❤️ usando React, TypeScript e TailwindCSS
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;