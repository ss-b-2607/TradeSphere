import React from "react";
import { Link } from "react-router-dom";

function CreateTicket() {
  const sections = [
    {
      icon: "fa fa-plus-circle",
      title: "Account opening",
      links: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      icon: "fa fa-user-circle",
      title: "Your TradeSphere Account",
      links: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      icon: "fa fa-inr",
      title: "Funds",
      links: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
    },
    {
      icon: "fa fa-adjust",
      title: "Console",
      links: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
    },
    {
      icon: "fa fa-check-circle-o",
      title: "Coin",
      links: [
        "Mutual funds",
        "National Pension Scheme (NPS)",
        "Fixed Deposit (FD)",
        "Features on Coin",
        "Payments and Orders",
        "General",
      ],
    },
    {
      icon: "fa fa-chevron-circle-right",
      title: "Kite",
      links: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
    },
  ];

  return (
    <div className="container">
      <div className="row p-5 mb-5">
        <h1 className="fs-2 mb-4">
          To create a ticket, select a relevant topic
        </h1>

        {sections.map((section, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12 p-4 mb-4" key={index}>
            <h1 className="fs-4 mb-3">
              <i className={section.icon} aria-hidden="true"></i>{" "}
              {section.title}
            </h1>

            {section.links.map((link, i) => (
              <Link
                key={i}
                to="/support"
                style={{ textDecoration: "none" }}
                className="account-link"
              >
                {link}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;