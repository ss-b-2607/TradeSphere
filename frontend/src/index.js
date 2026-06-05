import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./landing_page/home/HomePage.js";
import Signup from "./landing_page/signup/Signup.js";
import Login from "./landing_page/login/Login.js";
import About from "./landing_page/about/AboutPage.js";
import Product from "./landing_page/products/ProductsPage.js";
import Pricing from "./landing_page/pricing/PricingPage.js";
import Support from "./landing_page/support/SupportPage.js";
import Navbar from "./landing_page/Navbar.js";
import Footer from "./landing_page/Footer.js";
import NotFound from "./landing_page/NotFound.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);