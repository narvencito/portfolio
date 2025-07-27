import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/tu-usuario', icon: '🐱' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/tu-usuario', icon: '🔗' },
    { name: 'Twitter', url: 'https://twitter.com/tu-usuario', icon: '🐦' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.div 
          className="social-links"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon} {link.name}
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="copyright"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          © {currentYear} Emerson Navarro. Todos los derechos reservados.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 