import { useEffect, useState } from "react";
import { getUsers } from "../api/users"; 
import { useNavigate } from "react-router-dom";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login"); 
        return;
      }

      const data = await getUsers();
      setUsers(data);
    }
    fetchUsers();
  }, [navigate]);

  return (
    <main className="main-container">
      <h1>Usuarios registrados</h1>
      <ul>
        {users.map((u) => (
          <li key={u._id}>
            {u.username || `${u.name} ${u.lastName}`} ({u.role})
          </li>
        ))}
      </ul>
    </main>
  );
}

