import { motion } from "framer-motion";
import { useState } from "react";
import xaviour from "../../assets/Review/Xaviour.jpeg";
import carlos from "../../assets/Review/Carlos.jpg";
import ramiro from "../../assets/Review/Ramiro.jpg";
import customer1 from "../../assets/customer1.jpeg";
import customer2 from "../../assets/customer2.jpeg";
import customer3 from "../../assets/customer3.jpeg";
import customer4 from "../../assets/customer4.jpeg";
import { REVIEWS } from "../../constants";
import "../../../css/index.css";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? REVIEWS.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === REVIEWS.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getCriticImage = (index) => {
    if (index === 1) return ramiro; 
    if (index === 2) return carlos; 
    return xaviour; 
  };

  return (
    <section className="review-container" id="review">
      <motion.div
        className="review-text"
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.p className="review-content" variants={itemVariants}>
          {REVIEWS[currentIndex].content}
        </motion.p>
        <motion.div className="review-info" variants={itemVariants}>
          <img
            src={getCriticImage(currentIndex)}
            width={80}
            height={80}
            alt={REVIEWS[currentIndex].name}
            className="review-avatar"
          />
          <div className="review-name-profession">
            <h6 className="review-name">{REVIEWS[currentIndex].name}</h6>
            <p className="review-profession">{REVIEWS[currentIndex].profession}</p>
          </div>
        </motion.div>
        <div className="review-navigation">
          <button className="review-nav-button" onClick={handlePrev}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="review-nav-button" onClick={handleNext}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </motion.div>

      <motion.div
        className="review-images"
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {[customer1, customer2, customer3, customer4].map((customer, index) => (
          <motion.img
            key={index}
            src={customer}
            alt={`Customer ${index + 1}`}
            className="review-customer-img"
            variants={itemVariants}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Review;



