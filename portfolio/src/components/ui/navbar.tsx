'use client'; // Necessário para interatividade

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from '@/components/ui/themeToggle';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
    document.documentElement.classList.toggle('dark', newMode);
  };

  const navItems = [
    { name: 'Sobre', href: '/#about' },
    { name: 'Habilidades', href: '/#skills' },
    { name: 'Projetos', href: '/#projects' },
    { name: 'Contato', href: '/#contact' },
  ];

  return (
    <header className="fixed w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Portfólio
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${pathname === item.href ? 'text-blue-600 dark:text-purple-400' : 'text-gray-700 dark:text-gray-300'} hover:text-blue-600 dark:hover:text-purple-400 transition-colors font-medium`}
            >
              {item.name}
            </Link>
          ))}
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${pathname === item.href ? 'text-blue-600 dark:text-purple-400' : 'text-gray-700 dark:text-gray-300'} py-2 hover:text-blue-600 dark:hover:text-purple-400 transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button onClick={toggleTheme} className="py-2 flex items-center gap-2">
              {darkMode ? (
                <>
                  <FiSun className="w-5 h-5" /> Modo Claro
                </>
              ) : (
                <>
                  <FiMoon className="w-5 h-5" /> Modo Escuro
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}