import React, { useState, useContext } from "react";

import GeneralContext from "./GeneralContext";
import API from "../utils/api";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = async () => {
    try {
      if (Number(stockPrice) <= 0 || Number(stockQuantity) <= 0) {
        alert("Please enter valid quantity and price");
        return;
      }
      const res = await API.post("/newOrder", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "BUY",
      });

      if (res.data.success) {
        generalContext.closeBuyWindow();
        window.location.reload();
      }
    } catch (err) {
      console.log("Buy order failed:", err);
      alert("Buy order failed");
    }
  };

  return (
    <div className="buy-window">
      <div className="buy-header">
        <h3>Buy {uid}</h3>
      </div>

      <div className="buy-body">
        <div className="input-group">
          <label>Quantity</label>
          <input
            type="number"
            value={stockQuantity}
            min="1"
            onChange={(e) => setStockQuantity(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Price</label>
          <input
            type="number"
            value={stockPrice}
            step="0.05"
            onChange={(e) => setStockPrice(e.target.value)}
          />
        </div>
      </div>

      <div className="buy-footer">
        <p>
          Margin required ₹
          {(Number(stockQuantity) * Number(stockPrice)).toFixed(2)}
        </p>

        <div className="footer-buttons">
          <button className="buy-btn" onClick={handleBuyClick}>
            Buy
          </button>

          <button
            className="cancel-btn"
            onClick={() => generalContext.closeBuyWindow()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
