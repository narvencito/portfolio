import { useEffect } from 'react';

const CodeTerminal = () => {
  useEffect(() => {
    const lines = document.querySelectorAll('.code-line');
    lines.forEach((line, index) => {
      line.style.animationDelay = `${index * 0.5}s`;
    });
  }, []);

  return (
    <div className="code-terminal">
      <div className="code-line">const developer = {'{'}</div>
      <div className="code-line">  name: 'Emerson Navarro',</div>
      <div className="code-line">  frontend: [</div>
      <div className="code-line">    'React', 'Angular', 'Flutter'</div>
      <div className="code-line">  ],</div>
      <div className="code-line">  backend: [</div>
      <div className="code-line">    '.NET Core', 'NestJS'</div>
      <div className="code-line">  ],</div>
      <div className="code-line">  status: 'Disponible para nuevos proyectos'</div>
      <div className="code-line">{'};'}</div>
    </div>
  );
};

export default CodeTerminal;