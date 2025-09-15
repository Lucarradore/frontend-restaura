import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="auth-modal">
      <h2>Iniciar sesión</h2>
      <LoginForm
        onLogin={(token) => {
          localStorage.setItem("token", token);
          navigate("/");
        }}
      />
      <div style={{ marginTop: 16, textAlign: "center" }}>
        <span className="no-account-text">¿No tienes cuenta?</span>
        <button
          className="auth-switch-btn"
          style={{ marginLeft: 8 }}
          onClick={() => navigate("/register")}
        >
          Registrarse
        </button>
      </div>
    </div>
  );
}