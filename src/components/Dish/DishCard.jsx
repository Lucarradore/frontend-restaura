import PropTypes from "prop-types";
import { useCart } from "../../context/CartContext";
import toast from "react-hot-toast";
import "../../../css/dish.css";

const DishCard = ({ dish, showDetails = false }) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    const item = { ...dish, quantity: 1 };
    addToCart(item);

    toast.success(`${dish.title} agregado al carrito`, {
      duration: 3000,
    });
  };

  return (
    <div className="dish-card">
      <img src={dish.image} alt={dish.title} className="dish-card-image" />
      <h3 className="dish-card-title">{dish.title}</h3>
      <p className="dish-card-description">{dish.description}</p>

      {showDetails && (
        <>
          <p className="dish-card-price">${dish.price}</p>
          <button onClick={handleAdd} className="dish-card-button">
            Agregar al carrito
          </button>
        </>
      )}
    </div>
  );
};

DishCard.propTypes = {
  dish: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number,
  }).isRequired,
  showDetails: PropTypes.bool,
};

export default DishCard;
