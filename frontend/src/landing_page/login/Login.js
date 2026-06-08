import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../../api";

const DASHBOARD_URL =
  "https://tradesphere-dashboard.vercel.app";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/login", input);

      if (res.data.success) {
        alert("Login successful");
        window.location.href = DASHBOARD_URL;
      } else {
        alert(res.data.message || "Login failed");
      }
    } catch (err) {
      console.log("Login error:", err);
      alert("Login failed");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h1>Login to TradeSphere</h1>
        <p>Access your dashboard and manage your trades.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={input.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={input.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className="login-text">
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;