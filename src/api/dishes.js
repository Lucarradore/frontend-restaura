import { authHeader } from "./auth";
const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:4000/api";

export async function getDishes() {
  const res = await fetch(`${API_BASE}/dishes`);
  return res.json();
}

export async function createDish(data) {
  const res = await fetch(`${API_BASE}/dishes`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeader() },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateDish(id, data) {
  const res = await fetch(`${API_BASE}/dishes/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...authHeader() },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteDish(id) {
  const res = await fetch(`${API_BASE}/dishes/${id}`, {
    method: "DELETE",
    headers: authHeader(),
  });
  return res;
}
