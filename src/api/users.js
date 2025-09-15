const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:4000/api";
import { authHeader } from "./auth";

export async function getUsers() {
  const res = await fetch(`${API_BASE}/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...authHeader(),
    },
  });

  if (res.status === 401) {
    localStorage.removeItem("token");
    throw new Error("Sesión expirada. Volvé a iniciar sesión.");
  }

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Error al obtener usuarios");
  }

  return res.json();
}

export async function getUserById(userId) {
  const res = await fetch(`${API_BASE}/users/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...authHeader(),
    },
  });

  if (!res.ok) {
    throw new Error("No se pudo obtener el usuario");
  }

  return res.json();
}
