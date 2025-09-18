const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:4000/api";

export async function registerUser(data) {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function loginUser(data) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  if (result.token) localStorage.setItem("token", result.token);
  if (result.user) localStorage.setItem("user", JSON.stringify(result.user));
  return result;
}

export function authHeader() {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function getProfile() {
  const res = await fetch(`${API_BASE}/users/profile`, {
    headers: { "Content-Type": "application/json", ...authHeader() },
  });
  return res.json();
}
