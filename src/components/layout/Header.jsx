import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  
  const headerOpacity = useTransform(scrollY, [0, 200], [0, 1]);
  const headerY = useTransform(scrollY, [0, 200], [-100, 0]);

  const handleHomeClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setActiveSection('home');
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      // Si estamos cerca del inicio, activar la sección "home"
      if (scrollPosition < 300) {
        setActiveSection('home');
        return;
      }

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <motion.header
      className="header"
      style={{
        opacity: headerOpacity,
        y: headerY
      }}
    >
      <nav>
        <div className="logo">
          <span className="logo-text" style={{ fontSize: '1.8rem', fontWeight: '700' }}>
            <span style={{ color: '#00eeff' }}>E</span>
            <span style={{ color: '#ff00ff' }}>N</span>
          </span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a 
              href="#home" 
              className={activeSection === 'home' ? 'active' : ''}
              onClick={handleHomeClick}
            >
              Inicio
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''}
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className={activeSection === 'skills' ? 'active' : ''}
            >
              Habilidades
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={activeSection === 'projects' ? 'active' : ''}
            >
              Proyectos
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contacto
            </a>
          </li>
        </ul>
        <div 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="hamburger"></div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;