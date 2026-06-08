import React, { useState } from "react";
import { Link } from "react-router-dom";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Signup successful");

    window.location.href =
  "https://tradesphere-dashboard.vercel.app";
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
            required
          />

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