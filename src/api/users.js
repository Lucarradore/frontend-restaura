import { authHeader } from "./auth";
const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:4000/api";

export async function getUsers() {
  const res = await fetch(`${API_BASE}/users`, {
    headers: { "Content-Type": "application/json", ...authHeader() },
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Error al obtener usuarios");
  }
  return res.json();
}

export async function getUserById(userId) {
  const res = await fetch(`${API_BASE}/users/${userId}`, {
    headers: { "Content-Type": "application/json", ...authHeader() },
  });
  if (!res.ok) throw new Error("No se pudo obtener el usuario");
  return res.json();
}

export async function updateUser(id, data) {
  const res = await fetch(`${API_BASE}/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...authHeader() },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteUser(id) {
  const res = await fetch(`${API_BASE}/users/${id}`, {
    method: "DELETE",
    headers: authHeader(),
  });
  return res;
}
