import HeroSection from "../Hero/HeroSection"; // Ruta relativa correcta
import Dishes from "./Dishes"; // Ruta relativa correcta
import "../../../css/index.css"; // Ruta relativa correcta

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
