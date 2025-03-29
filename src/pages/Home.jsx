import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication state (you might need to manage this globally)
    navigate("/");
  };

  return (
    <div className="home-container">
      <h2>Welcome to EmployeeWise</h2>
      <p>Manage employees efficiently with our intuitive dashboard.</p>

      <div className="home-buttons">
        <button onClick={() => navigate("/users")}>View Users</button>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Home;
