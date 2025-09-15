import { motion } from "framer-motion"; 
import { CUSINES } from "../../constants";
import "../../../css/index.css"; 

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Expertise = () => {
  return (
    <section id="expertise" className="expertise-section">
      <h2 className="expertise-title">Nuestras Especialidades</h2>
      <motion.div
        className="expertise-container"
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {CUSINES.map((cusine, index) => (
          <motion.div
            key={index}
            className="expertise-item"
            variants={itemVariants}
          >
            <div className="expertise-number">{cusine.number}</div>
            <div className="expertise-image">
              <img
                src={cusine.image}
                alt={cusine.title}
                className="expertise-img"
              />
            </div>
            <div className="expertise-description">
              <h3 className="expertise-title-item">{cusine.title}</h3>
              <p className="expertise-text">{cusine.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Expertise;

