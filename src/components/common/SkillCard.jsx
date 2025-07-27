import { useEffect, useRef } from 'react';
import styles from '../../styles/components/SkillCard.module.css';

const SkillCard = ({ skill }) => {
  const progressBarRef = useRef(null);
  
  useEffect(() => {
    // Animación de la barra de progreso cuando el componente es visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          progressBarRef.current.style.width = `${skill.progress}%`;
        }
      },
      { threshold: 0.2 }
    );
    
    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }
    
    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
    };
  }, [skill.progress]);

  return (
    <div className={styles.skillCard}>
      <div className={styles.skillIcon}>{skill.icon}</div>
      <div className={styles.skillName}>{skill.name}</div>
      <div className={styles.skillProgress}>
        <div 
          className={styles.skillProgressBar} 
          ref={progressBarRef}
          style={{ width: '0%' }} // Inicialmente en 0
        ></div>
      </div>
    </div>
  );
};

export default SkillCard;