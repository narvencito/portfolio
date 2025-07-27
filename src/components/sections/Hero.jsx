import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../common/Button';
import CodeTerminal from '../common/CodeTerminal';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Especializado en desarrollo móvil y web con más de 5 años de experiencia.";
  const typingSpeed = 50;
  const { scrollY } = useScroll();

  // Calcular la posición del header (aproximadamente)
  const headerPosition = 20;
  const headerLeftPosition = window.innerWidth / 2 - 50;

  // Animaciones para las letras E y N
  const eTransform = {
    x: useTransform(scrollY, [100, 200], [0, -headerLeftPosition]),
    y: useTransform(scrollY, [100, 200], [0, -window.innerHeight/4 + headerPosition]),
    scale: useTransform(scrollY, [100, 200], [1, 0.5]),
    opacity: useTransform(scrollY, [100, 150, 200], [1, 1, 0])
  };

  const nTransform = {
    x: useTransform(scrollY, [100, 200], [0, -headerLeftPosition + 30]),
    y: useTransform(scrollY, [100, 200], [0, -window.innerHeight/4 + headerPosition]),
    scale: useTransform(scrollY, [100, 200], [1, 0.5]),
    opacity: useTransform(scrollY, [100, 150, 200], [1, 1, 0])
  };

  // Animación para separar el nombre
  const nameSpacing = {
    x: useTransform(scrollY, [0, 100], [0, 20]),
    opacity: useTransform(scrollY, [0, 100], [1, 0])
  };

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="hero-wrapper">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="hero-title">
          <div className="name-container">
            <div className="name-row">
              <motion.span 
                className="highlight-letter"
                style={{
                  display: 'inline-block',
                  color: '#00eeff',
                  WebkitTextFillColor: '#00eeff',
                  ...eTransform
                }}
              >
                E
              </motion.span>
              <motion.span 
                className="name-part first-name"
                style={nameSpacing}
              >
                merson
              </motion.span>
              <motion.div style={{ marginLeft: '2rem', display: 'inline-flex' }}>
                <motion.span
                  className="highlight-letter"
                  style={{
                    display: 'inline-block',
                    color: '#ff00ff',
                    WebkitTextFillColor: '#ff00ff',
                    ...nTransform
                  }}
                >
                  N
                </motion.span>
                <motion.span 
                  className="name-part last-name"
                  style={nameSpacing}
                >
                  avarro
                </motion.span>
              </motion.div>
            </div>
          </div>
        </h1>
        
        <motion.p 
          className="subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Desarrollador Full Stack
        </motion.p>
        
        <motion.div 
          className="typing-effect"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {typedText}
        </motion.div>
        
        <motion.div 
          className="cta-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button href="#projects" primary>Ver Proyectos</Button>
          <Button href="#contact" secondary>Contactar</Button>
        </motion.div>
      </motion.div>

      <motion.div 
        className="code-terminal-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <CodeTerminal />
      </motion.div>
    </div>
  );
};

export default Hero;