import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulated authentication (replace with real authentication logic)
    if (email === "eve.holt@reqres.in" && password === "cityslicka") {
      onLogin();
      navigate("/home"); // Redirect to Home page after login
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="login-container">
      <h2>Welcome Back!</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="login-btn">Login</button>
      </form>
      <p className="forgot-password" onClick={() => alert("Reset Password Link Sent!")}>
        Forgot Password?
      </p>
    </div>
  );
};

export default Login;
