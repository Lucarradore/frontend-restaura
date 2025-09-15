import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import "../../css/register.css";

export default function RegisterForm() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [toast, setToast] = useState(null); 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (value) => value.includes("@");
  const validatePassword = (value) =>
    value.length >= 8 && /[A-Z]/.test(value) && /\d/.test(value);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 900);
    return () => clearTimeout(t);
  }, [toast]);

  const showToast = (text, type = "success") => {
    setToast({ text, type });
  };

  const handleValidateCurrent = async () => {
    setError("");

    if (step === 1 && !name.trim()) {
      setError("Por favor ingresa tu nombre.");
      return;
    }

    if (step === 2 && !lastName.trim()) {
      setError("Por favor ingresa tu apellido.");
      return;
    }

    if (step === 3) {
      if (!email.trim()) {
        setError("Por favor ingresa tu email.");
        return;
      }
      if (!validateEmail(email)) {
        setError("El email debe contener '@'.");
        return;
      }
    }

    if (step === 4) {
      if (!password) {
        setError("Por favor ingresa tu contraseña.");
        return;
      }
      if (!validatePassword(password)) {
        setError(
          "La contraseña debe tener al menos 8 caracteres, incluir una mayúscula y un número."
        );
        return;
      }
      if (!confirmPassword) {
        setError("Por favor confirma tu contraseña.");
        return;
      }
      if (password !== confirmPassword) {
        setError("Las contraseñas no coinciden.");
        return;
      }

      setIsSubmitting(true);
      showToast("Registrando...", "info");
      try {
        const data = await register(name, lastName, email, password);

        if (data && data.token) {
          localStorage.setItem("token", data.token);
          if (data.user) {
            localStorage.setItem("user", JSON.stringify(data.user));
          }

          showToast("✔ Registro exitoso", "success");
          setTimeout(() => navigate("/"), 1200);
        } else {
          setError(data?.error || "Error al registrarse");
        }
      } catch (err) {
        setError("Error al registrarse");
        console.error(err);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      showToast(`✔ Paso ${step} completado`);
      setTimeout(() => setStep((s) => s + 1), 450);
    }
  };

  const handleBack = () => {
    setError("");
    if (step > 1) setStep((s) => s - 1);
  };

  return (
    <div className="register-wrapper">
      <form
        className="register-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleValidateCurrent();
        }}
        noValidate
      >
        <div className="form-step-indicator">Paso {step} de 4</div>

        {step === 1 && (
          <div className="field-group">
            <label>Nombre</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nombre"
              autoFocus
            />
          </div>
        )}

        {step === 2 && (
          <div className="field-group">
            <label>Apellido</label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Apellido"
              autoFocus
            />
          </div>
        )}

        {step === 3 && (
          <div className="field-group">
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              autoFocus
            />
          </div>
        )}

        {step === 4 && (
          <div className="field-group">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              autoFocus
            />
            <label>Confirmar contraseña</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirmar contraseña"
            />
          </div>
        )}

        {error && <p className="error">{error}</p>}

        <div className="form-actions">
          <button
            type="button"
            className="btn secondary"
            onClick={handleBack}
            disabled={step === 1 || isSubmitting}
          >
            Atrás
          </button>

          <button
            type="submit"
            className="btn primary"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {step < 4
              ? "Validar"
              : isSubmitting
              ? "Registrando..."
              : "Registrarse"}
          </button>
        </div>
      </form>

      {toast && (
        <div className={`floating-toast ${toast.type === "info" ? "info" : "ok"}`}>
          {toast.text}
        </div>
      )}
    </div>
  );
}

