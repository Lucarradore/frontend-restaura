import { useState } from "react";
import PropTypes from "prop-types";
import { loginUser } from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userNotFound, setUserNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const resetMessages = () => {
    setError("");
    setUserNotFound(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetMessages();

    if (!email || !password) {
      setError("Por favor ingrese email y contraseña.");
      return;
    }

    setIsLoading(true);
    try {
      const data = await loginUser({ email: email.trim(), password });

      if (data && data.token) {
        if (onLogin) onLogin(data.token);
        navigate("/");
      } else {
        if (data?.code === "USER_NOT_FOUND") setUserNotFound(true);
        else if (data?.code === "INVALID_PASSWORD") setError("Contraseña incorrecta.");
        else setError(data?.error || "Error al iniciar sesión");
      }
    } catch (err) {
      console.error(err);
      setError("No se pudo conectar al servidor. Intenta más tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form" noValidate>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@ejemplo.com" disabled={isLoading} required />
      </div>

      <div className="field">
        <label htmlFor="password">Contraseña</label>
        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" disabled={isLoading} required />
      </div>

      <div className="actions" style={{ marginTop: 12 }}>
        <button type="submit" disabled={isLoading} className="btn primary">
          {isLoading ? "Ingresando..." : "Iniciar sesión"}
        </button>
      </div>

      {error && <div className="error" style={{ marginTop: 10 }}>{error}</div>}
      {userNotFound && (
        <div className="error" style={{ marginTop: 10 }}>
          El email no está registrado.
          <button style={{ marginLeft: 8 }} type="button" onClick={() => navigate("/register")} disabled={isLoading}>
            Ir a registro
          </button>
        </div>
      )}
    </form>
  );
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
