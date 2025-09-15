import { motion } from "framer-motion"; 
import mission from "../../assets/mission.mp4";
import { MISSION } from "../../constants";
import missionImg from "../../assets/mission.jpeg";
import "../../../css/index.css"; 

const Mission = () => {
  return (
    <section id="mission" className="mission-section">
      <div className="mission-container">
        <h2 className="mission-title">Nuestra Misión</h2>
        <div className="mission-video-container">
          <motion.video
            className="mission-video"
            autoPlay
            muted
            loop
            playsInline
            poster={missionImg}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <source src={mission} type="video/mp4" />
          </motion.video>
          <motion.div
            className="mission-overlay"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
          <motion.p
            className="mission-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {MISSION}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Mission;

