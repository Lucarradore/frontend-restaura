import { useSelector, useDispatch } from "react-redux";
import { FaShoppingCart, FaBars, FaTimes, FaPhoneVolume, FaUser } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { LINKS } from "../../constants";
import { toggleMobileMenu, closeMobileMenu } from "../../redux/navbarSlice";
import "../../../css/index.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const dispatch = useDispatch();
  const isMobileMenuOpen = useSelector((state) => state.navbar.isMobileMenuOpen);
  const { cart, showCart, toggleCart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const cartCount = cart.reduce((acc, item) => acc + (item.quantity || 0), 0);

  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    dispatch(closeMobileMenu());
  };

  const overlayRef = useRef(null);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="restaura" width={80} height={22} />

        <div className="nav-links">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`#${link.targetId}`}
              className={`nav-link ${index !== 0 ? "nav-border" : ""}`}
              onClick={(e) => handleScroll(e, link.targetId)}
            >
              {link.text}
            </a>
          ))}

          <div style={{ position: "relative", display: "inline-block" }}>
            <FaShoppingCart
              className="nav-icon"
              onClick={toggleCart}
              style={{ cursor: "pointer" }}
            />
            {cartCount > 0 && <span className="cart-count-badge">{cartCount}</span>}
          </div>

          <a
            href="/contacto"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon"
          >
            <FaPhoneVolume />
          </a>

          {user ? (
            <>
              <span style={{ marginRight: 8 }}>Hola, {user.name || user.username}</span>
              <button onClick={handleLogout} className="btn secondary">
                Cerrar sesión
              </button>
            </>
          ) : (
            <FaUser
              className="nav-icon"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/login")}
              title="Acceder o Registrarse"
            />
          )}
        </div>

        <div className="menu-toggle" onClick={() => dispatch(toggleMobileMenu())}>
          {isMobileMenuOpen ? <FaTimes className="menu-icon" /> : <FaBars className="menu-icon" />}
        </div>
      </div>

      {showCart && (
        <div
          className="shopping-list-overlay"
          ref={overlayRef}
          onClick={(e) => {
            if (e.target === overlayRef.current) toggleCart();
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Lista de compras"
        >
          <div className="shopping-list" onClick={(e) => e.stopPropagation()}>
            {cart.length === 0 ? (
              <div style={{ textAlign: "center", padding: "2rem" }}>
                <p className="shopping-empty" style={{ marginBottom: "1rem" }}>
                  La lista está vacía
                </p>
                <p style={{ color: "#555", fontSize: "0.9rem", marginTop: 0 }}>
                  Haz click fuera del cuadro para cerrar este mensaje
                </p>
              </div>
            ) : (
              <>
                <h2>Lista de compras</h2>
                <ul>
                  {cart.map((item) => (
                    <li className="shopping-item" key={item.id}>
                      <img src={item.image} alt={item.title} />
                      <span className="shopping-item-name">{item.title}</span>
                      <span className="shopping-item-qty">x{item.quantity}</span>
                      <span className="shopping-item-price">${item.price * item.quantity}</span>
                      <button className="remove" onClick={() => removeFromCart(item.id)}>
                        Eliminar
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="shopping-list-buttons">
                  <button
                    className="confirm btn secondary"
                    onClick={() => {
                      toggleCart();
                      navigate("/dishesConfirm", { state: { cart } });
                    }}
                  >
                    Confirmar compra
                  </button>
                  <button className="clear btn secondary" onClick={clearCart}>
                    Vaciar lista
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <FaTimes className="mobile-close-icon" onClick={() => dispatch(toggleMobileMenu())} />
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={`#${link.targetId}`}
            className="mobile-nav-link"
            onClick={(e) => handleScroll(e, link.targetId)}
          >
            {link.text}
          </a>
        ))}

        <div style={{ position: "relative", display: "inline-block" }}>
          <FaShoppingCart className="mobile-nav-icon" onClick={toggleCart} />
          {cartCount > 0 && <span className="cart-count-badge">{cartCount}</span>}
        </div>

        <a
          href="/contacto"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-nav-icon"
        >
          <FaPhoneVolume />
        </a>

        {user ? (
          <div className="user-info-mobile" style={{ marginTop: 8 }}>
            <span style={{ marginRight: 0.5 + "rem" }}>
              Hola, {user.name || user.username}
            </span>
            <button onClick={handleLogout} className="btn secondary">
              Cerrar sesión
            </button>
          </div>
        ) : (
          <FaUser
            className="mobile-nav-icon"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/login")}
            title="Acceder o Registrarse"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;


