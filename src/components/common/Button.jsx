const Button = ({ children, href, primary, secondary, onClick }) => {
  const buttonClass = `btn ${primary ? 'btn-primary' : ''} ${secondary ? 'btn-secondary' : ''}`.trim();
  
  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
