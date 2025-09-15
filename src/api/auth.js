// src/api/auth.js
const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:4000/api";

// Registrar nuevo usuario
export async function register(name, lastName, email, password) {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, lastName, email, password }),
  });

  return res.json();
}

// Iniciar sesión
export async function login(email, password) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  // si viene token lo guardamos
  if (data.token) {
    localStorage.setItem("token", data.token);

    // 🔹 Guardar también usuario en localStorage
    if (data.user) {
      localStorage.setItem("user", JSON.stringify(data.user));
    }
  }

  return data;
}

// helper: devuelve header Authorization si hay token
export function authHeader() {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

// Ejemplo de uso en rutas protegidas
export async function getProfile() {
  const res = await fetch(`${API_BASE}/users/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...authHeader(),
    },
  });
  return res.json();
}
