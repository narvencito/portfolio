const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        {project.icon}
        <div className="project-overlay">
          <div className="project-links">
            {project.demo && (
              <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            )}
            {project.code && (
              <a href={project.code} className="project-link" target="_blank" rel="noopener noreferrer">
                Código
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;