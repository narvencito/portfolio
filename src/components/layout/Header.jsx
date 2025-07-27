import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (sectionId) => {
    setIsMenuOpen(false);
    setActiveSection(sectionId);
  };

  return (
    <header>
      <nav>
        <a href="#home" className="logo">EN</a>
        <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="hamburger"></span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a
              href="#home"
              className={activeSection === 'home' ? 'active' : ''}
              onClick={() => handleLinkClick('home')}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={() => handleLinkClick('about')}
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={() => handleLinkClick('skills')}
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={() => handleLinkClick('projects')}
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={() => handleLinkClick('contact')}
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;