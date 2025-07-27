import { useEffect } from 'react';

const ScrollReveal = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; // Punto en el que se activa la animación
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Ejecutar una vez al montar para elementos visibles inicialmente
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
};

export default ScrollReveal;