import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../../api";

const DASHBOARD_URL = "https://tradesphere-dashboard.vercel.app";

function Signup() {
  const [input, setInput] = useState({
    username: "",
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
      const res = await API.post("/signup", input);

      if (res.data.success) {
        localStorage.setItem("tradesphereToken", res.data.token);
        localStorage.setItem("tradesphereUser", JSON.stringify(res.data.user));

        alert("Signup successful");
        window.location.href = DASHBOARD_URL;
      } else {
        alert(res.data.message || "Signup failed");
      }
    } catch (err) {
      console.log("Signup error:", err);
      alert("Signup failed");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h1>Create your TradeSphere account</h1>
        <p>Start investing and trading with a secure platform.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Full name"
            value={input.username}
            onChange={handleChange}
            autoComplete="name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={input.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={input.password}
            onChange={handleChange}
            autoComplete="new-password"
            required
          />

          <button type="submit">Sign up</button>
        </form>

        <p className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
