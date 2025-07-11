/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/providers/**/*.{js,ts,jsx,tsx}", // Se usar providers
  ],
  darkMode: 'class', // Isso é ESSENCIAL para seu toggle de tema
  theme: {
    extend: {
      colors: {
        // Adicione suas cores personalizadas (opcional)
        primary: {
          DEFAULT: '#0d6efd',
          dark: '#0b5ed7',
        },
      },
      animation: {
        // Adicione as animações usadas no seu projeto
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-in',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}