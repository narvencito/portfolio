import { useEffect, useState } from 'react';
import Button from '../common/Button';
import CodeTerminal from '../common/CodeTerminal';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Especializado en desarrollo móvil y web con más de 5 años de experiencia.";
  const typingSpeed = 50;

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
    <>
      <h1>Emerson Navarro</h1>
      <p className="subtitle">Desarrollador Full Stack</p>
      <div className="typing-effect">{typedText}</div>
      <div className="cta-buttons">
        <Button href="#projects" primary>Ver Proyectos</Button>
        <Button href="#contact" secondary>Contactar</Button>
      </div>
      
      <div style={{ width: '100%', marginTop: '2rem' }}>
        <CodeTerminal />
      </div>
    </>
  );
};

export default Hero;