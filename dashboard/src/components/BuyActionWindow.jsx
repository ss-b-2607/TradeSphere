import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = async () => {
    try {
      await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty:stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });

      generalContext.closeBuyWindow();
    } catch (err) {
      console.log(err);
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
        <p>Margin required ₹140.65</p>

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