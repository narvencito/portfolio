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