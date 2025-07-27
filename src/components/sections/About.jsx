import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      x: -50,
      opacity: 0 
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const imageVariants = {
    hidden: { 
      scale: 0.8,
      opacity: 0 
    },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.div 
      className="about-content"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="about-text"
        variants={itemVariants}
      >
        Ingeniero de Sistemas con más de 5 años de experiencia desarrollando aplicaciones móviles multiplataforma con Flutter. 
        He trabajado en proyectos de alto impacto en sectores como retail, educación y tecnología, destacando por la implementación 
        de arquitecturas limpias, optimización de rendimiento y soluciones escalables. Tengo experiencia fullstack con tecnologías 
        como .NET Core, NestJS, Angular, y bases de datos como SQL Server, PostgreSQL y Oracle.
      </motion.div>
      <motion.div 
        className="about-image"
        variants={imageVariants}
      >
        <div className="profile-img">👨‍💻</div>
      </motion.div>
    </motion.div>
  );
};

export default About;