import { CONTACT } from "../../constants"; 
import "../../../css/index.css"; 

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contactanos</h2>
      <div className="contact-details">
        {CONTACT.map((detail) => (
          <p
            key={detail.key}
            className="contact-item"
          >
            {detail.value}
          </p>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
