import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  
  const headerOpacity = useTransform(scrollY, [0, 200], [0, 1]);
  const headerY = useTransform(scrollY, [0, 200], [-100, 0]);

  const handleMenuClick = (section) => (e) => {
    e.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: section === 'home' ? 0 : offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY;

      // Si estamos en la parte superior, activar "home"
      if (scrollPosition < window.innerHeight / 3) {
        setActiveSection('home');
        return;
      }

      // Encontrar la sección más cercana al scroll actual
      let closestSection = null;
      let closestDistance = Infinity;

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const distance = Math.abs(scrollPosition - sectionTop);

        if (
          scrollPosition >= sectionTop && 
          scrollPosition < sectionBottom && 
          distance < closestDistance
        ) {
          closestSection = section.getAttribute('id');
          closestDistance = distance;
        }
      });

      if (closestSection) {
        setActiveSection(closestSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llamar inicialmente para establecer la sección activa
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
              onClick={handleMenuClick('home')}
            >
              Inicio
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={handleMenuClick('about')}
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={handleMenuClick('skills')}
            >
              Habilidades
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={handleMenuClick('projects')}
            >
              Proyectos
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={handleMenuClick('contact')}
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