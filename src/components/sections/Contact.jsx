import Button from '../common/Button';
import ContactItem from '../common/ContactItem';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
  };

  return (
    <div className="contact-content">
      <div className="contact-form">
        <h3>Envíame un mensaje</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              placeholder="Tu nombre completo"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="tucorreo@ejemplo.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              placeholder="Escribe tu mensaje aquí..."
              required
            ></textarea>
          </div>
          <Button type="submit" primary>
            Enviar
          </Button>
        </form>
      </div>
      <div className="contact-info">
        <ContactItem
          icon="📧"
          title="Email"
          content="em.navarro.ven@gmail.com"
        />
        <ContactItem
          icon="📱"
          title="Teléfono"
          content="+51 983581221"
        />
        <ContactItem
          icon="🔗"
          title="LinkedIn"
          content="https://www.linkedin.com/in/emerson-navarro-ventura"
          isLink
        />
        <div className="social-links">
          <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;