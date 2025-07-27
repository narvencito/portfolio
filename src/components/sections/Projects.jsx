import ProjectCard from '../common/ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Sistema de Facturación Integrado con SAP',
      description: 'Desarrollo y mantenimiento de módulos de facturación, reportes de deuda e integración con SAP para Real Plaza.',
      icon: '🧾',
      tech: ['Flutter', '.NET Core', 'Angular', 'SAP', 'SQL Server'],
      demo: '#',
      code: '#'
    },
    {
      id: 2,
      title: 'Aplicativo de Delivery y Ventas',
      description: 'App móvil para delivery y ventas con notificaciones push y arquitectura limpia.',
      icon: '📦',
      tech: ['Flutter', 'Bloc', 'Firebase', 'SharedPreferences'],
      demo: '#',
      code: '#'
    },
    {
      id: 3,
      title: 'Aplicativo PRONABEC Móvil y Web',
      description: 'Plataforma educativa con sincronización offline, notificaciones y experiencia multiplataforma.',
      icon: '🎓',
      tech: ['Flutter', 'Hive', 'Bloc', 'Firebase'],
      demo: '#',
      code: '#'
    },
    {
      id: 4,
      title: 'Gestión de Incidentes',
      description: 'Sistema de reporte de incidentes con imágenes, geolocalización, y autenticación con AWS.',
      icon: '🛠️',
      tech: ['Flutter', 'AWS Cognito', 'SQLite', 'Provider'],
      demo: '#',
      code: '#'
    },
    {
      id: 5,
      title: 'Sistema de Reservas Hotelero',
      description: 'Desarrollo web y móvil para reservas y administración de hospedajes con notificaciones.',
      icon: '🏨',
      tech: ['Flutter', '.NET Core', 'Angular', 'Oracle'],
      demo: '#',
      code: '#'
    }
  ];

  return (
    <div className="projects-grid">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;