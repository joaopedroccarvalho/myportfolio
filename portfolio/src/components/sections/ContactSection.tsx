'use client';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
  const socialIcons = [
    { icon: <FaGithub />, label: 'GitHub', url: 'https://github.com/joaopedroccarvalho' },
    { icon: <FaLinkedin />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/joaopedroccarvalho/' },
    { icon: <FaInstagram />, label: 'Instagram', url: 'https://www.instagram.com/jpedroccarvalho/' }
  ];

  const contactItems = [
    {
      icon: <FiMail className="text-2xl" />,
      title: "Email",
      content: "joaopeedro1012@gmail.com",
      link: "joaopeedro1012@gmail.com"
    },
    {
      icon: <FiMapPin className="text-2xl" />,
      title: "Localização",
      content: "Brasil",
      link: null
    },
    {
      icon: <FiPhone className="text-2xl" />,
      title: "Telefone",
      content: "+55 33 98894-1793",
      link: "tel:+5533988941793"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4"
          >
            Vamos <span className="text-blue-600 dark:text-purple-400">Conversar</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Entre em contato através dos canais abaixo
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-blue-100 dark:bg-purple-900/30 p-4 rounded-full mb-6 text-blue-600 dark:text-purple-400"
              >
                {item.icon}
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {item.title}
              </h3>
              
              {item.link ? (
                <a 
                  href={item.link} 
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-400 transition-colors text-lg"
                >
                  {item.content}
                </a>
              ) : (
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  {item.content}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            Me encontre nas redes sociais
          </h4>
          
          <div className="flex justify-center gap-6">
            {socialIcons.map((social, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-400 transition-all"
                aria-label={social.label}
              >
                <span className="text-2xl">{social.icon}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;