import React from "react";

function ChargesExplained() {
  return (
    <div className="container my-5">
      <h2 className="mb-5">Charges explained</h2>

      <div className="row">
        <div className="col-6">
          <h4>Securities/Commodities transaction tax</h4>
          <p>Tax by the government when transacting on the exchanges.</p>

          <h4>Transaction/Turnover Charges</h4>
          <p>Charged by exchanges on the value of your transactions.</p>

          <h4>Call & trade</h4>
          <p>Additional charges of ₹50 per order for orders placed through a dealer.</p>

          <h4>Stamp charges</h4>
          <p>Stamp charges by the Government of India for transacting in instruments.</p>

          <h4>NRI brokerage charges</h4>
          <ul>
            <li>0.5% or ₹50 per executed order for non-PIS account.</li>
            <li>0.5% or ₹200 per executed order for PIS account.</li>
          </ul>

          <h4>Margin Trading Facility (MTF)</h4>
          <ul>
            <li>MTF Interest: 0.04% per day.</li>
            <li>MTF Brokerage: 0.3% or Rs. 20/executed order.</li>
          </ul>
        </div>

        <div className="col-6">
          <h4>GST</h4>
          <p>18% on brokerage + SEBI charges + transaction charges.</p>

          <h4>SEBI Charges</h4>
          <p>Charged at ₹10 per crore + GST.</p>

          <h4>DP charges</h4>
          <p>₹15.34 per scrip is charged when stocks are sold.</p>

          <h4>Pledging charges</h4>
          <p>₹30 + GST per pledge request per ISIN.</p>

          <h4>AMC</h4>
          <p>Free for first year on all new resident individual accounts.</p>

          <h4>Payment gateway charges</h4>
          <p>₹9 + GST. Not levied on transfers done via UPI.</p>

          <h4>Delayed Payment Charges</h4>
          <p>Interest is levied at 18% a year or 0.05% per day.</p>
        </div>
      </div>

      <h4 className="mt-5">Disclaimer</h4>
      <p>
        For Delivery based trades, a minimum of ₹0.01 will be charged per
        contract note. Brokerage will not exceed rates specified by SEBI and the
        exchanges.
      </p>
    </div>
  );
}

export default ChargesExplained;