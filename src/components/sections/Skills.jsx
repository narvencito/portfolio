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

const Skills = () => {
  // Agrupar habilidades por categoría
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
        <div key={category} className="category-container">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {categorySkills.map((skill) => (
              <div key={skill.id} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-experience">{skill.experience}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;