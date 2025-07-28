import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export const skillDetailsMap = {
  Flutter: {
    description: 'Framework que domino para desarrollar aplicaciones móviles y web de alto rendimiento desde una única base de código.',
    keyPoints: [
      'Gestores de estado: Bloc, Riverpod, GetX',
      'Integración de APIs RESTful y Firebase',
      'Uso de bases de datos locales: SQLite y ObjectBox',
      'Aplicación de flavors y configuración por entorno',
      'Despliegue en App Store y Play Store',
      'Soporte multiplataforma: mobile, web y desktop',
      'Crashlytics y Analytics integrados',
    ],
    tools: ['Flutter SDK', 'Dart', 'Android Studio', 'Xcode', 'FlutterFire'],
    experience: '+6 años',
  },
  Angular: {
    description: 'Framework robusto que utilizo desde Angular 8 en proyectos empresariales y web apps escalables.',
    keyPoints: [
      'Componentes y módulos reutilizables',
      'RxJS y programación reactiva',
      'Routing avanzado y lazy loading',
      'Formularios reactivos y validaciones',
      'Consumo de APIs y manejo de errores',
    ],
    tools: ['Angular CLI', 'TypeScript', 'RxJS', 'VS Code'],
    experience: '+6 años',
  },
  React: {
    description: 'Librería moderna para desarrollo frontend basada en componentes y declaratividad.',
    keyPoints: [
      'Hooks personalizados y context API',
      'Tailwind y diseño responsivo',
      'Estado global con Redux',
      'Optimización de performance y lazy loading',
    ],
    tools: ['React DevTools', 'Vite', 'Redux Toolkit', 'Tailwind CSS'],
    experience: '+3 años',
  },
  '.NET Core': {
    description: 'Framework principal que uso para desarrollar APIs RESTful, microservicios y sistemas empresariales.',
    keyPoints: [
      'Web API con buenas prácticas',
      'Entity Framework Core y LINQ',
      'CQRS, patrones DDD y repositorio',
      'Autenticación con JWT',
      'Despliegue en IIS, Heroku, Railway y AWS',
    ],
    tools: ['Visual Studio', 'Swagger', 'Postman', 'SQL Server', 'LINQPad'],
    experience: '+6 años',
  },
  NestJS: {
    description: 'Framework modular de Node.js con el que desarrollo APIs escalables y mantenibles.',
    keyPoints: [
      'Arquitectura limpia y modular',
      'Decoradores, DTOs y validaciones',
      'Patrones CQRS, DDD y repositorio',
      'JWT, Passport y manejo de roles',
      'Despliegue en Railway, AWS, Heroku',
    ],
    tools: ['Nest CLI', 'Swagger', 'Jest', 'TypeORM', 'Prisma'],
    experience: '+3 años',
  },
  SpringBoot: {
    description: 'Framework utilizado para construir APIs RESTful y sistemas backend con Java.',
    keyPoints: [
      'Manejo de dependencias con Maven',
      'Spring Data JPA y controladores REST',
      'Autenticación con JWT',
    ],
    tools: ['Spring Tool Suite', 'Postman', 'Swagger'],
    experience: '+6 años',
  },
  SQLServer: {
    description: 'Motor de base de datos relacional con el que desarrollo y optimizo consultas complejas.',
    keyPoints: [
      'Stored Procedures y triggers',
      'Optimización de consultas e índices',
      'Integración con .NET',
    ],
    tools: ['SSMS', 'SQL Profiler', 'Azure Data Studio'],
    experience: '+6 años',
  },
  PostgreSQL: {
    description: 'Motor que uso en ambientes productivos, especialmente con NestJS y microservicios.',
    keyPoints: [
      'Consultas SQL avanzadas y joins',
      'Funciones PL/pgSQL y triggers',
      'Índices GIN, GIST y transacciones',
    ],
    tools: ['pgAdmin', 'DBeaver', 'Prisma', 'Sequelize'],
    experience: '+3 años',
  },
  Oracle: {
    description: 'Base de datos usada en sistemas empresariales legacy con PL/SQL y conexiones .NET.',
    keyPoints: [
      'Desarrollo de paquetes, funciones y procedimientos',
      'Optimización de queries',
      'Integración vía ODP.NET',
    ],
    tools: ['SQL Developer', 'Toad', 'Oracle Forms'],
    experience: '+4 años',
  },
  Firebase: {
    description: 'Backend como servicio para prototipos y apps móviles reales.',
    keyPoints: [
      'Firestore y Realtime Database',
      'Autenticación con múltiples proveedores',
      'Cloud Functions y Hosting',
      'Crashlytics y Firebase Analytics',
      'Push notifications con FCM',
    ],
    tools: ['Firebase Console', 'Firebase CLI', 'FlutterFire'],
    experience: '+4 años',
  },
  AWS: {
    description: 'Plataforma cloud utilizada para despliegue y servicios móviles.',
    keyPoints: [
      'Amplify para frontend y backend',
      'Autenticación con Cognito',
      'Almacenamiento en S3',
      'Funciones Lambda y API Gateway',
    ],
    tools: ['AWS Console', 'Amplify CLI', 'CloudWatch', 'IAM'],
    experience: '+3 años',
  },
  Docker: {
    description: 'Herramienta esencial para ambientes de desarrollo consistentes y despliegue.',
    keyPoints: [
      'Creación de imágenes y contenedores',
      'Docker Compose para microservicios',
      'Integración en CI/CD pipelines',
    ],
    tools: ['Docker CLI', 'Docker Desktop'],
    experience: '+3 años',
  },
  CI_CD: {
    description: 'Configuración de pipelines automatizados para entrega continua de software.',
    keyPoints: [
      'GitHub Actions para CI/CD',
      'Codemagic para Flutter',
      'Workflows por entorno (QA, prod)',
    ],
    tools: ['GitHub Actions', 'Codemagic', 'Docker', 'YAML'],
    experience: '+3 años',
  }
};

const SkillModal = ({ skill, onClose }) => {
  const details = skillDetailsMap[skill.name];
  if (!details) return null;

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div className="skill-modal" layoutId={skill.name} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-icon">{skill.icon}</div>
          <h3>{skill.name}</h3>
          <span className="experience">{skill.experience}</span>
        </div>
        <div className="modal-content">
          <p className="description">{details.description}</p>
          <h4>Puntos Clave</h4>
          <ul className="key-points">
            {details.keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <h4>Herramientas</h4>
          <div className="tools-grid">
            {details.tools.map((tool, index) => (
              <div key={index} className="tool-item">{tool}</div>
            ))}
          </div>
        </div>
        <button className="modal-close" onClick={onClose}>×</button>
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    { id: 1, icon: '📱', name: 'Flutter', experience: '6 años', category: 'Frontend & Mobile' },
    { id: 2, icon: '🅰️', name: 'Angular', experience: '6 años', category: 'Frontend & Mobile' },
    { id: 3, icon: '⚛️', name: 'React', experience: '3 años', category: 'Frontend & Mobile' },
  
    { id: 4, icon: '⚡', name: '.NET Core', experience: '6 años', category: 'Backend' },
    { id: 5, icon: '🦅', name: 'NestJS', experience: '3 años', category: 'Backend' },
    { id: 6, icon: '🌱', name: 'SpringBoot', experience: '6 años', category: 'Backend' },
  
    { id: 7, icon: '💾', name: 'SQL Server', experience: '6 años', category: 'Bases de Datos' },
    { id: 8, icon: '🐘', name: 'PostgreSQL', experience: '3 años', category: 'Bases de Datos' },
    { id: 9, icon: '🗄️', name: 'Oracle', experience: '4 años', category: 'Bases de Datos' },
  
    { id: 10, icon: '☁️', name: 'AWS', experience: '3 años', category: 'Cloud & DevOps' },
    { id: 11, icon: '🔥', name: 'Firebase', experience: '4 años', category: 'Cloud & DevOps' },
    { id: 12, icon: '🐳', name: 'Docker', experience: '3 años', category: 'Cloud & DevOps' },
    { id: 13, icon: '⚙️', name: 'CI_CD', experience: '3 años', category: 'Cloud & DevOps' },
  
    { id: 14, icon: '📋', name: 'Scrum', experience: '6 años', category: 'Metodologías' }
  ];

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="skills-section">
      {Object.entries(groupedSkills).map(([category, skills]) => (
        <div key={category} className="category-block">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skills.map(skill => {
              const hasDetails = skillDetailsMap[skill.name];
              return (
                <motion.div
                  key={skill.id}
                  className={`skill-card ${hasDetails ? '' : 'disabled'}`}
                  layoutId={skill.name}
                  onClick={() => hasDetails && setSelectedSkill(skill)}
                  initial={{ opacity: 1 }}
                  animate={{ 
                    opacity: selectedSkill ? (skill.name === selectedSkill.name ? 1 : 0.3) : 1,
                    scale: selectedSkill ? (skill.name === selectedSkill.name ? 1 : 0.95) : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-experience">{skill.experience}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}

      <AnimatePresence>
        {selectedSkill && (
          <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Skills;
