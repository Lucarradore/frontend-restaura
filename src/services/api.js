const API_BASE = import.meta.env.VITE_API_URL || "https://backend-restaura.onrender.com/api";

export async function registerUser(data) {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function loginUser(data) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json(); 
}

function authHeaders() {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function getUsers() {
  const res = await fetch(`${API_BASE}/users`, { headers: authHeaders() });
  return res.json();
}

export async function getUser(id) {
  const res = await fetch(`${API_BASE}/users/${id}`, { headers: authHeaders() });
  return res.json();
}

export async function updateUser(id, data) {
  const res = await fetch(`${API_BASE}/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...authHeaders() },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function deleteUser(id) {
  const res = await fetch(`${API_BASE}/users/${id}`, {
    method: "DELETE",
    headers: authHeaders()
  });
  return res;
}

export async function getDishes() {
  const res = await fetch(`${API_BASE}/dishes`);
  return res.json();
}

export async function createDish(data) {
  const res = await fetch(`${API_BASE}/dishes`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeaders() },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function updateDish(id, data) {
  const res = await fetch(`${API_BASE}/dishes/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...authHeaders() },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function deleteDish(id) {
  const res = await fetch(`${API_BASE}/dishes/${id}`, {
    method: "DELETE",
    headers: authHeaders()
  });
  return res;
}
