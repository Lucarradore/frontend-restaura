const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:4000/api";

export async function register(name, lastName, email, password) {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, lastName, email, password }),
  });

  return res.json();
}

export async function login(email, password) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (data.token) {
    localStorage.setItem("token", data.token);

    if (data.user) {
      localStorage.setItem("user", JSON.stringify(data.user));
    }
  }

  return data;
}

export function authHeader() {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

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
