import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allHoldings")
      .then((res) => {
        setAllHoldings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // so that run one time 

  const totalInvestment = allHoldings.reduce(
    (sum, stock) => sum + stock.avg * stock.qty,
    0
  );

  const currentValue = allHoldings.reduce(
    (sum, stock) => sum + stock.price * stock.qty,
    0
  );

  const totalPnL = currentValue - totalInvestment;
  const pnlPercent =
    totalInvestment === 0 ? 0 : (totalPnL / totalInvestment) * 100;

  const labels = allHoldings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(65, 132, 243, 0.5)",
      },
    ],
  };

  return (
    <div className="holdings-page">
      <div className="page-header">
        <div>
          <h3 className="title">Holdings ({allHoldings.length})</h3>
          <p className="page-subtitle">Track your long-term portfolio</p>
        </div>
      </div>

      <div className="portfolio-summary">
        <div className="portfolio-card">
          <h5>₹{totalInvestment.toFixed(2)}</h5>
          <p>Total investment</p>
        </div>

        <div className="portfolio-card">
          <h5>₹{currentValue.toFixed(2)}</h5>
          <p>Current value</p>
        </div>

        <div className="portfolio-card">
          <h5 className={totalPnL >= 0 ? "profit" : "loss"}>
            ₹{totalPnL.toFixed(2)} ({pnlPercent.toFixed(2)}%)
          </h5>
          <p>P&amp;L</p>
        </div>
      </div>

      <div className="order-table holdings-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&amp;L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const pnl = curValue - stock.avg * stock.qty;
              const profClass = pnl >= 0 ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td className="instrument-name">{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>₹{stock.avg.toFixed(2)}</td>
                  <td>₹{stock.price.toFixed(2)}</td>
                  <td>₹{curValue.toFixed(2)}</td>
                  <td className={profClass}>₹{pnl.toFixed(2)}</td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="chart-section">
        <VerticalGraph data={data} />
      </div>
    </div>
  );
};

export default Holdings;