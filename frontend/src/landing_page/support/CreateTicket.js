import React from "react";
import { Link } from "react-router-dom";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mb-5">
        <h1 className="fs-2 "> To create a ticket, select a relevant topic</h1>
        <div className="col-4 p-5 mb-5">
          <h1 className="fs-4">
            <i class="fa fa-plus-circle" aria-hidden="true"></i>Account opening
          </h1>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            Resident individual
          </a>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            Minor
          </a>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            Non Resident Indian (NRI)
          </a>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            Company, Partnership, HUF and LLP
          </a>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            Glossary
          </a>
        </div>
        <div className="col-4 p-5 mb-5">
          <h1 className="fs-4">
            <i class="fa fa-user-circle" aria-hidden="true"></i>Your Zerodha
            Account
          </h1>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            Your Profile
          </a>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            Account modification
          </a>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            Client Master Report (CMR) and Depository Participant (DP)
          </a>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            Nomination
          </a>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            Transfer and conversion of securities
          </a>
        </div>
        <div className="col-4 p-5 mb-5">
          <h1 className="fs-4">
            <i class="fa fa-inr" aria-hidden="true"></i>Funds
          </h1>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            {" "}
            Add money
          </a>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            Withdraw money
          </a>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            Add bank accounts
          </a>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            eMandates
          </a>
        </div>
        <div className="col-4 p-5 mb-5">
          <h1 className="fs-4">
            <i class="fa fa-adjust" aria-hidden="true"></i>Console
          </h1>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            Portfolio
          </a>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            Corporate actions
          </a>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            Funds statement
          </a>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            Reports
          </a>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            Profile
          </a>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            Segments
          </a>
        </div>
        <div className="col-4 p-5 mb-5">
          <h1 className="fs-4">
            <i class="fa fa-check-circle-o" aria-hidden="true"></i>Coin
          </h1>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            Mutual funds
          </a>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            National Pension Scheme (NPS)
          </a>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            Fixed Deposit (FD)
          </a>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            Features on Coin
          </a>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            Payments and Orders
          </a>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            General
          </a>
        </div>
        <div className="col-4 p-5 mb-5">
          <h1 className="fs-4">
            <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>Kite
          </h1>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            IPO
          </a>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            Trading FAQs
          </a>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            Margin Trading Facility (MTF) and Margins
          </a>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            Charts and orders
          </a>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            Alerts and Nudges
          </a>
          <a
            href=""
            style={{ textDecoration: "none" }}
            className="account-link"
          >
            General
          </a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
