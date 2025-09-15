import HeroSection from "../Hero/HeroSection"; 
import Dishes from "./Dishes"; 
import "../../../css/index.css"; 

const Dish = () => {
  return (
    <>
      <HeroSection />
      
      <main className="main-content">
        <Dishes />
      </main>
    </>
  );
};

export default Dish;
