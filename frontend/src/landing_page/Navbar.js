import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom bg-white fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="TradeSphere"
            style={{ width: "130px" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>

            <li className="nav-item mx-3">
              <i className="fa fa-bars nav-link"></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;