import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);  
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
      setUsers(response.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
        setUsers(response.data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [page]); 

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      setUsers(users.filter((user) => user.id !== id)); 
      alert("User deleted successfully");
    } catch (error) {
      alert("Delete failed");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="container">
      <h2>User List</h2>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
  
      <div className="user-list">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <img src={user.avatar} alt={user.first_name} />
            <p>{user.first_name} {user.last_name}</p>
            <button className="edit-btn" onClick={() => navigate(`/edit/${user.id}`)}>Edit</button>
            <button className="delete-btn" onClick={() => handleDelete(user.id)}>Delete</button>
          </div>
        ))}
      </div>
  
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
  
};

export default UserList;


