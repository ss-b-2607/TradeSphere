import React from "react";

function Hero() {
  return (
    <div className="container text-center py-5">
      <h1 className="mb-4">Charges</h1>

      <p className="text-muted fs-4 mb-5">
        List of all charges and taxes
      </p>

      <div className="row mt-5 pt-5">
        <div className="col-4">
          <img
            src="media/images/pricing0.svg"
            alt="Free equity delivery"
            className="img-fluid mb-4"
            style={{ maxWidth: "220px" }}
          />
          <h2 className="mb-4">Free equity delivery</h2>
          <p className="text-muted fs-5" style={{ lineHeight: "1.7" }}>
            All equity delivery investments (NSE, BSE), are absolutely free —
            ₹ 0 brokerage.
          </p>
        </div>

        <div className="col-4">
          <img
            src="media/images/intradayTrades.svg"
            alt="Intraday and F&O trades"
            className="img-fluid mb-4"
            style={{ maxWidth: "260px" }}
          />
          <h2 className="mb-4">Intraday and F&O trades</h2>
          <p className="text-muted fs-5" style={{ lineHeight: "1.7" }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        <div className="col-4">
          <img
            src="media/images/pricing0.svg"
            alt="Free direct MF"
            className="img-fluid mb-4"
            style={{ maxWidth: "220px" }}
          />
          <h2 className="mb-4">Free direct MF</h2>
          <p className="text-muted fs-5" style={{ lineHeight: "1.7" }}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;