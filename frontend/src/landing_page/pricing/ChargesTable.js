import React, { useState } from "react";

function ChargesTable() {
  const [activeTab, setActiveTab] = useState("equity");

  const data = {
    equity: {
      headers: [
        "",
        "Equity delivery",
        "Equity intraday",
        "F&O - Futures",
        "F&O - Options",
      ],
      rows: [
        [
          "Brokerage",
          "Zero Brokerage",
          "0.03% or Rs. 20/executed order whichever is lower",
          "0.03% or Rs. 20/executed order whichever is lower",
          "Flat Rs. 20 per executed order",
        ],
        [
          "STT/CTT",
          "0.1% on buy & sell",
          "0.025% on the sell side",
          "0.05% on the sell side",
          "0.15% of the intrinsic value on options that are bought and exercised\n\n0.15% on sell side (on premium)",
        ],
        [
          "Transaction charges",
          "NSE: 0.00307%\nBSE: 0.00375%",
          "NSE: 0.00307%\nBSE: 0.00375%",
          "NSE: 0.00183%\nBSE: 0",
          "NSE: 0.03553% (on premium)\nBSE: 0.0325% (on premium)",
        ],
        [
          "GST",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ],
        ["SEBI charges", "₹10 / crore", "₹10 / crore", "₹10 / crore", "₹10 / crore"],
        [
          "Stamp charges",
          "0.015% or ₹1500 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
          "0.002% or ₹200 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
        ],
      ],
    },

    currency: {
      headers: ["", "Currency futures", "Currency options"],
      rows: [
        [
          "Brokerage",
          "0.03% or ₹ 20/executed order whichever is lower",
          "₹ 20/executed order",
        ],
        ["STT/CTT", "No STT", "No STT"],
        [
          "Transaction charges",
          "NSE: 0.00035%\nBSE: 0.00045%",
          "NSE: 0.0311%\nBSE: 0.001%",
        ],
        [
          "GST",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ],
        ["SEBI charges", "₹10 / crore", "₹10 / crore"],
        [
          "Stamp charges",
          "0.0001% or ₹10 / crore on buy side",
          "0.0001% or ₹10 / crore on buy side",
        ],
      ],
    },

    commodity: {
      headers: ["", "Commodity futures", "Commodity options"],
      rows: [
        [
          "Brokerage",
          "0.03% or Rs. 20/executed order whichever is lower",
          "₹ 20/executed order",
        ],
        ["STT/CTT", "0.01% on sell side (Non-Agri)", "0.05% on sell side"],
        [
          "Transaction charges",
          "MCX: 0.0021%\nNSE: 0.0001%",
          "MCX: 0.0418%\nNSE: 0.001%",
        ],
        [
          "GST",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ],
        ["SEBI charges", "Agri:\n₹1 / crore\nNon-agri:\n₹10 / crore", "₹10 / crore"],
        [
          "Stamp charges",
          "0.002% or ₹200 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
        ],
      ],
    },
  };

  const current = data[activeTab];

  return (
    <div className="container my-5">
      <div className="border-bottom mb-5">
        {["equity", "currency", "commodity"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="btn border-0 fs-3 me-5 pb-3"
            style={{
              color: activeTab === tab ? "#424242" : "#387ed1",
              borderBottom:
                activeTab === tab ? "2px solid #387ed1" : "none",
              borderRadius: "0",
              fontWeight: "400",
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <table className="table table-bordered text-muted">
        <thead>
          <tr>
            {current.headers.map((head, index) => (
              <th
                key={index}
                className="text-dark"
                style={{
                  fontWeight: "500",
                  padding: "22px",
                  fontSize: "1.05rem",
                }}
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {current.rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={j === 0 ? "text-dark" : "text-muted"}
                  style={{
                    whiteSpace: "pre-line",
                    lineHeight: "1.8",
                    fontSize: "1.05rem",
                    padding: "22px",
                    backgroundColor: i % 2 === 1 ? "#fafafa" : "#fff",
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-center fs-3 my-5 text-muted">
        <a
          href="/pricing"
          className="text-decoration-none"
          style={{ color: "#387ed1" }}
        >
          Calculate your costs upfront
        </a>{" "}
        using our brokerage calculator
      </p>
    </div>
  );
}

export default ChargesTable;