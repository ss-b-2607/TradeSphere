import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../utils/api";

const Login = () => {
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
      const { data } = await API.post("/login", input);

      if (data.success) {
        alert("Login successful!");

        // Redirect to TradeSphere Kite Dashboard
        window.location.href = "http://localhost:5173";
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-box" onSubmit={handleSubmit}>
        <h2>Login to TradeSphere</h2>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
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

        <p>
          Don't have an account?{" "}
          <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;