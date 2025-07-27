import { useEffect } from 'react';
import styles from '../../styles/components/BackgroundAnimation.module.css';

const BackgroundAnimation = () => {
  useEffect(() => {
    // Crear partículas flotantes
    const createParticles = () => {
      const bgAnimation = document.querySelector(`.${styles.bgAnimation}`);
      if (!bgAnimation) return;
      
      const particleCount = 20;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add(styles.particle);
        
        // Posición aleatoria
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Tamaño aleatorio
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Animación con retraso aleatorio
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        
        bgAnimation.appendChild(particle);
      }
    };
    
    // Limpiar partículas existentes y crear nuevas cuando el componente se monta
    const cleanup = () => {
      const bgAnimation = document.querySelector(`.${styles.bgAnimation}`);
      if (!bgAnimation) return;
      
      const particles = bgAnimation.querySelectorAll(`.${styles.particle}`);
      particles.forEach(particle => particle.remove());
    };
    
    cleanup();
    createParticles();
    
    // Limpiar partículas cuando el componente se desmonta
    return cleanup;
  }, []);

  return <div className={styles.bgAnimation}></div>;
};

export default BackgroundAnimation;