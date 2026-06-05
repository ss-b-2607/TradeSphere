import React from "react";

const Summary = () => {
  return (
    <div className="summary-page">
      <div className="username">
        <h6>Hi, Sheetal!</h6>
        <p>Welcome to your Kite dashboard</p>
      </div>

      <div className="summary-grid">
        <div className="summary-card">
          <div className="summary-card-header">
            <p>Equity</p>
            <span>Available margin</span>
          </div>

          <div className="summary-main">
            <h3>₹3.74k</h3>
            <p>Margin available</p>
          </div>

          <div className="summary-details">
            <p>
              Margins used <span>₹0</span>
            </p>
            <p>
              Opening balance <span>₹3.74k</span>
            </p>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-card-header">
            <p>Holdings</p>
            <span>13 stocks</span>
          </div>

          <div className="summary-main">
            <h3 className="profit">₹1.55k</h3>
            <p>
              P&amp;L <span className="profit">+5.20%</span>
            </p>
          </div>

          <div className="summary-details">
            <p>
              Current value <span>₹31.43k</span>
            </p>
            <p>
              Investment <span>₹29.88k</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;