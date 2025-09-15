import { motion } from "framer-motion";
import video from "../../assets/hero.mp4";
import logo from "../../assets/logo.png";
import hero from "../../assets/hero.jpeg";
import "../../../css/index.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="video-container">
        <video
          src={video}
          className="video"
          muted
          autoPlay
          loop
          playsInline
          poster={hero}
        ></video>
      </div>
      <div className="gradient-overlay" />
      <div className="content">
        <motion.img
          src={logo}
          alt="restaura"
          className="logo"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
        <p className="text">Argentina</p>
      </div>
    </section>
  );
};

export default HeroSection;
