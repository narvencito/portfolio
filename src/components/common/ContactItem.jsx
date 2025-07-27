const ContactItem = ({ icon, title, content, isLink }) => {
  return (
    <div className="contact-item">
      <div className="contact-icon">{icon}</div>
      <div>
        <strong>{title}: </strong>
        {isLink ? (
          <a href={content} target="_blank" rel="noopener noreferrer">
            {content}
          </a>
        ) : (
          content
        )}
      </div>
    </div>
  );
};

export default ContactItem;