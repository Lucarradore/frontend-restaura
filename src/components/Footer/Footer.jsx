import { SOCIAL_MEDIA_LINKS } from "../../constants";
import "../../../css/index.css"; 

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-social-links">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <span className="social-icon">{link.icon}</span>
          </a>
        ))}
      </div>
      <p className="footer-text">
        &copy; RestauraRestaurant. Todos los derechos reservados.
      </p>
    </div>
  );
};

export default Footer;


