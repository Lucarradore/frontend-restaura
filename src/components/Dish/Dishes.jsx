import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import DishCard from "./DishCard"
import dish1 from "../../assets/dishes/dish1.jpeg"; // Ruta relativa correcta
import dish2 from "../../assets/dishes/dish2.jpeg";
import dish3 from "../../assets/dishes/dish3.jpeg";
import dish4 from "../../assets/dishes/dish4.jpeg";
import dish5 from "../../assets/dishes/dish5.jpeg";
import dish6 from "../../assets/dishes/dish6.jpeg";
import dish7 from "../../assets/dishes/dish7.jpeg";
import dish8 from "../../assets/dishes/dish8.jpeg";
import dish9 from "../../assets/dishes/dish9.jpeg";
import dish10 from "../../assets/dishes/dish10.jpeg";
import dish11 from "../../assets/dishes/dish11.jpg";
import dish12 from "../../assets/dishes/dish12.jpg";
import dish13 from "../../assets/dishes/dish13.jpg";
import dish14 from "../../assets/dishes/dish14.jpg";
import dish15 from "../../assets/dishes/dish15.jpg";
import dish16 from "../../assets/dishes/dish16.jpg";
import dish17 from "../../assets/dishes/dish17.jpg";
import dish18 from "../../assets/dishes/dish18.jpg";
import dish19 from "../../assets/dishes/dish19.jpg";
import dish20 from "../../assets/dishes/dish20.jpg";
import dish21 from "../../assets/dishes/dish21.jpg";
import dish22 from "../../assets/dishes/dish22.jpg";
import dish23 from "../../assets/dishes/dish23.jpg";
import dish24 from "../../assets/dishes/dish24.jpg";
import dish25 from "../../assets/dishes/dish25.jpg";
import "../../../css/dish.css"; // Ruta relativa correcta

const DISHES = [
  { id: 1, image: dish1, title: "Cielo de Tomate", description: "Sopa de tomate asado con albahaca fresca y un toque de queso rallado.", category: "Sopas", price: 10000 },
  { id: 7, image: dish7, title: "Bosque Encantado", description: "Hongos gourmet, salsa con carne casera, cebolla, ajo, champiñones.", category: "Pastas", price: 13000 },
  { id: 11, image: dish11, title: "Jardín del Sol", description: "Pepino, cebolla, aceituna, zanahoria, rúcula y lechuga.", category: "Ensaladas", price: 6000 },
  { id: 16, image: dish16, title: "Cheesecake", description: "Base de galletas, relleno de queso crema, azúcar, huevos y esencia de vainilla, capa de frutas frescas.", category: "Postres", price: 2300 },
  { id: 21, image: dish21, title: "El Asado del Valle", description: " Un suculento corte de carne de res con hierbas aromáticas y un toque de mostaza.", category: "Carnes", price: 5000 },
  { id: 4, image: dish4, title: "Otoño en Taza", description: "Sopa de lentejas con zanahoria, apio y especias otoñales.", category: "Sopas", price: 9000 },
  { id: 6, image: dish6, title: "Verde Sinfonía", description: "Ñoquis de brócoli, aceitunas, salsa veggie, nueces.", category: "Pastas", price: 15000 },
  { id: 2, image: dish2, title: "El Abrazo Caliente", description: " Sopa de calabaza asada con jengibre y un toque de crema de coco.", category: "Sopas", price: 8000 },
  { id: 12, image: dish12, title: "Colores del Huerto", description: "Zanahoria, lechuga, remolacha, pollo y salsa de para acompañar.", category: "Ensaladas", price: 6000 },
  { id: 17, image: dish17, title: "Flan", description: "Base de caramelo líquido, mezcla de huevos, leche, azúcar y esencia de vainilla.", category: "Postres", price: 1550 },
  { id: 22, image: dish22, title: "Reina del Fuego", description: "Costillas de cerdo glaseadas con salsa barbacoa y especias ahumadas.", category: "Carnes", price: 8000 },
  { id: 19, image: dish19, title: "Helado", description: "Helado a elección con barras de chocolate", category: "Postres", price: 5000 },
  { id: 8, image: dish8, title: "Mar de Sabores", description: "Fideos caseros con salsa cuatro quesos, pescado y albahaca.", category: "Pastas", price: 6000 },
  { id: 23, image: dish23, title: "Bajo la Luna de Hierro", description: "Filete de ternera a la parrilla con reducción de vino tinto y cebollas caramelizadas.", category: "Carnes", price: 15000 },
  { id: 13, image: dish13, title: "Frescura Tropical", description: "Tomate, lechuga, rúcula, queso y aceitunas.", category: "Ensaladas", price: 7000 },
  { id: 3, image: dish3, title: "Mar de Sabores", description: "Sopa de mariscos con caldo de pescado, almejas, camarones y mejillones.", category: "Sopas", price: 8000 },
  { id: 9, image: dish9, title: "Pollo a la Nido de Fideos", description: "Clásico de fideos, con pollo, salsa de tomate, y ajo.", category: "Pastas", price: 9000 },
  { id: 10, image: dish10, title: "Fideos del Amanecer", description: "Mix de fideos y verduritas... Huevo, tomate, cebolla de verdeo, palta y salsa.", category: "Pastas", price: 15000 },
  { id: 14, image: dish14, title: "Época de Cosecha", description: "Pollo, zanahoria y rúcula.", category: "Ensaladas", price: 6000 },
  { id: 5, image: dish5, title: "Sopa del Bosque Encantado", description: "Sopa de mariscos con caldo de pescado, almejas, camarones y mejillones.", category: "Sopas", price: 10000 },
  { id: 18, image: dish18, title: "Cupcake", description: "Masa esponjosa de pastel de chocolate o vainilla con glaseado y chispas de chocolate, frutas, nueces o confites.", category: "Postres", price: 6000 },
  { id: 15, image: dish15, title: "Verde Refrescante", description: "Pepino, lechuga y chauchas.", category: "Ensaladas", price: 1500 },
  { id: 24, image: dish24, title: "Tierra y Sabor", description: "Lomo de cordero en costra de hierbas con puré de papas trufado.", category: "Carnes", price: 9000 },
  { id: 20, image: dish20, title: "Tiramisu", description: "Capas de bizcochos, relleno de una mezcla cremosa de queso mascarpone, huevo, azúcar y nata.", category: "Postres", price: 1500 },
  { id: 25, image: dish25, title: "Amanecer Dorado", description: "Pechuga de pollo rellena con espinacas y queso feta, servida con salsa de mostaza y miel.", category: "Carnes", price: 5700 },
];

const CATEGORIES = ["Todos", "Pastas", "Ensaladas", "Postres", "Sopas", "Carnes"];

const Dishes = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const navigate = useNavigate();

  // Usa el contexto global del carrito
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = useCart();

  const filteredDishes =
    selectedCategory === "Todos"
      ? DISHES
      : DISHES.filter((dish) => dish.category === selectedCategory);

  // Calcula el total a pagar
  const totalToPay = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const confirmPurchase = () => {
    navigate("/dishesConfirm", { state: { cart } });
  };

  return (
    <section className="dishes-section">
      <h2 className="dishes-title">Nuestros Platos</h2>

      <div className="category-buttons">
        {CATEGORIES.map((category, index) => (
          <button
            key={index}
            className={`category-button ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="dishes-grid">
        {filteredDishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} showDetails={true} />
        ))}
      </div>

      <aside className="cart-sidebar">
        <h3 className="cart-title">Carrito</h3>
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item" style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
                <img src={item.image} alt={item.title} style={{ width: 40, height: 40, marginRight: 8, borderRadius: 8 }} />
                <span style={{ flex: 1 }}>{item.title}</span>
                <button onClick={() => decreaseQuantity(item.id)} className="quantity-button">-</button>
                <span style={{ margin: "0 8px" }}>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)} className="quantity-button">+</button>
                <span style={{ marginLeft: 12 }}>${item.price * item.quantity}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-item-button"
                  style={{ marginLeft: 8 }}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <>
            <div style={{ fontWeight: "bold", margin: "12px 0" }}>
              Total a pagar: ${totalToPay}
            </div>
            <button
              className="confirm-purchase-button"
              onClick={confirmPurchase}
              style={{ marginBottom: 8 }}
            >
              Confirmar Compra
            </button>
            <button
              className="clear-cart-button"
              onClick={clearCart}
            >
              Vaciar Carrito
            </button>
          </>
        )}
      </aside>
    </section>
  );
};

export default Dishes;
