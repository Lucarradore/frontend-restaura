import { useState } from "react";
import PropTypes from "prop-types";
import { FaUserCircle } from "react-icons/fa";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "../../css/auth.css"; // Asegúrate de importar el CSS

export default function AuthIcon({ onLogin }) {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = (token) => {
    setShowLogin(false);
    if (onLogin) onLogin(token);
  };

  const handleRegister = () => {
    setShowRegister(false);
    setShowLogin(true); // Después de registrar, muestra login
  };

  const handleShowRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  return (
    <div style={{ position: "relative" }}>
      <FaUserCircle
        size={32}
        style={{ cursor: "pointer" }}
        onClick={() => {
          setShowLogin((v) => !v);
          setShowRegister(false);
        }}
        title="Acceder o Registrarse"
      />
      {showLogin && (
        <div className="auth-modal">
          <LoginForm onLogin={handleLogin} onShowRegister={handleShowRegister} />
          <button
            className="auth-switch-btn"
            onClick={() => {
              setShowLogin(false);
              setShowRegister(true);
            }}
          >
            ¿No tienes cuenta? Regístrate
          </button>
        </div>
      )}
      {showRegister && (
        <div className="auth-modal">
          <RegisterForm onRegister={handleRegister} />
          <button
            className="auth-switch-btn"
            onClick={() => {
              setShowRegister(false);
              setShowLogin(true);
            }}
          >
            ¿Ya tienes cuenta? Inicia sesión
          </button>
        </div>
      )}
    </div>
  );
}

AuthIcon.propTypes = {
  onLogin: PropTypes.func.isRequired,
};