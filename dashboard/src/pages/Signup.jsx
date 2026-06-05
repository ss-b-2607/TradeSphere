import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../utils/API";

const Signup = () => {
  const navigate = useNavigate();

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
        navigate("/dashboard");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.log(err);
      alert("Signup failed");
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-box" onSubmit={handleSubmit}>
        <h2>Create TradeSphere Account</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={input.username}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={input.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={input.password}
          onChange={handleChange}
        />

        <button type="submit">Signup</button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;