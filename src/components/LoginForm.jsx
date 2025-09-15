import { useState } from "react";
import PropTypes from "prop-types";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userNotFound, setUserNotFound] = useState(false);
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const resetMessages = () => {
    setError("");
    setUserNotFound(false);
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetMessages();

    if (!email && !password) {
      setError("Por favor ingrese email y contraseña.");
      return;
    }
    if (!email) {
      setError("Por favor ingrese el email.");
      return;
    }
    if (!password) {
      setError("Por favor ingrese la contraseña.");
      return;
    }

    setIsLoading(true);

    try {
      const data = await login(email.trim(), password);
      // suponiendo que login devuelve { token } en caso exitoso
      if (data && data.token) {
        // guardar token y notificar al parent
        localStorage.setItem("token", data.token);
        onLogin(data.token);

        setSuccess("¡Inicio de sesión exitoso!");
        setError("");
        setUserNotFound(false);

        // redirigir al home después de una pequeña pausa para ver el mensaje
        setTimeout(() => navigate("/"), 900);
      } else {
        // manejo de errores según código devuelto por backend
        setSuccess("");
        if (data && data.code === "USER_NOT_FOUND") {
          setUserNotFound(true);
          setError("");
        } else if (data && data.code === "INVALID_PASSWORD") {
          setError("Contraseña incorrecta.");
          setUserNotFound(false);
        } else {
          setError(data?.error || "Error al iniciar sesión");
          setUserNotFound(false);
        }
      }
    } catch (err) {
      // error de red u otro problema
      console.error("Login error:", err);
      setError("No se pudo conectar al servidor. Intenta más tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form" noValidate>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@ejemplo.com"
          autoComplete="email"
          disabled={isLoading}
          required
        />
      </div>

      <div className="field">
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          autoComplete="current-password"
          disabled={isLoading}
          required
        />
      </div>

      <div className="actions" style={{ marginTop: 12 }}>
        <button type="submit" disabled={isLoading} className="btn primary">
          {isLoading ? "Ingresando..." : "Iniciar sesión"}
        </button>
      </div>

      {error && (
        <div className="error" style={{ marginTop: 10 }}>
          {error}
        </div>
      )}

      {userNotFound && (
        <div className="error" style={{ marginTop: 10 }}>
          El email no está registrado.
          <button
            style={{ marginLeft: 8 }}
            type="button"
            onClick={() => navigate("/register")}
            disabled={isLoading}
          >
            Ir a registro
          </button>
        </div>
      )}

      {success && (
        <div className="success" style={{ marginTop: 10 }}>
          {success}
          <button
            style={{ marginLeft: 8 }}
            type="button"
            onClick={() => navigate("/")}
            disabled={isLoading}
          >
            Aceptar
          </button>
        </div>
      )}
    </form>
  );
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

