import { motion } from "framer-motion";
import about from "../../assets/about.jpeg";
import { ABOUT } from "../../constants";
import "../../../css/index.css";

const About = () => {
  return (
    <section className="about-container" id="about">
      <h2 className="about-title">Acerca De</h2>
      <div className="about-content">
        <div className="about-image-container">
          <motion.img
            src={about}
            alt="Sobre Nosotros"
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>
        <div className="about-text-container">
          <motion.h2
            className="about-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {ABOUT.header}
          </motion.h2>
          <motion.div
            className="about-highlight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          ></motion.div>
          <motion.p
            className="about-description"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {ABOUT.content}
          </motion.p>
        </div>
      </div>
      <div className="about-button-container">
        <a
          href="/sobre-nosotros"
          target="_blank"
          rel="noopener noreferrer"
          className="about-button"
        >
          Saber más
        </a>
      </div>
    </section>
  );
};

export default About;



