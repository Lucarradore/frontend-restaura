import { DISHES } from "../../constants"; // Ruta relativa correcta
import DishCard from "./DishCard"; // Ruta relativa correcta
import "../../../css/index.css"; // Ruta relativa correcta

const DishContent = () => {
  return (
    <section className="dishes-section" id="dishes">
      <h2 className="dishes-title">Nuestros Platos</h2>
      <div className="dishes-grid">
        {DISHES.map((dish, index) => (
          <DishCard key={index} dish={dish} showDetails={false} /> 
        ))}
      </div>
      <div className="dishes-button-container">
        <a href="/dishes" target="_blank" rel="noopener noreferrer" className="dishes-button">
          Ver más
        </a>
      </div>
    </section>
  );
};

export default DishContent;

