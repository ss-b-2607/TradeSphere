import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./SellActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleSellClick = async () => {
    try {
      await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "SELL",
      });

      generalContext.closeSellWindow();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="sell-window">
      <div className="sell-header">
        <h3>Sell {uid}</h3>
      </div>

      <div className="sell-body">
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

      <div className="sell-footer">
        <p>Estimated credit ₹{(stockQuantity * stockPrice).toFixed(2)}</p>

        <div className="footer-buttons">
          <button className="sell-btn" onClick={handleSellClick}>
            Sell
          </button>

          <button
            className="cancel-btn"
            onClick={() => generalContext.closeSellWindow()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;