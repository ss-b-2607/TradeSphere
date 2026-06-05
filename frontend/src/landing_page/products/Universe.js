import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container py-5">
      <div className="row text-center">
        <h1
          className="mb-4"
          style={{
            fontSize: "3rem",
            fontWeight: "500",
            color: "#424242",
          }}
        >
          The Zerodha Universe
        </h1>

        <p className="text-muted fs-5 mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="row mb-5" style={{ marginTop: "60px" }}>
          <div className="col-4">
            <img
              src="media/images/zerodhaFundhouse.png"
              alt="Fund House"
              className="img-fluid mb-4"
              style={{ maxWidth: "330px" }}
            />
            <p
              className="text-muted"
              style={{
                maxWidth: "330px",
                margin: "0 auto",
                lineHeight: "1.8",
              }}
            >
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>

          <div className="col-4">
            <img
              src="media/images/sensibullLogo.svg"
              alt="Sensibull"
              className="img-fluid mb-4"
              style={{ maxWidth: "260px" }}
            />
            <p
              className="text-muted"
              style={{
                maxWidth: "330px",
                margin: "0 auto",
                lineHeight: "1.8",
              }}
            >
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>

          <div className="col-4">
            <img
              src="media/images/tijori.svg"
              alt="Tijori"
              className="img-fluid mb-4"
              style={{ maxWidth: "330px" }}
            />
            <p
              className="text-muted"
              style={{
                maxWidth: "330px",
                margin: "0 auto",
                lineHeight: "1.8",
              }}
            >
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>

        <div className="row" style={{ marginTop: "40px" }}>
          <div className="col-4">
            <img
              src="media/images/streakLogo.png"
              alt="Streak"
              className="img-fluid mb-4"
              style={{ maxWidth: "300px" }}
            />
            <p
              className="text-muted"
              style={{
                maxWidth: "330px",
                margin: "0 auto",
                lineHeight: "1.8",
              }}
            >
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>

          <div className="col-4">
            <img
              src="media/images/smallcaseLogo.png"
              alt="Smallcase"
              className="img-fluid mb-4"
              style={{ maxWidth: "260px" }}
            />
            <p
              className="text-muted"
              style={{
                maxWidth: "330px",
                margin: "0 auto",
                lineHeight: "1.8",
              }}
            >
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>

          <div className="col-4">
            <img
              src="media/images/dittoLogo.png"
              alt="Ditto"
              className="img-fluid mb-4"
              style={{ maxWidth: "270px" }}
            />
            <p
              className="text-muted"
              style={{
                maxWidth: "330px",
                margin: "0 auto",
                lineHeight: "1.8",
              }}
            >
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>

        <div className="mt-5">
          <Link to="/signup">
            <button
              className="btn btn-primary px-5 py-2"
              style={{ fontSize: "1.2rem" }}
            >
              Sign up for free
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Universe;