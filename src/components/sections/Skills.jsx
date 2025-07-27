import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const SkillModal = ({ skill, isSelected, onClose }) => {
  const modalVariants = {
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  const overlayVariants = {
    open: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      backdropFilter: "blur(10px)"
    },
    closed: {
      backgroundColor: "rgba(0, 0, 0, 0)",
      backdropFilter: "blur(0px)"
    }
  };

  const getSkillDetails = (skill) => {
    const details = {
      'Frontend & Mobile': {
        description: 'Desarrollo de interfaces modernas y responsivas',
        keyPoints: ['UI/UX', 'Responsive Design', 'Mobile First', 'Cross-platform'],
        tools: ['VS Code', 'Android Studio', 'Xcode', 'Figma']
      },
      'Backend': {
        description: 'Arquitectura y desarrollo de APIs escalables',
        keyPoints: ['REST APIs', 'GraphQL', 'Microservicios', 'Clean Architecture'],
        tools: ['Postman', 'Swagger', 'Docker', 'Git']
      },
      'Bases de Datos': {
        description: 'Diseño y optimización de bases de datos',
        keyPoints: ['Modelado', 'Optimización', 'Migración', 'Backup'],
        tools: ['DBeaver', 'MongoDB Compass', 'pgAdmin', 'SSMS']
      },
      'Cloud & DevOps': {
        description: 'Implementación y gestión de infraestructura cloud',
        keyPoints: ['CI/CD', 'Containerization', 'Cloud Services', 'Monitoring'],
        tools: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform']
      },
      'Gestión de Estado': {
        description: 'Manejo eficiente del estado en aplicaciones',
        keyPoints: ['State Management', 'Cache', 'Persistencia', 'Sincronización'],
        tools: ['Redux DevTools', 'MobX', 'VueX', 'NgRx']
      },
      'Testing & Quality': {
        description: 'Aseguramiento de calidad y testing',
        keyPoints: ['Unit Testing', 'E2E Testing', 'Integration Tests', 'QA'],
        tools: ['Jest', 'Cypress', 'Selenium', 'JUnit']
      },
      'Metodologías': {
        description: 'Metodologías ágiles y gestión de proyectos',
        keyPoints: ['Scrum', 'Kanban', 'XP', 'Lean'],
        tools: ['Jira', 'Trello', 'Confluence', 'Notion']
      }
    };

    return details[skill.category] || {
      description: 'Experiencia detallada en desarrollo de software',
      keyPoints: ['Desarrollo', 'Implementación', 'Mantenimiento', 'Optimización'],
      tools: ['IDEs', 'Control de versiones', 'Herramientas de desarrollo']
    };
  };

  const details = getSkillDetails(skill);

  return (
    <motion.div
      initial="closed"
      animate="open"
      exit="closed"
      variants={overlayVariants}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div
        className="skill-modal"
        variants={modalVariants}
        layoutId={`skill-card-${skill.id}`}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div className="modal-header" layoutId={`skill-header-${skill.id}`}>
          <motion.div 
            className="modal-icon"
            layoutId={`skill-icon-${skill.id}`}
          >
            {skill.icon}
          </motion.div>
          <motion.h3 layoutId={`skill-name-${skill.id}`}>
            {skill.name}
          </motion.h3>
          <motion.span 
            className="experience"
            layoutId={`skill-experience-${skill.id}`}
          >
            {skill.experience}
          </motion.span>
        </motion.div>

        <motion.div
          className="modal-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="description">{details.description}</p>
          
          <h4>Puntos Clave</h4>
          <ul className="key-points">
            {details.keyPoints.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {point}
              </motion.li>
            ))}
          </ul>

          <h4>Herramientas</h4>
          <div className="tools-grid">
            {details.tools.map((tool, index) => (
              <motion.div
                key={index}
                className="tool-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.button
          className="modal-close"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          ×
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const skills = [
    // Frontend & Mobile
    {
      id: 1,
      icon: '📱',
      name: 'Flutter',
      experience: '5 años',
      category: 'Frontend & Mobile'
    },
    {
      id: 2,
      icon: '🅰️',
      name: 'Angular',
      experience: '4 años',
      category: 'Frontend & Mobile'
    },
    {
      id: 3,
      icon: '⚛️',
      name: 'React',
      experience: '2 años',
      category: 'Frontend & Mobile'
    },
    // Backend
    {
      id: 5,
      icon: '⚡',
      name: '.NET Core',
      experience: '4 años',
      category: 'Backend'
    },
    {
      id: 6,
      icon: '🦅',
      name: 'NestJS',
      experience: '3 años',
      category: 'Backend'
    },
    {
      id: 8,
      icon: '🌿',
      name: 'Spring Boot',
      experience: '2 años',
      category: 'Backend'
    },
    {
      id: 9,
      icon: '🐍',
      name: 'Python',
      experience: '2 años',
      category: 'Backend'
    },
    // Bases de Datos
    {
      id: 10,
      icon: '💾',
      name: 'SQL Server',
      experience: '5 años',
      category: 'Bases de Datos'
    },
    {
      id: 11,
      icon: '🐘',
      name: 'PostgreSQL',
      experience: '4 años',
      category: 'Bases de Datos'
    },
    {
      id: 12,
      icon: '🗄️',
      name: 'Oracle',
      experience: '3 años',
      category: 'Bases de Datos'
    },
    {
      id: 13,
      icon: '📦',
      name: 'MongoDB',
      experience: '2 años',
      category: 'Bases de Datos'
    },
    // Cloud & DevOps
    {
      id: 14,
      icon: '☁️',
      name: 'AWS',
      experience: '2 años',
      category: 'Cloud & DevOps'
    },
    {
      id: 15,
      icon: '🔥',
      name: 'Firebase',
      experience: '3 años',
      category: 'Cloud & DevOps'
    },
    {
      id: 16,
      icon: '🔄',
      name: 'Azure DevOps',
      experience: '2 años',
      category: 'Cloud & DevOps'
    },
    {
      id: 17,
      icon: '🐳',
      name: 'Docker',
      experience: '2 años',
      category: 'Cloud & DevOps'
    },
    // Gestión de Estado
    {
      id: 18,
      icon: '📦',
      name: 'Bloc Pattern',
      experience: '4 años',
      category: 'Gestión de Estado'
    },
    {
      id: 19,
      icon: '🎯',
      name: 'GetX',
      experience: '3 años',
      category: 'Gestión de Estado'
    },
    {
      id: 20,
      icon: '🔄',
      name: 'Provider',
      experience: '4 años',
      category: 'Gestión de Estado'
    },
    {
      id: 21,
      icon: '⚛️',
      name: 'Redux',
      experience: '2 años',
      category: 'Gestión de Estado'
    },
    // Testing & Quality
    {
      id: 22,
      icon: '🧪',
      name: 'Pruebas Automatizadas',
      experience: '3 años',
      category: 'Testing & Quality'
    },
    {
      id: 23,
      icon: '🎯',
      name: 'Pruebas Unitarias',
      experience: '3 años',
      category: 'Testing & Quality'
    },
    {
      id: 24,
      icon: '🔍',
      name: 'Pruebas de Integración',
      experience: '3 años',
      category: 'Testing & Quality'
    },
    // Metodologías & Herramientas
    {
      id: 25,
      icon: '📋',
      name: 'Scrum',
      experience: '4 años',
      category: 'Metodologías'
    },
    {
      id: 27,
      icon: '🔄',
      name: 'CI/CD',
      experience: '3 años',
      category: 'Metodologías'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const categoryVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.8
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95,
      rotate: [-1, 1, -1, 0],
      transition: {
        duration: 0.3
      }
    },
    selected: {
      scale: 1.1,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: 360,
      scale: 1.2,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const expandedCardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 100
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 100,
      transition: {
        duration: 0.3
      }
    }
  };

  const handleCategoryClick = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const handleCardClick = (skill) => {
    setSelectedSkill(skill);
  };

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <>
      {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
        <motion.div
          key={category}
          className="category-container"
          variants={categoryVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          onClick={() => handleCategoryClick(category)}
        >
          <motion.h3 
            className="category-title"
            variants={cardVariants}
            whileHover={{ scale: 1.0 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.h3>
          <motion.div 
            className="skills-grid"
            animate={{
              height: expandedCategory === category ? "auto" : "100%",
              transition: { duration: 0.3 }
            }}
          >
            {categorySkills.map((skill) => (
              <motion.div
                key={skill.id}
                layoutId={`skill-card-${skill.id}`}
                className="skill-card"
                onClick={() => setSelectedSkill(skill)}
                whileHover={{ 
                  scale: 1.0,
                  transition: { type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="skill-icon"
                  layoutId={`skill-icon-${skill.id}`}
                >
                  {skill.icon}
                </motion.div>
                <motion.div 
                  className="skill-name"
                  layoutId={`skill-name-${skill.id}`}
                >
                  {skill.name}
                </motion.div>
                <motion.div 
                  className="skill-experience"
                  layoutId={`skill-experience-${skill.id}`}
                >
                  {skill.experience}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedSkill && (
          <SkillModal
            skill={selectedSkill}
            isSelected={true}
            onClose={() => setSelectedSkill(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Skills;