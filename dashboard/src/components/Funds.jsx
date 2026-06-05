import React from "react";

const Funds = () => {
  return (
    <div className="funds-page">
      <div className="funds-header">
        <div>
          <h3 className="title">Funds</h3>
          <p className="page-subtitle">
            Manage your trading balance and margins
          </p>
        </div>

        <div className="funds-actions">
          <button className="btn btn-green">Add Funds</button>
          <button className="btn btn-blue">Withdraw</button>
        </div>
      </div>

      <div className="portfolio-summary">
        <div className="portfolio-card">
          <h5 className="colored">₹4,043.10</h5>
          <p>Available Margin</p>
        </div>

        <div className="portfolio-card">
          <h5>₹3,757.30</h5>
          <p>Used Margin</p>
        </div>

        <div className="portfolio-card">
          <h5>₹4,043.10</h5>
          <p>Available Cash</p>
        </div>
      </div>

      <div className="funds-grid">
        <div className="funds-card">
          <h4>Equity</h4>

          <div className="fund-row">
            <span>Opening Balance</span>
            <span>₹4,043.10</span>
          </div>

          <div className="fund-row">
            <span>Payin</span>
            <span>₹4,064.00</span>
          </div>

          <div className="fund-row">
            <span>SPAN</span>
            <span>₹0.00</span>
          </div>

          <div className="fund-row">
            <span>Delivery Margin</span>
            <span>₹0.00</span>
          </div>

          <div className="fund-row">
            <span>Exposure</span>
            <span>₹0.00</span>
          </div>

          <div className="fund-row">
            <span>Options Premium</span>
            <span>₹0.00</span>
          </div>

          <hr />

          <div className="fund-row">
            <span>Collateral (Liquid Funds)</span>
            <span>₹0.00</span>
          </div>

          <div className="fund-row">
            <span>Collateral (Equity)</span>
            <span>₹0.00</span>
          </div>

          <div className="fund-row">
            <span>Total Collateral</span>
            <span>₹0.00</span>
          </div>
        </div>

        <div className="funds-card commodity-card">
          <h4>Commodity</h4>

          <p>
            You don't have a commodity trading account yet.
          </p>

          <button className="btn btn-blue">
            Open Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Funds;