import React, { useState, useEffect } from "react";
import API from "../utils/api";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    API.get("/allPositions")
      .then((res) => {
        setAllPositions(res.data);
      })
      .catch((err) => {
        console.log("Positions fetch error:", err);
      });
  }, []);

  const totalPnL = allPositions.reduce((total, stock) => {
    const currentValue = stock.price * stock.qty;
    return total + (currentValue - stock.avg * stock.qty);
  }, 0);

  return (
    <div className="positions-page">
      <div className="page-header">
        <div>
          <h3 className="title">Positions ({allPositions.length})</h3>
          <p className="page-subtitle">
            Monitor your active trading positions
          </p>
        </div>
      </div>

      <div className="portfolio-summary">
        <div className="portfolio-card">
          <h5>{allPositions.length}</h5>
          <p>Open positions</p>
        </div>

        <div className="portfolio-card">
          <h5 className={totalPnL >= 0 ? "profit" : "loss"}>
            ₹{totalPnL.toFixed(2)}
          </h5>
          <p>Total P&amp;L</p>
        </div>

        <div className="portfolio-card">
          <h5>
            ₹
            {allPositions
              .reduce((sum, stock) => sum + stock.price * stock.qty, 0)
              .toFixed(2)}
          </h5>
          <p>Current value</p>
        </div>
      </div>

      <div className="order-table holdings-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&amp;L</th>
              <th>Day Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allPositions.map((stock, index) => {
              const currentValue = stock.price * stock.qty;
              const pnl = currentValue - stock.avg * stock.qty;

              const pnlClass = pnl >= 0 ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>

                  <td className="instrument-name">
                    {stock.name}
                  </td>

                  <td>{stock.qty}</td>

                  <td>₹{stock.avg.toFixed(2)}</td>

                  <td>₹{stock.price.toFixed(2)}</td>

                  <td className={pnlClass}>
                    ₹{pnl.toFixed(2)}
                  </td>

                  <td className={dayClass}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;